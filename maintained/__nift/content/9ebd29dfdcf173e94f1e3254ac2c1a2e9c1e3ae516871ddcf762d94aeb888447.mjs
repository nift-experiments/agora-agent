import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "API Reference",
  description: "承载智能体生命周期、控制、历史与回调的接口与参考信息。"
};
export let _markdown = `

## 这里放什么 [#这里放什么]

这个分组汇总旧 RESTful 文档树中的接口与参考页面。

* [创建对话式智能体](/zh-CN/api-reference/api-ref/conversational-ai/join)
* [停止对话式智能体](/zh-CN/api-reference/api-ref/conversational-ai/leave)
* [查询状态](/zh-CN/api-reference/api-ref/conversational-ai/query)
* [示例配方](/zh-CN/api-reference/recipes)
* [响应码](/zh-CN/api-reference/response-code)
* [Voice IDs](/zh-CN/api-reference/voice-ids)
* [启用回调](/zh-CN/api-reference/enable-ncs)
* [回调事件](/zh-CN/api-reference/ncs-events)
`;
export let structuredData = {
  contents: [{
    heading: "这里放什么",
    content: "这个分组汇总旧 RESTful 文档树中的接口与参考页面。"
  }, {
    heading: "这里放什么",
    content: "创建对话式智能体"
  }, {
    heading: "这里放什么",
    content: "停止对话式智能体"
  }, {
    heading: "这里放什么",
    content: "查询状态"
  }, {
    heading: "这里放什么",
    content: "示例配方"
  }, {
    heading: "这里放什么",
    content: "响应码"
  }, {
    heading: "这里放什么",
    content: "Voice IDs"
  }, {
    heading: "这里放什么",
    content: "启用回调"
  }, {
    heading: "这里放什么",
    content: "回调事件"
  }],
  headings: [{
    id: "这里放什么",
    content: "这里放什么"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这里放什么",
  title: _jsx(_Fragment, {
    children: "这里放什么"
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
      id: "这里放什么",
      children: "这里放什么"
    }), `
`, _jsx(_components.p, {
      children: "这个分组汇总旧 RESTful 文档树中的接口与参考页面。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/conversational-ai/join",
          children: "创建对话式智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/conversational-ai/leave",
          children: "停止对话式智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/conversational-ai/query",
          children: "查询状态"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/recipes",
          children: "示例配方"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/response-code",
          children: "响应码"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/voice-ids",
          children: "Voice IDs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/enable-ncs",
          children: "启用回调"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/ncs-events",
          children: "回调事件"
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
