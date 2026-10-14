import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Retrieve conversation history",
  description: "Choose between webhook history events and REST APIs to retrieve messages, timestamps, and per-turn data after an agent session."
};
export let _markdown = `

After a session ends, you may need to answer questions such as:

* What did the user and agent say?
* When did the session start and stop?
* Which turn was slow or incomplete?

Conversational AI Engine provides separate retrieval paths for pushed history, pulled history, and turn analytics. Choose the one that matches your needs.

## Choose the retrieval method [#choose-the-retrieval-method]

| Goal                                                      | Best source   | Use this                                                                                   |
| --------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------ |
| Receive history automatically when the session ends       | Webhook event | [\`103 agent history\`](../../reference/event-types#103-agent-history)                       |
| Receive post-session turn data automatically              | Webhook event | [\`112 turns finished\`](../../reference/event-types#112-turns-finished)                     |
| Pull the agent's stored memory from your backend workflow | REST API      | [\`Retrieve agent history\`](/en/api-reference/api-ref/conversational-ai/history)            |
| Analyze start, end, and latency for each turn             | REST API      | [\`Query conversation turn information\`](/en/api-reference/api-ref/conversational-ai/turns) |

## Use the history webhook for automatic delivery [#use-the-history-webhook-for-automatic-delivery]

The [\`103 agent history\`](../../reference/event-types#103-agent-history) webhook event is the best fit when you want the platform to push session history to your server after the agent stops.

This event includes:

* \`agent_id\`
* \`name\`
* \`channel\`
* \`start_ts\`
* \`stop_ts\`
* \`contents\`
* \`labels\`

Each \`contents\` item includes the message sender and content, which is enough for common transcript-style archiving and post-session review.

For sessions that use \`llm.vendor\` set to \`custom\`, each \`contents\` item can also include speech timing fields:

* \`speech_start_ms\`: Unix timestamp in milliseconds indicating when the user started speaking or the agent started TTS playback.
* \`speech_end_ms\`: Unix timestamp in milliseconds indicating when the user stopped speaking, or when TTS playback completed or was interrupted.
* \`speech_algorithmic_delay\`: Total delay in milliseconds introduced by audio processing algorithms after audio is captured from the user's microphone. This field is returned only when \`contents[].role\` is \`user\` and actual voice input is present.

Use these timing fields when you need to align transcript entries with cloud recording audio or analyze the actual speech timeline.

## Use \`112 turns finished\` for pushed turn analytics [#use-112-turns-finished-for-pushed-turn-analytics]

[\`112 turns finished\`](../../reference/event-types#112-turns-finished) is the best fit when you want Agora to push conversation turn data after the session ends.

This event includes turn start and end metadata, latency metrics, \`total_turn_count\`, and \`is_truncated\`, which help with post-session analysis and archiving.

## Use the history API when you need to pull data [#use-the-history-api-when-you-need-to-pull-data]

Use [\`Retrieve agent history\`](/en/api-reference/api-ref/conversational-ai/history) when:

* Your backend needs to fetch history on demand
* You need a pull-based workflow instead of webhook delivery
* The session is still running and you want the current stored memory

This path is often better for internal tools and admin workflows where users open a session record and fetch the latest stored memory explicitly.

## Use the turns API for diagnostics [#use-the-turns-api-for-diagnostics]

Use [\`Query conversation turn information\`](/en/api-reference/api-ref/conversational-ai/turns) when you care about turn lifecycle and timing more than message text.

This API is the better choice for questions such as:

* Which turn was slow?
* Which turn ended abnormally?
* How many turns completed successfully?

If you need both transcript content and timing analysis, store the \`103 agent history\` event and query the turns API for deeper diagnostics.

## Set the history limit before you start the agent [#set-the-history-limit-before-you-start-the-agent]

The number of stored history items in [\`103 agent history\`](../../reference/event-types#103-agent-history) depends on \`llm.max_history\` when you start the agent. The default is \`32\`.

If your sessions are longer, increase that value when creating the agent:

\`\`\`json
{
  "llm": {
    "max_history": 64
  }
}
\`\`\`

Choose a value that matches your retention and payload-size expectations.

## Recommended storage pattern [#recommended-storage-pattern]

When your server receives history after the session ends:

1. Store the raw \`103\` payload for traceability.
2. Index records by \`agent_id\`, \`channel\`, and \`stop_ts\`.
3. Preserve \`labels\` so you can filter by tenant, campaign, environment, or experiment.
4. Link the stored history to turn-level analytics from [\`turns\`](/en/api-reference/api-ref/conversational-ai/turns) when needed.

## Common decision rules [#common-decision-rules]

Use these rules to quickly choose a retrieval option:

* For immediate delivery when the session ends, use \`103 agent history\`.
* For pushed turn data after the session ends, use \`112 turns finished\`.
* For on-demand fetching, use the history API.
* For timing and completion analysis, use the turns API.
* For complete postmortems, combine all three.

## Related resources [#related-resources]

* [Monitor agent status, errors, and performance](monitor-agent-runtime)
* [Get runtime events](get-runtime-events)
* [Webhooks](webhooks)
* [Notification event types](../../reference/event-types#103-agent-history)
* [Keep conversation context across turns](../shape-the-conversation/short-term-memory)
* [Retrieve agent history](/en/api-reference/api-ref/conversational-ai/history)
* [Query conversation turn information](/en/api-reference/api-ref/conversational-ai/turns)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "After a session ends, you may need to answer questions such as:"
  }, {
    heading: undefined,
    content: "What did the user and agent say?"
  }, {
    heading: undefined,
    content: "When did the session start and stop?"
  }, {
    heading: undefined,
    content: "Which turn was slow or incomplete?"
  }, {
    heading: undefined,
    content: "Conversational AI Engine provides separate retrieval paths for pushed history, pulled history, and turn analytics. Choose the one that matches your needs."
  }, {
    heading: "choose-the-retrieval-method",
    content: "Goal"
  }, {
    heading: "choose-the-retrieval-method",
    content: "Best source"
  }, {
    heading: "choose-the-retrieval-method",
    content: "Use this"
  }, {
    heading: "choose-the-retrieval-method",
    content: "Receive history automatically when the session ends"
  }, {
    heading: "choose-the-retrieval-method",
    content: "Webhook event"
  }, {
    heading: "choose-the-retrieval-method",
    content: "`103 agent history`"
  }, {
    heading: "choose-the-retrieval-method",
    content: "Receive post-session turn data automatically"
  }, {
    heading: "choose-the-retrieval-method",
    content: "Webhook event"
  }, {
    heading: "choose-the-retrieval-method",
    content: "`112 turns finished`"
  }, {
    heading: "choose-the-retrieval-method",
    content: "Pull the agent's stored memory from your backend workflow"
  }, {
    heading: "choose-the-retrieval-method",
    content: "REST API"
  }, {
    heading: "choose-the-retrieval-method",
    content: "`Retrieve agent history`"
  }, {
    heading: "choose-the-retrieval-method",
    content: "Analyze start, end, and latency for each turn"
  }, {
    heading: "choose-the-retrieval-method",
    content: "REST API"
  }, {
    heading: "choose-the-retrieval-method",
    content: "`Query conversation turn information`"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "The `103 agent history` webhook event is the best fit when you want the platform to push session history to your server after the agent stops."
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "This event includes:"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`agent_id`"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`name`"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`channel`"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`start_ts`"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`stop_ts`"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`contents`"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`labels`"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "Each `contents` item includes the message sender and content, which is enough for common transcript-style archiving and post-session review."
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "For sessions that use `llm.vendor` set to `custom`, each `contents` item can also include speech timing fields:"
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`speech_start_ms`: Unix timestamp in milliseconds indicating when the user started speaking or the agent started TTS playback."
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`speech_end_ms`: Unix timestamp in milliseconds indicating when the user stopped speaking, or when TTS playback completed or was interrupted."
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "`speech_algorithmic_delay`: Total delay in milliseconds introduced by audio processing algorithms after audio is captured from the user's microphone. This field is returned only when `contents[].role` is `user` and actual voice input is present."
  }, {
    heading: "use-the-history-webhook-for-automatic-delivery",
    content: "Use these timing fields when you need to align transcript entries with cloud recording audio or analyze the actual speech timeline."
  }, {
    heading: "use-112-turns-finished-for-pushed-turn-analytics",
    content: "`112 turns finished` is the best fit when you want Agora to push conversation turn data after the session ends."
  }, {
    heading: "use-112-turns-finished-for-pushed-turn-analytics",
    content: "This event includes turn start and end metadata, latency metrics, `total_turn_count`, and `is_truncated`, which help with post-session analysis and archiving."
  }, {
    heading: "use-the-history-api-when-you-need-to-pull-data",
    content: "Use `Retrieve agent history` when:"
  }, {
    heading: "use-the-history-api-when-you-need-to-pull-data",
    content: "Your backend needs to fetch history on demand"
  }, {
    heading: "use-the-history-api-when-you-need-to-pull-data",
    content: "You need a pull-based workflow instead of webhook delivery"
  }, {
    heading: "use-the-history-api-when-you-need-to-pull-data",
    content: "The session is still running and you want the current stored memory"
  }, {
    heading: "use-the-history-api-when-you-need-to-pull-data",
    content: "This path is often better for internal tools and admin workflows where users open a session record and fetch the latest stored memory explicitly."
  }, {
    heading: "use-the-turns-api-for-diagnostics",
    content: "Use `Query conversation turn information` when you care about turn lifecycle and timing more than message text."
  }, {
    heading: "use-the-turns-api-for-diagnostics",
    content: "This API is the better choice for questions such as:"
  }, {
    heading: "use-the-turns-api-for-diagnostics",
    content: "Which turn was slow?"
  }, {
    heading: "use-the-turns-api-for-diagnostics",
    content: "Which turn ended abnormally?"
  }, {
    heading: "use-the-turns-api-for-diagnostics",
    content: "How many turns completed successfully?"
  }, {
    heading: "use-the-turns-api-for-diagnostics",
    content: "If you need both transcript content and timing analysis, store the `103 agent history` event and query the turns API for deeper diagnostics."
  }, {
    heading: "set-the-history-limit-before-you-start-the-agent",
    content: "The number of stored history items in `103 agent history` depends on `llm.max_history` when you start the agent. The default is `32`."
  }, {
    heading: "set-the-history-limit-before-you-start-the-agent",
    content: "If your sessions are longer, increase that value when creating the agent:"
  }, {
    heading: "set-the-history-limit-before-you-start-the-agent",
    content: "Choose a value that matches your retention and payload-size expectations."
  }, {
    heading: "recommended-storage-pattern",
    content: "When your server receives history after the session ends:"
  }, {
    heading: "recommended-storage-pattern",
    content: "Store the raw `103` payload for traceability."
  }, {
    heading: "recommended-storage-pattern",
    content: "Index records by `agent_id`, `channel`, and `stop_ts`."
  }, {
    heading: "recommended-storage-pattern",
    content: "Preserve `labels` so you can filter by tenant, campaign, environment, or experiment."
  }, {
    heading: "recommended-storage-pattern",
    content: "Link the stored history to turn-level analytics from `turns` when needed."
  }, {
    heading: "common-decision-rules",
    content: "Use these rules to quickly choose a retrieval option:"
  }, {
    heading: "common-decision-rules",
    content: "For immediate delivery when the session ends, use `103 agent history`."
  }, {
    heading: "common-decision-rules",
    content: "For pushed turn data after the session ends, use `112 turns finished`."
  }, {
    heading: "common-decision-rules",
    content: "For on-demand fetching, use the history API."
  }, {
    heading: "common-decision-rules",
    content: "For timing and completion analysis, use the turns API."
  }, {
    heading: "common-decision-rules",
    content: "For complete postmortems, combine all three."
  }, {
    heading: "related-resources",
    content: "Monitor agent status, errors, and performance"
  }, {
    heading: "related-resources",
    content: "Get runtime events"
  }, {
    heading: "related-resources",
    content: "Webhooks"
  }, {
    heading: "related-resources",
    content: "Notification event types"
  }, {
    heading: "related-resources",
    content: "Keep conversation context across turns"
  }, {
    heading: "related-resources",
    content: "Retrieve agent history"
  }, {
    heading: "related-resources",
    content: "Query conversation turn information"
  }],
  headings: [{
    id: "choose-the-retrieval-method",
    content: "Choose the retrieval method"
  }, {
    id: "use-the-history-webhook-for-automatic-delivery",
    content: "Use the history webhook for automatic delivery"
  }, {
    id: "use-112-turns-finished-for-pushed-turn-analytics",
    content: "Use `112 turns finished` for pushed turn analytics"
  }, {
    id: "use-the-history-api-when-you-need-to-pull-data",
    content: "Use the history API when you need to pull data"
  }, {
    id: "use-the-turns-api-for-diagnostics",
    content: "Use the turns API for diagnostics"
  }, {
    id: "set-the-history-limit-before-you-start-the-agent",
    content: "Set the history limit before you start the agent"
  }, {
    id: "recommended-storage-pattern",
    content: "Recommended storage pattern"
  }, {
    id: "common-decision-rules",
    content: "Common decision rules"
  }, {
    id: "related-resources",
    content: "Related resources"
  }]
};
export let toc = [{
  depth: 2,
  url: "#choose-the-retrieval-method",
  title: _jsx(_Fragment, {
    children: "Choose the retrieval method"
  })
}, {
  depth: 2,
  url: "#use-the-history-webhook-for-automatic-delivery",
  title: _jsx(_Fragment, {
    children: "Use the history webhook for automatic delivery"
  })
}, {
  depth: 2,
  url: "#use-112-turns-finished-for-pushed-turn-analytics",
  title: _jsxs(_Fragment, {
    children: ["Use ", _jsx("code", {
      children: "112 turns finished"
    }), " for pushed turn analytics"]
  })
}, {
  depth: 2,
  url: "#use-the-history-api-when-you-need-to-pull-data",
  title: _jsx(_Fragment, {
    children: "Use the history API when you need to pull data"
  })
}, {
  depth: 2,
  url: "#use-the-turns-api-for-diagnostics",
  title: _jsx(_Fragment, {
    children: "Use the turns API for diagnostics"
  })
}, {
  depth: 2,
  url: "#set-the-history-limit-before-you-start-the-agent",
  title: _jsx(_Fragment, {
    children: "Set the history limit before you start the agent"
  })
}, {
  depth: 2,
  url: "#recommended-storage-pattern",
  title: _jsx(_Fragment, {
    children: "Recommended storage pattern"
  })
}, {
  depth: 2,
  url: "#common-decision-rules",
  title: _jsx(_Fragment, {
    children: "Common decision rules"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "After a session ends, you may need to answer questions such as:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "What did the user and agent say?"
      }), `
`, _jsx(_components.li, {
        children: "When did the session start and stop?"
      }), `
`, _jsx(_components.li, {
        children: "Which turn was slow or incomplete?"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Conversational AI Engine provides separate retrieval paths for pushed history, pulled history, and turn analytics. Choose the one that matches your needs."
    }), `
`, _jsx(_components.h2, {
      id: "choose-the-retrieval-method",
      children: "Choose the retrieval method"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Goal"
          }), _jsx(_components.th, {
            children: "Best source"
          }), _jsx(_components.th, {
            children: "Use this"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Receive history automatically when the session ends"
          }), _jsx(_components.td, {
            children: "Webhook event"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "../../reference/event-types#103-agent-history",
              children: _jsx(_components.code, {
                children: "103 agent history"
              })
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Receive post-session turn data automatically"
          }), _jsx(_components.td, {
            children: "Webhook event"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "../../reference/event-types#112-turns-finished",
              children: _jsx(_components.code, {
                children: "112 turns finished"
              })
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Pull the agent's stored memory from your backend workflow"
          }), _jsx(_components.td, {
            children: "REST API"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/history",
              children: _jsx(_components.code, {
                children: "Retrieve agent history"
              })
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Analyze start, end, and latency for each turn"
          }), _jsx(_components.td, {
            children: "REST API"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/turns",
              children: _jsx(_components.code, {
                children: "Query conversation turn information"
              })
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "use-the-history-webhook-for-automatic-delivery",
      children: "Use the history webhook for automatic delivery"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.a, {
        href: "../../reference/event-types#103-agent-history",
        children: _jsx(_components.code, {
          children: "103 agent history"
        })
      }), " webhook event is the best fit when you want the platform to push session history to your server after the agent stops."]
    }), `
`, _jsx(_components.p, {
      children: "This event includes:"
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
          children: "start_ts"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "stop_ts"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "contents"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "labels"
        })
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Each ", _jsx(_components.code, {
        children: "contents"
      }), " item includes the message sender and content, which is enough for common transcript-style archiving and post-session review."]
    }), `
`, _jsxs(_components.p, {
      children: ["For sessions that use ", _jsx(_components.code, {
        children: "llm.vendor"
      }), " set to ", _jsx(_components.code, {
        children: "custom"
      }), ", each ", _jsx(_components.code, {
        children: "contents"
      }), " item can also include speech timing fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "speech_start_ms"
        }), ": Unix timestamp in milliseconds indicating when the user started speaking or the agent started TTS playback."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "speech_end_ms"
        }), ": Unix timestamp in milliseconds indicating when the user stopped speaking, or when TTS playback completed or was interrupted."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "speech_algorithmic_delay"
        }), ": Total delay in milliseconds introduced by audio processing algorithms after audio is captured from the user's microphone. This field is returned only when ", _jsx(_components.code, {
          children: "contents[].role"
        }), " is ", _jsx(_components.code, {
          children: "user"
        }), " and actual voice input is present."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Use these timing fields when you need to align transcript entries with cloud recording audio or analyze the actual speech timeline."
    }), `
`, _jsxs(_components.h2, {
      id: "use-112-turns-finished-for-pushed-turn-analytics",
      children: ["Use ", _jsx(_components.code, {
        children: "112 turns finished"
      }), " for pushed turn analytics"]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "../../reference/event-types#112-turns-finished",
        children: _jsx(_components.code, {
          children: "112 turns finished"
        })
      }), " is the best fit when you want Agora to push conversation turn data after the session ends."]
    }), `
`, _jsxs(_components.p, {
      children: ["This event includes turn start and end metadata, latency metrics, ", _jsx(_components.code, {
        children: "total_turn_count"
      }), ", and ", _jsx(_components.code, {
        children: "is_truncated"
      }), ", which help with post-session analysis and archiving."]
    }), `
`, _jsx(_components.h2, {
      id: "use-the-history-api-when-you-need-to-pull-data",
      children: "Use the history API when you need to pull data"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai/history",
        children: _jsx(_components.code, {
          children: "Retrieve agent history"
        })
      }), " when:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Your backend needs to fetch history on demand"
      }), `
`, _jsx(_components.li, {
        children: "You need a pull-based workflow instead of webhook delivery"
      }), `
`, _jsx(_components.li, {
        children: "The session is still running and you want the current stored memory"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This path is often better for internal tools and admin workflows where users open a session record and fetch the latest stored memory explicitly."
    }), `
`, _jsx(_components.h2, {
      id: "use-the-turns-api-for-diagnostics",
      children: "Use the turns API for diagnostics"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai/turns",
        children: _jsx(_components.code, {
          children: "Query conversation turn information"
        })
      }), " when you care about turn lifecycle and timing more than message text."]
    }), `
`, _jsx(_components.p, {
      children: "This API is the better choice for questions such as:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Which turn was slow?"
      }), `
`, _jsx(_components.li, {
        children: "Which turn ended abnormally?"
      }), `
`, _jsx(_components.li, {
        children: "How many turns completed successfully?"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If you need both transcript content and timing analysis, store the ", _jsx(_components.code, {
        children: "103 agent history"
      }), " event and query the turns API for deeper diagnostics."]
    }), `
`, _jsx(_components.h2, {
      id: "set-the-history-limit-before-you-start-the-agent",
      children: "Set the history limit before you start the agent"
    }), `
`, _jsxs(_components.p, {
      children: ["The number of stored history items in ", _jsx(_components.a, {
        href: "../../reference/event-types#103-agent-history",
        children: _jsx(_components.code, {
          children: "103 agent history"
        })
      }), " depends on ", _jsx(_components.code, {
        children: "llm.max_history"
      }), " when you start the agent. The default is ", _jsx(_components.code, {
        children: "32"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "If your sessions are longer, increase that value when creating the agent:"
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
              children: '  "llm"'
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
              children: '    "max_history"'
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
              children: "64"
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
`, _jsx(_components.p, {
      children: "Choose a value that matches your retention and payload-size expectations."
    }), `
`, _jsx(_components.h2, {
      id: "recommended-storage-pattern",
      children: "Recommended storage pattern"
    }), `
`, _jsx(_components.p, {
      children: "When your server receives history after the session ends:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Store the raw ", _jsx(_components.code, {
          children: "103"
        }), " payload for traceability."]
      }), `
`, _jsxs(_components.li, {
        children: ["Index records by ", _jsx(_components.code, {
          children: "agent_id"
        }), ", ", _jsx(_components.code, {
          children: "channel"
        }), ", and ", _jsx(_components.code, {
          children: "stop_ts"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Preserve ", _jsx(_components.code, {
          children: "labels"
        }), " so you can filter by tenant, campaign, environment, or experiment."]
      }), `
`, _jsxs(_components.li, {
        children: ["Link the stored history to turn-level analytics from ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/conversational-ai/turns",
          children: _jsx(_components.code, {
            children: "turns"
          })
        }), " when needed."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "common-decision-rules",
      children: "Common decision rules"
    }), `
`, _jsx(_components.p, {
      children: "Use these rules to quickly choose a retrieval option:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["For immediate delivery when the session ends, use ", _jsx(_components.code, {
          children: "103 agent history"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["For pushed turn data after the session ends, use ", _jsx(_components.code, {
          children: "112 turns finished"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "For on-demand fetching, use the history API."
      }), `
`, _jsx(_components.li, {
        children: "For timing and completion analysis, use the turns API."
      }), `
`, _jsx(_components.li, {
        children: "For complete postmortems, combine all three."
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
          href: "webhooks",
          children: "Webhooks"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../reference/event-types#103-agent-history",
          children: "Notification event types"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../shape-the-conversation/short-term-memory",
          children: "Keep conversation context across turns"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/conversational-ai/history",
          children: "Retrieve agent history"
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
