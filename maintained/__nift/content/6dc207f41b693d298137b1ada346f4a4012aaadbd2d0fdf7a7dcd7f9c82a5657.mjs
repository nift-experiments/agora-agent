import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "已编码视频数据",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_video_encoded" />

<a id="api_irtcengine_registervideoencodedframeobserver" />

## registerVideoEncodedFrameObserver [#registervideoencodedframeobserver]

注册用于接收编码后视频帧的观察器对象。

<a id="api_irtcengine_registervideoencodedframeobserver__prototype" />

\`\`\`java
public abstract int registerVideoEncodedFrameObserver(IVideoEncodedFrameObserver receiver);
\`\`\`

<a id="api_irtcengine_registervideoencodedframeobserver__detailed_desc" />

建议通过此方法注册一个 [IVideoEncodedFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoencodedframeobserver) 实例，用于观察编码后的视频帧（例如 H.264 格式），而不进行解码和渲染。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在加入频道前调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_registervideoencodedframeobserver__parameters" />

### 参数 [#参数]

#### \`receiver\` [#receiver]

编码后视频帧的观察器对象，详见 [IVideoEncodedFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoencodedframeobserver)。

<a id="api_irtcengine_registervideoencodedframeobserver__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_ivideoencodedframeobserver_onencodedvideoframereceived" />

## onEncodedVideoFrameReceived [#onencodedvideoframereceived]

接收端收到远端编码视频帧回调。

<a id="callback_ivideoencodedframeobserver_onencodedvideoframereceived__prototype" />

\`\`\`java
boolean onEncodedVideoFrameReceived(String channelId, int remoteUid, ByteBuffer buffer, EncodedVideoFrameInfo info)
\`\`\`

<a id="callback_ivideoencodedframeobserver_onencodedvideoframereceived__detailed_desc" />

#### \`自从\` [#自从]

自 v4.6.0 版本新增。

如果你调用了 [setRemoteVideoSubscriptionOptions](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideosubscriptionoptions) 方法并将 \`encodedFrameOnly\` 设置为 true，SDK 会在本地触发该回调，报告接收到的编码视频帧信息。

<a id="callback_ivideoencodedframeobserver_onencodedvideoframereceived__parameters" />

### 参数 [#参数-1]

#### \`channelId\` [#channelid]

频道名。

#### \`remoteUid\` [#remoteuid]

远端用户 ID。

#### \`buffer\` [#buffer]

编码后的视频图像缓冲区。

#### \`info\` [#info]

编码视频帧的信息，详见 [EncodedVideoFrameInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-encodedvideoframeinfo)。

<a id="callback_ivideoencodedframeobserver_onencodedvideoframereceived__return_values" />

### 返回值 [#返回值-1]

* true：回调处理成功。
* false：回调处理失败。

### 所属接口类 [#所属接口类-1]

* [IVideoEncodedFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoencodedframeobserver)
`;
export let structuredData = {
  contents: [{
    heading: "registervideoencodedframeobserver",
    content: "注册用于接收编码后视频帧的观察器对象。"
  }, {
    heading: "registervideoencodedframeobserver",
    content: "建议通过此方法注册一个 IVideoEncodedFrameObserver 实例，用于观察编码后的视频帧（例如 H.264 格式），而不进行解码和渲染。"
  }, {
    heading: "registervideoencodedframeobserver",
    content: "请在加入频道前调用此方法。"
  }, {
    heading: "receiver",
    content: "编码后视频帧的观察器对象，详见 IVideoEncodedFrameObserver。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "onencodedvideoframereceived",
    content: "接收端收到远端编码视频帧回调。"
  }, {
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从",
    content: "如果你调用了 setRemoteVideoSubscriptionOptions 方法并将 `encodedFrameOnly` 设置为 true，SDK 会在本地触发该回调，报告接收到的编码视频帧信息。"
  }, {
    heading: "channelid",
    content: "频道名。"
  }, {
    heading: "remoteuid",
    content: "远端用户 ID。"
  }, {
    heading: "buffer",
    content: "编码后的视频图像缓冲区。"
  }, {
    heading: "info",
    content: "编码视频帧的信息，详见 EncodedVideoFrameInfo。"
  }, {
    heading: "返回值-1",
    content: "true：回调处理成功。"
  }, {
    heading: "返回值-1",
    content: "false：回调处理失败。"
  }, {
    heading: "所属接口类-1",
    content: "IVideoEncodedFrameObserver"
  }],
  headings: [{
    id: "registervideoencodedframeobserver",
    content: "registerVideoEncodedFrameObserver"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "receiver",
    content: "`receiver`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "onencodedvideoframereceived",
    content: "onEncodedVideoFrameReceived"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "channelid",
    content: "`channelId`"
  }, {
    id: "remoteuid",
    content: "`remoteUid`"
  }, {
    id: "buffer",
    content: "`buffer`"
  }, {
    id: "info",
    content: "`info`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#registervideoencodedframeobserver",
  title: _jsx(_Fragment, {
    children: "registerVideoEncodedFrameObserver"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#receiver",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "receiver"
    })
  })
}, {
  depth: 3,
  url: "#返回值",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onencodedvideoframereceived",
  title: _jsx(_Fragment, {
    children: "onEncodedVideoFrameReceived"
  })
}, {
  depth: 4,
  url: "#自从",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#channelid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelId"
    })
  })
}, {
  depth: 4,
  url: "#remoteuid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "remoteUid"
    })
  })
}, {
  depth: 4,
  url: "#buffer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 4,
  url: "#info",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "info"
    })
  })
}, {
  depth: 3,
  url: "#返回值-1",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-1",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
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
      id: "toc_video_encoded"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoencodedframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "registervideoencodedframeobserver",
      children: "registerVideoEncodedFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册用于接收编码后视频帧的观察器对象。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoencodedframeobserver__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " registerVideoEncodedFrameObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IVideoEncodedFrameObserver receiver);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoencodedframeobserver__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["建议通过此方法注册一个 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoencodedframeobserver",
        children: "IVideoEncodedFrameObserver"
      }), " 实例，用于观察编码后的视频帧（例如 H.264 格式），而不进行解码和渲染。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请在加入频道前调用此方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoencodedframeobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "receiver",
      children: _jsx(_components.code, {
        children: "receiver"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["编码后视频帧的观察器对象，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoencodedframeobserver",
        children: "IVideoEncodedFrameObserver"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoencodedframeobserver__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：方法调用失败。详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
          children: "错误码"
        }), "了解详情和解决建议。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_ivideoencodedframeobserver_onencodedvideoframereceived"
    }), `
`, _jsx(_components.h2, {
      id: "onencodedvideoframereceived",
      children: "onEncodedVideoFrameReceived"
    }), `
`, _jsx(_components.p, {
      children: "接收端收到远端编码视频帧回调。"
    }), `
`, _jsx("a", {
      id: "callback_ivideoencodedframeobserver_onencodedvideoframereceived__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onEncodedVideoFrameReceived"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String channelId, "
            }), _jsx(_components.span, {
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
              children: " remoteUid, ByteBuffer buffer, EncodedVideoFrameInfo info)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_ivideoencodedframeobserver_onencodedvideoframereceived__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你调用了 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideosubscriptionoptions",
        children: "setRemoteVideoSubscriptionOptions"
      }), " 方法并将 ", _jsx(_components.code, {
        children: "encodedFrameOnly"
      }), " 设置为 true，SDK 会在本地触发该回调，报告接收到的编码视频帧信息。"]
    }), `
`, _jsx("a", {
      id: "callback_ivideoencodedframeobserver_onencodedvideoframereceived__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelid",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。"
    }), `
`, _jsx(_components.h4, {
      id: "remoteuid",
      children: _jsx(_components.code, {
        children: "remoteUid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "buffer",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsx(_components.p, {
      children: "编码后的视频图像缓冲区。"
    }), `
`, _jsx(_components.h4, {
      id: "info",
      children: _jsx(_components.code, {
        children: "info"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["编码视频帧的信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-encodedvideoframeinfo",
        children: "EncodedVideoFrameInfo"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "callback_ivideoencodedframeobserver_onencodedvideoframereceived__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：回调处理成功。"
      }), `
`, _jsx(_components.li, {
        children: "false：回调处理失败。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoencodedframeobserver",
          children: "IVideoEncodedFrameObserver"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
