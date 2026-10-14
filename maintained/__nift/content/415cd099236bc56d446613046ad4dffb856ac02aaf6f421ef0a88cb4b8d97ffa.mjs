import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "调用限制",
  description: "本文介绍调用声网对话式 AI 引擎 RESTful API 时的限制。"
};
export let _markdown = `

本文介绍调用声网对话式 AI 引擎 RESTful API 时的限制。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本文介绍调用声网对话式 AI 引擎 RESTful API 时的限制。"
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
    children: "本文介绍调用声网对话式 AI 引擎 RESTful API 时的限制。"
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
