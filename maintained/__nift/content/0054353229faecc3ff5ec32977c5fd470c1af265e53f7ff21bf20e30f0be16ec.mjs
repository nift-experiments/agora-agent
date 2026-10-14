import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "微呼叫",
  description: "微呼叫适合轻量音视频互通场景，尤其适合智能硬件与小程序或终端之间的实时连接。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

微呼叫是面向轻量呼叫链路的成型方案。它更强调“快速接通”和“设备到轻客户端互通”，而不是会议、直播这类更重的互动模型。

## 适合哪些场景 [#适合哪些场景]

* 智能设备互通
* 轻量音视频呼叫
* 小程序与设备连接
* 更关注接通效率而不是复杂会控的产品

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 实时音视频
* 信令和呼叫流程控制
* 设备端与客户端互通能力

## 什么时候先看它 [#什么时候先看它]

如果你的产品更像“发起一次呼叫”而不是“创建一个会议”或“经营一个直播房间”，那微呼叫就是更准确的入口。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "微呼叫是面向轻量呼叫链路的成型方案。它更强调“快速接通”和“设备到轻客户端互通”，而不是会议、直播这类更重的互动模型。"
  }, {
    heading: "适合哪些场景",
    content: "智能设备互通"
  }, {
    heading: "适合哪些场景",
    content: "轻量音视频呼叫"
  }, {
    heading: "适合哪些场景",
    content: "小程序与设备连接"
  }, {
    heading: "适合哪些场景",
    content: "更关注接通效率而不是复杂会控的产品"
  }, {
    heading: "依赖哪些底层能力",
    content: "实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "信令和呼叫流程控制"
  }, {
    heading: "依赖哪些底层能力",
    content: "设备端与客户端互通能力"
  }, {
    heading: "什么时候先看它",
    content: "如果你的产品更像“发起一次呼叫”而不是“创建一个会议”或“经营一个直播房间”，那微呼叫就是更准确的入口。"
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
      children: "微呼叫是面向轻量呼叫链路的成型方案。它更强调“快速接通”和“设备到轻客户端互通”，而不是会议、直播这类更重的互动模型。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "智能设备互通"
      }), `
`, _jsx(_components.li, {
        children: "轻量音视频呼叫"
      }), `
`, _jsx(_components.li, {
        children: "小程序与设备连接"
      }), `
`, _jsx(_components.li, {
        children: "更关注接通效率而不是复杂会控的产品"
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
        children: "实时音视频"
      }), `
`, _jsx(_components.li, {
        children: "信令和呼叫流程控制"
      }), `
`, _jsx(_components.li, {
        children: "设备端与客户端互通能力"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "如果你的产品更像“发起一次呼叫”而不是“创建一个会议”或“经营一个直播房间”，那微呼叫就是更准确的入口。"
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
