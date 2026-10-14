import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Google Gemini Live",
  description: "在 Voice Agent 中使用 Google Gemini Live 作为 MLLM。"
};
export let _markdown = '\n\nGoogle Gemini Live 提供原生实时音频处理能力，适合使用 Google AI Studio 体系进行接入的团队。\n\n## 支持的模型 [#支持的模型]\n\n| 模型                                         | 说明                         |\n| ------------------------------------------ | -------------------------- |\n| `models/gemini-3.8-live`                   | 通用 Gemini Live 模型。         |\n| `models/gemini-3.8-live-extended-thinking` | 具有可调节推理预算的 Gemini Live 模型。 |\n\n当对话需要额外推理时，使用 `models/gemini-3.8-live-extended-thinking`。将 `thinking_level` 设置为 `low`、`medium` 或 `high`。使用 `models/gemini-3.8-live` 时，请省略 `thinking_level`。\n\n## 示例配置 [#示例配置]\n\n<CalloutContainer type="info">\n  <CalloutTitle>\n    预览端点\n  </CalloutTitle>\n\n  <CalloutDescription>\n    `models/gemini-3.8-live` 和 `models/gemini-3.8-live-extended-thinking` 目前为早期访问预览版。使用任一模型时，请将[启动对话式 AI 智能体](/en/api-reference/api-ref/conversational-ai/join)请求发送至以下预览端点，而非标准端点，并包含所需请求头：\n\n    * **URL**：`https://partner.ai.agora.io/preview/api/conversational-ai-agent/v2/projects/<APP_ID>/join`\n    * **请求头**：`agora-feature: gemini-live`\n  </CalloutDescription>\n</CalloutContainer>\n\n```json\n"mllm": {\n  "enable": true,\n  "api_key": "<gemini_key>",\n  "params": {\n    "model": "models/gemini-3.8-live-extended-thinking",\n    "thinking_level": "medium",\n    "instructions": "You are a friendly assistant.",\n    "voice": "Charon",\n    "transcribe_agent": true,\n    "transcribe_user": true\n  },\n  "input_modalities": ["audio"],\n  "output_modalities": ["audio"],\n  "vendor": "gemini"\n}\n```\n\n## 关键参数 [#关键参数]\n\n* `api_key`：Gemini API key\n* `params.model`：Gemini Live 模型名。支持 `models/gemini-3.8-live` 和 `models/gemini-3.8-live-extended-thinking`。\n* `params.thinking_level`：仅适用于 `models/gemini-3.8-live-extended-thinking` 的推理预算。可设置为 `low`、`medium` 或 `high`；使用 `models/gemini-3.8-live` 时请勿设置此参数。\n* `params.voice`：语音风格\n* `transcribe_agent` / `transcribe_user`：是否实时转写\n';
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Google Gemini Live 提供原生实时音频处理能力，适合使用 Google AI Studio 体系进行接入的团队。"
  }, {
    heading: "支持的模型",
    content: "模型"
  }, {
    heading: "支持的模型",
    content: "说明"
  }, {
    heading: "支持的模型",
    content: "`models/gemini-3.8-live`"
  }, {
    heading: "支持的模型",
    content: "通用 Gemini Live 模型。"
  }, {
    heading: "支持的模型",
    content: "`models/gemini-3.8-live-extended-thinking`"
  }, {
    heading: "支持的模型",
    content: "具有可调节推理预算的 Gemini Live 模型。"
  }, {
    heading: "支持的模型",
    content: "当对话需要额外推理时，使用 `models/gemini-3.8-live-extended-thinking`。将 `thinking_level` 设置为 `low`、`medium` 或 `high`。使用 `models/gemini-3.8-live` 时，请省略 `thinking_level`。"
  }, {
    heading: "示例配置",
    content: "`models/gemini-3.8-live` 和 `models/gemini-3.8-live-extended-thinking` 目前为早期访问预览版。使用任一模型时，请将启动对话式 AI 智能体请求发送至以下预览端点，而非标准端点，并包含所需请求头："
  }, {
    heading: "示例配置",
    content: "**URL**：`https://partner.ai.agora.io/preview/api/conversational-ai-agent/v2/projects/<APP_ID>/join`"
  }, {
    heading: "示例配置",
    content: "**请求头**：`agora-feature: gemini-live`"
  }, {
    heading: "关键参数",
    content: "`api_key`：Gemini API key"
  }, {
    heading: "关键参数",
    content: "`params.model`：Gemini Live 模型名。支持 `models/gemini-3.8-live` 和 `models/gemini-3.8-live-extended-thinking`。"
  }, {
    heading: "关键参数",
    content: "`params.thinking_level`：仅适用于 `models/gemini-3.8-live-extended-thinking` 的推理预算。可设置为 `low`、`medium` 或 `high`；使用 `models/gemini-3.8-live` 时请勿设置此参数。"
  }, {
    heading: "关键参数",
    content: "`params.voice`：语音风格"
  }, {
    heading: "关键参数",
    content: "`transcribe_agent` / `transcribe_user`：是否实时转写"
  }],
  headings: [{
    id: "支持的模型",
    content: "支持的模型"
  }, {
    id: "示例配置",
    content: "示例配置"
  }, {
    id: "关键参数",
    content: "关键参数"
  }]
};
export let toc = [{
  depth: 2,
  url: "#支持的模型",
  title: _jsx(_Fragment, {
    children: "支持的模型"
  })
}, {
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
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
      children: "Google Gemini Live 提供原生实时音频处理能力，适合使用 Google AI Studio 体系进行接入的团队。"
    }), `
`, _jsx(_components.h2, {
      id: "支持的模型",
      children: "支持的模型"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "模型"
          }), _jsx(_components.th, {
            children: "说明"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "models/gemini-3.8-live"
            })
          }), _jsx(_components.td, {
            children: "通用 Gemini Live 模型。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "models/gemini-3.8-live-extended-thinking"
            })
          }), _jsx(_components.td, {
            children: "具有可调节推理预算的 Gemini Live 模型。"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["当对话需要额外推理时，使用 ", _jsx(_components.code, {
        children: "models/gemini-3.8-live-extended-thinking"
      }), "。将 ", _jsx(_components.code, {
        children: "thinking_level"
      }), " 设置为 ", _jsx(_components.code, {
        children: "low"
      }), "、", _jsx(_components.code, {
        children: "medium"
      }), " 或 ", _jsx(_components.code, {
        children: "high"
      }), "。使用 ", _jsx(_components.code, {
        children: "models/gemini-3.8-live"
      }), " 时，请省略 ", _jsx(_components.code, {
        children: "thinking_level"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "示例配置",
      children: "示例配置"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "预览端点"
      }), _jsxs(CalloutDescription, {
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "models/gemini-3.8-live"
          }), " 和 ", _jsx(_components.code, {
            children: "models/gemini-3.8-live-extended-thinking"
          }), " 目前为早期访问预览版。使用任一模型时，请将", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/conversational-ai/join",
            children: "启动对话式 AI 智能体"
          }), "请求发送至以下预览端点，而非标准端点，并包含所需请求头："]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "URL"
            }), "：", _jsx(_components.code, {
              children: "https://partner.ai.agora.io/preview/api/conversational-ai-agent/v2/projects/<APP_ID>/join"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "请求头"
            }), "：", _jsx(_components.code, {
              children: "agora-feature: gemini-live"
            })]
          }), `
`]
        })]
      })]
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
              children: '"mllm"'
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
              children: '  "enable"'
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
              children: "true"
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
              children: '"<gemini_key>"'
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
              children: '"models/gemini-3.8-live-extended-thinking"'
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
              children: '    "thinking_level"'
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
              children: '"medium"'
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
              children: '    "instructions"'
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
              children: '"You are a friendly assistant."'
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
              children: '    "voice"'
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
              children: '"Charon"'
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
              children: '    "transcribe_agent"'
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
              children: "true"
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
              children: '    "transcribe_user"'
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
              children: "true"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "input_modalities"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "output_modalities"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
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
              children: '"gemini"'
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
          children: "api_key"
        }), "：Gemini API key"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "params.model"
        }), "：Gemini Live 模型名。支持 ", _jsx(_components.code, {
          children: "models/gemini-3.8-live"
        }), " 和 ", _jsx(_components.code, {
          children: "models/gemini-3.8-live-extended-thinking"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "params.thinking_level"
        }), "：仅适用于 ", _jsx(_components.code, {
          children: "models/gemini-3.8-live-extended-thinking"
        }), " 的推理预算。可设置为 ", _jsx(_components.code, {
          children: "low"
        }), "、", _jsx(_components.code, {
          children: "medium"
        }), " 或 ", _jsx(_components.code, {
          children: "high"
        }), "；使用 ", _jsx(_components.code, {
          children: "models/gemini-3.8-live"
        }), " 时请勿设置此参数。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "params.voice"
        }), "：语音风格"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "transcribe_agent"
        }), " / ", _jsx(_components.code, {
          children: "transcribe_user"
        }), "：是否实时转写"]
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
