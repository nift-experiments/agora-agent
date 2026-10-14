import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "在服务端接收智能体运行时事件",
  description: "使用 webhook 在后端接收智能体生命周期、错误、历史和性能事件。"
};
export let _markdown = `

Webhook 是一种由用户定义的 HTTPS 回调能力。对话式 AI 事件发生时，声网会向你的服务端发起 POST 请求，让后端及时收到生命周期、历史、错误和性能数据。

如果你想先了解“客户端回调”和“webhook”之间的分工，请先看[获取运行时事件](get-runtime-events.mdx)。

## 适用场景 [#适用场景]

Webhook 更适合：

* 记录智能体加入和离开频道
* 在会话结束后接收历史数据
* 持久化错误和性能指标
* 进行监控、告警和会后分析

## 开通前提 [#开通前提]

* 拥有 Agora 账号和有效项目
* 已为项目开通对话式 AI
* 拥有可公网访问的 HTTPS 回调地址
* 服务端可以安全保存 webhook secret，并完成签名校验

## 配置步骤 [#配置步骤]

1. 登录 [Agora Console](https://console.agora.io)
2. 找到目标项目
3. 打开项目的通知配置区域
4. 勾选需要订阅的对话式 AI 事件
5. 配置你的 HTTPS 回调地址
6. 保存生成的 Secret
7. 运行健康检查，确认服务端返回 \`200 OK\`

## 常见事件类型 [#常见事件类型]

| eventType | 说明         |
| --------- | ---------- |
| \`101\`     | 智能体加入频道    |
| \`102\`     | 智能体离开频道    |
| \`103\`     | 用户和智能体会话历史 |
| \`110\`     | 智能体错误      |
| \`111\`     | 智能体性能指标    |

更详细的 payload 字段说明见[通知事件类型](../reference/event-types.mdx)。

## 签名校验 [#签名校验]

声网会在回调请求头里附带签名字段，例如：

* \`Agora-Signature\`
* \`Agora-Signature-V2\`

服务端收到回调后，应基于原始请求体和保存的 secret 做 HMAC 校验，只接受通过校验的请求。

## 实践建议 [#实践建议]

* 只使用 HTTPS
* 让服务端尽快返回 \`200 OK\`，把重处理逻辑放到异步任务里
* 设计幂等处理，因为 webhook 可能重试
* 在排障阶段保留原始 payload，方便复盘

## 相关页面 [#相关页面]

* [获取运行时事件](get-runtime-events.mdx)
* [监控智能体运行状态](monitor-agent-runtime.mdx)
* [通知事件类型](../reference/event-types.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Webhook 是一种由用户定义的 HTTPS 回调能力。对话式 AI 事件发生时，声网会向你的服务端发起 POST 请求，让后端及时收到生命周期、历史、错误和性能数据。"
  }, {
    heading: undefined,
    content: "如果你想先了解“客户端回调”和“webhook”之间的分工，请先看获取运行时事件。"
  }, {
    heading: "适用场景",
    content: "Webhook 更适合："
  }, {
    heading: "适用场景",
    content: "记录智能体加入和离开频道"
  }, {
    heading: "适用场景",
    content: "在会话结束后接收历史数据"
  }, {
    heading: "适用场景",
    content: "持久化错误和性能指标"
  }, {
    heading: "适用场景",
    content: "进行监控、告警和会后分析"
  }, {
    heading: "开通前提",
    content: "拥有 Agora 账号和有效项目"
  }, {
    heading: "开通前提",
    content: "已为项目开通对话式 AI"
  }, {
    heading: "开通前提",
    content: "拥有可公网访问的 HTTPS 回调地址"
  }, {
    heading: "开通前提",
    content: "服务端可以安全保存 webhook secret，并完成签名校验"
  }, {
    heading: "配置步骤",
    content: "登录 Agora Console"
  }, {
    heading: "配置步骤",
    content: "找到目标项目"
  }, {
    heading: "配置步骤",
    content: "打开项目的通知配置区域"
  }, {
    heading: "配置步骤",
    content: "勾选需要订阅的对话式 AI 事件"
  }, {
    heading: "配置步骤",
    content: "配置你的 HTTPS 回调地址"
  }, {
    heading: "配置步骤",
    content: "保存生成的 Secret"
  }, {
    heading: "配置步骤",
    content: "运行健康检查，确认服务端返回 `200 OK`"
  }, {
    heading: "常见事件类型",
    content: "eventType"
  }, {
    heading: "常见事件类型",
    content: "说明"
  }, {
    heading: "常见事件类型",
    content: "`101`"
  }, {
    heading: "常见事件类型",
    content: "智能体加入频道"
  }, {
    heading: "常见事件类型",
    content: "`102`"
  }, {
    heading: "常见事件类型",
    content: "智能体离开频道"
  }, {
    heading: "常见事件类型",
    content: "`103`"
  }, {
    heading: "常见事件类型",
    content: "用户和智能体会话历史"
  }, {
    heading: "常见事件类型",
    content: "`110`"
  }, {
    heading: "常见事件类型",
    content: "智能体错误"
  }, {
    heading: "常见事件类型",
    content: "`111`"
  }, {
    heading: "常见事件类型",
    content: "智能体性能指标"
  }, {
    heading: "常见事件类型",
    content: "更详细的 payload 字段说明见通知事件类型。"
  }, {
    heading: "签名校验",
    content: "声网会在回调请求头里附带签名字段，例如："
  }, {
    heading: "签名校验",
    content: "`Agora-Signature`"
  }, {
    heading: "签名校验",
    content: "`Agora-Signature-V2`"
  }, {
    heading: "签名校验",
    content: "服务端收到回调后，应基于原始请求体和保存的 secret 做 HMAC 校验，只接受通过校验的请求。"
  }, {
    heading: "实践建议",
    content: "只使用 HTTPS"
  }, {
    heading: "实践建议",
    content: "让服务端尽快返回 `200 OK`，把重处理逻辑放到异步任务里"
  }, {
    heading: "实践建议",
    content: "设计幂等处理，因为 webhook 可能重试"
  }, {
    heading: "实践建议",
    content: "在排障阶段保留原始 payload，方便复盘"
  }, {
    heading: "相关页面",
    content: "获取运行时事件"
  }, {
    heading: "相关页面",
    content: "监控智能体运行状态"
  }, {
    heading: "相关页面",
    content: "通知事件类型"
  }],
  headings: [{
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "开通前提",
    content: "开通前提"
  }, {
    id: "配置步骤",
    content: "配置步骤"
  }, {
    id: "常见事件类型",
    content: "常见事件类型"
  }, {
    id: "签名校验",
    content: "签名校验"
  }, {
    id: "实践建议",
    content: "实践建议"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 2,
  url: "#开通前提",
  title: _jsx(_Fragment, {
    children: "开通前提"
  })
}, {
  depth: 2,
  url: "#配置步骤",
  title: _jsx(_Fragment, {
    children: "配置步骤"
  })
}, {
  depth: 2,
  url: "#常见事件类型",
  title: _jsx(_Fragment, {
    children: "常见事件类型"
  })
}, {
  depth: 2,
  url: "#签名校验",
  title: _jsx(_Fragment, {
    children: "签名校验"
  })
}, {
  depth: 2,
  url: "#实践建议",
  title: _jsx(_Fragment, {
    children: "实践建议"
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
    ol: "ol",
    p: "p",
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
      children: "Webhook 是一种由用户定义的 HTTPS 回调能力。对话式 AI 事件发生时，声网会向你的服务端发起 POST 请求，让后端及时收到生命周期、历史、错误和性能数据。"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你想先了解“客户端回调”和“webhook”之间的分工，请先看", _jsx(_components.a, {
        href: "get-runtime-events.mdx",
        children: "获取运行时事件"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "Webhook 更适合："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "记录智能体加入和离开频道"
      }), `
`, _jsx(_components.li, {
        children: "在会话结束后接收历史数据"
      }), `
`, _jsx(_components.li, {
        children: "持久化错误和性能指标"
      }), `
`, _jsx(_components.li, {
        children: "进行监控、告警和会后分析"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "开通前提",
      children: "开通前提"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "拥有 Agora 账号和有效项目"
      }), `
`, _jsx(_components.li, {
        children: "已为项目开通对话式 AI"
      }), `
`, _jsx(_components.li, {
        children: "拥有可公网访问的 HTTPS 回调地址"
      }), `
`, _jsx(_components.li, {
        children: "服务端可以安全保存 webhook secret，并完成签名校验"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "配置步骤",
      children: "配置步骤"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["登录 ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        })]
      }), `
`, _jsx(_components.li, {
        children: "找到目标项目"
      }), `
`, _jsx(_components.li, {
        children: "打开项目的通知配置区域"
      }), `
`, _jsx(_components.li, {
        children: "勾选需要订阅的对话式 AI 事件"
      }), `
`, _jsx(_components.li, {
        children: "配置你的 HTTPS 回调地址"
      }), `
`, _jsx(_components.li, {
        children: "保存生成的 Secret"
      }), `
`, _jsxs(_components.li, {
        children: ["运行健康检查，确认服务端返回 ", _jsx(_components.code, {
          children: "200 OK"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "常见事件类型",
      children: "常见事件类型"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "eventType"
          }), _jsx(_components.th, {
            children: "说明"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "101"
            })
          }), _jsx(_components.td, {
            children: "智能体加入频道"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "102"
            })
          }), _jsx(_components.td, {
            children: "智能体离开频道"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "103"
            })
          }), _jsx(_components.td, {
            children: "用户和智能体会话历史"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "110"
            })
          }), _jsx(_components.td, {
            children: "智能体错误"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "111"
            })
          }), _jsx(_components.td, {
            children: "智能体性能指标"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["更详细的 payload 字段说明见", _jsx(_components.a, {
        href: "../reference/event-types.mdx",
        children: "通知事件类型"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "签名校验",
      children: "签名校验"
    }), `
`, _jsx(_components.p, {
      children: "声网会在回调请求头里附带签名字段，例如："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "Agora-Signature"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "Agora-Signature-V2"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "服务端收到回调后，应基于原始请求体和保存的 secret 做 HMAC 校验，只接受通过校验的请求。"
    }), `
`, _jsx(_components.h2, {
      id: "实践建议",
      children: "实践建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "只使用 HTTPS"
      }), `
`, _jsxs(_components.li, {
        children: ["让服务端尽快返回 ", _jsx(_components.code, {
          children: "200 OK"
        }), "，把重处理逻辑放到异步任务里"]
      }), `
`, _jsx(_components.li, {
        children: "设计幂等处理，因为 webhook 可能重试"
      }), `
`, _jsx(_components.li, {
        children: "在排障阶段保留原始 payload，方便复盘"
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
          href: "get-runtime-events.mdx",
          children: "获取运行时事件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "monitor-agent-runtime.mdx",
          children: "监控智能体运行状态"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../reference/event-types.mdx",
          children: "通知事件类型"
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
