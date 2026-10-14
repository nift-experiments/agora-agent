import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "水晶球",
  description: "水晶球面向质量检测、回溯和分析场景，帮助团队理解实时体验是否稳定。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

水晶球负责承接质量观测、问题回溯和数据分析，是上线后的质量定位工具。

## 适合哪些场景 [#适合哪些场景]

* 通话质量分析
* 问题排查
* 实时链路回溯

## 建议先看什么 [#建议先看什么]

如果你的系统已经上线，或者经常需要追踪质量问题，水晶球就是优先补齐的治理能力。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "水晶球负责承接质量观测、问题回溯和数据分析，是上线后的质量定位工具。"
  }, {
    heading: "适合哪些场景",
    content: "通话质量分析"
  }, {
    heading: "适合哪些场景",
    content: "问题排查"
  }, {
    heading: "适合哪些场景",
    content: "实时链路回溯"
  }, {
    heading: "建议先看什么",
    content: "如果你的系统已经上线，或者经常需要追踪质量问题，水晶球就是优先补齐的治理能力。"
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
      children: "水晶球负责承接质量观测、问题回溯和数据分析，是上线后的质量定位工具。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "通话质量分析"
      }), `
`, _jsx(_components.li, {
        children: "问题排查"
      }), `
`, _jsx(_components.li, {
        children: "实时链路回溯"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你的系统已经上线，或者经常需要追踪质量问题，水晶球就是优先补齐的治理能力。"
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
