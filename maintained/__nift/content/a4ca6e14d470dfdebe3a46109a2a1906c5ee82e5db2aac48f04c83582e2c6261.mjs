import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "REST API reference",
  description: "Open the Media Push REST API reference."
};
export let _markdown = `

The Media Push REST API reference is maintained in the API Reference section.

* [Media Push REST API](/en/api-reference/api-ref/media-push)
* [RESTful authentication](/en/api-reference/api-ref/media-push/restful-authentication)
* [RESTful type definitions](/en/api-reference/api-ref/media-push/restful-type-definition)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Media Push REST API reference is maintained in the API Reference section."
  }, {
    heading: undefined,
    content: "Media Push REST API"
  }, {
    heading: undefined,
    content: "RESTful authentication"
  }, {
    heading: undefined,
    content: "RESTful type definitions"
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
      children: "The Media Push REST API reference is maintained in the API Reference section."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/media-push",
          children: "Media Push REST API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/media-push/restful-authentication",
          children: "RESTful authentication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/media-push/restful-type-definition",
          children: "RESTful type definitions"
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
