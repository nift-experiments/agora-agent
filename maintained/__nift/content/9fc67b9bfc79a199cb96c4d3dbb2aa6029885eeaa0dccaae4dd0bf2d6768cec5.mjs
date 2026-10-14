import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "在线音乐教学",
  description: "面向音乐教学和陪练产品的课堂方案，强调高音质与乐器友好型互动体验。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

在线音乐教学是面向音乐课和陪练场景的垂类课堂方案。它与通用课堂产品的差异在于，音质还原、音乐场景降噪和面向乐器教学的互动体验是核心能力。

## 适合哪些场景 [#适合哪些场景]

* 一对一音乐课
* 一对多音乐教学
* 陪练和演奏辅导
* 对音质要求显著高于普通课堂的教育产品

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 高保真实时音视频
* 课堂协同与白板能力
* 面向音乐场景的音频调优与教学辅助

## 什么时候先看它 [#什么时候先看它]

当产品成败更多取决于“声音够不够准、够不够清楚”，而不是普通课堂连麦是否可用时，应该先从在线音乐教学进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "在线音乐教学是面向音乐课和陪练场景的垂类课堂方案。它与通用课堂产品的差异在于，音质还原、音乐场景降噪和面向乐器教学的互动体验是核心能力。"
  }, {
    heading: "适合哪些场景",
    content: "一对一音乐课"
  }, {
    heading: "适合哪些场景",
    content: "一对多音乐教学"
  }, {
    heading: "适合哪些场景",
    content: "陪练和演奏辅导"
  }, {
    heading: "适合哪些场景",
    content: "对音质要求显著高于普通课堂的教育产品"
  }, {
    heading: "依赖哪些底层能力",
    content: "高保真实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "课堂协同与白板能力"
  }, {
    heading: "依赖哪些底层能力",
    content: "面向音乐场景的音频调优与教学辅助"
  }, {
    heading: "什么时候先看它",
    content: "当产品成败更多取决于“声音够不够准、够不够清楚”，而不是普通课堂连麦是否可用时，应该先从在线音乐教学进入。"
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
      children: "在线音乐教学是面向音乐课和陪练场景的垂类课堂方案。它与通用课堂产品的差异在于，音质还原、音乐场景降噪和面向乐器教学的互动体验是核心能力。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "一对一音乐课"
      }), `
`, _jsx(_components.li, {
        children: "一对多音乐教学"
      }), `
`, _jsx(_components.li, {
        children: "陪练和演奏辅导"
      }), `
`, _jsx(_components.li, {
        children: "对音质要求显著高于普通课堂的教育产品"
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
        children: "高保真实时音视频"
      }), `
`, _jsx(_components.li, {
        children: "课堂协同与白板能力"
      }), `
`, _jsx(_components.li, {
        children: "面向音乐场景的音频调优与教学辅助"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当产品成败更多取决于“声音够不够准、够不够清楚”，而不是普通课堂连麦是否可用时，应该先从在线音乐教学进入。"
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
