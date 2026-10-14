import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "检索会话历史",
  description: "在 webhook 历史事件、历史 API 和 turn 分析 API 之间选择合适的会话数据获取方式。"
};
export let _markdown = `

会话结束后，你通常会想回答下面几类问题：

* 用户和智能体分别说了什么
* 这次会话从什么时候开始，到什么时候结束
* 哪一轮对话最慢，或者没有正常完成

对话式 AI 引擎提供了不同的获取路径。

## 选择哪种方式 [#选择哪种方式]

| 目标             | 最适合的数据源    | 使用方式                                  |
| -------------- | ---------- | ------------------------------------- |
| 会话结束后自动收到历史    | webhook 事件 | \`103 agent history\`                   |
| 后端按需主动拉取历史     | REST API   | \`Retrieve agent history\`              |
| 分析每一轮的开始、结束和延迟 | REST API   | \`Query conversation turn information\` |

## 使用 \`103 agent history\` [#使用-103-agent-history]

当你希望平台在会话结束后自动把历史推送到服务端时，优先用 \`103 agent history\`。

它通常会包含：

* \`agent_id\`
* \`name\`
* \`channel\`
* \`start_ts\`
* \`stop_ts\`
* \`contents\`
* \`labels\`

这足以支撑大多数转写归档和会后审查场景。

## 使用历史 API [#使用历史-api]

如果你的后台管理系统、运营工具或客服系统需要按需拉取历史，使用 \`Retrieve agent history\` 更合适。

## 使用 turns API [#使用-turns-api]

如果你关心的是轮次耗时、完成状态和故障定位，而不是转写存档本身，优先使用 \`Query conversation turn information\`。

## 建议的存储方式 [#建议的存储方式]

当服务端收到历史后，建议：

1. 原样保存 webhook 原始载荷
2. 按 \`agent_id\`、\`channel\` 和 \`stop_ts\` 建索引
3. 保留 \`labels\` 以支持租户、活动和实验维度筛选
4. 在需要时把历史记录和 \`turns\` API 结果关联起来

## 继续阅读 [#继续阅读]

* [在服务端接收运行时事件](webhooks.mdx)
* [通知事件类型](../reference/event-types.mdx#103-agent-history)
* [多轮对话中的短期记忆](short-term-memory.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "会话结束后，你通常会想回答下面几类问题："
  }, {
    heading: undefined,
    content: "用户和智能体分别说了什么"
  }, {
    heading: undefined,
    content: "这次会话从什么时候开始，到什么时候结束"
  }, {
    heading: undefined,
    content: "哪一轮对话最慢，或者没有正常完成"
  }, {
    heading: undefined,
    content: "对话式 AI 引擎提供了不同的获取路径。"
  }, {
    heading: "选择哪种方式",
    content: "目标"
  }, {
    heading: "选择哪种方式",
    content: "最适合的数据源"
  }, {
    heading: "选择哪种方式",
    content: "使用方式"
  }, {
    heading: "选择哪种方式",
    content: "会话结束后自动收到历史"
  }, {
    heading: "选择哪种方式",
    content: "webhook 事件"
  }, {
    heading: "选择哪种方式",
    content: "`103 agent history`"
  }, {
    heading: "选择哪种方式",
    content: "后端按需主动拉取历史"
  }, {
    heading: "选择哪种方式",
    content: "REST API"
  }, {
    heading: "选择哪种方式",
    content: "`Retrieve agent history`"
  }, {
    heading: "选择哪种方式",
    content: "分析每一轮的开始、结束和延迟"
  }, {
    heading: "选择哪种方式",
    content: "REST API"
  }, {
    heading: "选择哪种方式",
    content: "`Query conversation turn information`"
  }, {
    heading: "使用-103-agent-history",
    content: "当你希望平台在会话结束后自动把历史推送到服务端时，优先用 `103 agent history`。"
  }, {
    heading: "使用-103-agent-history",
    content: "它通常会包含："
  }, {
    heading: "使用-103-agent-history",
    content: "`agent_id`"
  }, {
    heading: "使用-103-agent-history",
    content: "`name`"
  }, {
    heading: "使用-103-agent-history",
    content: "`channel`"
  }, {
    heading: "使用-103-agent-history",
    content: "`start_ts`"
  }, {
    heading: "使用-103-agent-history",
    content: "`stop_ts`"
  }, {
    heading: "使用-103-agent-history",
    content: "`contents`"
  }, {
    heading: "使用-103-agent-history",
    content: "`labels`"
  }, {
    heading: "使用-103-agent-history",
    content: "这足以支撑大多数转写归档和会后审查场景。"
  }, {
    heading: "使用历史-api",
    content: "如果你的后台管理系统、运营工具或客服系统需要按需拉取历史，使用 `Retrieve agent history` 更合适。"
  }, {
    heading: "使用-turns-api",
    content: "如果你关心的是轮次耗时、完成状态和故障定位，而不是转写存档本身，优先使用 `Query conversation turn information`。"
  }, {
    heading: "建议的存储方式",
    content: "当服务端收到历史后，建议："
  }, {
    heading: "建议的存储方式",
    content: "原样保存 webhook 原始载荷"
  }, {
    heading: "建议的存储方式",
    content: "按 `agent_id`、`channel` 和 `stop_ts` 建索引"
  }, {
    heading: "建议的存储方式",
    content: "保留 `labels` 以支持租户、活动和实验维度筛选"
  }, {
    heading: "建议的存储方式",
    content: "在需要时把历史记录和 `turns` API 结果关联起来"
  }, {
    heading: "继续阅读",
    content: "在服务端接收运行时事件"
  }, {
    heading: "继续阅读",
    content: "通知事件类型"
  }, {
    heading: "继续阅读",
    content: "多轮对话中的短期记忆"
  }],
  headings: [{
    id: "选择哪种方式",
    content: "选择哪种方式"
  }, {
    id: "使用-103-agent-history",
    content: "使用 `103 agent history`"
  }, {
    id: "使用历史-api",
    content: "使用历史 API"
  }, {
    id: "使用-turns-api",
    content: "使用 turns API"
  }, {
    id: "建议的存储方式",
    content: "建议的存储方式"
  }, {
    id: "继续阅读",
    content: "继续阅读"
  }]
};
export let toc = [{
  depth: 2,
  url: "#选择哪种方式",
  title: _jsx(_Fragment, {
    children: "选择哪种方式"
  })
}, {
  depth: 2,
  url: "#使用-103-agent-history",
  title: _jsxs(_Fragment, {
    children: ["使用 ", _jsx("code", {
      children: "103 agent history"
    })]
  })
}, {
  depth: 2,
  url: "#使用历史-api",
  title: _jsx(_Fragment, {
    children: "使用历史 API"
  })
}, {
  depth: 2,
  url: "#使用-turns-api",
  title: _jsx(_Fragment, {
    children: "使用 turns API"
  })
}, {
  depth: 2,
  url: "#建议的存储方式",
  title: _jsx(_Fragment, {
    children: "建议的存储方式"
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
      children: "会话结束后，你通常会想回答下面几类问题："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "用户和智能体分别说了什么"
      }), `
`, _jsx(_components.li, {
        children: "这次会话从什么时候开始，到什么时候结束"
      }), `
`, _jsx(_components.li, {
        children: "哪一轮对话最慢，或者没有正常完成"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "对话式 AI 引擎提供了不同的获取路径。"
    }), `
`, _jsx(_components.h2, {
      id: "选择哪种方式",
      children: "选择哪种方式"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "目标"
          }), _jsx(_components.th, {
            children: "最适合的数据源"
          }), _jsx(_components.th, {
            children: "使用方式"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "会话结束后自动收到历史"
          }), _jsx(_components.td, {
            children: "webhook 事件"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "103 agent history"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "后端按需主动拉取历史"
          }), _jsx(_components.td, {
            children: "REST API"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Retrieve agent history"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "分析每一轮的开始、结束和延迟"
          }), _jsx(_components.td, {
            children: "REST API"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Query conversation turn information"
            })
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h2, {
      id: "使用-103-agent-history",
      children: ["使用 ", _jsx(_components.code, {
        children: "103 agent history"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["当你希望平台在会话结束后自动把历史推送到服务端时，优先用 ", _jsx(_components.code, {
        children: "103 agent history"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "它通常会包含："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "agent_id"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "name"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "channel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "start_ts"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "stop_ts"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "contents"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "labels"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "这足以支撑大多数转写归档和会后审查场景。"
    }), `
`, _jsx(_components.h2, {
      id: "使用历史-api",
      children: "使用历史 API"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你的后台管理系统、运营工具或客服系统需要按需拉取历史，使用 ", _jsx(_components.code, {
        children: "Retrieve agent history"
      }), " 更合适。"]
    }), `
`, _jsx(_components.h2, {
      id: "使用-turns-api",
      children: "使用 turns API"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你关心的是轮次耗时、完成状态和故障定位，而不是转写存档本身，优先使用 ", _jsx(_components.code, {
        children: "Query conversation turn information"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "建议的存储方式",
      children: "建议的存储方式"
    }), `
`, _jsx(_components.p, {
      children: "当服务端收到历史后，建议："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "原样保存 webhook 原始载荷"
      }), `
`, _jsxs(_components.li, {
        children: ["按 ", _jsx(_components.code, {
          children: "agent_id"
        }), "、", _jsx(_components.code, {
          children: "channel"
        }), " 和 ", _jsx(_components.code, {
          children: "stop_ts"
        }), " 建索引"]
      }), `
`, _jsxs(_components.li, {
        children: ["保留 ", _jsx(_components.code, {
          children: "labels"
        }), " 以支持租户、活动和实验维度筛选"]
      }), `
`, _jsxs(_components.li, {
        children: ["在需要时把历史记录和 ", _jsx(_components.code, {
          children: "turns"
        }), " API 结果关联起来"]
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
          href: "webhooks.mdx",
          children: "在服务端接收运行时事件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../reference/event-types.mdx#103-agent-history",
          children: "通知事件类型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "short-term-memory.mdx",
          children: "多轮对话中的短期记忆"
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
