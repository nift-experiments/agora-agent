import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media streaming output modes",
  description: "Media stream output modes for single-stream recording."
};
export let _markdown = "\n\nThis page explains the media streaming output modes.\n\nWhen calling `start` to enable single-stream recording, set the output mode of the media stream in the `recordingConfig.streamMode` field of the `clientRequest`. The supported values and their description is as follows:\n\n| `streamMode` | Description                                                                                    | Generate index file                                                                                                                                                                                                 | Generate slice files                                                                                                                                                                                                    | Video encoding | Audio encoding | Supported features                                 |\n| :----------- | :--------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :------------- | :------------------------------------------------- |\n| `default`    | Default mode                                                                                   | Each UID generates an M3U8 audio index file and an M3U8 video index file.                                                                                                                                           | Each UID generates multiple TS audio slice files and multiple TS video slice files. If VP8 encoding is used on the Web side, multiple TS audio slice files and multiple video slice files in WebM format are generated. | No transcoding | Transcode      | Single stream recording and video screenshots.     |\n| `standard`   | Standard mode                                                                                  | Each UID generates an M3U8 audio index file, an M3U8 video index file and a merged M3U8 audio and video index file. If VP8 encoding is used on the Web side, a merged MPD audio and video index file are generated. | Each UID generates multiple TS audio slice files and multiple TS video slice files. If VP8 encoding is used on the Web side, multiple audio files in WebM format and multiple video files in WebM format are generated. | No transcoding | Transcode      | Single stream recording, video screenshots.        |\n| `original`   | Original mode. This field only takes effect when subscribing to audio  (`streamTypes` is `0`). | An M3U8 audio index file is generated for each UID.                                                                                                                                                                 | Multiple TS audio slice files are generated for each UID.                                                                                                                                                               | none           | No transcoding | Single-stream audio recording without transcoding. |\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains the media streaming output modes."
  }, {
    heading: undefined,
    content: "When calling `start` to enable single-stream recording, set the output mode of the media stream in the `recordingConfig.streamMode` field of the `clientRequest`. The supported values and their description is as follows:"
  }, {
    heading: undefined,
    content: "`streamMode`"
  }, {
    heading: undefined,
    content: "Description"
  }, {
    heading: undefined,
    content: "Generate index file"
  }, {
    heading: undefined,
    content: "Generate slice files"
  }, {
    heading: undefined,
    content: "Video encoding"
  }, {
    heading: undefined,
    content: "Audio encoding"
  }, {
    heading: undefined,
    content: "Supported features"
  }, {
    heading: undefined,
    content: "`default`"
  }, {
    heading: undefined,
    content: "Default mode"
  }, {
    heading: undefined,
    content: "Each UID generates an M3U8 audio index file and an M3U8 video index file."
  }, {
    heading: undefined,
    content: "Each UID generates multiple TS audio slice files and multiple TS video slice files. If VP8 encoding is used on the Web side, multiple TS audio slice files and multiple video slice files in WebM format are generated."
  }, {
    heading: undefined,
    content: "No transcoding"
  }, {
    heading: undefined,
    content: "Transcode"
  }, {
    heading: undefined,
    content: "Single stream recording and video screenshots."
  }, {
    heading: undefined,
    content: "`standard`"
  }, {
    heading: undefined,
    content: "Standard mode"
  }, {
    heading: undefined,
    content: "Each UID generates an M3U8 audio index file, an M3U8 video index file and a merged M3U8 audio and video index file. If VP8 encoding is used on the Web side, a merged MPD audio and video index file are generated."
  }, {
    heading: undefined,
    content: "Each UID generates multiple TS audio slice files and multiple TS video slice files. If VP8 encoding is used on the Web side, multiple audio files in WebM format and multiple video files in WebM format are generated."
  }, {
    heading: undefined,
    content: "No transcoding"
  }, {
    heading: undefined,
    content: "Transcode"
  }, {
    heading: undefined,
    content: "Single stream recording, video screenshots."
  }, {
    heading: undefined,
    content: "`original`"
  }, {
    heading: undefined,
    content: "Original mode. This field only takes effect when subscribing to audio  (`streamTypes` is `0`)."
  }, {
    heading: undefined,
    content: "An M3U8 audio index file is generated for each UID."
  }, {
    heading: undefined,
    content: "Multiple TS audio slice files are generated for each UID."
  }, {
    heading: undefined,
    content: "none"
  }, {
    heading: undefined,
    content: "No transcoding"
  }, {
    heading: undefined,
    content: "Single-stream audio recording without transcoding."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page explains the media streaming output modes."
    }), `
`, _jsxs(_components.p, {
      children: ["When calling ", _jsx(_components.code, {
        children: "start"
      }), " to enable single-stream recording, set the output mode of the media stream in the ", _jsx(_components.code, {
        children: "recordingConfig.streamMode"
      }), " field of the ", _jsx(_components.code, {
        children: "clientRequest"
      }), ". The supported values and their description is as follows:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "streamMode"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Generate index file"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Generate slice files"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Video encoding"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Audio encoding"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Supported features"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "default"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Default mode"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Each UID generates an M3U8 audio index file and an M3U8 video index file."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Each UID generates multiple TS audio slice files and multiple TS video slice files. If VP8 encoding is used on the Web side, multiple TS audio slice files and multiple video slice files in WebM format are generated."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No transcoding"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transcode"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single stream recording and video screenshots."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "standard"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Standard mode"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Each UID generates an M3U8 audio index file, an M3U8 video index file and a merged M3U8 audio and video index file. If VP8 encoding is used on the Web side, a merged MPD audio and video index file are generated."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Each UID generates multiple TS audio slice files and multiple TS video slice files. If VP8 encoding is used on the Web side, multiple audio files in WebM format and multiple video files in WebM format are generated."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No transcoding"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transcode"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single stream recording, video screenshots."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "original"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Original mode. This field only takes effect when subscribing to audio  (", _jsx(_components.code, {
              children: "streamTypes"
            }), " is ", _jsx(_components.code, {
              children: "0"
            }), ")."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An M3U8 audio index file is generated for each UID."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multiple TS audio slice files are generated for each UID."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "none"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No transcoding"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Single-stream audio recording without transcoding."
          })]
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
