import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "超级小班课",
  description: "面向大班授课叠加分组讨论的互动教学方案。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

超级小班课适合把大班直播授课和小组讨论结合在一起的教学产品。它关注的不只是单个课堂，而是主课堂与分组课堂共同组成的一套教学结构。

## 适合哪些场景 [#适合哪些场景]

* 大班互动教学
* 直播授课加分组讨论
* 同时包含主讲老师、助教和学生分组的课堂产品

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 实时音视频
* 主课堂与子课堂协同编排
* 白板、录制和教学流程整合

## 什么时候先看它 [#什么时候先看它]

当你的产品既要有统一授课，又要有分组讨论协作时，应该先从超级小班课进入，而不是从普通小班课进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "超级小班课适合把大班直播授课和小组讨论结合在一起的教学产品。它关注的不只是单个课堂，而是主课堂与分组课堂共同组成的一套教学结构。"
  }, {
    heading: "适合哪些场景",
    content: "大班互动教学"
  }, {
    heading: "适合哪些场景",
    content: "直播授课加分组讨论"
  }, {
    heading: "适合哪些场景",
    content: "同时包含主讲老师、助教和学生分组的课堂产品"
  }, {
    heading: "依赖哪些底层能力",
    content: "实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "主课堂与子课堂协同编排"
  }, {
    heading: "依赖哪些底层能力",
    content: "白板、录制和教学流程整合"
  }, {
    heading: "什么时候先看它",
    content: "当你的产品既要有统一授课，又要有分组讨论协作时，应该先从超级小班课进入，而不是从普通小班课进入。"
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
      children: "超级小班课适合把大班直播授课和小组讨论结合在一起的教学产品。它关注的不只是单个课堂，而是主课堂与分组课堂共同组成的一套教学结构。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "大班互动教学"
      }), `
`, _jsx(_components.li, {
        children: "直播授课加分组讨论"
      }), `
`, _jsx(_components.li, {
        children: "同时包含主讲老师、助教和学生分组的课堂产品"
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
        children: "主课堂与子课堂协同编排"
      }), `
`, _jsx(_components.li, {
        children: "白板、录制和教学流程整合"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当你的产品既要有统一授课，又要有分组讨论协作时，应该先从超级小班课进入，而不是从普通小班课进入。"
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
