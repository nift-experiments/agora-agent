import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Server Gateway overview",
  description: "Transmit audio and video streams to apps developed with Agora’s Voice and RTC SDKs."
};
export let _markdown = `

Agora's Server Gateway service is a self-hosted solution that enables seamless transmission of audio and video streams between server-side applications and Agora’s Voice and RTC SDKs using the Agora SDRTN®. It allows cloud applications to take full advantage of Agora’s global real-time network while maintaining control over their infrastructure.

Designed for flexibility, Server Gateway supports a range of use-cases such as call centers, network testing, and AI-powered interactive classes. With multi-format support for YUV, PCM, and encoded media, configurable workflows for sending and receiving streams, and multi-channel capabilities, it offers exceptional flexibility for integrating media streams. Additional features include audio mixing, media encryption, and zone restrictions to ensure secure and localized media delivery.

## Start building [#start-building]

<Cards>
  <Card title="SDK quickstart" href="quickstart.mdx" description="Integrate Server Gateway SDK and exchange media with RTC channels." />

  <Card title="Download SDKs" href="/en/api-reference/sdks?product=server-gateway&platform=linux" description="Get the latest Server Gateway SDK package for Linux." />

  <Card title="API reference" href="/en/api-reference/api-ref" description="Explore Server Gateway API references for server-side RTC integrations." />

  <Card title="Samples" href="https://download.agora.io/rtsasdk/release/Agora-RTC-x86_64-linux-gnu-v4.2.30-20240202_172130-292462.tgz" description="Download the Server Gateway sample package." />
</Cards>

## Product Features [#product-features]

<CardGrid>
  <FeatureCard title="Support for call centers, education, and testing">
    Support for use-cases like call centers, network testing, and AI-powered interactive classes with a single codebase for Application Platform as a Service (aPaaS)  applications.
  </FeatureCard>

  <FeatureCard title="Multi-format sending and receiving">
    Supports sending and receiving data in various formats, such as YUV, PCM and encoded video and audio formats which provides greater flexibility for customers using Agora’s global network.
  </FeatureCard>

  <FeatureCard title="Configurable sending/receiving processes">
    Send and receive media streams simultaneously or choose only to send or receive audio or video streams. Server Gateway also supports pushing media streams to a CDN directly.
  </FeatureCard>

  <FeatureCard title="Multi-channel sending/receiving">
    Supports sending and/or receiving media streams to and from multiple channels simultaneously.
  </FeatureCard>

  <FeatureCard title="Audio mixing and media encryption">
    Support for media encryption and mixing multiple audio streams.
  </FeatureCard>

  <FeatureCard title="Restrict media zones">
    The Agora Voice and RTC SDKs support restricting media zones, so that they only connect to Agora servers within the selected zone(s), regardless of where your app users are located.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Server Gateway service is a self-hosted solution that enables seamless transmission of audio and video streams between server-side applications and Agora’s Voice and RTC SDKs using the Agora SDRTN®. It allows cloud applications to take full advantage of Agora’s global real-time network while maintaining control over their infrastructure."
  }, {
    heading: undefined,
    content: "Designed for flexibility, Server Gateway supports a range of use-cases such as call centers, network testing, and AI-powered interactive classes. With multi-format support for YUV, PCM, and encoded media, configurable workflows for sending and receiving streams, and multi-channel capabilities, it offers exceptional flexibility for integrating media streams. Additional features include audio mixing, media encryption, and zone restrictions to ensure secure and localized media delivery."
  }, {
    heading: "start-building",
    content: '<Card title="SDK quickstart" href="quickstart.mdx" description="Integrate Server Gateway SDK and exchange media with RTC channels." />'
  }, {
    heading: "start-building",
    content: '<Card title="Download SDKs" href="/en/api-reference/sdks?product=server-gateway&platform=linux" description="Get the latest Server Gateway SDK package for Linux." />'
  }, {
    heading: "start-building",
    content: '<Card title="API reference" href="/en/api-reference/api-ref" description="Explore Server Gateway API references for server-side RTC integrations." />'
  }, {
    heading: "start-building",
    content: '<Card title="Samples" href="https://download.agora.io/rtsasdk/release/Agora-RTC-x86_64-linux-gnu-v4.2.30-20240202_172130-292462.tgz" description="Download the Server Gateway sample package." />'
  }, {
    heading: "product-features",
    content: "Support for use-cases like call centers, network testing, and AI-powered interactive classes with a single codebase for Application Platform as a Service (aPaaS)  applications."
  }, {
    heading: "product-features",
    content: "Supports sending and receiving data in various formats, such as YUV, PCM and encoded video and audio formats which provides greater flexibility for customers using Agora’s global network."
  }, {
    heading: "product-features",
    content: "Send and receive media streams simultaneously or choose only to send or receive audio or video streams. Server Gateway also supports pushing media streams to a CDN directly."
  }, {
    heading: "product-features",
    content: "Supports sending and/or receiving media streams to and from multiple channels simultaneously."
  }, {
    heading: "product-features",
    content: "Support for media encryption and mixing multiple audio streams."
  }, {
    heading: "product-features",
    content: "The Agora Voice and RTC SDKs support restricting media zones, so that they only connect to Agora servers within the selected zone(s), regardless of where your app users are located."
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
      children: "Agora's Server Gateway service is a self-hosted solution that enables seamless transmission of audio and video streams between server-side applications and Agora’s Voice and RTC SDKs using the Agora SDRTN®. It allows cloud applications to take full advantage of Agora’s global real-time network while maintaining control over their infrastructure."
    }), `
`, _jsx(_components.p, {
      children: "Designed for flexibility, Server Gateway supports a range of use-cases such as call centers, network testing, and AI-powered interactive classes. With multi-format support for YUV, PCM, and encoded media, configurable workflows for sending and receiving streams, and multi-channel capabilities, it offers exceptional flexibility for integrating media streams. Additional features include audio mixing, media encryption, and zone restrictions to ensure secure and localized media delivery."
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "SDK quickstart",
        href: "quickstart.mdx",
        description: "Integrate Server Gateway SDK and exchange media with RTC channels."
      }), _jsx(Card, {
        title: "Download SDKs",
        href: "/en/api-reference/sdks?product=server-gateway&platform=linux",
        description: "Get the latest Server Gateway SDK package for Linux."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref",
        description: "Explore Server Gateway API references for server-side RTC integrations."
      }), _jsx(Card, {
        title: "Samples",
        href: "https://download.agora.io/rtsasdk/release/Agora-RTC-x86_64-linux-gnu-v4.2.30-20240202_172130-292462.tgz",
        description: "Download the Server Gateway sample package."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product Features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Support for call centers, education, and testing",
        children: _jsx(_components.p, {
          children: "Support for use-cases like call centers, network testing, and AI-powered interactive classes with a single codebase for Application Platform as a Service (aPaaS)  applications."
        })
      }), _jsx(FeatureCard, {
        title: "Multi-format sending and receiving",
        children: _jsx(_components.p, {
          children: "Supports sending and receiving data in various formats, such as YUV, PCM and encoded video and audio formats which provides greater flexibility for customers using Agora’s global network."
        })
      }), _jsx(FeatureCard, {
        title: "Configurable sending/receiving processes",
        children: _jsx(_components.p, {
          children: "Send and receive media streams simultaneously or choose only to send or receive audio or video streams. Server Gateway also supports pushing media streams to a CDN directly."
        })
      }), _jsx(FeatureCard, {
        title: "Multi-channel sending/receiving",
        children: _jsx(_components.p, {
          children: "Supports sending and/or receiving media streams to and from multiple channels simultaneously."
        })
      }), _jsx(FeatureCard, {
        title: "Audio mixing and media encryption",
        children: _jsx(_components.p, {
          children: "Support for media encryption and mixing multiple audio streams."
        })
      }), _jsx(FeatureCard, {
        title: "Restrict media zones",
        children: _jsx(_components.p, {
          children: "The Agora Voice and RTC SDKs support restricting media zones, so that they only connect to Agora servers within the selected zone(s), regardless of where your app users are located."
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
