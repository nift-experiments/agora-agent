import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "navigation-landing",
  title: "RTC overview",
  description: "Jump to any Real-time Communication product, grouped by what each capability layer does."
};
export let _markdown = `

## Build live interaction [#build-live-interaction]

<SolutionCardGrid size="small">
  <SolutionCard title="Realtime Communication" href="/en/realtime-media/rtc" icon="video-calling" tone="blue" size="small" description="Voice calls, video calls, interactive live streaming, and broadcast streaming sessions." />
</SolutionCardGrid>

## Extend live interaction [#extend-live-interaction]

<SolutionCardGrid size="small">
  <SolutionCard title="Signaling" href="/en/realtime-media/rtm" icon="signaling" tone="blue" size="small" description="Channel messaging, presence, and real-time state synchronization." />

  <SolutionCard title="Chat" href="/en/realtime-media/im" icon="chat" tone="blue" size="small" description="Persistent messaging beyond lightweight room coordination." />

  <SolutionCard title="Whiteboard" href="/en/realtime-media/whiteboard" icon="whiteboard" tone="blue" size="small" description="Shared visual collaboration inside live sessions." />

  <SolutionCard title="Extensions Marketplace" href="/en/realtime-media/marketplace" icon="tools" tone="blue" size="small" description="Discover and integrate first-party and partner extensions for richer real-time experiences." />
</SolutionCardGrid>

## Process session content [#process-session-content]

<SolutionCardGrid size="small">
  <SolutionCard title="Transcription & Translation" href="/en/realtime-media/speech-to-text" icon="transcription" tone="green" size="small" description="Captions, speech understanding, and multilingual live experiences." />

  <SolutionCard title="Cloud Recording" href="/en/realtime-media/cloud-recording" icon="cloud-recording" tone="green" size="small" description="Archive, replay, compliance, and post-session review workflows." />

  <SolutionCard title="On-Premise Recording" href="/en/realtime-media/on-premise-recording" icon="on-premise-recording" tone="green" size="small" description="Self-hosted recording for control and compliance needs." />

  <SolutionCard title="Transcoding" href="/en/realtime-media/transcoding" icon="transcoding" tone="green" size="small" description="Mixing, layout composition, and output transformation." />
</SolutionCardGrid>

## Connect external media [#connect-external-media]

<SolutionCardGrid size="small">
  <SolutionCard title="Media Push" href="/en/realtime-media/media-push" icon="media-push" tone="purple" size="small" description="Send RTC channel media to CDN pipelines or downstream systems." />

  <SolutionCard title="Media Pull" href="/en/realtime-media/media-pull" icon="media-pull" tone="purple" size="small" description="Bring online media streams into an interactive real-time session." />

  <SolutionCard title="Media Gateway" href="/en/realtime-media/rtmp-gateway" icon="rtmp-gateway" tone="purple" size="small" description="Connect RTMP-based devices and systems to Agora." />

  <SolutionCard title="Server Gateway" href="/en/realtime-media/rtc-server-sdk" icon="server-sdk" tone="purple" size="small" description="Backend participation in media send, receive, and control flows." />
</SolutionCardGrid>

## Deliver to audiences [#deliver-to-audiences]

<SolutionCardGrid size="small">
  <SolutionCard title="Broadcast Streaming" href="/en/realtime-media/rtc/get-started-sdk" icon="broadcast" tone="sand" size="small" description="Separate interactive participation from large-scale playback." />
</SolutionCardGrid>
`;
export let structuredData = {
  contents: [],
  headings: [{
    id: "build-live-interaction",
    content: "Build live interaction"
  }, {
    id: "extend-live-interaction",
    content: "Extend live interaction"
  }, {
    id: "process-session-content",
    content: "Process session content"
  }, {
    id: "connect-external-media",
    content: "Connect external media"
  }, {
    id: "deliver-to-audiences",
    content: "Deliver to audiences"
  }]
};
export let toc = [{
  depth: 2,
  url: "#build-live-interaction",
  title: _jsx(_Fragment, {
    children: "Build live interaction"
  })
}, {
  depth: 2,
  url: "#extend-live-interaction",
  title: _jsx(_Fragment, {
    children: "Extend live interaction"
  })
}, {
  depth: 2,
  url: "#process-session-content",
  title: _jsx(_Fragment, {
    children: "Process session content"
  })
}, {
  depth: 2,
  url: "#connect-external-media",
  title: _jsx(_Fragment, {
    children: "Connect external media"
  })
}, {
  depth: 2,
  url: "#deliver-to-audiences",
  title: _jsx(_Fragment, {
    children: "Deliver to audiences"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    ...props.components
  }, { SolutionCard, SolutionCardGrid } = _components;
  if (!SolutionCard)
    _missingMdxReference("SolutionCard", true);
  if (!SolutionCardGrid)
    _missingMdxReference("SolutionCardGrid", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "build-live-interaction",
      children: "Build live interaction"
    }), `
`, _jsx(SolutionCardGrid, {
      size: "small",
      children: _jsx(SolutionCard, {
        title: "Realtime Communication",
        href: "/en/realtime-media/rtc",
        icon: "video-calling",
        tone: "blue",
        size: "small",
        description: "Voice calls, video calls, interactive live streaming, and broadcast streaming sessions."
      })
    }), `
`, _jsx(_components.h2, {
      id: "extend-live-interaction",
      children: "Extend live interaction"
    }), `
`, _jsxs(SolutionCardGrid, {
      size: "small",
      children: [_jsx(SolutionCard, {
        title: "Signaling",
        href: "/en/realtime-media/rtm",
        icon: "signaling",
        tone: "blue",
        size: "small",
        description: "Channel messaging, presence, and real-time state synchronization."
      }), _jsx(SolutionCard, {
        title: "Chat",
        href: "/en/realtime-media/im",
        icon: "chat",
        tone: "blue",
        size: "small",
        description: "Persistent messaging beyond lightweight room coordination."
      }), _jsx(SolutionCard, {
        title: "Whiteboard",
        href: "/en/realtime-media/whiteboard",
        icon: "whiteboard",
        tone: "blue",
        size: "small",
        description: "Shared visual collaboration inside live sessions."
      }), _jsx(SolutionCard, {
        title: "Extensions Marketplace",
        href: "/en/realtime-media/marketplace",
        icon: "tools",
        tone: "blue",
        size: "small",
        description: "Discover and integrate first-party and partner extensions for richer real-time experiences."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "process-session-content",
      children: "Process session content"
    }), `
`, _jsxs(SolutionCardGrid, {
      size: "small",
      children: [_jsx(SolutionCard, {
        title: "Transcription & Translation",
        href: "/en/realtime-media/speech-to-text",
        icon: "transcription",
        tone: "green",
        size: "small",
        description: "Captions, speech understanding, and multilingual live experiences."
      }), _jsx(SolutionCard, {
        title: "Cloud Recording",
        href: "/en/realtime-media/cloud-recording",
        icon: "cloud-recording",
        tone: "green",
        size: "small",
        description: "Archive, replay, compliance, and post-session review workflows."
      }), _jsx(SolutionCard, {
        title: "On-Premise Recording",
        href: "/en/realtime-media/on-premise-recording",
        icon: "on-premise-recording",
        tone: "green",
        size: "small",
        description: "Self-hosted recording for control and compliance needs."
      }), _jsx(SolutionCard, {
        title: "Transcoding",
        href: "/en/realtime-media/transcoding",
        icon: "transcoding",
        tone: "green",
        size: "small",
        description: "Mixing, layout composition, and output transformation."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "connect-external-media",
      children: "Connect external media"
    }), `
`, _jsxs(SolutionCardGrid, {
      size: "small",
      children: [_jsx(SolutionCard, {
        title: "Media Push",
        href: "/en/realtime-media/media-push",
        icon: "media-push",
        tone: "purple",
        size: "small",
        description: "Send RTC channel media to CDN pipelines or downstream systems."
      }), _jsx(SolutionCard, {
        title: "Media Pull",
        href: "/en/realtime-media/media-pull",
        icon: "media-pull",
        tone: "purple",
        size: "small",
        description: "Bring online media streams into an interactive real-time session."
      }), _jsx(SolutionCard, {
        title: "Media Gateway",
        href: "/en/realtime-media/rtmp-gateway",
        icon: "rtmp-gateway",
        tone: "purple",
        size: "small",
        description: "Connect RTMP-based devices and systems to Agora."
      }), _jsx(SolutionCard, {
        title: "Server Gateway",
        href: "/en/realtime-media/rtc-server-sdk",
        icon: "server-sdk",
        tone: "purple",
        size: "small",
        description: "Backend participation in media send, receive, and control flows."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "deliver-to-audiences",
      children: "Deliver to audiences"
    }), `
`, _jsx(SolutionCardGrid, {
      size: "small",
      children: _jsx(SolutionCard, {
        title: "Broadcast Streaming",
        href: "/en/realtime-media/rtc/get-started-sdk",
        icon: "broadcast",
        tone: "sand",
        size: "small",
        description: "Separate interactive participation from large-scale playback."
      })
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
