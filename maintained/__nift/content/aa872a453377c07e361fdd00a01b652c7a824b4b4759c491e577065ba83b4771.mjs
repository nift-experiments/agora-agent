import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "REST API",
  description: "用于管理对话式智能体和排查请求问题的 REST API。"
};
export let _markdown = `

REST API 提供对话式智能体的创建、停止、更新、查询、播报、打断和历史查询能力。

## 页面 [#页面]

* [智能体管理](agent/index.md)
* [RESTful 鉴权](authentication.mdx)
* [响应状态码](/zh-CN/api-reference/response-code)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "REST API 提供对话式智能体的创建、停止、更新、查询、播报、打断和历史查询能力。"
  }, {
    heading: "页面",
    content: "智能体管理"
  }, {
    heading: "页面",
    content: "RESTful 鉴权"
  }, {
    heading: "页面",
    content: "响应状态码"
  }],
  headings: [{
    id: "页面",
    content: "页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#页面",
  title: _jsx(_Fragment, {
    children: "页面"
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
      children: "REST API 提供对话式智能体的创建、停止、更新、查询、播报、打断和历史查询能力。"
    }), `
`, _jsx(_components.h2, {
      id: "页面",
      children: "页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "agent/index.md",
          children: "智能体管理"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "authentication.mdx",
          children: "RESTful 鉴权"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/response-code",
          children: "响应状态码"
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
