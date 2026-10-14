import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "智能体管理",
  description: "用于启动、更新、查询和停止对话式智能体的接口。"
};
export let _markdown = `

智能体管理接口用于控制对话式智能体生命周期、播报、打断和查询会话历史。

## 页面 [#页面]

* [创建对话式智能体](join.md)
* [停止对话式智能体](leave.md)
* [更新智能体配置](update.md)
* [查询智能体状态](query.md)
* [获取智能体列表](list.md)
* [播报自定义消息](speak.md)
* [打断智能体](interrupt.md)
* [发送自定义指令](think.md)
* [获取智能体短期记忆](history.md)
* [查询对话轮次信息](turns.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "智能体管理接口用于控制对话式智能体生命周期、播报、打断和查询会话历史。"
  }, {
    heading: "页面",
    content: "创建对话式智能体"
  }, {
    heading: "页面",
    content: "停止对话式智能体"
  }, {
    heading: "页面",
    content: "更新智能体配置"
  }, {
    heading: "页面",
    content: "查询智能体状态"
  }, {
    heading: "页面",
    content: "获取智能体列表"
  }, {
    heading: "页面",
    content: "播报自定义消息"
  }, {
    heading: "页面",
    content: "打断智能体"
  }, {
    heading: "页面",
    content: "发送自定义指令"
  }, {
    heading: "页面",
    content: "获取智能体短期记忆"
  }, {
    heading: "页面",
    content: "查询对话轮次信息"
  }],
  headings: [{
    id: "页面",
    content: "页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#页面",
  title: _jsx(_Fragment, {
    children: "页面"
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
    children: [_jsx(_components.p, {
      children: "智能体管理接口用于控制对话式智能体生命周期、播报、打断和查询会话历史。"
    }), `
`, _jsx(_components.h2, {
      id: "页面",
      children: "页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "join.md",
          children: "创建对话式智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "leave.md",
          children: "停止对话式智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "update.md",
          children: "更新智能体配置"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "query.md",
          children: "查询智能体状态"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "list.md",
          children: "获取智能体列表"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "speak.md",
          children: "播报自定义消息"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "interrupt.md",
          children: "打断智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "think.md",
          children: "发送自定义指令"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "history.md",
          children: "获取智能体短期记忆"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "turns.md",
          children: "查询对话轮次信息"
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
