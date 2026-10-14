import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "发布说明",
  description: "了解对话式 AI 引擎各版本中的重要更新与兼容性变化。"
};
export let _markdown = `

本文汇总对话式 AI 引擎的重要版本更新，帮助你判断哪些变化会影响现有集成。

## v2.7 [#v27]

发布时间：2026 年 5 月 20 日。

### 新增能力 [#新增能力]

* 新增 MLLM 供应商：xAI Grok
* 新增数字人供应商：Generic avatar（Beta）
* \`properties.llm.greeting_configs\` 新增 \`interruptable\`，用于控制问候语播放时是否允许被用户语音打断

### 重要改进 [#重要改进]

* REST API 的状态码和 \`reason\` 字段有调整，新增 \`401\`、\`429\`、\`500\`
* \`Query conversation turn information\` 现在返回分页结果
* \`Send a custom instruction\` 接口中的 \`on_listening_action\` 默认值从 \`inject\` 改为 \`interrupt\`
* 新增通知事件 \`112 turns finished\`

## v2.6 [#v26]

发布时间：2026 年 4 月 22 日。

### 新增能力 [#新增能力-1]

* 新增 TTS 供应商：Deepgram
* 新增 \`Send a custom instruction\` 接口
* MLLM 新增 \`mllm.turn_detection\` 配置对象
* 新增统一的 \`interruption\` 配置对象

### 改进 [#改进]

* Android、iOS、Web 客户端组件新增 \`onAgentListeningChanged\`、\`onAgentThinkingChanged\`、\`onAgentSpeakingChanged\`
* 所有 NCS 事件新增 \`name\` 字段

## 升级建议 [#升级建议]

* 如果你的后端逻辑依赖旧的 \`reason\` 值，升级前务必检查错误处理和告警规则
* 如果你会检索长会话的 turns 数据，升级后要补充分页处理
* 如果你显式依赖 \`on_listening_action\` 的旧默认行为，请在请求里手动指定它

## 相关页面 [#相关页面]

* [通知事件类型](event-types.mdx)
* [调试智能体故障](../build/debug-agent-failures.mdx)
* [查询对话轮次信息](../../api-reference/conversational-ai/rest-api/agent/turns.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本文汇总对话式 AI 引擎的重要版本更新，帮助你判断哪些变化会影响现有集成。"
  }, {
    heading: "v27",
    content: "发布时间：2026 年 5 月 20 日。"
  }, {
    heading: "新增能力",
    content: "新增 MLLM 供应商：xAI Grok"
  }, {
    heading: "新增能力",
    content: "新增数字人供应商：Generic avatar（Beta）"
  }, {
    heading: "新增能力",
    content: "`properties.llm.greeting_configs` 新增 `interruptable`，用于控制问候语播放时是否允许被用户语音打断"
  }, {
    heading: "重要改进",
    content: "REST API 的状态码和 `reason` 字段有调整，新增 `401`、`429`、`500`"
  }, {
    heading: "重要改进",
    content: "`Query conversation turn information` 现在返回分页结果"
  }, {
    heading: "重要改进",
    content: "`Send a custom instruction` 接口中的 `on_listening_action` 默认值从 `inject` 改为 `interrupt`"
  }, {
    heading: "重要改进",
    content: "新增通知事件 `112 turns finished`"
  }, {
    heading: "v26",
    content: "发布时间：2026 年 4 月 22 日。"
  }, {
    heading: "新增能力-1",
    content: "新增 TTS 供应商：Deepgram"
  }, {
    heading: "新增能力-1",
    content: "新增 `Send a custom instruction` 接口"
  }, {
    heading: "新增能力-1",
    content: "MLLM 新增 `mllm.turn_detection` 配置对象"
  }, {
    heading: "新增能力-1",
    content: "新增统一的 `interruption` 配置对象"
  }, {
    heading: "改进",
    content: "Android、iOS、Web 客户端组件新增 `onAgentListeningChanged`、`onAgentThinkingChanged`、`onAgentSpeakingChanged`"
  }, {
    heading: "改进",
    content: "所有 NCS 事件新增 `name` 字段"
  }, {
    heading: "升级建议",
    content: "如果你的后端逻辑依赖旧的 `reason` 值，升级前务必检查错误处理和告警规则"
  }, {
    heading: "升级建议",
    content: "如果你会检索长会话的 turns 数据，升级后要补充分页处理"
  }, {
    heading: "升级建议",
    content: "如果你显式依赖 `on_listening_action` 的旧默认行为，请在请求里手动指定它"
  }, {
    heading: "相关页面",
    content: "通知事件类型"
  }, {
    heading: "相关页面",
    content: "调试智能体故障"
  }, {
    heading: "相关页面",
    content: "查询对话轮次信息"
  }],
  headings: [{
    id: "v27",
    content: "v2.7"
  }, {
    id: "新增能力",
    content: "新增能力"
  }, {
    id: "重要改进",
    content: "重要改进"
  }, {
    id: "v26",
    content: "v2.6"
  }, {
    id: "新增能力-1",
    content: "新增能力"
  }, {
    id: "改进",
    content: "改进"
  }, {
    id: "升级建议",
    content: "升级建议"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#v27",
  title: _jsx(_Fragment, {
    children: "v2.7"
  })
}, {
  depth: 3,
  url: "#新增能力",
  title: _jsx(_Fragment, {
    children: "新增能力"
  })
}, {
  depth: 3,
  url: "#重要改进",
  title: _jsx(_Fragment, {
    children: "重要改进"
  })
}, {
  depth: 2,
  url: "#v26",
  title: _jsx(_Fragment, {
    children: "v2.6"
  })
}, {
  depth: 3,
  url: "#新增能力-1",
  title: _jsx(_Fragment, {
    children: "新增能力"
  })
}, {
  depth: 3,
  url: "#改进",
  title: _jsx(_Fragment, {
    children: "改进"
  })
}, {
  depth: 2,
  url: "#升级建议",
  title: _jsx(_Fragment, {
    children: "升级建议"
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
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "本文汇总对话式 AI 引擎的重要版本更新，帮助你判断哪些变化会影响现有集成。"
    }), `
`, _jsx(_components.h2, {
      id: "v27",
      children: "v2.7"
    }), `
`, _jsx(_components.p, {
      children: "发布时间：2026 年 5 月 20 日。"
    }), `
`, _jsx(_components.h3, {
      id: "新增能力",
      children: "新增能力"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "新增 MLLM 供应商：xAI Grok"
      }), `
`, _jsx(_components.li, {
        children: "新增数字人供应商：Generic avatar（Beta）"
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "properties.llm.greeting_configs"
        }), " 新增 ", _jsx(_components.code, {
          children: "interruptable"
        }), "，用于控制问候语播放时是否允许被用户语音打断"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "重要改进",
      children: "重要改进"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["REST API 的状态码和 ", _jsx(_components.code, {
          children: "reason"
        }), " 字段有调整，新增 ", _jsx(_components.code, {
          children: "401"
        }), "、", _jsx(_components.code, {
          children: "429"
        }), "、", _jsx(_components.code, {
          children: "500"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Query conversation turn information"
        }), " 现在返回分页结果"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Send a custom instruction"
        }), " 接口中的 ", _jsx(_components.code, {
          children: "on_listening_action"
        }), " 默认值从 ", _jsx(_components.code, {
          children: "inject"
        }), " 改为 ", _jsx(_components.code, {
          children: "interrupt"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["新增通知事件 ", _jsx(_components.code, {
          children: "112 turns finished"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v26",
      children: "v2.6"
    }), `
`, _jsx(_components.p, {
      children: "发布时间：2026 年 4 月 22 日。"
    }), `
`, _jsx(_components.h3, {
      id: "新增能力-1",
      children: "新增能力"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "新增 TTS 供应商：Deepgram"
      }), `
`, _jsxs(_components.li, {
        children: ["新增 ", _jsx(_components.code, {
          children: "Send a custom instruction"
        }), " 接口"]
      }), `
`, _jsxs(_components.li, {
        children: ["MLLM 新增 ", _jsx(_components.code, {
          children: "mllm.turn_detection"
        }), " 配置对象"]
      }), `
`, _jsxs(_components.li, {
        children: ["新增统一的 ", _jsx(_components.code, {
          children: "interruption"
        }), " 配置对象"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "改进",
      children: "改进"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Android、iOS、Web 客户端组件新增 ", _jsx(_components.code, {
          children: "onAgentListeningChanged"
        }), "、", _jsx(_components.code, {
          children: "onAgentThinkingChanged"
        }), "、", _jsx(_components.code, {
          children: "onAgentSpeakingChanged"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["所有 NCS 事件新增 ", _jsx(_components.code, {
          children: "name"
        }), " 字段"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "升级建议",
      children: "升级建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["如果你的后端逻辑依赖旧的 ", _jsx(_components.code, {
          children: "reason"
        }), " 值，升级前务必检查错误处理和告警规则"]
      }), `
`, _jsx(_components.li, {
        children: "如果你会检索长会话的 turns 数据，升级后要补充分页处理"
      }), `
`, _jsxs(_components.li, {
        children: ["如果你显式依赖 ", _jsx(_components.code, {
          children: "on_listening_action"
        }), " 的旧默认行为，请在请求里手动指定它"]
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
          href: "event-types.mdx",
          children: "通知事件类型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/debug-agent-failures.mdx",
          children: "调试智能体故障"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../api-reference/conversational-ai/rest-api/agent/turns.md",
          children: "查询对话轮次信息"
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
