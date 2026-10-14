import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "用量分析",
  description: "当集成从第一个 demo 走向正式上线后，用量和分析会变得越来越重要。"
};
export let _markdown = `

## 需要关注什么 [#需要关注什么]

用量与分析可以帮助团队判断采用情况、质量表现和运维状态是否符合预期。

## 常见问题 [#常见问题]

* 哪些能力使用最多？
* 哪些环节容易出错或被打断？
* 上线前还应该检查哪些信号？

## 相关入口 [#相关入口]

* [打开发版说明](/zh-CN/ai/release-notes)
* [打开最佳实践](/zh-CN/ai/best-practices)
`;
export let structuredData = {
  contents: [{
    heading: "需要关注什么",
    content: "用量与分析可以帮助团队判断采用情况、质量表现和运维状态是否符合预期。"
  }, {
    heading: "常见问题",
    content: "哪些能力使用最多？"
  }, {
    heading: "常见问题",
    content: "哪些环节容易出错或被打断？"
  }, {
    heading: "常见问题",
    content: "上线前还应该检查哪些信号？"
  }, {
    heading: "相关入口",
    content: "打开发版说明"
  }, {
    heading: "相关入口",
    content: "打开最佳实践"
  }],
  headings: [{
    id: "需要关注什么",
    content: "需要关注什么"
  }, {
    id: "常见问题",
    content: "常见问题"
  }, {
    id: "相关入口",
    content: "相关入口"
  }]
};
export let toc = [{
  depth: 2,
  url: "#需要关注什么",
  title: _jsx(_Fragment, {
    children: "需要关注什么"
  })
}, {
  depth: 2,
  url: "#常见问题",
  title: _jsx(_Fragment, {
    children: "常见问题"
  })
}, {
  depth: 2,
  url: "#相关入口",
  title: _jsx(_Fragment, {
    children: "相关入口"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "需要关注什么",
      children: "需要关注什么"
    }), `
`, _jsx(_components.p, {
      children: "用量与分析可以帮助团队判断采用情况、质量表现和运维状态是否符合预期。"
    }), `
`, _jsx(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "哪些能力使用最多？"
      }), `
`, _jsx(_components.li, {
        children: "哪些环节容易出错或被打断？"
      }), `
`, _jsx(_components.li, {
        children: "上线前还应该检查哪些信号？"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "相关入口",
      children: "相关入口"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/release-notes",
          children: "打开发版说明"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/best-practices",
          children: "打开最佳实践"
        })
      }), `
`]
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
