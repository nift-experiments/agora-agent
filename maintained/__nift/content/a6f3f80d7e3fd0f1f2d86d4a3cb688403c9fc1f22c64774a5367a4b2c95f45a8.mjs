import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "互动白板",
  description: "互动白板适合多人实时协作、教学讲解和视觉化互动内容场景。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

互动白板帮助你在实时互动系统中加入共享白板能力，让多人协作、标注和讲解更自然。

## 适合哪些场景 [#适合哪些场景]

* 在线课堂
* 协同讲解
* 互动标注
* 实时创作

## 建议先看什么 [#建议先看什么]

如果你的场景需要多人共同操作同一块内容区域，白板通常比纯文本或纯视频解释更有效。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "互动白板帮助你在实时互动系统中加入共享白板能力，让多人协作、标注和讲解更自然。"
  }, {
    heading: "适合哪些场景",
    content: "在线课堂"
  }, {
    heading: "适合哪些场景",
    content: "协同讲解"
  }, {
    heading: "适合哪些场景",
    content: "互动标注"
  }, {
    heading: "适合哪些场景",
    content: "实时创作"
  }, {
    heading: "建议先看什么",
    content: "如果你的场景需要多人共同操作同一块内容区域，白板通常比纯文本或纯视频解释更有效。"
  }],
  headings: [{
    id: "这项能力是什么",
    content: "这项能力是什么"
  }, {
    id: "适合哪些场景",
    content: "适合哪些场景"
  }, {
    id: "建议先看什么",
    content: "建议先看什么"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这项能力是什么",
  title: _jsx(_Fragment, {
    children: "这项能力是什么"
  })
}, {
  depth: 2,
  url: "#适合哪些场景",
  title: _jsx(_Fragment, {
    children: "适合哪些场景"
  })
}, {
  depth: 2,
  url: "#建议先看什么",
  title: _jsx(_Fragment, {
    children: "建议先看什么"
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
      id: "这项能力是什么",
      children: "这项能力是什么"
    }), `
`, _jsx(_components.p, {
      children: "互动白板帮助你在实时互动系统中加入共享白板能力，让多人协作、标注和讲解更自然。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在线课堂"
      }), `
`, _jsx(_components.li, {
        children: "协同讲解"
      }), `
`, _jsx(_components.li, {
        children: "互动标注"
      }), `
`, _jsx(_components.li, {
        children: "实时创作"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你的场景需要多人共同操作同一块内容区域，白板通常比纯文本或纯视频解释更有效。"
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
