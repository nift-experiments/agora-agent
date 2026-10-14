import { jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Shows the pricing policy for Server Gateway."
};
export let _markdown = `

[Contact Sales](https://www.agora.io/en/talk-to-us/) or request support through [Agora Console](https://console.agora.io/).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Contact Sales or request support through Agora Console."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return _jsxs(_components.p, {
    children: [_jsx(_components.a, {
      href: "https://www.agora.io/en/talk-to-us/",
      children: "Contact Sales"
    }), " or request support through ", _jsx(_components.a, {
      href: "https://console.agora.io/",
      children: "Agora Console"
    }), "."]
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
