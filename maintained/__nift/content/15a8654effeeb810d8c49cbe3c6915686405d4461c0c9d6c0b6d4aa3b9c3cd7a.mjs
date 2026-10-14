import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Stream authentication",
  description: "Media Broadcast RESTful API reference."
};
export let _markdown = `

The stream authentication function is currently in beta. Contact [support@agora.io](mailto\\:support@agora.io) before using it.

## Set a timestamp authentication key [#set-a-timestamp-authentication-key]

Sets a timestamp authentication key for the specified domain name.

### HTTP request [#http-request]

\`\`\`text
PATCH https://api.agora.io/v1/projects/{appid}/fls/domains/{domain}
\`\`\`

#### Path parameter [#path-parameter]

| Parameter | Type   | Description                                        |
| :-------- | :----- | :------------------------------------------------- |
| \`appid\`   | String | Required. The App ID retrieved from Agora Console. |
| \`domain\`  | String | Required. The domain name.                         |

#### Request body [#request-body]

The request body is in the JSON Object type and contains the following fields:

| Parameter | Type   | Description                                                                   |
| :-------- | :----- | :---------------------------------------------------------------------------- |
| \`authKey\` | String | Required. The timestamp authentication key. Maximum length is 128 characters. |

### HTTP response [#http-response]

If the returned HTTP status code is 200, the request is successful.

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code ](#http-code)for possible reasons.

### Example [#example]

**Request line**

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{your_appid}/fls/domains/{your_domain} HTTP/1.1
\`\`\`

**Request body**

\`\`\`json
{
    "authKey": "{your auth key}"
}
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

## Configure origin authentication [#configure-origin-authentication]

Configures the settings of origin authentication.

### HTTP request [#http-request-1]

\`\`\`text
PATCH https://api.agora.io/v1/projects/{appid}/fls/settings/streamauth/webhook
\`\`\`

#### Path parameter [#path-parameter-1]

| Parameter | Type   | Description                                        |
| :-------- | :----- | :------------------------------------------------- |
| \`appid\`   | String | Required. The App ID retrieved from Agora Console. |

#### Request body [#request-body-1]

The request body is in the JSON Object type and contains the following fields:

| Field     | Type    | Description                                                                                                                                                                                                                                                                                                                     |
| :-------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`enabled\` | Boolean | Required. Whether to enable origin authentication:- \`true\`: Enable origin authentication.

- \`false\`: (Default) Disable origin authentication.                                                                                                                                                                                  |
| \`url\`     | String  | Optional. The address of the server that handles origin authentication requests.                                                                                                                                                                                                                                                |
| \`secret\`  | String  | Optional. The origin authentication secret. The process of generating a signature using the origin authentication secret is the same as that of the Notification Center Service. For details, see [Signature Verification](/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications#add-signature-verification). |

### HTTP response [#http-response-1]

If the returned HTTP status code is 200, the request is successful.

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code ](#http-code)for possible reasons.

### Example [#example-1]

**Request line**

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{your_appid}/fls/settings/streamauth/webhook HTTP/1.1
\`\`\`

**Request body**

\`\`\`json
{
    "enabled": true,
    "url": "www.test.com/auth/callback",
    "secret": "{ncs_secret}"
}
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

## Get origin authentication configuration [#get-origin-authentication-configuration]

Gets the configuration of origin authentication.

### HTTP request [#http-request-2]

\`\`\`text
GET https://api.agora.io/v1/projects/{appid}/fls/settings/streamauth/webhook
\`\`\`

#### Path parameter [#path-parameter-2]

| Parameter | Type   | Description                                        |
| :-------- | :----- | :------------------------------------------------- |
| \`appid\`   | String | Required. The App ID retrieved from Agora Console. |

### HTTP response [#http-response-2]

If the returned HTTP status code is 200, the request is successful. The response body contains the following fields:

| Field     | Type   | Description                                                                                                                                                                                                                                                                                                                     |
| :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`enabled\` | Bool   | Required. Whether origin authentication is enabled :- \`true\`: Origin authentication is enabled.

- \`false\`: Origin authentication is disabled.                                                                                                                                                                                  |
| \`url\`     | String | Optional. The address of the server that handles origin authentication requests.                                                                                                                                                                                                                                                |
| \`secret\`  | String | Optional. The origin authentication secret. The process of generating a signature using the origin authentication secret is the same as that of the Notification Center Service. For details, see [Signature Verification](/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications#add-signature-verification). |

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code ](#http-code)for possible reasons.

### Example [#example-2]

**Request line**

\`\`\`bash
GET https://api.agora.io/v1/projects/{your_appid}/fls/settings/streamauth/webhook HTTP/1.1
\`\`\`

**Request body**

\`\`\`json
{
    "enabled": true,
    "url": "www.test.com/auth/callback",
    "secret": "{ncs_secret}"
}
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

## Format of origin authentication requests [#format-of-origin-authentication-requests]

Agora uses the following parameters to send requests to your server handling origin authentication:

| Parameter    | Type   | Required | Description                                 |
| :----------- | :----- | :------- | :------------------------------------------ |
| \`host\`       | String | Yes      | The stream-pushing or -playing domain name. |
| \`entryPoint\` | String | Yes      | The name of the entry point.                |
| \`streamName\` | String | Yes      | The stream name.                            |
| \`cdnIp\`      | String | No       | The IP address of the CDN node.             |
| \`clientIp\`   | String | No       | The IP address of the client.               |
| \`token\`      | String | No       | Authentication information.                 |
| \`requestId\`  | String | No       | The request ID.                             |

The HTTP status code you return must be one of the following:

* 200: Origin authentication succeeds.
* 401: Origin authentication fails.

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
    content: "The stream authentication function is currently in beta. Contact support\\@agora.io before using it."
  }, {
    heading: "set-a-timestamp-authentication-key",
    content: "Sets a timestamp authentication key for the specified domain name."
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
    content: "`domain`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "Required. The domain name."
  }, {
    heading: "request-body",
    content: "The request body is in the JSON Object type and contains the following fields:"
  }, {
    heading: "request-body",
    content: "Parameter"
  }, {
    heading: "request-body",
    content: "Type"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`authKey`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "Required. The timestamp authentication key. Maximum length is 128 characters."
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
    heading: "configure-origin-authentication",
    content: "Configures the settings of origin authentication."
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
    heading: "request-body-1",
    content: "The request body is in the JSON Object type and contains the following fields:"
  }, {
    heading: "request-body-1",
    content: "Field"
  }, {
    heading: "request-body-1",
    content: "Type"
  }, {
    heading: "request-body-1",
    content: "Description"
  }, {
    heading: "request-body-1",
    content: "`enabled`"
  }, {
    heading: "request-body-1",
    content: "Boolean"
  }, {
    heading: "request-body-1",
    content: "Required. Whether to enable origin authentication:- `true`: Enable origin authentication.\n\n- `false`: (Default) Disable origin authentication."
  }, {
    heading: "request-body-1",
    content: "`url`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "Optional. The address of the server that handles origin authentication requests."
  }, {
    heading: "request-body-1",
    content: "`secret`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "Optional. The origin authentication secret. The process of generating a signature using the origin authentication secret is the same as that of the Notification Center Service. For details, see Signature Verification."
  }, {
    heading: "http-response-1",
    content: "If the returned HTTP status code is 200, the request is successful."
  }, {
    heading: "http-response-1",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to the HTTP status code for possible reasons."
  }, {
    heading: "example-1",
    content: "**Request line**"
  }, {
    heading: "example-1",
    content: "**Request body**"
  }, {
    heading: "example-1",
    content: "**Response line**"
  }, {
    heading: "get-origin-authentication-configuration",
    content: "Gets the configuration of origin authentication."
  }, {
    heading: "path-parameter-2",
    content: "Parameter"
  }, {
    heading: "path-parameter-2",
    content: "Type"
  }, {
    heading: "path-parameter-2",
    content: "Description"
  }, {
    heading: "path-parameter-2",
    content: "`appid`"
  }, {
    heading: "path-parameter-2",
    content: "String"
  }, {
    heading: "path-parameter-2",
    content: "Required. The App ID retrieved from Agora Console."
  }, {
    heading: "http-response-2",
    content: "If the returned HTTP status code is 200, the request is successful. The response body contains the following fields:"
  }, {
    heading: "http-response-2",
    content: "Field"
  }, {
    heading: "http-response-2",
    content: "Type"
  }, {
    heading: "http-response-2",
    content: "Description"
  }, {
    heading: "http-response-2",
    content: "`enabled`"
  }, {
    heading: "http-response-2",
    content: "Bool"
  }, {
    heading: "http-response-2",
    content: "Required. Whether origin authentication is enabled :- `true`: Origin authentication is enabled.\n\n- `false`: Origin authentication is disabled."
  }, {
    heading: "http-response-2",
    content: "`url`"
  }, {
    heading: "http-response-2",
    content: "String"
  }, {
    heading: "http-response-2",
    content: "Optional. The address of the server that handles origin authentication requests."
  }, {
    heading: "http-response-2",
    content: "`secret`"
  }, {
    heading: "http-response-2",
    content: "String"
  }, {
    heading: "http-response-2",
    content: "Optional. The origin authentication secret. The process of generating a signature using the origin authentication secret is the same as that of the Notification Center Service. For details, see Signature Verification."
  }, {
    heading: "http-response-2",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to the HTTP status code for possible reasons."
  }, {
    heading: "example-2",
    content: "**Request line**"
  }, {
    heading: "example-2",
    content: "**Request body**"
  }, {
    heading: "example-2",
    content: "**Response line**"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "Agora uses the following parameters to send requests to your server handling origin authentication:"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "Parameter"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "Type"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "Required"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "Description"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "`host`"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "String"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "Yes"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "The stream-pushing or -playing domain name."
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "`entryPoint`"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "String"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "Yes"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "The name of the entry point."
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "`streamName`"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "String"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "Yes"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "The stream name."
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "`cdnIp`"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "String"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "No"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "The IP address of the CDN node."
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "`clientIp`"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "String"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "No"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "The IP address of the client."
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "`token`"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "String"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "No"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "Authentication information."
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "`requestId`"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "String"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "No"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "The request ID."
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "The HTTP status code you return must be one of the following:"
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "200: Origin authentication succeeds."
  }, {
    heading: "format-of-origin-authentication-requests",
    content: "401: Origin authentication fails."
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
    id: "set-a-timestamp-authentication-key",
    content: "Set a timestamp authentication key"
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
    id: "configure-origin-authentication",
    content: "Configure origin authentication"
  }, {
    id: "http-request-1",
    content: "HTTP request"
  }, {
    id: "path-parameter-1",
    content: "Path parameter"
  }, {
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "http-response-1",
    content: "HTTP response"
  }, {
    id: "example-1",
    content: "Example"
  }, {
    id: "get-origin-authentication-configuration",
    content: "Get origin authentication configuration"
  }, {
    id: "http-request-2",
    content: "HTTP request"
  }, {
    id: "path-parameter-2",
    content: "Path parameter"
  }, {
    id: "http-response-2",
    content: "HTTP response"
  }, {
    id: "example-2",
    content: "Example"
  }, {
    id: "format-of-origin-authentication-requests",
    content: "Format of origin authentication requests"
  }, {
    id: "http-status-code",
    content: "HTTP status code"
  }]
};
export let toc = [{
  depth: 2,
  url: "#set-a-timestamp-authentication-key",
  title: _jsx(_Fragment, {
    children: "Set a timestamp authentication key"
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
  url: "#configure-origin-authentication",
  title: _jsx(_Fragment, {
    children: "Configure origin authentication"
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
  depth: 4,
  url: "#request-body-1",
  title: _jsx(_Fragment, {
    children: "Request body"
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
  url: "#get-origin-authentication-configuration",
  title: _jsx(_Fragment, {
    children: "Get origin authentication configuration"
  })
}, {
  depth: 3,
  url: "#http-request-2",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-2",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 3,
  url: "#http-response-2",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 3,
  url: "#example-2",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#format-of-origin-authentication-requests",
  title: _jsx(_Fragment, {
    children: "Format of origin authentication requests"
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
    children: [_jsxs(_components.p, {
      children: ["The stream authentication function is currently in beta. Contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " before using it."]
    }), `
`, _jsx(_components.h2, {
      id: "set-a-timestamp-authentication-key",
      children: "Set a timestamp authentication key"
    }), `
`, _jsx(_components.p, {
      children: "Sets a timestamp authentication key for the specified domain name."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
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
              children: " https://api.agora.io/v1/projects/{appid}/fls/domains/{domain}"
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
              children: "domain"
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
            children: "Required. The domain name."
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "authKey"
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
            children: "Required. The timestamp authentication key. Maximum length is 128 characters."
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
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/domains/{your_domain}"
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
              children: '    "authKey"'
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
              children: '"{your auth key}"'
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
      id: "configure-origin-authentication",
      children: "Configure origin authentication"
    }), `
`, _jsx(_components.p, {
      children: "Configures the settings of origin authentication."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
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
              children: " https://api.agora.io/v1/projects/{appid}/fls/settings/streamauth/webhook"
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
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
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body-1",
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
            children: "Boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "Required. Whether to enable origin authentication:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "true"
                  }), ": Enable origin authentication."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "false"
                  }), ": (Default) Disable origin authentication."]
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
              children: "url"
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
            children: "Optional. The address of the server that handles origin authentication requests."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "secret"
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
            children: ["Optional. The origin authentication secret. The process of generating a signature using the origin authentication secret is the same as that of the Notification Center Service. For details, see ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications#add-signature-verification",
              children: "Signature Verification"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-1",
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
              children: "PATCH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/settings/streamauth/webhook"
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
              children: '    "url"'
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
              children: '"www.test.com/auth/callback"'
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
              children: '    "secret"'
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
              children: '"{ncs_secret}"'
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
      id: "get-origin-authentication-configuration",
      children: "Get origin authentication configuration"
    }), `
`, _jsx(_components.p, {
      children: "Gets the configuration of origin authentication."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-2",
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
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
              children: " https://api.agora.io/v1/projects/{appid}/fls/settings/streamauth/webhook"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-2",
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
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
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-2",
      children: "HTTP response"
    }), `
`, _jsx(_components.p, {
      children: "If the returned HTTP status code is 200, the request is successful. The response body contains the following fields:"
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
              children: "Required. Whether origin authentication is enabled :"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "true"
                  }), ": Origin authentication is enabled."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "false"
                  }), ": Origin authentication is disabled."]
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
              children: "url"
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
            children: "Optional. The address of the server that handles origin authentication requests."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "secret"
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
            children: ["Optional. The origin authentication secret. The process of generating a signature using the origin authentication secret is the same as that of the Notification Center Service. For details, see ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications#add-signature-verification",
              children: "Signature Verification"
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
      id: "example-2",
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
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/settings/streamauth/webhook"
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
              children: '    "url"'
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
              children: '"www.test.com/auth/callback"'
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
              children: '    "secret"'
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
              children: '"{ncs_secret}"'
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
      id: "format-of-origin-authentication-requests",
      children: "Format of origin authentication requests"
    }), `
`, _jsx(_components.p, {
      children: "Agora uses the following parameters to send requests to your server handling origin authentication:"
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
            children: "Required"
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
              children: "host"
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
            children: "Yes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The stream-pushing or -playing domain name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "entryPoint"
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
            children: "Yes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The name of the entry point."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "streamName"
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
            children: "Yes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The stream name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cdnIp"
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
            children: "No"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The IP address of the CDN node."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "clientIp"
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
            children: "No"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The IP address of the client."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "token"
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
            children: "No"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Authentication information."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "requestId"
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
            children: "No"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request ID."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The HTTP status code you return must be one of the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "200: Origin authentication succeeds."
      }), `
`, _jsx(_components.li, {
        children: "401: Origin authentication fails."
      }), `
`]
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
