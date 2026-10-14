import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "New features, improvements and resolved issues for Cloud Transcoding."
};
export let _markdown = `

This document tracks important changes and improvements to the Cloud Transcoding.

## Releases [#releases]

<Accordions type="multiple">
  <Accordion title="2026.09.08" id="20260908" headingLevel="3" value="20260908">
    You can now enable Cloud Transcoding and configure notification events directly in Agora Console, without contacting support.

    #### New features [#new-features]

    * **Self-service enablement**\\
      Enable Cloud Transcoding directly in Agora Console without contacting the support team. See [Enable Cloud Transcoding](../sdk-quickstart.md#enable-cloud-transcoding).

    * **Self-service notification event configuration**\\
      Configure Cloud Transcoding notification events directly in Agora Console without contacting the support team. See [Receive webhook notifications](../build/receive-ncs-events.md).

    * **New product ID**\\
      Cloud Transcoding is identified by \`productId=22\` in notification events. Use this product ID to identify and process Cloud Transcoding events in your application.
  </Accordion>

  <Accordion title="2025.10.1 Public Beta" id="2025101-public-beta" headingLevel="3" value="2025101-public-beta">
    Released on October 1, 2025.

    This is the first release of Agora Cloud Transcoding, a cloud-based service that transcodes, mixes, and composites real-time audio and video streams on the server side before publishing them back to RTC channels.

    #### Main features [#main-features]

    * **Low energy consumption for client devices**\\
      Offload stream processing to the server before publishing to the RTC channel. This reduces CPU/GPU load on audience devices, especially those with limited performance.

    * **Low bitrate streaming for poor network conditions**\\
      Improve video fluency and reliability under weak downlink conditions by mixing audio, combining images, and transcoding into low-bitrate streams. Ideal for audiences subscribing to multiple hosts or single HD streams.

    * **Cross-platform compatibility**\\
      Support for standard H.264 and VP8 encoding ensures consistent playback across platforms. Host source streams from Native platforms can be converted to VP8 for optimized Web viewing.

    * **Automated stream processing workflow**\\
      Automatically subscribe to specified user streams in RTC channels based on UID configuration. The service handles transcoding, audio mixing, and video compositing, then republishes processed streams back to the channel.

    * **Reduced bandwidth and simplified integration**\\
      Viewers no longer need to subscribe to multiple host streams individually. This reduces downstream bandwidth usage and lowers development complexity with fewer API calls and streamlined workflows.
  </Accordion>
</Accordions>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This document tracks important changes and improvements to the Cloud Transcoding."
  }, {
    heading: "releases",
    content: "You can now enable Cloud Transcoding and configure notification events directly in Agora Console, without contacting support."
  }, {
    heading: "new-features",
    content: "**Self-service enablement**\\\nEnable Cloud Transcoding directly in Agora Console without contacting the support team. See Enable Cloud Transcoding."
  }, {
    heading: "new-features",
    content: "**Self-service notification event configuration**\\\nConfigure Cloud Transcoding notification events directly in Agora Console without contacting the support team. See Receive webhook notifications."
  }, {
    heading: "new-features",
    content: "**New product ID**\\\nCloud Transcoding is identified by `productId=22` in notification events. Use this product ID to identify and process Cloud Transcoding events in your application."
  }, {
    heading: "new-features",
    content: "Released on October 1, 2025."
  }, {
    heading: "new-features",
    content: "This is the first release of Agora Cloud Transcoding, a cloud-based service that transcodes, mixes, and composites real-time audio and video streams on the server side before publishing them back to RTC channels."
  }, {
    heading: "main-features",
    content: "**Low energy consumption for client devices**\\\nOffload stream processing to the server before publishing to the RTC channel. This reduces CPU/GPU load on audience devices, especially those with limited performance."
  }, {
    heading: "main-features",
    content: "**Low bitrate streaming for poor network conditions**\\\nImprove video fluency and reliability under weak downlink conditions by mixing audio, combining images, and transcoding into low-bitrate streams. Ideal for audiences subscribing to multiple hosts or single HD streams."
  }, {
    heading: "main-features",
    content: "**Cross-platform compatibility**\\\nSupport for standard H.264 and VP8 encoding ensures consistent playback across platforms. Host source streams from Native platforms can be converted to VP8 for optimized Web viewing."
  }, {
    heading: "main-features",
    content: "**Automated stream processing workflow**\\\nAutomatically subscribe to specified user streams in RTC channels based on UID configuration. The service handles transcoding, audio mixing, and video compositing, then republishes processed streams back to the channel."
  }, {
    heading: "main-features",
    content: "**Reduced bandwidth and simplified integration**\\\nViewers no longer need to subscribe to multiple host streams individually. This reduces downstream bandwidth usage and lowers development complexity with fewer API calls and streamlined workflows."
  }],
  headings: [{
    id: "releases",
    content: "Releases"
  }, {
    id: "new-features",
    content: "New features"
  }, {
    id: "main-features",
    content: "Main features"
  }]
};
export let toc = [{
  depth: 2,
  url: "#releases",
  title: _jsx(_Fragment, {
    children: "Releases"
  })
}, {
  depth: 4,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#main-features",
  title: _jsx(_Fragment, {
    children: "Main features"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This document tracks important changes and improvements to the Cloud Transcoding."
    }), `
`, _jsx(_components.h2, {
      id: "releases",
      children: "Releases"
    }), `
`, _jsxs(Accordions, {
      type: "multiple",
      openFirst: true,
      children: [_jsxs(Accordion, {
        title: "2026.09.08",
        id: "20260908",
        headingLevel: 3,
        value: "20260908",
        children: [_jsx(_components.p, {
          children: "You can now enable Cloud Transcoding and configure notification events directly in Agora Console, without contacting support."
        }), _jsx(_components.h4, {
          id: "new-features",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Self-service enablement"
              }), _jsx(_components.br, {}), `
`, "Enable Cloud Transcoding directly in Agora Console without contacting the support team. See ", _jsx(_components.a, {
                href: "../sdk-quickstart.md#enable-cloud-transcoding",
                children: "Enable Cloud Transcoding"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Self-service notification event configuration"
              }), _jsx(_components.br, {}), `
`, "Configure Cloud Transcoding notification events directly in Agora Console without contacting the support team. See ", _jsx(_components.a, {
                href: "../build/receive-ncs-events.md",
                children: "Receive webhook notifications"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "New product ID"
              }), _jsx(_components.br, {}), `
`, "Cloud Transcoding is identified by ", _jsx(_components.code, {
                children: "productId=22"
              }), " in notification events. Use this product ID to identify and process Cloud Transcoding events in your application."]
            }), `
`]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2025.10.1 Public Beta",
        id: "2025101-public-beta",
        headingLevel: 3,
        value: "2025101-public-beta",
        children: [_jsx(_components.p, {
          children: "Released on October 1, 2025."
        }), _jsx(_components.p, {
          children: "This is the first release of Agora Cloud Transcoding, a cloud-based service that transcodes, mixes, and composites real-time audio and video streams on the server side before publishing them back to RTC channels."
        }), _jsx(_components.h4, {
          id: "main-features",
          children: "Main features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Low energy consumption for client devices"
              }), _jsx(_components.br, {}), `
`, "Offload stream processing to the server before publishing to the RTC channel. This reduces CPU/GPU load on audience devices, especially those with limited performance."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Low bitrate streaming for poor network conditions"
              }), _jsx(_components.br, {}), `
`, "Improve video fluency and reliability under weak downlink conditions by mixing audio, combining images, and transcoding into low-bitrate streams. Ideal for audiences subscribing to multiple hosts or single HD streams."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Cross-platform compatibility"
              }), _jsx(_components.br, {}), `
`, "Support for standard H.264 and VP8 encoding ensures consistent playback across platforms. Host source streams from Native platforms can be converted to VP8 for optimized Web viewing."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Automated stream processing workflow"
              }), _jsx(_components.br, {}), `
`, "Automatically subscribe to specified user streams in RTC channels based on UID configuration. The service handles transcoding, audio mixing, and video compositing, then republishes processed streams back to the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Reduced bandwidth and simplified integration"
              }), _jsx(_components.br, {}), `
`, "Viewers no longer need to subscribe to multiple host streams individually. This reduces downstream bandwidth usage and lowers development complexity with fewer API calls and streamlined workflows."]
            }), `
`]
          }), `
`]
        })]
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
