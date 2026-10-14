import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "录制",
  description: "录制能力适合把实时互动内容沉淀为可回放、可归档和可审核的媒体资产。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

录制能力负责把实时音视频内容保存下来，适合归档、回放、质检、审核和复盘场景。

## 主要形态 [#主要形态]

* 云端录制
* 本地服务端录制

## 当前声网已有文档通常包含什么 [#当前声网已有文档通常包含什么]

* 产品首页
* 快速开始
* 用户指南
* 录制模式说明
* 计费与限制

## 建议先看什么 [#建议先看什么]

如果你追求托管式接入，先看云端录制；如果你需要更强控制权，再看本地服务端录制。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "录制能力负责把实时音视频内容保存下来，适合归档、回放、质检、审核和复盘场景。"
  }, {
    heading: "主要形态",
    content: "云端录制"
  }, {
    heading: "主要形态",
    content: "本地服务端录制"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "产品首页"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "快速开始"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "用户指南"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "录制模式说明"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "计费与限制"
  }, {
    heading: "建议先看什么",
    content: "如果你追求托管式接入，先看云端录制；如果你需要更强控制权，再看本地服务端录制。"
  }],
  headings: [{
    id: "这项能力是什么",
    content: "这项能力是什么"
  }, {
    id: "主要形态",
    content: "主要形态"
  }, {
    id: "当前声网已有文档通常包含什么",
    content: "当前声网已有文档通常包含什么"
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
  url: "#主要形态",
  title: _jsx(_Fragment, {
    children: "主要形态"
  })
}, {
  depth: 2,
  url: "#当前声网已有文档通常包含什么",
  title: _jsx(_Fragment, {
    children: "当前声网已有文档通常包含什么"
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
      children: "录制能力负责把实时音视频内容保存下来，适合归档、回放、质检、审核和复盘场景。"
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
      id: "当前声网已有文档通常包含什么",
      children: "当前声网已有文档通常包含什么"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "产品首页"
      }), `
`, _jsx(_components.li, {
        children: "快速开始"
      }), `
`, _jsx(_components.li, {
        children: "用户指南"
      }), `
`, _jsx(_components.li, {
        children: "录制模式说明"
      }), `
`, _jsx(_components.li, {
        children: "计费与限制"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "如果你追求托管式接入，先看云端录制；如果你需要更强控制权，再看本地服务端录制。"
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
