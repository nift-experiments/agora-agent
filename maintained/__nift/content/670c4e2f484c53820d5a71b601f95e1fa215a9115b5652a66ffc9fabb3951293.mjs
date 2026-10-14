import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Individual audio non-transcoding recording",
  description: "Configure individual audio non-transcoding recording with the Cloud Recording REST API."
};
export let _markdown = `

When recording audio only (\`streamTypes\` is \`0\`) in [individual recording mode](/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode), you can choose whether to use transcoding recording or non-transcoding recording through simple parameter settings. The differences between the two are as follows:

|                                          | Individual audio recording                                                                                   | Individual audio non-transcoding recording                                                                                                                                                                            |
| :--------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Whether to transcode when encoding audio | Yes.                                                                                                         | No.                                                                                                                                                                                                                   |
| Audio profile                            | The sample rate, number of audio channels, and bitrate are fixed at 48 kHz, mono, and 48 Kbps, respectively. | The sample rate, number of audio channels, and bitrate are determined by the [AudioProfile](/en/api-reference/api-ref/cloud-recording#transcodingconfig) configuration of the streaming sender.                       |
| Audio codec                              | LC-AAC.                                                                                                      | Determined by the [AudioProfile](/en/api-reference/api-ref/cloud-recording#transcodingconfig) configuration set by the streaming sender.                                                                              |
| Recorded files                           | One M3U8 file and several TS files are generated per user ID.                                                | The same as Individual transcoding recording. However, when the user calls \`mute\`, \`disable\`, or \`leaveChannel\`, the audio recording is stopped immediately, and there is no recorded data for silenced audio frames. |
| Player compatibility                     | Use a player that supports the HLS protocol to play recorded files.                                          | The audio codec format is determined by the [AudioProfile](/en/api-reference/api-ref/cloud-recording#transcodingconfig) configured by the streaming sender, and player compatibility varies by audio codec.           |

## Implement audio individual non-transcoding recording [#implement-audio-individual-non-transcoding-recording]

### Get a resource ID [#get-a-resource-id]

Before recording, call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method to apply for a resource ID.

#### \`acquire\` request over HTTPS [#acquire-request-over-https]

* Request URL:

  \`\`\`html
  https://api.agora.io/v1/apps/<your-appid>/cloud_recording/acquire
  \`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [Authenticate REST calls](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

\`\`\`json
{
  "cname": "httpClient463224",
  "uid": "527841",
  "clientRequest": {
    "resourceExpiredHour": 24,
    "scene": 0
  }
}
\`\`\`

### Start recording [#start-recording]

To enable individual recording mode, set \`mode\` to \`individual\` when calling [\`start\`](/en/api-reference/api-ref/cloud-recording#start).

Configure the following parameters in \`clientRequest\` for audio individual non-transcoding recording:

| Parameter                                                                                  | Description                                                                                                                            | Note                                 |
| :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| [\`token\`](../../reference/glossary#token)                                                  | String. The dynamic key used for the channel to record.                                                                                | Required if the channel uses a token |
| [\`recordingConfig\`](/en/api-reference/api-ref/cloud-recording#recordingconfig)             | JSON. Configures stream subscription, transcoding, and the profile of the output audio and video.                                      | Required                             |
| [\`recordingConfig.streamTypes\`](/en/api-reference/api-ref/cloud-recording#recordingconfig) | Number. The type of the media stream to subscribe to. Set this to \`0\` for audio individual non-transcoding recording.                  | Required                             |
| [\`recordingConfig.streamMode\`](/en/api-reference/api-ref/cloud-recording#recordingconfig)  | String. The output mode of the media stream in individual mode. Set this to \`original\` for audio individual non-transcoding recording. | Required                             |
| [\`storageConfig\`](/en/api-reference/api-ref/cloud-recording#storageconfig)                 | JSON. Configures the third-party cloud storage.                                                                                        | Required                             |

#### \`start\` request over HTTPS [#start-request-over-https]

* Request URL:

  \`\`\`html
  https://api.agora.io/v1/apps/<your-appid>/cloud_recording/resourceid/<resourceid>/mode/individual/start
  \`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [Authenticate REST calls](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

  \`\`\`json
  {
    "uid": "527841",
    "cname": "httpClient463224",
    "clientRequest": {
      "token": "<token if any>",
      "recordingConfig": {
        "maxIdleTime": 30,
        "streamTypes": 0,
        "streamMode": "original",
        "channelType": 0,
        "subscribeAudioUids": [
          "123",
          "456"
        ],
        "subscribeUidGroup": 0
      },
      "storageConfig": {
        "accessKey": "xxxxx",
        "region": 3,
        "bucket": "xxxxx",
        "secretKey": "xxxxx",
        "vendor": 2,
        "fileNamePrefix": [
          "directory1",
          "directory2"
        ]
      }
    }
  }
  \`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    To configure the \`vendor\` and \`region\` parameters, see [Third-party cloud storage regions](/en/realtime-media/cloud-recording/reference/region-vendor).
  </CalloutDescription>
</CalloutContainer>

When the user who publishes the stream mutes or leaves the channel, the recording service immediately slices the audio file and stops recording.

### Stop recording [#stop-recording]

When a recording finishes, call [\`stop\`](/en/api-reference/api-ref/cloud-recording#stop) to leave the channel and stop recording. To use Agora Cloud Recording again, call the \`acquire\` method for a new resource ID.

#### \`stop\` request over HTTPS [#stop-request-over-https]

* The request URL is:

  \`\`\`html
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/individual/stop
  \`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [Authenticate REST calls](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

  \`\`\`json
  {
    "cname": "httpClient463224",
    "uid": "527841",
    "clientRequest": {
      "resourceExpiredHour": 24,
      "scene": 0
    }
  }
  \`\`\`

## Recorded files [#recorded-files]

For file naming rules, see [Manage recording files](/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files). You can play M3U8 audio files, or you can use the [Agora Format Converter Script](https://download.agora.io/acrsdk/release/cloud_recording_tools.v3.8.0.69-202302061216-release-prod.tar.gz) to merge and convert all TS files of the specified user ID into one MP3/M4A/AAC audio file for playback. See [Merge audio and video files after an individual recording](/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files) for details.

## Callback events [#callback-events]

You can subscribe to the related callback events of the cloud recording service (\`serviceType\` is \`0\`) before you start an individual audio non-transcoding recording. For details, see [Callback Events](../../reference/rest-api-overview#callback-events).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When recording audio only (`streamTypes` is `0`) in individual recording mode, you can choose whether to use transcoding recording or non-transcoding recording through simple parameter settings. The differences between the two are as follows:"
  }, {
    heading: undefined,
    content: "Individual audio recording"
  }, {
    heading: undefined,
    content: "Individual audio non-transcoding recording"
  }, {
    heading: undefined,
    content: "Whether to transcode when encoding audio"
  }, {
    heading: undefined,
    content: "Yes."
  }, {
    heading: undefined,
    content: "No."
  }, {
    heading: undefined,
    content: "Audio profile"
  }, {
    heading: undefined,
    content: "The sample rate, number of audio channels, and bitrate are fixed at 48 kHz, mono, and 48 Kbps, respectively."
  }, {
    heading: undefined,
    content: "The sample rate, number of audio channels, and bitrate are determined by the AudioProfile configuration of the streaming sender."
  }, {
    heading: undefined,
    content: "Audio codec"
  }, {
    heading: undefined,
    content: "LC-AAC."
  }, {
    heading: undefined,
    content: "Determined by the AudioProfile configuration set by the streaming sender."
  }, {
    heading: undefined,
    content: "Recorded files"
  }, {
    heading: undefined,
    content: "One M3U8 file and several TS files are generated per user ID."
  }, {
    heading: undefined,
    content: "The same as Individual transcoding recording. However, when the user calls `mute`, `disable`, or `leaveChannel`, the audio recording is stopped immediately, and there is no recorded data for silenced audio frames."
  }, {
    heading: undefined,
    content: "Player compatibility"
  }, {
    heading: undefined,
    content: "Use a player that supports the HLS protocol to play recorded files."
  }, {
    heading: undefined,
    content: "The audio codec format is determined by the AudioProfile configured by the streaming sender, and player compatibility varies by audio codec."
  }, {
    heading: "get-a-resource-id",
    content: "Before recording, call the `acquire` method to apply for a resource ID."
  }, {
    heading: "acquire-request-over-https",
    content: "Request URL:"
  }, {
    heading: "acquire-request-over-https",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "acquire-request-over-https",
    content: "`Authorization`: Basic authorization. For more information, see Authenticate REST calls."
  }, {
    heading: "acquire-request-over-https",
    content: "Request body:"
  }, {
    heading: "start-recording",
    content: "To enable individual recording mode, set `mode` to `individual` when calling `start`."
  }, {
    heading: "start-recording",
    content: "Configure the following parameters in `clientRequest` for audio individual non-transcoding recording:"
  }, {
    heading: "start-recording",
    content: "Parameter"
  }, {
    heading: "start-recording",
    content: "Description"
  }, {
    heading: "start-recording",
    content: "Note"
  }, {
    heading: "start-recording",
    content: "`token`"
  }, {
    heading: "start-recording",
    content: "String. The dynamic key used for the channel to record."
  }, {
    heading: "start-recording",
    content: "Required if the channel uses a token"
  }, {
    heading: "start-recording",
    content: "`recordingConfig`"
  }, {
    heading: "start-recording",
    content: "JSON. Configures stream subscription, transcoding, and the profile of the output audio and video."
  }, {
    heading: "start-recording",
    content: "Required"
  }, {
    heading: "start-recording",
    content: "`recordingConfig.streamTypes`"
  }, {
    heading: "start-recording",
    content: "Number. The type of the media stream to subscribe to. Set this to `0` for audio individual non-transcoding recording."
  }, {
    heading: "start-recording",
    content: "Required"
  }, {
    heading: "start-recording",
    content: "`recordingConfig.streamMode`"
  }, {
    heading: "start-recording",
    content: "String. The output mode of the media stream in individual mode. Set this to `original` for audio individual non-transcoding recording."
  }, {
    heading: "start-recording",
    content: "Required"
  }, {
    heading: "start-recording",
    content: "`storageConfig`"
  }, {
    heading: "start-recording",
    content: "JSON. Configures the third-party cloud storage."
  }, {
    heading: "start-recording",
    content: "Required"
  }, {
    heading: "start-request-over-https",
    content: "Request URL:"
  }, {
    heading: "start-request-over-https",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "start-request-over-https",
    content: "`Authorization`: Basic authorization. For more information, see Authenticate REST calls."
  }, {
    heading: "start-request-over-https",
    content: "Request body:"
  }, {
    heading: "start-request-over-https",
    content: "To configure the `vendor` and `region` parameters, see Third-party cloud storage regions."
  }, {
    heading: "start-request-over-https",
    content: "When the user who publishes the stream mutes or leaves the channel, the recording service immediately slices the audio file and stops recording."
  }, {
    heading: "stop-recording",
    content: "When a recording finishes, call `stop` to leave the channel and stop recording. To use Agora Cloud Recording again, call the `acquire` method for a new resource ID."
  }, {
    heading: "stop-request-over-https",
    content: "The request URL is:"
  }, {
    heading: "stop-request-over-https",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "stop-request-over-https",
    content: "`Authorization`: Basic authorization. For more information, see Authenticate REST calls."
  }, {
    heading: "stop-request-over-https",
    content: "Request body:"
  }, {
    heading: "recorded-files",
    content: "For file naming rules, see Manage recording files. You can play M3U8 audio files, or you can use the Agora Format Converter Script to merge and convert all TS files of the specified user ID into one MP3/M4A/AAC audio file for playback. See Merge audio and video files after an individual recording for details."
  }, {
    heading: "callback-events",
    content: "You can subscribe to the related callback events of the cloud recording service (`serviceType` is `0`) before you start an individual audio non-transcoding recording. For details, see Callback Events."
  }],
  headings: [{
    id: "implement-audio-individual-non-transcoding-recording",
    content: "Implement audio individual non-transcoding recording"
  }, {
    id: "get-a-resource-id",
    content: "Get a resource ID"
  }, {
    id: "acquire-request-over-https",
    content: "`acquire` request over HTTPS"
  }, {
    id: "start-recording",
    content: "Start recording"
  }, {
    id: "start-request-over-https",
    content: "`start` request over HTTPS"
  }, {
    id: "stop-recording",
    content: "Stop recording"
  }, {
    id: "stop-request-over-https",
    content: "`stop` request over HTTPS"
  }, {
    id: "recorded-files",
    content: "Recorded files"
  }, {
    id: "callback-events",
    content: "Callback events"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implement-audio-individual-non-transcoding-recording",
  title: _jsx(_Fragment, {
    children: "Implement audio individual non-transcoding recording"
  })
}, {
  depth: 3,
  url: "#get-a-resource-id",
  title: _jsx(_Fragment, {
    children: "Get a resource ID"
  })
}, {
  depth: 4,
  url: "#acquire-request-over-https",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "acquire"
    }), " request over HTTPS"]
  })
}, {
  depth: 3,
  url: "#start-recording",
  title: _jsx(_Fragment, {
    children: "Start recording"
  })
}, {
  depth: 4,
  url: "#start-request-over-https",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "start"
    }), " request over HTTPS"]
  })
}, {
  depth: 3,
  url: "#stop-recording",
  title: _jsx(_Fragment, {
    children: "Stop recording"
  })
}, {
  depth: 4,
  url: "#stop-request-over-https",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "stop"
    }), " request over HTTPS"]
  })
}, {
  depth: 2,
  url: "#recorded-files",
  title: _jsx(_Fragment, {
    children: "Recorded files"
  })
}, {
  depth: 2,
  url: "#callback-events",
  title: _jsx(_Fragment, {
    children: "Callback events"
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
    children: [_jsxs(_components.p, {
      children: ["When recording audio only (", _jsx(_components.code, {
        children: "streamTypes"
      }), " is ", _jsx(_components.code, {
        children: "0"
      }), ") in ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode",
        children: "individual recording mode"
      }), ", you can choose whether to use transcoding recording or non-transcoding recording through simple parameter settings. The differences between the two are as follows:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Individual audio recording"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Individual audio non-transcoding recording"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Whether to transcode when encoding audio"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio profile"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The sample rate, number of audio channels, and bitrate are fixed at 48 kHz, mono, and 48 Kbps, respectively."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The sample rate, number of audio channels, and bitrate are determined by the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#transcodingconfig",
              children: "AudioProfile"
            }), " configuration of the streaming sender."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio codec"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "LC-AAC."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Determined by the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#transcodingconfig",
              children: "AudioProfile"
            }), " configuration set by the streaming sender."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recorded files"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "One M3U8 file and several TS files are generated per user ID."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The same as Individual transcoding recording. However, when the user calls ", _jsx(_components.code, {
              children: "mute"
            }), ", ", _jsx(_components.code, {
              children: "disable"
            }), ", or ", _jsx(_components.code, {
              children: "leaveChannel"
            }), ", the audio recording is stopped immediately, and there is no recorded data for silenced audio frames."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Player compatibility"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a player that supports the HLS protocol to play recorded files."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The audio codec format is determined by the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#transcodingconfig",
              children: "AudioProfile"
            }), " configured by the streaming sender, and player compatibility varies by audio codec."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "implement-audio-individual-non-transcoding-recording",
      children: "Implement audio individual non-transcoding recording"
    }), `
`, _jsx(_components.h3, {
      id: "get-a-resource-id",
      children: "Get a resource ID"
    }), `
`, _jsxs(_components.p, {
      children: ["Before recording, call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#acquire",
        children: _jsx(_components.code, {
          children: "acquire"
        })
      }), " method to apply for a resource ID."]
    }), `
`, _jsxs(_components.h4, {
      id: "acquire-request-over-https",
      children: [_jsx(_components.code, {
        children: "acquire"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request URL:"
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
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "https://api.agora.io/v1/apps/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "your-appid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/cloud_recording/acquire"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-type"
          }), ": ", _jsx(_components.code, {
            children: "application/json;charset=utf-8"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": Basic authorization. For more information, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/authentication",
            children: "Authenticate REST calls"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request body:"
        }), `
`]
      }), `
`]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "cname"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"httpClient463224"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"527841"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "clientRequest"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "resourceExpiredHour"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "24"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "scene"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
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
`, _jsx(_components.h3, {
      id: "start-recording",
      children: "Start recording"
    }), `
`, _jsxs(_components.p, {
      children: ["To enable individual recording mode, set ", _jsx(_components.code, {
        children: "mode"
      }), " to ", _jsx(_components.code, {
        children: "individual"
      }), " when calling ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["Configure the following parameters in ", _jsx(_components.code, {
        children: "clientRequest"
      }), " for audio individual non-transcoding recording:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Note"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "../../reference/glossary#token",
              children: _jsx(_components.code, {
                children: "token"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String. The dynamic key used for the channel to record."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required if the channel uses a token"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "recordingConfig"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON. Configures stream subscription, transcoding, and the profile of the output audio and video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "recordingConfig.streamTypes"
              })
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Number. The type of the media stream to subscribe to. Set this to ", _jsx(_components.code, {
              children: "0"
            }), " for audio individual non-transcoding recording."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "recordingConfig.streamMode"
              })
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["String. The output mode of the media stream in individual mode. Set this to ", _jsx(_components.code, {
              children: "original"
            }), " for audio individual non-transcoding recording."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#storageconfig",
              children: _jsx(_components.code, {
                children: "storageConfig"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON. Configures the third-party cloud storage."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h4, {
      id: "start-request-over-https",
      children: [_jsx(_components.code, {
        children: "start"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request URL:"
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
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "https://api.agora.io/v1/apps/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "your-appid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/cloud_recording/resourceid/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "resourceid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/mode/individual/start"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-type"
          }), ": ", _jsx(_components.code, {
            children: "application/json;charset=utf-8"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": Basic authorization. For more information, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/authentication",
            children: "Authenticate REST calls"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request body:"
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
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "uid"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"527841"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "cname"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"httpClient463224"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "clientRequest"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "token"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"<token if any>"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "recordingConfig"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "maxIdleTime"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "30"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "streamTypes"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "streamMode"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"original"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "channelType"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "subscribeAudioUids"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "123"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "456"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "subscribeUidGroup"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "storageConfig"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "accessKey"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"xxxxx"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "region"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "3"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "bucket"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"xxxxx"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "secretKey"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"xxxxx"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "vendor"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileNamePrefix"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "directory1"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "directory2"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ]"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
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
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To configure the ", _jsx(_components.code, {
            children: "vendor"
          }), " and ", _jsx(_components.code, {
            children: "region"
          }), " parameters, see ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/reference/region-vendor",
            children: "Third-party cloud storage regions"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "When the user who publishes the stream mutes or leaves the channel, the recording service immediately slices the audio file and stops recording."
    }), `
`, _jsx(_components.h3, {
      id: "stop-recording",
      children: "Stop recording"
    }), `
`, _jsxs(_components.p, {
      children: ["When a recording finishes, call ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#stop",
        children: _jsx(_components.code, {
          children: "stop"
        })
      }), " to leave the channel and stop recording. To use Agora Cloud Recording again, call the ", _jsx(_components.code, {
        children: "acquire"
      }), " method for a new resource ID."]
    }), `
`, _jsxs(_components.h4, {
      id: "stop-request-over-https",
      children: [_jsx(_components.code, {
        children: "stop"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The request URL is:"
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
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "https://api.agora.io/v1/apps/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "yourappid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/cloud_recording/resourceid/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "resourceid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/sid/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "sid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/mode/individual/stop"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-type"
          }), ": ", _jsx(_components.code, {
            children: "application/json;charset=utf-8"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": Basic authorization. For more information, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/authentication",
            children: "Authenticate REST calls"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request body:"
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
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "cname"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"httpClient463224"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "uid"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"527841"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "clientRequest"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "resourceExpiredHour"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "24"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "scene"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "recorded-files",
      children: "Recorded files"
    }), `
`, _jsxs(_components.p, {
      children: ["For file naming rules, see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files",
        children: "Manage recording files"
      }), ". You can play M3U8 audio files, or you can use the ", _jsx(_components.a, {
        href: "https://download.agora.io/acrsdk/release/cloud_recording_tools.v3.8.0.69-202302061216-release-prod.tar.gz",
        children: "Agora Format Converter Script"
      }), " to merge and convert all TS files of the specified user ID into one MP3/M4A/AAC audio file for playback. See ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files",
        children: "Merge audio and video files after an individual recording"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "callback-events",
      children: "Callback events"
    }), `
`, _jsxs(_components.p, {
      children: ["You can subscribe to the related callback events of the cloud recording service (", _jsx(_components.code, {
        children: "serviceType"
      }), " is ", _jsx(_components.code, {
        children: "0"
      }), ") before you start an individual audio non-transcoding recording. For details, see ", _jsx(_components.a, {
        href: "../../reference/rest-api-overview#callback-events",
        children: "Callback Events"
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
