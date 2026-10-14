import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "使用 RESTful API 实现对话式 AI 引擎",
  description: "本文介绍如何调用声网对话式 AI 引擎 RESTful API 创建一个对话式智能体 (Conversation AI Agent)，并实现与 AI 智能体对话互动。"
};
export let _markdown = `

本文介绍如何调用声网对话式 AI 引擎 RESTful API 创建一个对话式智能体 (Conversation AI Agent)，并实现与 AI 智能体对话互动。

## 前提条件 [#前提条件]

开始前，请确保:

* 已参考[开通服务](./enable-service.md)在声网控制台完成以下步骤：
  * 为你的项目开通声网对话式 AI 引擎。
  * 获取 App ID：声网随机生成的字符串，用于识别你的项目和调用对话式智能体 RESTful API。
  * 获取客户 ID 和客户密钥：用于在调用对话式 AI 引擎 RESTful API 时进行 HTTP 安全认证。
  * 生成临时 Token：Token 也称为动态密钥，用于在加入 RTC 频道时对用户鉴权。临时 Token 的有效期为 24 小时。在生产环境中，你需要参考[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/android/basic-features/token-authentication)在你的 App 服务端生成 Token。
* 已参考[实现音视频互动](https://doc.shengwang.cn/doc/rtc/android/get-started/quick-start)集成 v4.5.1 及以上版本的实时互动 SDK，并在你的 App 中实现基本的实时音视频功能。

> 信息
> 如果你想使用嵌入式智能硬件与 AI 智能体对话，你可以集成 1.9.x 及以上版本的 RTSA C SDK，并参考[实现媒体流和信令传输](https://doc.shengwang.cn/doc/rtsa/c/get-started/implement-transmission)在你的设备端实现基本的实时音视频功能。

* 已获取大语言模型 (LLM) 供应商的 API key 和回调 URL。
* 已参考文本转语音 (TTS) 供应商的官方文档获取身份认证信息（token、appid 等）并了解相关参数配置方式。

## 实现流程 [#实现流程]

实现与智能体语音互动的流程如下图所示：

![image](https://doc.shengwang.cn/img/convoai/quick-start.svg)

### 加入 RTC 频道 [#加入-rtc-频道]

在你的 App 中调用 \`joinChannel\` 加入一个 RTC 频道。

### 创建对话式智能体 [#创建对话式智能体]

调用[创建对话式智能体](../operations/start-agent.md)创建一个智能体实例，并传入上一步中使用的频道名和 Token 让智能体加入同一个 RTC 频道。

> 提示
>
> * 声网推荐你前往控制台的 [**Playground**](https://console.shengwang.cn/product/ConversationAI?tab=Playground) 快速体验与 AI 智能体对话，正确配置各项参数并完成体验后，点击右上角的 **View code** 复制自动生成的服务端 API 调用示例代码。
> * 你可以使用两种鉴权方式：
>   * （推荐）使用 RTC Token 认证时，你可以直接将 Token 填入 HTTP 请求头的 \`Authorization\` 字段。例如：\`Authorization: agora token="007abcxxxxxxx123"\`。
>   * 使用 HTTP 基本认证时，你可以使用[第三方在线工具](https://www.debugbear.com/basic-auth-header-generator)快速得到 \`Authorization\` 值。将客户 ID 和客户密钥分别填入 \`Username\` 和 \`Password\` 框，得到形如 \`Authorization: Basic NDI1OTQ3N2I4MzYy...YwZjA=\` 的结果。将该结果替代下面代码中的 \`Authorization: agora token="007abcxxxxxxx123"\` 即可。

#### 请求 [#请求]

\`\`\`shell
curl --request POST \\
  --url https://api.agora.io/cn/api/conversational-ai-agent/v2/projects/<your_app_id>/join \\
  --header 'Authorization: agora token="007abcxxxxxxx123"' \\
  --data '
{
  "name": "unique_name",
  "properties": {
    "channel": "channel_name",
    "token": "token",
    "agent_rtc_uid": "0",
    "remote_rtc_uids": [
      "123"
    ],
    "asr": {
      "language": "zh-CN"
    },
    "llm": {
      "url": "https://api.xxxx/v1/xxxx",
      "api_key": "xxx",
      "system_messages": [
        {
          "role": "system",
          "content": "You are a helpful chatbot."
        }
      ],
      "greeting_message": "您好，有什么可以帮您？",
      "failure_message": "抱歉，我无法回答这个问题。",
      "max_history": 10,
      "params": {
        "model": "xxxx",
      }
    },
    "tts": {
      "vendor": "minimax",
      "params": {
        "key": "your-minimax-key",
        "model": "speech-01-turbo",
        "voice_setting": {
          "voice_id": "female-shaonv",
          "speed": 1,
          "vol": 1,
          "pitch": 0,
          "emotion": "happy"
        },
        "audio_setting": {
          "sample_rate": 16000
        }
      }
    }
  }
}
'
\`\`\`

#### 响应 [#响应]

调用成功后，你会收到如下响应：

\`\`\`json
/// 200 OK
{
  // highlight-start
  "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
  // highlight-end
  "create_ts": 1737111452,
  "status": "RUNNING"
}
\`\`\`

同时，智能体会加入到 RTC 频道中，向用户问好；用户则可以开始与智能体对话。

### 停止对话式智能体 [#停止对话式智能体]

当用户与智能体对话结束后，你可以调用[停止对话式智能体](../operations/stop-agent.md)，传入创建智能体时返回的 \`agent_id\` 让指定智能体离开 RTC 频道。

#### 请求 [#请求-1]

\`\`\`shell
curl --request POST \\
// highlight-start
  --url https://api.agora.io/cn/api/conversational-ai-agent/v2/projects/<your_app_id>/agents/<agentid>/leave \\
  --header 'Authorization: agora token="007abcxxxxxxx123"' \\
// highlight-end
\`\`\`

#### 响应 [#响应-1]

调用成功后，你会收到如下响应：

\`\`\`json
/// 200 OK
{}
\`\`\`

## 参考信息 [#参考信息]

### 开发注意事项 [#开发注意事项]

* 目前仅支持使用中文和英文与 AI 智能体互动，其他语种需求[联系技术支持](https://ticket.shengwang.cn)反馈。
* 目前单一 App ID 调用服务端 API 的并发用户数 (Peak Concurrent Users) 限制为 20， 如需提升配额，请[联系技术支持](https://ticket.shengwang.cn)申请。

### API 参考 [#api-参考]

* [创建对话式智能体](../operations/start-agent.md)
* [停止对话式智能体](../operations/stop-agent.md)
* [更新智能体配置](../operations/agent-update.md)
* [查询智能体状态](../operations/query-agent-status.md)
* [获取智能体列表](../operations/get-agent-list.md)
* [响应状态码](/zh-CN/api-reference/response-code)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本文介绍如何调用声网对话式 AI 引擎 RESTful API 创建一个对话式智能体 (Conversation AI Agent)，并实现与 AI 智能体对话互动。"
  }, {
    heading: "前提条件",
    content: "开始前，请确保:"
  }, {
    heading: "前提条件",
    content: "已参考开通服务在声网控制台完成以下步骤："
  }, {
    heading: "前提条件",
    content: "为你的项目开通声网对话式 AI 引擎。"
  }, {
    heading: "前提条件",
    content: "获取 App ID：声网随机生成的字符串，用于识别你的项目和调用对话式智能体 RESTful API。"
  }, {
    heading: "前提条件",
    content: "获取客户 ID 和客户密钥：用于在调用对话式 AI 引擎 RESTful API 时进行 HTTP 安全认证。"
  }, {
    heading: "前提条件",
    content: "生成临时 Token：Token 也称为动态密钥，用于在加入 RTC 频道时对用户鉴权。临时 Token 的有效期为 24 小时。在生产环境中，你需要参考使用 Token 鉴权在你的 App 服务端生成 Token。"
  }, {
    heading: "前提条件",
    content: "已参考实现音视频互动集成 v4.5.1 及以上版本的实时互动 SDK，并在你的 App 中实现基本的实时音视频功能。"
  }, {
    heading: "前提条件",
    content: `> 信息
> 如果你想使用嵌入式智能硬件与 AI 智能体对话，你可以集成 1.9.x 及以上版本的 RTSA C SDK，并参考实现媒体流和信令传输在你的设备端实现基本的实时音视频功能。`
  }, {
    heading: "前提条件",
    content: "已获取大语言模型 (LLM) 供应商的 API key 和回调 URL。"
  }, {
    heading: "前提条件",
    content: "已参考文本转语音 (TTS) 供应商的官方文档获取身份认证信息（token、appid 等）并了解相关参数配置方式。"
  }, {
    heading: "实现流程",
    content: "实现与智能体语音互动的流程如下图所示："
  }, {
    heading: "加入-rtc-频道",
    content: "在你的 App 中调用 `joinChannel` 加入一个 RTC 频道。"
  }, {
    heading: "创建对话式智能体",
    content: "调用创建对话式智能体创建一个智能体实例，并传入上一步中使用的频道名和 Token 让智能体加入同一个 RTC 频道。"
  }, {
    heading: "创建对话式智能体",
    content: '> 提示\n>\n> * 声网推荐你前往控制台的 **Playground** 快速体验与 AI 智能体对话，正确配置各项参数并完成体验后，点击右上角的 **View code** 复制自动生成的服务端 API 调用示例代码。\n> * 你可以使用两种鉴权方式：\n>   * （推荐）使用 RTC Token 认证时，你可以直接将 Token 填入 HTTP 请求头的 `Authorization` 字段。例如：`Authorization: agora token="007abcxxxxxxx123"`。\n>   * 使用 HTTP 基本认证时，你可以使用第三方在线工具快速得到 `Authorization` 值。将客户 ID 和客户密钥分别填入 `Username` 和 `Password` 框，得到形如 `Authorization: Basic NDI1OTQ3N2I4MzYy...YwZjA=` 的结果。将该结果替代下面代码中的 `Authorization: agora token="007abcxxxxxxx123"` 即可。'
  }, {
    heading: "响应",
    content: "调用成功后，你会收到如下响应："
  }, {
    heading: "响应",
    content: "同时，智能体会加入到 RTC 频道中，向用户问好；用户则可以开始与智能体对话。"
  }, {
    heading: "停止对话式智能体",
    content: "当用户与智能体对话结束后，你可以调用停止对话式智能体，传入创建智能体时返回的 `agent_id` 让指定智能体离开 RTC 频道。"
  }, {
    heading: "响应-1",
    content: "调用成功后，你会收到如下响应："
  }, {
    heading: "开发注意事项",
    content: "目前仅支持使用中文和英文与 AI 智能体互动，其他语种需求联系技术支持反馈。"
  }, {
    heading: "开发注意事项",
    content: "目前单一 App ID 调用服务端 API 的并发用户数 (Peak Concurrent Users) 限制为 20， 如需提升配额，请联系技术支持申请。"
  }, {
    heading: "api-参考",
    content: "创建对话式智能体"
  }, {
    heading: "api-参考",
    content: "停止对话式智能体"
  }, {
    heading: "api-参考",
    content: "更新智能体配置"
  }, {
    heading: "api-参考",
    content: "查询智能体状态"
  }, {
    heading: "api-参考",
    content: "获取智能体列表"
  }, {
    heading: "api-参考",
    content: "响应状态码"
  }],
  headings: [{
    id: "前提条件",
    content: "前提条件"
  }, {
    id: "实现流程",
    content: "实现流程"
  }, {
    id: "加入-rtc-频道",
    content: "加入 RTC 频道"
  }, {
    id: "创建对话式智能体",
    content: "创建对话式智能体"
  }, {
    id: "请求",
    content: "请求"
  }, {
    id: "响应",
    content: "响应"
  }, {
    id: "停止对话式智能体",
    content: "停止对话式智能体"
  }, {
    id: "请求-1",
    content: "请求"
  }, {
    id: "响应-1",
    content: "响应"
  }, {
    id: "参考信息",
    content: "参考信息"
  }, {
    id: "开发注意事项",
    content: "开发注意事项"
  }, {
    id: "api-参考",
    content: "API 参考"
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
  url: "#实现流程",
  title: _jsx(_Fragment, {
    children: "实现流程"
  })
}, {
  depth: 3,
  url: "#加入-rtc-频道",
  title: _jsx(_Fragment, {
    children: "加入 RTC 频道"
  })
}, {
  depth: 3,
  url: "#创建对话式智能体",
  title: _jsx(_Fragment, {
    children: "创建对话式智能体"
  })
}, {
  depth: 4,
  url: "#请求",
  title: _jsx(_Fragment, {
    children: "请求"
  })
}, {
  depth: 4,
  url: "#响应",
  title: _jsx(_Fragment, {
    children: "响应"
  })
}, {
  depth: 3,
  url: "#停止对话式智能体",
  title: _jsx(_Fragment, {
    children: "停止对话式智能体"
  })
}, {
  depth: 4,
  url: "#请求-1",
  title: _jsx(_Fragment, {
    children: "请求"
  })
}, {
  depth: 4,
  url: "#响应-1",
  title: _jsx(_Fragment, {
    children: "响应"
  })
}, {
  depth: 2,
  url: "#参考信息",
  title: _jsx(_Fragment, {
    children: "参考信息"
  })
}, {
  depth: 3,
  url: "#开发注意事项",
  title: _jsx(_Fragment, {
    children: "开发注意事项"
  })
}, {
  depth: 3,
  url: "#api-参考",
  title: _jsx(_Fragment, {
    children: "API 参考"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
      children: "本文介绍如何调用声网对话式 AI 引擎 RESTful API 创建一个对话式智能体 (Conversation AI Agent)，并实现与 AI 智能体对话互动。"
    }), `
`, _jsx(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), `
`, _jsx(_components.p, {
      children: "开始前，请确保:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已参考", _jsx(_components.a, {
          href: "./enable-service.md",
          children: "开通服务"
        }), "在声网控制台完成以下步骤：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "为你的项目开通声网对话式 AI 引擎。"
          }), `
`, _jsx(_components.li, {
            children: "获取 App ID：声网随机生成的字符串，用于识别你的项目和调用对话式智能体 RESTful API。"
          }), `
`, _jsx(_components.li, {
            children: "获取客户 ID 和客户密钥：用于在调用对话式 AI 引擎 RESTful API 时进行 HTTP 安全认证。"
          }), `
`, _jsxs(_components.li, {
            children: ["生成临时 Token：Token 也称为动态密钥，用于在加入 RTC 频道时对用户鉴权。临时 Token 的有效期为 24 小时。在生产环境中，你需要参考", _jsx(_components.a, {
              href: "https://doc.shengwang.cn/doc/rtc/android/basic-features/token-authentication",
              children: "使用 Token 鉴权"
            }), "在你的 App 服务端生成 Token。"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["已参考", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/android/get-started/quick-start",
          children: "实现音视频互动"
        }), "集成 v4.5.1 及以上版本的实时互动 SDK，并在你的 App 中实现基本的实时音视频功能。"]
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: [`信息
如果你想使用嵌入式智能硬件与 AI 智能体对话，你可以集成 1.9.x 及以上版本的 RTSA C SDK，并参考`, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtsa/c/get-started/implement-transmission",
          children: "实现媒体流和信令传输"
        }), "在你的设备端实现基本的实时音视频功能。"]
      }), `
`]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "已获取大语言模型 (LLM) 供应商的 API key 和回调 URL。"
      }), `
`, _jsx(_components.li, {
        children: "已参考文本转语音 (TTS) 供应商的官方文档获取身份认证信息（token、appid 等）并了解相关参数配置方式。"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "实现流程",
      children: "实现流程"
    }), `
`, _jsx(_components.p, {
      children: "实现与智能体语音互动的流程如下图所示："
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://doc.shengwang.cn/img/convoai/quick-start.svg",
        alt: "image"
      })
    }), `
`, _jsx(_components.h3, {
      id: "加入-rtc-频道",
      children: "加入 RTC 频道"
    }), `
`, _jsxs(_components.p, {
      children: ["在你的 App 中调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 加入一个 RTC 频道。"]
    }), `
`, _jsx(_components.h3, {
      id: "创建对话式智能体",
      children: "创建对话式智能体"
    }), `
`, _jsxs(_components.p, {
      children: ["调用", _jsx(_components.a, {
        href: "../operations/start-agent.md",
        children: "创建对话式智能体"
      }), "创建一个智能体实例，并传入上一步中使用的频道名和 Token 让智能体加入同一个 RTC 频道。"]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: "提示"
      }), `
`, _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["声网推荐你前往控制台的 ", _jsx(_components.a, {
            href: "https://console.shengwang.cn/product/ConversationAI?tab=Playground",
            children: _jsx(_components.strong, {
              children: "Playground"
            })
          }), " 快速体验与 AI 智能体对话，正确配置各项参数并完成体验后，点击右上角的 ", _jsx(_components.strong, {
            children: "View code"
          }), " 复制自动生成的服务端 API 调用示例代码。"]
        }), `
`, _jsxs(_components.li, {
          children: ["你可以使用两种鉴权方式：", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["（推荐）使用 RTC Token 认证时，你可以直接将 Token 填入 HTTP 请求头的 ", _jsx(_components.code, {
                children: "Authorization"
              }), " 字段。例如：", _jsx(_components.code, {
                children: 'Authorization: agora token="007abcxxxxxxx123"'
              }), "。"]
            }), `
`, _jsxs(_components.li, {
              children: ["使用 HTTP 基本认证时，你可以使用", _jsx(_components.a, {
                href: "https://www.debugbear.com/basic-auth-header-generator",
                children: "第三方在线工具"
              }), "快速得到 ", _jsx(_components.code, {
                children: "Authorization"
              }), " 值。将客户 ID 和客户密钥分别填入 ", _jsx(_components.code, {
                children: "Username"
              }), " 和 ", _jsx(_components.code, {
                children: "Password"
              }), " 框，得到形如 ", _jsx(_components.code, {
                children: "Authorization: Basic NDI1OTQ3N2I4MzYy...YwZjA="
              }), " 的结果。将该结果替代下面代码中的 ", _jsx(_components.code, {
                children: 'Authorization: agora token="007abcxxxxxxx123"'
              }), " 即可。"]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "请求",
      children: "请求"
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
              children: " https://api.agora.io/cn/api/conversational-ai-agent/v2/projects/"
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
              children: ` 'Authorization: agora token="007abcxxxxxxx123"'`
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
              children: " '"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "{"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "name": "unique_name",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "properties": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "channel": "channel_name",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "token": "token",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "agent_rtc_uid": "0",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "remote_rtc_uids": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "123"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "asr": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "language": "zh-CN"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "llm": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "url": "https://api.xxxx/v1/xxxx",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "api_key": "xxx",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "system_messages": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "role": "system",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "content": "You are a helpful chatbot."'
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
              children: "      ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "greeting_message": "您好，有什么可以帮您？",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "failure_message": "抱歉，我无法回答这个问题。",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "max_history": 10,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "params": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "model": "xxxx",'
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
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "tts": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "vendor": "minimax",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "params": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "key": "your-minimax-key",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "model": "speech-01-turbo",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "voice_setting": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "voice_id": "female-shaonv",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "speed": 1,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "vol": 1,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "pitch": 0,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "emotion": "happy"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "audio_setting": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "sample_rate": 16000'
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
              children: "  }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "响应",
      children: "响应"
    }), `
`, _jsx(_components.p, {
      children: "调用成功后，你会收到如下响应："
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
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "/// 200 OK"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // highlight-start"
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // highlight-end"
            })
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
`, _jsx(_components.p, {
      children: "同时，智能体会加入到 RTC 频道中，向用户问好；用户则可以开始与智能体对话。"
    }), `
`, _jsx(_components.h3, {
      id: "停止对话式智能体",
      children: "停止对话式智能体"
    }), `
`, _jsxs(_components.p, {
      children: ["当用户与智能体对话结束后，你可以调用", _jsx(_components.a, {
        href: "../operations/stop-agent.md",
        children: "停止对话式智能体"
      }), "，传入创建智能体时返回的 ", _jsx(_components.code, {
        children: "agent_id"
      }), " 让指定智能体离开 RTC 频道。"]
    }), `
`, _jsx(_components.h4, {
      id: "请求-1",
      children: "请求"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "// "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "highlight-start"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/cn/api/conversational-ai-agent/v2/projects/"
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
              children: "/agents/"
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
              children: "agenti"
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
              children: "/leave"
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
              children: ` 'Authorization: agora token="007abcxxxxxxx123"'`
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "// "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "highlight-end"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "响应-1",
      children: "响应"
    }), `
`, _jsx(_components.p, {
      children: "调用成功后，你会收到如下响应："
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
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "/// 200 OK"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "参考信息",
      children: "参考信息"
    }), `
`, _jsx(_components.h3, {
      id: "开发注意事项",
      children: "开发注意事项"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["目前仅支持使用中文和英文与 AI 智能体互动，其他语种需求", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn",
          children: "联系技术支持"
        }), "反馈。"]
      }), `
`, _jsxs(_components.li, {
        children: ["目前单一 App ID 调用服务端 API 的并发用户数 (Peak Concurrent Users) 限制为 20， 如需提升配额，请", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn",
          children: "联系技术支持"
        }), "申请。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-参考",
      children: "API 参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../operations/start-agent.md",
          children: "创建对话式智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../operations/stop-agent.md",
          children: "停止对话式智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../operations/agent-update.md",
          children: "更新智能体配置"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../operations/query-agent-status.md",
          children: "查询智能体状态"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../operations/get-agent-list.md",
          children: "获取智能体列表"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/response-code",
          children: "响应状态码"
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
