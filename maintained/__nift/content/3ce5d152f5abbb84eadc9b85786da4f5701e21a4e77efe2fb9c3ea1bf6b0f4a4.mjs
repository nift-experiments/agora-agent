import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Standard snapshot and moderation",
  description: "Media Broadcast RESTful API reference."
};
export let _markdown = `

<CalloutContainer type="info">
  <CalloutDescription>
    Custom snapshot and moderation enables you to use third-party cloud storage services, while standard snapshot and moderation does not.
  </CalloutDescription>
</CalloutContainer>

## Set standard snapshot configuration [#set-standard-snapshot-configuration]

Sets the standard snapshot configuration for all live streams under an entry point, including the interval of snapshot capturing and whether to enable content moderation.

### HTTP request [#http-request]

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/snapshot/standard/regions/{region}
\`\`\`

#### Path parameter [#path-parameter]

| Parameter     | Type   | Description                                             |
| :------------ | :----- | :------------------------------------------------------ |
| \`appid\`       | String | Required. The App ID retrieved from Agora Console.      |
| \`entry_point\` | String | Required. The entry point name.                         |
| \`region\`      | String | Required. The configured region when adding the domain. |

#### Request body [#request-body]

The request body is in the JSON Object type, and contains the following fields:

| Field              | Type    | Description                                                                                                                              |
| :----------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| \`enabled\`          | Bool    | Required. Whether to enable the snapshot capturing function:- \`true\`: Enable snapshot capturing.

- \`false\`: Disable snapshot capturing. |
| \`snapshotInterval\` | Integer | Optional. The interval between snapshot capturings, in seconds. The default value is 10, and the value range is \\[5,300].                |
| \`enableModeration\` | Bool    | Optional. Whether to enable content moderation:- \`true\`: Enable content moderation.

- \`false\`: (default) Disable content moderation.    |

### HTTP response [#http-response]

If the returned HTTP status code is 200, the request is successful.

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code ](#http-code)for possible reasons.

### Example [#example]

**Request line**

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/snapshot/standard/regions/cn HTTP/1.1
\`\`\`

**Request body**

\`\`\`json
{
    "enabled": true,
    "enableModeration": true,
    "snapshotInterval": 30
}
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

## Get standard snapshot configuration [#get-standard-snapshot-configuration]

Gets the standard snapshot configuration of an entry point.

### HTTP request [#http-request-1]

\`\`\`bash
GET https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/snapshot/standard/regions/{region}
\`\`\`

#### Path parameter [#path-parameter-1]

| Parameter     | Type   | Description                                             |
| :------------ | :----- | :------------------------------------------------------ |
| \`appid\`       | String | Required. The App ID retrieved from Agora Console.      |
| \`entry_point\` | String | Required. The entry point name.                         |
| \`region\`      | String | Required. The configured region when adding the domain. |

### HTTP response [#http-response-1]

If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:

| Field              | Type    | Description                                                                                                                             |
| :----------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| \`enabled\`          | Bool    | Whether the snapshot capturing function is enabled:- \`true\`: Snapshot capturing is enabled.

- \`false\`: Snapshot capturing is disabled. |
| \`snapshotInterval\` | Integer | The interval between snapshot capturings, in seconds. The default value is 10, and the value range is \\[5,300].                         |
| \`enableModeration\` | Bool    | Whether content moderation is enabled:- \`true\`: Content moderation is enabled.

- \`false\`: Content moderation is not enabled.           |

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code ](#http-code)for possible reasons.

### Example [#example-1]

**Request line**

\`\`\`bash
GET https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/snapshot/standard/regions/cn HTTP/1.1
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

**Request body**

\`\`\`json
{
  "enabled": true,
  "enableModeration": true,
  "snapshotInterval": 30
}
\`\`\`

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
    content: "Custom snapshot and moderation enables you to use third-party cloud storage services, while standard snapshot and moderation does not."
  }, {
    heading: "set-standard-snapshot-configuration",
    content: "Sets the standard snapshot configuration for all live streams under an entry point, including the interval of snapshot capturing and whether to enable content moderation."
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
    heading: "path-parameter",
    content: "`region`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "Required. The configured region when adding the domain."
  }, {
    heading: "request-body",
    content: "The request body is in the JSON Object type, and contains the following fields:"
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
    content: "Required. Whether to enable the snapshot capturing function:- `true`: Enable snapshot capturing.\n\n- `false`: Disable snapshot capturing."
  }, {
    heading: "request-body",
    content: "`snapshotInterval`"
  }, {
    heading: "request-body",
    content: "Integer"
  }, {
    heading: "request-body",
    content: "Optional. The interval between snapshot capturings, in seconds. The default value is 10, and the value range is \\[5,300]."
  }, {
    heading: "request-body",
    content: "`enableModeration`"
  }, {
    heading: "request-body",
    content: "Bool"
  }, {
    heading: "request-body",
    content: "Optional. Whether to enable content moderation:- `true`: Enable content moderation.\n\n- `false`: (default) Disable content moderation."
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
    heading: "get-standard-snapshot-configuration",
    content: "Gets the standard snapshot configuration of an entry point."
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
    heading: "path-parameter-1",
    content: "`region`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "Required. The configured region when adding the domain."
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
    content: "Whether the snapshot capturing function is enabled:- `true`: Snapshot capturing is enabled.\n\n- `false`: Snapshot capturing is disabled."
  }, {
    heading: "http-response-1",
    content: "`snapshotInterval`"
  }, {
    heading: "http-response-1",
    content: "Integer"
  }, {
    heading: "http-response-1",
    content: "The interval between snapshot capturings, in seconds. The default value is 10, and the value range is \\[5,300]."
  }, {
    heading: "http-response-1",
    content: "`enableModeration`"
  }, {
    heading: "http-response-1",
    content: "Bool"
  }, {
    heading: "http-response-1",
    content: "Whether content moderation is enabled:- `true`: Content moderation is enabled.\n\n- `false`: Content moderation is not enabled."
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
    id: "set-standard-snapshot-configuration",
    content: "Set standard snapshot configuration"
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
    id: "get-standard-snapshot-configuration",
    content: "Get standard snapshot configuration"
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
    id: "http-status-code",
    content: "HTTP status code"
  }]
};
export let toc = [{
  depth: 2,
  url: "#set-standard-snapshot-configuration",
  title: _jsx(_Fragment, {
    children: "Set standard snapshot configuration"
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
  url: "#get-standard-snapshot-configuration",
  title: _jsx(_Fragment, {
    children: "Get standard snapshot configuration"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Custom snapshot and moderation enables you to use third-party cloud storage services, while standard snapshot and moderation does not."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "set-standard-snapshot-configuration",
      children: "Set standard snapshot configuration"
    }), `
`, _jsx(_components.p, {
      children: "Sets the standard snapshot configuration for all live streams under an entry point, including the interval of snapshot capturing and whether to enable content moderation."
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
              children: " https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/snapshot/standard/regions/{region}"
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
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
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
            children: "Required. The configured region when adding the domain."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "The request body is in the JSON Object type, and contains the following fields:"
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
              children: "Required. Whether to enable the snapshot capturing function:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "true"
                  }), ": Enable snapshot capturing."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "false"
                  }), ": Disable snapshot capturing."]
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
              children: "snapshotInterval"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional. The interval between snapshot capturings, in seconds. The default value is 10, and the value range is [5,300]."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "enableModeration"
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
              children: "Optional. Whether to enable content moderation:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "true"
                  }), ": Enable content moderation."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "false"
                  }), ": (default) Disable content moderation."]
                }), `
`]
              }), `
`]
            })]
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
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/snapshot/standard/regions/cn"
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
              children: '    "enableModeration"'
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
              children: '    "snapshotInterval"'
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
              children: "30"
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
      id: "get-standard-snapshot-configuration",
      children: "Get standard snapshot configuration"
    }), `
`, _jsx(_components.p, {
      children: "Gets the standard snapshot configuration of an entry point."
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
              children: " https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/snapshot/standard/regions/{region}"
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
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
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
            children: "Required. The configured region when adding the domain."
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
              children: "Whether the snapshot capturing function is enabled:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "true"
                  }), ": Snapshot capturing is enabled."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "false"
                  }), ": Snapshot capturing is disabled."]
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
              children: "snapshotInterval"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The interval between snapshot capturings, in seconds. The default value is 10, and the value range is [5,300]."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "enableModeration"
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
              children: "Whether content moderation is enabled:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "true"
                  }), ": Content moderation is enabled."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "false"
                  }), ": Content moderation is not enabled."]
                }), `
`]
              }), `
`]
            })]
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
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/snapshot/standard/regions/cn"
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
              children: '  "enableModeration"'
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
              children: '  "snapshotInterval"'
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
              children: "30"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
