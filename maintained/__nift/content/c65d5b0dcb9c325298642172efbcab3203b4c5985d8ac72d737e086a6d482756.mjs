import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "选择解决方案",
  description: "从你要交付的业务产品出发，进入对应的声网解决方案文档。"
};
export let _markdown = `

<SolutionCardGrid>
  <SolutionCard description="主播观众互动、连麦、PK 和房间互动型直播产品。" href="/zh-CN/solutions/showroom" tags="[&#x22;RTC&#x22;]" title="开启直播互动" tone="blue" />

  <SolutionCard description="跨平台游戏语音，适合组队协作和低门槛语音接入。" href="/zh-CN/solutions/game-voice" tags="[&#x22;RTC&#x22;]" title="加入游戏语音" tone="purple" />

  <SolutionCard description="多方会议、参会者控制和协作型会议产品体验。" href="/zh-CN/solutions/meeting" tags="[&#x22;RTC&#x22;]" title="搭建会议产品" tone="blue" />

  <SolutionCard description="适合小程序、终端和轻客户端的简洁实时通话。" href="/zh-CN/solutions/voip-call" tags="[&#x22;RTC&#x22;]" title="开启轻量通话" tone="sand" />

  <SolutionCard description="老师学生互动、课堂控制和教学流程优先的产品路径。" href="/zh-CN/solutions/flexible-classroom" tags="[&#x22;RTC&#x22;]" title="搭建在线课堂" tone="pink" />

  <SolutionCard description="远程操控、设备控制和操作台反馈的一体化实时链路。" href="/zh-CN/solutions/teleoperation" tags="[&#x22;RTSA&#x22;]" title="远程操控设备" tone="green" />
</SolutionCardGrid>

## 教育 [#教育]

<SolutionCardGrid size="small">
  <SolutionCard description="更快上线课堂产品。" href="/zh-CN/solutions/flexible-classroom" size="small" tags="[&#x22;RTC&#x22;]" title="搭建在线课堂" tone="pink" />

  <SolutionCard description="老师和学生直接互动。" href="/zh-CN/solutions/one-to-one-classroom" title="开展一对一教学" size="small" tags="[&#x22;RTC&#x22;]" tone="pink" />

  <SolutionCard description="适合小班互动教学。" href="/zh-CN/solutions/small-classroom" title="开展小班教学" size="small" tags="[&#x22;RTC&#x22;]" tone="pink" />

  <SolutionCard description="适合大班加分组讨论。" href="/zh-CN/solutions/breakout-classroom" title="搭建大班分组课" size="small" tags="[&#x22;RTC&#x22;]" tone="pink" />

  <SolutionCard description="强调画面与视觉教学效果。" href="/zh-CN/solutions/art-class" title="开展在线美术教学" size="small" tags="[&#x22;RTC&#x22;]" tone="sand" />

  <SolutionCard description="强调音质和乐器教学体验。" href="/zh-CN/solutions/online-music-class" title="开展在线音乐教学" size="small" tags="[&#x22;RTC&#x22;]" tone="purple" />
</SolutionCardGrid>

## 设备与行业 [#设备与行业]

<SolutionCardGrid size="small">
  <SolutionCard description="实时控制与操作反馈。" href="/zh-CN/solutions/teleoperation" title="远程操控设备" size="small" tags="[&#x22;RTSA&#x22;]" tone="green" />

  <SolutionCard description="摄像头到客户端的互通。" href="/zh-CN/solutions/smart-camera" title="连接智能摄像头" size="small" tags="[&#x22;RTC&#x22;]" tone="blue" />

  <SolutionCard description="门铃和门锁实时互通。" href="/zh-CN/solutions/smart-doorbell" title="连接智能门铃" size="small" tags="[&#x22;RTC&#x22;]" tone="sand" />

  <SolutionCard description="面向手表设备的轻量通话。" href="/zh-CN/solutions/smart-watch" title="开启手表通话" size="small" tags="[&#x22;RTC&#x22;]" tone="green" />
</SolutionCardGrid>

## 这个 tab 和其它 tab 的边界 [#这个-tab-和其它-tab-的边界]

* \`AI\` 负责对话式 AI、Agent Studio、Device Kit 这类 AI 产品与接入路径。
* \`Realtime & Media\` 负责 RTC、RTM、白板、录制、CDN、转写等底层能力产品。
* \`Solutions\` 负责按用户能直接识别的业务方案来组织文档，而不是按底层技术栈来组织。
`;
export let structuredData = {
  contents: [{
    heading: "这个-tab-和其它-tab-的边界",
    content: "`AI` 负责对话式 AI、Agent Studio、Device Kit 这类 AI 产品与接入路径。"
  }, {
    heading: "这个-tab-和其它-tab-的边界",
    content: "`Realtime & Media` 负责 RTC、RTM、白板、录制、CDN、转写等底层能力产品。"
  }, {
    heading: "这个-tab-和其它-tab-的边界",
    content: "`Solutions` 负责按用户能直接识别的业务方案来组织文档，而不是按底层技术栈来组织。"
  }],
  headings: [{
    id: "教育",
    content: "教育"
  }, {
    id: "设备与行业",
    content: "设备与行业"
  }, {
    id: "这个-tab-和其它-tab-的边界",
    content: "这个 tab 和其它 tab 的边界"
  }]
};
export let toc = [{
  depth: 2,
  url: "#教育",
  title: _jsx(_Fragment, {
    children: "教育"
  })
}, {
  depth: 2,
  url: "#设备与行业",
  title: _jsx(_Fragment, {
    children: "设备与行业"
  })
}, {
  depth: 2,
  url: "#这个-tab-和其它-tab-的边界",
  title: _jsx(_Fragment, {
    children: "这个 tab 和其它 tab 的边界"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    ul: "ul",
    ...props.components
  }, { SolutionCard, SolutionCardGrid } = _components;
  if (!SolutionCard)
    _missingMdxReference("SolutionCard", true);
  if (!SolutionCardGrid)
    _missingMdxReference("SolutionCardGrid", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(SolutionCardGrid, {
      children: [_jsx(SolutionCard, {
        description: "主播观众互动、连麦、PK 和房间互动型直播产品。",
        href: "/zh-CN/solutions/showroom",
        tags: ["RTC"],
        title: "开启直播互动",
        tone: "blue"
      }), _jsx(SolutionCard, {
        description: "跨平台游戏语音，适合组队协作和低门槛语音接入。",
        href: "/zh-CN/solutions/game-voice",
        tags: ["RTC"],
        title: "加入游戏语音",
        tone: "purple"
      }), _jsx(SolutionCard, {
        description: "多方会议、参会者控制和协作型会议产品体验。",
        href: "/zh-CN/solutions/meeting",
        tags: ["RTC"],
        title: "搭建会议产品",
        tone: "blue"
      }), _jsx(SolutionCard, {
        description: "适合小程序、终端和轻客户端的简洁实时通话。",
        href: "/zh-CN/solutions/voip-call",
        tags: ["RTC"],
        title: "开启轻量通话",
        tone: "sand"
      }), _jsx(SolutionCard, {
        description: "老师学生互动、课堂控制和教学流程优先的产品路径。",
        href: "/zh-CN/solutions/flexible-classroom",
        tags: ["RTC"],
        title: "搭建在线课堂",
        tone: "pink"
      }), _jsx(SolutionCard, {
        description: "远程操控、设备控制和操作台反馈的一体化实时链路。",
        href: "/zh-CN/solutions/teleoperation",
        tags: ["RTSA"],
        title: "远程操控设备",
        tone: "green"
      })]
    }), `
`, _jsx(_components.h2, {
      id: "教育",
      children: "教育"
    }), `
`, _jsxs(SolutionCardGrid, {
      size: "small",
      children: [_jsx(SolutionCard, {
        description: "更快上线课堂产品。",
        href: "/zh-CN/solutions/flexible-classroom",
        size: "small",
        tags: ["RTC"],
        title: "搭建在线课堂",
        tone: "pink"
      }), _jsx(SolutionCard, {
        description: "老师和学生直接互动。",
        href: "/zh-CN/solutions/one-to-one-classroom",
        title: "开展一对一教学",
        size: "small",
        tags: ["RTC"],
        tone: "pink"
      }), _jsx(SolutionCard, {
        description: "适合小班互动教学。",
        href: "/zh-CN/solutions/small-classroom",
        title: "开展小班教学",
        size: "small",
        tags: ["RTC"],
        tone: "pink"
      }), _jsx(SolutionCard, {
        description: "适合大班加分组讨论。",
        href: "/zh-CN/solutions/breakout-classroom",
        title: "搭建大班分组课",
        size: "small",
        tags: ["RTC"],
        tone: "pink"
      }), _jsx(SolutionCard, {
        description: "强调画面与视觉教学效果。",
        href: "/zh-CN/solutions/art-class",
        title: "开展在线美术教学",
        size: "small",
        tags: ["RTC"],
        tone: "sand"
      }), _jsx(SolutionCard, {
        description: "强调音质和乐器教学体验。",
        href: "/zh-CN/solutions/online-music-class",
        title: "开展在线音乐教学",
        size: "small",
        tags: ["RTC"],
        tone: "purple"
      })]
    }), `
`, _jsx(_components.h2, {
      id: "设备与行业",
      children: "设备与行业"
    }), `
`, _jsxs(SolutionCardGrid, {
      size: "small",
      children: [_jsx(SolutionCard, {
        description: "实时控制与操作反馈。",
        href: "/zh-CN/solutions/teleoperation",
        title: "远程操控设备",
        size: "small",
        tags: ["RTSA"],
        tone: "green"
      }), _jsx(SolutionCard, {
        description: "摄像头到客户端的互通。",
        href: "/zh-CN/solutions/smart-camera",
        title: "连接智能摄像头",
        size: "small",
        tags: ["RTC"],
        tone: "blue"
      }), _jsx(SolutionCard, {
        description: "门铃和门锁实时互通。",
        href: "/zh-CN/solutions/smart-doorbell",
        title: "连接智能门铃",
        size: "small",
        tags: ["RTC"],
        tone: "sand"
      }), _jsx(SolutionCard, {
        description: "面向手表设备的轻量通话。",
        href: "/zh-CN/solutions/smart-watch",
        title: "开启手表通话",
        size: "small",
        tags: ["RTC"],
        tone: "green"
      })]
    }), `
`, _jsx(_components.h2, {
      id: "这个-tab-和其它-tab-的边界",
      children: "这个 tab 和其它 tab 的边界"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "AI"
        }), " 负责对话式 AI、Agent Studio、Device Kit 这类 AI 产品与接入路径。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Realtime & Media"
        }), " 负责 RTC、RTM、白板、录制、CDN、转写等底层能力产品。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Solutions"
        }), " 负责按用户能直接识别的业务方案来组织文档，而不是按底层技术栈来组织。"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
