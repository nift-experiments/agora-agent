import { jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Downloads",
  description: "Server Gateway downloads"
};
export let _markdown = `

Download the SDK [here](/en/api-reference/sdks?product=server-gateway\\&platform=linux).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Download the SDK here."
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
    children: ["Download the SDK ", _jsx(_components.a, {
      href: "/en/api-reference/sdks?product=server-gateway&platform=linux",
      children: "here"
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
