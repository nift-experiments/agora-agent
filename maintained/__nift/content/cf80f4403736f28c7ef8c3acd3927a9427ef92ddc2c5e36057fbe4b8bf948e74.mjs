import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "项目",
  description: "了解 Agora 项目如何承接环境划分、凭证管理和服务开通。"
};
export let _markdown = `

## 项目配置 [#项目配置]

项目是 App ID、服务开通和环境配置的主要承载单元。

## 常见任务 [#常见任务]

* 为测试与生产分别创建项目。
* 将 App ID 与服务开通放在同一个项目边界里管理。
* 确保后端凭证与正确的项目对应。

## 相关入口 [#相关入口]

* [打开账户](/zh-CN/introduction/account)
* [打开开通服务](/zh-CN/ai/enable-service)
`;
export let structuredData = {
  contents: [{
    heading: "项目配置",
    content: "项目是 App ID、服务开通和环境配置的主要承载单元。"
  }, {
    heading: "常见任务",
    content: "为测试与生产分别创建项目。"
  }, {
    heading: "常见任务",
    content: "将 App ID 与服务开通放在同一个项目边界里管理。"
  }, {
    heading: "常见任务",
    content: "确保后端凭证与正确的项目对应。"
  }, {
    heading: "相关入口",
    content: "打开账户"
  }, {
    heading: "相关入口",
    content: "打开开通服务"
  }],
  headings: [{
    id: "项目配置",
    content: "项目配置"
  }, {
    id: "常见任务",
    content: "常见任务"
  }, {
    id: "相关入口",
    content: "相关入口"
  }]
};
export let toc = [{
  depth: 2,
  url: "#项目配置",
  title: _jsx(_Fragment, {
    children: "项目配置"
  })
}, {
  depth: 2,
  url: "#常见任务",
  title: _jsx(_Fragment, {
    children: "常见任务"
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
      id: "项目配置",
      children: "项目配置"
    }), `
`, _jsx(_components.p, {
      children: "项目是 App ID、服务开通和环境配置的主要承载单元。"
    }), `
`, _jsx(_components.h2, {
      id: "常见任务",
      children: "常见任务"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "为测试与生产分别创建项目。"
      }), `
`, _jsx(_components.li, {
        children: "将 App ID 与服务开通放在同一个项目边界里管理。"
      }), `
`, _jsx(_components.li, {
        children: "确保后端凭证与正确的项目对应。"
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
          href: "/zh-CN/introduction/account",
          children: "打开账户"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/enable-service",
          children: "打开开通服务"
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
