import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "选择你的集成路径",
  description: "在 Agent Studio、REST API、服务端 SDK、客户端接入和 Device AI 之间选出最适合当前阶段的路径。"
};
export let _markdown = `

## 先看你当前卡在哪一层 [#先看你当前卡在哪一层]

### 只想先验证体验 [#只想先验证体验]

先看 [从 Agent Studio 开始](/zh-CN/ai/start-with-agent-studio)。

### 想尽快跑通一条可执行链路 [#想尽快跑通一条可执行链路]

先看 [语音 AI 快速开始](/zh-CN/ai/quick-start)。

### 后端要控制生命周期和配置 [#后端要控制生命周期和配置]

优先走 RESTful API 或服务端 SDK：

* [创建并启动智能体](/zh-CN/api-reference/conversational-ai/rest-api/agent/join)
* [Go SDK 快速开始](/zh-CN/ai/quick-start-go)
* [Java SDK 快速开始](/zh-CN/ai/quick-start-java)

### 客户端要承接语音与事件体验 [#客户端要承接语音与事件体验]

优先补客户端接入、实时音频、字幕与业务状态同步能力：

* [实时音频能力](/zh-CN/realtime-media/speech-to-text/audio-modality)
* [字幕与转写](/zh-CN/ai/realtime-sub)
* [业务数据](/zh-CN/ai/custom-data)

## 选择路径后的原则 [#选择路径后的原则]

* 先跑通一条最短闭环，再扩展模型和上下文。
* 先补鉴权、状态和事件，再补“更聪明”的行为。
* 先确定入口，再逐步下钻到构建、接入、运维和参考文档。
`;
export let structuredData = {
  contents: [{
    heading: "只想先验证体验",
    content: "先看 从 Agent Studio 开始。"
  }, {
    heading: "想尽快跑通一条可执行链路",
    content: "先看 语音 AI 快速开始。"
  }, {
    heading: "后端要控制生命周期和配置",
    content: "优先走 RESTful API 或服务端 SDK："
  }, {
    heading: "后端要控制生命周期和配置",
    content: "创建并启动智能体"
  }, {
    heading: "后端要控制生命周期和配置",
    content: "Go SDK 快速开始"
  }, {
    heading: "后端要控制生命周期和配置",
    content: "Java SDK 快速开始"
  }, {
    heading: "客户端要承接语音与事件体验",
    content: "优先补客户端接入、实时音频、字幕与业务状态同步能力："
  }, {
    heading: "客户端要承接语音与事件体验",
    content: "实时音频能力"
  }, {
    heading: "客户端要承接语音与事件体验",
    content: "字幕与转写"
  }, {
    heading: "客户端要承接语音与事件体验",
    content: "业务数据"
  }, {
    heading: "选择路径后的原则",
    content: "先跑通一条最短闭环，再扩展模型和上下文。"
  }, {
    heading: "选择路径后的原则",
    content: "先补鉴权、状态和事件，再补“更聪明”的行为。"
  }, {
    heading: "选择路径后的原则",
    content: "先确定入口，再逐步下钻到构建、接入、运维和参考文档。"
  }],
  headings: [{
    id: "先看你当前卡在哪一层",
    content: "先看你当前卡在哪一层"
  }, {
    id: "只想先验证体验",
    content: "只想先验证体验"
  }, {
    id: "想尽快跑通一条可执行链路",
    content: "想尽快跑通一条可执行链路"
  }, {
    id: "后端要控制生命周期和配置",
    content: "后端要控制生命周期和配置"
  }, {
    id: "客户端要承接语音与事件体验",
    content: "客户端要承接语音与事件体验"
  }, {
    id: "选择路径后的原则",
    content: "选择路径后的原则"
  }]
};
export let toc = [{
  depth: 2,
  url: "#先看你当前卡在哪一层",
  title: _jsx(_Fragment, {
    children: "先看你当前卡在哪一层"
  })
}, {
  depth: 3,
  url: "#只想先验证体验",
  title: _jsx(_Fragment, {
    children: "只想先验证体验"
  })
}, {
  depth: 3,
  url: "#想尽快跑通一条可执行链路",
  title: _jsx(_Fragment, {
    children: "想尽快跑通一条可执行链路"
  })
}, {
  depth: 3,
  url: "#后端要控制生命周期和配置",
  title: _jsx(_Fragment, {
    children: "后端要控制生命周期和配置"
  })
}, {
  depth: 3,
  url: "#客户端要承接语音与事件体验",
  title: _jsx(_Fragment, {
    children: "客户端要承接语音与事件体验"
  })
}, {
  depth: 2,
  url: "#选择路径后的原则",
  title: _jsx(_Fragment, {
    children: "选择路径后的原则"
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
      id: "先看你当前卡在哪一层",
      children: "先看你当前卡在哪一层"
    }), `
`, _jsx(_components.h3, {
      id: "只想先验证体验",
      children: "只想先验证体验"
    }), `
`, _jsxs(_components.p, {
      children: ["先看 ", _jsx(_components.a, {
        href: "/zh-CN/ai/start-with-agent-studio",
        children: "从 Agent Studio 开始"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "想尽快跑通一条可执行链路",
      children: "想尽快跑通一条可执行链路"
    }), `
`, _jsxs(_components.p, {
      children: ["先看 ", _jsx(_components.a, {
        href: "/zh-CN/ai/quick-start",
        children: "语音 AI 快速开始"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "后端要控制生命周期和配置",
      children: "后端要控制生命周期和配置"
    }), `
`, _jsx(_components.p, {
      children: "优先走 RESTful API 或服务端 SDK："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/conversational-ai/rest-api/agent/join",
          children: "创建并启动智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/quick-start-go",
          children: "Go SDK 快速开始"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/quick-start-java",
          children: "Java SDK 快速开始"
        })
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "客户端要承接语音与事件体验",
      children: "客户端要承接语音与事件体验"
    }), `
`, _jsx(_components.p, {
      children: "优先补客户端接入、实时音频、字幕与业务状态同步能力："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/realtime-media/speech-to-text/audio-modality",
          children: "实时音频能力"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/realtime-sub",
          children: "字幕与转写"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/custom-data",
          children: "业务数据"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "选择路径后的原则",
      children: "选择路径后的原则"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "先跑通一条最短闭环，再扩展模型和上下文。"
      }), `
`, _jsx(_components.li, {
        children: "先补鉴权、状态和事件，再补“更聪明”的行为。"
      }), `
`, _jsx(_components.li, {
        children: "先确定入口，再逐步下钻到构建、接入、运维和参考文档。"
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
