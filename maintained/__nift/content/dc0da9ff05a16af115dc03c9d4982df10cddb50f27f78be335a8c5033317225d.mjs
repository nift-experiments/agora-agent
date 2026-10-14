import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media Gateway REST API",
  description: "Open the Media Gateway REST API reference."
};
export let _markdown = `

The Media Gateway REST API reference is maintained in the API Reference section.

* [Media Gateway REST API](/en/api-reference/api-ref/rtmp-gateway)
* [RESTful authentication](/en/api-reference/api-ref/rtmp-gateway/authentication)
* [Response status codes](/en/api-reference/api-ref/rtmp-gateway/response-status-codes)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Media Gateway REST API reference is maintained in the API Reference section."
  }, {
    heading: undefined,
    content: "Media Gateway REST API"
  }, {
    heading: undefined,
    content: "RESTful authentication"
  }, {
    heading: undefined,
    content: "Response status codes"
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
      children: "The Media Gateway REST API reference is maintained in the API Reference section."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtmp-gateway",
          children: "Media Gateway REST API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtmp-gateway/authentication",
          children: "RESTful authentication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtmp-gateway/response-status-codes",
          children: "Response status codes"
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
