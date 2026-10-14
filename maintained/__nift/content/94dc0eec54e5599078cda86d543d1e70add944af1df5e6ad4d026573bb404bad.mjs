import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Dify",
  description: "把 Voice Agent 与 Dify 的 workflow 或 agent 平台结合起来。"
};
export let _markdown = `

Dify 是一个面向 LLM 应用的开发平台，支持多种模型统一接入、工作流编排和代理式能力扩展。

## 适合什么场景 [#适合什么场景]

* 你希望通过 Dify 统一管理多家 LLM
* 你要在模型调用前后串联工作流
* 你已经有 Dify 插件和应用编排体系

## 基本接入思路 [#基本接入思路]

1. 在 Dify 中安装 Agora Conversational AI 插件
2. 在 Agora Console 中开通对话式 AI，并记录 App ID 等项目信息
3. 在 Dify 侧创建对应的 endpoint 或 workflow
4. 在启动智能体时，把 LLM 请求指向 Dify 暴露的接口

## 接入建议 [#接入建议]

* 明确 Dify 负责的是“上游编排”，对话链路仍要满足实时场景的延迟要求
* 如果你要在 Dify 中做多步工作流，先用小流量验证对整体延迟的影响
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Dify 是一个面向 LLM 应用的开发平台，支持多种模型统一接入、工作流编排和代理式能力扩展。"
  }, {
    heading: "适合什么场景",
    content: "你希望通过 Dify 统一管理多家 LLM"
  }, {
    heading: "适合什么场景",
    content: "你要在模型调用前后串联工作流"
  }, {
    heading: "适合什么场景",
    content: "你已经有 Dify 插件和应用编排体系"
  }, {
    heading: "基本接入思路",
    content: "在 Dify 中安装 Agora Conversational AI 插件"
  }, {
    heading: "基本接入思路",
    content: "在 Agora Console 中开通对话式 AI，并记录 App ID 等项目信息"
  }, {
    heading: "基本接入思路",
    content: "在 Dify 侧创建对应的 endpoint 或 workflow"
  }, {
    heading: "基本接入思路",
    content: "在启动智能体时，把 LLM 请求指向 Dify 暴露的接口"
  }, {
    heading: "接入建议",
    content: "明确 Dify 负责的是“上游编排”，对话链路仍要满足实时场景的延迟要求"
  }, {
    heading: "接入建议",
    content: "如果你要在 Dify 中做多步工作流，先用小流量验证对整体延迟的影响"
  }],
  headings: [{
    id: "适合什么场景",
    content: "适合什么场景"
  }, {
    id: "基本接入思路",
    content: "基本接入思路"
  }, {
    id: "接入建议",
    content: "接入建议"
  }]
};
export let toc = [{
  depth: 2,
  url: "#适合什么场景",
  title: _jsx(_Fragment, {
    children: "适合什么场景"
  })
}, {
  depth: 2,
  url: "#基本接入思路",
  title: _jsx(_Fragment, {
    children: "基本接入思路"
  })
}, {
  depth: 2,
  url: "#接入建议",
  title: _jsx(_Fragment, {
    children: "接入建议"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Dify 是一个面向 LLM 应用的开发平台，支持多种模型统一接入、工作流编排和代理式能力扩展。"
    }), `
`, _jsx(_components.h2, {
      id: "适合什么场景",
      children: "适合什么场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你希望通过 Dify 统一管理多家 LLM"
      }), `
`, _jsx(_components.li, {
        children: "你要在模型调用前后串联工作流"
      }), `
`, _jsx(_components.li, {
        children: "你已经有 Dify 插件和应用编排体系"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "基本接入思路",
      children: "基本接入思路"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "在 Dify 中安装 Agora Conversational AI 插件"
      }), `
`, _jsx(_components.li, {
        children: "在 Agora Console 中开通对话式 AI，并记录 App ID 等项目信息"
      }), `
`, _jsx(_components.li, {
        children: "在 Dify 侧创建对应的 endpoint 或 workflow"
      }), `
`, _jsx(_components.li, {
        children: "在启动智能体时，把 LLM 请求指向 Dify 暴露的接口"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "接入建议",
      children: "接入建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "明确 Dify 负责的是“上游编排”，对话链路仍要满足实时场景的延迟要求"
      }), `
`, _jsx(_components.li, {
        children: "如果你要在 Dify 中做多步工作流，先用小流量验证对整体延迟的影响"
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
