import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AgoraImage",
  description: "用于设置图像的属性。"
};
export let _markdown = `

<a id="class_rtcimage__prototype" />

\`\`\`java
public class AgoraImage {
  public String url;
  public int x;
  public int y;
  public int width;
  public int height;
  public int zOrder;
  public double alpha;
}
\`\`\`

<a id="class_rtcimage__detailed_desc" />

用于设置实时视频中水印图像和背景图像的属性。

<a id="class_rtcimage__parameters" />

## 属性 [#属性]

### \`url\` [#url]

实时视频中图像的 HTTP 或 HTTPS 地址。该参数的最大长度为 1024 字节。

### \`x\` [#x]

图像在视频画面中的 x 坐标（以视频画面左上角为原点，单位为像素 px）。

### \`y\` [#y]

图像在视频画面中的 y 坐标（以视频画面左上角为原点，单位为像素 px）。

### \`width\` [#width]

图像在视频画面中的宽度（单位为像素 px）。

### \`height\` [#height]

图像在视频画面中的高度（单位为像素 px）。

### \`zOrder\` [#zorder]

图像的图层索引。

* 当使用水印数组添加一个或多个水印时，必须传入 \\[1, 255] 范围内的值，否则 SDK 会报错。
* 在其他情况下，可选传入 \\[0, 255] 范围内的值，默认值为 0。
* 0 表示最底层，255 表示最顶层。

### \`alpha\` [#alpha]

图像的透明度，取值范围为 \\[0.0, 1.0]：

* 0.0：完全透明。
* 1.0：（默认）不透明。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "用于设置实时视频中水印图像和背景图像的属性。"
  }, {
    heading: "url",
    content: "实时视频中图像的 HTTP 或 HTTPS 地址。该参数的最大长度为 1024 字节。"
  }, {
    heading: "x",
    content: "图像在视频画面中的 x 坐标（以视频画面左上角为原点，单位为像素 px）。"
  }, {
    heading: "y",
    content: "图像在视频画面中的 y 坐标（以视频画面左上角为原点，单位为像素 px）。"
  }, {
    heading: "width",
    content: "图像在视频画面中的宽度（单位为像素 px）。"
  }, {
    heading: "height",
    content: "图像在视频画面中的高度（单位为像素 px）。"
  }, {
    heading: "zorder",
    content: "图像的图层索引。"
  }, {
    heading: "zorder",
    content: "当使用水印数组添加一个或多个水印时，必须传入 \\[1, 255] 范围内的值，否则 SDK 会报错。"
  }, {
    heading: "zorder",
    content: "在其他情况下，可选传入 \\[0, 255] 范围内的值，默认值为 0。"
  }, {
    heading: "zorder",
    content: "0 表示最底层，255 表示最顶层。"
  }, {
    heading: "alpha",
    content: "图像的透明度，取值范围为 \\[0.0, 1.0]："
  }, {
    heading: "alpha",
    content: "0.0：完全透明。"
  }, {
    heading: "alpha",
    content: "1.0：（默认）不透明。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "url",
    content: "`url`"
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
  url: "#url",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_rtcimage__prototype"
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
              children: " AgoraImage"
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
              children: " String url;"
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
              children: "  public"
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
      id: "class_rtcimage__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "用于设置实时视频中水印图像和背景图像的属性。"
    }), `
`, _jsx("a", {
      id: "class_rtcimage__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "url",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "实时视频中图像的 HTTP 或 HTTPS 地址。该参数的最大长度为 1024 字节。"
    }), `
`, _jsx(_components.h3, {
      id: "x",
      children: _jsx(_components.code, {
        children: "x"
      })
    }), `
`, _jsx(_components.p, {
      children: "图像在视频画面中的 x 坐标（以视频画面左上角为原点，单位为像素 px）。"
    }), `
`, _jsx(_components.h3, {
      id: "y",
      children: _jsx(_components.code, {
        children: "y"
      })
    }), `
`, _jsx(_components.p, {
      children: "图像在视频画面中的 y 坐标（以视频画面左上角为原点，单位为像素 px）。"
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "图像在视频画面中的宽度（单位为像素 px）。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "图像在视频画面中的高度（单位为像素 px）。"
    }), `
`, _jsx(_components.h3, {
      id: "zorder",
      children: _jsx(_components.code, {
        children: "zOrder"
      })
    }), `
`, _jsx(_components.p, {
      children: "图像的图层索引。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当使用水印数组添加一个或多个水印时，必须传入 [1, 255] 范围内的值，否则 SDK 会报错。"
      }), `
`, _jsx(_components.li, {
        children: "在其他情况下，可选传入 [0, 255] 范围内的值，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "0 表示最底层，255 表示最顶层。"
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
      children: "图像的透明度，取值范围为 [0.0, 1.0]："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0.0：完全透明。"
      }), `
`, _jsx(_components.li, {
        children: "1.0：（默认）不透明。"
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
