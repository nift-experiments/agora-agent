import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "小班课",
  description: "面向一对多互动教学产品的定制化小班课方案。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

小班课是更偏 PaaS 定制化的一对多教学方案，适合需要自己定义教学流程、课堂角色和互动方式的团队。

## 适合哪些场景 [#适合哪些场景]

* 一对多在线课堂
* 辅导小组课
* 研讨式互动教学

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 实时音视频
* 消息与课堂状态同步
* 白板与录制回看

## 什么时候先看它 [#什么时候先看它]

当你的产品是小规模多人课堂，并且需要比低代码课堂更高的定制空间时，先从小班课进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "小班课是更偏 PaaS 定制化的一对多教学方案，适合需要自己定义教学流程、课堂角色和互动方式的团队。"
  }, {
    heading: "适合哪些场景",
    content: "一对多在线课堂"
  }, {
    heading: "适合哪些场景",
    content: "辅导小组课"
  }, {
    heading: "适合哪些场景",
    content: "研讨式互动教学"
  }, {
    heading: "依赖哪些底层能力",
    content: "实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "消息与课堂状态同步"
  }, {
    heading: "依赖哪些底层能力",
    content: "白板与录制回看"
  }, {
    heading: "什么时候先看它",
    content: "当你的产品是小规模多人课堂，并且需要比低代码课堂更高的定制空间时，先从小班课进入。"
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
      children: "小班课是更偏 PaaS 定制化的一对多教学方案，适合需要自己定义教学流程、课堂角色和互动方式的团队。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "一对多在线课堂"
      }), `
`, _jsx(_components.li, {
        children: "辅导小组课"
      }), `
`, _jsx(_components.li, {
        children: "研讨式互动教学"
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
        children: "消息与课堂状态同步"
      }), `
`, _jsx(_components.li, {
        children: "白板与录制回看"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当你的产品是小规模多人课堂，并且需要比低代码课堂更高的定制空间时，先从小班课进入。"
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
