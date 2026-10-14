import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "对话式 AI API",
  description: "选择适合你集成层级的对话式 AI API。"
};
export let _markdown = `

对话式 AI API 覆盖 REST API、服务端 SDK 和客户端工具包等集成入口。

## 页面 [#页面]

* [REST API](rest-api/index.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "对话式 AI API 覆盖 REST API、服务端 SDK 和客户端工具包等集成入口。"
  }, {
    heading: "页面",
    content: "REST API"
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
      children: "对话式 AI API 覆盖 REST API、服务端 SDK 和客户端工具包等集成入口。"
    }), `
`, _jsx(_components.h2, {
      id: "页面",
      children: "页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "rest-api/index.md",
          children: "REST API"
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
