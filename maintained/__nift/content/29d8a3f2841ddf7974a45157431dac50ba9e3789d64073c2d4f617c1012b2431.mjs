import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AgoraFacePositionInfo",
  description: "检测到的人脸信息。"
};
export let _markdown = `

<a id="class_agorafacepositioninfo__prototype" />

\`\`\`java
public static class AgoraFacePositionInfo {
    public int x;
    public int y;
    public int width;
    public int height;
    public int distance;
  }
\`\`\`

<a id="class_agorafacepositioninfo__parameters" />

## 属性 [#属性]

### \`x\` [#x]

本地视频中人脸的横坐标（像素）。该值表示人脸左上角相对于采集画面左上角原点的水平位置。

### \`y\` [#y]

本地视频中人脸的纵坐标（像素）。该值表示人脸左上角相对于采集画面左上角原点的垂直位置。

### \`width\` [#width]

采集视频画面中人脸的宽度（像素）。

### \`height\` [#height]

采集视频画面中人脸的高度（像素）。

### \`distance\` [#distance]

人脸与设备屏幕之间的距离（厘米）。
`;
export let structuredData = {
  contents: [{
    heading: "x",
    content: "本地视频中人脸的横坐标（像素）。该值表示人脸左上角相对于采集画面左上角原点的水平位置。"
  }, {
    heading: "y",
    content: "本地视频中人脸的纵坐标（像素）。该值表示人脸左上角相对于采集画面左上角原点的垂直位置。"
  }, {
    heading: "width",
    content: "采集视频画面中人脸的宽度（像素）。"
  }, {
    heading: "height",
    content: "采集视频画面中人脸的高度（像素）。"
  }, {
    heading: "distance",
    content: "人脸与设备屏幕之间的距离（厘米）。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
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
    id: "distance",
    content: "`distance`"
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
  url: "#distance",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "distance"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_agorafacepositioninfo__prototype"
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
              children: " AgoraFacePositionInfo"
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
              children: " distance;"
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
      id: "class_agorafacepositioninfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "x",
      children: _jsx(_components.code, {
        children: "x"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频中人脸的横坐标（像素）。该值表示人脸左上角相对于采集画面左上角原点的水平位置。"
    }), `
`, _jsx(_components.h3, {
      id: "y",
      children: _jsx(_components.code, {
        children: "y"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频中人脸的纵坐标（像素）。该值表示人脸左上角相对于采集画面左上角原点的垂直位置。"
    }), `
`, _jsx(_components.h3, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "采集视频画面中人脸的宽度（像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "采集视频画面中人脸的高度（像素）。"
    }), `
`, _jsx(_components.h3, {
      id: "distance",
      children: _jsx(_components.code, {
        children: "distance"
      })
    }), `
`, _jsx(_components.p, {
      children: "人脸与设备屏幕之间的距离（厘米）。"
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
