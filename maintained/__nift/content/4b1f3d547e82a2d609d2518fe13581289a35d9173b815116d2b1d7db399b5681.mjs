import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Individual recording",
  description: "Use the Cloud Recording RESTful API to make an individual recording"
};
export let _markdown = `

This guide includes the key steps in using the Cloud Recording RESTful API to make an individual recording. For more information, see [Get started](/en/realtime-media/cloud-recording/index).

Agora Cloud Recording supports three recording modes:

* Individual recording

* Composite recording

* Web page recording

In individual recording mode, the audio and video of each user ID in a channel are recorded in separate files.

Agora recommends that you use the standard mode when you start individual recording, and get audio and video files that can be played directly for each user IDs after the recording stops. For details, see [Start recording](#start-recording).

For example, if a channel has two users and you choose to record both audio and video, the files generated for standard mode of individual recording is shown in the following diagram:

![Image](https://assets-docs.agora.io/images/cloud-recording/individual-mode.svg)

## Implementation [#implementation]

### Get a resource ID [#get-a-resource-id]

Before recording, call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method to apply for a resource ID.

#### Example \`acquire\` request over HTTPS [#example-acquire-request-over-https]

* Request URL:

\`\`\`json
https://api.agora.io/v1/apps/<yourappid>/cloud_recording/acquire
\`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

\`\`\`json
{
    "cname": "https://xxxxx",
    "uid": "527841",
    "clientRequest": {
        "resourceExpiredHour": 24,
        "scene": 0
    }
}
\`\`\`

### Start recording [#start-recording]

To enable individual recording mode, set \`mode\` to \`individual\` when calling [\`start\`](/en/api-reference/api-ref/cloud-recording#start). Use \`recordingConfig\` to configure individual recording, and use \`storageConfig\` to configure your third-party cloud storage.

Agora recommends that you use the standard mode when you start recording, that is, set the \`streamMode\` field in the \`recordingConfig\` parameter to \`standard\` to generate combined audio and video files that can be played directly.

In individual recording mode, you can configure the following parameters in \`clientRequest\`:

| Parameter                                                                                 | Description                                                                                       | Note                                       |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [\`token\`](../../reference/glossary#token)                                                 | String. The dynamic key used for the channel to record.                                           | JSON. Required if the channel uses a token |
| [\`recordingConfig\`](/en/api-reference/api-ref/cloud-recording#recordingconfig)            | JSON. Configures stream subscription, transcoding, and the profile of the output audio and video. | Required                                   |
| [\`recordingConfig.streamMode\`](/en/api-reference/api-ref/cloud-recording#recordingconfig) | String. The output mode of the media stream in individual recording mode.                         | Required                                   |
| [\`recordingFileConfig\`](/en/api-reference/api-ref/cloud-recording#recordingfileconfig)    | JSON. Configures the recorded files.                                                              | Optional                                   |
| [\`storageConfig\`](/en/api-reference/api-ref/cloud-recording#storageconfig)                | JSON. Configures the third-party cloud storage.                                                   | Required                                   |

#### Example \`start\` request over HTTPS [#example-start-request-over-https]

* Request URL:

\`\`\`json
https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/mode/individual/start
\`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

**Real-time recording for standard mode**

\`\`\`json
{
    "uid": "527841",
    "cname": "httpClient463224",
    "clientRequest": {
        "token": "<token if any>",
        "recordingConfig": {
            "maxIdleTime": 30,
            "streamTypes": 2,
            "channelType": 0,
            "videoStreamType": 0,
            "subscribeVideoUids": [
                "123",
                "456"
            ],
            "subscribeAudioUids": [
                "123",
                "456"
            ],
            "subscribeUidGroup": 0
        },
        "storageConfig": {
            "accessKey": "xxxxxxf",
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

### Stop recording [#stop-recording]

When a recording finishes, call [\`stop\`](/en/api-reference/api-ref/cloud-recording#stop) to leave the channel and stop recording. To use Agora Cloud Recording again, you need to call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method for a new resource ID.

#### Example \`stop\` request over HTTPS [#example-stop-request-over-https]

* The request URL is:

\`\`\`json
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/individual/stop
\`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

\`\`\`json
{
    "cname": "httpClient463224",
    "uid": "527841",
    "clientRequest": {}
}
\`\`\`

## Recorded files [#recorded-files]

In individual recording mode, the audio and video profiles of the recorded file are as follows:

* Audio profile: The sample rate is 48 kHz, and the bitrate and number of audio channels are the same as those of the original audio stream.

* Video profile: The video profile of the recorded file is the same as that of the original video stream.

The recorded files vary according to the recorded content. See the table below.

| Recorded content                   | Settings                                                                                                              | Recorded files                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audio only                         | Set [\`streamTypes\`](/en/api-reference/api-ref/cloud-recording#recordingconfig) to \`0\`                                 | One M3U8 file and several TS files for each user ID. The TS files store the audio.                                                                                                                                                                                                                                                             |
| Video only                         | Set [\`streamTypes\`](/en/api-reference/api-ref/cloud-recording#recordingconfig) to \`1\`                                 | One M3U8 file and several TS/WebM files for each user ID. The TS/WebM files store the video.                                                                                                                                                                                                                                                   |
| Audio and video, and standard mode | Set [\`streamTypes\`](/en/api-reference/api-ref/cloud-recording#recordingconfig) to \`2\` and \`streamMode\` to \`standard\`. | One M3U8 audio index file, one M3U8 video index file, a combined M3U8 audio and video index file, multiple TS audio slice files and multiple TS video slice files are generated per user ID. If VP9 encoding is used on the web side, a combined MPD audio and video index file and multiple WebM video slice files are generated per user ID. |

For detailed information about the naming conventions of the recorded files, see [Manage Recorded Files](/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files).

## Considerations [#considerations]

* Use standard mode to record (set \`streamMode\` to \`standard\`), if you switch the native side to the web side (or vice versa) during the recording process, two combined audio and video index files in M3U8 format and MPD format are generated after recording, and the whole recording process cannot be played continuously.

* The recording effects of Web SDK 4.x after disabling the video track are shown below:

| Publisher   | Ways to disable the video track                                                                                | Recording effects                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Web SDK 4.x | Call [setEnabled](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocaltrack.html#setenabled) method | Displays the last frame on the user screen in this slice and does not continue to generate video slices. |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide includes the key steps in using the Cloud Recording RESTful API to make an individual recording. For more information, see Get started."
  }, {
    heading: undefined,
    content: "Agora Cloud Recording supports three recording modes:"
  }, {
    heading: undefined,
    content: "Individual recording"
  }, {
    heading: undefined,
    content: "Composite recording"
  }, {
    heading: undefined,
    content: "Web page recording"
  }, {
    heading: undefined,
    content: "In individual recording mode, the audio and video of each user ID in a channel are recorded in separate files."
  }, {
    heading: undefined,
    content: "Agora recommends that you use the standard mode when you start individual recording, and get audio and video files that can be played directly for each user IDs after the recording stops. For details, see Start recording."
  }, {
    heading: undefined,
    content: "For example, if a channel has two users and you choose to record both audio and video, the files generated for standard mode of individual recording is shown in the following diagram:"
  }, {
    heading: "get-a-resource-id",
    content: "Before recording, call the `acquire` method to apply for a resource ID."
  }, {
    heading: "example-acquire-request-over-https",
    content: "Request URL:"
  }, {
    heading: "example-acquire-request-over-https",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "example-acquire-request-over-https",
    content: "`Authorization`: Basic authorization. For more information, see How to pass the basic HTTP authentication."
  }, {
    heading: "example-acquire-request-over-https",
    content: "Request body:"
  }, {
    heading: "start-recording",
    content: "To enable individual recording mode, set `mode` to `individual` when calling `start`. Use `recordingConfig` to configure individual recording, and use `storageConfig` to configure your third-party cloud storage."
  }, {
    heading: "start-recording",
    content: "Agora recommends that you use the standard mode when you start recording, that is, set the `streamMode` field in the `recordingConfig` parameter to `standard` to generate combined audio and video files that can be played directly."
  }, {
    heading: "start-recording",
    content: "In individual recording mode, you can configure the following parameters in `clientRequest`:"
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
    content: "JSON. Required if the channel uses a token"
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
    content: "`recordingConfig.streamMode`"
  }, {
    heading: "start-recording",
    content: "String. The output mode of the media stream in individual recording mode."
  }, {
    heading: "start-recording",
    content: "Required"
  }, {
    heading: "start-recording",
    content: "`recordingFileConfig`"
  }, {
    heading: "start-recording",
    content: "JSON. Configures the recorded files."
  }, {
    heading: "start-recording",
    content: "Optional"
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
    heading: "example-start-request-over-https",
    content: "Request URL:"
  }, {
    heading: "example-start-request-over-https",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "example-start-request-over-https",
    content: "`Authorization`: Basic authorization. For more information, see How to pass the basic HTTP authentication."
  }, {
    heading: "example-start-request-over-https",
    content: "Request body:"
  }, {
    heading: "example-start-request-over-https",
    content: "**Real-time recording for standard mode**"
  }, {
    heading: "stop-recording",
    content: "When a recording finishes, call `stop` to leave the channel and stop recording. To use Agora Cloud Recording again, you need to call the `acquire` method for a new resource ID."
  }, {
    heading: "example-stop-request-over-https",
    content: "The request URL is:"
  }, {
    heading: "example-stop-request-over-https",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "example-stop-request-over-https",
    content: "`Authorization`: Basic authorization. For more information, see How to pass the basic HTTP authentication."
  }, {
    heading: "example-stop-request-over-https",
    content: "Request body:"
  }, {
    heading: "recorded-files",
    content: "In individual recording mode, the audio and video profiles of the recorded file are as follows:"
  }, {
    heading: "recorded-files",
    content: "Audio profile: The sample rate is 48 kHz, and the bitrate and number of audio channels are the same as those of the original audio stream."
  }, {
    heading: "recorded-files",
    content: "Video profile: The video profile of the recorded file is the same as that of the original video stream."
  }, {
    heading: "recorded-files",
    content: "The recorded files vary according to the recorded content. See the table below."
  }, {
    heading: "recorded-files",
    content: "Recorded content"
  }, {
    heading: "recorded-files",
    content: "Settings"
  }, {
    heading: "recorded-files",
    content: "Recorded files"
  }, {
    heading: "recorded-files",
    content: "Audio only"
  }, {
    heading: "recorded-files",
    content: "Set `streamTypes` to `0`"
  }, {
    heading: "recorded-files",
    content: "One M3U8 file and several TS files for each user ID. The TS files store the audio."
  }, {
    heading: "recorded-files",
    content: "Video only"
  }, {
    heading: "recorded-files",
    content: "Set `streamTypes` to `1`"
  }, {
    heading: "recorded-files",
    content: "One M3U8 file and several TS/WebM files for each user ID. The TS/WebM files store the video."
  }, {
    heading: "recorded-files",
    content: "Audio and video, and standard mode"
  }, {
    heading: "recorded-files",
    content: "Set `streamTypes` to `2` and `streamMode` to `standard`."
  }, {
    heading: "recorded-files",
    content: "One M3U8 audio index file, one M3U8 video index file, a combined M3U8 audio and video index file, multiple TS audio slice files and multiple TS video slice files are generated per user ID. If VP9 encoding is used on the web side, a combined MPD audio and video index file and multiple WebM video slice files are generated per user ID."
  }, {
    heading: "recorded-files",
    content: "For detailed information about the naming conventions of the recorded files, see Manage Recorded Files."
  }, {
    heading: "considerations",
    content: "Use standard mode to record (set `streamMode` to `standard`), if you switch the native side to the web side (or vice versa) during the recording process, two combined audio and video index files in M3U8 format and MPD format are generated after recording, and the whole recording process cannot be played continuously."
  }, {
    heading: "considerations",
    content: "The recording effects of Web SDK 4.x after disabling the video track are shown below:"
  }, {
    heading: "considerations",
    content: "Publisher"
  }, {
    heading: "considerations",
    content: "Ways to disable the video track"
  }, {
    heading: "considerations",
    content: "Recording effects"
  }, {
    heading: "considerations",
    content: "Web SDK 4.x"
  }, {
    heading: "considerations",
    content: "Call setEnabled method"
  }, {
    heading: "considerations",
    content: "Displays the last frame on the user screen in this slice and does not continue to generate video slices."
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }, {
    id: "get-a-resource-id",
    content: "Get a resource ID"
  }, {
    id: "example-acquire-request-over-https",
    content: "Example `acquire` request over HTTPS"
  }, {
    id: "start-recording",
    content: "Start recording"
  }, {
    id: "example-start-request-over-https",
    content: "Example `start` request over HTTPS"
  }, {
    id: "stop-recording",
    content: "Stop recording"
  }, {
    id: "example-stop-request-over-https",
    content: "Example `stop` request over HTTPS"
  }, {
    id: "recorded-files",
    content: "Recorded files"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#get-a-resource-id",
  title: _jsx(_Fragment, {
    children: "Get a resource ID"
  })
}, {
  depth: 4,
  url: "#example-acquire-request-over-https",
  title: _jsxs(_Fragment, {
    children: ["Example ", _jsx("code", {
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
  url: "#example-start-request-over-https",
  title: _jsxs(_Fragment, {
    children: ["Example ", _jsx("code", {
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
  url: "#example-stop-request-over-https",
  title: _jsxs(_Fragment, {
    children: ["Example ", _jsx("code", {
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
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
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
    children: [_jsxs(_components.p, {
      children: ["This guide includes the key steps in using the Cloud Recording RESTful API to make an individual recording. For more information, see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/index",
        children: "Get started"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Agora Cloud Recording supports three recording modes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Individual recording"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Composite recording"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Web page recording"
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In individual recording mode, the audio and video of each user ID in a channel are recorded in separate files."
    }), `
`, _jsxs(_components.p, {
      children: ["Agora recommends that you use the standard mode when you start individual recording, and get audio and video files that can be played directly for each user IDs after the recording stops. For details, see ", _jsx(_components.a, {
        href: "#start-recording",
        children: "Start recording"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "For example, if a channel has two users and you choose to record both audio and video, the files generated for standard mode of individual recording is shown in the following diagram:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/cloud-recording/individual-mode.svg",
        alt: "Image"
      })
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
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
      id: "example-acquire-request-over-https",
      children: ["Example ", _jsx(_components.code, {
        children: "acquire"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Request URL:"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "https:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//api.agora.io/v1/apps/<yourappid>/cloud_recording/acquire"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
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
            children: "How to pass the basic HTTP authentication"
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
              children: '    "cname"'
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
              children: '"https://xxxxx"'
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
              children: '    "uid"'
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
              children: '    "clientRequest"'
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
              children: '        "resourceExpiredHour"'
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
              children: '        "scene"'
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
      }), ". Use ", _jsx(_components.code, {
        children: "recordingConfig"
      }), " to configure individual recording, and use ", _jsx(_components.code, {
        children: "storageConfig"
      }), " to configure your third-party cloud storage."]
    }), `
`, _jsxs(_components.p, {
      children: ["Agora recommends that you use the standard mode when you start recording, that is, set the ", _jsx(_components.code, {
        children: "streamMode"
      }), " field in the ", _jsx(_components.code, {
        children: "recordingConfig"
      }), " parameter to ", _jsx(_components.code, {
        children: "standard"
      }), " to generate combined audio and video files that can be played directly."]
    }), `
`, _jsxs(_components.p, {
      children: ["In individual recording mode, you can configure the following parameters in ", _jsx(_components.code, {
        children: "clientRequest"
      }), ":"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Note"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "../../reference/glossary#token",
              children: _jsx(_components.code, {
                children: "token"
              })
            })
          }), _jsx(_components.td, {
            children: "String. The dynamic key used for the channel to record."
          }), _jsx(_components.td, {
            children: "JSON. Required if the channel uses a token"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "recordingConfig"
              })
            })
          }), _jsx(_components.td, {
            children: "JSON. Configures stream subscription, transcoding, and the profile of the output audio and video."
          }), _jsx(_components.td, {
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "recordingConfig.streamMode"
              })
            })
          }), _jsx(_components.td, {
            children: "String. The output mode of the media stream in individual recording mode."
          }), _jsx(_components.td, {
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingfileconfig",
              children: _jsx(_components.code, {
                children: "recordingFileConfig"
              })
            })
          }), _jsx(_components.td, {
            children: "JSON. Configures the recorded files."
          }), _jsx(_components.td, {
            children: "Optional"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#storageconfig",
              children: _jsx(_components.code, {
                children: "storageConfig"
              })
            })
          }), _jsx(_components.td, {
            children: "JSON. Configures the third-party cloud storage."
          }), _jsx(_components.td, {
            children: "Required"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h4, {
      id: "example-start-request-over-https",
      children: ["Example ", _jsx(_components.code, {
        children: "start"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Request URL:"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "https:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/mode/individual/start"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
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
            children: "How to pass the basic HTTP authentication"
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
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Real-time recording for standard mode"
      })
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
              children: '    "uid"'
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
              children: '    "cname"'
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
              children: '    "clientRequest"'
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
              children: '        "token"'
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
              children: '        "recordingConfig"'
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
              children: '            "maxIdleTime"'
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
              children: '            "streamTypes"'
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
              children: '            "channelType"'
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
              children: '            "videoStreamType"'
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
              children: '            "subscribeVideoUids"'
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
              children: '                "123"'
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
              children: '                "456"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "subscribeAudioUids"'
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
              children: '                "123"'
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
              children: '                "456"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "subscribeUidGroup"'
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
              children: "        },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "storageConfig"'
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
              children: '            "accessKey"'
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
              children: '"xxxxxxf"'
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
              children: '            "region"'
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
              children: '            "bucket"'
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
              children: '            "secretKey"'
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
              children: '            "vendor"'
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
              children: '            "fileNamePrefix"'
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
              children: '                "directory1"'
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
              children: '                "directory2"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
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
              children: "}"
            })
          })]
        })
      })
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
      }), " to leave the channel and stop recording. To use Agora Cloud Recording again, you need to call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#acquire",
        children: _jsx(_components.code, {
          children: "acquire"
        })
      }), " method for a new resource ID."]
    }), `
`, _jsxs(_components.h4, {
      id: "example-stop-request-over-https",
      children: ["Example ", _jsx(_components.code, {
        children: "stop"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The request URL is:"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  https:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/individual/stop"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
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
            children: "How to pass the basic HTTP authentication"
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
              children: '    "cname"'
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
              children: '    "uid"'
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
              children: '    "clientRequest"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {}"
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
      id: "recorded-files",
      children: "Recorded files"
    }), `
`, _jsx(_components.p, {
      children: "In individual recording mode, the audio and video profiles of the recorded file are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Audio profile: The sample rate is 48 kHz, and the bitrate and number of audio channels are the same as those of the original audio stream."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Video profile: The video profile of the recorded file is the same as that of the original video stream."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The recorded files vary according to the recorded content. See the table below."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Recorded content"
          }), _jsx(_components.th, {
            children: "Settings"
          }), _jsx(_components.th, {
            children: "Recorded files"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio only"
          }), _jsxs(_components.td, {
            children: ["Set ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "streamTypes"
              })
            }), " to ", _jsx(_components.code, {
              children: "0"
            })]
          }), _jsx(_components.td, {
            children: "One M3U8 file and several TS files for each user ID. The TS files store the audio."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video only"
          }), _jsxs(_components.td, {
            children: ["Set ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "streamTypes"
              })
            }), " to ", _jsx(_components.code, {
              children: "1"
            })]
          }), _jsx(_components.td, {
            children: "One M3U8 file and several TS/WebM files for each user ID. The TS/WebM files store the video."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio and video, and standard mode"
          }), _jsxs(_components.td, {
            children: ["Set ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "streamTypes"
              })
            }), " to ", _jsx(_components.code, {
              children: "2"
            }), " and ", _jsx(_components.code, {
              children: "streamMode"
            }), " to ", _jsx(_components.code, {
              children: "standard"
            }), "."]
          }), _jsx(_components.td, {
            children: "One M3U8 audio index file, one M3U8 video index file, a combined M3U8 audio and video index file, multiple TS audio slice files and multiple TS video slice files are generated per user ID. If VP9 encoding is used on the web side, a combined MPD audio and video index file and multiple WebM video slice files are generated per user ID."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For detailed information about the naming conventions of the recorded files, see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files",
        children: "Manage Recorded Files"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Use standard mode to record (set ", _jsx(_components.code, {
            children: "streamMode"
          }), " to ", _jsx(_components.code, {
            children: "standard"
          }), "), if you switch the native side to the web side (or vice versa) during the recording process, two combined audio and video index files in M3U8 format and MPD format are generated after recording, and the whole recording process cannot be played continuously."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The recording effects of Web SDK 4.x after disabling the video track are shown below:"
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Publisher"
          }), _jsx(_components.th, {
            children: "Ways to disable the video track"
          }), _jsx(_components.th, {
            children: "Recording effects"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Web SDK 4.x"
          }), _jsxs(_components.td, {
            children: ["Call ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocaltrack.html#setenabled",
              children: "setEnabled"
            }), " method"]
          }), _jsx(_components.td, {
            children: "Displays the last frame on the user screen in this slice and does not continue to generate video slices."
          })]
        })
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
