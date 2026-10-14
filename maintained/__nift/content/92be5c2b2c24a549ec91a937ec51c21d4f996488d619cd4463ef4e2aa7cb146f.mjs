import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "社区资源",
  description: "把文档导航、发版更新和共享参考入口聚合在一起，方便团队横向跳转。"
};
export let _markdown = `

## 共享资源 [#共享资源]

这类支持性资源可以帮助团队在文档、发版更新和参考材料之间切换时不丢上下文。

## 常用入口 [#常用入口]

* [打开发版说明](/zh-CN/ai/release-notes)
* [打开资源页](/zh-CN/ai/resources)
* [打开客户支持](/zh-CN/introduction/support)
`;
export let structuredData = {
  contents: [{
    heading: "共享资源",
    content: "这类支持性资源可以帮助团队在文档、发版更新和参考材料之间切换时不丢上下文。"
  }, {
    heading: "常用入口",
    content: "打开发版说明"
  }, {
    heading: "常用入口",
    content: "打开资源页"
  }, {
    heading: "常用入口",
    content: "打开客户支持"
  }],
  headings: [{
    id: "共享资源",
    content: "共享资源"
  }, {
    id: "常用入口",
    content: "常用入口"
  }]
};
export let toc = [{
  depth: 2,
  url: "#共享资源",
  title: _jsx(_Fragment, {
    children: "共享资源"
  })
}, {
  depth: 2,
  url: "#常用入口",
  title: _jsx(_Fragment, {
    children: "常用入口"
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
      id: "共享资源",
      children: "共享资源"
    }), `
`, _jsx(_components.p, {
      children: "这类支持性资源可以帮助团队在文档、发版更新和参考材料之间切换时不丢上下文。"
    }), `
`, _jsx(_components.h2, {
      id: "常用入口",
      children: "常用入口"
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
          href: "/zh-CN/ai/resources",
          children: "打开资源页"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/introduction/support",
          children: "打开客户支持"
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
