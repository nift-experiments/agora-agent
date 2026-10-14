import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Response status codes",
  description: "Troubleshoot Media Gateway RESTful API responses by status code."
};
export let _markdown = `

After sending an HTTP request, the server returns a status code. Use the status code to determine whether the request succeeded and why a request might have failed.

* If the status code is \`2XX\`, the request was successful.
* If the status code is not \`2XX\`, the request failed. Troubleshoot the problem based on the \`message\` field in the response body.

## Streaming key [#streaming-key]

| Status code               | Message example                                                                                                                                          | Reason                                                                                                                      | Solution                                                                                                |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| \`200 OK\`                  | \`/\`                                                                                                                                                      | Request successful.                                                                                                         | \`/\`                                                                                                     |
| \`400 Bad Request\`         | \`Invalid settings.\`<br />\`Invalid 'channel' format.\`<br />\`Streaming key exists in region:na.\`                                                           | Request parameter error.                                                                                                    | Troubleshoot based on the specific content of the \`message\` field.                                      |
| \`401 Unauthorized\`        | \`Invalid authentication credentials.\`                                                                                                                    | RESTful API authentication failed.                                                                                          | Retry [HTTP Basic or HMAC authentication](authentication).                                              |
| \`403 Forbidden\`           | \`Media Gateway is not enabled for this project. Contact us to enable.\`<br />\`Stream does not belong to this app ID.\`                                     | The Media Gateway service has not been activated, or the queried streaming key does not belong to the corresponding app ID. | Contact technical support to activate the service, or check whether the streaming key and app ID match. |
| \`404 Not Found\`           | \`Resource not found and destroyed.\`                                                                                                                      | The requested resource does not exist.                                                                                      | Check whether the streaming key is correct.                                                             |
| \`409 Conflict\`            | \`Resource with the same name already exists.\`                                                                                                            | Too many concurrent requests.                                                                                               | Use a backoff strategy and try again.                                                                   |
| \`429 Too Many Requests\`   | \`Request rate limit exceeded.\`<br />\`Resources quota limit exceeded.\`<br />\`No available resources.\`                                                     | Request rate or resource quota exceeded.                                                                                    | Use a backoff strategy and try again.                                                                   |
| \`500 Unknown\`             | \`Internal error. Contact us to help fix it.\`                                                                                                             | Internal server error.                                                                                                      | Use a backoff strategy and try again.                                                                   |
| \`503 Service Unavailable\` | \`Service overload. Retry with the back-off strategy and contact us to fix it.\`<br />\`Service unavailable temporarily. Retry with the back-off strategy.\` | Internal server error.                                                                                                      | Use a backoff strategy and try again.                                                                   |
| \`504 Gateway Timeout\`     | \`Gateway timeout. Query to check whether the player has been created, or to create another one instead.\`                                                 | Internal server error.                                                                                                      | Use a backoff strategy and try again.                                                                   |

## Flow configuration template [#flow-configuration-template]

| Status code               | Message example                                                                                                                                          | Reason                                                                                          | Solution                                                                         |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| \`200 OK\`                  | \`/\`                                                                                                                                                      | Request successful.                                                                             | \`/\`                                                                              |
| \`400 Bad Request\`         | \`Invalid settings.\`<br />\`Invalid template ID.\`<br />\`Missing field: "transcoding.video.enabled"\`<br />\`Unsupported codec: "AV1".\`                       | Request parameter error.                                                                        | Troubleshoot based on the \`message\` field in the response body.                  |
| \`401 Unauthorized\`        | \`Invalid authentication credentials.\`                                                                                                                    | RESTful API authentication failed.                                                              | Retry [HTTP Basic or HMAC authentication](authentication).                       |
| \`403 Forbidden\`           | \`Media Gateway is not enabled for this project. Contact us to enable.\`<br />\`Too many templates have been created.\`                                      | The service has not been activated, or too many flow configuration templates have been created. | Contact technical support to activate Media Gateway, or delete unused templates. |
| \`404 Not Found\`           | \`Stream template not found.\`                                                                                                                             | The requested resource does not exist.                                                          | Check whether \`templateId\` is correct.                                           |
| \`429 Too Many Requests\`   | \`Request rate limit exceeded.\`<br />\`Resources quota limit exceeded.\`<br />\`No available resources.\`                                                     | Too many concurrent requests.                                                                   | Use a backoff strategy and try again.                                            |
| \`500 Unknown\`             | \`Internal error. Contact us to fix it.\`                                                                                                                  | Internal server error.                                                                          | Use a backoff strategy and try again.                                            |
| \`502 Bad Gateway\`         | \`Internal errors. Contact us to troubleshoot.\`                                                                                                           | Internal server error.                                                                          | Use a backoff strategy and try again.                                            |
| \`503 Service Unavailable\` | \`Service overload. Retry with the back-off strategy and contact us to fix it.\`<br />\`Service unavailable temporarily. Retry with the back-off strategy.\` | Internal server error.                                                                          | Use a backoff strategy and try again.                                            |
| \`504 Gateway Timeout\`     | \`Gateway timeout. Query to check whether the task has been created, or to create another one instead.\`                                                   | Internal server error.                                                                          | Use a backoff strategy and try again.                                            |

## Information query [#information-query]

| Status code               | Message example                                                                                                                                          | Reason                                 | Solution                                                        |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :-------------------------------------------------------------- |
| \`200 OK\`                  | \`/\`                                                                                                                                                      | Request successful.                    | \`/\`                                                             |
| \`400 Bad Request\`         | \`Invalid body.\`<br />\`Invalid app ID.\`<br />\`SID is missing.\`                                                                                            | Request parameter error.               | Troubleshoot based on the \`message\` field in the response body. |
| \`401 Unauthorized\`        | \`Invalid authentication credentials.\`                                                                                                                    | RESTful API authentication failed.     | Retry [HTTP Basic or HMAC authentication](authentication).      |
| \`403 Forbidden\`           | \`Media Gateway is not enabled for this project. Contact us to enable.\`                                                                                   | The service has not been activated.    | Contact technical support to activate Media Gateway.            |
| \`404 Not Found\`           | \`/\`                                                                                                                                                      | The requested resource does not exist. | Check whether the SID is correct.                               |
| \`429 Too Many Requests\`   | \`Request rate limit exceeded.\`<br />\`Resources quota limit exceeded.\`<br />\`No available resources.\`                                                     | Too many concurrent requests.          | Use a backoff strategy and try again.                           |
| \`500 Unknown\`             | \`Some internal error happened. Contact us to help fix it.\`                                                                                               | Internal server error.                 | Use a backoff strategy and try again.                           |
| \`502 Bad Gateway\`         | \`Internal errors. Contact us for troubleshooting.\`                                                                                                       | Internal server error.                 | Use a backoff strategy and try again.                           |
| \`503 Service Unavailable\` | \`Service overload. Retry with a back-off strategy, and contact us to help fix it.\`<br />\`Service unavailable temporarily. Retry with back off strategy.\` | Internal server error.                 | Use a backoff strategy and try again.                           |
| \`504 Gateway Timeout\`     | \`Gateway timeout. Query to check whether the task has been created, or to create another one instead.\`                                                   | Internal server error.                 | Use a backoff strategy and try again.                           |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "After sending an HTTP request, the server returns a status code. Use the status code to determine whether the request succeeded and why a request might have failed."
  }, {
    heading: undefined,
    content: "If the status code is `2XX`, the request was successful."
  }, {
    heading: undefined,
    content: "If the status code is not `2XX`, the request failed. Troubleshoot the problem based on the `message` field in the response body."
  }, {
    heading: "streaming-key",
    content: "Status code"
  }, {
    heading: "streaming-key",
    content: "Message example"
  }, {
    heading: "streaming-key",
    content: "Reason"
  }, {
    heading: "streaming-key",
    content: "Solution"
  }, {
    heading: "streaming-key",
    content: "`200 OK`"
  }, {
    heading: "streaming-key",
    content: "`/`"
  }, {
    heading: "streaming-key",
    content: "Request successful."
  }, {
    heading: "streaming-key",
    content: "`/`"
  }, {
    heading: "streaming-key",
    content: "`400 Bad Request`"
  }, {
    heading: "streaming-key",
    content: "`Invalid settings.`<br />`Invalid 'channel' format.`<br />`Streaming key exists in region:na.`"
  }, {
    heading: "streaming-key",
    content: "Request parameter error."
  }, {
    heading: "streaming-key",
    content: "Troubleshoot based on the specific content of the `message` field."
  }, {
    heading: "streaming-key",
    content: "`401 Unauthorized`"
  }, {
    heading: "streaming-key",
    content: "`Invalid authentication credentials.`"
  }, {
    heading: "streaming-key",
    content: "RESTful API authentication failed."
  }, {
    heading: "streaming-key",
    content: "Retry HTTP Basic or HMAC authentication."
  }, {
    heading: "streaming-key",
    content: "`403 Forbidden`"
  }, {
    heading: "streaming-key",
    content: "`Media Gateway is not enabled for this project. Contact us to enable.`<br />`Stream does not belong to this app ID.`"
  }, {
    heading: "streaming-key",
    content: "The Media Gateway service has not been activated, or the queried streaming key does not belong to the corresponding app ID."
  }, {
    heading: "streaming-key",
    content: "Contact technical support to activate the service, or check whether the streaming key and app ID match."
  }, {
    heading: "streaming-key",
    content: "`404 Not Found`"
  }, {
    heading: "streaming-key",
    content: "`Resource not found and destroyed.`"
  }, {
    heading: "streaming-key",
    content: "The requested resource does not exist."
  }, {
    heading: "streaming-key",
    content: "Check whether the streaming key is correct."
  }, {
    heading: "streaming-key",
    content: "`409 Conflict`"
  }, {
    heading: "streaming-key",
    content: "`Resource with the same name already exists.`"
  }, {
    heading: "streaming-key",
    content: "Too many concurrent requests."
  }, {
    heading: "streaming-key",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "streaming-key",
    content: "`429 Too Many Requests`"
  }, {
    heading: "streaming-key",
    content: "`Request rate limit exceeded.`<br />`Resources quota limit exceeded.`<br />`No available resources.`"
  }, {
    heading: "streaming-key",
    content: "Request rate or resource quota exceeded."
  }, {
    heading: "streaming-key",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "streaming-key",
    content: "`500 Unknown`"
  }, {
    heading: "streaming-key",
    content: "`Internal error. Contact us to help fix it.`"
  }, {
    heading: "streaming-key",
    content: "Internal server error."
  }, {
    heading: "streaming-key",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "streaming-key",
    content: "`503 Service Unavailable`"
  }, {
    heading: "streaming-key",
    content: "`Service overload. Retry with the back-off strategy and contact us to fix it.`<br />`Service unavailable temporarily. Retry with the back-off strategy.`"
  }, {
    heading: "streaming-key",
    content: "Internal server error."
  }, {
    heading: "streaming-key",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "streaming-key",
    content: "`504 Gateway Timeout`"
  }, {
    heading: "streaming-key",
    content: "`Gateway timeout. Query to check whether the player has been created, or to create another one instead.`"
  }, {
    heading: "streaming-key",
    content: "Internal server error."
  }, {
    heading: "streaming-key",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "flow-configuration-template",
    content: "Status code"
  }, {
    heading: "flow-configuration-template",
    content: "Message example"
  }, {
    heading: "flow-configuration-template",
    content: "Reason"
  }, {
    heading: "flow-configuration-template",
    content: "Solution"
  }, {
    heading: "flow-configuration-template",
    content: "`200 OK`"
  }, {
    heading: "flow-configuration-template",
    content: "`/`"
  }, {
    heading: "flow-configuration-template",
    content: "Request successful."
  }, {
    heading: "flow-configuration-template",
    content: "`/`"
  }, {
    heading: "flow-configuration-template",
    content: "`400 Bad Request`"
  }, {
    heading: "flow-configuration-template",
    content: '`Invalid settings.`<br />`Invalid template ID.`<br />`Missing field: "transcoding.video.enabled"`<br />`Unsupported codec: "AV1".`'
  }, {
    heading: "flow-configuration-template",
    content: "Request parameter error."
  }, {
    heading: "flow-configuration-template",
    content: "Troubleshoot based on the `message` field in the response body."
  }, {
    heading: "flow-configuration-template",
    content: "`401 Unauthorized`"
  }, {
    heading: "flow-configuration-template",
    content: "`Invalid authentication credentials.`"
  }, {
    heading: "flow-configuration-template",
    content: "RESTful API authentication failed."
  }, {
    heading: "flow-configuration-template",
    content: "Retry HTTP Basic or HMAC authentication."
  }, {
    heading: "flow-configuration-template",
    content: "`403 Forbidden`"
  }, {
    heading: "flow-configuration-template",
    content: "`Media Gateway is not enabled for this project. Contact us to enable.`<br />`Too many templates have been created.`"
  }, {
    heading: "flow-configuration-template",
    content: "The service has not been activated, or too many flow configuration templates have been created."
  }, {
    heading: "flow-configuration-template",
    content: "Contact technical support to activate Media Gateway, or delete unused templates."
  }, {
    heading: "flow-configuration-template",
    content: "`404 Not Found`"
  }, {
    heading: "flow-configuration-template",
    content: "`Stream template not found.`"
  }, {
    heading: "flow-configuration-template",
    content: "The requested resource does not exist."
  }, {
    heading: "flow-configuration-template",
    content: "Check whether `templateId` is correct."
  }, {
    heading: "flow-configuration-template",
    content: "`429 Too Many Requests`"
  }, {
    heading: "flow-configuration-template",
    content: "`Request rate limit exceeded.`<br />`Resources quota limit exceeded.`<br />`No available resources.`"
  }, {
    heading: "flow-configuration-template",
    content: "Too many concurrent requests."
  }, {
    heading: "flow-configuration-template",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "flow-configuration-template",
    content: "`500 Unknown`"
  }, {
    heading: "flow-configuration-template",
    content: "`Internal error. Contact us to fix it.`"
  }, {
    heading: "flow-configuration-template",
    content: "Internal server error."
  }, {
    heading: "flow-configuration-template",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "flow-configuration-template",
    content: "`502 Bad Gateway`"
  }, {
    heading: "flow-configuration-template",
    content: "`Internal errors. Contact us to troubleshoot.`"
  }, {
    heading: "flow-configuration-template",
    content: "Internal server error."
  }, {
    heading: "flow-configuration-template",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "flow-configuration-template",
    content: "`503 Service Unavailable`"
  }, {
    heading: "flow-configuration-template",
    content: "`Service overload. Retry with the back-off strategy and contact us to fix it.`<br />`Service unavailable temporarily. Retry with the back-off strategy.`"
  }, {
    heading: "flow-configuration-template",
    content: "Internal server error."
  }, {
    heading: "flow-configuration-template",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "flow-configuration-template",
    content: "`504 Gateway Timeout`"
  }, {
    heading: "flow-configuration-template",
    content: "`Gateway timeout. Query to check whether the task has been created, or to create another one instead.`"
  }, {
    heading: "flow-configuration-template",
    content: "Internal server error."
  }, {
    heading: "flow-configuration-template",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "information-query",
    content: "Status code"
  }, {
    heading: "information-query",
    content: "Message example"
  }, {
    heading: "information-query",
    content: "Reason"
  }, {
    heading: "information-query",
    content: "Solution"
  }, {
    heading: "information-query",
    content: "`200 OK`"
  }, {
    heading: "information-query",
    content: "`/`"
  }, {
    heading: "information-query",
    content: "Request successful."
  }, {
    heading: "information-query",
    content: "`/`"
  }, {
    heading: "information-query",
    content: "`400 Bad Request`"
  }, {
    heading: "information-query",
    content: "`Invalid body.`<br />`Invalid app ID.`<br />`SID is missing.`"
  }, {
    heading: "information-query",
    content: "Request parameter error."
  }, {
    heading: "information-query",
    content: "Troubleshoot based on the `message` field in the response body."
  }, {
    heading: "information-query",
    content: "`401 Unauthorized`"
  }, {
    heading: "information-query",
    content: "`Invalid authentication credentials.`"
  }, {
    heading: "information-query",
    content: "RESTful API authentication failed."
  }, {
    heading: "information-query",
    content: "Retry HTTP Basic or HMAC authentication."
  }, {
    heading: "information-query",
    content: "`403 Forbidden`"
  }, {
    heading: "information-query",
    content: "`Media Gateway is not enabled for this project. Contact us to enable.`"
  }, {
    heading: "information-query",
    content: "The service has not been activated."
  }, {
    heading: "information-query",
    content: "Contact technical support to activate Media Gateway."
  }, {
    heading: "information-query",
    content: "`404 Not Found`"
  }, {
    heading: "information-query",
    content: "`/`"
  }, {
    heading: "information-query",
    content: "The requested resource does not exist."
  }, {
    heading: "information-query",
    content: "Check whether the SID is correct."
  }, {
    heading: "information-query",
    content: "`429 Too Many Requests`"
  }, {
    heading: "information-query",
    content: "`Request rate limit exceeded.`<br />`Resources quota limit exceeded.`<br />`No available resources.`"
  }, {
    heading: "information-query",
    content: "Too many concurrent requests."
  }, {
    heading: "information-query",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "information-query",
    content: "`500 Unknown`"
  }, {
    heading: "information-query",
    content: "`Some internal error happened. Contact us to help fix it.`"
  }, {
    heading: "information-query",
    content: "Internal server error."
  }, {
    heading: "information-query",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "information-query",
    content: "`502 Bad Gateway`"
  }, {
    heading: "information-query",
    content: "`Internal errors. Contact us for troubleshooting.`"
  }, {
    heading: "information-query",
    content: "Internal server error."
  }, {
    heading: "information-query",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "information-query",
    content: "`503 Service Unavailable`"
  }, {
    heading: "information-query",
    content: "`Service overload. Retry with a back-off strategy, and contact us to help fix it.`<br />`Service unavailable temporarily. Retry with back off strategy.`"
  }, {
    heading: "information-query",
    content: "Internal server error."
  }, {
    heading: "information-query",
    content: "Use a backoff strategy and try again."
  }, {
    heading: "information-query",
    content: "`504 Gateway Timeout`"
  }, {
    heading: "information-query",
    content: "`Gateway timeout. Query to check whether the task has been created, or to create another one instead.`"
  }, {
    heading: "information-query",
    content: "Internal server error."
  }, {
    heading: "information-query",
    content: "Use a backoff strategy and try again."
  }],
  headings: [{
    id: "streaming-key",
    content: "Streaming key"
  }, {
    id: "flow-configuration-template",
    content: "Flow configuration template"
  }, {
    id: "information-query",
    content: "Information query"
  }]
};
export let toc = [{
  depth: 2,
  url: "#streaming-key",
  title: _jsx(_Fragment, {
    children: "Streaming key"
  })
}, {
  depth: 2,
  url: "#flow-configuration-template",
  title: _jsx(_Fragment, {
    children: "Flow configuration template"
  })
}, {
  depth: 2,
  url: "#information-query",
  title: _jsx(_Fragment, {
    children: "Information query"
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
      children: "After sending an HTTP request, the server returns a status code. Use the status code to determine whether the request succeeded and why a request might have failed."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the status code is ", _jsx(_components.code, {
          children: "2XX"
        }), ", the request was successful."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the status code is not ", _jsx(_components.code, {
          children: "2XX"
        }), ", the request failed. Troubleshoot the problem based on the ", _jsx(_components.code, {
          children: "message"
        }), " field in the response body."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "streaming-key",
      children: "Streaming key"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Message example"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Reason"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "200 OK"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request successful."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Invalid settings."
            }), _jsx(_components.code, {
              children: "Invalid 'channel' format."
            }), _jsx(_components.code, {
              children: "Streaming key exists in region:na."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request parameter error."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Troubleshoot based on the specific content of the ", _jsx(_components.code, {
              children: "message"
            }), " field."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "401 Unauthorized"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Invalid authentication credentials."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RESTful API authentication failed."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Retry ", _jsx(_components.a, {
              href: "authentication",
              children: "HTTP Basic or HMAC authentication"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403 Forbidden"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Media Gateway is not enabled for this project. Contact us to enable."
            }), _jsx(_components.code, {
              children: "Stream does not belong to this app ID."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Media Gateway service has not been activated, or the queried streaming key does not belong to the corresponding app ID."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Contact technical support to activate the service, or check whether the streaming key and app ID match."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Resource not found and destroyed."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The requested resource does not exist."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the streaming key is correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "409 Conflict"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Resource with the same name already exists."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Too many concurrent requests."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "429 Too Many Requests"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Request rate limit exceeded."
            }), _jsx(_components.code, {
              children: "Resources quota limit exceeded."
            }), _jsx(_components.code, {
              children: "No available resources."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request rate or resource quota exceeded."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "500 Unknown"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Internal error. Contact us to help fix it."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "503 Service Unavailable"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Service overload. Retry with the back-off strategy and contact us to fix it."
            }), _jsx(_components.code, {
              children: "Service unavailable temporarily. Retry with the back-off strategy."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "504 Gateway Timeout"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Gateway timeout. Query to check whether the player has been created, or to create another one instead."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "flow-configuration-template",
      children: "Flow configuration template"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Message example"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Reason"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "200 OK"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request successful."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Invalid settings."
            }), _jsx(_components.code, {
              children: "Invalid template ID."
            }), _jsx(_components.code, {
              children: 'Missing field: "transcoding.video.enabled"'
            }), _jsx(_components.code, {
              children: 'Unsupported codec: "AV1".'
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request parameter error."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Troubleshoot based on the ", _jsx(_components.code, {
              children: "message"
            }), " field in the response body."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "401 Unauthorized"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Invalid authentication credentials."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RESTful API authentication failed."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Retry ", _jsx(_components.a, {
              href: "authentication",
              children: "HTTP Basic or HMAC authentication"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403 Forbidden"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Media Gateway is not enabled for this project. Contact us to enable."
            }), _jsx(_components.code, {
              children: "Too many templates have been created."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The service has not been activated, or too many flow configuration templates have been created."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Contact technical support to activate Media Gateway, or delete unused templates."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Stream template not found."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The requested resource does not exist."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Check whether ", _jsx(_components.code, {
              children: "templateId"
            }), " is correct."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "429 Too Many Requests"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Request rate limit exceeded."
            }), _jsx(_components.code, {
              children: "Resources quota limit exceeded."
            }), _jsx(_components.code, {
              children: "No available resources."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Too many concurrent requests."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "500 Unknown"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Internal error. Contact us to fix it."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "502 Bad Gateway"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Internal errors. Contact us to troubleshoot."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "503 Service Unavailable"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Service overload. Retry with the back-off strategy and contact us to fix it."
            }), _jsx(_components.code, {
              children: "Service unavailable temporarily. Retry with the back-off strategy."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "504 Gateway Timeout"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Gateway timeout. Query to check whether the task has been created, or to create another one instead."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "information-query",
      children: "Information query"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Message example"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Reason"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "200 OK"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request successful."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Invalid body."
            }), _jsx(_components.code, {
              children: "Invalid app ID."
            }), _jsx(_components.code, {
              children: "SID is missing."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request parameter error."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Troubleshoot based on the ", _jsx(_components.code, {
              children: "message"
            }), " field in the response body."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "401 Unauthorized"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Invalid authentication credentials."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RESTful API authentication failed."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Retry ", _jsx(_components.a, {
              href: "authentication",
              children: "HTTP Basic or HMAC authentication"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403 Forbidden"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Media Gateway is not enabled for this project. Contact us to enable."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The service has not been activated."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Contact technical support to activate Media Gateway."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The requested resource does not exist."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the SID is correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "429 Too Many Requests"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Request rate limit exceeded."
            }), _jsx(_components.code, {
              children: "Resources quota limit exceeded."
            }), _jsx(_components.code, {
              children: "No available resources."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Too many concurrent requests."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "500 Unknown"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Some internal error happened. Contact us to help fix it."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "502 Bad Gateway"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Internal errors. Contact us for troubleshooting."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "503 Service Unavailable"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "Service overload. Retry with a back-off strategy, and contact us to help fix it."
            }), _jsx(_components.code, {
              children: "Service unavailable temporarily. Retry with back off strategy."
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "504 Gateway Timeout"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Gateway timeout. Query to check whether the task has been created, or to create another one instead."
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use a backoff strategy and try again."
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
