import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media processing and distribution",
  description: "A map of Agora's media workflow products across recording, pushing, pulling, transcoding, gateways, and live distribution."
};
export let _markdown = `

<div id="rm-cloud-recording"></div>

## Recording [#recording]

Recording captures live interaction content into your storage flow for archive, replay, review, and compliance-oriented workflows.

### Cloud Recording [#cloud-recording]

Fits teams that want a managed recording path from Agora.

<div id="rm-local-recording"></div>

### Local Server Recording [#local-server-recording]

Fits teams that need self-managed recording servers and finer-grained control over the recording workflow.

<div id="rm-media-push"></div>

## Media Push [#media-push]

Pushes interactive channel content into CDN or broadcast-style distribution paths.

<div id="rm-media-pull"></div>

## Media Pull [#media-pull]

Brings external online media streams into an existing real-time scenario.

<div id="rm-cloud-transcoding"></div>

## Transcoding [#transcoding]

Transcoding handles media transformation and composition for live streaming and multi-layout output scenarios.

### Cloud Transcoding [#cloud-transcoding]

Fits teams that need hosted stream composition and output transformation.

<div id="rm-rtmp-gateway"></div>

## Media Gateway [#media-gateway]

Bridges standard live protocol flows with real-time interaction systems.

<div id="rm-fusion-cdn"></div>

## Fusion CDN Live Streaming [#fusion-cdn-live-streaming]

Optimizes end-to-end playback through multi-CDN scheduling and distribution.

<div id="rm-ppt-conversion"></div>

Additional note: the broader Agora content system also includes PPT Conversion. For this IA pass, it can stay as an extension of transcoding rather than a first-class left-nav item.
`;
export let structuredData = {
  contents: [{
    heading: "recording",
    content: "Recording captures live interaction content into your storage flow for archive, replay, review, and compliance-oriented workflows."
  }, {
    heading: "cloud-recording",
    content: "Fits teams that want a managed recording path from Agora."
  }, {
    heading: "local-server-recording",
    content: "Fits teams that need self-managed recording servers and finer-grained control over the recording workflow."
  }, {
    heading: "media-push",
    content: "Pushes interactive channel content into CDN or broadcast-style distribution paths."
  }, {
    heading: "media-pull",
    content: "Brings external online media streams into an existing real-time scenario."
  }, {
    heading: "transcoding",
    content: "Transcoding handles media transformation and composition for live streaming and multi-layout output scenarios."
  }, {
    heading: "cloud-transcoding",
    content: "Fits teams that need hosted stream composition and output transformation."
  }, {
    heading: "media-gateway",
    content: "Bridges standard live protocol flows with real-time interaction systems."
  }, {
    heading: "fusion-cdn-live-streaming",
    content: "Optimizes end-to-end playback through multi-CDN scheduling and distribution."
  }, {
    heading: "fusion-cdn-live-streaming",
    content: "Additional note: the broader Agora content system also includes PPT Conversion. For this IA pass, it can stay as an extension of transcoding rather than a first-class left-nav item."
  }],
  headings: [{
    id: "recording",
    content: "Recording"
  }, {
    id: "cloud-recording",
    content: "Cloud Recording"
  }, {
    id: "local-server-recording",
    content: "Local Server Recording"
  }, {
    id: "media-push",
    content: "Media Push"
  }, {
    id: "media-pull",
    content: "Media Pull"
  }, {
    id: "transcoding",
    content: "Transcoding"
  }, {
    id: "cloud-transcoding",
    content: "Cloud Transcoding"
  }, {
    id: "media-gateway",
    content: "Media Gateway"
  }, {
    id: "fusion-cdn-live-streaming",
    content: "Fusion CDN Live Streaming"
  }]
};
export let toc = [{
  depth: 2,
  url: "#recording",
  title: _jsx(_Fragment, {
    children: "Recording"
  })
}, {
  depth: 3,
  url: "#cloud-recording",
  title: _jsx(_Fragment, {
    children: "Cloud Recording"
  })
}, {
  depth: 3,
  url: "#local-server-recording",
  title: _jsx(_Fragment, {
    children: "Local Server Recording"
  })
}, {
  depth: 2,
  url: "#media-push",
  title: _jsx(_Fragment, {
    children: "Media Push"
  })
}, {
  depth: 2,
  url: "#media-pull",
  title: _jsx(_Fragment, {
    children: "Media Pull"
  })
}, {
  depth: 2,
  url: "#transcoding",
  title: _jsx(_Fragment, {
    children: "Transcoding"
  })
}, {
  depth: 3,
  url: "#cloud-transcoding",
  title: _jsx(_Fragment, {
    children: "Cloud Transcoding"
  })
}, {
  depth: 2,
  url: "#media-gateway",
  title: _jsx(_Fragment, {
    children: "Media Gateway"
  })
}, {
  depth: 2,
  url: "#fusion-cdn-live-streaming",
  title: _jsx(_Fragment, {
    children: "Fusion CDN Live Streaming"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "recording",
      children: "Recording"
    }), `
`, _jsx(_components.p, {
      children: "Recording captures live interaction content into your storage flow for archive, replay, review, and compliance-oriented workflows."
    }), `
`, _jsx(_components.h3, {
      id: "cloud-recording",
      children: "Cloud Recording"
    }), `
`, _jsx(_components.p, {
      children: "Fits teams that want a managed recording path from Agora."
    }), `
`, `
`, _jsx(_components.h3, {
      id: "local-server-recording",
      children: "Local Server Recording"
    }), `
`, _jsx(_components.p, {
      children: "Fits teams that need self-managed recording servers and finer-grained control over the recording workflow."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "media-push",
      children: "Media Push"
    }), `
`, _jsx(_components.p, {
      children: "Pushes interactive channel content into CDN or broadcast-style distribution paths."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "media-pull",
      children: "Media Pull"
    }), `
`, _jsx(_components.p, {
      children: "Brings external online media streams into an existing real-time scenario."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "transcoding",
      children: "Transcoding"
    }), `
`, _jsx(_components.p, {
      children: "Transcoding handles media transformation and composition for live streaming and multi-layout output scenarios."
    }), `
`, _jsx(_components.h3, {
      id: "cloud-transcoding",
      children: "Cloud Transcoding"
    }), `
`, _jsx(_components.p, {
      children: "Fits teams that need hosted stream composition and output transformation."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "media-gateway",
      children: "Media Gateway"
    }), `
`, _jsx(_components.p, {
      children: "Bridges standard live protocol flows with real-time interaction systems."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "fusion-cdn-live-streaming",
      children: "Fusion CDN Live Streaming"
    }), `
`, _jsx(_components.p, {
      children: "Optimizes end-to-end playback through multi-CDN scheduling and distribution."
    }), `
`, `
`, _jsx(_components.p, {
      children: "Additional note: the broader Agora content system also includes PPT Conversion. For this IA pass, it can stay as an extension of transcoding rather than a first-class left-nav item."
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
