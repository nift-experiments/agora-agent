import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "显示实时转写",
  description: "在与 voice agent 的对话过程中显示实时字幕和转写结果。"
};
export let _markdown = `

在实时语音互动场景里，实时转写不仅是“字幕”，它还会影响用户对会话状态的理解、等待感知和纠错能力。本文介绍如何在应用中接收并展示实时转写。

## 技术思路 [#技术思路]

声网提供的对话式 AI 客户端组件支持从运行时回调中接收转写结果，常见回调包括：

* \`onTranscriptUpdated\`
* 相关消息送达状态回调
* 智能体状态变化回调

你可以展示三类内容：

* **智能体转写**：智能体当前正在说什么，以及最终输出结果
* **用户转写**：用户语音识别结果
* **转写状态**：例如进行中、完成、被打断

## 接入前提 [#接入前提]

* 已完成 [Voice agent 快速开始](../get-started/quickstart.mdx)
* 已集成 RTC SDK 并完成基础音视频链路
* 已开通 Signaling/RTM，并完成基础消息链路

## 显示建议 [#显示建议]

* 将用户转写与智能体转写分开展示，避免混淆说话方
* 对“流式更新中”的内容做弱样式处理，最终结果再固化
* 如果智能体被打断，要让 UI 能清楚反映“当前句子已中断”

## 与其他能力的关系 [#与其他能力的关系]

* 和[打断智能体](interrupt-agent.mdx)配合时，转写状态要能体现中断
* 和[多模态消息](send-multimodal-messages.md)配合时，建议把图片消息与转写归到同一会话流
* 和[延迟优化](../best-practices/optimize-latency.mdx)配合时，转写是感知性能的重要一层

## 相关页面 [#相关页面]

* [监听运行时事件](get-runtime-events.mdx)
* [发送图片给智能体](send-multimodal-messages.md)
* [优化端到端对话延迟](../best-practices/optimize-latency.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "在实时语音互动场景里，实时转写不仅是“字幕”，它还会影响用户对会话状态的理解、等待感知和纠错能力。本文介绍如何在应用中接收并展示实时转写。"
  }, {
    heading: "技术思路",
    content: "声网提供的对话式 AI 客户端组件支持从运行时回调中接收转写结果，常见回调包括："
  }, {
    heading: "技术思路",
    content: "`onTranscriptUpdated`"
  }, {
    heading: "技术思路",
    content: "相关消息送达状态回调"
  }, {
    heading: "技术思路",
    content: "智能体状态变化回调"
  }, {
    heading: "技术思路",
    content: "你可以展示三类内容："
  }, {
    heading: "技术思路",
    content: "**智能体转写**：智能体当前正在说什么，以及最终输出结果"
  }, {
    heading: "技术思路",
    content: "**用户转写**：用户语音识别结果"
  }, {
    heading: "技术思路",
    content: "**转写状态**：例如进行中、完成、被打断"
  }, {
    heading: "接入前提",
    content: "已完成 Voice agent 快速开始"
  }, {
    heading: "接入前提",
    content: "已集成 RTC SDK 并完成基础音视频链路"
  }, {
    heading: "接入前提",
    content: "已开通 Signaling/RTM，并完成基础消息链路"
  }, {
    heading: "显示建议",
    content: "将用户转写与智能体转写分开展示，避免混淆说话方"
  }, {
    heading: "显示建议",
    content: "对“流式更新中”的内容做弱样式处理，最终结果再固化"
  }, {
    heading: "显示建议",
    content: "如果智能体被打断，要让 UI 能清楚反映“当前句子已中断”"
  }, {
    heading: "与其他能力的关系",
    content: "和打断智能体配合时，转写状态要能体现中断"
  }, {
    heading: "与其他能力的关系",
    content: "和多模态消息配合时，建议把图片消息与转写归到同一会话流"
  }, {
    heading: "与其他能力的关系",
    content: "和延迟优化配合时，转写是感知性能的重要一层"
  }, {
    heading: "相关页面",
    content: "监听运行时事件"
  }, {
    heading: "相关页面",
    content: "发送图片给智能体"
  }, {
    heading: "相关页面",
    content: "优化端到端对话延迟"
  }],
  headings: [{
    id: "技术思路",
    content: "技术思路"
  }, {
    id: "接入前提",
    content: "接入前提"
  }, {
    id: "显示建议",
    content: "显示建议"
  }, {
    id: "与其他能力的关系",
    content: "与其他能力的关系"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#技术思路",
  title: _jsx(_Fragment, {
    children: "技术思路"
  })
}, {
  depth: 2,
  url: "#接入前提",
  title: _jsx(_Fragment, {
    children: "接入前提"
  })
}, {
  depth: 2,
  url: "#显示建议",
  title: _jsx(_Fragment, {
    children: "显示建议"
  })
}, {
  depth: 2,
  url: "#与其他能力的关系",
  title: _jsx(_Fragment, {
    children: "与其他能力的关系"
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
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "在实时语音互动场景里，实时转写不仅是“字幕”，它还会影响用户对会话状态的理解、等待感知和纠错能力。本文介绍如何在应用中接收并展示实时转写。"
    }), `
`, _jsx(_components.h2, {
      id: "技术思路",
      children: "技术思路"
    }), `
`, _jsx(_components.p, {
      children: "声网提供的对话式 AI 客户端组件支持从运行时回调中接收转写结果，常见回调包括："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "onTranscriptUpdated"
        })
      }), `
`, _jsx(_components.li, {
        children: "相关消息送达状态回调"
      }), `
`, _jsx(_components.li, {
        children: "智能体状态变化回调"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "你可以展示三类内容："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "智能体转写"
        }), "：智能体当前正在说什么，以及最终输出结果"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "用户转写"
        }), "：用户语音识别结果"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "转写状态"
        }), "：例如进行中、完成、被打断"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "接入前提",
      children: "接入前提"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已完成 ", _jsx(_components.a, {
          href: "../get-started/quickstart.mdx",
          children: "Voice agent 快速开始"
        })]
      }), `
`, _jsx(_components.li, {
        children: "已集成 RTC SDK 并完成基础音视频链路"
      }), `
`, _jsx(_components.li, {
        children: "已开通 Signaling/RTM，并完成基础消息链路"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "显示建议",
      children: "显示建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "将用户转写与智能体转写分开展示，避免混淆说话方"
      }), `
`, _jsx(_components.li, {
        children: "对“流式更新中”的内容做弱样式处理，最终结果再固化"
      }), `
`, _jsx(_components.li, {
        children: "如果智能体被打断，要让 UI 能清楚反映“当前句子已中断”"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "与其他能力的关系",
      children: "与其他能力的关系"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["和", _jsx(_components.a, {
          href: "interrupt-agent.mdx",
          children: "打断智能体"
        }), "配合时，转写状态要能体现中断"]
      }), `
`, _jsxs(_components.li, {
        children: ["和", _jsx(_components.a, {
          href: "send-multimodal-messages.md",
          children: "多模态消息"
        }), "配合时，建议把图片消息与转写归到同一会话流"]
      }), `
`, _jsxs(_components.li, {
        children: ["和", _jsx(_components.a, {
          href: "../best-practices/optimize-latency.mdx",
          children: "延迟优化"
        }), "配合时，转写是感知性能的重要一层"]
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
          children: "监听运行时事件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "send-multimodal-messages.md",
          children: "发送图片给智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../best-practices/optimize-latency.mdx",
          children: "优化端到端对话延迟"
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
