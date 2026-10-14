import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Fusion CDN",
  description: "Fusion CDN 直播适合多 CDN 分发和播放质量调度场景，帮助优化直播播放体验。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

Fusion CDN 直播通过接入多家 CDN 供应商，为直播系统提供更好的分发策略和播放体验优化能力。

## 适合哪些场景 [#适合哪些场景]

* 多 CDN 直播分发
* 播放质量优化
* 大规模直播交付

## 建议先看什么 [#建议先看什么]

如果你已经有直播链路但还缺播放质量调度能力，先从 Fusion CDN 入手，而不是从单纯推流能力开始。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "Fusion CDN 直播通过接入多家 CDN 供应商，为直播系统提供更好的分发策略和播放体验优化能力。"
  }, {
    heading: "适合哪些场景",
    content: "多 CDN 直播分发"
  }, {
    heading: "适合哪些场景",
    content: "播放质量优化"
  }, {
    heading: "适合哪些场景",
    content: "大规模直播交付"
  }, {
    heading: "建议先看什么",
    content: "如果你已经有直播链路但还缺播放质量调度能力，先从 Fusion CDN 入手，而不是从单纯推流能力开始。"
  }],
  headings: [{
    id: "这项能力是什么",
    content: "这项能力是什么"
  }, {
    id: "适合哪些场景",
    content: "适合哪些场景"
  }, {
    id: "建议先看什么",
    content: "建议先看什么"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这项能力是什么",
  title: _jsx(_Fragment, {
    children: "这项能力是什么"
  })
}, {
  depth: 2,
  url: "#适合哪些场景",
  title: _jsx(_Fragment, {
    children: "适合哪些场景"
  })
}, {
  depth: 2,
  url: "#建议先看什么",
  title: _jsx(_Fragment, {
    children: "建议先看什么"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "这项能力是什么",
      children: "这项能力是什么"
    }), `
`, _jsx(_components.p, {
      children: "Fusion CDN 直播通过接入多家 CDN 供应商，为直播系统提供更好的分发策略和播放体验优化能力。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "多 CDN 直播分发"
      }), `
`, _jsx(_components.li, {
        children: "播放质量优化"
      }), `
`, _jsx(_components.li, {
        children: "大规模直播交付"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你已经有直播链路但还缺播放质量调度能力，先从 Fusion CDN 入手，而不是从单纯推流能力开始。"
    })]
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
