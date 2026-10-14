import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Debug agent failures",
  description: "Use toolkit callbacks, webhook events, and turn-level data to understand why an agent failed or behaved unexpectedly."
};
export let _markdown = `

When an agent session fails, the explanation may span more than one event. This page shows which events to check first and how to correlate them.

A useful debugging flow combines:

* Client callbacks for live reproduction
* Webhook events for durable backend records
* Turn-level data for post-session analysis

## Start with the right event [#start-with-the-right-event]

| Symptom                                                       | Check first                                                          | Then check                                                                                                                           |
| ------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| The agent stopped unexpectedly                                | [\`102 agent left\`](../../reference/event-types#102-agent-left)       | [\`110 agent error\`](../../reference/event-types#110-agent-error), [\`101 agent joined\`](../../reference/event-types#101-agent-joined) |
| The agent reported a module failure during a live session     | \`onAgentError\`                                                       | [\`110 agent error\`](../../reference/event-types#110-agent-error), \`onDebugLog\` or \`DEBUG_LOG\`                                        |
| The response was slow or degraded before failure              | [\`111 agent metrics\`](../../reference/event-types#111-agent-metrics) | [\`Query conversation turn information\`](/en/api-reference/api-ref/conversational-ai/turns)                                           |
| A specific turn failed                                        | \`turn_id\` from \`onAgentError\` or \`110\`                               | [\`Query conversation turn information\`](/en/api-reference/api-ref/conversational-ai/turns)                                           |
| The UI displayed incorrect state but the session did not fail | \`onAgentStateChanged\` and fine-grained state callbacks               | \`onDebugLog\` or \`DEBUG_LOG\`                                                                                                          |

## Choose a debugging path [#choose-a-debugging-path]

<Tabs>
  <TabsList>
    <TabsTrigger value="client-debug">
      Client-side debugging
    </TabsTrigger>

    <TabsTrigger value="server-debug">
      Server-side debugging
    </TabsTrigger>
  </TabsList>

  <TabsContent value="client-debug">
    Use the client path when you are reproducing the issue live and the app must react immediately:

    * Start with \`onAgentError\`
    * Capture \`onDebugLog\` or \`DEBUG_LOG\`
    * Inspect state changes such as \`onAgentStateChanged\`
  </TabsContent>

  <TabsContent value="server-debug">
    Use the server path when you need to investigate the issue after the session ends:

    * Start with [\`102 agent left\`](../../reference/event-types#102-agent-left)
    * Inspect [\`110 agent error\`](../../reference/event-types#110-agent-error)
    * Review [\`111 agent metrics\`](../../reference/event-types#111-agent-metrics)
    * Query [\`turns\`](/en/api-reference/api-ref/conversational-ai/turns) when you need turn-level timing and completion data
  </TabsContent>
</Tabs>

## Enable events before you debug [#enable-events-before-you-debug]

For client-side runtime debugging, start the agent with RTM and the relevant event outputs enabled:

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

For backend debugging, configure [webhooks](webhooks) and subscribe to the following events:

* \`101 agent joined\`
* \`102 agent left\`
* \`104 agent expire\`
* \`110 agent error\`
* \`111 agent metrics\`

## Build a failure timeline [#build-a-failure-timeline]

In production, checking the events in the following order usually surfaces the cause fastest:

1. Confirm the session existed with [\`101 agent joined\`](../../reference/event-types#101-agent-joined).
2. Check how it ended with [\`102 agent left\`](../../reference/event-types#102-agent-left).
3. Look for module failures in [\`110 agent error\`](../../reference/event-types#110-agent-error).
4. Inspect latency and degradation in [\`111 agent metrics\`](../../reference/event-types#111-agent-metrics).
5. If the problem happened on a specific turn, query [\`turns\`](/en/api-reference/api-ref/conversational-ai/turns).

This sequence helps you separate a session that ended badly from one that slowed down first and then failed.

## Interpret the most important fields [#interpret-the-most-important-fields]

### \`102 agent left\` [#102-agent-left]

This event tells you how the session ended:

* \`status\` tells you whether the session stopped normally or failed.
* \`message\` explains why the session left, for example, idle timeout or connection failure.
* \`stop_ts\` gives you the session end time for correlation.

### \`110 agent error\` [#110-agent-error]

This event tells you which module failed:

* \`errors[].module\` tells you where the problem occurred, such as \`llm\`, \`tts\`, or \`sip\`.
* \`errors[].code\` is the vendor-specific error code.
* \`errors[].message\` gives the error text returned for that failure.
* \`turn_id\` helps you correlate the failure with a specific user-agent exchange.

### \`111 agent metrics\` [#111-agent-metrics]

This event tells you whether the session degraded before failure:

* Track latency trends for LLM and TTS
* Compare healthy and failed sessions by \`labels\`
* Isolate whether the problem is model-side, telephony-side, or client-perceived only

For performance-focused analysis, also see [Optimize conversation latency](../../best-practices/optimize-latency).

## Correlate client and server records [#correlate-client-and-server-records]

When you combine local reproduction with backend evidence, match records by:

* \`agent_id\`
* \`name\`
* \`channel\`
* \`turn_id\`
* \`labels\` (useful when debugging by tenant, environment, campaign, or experiment)

## Recommended debugging workflow [#recommended-debugging-workflow]

1. Reproduce the issue with toolkit callbacks enabled in the client.
2. Capture \`onAgentError\`, \`onDebugLog\`, or \`DEBUG_LOG\` during the live session.
3. Confirm the same session in webhook data with \`101\`, \`102\`, \`110\`, and \`111\`.
4. If needed, query [\`turns\`](/en/api-reference/api-ref/conversational-ai/turns) for per-turn timing and completion data.
5. Group repeated failures by \`labels\` to decide whether the issue is session-specific or systemic.

## Related resources [#related-resources]

* [Monitor agent status, errors, and performance](monitor-agent-runtime)
* [Get runtime events](get-runtime-events)
* [Client-side events](event-notifications)
* [Webhooks](webhooks)
* [Notification event types](../../reference/event-types)
* [Query conversation turn information](/en/api-reference/api-ref/conversational-ai/turns)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When an agent session fails, the explanation may span more than one event. This page shows which events to check first and how to correlate them."
  }, {
    heading: undefined,
    content: "A useful debugging flow combines:"
  }, {
    heading: undefined,
    content: "Client callbacks for live reproduction"
  }, {
    heading: undefined,
    content: "Webhook events for durable backend records"
  }, {
    heading: undefined,
    content: "Turn-level data for post-session analysis"
  }, {
    heading: "start-with-the-right-event",
    content: "Symptom"
  }, {
    heading: "start-with-the-right-event",
    content: "Check first"
  }, {
    heading: "start-with-the-right-event",
    content: "Then check"
  }, {
    heading: "start-with-the-right-event",
    content: "The agent stopped unexpectedly"
  }, {
    heading: "start-with-the-right-event",
    content: "`102 agent left`"
  }, {
    heading: "start-with-the-right-event",
    content: "`110 agent error`, `101 agent joined`"
  }, {
    heading: "start-with-the-right-event",
    content: "The agent reported a module failure during a live session"
  }, {
    heading: "start-with-the-right-event",
    content: "`onAgentError`"
  }, {
    heading: "start-with-the-right-event",
    content: "`110 agent error`, `onDebugLog` or `DEBUG_LOG`"
  }, {
    heading: "start-with-the-right-event",
    content: "The response was slow or degraded before failure"
  }, {
    heading: "start-with-the-right-event",
    content: "`111 agent metrics`"
  }, {
    heading: "start-with-the-right-event",
    content: "`Query conversation turn information`"
  }, {
    heading: "start-with-the-right-event",
    content: "A specific turn failed"
  }, {
    heading: "start-with-the-right-event",
    content: "`turn_id` from `onAgentError` or `110`"
  }, {
    heading: "start-with-the-right-event",
    content: "`Query conversation turn information`"
  }, {
    heading: "start-with-the-right-event",
    content: "The UI displayed incorrect state but the session did not fail"
  }, {
    heading: "start-with-the-right-event",
    content: "`onAgentStateChanged` and fine-grained state callbacks"
  }, {
    heading: "start-with-the-right-event",
    content: "`onDebugLog` or `DEBUG_LOG`"
  }, {
    heading: "choose-a-debugging-path",
    content: "Use the client path when you are reproducing the issue live and the app must react immediately:"
  }, {
    heading: "choose-a-debugging-path",
    content: "Start with `onAgentError`"
  }, {
    heading: "choose-a-debugging-path",
    content: "Capture `onDebugLog` or `DEBUG_LOG`"
  }, {
    heading: "choose-a-debugging-path",
    content: "Inspect state changes such as `onAgentStateChanged`"
  }, {
    heading: "choose-a-debugging-path",
    content: "Use the server path when you need to investigate the issue after the session ends:"
  }, {
    heading: "choose-a-debugging-path",
    content: "Start with `102 agent left`"
  }, {
    heading: "choose-a-debugging-path",
    content: "Inspect `110 agent error`"
  }, {
    heading: "choose-a-debugging-path",
    content: "Review `111 agent metrics`"
  }, {
    heading: "choose-a-debugging-path",
    content: "Query `turns` when you need turn-level timing and completion data"
  }, {
    heading: "enable-events-before-you-debug",
    content: "For client-side runtime debugging, start the agent with RTM and the relevant event outputs enabled:"
  }, {
    heading: "enable-events-before-you-debug",
    content: "For backend debugging, configure webhooks and subscribe to the following events:"
  }, {
    heading: "enable-events-before-you-debug",
    content: "`101 agent joined`"
  }, {
    heading: "enable-events-before-you-debug",
    content: "`102 agent left`"
  }, {
    heading: "enable-events-before-you-debug",
    content: "`104 agent expire`"
  }, {
    heading: "enable-events-before-you-debug",
    content: "`110 agent error`"
  }, {
    heading: "enable-events-before-you-debug",
    content: "`111 agent metrics`"
  }, {
    heading: "build-a-failure-timeline",
    content: "In production, checking the events in the following order usually surfaces the cause fastest:"
  }, {
    heading: "build-a-failure-timeline",
    content: "Confirm the session existed with `101 agent joined`."
  }, {
    heading: "build-a-failure-timeline",
    content: "Check how it ended with `102 agent left`."
  }, {
    heading: "build-a-failure-timeline",
    content: "Look for module failures in `110 agent error`."
  }, {
    heading: "build-a-failure-timeline",
    content: "Inspect latency and degradation in `111 agent metrics`."
  }, {
    heading: "build-a-failure-timeline",
    content: "If the problem happened on a specific turn, query `turns`."
  }, {
    heading: "build-a-failure-timeline",
    content: "This sequence helps you separate a session that ended badly from one that slowed down first and then failed."
  }, {
    heading: "102-agent-left",
    content: "This event tells you how the session ended:"
  }, {
    heading: "102-agent-left",
    content: "`status` tells you whether the session stopped normally or failed."
  }, {
    heading: "102-agent-left",
    content: "`message` explains why the session left, for example, idle timeout or connection failure."
  }, {
    heading: "102-agent-left",
    content: "`stop_ts` gives you the session end time for correlation."
  }, {
    heading: "110-agent-error",
    content: "This event tells you which module failed:"
  }, {
    heading: "110-agent-error",
    content: "`errors[].module` tells you where the problem occurred, such as `llm`, `tts`, or `sip`."
  }, {
    heading: "110-agent-error",
    content: "`errors[].code` is the vendor-specific error code."
  }, {
    heading: "110-agent-error",
    content: "`errors[].message` gives the error text returned for that failure."
  }, {
    heading: "110-agent-error",
    content: "`turn_id` helps you correlate the failure with a specific user-agent exchange."
  }, {
    heading: "111-agent-metrics",
    content: "This event tells you whether the session degraded before failure:"
  }, {
    heading: "111-agent-metrics",
    content: "Track latency trends for LLM and TTS"
  }, {
    heading: "111-agent-metrics",
    content: "Compare healthy and failed sessions by `labels`"
  }, {
    heading: "111-agent-metrics",
    content: "Isolate whether the problem is model-side, telephony-side, or client-perceived only"
  }, {
    heading: "111-agent-metrics",
    content: "For performance-focused analysis, also see Optimize conversation latency."
  }, {
    heading: "correlate-client-and-server-records",
    content: "When you combine local reproduction with backend evidence, match records by:"
  }, {
    heading: "correlate-client-and-server-records",
    content: "`agent_id`"
  }, {
    heading: "correlate-client-and-server-records",
    content: "`name`"
  }, {
    heading: "correlate-client-and-server-records",
    content: "`channel`"
  }, {
    heading: "correlate-client-and-server-records",
    content: "`turn_id`"
  }, {
    heading: "correlate-client-and-server-records",
    content: "`labels` (useful when debugging by tenant, environment, campaign, or experiment)"
  }, {
    heading: "recommended-debugging-workflow",
    content: "Reproduce the issue with toolkit callbacks enabled in the client."
  }, {
    heading: "recommended-debugging-workflow",
    content: "Capture `onAgentError`, `onDebugLog`, or `DEBUG_LOG` during the live session."
  }, {
    heading: "recommended-debugging-workflow",
    content: "Confirm the same session in webhook data with `101`, `102`, `110`, and `111`."
  }, {
    heading: "recommended-debugging-workflow",
    content: "If needed, query `turns` for per-turn timing and completion data."
  }, {
    heading: "recommended-debugging-workflow",
    content: "Group repeated failures by `labels` to decide whether the issue is session-specific or systemic."
  }, {
    heading: "related-resources",
    content: "Monitor agent status, errors, and performance"
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
    content: "Query conversation turn information"
  }],
  headings: [{
    id: "start-with-the-right-event",
    content: "Start with the right event"
  }, {
    id: "choose-a-debugging-path",
    content: "Choose a debugging path"
  }, {
    id: "enable-events-before-you-debug",
    content: "Enable events before you debug"
  }, {
    id: "build-a-failure-timeline",
    content: "Build a failure timeline"
  }, {
    id: "interpret-the-most-important-fields",
    content: "Interpret the most important fields"
  }, {
    id: "102-agent-left",
    content: "`102 agent left`"
  }, {
    id: "110-agent-error",
    content: "`110 agent error`"
  }, {
    id: "111-agent-metrics",
    content: "`111 agent metrics`"
  }, {
    id: "correlate-client-and-server-records",
    content: "Correlate client and server records"
  }, {
    id: "recommended-debugging-workflow",
    content: "Recommended debugging workflow"
  }, {
    id: "related-resources",
    content: "Related resources"
  }]
};
export let toc = [{
  depth: 2,
  url: "#start-with-the-right-event",
  title: _jsx(_Fragment, {
    children: "Start with the right event"
  })
}, {
  depth: 2,
  url: "#choose-a-debugging-path",
  title: _jsx(_Fragment, {
    children: "Choose a debugging path"
  })
}, {
  depth: 2,
  url: "#enable-events-before-you-debug",
  title: _jsx(_Fragment, {
    children: "Enable events before you debug"
  })
}, {
  depth: 2,
  url: "#build-a-failure-timeline",
  title: _jsx(_Fragment, {
    children: "Build a failure timeline"
  })
}, {
  depth: 2,
  url: "#interpret-the-most-important-fields",
  title: _jsx(_Fragment, {
    children: "Interpret the most important fields"
  })
}, {
  depth: 3,
  url: "#102-agent-left",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "102 agent left"
    })
  })
}, {
  depth: 3,
  url: "#110-agent-error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "110 agent error"
    })
  })
}, {
  depth: 3,
  url: "#111-agent-metrics",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "111 agent metrics"
    })
  })
}, {
  depth: 2,
  url: "#correlate-client-and-server-records",
  title: _jsx(_Fragment, {
    children: "Correlate client and server records"
  })
}, {
  depth: 2,
  url: "#recommended-debugging-workflow",
  title: _jsx(_Fragment, {
    children: "Recommended debugging workflow"
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
      children: "When an agent session fails, the explanation may span more than one event. This page shows which events to check first and how to correlate them."
    }), `
`, _jsx(_components.p, {
      children: "A useful debugging flow combines:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Client callbacks for live reproduction"
      }), `
`, _jsx(_components.li, {
        children: "Webhook events for durable backend records"
      }), `
`, _jsx(_components.li, {
        children: "Turn-level data for post-session analysis"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "start-with-the-right-event",
      children: "Start with the right event"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Symptom"
          }), _jsx(_components.th, {
            children: "Check first"
          }), _jsx(_components.th, {
            children: "Then check"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "The agent stopped unexpectedly"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "../../reference/event-types#102-agent-left",
              children: _jsx(_components.code, {
                children: "102 agent left"
              })
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "../../reference/event-types#110-agent-error",
              children: _jsx(_components.code, {
                children: "110 agent error"
              })
            }), ", ", _jsx(_components.a, {
              href: "../../reference/event-types#101-agent-joined",
              children: _jsx(_components.code, {
                children: "101 agent joined"
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "The agent reported a module failure during a live session"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onAgentError"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "../../reference/event-types#110-agent-error",
              children: _jsx(_components.code, {
                children: "110 agent error"
              })
            }), ", ", _jsx(_components.code, {
              children: "onDebugLog"
            }), " or ", _jsx(_components.code, {
              children: "DEBUG_LOG"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "The response was slow or degraded before failure"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "../../reference/event-types#111-agent-metrics",
              children: _jsx(_components.code, {
                children: "111 agent metrics"
              })
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/turns",
              children: _jsx(_components.code, {
                children: "Query conversation turn information"
              })
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "A specific turn failed"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "turn_id"
            }), " from ", _jsx(_components.code, {
              children: "onAgentError"
            }), " or ", _jsx(_components.code, {
              children: "110"
            })]
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/turns",
              children: _jsx(_components.code, {
                children: "Query conversation turn information"
              })
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "The UI displayed incorrect state but the session did not fail"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "onAgentStateChanged"
            }), " and fine-grained state callbacks"]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "onDebugLog"
            }), " or ", _jsx(_components.code, {
              children: "DEBUG_LOG"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "choose-a-debugging-path",
      children: "Choose a debugging path"
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "client-debug",
          children: "Client-side debugging"
        }), _jsx(TabsTrigger, {
          value: "server-debug",
          children: "Server-side debugging"
        })]
      }), _jsxs(TabsContent, {
        value: "client-debug",
        children: [_jsx(_components.p, {
          children: "Use the client path when you are reproducing the issue live and the app must react immediately:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Start with ", _jsx(_components.code, {
              children: "onAgentError"
            })]
          }), `
`, _jsxs(_components.li, {
            children: ["Capture ", _jsx(_components.code, {
              children: "onDebugLog"
            }), " or ", _jsx(_components.code, {
              children: "DEBUG_LOG"
            })]
          }), `
`, _jsxs(_components.li, {
            children: ["Inspect state changes such as ", _jsx(_components.code, {
              children: "onAgentStateChanged"
            })]
          }), `
`]
        })]
      }), _jsxs(TabsContent, {
        value: "server-debug",
        children: [_jsx(_components.p, {
          children: "Use the server path when you need to investigate the issue after the session ends:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Start with ", _jsx(_components.a, {
              href: "../../reference/event-types#102-agent-left",
              children: _jsx(_components.code, {
                children: "102 agent left"
              })
            })]
          }), `
`, _jsxs(_components.li, {
            children: ["Inspect ", _jsx(_components.a, {
              href: "../../reference/event-types#110-agent-error",
              children: _jsx(_components.code, {
                children: "110 agent error"
              })
            })]
          }), `
`, _jsxs(_components.li, {
            children: ["Review ", _jsx(_components.a, {
              href: "../../reference/event-types#111-agent-metrics",
              children: _jsx(_components.code, {
                children: "111 agent metrics"
              })
            })]
          }), `
`, _jsxs(_components.li, {
            children: ["Query ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/turns",
              children: _jsx(_components.code, {
                children: "turns"
              })
            }), " when you need turn-level timing and completion data"]
          }), `
`]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "enable-events-before-you-debug",
      children: "Enable events before you debug"
    }), `
`, _jsx(_components.p, {
      children: "For client-side runtime debugging, start the agent with RTM and the relevant event outputs enabled:"
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
`, _jsxs(_components.p, {
      children: ["For backend debugging, configure ", _jsx(_components.a, {
        href: "webhooks",
        children: "webhooks"
      }), " and subscribe to the following events:"]
    }), `
`, _jsxs(_components.ul, {
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
`]
    }), `
`, _jsx(_components.h2, {
      id: "build-a-failure-timeline",
      children: "Build a failure timeline"
    }), `
`, _jsx(_components.p, {
      children: "In production, checking the events in the following order usually surfaces the cause fastest:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Confirm the session existed with ", _jsx(_components.a, {
          href: "../../reference/event-types#101-agent-joined",
          children: _jsx(_components.code, {
            children: "101 agent joined"
          })
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Check how it ended with ", _jsx(_components.a, {
          href: "../../reference/event-types#102-agent-left",
          children: _jsx(_components.code, {
            children: "102 agent left"
          })
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Look for module failures in ", _jsx(_components.a, {
          href: "../../reference/event-types#110-agent-error",
          children: _jsx(_components.code, {
            children: "110 agent error"
          })
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Inspect latency and degradation in ", _jsx(_components.a, {
          href: "../../reference/event-types#111-agent-metrics",
          children: _jsx(_components.code, {
            children: "111 agent metrics"
          })
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the problem happened on a specific turn, query ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/conversational-ai/turns",
          children: _jsx(_components.code, {
            children: "turns"
          })
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This sequence helps you separate a session that ended badly from one that slowed down first and then failed."
    }), `
`, _jsx(_components.h2, {
      id: "interpret-the-most-important-fields",
      children: "Interpret the most important fields"
    }), `
`, _jsx(_components.h3, {
      id: "102-agent-left",
      children: _jsx(_components.code, {
        children: "102 agent left"
      })
    }), `
`, _jsx(_components.p, {
      children: "This event tells you how the session ended:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), " tells you whether the session stopped normally or failed."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "message"
        }), " explains why the session left, for example, idle timeout or connection failure."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "stop_ts"
        }), " gives you the session end time for correlation."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "110-agent-error",
      children: _jsx(_components.code, {
        children: "110 agent error"
      })
    }), `
`, _jsx(_components.p, {
      children: "This event tells you which module failed:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errors[].module"
        }), " tells you where the problem occurred, such as ", _jsx(_components.code, {
          children: "llm"
        }), ", ", _jsx(_components.code, {
          children: "tts"
        }), ", or ", _jsx(_components.code, {
          children: "sip"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errors[].code"
        }), " is the vendor-specific error code."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errors[].message"
        }), " gives the error text returned for that failure."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "turn_id"
        }), " helps you correlate the failure with a specific user-agent exchange."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "111-agent-metrics",
      children: _jsx(_components.code, {
        children: "111 agent metrics"
      })
    }), `
`, _jsx(_components.p, {
      children: "This event tells you whether the session degraded before failure:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Track latency trends for LLM and TTS"
      }), `
`, _jsxs(_components.li, {
        children: ["Compare healthy and failed sessions by ", _jsx(_components.code, {
          children: "labels"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Isolate whether the problem is model-side, telephony-side, or client-perceived only"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For performance-focused analysis, also see ", _jsx(_components.a, {
        href: "../../best-practices/optimize-latency",
        children: "Optimize conversation latency"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "correlate-client-and-server-records",
      children: "Correlate client and server records"
    }), `
`, _jsx(_components.p, {
      children: "When you combine local reproduction with backend evidence, match records by:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "agent_id"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "name"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "channel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "turn_id"
        })
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "labels"
        }), " (useful when debugging by tenant, environment, campaign, or experiment)"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-debugging-workflow",
      children: "Recommended debugging workflow"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Reproduce the issue with toolkit callbacks enabled in the client."
      }), `
`, _jsxs(_components.li, {
        children: ["Capture ", _jsx(_components.code, {
          children: "onAgentError"
        }), ", ", _jsx(_components.code, {
          children: "onDebugLog"
        }), ", or ", _jsx(_components.code, {
          children: "DEBUG_LOG"
        }), " during the live session."]
      }), `
`, _jsxs(_components.li, {
        children: ["Confirm the same session in webhook data with ", _jsx(_components.code, {
          children: "101"
        }), ", ", _jsx(_components.code, {
          children: "102"
        }), ", ", _jsx(_components.code, {
          children: "110"
        }), ", and ", _jsx(_components.code, {
          children: "111"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["If needed, query ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/conversational-ai/turns",
          children: _jsx(_components.code, {
            children: "turns"
          })
        }), " for per-turn timing and completion data."]
      }), `
`, _jsxs(_components.li, {
        children: ["Group repeated failures by ", _jsx(_components.code, {
          children: "labels"
        }), " to decide whether the issue is session-specific or systemic."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "related-resources",
      children: "Related resources"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "monitor-agent-runtime",
          children: "Monitor agent status, errors, and performance"
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
          href: "/en/api-reference/api-ref/conversational-ai/turns",
          children: "Query conversation turn information"
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
