import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "计费与权限",
  description: "把计费、权限、凭证和访问控制作为平台接入的基础条件，而不是散落在不同产品页面里。"
};
export let _markdown = `

## 基础规则 [#基础规则]

### 先准备访问条件 [#先准备访问条件]

在做真正接入之前，先完成服务开通，拿到 App ID 和客户密钥。

### 按能力理解开通关系 [#按能力理解开通关系]

不同能力域和产品可能有不同的开通状态要求，应该尽早理解，避免在联调中途卡住。

### 区分凭证职责 [#区分凭证职责]

在对外暴露能力之前，先区分服务端密钥、客户端身份和临时凭证的边界。

## 相关文档 [#相关文档]

* [打开 ConvoAI 计费说明](/zh-CN/ai/billing)
* [打开开通服务文档](/zh-CN/ai/enable-service)
`;
export let structuredData = {
  contents: [{
    heading: "先准备访问条件",
    content: "在做真正接入之前，先完成服务开通，拿到 App ID 和客户密钥。"
  }, {
    heading: "按能力理解开通关系",
    content: "不同能力域和产品可能有不同的开通状态要求，应该尽早理解，避免在联调中途卡住。"
  }, {
    heading: "区分凭证职责",
    content: "在对外暴露能力之前，先区分服务端密钥、客户端身份和临时凭证的边界。"
  }, {
    heading: "相关文档",
    content: "打开 ConvoAI 计费说明"
  }, {
    heading: "相关文档",
    content: "打开开通服务文档"
  }],
  headings: [{
    id: "基础规则",
    content: "基础规则"
  }, {
    id: "先准备访问条件",
    content: "先准备访问条件"
  }, {
    id: "按能力理解开通关系",
    content: "按能力理解开通关系"
  }, {
    id: "区分凭证职责",
    content: "区分凭证职责"
  }, {
    id: "相关文档",
    content: "相关文档"
  }]
};
export let toc = [{
  depth: 2,
  url: "#基础规则",
  title: _jsx(_Fragment, {
    children: "基础规则"
  })
}, {
  depth: 3,
  url: "#先准备访问条件",
  title: _jsx(_Fragment, {
    children: "先准备访问条件"
  })
}, {
  depth: 3,
  url: "#按能力理解开通关系",
  title: _jsx(_Fragment, {
    children: "按能力理解开通关系"
  })
}, {
  depth: 3,
  url: "#区分凭证职责",
  title: _jsx(_Fragment, {
    children: "区分凭证职责"
  })
}, {
  depth: 2,
  url: "#相关文档",
  title: _jsx(_Fragment, {
    children: "相关文档"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "基础规则",
      children: "基础规则"
    }), `
`, _jsx(_components.h3, {
      id: "先准备访问条件",
      children: "先准备访问条件"
    }), `
`, _jsx(_components.p, {
      children: "在做真正接入之前，先完成服务开通，拿到 App ID 和客户密钥。"
    }), `
`, _jsx(_components.h3, {
      id: "按能力理解开通关系",
      children: "按能力理解开通关系"
    }), `
`, _jsx(_components.p, {
      children: "不同能力域和产品可能有不同的开通状态要求，应该尽早理解，避免在联调中途卡住。"
    }), `
`, _jsx(_components.h3, {
      id: "区分凭证职责",
      children: "区分凭证职责"
    }), `
`, _jsx(_components.p, {
      children: "在对外暴露能力之前，先区分服务端密钥、客户端身份和临时凭证的边界。"
    }), `
`, _jsx(_components.h2, {
      id: "相关文档",
      children: "相关文档"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/billing",
          children: "打开 ConvoAI 计费说明"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/enable-service",
          children: "打开开通服务文档"
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
