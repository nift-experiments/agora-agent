import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Cloud Transcoding overview",
  description: "Transcode real-time audio and video streams for audience subscription."
};
export let _markdown = `

Designed specifically for real-time interactive live broadcast scenarios, Agora's Cloud Transcoding service enables you to obtain audio and video source streams from hosts in RTC channels on the server side and perform processing such as transcoding, audio mixing, and video compositing. The processed streams are then published to Agora RTC channels for audience subscription.

The service supports subscriptions to audio and video streams with different picture quality levels, reducing downstream bandwidth pressure and client device performance consumption.

## Start building [#start-building]

<Cards>
  <Card title="SDK quickstart" href="sdk-quickstart.md" description="Use the Go SDK to start and manage cloud transcoding sessions." />

  <Card title="API reference" href="/en/api-reference/api-ref/cloud-transcoding" description="Explore Cloud Transcoding REST API operations and parameters." />
</Cards>

## Product Features [#product-features]

<CardGrid>
  <FeatureCard title="Low energy consumption for client devices">
    Reduce terminal performance consumption by processing streams server-side before publishing to the RTC channel. This is especially beneficial for viewer devices with poor performance that cannot simultaneously process encoding, decoding, and rendering of multiple high-definition audio and video streams.
  </FeatureCard>

  <FeatureCard title="Low bitrate streaming for poor network conditions">
    Improve video fluency and viewing experience under poor downlink network conditions. The service mixes audio, combines images, and transcodes them into low-bitrate streams, making it ideal for viewers subscribing to multiple host video streams or single HD streams.
  </FeatureCard>

  <FeatureCard title="Cross-platform compatibility">
    Supports standard H.264 and VP8 encoding to enhance user experience across different platforms. The service converts host source streams from Native platforms to VP8 encoding for optimal Web viewer experience.
  </FeatureCard>

  <FeatureCard title="Automated stream processing workflow">
    Automatically subscribe to specified user streams in RTC channels based on your UID configuration. The service performs transcoding, audio mixing, and video compositing according to your settings before publishing processed streams back to the channel.
  </FeatureCard>

  <FeatureCard title="Reduced bandwidth and simplified integration">
    Eliminate the need for viewers to subscribe to multiple host streams individually, reducing downstream bandwidth pressure. Scenario-based solutions lower the development threshold by requiring fewer API calls and reducing cognitive burden.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Designed specifically for real-time interactive live broadcast scenarios, Agora's Cloud Transcoding service enables you to obtain audio and video source streams from hosts in RTC channels on the server side and perform processing such as transcoding, audio mixing, and video compositing. The processed streams are then published to Agora RTC channels for audience subscription."
  }, {
    heading: undefined,
    content: "The service supports subscriptions to audio and video streams with different picture quality levels, reducing downstream bandwidth pressure and client device performance consumption."
  }, {
    heading: "start-building",
    content: '<Card title="SDK quickstart" href="sdk-quickstart.md" description="Use the Go SDK to start and manage cloud transcoding sessions." />'
  }, {
    heading: "start-building",
    content: '<Card title="API reference" href="/en/api-reference/api-ref/cloud-transcoding" description="Explore Cloud Transcoding REST API operations and parameters." />'
  }, {
    heading: "product-features",
    content: "Reduce terminal performance consumption by processing streams server-side before publishing to the RTC channel. This is especially beneficial for viewer devices with poor performance that cannot simultaneously process encoding, decoding, and rendering of multiple high-definition audio and video streams."
  }, {
    heading: "product-features",
    content: "Improve video fluency and viewing experience under poor downlink network conditions. The service mixes audio, combines images, and transcodes them into low-bitrate streams, making it ideal for viewers subscribing to multiple host video streams or single HD streams."
  }, {
    heading: "product-features",
    content: "Supports standard H.264 and VP8 encoding to enhance user experience across different platforms. The service converts host source streams from Native platforms to VP8 encoding for optimal Web viewer experience."
  }, {
    heading: "product-features",
    content: "Automatically subscribe to specified user streams in RTC channels based on your UID configuration. The service performs transcoding, audio mixing, and video compositing according to your settings before publishing processed streams back to the channel."
  }, {
    heading: "product-features",
    content: "Eliminate the need for viewers to subscribe to multiple host streams individually, reducing downstream bandwidth pressure. Scenario-based solutions lower the development threshold by requiring fewer API calls and reducing cognitive burden."
  }],
  headings: [{
    id: "start-building",
    content: "Start building"
  }, {
    id: "product-features",
    content: "Product Features"
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
    children: "Product Features"
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
      children: "Designed specifically for real-time interactive live broadcast scenarios, Agora's Cloud Transcoding service enables you to obtain audio and video source streams from hosts in RTC channels on the server side and perform processing such as transcoding, audio mixing, and video compositing. The processed streams are then published to Agora RTC channels for audience subscription."
    }), `
`, _jsx(_components.p, {
      children: "The service supports subscriptions to audio and video streams with different picture quality levels, reducing downstream bandwidth pressure and client device performance consumption."
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "SDK quickstart",
        href: "sdk-quickstart.md",
        description: "Use the Go SDK to start and manage cloud transcoding sessions."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref/cloud-transcoding",
        description: "Explore Cloud Transcoding REST API operations and parameters."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product Features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Low energy consumption for client devices",
        children: _jsx(_components.p, {
          children: "Reduce terminal performance consumption by processing streams server-side before publishing to the RTC channel. This is especially beneficial for viewer devices with poor performance that cannot simultaneously process encoding, decoding, and rendering of multiple high-definition audio and video streams."
        })
      }), _jsx(FeatureCard, {
        title: "Low bitrate streaming for poor network conditions",
        children: _jsx(_components.p, {
          children: "Improve video fluency and viewing experience under poor downlink network conditions. The service mixes audio, combines images, and transcodes them into low-bitrate streams, making it ideal for viewers subscribing to multiple host video streams or single HD streams."
        })
      }), _jsx(FeatureCard, {
        title: "Cross-platform compatibility",
        children: _jsx(_components.p, {
          children: "Supports standard H.264 and VP8 encoding to enhance user experience across different platforms. The service converts host source streams from Native platforms to VP8 encoding for optimal Web viewer experience."
        })
      }), _jsx(FeatureCard, {
        title: "Automated stream processing workflow",
        children: _jsx(_components.p, {
          children: "Automatically subscribe to specified user streams in RTC channels based on your UID configuration. The service performs transcoding, audio mixing, and video compositing according to your settings before publishing processed streams back to the channel."
        })
      }), _jsx(FeatureCard, {
        title: "Reduced bandwidth and simplified integration",
        children: _jsx(_components.p, {
          children: "Eliminate the need for viewers to subscribe to multiple host streams individually, reducing downstream bandwidth pressure. Scenario-based solutions lower the development threshold by requiring fewer API calls and reducing cognitive burden."
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
