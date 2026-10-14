import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media Gateway overview",
  description: "Publish RTMP and SRT streams into Agora RTC channels with low latency and optional edge transcoding."
};
export let _markdown = `

Agora's Media Gateway service enables publishing RTMP and SRT streams into Agora's real-time voice and video channels. By performing advanced transcoding at the edge, it reduces latency compared to traditional RTMP streaming and unlocks new possibilities for publishing and controlling real-time media streams.

Compatible with popular streaming tools, Media Gateway lets broadcasters maintain their existing setups while leveraging Agora SDRTN(R) for seamless and reliable delivery.

## Start building [#start-building]

<Cards>
  <Card title="Media Gateway quickstart" href="./quickstart.md" description="Generate a streaming key and publish RTMP or SRT streams into Agora channels." />

  <Card title="Integration guide" href="./reference/integration.md" description="Review Media Gateway integration notes and constraints." />
</Cards>

## Product features [#product-features]

<CardGrid>
  <FeatureCard title="High reliability">
    Enhance service reliability with a globally distributed cluster deployment, ensuring high-quality and seamless user experience in every region.
  </FeatureCard>

  <FeatureCard title="Low latency">
    Experience seamless, real-time communication as the source stream directly enters the channel at the gateway, minimizing latency between the host and the audience.
  </FeatureCard>

  <FeatureCard title="Transcoding support">
    Employ advanced transcoding capabilities on media streams for bandwidth optimization, enhanced delivery speed, cross-device compatibility, and wider distribution.
  </FeatureCard>

  <FeatureCard title="Stable and easy to use">
    Simple and easy to use APIs help you integrate the feature quickly.
  </FeatureCard>

  <FeatureCard title="Safety compliance">
    Safe and secure real-time transmission of audio and video data without caching or collecting users' personal information.
  </FeatureCard>

  <FeatureCard title="Multi-format, multi-protocol media streaming support">
    Works with several audio and video codecs, streaming protocols, and media formats.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Media Gateway service enables publishing RTMP and SRT streams into Agora's real-time voice and video channels. By performing advanced transcoding at the edge, it reduces latency compared to traditional RTMP streaming and unlocks new possibilities for publishing and controlling real-time media streams."
  }, {
    heading: undefined,
    content: "Compatible with popular streaming tools, Media Gateway lets broadcasters maintain their existing setups while leveraging Agora SDRTN(R) for seamless and reliable delivery."
  }, {
    heading: "start-building",
    content: '<Card title="Media Gateway quickstart" href="./quickstart.md" description="Generate a streaming key and publish RTMP or SRT streams into Agora channels." />'
  }, {
    heading: "start-building",
    content: '<Card title="Integration guide" href="./reference/integration.md" description="Review Media Gateway integration notes and constraints." />'
  }, {
    heading: "product-features",
    content: "Enhance service reliability with a globally distributed cluster deployment, ensuring high-quality and seamless user experience in every region."
  }, {
    heading: "product-features",
    content: "Experience seamless, real-time communication as the source stream directly enters the channel at the gateway, minimizing latency between the host and the audience."
  }, {
    heading: "product-features",
    content: "Employ advanced transcoding capabilities on media streams for bandwidth optimization, enhanced delivery speed, cross-device compatibility, and wider distribution."
  }, {
    heading: "product-features",
    content: "Simple and easy to use APIs help you integrate the feature quickly."
  }, {
    heading: "product-features",
    content: "Safe and secure real-time transmission of audio and video data without caching or collecting users' personal information."
  }, {
    heading: "product-features",
    content: "Works with several audio and video codecs, streaming protocols, and media formats."
  }],
  headings: [{
    id: "start-building",
    content: "Start building"
  }, {
    id: "product-features",
    content: "Product features"
  }]
};
export let toc = [{
  depth: 2,
  url: "#start-building",
  title: _jsx(_Fragment, {
    children: "Start building"
  })
}, {
  depth: 2,
  url: "#product-features",
  title: _jsx(_Fragment, {
    children: "Product features"
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
      children: "Agora's Media Gateway service enables publishing RTMP and SRT streams into Agora's real-time voice and video channels. By performing advanced transcoding at the edge, it reduces latency compared to traditional RTMP streaming and unlocks new possibilities for publishing and controlling real-time media streams."
    }), `
`, _jsx(_components.p, {
      children: "Compatible with popular streaming tools, Media Gateway lets broadcasters maintain their existing setups while leveraging Agora SDRTN(R) for seamless and reliable delivery."
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "Media Gateway quickstart",
        href: "./quickstart.md",
        description: "Generate a streaming key and publish RTMP or SRT streams into Agora channels."
      }), _jsx(Card, {
        title: "Integration guide",
        href: "./reference/integration.md",
        description: "Review Media Gateway integration notes and constraints."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "High reliability",
        children: _jsx(_components.p, {
          children: "Enhance service reliability with a globally distributed cluster deployment, ensuring high-quality and seamless user experience in every region."
        })
      }), _jsx(FeatureCard, {
        title: "Low latency",
        children: _jsx(_components.p, {
          children: "Experience seamless, real-time communication as the source stream directly enters the channel at the gateway, minimizing latency between the host and the audience."
        })
      }), _jsx(FeatureCard, {
        title: "Transcoding support",
        children: _jsx(_components.p, {
          children: "Employ advanced transcoding capabilities on media streams for bandwidth optimization, enhanced delivery speed, cross-device compatibility, and wider distribution."
        })
      }), _jsx(FeatureCard, {
        title: "Stable and easy to use",
        children: _jsx(_components.p, {
          children: "Simple and easy to use APIs help you integrate the feature quickly."
        })
      }), _jsx(FeatureCard, {
        title: "Safety compliance",
        children: _jsx(_components.p, {
          children: "Safe and secure real-time transmission of audio and video data without caching or collecting users' personal information."
        })
      }), _jsx(FeatureCard, {
        title: "Multi-format, multi-protocol media streaming support",
        children: _jsx(_components.p, {
          children: "Works with several audio and video codecs, streaming protocols, and media formats."
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
