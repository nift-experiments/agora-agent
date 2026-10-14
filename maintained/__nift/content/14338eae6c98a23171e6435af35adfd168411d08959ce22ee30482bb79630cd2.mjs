import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Overview",
  description: "Start here when you need to build, process, connect, or deliver real-time media experiences."
};
export let _markdown = `

Realtime & Media is the capability domain for products that need something to happen live. Use this section when you are deciding how people, devices, backend services, and media streams should connect, stay in sync, and keep working while a session is in progress.

Instead of organizing docs around a single product story, this tab is organized around the functional layers most teams assemble when building a real-time experience: live interaction, session intelligence, media routing, large-scale delivery, and device or server participation.

## What you can build from this section [#what-you-can-build-from-this-section]

### Create live interaction surfaces [#create-live-interaction-surfaces]

Use these docs when you are defining how users join a session, exchange media, coordinate actions, or collaborate in the same live space.

* [Voice & Video](/en/realtime-media/rtc): calls, meetings, co-hosting, interactive live rooms, and media quality control
* [Signaling](/en/realtime-media/rtm): channel messaging, presence, state sync, and real-time coordination
* [Chat](/en/realtime-media/im): persistent and full-featured messaging systems beyond lightweight room coordination
* [Whiteboard](/en/realtime-media/whiteboard): shared visual collaboration inside live sessions

### Understand, capture, and transform session content [#understand-capture-and-transform-session-content]

Use these docs when media inside the session needs to become text, records, composites, or downstream assets.

* [Transcription & Translation](/en/realtime-media/speech-to-text): captions, speech understanding, and multilingual live experiences
* [Cloud Recording](/en/realtime-media/cloud-recording): archive, replay, compliance, QA, and post-session review workflows
* [Transcoding](/en/realtime-media/transcoding): mixing, layout composition, and output transformation

### Bridge real-time sessions with external media systems [#bridge-real-time-sessions-with-external-media-systems]

Use these docs when your product must ingest outside streams, publish session media to other systems, or interoperate with existing streaming infrastructure.

* [Media Push](/en/realtime-media/media-push): send RTC channel media to CDN pipelines or downstream media systems
* [Media Pull](/en/realtime-media/media-pull): bring online media streams into an interactive real-time session
* [Media Gateway](/en/realtime-media/rtmp-gateway): connect RTMP-based devices and systems to Agora

### Deliver playback to larger audiences [#deliver-playback-to-larger-audiences]

Use these docs when interactive participation and large-scale viewing are separate concerns in your architecture.

* [Fusion CDN](/en/realtime-media/fusion-cdn): multi-CDN distribution for live playback at audience scale

### Extend the session to devices and backend services [#extend-the-session-to-devices-and-backend-services]

Use these docs when participants are not just mobile or web clients, but also embedded devices, operator consoles, or server-side workers.

* [IoT & Edge](/en/realtime-media/rtsa): device and edge connectivity for cameras, terminals, and embedded endpoints
* [Server Gateway](/en/realtime-media/rtc-server-sdk): backend participation in media send, receive, subscribe, and control flows

## How to navigate this tab [#how-to-navigate-this-tab]

* Start with [Voice & Video](/en/realtime-media/rtc), [Signaling](/en/realtime-media/rtm), [Chat](/en/realtime-media/im), or [Whiteboard](/en/realtime-media/whiteboard) when your main question is how users interact inside a live session.
* Start with [Transcription & Translation](/en/realtime-media/speech-to-text), [Cloud Recording](/en/realtime-media/cloud-recording), or [Transcoding](/en/realtime-media/transcoding) when your main question is what should happen to the media during or after the session.
* Start with [Media Push](/en/realtime-media/media-push), [Media Pull](/en/realtime-media/media-pull), [Media Gateway](/en/realtime-media/rtmp-gateway), or [Fusion CDN](/en/realtime-media/fusion-cdn) when your main question is how to move media across systems or out to larger audiences.
* Start with [IoT & Edge](/en/realtime-media/rtsa) or [Server Gateway](/en/realtime-media/rtc-server-sdk) when your main question is how devices or backend services participate in the real-time workflow.

## Common reading paths [#common-reading-paths]

* Interactive live streaming with large audience playback: [Voice & Video](/en/realtime-media/rtc) -> [Media Push](/en/realtime-media/media-push) -> [Fusion CDN](/en/realtime-media/fusion-cdn)
* Meeting archive and searchable records: [Voice & Video](/en/realtime-media/rtc) -> [Cloud Recording](/en/realtime-media/cloud-recording) -> [Transcription & Translation](/en/realtime-media/speech-to-text)
* External stream into an interactive session: [Media Pull](/en/realtime-media/media-pull) or [Media Gateway](/en/realtime-media/rtmp-gateway) -> [Voice & Video](/en/realtime-media/rtc)
* Smart device connectivity with backend media control: [IoT & Edge](/en/realtime-media/rtsa) -> [Server Gateway](/en/realtime-media/rtc-server-sdk)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Realtime & Media is the capability domain for products that need something to happen live. Use this section when you are deciding how people, devices, backend services, and media streams should connect, stay in sync, and keep working while a session is in progress."
  }, {
    heading: undefined,
    content: "Instead of organizing docs around a single product story, this tab is organized around the functional layers most teams assemble when building a real-time experience: live interaction, session intelligence, media routing, large-scale delivery, and device or server participation."
  }, {
    heading: "create-live-interaction-surfaces",
    content: "Use these docs when you are defining how users join a session, exchange media, coordinate actions, or collaborate in the same live space."
  }, {
    heading: "create-live-interaction-surfaces",
    content: "Voice & Video: calls, meetings, co-hosting, interactive live rooms, and media quality control"
  }, {
    heading: "create-live-interaction-surfaces",
    content: "Signaling: channel messaging, presence, state sync, and real-time coordination"
  }, {
    heading: "create-live-interaction-surfaces",
    content: "Chat: persistent and full-featured messaging systems beyond lightweight room coordination"
  }, {
    heading: "create-live-interaction-surfaces",
    content: "Whiteboard: shared visual collaboration inside live sessions"
  }, {
    heading: "understand-capture-and-transform-session-content",
    content: "Use these docs when media inside the session needs to become text, records, composites, or downstream assets."
  }, {
    heading: "understand-capture-and-transform-session-content",
    content: "Transcription & Translation: captions, speech understanding, and multilingual live experiences"
  }, {
    heading: "understand-capture-and-transform-session-content",
    content: "Cloud Recording: archive, replay, compliance, QA, and post-session review workflows"
  }, {
    heading: "understand-capture-and-transform-session-content",
    content: "Transcoding: mixing, layout composition, and output transformation"
  }, {
    heading: "bridge-real-time-sessions-with-external-media-systems",
    content: "Use these docs when your product must ingest outside streams, publish session media to other systems, or interoperate with existing streaming infrastructure."
  }, {
    heading: "bridge-real-time-sessions-with-external-media-systems",
    content: "Media Push: send RTC channel media to CDN pipelines or downstream media systems"
  }, {
    heading: "bridge-real-time-sessions-with-external-media-systems",
    content: "Media Pull: bring online media streams into an interactive real-time session"
  }, {
    heading: "bridge-real-time-sessions-with-external-media-systems",
    content: "Media Gateway: connect RTMP-based devices and systems to Agora"
  }, {
    heading: "deliver-playback-to-larger-audiences",
    content: "Use these docs when interactive participation and large-scale viewing are separate concerns in your architecture."
  }, {
    heading: "deliver-playback-to-larger-audiences",
    content: "Fusion CDN: multi-CDN distribution for live playback at audience scale"
  }, {
    heading: "extend-the-session-to-devices-and-backend-services",
    content: "Use these docs when participants are not just mobile or web clients, but also embedded devices, operator consoles, or server-side workers."
  }, {
    heading: "extend-the-session-to-devices-and-backend-services",
    content: "IoT & Edge: device and edge connectivity for cameras, terminals, and embedded endpoints"
  }, {
    heading: "extend-the-session-to-devices-and-backend-services",
    content: "Server Gateway: backend participation in media send, receive, subscribe, and control flows"
  }, {
    heading: "how-to-navigate-this-tab",
    content: "Start with Voice & Video, Signaling, Chat, or Whiteboard when your main question is how users interact inside a live session."
  }, {
    heading: "how-to-navigate-this-tab",
    content: "Start with Transcription & Translation, Cloud Recording, or Transcoding when your main question is what should happen to the media during or after the session."
  }, {
    heading: "how-to-navigate-this-tab",
    content: "Start with Media Push, Media Pull, Media Gateway, or Fusion CDN when your main question is how to move media across systems or out to larger audiences."
  }, {
    heading: "how-to-navigate-this-tab",
    content: "Start with IoT & Edge or Server Gateway when your main question is how devices or backend services participate in the real-time workflow."
  }, {
    heading: "common-reading-paths",
    content: "Interactive live streaming with large audience playback: Voice & Video -> Media Push -> Fusion CDN"
  }, {
    heading: "common-reading-paths",
    content: "Meeting archive and searchable records: Voice & Video -> Cloud Recording -> Transcription & Translation"
  }, {
    heading: "common-reading-paths",
    content: "External stream into an interactive session: Media Pull or Media Gateway -> Voice & Video"
  }, {
    heading: "common-reading-paths",
    content: "Smart device connectivity with backend media control: IoT & Edge -> Server Gateway"
  }],
  headings: [{
    id: "what-you-can-build-from-this-section",
    content: "What you can build from this section"
  }, {
    id: "create-live-interaction-surfaces",
    content: "Create live interaction surfaces"
  }, {
    id: "understand-capture-and-transform-session-content",
    content: "Understand, capture, and transform session content"
  }, {
    id: "bridge-real-time-sessions-with-external-media-systems",
    content: "Bridge real-time sessions with external media systems"
  }, {
    id: "deliver-playback-to-larger-audiences",
    content: "Deliver playback to larger audiences"
  }, {
    id: "extend-the-session-to-devices-and-backend-services",
    content: "Extend the session to devices and backend services"
  }, {
    id: "how-to-navigate-this-tab",
    content: "How to navigate this tab"
  }, {
    id: "common-reading-paths",
    content: "Common reading paths"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-you-can-build-from-this-section",
  title: _jsx(_Fragment, {
    children: "What you can build from this section"
  })
}, {
  depth: 3,
  url: "#create-live-interaction-surfaces",
  title: _jsx(_Fragment, {
    children: "Create live interaction surfaces"
  })
}, {
  depth: 3,
  url: "#understand-capture-and-transform-session-content",
  title: _jsx(_Fragment, {
    children: "Understand, capture, and transform session content"
  })
}, {
  depth: 3,
  url: "#bridge-real-time-sessions-with-external-media-systems",
  title: _jsx(_Fragment, {
    children: "Bridge real-time sessions with external media systems"
  })
}, {
  depth: 3,
  url: "#deliver-playback-to-larger-audiences",
  title: _jsx(_Fragment, {
    children: "Deliver playback to larger audiences"
  })
}, {
  depth: 3,
  url: "#extend-the-session-to-devices-and-backend-services",
  title: _jsx(_Fragment, {
    children: "Extend the session to devices and backend services"
  })
}, {
  depth: 2,
  url: "#how-to-navigate-this-tab",
  title: _jsx(_Fragment, {
    children: "How to navigate this tab"
  })
}, {
  depth: 2,
  url: "#common-reading-paths",
  title: _jsx(_Fragment, {
    children: "Common reading paths"
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
    children: [_jsx(_components.p, {
      children: "Realtime & Media is the capability domain for products that need something to happen live. Use this section when you are deciding how people, devices, backend services, and media streams should connect, stay in sync, and keep working while a session is in progress."
    }), `
`, _jsx(_components.p, {
      children: "Instead of organizing docs around a single product story, this tab is organized around the functional layers most teams assemble when building a real-time experience: live interaction, session intelligence, media routing, large-scale delivery, and device or server participation."
    }), `
`, _jsx(_components.h2, {
      id: "what-you-can-build-from-this-section",
      children: "What you can build from this section"
    }), `
`, _jsx(_components.h3, {
      id: "create-live-interaction-surfaces",
      children: "Create live interaction surfaces"
    }), `
`, _jsx(_components.p, {
      children: "Use these docs when you are defining how users join a session, exchange media, coordinate actions, or collaborate in the same live space."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/rtc",
          children: "Voice & Video"
        }), ": calls, meetings, co-hosting, interactive live rooms, and media quality control"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/rtm",
          children: "Signaling"
        }), ": channel messaging, presence, state sync, and real-time coordination"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/im",
          children: "Chat"
        }), ": persistent and full-featured messaging systems beyond lightweight room coordination"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/whiteboard",
          children: "Whiteboard"
        }), ": shared visual collaboration inside live sessions"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "understand-capture-and-transform-session-content",
      children: "Understand, capture, and transform session content"
    }), `
`, _jsx(_components.p, {
      children: "Use these docs when media inside the session needs to become text, records, composites, or downstream assets."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/speech-to-text",
          children: "Transcription & Translation"
        }), ": captions, speech understanding, and multilingual live experiences"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording",
          children: "Cloud Recording"
        }), ": archive, replay, compliance, QA, and post-session review workflows"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/transcoding",
          children: "Transcoding"
        }), ": mixing, layout composition, and output transformation"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "bridge-real-time-sessions-with-external-media-systems",
      children: "Bridge real-time sessions with external media systems"
    }), `
`, _jsx(_components.p, {
      children: "Use these docs when your product must ingest outside streams, publish session media to other systems, or interoperate with existing streaming infrastructure."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/media-push",
          children: "Media Push"
        }), ": send RTC channel media to CDN pipelines or downstream media systems"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/media-pull",
          children: "Media Pull"
        }), ": bring online media streams into an interactive real-time session"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/rtmp-gateway",
          children: "Media Gateway"
        }), ": connect RTMP-based devices and systems to Agora"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "deliver-playback-to-larger-audiences",
      children: "Deliver playback to larger audiences"
    }), `
`, _jsx(_components.p, {
      children: "Use these docs when interactive participation and large-scale viewing are separate concerns in your architecture."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/fusion-cdn",
          children: "Fusion CDN"
        }), ": multi-CDN distribution for live playback at audience scale"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "extend-the-session-to-devices-and-backend-services",
      children: "Extend the session to devices and backend services"
    }), `
`, _jsx(_components.p, {
      children: "Use these docs when participants are not just mobile or web clients, but also embedded devices, operator consoles, or server-side workers."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/rtsa",
          children: "IoT & Edge"
        }), ": device and edge connectivity for cameras, terminals, and embedded endpoints"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/realtime-media/rtc-server-sdk",
          children: "Server Gateway"
        }), ": backend participation in media send, receive, subscribe, and control flows"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "how-to-navigate-this-tab",
      children: "How to navigate this tab"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Start with ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc",
          children: "Voice & Video"
        }), ", ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm",
          children: "Signaling"
        }), ", ", _jsx(_components.a, {
          href: "/en/realtime-media/im",
          children: "Chat"
        }), ", or ", _jsx(_components.a, {
          href: "/en/realtime-media/whiteboard",
          children: "Whiteboard"
        }), " when your main question is how users interact inside a live session."]
      }), `
`, _jsxs(_components.li, {
        children: ["Start with ", _jsx(_components.a, {
          href: "/en/realtime-media/speech-to-text",
          children: "Transcription & Translation"
        }), ", ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording",
          children: "Cloud Recording"
        }), ", or ", _jsx(_components.a, {
          href: "/en/realtime-media/transcoding",
          children: "Transcoding"
        }), " when your main question is what should happen to the media during or after the session."]
      }), `
`, _jsxs(_components.li, {
        children: ["Start with ", _jsx(_components.a, {
          href: "/en/realtime-media/media-push",
          children: "Media Push"
        }), ", ", _jsx(_components.a, {
          href: "/en/realtime-media/media-pull",
          children: "Media Pull"
        }), ", ", _jsx(_components.a, {
          href: "/en/realtime-media/rtmp-gateway",
          children: "Media Gateway"
        }), ", or ", _jsx(_components.a, {
          href: "/en/realtime-media/fusion-cdn",
          children: "Fusion CDN"
        }), " when your main question is how to move media across systems or out to larger audiences."]
      }), `
`, _jsxs(_components.li, {
        children: ["Start with ", _jsx(_components.a, {
          href: "/en/realtime-media/rtsa",
          children: "IoT & Edge"
        }), " or ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc-server-sdk",
          children: "Server Gateway"
        }), " when your main question is how devices or backend services participate in the real-time workflow."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "common-reading-paths",
      children: "Common reading paths"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Interactive live streaming with large audience playback: ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc",
          children: "Voice & Video"
        }), " -> ", _jsx(_components.a, {
          href: "/en/realtime-media/media-push",
          children: "Media Push"
        }), " -> ", _jsx(_components.a, {
          href: "/en/realtime-media/fusion-cdn",
          children: "Fusion CDN"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Meeting archive and searchable records: ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc",
          children: "Voice & Video"
        }), " -> ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording",
          children: "Cloud Recording"
        }), " -> ", _jsx(_components.a, {
          href: "/en/realtime-media/speech-to-text",
          children: "Transcription & Translation"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["External stream into an interactive session: ", _jsx(_components.a, {
          href: "/en/realtime-media/media-pull",
          children: "Media Pull"
        }), " or ", _jsx(_components.a, {
          href: "/en/realtime-media/rtmp-gateway",
          children: "Media Gateway"
        }), " -> ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc",
          children: "Voice & Video"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Smart device connectivity with backend media control: ", _jsx(_components.a, {
          href: "/en/realtime-media/rtsa",
          children: "IoT & Edge"
        }), " -> ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc-server-sdk",
          children: "Server Gateway"
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
