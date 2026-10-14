import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TranscodingUser",
  description: "用于设置每位主播的转码参数。"
};
export let _markdown = `

<a id="class_transcodinguser__prototype" />

\`\`\`java
public static class TranscodingUser {
    public int uid;
    public String userId;
    public int x;
    public int y;
    public int width;
    public int height;
    public int zOrder;
    public float alpha;
    public int audioChannel;
  }
\`\`\`

<a id="class_transcodinguser__parameters" />

## 属性 [#属性]

### \`uid\` [#uid]

主播的用户 ID。

### \`x\` [#x]

主播视频在合成画面中的 x 坐标（以画面左上角为原点，单位为像素）。取值范围为 \\[0, width]，其中 width 为 [LiveTranscoding](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding) 中设置的画面宽度。

### \`y\` [#y]

主播视频在合成画面中的 y 坐标（以画面左上角为原点，单位为像素）。取值范围为 \\[0, height]，其中 height 为 [LiveTranscoding](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding) 中设置的画面高度。

### \`width\` [#width]

主播视频的宽度（单位为像素）。

### \`height\` [#height]

主播视频的高度（单位为像素）。

### \`zOrder\` [#zorder]

注：

* 如果该值小于 0 或大于 100，会返回 ERR\\_INVALID\\_ARGUMENT 错误。
* 支持将 zOrder 设置为 0。

主播视频的图层顺序索引，取值范围为 \\[0, 100]。

* 0：（默认值）视频位于最底层。
* 100：视频位于最顶层。

### \`alpha\` [#alpha]

主播视频的透明度，取值范围为 \\[0.0, 1.0]。

* 0.0：完全透明。
* 1.0：（默认值）完全不透明。

### \`audioChannel\` [#audiochannel]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    若该值不为 0，则需要专用播放器进行播放。
  </CalloutDescription>
</CalloutContainer>

主播音频在输出音频中的声道，默认值为 0，取值范围为 \\[0, 5]。

* 0：（推荐）默认设置，最多支持双声道，具体取决于主播的上行能力。
* 1：使用 FL（前左）声道。若主播上行多路音频，声网服务器会先将其混为单声道。
* 2：使用 FC（前中）声道。若主播上行多路音频，声网服务器会先将其混为单声道。
* 3：使用 FR（前右）声道。若主播上行多路音频，声网服务器会先将其混为单声道。
* 4：使用 BL（后左）声道。若主播上行多路音频，声网服务器会先将其混为单声道。
* 5：使用 BR（后右）声道。若主播上行多路音频，声网服务器会先将其混为单声道。
* 0xFF 或大于 5：静音主播音频，声网服务器会移除该主播的音频。
`;
export let structuredData = {
  contents: [{
    heading: "uid",
    content: "主播的用户 ID。"
  }, {
    heading: "x",
    content: "主播视频在合成画面中的 x 坐标（以画面左上角为原点，单位为像素）。取值范围为 \\[0, width]，其中 width 为 LiveTranscoding 中设置的画面宽度。"
  }, {
    heading: "y",
    content: "主播视频在合成画面中的 y 坐标（以画面左上角为原点，单位为像素）。取值范围为 \\[0, height]，其中 height 为 LiveTranscoding 中设置的画面高度。"
  }, {
    heading: "width",
    content: "主播视频的宽度（单位为像素）。"
  }, {
    heading: "height",
    content: "主播视频的高度（单位为像素）。"
  }, {
    heading: "zorder",
    content: "注："
  }, {
    heading: "zorder",
    content: "如果该值小于 0 或大于 100，会返回 ERR\\_INVALID\\_ARGUMENT 错误。"
  }, {
    heading: "zorder",
    content: "支持将 zOrder 设置为 0。"
  }, {
    heading: "zorder",
    content: "主播视频的图层顺序索引，取值范围为 \\[0, 100]。"
  }, {
    heading: "zorder",
    content: "0：（默认值）视频位于最底层。"
  }, {
    heading: "zorder",
    content: "100：视频位于最顶层。"
  }, {
    heading: "alpha",
    content: "主播视频的透明度，取值范围为 \\[0.0, 1.0]。"
  }, {
    heading: "alpha",
    content: "0.0：完全透明。"
  }, {
    heading: "alpha",
    content: "1.0：（默认值）完全不透明。"
  }, {
    heading: "audiochannel",
    content: "若该值不为 0，则需要专用播放器进行播放。"
  }, {
    heading: "audiochannel",
    content: "主播音频在输出音频中的声道，默认值为 0，取值范围为 \\[0, 5]。"
  }, {
    heading: "audiochannel",
    content: "0：（推荐）默认设置，最多支持双声道，具体取决于主播的上行能力。"
  }, {
    heading: "audiochannel",
    content: "1：使用 FL（前左）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
  }, {
    heading: "audiochannel",
    content: "2：使用 FC（前中）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
  }, {
    heading: "audiochannel",
    content: "3：使用 FR（前右）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
  }, {
    heading: "audiochannel",
    content: "4：使用 BL（后左）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
  }, {
    heading: "audiochannel",
    content: "5：使用 BR（后右）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
  }, {
    heading: "audiochannel",
    content: "0xFF 或大于 5：静音主播音频，声网服务器会移除该主播的音频。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "uid",
    content: "`uid`"
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
    id: "audiochannel",
    content: "`audioChannel`"
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
  url: "#uid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
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
  url: "#audiochannel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioChannel"
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
      id: "class_transcodinguser__prototype"
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
              children: " TranscodingUser"
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
              children: " uid;"
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
              children: " String userId;"
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
              children: " float"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " audioChannel;"
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
      id: "class_transcodinguser__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "主播的用户 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "x",
      children: _jsx(_components.code, {
        children: "x"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["主播视频在合成画面中的 x 坐标（以画面左上角为原点，单位为像素）。取值范围为 [0, width]，其中 width 为 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding",
        children: "LiveTranscoding"
      }), " 中设置的画面宽度。"]
    }), `
`, _jsx(_components.h3, {
      id: "y",
      children: _jsx(_components.code, {
        children: "y"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["主播视频在合成画面中的 y 坐标（以画面左上角为原点，单位为像素）。取值范围为 [0, height]，其中 height 为 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding",
        children: "LiveTranscoding"
      }), " 中设置的画面高度。"]
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "主播视频的宽度（单位为像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "主播视频的高度（单位为像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "zorder",
      children: _jsx(_components.code, {
        children: "zOrder"
      })
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果该值小于 0 或大于 100，会返回 ERR_INVALID_ARGUMENT 错误。"
      }), `
`, _jsx(_components.li, {
        children: "支持将 zOrder 设置为 0。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "主播视频的图层顺序索引，取值范围为 [0, 100]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：（默认值）视频位于最底层。"
      }), `
`, _jsx(_components.li, {
        children: "100：视频位于最顶层。"
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
      children: "主播视频的透明度，取值范围为 [0.0, 1.0]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0.0：完全透明。"
      }), `
`, _jsx(_components.li, {
        children: "1.0：（默认值）完全不透明。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "audiochannel",
      children: _jsx(_components.code, {
        children: "audioChannel"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "若该值不为 0，则需要专用播放器进行播放。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "主播音频在输出音频中的声道，默认值为 0，取值范围为 [0, 5]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：（推荐）默认设置，最多支持双声道，具体取决于主播的上行能力。"
      }), `
`, _jsx(_components.li, {
        children: "1：使用 FL（前左）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：使用 FC（前中）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
      }), `
`, _jsx(_components.li, {
        children: "3：使用 FR（前右）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
      }), `
`, _jsx(_components.li, {
        children: "4：使用 BL（后左）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
      }), `
`, _jsx(_components.li, {
        children: "5：使用 BR（后右）声道。若主播上行多路音频，声网服务器会先将其混为单声道。"
      }), `
`, _jsx(_components.li, {
        children: "0xFF 或大于 5：静音主播音频，声网服务器会移除该主播的音频。"
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
