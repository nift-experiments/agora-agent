import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Chat overview",
  description: "Integrate private and group messaging into your applications."
};
export let _markdown = `

Agora's Chat API offers real-time text messaging with features like message storage, typing indicators, read receipts, and rich media support. Designed for one-to-one, group, or large-scale conversations, it’s a scalable, secure, and customizable solution for customer engagement, social platforms, or enterprise collaboration.

Use Chat as a standalone messaging solution or combine it with Voice Calling, Video Calling, Broadcast Streaming, and Interactive Live Streaming to create fully interactive, real-time experiences.

Enhance your Chat-powered app with features like offline messaging, message translation, and customizable channel and user management. Support rich media messages—including emojis, structured messages, and file sharing—to deliver engaging and seamless communication for your users.

## Start building [#start-building]

<Cards>
  <Card title="SDK quickstart" href="./get-started-sdk" description="Integrate Chat SDK and send your first message." />

  <Card title="Download SDKs" href="/en/api-reference/sdks?product=chat" description="Get the latest Chat SDK package for your target platform." />

  <Card title="UI kit quickstart" href="./get-started-uikit" description="Start faster with prebuilt Chat UI components." />

  <Card title="Authentication" href="/en/realtime-media/im/build/secure-access-and-authentication/authentication" description="Authenticate users and protect Chat access." />

  <Card title="API reference" href="/en/api-reference/api-ref/im" description="Explore Chat SDK and server API references." />

  <Card title="Samples and demos" href="./reference/downloads" description="Download demo apps and sample projects." />
</Cards>

## Product features [#product-features]

<CardGrid>
  <FeatureCard title="Rich media messages">
    Support emojis, GPS locations, structured messages, push notifications, and rich-media files with auto-generated thumbnails with Agora’s chat API service.
  </FeatureCard>

  <FeatureCard title="Scalable cross-platform messaging">
    Integrate chat signaling, one-to-one private chat, or feature-rich group chat at scale with our chat SDK for mobile and desktop.
  </FeatureCard>

  <FeatureCard title="Message essentials">
    Allow offline messaging, message recall and delete, read receipts, presence and typing indicator, push notifications, and exporting chat history.
  </FeatureCard>

  <FeatureCard title="Security and compliance">
    Build a secure chat application with TLS/SSL and file encryption and ensure data privacy compliance by allowing users to erase their personal data.
  </FeatureCard>

  <FeatureCard title="Content moderation">
    Protect users from unwanted profanity, spam, and inappropriate images or text with robust content moderation built into the chat platform.
  </FeatureCard>

  <FeatureCard title="Message translation">
    Enable auto, on-demand, or push translation so your users can chat in their preferred language.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Chat API offers real-time text messaging with features like message storage, typing indicators, read receipts, and rich media support. Designed for one-to-one, group, or large-scale conversations, it’s a scalable, secure, and customizable solution for customer engagement, social platforms, or enterprise collaboration."
  }, {
    heading: undefined,
    content: "Use Chat as a standalone messaging solution or combine it with Voice Calling, Video Calling, Broadcast Streaming, and Interactive Live Streaming to create fully interactive, real-time experiences."
  }, {
    heading: undefined,
    content: "Enhance your Chat-powered app with features like offline messaging, message translation, and customizable channel and user management. Support rich media messages—including emojis, structured messages, and file sharing—to deliver engaging and seamless communication for your users."
  }, {
    heading: "start-building",
    content: '<Card title="SDK quickstart" href="./get-started-sdk" description="Integrate Chat SDK and send your first message." />'
  }, {
    heading: "start-building",
    content: '<Card title="Download SDKs" href="/en/api-reference/sdks?product=chat" description="Get the latest Chat SDK package for your target platform." />'
  }, {
    heading: "start-building",
    content: '<Card title="UI kit quickstart" href="./get-started-uikit" description="Start faster with prebuilt Chat UI components." />'
  }, {
    heading: "start-building",
    content: '<Card title="Authentication" href="/en/realtime-media/im/build/secure-access-and-authentication/authentication" description="Authenticate users and protect Chat access." />'
  }, {
    heading: "start-building",
    content: '<Card title="API reference" href="/en/api-reference/api-ref/im" description="Explore Chat SDK and server API references." />'
  }, {
    heading: "start-building",
    content: '<Card title="Samples and demos" href="./reference/downloads" description="Download demo apps and sample projects." />'
  }, {
    heading: "product-features",
    content: "Support emojis, GPS locations, structured messages, push notifications, and rich-media files with auto-generated thumbnails with Agora’s chat API service."
  }, {
    heading: "product-features",
    content: "Integrate chat signaling, one-to-one private chat, or feature-rich group chat at scale with our chat SDK for mobile and desktop."
  }, {
    heading: "product-features",
    content: "Allow offline messaging, message recall and delete, read receipts, presence and typing indicator, push notifications, and exporting chat history."
  }, {
    heading: "product-features",
    content: "Build a secure chat application with TLS/SSL and file encryption and ensure data privacy compliance by allowing users to erase their personal data."
  }, {
    heading: "product-features",
    content: "Protect users from unwanted profanity, spam, and inappropriate images or text with robust content moderation built into the chat platform."
  }, {
    heading: "product-features",
    content: "Enable auto, on-demand, or push translation so your users can chat in their preferred language."
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
      children: "Agora's Chat API offers real-time text messaging with features like message storage, typing indicators, read receipts, and rich media support. Designed for one-to-one, group, or large-scale conversations, it’s a scalable, secure, and customizable solution for customer engagement, social platforms, or enterprise collaboration."
    }), `
`, _jsx(_components.p, {
      children: "Use Chat as a standalone messaging solution or combine it with Voice Calling, Video Calling, Broadcast Streaming, and Interactive Live Streaming to create fully interactive, real-time experiences."
    }), `
`, _jsx(_components.p, {
      children: "Enhance your Chat-powered app with features like offline messaging, message translation, and customizable channel and user management. Support rich media messages—including emojis, structured messages, and file sharing—to deliver engaging and seamless communication for your users."
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "SDK quickstart",
        href: "./get-started-sdk",
        description: "Integrate Chat SDK and send your first message."
      }), _jsx(Card, {
        title: "Download SDKs",
        href: "/en/api-reference/sdks?product=chat",
        description: "Get the latest Chat SDK package for your target platform."
      }), _jsx(Card, {
        title: "UI kit quickstart",
        href: "./get-started-uikit",
        description: "Start faster with prebuilt Chat UI components."
      }), _jsx(Card, {
        title: "Authentication",
        href: "/en/realtime-media/im/build/secure-access-and-authentication/authentication",
        description: "Authenticate users and protect Chat access."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref/im",
        description: "Explore Chat SDK and server API references."
      }), _jsx(Card, {
        title: "Samples and demos",
        href: "./reference/downloads",
        description: "Download demo apps and sample projects."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Rich media messages",
        children: _jsx(_components.p, {
          children: "Support emojis, GPS locations, structured messages, push notifications, and rich-media files with auto-generated thumbnails with Agora’s chat API service."
        })
      }), _jsx(FeatureCard, {
        title: "Scalable cross-platform messaging",
        children: _jsx(_components.p, {
          children: "Integrate chat signaling, one-to-one private chat, or feature-rich group chat at scale with our chat SDK for mobile and desktop."
        })
      }), _jsx(FeatureCard, {
        title: "Message essentials",
        children: _jsx(_components.p, {
          children: "Allow offline messaging, message recall and delete, read receipts, presence and typing indicator, push notifications, and exporting chat history."
        })
      }), _jsx(FeatureCard, {
        title: "Security and compliance",
        children: _jsx(_components.p, {
          children: "Build a secure chat application with TLS/SSL and file encryption and ensure data privacy compliance by allowing users to erase their personal data."
        })
      }), _jsx(FeatureCard, {
        title: "Content moderation",
        children: _jsx(_components.p, {
          children: "Protect users from unwanted profanity, spam, and inappropriate images or text with robust content moderation built into the chat platform."
        })
      }), _jsx(FeatureCard, {
        title: "Message translation",
        children: _jsx(_components.p, {
          children: "Enable auto, on-demand, or push translation so your users can chat in their preferred language."
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
