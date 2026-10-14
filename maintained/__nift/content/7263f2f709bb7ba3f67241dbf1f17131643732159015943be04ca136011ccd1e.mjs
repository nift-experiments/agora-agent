import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "媒体流加速 RTSA",
  description: "RTSA 面向设备与终端场景的实时媒体流与信令传输，适合人与物、物与物实时连接。"
};
export let _markdown = `

## 这项能力是什么 [#这项能力是什么]

RTSA 提供优质实时媒体流与信令传输，帮助开发者为智能硬件、终端和设备类产品实现低时延连接。

## 适合哪些场景 [#适合哪些场景]

* 智能摄像头
* 门铃和可穿戴设备
* 设备间音视频互通
* IoT 终端实时连接

## 当前声网已有文档通常包含什么 [#当前声网已有文档通常包含什么]

* 产品首页
* 示例项目
* 快速入门
* 热门能力
* 最佳实践

## 建议先看什么 [#建议先看什么]

先看产品首页判断设备链路是否适合 RTSA，再跑通示例项目，最后补 License、互通和码率控制能力。
`;
export let structuredData = {
  contents: [{
    heading: "这项能力是什么",
    content: "RTSA 提供优质实时媒体流与信令传输，帮助开发者为智能硬件、终端和设备类产品实现低时延连接。"
  }, {
    heading: "适合哪些场景",
    content: "智能摄像头"
  }, {
    heading: "适合哪些场景",
    content: "门铃和可穿戴设备"
  }, {
    heading: "适合哪些场景",
    content: "设备间音视频互通"
  }, {
    heading: "适合哪些场景",
    content: "IoT 终端实时连接"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "产品首页"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "示例项目"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "快速入门"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "热门能力"
  }, {
    heading: "当前声网已有文档通常包含什么",
    content: "最佳实践"
  }, {
    heading: "建议先看什么",
    content: "先看产品首页判断设备链路是否适合 RTSA，再跑通示例项目，最后补 License、互通和码率控制能力。"
  }],
  headings: [{
    id: "这项能力是什么",
    content: "这项能力是什么"
  }, {
    id: "适合哪些场景",
    content: "适合哪些场景"
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
  url: "#适合哪些场景",
  title: _jsx(_Fragment, {
    children: "适合哪些场景"
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
      children: "RTSA 提供优质实时媒体流与信令传输，帮助开发者为智能硬件、终端和设备类产品实现低时延连接。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "智能摄像头"
      }), `
`, _jsx(_components.li, {
        children: "门铃和可穿戴设备"
      }), `
`, _jsx(_components.li, {
        children: "设备间音视频互通"
      }), `
`, _jsx(_components.li, {
        children: "IoT 终端实时连接"
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
        children: "示例项目"
      }), `
`, _jsx(_components.li, {
        children: "快速入门"
      }), `
`, _jsx(_components.li, {
        children: "热门能力"
      }), `
`, _jsx(_components.li, {
        children: "最佳实践"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "建议先看什么",
      children: "建议先看什么"
    }), `
`, _jsx(_components.p, {
      children: "先看产品首页判断设备链路是否适合 RTSA，再跑通示例项目，最后补 License、互通和码率控制能力。"
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
