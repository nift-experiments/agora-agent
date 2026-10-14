import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "秀场直播",
  description: "面向主播与观众互动、连麦、PK 和伪直播等泛娱乐场景的直播方案。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

秀场直播是更接近“泛娱乐直播产品”形态的方案入口。它面向主播、观众、连麦互动和房间运营，而不是通用实时音视频房间。

## 适合哪些场景 [#适合哪些场景]

* 单主播直播房间
* 观众与主播连麦
* 多房主跨房 PK
* 需要更强直播产品心智的泛娱乐业务

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 实时音视频
* 房间互动与观众参与
* 面向直播运营的产品流程与控制面

## 什么时候先看它 [#什么时候先看它]

当你的产品核心是“做一个可运营的互动直播场”，而不是开会、上课或发起通话时，先从秀场直播进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "秀场直播是更接近“泛娱乐直播产品”形态的方案入口。它面向主播、观众、连麦互动和房间运营，而不是通用实时音视频房间。"
  }, {
    heading: "适合哪些场景",
    content: "单主播直播房间"
  }, {
    heading: "适合哪些场景",
    content: "观众与主播连麦"
  }, {
    heading: "适合哪些场景",
    content: "多房主跨房 PK"
  }, {
    heading: "适合哪些场景",
    content: "需要更强直播产品心智的泛娱乐业务"
  }, {
    heading: "依赖哪些底层能力",
    content: "实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "房间互动与观众参与"
  }, {
    heading: "依赖哪些底层能力",
    content: "面向直播运营的产品流程与控制面"
  }, {
    heading: "什么时候先看它",
    content: "当你的产品核心是“做一个可运营的互动直播场”，而不是开会、上课或发起通话时，先从秀场直播进入。"
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
      children: "秀场直播是更接近“泛娱乐直播产品”形态的方案入口。它面向主播、观众、连麦互动和房间运营，而不是通用实时音视频房间。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "单主播直播房间"
      }), `
`, _jsx(_components.li, {
        children: "观众与主播连麦"
      }), `
`, _jsx(_components.li, {
        children: "多房主跨房 PK"
      }), `
`, _jsx(_components.li, {
        children: "需要更强直播产品心智的泛娱乐业务"
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
        children: "房间互动与观众参与"
      }), `
`, _jsx(_components.li, {
        children: "面向直播运营的产品流程与控制面"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当你的产品核心是“做一个可运营的互动直播场”，而不是开会、上课或发起通话时，先从秀场直播进入。"
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
