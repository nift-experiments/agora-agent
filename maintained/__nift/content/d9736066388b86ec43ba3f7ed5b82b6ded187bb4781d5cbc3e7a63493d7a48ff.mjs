import { jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Common problems",
  description: "Troubleshoot common Video Calling integration and runtime issues."
};
export let _markdown = `

See the [Help](/en/api-reference/faq) section to find solutions for the most frequently encountered issues.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "See the Help section to find solutions for the most frequently encountered issues."
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
    children: ["See the ", _jsx(_components.a, {
      href: "/en/api-reference/faq",
      children: "Help"
    }), " section to find solutions for the most frequently encountered issues."]
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
