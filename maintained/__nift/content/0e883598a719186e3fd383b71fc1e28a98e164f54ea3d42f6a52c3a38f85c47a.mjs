import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Standard recording for an entry point",
  description: "Media Broadcast RESTful API reference."
};
export let _markdown = `

## Enable/Disable standard recording for an entry point [#enabledisable-standard-recording-for-an-entry-point]

Enables or disables standard recording for all live streams under the specified entry point.

<CalloutContainer type="info">
  <CalloutDescription>
    After calling the [Set standard recording configuration](configuration) API, standard recording is automatically enabled for all live streams under the entry point.
  </CalloutDescription>
</CalloutContainer>

### HTTP request [#http-request]

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/record/standard/auto
\`\`\`

#### Path parameter [#path-parameter]

| Parameter     | Type   | Description                                        |
| :------------ | :----- | :------------------------------------------------- |
| \`appid\`       | String | Required. The App ID retrieved from Agora Console. |
| \`entry_point\` | String | Required. The entry point name.                    |

#### Request body [#request-body]

The request body is in the JSON Object type, and contains the following fields:

| Field     | Type    | Description                                                                                          |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------- |
| \`enabled\` | Boolean | Required. Whether to enable standard recording for all live streams under the specified entry point. |

### HTTP response [#http-response]

If the returned HTTP status code is 200, the request is successful.

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status codes ](#http-code)for possible reasons.

### Example [#example]

**Request line**

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/record/standard/auto HTTP/1.1
\`\`\`

**Request body**

\`\`\`json
{
    "enabled": false
}
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

<a name="http-code" />

## HTTP status codes [#http-status-codes]

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
    heading: "enabledisable-standard-recording-for-an-entry-point",
    content: "Enables or disables standard recording for all live streams under the specified entry point."
  }, {
    heading: "enabledisable-standard-recording-for-an-entry-point",
    content: "After calling the Set standard recording configuration API, standard recording is automatically enabled for all live streams under the entry point."
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
    content: "Boolean"
  }, {
    heading: "request-body",
    content: "Required. Whether to enable standard recording for all live streams under the specified entry point."
  }, {
    heading: "http-response",
    content: "If the returned HTTP status code is 200, the request is successful."
  }, {
    heading: "http-response",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to the HTTP status codes for possible reasons."
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
    heading: "http-status-codes",
    content: "Status code"
  }, {
    heading: "http-status-codes",
    content: "Description"
  }, {
    heading: "http-status-codes",
    content: "200"
  }, {
    heading: "http-status-codes",
    content: "The request succeeds."
  }, {
    heading: "http-status-codes",
    content: "400"
  }, {
    heading: "http-status-codes",
    content: "The parameter is invalid, for example the `appid` or the `entry_point` is empty, or the `region` parameter value is invalid."
  }, {
    heading: "http-status-codes",
    content: "401"
  }, {
    heading: "http-status-codes",
    content: "Unauthorized (the customer ID and the customer secret do not match)."
  }, {
    heading: "http-status-codes",
    content: "404"
  }, {
    heading: "http-status-codes",
    content: "The server cannot find the resource according to the request, which means the requested entry point does not exist or the requested URI path is invalid."
  }, {
    heading: "http-status-codes",
    content: "500"
  }, {
    heading: "http-status-codes",
    content: "An internal error occurs in the server, so the server is not able to complete the request."
  }, {
    heading: "http-status-codes",
    content: "504"
  }, {
    heading: "http-status-codes",
    content: "An internal error occurs in the server. The gateway or the proxy server did not receive a timely request from the remote server."
  }],
  headings: [{
    id: "enabledisable-standard-recording-for-an-entry-point",
    content: "Enable/Disable standard recording for an entry point"
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
    id: "http-status-codes",
    content: "HTTP status codes"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enabledisable-standard-recording-for-an-entry-point",
  title: _jsx(_Fragment, {
    children: "Enable/Disable standard recording for an entry point"
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
  url: "#http-status-codes",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "enabledisable-standard-recording-for-an-entry-point",
      children: "Enable/Disable standard recording for an entry point"
    }), `
`, _jsx(_components.p, {
      children: "Enables or disables standard recording for all live streams under the specified entry point."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["After calling the ", _jsx(_components.a, {
            href: "configuration",
            children: "Set standard recording configuration"
          }), " API, standard recording is automatically enabled for all live streams under the entry point."]
        })
      })
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
              children: " https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/record/standard/auto"
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
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
            children: "Boolean"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required. Whether to enable standard recording for all live streams under the specified entry point."
          })]
        })
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
        children: "HTTP status codes "
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
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/record/standard/auto"
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
              children: "false"
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
`, _jsx("a", {
      name: "http-code"
    }), `
`, _jsx(_components.h2, {
      id: "http-status-codes",
      children: "HTTP status codes"
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
