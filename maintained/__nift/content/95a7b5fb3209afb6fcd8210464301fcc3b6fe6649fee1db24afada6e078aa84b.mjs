import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Synchronous playback",
  description: "Use the start timestamp of the recording, provided by Agora Cloud Recording, to achieve synchronized playbac"
};
export let _markdown = `

Synchronizing the playback of recorded files with other stream files, such as online whiteboards, courseware, or messages, is essential for recreating real-time use-cases in various applications. Whether you're building educational platforms, hosting virtual training sessions, conducting business presentations, or enabling collaborative teamwork, synchronized playback helps deliver a seamless and engaging user experience. This guide explains how to achieve synchronized playback using the start timestamp provided by Agora Cloud Recording.

## Prerequisites [#prerequisites]

To enable synchronized playback, you need a single file containing both audio and video. In individual recording mode, Cloud Recording records audio and video for each user ID separately. Use the audio and video merging script to combine audio and video into one file.

To ensure that the period when a user is absent is included and displayed as the last frame before the absence in the recorded files:

* Set \`-m\` to \`1\`
* Do not set \`-s\`

For details, see [Merge Audio and Video Files](/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files).

## Get the timestamp [#get-the-timestamp]

Use the [Agora Cloud Recording RESTful API Callback Service](../../reference/rest-api-overview) to acquire the start timestamp of the recording. The \`startUtcMs\` parameter in the \`recorder_slice_start\` event indicates the time when Agora Cloud Recording starts to record a user ID, or the start time of the first slice file for the user ID. \`startUtcMs\` is the UTC time in ms.

<CalloutContainer type="info">
  <CalloutDescription>
    Contact [support@agora.io](mailto\\:support@agora.io) to enable the callback service.
  </CalloutDescription>
</CalloutContainer>

You can also get the start timestamp by parsing the M3U8 file.

1. Get the M3U8 file

   Find the M3U8 file in the specified directory in the third-party cloud storage. You can identify the M3U8 file of a certain recording instance by its filename:

   * In composite recording mode, the name of the M3U8 file consists of the recording ID and the channel name, for example \`sid_cname.m3u8\`.
   * See [Manage Recorded Files](/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files) for the detailed naming conventions of the M3U8 file in individual recording mode.

2. Get the timestamp by parsing the M3U8 file. You can find the start timestamp at the start of each M3U8 file. For example:

   \`\`\`text
   #EXT-X-AGORA-TRACK-EVENT:EVENT=START,TRACK_TYPE=AUDIO,TIME=1568597779021
   \`\`\`

   Where:

   * \`TRACK_TYPE\` indicates the type of the recording, \`VIDEO\` or \`AUDIO\`.
   * \`Time\` is the UNIX timestamp (ms) when the recording starts for the user ID.

   If the user leaves the channel and then rejoins it, there might be several timestamps in the M3U8 file. In this case, the first timestamp in the M3U8 file is the start time of the recording.

<CalloutContainer type="info">
  <CalloutDescription>
    In individual mode, if the video stream and audio stream of a user ID start at different times, use the earlier of the two times as the start time of this recording instance.
  </CalloutDescription>
</CalloutContainer>

## Examples [#examples]

### Individual mode [#individual-mode]

Suppose that four users, A, B, C, and D, join the same channel at different times. In individual mode, the recording generates two M3U8 files and several TS/WebM files for each user ID. After merging the audio and video by using the Audio & Video Merge script, each user ID has one MP4 file. Through the RESTful API callback service or by parsing the M3U8 file, you can get the start timestamp of each user ID. You can then synchronize the playback by playing the four MP4 files and other stream files on the same timeline.

### Composite mode [#composite-mode]

Suppose that four users, A, B, C, and D, join the same channel at different times. In composite mode, the recording generates one M3U8 file and several TS files, including the audio and video of all the users in the channel. Through the RESTful API callback service or by parsing the M3U8 file, you can get the start timestamp of this recording instance. You can then synchronize the playback by playing the TS file and other stream files on the same timeline.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Synchronizing the playback of recorded files with other stream files, such as online whiteboards, courseware, or messages, is essential for recreating real-time use-cases in various applications. Whether you're building educational platforms, hosting virtual training sessions, conducting business presentations, or enabling collaborative teamwork, synchronized playback helps deliver a seamless and engaging user experience. This guide explains how to achieve synchronized playback using the start timestamp provided by Agora Cloud Recording."
  }, {
    heading: "prerequisites",
    content: "To enable synchronized playback, you need a single file containing both audio and video. In individual recording mode, Cloud Recording records audio and video for each user ID separately. Use the audio and video merging script to combine audio and video into one file."
  }, {
    heading: "prerequisites",
    content: "To ensure that the period when a user is absent is included and displayed as the last frame before the absence in the recorded files:"
  }, {
    heading: "prerequisites",
    content: "Set `-m` to `1`"
  }, {
    heading: "prerequisites",
    content: "Do not set `-s`"
  }, {
    heading: "prerequisites",
    content: "For details, see Merge Audio and Video Files."
  }, {
    heading: "get-the-timestamp",
    content: "Use the Agora Cloud Recording RESTful API Callback Service to acquire the start timestamp of the recording. The `startUtcMs` parameter in the `recorder_slice_start` event indicates the time when Agora Cloud Recording starts to record a user ID, or the start time of the first slice file for the user ID. `startUtcMs` is the UTC time in ms."
  }, {
    heading: "get-the-timestamp",
    content: "Contact support\\@agora.io to enable the callback service."
  }, {
    heading: "get-the-timestamp",
    content: "You can also get the start timestamp by parsing the M3U8 file."
  }, {
    heading: "get-the-timestamp",
    content: "Get the M3U8 file"
  }, {
    heading: "get-the-timestamp",
    content: "Find the M3U8 file in the specified directory in the third-party cloud storage. You can identify the M3U8 file of a certain recording instance by its filename:"
  }, {
    heading: "get-the-timestamp",
    content: "In composite recording mode, the name of the M3U8 file consists of the recording ID and the channel name, for example `sid_cname.m3u8`."
  }, {
    heading: "get-the-timestamp",
    content: "See Manage Recorded Files for the detailed naming conventions of the M3U8 file in individual recording mode."
  }, {
    heading: "get-the-timestamp",
    content: "Get the timestamp by parsing the M3U8 file. You can find the start timestamp at the start of each M3U8 file. For example:"
  }, {
    heading: "get-the-timestamp",
    content: "Where:"
  }, {
    heading: "get-the-timestamp",
    content: "`TRACK_TYPE` indicates the type of the recording, `VIDEO` or `AUDIO`."
  }, {
    heading: "get-the-timestamp",
    content: "`Time` is the UNIX timestamp (ms) when the recording starts for the user ID."
  }, {
    heading: "get-the-timestamp",
    content: "If the user leaves the channel and then rejoins it, there might be several timestamps in the M3U8 file. In this case, the first timestamp in the M3U8 file is the start time of the recording."
  }, {
    heading: "get-the-timestamp",
    content: "In individual mode, if the video stream and audio stream of a user ID start at different times, use the earlier of the two times as the start time of this recording instance."
  }, {
    heading: "individual-mode",
    content: "Suppose that four users, A, B, C, and D, join the same channel at different times. In individual mode, the recording generates two M3U8 files and several TS/WebM files for each user ID. After merging the audio and video by using the Audio & Video Merge script, each user ID has one MP4 file. Through the RESTful API callback service or by parsing the M3U8 file, you can get the start timestamp of each user ID. You can then synchronize the playback by playing the four MP4 files and other stream files on the same timeline."
  }, {
    heading: "composite-mode",
    content: "Suppose that four users, A, B, C, and D, join the same channel at different times. In composite mode, the recording generates one M3U8 file and several TS files, including the audio and video of all the users in the channel. Through the RESTful API callback service or by parsing the M3U8 file, you can get the start timestamp of this recording instance. You can then synchronize the playback by playing the TS file and other stream files on the same timeline."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "get-the-timestamp",
    content: "Get the timestamp"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "individual-mode",
    content: "Individual mode"
  }, {
    id: "composite-mode",
    content: "Composite mode"
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
  url: "#get-the-timestamp",
  title: _jsx(_Fragment, {
    children: "Get the timestamp"
  })
}, {
  depth: 2,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#individual-mode",
  title: _jsx(_Fragment, {
    children: "Individual mode"
  })
}, {
  depth: 3,
  url: "#composite-mode",
  title: _jsx(_Fragment, {
    children: "Composite mode"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
      children: "Synchronizing the playback of recorded files with other stream files, such as online whiteboards, courseware, or messages, is essential for recreating real-time use-cases in various applications. Whether you're building educational platforms, hosting virtual training sessions, conducting business presentations, or enabling collaborative teamwork, synchronized playback helps deliver a seamless and engaging user experience. This guide explains how to achieve synchronized playback using the start timestamp provided by Agora Cloud Recording."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To enable synchronized playback, you need a single file containing both audio and video. In individual recording mode, Cloud Recording records audio and video for each user ID separately. Use the audio and video merging script to combine audio and video into one file."
    }), `
`, _jsx(_components.p, {
      children: "To ensure that the period when a user is absent is included and displayed as the last frame before the absence in the recorded files:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Set ", _jsx(_components.code, {
          children: "-m"
        }), " to ", _jsx(_components.code, {
          children: "1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Do not set ", _jsx(_components.code, {
          children: "-s"
        })]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files",
        children: "Merge Audio and Video Files"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "get-the-timestamp",
      children: "Get the timestamp"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.a, {
        href: "../../reference/rest-api-overview",
        children: "Agora Cloud Recording RESTful API Callback Service"
      }), " to acquire the start timestamp of the recording. The ", _jsx(_components.code, {
        children: "startUtcMs"
      }), " parameter in the ", _jsx(_components.code, {
        children: "recorder_slice_start"
      }), " event indicates the time when Agora Cloud Recording starts to record a user ID, or the start time of the first slice file for the user ID. ", _jsx(_components.code, {
        children: "startUtcMs"
      }), " is the UTC time in ms."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), " to enable the callback service."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "You can also get the start timestamp by parsing the M3U8 file."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Get the M3U8 file"
        }), `
`, _jsx(_components.p, {
          children: "Find the M3U8 file in the specified directory in the third-party cloud storage. You can identify the M3U8 file of a certain recording instance by its filename:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["In composite recording mode, the name of the M3U8 file consists of the recording ID and the channel name, for example ", _jsx(_components.code, {
              children: "sid_cname.m3u8"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["See ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files",
              children: "Manage Recorded Files"
            }), " for the detailed naming conventions of the M3U8 file in individual recording mode."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Get the timestamp by parsing the M3U8 file. You can find the start timestamp at the start of each M3U8 file. For example:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "#EXT-X-AGORA-TRACK-EVENT:EVENT=START,TRACK_TYPE=AUDIO,TIME=1568597779021"
                })
              })
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "Where:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TRACK_TYPE"
            }), " indicates the type of the recording, ", _jsx(_components.code, {
              children: "VIDEO"
            }), " or ", _jsx(_components.code, {
              children: "AUDIO"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Time"
            }), " is the UNIX timestamp (ms) when the recording starts for the user ID."]
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: "If the user leaves the channel and then rejoins it, there might be several timestamps in the M3U8 file. In this case, the first timestamp in the M3U8 file is the start time of the recording."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "In individual mode, if the video stream and audio stream of a user ID start at different times, use the earlier of the two times as the start time of this recording instance."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), `
`, _jsx(_components.h3, {
      id: "individual-mode",
      children: "Individual mode"
    }), `
`, _jsx(_components.p, {
      children: "Suppose that four users, A, B, C, and D, join the same channel at different times. In individual mode, the recording generates two M3U8 files and several TS/WebM files for each user ID. After merging the audio and video by using the Audio & Video Merge script, each user ID has one MP4 file. Through the RESTful API callback service or by parsing the M3U8 file, you can get the start timestamp of each user ID. You can then synchronize the playback by playing the four MP4 files and other stream files on the same timeline."
    }), `
`, _jsx(_components.h3, {
      id: "composite-mode",
      children: "Composite mode"
    }), `
`, _jsx(_components.p, {
      children: "Suppose that four users, A, B, C, and D, join the same channel at different times. In composite mode, the recording generates one M3U8 file and several TS files, including the audio and video of all the users in the channel. Through the RESTful API callback service or by parsing the M3U8 file, you can get the start timestamp of this recording instance. You can then synchronize the playback by playing the TS file and other stream files on the same timeline."
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
