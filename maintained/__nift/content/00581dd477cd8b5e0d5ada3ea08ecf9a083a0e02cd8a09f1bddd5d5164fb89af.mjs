import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "navigation-landing",
  title: "SDKs",
  description: "Add Agora SDKs to your project by platform, product, and version. The latest version is selected by default.",
  hideToc: true
};
export let _markdown = `

<SdksCatalog />
`;
export let structuredData = {
  contents: [],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const { SdksCatalog } = props.components || {};
  if (!SdksCatalog)
    _missingMdxReference("SdksCatalog", true);
  return _jsx(SdksCatalog, {});
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
