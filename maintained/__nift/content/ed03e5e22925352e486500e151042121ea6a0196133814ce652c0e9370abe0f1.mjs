import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "New features, improvements, and resolved issues for Media Pull."
};
export let _markdown = `

This page provides the release notes for Media Pull.

<Accordions type="multiple">
  <Accordion title="2022.12" id="202212" headingLevel="2" value="202212">
    The changes for this release are as follows:

    * Added \`Updateinterface\` to update the specified cloud player configuration.
  </Accordion>

  <Accordion title="2022.06" id="202206" headingLevel="2" value="202206">
    The changes for this release are as follows:

    * Added a \`dataStreamOptions\` optional parameter to set whether to import the SEI information of the \`DataStream\` type. This parameter applies to on-demand streams only.
    * Added a \`seekPosition\` optional parameter to specify the playback position of the on-demand file in seconds. This parameter applies to on-demand streams only.
    * Added \`audioOptions\` and \`videoOptions\` optional parameters for setting audio and video transcoding. You can set \`streamUrl\` as image URL and input images in the JPEG and PNG formats to the channel.
  </Accordion>

  <Accordion title="Before June 2022" id="before-june-2022" headingLevel="2" value="before-june-2022">
    The changes for earlier releases include adding support for the following:

    * Video source stream codecs: H.264, H.265, VP8.
    * Audio source stream codecs: AAC, OPUS.
    * Media streaming protocols: HTTPS, RTMP, HLS.
    * Streaming encapsulation formats: FLV, MP4, MPEG-TS, Matroska (MKV), MP3.
    * Playback scheduling. Set the start time of playing online media streams to schedule playback.
    * Restricted access area. Specify the region where the online media stream is played in the request, to ensure the transmission quality of the media stream.
    * On-demand stream loop playback.
  </Accordion>
</Accordions>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page provides the release notes for Media Pull."
  }, {
    heading: undefined,
    content: "The changes for this release are as follows:"
  }, {
    heading: undefined,
    content: "Added `Updateinterface` to update the specified cloud player configuration."
  }, {
    heading: undefined,
    content: "The changes for this release are as follows:"
  }, {
    heading: undefined,
    content: "Added a `dataStreamOptions` optional parameter to set whether to import the SEI information of the `DataStream` type. This parameter applies to on-demand streams only."
  }, {
    heading: undefined,
    content: "Added a `seekPosition` optional parameter to specify the playback position of the on-demand file in seconds. This parameter applies to on-demand streams only."
  }, {
    heading: undefined,
    content: "Added `audioOptions` and `videoOptions` optional parameters for setting audio and video transcoding. You can set `streamUrl` as image URL and input images in the JPEG and PNG formats to the channel."
  }, {
    heading: undefined,
    content: "The changes for earlier releases include adding support for the following:"
  }, {
    heading: undefined,
    content: "Video source stream codecs: H.264, H.265, VP8."
  }, {
    heading: undefined,
    content: "Audio source stream codecs: AAC, OPUS."
  }, {
    heading: undefined,
    content: "Media streaming protocols: HTTPS, RTMP, HLS."
  }, {
    heading: undefined,
    content: "Streaming encapsulation formats: FLV, MP4, MPEG-TS, Matroska (MKV), MP3."
  }, {
    heading: undefined,
    content: "Playback scheduling. Set the start time of playing online media streams to schedule playback."
  }, {
    heading: undefined,
    content: "Restricted access area. Specify the region where the online media stream is played in the request, to ensure the transmission quality of the media stream."
  }, {
    heading: undefined,
    content: "On-demand stream loop playback."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page provides the release notes for Media Pull."
    }), `
`, _jsxs(Accordions, {
      type: "multiple",
      openFirst: true,
      children: [_jsxs(Accordion, {
        title: "2022.12",
        id: "202212",
        headingLevel: 2,
        value: "202212",
        children: [_jsx(_components.p, {
          children: "The changes for this release are as follows:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Added ", _jsx(_components.code, {
              children: "Updateinterface"
            }), " to update the specified cloud player configuration."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2022.06",
        id: "202206",
        headingLevel: 2,
        value: "202206",
        children: [_jsx(_components.p, {
          children: "The changes for this release are as follows:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Added a ", _jsx(_components.code, {
              children: "dataStreamOptions"
            }), " optional parameter to set whether to import the SEI information of the ", _jsx(_components.code, {
              children: "DataStream"
            }), " type. This parameter applies to on-demand streams only."]
          }), `
`, _jsxs(_components.li, {
            children: ["Added a ", _jsx(_components.code, {
              children: "seekPosition"
            }), " optional parameter to specify the playback position of the on-demand file in seconds. This parameter applies to on-demand streams only."]
          }), `
`, _jsxs(_components.li, {
            children: ["Added ", _jsx(_components.code, {
              children: "audioOptions"
            }), " and ", _jsx(_components.code, {
              children: "videoOptions"
            }), " optional parameters for setting audio and video transcoding. You can set ", _jsx(_components.code, {
              children: "streamUrl"
            }), " as image URL and input images in the JPEG and PNG formats to the channel."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "Before June 2022",
        id: "before-june-2022",
        headingLevel: 2,
        value: "before-june-2022",
        children: [_jsx(_components.p, {
          children: "The changes for earlier releases include adding support for the following:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Video source stream codecs: H.264, H.265, VP8."
          }), `
`, _jsx(_components.li, {
            children: "Audio source stream codecs: AAC, OPUS."
          }), `
`, _jsx(_components.li, {
            children: "Media streaming protocols: HTTPS, RTMP, HLS."
          }), `
`, _jsx(_components.li, {
            children: "Streaming encapsulation formats: FLV, MP4, MPEG-TS, Matroska (MKV), MP3."
          }), `
`, _jsx(_components.li, {
            children: "Playback scheduling. Set the start time of playing online media streams to schedule playback."
          }), `
`, _jsx(_components.li, {
            children: "Restricted access area. Specify the region where the online media stream is played in the request, to ensure the transmission quality of the media stream."
          }), `
`, _jsx(_components.li, {
            children: "On-demand stream loop playback."
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
