import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "设备管理",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_device_management" />
`;
export let structuredData = {
  contents: [],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  return _jsx("a", {
    id: "toc_device_management"
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
