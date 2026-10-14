import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "传递自定义信息",
  description: "与智能体对话时，你可能需要从端侧获取用户的说话状态、选中的文字、个性签名、得分等自定义上下文信息，并将这些信息传递给智能体，引导智能体输出更符合用户需求的内容。"
};
export let _markdown = `

与智能体对话时，你可能需要从端侧获取用户的说话状态、选中的文字、个性签名、得分等自定义上下文信息，并将这些信息传递给智能体，引导智能体输出更符合用户需求的内容。

本文介绍如何结合 RTM SDK 提供的能力，实现与智能体对话时携带自定义信息。

## 技术原理 [#技术原理]

[声网实时消息 RTM SDK](https://doc.shengwang.cn/doc/rtm2/homepage#sdk-下载) 支持为频道中的用户设置自定义的临时状态信息，并以事件通知的方式通知频道中其他的在线用户。如果你的 App 同时集成了声网实时互动 RTC 和实时消息 RTM 服务，就可以在创建智能体时开启 RTM 功能，让智能体在调用大模型前，从 RTM 频道中获取临时状态信息，并将其作为上下文信息传递给大模型，引导智能体输出更符合用户需求的内容。

## 前提条件 [#前提条件]

开始前，请确保你已经：

* 已参考[实现对话式智能体](./quick-start)实现了与 AI 智能体对话互动的基本逻辑。
* 已参考[实现收发消息](https://doc.shengwang.cn/doc/rtm2/android/get-started/quick-start)为你的 App 集成 RTM SDK，并实现基本的收发消息功能。
* 已参考[自定义大模型](./custom-llm.md)对你的大模型进行适配，使其能够处理 \`context.presence\` 字段中的临时状态信息。

## 实现方式 [#实现方式]

### 打开 RTM 开关 [#打开-rtm-开关]

调用 [POST 创建对话式智能体](../operations/start-agent.md)时，将 \`advanced_features.enable_rtm\` 配置设置为 \`true\` 即可启用 RTM，并设置 \`llm.vendor\` 为 \`"custom"\` 以启用自定义大模型。以下为请求示例：

> 信息
>
> * 声网推荐启动 RTM 时开启 String UID（\`enable_string_uid\` 配置为 \`true\`），并参考 [FAQ](https://doc.shengwang.cn/faq/integration-issues/generate-token) 生成同时具备 RTC 和 RTM 权限的 Token，之后传入 \`agent_rtc_uid\` 字段即可。
> * 同一频道内，Int 型和 String 型的用户 ID 不可混用。更多使用 String UID 的相关信息请参考[如何使用 String 型用户 ID](https://doc.shengwang.cn/faq/integration-issues/string-uid)。

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
    "agent_rtc_uid": "friday",
    // highlight-start
    "advanced_features": {
      "enable_rtm": true
    },
    // highlight-end
    "remote_rtc_uids": [
      "*"
    ],
    "enable_string_uid": true,
    "llm": {
      "url": "https://api.xxxx/v1/xxxx",
      "api_key": "xxx",
      "vendor": "custom",
      "params": {
        "model": "xxxx",
      }
    },
    "tts": {
      "vendor": "vendor_name",
      "params": {
        "key": "xxxx",
        "voice_id": "xxxx",
      }
    }
  }
}
'

\`\`\`

### 设置自定义信息 [#设置自定义信息]

参考[临时用户状态](https://doc.shengwang.cn/doc/rtm2/android/user-guide/presence/temporary-user-state)文档，为频道中的用户设置临时状态信息。

### 传递自定义信息 [#传递自定义信息]

智能体在调用大模型前，会自动获取说话用户的临时状态信息，并将其作为上下文信息传递给大模型。该临时状态信息会被设置到 \`context.presence\` 字段中。

以下示例的场景为用户 UserA 在 App 中选中了文字“勾股定理”，并向智能体提问“这是什么意思？”。示例 JSON 展示了智能体在调用大模型时，从 RTM 获取了 UserA 的一个名为 \`selection\` 的临时状态信息，请求的数据结构如下：

\`\`\`json
{
  "messages": [
    {
      "role": "user",
      "content": "这是什么意思"
    }
  ],
  "context": {
    "presence": {
      "userA": {
        "selection": "勾股定理"
      }
    }
  },
  "model": "deepseek-r1"
}
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "与智能体对话时，你可能需要从端侧获取用户的说话状态、选中的文字、个性签名、得分等自定义上下文信息，并将这些信息传递给智能体，引导智能体输出更符合用户需求的内容。"
  }, {
    heading: undefined,
    content: "本文介绍如何结合 RTM SDK 提供的能力，实现与智能体对话时携带自定义信息。"
  }, {
    heading: "技术原理",
    content: "声网实时消息 RTM SDK 支持为频道中的用户设置自定义的临时状态信息，并以事件通知的方式通知频道中其他的在线用户。如果你的 App 同时集成了声网实时互动 RTC 和实时消息 RTM 服务，就可以在创建智能体时开启 RTM 功能，让智能体在调用大模型前，从 RTM 频道中获取临时状态信息，并将其作为上下文信息传递给大模型，引导智能体输出更符合用户需求的内容。"
  }, {
    heading: "前提条件",
    content: "开始前，请确保你已经："
  }, {
    heading: "前提条件",
    content: "已参考实现对话式智能体实现了与 AI 智能体对话互动的基本逻辑。"
  }, {
    heading: "前提条件",
    content: "已参考实现收发消息为你的 App 集成 RTM SDK，并实现基本的收发消息功能。"
  }, {
    heading: "前提条件",
    content: "已参考自定义大模型对你的大模型进行适配，使其能够处理 `context.presence` 字段中的临时状态信息。"
  }, {
    heading: "打开-rtm-开关",
    content: '调用 POST 创建对话式智能体时，将 `advanced_features.enable_rtm` 配置设置为 `true` 即可启用 RTM，并设置 `llm.vendor` 为 `"custom"` 以启用自定义大模型。以下为请求示例：'
  }, {
    heading: "打开-rtm-开关",
    content: "> 信息\n>\n> * 声网推荐启动 RTM 时开启 String UID（`enable_string_uid` 配置为 `true`），并参考 FAQ 生成同时具备 RTC 和 RTM 权限的 Token，之后传入 `agent_rtc_uid` 字段即可。\n> * 同一频道内，Int 型和 String 型的用户 ID 不可混用。更多使用 String UID 的相关信息请参考如何使用 String 型用户 ID。"
  }, {
    heading: "设置自定义信息",
    content: "参考临时用户状态文档，为频道中的用户设置临时状态信息。"
  }, {
    heading: "传递自定义信息",
    content: "智能体在调用大模型前，会自动获取说话用户的临时状态信息，并将其作为上下文信息传递给大模型。该临时状态信息会被设置到 `context.presence` 字段中。"
  }, {
    heading: "传递自定义信息",
    content: "以下示例的场景为用户 UserA 在 App 中选中了文字“勾股定理”，并向智能体提问“这是什么意思？”。示例 JSON 展示了智能体在调用大模型时，从 RTM 获取了 UserA 的一个名为 `selection` 的临时状态信息，请求的数据结构如下："
  }],
  headings: [{
    id: "技术原理",
    content: "技术原理"
  }, {
    id: "前提条件",
    content: "前提条件"
  }, {
    id: "实现方式",
    content: "实现方式"
  }, {
    id: "打开-rtm-开关",
    content: "打开 RTM 开关"
  }, {
    id: "设置自定义信息",
    content: "设置自定义信息"
  }, {
    id: "传递自定义信息",
    content: "传递自定义信息"
  }]
};
export let toc = [{
  depth: 2,
  url: "#技术原理",
  title: _jsx(_Fragment, {
    children: "技术原理"
  })
}, {
  depth: 2,
  url: "#前提条件",
  title: _jsx(_Fragment, {
    children: "前提条件"
  })
}, {
  depth: 2,
  url: "#实现方式",
  title: _jsx(_Fragment, {
    children: "实现方式"
  })
}, {
  depth: 3,
  url: "#打开-rtm-开关",
  title: _jsx(_Fragment, {
    children: "打开 RTM 开关"
  })
}, {
  depth: 3,
  url: "#设置自定义信息",
  title: _jsx(_Fragment, {
    children: "设置自定义信息"
  })
}, {
  depth: 3,
  url: "#传递自定义信息",
  title: _jsx(_Fragment, {
    children: "传递自定义信息"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
    children: [_jsx(_components.p, {
      children: "与智能体对话时，你可能需要从端侧获取用户的说话状态、选中的文字、个性签名、得分等自定义上下文信息，并将这些信息传递给智能体，引导智能体输出更符合用户需求的内容。"
    }), `
`, _jsx(_components.p, {
      children: "本文介绍如何结合 RTM SDK 提供的能力，实现与智能体对话时携带自定义信息。"
    }), `
`, _jsx(_components.h2, {
      id: "技术原理",
      children: "技术原理"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtm2/homepage#sdk-%E4%B8%8B%E8%BD%BD",
        children: "声网实时消息 RTM SDK"
      }), " 支持为频道中的用户设置自定义的临时状态信息，并以事件通知的方式通知频道中其他的在线用户。如果你的 App 同时集成了声网实时互动 RTC 和实时消息 RTM 服务，就可以在创建智能体时开启 RTM 功能，让智能体在调用大模型前，从 RTM 频道中获取临时状态信息，并将其作为上下文信息传递给大模型，引导智能体输出更符合用户需求的内容。"]
    }), `
`, _jsx(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), `
`, _jsx(_components.p, {
      children: "开始前，请确保你已经："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已参考", _jsx(_components.a, {
          href: "./quick-start",
          children: "实现对话式智能体"
        }), "实现了与 AI 智能体对话互动的基本逻辑。"]
      }), `
`, _jsxs(_components.li, {
        children: ["已参考", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtm2/android/get-started/quick-start",
          children: "实现收发消息"
        }), "为你的 App 集成 RTM SDK，并实现基本的收发消息功能。"]
      }), `
`, _jsxs(_components.li, {
        children: ["已参考", _jsx(_components.a, {
          href: "./custom-llm.md",
          children: "自定义大模型"
        }), "对你的大模型进行适配，使其能够处理 ", _jsx(_components.code, {
          children: "context.presence"
        }), " 字段中的临时状态信息。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "实现方式",
      children: "实现方式"
    }), `
`, _jsx(_components.h3, {
      id: "打开-rtm-开关",
      children: "打开 RTM 开关"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "../operations/start-agent.md",
        children: "POST 创建对话式智能体"
      }), "时，将 ", _jsx(_components.code, {
        children: "advanced_features.enable_rtm"
      }), " 配置设置为 ", _jsx(_components.code, {
        children: "true"
      }), " 即可启用 RTM，并设置 ", _jsx(_components.code, {
        children: "llm.vendor"
      }), " 为 ", _jsx(_components.code, {
        children: '"custom"'
      }), " 以启用自定义大模型。以下为请求示例："]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: "信息"
      }), `
`, _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["声网推荐启动 RTM 时开启 String UID（", _jsx(_components.code, {
            children: "enable_string_uid"
          }), " 配置为 ", _jsx(_components.code, {
            children: "true"
          }), "），并参考 ", _jsx(_components.a, {
            href: "https://doc.shengwang.cn/faq/integration-issues/generate-token",
            children: "FAQ"
          }), " 生成同时具备 RTC 和 RTM 权限的 Token，之后传入 ", _jsx(_components.code, {
            children: "agent_rtc_uid"
          }), " 字段即可。"]
        }), `
`, _jsxs(_components.li, {
          children: ["同一频道内，Int 型和 String 型的用户 ID 不可混用。更多使用 String UID 的相关信息请参考", _jsx(_components.a, {
            href: "https://doc.shengwang.cn/faq/integration-issues/string-uid",
            children: "如何使用 String 型用户 ID"
          }), "。"]
        }), `
`]
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
              children: '    "agent_rtc_uid": "friday",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    // highlight-start"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "advanced_features": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "enable_rtm": true'
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
              children: "    // highlight-end"
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
              children: '      "*"'
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
              children: '    "enable_string_uid": true,'
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
              children: '      "vendor": "custom",'
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
              children: '      "vendor": "vendor_name",'
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
              children: '        "key": "xxxx",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "voice_id": "xxxx",'
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
          }), `
`, _jsx(_components.span, {
            className: "line"
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "设置自定义信息",
      children: "设置自定义信息"
    }), `
`, _jsxs(_components.p, {
      children: ["参考", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtm2/android/user-guide/presence/temporary-user-state",
        children: "临时用户状态"
      }), "文档，为频道中的用户设置临时状态信息。"]
    }), `
`, _jsx(_components.h3, {
      id: "传递自定义信息",
      children: "传递自定义信息"
    }), `
`, _jsxs(_components.p, {
      children: ["智能体在调用大模型前，会自动获取说话用户的临时状态信息，并将其作为上下文信息传递给大模型。该临时状态信息会被设置到 ", _jsx(_components.code, {
        children: "context.presence"
      }), " 字段中。"]
    }), `
`, _jsxs(_components.p, {
      children: ["以下示例的场景为用户 UserA 在 App 中选中了文字“勾股定理”，并向智能体提问“这是什么意思？”。示例 JSON 展示了智能体在调用大模型时，从 RTM 获取了 UserA 的一个名为 ", _jsx(_components.code, {
        children: "selection"
      }), " 的临时状态信息，请求的数据结构如下："]
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
              children: '  "messages"'
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
              children: '"user"'
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
              children: '"这是什么意思"'
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
              children: '  "context"'
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
              children: '    "presence"'
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
              children: '      "userA"'
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
              children: '        "selection"'
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
              children: '"勾股定理"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
            })
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
              children: '  "model"'
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
              children: '"deepseek-r1"'
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
