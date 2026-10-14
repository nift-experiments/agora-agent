import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Handle webhook",
  description: "Use webhooks to collect agent lifecycle, error, history, and metrics events on your backend."
};
export let _markdown = `

A webhook is a user-defined HTTPS callback that lets your backend receive notifications when Conversational AI events occur. Agora sends POST requests to your webhook endpoint so your system can react to agent lifecycle changes, history delivery, errors, and performance metrics in real time.

For the combined entry point that compares client toolkit and webhook delivery, see [Get runtime events](get-runtime-events).

Use this page when you need durable backend records for monitoring, alerting, or analytics. If you need live UI state inside the app, use [Client-side events](event-notifications).

## Understand the tech [#understand-the-tech]

Using Agora Console, you subscribe to specific events for your project and configure the URL of the webhook endpoint that receives them. Agora sends event notifications to that endpoint whenever the subscribed events occur. Your server verifies the request signature, processes the JSON payload, and returns \`200 OK\` to confirm receipt.

## Common uses [#common-uses]

Webhooks are typically used to:

* Track when an agent joins or leaves a channel
* Receive short-term memory history after an agent session ends
* Capture module-level errors for monitoring and debugging
* Collect performance metrics such as LLM and TTS latency

## Prerequisites [#prerequisites]

Before you begin, make sure you have:

* An Agora account
* An active Agora project with Conversational AI enabled
* A public HTTPS endpoint that can receive webhook callbacks
* Server-side access to store and validate the secret used for signature verification

## Enable notifications [#enable-notifications]

To enable Agora notifications for Conversational AI:

1. Sign in to the [Agora Console](https://console.agora.io).
2. Open **Projects** and locate the target project.
3. Open the **Notifications** configuration area for the project.
4. Select the Conversational AI event types you want to subscribe to.
5. Enter the HTTPS callback URL of your receiving server.
6. Save the generated **Secret**. You need it for signature verification.
7. Run the console-side health check and confirm your server responds with \`200 OK\`.

### Recommended webhook endpoint settings [#recommended-webhook-endpoint-settings]

* Use HTTPS only.
* Enable HTTP keep-alive if possible.
* Make sure your server responds within 10 seconds.

## Request header [#request-header]

The header of notification callbacks contains the following fields:

| Field name           | Value                                                 |
| -------------------- | ----------------------------------------------------- |
| \`Content-Type\`       | \`application/json\`                                    |
| \`Agora-Signature\`    | Signature generated with the secret using HMAC/SHA1   |
| \`Agora-Signature-V2\` | Signature generated with the secret using HMAC/SHA256 |

## Request body [#request-body]

The request body of notification callbacks contains the following fields:

| Field name  | Type        | Description                                                  |
| ----------- | ----------- | ------------------------------------------------------------ |
| \`noticeId\`  | String      | Notification ID that uniquely identifies this callback       |
| \`productId\` | Number      | Product ID of the notification source                        |
| \`eventType\` | Number      | Type of event being notified                                 |
| \`notifyMs\`  | Number      | Unix timestamp in milliseconds when Agora sends the callback |
| \`payload\`   | JSON object | Event-specific data                                          |

The following example shows a sample request body:

\`\`\`json
{
  "noticeId": "2000001428:4330:107",
  "productId": 1,
  "eventType": 101,
  "notifyMs": 1611566412672,
  "payload": {}
}
\`\`\`

## Conversational AI event types [#conversational-ai-event-types]

Agora can notify your server of the following Conversational AI events:

| eventType | Description                   |
| --------- | ----------------------------- |
| \`101\`     | Agent joined a channel        |
| \`102\`     | Agent left a channel          |
| \`103\`     | Dialogue history notification |
| \`110\`     | Agent error                   |
| \`111\`     | Agent performance metrics     |
| \`201\`     | Incoming call status change   |
| \`202\`     | Outgoing call status change   |

For payload details, see [Notification event types](../../reference/event-types).

## Signature verification [#signature-verification]

To communicate securely between Agora and your webhook, Agora uses signatures for identity verification:

1. When you configure notifications in Agora Console, Agora generates a secret for your project.
2. When sending a notification, Agora generates \`Agora-Signature\` and \`Agora-Signature-V2\` values using HMAC/SHA1 and HMAC/SHA256.
3. When your server receives the callback, verify one of those signatures against the raw request body.

The following Go example calculates a signature and compares it with the received value:

\`\`\`go
import (
    "crypto/hmac"
    "crypto/sha1"
    "encoding/hex"
    "net/http"
)

const secret = "<replace-with-your-secret>"

func calcSignatureV1(secret, payload string) string {
    mac := hmac.New(sha1.New, []byte(secret))
    mac.Write([]byte(payload))
    return hex.EncodeToString(mac.Sum(nil))
}

func verify(requestBody, signature string) bool {
    calculatedSignature := calcSignatureV1(secret, requestBody)
    return calculatedSignature == signature
}
\`\`\`

After reading the request body in your handler, verify the signature:

\`\`\`go
if !verify(string(body), agoraSignature) {
    http.Error(w, "Invalid signature", http.StatusUnauthorized)
    return
}
\`\`\`

## Best practices [#best-practices]

* Keep the webhook secret on the server side only.
* Store raw payloads for troubleshooting when useful.
* Design webhook processing to be idempotent, because retries can happen.
* Return \`200 OK\` quickly and move heavier processing to async workers if needed.

## Related resources [#related-resources]

* [Monitor agent status, errors, and performance](monitor-agent-runtime)
* [Debug agent failures with runtime events](debug-agent-failures)
* [Retrieve conversation history after a session ends](retrieve-session-history)
* [Client-side events](event-notifications)
* [Notification event types](../../reference/event-types)
* [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join)
* [Retrieve agent history](/en/api-reference/api-ref/conversational-ai/history)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A webhook is a user-defined HTTPS callback that lets your backend receive notifications when Conversational AI events occur. Agora sends POST requests to your webhook endpoint so your system can react to agent lifecycle changes, history delivery, errors, and performance metrics in real time."
  }, {
    heading: undefined,
    content: "For the combined entry point that compares client toolkit and webhook delivery, see Get runtime events."
  }, {
    heading: undefined,
    content: "Use this page when you need durable backend records for monitoring, alerting, or analytics. If you need live UI state inside the app, use Client-side events."
  }, {
    heading: "understand-the-tech",
    content: "Using Agora Console, you subscribe to specific events for your project and configure the URL of the webhook endpoint that receives them. Agora sends event notifications to that endpoint whenever the subscribed events occur. Your server verifies the request signature, processes the JSON payload, and returns `200 OK` to confirm receipt."
  }, {
    heading: "common-uses",
    content: "Webhooks are typically used to:"
  }, {
    heading: "common-uses",
    content: "Track when an agent joins or leaves a channel"
  }, {
    heading: "common-uses",
    content: "Receive short-term memory history after an agent session ends"
  }, {
    heading: "common-uses",
    content: "Capture module-level errors for monitoring and debugging"
  }, {
    heading: "common-uses",
    content: "Collect performance metrics such as LLM and TTS latency"
  }, {
    heading: "prerequisites",
    content: "Before you begin, make sure you have:"
  }, {
    heading: "prerequisites",
    content: "An Agora account"
  }, {
    heading: "prerequisites",
    content: "An active Agora project with Conversational AI enabled"
  }, {
    heading: "prerequisites",
    content: "A public HTTPS endpoint that can receive webhook callbacks"
  }, {
    heading: "prerequisites",
    content: "Server-side access to store and validate the secret used for signature verification"
  }, {
    heading: "enable-notifications",
    content: "To enable Agora notifications for Conversational AI:"
  }, {
    heading: "enable-notifications",
    content: "Sign in to the Agora Console."
  }, {
    heading: "enable-notifications",
    content: "Open **Projects** and locate the target project."
  }, {
    heading: "enable-notifications",
    content: "Open the **Notifications** configuration area for the project."
  }, {
    heading: "enable-notifications",
    content: "Select the Conversational AI event types you want to subscribe to."
  }, {
    heading: "enable-notifications",
    content: "Enter the HTTPS callback URL of your receiving server."
  }, {
    heading: "enable-notifications",
    content: "Save the generated **Secret**. You need it for signature verification."
  }, {
    heading: "enable-notifications",
    content: "Run the console-side health check and confirm your server responds with `200 OK`."
  }, {
    heading: "recommended-webhook-endpoint-settings",
    content: "Use HTTPS only."
  }, {
    heading: "recommended-webhook-endpoint-settings",
    content: "Enable HTTP keep-alive if possible."
  }, {
    heading: "recommended-webhook-endpoint-settings",
    content: "Make sure your server responds within 10 seconds."
  }, {
    heading: "request-header",
    content: "The header of notification callbacks contains the following fields:"
  }, {
    heading: "request-header",
    content: "Field name"
  }, {
    heading: "request-header",
    content: "Value"
  }, {
    heading: "request-header",
    content: "`Content-Type`"
  }, {
    heading: "request-header",
    content: "`application/json`"
  }, {
    heading: "request-header",
    content: "`Agora-Signature`"
  }, {
    heading: "request-header",
    content: "Signature generated with the secret using HMAC/SHA1"
  }, {
    heading: "request-header",
    content: "`Agora-Signature-V2`"
  }, {
    heading: "request-header",
    content: "Signature generated with the secret using HMAC/SHA256"
  }, {
    heading: "request-body",
    content: "The request body of notification callbacks contains the following fields:"
  }, {
    heading: "request-body",
    content: "Field name"
  }, {
    heading: "request-body",
    content: "Type"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`noticeId`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "Notification ID that uniquely identifies this callback"
  }, {
    heading: "request-body",
    content: "`productId`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "Product ID of the notification source"
  }, {
    heading: "request-body",
    content: "`eventType`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "Type of event being notified"
  }, {
    heading: "request-body",
    content: "`notifyMs`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "Unix timestamp in milliseconds when Agora sends the callback"
  }, {
    heading: "request-body",
    content: "`payload`"
  }, {
    heading: "request-body",
    content: "JSON object"
  }, {
    heading: "request-body",
    content: "Event-specific data"
  }, {
    heading: "request-body",
    content: "The following example shows a sample request body:"
  }, {
    heading: "conversational-ai-event-types",
    content: "Agora can notify your server of the following Conversational AI events:"
  }, {
    heading: "conversational-ai-event-types",
    content: "eventType"
  }, {
    heading: "conversational-ai-event-types",
    content: "Description"
  }, {
    heading: "conversational-ai-event-types",
    content: "`101`"
  }, {
    heading: "conversational-ai-event-types",
    content: "Agent joined a channel"
  }, {
    heading: "conversational-ai-event-types",
    content: "`102`"
  }, {
    heading: "conversational-ai-event-types",
    content: "Agent left a channel"
  }, {
    heading: "conversational-ai-event-types",
    content: "`103`"
  }, {
    heading: "conversational-ai-event-types",
    content: "Dialogue history notification"
  }, {
    heading: "conversational-ai-event-types",
    content: "`110`"
  }, {
    heading: "conversational-ai-event-types",
    content: "Agent error"
  }, {
    heading: "conversational-ai-event-types",
    content: "`111`"
  }, {
    heading: "conversational-ai-event-types",
    content: "Agent performance metrics"
  }, {
    heading: "conversational-ai-event-types",
    content: "`201`"
  }, {
    heading: "conversational-ai-event-types",
    content: "Incoming call status change"
  }, {
    heading: "conversational-ai-event-types",
    content: "`202`"
  }, {
    heading: "conversational-ai-event-types",
    content: "Outgoing call status change"
  }, {
    heading: "conversational-ai-event-types",
    content: "For payload details, see Notification event types."
  }, {
    heading: "signature-verification",
    content: "To communicate securely between Agora and your webhook, Agora uses signatures for identity verification:"
  }, {
    heading: "signature-verification",
    content: "When you configure notifications in Agora Console, Agora generates a secret for your project."
  }, {
    heading: "signature-verification",
    content: "When sending a notification, Agora generates `Agora-Signature` and `Agora-Signature-V2` values using HMAC/SHA1 and HMAC/SHA256."
  }, {
    heading: "signature-verification",
    content: "When your server receives the callback, verify one of those signatures against the raw request body."
  }, {
    heading: "signature-verification",
    content: "The following Go example calculates a signature and compares it with the received value:"
  }, {
    heading: "signature-verification",
    content: "After reading the request body in your handler, verify the signature:"
  }, {
    heading: "best-practices",
    content: "Keep the webhook secret on the server side only."
  }, {
    heading: "best-practices",
    content: "Store raw payloads for troubleshooting when useful."
  }, {
    heading: "best-practices",
    content: "Design webhook processing to be idempotent, because retries can happen."
  }, {
    heading: "best-practices",
    content: "Return `200 OK` quickly and move heavier processing to async workers if needed."
  }, {
    heading: "related-resources",
    content: "Monitor agent status, errors, and performance"
  }, {
    heading: "related-resources",
    content: "Debug agent failures with runtime events"
  }, {
    heading: "related-resources",
    content: "Retrieve conversation history after a session ends"
  }, {
    heading: "related-resources",
    content: "Client-side events"
  }, {
    heading: "related-resources",
    content: "Notification event types"
  }, {
    heading: "related-resources",
    content: "Start a conversational AI agent"
  }, {
    heading: "related-resources",
    content: "Retrieve agent history"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "common-uses",
    content: "Common uses"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-notifications",
    content: "Enable notifications"
  }, {
    id: "recommended-webhook-endpoint-settings",
    content: "Recommended webhook endpoint settings"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "conversational-ai-event-types",
    content: "Conversational AI event types"
  }, {
    id: "signature-verification",
    content: "Signature verification"
  }, {
    id: "best-practices",
    content: "Best practices"
  }, {
    id: "related-resources",
    content: "Related resources"
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
  url: "#common-uses",
  title: _jsx(_Fragment, {
    children: "Common uses"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#enable-notifications",
  title: _jsx(_Fragment, {
    children: "Enable notifications"
  })
}, {
  depth: 3,
  url: "#recommended-webhook-endpoint-settings",
  title: _jsx(_Fragment, {
    children: "Recommended webhook endpoint settings"
  })
}, {
  depth: 2,
  url: "#request-header",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 2,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 2,
  url: "#conversational-ai-event-types",
  title: _jsx(_Fragment, {
    children: "Conversational AI event types"
  })
}, {
  depth: 2,
  url: "#signature-verification",
  title: _jsx(_Fragment, {
    children: "Signature verification"
  })
}, {
  depth: 2,
  url: "#best-practices",
  title: _jsx(_Fragment, {
    children: "Best practices"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "A webhook is a user-defined HTTPS callback that lets your backend receive notifications when Conversational AI events occur. Agora sends POST requests to your webhook endpoint so your system can react to agent lifecycle changes, history delivery, errors, and performance metrics in real time."
    }), `
`, _jsxs(_components.p, {
      children: ["For the combined entry point that compares client toolkit and webhook delivery, see ", _jsx(_components.a, {
        href: "get-runtime-events",
        children: "Get runtime events"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["Use this page when you need durable backend records for monitoring, alerting, or analytics. If you need live UI state inside the app, use ", _jsx(_components.a, {
        href: "event-notifications",
        children: "Client-side events"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["Using Agora Console, you subscribe to specific events for your project and configure the URL of the webhook endpoint that receives them. Agora sends event notifications to that endpoint whenever the subscribed events occur. Your server verifies the request signature, processes the JSON payload, and returns ", _jsx(_components.code, {
        children: "200 OK"
      }), " to confirm receipt."]
    }), `
`, _jsx(_components.h2, {
      id: "common-uses",
      children: "Common uses"
    }), `
`, _jsx(_components.p, {
      children: "Webhooks are typically used to:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Track when an agent joins or leaves a channel"
      }), `
`, _jsx(_components.li, {
        children: "Receive short-term memory history after an agent session ends"
      }), `
`, _jsx(_components.li, {
        children: "Capture module-level errors for monitoring and debugging"
      }), `
`, _jsx(_components.li, {
        children: "Collect performance metrics such as LLM and TTS latency"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before you begin, make sure you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "An Agora account"
      }), `
`, _jsx(_components.li, {
        children: "An active Agora project with Conversational AI enabled"
      }), `
`, _jsx(_components.li, {
        children: "A public HTTPS endpoint that can receive webhook callbacks"
      }), `
`, _jsx(_components.li, {
        children: "Server-side access to store and validate the secret used for signature verification"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-notifications",
      children: "Enable notifications"
    }), `
`, _jsx(_components.p, {
      children: "To enable Agora notifications for Conversational AI:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Sign in to the ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Open ", _jsx(_components.strong, {
          children: "Projects"
        }), " and locate the target project."]
      }), `
`, _jsxs(_components.li, {
        children: ["Open the ", _jsx(_components.strong, {
          children: "Notifications"
        }), " configuration area for the project."]
      }), `
`, _jsx(_components.li, {
        children: "Select the Conversational AI event types you want to subscribe to."
      }), `
`, _jsx(_components.li, {
        children: "Enter the HTTPS callback URL of your receiving server."
      }), `
`, _jsxs(_components.li, {
        children: ["Save the generated ", _jsx(_components.strong, {
          children: "Secret"
        }), ". You need it for signature verification."]
      }), `
`, _jsxs(_components.li, {
        children: ["Run the console-side health check and confirm your server responds with ", _jsx(_components.code, {
          children: "200 OK"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "recommended-webhook-endpoint-settings",
      children: "Recommended webhook endpoint settings"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Use HTTPS only."
      }), `
`, _jsx(_components.li, {
        children: "Enable HTTP keep-alive if possible."
      }), `
`, _jsx(_components.li, {
        children: "Make sure your server responds within 10 seconds."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "request-header",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "The header of notification callbacks contains the following fields:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field name"
          }), _jsx(_components.th, {
            children: "Value"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Content-Type"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "application/json"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Agora-Signature"
            })
          }), _jsx(_components.td, {
            children: "Signature generated with the secret using HMAC/SHA1"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Agora-Signature-V2"
            })
          }), _jsx(_components.td, {
            children: "Signature generated with the secret using HMAC/SHA256"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "The request body of notification callbacks contains the following fields:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field name"
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
              children: "noticeId"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Notification ID that uniquely identifies this callback"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "productId"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "Product ID of the notification source"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "eventType"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "Type of event being notified"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "notifyMs"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "Unix timestamp in milliseconds when Agora sends the callback"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            children: "JSON object"
          }), _jsx(_components.td, {
            children: "Event-specific data"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The following example shows a sample request body:"
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
              children: '  "noticeId"'
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
              children: '"2000001428:4330:107"'
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
              children: '  "productId"'
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
              children: '  "eventType"'
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
              children: "101"
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
              children: '  "notifyMs"'
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
      id: "conversational-ai-event-types",
      children: "Conversational AI event types"
    }), `
`, _jsx(_components.p, {
      children: "Agora can notify your server of the following Conversational AI events:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "eventType"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "101"
            })
          }), _jsx(_components.td, {
            children: "Agent joined a channel"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "102"
            })
          }), _jsx(_components.td, {
            children: "Agent left a channel"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "103"
            })
          }), _jsx(_components.td, {
            children: "Dialogue history notification"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "110"
            })
          }), _jsx(_components.td, {
            children: "Agent error"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "111"
            })
          }), _jsx(_components.td, {
            children: "Agent performance metrics"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "201"
            })
          }), _jsx(_components.td, {
            children: "Incoming call status change"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "202"
            })
          }), _jsx(_components.td, {
            children: "Outgoing call status change"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For payload details, see ", _jsx(_components.a, {
        href: "../../reference/event-types",
        children: "Notification event types"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "signature-verification",
      children: "Signature verification"
    }), `
`, _jsx(_components.p, {
      children: "To communicate securely between Agora and your webhook, Agora uses signatures for identity verification:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "When you configure notifications in Agora Console, Agora generates a secret for your project."
      }), `
`, _jsxs(_components.li, {
        children: ["When sending a notification, Agora generates ", _jsx(_components.code, {
          children: "Agora-Signature"
        }), " and ", _jsx(_components.code, {
          children: "Agora-Signature-V2"
        }), " values using HMAC/SHA1 and HMAC/SHA256."]
      }), `
`, _jsx(_components.li, {
        children: "When your server receives the callback, verify one of those signatures against the raw request body."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following Go example calculates a signature and compares it with the received value:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ("
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "crypto/hmac"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "crypto/sha1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "encoding/hex"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "net/http"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " secret"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "<replace-with-your-secret>"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
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
              children: " calcSignatureV1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "secret"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " string"
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
              children: "string"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    mac "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " hmac."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "New"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(sha1.New, []"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(secret))"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    mac."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Write"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "([]"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(payload))"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " hex."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "EncodeToString"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(mac."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Sum"
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
              children: "nil"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "))"
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
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
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
              children: " verify"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "requestBody"
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
              children: "signature"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " string"
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
              children: "bool"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    calculatedSignature "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " calcSignatureV1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(secret, requestBody)"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " calculatedSignature "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " signature"
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
`, _jsx(_components.p, {
      children: "After reading the request body in your handler, verify the signature:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "verify"
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
              children: "string"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(body), agoraSignature) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    http."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Error"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(w, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Invalid signature"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", http.StatusUnauthorized)"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    return"
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
      id: "best-practices",
      children: "Best practices"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Keep the webhook secret on the server side only."
      }), `
`, _jsx(_components.li, {
        children: "Store raw payloads for troubleshooting when useful."
      }), `
`, _jsx(_components.li, {
        children: "Design webhook processing to be idempotent, because retries can happen."
      }), `
`, _jsxs(_components.li, {
        children: ["Return ", _jsx(_components.code, {
          children: "200 OK"
        }), " quickly and move heavier processing to async workers if needed."]
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
          href: "event-notifications",
          children: "Client-side events"
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
          href: "/en/api-reference/api-ref/conversational-ai/join",
          children: "Start a conversational AI agent"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/conversational-ai/history",
          children: "Retrieve agent history"
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
