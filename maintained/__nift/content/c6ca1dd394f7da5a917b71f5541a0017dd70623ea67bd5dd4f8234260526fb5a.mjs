import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "模型",
  description: "为 Voice Agent 选择合适的语音、语言、多模态和数字人模型。"
};
export let _markdown = `

Voice Agent 的模型层通常分成四类：

* **ASR**：把用户语音转成文本
* **LLM**：理解上下文并生成回复
* **TTS**：把回复转换成语音
* **MLLM**：用一个多模态模型同时处理音频与文本
* **Avatar**：把语音智能体扩展成可视化数字人

选择模型时，建议同时考虑：

* 延迟
* 语言覆盖
* 地域和合规要求
* 账号和鉴权方式
* 是否要用声网托管预设，还是 BYOK

## 分类入口 [#分类入口]

* [ASR 模型](asr/index.md)
* [LLM 模型](llm/index.md)
* [TTS 模型](tts/index.md)
* [MLLM 模型](mllm/index.md)
* [数字人模型](avatar/index.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Voice Agent 的模型层通常分成四类："
  }, {
    heading: undefined,
    content: "**ASR**：把用户语音转成文本"
  }, {
    heading: undefined,
    content: "**LLM**：理解上下文并生成回复"
  }, {
    heading: undefined,
    content: "**TTS**：把回复转换成语音"
  }, {
    heading: undefined,
    content: "**MLLM**：用一个多模态模型同时处理音频与文本"
  }, {
    heading: undefined,
    content: "**Avatar**：把语音智能体扩展成可视化数字人"
  }, {
    heading: undefined,
    content: "选择模型时，建议同时考虑："
  }, {
    heading: undefined,
    content: "延迟"
  }, {
    heading: undefined,
    content: "语言覆盖"
  }, {
    heading: undefined,
    content: "地域和合规要求"
  }, {
    heading: undefined,
    content: "账号和鉴权方式"
  }, {
    heading: undefined,
    content: "是否要用声网托管预设，还是 BYOK"
  }, {
    heading: "分类入口",
    content: "ASR 模型"
  }, {
    heading: "分类入口",
    content: "LLM 模型"
  }, {
    heading: "分类入口",
    content: "TTS 模型"
  }, {
    heading: "分类入口",
    content: "MLLM 模型"
  }, {
    heading: "分类入口",
    content: "数字人模型"
  }],
  headings: [{
    id: "分类入口",
    content: "分类入口"
  }]
};
export let toc = [{
  depth: 2,
  url: "#分类入口",
  title: _jsx(_Fragment, {
    children: "分类入口"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Voice Agent 的模型层通常分成四类："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "ASR"
        }), "：把用户语音转成文本"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "LLM"
        }), "：理解上下文并生成回复"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "TTS"
        }), "：把回复转换成语音"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "MLLM"
        }), "：用一个多模态模型同时处理音频与文本"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Avatar"
        }), "：把语音智能体扩展成可视化数字人"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "选择模型时，建议同时考虑："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "延迟"
      }), `
`, _jsx(_components.li, {
        children: "语言覆盖"
      }), `
`, _jsx(_components.li, {
        children: "地域和合规要求"
      }), `
`, _jsx(_components.li, {
        children: "账号和鉴权方式"
      }), `
`, _jsx(_components.li, {
        children: "是否要用声网托管预设，还是 BYOK"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "分类入口",
      children: "分类入口"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "asr/index.md",
          children: "ASR 模型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "llm/index.md",
          children: "LLM 模型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "tts/index.md",
          children: "TTS 模型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "mllm/index.md",
          children: "MLLM 模型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "avatar/index.md",
          children: "数字人模型"
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
