import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to call RESTful APIs",
  description: "Understand request URLs, request headers, request bodies, responses, and error handling for RTC REST APIs."
};
export let _markdown = `

This page explains the structure of RTC REST API requests and how to call them correctly.

## Prerequisites [#prerequisites]

Before calling an API, make sure you have:

* An Agora App ID
* A customer ID
* A customer secret

## Request URL [#request-url]

The following is a sample request URL:

\`\`\`text
https://api.agora.io/dev/v1/kicking-rule
\`\`\`

* \`https\`: Agora uses HTTPS.
* \`api.agora.io\`: The Agora REST API host.
* \`dev/v1/kicking-rule\`: The resource path, including the API version and resource name.

The example is for reference only. Use the method and request URL documented on each endpoint page. Request URLs are case-sensitive.

## Request structure [#request-structure]

A request consists of a request header and, when required, a request body.

The following example creates a banning rule by sending a \`POST\` request with the App ID, channel name, user ID, IP address, ban duration, and privilege list:

\`\`\`bash
curl --location --request POST 'https://api.agora.io/dev/v1/kicking-rule' \\
  --header 'Content-Type: application/json' \\
  --header 'Accept: application/json' \\
  --header 'Authorization: <http_basic_auth>' \\
  --data '{
    "appid": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "cname": "channel1",
    "uid": 589517928,
    "ip": "123",
    "time": 60,
    "privileges": [
      "join_channel"
    ]
  }'
\`\`\`

### Request header [#request-header]

The request header contains the following information:

* \`Accept\`: The response type the client can handle, such as \`application/json\`.
* \`Authorization\`: The Agora REST API requires HTTP authentication. Every request must include the \`Authorization\` field. See [RESTful authentication](authentication).
* \`Content-Type\`: The request body type, such as \`application/json\`.

### Request body [#request-body]

The request body contains the information sent to the server. For example, to create a banning rule, include the App ID, channel name, user ID, user IP, ban duration, and banned privileges. Request bodies are case-sensitive.

## Response [#response]

After you send the request, Agora returns a response status code and a response body. The Channel Management REST APIs do not define response headers.

### Response status code [#response-status-code]

The HTTP response status code can be one of the following:

* \`200\`: The request is successful.
* Other status codes: See [Response status codes](response-status-codes) to troubleshoot the problem.

### Response body [#response-body]

The response body contains the information returned by the server. For example, the response body for creating a banning rule includes the request status and rule ID:

\`\`\`json
{
  "status": "success",
  "id": 1953
}
\`\`\`

## Error handling [#error-handling]

If a request fails, inspect the request and response with developer tools and troubleshoot based on the response status code. If the problem persists, contact [Agora technical support](mailto\\:support@agora.io).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains the structure of RTC REST API requests and how to call them correctly."
  }, {
    heading: "prerequisites",
    content: "Before calling an API, make sure you have:"
  }, {
    heading: "prerequisites",
    content: "An Agora App ID"
  }, {
    heading: "prerequisites",
    content: "A customer ID"
  }, {
    heading: "prerequisites",
    content: "A customer secret"
  }, {
    heading: "request-url",
    content: "The following is a sample request URL:"
  }, {
    heading: "request-url",
    content: "`https`: Agora uses HTTPS."
  }, {
    heading: "request-url",
    content: "`api.agora.io`: The Agora REST API host."
  }, {
    heading: "request-url",
    content: "`dev/v1/kicking-rule`: The resource path, including the API version and resource name."
  }, {
    heading: "request-url",
    content: "The example is for reference only. Use the method and request URL documented on each endpoint page. Request URLs are case-sensitive."
  }, {
    heading: "request-structure",
    content: "A request consists of a request header and, when required, a request body."
  }, {
    heading: "request-structure",
    content: "The following example creates a banning rule by sending a `POST` request with the App ID, channel name, user ID, IP address, ban duration, and privilege list:"
  }, {
    heading: "request-header",
    content: "The request header contains the following information:"
  }, {
    heading: "request-header",
    content: "`Accept`: The response type the client can handle, such as `application/json`."
  }, {
    heading: "request-header",
    content: "`Authorization`: The Agora REST API requires HTTP authentication. Every request must include the `Authorization` field. See RESTful authentication."
  }, {
    heading: "request-header",
    content: "`Content-Type`: The request body type, such as `application/json`."
  }, {
    heading: "request-body",
    content: "The request body contains the information sent to the server. For example, to create a banning rule, include the App ID, channel name, user ID, user IP, ban duration, and banned privileges. Request bodies are case-sensitive."
  }, {
    heading: "response",
    content: "After you send the request, Agora returns a response status code and a response body. The Channel Management REST APIs do not define response headers."
  }, {
    heading: "response-status-code",
    content: "The HTTP response status code can be one of the following:"
  }, {
    heading: "response-status-code",
    content: "`200`: The request is successful."
  }, {
    heading: "response-status-code",
    content: "Other status codes: See Response status codes to troubleshoot the problem."
  }, {
    heading: "response-body",
    content: "The response body contains the information returned by the server. For example, the response body for creating a banning rule includes the request status and rule ID:"
  }, {
    heading: "error-handling",
    content: "If a request fails, inspect the request and response with developer tools and troubleshoot based on the response status code. If the problem persists, contact Agora technical support."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "request-url",
    content: "Request URL"
  }, {
    id: "request-structure",
    content: "Request structure"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "response",
    content: "Response"
  }, {
    id: "response-status-code",
    content: "Response status code"
  }, {
    id: "response-body",
    content: "Response body"
  }, {
    id: "error-handling",
    content: "Error handling"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#request-url",
  title: _jsx(_Fragment, {
    children: "Request URL"
  })
}, {
  depth: 2,
  url: "#request-structure",
  title: _jsx(_Fragment, {
    children: "Request structure"
  })
}, {
  depth: 3,
  url: "#request-header",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 2,
  url: "#response",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 3,
  url: "#response-status-code",
  title: _jsx(_Fragment, {
    children: "Response status code"
  })
}, {
  depth: 3,
  url: "#response-body",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 2,
  url: "#error-handling",
  title: _jsx(_Fragment, {
    children: "Error handling"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page explains the structure of RTC REST API requests and how to call them correctly."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before calling an API, make sure you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "An Agora App ID"
      }), `
`, _jsx(_components.li, {
        children: "A customer ID"
      }), `
`, _jsx(_components.li, {
        children: "A customer secret"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "request-url",
      children: "Request URL"
    }), `
`, _jsx(_components.p, {
      children: "The following is a sample request URL:"
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
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "https://api.agora.io/dev/v1/kicking-rule"
            })
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "https"
        }), ": Agora uses HTTPS."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "api.agora.io"
        }), ": The Agora REST API host."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "dev/v1/kicking-rule"
        }), ": The resource path, including the API version and resource name."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The example is for reference only. Use the method and request URL documented on each endpoint page. Request URLs are case-sensitive."
    }), `
`, _jsx(_components.h2, {
      id: "request-structure",
      children: "Request structure"
    }), `
`, _jsx(_components.p, {
      children: "A request consists of a request header and, when required, a request body."
    }), `
`, _jsxs(_components.p, {
      children: ["The following example creates a banning rule by sending a ", _jsx(_components.code, {
        children: "POST"
      }), " request with the App ID, channel name, user ID, IP address, ban duration, and privilege list:"]
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
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://api.agora.io/dev/v1/kicking-rule'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Content-Type: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Accept: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: <http_basic_auth>'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "appid": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "cname": "channel1",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "uid": 589517928,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "ip": "123",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "time": 60,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "privileges": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "join_channel"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  }'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "request-header",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "The request header contains the following information:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Accept"
        }), ": The response type the client can handle, such as ", _jsx(_components.code, {
          children: "application/json"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Authorization"
        }), ": The Agora REST API requires HTTP authentication. Every request must include the ", _jsx(_components.code, {
          children: "Authorization"
        }), " field. See ", _jsx(_components.a, {
          href: "authentication",
          children: "RESTful authentication"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-Type"
        }), ": The request body type, such as ", _jsx(_components.code, {
          children: "application/json"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "The request body contains the information sent to the server. For example, to create a banning rule, include the App ID, channel name, user ID, user IP, ban duration, and banned privileges. Request bodies are case-sensitive."
    }), `
`, _jsx(_components.h2, {
      id: "response",
      children: "Response"
    }), `
`, _jsx(_components.p, {
      children: "After you send the request, Agora returns a response status code and a response body. The Channel Management REST APIs do not define response headers."
    }), `
`, _jsx(_components.h3, {
      id: "response-status-code",
      children: "Response status code"
    }), `
`, _jsx(_components.p, {
      children: "The HTTP response status code can be one of the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "200"
        }), ": The request is successful."]
      }), `
`, _jsxs(_components.li, {
        children: ["Other status codes: See ", _jsx(_components.a, {
          href: "response-status-codes",
          children: "Response status codes"
        }), " to troubleshoot the problem."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "response-body",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "The response body contains the information returned by the server. For example, the response body for creating a banning rule includes the request status and rule ID:"
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
              children: '"success"'
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
              children: '  "id"'
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
              children: "1953"
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
      id: "error-handling",
      children: "Error handling"
    }), `
`, _jsxs(_components.p, {
      children: ["If a request fails, inspect the request and response with developer tools and troubleshoot based on the response status code. If the problem persists, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora technical support"
      }), "."]
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
