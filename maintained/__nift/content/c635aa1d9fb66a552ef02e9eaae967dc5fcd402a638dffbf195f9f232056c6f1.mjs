import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Domain names",
  description: "Media Broadcast RESTful API reference."
};
export let _markdown = `

There are two types of domain names: stream-pushing domain names and stream-playing domain names (which mainly affect regional access and the deployment of the streams). The same live stream can be pushed or played through multiple different domain names.

> The domain name management function is in the beta stage. Contact [support@agora.io](mailto\\:support@agora.io) before using it.

## Add domain names [#add-domain-names]

Add a stream domain name.

When adding a domain name, you need to specify the App ID of your Agora project.

### HTTP request [#http-request]

\`\`\`bash
POST https://api.agora.io/v1/projects/{appid}/fls/domains?id={domain}
\`\`\`

#### Path parameter [#path-parameter]

\`appid\`: String type, required. The App ID provided by Agora for each developer. You can get an App ID after creating a project in the Agora Console. The App ID is the only identification of a project.

#### Query parameters [#query-parameters]

\`id\`: String type, required. The domain name to be added. Pan-domain names are not supported.

#### Request body [#request-body]

The request body is the \`data\` field in the JSON Object type, and contains the following fields:

| Field    | Type   | Description                                                                                                                                                                                                                                                                                                             |
| :------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`type\`   | String | Required. The domain name type:- \`"publish"\`: The stream-pushing domain name.

- \`"play"\`: The stream-playing domain name.                                                                                                                                                                                              |
| \`region\` | String | Required when the domain name type is set as \`"publish"\`. This parameter only applies to stream-pushing domain names. The region of the Agora server used for the stream-pushing domain name:- \`"cn"\`: China Mainland.

- \`"ap"\`: Asian regions except for China Mainland.

- \`"eu"\`: Europe.

- \`"na"\`: North America. |

### HTTP response [#http-response]

If the returned HTTP status code is 201, the request is successful, and the response body contains the following fields:

| Field     | Type   | Description                                                                                                          |
| :-------- | :----- | :------------------------------------------------------------------------------------------------------------------- |
| \`appid\`   | String | The App ID of your Agora project.                                                                                    |
| \`type\`    | String | Set the domain name type:- \`"publish"\`: The stream-pushing domain name.

- \`"play"\`: The stream-playing domain name. |
| \`region\`  | String | Set the region where the Agora server is located. Only returned when the \`type\` is \`"publish"\`.                      |
| \`authKey\` | String | The authentication key for hotlink protection.                                                                       |
| \`cname\`   | String | The cname corresponds to the domain name, and you need to configure it at your DNS host.                             |

If the returned HTTP status code is not 201, the request fails. You can refer to the [HTTP status code](#http-code) for possible reasons.

### Example [#example]

**Request line**

\`\`\`bash
POST https://api.agora.io/v1/projects/{your_appid}/fls/domains?id={your_domain} HTTP/1.1
\`\`\`

**Request body**

\`\`\`json
{
    "region": "cn",
    "type": "publish"
}
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 201 Created
\`\`\`

**Request body**

\`\`\`json
{
    "appid": "{your appid}",
    "name": "{your domain}",
    "region": "cn",
    "type": "publish"
}
\`\`\`

## Delete domain names [#delete-domain-names]

Delete a stream domain name.

### HTTP request [#http-request-1]

\`\`\`bash
DELETE https://api.agora.io/v1/projects/{appid}/fls/domains/{domain}
\`\`\`

#### Path parameter [#path-parameter-1]

| Parameter | Type   | Description                                                          |
| :-------- | :----- | :------------------------------------------------------------------- |
| \`appid\`   | String | Required. The App ID corresponding to the domain name being deleted. |
| \`domain\`  | String | Required. The domain name being deleted.                             |

### HTTP response [#http-response-1]

If the returned HTTP status code is 200, the request is successful.

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code](#http-code) for possible reasons.

### Example [#example-1]

**Request line**

\`\`\`bash
DELETE https://api.agora.io/v1/projects/{your_appid}/fls/domains/{your_domain} HTTP/1.1
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

## Get domain name lists [#get-domain-name-lists]

Get all stream domain names under one Agora project.

### HTTP request [#http-request-2]

\`\`\`bash
GET https://api.agora.io/v1/projects/{appid}/fls/domains
\`\`\`

#### Path parameter [#path-parameter-2]

\`appid\`: String type, required. The App ID of your Agora project

### HTTP response [#http-response-2]

If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:

\`domainList\`: JSON Array type, the domain name list. One stream corresponds to a JSON Object, and contains the following fields:

| Field     | Type   | Description                                                                                                      |
| :-------- | :----- | :--------------------------------------------------------------------------------------------------------------- |
| \`appid\`   | String | The App ID of your Agora project.                                                                                |
| \`name\`    | String | The domain name.                                                                                                 |
| \`type\`    | String | The domain name type.- \`"publish"\`: The stream-pushing domain name.

- \`"play"\`: The stream-playing domain name. |
| \`region\`  | String | The region of the Agora server used for the domain name. Only returned when the \`type\` is \`"publish"\`.           |
| \`authKey\` | String | The authentication key for hotlink protection.                                                                   |

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code](#http-code) for possible reasons.

### Example [#example-2]

**Request line**

\`\`\`bash
GET https://api.agora.io/v1/projects/{your_appid}/fls/domains HTTP/1.1
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

**Request body**

\`\`\`json
{
    "domainList": [
        {
            "appid": "{your appid}",
            "authKey": "{your authkey}",
            "name": "{your play domain}",
            "type": "play"
        },
        {
            "appid": "{your appid}",
            "authKey": "{your authkey}",
            "name": "{your publish domain}",
            "region": "cn",
            "type": "publish"
        }
    ]
}
\`\`\`

## Get domain name attributes [#get-domain-name-attributes]

Get the attributes of the specified domain name.

### HTTP request [#http-request-3]

\`\`\`bash
GET https://api.agora.io/v1/projects/{appid}/fls/domains/{domain}
\`\`\`

#### Path parameter [#path-parameter-3]

| Parameter | Type   | Description                                                          |
| :-------- | :----- | :------------------------------------------------------------------- |
| \`appid\`   | String | Required. The App ID corresponding to the domain name being queried. |
| \`domain\`  | String | Required. The domain name being queried.                             |

### HTTP response [#http-response-3]

If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:

| Field     | Type   | Description                                                                                                      |
| :-------- | :----- | :--------------------------------------------------------------------------------------------------------------- |
| \`appid\`   | String | The App ID of your Agora project.                                                                                |
| \`name\`    | String | The domain name.                                                                                                 |
| \`type\`    | String | The domain name type.- \`"publish"\`: The stream-pushing domain name.

- \`"play"\`: The stream-playing domain name. |
| \`region\`  | String | The region of the Agora server used for the domain name. Only returned when the \`type\` is \`"publish"\`.           |
| \`authKey\` | String | The authentication key for hotlink protection.                                                                   |

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code](#http-code) for possible reasons.

### Example [#example-3]

**Request line**

\`\`\`bash
GET https://api.agora.io/v1/projects/{your_appid}/fls/domains?id={your_domain} HTTP/1.1
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

**Request body**

\`\`\`json
{
    "appid": "{your appid}",
    "authKey": "{your authkey}",
    "name": "{your domain}",
    "region": "cn",
    "type": "publish"
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
    content: "There are two types of domain names: stream-pushing domain names and stream-playing domain names (which mainly affect regional access and the deployment of the streams). The same live stream can be pushed or played through multiple different domain names."
  }, {
    heading: undefined,
    content: "> The domain name management function is in the beta stage. Contact support\\@agora.io before using it."
  }, {
    heading: "add-domain-names",
    content: "Add a stream domain name."
  }, {
    heading: "add-domain-names",
    content: "When adding a domain name, you need to specify the App ID of your Agora project."
  }, {
    heading: "path-parameter",
    content: "`appid`: String type, required. The App ID provided by Agora for each developer. You can get an App ID after creating a project in the Agora Console. The App ID is the only identification of a project."
  }, {
    heading: "query-parameters",
    content: "`id`: String type, required. The domain name to be added. Pan-domain names are not supported."
  }, {
    heading: "request-body",
    content: "The request body is the `data` field in the JSON Object type, and contains the following fields:"
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
    content: "`type`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: 'Required. The domain name type:- `"publish"`: The stream-pushing domain name.\n\n- `"play"`: The stream-playing domain name.'
  }, {
    heading: "request-body",
    content: "`region`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: 'Required when the domain name type is set as `"publish"`. This parameter only applies to stream-pushing domain names. The region of the Agora server used for the stream-pushing domain name:- `"cn"`: China Mainland.\n\n- `"ap"`: Asian regions except for China Mainland.\n\n- `"eu"`: Europe.\n\n- `"na"`: North America.'
  }, {
    heading: "http-response",
    content: "If the returned HTTP status code is 201, the request is successful, and the response body contains the following fields:"
  }, {
    heading: "http-response",
    content: "Field"
  }, {
    heading: "http-response",
    content: "Type"
  }, {
    heading: "http-response",
    content: "Description"
  }, {
    heading: "http-response",
    content: "`appid`"
  }, {
    heading: "http-response",
    content: "String"
  }, {
    heading: "http-response",
    content: "The App ID of your Agora project."
  }, {
    heading: "http-response",
    content: "`type`"
  }, {
    heading: "http-response",
    content: "String"
  }, {
    heading: "http-response",
    content: 'Set the domain name type:- `"publish"`: The stream-pushing domain name.\n\n- `"play"`: The stream-playing domain name.'
  }, {
    heading: "http-response",
    content: "`region`"
  }, {
    heading: "http-response",
    content: "String"
  }, {
    heading: "http-response",
    content: 'Set the region where the Agora server is located. Only returned when the `type` is `"publish"`.'
  }, {
    heading: "http-response",
    content: "`authKey`"
  }, {
    heading: "http-response",
    content: "String"
  }, {
    heading: "http-response",
    content: "The authentication key for hotlink protection."
  }, {
    heading: "http-response",
    content: "`cname`"
  }, {
    heading: "http-response",
    content: "String"
  }, {
    heading: "http-response",
    content: "The cname corresponds to the domain name, and you need to configure it at your DNS host."
  }, {
    heading: "http-response",
    content: "If the returned HTTP status code is not 201, the request fails. You can refer to the HTTP status code for possible reasons."
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
    heading: "example",
    content: "**Request body**"
  }, {
    heading: "delete-domain-names",
    content: "Delete a stream domain name."
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
    content: "Required. The App ID corresponding to the domain name being deleted."
  }, {
    heading: "path-parameter-1",
    content: "`domain`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "Required. The domain name being deleted."
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
    content: "**Response line**"
  }, {
    heading: "get-domain-name-lists",
    content: "Get all stream domain names under one Agora project."
  }, {
    heading: "path-parameter-2",
    content: "`appid`: String type, required. The App ID of your Agora project"
  }, {
    heading: "http-response-2",
    content: "If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:"
  }, {
    heading: "http-response-2",
    content: "`domainList`: JSON Array type, the domain name list. One stream corresponds to a JSON Object, and contains the following fields:"
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
    content: "`appid`"
  }, {
    heading: "http-response-2",
    content: "String"
  }, {
    heading: "http-response-2",
    content: "The App ID of your Agora project."
  }, {
    heading: "http-response-2",
    content: "`name`"
  }, {
    heading: "http-response-2",
    content: "String"
  }, {
    heading: "http-response-2",
    content: "The domain name."
  }, {
    heading: "http-response-2",
    content: "`type`"
  }, {
    heading: "http-response-2",
    content: "String"
  }, {
    heading: "http-response-2",
    content: 'The domain name type.- `"publish"`: The stream-pushing domain name.\n\n- `"play"`: The stream-playing domain name.'
  }, {
    heading: "http-response-2",
    content: "`region`"
  }, {
    heading: "http-response-2",
    content: "String"
  }, {
    heading: "http-response-2",
    content: 'The region of the Agora server used for the domain name. Only returned when the `type` is `"publish"`.'
  }, {
    heading: "http-response-2",
    content: "`authKey`"
  }, {
    heading: "http-response-2",
    content: "String"
  }, {
    heading: "http-response-2",
    content: "The authentication key for hotlink protection."
  }, {
    heading: "http-response-2",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to the HTTP status code for possible reasons."
  }, {
    heading: "example-2",
    content: "**Request line**"
  }, {
    heading: "example-2",
    content: "**Response line**"
  }, {
    heading: "example-2",
    content: "**Request body**"
  }, {
    heading: "get-domain-name-attributes",
    content: "Get the attributes of the specified domain name."
  }, {
    heading: "path-parameter-3",
    content: "Parameter"
  }, {
    heading: "path-parameter-3",
    content: "Type"
  }, {
    heading: "path-parameter-3",
    content: "Description"
  }, {
    heading: "path-parameter-3",
    content: "`appid`"
  }, {
    heading: "path-parameter-3",
    content: "String"
  }, {
    heading: "path-parameter-3",
    content: "Required. The App ID corresponding to the domain name being queried."
  }, {
    heading: "path-parameter-3",
    content: "`domain`"
  }, {
    heading: "path-parameter-3",
    content: "String"
  }, {
    heading: "path-parameter-3",
    content: "Required. The domain name being queried."
  }, {
    heading: "http-response-3",
    content: "If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:"
  }, {
    heading: "http-response-3",
    content: "Field"
  }, {
    heading: "http-response-3",
    content: "Type"
  }, {
    heading: "http-response-3",
    content: "Description"
  }, {
    heading: "http-response-3",
    content: "`appid`"
  }, {
    heading: "http-response-3",
    content: "String"
  }, {
    heading: "http-response-3",
    content: "The App ID of your Agora project."
  }, {
    heading: "http-response-3",
    content: "`name`"
  }, {
    heading: "http-response-3",
    content: "String"
  }, {
    heading: "http-response-3",
    content: "The domain name."
  }, {
    heading: "http-response-3",
    content: "`type`"
  }, {
    heading: "http-response-3",
    content: "String"
  }, {
    heading: "http-response-3",
    content: 'The domain name type.- `"publish"`: The stream-pushing domain name.\n\n- `"play"`: The stream-playing domain name.'
  }, {
    heading: "http-response-3",
    content: "`region`"
  }, {
    heading: "http-response-3",
    content: "String"
  }, {
    heading: "http-response-3",
    content: 'The region of the Agora server used for the domain name. Only returned when the `type` is `"publish"`.'
  }, {
    heading: "http-response-3",
    content: "`authKey`"
  }, {
    heading: "http-response-3",
    content: "String"
  }, {
    heading: "http-response-3",
    content: "The authentication key for hotlink protection."
  }, {
    heading: "http-response-3",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to the HTTP status code for possible reasons."
  }, {
    heading: "example-3",
    content: "**Request line**"
  }, {
    heading: "example-3",
    content: "**Response line**"
  }, {
    heading: "example-3",
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
    id: "add-domain-names",
    content: "Add domain names"
  }, {
    id: "http-request",
    content: "HTTP request"
  }, {
    id: "path-parameter",
    content: "Path parameter"
  }, {
    id: "query-parameters",
    content: "Query parameters"
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
    id: "delete-domain-names",
    content: "Delete domain names"
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
    id: "get-domain-name-lists",
    content: "Get domain name lists"
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
    id: "get-domain-name-attributes",
    content: "Get domain name attributes"
  }, {
    id: "http-request-3",
    content: "HTTP request"
  }, {
    id: "path-parameter-3",
    content: "Path parameter"
  }, {
    id: "http-response-3",
    content: "HTTP response"
  }, {
    id: "example-3",
    content: "Example"
  }, {
    id: "http-status-code",
    content: "HTTP status code"
  }]
};
export let toc = [{
  depth: 2,
  url: "#add-domain-names",
  title: _jsx(_Fragment, {
    children: "Add domain names"
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
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query parameters"
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
  url: "#delete-domain-names",
  title: _jsx(_Fragment, {
    children: "Delete domain names"
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
  url: "#get-domain-name-lists",
  title: _jsx(_Fragment, {
    children: "Get domain name lists"
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
  url: "#get-domain-name-attributes",
  title: _jsx(_Fragment, {
    children: "Get domain name attributes"
  })
}, {
  depth: 3,
  url: "#http-request-3",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-3",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 3,
  url: "#http-response-3",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 3,
  url: "#example-3",
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
    blockquote: "blockquote",
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
      children: "There are two types of domain names: stream-pushing domain names and stream-playing domain names (which mainly affect regional access and the deployment of the streams). The same live stream can be pushed or played through multiple different domain names."
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: ["The domain name management function is in the beta stage. Contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " before using it."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "add-domain-names",
      children: "Add domain names"
    }), `
`, _jsx(_components.p, {
      children: "Add a stream domain name."
    }), `
`, _jsx(_components.p, {
      children: "When adding a domain name, you need to specify the App ID of your Agora project."
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
              children: "POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{appid}/fls/domains?id={domain}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter",
      children: "Path parameter"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "appid"
      }), ": String type, required. The App ID provided by Agora for each developer. You can get an App ID after creating a project in the Agora Console. The App ID is the only identification of a project."]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters",
      children: "Query parameters"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "id"
      }), ": String type, required. The domain name to be added. Pan-domain names are not supported."]
    }), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsxs(_components.p, {
      children: ["The request body is the ", _jsx(_components.code, {
        children: "data"
      }), " field in the JSON Object type, and contains the following fields:"]
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
              children: "type"
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
            children: [_jsx(_components.p, {
              children: "Required. The domain name type:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"publish"'
                  }), ": The stream-pushing domain name."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"play"'
                  }), ": The stream-playing domain name."]
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
              children: "region"
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
            children: [_jsxs(_components.p, {
              children: ["Required when the domain name type is set as ", _jsx(_components.code, {
                children: '"publish"'
              }), ". This parameter only applies to stream-pushing domain names. The region of the Agora server used for the stream-pushing domain name:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"cn"'
                  }), ": China Mainland."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"ap"'
                  }), ": Asian regions except for China Mainland."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"eu"'
                  }), ": Europe."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"na"'
                  }), ": North America."]
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
      children: "If the returned HTTP status code is 201, the request is successful, and the response body contains the following fields:"
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
            children: "The App ID of your Agora project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "type"
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
            children: [_jsx(_components.p, {
              children: "Set the domain name type:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"publish"'
                  }), ": The stream-pushing domain name."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"play"'
                  }), ": The stream-playing domain name."]
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
              children: "region"
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
            children: ["Set the region where the Agora server is located. Only returned when the ", _jsx(_components.code, {
              children: "type"
            }), " is ", _jsx(_components.code, {
              children: '"publish"'
            }), "."]
          })]
        }), _jsxs(_components.tr, {
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
            children: "The authentication key for hotlink protection."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cname"
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
            children: "The cname corresponds to the domain name, and you need to configure it at your DNS host."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 201, the request fails. You can refer to the ", _jsx(_components.a, {
        href: "#http-code",
        children: "HTTP status code"
      }), " for possible reasons."]
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
              children: "POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/domains?id={your_domain}"
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
              children: '    "region"'
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
              children: '"cn"'
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
              children: '    "type"'
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
              children: '"publish"'
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
              children: " 201"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Created"
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
              children: '    "appid"'
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
              children: '"{your appid}"'
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
              children: '    "name"'
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
              children: '"{your domain}"'
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
              children: '    "region"'
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
              children: '"cn"'
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
              children: '    "type"'
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
              children: '"publish"'
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
      id: "delete-domain-names",
      children: "Delete domain names"
    }), `
`, _jsx(_components.p, {
      children: "Delete a stream domain name."
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
              children: "DELETE"
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
            children: "Required. The App ID corresponding to the domain name being deleted."
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
            children: "Required. The domain name being deleted."
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
        children: "HTTP status code"
      }), " for possible reasons."]
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
              children: "DELETE"
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
      id: "get-domain-name-lists",
      children: "Get domain name lists"
    }), `
`, _jsx(_components.p, {
      children: "Get all stream domain names under one Agora project."
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
              children: " https://api.agora.io/v1/projects/{appid}/fls/domains"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-2",
      children: "Path parameter"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "appid"
      }), ": String type, required. The App ID of your Agora project"]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-2",
      children: "HTTP response"
    }), `
`, _jsx(_components.p, {
      children: "If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "domainList"
      }), ": JSON Array type, the domain name list. One stream corresponds to a JSON Object, and contains the following fields:"]
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
            children: "The App ID of your Agora project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "name"
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
            children: "The domain name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "type"
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
            children: [_jsx(_components.p, {
              children: "The domain name type."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"publish"'
                  }), ": The stream-pushing domain name."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"play"'
                  }), ": The stream-playing domain name."]
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
              children: "region"
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
            children: ["The region of the Agora server used for the domain name. Only returned when the ", _jsx(_components.code, {
              children: "type"
            }), " is ", _jsx(_components.code, {
              children: '"publish"'
            }), "."]
          })]
        }), _jsxs(_components.tr, {
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
            children: "The authentication key for hotlink protection."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to the ", _jsx(_components.a, {
        href: "#http-code",
        children: "HTTP status code"
      }), " for possible reasons."]
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
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/domains"
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
              children: '    "domainList"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "appid"'
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
              children: '"{your appid}"'
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
              children: '            "authKey"'
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
              children: '"{your authkey}"'
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
              children: '            "name"'
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
              children: '"{your play domain}"'
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
              children: '            "type"'
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
              children: '"play"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "appid"'
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
              children: '"{your appid}"'
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
              children: '            "authKey"'
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
              children: '"{your authkey}"'
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
              children: '            "name"'
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
              children: '"{your publish domain}"'
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
              children: '            "region"'
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
              children: '"cn"'
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
              children: '            "type"'
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
              children: '"publish"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
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
`, _jsx(_components.h2, {
      id: "get-domain-name-attributes",
      children: "Get domain name attributes"
    }), `
`, _jsx(_components.p, {
      children: "Get the attributes of the specified domain name."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-3",
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
              children: " https://api.agora.io/v1/projects/{appid}/fls/domains/{domain}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-3",
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
            children: "Required. The App ID corresponding to the domain name being queried."
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
            children: "Required. The domain name being queried."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-3",
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
            children: "The App ID of your Agora project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "name"
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
            children: "The domain name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "type"
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
            children: [_jsx(_components.p, {
              children: "The domain name type."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"publish"'
                  }), ": The stream-pushing domain name."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: '"play"'
                  }), ": The stream-playing domain name."]
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
              children: "region"
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
            children: ["The region of the Agora server used for the domain name. Only returned when the ", _jsx(_components.code, {
              children: "type"
            }), " is ", _jsx(_components.code, {
              children: '"publish"'
            }), "."]
          })]
        }), _jsxs(_components.tr, {
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
            children: "The authentication key for hotlink protection."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to the ", _jsx(_components.a, {
        href: "#http-code",
        children: "HTTP status code"
      }), " for possible reasons."]
    }), `
`, _jsx(_components.h3, {
      id: "example-3",
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
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/domains?id={your_domain}"
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
              children: '    "appid"'
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
              children: '"{your appid}"'
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
              children: '"{your authkey}"'
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
              children: '    "name"'
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
              children: '"{your domain}"'
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
              children: '    "region"'
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
              children: '"cn"'
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
              children: '    "type"'
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
              children: '"publish"'
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
