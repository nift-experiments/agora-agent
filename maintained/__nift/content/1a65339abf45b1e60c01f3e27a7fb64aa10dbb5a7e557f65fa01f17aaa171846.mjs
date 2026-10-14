import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "灵动课堂",
  description: "面向快速上线互动教学产品的低代码课堂方案。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

灵动课堂是声网的低代码课堂产品入口。相比自己把 RTC、RTM、白板、录制等能力逐项拼装，它更适合希望直接进入“课堂产品”心智的团队。

## 适合哪些场景 [#适合哪些场景]

* 希望更快上线课堂产品的团队
* 一对一、小班课、大班互动等多班型教学产品
* 更希望使用成型课堂框架而不是自建编排的教育业务

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 实时音视频
* 消息与课堂协同
* 白板与录制

## 什么时候先看它 [#什么时候先看它]

当你的产品天然就是“课堂”，而不是通用实时音视频应用时，灵动课堂应该成为教育类方案的首选入口。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "灵动课堂是声网的低代码课堂产品入口。相比自己把 RTC、RTM、白板、录制等能力逐项拼装，它更适合希望直接进入“课堂产品”心智的团队。"
  }, {
    heading: "适合哪些场景",
    content: "希望更快上线课堂产品的团队"
  }, {
    heading: "适合哪些场景",
    content: "一对一、小班课、大班互动等多班型教学产品"
  }, {
    heading: "适合哪些场景",
    content: "更希望使用成型课堂框架而不是自建编排的教育业务"
  }, {
    heading: "依赖哪些底层能力",
    content: "实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "消息与课堂协同"
  }, {
    heading: "依赖哪些底层能力",
    content: "白板与录制"
  }, {
    heading: "什么时候先看它",
    content: "当你的产品天然就是“课堂”，而不是通用实时音视频应用时，灵动课堂应该成为教育类方案的首选入口。"
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
      children: "灵动课堂是声网的低代码课堂产品入口。相比自己把 RTC、RTM、白板、录制等能力逐项拼装，它更适合希望直接进入“课堂产品”心智的团队。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "希望更快上线课堂产品的团队"
      }), `
`, _jsx(_components.li, {
        children: "一对一、小班课、大班互动等多班型教学产品"
      }), `
`, _jsx(_components.li, {
        children: "更希望使用成型课堂框架而不是自建编排的教育业务"
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
        children: "消息与课堂协同"
      }), `
`, _jsx(_components.li, {
        children: "白板与录制"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当你的产品天然就是“课堂”，而不是通用实时音视频应用时，灵动课堂应该成为教育类方案的首选入口。"
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
