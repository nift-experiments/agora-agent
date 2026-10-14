import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Composite recording",
  description: "Use the Cloud Recording RESTful API to make a composite recording."
};
export let _markdown = `

Agora Cloud Recording supports three recording modes:

* Individual recording
* Composite recording
* Web page recording

In composite recording mode, the audio and video of multiple user IDs in a channel are recorded in a single file.

For example, if a channel has two users, and you choose to record both audio and video, Agora Cloud Recording generates files as shown in the following diagram:

![](https://assets-docs.agora.io/images/cloud-recording/composite-mode.svg)

The recording service generates one M3U8 file and multiple TS files. If you set \`avFileType\` as \`["hls","mp4"]\` when calling the [\`start\`](/en/api-reference/api-ref/cloud-recording#start) method, the recording service also generates MP4 files, which include the audio and video of all users in the channel.

This guide explains how to implement composite recording using Cloud Recording REST API.

## Implementation [#implementation]

### Get a resource ID [#get-a-resource-id]

Before recording, call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method to apply for a resource ID.

#### Example \`acquire\` request over HTTPS [#example-acquire-request-over-https]

* Request URL:

\`\`\`html
https://api.agora.io/v1/apps/<yourappid>/cloud_recording/acquire
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

To enable composite recording mode, set \`mode\` to \`mix\` when calling [\`start\`](/en/api-reference/api-ref/cloud-recording#start). Use \`recordingConfig\` to configure composite recording, and use \`storageConfig\` to configure your third-party cloud storage.

You cannot switch to a different recording mode once you start recording.

In composite recording mode, you can configure the following parameters in \`clientRequest\`:

| Parameter                                                                              | Description                                                                                 | Note                                 |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ | :----------------------------------- |
| [\`token\`](../../reference/glossary#token)                                              | The dynamic key used for the channel to record.                                             | Required if the channel uses a token |
| [\`recordingConfig\`](/en/api-reference/api-ref/cloud-recording#recordingconfig)         | Configures stream subscription, transcoding, and the profile of the output audio and video. | Required                             |
| [\`recordingFileConfig\`](/en/api-reference/api-ref/cloud-recording#recordingfileconfig) | Configures the recorded files.                                                              | Optional                             |
| [\`storageConfig\`](/en/api-reference/api-ref/cloud-recording#storageconfig)             | Configures the third-party cloud storage.                                                   | Required                             |

#### Example \`start\` request over HTTPS [#example-start-request-over-https]

* Request URL:

\`\`\`html
https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/mode/mix/start
\`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`
* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).
* Request body:

\`\`\`json
{
    "uid": "527841",
    "cname": "httpClient463224",
    "clientRequest": {
        "token": "<token if any>",
        "recordingConfig": {
            "maxIdleTime": 30,
            "streamTypes": 2,
            "audioProfile": 1,
            "channelType": 0,
            "videoStreamType": 0,
            "transcodingConfig": {
                "height": 640,
                "width": 360,
                "bitrate": 500,
                "fps": 15,
                "mixedVideoLayout": 1,
                "backgroundColor": "#FF0000"
            },
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

\`\`\`html
https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/mix/stop
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

The content of the recorded files varies according to the setting of \`streamTypes\`. See the table below:

| Recorded content | Settings                                                                                        | Recorded files                                                                                                                                             |
| :--------------- | :---------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audio only       | Set [\`streamTypes\`](/en/api-reference/api-ref/cloud-recording#recordingconfig) as \`0\`           | One M3U8 file, several TS files, and one or more MP4 files if you set avFileType as \`["hls","mp4"]\`. The TS files and MP4 files store the audio.           |
| Video only       | Set [\`streamTypes\`](/en/api-reference/api-ref/cloud-recording#recordingconfig) as \`1\`           | One M3U8 file, several TS files, and one or more MP4 files if you set avFileType as \`["hls","mp4"]\`. The TS files and MP4 files store the video.           |
| Audio and video  | Set [\`streamTypes\`](/en/api-reference/api-ref/cloud-recording#recordingconfig) as \`2\` (default) | One M3U8 file, several TS files, and one or more MP4 files if you set avFileType as \`["hls","mp4"]\`. The TS files and MP4 files store the audio and video. |

For detailed information about the naming conventions of the recorded files, see [Manage Recorded Files](/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files).

## Considerations [#considerations]

A Web client and a Native client have different display strategies when they stop publishing streams or leave the channel. See the table below for details.

| Type of the publisher | The client unpublishes the local video stream (\`unpublish\`)                                                                                                                                                                                                                                                                                                            | The client disables the video track (\`muteVideo\`/\`setEnabled\`)                                                                                                                                                                                                                                                                                                     | The client leaves the channel                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Native client         | Displays the last frame of the video within 3.5 seconds. Displays the preset background image of the canvas or the user region after 3.5 seconds, see [Set the background image](../customize-the-recording/layout#set-the-background-color-or-background-image). If a background image is not set, the last frame is displayed.                                       | Displays the last frame of the video within 3.5 seconds. Displays the preset background image of the canvas or the user region after 3.5 seconds, see [Set the background image](../customize-the-recording/layout#set-the-background-color-or-background-image). If a background image is not set, the last frame is displayed.                                   | Displays the background color of the canvas (\`backgroundColor\`). |
| Web client            | For the Web SDK 4.x and later, the last frame of the video is displayed within 3.5 seconds.The preset background image of the canvas or the user region is displayed after 3.5 seconds, see [Set the background image](../customize-the-recording/layout#set-the-background-color-or-background-image). If a background image is not set, the last frame is displayed. | For the Web SDK 4.x and later, the last frame of the video is displayed within 3.5 seconds.The preset background image of the canvas or the user region is displayed after 3.5 seconds, [Set the background image](../customize-the-recording/layout#set-the-background-color-or-background-image). If a background image is not set, the last frame is displayed. | Displays the background color of the canvas (\`backgroundColor\`). |
`;
export let structuredData = {
  contents: [{
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
    content: "In composite recording mode, the audio and video of multiple user IDs in a channel are recorded in a single file."
  }, {
    heading: undefined,
    content: "For example, if a channel has two users, and you choose to record both audio and video, Agora Cloud Recording generates files as shown in the following diagram:"
  }, {
    heading: undefined,
    content: 'The recording service generates one M3U8 file and multiple TS files. If you set `avFileType` as `["hls","mp4"]` when calling the `start` method, the recording service also generates MP4 files, which include the audio and video of all users in the channel.'
  }, {
    heading: undefined,
    content: "This guide explains how to implement composite recording using Cloud Recording REST API."
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
    content: "`Authorization`: Basic authorization. For more information, see Authenticate REST calls."
  }, {
    heading: "example-acquire-request-over-https",
    content: "Request body:"
  }, {
    heading: "start-recording",
    content: "To enable composite recording mode, set `mode` to `mix` when calling `start`. Use `recordingConfig` to configure composite recording, and use `storageConfig` to configure your third-party cloud storage."
  }, {
    heading: "start-recording",
    content: "You cannot switch to a different recording mode once you start recording."
  }, {
    heading: "start-recording",
    content: "In composite recording mode, you can configure the following parameters in `clientRequest`:"
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
    content: "The dynamic key used for the channel to record."
  }, {
    heading: "start-recording",
    content: "Required if the channel uses a token"
  }, {
    heading: "start-recording",
    content: "`recordingConfig`"
  }, {
    heading: "start-recording",
    content: "Configures stream subscription, transcoding, and the profile of the output audio and video."
  }, {
    heading: "start-recording",
    content: "Required"
  }, {
    heading: "start-recording",
    content: "`recordingFileConfig`"
  }, {
    heading: "start-recording",
    content: "Configures the recorded files."
  }, {
    heading: "start-recording",
    content: "Optional"
  }, {
    heading: "start-recording",
    content: "`storageConfig`"
  }, {
    heading: "start-recording",
    content: "Configures the third-party cloud storage."
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
    content: "The content of the recorded files varies according to the setting of `streamTypes`. See the table below:"
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
    content: "Set `streamTypes` as `0`"
  }, {
    heading: "recorded-files",
    content: 'One M3U8 file, several TS files, and one or more MP4 files if you set avFileType as `["hls","mp4"]`. The TS files and MP4 files store the audio.'
  }, {
    heading: "recorded-files",
    content: "Video only"
  }, {
    heading: "recorded-files",
    content: "Set `streamTypes` as `1`"
  }, {
    heading: "recorded-files",
    content: 'One M3U8 file, several TS files, and one or more MP4 files if you set avFileType as `["hls","mp4"]`. The TS files and MP4 files store the video.'
  }, {
    heading: "recorded-files",
    content: "Audio and video"
  }, {
    heading: "recorded-files",
    content: "Set `streamTypes` as `2` (default)"
  }, {
    heading: "recorded-files",
    content: 'One M3U8 file, several TS files, and one or more MP4 files if you set avFileType as `["hls","mp4"]`. The TS files and MP4 files store the audio and video.'
  }, {
    heading: "recorded-files",
    content: "For detailed information about the naming conventions of the recorded files, see Manage Recorded Files."
  }, {
    heading: "considerations",
    content: "A Web client and a Native client have different display strategies when they stop publishing streams or leave the channel. See the table below for details."
  }, {
    heading: "considerations",
    content: "Type of the publisher"
  }, {
    heading: "considerations",
    content: "The client unpublishes the local video stream (`unpublish`)"
  }, {
    heading: "considerations",
    content: "The client disables the video track (`muteVideo`/`setEnabled`)"
  }, {
    heading: "considerations",
    content: "The client leaves the channel"
  }, {
    heading: "considerations",
    content: "Native client"
  }, {
    heading: "considerations",
    content: "Displays the last frame of the video within 3.5 seconds. Displays the preset background image of the canvas or the user region after 3.5 seconds, see Set the background image. If a background image is not set, the last frame is displayed."
  }, {
    heading: "considerations",
    content: "Displays the last frame of the video within 3.5 seconds. Displays the preset background image of the canvas or the user region after 3.5 seconds, see Set the background image. If a background image is not set, the last frame is displayed."
  }, {
    heading: "considerations",
    content: "Displays the background color of the canvas (`backgroundColor`)."
  }, {
    heading: "considerations",
    content: "Web client"
  }, {
    heading: "considerations",
    content: "For the Web SDK 4.x and later, the last frame of the video is displayed within 3.5 seconds.The preset background image of the canvas or the user region is displayed after 3.5 seconds, see Set the background image. If a background image is not set, the last frame is displayed."
  }, {
    heading: "considerations",
    content: "For the Web SDK 4.x and later, the last frame of the video is displayed within 3.5 seconds.The preset background image of the canvas or the user region is displayed after 3.5 seconds, Set the background image. If a background image is not set, the last frame is displayed."
  }, {
    heading: "considerations",
    content: "Displays the background color of the canvas (`backgroundColor`)."
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
      children: "Agora Cloud Recording supports three recording modes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Individual recording"
      }), `
`, _jsx(_components.li, {
        children: "Composite recording"
      }), `
`, _jsx(_components.li, {
        children: "Web page recording"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In composite recording mode, the audio and video of multiple user IDs in a channel are recorded in a single file."
    }), `
`, _jsx(_components.p, {
      children: "For example, if a channel has two users, and you choose to record both audio and video, Agora Cloud Recording generates files as shown in the following diagram:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/cloud-recording/composite-mode.svg",
        alt: ""
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The recording service generates one M3U8 file and multiple TS files. If you set ", _jsx(_components.code, {
        children: "avFileType"
      }), " as ", _jsx(_components.code, {
        children: '["hls","mp4"]'
      }), " when calling the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), " method, the recording service also generates MP4 files, which include the audio and video of all users in the channel."]
    }), `
`, _jsx(_components.p, {
      children: "This guide explains how to implement composite recording using Cloud Recording REST API."
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
              children: ">/cloud_recording/acquire"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-type"
        }), ": ", _jsx(_components.code, {
          children: "application/json;charset=utf-8"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Authorization"
        }), ": Basic authorization. For more information, see ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-recording/authentication",
          children: "Authenticate REST calls"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Request body:"
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
      children: ["To enable composite recording mode, set ", _jsx(_components.code, {
        children: "mode"
      }), " to ", _jsx(_components.code, {
        children: "mix"
      }), " when calling ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), ". Use ", _jsx(_components.code, {
        children: "recordingConfig"
      }), " to configure composite recording, and use ", _jsx(_components.code, {
        children: "storageConfig"
      }), " to configure your third-party cloud storage."]
    }), `
`, _jsx(_components.p, {
      children: "You cannot switch to a different recording mode once you start recording."
    }), `
`, _jsxs(_components.p, {
      children: ["In composite recording mode, you can configure the following parameters in ", _jsx(_components.code, {
        children: "clientRequest"
      }), ":"]
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
            children: "The dynamic key used for the channel to record."
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
            children: "Configures stream subscription, transcoding, and the profile of the output audio and video."
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
              href: "/en/api-reference/api-ref/cloud-recording#recordingfileconfig",
              children: _jsx(_components.code, {
                children: "recordingFileConfig"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures the recorded files."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
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
            children: "Configures the third-party cloud storage."
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
              children: ">/mode/mix/start"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-type"
        }), ": ", _jsx(_components.code, {
          children: "application/json;charset=utf-8"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Authorization"
        }), ": Basic authorization. For more information, see ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-recording/authentication",
          children: "How to pass the basic HTTP authentication"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Request body:"
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
              children: '            "audioProfile"'
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
              children: "1"
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
              children: '            "transcodingConfig"'
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
              children: '                "height"'
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
              children: "640"
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
              children: '                "width"'
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
              children: "360"
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
              children: '                "bitrate"'
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
              children: "500"
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
              children: '                "fps"'
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
              children: "15"
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
              children: '                "mixedVideoLayout"'
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
              children: "1"
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
              children: '                "backgroundColor"'
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
              children: '"#FF0000"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
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
              children: ">/mode/mix/stop"
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
`, _jsxs(_components.p, {
      children: ["The content of the recorded files varies according to the setting of ", _jsx(_components.code, {
        children: "streamTypes"
      }), ". See the table below:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Recorded content"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Settings"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Recorded files"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio only"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Set ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "streamTypes"
              })
            }), " as ", _jsx(_components.code, {
              children: "0"
            })]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["One M3U8 file, several TS files, and one or more MP4 files if you set avFileType as ", _jsx(_components.code, {
              children: '["hls","mp4"]'
            }), ". The TS files and MP4 files store the audio."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video only"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Set ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "streamTypes"
              })
            }), " as ", _jsx(_components.code, {
              children: "1"
            })]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["One M3U8 file, several TS files, and one or more MP4 files if you set avFileType as ", _jsx(_components.code, {
              children: '["hls","mp4"]'
            }), ". The TS files and MP4 files store the video."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio and video"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Set ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording#recordingconfig",
              children: _jsx(_components.code, {
                children: "streamTypes"
              })
            }), " as ", _jsx(_components.code, {
              children: "2"
            }), " (default)"]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["One M3U8 file, several TS files, and one or more MP4 files if you set avFileType as ", _jsx(_components.code, {
              children: '["hls","mp4"]'
            }), ". The TS files and MP4 files store the audio and video."]
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
`, _jsx(_components.p, {
      children: "A Web client and a Native client have different display strategies when they stop publishing streams or leave the channel. See the table below for details."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Type of the publisher"
          }), _jsxs(_components.th, {
            children: ["The client unpublishes the local video stream (", _jsx(_components.code, {
              children: "unpublish"
            }), ")"]
          }), _jsxs(_components.th, {
            children: ["The client disables the video track (", _jsx(_components.code, {
              children: "muteVideo"
            }), "/", _jsx(_components.code, {
              children: "setEnabled"
            }), ")"]
          }), _jsx(_components.th, {
            children: "The client leaves the channel"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Native client"
          }), _jsxs(_components.td, {
            children: ["Displays the last frame of the video within 3.5 seconds. Displays the preset background image of the canvas or the user region after 3.5 seconds, see ", _jsx(_components.a, {
              href: "../customize-the-recording/layout#set-the-background-color-or-background-image",
              children: "Set the background image"
            }), ". If a background image is not set, the last frame is displayed."]
          }), _jsxs(_components.td, {
            children: ["Displays the last frame of the video within 3.5 seconds. Displays the preset background image of the canvas or the user region after 3.5 seconds, see ", _jsx(_components.a, {
              href: "../customize-the-recording/layout#set-the-background-color-or-background-image",
              children: "Set the background image"
            }), ". If a background image is not set, the last frame is displayed."]
          }), _jsxs(_components.td, {
            children: ["Displays the background color of the canvas (", _jsx(_components.code, {
              children: "backgroundColor"
            }), ")."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Web client"
          }), _jsxs(_components.td, {
            children: ["For the Web SDK 4.x and later, the last frame of the video is displayed within 3.5 seconds.The preset background image of the canvas or the user region is displayed after 3.5 seconds, see ", _jsx(_components.a, {
              href: "../customize-the-recording/layout#set-the-background-color-or-background-image",
              children: "Set the background image"
            }), ". If a background image is not set, the last frame is displayed."]
          }), _jsxs(_components.td, {
            children: ["For the Web SDK 4.x and later, the last frame of the video is displayed within 3.5 seconds.The preset background image of the canvas or the user region is displayed after 3.5 seconds, ", _jsx(_components.a, {
              href: "../customize-the-recording/layout#set-the-background-color-or-background-image",
              children: "Set the background image"
            }), ". If a background image is not set, the last frame is displayed."]
          }), _jsxs(_components.td, {
            children: ["Displays the background color of the canvas (", _jsx(_components.code, {
              children: "backgroundColor"
            }), ")."]
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
