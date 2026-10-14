import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Messaging & Presence",
  description: "Build chat, room state, presence, and collaborative coordination on top of Agora's real-time messaging layer."
};
export let _markdown = `

![Signaling overview](https://assets-docs.agora.io/images/signaling/signaling-overview.png)

Messaging & Presence is the capability layer for products that need more than media. This category covers human messaging, participant presence, room state, and shared collaboration surfaces that keep live systems coordinated.

Agora's product map for this layer includes:

* **IM / Chat**
* **RTM / Signaling**
* **Interactive Whiteboard**

## What this category is good for [#what-this-category-is-good-for]

This category is the right entry point when you need:

* in-room chat and social messaging
* user presence and online state
* metadata synchronization and coordination signals
* collaborative session control and shared state
* whiteboard-backed visual collaboration inside a live product

The shared requirement is that participants must stay aligned with each other and with the state of the session in real time.

## Capability map [#capability-map]

<CardGrid>
  <FeatureCard title="Chat">
    IM-oriented communication for user conversation, room interaction, and product workflows that depend on message exchange.
  </FeatureCard>

  <FeatureCard title="Signaling">
    RTM-oriented channels, topics, presence, metadata, and coordination events that support real-time systems.
  </FeatureCard>

  <FeatureCard title="Whiteboard">
    Shared visual state for drawing, annotation, presentation, and collaborative interaction around content.
  </FeatureCard>
</CardGrid>

## Start here [#start-here]

<OverviewSpotlightGrid>
  <OverviewSpotlightCard href="/en/realtime-media/rtm" title="RTM / Signaling" variant="platform" />

  <OverviewSpotlightCard href="/en/realtime-media/im" title="IM / Chat" variant="platform" />

  <OverviewSpotlightCard href="/en/realtime-media/whiteboard" title="Whiteboard" variant="platform" />
</OverviewSpotlightGrid>

## Key characteristics [#key-characteristics]

<CardGrid>
  <FeatureCard title="Human messaging and system state">
    Support both user-facing communication and the metadata flows that keep live products synchronized.
  </FeatureCard>

  <FeatureCard title="Presence-aware coordination">
    Track who is online, what state they are in, and how session behavior should react as users and devices change status.
  </FeatureCard>

  <FeatureCard title="Supports collaboration workflows">
    Extend from text and events into shared whiteboard or content collaboration when the product needs a richer interaction layer.
  </FeatureCard>

  <FeatureCard title="Adjacent to media and AI">
    Combine easily with RTC sessions and AI agents when messages and events need to travel alongside audio and video.
  </FeatureCard>

  <FeatureCard title="Flexible protocol surface">
    Choose between IM-style user communication and RTM-style signaling depending on whether the main problem is conversation, coordination, or both.
  </FeatureCard>

  <FeatureCard title="Shared live context">
    Keep users, agents, and session tools operating against the same live room state instead of fragmenting the product experience.
  </FeatureCard>
</CardGrid>

## What to read next [#what-to-read-next]

* [Real-time Messaging RTM](/en/realtime-media/rtm)
* [Instant Messaging IM](/en/realtime-media/im)
* [Interactive Whiteboard](/en/realtime-media/whiteboard)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Messaging & Presence is the capability layer for products that need more than media. This category covers human messaging, participant presence, room state, and shared collaboration surfaces that keep live systems coordinated."
  }, {
    heading: undefined,
    content: "Agora's product map for this layer includes:"
  }, {
    heading: undefined,
    content: "**IM / Chat**"
  }, {
    heading: undefined,
    content: "**RTM / Signaling**"
  }, {
    heading: undefined,
    content: "**Interactive Whiteboard**"
  }, {
    heading: "what-this-category-is-good-for",
    content: "This category is the right entry point when you need:"
  }, {
    heading: "what-this-category-is-good-for",
    content: "in-room chat and social messaging"
  }, {
    heading: "what-this-category-is-good-for",
    content: "user presence and online state"
  }, {
    heading: "what-this-category-is-good-for",
    content: "metadata synchronization and coordination signals"
  }, {
    heading: "what-this-category-is-good-for",
    content: "collaborative session control and shared state"
  }, {
    heading: "what-this-category-is-good-for",
    content: "whiteboard-backed visual collaboration inside a live product"
  }, {
    heading: "what-this-category-is-good-for",
    content: "The shared requirement is that participants must stay aligned with each other and with the state of the session in real time."
  }, {
    heading: "capability-map",
    content: "IM-oriented communication for user conversation, room interaction, and product workflows that depend on message exchange."
  }, {
    heading: "capability-map",
    content: "RTM-oriented channels, topics, presence, metadata, and coordination events that support real-time systems."
  }, {
    heading: "capability-map",
    content: "Shared visual state for drawing, annotation, presentation, and collaborative interaction around content."
  }, {
    heading: "key-characteristics",
    content: "Support both user-facing communication and the metadata flows that keep live products synchronized."
  }, {
    heading: "key-characteristics",
    content: "Track who is online, what state they are in, and how session behavior should react as users and devices change status."
  }, {
    heading: "key-characteristics",
    content: "Extend from text and events into shared whiteboard or content collaboration when the product needs a richer interaction layer."
  }, {
    heading: "key-characteristics",
    content: "Combine easily with RTC sessions and AI agents when messages and events need to travel alongside audio and video."
  }, {
    heading: "key-characteristics",
    content: "Choose between IM-style user communication and RTM-style signaling depending on whether the main problem is conversation, coordination, or both."
  }, {
    heading: "key-characteristics",
    content: "Keep users, agents, and session tools operating against the same live room state instead of fragmenting the product experience."
  }, {
    heading: "what-to-read-next",
    content: "Real-time Messaging RTM"
  }, {
    heading: "what-to-read-next",
    content: "Instant Messaging IM"
  }, {
    heading: "what-to-read-next",
    content: "Interactive Whiteboard"
  }],
  headings: [{
    id: "what-this-category-is-good-for",
    content: "What this category is good for"
  }, {
    id: "capability-map",
    content: "Capability map"
  }, {
    id: "start-here",
    content: "Start here"
  }, {
    id: "key-characteristics",
    content: "Key characteristics"
  }, {
    id: "what-to-read-next",
    content: "What to read next"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-this-category-is-good-for",
  title: _jsx(_Fragment, {
    children: "What this category is good for"
  })
}, {
  depth: 2,
  url: "#capability-map",
  title: _jsx(_Fragment, {
    children: "Capability map"
  })
}, {
  depth: 2,
  url: "#start-here",
  title: _jsx(_Fragment, {
    children: "Start here"
  })
}, {
  depth: 2,
  url: "#key-characteristics",
  title: _jsx(_Fragment, {
    children: "Key characteristics"
  })
}, {
  depth: 2,
  url: "#what-to-read-next",
  title: _jsx(_Fragment, {
    children: "What to read next"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CardGrid, FeatureCard, OverviewSpotlightCard, OverviewSpotlightGrid } = _components;
  if (!CardGrid)
    _missingMdxReference("CardGrid", true);
  if (!FeatureCard)
    _missingMdxReference("FeatureCard", true);
  if (!OverviewSpotlightCard)
    _missingMdxReference("OverviewSpotlightCard", true);
  if (!OverviewSpotlightGrid)
    _missingMdxReference("OverviewSpotlightGrid", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/signaling/signaling-overview.png",
        alt: "Signaling overview"
      })
    }), `
`, _jsx(_components.p, {
      children: "Messaging & Presence is the capability layer for products that need more than media. This category covers human messaging, participant presence, room state, and shared collaboration surfaces that keep live systems coordinated."
    }), `
`, _jsx(_components.p, {
      children: "Agora's product map for this layer includes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "IM / Chat"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "RTM / Signaling"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Interactive Whiteboard"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-this-category-is-good-for",
      children: "What this category is good for"
    }), `
`, _jsx(_components.p, {
      children: "This category is the right entry point when you need:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "in-room chat and social messaging"
      }), `
`, _jsx(_components.li, {
        children: "user presence and online state"
      }), `
`, _jsx(_components.li, {
        children: "metadata synchronization and coordination signals"
      }), `
`, _jsx(_components.li, {
        children: "collaborative session control and shared state"
      }), `
`, _jsx(_components.li, {
        children: "whiteboard-backed visual collaboration inside a live product"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The shared requirement is that participants must stay aligned with each other and with the state of the session in real time."
    }), `
`, _jsx(_components.h2, {
      id: "capability-map",
      children: "Capability map"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Chat",
        children: _jsx(_components.p, {
          children: "IM-oriented communication for user conversation, room interaction, and product workflows that depend on message exchange."
        })
      }), _jsx(FeatureCard, {
        title: "Signaling",
        children: _jsx(_components.p, {
          children: "RTM-oriented channels, topics, presence, metadata, and coordination events that support real-time systems."
        })
      }), _jsx(FeatureCard, {
        title: "Whiteboard",
        children: _jsx(_components.p, {
          children: "Shared visual state for drawing, annotation, presentation, and collaborative interaction around content."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "start-here",
      children: "Start here"
    }), `
`, _jsxs(OverviewSpotlightGrid, {
      children: [_jsx(OverviewSpotlightCard, {
        href: "/en/realtime-media/rtm",
        title: "RTM / Signaling",
        variant: "platform"
      }), _jsx(OverviewSpotlightCard, {
        href: "/en/realtime-media/im",
        title: "IM / Chat",
        variant: "platform"
      }), _jsx(OverviewSpotlightCard, {
        href: "/en/realtime-media/whiteboard",
        title: "Whiteboard",
        variant: "platform"
      })]
    }), `
`, _jsx(_components.h2, {
      id: "key-characteristics",
      children: "Key characteristics"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Human messaging and system state",
        children: _jsx(_components.p, {
          children: "Support both user-facing communication and the metadata flows that keep live products synchronized."
        })
      }), _jsx(FeatureCard, {
        title: "Presence-aware coordination",
        children: _jsx(_components.p, {
          children: "Track who is online, what state they are in, and how session behavior should react as users and devices change status."
        })
      }), _jsx(FeatureCard, {
        title: "Supports collaboration workflows",
        children: _jsx(_components.p, {
          children: "Extend from text and events into shared whiteboard or content collaboration when the product needs a richer interaction layer."
        })
      }), _jsx(FeatureCard, {
        title: "Adjacent to media and AI",
        children: _jsx(_components.p, {
          children: "Combine easily with RTC sessions and AI agents when messages and events need to travel alongside audio and video."
        })
      }), _jsx(FeatureCard, {
        title: "Flexible protocol surface",
        children: _jsx(_components.p, {
          children: "Choose between IM-style user communication and RTM-style signaling depending on whether the main problem is conversation, coordination, or both."
        })
      }), _jsx(FeatureCard, {
        title: "Shared live context",
        children: _jsx(_components.p, {
          children: "Keep users, agents, and session tools operating against the same live room state instead of fragmenting the product experience."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "what-to-read-next",
      children: "What to read next"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtm",
          children: "Real-time Messaging RTM"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im",
          children: "Instant Messaging IM"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/whiteboard",
          children: "Interactive Whiteboard"
        })
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
