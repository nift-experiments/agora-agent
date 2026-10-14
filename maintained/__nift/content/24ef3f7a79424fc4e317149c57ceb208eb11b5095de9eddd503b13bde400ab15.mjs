import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "REST quickstart",
  description: "Transcribe audio content of a host's media stream into written words in real time."
};
export let _markdown = `

A Real-Time STT agent subscribes to the audio content of a media stream and transcribes it into text in real time. This page shows you how to use basic RESTful API methods to start, stop, and query a Real-Time STT agent.

<CalloutContainer type="info">
  <CalloutDescription>
    The command-line examples are for demonstration purposes only. In a production environment, send RESTful API requests through your application server.
  </CalloutDescription>
</CalloutContainer>

## Understand the tech [#understand-the-tech]

The following diagram outlines the process of implementing Real-Time STT:

![real-time-stt-flow](https://assets-docs.agora.io/images/real-time-stt/real-time-stt-flow.png)

This process includes calling the following RESTful API methods:

1. \`start\`: Call this method to join the channel and start transcription. If the request is successful, you receive an \`agent_id\` in the response body that identifies the current transcription session.

2. \`update\`: While a transcription agent is running, use the \`update\` method to modify transcription or translation languages or update the hosts for which transcription is enabled.

3. \`query\`: Use this method to query the agent status between \`start\` and \`stop\` calls.

4. \`stop\`: Call this method to stop transcription.

## Prerequisites [#prerequisites]

To follow this procedure, you must:

* Have a valid [Agora Account](https://console.agora.io/).

* Have a valid Agora project with an app ID and a temporary token or a token
  server. For details, see [Agora account management](/en/introduction/account).

* Have a computer with access to the internet. If your network has a firewall, follow the steps in [Firewall requirements](../reference/firewall).

* Join an RTC channel as a host and start streaming. Refer to the [Voice SDK quickstart](/en/realtime-media/rtc/voice-quickstart) guide.

## Project setup [#project-setup]

To enable Real-Time STT:

1. Log in to [Agora Console](https://console.agora.io) and select **RTC Services** from the sidebar.
2. From the **Project** dropdown, select the project for which you want to enable the service.
3. Locate the **Real-Time Speech-to-Text** card and turn on its toggle.
4. Read the prompt and select **Confirm** to enable.

Now you can use Agora Real-Time STT and see the usage statistics on the **Usage** page.

## Implement Real-Time STT [#implement-real-time-stt]

This section presents sample API calls to \`start\`, \`stop\`, \`update\`, and \`query\` a Real-Time STT agent.

### Authentication [#authentication]

Real-Time STT RESTful APIs require basic HTTP authentication. Set the \`Authorization\` parameter to a Base64-encoded credential in every HTTP request header. For details on how to get the \`Authorization\` value, see [RESTful authentication](/en/api-reference/api-ref/speech-to-text/authentication).

### Start an agent [#start-an-agent]

Call \`start\` to start subtitle recording and translation.

When the request is successful you receive an \`agent_id\` in the HTTP response body. This ID is a unique identifier of your transcription session.

**Request example**

Following is a simple request example to start a Real-Time STT agent. Refer to [Encrypt captions](../build/process-transcription-data/encrypt-captions), [Record captions](../build/process-transcription-data/record-captions), and [Transcribe specified hosts](../build/start-transcribing-and-translating/transcribe-individual-host) for more feature configurations.

\`\`\`bash
curl --request post \\
  --url https://api.agora.io/api/speech-to-text/v1/projects/:appid/join \\
  --header 'Authorization: Basic <credentials>' \\
  --data '
{
  "languages": [
    "en-US"
  ],
  "name": "agora-test",
  "maxIdleTime": 50,
  "rtcConfig": {
    "channelName": "agora-test",
    "subBotUid": "47091",
    "pubBotUid": "88222"
  },
  "translateConfig": {
    "languages": [
      {
        "source": "en-US",
        "target": [
          "ar-SA",
          "id-ID",
          "fr-FR",
          "ja-JP"
        ]
      }
    ]
  },
  "captionConfig": {
    "sliceDuration": 60,
    "storage": {
      "accessKey": "test-oss",
      "secretKey": "test-oss",
      "bucket": "test-oss",
      "vendor": 2,
      "region": 3
    }
  }
}'
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    * String UIDs are supported only on a 128 host environment, with full support planned in the near future.
    * \`pubBotUid\` and \`subBotUid\` are \`int\` type UIDs that must be different to avoid unknown issues.
  </CalloutDescription>
</CalloutContainer>

**Response example**

* Success

  \`\`\`json
  {
    "agent_id": "Agent ID.",
    "create_ts": 1730974708,
    "status": "RUNNING"
  }
  \`\`\`

  | Parameter Name | Type    | Description                                                                                                                                                                                                                                                                          |
  | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | \`agent_id\`     | String  | The ID of the agent.                                                                                                                                                                                                                                                                 |
  | \`createTs\`     | Integer | The Unix timestamp (seconds) when the agent was created.                                                                                                                                                                                                                             |
  | \`status\`       | String  | Agent Status:- \`IDLE\`: The agent is not initialized.
  - \`STARTING\`: The agent is starting.
  - \`RUNNING\`: The agent is running.
  - \`STOPPING\`: The agent is exiting.
  - \`STOPPED\`: The agent exited successfully.
  - \`RECOVERING\`: The agent is recovering.
  - \`FAILED\`: Agent exit failed. |

* Failure

  \`\`\`json
  {
    "detail": "Details of the request failure.",
    "reason": "The reason why the request failed."
  }
  \`\`\`

### Query agent status [#query-agent-status]

Call \`query\` to get the status of an agent during a transcription session. When the request is successful, you receive the current status and related information in the response body.

**Request example**

\`\`\`bash
curl --request get \\
  --url https://api.agora.io/api/speech-to-text/v1/projects/:appid/agents/:agentId \\
  --header 'Authorization: Basic <credentials>'
\`\`\`

**Response example**

* Success

  \`\`\`json
  {
    "message": "Details of the request result.",
    "agent_id": "Agent ID.",
    "create_ts": 1730974708,
    "status": "RUNNING"
  }
  \`\`\`

* Failure

  \`\`\`json
  {
    "message": "Details of the failed request.",
    "agent_id": "Agent ID.",
    "create_ts": 1730974708,
    "status": "FAILED"
  }
  \`\`\`

### Update configuration [#update-configuration]

See [Update configuration](../build/start-transcribing-and-translating/update-service) for details.

### Stop the agent [#stop-the-agent]

Call \`stop\` to stop transcribing. When the request is successful, you receive the status of the transcription session in the response body.

**Request example**

\`\`\`bash
curl --request post \\
  --url https://api.agora.io/api/speech-to-text/v1/projects/:appid/agents/:agentId/leave \\
  --header 'Authorization: Basic <credentials>'
\`\`\`

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

### Demo app and source code [#demo-app-and-source-code]

Check out the [demo](https://stt-demo.agora.io) to try out Real-Time STT and evaluate its accuracy and latency.

You can also refer to the [demo code on Github](https://github.com/AgoraIO-Community/Agora-RTT-Demo) to see how captions and transcription are implemented. For more demo code, contact [support@agora.io](mailto\\:support@agora.io).

### REST API middleware [#rest-api-middleware]

[Agora Go Backend Middleware](https://github.com/AgoraIO-Community/agora-go-backend-middleware) is an open-source microservice that exposes a RESTful API designed to simplify Real-Time STT interactions with Agora. Written in Golang and powered by the Gin framework, this community project serves as a middleware to bridge front-end applications using Agora's RTC SDK or Voice SDK with Agora's RESTful APIs.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A Real-Time STT agent subscribes to the audio content of a media stream and transcribes it into text in real time. This page shows you how to use basic RESTful API methods to start, stop, and query a Real-Time STT agent."
  }, {
    heading: undefined,
    content: "The command-line examples are for demonstration purposes only. In a production environment, send RESTful API requests through your application server."
  }, {
    heading: "understand-the-tech",
    content: "The following diagram outlines the process of implementing Real-Time STT:"
  }, {
    heading: "understand-the-tech",
    content: "This process includes calling the following RESTful API methods:"
  }, {
    heading: "understand-the-tech",
    content: "`start`: Call this method to join the channel and start transcription. If the request is successful, you receive an `agent_id` in the response body that identifies the current transcription session."
  }, {
    heading: "understand-the-tech",
    content: "`update`: While a transcription agent is running, use the `update` method to modify transcription or translation languages or update the hosts for which transcription is enabled."
  }, {
    heading: "understand-the-tech",
    content: "`query`: Use this method to query the agent status between `start` and `stop` calls."
  }, {
    heading: "understand-the-tech",
    content: "`stop`: Call this method to stop transcription."
  }, {
    heading: "prerequisites",
    content: "To follow this procedure, you must:"
  }, {
    heading: "prerequisites",
    content: "Have a valid Agora Account."
  }, {
    heading: "prerequisites",
    content: `Have a valid Agora project with an app ID and a temporary token or a token
server. For details, see Agora account management.`
  }, {
    heading: "prerequisites",
    content: "Have a computer with access to the internet. If your network has a firewall, follow the steps in Firewall requirements."
  }, {
    heading: "prerequisites",
    content: "Join an RTC channel as a host and start streaming. Refer to the Voice SDK quickstart guide."
  }, {
    heading: "project-setup",
    content: "To enable Real-Time STT:"
  }, {
    heading: "project-setup",
    content: "Log in to Agora Console and select **RTC Services** from the sidebar."
  }, {
    heading: "project-setup",
    content: "From the **Project** dropdown, select the project for which you want to enable the service."
  }, {
    heading: "project-setup",
    content: "Locate the **Real-Time Speech-to-Text** card and turn on its toggle."
  }, {
    heading: "project-setup",
    content: "Read the prompt and select **Confirm** to enable."
  }, {
    heading: "project-setup",
    content: "Now you can use Agora Real-Time STT and see the usage statistics on the **Usage** page."
  }, {
    heading: "implement-real-time-stt",
    content: "This section presents sample API calls to `start`, `stop`, `update`, and `query` a Real-Time STT agent."
  }, {
    heading: "authentication",
    content: "Real-Time STT RESTful APIs require basic HTTP authentication. Set the `Authorization` parameter to a Base64-encoded credential in every HTTP request header. For details on how to get the `Authorization` value, see RESTful authentication."
  }, {
    heading: "start-an-agent",
    content: "Call `start` to start subtitle recording and translation."
  }, {
    heading: "start-an-agent",
    content: "When the request is successful you receive an `agent_id` in the HTTP response body. This ID is a unique identifier of your transcription session."
  }, {
    heading: "start-an-agent",
    content: "**Request example**"
  }, {
    heading: "start-an-agent",
    content: "Following is a simple request example to start a Real-Time STT agent. Refer to Encrypt captions, Record captions, and Transcribe specified hosts for more feature configurations."
  }, {
    heading: "start-an-agent",
    content: "String UIDs are supported only on a 128 host environment, with full support planned in the near future."
  }, {
    heading: "start-an-agent",
    content: "`pubBotUid` and `subBotUid` are `int` type UIDs that must be different to avoid unknown issues."
  }, {
    heading: "start-an-agent",
    content: "**Response example**"
  }, {
    heading: "start-an-agent",
    content: "Success"
  }, {
    heading: "start-an-agent",
    content: "Parameter Name"
  }, {
    heading: "start-an-agent",
    content: "Type"
  }, {
    heading: "start-an-agent",
    content: "Description"
  }, {
    heading: "start-an-agent",
    content: "`agent_id`"
  }, {
    heading: "start-an-agent",
    content: "String"
  }, {
    heading: "start-an-agent",
    content: "The ID of the agent."
  }, {
    heading: "start-an-agent",
    content: "`createTs`"
  }, {
    heading: "start-an-agent",
    content: "Integer"
  }, {
    heading: "start-an-agent",
    content: "The Unix timestamp (seconds) when the agent was created."
  }, {
    heading: "start-an-agent",
    content: "`status`"
  }, {
    heading: "start-an-agent",
    content: "String"
  }, {
    heading: "start-an-agent",
    content: "Agent Status:- `IDLE`: The agent is not initialized.\n- `STARTING`: The agent is starting.\n- `RUNNING`: The agent is running.\n- `STOPPING`: The agent is exiting.\n- `STOPPED`: The agent exited successfully.\n- `RECOVERING`: The agent is recovering.\n- `FAILED`: Agent exit failed."
  }, {
    heading: "start-an-agent",
    content: "Failure"
  }, {
    heading: "query-agent-status",
    content: "Call `query` to get the status of an agent during a transcription session. When the request is successful, you receive the current status and related information in the response body."
  }, {
    heading: "query-agent-status",
    content: "**Request example**"
  }, {
    heading: "query-agent-status",
    content: "**Response example**"
  }, {
    heading: "query-agent-status",
    content: "Success"
  }, {
    heading: "query-agent-status",
    content: "Failure"
  }, {
    heading: "update-configuration",
    content: "See Update configuration for details."
  }, {
    heading: "stop-the-agent",
    content: "Call `stop` to stop transcribing. When the request is successful, you receive the status of the transcription session in the response body."
  }, {
    heading: "stop-the-agent",
    content: "**Request example**"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "demo-app-and-source-code",
    content: "Check out the demo to try out Real-Time STT and evaluate its accuracy and latency."
  }, {
    heading: "demo-app-and-source-code",
    content: "You can also refer to the demo code on Github to see how captions and transcription are implemented. For more demo code, contact support\\@agora.io."
  }, {
    heading: "rest-api-middleware",
    content: "Agora Go Backend Middleware is an open-source microservice that exposes a RESTful API designed to simplify Real-Time STT interactions with Agora. Written in Golang and powered by the Gin framework, this community project serves as a middleware to bridge front-end applications using Agora's RTC SDK or Voice SDK with Agora's RESTful APIs."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "project-setup",
    content: "Project setup"
  }, {
    id: "implement-real-time-stt",
    content: "Implement Real-Time STT"
  }, {
    id: "authentication",
    content: "Authentication"
  }, {
    id: "start-an-agent",
    content: "Start an agent"
  }, {
    id: "query-agent-status",
    content: "Query agent status"
  }, {
    id: "update-configuration",
    content: "Update configuration"
  }, {
    id: "stop-the-agent",
    content: "Stop the agent"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "demo-app-and-source-code",
    content: "Demo app and source code"
  }, {
    id: "rest-api-middleware",
    content: "REST API middleware"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#implement-real-time-stt",
  title: _jsx(_Fragment, {
    children: "Implement Real-Time STT"
  })
}, {
  depth: 3,
  url: "#authentication",
  title: _jsx(_Fragment, {
    children: "Authentication"
  })
}, {
  depth: 3,
  url: "#start-an-agent",
  title: _jsx(_Fragment, {
    children: "Start an agent"
  })
}, {
  depth: 3,
  url: "#query-agent-status",
  title: _jsx(_Fragment, {
    children: "Query agent status"
  })
}, {
  depth: 3,
  url: "#update-configuration",
  title: _jsx(_Fragment, {
    children: "Update configuration"
  })
}, {
  depth: 3,
  url: "#stop-the-agent",
  title: _jsx(_Fragment, {
    children: "Stop the agent"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#demo-app-and-source-code",
  title: _jsx(_Fragment, {
    children: "Demo app and source code"
  })
}, {
  depth: 3,
  url: "#rest-api-middleware",
  title: _jsx(_Fragment, {
    children: "REST API middleware"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
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
    children: [_jsx(_components.p, {
      children: "A Real-Time STT agent subscribes to the audio content of a media stream and transcribes it into text in real time. This page shows you how to use basic RESTful API methods to start, stop, and query a Real-Time STT agent."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The command-line examples are for demonstration purposes only. In a production environment, send RESTful API requests through your application server."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "The following diagram outlines the process of implementing Real-Time STT:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/real-time-stt/real-time-stt-flow.png",
        alt: "real-time-stt-flow"
      })
    }), `
`, _jsx(_components.p, {
      children: "This process includes calling the following RESTful API methods:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "start"
          }), ": Call this method to join the channel and start transcription. If the request is successful, you receive an ", _jsx(_components.code, {
            children: "agent_id"
          }), " in the response body that identifies the current transcription session."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "update"
          }), ": While a transcription agent is running, use the ", _jsx(_components.code, {
            children: "update"
          }), " method to modify transcription or translation languages or update the hosts for which transcription is enabled."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "query"
          }), ": Use this method to query the agent status between ", _jsx(_components.code, {
            children: "start"
          }), " and ", _jsx(_components.code, {
            children: "stop"
          }), " calls."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "stop"
          }), ": Call this method to stop transcription."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To follow this procedure, you must:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Have a valid ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Account"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [`Have a valid Agora project with an app ID and a temporary token or a token
server. For details, see `, _jsx(_components.a, {
            href: "/en/introduction/account",
            children: "Agora account management"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Have a computer with access to the internet. If your network has a firewall, follow the steps in ", _jsx(_components.a, {
            href: "../reference/firewall",
            children: "Firewall requirements"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Join an RTC channel as a host and start streaming. Refer to the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/voice-quickstart",
            children: "Voice SDK quickstart"
          }), " guide."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "project-setup",
      children: "Project setup"
    }), `
`, _jsx(_components.p, {
      children: "To enable Real-Time STT:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Log in to ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        }), " and select ", _jsx(_components.strong, {
          children: "RTC Services"
        }), " from the sidebar."]
      }), `
`, _jsxs(_components.li, {
        children: ["From the ", _jsx(_components.strong, {
          children: "Project"
        }), " dropdown, select the project for which you want to enable the service."]
      }), `
`, _jsxs(_components.li, {
        children: ["Locate the ", _jsx(_components.strong, {
          children: "Real-Time Speech-to-Text"
        }), " card and turn on its toggle."]
      }), `
`, _jsxs(_components.li, {
        children: ["Read the prompt and select ", _jsx(_components.strong, {
          children: "Confirm"
        }), " to enable."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Now you can use Agora Real-Time STT and see the usage statistics on the ", _jsx(_components.strong, {
        children: "Usage"
      }), " page."]
    }), `
`, _jsx(_components.h2, {
      id: "implement-real-time-stt",
      children: "Implement Real-Time STT"
    }), `
`, _jsxs(_components.p, {
      children: ["This section presents sample API calls to ", _jsx(_components.code, {
        children: "start"
      }), ", ", _jsx(_components.code, {
        children: "stop"
      }), ", ", _jsx(_components.code, {
        children: "update"
      }), ", and ", _jsx(_components.code, {
        children: "query"
      }), " a Real-Time STT agent."]
    }), `
`, _jsx(_components.h3, {
      id: "authentication",
      children: "Authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["Real-Time STT RESTful APIs require basic HTTP authentication. Set the ", _jsx(_components.code, {
        children: "Authorization"
      }), " parameter to a Base64-encoded credential in every HTTP request header. For details on how to get the ", _jsx(_components.code, {
        children: "Authorization"
      }), " value, see ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/speech-to-text/authentication",
        children: "RESTful authentication"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "start-an-agent",
      children: "Start an agent"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "start"
      }), " to start subtitle recording and translation."]
    }), `
`, _jsxs(_components.p, {
      children: ["When the request is successful you receive an ", _jsx(_components.code, {
        children: "agent_id"
      }), " in the HTTP response body. This ID is a unique identifier of your transcription session."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request example"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Following is a simple request example to start a Real-Time STT agent. Refer to ", _jsx(_components.a, {
        href: "../build/process-transcription-data/encrypt-captions",
        children: "Encrypt captions"
      }), ", ", _jsx(_components.a, {
        href: "../build/process-transcription-data/record-captions",
        children: "Record captions"
      }), ", and ", _jsx(_components.a, {
        href: "../build/start-transcribing-and-translating/transcribe-individual-host",
        children: "Transcribe specified hosts"
      }), " for more feature configurations."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " post"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/api/speech-to-text/v1/projects/:appid/join"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Basic <credentials>'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "{"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "languages": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "en-US"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "name": "agora-test",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "maxIdleTime": 50,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "rtcConfig": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "channelName": "agora-test",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "subBotUid": "47091",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "pubBotUid": "88222"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "translateConfig": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "languages": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "source": "en-US",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "target": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "ar-SA",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "id-ID",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "fr-FR",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "ja-JP"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "captionConfig": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "sliceDuration": 60,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "storage": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "accessKey": "test-oss",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "secretKey": "test-oss",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "bucket": "test-oss",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "vendor": 2,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "region": 3'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}'"
            })
          })]
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "String UIDs are supported only on a 128 host environment, with full support planned in the near future."
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pubBotUid"
            }), " and ", _jsx(_components.code, {
              children: "subBotUid"
            }), " are ", _jsx(_components.code, {
              children: "int"
            }), " type UIDs that must be different to avoid unknown issues."]
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response example"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Success"
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
                  children: '  "agent_id"'
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
                  children: '"Agent ID."'
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
                  children: '  "create_ts"'
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
                  children: "1730974708"
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
                  children: '  "status"'
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
                  children: '"RUNNING"'
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
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Parameter Name"
              }), _jsx(_components.th, {
                children: "Type"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "agent_id"
                })
              }), _jsx(_components.td, {
                children: "String"
              }), _jsx(_components.td, {
                children: "The ID of the agent."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "createTs"
                })
              }), _jsx(_components.td, {
                children: "Integer"
              }), _jsx(_components.td, {
                children: "The Unix timestamp (seconds) when the agent was created."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "status"
                })
              }), _jsx(_components.td, {
                children: "String"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.p, {
                  children: "Agent Status:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "IDLE"
                    }), ": The agent is not initialized."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "STARTING"
                    }), ": The agent is starting."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RUNNING"
                    }), ": The agent is running."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "STOPPING"
                    }), ": The agent is exiting."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "STOPPED"
                    }), ": The agent exited successfully."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "RECOVERING"
                    }), ": The agent is recovering."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "FAILED"
                    }), ": Agent exit failed."]
                  }), `
`]
                })]
              })]
            })]
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Failure"
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
                  children: '  "detail"'
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
                  children: '"Details of the request failure."'
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
                  children: '  "reason"'
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
                  children: '"The reason why the request failed."'
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "query-agent-status",
      children: "Query agent status"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "query"
      }), " to get the status of an agent during a transcription session. When the request is successful, you receive the current status and related information in the response body."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request example"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " get"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/api/speech-to-text/v1/projects/:appid/agents/:agentId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Basic <credentials>'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response example"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Success"
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
                  children: '  "message"'
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
                  children: '"Details of the request result."'
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
                  children: '  "agent_id"'
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
                  children: '"Agent ID."'
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
                  children: '  "create_ts"'
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
                  children: "1730974708"
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
                  children: '  "status"'
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
                  children: '"RUNNING"'
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
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Failure"
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
                  children: '  "message"'
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
                  children: '"Details of the failed request."'
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
                  children: '  "agent_id"'
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
                  children: '"Agent ID."'
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
                  children: '  "create_ts"'
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
                  children: "1730974708"
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
                  children: '  "status"'
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
                  children: '"FAILED"'
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "update-configuration",
      children: "Update configuration"
    }), `
`, _jsxs(_components.p, {
      children: ["See ", _jsx(_components.a, {
        href: "../build/start-transcribing-and-translating/update-service",
        children: "Update configuration"
      }), " for details."]
    }), `
`, _jsx(_components.h3, {
      id: "stop-the-agent",
      children: "Stop the agent"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "stop"
      }), " to stop transcribing. When the request is successful, you receive the status of the transcription session in the response body."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request example"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " post"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/api/speech-to-text/v1/projects/:appid/agents/:agentId/leave"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Basic <credentials>'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsx(_components.h3, {
      id: "demo-app-and-source-code",
      children: "Demo app and source code"
    }), `
`, _jsxs(_components.p, {
      children: ["Check out the ", _jsx(_components.a, {
        href: "https://stt-demo.agora.io",
        children: "demo"
      }), " to try out Real-Time STT and evaluate its accuracy and latency."]
    }), `
`, _jsxs(_components.p, {
      children: ["You can also refer to the ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/Agora-RTT-Demo",
        children: "demo code on Github"
      }), " to see how captions and transcription are implemented. For more demo code, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "rest-api-middleware",
      children: "REST API middleware"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/agora-go-backend-middleware",
        children: "Agora Go Backend Middleware"
      }), " is an open-source microservice that exposes a RESTful API designed to simplify Real-Time STT interactions with Agora. Written in Golang and powered by the Gin framework, this community project serves as a middleware to bridge front-end applications using Agora's RTC SDK or Voice SDK with Agora's RESTful APIs."]
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
