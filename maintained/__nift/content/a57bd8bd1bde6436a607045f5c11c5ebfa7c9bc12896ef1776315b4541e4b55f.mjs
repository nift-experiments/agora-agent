import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How do I get the user's call duration?"
};
export let _markdown = `

During a call, a user may join and leave an RTC channel multiple times. The user's call duration is the actual time when the user is in the channel. You can use the Agora RTC SDK or Agora Analytics to get a user's call duration.

## Implementation [#implementation]

### Use the Agora RTC SDK [#use-the-agora-rtc-sdk]

By design, the SDK triggers the [\`onRtcStats\`](https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_i_rtc_engine_event_handler.html#ada7aa10b092a6de23b598a9f77d4deee) callback after a user successfully joins an RTC channel. To get the duration between each channel-join and channel-leave, use the \`totalDuration\` parameter of the last \`onRtcStats\` callback triggered before the user leaves the channel. If a user joins and leaves an RTC channel for multiple times, you can calculate the user's call duration by adding up the values of \`totalDuration\`.

The above callback is in Java. For other programming languages, use the following parameters to get the user's call duration:

* C++: The \`duration\` parameter of the \`onRtcStats\` callback.
* Objective-C: The \`duration\` parameter of the [\`reportRtcStats\`](https://api-ref.agora.io/en/video-sdk/ios/3.x/Protocols/AgoraRtcEngineDelegate.html#//api/name/rtcEngine\\:reportRtcStats:) callback.
* JavaScript: The \`Duration\` parameter of the \`Client.getSessionStats\` method.

If the connection is lost under poor network conditions, the calculated duration may be inaccurate. Use [Agora Signaling SDK](/en/realtime-media/rtm/build/connect-and-authenticate/connection/connection-management) or a different signaling system to implement a heartbeat mechanism, and get the disconnected time of the client. You can calculate the user's call duration by subtracting the disconnected time of the client from the call duration obtained from the Agora RTC SDK.

### Use Agora Analytics [#use-agora-analytics]

On the **Call Search** page of **Agora Analytics**, you can find a user's call duration in the **In-call Periods** column. See [Call Search](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search#use-call-search).

![](https://web-cdn.agora.io/docs-files/1592406406894)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "During a call, a user may join and leave an RTC channel multiple times. The user's call duration is the actual time when the user is in the channel. You can use the Agora RTC SDK or Agora Analytics to get a user's call duration."
  }, {
    heading: "use-the-agora-rtc-sdk",
    content: "By design, the SDK triggers the `onRtcStats` callback after a user successfully joins an RTC channel. To get the duration between each channel-join and channel-leave, use the `totalDuration` parameter of the last `onRtcStats` callback triggered before the user leaves the channel. If a user joins and leaves an RTC channel for multiple times, you can calculate the user's call duration by adding up the values of `totalDuration`."
  }, {
    heading: "use-the-agora-rtc-sdk",
    content: "The above callback is in Java. For other programming languages, use the following parameters to get the user's call duration:"
  }, {
    heading: "use-the-agora-rtc-sdk",
    content: "C++: The `duration` parameter of the `onRtcStats` callback."
  }, {
    heading: "use-the-agora-rtc-sdk",
    content: "Objective-C: The `duration` parameter of the `reportRtcStats` callback."
  }, {
    heading: "use-the-agora-rtc-sdk",
    content: "JavaScript: The `Duration` parameter of the `Client.getSessionStats` method."
  }, {
    heading: "use-the-agora-rtc-sdk",
    content: "If the connection is lost under poor network conditions, the calculated duration may be inaccurate. Use Agora Signaling SDK or a different signaling system to implement a heartbeat mechanism, and get the disconnected time of the client. You can calculate the user's call duration by subtracting the disconnected time of the client from the call duration obtained from the Agora RTC SDK."
  }, {
    heading: "use-agora-analytics",
    content: "On the **Call Search** page of **Agora Analytics**, you can find a user's call duration in the **In-call Periods** column. See Call Search."
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }, {
    id: "use-the-agora-rtc-sdk",
    content: "Use the Agora RTC SDK"
  }, {
    id: "use-agora-analytics",
    content: "Use Agora Analytics"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#use-the-agora-rtc-sdk",
  title: _jsx(_Fragment, {
    children: "Use the Agora RTC SDK"
  })
}, {
  depth: 3,
  url: "#use-agora-analytics",
  title: _jsx(_Fragment, {
    children: "Use Agora Analytics"
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
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "During a call, a user may join and leave an RTC channel multiple times. The user's call duration is the actual time when the user is in the channel. You can use the Agora RTC SDK or Agora Analytics to get a user's call duration."
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.h3, {
      id: "use-the-agora-rtc-sdk",
      children: "Use the Agora RTC SDK"
    }), `
`, _jsxs(_components.p, {
      children: ["By design, the SDK triggers the ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_i_rtc_engine_event_handler.html#ada7aa10b092a6de23b598a9f77d4deee",
        children: _jsx(_components.code, {
          children: "onRtcStats"
        })
      }), " callback after a user successfully joins an RTC channel. To get the duration between each channel-join and channel-leave, use the ", _jsx(_components.code, {
        children: "totalDuration"
      }), " parameter of the last ", _jsx(_components.code, {
        children: "onRtcStats"
      }), " callback triggered before the user leaves the channel. If a user joins and leaves an RTC channel for multiple times, you can calculate the user's call duration by adding up the values of ", _jsx(_components.code, {
        children: "totalDuration"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The above callback is in Java. For other programming languages, use the following parameters to get the user's call duration:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["C++: The ", _jsx(_components.code, {
          children: "duration"
        }), " parameter of the ", _jsx(_components.code, {
          children: "onRtcStats"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["Objective-C: The ", _jsx(_components.code, {
          children: "duration"
        }), " parameter of the ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/ios/3.x/Protocols/AgoraRtcEngineDelegate.html#//api/name/rtcEngine:reportRtcStats:",
          children: _jsx(_components.code, {
            children: "reportRtcStats"
          })
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["JavaScript: The ", _jsx(_components.code, {
          children: "Duration"
        }), " parameter of the ", _jsx(_components.code, {
          children: "Client.getSessionStats"
        }), " method."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If the connection is lost under poor network conditions, the calculated duration may be inaccurate. Use ", _jsx(_components.a, {
        href: "/en/realtime-media/rtm/build/connect-and-authenticate/connection/connection-management",
        children: "Agora Signaling SDK"
      }), " or a different signaling system to implement a heartbeat mechanism, and get the disconnected time of the client. You can calculate the user's call duration by subtracting the disconnected time of the client from the call duration obtained from the Agora RTC SDK."]
    }), `
`, _jsx(_components.h3, {
      id: "use-agora-analytics",
      children: "Use Agora Analytics"
    }), `
`, _jsxs(_components.p, {
      children: ["On the ", _jsx(_components.strong, {
        children: "Call Search"
      }), " page of ", _jsx(_components.strong, {
        children: "Agora Analytics"
      }), ", you can find a user's call duration in the ", _jsx(_components.strong, {
        children: "In-call Periods"
      }), " column. See ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search#use-call-search",
        children: "Call Search"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1592406406894",
        alt: ""
      })
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
