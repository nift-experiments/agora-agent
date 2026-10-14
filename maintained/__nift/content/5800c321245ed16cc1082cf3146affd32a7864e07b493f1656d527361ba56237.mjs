import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "媒体处理与分发",
  description: "从录制、推流、拉流、转码到直播分发，梳理声网现有媒体处理与交付相关产品。"
};
export let _markdown = `

<div id="rm-cloud-recording"></div>

## 录制 [#录制]

录制能力适合把实时互动内容沉淀到指定存储位置，补齐归档、回放、审核和复盘链路。

### 云端录制 [#云端录制]

适合快速接入由声网托管的录制链路。

<div id="rm-local-recording"></div>

### 本地服务端录制 [#本地服务端录制]

适合需要自主管理录制服务端和更细粒度控制录制流程的场景。

<div id="rm-media-push"></div>

## 旁路推流 [#旁路推流]

把互动频道内容推送到 CDN 或直播分发链路中。

<div id="rm-media-pull"></div>

## 输入在线媒体流 [#输入在线媒体流]

把外部在线媒体流接入现有实时场景，丰富内容来源。

<div id="rm-cloud-transcoding"></div>

## 转码 [#转码]

面向直播和多画面输出场景，对媒体流进行转码和编排。

### 云端转码 [#云端转码]

适合对实时流做多画面编排和转码输出。

<div id="rm-rtmp-gateway"></div>

## RTMP 网关 [#rtmp-网关]

解决标准协议直播和实时互动链路之间的协议衔接问题。

<div id="rm-fusion-cdn"></div>

## Fusion CDN 直播 [#fusion-cdn-直播]

通过多 CDN 供应商调度优化整体直播播放体验。

<div id="rm-ppt-conversion"></div>

补充说明：如果你的场景还涉及文档素材处理，现有声网体系里还存在 PPT 转码服务，但它可以暂时视为转码能力的延伸能力，而不是这一版左栏的一等入口。
`;
export let structuredData = {
  contents: [{
    heading: "录制",
    content: "录制能力适合把实时互动内容沉淀到指定存储位置，补齐归档、回放、审核和复盘链路。"
  }, {
    heading: "云端录制",
    content: "适合快速接入由声网托管的录制链路。"
  }, {
    heading: "本地服务端录制",
    content: "适合需要自主管理录制服务端和更细粒度控制录制流程的场景。"
  }, {
    heading: "旁路推流",
    content: "把互动频道内容推送到 CDN 或直播分发链路中。"
  }, {
    heading: "输入在线媒体流",
    content: "把外部在线媒体流接入现有实时场景，丰富内容来源。"
  }, {
    heading: "转码",
    content: "面向直播和多画面输出场景，对媒体流进行转码和编排。"
  }, {
    heading: "云端转码",
    content: "适合对实时流做多画面编排和转码输出。"
  }, {
    heading: "rtmp-网关",
    content: "解决标准协议直播和实时互动链路之间的协议衔接问题。"
  }, {
    heading: "fusion-cdn-直播",
    content: "通过多 CDN 供应商调度优化整体直播播放体验。"
  }, {
    heading: "fusion-cdn-直播",
    content: "补充说明：如果你的场景还涉及文档素材处理，现有声网体系里还存在 PPT 转码服务，但它可以暂时视为转码能力的延伸能力，而不是这一版左栏的一等入口。"
  }],
  headings: [{
    id: "录制",
    content: "录制"
  }, {
    id: "云端录制",
    content: "云端录制"
  }, {
    id: "本地服务端录制",
    content: "本地服务端录制"
  }, {
    id: "旁路推流",
    content: "旁路推流"
  }, {
    id: "输入在线媒体流",
    content: "输入在线媒体流"
  }, {
    id: "转码",
    content: "转码"
  }, {
    id: "云端转码",
    content: "云端转码"
  }, {
    id: "rtmp-网关",
    content: "RTMP 网关"
  }, {
    id: "fusion-cdn-直播",
    content: "Fusion CDN 直播"
  }]
};
export let toc = [{
  depth: 2,
  url: "#录制",
  title: _jsx(_Fragment, {
    children: "录制"
  })
}, {
  depth: 3,
  url: "#云端录制",
  title: _jsx(_Fragment, {
    children: "云端录制"
  })
}, {
  depth: 3,
  url: "#本地服务端录制",
  title: _jsx(_Fragment, {
    children: "本地服务端录制"
  })
}, {
  depth: 2,
  url: "#旁路推流",
  title: _jsx(_Fragment, {
    children: "旁路推流"
  })
}, {
  depth: 2,
  url: "#输入在线媒体流",
  title: _jsx(_Fragment, {
    children: "输入在线媒体流"
  })
}, {
  depth: 2,
  url: "#转码",
  title: _jsx(_Fragment, {
    children: "转码"
  })
}, {
  depth: 3,
  url: "#云端转码",
  title: _jsx(_Fragment, {
    children: "云端转码"
  })
}, {
  depth: 2,
  url: "#rtmp-网关",
  title: _jsx(_Fragment, {
    children: "RTMP 网关"
  })
}, {
  depth: 2,
  url: "#fusion-cdn-直播",
  title: _jsx(_Fragment, {
    children: "Fusion CDN 直播"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "录制",
      children: "录制"
    }), `
`, _jsx(_components.p, {
      children: "录制能力适合把实时互动内容沉淀到指定存储位置，补齐归档、回放、审核和复盘链路。"
    }), `
`, _jsx(_components.h3, {
      id: "云端录制",
      children: "云端录制"
    }), `
`, _jsx(_components.p, {
      children: "适合快速接入由声网托管的录制链路。"
    }), `
`, `
`, _jsx(_components.h3, {
      id: "本地服务端录制",
      children: "本地服务端录制"
    }), `
`, _jsx(_components.p, {
      children: "适合需要自主管理录制服务端和更细粒度控制录制流程的场景。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "旁路推流",
      children: "旁路推流"
    }), `
`, _jsx(_components.p, {
      children: "把互动频道内容推送到 CDN 或直播分发链路中。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "输入在线媒体流",
      children: "输入在线媒体流"
    }), `
`, _jsx(_components.p, {
      children: "把外部在线媒体流接入现有实时场景，丰富内容来源。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "转码",
      children: "转码"
    }), `
`, _jsx(_components.p, {
      children: "面向直播和多画面输出场景，对媒体流进行转码和编排。"
    }), `
`, _jsx(_components.h3, {
      id: "云端转码",
      children: "云端转码"
    }), `
`, _jsx(_components.p, {
      children: "适合对实时流做多画面编排和转码输出。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "rtmp-网关",
      children: "RTMP 网关"
    }), `
`, _jsx(_components.p, {
      children: "解决标准协议直播和实时互动链路之间的协议衔接问题。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "fusion-cdn-直播",
      children: "Fusion CDN 直播"
    }), `
`, _jsx(_components.p, {
      children: "通过多 CDN 供应商调度优化整体直播播放体验。"
    }), `
`, `
`, _jsx(_components.p, {
      children: "补充说明：如果你的场景还涉及文档素材处理，现有声网体系里还存在 PPT 转码服务，但它可以暂时视为转码能力的延伸能力，而不是这一版左栏的一等入口。"
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
