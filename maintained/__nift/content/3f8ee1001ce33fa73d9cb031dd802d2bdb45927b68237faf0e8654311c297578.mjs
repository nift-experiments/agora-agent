import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "计费",
  description: "了解对话式 AI 引擎的使用计费方式和单位价格。"
};
export let _markdown = `

本页介绍 Agora 如何对对话式 AI 引擎进行计费。

当你在项目中使用对话式 AI 引擎时，Agora 会按开发者账号下所有项目的月度总用量进行计费。每个月结束后，系统会先扣除免费额度，再按单位价格计算账单，并四舍五入到小数点后两位。

如果你签订了销售合同，实际计费以合同条款为准。

## 单位价格 [#单位价格]

通过 REST API 创建一个对话式 AI 实例并让其加入频道后，会产生如下音频任务费用：

| 用量类型          | 价格（USD / 分钟） | 免费额度       |
| ------------- | -----------: | ---------- |
| 对话式 AI 引擎音频任务 |       \`0.10\` | 前 300 分钟免费 |

这个价格已经包含使用声网托管的 ASR、LLM 和 TTS 模型。即使你使用 BYOK（自带 key），对话式 AI 引擎本身的音频任务价格也不变。

## 包含在单价中的托管模型 [#包含在单价中的托管模型]

### ASR [#asr]

* ARES
* Deepgram nova-2
* Deepgram nova-3

### LLM [#llm]

* OpenAI GPT-4o-mini
* OpenAI GPT-4.1-mini
* OpenAI GPT-5-nano
* OpenAI GPT-5-mini

### TTS [#tts]

* MiniMax 2.6 Turbo
* MiniMax 2.8 Turbo
* OpenAI TTS-1

## 示例 1：使用声网托管的 ASR、LLM 和 TTS [#示例-1使用声网托管的-asrllm-和-tts]

用户 A 与对话式 AI 引擎实例进行 10 分钟语音对话。Agora 的计费方式如下：

| 用量类型                                          | 时长（分钟） |      单价 | 费用（USD） |
| --------------------------------------------- | -----: | ------: | ------: |
| 用户 A 的 RTC 音频                                 |     10 | 0.00099 |  0.0099 |
| 对话式 AI 引擎音频任务                                 |     10 |    0.10 |    1.00 |
| ARES + OpenAI GPT-4o-mini + MiniMax 2.8 Turbo |     10 |    0.00 |    0.00 |

总费用：\`1.0099 USD\`

## 示例 2：使用自带 key 的供应商 [#示例-2使用自带-key-的供应商]

用户 B 与对话式 AI 引擎实例进行 10 分钟语音对话，ASR、LLM、TTS 或 MLLM 均使用自带 key：

| 用量类型          | 时长（分钟） |      单价 | 费用（USD） |
| ------------- | -----: | ------: | ------: |
| 用户 B 的 RTC 音频 |     10 | 0.00099 |  0.0099 |
| 对话式 AI 引擎音频任务 |     10 |    0.10 |    1.00 |

总费用：\`1.0099 USD\`

使用自带 key 的 ASR、LLM、TTS 或 MLLM 所产生的供应商费用，会由对应供应商直接向你计费。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本页介绍 Agora 如何对对话式 AI 引擎进行计费。"
  }, {
    heading: undefined,
    content: "当你在项目中使用对话式 AI 引擎时，Agora 会按开发者账号下所有项目的月度总用量进行计费。每个月结束后，系统会先扣除免费额度，再按单位价格计算账单，并四舍五入到小数点后两位。"
  }, {
    heading: undefined,
    content: "如果你签订了销售合同，实际计费以合同条款为准。"
  }, {
    heading: "单位价格",
    content: "通过 REST API 创建一个对话式 AI 实例并让其加入频道后，会产生如下音频任务费用："
  }, {
    heading: "单位价格",
    content: "用量类型"
  }, {
    heading: "单位价格",
    content: "价格（USD / 分钟）"
  }, {
    heading: "单位价格",
    content: "免费额度"
  }, {
    heading: "单位价格",
    content: "对话式 AI 引擎音频任务"
  }, {
    heading: "单位价格",
    content: "`0.10`"
  }, {
    heading: "单位价格",
    content: "前 300 分钟免费"
  }, {
    heading: "单位价格",
    content: "这个价格已经包含使用声网托管的 ASR、LLM 和 TTS 模型。即使你使用 BYOK（自带 key），对话式 AI 引擎本身的音频任务价格也不变。"
  }, {
    heading: "asr",
    content: "ARES"
  }, {
    heading: "asr",
    content: "Deepgram nova-2"
  }, {
    heading: "asr",
    content: "Deepgram nova-3"
  }, {
    heading: "llm",
    content: "OpenAI GPT-4o-mini"
  }, {
    heading: "llm",
    content: "OpenAI GPT-4.1-mini"
  }, {
    heading: "llm",
    content: "OpenAI GPT-5-nano"
  }, {
    heading: "llm",
    content: "OpenAI GPT-5-mini"
  }, {
    heading: "tts",
    content: "MiniMax 2.6 Turbo"
  }, {
    heading: "tts",
    content: "MiniMax 2.8 Turbo"
  }, {
    heading: "tts",
    content: "OpenAI TTS-1"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "用户 A 与对话式 AI 引擎实例进行 10 分钟语音对话。Agora 的计费方式如下："
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "用量类型"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "时长（分钟）"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "单价"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "费用（USD）"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "用户 A 的 RTC 音频"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "10"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "0.00099"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "0.0099"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "对话式 AI 引擎音频任务"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "10"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "0.10"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "1.00"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "ARES + OpenAI GPT-4o-mini + MiniMax 2.8 Turbo"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "10"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "0.00"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "0.00"
  }, {
    heading: "示例-1使用声网托管的-asrllm-和-tts",
    content: "总费用：`1.0099 USD`"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "用户 B 与对话式 AI 引擎实例进行 10 分钟语音对话，ASR、LLM、TTS 或 MLLM 均使用自带 key："
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "用量类型"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "时长（分钟）"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "单价"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "费用（USD）"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "用户 B 的 RTC 音频"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "10"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "0.00099"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "0.0099"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "对话式 AI 引擎音频任务"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "10"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "0.10"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "1.00"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "总费用：`1.0099 USD`"
  }, {
    heading: "示例-2使用自带-key-的供应商",
    content: "使用自带 key 的 ASR、LLM、TTS 或 MLLM 所产生的供应商费用，会由对应供应商直接向你计费。"
  }],
  headings: [{
    id: "单位价格",
    content: "单位价格"
  }, {
    id: "包含在单价中的托管模型",
    content: "包含在单价中的托管模型"
  }, {
    id: "asr",
    content: "ASR"
  }, {
    id: "llm",
    content: "LLM"
  }, {
    id: "tts",
    content: "TTS"
  }, {
    id: "示例-1使用声网托管的-asrllm-和-tts",
    content: "示例 1：使用声网托管的 ASR、LLM 和 TTS"
  }, {
    id: "示例-2使用自带-key-的供应商",
    content: "示例 2：使用自带 key 的供应商"
  }]
};
export let toc = [{
  depth: 2,
  url: "#单位价格",
  title: _jsx(_Fragment, {
    children: "单位价格"
  })
}, {
  depth: 2,
  url: "#包含在单价中的托管模型",
  title: _jsx(_Fragment, {
    children: "包含在单价中的托管模型"
  })
}, {
  depth: 3,
  url: "#asr",
  title: _jsx(_Fragment, {
    children: "ASR"
  })
}, {
  depth: 3,
  url: "#llm",
  title: _jsx(_Fragment, {
    children: "LLM"
  })
}, {
  depth: 3,
  url: "#tts",
  title: _jsx(_Fragment, {
    children: "TTS"
  })
}, {
  depth: 2,
  url: "#示例-1使用声网托管的-asrllm-和-tts",
  title: _jsx(_Fragment, {
    children: "示例 1：使用声网托管的 ASR、LLM 和 TTS"
  })
}, {
  depth: 2,
  url: "#示例-2使用自带-key-的供应商",
  title: _jsx(_Fragment, {
    children: "示例 2：使用自带 key 的供应商"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
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
      children: "本页介绍 Agora 如何对对话式 AI 引擎进行计费。"
    }), `
`, _jsx(_components.p, {
      children: "当你在项目中使用对话式 AI 引擎时，Agora 会按开发者账号下所有项目的月度总用量进行计费。每个月结束后，系统会先扣除免费额度，再按单位价格计算账单，并四舍五入到小数点后两位。"
    }), `
`, _jsx(_components.p, {
      children: "如果你签订了销售合同，实际计费以合同条款为准。"
    }), `
`, _jsx(_components.h2, {
      id: "单位价格",
      children: "单位价格"
    }), `
`, _jsx(_components.p, {
      children: "通过 REST API 创建一个对话式 AI 实例并让其加入频道后，会产生如下音频任务费用："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "用量类型"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "价格（USD / 分钟）"
          }), _jsx(_components.th, {
            children: "免费额度"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎音频任务"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: _jsx(_components.code, {
              children: "0.10"
            })
          }), _jsx(_components.td, {
            children: "前 300 分钟免费"
          })]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "这个价格已经包含使用声网托管的 ASR、LLM 和 TTS 模型。即使你使用 BYOK（自带 key），对话式 AI 引擎本身的音频任务价格也不变。"
    }), `
`, _jsx(_components.h2, {
      id: "包含在单价中的托管模型",
      children: "包含在单价中的托管模型"
    }), `
`, _jsx(_components.h3, {
      id: "asr",
      children: "ASR"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "ARES"
      }), `
`, _jsx(_components.li, {
        children: "Deepgram nova-2"
      }), `
`, _jsx(_components.li, {
        children: "Deepgram nova-3"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "llm",
      children: "LLM"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "OpenAI GPT-4o-mini"
      }), `
`, _jsx(_components.li, {
        children: "OpenAI GPT-4.1-mini"
      }), `
`, _jsx(_components.li, {
        children: "OpenAI GPT-5-nano"
      }), `
`, _jsx(_components.li, {
        children: "OpenAI GPT-5-mini"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "tts",
      children: "TTS"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "MiniMax 2.6 Turbo"
      }), `
`, _jsx(_components.li, {
        children: "MiniMax 2.8 Turbo"
      }), `
`, _jsx(_components.li, {
        children: "OpenAI TTS-1"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "示例-1使用声网托管的-asrllm-和-tts",
      children: "示例 1：使用声网托管的 ASR、LLM 和 TTS"
    }), `
`, _jsx(_components.p, {
      children: "用户 A 与对话式 AI 引擎实例进行 10 分钟语音对话。Agora 的计费方式如下："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "用量类型"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "时长（分钟）"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "单价"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "费用（USD）"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "用户 A 的 RTC 音频"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.00099"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.0099"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎音频任务"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "1.00"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "ARES + OpenAI GPT-4o-mini + MiniMax 2.8 Turbo"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.00"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.00"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["总费用：", _jsx(_components.code, {
        children: "1.0099 USD"
      })]
    }), `
`, _jsx(_components.h2, {
      id: "示例-2使用自带-key-的供应商",
      children: "示例 2：使用自带 key 的供应商"
    }), `
`, _jsx(_components.p, {
      children: "用户 B 与对话式 AI 引擎实例进行 10 分钟语音对话，ASR、LLM、TTS 或 MLLM 均使用自带 key："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "用量类型"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "时长（分钟）"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "单价"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "费用（USD）"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "用户 B 的 RTC 音频"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.00099"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.0099"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎音频任务"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "1.00"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["总费用：", _jsx(_components.code, {
        children: "1.0099 USD"
      })]
    }), `
`, _jsx(_components.p, {
      children: "使用自带 key 的 ASR、LLM、TTS 或 MLLM 所产生的供应商费用，会由对应供应商直接向你计费。"
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
