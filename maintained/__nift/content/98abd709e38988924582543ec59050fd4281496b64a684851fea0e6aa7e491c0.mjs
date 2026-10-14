import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TranscodingVideoStream",
  description: "用于配置本地合图的视频流。"
};
export let _markdown = `

<a id="class_transcodingvideostream__prototype" />

\`\`\`java
public static class TranscodingVideoStream {
    public int remoteUserUid;
    public Constants.VideoSourceType sourceType;
    public String imageUrl;
    public int mediaPlayerId;
    public int x;
    public int y;
    public int width;
    public int height;
    public int zOrder;
    public double alpha;
    public boolean mirror;
  }
\`\`\`

<a id="class_transcodingvideostream__detailed_desc" />

用于配置本地合图中各个视频流的位置、尺寸、图层等信息。

<a id="class_transcodingvideostream__parameters" />

## 属性 [#属性]

### \`remoteUserUid\` [#remoteuseruid]

远端用户 ID。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    仅当 \`sourceType\` 设置为 \`VIDEO_SOURCE_REMOTE\` 进行本地合图时使用该参数。
  </CalloutDescription>
</CalloutContainer>

### \`sourceType\` [#sourcetype]

视频源类型。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

### \`imageUrl\` [#imageurl]

本地图片的文件路径，例如：Android: \`/storage/emulated/0/Pictures/image.png\`。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    仅当 \`sourceType\` 设置为图片时使用该参数进行本地合图。
  </CalloutDescription>
</CalloutContainer>

### \`mediaPlayerId\` [#mediaplayerid]

媒体播放器 ID。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    仅当 \`sourceType\` 设置为 \`VIDEO_SOURCE_MEDIA_PLAYER\` 时使用该参数。
  </CalloutDescription>
</CalloutContainer>

### \`x\` [#x]

视频左上角相对画布原点（左上角）的横向偏移。

### \`y\` [#y]

视频左上角相对画布原点（左上角）的纵向偏移。

### \`width\` [#width]

视频在画布上的宽度（像素）。

### \`height\` [#height]

视频在画布上的高度（像素）。

### \`zOrder\` [#zorder]

视频所属的图层编号，取值范围为 \\[0, 100]。

* 0：（默认）图层位于底部。
* 100：图层位于顶部。

### \`alpha\` [#alpha]

视频的透明度，取值范围为 \\[0.0, 1.0]。

* 0.0：完全透明。
* 1.0：完全不透明。

### \`mirror\` [#mirror]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅对摄像头类型的视频源生效。
  </CalloutDescription>
</CalloutContainer>

是否对视频进行镜像处理。

* true：镜像视频。
* false：（默认）不镜像。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "用于配置本地合图中各个视频流的位置、尺寸、图层等信息。"
  }, {
    heading: "remoteuseruid",
    content: "远端用户 ID。"
  }, {
    heading: "remoteuseruid",
    content: "仅当 `sourceType` 设置为 `VIDEO_SOURCE_REMOTE` 进行本地合图时使用该参数。"
  }, {
    heading: "sourcetype",
    content: "视频源类型。详见 VideoSourceType。"
  }, {
    heading: "imageurl",
    content: "本地图片的文件路径，例如：Android: `/storage/emulated/0/Pictures/image.png`。"
  }, {
    heading: "imageurl",
    content: "仅当 `sourceType` 设置为图片时使用该参数进行本地合图。"
  }, {
    heading: "mediaplayerid",
    content: "媒体播放器 ID。"
  }, {
    heading: "mediaplayerid",
    content: "仅当 `sourceType` 设置为 `VIDEO_SOURCE_MEDIA_PLAYER` 时使用该参数。"
  }, {
    heading: "x",
    content: "视频左上角相对画布原点（左上角）的横向偏移。"
  }, {
    heading: "y",
    content: "视频左上角相对画布原点（左上角）的纵向偏移。"
  }, {
    heading: "width",
    content: "视频在画布上的宽度（像素）。"
  }, {
    heading: "height",
    content: "视频在画布上的高度（像素）。"
  }, {
    heading: "zorder",
    content: "视频所属的图层编号，取值范围为 \\[0, 100]。"
  }, {
    heading: "zorder",
    content: "0：（默认）图层位于底部。"
  }, {
    heading: "zorder",
    content: "100：图层位于顶部。"
  }, {
    heading: "alpha",
    content: "视频的透明度，取值范围为 \\[0.0, 1.0]。"
  }, {
    heading: "alpha",
    content: "0.0：完全透明。"
  }, {
    heading: "alpha",
    content: "1.0：完全不透明。"
  }, {
    heading: "mirror",
    content: "该参数仅对摄像头类型的视频源生效。"
  }, {
    heading: "mirror",
    content: "是否对视频进行镜像处理。"
  }, {
    heading: "mirror",
    content: "true：镜像视频。"
  }, {
    heading: "mirror",
    content: "false：（默认）不镜像。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "remoteuseruid",
    content: "`remoteUserUid`"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "imageurl",
    content: "`imageUrl`"
  }, {
    id: "mediaplayerid",
    content: "`mediaPlayerId`"
  }, {
    id: "x",
    content: "`x`"
  }, {
    id: "y",
    content: "`y`"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "zorder",
    content: "`zOrder`"
  }, {
    id: "alpha",
    content: "`alpha`"
  }, {
    id: "mirror",
    content: "`mirror`"
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
  url: "#remoteuseruid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "remoteUserUid"
    })
  })
}, {
  depth: 3,
  url: "#sourcetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
    })
  })
}, {
  depth: 3,
  url: "#imageurl",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "imageUrl"
    })
  })
}, {
  depth: 3,
  url: "#mediaplayerid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mediaPlayerId"
    })
  })
}, {
  depth: 3,
  url: "#x",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "x"
    })
  })
}, {
  depth: 3,
  url: "#y",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "y"
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
  url: "#zorder",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "zOrder"
    })
  })
}, {
  depth: 3,
  url: "#alpha",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "alpha"
    })
  })
}, {
  depth: 3,
  url: "#mirror",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mirror"
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
      id: "class_transcodingvideostream__prototype"
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
              children: " TranscodingVideoStream"
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
              children: " remoteUserUid;"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Constants.VideoSourceType sourceType;"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String imageUrl;"
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
              children: " mediaPlayerId;"
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
              children: " x;"
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
              children: " y;"
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
              children: " zOrder;"
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
              children: " double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " alpha;"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " mirror;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "class_transcodingvideostream__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "用于配置本地合图中各个视频流的位置、尺寸、图层等信息。"
    }), `
`, _jsx("a", {
      id: "class_transcodingvideostream__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "remoteuseruid",
      children: _jsx(_components.code, {
        children: "remoteUserUid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["仅当 ", _jsx(_components.code, {
            children: "sourceType"
          }), " 设置为 ", _jsx(_components.code, {
            children: "VIDEO_SOURCE_REMOTE"
          }), " 进行本地合图时使用该参数。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "imageurl",
      children: _jsx(_components.code, {
        children: "imageUrl"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地图片的文件路径，例如：Android: ", _jsx(_components.code, {
        children: "/storage/emulated/0/Pictures/image.png"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["仅当 ", _jsx(_components.code, {
            children: "sourceType"
          }), " 设置为图片时使用该参数进行本地合图。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "mediaplayerid",
      children: _jsx(_components.code, {
        children: "mediaPlayerId"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体播放器 ID。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["仅当 ", _jsx(_components.code, {
            children: "sourceType"
          }), " 设置为 ", _jsx(_components.code, {
            children: "VIDEO_SOURCE_MEDIA_PLAYER"
          }), " 时使用该参数。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "x",
      children: _jsx(_components.code, {
        children: "x"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频左上角相对画布原点（左上角）的横向偏移。"
    }), `
`, _jsx(_components.h3, {
      id: "y",
      children: _jsx(_components.code, {
        children: "y"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频左上角相对画布原点（左上角）的纵向偏移。"
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频在画布上的宽度（像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频在画布上的高度（像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "zorder",
      children: _jsx(_components.code, {
        children: "zOrder"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频所属的图层编号，取值范围为 [0, 100]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：（默认）图层位于底部。"
      }), `
`, _jsx(_components.li, {
        children: "100：图层位于顶部。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "alpha",
      children: _jsx(_components.code, {
        children: "alpha"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频的透明度，取值范围为 [0.0, 1.0]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0.0：完全透明。"
      }), `
`, _jsx(_components.li, {
        children: "1.0：完全不透明。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mirror",
      children: _jsx(_components.code, {
        children: "mirror"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该参数仅对摄像头类型的视频源生效。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否对视频进行镜像处理。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：镜像视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不镜像。"
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
