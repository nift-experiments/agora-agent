import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LLM 模型",
  description: "为 Voice Agent 选择语言模型供应商。"
};
export let _markdown = `

LLM 负责根据会话上下文、系统提示词、工具调用和记忆生成智能体回复。

选择 LLM 时，建议重点比较：

* 模型表现与稳定性
* 首字节和首句延迟
* 上下文长度
* 地域与合规要求
* 账号和鉴权方式

## 供应商 [#供应商]

* [OpenAI](openai.mdx)
* [Azure OpenAI](azure-openai.mdx)
* [Groq](groq.mdx)
* [Google Gemini](gemini.mdx)
* [Google Vertex AI](google-vertex-ai.mdx)
* [Claude](claude.mdx)
* [Amazon Bedrock](amazon.mdx)
* [Dify](dify.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "LLM 负责根据会话上下文、系统提示词、工具调用和记忆生成智能体回复。"
  }, {
    heading: undefined,
    content: "选择 LLM 时，建议重点比较："
  }, {
    heading: undefined,
    content: "模型表现与稳定性"
  }, {
    heading: undefined,
    content: "首字节和首句延迟"
  }, {
    heading: undefined,
    content: "上下文长度"
  }, {
    heading: undefined,
    content: "地域与合规要求"
  }, {
    heading: undefined,
    content: "账号和鉴权方式"
  }, {
    heading: "供应商",
    content: "OpenAI"
  }, {
    heading: "供应商",
    content: "Azure OpenAI"
  }, {
    heading: "供应商",
    content: "Groq"
  }, {
    heading: "供应商",
    content: "Google Gemini"
  }, {
    heading: "供应商",
    content: "Google Vertex AI"
  }, {
    heading: "供应商",
    content: "Claude"
  }, {
    heading: "供应商",
    content: "Amazon Bedrock"
  }, {
    heading: "供应商",
    content: "Dify"
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
      children: "LLM 负责根据会话上下文、系统提示词、工具调用和记忆生成智能体回复。"
    }), `
`, _jsx(_components.p, {
      children: "选择 LLM 时，建议重点比较："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "模型表现与稳定性"
      }), `
`, _jsx(_components.li, {
        children: "首字节和首句延迟"
      }), `
`, _jsx(_components.li, {
        children: "上下文长度"
      }), `
`, _jsx(_components.li, {
        children: "地域与合规要求"
      }), `
`, _jsx(_components.li, {
        children: "账号和鉴权方式"
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
          children: "OpenAI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "azure-openai.mdx",
          children: "Azure OpenAI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "groq.mdx",
          children: "Groq"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "gemini.mdx",
          children: "Google Gemini"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "google-vertex-ai.mdx",
          children: "Google Vertex AI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "claude.mdx",
          children: "Claude"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "amazon.mdx",
          children: "Amazon Bedrock"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "dify.mdx",
          children: "Dify"
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
