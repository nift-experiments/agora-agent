import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "开通服务与准备凭证",
  description: "在真正进入某一类实时与媒体能力前，先完成控制台开通、项目准备和基础凭证配置。"
};
export let _markdown = `

## 为什么这一步总是先发生 [#为什么这一步总是先发生]

无论你最终要做 AI、RTC、RTM、录制还是转码，第一步通常都不是“写代码”，而是先确认控制台服务、项目、App ID、凭证和鉴权方式。

## 你至少要准备什么 [#你至少要准备什么]

* 项目和 App ID
* 客户 ID / 客户密钥
* Token 生成方式
* 服务开通状态
* 生产与测试环境边界

## 推荐做法 [#推荐做法]

先把控制面和凭证准备好，再进入具体产品页，可以避免中途因为权限、配额或鉴权方式不一致而返工。
`;
export let structuredData = {
  contents: [{
    heading: "为什么这一步总是先发生",
    content: "无论你最终要做 AI、RTC、RTM、录制还是转码，第一步通常都不是“写代码”，而是先确认控制台服务、项目、App ID、凭证和鉴权方式。"
  }, {
    heading: "你至少要准备什么",
    content: "项目和 App ID"
  }, {
    heading: "你至少要准备什么",
    content: "客户 ID / 客户密钥"
  }, {
    heading: "你至少要准备什么",
    content: "Token 生成方式"
  }, {
    heading: "你至少要准备什么",
    content: "服务开通状态"
  }, {
    heading: "你至少要准备什么",
    content: "生产与测试环境边界"
  }, {
    heading: "推荐做法",
    content: "先把控制面和凭证准备好，再进入具体产品页，可以避免中途因为权限、配额或鉴权方式不一致而返工。"
  }],
  headings: [{
    id: "为什么这一步总是先发生",
    content: "为什么这一步总是先发生"
  }, {
    id: "你至少要准备什么",
    content: "你至少要准备什么"
  }, {
    id: "推荐做法",
    content: "推荐做法"
  }]
};
export let toc = [{
  depth: 2,
  url: "#为什么这一步总是先发生",
  title: _jsx(_Fragment, {
    children: "为什么这一步总是先发生"
  })
}, {
  depth: 2,
  url: "#你至少要准备什么",
  title: _jsx(_Fragment, {
    children: "你至少要准备什么"
  })
}, {
  depth: 2,
  url: "#推荐做法",
  title: _jsx(_Fragment, {
    children: "推荐做法"
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
      id: "为什么这一步总是先发生",
      children: "为什么这一步总是先发生"
    }), `
`, _jsx(_components.p, {
      children: "无论你最终要做 AI、RTC、RTM、录制还是转码，第一步通常都不是“写代码”，而是先确认控制台服务、项目、App ID、凭证和鉴权方式。"
    }), `
`, _jsx(_components.h2, {
      id: "你至少要准备什么",
      children: "你至少要准备什么"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "项目和 App ID"
      }), `
`, _jsx(_components.li, {
        children: "客户 ID / 客户密钥"
      }), `
`, _jsx(_components.li, {
        children: "Token 生成方式"
      }), `
`, _jsx(_components.li, {
        children: "服务开通状态"
      }), `
`, _jsx(_components.li, {
        children: "生产与测试环境边界"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐做法",
      children: "推荐做法"
    }), `
`, _jsx(_components.p, {
      children: "先把控制面和凭证准备好，再进入具体产品页，可以避免中途因为权限、配额或鉴权方式不一致而返工。"
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
