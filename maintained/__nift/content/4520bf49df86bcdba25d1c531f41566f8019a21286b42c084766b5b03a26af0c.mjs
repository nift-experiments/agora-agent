import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "总览",
  description: "先选对 Agora 的产品入口，再快速进入对应的接入路径和实现文档。"
};
export let _markdown = `

## Voice agent [#voice-agent]

了解声网的语音智能体产品。

<OverviewSpotlightGrid size="small">
  <OverviewSpotlightCard description="15 分钟内跑通一个可用的语音智能体。" href="/zh-CN/ai/quick-start" size="small" title="Voice agent 快速开始" variant="code" />

  <OverviewSpotlightCard description="了解架构、模型选择和生产接入路径。" href="/zh-CN/ai" size="small" title="Voice agent 概览" variant="platform" />
</OverviewSpotlightGrid>

## Realtime & Media [#realtime--media]

先比较声网的实时能力。

<div className="not-prose my-6">
  <OverviewSpotlightCard description="查看实时互动、媒体处理、外部媒体连接和大规模分发的完整能力地图。" href="/zh-CN/realtime-media" title="查看 Realtime & Media 总览" variant="platform" />
</div>

<CapabilityMatrix
  rows="[
  {
    title: '构建实时互动',
    description: '在同一会话里实时交换媒体和状态。',
    items: ['Voice & Video', 'Signaling', 'Chat', 'Whiteboard'],
  },
  {
    title: '处理会话内容',
    description: '把会话中的媒体内容转换成文字和下游资产。',
    items: ['转录', '翻译', '录制', '转码'],
  },
  {
    title: '连接外部媒体',
    description: '把 Agora 会话连接到外部流媒体系统。',
    items: ['Media Push', 'Media Pull', 'RTMP Gateway'],
  },
  {
    title: '分发到更大规模观众',
    description: '把实时互动层扩展到更大规模播放。',
    items: ['Fusion CDN'],
  },
]"
/>

## Solutions [#solutions]

查看常见产品形态的解决方案路径。

<OverviewSpotlightGrid size="small">
  <OverviewSpotlightCard description="快速搭建带连麦、PK 和互动玩法的直播产品。" href="/zh-CN/solutions/showroom" size="small" title="直播解决方案" variant="platform" />

  <OverviewSpotlightCard description="快速搭建支持参会者管理和房间控制的会议产品。" href="/zh-CN/solutions/meeting" size="small" title="会议解决方案" variant="platform" />

  <OverviewSpotlightCard description="快速搭建以课堂角色、课堂控制和教学流程为核心的在线课堂产品。" href="/zh-CN/solutions/flexible-classroom" size="small" title="课堂解决方案" variant="platform" />
</OverviewSpotlightGrid>

## SDKs and tools [#sdks-and-tools]

查看 SDK、API 和开发工具。

<OverviewToolkits>
  <ToolkitGroup title="Agent frameworks">
    <ToolkitItem href="/zh-CN/ai/quick-start" icon="python" label="Python" />

    <ToolkitItem href="/zh-CN/ai/skills-integrate" icon="typescript" label="TypeScript" />
  </ToolkitGroup>

  <ToolkitGroup title="Tools">
    <ToolkitItem href="/zh-CN/introduction/start-with-ai" icon="cli" label="CLI" />

    <ToolkitItem href="/zh-CN/ai" icon="studio" label="AI" />

    <ToolkitItem href="/zh-CN/ai/mcp-integrate" icon="mcp" label="MCP" />

    <ToolkitItem href="/zh-CN/ai/skills-integrate" icon="skills" label="Skills" />
  </ToolkitGroup>

  <ToolkitGroup title="Component libraries">
    <ToolkitItem href="/zh-CN/api-reference" icon="web" label="Web" />

    <ToolkitItem href="/zh-CN/api-reference" icon="android" label="Android" />

    <ToolkitItem href="/zh-CN/api-reference" icon="ios" label="iOS" />
  </ToolkitGroup>

  <ToolkitGroup title="SDKs and APIs">
    <ToolkitItem href="/zh-CN/realtime-media/rtc" icon="rtc" label="RTC" />

    <ToolkitItem href="/zh-CN/realtime-media/rtm2" icon="messaging" label="RTM" />

    <ToolkitItem href="/zh-CN/realtime-media/speech-to-text" icon="stt" label="Speech to Text" />

    <ToolkitItem href="/zh-CN/api-reference" icon="rest" label="REST API" />
  </ToolkitGroup>

  <ToolkitGroup title="Server SDKs">
    <ToolkitItem href="/zh-CN/api-reference" icon="go" label="Go" />

    <ToolkitItem href="/zh-CN/api-reference" icon="python" label="Python" />

    <ToolkitItem href="/zh-CN/api-reference" icon="typescript" label="TypeScript" />

    <ToolkitItem href="/zh-CN/realtime-media/rtc-server-sdk" icon="server" label="Media processing" />
  </ToolkitGroup>
</OverviewToolkits>
`;
export let structuredData = {
  contents: [{
    heading: "voice-agent",
    content: "了解声网的语音智能体产品。"
  }, {
    heading: "realtime--media",
    content: "先比较声网的实时能力。"
  }, {
    heading: "solutions",
    content: "查看常见产品形态的解决方案路径。"
  }, {
    heading: "sdks-and-tools",
    content: "查看 SDK、API 和开发工具。"
  }],
  headings: [{
    id: "voice-agent",
    content: "Voice agent"
  }, {
    id: "realtime--media",
    content: "Realtime & Media"
  }, {
    id: "solutions",
    content: "Solutions"
  }, {
    id: "sdks-and-tools",
    content: "SDKs and tools"
  }]
};
export let toc = [{
  depth: 2,
  url: "#voice-agent",
  title: _jsx(_Fragment, {
    children: "Voice agent"
  })
}, {
  depth: 2,
  url: "#realtime--media",
  title: _jsx(_Fragment, {
    children: "Realtime & Media"
  })
}, {
  depth: 2,
  url: "#solutions",
  title: _jsx(_Fragment, {
    children: "Solutions"
  })
}, {
  depth: 2,
  url: "#sdks-and-tools",
  title: _jsx(_Fragment, {
    children: "SDKs and tools"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  }, { CapabilityMatrix, OverviewSpotlightCard, OverviewSpotlightGrid, OverviewToolkits, ToolkitGroup, ToolkitItem } = _components;
  if (!CapabilityMatrix)
    _missingMdxReference("CapabilityMatrix", true);
  if (!OverviewSpotlightCard)
    _missingMdxReference("OverviewSpotlightCard", true);
  if (!OverviewSpotlightGrid)
    _missingMdxReference("OverviewSpotlightGrid", true);
  if (!OverviewToolkits)
    _missingMdxReference("OverviewToolkits", true);
  if (!ToolkitGroup)
    _missingMdxReference("ToolkitGroup", true);
  if (!ToolkitItem)
    _missingMdxReference("ToolkitItem", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "voice-agent",
      children: "Voice agent"
    }), `
`, _jsx(_components.p, {
      children: "了解声网的语音智能体产品。"
    }), `
`, _jsxs(OverviewSpotlightGrid, {
      size: "small",
      children: [_jsx(OverviewSpotlightCard, {
        description: "15 分钟内跑通一个可用的语音智能体。",
        href: "/zh-CN/ai/quick-start",
        size: "small",
        title: "Voice agent 快速开始",
        variant: "code"
      }), _jsx(OverviewSpotlightCard, {
        description: "了解架构、模型选择和生产接入路径。",
        href: "/zh-CN/ai",
        size: "small",
        title: "Voice agent 概览",
        variant: "platform"
      })]
    }), `
`, _jsx(_components.h2, {
      id: "realtime--media",
      children: "Realtime & Media"
    }), `
`, _jsx(_components.p, {
      children: "先比较声网的实时能力。"
    }), `
`, _jsx("div", {
      className: "not-prose my-6",
      children: _jsx(OverviewSpotlightCard, {
        description: "查看实时互动、媒体处理、外部媒体连接和大规模分发的完整能力地图。",
        href: "/zh-CN/realtime-media",
        title: "查看 Realtime & Media 总览",
        variant: "platform"
      })
    }), `
`, _jsx(CapabilityMatrix, {
      rows: [{
        title: "构建实时互动",
        description: "在同一会话里实时交换媒体和状态。",
        items: ["Voice & Video", "Signaling", "Chat", "Whiteboard"]
      }, {
        title: "处理会话内容",
        description: "把会话中的媒体内容转换成文字和下游资产。",
        items: ["转录", "翻译", "录制", "转码"]
      }, {
        title: "连接外部媒体",
        description: "把 Agora 会话连接到外部流媒体系统。",
        items: ["Media Push", "Media Pull", "RTMP Gateway"]
      }, {
        title: "分发到更大规模观众",
        description: "把实时互动层扩展到更大规模播放。",
        items: ["Fusion CDN"]
      }]
    }), `
`, _jsx(_components.h2, {
      id: "solutions",
      children: "Solutions"
    }), `
`, _jsx(_components.p, {
      children: "查看常见产品形态的解决方案路径。"
    }), `
`, _jsxs(OverviewSpotlightGrid, {
      size: "small",
      children: [_jsx(OverviewSpotlightCard, {
        description: "快速搭建带连麦、PK 和互动玩法的直播产品。",
        href: "/zh-CN/solutions/showroom",
        size: "small",
        title: "直播解决方案",
        variant: "platform"
      }), _jsx(OverviewSpotlightCard, {
        description: "快速搭建支持参会者管理和房间控制的会议产品。",
        href: "/zh-CN/solutions/meeting",
        size: "small",
        title: "会议解决方案",
        variant: "platform"
      }), _jsx(OverviewSpotlightCard, {
        description: "快速搭建以课堂角色、课堂控制和教学流程为核心的在线课堂产品。",
        href: "/zh-CN/solutions/flexible-classroom",
        size: "small",
        title: "课堂解决方案",
        variant: "platform"
      })]
    }), `
`, _jsx(_components.h2, {
      id: "sdks-and-tools",
      children: "SDKs and tools"
    }), `
`, _jsx(_components.p, {
      children: "查看 SDK、API 和开发工具。"
    }), `
`, _jsxs(OverviewToolkits, {
      children: [_jsxs(ToolkitGroup, {
        title: "Agent frameworks",
        children: [_jsx(ToolkitItem, {
          href: "/zh-CN/ai/quick-start",
          icon: "python",
          label: "Python"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/ai/skills-integrate",
          icon: "typescript",
          label: "TypeScript"
        })]
      }), _jsxs(ToolkitGroup, {
        title: "Tools",
        children: [_jsx(ToolkitItem, {
          href: "/zh-CN/introduction/start-with-ai",
          icon: "cli",
          label: "CLI"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/ai",
          icon: "studio",
          label: "AI"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/ai/mcp-integrate",
          icon: "mcp",
          label: "MCP"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/ai/skills-integrate",
          icon: "skills",
          label: "Skills"
        })]
      }), _jsxs(ToolkitGroup, {
        title: "Component libraries",
        children: [_jsx(ToolkitItem, {
          href: "/zh-CN/api-reference",
          icon: "web",
          label: "Web"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/api-reference",
          icon: "android",
          label: "Android"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/api-reference",
          icon: "ios",
          label: "iOS"
        })]
      }), _jsxs(ToolkitGroup, {
        title: "SDKs and APIs",
        children: [_jsx(ToolkitItem, {
          href: "/zh-CN/realtime-media/rtc",
          icon: "rtc",
          label: "RTC"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/realtime-media/rtm2",
          icon: "messaging",
          label: "RTM"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/realtime-media/speech-to-text",
          icon: "stt",
          label: "Speech to Text"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/api-reference",
          icon: "rest",
          label: "REST API"
        })]
      }), _jsxs(ToolkitGroup, {
        title: "Server SDKs",
        children: [_jsx(ToolkitItem, {
          href: "/zh-CN/api-reference",
          icon: "go",
          label: "Go"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/api-reference",
          icon: "python",
          label: "Python"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/api-reference",
          icon: "typescript",
          label: "TypeScript"
        }), _jsx(ToolkitItem, {
          href: "/zh-CN/realtime-media/rtc-server-sdk",
          icon: "server",
          label: "Media processing"
        })]
      })]
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
