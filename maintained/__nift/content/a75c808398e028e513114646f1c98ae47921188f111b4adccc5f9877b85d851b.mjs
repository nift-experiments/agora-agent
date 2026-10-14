import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Voice Agent",
  description: "了解什么是 Voice Agent、这一节如何组织，以及应该从 sidebar 的哪条路径开始。"
};
export let _markdown = `

Voice Agent 是一种实时系统：它先听用户说话，再结合上下文进行推理，最后以语音回复用户。在声网里，这种体验由几层共同组成：实时传输、智能体运行时、AI 模型，以及用户真正接触到的终端入口。

这一节不是按零散功能罗列，而是围绕一个开发决策来组织：你的智能体最终运行在哪里。sidebar 也围绕这个心智模型展开，帮助你从认知阶段直接进入实现阶段，而不是自己再重新整理文档。

## 核心能力 [#核心能力]

无论你的 Voice Agent 最终部署在什么终端，它通常都包含相同的几层基础能力：

* **实时传输**：在用户和智能体之间低延迟传输音频、事件和会话状态。
* **智能体运行时**：管理会话生命周期、轮次控制、打断、记忆和工具编排。
* **模型层**：提供 ASR、LLM、TTS，以及可选的多模态能力。
* **终端入口**：把能力真正交付给用户，入口可以是 App，也可以是专用设备。

前三层在整套文档里的概念基本一致。sidebar 的主要分叉发生在**终端入口**这一层，因为 App 团队和设备团队需要的实现流程并不相同。

## 本节如何组织 [#本节如何组织]

Voice Agent 这部分分成两条主路径：

* **在 App 中构建**：适合 Web、移动端、桌面端，或者带后端协同的应用形态。
* **在专用设备上构建**：适合玩具、陪伴设备、可穿戴、机器人、终端机等硬件优先场景。

两条路径共享同一个 Voice Agent 概念，但后续实现重点不同。App 团队通常会先关心会话控制、界面联动、模型行为和运行时事件；设备团队则会先关心 bring-up、网络配置、固件、按键控制和硬件集成。

## 在 App 中构建 [#在-app-中构建]

当智能体运行在 App、网页、桌面产品或后端协同应用里时，请走这条路径。在 sidebar 中，这就是 \`Device Kit\` 之外的通用 Voice Agent 文档。

推荐阅读顺序如下：

* 先走一条最快的端到端接入路径。
* 再进入会话控制、对话行为和运行时处理的实现页。
* 当你开始调优和运维时，再补最佳实践、模型和参考页。

<Cards>
  <Card title="快速开始" href="/zh-CN/ai/get-started/quickstart" description="快速跑通一个最小的后端加客户端链路，尽快启动可对话的 voice agent。" />

  <Card title="构建" href="/zh-CN/ai/build/start-stop-agent" description="继续实现生命周期控制、记忆、打断、运行时事件、转写、多模态输入和调试能力。" />
</Cards>

## 在专用设备上构建 [#在专用设备上构建]

当终端是专门为语音交互设计的硬件，而不是 App 时，请走这条路径。它适用于玩具、陪伴设备、售货终端、可穿戴、机器人等专用设备形态。

这里的 sidebar 以设备 bring-up 为主线组织：

* 先用一条最短路径验证 \`Convo AI Device Kit\` 能跑起来。
* 再进入服务端、网络配置、按键控制、固件和系统架构。
* 最后使用参考页做服务开通、计费和版本规划。

<Cards>
  <Card title="快速开始" href="/zh-CN/ai/device-kit/start-here/quickstart" description="快速点亮 Convo AI Device Kit，并验证设备端到端工作流。" />

  <Card title="构建" href="/zh-CN/ai/device-kit/build/run-the-r1-demo" description="继续完成 demo server、网络配置、设备控制、固件烧录和系统架构理解。" />
</Cards>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Voice Agent 是一种实时系统：它先听用户说话，再结合上下文进行推理，最后以语音回复用户。在声网里，这种体验由几层共同组成：实时传输、智能体运行时、AI 模型，以及用户真正接触到的终端入口。"
  }, {
    heading: undefined,
    content: "这一节不是按零散功能罗列，而是围绕一个开发决策来组织：你的智能体最终运行在哪里。sidebar 也围绕这个心智模型展开，帮助你从认知阶段直接进入实现阶段，而不是自己再重新整理文档。"
  }, {
    heading: "核心能力",
    content: "无论你的 Voice Agent 最终部署在什么终端，它通常都包含相同的几层基础能力："
  }, {
    heading: "核心能力",
    content: "**实时传输**：在用户和智能体之间低延迟传输音频、事件和会话状态。"
  }, {
    heading: "核心能力",
    content: "**智能体运行时**：管理会话生命周期、轮次控制、打断、记忆和工具编排。"
  }, {
    heading: "核心能力",
    content: "**模型层**：提供 ASR、LLM、TTS，以及可选的多模态能力。"
  }, {
    heading: "核心能力",
    content: "**终端入口**：把能力真正交付给用户，入口可以是 App，也可以是专用设备。"
  }, {
    heading: "核心能力",
    content: "前三层在整套文档里的概念基本一致。sidebar 的主要分叉发生在**终端入口**这一层，因为 App 团队和设备团队需要的实现流程并不相同。"
  }, {
    heading: "本节如何组织",
    content: "Voice Agent 这部分分成两条主路径："
  }, {
    heading: "本节如何组织",
    content: "**在 App 中构建**：适合 Web、移动端、桌面端，或者带后端协同的应用形态。"
  }, {
    heading: "本节如何组织",
    content: "**在专用设备上构建**：适合玩具、陪伴设备、可穿戴、机器人、终端机等硬件优先场景。"
  }, {
    heading: "本节如何组织",
    content: "两条路径共享同一个 Voice Agent 概念，但后续实现重点不同。App 团队通常会先关心会话控制、界面联动、模型行为和运行时事件；设备团队则会先关心 bring-up、网络配置、固件、按键控制和硬件集成。"
  }, {
    heading: "在-app-中构建",
    content: "当智能体运行在 App、网页、桌面产品或后端协同应用里时，请走这条路径。在 sidebar 中，这就是 `Device Kit` 之外的通用 Voice Agent 文档。"
  }, {
    heading: "在-app-中构建",
    content: "推荐阅读顺序如下："
  }, {
    heading: "在-app-中构建",
    content: "先走一条最快的端到端接入路径。"
  }, {
    heading: "在-app-中构建",
    content: "再进入会话控制、对话行为和运行时处理的实现页。"
  }, {
    heading: "在-app-中构建",
    content: "当你开始调优和运维时，再补最佳实践、模型和参考页。"
  }, {
    heading: "在-app-中构建",
    content: '<Card title="快速开始" href="/zh-CN/ai/get-started/quickstart" description="快速跑通一个最小的后端加客户端链路，尽快启动可对话的 voice agent。" />'
  }, {
    heading: "在-app-中构建",
    content: '<Card title="构建" href="/zh-CN/ai/build/start-stop-agent" description="继续实现生命周期控制、记忆、打断、运行时事件、转写、多模态输入和调试能力。" />'
  }, {
    heading: "在专用设备上构建",
    content: "当终端是专门为语音交互设计的硬件，而不是 App 时，请走这条路径。它适用于玩具、陪伴设备、售货终端、可穿戴、机器人等专用设备形态。"
  }, {
    heading: "在专用设备上构建",
    content: "这里的 sidebar 以设备 bring-up 为主线组织："
  }, {
    heading: "在专用设备上构建",
    content: "先用一条最短路径验证 `Convo AI Device Kit` 能跑起来。"
  }, {
    heading: "在专用设备上构建",
    content: "再进入服务端、网络配置、按键控制、固件和系统架构。"
  }, {
    heading: "在专用设备上构建",
    content: "最后使用参考页做服务开通、计费和版本规划。"
  }, {
    heading: "在专用设备上构建",
    content: '<Card title="快速开始" href="/zh-CN/ai/device-kit/start-here/quickstart" description="快速点亮 Convo AI Device Kit，并验证设备端到端工作流。" />'
  }, {
    heading: "在专用设备上构建",
    content: '<Card title="构建" href="/zh-CN/ai/device-kit/build/run-the-r1-demo" description="继续完成 demo server、网络配置、设备控制、固件烧录和系统架构理解。" />'
  }],
  headings: [{
    id: "核心能力",
    content: "核心能力"
  }, {
    id: "本节如何组织",
    content: "本节如何组织"
  }, {
    id: "在-app-中构建",
    content: "在 App 中构建"
  }, {
    id: "在专用设备上构建",
    content: "在专用设备上构建"
  }]
};
export let toc = [{
  depth: 2,
  url: "#核心能力",
  title: _jsx(_Fragment, {
    children: "核心能力"
  })
}, {
  depth: 2,
  url: "#本节如何组织",
  title: _jsx(_Fragment, {
    children: "本节如何组织"
  })
}, {
  depth: 2,
  url: "#在-app-中构建",
  title: _jsx(_Fragment, {
    children: "在 App 中构建"
  })
}, {
  depth: 2,
  url: "#在专用设备上构建",
  title: _jsx(_Fragment, {
    children: "在专用设备上构建"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Card, Cards } = _components;
  if (!Card)
    _missingMdxReference("Card", true);
  if (!Cards)
    _missingMdxReference("Cards", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Voice Agent 是一种实时系统：它先听用户说话，再结合上下文进行推理，最后以语音回复用户。在声网里，这种体验由几层共同组成：实时传输、智能体运行时、AI 模型，以及用户真正接触到的终端入口。"
    }), `
`, _jsx(_components.p, {
      children: "这一节不是按零散功能罗列，而是围绕一个开发决策来组织：你的智能体最终运行在哪里。sidebar 也围绕这个心智模型展开，帮助你从认知阶段直接进入实现阶段，而不是自己再重新整理文档。"
    }), `
`, _jsx(_components.h2, {
      id: "核心能力",
      children: "核心能力"
    }), `
`, _jsx(_components.p, {
      children: "无论你的 Voice Agent 最终部署在什么终端，它通常都包含相同的几层基础能力："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "实时传输"
        }), "：在用户和智能体之间低延迟传输音频、事件和会话状态。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "智能体运行时"
        }), "：管理会话生命周期、轮次控制、打断、记忆和工具编排。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "模型层"
        }), "：提供 ASR、LLM、TTS，以及可选的多模态能力。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "终端入口"
        }), "：把能力真正交付给用户，入口可以是 App，也可以是专用设备。"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["前三层在整套文档里的概念基本一致。sidebar 的主要分叉发生在", _jsx(_components.strong, {
        children: "终端入口"
      }), "这一层，因为 App 团队和设备团队需要的实现流程并不相同。"]
    }), `
`, _jsx(_components.h2, {
      id: "本节如何组织",
      children: "本节如何组织"
    }), `
`, _jsx(_components.p, {
      children: "Voice Agent 这部分分成两条主路径："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "在 App 中构建"
        }), "：适合 Web、移动端、桌面端，或者带后端协同的应用形态。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "在专用设备上构建"
        }), "：适合玩具、陪伴设备、可穿戴、机器人、终端机等硬件优先场景。"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "两条路径共享同一个 Voice Agent 概念，但后续实现重点不同。App 团队通常会先关心会话控制、界面联动、模型行为和运行时事件；设备团队则会先关心 bring-up、网络配置、固件、按键控制和硬件集成。"
    }), `
`, _jsx(_components.h2, {
      id: "在-app-中构建",
      children: "在 App 中构建"
    }), `
`, _jsxs(_components.p, {
      children: ["当智能体运行在 App、网页、桌面产品或后端协同应用里时，请走这条路径。在 sidebar 中，这就是 ", _jsx(_components.code, {
        children: "Device Kit"
      }), " 之外的通用 Voice Agent 文档。"]
    }), `
`, _jsx(_components.p, {
      children: "推荐阅读顺序如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "先走一条最快的端到端接入路径。"
      }), `
`, _jsx(_components.li, {
        children: "再进入会话控制、对话行为和运行时处理的实现页。"
      }), `
`, _jsx(_components.li, {
        children: "当你开始调优和运维时，再补最佳实践、模型和参考页。"
      }), `
`]
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "快速开始",
        href: "/zh-CN/ai/get-started/quickstart",
        description: "快速跑通一个最小的后端加客户端链路，尽快启动可对话的 voice agent。"
      }), _jsx(Card, {
        title: "构建",
        href: "/zh-CN/ai/build/start-stop-agent",
        description: "继续实现生命周期控制、记忆、打断、运行时事件、转写、多模态输入和调试能力。"
      })]
    }), `
`, _jsx(_components.h2, {
      id: "在专用设备上构建",
      children: "在专用设备上构建"
    }), `
`, _jsx(_components.p, {
      children: "当终端是专门为语音交互设计的硬件，而不是 App 时，请走这条路径。它适用于玩具、陪伴设备、售货终端、可穿戴、机器人等专用设备形态。"
    }), `
`, _jsx(_components.p, {
      children: "这里的 sidebar 以设备 bring-up 为主线组织："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["先用一条最短路径验证 ", _jsx(_components.code, {
          children: "Convo AI Device Kit"
        }), " 能跑起来。"]
      }), `
`, _jsx(_components.li, {
        children: "再进入服务端、网络配置、按键控制、固件和系统架构。"
      }), `
`, _jsx(_components.li, {
        children: "最后使用参考页做服务开通、计费和版本规划。"
      }), `
`]
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "快速开始",
        href: "/zh-CN/ai/device-kit/start-here/quickstart",
        description: "快速点亮 Convo AI Device Kit，并验证设备端到端工作流。"
      }), _jsx(Card, {
        title: "构建",
        href: "/zh-CN/ai/device-kit/build/run-the-r1-demo",
        description: "继续完成 demo server、网络配置、设备控制、固件烧录和系统架构理解。"
      })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
