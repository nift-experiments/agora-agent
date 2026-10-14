import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "About Agora",
  description: "Understand Agora as a real-time platform, the problems it solves, how its product families fit together, and where to start."
};
export let _markdown = `

## What Agora is [#what-agora-is]

Agora is a real-time platform for products where people, devices, services, and AI systems need to stay connected inside the same live session.

Instead of treating voice, video, messaging, AI orchestration, and media processing as separate stacks, Agora gives you a shared real-time foundation you can build on. You can start with one immediate use case, such as voice calling or an AI agent, and then extend the same session architecture into messaging, cloud processing, analytics, and production operations.

<CalloutContainer type="info">
  <CalloutTitle>
    Think in live sessions, not isolated features
  </CalloutTitle>

  <CalloutDescription>
    Agora is easiest to understand when you treat it as a shared real-time layer for interaction, coordination, AI participation, and media workflows.
  </CalloutDescription>
</CalloutContainer>

## What problems it solves [#what-problems-it-solves]

Teams usually come to Agora when they need to solve more than one live-product problem at the same time:

* Keep voice and video interactions usable under real-world network conditions.
* Coordinate room state, presence, events, and messaging alongside live media.
* Add voice AI into a live session instead of bolting AI onto a disconnected backend flow.
* Record, transcribe, translate, transform, or distribute media after the session starts.
* Operate production systems with the credentials, security, monitoring, and governance live products require.

In practice, this means Agora is most useful when your product is not just sending a message or making a single API call, but managing an ongoing real-time experience.

## Product families [#product-families]

Agora's docs are easier to navigate when you group the platform into four product families instead of reading it as a list of unrelated SKUs.

<CardGrid>
  <FeatureCard title="Conversational AI">
    Build voice agents, assistants, tutors, support flows, and multimodal AI experiences that participate in a live real-time session.
  </FeatureCard>

  <FeatureCard title="Real-Time Voice & Video">
    Build calling, meetings, classrooms, livestream interaction, smart-device media flows, and other low-latency communication products.
  </FeatureCard>

  <FeatureCard title="Messaging & Presence">
    Keep users, devices, and room state synchronized with chat, presence, metadata, signaling, and collaboration surfaces.
  </FeatureCard>

  <FeatureCard title="Cloud Media Services">
    Extend live sessions with recording, speech-to-text, translation, push and pull workflows, transcoding, and distribution tooling.
  </FeatureCard>
</CardGrid>

## How these products fit together [#how-these-products-fit-together]

The most useful mental model is to think in layers of responsibility:

1. **Projects and credentials** define access, billing scope, and service boundaries.
2. **Real-time sessions** connect users, devices, and agents inside a shared live context.
3. **Voice, video, and messaging** carry interaction, room state, and events through that context.
4. **AI and server-side control** add orchestration, automation, callbacks, and business logic.
5. **Cloud media services** capture, transform, translate, distribute, and observe the live session.

You do not need every layer on day one. The value of the platform is that these layers can be added over time without forcing you to replace the underlying session model.

## Common solution patterns [#common-solution-patterns]

Most implementations start from a small number of repeatable patterns:

<CardGrid>
  <FeatureCard title="RTC only">
    Start with live voice or video when the main requirement is low-latency communication between participants.
  </FeatureCard>

  <FeatureCard title="RTC + RTM">
    Add room messaging, presence, and coordination when participants also need shared state, chat, or event-driven flows.
  </FeatureCard>

  <FeatureCard title="RTC + AI">
    Add a voice agent when an AI system needs to join the session as a live participant instead of a separate backend service.
  </FeatureCard>

  <FeatureCard title="RTC + Recording or STT">
    Extend a live session with archive, compliance, captions, transcripts, translation, or post-session processing.
  </FeatureCard>

  <FeatureCard title="AI + Device">
    Build smart-device or embedded experiences where microphones, speakers, sensors, and agents operate through the same real-time path.
  </FeatureCard>
</CardGrid>

These patterns are helpful because they let you choose a narrow first milestone while keeping a clear path to the rest of the platform.

## Where to start [#where-to-start]

Choose the next page based on the first problem you need to solve:

* Start with [Start with AI](/en/introduction/start-with-ai) if you want an AI-assisted path using Skills, MCP, and agent-friendly docs.
* Go to [Conversational AI](/en/introduction/conversational-ai) if your main product is a voice agent, assistant, tutor, or spoken AI experience.
* Go to [Real-Time Voice & Video](/en/introduction/realtime-audio-video) if your first milestone is calling, meetings, classrooms, livestream interaction, or device media transport.
* Go to [Messaging & Presence](/en/introduction/messaging-presence) if chat, presence, signaling, or shared room state is your main coordination problem.
* Go to [Cloud Media Services](/en/introduction/cloud-media-services) if you need recording, transcription, translation, media routing, or stream transformation around a live session.
* Read [Core Concepts](/en/introduction/core-concepts) if you want the platform primitives before choosing a build path.

When you move from prototype to production, continue with [Projects](/en/introduction/projects), [Console setup](/en/introduction/console-setup), [Billing](/en/introduction/billing), and [Security and privacy](/en/introduction/security-privacy).
`;
export let structuredData = {
  contents: [{
    heading: "what-agora-is",
    content: "Agora is a real-time platform for products where people, devices, services, and AI systems need to stay connected inside the same live session."
  }, {
    heading: "what-agora-is",
    content: "Instead of treating voice, video, messaging, AI orchestration, and media processing as separate stacks, Agora gives you a shared real-time foundation you can build on. You can start with one immediate use case, such as voice calling or an AI agent, and then extend the same session architecture into messaging, cloud processing, analytics, and production operations."
  }, {
    heading: "what-agora-is",
    content: "Agora is easiest to understand when you treat it as a shared real-time layer for interaction, coordination, AI participation, and media workflows."
  }, {
    heading: "what-problems-it-solves",
    content: "Teams usually come to Agora when they need to solve more than one live-product problem at the same time:"
  }, {
    heading: "what-problems-it-solves",
    content: "Keep voice and video interactions usable under real-world network conditions."
  }, {
    heading: "what-problems-it-solves",
    content: "Coordinate room state, presence, events, and messaging alongside live media."
  }, {
    heading: "what-problems-it-solves",
    content: "Add voice AI into a live session instead of bolting AI onto a disconnected backend flow."
  }, {
    heading: "what-problems-it-solves",
    content: "Record, transcribe, translate, transform, or distribute media after the session starts."
  }, {
    heading: "what-problems-it-solves",
    content: "Operate production systems with the credentials, security, monitoring, and governance live products require."
  }, {
    heading: "what-problems-it-solves",
    content: "In practice, this means Agora is most useful when your product is not just sending a message or making a single API call, but managing an ongoing real-time experience."
  }, {
    heading: "product-families",
    content: "Agora's docs are easier to navigate when you group the platform into four product families instead of reading it as a list of unrelated SKUs."
  }, {
    heading: "product-families",
    content: "Build voice agents, assistants, tutors, support flows, and multimodal AI experiences that participate in a live real-time session."
  }, {
    heading: "product-families",
    content: "Build calling, meetings, classrooms, livestream interaction, smart-device media flows, and other low-latency communication products."
  }, {
    heading: "product-families",
    content: "Keep users, devices, and room state synchronized with chat, presence, metadata, signaling, and collaboration surfaces."
  }, {
    heading: "product-families",
    content: "Extend live sessions with recording, speech-to-text, translation, push and pull workflows, transcoding, and distribution tooling."
  }, {
    heading: "how-these-products-fit-together",
    content: "The most useful mental model is to think in layers of responsibility:"
  }, {
    heading: "how-these-products-fit-together",
    content: "**Projects and credentials** define access, billing scope, and service boundaries."
  }, {
    heading: "how-these-products-fit-together",
    content: "**Real-time sessions** connect users, devices, and agents inside a shared live context."
  }, {
    heading: "how-these-products-fit-together",
    content: "**Voice, video, and messaging** carry interaction, room state, and events through that context."
  }, {
    heading: "how-these-products-fit-together",
    content: "**AI and server-side control** add orchestration, automation, callbacks, and business logic."
  }, {
    heading: "how-these-products-fit-together",
    content: "**Cloud media services** capture, transform, translate, distribute, and observe the live session."
  }, {
    heading: "how-these-products-fit-together",
    content: "You do not need every layer on day one. The value of the platform is that these layers can be added over time without forcing you to replace the underlying session model."
  }, {
    heading: "common-solution-patterns",
    content: "Most implementations start from a small number of repeatable patterns:"
  }, {
    heading: "common-solution-patterns",
    content: "Start with live voice or video when the main requirement is low-latency communication between participants."
  }, {
    heading: "common-solution-patterns",
    content: "Add room messaging, presence, and coordination when participants also need shared state, chat, or event-driven flows."
  }, {
    heading: "common-solution-patterns",
    content: "Add a voice agent when an AI system needs to join the session as a live participant instead of a separate backend service."
  }, {
    heading: "common-solution-patterns",
    content: "Extend a live session with archive, compliance, captions, transcripts, translation, or post-session processing."
  }, {
    heading: "common-solution-patterns",
    content: "Build smart-device or embedded experiences where microphones, speakers, sensors, and agents operate through the same real-time path."
  }, {
    heading: "common-solution-patterns",
    content: "These patterns are helpful because they let you choose a narrow first milestone while keeping a clear path to the rest of the platform."
  }, {
    heading: "where-to-start",
    content: "Choose the next page based on the first problem you need to solve:"
  }, {
    heading: "where-to-start",
    content: "Start with Start with AI if you want an AI-assisted path using Skills, MCP, and agent-friendly docs."
  }, {
    heading: "where-to-start",
    content: "Go to Conversational AI if your main product is a voice agent, assistant, tutor, or spoken AI experience."
  }, {
    heading: "where-to-start",
    content: "Go to Real-Time Voice & Video if your first milestone is calling, meetings, classrooms, livestream interaction, or device media transport."
  }, {
    heading: "where-to-start",
    content: "Go to Messaging & Presence if chat, presence, signaling, or shared room state is your main coordination problem."
  }, {
    heading: "where-to-start",
    content: "Go to Cloud Media Services if you need recording, transcription, translation, media routing, or stream transformation around a live session."
  }, {
    heading: "where-to-start",
    content: "Read Core Concepts if you want the platform primitives before choosing a build path."
  }, {
    heading: "where-to-start",
    content: "When you move from prototype to production, continue with Projects, Console setup, Billing, and Security and privacy."
  }],
  headings: [{
    id: "what-agora-is",
    content: "What Agora is"
  }, {
    id: "what-problems-it-solves",
    content: "What problems it solves"
  }, {
    id: "product-families",
    content: "Product families"
  }, {
    id: "how-these-products-fit-together",
    content: "How these products fit together"
  }, {
    id: "common-solution-patterns",
    content: "Common solution patterns"
  }, {
    id: "where-to-start",
    content: "Where to start"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-agora-is",
  title: _jsx(_Fragment, {
    children: "What Agora is"
  })
}, {
  depth: 2,
  url: "#what-problems-it-solves",
  title: _jsx(_Fragment, {
    children: "What problems it solves"
  })
}, {
  depth: 2,
  url: "#product-families",
  title: _jsx(_Fragment, {
    children: "Product families"
  })
}, {
  depth: 2,
  url: "#how-these-products-fit-together",
  title: _jsx(_Fragment, {
    children: "How these products fit together"
  })
}, {
  depth: 2,
  url: "#common-solution-patterns",
  title: _jsx(_Fragment, {
    children: "Common solution patterns"
  })
}, {
  depth: 2,
  url: "#where-to-start",
  title: _jsx(_Fragment, {
    children: "Where to start"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, CardGrid, FeatureCard } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!CardGrid)
    _missingMdxReference("CardGrid", true);
  if (!FeatureCard)
    _missingMdxReference("FeatureCard", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "what-agora-is",
      children: "What Agora is"
    }), `
`, _jsx(_components.p, {
      children: "Agora is a real-time platform for products where people, devices, services, and AI systems need to stay connected inside the same live session."
    }), `
`, _jsx(_components.p, {
      children: "Instead of treating voice, video, messaging, AI orchestration, and media processing as separate stacks, Agora gives you a shared real-time foundation you can build on. You can start with one immediate use case, such as voice calling or an AI agent, and then extend the same session architecture into messaging, cloud processing, analytics, and production operations."
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Think in live sessions, not isolated features"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Agora is easiest to understand when you treat it as a shared real-time layer for interaction, coordination, AI participation, and media workflows."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "what-problems-it-solves",
      children: "What problems it solves"
    }), `
`, _jsx(_components.p, {
      children: "Teams usually come to Agora when they need to solve more than one live-product problem at the same time:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Keep voice and video interactions usable under real-world network conditions."
      }), `
`, _jsx(_components.li, {
        children: "Coordinate room state, presence, events, and messaging alongside live media."
      }), `
`, _jsx(_components.li, {
        children: "Add voice AI into a live session instead of bolting AI onto a disconnected backend flow."
      }), `
`, _jsx(_components.li, {
        children: "Record, transcribe, translate, transform, or distribute media after the session starts."
      }), `
`, _jsx(_components.li, {
        children: "Operate production systems with the credentials, security, monitoring, and governance live products require."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In practice, this means Agora is most useful when your product is not just sending a message or making a single API call, but managing an ongoing real-time experience."
    }), `
`, _jsx(_components.h2, {
      id: "product-families",
      children: "Product families"
    }), `
`, _jsx(_components.p, {
      children: "Agora's docs are easier to navigate when you group the platform into four product families instead of reading it as a list of unrelated SKUs."
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Conversational AI",
        children: _jsx(_components.p, {
          children: "Build voice agents, assistants, tutors, support flows, and multimodal AI experiences that participate in a live real-time session."
        })
      }), _jsx(FeatureCard, {
        title: "Real-Time Voice & Video",
        children: _jsx(_components.p, {
          children: "Build calling, meetings, classrooms, livestream interaction, smart-device media flows, and other low-latency communication products."
        })
      }), _jsx(FeatureCard, {
        title: "Messaging & Presence",
        children: _jsx(_components.p, {
          children: "Keep users, devices, and room state synchronized with chat, presence, metadata, signaling, and collaboration surfaces."
        })
      }), _jsx(FeatureCard, {
        title: "Cloud Media Services",
        children: _jsx(_components.p, {
          children: "Extend live sessions with recording, speech-to-text, translation, push and pull workflows, transcoding, and distribution tooling."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "how-these-products-fit-together",
      children: "How these products fit together"
    }), `
`, _jsx(_components.p, {
      children: "The most useful mental model is to think in layers of responsibility:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Projects and credentials"
        }), " define access, billing scope, and service boundaries."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Real-time sessions"
        }), " connect users, devices, and agents inside a shared live context."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Voice, video, and messaging"
        }), " carry interaction, room state, and events through that context."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "AI and server-side control"
        }), " add orchestration, automation, callbacks, and business logic."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cloud media services"
        }), " capture, transform, translate, distribute, and observe the live session."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You do not need every layer on day one. The value of the platform is that these layers can be added over time without forcing you to replace the underlying session model."
    }), `
`, _jsx(_components.h2, {
      id: "common-solution-patterns",
      children: "Common solution patterns"
    }), `
`, _jsx(_components.p, {
      children: "Most implementations start from a small number of repeatable patterns:"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "RTC only",
        children: _jsx(_components.p, {
          children: "Start with live voice or video when the main requirement is low-latency communication between participants."
        })
      }), _jsx(FeatureCard, {
        title: "RTC + RTM",
        children: _jsx(_components.p, {
          children: "Add room messaging, presence, and coordination when participants also need shared state, chat, or event-driven flows."
        })
      }), _jsx(FeatureCard, {
        title: "RTC + AI",
        children: _jsx(_components.p, {
          children: "Add a voice agent when an AI system needs to join the session as a live participant instead of a separate backend service."
        })
      }), _jsx(FeatureCard, {
        title: "RTC + Recording or STT",
        children: _jsx(_components.p, {
          children: "Extend a live session with archive, compliance, captions, transcripts, translation, or post-session processing."
        })
      }), _jsx(FeatureCard, {
        title: "AI + Device",
        children: _jsx(_components.p, {
          children: "Build smart-device or embedded experiences where microphones, speakers, sensors, and agents operate through the same real-time path."
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "These patterns are helpful because they let you choose a narrow first milestone while keeping a clear path to the rest of the platform."
    }), `
`, _jsx(_components.h2, {
      id: "where-to-start",
      children: "Where to start"
    }), `
`, _jsx(_components.p, {
      children: "Choose the next page based on the first problem you need to solve:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Start with ", _jsx(_components.a, {
          href: "/en/introduction/start-with-ai",
          children: "Start with AI"
        }), " if you want an AI-assisted path using Skills, MCP, and agent-friendly docs."]
      }), `
`, _jsxs(_components.li, {
        children: ["Go to ", _jsx(_components.a, {
          href: "/en/introduction/conversational-ai",
          children: "Conversational AI"
        }), " if your main product is a voice agent, assistant, tutor, or spoken AI experience."]
      }), `
`, _jsxs(_components.li, {
        children: ["Go to ", _jsx(_components.a, {
          href: "/en/introduction/realtime-audio-video",
          children: "Real-Time Voice & Video"
        }), " if your first milestone is calling, meetings, classrooms, livestream interaction, or device media transport."]
      }), `
`, _jsxs(_components.li, {
        children: ["Go to ", _jsx(_components.a, {
          href: "/en/introduction/messaging-presence",
          children: "Messaging & Presence"
        }), " if chat, presence, signaling, or shared room state is your main coordination problem."]
      }), `
`, _jsxs(_components.li, {
        children: ["Go to ", _jsx(_components.a, {
          href: "/en/introduction/cloud-media-services",
          children: "Cloud Media Services"
        }), " if you need recording, transcription, translation, media routing, or stream transformation around a live session."]
      }), `
`, _jsxs(_components.li, {
        children: ["Read ", _jsx(_components.a, {
          href: "/en/introduction/core-concepts",
          children: "Core Concepts"
        }), " if you want the platform primitives before choosing a build path."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["When you move from prototype to production, continue with ", _jsx(_components.a, {
        href: "/en/introduction/projects",
        children: "Projects"
      }), ", ", _jsx(_components.a, {
        href: "/en/introduction/console-setup",
        children: "Console setup"
      }), ", ", _jsx(_components.a, {
        href: "/en/introduction/billing",
        children: "Billing"
      }), ", and ", _jsx(_components.a, {
        href: "/en/introduction/security-privacy",
        children: "Security and privacy"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
