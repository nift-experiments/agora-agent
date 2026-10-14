import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Start building",
  description: "Choose the right first documentation path based on the product problem you are solving with Agora."
};
export let _markdown = `

Most teams do not start by asking which Agora product to read first. They start by asking what kind of real-time problem they need to solve.

Use this page to map your product goal to the most useful documentation path.

## When to use this path [#when-to-use-this-path]

This is the right page when:

* you already know the product problem you want to solve
* you want to choose the right capability family before reading deep product docs
* you do not need an AI-assisted setup workflow first
* you want the shortest route from problem statement to relevant quickstart or product area

If you want an AI agent to help choose the route and bootstrap a starter, use [Start with AI](/en/introduction/start-with-ai) instead.

## Start from the problem you are solving [#start-from-the-problem-you-are-solving]

### Voice-first AI interaction [#voice-first-ai-interaction]

If users need to talk to an AI agent in real time, start with:

* [Conversational AI](/en/introduction/conversational-ai)
* [AI quickstart](/en/ai/get-started/quickstart)
* [Voice agent quickstart](/en/ai/choose-your-path/quickstart-coding)

This path is usually right for assistants, tutors, companions, service agents, and voice-enabled devices.

### Live voice, video, or interactive sessions [#live-voice-video-or-interactive-sessions]

If users need to join the same session and interact through live media, start with:

* [Real-Time Voice & Video](/en/introduction/realtime-audio-video)
* [Audio & Video](/en/realtime-media/rtc)
* [Voice & Video quickstart](/en/realtime-media/rtc/android/quick-start/build-from-scratch)

This path is usually right for calling, meetings, classrooms, social rooms, telehealth, and interactive livestreaming.

### Room messaging, state sync, or workflow coordination [#room-messaging-state-sync-or-workflow-coordination]

If the product depends on chat, presence, metadata, or event coordination, start with:

* [Messaging & Presence](/en/introduction/messaging-presence)
* [RTM / Signaling](/en/realtime-media/rtm)
* [IM / Chat](/en/realtime-media/im)

This path is usually right for in-room communication, control flows, collaborative state, and backend-triggered room actions.

### Cloud-side media workflows [#cloud-side-media-workflows]

If the media must be captured, processed, routed, or redistributed beyond the live session itself, start with:

* [Cloud Media Services](/en/introduction/cloud-media-services)
* [Cloud Recording](/en/realtime-media/cloud-recording)
* [Real-time Transcription & Translation](/en/realtime-media/speech-to-text)
* [Transcoding](/en/realtime-media/transcoding)
* [Server Media Processing](/en/realtime-media/rtc-server-sdk)

This path is usually right for archive, replay, moderation, server-side automation, and downstream content pipelines.

## Common combinations [#common-combinations]

Many production systems combine several of these paths:

* voice or video sessions plus [Messaging & Presence](/en/introduction/messaging-presence)
* AI interaction plus [Cloud Media Services](/en/introduction/cloud-media-services)
* live sessions plus [Cloud Media Services](/en/introduction/cloud-media-services)
* broadcast products plus [Cloud Media Services](/en/introduction/cloud-media-services)

## What to do next [#what-to-do-next]

If you are still evaluating the platform, read [About Agora](/en/introduction/about-agora) first. If you want the shared mental model before choosing a path, read [Core Concepts](/en/introduction/core-concepts). If you want an AI-assisted setup workflow, switch to [Start with AI](/en/introduction/start-with-ai).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Most teams do not start by asking which Agora product to read first. They start by asking what kind of real-time problem they need to solve."
  }, {
    heading: undefined,
    content: "Use this page to map your product goal to the most useful documentation path."
  }, {
    heading: "when-to-use-this-path",
    content: "This is the right page when:"
  }, {
    heading: "when-to-use-this-path",
    content: "you already know the product problem you want to solve"
  }, {
    heading: "when-to-use-this-path",
    content: "you want to choose the right capability family before reading deep product docs"
  }, {
    heading: "when-to-use-this-path",
    content: "you do not need an AI-assisted setup workflow first"
  }, {
    heading: "when-to-use-this-path",
    content: "you want the shortest route from problem statement to relevant quickstart or product area"
  }, {
    heading: "when-to-use-this-path",
    content: "If you want an AI agent to help choose the route and bootstrap a starter, use Start with AI instead."
  }, {
    heading: "voice-first-ai-interaction",
    content: "If users need to talk to an AI agent in real time, start with:"
  }, {
    heading: "voice-first-ai-interaction",
    content: "Conversational AI"
  }, {
    heading: "voice-first-ai-interaction",
    content: "AI quickstart"
  }, {
    heading: "voice-first-ai-interaction",
    content: "Voice agent quickstart"
  }, {
    heading: "voice-first-ai-interaction",
    content: "This path is usually right for assistants, tutors, companions, service agents, and voice-enabled devices."
  }, {
    heading: "live-voice-video-or-interactive-sessions",
    content: "If users need to join the same session and interact through live media, start with:"
  }, {
    heading: "live-voice-video-or-interactive-sessions",
    content: "Real-Time Voice & Video"
  }, {
    heading: "live-voice-video-or-interactive-sessions",
    content: "Audio & Video"
  }, {
    heading: "live-voice-video-or-interactive-sessions",
    content: "Voice & Video quickstart"
  }, {
    heading: "live-voice-video-or-interactive-sessions",
    content: "This path is usually right for calling, meetings, classrooms, social rooms, telehealth, and interactive livestreaming."
  }, {
    heading: "room-messaging-state-sync-or-workflow-coordination",
    content: "If the product depends on chat, presence, metadata, or event coordination, start with:"
  }, {
    heading: "room-messaging-state-sync-or-workflow-coordination",
    content: "Messaging & Presence"
  }, {
    heading: "room-messaging-state-sync-or-workflow-coordination",
    content: "RTM / Signaling"
  }, {
    heading: "room-messaging-state-sync-or-workflow-coordination",
    content: "IM / Chat"
  }, {
    heading: "room-messaging-state-sync-or-workflow-coordination",
    content: "This path is usually right for in-room communication, control flows, collaborative state, and backend-triggered room actions."
  }, {
    heading: "cloud-side-media-workflows",
    content: "If the media must be captured, processed, routed, or redistributed beyond the live session itself, start with:"
  }, {
    heading: "cloud-side-media-workflows",
    content: "Cloud Media Services"
  }, {
    heading: "cloud-side-media-workflows",
    content: "Cloud Recording"
  }, {
    heading: "cloud-side-media-workflows",
    content: "Real-time Transcription & Translation"
  }, {
    heading: "cloud-side-media-workflows",
    content: "Transcoding"
  }, {
    heading: "cloud-side-media-workflows",
    content: "Server Media Processing"
  }, {
    heading: "cloud-side-media-workflows",
    content: "This path is usually right for archive, replay, moderation, server-side automation, and downstream content pipelines."
  }, {
    heading: "common-combinations",
    content: "Many production systems combine several of these paths:"
  }, {
    heading: "common-combinations",
    content: "voice or video sessions plus Messaging & Presence"
  }, {
    heading: "common-combinations",
    content: "AI interaction plus Cloud Media Services"
  }, {
    heading: "common-combinations",
    content: "live sessions plus Cloud Media Services"
  }, {
    heading: "common-combinations",
    content: "broadcast products plus Cloud Media Services"
  }, {
    heading: "what-to-do-next",
    content: "If you are still evaluating the platform, read About Agora first. If you want the shared mental model before choosing a path, read Core Concepts. If you want an AI-assisted setup workflow, switch to Start with AI."
  }],
  headings: [{
    id: "when-to-use-this-path",
    content: "When to use this path"
  }, {
    id: "start-from-the-problem-you-are-solving",
    content: "Start from the problem you are solving"
  }, {
    id: "voice-first-ai-interaction",
    content: "Voice-first AI interaction"
  }, {
    id: "live-voice-video-or-interactive-sessions",
    content: "Live voice, video, or interactive sessions"
  }, {
    id: "room-messaging-state-sync-or-workflow-coordination",
    content: "Room messaging, state sync, or workflow coordination"
  }, {
    id: "cloud-side-media-workflows",
    content: "Cloud-side media workflows"
  }, {
    id: "common-combinations",
    content: "Common combinations"
  }, {
    id: "what-to-do-next",
    content: "What to do next"
  }]
};
export let toc = [{
  depth: 2,
  url: "#when-to-use-this-path",
  title: _jsx(_Fragment, {
    children: "When to use this path"
  })
}, {
  depth: 2,
  url: "#start-from-the-problem-you-are-solving",
  title: _jsx(_Fragment, {
    children: "Start from the problem you are solving"
  })
}, {
  depth: 3,
  url: "#voice-first-ai-interaction",
  title: _jsx(_Fragment, {
    children: "Voice-first AI interaction"
  })
}, {
  depth: 3,
  url: "#live-voice-video-or-interactive-sessions",
  title: _jsx(_Fragment, {
    children: "Live voice, video, or interactive sessions"
  })
}, {
  depth: 3,
  url: "#room-messaging-state-sync-or-workflow-coordination",
  title: _jsx(_Fragment, {
    children: "Room messaging, state sync, or workflow coordination"
  })
}, {
  depth: 3,
  url: "#cloud-side-media-workflows",
  title: _jsx(_Fragment, {
    children: "Cloud-side media workflows"
  })
}, {
  depth: 2,
  url: "#common-combinations",
  title: _jsx(_Fragment, {
    children: "Common combinations"
  })
}, {
  depth: 2,
  url: "#what-to-do-next",
  title: _jsx(_Fragment, {
    children: "What to do next"
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
      children: "Most teams do not start by asking which Agora product to read first. They start by asking what kind of real-time problem they need to solve."
    }), `
`, _jsx(_components.p, {
      children: "Use this page to map your product goal to the most useful documentation path."
    }), `
`, _jsx(_components.h2, {
      id: "when-to-use-this-path",
      children: "When to use this path"
    }), `
`, _jsx(_components.p, {
      children: "This is the right page when:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "you already know the product problem you want to solve"
      }), `
`, _jsx(_components.li, {
        children: "you want to choose the right capability family before reading deep product docs"
      }), `
`, _jsx(_components.li, {
        children: "you do not need an AI-assisted setup workflow first"
      }), `
`, _jsx(_components.li, {
        children: "you want the shortest route from problem statement to relevant quickstart or product area"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If you want an AI agent to help choose the route and bootstrap a starter, use ", _jsx(_components.a, {
        href: "/en/introduction/start-with-ai",
        children: "Start with AI"
      }), " instead."]
    }), `
`, _jsx(_components.h2, {
      id: "start-from-the-problem-you-are-solving",
      children: "Start from the problem you are solving"
    }), `
`, _jsx(_components.h3, {
      id: "voice-first-ai-interaction",
      children: "Voice-first AI interaction"
    }), `
`, _jsx(_components.p, {
      children: "If users need to talk to an AI agent in real time, start with:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/conversational-ai",
          children: "Conversational AI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/ai/get-started/quickstart",
          children: "AI quickstart"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/ai/choose-your-path/quickstart-coding",
          children: "Voice agent quickstart"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This path is usually right for assistants, tutors, companions, service agents, and voice-enabled devices."
    }), `
`, _jsx(_components.h3, {
      id: "live-voice-video-or-interactive-sessions",
      children: "Live voice, video, or interactive sessions"
    }), `
`, _jsx(_components.p, {
      children: "If users need to join the same session and interact through live media, start with:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/realtime-audio-video",
          children: "Real-Time Voice & Video"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc",
          children: "Audio & Video"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/android/quick-start/build-from-scratch",
          children: "Voice & Video quickstart"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This path is usually right for calling, meetings, classrooms, social rooms, telehealth, and interactive livestreaming."
    }), `
`, _jsx(_components.h3, {
      id: "room-messaging-state-sync-or-workflow-coordination",
      children: "Room messaging, state sync, or workflow coordination"
    }), `
`, _jsx(_components.p, {
      children: "If the product depends on chat, presence, metadata, or event coordination, start with:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/messaging-presence",
          children: "Messaging & Presence"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtm",
          children: "RTM / Signaling"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im",
          children: "IM / Chat"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This path is usually right for in-room communication, control flows, collaborative state, and backend-triggered room actions."
    }), `
`, _jsx(_components.h3, {
      id: "cloud-side-media-workflows",
      children: "Cloud-side media workflows"
    }), `
`, _jsx(_components.p, {
      children: "If the media must be captured, processed, routed, or redistributed beyond the live session itself, start with:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/cloud-media-services",
          children: "Cloud Media Services"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording",
          children: "Cloud Recording"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/speech-to-text",
          children: "Real-time Transcription & Translation"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/transcoding",
          children: "Transcoding"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc-server-sdk",
          children: "Server Media Processing"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This path is usually right for archive, replay, moderation, server-side automation, and downstream content pipelines."
    }), `
`, _jsx(_components.h2, {
      id: "common-combinations",
      children: "Common combinations"
    }), `
`, _jsx(_components.p, {
      children: "Many production systems combine several of these paths:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["voice or video sessions plus ", _jsx(_components.a, {
          href: "/en/introduction/messaging-presence",
          children: "Messaging & Presence"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["AI interaction plus ", _jsx(_components.a, {
          href: "/en/introduction/cloud-media-services",
          children: "Cloud Media Services"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["live sessions plus ", _jsx(_components.a, {
          href: "/en/introduction/cloud-media-services",
          children: "Cloud Media Services"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["broadcast products plus ", _jsx(_components.a, {
          href: "/en/introduction/cloud-media-services",
          children: "Cloud Media Services"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-to-do-next",
      children: "What to do next"
    }), `
`, _jsxs(_components.p, {
      children: ["If you are still evaluating the platform, read ", _jsx(_components.a, {
        href: "/en/introduction/about-agora",
        children: "About Agora"
      }), " first. If you want the shared mental model before choosing a path, read ", _jsx(_components.a, {
        href: "/en/introduction/core-concepts",
        children: "Core Concepts"
      }), ". If you want an AI-assisted setup workflow, switch to ", _jsx(_components.a, {
        href: "/en/introduction/start-with-ai",
        children: "Start with AI"
      }), "."]
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
