import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Response status codes",
  description: "Troubleshoot RTC REST API requests by response status code."
};
export let _markdown = `

This page describes the response status codes returned by the RTC REST APIs.

If the status code is \`200\`, the request is successful. If not, troubleshoot the problem based on the \`message\` and \`reason\` fields that may appear in the response body.

For example, when a request fails, you might receive the following response:

\`\`\`json
{
  "message": "invalid appid"
}
\`\`\`

## Status codes [#status-codes]

| Response status code | Description                                | Recommended action                                                                                                                                          |
| -------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`200\`                | The operation is successful.               | No troubleshooting required.                                                                                                                                |
| \`400\`                | Bad request.                               | Troubleshoot based on the \`message\` field in the response body.                                                                                             |
| \`401\`                | Unauthorized.                              | Check that the authentication information is correct. Possible causes include an App ID that does not exist, or a customer ID and secret that do not match. |
| \`403\`                | Access is forbidden.                       | The authorization information is incorrect. Contact [Agora technical support](mailto\\:support@agora.io).                                                    |
| \`404\`                | The requested resource could not be found. | Confirm that the requested URL and resource are correct.                                                                                                    |
| \`415\`                | Unsupported media type.                    | Make sure the \`Content-Type\` request header is set to \`application/json\`.                                                                                   |
| \`429\`                | Too many requests.                         | Wait and retry.                                                                                                                                             |
| \`500\`                | Internal server error.                     | Use a backoff strategy for query requests, or contact [Agora technical support](mailto\\:support@agora.io).                                                  |

<CalloutContainer type="info">
  <CalloutDescription>
    If the problem is not solved after taking the recommended action, print the \`X-Request-ID\` and \`X-Resource-ID\` response header values and contact [Agora technical support](mailto\\:support@agora.io).
  </CalloutDescription>
</CalloutContainer>

## Troubleshooting example [#troubleshooting-example]

A call to create a privilege banning rule returns \`400 Bad Request\`, and the \`message\` field is \`invalid appid\`.

This means that the App ID is invalid and rule creation failed. Get the App ID in [Agora Console](https://console.agora.io) and call the API again.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page describes the response status codes returned by the RTC REST APIs."
  }, {
    heading: undefined,
    content: "If the status code is `200`, the request is successful. If not, troubleshoot the problem based on the `message` and `reason` fields that may appear in the response body."
  }, {
    heading: undefined,
    content: "For example, when a request fails, you might receive the following response:"
  }, {
    heading: "status-codes",
    content: "Response status code"
  }, {
    heading: "status-codes",
    content: "Description"
  }, {
    heading: "status-codes",
    content: "Recommended action"
  }, {
    heading: "status-codes",
    content: "`200`"
  }, {
    heading: "status-codes",
    content: "The operation is successful."
  }, {
    heading: "status-codes",
    content: "No troubleshooting required."
  }, {
    heading: "status-codes",
    content: "`400`"
  }, {
    heading: "status-codes",
    content: "Bad request."
  }, {
    heading: "status-codes",
    content: "Troubleshoot based on the `message` field in the response body."
  }, {
    heading: "status-codes",
    content: "`401`"
  }, {
    heading: "status-codes",
    content: "Unauthorized."
  }, {
    heading: "status-codes",
    content: "Check that the authentication information is correct. Possible causes include an App ID that does not exist, or a customer ID and secret that do not match."
  }, {
    heading: "status-codes",
    content: "`403`"
  }, {
    heading: "status-codes",
    content: "Access is forbidden."
  }, {
    heading: "status-codes",
    content: "The authorization information is incorrect. Contact Agora technical support."
  }, {
    heading: "status-codes",
    content: "`404`"
  }, {
    heading: "status-codes",
    content: "The requested resource could not be found."
  }, {
    heading: "status-codes",
    content: "Confirm that the requested URL and resource are correct."
  }, {
    heading: "status-codes",
    content: "`415`"
  }, {
    heading: "status-codes",
    content: "Unsupported media type."
  }, {
    heading: "status-codes",
    content: "Make sure the `Content-Type` request header is set to `application/json`."
  }, {
    heading: "status-codes",
    content: "`429`"
  }, {
    heading: "status-codes",
    content: "Too many requests."
  }, {
    heading: "status-codes",
    content: "Wait and retry."
  }, {
    heading: "status-codes",
    content: "`500`"
  }, {
    heading: "status-codes",
    content: "Internal server error."
  }, {
    heading: "status-codes",
    content: "Use a backoff strategy for query requests, or contact Agora technical support."
  }, {
    heading: "status-codes",
    content: "If the problem is not solved after taking the recommended action, print the `X-Request-ID` and `X-Resource-ID` response header values and contact Agora technical support."
  }, {
    heading: "troubleshooting-example",
    content: "A call to create a privilege banning rule returns `400 Bad Request`, and the `message` field is `invalid appid`."
  }, {
    heading: "troubleshooting-example",
    content: "This means that the App ID is invalid and rule creation failed. Get the App ID in Agora Console and call the API again."
  }],
  headings: [{
    id: "status-codes",
    content: "Status codes"
  }, {
    id: "troubleshooting-example",
    content: "Troubleshooting example"
  }]
};
export let toc = [{
  depth: 2,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 2,
  url: "#troubleshooting-example",
  title: _jsx(_Fragment, {
    children: "Troubleshooting example"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
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
    children: [_jsx(_components.p, {
      children: "This page describes the response status codes returned by the RTC REST APIs."
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request is successful. If not, troubleshoot the problem based on the ", _jsx(_components.code, {
        children: "message"
      }), " and ", _jsx(_components.code, {
        children: "reason"
      }), " fields that may appear in the response body."]
    }), `
`, _jsx(_components.p, {
      children: "For example, when a request fails, you might receive the following response:"
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
              children: '"invalid appid"'
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
`, _jsx(_components.h2, {
      id: "status-codes",
      children: "Status codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Response status code"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Recommended action"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "200"
            })
          }), _jsx(_components.td, {
            children: "The operation is successful."
          }), _jsx(_components.td, {
            children: "No troubleshooting required."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            children: "Bad request."
          }), _jsxs(_components.td, {
            children: ["Troubleshoot based on the ", _jsx(_components.code, {
              children: "message"
            }), " field in the response body."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            children: "Unauthorized."
          }), _jsx(_components.td, {
            children: "Check that the authentication information is correct. Possible causes include an App ID that does not exist, or a customer ID and secret that do not match."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            children: "Access is forbidden."
          }), _jsxs(_components.td, {
            children: ["The authorization information is incorrect. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "Agora technical support"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            children: "The requested resource could not be found."
          }), _jsx(_components.td, {
            children: "Confirm that the requested URL and resource are correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "415"
            })
          }), _jsx(_components.td, {
            children: "Unsupported media type."
          }), _jsxs(_components.td, {
            children: ["Make sure the ", _jsx(_components.code, {
              children: "Content-Type"
            }), " request header is set to ", _jsx(_components.code, {
              children: "application/json"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "429"
            })
          }), _jsx(_components.td, {
            children: "Too many requests."
          }), _jsx(_components.td, {
            children: "Wait and retry."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500"
            })
          }), _jsx(_components.td, {
            children: "Internal server error."
          }), _jsxs(_components.td, {
            children: ["Use a backoff strategy for query requests, or contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "Agora technical support"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If the problem is not solved after taking the recommended action, print the ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " and ", _jsx(_components.code, {
            children: "X-Resource-ID"
          }), " response header values and contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "Agora technical support"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "troubleshooting-example",
      children: "Troubleshooting example"
    }), `
`, _jsxs(_components.p, {
      children: ["A call to create a privilege banning rule returns ", _jsx(_components.code, {
        children: "400 Bad Request"
      }), ", and the ", _jsx(_components.code, {
        children: "message"
      }), " field is ", _jsx(_components.code, {
        children: "invalid appid"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["This means that the App ID is invalid and rule creation failed. Get the App ID in ", _jsx(_components.a, {
        href: "https://console.agora.io",
        children: "Agora Console"
      }), " and call the API again."]
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
