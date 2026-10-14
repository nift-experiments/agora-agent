import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "成员与角色",
  description: "在团队扩大之前，先明确谁可以访问项目、凭证和生产设置。"
};
export let _markdown = `

## 团队访问控制 [#团队访问控制]

当更多成员加入集成工作后，需要清楚划分项目设置、凭证和生产变更的责任边界。

## 建议关注 [#建议关注]

* 谁负责 Console 配置。
* 如何区分开发访问与生产控制。
* 修改计费、安全和服务状态前如何审查权限。

## 相关入口 [#相关入口]

* [打开账户](/zh-CN/introduction/account)
* [打开隐私和安全](/zh-CN/introduction/security-privacy)
`;
export let structuredData = {
  contents: [{
    heading: "团队访问控制",
    content: "当更多成员加入集成工作后，需要清楚划分项目设置、凭证和生产变更的责任边界。"
  }, {
    heading: "建议关注",
    content: "谁负责 Console 配置。"
  }, {
    heading: "建议关注",
    content: "如何区分开发访问与生产控制。"
  }, {
    heading: "建议关注",
    content: "修改计费、安全和服务状态前如何审查权限。"
  }, {
    heading: "相关入口",
    content: "打开账户"
  }, {
    heading: "相关入口",
    content: "打开隐私和安全"
  }],
  headings: [{
    id: "团队访问控制",
    content: "团队访问控制"
  }, {
    id: "建议关注",
    content: "建议关注"
  }, {
    id: "相关入口",
    content: "相关入口"
  }]
};
export let toc = [{
  depth: 2,
  url: "#团队访问控制",
  title: _jsx(_Fragment, {
    children: "团队访问控制"
  })
}, {
  depth: 2,
  url: "#建议关注",
  title: _jsx(_Fragment, {
    children: "建议关注"
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
      id: "团队访问控制",
      children: "团队访问控制"
    }), `
`, _jsx(_components.p, {
      children: "当更多成员加入集成工作后，需要清楚划分项目设置、凭证和生产变更的责任边界。"
    }), `
`, _jsx(_components.h2, {
      id: "建议关注",
      children: "建议关注"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "谁负责 Console 配置。"
      }), `
`, _jsx(_components.li, {
        children: "如何区分开发访问与生产控制。"
      }), `
`, _jsx(_components.li, {
        children: "修改计费、安全和服务状态前如何审查权限。"
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
          href: "/zh-CN/introduction/security-privacy",
          children: "打开隐私和安全"
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
