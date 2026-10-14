import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Unit pricing and billing model for Media Gateway streaming and transcoding."
};
export let _markdown = `

This page explains how Agora calculates your monthly bill for use of Media Gateway. If you have signed a contract with Agora, the billing terms and conditions within that contract take precedence.

## Cost structure [#cost-structure]

Agora Media Gateway usage incurs fees when transcoding and streaming media streams to RTC SDK channels. Those fees are not included in the 10,000 free minutes per month policy.

### Streaming without transcoding [#streaming-without-transcoding]

If the video stream is not transcoded before streaming, only the audio and video streaming fee is charged.

*Video streaming fee without transcoding = video streaming unit price without transcoding x video streaming duration*

### Streaming with transcoding [#streaming-with-transcoding]

* **Pure audio transcoding and streaming**:
  *Audio transcoding and streaming fees = audio unit price x duration*
* **Video transcoding and streaming**:
  *Video transcoding and streaming fees = video transcoding and streaming unit price x duration*

<CalloutContainer type="info">
  <CalloutDescription>
    The audio stream in the channel is transcoded and pushed by default. If a channel has both audio and video streams, the fee is calculated based on the video stream.
  </CalloutDescription>
</CalloutContainer>

### Unit price [#unit-price]

| Usage                                | Unit price (US$) |
| ------------------------------------ | ---------------: |
| Pure audio transcoding and streaming |    0.99/1000 min |
| Video streaming with transcoding     |    5.99/1000 min |
| Video streaming without transcoding  |    2.99/1000 min |

### Streaming duration [#streaming-duration]

For each streaming process, Agora monitors when you start and stop streaming. It calculates the duration in seconds from the moment streaming begins to when it ends and charges a streaming fee based on that time.

<CalloutContainer type="info">
  <CalloutDescription>
    The duration is displayed in seconds in Agora Console and in minutes on the billing invoice. If the duration is less than one second or one minute, it is rounded up to one second or one minute, respectively.
  </CalloutDescription>
</CalloutContainer>

Depending on whether the video stream is pushed, the push duration is divided into:

* **Video streaming duration**: The duration during which the streaming server handles video
* **Audio streaming duration**: The time during which only the audio stream is transmitted by the streaming server

## Billing examples [#billing-examples]

### Video streaming [#video-streaming]

Suppose that you use Media Gateway to push a video stream that does not require transcoding in a channel, and the push duration is 3000 minutes.

The cost of video streaming without transcoding is \`2.99 x 3000 / 1000 = 8.97 USD\`.

### Pure audio transcoding and streaming [#pure-audio-transcoding-and-streaming]

Suppose that you use Media Gateway to push a pure audio stream in a channel, and the push duration is 2000 minutes.

The pure audio transcoding and streaming cost is \`0.99 x 2000 / 1000 = 1.98 USD\`.

### Video transcoding and streaming [#video-transcoding-and-streaming]

Suppose that you use Media Gateway to push a video stream with transcoding in a channel. The transcoded stream duration is 2000 minutes and the video resolution is 1920 x 1080.

The cost of video transcoding and streaming is \`5.99 x 2000 / 1000 = 11.98 USD\`.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains how Agora calculates your monthly bill for use of Media Gateway. If you have signed a contract with Agora, the billing terms and conditions within that contract take precedence."
  }, {
    heading: "cost-structure",
    content: "Agora Media Gateway usage incurs fees when transcoding and streaming media streams to RTC SDK channels. Those fees are not included in the 10,000 free minutes per month policy."
  }, {
    heading: "streaming-without-transcoding",
    content: "If the video stream is not transcoded before streaming, only the audio and video streaming fee is charged."
  }, {
    heading: "streaming-without-transcoding",
    content: "*Video streaming fee without transcoding = video streaming unit price without transcoding x video streaming duration*"
  }, {
    heading: "streaming-with-transcoding",
    content: `**Pure audio transcoding and streaming**:
*Audio transcoding and streaming fees = audio unit price x duration*`
  }, {
    heading: "streaming-with-transcoding",
    content: `**Video transcoding and streaming**:
*Video transcoding and streaming fees = video transcoding and streaming unit price x duration*`
  }, {
    heading: "streaming-with-transcoding",
    content: "The audio stream in the channel is transcoded and pushed by default. If a channel has both audio and video streams, the fee is calculated based on the video stream."
  }, {
    heading: "unit-price",
    content: "Usage"
  }, {
    heading: "unit-price",
    content: "Unit price (US$)"
  }, {
    heading: "unit-price",
    content: "Pure audio transcoding and streaming"
  }, {
    heading: "unit-price",
    content: "0.99/1000 min"
  }, {
    heading: "unit-price",
    content: "Video streaming with transcoding"
  }, {
    heading: "unit-price",
    content: "5.99/1000 min"
  }, {
    heading: "unit-price",
    content: "Video streaming without transcoding"
  }, {
    heading: "unit-price",
    content: "2.99/1000 min"
  }, {
    heading: "streaming-duration",
    content: "For each streaming process, Agora monitors when you start and stop streaming. It calculates the duration in seconds from the moment streaming begins to when it ends and charges a streaming fee based on that time."
  }, {
    heading: "streaming-duration",
    content: "The duration is displayed in seconds in Agora Console and in minutes on the billing invoice. If the duration is less than one second or one minute, it is rounded up to one second or one minute, respectively."
  }, {
    heading: "streaming-duration",
    content: "Depending on whether the video stream is pushed, the push duration is divided into:"
  }, {
    heading: "streaming-duration",
    content: "**Video streaming duration**: The duration during which the streaming server handles video"
  }, {
    heading: "streaming-duration",
    content: "**Audio streaming duration**: The time during which only the audio stream is transmitted by the streaming server"
  }, {
    heading: "video-streaming",
    content: "Suppose that you use Media Gateway to push a video stream that does not require transcoding in a channel, and the push duration is 3000 minutes."
  }, {
    heading: "video-streaming",
    content: "The cost of video streaming without transcoding is `2.99 x 3000 / 1000 = 8.97 USD`."
  }, {
    heading: "pure-audio-transcoding-and-streaming",
    content: "Suppose that you use Media Gateway to push a pure audio stream in a channel, and the push duration is 2000 minutes."
  }, {
    heading: "pure-audio-transcoding-and-streaming",
    content: "The pure audio transcoding and streaming cost is `0.99 x 2000 / 1000 = 1.98 USD`."
  }, {
    heading: "video-transcoding-and-streaming",
    content: "Suppose that you use Media Gateway to push a video stream with transcoding in a channel. The transcoded stream duration is 2000 minutes and the video resolution is 1920 x 1080."
  }, {
    heading: "video-transcoding-and-streaming",
    content: "The cost of video transcoding and streaming is `5.99 x 2000 / 1000 = 11.98 USD`."
  }],
  headings: [{
    id: "cost-structure",
    content: "Cost structure"
  }, {
    id: "streaming-without-transcoding",
    content: "Streaming without transcoding"
  }, {
    id: "streaming-with-transcoding",
    content: "Streaming with transcoding"
  }, {
    id: "unit-price",
    content: "Unit price"
  }, {
    id: "streaming-duration",
    content: "Streaming duration"
  }, {
    id: "billing-examples",
    content: "Billing examples"
  }, {
    id: "video-streaming",
    content: "Video streaming"
  }, {
    id: "pure-audio-transcoding-and-streaming",
    content: "Pure audio transcoding and streaming"
  }, {
    id: "video-transcoding-and-streaming",
    content: "Video transcoding and streaming"
  }]
};
export let toc = [{
  depth: 2,
  url: "#cost-structure",
  title: _jsx(_Fragment, {
    children: "Cost structure"
  })
}, {
  depth: 3,
  url: "#streaming-without-transcoding",
  title: _jsx(_Fragment, {
    children: "Streaming without transcoding"
  })
}, {
  depth: 3,
  url: "#streaming-with-transcoding",
  title: _jsx(_Fragment, {
    children: "Streaming with transcoding"
  })
}, {
  depth: 3,
  url: "#unit-price",
  title: _jsx(_Fragment, {
    children: "Unit price"
  })
}, {
  depth: 3,
  url: "#streaming-duration",
  title: _jsx(_Fragment, {
    children: "Streaming duration"
  })
}, {
  depth: 2,
  url: "#billing-examples",
  title: _jsx(_Fragment, {
    children: "Billing examples"
  })
}, {
  depth: 3,
  url: "#video-streaming",
  title: _jsx(_Fragment, {
    children: "Video streaming"
  })
}, {
  depth: 3,
  url: "#pure-audio-transcoding-and-streaming",
  title: _jsx(_Fragment, {
    children: "Pure audio transcoding and streaming"
  })
}, {
  depth: 3,
  url: "#video-transcoding-and-streaming",
  title: _jsx(_Fragment, {
    children: "Video transcoding and streaming"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page explains how Agora calculates your monthly bill for use of Media Gateway. If you have signed a contract with Agora, the billing terms and conditions within that contract take precedence."
    }), `
`, _jsx(_components.h2, {
      id: "cost-structure",
      children: "Cost structure"
    }), `
`, _jsx(_components.p, {
      children: "Agora Media Gateway usage incurs fees when transcoding and streaming media streams to RTC SDK channels. Those fees are not included in the 10,000 free minutes per month policy."
    }), `
`, _jsx(_components.h3, {
      id: "streaming-without-transcoding",
      children: "Streaming without transcoding"
    }), `
`, _jsx(_components.p, {
      children: "If the video stream is not transcoded before streaming, only the audio and video streaming fee is charged."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: "Video streaming fee without transcoding = video streaming unit price without transcoding x video streaming duration"
      })
    }), `
`, _jsx(_components.h3, {
      id: "streaming-with-transcoding",
      children: "Streaming with transcoding"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Pure audio transcoding and streaming"
        }), `:
`, _jsx(_components.em, {
          children: "Audio transcoding and streaming fees = audio unit price x duration"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Video transcoding and streaming"
        }), `:
`, _jsx(_components.em, {
          children: "Video transcoding and streaming fees = video transcoding and streaming unit price x duration"
        })]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The audio stream in the channel is transcoded and pushed by default. If a channel has both audio and video streams, the fee is calculated based on the video stream."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "unit-price",
      children: "Unit price"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Usage"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Unit price (US$)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Pure audio transcoding and streaming"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.99/1000 min"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video streaming with transcoding"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "5.99/1000 min"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video streaming without transcoding"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "2.99/1000 min"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "streaming-duration",
      children: "Streaming duration"
    }), `
`, _jsx(_components.p, {
      children: "For each streaming process, Agora monitors when you start and stop streaming. It calculates the duration in seconds from the moment streaming begins to when it ends and charges a streaming fee based on that time."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The duration is displayed in seconds in Agora Console and in minutes on the billing invoice. If the duration is less than one second or one minute, it is rounded up to one second or one minute, respectively."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Depending on whether the video stream is pushed, the push duration is divided into:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Video streaming duration"
        }), ": The duration during which the streaming server handles video"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Audio streaming duration"
        }), ": The time during which only the audio stream is transmitted by the streaming server"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "billing-examples",
      children: "Billing examples"
    }), `
`, _jsx(_components.h3, {
      id: "video-streaming",
      children: "Video streaming"
    }), `
`, _jsx(_components.p, {
      children: "Suppose that you use Media Gateway to push a video stream that does not require transcoding in a channel, and the push duration is 3000 minutes."
    }), `
`, _jsxs(_components.p, {
      children: ["The cost of video streaming without transcoding is ", _jsx(_components.code, {
        children: "2.99 x 3000 / 1000 = 8.97 USD"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "pure-audio-transcoding-and-streaming",
      children: "Pure audio transcoding and streaming"
    }), `
`, _jsx(_components.p, {
      children: "Suppose that you use Media Gateway to push a pure audio stream in a channel, and the push duration is 2000 minutes."
    }), `
`, _jsxs(_components.p, {
      children: ["The pure audio transcoding and streaming cost is ", _jsx(_components.code, {
        children: "0.99 x 2000 / 1000 = 1.98 USD"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "video-transcoding-and-streaming",
      children: "Video transcoding and streaming"
    }), `
`, _jsx(_components.p, {
      children: "Suppose that you use Media Gateway to push a video stream with transcoding in a channel. The transcoded stream duration is 2000 minutes and the video resolution is 1920 x 1080."
    }), `
`, _jsxs(_components.p, {
      children: ["The cost of video transcoding and streaming is ", _jsx(_components.code, {
        children: "5.99 x 2000 / 1000 = 11.98 USD"
      }), "."]
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
