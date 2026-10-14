import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音视频",
  description: "帮你快速定位实时音视频互动的接入入口，以及它与当前 ConvoAI 文档的衔接关系。"
};
export let _markdown = `

## 这类能力解决什么问题 [#这类能力解决什么问题]

实时音视频负责低时延的音频、视频和频道会话，是通话、直播、互动课堂、语音房和 AI 实时对话的基础层。

## 对应的官方产品文档 [#对应的官方产品文档]

* [查看实时互动 RTC 文档总览](https://doc.shengwang.cn/doc/rtc/homepage)
* [查看 Android 快速开始](https://doc.shengwang.cn/doc/rtc/android/get-started/quick-start)
* [查看 Web 快速开始](https://doc.shengwang.cn/doc/rtc/javascript/get-started/quick-start)
* [查看 Token 鉴权](https://doc.shengwang.cn/doc/rtc/android/basic-features/token-authentication)

## 和当前仓库的关系 [#和当前仓库的关系]

这个仓库目前重点收录的是 ConvoAI RESTful 文档，所以你在这里看到的很多 AI 能力页，默认都建立在 RTC 已经打通的前提之上。

* [查看对话式 AI 快速开始](/zh-CN/ai/quick-start)
* [查看音频模态文档](/zh-CN/realtime-media/speech-to-text/audio-modality)

## 常见接入顺序 [#常见接入顺序]

### 先把 RTC 基础链路跑通 [#先把-rtc-基础链路跑通]

先完成频道加入、设备权限、音频采集和鉴权，再进入更上层的 AI 或媒体处理能力。

### 再补场景化能力 [#再补场景化能力]

如果你后续要扩展到 AI 对话、录制、转录或消息协作，可以在 RTC 基础链路上继续叠加对应能力页，而不是一开始把所有产品混在一起。
`;
export let structuredData = {
  contents: [{
    heading: "这类能力解决什么问题",
    content: "实时音视频负责低时延的音频、视频和频道会话，是通话、直播、互动课堂、语音房和 AI 实时对话的基础层。"
  }, {
    heading: "对应的官方产品文档",
    content: "查看实时互动 RTC 文档总览"
  }, {
    heading: "对应的官方产品文档",
    content: "查看 Android 快速开始"
  }, {
    heading: "对应的官方产品文档",
    content: "查看 Web 快速开始"
  }, {
    heading: "对应的官方产品文档",
    content: "查看 Token 鉴权"
  }, {
    heading: "和当前仓库的关系",
    content: "这个仓库目前重点收录的是 ConvoAI RESTful 文档，所以你在这里看到的很多 AI 能力页，默认都建立在 RTC 已经打通的前提之上。"
  }, {
    heading: "和当前仓库的关系",
    content: "查看对话式 AI 快速开始"
  }, {
    heading: "和当前仓库的关系",
    content: "查看音频模态文档"
  }, {
    heading: "先把-rtc-基础链路跑通",
    content: "先完成频道加入、设备权限、音频采集和鉴权，再进入更上层的 AI 或媒体处理能力。"
  }, {
    heading: "再补场景化能力",
    content: "如果你后续要扩展到 AI 对话、录制、转录或消息协作，可以在 RTC 基础链路上继续叠加对应能力页，而不是一开始把所有产品混在一起。"
  }],
  headings: [{
    id: "这类能力解决什么问题",
    content: "这类能力解决什么问题"
  }, {
    id: "对应的官方产品文档",
    content: "对应的官方产品文档"
  }, {
    id: "和当前仓库的关系",
    content: "和当前仓库的关系"
  }, {
    id: "常见接入顺序",
    content: "常见接入顺序"
  }, {
    id: "先把-rtc-基础链路跑通",
    content: "先把 RTC 基础链路跑通"
  }, {
    id: "再补场景化能力",
    content: "再补场景化能力"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这类能力解决什么问题",
  title: _jsx(_Fragment, {
    children: "这类能力解决什么问题"
  })
}, {
  depth: 2,
  url: "#对应的官方产品文档",
  title: _jsx(_Fragment, {
    children: "对应的官方产品文档"
  })
}, {
  depth: 2,
  url: "#和当前仓库的关系",
  title: _jsx(_Fragment, {
    children: "和当前仓库的关系"
  })
}, {
  depth: 2,
  url: "#常见接入顺序",
  title: _jsx(_Fragment, {
    children: "常见接入顺序"
  })
}, {
  depth: 3,
  url: "#先把-rtc-基础链路跑通",
  title: _jsx(_Fragment, {
    children: "先把 RTC 基础链路跑通"
  })
}, {
  depth: 3,
  url: "#再补场景化能力",
  title: _jsx(_Fragment, {
    children: "再补场景化能力"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "这类能力解决什么问题",
      children: "这类能力解决什么问题"
    }), `
`, _jsx(_components.p, {
      children: "实时音视频负责低时延的音频、视频和频道会话，是通话、直播、互动课堂、语音房和 AI 实时对话的基础层。"
    }), `
`, _jsx(_components.h2, {
      id: "对应的官方产品文档",
      children: "对应的官方产品文档"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/homepage",
          children: "查看实时互动 RTC 文档总览"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/android/get-started/quick-start",
          children: "查看 Android 快速开始"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/javascript/get-started/quick-start",
          children: "查看 Web 快速开始"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/android/basic-features/token-authentication",
          children: "查看 Token 鉴权"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "和当前仓库的关系",
      children: "和当前仓库的关系"
    }), `
`, _jsx(_components.p, {
      children: "这个仓库目前重点收录的是 ConvoAI RESTful 文档，所以你在这里看到的很多 AI 能力页，默认都建立在 RTC 已经打通的前提之上。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/quick-start",
          children: "查看对话式 AI 快速开始"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/realtime-media/speech-to-text/audio-modality",
          children: "查看音频模态文档"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "常见接入顺序",
      children: "常见接入顺序"
    }), `
`, _jsx(_components.h3, {
      id: "先把-rtc-基础链路跑通",
      children: "先把 RTC 基础链路跑通"
    }), `
`, _jsx(_components.p, {
      children: "先完成频道加入、设备权限、音频采集和鉴权，再进入更上层的 AI 或媒体处理能力。"
    }), `
`, _jsx(_components.h3, {
      id: "再补场景化能力",
      children: "再补场景化能力"
    }), `
`, _jsx(_components.p, {
      children: "如果你后续要扩展到 AI 对话、录制、转录或消息协作，可以在 RTC 基础链路上继续叠加对应能力页，而不是一开始把所有产品混在一起。"
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
