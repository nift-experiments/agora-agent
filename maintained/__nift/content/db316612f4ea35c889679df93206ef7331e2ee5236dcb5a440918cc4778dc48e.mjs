import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Notification events",
  description: "Learn about notification service events."
};
export let _markdown = `

When you set up a server to [receive webhook, notifications](../build/receive-ncs-events), Agora notifies your server of the following Cloud Transcoding events.

<CalloutContainer type="info">
  <CalloutDescription>
    Cloud Transcoding notification callbacks use \`productId=22\`.
  </CalloutDescription>
</CalloutContainer>

| Event Type                           | Event Name                 | Description                                     |
| ------------------------------------ | -------------------------- | ----------------------------------------------- |
| [110](#110-cloud_transcoder_started) | \`cloud_transcoder_started\` | Cloud transcoder has started successfully       |
| [111](#111-cloud_transcoder_stopped) | \`cloud_transcoder_stopped\` | Cloud transcoder has been destroyed             |
| [112](#112-cloud_transcoder_status)  | \`cloud_transcoder_status\`  | Cloud transcoder runtime state has changed      |
| [113](#113-cloud_transcoder_updated) | \`cloud_transcoder_updated\` | Cloud transcoder configuration has been updated |

## Common payload structure [#common-payload-structure]

All cloud transcoding webhook events share this structure:

* \`taskId\`: String. Cloud transcoding task ID.
* \`instanceId\`: String. Instance ID from your Create request.
* \`sequence\`: Number. Event sequence number.
* \`sendts\`: Number. Timestamp when event was sent (Unix milliseconds).
* \`serviceScene\`: String. Service identifier, always \`"rtsc/cloud-transcoder"\`.
* \`details\`: JSON Object. Event-specific details (varies by event type).

## 110 \`cloud_transcoder_started\` [#110-cloud_transcoder_started]

When you successfully call [\`Create\`](/en/api-reference/cloud-transcoding/restful) to create a Cloud Transcoder task, your server receives this event notification.

**Sample payload**:

\`\`\`json
{
    "taskId":"1234",
    "instanceId":"123",
    "sequence":123,
    "sendts":1656573243385,
    "serviceScene":"rtsc/cloud-transcoder",
    "details":{
        "event":"cloud_transcoder_started",
        "state":"Transcoder success",
        "createTs":1658112464000,
        "transcoder":{
            "inputs":[
                {
                    "rtcChannel":"test01",
                    "rtcUid":123,
                    "audio":true,
                    "video":false
                },
                {
                    "rtcChannel":"test01",
                    "rtcUid":456,
                    "audio":true,
                    "video":true
                }
            ],
            "outputs":[
                {
                    "rtcChannel":"test01",
                    "rtcUid":1000,
                    "audio":true,
                    "video":true
                }
            ],
            "userConfigDetail":"{XXXX}"
        }
    }
}
\`\`\`

**Payload parameters**:

* \`event\`: String. Callback event type. For this event, it's \`"cloud_transcoder_started"\`, indicating successful creation of a cloud transcoder.
* \`state\`: String. Cloud transcoding status. For this event, it's \`"Transcoder success"\`, indicating successful creation and start of cloud transcoding.
* \`createTs\`: Number. Unix timestamp (seconds) when the cloud transcoder was created.
* \`transcoder\`: JSON Object. Input and output configuration of the cloud transcoder.
  * \`inputs\`: JSON Array. Audio/video input source configuration.
    * \`rtcChannel\`: String. RTC channel name for the audio/video input source.
    * \`rtcUid\`: Number. UID corresponding to the audio/video input source.
    * \`audio\`: Boolean. Whether audio input source exists (\`true\`: has audio input, \`false\`: no audio input).
    * \`video\`: Boolean. Whether video input source exists (\`true\`: has video input, \`false\`: no video input).
  * \`outputs\`: JSON Array. Audio/video output configuration.
    * \`rtcChannel\`: String. RTC channel name for the output audio/video.
    * \`rtcUid\`: Number. UID corresponding to the output audio/video.
    * \`audio\`: Boolean. Whether audio output exists (\`true\`: has audio output, \`false\`: no audio output).
    * \`video\`: Boolean. Whether video output exists (\`true\`: has video output, \`false\`: no video output).
  * \`userConfigDetail\`: String. The \`cloudTranscoder.config\` value from the Create request.

## 111 \`cloud_transcoder_stopped\` [#111-cloud_transcoder_stopped]

This event is sent when the Cloud Transcoder is destroyed, either manually or due to an error.

**Sample payload**:

\`\`\`json
{
    "taskId": "1234",
    "instanceId": "123",
    "sequence": 123,
    "sendts": 1656573243385,
    "serviceScene": "rtsc/cloud-transcoder",
    "details": {
        "event": "cloud_transcoder_stopped",
        "stopReason": "Stop request",
        "createTs": 1658112464000,
        "updateTs": 1658112464000
    }
}
\`\`\`

**Payload parameters**:

* \`event\`: String. Callback event type. For this event, it's \`"cloud_transcoder_stopped"\`, indicating successful destruction of a cloud transcoder.
* \`stopReason\`: String. Reason for cloud transcoding stoppage. Could be due to calling the Delete API or other exceptional reasons. You can use this field to troubleshoot abnormal cloud transcoding stops.
* \`createTs\`: Number. Unix timestamp (seconds) when the cloud transcoder was created.
* \`updateTs\`: Number. Unix timestamp (seconds) when the cloud transcoder was destroyed.

## 112 \`cloud_transcoder_status\` [#112-cloud_transcoder_status]

This event is triggered when the Cloud Transcoder's runtime state changes after it is created.

**Sample payload**:

\`\`\`json
{
    "taskId": "1234",
    "instanceId": "123",
    "sequence": 123,
    "sendts": 1656573243385,
    "serviceScene": "rtsc/cloud-transcoder",
    "details": {
        "event": "cloud_transcoder_status",
        "state": "running",
        "createTs": 1658112464000,
        "updateTs": 1658112464000
    }
}
\`\`\`

**Payload parameters**:

* \`event\`: String. Callback event type. For this event, it's \`"cloud_transcoder_status"\`, indicating cloud transcoder runtime status change.
* \`state\`: String. Cloud transcoding status. Possible values:
  * \`"connecting"\`: Connecting to Agora business servers.
  * \`"running"\`: Operating normally, performing cloud transcoding.
  * \`"failed"\`: Cloud transcoding failed.
* \`createTs\`: Number. Unix timestamp (seconds) when the cloud transcoder was created.
* \`updateTs\`: Number. Unix timestamp (seconds) when the cloud transcoder status was updated.

## 113 \`cloud_transcoder_updated\` [#113-cloud_transcoder_updated]

This event is triggered after you successfully call [\`Update\`](/en/api-reference/cloud-transcoding/restful) to update the Cloud Transcoder configuration.

**Sample payload**:

\`\`\`json
{
    "taskId": "1234",
    "instanceId": "123",
    "sequence": 123,
    "sendts": 1656573243385,
    "serviceScene": "rtsc/cloud-transcoder",
    "details": {
        "event": "cloud_transcoder_updated",
        "state": "running",
        "createTs": 1658112464000,
        "updateTs": 1658112464000,
        "transcoder": {
            "inputs": [
                {
                    "rtcChannel": "test01",
                    "rtcUid": 123,
                    "audio": true,
                    "video": false
                },
                {
                    "rtcChannel": "test01",
                    "rtcUid": 456,
                    "audio": true,
                    "video": true
                }
            ],
            "outputs": [
                {
                    "rtcChannel": "test01",
                    "rtcUid": 1000,
                    "audio": true,
                    "video": true
                }
            ],
            "userConfigDetail": "json_string"
        }
    }
}
\`\`\`

**Payload parameters**:

* \`event\`: String. Callback event type. For this event, it's \`"cloud_transcoder_updated"\`, indicating cloud transcoder configuration update.
* \`state\`: String. Cloud transcoding status. \`"running"\` means the cloud transcoder is operating normally and performing cloud transcoding.
* \`createTs\`: Number. Unix timestamp (seconds) when the cloud transcoder was created.
* \`updateTs\`: Number. Unix timestamp (seconds) when the cloud transcoder configuration was updated.
* \`userConfigDetail\`: String. Configuration content from the request body (\`cloudTranscoder.config\`).
* \`transcoder\`: JSON Object. Input and output configuration of the cloud transcoder.
  * \`inputs\`: JSON Array. Audio/video input source configuration.
    * \`rtcChannel\`: String. RTC channel name for the audio/video input source.
    * \`rtcUid\`: Number. UID corresponding to the audio/video input source.
    * \`audio\`: Boolean. Whether audio input source exists (\`true\`: has audio input, \`false\`: no audio input).
    * \`video\`: Boolean. Whether video input source exists (\`true\`: has video input, \`false\`: no video input).
  * \`outputs\`: JSON Array. Audio/video output configuration.
    * \`rtcChannel\`: String. RTC channel name for the output audio/video.
    * \`rtcUid\`: Number. UID corresponding to the output audio/video.
    * \`audio\`: Boolean. Whether audio output exists (\`true\`: has audio output, \`false\`: no audio output).
    * \`video\`: Boolean. Whether video output exists (\`true\`: has video output, \`false\`: no video output).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When you set up a server to receive webhook, notifications, Agora notifies your server of the following Cloud Transcoding events."
  }, {
    heading: undefined,
    content: "Cloud Transcoding notification callbacks use `productId=22`."
  }, {
    heading: undefined,
    content: "Event Type"
  }, {
    heading: undefined,
    content: "Event Name"
  }, {
    heading: undefined,
    content: "Description"
  }, {
    heading: undefined,
    content: "110"
  }, {
    heading: undefined,
    content: "`cloud_transcoder_started`"
  }, {
    heading: undefined,
    content: "Cloud transcoder has started successfully"
  }, {
    heading: undefined,
    content: "111"
  }, {
    heading: undefined,
    content: "`cloud_transcoder_stopped`"
  }, {
    heading: undefined,
    content: "Cloud transcoder has been destroyed"
  }, {
    heading: undefined,
    content: "112"
  }, {
    heading: undefined,
    content: "`cloud_transcoder_status`"
  }, {
    heading: undefined,
    content: "Cloud transcoder runtime state has changed"
  }, {
    heading: undefined,
    content: "113"
  }, {
    heading: undefined,
    content: "`cloud_transcoder_updated`"
  }, {
    heading: undefined,
    content: "Cloud transcoder configuration has been updated"
  }, {
    heading: "common-payload-structure",
    content: "All cloud transcoding webhook events share this structure:"
  }, {
    heading: "common-payload-structure",
    content: "`taskId`: String. Cloud transcoding task ID."
  }, {
    heading: "common-payload-structure",
    content: "`instanceId`: String. Instance ID from your Create request."
  }, {
    heading: "common-payload-structure",
    content: "`sequence`: Number. Event sequence number."
  }, {
    heading: "common-payload-structure",
    content: "`sendts`: Number. Timestamp when event was sent (Unix milliseconds)."
  }, {
    heading: "common-payload-structure",
    content: '`serviceScene`: String. Service identifier, always `"rtsc/cloud-transcoder"`.'
  }, {
    heading: "common-payload-structure",
    content: "`details`: JSON Object. Event-specific details (varies by event type)."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "When you successfully call `Create` to create a Cloud Transcoder task, your server receives this event notification."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "**Sample payload**:"
  }, {
    heading: "110-cloud_transcoder_started",
    content: "**Payload parameters**:"
  }, {
    heading: "110-cloud_transcoder_started",
    content: '`event`: String. Callback event type. For this event, it\'s `"cloud_transcoder_started"`, indicating successful creation of a cloud transcoder.'
  }, {
    heading: "110-cloud_transcoder_started",
    content: '`state`: String. Cloud transcoding status. For this event, it\'s `"Transcoder success"`, indicating successful creation and start of cloud transcoding.'
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`createTs`: Number. Unix timestamp (seconds) when the cloud transcoder was created."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`transcoder`: JSON Object. Input and output configuration of the cloud transcoder."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`inputs`: JSON Array. Audio/video input source configuration."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`rtcChannel`: String. RTC channel name for the audio/video input source."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`rtcUid`: Number. UID corresponding to the audio/video input source."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`audio`: Boolean. Whether audio input source exists (`true`: has audio input, `false`: no audio input)."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`video`: Boolean. Whether video input source exists (`true`: has video input, `false`: no video input)."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`outputs`: JSON Array. Audio/video output configuration."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`rtcChannel`: String. RTC channel name for the output audio/video."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`rtcUid`: Number. UID corresponding to the output audio/video."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`audio`: Boolean. Whether audio output exists (`true`: has audio output, `false`: no audio output)."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`video`: Boolean. Whether video output exists (`true`: has video output, `false`: no video output)."
  }, {
    heading: "110-cloud_transcoder_started",
    content: "`userConfigDetail`: String. The `cloudTranscoder.config` value from the Create request."
  }, {
    heading: "111-cloud_transcoder_stopped",
    content: "This event is sent when the Cloud Transcoder is destroyed, either manually or due to an error."
  }, {
    heading: "111-cloud_transcoder_stopped",
    content: "**Sample payload**:"
  }, {
    heading: "111-cloud_transcoder_stopped",
    content: "**Payload parameters**:"
  }, {
    heading: "111-cloud_transcoder_stopped",
    content: '`event`: String. Callback event type. For this event, it\'s `"cloud_transcoder_stopped"`, indicating successful destruction of a cloud transcoder.'
  }, {
    heading: "111-cloud_transcoder_stopped",
    content: "`stopReason`: String. Reason for cloud transcoding stoppage. Could be due to calling the Delete API or other exceptional reasons. You can use this field to troubleshoot abnormal cloud transcoding stops."
  }, {
    heading: "111-cloud_transcoder_stopped",
    content: "`createTs`: Number. Unix timestamp (seconds) when the cloud transcoder was created."
  }, {
    heading: "111-cloud_transcoder_stopped",
    content: "`updateTs`: Number. Unix timestamp (seconds) when the cloud transcoder was destroyed."
  }, {
    heading: "112-cloud_transcoder_status",
    content: "This event is triggered when the Cloud Transcoder's runtime state changes after it is created."
  }, {
    heading: "112-cloud_transcoder_status",
    content: "**Sample payload**:"
  }, {
    heading: "112-cloud_transcoder_status",
    content: "**Payload parameters**:"
  }, {
    heading: "112-cloud_transcoder_status",
    content: '`event`: String. Callback event type. For this event, it\'s `"cloud_transcoder_status"`, indicating cloud transcoder runtime status change.'
  }, {
    heading: "112-cloud_transcoder_status",
    content: "`state`: String. Cloud transcoding status. Possible values:"
  }, {
    heading: "112-cloud_transcoder_status",
    content: '`"connecting"`: Connecting to Agora business servers.'
  }, {
    heading: "112-cloud_transcoder_status",
    content: '`"running"`: Operating normally, performing cloud transcoding.'
  }, {
    heading: "112-cloud_transcoder_status",
    content: '`"failed"`: Cloud transcoding failed.'
  }, {
    heading: "112-cloud_transcoder_status",
    content: "`createTs`: Number. Unix timestamp (seconds) when the cloud transcoder was created."
  }, {
    heading: "112-cloud_transcoder_status",
    content: "`updateTs`: Number. Unix timestamp (seconds) when the cloud transcoder status was updated."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "This event is triggered after you successfully call `Update` to update the Cloud Transcoder configuration."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "**Sample payload**:"
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "**Payload parameters**:"
  }, {
    heading: "113-cloud_transcoder_updated",
    content: '`event`: String. Callback event type. For this event, it\'s `"cloud_transcoder_updated"`, indicating cloud transcoder configuration update.'
  }, {
    heading: "113-cloud_transcoder_updated",
    content: '`state`: String. Cloud transcoding status. `"running"` means the cloud transcoder is operating normally and performing cloud transcoding.'
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`createTs`: Number. Unix timestamp (seconds) when the cloud transcoder was created."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`updateTs`: Number. Unix timestamp (seconds) when the cloud transcoder configuration was updated."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`userConfigDetail`: String. Configuration content from the request body (`cloudTranscoder.config`)."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`transcoder`: JSON Object. Input and output configuration of the cloud transcoder."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`inputs`: JSON Array. Audio/video input source configuration."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`rtcChannel`: String. RTC channel name for the audio/video input source."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`rtcUid`: Number. UID corresponding to the audio/video input source."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`audio`: Boolean. Whether audio input source exists (`true`: has audio input, `false`: no audio input)."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`video`: Boolean. Whether video input source exists (`true`: has video input, `false`: no video input)."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`outputs`: JSON Array. Audio/video output configuration."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`rtcChannel`: String. RTC channel name for the output audio/video."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`rtcUid`: Number. UID corresponding to the output audio/video."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`audio`: Boolean. Whether audio output exists (`true`: has audio output, `false`: no audio output)."
  }, {
    heading: "113-cloud_transcoder_updated",
    content: "`video`: Boolean. Whether video output exists (`true`: has video output, `false`: no video output)."
  }],
  headings: [{
    id: "common-payload-structure",
    content: "Common payload structure"
  }, {
    id: "110-cloud_transcoder_started",
    content: "110 `cloud_transcoder_started`"
  }, {
    id: "111-cloud_transcoder_stopped",
    content: "111 `cloud_transcoder_stopped`"
  }, {
    id: "112-cloud_transcoder_status",
    content: "112 `cloud_transcoder_status`"
  }, {
    id: "113-cloud_transcoder_updated",
    content: "113 `cloud_transcoder_updated`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#common-payload-structure",
  title: _jsx(_Fragment, {
    children: "Common payload structure"
  })
}, {
  depth: 2,
  url: "#110-cloud_transcoder_started",
  title: _jsxs(_Fragment, {
    children: ["110 ", _jsx("code", {
      children: "cloud_transcoder_started"
    })]
  })
}, {
  depth: 2,
  url: "#111-cloud_transcoder_stopped",
  title: _jsxs(_Fragment, {
    children: ["111 ", _jsx("code", {
      children: "cloud_transcoder_stopped"
    })]
  })
}, {
  depth: 2,
  url: "#112-cloud_transcoder_status",
  title: _jsxs(_Fragment, {
    children: ["112 ", _jsx("code", {
      children: "cloud_transcoder_status"
    })]
  })
}, {
  depth: 2,
  url: "#113-cloud_transcoder_updated",
  title: _jsxs(_Fragment, {
    children: ["113 ", _jsx("code", {
      children: "cloud_transcoder_updated"
    })]
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
    children: [_jsxs(_components.p, {
      children: ["When you set up a server to ", _jsx(_components.a, {
        href: "../build/receive-ncs-events",
        children: "receive webhook, notifications"
      }), ", Agora notifies your server of the following Cloud Transcoding events."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Cloud Transcoding notification callbacks use ", _jsx(_components.code, {
            children: "productId=22"
          }), "."]
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Event Type"
          }), _jsx(_components.th, {
            children: "Event Name"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#110-cloud_transcoder_started",
              children: "110"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "cloud_transcoder_started"
            })
          }), _jsx(_components.td, {
            children: "Cloud transcoder has started successfully"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#111-cloud_transcoder_stopped",
              children: "111"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "cloud_transcoder_stopped"
            })
          }), _jsx(_components.td, {
            children: "Cloud transcoder has been destroyed"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#112-cloud_transcoder_status",
              children: "112"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "cloud_transcoder_status"
            })
          }), _jsx(_components.td, {
            children: "Cloud transcoder runtime state has changed"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#113-cloud_transcoder_updated",
              children: "113"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "cloud_transcoder_updated"
            })
          }), _jsx(_components.td, {
            children: "Cloud transcoder configuration has been updated"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "common-payload-structure",
      children: "Common payload structure"
    }), `
`, _jsx(_components.p, {
      children: "All cloud transcoding webhook events share this structure:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "taskId"
        }), ": String. Cloud transcoding task ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "instanceId"
        }), ": String. Instance ID from your Create request."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sequence"
        }), ": Number. Event sequence number."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sendts"
        }), ": Number. Timestamp when event was sent (Unix milliseconds)."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "serviceScene"
        }), ": String. Service identifier, always ", _jsx(_components.code, {
          children: '"rtsc/cloud-transcoder"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "details"
        }), ": JSON Object. Event-specific details (varies by event type)."]
      }), `
`]
    }), `
`, _jsxs(_components.h2, {
      id: "110-cloud_transcoder_started",
      children: ["110 ", _jsx(_components.code, {
        children: "cloud_transcoder_started"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["When you successfully call ", _jsx(_components.a, {
        href: "/en/api-reference/cloud-transcoding/restful",
        children: _jsx(_components.code, {
          children: "Create"
        })
      }), " to create a Cloud Transcoder task, your server receives this event notification."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Sample payload"
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
              children: '    "taskId"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"1234"'
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
              children: '    "instanceId"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"123"'
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
              children: '    "sequence"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "123"
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
              children: '    "sendts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1656573243385"
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
              children: '    "serviceScene"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"rtsc/cloud-transcoder"'
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
              children: '    "details"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "event"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"cloud_transcoder_started"'
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
              children: '        "state"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Transcoder success"'
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
              children: '        "createTs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1658112464000"
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
              children: '        "transcoder"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "inputs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "rtcChannel"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"test01"'
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
              children: '                    "rtcUid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "123"
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
              children: '                    "audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
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
              children: '                    "video"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "rtcChannel"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"test01"'
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
              children: '                    "rtcUid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "456"
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
              children: '                    "audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
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
              children: '                    "video"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                }"
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
              children: '            "outputs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "rtcChannel"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"test01"'
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
              children: '                    "rtcUid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1000"
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
              children: '                    "audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
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
              children: '                    "video"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                }"
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
              children: '            "userConfigDetail"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"{XXXX}"'
            })]
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
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Payload parameters"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "event"
        }), ": String. Callback event type. For this event, it's ", _jsx(_components.code, {
          children: '"cloud_transcoder_started"'
        }), ", indicating successful creation of a cloud transcoder."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "state"
        }), ": String. Cloud transcoding status. For this event, it's ", _jsx(_components.code, {
          children: '"Transcoder success"'
        }), ", indicating successful creation and start of cloud transcoding."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "createTs"
        }), ": Number. Unix timestamp (seconds) when the cloud transcoder was created."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "transcoder"
        }), ": JSON Object. Input and output configuration of the cloud transcoder.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "inputs"
            }), ": JSON Array. Audio/video input source configuration.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtcChannel"
                }), ": String. RTC channel name for the audio/video input source."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtcUid"
                }), ": Number. UID corresponding to the audio/video input source."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "audio"
                }), ": Boolean. Whether audio input source exists (", _jsx(_components.code, {
                  children: "true"
                }), ": has audio input, ", _jsx(_components.code, {
                  children: "false"
                }), ": no audio input)."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "video"
                }), ": Boolean. Whether video input source exists (", _jsx(_components.code, {
                  children: "true"
                }), ": has video input, ", _jsx(_components.code, {
                  children: "false"
                }), ": no video input)."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "outputs"
            }), ": JSON Array. Audio/video output configuration.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtcChannel"
                }), ": String. RTC channel name for the output audio/video."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtcUid"
                }), ": Number. UID corresponding to the output audio/video."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "audio"
                }), ": Boolean. Whether audio output exists (", _jsx(_components.code, {
                  children: "true"
                }), ": has audio output, ", _jsx(_components.code, {
                  children: "false"
                }), ": no audio output)."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "video"
                }), ": Boolean. Whether video output exists (", _jsx(_components.code, {
                  children: "true"
                }), ": has video output, ", _jsx(_components.code, {
                  children: "false"
                }), ": no video output)."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "userConfigDetail"
            }), ": String. The ", _jsx(_components.code, {
              children: "cloudTranscoder.config"
            }), " value from the Create request."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.h2, {
      id: "111-cloud_transcoder_stopped",
      children: ["111 ", _jsx(_components.code, {
        children: "cloud_transcoder_stopped"
      })]
    }), `
`, _jsx(_components.p, {
      children: "This event is sent when the Cloud Transcoder is destroyed, either manually or due to an error."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Sample payload"
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
              children: '    "taskId"'
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
              children: '"1234"'
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
              children: '    "instanceId"'
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
              children: '"123"'
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
              children: '    "sequence"'
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
              children: "123"
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
              children: '    "sendts"'
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
              children: "1656573243385"
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
              children: '    "serviceScene"'
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
              children: '"rtsc/cloud-transcoder"'
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
              children: '    "details"'
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
              children: '        "event"'
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
              children: '"cloud_transcoder_stopped"'
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
              children: '        "stopReason"'
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
              children: '"Stop request"'
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
              children: '        "createTs"'
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
              children: "1658112464000"
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
              children: '        "updateTs"'
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
              children: "1658112464000"
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
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Payload parameters"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "event"
        }), ": String. Callback event type. For this event, it's ", _jsx(_components.code, {
          children: '"cloud_transcoder_stopped"'
        }), ", indicating successful destruction of a cloud transcoder."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "stopReason"
        }), ": String. Reason for cloud transcoding stoppage. Could be due to calling the Delete API or other exceptional reasons. You can use this field to troubleshoot abnormal cloud transcoding stops."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "createTs"
        }), ": Number. Unix timestamp (seconds) when the cloud transcoder was created."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "updateTs"
        }), ": Number. Unix timestamp (seconds) when the cloud transcoder was destroyed."]
      }), `
`]
    }), `
`, _jsxs(_components.h2, {
      id: "112-cloud_transcoder_status",
      children: ["112 ", _jsx(_components.code, {
        children: "cloud_transcoder_status"
      })]
    }), `
`, _jsx(_components.p, {
      children: "This event is triggered when the Cloud Transcoder's runtime state changes after it is created."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Sample payload"
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
              children: '    "taskId"'
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
              children: '"1234"'
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
              children: '    "instanceId"'
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
              children: '"123"'
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
              children: '    "sequence"'
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
              children: "123"
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
              children: '    "sendts"'
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
              children: "1656573243385"
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
              children: '    "serviceScene"'
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
              children: '"rtsc/cloud-transcoder"'
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
              children: '    "details"'
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
              children: '        "event"'
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
              children: '"cloud_transcoder_status"'
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
              children: '        "state"'
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
              children: '"running"'
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
              children: '        "createTs"'
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
              children: "1658112464000"
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
              children: '        "updateTs"'
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
              children: "1658112464000"
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
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Payload parameters"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "event"
        }), ": String. Callback event type. For this event, it's ", _jsx(_components.code, {
          children: '"cloud_transcoder_status"'
        }), ", indicating cloud transcoder runtime status change."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "state"
        }), ": String. Cloud transcoding status. Possible values:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"connecting"'
            }), ": Connecting to Agora business servers."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"running"'
            }), ": Operating normally, performing cloud transcoding."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"failed"'
            }), ": Cloud transcoding failed."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "createTs"
        }), ": Number. Unix timestamp (seconds) when the cloud transcoder was created."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "updateTs"
        }), ": Number. Unix timestamp (seconds) when the cloud transcoder status was updated."]
      }), `
`]
    }), `
`, _jsxs(_components.h2, {
      id: "113-cloud_transcoder_updated",
      children: ["113 ", _jsx(_components.code, {
        children: "cloud_transcoder_updated"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["This event is triggered after you successfully call ", _jsx(_components.a, {
        href: "/en/api-reference/cloud-transcoding/restful",
        children: _jsx(_components.code, {
          children: "Update"
        })
      }), " to update the Cloud Transcoder configuration."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Sample payload"
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
              children: '    "taskId"'
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
              children: '"1234"'
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
              children: '    "instanceId"'
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
              children: '"123"'
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
              children: '    "sequence"'
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
              children: "123"
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
              children: '    "sendts"'
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
              children: "1656573243385"
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
              children: '    "serviceScene"'
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
              children: '"rtsc/cloud-transcoder"'
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
              children: '    "details"'
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
              children: '        "event"'
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
              children: '"cloud_transcoder_updated"'
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
              children: '        "state"'
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
              children: '"running"'
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
              children: '        "createTs"'
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
              children: "1658112464000"
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
              children: '        "updateTs"'
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
              children: "1658112464000"
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
              children: '        "transcoder"'
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
              children: '            "inputs"'
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "rtcChannel"'
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
              children: '"test01"'
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
              children: '                    "rtcUid"'
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
              children: "123"
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
              children: '                    "audio"'
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
              children: "true"
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
              children: '                    "video"'
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
              children: "false"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "rtcChannel"'
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
              children: '"test01"'
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
              children: '                    "rtcUid"'
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
              children: "456"
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
              children: '                    "audio"'
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
              children: "true"
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
              children: '                    "video"'
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
              children: "true"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                }"
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
              children: '            "outputs"'
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "rtcChannel"'
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
              children: '"test01"'
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
              children: '                    "rtcUid"'
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
              children: "1000"
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
              children: '                    "audio"'
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
              children: "true"
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
              children: '                    "video"'
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
              children: "true"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                }"
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
              children: '            "userConfigDetail"'
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
              children: '"json_string"'
            })]
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
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Payload parameters"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "event"
        }), ": String. Callback event type. For this event, it's ", _jsx(_components.code, {
          children: '"cloud_transcoder_updated"'
        }), ", indicating cloud transcoder configuration update."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "state"
        }), ": String. Cloud transcoding status. ", _jsx(_components.code, {
          children: '"running"'
        }), " means the cloud transcoder is operating normally and performing cloud transcoding."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "createTs"
        }), ": Number. Unix timestamp (seconds) when the cloud transcoder was created."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "updateTs"
        }), ": Number. Unix timestamp (seconds) when the cloud transcoder configuration was updated."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "userConfigDetail"
        }), ": String. Configuration content from the request body (", _jsx(_components.code, {
          children: "cloudTranscoder.config"
        }), ")."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "transcoder"
        }), ": JSON Object. Input and output configuration of the cloud transcoder.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "inputs"
            }), ": JSON Array. Audio/video input source configuration.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtcChannel"
                }), ": String. RTC channel name for the audio/video input source."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtcUid"
                }), ": Number. UID corresponding to the audio/video input source."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "audio"
                }), ": Boolean. Whether audio input source exists (", _jsx(_components.code, {
                  children: "true"
                }), ": has audio input, ", _jsx(_components.code, {
                  children: "false"
                }), ": no audio input)."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "video"
                }), ": Boolean. Whether video input source exists (", _jsx(_components.code, {
                  children: "true"
                }), ": has video input, ", _jsx(_components.code, {
                  children: "false"
                }), ": no video input)."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "outputs"
            }), ": JSON Array. Audio/video output configuration.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtcChannel"
                }), ": String. RTC channel name for the output audio/video."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtcUid"
                }), ": Number. UID corresponding to the output audio/video."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "audio"
                }), ": Boolean. Whether audio output exists (", _jsx(_components.code, {
                  children: "true"
                }), ": has audio output, ", _jsx(_components.code, {
                  children: "false"
                }), ": no audio output)."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "video"
                }), ": Boolean. Whether video output exists (", _jsx(_components.code, {
                  children: "true"
                }), ": has video output, ", _jsx(_components.code, {
                  children: "false"
                }), ": no video output)."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
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
