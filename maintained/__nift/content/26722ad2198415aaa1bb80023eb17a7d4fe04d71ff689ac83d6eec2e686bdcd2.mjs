import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Monitor agent status, errors, and performance",
  description: "Choose the right runtime events to display agent status, handle errors, and monitor performance."
};
export let _markdown = `

This page helps you choose the right path for common monitoring goals, then links you to the detailed setup guides.

Runtime event handling on client apps usually serves one of the following goals:

* Update the app UI according to the agent's current state
* Capture errors and debug logs during a live session
* Collect lifecycle and latency data on your server

## Choose a path for each goal [#choose-a-path-for-each-goal]

| Goal                                                        | Best path                                     | Use these events                                                                                                                                                 |
| ----------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Update the in-call UI with the agent's current state        | Toolkit callbacks in the client               | \`onAgentStateChanged\`, \`onAgentListeningChanged\`, \`onAgentThinkingChanged\`, \`onAgentSpeakingChanged\`                                                             |
| Handle interruptions during a live session                  | Toolkit callbacks in the client               | \`onAgentInterrupted\`                                                                                                                                             |
| Show immediate failures in the app                          | Toolkit callbacks in the client               | \`onAgentError\`, \`onDebugLog\` (Android), \`DEBUG_LOG\` (Web)                                                                                                        |
| Alert on agent failures from your backend                   | Webhooks                                      | [\`110 agent error\`](../../reference/event-types#110-agent-error), [\`102 agent left\`](../../reference/event-types#102-agent-left)                                 |
| Monitor latency and runtime health                          | Toolkit for live UX, webhooks for aggregation | \`onAgentMetrics\`, [\`111 agent metrics\`](../../reference/event-types#111-agent-metrics)                                                                           |
| Track when sessions start and stop                          | Webhooks                                      | [\`101 agent joined\`](../../reference/event-types#101-agent-joined), [\`102 agent left\`](../../reference/event-types#102-agent-left)                               |
| Retrieve conversation history and turn data after a session | Webhooks or REST API                          | [\`103 agent history\`](../../reference/event-types#103-agent-history), [\`112 turns finished\`](../../reference/event-types#112-turns-finished), \`history\`, \`turns\` |

## Use client callbacks for live state and local debugging [#use-client-callbacks-for-live-state-and-local-debugging]

Use the toolkit when the event must arrive during the current session:

* \`onAgentStateChanged\` is the main UI state callback for \`silent\`, \`listening\`, \`thinking\`, and \`speaking\`.
* \`onAgentListeningChanged\`, \`onAgentThinkingChanged\`, and \`onAgentSpeakingChanged\` are better when you need separate loading, waveform, or avatar behaviors.
* \`onAgentInterrupted\` is useful for turn-level UX, for example when you need to stop playback or show that a user barged in.
* \`onAgentError\` is the primary callback for module failures such as LLM or TTS errors.
* \`onDebugLog\` on Android and \`DEBUG_LOG\` on Web are useful when you want extra client-side diagnostics while reproducing issues.

To receive these events, start the agent with RTM enabled and subscribe to channel messages before the session starts:

\`\`\`json
{
  "advanced_features": {
    "enable_rtm": true
  },
  "properties": {
    "channel": "voice-demo"
  },
  "parameters": {
    "data_channel": "rtm",
    "enable_metrics": true,
    "enable_error_message": true
  }
}
\`\`\`

For the first-step setup of both client and server paths, see [Get runtime events](get-runtime-events). For the full client integration flow, see [Client-side events](event-notifications).

## Use webhooks for durable monitoring and alerting [#use-webhooks-for-durable-monitoring-and-alerting]

Use webhook events when the data must leave the device and be available for dashboards, alerts, and post-session analysis:

* \`101 agent joined\` confirms that the agent started successfully.
* \`102 agent left\` tells you how the session ended, including failed or idle-timeout exits.
* \`103 agent history\` and \`112 turns finished\` deliver post-session records for history, archiving, and turn analytics.
* \`104 agent expire\` warns your backend that the agent's RTC token is about to expire.
* \`110 agent error\` captures structured module errors with vendor-specific codes and messages.
* \`111 agent metrics\` reports latency and other runtime metrics that are better suited to backend aggregation.

If you need to answer questions such as why a session failed, which customers are seeing LLM errors, or how long TTS takes in production, webhook events are the better primary source.

For the first-step setup of both client and server paths, see [Get runtime events](get-runtime-events). For the full server integration flow, setup steps, request headers, request body, and signature verification, see [Webhooks](webhooks). For complete webhook payloads, see [Notification event types](../../reference/event-types).

## Choose the right path for shared goals [#choose-the-right-path-for-shared-goals]

Some runtime goals are available through both client and server paths. Use the tabs below to choose the implementation that matches your use case.

### Errors [#errors]

<Tabs>
  <TabsList>
    <TabsTrigger value="client-errors">
      Client toolkit
    </TabsTrigger>

    <TabsTrigger value="server-errors">
      Webhook
    </TabsTrigger>
  </TabsList>

  <TabsContent value="client-errors">
    Use client events when you need to react during the current session:

    * \`onAgentError\` for immediate module failures such as LLM or TTS errors
    * \`onDebugLog\` on Android and \`DEBUG_LOG\` on Web for local diagnostics during reproduction
    * UI updates, retries, graceful degradation, and session-local logging

    This path is best when the user is still in the call and the app needs to respond immediately.
  </TabsContent>

  <TabsContent value="server-errors">
    Use webhook events when you need durable backend observability:

    * [\`110 agent error\`](../../reference/event-types#110-agent-error) for structured module failures
    * [\`102 agent left\`](../../reference/event-types#102-agent-left) to understand whether the session terminated abnormally
    * Alerting, dashboards, incident review, and cross-session aggregation

    This path is best when the problem must be visible outside the current device or session.
  </TabsContent>
</Tabs>

### Performance [#performance]

<Tabs>
  <TabsList>
    <TabsTrigger value="client-performance">
      Client toolkit
    </TabsTrigger>

    <TabsTrigger value="server-performance">
      Webhook
    </TabsTrigger>
  </TabsList>

  <TabsContent value="client-performance">
    Use \`onAgentMetrics\` when performance must shape the live experience:

    * Show current latency or quality indicators in the UI
    * React to degraded experience during the session
    * Compare what the user feels with what the client observes
  </TabsContent>

  <TabsContent value="server-performance">
    Use [\`111 agent metrics\`](../../reference/event-types#111-agent-metrics) when performance must be monitored over time:

    * Store metrics for dashboards and alerts
    * Compare cohorts by \`labels\`
    * Analyze regression patterns across sessions and environments
  </TabsContent>
</Tabs>

## Recommended monitoring pattern [#recommended-monitoring-pattern]

For most production apps, use both channels together:

1. Use toolkit callbacks to update the local UI and react during the live session.
2. Use webhooks to store durable records for alerts, analytics, and debugging.
3. Correlate both streams with shared fields such as \`agent_id\`, \`name\`, \`channel\`, \`turn_id\`, and \`labels\`.

\`labels\` are especially useful when you want to group runtime data by customer segment, campaign, environment, or experiment.

## Related resources [#related-resources]

* [Debug agent failures with runtime events](debug-agent-failures)
* [Retrieve conversation history after a session ends](retrieve-session-history)
* [Get runtime events](get-runtime-events)
* [Client-side events](event-notifications)
* [Webhooks](webhooks)
* [Notification event types](../../reference/event-types)
* [Android toolkit API](/en/api-reference/api-ref/conversational-ai/client-toolkit/android)
* [iOS toolkit API](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios)
* [Web toolkit API](/en/api-reference/api-ref/conversational-ai/client-toolkit/web)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page helps you choose the right path for common monitoring goals, then links you to the detailed setup guides."
  }, {
    heading: undefined,
    content: "Runtime event handling on client apps usually serves one of the following goals:"
  }, {
    heading: undefined,
    content: "Update the app UI according to the agent's current state"
  }, {
    heading: undefined,
    content: "Capture errors and debug logs during a live session"
  }, {
    heading: undefined,
    content: "Collect lifecycle and latency data on your server"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Goal"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Best path"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Use these events"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Update the in-call UI with the agent's current state"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Toolkit callbacks in the client"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "`onAgentStateChanged`, `onAgentListeningChanged`, `onAgentThinkingChanged`, `onAgentSpeakingChanged`"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Handle interruptions during a live session"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Toolkit callbacks in the client"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "`onAgentInterrupted`"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Show immediate failures in the app"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Toolkit callbacks in the client"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "`onAgentError`, `onDebugLog` (Android), `DEBUG_LOG` (Web)"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Alert on agent failures from your backend"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Webhooks"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "`110 agent error`, `102 agent left`"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Monitor latency and runtime health"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Toolkit for live UX, webhooks for aggregation"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "`onAgentMetrics`, `111 agent metrics`"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Track when sessions start and stop"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Webhooks"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "`101 agent joined`, `102 agent left`"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Retrieve conversation history and turn data after a session"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "Webhooks or REST API"
  }, {
    heading: "choose-a-path-for-each-goal",
    content: "`103 agent history`, `112 turns finished`, `history`, `turns`"
  }, {
    heading: "use-client-callbacks-for-live-state-and-local-debugging",
    content: "Use the toolkit when the event must arrive during the current session:"
  }, {
    heading: "use-client-callbacks-for-live-state-and-local-debugging",
    content: "`onAgentStateChanged` is the main UI state callback for `silent`, `listening`, `thinking`, and `speaking`."
  }, {
    heading: "use-client-callbacks-for-live-state-and-local-debugging",
    content: "`onAgentListeningChanged`, `onAgentThinkingChanged`, and `onAgentSpeakingChanged` are better when you need separate loading, waveform, or avatar behaviors."
  }, {
    heading: "use-client-callbacks-for-live-state-and-local-debugging",
    content: "`onAgentInterrupted` is useful for turn-level UX, for example when you need to stop playback or show that a user barged in."
  }, {
    heading: "use-client-callbacks-for-live-state-and-local-debugging",
    content: "`onAgentError` is the primary callback for module failures such as LLM or TTS errors."
  }, {
    heading: "use-client-callbacks-for-live-state-and-local-debugging",
    content: "`onDebugLog` on Android and `DEBUG_LOG` on Web are useful when you want extra client-side diagnostics while reproducing issues."
  }, {
    heading: "use-client-callbacks-for-live-state-and-local-debugging",
    content: "To receive these events, start the agent with RTM enabled and subscribe to channel messages before the session starts:"
  }, {
    heading: "use-client-callbacks-for-live-state-and-local-debugging",
    content: "For the first-step setup of both client and server paths, see Get runtime events. For the full client integration flow, see Client-side events."
  }, {
    heading: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "Use webhook events when the data must leave the device and be available for dashboards, alerts, and post-session analysis:"
  }, {
    heading: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "`101 agent joined` confirms that the agent started successfully."
  }, {
    heading: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "`102 agent left` tells you how the session ended, including failed or idle-timeout exits."
  }, {
    heading: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "`103 agent history` and `112 turns finished` deliver post-session records for history, archiving, and turn analytics."
  }, {
    heading: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "`104 agent expire` warns your backend that the agent's RTC token is about to expire."
  }, {
    heading: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "`110 agent error` captures structured module errors with vendor-specific codes and messages."
  }, {
    heading: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "`111 agent metrics` reports latency and other runtime metrics that are better suited to backend aggregation."
  }, {
    heading: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "If you need to answer questions such as why a session failed, which customers are seeing LLM errors, or how long TTS takes in production, webhook events are the better primary source."
  }, {
    heading: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "For the first-step setup of both client and server paths, see Get runtime events. For the full server integration flow, setup steps, request headers, request body, and signature verification, see Webhooks. For complete webhook payloads, see Notification event types."
  }, {
    heading: "choose-the-right-path-for-shared-goals",
    content: "Some runtime goals are available through both client and server paths. Use the tabs below to choose the implementation that matches your use case."
  }, {
    heading: "errors",
    content: "Use client events when you need to react during the current session:"
  }, {
    heading: "errors",
    content: "`onAgentError` for immediate module failures such as LLM or TTS errors"
  }, {
    heading: "errors",
    content: "`onDebugLog` on Android and `DEBUG_LOG` on Web for local diagnostics during reproduction"
  }, {
    heading: "errors",
    content: "UI updates, retries, graceful degradation, and session-local logging"
  }, {
    heading: "errors",
    content: "This path is best when the user is still in the call and the app needs to respond immediately."
  }, {
    heading: "errors",
    content: "Use webhook events when you need durable backend observability:"
  }, {
    heading: "errors",
    content: "`110 agent error` for structured module failures"
  }, {
    heading: "errors",
    content: "`102 agent left` to understand whether the session terminated abnormally"
  }, {
    heading: "errors",
    content: "Alerting, dashboards, incident review, and cross-session aggregation"
  }, {
    heading: "errors",
    content: "This path is best when the problem must be visible outside the current device or session."
  }, {
    heading: "performance",
    content: "Use `onAgentMetrics` when performance must shape the live experience:"
  }, {
    heading: "performance",
    content: "Show current latency or quality indicators in the UI"
  }, {
    heading: "performance",
    content: "React to degraded experience during the session"
  }, {
    heading: "performance",
    content: "Compare what the user feels with what the client observes"
  }, {
    heading: "performance",
    content: "Use `111 agent metrics` when performance must be monitored over time:"
  }, {
    heading: "performance",
    content: "Store metrics for dashboards and alerts"
  }, {
    heading: "performance",
    content: "Compare cohorts by `labels`"
  }, {
    heading: "performance",
    content: "Analyze regression patterns across sessions and environments"
  }, {
    heading: "recommended-monitoring-pattern",
    content: "For most production apps, use both channels together:"
  }, {
    heading: "recommended-monitoring-pattern",
    content: "Use toolkit callbacks to update the local UI and react during the live session."
  }, {
    heading: "recommended-monitoring-pattern",
    content: "Use webhooks to store durable records for alerts, analytics, and debugging."
  }, {
    heading: "recommended-monitoring-pattern",
    content: "Correlate both streams with shared fields such as `agent_id`, `name`, `channel`, `turn_id`, and `labels`."
  }, {
    heading: "recommended-monitoring-pattern",
    content: "`labels` are especially useful when you want to group runtime data by customer segment, campaign, environment, or experiment."
  }, {
    heading: "related-resources",
    content: "Debug agent failures with runtime events"
  }, {
    heading: "related-resources",
    content: "Retrieve conversation history after a session ends"
  }, {
    heading: "related-resources",
    content: "Get runtime events"
  }, {
    heading: "related-resources",
    content: "Client-side events"
  }, {
    heading: "related-resources",
    content: "Webhooks"
  }, {
    heading: "related-resources",
    content: "Notification event types"
  }, {
    heading: "related-resources",
    content: "Android toolkit API"
  }, {
    heading: "related-resources",
    content: "iOS toolkit API"
  }, {
    heading: "related-resources",
    content: "Web toolkit API"
  }],
  headings: [{
    id: "choose-a-path-for-each-goal",
    content: "Choose a path for each goal"
  }, {
    id: "use-client-callbacks-for-live-state-and-local-debugging",
    content: "Use client callbacks for live state and local debugging"
  }, {
    id: "use-webhooks-for-durable-monitoring-and-alerting",
    content: "Use webhooks for durable monitoring and alerting"
  }, {
    id: "choose-the-right-path-for-shared-goals",
    content: "Choose the right path for shared goals"
  }, {
    id: "errors",
    content: "Errors"
  }, {
    id: "performance",
    content: "Performance"
  }, {
    id: "recommended-monitoring-pattern",
    content: "Recommended monitoring pattern"
  }, {
    id: "related-resources",
    content: "Related resources"
  }]
};
export let toc = [{
  depth: 2,
  url: "#choose-a-path-for-each-goal",
  title: _jsx(_Fragment, {
    children: "Choose a path for each goal"
  })
}, {
  depth: 2,
  url: "#use-client-callbacks-for-live-state-and-local-debugging",
  title: _jsx(_Fragment, {
    children: "Use client callbacks for live state and local debugging"
  })
}, {
  depth: 2,
  url: "#use-webhooks-for-durable-monitoring-and-alerting",
  title: _jsx(_Fragment, {
    children: "Use webhooks for durable monitoring and alerting"
  })
}, {
  depth: 2,
  url: "#choose-the-right-path-for-shared-goals",
  title: _jsx(_Fragment, {
    children: "Choose the right path for shared goals"
  })
}, {
  depth: 3,
  url: "#errors",
  title: _jsx(_Fragment, {
    children: "Errors"
  })
}, {
  depth: 3,
  url: "#performance",
  title: _jsx(_Fragment, {
    children: "Performance"
  })
}, {
  depth: 2,
  url: "#recommended-monitoring-pattern",
  title: _jsx(_Fragment, {
    children: "Recommended monitoring pattern"
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
      children: "This page helps you choose the right path for common monitoring goals, then links you to the detailed setup guides."
    }), `
`, _jsx(_components.p, {
      children: "Runtime event handling on client apps usually serves one of the following goals:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Update the app UI according to the agent's current state"
      }), `
`, _jsx(_components.li, {
        children: "Capture errors and debug logs during a live session"
      }), `
`, _jsx(_components.li, {
        children: "Collect lifecycle and latency data on your server"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "choose-a-path-for-each-goal",
      children: "Choose a path for each goal"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Goal"
          }), _jsx(_components.th, {
            children: "Best path"
          }), _jsx(_components.th, {
            children: "Use these events"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Update the in-call UI with the agent's current state"
          }), _jsx(_components.td, {
            children: "Toolkit callbacks in the client"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "onAgentStateChanged"
            }), ", ", _jsx(_components.code, {
              children: "onAgentListeningChanged"
            }), ", ", _jsx(_components.code, {
              children: "onAgentThinkingChanged"
            }), ", ", _jsx(_components.code, {
              children: "onAgentSpeakingChanged"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Handle interruptions during a live session"
          }), _jsx(_components.td, {
            children: "Toolkit callbacks in the client"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onAgentInterrupted"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Show immediate failures in the app"
          }), _jsx(_components.td, {
            children: "Toolkit callbacks in the client"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "onAgentError"
            }), ", ", _jsx(_components.code, {
              children: "onDebugLog"
            }), " (Android), ", _jsx(_components.code, {
              children: "DEBUG_LOG"
            }), " (Web)"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Alert on agent failures from your backend"
          }), _jsx(_components.td, {
            children: "Webhooks"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "../../reference/event-types#110-agent-error",
              children: _jsx(_components.code, {
                children: "110 agent error"
              })
            }), ", ", _jsx(_components.a, {
              href: "../../reference/event-types#102-agent-left",
              children: _jsx(_components.code, {
                children: "102 agent left"
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Monitor latency and runtime health"
          }), _jsx(_components.td, {
            children: "Toolkit for live UX, webhooks for aggregation"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "onAgentMetrics"
            }), ", ", _jsx(_components.a, {
              href: "../../reference/event-types#111-agent-metrics",
              children: _jsx(_components.code, {
                children: "111 agent metrics"
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Track when sessions start and stop"
          }), _jsx(_components.td, {
            children: "Webhooks"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "../../reference/event-types#101-agent-joined",
              children: _jsx(_components.code, {
                children: "101 agent joined"
              })
            }), ", ", _jsx(_components.a, {
              href: "../../reference/event-types#102-agent-left",
              children: _jsx(_components.code, {
                children: "102 agent left"
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Retrieve conversation history and turn data after a session"
          }), _jsx(_components.td, {
            children: "Webhooks or REST API"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "../../reference/event-types#103-agent-history",
              children: _jsx(_components.code, {
                children: "103 agent history"
              })
            }), ", ", _jsx(_components.a, {
              href: "../../reference/event-types#112-turns-finished",
              children: _jsx(_components.code, {
                children: "112 turns finished"
              })
            }), ", ", _jsx(_components.code, {
              children: "history"
            }), ", ", _jsx(_components.code, {
              children: "turns"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "use-client-callbacks-for-live-state-and-local-debugging",
      children: "Use client callbacks for live state and local debugging"
    }), `
`, _jsx(_components.p, {
      children: "Use the toolkit when the event must arrive during the current session:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onAgentStateChanged"
        }), " is the main UI state callback for ", _jsx(_components.code, {
          children: "silent"
        }), ", ", _jsx(_components.code, {
          children: "listening"
        }), ", ", _jsx(_components.code, {
          children: "thinking"
        }), ", and ", _jsx(_components.code, {
          children: "speaking"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onAgentListeningChanged"
        }), ", ", _jsx(_components.code, {
          children: "onAgentThinkingChanged"
        }), ", and ", _jsx(_components.code, {
          children: "onAgentSpeakingChanged"
        }), " are better when you need separate loading, waveform, or avatar behaviors."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onAgentInterrupted"
        }), " is useful for turn-level UX, for example when you need to stop playback or show that a user barged in."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onAgentError"
        }), " is the primary callback for module failures such as LLM or TTS errors."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onDebugLog"
        }), " on Android and ", _jsx(_components.code, {
          children: "DEBUG_LOG"
        }), " on Web are useful when you want extra client-side diagnostics while reproducing issues."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To receive these events, start the agent with RTM enabled and subscribe to channel messages before the session starts:"
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
              children: '    "channel"'
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
              children: '"voice-demo"'
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
`, _jsxs(_components.p, {
      children: ["For the first-step setup of both client and server paths, see ", _jsx(_components.a, {
        href: "get-runtime-events",
        children: "Get runtime events"
      }), ". For the full client integration flow, see ", _jsx(_components.a, {
        href: "event-notifications",
        children: "Client-side events"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "use-webhooks-for-durable-monitoring-and-alerting",
      children: "Use webhooks for durable monitoring and alerting"
    }), `
`, _jsx(_components.p, {
      children: "Use webhook events when the data must leave the device and be available for dashboards, alerts, and post-session analysis:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "101 agent joined"
        }), " confirms that the agent started successfully."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "102 agent left"
        }), " tells you how the session ended, including failed or idle-timeout exits."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "103 agent history"
        }), " and ", _jsx(_components.code, {
          children: "112 turns finished"
        }), " deliver post-session records for history, archiving, and turn analytics."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "104 agent expire"
        }), " warns your backend that the agent's RTC token is about to expire."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "110 agent error"
        }), " captures structured module errors with vendor-specific codes and messages."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "111 agent metrics"
        }), " reports latency and other runtime metrics that are better suited to backend aggregation."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If you need to answer questions such as why a session failed, which customers are seeing LLM errors, or how long TTS takes in production, webhook events are the better primary source."
    }), `
`, _jsxs(_components.p, {
      children: ["For the first-step setup of both client and server paths, see ", _jsx(_components.a, {
        href: "get-runtime-events",
        children: "Get runtime events"
      }), ". For the full server integration flow, setup steps, request headers, request body, and signature verification, see ", _jsx(_components.a, {
        href: "webhooks",
        children: "Webhooks"
      }), ". For complete webhook payloads, see ", _jsx(_components.a, {
        href: "../../reference/event-types",
        children: "Notification event types"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "choose-the-right-path-for-shared-goals",
      children: "Choose the right path for shared goals"
    }), `
`, _jsx(_components.p, {
      children: "Some runtime goals are available through both client and server paths. Use the tabs below to choose the implementation that matches your use case."
    }), `
`, _jsx(_components.h3, {
      id: "errors",
      children: "Errors"
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "client-errors",
          children: "Client toolkit"
        }), _jsx(TabsTrigger, {
          value: "server-errors",
          children: "Webhook"
        })]
      }), _jsxs(TabsContent, {
        value: "client-errors",
        children: [_jsx(_components.p, {
          children: "Use client events when you need to react during the current session:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "onAgentError"
            }), " for immediate module failures such as LLM or TTS errors"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "onDebugLog"
            }), " on Android and ", _jsx(_components.code, {
              children: "DEBUG_LOG"
            }), " on Web for local diagnostics during reproduction"]
          }), `
`, _jsx(_components.li, {
            children: "UI updates, retries, graceful degradation, and session-local logging"
          }), `
`]
        }), _jsx(_components.p, {
          children: "This path is best when the user is still in the call and the app needs to respond immediately."
        })]
      }), _jsxs(TabsContent, {
        value: "server-errors",
        children: [_jsx(_components.p, {
          children: "Use webhook events when you need durable backend observability:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "../../reference/event-types#110-agent-error",
              children: _jsx(_components.code, {
                children: "110 agent error"
              })
            }), " for structured module failures"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "../../reference/event-types#102-agent-left",
              children: _jsx(_components.code, {
                children: "102 agent left"
              })
            }), " to understand whether the session terminated abnormally"]
          }), `
`, _jsx(_components.li, {
            children: "Alerting, dashboards, incident review, and cross-session aggregation"
          }), `
`]
        }), _jsx(_components.p, {
          children: "This path is best when the problem must be visible outside the current device or session."
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "performance",
      children: "Performance"
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "client-performance",
          children: "Client toolkit"
        }), _jsx(TabsTrigger, {
          value: "server-performance",
          children: "Webhook"
        })]
      }), _jsxs(TabsContent, {
        value: "client-performance",
        children: [_jsxs(_components.p, {
          children: ["Use ", _jsx(_components.code, {
            children: "onAgentMetrics"
          }), " when performance must shape the live experience:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Show current latency or quality indicators in the UI"
          }), `
`, _jsx(_components.li, {
            children: "React to degraded experience during the session"
          }), `
`, _jsx(_components.li, {
            children: "Compare what the user feels with what the client observes"
          }), `
`]
        })]
      }), _jsxs(TabsContent, {
        value: "server-performance",
        children: [_jsxs(_components.p, {
          children: ["Use ", _jsx(_components.a, {
            href: "../../reference/event-types#111-agent-metrics",
            children: _jsx(_components.code, {
              children: "111 agent metrics"
            })
          }), " when performance must be monitored over time:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Store metrics for dashboards and alerts"
          }), `
`, _jsxs(_components.li, {
            children: ["Compare cohorts by ", _jsx(_components.code, {
              children: "labels"
            })]
          }), `
`, _jsx(_components.li, {
            children: "Analyze regression patterns across sessions and environments"
          }), `
`]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-monitoring-pattern",
      children: "Recommended monitoring pattern"
    }), `
`, _jsx(_components.p, {
      children: "For most production apps, use both channels together:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Use toolkit callbacks to update the local UI and react during the live session."
      }), `
`, _jsx(_components.li, {
        children: "Use webhooks to store durable records for alerts, analytics, and debugging."
      }), `
`, _jsxs(_components.li, {
        children: ["Correlate both streams with shared fields such as ", _jsx(_components.code, {
          children: "agent_id"
        }), ", ", _jsx(_components.code, {
          children: "name"
        }), ", ", _jsx(_components.code, {
          children: "channel"
        }), ", ", _jsx(_components.code, {
          children: "turn_id"
        }), ", and ", _jsx(_components.code, {
          children: "labels"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "labels"
      }), " are especially useful when you want to group runtime data by customer segment, campaign, environment, or experiment."]
    }), `
`, _jsx(_components.h2, {
      id: "related-resources",
      children: "Related resources"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "debug-agent-failures",
          children: "Debug agent failures with runtime events"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "retrieve-session-history",
          children: "Retrieve conversation history after a session ends"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "get-runtime-events",
          children: "Get runtime events"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "event-notifications",
          children: "Client-side events"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "webhooks",
          children: "Webhooks"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../reference/event-types",
          children: "Notification event types"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android",
          children: "Android toolkit API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios",
          children: "iOS toolkit API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web",
          children: "Web toolkit API"
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
