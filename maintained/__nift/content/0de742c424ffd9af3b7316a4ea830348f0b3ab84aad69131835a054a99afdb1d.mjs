import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I listen for an audience joining or leaving an interactive live streaming channel?"
};
export let _markdown = `

The Agora RTC SDK does not provide any callback events that listen for an audience joining or leaving an interactive live streaming channel. However, you can listen for these events using either of the following two approaches:

* By using the event notifications provided by Agora's message notification service.
* By using the signaling service provided by the Agora Signaling SDK.

## Use the message notification service [#use-the-message-notification-service]

The message notification service enables you to listen for various service events, which are sent to your Server in the form of HTTP/HTTPS requests.

### Implementation [#implementation]

1. Enable the [message notification service](/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications#enable-notifications).
2. Once the service is enabled, the message notification service sends messages to your Server as HTTP/HTTPS POST requests. Listen for the following events of the **Real-Time Communication** service to detect whether an audience joins or leaves an interactive live streaming channel:

| event\\_type | event\\_name              | Description                                                        | Field name of payload                        |
| ----------- | ------------------------ | ------------------------------------------------------------------ | -------------------------------------------- |
| 105         | \`audience join channel\`  | In the \`LIVE_BROADCASTING\` profile, an audience joins the channel. | * channelName
* uid
* platform
* ts          |
| 106         | \`audience leave channel\` | In the \`LIVE_BROADCASTING\` profile, an audience leaves the channel | - channelName
- uid
- platform
- reason
- ts |

## Use the signaling service [#use-the-signaling-service]

The Agora Signaling SDK aims at providing stable signaling services, such as maintaining the channel information and sending real-time messages, for various social and education scenarios.

### Implementation [#implementation-1]

By integrating both the Agora RTC SDK and the Agora Signaling SDK, you can listen for the callback events of the Signaling SDK to detect the states of the audience in the RTC SDK channel:

* Let a user join both an RTC SDK and a Signaling channel. Ensure that the RTC SDK channel and the Signaling channel share the same channel name.
* Bind the actions of joining both channels in your code logic.
* As a result, the Signaling SDK reporting that a user has joined the Signaling channel means that the user has joined the RTC SDK channel as well. The same applies to a user leaving the channel.

### Reference [#reference]

Refer to the following documents for detailed integration guide and API reference:

* [Receive notifications about channel events](/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications#enable-notifications)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora RTC SDK does not provide any callback events that listen for an audience joining or leaving an interactive live streaming channel. However, you can listen for these events using either of the following two approaches:"
  }, {
    heading: undefined,
    content: "By using the event notifications provided by Agora's message notification service."
  }, {
    heading: undefined,
    content: "By using the signaling service provided by the Agora Signaling SDK."
  }, {
    heading: "use-the-message-notification-service",
    content: "The message notification service enables you to listen for various service events, which are sent to your Server in the form of HTTP/HTTPS requests."
  }, {
    heading: "implementation",
    content: "Enable the message notification service."
  }, {
    heading: "implementation",
    content: "Once the service is enabled, the message notification service sends messages to your Server as HTTP/HTTPS POST requests. Listen for the following events of the **Real-Time Communication** service to detect whether an audience joins or leaves an interactive live streaming channel:"
  }, {
    heading: "implementation",
    content: "event\\_type"
  }, {
    heading: "implementation",
    content: "event\\_name"
  }, {
    heading: "implementation",
    content: "Description"
  }, {
    heading: "implementation",
    content: "Field name of payload"
  }, {
    heading: "implementation",
    content: "105"
  }, {
    heading: "implementation",
    content: "`audience join channel`"
  }, {
    heading: "implementation",
    content: "In the `LIVE_BROADCASTING` profile, an audience joins the channel."
  }, {
    heading: "implementation",
    content: `* channelName
* uid
* platform
* ts`
  }, {
    heading: "implementation",
    content: "106"
  }, {
    heading: "implementation",
    content: "`audience leave channel`"
  }, {
    heading: "implementation",
    content: "In the `LIVE_BROADCASTING` profile, an audience leaves the channel"
  }, {
    heading: "implementation",
    content: `* channelName
* uid
* platform
* reason
* ts`
  }, {
    heading: "use-the-signaling-service",
    content: "The Agora Signaling SDK aims at providing stable signaling services, such as maintaining the channel information and sending real-time messages, for various social and education scenarios."
  }, {
    heading: "implementation-1",
    content: "By integrating both the Agora RTC SDK and the Agora Signaling SDK, you can listen for the callback events of the Signaling SDK to detect the states of the audience in the RTC SDK channel:"
  }, {
    heading: "implementation-1",
    content: "Let a user join both an RTC SDK and a Signaling channel. Ensure that the RTC SDK channel and the Signaling channel share the same channel name."
  }, {
    heading: "implementation-1",
    content: "Bind the actions of joining both channels in your code logic."
  }, {
    heading: "implementation-1",
    content: "As a result, the Signaling SDK reporting that a user has joined the Signaling channel means that the user has joined the RTC SDK channel as well. The same applies to a user leaving the channel."
  }, {
    heading: "reference",
    content: "Refer to the following documents for detailed integration guide and API reference:"
  }, {
    heading: "reference",
    content: "Receive notifications about channel events"
  }],
  headings: [{
    id: "use-the-message-notification-service",
    content: "Use the message notification service"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "use-the-signaling-service",
    content: "Use the signaling service"
  }, {
    id: "implementation-1",
    content: "Implementation"
  }, {
    id: "reference",
    content: "Reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#use-the-message-notification-service",
  title: _jsx(_Fragment, {
    children: "Use the message notification service"
  })
}, {
  depth: 3,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 2,
  url: "#use-the-signaling-service",
  title: _jsx(_Fragment, {
    children: "Use the signaling service"
  })
}, {
  depth: 3,
  url: "#implementation-1",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Agora RTC SDK does not provide any callback events that listen for an audience joining or leaving an interactive live streaming channel. However, you can listen for these events using either of the following two approaches:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "By using the event notifications provided by Agora's message notification service."
      }), `
`, _jsx(_components.li, {
        children: "By using the signaling service provided by the Agora Signaling SDK."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "use-the-message-notification-service",
      children: "Use the message notification service"
    }), `
`, _jsx(_components.p, {
      children: "The message notification service enables you to listen for various service events, which are sent to your Server in the form of HTTP/HTTPS requests."
    }), `
`, _jsx(_components.h3, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Enable the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications#enable-notifications",
          children: "message notification service"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Once the service is enabled, the message notification service sends messages to your Server as HTTP/HTTPS POST requests. Listen for the following events of the ", _jsx(_components.strong, {
          children: "Real-Time Communication"
        }), " service to detect whether an audience joins or leaves an interactive live streaming channel:"]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "event_type"
          }), _jsx(_components.th, {
            children: "event_name"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Field name of payload"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "105"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "audience join channel"
            })
          }), _jsxs(_components.td, {
            children: ["In the ", _jsx(_components.code, {
              children: "LIVE_BROADCASTING"
            }), " profile, an audience joins the channel."]
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "channelName"
              }), `
`, _jsx(_components.li, {
                children: "uid"
              }), `
`, _jsx(_components.li, {
                children: "platform"
              }), `
`, _jsx(_components.li, {
                children: "ts"
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "106"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "audience leave channel"
            })
          }), _jsxs(_components.td, {
            children: ["In the ", _jsx(_components.code, {
              children: "LIVE_BROADCASTING"
            }), " profile, an audience leaves the channel"]
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "channelName"
              }), `
`, _jsx(_components.li, {
                children: "uid"
              }), `
`, _jsx(_components.li, {
                children: "platform"
              }), `
`, _jsx(_components.li, {
                children: "reason"
              }), `
`, _jsx(_components.li, {
                children: "ts"
              }), `
`]
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "use-the-signaling-service",
      children: "Use the signaling service"
    }), `
`, _jsx(_components.p, {
      children: "The Agora Signaling SDK aims at providing stable signaling services, such as maintaining the channel information and sending real-time messages, for various social and education scenarios."
    }), `
`, _jsx(_components.h3, {
      id: "implementation-1",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "By integrating both the Agora RTC SDK and the Agora Signaling SDK, you can listen for the callback events of the Signaling SDK to detect the states of the audience in the RTC SDK channel:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Let a user join both an RTC SDK and a Signaling channel. Ensure that the RTC SDK channel and the Signaling channel share the same channel name."
      }), `
`, _jsx(_components.li, {
        children: "Bind the actions of joining both channels in your code logic."
      }), `
`, _jsx(_components.li, {
        children: "As a result, the Signaling SDK reporting that a user has joined the Signaling channel means that the user has joined the RTC SDK channel as well. The same applies to a user leaving the channel."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following documents for detailed integration guide and API reference:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications#enable-notifications",
          children: "Receive notifications about channel events"
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
