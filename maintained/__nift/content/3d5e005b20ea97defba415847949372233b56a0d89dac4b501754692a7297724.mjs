import { jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "最佳实践",
  description: "面向对话式 AI 生产落地的音频优化、时延优化和区域访问限制实践。"
};
export let _markdown = `

* [优化音频设置](audio-settings.md)
* [优化端到端对话延迟](optimize-latency.md)
* [区域访问限制](regional-restrictions.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "优化音频设置"
  }, {
    heading: undefined,
    content: "优化端到端对话延迟"
  }, {
    heading: undefined,
    content: "区域访问限制"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_components.ul, {
    children: [`
`, _jsx(_components.li, {
      children: _jsx(_components.a, {
        href: "audio-settings.md",
        children: "优化音频设置"
      })
    }), `
`, _jsx(_components.li, {
      children: _jsx(_components.a, {
        href: "optimize-latency.md",
        children: "优化端到端对话延迟"
      })
    }), `
`, _jsx(_components.li, {
      children: _jsx(_components.a, {
        href: "regional-restrictions.md",
        children: "区域访问限制"
      })
    }), `
`]
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
