import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RTM 计费说明",
  description: "通过套餐卡片快速比较 RTM 体验套餐、自助套餐和企业套餐，并了解配额与超额计费的阅读顺序。"
};
export let _markdown = `



RTM 计费由套餐额度、服务权益和超额用量共同组成。先选择与你当前业务阶段匹配的套餐，再结合后续配额表和超额价格表评估上线成本。

## 套餐概览 [#套餐概览]

<PlanCards
  plans="[
  {
    name: '体验套餐',
    description: '免费体验产品能力，适合验证功能和小规模试运行。',
    accent: 'blue',
    features: [
      '包含每月消息数、峰值连接数、存储容量等基础额度。',
      '适合 Demo、PoC、内部测试和新业务探索。',
      '帮助你在正式采购前确认消息、Presence 和状态同步链路。',
    ],
    cta: {
      label: '开始体验',
      href: '/zh-CN/realtime-media/setup-service-and-credentials',
    },
  },
  {
    name: '自助套餐',
    description: '适合业务增长阶段，支持灵活选择套餐并获得服务保障。',
    accent: 'green',
    badge: '推荐',
    features: [
      '可根据业务规模选择更合适的消息、连接和存储额度。',
      '提供线上业务需要的服务支持和 SLA 保障。',
      '适合中小规模生产环境、活动运营和持续增长的实时协作场景。',
    ],
    cta: {
      label: '评估套餐',
      href: '#套餐配额',
    },
  },
  {
    name: '企业套餐',
    description: '适合重点项目、大规模用量和更高服务支持需求。',
    accent: 'purple',
    features: [
      '支持架构指导、容量规划、用量折扣和合规诉求沟通。',
      '适合高并发连接、复杂业务链路或全球化部署。',
      '可结合商业目标定制服务支持等级和上线保障方案。',
    ],
    cta: {
      label: '联系商务',
      href: 'https://www.agora.io/cn/contact-sales/',
    },
  },
]"
/>

## 如何选择 [#如何选择]

| 业务阶段          | 推荐套餐 | 选择依据                        |
| ------------- | ---- | --------------------------- |
| 功能验证、Demo、PoC | 体验套餐 | 先验证消息链路、Presence、状态同步和基础容量。 |
| 已进入生产或稳定增长    | 自助套餐 | 需要更明确的额度、服务支持和 SLA 保障。      |
| 大规模上线或重点项目    | 企业套餐 | 需要架构支持、用量折扣、合规沟通和更高服务等级。    |

## 套餐配额 [#套餐配额]

套餐配额通常围绕以下维度评估：

* 每月消息数：业务消息、频道事件和状态同步消息的总体规模。
* 峰值连接数：同一时间在线并保持实时连接的客户端规模。
* 存储容量：与消息、状态或历史数据相关的容量需求。
* 服务支持：线上业务对 SLA、响应时效和上线保障的要求。

如果你的业务在任一维度上接近套餐上限，应提前评估升级套餐或联系商务确认企业方案。

## 超额用量 [#超额用量]

当实际用量超过套餐包含额度时，超出部分会按对应计费规则计算。上线前建议：

1. 估算日峰值连接数和月消息量。
2. 为活动、直播或集中上线预留容量峰值。
3. 将超额价格表与业务增长预期一起评估，避免只按平均用量选择套餐。

## 后续阅读 [#后续阅读]

* 如果你还没有开通项目，先阅读 [开通服务与准备凭证](/zh-CN/realtime-media/setup-service-and-credentials)。
* 如果你正在规划 RTM 产品入口，返回 [Signaling 概览](/zh-CN/realtime-media/rtm)。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "RTM 计费由套餐额度、服务权益和超额用量共同组成。先选择与你当前业务阶段匹配的套餐，再结合后续配额表和超额价格表评估上线成本。"
  }, {
    heading: "如何选择",
    content: "业务阶段"
  }, {
    heading: "如何选择",
    content: "推荐套餐"
  }, {
    heading: "如何选择",
    content: "选择依据"
  }, {
    heading: "如何选择",
    content: "功能验证、Demo、PoC"
  }, {
    heading: "如何选择",
    content: "体验套餐"
  }, {
    heading: "如何选择",
    content: "先验证消息链路、Presence、状态同步和基础容量。"
  }, {
    heading: "如何选择",
    content: "已进入生产或稳定增长"
  }, {
    heading: "如何选择",
    content: "自助套餐"
  }, {
    heading: "如何选择",
    content: "需要更明确的额度、服务支持和 SLA 保障。"
  }, {
    heading: "如何选择",
    content: "大规模上线或重点项目"
  }, {
    heading: "如何选择",
    content: "企业套餐"
  }, {
    heading: "如何选择",
    content: "需要架构支持、用量折扣、合规沟通和更高服务等级。"
  }, {
    heading: "套餐配额",
    content: "套餐配额通常围绕以下维度评估："
  }, {
    heading: "套餐配额",
    content: "每月消息数：业务消息、频道事件和状态同步消息的总体规模。"
  }, {
    heading: "套餐配额",
    content: "峰值连接数：同一时间在线并保持实时连接的客户端规模。"
  }, {
    heading: "套餐配额",
    content: "存储容量：与消息、状态或历史数据相关的容量需求。"
  }, {
    heading: "套餐配额",
    content: "服务支持：线上业务对 SLA、响应时效和上线保障的要求。"
  }, {
    heading: "套餐配额",
    content: "如果你的业务在任一维度上接近套餐上限，应提前评估升级套餐或联系商务确认企业方案。"
  }, {
    heading: "超额用量",
    content: "当实际用量超过套餐包含额度时，超出部分会按对应计费规则计算。上线前建议："
  }, {
    heading: "超额用量",
    content: "估算日峰值连接数和月消息量。"
  }, {
    heading: "超额用量",
    content: "为活动、直播或集中上线预留容量峰值。"
  }, {
    heading: "超额用量",
    content: "将超额价格表与业务增长预期一起评估，避免只按平均用量选择套餐。"
  }, {
    heading: "后续阅读",
    content: "如果你还没有开通项目，先阅读 开通服务与准备凭证。"
  }, {
    heading: "后续阅读",
    content: "如果你正在规划 RTM 产品入口，返回 Signaling 概览。"
  }],
  headings: [{
    id: "套餐概览",
    content: "套餐概览"
  }, {
    id: "如何选择",
    content: "如何选择"
  }, {
    id: "套餐配额",
    content: "套餐配额"
  }, {
    id: "超额用量",
    content: "超额用量"
  }, {
    id: "后续阅读",
    content: "后续阅读"
  }]
};
import { PlanCards } from "../runtime-plan-cards.mjs";
export let toc = [{
  depth: 2,
  url: "#套餐概览",
  title: _jsx(_Fragment, {
    children: "套餐概览"
  })
}, {
  depth: 2,
  url: "#如何选择",
  title: _jsx(_Fragment, {
    children: "如何选择"
  })
}, {
  depth: 2,
  url: "#套餐配额",
  title: _jsx(_Fragment, {
    children: "套餐配额"
  })
}, {
  depth: 2,
  url: "#超额用量",
  title: _jsx(_Fragment, {
    children: "超额用量"
  })
}, {
  depth: 2,
  url: "#后续阅读",
  title: _jsx(_Fragment, {
    children: "后续阅读"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "RTM 计费由套餐额度、服务权益和超额用量共同组成。先选择与你当前业务阶段匹配的套餐，再结合后续配额表和超额价格表评估上线成本。"
    }), `
`, _jsx(_components.h2, {
      id: "套餐概览",
      children: "套餐概览"
    }), `
`, _jsx(PlanCards, {
      plans: [{
        name: "体验套餐",
        description: "免费体验产品能力，适合验证功能和小规模试运行。",
        accent: "blue",
        features: ["包含每月消息数、峰值连接数、存储容量等基础额度。", "适合 Demo、PoC、内部测试和新业务探索。", "帮助你在正式采购前确认消息、Presence 和状态同步链路。"],
        cta: {
          label: "开始体验",
          href: "/zh-CN/realtime-media/setup-service-and-credentials"
        }
      }, {
        name: "自助套餐",
        description: "适合业务增长阶段，支持灵活选择套餐并获得服务保障。",
        accent: "green",
        badge: "推荐",
        features: ["可根据业务规模选择更合适的消息、连接和存储额度。", "提供线上业务需要的服务支持和 SLA 保障。", "适合中小规模生产环境、活动运营和持续增长的实时协作场景。"],
        cta: {
          label: "评估套餐",
          href: "#套餐配额"
        }
      }, {
        name: "企业套餐",
        description: "适合重点项目、大规模用量和更高服务支持需求。",
        accent: "purple",
        features: ["支持架构指导、容量规划、用量折扣和合规诉求沟通。", "适合高并发连接、复杂业务链路或全球化部署。", "可结合商业目标定制服务支持等级和上线保障方案。"],
        cta: {
          label: "联系商务",
          href: "https://www.agora.io/cn/contact-sales/"
        }
      }]
    }), `
`, _jsx(_components.h2, {
      id: "如何选择",
      children: "如何选择"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "业务阶段"
          }), _jsx(_components.th, {
            children: "推荐套餐"
          }), _jsx(_components.th, {
            children: "选择依据"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "功能验证、Demo、PoC"
          }), _jsx(_components.td, {
            children: "体验套餐"
          }), _jsx(_components.td, {
            children: "先验证消息链路、Presence、状态同步和基础容量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "已进入生产或稳定增长"
          }), _jsx(_components.td, {
            children: "自助套餐"
          }), _jsx(_components.td, {
            children: "需要更明确的额度、服务支持和 SLA 保障。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "大规模上线或重点项目"
          }), _jsx(_components.td, {
            children: "企业套餐"
          }), _jsx(_components.td, {
            children: "需要架构支持、用量折扣、合规沟通和更高服务等级。"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "套餐配额",
      children: "套餐配额"
    }), `
`, _jsx(_components.p, {
      children: "套餐配额通常围绕以下维度评估："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "每月消息数：业务消息、频道事件和状态同步消息的总体规模。"
      }), `
`, _jsx(_components.li, {
        children: "峰值连接数：同一时间在线并保持实时连接的客户端规模。"
      }), `
`, _jsx(_components.li, {
        children: "存储容量：与消息、状态或历史数据相关的容量需求。"
      }), `
`, _jsx(_components.li, {
        children: "服务支持：线上业务对 SLA、响应时效和上线保障的要求。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "如果你的业务在任一维度上接近套餐上限，应提前评估升级套餐或联系商务确认企业方案。"
    }), `
`, _jsx(_components.h2, {
      id: "超额用量",
      children: "超额用量"
    }), `
`, _jsx(_components.p, {
      children: "当实际用量超过套餐包含额度时，超出部分会按对应计费规则计算。上线前建议："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "估算日峰值连接数和月消息量。"
      }), `
`, _jsx(_components.li, {
        children: "为活动、直播或集中上线预留容量峰值。"
      }), `
`, _jsx(_components.li, {
        children: "将超额价格表与业务增长预期一起评估，避免只按平均用量选择套餐。"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "后续阅读",
      children: "后续阅读"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["如果你还没有开通项目，先阅读 ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/setup-service-and-credentials",
          children: "开通服务与准备凭证"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果你正在规划 RTM 产品入口，返回 ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtm",
          children: "Signaling 概览"
        }), "。"]
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
