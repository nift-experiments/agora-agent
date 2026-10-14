import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Cloud Transcoding REST API",
  description: "Open the Cloud Transcoding REST API reference."
};
export let _markdown = `

The Cloud Transcoding REST API reference is maintained in the API Reference section.

* [Cloud Transcoding REST API](/en/api-reference/api-ref/cloud-transcoding)
* [RESTful authentication](/en/api-reference/api-ref/cloud-transcoding/authentication)
* [Response status codes](/en/api-reference/api-ref/cloud-transcoding/status-codes)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Cloud Transcoding REST API reference is maintained in the API Reference section."
  }, {
    heading: undefined,
    content: "Cloud Transcoding REST API"
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
      children: "The Cloud Transcoding REST API reference is maintained in the API Reference section."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-transcoding",
          children: "Cloud Transcoding REST API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-transcoding/authentication",
          children: "RESTful authentication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-transcoding/status-codes",
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
