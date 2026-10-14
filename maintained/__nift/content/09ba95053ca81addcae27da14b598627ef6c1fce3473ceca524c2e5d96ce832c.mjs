import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "概览",
  description: "语音与视频是通话、互动直播、会议、课堂和媒体协作场景的核心实时互动能力。"
};
export let _markdown = `

语音与视频是声网实时互动产品中的核心入口，覆盖音视频采集与播放、频道控制、质量优化、安全能力，以及相关媒体处理工作流。

## 典型场景 [#典型场景]

* 语音通话与视频通话
* 互动直播
* 在线会议
* 互动课堂

## 平台支持 [#平台支持]

语音与视频支持常见的 Web、移动端、桌面端和嵌入式实时互动接入路径，并可结合声网客户端 SDK 与相关工具使用。

## 后续内容 [#后续内容]

以下中文内容入口仍在迁移中，完成后会补充为可点击页面：

* 接入 AI 工具
* 从零开始搭建
* 音频
* 视频
* 参考
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "语音与视频是声网实时互动产品中的核心入口，覆盖音视频采集与播放、频道控制、质量优化、安全能力，以及相关媒体处理工作流。"
  }, {
    heading: "典型场景",
    content: "语音通话与视频通话"
  }, {
    heading: "典型场景",
    content: "互动直播"
  }, {
    heading: "典型场景",
    content: "在线会议"
  }, {
    heading: "典型场景",
    content: "互动课堂"
  }, {
    heading: "平台支持",
    content: "语音与视频支持常见的 Web、移动端、桌面端和嵌入式实时互动接入路径，并可结合声网客户端 SDK 与相关工具使用。"
  }, {
    heading: "后续内容",
    content: "以下中文内容入口仍在迁移中，完成后会补充为可点击页面："
  }, {
    heading: "后续内容",
    content: "接入 AI 工具"
  }, {
    heading: "后续内容",
    content: "从零开始搭建"
  }, {
    heading: "后续内容",
    content: "音频"
  }, {
    heading: "后续内容",
    content: "视频"
  }, {
    heading: "后续内容",
    content: "参考"
  }],
  headings: [{
    id: "典型场景",
    content: "典型场景"
  }, {
    id: "平台支持",
    content: "平台支持"
  }, {
    id: "后续内容",
    content: "后续内容"
  }]
};
export let toc = [{
  depth: 2,
  url: "#典型场景",
  title: _jsx(_Fragment, {
    children: "典型场景"
  })
}, {
  depth: 2,
  url: "#平台支持",
  title: _jsx(_Fragment, {
    children: "平台支持"
  })
}, {
  depth: 2,
  url: "#后续内容",
  title: _jsx(_Fragment, {
    children: "后续内容"
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
    children: [_jsx(_components.p, {
      children: "语音与视频是声网实时互动产品中的核心入口，覆盖音视频采集与播放、频道控制、质量优化、安全能力，以及相关媒体处理工作流。"
    }), `
`, _jsx(_components.h2, {
      id: "典型场景",
      children: "典型场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "语音通话与视频通话"
      }), `
`, _jsx(_components.li, {
        children: "互动直播"
      }), `
`, _jsx(_components.li, {
        children: "在线会议"
      }), `
`, _jsx(_components.li, {
        children: "互动课堂"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "平台支持",
      children: "平台支持"
    }), `
`, _jsx(_components.p, {
      children: "语音与视频支持常见的 Web、移动端、桌面端和嵌入式实时互动接入路径，并可结合声网客户端 SDK 与相关工具使用。"
    }), `
`, _jsx(_components.h2, {
      id: "后续内容",
      children: "后续内容"
    }), `
`, _jsx(_components.p, {
      children: "以下中文内容入口仍在迁移中，完成后会补充为可点击页面："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "接入 AI 工具"
      }), `
`, _jsx(_components.li, {
        children: "从零开始搭建"
      }), `
`, _jsx(_components.li, {
        children: "音频"
      }), `
`, _jsx(_components.li, {
        children: "视频"
      }), `
`, _jsx(_components.li, {
        children: "参考"
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
