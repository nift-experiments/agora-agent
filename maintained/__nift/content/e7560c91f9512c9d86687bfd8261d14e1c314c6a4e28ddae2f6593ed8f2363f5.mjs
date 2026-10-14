import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Signaling overview",
  description: "Understand the features and functionality supplied by Signaling."
};
export let _markdown = `

Agora's Signaling API enables low-latency metadata synchronization and real-time event notifications. With features like channel management, presence updates, and attribute synchronization, it enhances real-time applications with ultra-low latency and high scalability.

Extend Agora's Signaling SDKs with advanced capabilities such as stream channels, attribute storage and distribution, and integration with third-party services via webhooks to create dynamic and interactive real-time experiences.

## Start building [#start-building]

<Cards>
  <Card title="SDK quickstart" href="quickstart.mdx" description="Create a basic Signaling integration and exchange real-time messages." />

  <Card title="Download SDKs" href="/en/api-reference/sdks?product=signaling" description="Get the latest Signaling SDK package for your target platform." />

  <Card title="Authentication" href="build/connect-and-authenticate/authentication-workflow" description="Generate and use tokens for secure Signaling connections." />

  <Card title="API reference" href="/en/api-reference/api-ref/signaling" description="Explore Signaling API references and platform details." />
</Cards>

## Product Features [#product-features]

<CardGrid>
  <FeatureCard title="Message channels">
    Real-time messaging that enables asynchronous pub/sub message transmission without the need for immediate response. Publishers send messages to the channel, subscribers receive messages from the channels they sign up to. Depending on your business needs, send string or binary payloads.
    [Message channels](build/work-with-channels/message-channel)
  </FeatureCard>

  <FeatureCard title="Stream channels">
    A real-time data pipeline that enables the uninterrupted flow of data from one point to another without delay or latency. Depending on your business needs, send string or binary payloads
    [Stream channels](build/work-with-channels/stream-channel)
  </FeatureCard>

  <FeatureCard title="Topics">
    Facilitate effective data stream management and communication between users in real time in Stream channels. Enable users to subscribe to, distribute, and notify users subscribed to a topic. Publishers send messages to a topic, subscribers receive messages in the topics they sign up to.
    [Topics](build/work-with-channels/topics)
  </FeatureCard>

  <FeatureCard title="Presence">
    In online collaboration apps, enable users to see the availability of their contacts. Presence information is typically displayed as a status message or with an icon next to a user's name. It helps users determine the availability of others for communication or collaboration.
    [Presence](build/manage-presence-and-metadata/presence)
  </FeatureCard>

  <FeatureCard title="Storage">
    Persist and managing data that is exchanged between different clients or devices in real-time. Ensure that messages are not lost or dropped during transmission and enable quick and reliable message delivery to any number of clients.
    [Storage](build/manage-presence-and-metadata/storage/store-user-metadata)
  </FeatureCard>

  <FeatureCard title="Locks">
    Critical resource management mechanism to prevent mutual interference. Ensure that messages are processed in a specific order and prevent concurrent access to the same data. When your app accesses a resource, it can lock on that resource to prevent other clients from accessing it.
    [Locks](build/manage-presence-and-metadata/storage/store-channel-metadata)
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Signaling API enables low-latency metadata synchronization and real-time event notifications. With features like channel management, presence updates, and attribute synchronization, it enhances real-time applications with ultra-low latency and high scalability."
  }, {
    heading: undefined,
    content: "Extend Agora's Signaling SDKs with advanced capabilities such as stream channels, attribute storage and distribution, and integration with third-party services via webhooks to create dynamic and interactive real-time experiences."
  }, {
    heading: "start-building",
    content: '<Card title="SDK quickstart" href="quickstart.mdx" description="Create a basic Signaling integration and exchange real-time messages." />'
  }, {
    heading: "start-building",
    content: '<Card title="Download SDKs" href="/en/api-reference/sdks?product=signaling" description="Get the latest Signaling SDK package for your target platform." />'
  }, {
    heading: "start-building",
    content: '<Card title="Authentication" href="build/connect-and-authenticate/authentication-workflow" description="Generate and use tokens for secure Signaling connections." />'
  }, {
    heading: "start-building",
    content: '<Card title="API reference" href="/en/api-reference/api-ref/signaling" description="Explore Signaling API references and platform details." />'
  }, {
    heading: "product-features",
    content: `Real-time messaging that enables asynchronous pub/sub message transmission without the need for immediate response. Publishers send messages to the channel, subscribers receive messages from the channels they sign up to. Depending on your business needs, send string or binary payloads.
Message channels`
  }, {
    heading: "product-features",
    content: `A real-time data pipeline that enables the uninterrupted flow of data from one point to another without delay or latency. Depending on your business needs, send string or binary payloads
Stream channels`
  }, {
    heading: "product-features",
    content: `Facilitate effective data stream management and communication between users in real time in Stream channels. Enable users to subscribe to, distribute, and notify users subscribed to a topic. Publishers send messages to a topic, subscribers receive messages in the topics they sign up to.
Topics`
  }, {
    heading: "product-features",
    content: `In online collaboration apps, enable users to see the availability of their contacts. Presence information is typically displayed as a status message or with an icon next to a user's name. It helps users determine the availability of others for communication or collaboration.
Presence`
  }, {
    heading: "product-features",
    content: `Persist and managing data that is exchanged between different clients or devices in real-time. Ensure that messages are not lost or dropped during transmission and enable quick and reliable message delivery to any number of clients.
Storage`
  }, {
    heading: "product-features",
    content: `Critical resource management mechanism to prevent mutual interference. Ensure that messages are processed in a specific order and prevent concurrent access to the same data. When your app accesses a resource, it can lock on that resource to prevent other clients from accessing it.
Locks`
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
    a: "a",
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
      children: "Agora's Signaling API enables low-latency metadata synchronization and real-time event notifications. With features like channel management, presence updates, and attribute synchronization, it enhances real-time applications with ultra-low latency and high scalability."
    }), `
`, _jsx(_components.p, {
      children: "Extend Agora's Signaling SDKs with advanced capabilities such as stream channels, attribute storage and distribution, and integration with third-party services via webhooks to create dynamic and interactive real-time experiences."
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "SDK quickstart",
        href: "quickstart.mdx",
        description: "Create a basic Signaling integration and exchange real-time messages."
      }), _jsx(Card, {
        title: "Download SDKs",
        href: "/en/api-reference/sdks?product=signaling",
        description: "Get the latest Signaling SDK package for your target platform."
      }), _jsx(Card, {
        title: "Authentication",
        href: "build/connect-and-authenticate/authentication-workflow",
        description: "Generate and use tokens for secure Signaling connections."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref/signaling",
        description: "Explore Signaling API references and platform details."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product Features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Message channels",
        children: _jsxs(_components.p, {
          children: [`Real-time messaging that enables asynchronous pub/sub message transmission without the need for immediate response. Publishers send messages to the channel, subscribers receive messages from the channels they sign up to. Depending on your business needs, send string or binary payloads.
`, _jsx(_components.a, {
            href: "build/work-with-channels/message-channel",
            children: "Message channels"
          })]
        })
      }), _jsx(FeatureCard, {
        title: "Stream channels",
        children: _jsxs(_components.p, {
          children: [`A real-time data pipeline that enables the uninterrupted flow of data from one point to another without delay or latency. Depending on your business needs, send string or binary payloads
`, _jsx(_components.a, {
            href: "build/work-with-channels/stream-channel",
            children: "Stream channels"
          })]
        })
      }), _jsx(FeatureCard, {
        title: "Topics",
        children: _jsxs(_components.p, {
          children: [`Facilitate effective data stream management and communication between users in real time in Stream channels. Enable users to subscribe to, distribute, and notify users subscribed to a topic. Publishers send messages to a topic, subscribers receive messages in the topics they sign up to.
`, _jsx(_components.a, {
            href: "build/work-with-channels/topics",
            children: "Topics"
          })]
        })
      }), _jsx(FeatureCard, {
        title: "Presence",
        children: _jsxs(_components.p, {
          children: [`In online collaboration apps, enable users to see the availability of their contacts. Presence information is typically displayed as a status message or with an icon next to a user's name. It helps users determine the availability of others for communication or collaboration.
`, _jsx(_components.a, {
            href: "build/manage-presence-and-metadata/presence",
            children: "Presence"
          })]
        })
      }), _jsx(FeatureCard, {
        title: "Storage",
        children: _jsxs(_components.p, {
          children: [`Persist and managing data that is exchanged between different clients or devices in real-time. Ensure that messages are not lost or dropped during transmission and enable quick and reliable message delivery to any number of clients.
`, _jsx(_components.a, {
            href: "build/manage-presence-and-metadata/storage/store-user-metadata",
            children: "Storage"
          })]
        })
      }), _jsx(FeatureCard, {
        title: "Locks",
        children: _jsxs(_components.p, {
          children: [`Critical resource management mechanism to prevent mutual interference. Ensure that messages are processed in a specific order and prevent concurrent access to the same data. When your app accesses a resource, it can lock on that resource to prevent other clients from accessing it.
`, _jsx(_components.a, {
            href: "build/manage-presence-and-metadata/storage/store-channel-metadata",
            children: "Locks"
          })]
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
