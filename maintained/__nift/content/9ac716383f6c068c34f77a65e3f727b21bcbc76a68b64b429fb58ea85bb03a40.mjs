import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "了解 Agora",
  description: "从平台定义、能力价值、可构建场景、工作方式到后续阅读路径，快速建立对 Agora 的整体认知。"
};
export let _markdown = `

## What is [#what-is]

Agora 是一套面向实时互动的开发平台，用来构建对话式 AI、语音通话、视频通话、互动直播、实时消息和媒体处理服务。

如果把普通 Web 应用理解成“请求一次，返回一次”的模式，那么 Agora 更适合处理另一类问题：用户、设备、服务和智能体需要持续在线、实时交换媒体和状态，并在同一个会话上下文里协同工作。

在这套平台里，项目、频道、用户、智能体、消息、事件和媒体服务不是分散的孤立模块，而是围绕“实时会话”这个核心模型组织起来的。

<CalloutContainer type="info">
  <CalloutTitle>
    一个核心心智模型
  </CalloutTitle>

  <CalloutDescription>
    可以把 Agora 理解成实时互动层：它把人、设备、媒体、消息和 AI 服务放进同一个持续在线的会话上下文里。
  </CalloutDescription>
</CalloutContainer>

## Why [#why]

团队之所以会选择 Agora，通常不是为了单独接一个 SDK，而是为了更快地把一整条实时体验链路搭起来。

这包括：

* 让语音、视频、消息和 AI 智能体进入同一个实时会话上下文。
* 让前端交互、服务端控制、回调通知和生产运维使用一套相对统一的模型。
* 在能力增长时继续扩展录制、转录、分析、鉴权、安全和运维治理，而不是推倒重来。

换句话说，Agora 的价值不只是“能通话”或“能发消息”，而是把实时互动和 AI 产品所需要的基础能力组合成一个可以持续演进的平台。

## What can I build [#what-can-i-build]

基于 Agora，你可以从不同起点进入，但最终会落到几类典型产品上：

<CardGrid>
  <FeatureCard title="对话式 AI">
    语音助手、陪伴型智能体、客服智能体、语音问答、AI 外呼与接待。
  </FeatureCard>

  <FeatureCard title="实时音视频">
    语音房、视频通话、互动直播、多人会议、实时课堂。
  </FeatureCard>

  <FeatureCard title="消息与协同">
    房间内消息、状态同步、事件驱动交互、业务流程协同。
  </FeatureCard>

  <FeatureCard title="媒体服务">
    录制、转录、媒体处理、内容分发、生产环境媒体链路补足。
  </FeatureCard>
</CardGrid>

如果你是从业务目标出发，可以先想“我要做的产品是什么”；如果你是从技术问题出发，可以先想“我需要的核心能力是什么”。这两条路径最终都会回到同一套 Agora 实时模型上。

## How it works [#how-it-works]

理解 Agora 的最好方式，不是先记产品名，而是先理解几个核心对象如何串起来：

* 项目与凭证：定义你的接入边界、App ID、密钥和服务开通状态。
* 频道与会话：定义用户、设备和智能体共同参与的实时上下文。
* 媒体与消息：负责音频、视频、文本消息、状态同步和事件分发。
* 智能体与服务端控制：负责创建、更新、打断、停止、回调和业务逻辑编排。
* 生产服务：包括鉴权、安全、计费、录制、转录、分析和运维治理。

一个常见的工作流通常是这样的：

1. 创建项目并准备凭证。
2. 选择一个能力入口，例如对话式 AI 或实时音视频。
3. 让用户、客户端或智能体进入同一个实时会话。
4. 在服务端补齐控制、回调和安全能力。
5. 在上线前补足计费、分析、发布和支持路径。

   \`\`\`ts
   const workflow = [
     '创建项目',
     '选择能力入口',
     '连接用户、客户端或智能体',
     '补齐服务端控制和回调',
     '准备生产治理',
   ];
   \`\`\`

<CalloutContainer type="warning">
  <CalloutTitle>
    不要按孤立产品理解
  </CalloutTitle>

  <CalloutDescription>
    你不需要在第一天就理解所有层，但应该知道这些层是如何逐步叠加的，这样后面扩展能力时不会迷失在单点文档里。
  </CalloutDescription>
</CalloutContainer>

## How to learn more [#how-to-learn-more]

如果你已经建立了基本认知，下一步建议按下面顺序继续阅读：

1. 先看 [AI 介绍](/zh-CN/ai)，理解当前对话式 AI 引擎到底覆盖什么。
2. 如果你准备直接开始接入，进入 [快速开始](/zh-CN/ai/quick-start)。
3. 如果你已经进入服务端集成阶段，继续看 [API 参考](/zh-CN/api-reference) 和 [创建智能体](/zh-CN/api-reference/conversational-ai/rest-api/agent/join)。
4. 如果你关注上线与生产治理，再进入 [计费说明](/zh-CN/ai/billing)、[HTTP 基础认证](/zh-CN/api-reference/conversational-ai/rest-api/authentication) 和 [发版说明](/zh-CN/ai/release-notes)。

这篇页面的目标不是替代产品文档，而是帮你先建立整体地图。真正开始动手时，再进入更细的能力页、操作页和运维页会更高效。

<CalloutContainer type="success">
  <CalloutTitle>
    下一步建议
  </CalloutTitle>

  <CalloutDescription>
    如果还在选择入口，产品核心是智能体就从对话式 AI 开始；产品核心是实时音频、视频或消息会话，就从 Realtime & Media 开始。
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: "what-is",
    content: "Agora 是一套面向实时互动的开发平台，用来构建对话式 AI、语音通话、视频通话、互动直播、实时消息和媒体处理服务。"
  }, {
    heading: "what-is",
    content: "如果把普通 Web 应用理解成“请求一次，返回一次”的模式，那么 Agora 更适合处理另一类问题：用户、设备、服务和智能体需要持续在线、实时交换媒体和状态，并在同一个会话上下文里协同工作。"
  }, {
    heading: "what-is",
    content: "在这套平台里，项目、频道、用户、智能体、消息、事件和媒体服务不是分散的孤立模块，而是围绕“实时会话”这个核心模型组织起来的。"
  }, {
    heading: "what-is",
    content: "可以把 Agora 理解成实时互动层：它把人、设备、媒体、消息和 AI 服务放进同一个持续在线的会话上下文里。"
  }, {
    heading: "why",
    content: "团队之所以会选择 Agora，通常不是为了单独接一个 SDK，而是为了更快地把一整条实时体验链路搭起来。"
  }, {
    heading: "why",
    content: "这包括："
  }, {
    heading: "why",
    content: "让语音、视频、消息和 AI 智能体进入同一个实时会话上下文。"
  }, {
    heading: "why",
    content: "让前端交互、服务端控制、回调通知和生产运维使用一套相对统一的模型。"
  }, {
    heading: "why",
    content: "在能力增长时继续扩展录制、转录、分析、鉴权、安全和运维治理，而不是推倒重来。"
  }, {
    heading: "why",
    content: "换句话说，Agora 的价值不只是“能通话”或“能发消息”，而是把实时互动和 AI 产品所需要的基础能力组合成一个可以持续演进的平台。"
  }, {
    heading: "what-can-i-build",
    content: "基于 Agora，你可以从不同起点进入，但最终会落到几类典型产品上："
  }, {
    heading: "what-can-i-build",
    content: "语音助手、陪伴型智能体、客服智能体、语音问答、AI 外呼与接待。"
  }, {
    heading: "what-can-i-build",
    content: "语音房、视频通话、互动直播、多人会议、实时课堂。"
  }, {
    heading: "what-can-i-build",
    content: "房间内消息、状态同步、事件驱动交互、业务流程协同。"
  }, {
    heading: "what-can-i-build",
    content: "录制、转录、媒体处理、内容分发、生产环境媒体链路补足。"
  }, {
    heading: "what-can-i-build",
    content: "如果你是从业务目标出发，可以先想“我要做的产品是什么”；如果你是从技术问题出发，可以先想“我需要的核心能力是什么”。这两条路径最终都会回到同一套 Agora 实时模型上。"
  }, {
    heading: "how-it-works",
    content: "理解 Agora 的最好方式，不是先记产品名，而是先理解几个核心对象如何串起来："
  }, {
    heading: "how-it-works",
    content: "项目与凭证：定义你的接入边界、App ID、密钥和服务开通状态。"
  }, {
    heading: "how-it-works",
    content: "频道与会话：定义用户、设备和智能体共同参与的实时上下文。"
  }, {
    heading: "how-it-works",
    content: "媒体与消息：负责音频、视频、文本消息、状态同步和事件分发。"
  }, {
    heading: "how-it-works",
    content: "智能体与服务端控制：负责创建、更新、打断、停止、回调和业务逻辑编排。"
  }, {
    heading: "how-it-works",
    content: "生产服务：包括鉴权、安全、计费、录制、转录、分析和运维治理。"
  }, {
    heading: "how-it-works",
    content: "一个常见的工作流通常是这样的："
  }, {
    heading: "how-it-works",
    content: "创建项目并准备凭证。"
  }, {
    heading: "how-it-works",
    content: "选择一个能力入口，例如对话式 AI 或实时音视频。"
  }, {
    heading: "how-it-works",
    content: "让用户、客户端或智能体进入同一个实时会话。"
  }, {
    heading: "how-it-works",
    content: "在服务端补齐控制、回调和安全能力。"
  }, {
    heading: "how-it-works",
    content: "在上线前补足计费、分析、发布和支持路径。"
  }, {
    heading: "how-it-works",
    content: "你不需要在第一天就理解所有层，但应该知道这些层是如何逐步叠加的，这样后面扩展能力时不会迷失在单点文档里。"
  }, {
    heading: "how-to-learn-more",
    content: "如果你已经建立了基本认知，下一步建议按下面顺序继续阅读："
  }, {
    heading: "how-to-learn-more",
    content: "先看 AI 介绍，理解当前对话式 AI 引擎到底覆盖什么。"
  }, {
    heading: "how-to-learn-more",
    content: "如果你准备直接开始接入，进入 快速开始。"
  }, {
    heading: "how-to-learn-more",
    content: "如果你已经进入服务端集成阶段，继续看 API 参考 和 创建智能体。"
  }, {
    heading: "how-to-learn-more",
    content: "如果你关注上线与生产治理，再进入 计费说明、HTTP 基础认证 和 发版说明。"
  }, {
    heading: "how-to-learn-more",
    content: "这篇页面的目标不是替代产品文档，而是帮你先建立整体地图。真正开始动手时，再进入更细的能力页、操作页和运维页会更高效。"
  }, {
    heading: "how-to-learn-more",
    content: "如果还在选择入口，产品核心是智能体就从对话式 AI 开始；产品核心是实时音频、视频或消息会话，就从 Realtime & Media 开始。"
  }],
  headings: [{
    id: "what-is",
    content: "What is"
  }, {
    id: "why",
    content: "Why"
  }, {
    id: "what-can-i-build",
    content: "What can I build"
  }, {
    id: "how-it-works",
    content: "How it works"
  }, {
    id: "how-to-learn-more",
    content: "How to learn more"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-is",
  title: _jsx(_Fragment, {
    children: "What is"
  })
}, {
  depth: 2,
  url: "#why",
  title: _jsx(_Fragment, {
    children: "Why"
  })
}, {
  depth: 2,
  url: "#what-can-i-build",
  title: _jsx(_Fragment, {
    children: "What can I build"
  })
}, {
  depth: 2,
  url: "#how-it-works",
  title: _jsx(_Fragment, {
    children: "How it works"
  })
}, {
  depth: 2,
  url: "#how-to-learn-more",
  title: _jsx(_Fragment, {
    children: "How to learn more"
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
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, CardGrid, FeatureCard } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!CardGrid)
    _missingMdxReference("CardGrid", true);
  if (!FeatureCard)
    _missingMdxReference("FeatureCard", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "what-is",
      children: "What is"
    }), `
`, _jsx(_components.p, {
      children: "Agora 是一套面向实时互动的开发平台，用来构建对话式 AI、语音通话、视频通话、互动直播、实时消息和媒体处理服务。"
    }), `
`, _jsx(_components.p, {
      children: "如果把普通 Web 应用理解成“请求一次，返回一次”的模式，那么 Agora 更适合处理另一类问题：用户、设备、服务和智能体需要持续在线、实时交换媒体和状态，并在同一个会话上下文里协同工作。"
    }), `
`, _jsx(_components.p, {
      children: "在这套平台里，项目、频道、用户、智能体、消息、事件和媒体服务不是分散的孤立模块，而是围绕“实时会话”这个核心模型组织起来的。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "一个核心心智模型"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "可以把 Agora 理解成实时互动层：它把人、设备、媒体、消息和 AI 服务放进同一个持续在线的会话上下文里。"
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "why",
      children: "Why"
    }), `
`, _jsx(_components.p, {
      children: "团队之所以会选择 Agora，通常不是为了单独接一个 SDK，而是为了更快地把一整条实时体验链路搭起来。"
    }), `
`, _jsx(_components.p, {
      children: "这包括："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "让语音、视频、消息和 AI 智能体进入同一个实时会话上下文。"
      }), `
`, _jsx(_components.li, {
        children: "让前端交互、服务端控制、回调通知和生产运维使用一套相对统一的模型。"
      }), `
`, _jsx(_components.li, {
        children: "在能力增长时继续扩展录制、转录、分析、鉴权、安全和运维治理，而不是推倒重来。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "换句话说，Agora 的价值不只是“能通话”或“能发消息”，而是把实时互动和 AI 产品所需要的基础能力组合成一个可以持续演进的平台。"
    }), `
`, _jsx(_components.h2, {
      id: "what-can-i-build",
      children: "What can I build"
    }), `
`, _jsx(_components.p, {
      children: "基于 Agora，你可以从不同起点进入，但最终会落到几类典型产品上："
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "对话式 AI",
        children: _jsx(_components.p, {
          children: "语音助手、陪伴型智能体、客服智能体、语音问答、AI 外呼与接待。"
        })
      }), _jsx(FeatureCard, {
        title: "实时音视频",
        children: _jsx(_components.p, {
          children: "语音房、视频通话、互动直播、多人会议、实时课堂。"
        })
      }), _jsx(FeatureCard, {
        title: "消息与协同",
        children: _jsx(_components.p, {
          children: "房间内消息、状态同步、事件驱动交互、业务流程协同。"
        })
      }), _jsx(FeatureCard, {
        title: "媒体服务",
        children: _jsx(_components.p, {
          children: "录制、转录、媒体处理、内容分发、生产环境媒体链路补足。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "如果你是从业务目标出发，可以先想“我要做的产品是什么”；如果你是从技术问题出发，可以先想“我需要的核心能力是什么”。这两条路径最终都会回到同一套 Agora 实时模型上。"
    }), `
`, _jsx(_components.h2, {
      id: "how-it-works",
      children: "How it works"
    }), `
`, _jsx(_components.p, {
      children: "理解 Agora 的最好方式，不是先记产品名，而是先理解几个核心对象如何串起来："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "项目与凭证：定义你的接入边界、App ID、密钥和服务开通状态。"
      }), `
`, _jsx(_components.li, {
        children: "频道与会话：定义用户、设备和智能体共同参与的实时上下文。"
      }), `
`, _jsx(_components.li, {
        children: "媒体与消息：负责音频、视频、文本消息、状态同步和事件分发。"
      }), `
`, _jsx(_components.li, {
        children: "智能体与服务端控制：负责创建、更新、打断、停止、回调和业务逻辑编排。"
      }), `
`, _jsx(_components.li, {
        children: "生产服务：包括鉴权、安全、计费、录制、转录、分析和运维治理。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "一个常见的工作流通常是这样的："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "创建项目并准备凭证。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "选择一个能力入口，例如对话式 AI 或实时音视频。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "让用户、客户端或智能体进入同一个实时会话。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "在服务端补齐控制、回调和安全能力。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "在上线前补足计费、分析、发布和支持路径。"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " workflow"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ["
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "  '创建项目'"
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "  '选择能力入口'"
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "  '连接用户、客户端或智能体'"
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "  '补齐服务端控制和回调'"
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "  '准备生产治理'"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "];"
                })
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "不要按孤立产品理解"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你不需要在第一天就理解所有层，但应该知道这些层是如何逐步叠加的，这样后面扩展能力时不会迷失在单点文档里。"
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "how-to-learn-more",
      children: "How to learn more"
    }), `
`, _jsx(_components.p, {
      children: "如果你已经建立了基本认知，下一步建议按下面顺序继续阅读："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["先看 ", _jsx(_components.a, {
          href: "/zh-CN/ai",
          children: "AI 介绍"
        }), "，理解当前对话式 AI 引擎到底覆盖什么。"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果你准备直接开始接入，进入 ", _jsx(_components.a, {
          href: "/zh-CN/ai/quick-start",
          children: "快速开始"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果你已经进入服务端集成阶段，继续看 ", _jsx(_components.a, {
          href: "/zh-CN/api-reference",
          children: "API 参考"
        }), " 和 ", _jsx(_components.a, {
          href: "/zh-CN/api-reference/conversational-ai/rest-api/agent/join",
          children: "创建智能体"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果你关注上线与生产治理，再进入 ", _jsx(_components.a, {
          href: "/zh-CN/ai/billing",
          children: "计费说明"
        }), "、", _jsx(_components.a, {
          href: "/zh-CN/api-reference/conversational-ai/rest-api/authentication",
          children: "HTTP 基础认证"
        }), " 和 ", _jsx(_components.a, {
          href: "/zh-CN/ai/release-notes",
          children: "发版说明"
        }), "。"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "这篇页面的目标不是替代产品文档，而是帮你先建立整体地图。真正开始动手时，再进入更细的能力页、操作页和运维页会更高效。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "success",
      children: [_jsx(CalloutTitle, {
        children: "下一步建议"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果还在选择入口，产品核心是智能体就从对话式 AI 开始；产品核心是实时音频、视频或消息会话，就从 Realtime & Media 开始。"
        })
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
