import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "游戏语音",
  description: "面向手游、端游、页游和跨平台游戏产品的内置语音方案。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

游戏语音是声网面向游戏行业的内置语音方案。它解决的是游戏内沟通、开黑协作和语音体验问题，而不是会议或社交直播问题。

## 适合哪些场景 [#适合哪些场景]

* 手游语音
* 端游和页游语音
* 小队、战队、公会沟通
* 需要内置语音、录制或内容审核能力的游戏产品

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 低时延实时语音
* 面向游戏场景的音频调优
* 录制与内容安全等配套能力

## 什么时候先看它 [#什么时候先看它]

当语音能力是游戏体验的一部分，用于协作、指挥和沉浸感增强时，应该先从游戏语音进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "游戏语音是声网面向游戏行业的内置语音方案。它解决的是游戏内沟通、开黑协作和语音体验问题，而不是会议或社交直播问题。"
  }, {
    heading: "适合哪些场景",
    content: "手游语音"
  }, {
    heading: "适合哪些场景",
    content: "端游和页游语音"
  }, {
    heading: "适合哪些场景",
    content: "小队、战队、公会沟通"
  }, {
    heading: "适合哪些场景",
    content: "需要内置语音、录制或内容审核能力的游戏产品"
  }, {
    heading: "依赖哪些底层能力",
    content: "低时延实时语音"
  }, {
    heading: "依赖哪些底层能力",
    content: "面向游戏场景的音频调优"
  }, {
    heading: "依赖哪些底层能力",
    content: "录制与内容安全等配套能力"
  }, {
    heading: "什么时候先看它",
    content: "当语音能力是游戏体验的一部分，用于协作、指挥和沉浸感增强时，应该先从游戏语音进入。"
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
      children: "游戏语音是声网面向游戏行业的内置语音方案。它解决的是游戏内沟通、开黑协作和语音体验问题，而不是会议或社交直播问题。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "手游语音"
      }), `
`, _jsx(_components.li, {
        children: "端游和页游语音"
      }), `
`, _jsx(_components.li, {
        children: "小队、战队、公会沟通"
      }), `
`, _jsx(_components.li, {
        children: "需要内置语音、录制或内容审核能力的游戏产品"
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
        children: "低时延实时语音"
      }), `
`, _jsx(_components.li, {
        children: "面向游戏场景的音频调优"
      }), `
`, _jsx(_components.li, {
        children: "录制与内容安全等配套能力"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当语音能力是游戏体验的一部分，用于协作、指挥和沉浸感增强时，应该先从游戏语音进入。"
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
