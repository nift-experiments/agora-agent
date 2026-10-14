import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Enum",
  description: "RTC Android Enum 定义列表。"
};
export let _markdown = `

本页汇总 RTC Android API 参考中的 Enum 定义。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本页汇总 RTC Android API 参考中的 Enum 定义。"
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
    children: "本页汇总 RTC Android API 参考中的 Enum 定义。"
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
