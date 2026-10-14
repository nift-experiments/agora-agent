import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "navigation-landing",
  title: "Agora Documentation"
};
export let _markdown = `

## Build a Voice Agent [#build-a-voice-agent]

<SolutionCardGrid>
  <SolutionCard title="Explore Voice Agents" href="/en/ai" icon="ai" tone="blue" description="Understand how Agora Voice Agents work and choose the right path for apps or dedicated devices." />

  <SolutionCard title="Build a Voice Agent App" href="/en/ai/get-started/quickstart" icon="rtc" tone="purple" description="Build the minimal backend-plus-client flow and get a working voice agent running quickly." />
</SolutionCardGrid>

## Build Real-Time Applications [#build-real-time-applications]

<SolutionCardGrid>
  <SolutionCard title="Realtime Communication" href="/en/realtime-media/rtc" icon="video-calling" tone="purple" description="Voice calls, video calls, interactive live streaming, and broadcast streaming sessions." />

  <SolutionCard title="Signaling" href="/en/realtime-media/rtm" icon="signaling" tone="green" description="Channel messaging, presence, and real-time state synchronization." />
</SolutionCardGrid>

<OverviewLinkBanner title="Explore Agora real-time communication products" href="/en/realtime-media/overview" description="See every real-time capability — recording, transcription, transcoding, external media, and audience delivery." />

## Start with AI Tools [#start-with-ai-tools]

<SolutionCardGrid>
  <SolutionCard title="Start with AI tools" href="/en/introduction/start-with-ai" icon="tools" tone="sand" description="Let your coding agent build with Agora. Connect the CLI, MCP server, and Skills to your AI workflow." />
</SolutionCardGrid>

## Real-time use cases [#real-time-use-cases]

<OverviewLinkBanner title="Browse RTC products and use cases" href="/en/realtime-media" description="Find real-time products and solution patterns for calling, streaming, classrooms, connected devices, and analytics." />

## SDKs and APIs [#sdks-and-apis]

<div className="not-prose my-8 grid gap-4 lg:grid-cols-3">
  <ToolkitGroup title="Client-Side SDKs">
    <ToolkitItem href="/en/api-reference/sdks?platform=android" icon="android" label="Android" />

    <ToolkitItem href="/en/api-reference/sdks?platform=ios" icon="ios" label="iOS" />

    <ToolkitItem href="/en/api-reference/sdks?platform=web" icon="web" label="Web" />
  </ToolkitGroup>

  <ToolkitGroup title="APIs">
    <ToolkitItem href="/en/api-reference/api-ref" icon="rest" label="REST APIs" />

    <ToolkitItem href="/en/api-reference/api-ref/rtc" icon="rtc" label="Voice & Video" />

    <ToolkitItem href="/en/api-reference/api-ref/signaling" icon="messaging" label="Signaling" />

    <ToolkitItem href="/en/api-reference/api-ref/speech-to-text" icon="stt" label="Real-Time Speech-To-Text" />
  </ToolkitGroup>

  <ToolkitGroup title="Server-Side SDKs">
    <ToolkitItem href="/en/api-reference/api-ref/server-sdk/python" icon="python" label="Python" />

    <ToolkitItem href="/en/api-reference/api-ref/server-sdk/typescript" icon="typescript" label="TypeScript" />

    <ToolkitItem href="/en/api-reference/api-ref/server-sdk/go" icon="go" label="Go" />

    <ToolkitItem href="/en/realtime-media/rtc-server-sdk" icon="server" label="Server Gateway" />
  </ToolkitGroup>
</div>

## Get Help [#get-help]

<HelpHub
  cards="[
  {
    title: &#x22;Support tickets&#x22;,
    description: &#x22;Log in to submit a ticket through the Console.&#x22;,
    cta: &#x22;Create a ticket&#x22;,
    href: &#x22;https://agoraio.zendesk.com/hc/en-us&#x22;,
    icon: &#x22;ticket&#x22;,
  },
  {
    title: &#x22;Stack Overflow&#x22;,
    description: &#x22;Our team monitors Stack Overflow for quick answers.&#x22;,
    cta: &#x22;Go to Stack Overflow&#x22;,
    href: &#x22;https://stackoverflow.com/search?q=agora.io&#x22;,
    icon: &#x22;stack-overflow&#x22;,
  },
  {
    title: &#x22;Discord&#x22;,
    description: &#x22;Ask questions and share what you’re building with the community.&#x22;,
    cta: &#x22;Join Discord&#x22;,
    href: &#x22;https://discord.gg/QfgBCvuX4d&#x22;,
    icon: &#x22;discord&#x22;,
  },
  {
    title: &#x22;Status page&#x22;,
    description: &#x22;Stay informed about service health and maintenance updates.&#x22;,
    cta: &#x22;View status&#x22;,
    href: &#x22;https://status.agora.io/&#x22;,
    icon: &#x22;status&#x22;,
  },
]"
  knowledgeBase="[
  {
    label: &#x22;How to implement basic HTTP authentication?&#x22;,
    href: &#x22;/en/api-reference/api-ref/conversational-ai/authentication#basic-http-authentication&#x22;,
  },
  {
    label: &#x22;Why can’t I answer calls with Bluetooth on iOS/Android?&#x22;,
    href: &#x22;/en/api-reference/faq/quality/ios_bluetooth&#x22;,
  },
  {
    label: &#x22;How can I fix black screen issues?&#x22;,
    href: &#x22;/en/api-reference/faq/quality/video_blank&#x22;,
  },
  {
    label: &#x22;In-call volume vs media volume — what’s the difference?&#x22;,
    href: &#x22;/en/api-reference/faq/integration/system_volume&#x22;,
  },
  {
    label: &#x22;Free-of-charge policy for the first 10,000 minutes&#x22;,
    href: &#x22;/en/api-reference/faq/account/billing_free&#x22;,
  },
]"
  topics="[
  {
    label: &#x22;Integration issues&#x22;,
    href: &#x22;/en/api-reference/faq/integration&#x22;,
  },
  {
    label: &#x22;Quality issues&#x22;,
    href: &#x22;/en/api-reference/faq/quality&#x22;,
  },
  {
    label: &#x22;General product inquiry&#x22;,
    href: &#x22;/en/api-reference/faq/product&#x22;,
  },
  {
    label: &#x22;Account and billing&#x22;,
    href: &#x22;/en/api-reference/faq/account&#x22;,
  },
  {
    label: &#x22;Other issues&#x22;,
    href: &#x22;/en/api-reference/faq/other&#x22;,
  },
]"
/>
`;
export let structuredData = {
  contents: [],
  headings: [{
    id: "build-a-voice-agent",
    content: "Build a Voice Agent"
  }, {
    id: "build-real-time-applications",
    content: "Build Real-Time Applications"
  }, {
    id: "start-with-ai-tools",
    content: "Start with AI Tools"
  }, {
    id: "real-time-use-cases",
    content: "Real-time use cases"
  }, {
    id: "sdks-and-apis",
    content: "SDKs and APIs"
  }, {
    id: "get-help",
    content: "Get Help"
  }]
};
export let toc = [{
  depth: 2,
  url: "#build-a-voice-agent",
  title: _jsx(_Fragment, {
    children: "Build a Voice Agent"
  })
}, {
  depth: 2,
  url: "#build-real-time-applications",
  title: _jsx(_Fragment, {
    children: "Build Real-Time Applications"
  })
}, {
  depth: 2,
  url: "#start-with-ai-tools",
  title: _jsx(_Fragment, {
    children: "Start with AI Tools"
  })
}, {
  depth: 2,
  url: "#real-time-use-cases",
  title: _jsx(_Fragment, {
    children: "Real-time use cases"
  })
}, {
  depth: 2,
  url: "#sdks-and-apis",
  title: _jsx(_Fragment, {
    children: "SDKs and APIs"
  })
}, {
  depth: 2,
  url: "#get-help",
  title: _jsx(_Fragment, {
    children: "Get Help"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    ...props.components
  }, { HelpHub, OverviewLinkBanner, SolutionCard, SolutionCardGrid, ToolkitGroup, ToolkitItem } = _components;
  if (!HelpHub)
    _missingMdxReference("HelpHub", true);
  if (!OverviewLinkBanner)
    _missingMdxReference("OverviewLinkBanner", true);
  if (!SolutionCard)
    _missingMdxReference("SolutionCard", true);
  if (!SolutionCardGrid)
    _missingMdxReference("SolutionCardGrid", true);
  if (!ToolkitGroup)
    _missingMdxReference("ToolkitGroup", true);
  if (!ToolkitItem)
    _missingMdxReference("ToolkitItem", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "build-a-voice-agent",
      children: "Build a Voice Agent"
    }), `
`, _jsxs(SolutionCardGrid, {
      children: [_jsx(SolutionCard, {
        title: "Explore Voice Agents",
        href: "/en/ai",
        icon: "ai",
        tone: "blue",
        description: "Understand how Agora Voice Agents work and choose the right path for apps or dedicated devices."
      }), _jsx(SolutionCard, {
        title: "Build a Voice Agent App",
        href: "/en/ai/get-started/quickstart",
        icon: "rtc",
        tone: "purple",
        description: "Build the minimal backend-plus-client flow and get a working voice agent running quickly."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "build-real-time-applications",
      children: "Build Real-Time Applications"
    }), `
`, _jsxs(SolutionCardGrid, {
      children: [_jsx(SolutionCard, {
        title: "Realtime Communication",
        href: "/en/realtime-media/rtc",
        icon: "video-calling",
        tone: "purple",
        description: "Voice calls, video calls, interactive live streaming, and broadcast streaming sessions."
      }), _jsx(SolutionCard, {
        title: "Signaling",
        href: "/en/realtime-media/rtm",
        icon: "signaling",
        tone: "green",
        description: "Channel messaging, presence, and real-time state synchronization."
      })]
    }), `
`, _jsx(OverviewLinkBanner, {
      title: "Explore Agora real-time communication products",
      href: "/en/realtime-media/overview",
      description: "See every real-time capability — recording, transcription, transcoding, external media, and audience delivery."
    }), `
`, _jsx(_components.h2, {
      id: "start-with-ai-tools",
      children: "Start with AI Tools"
    }), `
`, _jsx(SolutionCardGrid, {
      children: _jsx(SolutionCard, {
        title: "Start with AI tools",
        href: "/en/introduction/start-with-ai",
        icon: "tools",
        tone: "sand",
        description: "Let your coding agent build with Agora. Connect the CLI, MCP server, and Skills to your AI workflow."
      })
    }), `
`, _jsx(_components.h2, {
      id: "real-time-use-cases",
      children: "Real-time use cases"
    }), `
`, _jsx(OverviewLinkBanner, {
      title: "Browse RTC products and use cases",
      href: "/en/realtime-media",
      description: "Find real-time products and solution patterns for calling, streaming, classrooms, connected devices, and analytics."
    }), `
`, _jsx(_components.h2, {
      id: "sdks-and-apis",
      children: "SDKs and APIs"
    }), `
`, _jsxs("div", {
      className: "not-prose my-8 grid gap-4 lg:grid-cols-3",
      children: [_jsxs(ToolkitGroup, {
        title: "Client-Side SDKs",
        children: [_jsx(ToolkitItem, {
          href: "/en/api-reference/sdks?platform=android",
          icon: "android",
          label: "Android"
        }), _jsx(ToolkitItem, {
          href: "/en/api-reference/sdks?platform=ios",
          icon: "ios",
          label: "iOS"
        }), _jsx(ToolkitItem, {
          href: "/en/api-reference/sdks?platform=web",
          icon: "web",
          label: "Web"
        })]
      }), _jsxs(ToolkitGroup, {
        title: "APIs",
        children: [_jsx(ToolkitItem, {
          href: "/en/api-reference/api-ref",
          icon: "rest",
          label: "REST APIs"
        }), _jsx(ToolkitItem, {
          href: "/en/api-reference/api-ref/rtc",
          icon: "rtc",
          label: "Voice & Video"
        }), _jsx(ToolkitItem, {
          href: "/en/api-reference/api-ref/signaling",
          icon: "messaging",
          label: "Signaling"
        }), _jsx(ToolkitItem, {
          href: "/en/api-reference/api-ref/speech-to-text",
          icon: "stt",
          label: "Real-Time Speech-To-Text"
        })]
      }), _jsxs(ToolkitGroup, {
        title: "Server-Side SDKs",
        children: [_jsx(ToolkitItem, {
          href: "/en/api-reference/api-ref/server-sdk/python",
          icon: "python",
          label: "Python"
        }), _jsx(ToolkitItem, {
          href: "/en/api-reference/api-ref/server-sdk/typescript",
          icon: "typescript",
          label: "TypeScript"
        }), _jsx(ToolkitItem, {
          href: "/en/api-reference/api-ref/server-sdk/go",
          icon: "go",
          label: "Go"
        }), _jsx(ToolkitItem, {
          href: "/en/realtime-media/rtc-server-sdk",
          icon: "server",
          label: "Server Gateway"
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "get-help",
      children: "Get Help"
    }), `
`, _jsx(HelpHub, {
      cards: [{
        title: "Support tickets",
        description: "Log in to submit a ticket through the Console.",
        cta: "Create a ticket",
        href: "https://agoraio.zendesk.com/hc/en-us",
        icon: "ticket"
      }, {
        title: "Stack Overflow",
        description: "Our team monitors Stack Overflow for quick answers.",
        cta: "Go to Stack Overflow",
        href: "https://stackoverflow.com/search?q=agora.io",
        icon: "stack-overflow"
      }, {
        title: "Discord",
        description: "Ask questions and share what you’re building with the community.",
        cta: "Join Discord",
        href: "https://discord.gg/QfgBCvuX4d",
        icon: "discord"
      }, {
        title: "Status page",
        description: "Stay informed about service health and maintenance updates.",
        cta: "View status",
        href: "https://status.agora.io/",
        icon: "status"
      }],
      knowledgeBase: [{
        label: "How to implement basic HTTP authentication?",
        href: "/en/api-reference/api-ref/conversational-ai/authentication#basic-http-authentication"
      }, {
        label: "Why can’t I answer calls with Bluetooth on iOS/Android?",
        href: "/en/api-reference/faq/quality/ios_bluetooth"
      }, {
        label: "How can I fix black screen issues?",
        href: "/en/api-reference/faq/quality/video_blank"
      }, {
        label: "In-call volume vs media volume — what’s the difference?",
        href: "/en/api-reference/faq/integration/system_volume"
      }, {
        label: "Free-of-charge policy for the first 10,000 minutes",
        href: "/en/api-reference/faq/account/billing_free"
      }],
      topics: [{
        label: "Integration issues",
        href: "/en/api-reference/faq/integration"
      }, {
        label: "Quality issues",
        href: "/en/api-reference/faq/quality"
      }, {
        label: "General product inquiry",
        href: "/en/api-reference/faq/product"
      }, {
        label: "Account and billing",
        href: "/en/api-reference/faq/account"
      }, {
        label: "Other issues",
        href: "/en/api-reference/faq/other"
      }]
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
