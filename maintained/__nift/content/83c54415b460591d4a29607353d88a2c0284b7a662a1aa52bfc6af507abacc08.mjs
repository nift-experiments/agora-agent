import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "智能体生命周期",
  description: "从创建、启动、更新、打断、查询到停止，梳理智能体会话生命周期中最重要的控制动作。"
};
export let _markdown = `

## 生命周期为什么重要 [#生命周期为什么重要]

在 AI 智能体产品里，是否能稳定控制智能体的启动、更新、停止和恢复，通常比“模型回答得是否更聪明”更早成为真实问题。

## 生命周期的关键动作 [#生命周期的关键动作]

* 创建并启动智能体
* 查询当前状态
* 更新配置
* 主动打断
* 停止并退出频道

## 当前仓库里的对应文档 [#当前仓库里的对应文档]

* [创建并启动智能体](/zh-CN/api-reference/conversational-ai/rest-api/agent/join)
* [查看当前状态](/zh-CN/api-reference/conversational-ai/rest-api/agent/query)
* [处理打断](/zh-CN/ai/interrupt-agent)
* [停止智能体](/zh-CN/api-reference/conversational-ai/rest-api/agent/leave)
* [查看智能体列表](/zh-CN/api-reference/conversational-ai/rest-api/agent/list)

## 推荐设计原则 [#推荐设计原则]

### 把生命周期控制放在后端 [#把生命周期控制放在后端]

创建、更新、停止和权限控制最好由后端统一处理，而不是散在各个客户端里。

### 用事件确认状态，而不是只看请求返回 [#用事件确认状态而不是只看请求返回]

请求成功并不等于运行状态已经稳定，生产环境里应结合回调和事件一起判断。
`;
export let structuredData = {
  contents: [{
    heading: "生命周期为什么重要",
    content: "在 AI 智能体产品里，是否能稳定控制智能体的启动、更新、停止和恢复，通常比“模型回答得是否更聪明”更早成为真实问题。"
  }, {
    heading: "生命周期的关键动作",
    content: "创建并启动智能体"
  }, {
    heading: "生命周期的关键动作",
    content: "查询当前状态"
  }, {
    heading: "生命周期的关键动作",
    content: "更新配置"
  }, {
    heading: "生命周期的关键动作",
    content: "主动打断"
  }, {
    heading: "生命周期的关键动作",
    content: "停止并退出频道"
  }, {
    heading: "当前仓库里的对应文档",
    content: "创建并启动智能体"
  }, {
    heading: "当前仓库里的对应文档",
    content: "查看当前状态"
  }, {
    heading: "当前仓库里的对应文档",
    content: "处理打断"
  }, {
    heading: "当前仓库里的对应文档",
    content: "停止智能体"
  }, {
    heading: "当前仓库里的对应文档",
    content: "查看智能体列表"
  }, {
    heading: "把生命周期控制放在后端",
    content: "创建、更新、停止和权限控制最好由后端统一处理，而不是散在各个客户端里。"
  }, {
    heading: "用事件确认状态而不是只看请求返回",
    content: "请求成功并不等于运行状态已经稳定，生产环境里应结合回调和事件一起判断。"
  }],
  headings: [{
    id: "生命周期为什么重要",
    content: "生命周期为什么重要"
  }, {
    id: "生命周期的关键动作",
    content: "生命周期的关键动作"
  }, {
    id: "当前仓库里的对应文档",
    content: "当前仓库里的对应文档"
  }, {
    id: "推荐设计原则",
    content: "推荐设计原则"
  }, {
    id: "把生命周期控制放在后端",
    content: "把生命周期控制放在后端"
  }, {
    id: "用事件确认状态而不是只看请求返回",
    content: "用事件确认状态，而不是只看请求返回"
  }]
};
export let toc = [{
  depth: 2,
  url: "#生命周期为什么重要",
  title: _jsx(_Fragment, {
    children: "生命周期为什么重要"
  })
}, {
  depth: 2,
  url: "#生命周期的关键动作",
  title: _jsx(_Fragment, {
    children: "生命周期的关键动作"
  })
}, {
  depth: 2,
  url: "#当前仓库里的对应文档",
  title: _jsx(_Fragment, {
    children: "当前仓库里的对应文档"
  })
}, {
  depth: 2,
  url: "#推荐设计原则",
  title: _jsx(_Fragment, {
    children: "推荐设计原则"
  })
}, {
  depth: 3,
  url: "#把生命周期控制放在后端",
  title: _jsx(_Fragment, {
    children: "把生命周期控制放在后端"
  })
}, {
  depth: 3,
  url: "#用事件确认状态而不是只看请求返回",
  title: _jsx(_Fragment, {
    children: "用事件确认状态，而不是只看请求返回"
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
      id: "生命周期为什么重要",
      children: "生命周期为什么重要"
    }), `
`, _jsx(_components.p, {
      children: "在 AI 智能体产品里，是否能稳定控制智能体的启动、更新、停止和恢复，通常比“模型回答得是否更聪明”更早成为真实问题。"
    }), `
`, _jsx(_components.h2, {
      id: "生命周期的关键动作",
      children: "生命周期的关键动作"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "创建并启动智能体"
      }), `
`, _jsx(_components.li, {
        children: "查询当前状态"
      }), `
`, _jsx(_components.li, {
        children: "更新配置"
      }), `
`, _jsx(_components.li, {
        children: "主动打断"
      }), `
`, _jsx(_components.li, {
        children: "停止并退出频道"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "当前仓库里的对应文档",
      children: "当前仓库里的对应文档"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/conversational-ai/rest-api/agent/join",
          children: "创建并启动智能体"
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
          href: "/zh-CN/ai/interrupt-agent",
          children: "处理打断"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/conversational-ai/rest-api/agent/leave",
          children: "停止智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/conversational-ai/rest-api/agent/list",
          children: "查看智能体列表"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐设计原则",
      children: "推荐设计原则"
    }), `
`, _jsx(_components.h3, {
      id: "把生命周期控制放在后端",
      children: "把生命周期控制放在后端"
    }), `
`, _jsx(_components.p, {
      children: "创建、更新、停止和权限控制最好由后端统一处理，而不是散在各个客户端里。"
    }), `
`, _jsx(_components.h3, {
      id: "用事件确认状态而不是只看请求返回",
      children: "用事件确认状态，而不是只看请求返回"
    }), `
`, _jsx(_components.p, {
      children: "请求成功并不等于运行状态已经稳定，生产环境里应结合回调和事件一起判断。"
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
