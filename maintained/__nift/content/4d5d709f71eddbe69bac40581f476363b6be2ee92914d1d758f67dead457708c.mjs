import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "示例配方",
  description: "浏览 Agora Voice AI 的快速开始、集成方案与示例实现。"
};
export let _markdown = `

浏览 Agora Voice AI 的快速开始、集成方案与示例实现。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "浏览 Agora Voice AI 的快速开始、集成方案与示例实现。"
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
    children: "浏览 Agora Voice AI 的快速开始、集成方案与示例实现。"
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
