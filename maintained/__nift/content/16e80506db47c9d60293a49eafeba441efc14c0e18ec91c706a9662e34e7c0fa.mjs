import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "运维治理",
  description: "面向控制台、质量观测、状态可见性、计费与安全等生产治理问题的入口。"
};
export let _markdown = `

<div id="rm-console"></div>

## 控制台 [#控制台]

统一管理服务开通、项目和资源配置。

<div id="rm-analytics"></div>

## 水晶球 [#水晶球]

提供通话质量检测、回溯和分析能力。

<div id="rm-status-page"></div>

## Status Page [#status-page]

展示主要产品和服务的可用性与运行状态。

<div id="rm-billing-quotas"></div>

## 计费与配额 [#计费与配额]

帮助团队理解价格、套餐、使用量和限制策略。

<div id="rm-auth-security"></div>

## 鉴权与安全 [#鉴权与安全]

覆盖 Token、基础认证、访问控制和生产环境安全边界。
`;
export let structuredData = {
  contents: [{
    heading: "控制台",
    content: "统一管理服务开通、项目和资源配置。"
  }, {
    heading: "水晶球",
    content: "提供通话质量检测、回溯和分析能力。"
  }, {
    heading: "status-page",
    content: "展示主要产品和服务的可用性与运行状态。"
  }, {
    heading: "计费与配额",
    content: "帮助团队理解价格、套餐、使用量和限制策略。"
  }, {
    heading: "鉴权与安全",
    content: "覆盖 Token、基础认证、访问控制和生产环境安全边界。"
  }],
  headings: [{
    id: "控制台",
    content: "控制台"
  }, {
    id: "水晶球",
    content: "水晶球"
  }, {
    id: "status-page",
    content: "Status Page"
  }, {
    id: "计费与配额",
    content: "计费与配额"
  }, {
    id: "鉴权与安全",
    content: "鉴权与安全"
  }]
};
export let toc = [{
  depth: 2,
  url: "#控制台",
  title: _jsx(_Fragment, {
    children: "控制台"
  })
}, {
  depth: 2,
  url: "#水晶球",
  title: _jsx(_Fragment, {
    children: "水晶球"
  })
}, {
  depth: 2,
  url: "#status-page",
  title: _jsx(_Fragment, {
    children: "Status Page"
  })
}, {
  depth: 2,
  url: "#计费与配额",
  title: _jsx(_Fragment, {
    children: "计费与配额"
  })
}, {
  depth: 2,
  url: "#鉴权与安全",
  title: _jsx(_Fragment, {
    children: "鉴权与安全"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "控制台",
      children: "控制台"
    }), `
`, _jsx(_components.p, {
      children: "统一管理服务开通、项目和资源配置。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "水晶球",
      children: "水晶球"
    }), `
`, _jsx(_components.p, {
      children: "提供通话质量检测、回溯和分析能力。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "status-page",
      children: "Status Page"
    }), `
`, _jsx(_components.p, {
      children: "展示主要产品和服务的可用性与运行状态。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "计费与配额",
      children: "计费与配额"
    }), `
`, _jsx(_components.p, {
      children: "帮助团队理解价格、套餐、使用量和限制策略。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "鉴权与安全",
      children: "鉴权与安全"
    }), `
`, _jsx(_components.p, {
      children: "覆盖 Token、基础认证、访问控制和生产环境安全边界。"
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
