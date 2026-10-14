import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "云市场",
  description: "云市场是实时互动能力选型、购买和生态接入的统一入口。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

云市场帮助团队快速选择、购买并接入适合自己场景的实时互动模块或扩展能力。

## 适合哪些场景 [#适合哪些场景]

* 快速能力选型
* 购买与试用扩展能力
* 账号与能力打通

## 建议先看什么 [#建议先看什么]

如果你的问题不是“如何自己从零实现”，而是“有没有成熟模块可以直接接入”，云市场会是更快的入口。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "云市场帮助团队快速选择、购买并接入适合自己场景的实时互动模块或扩展能力。"
  }, {
    heading: "适合哪些场景",
    content: "快速能力选型"
  }, {
    heading: "适合哪些场景",
    content: "购买与试用扩展能力"
  }, {
    heading: "适合哪些场景",
    content: "账号与能力打通"
  }, {
    heading: "建议先看什么",
    content: "如果你的问题不是“如何自己从零实现”，而是“有没有成熟模块可以直接接入”，云市场会是更快的入口。"
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
      children: "云市场帮助团队快速选择、购买并接入适合自己场景的实时互动模块或扩展能力。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "快速能力选型"
      }), `
`, _jsx(_components.li, {
        children: "购买与试用扩展能力"
      }), `
`, _jsx(_components.li, {
        children: "账号与能力打通"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你的问题不是“如何自己从零实现”，而是“有没有成熟模块可以直接接入”，云市场会是更快的入口。"
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
