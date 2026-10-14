import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "对话式 AI",
  description: "围绕对话式 AI 引擎、模型编排、上下文与事件协作，快速找到构建对话式 AI 交互所需的核心文档。"
};
export let _markdown = `

## 这类页面适合谁 [#这类页面适合谁]

如果你要做语音助手、客服智能体、陪伴式对话、语音外呼，或者要把大模型、TTS、ASR 和实时会话编排成一个完整产品，就从这里进入。

## 当前仓库里可以直接看的文档 [#当前仓库里可以直接看的文档]

* [查看对话式 AI 引擎介绍](/zh-CN/ai)
* [查看快速开始](/zh-CN/ai/quick-start)
* [查看自定义大模型](/zh-CN/ai/custom-llm)
* [查看短期记忆](/zh-CN/ai/short-term-memory)
* [查看多模态消息](/zh-CN/ai/send-multimodal-message)
* [查看智能体事件](/zh-CN/ai/listen-agent-events)

## 关键能力组成 [#关键能力组成]

### 对话引擎与模型编排 [#对话引擎与模型编排]

先确定智能体的实时会话模型、LLM 接入方式、TTS 和打断策略，再决定客户端或服务端怎么接入。

### 上下文与业务协作 [#上下文与业务协作]

如果你需要让智能体理解房间状态、临时用户信息或业务元数据，可以把 RTM、Webhook 和自定义数据一起纳入设计。

* [查看自定义数据](/zh-CN/ai/custom-data)
* [查看 Webhook 事件](/zh-CN/api-reference/ncs-events)

### 上线前补齐的内容 [#上线前补齐的内容]

当第一条对话链路跑通后，通常还要继续补齐鉴权、计费、发布节奏和问题排查能力。

* [查看开通服务](/zh-CN/ai/enable-service)
* [查看计费说明](/zh-CN/ai/billing)
* [查看发版说明](/zh-CN/ai/release-notes)
`;
export let structuredData = {
  contents: [{
    heading: "这类页面适合谁",
    content: "如果你要做语音助手、客服智能体、陪伴式对话、语音外呼，或者要把大模型、TTS、ASR 和实时会话编排成一个完整产品，就从这里进入。"
  }, {
    heading: "当前仓库里可以直接看的文档",
    content: "查看对话式 AI 引擎介绍"
  }, {
    heading: "当前仓库里可以直接看的文档",
    content: "查看快速开始"
  }, {
    heading: "当前仓库里可以直接看的文档",
    content: "查看自定义大模型"
  }, {
    heading: "当前仓库里可以直接看的文档",
    content: "查看短期记忆"
  }, {
    heading: "当前仓库里可以直接看的文档",
    content: "查看多模态消息"
  }, {
    heading: "当前仓库里可以直接看的文档",
    content: "查看智能体事件"
  }, {
    heading: "对话引擎与模型编排",
    content: "先确定智能体的实时会话模型、LLM 接入方式、TTS 和打断策略，再决定客户端或服务端怎么接入。"
  }, {
    heading: "上下文与业务协作",
    content: "如果你需要让智能体理解房间状态、临时用户信息或业务元数据，可以把 RTM、Webhook 和自定义数据一起纳入设计。"
  }, {
    heading: "上下文与业务协作",
    content: "查看自定义数据"
  }, {
    heading: "上下文与业务协作",
    content: "查看 Webhook 事件"
  }, {
    heading: "上线前补齐的内容",
    content: "当第一条对话链路跑通后，通常还要继续补齐鉴权、计费、发布节奏和问题排查能力。"
  }, {
    heading: "上线前补齐的内容",
    content: "查看开通服务"
  }, {
    heading: "上线前补齐的内容",
    content: "查看计费说明"
  }, {
    heading: "上线前补齐的内容",
    content: "查看发版说明"
  }],
  headings: [{
    id: "这类页面适合谁",
    content: "这类页面适合谁"
  }, {
    id: "当前仓库里可以直接看的文档",
    content: "当前仓库里可以直接看的文档"
  }, {
    id: "关键能力组成",
    content: "关键能力组成"
  }, {
    id: "对话引擎与模型编排",
    content: "对话引擎与模型编排"
  }, {
    id: "上下文与业务协作",
    content: "上下文与业务协作"
  }, {
    id: "上线前补齐的内容",
    content: "上线前补齐的内容"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这类页面适合谁",
  title: _jsx(_Fragment, {
    children: "这类页面适合谁"
  })
}, {
  depth: 2,
  url: "#当前仓库里可以直接看的文档",
  title: _jsx(_Fragment, {
    children: "当前仓库里可以直接看的文档"
  })
}, {
  depth: 2,
  url: "#关键能力组成",
  title: _jsx(_Fragment, {
    children: "关键能力组成"
  })
}, {
  depth: 3,
  url: "#对话引擎与模型编排",
  title: _jsx(_Fragment, {
    children: "对话引擎与模型编排"
  })
}, {
  depth: 3,
  url: "#上下文与业务协作",
  title: _jsx(_Fragment, {
    children: "上下文与业务协作"
  })
}, {
  depth: 3,
  url: "#上线前补齐的内容",
  title: _jsx(_Fragment, {
    children: "上线前补齐的内容"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "这类页面适合谁",
      children: "这类页面适合谁"
    }), `
`, _jsx(_components.p, {
      children: "如果你要做语音助手、客服智能体、陪伴式对话、语音外呼，或者要把大模型、TTS、ASR 和实时会话编排成一个完整产品，就从这里进入。"
    }), `
`, _jsx(_components.h2, {
      id: "当前仓库里可以直接看的文档",
      children: "当前仓库里可以直接看的文档"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai",
          children: "查看对话式 AI 引擎介绍"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/quick-start",
          children: "查看快速开始"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/custom-llm",
          children: "查看自定义大模型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/short-term-memory",
          children: "查看短期记忆"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/send-multimodal-message",
          children: "查看多模态消息"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/listen-agent-events",
          children: "查看智能体事件"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "关键能力组成",
      children: "关键能力组成"
    }), `
`, _jsx(_components.h3, {
      id: "对话引擎与模型编排",
      children: "对话引擎与模型编排"
    }), `
`, _jsx(_components.p, {
      children: "先确定智能体的实时会话模型、LLM 接入方式、TTS 和打断策略，再决定客户端或服务端怎么接入。"
    }), `
`, _jsx(_components.h3, {
      id: "上下文与业务协作",
      children: "上下文与业务协作"
    }), `
`, _jsx(_components.p, {
      children: "如果你需要让智能体理解房间状态、临时用户信息或业务元数据，可以把 RTM、Webhook 和自定义数据一起纳入设计。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/custom-data",
          children: "查看自定义数据"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/ncs-events",
          children: "查看 Webhook 事件"
        })
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "上线前补齐的内容",
      children: "上线前补齐的内容"
    }), `
`, _jsx(_components.p, {
      children: "当第一条对话链路跑通后，通常还要继续补齐鉴权、计费、发布节奏和问题排查能力。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/enable-service",
          children: "查看开通服务"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/billing",
          children: "查看计费说明"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/release-notes",
          children: "查看发版说明"
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
