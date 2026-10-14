import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "通知事件类型",
  description: "了解对话式 AI webhook 中常见的生命周期、历史、错误和性能事件。"
};
export let _markdown = `

当你在服务端配置 webhook 后，声网会按 \`eventType\` 推送不同类型的对话式 AI 事件。本文汇总 Voice Agent 常见事件类型及其典型用途。

## 101 agent joined [#101-agent-joined]

表示一个智能体已加入频道。

常见用途：

* 确认会话真的建立成功
* 记录会话开始时间
* 将会话与业务记录建立关联

典型字段：

* \`agent_id\`
* \`name\`
* \`start_ts\`
* \`channel\`
* \`labels\`

## 102 agent left [#102-agent-left]

表示一个智能体已离开频道。

常见用途：

* 判断会话是正常结束还是异常终止
* 统计会话时长
* 记录结束原因

典型字段：

* \`agent_id\`
* \`name\`
* \`start_ts\`
* \`stop_ts\`
* \`channel\`
* \`status\`
* \`message\`
* \`labels\`

## 103 agent history [#103-agent-history]

表示用户和智能体对话历史已可供获取或推送。

常见用途：

* 会后归档转写
* 客服质检或运营复盘
* 把历史和 turn 分析数据关联起来

典型字段：

* \`agent_id\`
* \`name\`
* \`channel\`
* \`start_ts\`
* \`stop_ts\`
* \`contents\`
* \`labels\`

## 110 agent error [#110-agent-error]

表示智能体运行中出现模块级错误。

常见用途：

* 区分是 LLM、TTS、SIP、网络还是其他模块出错
* 对接告警系统
* 会后排障

典型字段：

* \`agent_id\`
* \`errors[].module\`
* \`errors[].code\`
* \`errors[].message\`
* \`turn_id\`

## 111 agent metrics [#111-agent-metrics]

表示智能体运行中的性能指标。

常见用途：

* 追踪 ASR、LLM、TTS 延迟
* 对比健康会话和异常会话
* 分析用户感知性能

常见指标包括：

* \`asr_ttlw\`
* \`llm_ttfb\`
* \`llm_ttfs\`
* \`tts_ttfb\`

## 使用建议 [#使用建议]

* \`101\` 和 \`102\` 适合做生命周期时间线
* \`103\` 适合做历史归档
* \`110\` 适合做错误监控
* \`111\` 适合做性能分析

## 相关页面 [#相关页面]

* [在服务端接收智能体运行时事件](../build/webhooks.mdx)
* [监控智能体运行状态](../build/monitor-agent-runtime.mdx)
* [调试智能体故障](../build/debug-agent-failures.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "当你在服务端配置 webhook 后，声网会按 `eventType` 推送不同类型的对话式 AI 事件。本文汇总 Voice Agent 常见事件类型及其典型用途。"
  }, {
    heading: "101-agent-joined",
    content: "表示一个智能体已加入频道。"
  }, {
    heading: "101-agent-joined",
    content: "常见用途："
  }, {
    heading: "101-agent-joined",
    content: "确认会话真的建立成功"
  }, {
    heading: "101-agent-joined",
    content: "记录会话开始时间"
  }, {
    heading: "101-agent-joined",
    content: "将会话与业务记录建立关联"
  }, {
    heading: "101-agent-joined",
    content: "典型字段："
  }, {
    heading: "101-agent-joined",
    content: "`agent_id`"
  }, {
    heading: "101-agent-joined",
    content: "`name`"
  }, {
    heading: "101-agent-joined",
    content: "`start_ts`"
  }, {
    heading: "101-agent-joined",
    content: "`channel`"
  }, {
    heading: "101-agent-joined",
    content: "`labels`"
  }, {
    heading: "102-agent-left",
    content: "表示一个智能体已离开频道。"
  }, {
    heading: "102-agent-left",
    content: "常见用途："
  }, {
    heading: "102-agent-left",
    content: "判断会话是正常结束还是异常终止"
  }, {
    heading: "102-agent-left",
    content: "统计会话时长"
  }, {
    heading: "102-agent-left",
    content: "记录结束原因"
  }, {
    heading: "102-agent-left",
    content: "典型字段："
  }, {
    heading: "102-agent-left",
    content: "`agent_id`"
  }, {
    heading: "102-agent-left",
    content: "`name`"
  }, {
    heading: "102-agent-left",
    content: "`start_ts`"
  }, {
    heading: "102-agent-left",
    content: "`stop_ts`"
  }, {
    heading: "102-agent-left",
    content: "`channel`"
  }, {
    heading: "102-agent-left",
    content: "`status`"
  }, {
    heading: "102-agent-left",
    content: "`message`"
  }, {
    heading: "102-agent-left",
    content: "`labels`"
  }, {
    heading: "103-agent-history",
    content: "表示用户和智能体对话历史已可供获取或推送。"
  }, {
    heading: "103-agent-history",
    content: "常见用途："
  }, {
    heading: "103-agent-history",
    content: "会后归档转写"
  }, {
    heading: "103-agent-history",
    content: "客服质检或运营复盘"
  }, {
    heading: "103-agent-history",
    content: "把历史和 turn 分析数据关联起来"
  }, {
    heading: "103-agent-history",
    content: "典型字段："
  }, {
    heading: "103-agent-history",
    content: "`agent_id`"
  }, {
    heading: "103-agent-history",
    content: "`name`"
  }, {
    heading: "103-agent-history",
    content: "`channel`"
  }, {
    heading: "103-agent-history",
    content: "`start_ts`"
  }, {
    heading: "103-agent-history",
    content: "`stop_ts`"
  }, {
    heading: "103-agent-history",
    content: "`contents`"
  }, {
    heading: "103-agent-history",
    content: "`labels`"
  }, {
    heading: "110-agent-error",
    content: "表示智能体运行中出现模块级错误。"
  }, {
    heading: "110-agent-error",
    content: "常见用途："
  }, {
    heading: "110-agent-error",
    content: "区分是 LLM、TTS、SIP、网络还是其他模块出错"
  }, {
    heading: "110-agent-error",
    content: "对接告警系统"
  }, {
    heading: "110-agent-error",
    content: "会后排障"
  }, {
    heading: "110-agent-error",
    content: "典型字段："
  }, {
    heading: "110-agent-error",
    content: "`agent_id`"
  }, {
    heading: "110-agent-error",
    content: "`errors[].module`"
  }, {
    heading: "110-agent-error",
    content: "`errors[].code`"
  }, {
    heading: "110-agent-error",
    content: "`errors[].message`"
  }, {
    heading: "110-agent-error",
    content: "`turn_id`"
  }, {
    heading: "111-agent-metrics",
    content: "表示智能体运行中的性能指标。"
  }, {
    heading: "111-agent-metrics",
    content: "常见用途："
  }, {
    heading: "111-agent-metrics",
    content: "追踪 ASR、LLM、TTS 延迟"
  }, {
    heading: "111-agent-metrics",
    content: "对比健康会话和异常会话"
  }, {
    heading: "111-agent-metrics",
    content: "分析用户感知性能"
  }, {
    heading: "111-agent-metrics",
    content: "常见指标包括："
  }, {
    heading: "111-agent-metrics",
    content: "`asr_ttlw`"
  }, {
    heading: "111-agent-metrics",
    content: "`llm_ttfb`"
  }, {
    heading: "111-agent-metrics",
    content: "`llm_ttfs`"
  }, {
    heading: "111-agent-metrics",
    content: "`tts_ttfb`"
  }, {
    heading: "使用建议",
    content: "`101` 和 `102` 适合做生命周期时间线"
  }, {
    heading: "使用建议",
    content: "`103` 适合做历史归档"
  }, {
    heading: "使用建议",
    content: "`110` 适合做错误监控"
  }, {
    heading: "使用建议",
    content: "`111` 适合做性能分析"
  }, {
    heading: "相关页面",
    content: "在服务端接收智能体运行时事件"
  }, {
    heading: "相关页面",
    content: "监控智能体运行状态"
  }, {
    heading: "相关页面",
    content: "调试智能体故障"
  }],
  headings: [{
    id: "101-agent-joined",
    content: "101 agent joined"
  }, {
    id: "102-agent-left",
    content: "102 agent left"
  }, {
    id: "103-agent-history",
    content: "103 agent history"
  }, {
    id: "110-agent-error",
    content: "110 agent error"
  }, {
    id: "111-agent-metrics",
    content: "111 agent metrics"
  }, {
    id: "使用建议",
    content: "使用建议"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#101-agent-joined",
  title: _jsx(_Fragment, {
    children: "101 agent joined"
  })
}, {
  depth: 2,
  url: "#102-agent-left",
  title: _jsx(_Fragment, {
    children: "102 agent left"
  })
}, {
  depth: 2,
  url: "#103-agent-history",
  title: _jsx(_Fragment, {
    children: "103 agent history"
  })
}, {
  depth: 2,
  url: "#110-agent-error",
  title: _jsx(_Fragment, {
    children: "110 agent error"
  })
}, {
  depth: 2,
  url: "#111-agent-metrics",
  title: _jsx(_Fragment, {
    children: "111 agent metrics"
  })
}, {
  depth: 2,
  url: "#使用建议",
  title: _jsx(_Fragment, {
    children: "使用建议"
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
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["当你在服务端配置 webhook 后，声网会按 ", _jsx(_components.code, {
        children: "eventType"
      }), " 推送不同类型的对话式 AI 事件。本文汇总 Voice Agent 常见事件类型及其典型用途。"]
    }), `
`, _jsx(_components.h2, {
      id: "101-agent-joined",
      children: "101 agent joined"
    }), `
`, _jsx(_components.p, {
      children: "表示一个智能体已加入频道。"
    }), `
`, _jsx(_components.p, {
      children: "常见用途："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "确认会话真的建立成功"
      }), `
`, _jsx(_components.li, {
        children: "记录会话开始时间"
      }), `
`, _jsx(_components.li, {
        children: "将会话与业务记录建立关联"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "典型字段："
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
          children: "start_ts"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "channel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "labels"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "102-agent-left",
      children: "102 agent left"
    }), `
`, _jsx(_components.p, {
      children: "表示一个智能体已离开频道。"
    }), `
`, _jsx(_components.p, {
      children: "常见用途："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "判断会话是正常结束还是异常终止"
      }), `
`, _jsx(_components.li, {
        children: "统计会话时长"
      }), `
`, _jsx(_components.li, {
        children: "记录结束原因"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "典型字段："
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
          children: "channel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "status"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "message"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "labels"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "103-agent-history",
      children: "103 agent history"
    }), `
`, _jsx(_components.p, {
      children: "表示用户和智能体对话历史已可供获取或推送。"
    }), `
`, _jsx(_components.p, {
      children: "常见用途："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "会后归档转写"
      }), `
`, _jsx(_components.li, {
        children: "客服质检或运营复盘"
      }), `
`, _jsx(_components.li, {
        children: "把历史和 turn 分析数据关联起来"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "典型字段："
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
`, _jsx(_components.h2, {
      id: "110-agent-error",
      children: "110 agent error"
    }), `
`, _jsx(_components.p, {
      children: "表示智能体运行中出现模块级错误。"
    }), `
`, _jsx(_components.p, {
      children: "常见用途："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "区分是 LLM、TTS、SIP、网络还是其他模块出错"
      }), `
`, _jsx(_components.li, {
        children: "对接告警系统"
      }), `
`, _jsx(_components.li, {
        children: "会后排障"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "典型字段："
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
          children: "errors[].module"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "errors[].code"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "errors[].message"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "turn_id"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "111-agent-metrics",
      children: "111 agent metrics"
    }), `
`, _jsx(_components.p, {
      children: "表示智能体运行中的性能指标。"
    }), `
`, _jsx(_components.p, {
      children: "常见用途："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "追踪 ASR、LLM、TTS 延迟"
      }), `
`, _jsx(_components.li, {
        children: "对比健康会话和异常会话"
      }), `
`, _jsx(_components.li, {
        children: "分析用户感知性能"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "常见指标包括："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "asr_ttlw"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "llm_ttfb"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "llm_ttfs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "tts_ttfb"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "使用建议",
      children: "使用建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "101"
        }), " 和 ", _jsx(_components.code, {
          children: "102"
        }), " 适合做生命周期时间线"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "103"
        }), " 适合做历史归档"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "110"
        }), " 适合做错误监控"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "111"
        }), " 适合做性能分析"]
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
          href: "../build/webhooks.mdx",
          children: "在服务端接收智能体运行时事件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/monitor-agent-runtime.mdx",
          children: "监控智能体运行状态"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/debug-agent-failures.mdx",
          children: "调试智能体故障"
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
