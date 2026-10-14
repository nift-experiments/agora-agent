import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "推流",
  description: "推流能力适合把实时互动内容输出到直播分发链路或其它媒体消费系统中。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

推流把实时互动频道里的内容输出到更广泛的直播或媒体分发系统中，是从互动走向分发的重要一步。

## 适合哪些场景 [#适合哪些场景]

* 旁路直播
* 互动内容对外分发
* 需要进入 CDN 或直播链路的实时内容

## 建议先看什么 [#建议先看什么]

先确认你需要的是旁路推流还是更完整的直播分发能力；如果后续还要多 CDN 调度，再进入 Fusion CDN 直播。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "推流把实时互动频道里的内容输出到更广泛的直播或媒体分发系统中，是从互动走向分发的重要一步。"
  }, {
    heading: "适合哪些场景",
    content: "旁路直播"
  }, {
    heading: "适合哪些场景",
    content: "互动内容对外分发"
  }, {
    heading: "适合哪些场景",
    content: "需要进入 CDN 或直播链路的实时内容"
  }, {
    heading: "建议先看什么",
    content: "先确认你需要的是旁路推流还是更完整的直播分发能力；如果后续还要多 CDN 调度，再进入 Fusion CDN 直播。"
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
      children: "推流把实时互动频道里的内容输出到更广泛的直播或媒体分发系统中，是从互动走向分发的重要一步。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "旁路直播"
      }), `
`, _jsx(_components.li, {
        children: "互动内容对外分发"
      }), `
`, _jsx(_components.li, {
        children: "需要进入 CDN 或直播链路的实时内容"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "先确认你需要的是旁路推流还是更完整的直播分发能力；如果后续还要多 CDN 调度，再进入 Fusion CDN 直播。"
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
