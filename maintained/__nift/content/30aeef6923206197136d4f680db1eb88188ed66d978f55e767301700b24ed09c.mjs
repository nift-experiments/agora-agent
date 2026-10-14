import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "EncodedVideoFrameInfo",
  description: "包含外部编码视频帧的信息。"
};
export let _markdown = `

<a id="class_encodedvideoframeinfo__prototype" />

\`\`\`java
public class EncodedVideoFrameInfo {
  public int codecType;
  public int width;
  public int height;
  public int framesPerSecond;
  public int frameType;
  public int rotation;
  public int trackId;
  public long captureTimeMs;
  public long decodeTimeMs;
  public int streamType;
}
\`\`\`

<a id="class_encodedvideoframeinfo__parameters" />

## 属性 [#属性]

### \`codecType\` [#codectype]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在某些场景下，例如采集的视频流分辨率较低或设备性能受限，SDK 会自动调整为 H.264 编码格式。
  </CalloutDescription>
</CalloutContainer>

视频的编解码器类型：

* 1： VIDEO\\_CODEC\\_VP8，VP8。
* 2： VIDEO\\_CODEC\\_H264，H.264。
* 3：（默认） VIDEO\\_CODEC\\_H265，H.265。

### \`width\` [#width]

视频帧的宽度（单位：像素）。

### \`height\` [#height]

视频帧的高度（单位：像素）。

### \`framesPerSecond\` [#framespersecond]

视频帧的每秒帧数。当该参数不为 \`0\` 时，你可以使用它来计算外部编码视频帧的 Unix 时间戳。

### \`frameType\` [#frametype]

视频帧类型：

* 0：（默认） VIDEO\\_FRAME\\_TYPE\\_BLANK\\_FRAME，空白帧。
* 3： VIDEO\\_FRAME\\_TYPE\\_KEY\\_FRAME，关键帧。
* 4： VIDEO\\_FRAME\\_TYPE\\_DELTA\\_FRAME，Delta 帧。
* 5： VIDEO\\_FRAME\\_TYPE\\_B\\_FRAME，B 帧。
* 6： VIDEO\\_FRAME\\_TYPE\\_UNKNOW，未知帧。

### \`rotation\` [#rotation]

视频帧的旋转角度：

* 0：（默认）0 度。
* 90：90 度。
* 180：180 度。
* 270：270 度。

### \`trackId\` [#trackid]

保留参数，用于未来扩展。

### \`captureTimeMs\` [#capturetimems]

外部编码视频帧采集时的 Unix 时间戳（单位：毫秒）。

### \`decodeTimeMs\` [#decodetimems]

输出参数，表示解码该视频帧的时间戳（单位：毫秒）。

### \`streamType\` [#streamtype]

视频流的类型。
`;
export let structuredData = {
  contents: [{
    heading: "codectype",
    content: "在某些场景下，例如采集的视频流分辨率较低或设备性能受限，SDK 会自动调整为 H.264 编码格式。"
  }, {
    heading: "codectype",
    content: "视频的编解码器类型："
  }, {
    heading: "codectype",
    content: "1： VIDEO\\_CODEC\\_VP8，VP8。"
  }, {
    heading: "codectype",
    content: "2： VIDEO\\_CODEC\\_H264，H.264。"
  }, {
    heading: "codectype",
    content: "3：（默认） VIDEO\\_CODEC\\_H265，H.265。"
  }, {
    heading: "width",
    content: "视频帧的宽度（单位：像素）。"
  }, {
    heading: "height",
    content: "视频帧的高度（单位：像素）。"
  }, {
    heading: "framespersecond",
    content: "视频帧的每秒帧数。当该参数不为 `0` 时，你可以使用它来计算外部编码视频帧的 Unix 时间戳。"
  }, {
    heading: "frametype",
    content: "视频帧类型："
  }, {
    heading: "frametype",
    content: "0：（默认） VIDEO\\_FRAME\\_TYPE\\_BLANK\\_FRAME，空白帧。"
  }, {
    heading: "frametype",
    content: "3： VIDEO\\_FRAME\\_TYPE\\_KEY\\_FRAME，关键帧。"
  }, {
    heading: "frametype",
    content: "4： VIDEO\\_FRAME\\_TYPE\\_DELTA\\_FRAME，Delta 帧。"
  }, {
    heading: "frametype",
    content: "5： VIDEO\\_FRAME\\_TYPE\\_B\\_FRAME，B 帧。"
  }, {
    heading: "frametype",
    content: "6： VIDEO\\_FRAME\\_TYPE\\_UNKNOW，未知帧。"
  }, {
    heading: "rotation",
    content: "视频帧的旋转角度："
  }, {
    heading: "rotation",
    content: "0：（默认）0 度。"
  }, {
    heading: "rotation",
    content: "90：90 度。"
  }, {
    heading: "rotation",
    content: "180：180 度。"
  }, {
    heading: "rotation",
    content: "270：270 度。"
  }, {
    heading: "trackid",
    content: "保留参数，用于未来扩展。"
  }, {
    heading: "capturetimems",
    content: "外部编码视频帧采集时的 Unix 时间戳（单位：毫秒）。"
  }, {
    heading: "decodetimems",
    content: "输出参数，表示解码该视频帧的时间戳（单位：毫秒）。"
  }, {
    heading: "streamtype",
    content: "视频流的类型。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "codectype",
    content: "`codecType`"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "framespersecond",
    content: "`framesPerSecond`"
  }, {
    id: "frametype",
    content: "`frameType`"
  }, {
    id: "rotation",
    content: "`rotation`"
  }, {
    id: "trackid",
    content: "`trackId`"
  }, {
    id: "capturetimems",
    content: "`captureTimeMs`"
  }, {
    id: "decodetimems",
    content: "`decodeTimeMs`"
  }, {
    id: "streamtype",
    content: "`streamType`"
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
  url: "#codectype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "codecType"
    })
  })
}, {
  depth: 3,
  url: "#width",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "width"
    })
  })
}, {
  depth: 3,
  url: "#height",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "height"
    })
  })
}, {
  depth: 3,
  url: "#framespersecond",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "framesPerSecond"
    })
  })
}, {
  depth: 3,
  url: "#frametype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frameType"
    })
  })
}, {
  depth: 3,
  url: "#rotation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rotation"
    })
  })
}, {
  depth: 3,
  url: "#trackid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "trackId"
    })
  })
}, {
  depth: 3,
  url: "#capturetimems",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "captureTimeMs"
    })
  })
}, {
  depth: 3,
  url: "#decodetimems",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "decodeTimeMs"
    })
  })
}, {
  depth: 3,
  url: "#streamtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamType"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
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
      id: "class_encodedvideoframeinfo__prototype"
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
              children: " EncodedVideoFrameInfo"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " codecType;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " width;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " height;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " framesPerSecond;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " frameType;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rotation;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " trackId;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " captureTimeMs;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " decodeTimeMs;"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " streamType;"
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
      id: "class_encodedvideoframeinfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "codectype",
      children: _jsx(_components.code, {
        children: "codecType"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "在某些场景下，例如采集的视频流分辨率较低或设备性能受限，SDK 会自动调整为 H.264 编码格式。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "视频的编解码器类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1： VIDEO_CODEC_VP8，VP8。"
      }), `
`, _jsx(_components.li, {
        children: "2： VIDEO_CODEC_H264，H.264。"
      }), `
`, _jsx(_components.li, {
        children: "3：（默认） VIDEO_CODEC_H265，H.265。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧的宽度（单位：像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧的高度（单位：像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "framespersecond",
      children: _jsx(_components.code, {
        children: "framesPerSecond"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频帧的每秒帧数。当该参数不为 ", _jsx(_components.code, {
        children: "0"
      }), " 时，你可以使用它来计算外部编码视频帧的 Unix 时间戳。"]
    }), `
`, _jsx(_components.h3, {
      id: "frametype",
      children: _jsx(_components.code, {
        children: "frameType"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：（默认） VIDEO_FRAME_TYPE_BLANK_FRAME，空白帧。"
      }), `
`, _jsx(_components.li, {
        children: "3： VIDEO_FRAME_TYPE_KEY_FRAME，关键帧。"
      }), `
`, _jsx(_components.li, {
        children: "4： VIDEO_FRAME_TYPE_DELTA_FRAME，Delta 帧。"
      }), `
`, _jsx(_components.li, {
        children: "5： VIDEO_FRAME_TYPE_B_FRAME，B 帧。"
      }), `
`, _jsx(_components.li, {
        children: "6： VIDEO_FRAME_TYPE_UNKNOW，未知帧。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "rotation",
      children: _jsx(_components.code, {
        children: "rotation"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧的旋转角度："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：（默认）0 度。"
      }), `
`, _jsx(_components.li, {
        children: "90：90 度。"
      }), `
`, _jsx(_components.li, {
        children: "180：180 度。"
      }), `
`, _jsx(_components.li, {
        children: "270：270 度。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "trackid",
      children: _jsx(_components.code, {
        children: "trackId"
      })
    }), `
`, _jsx(_components.p, {
      children: "保留参数，用于未来扩展。"
    }), `
`, _jsx(_components.h3, {
      id: "capturetimems",
      children: _jsx(_components.code, {
        children: "captureTimeMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部编码视频帧采集时的 Unix 时间戳（单位：毫秒）。"
    }), `
`, _jsx(_components.h3, {
      id: "decodetimems",
      children: _jsx(_components.code, {
        children: "decodeTimeMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "输出参数，表示解码该视频帧的时间戳（单位：毫秒）。"
    }), `
`, _jsx(_components.h3, {
      id: "streamtype",
      children: _jsx(_components.code, {
        children: "streamType"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流的类型。"
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
