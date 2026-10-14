import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Signaling",
  description: "API reference entry points for Signaling."
};
export let _markdown = `

Use this page to choose the Signaling API reference surface.

## Reference surfaces [#reference-surfaces]

* [SDK references](/zh-CN/api-reference/rtm)
* [RESTful APIs](/zh-CN/realtime-media/rtm/rest-api)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use this page to choose the Signaling API reference surface."
  }, {
    heading: "reference-surfaces",
    content: "SDK references"
  }, {
    heading: "reference-surfaces",
    content: "RESTful APIs"
  }],
  headings: [{
    id: "reference-surfaces",
    content: "Reference surfaces"
  }]
};
export let toc = [{
  depth: 2,
  url: "#reference-surfaces",
  title: _jsx(_Fragment, {
    children: "Reference surfaces"
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
      children: "Use this page to choose the Signaling API reference surface."
    }), `
`, _jsx(_components.h2, {
      id: "reference-surfaces",
      children: "Reference surfaces"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtm",
          children: "SDK references"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtm/rest-api",
          children: "RESTful APIs"
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
