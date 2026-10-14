import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "REST quickstart",
  description: "Get started with calling Cloud Transcoding RESTful APIs."
};
export let _markdown = `

This page explains how to call Agora Cloud Transcoding RESTful APIs to implement cloud transcoding in your app.

## Prerequisites [#prerequisites]

Before you start, ensure that you have:

* An [Agora account and project](/en/introduction/account)
* Cloud Transcoding [enabled](sdk-quickstart.md#enable-cloud-transcoding) for your project
* Your [App ID](/en/introduction/account#get-the-app-id-and-app-certificate) from Agora Console
* Your [Customer ID and Customer Secret](/en/api-reference/api-ref/cloud-transcoding/authentication) for REST API authentication
* [RTC tokens](/en/introduction/account#generate-temporary-tokens) for your channels (valid for up to 24 hours)

## Call a Cloud Transcoding REST API [#call-a-cloud-transcoding-rest-api]

This section walks you through creating a simple Cloud Transcoding task using the [Create RESTful API](/en/api-reference/cloud-transcoding/restful).

### Configure the request URL [#configure-the-request-url]

Each RESTful API request follows a specific format. For example, the URL to create a transcoding task is:

\`\`\`html
https://api.sd-rtn.com/v1/projects/:appId/rtsc/cloud-transcoder/tasks?builderToken=<actual_token_value>
\`\`\`

**URL structure:**

* \`https\`: Secure protocol.
* \`api.sd-rtn.com\`: Agora’s server domain.
* \`v1/projects/:appId/rtsc/cloud-transcoder/tasks\`: Resource path.

  * \`v1\`: API version.
  * \`:appId\`: Your Agora app ID.
  * \`rtsc/cloud-transcoder\`: The product or service name.
  * \`tasks\`: The endpoint you’re calling.
  * \`?builderToken=ACTUAL_TOKEN_VALUE\`: Query parameter and its value

    <CalloutContainer type="info">
      <CalloutDescription>
        Obtain the \`builderToken\` using the [Acquire API](/en/api-reference/cloud-transcoding/restful) before creating a task.
      </CalloutDescription>
    </CalloutContainer>

Refer to the specific API documentation for the correct HTTP method (\`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, \`DELETE\`) and resource path.

### Send the request [#send-the-request]

A typical API request includes:

* A URL
* Request headers
* (Optional) A request body

#### Request headers [#request-headers]

| Header          | Description                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| \`Accept\`        | Expected response format, e.g., \`application/json\`.                                                     |
| \`Authorization\` | Required for authentication. See [RESTful Authentication](/en/api-reference/cloud-transcoding/restful). |
| \`Content-Type\`  | Format of the request body, e.g., \`application/json\`.                                                   |

#### Request body [#request-body]

The request body contains the parameters specific to the API, such as input and output configurations.

#### Request example [#request-example]

\`\`\`bash
curl --location --request POST 'https://api.sd-rtn.com/v1/projects/<your_app_id>/rtsc/cloud-transcoder/tasks?builderToken=<your_builder_token>' \\
--header 'Accept: application/json' \\
--header 'Authorization: Basic <base64_encoded_customer_credentials>'
--header 'Content-Type: application/json' \\
--data '{
  "services": {
    "cloudTranscoder": {
      "serviceType": "cloudTranscoderV2",
      "config": {
        "transcoder": {
          "audioInputs": [
            {
              "rtc": {
                "rtcChannel": "test01",
                "rtcUid": 123,
                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"
              }
            },
            {
              "rtc": {
                "rtcChannel": "test01",
                "rtcUid": 456,
                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"
              }
            }
          ],
          "canvas": {
            "width": 1280,
            "height": 720,
            "color": 255
          },
          "videoInputs": [
            {
              "rtc": {
                "rtcChannel": "test01",
                "rtcUid": 123,
                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"
              },
              "placeholderImageUrl": "https://example.jpg",
              "region": {
                "x": 0,
                "y": 0,
                "width": 480,
                "height": 360,
                "zOrder": 2
              }
            },
            {
              "rtc": {
                "rtcChannel": "test01",
                "rtcUid": 456,
                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"
              },
              "placeholderImageUrl": "https://example.jpg",
              "region": {
                "x": 0,
                "y": 240,
                "width": 480,
                "height": 360,
                "zOrder": 2
              }
            }
          ],
          "outputs": [
            {
              "rtc": {
                "rtcChannel": "test02",
                "rtcUid": 1000,
                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"
              },
              "audioOption": {
                "profileType": "AUDIO_PROFILE_MUSIC_STANDARD"
              },
              "videoOption": {
                "fps": 15,
                "codec": "H264",
                "width": 1280,
                "height": 720
              }
            }
          ]
        }
      }
    }
  }
}'
\`\`\`

This example mixes audio and combines video from users \`123\` and \`456\` in channel \`test01\`, and outputs the stream to \`test02\` with user ID \`1000\`.

### Handling the response [#handling-the-response]

After sending a request, the server responds with:

* HTTP status code
* Response headers
* Response body

#### Response status codes [#response-status-codes]

| Code    | Meaning | Action                                                                             |
| ------- | ------- | ---------------------------------------------------------------------------------- |
| 200     | Success | Proceed as normal.                                                                 |
| Non-200 | Error   | See [HTTP status codes](/en/api-reference/api-ref/cloud-transcoding/status-codes). |

#### Response headers (Optional) [#response-headers-optional]

Common response headers include:

* \`X-Request-ID\`: Unique request identifier for tracking/debugging.

#### Example response [#example-response]

\`\`\`json
{
  "taskId": "609f28f2644f1ae1ceb041b7047e3***",
  "createTs": 1661324613,
  "status": "STARTED",
  "services": {
    "cloudTranscoder": {
      "serviceType": "cloudTranscoderV2",
      "status": "serviceReady"
    }
  }
}
\`\`\`

**Key fields:**

* \`taskId\`: Use this to query task status or stop the transcoding task
* \`status\`: Current task state

### Troubleshoot [#troubleshoot]

If a request fails:

1. **Check authentication**: Verify your Customer ID and Customer Secret are correct
2. **Validate parameters**: Ensure all required fields are included and properly formatted
3. **Check rate limits**: Ensure you're not exceeding 10 requests per second
4. **Inspect the response**: Use developer tools to examine the full error response
5. **Check status codes**: Refer to [HTTP status codes](/en/api-reference/api-ref/cloud-transcoding/status-codes) for specific error meanings

For persistent issues, contact [technical support](mailto\\:support@agora.io) with your \`X-Request-ID\`.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains how to call Agora Cloud Transcoding RESTful APIs to implement cloud transcoding in your app."
  }, {
    heading: "prerequisites",
    content: "Before you start, ensure that you have:"
  }, {
    heading: "prerequisites",
    content: "An Agora account and project"
  }, {
    heading: "prerequisites",
    content: "Cloud Transcoding enabled for your project"
  }, {
    heading: "prerequisites",
    content: "Your App ID from Agora Console"
  }, {
    heading: "prerequisites",
    content: "Your Customer ID and Customer Secret for REST API authentication"
  }, {
    heading: "prerequisites",
    content: "RTC tokens for your channels (valid for up to 24 hours)"
  }, {
    heading: "call-a-cloud-transcoding-rest-api",
    content: "This section walks you through creating a simple Cloud Transcoding task using the Create RESTful API."
  }, {
    heading: "configure-the-request-url",
    content: "Each RESTful API request follows a specific format. For example, the URL to create a transcoding task is:"
  }, {
    heading: "configure-the-request-url",
    content: "**URL structure:**"
  }, {
    heading: "configure-the-request-url",
    content: "`https`: Secure protocol."
  }, {
    heading: "configure-the-request-url",
    content: "`api.sd-rtn.com`: Agora’s server domain."
  }, {
    heading: "configure-the-request-url",
    content: "`v1/projects/:appId/rtsc/cloud-transcoder/tasks`: Resource path."
  }, {
    heading: "configure-the-request-url",
    content: "`v1`: API version."
  }, {
    heading: "configure-the-request-url",
    content: "`:appId`: Your Agora app ID."
  }, {
    heading: "configure-the-request-url",
    content: "`rtsc/cloud-transcoder`: The product or service name."
  }, {
    heading: "configure-the-request-url",
    content: "`tasks`: The endpoint you’re calling."
  }, {
    heading: "configure-the-request-url",
    content: "`?builderToken=ACTUAL_TOKEN_VALUE`: Query parameter and its value"
  }, {
    heading: "configure-the-request-url",
    content: "Obtain the `builderToken` using the Acquire API before creating a task."
  }, {
    heading: "configure-the-request-url",
    content: "Refer to the specific API documentation for the correct HTTP method (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) and resource path."
  }, {
    heading: "send-the-request",
    content: "A typical API request includes:"
  }, {
    heading: "send-the-request",
    content: "A URL"
  }, {
    heading: "send-the-request",
    content: "Request headers"
  }, {
    heading: "send-the-request",
    content: "(Optional) A request body"
  }, {
    heading: "request-headers",
    content: "Header"
  }, {
    heading: "request-headers",
    content: "Description"
  }, {
    heading: "request-headers",
    content: "`Accept`"
  }, {
    heading: "request-headers",
    content: "Expected response format, e.g., `application/json`."
  }, {
    heading: "request-headers",
    content: "`Authorization`"
  }, {
    heading: "request-headers",
    content: "Required for authentication. See RESTful Authentication."
  }, {
    heading: "request-headers",
    content: "`Content-Type`"
  }, {
    heading: "request-headers",
    content: "Format of the request body, e.g., `application/json`."
  }, {
    heading: "request-body",
    content: "The request body contains the parameters specific to the API, such as input and output configurations."
  }, {
    heading: "request-example",
    content: "This example mixes audio and combines video from users `123` and `456` in channel `test01`, and outputs the stream to `test02` with user ID `1000`."
  }, {
    heading: "handling-the-response",
    content: "After sending a request, the server responds with:"
  }, {
    heading: "handling-the-response",
    content: "HTTP status code"
  }, {
    heading: "handling-the-response",
    content: "Response headers"
  }, {
    heading: "handling-the-response",
    content: "Response body"
  }, {
    heading: "response-status-codes",
    content: "Code"
  }, {
    heading: "response-status-codes",
    content: "Meaning"
  }, {
    heading: "response-status-codes",
    content: "Action"
  }, {
    heading: "response-status-codes",
    content: "200"
  }, {
    heading: "response-status-codes",
    content: "Success"
  }, {
    heading: "response-status-codes",
    content: "Proceed as normal."
  }, {
    heading: "response-status-codes",
    content: "Non-200"
  }, {
    heading: "response-status-codes",
    content: "Error"
  }, {
    heading: "response-status-codes",
    content: "See HTTP status codes."
  }, {
    heading: "response-headers-optional",
    content: "Common response headers include:"
  }, {
    heading: "response-headers-optional",
    content: "`X-Request-ID`: Unique request identifier for tracking/debugging."
  }, {
    heading: "example-response",
    content: "**Key fields:**"
  }, {
    heading: "example-response",
    content: "`taskId`: Use this to query task status or stop the transcoding task"
  }, {
    heading: "example-response",
    content: "`status`: Current task state"
  }, {
    heading: "troubleshoot",
    content: "If a request fails:"
  }, {
    heading: "troubleshoot",
    content: "**Check authentication**: Verify your Customer ID and Customer Secret are correct"
  }, {
    heading: "troubleshoot",
    content: "**Validate parameters**: Ensure all required fields are included and properly formatted"
  }, {
    heading: "troubleshoot",
    content: "**Check rate limits**: Ensure you're not exceeding 10 requests per second"
  }, {
    heading: "troubleshoot",
    content: "**Inspect the response**: Use developer tools to examine the full error response"
  }, {
    heading: "troubleshoot",
    content: "**Check status codes**: Refer to HTTP status codes for specific error meanings"
  }, {
    heading: "troubleshoot",
    content: "For persistent issues, contact technical support with your `X-Request-ID`."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "call-a-cloud-transcoding-rest-api",
    content: "Call a Cloud Transcoding REST API"
  }, {
    id: "configure-the-request-url",
    content: "Configure the request URL"
  }, {
    id: "send-the-request",
    content: "Send the request"
  }, {
    id: "request-headers",
    content: "Request headers"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "handling-the-response",
    content: "Handling the response"
  }, {
    id: "response-status-codes",
    content: "Response status codes"
  }, {
    id: "response-headers-optional",
    content: "Response headers (Optional)"
  }, {
    id: "example-response",
    content: "Example response"
  }, {
    id: "troubleshoot",
    content: "Troubleshoot"
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
  url: "#call-a-cloud-transcoding-rest-api",
  title: _jsx(_Fragment, {
    children: "Call a Cloud Transcoding REST API"
  })
}, {
  depth: 3,
  url: "#configure-the-request-url",
  title: _jsx(_Fragment, {
    children: "Configure the request URL"
  })
}, {
  depth: 3,
  url: "#send-the-request",
  title: _jsx(_Fragment, {
    children: "Send the request"
  })
}, {
  depth: 4,
  url: "#request-headers",
  title: _jsx(_Fragment, {
    children: "Request headers"
  })
}, {
  depth: 4,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#handling-the-response",
  title: _jsx(_Fragment, {
    children: "Handling the response"
  })
}, {
  depth: 4,
  url: "#response-status-codes",
  title: _jsx(_Fragment, {
    children: "Response status codes"
  })
}, {
  depth: 4,
  url: "#response-headers-optional",
  title: _jsx(_Fragment, {
    children: "Response headers (Optional)"
  })
}, {
  depth: 4,
  url: "#example-response",
  title: _jsx(_Fragment, {
    children: "Example response"
  })
}, {
  depth: 3,
  url: "#troubleshoot",
  title: _jsx(_Fragment, {
    children: "Troubleshoot"
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
    ol: "ol",
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
    children: [_jsx(_components.p, {
      children: "This page explains how to call Agora Cloud Transcoding RESTful APIs to implement cloud transcoding in your app."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before you start, ensure that you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["An ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "Agora account and project"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Cloud Transcoding ", _jsx(_components.a, {
          href: "sdk-quickstart.md#enable-cloud-transcoding",
          children: "enabled"
        }), " for your project"]
      }), `
`, _jsxs(_components.li, {
        children: ["Your ", _jsx(_components.a, {
          href: "/en/introduction/account#get-the-app-id-and-app-certificate",
          children: "App ID"
        }), " from Agora Console"]
      }), `
`, _jsxs(_components.li, {
        children: ["Your ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-transcoding/authentication",
          children: "Customer ID and Customer Secret"
        }), " for REST API authentication"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/introduction/account#generate-temporary-tokens",
          children: "RTC tokens"
        }), " for your channels (valid for up to 24 hours)"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "call-a-cloud-transcoding-rest-api",
      children: "Call a Cloud Transcoding REST API"
    }), `
`, _jsxs(_components.p, {
      children: ["This section walks you through creating a simple Cloud Transcoding task using the ", _jsx(_components.a, {
        href: "/en/api-reference/cloud-transcoding/restful",
        children: "Create RESTful API"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "configure-the-request-url",
      children: "Configure the request URL"
    }), `
`, _jsx(_components.p, {
      children: "Each RESTful API request follows a specific format. For example, the URL to create a transcoding task is:"
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
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "https://api.sd-rtn.com/v1/projects/:appId/rtsc/cloud-transcoder/tasks?builderToken=<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "actual_token_value"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "URL structure:"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "https"
          }), ": Secure protocol."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "api.sd-rtn.com"
          }), ": Agora’s server domain."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "v1/projects/:appId/rtsc/cloud-transcoder/tasks"
          }), ": Resource path."]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "v1"
              }), ": API version."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: ":appId"
              }), ": Your Agora app ID."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "rtsc/cloud-transcoder"
              }), ": The product or service name."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "tasks"
              }), ": The endpoint you’re calling."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "?builderToken=ACTUAL_TOKEN_VALUE"
              }), ": Query parameter and its value"]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Obtain the ", _jsx(_components.code, {
                    children: "builderToken"
                  }), " using the ", _jsx(_components.a, {
                    href: "/en/api-reference/cloud-transcoding/restful",
                    children: "Acquire API"
                  }), " before creating a task."]
                })
              })
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Refer to the specific API documentation for the correct HTTP method (", _jsx(_components.code, {
        children: "GET"
      }), ", ", _jsx(_components.code, {
        children: "POST"
      }), ", ", _jsx(_components.code, {
        children: "PUT"
      }), ", ", _jsx(_components.code, {
        children: "PATCH"
      }), ", ", _jsx(_components.code, {
        children: "DELETE"
      }), ") and resource path."]
    }), `
`, _jsx(_components.h3, {
      id: "send-the-request",
      children: "Send the request"
    }), `
`, _jsx(_components.p, {
      children: "A typical API request includes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "A URL"
      }), `
`, _jsx(_components.li, {
        children: "Request headers"
      }), `
`, _jsx(_components.li, {
        children: "(Optional) A request body"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-headers",
      children: "Request headers"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Header"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Accept"
            })
          }), _jsxs(_components.td, {
            children: ["Expected response format, e.g., ", _jsx(_components.code, {
              children: "application/json"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Authorization"
            })
          }), _jsxs(_components.td, {
            children: ["Required for authentication. See ", _jsx(_components.a, {
              href: "/en/api-reference/cloud-transcoding/restful",
              children: "RESTful Authentication"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Content-Type"
            })
          }), _jsxs(_components.td, {
            children: ["Format of the request body, e.g., ", _jsx(_components.code, {
              children: "application/json"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "The request body contains the parameters specific to the API, such as input and output configurations."
    }), `
`, _jsx(_components.h4, {
      id: "request-example",
      children: "Request example"
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
              children: " 'https://api.sd-rtn.com/v1/projects/<your_app_id>/rtsc/cloud-transcoder/tasks?builderToken=<your_builder_token>'"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Accept: application/json'"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Authorization: Basic <base64_encoded_customer_credentials>'"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--header"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--data "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "services": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "cloudTranscoder": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "serviceType": "cloudTranscoderV2",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "config": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "transcoder": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "audioInputs": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "rtc": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcChannel": "test01",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcUid": 123,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "              }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "rtc": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcChannel": "test01",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcUid": 456,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "              }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "          ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "canvas": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "width": 1280,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "height": 720,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "color": 255'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "          },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "videoInputs": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "rtc": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcChannel": "test01",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcUid": 123,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "              },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "placeholderImageUrl": "https://example.jpg",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "region": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "x": 0,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "y": 0,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "width": 480,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "height": 360,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "zOrder": 2'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "              }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "rtc": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcChannel": "test01",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcUid": 456,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "              },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "placeholderImageUrl": "https://example.jpg",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "region": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "x": 0,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "y": 240,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "width": 480,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "height": 360,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "zOrder": 2'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "              }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "          ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "outputs": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "rtc": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcChannel": "test02",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcUid": 1000,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "rtcToken": "aab8b8f5a8cd4469a63042fcfafe7***"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "              },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "audioOption": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "profileType": "AUDIO_PROFILE_MUSIC_STANDARD"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "              },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '              "videoOption": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "fps": 15,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "codec": "H264",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "width": 1280,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "height": 720'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "              }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "          ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}'"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["This example mixes audio and combines video from users ", _jsx(_components.code, {
        children: "123"
      }), " and ", _jsx(_components.code, {
        children: "456"
      }), " in channel ", _jsx(_components.code, {
        children: "test01"
      }), ", and outputs the stream to ", _jsx(_components.code, {
        children: "test02"
      }), " with user ID ", _jsx(_components.code, {
        children: "1000"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "handling-the-response",
      children: "Handling the response"
    }), `
`, _jsx(_components.p, {
      children: "After sending a request, the server responds with:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "HTTP status code"
      }), `
`, _jsx(_components.li, {
        children: "Response headers"
      }), `
`, _jsx(_components.li, {
        children: "Response body"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "response-status-codes",
      children: "Response status codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Code"
          }), _jsx(_components.th, {
            children: "Meaning"
          }), _jsx(_components.th, {
            children: "Action"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "200"
          }), _jsx(_components.td, {
            children: "Success"
          }), _jsx(_components.td, {
            children: "Proceed as normal."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Non-200"
          }), _jsx(_components.td, {
            children: "Error"
          }), _jsxs(_components.td, {
            children: ["See ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-transcoding/status-codes",
              children: "HTTP status codes"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-headers-optional",
      children: "Response headers (Optional)"
    }), `
`, _jsx(_components.p, {
      children: "Common response headers include:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Request-ID"
        }), ": Unique request identifier for tracking/debugging."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "example-response",
      children: "Example response"
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
              children: '  "taskId"'
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
              children: '"609f28f2644f1ae1ceb041b7047e3***"'
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
              children: '  "createTs"'
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
              children: "1661324613"
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
              children: '"STARTED"'
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
              children: '  "services"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cloudTranscoder"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "serviceType"'
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
              children: '"cloudTranscoderV2"'
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
              children: '      "status"'
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
              children: '"serviceReady"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
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
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Key fields:"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "taskId"
        }), ": Use this to query task status or stop the transcoding task"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), ": Current task state"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "troubleshoot",
      children: "Troubleshoot"
    }), `
`, _jsx(_components.p, {
      children: "If a request fails:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Check authentication"
        }), ": Verify your Customer ID and Customer Secret are correct"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Validate parameters"
        }), ": Ensure all required fields are included and properly formatted"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Check rate limits"
        }), ": Ensure you're not exceeding 10 requests per second"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Inspect the response"
        }), ": Use developer tools to examine the full error response"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Check status codes"
        }), ": Refer to ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-transcoding/status-codes",
          children: "HTTP status codes"
        }), " for specific error meanings"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For persistent issues, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "technical support"
      }), " with your ", _jsx(_components.code, {
        children: "X-Request-ID"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
