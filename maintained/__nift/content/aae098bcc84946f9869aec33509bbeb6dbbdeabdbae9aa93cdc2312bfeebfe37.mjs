import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Status codes and error messages",
  description: "HTTP status codes and error reasons for Conversational AI REST API requests."
};
export let _markdown = "\n\nUse HTTP status codes together with the `reason` and `detail` fields in error responses to troubleshoot failed Conversational AI REST API requests.\n\n## HTTP status codes [#http-status-codes]\n\n| Status code | Description                   | Suggested action                                                                                   |\n| ----------- | ----------------------------- | -------------------------------------------------------------------------------------------------- |\n| `200`       | OK                            | The request was successful.                                                                        |\n| `400`       | Invalid request parameters    | Check the `detail` field for specific information.                                                 |\n| `401`       | Authentication failed         | Check the `Authorization` header, credentials, or token and retry.                                 |\n| `403`       | Unauthorized access           | Resolve account or billing issues, or contact technical support to activate the service.           |\n| `404`       | Agent not found or has exited | Check whether the agent started successfully or has already stopped.                               |\n| `409`       | Agent conflict                | Use the task information returned by the server to continue, or retry with a different agent name. |\n| `422`       | Access limit exceeded         | Contact technical support to raise your quota.                                                     |\n| `429`       | Request rate limit exceeded   | Retry using a backoff strategy.                                                                    |\n| `500`       | Internal server error         | If the problem persists, contact technical support.                                                |\n| `502`       | Gateway error                 | Contact technical support.                                                                         |\n| `503`       | Agent startup failure         | Retry using a backoff strategy.                                                                    |\n| `504`       | Request timeout               | Retry using a backoff strategy.                                                                    |\n\n## Error reasons [#error-reasons]\n\n| Reason                       | Description                                                                               |\n| ---------------------------- | ----------------------------------------------------------------------------------------- |\n| `ServiceNotEnabled`          | The service is not enabled for the current project.                                       |\n| `AccountSuspended`           | The account has been suspended and the service is unavailable.                            |\n| `InternalError`              | Internal error on the server.                                                             |\n| `InvalidPermission`          | The service is not activated.                                                             |\n| `InvalidRequestBody`         | The request body is not valid JSON.                                                       |\n| `MissingRequiredField`       | A required field is missing from the request.                                             |\n| `InvalidFieldValue`          | A request field contains an invalid value.                                                |\n| `ResourceQuotaLimitExceeded` | Too many concurrent requests, exceeding the quota limit.                                  |\n| `ConcurrencyLimitExceeded`   | Too many concurrent requests, exceeding the quota limit.                                  |\n| `ServiceUnavailable`         | The service is temporarily unavailable.                                                   |\n| `ResourceAllocationFailed`   | The required resources cannot be allocated at this time.                                  |\n| `TaskConflict`               | An agent with the same name already exists, or a conflicting task is already running.     |\n| `TaskNotFound`               | The task was not started successfully, was aborted after starting, or has been destroyed. |\n| `TaskOperationTimeout`       | Internal error on the server.                                                             |\n| `NotImplemented`             | Internal error on the server.                                                             |\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use HTTP status codes together with the `reason` and `detail` fields in error responses to troubleshoot failed Conversational AI REST API requests."
  }, {
    heading: "http-status-codes",
    content: "Status code"
  }, {
    heading: "http-status-codes",
    content: "Description"
  }, {
    heading: "http-status-codes",
    content: "Suggested action"
  }, {
    heading: "http-status-codes",
    content: "`200`"
  }, {
    heading: "http-status-codes",
    content: "OK"
  }, {
    heading: "http-status-codes",
    content: "The request was successful."
  }, {
    heading: "http-status-codes",
    content: "`400`"
  }, {
    heading: "http-status-codes",
    content: "Invalid request parameters"
  }, {
    heading: "http-status-codes",
    content: "Check the `detail` field for specific information."
  }, {
    heading: "http-status-codes",
    content: "`401`"
  }, {
    heading: "http-status-codes",
    content: "Authentication failed"
  }, {
    heading: "http-status-codes",
    content: "Check the `Authorization` header, credentials, or token and retry."
  }, {
    heading: "http-status-codes",
    content: "`403`"
  }, {
    heading: "http-status-codes",
    content: "Unauthorized access"
  }, {
    heading: "http-status-codes",
    content: "Resolve account or billing issues, or contact technical support to activate the service."
  }, {
    heading: "http-status-codes",
    content: "`404`"
  }, {
    heading: "http-status-codes",
    content: "Agent not found or has exited"
  }, {
    heading: "http-status-codes",
    content: "Check whether the agent started successfully or has already stopped."
  }, {
    heading: "http-status-codes",
    content: "`409`"
  }, {
    heading: "http-status-codes",
    content: "Agent conflict"
  }, {
    heading: "http-status-codes",
    content: "Use the task information returned by the server to continue, or retry with a different agent name."
  }, {
    heading: "http-status-codes",
    content: "`422`"
  }, {
    heading: "http-status-codes",
    content: "Access limit exceeded"
  }, {
    heading: "http-status-codes",
    content: "Contact technical support to raise your quota."
  }, {
    heading: "http-status-codes",
    content: "`429`"
  }, {
    heading: "http-status-codes",
    content: "Request rate limit exceeded"
  }, {
    heading: "http-status-codes",
    content: "Retry using a backoff strategy."
  }, {
    heading: "http-status-codes",
    content: "`500`"
  }, {
    heading: "http-status-codes",
    content: "Internal server error"
  }, {
    heading: "http-status-codes",
    content: "If the problem persists, contact technical support."
  }, {
    heading: "http-status-codes",
    content: "`502`"
  }, {
    heading: "http-status-codes",
    content: "Gateway error"
  }, {
    heading: "http-status-codes",
    content: "Contact technical support."
  }, {
    heading: "http-status-codes",
    content: "`503`"
  }, {
    heading: "http-status-codes",
    content: "Agent startup failure"
  }, {
    heading: "http-status-codes",
    content: "Retry using a backoff strategy."
  }, {
    heading: "http-status-codes",
    content: "`504`"
  }, {
    heading: "http-status-codes",
    content: "Request timeout"
  }, {
    heading: "http-status-codes",
    content: "Retry using a backoff strategy."
  }, {
    heading: "error-reasons",
    content: "Reason"
  }, {
    heading: "error-reasons",
    content: "Description"
  }, {
    heading: "error-reasons",
    content: "`ServiceNotEnabled`"
  }, {
    heading: "error-reasons",
    content: "The service is not enabled for the current project."
  }, {
    heading: "error-reasons",
    content: "`AccountSuspended`"
  }, {
    heading: "error-reasons",
    content: "The account has been suspended and the service is unavailable."
  }, {
    heading: "error-reasons",
    content: "`InternalError`"
  }, {
    heading: "error-reasons",
    content: "Internal error on the server."
  }, {
    heading: "error-reasons",
    content: "`InvalidPermission`"
  }, {
    heading: "error-reasons",
    content: "The service is not activated."
  }, {
    heading: "error-reasons",
    content: "`InvalidRequestBody`"
  }, {
    heading: "error-reasons",
    content: "The request body is not valid JSON."
  }, {
    heading: "error-reasons",
    content: "`MissingRequiredField`"
  }, {
    heading: "error-reasons",
    content: "A required field is missing from the request."
  }, {
    heading: "error-reasons",
    content: "`InvalidFieldValue`"
  }, {
    heading: "error-reasons",
    content: "A request field contains an invalid value."
  }, {
    heading: "error-reasons",
    content: "`ResourceQuotaLimitExceeded`"
  }, {
    heading: "error-reasons",
    content: "Too many concurrent requests, exceeding the quota limit."
  }, {
    heading: "error-reasons",
    content: "`ConcurrencyLimitExceeded`"
  }, {
    heading: "error-reasons",
    content: "Too many concurrent requests, exceeding the quota limit."
  }, {
    heading: "error-reasons",
    content: "`ServiceUnavailable`"
  }, {
    heading: "error-reasons",
    content: "The service is temporarily unavailable."
  }, {
    heading: "error-reasons",
    content: "`ResourceAllocationFailed`"
  }, {
    heading: "error-reasons",
    content: "The required resources cannot be allocated at this time."
  }, {
    heading: "error-reasons",
    content: "`TaskConflict`"
  }, {
    heading: "error-reasons",
    content: "An agent with the same name already exists, or a conflicting task is already running."
  }, {
    heading: "error-reasons",
    content: "`TaskNotFound`"
  }, {
    heading: "error-reasons",
    content: "The task was not started successfully, was aborted after starting, or has been destroyed."
  }, {
    heading: "error-reasons",
    content: "`TaskOperationTimeout`"
  }, {
    heading: "error-reasons",
    content: "Internal error on the server."
  }, {
    heading: "error-reasons",
    content: "`NotImplemented`"
  }, {
    heading: "error-reasons",
    content: "Internal error on the server."
  }],
  headings: [{
    id: "http-status-codes",
    content: "HTTP status codes"
  }, {
    id: "error-reasons",
    content: "Error reasons"
  }]
};
export let toc = [{
  depth: 2,
  url: "#http-status-codes",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
  })
}, {
  depth: 2,
  url: "#error-reasons",
  title: _jsx(_Fragment, {
    children: "Error reasons"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Use HTTP status codes together with the ", _jsx(_components.code, {
        children: "reason"
      }), " and ", _jsx(_components.code, {
        children: "detail"
      }), " fields in error responses to troubleshoot failed Conversational AI REST API requests."]
    }), `
`, _jsx(_components.h2, {
      id: "http-status-codes",
      children: "HTTP status codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status code"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Suggested action"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "200"
            })
          }), _jsx(_components.td, {
            children: "OK"
          }), _jsx(_components.td, {
            children: "The request was successful."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            children: "Invalid request parameters"
          }), _jsxs(_components.td, {
            children: ["Check the ", _jsx(_components.code, {
              children: "detail"
            }), " field for specific information."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            children: "Authentication failed"
          }), _jsxs(_components.td, {
            children: ["Check the ", _jsx(_components.code, {
              children: "Authorization"
            }), " header, credentials, or token and retry."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            children: "Unauthorized access"
          }), _jsx(_components.td, {
            children: "Resolve account or billing issues, or contact technical support to activate the service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            children: "Agent not found or has exited"
          }), _jsx(_components.td, {
            children: "Check whether the agent started successfully or has already stopped."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "409"
            })
          }), _jsx(_components.td, {
            children: "Agent conflict"
          }), _jsx(_components.td, {
            children: "Use the task information returned by the server to continue, or retry with a different agent name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "422"
            })
          }), _jsx(_components.td, {
            children: "Access limit exceeded"
          }), _jsx(_components.td, {
            children: "Contact technical support to raise your quota."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "429"
            })
          }), _jsx(_components.td, {
            children: "Request rate limit exceeded"
          }), _jsx(_components.td, {
            children: "Retry using a backoff strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500"
            })
          }), _jsx(_components.td, {
            children: "Internal server error"
          }), _jsx(_components.td, {
            children: "If the problem persists, contact technical support."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "502"
            })
          }), _jsx(_components.td, {
            children: "Gateway error"
          }), _jsx(_components.td, {
            children: "Contact technical support."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "503"
            })
          }), _jsx(_components.td, {
            children: "Agent startup failure"
          }), _jsx(_components.td, {
            children: "Retry using a backoff strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "504"
            })
          }), _jsx(_components.td, {
            children: "Request timeout"
          }), _jsx(_components.td, {
            children: "Retry using a backoff strategy."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "error-reasons",
      children: "Error reasons"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Reason"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ServiceNotEnabled"
            })
          }), _jsx(_components.td, {
            children: "The service is not enabled for the current project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AccountSuspended"
            })
          }), _jsx(_components.td, {
            children: "The account has been suspended and the service is unavailable."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "InternalError"
            })
          }), _jsx(_components.td, {
            children: "Internal error on the server."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "InvalidPermission"
            })
          }), _jsx(_components.td, {
            children: "The service is not activated."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "InvalidRequestBody"
            })
          }), _jsx(_components.td, {
            children: "The request body is not valid JSON."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MissingRequiredField"
            })
          }), _jsx(_components.td, {
            children: "A required field is missing from the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "InvalidFieldValue"
            })
          }), _jsx(_components.td, {
            children: "A request field contains an invalid value."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ResourceQuotaLimitExceeded"
            })
          }), _jsx(_components.td, {
            children: "Too many concurrent requests, exceeding the quota limit."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ConcurrencyLimitExceeded"
            })
          }), _jsx(_components.td, {
            children: "Too many concurrent requests, exceeding the quota limit."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ServiceUnavailable"
            })
          }), _jsx(_components.td, {
            children: "The service is temporarily unavailable."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ResourceAllocationFailed"
            })
          }), _jsx(_components.td, {
            children: "The required resources cannot be allocated at this time."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TaskConflict"
            })
          }), _jsx(_components.td, {
            children: "An agent with the same name already exists, or a conflicting task is already running."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TaskNotFound"
            })
          }), _jsx(_components.td, {
            children: "The task was not started successfully, was aborted after starting, or has been destroyed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TaskOperationTimeout"
            })
          }), _jsx(_components.td, {
            children: "Internal error on the server."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "NotImplemented"
            })
          }), _jsx(_components.td, {
            children: "Internal error on the server."
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
