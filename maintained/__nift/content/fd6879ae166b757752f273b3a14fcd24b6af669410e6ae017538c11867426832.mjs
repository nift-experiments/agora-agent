import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Authenticate REST calls",
  description: "Open RESTful authentication for Analytics REST API requests."
};
export let _markdown = `

RESTful authentication is maintained in the API Reference section.

* [RESTful authentication](/en/api-reference/api-ref/agora-analytics/analytics-restful-authentication)
* [Analytics REST API reference](/en/api-reference/api-ref/agora-analytics/analytics-rest-api)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "RESTful authentication is maintained in the API Reference section."
  }, {
    heading: undefined,
    content: "RESTful authentication"
  }, {
    heading: undefined,
    content: "Analytics REST API reference"
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
      children: "RESTful authentication is maintained in the API Reference section."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/agora-analytics/analytics-restful-authentication",
          children: "RESTful authentication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/agora-analytics/analytics-rest-api",
          children: "Analytics REST API reference"
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
