import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media Push overview",
  description: "Enables the injection of an external media stream into a real-time Agora channel, allowing the hosts and audience to see and hear the additional stream while interacting with each other."
};
export let _markdown = `

Agora's Media Push service streams audio and video from Agora channels to CDNs and other RTMP-based platforms. With advanced edge transcoding, it minimizes latency and provides full control over the layout and appearance of the stream. This enables seamless distribution to multiple destinations, combining real-time engagement with broad audience reach.

Extend the reach of your Agora streams to third-party services. Whether it’s live events, webinars, or hybrid broadcasts, Media Push amplifies your content while preserving the low-latency, high-quality experience that Agora is known for.

## Quick links [#quick-links]

<Cards>
  <Card title="Enable Media Push" href="./get-started/enable-media-push" description="Set up Media Push and send RTC streams to external platforms." />

  <Card title="API reference" href="/en/api-reference/api-ref/media-push" description="Explore Media Push REST API operations and parameters." />
</Cards>

## Key features [#key-features]

<CardGrid>
  <FeatureCard title="Hybrid streaming use cases">
    Ideal for hybrid use cases where a small audience group can interact with the host(s) and each other, while most of the audience only listens/watches.
  </FeatureCard>

  <FeatureCard title="Global CDN compatibility">
    Media Push works with major CDN providers across the globe, with support for RTMP and RTMPS protocols.
  </FeatureCard>

  <FeatureCard title="Easy-to-use RESTful API">
    Agora’s RESTful API makes integration easy while providing flexibility to customers.
  </FeatureCard>

  <FeatureCard title="Audience expansion">
    Uploading live interactive content to CDN enables customers to expand their audience for use cases where only a section of a large audience needs live engagement.
  </FeatureCard>

  <FeatureCard title="Wide range of use cases">
    Upload to CDN works for any use case, and is particularly useful for verticals like virtual events, social live streaming, education webinars and more.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Media Push service streams audio and video from Agora channels to CDNs and other RTMP-based platforms. With advanced edge transcoding, it minimizes latency and provides full control over the layout and appearance of the stream. This enables seamless distribution to multiple destinations, combining real-time engagement with broad audience reach."
  }, {
    heading: undefined,
    content: "Extend the reach of your Agora streams to third-party services. Whether it’s live events, webinars, or hybrid broadcasts, Media Push amplifies your content while preserving the low-latency, high-quality experience that Agora is known for."
  }, {
    heading: "quick-links",
    content: '<Card title="Enable Media Push" href="./get-started/enable-media-push" description="Set up Media Push and send RTC streams to external platforms." />'
  }, {
    heading: "quick-links",
    content: '<Card title="API reference" href="/en/api-reference/api-ref/media-push" description="Explore Media Push REST API operations and parameters." />'
  }, {
    heading: "key-features",
    content: "Ideal for hybrid use cases where a small audience group can interact with the host(s) and each other, while most of the audience only listens/watches."
  }, {
    heading: "key-features",
    content: "Media Push works with major CDN providers across the globe, with support for RTMP and RTMPS protocols."
  }, {
    heading: "key-features",
    content: "Agora’s RESTful API makes integration easy while providing flexibility to customers."
  }, {
    heading: "key-features",
    content: "Uploading live interactive content to CDN enables customers to expand their audience for use cases where only a section of a large audience needs live engagement."
  }, {
    heading: "key-features",
    content: "Upload to CDN works for any use case, and is particularly useful for verticals like virtual events, social live streaming, education webinars and more."
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
      children: "Agora's Media Push service streams audio and video from Agora channels to CDNs and other RTMP-based platforms. With advanced edge transcoding, it minimizes latency and provides full control over the layout and appearance of the stream. This enables seamless distribution to multiple destinations, combining real-time engagement with broad audience reach."
    }), `
`, _jsx(_components.p, {
      children: "Extend the reach of your Agora streams to third-party services. Whether it’s live events, webinars, or hybrid broadcasts, Media Push amplifies your content while preserving the low-latency, high-quality experience that Agora is known for."
    }), `
`, _jsx(_components.h2, {
      id: "quick-links",
      children: "Quick links"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "Enable Media Push",
        href: "./get-started/enable-media-push",
        description: "Set up Media Push and send RTC streams to external platforms."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref/media-push",
        description: "Explore Media Push REST API operations and parameters."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "key-features",
      children: "Key features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Hybrid streaming use cases",
        children: _jsx(_components.p, {
          children: "Ideal for hybrid use cases where a small audience group can interact with the host(s) and each other, while most of the audience only listens/watches."
        })
      }), _jsx(FeatureCard, {
        title: "Global CDN compatibility",
        children: _jsx(_components.p, {
          children: "Media Push works with major CDN providers across the globe, with support for RTMP and RTMPS protocols."
        })
      }), _jsx(FeatureCard, {
        title: "Easy-to-use RESTful API",
        children: _jsx(_components.p, {
          children: "Agora’s RESTful API makes integration easy while providing flexibility to customers."
        })
      }), _jsx(FeatureCard, {
        title: "Audience expansion",
        children: _jsx(_components.p, {
          children: "Uploading live interactive content to CDN enables customers to expand their audience for use cases where only a section of a large audience needs live engagement."
        })
      }), _jsx(FeatureCard, {
        title: "Wide range of use cases",
        children: _jsx(_components.p, {
          children: "Upload to CDN works for any use case, and is particularly useful for verticals like virtual events, social live streaming, education webinars and more."
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
