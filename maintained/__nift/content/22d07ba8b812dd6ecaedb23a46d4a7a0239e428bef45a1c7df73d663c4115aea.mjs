import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Send and receive key frames",
  description: "Request and send key frames to resynchronize video streams."
};
export let _markdown = `

A key frame is a video frame that carries complete decoding information and does not depend on previous frames. Subsequent frames in the same group of pictures (GOP) are delta frames that only encode changes from the previous frame. When a network drops packets, losing part of a delta frame can prevent the receiver from decoding the rest of that GOP, causing video stutter, pixelation, or a green screen. Requesting a fresh key frame resets the video stream to a known state so the receiver can resynchronize and resume playback.

This page shows you how to send key frames and respond to key frame requests in your IoT SDK app.

<CalloutContainer type="info">
  <CalloutDescription>
    IoT SDK does not provide video capture or encoding. The device firmware must interface with the camera hardware, capture raw video frames, and encode them using platform-specific or customer-provided libraries.
  </CalloutDescription>
</CalloutContainer>

## Prerequisites [#prerequisites]

In order to follow this procedure you must have:

* Implemented the basic IoT SDK functionality. See [Build from scratch](../../build-from-scratch.mdx).

## Send key frames [#send-key-frames]

When you call \`agora_rtc_send_video_data\` to send a video frame, use the \`frame_type\` field of \`video_frame_info_t\` to tell the SDK whether the frame is a key frame or a delta frame:

\`\`\`cpp
video_frame_info_t info = { 0 };
info.frame_type = frame.u.video.is_key_frame ? VIDEO_FRAME_KEY : VIDEO_FRAME_DELTA;
info.frame_rate = config->send_video_frame_rate;
info.data_type = config->video_data_type;
// data is the video data
// len is the length of the video data
agora_rtc_send_video_data(g_conn_id, data, len, &info);
\`\`\`

To improve the experience for viewers who join partway through a stream or recover from packet loss, encode key frames proactively at regular intervals instead of relying only on requests.

When a sender does not send a key frame for a long time, or the key frame is lost or damaged during transmission, IoT SDK triggers the \`on_key_frame_gen_req\` callback to advise the sender to generate a key frame. In this example, you log a message when you receive the \`on_key_frame_gen_req\` callback:

\`\`\`c
static void __on_key_frame_gen_req(connection_id_t conn_id, uint32_t uid, video_stream_type_e stream_type) {
    printf("[conn-%u] Frame loss detected. Set a flag for the encoder to generate a key frame\\n", conn_id);
}
\`\`\`

## Receive key frames [#receive-key-frames]

If the receiving end encounters an error when decoding frames, call \`agora_rtc_request_video_key_frame\` to request a fresh key frame:

\`\`\`cpp
agora_rtc_request_video_key_frame(conn_id, remote_uid, stream_type);
\`\`\`

## Reference [#reference]

* [agora\\_rtc\\_send\\_video\\_data](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html)
* [agora\\_rtc\\_request\\_video\\_key\\_frame](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a74fbf2ac33a8cefce0f02de3eacc2577)
* [on\\_key\\_frame\\_gen\\_req](https://api-ref.agora.io/en/iot-sdk/linux/1.x/structagora__rtc__event__handler__t.html)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A key frame is a video frame that carries complete decoding information and does not depend on previous frames. Subsequent frames in the same group of pictures (GOP) are delta frames that only encode changes from the previous frame. When a network drops packets, losing part of a delta frame can prevent the receiver from decoding the rest of that GOP, causing video stutter, pixelation, or a green screen. Requesting a fresh key frame resets the video stream to a known state so the receiver can resynchronize and resume playback."
  }, {
    heading: undefined,
    content: "This page shows you how to send key frames and respond to key frame requests in your IoT SDK app."
  }, {
    heading: undefined,
    content: "IoT SDK does not provide video capture or encoding. The device firmware must interface with the camera hardware, capture raw video frames, and encode them using platform-specific or customer-provided libraries."
  }, {
    heading: "prerequisites",
    content: "In order to follow this procedure you must have:"
  }, {
    heading: "prerequisites",
    content: "Implemented the basic IoT SDK functionality. See Build from scratch."
  }, {
    heading: "send-key-frames",
    content: "When you call `agora_rtc_send_video_data` to send a video frame, use the `frame_type` field of `video_frame_info_t` to tell the SDK whether the frame is a key frame or a delta frame:"
  }, {
    heading: "send-key-frames",
    content: "To improve the experience for viewers who join partway through a stream or recover from packet loss, encode key frames proactively at regular intervals instead of relying only on requests."
  }, {
    heading: "send-key-frames",
    content: "When a sender does not send a key frame for a long time, or the key frame is lost or damaged during transmission, IoT SDK triggers the `on_key_frame_gen_req` callback to advise the sender to generate a key frame. In this example, you log a message when you receive the `on_key_frame_gen_req` callback:"
  }, {
    heading: "receive-key-frames",
    content: "If the receiving end encounters an error when decoding frames, call `agora_rtc_request_video_key_frame` to request a fresh key frame:"
  }, {
    heading: "reference",
    content: "agora\\_rtc\\_send\\_video\\_data"
  }, {
    heading: "reference",
    content: "agora\\_rtc\\_request\\_video\\_key\\_frame"
  }, {
    heading: "reference",
    content: "on\\_key\\_frame\\_gen\\_req"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "send-key-frames",
    content: "Send key frames"
  }, {
    id: "receive-key-frames",
    content: "Receive key frames"
  }, {
    id: "reference",
    content: "Reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#send-key-frames",
  title: _jsx(_Fragment, {
    children: "Send key frames"
  })
}, {
  depth: 2,
  url: "#receive-key-frames",
  title: _jsx(_Fragment, {
    children: "Receive key frames"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "A key frame is a video frame that carries complete decoding information and does not depend on previous frames. Subsequent frames in the same group of pictures (GOP) are delta frames that only encode changes from the previous frame. When a network drops packets, losing part of a delta frame can prevent the receiver from decoding the rest of that GOP, causing video stutter, pixelation, or a green screen. Requesting a fresh key frame resets the video stream to a known state so the receiver can resynchronize and resume playback."
    }), `
`, _jsx(_components.p, {
      children: "This page shows you how to send key frames and respond to key frame requests in your IoT SDK app."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "IoT SDK does not provide video capture or encoding. The device firmware must interface with the camera hardware, capture raw video frames, and encode them using platform-specific or customer-provided libraries."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "In order to follow this procedure you must have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Implemented the basic IoT SDK functionality. See ", _jsx(_components.a, {
          href: "../../build-from-scratch.mdx",
          children: "Build from scratch"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "send-key-frames",
      children: "Send key frames"
    }), `
`, _jsxs(_components.p, {
      children: ["When you call ", _jsx(_components.code, {
        children: "agora_rtc_send_video_data"
      }), " to send a video frame, use the ", _jsx(_components.code, {
        children: "frame_type"
      }), " field of ", _jsx(_components.code, {
        children: "video_frame_info_t"
      }), " to tell the SDK whether the frame is a key frame or a delta frame:"]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "video_frame_info_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " info "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " };"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "info.frame_type "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " frame.u.video.is_key_frame "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " VIDEO_FRAME_KEY "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " VIDEO_FRAME_DELTA;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "info.frame_rate "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " config->send_video_frame_rate;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "info.data_type "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " config->video_data_type;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// data is the video data"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// len is the length of the video data"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_send_video_data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(g_conn_id, data, len, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "info);"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "To improve the experience for viewers who join partway through a stream or recover from packet loss, encode key frames proactively at regular intervals instead of relying only on requests."
    }), `
`, _jsxs(_components.p, {
      children: ["When a sender does not send a key frame for a long time, or the key frame is lost or damaged during transmission, IoT SDK triggers the ", _jsx(_components.code, {
        children: "on_key_frame_gen_req"
      }), " callback to advise the sender to generate a key frame. In this example, you log a message when you receive the ", _jsx(_components.code, {
        children: "on_key_frame_gen_req"
      }), " callback:"]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " __on_key_frame_gen_req"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "connection_id_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " conn_id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "uint32_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " uid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", video_stream_type_e "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "stream_type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    printf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"[conn-'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%u"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "] Frame loss detected. Set a flag for the encoder to generate a key frame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\\n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", conn_id);"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "receive-key-frames",
      children: "Receive key frames"
    }), `
`, _jsxs(_components.p, {
      children: ["If the receiving end encounters an error when decoding frames, call ", _jsx(_components.code, {
        children: "agora_rtc_request_video_key_frame"
      }), " to request a fresh key frame:"]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_request_video_key_frame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(conn_id, remote_uid, stream_type);"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html",
          children: "agora_rtc_send_video_data"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a74fbf2ac33a8cefce0f02de3eacc2577",
          children: "agora_rtc_request_video_key_frame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/structagora__rtc__event__handler__t.html",
          children: "on_key_frame_gen_req"
        })
      }), `
`]
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
