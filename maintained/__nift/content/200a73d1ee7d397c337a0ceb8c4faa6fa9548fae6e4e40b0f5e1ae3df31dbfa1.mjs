import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Android API 参考",
  description: "RTC Android 客户端 API 参考。"
};
export let _markdown = `

本节包含 RTC Android 客户端 API 参考。选择版本查看平台 API、回调、类和枚举。

## 版本 [#版本]

* [v4.6.2](/zh-CN/api-reference/rtc/android/overview)
* [v4.6.0](/zh-CN/api-reference/rtc/android/4.6.0/overview)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本节包含 RTC Android 客户端 API 参考。选择版本查看平台 API、回调、类和枚举。"
  }, {
    heading: "版本",
    content: "v4.6.2"
  }, {
    heading: "版本",
    content: "v4.6.0"
  }],
  headings: [{
    id: "版本",
    content: "版本"
  }]
};
export let toc = [{
  depth: 2,
  url: "#版本",
  title: _jsx(_Fragment, {
    children: "版本"
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
      children: "本节包含 RTC Android 客户端 API 参考。选择版本查看平台 API、回调、类和枚举。"
    }), `
`, _jsx(_components.h2, {
      id: "版本",
      children: "版本"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/overview",
          children: "v4.6.2"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/4.6.0/overview",
          children: "v4.6.0"
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
