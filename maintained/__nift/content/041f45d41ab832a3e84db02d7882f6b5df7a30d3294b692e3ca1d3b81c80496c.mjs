import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "在回复中途打断智能体",
  description: "通过语音打断或手动打断，开启新一轮对话。"
};
export let _markdown = `

和智能体互动时，用户经常需要在智能体尚未说完时插话，或者通过按钮、指令主动打断它。对话式 AI 引擎支持两类打断方式：

* **语音打断**：引擎检测到新的用户语音输入后，自动停止智能体当前回复。
* **手动打断**：你的 App 或后端显式发起打断请求，例如按钮点击或自定义命令。

## 语音打断 [#语音打断]

对话式 AI 引擎支持基于打断检测的智能语音打断能力，能让用户用更接近真人对话的方式插话。

你可以在创建智能体时，通过 \`turn_detection\` 参数配置打断行为。以下示例展示了一个常见的配置方式：

\`\`\`bash
curl --request POST \\
  --url https://api.agora.io/api/conversational-ai-agent/v2/projects/:appid/join \\
  --header 'Authorization: Basic <your_base64_encoded_credentials>' \\
  --data '{
    "name": "unique_name",
    "properties": {
      "channel": "channel_name",
      "token": "token",
      "agent_rtc_uid": "1001",
      "remote_rtc_uids": ["1002"],
      "turn_detection": {
        "mode": "default",
        "config": {
          "speech_threshold": 0.5,
          "start_of_speech": {
            "mode": "vad",
            "vad_config": {
              "interrupt_duration_ms": 160,
              "speaking_interrupt_duration_ms": 320,
              "prefix_padding_ms": 800
            }
          },
          "end_of_speech": {
            "mode": "semantic",
            "semantic_config": {
              "silence_duration_ms": 320,
              "max_wait_ms": 3000
            }
          }
        }
      }
    }
  }'
\`\`\`

如果调用成功，接口会返回 \`200\` 和智能体信息。

## 手动打断 [#手动打断]

当你希望由按钮、业务状态机或自定义文本指令来触发打断时，可以走显式打断。

### 调用 RESTful API [#调用-restful-api]

使用[打断智能体](../../api-reference/conversational-ai/rest-api/agent/interrupt.md)接口：

\`\`\`bash
curl --request POST \\
  --url https://api.agora.io/api/conversational-ai-agent/v2/projects/:appid/agents/:agentId/interrupt \\
  --header 'Authorization: Basic <credentials>' \\
  --data '{}'
\`\`\`

成功后会返回当前智能体和会话信息。

### 调用客户端组件 API [#调用客户端组件-api]

如果你已经集成客户端组件，也可以从 App 侧发起打断，用于：

* 点击“停止播放”或“重新说一遍”
* 某个业务按钮切换对话主题
* 结合自定义指令触发新的对话轮次

## 何时使用哪一种打断 [#何时使用哪一种打断]

* **用户自然插话**：优先用语音打断。
* **按钮或显式业务事件**：优先用手动打断。
* **不想直接打断，而是把信息注入当前对话**：考虑结合[自定义信息](custom-information.mdx)或发送自定义指令。

## 相关页面 [#相关页面]

* [启动和停止智能体](start-stop-agent.mdx)
* [监听运行时事件](get-runtime-events.mdx)
* [调试智能体故障](debug-agent-failures.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "和智能体互动时，用户经常需要在智能体尚未说完时插话，或者通过按钮、指令主动打断它。对话式 AI 引擎支持两类打断方式："
  }, {
    heading: undefined,
    content: "**语音打断**：引擎检测到新的用户语音输入后，自动停止智能体当前回复。"
  }, {
    heading: undefined,
    content: "**手动打断**：你的 App 或后端显式发起打断请求，例如按钮点击或自定义命令。"
  }, {
    heading: "语音打断",
    content: "对话式 AI 引擎支持基于打断检测的智能语音打断能力，能让用户用更接近真人对话的方式插话。"
  }, {
    heading: "语音打断",
    content: "你可以在创建智能体时，通过 `turn_detection` 参数配置打断行为。以下示例展示了一个常见的配置方式："
  }, {
    heading: "语音打断",
    content: "如果调用成功，接口会返回 `200` 和智能体信息。"
  }, {
    heading: "手动打断",
    content: "当你希望由按钮、业务状态机或自定义文本指令来触发打断时，可以走显式打断。"
  }, {
    heading: "调用-restful-api",
    content: "使用打断智能体接口："
  }, {
    heading: "调用-restful-api",
    content: "成功后会返回当前智能体和会话信息。"
  }, {
    heading: "调用客户端组件-api",
    content: "如果你已经集成客户端组件，也可以从 App 侧发起打断，用于："
  }, {
    heading: "调用客户端组件-api",
    content: "点击“停止播放”或“重新说一遍”"
  }, {
    heading: "调用客户端组件-api",
    content: "某个业务按钮切换对话主题"
  }, {
    heading: "调用客户端组件-api",
    content: "结合自定义指令触发新的对话轮次"
  }, {
    heading: "何时使用哪一种打断",
    content: "**用户自然插话**：优先用语音打断。"
  }, {
    heading: "何时使用哪一种打断",
    content: "**按钮或显式业务事件**：优先用手动打断。"
  }, {
    heading: "何时使用哪一种打断",
    content: "**不想直接打断，而是把信息注入当前对话**：考虑结合自定义信息或发送自定义指令。"
  }, {
    heading: "相关页面",
    content: "启动和停止智能体"
  }, {
    heading: "相关页面",
    content: "监听运行时事件"
  }, {
    heading: "相关页面",
    content: "调试智能体故障"
  }],
  headings: [{
    id: "语音打断",
    content: "语音打断"
  }, {
    id: "手动打断",
    content: "手动打断"
  }, {
    id: "调用-restful-api",
    content: "调用 RESTful API"
  }, {
    id: "调用客户端组件-api",
    content: "调用客户端组件 API"
  }, {
    id: "何时使用哪一种打断",
    content: "何时使用哪一种打断"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#语音打断",
  title: _jsx(_Fragment, {
    children: "语音打断"
  })
}, {
  depth: 2,
  url: "#手动打断",
  title: _jsx(_Fragment, {
    children: "手动打断"
  })
}, {
  depth: 3,
  url: "#调用-restful-api",
  title: _jsx(_Fragment, {
    children: "调用 RESTful API"
  })
}, {
  depth: 3,
  url: "#调用客户端组件-api",
  title: _jsx(_Fragment, {
    children: "调用客户端组件 API"
  })
}, {
  depth: 2,
  url: "#何时使用哪一种打断",
  title: _jsx(_Fragment, {
    children: "何时使用哪一种打断"
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
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "和智能体互动时，用户经常需要在智能体尚未说完时插话，或者通过按钮、指令主动打断它。对话式 AI 引擎支持两类打断方式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "语音打断"
        }), "：引擎检测到新的用户语音输入后，自动停止智能体当前回复。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "手动打断"
        }), "：你的 App 或后端显式发起打断请求，例如按钮点击或自定义命令。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "语音打断",
      children: "语音打断"
    }), `
`, _jsx(_components.p, {
      children: "对话式 AI 引擎支持基于打断检测的智能语音打断能力，能让用户用更接近真人对话的方式插话。"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以在创建智能体时，通过 ", _jsx(_components.code, {
        children: "turn_detection"
      }), " 参数配置打断行为。以下示例展示了一个常见的配置方式："]
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
              children: " https://api.agora.io/api/conversational-ai-agent/v2/projects/:appid/join"
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
              children: " 'Authorization: Basic <your_base64_encoded_credentials>'"
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
              children: '    "name": "unique_name",'
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
              children: '      "channel": "channel_name",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "token": "token",'
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
              children: '      "turn_detection": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "mode": "default",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "config": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "speech_threshold": 0.5,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "start_of_speech": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "mode": "vad",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "vad_config": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "interrupt_duration_ms": 160,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "speaking_interrupt_duration_ms": 320,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "prefix_padding_ms": 800'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "          },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "end_of_speech": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "mode": "semantic",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "semantic_config": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "silence_duration_ms": 320,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "max_wait_ms": 3000'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            }"
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
`, _jsxs(_components.p, {
      children: ["如果调用成功，接口会返回 ", _jsx(_components.code, {
        children: "200"
      }), " 和智能体信息。"]
    }), `
`, _jsx(_components.h2, {
      id: "手动打断",
      children: "手动打断"
    }), `
`, _jsx(_components.p, {
      children: "当你希望由按钮、业务状态机或自定义文本指令来触发打断时，可以走显式打断。"
    }), `
`, _jsx(_components.h3, {
      id: "调用-restful-api",
      children: "调用 RESTful API"
    }), `
`, _jsxs(_components.p, {
      children: ["使用", _jsx(_components.a, {
        href: "../../api-reference/conversational-ai/rest-api/agent/interrupt.md",
        children: "打断智能体"
      }), "接口："]
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
              children: " https://api.agora.io/api/conversational-ai-agent/v2/projects/:appid/agents/:agentId/interrupt"
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
              children: " 'Authorization: Basic <credentials>'"
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
              children: " '{}'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "成功后会返回当前智能体和会话信息。"
    }), `
`, _jsx(_components.h3, {
      id: "调用客户端组件-api",
      children: "调用客户端组件 API"
    }), `
`, _jsx(_components.p, {
      children: "如果你已经集成客户端组件，也可以从 App 侧发起打断，用于："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "点击“停止播放”或“重新说一遍”"
      }), `
`, _jsx(_components.li, {
        children: "某个业务按钮切换对话主题"
      }), `
`, _jsx(_components.li, {
        children: "结合自定义指令触发新的对话轮次"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "何时使用哪一种打断",
      children: "何时使用哪一种打断"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "用户自然插话"
        }), "：优先用语音打断。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "按钮或显式业务事件"
        }), "：优先用手动打断。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "不想直接打断，而是把信息注入当前对话"
        }), "：考虑结合", _jsx(_components.a, {
          href: "custom-information.mdx",
          children: "自定义信息"
        }), "或发送自定义指令。"]
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
          href: "get-runtime-events.mdx",
          children: "监听运行时事件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "debug-agent-failures.mdx",
          children: "调试智能体故障"
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
