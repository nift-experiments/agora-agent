import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "启动和停止智能体",
  description: "使用对话式 AI 引擎的 RESTful API 建立实时语音交互，并控制智能体的启动和停止。"
};
export let _markdown = `

本文介绍如何调用对话式 AI 引擎的 RESTful API 来启动和停止一个智能体。

## 理解基本流程 [#理解基本流程]

声网对话式 AI 技术让用户可以在频道里和 AI 智能体实时语音互动。一个最基本的流程通常如下：

1. **用户加入 Agora 频道**。
2. **你的业务后端启动智能体**，并让智能体加入同一个频道。
3. **用户与智能体实时互动**，对话链路会用到 ASR、LLM、TTS 和声网的低延迟实时传输。
4. **会话结束时停止智能体**。
5. **用户退出频道**。

## 前提条件 [#前提条件]

开始前，请确保你已经准备好：

* 已为项目[开通对话式 AI](../reference/enable-conversational-ai.md)
* 从 Agora Console 获取以下信息：
  * App ID
  * Customer ID 和 Customer Secret
  * RTC 临时 Token
* 已获取下列第三方能力中的至少一部分：
  * LLM 提供商 API key，例如 OpenAI
  * TTS 提供商 API key，例如 Microsoft Azure

如果你暂时没有第三方 LLM 或 TTS 凭据，可以先参考[使用预设](presets.mdx)，先跑通第一条链路。

另外，你还需要已经完成基础的[实时音视频接入](../../introduction/realtime-audio-video.md)。

## 启动智能体 [#启动智能体]

调用 \`join\` 接口即可创建一个智能体实例，并让它加入指定频道。你需要在请求中传入频道名和 Token 以完成鉴权。

\`\`\`bash
curl --request POST \\
  --url https://api.agora.io/api/conversational-ai-agent/v2/projects/:appid/join \\
  --header 'Authorization: Basic <your_base64_encoded_credentials>' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "name": "unique_name",
    "properties": {
      "channel": "<your_channel_name>",
      "token": "<your_rtc_token>",
      "agent_rtc_uid": "0",
      "remote_rtc_uids": ["1002"],
      "enable_string_uid": false,
      "idle_timeout": 120,
      "llm": {
        "url": "https://api.openai.com/v1/chat/completions",
        "api_key": "<your_llm_api_key>",
        "system_messages": [
          {
            "role": "system",
            "content": "You are a helpful chatbot."
          }
        ],
        "greeting_message": "你好，有什么可以帮你？",
        "failure_message": "抱歉，我暂时无法回答这个问题。",
        "max_history": 10,
        "params": {
          "model": "gpt-4o-mini"
        }
      },
      "asr": {
        "language": "zh-CN"
      },
      "tts": {
        "vendor": "microsoft",
        "params": {
          "key": "<your_tts_api_key>",
          "region": "eastus",
          "voice_name": "zh-CN-XiaoxiaoNeural"
        }
      }
    }
  }'
\`\`\`

调用成功后，接口会返回 \`200\`，响应示例如下：

\`\`\`json
{
  "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
  "create_ts": 1737111452,
  "status": "RUNNING"
}
\`\`\`

## 停止智能体 [#停止智能体]

当用户结束会话时，你的业务后端应调用停止接口，让智能体离开频道：

\`\`\`bash
curl --request POST \\
  --url https://api.agora.io/api/conversational-ai-agent/v2/projects/:appid/agents/:agentId/leave \\
  --header 'Authorization: Basic <your_base64_encoded_credentials>' \\
  --data '{}'
\`\`\`

## 生产环境建议 [#生产环境建议]

* 在后端统一发起 \`join\` 和 \`leave\` 调用，不要把敏感鉴权信息放到客户端。
* 用业务侧生成的 \`name\` 或 \`labels\` 给每个智能体实例打标，方便监控和排障。
* 结合[运行时事件](get-runtime-events.mdx)和[会话历史](retrieve-session-history.mdx)来确认真实运行状态。

## 继续阅读 [#继续阅读]

* [打断智能体](interrupt-agent.mdx)
* [使用预设](presets.mdx)
* [监听运行时事件](get-runtime-events.mdx)
* [对话式 AI REST API 认证](../../api-reference/conversational-ai/rest-api/authentication.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本文介绍如何调用对话式 AI 引擎的 RESTful API 来启动和停止一个智能体。"
  }, {
    heading: "理解基本流程",
    content: "声网对话式 AI 技术让用户可以在频道里和 AI 智能体实时语音互动。一个最基本的流程通常如下："
  }, {
    heading: "理解基本流程",
    content: "**用户加入 Agora 频道**。"
  }, {
    heading: "理解基本流程",
    content: "**你的业务后端启动智能体**，并让智能体加入同一个频道。"
  }, {
    heading: "理解基本流程",
    content: "**用户与智能体实时互动**，对话链路会用到 ASR、LLM、TTS 和声网的低延迟实时传输。"
  }, {
    heading: "理解基本流程",
    content: "**会话结束时停止智能体**。"
  }, {
    heading: "理解基本流程",
    content: "**用户退出频道**。"
  }, {
    heading: "前提条件",
    content: "开始前，请确保你已经准备好："
  }, {
    heading: "前提条件",
    content: "已为项目开通对话式 AI"
  }, {
    heading: "前提条件",
    content: "从 Agora Console 获取以下信息："
  }, {
    heading: "前提条件",
    content: "App ID"
  }, {
    heading: "前提条件",
    content: "Customer ID 和 Customer Secret"
  }, {
    heading: "前提条件",
    content: "RTC 临时 Token"
  }, {
    heading: "前提条件",
    content: "已获取下列第三方能力中的至少一部分："
  }, {
    heading: "前提条件",
    content: "LLM 提供商 API key，例如 OpenAI"
  }, {
    heading: "前提条件",
    content: "TTS 提供商 API key，例如 Microsoft Azure"
  }, {
    heading: "前提条件",
    content: "如果你暂时没有第三方 LLM 或 TTS 凭据，可以先参考使用预设，先跑通第一条链路。"
  }, {
    heading: "前提条件",
    content: "另外，你还需要已经完成基础的实时音视频接入。"
  }, {
    heading: "启动智能体",
    content: "调用 `join` 接口即可创建一个智能体实例，并让它加入指定频道。你需要在请求中传入频道名和 Token 以完成鉴权。"
  }, {
    heading: "启动智能体",
    content: "调用成功后，接口会返回 `200`，响应示例如下："
  }, {
    heading: "停止智能体",
    content: "当用户结束会话时，你的业务后端应调用停止接口，让智能体离开频道："
  }, {
    heading: "生产环境建议",
    content: "在后端统一发起 `join` 和 `leave` 调用，不要把敏感鉴权信息放到客户端。"
  }, {
    heading: "生产环境建议",
    content: "用业务侧生成的 `name` 或 `labels` 给每个智能体实例打标，方便监控和排障。"
  }, {
    heading: "生产环境建议",
    content: "结合运行时事件和会话历史来确认真实运行状态。"
  }, {
    heading: "继续阅读",
    content: "打断智能体"
  }, {
    heading: "继续阅读",
    content: "使用预设"
  }, {
    heading: "继续阅读",
    content: "监听运行时事件"
  }, {
    heading: "继续阅读",
    content: "对话式 AI REST API 认证"
  }],
  headings: [{
    id: "理解基本流程",
    content: "理解基本流程"
  }, {
    id: "前提条件",
    content: "前提条件"
  }, {
    id: "启动智能体",
    content: "启动智能体"
  }, {
    id: "停止智能体",
    content: "停止智能体"
  }, {
    id: "生产环境建议",
    content: "生产环境建议"
  }, {
    id: "继续阅读",
    content: "继续阅读"
  }]
};
export let toc = [{
  depth: 2,
  url: "#理解基本流程",
  title: _jsx(_Fragment, {
    children: "理解基本流程"
  })
}, {
  depth: 2,
  url: "#前提条件",
  title: _jsx(_Fragment, {
    children: "前提条件"
  })
}, {
  depth: 2,
  url: "#启动智能体",
  title: _jsx(_Fragment, {
    children: "启动智能体"
  })
}, {
  depth: 2,
  url: "#停止智能体",
  title: _jsx(_Fragment, {
    children: "停止智能体"
  })
}, {
  depth: 2,
  url: "#生产环境建议",
  title: _jsx(_Fragment, {
    children: "生产环境建议"
  })
}, {
  depth: 2,
  url: "#继续阅读",
  title: _jsx(_Fragment, {
    children: "继续阅读"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "本文介绍如何调用对话式 AI 引擎的 RESTful API 来启动和停止一个智能体。"
    }), `
`, _jsx(_components.h2, {
      id: "理解基本流程",
      children: "理解基本流程"
    }), `
`, _jsx(_components.p, {
      children: "声网对话式 AI 技术让用户可以在频道里和 AI 智能体实时语音互动。一个最基本的流程通常如下："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "用户加入 Agora 频道"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "你的业务后端启动智能体"
        }), "，并让智能体加入同一个频道。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "用户与智能体实时互动"
        }), "，对话链路会用到 ASR、LLM、TTS 和声网的低延迟实时传输。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "会话结束时停止智能体"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "用户退出频道"
        }), "。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), `
`, _jsx(_components.p, {
      children: "开始前，请确保你已经准备好："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已为项目", _jsx(_components.a, {
          href: "../reference/enable-conversational-ai.md",
          children: "开通对话式 AI"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["从 Agora Console 获取以下信息：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "App ID"
          }), `
`, _jsx(_components.li, {
            children: "Customer ID 和 Customer Secret"
          }), `
`, _jsx(_components.li, {
            children: "RTC 临时 Token"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["已获取下列第三方能力中的至少一部分：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "LLM 提供商 API key，例如 OpenAI"
          }), `
`, _jsx(_components.li, {
            children: "TTS 提供商 API key，例如 Microsoft Azure"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["如果你暂时没有第三方 LLM 或 TTS 凭据，可以先参考", _jsx(_components.a, {
        href: "presets.mdx",
        children: "使用预设"
      }), "，先跑通第一条链路。"]
    }), `
`, _jsxs(_components.p, {
      children: ["另外，你还需要已经完成基础的", _jsx(_components.a, {
        href: "../../introduction/realtime-audio-video.md",
        children: "实时音视频接入"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "启动智能体",
      children: "启动智能体"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "join"
      }), " 接口即可创建一个智能体实例，并让它加入指定频道。你需要在请求中传入频道名和 Token 以完成鉴权。"]
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
              children: '      "channel": "<your_channel_name>",'
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
              children: '      "agent_rtc_uid": "0",'
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
              children: '      "enable_string_uid": false,'
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
              children: '        "url": "https://api.openai.com/v1/chat/completions",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "api_key": "<your_llm_api_key>",'
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
              children: '            "content": "You are a helpful chatbot."'
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
              children: '        "greeting_message": "你好，有什么可以帮你？",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "failure_message": "抱歉，我暂时无法回答这个问题。",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "max_history": 10,'
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
              children: '          "model": "gpt-4o-mini"'
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
              children: '        "language": "zh-CN"'
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
              children: '        "vendor": "microsoft",'
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
              children: '          "key": "<your_tts_api_key>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "region": "eastus",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "voice_name": "zh-CN-XiaoxiaoNeural"'
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
      children: ["调用成功后，接口会返回 ", _jsx(_components.code, {
        children: "200"
      }), "，响应示例如下："]
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "agent_id"'
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
              children: '"1NT29X10YHxxxxxWJOXLYHNYB"'
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
              children: '  "create_ts"'
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
              children: "1737111452"
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
              children: '  "status"'
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
              children: '"RUNNING"'
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
      id: "停止智能体",
      children: "停止智能体"
    }), `
`, _jsx(_components.p, {
      children: "当用户结束会话时，你的业务后端应调用停止接口，让智能体离开频道："
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
              children: " https://api.agora.io/api/conversational-ai-agent/v2/projects/:appid/agents/:agentId/leave"
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
              children: " '{}'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "生产环境建议",
      children: "生产环境建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["在后端统一发起 ", _jsx(_components.code, {
          children: "join"
        }), " 和 ", _jsx(_components.code, {
          children: "leave"
        }), " 调用，不要把敏感鉴权信息放到客户端。"]
      }), `
`, _jsxs(_components.li, {
        children: ["用业务侧生成的 ", _jsx(_components.code, {
          children: "name"
        }), " 或 ", _jsx(_components.code, {
          children: "labels"
        }), " 给每个智能体实例打标，方便监控和排障。"]
      }), `
`, _jsxs(_components.li, {
        children: ["结合", _jsx(_components.a, {
          href: "get-runtime-events.mdx",
          children: "运行时事件"
        }), "和", _jsx(_components.a, {
          href: "retrieve-session-history.mdx",
          children: "会话历史"
        }), "来确认真实运行状态。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "继续阅读",
      children: "继续阅读"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "interrupt-agent.mdx",
          children: "打断智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "presets.mdx",
          children: "使用预设"
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
          href: "../../api-reference/conversational-ai/rest-api/authentication.mdx",
          children: "对话式 AI REST API 认证"
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
