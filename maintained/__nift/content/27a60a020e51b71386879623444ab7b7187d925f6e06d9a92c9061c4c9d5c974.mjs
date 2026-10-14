import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integration Issues",
  hideToc: true
};
export let _markdown = `

<FaqCategory category="integration-issues" />
`;
export let structuredData = {
  contents: [],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const { FaqCategory } = props.components || {};
  if (!FaqCategory)
    _missingMdxReference("FaqCategory", true);
  return _jsx(FaqCategory, {
    category: "integration-issues"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
