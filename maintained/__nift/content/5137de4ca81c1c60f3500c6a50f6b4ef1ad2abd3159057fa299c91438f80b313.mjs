import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Analytics REST API reference",
  description: "Open the Analytics REST API reference."
};
export let _markdown = `

The Analytics REST API reference is maintained in the API Reference section.

* [Analytics REST API reference](/en/api-reference/api-ref/agora-analytics/analytics-rest-api)
* [RESTful authentication](/en/api-reference/api-ref/agora-analytics/analytics-restful-authentication)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Analytics REST API reference is maintained in the API Reference section."
  }, {
    heading: undefined,
    content: "Analytics REST API reference"
  }, {
    heading: undefined,
    content: "RESTful authentication"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Analytics REST API reference is maintained in the API Reference section."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/agora-analytics/analytics-rest-api",
          children: "Analytics REST API reference"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/agora-analytics/analytics-restful-authentication",
          children: "RESTful authentication"
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
