import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "传递自定义信息",
  description: "把业务状态、用户上下文和房间信息传递给智能体，让回复更贴合当前场景。"
};
export let _markdown = `

很多业务场景下，用户真正需要的不是通用问答，而是“结合当前上下文之后”的回答。你可以把业务状态、用户属性、房间信息或临时操作结果传给智能体，让它更好地理解当前场景。

## 典型场景 [#典型场景]

* 把当前房间状态、分数、选中内容、设备模式等信息传给智能体
* 把页面跳转、按钮点击等事件转成上下文
* 根据当前租户、用户等级、实验分组改变智能体的回应方式

## 常见实现方式 [#常见实现方式]

### 方式一：在启动智能体时传递固定信息 [#方式一在启动智能体时传递固定信息]

如果某些业务信息从会话开始就已确定，可以在创建智能体时通过请求参数或标签一并传入。

### 方式二：在会话中通过 RTM 或自定义指令传递动态信息 [#方式二在会话中通过-rtm-或自定义指令传递动态信息]

如果上下文会在会话中变化，推荐结合客户端组件和 RTM，把这些信息实时注入到当前会话。

### 方式三：在自定义 LLM 服务端拼接上下文 [#方式三在自定义-llm-服务端拼接上下文]

如果你已经使用自定义 LLM，可以在后端收到请求后，把业务上下文和短期记忆一起拼接，再发给模型服务。

## 实践建议 [#实践建议]

* **把稳定信息前置**：例如租户、角色、产品配置，适合在启动时就传。
* **把动态信息实时注入**：例如按钮事件、用户状态变化、房间状态变化。
* **区分“上下文”与“指令”**：上下文是供模型理解环境，指令则直接改变当前轮次行为。

## 相关页面 [#相关页面]

* [自定义模型集成](custom-llm.mdx)
* [多轮对话中的短期记忆](short-term-memory.mdx)
* [监听运行时事件](get-runtime-events.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "很多业务场景下，用户真正需要的不是通用问答，而是“结合当前上下文之后”的回答。你可以把业务状态、用户属性、房间信息或临时操作结果传给智能体，让它更好地理解当前场景。"
  }, {
    heading: "典型场景",
    content: "把当前房间状态、分数、选中内容、设备模式等信息传给智能体"
  }, {
    heading: "典型场景",
    content: "把页面跳转、按钮点击等事件转成上下文"
  }, {
    heading: "典型场景",
    content: "根据当前租户、用户等级、实验分组改变智能体的回应方式"
  }, {
    heading: "方式一在启动智能体时传递固定信息",
    content: "如果某些业务信息从会话开始就已确定，可以在创建智能体时通过请求参数或标签一并传入。"
  }, {
    heading: "方式二在会话中通过-rtm-或自定义指令传递动态信息",
    content: "如果上下文会在会话中变化，推荐结合客户端组件和 RTM，把这些信息实时注入到当前会话。"
  }, {
    heading: "方式三在自定义-llm-服务端拼接上下文",
    content: "如果你已经使用自定义 LLM，可以在后端收到请求后，把业务上下文和短期记忆一起拼接，再发给模型服务。"
  }, {
    heading: "实践建议",
    content: "**把稳定信息前置**：例如租户、角色、产品配置，适合在启动时就传。"
  }, {
    heading: "实践建议",
    content: "**把动态信息实时注入**：例如按钮事件、用户状态变化、房间状态变化。"
  }, {
    heading: "实践建议",
    content: "**区分“上下文”与“指令”**：上下文是供模型理解环境，指令则直接改变当前轮次行为。"
  }, {
    heading: "相关页面",
    content: "自定义模型集成"
  }, {
    heading: "相关页面",
    content: "多轮对话中的短期记忆"
  }, {
    heading: "相关页面",
    content: "监听运行时事件"
  }],
  headings: [{
    id: "典型场景",
    content: "典型场景"
  }, {
    id: "常见实现方式",
    content: "常见实现方式"
  }, {
    id: "方式一在启动智能体时传递固定信息",
    content: "方式一：在启动智能体时传递固定信息"
  }, {
    id: "方式二在会话中通过-rtm-或自定义指令传递动态信息",
    content: "方式二：在会话中通过 RTM 或自定义指令传递动态信息"
  }, {
    id: "方式三在自定义-llm-服务端拼接上下文",
    content: "方式三：在自定义 LLM 服务端拼接上下文"
  }, {
    id: "实践建议",
    content: "实践建议"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#典型场景",
  title: _jsx(_Fragment, {
    children: "典型场景"
  })
}, {
  depth: 2,
  url: "#常见实现方式",
  title: _jsx(_Fragment, {
    children: "常见实现方式"
  })
}, {
  depth: 3,
  url: "#方式一在启动智能体时传递固定信息",
  title: _jsx(_Fragment, {
    children: "方式一：在启动智能体时传递固定信息"
  })
}, {
  depth: 3,
  url: "#方式二在会话中通过-rtm-或自定义指令传递动态信息",
  title: _jsx(_Fragment, {
    children: "方式二：在会话中通过 RTM 或自定义指令传递动态信息"
  })
}, {
  depth: 3,
  url: "#方式三在自定义-llm-服务端拼接上下文",
  title: _jsx(_Fragment, {
    children: "方式三：在自定义 LLM 服务端拼接上下文"
  })
}, {
  depth: 2,
  url: "#实践建议",
  title: _jsx(_Fragment, {
    children: "实践建议"
  })
}, {
  depth: 2,
  url: "#相关页面",
  title: _jsx(_Fragment, {
    children: "相关页面"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "很多业务场景下，用户真正需要的不是通用问答，而是“结合当前上下文之后”的回答。你可以把业务状态、用户属性、房间信息或临时操作结果传给智能体，让它更好地理解当前场景。"
    }), `
`, _jsx(_components.h2, {
      id: "典型场景",
      children: "典型场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "把当前房间状态、分数、选中内容、设备模式等信息传给智能体"
      }), `
`, _jsx(_components.li, {
        children: "把页面跳转、按钮点击等事件转成上下文"
      }), `
`, _jsx(_components.li, {
        children: "根据当前租户、用户等级、实验分组改变智能体的回应方式"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "常见实现方式",
      children: "常见实现方式"
    }), `
`, _jsx(_components.h3, {
      id: "方式一在启动智能体时传递固定信息",
      children: "方式一：在启动智能体时传递固定信息"
    }), `
`, _jsx(_components.p, {
      children: "如果某些业务信息从会话开始就已确定，可以在创建智能体时通过请求参数或标签一并传入。"
    }), `
`, _jsx(_components.h3, {
      id: "方式二在会话中通过-rtm-或自定义指令传递动态信息",
      children: "方式二：在会话中通过 RTM 或自定义指令传递动态信息"
    }), `
`, _jsx(_components.p, {
      children: "如果上下文会在会话中变化，推荐结合客户端组件和 RTM，把这些信息实时注入到当前会话。"
    }), `
`, _jsx(_components.h3, {
      id: "方式三在自定义-llm-服务端拼接上下文",
      children: "方式三：在自定义 LLM 服务端拼接上下文"
    }), `
`, _jsx(_components.p, {
      children: "如果你已经使用自定义 LLM，可以在后端收到请求后，把业务上下文和短期记忆一起拼接，再发给模型服务。"
    }), `
`, _jsx(_components.h2, {
      id: "实践建议",
      children: "实践建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "把稳定信息前置"
        }), "：例如租户、角色、产品配置，适合在启动时就传。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "把动态信息实时注入"
        }), "：例如按钮事件、用户状态变化、房间状态变化。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "区分“上下文”与“指令”"
        }), "：上下文是供模型理解环境，指令则直接改变当前轮次行为。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "相关页面",
      children: "相关页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "custom-llm.mdx",
          children: "自定义模型集成"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "short-term-memory.mdx",
          children: "多轮对话中的短期记忆"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "get-runtime-events.mdx",
          children: "监听运行时事件"
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
