import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Cloud-based screenshot upload",
  description: "The key steps in using the Cloud Recording RESTful API to take screenshots of a video stream."
};
export let _markdown = `

You can use Cloud Recording RESTful API to take screenshots of a video stream in a channel and upload the screenshots to your third-party cloud storage.

The following two screenshot methods are supported:

* Take screenshots only.
* Capture screenshots and recording during a recording process. Agora only charges recording fees.

For pricing details, see [Pricing](/en/realtime-media/cloud-recording/reference/pricing).
To implement client-side screen capture, see [Screenshot Upload](/en/realtime-media/rtc/build/add-advanced-video-features/screenshot-upload).

## Implementation [#implementation]

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    The initial Queries Per Second (QPS) limit is 10 per app ID when you register. If you need to extend the limit for QPS, contact [support@agora.io](mailto\\:support@agora.io). For more details on existing limitations, see [Integration best practices](/en/realtime-media/cloud-recording/build/best-practices/integration-best-practices#check-the-limits).
  </CalloutDescription>
</CalloutContainer>

### Get a resource ID [#get-a-resource-id]

Before recording, call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method to apply for a resource ID.

#### Example \`acquire\` request over HTTPS [#example-acquire-request-over-https]

* Request URL:

  \`\`\`html
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/acquire
  \`\`\`
* \`Content-type\`: \`application/json;charset=utf-8\`
* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).
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

Set \`mode\` to \`individual\` when calling [\`start\`](/en/api-reference/api-ref/cloud-recording#start) to enable [individual recording mode](/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode).

You cannot switch to a different recording mode once you start recording.

To capture screenshots, you need to configure the following parameters in \`clientRequest\`:

| Parameter                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Note                                                                                                                                                                                          |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [\`token\`](../../reference/glossary#token)                                              | The dynamic key used for the channel to record.                                                                                                                                                                                                                                                                                                                                                                                                                                        | Required if the channel uses a token                                                                                                                                                          |
| [\`recordingConfig\`](/en/api-reference/api-ref/cloud-recording#recordingconfig)         | Configures stream subscription, transcoding, and the profile of the output audio and video.                                                                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                      |
| [\`snapshotConfig\`](/en/api-reference/api-ref/cloud-recording#snapshotconfig)           | Configures the time interval between two successive screenshots and the file format of the screenshots. \`snapshotConfig\` includes the following fields:- \`captureInterval\`: (Optional) Integer. The time interval (in seconds) between two successive screenshots. captureInterval should be within the range \\[1, 3600]. The default value is \`10\`.

- \`fileType\`: JSONArray. File format of the screenshots. fileType can only take \\["jpg"], setting screenshots to the JPG format. | Required                                                                                                                                                                                      |
| [\`storageConfig\`](/en/api-reference/api-ref/cloud-recording#storageconfig)             | Configures the third-party cloud storage.                                                                                                                                                                                                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                      |
| [\`recordingFileConfig\`](/en/api-reference/api-ref/cloud-recording#recordingfileconfig) | Configurations for the recorded files.                                                                                                                                                                                                                                                                                                                                                                                                                                                 | If you are recording and taking screenshots in a recording process, this parameter is required; if you are only taking screenshots in a recording process, you cannot fill in this parameter. |

#### Example \`start\` request over HTTPS [#example-start-request-over-https]

* Request URL:

  \`\`\`html
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/mode/individual/start
  \`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

**Capture screenshots only**

\`\`\`json
{
    "uid": "527841",
    "cname": "httpClient463224",
    "clientRequest": {
        "token": "<token if any>",
        "recordingConfig": {
            "channelType": 1,
            "subscribeUidGroup": 0
        },
        "snapshotConfig": {
            "captureInterval": 5,
            "fileType": [
                "jpg"
            ]
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

**Capture screenshots and recording**

\`\`\`json
{
    "uid": "527841",
    "cname": "httpClient463224",
    "clientRequest": {
        "token": "<token if any>",
        "recordingConfig": {
            "maxIdleTime": 30,
            "streamTypes": 1,
            "channelType": 0
        },
        "snapshotConfig": {
            "captureInterval": 5,
            "fileType": [
                "jpg"
            ]
        },
        "recordingFileConfig": {
            "avFileType": [
                "hls"
            ]
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

## Screenshot files [#screenshot-files]

The naming convention of screenshot files is \`<sid>_<cname>__uid_s_<uid>__uid_e_video_<utc>.jpg\`, where:

* \`<sid> \`is the recording ID.
* \`<cname>\` is the channel name.
* \`<uid>\` is the user ID.
* \`<utc>\` is the UTC time when the screenshot was generated. The time zone is UTC+0, and the timestamp consists of the year, month, day, hour, minute, second, and millisecond. For example, if \`utc\` is \`20190611073246073\`, the screenshot was generated on June 11, 2019, at 07:32:46.073 a.m.

The screenshot file format is determined by \`fileType\` you set in \`start\`. Currently only the JPG format is supported.

When [a cloud recording server is disconnected or the process killed](../../index#features), the cloud recording service enables the high availability mechanism, where the fault processing center automatically switches to a new server within 90 seconds to resume the service. When the service enables the mechanism, the screenshot filenames are prepended with \`bak<n>\`, where \`n\` stands for the number of times the mechanism is enabled in a recording and starts off with \`0\`. Taking the filename \`bak0_sid_channel1__uid_s_123__uid_e_video_20190611073246073.jpg\` as an example, \`bak0\` indicates that this file was generated after the service enabled the high availability mechanism for the first time.

## Considerations [#considerations]

Pay attention to the following parameters as incorrect settings result in errors and failure to capture screenshots:

* In the URL of your request, you must set \`mode\` as \`individual\`.
* Do not set \`recordingFileConfig\`.
* \`streamTypes\` must be \`1\` or \`2\`.
* If you set \`subscribeAudioUid\`, you must also set \`subscribeVideoUids\`.

If a user stops sending video stream during a session, the Cloud Recording service stops taking screenshots until the stream resumes.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "You can use Cloud Recording RESTful API to take screenshots of a video stream in a channel and upload the screenshots to your third-party cloud storage."
  }, {
    heading: undefined,
    content: "The following two screenshot methods are supported:"
  }, {
    heading: undefined,
    content: "Take screenshots only."
  }, {
    heading: undefined,
    content: "Capture screenshots and recording during a recording process. Agora only charges recording fees."
  }, {
    heading: undefined,
    content: `For pricing details, see Pricing.
To implement client-side screen capture, see Screenshot Upload.`
  }, {
    heading: "implementation",
    content: "The initial Queries Per Second (QPS) limit is 10 per app ID when you register. If you need to extend the limit for QPS, contact support\\@agora.io. For more details on existing limitations, see Integration best practices."
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
    content: "Set `mode` to `individual` when calling `start` to enable individual recording mode."
  }, {
    heading: "start-recording",
    content: "You cannot switch to a different recording mode once you start recording."
  }, {
    heading: "start-recording",
    content: "To capture screenshots, you need to configure the following parameters in `clientRequest`:"
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
    content: "`snapshotConfig`"
  }, {
    heading: "start-recording",
    content: 'Configures the time interval between two successive screenshots and the file format of the screenshots. `snapshotConfig` includes the following fields:- `captureInterval`: (Optional) Integer. The time interval (in seconds) between two successive screenshots. captureInterval should be within the range \\[1, 3600]. The default value is `10`.\n\n- `fileType`: JSONArray. File format of the screenshots. fileType can only take \\["jpg"], setting screenshots to the JPG format.'
  }, {
    heading: "start-recording",
    content: "Required"
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
    heading: "start-recording",
    content: "`recordingFileConfig`"
  }, {
    heading: "start-recording",
    content: "Configurations for the recorded files."
  }, {
    heading: "start-recording",
    content: "If you are recording and taking screenshots in a recording process, this parameter is required; if you are only taking screenshots in a recording process, you cannot fill in this parameter."
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
    content: "**Capture screenshots only**"
  }, {
    heading: "example-start-request-over-https",
    content: "**Capture screenshots and recording**"
  }, {
    heading: "screenshot-files",
    content: "The naming convention of screenshot files is `<sid>_<cname>__uid_s_<uid>__uid_e_video_<utc>.jpg`, where:"
  }, {
    heading: "screenshot-files",
    content: "`<sid> `is the recording ID."
  }, {
    heading: "screenshot-files",
    content: "`<cname>` is the channel name."
  }, {
    heading: "screenshot-files",
    content: "`<uid>` is the user ID."
  }, {
    heading: "screenshot-files",
    content: "`<utc>` is the UTC time when the screenshot was generated. The time zone is UTC+0, and the timestamp consists of the year, month, day, hour, minute, second, and millisecond. For example, if `utc` is `20190611073246073`, the screenshot was generated on June 11, 2019, at 07:32:46.073 a.m."
  }, {
    heading: "screenshot-files",
    content: "The screenshot file format is determined by `fileType` you set in `start`. Currently only the JPG format is supported."
  }, {
    heading: "screenshot-files",
    content: "When a cloud recording server is disconnected or the process killed, the cloud recording service enables the high availability mechanism, where the fault processing center automatically switches to a new server within 90 seconds to resume the service. When the service enables the mechanism, the screenshot filenames are prepended with `bak<n>`, where `n` stands for the number of times the mechanism is enabled in a recording and starts off with `0`. Taking the filename `bak0_sid_channel1__uid_s_123__uid_e_video_20190611073246073.jpg` as an example, `bak0` indicates that this file was generated after the service enabled the high availability mechanism for the first time."
  }, {
    heading: "considerations",
    content: "Pay attention to the following parameters as incorrect settings result in errors and failure to capture screenshots:"
  }, {
    heading: "considerations",
    content: "In the URL of your request, you must set `mode` as `individual`."
  }, {
    heading: "considerations",
    content: "Do not set `recordingFileConfig`."
  }, {
    heading: "considerations",
    content: "`streamTypes` must be `1` or `2`."
  }, {
    heading: "considerations",
    content: "If you set `subscribeAudioUid`, you must also set `subscribeVideoUids`."
  }, {
    heading: "considerations",
    content: "If a user stops sending video stream during a session, the Cloud Recording service stops taking screenshots until the stream resumes."
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
    id: "screenshot-files",
    content: "Screenshot files"
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
  depth: 2,
  url: "#screenshot-files",
  title: _jsx(_Fragment, {
    children: "Screenshot files"
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
    div: "div",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "You can use Cloud Recording RESTful API to take screenshots of a video stream in a channel and upload the screenshots to your third-party cloud storage."
    }), `
`, _jsx(_components.p, {
      children: "The following two screenshot methods are supported:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Take screenshots only."
      }), `
`, _jsx(_components.li, {
        children: "Capture screenshots and recording during a recording process. Agora only charges recording fees."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For pricing details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/reference/pricing",
        children: "Pricing"
      }), `.
To implement client-side screen capture, see `, _jsx(_components.a, {
        href: "/en/realtime-media/rtc/build/add-advanced-video-features/screenshot-upload",
        children: "Screenshot Upload"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["The initial Queries Per Second (QPS) limit is 10 per app ID when you register. If you need to extend the limit for QPS, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), ". For more details on existing limitations, see ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/best-practices/integration-best-practices#check-the-limits",
            children: "Integration best practices"
          }), "."]
        })
      })]
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "start-recording",
      children: "Start recording"
    }), `
`, _jsxs(_components.p, {
      children: ["Set ", _jsx(_components.code, {
        children: "mode"
      }), " to ", _jsx(_components.code, {
        children: "individual"
      }), " when calling ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), " to enable ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode",
        children: "individual recording mode"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "You cannot switch to a different recording mode once you start recording."
    }), `
`, _jsxs(_components.p, {
      children: ["To capture screenshots, you need to configure the following parameters in ", _jsx(_components.code, {
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
              href: "/en/api-reference/api-ref/cloud-recording#snapshotconfig",
              children: _jsx(_components.code, {
                children: "snapshotConfig"
              })
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsxs(_components.p, {
              children: ["Configures the time interval between two successive screenshots and the file format of the screenshots. ", _jsx(_components.code, {
                children: "snapshotConfig"
              }), " includes the following fields:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "captureInterval"
                  }), ": (Optional) Integer. The time interval (in seconds) between two successive screenshots. captureInterval should be within the range [1, 3600]. The default value is ", _jsx(_components.code, {
                    children: "10"
                  }), "."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "fileType"
                  }), ': JSONArray. File format of the screenshots. fileType can only take ["jpg"], setting screenshots to the JPG format.']
                }), `
`]
              }), `
`]
            })]
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
            children: "Configures the third-party cloud storage."
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
            children: "Configurations for the recorded files."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "If you are recording and taking screenshots in a recording process, this parameter is required; if you are only taking screenshots in a recording process, you cannot fill in this parameter."
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
        children: "Capture screenshots only"
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
              children: '        "snapshotConfig"'
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
              children: '            "captureInterval"'
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
              children: "5"
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
              children: '            "fileType"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "jpg"'
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
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Capture screenshots and recording"
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
              children: '        "snapshotConfig"'
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
              children: '            "captureInterval"'
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
              children: "5"
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
              children: '            "fileType"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "jpg"'
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
              children: '        "recordingFileConfig"'
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
              children: '            "avFileType"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "hls"'
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
`, _jsx(_components.h2, {
      id: "screenshot-files",
      children: "Screenshot files"
    }), `
`, _jsxs(_components.p, {
      children: ["The naming convention of screenshot files is ", _jsx(_components.code, {
        children: "<sid>_<cname>__uid_s_<uid>__uid_e_video_<utc>.jpg"
      }), ", where:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<sid> "
        }), "is the recording ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<cname>"
        }), " is the channel name."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<uid>"
        }), " is the user ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<utc>"
        }), " is the UTC time when the screenshot was generated. The time zone is UTC+0, and the timestamp consists of the year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
          children: "utc"
        }), " is ", _jsx(_components.code, {
          children: "20190611073246073"
        }), ", the screenshot was generated on June 11, 2019, at 07:32", _jsx(_components.div, {}), ".073 a.m."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The screenshot file format is determined by ", _jsx(_components.code, {
        children: "fileType"
      }), " you set in ", _jsx(_components.code, {
        children: "start"
      }), ". Currently only the JPG format is supported."]
    }), `
`, _jsxs(_components.p, {
      children: ["When ", _jsx(_components.a, {
        href: "../../index#features",
        children: "a cloud recording server is disconnected or the process killed"
      }), ", the cloud recording service enables the high availability mechanism, where the fault processing center automatically switches to a new server within 90 seconds to resume the service. When the service enables the mechanism, the screenshot filenames are prepended with ", _jsx(_components.code, {
        children: "bak<n>"
      }), ", where ", _jsx(_components.code, {
        children: "n"
      }), " stands for the number of times the mechanism is enabled in a recording and starts off with ", _jsx(_components.code, {
        children: "0"
      }), ". Taking the filename ", _jsx(_components.code, {
        children: "bak0_sid_channel1__uid_s_123__uid_e_video_20190611073246073.jpg"
      }), " as an example, ", _jsx(_components.code, {
        children: "bak0"
      }), " indicates that this file was generated after the service enabled the high availability mechanism for the first time."]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsx(_components.p, {
      children: "Pay attention to the following parameters as incorrect settings result in errors and failure to capture screenshots:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the URL of your request, you must set ", _jsx(_components.code, {
          children: "mode"
        }), " as ", _jsx(_components.code, {
          children: "individual"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Do not set ", _jsx(_components.code, {
          children: "recordingFileConfig"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "streamTypes"
        }), " must be ", _jsx(_components.code, {
          children: "1"
        }), " or ", _jsx(_components.code, {
          children: "2"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you set ", _jsx(_components.code, {
          children: "subscribeAudioUid"
        }), ", you must also set ", _jsx(_components.code, {
          children: "subscribeVideoUids"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If a user stops sending video stream during a session, the Cloud Recording service stops taking screenshots until the stream resumes."
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
