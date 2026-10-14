import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Send messages through the RDT channel",
  description: "Send and receive reliable control and device messages using RDT."
};
export let _markdown = `

Starting with v1.9.2, IoT SDK adds Reliable Data Transmission (RDT), an end-to-end reliable messaging channel built on top of the RTC connection that runs independently from your audio and video streams. RDT delivers messages reliably and in order, so use it for content that must arrive complete and intact, such as device commands, status updates, or file transfers and downloads, rather than the best-effort delivery used for media data.

## Understand the tech [#understand-the-tech]

Within a single RTC connection, you can simultaneously send audio data, video data, and RDT messages.

The following figure shows the RDT connection lifecycle, and how the RDT channel state determines which messages you can send:

![RDT messaging call flow](/temp/iot-rdt-messaging.svg)

RDT supports two message types with different priority and size limits:

| Type              | Priority                                 | Limits                                                                      |
| ----------------- | ---------------------------------------- | --------------------------------------------------------------------------- |
| \`RDT_STREAM_CMD\`  | High. Not subject to congestion control. | Up to 100 packets per second; 256 bytes maximum packet size.                |
| \`RDT_STREAM_DATA\` | Lower. Subject to congestion control.    | Up to 4 Mbps per second; 128 KB maximum packet size. No packet-count limit. |

## Prerequisites [#prerequisites]

In order to follow this procedure you must have:

* Implemented the basic IoT SDK functionality and created a connection. See [Build from scratch](../../build-from-scratch.mdx) and [Manage connections](../manage-connections-and-quality/connection-management.mdx).

## Enable RDT [#enable-rdt]

RDT connections are established per remote user, based on the \`on_user_joined\` and \`on_user_offline\` callbacks. Only users with the broadcaster role trigger these callbacks. IoT SDK sets every user as a broadcaster by default, so this usually needs no extra configuration, but if you use IoT SDK alongside another SDK, such as RTC SDK, make sure the user's role is also set to broadcaster in that other SDK.

IoT SDK establishes RDT connections automatically, so you only need to set \`enable_rdt\` to \`true\` in \`rtc_channel_options_t\` before you call \`agora_rtc_join_channel\` to use RDT. Set \`enable_rdt\` to \`false\` if you don't want to use RDT at all.

\`\`\`cpp
int rval;
connection_id_t conn_id = 0;

rval = agora_rtc_create_connection(&conn_id);
if (rval < 0) {
    printf("Failed to create connection, reason: %s\\n", agora_rtc_err_2_str(rval));
    return -1;
}

rtc_channel_options_t channel_opt = { 0 };
channel_opt.enable_rdt = true;

rval = agora_rtc_join_channel(conn_id, "channel-xxx", uid, token, &channel_opt);
if (rval < 0) {
    printf("Failed to join channel, reason: %s\\n", agora_rtc_err_2_str(rval));
    return -1;
}
\`\`\`

### Control how RDT connections are established [#control-how-rdt-connections-are-established]

Use \`auto_connect_rdt\` in \`rtc_channel_options_t\` to control whether IoT SDK proactively establishes an RDT connection with each remote user:

* \`auto_connect_rdt = true\`: IoT SDK automatically establishes an RDT connection with a remote user when it receives \`on_user_joined\` for that user, and automatically disconnects it when it receives \`on_user_offline\`.
* \`auto_connect_rdt = false\`: IoT SDK doesn't proactively establish RDT connections, but still accepts incoming RDT connection requests from remote users.

\`\`\`cpp
rtc_channel_options_t channel_opt = { 0 };
channel_opt.enable_rdt = true;
// Configure whether to proactively establish RDT connections.
// true: establish; false: don't establish (IoT SDK still accepts incoming requests)
channel_opt.auto_connect_rdt = true;
\`\`\`

Set \`auto_connect_rdt\` based on your use case. For example:

* In IoT scenarios such as smart cameras and doorbells, you typically want every device to exchange RDT messages with every client, but you don't want clients to exchange RDT messages with each other. Set \`auto_connect_rdt = true\` when a device joins the channel, so it establishes RDT connections with each client, and set \`auto_connect_rdt = false\` when a client joins the channel, so clients don't establish RDT connections with each other.
* In office scenarios such as video conferencing and real-time collaboration, you typically want every participant to exchange data with every other participant. Set \`auto_connect_rdt = true\` for all users, so they establish RDT connections with each other.

## Check RDT channel state [#check-rdt-channel-state]

Handle the \`on_rdt_state\` callback to track changes in RDT channel availability for a peer:

\`\`\`cpp
rdt_state_e g_rdt_state = RDT_STATE_CLOSED;

static void __on_rdt_state(connection_id_t conn_id, uint32_t uid, rdt_state_e state)
{
    g_rdt_state = state;
}
\`\`\`

The callback reports one of the following states:

| State               | Meaning                                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`RDT_STATE_CLOSED\`  | The RDT channel is closed. You can't send or receive messages.                                                                                                                                                                          |
| \`RDT_STATE_OPENED\`  | The RDT channel is open. You can send and receive both message types.                                                                                                                                                                   |
| \`RDT_STATE_BLOCKED\` | The send buffer is full. You can still send \`RDT_STREAM_CMD\` messages, but not \`RDT_STREAM_DATA\` messages.                                                                                                                              |
| \`RDT_STATE_PENDING\` | IoT SDK is reconnecting the RDT channel. If reconnection succeeds, the state changes to \`RDT_STATE_OPENED\` and buffered data is preserved. If reconnection fails, the state changes to \`RDT_STATE_CLOSED\` and buffered data is cleared. |
| \`RDT_STATE_BROKEN\`  | The RDT channel is broken. IoT SDK attempts to reconnect, but clears any buffered data regardless of whether reconnection succeeds.                                                                                                     |

To avoid losing data that's still in transit, call \`agora_rtc_get_rdt_status_info\` to check the send buffer length (\`send_queue_size\`) before you send a new message.

## Send a message [#send-a-message]

Check the RDT channel state before you send, then call \`agora_rtc_send_rdt_msg\` with the connection ID, the peer's user ID, the message type, and the payload.

To send a high-priority control message:

\`\`\`cpp
if (g_rdt_state == RDT_STATE_OPENED || g_rdt_state == RDT_STATE_BLOCKED) {
    uint8_t cmd[256] = { 0 };
    int rval = agora_rtc_send_rdt_msg(conn_id, peer_uid, RDT_STREAM_CMD, cmd, sizeof(cmd));
    if (rval < 0) {
        printf("Failed to send RDT message, reason: %s\\n", agora_rtc_err_2_str(rval));
        return -1;
    }
}
\`\`\`

To send a lower-priority data message:

\`\`\`cpp
if (g_rdt_state == RDT_STATE_OPENED) {
    uint8_t msg[1024] = { 0 };
    int rval = agora_rtc_send_rdt_msg(conn_id, peer_uid, RDT_STREAM_DATA, msg, sizeof(msg));
    if (rval < 0) {
        printf("Failed to send RDT message, reason: %s\\n", agora_rtc_err_2_str(rval));
        return -1;
    }
}
\`\`\`

\`peer_uid\` is the user ID of the remote user you're sending to. Use the \`on_user_joined\` and \`on_user_offline\` callbacks to track the user IDs of remote users you can send RDT messages to.

If \`agora_rtc_send_rdt_msg\` fails, see [Error codes](#error-codes) for the possible reasons.

## Receive messages [#receive-messages]

Handle the \`on_rdt_msg\` callback to receive incoming RDT messages:

\`\`\`cpp
static void __on_rdt_msg(connection_id_t conn_id, uint32_t uid, rdt_stream_type_e type, const void *msg, size_t len)
{
    printf("Received RDT message from uid=%u type=%d len=%zu\\n", uid, type, len);
}
\`\`\`

## Disconnect RDT [#disconnect-rdt]

When you leave the RTC channel, IoT SDK automatically disconnects every RDT connection created within that channel.

To avoid losing data that's still in transit, call \`agora_rtc_get_rdt_status_info\` to check that \`send_queue_size\` is \`0\`, confirming the remote user received all buffered messages, before you leave the channel.

## Sample code [#sample-code]

The IoT SDK package includes complete RDT examples. See the full implementation in \`hello_rdt.c\` and \`hello_rdt_multi.c\`:

\`\`\`
├── agora_rtsa_sdk  # Agora SDK libraries and header files
└── example
    └── hello_rdt
        ├── hello_rdt.c        # Send and receive RDT messages in a single channel
        └── hello_rdt_multi.c  # Send and receive RDT messages across multiple channels
\`\`\`

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product.

### Error codes [#error-codes]

\`agora_rtc_send_rdt_msg\` returns the following error codes when a message fails to send:

* \`ERR_RDT_USER_NOT_EXIST\` (600): the peer user doesn't exist in the channel.
* \`ERR_RDT_USER_NOT_READY\` (601): the RDT channel isn't established yet. Wait for \`RDT_STATE_OPENED\`.
* \`ERR_RDT_DATA_BLOCKED\` (602): the send buffer is full. Wait for \`RDT_STATE_OPENED\`.
* \`ERR_RDT_CMD_EXCEED_LIMIT\` (603): you've exceeded the 100 packets-per-second limit for \`RDT_STREAM_CMD\` messages.
* \`ERR_RDT_DATA_EXCEED_LIMIT\` (604): you've exceeded the 4 Mbps per second limit for \`RDT_STREAM_DATA\` messages.

See the [full error code reference](../../reference/error-codes.mdx#rdt-related-errors) for more error codes.

### API reference [#api-reference]

* [agora\\_rtc\\_join\\_channel](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a6c29ff27f04623526a164cf6e5dcd738)
* [agora\\_rtc\\_send\\_rdt\\_msg](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html)
* [agora\\_rtc\\_get\\_rdt\\_status\\_info](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html)
* [on\\_rdt\\_state](https://api-ref.agora.io/en/iot-sdk/linux/1.x/structagora__rtc__event__handler__t.html)
* [on\\_rdt\\_msg](https://api-ref.agora.io/en/iot-sdk/linux/1.x/structagora__rtc__event__handler__t.html)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Starting with v1.9.2, IoT SDK adds Reliable Data Transmission (RDT), an end-to-end reliable messaging channel built on top of the RTC connection that runs independently from your audio and video streams. RDT delivers messages reliably and in order, so use it for content that must arrive complete and intact, such as device commands, status updates, or file transfers and downloads, rather than the best-effort delivery used for media data."
  }, {
    heading: "understand-the-tech",
    content: "Within a single RTC connection, you can simultaneously send audio data, video data, and RDT messages."
  }, {
    heading: "understand-the-tech",
    content: "The following figure shows the RDT connection lifecycle, and how the RDT channel state determines which messages you can send:"
  }, {
    heading: "understand-the-tech",
    content: "RDT supports two message types with different priority and size limits:"
  }, {
    heading: "understand-the-tech",
    content: "Type"
  }, {
    heading: "understand-the-tech",
    content: "Priority"
  }, {
    heading: "understand-the-tech",
    content: "Limits"
  }, {
    heading: "understand-the-tech",
    content: "`RDT_STREAM_CMD`"
  }, {
    heading: "understand-the-tech",
    content: "High. Not subject to congestion control."
  }, {
    heading: "understand-the-tech",
    content: "Up to 100 packets per second; 256 bytes maximum packet size."
  }, {
    heading: "understand-the-tech",
    content: "`RDT_STREAM_DATA`"
  }, {
    heading: "understand-the-tech",
    content: "Lower. Subject to congestion control."
  }, {
    heading: "understand-the-tech",
    content: "Up to 4 Mbps per second; 128 KB maximum packet size. No packet-count limit."
  }, {
    heading: "prerequisites",
    content: "In order to follow this procedure you must have:"
  }, {
    heading: "prerequisites",
    content: "Implemented the basic IoT SDK functionality and created a connection. See Build from scratch and Manage connections."
  }, {
    heading: "enable-rdt",
    content: "RDT connections are established per remote user, based on the `on_user_joined` and `on_user_offline` callbacks. Only users with the broadcaster role trigger these callbacks. IoT SDK sets every user as a broadcaster by default, so this usually needs no extra configuration, but if you use IoT SDK alongside another SDK, such as RTC SDK, make sure the user's role is also set to broadcaster in that other SDK."
  }, {
    heading: "enable-rdt",
    content: "IoT SDK establishes RDT connections automatically, so you only need to set `enable_rdt` to `true` in `rtc_channel_options_t` before you call `agora_rtc_join_channel` to use RDT. Set `enable_rdt` to `false` if you don't want to use RDT at all."
  }, {
    heading: "control-how-rdt-connections-are-established",
    content: "Use `auto_connect_rdt` in `rtc_channel_options_t` to control whether IoT SDK proactively establishes an RDT connection with each remote user:"
  }, {
    heading: "control-how-rdt-connections-are-established",
    content: "`auto_connect_rdt = true`: IoT SDK automatically establishes an RDT connection with a remote user when it receives `on_user_joined` for that user, and automatically disconnects it when it receives `on_user_offline`."
  }, {
    heading: "control-how-rdt-connections-are-established",
    content: "`auto_connect_rdt = false`: IoT SDK doesn't proactively establish RDT connections, but still accepts incoming RDT connection requests from remote users."
  }, {
    heading: "control-how-rdt-connections-are-established",
    content: "Set `auto_connect_rdt` based on your use case. For example:"
  }, {
    heading: "control-how-rdt-connections-are-established",
    content: "In IoT scenarios such as smart cameras and doorbells, you typically want every device to exchange RDT messages with every client, but you don't want clients to exchange RDT messages with each other. Set `auto_connect_rdt = true` when a device joins the channel, so it establishes RDT connections with each client, and set `auto_connect_rdt = false` when a client joins the channel, so clients don't establish RDT connections with each other."
  }, {
    heading: "control-how-rdt-connections-are-established",
    content: "In office scenarios such as video conferencing and real-time collaboration, you typically want every participant to exchange data with every other participant. Set `auto_connect_rdt = true` for all users, so they establish RDT connections with each other."
  }, {
    heading: "check-rdt-channel-state",
    content: "Handle the `on_rdt_state` callback to track changes in RDT channel availability for a peer:"
  }, {
    heading: "check-rdt-channel-state",
    content: "The callback reports one of the following states:"
  }, {
    heading: "check-rdt-channel-state",
    content: "State"
  }, {
    heading: "check-rdt-channel-state",
    content: "Meaning"
  }, {
    heading: "check-rdt-channel-state",
    content: "`RDT_STATE_CLOSED`"
  }, {
    heading: "check-rdt-channel-state",
    content: "The RDT channel is closed. You can't send or receive messages."
  }, {
    heading: "check-rdt-channel-state",
    content: "`RDT_STATE_OPENED`"
  }, {
    heading: "check-rdt-channel-state",
    content: "The RDT channel is open. You can send and receive both message types."
  }, {
    heading: "check-rdt-channel-state",
    content: "`RDT_STATE_BLOCKED`"
  }, {
    heading: "check-rdt-channel-state",
    content: "The send buffer is full. You can still send `RDT_STREAM_CMD` messages, but not `RDT_STREAM_DATA` messages."
  }, {
    heading: "check-rdt-channel-state",
    content: "`RDT_STATE_PENDING`"
  }, {
    heading: "check-rdt-channel-state",
    content: "IoT SDK is reconnecting the RDT channel. If reconnection succeeds, the state changes to `RDT_STATE_OPENED` and buffered data is preserved. If reconnection fails, the state changes to `RDT_STATE_CLOSED` and buffered data is cleared."
  }, {
    heading: "check-rdt-channel-state",
    content: "`RDT_STATE_BROKEN`"
  }, {
    heading: "check-rdt-channel-state",
    content: "The RDT channel is broken. IoT SDK attempts to reconnect, but clears any buffered data regardless of whether reconnection succeeds."
  }, {
    heading: "check-rdt-channel-state",
    content: "To avoid losing data that's still in transit, call `agora_rtc_get_rdt_status_info` to check the send buffer length (`send_queue_size`) before you send a new message."
  }, {
    heading: "send-a-message",
    content: "Check the RDT channel state before you send, then call `agora_rtc_send_rdt_msg` with the connection ID, the peer's user ID, the message type, and the payload."
  }, {
    heading: "send-a-message",
    content: "To send a high-priority control message:"
  }, {
    heading: "send-a-message",
    content: "To send a lower-priority data message:"
  }, {
    heading: "send-a-message",
    content: "`peer_uid` is the user ID of the remote user you're sending to. Use the `on_user_joined` and `on_user_offline` callbacks to track the user IDs of remote users you can send RDT messages to."
  }, {
    heading: "send-a-message",
    content: "If `agora_rtc_send_rdt_msg` fails, see Error codes for the possible reasons."
  }, {
    heading: "receive-messages",
    content: "Handle the `on_rdt_msg` callback to receive incoming RDT messages:"
  }, {
    heading: "disconnect-rdt",
    content: "When you leave the RTC channel, IoT SDK automatically disconnects every RDT connection created within that channel."
  }, {
    heading: "disconnect-rdt",
    content: "To avoid losing data that's still in transit, call `agora_rtc_get_rdt_status_info` to check that `send_queue_size` is `0`, confirming the remote user received all buffered messages, before you leave the channel."
  }, {
    heading: "sample-code",
    content: "The IoT SDK package includes complete RDT examples. See the full implementation in `hello_rdt.c` and `hello_rdt_multi.c`:"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
  }, {
    heading: "error-codes",
    content: "`agora_rtc_send_rdt_msg` returns the following error codes when a message fails to send:"
  }, {
    heading: "error-codes",
    content: "`ERR_RDT_USER_NOT_EXIST` (600): the peer user doesn't exist in the channel."
  }, {
    heading: "error-codes",
    content: "`ERR_RDT_USER_NOT_READY` (601): the RDT channel isn't established yet. Wait for `RDT_STATE_OPENED`."
  }, {
    heading: "error-codes",
    content: "`ERR_RDT_DATA_BLOCKED` (602): the send buffer is full. Wait for `RDT_STATE_OPENED`."
  }, {
    heading: "error-codes",
    content: "`ERR_RDT_CMD_EXCEED_LIMIT` (603): you've exceeded the 100 packets-per-second limit for `RDT_STREAM_CMD` messages."
  }, {
    heading: "error-codes",
    content: "`ERR_RDT_DATA_EXCEED_LIMIT` (604): you've exceeded the 4 Mbps per second limit for `RDT_STREAM_DATA` messages."
  }, {
    heading: "error-codes",
    content: "See the full error code reference for more error codes."
  }, {
    heading: "api-reference",
    content: "agora\\_rtc\\_join\\_channel"
  }, {
    heading: "api-reference",
    content: "agora\\_rtc\\_send\\_rdt\\_msg"
  }, {
    heading: "api-reference",
    content: "agora\\_rtc\\_get\\_rdt\\_status\\_info"
  }, {
    heading: "api-reference",
    content: "on\\_rdt\\_state"
  }, {
    heading: "api-reference",
    content: "on\\_rdt\\_msg"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-rdt",
    content: "Enable RDT"
  }, {
    id: "control-how-rdt-connections-are-established",
    content: "Control how RDT connections are established"
  }, {
    id: "check-rdt-channel-state",
    content: "Check RDT channel state"
  }, {
    id: "send-a-message",
    content: "Send a message"
  }, {
    id: "receive-messages",
    content: "Receive messages"
  }, {
    id: "disconnect-rdt",
    content: "Disconnect RDT"
  }, {
    id: "sample-code",
    content: "Sample code"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "error-codes",
    content: "Error codes"
  }, {
    id: "api-reference",
    content: "API reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#enable-rdt",
  title: _jsx(_Fragment, {
    children: "Enable RDT"
  })
}, {
  depth: 3,
  url: "#control-how-rdt-connections-are-established",
  title: _jsx(_Fragment, {
    children: "Control how RDT connections are established"
  })
}, {
  depth: 2,
  url: "#check-rdt-channel-state",
  title: _jsx(_Fragment, {
    children: "Check RDT channel state"
  })
}, {
  depth: 2,
  url: "#send-a-message",
  title: _jsx(_Fragment, {
    children: "Send a message"
  })
}, {
  depth: 2,
  url: "#receive-messages",
  title: _jsx(_Fragment, {
    children: "Receive messages"
  })
}, {
  depth: 2,
  url: "#disconnect-rdt",
  title: _jsx(_Fragment, {
    children: "Disconnect RDT"
  })
}, {
  depth: 2,
  url: "#sample-code",
  title: _jsx(_Fragment, {
    children: "Sample code"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#error-codes",
  title: _jsx(_Fragment, {
    children: "Error codes"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Starting with v1.9.2, IoT SDK adds Reliable Data Transmission (RDT), an end-to-end reliable messaging channel built on top of the RTC connection that runs independently from your audio and video streams. RDT delivers messages reliably and in order, so use it for content that must arrive complete and intact, such as device commands, status updates, or file transfers and downloads, rather than the best-effort delivery used for media data."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "Within a single RTC connection, you can simultaneously send audio data, video data, and RDT messages."
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows the RDT connection lifecycle, and how the RDT channel state determines which messages you can send:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "/temp/iot-rdt-messaging.svg",
        alt: "RDT messaging call flow",
        width: "741",
        height: "510"
      })
    }), `
`, _jsx(_components.p, {
      children: "RDT supports two message types with different priority and size limits:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Priority"
          }), _jsx(_components.th, {
            children: "Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RDT_STREAM_CMD"
            })
          }), _jsx(_components.td, {
            children: "High. Not subject to congestion control."
          }), _jsx(_components.td, {
            children: "Up to 100 packets per second; 256 bytes maximum packet size."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RDT_STREAM_DATA"
            })
          }), _jsx(_components.td, {
            children: "Lower. Subject to congestion control."
          }), _jsx(_components.td, {
            children: "Up to 4 Mbps per second; 128 KB maximum packet size. No packet-count limit."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "In order to follow this procedure you must have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Implemented the basic IoT SDK functionality and created a connection. See ", _jsx(_components.a, {
          href: "../../build-from-scratch.mdx",
          children: "Build from scratch"
        }), " and ", _jsx(_components.a, {
          href: "../manage-connections-and-quality/connection-management.mdx",
          children: "Manage connections"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-rdt",
      children: "Enable RDT"
    }), `
`, _jsxs(_components.p, {
      children: ["RDT connections are established per remote user, based on the ", _jsx(_components.code, {
        children: "on_user_joined"
      }), " and ", _jsx(_components.code, {
        children: "on_user_offline"
      }), " callbacks. Only users with the broadcaster role trigger these callbacks. IoT SDK sets every user as a broadcaster by default, so this usually needs no extra configuration, but if you use IoT SDK alongside another SDK, such as RTC SDK, make sure the user's role is also set to broadcaster in that other SDK."]
    }), `
`, _jsxs(_components.p, {
      children: ["IoT SDK establishes RDT connections automatically, so you only need to set ", _jsx(_components.code, {
        children: "enable_rdt"
      }), " to ", _jsx(_components.code, {
        children: "true"
      }), " in ", _jsx(_components.code, {
        children: "rtc_channel_options_t"
      }), " before you call ", _jsx(_components.code, {
        children: "agora_rtc_join_channel"
      }), " to use RDT. Set ", _jsx(_components.code, {
        children: "enable_rdt"
      }), " to ", _jsx(_components.code, {
        children: "false"
      }), " if you don't want to use RDT at all."]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rval;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "connection_id_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " conn_id "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " agora_rtc_create_connection"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "conn_id);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    printf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Failed to create connection, reason: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%s\\n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_err_2_str"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(rval));"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "rtc_channel_options_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " channel_opt "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " };"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_opt.enable_rdt "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " agora_rtc_join_channel"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(conn_id, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"channel-xxx"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", uid, token, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_opt);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    printf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Failed to join channel, reason: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%s\\n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_err_2_str"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(rval));"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "control-how-rdt-connections-are-established",
      children: "Control how RDT connections are established"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "auto_connect_rdt"
      }), " in ", _jsx(_components.code, {
        children: "rtc_channel_options_t"
      }), " to control whether IoT SDK proactively establishes an RDT connection with each remote user:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "auto_connect_rdt = true"
        }), ": IoT SDK automatically establishes an RDT connection with a remote user when it receives ", _jsx(_components.code, {
          children: "on_user_joined"
        }), " for that user, and automatically disconnects it when it receives ", _jsx(_components.code, {
          children: "on_user_offline"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "auto_connect_rdt = false"
        }), ": IoT SDK doesn't proactively establish RDT connections, but still accepts incoming RDT connection requests from remote users."]
      }), `
`]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "rtc_channel_options_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " channel_opt "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " };"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_opt.enable_rdt "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Configure whether to proactively establish RDT connections."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// true: establish; false: don't establish (IoT SDK still accepts incoming requests)"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_opt.auto_connect_rdt "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Set ", _jsx(_components.code, {
        children: "auto_connect_rdt"
      }), " based on your use case. For example:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In IoT scenarios such as smart cameras and doorbells, you typically want every device to exchange RDT messages with every client, but you don't want clients to exchange RDT messages with each other. Set ", _jsx(_components.code, {
          children: "auto_connect_rdt = true"
        }), " when a device joins the channel, so it establishes RDT connections with each client, and set ", _jsx(_components.code, {
          children: "auto_connect_rdt = false"
        }), " when a client joins the channel, so clients don't establish RDT connections with each other."]
      }), `
`, _jsxs(_components.li, {
        children: ["In office scenarios such as video conferencing and real-time collaboration, you typically want every participant to exchange data with every other participant. Set ", _jsx(_components.code, {
          children: "auto_connect_rdt = true"
        }), " for all users, so they establish RDT connections with each other."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "check-rdt-channel-state",
      children: "Check RDT channel state"
    }), `
`, _jsxs(_components.p, {
      children: ["Handle the ", _jsx(_components.code, {
        children: "on_rdt_state"
      }), " callback to track changes in RDT channel availability for a peer:"]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "rdt_state_e g_rdt_state "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RDT_STATE_CLOSED;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " __on_rdt_state"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "connection_id_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " conn_id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "uint32_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " uid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "rdt_state_e"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " state"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    g_rdt_state "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " state;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The callback reports one of the following states:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "State"
          }), _jsx(_components.th, {
            children: "Meaning"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RDT_STATE_CLOSED"
            })
          }), _jsx(_components.td, {
            children: "The RDT channel is closed. You can't send or receive messages."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RDT_STATE_OPENED"
            })
          }), _jsx(_components.td, {
            children: "The RDT channel is open. You can send and receive both message types."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RDT_STATE_BLOCKED"
            })
          }), _jsxs(_components.td, {
            children: ["The send buffer is full. You can still send ", _jsx(_components.code, {
              children: "RDT_STREAM_CMD"
            }), " messages, but not ", _jsx(_components.code, {
              children: "RDT_STREAM_DATA"
            }), " messages."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RDT_STATE_PENDING"
            })
          }), _jsxs(_components.td, {
            children: ["IoT SDK is reconnecting the RDT channel. If reconnection succeeds, the state changes to ", _jsx(_components.code, {
              children: "RDT_STATE_OPENED"
            }), " and buffered data is preserved. If reconnection fails, the state changes to ", _jsx(_components.code, {
              children: "RDT_STATE_CLOSED"
            }), " and buffered data is cleared."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RDT_STATE_BROKEN"
            })
          }), _jsx(_components.td, {
            children: "The RDT channel is broken. IoT SDK attempts to reconnect, but clears any buffered data regardless of whether reconnection succeeds."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["To avoid losing data that's still in transit, call ", _jsx(_components.code, {
        children: "agora_rtc_get_rdt_status_info"
      }), " to check the send buffer length (", _jsx(_components.code, {
        children: "send_queue_size"
      }), ") before you send a new message."]
    }), `
`, _jsx(_components.h2, {
      id: "send-a-message",
      children: "Send a message"
    }), `
`, _jsxs(_components.p, {
      children: ["Check the RDT channel state before you send, then call ", _jsx(_components.code, {
        children: "agora_rtc_send_rdt_msg"
      }), " with the connection ID, the peer's user ID, the message type, and the payload."]
    }), `
`, _jsx(_components.p, {
      children: "To send a high-priority control message:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (g_rdt_state "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RDT_STATE_OPENED "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " g_rdt_state "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RDT_STATE_BLOCKED) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    uint8_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " cmd["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "256"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " };"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " agora_rtc_send_rdt_msg"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(conn_id, peer_uid, RDT_STREAM_CMD, cmd, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "sizeof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(cmd));"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "        printf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Failed to send RDT message, reason: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%s\\n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_err_2_str"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(rval));"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "        return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "To send a lower-priority data message:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (g_rdt_state "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RDT_STATE_OPENED) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    uint8_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " msg["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1024"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " };"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " agora_rtc_send_rdt_msg"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(conn_id, peer_uid, RDT_STREAM_DATA, msg, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "sizeof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(msg));"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "        printf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Failed to send RDT message, reason: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%s\\n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_err_2_str"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(rval));"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "        return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "peer_uid"
      }), " is the user ID of the remote user you're sending to. Use the ", _jsx(_components.code, {
        children: "on_user_joined"
      }), " and ", _jsx(_components.code, {
        children: "on_user_offline"
      }), " callbacks to track the user IDs of remote users you can send RDT messages to."]
    }), `
`, _jsxs(_components.p, {
      children: ["If ", _jsx(_components.code, {
        children: "agora_rtc_send_rdt_msg"
      }), " fails, see ", _jsx(_components.a, {
        href: "#error-codes",
        children: "Error codes"
      }), " for the possible reasons."]
    }), `
`, _jsx(_components.h2, {
      id: "receive-messages",
      children: "Receive messages"
    }), `
`, _jsxs(_components.p, {
      children: ["Handle the ", _jsx(_components.code, {
        children: "on_rdt_msg"
      }), " callback to receive incoming RDT messages:"]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " __on_rdt_msg"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "connection_id_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " conn_id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "uint32_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " uid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "rdt_stream_type_e"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "msg"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "size_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " len"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    printf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Received RDT message from uid='
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%u"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " type="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%d"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " len="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%zu\\n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", uid, type, len);"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "disconnect-rdt",
      children: "Disconnect RDT"
    }), `
`, _jsx(_components.p, {
      children: "When you leave the RTC channel, IoT SDK automatically disconnects every RDT connection created within that channel."
    }), `
`, _jsxs(_components.p, {
      children: ["To avoid losing data that's still in transit, call ", _jsx(_components.code, {
        children: "agora_rtc_get_rdt_status_info"
      }), " to check that ", _jsx(_components.code, {
        children: "send_queue_size"
      }), " is ", _jsx(_components.code, {
        children: "0"
      }), ", confirming the remote user received all buffered messages, before you leave the channel."]
    }), `
`, _jsx(_components.h2, {
      id: "sample-code",
      children: "Sample code"
    }), `
`, _jsxs(_components.p, {
      children: ["The IoT SDK package includes complete RDT examples. See the full implementation in ", _jsx(_components.code, {
        children: "hello_rdt.c"
      }), " and ", _jsx(_components.code, {
        children: "hello_rdt_multi.c"
      }), ":"]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "├── agora_rtsa_sdk  # Agora SDK libraries and header files"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "└── example"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "    └── hello_rdt"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "        ├── hello_rdt.c        # Send and receive RDT messages in a single channel"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "        └── hello_rdt_multi.c  # Send and receive RDT messages across multiple channels"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
    }), `
`, _jsx(_components.h3, {
      id: "error-codes",
      children: "Error codes"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "agora_rtc_send_rdt_msg"
      }), " returns the following error codes when a message fails to send:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ERR_RDT_USER_NOT_EXIST"
        }), " (600): the peer user doesn't exist in the channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ERR_RDT_USER_NOT_READY"
        }), " (601): the RDT channel isn't established yet. Wait for ", _jsx(_components.code, {
          children: "RDT_STATE_OPENED"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ERR_RDT_DATA_BLOCKED"
        }), " (602): the send buffer is full. Wait for ", _jsx(_components.code, {
          children: "RDT_STATE_OPENED"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ERR_RDT_CMD_EXCEED_LIMIT"
        }), " (603): you've exceeded the 100 packets-per-second limit for ", _jsx(_components.code, {
          children: "RDT_STREAM_CMD"
        }), " messages."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ERR_RDT_DATA_EXCEED_LIMIT"
        }), " (604): you've exceeded the 4 Mbps per second limit for ", _jsx(_components.code, {
          children: "RDT_STREAM_DATA"
        }), " messages."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["See the ", _jsx(_components.a, {
        href: "../../reference/error-codes.mdx#rdt-related-errors",
        children: "full error code reference"
      }), " for more error codes."]
    }), `
`, _jsx(_components.h3, {
      id: "api-reference",
      children: "API reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a6c29ff27f04623526a164cf6e5dcd738",
          children: "agora_rtc_join_channel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html",
          children: "agora_rtc_send_rdt_msg"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html",
          children: "agora_rtc_get_rdt_status_info"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/structagora__rtc__event__handler__t.html",
          children: "on_rdt_state"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/structagora__rtc__event__handler__t.html",
          children: "on_rdt_msg"
        })
      }), `
`]
    })]
  });
}
export default function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
