import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "配置预设",
  description: "用预设配置把常见场景的语音、模型和会话参数整理成更容易复用的接入方式。"
};
export let _markdown = `

## 为什么需要预设 [#为什么需要预设]

当同一个智能体需要支持多个业务场景时，预设可以帮助你把常见配置组合成更稳定、可复用的入口，而不是每次都从零拼参数。

## 预设通常包含什么 [#预设通常包含什么]

* 语音角色与播报风格
* LLM 的模型与提示词
* ASR / TTS 供应商配置
* 中断、记忆、上下文等行为策略

## 推荐先看的页面 [#推荐先看的页面]

* [配置大模型](/zh-CN/ai/custom-llm)
* [配置 ASR 与 TTS](/zh-CN/ai/configure-asr-and-tts)
* [管理记忆与上下文](/zh-CN/ai/short-term-memory)

## 实践建议 [#实践建议]

先用最少的预设跑通主场景，再逐步拆分为客服、陪伴、设备、教育等不同模板。
`;
export let structuredData = {
  contents: [{
    heading: "为什么需要预设",
    content: "当同一个智能体需要支持多个业务场景时，预设可以帮助你把常见配置组合成更稳定、可复用的入口，而不是每次都从零拼参数。"
  }, {
    heading: "预设通常包含什么",
    content: "语音角色与播报风格"
  }, {
    heading: "预设通常包含什么",
    content: "LLM 的模型与提示词"
  }, {
    heading: "预设通常包含什么",
    content: "ASR / TTS 供应商配置"
  }, {
    heading: "预设通常包含什么",
    content: "中断、记忆、上下文等行为策略"
  }, {
    heading: "推荐先看的页面",
    content: "配置大模型"
  }, {
    heading: "推荐先看的页面",
    content: "配置 ASR 与 TTS"
  }, {
    heading: "推荐先看的页面",
    content: "管理记忆与上下文"
  }, {
    heading: "实践建议",
    content: "先用最少的预设跑通主场景，再逐步拆分为客服、陪伴、设备、教育等不同模板。"
  }],
  headings: [{
    id: "为什么需要预设",
    content: "为什么需要预设"
  }, {
    id: "预设通常包含什么",
    content: "预设通常包含什么"
  }, {
    id: "推荐先看的页面",
    content: "推荐先看的页面"
  }, {
    id: "实践建议",
    content: "实践建议"
  }]
};
export let toc = [{
  depth: 2,
  url: "#为什么需要预设",
  title: _jsx(_Fragment, {
    children: "为什么需要预设"
  })
}, {
  depth: 2,
  url: "#预设通常包含什么",
  title: _jsx(_Fragment, {
    children: "预设通常包含什么"
  })
}, {
  depth: 2,
  url: "#推荐先看的页面",
  title: _jsx(_Fragment, {
    children: "推荐先看的页面"
  })
}, {
  depth: 2,
  url: "#实践建议",
  title: _jsx(_Fragment, {
    children: "实践建议"
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
    children: [_jsx(_components.h2, {
      id: "为什么需要预设",
      children: "为什么需要预设"
    }), `
`, _jsx(_components.p, {
      children: "当同一个智能体需要支持多个业务场景时，预设可以帮助你把常见配置组合成更稳定、可复用的入口，而不是每次都从零拼参数。"
    }), `
`, _jsx(_components.h2, {
      id: "预设通常包含什么",
      children: "预设通常包含什么"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "语音角色与播报风格"
      }), `
`, _jsx(_components.li, {
        children: "LLM 的模型与提示词"
      }), `
`, _jsx(_components.li, {
        children: "ASR / TTS 供应商配置"
      }), `
`, _jsx(_components.li, {
        children: "中断、记忆、上下文等行为策略"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐先看的页面",
      children: "推荐先看的页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/custom-llm",
          children: "配置大模型"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/configure-asr-and-tts",
          children: "配置 ASR 与 TTS"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/short-term-memory",
          children: "管理记忆与上下文"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "实践建议",
      children: "实践建议"
    }), `
`, _jsx(_components.p, {
      children: "先用最少的预设跑通主场景，再逐步拆分为客服、陪伴、设备、教育等不同模板。"
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
