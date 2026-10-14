import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "资源获取",
  description: "本文介绍对话式智能体 (Conversational AI Agent) 所提供的可下载资源。"
};
export let _markdown = `

本文介绍对话式智能体 (Conversational AI Agent) 所提供的可下载资源。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本文介绍对话式智能体 (Conversational AI Agent) 所提供的可下载资源。"
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
    children: "本文介绍对话式智能体 (Conversational AI Agent) 所提供的可下载资源。"
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
