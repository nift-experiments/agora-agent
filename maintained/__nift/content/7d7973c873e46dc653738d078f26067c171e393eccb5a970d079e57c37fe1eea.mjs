import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "从 AI 开始",
  description: "先走 AI 接入路径，再逐步扩展到实时媒体、运维接口和生产实践。"
};
export let _markdown = `

## 推荐第一步 [#推荐第一步]

如果你的起点是语音智能体或对话体验，优先从 AI 路径进入最顺畅。

## 常见步骤 [#常见步骤]

* 开通服务并准备凭证。
* 发送第一个 API 请求或跑通快速开始。
* 加入上下文、打断控制和事件订阅能力。

## 下一步链接 [#下一步链接]

* [打开 AI 入口](/zh-CN/ai)
* [打开快速开始](/zh-CN/ai/quick-start)
`;
export let structuredData = {
  contents: [{
    heading: "推荐第一步",
    content: "如果你的起点是语音智能体或对话体验，优先从 AI 路径进入最顺畅。"
  }, {
    heading: "常见步骤",
    content: "开通服务并准备凭证。"
  }, {
    heading: "常见步骤",
    content: "发送第一个 API 请求或跑通快速开始。"
  }, {
    heading: "常见步骤",
    content: "加入上下文、打断控制和事件订阅能力。"
  }, {
    heading: "下一步链接",
    content: "打开 AI 入口"
  }, {
    heading: "下一步链接",
    content: "打开快速开始"
  }],
  headings: [{
    id: "推荐第一步",
    content: "推荐第一步"
  }, {
    id: "常见步骤",
    content: "常见步骤"
  }, {
    id: "下一步链接",
    content: "下一步链接"
  }]
};
export let toc = [{
  depth: 2,
  url: "#推荐第一步",
  title: _jsx(_Fragment, {
    children: "推荐第一步"
  })
}, {
  depth: 2,
  url: "#常见步骤",
  title: _jsx(_Fragment, {
    children: "常见步骤"
  })
}, {
  depth: 2,
  url: "#下一步链接",
  title: _jsx(_Fragment, {
    children: "下一步链接"
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
      id: "推荐第一步",
      children: "推荐第一步"
    }), `
`, _jsx(_components.p, {
      children: "如果你的起点是语音智能体或对话体验，优先从 AI 路径进入最顺畅。"
    }), `
`, _jsx(_components.h2, {
      id: "常见步骤",
      children: "常见步骤"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "开通服务并准备凭证。"
      }), `
`, _jsx(_components.li, {
        children: "发送第一个 API 请求或跑通快速开始。"
      }), `
`, _jsx(_components.li, {
        children: "加入上下文、打断控制和事件订阅能力。"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "下一步链接",
      children: "下一步链接"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai",
          children: "打开 AI 入口"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/quick-start",
          children: "打开快速开始"
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
