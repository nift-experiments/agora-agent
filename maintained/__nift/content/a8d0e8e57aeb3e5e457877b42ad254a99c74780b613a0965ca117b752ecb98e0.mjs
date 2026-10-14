import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "FilterEffectOptions",
  description: "用于配置滤镜特效。"
};
export let _markdown = `

<a id="class_filtereffectoptions__prototype" />

\`\`\`java
public class FilterEffectOptions {
  public String path = null;
  public float strength;
}
\`\`\`

<a id="class_filtereffectoptions__parameters" />

## 属性 [#属性]

### \`path\` [#path]

本地立方体贴图纹理文件的绝对路径，可用于自定义滤镜特效。指定的.cube 文件需严格遵循 Cube LUT 格式规范，否则滤镜参数不生效。

注：

* .cube 文件第一行的标识符 LUT\\_3D\\_SIZE 表示三维查找表的尺寸，滤镜特效的 LUT 大小只能设置为 32。
* 声网 SDK 提供内置的 built\\_in\\_whiten\\_filter.cube 文件，你可以传入该文件的绝对路径以使用美白滤镜效果。

### \`strength\` [#strength]

滤镜特效的强度，取值范围为 \\[0.0, 1.0]。0.0 表示无滤镜效果，默认值为 0.5。值越大，滤镜效果越强。
`;
export let structuredData = {
  contents: [{
    heading: "path",
    content: "本地立方体贴图纹理文件的绝对路径，可用于自定义滤镜特效。指定的.cube 文件需严格遵循 Cube LUT 格式规范，否则滤镜参数不生效。"
  }, {
    heading: "path",
    content: "注："
  }, {
    heading: "path",
    content: ".cube 文件第一行的标识符 LUT\\_3D\\_SIZE 表示三维查找表的尺寸，滤镜特效的 LUT 大小只能设置为 32。"
  }, {
    heading: "path",
    content: "声网 SDK 提供内置的 built\\_in\\_whiten\\_filter.cube 文件，你可以传入该文件的绝对路径以使用美白滤镜效果。"
  }, {
    heading: "strength",
    content: "滤镜特效的强度，取值范围为 \\[0.0, 1.0]。0.0 表示无滤镜效果，默认值为 0.5。值越大，滤镜效果越强。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "path",
    content: "`path`"
  }, {
    id: "strength",
    content: "`strength`"
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
  url: "#path",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "path"
    })
  })
}, {
  depth: 3,
  url: "#strength",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "strength"
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
      id: "class_filtereffectoptions__prototype"
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
              children: " FilterEffectOptions"
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
              children: " String path "
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " strength;"
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
      id: "class_filtereffectoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "path",
      children: _jsx(_components.code, {
        children: "path"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地立方体贴图纹理文件的绝对路径，可用于自定义滤镜特效。指定的.cube 文件需严格遵循 Cube LUT 格式规范，否则滤镜参数不生效。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: ".cube 文件第一行的标识符 LUT_3D_SIZE 表示三维查找表的尺寸，滤镜特效的 LUT 大小只能设置为 32。"
      }), `
`, _jsx(_components.li, {
        children: "声网 SDK 提供内置的 built_in_whiten_filter.cube 文件，你可以传入该文件的绝对路径以使用美白滤镜效果。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "strength",
      children: _jsx(_components.code, {
        children: "strength"
      })
    }), `
`, _jsx(_components.p, {
      children: "滤镜特效的强度，取值范围为 [0.0, 1.0]。0.0 表示无滤镜效果，默认值为 0.5。值越大，滤镜效果越强。"
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
