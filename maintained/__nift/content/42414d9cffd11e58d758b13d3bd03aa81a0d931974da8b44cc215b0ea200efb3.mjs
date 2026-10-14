import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "人脸检测",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_face_detection" />

<a id="api_irtcengine_enablefacedetection" />

## enableFaceDetection [#enablefacedetection]

启用或关闭本地用户的人脸检测功能。

<a id="api_irtcengine_enablefacedetection__prototype" />

\`\`\`java
public abstract int enableFaceDetection(boolean enabled);
\`\`\`

<a id="api_irtcengine_enablefacedetection__detailed_desc" />

<a id="api_irtcengine_enablefacedetection__timing" />

### 调用时机 [#调用时机]

该方法需在调用 \`startPreview\` 或 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 启动相机后调用。

<a id="api_irtcengine_enablefacedetection__related" />

### 相关回调 [#相关回调]

启用人脸检测后，SDK 会触发 [onFacePositionChanged](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#callback_irtcengineeventhandler_onfacepositionchanged) 回调，报告本地用户的人脸信息，包括：

* 本地视频的宽度和高度。
* 人脸在本地视图中的位置。
* 人脸与屏幕之间的距离。

<a id="api_irtcengine_enablefacedetection__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否启用本地用户的人脸检测功能：

* true：启用人脸检测。
* false：（默认）关闭人脸检测。

<a id="api_irtcengine_enablefacedetection__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onfacepositionchanged" />

## onFacePositionChanged [#onfacepositionchanged]

上报本地用户的人脸检测结果。

<a id="callback_irtcengineeventhandler_onfacepositionchanged__prototype" />

\`\`\`java
public void onFacePositionChanged(int imageWidth, int imageHeight, AgoraFacePositionInfo[] faceRectArr)
\`\`\`

<a id="callback_irtcengineeventhandler_onfacepositionchanged__detailed_desc" />

调用 \`enableFaceDetection(true)\` 启用人脸检测功能后，你可以实时获取以下信息：

* 本地视频的宽度和高度。
* 人脸在本地视图中的位置。
* 人脸与屏幕之间的距离。该距离值基于本地视频尺寸和人脸位置的拟合计算得出。

注：

* 当检测到摄像头前的人脸消失时，会立即触发该回调。当未检测到人脸时，为降低本地设备的功耗，该回调的触发频率会降低。
* 当人脸靠近屏幕时，SDK 会停止触发该回调。
* 在 Android 平台，该回调中上报的距离值可能与实际距离略有偏差，因此不建议用于精确计算。

<a id="callback_irtcengineeventhandler_onfacepositionchanged__parameters" />

### 参数 [#参数-1]

#### \`imageWidth\` [#imagewidth]

本地摄像头采集的视频图像的宽度（单位为像素）。

#### \`imageHeight\` [#imageheight]

本地摄像头采集的视频图像的高度（单位为像素）。

#### \`faceRectArr\` [#facerectarr]

检测到的人脸信息。该数组的长度取决于检测到的人脸数量，可能为 0，表示摄像头前未检测到人脸。详见 [AgoraFacePositionInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorafacepositioninfo)。

### 所属接口类 [#所属接口类-1]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "enablefacedetection",
    content: "启用或关闭本地用户的人脸检测功能。"
  }, {
    heading: "调用时机",
    content: "该方法需在调用 `startPreview` 或 enableVideo 启动相机后调用。"
  }, {
    heading: "相关回调",
    content: "启用人脸检测后，SDK 会触发 onFacePositionChanged 回调，报告本地用户的人脸信息，包括："
  }, {
    heading: "相关回调",
    content: "本地视频的宽度和高度。"
  }, {
    heading: "相关回调",
    content: "人脸在本地视图中的位置。"
  }, {
    heading: "相关回调",
    content: "人脸与屏幕之间的距离。"
  }, {
    heading: "enabled",
    content: "是否启用本地用户的人脸检测功能："
  }, {
    heading: "enabled",
    content: "true：启用人脸检测。"
  }, {
    heading: "enabled",
    content: "false：（默认）关闭人脸检测。"
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
    heading: "onfacepositionchanged",
    content: "上报本地用户的人脸检测结果。"
  }, {
    heading: "onfacepositionchanged",
    content: "调用 `enableFaceDetection(true)` 启用人脸检测功能后，你可以实时获取以下信息："
  }, {
    heading: "onfacepositionchanged",
    content: "本地视频的宽度和高度。"
  }, {
    heading: "onfacepositionchanged",
    content: "人脸在本地视图中的位置。"
  }, {
    heading: "onfacepositionchanged",
    content: "人脸与屏幕之间的距离。该距离值基于本地视频尺寸和人脸位置的拟合计算得出。"
  }, {
    heading: "onfacepositionchanged",
    content: "注："
  }, {
    heading: "onfacepositionchanged",
    content: "当检测到摄像头前的人脸消失时，会立即触发该回调。当未检测到人脸时，为降低本地设备的功耗，该回调的触发频率会降低。"
  }, {
    heading: "onfacepositionchanged",
    content: "当人脸靠近屏幕时，SDK 会停止触发该回调。"
  }, {
    heading: "onfacepositionchanged",
    content: "在 Android 平台，该回调中上报的距离值可能与实际距离略有偏差，因此不建议用于精确计算。"
  }, {
    heading: "imagewidth",
    content: "本地摄像头采集的视频图像的宽度（单位为像素）。"
  }, {
    heading: "imageheight",
    content: "本地摄像头采集的视频图像的高度（单位为像素）。"
  }, {
    heading: "facerectarr",
    content: "检测到的人脸信息。该数组的长度取决于检测到的人脸数量，可能为 0，表示摄像头前未检测到人脸。详见 AgoraFacePositionInfo。"
  }, {
    heading: "所属接口类-1",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "enablefacedetection",
    content: "enableFaceDetection"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "onfacepositionchanged",
    content: "onFacePositionChanged"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "imagewidth",
    content: "`imageWidth`"
  }, {
    id: "imageheight",
    content: "`imageHeight`"
  }, {
    id: "facerectarr",
    content: "`faceRectArr`"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enablefacedetection",
  title: _jsx(_Fragment, {
    children: "enableFaceDetection"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
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
  url: "#onfacepositionchanged",
  title: _jsx(_Fragment, {
    children: "onFacePositionChanged"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#imagewidth",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "imageWidth"
    })
  })
}, {
  depth: 4,
  url: "#imageheight",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "imageHeight"
    })
  })
}, {
  depth: 4,
  url: "#facerectarr",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "faceRectArr"
    })
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "toc_face_detection"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablefacedetection"
    }), `
`, _jsx(_components.h2, {
      id: "enablefacedetection",
      children: "enableFaceDetection"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭本地用户的人脸检测功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablefacedetection__prototype"
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
              children: " enableFaceDetection"
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
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enabled);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablefacedetection__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablefacedetection__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法需在调用 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 启动相机后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablefacedetection__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["启用人脸检测后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#callback_irtcengineeventhandler_onfacepositionchanged",
        children: "onFacePositionChanged"
      }), " 回调，报告本地用户的人脸信息，包括："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地视频的宽度和高度。"
      }), `
`, _jsx(_components.li, {
        children: "人脸在本地视图中的位置。"
      }), `
`, _jsx(_components.li, {
        children: "人脸与屏幕之间的距离。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablefacedetection__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用本地用户的人脸检测功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用人脸检测。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭人脸检测。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablefacedetection__return_values"
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
      id: "callback_irtcengineeventhandler_onfacepositionchanged"
    }), `
`, _jsx(_components.h2, {
      id: "onfacepositionchanged",
      children: "onFacePositionChanged"
    }), `
`, _jsx(_components.p, {
      children: "上报本地用户的人脸检测结果。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfacepositionchanged__prototype"
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
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onFacePositionChanged"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " imageWidth, "
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
              children: " imageHeight, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "AgoraFacePositionInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] faceRectArr)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfacepositionchanged__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "enableFaceDetection(true)"
      }), " 启用人脸检测功能后，你可以实时获取以下信息："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地视频的宽度和高度。"
      }), `
`, _jsx(_components.li, {
        children: "人脸在本地视图中的位置。"
      }), `
`, _jsx(_components.li, {
        children: "人脸与屏幕之间的距离。该距离值基于本地视频尺寸和人脸位置的拟合计算得出。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当检测到摄像头前的人脸消失时，会立即触发该回调。当未检测到人脸时，为降低本地设备的功耗，该回调的触发频率会降低。"
      }), `
`, _jsx(_components.li, {
        children: "当人脸靠近屏幕时，SDK 会停止触发该回调。"
      }), `
`, _jsx(_components.li, {
        children: "在 Android 平台，该回调中上报的距离值可能与实际距离略有偏差，因此不建议用于精确计算。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfacepositionchanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "imagewidth",
      children: _jsx(_components.code, {
        children: "imageWidth"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地摄像头采集的视频图像的宽度（单位为像素）。"
    }), `
`, _jsx(_components.h4, {
      id: "imageheight",
      children: _jsx(_components.code, {
        children: "imageHeight"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地摄像头采集的视频图像的高度（单位为像素）。"
    }), `
`, _jsx(_components.h4, {
      id: "facerectarr",
      children: _jsx(_components.code, {
        children: "faceRectArr"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["检测到的人脸信息。该数组的长度取决于检测到的人脸数量，可能为 0，表示摄像头前未检测到人脸。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-agorafacepositioninfo",
        children: "AgoraFacePositionInfo"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
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
