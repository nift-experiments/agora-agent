import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "对话式 AI",
  description: "围绕 ConvoAI、Device Kit 和 Agent 集成组织文档，帮助开发者从实时语音对话走到完整的 AI 交互产品实现。"
};
export let _markdown = `

## 主要产品 [#主要产品]

当前 AI 相关内容主要来自 ConvoAI 和 Device Kit。ConvoAI 负责对话式 AI 引擎，Device Kit 更偏智能硬件和套件化接入路径。

* [查看 ConvoAI 介绍](/zh-CN/ai)
* Device Kit：当前更偏智能硬件套件化接入路径，信息架构上归属 \`AI\` 域而非 \`Solutions\` 域

## 推荐内容结构 [#推荐内容结构]

建议在该能力域下继续补齐快速开始、模型与语音、工具调用、客户端集成、Agent 接入和参考文档。

* [查看 AI 快速开始](/zh-CN/ai/quick-start)
* [查看 AI Agent 集成页](/zh-CN/ai/agent-lifecycle)
`;
export let structuredData = {
  contents: [{
    heading: "主要产品",
    content: "当前 AI 相关内容主要来自 ConvoAI 和 Device Kit。ConvoAI 负责对话式 AI 引擎，Device Kit 更偏智能硬件和套件化接入路径。"
  }, {
    heading: "主要产品",
    content: "查看 ConvoAI 介绍"
  }, {
    heading: "主要产品",
    content: "Device Kit：当前更偏智能硬件套件化接入路径，信息架构上归属 `AI` 域而非 `Solutions` 域"
  }, {
    heading: "推荐内容结构",
    content: "建议在该能力域下继续补齐快速开始、模型与语音、工具调用、客户端集成、Agent 接入和参考文档。"
  }, {
    heading: "推荐内容结构",
    content: "查看 AI 快速开始"
  }, {
    heading: "推荐内容结构",
    content: "查看 AI Agent 集成页"
  }],
  headings: [{
    id: "主要产品",
    content: "主要产品"
  }, {
    id: "推荐内容结构",
    content: "推荐内容结构"
  }]
};
export let toc = [{
  depth: 2,
  url: "#主要产品",
  title: _jsx(_Fragment, {
    children: "主要产品"
  })
}, {
  depth: 2,
  url: "#推荐内容结构",
  title: _jsx(_Fragment, {
    children: "推荐内容结构"
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
    children: [_jsx(_components.h2, {
      id: "主要产品",
      children: "主要产品"
    }), `
`, _jsx(_components.p, {
      children: "当前 AI 相关内容主要来自 ConvoAI 和 Device Kit。ConvoAI 负责对话式 AI 引擎，Device Kit 更偏智能硬件和套件化接入路径。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai",
          children: "查看 ConvoAI 介绍"
        })
      }), `
`, _jsxs(_components.li, {
        children: ["Device Kit：当前更偏智能硬件套件化接入路径，信息架构上归属 ", _jsx(_components.code, {
          children: "AI"
        }), " 域而非 ", _jsx(_components.code, {
          children: "Solutions"
        }), " 域"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐内容结构",
      children: "推荐内容结构"
    }), `
`, _jsx(_components.p, {
      children: "建议在该能力域下继续补齐快速开始、模型与语音、工具调用、客户端集成、Agent 接入和参考文档。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/quick-start",
          children: "查看 AI 快速开始"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/agent-lifecycle",
          children: "查看 AI Agent 集成页"
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
