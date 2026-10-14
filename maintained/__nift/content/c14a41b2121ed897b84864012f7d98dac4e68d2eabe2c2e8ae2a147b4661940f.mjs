import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "监控智能体运行状态",
  description: "结合客户端回调、webhook 和 turn 级数据，跟踪智能体状态、错误和性能。"
};
export let _markdown = `

运行时监控的目标不是只知道“智能体有没有启动”，而是要持续回答这些问题：

* 智能体当前处于聆听、思考还是说话
* 是否发生模块级错误
* 哪一段链路变慢了
* 会话结束方式是否异常

## 监控信号来源 [#监控信号来源]

### 客户端组件 [#客户端组件]

适合驱动实时 UI 和会话内体验：

* \`onAgentStateChanged\`
* \`onAgentError\`
* \`onAgentMetrics\`
* 细粒度状态回调，如 listening / thinking / speaking

### webhook [#webhook]

适合做服务端持续监控：

* [\`101 agent joined\`](../reference/event-types.mdx#101-agent-joined)
* [\`102 agent left\`](../reference/event-types.mdx#102-agent-left)
* [\`110 agent error\`](../reference/event-types.mdx#110-agent-error)
* [\`111 agent metrics\`](../reference/event-types.mdx#111-agent-metrics)

## 推荐监控视角 [#推荐监控视角]

* **状态**：智能体是否按预期进入会话、退出会话
* **错误**：错误属于 LLM、TTS、网络还是业务服务
* **性能**：ASR、LLM、TTS 哪一段变慢
* **历史**：出现异常前后用户和智能体分别说了什么

## 建议保留的维度 [#建议保留的维度]

* \`agent_id\`
* \`channel\`
* \`name\`
* \`labels\`
* \`turn_id\`
* \`start_ts\` / \`stop_ts\`

这些字段有助于把客户端、webhook 和 turns API 串成一条完整时间线。

## 继续阅读 [#继续阅读]

* [获取运行时事件](get-runtime-events.mdx)
* [调试智能体故障](debug-agent-failures.mdx)
* [检索会话历史](retrieve-session-history.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "运行时监控的目标不是只知道“智能体有没有启动”，而是要持续回答这些问题："
  }, {
    heading: undefined,
    content: "智能体当前处于聆听、思考还是说话"
  }, {
    heading: undefined,
    content: "是否发生模块级错误"
  }, {
    heading: undefined,
    content: "哪一段链路变慢了"
  }, {
    heading: undefined,
    content: "会话结束方式是否异常"
  }, {
    heading: "客户端组件",
    content: "适合驱动实时 UI 和会话内体验："
  }, {
    heading: "客户端组件",
    content: "`onAgentStateChanged`"
  }, {
    heading: "客户端组件",
    content: "`onAgentError`"
  }, {
    heading: "客户端组件",
    content: "`onAgentMetrics`"
  }, {
    heading: "客户端组件",
    content: "细粒度状态回调，如 listening / thinking / speaking"
  }, {
    heading: "webhook",
    content: "适合做服务端持续监控："
  }, {
    heading: "webhook",
    content: "`101 agent joined`"
  }, {
    heading: "webhook",
    content: "`102 agent left`"
  }, {
    heading: "webhook",
    content: "`110 agent error`"
  }, {
    heading: "webhook",
    content: "`111 agent metrics`"
  }, {
    heading: "推荐监控视角",
    content: "**状态**：智能体是否按预期进入会话、退出会话"
  }, {
    heading: "推荐监控视角",
    content: "**错误**：错误属于 LLM、TTS、网络还是业务服务"
  }, {
    heading: "推荐监控视角",
    content: "**性能**：ASR、LLM、TTS 哪一段变慢"
  }, {
    heading: "推荐监控视角",
    content: "**历史**：出现异常前后用户和智能体分别说了什么"
  }, {
    heading: "建议保留的维度",
    content: "`agent_id`"
  }, {
    heading: "建议保留的维度",
    content: "`channel`"
  }, {
    heading: "建议保留的维度",
    content: "`name`"
  }, {
    heading: "建议保留的维度",
    content: "`labels`"
  }, {
    heading: "建议保留的维度",
    content: "`turn_id`"
  }, {
    heading: "建议保留的维度",
    content: "`start_ts` / `stop_ts`"
  }, {
    heading: "建议保留的维度",
    content: "这些字段有助于把客户端、webhook 和 turns API 串成一条完整时间线。"
  }, {
    heading: "继续阅读",
    content: "获取运行时事件"
  }, {
    heading: "继续阅读",
    content: "调试智能体故障"
  }, {
    heading: "继续阅读",
    content: "检索会话历史"
  }],
  headings: [{
    id: "监控信号来源",
    content: "监控信号来源"
  }, {
    id: "客户端组件",
    content: "客户端组件"
  }, {
    id: "webhook",
    content: "webhook"
  }, {
    id: "推荐监控视角",
    content: "推荐监控视角"
  }, {
    id: "建议保留的维度",
    content: "建议保留的维度"
  }, {
    id: "继续阅读",
    content: "继续阅读"
  }]
};
export let toc = [{
  depth: 2,
  url: "#监控信号来源",
  title: _jsx(_Fragment, {
    children: "监控信号来源"
  })
}, {
  depth: 3,
  url: "#客户端组件",
  title: _jsx(_Fragment, {
    children: "客户端组件"
  })
}, {
  depth: 3,
  url: "#webhook",
  title: _jsx(_Fragment, {
    children: "webhook"
  })
}, {
  depth: 2,
  url: "#推荐监控视角",
  title: _jsx(_Fragment, {
    children: "推荐监控视角"
  })
}, {
  depth: 2,
  url: "#建议保留的维度",
  title: _jsx(_Fragment, {
    children: "建议保留的维度"
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
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "运行时监控的目标不是只知道“智能体有没有启动”，而是要持续回答这些问题："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "智能体当前处于聆听、思考还是说话"
      }), `
`, _jsx(_components.li, {
        children: "是否发生模块级错误"
      }), `
`, _jsx(_components.li, {
        children: "哪一段链路变慢了"
      }), `
`, _jsx(_components.li, {
        children: "会话结束方式是否异常"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "监控信号来源",
      children: "监控信号来源"
    }), `
`, _jsx(_components.h3, {
      id: "客户端组件",
      children: "客户端组件"
    }), `
`, _jsx(_components.p, {
      children: "适合驱动实时 UI 和会话内体验："
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
        children: "细粒度状态回调，如 listening / thinking / speaking"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "webhook",
      children: "webhook"
    }), `
`, _jsx(_components.p, {
      children: "适合做服务端持续监控："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../reference/event-types.mdx#101-agent-joined",
          children: _jsx(_components.code, {
            children: "101 agent joined"
          })
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../reference/event-types.mdx#102-agent-left",
          children: _jsx(_components.code, {
            children: "102 agent left"
          })
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../reference/event-types.mdx#110-agent-error",
          children: _jsx(_components.code, {
            children: "110 agent error"
          })
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../reference/event-types.mdx#111-agent-metrics",
          children: _jsx(_components.code, {
            children: "111 agent metrics"
          })
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐监控视角",
      children: "推荐监控视角"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "状态"
        }), "：智能体是否按预期进入会话、退出会话"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "错误"
        }), "：错误属于 LLM、TTS、网络还是业务服务"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "性能"
        }), "：ASR、LLM、TTS 哪一段变慢"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "历史"
        }), "：出现异常前后用户和智能体分别说了什么"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议保留的维度",
      children: "建议保留的维度"
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
          children: "channel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "name"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "labels"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "turn_id"
        })
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "start_ts"
        }), " / ", _jsx(_components.code, {
          children: "stop_ts"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "这些字段有助于把客户端、webhook 和 turns API 串成一条完整时间线。"
    }), `
`, _jsx(_components.h2, {
      id: "继续阅读",
      children: "继续阅读"
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
          href: "debug-agent-failures.mdx",
          children: "调试智能体故障"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "retrieve-session-history.mdx",
          children: "检索会话历史"
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
