import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "使用预设",
  description: "在一次 API 调用中组合多个声网托管预设，简化 ASR、LLM 和 TTS 的供应商配置。"
};
export let _markdown = `

预设（preset）是由声网托管的供应商配置组合。使用预设时，你无需提供第三方 API key，也不需要自己填写端点地址和模型名，就能快速跑通 ASR、LLM 和 TTS。

## 前提条件 [#前提条件]

* 已开通[对话式 AI](../reference/enable-conversational-ai.md)
* 拥有有效的 Agora App ID
* 准备好用于 REST API 鉴权的 Customer ID / Customer Secret 或 RTC Token

## \`preset\` 的工作方式 [#preset-的工作方式]

\`preset\` 字段接受一个逗号分隔的字符串。每个预设对应一个供应商类别，因此你可以在同一个请求里同时指定 ASR、LLM 和 TTS 的预设。

可用预设包括：

| 类别  | 可用预设                                                                               |
| --- | ---------------------------------------------------------------------------------- |
| ASR | \`deepgram_nova_2\`、\`deepgram_nova_3\`                                                |
| LLM | \`openai_gpt_4o_mini\`、\`openai_gpt_4_1_mini\`、\`openai_gpt_5_nano\`、\`openai_gpt_5_mini\` |
| TTS | \`minimax_speech_2_6_turbo\`、\`minimax_speech_2_8_turbo\`、\`openai_tts_1\`               |

## 组合使用示例 [#组合使用示例]

下面的示例使用：

* Deepgram Nova 3 作为 ASR
* GPT-5 Mini 作为 LLM
* MiniMax Speech 2.6 Turbo 作为 TTS

\`\`\`bash
curl --request POST \\
  --url https://api.agora.io/api/conversational-ai-agent/v2/projects/<your_app_id>/join \\
  --header 'Authorization: agora token=<your_agora_token>' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "name": "my-preset-agent",
    "preset": "deepgram_nova_3,openai_gpt_5_mini,minimax_speech_2_6_turbo",
    "properties": {
      "channel": "my-channel",
      "token": "<your_rtc_token>",
      "agent_rtc_uid": "1001",
      "remote_rtc_uids": ["1002"],
      "idle_timeout": 120,
      "llm": {
        "system_messages": [
          {
            "role": "system",
            "content": "You are a helpful assistant."
          }
        ],
        "greeting_message": "你好，我可以帮你做什么？",
        "failure_message": "抱歉，我暂时无法处理你的请求。",
        "max_history": 32
      },
      "tts": {
        "params": {
          "voice_setting": {
            "voice_id": "English_captivating_female1"
          }
        }
      },
      "asr": {
        "params": {
          "language": "en",
          "keyterm": "agora"
        }
      }
    }
  }'
\`\`\`

## 什么时候用预设 [#什么时候用预设]

* 你想尽快跑通链路
* 你暂时没有第三方 API key
* 你先要验证产品和体验，再决定是否切到 BYOK

## 什么时候不用预设 [#什么时候不用预设]

* 你需要接入声网托管范围之外的模型
* 你必须完全控制模型端点和账号体系
* 你需要自己处理多租户、风控或专有代理链路

## 相关页面 [#相关页面]

* [启动和停止智能体](start-stop-agent.mdx)
* [自定义模型集成](custom-llm.mdx)
* [LLM 模型](../models/llm/index.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "预设（preset）是由声网托管的供应商配置组合。使用预设时，你无需提供第三方 API key，也不需要自己填写端点地址和模型名，就能快速跑通 ASR、LLM 和 TTS。"
  }, {
    heading: "前提条件",
    content: "已开通对话式 AI"
  }, {
    heading: "前提条件",
    content: "拥有有效的 Agora App ID"
  }, {
    heading: "前提条件",
    content: "准备好用于 REST API 鉴权的 Customer ID / Customer Secret 或 RTC Token"
  }, {
    heading: "preset-的工作方式",
    content: "`preset` 字段接受一个逗号分隔的字符串。每个预设对应一个供应商类别，因此你可以在同一个请求里同时指定 ASR、LLM 和 TTS 的预设。"
  }, {
    heading: "preset-的工作方式",
    content: "可用预设包括："
  }, {
    heading: "preset-的工作方式",
    content: "类别"
  }, {
    heading: "preset-的工作方式",
    content: "可用预设"
  }, {
    heading: "preset-的工作方式",
    content: "ASR"
  }, {
    heading: "preset-的工作方式",
    content: "`deepgram_nova_2`、`deepgram_nova_3`"
  }, {
    heading: "preset-的工作方式",
    content: "LLM"
  }, {
    heading: "preset-的工作方式",
    content: "`openai_gpt_4o_mini`、`openai_gpt_4_1_mini`、`openai_gpt_5_nano`、`openai_gpt_5_mini`"
  }, {
    heading: "preset-的工作方式",
    content: "TTS"
  }, {
    heading: "preset-的工作方式",
    content: "`minimax_speech_2_6_turbo`、`minimax_speech_2_8_turbo`、`openai_tts_1`"
  }, {
    heading: "组合使用示例",
    content: "下面的示例使用："
  }, {
    heading: "组合使用示例",
    content: "Deepgram Nova 3 作为 ASR"
  }, {
    heading: "组合使用示例",
    content: "GPT-5 Mini 作为 LLM"
  }, {
    heading: "组合使用示例",
    content: "MiniMax Speech 2.6 Turbo 作为 TTS"
  }, {
    heading: "什么时候用预设",
    content: "你想尽快跑通链路"
  }, {
    heading: "什么时候用预设",
    content: "你暂时没有第三方 API key"
  }, {
    heading: "什么时候用预设",
    content: "你先要验证产品和体验，再决定是否切到 BYOK"
  }, {
    heading: "什么时候不用预设",
    content: "你需要接入声网托管范围之外的模型"
  }, {
    heading: "什么时候不用预设",
    content: "你必须完全控制模型端点和账号体系"
  }, {
    heading: "什么时候不用预设",
    content: "你需要自己处理多租户、风控或专有代理链路"
  }, {
    heading: "相关页面",
    content: "启动和停止智能体"
  }, {
    heading: "相关页面",
    content: "自定义模型集成"
  }, {
    heading: "相关页面",
    content: "LLM 模型"
  }],
  headings: [{
    id: "前提条件",
    content: "前提条件"
  }, {
    id: "preset-的工作方式",
    content: "`preset` 的工作方式"
  }, {
    id: "组合使用示例",
    content: "组合使用示例"
  }, {
    id: "什么时候用预设",
    content: "什么时候用预设"
  }, {
    id: "什么时候不用预设",
    content: "什么时候不用预设"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#前提条件",
  title: _jsx(_Fragment, {
    children: "前提条件"
  })
}, {
  depth: 2,
  url: "#preset-的工作方式",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "preset"
    }), " 的工作方式"]
  })
}, {
  depth: 2,
  url: "#组合使用示例",
  title: _jsx(_Fragment, {
    children: "组合使用示例"
  })
}, {
  depth: 2,
  url: "#什么时候用预设",
  title: _jsx(_Fragment, {
    children: "什么时候用预设"
  })
}, {
  depth: 2,
  url: "#什么时候不用预设",
  title: _jsx(_Fragment, {
    children: "什么时候不用预设"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "预设（preset）是由声网托管的供应商配置组合。使用预设时，你无需提供第三方 API key，也不需要自己填写端点地址和模型名，就能快速跑通 ASR、LLM 和 TTS。"
    }), `
`, _jsx(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已开通", _jsx(_components.a, {
          href: "../reference/enable-conversational-ai.md",
          children: "对话式 AI"
        })]
      }), `
`, _jsx(_components.li, {
        children: "拥有有效的 Agora App ID"
      }), `
`, _jsx(_components.li, {
        children: "准备好用于 REST API 鉴权的 Customer ID / Customer Secret 或 RTC Token"
      }), `
`]
    }), `
`, _jsxs(_components.h2, {
      id: "preset-的工作方式",
      children: [_jsx(_components.code, {
        children: "preset"
      }), " 的工作方式"]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "preset"
      }), " 字段接受一个逗号分隔的字符串。每个预设对应一个供应商类别，因此你可以在同一个请求里同时指定 ASR、LLM 和 TTS 的预设。"]
    }), `
`, _jsx(_components.p, {
      children: "可用预设包括："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "类别"
          }), _jsx(_components.th, {
            children: "可用预设"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "ASR"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "deepgram_nova_2"
            }), "、", _jsx(_components.code, {
              children: "deepgram_nova_3"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "LLM"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "openai_gpt_4o_mini"
            }), "、", _jsx(_components.code, {
              children: "openai_gpt_4_1_mini"
            }), "、", _jsx(_components.code, {
              children: "openai_gpt_5_nano"
            }), "、", _jsx(_components.code, {
              children: "openai_gpt_5_mini"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "TTS"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "minimax_speech_2_6_turbo"
            }), "、", _jsx(_components.code, {
              children: "minimax_speech_2_8_turbo"
            }), "、", _jsx(_components.code, {
              children: "openai_tts_1"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "组合使用示例",
      children: "组合使用示例"
    }), `
`, _jsx(_components.p, {
      children: "下面的示例使用："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Deepgram Nova 3 作为 ASR"
      }), `
`, _jsx(_components.li, {
        children: "GPT-5 Mini 作为 LLM"
      }), `
`, _jsx(_components.li, {
        children: "MiniMax Speech 2.6 Turbo 作为 TTS"
      }), `
`]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/api/conversational-ai-agent/v2/projects/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "your_app_i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/join"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: agora token=<your_agora_token>'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Content-Type: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "name": "my-preset-agent",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "preset": "deepgram_nova_3,openai_gpt_5_mini,minimax_speech_2_6_turbo",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "properties": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "channel": "my-channel",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "token": "<your_rtc_token>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "agent_rtc_uid": "1001",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "remote_rtc_uids": ["1002"],'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "idle_timeout": 120,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "llm": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "system_messages": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "          {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "role": "system",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "content": "You are a helpful assistant."'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "          }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "greeting_message": "你好，我可以帮你做什么？",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "failure_message": "抱歉，我暂时无法处理你的请求。",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "max_history": 32'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "tts": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "params": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "voice_setting": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "voice_id": "English_captivating_female1"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "          }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "asr": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "params": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "language": "en",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "keyterm": "agora"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  }'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "什么时候用预设",
      children: "什么时候用预设"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你想尽快跑通链路"
      }), `
`, _jsx(_components.li, {
        children: "你暂时没有第三方 API key"
      }), `
`, _jsx(_components.li, {
        children: "你先要验证产品和体验，再决定是否切到 BYOK"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候不用预设",
      children: "什么时候不用预设"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你需要接入声网托管范围之外的模型"
      }), `
`, _jsx(_components.li, {
        children: "你必须完全控制模型端点和账号体系"
      }), `
`, _jsx(_components.li, {
        children: "你需要自己处理多租户、风控或专有代理链路"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "相关页面",
      children: "相关页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "start-stop-agent.mdx",
          children: "启动和停止智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "custom-llm.mdx",
          children: "自定义模型集成"
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
