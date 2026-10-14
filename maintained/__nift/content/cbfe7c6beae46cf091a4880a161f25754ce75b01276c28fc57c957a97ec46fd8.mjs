import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Downloads",
  description: "Links to the manual downloads for this product, and explanations on how to install them."
};
export let _markdown = `

You use REST calls to retrieve data from Agora Analytics. There are no downloads.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "You use REST calls to retrieve data from Agora Analytics. There are no downloads."
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
    children: "You use REST calls to retrieve data from Agora Analytics. There are no downloads."
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
