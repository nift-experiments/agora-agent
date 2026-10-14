import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "拉流",
  description: "拉流能力适合把外部在线媒体流接入现有实时场景，丰富互动内容来源。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

拉流帮助你把外部在线媒体内容引入当前实时场景，让互动系统不只依赖本地用户采集的音视频。

## 适合哪些场景 [#适合哪些场景]

* 外部媒体输入
* 远端内容引入
* 混合媒体源互动

## 建议先看什么 [#建议先看什么]

先确认外部媒体源格式和目标场景，再决定是否还需要配合转码或推流能力一起使用。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "拉流帮助你把外部在线媒体内容引入当前实时场景，让互动系统不只依赖本地用户采集的音视频。"
  }, {
    heading: "适合哪些场景",
    content: "外部媒体输入"
  }, {
    heading: "适合哪些场景",
    content: "远端内容引入"
  }, {
    heading: "适合哪些场景",
    content: "混合媒体源互动"
  }, {
    heading: "建议先看什么",
    content: "先确认外部媒体源格式和目标场景，再决定是否还需要配合转码或推流能力一起使用。"
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
      children: "拉流帮助你把外部在线媒体内容引入当前实时场景，让互动系统不只依赖本地用户采集的音视频。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "外部媒体输入"
      }), `
`, _jsx(_components.li, {
        children: "远端内容引入"
      }), `
`, _jsx(_components.li, {
        children: "混合媒体源互动"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "先确认外部媒体源格式和目标场景，再决定是否还需要配合转码或推流能力一起使用。"
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
