import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "灵动会议",
  description: "面向企业协作、标准会议体验和低代码会议产品接入的方案产品。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

灵动会议是更接近成品会议产品形态的入口。它适合那些要做“会议”而不是单纯“音视频通话”的团队，用会议产品心智来组织房间、参会者、控制台和协作能力。

## 适合哪些场景 [#适合哪些场景]

* 企业会议
* 团队协作
* 标准化多人音视频会议
* 需要会控、后台对接和协作扩展的产品

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 实时音视频
* 会议控制与服务端编排
* 可按需叠加白板、录制等协作能力

## 什么时候先看它 [#什么时候先看它]

当你的用户天然会把这个产品理解成“开会”，而不是“进频道通话”或“直播互动”时，应该先从灵动会议进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "灵动会议是更接近成品会议产品形态的入口。它适合那些要做“会议”而不是单纯“音视频通话”的团队，用会议产品心智来组织房间、参会者、控制台和协作能力。"
  }, {
    heading: "适合哪些场景",
    content: "企业会议"
  }, {
    heading: "适合哪些场景",
    content: "团队协作"
  }, {
    heading: "适合哪些场景",
    content: "标准化多人音视频会议"
  }, {
    heading: "适合哪些场景",
    content: "需要会控、后台对接和协作扩展的产品"
  }, {
    heading: "依赖哪些底层能力",
    content: "实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "会议控制与服务端编排"
  }, {
    heading: "依赖哪些底层能力",
    content: "可按需叠加白板、录制等协作能力"
  }, {
    heading: "什么时候先看它",
    content: "当你的用户天然会把这个产品理解成“开会”，而不是“进频道通话”或“直播互动”时，应该先从灵动会议进入。"
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
      children: "灵动会议是更接近成品会议产品形态的入口。它适合那些要做“会议”而不是单纯“音视频通话”的团队，用会议产品心智来组织房间、参会者、控制台和协作能力。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "企业会议"
      }), `
`, _jsx(_components.li, {
        children: "团队协作"
      }), `
`, _jsx(_components.li, {
        children: "标准化多人音视频会议"
      }), `
`, _jsx(_components.li, {
        children: "需要会控、后台对接和协作扩展的产品"
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
        children: "会议控制与服务端编排"
      }), `
`, _jsx(_components.li, {
        children: "可按需叠加白板、录制等协作能力"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当你的用户天然会把这个产品理解成“开会”，而不是“进频道通话”或“直播互动”时，应该先从灵动会议进入。"
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
