import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "关键概念",
  description: "本文介绍使用声网对话式 AI 引擎需要了解的概念。"
};
export let _markdown = `

本文介绍使用声网对话式 AI 引擎需要了解的概念。

## 对话式智能体 [#对话式智能体]

对话式智能体 (Conversational AI Agent) 是声网对话式 AI 引擎创建的，是实现对话式 AI 功能的基础。

## 优雅打断 [#优雅打断]

## 短期记忆 [#短期记忆]

## 客户端组件 [#客户端组件]

## 智能体状态 [#智能体状态]

智能体

## 数字人 [#数字人]

## 实时字幕 [#实时字幕]

### 逐字渲染 [#逐字渲染]

### 逐句渲染 [#逐句渲染]
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本文介绍使用声网对话式 AI 引擎需要了解的概念。"
  }, {
    heading: "对话式智能体",
    content: "对话式智能体 (Conversational AI Agent) 是声网对话式 AI 引擎创建的，是实现对话式 AI 功能的基础。"
  }, {
    heading: "智能体状态",
    content: "智能体"
  }],
  headings: [{
    id: "对话式智能体",
    content: "对话式智能体"
  }, {
    id: "优雅打断",
    content: "优雅打断"
  }, {
    id: "短期记忆",
    content: "短期记忆"
  }, {
    id: "客户端组件",
    content: "客户端组件"
  }, {
    id: "智能体状态",
    content: "智能体状态"
  }, {
    id: "数字人",
    content: "数字人"
  }, {
    id: "实时字幕",
    content: "实时字幕"
  }, {
    id: "逐字渲染",
    content: "逐字渲染"
  }, {
    id: "逐句渲染",
    content: "逐句渲染"
  }]
};
export let toc = [{
  depth: 2,
  url: "#对话式智能体",
  title: _jsx(_Fragment, {
    children: "对话式智能体"
  })
}, {
  depth: 2,
  url: "#优雅打断",
  title: _jsx(_Fragment, {
    children: "优雅打断"
  })
}, {
  depth: 2,
  url: "#短期记忆",
  title: _jsx(_Fragment, {
    children: "短期记忆"
  })
}, {
  depth: 2,
  url: "#客户端组件",
  title: _jsx(_Fragment, {
    children: "客户端组件"
  })
}, {
  depth: 2,
  url: "#智能体状态",
  title: _jsx(_Fragment, {
    children: "智能体状态"
  })
}, {
  depth: 2,
  url: "#数字人",
  title: _jsx(_Fragment, {
    children: "数字人"
  })
}, {
  depth: 2,
  url: "#实时字幕",
  title: _jsx(_Fragment, {
    children: "实时字幕"
  })
}, {
  depth: 3,
  url: "#逐字渲染",
  title: _jsx(_Fragment, {
    children: "逐字渲染"
  })
}, {
  depth: 3,
  url: "#逐句渲染",
  title: _jsx(_Fragment, {
    children: "逐句渲染"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "本文介绍使用声网对话式 AI 引擎需要了解的概念。"
    }), `
`, _jsx(_components.h2, {
      id: "对话式智能体",
      children: "对话式智能体"
    }), `
`, _jsx(_components.p, {
      children: "对话式智能体 (Conversational AI Agent) 是声网对话式 AI 引擎创建的，是实现对话式 AI 功能的基础。"
    }), `
`, _jsx(_components.h2, {
      id: "优雅打断",
      children: "优雅打断"
    }), `
`, _jsx(_components.h2, {
      id: "短期记忆",
      children: "短期记忆"
    }), `
`, _jsx(_components.h2, {
      id: "客户端组件",
      children: "客户端组件"
    }), `
`, _jsx(_components.h2, {
      id: "智能体状态",
      children: "智能体状态"
    }), `
`, _jsx(_components.p, {
      children: "智能体"
    }), `
`, _jsx(_components.h2, {
      id: "数字人",
      children: "数字人"
    }), `
`, _jsx(_components.h2, {
      id: "实时字幕",
      children: "实时字幕"
    }), `
`, _jsx(_components.h3, {
      id: "逐字渲染",
      children: "逐字渲染"
    }), `
`, _jsx(_components.h3, {
      id: "逐句渲染",
      children: "逐句渲染"
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
