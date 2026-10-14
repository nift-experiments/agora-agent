import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "转码",
  description: "转码能力适合把多路媒体流重新编排、转封装或输出成适合分发的格式。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

转码负责把媒体流做格式转换、布局编排和输出变换，是直播、分发和多画面场景里的关键能力。

## 常见形态 [#常见形态]

* 云端转码
* 多画面编排
* 输出格式转换

## 建议先看什么 [#建议先看什么]

如果你主要目标是直播输出和多画面布局，先从云端转码能力开始理解。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "转码负责把媒体流做格式转换、布局编排和输出变换，是直播、分发和多画面场景里的关键能力。"
  }, {
    heading: "常见形态",
    content: "云端转码"
  }, {
    heading: "常见形态",
    content: "多画面编排"
  }, {
    heading: "常见形态",
    content: "输出格式转换"
  }, {
    heading: "建议先看什么",
    content: "如果你主要目标是直播输出和多画面布局，先从云端转码能力开始理解。"
  }],
  headings: [{
    id: "这项能力是什么",
    content: "这项能力是什么"
  }, {
    id: "常见形态",
    content: "常见形态"
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
  url: "#常见形态",
  title: _jsx(_Fragment, {
    children: "常见形态"
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
      children: "转码负责把媒体流做格式转换、布局编排和输出变换，是直播、分发和多画面场景里的关键能力。"
    }), `
`, _jsx(_components.h2, {
      id: "常见形态",
      children: "常见形态"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "云端转码"
      }), `
`, _jsx(_components.li, {
        children: "多画面编排"
      }), `
`, _jsx(_components.li, {
        children: "输出格式转换"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你主要目标是直播输出和多画面布局，先从云端转码能力开始理解。"
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
