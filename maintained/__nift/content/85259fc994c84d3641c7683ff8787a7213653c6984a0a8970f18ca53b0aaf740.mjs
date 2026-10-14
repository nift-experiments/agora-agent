import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Configure the audio codec",
  description: "Configure the audio codec IoT SDK uses to stream media, and use a custom encoder."
};
export let _markdown = `

In audio streaming, the choice of an encoding algorithm affects both quality and bit rate. Your goal is to lower the required bit rate while maintaining quality at the desired level. This page shows you how to configure the audio codec IoT SDK uses to stream media in your app.

<CalloutContainer type="info">
  <CalloutDescription>
    IoT SDK does not provide audio capture. The device firmware must interface with the microphone hardware and capture raw audio data.
  </CalloutDescription>
</CalloutContainer>

## Prerequisites [#prerequisites]

In order to follow this procedure you must have:

* Implemented the basic IoT SDK functionality. See [Build from scratch](../../build-from-scratch.mdx).

## Understand the tech [#understand-the-tech]

IoT SDK offers the following built-in audio codecs:

* \`AUDIO_CODEC_TYPE_OPUS\`
* \`AUDIO_CODEC_TYPE_G722\`
* \`AUDIO_CODEC_TYPE_G711A\`
* \`AUDIO_CODEC_TYPE_G711U\`

Specify an audio codec when you join a channel. Set the sampling rate and the number of channels based on your audio quality requirements. If your app needs a custom encoding algorithm, disable use of a built-in codec and implement your own encoder.

Starting with v1.9.7, IoT SDK also supports 8 kHz AAC-LC audio. Configure the audio packet duration using \`pcm_duration\`.

### Send audio data [#send-audio-data]

#### Use a built-in codec [#use-a-built-in-codec]

Set the audio codec, sampling rate, and the number of channels in \`channel_options\` that you pass to \`agora_rtc_join_channel\`. To set these parameters, use the \`config\` object or modify the following lines in \`main()\`:

\`\`\`cpp
channel_options.audio_codec_opt.audio_codec_type = config->audio_codec_type;
channel_options.audio_codec_opt.pcm_sample_rate = config->pcm_sample_rate;
channel_options.audio_codec_opt.pcm_channel_num = config->pcm_channel_num;
\`\`\`

When you call \`agora_rtc_send_audio_data\` to send audio, set \`data_type\` to \`AUDIO_DATA_TYPE_PCM\`:

\`\`\`cpp
audio_frame_info_t info = { 0 };
info.data_type = AUDIO_DATA_TYPE_PCM;
int rval = agora_rtc_send_audio_data(g_conn_id, data, len, &info);
if (rval < 0) {
    printf("Failed to send audio data, reason: %s\\n", agora_rtc_err_2_str(rval));
    return -1;
}
\`\`\`

#### Use your own codec [#use-your-own-codec]

To use your own audio codec, set \`channel_options.audio_codec_opt.audio_codec_type\` to \`AUDIO_CODEC_DISABLED\`. When you call \`agora_rtc_send_audio_data\`, set the \`data_type\` parameter of \`audio_frame_info\` to your encoding format. This setting transmits the audio encoding format as is to the receiving end. When you disable use of a built-in audio codec, IoT SDK does not process the audio.

### Receive audio data [#receive-audio-data]

With a built-in codec, IoT SDK automatically decodes incoming audio. Use the \`on_audio_data\` callback you registered in [Listen for events](../../build-from-scratch.mdx#listen-for-events) to receive it; its \`info_ptr->data_type\` field is \`AUDIO_DATA_TYPE_PCM\`.

With your own codec, the receiving end obtains the encoded audio data and the encoding format through the same \`on_audio_data\` callback, and decodes it using a custom decoder.

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product.

### API reference [#api-reference]

* [enum audio\\_codec\\_type\\_e](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a307c5bae03eb9a318e247a97e6fb5d88)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In audio streaming, the choice of an encoding algorithm affects both quality and bit rate. Your goal is to lower the required bit rate while maintaining quality at the desired level. This page shows you how to configure the audio codec IoT SDK uses to stream media in your app."
  }, {
    heading: undefined,
    content: "IoT SDK does not provide audio capture. The device firmware must interface with the microphone hardware and capture raw audio data."
  }, {
    heading: "prerequisites",
    content: "In order to follow this procedure you must have:"
  }, {
    heading: "prerequisites",
    content: "Implemented the basic IoT SDK functionality. See Build from scratch."
  }, {
    heading: "understand-the-tech",
    content: "IoT SDK offers the following built-in audio codecs:"
  }, {
    heading: "understand-the-tech",
    content: "`AUDIO_CODEC_TYPE_OPUS`"
  }, {
    heading: "understand-the-tech",
    content: "`AUDIO_CODEC_TYPE_G722`"
  }, {
    heading: "understand-the-tech",
    content: "`AUDIO_CODEC_TYPE_G711A`"
  }, {
    heading: "understand-the-tech",
    content: "`AUDIO_CODEC_TYPE_G711U`"
  }, {
    heading: "understand-the-tech",
    content: "Specify an audio codec when you join a channel. Set the sampling rate and the number of channels based on your audio quality requirements. If your app needs a custom encoding algorithm, disable use of a built-in codec and implement your own encoder."
  }, {
    heading: "understand-the-tech",
    content: "Starting with v1.9.7, IoT SDK also supports 8 kHz AAC-LC audio. Configure the audio packet duration using `pcm_duration`."
  }, {
    heading: "use-a-built-in-codec",
    content: "Set the audio codec, sampling rate, and the number of channels in `channel_options` that you pass to `agora_rtc_join_channel`. To set these parameters, use the `config` object or modify the following lines in `main()`:"
  }, {
    heading: "use-a-built-in-codec",
    content: "When you call `agora_rtc_send_audio_data` to send audio, set `data_type` to `AUDIO_DATA_TYPE_PCM`:"
  }, {
    heading: "use-your-own-codec",
    content: "To use your own audio codec, set `channel_options.audio_codec_opt.audio_codec_type` to `AUDIO_CODEC_DISABLED`. When you call `agora_rtc_send_audio_data`, set the `data_type` parameter of `audio_frame_info` to your encoding format. This setting transmits the audio encoding format as is to the receiving end. When you disable use of a built-in audio codec, IoT SDK does not process the audio."
  }, {
    heading: "receive-audio-data",
    content: "With a built-in codec, IoT SDK automatically decodes incoming audio. Use the `on_audio_data` callback you registered in Listen for events to receive it; its `info_ptr->data_type` field is `AUDIO_DATA_TYPE_PCM`."
  }, {
    heading: "receive-audio-data",
    content: "With your own codec, the receiving end obtains the encoded audio data and the encoding format through the same `on_audio_data` callback, and decodes it using a custom decoder."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
  }, {
    heading: "api-reference",
    content: "enum audio\\_codec\\_type\\_e"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "send-audio-data",
    content: "Send audio data"
  }, {
    id: "use-a-built-in-codec",
    content: "Use a built-in codec"
  }, {
    id: "use-your-own-codec",
    content: "Use your own codec"
  }, {
    id: "receive-audio-data",
    content: "Receive audio data"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
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
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 3,
  url: "#send-audio-data",
  title: _jsx(_Fragment, {
    children: "Send audio data"
  })
}, {
  depth: 4,
  url: "#use-a-built-in-codec",
  title: _jsx(_Fragment, {
    children: "Use a built-in codec"
  })
}, {
  depth: 4,
  url: "#use-your-own-codec",
  title: _jsx(_Fragment, {
    children: "Use your own codec"
  })
}, {
  depth: 3,
  url: "#receive-audio-data",
  title: _jsx(_Fragment, {
    children: "Receive audio data"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "In audio streaming, the choice of an encoding algorithm affects both quality and bit rate. Your goal is to lower the required bit rate while maintaining quality at the desired level. This page shows you how to configure the audio codec IoT SDK uses to stream media in your app."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "IoT SDK does not provide audio capture. The device firmware must interface with the microphone hardware and capture raw audio data."
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
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "IoT SDK offers the following built-in audio codecs:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "AUDIO_CODEC_TYPE_OPUS"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "AUDIO_CODEC_TYPE_G722"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "AUDIO_CODEC_TYPE_G711A"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "AUDIO_CODEC_TYPE_G711U"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Specify an audio codec when you join a channel. Set the sampling rate and the number of channels based on your audio quality requirements. If your app needs a custom encoding algorithm, disable use of a built-in codec and implement your own encoder."
    }), `
`, _jsxs(_components.p, {
      children: ["Starting with v1.9.7, IoT SDK also supports 8 kHz AAC-LC audio. Configure the audio packet duration using ", _jsx(_components.code, {
        children: "pcm_duration"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "send-audio-data",
      children: "Send audio data"
    }), `
`, _jsx(_components.h4, {
      id: "use-a-built-in-codec",
      children: "Use a built-in codec"
    }), `
`, _jsxs(_components.p, {
      children: ["Set the audio codec, sampling rate, and the number of channels in ", _jsx(_components.code, {
        children: "channel_options"
      }), " that you pass to ", _jsx(_components.code, {
        children: "agora_rtc_join_channel"
      }), ". To set these parameters, use the ", _jsx(_components.code, {
        children: "config"
      }), " object or modify the following lines in ", _jsx(_components.code, {
        children: "main()"
      }), ":"]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_options.audio_codec_opt.audio_codec_type "
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
              children: " config->audio_codec_type;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_options.audio_codec_opt.pcm_sample_rate "
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
              children: " config->pcm_sample_rate;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_options.audio_codec_opt.pcm_channel_num "
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
              children: " config->pcm_channel_num;"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["When you call ", _jsx(_components.code, {
        children: "agora_rtc_send_audio_data"
      }), " to send audio, set ", _jsx(_components.code, {
        children: "data_type"
      }), " to ", _jsx(_components.code, {
        children: "AUDIO_DATA_TYPE_PCM"
      }), ":"]
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
              children: "audio_frame_info_t"
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
              children: " AUDIO_DATA_TYPE_PCM;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " agora_rtc_send_audio_data"
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
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
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
              children: '"Failed to send audio data, reason: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%s\\n"
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
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_err_2_str"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(rval));"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
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
`, _jsx(_components.h4, {
      id: "use-your-own-codec",
      children: "Use your own codec"
    }), `
`, _jsxs(_components.p, {
      children: ["To use your own audio codec, set ", _jsx(_components.code, {
        children: "channel_options.audio_codec_opt.audio_codec_type"
      }), " to ", _jsx(_components.code, {
        children: "AUDIO_CODEC_DISABLED"
      }), ". When you call ", _jsx(_components.code, {
        children: "agora_rtc_send_audio_data"
      }), ", set the ", _jsx(_components.code, {
        children: "data_type"
      }), " parameter of ", _jsx(_components.code, {
        children: "audio_frame_info"
      }), " to your encoding format. This setting transmits the audio encoding format as is to the receiving end. When you disable use of a built-in audio codec, IoT SDK does not process the audio."]
    }), `
`, _jsx(_components.h3, {
      id: "receive-audio-data",
      children: "Receive audio data"
    }), `
`, _jsxs(_components.p, {
      children: ["With a built-in codec, IoT SDK automatically decodes incoming audio. Use the ", _jsx(_components.code, {
        children: "on_audio_data"
      }), " callback you registered in ", _jsx(_components.a, {
        href: "../../build-from-scratch.mdx#listen-for-events",
        children: "Listen for events"
      }), " to receive it; its ", _jsx(_components.code, {
        children: "info_ptr->data_type"
      }), " field is ", _jsx(_components.code, {
        children: "AUDIO_DATA_TYPE_PCM"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["With your own codec, the receiving end obtains the encoded audio data and the encoding format through the same ", _jsx(_components.code, {
        children: "on_audio_data"
      }), " callback, and decodes it using a custom decoder."]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
    }), `
`, _jsx(_components.h3, {
      id: "api-reference",
      children: "API reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a307c5bae03eb9a318e247a97e6fb5d88",
          children: "enum audio_codec_type_e"
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
