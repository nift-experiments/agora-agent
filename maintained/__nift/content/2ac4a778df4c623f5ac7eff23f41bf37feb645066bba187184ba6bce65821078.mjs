import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Status and error codes",
  description: "Troubleshoot common Cloud Transcoding REST API issues."
};
export let _markdown = `

This page lists response status codes for Cloud Transcoding and Multi-bitrate streaming, along with their descriptions and recommended actions.

## Cloud Transcoding [#cloud-transcoding]

When you call the Cloud Transcoding REST API, you receive an HTTP response status code:

* If the HTTP status code is \`2XX\`, the request is successful.
* If the HTTP status code is not \`2XX\`, the request failed.

The following example shows a failed request:

\`\`\`json
// 400 Bad Request
{
  "message": "appid is invalid"
}
\`\`\`

When using Cloud Transcoding, you may receive status codes that indicate the service status. Refer to the following table to understand their meanings and take appropriate action.

| Status code                 | Description                                                                                                                                  | Suggested action                                                                                                     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| \`200 OK\`                    | The request was successful.                                                                                                                  | No troubleshooting is required.                                                                                      |
| \`201 Created\` (Deprecated)  | The task is already in progress. Do not use the same \`builderToken\` to start the task again.                                                 | No troubleshooting is required.                                                                                      |
| \`202 Accepted\`              | The server has received the task request, but the task execution may not be complete.                                                        | Query the execution status before proceeding to the next business operation.                                         |
| \`400 Bad Request\`           | The request syntax is incorrect, the parameter value does not meet the requirements, or your App ID does not have Cloud Transcoding enabled. | Investigate based on the \`message\` field in the response body.                                                       |
| \`401 Unauthorized\`          | The \`Authorization\` field for HTTP Basic authentication is invalid.                                                                          | See [RESTful authentication](authentication) or check your \`Authorization\` credentials.                              |
| \`403 Forbidden\`             | Cloud Transcoding is not enabled for your App ID.                                                                                            | [Enable Cloud Transcoding](/en/realtime-media/transcoding/sdk-quickstart#enable-cloud-transcoding) in Agora Console. |
| \`404 Not Found\`             | Transcoder not found.                                                                                                                        | Use a backoff strategy to make a query request and confirm whether the transcoder was created successfully.          |
| \`409 Conflict\`              | A transcoder task with the same \`instanceId\` already exists.                                                                                 | Delete the existing transcoder before creating a new one.                                                            |
| \`429 Too Many Requests\`     | The request rate exceeds the upper limit.                                                                                                    | Wait for a while and try again.                                                                                      |
| \`500 Internal Server Error\` | Internal Agora server error.                                                                                                                 | Use a backoff strategy for query requests or contact [technical support](mailto\\:support@agora.io).                  |
| \`501 Not Implemented\`       | This method is not implemented.                                                                                                              | No troubleshooting is required.                                                                                      |
| \`503 Service Unavailable\`   | The Agora server is temporarily overloaded or undergoing maintenance.                                                                        | Use a backoff strategy for query requests or contact [technical support](mailto\\:support@agora.io).                  |
| \`504 Gateway Timeout\`       | An internal Agora server error occurred, an upstream server did not respond, or the upstream server is shut down.                            | Use a backoff strategy for query requests or contact [technical support](mailto\\:support@agora.io).                  |

When using the Cloud Transcoding response status code for troubleshooting, keep the following in mind:

* If the request fails, do not perform logical processing based on the \`message\` field in the response body. Rely primarily on the status code for troubleshooting.
* If the troubleshooting methods in the table do not resolve the issue, contact [technical support](mailto\\:support@agora.io) with the values of the \`X-Request-ID\` and \`X-Resource-ID\` fields in the response header.
* If you receive a \`404\` status code after a \`Create\` request has returned successfully and you have not called \`Delete\`, or if the transcoder remains idle beyond the \`idleTimeout\` value in the request, use a backoff algorithm. Retry at increasing intervals of 5, 10, and 15 seconds to call \`Query\` for confirmation.
* A \`5XX\` response status code usually indicates an issue in the server response process. Use a backoff strategy for query requests, retrying at increasing intervals of 5, 10, and 15 seconds, or contact [technical support](mailto\\:support@agora.io).

## Multi-Bitrate [#multi-bitrate]

When you call the Multi-Bitrate REST API, you receive an HTTP response status code:

* If the HTTP status code is \`2XX\`, the request is successful.
* If the HTTP status code is not \`2XX\`, the request failed.

The following example shows a failed request:

\`\`\`json
// 400 Bad Request
{
  "status": "string",
  "data": {},
  "message": "string"
}
\`\`\`

When using Cloud Transcoding Multi-Bitrate, you may receive status codes that indicate the service status.

| Status code                  | Description                           | Suggested action                                                                         |
| ---------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| \`200 OK\`                     | The operation was successful.         | No troubleshooting is required.                                                          |
| \`400 Bad Request\`            | The request is invalid.               | Check whether the request parameters are valid.                                          |
| \`401 Unauthorized\`           | The authentication is invalid.        | Check whether the \`Authorization\` parameters used for HTTP authentication are correct.   |
| \`404 Not Found\`              | The requested resource was not found. | Check that the \`appId\` and \`codecId\` parameter values are correct.                       |
| \`415 Unsupported Media Type\` | Unsupported media type.               | Ensure that the \`Content-Type\` field in the request header is set to \`application/json\`. |
| \`429 Too Many Requests\`      | Requests are too frequent.            | Wait for a while and try again.                                                          |
| \`500 Internal Server Error\`  | Internal server error.                | Retry a few times.                                                                       |

<CalloutContainer type="info">
  <CalloutDescription>
    If the troubleshooting methods above do not resolve the issue, contact [technical support](mailto\\:support@agora.io) with the \`X-Request-ID\` and \`X-Resource-ID\` field values from the response header.
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page lists response status codes for Cloud Transcoding and Multi-bitrate streaming, along with their descriptions and recommended actions."
  }, {
    heading: "cloud-transcoding",
    content: "When you call the Cloud Transcoding REST API, you receive an HTTP response status code:"
  }, {
    heading: "cloud-transcoding",
    content: "If the HTTP status code is `2XX`, the request is successful."
  }, {
    heading: "cloud-transcoding",
    content: "If the HTTP status code is not `2XX`, the request failed."
  }, {
    heading: "cloud-transcoding",
    content: "The following example shows a failed request:"
  }, {
    heading: "cloud-transcoding",
    content: "When using Cloud Transcoding, you may receive status codes that indicate the service status. Refer to the following table to understand their meanings and take appropriate action."
  }, {
    heading: "cloud-transcoding",
    content: "Status code"
  }, {
    heading: "cloud-transcoding",
    content: "Description"
  }, {
    heading: "cloud-transcoding",
    content: "Suggested action"
  }, {
    heading: "cloud-transcoding",
    content: "`200 OK`"
  }, {
    heading: "cloud-transcoding",
    content: "The request was successful."
  }, {
    heading: "cloud-transcoding",
    content: "No troubleshooting is required."
  }, {
    heading: "cloud-transcoding",
    content: "`201 Created` (Deprecated)"
  }, {
    heading: "cloud-transcoding",
    content: "The task is already in progress. Do not use the same `builderToken` to start the task again."
  }, {
    heading: "cloud-transcoding",
    content: "No troubleshooting is required."
  }, {
    heading: "cloud-transcoding",
    content: "`202 Accepted`"
  }, {
    heading: "cloud-transcoding",
    content: "The server has received the task request, but the task execution may not be complete."
  }, {
    heading: "cloud-transcoding",
    content: "Query the execution status before proceeding to the next business operation."
  }, {
    heading: "cloud-transcoding",
    content: "`400 Bad Request`"
  }, {
    heading: "cloud-transcoding",
    content: "The request syntax is incorrect, the parameter value does not meet the requirements, or your App ID does not have Cloud Transcoding enabled."
  }, {
    heading: "cloud-transcoding",
    content: "Investigate based on the `message` field in the response body."
  }, {
    heading: "cloud-transcoding",
    content: "`401 Unauthorized`"
  }, {
    heading: "cloud-transcoding",
    content: "The `Authorization` field for HTTP Basic authentication is invalid."
  }, {
    heading: "cloud-transcoding",
    content: "See RESTful authentication or check your `Authorization` credentials."
  }, {
    heading: "cloud-transcoding",
    content: "`403 Forbidden`"
  }, {
    heading: "cloud-transcoding",
    content: "Cloud Transcoding is not enabled for your App ID."
  }, {
    heading: "cloud-transcoding",
    content: "Enable Cloud Transcoding in Agora Console."
  }, {
    heading: "cloud-transcoding",
    content: "`404 Not Found`"
  }, {
    heading: "cloud-transcoding",
    content: "Transcoder not found."
  }, {
    heading: "cloud-transcoding",
    content: "Use a backoff strategy to make a query request and confirm whether the transcoder was created successfully."
  }, {
    heading: "cloud-transcoding",
    content: "`409 Conflict`"
  }, {
    heading: "cloud-transcoding",
    content: "A transcoder task with the same `instanceId` already exists."
  }, {
    heading: "cloud-transcoding",
    content: "Delete the existing transcoder before creating a new one."
  }, {
    heading: "cloud-transcoding",
    content: "`429 Too Many Requests`"
  }, {
    heading: "cloud-transcoding",
    content: "The request rate exceeds the upper limit."
  }, {
    heading: "cloud-transcoding",
    content: "Wait for a while and try again."
  }, {
    heading: "cloud-transcoding",
    content: "`500 Internal Server Error`"
  }, {
    heading: "cloud-transcoding",
    content: "Internal Agora server error."
  }, {
    heading: "cloud-transcoding",
    content: "Use a backoff strategy for query requests or contact technical support."
  }, {
    heading: "cloud-transcoding",
    content: "`501 Not Implemented`"
  }, {
    heading: "cloud-transcoding",
    content: "This method is not implemented."
  }, {
    heading: "cloud-transcoding",
    content: "No troubleshooting is required."
  }, {
    heading: "cloud-transcoding",
    content: "`503 Service Unavailable`"
  }, {
    heading: "cloud-transcoding",
    content: "The Agora server is temporarily overloaded or undergoing maintenance."
  }, {
    heading: "cloud-transcoding",
    content: "Use a backoff strategy for query requests or contact technical support."
  }, {
    heading: "cloud-transcoding",
    content: "`504 Gateway Timeout`"
  }, {
    heading: "cloud-transcoding",
    content: "An internal Agora server error occurred, an upstream server did not respond, or the upstream server is shut down."
  }, {
    heading: "cloud-transcoding",
    content: "Use a backoff strategy for query requests or contact technical support."
  }, {
    heading: "cloud-transcoding",
    content: "When using the Cloud Transcoding response status code for troubleshooting, keep the following in mind:"
  }, {
    heading: "cloud-transcoding",
    content: "If the request fails, do not perform logical processing based on the `message` field in the response body. Rely primarily on the status code for troubleshooting."
  }, {
    heading: "cloud-transcoding",
    content: "If the troubleshooting methods in the table do not resolve the issue, contact technical support with the values of the `X-Request-ID` and `X-Resource-ID` fields in the response header."
  }, {
    heading: "cloud-transcoding",
    content: "If you receive a `404` status code after a `Create` request has returned successfully and you have not called `Delete`, or if the transcoder remains idle beyond the `idleTimeout` value in the request, use a backoff algorithm. Retry at increasing intervals of 5, 10, and 15 seconds to call `Query` for confirmation."
  }, {
    heading: "cloud-transcoding",
    content: "A `5XX` response status code usually indicates an issue in the server response process. Use a backoff strategy for query requests, retrying at increasing intervals of 5, 10, and 15 seconds, or contact technical support."
  }, {
    heading: "multi-bitrate",
    content: "When you call the Multi-Bitrate REST API, you receive an HTTP response status code:"
  }, {
    heading: "multi-bitrate",
    content: "If the HTTP status code is `2XX`, the request is successful."
  }, {
    heading: "multi-bitrate",
    content: "If the HTTP status code is not `2XX`, the request failed."
  }, {
    heading: "multi-bitrate",
    content: "The following example shows a failed request:"
  }, {
    heading: "multi-bitrate",
    content: "When using Cloud Transcoding Multi-Bitrate, you may receive status codes that indicate the service status."
  }, {
    heading: "multi-bitrate",
    content: "Status code"
  }, {
    heading: "multi-bitrate",
    content: "Description"
  }, {
    heading: "multi-bitrate",
    content: "Suggested action"
  }, {
    heading: "multi-bitrate",
    content: "`200 OK`"
  }, {
    heading: "multi-bitrate",
    content: "The operation was successful."
  }, {
    heading: "multi-bitrate",
    content: "No troubleshooting is required."
  }, {
    heading: "multi-bitrate",
    content: "`400 Bad Request`"
  }, {
    heading: "multi-bitrate",
    content: "The request is invalid."
  }, {
    heading: "multi-bitrate",
    content: "Check whether the request parameters are valid."
  }, {
    heading: "multi-bitrate",
    content: "`401 Unauthorized`"
  }, {
    heading: "multi-bitrate",
    content: "The authentication is invalid."
  }, {
    heading: "multi-bitrate",
    content: "Check whether the `Authorization` parameters used for HTTP authentication are correct."
  }, {
    heading: "multi-bitrate",
    content: "`404 Not Found`"
  }, {
    heading: "multi-bitrate",
    content: "The requested resource was not found."
  }, {
    heading: "multi-bitrate",
    content: "Check that the `appId` and `codecId` parameter values are correct."
  }, {
    heading: "multi-bitrate",
    content: "`415 Unsupported Media Type`"
  }, {
    heading: "multi-bitrate",
    content: "Unsupported media type."
  }, {
    heading: "multi-bitrate",
    content: "Ensure that the `Content-Type` field in the request header is set to `application/json`."
  }, {
    heading: "multi-bitrate",
    content: "`429 Too Many Requests`"
  }, {
    heading: "multi-bitrate",
    content: "Requests are too frequent."
  }, {
    heading: "multi-bitrate",
    content: "Wait for a while and try again."
  }, {
    heading: "multi-bitrate",
    content: "`500 Internal Server Error`"
  }, {
    heading: "multi-bitrate",
    content: "Internal server error."
  }, {
    heading: "multi-bitrate",
    content: "Retry a few times."
  }, {
    heading: "multi-bitrate",
    content: "If the troubleshooting methods above do not resolve the issue, contact technical support with the `X-Request-ID` and `X-Resource-ID` field values from the response header."
  }],
  headings: [{
    id: "cloud-transcoding",
    content: "Cloud Transcoding"
  }, {
    id: "multi-bitrate",
    content: "Multi-Bitrate"
  }]
};
export let toc = [{
  depth: 2,
  url: "#cloud-transcoding",
  title: _jsx(_Fragment, {
    children: "Cloud Transcoding"
  })
}, {
  depth: 2,
  url: "#multi-bitrate",
  title: _jsx(_Fragment, {
    children: "Multi-Bitrate"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page lists response status codes for Cloud Transcoding and Multi-bitrate streaming, along with their descriptions and recommended actions."
    }), `
`, _jsx(_components.h2, {
      id: "cloud-transcoding",
      children: "Cloud Transcoding"
    }), `
`, _jsx(_components.p, {
      children: "When you call the Cloud Transcoding REST API, you receive an HTTP response status code:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the HTTP status code is ", _jsx(_components.code, {
          children: "2XX"
        }), ", the request is successful."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the HTTP status code is not ", _jsx(_components.code, {
          children: "2XX"
        }), ", the request failed."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following example shows a failed request:"
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
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// 400 Bad Request"
            })
          }), `
`, _jsx(_components.span, {
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
              children: '"appid is invalid"'
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
      children: "When using Cloud Transcoding, you may receive status codes that indicate the service status. Refer to the following table to understand their meanings and take appropriate action."
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
              children: "200 OK"
            })
          }), _jsx(_components.td, {
            children: "The request was successful."
          }), _jsx(_components.td, {
            children: "No troubleshooting is required."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "201 Created"
            }), " (Deprecated)"]
          }), _jsxs(_components.td, {
            children: ["The task is already in progress. Do not use the same ", _jsx(_components.code, {
              children: "builderToken"
            }), " to start the task again."]
          }), _jsx(_components.td, {
            children: "No troubleshooting is required."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "202 Accepted"
            })
          }), _jsx(_components.td, {
            children: "The server has received the task request, but the task execution may not be complete."
          }), _jsx(_components.td, {
            children: "Query the execution status before proceeding to the next business operation."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: "The request syntax is incorrect, the parameter value does not meet the requirements, or your App ID does not have Cloud Transcoding enabled."
          }), _jsxs(_components.td, {
            children: ["Investigate based on the ", _jsx(_components.code, {
              children: "message"
            }), " field in the response body."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "401 Unauthorized"
            })
          }), _jsxs(_components.td, {
            children: ["The ", _jsx(_components.code, {
              children: "Authorization"
            }), " field for HTTP Basic authentication is invalid."]
          }), _jsxs(_components.td, {
            children: ["See ", _jsx(_components.a, {
              href: "authentication",
              children: "RESTful authentication"
            }), " or check your ", _jsx(_components.code, {
              children: "Authorization"
            }), " credentials."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "403 Forbidden"
            })
          }), _jsx(_components.td, {
            children: "Cloud Transcoding is not enabled for your App ID."
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/en/realtime-media/transcoding/sdk-quickstart#enable-cloud-transcoding",
              children: "Enable Cloud Transcoding"
            }), " in Agora Console."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            children: "Transcoder not found."
          }), _jsx(_components.td, {
            children: "Use a backoff strategy to make a query request and confirm whether the transcoder was created successfully."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "409 Conflict"
            })
          }), _jsxs(_components.td, {
            children: ["A transcoder task with the same ", _jsx(_components.code, {
              children: "instanceId"
            }), " already exists."]
          }), _jsx(_components.td, {
            children: "Delete the existing transcoder before creating a new one."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "429 Too Many Requests"
            })
          }), _jsx(_components.td, {
            children: "The request rate exceeds the upper limit."
          }), _jsx(_components.td, {
            children: "Wait for a while and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500 Internal Server Error"
            })
          }), _jsx(_components.td, {
            children: "Internal Agora server error."
          }), _jsxs(_components.td, {
            children: ["Use a backoff strategy for query requests or contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "501 Not Implemented"
            })
          }), _jsx(_components.td, {
            children: "This method is not implemented."
          }), _jsx(_components.td, {
            children: "No troubleshooting is required."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "503 Service Unavailable"
            })
          }), _jsx(_components.td, {
            children: "The Agora server is temporarily overloaded or undergoing maintenance."
          }), _jsxs(_components.td, {
            children: ["Use a backoff strategy for query requests or contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "504 Gateway Timeout"
            })
          }), _jsx(_components.td, {
            children: "An internal Agora server error occurred, an upstream server did not respond, or the upstream server is shut down."
          }), _jsxs(_components.td, {
            children: ["Use a backoff strategy for query requests or contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "technical support"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "When using the Cloud Transcoding response status code for troubleshooting, keep the following in mind:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the request fails, do not perform logical processing based on the ", _jsx(_components.code, {
          children: "message"
        }), " field in the response body. Rely primarily on the status code for troubleshooting."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the troubleshooting methods in the table do not resolve the issue, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "technical support"
        }), " with the values of the ", _jsx(_components.code, {
          children: "X-Request-ID"
        }), " and ", _jsx(_components.code, {
          children: "X-Resource-ID"
        }), " fields in the response header."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you receive a ", _jsx(_components.code, {
          children: "404"
        }), " status code after a ", _jsx(_components.code, {
          children: "Create"
        }), " request has returned successfully and you have not called ", _jsx(_components.code, {
          children: "Delete"
        }), ", or if the transcoder remains idle beyond the ", _jsx(_components.code, {
          children: "idleTimeout"
        }), " value in the request, use a backoff algorithm. Retry at increasing intervals of 5, 10, and 15 seconds to call ", _jsx(_components.code, {
          children: "Query"
        }), " for confirmation."]
      }), `
`, _jsxs(_components.li, {
        children: ["A ", _jsx(_components.code, {
          children: "5XX"
        }), " response status code usually indicates an issue in the server response process. Use a backoff strategy for query requests, retrying at increasing intervals of 5, 10, and 15 seconds, or contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "technical support"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "multi-bitrate",
      children: "Multi-Bitrate"
    }), `
`, _jsx(_components.p, {
      children: "When you call the Multi-Bitrate REST API, you receive an HTTP response status code:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the HTTP status code is ", _jsx(_components.code, {
          children: "2XX"
        }), ", the request is successful."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the HTTP status code is not ", _jsx(_components.code, {
          children: "2XX"
        }), ", the request failed."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following example shows a failed request:"
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
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// 400 Bad Request"
            })
          }), `
`, _jsx(_components.span, {
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
              children: '"string"'
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
              children: '  "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {},"
            })]
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
              children: '"string"'
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
      children: "When using Cloud Transcoding Multi-Bitrate, you may receive status codes that indicate the service status."
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
              children: "200 OK"
            })
          }), _jsx(_components.td, {
            children: "The operation was successful."
          }), _jsx(_components.td, {
            children: "No troubleshooting is required."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: "The request is invalid."
          }), _jsx(_components.td, {
            children: "Check whether the request parameters are valid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "401 Unauthorized"
            })
          }), _jsx(_components.td, {
            children: "The authentication is invalid."
          }), _jsxs(_components.td, {
            children: ["Check whether the ", _jsx(_components.code, {
              children: "Authorization"
            }), " parameters used for HTTP authentication are correct."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            children: "The requested resource was not found."
          }), _jsxs(_components.td, {
            children: ["Check that the ", _jsx(_components.code, {
              children: "appId"
            }), " and ", _jsx(_components.code, {
              children: "codecId"
            }), " parameter values are correct."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "415 Unsupported Media Type"
            })
          }), _jsx(_components.td, {
            children: "Unsupported media type."
          }), _jsxs(_components.td, {
            children: ["Ensure that the ", _jsx(_components.code, {
              children: "Content-Type"
            }), " field in the request header is set to ", _jsx(_components.code, {
              children: "application/json"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "429 Too Many Requests"
            })
          }), _jsx(_components.td, {
            children: "Requests are too frequent."
          }), _jsx(_components.td, {
            children: "Wait for a while and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500 Internal Server Error"
            })
          }), _jsx(_components.td, {
            children: "Internal server error."
          }), _jsx(_components.td, {
            children: "Retry a few times."
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If the troubleshooting methods above do not resolve the issue, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), " with the ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " and ", _jsx(_components.code, {
            children: "X-Resource-ID"
          }), " field values from the response header."]
        })
      })
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
