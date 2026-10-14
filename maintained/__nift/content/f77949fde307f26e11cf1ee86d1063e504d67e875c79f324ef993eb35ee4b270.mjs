import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "一对一课堂",
  description: "面向一位老师对一位学生的定制化互动教学方案。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

一对一课堂是更偏 PaaS 定制化的教育方案入口，适合围绕“一位老师对一位学生”的教学流程构建完整产品。

## 适合哪些场景 [#适合哪些场景]

* 课外辅导
* 语言陪练
* 音乐陪练等高互动教学场景

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 实时音视频
* 教学协同与消息链路
* 白板与课后回顾能力

## 什么时候先看它 [#什么时候先看它]

当你的课堂模型天然是一师一生，并且你需要更高的业务定制空间时，先从一对一课堂进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "一对一课堂是更偏 PaaS 定制化的教育方案入口，适合围绕“一位老师对一位学生”的教学流程构建完整产品。"
  }, {
    heading: "适合哪些场景",
    content: "课外辅导"
  }, {
    heading: "适合哪些场景",
    content: "语言陪练"
  }, {
    heading: "适合哪些场景",
    content: "音乐陪练等高互动教学场景"
  }, {
    heading: "依赖哪些底层能力",
    content: "实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "教学协同与消息链路"
  }, {
    heading: "依赖哪些底层能力",
    content: "白板与课后回顾能力"
  }, {
    heading: "什么时候先看它",
    content: "当你的课堂模型天然是一师一生，并且你需要更高的业务定制空间时，先从一对一课堂进入。"
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
      children: "一对一课堂是更偏 PaaS 定制化的教育方案入口，适合围绕“一位老师对一位学生”的教学流程构建完整产品。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "课外辅导"
      }), `
`, _jsx(_components.li, {
        children: "语言陪练"
      }), `
`, _jsx(_components.li, {
        children: "音乐陪练等高互动教学场景"
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
        children: "教学协同与消息链路"
      }), `
`, _jsx(_components.li, {
        children: "白板与课后回顾能力"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当你的课堂模型天然是一师一生，并且你需要更高的业务定制空间时，先从一对一课堂进入。"
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
