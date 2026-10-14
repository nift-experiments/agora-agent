import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "测试智能体",
  description: "在智能体真正进入生产前，建议如何验证会话、语音、状态和事件链路。"
};
export let _markdown = `

## 建议重点验证 [#建议重点验证]

* 是否能稳定创建和停止智能体
* 是否能听到正确的 TTS 回复
* 字幕、状态和错误是否同步到应用
* 打断、中途恢复和异常退出是否符合预期

## 推荐页面 [#推荐页面]

* [语音 AI 快速开始](/zh-CN/ai/quick-start)
* [查看当前状态](/zh-CN/api-reference/conversational-ai/rest-api/agent/query)
* [对话轮次](/zh-CN/api-reference/conversational-ai/rest-api/agent/turns)
* [状态码](/zh-CN/api-reference/response-code)
`;
export let structuredData = {
  contents: [{
    heading: "建议重点验证",
    content: "是否能稳定创建和停止智能体"
  }, {
    heading: "建议重点验证",
    content: "是否能听到正确的 TTS 回复"
  }, {
    heading: "建议重点验证",
    content: "字幕、状态和错误是否同步到应用"
  }, {
    heading: "建议重点验证",
    content: "打断、中途恢复和异常退出是否符合预期"
  }, {
    heading: "推荐页面",
    content: "语音 AI 快速开始"
  }, {
    heading: "推荐页面",
    content: "查看当前状态"
  }, {
    heading: "推荐页面",
    content: "对话轮次"
  }, {
    heading: "推荐页面",
    content: "状态码"
  }],
  headings: [{
    id: "建议重点验证",
    content: "建议重点验证"
  }, {
    id: "推荐页面",
    content: "推荐页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#建议重点验证",
  title: _jsx(_Fragment, {
    children: "建议重点验证"
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
      id: "建议重点验证",
      children: "建议重点验证"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "是否能稳定创建和停止智能体"
      }), `
`, _jsx(_components.li, {
        children: "是否能听到正确的 TTS 回复"
      }), `
`, _jsx(_components.li, {
        children: "字幕、状态和错误是否同步到应用"
      }), `
`, _jsx(_components.li, {
        children: "打断、中途恢复和异常退出是否符合预期"
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
          href: "/zh-CN/ai/quick-start",
          children: "语音 AI 快速开始"
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
          href: "/zh-CN/api-reference/conversational-ai/rest-api/agent/turns",
          children: "对话轮次"
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
