import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LogUploadServerInfo",
  description: "日志服务器配置信息。"
};
export let _markdown = `

<a id="class_loguploadserverinfo__prototype" />

\`\`\`java
public static class LogUploadServerInfo {
    public String serverDomain = null;
    public String serverPath = null;
    public int serverPort = 0;
    public boolean serverHttps = true;
  };
\`\`\`

<a id="class_loguploadserverinfo__parameters" />

## 属性 [#属性]

### \`serverDomain\` [#serverdomain]

日志服务器的域名。

### \`serverPath\` [#serverpath]

日志在服务器上的存储路径。

### \`serverPort\` [#serverport]

日志服务器的端口号。

### \`serverHttps\` [#serverhttps]

日志服务器是否使用 HTTPS 协议：

* true：使用 HTTPS 协议。
* false：使用 HTTP 协议。
`;
export let structuredData = {
  contents: [{
    heading: "serverdomain",
    content: "日志服务器的域名。"
  }, {
    heading: "serverpath",
    content: "日志在服务器上的存储路径。"
  }, {
    heading: "serverport",
    content: "日志服务器的端口号。"
  }, {
    heading: "serverhttps",
    content: "日志服务器是否使用 HTTPS 协议："
  }, {
    heading: "serverhttps",
    content: "true：使用 HTTPS 协议。"
  }, {
    heading: "serverhttps",
    content: "false：使用 HTTP 协议。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "serverdomain",
    content: "`serverDomain`"
  }, {
    id: "serverpath",
    content: "`serverPath`"
  }, {
    id: "serverport",
    content: "`serverPort`"
  }, {
    id: "serverhttps",
    content: "`serverHttps`"
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
  url: "#serverdomain",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "serverDomain"
    })
  })
}, {
  depth: 3,
  url: "#serverpath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "serverPath"
    })
  })
}, {
  depth: 3,
  url: "#serverport",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "serverPort"
    })
  })
}, {
  depth: 3,
  url: "#serverhttps",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "serverHttps"
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
      id: "class_loguploadserverinfo__prototype"
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
              children: " LogUploadServerInfo"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String serverDomain "
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
              children: "    public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String serverPath "
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
              children: " serverPort "
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
              children: " serverHttps "
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  };"
            })
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "class_loguploadserverinfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "serverdomain",
      children: _jsx(_components.code, {
        children: "serverDomain"
      })
    }), `
`, _jsx(_components.p, {
      children: "日志服务器的域名。"
    }), `
`, _jsx(_components.h3, {
      id: "serverpath",
      children: _jsx(_components.code, {
        children: "serverPath"
      })
    }), `
`, _jsx(_components.p, {
      children: "日志在服务器上的存储路径。"
    }), `
`, _jsx(_components.h3, {
      id: "serverport",
      children: _jsx(_components.code, {
        children: "serverPort"
      })
    }), `
`, _jsx(_components.p, {
      children: "日志服务器的端口号。"
    }), `
`, _jsx(_components.h3, {
      id: "serverhttps",
      children: _jsx(_components.code, {
        children: "serverHttps"
      })
    }), `
`, _jsx(_components.p, {
      children: "日志服务器是否使用 HTTPS 协议："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：使用 HTTPS 协议。"
      }), `
`, _jsx(_components.li, {
        children: "false：使用 HTTP 协议。"
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
