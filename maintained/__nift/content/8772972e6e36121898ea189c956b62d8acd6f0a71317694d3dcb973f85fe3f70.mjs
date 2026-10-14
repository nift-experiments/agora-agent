import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I determine whether a call is an audio call or a video call?"
};
export let _markdown = `

In real-time audio or video communication, you can use the Agora Signaling SDK or the Agora RTC SDK to determine whether an incoming or ongoing call is an audio call or a video call.

## Before a call [#before-a-call]

If you need to determine and send the call type to the receiver before a call, ensure that you have integrated the Signaling SDK and the RTC SDK. Refer to the following articles to learn more about integration:

* [Signaling SDK Quickstart](/en/realtime-media/rtm/quickstart)
* [RTC SDK Quickstart](/en/realtime-media/rtc/get-started-sdk)

Complete the following steps to determine the call type:

1. When the caller sends a call, use the [Call Invitation API](/en/signaling/develop/call-invitation) of the Signaling SDK to send a call invitation to the callee.
2. Call [\`sendMessageToPeer\`](/en/realtime-media/rtm/reference/migration-guide) to send the call type to the callee via peer-to-peer message. The callee gets the call type from the received peer-to-peer message.

## After a call [#after-a-call]

If you need to determine and send the call type to the receiver during a call, ensure that you have integrated the RTC SDK. Refer to the following article:

* [RTC SDK Quickstart](/en/realtime-media/rtc/get-started-sdk)

During a call, the receiver can determine the call type according to the following guideline:

* If the receiver receives the [onRemoteVideoStateChange](https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_i_rtc_channel_event_handler.html#a6ac9d139c17c849e14cc86dff5846e3b) callback, the current call is a video call.
* If the receiver does not receive the [onRemoteVideoStateChange](https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_i_rtc_channel_event_handler.html#a6ac9d139c17c849e14cc86dff5846e3b) callback and receives the [onRemoteAudioStateChange](https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_i_rtc_channel_event_handler.html#a8243351d18932b1678533bee01a856ca) callback, the current call is an audio call.

## Corresponding methods and callbacks [#corresponding-methods-and-callbacks]

This article references the names of Java methods and callbacks. The following table shows the corresponding methods and callbacks for other languages.

| Java/C++                    | Objective-C                                         | JavaScript            |
| --------------------------- | --------------------------------------------------- | --------------------- |
| \`sendMessageToPeer\`         | \`sendMessage:toPeer:sendMessageOptions:completion:\` | \`sendMessage\`         |
| \`onRemoteAudioStateChanged\` | \`remoteAudioStateChangedOfUid\`                      | \`getRemoteAudioStats\` |
| \`onRemoteVideoStateChanged\` | \`remoteVideoStateChangedOfUid\`                      | \`getRemoteVideoStats\` |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In real-time audio or video communication, you can use the Agora Signaling SDK or the Agora RTC SDK to determine whether an incoming or ongoing call is an audio call or a video call."
  }, {
    heading: "before-a-call",
    content: "If you need to determine and send the call type to the receiver before a call, ensure that you have integrated the Signaling SDK and the RTC SDK. Refer to the following articles to learn more about integration:"
  }, {
    heading: "before-a-call",
    content: "Signaling SDK Quickstart"
  }, {
    heading: "before-a-call",
    content: "RTC SDK Quickstart"
  }, {
    heading: "before-a-call",
    content: "Complete the following steps to determine the call type:"
  }, {
    heading: "before-a-call",
    content: "When the caller sends a call, use the Call Invitation API of the Signaling SDK to send a call invitation to the callee."
  }, {
    heading: "before-a-call",
    content: "Call `sendMessageToPeer` to send the call type to the callee via peer-to-peer message. The callee gets the call type from the received peer-to-peer message."
  }, {
    heading: "after-a-call",
    content: "If you need to determine and send the call type to the receiver during a call, ensure that you have integrated the RTC SDK. Refer to the following article:"
  }, {
    heading: "after-a-call",
    content: "RTC SDK Quickstart"
  }, {
    heading: "after-a-call",
    content: "During a call, the receiver can determine the call type according to the following guideline:"
  }, {
    heading: "after-a-call",
    content: "If the receiver receives the onRemoteVideoStateChange callback, the current call is a video call."
  }, {
    heading: "after-a-call",
    content: "If the receiver does not receive the onRemoteVideoStateChange callback and receives the onRemoteAudioStateChange callback, the current call is an audio call."
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "This article references the names of Java methods and callbacks. The following table shows the corresponding methods and callbacks for other languages."
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "Java/C++"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "Objective-C"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "JavaScript"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "`sendMessageToPeer`"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "`sendMessage:toPeer:sendMessageOptions:completion:`"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "`sendMessage`"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "`onRemoteAudioStateChanged`"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "`remoteAudioStateChangedOfUid`"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "`getRemoteAudioStats`"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "`onRemoteVideoStateChanged`"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "`remoteVideoStateChangedOfUid`"
  }, {
    heading: "corresponding-methods-and-callbacks",
    content: "`getRemoteVideoStats`"
  }],
  headings: [{
    id: "before-a-call",
    content: "Before a call"
  }, {
    id: "after-a-call",
    content: "After a call"
  }, {
    id: "corresponding-methods-and-callbacks",
    content: "Corresponding methods and callbacks"
  }]
};
export let toc = [{
  depth: 2,
  url: "#before-a-call",
  title: _jsx(_Fragment, {
    children: "Before a call"
  })
}, {
  depth: 2,
  url: "#after-a-call",
  title: _jsx(_Fragment, {
    children: "After a call"
  })
}, {
  depth: 2,
  url: "#corresponding-methods-and-callbacks",
  title: _jsx(_Fragment, {
    children: "Corresponding methods and callbacks"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
      children: "In real-time audio or video communication, you can use the Agora Signaling SDK or the Agora RTC SDK to determine whether an incoming or ongoing call is an audio call or a video call."
    }), `
`, _jsx(_components.h2, {
      id: "before-a-call",
      children: "Before a call"
    }), `
`, _jsx(_components.p, {
      children: "If you need to determine and send the call type to the receiver before a call, ensure that you have integrated the Signaling SDK and the RTC SDK. Refer to the following articles to learn more about integration:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "Signaling SDK Quickstart"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "RTC SDK Quickstart"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Complete the following steps to determine the call type:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["When the caller sends a call, use the ", _jsx(_components.a, {
          href: "/en/signaling/develop/call-invitation",
          children: "Call Invitation API"
        }), " of the Signaling SDK to send a call invitation to the callee."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/reference/migration-guide",
          children: _jsx(_components.code, {
            children: "sendMessageToPeer"
          })
        }), " to send the call type to the callee via peer-to-peer message. The callee gets the call type from the received peer-to-peer message."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "after-a-call",
      children: "After a call"
    }), `
`, _jsx(_components.p, {
      children: "If you need to determine and send the call type to the receiver during a call, ensure that you have integrated the RTC SDK. Refer to the following article:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "RTC SDK Quickstart"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "During a call, the receiver can determine the call type according to the following guideline:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the receiver receives the ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_i_rtc_channel_event_handler.html#a6ac9d139c17c849e14cc86dff5846e3b",
          children: "onRemoteVideoStateChange"
        }), " callback, the current call is a video call."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the receiver does not receive the ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_i_rtc_channel_event_handler.html#a6ac9d139c17c849e14cc86dff5846e3b",
          children: "onRemoteVideoStateChange"
        }), " callback and receives the ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_i_rtc_channel_event_handler.html#a8243351d18932b1678533bee01a856ca",
          children: "onRemoteAudioStateChange"
        }), " callback, the current call is an audio call."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "corresponding-methods-and-callbacks",
      children: "Corresponding methods and callbacks"
    }), `
`, _jsx(_components.p, {
      children: "This article references the names of Java methods and callbacks. The following table shows the corresponding methods and callbacks for other languages."
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
              children: "sendMessage:toPeer:sendMessageOptions:completion:"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sendMessage"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onRemoteAudioStateChanged"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "remoteAudioStateChangedOfUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "getRemoteAudioStats"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onRemoteVideoStateChanged"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "remoteVideoStateChangedOfUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "getRemoteVideoStats"
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
