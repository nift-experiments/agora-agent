import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "云端/本地录制",
  description: "面向云端录制和本地服务端录制的能力入口，帮助你在归档、回放、审核和复盘场景中快速找到正确路径。"
};
export let _markdown = `

## 这项能力解决什么问题 [#这项能力解决什么问题]

录制能力负责把实时互动内容沉淀为可回放、可归档和可审核的媒体资产，适合课后回放、合规存档、内容质检和业务复盘。

## 主要形态 [#主要形态]

* 云端录制
* 本地服务端录制

## 当前仓库里最接近的文档 [#当前仓库里最接近的文档]

* [查看媒体处理与分发总览](/zh-CN/realtime-media/media-processing-and-distribution)
* [查看录制文档](/zh-CN/realtime-media/recording)

## 推荐阅读路径 [#推荐阅读路径]

1. 如果你需要声网托管式接入，先看云端录制。
2. 如果你需要更强控制权和自主管理能力，再看本地服务端录制。
3. 如果录制后还需要转码、分发或外部媒体处理，再进入媒体处理与分发相关文档。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力解决什么问题",
    content: "录制能力负责把实时互动内容沉淀为可回放、可归档和可审核的媒体资产，适合课后回放、合规存档、内容质检和业务复盘。"
  }, {
    heading: "主要形态",
    content: "云端录制"
  }, {
    heading: "主要形态",
    content: "本地服务端录制"
  }, {
    heading: "当前仓库里最接近的文档",
    content: "查看媒体处理与分发总览"
  }, {
    heading: "当前仓库里最接近的文档",
    content: "查看录制文档"
  }, {
    heading: "推荐阅读路径",
    content: "如果你需要声网托管式接入，先看云端录制。"
  }, {
    heading: "推荐阅读路径",
    content: "如果你需要更强控制权和自主管理能力，再看本地服务端录制。"
  }, {
    heading: "推荐阅读路径",
    content: "如果录制后还需要转码、分发或外部媒体处理，再进入媒体处理与分发相关文档。"
  }],
  headings: [{
    id: "这项能力解决什么问题",
    content: "这项能力解决什么问题"
  }, {
    id: "主要形态",
    content: "主要形态"
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
  url: "#主要形态",
  title: _jsx(_Fragment, {
    children: "主要形态"
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
      children: "录制能力负责把实时互动内容沉淀为可回放、可归档和可审核的媒体资产，适合课后回放、合规存档、内容质检和业务复盘。"
    }), `
`, _jsx(_components.h2, {
      id: "主要形态",
      children: "主要形态"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "云端录制"
      }), `
`, _jsx(_components.li, {
        children: "本地服务端录制"
      }), `
`]
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
          href: "/zh-CN/realtime-media/recording",
          children: "查看录制文档"
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
        children: "如果你需要声网托管式接入，先看云端录制。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要更强控制权和自主管理能力，再看本地服务端录制。"
      }), `
`, _jsx(_components.li, {
        children: "如果录制后还需要转码、分发或外部媒体处理，再进入媒体处理与分发相关文档。"
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
