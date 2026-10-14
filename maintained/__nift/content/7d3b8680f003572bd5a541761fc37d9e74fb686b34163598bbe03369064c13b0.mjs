import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Signaling",
  description: "使用声网 Signaling（RTM）构建低延迟消息、在线状态和实时协作能力，并根据业务阶段选择合适套餐。"
};
export let _markdown = `



## 这项能力是什么 [#这项能力是什么]

Signaling（RTM）面向频道消息、Presence、状态同步和业务事件协作场景，帮助应用在实时音视频、直播、在线教育、IoT、AI 智能体等业务中传递低延迟消息。

## 推荐阅读路径 [#推荐阅读路径]

1. 先确认你的业务是否需要频道消息、用户在线状态或跨端状态同步。
2. 再进入快速开始和使用指南，跑通最短消息链路。
3. 上线前查看计费说明，选择体验套餐、自助套餐或企业套餐。

## 套餐选择 [#套餐选择]

<PlanCards
  plans="[
  {
    name: '体验套餐',
    description: '适合免费试用和验证产品能力。',
    accent: 'blue',
    features: [
      '包含每月消息数、峰值连接数和存储容量等基础额度。',
      '适合 PoC、Demo 和小规模内部测试。',
      '可在用量增长后平滑评估升级到自助套餐。',
    ],
    cta: {
      label: '查看计费说明',
      href: '/zh-CN/realtime-media/rtm/reference/billing/billing-strategy',
    },
  },
  {
    name: '自助套餐',
    description: '适合业务增长阶段，兼顾灵活用量和服务保障。',
    accent: 'green',
    badge: '推荐',
    features: [
      '支持按业务规模选择更合适的套餐额度。',
      '覆盖线上业务需要的服务支持和 SLA 保障。',
      '适合稳定增长的消息、Presence 和状态同步场景。',
    ],
    cta: {
      label: '比较套餐权益',
      href: '/zh-CN/realtime-media/rtm/reference/billing/billing-strategy',
    },
  },
  {
    name: '企业套餐',
    description: '适合高服务支持、架构指导、用量折扣和合规需求。',
    accent: 'purple',
    features: [
      '可结合项目规模获取架构方案和容量规划建议。',
      '支持更高服务支持等级、商务折扣和定制化诉求。',
      '适合复杂生产环境、大规模连接和重点项目上线。',
    ],
    cta: {
      label: '联系商务支持',
      href: 'https://www.agora.io/cn/contact-sales/',
    },
  },
]"
/>

## 常见适用场景 [#常见适用场景]

* 实时音视频频道内的弹幕、礼物、控制消息和状态变更。
* AI 智能体、客户端和服务端之间的低延迟事件同步。
* 多端协作、在线状态、临时状态和 Presence 展示。

## 下一步 [#下一步]

* 查看 [RTM 计费说明](/zh-CN/realtime-media/rtm/reference/billing/billing-strategy)，了解套餐额度、权益和后续计费表之间的关系。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "Signaling（RTM）面向频道消息、Presence、状态同步和业务事件协作场景，帮助应用在实时音视频、直播、在线教育、IoT、AI 智能体等业务中传递低延迟消息。"
  }, {
    heading: "推荐阅读路径",
    content: "先确认你的业务是否需要频道消息、用户在线状态或跨端状态同步。"
  }, {
    heading: "推荐阅读路径",
    content: "再进入快速开始和使用指南，跑通最短消息链路。"
  }, {
    heading: "推荐阅读路径",
    content: "上线前查看计费说明，选择体验套餐、自助套餐或企业套餐。"
  }, {
    heading: "常见适用场景",
    content: "实时音视频频道内的弹幕、礼物、控制消息和状态变更。"
  }, {
    heading: "常见适用场景",
    content: "AI 智能体、客户端和服务端之间的低延迟事件同步。"
  }, {
    heading: "常见适用场景",
    content: "多端协作、在线状态、临时状态和 Presence 展示。"
  }, {
    heading: "下一步",
    content: "查看 RTM 计费说明，了解套餐额度、权益和后续计费表之间的关系。"
  }],
  headings: [{
    id: "这项能力是什么",
    content: "这项能力是什么"
  }, {
    id: "推荐阅读路径",
    content: "推荐阅读路径"
  }, {
    id: "套餐选择",
    content: "套餐选择"
  }, {
    id: "常见适用场景",
    content: "常见适用场景"
  }, {
    id: "下一步",
    content: "下一步"
  }]
};
import { PlanCards } from "../runtime-plan-cards.mjs";
export let toc = [{
  depth: 2,
  url: "#这项能力是什么",
  title: _jsx(_Fragment, {
    children: "这项能力是什么"
  })
}, {
  depth: 2,
  url: "#推荐阅读路径",
  title: _jsx(_Fragment, {
    children: "推荐阅读路径"
  })
}, {
  depth: 2,
  url: "#套餐选择",
  title: _jsx(_Fragment, {
    children: "套餐选择"
  })
}, {
  depth: 2,
  url: "#常见适用场景",
  title: _jsx(_Fragment, {
    children: "常见适用场景"
  })
}, {
  depth: 2,
  url: "#下一步",
  title: _jsx(_Fragment, {
    children: "下一步"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "这项能力是什么",
      children: "这项能力是什么"
    }), `
`, _jsx(_components.p, {
      children: "Signaling（RTM）面向频道消息、Presence、状态同步和业务事件协作场景，帮助应用在实时音视频、直播、在线教育、IoT、AI 智能体等业务中传递低延迟消息。"
    }), `
`, _jsx(_components.h2, {
      id: "推荐阅读路径",
      children: "推荐阅读路径"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "先确认你的业务是否需要频道消息、用户在线状态或跨端状态同步。"
      }), `
`, _jsx(_components.li, {
        children: "再进入快速开始和使用指南，跑通最短消息链路。"
      }), `
`, _jsx(_components.li, {
        children: "上线前查看计费说明，选择体验套餐、自助套餐或企业套餐。"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "套餐选择",
      children: "套餐选择"
    }), `
`, _jsx(PlanCards, {
      plans: [{
        name: "体验套餐",
        description: "适合免费试用和验证产品能力。",
        accent: "blue",
        features: ["包含每月消息数、峰值连接数和存储容量等基础额度。", "适合 PoC、Demo 和小规模内部测试。", "可在用量增长后平滑评估升级到自助套餐。"],
        cta: {
          label: "查看计费说明",
          href: "/zh-CN/realtime-media/rtm/reference/billing/billing-strategy"
        }
      }, {
        name: "自助套餐",
        description: "适合业务增长阶段，兼顾灵活用量和服务保障。",
        accent: "green",
        badge: "推荐",
        features: ["支持按业务规模选择更合适的套餐额度。", "覆盖线上业务需要的服务支持和 SLA 保障。", "适合稳定增长的消息、Presence 和状态同步场景。"],
        cta: {
          label: "比较套餐权益",
          href: "/zh-CN/realtime-media/rtm/reference/billing/billing-strategy"
        }
      }, {
        name: "企业套餐",
        description: "适合高服务支持、架构指导、用量折扣和合规需求。",
        accent: "purple",
        features: ["可结合项目规模获取架构方案和容量规划建议。", "支持更高服务支持等级、商务折扣和定制化诉求。", "适合复杂生产环境、大规模连接和重点项目上线。"],
        cta: {
          label: "联系商务支持",
          href: "https://www.agora.io/cn/contact-sales/"
        }
      }]
    }), `
`, _jsx(_components.h2, {
      id: "常见适用场景",
      children: "常见适用场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "实时音视频频道内的弹幕、礼物、控制消息和状态变更。"
      }), `
`, _jsx(_components.li, {
        children: "AI 智能体、客户端和服务端之间的低延迟事件同步。"
      }), `
`, _jsx(_components.li, {
        children: "多端协作、在线状态、临时状态和 Presence 展示。"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "下一步",
      children: "下一步"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["查看 ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtm/reference/billing/billing-strategy",
          children: "RTM 计费说明"
        }), "，了解套餐额度、权益和后续计费表之间的关系。"]
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
