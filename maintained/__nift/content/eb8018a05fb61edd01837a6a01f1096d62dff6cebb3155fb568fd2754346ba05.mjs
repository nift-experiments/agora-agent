import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "CameraCapturerConfiguration",
  description: "用于设置摄像头采集偏好。"
};
export let _markdown = `

<a id="class_cameracapturerconfiguration__prototype" />

\`\`\`java
public class CameraCapturerConfiguration {
  public CAMERA_DIRECTION cameraDirection = null;
  public String cameraId = null;
  public CAMERA_FOCAL_LENGTH_TYPE cameraFocalLengthType = null;
  public CaptureFormat captureFormat;
  public Boolean followEncodeDimensionRatio = null;
}
\`\`\`

<a id="class_cameracapturerconfiguration__parameters" />

## 属性 [#属性]

### \`cameraDirection\` [#cameradirection]

（可选）摄像头朝向。详见 [CAMERA\\_DIRECTION](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-cameradirection)。

### \`cameraId\` [#cameraid]

（可选）摄像头 ID，默认值为前置摄像头的 ID。你可以通过 Android 原生系统 API 获取 camera ID。

注： 此参数与 \`cameraDirection\` 在摄像头选择上互斥，你可以根据需要选择其中一个。

* 通过 cameraDirection 指定摄像头更加便捷。你只需指定摄像头朝向（前置或后置），不需要显式指定 camera ID；SDK 会通过 Android 原生 API 获取并确认实际的 camera ID。
* 通过 cameraId 指定摄像头可以更精确定位某个摄像头。对于拥有多个摄像头的设备，当 cameraDirection 无法识别或访问全部摄像头时，建议使用 cameraId 明确指定所需的摄像头 ID。

### \`cameraFocalLengthType\` [#camerafocallengthtype]

（可选）摄像头焦距类型。详见 [CAMERA\\_FOCAL\\_LENGTH\\_TYPE](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-camerafocallengthtype)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    要设置摄像头焦距类型，仅支持通过 \`cameraDirection\` 来指定摄像头，不支持通过 \`cameraId\` 指定。
  </CalloutDescription>
</CalloutContainer>

### \`captureFormat\` [#captureformat]

（可选）视频帧的格式。详见 [CaptureFormat](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videoformat)。

### \`followEncodeDimensionRatio\` [#followencodedimensionratio]

（可选）是否遵循 [setVideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration) 中设置的视频宽高比。

* true：（默认）遵循设置的视频宽高比。SDK 会根据设置的视频比例裁剪采集视频，并同步修改本地预览画面，以及 onCaptureVideoFrame 和 onPreEncodeVideoFrame 中的视频帧。
* false：不遵循设置的视频宽高比。SDK 不会修改采集的视频帧宽高比。
`;
export let structuredData = {
  contents: [{
    heading: "cameradirection",
    content: "（可选）摄像头朝向。详见 CAMERA\\_DIRECTION。"
  }, {
    heading: "cameraid",
    content: "（可选）摄像头 ID，默认值为前置摄像头的 ID。你可以通过 Android 原生系统 API 获取 camera ID。"
  }, {
    heading: "cameraid",
    content: "注： 此参数与 `cameraDirection` 在摄像头选择上互斥，你可以根据需要选择其中一个。"
  }, {
    heading: "cameraid",
    content: "通过 cameraDirection 指定摄像头更加便捷。你只需指定摄像头朝向（前置或后置），不需要显式指定 camera ID；SDK 会通过 Android 原生 API 获取并确认实际的 camera ID。"
  }, {
    heading: "cameraid",
    content: "通过 cameraId 指定摄像头可以更精确定位某个摄像头。对于拥有多个摄像头的设备，当 cameraDirection 无法识别或访问全部摄像头时，建议使用 cameraId 明确指定所需的摄像头 ID。"
  }, {
    heading: "camerafocallengthtype",
    content: "（可选）摄像头焦距类型。详见 CAMERA\\_FOCAL\\_LENGTH\\_TYPE。"
  }, {
    heading: "camerafocallengthtype",
    content: "要设置摄像头焦距类型，仅支持通过 `cameraDirection` 来指定摄像头，不支持通过 `cameraId` 指定。"
  }, {
    heading: "captureformat",
    content: "（可选）视频帧的格式。详见 CaptureFormat。"
  }, {
    heading: "followencodedimensionratio",
    content: "（可选）是否遵循 setVideoEncoderConfiguration 中设置的视频宽高比。"
  }, {
    heading: "followencodedimensionratio",
    content: "true：（默认）遵循设置的视频宽高比。SDK 会根据设置的视频比例裁剪采集视频，并同步修改本地预览画面，以及 onCaptureVideoFrame 和 onPreEncodeVideoFrame 中的视频帧。"
  }, {
    heading: "followencodedimensionratio",
    content: "false：不遵循设置的视频宽高比。SDK 不会修改采集的视频帧宽高比。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "cameradirection",
    content: "`cameraDirection`"
  }, {
    id: "cameraid",
    content: "`cameraId`"
  }, {
    id: "camerafocallengthtype",
    content: "`cameraFocalLengthType`"
  }, {
    id: "captureformat",
    content: "`captureFormat`"
  }, {
    id: "followencodedimensionratio",
    content: "`followEncodeDimensionRatio`"
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
  url: "#cameradirection",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cameraDirection"
    })
  })
}, {
  depth: 3,
  url: "#cameraid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cameraId"
    })
  })
}, {
  depth: 3,
  url: "#camerafocallengthtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cameraFocalLengthType"
    })
  })
}, {
  depth: 3,
  url: "#captureformat",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "captureFormat"
    })
  })
}, {
  depth: 3,
  url: "#followencodedimensionratio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "followEncodeDimensionRatio"
    })
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_cameracapturerconfiguration__prototype"
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
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " CameraCapturerConfiguration"
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
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " CAMERA_DIRECTION cameraDirection "
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
              children: " null"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String cameraId "
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
              children: " null"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " CAMERA_FOCAL_LENGTH_TYPE cameraFocalLengthType "
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
              children: " null"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " CaptureFormat captureFormat;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean followEncodeDimensionRatio "
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
              children: " null"
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
`, _jsx("a", {
      id: "class_cameracapturerconfiguration__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "cameradirection",
      children: _jsx(_components.code, {
        children: "cameraDirection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（可选）摄像头朝向。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-cameradirection",
        children: "CAMERA_DIRECTION"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "cameraid",
      children: _jsx(_components.code, {
        children: "cameraId"
      })
    }), `
`, _jsx(_components.p, {
      children: "（可选）摄像头 ID，默认值为前置摄像头的 ID。你可以通过 Android 原生系统 API 获取 camera ID。"
    }), `
`, _jsxs(_components.p, {
      children: ["注： 此参数与 ", _jsx(_components.code, {
        children: "cameraDirection"
      }), " 在摄像头选择上互斥，你可以根据需要选择其中一个。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "通过 cameraDirection 指定摄像头更加便捷。你只需指定摄像头朝向（前置或后置），不需要显式指定 camera ID；SDK 会通过 Android 原生 API 获取并确认实际的 camera ID。"
      }), `
`, _jsx(_components.li, {
        children: "通过 cameraId 指定摄像头可以更精确定位某个摄像头。对于拥有多个摄像头的设备，当 cameraDirection 无法识别或访问全部摄像头时，建议使用 cameraId 明确指定所需的摄像头 ID。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "camerafocallengthtype",
      children: _jsx(_components.code, {
        children: "cameraFocalLengthType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（可选）摄像头焦距类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-camerafocallengthtype",
        children: "CAMERA_FOCAL_LENGTH_TYPE"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["要设置摄像头焦距类型，仅支持通过 ", _jsx(_components.code, {
            children: "cameraDirection"
          }), " 来指定摄像头，不支持通过 ", _jsx(_components.code, {
            children: "cameraId"
          }), " 指定。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "captureformat",
      children: _jsx(_components.code, {
        children: "captureFormat"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（可选）视频帧的格式。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videoformat",
        children: "CaptureFormat"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "followencodedimensionratio",
      children: _jsx(_components.code, {
        children: "followEncodeDimensionRatio"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（可选）是否遵循 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration",
        children: "setVideoEncoderConfiguration"
      }), " 中设置的视频宽高比。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）遵循设置的视频宽高比。SDK 会根据设置的视频比例裁剪采集视频，并同步修改本地预览画面，以及 onCaptureVideoFrame 和 onPreEncodeVideoFrame 中的视频帧。"
      }), `
`, _jsx(_components.li, {
        children: "false：不遵循设置的视频宽高比。SDK 不会修改采集的视频帧宽高比。"
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
