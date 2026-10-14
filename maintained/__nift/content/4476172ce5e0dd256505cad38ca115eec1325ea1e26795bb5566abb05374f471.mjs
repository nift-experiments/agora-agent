import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media Pull overview",
  description: "Enables you to pull audio and video streams from Agora channels and upload them to a Content Delivery Network (CDN) to reach a larger audience."
};
export let _markdown = `

Agora's Media Pull service enables the injection of external media streams into real-time Agora channels. Hosts and audiences can seamlessly view and hear the additional streams while interacting in real-time, enhancing engagement and content versatility. The service is designed to work with Agora's Voice Calling, Video Calling, and Interactive Live Streaming.

With support for multiple streaming protocols, extensive media formats, and ultra-low latency, Media Pull ensures smooth and flexible media injection. Control playback timing for injected streams to synchronize content seamlessly within your channel, creating dynamic and interactive experiences.

## Quick links [#quick-links]

<Cards>
  <Card title="Quickstart" href="./get-started/enable-media-pull" description="Enable Media Pull and inject an external stream into an RTC channel." />

  <Card title="API reference" href="/en/api-reference/api-ref/media-pull" description="Explore Media Pull REST API operations and parameters." />
</Cards>

## Key features [#key-features]

<CardGrid>
  <FeatureCard title="Easy to integrate with RESTful API">
    Inject an online media stream into the Agora channel as a live video source using the RESTful API.
  </FeatureCard>

  <FeatureCard title="External content in your channel">
    After the injection succeeds, the online media stream automatically plays in the Agora channel, and remote users can see the content of the media stream.
  </FeatureCard>

  <FeatureCard title="Ultra-low latency">
    The audio or video stream is injected with ultra-low latency, allowing the audience to see and hear the stream in real time.
  </FeatureCard>

  <FeatureCard title="Timed media stream injection">
    Hosts can control when to start playing the injected media stream to coordinate timed media stream playback.
  </FeatureCard>

  <FeatureCard title="Extensive media format support">
    Supports video codec formats H.264, H.265, and VP9; audio codec formats: AAC and OPUS; and container formats FLV, MP4, MPEG-TS, Matroska (MKV), and HLS.
  </FeatureCard>

  <FeatureCard title="Support for multiple streaming protocols">
    Support for HTTPS, and RTMP streaming protocols.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Media Pull service enables the injection of external media streams into real-time Agora channels. Hosts and audiences can seamlessly view and hear the additional streams while interacting in real-time, enhancing engagement and content versatility. The service is designed to work with Agora's Voice Calling, Video Calling, and Interactive Live Streaming."
  }, {
    heading: undefined,
    content: "With support for multiple streaming protocols, extensive media formats, and ultra-low latency, Media Pull ensures smooth and flexible media injection. Control playback timing for injected streams to synchronize content seamlessly within your channel, creating dynamic and interactive experiences."
  }, {
    heading: "quick-links",
    content: '<Card title="Quickstart" href="./get-started/enable-media-pull" description="Enable Media Pull and inject an external stream into an RTC channel." />'
  }, {
    heading: "quick-links",
    content: '<Card title="API reference" href="/en/api-reference/api-ref/media-pull" description="Explore Media Pull REST API operations and parameters." />'
  }, {
    heading: "key-features",
    content: "Inject an online media stream into the Agora channel as a live video source using the RESTful API."
  }, {
    heading: "key-features",
    content: "After the injection succeeds, the online media stream automatically plays in the Agora channel, and remote users can see the content of the media stream."
  }, {
    heading: "key-features",
    content: "The audio or video stream is injected with ultra-low latency, allowing the audience to see and hear the stream in real time."
  }, {
    heading: "key-features",
    content: "Hosts can control when to start playing the injected media stream to coordinate timed media stream playback."
  }, {
    heading: "key-features",
    content: "Supports video codec formats H.264, H.265, and VP9; audio codec formats: AAC and OPUS; and container formats FLV, MP4, MPEG-TS, Matroska (MKV), and HLS."
  }, {
    heading: "key-features",
    content: "Support for HTTPS, and RTMP streaming protocols."
  }],
  headings: [{
    id: "quick-links",
    content: "Quick links"
  }, {
    id: "key-features",
    content: "Key features"
  }]
};
export let toc = [{
  depth: 2,
  url: "#quick-links",
  title: _jsx(_Fragment, {
    children: "Quick links"
  })
}, {
  depth: 2,
  url: "#key-features",
  title: _jsx(_Fragment, {
    children: "Key features"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  }, { Card, CardGrid, Cards, FeatureCard } = _components;
  if (!Card)
    _missingMdxReference("Card", true);
  if (!CardGrid)
    _missingMdxReference("CardGrid", true);
  if (!Cards)
    _missingMdxReference("Cards", true);
  if (!FeatureCard)
    _missingMdxReference("FeatureCard", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora's Media Pull service enables the injection of external media streams into real-time Agora channels. Hosts and audiences can seamlessly view and hear the additional streams while interacting in real-time, enhancing engagement and content versatility. The service is designed to work with Agora's Voice Calling, Video Calling, and Interactive Live Streaming."
    }), `
`, _jsx(_components.p, {
      children: "With support for multiple streaming protocols, extensive media formats, and ultra-low latency, Media Pull ensures smooth and flexible media injection. Control playback timing for injected streams to synchronize content seamlessly within your channel, creating dynamic and interactive experiences."
    }), `
`, _jsx(_components.h2, {
      id: "quick-links",
      children: "Quick links"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "Quickstart",
        href: "./get-started/enable-media-pull",
        description: "Enable Media Pull and inject an external stream into an RTC channel."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref/media-pull",
        description: "Explore Media Pull REST API operations and parameters."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "key-features",
      children: "Key features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Easy to integrate with RESTful API",
        children: _jsx(_components.p, {
          children: "Inject an online media stream into the Agora channel as a live video source using the RESTful API."
        })
      }), _jsx(FeatureCard, {
        title: "External content in your channel",
        children: _jsx(_components.p, {
          children: "After the injection succeeds, the online media stream automatically plays in the Agora channel, and remote users can see the content of the media stream."
        })
      }), _jsx(FeatureCard, {
        title: "Ultra-low latency",
        children: _jsx(_components.p, {
          children: "The audio or video stream is injected with ultra-low latency, allowing the audience to see and hear the stream in real time."
        })
      }), _jsx(FeatureCard, {
        title: "Timed media stream injection",
        children: _jsx(_components.p, {
          children: "Hosts can control when to start playing the injected media stream to coordinate timed media stream playback."
        })
      }), _jsx(FeatureCard, {
        title: "Extensive media format support",
        children: _jsx(_components.p, {
          children: "Supports video codec formats H.264, H.265, and VP9; audio codec formats: AAC and OPUS; and container formats FLV, MP4, MPEG-TS, Matroska (MKV), and HLS."
        })
      }), _jsx(FeatureCard, {
        title: "Support for multiple streaming protocols",
        children: _jsx(_components.p, {
          children: "Support for HTTPS, and RTMP streaming protocols."
        })
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
