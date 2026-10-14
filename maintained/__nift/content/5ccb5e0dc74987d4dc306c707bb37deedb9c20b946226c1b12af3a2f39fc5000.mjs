import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Video Calling Overview",
  description: "Entry points for Video Calling REST API reference material."
};
export let _markdown = `

Use these entry points for Video Calling API reference material:

* [RTC REST API](/en/api-reference/api-ref/rtc)
* [Agora Console REST API](/en/api-reference/api-ref/console/solutions-agora-console-rest-api)
* [API sunset notice](./api-sunset)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use these entry points for Video Calling API reference material:"
  }, {
    heading: undefined,
    content: "RTC REST API"
  }, {
    heading: undefined,
    content: "Agora Console REST API"
  }, {
    heading: undefined,
    content: "API sunset notice"
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
      children: "Use these entry points for Video Calling API reference material:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc",
          children: "RTC REST API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/console/solutions-agora-console-rest-api",
          children: "Agora Console REST API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./api-sunset",
          children: "API sunset notice"
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
