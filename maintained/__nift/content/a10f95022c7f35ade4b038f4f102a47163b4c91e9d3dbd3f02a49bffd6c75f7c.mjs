import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora Analytics overview",
  description: "Tracks and interprets the usage, quality, and performance of real-time voice and video."
};
export let _markdown = `

Agora Analytics tracks and analyzes the usage, quality, and performance of real-time voice and video live streams and other Agora products. Designed as a companion to Agora's Voice Calling, Video Calling, Broadcast Streaming, Interactive Live Streaming, and Chat it helps locate quality issues, identify root causes, and resolve problems to enhance the end-user experience. Monitor sessions in real-time with Call Inspector or use RESTful APIs to analyze usage trends and performance.

Integrate Agora Analytics with Datadog or New Relic to bring your Agora data into your observability platform. Visualize and monitor metrics, set up custom alerts, and manage Agora data alongside other system metrics for a unified view of performance and quality.

## Start building [#start-building]

<Cards>
  <Card title="Call search quickstart" href="build/explore-and-analyze-data/call-search.md" description="Use Agora Analytics to search and inspect call quality data." />

  <Card title="API reference" href="/en/api-reference/api-ref/agora-analytics/analytics-rest-api" description="Explore Agora Analytics APIs and related references." />
</Cards>

## Product Features [#product-features]

<CardGrid>
  <FeatureCard title="Call Inspector">
    Identify, analyze, and respond to performance quality issues with advanced search, detailed visibility into call and user metrics, and diagnostics.
  </FeatureCard>

  <FeatureCard title="Data Insights">
    Provides periodic call usage and quality statistics. It is designed to help customers understand the usage and quality of calls in apps.
  </FeatureCard>

  <FeatureCard title="Real Time Monitoring">
    Visualized data for multiple call metrics in real time.
  </FeatureCard>

  <FeatureCard title="Alert notifications">
    Sends alerts to you when abnormal metrics or events are detected in your Agora projects.
  </FeatureCard>

  <FeatureCard title="RESTful APIs">
    Use RESTful APIs to retrieve call statistics and quality of experience metrics, use them in your own application or DataOps workflow.
  </FeatureCard>

  <FeatureCard title="Embedding">
    Easily embed Agora Analytics pages in internal web portals using a low-code approach.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Analytics tracks and analyzes the usage, quality, and performance of real-time voice and video live streams and other Agora products. Designed as a companion to Agora's Voice Calling, Video Calling, Broadcast Streaming, Interactive Live Streaming, and Chat it helps locate quality issues, identify root causes, and resolve problems to enhance the end-user experience. Monitor sessions in real-time with Call Inspector or use RESTful APIs to analyze usage trends and performance."
  }, {
    heading: undefined,
    content: "Integrate Agora Analytics with Datadog or New Relic to bring your Agora data into your observability platform. Visualize and monitor metrics, set up custom alerts, and manage Agora data alongside other system metrics for a unified view of performance and quality."
  }, {
    heading: "start-building",
    content: '<Card title="Call search quickstart" href="build/explore-and-analyze-data/call-search.md" description="Use Agora Analytics to search and inspect call quality data." />'
  }, {
    heading: "start-building",
    content: '<Card title="API reference" href="/en/api-reference/api-ref/agora-analytics/analytics-rest-api" description="Explore Agora Analytics APIs and related references." />'
  }, {
    heading: "product-features",
    content: "Identify, analyze, and respond to performance quality issues with advanced search, detailed visibility into call and user metrics, and diagnostics."
  }, {
    heading: "product-features",
    content: "Provides periodic call usage and quality statistics. It is designed to help customers understand the usage and quality of calls in apps."
  }, {
    heading: "product-features",
    content: "Visualized data for multiple call metrics in real time."
  }, {
    heading: "product-features",
    content: "Sends alerts to you when abnormal metrics or events are detected in your Agora projects."
  }, {
    heading: "product-features",
    content: "Use RESTful APIs to retrieve call statistics and quality of experience metrics, use them in your own application or DataOps workflow."
  }, {
    heading: "product-features",
    content: "Easily embed Agora Analytics pages in internal web portals using a low-code approach."
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
      children: "Agora Analytics tracks and analyzes the usage, quality, and performance of real-time voice and video live streams and other Agora products. Designed as a companion to Agora's Voice Calling, Video Calling, Broadcast Streaming, Interactive Live Streaming, and Chat it helps locate quality issues, identify root causes, and resolve problems to enhance the end-user experience. Monitor sessions in real-time with Call Inspector or use RESTful APIs to analyze usage trends and performance."
    }), `
`, _jsx(_components.p, {
      children: "Integrate Agora Analytics with Datadog or New Relic to bring your Agora data into your observability platform. Visualize and monitor metrics, set up custom alerts, and manage Agora data alongside other system metrics for a unified view of performance and quality."
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "Call search quickstart",
        href: "build/explore-and-analyze-data/call-search.md",
        description: "Use Agora Analytics to search and inspect call quality data."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref/agora-analytics/analytics-rest-api",
        description: "Explore Agora Analytics APIs and related references."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product Features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Call Inspector",
        children: _jsx(_components.p, {
          children: "Identify, analyze, and respond to performance quality issues with advanced search, detailed visibility into call and user metrics, and diagnostics."
        })
      }), _jsx(FeatureCard, {
        title: "Data Insights",
        children: _jsx(_components.p, {
          children: "Provides periodic call usage and quality statistics. It is designed to help customers understand the usage and quality of calls in apps."
        })
      }), _jsx(FeatureCard, {
        title: "Real Time Monitoring",
        children: _jsx(_components.p, {
          children: "Visualized data for multiple call metrics in real time."
        })
      }), _jsx(FeatureCard, {
        title: "Alert notifications",
        children: _jsx(_components.p, {
          children: "Sends alerts to you when abnormal metrics or events are detected in your Agora projects."
        })
      }), _jsx(FeatureCard, {
        title: "RESTful APIs",
        children: _jsx(_components.p, {
          children: "Use RESTful APIs to retrieve call statistics and quality of experience metrics, use them in your own application or DataOps workflow."
        })
      }), _jsx(FeatureCard, {
        title: "Embedding",
        children: _jsx(_components.p, {
          children: "Easily embed Agora Analytics pages in internal web portals using a low-code approach."
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
