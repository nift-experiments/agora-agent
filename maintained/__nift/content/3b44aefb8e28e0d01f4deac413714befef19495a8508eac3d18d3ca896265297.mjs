import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoRenderingTracingInfo",
  description: "采集视频帧渲染过程的关键指标。"
};
export let _markdown = `

<a id="class_videorenderingtracinginfo__prototype" />

\`\`\`java
public static class VideoRenderingTracingInfo {
    public int elapsedTime;
    public int start2JoinChannel;
    public int join2JoinSuccess;
    public int joinSuccess2RemoteJoined;
    public int remoteJoined2SetView;
    public int remoteJoined2UnmuteVideo;
    public int remoteJoined2PacketReceived;
}
\`\`\`

<a id="class_videorenderingtracinginfo__parameters" />

## 属性 [#属性]

### \`elapsedTime\` [#elapsedtime]

从调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing) 到 SDK 触发 [onVideoRenderingTracingResult](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult) 回调的时间间隔，单位为毫秒。声网建议在加入频道前调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)。

### \`start2JoinChannel\` [#start2joinchannel]

从调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing) 到调用 \`joinChannel\` 的时间间隔，单位为毫秒。若为负数，表示先调用 \`joinChannel\` 后调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)。

### \`join2JoinSuccess\` [#join2joinsuccess]

从调用 \`joinChannel\` 到成功加入频道的时间间隔，单位为毫秒。

### \`joinSuccess2RemoteJoined\` [#joinsuccess2remotejoined]

若本地用户在成功加入频道前调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，该字段表示从本地用户成功加入频道到远端用户加入频道的时间间隔，单位为毫秒。若本地用户在成功加入频道后调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，则为从调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing) 到远端用户加入频道的时间间隔，单位为毫秒。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果本地用户在远端用户加入频道后才调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，该值为 0，且无实际意义。为减少远端用户首帧渲染时间，声网建议在远端用户加入频道时再让本地用户加入频道，以减小该值。
  </CalloutDescription>
</CalloutContainer>

### \`remoteJoined2SetView\` [#remotejoined2setview]

若本地用户在远端用户加入频道前调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，该字段表示从远端用户加入频道到本地用户设置远端视图的时间间隔，单位为毫秒。若本地用户在远端用户加入频道后才调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，则表示从调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing) 到设置远端视图的时间间隔，单位为毫秒。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果本地用户在设置远端视图之后才调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，该值为 0，且无效。为减少远端用户首帧渲染时间，声网建议在远端用户加入频道前设置远端视图，或在远端用户加入频道后立即设置远端视图，以减小该值。
  </CalloutDescription>
</CalloutContainer>

### \`remoteJoined2UnmuteVideo\` [#remotejoined2unmutevideo]

若本地用户在远端用户加入频道前调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，该字段表示从远端用户加入频道到订阅远端视频流的时间间隔，单位为毫秒。若本地用户在远端用户加入频道后才调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，表示从调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing) 到订阅远端视频流的时间间隔，单位为毫秒。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果在本地用户订阅远端视频流之后才调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，该值为 0，且无效。为减少远端用户首帧渲染时间，声网建议在远端用户加入频道后立即订阅其视频流，以缩短该值。
  </CalloutDescription>
</CalloutContainer>

### \`remoteJoined2PacketReceived\` [#remotejoined2packetreceived]

若本地用户在远端用户加入频道前调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，该字段表示从远端用户加入频道到本地用户接收到远端视频的时间间隔，单位为毫秒。若本地用户在远端用户加入频道后才调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，表示从调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing) 到接收远端视频流的时间间隔，单位为毫秒。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果本地用户在收到远端视频流之后才调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)，该值为 0 且无效。为减少远端用户首帧渲染时延，声网建议远端用户在加入频道后立即发送视频，本地用户也应立即订阅视频流，以减小该值。
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: "elapsedtime",
    content: "从调用 startMediaRenderingTracing 到 SDK 触发 onVideoRenderingTracingResult 回调的时间间隔，单位为毫秒。声网建议在加入频道前调用 startMediaRenderingTracing。"
  }, {
    heading: "start2joinchannel",
    content: "从调用 startMediaRenderingTracing 到调用 `joinChannel` 的时间间隔，单位为毫秒。若为负数，表示先调用 `joinChannel` 后调用 startMediaRenderingTracing。"
  }, {
    heading: "join2joinsuccess",
    content: "从调用 `joinChannel` 到成功加入频道的时间间隔，单位为毫秒。"
  }, {
    heading: "joinsuccess2remotejoined",
    content: "若本地用户在成功加入频道前调用 startMediaRenderingTracing，该字段表示从本地用户成功加入频道到远端用户加入频道的时间间隔，单位为毫秒。若本地用户在成功加入频道后调用 startMediaRenderingTracing，则为从调用 startMediaRenderingTracing 到远端用户加入频道的时间间隔，单位为毫秒。"
  }, {
    heading: "joinsuccess2remotejoined",
    content: "如果本地用户在远端用户加入频道后才调用 startMediaRenderingTracing，该值为 0，且无实际意义。为减少远端用户首帧渲染时间，声网建议在远端用户加入频道时再让本地用户加入频道，以减小该值。"
  }, {
    heading: "remotejoined2setview",
    content: "若本地用户在远端用户加入频道前调用 startMediaRenderingTracing，该字段表示从远端用户加入频道到本地用户设置远端视图的时间间隔，单位为毫秒。若本地用户在远端用户加入频道后才调用 startMediaRenderingTracing，则表示从调用 startMediaRenderingTracing 到设置远端视图的时间间隔，单位为毫秒。"
  }, {
    heading: "remotejoined2setview",
    content: "如果本地用户在设置远端视图之后才调用 startMediaRenderingTracing，该值为 0，且无效。为减少远端用户首帧渲染时间，声网建议在远端用户加入频道前设置远端视图，或在远端用户加入频道后立即设置远端视图，以减小该值。"
  }, {
    heading: "remotejoined2unmutevideo",
    content: "若本地用户在远端用户加入频道前调用 startMediaRenderingTracing，该字段表示从远端用户加入频道到订阅远端视频流的时间间隔，单位为毫秒。若本地用户在远端用户加入频道后才调用 startMediaRenderingTracing，表示从调用 startMediaRenderingTracing 到订阅远端视频流的时间间隔，单位为毫秒。"
  }, {
    heading: "remotejoined2unmutevideo",
    content: "如果在本地用户订阅远端视频流之后才调用 startMediaRenderingTracing，该值为 0，且无效。为减少远端用户首帧渲染时间，声网建议在远端用户加入频道后立即订阅其视频流，以缩短该值。"
  }, {
    heading: "remotejoined2packetreceived",
    content: "若本地用户在远端用户加入频道前调用 startMediaRenderingTracing，该字段表示从远端用户加入频道到本地用户接收到远端视频的时间间隔，单位为毫秒。若本地用户在远端用户加入频道后才调用 startMediaRenderingTracing，表示从调用 startMediaRenderingTracing 到接收远端视频流的时间间隔，单位为毫秒。"
  }, {
    heading: "remotejoined2packetreceived",
    content: "如果本地用户在收到远端视频流之后才调用 startMediaRenderingTracing，该值为 0 且无效。为减少远端用户首帧渲染时延，声网建议远端用户在加入频道后立即发送视频，本地用户也应立即订阅视频流，以减小该值。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "elapsedtime",
    content: "`elapsedTime`"
  }, {
    id: "start2joinchannel",
    content: "`start2JoinChannel`"
  }, {
    id: "join2joinsuccess",
    content: "`join2JoinSuccess`"
  }, {
    id: "joinsuccess2remotejoined",
    content: "`joinSuccess2RemoteJoined`"
  }, {
    id: "remotejoined2setview",
    content: "`remoteJoined2SetView`"
  }, {
    id: "remotejoined2unmutevideo",
    content: "`remoteJoined2UnmuteVideo`"
  }, {
    id: "remotejoined2packetreceived",
    content: "`remoteJoined2PacketReceived`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#elapsedtime",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapsedTime"
    })
  })
}, {
  depth: 3,
  url: "#start2joinchannel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "start2JoinChannel"
    })
  })
}, {
  depth: 3,
  url: "#join2joinsuccess",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "join2JoinSuccess"
    })
  })
}, {
  depth: 3,
  url: "#joinsuccess2remotejoined",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "joinSuccess2RemoteJoined"
    })
  })
}, {
  depth: 3,
  url: "#remotejoined2setview",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "remoteJoined2SetView"
    })
  })
}, {
  depth: 3,
  url: "#remotejoined2unmutevideo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "remoteJoined2UnmuteVideo"
    })
  })
}, {
  depth: 3,
  url: "#remotejoined2packetreceived",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "remoteJoined2PacketReceived"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_videorenderingtracinginfo__prototype"
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
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " VideoRenderingTracingInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " elapsedTime;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " start2JoinChannel;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " join2JoinSuccess;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " joinSuccess2RemoteJoined;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " remoteJoined2SetView;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " remoteJoined2UnmuteVideo;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " remoteJoined2PacketReceived;"
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
`, _jsx("a", {
      id: "class_videorenderingtracinginfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "elapsedtime",
      children: _jsx(_components.code, {
        children: "elapsedTime"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), " 到 SDK 触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult",
        children: "onVideoRenderingTracingResult"
      }), " 回调的时间间隔，单位为毫秒。声网建议在加入频道前调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "start2joinchannel",
      children: _jsx(_components.code, {
        children: "start2JoinChannel"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), " 到调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 的时间间隔，单位为毫秒。若为负数，表示先调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 后调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "join2joinsuccess",
      children: _jsx(_components.code, {
        children: "join2JoinSuccess"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 到成功加入频道的时间间隔，单位为毫秒。"]
    }), `
`, _jsx(_components.h3, {
      id: "joinsuccess2remotejoined",
      children: _jsx(_components.code, {
        children: "joinSuccess2RemoteJoined"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["若本地用户在成功加入频道前调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "，该字段表示从本地用户成功加入频道到远端用户加入频道的时间间隔，单位为毫秒。若本地用户在成功加入频道后调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "，则为从调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), " 到远端用户加入频道的时间间隔，单位为毫秒。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果本地用户在远端用户加入频道后才调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
            children: "startMediaRenderingTracing"
          }), "，该值为 0，且无实际意义。为减少远端用户首帧渲染时间，声网建议在远端用户加入频道时再让本地用户加入频道，以减小该值。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "remotejoined2setview",
      children: _jsx(_components.code, {
        children: "remoteJoined2SetView"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["若本地用户在远端用户加入频道前调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "，该字段表示从远端用户加入频道到本地用户设置远端视图的时间间隔，单位为毫秒。若本地用户在远端用户加入频道后才调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "，则表示从调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), " 到设置远端视图的时间间隔，单位为毫秒。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果本地用户在设置远端视图之后才调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
            children: "startMediaRenderingTracing"
          }), "，该值为 0，且无效。为减少远端用户首帧渲染时间，声网建议在远端用户加入频道前设置远端视图，或在远端用户加入频道后立即设置远端视图，以减小该值。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "remotejoined2unmutevideo",
      children: _jsx(_components.code, {
        children: "remoteJoined2UnmuteVideo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["若本地用户在远端用户加入频道前调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "，该字段表示从远端用户加入频道到订阅远端视频流的时间间隔，单位为毫秒。若本地用户在远端用户加入频道后才调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "，表示从调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), " 到订阅远端视频流的时间间隔，单位为毫秒。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果在本地用户订阅远端视频流之后才调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
            children: "startMediaRenderingTracing"
          }), "，该值为 0，且无效。为减少远端用户首帧渲染时间，声网建议在远端用户加入频道后立即订阅其视频流，以缩短该值。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "remotejoined2packetreceived",
      children: _jsx(_components.code, {
        children: "remoteJoined2PacketReceived"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["若本地用户在远端用户加入频道前调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "，该字段表示从远端用户加入频道到本地用户接收到远端视频的时间间隔，单位为毫秒。若本地用户在远端用户加入频道后才调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), "，表示从调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), " 到接收远端视频流的时间间隔，单位为毫秒。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果本地用户在收到远端视频流之后才调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
            children: "startMediaRenderingTracing"
          }), "，该值为 0 且无效。为减少远端用户首帧渲染时延，声网建议远端用户在加入频道后立即发送视频，本地用户也应立即订阅视频流，以减小该值。"]
        })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
