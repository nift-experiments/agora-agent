import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SDK 拓展插件",
  description: "SDK 拓展插件帮助你在现有 SDK 能力上进一步增强体验和效果。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

SDK 拓展插件是对现有实时互动能力的增强层，适合在既有 SDK 基础上扩展更丰富的功能和体验。

## 适合哪些场景 [#适合哪些场景]

* 个性化音视频效果
* 扩展式能力接入
* 快速接入第三方增强模块

## 建议先看什么 [#建议先看什么]

如果你已经确定主能力链路，但还需要额外增强体验，再进入 SDK 拓展插件会更高效。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "SDK 拓展插件是对现有实时互动能力的增强层，适合在既有 SDK 基础上扩展更丰富的功能和体验。"
  }, {
    heading: "适合哪些场景",
    content: "个性化音视频效果"
  }, {
    heading: "适合哪些场景",
    content: "扩展式能力接入"
  }, {
    heading: "适合哪些场景",
    content: "快速接入第三方增强模块"
  }, {
    heading: "建议先看什么",
    content: "如果你已经确定主能力链路，但还需要额外增强体验，再进入 SDK 拓展插件会更高效。"
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
      children: "SDK 拓展插件是对现有实时互动能力的增强层，适合在既有 SDK 基础上扩展更丰富的功能和体验。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "个性化音视频效果"
      }), `
`, _jsx(_components.li, {
        children: "扩展式能力接入"
      }), `
`, _jsx(_components.li, {
        children: "快速接入第三方增强模块"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你已经确定主能力链路，但还需要额外增强体验，再进入 SDK 拓展插件会更高效。"
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
