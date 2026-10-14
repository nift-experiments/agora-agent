import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What is the relationship between the old and new callbacks of Media Push?"
};
export let _markdown = `

Agora provides two sets of callbacks for you to monitor Media Push:

* Old callbacks: \`onStreamPublished\` and \`onStreamUnpublished\`.
* New callbacks: \`onRtmpStreamingStateChanged\` and \`onRtmpStreamingEvent\`.

Agora has deprecated the old callbacks and recommends that you use the new callbacks. The old callbacks are still functional, however. You can choose the most appropriate set of callbacks to use according to your scenario and code logic. The relationship between the old and new callbacks is detailed in the following table:

| New callback                                                                                                 | Old callback                                                                                    |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_OK (0)                              | (Since the first release) onStreamPublished.ERR\\_OK (0)                                         |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_INVALID\\_ARGUMENT (1)               | (Since the first release) onStreamPublished.ERR\\_INVALID\\_ARGUMENT (2)                          |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_ENCRYPTED\\_STREAM\\_NOT\\_ALLOWED (2) | (Since the first release) onStreamPublished.ERR\\_ENCRYPTED\\_STREAM\\_NOT\\_ALLOWED\\_PUBLISH (130) |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_CONNECTION\\_TIMEOUT (3)             | (Since the first release) onStreamPublished.ERR\\_TIMEDOUT (10)                                  |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_INTERNAL\\_SERVER\\_ERROR (4)         | (Since the first release) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_INTERNAL\\_SERVER\\_ERROR (154) |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_INTERNAL\\_SERVER\\_ERROR (4)         | (Since the first release) onStreamPublished.ERR\\_FAILED (1)                                     |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_RTMP\\_SERVER\\_ERROR (5)             | (Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_CDN\\_ERROR (151)                         |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_REACH\\_LIMIT (7)                    | (Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_NUM\\_REACH\\_LIMIT (152)                  |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_NOT\\_AUTHORIZED (8)                 | (Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_NOT\\_AUTHORIZED (153)                    |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_STREAM\\_NOT\\_FOUND (9)              | (Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_NOT\\_FOUND (155)                         |
| (Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_FORMAT\\_NOT\\_SUPPORTED (10)         | (Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_FORMAT\\_NOT\\_SUPPORTED (156)             |
| (Since v3.6.0) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_NOT\\_BROADCASTER (11)               | No corresponding callback                                                                       |
| (Since v3.6.0) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_TRANSCODING\\_NO\\_MIX\\_STREAM (13)   | No corresponding callback                                                                       |
| (Since v3.6.0) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_NET\\_DOWN (14)                      | No corresponding callback                                                                       |
| (Since v3.6.0) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_INVALID\\_APPID (15)                 | No corresponding callback                                                                       |
| (Since v3.4.5) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_UNPUBLISH\\_ERROR\\_OK (100)                          | (Since the first release) onStreamUnpublished                                                   |
| (Since v3.1.0) onRtmpStreamingEvent.RTMP\\_STREAMING\\_EVENT\\_FAILED\\_LOAD\\_IMAGE (1)                          | No corresponding callback                                                                       |
| (Since v3.4.5) onRtmpStreamingEvent.RTMP\\_STREAMING\\_EVENT\\_URL\\_ALREADY\\_IN\\_USE (2)                        | (Since the first release) onStreamPublished.ERR\\_ALREADY\\_IN\\_USE (19)                          |
| (Since v3.6.0) onRtmpStreamingEvent.RTMP\\_STREAMING\\_EVENT\\_ADVANCED\\_FEATURE\\_NOT\\_SUPPORT (3)              | No corresponding callback                                                                       |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora provides two sets of callbacks for you to monitor Media Push:"
  }, {
    heading: undefined,
    content: "Old callbacks: `onStreamPublished` and `onStreamUnpublished`."
  }, {
    heading: undefined,
    content: "New callbacks: `onRtmpStreamingStateChanged` and `onRtmpStreamingEvent`."
  }, {
    heading: undefined,
    content: "Agora has deprecated the old callbacks and recommends that you use the new callbacks. The old callbacks are still functional, however. You can choose the most appropriate set of callbacks to use according to your scenario and code logic. The relationship between the old and new callbacks is detailed in the following table:"
  }, {
    heading: undefined,
    content: "New callback"
  }, {
    heading: undefined,
    content: "Old callback"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_OK (0)"
  }, {
    heading: undefined,
    content: "(Since the first release) onStreamPublished.ERR\\_OK (0)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_INVALID\\_ARGUMENT (1)"
  }, {
    heading: undefined,
    content: "(Since the first release) onStreamPublished.ERR\\_INVALID\\_ARGUMENT (2)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_ENCRYPTED\\_STREAM\\_NOT\\_ALLOWED (2)"
  }, {
    heading: undefined,
    content: "(Since the first release) onStreamPublished.ERR\\_ENCRYPTED\\_STREAM\\_NOT\\_ALLOWED\\_PUBLISH (130)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_CONNECTION\\_TIMEOUT (3)"
  }, {
    heading: undefined,
    content: "(Since the first release) onStreamPublished.ERR\\_TIMEDOUT (10)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_INTERNAL\\_SERVER\\_ERROR (4)"
  }, {
    heading: undefined,
    content: "(Since the first release) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_INTERNAL\\_SERVER\\_ERROR (154)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_INTERNAL\\_SERVER\\_ERROR (4)"
  }, {
    heading: undefined,
    content: "(Since the first release) onStreamPublished.ERR\\_FAILED (1)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_RTMP\\_SERVER\\_ERROR (5)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_CDN\\_ERROR (151)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_REACH\\_LIMIT (7)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_NUM\\_REACH\\_LIMIT (152)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_NOT\\_AUTHORIZED (8)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_NOT\\_AUTHORIZED (153)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_STREAM\\_NOT\\_FOUND (9)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_NOT\\_FOUND (155)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_FORMAT\\_NOT\\_SUPPORTED (10)"
  }, {
    heading: undefined,
    content: "(Since v2.4.1) onStreamPublished.ERR\\_PUBLISH\\_STREAM\\_FORMAT\\_NOT\\_SUPPORTED (156)"
  }, {
    heading: undefined,
    content: "(Since v3.6.0) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_NOT\\_BROADCASTER (11)"
  }, {
    heading: undefined,
    content: "No corresponding callback"
  }, {
    heading: undefined,
    content: "(Since v3.6.0) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_TRANSCODING\\_NO\\_MIX\\_STREAM (13)"
  }, {
    heading: undefined,
    content: "No corresponding callback"
  }, {
    heading: undefined,
    content: "(Since v3.6.0) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_NET\\_DOWN (14)"
  }, {
    heading: undefined,
    content: "No corresponding callback"
  }, {
    heading: undefined,
    content: "(Since v3.6.0) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_PUBLISH\\_ERROR\\_INVALID\\_APPID (15)"
  }, {
    heading: undefined,
    content: "No corresponding callback"
  }, {
    heading: undefined,
    content: "(Since v3.4.5) onRtmpStreamingStateChanged.RTMP\\_STREAM\\_UNPUBLISH\\_ERROR\\_OK (100)"
  }, {
    heading: undefined,
    content: "(Since the first release) onStreamUnpublished"
  }, {
    heading: undefined,
    content: "(Since v3.1.0) onRtmpStreamingEvent.RTMP\\_STREAMING\\_EVENT\\_FAILED\\_LOAD\\_IMAGE (1)"
  }, {
    heading: undefined,
    content: "No corresponding callback"
  }, {
    heading: undefined,
    content: "(Since v3.4.5) onRtmpStreamingEvent.RTMP\\_STREAMING\\_EVENT\\_URL\\_ALREADY\\_IN\\_USE (2)"
  }, {
    heading: undefined,
    content: "(Since the first release) onStreamPublished.ERR\\_ALREADY\\_IN\\_USE (19)"
  }, {
    heading: undefined,
    content: "(Since v3.6.0) onRtmpStreamingEvent.RTMP\\_STREAMING\\_EVENT\\_ADVANCED\\_FEATURE\\_NOT\\_SUPPORT (3)"
  }, {
    heading: undefined,
    content: "No corresponding callback"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora provides two sets of callbacks for you to monitor Media Push:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Old callbacks: ", _jsx(_components.code, {
          children: "onStreamPublished"
        }), " and ", _jsx(_components.code, {
          children: "onStreamUnpublished"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["New callbacks: ", _jsx(_components.code, {
          children: "onRtmpStreamingStateChanged"
        }), " and ", _jsx(_components.code, {
          children: "onRtmpStreamingEvent"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Agora has deprecated the old callbacks and recommends that you use the new callbacks. The old callbacks are still functional, however. You can choose the most appropriate set of callbacks to use according to your scenario and code logic. The relationship between the old and new callbacks is detailed in the following table:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "New callback"
          }), _jsx(_components.th, {
            children: "Old callback"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_OK (0)"
          }), _jsx(_components.td, {
            children: "(Since the first release) onStreamPublished.ERR_OK (0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_INVALID_ARGUMENT (1)"
          }), _jsx(_components.td, {
            children: "(Since the first release) onStreamPublished.ERR_INVALID_ARGUMENT (2)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_ENCRYPTED_STREAM_NOT_ALLOWED (2)"
          }), _jsx(_components.td, {
            children: "(Since the first release) onStreamPublished.ERR_ENCRYPTED_STREAM_NOT_ALLOWED_PUBLISH (130)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_CONNECTION_TIMEOUT (3)"
          }), _jsx(_components.td, {
            children: "(Since the first release) onStreamPublished.ERR_TIMEDOUT (10)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_INTERNAL_SERVER_ERROR (4)"
          }), _jsx(_components.td, {
            children: "(Since the first release) onStreamPublished.ERR_PUBLISH_STREAM_INTERNAL_SERVER_ERROR (154)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_INTERNAL_SERVER_ERROR (4)"
          }), _jsx(_components.td, {
            children: "(Since the first release) onStreamPublished.ERR_FAILED (1)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_RTMP_SERVER_ERROR (5)"
          }), _jsx(_components.td, {
            children: "(Since v2.4.1) onStreamPublished.ERR_PUBLISH_STREAM_CDN_ERROR (151)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_REACH_LIMIT (7)"
          }), _jsx(_components.td, {
            children: "(Since v2.4.1) onStreamPublished.ERR_PUBLISH_STREAM_NUM_REACH_LIMIT (152)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_NOT_AUTHORIZED (8)"
          }), _jsx(_components.td, {
            children: "(Since v2.4.1) onStreamPublished.ERR_PUBLISH_STREAM_NOT_AUTHORIZED (153)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_STREAM_NOT_FOUND (9)"
          }), _jsx(_components.td, {
            children: "(Since v2.4.1) onStreamPublished.ERR_PUBLISH_STREAM_NOT_FOUND (155)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v2.4.1) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_FORMAT_NOT_SUPPORTED (10)"
          }), _jsx(_components.td, {
            children: "(Since v2.4.1) onStreamPublished.ERR_PUBLISH_STREAM_FORMAT_NOT_SUPPORTED (156)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v3.6.0) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_NOT_BROADCASTER (11)"
          }), _jsx(_components.td, {
            children: "No corresponding callback"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v3.6.0) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_TRANSCODING_NO_MIX_STREAM (13)"
          }), _jsx(_components.td, {
            children: "No corresponding callback"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v3.6.0) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_NET_DOWN (14)"
          }), _jsx(_components.td, {
            children: "No corresponding callback"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v3.6.0) onRtmpStreamingStateChanged.RTMP_STREAM_PUBLISH_ERROR_INVALID_APPID (15)"
          }), _jsx(_components.td, {
            children: "No corresponding callback"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v3.4.5) onRtmpStreamingStateChanged.RTMP_STREAM_UNPUBLISH_ERROR_OK (100)"
          }), _jsx(_components.td, {
            children: "(Since the first release) onStreamUnpublished"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v3.1.0) onRtmpStreamingEvent.RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE (1)"
          }), _jsx(_components.td, {
            children: "No corresponding callback"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v3.4.5) onRtmpStreamingEvent.RTMP_STREAMING_EVENT_URL_ALREADY_IN_USE (2)"
          }), _jsx(_components.td, {
            children: "(Since the first release) onStreamPublished.ERR_ALREADY_IN_USE (19)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(Since v3.6.0) onRtmpStreamingEvent.RTMP_STREAMING_EVENT_ADVANCED_FEATURE_NOT_SUPPORT (3)"
          }), _jsx(_components.td, {
            children: "No corresponding callback"
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
