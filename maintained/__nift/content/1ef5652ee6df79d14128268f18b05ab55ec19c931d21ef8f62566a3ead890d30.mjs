import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Speech-to-Text overview",
  description: "Create a better user experience with the most accurate live transcription and subtitling."
};
export let _markdown = `

Agora's Real-Time Speech to Text transcribes live audio streams into text, enabling closed captions, live transcription, and AI-powered workflows. Translate transcribed text into multiple languages in real-time, or pass it directly to large language models to bridge real-time communication with intelligent applications.

## Quick links [#quick-links]

<Cards>
  <Card title="REST quickstart" href="./get-started/quickstart" description="Start, manage, query, and stop a real-time speech-to-text agent." />

  <Card title="REST API reference" href="/en/api-reference/api-ref/speech-to-text" description="Explore Real-Time Speech to Text API operations and parameters." />

  <Card title="Sample server" href="https://github.com/AgoraIO/agora-rtt-server" description="Browse the open-source Real-Time Speech to Text sample server." />
</Cards>

## Key features [#key-features]

<CardGrid>
  <FeatureCard title="Live transcription for RTC">
    Integrated with Agora’s voice and video service, live transcription and captions improve accessibility for your audience. Perfect for meetings, live streaming, lectures, interviews, live shopping, and more.
  </FeatureCard>

  <FeatureCard title="Real-time translation (Beta)">
    Break down language barriers with live speech-to-text translation to multiple languages during real-time communication or live streaming. The high accuracy translation text, delivered with ultra low latency, can be integrated with LLMs for enhanced capabilities.
  </FeatureCard>

  <FeatureCard title="Cloud-based STT">
    Cloud-based service converts voice to text for active or specific hosts and then distributes the text to all participants in the channel for further processing. The service does not depend on the client's device performance and network conditions.
  </FeatureCard>

  <FeatureCard title="Speaker labeling">
    Label each transcribed text with the speaker's UID. Separate transcription of each host ensures accuracy even when multiple hosts are talking simultaneously.
  </FeatureCard>

  <FeatureCard title="Caption recording">
    Upload the transcriptions as .vtt files to cloud storage, then play back audio or video recordings with closed captions (CC). The timestamps in the .vtt file ensure that the text is perfectly synchronized with the audio or video, so that it appears exactly where it was generated.
  </FeatureCard>

  <FeatureCard title="Multi-language support">
    Real-time transcription supports all major languages and dialects. Real-time translation supports translation into 40+ target languages.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Real-Time Speech to Text transcribes live audio streams into text, enabling closed captions, live transcription, and AI-powered workflows. Translate transcribed text into multiple languages in real-time, or pass it directly to large language models to bridge real-time communication with intelligent applications."
  }, {
    heading: "quick-links",
    content: '<Card title="REST quickstart" href="./get-started/quickstart" description="Start, manage, query, and stop a real-time speech-to-text agent." />'
  }, {
    heading: "quick-links",
    content: '<Card title="REST API reference" href="/en/api-reference/api-ref/speech-to-text" description="Explore Real-Time Speech to Text API operations and parameters." />'
  }, {
    heading: "quick-links",
    content: '<Card title="Sample server" href="https://github.com/AgoraIO/agora-rtt-server" description="Browse the open-source Real-Time Speech to Text sample server." />'
  }, {
    heading: "key-features",
    content: "Integrated with Agora’s voice and video service, live transcription and captions improve accessibility for your audience. Perfect for meetings, live streaming, lectures, interviews, live shopping, and more."
  }, {
    heading: "key-features",
    content: "Break down language barriers with live speech-to-text translation to multiple languages during real-time communication or live streaming. The high accuracy translation text, delivered with ultra low latency, can be integrated with LLMs for enhanced capabilities."
  }, {
    heading: "key-features",
    content: "Cloud-based service converts voice to text for active or specific hosts and then distributes the text to all participants in the channel for further processing. The service does not depend on the client's device performance and network conditions."
  }, {
    heading: "key-features",
    content: "Label each transcribed text with the speaker's UID. Separate transcription of each host ensures accuracy even when multiple hosts are talking simultaneously."
  }, {
    heading: "key-features",
    content: "Upload the transcriptions as .vtt files to cloud storage, then play back audio or video recordings with closed captions (CC). The timestamps in the .vtt file ensure that the text is perfectly synchronized with the audio or video, so that it appears exactly where it was generated."
  }, {
    heading: "key-features",
    content: "Real-time transcription supports all major languages and dialects. Real-time translation supports translation into 40+ target languages."
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
      children: "Agora's Real-Time Speech to Text transcribes live audio streams into text, enabling closed captions, live transcription, and AI-powered workflows. Translate transcribed text into multiple languages in real-time, or pass it directly to large language models to bridge real-time communication with intelligent applications."
    }), `
`, _jsx(_components.h2, {
      id: "quick-links",
      children: "Quick links"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "REST quickstart",
        href: "./get-started/quickstart",
        description: "Start, manage, query, and stop a real-time speech-to-text agent."
      }), _jsx(Card, {
        title: "REST API reference",
        href: "/en/api-reference/api-ref/speech-to-text",
        description: "Explore Real-Time Speech to Text API operations and parameters."
      }), _jsx(Card, {
        title: "Sample server",
        href: "https://github.com/AgoraIO/agora-rtt-server",
        description: "Browse the open-source Real-Time Speech to Text sample server."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "key-features",
      children: "Key features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Live transcription for RTC",
        children: _jsx(_components.p, {
          children: "Integrated with Agora’s voice and video service, live transcription and captions improve accessibility for your audience. Perfect for meetings, live streaming, lectures, interviews, live shopping, and more."
        })
      }), _jsx(FeatureCard, {
        title: "Real-time translation (Beta)",
        children: _jsx(_components.p, {
          children: "Break down language barriers with live speech-to-text translation to multiple languages during real-time communication or live streaming. The high accuracy translation text, delivered with ultra low latency, can be integrated with LLMs for enhanced capabilities."
        })
      }), _jsx(FeatureCard, {
        title: "Cloud-based STT",
        children: _jsx(_components.p, {
          children: "Cloud-based service converts voice to text for active or specific hosts and then distributes the text to all participants in the channel for further processing. The service does not depend on the client's device performance and network conditions."
        })
      }), _jsx(FeatureCard, {
        title: "Speaker labeling",
        children: _jsx(_components.p, {
          children: "Label each transcribed text with the speaker's UID. Separate transcription of each host ensures accuracy even when multiple hosts are talking simultaneously."
        })
      }), _jsx(FeatureCard, {
        title: "Caption recording",
        children: _jsx(_components.p, {
          children: "Upload the transcriptions as .vtt files to cloud storage, then play back audio or video recordings with closed captions (CC). The timestamps in the .vtt file ensure that the text is perfectly synchronized with the audio or video, so that it appears exactly where it was generated."
        })
      }), _jsx(FeatureCard, {
        title: "Multi-language support",
        children: _jsx(_components.p, {
          children: "Real-time transcription supports all major languages and dialects. Real-time translation supports translation into 40+ target languages."
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
