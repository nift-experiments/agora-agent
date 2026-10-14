import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "In Signaling SDK, does the call frequency limit refer to the limit of one client instance?"
};
export let _markdown = `

In Signaling SDK, the call frequency limit refers to the limit of one client instance.

* For the native platform, you can increase the call limit of an API by creating multiple client instances.
* For the web platform, we **do not recommend** increasing the call limit by creating multiple client instances.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In Signaling SDK, the call frequency limit refers to the limit of one client instance."
  }, {
    heading: undefined,
    content: "For the native platform, you can increase the call limit of an API by creating multiple client instances."
  }, {
    heading: undefined,
    content: "For the web platform, we **do not recommend** increasing the call limit by creating multiple client instances."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In Signaling SDK, the call frequency limit refers to the limit of one client instance."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "For the native platform, you can increase the call limit of an API by creating multiple client instances."
      }), `
`, _jsxs(_components.li, {
        children: ["For the web platform, we ", _jsx(_components.strong, {
          children: "do not recommend"
        }), " increasing the call limit by creating multiple client instances."]
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
