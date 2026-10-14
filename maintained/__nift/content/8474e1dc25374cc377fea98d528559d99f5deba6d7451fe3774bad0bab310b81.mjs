import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MLLM 模型",
  description: "为 Voice Agent 选择多模态大模型供应商。"
};
export let _markdown = `

MLLM 可以在一条模型链路中同时处理实时音频与文本，从而减少独立 ASR、LLM、TTS 组件之间的拼接成本。

适合场景：

* 你想简化语音链路
* 你需要模型直接处理多模态输入
* 你希望减少多段服务之间的切换

## 供应商 [#供应商]

* [OpenAI Realtime](openai.mdx)
* [Google Gemini Live](gemini.mdx)
* [Google Vertex AI](google-vertex-ai.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "MLLM 可以在一条模型链路中同时处理实时音频与文本，从而减少独立 ASR、LLM、TTS 组件之间的拼接成本。"
  }, {
    heading: undefined,
    content: "适合场景："
  }, {
    heading: undefined,
    content: "你想简化语音链路"
  }, {
    heading: undefined,
    content: "你需要模型直接处理多模态输入"
  }, {
    heading: undefined,
    content: "你希望减少多段服务之间的切换"
  }, {
    heading: "供应商",
    content: "OpenAI Realtime"
  }, {
    heading: "供应商",
    content: "Google Gemini Live"
  }, {
    heading: "供应商",
    content: "Google Vertex AI"
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
      children: "MLLM 可以在一条模型链路中同时处理实时音频与文本，从而减少独立 ASR、LLM、TTS 组件之间的拼接成本。"
    }), `
`, _jsx(_components.p, {
      children: "适合场景："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你想简化语音链路"
      }), `
`, _jsx(_components.li, {
        children: "你需要模型直接处理多模态输入"
      }), `
`, _jsx(_components.li, {
        children: "你希望减少多段服务之间的切换"
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
          href: "openai.mdx",
          children: "OpenAI Realtime"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "gemini.mdx",
          children: "Google Gemini Live"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "google-vertex-ai.mdx",
          children: "Google Vertex AI"
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
