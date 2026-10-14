import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "在线美术教学",
  description: "面向绘画、美术辅导和视觉化教学产品的课堂方案，强调色彩还原和拍摄矫正能力。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

在线美术教学是面向绘画与视觉表达类教学的垂类课堂方案。它和通用课堂方案的区别在于，画面色彩还原、透视矫正、双摄支持等能力本身就是教学体验的一部分。

## 适合哪些场景 [#适合哪些场景]

* 绘画教学
* 艺考与校考辅导
* 画室类远程教学
* 对视觉展示质量要求高于通用课堂的教育产品

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 实时音视频
* 白板与课堂协同
* 面向视觉教学的拍摄矫正与增强能力

## 什么时候先看它 [#什么时候先看它]

当你的教学难点主要在“怎么把作品和演示过程看清楚、看准确”，而不只是普通连麦授课时，应该先从在线美术教学进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "在线美术教学是面向绘画与视觉表达类教学的垂类课堂方案。它和通用课堂方案的区别在于，画面色彩还原、透视矫正、双摄支持等能力本身就是教学体验的一部分。"
  }, {
    heading: "适合哪些场景",
    content: "绘画教学"
  }, {
    heading: "适合哪些场景",
    content: "艺考与校考辅导"
  }, {
    heading: "适合哪些场景",
    content: "画室类远程教学"
  }, {
    heading: "适合哪些场景",
    content: "对视觉展示质量要求高于通用课堂的教育产品"
  }, {
    heading: "依赖哪些底层能力",
    content: "实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "白板与课堂协同"
  }, {
    heading: "依赖哪些底层能力",
    content: "面向视觉教学的拍摄矫正与增强能力"
  }, {
    heading: "什么时候先看它",
    content: "当你的教学难点主要在“怎么把作品和演示过程看清楚、看准确”，而不只是普通连麦授课时，应该先从在线美术教学进入。"
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
      children: "在线美术教学是面向绘画与视觉表达类教学的垂类课堂方案。它和通用课堂方案的区别在于，画面色彩还原、透视矫正、双摄支持等能力本身就是教学体验的一部分。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "绘画教学"
      }), `
`, _jsx(_components.li, {
        children: "艺考与校考辅导"
      }), `
`, _jsx(_components.li, {
        children: "画室类远程教学"
      }), `
`, _jsx(_components.li, {
        children: "对视觉展示质量要求高于通用课堂的教育产品"
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
        children: "白板与课堂协同"
      }), `
`, _jsx(_components.li, {
        children: "面向视觉教学的拍摄矫正与增强能力"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当你的教学难点主要在“怎么把作品和演示过程看清楚、看准确”，而不只是普通连麦授课时，应该先从在线美术教学进入。"
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
