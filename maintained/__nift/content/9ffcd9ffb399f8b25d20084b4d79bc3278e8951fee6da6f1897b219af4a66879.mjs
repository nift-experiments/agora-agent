import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora Console REST API",
  description: "Open the Agora Console REST API reference."
};
export let _markdown = `

The Agora Console REST API reference is maintained in the API Reference section.

* [Agora Console REST API](/en/api-reference/api-ref/console/solutions-agora-console-rest-api)
* [Analytics REST API reference](/en/api-reference/api-ref/agora-analytics/analytics-rest-api)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora Console REST API reference is maintained in the API Reference section."
  }, {
    heading: undefined,
    content: "Agora Console REST API"
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
      children: "The Agora Console REST API reference is maintained in the API Reference section."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/console/solutions-agora-console-rest-api",
          children: "Agora Console REST API"
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
