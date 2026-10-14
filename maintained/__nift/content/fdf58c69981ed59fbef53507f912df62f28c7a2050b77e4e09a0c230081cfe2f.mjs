import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Interactive Whiteboard Overview",
  description: "Basic information about the Interactive Whiteboard REST API."
};
export let _markdown = `

This article provides basic information about the Whiteboard SDK RESTful API.

## Domain [#domain]

All requests are sent to the domain named \`api.netless.link\`.

## Data format [#data-format]

The \`Content-Type\` field in all HTTP request headers is \`application/json\`. All requests and responses are in JSON format. All request URLs and request bodies are case-sensitive.

<CalloutContainer type="info">
  <CalloutDescription>
    Agora's server for the whiteboard service will allow more data formats but cannot guarantee full compatibility. If all request parameters are filled in correctly, but the request still fails, please check the data format of the request.
  </CalloutDescription>
</CalloutContainer>

## Core features [#core-features]

The Whiteboard SDK RESTful API provides the following features:

* [Token generation](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md)
* [Room management](room-management)
* [Screenshot management](screenshots)
* [Scene management](scene-management)
* [File conversion](file-conversion)

## Status codes [#status-codes]

All possible response status codes are listed in the table below:

* If the status code is \`200\` or \`201\`, the request is successful.

* If the status code is not \`200\` or \`201\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

| Response status code | Status                | Description                                                                                         |
| :------------------- | :-------------------- | :-------------------------------------------------------------------------------------------------- |
| \`200\`                | OK                    | The request is successful, and the server returns the requested data.                               |
| \`201\`                | Created               | The request is successful, and the server creates or modifies the requested data.                   |
| \`400\`                | Invalid request       | The user's request has an error, and the server does not create or modify any data.                 |
| \`401\`                | Unauthorized          | The user does not have permission (the token is incorrect).                                         |
| \`403\`                | Forbidden             | The user has permission (contrary to 401), but is denied access to perform the requested operation. |
| \`404\`                | Not found             | The server cannot find the requested resource.                                                      |
| \`500\`                | Internal server error | The server encounters an error and cannot process the request.                                      |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article provides basic information about the Whiteboard SDK RESTful API."
  }, {
    heading: "domain",
    content: "All requests are sent to the domain named `api.netless.link`."
  }, {
    heading: "data-format",
    content: "The `Content-Type` field in all HTTP request headers is `application/json`. All requests and responses are in JSON format. All request URLs and request bodies are case-sensitive."
  }, {
    heading: "data-format",
    content: "Agora's server for the whiteboard service will allow more data formats but cannot guarantee full compatibility. If all request parameters are filled in correctly, but the request still fails, please check the data format of the request."
  }, {
    heading: "core-features",
    content: "The Whiteboard SDK RESTful API provides the following features:"
  }, {
    heading: "core-features",
    content: "Token generation"
  }, {
    heading: "core-features",
    content: "Room management"
  }, {
    heading: "core-features",
    content: "Screenshot management"
  }, {
    heading: "core-features",
    content: "Scene management"
  }, {
    heading: "core-features",
    content: "File conversion"
  }, {
    heading: "status-codes",
    content: "All possible response status codes are listed in the table below:"
  }, {
    heading: "status-codes",
    content: "If the status code is `200` or `201`, the request is successful."
  }, {
    heading: "status-codes",
    content: "If the status code is not `200` or `201`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "status-codes",
    content: "Response status code"
  }, {
    heading: "status-codes",
    content: "Status"
  }, {
    heading: "status-codes",
    content: "Description"
  }, {
    heading: "status-codes",
    content: "`200`"
  }, {
    heading: "status-codes",
    content: "OK"
  }, {
    heading: "status-codes",
    content: "The request is successful, and the server returns the requested data."
  }, {
    heading: "status-codes",
    content: "`201`"
  }, {
    heading: "status-codes",
    content: "Created"
  }, {
    heading: "status-codes",
    content: "The request is successful, and the server creates or modifies the requested data."
  }, {
    heading: "status-codes",
    content: "`400`"
  }, {
    heading: "status-codes",
    content: "Invalid request"
  }, {
    heading: "status-codes",
    content: "The user's request has an error, and the server does not create or modify any data."
  }, {
    heading: "status-codes",
    content: "`401`"
  }, {
    heading: "status-codes",
    content: "Unauthorized"
  }, {
    heading: "status-codes",
    content: "The user does not have permission (the token is incorrect)."
  }, {
    heading: "status-codes",
    content: "`403`"
  }, {
    heading: "status-codes",
    content: "Forbidden"
  }, {
    heading: "status-codes",
    content: "The user has permission (contrary to 401), but is denied access to perform the requested operation."
  }, {
    heading: "status-codes",
    content: "`404`"
  }, {
    heading: "status-codes",
    content: "Not found"
  }, {
    heading: "status-codes",
    content: "The server cannot find the requested resource."
  }, {
    heading: "status-codes",
    content: "`500`"
  }, {
    heading: "status-codes",
    content: "Internal server error"
  }, {
    heading: "status-codes",
    content: "The server encounters an error and cannot process the request."
  }],
  headings: [{
    id: "domain",
    content: "Domain"
  }, {
    id: "data-format",
    content: "Data format"
  }, {
    id: "core-features",
    content: "Core features"
  }, {
    id: "status-codes",
    content: "Status codes"
  }]
};
export let toc = [{
  depth: 2,
  url: "#domain",
  title: _jsx(_Fragment, {
    children: "Domain"
  })
}, {
  depth: 2,
  url: "#data-format",
  title: _jsx(_Fragment, {
    children: "Data format"
  })
}, {
  depth: 2,
  url: "#core-features",
  title: _jsx(_Fragment, {
    children: "Core features"
  })
}, {
  depth: 2,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This article provides basic information about the Whiteboard SDK RESTful API."
    }), `
`, _jsx(_components.h2, {
      id: "domain",
      children: "Domain"
    }), `
`, _jsxs(_components.p, {
      children: ["All requests are sent to the domain named ", _jsx(_components.code, {
        children: "api.netless.link"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "data-format",
      children: "Data format"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "Content-Type"
      }), " field in all HTTP request headers is ", _jsx(_components.code, {
        children: "application/json"
      }), ". All requests and responses are in JSON format. All request URLs and request bodies are case-sensitive."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Agora's server for the whiteboard service will allow more data formats but cannot guarantee full compatibility. If all request parameters are filled in correctly, but the request still fails, please check the data format of the request."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "core-features",
      children: "Core features"
    }), `
`, _jsx(_components.p, {
      children: "The Whiteboard SDK RESTful API provides the following features:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md",
          children: "Token generation"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "room-management",
          children: "Room management"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "screenshots",
          children: "Screenshot management"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "scene-management",
          children: "Scene management"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "file-conversion",
          children: "File conversion"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "status-codes",
      children: "Status codes"
    }), `
`, _jsx(_components.p, {
      children: "All possible response status codes are listed in the table below:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the status code is ", _jsx(_components.code, {
            children: "200"
          }), " or ", _jsx(_components.code, {
            children: "201"
          }), ", the request is successful."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the status code is not ", _jsx(_components.code, {
            children: "200"
          }), " or ", _jsx(_components.code, {
            children: "201"
          }), ", the request fails. The response body includes a ", _jsx(_components.code, {
            children: "message"
          }), " field that describes the reason for the failure."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Response status code"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status"
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
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "OK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request is successful, and the server returns the requested data."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "201"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Created"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request is successful, and the server creates or modifies the requested data."
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
            children: "Invalid request"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user's request has an error, and the server does not create or modify any data."
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
            children: "Unauthorized"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user does not have permission (the token is incorrect)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Forbidden"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user has permission (contrary to 401), but is denied access to perform the requested operation."
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
            children: "Not found"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The server cannot find the requested resource."
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
            children: "Internal server error"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The server encounters an error and cannot process the request."
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
