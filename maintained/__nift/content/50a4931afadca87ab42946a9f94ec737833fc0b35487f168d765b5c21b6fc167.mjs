import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "计费",
  description: "计费能力帮助团队理解价格、套餐、配额和使用量与产品设计之间的关系。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

计费相关文档帮助团队理解价格策略、套餐差异、配额限制和实际使用量之间的关系。

## 适合哪些场景 [#适合哪些场景]

* 成本评估
* 套餐选择
* 配额规划
* 上线预算控制

## 建议先看什么 [#建议先看什么]

如果你已经明确产品方向，计费通常应该在正式上线前尽早确认，而不是最后才补。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "计费相关文档帮助团队理解价格策略、套餐差异、配额限制和实际使用量之间的关系。"
  }, {
    heading: "适合哪些场景",
    content: "成本评估"
  }, {
    heading: "适合哪些场景",
    content: "套餐选择"
  }, {
    heading: "适合哪些场景",
    content: "配额规划"
  }, {
    heading: "适合哪些场景",
    content: "上线预算控制"
  }, {
    heading: "建议先看什么",
    content: "如果你已经明确产品方向，计费通常应该在正式上线前尽早确认，而不是最后才补。"
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
      children: "计费相关文档帮助团队理解价格策略、套餐差异、配额限制和实际使用量之间的关系。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "成本评估"
      }), `
`, _jsx(_components.li, {
        children: "套餐选择"
      }), `
`, _jsx(_components.li, {
        children: "配额规划"
      }), `
`, _jsx(_components.li, {
        children: "上线预算控制"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你已经明确产品方向，计费通常应该在正式上线前尽早确认，而不是最后才补。"
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
