import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "客户端组件 API",
  description: "当前仓库里的客户端组件能力主要散落在功能指南中，这页帮助你先找到最相关的入口。"
};
export let _markdown = `

## 这页的作用 [#这页的作用]

如果你已经在做客户端组件集成，通常会同时关心消息、字幕、打断、音频路由和事件处理，而不是只看某一个独立接口。

## 当前仓库里最相关的页面 [#当前仓库里最相关的页面]

* [实时字幕](/zh-CN/ai/realtime-sub)
* [发送自定义消息](/zh-CN/ai/send-multimodal-message)
* [处理打断](/zh-CN/ai/interrupt-agent)
* [事件与 Webhook](/zh-CN/ai/listen-agent-events)

## 继续阅读 [#继续阅读]

如果你需要更细的客户端组件 API 参考，可以继续查阅声网现有的 ConvoAI 客户端组件 API 文档仓库或官方 API 参考站点。
`;
export let structuredData = {
  contents: [{
    heading: "这页的作用",
    content: "如果你已经在做客户端组件集成，通常会同时关心消息、字幕、打断、音频路由和事件处理，而不是只看某一个独立接口。"
  }, {
    heading: "当前仓库里最相关的页面",
    content: "实时字幕"
  }, {
    heading: "当前仓库里最相关的页面",
    content: "发送自定义消息"
  }, {
    heading: "当前仓库里最相关的页面",
    content: "处理打断"
  }, {
    heading: "当前仓库里最相关的页面",
    content: "事件与 Webhook"
  }, {
    heading: "继续阅读",
    content: "如果你需要更细的客户端组件 API 参考，可以继续查阅声网现有的 ConvoAI 客户端组件 API 文档仓库或官方 API 参考站点。"
  }],
  headings: [{
    id: "这页的作用",
    content: "这页的作用"
  }, {
    id: "当前仓库里最相关的页面",
    content: "当前仓库里最相关的页面"
  }, {
    id: "继续阅读",
    content: "继续阅读"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这页的作用",
  title: _jsx(_Fragment, {
    children: "这页的作用"
  })
}, {
  depth: 2,
  url: "#当前仓库里最相关的页面",
  title: _jsx(_Fragment, {
    children: "当前仓库里最相关的页面"
  })
}, {
  depth: 2,
  url: "#继续阅读",
  title: _jsx(_Fragment, {
    children: "继续阅读"
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
      id: "这页的作用",
      children: "这页的作用"
    }), `
`, _jsx(_components.p, {
      children: "如果你已经在做客户端组件集成，通常会同时关心消息、字幕、打断、音频路由和事件处理，而不是只看某一个独立接口。"
    }), `
`, _jsx(_components.h2, {
      id: "当前仓库里最相关的页面",
      children: "当前仓库里最相关的页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/realtime-sub",
          children: "实时字幕"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/send-multimodal-message",
          children: "发送自定义消息"
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
          href: "/zh-CN/ai/listen-agent-events",
          children: "事件与 Webhook"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "继续阅读",
      children: "继续阅读"
    }), `
`, _jsx(_components.p, {
      children: "如果你需要更细的客户端组件 API 参考，可以继续查阅声网现有的 ConvoAI 客户端组件 API 文档仓库或官方 API 参考站点。"
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
