import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Signaling REST API",
  description: "Open the Signaling REST API reference."
};
export let _markdown = `

The Signaling REST API reference for RTM is maintained in the API Reference section.

* [Signaling REST API](/en/api-reference/api-ref/signaling)
* [RESTful authentication](/en/api-reference/api-ref/signaling/authentication)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Signaling REST API reference for RTM is maintained in the API Reference section."
  }, {
    heading: undefined,
    content: "Signaling REST API"
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
      children: "The Signaling REST API reference for RTM is maintained in the API Reference section."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/signaling",
          children: "Signaling REST API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/signaling/authentication",
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
