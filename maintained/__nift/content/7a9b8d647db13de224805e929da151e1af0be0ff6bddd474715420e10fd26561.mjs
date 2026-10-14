import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Common errors",
  description: "Common errors"
};
export let _markdown = `

This page lists the error and status codes you may encounter when using the Real-Time STT RESTful APIs. In case of other errors, contact [Agora technical support](mailto\\:support@agora.io).

### Response status codes [#response-status-codes]

When calling Real-Time STT RESTful APIs, you may receive the following HTTP status codes:

* \`200\` for a successful request.
* Not \`200\` for a failed request. In this case, check the \`message\`, \`code\`, and \`reason\` fields in the response body to figure out what has happened. The \`reason\` field might be absent.

### Response examples [#response-examples]

When a request fails, you may receive the following response:

* Only \`message\`:

  \`\`\`json
  # 401 Unauthorized
  # only message
  {
    "message": "Invalid authentication credentials"
  }
  \`\`\`

* Only \`code\` and \`reason\`:

  \`\`\`json
  # 400 Bad Request
  # only code and reason
  {
    "code": 2,
    "reason": "Acquire: invalid resourceExpiredHour value!"
  }
  \`\`\`

### Status codes [#status-codes]

| Code  | Description                                                                                                                   |
| :---- | :---------------------------------------------------------------------------------------------------------------------------- |
| \`200\` | The request is successful. To call \`acquire\`, record \`tokenName\`. To call \`start\`, record \`taskId\` and map it to \`tokenName\`. |
| \`201\` | The service is already running. Do not repeat the \`start\` request with the same \`tokenName\`.                                  |
| \`206\` | No host in the channel sent a stream during the transcribing process.                                                         |
| \`400\` | The server cannot process the request due to malformed request syntax, or the Real-Time STT service is not enabled.           |
| \`401\` | Unauthorized (incorrect Customer ID/Customer Secret).                                                                         |
| \`404\` | The requested resource could not be found.                                                                                    |
| \`409\` | The task has already been started.                                                                                            |
| \`500\` | Internal server error.                                                                                                        |
| \`504\` | Internal communication error.                                                                                                 |

### Error messages and codes [#error-messages-and-codes]

#### Message [#message]

* \`"the product name does not match with builderToken"\`: The acquired \`buildToken\` has an issue. Call \`acquire\` again.
* \`"resourceId reaches out the limited time interval!"\`: The \`buildToken\` expired after the 5-minute validity period. Make sure to use \`tokenName\` to start the service within 5 minutes after calling \`acquire\`. When the task has been created successfully, save the \`tokenName\`, since it will be used to call \`query\`, \`update\`, and \`stop\`.
* \`"invalid_appid!"\`: The Real-Time STT service is not enabled for your app. Enable it in the Console or send a request to [Agora technical support](mailto\\:support@agora.io).
* \`"body schema check fail, ..."\`: The \`start\` or \`update\` body is wrong. \`"..."\` describes the reason of failure. Always caused by parameter mismatch or exceeding the range. Recheck the request body.
* \`"The taskId does not match with builderToken."\`: Check why \`taskId\` and \`tokenName\` do not match.
* \`"The task is not found"\`: The task has been terminated.
* \`"The task has been started, current status is STARTED, taskId is ..."\`: The task has been started. Record \`taskId\` and map it to \`tokenName\`.

#### Error code [#error-code]

* \`1\`: Internal server error when calling \`start\`. Contact [Agora technical support](mailto\\:support@agora.io) if you need more support.
* \`2\`: Invalid parameter. Possible reasons:
  * Wrong data type.
  * Wrong spelling. All parameters are case sensitive.
  * Parameter value is out of range.
  * Mandatory parameter is missing.
* \`6\`: Internal server error when calling \`start\`. Contact [Agora technical support](mailto\\:support@agora.io) if you need more support.
* \`20\`: Caused by processing timeout. Retry the same call with the back-off strategy, after 3 and 6 seconds.
* \`23\`: Internal server error when calling \`start\`. Contact [Agora technical support](mailto\\:support@agora.io) if you need more support.
* \`49\`: Caused by repeated \`start\` requests with the same \`tokenName\` or repeated \`stop\` requests with the same \`tokenName\` and \`taskId\`.
* \`53\`: \`taskid\` and \`buildtoken\` do not match.
* \`62\`: If you receive this error when calling \`acquire\`, the Real-Time STT service is not enabled for your App ID. Enable it in the Console or contact [Agora technical support](mailto\\:support@agora.io). If you receive this error when calling \`start\`, it means the service is not started due to a network issue.
* \`404\`: The task has been terminated when calling \`query\` or \`stop\`.
* \`501\`: Internal server error when calling \`start\`. Agora recommends retrying with a back-off strategy, for example waiting 1 second before the first retry, 3 seconds before the second, and 6 seconds before the third.
* \`502\`: Internal server error when calling \`start\`. Agora recommends retrying with a back-off strategy, for example waiting 1 second before the first retry, 3 seconds before the second, and 6 seconds before the third.
* \`504\`: Internal server error when calling \`start\`. Agora recommends retrying with a back-off strategy, for example waiting 1 second before the first retry, 3 seconds before the second, and 6 seconds before the third.
* \`1001\`: Failed to parse \`tokenName\`. Call \`acquire\` to get a new \`tokenName\`.
* \`1003\`: The App ID or \`taskId\` does not match \`tokenName\`. Ensure that the App ID or \`taskId\` matches \`tokenName\` in each Real-Time STT task.

### Notes [#notes]

* The \`resourceId\` and \`tokenName\` parameters are the same. In some cases, \`builderToken\` also means \`tokenName\`.
* Contact [Agora technical support](mailto\\:support@agora.io) if you encounter an error not mentioned in this documentation.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page lists the error and status codes you may encounter when using the Real-Time STT RESTful APIs. In case of other errors, contact Agora technical support."
  }, {
    heading: "response-status-codes",
    content: "When calling Real-Time STT RESTful APIs, you may receive the following HTTP status codes:"
  }, {
    heading: "response-status-codes",
    content: "`200` for a successful request."
  }, {
    heading: "response-status-codes",
    content: "Not `200` for a failed request. In this case, check the `message`, `code`, and `reason` fields in the response body to figure out what has happened. The `reason` field might be absent."
  }, {
    heading: "response-examples",
    content: "When a request fails, you may receive the following response:"
  }, {
    heading: "response-examples",
    content: "Only `message`:"
  }, {
    heading: "response-examples",
    content: "Only `code` and `reason`:"
  }, {
    heading: "status-codes",
    content: "Code"
  }, {
    heading: "status-codes",
    content: "Description"
  }, {
    heading: "status-codes",
    content: "`200`"
  }, {
    heading: "status-codes",
    content: "The request is successful. To call `acquire`, record `tokenName`. To call `start`, record `taskId` and map it to `tokenName`."
  }, {
    heading: "status-codes",
    content: "`201`"
  }, {
    heading: "status-codes",
    content: "The service is already running. Do not repeat the `start` request with the same `tokenName`."
  }, {
    heading: "status-codes",
    content: "`206`"
  }, {
    heading: "status-codes",
    content: "No host in the channel sent a stream during the transcribing process."
  }, {
    heading: "status-codes",
    content: "`400`"
  }, {
    heading: "status-codes",
    content: "The server cannot process the request due to malformed request syntax, or the Real-Time STT service is not enabled."
  }, {
    heading: "status-codes",
    content: "`401`"
  }, {
    heading: "status-codes",
    content: "Unauthorized (incorrect Customer ID/Customer Secret)."
  }, {
    heading: "status-codes",
    content: "`404`"
  }, {
    heading: "status-codes",
    content: "The requested resource could not be found."
  }, {
    heading: "status-codes",
    content: "`409`"
  }, {
    heading: "status-codes",
    content: "The task has already been started."
  }, {
    heading: "status-codes",
    content: "`500`"
  }, {
    heading: "status-codes",
    content: "Internal server error."
  }, {
    heading: "status-codes",
    content: "`504`"
  }, {
    heading: "status-codes",
    content: "Internal communication error."
  }, {
    heading: "message",
    content: '`"the product name does not match with builderToken"`: The acquired `buildToken` has an issue. Call `acquire` again.'
  }, {
    heading: "message",
    content: '`"resourceId reaches out the limited time interval!"`: The `buildToken` expired after the 5-minute validity period. Make sure to use `tokenName` to start the service within 5 minutes after calling `acquire`. When the task has been created successfully, save the `tokenName`, since it will be used to call `query`, `update`, and `stop`.'
  }, {
    heading: "message",
    content: '`"invalid_appid!"`: The Real-Time STT service is not enabled for your app. Enable it in the Console or send a request to Agora technical support.'
  }, {
    heading: "message",
    content: '`"body schema check fail, ..."`: The `start` or `update` body is wrong. `"..."` describes the reason of failure. Always caused by parameter mismatch or exceeding the range. Recheck the request body.'
  }, {
    heading: "message",
    content: '`"The taskId does not match with builderToken."`: Check why `taskId` and `tokenName` do not match.'
  }, {
    heading: "message",
    content: '`"The task is not found"`: The task has been terminated.'
  }, {
    heading: "message",
    content: '`"The task has been started, current status is STARTED, taskId is ..."`: The task has been started. Record `taskId` and map it to `tokenName`.'
  }, {
    heading: "error-code",
    content: "`1`: Internal server error when calling `start`. Contact Agora technical support if you need more support."
  }, {
    heading: "error-code",
    content: "`2`: Invalid parameter. Possible reasons:"
  }, {
    heading: "error-code",
    content: "Wrong data type."
  }, {
    heading: "error-code",
    content: "Wrong spelling. All parameters are case sensitive."
  }, {
    heading: "error-code",
    content: "Parameter value is out of range."
  }, {
    heading: "error-code",
    content: "Mandatory parameter is missing."
  }, {
    heading: "error-code",
    content: "`6`: Internal server error when calling `start`. Contact Agora technical support if you need more support."
  }, {
    heading: "error-code",
    content: "`20`: Caused by processing timeout. Retry the same call with the back-off strategy, after 3 and 6 seconds."
  }, {
    heading: "error-code",
    content: "`23`: Internal server error when calling `start`. Contact Agora technical support if you need more support."
  }, {
    heading: "error-code",
    content: "`49`: Caused by repeated `start` requests with the same `tokenName` or repeated `stop` requests with the same `tokenName` and `taskId`."
  }, {
    heading: "error-code",
    content: "`53`: `taskid` and `buildtoken` do not match."
  }, {
    heading: "error-code",
    content: "`62`: If you receive this error when calling `acquire`, the Real-Time STT service is not enabled for your App ID. Enable it in the Console or contact Agora technical support. If you receive this error when calling `start`, it means the service is not started due to a network issue."
  }, {
    heading: "error-code",
    content: "`404`: The task has been terminated when calling `query` or `stop`."
  }, {
    heading: "error-code",
    content: "`501`: Internal server error when calling `start`. Agora recommends retrying with a back-off strategy, for example waiting 1 second before the first retry, 3 seconds before the second, and 6 seconds before the third."
  }, {
    heading: "error-code",
    content: "`502`: Internal server error when calling `start`. Agora recommends retrying with a back-off strategy, for example waiting 1 second before the first retry, 3 seconds before the second, and 6 seconds before the third."
  }, {
    heading: "error-code",
    content: "`504`: Internal server error when calling `start`. Agora recommends retrying with a back-off strategy, for example waiting 1 second before the first retry, 3 seconds before the second, and 6 seconds before the third."
  }, {
    heading: "error-code",
    content: "`1001`: Failed to parse `tokenName`. Call `acquire` to get a new `tokenName`."
  }, {
    heading: "error-code",
    content: "`1003`: The App ID or `taskId` does not match `tokenName`. Ensure that the App ID or `taskId` matches `tokenName` in each Real-Time STT task."
  }, {
    heading: "notes",
    content: "The `resourceId` and `tokenName` parameters are the same. In some cases, `builderToken` also means `tokenName`."
  }, {
    heading: "notes",
    content: "Contact Agora technical support if you encounter an error not mentioned in this documentation."
  }],
  headings: [{
    id: "response-status-codes",
    content: "Response status codes"
  }, {
    id: "response-examples",
    content: "Response examples"
  }, {
    id: "status-codes",
    content: "Status codes"
  }, {
    id: "error-messages-and-codes",
    content: "Error messages and codes"
  }, {
    id: "message",
    content: "Message"
  }, {
    id: "error-code",
    content: "Error code"
  }, {
    id: "notes",
    content: "Notes"
  }]
};
export let toc = [{
  depth: 3,
  url: "#response-status-codes",
  title: _jsx(_Fragment, {
    children: "Response status codes"
  })
}, {
  depth: 3,
  url: "#response-examples",
  title: _jsx(_Fragment, {
    children: "Response examples"
  })
}, {
  depth: 3,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#error-messages-and-codes",
  title: _jsx(_Fragment, {
    children: "Error messages and codes"
  })
}, {
  depth: 4,
  url: "#message",
  title: _jsx(_Fragment, {
    children: "Message"
  })
}, {
  depth: 4,
  url: "#error-code",
  title: _jsx(_Fragment, {
    children: "Error code"
  })
}, {
  depth: 3,
  url: "#notes",
  title: _jsx(_Fragment, {
    children: "Notes"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    h4: "h4",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["This page lists the error and status codes you may encounter when using the Real-Time STT RESTful APIs. In case of other errors, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora technical support"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "response-status-codes",
      children: "Response status codes"
    }), `
`, _jsx(_components.p, {
      children: "When calling Real-Time STT RESTful APIs, you may receive the following HTTP status codes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "200"
        }), " for a successful request."]
      }), `
`, _jsxs(_components.li, {
        children: ["Not ", _jsx(_components.code, {
          children: "200"
        }), " for a failed request. In this case, check the ", _jsx(_components.code, {
          children: "message"
        }), ", ", _jsx(_components.code, {
          children: "code"
        }), ", and ", _jsx(_components.code, {
          children: "reason"
        }), " fields in the response body to figure out what has happened. The ", _jsx(_components.code, {
          children: "reason"
        }), " field might be absent."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "response-examples",
      children: "Response examples"
    }), `
`, _jsx(_components.p, {
      children: "When a request fails, you may receive the following response:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Only ", _jsx(_components.code, {
            children: "message"
          }), ":"]
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
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "# "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "401"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " Unauthorized"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "# only message"
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
                  children: '"Invalid authentication credentials"'
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
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Only ", _jsx(_components.code, {
            children: "code"
          }), " and ", _jsx(_components.code, {
            children: "reason"
          }), ":"]
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
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "# "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "400"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " Bad Request"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "# only code and reason"
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
                  children: '  "code"'
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
                  children: "2"
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
                  children: '  "reason"'
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
                  children: '"Acquire: invalid resourceExpiredHour value!"'
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "status-codes",
      children: "Status codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Code"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "200"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The request is successful. To call ", _jsx(_components.code, {
              children: "acquire"
            }), ", record ", _jsx(_components.code, {
              children: "tokenName"
            }), ". To call ", _jsx(_components.code, {
              children: "start"
            }), ", record ", _jsx(_components.code, {
              children: "taskId"
            }), " and map it to ", _jsx(_components.code, {
              children: "tokenName"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "201"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The service is already running. Do not repeat the ", _jsx(_components.code, {
              children: "start"
            }), " request with the same ", _jsx(_components.code, {
              children: "tokenName"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "206"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No host in the channel sent a stream during the transcribing process."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The server cannot process the request due to malformed request syntax, or the Real-Time STT service is not enabled."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unauthorized (incorrect Customer ID/Customer Secret)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The requested resource could not be found."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "409"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The task has already been started."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "500"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "504"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal communication error."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "error-messages-and-codes",
      children: "Error messages and codes"
    }), `
`, _jsx(_components.h4, {
      id: "message",
      children: "Message"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"the product name does not match with builderToken"'
        }), ": The acquired ", _jsx(_components.code, {
          children: "buildToken"
        }), " has an issue. Call ", _jsx(_components.code, {
          children: "acquire"
        }), " again."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"resourceId reaches out the limited time interval!"'
        }), ": The ", _jsx(_components.code, {
          children: "buildToken"
        }), " expired after the 5-minute validity period. Make sure to use ", _jsx(_components.code, {
          children: "tokenName"
        }), " to start the service within 5 minutes after calling ", _jsx(_components.code, {
          children: "acquire"
        }), ". When the task has been created successfully, save the ", _jsx(_components.code, {
          children: "tokenName"
        }), ", since it will be used to call ", _jsx(_components.code, {
          children: "query"
        }), ", ", _jsx(_components.code, {
          children: "update"
        }), ", and ", _jsx(_components.code, {
          children: "stop"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"invalid_appid!"'
        }), ": The Real-Time STT service is not enabled for your app. Enable it in the Console or send a request to ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "Agora technical support"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"body schema check fail, ..."'
        }), ": The ", _jsx(_components.code, {
          children: "start"
        }), " or ", _jsx(_components.code, {
          children: "update"
        }), " body is wrong. ", _jsx(_components.code, {
          children: '"..."'
        }), " describes the reason of failure. Always caused by parameter mismatch or exceeding the range. Recheck the request body."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"The taskId does not match with builderToken."'
        }), ": Check why ", _jsx(_components.code, {
          children: "taskId"
        }), " and ", _jsx(_components.code, {
          children: "tokenName"
        }), " do not match."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"The task is not found"'
        }), ": The task has been terminated."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"The task has been started, current status is STARTED, taskId is ..."'
        }), ": The task has been started. Record ", _jsx(_components.code, {
          children: "taskId"
        }), " and map it to ", _jsx(_components.code, {
          children: "tokenName"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "error-code",
      children: "Error code"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "1"
        }), ": Internal server error when calling ", _jsx(_components.code, {
          children: "start"
        }), ". Contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "Agora technical support"
        }), " if you need more support."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "2"
        }), ": Invalid parameter. Possible reasons:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Wrong data type."
          }), `
`, _jsx(_components.li, {
            children: "Wrong spelling. All parameters are case sensitive."
          }), `
`, _jsx(_components.li, {
            children: "Parameter value is out of range."
          }), `
`, _jsx(_components.li, {
            children: "Mandatory parameter is missing."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "6"
        }), ": Internal server error when calling ", _jsx(_components.code, {
          children: "start"
        }), ". Contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "Agora technical support"
        }), " if you need more support."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "20"
        }), ": Caused by processing timeout. Retry the same call with the back-off strategy, after 3 and 6 seconds."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "23"
        }), ": Internal server error when calling ", _jsx(_components.code, {
          children: "start"
        }), ". Contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "Agora technical support"
        }), " if you need more support."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "49"
        }), ": Caused by repeated ", _jsx(_components.code, {
          children: "start"
        }), " requests with the same ", _jsx(_components.code, {
          children: "tokenName"
        }), " or repeated ", _jsx(_components.code, {
          children: "stop"
        }), " requests with the same ", _jsx(_components.code, {
          children: "tokenName"
        }), " and ", _jsx(_components.code, {
          children: "taskId"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "53"
        }), ": ", _jsx(_components.code, {
          children: "taskid"
        }), " and ", _jsx(_components.code, {
          children: "buildtoken"
        }), " do not match."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "62"
        }), ": If you receive this error when calling ", _jsx(_components.code, {
          children: "acquire"
        }), ", the Real-Time STT service is not enabled for your App ID. Enable it in the Console or contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "Agora technical support"
        }), ". If you receive this error when calling ", _jsx(_components.code, {
          children: "start"
        }), ", it means the service is not started due to a network issue."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "404"
        }), ": The task has been terminated when calling ", _jsx(_components.code, {
          children: "query"
        }), " or ", _jsx(_components.code, {
          children: "stop"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "501"
        }), ": Internal server error when calling ", _jsx(_components.code, {
          children: "start"
        }), ". Agora recommends retrying with a back-off strategy, for example waiting 1 second before the first retry, 3 seconds before the second, and 6 seconds before the third."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "502"
        }), ": Internal server error when calling ", _jsx(_components.code, {
          children: "start"
        }), ". Agora recommends retrying with a back-off strategy, for example waiting 1 second before the first retry, 3 seconds before the second, and 6 seconds before the third."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "504"
        }), ": Internal server error when calling ", _jsx(_components.code, {
          children: "start"
        }), ". Agora recommends retrying with a back-off strategy, for example waiting 1 second before the first retry, 3 seconds before the second, and 6 seconds before the third."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "1001"
        }), ": Failed to parse ", _jsx(_components.code, {
          children: "tokenName"
        }), ". Call ", _jsx(_components.code, {
          children: "acquire"
        }), " to get a new ", _jsx(_components.code, {
          children: "tokenName"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "1003"
        }), ": The App ID or ", _jsx(_components.code, {
          children: "taskId"
        }), " does not match ", _jsx(_components.code, {
          children: "tokenName"
        }), ". Ensure that the App ID or ", _jsx(_components.code, {
          children: "taskId"
        }), " matches ", _jsx(_components.code, {
          children: "tokenName"
        }), " in each Real-Time STT task."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "notes",
      children: "Notes"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "resourceId"
        }), " and ", _jsx(_components.code, {
          children: "tokenName"
        }), " parameters are the same. In some cases, ", _jsx(_components.code, {
          children: "builderToken"
        }), " also means ", _jsx(_components.code, {
          children: "tokenName"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "Agora technical support"
        }), " if you encounter an error not mentioned in this documentation."]
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
