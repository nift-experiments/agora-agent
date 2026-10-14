import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manage connections",
  description: "Create, inspect, and destroy RTC connections using the Connection ID mechanism."
};
export let _markdown = `

IoT SDK identifies each RTC connection with a connection ID (\`connection_id_t\`). You create a connection before joining a channel, use the connection ID to scope every subsequent call (join, send data, mute, leave) to that connection, and destroy the connection when you are done with it. This mechanism lets a single device manage multiple independent connections at once, for example to [stream to multiple channels or push multiple streams to a single channel](multi-channel-streaming.mdx).

This page shows you how to create, inspect, and destroy connections in your IoT SDK app.

## Prerequisites [#prerequisites]

In order to follow this procedure you must have:

* Implemented the basic IoT SDK functionality. See [Build from scratch](../../build-from-scratch.mdx).

## Create a connection [#create-a-connection]

Call \`agora_rtc_create_connection\` after you initialize the engine and before you join a channel:

\`\`\`c
// Create a connection
rval = agora_rtc_create_connection(&g_conn_id);
if (rval < 0) {
    printf("Failed to create connection, reason: %s\\n", agora_rtc_err_2_str(rval));
    return -1;
}
\`\`\`

Use \`g_conn_id\` in every subsequent call that is scoped to this connection, such as \`agora_rtc_join_channel\`, \`agora_rtc_send_audio_data\`, \`agora_rtc_send_video_data\`, \`agora_rtc_mute_local_audio\`, and \`agora_rtc_leave_channel\`.

## Inspect connection info [#inspect-connection-info]

Call \`agora_rtc_get_connection_info\` to retrieve details about an active connection, such as the channel it is joined to. This example logs the channel name when the connection successfully joins a channel:

\`\`\`c
static void __on_join_channel_success(connection_id_t conn_id, uint32_t uid, int elapsed) {
    g_connected_flag = true;
    connection_info_t conn_info = {0};
    agora_rtc_get_connection_info(g_conn_id, &conn_info);
    printf("[conn-%u] Join the channel %s successfully, uid %u elapsed %d ms\\n", conn_id, conn_info.channel_name, uid, elapsed);
}
\`\`\`

## Destroy a connection [#destroy-a-connection]

When you are done with a connection, typically when the app shuts down or leaves a channel for good, leave the channel and then destroy the connection to release its resources:

\`\`\`c
agora_rtc_leave_channel(g_conn_id);
agora_rtc_destroy_connection(g_conn_id);
agora_rtc_fini();
\`\`\`

## Reference [#reference]

### API reference [#api-reference]

* [agora\\_rtc\\_create\\_connection](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html)
* [agora\\_rtc\\_get\\_connection\\_info](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html)
* [agora\\_rtc\\_destroy\\_connection](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "IoT SDK identifies each RTC connection with a connection ID (`connection_id_t`). You create a connection before joining a channel, use the connection ID to scope every subsequent call (join, send data, mute, leave) to that connection, and destroy the connection when you are done with it. This mechanism lets a single device manage multiple independent connections at once, for example to stream to multiple channels or push multiple streams to a single channel."
  }, {
    heading: undefined,
    content: "This page shows you how to create, inspect, and destroy connections in your IoT SDK app."
  }, {
    heading: "prerequisites",
    content: "In order to follow this procedure you must have:"
  }, {
    heading: "prerequisites",
    content: "Implemented the basic IoT SDK functionality. See Build from scratch."
  }, {
    heading: "create-a-connection",
    content: "Call `agora_rtc_create_connection` after you initialize the engine and before you join a channel:"
  }, {
    heading: "create-a-connection",
    content: "Use `g_conn_id` in every subsequent call that is scoped to this connection, such as `agora_rtc_join_channel`, `agora_rtc_send_audio_data`, `agora_rtc_send_video_data`, `agora_rtc_mute_local_audio`, and `agora_rtc_leave_channel`."
  }, {
    heading: "inspect-connection-info",
    content: "Call `agora_rtc_get_connection_info` to retrieve details about an active connection, such as the channel it is joined to. This example logs the channel name when the connection successfully joins a channel:"
  }, {
    heading: "destroy-a-connection",
    content: "When you are done with a connection, typically when the app shuts down or leaves a channel for good, leave the channel and then destroy the connection to release its resources:"
  }, {
    heading: "api-reference",
    content: "agora\\_rtc\\_create\\_connection"
  }, {
    heading: "api-reference",
    content: "agora\\_rtc\\_get\\_connection\\_info"
  }, {
    heading: "api-reference",
    content: "agora\\_rtc\\_destroy\\_connection"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "create-a-connection",
    content: "Create a connection"
  }, {
    id: "inspect-connection-info",
    content: "Inspect connection info"
  }, {
    id: "destroy-a-connection",
    content: "Destroy a connection"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#create-a-connection",
  title: _jsx(_Fragment, {
    children: "Create a connection"
  })
}, {
  depth: 2,
  url: "#inspect-connection-info",
  title: _jsx(_Fragment, {
    children: "Inspect connection info"
  })
}, {
  depth: 2,
  url: "#destroy-a-connection",
  title: _jsx(_Fragment, {
    children: "Destroy a connection"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
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
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["IoT SDK identifies each RTC connection with a connection ID (", _jsx(_components.code, {
        children: "connection_id_t"
      }), "). You create a connection before joining a channel, use the connection ID to scope every subsequent call (join, send data, mute, leave) to that connection, and destroy the connection when you are done with it. This mechanism lets a single device manage multiple independent connections at once, for example to ", _jsx(_components.a, {
        href: "multi-channel-streaming.mdx",
        children: "stream to multiple channels or push multiple streams to a single channel"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "This page shows you how to create, inspect, and destroy connections in your IoT SDK app."
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
        children: ["Implemented the basic IoT SDK functionality. See ", _jsx(_components.a, {
          href: "../../build-from-scratch.mdx",
          children: "Build from scratch"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "create-a-connection",
      children: "Create a connection"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "agora_rtc_create_connection"
      }), " after you initialize the engine and before you join a channel:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Create a connection"
            })
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
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "g_conn_id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
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
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "g_conn_id"
      }), " in every subsequent call that is scoped to this connection, such as ", _jsx(_components.code, {
        children: "agora_rtc_join_channel"
      }), ", ", _jsx(_components.code, {
        children: "agora_rtc_send_audio_data"
      }), ", ", _jsx(_components.code, {
        children: "agora_rtc_send_video_data"
      }), ", ", _jsx(_components.code, {
        children: "agora_rtc_mute_local_audio"
      }), ", and ", _jsx(_components.code, {
        children: "agora_rtc_leave_channel"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "inspect-connection-info",
      children: "Inspect connection info"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "agora_rtc_get_connection_info"
      }), " to retrieve details about an active connection, such as the channel it is joined to. This example logs the channel name when the connection successfully joins a channel:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z" fill="currentColor" /></svg>',
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
              children: " __on_join_channel_success"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " elapsed"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    g_connected_flag "
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "    connection_info_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " conn_info "
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
              children: " {"
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
              children: "};"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    agora_rtc_get_connection_info"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(g_conn_id, "
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
              children: "conn_info);"
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
              children: '"[conn-'
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
              children: "] Join the channel "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " successfully, uid "
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
              children: " elapsed "
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
              children: " ms"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\\n"
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
              children: ", conn_id, conn_info.channel_name, uid, elapsed);"
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
      id: "destroy-a-connection",
      children: "Destroy a connection"
    }), `
`, _jsx(_components.p, {
      children: "When you are done with a connection, typically when the app shuts down or leaves a channel for good, leave the channel and then destroy the connection to release its resources:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_leave_channel"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(g_conn_id);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_destroy_connection"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(g_conn_id);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_fini"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.h3, {
      id: "api-reference",
      children: "API reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html",
          children: "agora_rtc_create_connection"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html",
          children: "agora_rtc_get_connection_info"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html",
          children: "agora_rtc_destroy_connection"
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
