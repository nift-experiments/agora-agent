import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ColorEnhanceOptions",
  description: "用于配置色彩增强效果。"
};
export let _markdown = `

<a id="class_colorenhanceoptions__prototype" />

\`\`\`java
public class ColorEnhanceOptions {
  public float strengthLevel;
  public float skinProtectLevel;
}
\`\`\`

<a id="class_colorenhanceoptions__detailed_desc" />

### \`自从\` [#自从]

自 v3.6.2 版本新增。

<a id="class_colorenhanceoptions__parameters" />

## 属性 [#属性]

### \`strengthLevel\` [#strengthlevel]

色彩增强的强度级别。取值范围为 \\[0.0, 1.0]。

* 0.0：默认值，表示不对视频应用色彩增强。
* 数值越大，色彩增强效果越明显。

默认值为 \`0.5\`。

### \`skinProtectLevel\` [#skinprotectlevel]

肤色保护的强度级别。取值范围为 \\[0.0, 1.0]。

* 0.0：表示不启用肤色保护。
* 数值越大，肤色保护效果越强。

默认值为 \`1.0\`。

* 当色彩增强强度较高时，人物肤色可能出现明显偏色，因此建议设置合适的肤色保护级别。
* 肤色保护级别越高，色彩增强效果可能略有下降。

为获得最佳效果，建议你根据实际情况调整 \`strengthLevel\` 与 \`skinProtectLevel\`。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.6.2 版本新增。"
  }, {
    heading: "strengthlevel",
    content: "色彩增强的强度级别。取值范围为 \\[0.0, 1.0]。"
  }, {
    heading: "strengthlevel",
    content: "0.0：默认值，表示不对视频应用色彩增强。"
  }, {
    heading: "strengthlevel",
    content: "数值越大，色彩增强效果越明显。"
  }, {
    heading: "strengthlevel",
    content: "默认值为 `0.5`。"
  }, {
    heading: "skinprotectlevel",
    content: "肤色保护的强度级别。取值范围为 \\[0.0, 1.0]。"
  }, {
    heading: "skinprotectlevel",
    content: "0.0：表示不启用肤色保护。"
  }, {
    heading: "skinprotectlevel",
    content: "数值越大，肤色保护效果越强。"
  }, {
    heading: "skinprotectlevel",
    content: "默认值为 `1.0`。"
  }, {
    heading: "skinprotectlevel",
    content: "当色彩增强强度较高时，人物肤色可能出现明显偏色，因此建议设置合适的肤色保护级别。"
  }, {
    heading: "skinprotectlevel",
    content: "肤色保护级别越高，色彩增强效果可能略有下降。"
  }, {
    heading: "skinprotectlevel",
    content: "为获得最佳效果，建议你根据实际情况调整 `strengthLevel` 与 `skinProtectLevel`。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "strengthlevel",
    content: "`strengthLevel`"
  }, {
    id: "skinprotectlevel",
    content: "`skinProtectLevel`"
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
  url: "#strengthlevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "strengthLevel"
    })
  })
}, {
  depth: 3,
  url: "#skinprotectlevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "skinProtectLevel"
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
      id: "class_colorenhanceoptions__prototype"
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
              children: " ColorEnhanceOptions"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " strengthLevel;"
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
              children: " skinProtectLevel;"
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
      id: "class_colorenhanceoptions__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.6.2 版本新增。"
    }), `
`, _jsx("a", {
      id: "class_colorenhanceoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "strengthlevel",
      children: _jsx(_components.code, {
        children: "strengthLevel"
      })
    }), `
`, _jsx(_components.p, {
      children: "色彩增强的强度级别。取值范围为 [0.0, 1.0]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0.0：默认值，表示不对视频应用色彩增强。"
      }), `
`, _jsx(_components.li, {
        children: "数值越大，色彩增强效果越明显。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["默认值为 ", _jsx(_components.code, {
        children: "0.5"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "skinprotectlevel",
      children: _jsx(_components.code, {
        children: "skinProtectLevel"
      })
    }), `
`, _jsx(_components.p, {
      children: "肤色保护的强度级别。取值范围为 [0.0, 1.0]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0.0：表示不启用肤色保护。"
      }), `
`, _jsx(_components.li, {
        children: "数值越大，肤色保护效果越强。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["默认值为 ", _jsx(_components.code, {
        children: "1.0"
      }), "。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当色彩增强强度较高时，人物肤色可能出现明显偏色，因此建议设置合适的肤色保护级别。"
      }), `
`, _jsx(_components.li, {
        children: "肤色保护级别越高，色彩增强效果可能略有下降。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["为获得最佳效果，建议你根据实际情况调整 ", _jsx(_components.code, {
        children: "strengthLevel"
      }), " 与 ", _jsx(_components.code, {
        children: "skinProtectLevel"
      }), "。"]
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
