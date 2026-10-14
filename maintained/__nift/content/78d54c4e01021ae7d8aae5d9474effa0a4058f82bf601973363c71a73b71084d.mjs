import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Error codes",
  description: "Error codes returned by the Signaling SDK and RESTful APIs."
};
export let _markdown = `

This page lists the error codes returned by the Signaling SDK and RESTful APIs. Use these codes to help debug issues when developing applications with Agora Signaling.

## RESTful API error codes [#restful-api-error-codes]

When you call the Signaling RESTful API, each response includes the following fields:

* \`errorCode\`: The numeric status code returned by the server.
* \`reason\`: A description of the error associated with the code.

This section describes the meaning of each error code, provides possible causes, and offers suggested solutions.

| Error code | Reason                              | Details                                                                 | Suggested action                                                                                                                                            |
| ---------- | ----------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`200\`      | Success                             | The request was successful, and messages from history were returned.    | No action required.                                                                                                                                         |
| \`400\`      | Invalid request                     | The request contains invalid parameters.                                | Verify and correct the parameters.                                                                                                                          |
| \`401\`      | User authentication error           | The request contains invalid authentication parameters.                 | Verify and use valid parameters.                                                                                                                            |
| \`403\`      | Unauthorized or feature not enabled | The App ID is invalid or does not have access to the required features. | - Verify that the App ID is correct.<br/>- Confirm that the Signaling service is enabled.<br/>- Confirm that the history feature is enabled for the App ID. |
| \`408\`      | No response from the server         | The request timed out.                                                  | Try again later.                                                                                                                                            |
| \`415\`      | Unsupported media type              | The request body format is not supported. Only JSON is accepted.        | Ensure the request body is formatted as JSON.                                                                                                               |
| \`429\`      | Rate limit exceeded                 | The number of requests exceeds the allowed limit.                       | The quota for the RESTful API is 60 requests per second. Reduce the request rate.                                                                           |
| \`435\`      | Invalid payload                     | The message payload contains illegal or unsupported content.            | Modify the payload and resend the request.                                                                                                                  |
| \`500\`      | Internal server error               | An unexpected error occurred on the server.                             | Retry the request.                                                                                                                                          |
| \`503\`      | Timeout                             | The request took too long to process.                                   | Retry the request.                                                                                                                                          |

## SDK error codes [#sdk-error-codes]

When calling Signaling SDK APIs, failures are typically returned through the SDK callback result or error object for the current platform. The payload usually includes:

* \`errorCode\`: The SDK error code for the current operation.
* \`reason\`: A description of the error.
* \`operation\`: The operation that triggered the error, when available.

For currently maintained SDK-side error handling details, see:

* [Troubleshooting](./troubleshooting) for logging setup and the SDK error payload structure available in this portal.
* [Signaling API reference](/en/api-reference/api-ref/signaling) for platform-specific SDK enumerations, callback contracts, and error-related data structures.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page lists the error codes returned by the Signaling SDK and RESTful APIs. Use these codes to help debug issues when developing applications with Agora Signaling."
  }, {
    heading: "restful-api-error-codes",
    content: "When you call the Signaling RESTful API, each response includes the following fields:"
  }, {
    heading: "restful-api-error-codes",
    content: "`errorCode`: The numeric status code returned by the server."
  }, {
    heading: "restful-api-error-codes",
    content: "`reason`: A description of the error associated with the code."
  }, {
    heading: "restful-api-error-codes",
    content: "This section describes the meaning of each error code, provides possible causes, and offers suggested solutions."
  }, {
    heading: "restful-api-error-codes",
    content: "Error code"
  }, {
    heading: "restful-api-error-codes",
    content: "Reason"
  }, {
    heading: "restful-api-error-codes",
    content: "Details"
  }, {
    heading: "restful-api-error-codes",
    content: "Suggested action"
  }, {
    heading: "restful-api-error-codes",
    content: "`200`"
  }, {
    heading: "restful-api-error-codes",
    content: "Success"
  }, {
    heading: "restful-api-error-codes",
    content: "The request was successful, and messages from history were returned."
  }, {
    heading: "restful-api-error-codes",
    content: "No action required."
  }, {
    heading: "restful-api-error-codes",
    content: "`400`"
  }, {
    heading: "restful-api-error-codes",
    content: "Invalid request"
  }, {
    heading: "restful-api-error-codes",
    content: "The request contains invalid parameters."
  }, {
    heading: "restful-api-error-codes",
    content: "Verify and correct the parameters."
  }, {
    heading: "restful-api-error-codes",
    content: "`401`"
  }, {
    heading: "restful-api-error-codes",
    content: "User authentication error"
  }, {
    heading: "restful-api-error-codes",
    content: "The request contains invalid authentication parameters."
  }, {
    heading: "restful-api-error-codes",
    content: "Verify and use valid parameters."
  }, {
    heading: "restful-api-error-codes",
    content: "`403`"
  }, {
    heading: "restful-api-error-codes",
    content: "Unauthorized or feature not enabled"
  }, {
    heading: "restful-api-error-codes",
    content: "The App ID is invalid or does not have access to the required features."
  }, {
    heading: "restful-api-error-codes",
    content: "- Verify that the App ID is correct.<br/>- Confirm that the Signaling service is enabled.<br/>- Confirm that the history feature is enabled for the App ID."
  }, {
    heading: "restful-api-error-codes",
    content: "`408`"
  }, {
    heading: "restful-api-error-codes",
    content: "No response from the server"
  }, {
    heading: "restful-api-error-codes",
    content: "The request timed out."
  }, {
    heading: "restful-api-error-codes",
    content: "Try again later."
  }, {
    heading: "restful-api-error-codes",
    content: "`415`"
  }, {
    heading: "restful-api-error-codes",
    content: "Unsupported media type"
  }, {
    heading: "restful-api-error-codes",
    content: "The request body format is not supported. Only JSON is accepted."
  }, {
    heading: "restful-api-error-codes",
    content: "Ensure the request body is formatted as JSON."
  }, {
    heading: "restful-api-error-codes",
    content: "`429`"
  }, {
    heading: "restful-api-error-codes",
    content: "Rate limit exceeded"
  }, {
    heading: "restful-api-error-codes",
    content: "The number of requests exceeds the allowed limit."
  }, {
    heading: "restful-api-error-codes",
    content: "The quota for the RESTful API is 60 requests per second. Reduce the request rate."
  }, {
    heading: "restful-api-error-codes",
    content: "`435`"
  }, {
    heading: "restful-api-error-codes",
    content: "Invalid payload"
  }, {
    heading: "restful-api-error-codes",
    content: "The message payload contains illegal or unsupported content."
  }, {
    heading: "restful-api-error-codes",
    content: "Modify the payload and resend the request."
  }, {
    heading: "restful-api-error-codes",
    content: "`500`"
  }, {
    heading: "restful-api-error-codes",
    content: "Internal server error"
  }, {
    heading: "restful-api-error-codes",
    content: "An unexpected error occurred on the server."
  }, {
    heading: "restful-api-error-codes",
    content: "Retry the request."
  }, {
    heading: "restful-api-error-codes",
    content: "`503`"
  }, {
    heading: "restful-api-error-codes",
    content: "Timeout"
  }, {
    heading: "restful-api-error-codes",
    content: "The request took too long to process."
  }, {
    heading: "restful-api-error-codes",
    content: "Retry the request."
  }, {
    heading: "sdk-error-codes",
    content: "When calling Signaling SDK APIs, failures are typically returned through the SDK callback result or error object for the current platform. The payload usually includes:"
  }, {
    heading: "sdk-error-codes",
    content: "`errorCode`: The SDK error code for the current operation."
  }, {
    heading: "sdk-error-codes",
    content: "`reason`: A description of the error."
  }, {
    heading: "sdk-error-codes",
    content: "`operation`: The operation that triggered the error, when available."
  }, {
    heading: "sdk-error-codes",
    content: "For currently maintained SDK-side error handling details, see:"
  }, {
    heading: "sdk-error-codes",
    content: "Troubleshooting for logging setup and the SDK error payload structure available in this portal."
  }, {
    heading: "sdk-error-codes",
    content: "Signaling API reference for platform-specific SDK enumerations, callback contracts, and error-related data structures."
  }],
  headings: [{
    id: "restful-api-error-codes",
    content: "RESTful API error codes"
  }, {
    id: "sdk-error-codes",
    content: "SDK error codes"
  }]
};
export let toc = [{
  depth: 2,
  url: "#restful-api-error-codes",
  title: _jsx(_Fragment, {
    children: "RESTful API error codes"
  })
}, {
  depth: 2,
  url: "#sdk-error-codes",
  title: _jsx(_Fragment, {
    children: "SDK error codes"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
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
      children: "This page lists the error codes returned by the Signaling SDK and RESTful APIs. Use these codes to help debug issues when developing applications with Agora Signaling."
    }), `
`, _jsx(_components.h2, {
      id: "restful-api-error-codes",
      children: "RESTful API error codes"
    }), `
`, _jsx(_components.p, {
      children: "When you call the Signaling RESTful API, each response includes the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errorCode"
        }), ": The numeric status code returned by the server."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "reason"
        }), ": A description of the error associated with the code."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This section describes the meaning of each error code, provides possible causes, and offers suggested solutions."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Error code"
          }), _jsx(_components.th, {
            children: "Reason"
          }), _jsx(_components.th, {
            children: "Details"
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
            children: "Success"
          }), _jsx(_components.td, {
            children: "The request was successful, and messages from history were returned."
          }), _jsx(_components.td, {
            children: "No action required."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            children: "Invalid request"
          }), _jsx(_components.td, {
            children: "The request contains invalid parameters."
          }), _jsx(_components.td, {
            children: "Verify and correct the parameters."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            children: "User authentication error"
          }), _jsx(_components.td, {
            children: "The request contains invalid authentication parameters."
          }), _jsx(_components.td, {
            children: "Verify and use valid parameters."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            children: "Unauthorized or feature not enabled"
          }), _jsx(_components.td, {
            children: "The App ID is invalid or does not have access to the required features."
          }), _jsxs(_components.td, {
            children: ["- Verify that the App ID is correct.", "- Confirm that the Signaling service is enabled.", "- Confirm that the history feature is enabled for the App ID."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "408"
            })
          }), _jsx(_components.td, {
            children: "No response from the server"
          }), _jsx(_components.td, {
            children: "The request timed out."
          }), _jsx(_components.td, {
            children: "Try again later."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "415"
            })
          }), _jsx(_components.td, {
            children: "Unsupported media type"
          }), _jsx(_components.td, {
            children: "The request body format is not supported. Only JSON is accepted."
          }), _jsx(_components.td, {
            children: "Ensure the request body is formatted as JSON."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "429"
            })
          }), _jsx(_components.td, {
            children: "Rate limit exceeded"
          }), _jsx(_components.td, {
            children: "The number of requests exceeds the allowed limit."
          }), _jsx(_components.td, {
            children: "The quota for the RESTful API is 60 requests per second. Reduce the request rate."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "435"
            })
          }), _jsx(_components.td, {
            children: "Invalid payload"
          }), _jsx(_components.td, {
            children: "The message payload contains illegal or unsupported content."
          }), _jsx(_components.td, {
            children: "Modify the payload and resend the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500"
            })
          }), _jsx(_components.td, {
            children: "Internal server error"
          }), _jsx(_components.td, {
            children: "An unexpected error occurred on the server."
          }), _jsx(_components.td, {
            children: "Retry the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "503"
            })
          }), _jsx(_components.td, {
            children: "Timeout"
          }), _jsx(_components.td, {
            children: "The request took too long to process."
          }), _jsx(_components.td, {
            children: "Retry the request."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "sdk-error-codes",
      children: "SDK error codes"
    }), `
`, _jsx(_components.p, {
      children: "When calling Signaling SDK APIs, failures are typically returned through the SDK callback result or error object for the current platform. The payload usually includes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errorCode"
        }), ": The SDK error code for the current operation."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "reason"
        }), ": A description of the error."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "operation"
        }), ": The operation that triggered the error, when available."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For currently maintained SDK-side error handling details, see:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "./troubleshooting",
          children: "Troubleshooting"
        }), " for logging setup and the SDK error payload structure available in this portal."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/api-ref/signaling",
          children: "Signaling API reference"
        }), " for platform-specific SDK enumerations, callback contracts, and error-related data structures."]
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
