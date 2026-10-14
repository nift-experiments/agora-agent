import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RTC",
  description: "RTC 客户端 SDK API 参考。"
};
export let _markdown = `

按平台浏览 RTC 客户端 SDK API 参考。

## 平台 [#平台]

* [Android API Reference](android)：查看当前版本的 Android RTC API Reference。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "按平台浏览 RTC 客户端 SDK API 参考。"
  }, {
    heading: "平台",
    content: "Android API Reference：查看当前版本的 Android RTC API Reference。"
  }],
  headings: [{
    id: "平台",
    content: "平台"
  }]
};
export let toc = [{
  depth: 2,
  url: "#平台",
  title: _jsx(_Fragment, {
    children: "平台"
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
    children: [_jsx(_components.p, {
      children: "按平台浏览 RTC 客户端 SDK API 参考。"
    }), `
`, _jsx(_components.h2, {
      id: "平台",
      children: "平台"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "android",
          children: "Android API Reference"
        }), "：查看当前版本的 Android RTC API Reference。"]
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
