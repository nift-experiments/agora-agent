import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "AdvanceOptions",
  description: "用于配置视频编码的高级选项。"
};
export let _markdown = `

<a id="class_advanceoptions__prototype" />

\`\`\`java
static public class AdvanceOptions {
    public ENCODING_PREFERENCE encodingPreference;
    public COMPRESSION_PREFERENCE compressionPreference;
    public boolean encodeAlpha;
  }
\`\`\`

<a id="class_advanceoptions__parameters" />

## 属性 [#属性]

### \`encodingPreference\` [#encodingpreference]

视频编码器优先级设置，详见 [ENCODING\\_PREFERENCE](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-encodingpreference)。

### \`compressionPreference\` [#compressionpreference]

视频编码的压缩偏好设置，详见 [COMPRESSION\\_PREFERENCE](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-compressionpreference)。

### \`encodeAlpha\` [#encodealpha]

是否对视频帧中存在的 Alpha 数据进行编码并发送给远端：

* true：编码并发送 Alpha 数据。
* false （默认）：不编码和发送 Alpha 数据。
`;
export let structuredData = {
  contents: [{
    heading: "encodingpreference",
    content: "视频编码器优先级设置，详见 ENCODING\\_PREFERENCE。"
  }, {
    heading: "compressionpreference",
    content: "视频编码的压缩偏好设置，详见 COMPRESSION\\_PREFERENCE。"
  }, {
    heading: "encodealpha",
    content: "是否对视频帧中存在的 Alpha 数据进行编码并发送给远端："
  }, {
    heading: "encodealpha",
    content: "true：编码并发送 Alpha 数据。"
  }, {
    heading: "encodealpha",
    content: "false （默认）：不编码和发送 Alpha 数据。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "encodingpreference",
    content: "`encodingPreference`"
  }, {
    id: "compressionpreference",
    content: "`compressionPreference`"
  }, {
    id: "encodealpha",
    content: "`encodeAlpha`"
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
  url: "#encodingpreference",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encodingPreference"
    })
  })
}, {
  depth: 3,
  url: "#compressionpreference",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "compressionPreference"
    })
  })
}, {
  depth: 3,
  url: "#encodealpha",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "encodeAlpha"
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
      id: "class_advanceoptions__prototype"
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
              children: "static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " public"
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
              children: " AdvanceOptions"
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
              children: " ENCODING_PREFERENCE encodingPreference;"
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
              children: " COMPRESSION_PREFERENCE compressionPreference;"
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
              children: " encodeAlpha;"
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
      id: "class_advanceoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "encodingpreference",
      children: _jsx(_components.code, {
        children: "encodingPreference"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频编码器优先级设置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-encodingpreference",
        children: "ENCODING_PREFERENCE"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "compressionpreference",
      children: _jsx(_components.code, {
        children: "compressionPreference"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频编码的压缩偏好设置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-compressionpreference",
        children: "COMPRESSION_PREFERENCE"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "encodealpha",
      children: _jsx(_components.code, {
        children: "encodeAlpha"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否对视频帧中存在的 Alpha 数据进行编码并发送给远端："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：编码并发送 Alpha 数据。"
      }), `
`, _jsx(_components.li, {
        children: "false （默认）：不编码和发送 Alpha 数据。"
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
