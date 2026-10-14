import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "摄像头采集",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_camera_capture" />

<a id="api_irtcengine_startcameracapture" />

## startCameraCapture [#startcameracapture]

开始视频采集。

<a id="api_irtcengine_startcameracapture__prototype" />

\`\`\`java
public abstract int startCameraCapture(Constants.VideoSourceType sourceType, CameraCapturerConfiguration config);
\`\`\`

<a id="api_irtcengine_startcameracapture__detailed_desc" />

你可以调用该方法，并通过指定 \`sourceType\` 开始从一个或多个摄像头采集视频。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在 Android 设备上，如果设备有多个摄像头或支持外接摄像头，你最多可以从 4 个摄像头采集视频。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_startcameracapture__parameters" />

### 参数 [#参数]

#### \`sourceType\` [#sourcetype]

视频源的类型。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在 Android 设备上，如果设备有多个摄像头或支持外接摄像头，你最多可以从 4 个摄像头采集视频。
  </CalloutDescription>
</CalloutContainer>

#### \`config\` [#config]

视频采集的配置。详见 [CameraCapturerConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-cameracapturerconfiguration)。

<a id="api_irtcengine_startcameracapture__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stopcameracapture" />

## stopCameraCapture [#stopcameracapture]

停止摄像头采集。

<a id="api_irtcengine_stopcameracapture__prototype" />

\`\`\`java
public abstract int stopCameraCapture(Constants.VideoSourceType sourceType);
\`\`\`

<a id="api_irtcengine_stopcameracapture__detailed_desc" />

你可以调用 [stopCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_stopcameracapture) 并设置 \`sourceType\` 参数，停止指定摄像头的视频采集。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你正在使用本地合图功能，调用此方法可能会导致本地合图中断。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_stopcameracapture__parameters" />

### 参数 [#参数-1]

#### \`sourceType\` [#sourcetype-1]

视频源的类型。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

<a id="api_irtcengine_stopcameracapture__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "startcameracapture",
    content: "开始视频采集。"
  }, {
    heading: "startcameracapture",
    content: "你可以调用该方法，并通过指定 `sourceType` 开始从一个或多个摄像头采集视频。"
  }, {
    heading: "startcameracapture",
    content: "在 Android 设备上，如果设备有多个摄像头或支持外接摄像头，你最多可以从 4 个摄像头采集视频。"
  }, {
    heading: "sourcetype",
    content: "视频源的类型。详见 VideoSourceType。"
  }, {
    heading: "sourcetype",
    content: "在 Android 设备上，如果设备有多个摄像头或支持外接摄像头，你最多可以从 4 个摄像头采集视频。"
  }, {
    heading: "config",
    content: "视频采集的配置。详见 CameraCapturerConfiguration。"
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
    heading: "stopcameracapture",
    content: "停止摄像头采集。"
  }, {
    heading: "stopcameracapture",
    content: "你可以调用 stopCameraCapture 并设置 `sourceType` 参数，停止指定摄像头的视频采集。"
  }, {
    heading: "stopcameracapture",
    content: "如果你正在使用本地合图功能，调用此方法可能会导致本地合图中断。"
  }, {
    heading: "sourcetype-1",
    content: "视频源的类型。详见 VideoSourceType。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }],
  headings: [{
    id: "startcameracapture",
    content: "startCameraCapture"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "stopcameracapture",
    content: "stopCameraCapture"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "sourcetype-1",
    content: "`sourceType`"
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
  url: "#startcameracapture",
  title: _jsx(_Fragment, {
    children: "startCameraCapture"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#sourcetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
    })
  })
}, {
  depth: 4,
  url: "#config",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#stopcameracapture",
  title: _jsx(_Fragment, {
    children: "stopCameraCapture"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#sourcetype-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
      id: "toc_camera_capture"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startcameracapture"
    }), `
`, _jsx(_components.h2, {
      id: "startcameracapture",
      children: "startCameraCapture"
    }), `
`, _jsx(_components.p, {
      children: "开始视频采集。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startcameracapture__prototype"
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
              children: " startCameraCapture"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType sourceType, CameraCapturerConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startcameracapture__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法，并通过指定 ", _jsx(_components.code, {
        children: "sourceType"
      }), " 开始从一个或多个摄像头采集视频。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "在 Android 设备上，如果设备有多个摄像头或支持外接摄像头，你最多可以从 4 个摄像头采集视频。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startcameracapture__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源的类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "在 Android 设备上，如果设备有多个摄像头或支持外接摄像头，你最多可以从 4 个摄像头采集视频。"
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频采集的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-cameracapturerconfiguration",
        children: "CameraCapturerConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startcameracapture__return_values"
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
      id: "api_irtcengine_stopcameracapture"
    }), `
`, _jsx(_components.h2, {
      id: "stopcameracapture",
      children: "stopCameraCapture"
    }), `
`, _jsx(_components.p, {
      children: "停止摄像头采集。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopcameracapture__prototype"
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
              children: " stopCameraCapture"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopcameracapture__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_stopcameracapture",
        children: "stopCameraCapture"
      }), " 并设置 ", _jsx(_components.code, {
        children: "sourceType"
      }), " 参数，停止指定摄像头的视频采集。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果你正在使用本地合图功能，调用此方法可能会导致本地合图中断。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopcameracapture__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-1",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源的类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopcameracapture__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
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
      id: "所属接口类-1",
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
