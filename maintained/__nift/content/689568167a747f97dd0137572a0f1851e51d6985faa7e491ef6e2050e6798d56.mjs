import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Get runtime events",
  description: "Receive runtime events in clients and on your server."
};
export let _markdown = `

This page explains how to receive runtime events from Conversational AI Engine. It compares the delivery paths so you can choose the one that fits your use case, or use both approaches together.

You can receive runtime events through the following paths:

* **Client toolkit**: for live, in-session interaction events
* **Webhook**: for backend monitoring, durable records, and post-session processing

The paths don't deliver identical events. Some events overlap semantically, but many are exclusive to one path.

## Event coverage [#event-coverage]

| Runtime event                                                       | Client toolkit | Webhook |
| ------------------------------------------------------------------- | -------------- | ------- |
| Agent state changes such as \`listening\`, \`thinking\`, and \`speaking\` | Yes            | No      |
| Interrupt events during a live session                              | Yes            | No      |
| Module errors during a live session                                 | Yes            | Yes     |
| Runtime metrics and latency data                                    | Yes            | Yes     |
| Agent joined and left lifecycle records                             | No             | Yes     |
| Conversation history after a session ends                           | No             | Yes     |
| Telephony call state                                                | No             | Yes     |
| Debug logs and message-level client diagnostics                     | Yes            | No      |

If you only need current UI state, use the client path. If you need monitoring, history, or backend analytics, use the webhook path. If you need live UX with production observability, use both.

## Choose how to receive events [#choose-how-to-receive-events]

<Tabs>
  <TabsList>
    <TabsTrigger value="client-toolkit">
      Client toolkit
    </TabsTrigger>

    <TabsTrigger value="webhook">
      Webhook
    </TabsTrigger>
  </TabsList>

  <TabsContent value="client-toolkit">
    Use the client toolkit when the app must react during the current session.

    ### What you get [#what-you-get]

    * \`onAgentStateChanged\`
    * \`onAgentListeningChanged\`
    * \`onAgentThinkingChanged\`
    * \`onAgentSpeakingChanged\`
    * \`onAgentInterrupted\`
    * \`onAgentMetrics\`
    * \`onAgentError\`
    * \`onTranscriptUpdated\`
    * \`onDebugLog\` or \`DEBUG_LOG\`

    ### What you need [#what-you-need]

    * RTC integrated in the client
    * RTM enabled for the project
    * Authenticated RTC and RTM instances with lifecycle managed by your app

    ### How to receive events [#how-to-receive-events]

    1. Start the agent with RTM enabled.
    2. Set \`parameters.data_channel\` to \`rtm\`.
    3. Enable optional outputs such as metrics and error messages when needed.
    4. Register toolkit event handlers.
    5. Subscribe to channel messages before the session starts.

       \`\`\`json
       {
         "advanced_features": {
           "enable_rtm": true
         },
         "parameters": {
           "data_channel": "rtm",
           "enable_metrics": true,
           "enable_error_message": true
         }
       }
       \`\`\`

    This path is best for:

    * Updating in-call UI state
    * Reacting to interruptions
    * Surfacing errors immediately in the app
    * Observing client-side runtime behavior during live debugging

    For the full client setup and platform examples, see [Client-side events](event-notifications).
  </TabsContent>

  <TabsContent value="webhook">
    Use webhooks when your backend must receive and persist runtime events.

    ### What you get [#what-you-get-1]

    * \`101 agent joined\`
    * \`102 agent left\`
    * \`103 agent history\`
    * \`104 agent expire\`
    * \`110 agent error\`
    * \`111 agent metrics\`
    * \`112 turns finished\`
    * \`201 inbound call state\`
    * \`202 outbound call state\`

    ### What you need [#what-you-need-1]

    * A public HTTPS callback endpoint
    * Access to the Agora Console project notification settings
    * Server-side storage for the generated secret

    ### How to receive events [#how-to-receive-events-1]

    1. Open the project's notification settings in Agora Console.
    2. Choose the Conversational AI event types you want to subscribe to.
    3. Configure your HTTPS callback URL.
    4. Save the generated secret.
    5. Verify \`Agora-Signature\` or \`Agora-Signature-V2\` on your server.
    6. Return \`200 OK\` quickly after receiving the callback.

    This path is best for:

    * Alerting and dashboards
    * Session lifecycle records
    * Post-session history processing
    * Backend debugging and incident review
    * Turn and metric aggregation across many sessions

    For the full webhook setup, request format, and signature verification steps, see [Webhooks](webhooks).
  </TabsContent>
</Tabs>

## How to achieve your goals [#how-to-achieve-your-goals]

You can achieve some goals through either path; others work with only one:

* **Status UI**: mainly client toolkit
* **Errors**: client toolkit and webhook
* **Performance**: client toolkit and webhook
* **Debugging failures**: client toolkit for live reproduction, webhook for backend investigation
* **Conversation history**: webhook and REST APIs, not client toolkit

## Related resources [#related-resources]

* If you want to understand what the webhook event numbers mean, see [Notification event types](../../reference/event-types).
* If you want to decide which events to use for state, errors, and performance, see [Monitor agent status, errors, and performance](monitor-agent-runtime).
* If you want to receive server-side webhook callbacks, see [Webhooks](webhooks).
* If you want to investigate failures, see [Debug agent failures with runtime events](debug-agent-failures).
* If you want post-session history and turn data, see [Retrieve conversation history after a session ends](retrieve-session-history).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains how to receive runtime events from Conversational AI Engine. It compares the delivery paths so you can choose the one that fits your use case, or use both approaches together."
  }, {
    heading: undefined,
    content: "You can receive runtime events through the following paths:"
  }, {
    heading: undefined,
    content: "**Client toolkit**: for live, in-session interaction events"
  }, {
    heading: undefined,
    content: "**Webhook**: for backend monitoring, durable records, and post-session processing"
  }, {
    heading: undefined,
    content: "The paths don't deliver identical events. Some events overlap semantically, but many are exclusive to one path."
  }, {
    heading: "event-coverage",
    content: "Runtime event"
  }, {
    heading: "event-coverage",
    content: "Client toolkit"
  }, {
    heading: "event-coverage",
    content: "Webhook"
  }, {
    heading: "event-coverage",
    content: "Agent state changes such as `listening`, `thinking`, and `speaking`"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "No"
  }, {
    heading: "event-coverage",
    content: "Interrupt events during a live session"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "No"
  }, {
    heading: "event-coverage",
    content: "Module errors during a live session"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "Runtime metrics and latency data"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "Agent joined and left lifecycle records"
  }, {
    heading: "event-coverage",
    content: "No"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "Conversation history after a session ends"
  }, {
    heading: "event-coverage",
    content: "No"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "Telephony call state"
  }, {
    heading: "event-coverage",
    content: "No"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "Debug logs and message-level client diagnostics"
  }, {
    heading: "event-coverage",
    content: "Yes"
  }, {
    heading: "event-coverage",
    content: "No"
  }, {
    heading: "event-coverage",
    content: "If you only need current UI state, use the client path. If you need monitoring, history, or backend analytics, use the webhook path. If you need live UX with production observability, use both."
  }, {
    heading: "choose-how-to-receive-events",
    content: "Use the client toolkit when the app must react during the current session."
  }, {
    heading: "what-you-get",
    content: "`onAgentStateChanged`"
  }, {
    heading: "what-you-get",
    content: "`onAgentListeningChanged`"
  }, {
    heading: "what-you-get",
    content: "`onAgentThinkingChanged`"
  }, {
    heading: "what-you-get",
    content: "`onAgentSpeakingChanged`"
  }, {
    heading: "what-you-get",
    content: "`onAgentInterrupted`"
  }, {
    heading: "what-you-get",
    content: "`onAgentMetrics`"
  }, {
    heading: "what-you-get",
    content: "`onAgentError`"
  }, {
    heading: "what-you-get",
    content: "`onTranscriptUpdated`"
  }, {
    heading: "what-you-get",
    content: "`onDebugLog` or `DEBUG_LOG`"
  }, {
    heading: "what-you-need",
    content: "RTC integrated in the client"
  }, {
    heading: "what-you-need",
    content: "RTM enabled for the project"
  }, {
    heading: "what-you-need",
    content: "Authenticated RTC and RTM instances with lifecycle managed by your app"
  }, {
    heading: "how-to-receive-events",
    content: "Start the agent with RTM enabled."
  }, {
    heading: "how-to-receive-events",
    content: "Set `parameters.data_channel` to `rtm`."
  }, {
    heading: "how-to-receive-events",
    content: "Enable optional outputs such as metrics and error messages when needed."
  }, {
    heading: "how-to-receive-events",
    content: "Register toolkit event handlers."
  }, {
    heading: "how-to-receive-events",
    content: "Subscribe to channel messages before the session starts."
  }, {
    heading: "how-to-receive-events",
    content: "This path is best for:"
  }, {
    heading: "how-to-receive-events",
    content: "Updating in-call UI state"
  }, {
    heading: "how-to-receive-events",
    content: "Reacting to interruptions"
  }, {
    heading: "how-to-receive-events",
    content: "Surfacing errors immediately in the app"
  }, {
    heading: "how-to-receive-events",
    content: "Observing client-side runtime behavior during live debugging"
  }, {
    heading: "how-to-receive-events",
    content: "For the full client setup and platform examples, see Client-side events."
  }, {
    heading: "how-to-receive-events",
    content: "Use webhooks when your backend must receive and persist runtime events."
  }, {
    heading: "what-you-get-1",
    content: "`101 agent joined`"
  }, {
    heading: "what-you-get-1",
    content: "`102 agent left`"
  }, {
    heading: "what-you-get-1",
    content: "`103 agent history`"
  }, {
    heading: "what-you-get-1",
    content: "`104 agent expire`"
  }, {
    heading: "what-you-get-1",
    content: "`110 agent error`"
  }, {
    heading: "what-you-get-1",
    content: "`111 agent metrics`"
  }, {
    heading: "what-you-get-1",
    content: "`112 turns finished`"
  }, {
    heading: "what-you-get-1",
    content: "`201 inbound call state`"
  }, {
    heading: "what-you-get-1",
    content: "`202 outbound call state`"
  }, {
    heading: "what-you-need-1",
    content: "A public HTTPS callback endpoint"
  }, {
    heading: "what-you-need-1",
    content: "Access to the Agora Console project notification settings"
  }, {
    heading: "what-you-need-1",
    content: "Server-side storage for the generated secret"
  }, {
    heading: "how-to-receive-events-1",
    content: "Open the project's notification settings in Agora Console."
  }, {
    heading: "how-to-receive-events-1",
    content: "Choose the Conversational AI event types you want to subscribe to."
  }, {
    heading: "how-to-receive-events-1",
    content: "Configure your HTTPS callback URL."
  }, {
    heading: "how-to-receive-events-1",
    content: "Save the generated secret."
  }, {
    heading: "how-to-receive-events-1",
    content: "Verify `Agora-Signature` or `Agora-Signature-V2` on your server."
  }, {
    heading: "how-to-receive-events-1",
    content: "Return `200 OK` quickly after receiving the callback."
  }, {
    heading: "how-to-receive-events-1",
    content: "This path is best for:"
  }, {
    heading: "how-to-receive-events-1",
    content: "Alerting and dashboards"
  }, {
    heading: "how-to-receive-events-1",
    content: "Session lifecycle records"
  }, {
    heading: "how-to-receive-events-1",
    content: "Post-session history processing"
  }, {
    heading: "how-to-receive-events-1",
    content: "Backend debugging and incident review"
  }, {
    heading: "how-to-receive-events-1",
    content: "Turn and metric aggregation across many sessions"
  }, {
    heading: "how-to-receive-events-1",
    content: "For the full webhook setup, request format, and signature verification steps, see Webhooks."
  }, {
    heading: "how-to-achieve-your-goals",
    content: "You can achieve some goals through either path; others work with only one:"
  }, {
    heading: "how-to-achieve-your-goals",
    content: "**Status UI**: mainly client toolkit"
  }, {
    heading: "how-to-achieve-your-goals",
    content: "**Errors**: client toolkit and webhook"
  }, {
    heading: "how-to-achieve-your-goals",
    content: "**Performance**: client toolkit and webhook"
  }, {
    heading: "how-to-achieve-your-goals",
    content: "**Debugging failures**: client toolkit for live reproduction, webhook for backend investigation"
  }, {
    heading: "how-to-achieve-your-goals",
    content: "**Conversation history**: webhook and REST APIs, not client toolkit"
  }, {
    heading: "related-resources",
    content: "If you want to understand what the webhook event numbers mean, see Notification event types."
  }, {
    heading: "related-resources",
    content: "If you want to decide which events to use for state, errors, and performance, see Monitor agent status, errors, and performance."
  }, {
    heading: "related-resources",
    content: "If you want to receive server-side webhook callbacks, see Webhooks."
  }, {
    heading: "related-resources",
    content: "If you want to investigate failures, see Debug agent failures with runtime events."
  }, {
    heading: "related-resources",
    content: "If you want post-session history and turn data, see Retrieve conversation history after a session ends."
  }],
  headings: [{
    id: "event-coverage",
    content: "Event coverage"
  }, {
    id: "choose-how-to-receive-events",
    content: "Choose how to receive events"
  }, {
    id: "what-you-get",
    content: "What you get"
  }, {
    id: "what-you-need",
    content: "What you need"
  }, {
    id: "how-to-receive-events",
    content: "How to receive events"
  }, {
    id: "what-you-get-1",
    content: "What you get"
  }, {
    id: "what-you-need-1",
    content: "What you need"
  }, {
    id: "how-to-receive-events-1",
    content: "How to receive events"
  }, {
    id: "how-to-achieve-your-goals",
    content: "How to achieve your goals"
  }, {
    id: "related-resources",
    content: "Related resources"
  }]
};
export let toc = [{
  depth: 2,
  url: "#event-coverage",
  title: _jsx(_Fragment, {
    children: "Event coverage"
  })
}, {
  depth: 2,
  url: "#choose-how-to-receive-events",
  title: _jsx(_Fragment, {
    children: "Choose how to receive events"
  })
}, {
  depth: 3,
  url: "#what-you-get",
  title: _jsx(_Fragment, {
    children: "What you get"
  })
}, {
  depth: 3,
  url: "#what-you-need",
  title: _jsx(_Fragment, {
    children: "What you need"
  })
}, {
  depth: 3,
  url: "#how-to-receive-events",
  title: _jsx(_Fragment, {
    children: "How to receive events"
  })
}, {
  depth: 3,
  url: "#what-you-get-1",
  title: _jsx(_Fragment, {
    children: "What you get"
  })
}, {
  depth: 3,
  url: "#what-you-need-1",
  title: _jsx(_Fragment, {
    children: "What you need"
  })
}, {
  depth: 3,
  url: "#how-to-receive-events-1",
  title: _jsx(_Fragment, {
    children: "How to receive events"
  })
}, {
  depth: 2,
  url: "#how-to-achieve-your-goals",
  title: _jsx(_Fragment, {
    children: "How to achieve your goals"
  })
}, {
  depth: 2,
  url: "#related-resources",
  title: _jsx(_Fragment, {
    children: "Related resources"
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
  }, { Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page explains how to receive runtime events from Conversational AI Engine. It compares the delivery paths so you can choose the one that fits your use case, or use both approaches together."
    }), `
`, _jsx(_components.p, {
      children: "You can receive runtime events through the following paths:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Client toolkit"
        }), ": for live, in-session interaction events"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Webhook"
        }), ": for backend monitoring, durable records, and post-session processing"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The paths don't deliver identical events. Some events overlap semantically, but many are exclusive to one path."
    }), `
`, _jsx(_components.h2, {
      id: "event-coverage",
      children: "Event coverage"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Runtime event"
          }), _jsx(_components.th, {
            children: "Client toolkit"
          }), _jsx(_components.th, {
            children: "Webhook"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["Agent state changes such as ", _jsx(_components.code, {
              children: "listening"
            }), ", ", _jsx(_components.code, {
              children: "thinking"
            }), ", and ", _jsx(_components.code, {
              children: "speaking"
            })]
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "No"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Interrupt events during a live session"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "No"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Module errors during a live session"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Yes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Runtime metrics and latency data"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Yes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Agent joined and left lifecycle records"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Yes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Conversation history after a session ends"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Yes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Telephony call state"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Yes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Debug logs and message-level client diagnostics"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "If you only need current UI state, use the client path. If you need monitoring, history, or backend analytics, use the webhook path. If you need live UX with production observability, use both."
    }), `
`, _jsx(_components.h2, {
      id: "choose-how-to-receive-events",
      children: "Choose how to receive events"
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "client-toolkit",
          children: "Client toolkit"
        }), _jsx(TabsTrigger, {
          value: "webhook",
          children: "Webhook"
        })]
      }), _jsxs(TabsContent, {
        value: "client-toolkit",
        children: [_jsx(_components.p, {
          children: "Use the client toolkit when the app must react during the current session."
        }), _jsx(_components.h3, {
          id: "what-you-get",
          children: "What you get"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "onAgentStateChanged"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "onAgentListeningChanged"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "onAgentThinkingChanged"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "onAgentSpeakingChanged"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "onAgentInterrupted"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "onAgentMetrics"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "onAgentError"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "onTranscriptUpdated"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "onDebugLog"
            }), " or ", _jsx(_components.code, {
              children: "DEBUG_LOG"
            })]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "what-you-need",
          children: "What you need"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "RTC integrated in the client"
          }), `
`, _jsx(_components.li, {
            children: "RTM enabled for the project"
          }), `
`, _jsx(_components.li, {
            children: "Authenticated RTC and RTM instances with lifecycle managed by your app"
          }), `
`]
        }), _jsx(_components.h3, {
          id: "how-to-receive-events",
          children: "How to receive events"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start the agent with RTM enabled."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Set ", _jsx(_components.code, {
                children: "parameters.data_channel"
              }), " to ", _jsx(_components.code, {
                children: "rtm"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Enable optional outputs such as metrics and error messages when needed."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Register toolkit event handlers."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Subscribe to channel messages before the session starts."
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
                      children: '  "advanced_features"'
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
                      children: '    "enable_rtm"'
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
                      children: "  },"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: '  "parameters"'
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
                      children: '    "data_channel"'
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
                      children: '    "enable_metrics"'
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
                      children: '    "enable_error_message"'
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
        }), _jsx(_components.p, {
          children: "This path is best for:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Updating in-call UI state"
          }), `
`, _jsx(_components.li, {
            children: "Reacting to interruptions"
          }), `
`, _jsx(_components.li, {
            children: "Surfacing errors immediately in the app"
          }), `
`, _jsx(_components.li, {
            children: "Observing client-side runtime behavior during live debugging"
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["For the full client setup and platform examples, see ", _jsx(_components.a, {
            href: "event-notifications",
            children: "Client-side events"
          }), "."]
        })]
      }), _jsxs(TabsContent, {
        value: "webhook",
        children: [_jsx(_components.p, {
          children: "Use webhooks when your backend must receive and persist runtime events."
        }), _jsx(_components.h3, {
          id: "what-you-get-1",
          children: "What you get"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "101 agent joined"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "102 agent left"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "103 agent history"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "104 agent expire"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "110 agent error"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "111 agent metrics"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "112 turns finished"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "201 inbound call state"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "202 outbound call state"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "what-you-need-1",
          children: "What you need"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "A public HTTPS callback endpoint"
          }), `
`, _jsx(_components.li, {
            children: "Access to the Agora Console project notification settings"
          }), `
`, _jsx(_components.li, {
            children: "Server-side storage for the generated secret"
          }), `
`]
        }), _jsx(_components.h3, {
          id: "how-to-receive-events-1",
          children: "How to receive events"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsx(_components.li, {
            children: "Open the project's notification settings in Agora Console."
          }), `
`, _jsx(_components.li, {
            children: "Choose the Conversational AI event types you want to subscribe to."
          }), `
`, _jsx(_components.li, {
            children: "Configure your HTTPS callback URL."
          }), `
`, _jsx(_components.li, {
            children: "Save the generated secret."
          }), `
`, _jsxs(_components.li, {
            children: ["Verify ", _jsx(_components.code, {
              children: "Agora-Signature"
            }), " or ", _jsx(_components.code, {
              children: "Agora-Signature-V2"
            }), " on your server."]
          }), `
`, _jsxs(_components.li, {
            children: ["Return ", _jsx(_components.code, {
              children: "200 OK"
            }), " quickly after receiving the callback."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "This path is best for:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Alerting and dashboards"
          }), `
`, _jsx(_components.li, {
            children: "Session lifecycle records"
          }), `
`, _jsx(_components.li, {
            children: "Post-session history processing"
          }), `
`, _jsx(_components.li, {
            children: "Backend debugging and incident review"
          }), `
`, _jsx(_components.li, {
            children: "Turn and metric aggregation across many sessions"
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["For the full webhook setup, request format, and signature verification steps, see ", _jsx(_components.a, {
            href: "webhooks",
            children: "Webhooks"
          }), "."]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "how-to-achieve-your-goals",
      children: "How to achieve your goals"
    }), `
`, _jsx(_components.p, {
      children: "You can achieve some goals through either path; others work with only one:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Status UI"
        }), ": mainly client toolkit"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Errors"
        }), ": client toolkit and webhook"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Performance"
        }), ": client toolkit and webhook"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Debugging failures"
        }), ": client toolkit for live reproduction, webhook for backend investigation"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Conversation history"
        }), ": webhook and REST APIs, not client toolkit"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "related-resources",
      children: "Related resources"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If you want to understand what the webhook event numbers mean, see ", _jsx(_components.a, {
          href: "../../reference/event-types",
          children: "Notification event types"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you want to decide which events to use for state, errors, and performance, see ", _jsx(_components.a, {
          href: "monitor-agent-runtime",
          children: "Monitor agent status, errors, and performance"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you want to receive server-side webhook callbacks, see ", _jsx(_components.a, {
          href: "webhooks",
          children: "Webhooks"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you want to investigate failures, see ", _jsx(_components.a, {
          href: "debug-agent-failures",
          children: "Debug agent failures with runtime events"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you want post-session history and turn data, see ", _jsx(_components.a, {
          href: "retrieve-session-history",
          children: "Retrieve conversation history after a session ends"
        }), "."]
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
