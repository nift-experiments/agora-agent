import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "WatermarkOptions",
  description: "配置水印图像的相关参数。"
};
export let _markdown = `

<a id="class_watermarkoptions__prototype" />

\`\`\`java
public class WatermarkOptions {
  public boolean visibleInPreview = true;
  public Rectangle positionInLandscapeMode = new Rectangle();
  public Rectangle positionInPortraitMode = new Rectangle();
  public int zOrder = 0;
}
\`\`\`

<a id="class_watermarkoptions__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

用于配置添加的水印图像。

<a id="class_watermarkoptions__parameters" />

## 属性 [#属性]

### \`visibleInPreview\` [#visibleinpreview]

水印是否在本地预览视图中可见：

* true：（默认）水印在本地预览视图中可见。
* false：水印在本地预览视图中不可见。

### \`positionInLandscapeMode\` [#positioninlandscapemode]

横屏模式下显示水印图像的区域，详见 [Rectangle](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rectangle)。

### \`positionInPortraitMode\` [#positioninportraitmode]

竖屏模式下显示水印图像的区域，详见 [Rectangle](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rectangle)。

### \`zOrder\` [#zorder]

水印图像的图层顺序，默认值为 0。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从",
    content: "用于配置添加的水印图像。"
  }, {
    heading: "visibleinpreview",
    content: "水印是否在本地预览视图中可见："
  }, {
    heading: "visibleinpreview",
    content: "true：（默认）水印在本地预览视图中可见。"
  }, {
    heading: "visibleinpreview",
    content: "false：水印在本地预览视图中不可见。"
  }, {
    heading: "positioninlandscapemode",
    content: "横屏模式下显示水印图像的区域，详见 Rectangle。"
  }, {
    heading: "positioninportraitmode",
    content: "竖屏模式下显示水印图像的区域，详见 Rectangle。"
  }, {
    heading: "zorder",
    content: "水印图像的图层顺序，默认值为 0。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "visibleinpreview",
    content: "`visibleInPreview`"
  }, {
    id: "positioninlandscapemode",
    content: "`positionInLandscapeMode`"
  }, {
    id: "positioninportraitmode",
    content: "`positionInPortraitMode`"
  }, {
    id: "zorder",
    content: "`zOrder`"
  }]
};
export let toc = [{
  depth: 3,
  url: "#自从",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 2,
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#visibleinpreview",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "visibleInPreview"
    })
  })
}, {
  depth: 3,
  url: "#positioninlandscapemode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "positionInLandscapeMode"
    })
  })
}, {
  depth: 3,
  url: "#positioninportraitmode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "positionInPortraitMode"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_watermarkoptions__prototype"
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
              children: " WatermarkOptions"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " visibleInPreview "
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
              children: " true"
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
              children: " Rectangle positionInLandscapeMode "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Rectangle"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
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
              children: " Rectangle positionInPortraitMode "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Rectangle"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
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
              children: " zOrder "
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
              children: " 0"
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
      id: "class_watermarkoptions__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "用于配置添加的水印图像。"
    }), `
`, _jsx("a", {
      id: "class_watermarkoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "visibleinpreview",
      children: _jsx(_components.code, {
        children: "visibleInPreview"
      })
    }), `
`, _jsx(_components.p, {
      children: "水印是否在本地预览视图中可见："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）水印在本地预览视图中可见。"
      }), `
`, _jsx(_components.li, {
        children: "false：水印在本地预览视图中不可见。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "positioninlandscapemode",
      children: _jsx(_components.code, {
        children: "positionInLandscapeMode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["横屏模式下显示水印图像的区域，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rectangle",
        children: "Rectangle"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "positioninportraitmode",
      children: _jsx(_components.code, {
        children: "positionInPortraitMode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["竖屏模式下显示水印图像的区域，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rectangle",
        children: "Rectangle"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "zorder",
      children: _jsx(_components.code, {
        children: "zOrder"
      })
    }), `
`, _jsx(_components.p, {
      children: "水印图像的图层顺序，默认值为 0。"
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
