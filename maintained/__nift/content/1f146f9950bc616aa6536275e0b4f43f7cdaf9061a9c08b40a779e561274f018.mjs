import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "即时通讯 IM",
  description: "即时通讯 IM 面向更完整的聊天云服务场景，适合承接高可靠、低时延和全球化消息系统需求。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

IM 适合构建更完整的聊天系统，而不只是频道级实时消息。它通常覆盖会话、联系人、历史消息和全球化消息服务。

## 适合哪些场景 [#适合哪些场景]

* 应用内聊天
* 社交互动
* 客服消息系统
* 长连接消息服务

## 当前可参考的依据 [#当前可参考的依据]

在现有声网产品结构里，IM 和 RTM 是并列能力。RTM 更偏实时状态与协作，IM 更偏完整聊天系统。

## 建议先看什么 [#建议先看什么]

如果你要做的是完整聊天产品，而不是仅在 RTC 房间里补消息功能，就应该优先考虑 IM。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "IM 适合构建更完整的聊天系统，而不只是频道级实时消息。它通常覆盖会话、联系人、历史消息和全球化消息服务。"
  }, {
    heading: "适合哪些场景",
    content: "应用内聊天"
  }, {
    heading: "适合哪些场景",
    content: "社交互动"
  }, {
    heading: "适合哪些场景",
    content: "客服消息系统"
  }, {
    heading: "适合哪些场景",
    content: "长连接消息服务"
  }, {
    heading: "当前可参考的依据",
    content: "在现有声网产品结构里，IM 和 RTM 是并列能力。RTM 更偏实时状态与协作，IM 更偏完整聊天系统。"
  }, {
    heading: "建议先看什么",
    content: "如果你要做的是完整聊天产品，而不是仅在 RTC 房间里补消息功能，就应该优先考虑 IM。"
  }],
  headings: [{
    id: "这项能力是什么",
    content: "这项能力是什么"
  }, {
    id: "适合哪些场景",
    content: "适合哪些场景"
  }, {
    id: "当前可参考的依据",
    content: "当前可参考的依据"
  }, {
    id: "建议先看什么",
    content: "建议先看什么"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这项能力是什么",
  title: _jsx(_Fragment, {
    children: "这项能力是什么"
  })
}, {
  depth: 2,
  url: "#适合哪些场景",
  title: _jsx(_Fragment, {
    children: "适合哪些场景"
  })
}, {
  depth: 2,
  url: "#当前可参考的依据",
  title: _jsx(_Fragment, {
    children: "当前可参考的依据"
  })
}, {
  depth: 2,
  url: "#建议先看什么",
  title: _jsx(_Fragment, {
    children: "建议先看什么"
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
      id: "这项能力是什么",
      children: "这项能力是什么"
    }), `
`, _jsx(_components.p, {
      children: "IM 适合构建更完整的聊天系统，而不只是频道级实时消息。它通常覆盖会话、联系人、历史消息和全球化消息服务。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "应用内聊天"
      }), `
`, _jsx(_components.li, {
        children: "社交互动"
      }), `
`, _jsx(_components.li, {
        children: "客服消息系统"
      }), `
`, _jsx(_components.li, {
        children: "长连接消息服务"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "当前可参考的依据",
      children: "当前可参考的依据"
    }), `
`, _jsx(_components.p, {
      children: "在现有声网产品结构里，IM 和 RTM 是并列能力。RTM 更偏实时状态与协作，IM 更偏完整聊天系统。"
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你要做的是完整聊天产品，而不是仅在 RTC 房间里补消息功能，就应该优先考虑 IM。"
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
