import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Check service status",
  description: "Check cloud transcoder startup and running status."
};
export let _markdown = '\n\nThis page explains how to verify that your cloud transcoding service starts successfully and continues running properly.\n\n## Check startup status [#check-startup-status]\n\nFollow these steps to verify that the transcoding service has started successfully:\n\n### Call `Create` immediately after you `Acquire` a `builderToken` [#call-create-immediately-after-you-acquire-a-buildertoken]\n\nEnsure that you send a [`Create`](/en/api-reference/cloud-transcoding/restful) request within 2 seconds of each [`Acquire`](/en/api-reference/cloud-transcoding/restful) request. This ensures validity of the `builderToken`.\n\n<CalloutContainer type="info">\n  <CalloutDescription>\n    If you acquire `builderToken`s in bulk and send `Create` requests in batches, the requests may fail.\n  </CalloutDescription>\n</CalloutContainer>\n\n### Check the `Create` request response [#check-the-create-request-response]\n\nA successful `Create` request returns an HTTP status code of `200`. If the status code is not `200`, handle it based on the returned code:\n\n* **`206` (Partial Success):** Request timed out. Use a backoff strategy before retrying:\n\n  * Wait 3 seconds, then retry\n  * Wait 6 seconds, then retry again\n  * Wait 9 seconds, then retry a third time\n    If all retries fail, generate a new UID, call `Acquire` again to get a new `builderToken`, and retry `Create`.\n\n* **`409` (Conflict):** The transcoding task has already started. No retry is needed.\n\n* **`40x` (except `409`):** Parameter error. Check and correct the request parameters.\n\n* **`50x` (Server Error):** Temporary server issue. Retry using the backoff strategy above. If all retries fail, change the UID and re-initiate the process.\n\n* **Error code `65`:** Retry `Create` with the same parameters. Use a backoff strategy:\n\n  * Retry after 3 seconds\n  * Retry again after 6 seconds\n\n### Set the appropriate `idleTimeout` [#set-the-appropriate-idletimeout]\n\nThe `idleTimeout` parameter in the `Create` request defaults to 300 seconds. This defines how long the transcoder stays active after all hosts leave the channel.\n\nIf hosts may temporarily leave and rejoin, set a larger `idleTimeout` to prevent the transcoder from shutting down too early. This ensures stable operation and avoids frequent restarts.\n\n### Query the startup status [#query-the-startup-status]\n\nAfter receiving a `taskId` from a successful `Create` request, wait 5 seconds and then call the [`Query`](/en/api-reference/cloud-transcoding/restful) method using a backoff strategy. Make sure the backoff interval is shorter than the `idleTimeout`.\n\n* If the Query response shows status as `"STARTED"` or `"IN_PROGRESS"`, the transcoder has successfully started.\n* If the `status` is still not `"STARTED"` or `"IN_PROGRESS"` 90 seconds after receiving the `taskId`, consider the startup failed due to timeout.\n\n<CalloutContainer type="warning">\n  <CalloutDescription>\n    When retrying:\n\n    * UIDs in the same channel must be unique. Prepare a backup UID for the transcoder in case you need to restart the task.\n    * Alternate between the primary and backup UIDs as needed.\n  </CalloutDescription>\n</CalloutContainer>\n\n## Check service running status [#check-service-running-status]\n\nTo confirm that the transcoder is still running, periodically call the `Query` method. If you need high reliability, Agora recommends calling `Query` every 2 minutes and taking appropriate action based on the HTTP response:\n\n* **`40x` (Parameter Error):** Check and fix the request parameters.\n\n* **`404` (Not Found):** If parameters are correct, this means the transcoder never started or exited prematurely. Retry `Query` using a backoff strategy (For example, 5s, 10s, 15s intervals) for confirmation.\n\n* **`50x` (Server Error):** Indicates a temporary error, not necessarily that the transcoder has exited. Retry using increasing intervals (For example, 5s, 10s, 15s, 30s).\n\nFor further information, see [Status values](#status-values).\n\n## Reference [#reference]\n\nThis section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.\n\n### Status values [#status-values]\n\nWhen querying the service status through the Go `Query` method, refer to the `services.cloudTranscoder.status` field in the response body.\n\n| Service Status              | Description                             |\n| --------------------------- | --------------------------------------- |\n| `"serviceIdle"`             | Service has not started                 |\n| `"serviceReady"`            | Service is ready to start               |\n| `"serviceStarted"`          | Service has started                     |\n| `"serviceInProgress"`       | Service is currently running            |\n| `"serviceCompleted"`        | Service stopped, all tasks completed    |\n| `"servicePartialCompleted"` | Service stopped with partial completion |\n| `"serviceValidationFailed"` | Parameter validation failed             |\n| `"serviceAbnormal"`         | Service exited unexpectedly             |\n| `"serviceUnknown"`          | Service status is unknown               |\n';
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains how to verify that your cloud transcoding service starts successfully and continues running properly."
  }, {
    heading: "check-startup-status",
    content: "Follow these steps to verify that the transcoding service has started successfully:"
  }, {
    heading: "call-create-immediately-after-you-acquire-a-buildertoken",
    content: "Ensure that you send a `Create` request within 2 seconds of each `Acquire` request. This ensures validity of the `builderToken`."
  }, {
    heading: "call-create-immediately-after-you-acquire-a-buildertoken",
    content: "If you acquire `builderToken`s in bulk and send `Create` requests in batches, the requests may fail."
  }, {
    heading: "check-the-create-request-response",
    content: "A successful `Create` request returns an HTTP status code of `200`. If the status code is not `200`, handle it based on the returned code:"
  }, {
    heading: "check-the-create-request-response",
    content: "**`206` (Partial Success):** Request timed out. Use a backoff strategy before retrying:"
  }, {
    heading: "check-the-create-request-response",
    content: "Wait 3 seconds, then retry"
  }, {
    heading: "check-the-create-request-response",
    content: "Wait 6 seconds, then retry again"
  }, {
    heading: "check-the-create-request-response",
    content: "Wait 9 seconds, then retry a third time\nIf all retries fail, generate a new UID, call `Acquire` again to get a new `builderToken`, and retry `Create`."
  }, {
    heading: "check-the-create-request-response",
    content: "**`409` (Conflict):** The transcoding task has already started. No retry is needed."
  }, {
    heading: "check-the-create-request-response",
    content: "**`40x` (except `409`):** Parameter error. Check and correct the request parameters."
  }, {
    heading: "check-the-create-request-response",
    content: "**`50x` (Server Error):** Temporary server issue. Retry using the backoff strategy above. If all retries fail, change the UID and re-initiate the process."
  }, {
    heading: "check-the-create-request-response",
    content: "**Error code `65`:** Retry `Create` with the same parameters. Use a backoff strategy:"
  }, {
    heading: "check-the-create-request-response",
    content: "Retry after 3 seconds"
  }, {
    heading: "check-the-create-request-response",
    content: "Retry again after 6 seconds"
  }, {
    heading: "set-the-appropriate-idletimeout",
    content: "The `idleTimeout` parameter in the `Create` request defaults to 300 seconds. This defines how long the transcoder stays active after all hosts leave the channel."
  }, {
    heading: "set-the-appropriate-idletimeout",
    content: "If hosts may temporarily leave and rejoin, set a larger `idleTimeout` to prevent the transcoder from shutting down too early. This ensures stable operation and avoids frequent restarts."
  }, {
    heading: "query-the-startup-status",
    content: "After receiving a `taskId` from a successful `Create` request, wait 5 seconds and then call the `Query` method using a backoff strategy. Make sure the backoff interval is shorter than the `idleTimeout`."
  }, {
    heading: "query-the-startup-status",
    content: 'If the Query response shows status as `"STARTED"` or `"IN_PROGRESS"`, the transcoder has successfully started.'
  }, {
    heading: "query-the-startup-status",
    content: 'If the `status` is still not `"STARTED"` or `"IN_PROGRESS"` 90 seconds after receiving the `taskId`, consider the startup failed due to timeout.'
  }, {
    heading: "query-the-startup-status",
    content: "When retrying:"
  }, {
    heading: "query-the-startup-status",
    content: "UIDs in the same channel must be unique. Prepare a backup UID for the transcoder in case you need to restart the task."
  }, {
    heading: "query-the-startup-status",
    content: "Alternate between the primary and backup UIDs as needed."
  }, {
    heading: "check-service-running-status",
    content: "To confirm that the transcoder is still running, periodically call the `Query` method. If you need high reliability, Agora recommends calling `Query` every 2 minutes and taking appropriate action based on the HTTP response:"
  }, {
    heading: "check-service-running-status",
    content: "**`40x` (Parameter Error):** Check and fix the request parameters."
  }, {
    heading: "check-service-running-status",
    content: "**`404` (Not Found):** If parameters are correct, this means the transcoder never started or exited prematurely. Retry `Query` using a backoff strategy (For example, 5s, 10s, 15s intervals) for confirmation."
  }, {
    heading: "check-service-running-status",
    content: "**`50x` (Server Error):** Indicates a temporary error, not necessarily that the transcoder has exited. Retry using increasing intervals (For example, 5s, 10s, 15s, 30s)."
  }, {
    heading: "check-service-running-status",
    content: "For further information, see Status values."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "status-values",
    content: "When querying the service status through the Go `Query` method, refer to the `services.cloudTranscoder.status` field in the response body."
  }, {
    heading: "status-values",
    content: "Service Status"
  }, {
    heading: "status-values",
    content: "Description"
  }, {
    heading: "status-values",
    content: '`"serviceIdle"`'
  }, {
    heading: "status-values",
    content: "Service has not started"
  }, {
    heading: "status-values",
    content: '`"serviceReady"`'
  }, {
    heading: "status-values",
    content: "Service is ready to start"
  }, {
    heading: "status-values",
    content: '`"serviceStarted"`'
  }, {
    heading: "status-values",
    content: "Service has started"
  }, {
    heading: "status-values",
    content: '`"serviceInProgress"`'
  }, {
    heading: "status-values",
    content: "Service is currently running"
  }, {
    heading: "status-values",
    content: '`"serviceCompleted"`'
  }, {
    heading: "status-values",
    content: "Service stopped, all tasks completed"
  }, {
    heading: "status-values",
    content: '`"servicePartialCompleted"`'
  }, {
    heading: "status-values",
    content: "Service stopped with partial completion"
  }, {
    heading: "status-values",
    content: '`"serviceValidationFailed"`'
  }, {
    heading: "status-values",
    content: "Parameter validation failed"
  }, {
    heading: "status-values",
    content: '`"serviceAbnormal"`'
  }, {
    heading: "status-values",
    content: "Service exited unexpectedly"
  }, {
    heading: "status-values",
    content: '`"serviceUnknown"`'
  }, {
    heading: "status-values",
    content: "Service status is unknown"
  }],
  headings: [{
    id: "check-startup-status",
    content: "Check startup status"
  }, {
    id: "call-create-immediately-after-you-acquire-a-buildertoken",
    content: "Call `Create` immediately after you `Acquire` a `builderToken`"
  }, {
    id: "check-the-create-request-response",
    content: "Check the `Create` request response"
  }, {
    id: "set-the-appropriate-idletimeout",
    content: "Set the appropriate `idleTimeout`"
  }, {
    id: "query-the-startup-status",
    content: "Query the startup status"
  }, {
    id: "check-service-running-status",
    content: "Check service running status"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "status-values",
    content: "Status values"
  }]
};
export let toc = [{
  depth: 2,
  url: "#check-startup-status",
  title: _jsx(_Fragment, {
    children: "Check startup status"
  })
}, {
  depth: 3,
  url: "#call-create-immediately-after-you-acquire-a-buildertoken",
  title: _jsxs(_Fragment, {
    children: ["Call ", _jsx("code", {
      children: "Create"
    }), " immediately after you ", _jsx("code", {
      children: "Acquire"
    }), " a ", _jsx("code", {
      children: "builderToken"
    })]
  })
}, {
  depth: 3,
  url: "#check-the-create-request-response",
  title: _jsxs(_Fragment, {
    children: ["Check the ", _jsx("code", {
      children: "Create"
    }), " request response"]
  })
}, {
  depth: 3,
  url: "#set-the-appropriate-idletimeout",
  title: _jsxs(_Fragment, {
    children: ["Set the appropriate ", _jsx("code", {
      children: "idleTimeout"
    })]
  })
}, {
  depth: 3,
  url: "#query-the-startup-status",
  title: _jsx(_Fragment, {
    children: "Query the startup status"
  })
}, {
  depth: 2,
  url: "#check-service-running-status",
  title: _jsx(_Fragment, {
    children: "Check service running status"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#status-values",
  title: _jsx(_Fragment, {
    children: "Status values"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
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
      children: "This page explains how to verify that your cloud transcoding service starts successfully and continues running properly."
    }), `
`, _jsx(_components.h2, {
      id: "check-startup-status",
      children: "Check startup status"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to verify that the transcoding service has started successfully:"
    }), `
`, _jsxs(_components.h3, {
      id: "call-create-immediately-after-you-acquire-a-buildertoken",
      children: ["Call ", _jsx(_components.code, {
        children: "Create"
      }), " immediately after you ", _jsx(_components.code, {
        children: "Acquire"
      }), " a ", _jsx(_components.code, {
        children: "builderToken"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure that you send a ", _jsx(_components.a, {
        href: "/en/api-reference/cloud-transcoding/restful",
        children: _jsx(_components.code, {
          children: "Create"
        })
      }), " request within 2 seconds of each ", _jsx(_components.a, {
        href: "/en/api-reference/cloud-transcoding/restful",
        children: _jsx(_components.code, {
          children: "Acquire"
        })
      }), " request. This ensures validity of the ", _jsx(_components.code, {
        children: "builderToken"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you acquire ", _jsx(_components.code, {
            children: "builderToken"
          }), "s in bulk and send ", _jsx(_components.code, {
            children: "Create"
          }), " requests in batches, the requests may fail."]
        })
      })
    }), `
`, _jsxs(_components.h3, {
      id: "check-the-create-request-response",
      children: ["Check the ", _jsx(_components.code, {
        children: "Create"
      }), " request response"]
    }), `
`, _jsxs(_components.p, {
      children: ["A successful ", _jsx(_components.code, {
        children: "Create"
      }), " request returns an HTTP status code of ", _jsx(_components.code, {
        children: "200"
      }), ". If the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", handle it based on the returned code:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "206"
            }), " (Partial Success):"]
          }), " Request timed out. Use a backoff strategy before retrying:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Wait 3 seconds, then retry"
          }), `
`, _jsx(_components.li, {
            children: "Wait 6 seconds, then retry again"
          }), `
`, _jsxs(_components.li, {
            children: [`Wait 9 seconds, then retry a third time
If all retries fail, generate a new UID, call `, _jsx(_components.code, {
              children: "Acquire"
            }), " again to get a new ", _jsx(_components.code, {
              children: "builderToken"
            }), ", and retry ", _jsx(_components.code, {
              children: "Create"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "409"
            }), " (Conflict):"]
          }), " The transcoding task has already started. No retry is needed."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "40x"
            }), " (except ", _jsx(_components.code, {
              children: "409"
            }), "):"]
          }), " Parameter error. Check and correct the request parameters."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "50x"
            }), " (Server Error):"]
          }), " Temporary server issue. Retry using the backoff strategy above. If all retries fail, change the UID and re-initiate the process."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Error code ", _jsx(_components.code, {
              children: "65"
            }), ":"]
          }), " Retry ", _jsx(_components.code, {
            children: "Create"
          }), " with the same parameters. Use a backoff strategy:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Retry after 3 seconds"
          }), `
`, _jsx(_components.li, {
            children: "Retry again after 6 seconds"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.h3, {
      id: "set-the-appropriate-idletimeout",
      children: ["Set the appropriate ", _jsx(_components.code, {
        children: "idleTimeout"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "idleTimeout"
      }), " parameter in the ", _jsx(_components.code, {
        children: "Create"
      }), " request defaults to 300 seconds. This defines how long the transcoder stays active after all hosts leave the channel."]
    }), `
`, _jsxs(_components.p, {
      children: ["If hosts may temporarily leave and rejoin, set a larger ", _jsx(_components.code, {
        children: "idleTimeout"
      }), " to prevent the transcoder from shutting down too early. This ensures stable operation and avoids frequent restarts."]
    }), `
`, _jsx(_components.h3, {
      id: "query-the-startup-status",
      children: "Query the startup status"
    }), `
`, _jsxs(_components.p, {
      children: ["After receiving a ", _jsx(_components.code, {
        children: "taskId"
      }), " from a successful ", _jsx(_components.code, {
        children: "Create"
      }), " request, wait 5 seconds and then call the ", _jsx(_components.a, {
        href: "/en/api-reference/cloud-transcoding/restful",
        children: _jsx(_components.code, {
          children: "Query"
        })
      }), " method using a backoff strategy. Make sure the backoff interval is shorter than the ", _jsx(_components.code, {
        children: "idleTimeout"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the Query response shows status as ", _jsx(_components.code, {
          children: '"STARTED"'
        }), " or ", _jsx(_components.code, {
          children: '"IN_PROGRESS"'
        }), ", the transcoder has successfully started."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the ", _jsx(_components.code, {
          children: "status"
        }), " is still not ", _jsx(_components.code, {
          children: '"STARTED"'
        }), " or ", _jsx(_components.code, {
          children: '"IN_PROGRESS"'
        }), " 90 seconds after receiving the ", _jsx(_components.code, {
          children: "taskId"
        }), ", consider the startup failed due to timeout."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "When retrying:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "UIDs in the same channel must be unique. Prepare a backup UID for the transcoder in case you need to restart the task."
          }), `
`, _jsx(_components.li, {
            children: "Alternate between the primary and backup UIDs as needed."
          }), `
`]
        })]
      })
    }), `
`, _jsx(_components.h2, {
      id: "check-service-running-status",
      children: "Check service running status"
    }), `
`, _jsxs(_components.p, {
      children: ["To confirm that the transcoder is still running, periodically call the ", _jsx(_components.code, {
        children: "Query"
      }), " method. If you need high reliability, Agora recommends calling ", _jsx(_components.code, {
        children: "Query"
      }), " every 2 minutes and taking appropriate action based on the HTTP response:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "40x"
            }), " (Parameter Error):"]
          }), " Check and fix the request parameters."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "404"
            }), " (Not Found):"]
          }), " If parameters are correct, this means the transcoder never started or exited prematurely. Retry ", _jsx(_components.code, {
            children: "Query"
          }), " using a backoff strategy (For example, 5s, 10s, 15s intervals) for confirmation."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "50x"
            }), " (Server Error):"]
          }), " Indicates a temporary error, not necessarily that the transcoder has exited. Retry using increasing intervals (For example, 5s, 10s, 15s, 30s)."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For further information, see ", _jsx(_components.a, {
        href: "#status-values",
        children: "Status values"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsx(_components.h3, {
      id: "status-values",
      children: "Status values"
    }), `
`, _jsxs(_components.p, {
      children: ["When querying the service status through the Go ", _jsx(_components.code, {
        children: "Query"
      }), " method, refer to the ", _jsx(_components.code, {
        children: "services.cloudTranscoder.status"
      }), " field in the response body."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service Status"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"serviceIdle"'
            })
          }), _jsx(_components.td, {
            children: "Service has not started"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"serviceReady"'
            })
          }), _jsx(_components.td, {
            children: "Service is ready to start"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"serviceStarted"'
            })
          }), _jsx(_components.td, {
            children: "Service has started"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"serviceInProgress"'
            })
          }), _jsx(_components.td, {
            children: "Service is currently running"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"serviceCompleted"'
            })
          }), _jsx(_components.td, {
            children: "Service stopped, all tasks completed"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"servicePartialCompleted"'
            })
          }), _jsx(_components.td, {
            children: "Service stopped with partial completion"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"serviceValidationFailed"'
            })
          }), _jsx(_components.td, {
            children: "Parameter validation failed"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"serviceAbnormal"'
            })
          }), _jsx(_components.td, {
            children: "Service exited unexpectedly"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"serviceUnknown"'
            })
          }), _jsx(_components.td, {
            children: "Service status is unknown"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
