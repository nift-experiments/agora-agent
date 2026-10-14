import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ASR 模型",
  description: "为 Voice Agent 选择自动语音识别供应商。"
};
export let _markdown = `

ASR 负责把用户语音转成文本，再交给 LLM 处理。选择 ASR 时，建议重点比较：

* 识别准确率
* 实时流式延迟
* 语言覆盖
* 专有名词增强能力
* 地域和账号要求

## 供应商 [#供应商]

* [ARES](ares.mdx)
* [OpenAI](openai.mdx)
* [Deepgram](deepgram.mdx)
* [AssemblyAI](assembly-ai.mdx)
* [Google](google.mdx)
* [Microsoft Azure](microsoft.mdx)
* [Amazon Transcribe](amazon.mdx)
* [Sarvam](sarvam.mdx)
* [Speechmatics](speechmatics.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "ASR 负责把用户语音转成文本，再交给 LLM 处理。选择 ASR 时，建议重点比较："
  }, {
    heading: undefined,
    content: "识别准确率"
  }, {
    heading: undefined,
    content: "实时流式延迟"
  }, {
    heading: undefined,
    content: "语言覆盖"
  }, {
    heading: undefined,
    content: "专有名词增强能力"
  }, {
    heading: undefined,
    content: "地域和账号要求"
  }, {
    heading: "供应商",
    content: "ARES"
  }, {
    heading: "供应商",
    content: "OpenAI"
  }, {
    heading: "供应商",
    content: "Deepgram"
  }, {
    heading: "供应商",
    content: "AssemblyAI"
  }, {
    heading: "供应商",
    content: "Google"
  }, {
    heading: "供应商",
    content: "Microsoft Azure"
  }, {
    heading: "供应商",
    content: "Amazon Transcribe"
  }, {
    heading: "供应商",
    content: "Sarvam"
  }, {
    heading: "供应商",
    content: "Speechmatics"
  }],
  headings: [{
    id: "供应商",
    content: "供应商"
  }]
};
export let toc = [{
  depth: 2,
  url: "#供应商",
  title: _jsx(_Fragment, {
    children: "供应商"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "ASR 负责把用户语音转成文本，再交给 LLM 处理。选择 ASR 时，建议重点比较："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "识别准确率"
      }), `
`, _jsx(_components.li, {
        children: "实时流式延迟"
      }), `
`, _jsx(_components.li, {
        children: "语言覆盖"
      }), `
`, _jsx(_components.li, {
        children: "专有名词增强能力"
      }), `
`, _jsx(_components.li, {
        children: "地域和账号要求"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "供应商",
      children: "供应商"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "ares.mdx",
          children: "ARES"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "openai.mdx",
          children: "OpenAI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "deepgram.mdx",
          children: "Deepgram"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "assembly-ai.mdx",
          children: "AssemblyAI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "google.mdx",
          children: "Google"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "microsoft.mdx",
          children: "Microsoft Azure"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "amazon.mdx",
          children: "Amazon Transcribe"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "sarvam.mdx",
          children: "Sarvam"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "speechmatics.mdx",
          children: "Speechmatics"
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
