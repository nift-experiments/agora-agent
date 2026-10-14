import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Channel Management REST API",
  description: "Open the shared RTC Channel Management REST API reference."
};
export let _markdown = `

The Channel Management REST API reference for Video Calling is maintained in the API Reference section.

* [Video Calling API reference](/en/api-reference/api-ref/video)
* [RTC Channel Management REST API](/en/api-reference/api-ref/rtc)
* [RESTful authentication](/en/api-reference/api-ref/rtc/authentication)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Channel Management REST API reference for Video Calling is maintained in the API Reference section."
  }, {
    heading: undefined,
    content: "Video Calling API reference"
  }, {
    heading: undefined,
    content: "RTC Channel Management REST API"
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
      children: "The Channel Management REST API reference for Video Calling is maintained in the API Reference section."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/video",
          children: "Video Calling API reference"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc",
          children: "RTC Channel Management REST API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/authentication",
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
