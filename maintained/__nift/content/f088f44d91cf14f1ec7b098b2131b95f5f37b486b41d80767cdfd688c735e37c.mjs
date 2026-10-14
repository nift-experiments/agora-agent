import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Android API 参考",
  description: "RTC Android 客户端 API 参考。"
};
export let _markdown = `

本目录迁移自 RTC Android 旧版 API 参考，保留原有专题分组、稳定锚点和对象页跳转。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本目录迁移自 RTC Android 旧版 API 参考，保留原有专题分组、稳定锚点和对象页跳转。"
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
    children: "本目录迁移自 RTC Android 旧版 API 参考，保留原有专题分组、稳定锚点和对象页跳转。"
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
