import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "getBackgroundColor",
  description: "获取背景颜色的十六进制 RGB 值。"
};
export let _markdown = `

<a id="api_livetranscoding_getbackgroundcolor__prototype" />

\`\`\`java
public int getBackgroundColor()
\`\`\`

<a id="api_livetranscoding_getbackgroundcolor__detailed_desc" />

<a id="api_livetranscoding_getbackgroundcolor__return_values" />

## 返回值 [#返回值]

方法调用成功，返回背景颜色的十六进制 RGB 值。
`;
export let structuredData = {
  contents: [{
    heading: "返回值",
    content: "方法调用成功，返回背景颜色的十六进制 RGB 值。"
  }],
  headings: [{
    id: "返回值",
    content: "返回值"
  }]
};
export let toc = [{
  depth: 2,
  url: "#返回值",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "api_livetranscoding_getbackgroundcolor__prototype"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getBackgroundColor"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_livetranscoding_getbackgroundcolor__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_livetranscoding_getbackgroundcolor__return_values"
    }), `
`, _jsx(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回背景颜色的十六进制 RGB 值。"
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
