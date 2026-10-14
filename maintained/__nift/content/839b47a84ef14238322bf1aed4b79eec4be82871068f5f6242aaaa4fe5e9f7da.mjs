import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Stream transfer",
  description: "Media Broadcast RESTful API reference."
};
export let _markdown = `

Stream transfer allows Agora to forward a live stream to third-party platforms. With this feature, your app users can publish their live streams on a number of social platforms.

<div class="alert info">
  Stream transfer is also known as Rebroadcasting, Restreaming or RTMP Passthrough.
</div>

## Set transfer configuration [#set-transfer-configuration]

Sets the transfer configuration for an entry point.

### HTTP request [#http-request]

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/transfer
\`\`\`

#### Path parameter [#path-parameter]

| Parameter     | Type   | Description                                        |
| :------------ | :----- | :------------------------------------------------- |
| \`appid\`       | String | Required. The App ID retrieved from Agora Console. |
| \`entry_point\` | String | Required. The entry point name.                    |

#### Request body [#request-body]

The request body is in the JSON Object type and contains the following fields:

| Field         | Type   | Description                                                                                                                                                                                                                         |
| :------------ | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`enabled\`     | Bool   | Optional. Whether to enable the transfer function:- \`true\`: Enable the transfer function.

- \`false\`: (Default) Disable the transfer function.                                                                                      |
| \`callbackUrl\` | String | Optional. Your callback URL. If you enable the transfer function, Agora sends requests to this URL to get the platform addresses where the live stream are published. For details, see [Transfer callback requirements](#callback). |

### HTTP response [#http-response]

If the returned HTTP status code is 200, the request is successful.

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code ](#http-code)for possible reasons.

### Example [#example]

**Request line**

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/transfer HTTP/1.1
\`\`\`

**Request body**

\`\`\`json
{
    "enabled": true,
    "callbackUrl": "https://example.transfer.com/callback"
}
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

## Get transfer configuration [#get-transfer-configuration]

Gets the transfer configuration for an entry point.

### HTTP request [#http-request-1]

\`\`\`bash
GET https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/transfer
\`\`\`

#### Path parameter [#path-parameter-1]

| Parameter     | Type   | Description                                        |
| :------------ | :----- | :------------------------------------------------- |
| \`appid\`       | String | Required. The App ID retrieved from Agora Console. |
| \`entry_point\` | String | Required. The entry point name.                    |

### HTTP response [#http-response-1]

If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:

| Field         | Type   | Description                                                                                                                                                                                                               |
| :------------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`enabled\`     | Bool   | Whether the transfer function is enabled:- \`true\`: The transfer function is enabled.

- \`false\`: The transfer function is disabled.                                                                                       |
| \`callbackUrl\` | String | Your callback URL. If you enable the transfer function, Agora sends requests to this URL to get the platform addresses where the live stream are published. For details, see [Transfer callback requirements](#callback). |

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code ](#http-code)for possible reasons.

### Example [#example-1]

**Request line**

\`\`\`bash
GET https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/transfer HTTP/1.1
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

**Request body**

\`\`\`json
{
  "enabled": true,
  "callbackUrl": "https://example.transfer.com/callback"
}
\`\`\`

<a name="callback" />

## Transfer callback requirements [#transfer-callback-requirements]

If you specify \`callbackUrl\` when calling the [Set transfer configuration](#patch) API, Agora sends requests to this URL to get the platform addresses where the live stream are published. The request sent by Agora has the following format:

\`\`\`bash
POST https://example.transfer.com/callback?entry_point={entry_point}&stream_name={stream_name} HTTP/1.1
\`\`\`

Where \`entry_point\` is the name of the entry point, and \`stream_name\` is the name of the live \`stream\`.

For such a request, the HTTP response you return must meet the following requirements:

* The response is in JSON format.
* If the request succeeds, the HTTP status code is 200.
* The target addresses are included in the \`transferUrls\` field in the response body:
  \`\`\`json
  {
      "transferUrls": [
          "rtmp://cdna.example.com/live/testedge",
          "rtmp://cdnb.example.com/live/testedge"
      ]
  }
  \`\`\`

After receiving your HTTP response, Agora starts forwarding the live stream to the specified third-party platforms.

<a name="http-code" />

## HTTP status code [#http-status-code]

| Status code | Description                                                                                                                                              |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200         | The request succeeds.                                                                                                                                    |
| 400         | The parameter is invalid, for example the \`appid\` or the \`entry_point\` is empty, or the \`region\` parameter value is invalid.                             |
| 401         | Unauthorized (the customer ID and the customer secret do not match).                                                                                     |
| 404         | The server cannot find the resource according to the request, which means the requested entry point does not exist or the requested URI path is invalid. |
| 500         | An internal error occurs in the server, so the server is not able to complete the request.                                                               |
| 504         | An internal error occurs in the server. The gateway or the proxy server did not receive a timely request from the remote server.                         |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Stream transfer allows Agora to forward a live stream to third-party platforms. With this feature, your app users can publish their live streams on a number of social platforms."
  }, {
    heading: "set-transfer-configuration",
    content: "Sets the transfer configuration for an entry point."
  }, {
    heading: "path-parameter",
    content: "Parameter"
  }, {
    heading: "path-parameter",
    content: "Type"
  }, {
    heading: "path-parameter",
    content: "Description"
  }, {
    heading: "path-parameter",
    content: "`appid`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "Required. The App ID retrieved from Agora Console."
  }, {
    heading: "path-parameter",
    content: "`entry_point`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "Required. The entry point name."
  }, {
    heading: "request-body",
    content: "The request body is in the JSON Object type and contains the following fields:"
  }, {
    heading: "request-body",
    content: "Field"
  }, {
    heading: "request-body",
    content: "Type"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`enabled`"
  }, {
    heading: "request-body",
    content: "Bool"
  }, {
    heading: "request-body",
    content: "Optional. Whether to enable the transfer function:- `true`: Enable the transfer function.\n\n- `false`: (Default) Disable the transfer function."
  }, {
    heading: "request-body",
    content: "`callbackUrl`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "Optional. Your callback URL. If you enable the transfer function, Agora sends requests to this URL to get the platform addresses where the live stream are published. For details, see Transfer callback requirements."
  }, {
    heading: "http-response",
    content: "If the returned HTTP status code is 200, the request is successful."
  }, {
    heading: "http-response",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to the HTTP status code for possible reasons."
  }, {
    heading: "example",
    content: "**Request line**"
  }, {
    heading: "example",
    content: "**Request body**"
  }, {
    heading: "example",
    content: "**Response line**"
  }, {
    heading: "get-transfer-configuration",
    content: "Gets the transfer configuration for an entry point."
  }, {
    heading: "path-parameter-1",
    content: "Parameter"
  }, {
    heading: "path-parameter-1",
    content: "Type"
  }, {
    heading: "path-parameter-1",
    content: "Description"
  }, {
    heading: "path-parameter-1",
    content: "`appid`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "Required. The App ID retrieved from Agora Console."
  }, {
    heading: "path-parameter-1",
    content: "`entry_point`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "Required. The entry point name."
  }, {
    heading: "http-response-1",
    content: "If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:"
  }, {
    heading: "http-response-1",
    content: "Field"
  }, {
    heading: "http-response-1",
    content: "Type"
  }, {
    heading: "http-response-1",
    content: "Description"
  }, {
    heading: "http-response-1",
    content: "`enabled`"
  }, {
    heading: "http-response-1",
    content: "Bool"
  }, {
    heading: "http-response-1",
    content: "Whether the transfer function is enabled:- `true`: The transfer function is enabled.\n\n- `false`: The transfer function is disabled."
  }, {
    heading: "http-response-1",
    content: "`callbackUrl`"
  }, {
    heading: "http-response-1",
    content: "String"
  }, {
    heading: "http-response-1",
    content: "Your callback URL. If you enable the transfer function, Agora sends requests to this URL to get the platform addresses where the live stream are published. For details, see Transfer callback requirements."
  }, {
    heading: "http-response-1",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to the HTTP status code for possible reasons."
  }, {
    heading: "example-1",
    content: "**Request line**"
  }, {
    heading: "example-1",
    content: "**Response line**"
  }, {
    heading: "example-1",
    content: "**Request body**"
  }, {
    heading: "transfer-callback-requirements",
    content: "If you specify `callbackUrl` when calling the Set transfer configuration API, Agora sends requests to this URL to get the platform addresses where the live stream are published. The request sent by Agora has the following format:"
  }, {
    heading: "transfer-callback-requirements",
    content: "Where `entry_point` is the name of the entry point, and `stream_name` is the name of the live `stream`."
  }, {
    heading: "transfer-callback-requirements",
    content: "For such a request, the HTTP response you return must meet the following requirements:"
  }, {
    heading: "transfer-callback-requirements",
    content: "The response is in JSON format."
  }, {
    heading: "transfer-callback-requirements",
    content: "If the request succeeds, the HTTP status code is 200."
  }, {
    heading: "transfer-callback-requirements",
    content: "The target addresses are included in the `transferUrls` field in the response body:"
  }, {
    heading: "transfer-callback-requirements",
    content: "After receiving your HTTP response, Agora starts forwarding the live stream to the specified third-party platforms."
  }, {
    heading: "http-status-code",
    content: "Status code"
  }, {
    heading: "http-status-code",
    content: "Description"
  }, {
    heading: "http-status-code",
    content: "200"
  }, {
    heading: "http-status-code",
    content: "The request succeeds."
  }, {
    heading: "http-status-code",
    content: "400"
  }, {
    heading: "http-status-code",
    content: "The parameter is invalid, for example the `appid` or the `entry_point` is empty, or the `region` parameter value is invalid."
  }, {
    heading: "http-status-code",
    content: "401"
  }, {
    heading: "http-status-code",
    content: "Unauthorized (the customer ID and the customer secret do not match)."
  }, {
    heading: "http-status-code",
    content: "404"
  }, {
    heading: "http-status-code",
    content: "The server cannot find the resource according to the request, which means the requested entry point does not exist or the requested URI path is invalid."
  }, {
    heading: "http-status-code",
    content: "500"
  }, {
    heading: "http-status-code",
    content: "An internal error occurs in the server, so the server is not able to complete the request."
  }, {
    heading: "http-status-code",
    content: "504"
  }, {
    heading: "http-status-code",
    content: "An internal error occurs in the server. The gateway or the proxy server did not receive a timely request from the remote server."
  }],
  headings: [{
    id: "set-transfer-configuration",
    content: "Set transfer configuration"
  }, {
    id: "http-request",
    content: "HTTP request"
  }, {
    id: "path-parameter",
    content: "Path parameter"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "http-response",
    content: "HTTP response"
  }, {
    id: "example",
    content: "Example"
  }, {
    id: "get-transfer-configuration",
    content: "Get transfer configuration"
  }, {
    id: "http-request-1",
    content: "HTTP request"
  }, {
    id: "path-parameter-1",
    content: "Path parameter"
  }, {
    id: "http-response-1",
    content: "HTTP response"
  }, {
    id: "example-1",
    content: "Example"
  }, {
    id: "transfer-callback-requirements",
    content: "Transfer callback requirements"
  }, {
    id: "http-status-code",
    content: "HTTP status code"
  }]
};
export let toc = [{
  depth: 2,
  url: "#set-transfer-configuration",
  title: _jsx(_Fragment, {
    children: "Set transfer configuration"
  })
}, {
  depth: 3,
  url: "#http-request",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 3,
  url: "#http-response",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 3,
  url: "#example",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#get-transfer-configuration",
  title: _jsx(_Fragment, {
    children: "Get transfer configuration"
  })
}, {
  depth: 3,
  url: "#http-request-1",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-1",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 3,
  url: "#http-response-1",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 3,
  url: "#example-1",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#transfer-callback-requirements",
  title: _jsx(_Fragment, {
    children: "Transfer callback requirements"
  })
}, {
  depth: 2,
  url: "#http-status-code",
  title: _jsx(_Fragment, {
    children: "HTTP status code"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
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
      children: "Stream transfer allows Agora to forward a live stream to third-party platforms. With this feature, your app users can publish their live streams on a number of social platforms."
    }), `
`, _jsx("div", {
      class: "alert info",
      children: "Stream transfer is also known as Rebroadcasting, Restreaming or RTMP Passthrough."
    }), `
`, _jsx(_components.h2, {
      id: "set-transfer-configuration",
      children: "Set transfer configuration"
    }), `
`, _jsx(_components.p, {
      children: "Sets the transfer configuration for an entry point."
    }), `
`, _jsx(_components.h3, {
      id: "http-request",
      children: "HTTP request"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "PATCH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/transfer"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter",
      children: "Path parameter"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
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
              children: "appid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required. The App ID retrieved from Agora Console."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "entry_point"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required. The entry point name."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "The request body is in the JSON Object type and contains the following fields:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Field"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
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
              children: "enabled"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bool"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "Optional. Whether to enable the transfer function:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "true"
                  }), ": Enable the transfer function."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "false"
                  }), ": (Default) Disable the transfer function."]
                }), `
`]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "callbackUrl"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Optional. Your callback URL. If you enable the transfer function, Agora sends requests to this URL to get the platform addresses where the live stream are published. For details, see ", _jsx(_components.a, {
              href: "#callback",
              children: "Transfer callback requirements"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsx(_components.p, {
      children: "If the returned HTTP status code is 200, the request is successful."
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to the ", _jsx(_components.a, {
        href: "#http-code",
        children: "HTTP status code "
      }), "for possible reasons."]
    }), `
`, _jsx(_components.h3, {
      id: "example",
      children: "Example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request line"
      })
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "PATCH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/transfer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " HTTP/1.1"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request body"
      })
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
              children: '    "enabled"'
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
              children: '    "callbackUrl"'
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
              children: '"https://example.transfer.com/callback"'
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
      children: _jsx(_components.strong, {
        children: "Response line"
      })
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "HTTP/1.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 200"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " OK"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "get-transfer-configuration",
      children: "Get transfer configuration"
    }), `
`, _jsx(_components.p, {
      children: "Gets the transfer configuration for an entry point."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-1",
      children: "HTTP request"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/transfer"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-1",
      children: "Path parameter"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
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
              children: "appid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required. The App ID retrieved from Agora Console."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "entry_point"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required. The entry point name."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-1",
      children: "HTTP response"
    }), `
`, _jsx(_components.p, {
      children: "If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Field"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
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
              children: "enabled"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bool"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "Whether the transfer function is enabled:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "true"
                  }), ": The transfer function is enabled."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "false"
                  }), ": The transfer function is disabled."]
                }), `
`]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "callbackUrl"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Your callback URL. If you enable the transfer function, Agora sends requests to this URL to get the platform addresses where the live stream are published. For details, see ", _jsx(_components.a, {
              href: "#callback",
              children: "Transfer callback requirements"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to the ", _jsx(_components.a, {
        href: "#http-code",
        children: "HTTP status code "
      }), "for possible reasons."]
    }), `
`, _jsx(_components.h3, {
      id: "example-1",
      children: "Example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request line"
      })
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/transfer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " HTTP/1.1"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response line"
      })
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "HTTP/1.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 200"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " OK"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request body"
      })
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
              children: '  "enabled"'
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
              children: '  "callbackUrl"'
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
              children: '"https://example.transfer.com/callback"'
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
`, _jsx("a", {
      name: "callback"
    }), `
`, _jsx(_components.h2, {
      id: "transfer-callback-requirements",
      children: "Transfer callback requirements"
    }), `
`, _jsxs(_components.p, {
      children: ["If you specify ", _jsx(_components.code, {
        children: "callbackUrl"
      }), " when calling the ", _jsx(_components.a, {
        href: "#patch",
        children: "Set transfer configuration"
      }), " API, Agora sends requests to this URL to get the platform addresses where the live stream are published. The request sent by Agora has the following format:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://example.transfer.com/callback?entry_point={entry_point}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&stream_name"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "stream_name}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " HTTP/1.1"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Where ", _jsx(_components.code, {
        children: "entry_point"
      }), " is the name of the entry point, and ", _jsx(_components.code, {
        children: "stream_name"
      }), " is the name of the live ", _jsx(_components.code, {
        children: "stream"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "For such a request, the HTTP response you return must meet the following requirements:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The response is in JSON format."
      }), `
`, _jsx(_components.li, {
        children: "If the request succeeds, the HTTP status code is 200."
      }), `
`, _jsxs(_components.li, {
        children: ["The target addresses are included in the ", _jsx(_components.code, {
          children: "transferUrls"
        }), " field in the response body:", `
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
                  children: '    "transferUrls"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "rtmp://cdna.example.com/live/testedge"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "rtmp://cdnb.example.com/live/testedge"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ]"
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
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "After receiving your HTTP response, Agora starts forwarding the live stream to the specified third-party platforms."
    }), `
`, _jsx("a", {
      name: "http-code"
    }), `
`, _jsx(_components.h2, {
      id: "http-status-code",
      children: "HTTP status code"
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
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "200"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request succeeds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The parameter is invalid, for example the ", _jsx(_components.code, {
              children: "appid"
            }), " or the ", _jsx(_components.code, {
              children: "entry_point"
            }), " is empty, or the ", _jsx(_components.code, {
              children: "region"
            }), " parameter value is invalid."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "401"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unauthorized (the customer ID and the customer secret do not match)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "404"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The server cannot find the resource according to the request, which means the requested entry point does not exist or the requested URI path is invalid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "500"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An internal error occurs in the server, so the server is not able to complete the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "504"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An internal error occurs in the server. The gateway or the proxy server did not receive a timely request from the remote server."
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
