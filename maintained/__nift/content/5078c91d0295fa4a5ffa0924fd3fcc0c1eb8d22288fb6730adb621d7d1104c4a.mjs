import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Foundational real-time capabilities",
  description: "A foundation-first view of RTC, RTM, IM, real-time transcription, and RTSA."
};
export let _markdown = `

<div id="rm-rtc"></div>

## RTC [#rtc]

Owns audio, video, and channel sessions as the real-time base for calling, live streaming, meetings, and classrooms.

<div id="rm-rtm"></div>

## RTM [#rtm]

Provides low-latency, reliable messaging plus state synchronization for channel messages, presence, and workflow coordination.

<div id="rm-im"></div>

## Instant Messaging IM [#instant-messaging-im]

Fits broader cloud-chat workloads where a full messaging service is needed beyond lightweight real-time coordination.

<div id="rm-speech-to-text"></div>

## Real-time Transcription & Translation [#real-time-transcription--translation]

Provides ultra-low-latency, high-accuracy speech transcription and translation for captions, multilingual communication, and content understanding.

<div id="rm-rtsa"></div>

## RTSA [#rtsa]

Provides real-time media-stream and signaling transport for device-oriented and terminal-style workloads.
`;
export let structuredData = {
  contents: [{
    heading: "rtc",
    content: "Owns audio, video, and channel sessions as the real-time base for calling, live streaming, meetings, and classrooms."
  }, {
    heading: "rtm",
    content: "Provides low-latency, reliable messaging plus state synchronization for channel messages, presence, and workflow coordination."
  }, {
    heading: "instant-messaging-im",
    content: "Fits broader cloud-chat workloads where a full messaging service is needed beyond lightweight real-time coordination."
  }, {
    heading: "real-time-transcription--translation",
    content: "Provides ultra-low-latency, high-accuracy speech transcription and translation for captions, multilingual communication, and content understanding."
  }, {
    heading: "rtsa",
    content: "Provides real-time media-stream and signaling transport for device-oriented and terminal-style workloads."
  }],
  headings: [{
    id: "rtc",
    content: "RTC"
  }, {
    id: "rtm",
    content: "RTM"
  }, {
    id: "instant-messaging-im",
    content: "Instant Messaging IM"
  }, {
    id: "real-time-transcription--translation",
    content: "Real-time Transcription & Translation"
  }, {
    id: "rtsa",
    content: "RTSA"
  }]
};
export let toc = [{
  depth: 2,
  url: "#rtc",
  title: _jsx(_Fragment, {
    children: "RTC"
  })
}, {
  depth: 2,
  url: "#rtm",
  title: _jsx(_Fragment, {
    children: "RTM"
  })
}, {
  depth: 2,
  url: "#instant-messaging-im",
  title: _jsx(_Fragment, {
    children: "Instant Messaging IM"
  })
}, {
  depth: 2,
  url: "#real-time-transcription--translation",
  title: _jsx(_Fragment, {
    children: "Real-time Transcription & Translation"
  })
}, {
  depth: 2,
  url: "#rtsa",
  title: _jsx(_Fragment, {
    children: "RTSA"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "rtc",
      children: "RTC"
    }), `
`, _jsx(_components.p, {
      children: "Owns audio, video, and channel sessions as the real-time base for calling, live streaming, meetings, and classrooms."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "rtm",
      children: "RTM"
    }), `
`, _jsx(_components.p, {
      children: "Provides low-latency, reliable messaging plus state synchronization for channel messages, presence, and workflow coordination."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "instant-messaging-im",
      children: "Instant Messaging IM"
    }), `
`, _jsx(_components.p, {
      children: "Fits broader cloud-chat workloads where a full messaging service is needed beyond lightweight real-time coordination."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "real-time-transcription--translation",
      children: "Real-time Transcription & Translation"
    }), `
`, _jsx(_components.p, {
      children: "Provides ultra-low-latency, high-accuracy speech transcription and translation for captions, multilingual communication, and content understanding."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "rtsa",
      children: "RTSA"
    }), `
`, _jsx(_components.p, {
      children: "Provides real-time media-stream and signaling transport for device-oriented and terminal-style workloads."
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
