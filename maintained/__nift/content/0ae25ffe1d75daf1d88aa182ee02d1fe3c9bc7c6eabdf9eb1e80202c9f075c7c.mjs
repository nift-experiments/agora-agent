import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ExtensionContext",
  description: "扩展的上下文信息。"
};
export let _markdown = `

<a id="class_extensioncontext__prototype" />

\`\`\`java
public class ExtensionContext {
  public boolean isValid;
  public int uid;
  public String providerName;
  public String extensionName;
}
\`\`\`

<a id="class_extensioncontext__parameters" />

## 属性 [#属性]

### \`isValid\` [#isvalid]

\`uid\` 是否有效：

* true： uid 有效。
* false： uid 无效。

### \`uid\` [#uid]

用户 ID。0 表示本地用户，大于 0 表示远端用户。

### \`providerName\` [#providername]

扩展提供方的名称。

### \`extensionName\` [#extensionname]

扩展的名称。
`;
export let structuredData = {
  contents: [{
    heading: "isvalid",
    content: "`uid` 是否有效："
  }, {
    heading: "isvalid",
    content: "true： uid 有效。"
  }, {
    heading: "isvalid",
    content: "false： uid 无效。"
  }, {
    heading: "uid",
    content: "用户 ID。0 表示本地用户，大于 0 表示远端用户。"
  }, {
    heading: "providername",
    content: "扩展提供方的名称。"
  }, {
    heading: "extensionname",
    content: "扩展的名称。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "isvalid",
    content: "`isValid`"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "providername",
    content: "`providerName`"
  }, {
    id: "extensionname",
    content: "`extensionName`"
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
  url: "#isvalid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "isValid"
    })
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
  url: "#providername",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "providerName"
    })
  })
}, {
  depth: 3,
  url: "#extensionname",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extensionName"
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
      id: "class_extensioncontext__prototype"
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
              children: " ExtensionContext"
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
              children: " isValid;"
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
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String providerName;"
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
              children: " String extensionName;"
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
      id: "class_extensioncontext__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "isvalid",
      children: _jsx(_components.code, {
        children: "isValid"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "uid"
      }), " 是否有效："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true： uid 有效。"
      }), `
`, _jsx(_components.li, {
        children: "false： uid 无效。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 ID。0 表示本地用户，大于 0 表示远端用户。"
    }), `
`, _jsx(_components.h3, {
      id: "providername",
      children: _jsx(_components.code, {
        children: "providerName"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展提供方的名称。"
    }), `
`, _jsx(_components.h3, {
      id: "extensionname",
      children: _jsx(_components.code, {
        children: "extensionName"
      })
    }), `
`, _jsx(_components.p, {
      children: "扩展的名称。"
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
