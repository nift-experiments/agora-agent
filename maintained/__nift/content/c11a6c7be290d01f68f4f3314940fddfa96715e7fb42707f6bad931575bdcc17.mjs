import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "获取运行时事件",
  description: "在客户端回调和服务端 webhook 之间选择合适的运行时事件接收方式。"
};
export let _markdown = `

当你要理解一个 voice agent 在运行中发生了什么时，通常会在两类信号之间选择：

* **客户端组件回调**：适合驱动即时 UI 和本地交互
* **服务端 webhook**：适合做监控、告警、归档和会后分析

## 如何选择 [#如何选择]

| 目标           | 优先方式                | 说明         |
| ------------ | ------------------- | ---------- |
| 让 App 实时展示状态 | 客户端组件回调             | 用于即时更新 UI  |
| 在服务端保存生命周期记录 | webhook             | 用于归档、监控和追溯 |
| 排查会后问题       | webhook + turns API | 用于做完整时间线分析 |
| 实时感知延迟、错误    | 客户端回调               | 用于即时反馈给用户  |

## 客户端路径 [#客户端路径]

如果你需要在应用内即时响应事件，优先使用客户端组件回调，例如：

* \`onAgentStateChanged\`
* \`onAgentError\`
* \`onAgentMetrics\`
* \`onTranscriptUpdated\`

对应阅读：

* [监控智能体运行状态](monitor-agent-runtime.mdx)
* [显示实时转写](transcripts.md)

## 服务端路径 [#服务端路径]

如果你需要在服务端收到持久化的事件通知，优先配置 webhook：

* \`101 agent joined\`
* \`102 agent left\`
* \`103 agent history\`
* \`110 agent error\`
* \`111 agent metrics\`

对应阅读：

* [在服务端接收运行时事件](webhooks.mdx)
* [通知事件类型](../reference/event-types.mdx)

## 推荐做法 [#推荐做法]

在生产环境里，通常不要二选一，而是分层使用：

* 客户端负责**即时交互**
* 服务端负责**可追溯记录**

## 相关页面 [#相关页面]

* [监控智能体运行状态](monitor-agent-runtime.mdx)
* [调试智能体故障](debug-agent-failures.mdx)
* [在服务端接收运行时事件](webhooks.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "当你要理解一个 voice agent 在运行中发生了什么时，通常会在两类信号之间选择："
  }, {
    heading: undefined,
    content: "**客户端组件回调**：适合驱动即时 UI 和本地交互"
  }, {
    heading: undefined,
    content: "**服务端 webhook**：适合做监控、告警、归档和会后分析"
  }, {
    heading: "如何选择",
    content: "目标"
  }, {
    heading: "如何选择",
    content: "优先方式"
  }, {
    heading: "如何选择",
    content: "说明"
  }, {
    heading: "如何选择",
    content: "让 App 实时展示状态"
  }, {
    heading: "如何选择",
    content: "客户端组件回调"
  }, {
    heading: "如何选择",
    content: "用于即时更新 UI"
  }, {
    heading: "如何选择",
    content: "在服务端保存生命周期记录"
  }, {
    heading: "如何选择",
    content: "webhook"
  }, {
    heading: "如何选择",
    content: "用于归档、监控和追溯"
  }, {
    heading: "如何选择",
    content: "排查会后问题"
  }, {
    heading: "如何选择",
    content: "webhook + turns API"
  }, {
    heading: "如何选择",
    content: "用于做完整时间线分析"
  }, {
    heading: "如何选择",
    content: "实时感知延迟、错误"
  }, {
    heading: "如何选择",
    content: "客户端回调"
  }, {
    heading: "如何选择",
    content: "用于即时反馈给用户"
  }, {
    heading: "客户端路径",
    content: "如果你需要在应用内即时响应事件，优先使用客户端组件回调，例如："
  }, {
    heading: "客户端路径",
    content: "`onAgentStateChanged`"
  }, {
    heading: "客户端路径",
    content: "`onAgentError`"
  }, {
    heading: "客户端路径",
    content: "`onAgentMetrics`"
  }, {
    heading: "客户端路径",
    content: "`onTranscriptUpdated`"
  }, {
    heading: "客户端路径",
    content: "对应阅读："
  }, {
    heading: "客户端路径",
    content: "监控智能体运行状态"
  }, {
    heading: "客户端路径",
    content: "显示实时转写"
  }, {
    heading: "服务端路径",
    content: "如果你需要在服务端收到持久化的事件通知，优先配置 webhook："
  }, {
    heading: "服务端路径",
    content: "`101 agent joined`"
  }, {
    heading: "服务端路径",
    content: "`102 agent left`"
  }, {
    heading: "服务端路径",
    content: "`103 agent history`"
  }, {
    heading: "服务端路径",
    content: "`110 agent error`"
  }, {
    heading: "服务端路径",
    content: "`111 agent metrics`"
  }, {
    heading: "服务端路径",
    content: "对应阅读："
  }, {
    heading: "服务端路径",
    content: "在服务端接收运行时事件"
  }, {
    heading: "服务端路径",
    content: "通知事件类型"
  }, {
    heading: "推荐做法",
    content: "在生产环境里，通常不要二选一，而是分层使用："
  }, {
    heading: "推荐做法",
    content: "客户端负责**即时交互**"
  }, {
    heading: "推荐做法",
    content: "服务端负责**可追溯记录**"
  }, {
    heading: "相关页面",
    content: "监控智能体运行状态"
  }, {
    heading: "相关页面",
    content: "调试智能体故障"
  }, {
    heading: "相关页面",
    content: "在服务端接收运行时事件"
  }],
  headings: [{
    id: "如何选择",
    content: "如何选择"
  }, {
    id: "客户端路径",
    content: "客户端路径"
  }, {
    id: "服务端路径",
    content: "服务端路径"
  }, {
    id: "推荐做法",
    content: "推荐做法"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#如何选择",
  title: _jsx(_Fragment, {
    children: "如何选择"
  })
}, {
  depth: 2,
  url: "#客户端路径",
  title: _jsx(_Fragment, {
    children: "客户端路径"
  })
}, {
  depth: 2,
  url: "#服务端路径",
  title: _jsx(_Fragment, {
    children: "服务端路径"
  })
}, {
  depth: 2,
  url: "#推荐做法",
  title: _jsx(_Fragment, {
    children: "推荐做法"
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
    strong: "strong",
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
      children: "当你要理解一个 voice agent 在运行中发生了什么时，通常会在两类信号之间选择："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "客户端组件回调"
        }), "：适合驱动即时 UI 和本地交互"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "服务端 webhook"
        }), "：适合做监控、告警、归档和会后分析"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "如何选择",
      children: "如何选择"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "目标"
          }), _jsx(_components.th, {
            children: "优先方式"
          }), _jsx(_components.th, {
            children: "说明"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "让 App 实时展示状态"
          }), _jsx(_components.td, {
            children: "客户端组件回调"
          }), _jsx(_components.td, {
            children: "用于即时更新 UI"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "在服务端保存生命周期记录"
          }), _jsx(_components.td, {
            children: "webhook"
          }), _jsx(_components.td, {
            children: "用于归档、监控和追溯"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "排查会后问题"
          }), _jsx(_components.td, {
            children: "webhook + turns API"
          }), _jsx(_components.td, {
            children: "用于做完整时间线分析"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "实时感知延迟、错误"
          }), _jsx(_components.td, {
            children: "客户端回调"
          }), _jsx(_components.td, {
            children: "用于即时反馈给用户"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "客户端路径",
      children: "客户端路径"
    }), `
`, _jsx(_components.p, {
      children: "如果你需要在应用内即时响应事件，优先使用客户端组件回调，例如："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "onAgentStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "onAgentError"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "onAgentMetrics"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "onTranscriptUpdated"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "对应阅读："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "monitor-agent-runtime.mdx",
          children: "监控智能体运行状态"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "transcripts.md",
          children: "显示实时转写"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "服务端路径",
      children: "服务端路径"
    }), `
`, _jsx(_components.p, {
      children: "如果你需要在服务端收到持久化的事件通知，优先配置 webhook："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "101 agent joined"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "102 agent left"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "103 agent history"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "110 agent error"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "111 agent metrics"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "对应阅读："
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
          href: "../reference/event-types.mdx",
          children: "通知事件类型"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐做法",
      children: "推荐做法"
    }), `
`, _jsx(_components.p, {
      children: "在生产环境里，通常不要二选一，而是分层使用："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["客户端负责", _jsx(_components.strong, {
          children: "即时交互"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["服务端负责", _jsx(_components.strong, {
          children: "可追溯记录"
        })]
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
          href: "monitor-agent-runtime.mdx",
          children: "监控智能体运行状态"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "debug-agent-failures.mdx",
          children: "调试智能体故障"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "webhooks.mdx",
          children: "在服务端接收运行时事件"
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
