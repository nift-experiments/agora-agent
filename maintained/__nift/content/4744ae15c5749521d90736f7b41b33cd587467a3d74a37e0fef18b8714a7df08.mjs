import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "Past releases and notable updates for Media Gateway."
};
export let _markdown = `

This page provides the release notes for Media Gateway.

<Accordions type="multiple">
  <Accordion title="2025.5.28" id="2025528" headingLevel="2" value="2025528">
    ### New features [#new-features]

    * **Low-bitrate high-quality streaming**

      Video transcoding now supports low-bitrate high-quality streaming through PVC and Super Resolution features. For configuration details, see [PVC and Super Quality configuration](../build/optimize-quality-and-monitor-events/pvc-and-super-quality-configuration.md).

    * **Adaptive Bitrate (ABR)**

      Stream configuration templates now support ABR functionality. For configuration details, see [Enable adaptive bitrate](../build/optimize-quality-and-monitor-events/enable-adaptive-bitrate.md).

    * **SRT streaming protocol support**

      Gateway nodes now support the SRT protocol with the following codec formats:

      * Video: H.264, H.265
      * Audio: AAC, OPUS

      For configuration details, see [SRT streaming](srt-streaming.md).

    ### Improvements [#improvements]

    * **NCS callback configuration by VID**

      Configure NCS callback logic by VID. For the \`live_profile_updated\` event, you can configure which \`profile\` fields are required.

    * **NCS callback event updates**

      This version updates the format of NCS callback events, including:

      * \`live_stream_connected\`: Now includes transcoding parameter configuration information for the current stream
      * \`live_stream_disconnected\`: Now includes total input and output bytes for the stream, enabling average bitrate calculation when combined with stream start and end times
  </Accordion>

  <Accordion title="2024.8.21" id="2024821" headingLevel="2" value="2024821">
    This release includes the following updates:

    * Adds support for a backup primary domain name and a secondary domain name to ensure service availability.
    * Adds the \`mode\` field for setting the transcoding mode, and updates \`width\`, \`height\`, and \`fps\` fields to support more transcoding options.
  </Accordion>

  <Accordion title="2024.6.21" id="2024621" headingLevel="2" value="2024621">
    Agora Media Gateway reaches General Availability status with the following core functions:

    * Pushing media streams into Agora SDRTN(R)
    * Supporting RTMP and SRT streaming protocols, H.264 and H.265 video codecs, and AAC audio codec
    * Customizing transcoding options, including video resolution, frame rate, and bitrate
  </Accordion>
</Accordions>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page provides the release notes for Media Gateway."
  }, {
    heading: "new-features",
    content: "**Low-bitrate high-quality streaming**"
  }, {
    heading: "new-features",
    content: "Video transcoding now supports low-bitrate high-quality streaming through PVC and Super Resolution features. For configuration details, see PVC and Super Quality configuration."
  }, {
    heading: "new-features",
    content: "**Adaptive Bitrate (ABR)**"
  }, {
    heading: "new-features",
    content: "Stream configuration templates now support ABR functionality. For configuration details, see Enable adaptive bitrate."
  }, {
    heading: "new-features",
    content: "**SRT streaming protocol support**"
  }, {
    heading: "new-features",
    content: "Gateway nodes now support the SRT protocol with the following codec formats:"
  }, {
    heading: "new-features",
    content: "Video: H.264, H.265"
  }, {
    heading: "new-features",
    content: "Audio: AAC, OPUS"
  }, {
    heading: "new-features",
    content: "For configuration details, see SRT streaming."
  }, {
    heading: "improvements",
    content: "**NCS callback configuration by VID**"
  }, {
    heading: "improvements",
    content: "Configure NCS callback logic by VID. For the `live_profile_updated` event, you can configure which `profile` fields are required."
  }, {
    heading: "improvements",
    content: "**NCS callback event updates**"
  }, {
    heading: "improvements",
    content: "This version updates the format of NCS callback events, including:"
  }, {
    heading: "improvements",
    content: "`live_stream_connected`: Now includes transcoding parameter configuration information for the current stream"
  }, {
    heading: "improvements",
    content: "`live_stream_disconnected`: Now includes total input and output bytes for the stream, enabling average bitrate calculation when combined with stream start and end times"
  }, {
    heading: "improvements",
    content: "This release includes the following updates:"
  }, {
    heading: "improvements",
    content: "Adds support for a backup primary domain name and a secondary domain name to ensure service availability."
  }, {
    heading: "improvements",
    content: "Adds the `mode` field for setting the transcoding mode, and updates `width`, `height`, and `fps` fields to support more transcoding options."
  }, {
    heading: "improvements",
    content: "Agora Media Gateway reaches General Availability status with the following core functions:"
  }, {
    heading: "improvements",
    content: "Pushing media streams into Agora SDRTN(R)"
  }, {
    heading: "improvements",
    content: "Supporting RTMP and SRT streaming protocols, H.264 and H.265 video codecs, and AAC audio codec"
  }, {
    heading: "improvements",
    content: "Customizing transcoding options, including video resolution, frame rate, and bitrate"
  }],
  headings: [{
    id: "new-features",
    content: "New features"
  }, {
    id: "improvements",
    content: "Improvements"
  }]
};
export let toc = [{
  depth: 3,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 3,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
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
      children: "This page provides the release notes for Media Gateway."
    }), `
`, _jsxs(Accordions, {
      type: "multiple",
      openFirst: true,
      children: [_jsxs(Accordion, {
        title: "2025.5.28",
        id: "2025528",
        headingLevel: 2,
        value: "2025528",
        children: [_jsx(_components.h3, {
          id: "new-features",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Low-bitrate high-quality streaming"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Video transcoding now supports low-bitrate high-quality streaming through PVC and Super Resolution features. For configuration details, see ", _jsx(_components.a, {
                href: "../build/optimize-quality-and-monitor-events/pvc-and-super-quality-configuration.md",
                children: "PVC and Super Quality configuration"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Adaptive Bitrate (ABR)"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Stream configuration templates now support ABR functionality. For configuration details, see ", _jsx(_components.a, {
                href: "../build/optimize-quality-and-monitor-events/enable-adaptive-bitrate.md",
                children: "Enable adaptive bitrate"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "SRT streaming protocol support"
              })
            }), `
`, _jsx(_components.p, {
              children: "Gateway nodes now support the SRT protocol with the following codec formats:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Video: H.264, H.265"
              }), `
`, _jsx(_components.li, {
                children: "Audio: AAC, OPUS"
              }), `
`]
            }), `
`, _jsxs(_components.p, {
              children: ["For configuration details, see ", _jsx(_components.a, {
                href: "srt-streaming.md",
                children: "SRT streaming"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "improvements",
          children: "Improvements"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "NCS callback configuration by VID"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Configure NCS callback logic by VID. For the ", _jsx(_components.code, {
                children: "live_profile_updated"
              }), " event, you can configure which ", _jsx(_components.code, {
                children: "profile"
              }), " fields are required."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "NCS callback event updates"
              })
            }), `
`, _jsx(_components.p, {
              children: "This version updates the format of NCS callback events, including:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "live_stream_connected"
                }), ": Now includes transcoding parameter configuration information for the current stream"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "live_stream_disconnected"
                }), ": Now includes total input and output bytes for the stream, enabling average bitrate calculation when combined with stream start and end times"]
              }), `
`]
            }), `
`]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2024.8.21",
        id: "2024821",
        headingLevel: 2,
        value: "2024821",
        children: [_jsx(_components.p, {
          children: "This release includes the following updates:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Adds support for a backup primary domain name and a secondary domain name to ensure service availability."
          }), `
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.code, {
              children: "mode"
            }), " field for setting the transcoding mode, and updates ", _jsx(_components.code, {
              children: "width"
            }), ", ", _jsx(_components.code, {
              children: "height"
            }), ", and ", _jsx(_components.code, {
              children: "fps"
            }), " fields to support more transcoding options."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2024.6.21",
        id: "2024621",
        headingLevel: 2,
        value: "2024621",
        children: [_jsx(_components.p, {
          children: "Agora Media Gateway reaches General Availability status with the following core functions:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Pushing media streams into Agora SDRTN(R)"
          }), `
`, _jsx(_components.li, {
            children: "Supporting RTMP and SRT streaming protocols, H.264 and H.265 video codecs, and AAC audio codec"
          }), `
`, _jsx(_components.li, {
            children: "Customizing transcoding options, including video resolution, frame rate, and bitrate"
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
