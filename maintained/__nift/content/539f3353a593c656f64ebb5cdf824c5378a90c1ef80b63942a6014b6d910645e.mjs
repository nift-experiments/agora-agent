import { jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Contribute an ASR Extension",
  description: "This page has moved to the ASR/TTS extension contribution documentation"
};
export let _markdown = `

This page has moved to [Contribute an ASR extension](./reference/ten-agent/create-asr-extension).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page has moved to Contribute an ASR extension."
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
    children: ["This page has moved to ", _jsx(_components.a, {
      href: "./reference/ten-agent/create-asr-extension",
      children: "Contribute an ASR extension"
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
