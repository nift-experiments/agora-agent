import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Get agent state",
  description: "Monitor agent state changes in real time using RTM Message events."
};
export let _markdown = `

If you need to track agent state changes in your client app, you can use either Signaling (RTM) Message or RTM Presence. This guide explains how to get agent state using RTM Message and describes [how the two approaches differ](#rtm-message-vs-rtm-presence).

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    * To monitor state changes using client components, see [Listen to agent events](/en/ai/build/handle-runtime-events/webhooks).
    * To get agent state through RTM Presence, continue using your existing Presence implementation.
  </CalloutDescription>
</CalloutContainer>

## Understand the tech [#understand-the-tech]

The Conversational AI Engine pushes agent state change events to the client as individual RTM messages through the \`onMessageEvent\` callback. Unlike RTM Presence, which synchronizes state as key-value pairs, RTM Message wraps each state change in a separate event message. This makes it easier to record state change timestamps, process events sequentially, or consume state events together with other RTM Message events.

The inner \`message\` field of each RTM message is a JSON string that requires a second parse to access the state event data. Use the \`event_type\` field in the inner message to identify the event type.

The following agent states are pushed through RTM Message:

* \`state.listening\`
* \`state.thinking\`
* \`state.speaking\`

The flow works as follows:

\`\`\`text
Agent state change
  ├─ listening -> true / false
  ├─ thinking  -> true / false
  └─ speaking  -> true / false
        ↓
    RTM Message
        ↓
  Client parses inner payload and identifies event by event_type
\`\`\`

### State event types [#state-event-types]

The Conversational AI Engine sends an RTM Message each time the agent state changes. Each message corresponds to a single state change event.

| \`event_type\`      | Description                                         |
| :---------------- | :-------------------------------------------------- |
| \`state.listening\` | The agent starts or stops listening for user input. |
| \`state.thinking\`  | The agent starts or stops processing user input.    |
| \`state.speaking\`  | The agent starts or stops speaking.                 |

### Message structure [#message-structure]

The inner \`message\` field is a JSON string. After deserialization, the structure is as follows:

\`\`\`json
{
  "event_id": "xxxx",
  "event_type": "state.listening",
  "event_ms": 1611566412672,
  "payload": {
    "value": true,
    "timestamp": 1611566412600
  }
}
\`\`\`

| Field               | Type    | Description                                                                             |
| :------------------ | :------ | :-------------------------------------------------------------------------------------- |
| \`event_id\`          | string  | Unique event ID.                                                                        |
| \`event_type\`        | string  | State event type. One of \`state.listening\`, \`state.thinking\`, or \`state.speaking\`.      |
| \`event_ms\`          | integer | Timestamp when the event was sent, in milliseconds.                                     |
| \`payload.value\`     | boolean | Current state value. \`true\` means the agent entered the state; \`false\` means it exited. |
| \`payload.timestamp\` | integer | Timestamp when the state change actually occurred, in milliseconds.                     |

## Prerequisites [#prerequisites]

Before you begin, ensure that you have:

* Completed the basic agent integration. See [Quickstart](/en/ai/get-started/quickstart).
* Integrated the RTM SDK and implemented message listener logic. See [RTM quickstart](https://docs.agora.io/en/signaling/get-started/sdk-quickstart).
* Enabled the RTM service and set \`data_channel\` to \`rtm\` when starting the agent.

## Implementation [#implementation]

### Enable RTM when starting the agent [#enable-rtm-when-starting-the-agent]

When calling [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join), include the following configuration:

\`\`\`json
{
  "properties": {
    "advanced_features": {
      "enable_rtm": true
    },
    "parameters": {
      "data_channel": "rtm"
    }
  }
}
\`\`\`

### Listen for and parse state messages [#listen-for-and-parse-state-messages]

After logging in to RTM and subscribing to the channel with the same name as the agent, parse state messages in the RTM message callback. The handling logic consists of the following steps:

1. Deserialize the RTM \`message\` field into a state event object.
2. Check that the deserialized result contains \`event_type\` and \`payload\`.
3. Dispatch handling based on \`event_type\`, and use \`payload.value\` to update your app state.

In the following examples:

* The inner \`message\` field is a JSON string and must be deserialized again to obtain \`event_type\` and \`payload\`.
* \`event_type\` identifies the specific state type.
* \`payload.value\` indicates whether the agent is entering (\`true\`) or exiting (\`false\`) the state.
* \`payload.timestamp\` can be used for precise ordering or logging.

<Tabs defaultValue="android" groupId="ai-toolkit-platform">
  <TabsList>
    <TabsTrigger value="android">
      Android
    </TabsTrigger>

    <TabsTrigger value="ios">
      iOS
    </TabsTrigger>

    <TabsTrigger value="web">
      Web
    </TabsTrigger>
  </TabsList>

  <TabsContent value="android">
    \`\`\`kotlin
    val rtmConfig = RtmConfig()
    rtmConfig.eventListener = object : RtmEventListener {
        override fun onMessageEvent(event: MessageEvent) {
            // 1. Deserialize the inner message (JSON string)
            val payload = JSONObject(event.message.data)
            if (!payload.has("event_type") || !payload.has("payload")) {
                return
            }
            val eventType = payload.getString("event_type")
            val statePayload = payload.getJSONObject("payload")
            val value = statePayload.getBoolean("value")
            val timestamp = statePayload.getLong("timestamp")

            // 2. Dispatch based on event_type
            when (eventType) {
                "state.listening" -> handleListeningChanged(value, timestamp)
                "state.thinking"  -> handleThinkingChanged(value, timestamp)
                "state.speaking"  -> handleSpeakingChanged(value, timestamp)
            }
        }
    }
    mRtmClient = RtmClient.create(rtmConfig)
    \`\`\`
  </TabsContent>

  <TabsContent value="ios">
    \`\`\`swift
    func rtmKit(_ rtmKit: AgoraRtmClientKit, didReceiveMessageEvent event: AgoraRtmMessageEvent) {
        // 1. Deserialize the inner message (JSON string)
        guard let jsonString = event.message.stringData,
              let data = jsonString.data(using: .utf8),
              let payload = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
              let eventType = payload["event_type"] as? String,
              let statePayload = payload["payload"] as? [String: Any] else {
            return
        }
        let value = statePayload["value"] as? Bool ?? false
        let timestamp = statePayload["timestamp"] as? Int ?? 0

        // 2. Dispatch based on event_type
        switch eventType {
        case "state.listening":
            handleListeningChanged(value, timestamp)
        case "state.thinking":
            handleThinkingChanged(value, timestamp)
        case "state.speaking":
            handleSpeakingChanged(value, timestamp)
        default:
            break
        }
    }
    \`\`\`
  </TabsContent>

  <TabsContent value="web">
    \`\`\`typescript
    rtm.addEventListener("message", (event) => {
        // 1. Deserialize the inner message (JSON string)
        const payload = JSON.parse(event.message as string);
        if (!payload.event_type || !payload.payload) {
            return;
        }
        const { event_type, payload: statePayload } = payload;

        // 2. Dispatch based on event_type
        switch (event_type) {
            case "state.listening":
                handleListeningChanged(statePayload.value, statePayload.timestamp);
                break;
            case "state.thinking":
                handleThinkingChanged(statePayload.value, statePayload.timestamp);
                break;
            case "state.speaking":
                handleSpeakingChanged(statePayload.value, statePayload.timestamp);
                break;
        }
    });
    \`\`\`
  </TabsContent>
</Tabs>

### Update app state [#update-app-state]

Use the received events to update your UI or internal state machine. For example:

* When \`state.listening\` with \`payload.value = true\` is received, display "Listening".
* When \`state.thinking\` with \`payload.value = true\` is received, display "Thinking".
* When \`state.speaking\` with \`payload.value = true\` is received, display "Speaking".

## RTM Message vs RTM Presence [#rtm-message-vs-rtm-presence]

The Conversational AI Engine supports getting agent state through both RTM Message and RTM Presence. The key differences are:

|             | RTM Presence                     | RTM Message                                              |
| :---------- | :------------------------------- | :------------------------------------------------------- |
| Return form | State key-value pairs            | State event messages                                     |
| Granularity | Better for reading current state | Better for handling each state change                    |
| Timing info | Relies on message arrival time   | Includes explicit \`event_ms\` and \`payload.timestamp\`     |
| Use case    | Simple UI state display          | Event-driven logic, logging, unified message consumption |

Choose based on your needs:

* If you only need to update the UI based on whether the agent is currently \`listening\`, \`thinking\`, or \`speaking\`, RTM Presence is simpler to integrate.
* If you want to process state changes together with captions, interruptions, or performance metrics in a unified RTM Message handler, use RTM Message.
* If you need to record the timestamp of each state change or analyze state transitions in sequence, use RTM Message.

## Considerations [#considerations]

Keep the following in mind when implementing this feature:

* **Double deserialization**: The inner \`message\` field is a JSON string and must be deserialized a second time to access \`event_type\` and \`payload\`.
* **Avoid duplicate UI updates**: If you are already driving UI state through RTM Presence, avoid having both implementations update the same UI state simultaneously, as this can cause redundant updates or state flickering.
* **\`state.speaking\` end timing**: A \`state.speaking\` value of \`false\` does not guarantee that the client has finished playing audio. The server estimates the speaking end time based on TTS audio length, so there may be a delay between the state switching to \`false\` and the client completing playback.
* **Scope of state messages**: State messages cover only \`listening\`, \`thinking\`, and \`speaking\` agent state events. Manual SoS and EoS signals and their callbacks are not included.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If you need to track agent state changes in your client app, you can use either Signaling (RTM) Message or RTM Presence. This guide explains how to get agent state using RTM Message and describes how the two approaches differ."
  }, {
    heading: undefined,
    content: "To monitor state changes using client components, see Listen to agent events."
  }, {
    heading: undefined,
    content: "To get agent state through RTM Presence, continue using your existing Presence implementation."
  }, {
    heading: "understand-the-tech",
    content: "The Conversational AI Engine pushes agent state change events to the client as individual RTM messages through the `onMessageEvent` callback. Unlike RTM Presence, which synchronizes state as key-value pairs, RTM Message wraps each state change in a separate event message. This makes it easier to record state change timestamps, process events sequentially, or consume state events together with other RTM Message events."
  }, {
    heading: "understand-the-tech",
    content: "The inner `message` field of each RTM message is a JSON string that requires a second parse to access the state event data. Use the `event_type` field in the inner message to identify the event type."
  }, {
    heading: "understand-the-tech",
    content: "The following agent states are pushed through RTM Message:"
  }, {
    heading: "understand-the-tech",
    content: "`state.listening`"
  }, {
    heading: "understand-the-tech",
    content: "`state.thinking`"
  }, {
    heading: "understand-the-tech",
    content: "`state.speaking`"
  }, {
    heading: "understand-the-tech",
    content: "The flow works as follows:"
  }, {
    heading: "state-event-types",
    content: "The Conversational AI Engine sends an RTM Message each time the agent state changes. Each message corresponds to a single state change event."
  }, {
    heading: "state-event-types",
    content: "`event_type`"
  }, {
    heading: "state-event-types",
    content: "Description"
  }, {
    heading: "state-event-types",
    content: "`state.listening`"
  }, {
    heading: "state-event-types",
    content: "The agent starts or stops listening for user input."
  }, {
    heading: "state-event-types",
    content: "`state.thinking`"
  }, {
    heading: "state-event-types",
    content: "The agent starts or stops processing user input."
  }, {
    heading: "state-event-types",
    content: "`state.speaking`"
  }, {
    heading: "state-event-types",
    content: "The agent starts or stops speaking."
  }, {
    heading: "message-structure",
    content: "The inner `message` field is a JSON string. After deserialization, the structure is as follows:"
  }, {
    heading: "message-structure",
    content: "Field"
  }, {
    heading: "message-structure",
    content: "Type"
  }, {
    heading: "message-structure",
    content: "Description"
  }, {
    heading: "message-structure",
    content: "`event_id`"
  }, {
    heading: "message-structure",
    content: "string"
  }, {
    heading: "message-structure",
    content: "Unique event ID."
  }, {
    heading: "message-structure",
    content: "`event_type`"
  }, {
    heading: "message-structure",
    content: "string"
  }, {
    heading: "message-structure",
    content: "State event type. One of `state.listening`, `state.thinking`, or `state.speaking`."
  }, {
    heading: "message-structure",
    content: "`event_ms`"
  }, {
    heading: "message-structure",
    content: "integer"
  }, {
    heading: "message-structure",
    content: "Timestamp when the event was sent, in milliseconds."
  }, {
    heading: "message-structure",
    content: "`payload.value`"
  }, {
    heading: "message-structure",
    content: "boolean"
  }, {
    heading: "message-structure",
    content: "Current state value. `true` means the agent entered the state; `false` means it exited."
  }, {
    heading: "message-structure",
    content: "`payload.timestamp`"
  }, {
    heading: "message-structure",
    content: "integer"
  }, {
    heading: "message-structure",
    content: "Timestamp when the state change actually occurred, in milliseconds."
  }, {
    heading: "prerequisites",
    content: "Before you begin, ensure that you have:"
  }, {
    heading: "prerequisites",
    content: "Completed the basic agent integration. See Quickstart."
  }, {
    heading: "prerequisites",
    content: "Integrated the RTM SDK and implemented message listener logic. See RTM quickstart."
  }, {
    heading: "prerequisites",
    content: "Enabled the RTM service and set `data_channel` to `rtm` when starting the agent."
  }, {
    heading: "enable-rtm-when-starting-the-agent",
    content: "When calling Start a conversational AI agent, include the following configuration:"
  }, {
    heading: "listen-for-and-parse-state-messages",
    content: "After logging in to RTM and subscribing to the channel with the same name as the agent, parse state messages in the RTM message callback. The handling logic consists of the following steps:"
  }, {
    heading: "listen-for-and-parse-state-messages",
    content: "Deserialize the RTM `message` field into a state event object."
  }, {
    heading: "listen-for-and-parse-state-messages",
    content: "Check that the deserialized result contains `event_type` and `payload`."
  }, {
    heading: "listen-for-and-parse-state-messages",
    content: "Dispatch handling based on `event_type`, and use `payload.value` to update your app state."
  }, {
    heading: "listen-for-and-parse-state-messages",
    content: "In the following examples:"
  }, {
    heading: "listen-for-and-parse-state-messages",
    content: "The inner `message` field is a JSON string and must be deserialized again to obtain `event_type` and `payload`."
  }, {
    heading: "listen-for-and-parse-state-messages",
    content: "`event_type` identifies the specific state type."
  }, {
    heading: "listen-for-and-parse-state-messages",
    content: "`payload.value` indicates whether the agent is entering (`true`) or exiting (`false`) the state."
  }, {
    heading: "listen-for-and-parse-state-messages",
    content: "`payload.timestamp` can be used for precise ordering or logging."
  }, {
    heading: "update-app-state",
    content: "Use the received events to update your UI or internal state machine. For example:"
  }, {
    heading: "update-app-state",
    content: 'When `state.listening` with `payload.value = true` is received, display "Listening".'
  }, {
    heading: "update-app-state",
    content: 'When `state.thinking` with `payload.value = true` is received, display "Thinking".'
  }, {
    heading: "update-app-state",
    content: 'When `state.speaking` with `payload.value = true` is received, display "Speaking".'
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "The Conversational AI Engine supports getting agent state through both RTM Message and RTM Presence. The key differences are:"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "RTM Presence"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "RTM Message"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Return form"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "State key-value pairs"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "State event messages"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Granularity"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Better for reading current state"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Better for handling each state change"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Timing info"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Relies on message arrival time"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Includes explicit `event_ms` and `payload.timestamp`"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Use case"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Simple UI state display"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Event-driven logic, logging, unified message consumption"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "Choose based on your needs:"
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "If you only need to update the UI based on whether the agent is currently `listening`, `thinking`, or `speaking`, RTM Presence is simpler to integrate."
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "If you want to process state changes together with captions, interruptions, or performance metrics in a unified RTM Message handler, use RTM Message."
  }, {
    heading: "rtm-message-vs-rtm-presence",
    content: "If you need to record the timestamp of each state change or analyze state transitions in sequence, use RTM Message."
  }, {
    heading: "considerations",
    content: "Keep the following in mind when implementing this feature:"
  }, {
    heading: "considerations",
    content: "**Double deserialization**: The inner `message` field is a JSON string and must be deserialized a second time to access `event_type` and `payload`."
  }, {
    heading: "considerations",
    content: "**Avoid duplicate UI updates**: If you are already driving UI state through RTM Presence, avoid having both implementations update the same UI state simultaneously, as this can cause redundant updates or state flickering."
  }, {
    heading: "considerations",
    content: "**`state.speaking` end timing**: A `state.speaking` value of `false` does not guarantee that the client has finished playing audio. The server estimates the speaking end time based on TTS audio length, so there may be a delay between the state switching to `false` and the client completing playback."
  }, {
    heading: "considerations",
    content: "**Scope of state messages**: State messages cover only `listening`, `thinking`, and `speaking` agent state events. Manual SoS and EoS signals and their callbacks are not included."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "state-event-types",
    content: "State event types"
  }, {
    id: "message-structure",
    content: "Message structure"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "enable-rtm-when-starting-the-agent",
    content: "Enable RTM when starting the agent"
  }, {
    id: "listen-for-and-parse-state-messages",
    content: "Listen for and parse state messages"
  }, {
    id: "update-app-state",
    content: "Update app state"
  }, {
    id: "rtm-message-vs-rtm-presence",
    content: "RTM Message vs RTM Presence"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 3,
  url: "#state-event-types",
  title: _jsx(_Fragment, {
    children: "State event types"
  })
}, {
  depth: 3,
  url: "#message-structure",
  title: _jsx(_Fragment, {
    children: "Message structure"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#enable-rtm-when-starting-the-agent",
  title: _jsx(_Fragment, {
    children: "Enable RTM when starting the agent"
  })
}, {
  depth: 3,
  url: "#listen-for-and-parse-state-messages",
  title: _jsx(_Fragment, {
    children: "Listen for and parse state messages"
  })
}, {
  depth: 3,
  url: "#update-app-state",
  title: _jsx(_Fragment, {
    children: "Update app state"
  })
}, {
  depth: 2,
  url: "#rtm-message-vs-rtm-presence",
  title: _jsx(_Fragment, {
    children: "RTM Message vs RTM Presence"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["If you need to track agent state changes in your client app, you can use either Signaling (RTM) Message or RTM Presence. This guide explains how to get agent state using RTM Message and describes ", _jsx(_components.a, {
        href: "#rtm-message-vs-rtm-presence",
        children: "how the two approaches differ"
      }), "."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["To monitor state changes using client components, see ", _jsx(_components.a, {
              href: "/en/ai/build/handle-runtime-events/webhooks",
              children: "Listen to agent events"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "To get agent state through RTM Presence, continue using your existing Presence implementation."
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["The Conversational AI Engine pushes agent state change events to the client as individual RTM messages through the ", _jsx(_components.code, {
        children: "onMessageEvent"
      }), " callback. Unlike RTM Presence, which synchronizes state as key-value pairs, RTM Message wraps each state change in a separate event message. This makes it easier to record state change timestamps, process events sequentially, or consume state events together with other RTM Message events."]
    }), `
`, _jsxs(_components.p, {
      children: ["The inner ", _jsx(_components.code, {
        children: "message"
      }), " field of each RTM message is a JSON string that requires a second parse to access the state event data. Use the ", _jsx(_components.code, {
        children: "event_type"
      }), " field in the inner message to identify the event type."]
    }), `
`, _jsx(_components.p, {
      children: "The following agent states are pushed through RTM Message:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "state.listening"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "state.thinking"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "state.speaking"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The flow works as follows:"
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
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " state"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " change"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  ├─"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " listening"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " false"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  ├─"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " thinking"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " false"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  └─"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " speaking"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " false"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "        ↓"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    RTM"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Message"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "        ↓"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  Client"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " parses"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " inner"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " payload"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " and"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " identifies"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " event"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " by"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " event_type"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "state-event-types",
      children: "State event types"
    }), `
`, _jsx(_components.p, {
      children: "The Conversational AI Engine sends an RTM Message each time the agent state changes. Each message corresponds to a single state change event."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "event_type"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "state.listening"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The agent starts or stops listening for user input."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "state.thinking"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The agent starts or stops processing user input."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "state.speaking"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The agent starts or stops speaking."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "message-structure",
      children: "Message structure"
    }), `
`, _jsxs(_components.p, {
      children: ["The inner ", _jsx(_components.code, {
        children: "message"
      }), " field is a JSON string. After deserialization, the structure is as follows:"]
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
              children: '  "event_id"'
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
              children: '"xxxx"'
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
              children: '  "event_type"'
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
              children: '"state.listening"'
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
              children: '  "event_ms"'
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
              children: "1611566412672"
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
              children: '  "payload"'
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
              children: '    "value"'
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
              children: '    "timestamp"'
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
              children: "1611566412600"
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
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Field"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "event_id"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unique event ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "event_type"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["State event type. One of ", _jsx(_components.code, {
              children: "state.listening"
            }), ", ", _jsx(_components.code, {
              children: "state.thinking"
            }), ", or ", _jsx(_components.code, {
              children: "state.speaking"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "event_ms"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Timestamp when the event was sent, in milliseconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "payload.value"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Current state value. ", _jsx(_components.code, {
              children: "true"
            }), " means the agent entered the state; ", _jsx(_components.code, {
              children: "false"
            }), " means it exited."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "payload.timestamp"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Timestamp when the state change actually occurred, in milliseconds."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before you begin, ensure that you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Completed the basic agent integration. See ", _jsx(_components.a, {
          href: "/en/ai/get-started/quickstart",
          children: "Quickstart"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Integrated the RTM SDK and implemented message listener logic. See ", _jsx(_components.a, {
          href: "https://docs.agora.io/en/signaling/get-started/sdk-quickstart",
          children: "RTM quickstart"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Enabled the RTM service and set ", _jsx(_components.code, {
          children: "data_channel"
        }), " to ", _jsx(_components.code, {
          children: "rtm"
        }), " when starting the agent."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.h3, {
      id: "enable-rtm-when-starting-the-agent",
      children: "Enable RTM when starting the agent"
    }), `
`, _jsxs(_components.p, {
      children: ["When calling ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai/join",
        children: "Start a conversational AI agent"
      }), ", include the following configuration:"]
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
              children: '  "properties"'
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
              children: '    "advanced_features"'
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
              children: '      "enable_rtm"'
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
              children: '    "parameters"'
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
              children: '      "data_channel"'
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
              children: '"rtm"'
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
      id: "listen-for-and-parse-state-messages",
      children: "Listen for and parse state messages"
    }), `
`, _jsx(_components.p, {
      children: "After logging in to RTM and subscribing to the channel with the same name as the agent, parse state messages in the RTM message callback. The handling logic consists of the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Deserialize the RTM ", _jsx(_components.code, {
          children: "message"
        }), " field into a state event object."]
      }), `
`, _jsxs(_components.li, {
        children: ["Check that the deserialized result contains ", _jsx(_components.code, {
          children: "event_type"
        }), " and ", _jsx(_components.code, {
          children: "payload"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Dispatch handling based on ", _jsx(_components.code, {
          children: "event_type"
        }), ", and use ", _jsx(_components.code, {
          children: "payload.value"
        }), " to update your app state."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In the following examples:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The inner ", _jsx(_components.code, {
          children: "message"
        }), " field is a JSON string and must be deserialized again to obtain ", _jsx(_components.code, {
          children: "event_type"
        }), " and ", _jsx(_components.code, {
          children: "payload"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "event_type"
        }), " identifies the specific state type."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "payload.value"
        }), " indicates whether the agent is entering (", _jsx(_components.code, {
          children: "true"
        }), ") or exiting (", _jsx(_components.code, {
          children: "false"
        }), ") the state."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "payload.timestamp"
        }), " can be used for precise ordering or logging."]
      }), `
`]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "android",
      groupId: "ai-toolkit-platform",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(TabsTrigger, {
          value: "ios",
          children: "iOS"
        }), _jsx(TabsTrigger, {
          value: "web",
          children: "Web"
        })]
      }), _jsx(TabsContent, {
        value: "android",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "val"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtmConfig "
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
                  children: " RtmConfig"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtmConfig.eventListener "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " object"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " : "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "RtmEventListener"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    override"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " fun"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " onMessageEvent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(event: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "MessageEvent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // 1. Deserialize the inner message (JSON string)"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        val"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " payload "
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
                  children: " JSONObject"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(event.message."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "data"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "!"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "payload."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "has"
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
                  children: '"event_type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " !"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "payload."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "has"
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
                  children: '"payload"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")) {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            return"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        val"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " eventType "
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
                  children: " payload."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getString"
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
                  children: '"event_type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        val"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " statePayload "
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
                  children: " payload."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getJSONObject"
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
                  children: '"payload"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        val"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " statePayload."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getBoolean"
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
                  children: '"value"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        val"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " timestamp "
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
                  children: " statePayload."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getLong"
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
                  children: '"timestamp"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // 2. Dispatch based on event_type"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        when"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (eventType) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "state.listening"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " handleListeningChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", timestamp)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "state.thinking"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  ->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " handleThinkingChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", timestamp)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '            "state.speaking"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  ->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " handleSpeakingChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", timestamp)"
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
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mRtmClient "
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
                  children: " RtmClient."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "create"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(rtmConfig)"
                })]
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "ios",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " rtmKit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "_"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtmKit: AgoraRtmClientKit, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "didReceiveMessageEvent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " event: AgoraRtmMessageEvent) {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // 1. Deserialize the inner message (JSON string)"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    guard"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " jsonString "
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
                  children: " event.message.stringData,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "          let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " data "
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
                  children: " jsonString."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "data"
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
                  children: "using"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "utf8"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "),"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "          let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " payload "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " try?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " JSONSerialization."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "jsonObject"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": data) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "as?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "String"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " Any"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "          let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " eventType "
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
                  children: " payload["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"event_type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "as?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " String"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "          let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " statePayload "
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
                  children: " payload["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"payload"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "as?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "String"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " Any"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "else"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " value "
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
                  children: " statePayload["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"value"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "as?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " Bool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ??"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " false"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " timestamp "
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
                  children: " statePayload["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"timestamp"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "as?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " Int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ??"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // 2. Dispatch based on event_type"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    switch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " eventType {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "state.listening"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "        handleListeningChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(value, timestamp)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "state.thinking"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "        handleThinkingChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(value, timestamp)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "state.speaking"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "        handleSpeakingChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(value, timestamp)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    default:"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        break"
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
        })
      }), _jsx(TabsContent, {
        value: "web",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtm."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "addEventListener"
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
                  children: '"message"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "event"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // 1. Deserialize the inner message (JSON string)"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " payload"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " JSON"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "parse"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(event.message "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "as"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "!"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "payload.event_type "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " !"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "payload.payload) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
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
                  children: "    }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
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
                  children: "event_type"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "payload"
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
                  children: "statePayload"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " } "
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
                  children: " payload;"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // 2. Dispatch based on event_type"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    switch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (event_type) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "state.listening"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "            handleListeningChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(statePayload.value, statePayload.timestamp);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            break"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "state.thinking"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "            handleThinkingChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(statePayload.value, statePayload.timestamp);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            break"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "state.speaking"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "            handleSpeakingChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(statePayload.value, statePayload.timestamp);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            break"
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
                  children: "});"
                })
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "update-app-state",
      children: "Update app state"
    }), `
`, _jsx(_components.p, {
      children: "Use the received events to update your UI or internal state machine. For example:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["When ", _jsx(_components.code, {
          children: "state.listening"
        }), " with ", _jsx(_components.code, {
          children: "payload.value = true"
        }), ' is received, display "Listening".']
      }), `
`, _jsxs(_components.li, {
        children: ["When ", _jsx(_components.code, {
          children: "state.thinking"
        }), " with ", _jsx(_components.code, {
          children: "payload.value = true"
        }), ' is received, display "Thinking".']
      }), `
`, _jsxs(_components.li, {
        children: ["When ", _jsx(_components.code, {
          children: "state.speaking"
        }), " with ", _jsx(_components.code, {
          children: "payload.value = true"
        }), ' is received, display "Speaking".']
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "rtm-message-vs-rtm-presence",
      children: "RTM Message vs RTM Presence"
    }), `
`, _jsx(_components.p, {
      children: "The Conversational AI Engine supports getting agent state through both RTM Message and RTM Presence. The key differences are:"
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
            children: "RTM Presence"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "RTM Message"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Return form"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "State key-value pairs"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "State event messages"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Granularity"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Better for reading current state"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Better for handling each state change"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Timing info"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Relies on message arrival time"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Includes explicit ", _jsx(_components.code, {
              children: "event_ms"
            }), " and ", _jsx(_components.code, {
              children: "payload.timestamp"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use case"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Simple UI state display"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Event-driven logic, logging, unified message consumption"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Choose based on your needs:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If you only need to update the UI based on whether the agent is currently ", _jsx(_components.code, {
          children: "listening"
        }), ", ", _jsx(_components.code, {
          children: "thinking"
        }), ", or ", _jsx(_components.code, {
          children: "speaking"
        }), ", RTM Presence is simpler to integrate."]
      }), `
`, _jsx(_components.li, {
        children: "If you want to process state changes together with captions, interruptions, or performance metrics in a unified RTM Message handler, use RTM Message."
      }), `
`, _jsx(_components.li, {
        children: "If you need to record the timestamp of each state change or analyze state transitions in sequence, use RTM Message."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsx(_components.p, {
      children: "Keep the following in mind when implementing this feature:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Double deserialization"
        }), ": The inner ", _jsx(_components.code, {
          children: "message"
        }), " field is a JSON string and must be deserialized a second time to access ", _jsx(_components.code, {
          children: "event_type"
        }), " and ", _jsx(_components.code, {
          children: "payload"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Avoid duplicate UI updates"
        }), ": If you are already driving UI state through RTM Presence, avoid having both implementations update the same UI state simultaneously, as this can cause redundant updates or state flickering."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsxs(_components.strong, {
          children: [_jsx(_components.code, {
            children: "state.speaking"
          }), " end timing"]
        }), ": A ", _jsx(_components.code, {
          children: "state.speaking"
        }), " value of ", _jsx(_components.code, {
          children: "false"
        }), " does not guarantee that the client has finished playing audio. The server estimates the speaking end time based on TTS audio length, so there may be a delay between the state switching to ", _jsx(_components.code, {
          children: "false"
        }), " and the client completing playback."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Scope of state messages"
        }), ": State messages cover only ", _jsx(_components.code, {
          children: "listening"
        }), ", ", _jsx(_components.code, {
          children: "thinking"
        }), ", and ", _jsx(_components.code, {
          children: "speaking"
        }), " agent state events. Manual SoS and EoS signals and their callbacks are not included."]
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
