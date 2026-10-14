import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "On-Premise Recording overview",
  description: "Enables you to record video and voice calls or streams on a Linux server."
};
export let _markdown = `

The Agora On-Premise Recording SDK is a recording component developed by Agora for audio and video calls and live broadcasts. Through simple operation methods, it helps developers quickly and flexibly deploy recording services to record audio and video calls or live broadcasts and generate recording files in MP4 format.

With the recording function, you can save the content of voice calls, video calls, and live broadcasts, and make it available for later viewing. For example, learners can review course recordings at their convenience or catch up on lessons they missed after attending live online classes.

The SDK works with RTC SDK and is compatible with the Agora RTC Native and framework SDKs (version 1.7.0 or higher) and the Agora RTC Web SDK (version 1.12.0 or higher).

<CalloutContainer type="info">
  <CalloutDescription>
    The Agora On-Premise Recording SDK requires deployment on Linux servers with self-managed maintenance. If you prefer not to deploy Linux servers and want to implement recording through RESTful APIs, use [Agora Cloud Recording](/en/realtime-media/cloud-recording).
  </CalloutDescription>
</CalloutContainer>

## Start building [#start-building]

<Cards>
  <Card title="SDK quickstart" href="quickstart.md" description="Deploy On-Premise Recording SDK and record your first channel." />

  <Card title="Download SDKs" href="/en/api-reference/sdks?product=on-premise-recording&platform=linux" description="Get the latest On-Premise Recording SDK package for Linux." />

  <Card title="Authentication" href="build/authentication-workflow.mdx" description="Secure recording sessions with token authentication." />

  <Card title="Release notes" href="reference/release-notes.mdx" description="Review version history and compatibility notes." />
</Cards>

## Features [#features]

<CardGrid>
  <FeatureCard title="Flexible recording modes">
    Choose between single-stream recording (separate MP4 files for each UID) or converged recording (combined audio/video in one MP4 file) to meet different use cases.
  </FeatureCard>

  <FeatureCard title="Comprehensive media support">
    Record audio only, video only, or both simultaneously. Compatible with Agora RTC Native/Framework SDK (v1.7.0+) and Web SDK (v1.12.0+).
  </FeatureCard>

  <FeatureCard title="Advanced layout control">
    Set custom mixed-stream layouts, specify user screen sizes and positions on video canvas, and configure background images in converged recording mode.
  </FeatureCard>

  <FeatureCard title="Selective recording">
    Record specific UIDs in channels and add text watermarks, dynamic timestamp watermarks, or static image watermarks to recorded video files.
  </FeatureCard>

  <FeatureCard title="Enterprise-grade infrastructure">
    Deploy on Ubuntu 18.04+ and CentOS 7.0+ with cluster support, proxy server configuration, cloud proxy services, and end-to-end security for encrypted channels.
  </FeatureCard>

  <FeatureCard title="Local screenshot capture">
    Capture JPG format screenshots from live streams and save them to specified local paths. Access raw video data in YUV, JPG, and encoded video frame formats.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora On-Premise Recording SDK is a recording component developed by Agora for audio and video calls and live broadcasts. Through simple operation methods, it helps developers quickly and flexibly deploy recording services to record audio and video calls or live broadcasts and generate recording files in MP4 format."
  }, {
    heading: undefined,
    content: "With the recording function, you can save the content of voice calls, video calls, and live broadcasts, and make it available for later viewing. For example, learners can review course recordings at their convenience or catch up on lessons they missed after attending live online classes."
  }, {
    heading: undefined,
    content: "The SDK works with RTC SDK and is compatible with the Agora RTC Native and framework SDKs (version 1.7.0 or higher) and the Agora RTC Web SDK (version 1.12.0 or higher)."
  }, {
    heading: undefined,
    content: "The Agora On-Premise Recording SDK requires deployment on Linux servers with self-managed maintenance. If you prefer not to deploy Linux servers and want to implement recording through RESTful APIs, use Agora Cloud Recording."
  }, {
    heading: "start-building",
    content: '<Card title="SDK quickstart" href="quickstart.md" description="Deploy On-Premise Recording SDK and record your first channel." />'
  }, {
    heading: "start-building",
    content: '<Card title="Download SDKs" href="/en/api-reference/sdks?product=on-premise-recording&platform=linux" description="Get the latest On-Premise Recording SDK package for Linux." />'
  }, {
    heading: "start-building",
    content: '<Card title="Authentication" href="build/authentication-workflow.mdx" description="Secure recording sessions with token authentication." />'
  }, {
    heading: "start-building",
    content: '<Card title="Release notes" href="reference/release-notes.mdx" description="Review version history and compatibility notes." />'
  }, {
    heading: "features",
    content: "Choose between single-stream recording (separate MP4 files for each UID) or converged recording (combined audio/video in one MP4 file) to meet different use cases."
  }, {
    heading: "features",
    content: "Record audio only, video only, or both simultaneously. Compatible with Agora RTC Native/Framework SDK (v1.7.0+) and Web SDK (v1.12.0+)."
  }, {
    heading: "features",
    content: "Set custom mixed-stream layouts, specify user screen sizes and positions on video canvas, and configure background images in converged recording mode."
  }, {
    heading: "features",
    content: "Record specific UIDs in channels and add text watermarks, dynamic timestamp watermarks, or static image watermarks to recorded video files."
  }, {
    heading: "features",
    content: "Deploy on Ubuntu 18.04+ and CentOS 7.0+ with cluster support, proxy server configuration, cloud proxy services, and end-to-end security for encrypted channels."
  }, {
    heading: "features",
    content: "Capture JPG format screenshots from live streams and save them to specified local paths. Access raw video data in YUV, JPG, and encoded video frame formats."
  }],
  headings: [{
    id: "start-building",
    content: "Start building"
  }, {
    id: "features",
    content: "Features"
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
  url: "#features",
  title: _jsx(_Fragment, {
    children: "Features"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...props.components
  }, { CalloutContainer, CalloutDescription, Card, CardGrid, Cards, FeatureCard } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
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
      children: "The Agora On-Premise Recording SDK is a recording component developed by Agora for audio and video calls and live broadcasts. Through simple operation methods, it helps developers quickly and flexibly deploy recording services to record audio and video calls or live broadcasts and generate recording files in MP4 format."
    }), `
`, _jsx(_components.p, {
      children: "With the recording function, you can save the content of voice calls, video calls, and live broadcasts, and make it available for later viewing. For example, learners can review course recordings at their convenience or catch up on lessons they missed after attending live online classes."
    }), `
`, _jsx(_components.p, {
      children: "The SDK works with RTC SDK and is compatible with the Agora RTC Native and framework SDKs (version 1.7.0 or higher) and the Agora RTC Web SDK (version 1.12.0 or higher)."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["The Agora On-Premise Recording SDK requires deployment on Linux servers with self-managed maintenance. If you prefer not to deploy Linux servers and want to implement recording through RESTful APIs, use ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording",
            children: "Agora Cloud Recording"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "SDK quickstart",
        href: "quickstart.md",
        description: "Deploy On-Premise Recording SDK and record your first channel."
      }), _jsx(Card, {
        title: "Download SDKs",
        href: "/en/api-reference/sdks?product=on-premise-recording&platform=linux",
        description: "Get the latest On-Premise Recording SDK package for Linux."
      }), _jsx(Card, {
        title: "Authentication",
        href: "build/authentication-workflow.mdx",
        description: "Secure recording sessions with token authentication."
      }), _jsx(Card, {
        title: "Release notes",
        href: "reference/release-notes.mdx",
        description: "Review version history and compatibility notes."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "features",
      children: "Features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Flexible recording modes",
        children: _jsx(_components.p, {
          children: "Choose between single-stream recording (separate MP4 files for each UID) or converged recording (combined audio/video in one MP4 file) to meet different use cases."
        })
      }), _jsx(FeatureCard, {
        title: "Comprehensive media support",
        children: _jsx(_components.p, {
          children: "Record audio only, video only, or both simultaneously. Compatible with Agora RTC Native/Framework SDK (v1.7.0+) and Web SDK (v1.12.0+)."
        })
      }), _jsx(FeatureCard, {
        title: "Advanced layout control",
        children: _jsx(_components.p, {
          children: "Set custom mixed-stream layouts, specify user screen sizes and positions on video canvas, and configure background images in converged recording mode."
        })
      }), _jsx(FeatureCard, {
        title: "Selective recording",
        children: _jsx(_components.p, {
          children: "Record specific UIDs in channels and add text watermarks, dynamic timestamp watermarks, or static image watermarks to recorded video files."
        })
      }), _jsx(FeatureCard, {
        title: "Enterprise-grade infrastructure",
        children: _jsx(_components.p, {
          children: "Deploy on Ubuntu 18.04+ and CentOS 7.0+ with cluster support, proxy server configuration, cloud proxy services, and end-to-end security for encrypted channels."
        })
      }), _jsx(FeatureCard, {
        title: "Local screenshot capture",
        children: _jsx(_components.p, {
          children: "Capture JPG format screenshots from live streams and save them to specified local paths. Access raw video data in YUV, JPG, and encoded video frame formats."
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
