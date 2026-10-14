import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RTMP 网关",
  description: "RTMP 网关适合衔接标准直播协议和声网实时互动系统之间的协议转换链路。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

RTMP 网关解决的是“实时互动系统”和“标准直播协议系统”之间的协议衔接问题。

## 适合哪些场景 [#适合哪些场景]

* 协议转换
* 直播链路对接
* 与 RTMP 系统互通

## 建议先看什么 [#建议先看什么]

先确认你要解决的是协议互通，还是更完整的直播分发；后者通常还要继续看 Fusion CDN。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "RTMP 网关解决的是“实时互动系统”和“标准直播协议系统”之间的协议衔接问题。"
  }, {
    heading: "适合哪些场景",
    content: "协议转换"
  }, {
    heading: "适合哪些场景",
    content: "直播链路对接"
  }, {
    heading: "适合哪些场景",
    content: "与 RTMP 系统互通"
  }, {
    heading: "建议先看什么",
    content: "先确认你要解决的是协议互通，还是更完整的直播分发；后者通常还要继续看 Fusion CDN。"
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
      children: "RTMP 网关解决的是“实时互动系统”和“标准直播协议系统”之间的协议衔接问题。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "协议转换"
      }), `
`, _jsx(_components.li, {
        children: "直播链路对接"
      }), `
`, _jsx(_components.li, {
        children: "与 RTMP 系统互通"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "先确认你要解决的是协议互通，还是更完整的直播分发；后者通常还要继续看 Fusion CDN。"
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
