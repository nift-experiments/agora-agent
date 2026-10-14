import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "概览",
  description: "帮助你在声网实时互动与媒体能力中快速找到正确入口，包括实时互动、内容处理、外部媒体连接、大规模分发，以及设备接入。"
};
export let _markdown = `

## 从这里开始 [#从这里开始]

* 如果你还在准备项目、开通服务或鉴权，先看 [开通服务与准备凭证](/zh-CN/realtime-media/setup-service-and-credentials)。
* 如果你想先建立整体认识，先看 [基础实时能力](/zh-CN/realtime-media/foundation-realtime)。

## 你要做什么？ [#你要做什么]

### 搭建实时互动 [#搭建实时互动]

* [RTC](/zh-CN/realtime-media/rtc)：语音通话、视频通话、连麦互动和互动直播
* [RTM](/zh-CN/realtime-media/rtm2)：频道消息、在线状态、状态同步和实时协作
* [IM](/zh-CN/realtime-media/im)：面向更完整聊天系统的即时通讯能力
* [白板](/zh-CN/realtime-media/whiteboard)：实时会话中的共享白板与协作

### 处理会话内容 [#处理会话内容]

* [实时转录翻译](/zh-CN/realtime-media/speech-to-text)：字幕、语音理解和实时翻译
* [录制](/zh-CN/realtime-media/recording)：留档、回放、质检和合规
* [转码](/zh-CN/realtime-media/transcoding)：混流、布局编排和输出转换

### 连接外部媒体 [#连接外部媒体]

* [推流](/zh-CN/realtime-media/media-push)：把 RTC 频道内容送到 CDN 或下游媒体系统
* [拉流](/zh-CN/realtime-media/media-pull)：把外部在线媒体内容接入实时会话
* [RTMP 网关](/zh-CN/realtime-media/rtmp-gateway)：把 RTMP 设备或系统接入声网

### 面向大规模观看分发 [#面向大规模观看分发]

* [Fusion CDN](/zh-CN/realtime-media/fusion-cdn)：面向大观众量直播观看的多 CDN 分发

### 设备与服务端 [#设备与服务端]

* [RTSA](/zh-CN/realtime-media/rtsa)：摄像头、终端和嵌入式设备的实时接入能力
* [RTC 服务端 SDK](/zh-CN/realtime-media/rtc-server-sdk)：后端直接参与媒体流发送、接收和控制

## 常见阅读路径 [#常见阅读路径]

* 互动直播加大规模观看分发：[RTC](/zh-CN/realtime-media/rtc) -> [推流](/zh-CN/realtime-media/media-push) -> [Fusion CDN](/zh-CN/realtime-media/fusion-cdn)
* 会议录制与可检索内容：[RTC](/zh-CN/realtime-media/rtc) -> [录制](/zh-CN/realtime-media/recording) -> [实时转录翻译](/zh-CN/realtime-media/speech-to-text)
* 把外部流接入互动房间：[拉流](/zh-CN/realtime-media/media-pull) 或 [RTMP 网关](/zh-CN/realtime-media/rtmp-gateway) -> [RTC](/zh-CN/realtime-media/rtc)
* 智能设备接入与服务端媒体处理：[RTSA](/zh-CN/realtime-media/rtsa) -> [RTC 服务端 SDK](/zh-CN/realtime-media/rtc-server-sdk)
`;
export let structuredData = {
  contents: [{
    heading: "从这里开始",
    content: "如果你还在准备项目、开通服务或鉴权，先看 开通服务与准备凭证。"
  }, {
    heading: "从这里开始",
    content: "如果你想先建立整体认识，先看 基础实时能力。"
  }, {
    heading: "搭建实时互动",
    content: "RTC：语音通话、视频通话、连麦互动和互动直播"
  }, {
    heading: "搭建实时互动",
    content: "RTM：频道消息、在线状态、状态同步和实时协作"
  }, {
    heading: "搭建实时互动",
    content: "IM：面向更完整聊天系统的即时通讯能力"
  }, {
    heading: "搭建实时互动",
    content: "白板：实时会话中的共享白板与协作"
  }, {
    heading: "处理会话内容",
    content: "实时转录翻译：字幕、语音理解和实时翻译"
  }, {
    heading: "处理会话内容",
    content: "录制：留档、回放、质检和合规"
  }, {
    heading: "处理会话内容",
    content: "转码：混流、布局编排和输出转换"
  }, {
    heading: "连接外部媒体",
    content: "推流：把 RTC 频道内容送到 CDN 或下游媒体系统"
  }, {
    heading: "连接外部媒体",
    content: "拉流：把外部在线媒体内容接入实时会话"
  }, {
    heading: "连接外部媒体",
    content: "RTMP 网关：把 RTMP 设备或系统接入声网"
  }, {
    heading: "面向大规模观看分发",
    content: "Fusion CDN：面向大观众量直播观看的多 CDN 分发"
  }, {
    heading: "设备与服务端",
    content: "RTSA：摄像头、终端和嵌入式设备的实时接入能力"
  }, {
    heading: "设备与服务端",
    content: "RTC 服务端 SDK：后端直接参与媒体流发送、接收和控制"
  }, {
    heading: "常见阅读路径",
    content: "互动直播加大规模观看分发：RTC -> 推流 -> Fusion CDN"
  }, {
    heading: "常见阅读路径",
    content: "会议录制与可检索内容：RTC -> 录制 -> 实时转录翻译"
  }, {
    heading: "常见阅读路径",
    content: "把外部流接入互动房间：拉流 或 RTMP 网关 -> RTC"
  }, {
    heading: "常见阅读路径",
    content: "智能设备接入与服务端媒体处理：RTSA -> RTC 服务端 SDK"
  }],
  headings: [{
    id: "从这里开始",
    content: "从这里开始"
  }, {
    id: "你要做什么",
    content: "你要做什么？"
  }, {
    id: "搭建实时互动",
    content: "搭建实时互动"
  }, {
    id: "处理会话内容",
    content: "处理会话内容"
  }, {
    id: "连接外部媒体",
    content: "连接外部媒体"
  }, {
    id: "面向大规模观看分发",
    content: "面向大规模观看分发"
  }, {
    id: "设备与服务端",
    content: "设备与服务端"
  }, {
    id: "常见阅读路径",
    content: "常见阅读路径"
  }]
};
export let toc = [{
  depth: 2,
  url: "#从这里开始",
  title: _jsx(_Fragment, {
    children: "从这里开始"
  })
}, {
  depth: 2,
  url: "#你要做什么",
  title: _jsx(_Fragment, {
    children: "你要做什么？"
  })
}, {
  depth: 3,
  url: "#搭建实时互动",
  title: _jsx(_Fragment, {
    children: "搭建实时互动"
  })
}, {
  depth: 3,
  url: "#处理会话内容",
  title: _jsx(_Fragment, {
    children: "处理会话内容"
  })
}, {
  depth: 3,
  url: "#连接外部媒体",
  title: _jsx(_Fragment, {
    children: "连接外部媒体"
  })
}, {
  depth: 3,
  url: "#面向大规模观看分发",
  title: _jsx(_Fragment, {
    children: "面向大规模观看分发"
  })
}, {
  depth: 3,
  url: "#设备与服务端",
  title: _jsx(_Fragment, {
    children: "设备与服务端"
  })
}, {
  depth: 2,
  url: "#常见阅读路径",
  title: _jsx(_Fragment, {
    children: "常见阅读路径"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "从这里开始",
      children: "从这里开始"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["如果你还在准备项目、开通服务或鉴权，先看 ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/setup-service-and-credentials",
          children: "开通服务与准备凭证"
        }), "。"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果你想先建立整体认识，先看 ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/foundation-realtime",
          children: "基础实时能力"
        }), "。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "你要做什么",
      children: "你要做什么？"
    }), `
`, _jsx(_components.h3, {
      id: "搭建实时互动",
      children: "搭建实时互动"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtc",
          children: "RTC"
        }), "：语音通话、视频通话、连麦互动和互动直播"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtm2",
          children: "RTM"
        }), "：频道消息、在线状态、状态同步和实时协作"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/im",
          children: "IM"
        }), "：面向更完整聊天系统的即时通讯能力"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/whiteboard",
          children: "白板"
        }), "：实时会话中的共享白板与协作"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "处理会话内容",
      children: "处理会话内容"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/speech-to-text",
          children: "实时转录翻译"
        }), "：字幕、语音理解和实时翻译"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/recording",
          children: "录制"
        }), "：留档、回放、质检和合规"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/transcoding",
          children: "转码"
        }), "：混流、布局编排和输出转换"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "连接外部媒体",
      children: "连接外部媒体"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/media-push",
          children: "推流"
        }), "：把 RTC 频道内容送到 CDN 或下游媒体系统"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/media-pull",
          children: "拉流"
        }), "：把外部在线媒体内容接入实时会话"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtmp-gateway",
          children: "RTMP 网关"
        }), "：把 RTMP 设备或系统接入声网"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "面向大规模观看分发",
      children: "面向大规模观看分发"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/fusion-cdn",
          children: "Fusion CDN"
        }), "：面向大观众量直播观看的多 CDN 分发"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "设备与服务端",
      children: "设备与服务端"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtsa",
          children: "RTSA"
        }), "：摄像头、终端和嵌入式设备的实时接入能力"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtc-server-sdk",
          children: "RTC 服务端 SDK"
        }), "：后端直接参与媒体流发送、接收和控制"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "常见阅读路径",
      children: "常见阅读路径"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["互动直播加大规模观看分发：", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtc",
          children: "RTC"
        }), " -> ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/media-push",
          children: "推流"
        }), " -> ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/fusion-cdn",
          children: "Fusion CDN"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["会议录制与可检索内容：", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtc",
          children: "RTC"
        }), " -> ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/recording",
          children: "录制"
        }), " -> ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/speech-to-text",
          children: "实时转录翻译"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["把外部流接入互动房间：", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/media-pull",
          children: "拉流"
        }), " 或 ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtmp-gateway",
          children: "RTMP 网关"
        }), " -> ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtc",
          children: "RTC"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["智能设备接入与服务端媒体处理：", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtsa",
          children: "RTSA"
        }), " -> ", _jsx(_components.a, {
          href: "/zh-CN/realtime-media/rtc-server-sdk",
          children: "RTC 服务端 SDK"
        })]
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
