import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RESTful",
  description: "Overview of Signaling RESTful APIs."
};
export let _markdown = `

Signaling RESTful APIs provide server-side access to messaging and event query
operations for peer and channel scenarios.

## Reference surfaces [#reference-surfaces]

* [Messaging and Events RESTful APIs](/zh-CN/realtime-media/rtm/rest-api)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `Signaling RESTful APIs provide server-side access to messaging and event query
operations for peer and channel scenarios.`
  }, {
    heading: "reference-surfaces",
    content: "Messaging and Events RESTful APIs"
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
      children: `Signaling RESTful APIs provide server-side access to messaging and event query
operations for peer and channel scenarios.`
    }), `
`, _jsx(_components.h2, {
      id: "reference-surfaces",
      children: "Reference surfaces"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtm/rest-api",
          children: "Messaging and Events RESTful APIs"
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
