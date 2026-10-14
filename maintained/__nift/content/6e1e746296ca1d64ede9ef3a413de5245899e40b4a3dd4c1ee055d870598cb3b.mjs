import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "智能手表",
  description: "面向手表类终端音视频通话产品的实时互动方案。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

智能手表是面向可穿戴终端的设备方案入口。它要求用户先从“手表产品如何通信”来理解文档，而不是先从通用 App 端 RTC 接入来理解。

## 适合哪些场景 [#适合哪些场景]

* 手表与手表通信
* 手表与手机通信
* 可穿戴终端音视频通话产品

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 设备侧媒体传输
* 实时音视频通信
* 设备与客户端互通

## 什么时候先看它 [#什么时候先看它]

当核心产品是可穿戴终端，而且体验必须围绕设备能力和通信流程来设计时，先从智能手表进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "智能手表是面向可穿戴终端的设备方案入口。它要求用户先从“手表产品如何通信”来理解文档，而不是先从通用 App 端 RTC 接入来理解。"
  }, {
    heading: "适合哪些场景",
    content: "手表与手表通信"
  }, {
    heading: "适合哪些场景",
    content: "手表与手机通信"
  }, {
    heading: "适合哪些场景",
    content: "可穿戴终端音视频通话产品"
  }, {
    heading: "依赖哪些底层能力",
    content: "设备侧媒体传输"
  }, {
    heading: "依赖哪些底层能力",
    content: "实时音视频通信"
  }, {
    heading: "依赖哪些底层能力",
    content: "设备与客户端互通"
  }, {
    heading: "什么时候先看它",
    content: "当核心产品是可穿戴终端，而且体验必须围绕设备能力和通信流程来设计时，先从智能手表进入。"
  }],
  headings: [{
    id: "这是什么方案",
    content: "这是什么方案"
  }, {
    id: "适合哪些场景",
    content: "适合哪些场景"
  }, {
    id: "依赖哪些底层能力",
    content: "依赖哪些底层能力"
  }, {
    id: "什么时候先看它",
    content: "什么时候先看它"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这是什么方案",
  title: _jsx(_Fragment, {
    children: "这是什么方案"
  })
}, {
  depth: 2,
  url: "#适合哪些场景",
  title: _jsx(_Fragment, {
    children: "适合哪些场景"
  })
}, {
  depth: 2,
  url: "#依赖哪些底层能力",
  title: _jsx(_Fragment, {
    children: "依赖哪些底层能力"
  })
}, {
  depth: 2,
  url: "#什么时候先看它",
  title: _jsx(_Fragment, {
    children: "什么时候先看它"
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
      id: "这是什么方案",
      children: "这是什么方案"
    }), `
`, _jsx(_components.p, {
      children: "智能手表是面向可穿戴终端的设备方案入口。它要求用户先从“手表产品如何通信”来理解文档，而不是先从通用 App 端 RTC 接入来理解。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "手表与手表通信"
      }), `
`, _jsx(_components.li, {
        children: "手表与手机通信"
      }), `
`, _jsx(_components.li, {
        children: "可穿戴终端音视频通话产品"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "依赖哪些底层能力",
      children: "依赖哪些底层能力"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "设备侧媒体传输"
      }), `
`, _jsx(_components.li, {
        children: "实时音视频通信"
      }), `
`, _jsx(_components.li, {
        children: "设备与客户端互通"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当核心产品是可穿戴终端，而且体验必须围绕设备能力和通信流程来设计时，先从智能手表进入。"
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
