import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "上线检查清单",
  description: "从鉴权、状态观测、错误处理到支持路径，整理 AI 智能体上线前应该逐项确认的内容。"
};
export let _markdown = `

## 上线前至少确认这些事 [#上线前至少确认这些事]

* 鉴权与 Token 生成方式稳定
* 生命周期控制都在后端统一处理
* 状态、转写、错误和轮次都有可观察入口
* Webhook 与日志链路可用于排障
* 响应码和重试策略已经定义

## 推荐页面 [#推荐页面]

* [鉴权与 Token](../api-reference/conversational-ai/rest-api/authentication.mdx)
* [查看当前状态](/zh-CN/api-reference/conversational-ai/rest-api/agent/query)
* [Webhook 事件](/zh-CN/api-reference/ncs-events)
* [状态码](/zh-CN/api-reference/response-code)
`;
export let structuredData = {
  contents: [{
    heading: "上线前至少确认这些事",
    content: "鉴权与 Token 生成方式稳定"
  }, {
    heading: "上线前至少确认这些事",
    content: "生命周期控制都在后端统一处理"
  }, {
    heading: "上线前至少确认这些事",
    content: "状态、转写、错误和轮次都有可观察入口"
  }, {
    heading: "上线前至少确认这些事",
    content: "Webhook 与日志链路可用于排障"
  }, {
    heading: "上线前至少确认这些事",
    content: "响应码和重试策略已经定义"
  }, {
    heading: "推荐页面",
    content: "鉴权与 Token"
  }, {
    heading: "推荐页面",
    content: "查看当前状态"
  }, {
    heading: "推荐页面",
    content: "Webhook 事件"
  }, {
    heading: "推荐页面",
    content: "状态码"
  }],
  headings: [{
    id: "上线前至少确认这些事",
    content: "上线前至少确认这些事"
  }, {
    id: "推荐页面",
    content: "推荐页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#上线前至少确认这些事",
  title: _jsx(_Fragment, {
    children: "上线前至少确认这些事"
  })
}, {
  depth: 2,
  url: "#推荐页面",
  title: _jsx(_Fragment, {
    children: "推荐页面"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "上线前至少确认这些事",
      children: "上线前至少确认这些事"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "鉴权与 Token 生成方式稳定"
      }), `
`, _jsx(_components.li, {
        children: "生命周期控制都在后端统一处理"
      }), `
`, _jsx(_components.li, {
        children: "状态、转写、错误和轮次都有可观察入口"
      }), `
`, _jsx(_components.li, {
        children: "Webhook 与日志链路可用于排障"
      }), `
`, _jsx(_components.li, {
        children: "响应码和重试策略已经定义"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐页面",
      children: "推荐页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/authentication.mdx",
          children: "鉴权与 Token"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/conversational-ai/rest-api/agent/query",
          children: "查看当前状态"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/ncs-events",
          children: "Webhook 事件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/response-code",
          children: "状态码"
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
