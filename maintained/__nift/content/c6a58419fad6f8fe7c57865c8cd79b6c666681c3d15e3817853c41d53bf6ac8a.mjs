import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "FAQ",
  hideToc: true
};
export let _markdown = `

<FaqLanding />
`;
export let structuredData = {
  contents: [],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const { FaqLanding } = props.components || {};
  if (!FaqLanding)
    _missingMdxReference("FaqLanding", true);
  return _jsx(FaqLanding, {});
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
