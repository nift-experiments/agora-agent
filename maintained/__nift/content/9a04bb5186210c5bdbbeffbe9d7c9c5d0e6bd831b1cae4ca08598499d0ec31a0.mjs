import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ARES",
  description: "在 Voice Agent 中使用 ARES 作为实时语音识别服务。"
};
export let _markdown = `

ARES 是声网内建的实时语音识别能力，适合低延迟对话式场景。

<CalloutContainer type="info">
  <CalloutTitle>
    信息
  </CalloutTitle>

  <CalloutDescription>
    使用 ARES ASR 会按对应的 ARES 语音识别计费项收费。
  </CalloutDescription>
</CalloutContainer>

## 示例配置 [#示例配置]

\`\`\`json
"asr": {
  "vendor": "ares",
  "language": "zh-CN"
}
\`\`\`

## 关键参数 [#关键参数]

* \`vendor\`：固定为 \`ares\`
* \`language\`：识别语言，使用 BCP-47 语言标记，例如 \`zh-CN\`、\`en-US\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "ARES 是声网内建的实时语音识别能力，适合低延迟对话式场景。"
  }, {
    heading: undefined,
    content: "使用 ARES ASR 会按对应的 ARES 语音识别计费项收费。"
  }, {
    heading: "关键参数",
    content: "`vendor`：固定为 `ares`"
  }, {
    heading: "关键参数",
    content: "`language`：识别语言，使用 BCP-47 语言标记，例如 `zh-CN`、`en-US`"
  }],
  headings: [{
    id: "示例配置",
    content: "示例配置"
  }, {
    id: "关键参数",
    content: "关键参数"
  }]
};
export let toc = [{
  depth: 2,
  url: "#示例配置",
  title: _jsx(_Fragment, {
    children: "示例配置"
  })
}, {
  depth: 2,
  url: "#关键参数",
  title: _jsx(_Fragment, {
    children: "关键参数"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
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
    children: [_jsx(_components.p, {
      children: "ARES 是声网内建的实时语音识别能力，适合低延迟对话式场景。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "信息"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "使用 ARES ASR 会按对应的 ARES 语音识别计费项收费。"
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "示例配置",
      children: "示例配置"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"asr"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "vendor"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"ares"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "language"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"zh-CN"'
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
`, _jsx(_components.h2, {
      id: "关键参数",
      children: "关键参数"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "vendor"
        }), "：固定为 ", _jsx(_components.code, {
          children: "ares"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "language"
        }), "：识别语言，使用 BCP-47 语言标记，例如 ", _jsx(_components.code, {
          children: "zh-CN"
        }), "、", _jsx(_components.code, {
          children: "en-US"
        })]
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
