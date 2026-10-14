import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can a host change the role of a remote user?"
};
export let _markdown = `

In a live interactive streaming channel, the host can invite an audience to take on the role of co-host, or change role back to audience.

You can implement this function by combining the following features:

* Signaling and channel attributes using methods from the Agora Signaling SDK.
* Setting the user role using methods from the Agora RTC SDK.

## Implementation [#implementation]

Before proceeding, ensure that you have integrated both the Agora Signaling SDK and RTC SDK in your project. For how to integrate these SDKs, see the following guides:

* [Agora Signaling SDK Quickstart](/en/realtime-media/rtm/quickstart)
* [Agora RTC SDK Quickstart](/en/realtime-media/rtc/get-started-sdk)

The basic API call sequence is as follows:

![](https://web-cdn.agora.io/docs-files/1585030025387)

Refer to the detailed steps for implementation:

1. The host calls [\`sendMessage\`](https://api-ref.agora.io/en/signaling-sdk/android/1.x/classio_1_1agora_1_1rtm_1_1_rtm_channel.html#a57087adf4227a17c774ea292840148a0) to send a peer-to-peer message that invites an audience to take on the role of co-host.
2. The audience receives the invitation message in the [\`onMessageReceived\`](https://api-ref.agora.io/en/signaling-sdk/android/1.x/interfaceio_1_1agora_1_1rtm_1_1_rtm_client_listener.html#af760814981718fb31d88acb8251d19b6) callback.
3. The audience calls [\`setClientRole\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole) to change the user role to \`CLIENT_ROLE_BROADCASTER\`.
4. After successfully changing the user role, the audience receives the \`onClientRoleChanged\` callback, and becomes a co-host.
5. The new co-host calls [\`addOrUpdateChannelAttributes\`](https://api-ref.agora.io/en/signaling-sdk/android/1.x/classio_1_1agora_1_1rtm_1_1_rtm_client.html#a997a31e6bfe1edc9b6ef58a931ef3f23) to notify the role change to all users in the channel.
6. The host receives the [\`onAttributesUpdated\`](https://api-ref.agora.io/en/signaling-sdk/android/1.x/interfaceio_1_1agora_1_1rtm_1_1_rtm_channel_listener.html#a2904a1f1f78c497b9176fffb853be96f) callback, and starts co-hosting with the new co-host.

To change a co-host back to an audience, follow the same steps, except when calling \`setClientRole\`, set the user role as \`CLIENT_ROLE_AUDIENCE\`.

## Relative methods in different programming languages [#relative-methods-in-different-programming-languages]

The methods mentioned in this article are in Java. Refer to the following table if you are programming in a different language:

| Java/C++                       | Objective-C                    | JavaScript                         |
| ------------------------------ | ------------------------------ | ---------------------------------- |
| \`sendMessageToPeer\`            | \`sendMessage\`                  | \`sendMessage\`                      |
| \`onMessageReceived\`            | \`messageReceived\`              | \`MessageFromPeer\`                  |
| \`setClientRole\`                | \`setClientRole\`                | \`setClientRole\`                    |
| \`onClientRoleChanged\`          | \`didClientRoleChanged\`         | \`Client.on("client-role-changed")\` |
| \`addOrUpdateChannelAttributes\` | \`addOrUpdateChannelAttributes\` | \`addOrUpdateChannelAttributes\`     |
| \`onAttributesUpdated\`          | \`attributeUpdate\`              | \`AttributesUpdated\`                |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In a live interactive streaming channel, the host can invite an audience to take on the role of co-host, or change role back to audience."
  }, {
    heading: undefined,
    content: "You can implement this function by combining the following features:"
  }, {
    heading: undefined,
    content: "Signaling and channel attributes using methods from the Agora Signaling SDK."
  }, {
    heading: undefined,
    content: "Setting the user role using methods from the Agora RTC SDK."
  }, {
    heading: "implementation",
    content: "Before proceeding, ensure that you have integrated both the Agora Signaling SDK and RTC SDK in your project. For how to integrate these SDKs, see the following guides:"
  }, {
    heading: "implementation",
    content: "Agora Signaling SDK Quickstart"
  }, {
    heading: "implementation",
    content: "Agora RTC SDK Quickstart"
  }, {
    heading: "implementation",
    content: "The basic API call sequence is as follows:"
  }, {
    heading: "implementation",
    content: "Refer to the detailed steps for implementation:"
  }, {
    heading: "implementation",
    content: "The host calls `sendMessage` to send a peer-to-peer message that invites an audience to take on the role of co-host."
  }, {
    heading: "implementation",
    content: "The audience receives the invitation message in the `onMessageReceived` callback."
  }, {
    heading: "implementation",
    content: "The audience calls `setClientRole` to change the user role to `CLIENT_ROLE_BROADCASTER`."
  }, {
    heading: "implementation",
    content: "After successfully changing the user role, the audience receives the `onClientRoleChanged` callback, and becomes a co-host."
  }, {
    heading: "implementation",
    content: "The new co-host calls `addOrUpdateChannelAttributes` to notify the role change to all users in the channel."
  }, {
    heading: "implementation",
    content: "The host receives the `onAttributesUpdated` callback, and starts co-hosting with the new co-host."
  }, {
    heading: "implementation",
    content: "To change a co-host back to an audience, follow the same steps, except when calling `setClientRole`, set the user role as `CLIENT_ROLE_AUDIENCE`."
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "The methods mentioned in this article are in Java. Refer to the following table if you are programming in a different language:"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "Java/C++"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "Objective-C"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "JavaScript"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`sendMessageToPeer`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`sendMessage`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`sendMessage`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`onMessageReceived`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`messageReceived`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`MessageFromPeer`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`setClientRole`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`setClientRole`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`setClientRole`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`onClientRoleChanged`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`didClientRoleChanged`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: '`Client.on("client-role-changed")`'
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`addOrUpdateChannelAttributes`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`addOrUpdateChannelAttributes`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`addOrUpdateChannelAttributes`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`onAttributesUpdated`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`attributeUpdate`"
  }, {
    heading: "relative-methods-in-different-programming-languages",
    content: "`AttributesUpdated`"
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }, {
    id: "relative-methods-in-different-programming-languages",
    content: "Relative methods in different programming languages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 2,
  url: "#relative-methods-in-different-programming-languages",
  title: _jsx(_Fragment, {
    children: "Relative methods in different programming languages"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
      children: "In a live interactive streaming channel, the host can invite an audience to take on the role of co-host, or change role back to audience."
    }), `
`, _jsx(_components.p, {
      children: "You can implement this function by combining the following features:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Signaling and channel attributes using methods from the Agora Signaling SDK."
      }), `
`, _jsx(_components.li, {
        children: "Setting the user role using methods from the Agora RTC SDK."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "Before proceeding, ensure that you have integrated both the Agora Signaling SDK and RTC SDK in your project. For how to integrate these SDKs, see the following guides:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "Agora Signaling SDK Quickstart"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "Agora RTC SDK Quickstart"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The basic API call sequence is as follows:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1585030025387",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Refer to the detailed steps for implementation:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The host calls ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/signaling-sdk/android/1.x/classio_1_1agora_1_1rtm_1_1_rtm_channel.html#a57087adf4227a17c774ea292840148a0",
          children: _jsx(_components.code, {
            children: "sendMessage"
          })
        }), " to send a peer-to-peer message that invites an audience to take on the role of co-host."]
      }), `
`, _jsxs(_components.li, {
        children: ["The audience receives the invitation message in the ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/signaling-sdk/android/1.x/interfaceio_1_1agora_1_1rtm_1_1_rtm_client_listener.html#af760814981718fb31d88acb8251d19b6",
          children: _jsx(_components.code, {
            children: "onMessageReceived"
          })
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["The audience calls ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setclientrole",
          children: _jsx(_components.code, {
            children: "setClientRole"
          })
        }), " to change the user role to ", _jsx(_components.code, {
          children: "CLIENT_ROLE_BROADCASTER"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["After successfully changing the user role, the audience receives the ", _jsx(_components.code, {
          children: "onClientRoleChanged"
        }), " callback, and becomes a co-host."]
      }), `
`, _jsxs(_components.li, {
        children: ["The new co-host calls ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/signaling-sdk/android/1.x/classio_1_1agora_1_1rtm_1_1_rtm_client.html#a997a31e6bfe1edc9b6ef58a931ef3f23",
          children: _jsx(_components.code, {
            children: "addOrUpdateChannelAttributes"
          })
        }), " to notify the role change to all users in the channel."]
      }), `
`, _jsxs(_components.li, {
        children: ["The host receives the ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/signaling-sdk/android/1.x/interfaceio_1_1agora_1_1rtm_1_1_rtm_channel_listener.html#a2904a1f1f78c497b9176fffb853be96f",
          children: _jsx(_components.code, {
            children: "onAttributesUpdated"
          })
        }), " callback, and starts co-hosting with the new co-host."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To change a co-host back to an audience, follow the same steps, except when calling ", _jsx(_components.code, {
        children: "setClientRole"
      }), ", set the user role as ", _jsx(_components.code, {
        children: "CLIENT_ROLE_AUDIENCE"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "relative-methods-in-different-programming-languages",
      children: "Relative methods in different programming languages"
    }), `
`, _jsx(_components.p, {
      children: "The methods mentioned in this article are in Java. Refer to the following table if you are programming in a different language:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Java/C++"
          }), _jsx(_components.th, {
            children: "Objective-C"
          }), _jsx(_components.th, {
            children: "JavaScript"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sendMessageToPeer"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sendMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sendMessage"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onMessageReceived"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messageReceived"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MessageFromPeer"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "setClientRole"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "setClientRole"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "setClientRole"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onClientRoleChanged"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "didClientRoleChanged"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'Client.on("client-role-changed")'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "addOrUpdateChannelAttributes"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "addOrUpdateChannelAttributes"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "addOrUpdateChannelAttributes"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onAttributesUpdated"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "attributeUpdate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AttributesUpdated"
            })
          })]
        })]
      })]
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
