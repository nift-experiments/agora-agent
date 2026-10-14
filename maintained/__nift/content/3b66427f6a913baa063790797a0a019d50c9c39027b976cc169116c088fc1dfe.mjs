import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Ban user privileges best practices",
  description: "Use the privilege banning API safely and reliably."
};
export let _markdown = `

This page describes how to use the privilege banning APIs, including usage principles, applicable use cases, inapplicable use cases, and exception handling best practices.

For endpoint details, see [Create a banning rule](create-ban-rule).

## Usage principles [#usage-principles]

Follow these principles when using privilege banning APIs:

* Do not make core business flows depend heavily on the privilege banning APIs.
* Do not let a REST API call failure affect core business flows.

## Applicable use cases [#applicable-use-cases]

### Ban violating users [#ban-violating-users]

Revoke a user's right to join channels based on UID. Set \`privileges\` to \`join_channel\`, fill in \`uid\`, leave \`cname\` and \`ip\` empty, and set \`time\` to a value other than \`0\`.

For example, when you cannot completely ban a violating user through your business signaling, you can ban the user by UID.

The banning API can be used as a fallback for your business signaling system, but consider whether unbanning is required. Unbanning users is usually not integrated into the main service process, to prevent possible call failures from affecting service operation.

* Correct usage: A user files a complaint and their account is manually unbanned.
* Incorrect usage: A user is automatically unbanned the next time they join the channel. If the API call fails, the user might be unable to join.

### Ban user audio and video privileges [#ban-user-audio-and-video-privileges]

Ban a user's audio or video publishing privilege based on UID. Set \`privileges\` to \`publish_audio\` or \`publish_video\`, fill in \`uid\`, leave \`cname\` and \`ip\` empty, and set \`time\` to a value other than \`0\`.

For example, you can prevent a microphone from being used after it is left unattended by the streaming user.

Banning publishing privileges through this API is a sensitive operation. Use it as a backup measure after the user has been notified of a failure to disconnect. Consider the impact that a delayed or failed unban might have on the user's ability to use the microphone again, and set the ban time as short as possible.

### Kick a user out of a channel [#kick-a-user-out-of-a-channel]

Kick a user out of a channel based on channel name and UID. This takes the user offline, after which they can log in again. Set \`privileges\` to \`join_channel\`, fill in \`cname\` and \`uid\`, leave \`ip\` empty, and set \`time\` to \`0\`.

For example, if a host logs in from two devices simultaneously, both devices stream with the same \`uid\`, causing an exception. You can use this API to kick both devices offline, after which one device can reconnect.

A one-time kick with \`time\` set to \`0\` is a safer way to use this API. When the kick request reaches the edge node, if the SDK is disconnected from the edge node, the one-time kick fails. If the SDK reconnects to the edge node after you kick the user, call this API again.

### Disband a channel [#disband-a-channel]

When streaming ends, kick all users out of the channel by channel name. Set \`privileges\` to \`join_channel\`, fill in \`cname\`, leave \`uid\` and \`ip\` empty, and set \`time\` to \`0\`.

<CalloutContainer type="warning">
  <CalloutDescription>
    Using \`cname\` for a banning rule is equivalent to destroying a channel. Make sure this behavior meets your business requirements.
  </CalloutDescription>
</CalloutContainer>

In this use case, use your own signaling to notify SDK clients to leave the channel after streaming ends. If business signaling cannot meet your needs, forced disbanding can be used as a fallback.

If the channel will not be reused, you can set a longer ban duration. If the channel will be reused after a certain period, make sure the channel ban ends before the next channel creation time. If the channel reuse time is unknown, kick users from the channel or set the ban time to 1 minute.

It is not recommended to set a long ban and call the unban API when the channel starts. If unbanning fails, users cannot join the channel.

### Ban illegal IPs [#ban-illegal-ips]

Prevent users from joining channels based on IP address. Set \`privileges\` to \`join_channel\`, fill in \`ip\`, leave \`cname\` and \`uid\` empty, and set \`time\` to a value other than \`0\`.

For example, when a service is attacked and you identify the source IP, you can use the \`ip\` field to ban it.

Using an IP address as a banning rule can affect other users accidentally, such as when multiple users share the same IP address.

## Inapplicable use cases [#inapplicable-use-cases]

| Use case                                                   | Details                                                                                                | Reason                                                                                                                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use the banning API for user microphone management         | Ban streaming privilege when the user is off the microphone, then restore it when the user is back on. | Real-time communication logic depends on the banning API. If unbanning fails, the user cannot send streams.                                                    |
| Use the banning API for user channel permission management | Ban the user's privilege to join when the user leaves, then restore it when they rejoin.               | Real-time communication logic depends on the banning API. If unbanning fails, the user cannot join. Use a one-time kick to ensure the user leaves the channel. |

<CalloutContainer type="info">
  <CalloutDescription>
    To better manage microphone seats and channel state, use RTC REST APIs together with Notifications. See [Channel event types](channel-event-types).
  </CalloutDescription>
</CalloutContainer>

## Best practices for call exceptions [#best-practices-for-call-exceptions]

* **Timeout settings**: Set the client request timeout to more than 20 seconds. The minimum recommended timeout is 5 seconds. When retrying a timed-out request, increase the timeout to improve the success rate.
* **Retry the request**: Decide whether to retry after failure and determine the number of retries based on your business logic. When a request returns an error code greater than or equal to \`500\`, or the request times out, retry with gradually increasing wait intervals.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page describes how to use the privilege banning APIs, including usage principles, applicable use cases, inapplicable use cases, and exception handling best practices."
  }, {
    heading: undefined,
    content: "For endpoint details, see Create a banning rule."
  }, {
    heading: "usage-principles",
    content: "Follow these principles when using privilege banning APIs:"
  }, {
    heading: "usage-principles",
    content: "Do not make core business flows depend heavily on the privilege banning APIs."
  }, {
    heading: "usage-principles",
    content: "Do not let a REST API call failure affect core business flows."
  }, {
    heading: "ban-violating-users",
    content: "Revoke a user's right to join channels based on UID. Set `privileges` to `join_channel`, fill in `uid`, leave `cname` and `ip` empty, and set `time` to a value other than `0`."
  }, {
    heading: "ban-violating-users",
    content: "For example, when you cannot completely ban a violating user through your business signaling, you can ban the user by UID."
  }, {
    heading: "ban-violating-users",
    content: "The banning API can be used as a fallback for your business signaling system, but consider whether unbanning is required. Unbanning users is usually not integrated into the main service process, to prevent possible call failures from affecting service operation."
  }, {
    heading: "ban-violating-users",
    content: "Correct usage: A user files a complaint and their account is manually unbanned."
  }, {
    heading: "ban-violating-users",
    content: "Incorrect usage: A user is automatically unbanned the next time they join the channel. If the API call fails, the user might be unable to join."
  }, {
    heading: "ban-user-audio-and-video-privileges",
    content: "Ban a user's audio or video publishing privilege based on UID. Set `privileges` to `publish_audio` or `publish_video`, fill in `uid`, leave `cname` and `ip` empty, and set `time` to a value other than `0`."
  }, {
    heading: "ban-user-audio-and-video-privileges",
    content: "For example, you can prevent a microphone from being used after it is left unattended by the streaming user."
  }, {
    heading: "ban-user-audio-and-video-privileges",
    content: "Banning publishing privileges through this API is a sensitive operation. Use it as a backup measure after the user has been notified of a failure to disconnect. Consider the impact that a delayed or failed unban might have on the user's ability to use the microphone again, and set the ban time as short as possible."
  }, {
    heading: "kick-a-user-out-of-a-channel",
    content: "Kick a user out of a channel based on channel name and UID. This takes the user offline, after which they can log in again. Set `privileges` to `join_channel`, fill in `cname` and `uid`, leave `ip` empty, and set `time` to `0`."
  }, {
    heading: "kick-a-user-out-of-a-channel",
    content: "For example, if a host logs in from two devices simultaneously, both devices stream with the same `uid`, causing an exception. You can use this API to kick both devices offline, after which one device can reconnect."
  }, {
    heading: "kick-a-user-out-of-a-channel",
    content: "A one-time kick with `time` set to `0` is a safer way to use this API. When the kick request reaches the edge node, if the SDK is disconnected from the edge node, the one-time kick fails. If the SDK reconnects to the edge node after you kick the user, call this API again."
  }, {
    heading: "disband-a-channel",
    content: "When streaming ends, kick all users out of the channel by channel name. Set `privileges` to `join_channel`, fill in `cname`, leave `uid` and `ip` empty, and set `time` to `0`."
  }, {
    heading: "disband-a-channel",
    content: "Using `cname` for a banning rule is equivalent to destroying a channel. Make sure this behavior meets your business requirements."
  }, {
    heading: "disband-a-channel",
    content: "In this use case, use your own signaling to notify SDK clients to leave the channel after streaming ends. If business signaling cannot meet your needs, forced disbanding can be used as a fallback."
  }, {
    heading: "disband-a-channel",
    content: "If the channel will not be reused, you can set a longer ban duration. If the channel will be reused after a certain period, make sure the channel ban ends before the next channel creation time. If the channel reuse time is unknown, kick users from the channel or set the ban time to 1 minute."
  }, {
    heading: "disband-a-channel",
    content: "It is not recommended to set a long ban and call the unban API when the channel starts. If unbanning fails, users cannot join the channel."
  }, {
    heading: "ban-illegal-ips",
    content: "Prevent users from joining channels based on IP address. Set `privileges` to `join_channel`, fill in `ip`, leave `cname` and `uid` empty, and set `time` to a value other than `0`."
  }, {
    heading: "ban-illegal-ips",
    content: "For example, when a service is attacked and you identify the source IP, you can use the `ip` field to ban it."
  }, {
    heading: "ban-illegal-ips",
    content: "Using an IP address as a banning rule can affect other users accidentally, such as when multiple users share the same IP address."
  }, {
    heading: "inapplicable-use-cases",
    content: "Use case"
  }, {
    heading: "inapplicable-use-cases",
    content: "Details"
  }, {
    heading: "inapplicable-use-cases",
    content: "Reason"
  }, {
    heading: "inapplicable-use-cases",
    content: "Use the banning API for user microphone management"
  }, {
    heading: "inapplicable-use-cases",
    content: "Ban streaming privilege when the user is off the microphone, then restore it when the user is back on."
  }, {
    heading: "inapplicable-use-cases",
    content: "Real-time communication logic depends on the banning API. If unbanning fails, the user cannot send streams."
  }, {
    heading: "inapplicable-use-cases",
    content: "Use the banning API for user channel permission management"
  }, {
    heading: "inapplicable-use-cases",
    content: "Ban the user's privilege to join when the user leaves, then restore it when they rejoin."
  }, {
    heading: "inapplicable-use-cases",
    content: "Real-time communication logic depends on the banning API. If unbanning fails, the user cannot join. Use a one-time kick to ensure the user leaves the channel."
  }, {
    heading: "inapplicable-use-cases",
    content: "To better manage microphone seats and channel state, use RTC REST APIs together with Notifications. See Channel event types."
  }, {
    heading: "best-practices-for-call-exceptions",
    content: "**Timeout settings**: Set the client request timeout to more than 20 seconds. The minimum recommended timeout is 5 seconds. When retrying a timed-out request, increase the timeout to improve the success rate."
  }, {
    heading: "best-practices-for-call-exceptions",
    content: "**Retry the request**: Decide whether to retry after failure and determine the number of retries based on your business logic. When a request returns an error code greater than or equal to `500`, or the request times out, retry with gradually increasing wait intervals."
  }],
  headings: [{
    id: "usage-principles",
    content: "Usage principles"
  }, {
    id: "applicable-use-cases",
    content: "Applicable use cases"
  }, {
    id: "ban-violating-users",
    content: "Ban violating users"
  }, {
    id: "ban-user-audio-and-video-privileges",
    content: "Ban user audio and video privileges"
  }, {
    id: "kick-a-user-out-of-a-channel",
    content: "Kick a user out of a channel"
  }, {
    id: "disband-a-channel",
    content: "Disband a channel"
  }, {
    id: "ban-illegal-ips",
    content: "Ban illegal IPs"
  }, {
    id: "inapplicable-use-cases",
    content: "Inapplicable use cases"
  }, {
    id: "best-practices-for-call-exceptions",
    content: "Best practices for call exceptions"
  }]
};
export let toc = [{
  depth: 2,
  url: "#usage-principles",
  title: _jsx(_Fragment, {
    children: "Usage principles"
  })
}, {
  depth: 2,
  url: "#applicable-use-cases",
  title: _jsx(_Fragment, {
    children: "Applicable use cases"
  })
}, {
  depth: 3,
  url: "#ban-violating-users",
  title: _jsx(_Fragment, {
    children: "Ban violating users"
  })
}, {
  depth: 3,
  url: "#ban-user-audio-and-video-privileges",
  title: _jsx(_Fragment, {
    children: "Ban user audio and video privileges"
  })
}, {
  depth: 3,
  url: "#kick-a-user-out-of-a-channel",
  title: _jsx(_Fragment, {
    children: "Kick a user out of a channel"
  })
}, {
  depth: 3,
  url: "#disband-a-channel",
  title: _jsx(_Fragment, {
    children: "Disband a channel"
  })
}, {
  depth: 3,
  url: "#ban-illegal-ips",
  title: _jsx(_Fragment, {
    children: "Ban illegal IPs"
  })
}, {
  depth: 2,
  url: "#inapplicable-use-cases",
  title: _jsx(_Fragment, {
    children: "Inapplicable use cases"
  })
}, {
  depth: 2,
  url: "#best-practices-for-call-exceptions",
  title: _jsx(_Fragment, {
    children: "Best practices for call exceptions"
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page describes how to use the privilege banning APIs, including usage principles, applicable use cases, inapplicable use cases, and exception handling best practices."
    }), `
`, _jsxs(_components.p, {
      children: ["For endpoint details, see ", _jsx(_components.a, {
        href: "create-ban-rule",
        children: "Create a banning rule"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "usage-principles",
      children: "Usage principles"
    }), `
`, _jsx(_components.p, {
      children: "Follow these principles when using privilege banning APIs:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Do not make core business flows depend heavily on the privilege banning APIs."
      }), `
`, _jsx(_components.li, {
        children: "Do not let a REST API call failure affect core business flows."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "applicable-use-cases",
      children: "Applicable use cases"
    }), `
`, _jsx(_components.h3, {
      id: "ban-violating-users",
      children: "Ban violating users"
    }), `
`, _jsxs(_components.p, {
      children: ["Revoke a user's right to join channels based on UID. Set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "join_channel"
      }), ", fill in ", _jsx(_components.code, {
        children: "uid"
      }), ", leave ", _jsx(_components.code, {
        children: "cname"
      }), " and ", _jsx(_components.code, {
        children: "ip"
      }), " empty, and set ", _jsx(_components.code, {
        children: "time"
      }), " to a value other than ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "For example, when you cannot completely ban a violating user through your business signaling, you can ban the user by UID."
    }), `
`, _jsx(_components.p, {
      children: "The banning API can be used as a fallback for your business signaling system, but consider whether unbanning is required. Unbanning users is usually not integrated into the main service process, to prevent possible call failures from affecting service operation."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Correct usage: A user files a complaint and their account is manually unbanned."
      }), `
`, _jsx(_components.li, {
        children: "Incorrect usage: A user is automatically unbanned the next time they join the channel. If the API call fails, the user might be unable to join."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "ban-user-audio-and-video-privileges",
      children: "Ban user audio and video privileges"
    }), `
`, _jsxs(_components.p, {
      children: ["Ban a user's audio or video publishing privilege based on UID. Set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "publish_audio"
      }), " or ", _jsx(_components.code, {
        children: "publish_video"
      }), ", fill in ", _jsx(_components.code, {
        children: "uid"
      }), ", leave ", _jsx(_components.code, {
        children: "cname"
      }), " and ", _jsx(_components.code, {
        children: "ip"
      }), " empty, and set ", _jsx(_components.code, {
        children: "time"
      }), " to a value other than ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "For example, you can prevent a microphone from being used after it is left unattended by the streaming user."
    }), `
`, _jsx(_components.p, {
      children: "Banning publishing privileges through this API is a sensitive operation. Use it as a backup measure after the user has been notified of a failure to disconnect. Consider the impact that a delayed or failed unban might have on the user's ability to use the microphone again, and set the ban time as short as possible."
    }), `
`, _jsx(_components.h3, {
      id: "kick-a-user-out-of-a-channel",
      children: "Kick a user out of a channel"
    }), `
`, _jsxs(_components.p, {
      children: ["Kick a user out of a channel based on channel name and UID. This takes the user offline, after which they can log in again. Set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "join_channel"
      }), ", fill in ", _jsx(_components.code, {
        children: "cname"
      }), " and ", _jsx(_components.code, {
        children: "uid"
      }), ", leave ", _jsx(_components.code, {
        children: "ip"
      }), " empty, and set ", _jsx(_components.code, {
        children: "time"
      }), " to ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if a host logs in from two devices simultaneously, both devices stream with the same ", _jsx(_components.code, {
        children: "uid"
      }), ", causing an exception. You can use this API to kick both devices offline, after which one device can reconnect."]
    }), `
`, _jsxs(_components.p, {
      children: ["A one-time kick with ", _jsx(_components.code, {
        children: "time"
      }), " set to ", _jsx(_components.code, {
        children: "0"
      }), " is a safer way to use this API. When the kick request reaches the edge node, if the SDK is disconnected from the edge node, the one-time kick fails. If the SDK reconnects to the edge node after you kick the user, call this API again."]
    }), `
`, _jsx(_components.h3, {
      id: "disband-a-channel",
      children: "Disband a channel"
    }), `
`, _jsxs(_components.p, {
      children: ["When streaming ends, kick all users out of the channel by channel name. Set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "join_channel"
      }), ", fill in ", _jsx(_components.code, {
        children: "cname"
      }), ", leave ", _jsx(_components.code, {
        children: "uid"
      }), " and ", _jsx(_components.code, {
        children: "ip"
      }), " empty, and set ", _jsx(_components.code, {
        children: "time"
      }), " to ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Using ", _jsx(_components.code, {
            children: "cname"
          }), " for a banning rule is equivalent to destroying a channel. Make sure this behavior meets your business requirements."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "In this use case, use your own signaling to notify SDK clients to leave the channel after streaming ends. If business signaling cannot meet your needs, forced disbanding can be used as a fallback."
    }), `
`, _jsx(_components.p, {
      children: "If the channel will not be reused, you can set a longer ban duration. If the channel will be reused after a certain period, make sure the channel ban ends before the next channel creation time. If the channel reuse time is unknown, kick users from the channel or set the ban time to 1 minute."
    }), `
`, _jsx(_components.p, {
      children: "It is not recommended to set a long ban and call the unban API when the channel starts. If unbanning fails, users cannot join the channel."
    }), `
`, _jsx(_components.h3, {
      id: "ban-illegal-ips",
      children: "Ban illegal IPs"
    }), `
`, _jsxs(_components.p, {
      children: ["Prevent users from joining channels based on IP address. Set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "join_channel"
      }), ", fill in ", _jsx(_components.code, {
        children: "ip"
      }), ", leave ", _jsx(_components.code, {
        children: "cname"
      }), " and ", _jsx(_components.code, {
        children: "uid"
      }), " empty, and set ", _jsx(_components.code, {
        children: "time"
      }), " to a value other than ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, when a service is attacked and you identify the source IP, you can use the ", _jsx(_components.code, {
        children: "ip"
      }), " field to ban it."]
    }), `
`, _jsx(_components.p, {
      children: "Using an IP address as a banning rule can affect other users accidentally, such as when multiple users share the same IP address."
    }), `
`, _jsx(_components.h2, {
      id: "inapplicable-use-cases",
      children: "Inapplicable use cases"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Use case"
          }), _jsx(_components.th, {
            children: "Details"
          }), _jsx(_components.th, {
            children: "Reason"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Use the banning API for user microphone management"
          }), _jsx(_components.td, {
            children: "Ban streaming privilege when the user is off the microphone, then restore it when the user is back on."
          }), _jsx(_components.td, {
            children: "Real-time communication logic depends on the banning API. If unbanning fails, the user cannot send streams."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Use the banning API for user channel permission management"
          }), _jsx(_components.td, {
            children: "Ban the user's privilege to join when the user leaves, then restore it when they rejoin."
          }), _jsx(_components.td, {
            children: "Real-time communication logic depends on the banning API. If unbanning fails, the user cannot join. Use a one-time kick to ensure the user leaves the channel."
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To better manage microphone seats and channel state, use RTC REST APIs together with Notifications. See ", _jsx(_components.a, {
            href: "channel-event-types",
            children: "Channel event types"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "best-practices-for-call-exceptions",
      children: "Best practices for call exceptions"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Timeout settings"
        }), ": Set the client request timeout to more than 20 seconds. The minimum recommended timeout is 5 seconds. When retrying a timed-out request, increase the timeout to improve the success rate."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Retry the request"
        }), ": Decide whether to retry after failure and determine the number of retries based on your business logic. When a request returns an error code greater than or equal to ", _jsx(_components.code, {
          children: "500"
        }), ", or the request times out, retry with gradually increasing wait intervals."]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
