import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Does Agora Signaling SDK support emoji?"
};
export let _markdown = `

Agora Signaling SDK supports the Unicode Character Table, so it supports all emoji defined in the Unicode Character Table. You may as well define your own emoji character set, decode based on your specifications, and render the desired emoji at the receiver.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Signaling SDK supports the Unicode Character Table, so it supports all emoji defined in the Unicode Character Table. You may as well define your own emoji character set, decode based on your specifications, and render the desired emoji at the receiver."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return _jsx(_components.p, {
    children: "Agora Signaling SDK supports the Unicode Character Table, so it supports all emoji defined in the Unicode Character Table. You may as well define your own emoji character set, decode based on your specifications, and render the desired emoji at the receiver."
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
