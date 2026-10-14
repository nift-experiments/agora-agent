import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manage thread members",
  description: "Shows how to manage thread members by calling the Agora Chat RESTful APIs."
};
export let _markdown = `

This page shows how to manage thread members by calling the Chat RESTful APIs. Before calling the following methods, ensure that you understand the call frequency limit described in [Limitations](../limitations#call-limit-of-server-sides).

## Common parameters [#common-parameters]

The following table lists common request and response parameters of the Chat RESTful APIs:

### Request parameters [#request-parameters]

| Parameter | Type   | Description                                                                                                                                                                                                            | Required |
| :-------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`host\`    | String | The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see [Get the information of your project](/en/realtime-media/im/get-started/enable#get-chat-project-information). | Yes      |
| \`app_id\`  | String | The unique identifier automatically assigned to each project by Agora                                                                                                                                                  | Yes      |

### Response parameters [#response-parameters]

| Parameter         | Type   | Description                                                                                          |
| :---------------- | :----- | :--------------------------------------------------------------------------------------------------- |
| \`action\`          | String | The request method.                                                                                  |
| \`organization\`    | String | The unique identifier assigned to each company (organization) by the Chat service.                   |
| \`application\`     | String | A unique internal ID assigned to each app by the Chat service. You can safely ignore this parameter. |
| \`applicationName\` | String | The unique identifier assigned to each app by the Chat service.                                      |
| \`data\`            | JSON   | The details of the response.                                                                         |
| \`timestamp\`       | Number | The Unix timestamp (ms) of the HTTP response.                                                        |
| \`duration\`        | Number | The duration (ms) from when the HTTP request is sent to the time the response is received.           |
| \`uri\`             | String | The request URI.                                                                                     |
| \`path\`            | String | The request path, which is part of the request URI. You can safely ignore this parameter.            |
| \`entities \`       | JSON   | The response entity.                                                                                 |
| \`properties\`      | String | The request property.                                                                                |

## Authorization [#authorization]

Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following \`Authorization\` field must be filled in the request header:

\`\`\`html
Authorization: Bearer \${YourAppToken}
\`\`\`

In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. Chat RESTful APIs only support authenticating users using app tokens. For details, see [Authentication using App Token](/en/realtime-media/im/build/secure-access-and-authentication/authentication).

## Retrieving thread members [#retrieving-thread-members]

Retrieves all the members in the specified thread.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request]

\`\`\`html
GET https://{host}/app-id/{app_id}/thread/{thread_id}/users?limit={N}&cursor={cursor}
\`\`\`

#### Path parameter [#path-parameter]

| Parameter   | Type   | Description           | Required |
| :---------- | :----- | :-------------------- | :------- |
| \`thread_id\` | String | The ID of the thread. | Yes      |

For the descriptions of the other path parameters, see [Common Parameters](#request).

#### Query parameter [#query-parameter]

| Parameter | Type   | Description                                                                                            | Required |
| :-------- | :----- | :----------------------------------------------------------------------------------------------------- | :------- |
| \`limit\`   | String | The maximum number of threads to retrieve per page. The range is \\[1, 50]. The default value is 50.    | No       |
| \`cursor\`  | String | The page from which to start retrieving threads. Pass in \`null\` or an empty string at the first query. | No       |

#### Request header [#request-header]

For the descriptions of the request headers, see [Authorization](#auth).

### HTTP response [#http-response]

#### Response body [#response-body]

If the returned HTTP status code is \`200\`, the request succeeds, and the data field in the response body contains the following parameters:

| Parameter           | Type   | Description                                                                    |
| :------------------ | :----- | :----------------------------------------------------------------------------- |
| \`affiliations\`      | List   | The user IDs of users to add to the thread. You can pass in up to 10 user IDs. |
| \`properties.cursor\` | String | The cursor that indicates the starting position of the next query.             |

For other fields and descriptions, see [Common parameters](#response).

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#status-codes) for possible causes.

### Example [#example]

#### Request example [#request-example]

\`\`\`json
curl -X GET http://XXXX.com/XXXX/testapp/thread/177916702949377/users -H 'Authorization: Bearer '
\`\`\`

#### Response example [#response-example]

\`\`\`json
{
    "action": "get",
    "data": {
        "affiliations": [
            "test4"
        ]
    },
    "duration": 4,
    "properties": {
        "cursor": "ZGNiMjRmNGY1YjczYjlhYTNkYjk1MDY2YmEyNzFmODQ6aW06dGhyZWFkOmVhc2Vtb2ItZGVtbyN0ZXN0eToyMA"
    },
    "timestamp": 1650872048366,
    "uri": "http://XXXX.com/XXXX/testy/thread/179786360094768/users"
}
\`\`\`

## Adding multiple users to a thread [#adding-multiple-users-to-a-thread]

Adds multiple users to the specified thread. You can add a maximum of 10 users to a thread at each call.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-1]

\`\`\`html
POST https://{host}/app-id/{app_id}/thread/{thread_id}/users
\`\`\`

#### Path parameter [#path-parameter-1]

| Parameter   | Type   | Description           | Required |
| :---------- | :----- | :-------------------- | :------- |
| \`thread_id\` | String | The ID of the thread. | Yes      |

For the descriptions of the other path parameters, see [Common Parameters](#request).

#### Request header [#request-header-1]

For the descriptions of the request headers, see [Authorization](#auth).

#### Request body [#request-body]

| Parameter   | Type | Description                                 | Required |
| :---------- | :--- | :------------------------------------------ | :------- |
| \`usernames\` | List | The usernames of the members in the thread. | Yes      |

### HTTP response [#http-response-1]

#### Response body [#response-body-1]

If the returned HTTP status code is \`200\`, the request succeeds; otherwise, the request fails, and you can refer to [Status codes](#status-codes) for possible causes.

For other fields and descriptions, see [Common parameters](#response).

### Example [#example-1]

#### Request example [#request-example-1]

\`\`\`bash
curl -X POST http://XXXX.com/XXXX/testapp/thread/177916702949377/users -H 'Authorization: Bearer '-d '{
"usernames": [
"test2",
"test3"
]
}'
\`\`\`

#### Response example [#response-example-1]

\`\`\`json
{
    "action": "post",
    "applicationName": "testapp",
    "data": {
        "status": "ok"
    },
    "duration": 1069,
    "organization": "XXXX",
    "timestamp": 1650872649160,
    "uri": "http://XXXX.com/XXXX/testy/thread/179786360094768/joined_thread"
}
\`\`\`

## Removing multiple thread members [#removing-multiple-thread-members]

Removes multiple users from the specified thread. You can remove a maximum of 10 users from a thread at each call.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-2]

\`\`\`html
DELETE https://{host}/app-id/{app_id}/thread/{thread_id}/users
\`\`\`

#### Path parameter [#path-parameter-2]

| Parameter   | Type   | Description           | Required |
| :---------- | :----- | :-------------------- | :------- |
| \`thread_id\` | String | The ID of the thread. | Yes      |

For the descriptions of the other path parameters, see [Common Parameters](#request).

#### Request header [#request-header-2]

For the descriptions of the request headers, see [Authorization](#auth).

#### Request body [#request-body-1]

| Parameter   | Type | Description                                                                           | Required |
| :---------- | :--- | :------------------------------------------------------------------------------------ | :------- |
| \`usernames\` | List | The user IDs of members to remove from the thread. You can pass in up to 10 user IDs. | Yes      |

### HTTP response [#http-response-2]

#### Response body [#response-body-2]

If the returned HTTP status code is \`200\`, the request succeeds, and the data field in the response body contains the following parameters:

| Parameter | Type    | Description                                                                               |
| :-------- | :------ | :---------------------------------------------------------------------------------------- |
| \`result\`  | Boolean | Whether the specified thread member is removed from the thread: \`true\`: Yes. \`false\`: No. |
| \`user\`    | String  | The username of the removed member in the thread.                                         |

For other fields and descriptions, see [Common parameters](#response).

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#status-codes) for possible causes.

### Example [#example-2]

#### Request example [#request-example-2]

\`\`\`json
curl -X DELETE http://XXXX.com/XXXX/testapp/thread/177916702949377/users -H 'Authorization: Bearer '
\`\`\`

#### Response example [#response-example-2]

\`\`\`json
{
    "action": "delete",
    "applicationName": "testy",
    "duration": 12412,
    "entities": [
        {
            "result": false,
            "user": "test2"
        },
        {
            "result": false,
            "user": "test6"
        }
    ],
    "organization": "XXXX",
    "timestamp": 1650874050419,
    "uri": "http://XXXX.com/XXXX/testy/thread/179786360094768/users"
}
\`\`\`

## Status codes [#status-codes]

For details, see [HTTP Status Codes](../http-status-codes).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page shows how to manage thread members by calling the Chat RESTful APIs. Before calling the following methods, ensure that you understand the call frequency limit described in Limitations."
  }, {
    heading: "common-parameters",
    content: "The following table lists common request and response parameters of the Chat RESTful APIs:"
  }, {
    heading: "request-parameters",
    content: "Parameter"
  }, {
    heading: "request-parameters",
    content: "Type"
  }, {
    heading: "request-parameters",
    content: "Description"
  }, {
    heading: "request-parameters",
    content: "Required"
  }, {
    heading: "request-parameters",
    content: "`host`"
  }, {
    heading: "request-parameters",
    content: "String"
  }, {
    heading: "request-parameters",
    content: "The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see Get the information of your project."
  }, {
    heading: "request-parameters",
    content: "Yes"
  }, {
    heading: "request-parameters",
    content: "`app_id`"
  }, {
    heading: "request-parameters",
    content: "String"
  }, {
    heading: "request-parameters",
    content: "The unique identifier automatically assigned to each project by Agora"
  }, {
    heading: "request-parameters",
    content: "Yes"
  }, {
    heading: "response-parameters",
    content: "Parameter"
  }, {
    heading: "response-parameters",
    content: "Type"
  }, {
    heading: "response-parameters",
    content: "Description"
  }, {
    heading: "response-parameters",
    content: "`action`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "The request method."
  }, {
    heading: "response-parameters",
    content: "`organization`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "The unique identifier assigned to each company (organization) by the Chat service."
  }, {
    heading: "response-parameters",
    content: "`application`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "A unique internal ID assigned to each app by the Chat service. You can safely ignore this parameter."
  }, {
    heading: "response-parameters",
    content: "`applicationName`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "The unique identifier assigned to each app by the Chat service."
  }, {
    heading: "response-parameters",
    content: "`data`"
  }, {
    heading: "response-parameters",
    content: "JSON"
  }, {
    heading: "response-parameters",
    content: "The details of the response."
  }, {
    heading: "response-parameters",
    content: "`timestamp`"
  }, {
    heading: "response-parameters",
    content: "Number"
  }, {
    heading: "response-parameters",
    content: "The Unix timestamp (ms) of the HTTP response."
  }, {
    heading: "response-parameters",
    content: "`duration`"
  }, {
    heading: "response-parameters",
    content: "Number"
  }, {
    heading: "response-parameters",
    content: "The duration (ms) from when the HTTP request is sent to the time the response is received."
  }, {
    heading: "response-parameters",
    content: "`uri`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "The request URI."
  }, {
    heading: "response-parameters",
    content: "`path`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "The request path, which is part of the request URI. You can safely ignore this parameter."
  }, {
    heading: "response-parameters",
    content: "`entities `"
  }, {
    heading: "response-parameters",
    content: "JSON"
  }, {
    heading: "response-parameters",
    content: "The response entity."
  }, {
    heading: "response-parameters",
    content: "`properties`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "The request property."
  }, {
    heading: "authorization",
    content: "Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following `Authorization` field must be filled in the request header:"
  }, {
    heading: "authorization",
    content: "In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. Chat RESTful APIs only support authenticating users using app tokens. For details, see Authentication using App Token."
  }, {
    heading: "retrieving-thread-members",
    content: "Retrieves all the members in the specified thread."
  }, {
    heading: "retrieving-thread-members",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
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
    content: "Required"
  }, {
    heading: "path-parameter",
    content: "`thread_id`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "The ID of the thread."
  }, {
    heading: "path-parameter",
    content: "Yes"
  }, {
    heading: "path-parameter",
    content: "For the descriptions of the other path parameters, see Common Parameters."
  }, {
    heading: "query-parameter",
    content: "Parameter"
  }, {
    heading: "query-parameter",
    content: "Type"
  }, {
    heading: "query-parameter",
    content: "Description"
  }, {
    heading: "query-parameter",
    content: "Required"
  }, {
    heading: "query-parameter",
    content: "`limit`"
  }, {
    heading: "query-parameter",
    content: "String"
  }, {
    heading: "query-parameter",
    content: "The maximum number of threads to retrieve per page. The range is \\[1, 50]. The default value is 50."
  }, {
    heading: "query-parameter",
    content: "No"
  }, {
    heading: "query-parameter",
    content: "`cursor`"
  }, {
    heading: "query-parameter",
    content: "String"
  }, {
    heading: "query-parameter",
    content: "The page from which to start retrieving threads. Pass in `null` or an empty string at the first query."
  }, {
    heading: "query-parameter",
    content: "No"
  }, {
    heading: "request-header",
    content: "For the descriptions of the request headers, see Authorization."
  }, {
    heading: "response-body",
    content: "If the returned HTTP status code is `200`, the request succeeds, and the data field in the response body contains the following parameters:"
  }, {
    heading: "response-body",
    content: "Parameter"
  }, {
    heading: "response-body",
    content: "Type"
  }, {
    heading: "response-body",
    content: "Description"
  }, {
    heading: "response-body",
    content: "`affiliations`"
  }, {
    heading: "response-body",
    content: "List"
  }, {
    heading: "response-body",
    content: "The user IDs of users to add to the thread. You can pass in up to 10 user IDs."
  }, {
    heading: "response-body",
    content: "`properties.cursor`"
  }, {
    heading: "response-body",
    content: "String"
  }, {
    heading: "response-body",
    content: "The cursor that indicates the starting position of the next query."
  }, {
    heading: "response-body",
    content: "For other fields and descriptions, see Common parameters."
  }, {
    heading: "response-body",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible causes."
  }, {
    heading: "adding-multiple-users-to-a-thread",
    content: "Adds multiple users to the specified thread. You can add a maximum of 10 users to a thread at each call."
  }, {
    heading: "adding-multiple-users-to-a-thread",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
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
    content: "Required"
  }, {
    heading: "path-parameter-1",
    content: "`thread_id`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "The ID of the thread."
  }, {
    heading: "path-parameter-1",
    content: "Yes"
  }, {
    heading: "path-parameter-1",
    content: "For the descriptions of the other path parameters, see Common Parameters."
  }, {
    heading: "request-header-1",
    content: "For the descriptions of the request headers, see Authorization."
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
    content: "Required"
  }, {
    heading: "request-body",
    content: "`usernames`"
  }, {
    heading: "request-body",
    content: "List"
  }, {
    heading: "request-body",
    content: "The usernames of the members in the thread."
  }, {
    heading: "request-body",
    content: "Yes"
  }, {
    heading: "response-body-1",
    content: "If the returned HTTP status code is `200`, the request succeeds; otherwise, the request fails, and you can refer to Status codes for possible causes."
  }, {
    heading: "response-body-1",
    content: "For other fields and descriptions, see Common parameters."
  }, {
    heading: "removing-multiple-thread-members",
    content: "Removes multiple users from the specified thread. You can remove a maximum of 10 users from a thread at each call."
  }, {
    heading: "removing-multiple-thread-members",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
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
    content: "Required"
  }, {
    heading: "path-parameter-2",
    content: "`thread_id`"
  }, {
    heading: "path-parameter-2",
    content: "String"
  }, {
    heading: "path-parameter-2",
    content: "The ID of the thread."
  }, {
    heading: "path-parameter-2",
    content: "Yes"
  }, {
    heading: "path-parameter-2",
    content: "For the descriptions of the other path parameters, see Common Parameters."
  }, {
    heading: "request-header-2",
    content: "For the descriptions of the request headers, see Authorization."
  }, {
    heading: "request-body-1",
    content: "Parameter"
  }, {
    heading: "request-body-1",
    content: "Type"
  }, {
    heading: "request-body-1",
    content: "Description"
  }, {
    heading: "request-body-1",
    content: "Required"
  }, {
    heading: "request-body-1",
    content: "`usernames`"
  }, {
    heading: "request-body-1",
    content: "List"
  }, {
    heading: "request-body-1",
    content: "The user IDs of members to remove from the thread. You can pass in up to 10 user IDs."
  }, {
    heading: "request-body-1",
    content: "Yes"
  }, {
    heading: "response-body-2",
    content: "If the returned HTTP status code is `200`, the request succeeds, and the data field in the response body contains the following parameters:"
  }, {
    heading: "response-body-2",
    content: "Parameter"
  }, {
    heading: "response-body-2",
    content: "Type"
  }, {
    heading: "response-body-2",
    content: "Description"
  }, {
    heading: "response-body-2",
    content: "`result`"
  }, {
    heading: "response-body-2",
    content: "Boolean"
  }, {
    heading: "response-body-2",
    content: "Whether the specified thread member is removed from the thread: `true`: Yes. `false`: No."
  }, {
    heading: "response-body-2",
    content: "`user`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The username of the removed member in the thread."
  }, {
    heading: "response-body-2",
    content: "For other fields and descriptions, see Common parameters."
  }, {
    heading: "response-body-2",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible causes."
  }, {
    heading: "status-codes",
    content: "For details, see HTTP Status Codes."
  }],
  headings: [{
    id: "common-parameters",
    content: "Common parameters"
  }, {
    id: "request-parameters",
    content: "Request parameters"
  }, {
    id: "response-parameters",
    content: "Response parameters"
  }, {
    id: "authorization",
    content: "Authorization"
  }, {
    id: "retrieving-thread-members",
    content: "Retrieving thread members"
  }, {
    id: "http-request",
    content: "HTTP request"
  }, {
    id: "path-parameter",
    content: "Path parameter"
  }, {
    id: "query-parameter",
    content: "Query parameter"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "http-response",
    content: "HTTP response"
  }, {
    id: "response-body",
    content: "Response body"
  }, {
    id: "example",
    content: "Example"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "response-example",
    content: "Response example"
  }, {
    id: "adding-multiple-users-to-a-thread",
    content: "Adding multiple users to a thread"
  }, {
    id: "http-request-1",
    content: "HTTP request"
  }, {
    id: "path-parameter-1",
    content: "Path parameter"
  }, {
    id: "request-header-1",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "http-response-1",
    content: "HTTP response"
  }, {
    id: "response-body-1",
    content: "Response body"
  }, {
    id: "example-1",
    content: "Example"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "response-example-1",
    content: "Response example"
  }, {
    id: "removing-multiple-thread-members",
    content: "Removing multiple thread members"
  }, {
    id: "http-request-2",
    content: "HTTP request"
  }, {
    id: "path-parameter-2",
    content: "Path parameter"
  }, {
    id: "request-header-2",
    content: "Request header"
  }, {
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "http-response-2",
    content: "HTTP response"
  }, {
    id: "response-body-2",
    content: "Response body"
  }, {
    id: "example-2",
    content: "Example"
  }, {
    id: "request-example-2",
    content: "Request example"
  }, {
    id: "response-example-2",
    content: "Response example"
  }, {
    id: "status-codes",
    content: "Status codes"
  }]
};
export let toc = [{
  depth: 2,
  url: "#common-parameters",
  title: _jsx(_Fragment, {
    children: "Common parameters"
  })
}, {
  depth: 3,
  url: "#request-parameters",
  title: _jsx(_Fragment, {
    children: "Request parameters"
  })
}, {
  depth: 3,
  url: "#response-parameters",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 2,
  url: "#authorization",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 2,
  url: "#retrieving-thread-members",
  title: _jsx(_Fragment, {
    children: "Retrieving thread members"
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
  url: "#query-parameter",
  title: _jsx(_Fragment, {
    children: "Query parameter"
  })
}, {
  depth: 4,
  url: "#request-header",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#http-response",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-body",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#example",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#adding-multiple-users-to-a-thread",
  title: _jsx(_Fragment, {
    children: "Adding multiple users to a thread"
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
  url: "#request-header-1",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body",
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
  depth: 4,
  url: "#response-body-1",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#example-1",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#request-example-1",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example-1",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#removing-multiple-thread-members",
  title: _jsx(_Fragment, {
    children: "Removing multiple thread members"
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
  depth: 4,
  url: "#request-header-2",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-1",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 3,
  url: "#http-response-2",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-body-2",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#example-2",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#request-example-2",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example-2",
  title: _jsx(_Fragment, {
    children: "Response example"
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
    h3: "h3",
    h4: "h4",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["This page shows how to manage thread members by calling the Chat RESTful APIs. Before calling the following methods, ensure that you understand the call frequency limit described in ", _jsx(_components.a, {
        href: "../limitations#call-limit-of-server-sides",
        children: "Limitations"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "common-parameters",
      children: "Common parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following table lists common request and response parameters of the Chat RESTful APIs:"
    }), `
`, _jsx(_components.h3, {
      id: "request-parameters",
      children: "Request parameters"
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
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required"
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see ", _jsx(_components.a, {
              href: "/en/realtime-media/im/get-started/enable#get-chat-project-information",
              children: "Get the information of your project"
            }), "."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "app_id"
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
            children: "The unique identifier automatically assigned to each project by Agora"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "response-parameters",
      children: "Response parameters"
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
              children: "action"
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
            children: "The request method."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "organization"
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
            children: "The unique identifier assigned to each company (organization) by the Chat service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "application"
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
            children: "A unique internal ID assigned to each app by the Chat service. You can safely ignore this parameter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "applicationName"
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
            children: "The unique identifier assigned to each app by the Chat service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The details of the response."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Unix timestamp (ms) of the HTTP response."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "duration"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The duration (ms) from when the HTTP request is sent to the time the response is received."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uri"
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
            children: "The request URI."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "path"
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
            children: "The request path, which is part of the request URI. You can safely ignore this parameter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "entities "
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The response entity."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "properties"
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
            children: "The request property."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "authorization",
      children: "Authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following ", _jsx(_components.code, {
        children: "Authorization"
      }), " field must be filled in the request header:"]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Bearer ${YourAppToken}"
            })
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. Chat RESTful APIs only support authenticating users using app tokens. For details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/im/build/secure-access-and-authentication/authentication",
        children: "Authentication using App Token"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "retrieving-thread-members",
      children: "Retrieving thread members"
    }), `
`, _jsx(_components.p, {
      children: "Retrieves all the members in the specified thread."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 100 per second."
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
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET https://{host}/app-id/{app_id}/thread/{thread_id}/users?limit={N}&cursor={cursor}"
            })
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
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "thread_id"
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
            children: "The ID of the thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For the descriptions of the other path parameters, see ", _jsx(_components.a, {
        href: "#request",
        children: "Common Parameters"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameter",
      children: "Query parameter"
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
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "limit"
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
            children: "The maximum number of threads to retrieve per page. The range is [1, 50]. The default value is 50."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cursor"
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
            children: ["The page from which to start retrieving threads. Pass in ", _jsx(_components.code, {
              children: "null"
            }), " or an empty string at the first query."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-header",
      children: "Request header"
    }), `
`, _jsxs(_components.p, {
      children: ["For the descriptions of the request headers, see ", _jsx(_components.a, {
        href: "#auth",
        children: "Authorization"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body",
      children: "Response body"
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request succeeds, and the data field in the response body contains the following parameters:"]
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
              children: "affiliations"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user IDs of users to add to the thread. You can pass in up to 10 user IDs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "properties.cursor"
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
            children: "The cursor that indicates the starting position of the next query."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and descriptions, see ", _jsx(_components.a, {
        href: "#response",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#status-codes",
        children: "Status codes"
      }), " for possible causes."]
    }), `
`, _jsx(_components.h3, {
      id: "example",
      children: "Example"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X GET http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX.com/XXXX/testapp/thread/177916702949377/users -H 'Authorization: Bearer '"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example",
      children: "Response example"
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
              children: '    "action"'
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
              children: '"get"'
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
              children: '    "data"'
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
              children: '        "affiliations"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "test4"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "duration"'
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
              children: "4"
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
              children: '    "properties"'
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
              children: '        "cursor"'
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
              children: '"ZGNiMjRmNGY1YjczYjlhYTNkYjk1MDY2YmEyNzFmODQ6aW06dGhyZWFkOmVhc2Vtb2ItZGVtbyN0ZXN0eToyMA"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "timestamp"'
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
              children: "1650872048366"
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
              children: '    "uri"'
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
              children: '"http://XXXX.com/XXXX/testy/thread/179786360094768/users"'
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
      id: "adding-multiple-users-to-a-thread",
      children: "Adding multiple users to a thread"
    }), `
`, _jsx(_components.p, {
      children: "Adds multiple users to the specified thread. You can add a maximum of 10 users to a thread at each call."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 100 per second."
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
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "POST https://{host}/app-id/{app_id}/thread/{thread_id}/users"
            })
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
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "thread_id"
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
            children: "The ID of the thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For the descriptions of the other path parameters, see ", _jsx(_components.a, {
        href: "#request",
        children: "Common Parameters"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-1",
      children: "Request header"
    }), `
`, _jsxs(_components.p, {
      children: ["For the descriptions of the request headers, see ", _jsx(_components.a, {
        href: "#auth",
        children: "Authorization"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
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
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "usernames"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The usernames of the members in the thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-1",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-1",
      children: "Response body"
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request succeeds; otherwise, the request fails, and you can refer to ", _jsx(_components.a, {
        href: "#status-codes",
        children: "Status codes"
      }), " for possible causes."]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and descriptions, see ", _jsx(_components.a, {
        href: "#response",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "example-1",
      children: "Example"
    }), `
`, _jsx(_components.h4, {
      id: "request-example-1",
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
              children: " -X"
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
              children: " http://XXXX.com/XXXX/testapp/thread/177916702949377/users"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -H"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Bearer '-d"
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
              children: '"usernames": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"test2",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"test3"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "]"
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
`, _jsx(_components.h4, {
      id: "response-example-1",
      children: "Response example"
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
              children: '    "action"'
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
              children: '"post"'
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
              children: '    "applicationName"'
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
              children: '"testapp"'
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
              children: '    "data"'
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
              children: '        "status"'
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
              children: '"ok"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "duration"'
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
              children: "1069"
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
              children: '    "organization"'
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
              children: '"XXXX"'
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
              children: '    "timestamp"'
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
              children: "1650872649160"
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
              children: '    "uri"'
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
              children: '"http://XXXX.com/XXXX/testy/thread/179786360094768/joined_thread"'
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
      id: "removing-multiple-thread-members",
      children: "Removing multiple thread members"
    }), `
`, _jsx(_components.p, {
      children: "Removes multiple users from the specified thread. You can remove a maximum of 10 users from a thread at each call."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 100 per second."
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
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "DELETE https://{host}/app-id/{app_id}/thread/{thread_id}/users"
            })
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
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "thread_id"
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
            children: "The ID of the thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For the descriptions of the other path parameters, see ", _jsx(_components.a, {
        href: "#request",
        children: "Common Parameters"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-2",
      children: "Request header"
    }), `
`, _jsxs(_components.p, {
      children: ["For the descriptions of the request headers, see ", _jsx(_components.a, {
        href: "#auth",
        children: "Authorization"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-body-1",
      children: "Request body"
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
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "usernames"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user IDs of members to remove from the thread. You can pass in up to 10 user IDs."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-2",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-2",
      children: "Response body"
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request succeeds, and the data field in the response body contains the following parameters:"]
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
              children: "result"
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
            children: ["Whether the specified thread member is removed from the thread: ", _jsx(_components.code, {
              children: "true"
            }), ": Yes. ", _jsx(_components.code, {
              children: "false"
            }), ": No."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "user"
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
            children: "The username of the removed member in the thread."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and descriptions, see ", _jsx(_components.a, {
        href: "#response",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#status-codes",
        children: "Status codes"
      }), " for possible causes."]
    }), `
`, _jsx(_components.h3, {
      id: "example-2",
      children: "Example"
    }), `
`, _jsx(_components.h4, {
      id: "request-example-2",
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X DELETE http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX.com/XXXX/testapp/thread/177916702949377/users -H 'Authorization: Bearer '"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-2",
      children: "Response example"
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
              children: '    "action"'
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
              children: '"delete"'
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
              children: '    "applicationName"'
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
              children: '"testy"'
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
              children: '    "duration"'
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
              children: "12412"
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
              children: '    "entities"'
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
              children: '            "result"'
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
              children: '            "user"'
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
              children: '"test2"'
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
              children: '            "result"'
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
              children: '            "user"'
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
              children: '"test6"'
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
              children: "    ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "organization"'
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
              children: '"XXXX"'
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
              children: '    "timestamp"'
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
              children: "1650874050419"
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
              children: '    "uri"'
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
              children: '"http://XXXX.com/XXXX/testy/thread/179786360094768/users"'
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
`, _jsxs(_components.p, {
      children: ["For details, see ", _jsx(_components.a, {
        href: "../http-status-codes",
        children: "HTTP Status Codes"
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
