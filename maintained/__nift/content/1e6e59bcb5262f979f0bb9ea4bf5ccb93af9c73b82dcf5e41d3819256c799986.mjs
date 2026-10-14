import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "PathStats",
  description: "用于统计特定网络路径的相关信息。"
};
export let _markdown = `

<a id="class_pathstats__prototype" />

\`\`\`java
public static class PathStats {
  public int pathType;
  public int txKBitRate;
  public int rxKBitRate;
}
\`\`\`

<a id="class_pathstats__detailed_desc" />

### \`自从\` [#自从]

自 v4.6.0 版本新增。

<a id="class_pathstats__parameters" />

## 属性 [#属性]

### \`pathType\` [#pathtype]

网络路径的类型：

* LAN：局域网。
* WiFi：无线局域网。
* Mobile：移动网络。

### \`txKBitRate\` [#txkbitrate]

该路径的传输码率，单位为 Kbps。

### \`rxKBitRate\` [#rxkbitrate]

该路径的接收码率，单位为 Kbps。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "pathtype",
    content: "网络路径的类型："
  }, {
    heading: "pathtype",
    content: "LAN：局域网。"
  }, {
    heading: "pathtype",
    content: "WiFi：无线局域网。"
  }, {
    heading: "pathtype",
    content: "Mobile：移动网络。"
  }, {
    heading: "txkbitrate",
    content: "该路径的传输码率，单位为 Kbps。"
  }, {
    heading: "rxkbitrate",
    content: "该路径的接收码率，单位为 Kbps。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "pathtype",
    content: "`pathType`"
  }, {
    id: "txkbitrate",
    content: "`txKBitRate`"
  }, {
    id: "rxkbitrate",
    content: "`rxKBitRate`"
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
  url: "#pathtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pathType"
    })
  })
}, {
  depth: 3,
  url: "#txkbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "txKBitRate"
    })
  })
}, {
  depth: 3,
  url: "#rxkbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxKBitRate"
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
      id: "class_pathstats__prototype"
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
              children: " PathStats"
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
              children: " pathType;"
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
              children: " txKBitRate;"
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
              children: " rxKBitRate;"
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
      id: "class_pathstats__detailed_desc"
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
`, _jsx("a", {
      id: "class_pathstats__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "pathtype",
      children: _jsx(_components.code, {
        children: "pathType"
      })
    }), `
`, _jsx(_components.p, {
      children: "网络路径的类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LAN：局域网。"
      }), `
`, _jsx(_components.li, {
        children: "WiFi：无线局域网。"
      }), `
`, _jsx(_components.li, {
        children: "Mobile：移动网络。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "txkbitrate",
      children: _jsx(_components.code, {
        children: "txKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "该路径的传输码率，单位为 Kbps。"
    }), `
`, _jsx(_components.h3, {
      id: "rxkbitrate",
      children: _jsx(_components.code, {
        children: "rxKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "该路径的接收码率，单位为 Kbps。"
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
