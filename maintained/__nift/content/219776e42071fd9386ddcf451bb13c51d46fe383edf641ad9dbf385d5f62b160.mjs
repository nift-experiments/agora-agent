import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "使用填充词让对话更自然",
  description: "在智能体思考或等待下游结果时，用填充词改善停顿体验。"
};
export let _markdown = `

当 LLM、工具调用或下游服务响应较慢时，智能体会出现短暂停顿。适度加入填充词可以让对话听起来更自然，减少“卡住了”的感觉。

## 何时考虑填充词 [#何时考虑填充词]

* 模型首字节延迟较高
* 工具调用需要等待外部系统
* 你希望智能体更接近真人说话节奏

## 使用原则 [#使用原则]

* 只在用户能感知到明显等待时使用
* 保持短小、自然，不要重复或过度使用
* 让填充词符合角色设定，例如客服、助手、陪伴型角色的风格会不同

## 设计建议 [#设计建议]

* 把填充词看作“节奏控制”，不要把它当成真正的业务回答
* 和[优化延迟](../best-practices/optimize-latency.mdx)同时考虑，优先解决根因，再决定是否需要填充词
* 如果你的应用支持字幕，确保字幕也能合理表现填充词

## 相关页面 [#相关页面]

* [优化端到端对话延迟](../best-practices/optimize-latency.mdx)
* [显示实时转写](transcripts.md)
* [监控智能体运行状态](monitor-agent-runtime.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "当 LLM、工具调用或下游服务响应较慢时，智能体会出现短暂停顿。适度加入填充词可以让对话听起来更自然，减少“卡住了”的感觉。"
  }, {
    heading: "何时考虑填充词",
    content: "模型首字节延迟较高"
  }, {
    heading: "何时考虑填充词",
    content: "工具调用需要等待外部系统"
  }, {
    heading: "何时考虑填充词",
    content: "你希望智能体更接近真人说话节奏"
  }, {
    heading: "使用原则",
    content: "只在用户能感知到明显等待时使用"
  }, {
    heading: "使用原则",
    content: "保持短小、自然，不要重复或过度使用"
  }, {
    heading: "使用原则",
    content: "让填充词符合角色设定，例如客服、助手、陪伴型角色的风格会不同"
  }, {
    heading: "设计建议",
    content: "把填充词看作“节奏控制”，不要把它当成真正的业务回答"
  }, {
    heading: "设计建议",
    content: "和优化延迟同时考虑，优先解决根因，再决定是否需要填充词"
  }, {
    heading: "设计建议",
    content: "如果你的应用支持字幕，确保字幕也能合理表现填充词"
  }, {
    heading: "相关页面",
    content: "优化端到端对话延迟"
  }, {
    heading: "相关页面",
    content: "显示实时转写"
  }, {
    heading: "相关页面",
    content: "监控智能体运行状态"
  }],
  headings: [{
    id: "何时考虑填充词",
    content: "何时考虑填充词"
  }, {
    id: "使用原则",
    content: "使用原则"
  }, {
    id: "设计建议",
    content: "设计建议"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#何时考虑填充词",
  title: _jsx(_Fragment, {
    children: "何时考虑填充词"
  })
}, {
  depth: 2,
  url: "#使用原则",
  title: _jsx(_Fragment, {
    children: "使用原则"
  })
}, {
  depth: 2,
  url: "#设计建议",
  title: _jsx(_Fragment, {
    children: "设计建议"
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
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "当 LLM、工具调用或下游服务响应较慢时，智能体会出现短暂停顿。适度加入填充词可以让对话听起来更自然，减少“卡住了”的感觉。"
    }), `
`, _jsx(_components.h2, {
      id: "何时考虑填充词",
      children: "何时考虑填充词"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "模型首字节延迟较高"
      }), `
`, _jsx(_components.li, {
        children: "工具调用需要等待外部系统"
      }), `
`, _jsx(_components.li, {
        children: "你希望智能体更接近真人说话节奏"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "使用原则",
      children: "使用原则"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "只在用户能感知到明显等待时使用"
      }), `
`, _jsx(_components.li, {
        children: "保持短小、自然，不要重复或过度使用"
      }), `
`, _jsx(_components.li, {
        children: "让填充词符合角色设定，例如客服、助手、陪伴型角色的风格会不同"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "设计建议",
      children: "设计建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "把填充词看作“节奏控制”，不要把它当成真正的业务回答"
      }), `
`, _jsxs(_components.li, {
        children: ["和", _jsx(_components.a, {
          href: "../best-practices/optimize-latency.mdx",
          children: "优化延迟"
        }), "同时考虑，优先解决根因，再决定是否需要填充词"]
      }), `
`, _jsx(_components.li, {
        children: "如果你的应用支持字幕，确保字幕也能合理表现填充词"
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
          href: "../best-practices/optimize-latency.mdx",
          children: "优化端到端对话延迟"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "transcripts.md",
          children: "显示实时转写"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "monitor-agent-runtime.mdx",
          children: "监控智能体运行状态"
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
