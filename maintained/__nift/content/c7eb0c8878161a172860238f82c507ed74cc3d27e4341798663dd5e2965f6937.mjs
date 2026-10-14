import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "PPT 转码",
  description: "面向文档素材处理与课件转码场景的入口，帮助你从现有转码能力出发理解 PPT 转码的定位。"
};
export let _markdown = `

## 这项能力解决什么问题 [#这项能力解决什么问题]

PPT 转码适合把课件、演示文档或页面素材转换成适合在线展示、播放或与实时互动结合的内容形态。

## 当前定位 [#当前定位]

在现有声网能力体系里，PPT 转码更适合作为转码能力的延伸，而不是完全独立于媒体处理体系之外的入口。

## 当前仓库里最接近的文档 [#当前仓库里最接近的文档]

* [查看媒体处理与分发总览](/zh-CN/realtime-media/media-processing-and-distribution)
* [查看转码文档](/zh-CN/realtime-media/transcoding)

## 推荐阅读路径 [#推荐阅读路径]

1. 先看转码能力，理解多路媒体流编排、格式转换和输出形态。
2. 如果你的场景以课件、文档素材或教学内容处理为主，再把 PPT 转码视为转码链路的扩展能力继续设计。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力解决什么问题",
    content: "PPT 转码适合把课件、演示文档或页面素材转换成适合在线展示、播放或与实时互动结合的内容形态。"
  }, {
    heading: "当前定位",
    content: "在现有声网能力体系里，PPT 转码更适合作为转码能力的延伸，而不是完全独立于媒体处理体系之外的入口。"
  }, {
    heading: "当前仓库里最接近的文档",
    content: "查看媒体处理与分发总览"
  }, {
    heading: "当前仓库里最接近的文档",
    content: "查看转码文档"
  }, {
    heading: "推荐阅读路径",
    content: "先看转码能力，理解多路媒体流编排、格式转换和输出形态。"
  }, {
    heading: "推荐阅读路径",
    content: "如果你的场景以课件、文档素材或教学内容处理为主，再把 PPT 转码视为转码链路的扩展能力继续设计。"
  }],
  headings: [{
    id: "这项能力解决什么问题",
    content: "这项能力解决什么问题"
  }, {
    id: "当前定位",
    content: "当前定位"
  }, {
    id: "当前仓库里最接近的文档",
    content: "当前仓库里最接近的文档"
  }, {
    id: "推荐阅读路径",
    content: "推荐阅读路径"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这项能力解决什么问题",
  title: _jsx(_Fragment, {
    children: "这项能力解决什么问题"
  })
}, {
  depth: 2,
  url: "#当前定位",
  title: _jsx(_Fragment, {
    children: "当前定位"
  })
}, {
  depth: 2,
  url: "#当前仓库里最接近的文档",
  title: _jsx(_Fragment, {
    children: "当前仓库里最接近的文档"
  })
}, {
  depth: 2,
  url: "#推荐阅读路径",
  title: _jsx(_Fragment, {
    children: "推荐阅读路径"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "这项能力解决什么问题",
      children: "这项能力解决什么问题"
    }), `
`, _jsx(_components.p, {
      children: "PPT 转码适合把课件、演示文档或页面素材转换成适合在线展示、播放或与实时互动结合的内容形态。"
    }), `
`, _jsx(_components.h2, {
      id: "当前定位",
      children: "当前定位"
    }), `
`, _jsx(_components.p, {
      children: "在现有声网能力体系里，PPT 转码更适合作为转码能力的延伸，而不是完全独立于媒体处理体系之外的入口。"
    }), `
`, _jsx(_components.h2, {
      id: "当前仓库里最接近的文档",
      children: "当前仓库里最接近的文档"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/realtime-media/media-processing-and-distribution",
          children: "查看媒体处理与分发总览"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/realtime-media/transcoding",
          children: "查看转码文档"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐阅读路径",
      children: "推荐阅读路径"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "先看转码能力，理解多路媒体流编排、格式转换和输出形态。"
      }), `
`, _jsx(_components.li, {
        children: "如果你的场景以课件、文档素材或教学内容处理为主，再把 PPT 转码视为转码链路的扩展能力继续设计。"
      }), `
`]
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
