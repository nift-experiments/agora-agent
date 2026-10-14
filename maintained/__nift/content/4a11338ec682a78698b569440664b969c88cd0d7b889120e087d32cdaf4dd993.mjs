import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "自定义模型集成",
  description: "接入你自己的 LLM 服务，控制模型端点、参数、上下文和响应行为。"
};
export let _markdown = `

如果你不打算只使用声网托管的预设，而是希望自己控制模型端点、鉴权和请求参数，可以走自定义模型集成。

## 适合什么场景 [#适合什么场景]

* 你已经有自己的 LLM 服务或代理层
* 你需要统一做审计、路由、重试或租户隔离
* 你需要把业务上下文在服务端拼接后再发给模型
* 你要使用预设未覆盖的模型

## 基本配置方式 [#基本配置方式]

在启动智能体时，通过 \`llm\` 字段传入你的模型地址、API key 和模型参数：

\`\`\`json
"llm": {
  "url": "https://api.openai.com/v1/chat/completions",
  "api_key": "<your_llm_api_key>",
  "system_messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    }
  ],
  "max_history": 32,
  "greeting_message": "你好，我可以帮你做什么？",
  "failure_message": "抱歉，我暂时无法回答这个问题。",
  "params": {
    "model": "gpt-4o-mini"
  }
}
\`\`\`

## 接入建议 [#接入建议]

* 在你的服务端统一保存 API key，不要把模型凭据下发到客户端。
* 把 \`system_messages\`、业务上下文和短期记忆分层管理，避免混在一起难以维护。
* 为模型请求打上租户、实验、地域等标签，方便排查延迟和故障。

## 如果你还没准备好自定义模型 [#如果你还没准备好自定义模型]

如果你只是想先跑通链路，可以先用[预设](presets.mdx)。预设允许你在不提供第三方 API key 的情况下使用声网托管的供应商组合。

## 相关页面 [#相关页面]

* [使用预设](presets.mdx)
* [传递自定义信息](custom-information.mdx)
* [LLM 模型](../models/llm/index.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "如果你不打算只使用声网托管的预设，而是希望自己控制模型端点、鉴权和请求参数，可以走自定义模型集成。"
  }, {
    heading: "适合什么场景",
    content: "你已经有自己的 LLM 服务或代理层"
  }, {
    heading: "适合什么场景",
    content: "你需要统一做审计、路由、重试或租户隔离"
  }, {
    heading: "适合什么场景",
    content: "你需要把业务上下文在服务端拼接后再发给模型"
  }, {
    heading: "适合什么场景",
    content: "你要使用预设未覆盖的模型"
  }, {
    heading: "基本配置方式",
    content: "在启动智能体时，通过 `llm` 字段传入你的模型地址、API key 和模型参数："
  }, {
    heading: "接入建议",
    content: "在你的服务端统一保存 API key，不要把模型凭据下发到客户端。"
  }, {
    heading: "接入建议",
    content: "把 `system_messages`、业务上下文和短期记忆分层管理，避免混在一起难以维护。"
  }, {
    heading: "接入建议",
    content: "为模型请求打上租户、实验、地域等标签，方便排查延迟和故障。"
  }, {
    heading: "如果你还没准备好自定义模型",
    content: "如果你只是想先跑通链路，可以先用预设。预设允许你在不提供第三方 API key 的情况下使用声网托管的供应商组合。"
  }, {
    heading: "相关页面",
    content: "使用预设"
  }, {
    heading: "相关页面",
    content: "传递自定义信息"
  }, {
    heading: "相关页面",
    content: "LLM 模型"
  }],
  headings: [{
    id: "适合什么场景",
    content: "适合什么场景"
  }, {
    id: "基本配置方式",
    content: "基本配置方式"
  }, {
    id: "接入建议",
    content: "接入建议"
  }, {
    id: "如果你还没准备好自定义模型",
    content: "如果你还没准备好自定义模型"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#适合什么场景",
  title: _jsx(_Fragment, {
    children: "适合什么场景"
  })
}, {
  depth: 2,
  url: "#基本配置方式",
  title: _jsx(_Fragment, {
    children: "基本配置方式"
  })
}, {
  depth: 2,
  url: "#接入建议",
  title: _jsx(_Fragment, {
    children: "接入建议"
  })
}, {
  depth: 2,
  url: "#如果你还没准备好自定义模型",
  title: _jsx(_Fragment, {
    children: "如果你还没准备好自定义模型"
  })
}, {
  depth: 2,
  url: "#相关页面",
  title: _jsx(_Fragment, {
    children: "相关页面"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "如果你不打算只使用声网托管的预设，而是希望自己控制模型端点、鉴权和请求参数，可以走自定义模型集成。"
    }), `
`, _jsx(_components.h2, {
      id: "适合什么场景",
      children: "适合什么场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你已经有自己的 LLM 服务或代理层"
      }), `
`, _jsx(_components.li, {
        children: "你需要统一做审计、路由、重试或租户隔离"
      }), `
`, _jsx(_components.li, {
        children: "你需要把业务上下文在服务端拼接后再发给模型"
      }), `
`, _jsx(_components.li, {
        children: "你要使用预设未覆盖的模型"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "基本配置方式",
      children: "基本配置方式"
    }), `
`, _jsxs(_components.p, {
      children: ["在启动智能体时，通过 ", _jsx(_components.code, {
        children: "llm"
      }), " 字段传入你的模型地址、API key 和模型参数："]
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
              children: '"llm"'
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
              children: '  "url"'
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
              children: '"https://api.openai.com/v1/chat/completions"'
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
              children: '  "api_key"'
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
              children: '"<your_llm_api_key>"'
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
              children: '  "system_messages"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "role"'
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
              children: '"system"'
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
              children: '      "content"'
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
              children: '"You are a helpful assistant."'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "max_history"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "32"
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
              children: '  "greeting_message"'
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
              children: '"你好，我可以帮你做什么？"'
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
              children: '  "failure_message"'
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
              children: '"抱歉，我暂时无法回答这个问题。"'
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
              children: '  "params"'
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
              children: '    "model"'
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
              children: '"gpt-4o-mini"'
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
      id: "接入建议",
      children: "接入建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在你的服务端统一保存 API key，不要把模型凭据下发到客户端。"
      }), `
`, _jsxs(_components.li, {
        children: ["把 ", _jsx(_components.code, {
          children: "system_messages"
        }), "、业务上下文和短期记忆分层管理，避免混在一起难以维护。"]
      }), `
`, _jsx(_components.li, {
        children: "为模型请求打上租户、实验、地域等标签，方便排查延迟和故障。"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "如果你还没准备好自定义模型",
      children: "如果你还没准备好自定义模型"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你只是想先跑通链路，可以先用", _jsx(_components.a, {
        href: "presets.mdx",
        children: "预设"
      }), "。预设允许你在不提供第三方 API key 的情况下使用声网托管的供应商组合。"]
    }), `
`, _jsx(_components.h2, {
      id: "相关页面",
      children: "相关页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "presets.mdx",
          children: "使用预设"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "custom-information.mdx",
          children: "传递自定义信息"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../models/llm/index.md",
          children: "LLM 模型"
        })
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
