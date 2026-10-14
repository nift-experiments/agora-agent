import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Room management",
  description: "Create, query, update, and manage Interactive Whiteboard rooms through the REST API."
};
export let _markdown = `

## Create a room (POST) [#create-a-room-post]

Call this API to create a live room.

### Prototype [#prototype]

* Method: \`POST\`
* Access point: \`https://api.netless.link/v5/rooms\`

### Request header [#request-header]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string    | Required          | The SDK token, which can be obtained through one of the following methods:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                        |

### Request body [#request-body]

| Parameter  | Data type | Required/Optional | Description                                                                                                                                                                            |
| :--------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`isRecord\` | boolean   | Optional          | This function is not supported yet. This parameter is \`false\` by default for \`us-sv\`, \`sg\`, \`in-mum\`, \`eu\` region.                                                                     |
| \`limit\`    | integer   | Optional          | The maximum number of users with a \`writer\` or \`admin\` token who can be in the room at the same time. If you set this to \`0\`, there is no maximum. Agora recommends setting it to \`0\`. |

### Request example [#request-example]

\`\`\`bash
POST /v5/rooms
Host: api.netless.link
token: NETLESSSDK_YWs9xxxxxxZGM2MjRi
region: us-sv
Content-Type: application/json

{
 "isRecord": false
}
\`\`\`

### HTTP response [#http-response]

For details about all possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`201\`, the request is successful. The response returns the status code and corresponding parameters.

**The following is a response example for a successful request:**

\`\`\`json
"status": 201,
"body":
{
    "uuid": "4a5xxxxx6b",
    "teamUUID": "RMxxxxx5aw",
    "appUUID": "i54xxxxx1AQ",
	"isRecord": false,
    "isBan": false,
    "createdAt": "2021-01-18T06:56:29.432Z",
    "limit": 0
}
\`\`\`

**Description of parameters in the response:**

| Parameter   | Data type | Description                                                                                                                                      |
| :---------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`      | string    | The room UUID, which is the unique identifier of a room.                                                                                         |
| \`teamUUID\`  | string    | The unique identifier of the Agora Console account that creates the whiteboard project.                                                          |
| \`appUUID\`   | string    | The unique identifier of the whiteboard project.                                                                                                 |
| \`isRecord\`  | boolean   | Whether recording is enabled for the room:- \`true\`: Enabled.<br />- \`false\`: Not enabled.<br />                                                  |
| \`isBan\`     | boolean   | Whether the room is disabled:- \`true\`: Disabled.<br />- \`false\`: Not disabled.<br />                                                             |
| \`createdAt\` | string    | The UTC time when the room was created.                                                                                                          |
| \`limit\`     | integer   | The maximum number of users with a \`writer\` or \`admin\` token who can be in the room at the same time. If you set it to \`0\`, there is no maximum. |

If the status code is not \`201\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Get room information (GET) [#get-room-information-get]

Call this API to get information about a room.

### Prototype [#prototype-1]

* Method: GET
* Access point: \`https://api.netless.link/v5/rooms/{uuid}\`

### Request header [#request-header-1]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`token\`   | string    | Required          | An SDK token or room token with the \`writer\` or \`admin\` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                                         |

### Request path [#request-path]

The following parameters are required in the URL:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                 |
| :-------- | :-------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`    | string    | Required          | The room UUID, which is the unique identifier of a room. You can get it by calling the [RESTful API to create a room](#create-a-room-post) or calling the [RESTful API to get room information](#get-room-information-get). |

### Request example [#request-example-1]

\`\`\`bash
GET /v5/rooms/a7exxxxxxa69
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWs9xxxxxxM2MjRi
\`\`\`

### HTTP response [#http-response-1]

For details about all possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`200\`, the request is successful. The response returns the status code and corresponding parameters.

**The following is a response example for a successful request:**

\`\`\`json
"status": 200,
"body":
{
    "uuid": "4axxxxx96b",
    "teamUUID": "RMmxxxxx5aw",
    "appUUID": "i5xxxxx1AQ",
	"isRecord": false,
    "isBan": false,
    "createdAt": "2021-01-18T06:56:29.432Z",
    "limit": 0
}
\`\`\`

**Description of parameters in the response:**

| Parameter   | Data type | Description                                                                                                                                    |
| :---------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`      | string    | The room UUID, which is the unique identifier of a room.                                                                                       |
| \`teamUUID\`  | string    | The unique identifier of the Agora Console account that creates the whiteboard project.                                                        |
| \`appUUID\`   | string    | The unique identifier of the whiteboard project.                                                                                               |
| \`isRecord\`  | boolean   | Whether recording is enabled for the room:- \`true\`: Enabled.<br />- \`false\`: Not enabled.<br />                                                |
| \`isBan\`     | boolean   | Whether the room is disabled:- \`true\`: Disabled.<br />- \`false\`: Not disabled.<br />                                                           |
| \`createdAt\` | string    | The UTC time when the room was created.                                                                                                        |
| \`limit\`     | integer   | The maximum number of users with a \`writer\` or \`admin\` token who can be in the room at the same time. If you set it to 0, there is no maximum. |

If the status code is not \`200\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Get a room list (GET) [#get-a-room-list-get]

Call this API to get a list of rooms.

### Prototype [#prototype-2]

* Method: \`GET\`
* Access point: \`https://api.netless.link/v5/rooms\`

### Request header [#request-header-2]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`token\`   | string    | Required          | An SDK token or room token with the \`writer\` or \`admin\` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                                         |

### Query parameters [#query-parameters]

You can choose to pass in the following query parameters:

| Parameter   | Data type | Required/Optional | Description                                                                                                                         |
| :---------- | :-------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| \`beginUUID\` | string    | Optional          | The UUID of the room you want to start querying from.                                                                               |
| \`limit\`     | integer   | Optional          | The maximum number of rooms on the list. The range is (0,1000]. If you do not set this parameter, the default maximum is 100 rooms. |

### Request example [#request-example-2]

\`\`\`bash
GET /v5/rooms/?beginUUID=0e6exxxxxx4d95&limit=2
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWs9QlxxxxxxM2MjRi
\`\`\`

### HTTP response [#http-response-2]

For details about all possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`200\`, the request is successful. The response returns the status code and corresponding parameters.

**The following is a response example for a successful request:**

\`\`\`json
"status": 200,
"body":
[
    {
        "uuid": "0e6exxxxxxd95",
        "teamUUID": "RMmxxxxxxaw",
        "appUUID": "vVxxxxzJF-A",
	    "isRecord": false,
        "isBan": false,
        "createdAt": "2020-12-20T14:02:54.846Z",
        "limit": 0
    },
    {
        "uuid": "1d4xxxxxxca69",
        "teamUUID": "RMmxxxxxx5aw",
        "appUUID": "vVsxxxxzJF-A",
	    "isRecord": false,
        "isBan": false,
        "createdAt": "2020-12-20T14:10:29.265Z",
        "limit": 0
    }
]
\`\`\`

**Description of parameters in the response:**

| Parameter   | Data type | Description                                                                                                                                    |
| :---------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`      | string    | The room UUID, which is the unique identifier of a room.                                                                                       |
| \`teamUUID\`  | string    | The unique identifier of the Agora Console account that creates the whiteboard project.                                                        |
| \`appUUID\`   | string    | The unique identifier of the whiteboard project.                                                                                               |
| \`isRecord\`  | boolean   | Whether recording is enabled for the room: - \`true\`: Enabled.<br /> - \`false\`: Not enabled.<br />                                              |
| \`isBan\`     | boolean   | Whether the room is disabled: - \`true\`: Disabled.<br />- \`false\`: Not disabled.<br />                                                          |
| \`createdAt\` | string    | The UTC time when the room was created.                                                                                                        |
| \`limit\`     | integer   | The maximum number of users with a \`writer\` or \`admin\` token who can be in the room at the same time. If you set it to 0, there is no maximum. |

If the status code is not 200, the request fails. The response body includes a message field that describes the reason for the failure.

## Disable a room (PATCH) [#disable-a-room-patch]

Refer to the following information to disable or cancel disabling a room.

Note that when you disable a room, the users in the room will be removed and no users will be able to join the room.

If you want to cancel disabling the room, call the RESTful API again and set \`isBan\` to \`false\`.

### Prototype [#prototype-3]

* Method: \`PATCH\`
* Access point: \`https://api.netless.link/v5/rooms/{uuid}\`

### Request header [#request-header-3]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`token\`   | string    | Required          | An SDK token or room token with the \`admin\` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                             |

### Request path [#request-path-1]

The following parameters are required in the URL:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                 |
| :-------- | :-------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`    | string    | Required          | The room UUID, which is the unique identifier of a room. You can get it by calling the [RESTful API to create a room](#create-a-room-post) or calling the [RESTful API to get room information](#get-room-information-get). |

### Request body [#request-body-1]

| Parameter | Data type | Required/Optional | Description                                                                                     |
| :-------- | :-------- | :---------------- | :---------------------------------------------------------------------------------------------- |
| \`isBan\`   | boolean   | Required          | Whether the room is disabled:- \`true\`: Disabled.<br /> - \`false\`: (Default) Not disabled.<br /> |

### Request example [#request-example-3]

\`\`\`bash
PATCH /v5/rooms/0e6exxxxxx4d95
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWs9xxxxxx5ZGM2MjRi

{
  "isBan": true
}
\`\`\`

### HTTP response [#http-response-3]

For details about all possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`201\`, the request is successful. The response returns the status code and corresponding parameters.

**The following is a response example for a successful request:**

\`\`\`json
"status": 201,
"body":
{
    "uuid": "0e6xxxxxx95",
    "teamUUID": "RMxxxxxaw",
    "appUUID": "vVxxxxxJF-A",
	"isRecord": false,
    "isBan": true,
    "createdAt": "2020-12-20T14:02:54.846Z",
    "limit": 0
}
\`\`\`

**Description of parameters in the response:**

| Parameter   | Data type | Description                                                                                                                                      |
| :---------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Parameter   | Data type | Description                                                                                                                                      |
| \`uuid\`      | string    | The room UUID, which is the unique identifier of a room.                                                                                         |
| \`teamUUID\`  | string    | The unique identifier of the Agora Console account that creates the whiteboard project.                                                          |
| \`appUUID\`   | string    | The unique identifier of the whiteboard project.                                                                                                 |
| \`isRecord\`  | boolean   | Whether recording is enabled for the room:- \`true\`: Enabled.<br />- \`false\`: Not enabled.<br />                                                  |
| \`isBan\`     | boolean   | Whether the room is disabled:- \`true\`: Disabled.<br />- \`false\`: Not disabled.<br />                                                             |
| \`createdAt\` | string    | The UTC time when the room was created.                                                                                                          |
| \`limit\`     | integer   | The maximum number of users with a \`writer\` or \`admin\` token who can be in the room at the same time. If you set it to \`0\`, there is no maximum. |

If the status code is not \`201\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.
`;
export let structuredData = {
  contents: [{
    heading: "create-a-room-post",
    content: "Call this API to create a live room."
  }, {
    heading: "prototype",
    content: "Method: `POST`"
  }, {
    heading: "prototype",
    content: "Access point: `https://api.netless.link/v5/rooms`"
  }, {
    heading: "request-header",
    content: "Pass in the following parameters in the request header:"
  }, {
    heading: "request-header",
    content: "Parameter"
  }, {
    heading: "request-header",
    content: "Data type"
  }, {
    heading: "request-header",
    content: "Required/Optional"
  }, {
    heading: "request-header",
    content: "Description"
  }, {
    heading: "request-header",
    content: "`token`"
  }, {
    heading: "request-header",
    content: "string"
  }, {
    heading: "request-header",
    content: "Required"
  }, {
    heading: "request-header",
    content: "The SDK token, which can be obtained through one of the following methods:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Use code samples. See Generate a token from your app server.<br />"
  }, {
    heading: "request-header",
    content: "`region`"
  }, {
    heading: "request-header",
    content: "string"
  }, {
    heading: "request-header",
    content: "Required"
  }, {
    heading: "request-header",
    content: "Specifies a data center to process the request: - `us-sv`: Silicon Valley, US, which provides services to North America and South America.<br />- `sg`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- `in-mum`: Mumbai, India, which provides services to India.<br />- `eu`: Frankfurt, Europe, which provides services to Europe.<br />- `cn-hz`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />"
  }, {
    heading: "request-body",
    content: "Parameter"
  }, {
    heading: "request-body",
    content: "Data type"
  }, {
    heading: "request-body",
    content: "Required/Optional"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`isRecord`"
  }, {
    heading: "request-body",
    content: "boolean"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "This function is not supported yet. This parameter is `false` by default for `us-sv`, `sg`, `in-mum`, `eu` region."
  }, {
    heading: "request-body",
    content: "`limit`"
  }, {
    heading: "request-body",
    content: "integer"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "The maximum number of users with a `writer` or `admin` token who can be in the room at the same time. If you set this to `0`, there is no maximum. Agora recommends setting it to `0`."
  }, {
    heading: "http-response",
    content: "For details about all possible response status codes, see the status code table."
  }, {
    heading: "http-response",
    content: "If the status code is `201`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response",
    content: "**The following is a response example for a successful request:**"
  }, {
    heading: "http-response",
    content: "**Description of parameters in the response:**"
  }, {
    heading: "http-response",
    content: "Parameter"
  }, {
    heading: "http-response",
    content: "Data type"
  }, {
    heading: "http-response",
    content: "Description"
  }, {
    heading: "http-response",
    content: "`uuid`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The room UUID, which is the unique identifier of a room."
  }, {
    heading: "http-response",
    content: "`teamUUID`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The unique identifier of the Agora Console account that creates the whiteboard project."
  }, {
    heading: "http-response",
    content: "`appUUID`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The unique identifier of the whiteboard project."
  }, {
    heading: "http-response",
    content: "`isRecord`"
  }, {
    heading: "http-response",
    content: "boolean"
  }, {
    heading: "http-response",
    content: "Whether recording is enabled for the room:- `true`: Enabled.<br />- `false`: Not enabled.<br />"
  }, {
    heading: "http-response",
    content: "`isBan`"
  }, {
    heading: "http-response",
    content: "boolean"
  }, {
    heading: "http-response",
    content: "Whether the room is disabled:- `true`: Disabled.<br />- `false`: Not disabled.<br />"
  }, {
    heading: "http-response",
    content: "`createdAt`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The UTC time when the room was created."
  }, {
    heading: "http-response",
    content: "`limit`"
  }, {
    heading: "http-response",
    content: "integer"
  }, {
    heading: "http-response",
    content: "The maximum number of users with a `writer` or `admin` token who can be in the room at the same time. If you set it to `0`, there is no maximum."
  }, {
    heading: "http-response",
    content: "If the status code is not `201`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "get-room-information-get",
    content: "Call this API to get information about a room."
  }, {
    heading: "prototype-1",
    content: "Method: GET"
  }, {
    heading: "prototype-1",
    content: "Access point: `https://api.netless.link/v5/rooms/{uuid}`"
  }, {
    heading: "request-header-1",
    content: "Pass in the following parameters in the request header:"
  }, {
    heading: "request-header-1",
    content: "Parameter"
  }, {
    heading: "request-header-1",
    content: "Data type"
  }, {
    heading: "request-header-1",
    content: "Required/Optional"
  }, {
    heading: "request-header-1",
    content: "Description"
  }, {
    heading: "request-header-1",
    content: "`token`"
  }, {
    heading: "request-header-1",
    content: "string"
  }, {
    heading: "request-header-1",
    content: "Required"
  }, {
    heading: "request-header-1",
    content: "An SDK token or room token with the `writer` or `admin` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Use code samples. See Generate a token from your app server.<br />"
  }, {
    heading: "request-header-1",
    content: "`region`"
  }, {
    heading: "request-header-1",
    content: "string"
  }, {
    heading: "request-header-1",
    content: "Required"
  }, {
    heading: "request-header-1",
    content: "Specifies a data center to process the request: - `us-sv`: Silicon Valley, US, which provides services to North America and South America.<br />- `sg`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- `in-mum`: Mumbai, India, which provides services to India.<br />- `eu`: Frankfurt, Europe, which provides services to Europe.<br />- `cn-hz`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />"
  }, {
    heading: "request-path",
    content: "The following parameters are required in the URL:"
  }, {
    heading: "request-path",
    content: "Parameter"
  }, {
    heading: "request-path",
    content: "Data type"
  }, {
    heading: "request-path",
    content: "Required/Optional"
  }, {
    heading: "request-path",
    content: "Description"
  }, {
    heading: "request-path",
    content: "`uuid`"
  }, {
    heading: "request-path",
    content: "string"
  }, {
    heading: "request-path",
    content: "Required"
  }, {
    heading: "request-path",
    content: "The room UUID, which is the unique identifier of a room. You can get it by calling the RESTful API to create a room or calling the RESTful API to get room information."
  }, {
    heading: "http-response-1",
    content: "For details about all possible response status codes, see the status code table."
  }, {
    heading: "http-response-1",
    content: "If the status code is `200`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response-1",
    content: "**The following is a response example for a successful request:**"
  }, {
    heading: "http-response-1",
    content: "**Description of parameters in the response:**"
  }, {
    heading: "http-response-1",
    content: "Parameter"
  }, {
    heading: "http-response-1",
    content: "Data type"
  }, {
    heading: "http-response-1",
    content: "Description"
  }, {
    heading: "http-response-1",
    content: "`uuid`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The room UUID, which is the unique identifier of a room."
  }, {
    heading: "http-response-1",
    content: "`teamUUID`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The unique identifier of the Agora Console account that creates the whiteboard project."
  }, {
    heading: "http-response-1",
    content: "`appUUID`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The unique identifier of the whiteboard project."
  }, {
    heading: "http-response-1",
    content: "`isRecord`"
  }, {
    heading: "http-response-1",
    content: "boolean"
  }, {
    heading: "http-response-1",
    content: "Whether recording is enabled for the room:- `true`: Enabled.<br />- `false`: Not enabled.<br />"
  }, {
    heading: "http-response-1",
    content: "`isBan`"
  }, {
    heading: "http-response-1",
    content: "boolean"
  }, {
    heading: "http-response-1",
    content: "Whether the room is disabled:- `true`: Disabled.<br />- `false`: Not disabled.<br />"
  }, {
    heading: "http-response-1",
    content: "`createdAt`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The UTC time when the room was created."
  }, {
    heading: "http-response-1",
    content: "`limit`"
  }, {
    heading: "http-response-1",
    content: "integer"
  }, {
    heading: "http-response-1",
    content: "The maximum number of users with a `writer` or `admin` token who can be in the room at the same time. If you set it to 0, there is no maximum."
  }, {
    heading: "http-response-1",
    content: "If the status code is not `200`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "get-a-room-list-get",
    content: "Call this API to get a list of rooms."
  }, {
    heading: "prototype-2",
    content: "Method: `GET`"
  }, {
    heading: "prototype-2",
    content: "Access point: `https://api.netless.link/v5/rooms`"
  }, {
    heading: "request-header-2",
    content: "Pass in the following parameters in the request header:"
  }, {
    heading: "request-header-2",
    content: "Parameter"
  }, {
    heading: "request-header-2",
    content: "Data type"
  }, {
    heading: "request-header-2",
    content: "Required/Optional"
  }, {
    heading: "request-header-2",
    content: "Description"
  }, {
    heading: "request-header-2",
    content: "`token`"
  }, {
    heading: "request-header-2",
    content: "string"
  }, {
    heading: "request-header-2",
    content: "Required"
  }, {
    heading: "request-header-2",
    content: "An SDK token or room token with the `writer` or `admin` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Use code samples. See Generate a token from your app server.<br />"
  }, {
    heading: "request-header-2",
    content: "`region`"
  }, {
    heading: "request-header-2",
    content: "string"
  }, {
    heading: "request-header-2",
    content: "Required"
  }, {
    heading: "request-header-2",
    content: "Specifies a data center to process the request: - `us-sv`: Silicon Valley, US, which provides services to North America and South America.<br />- `sg`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- `in-mum`: Mumbai, India, which provides services to India.<br />- `eu`: Frankfurt, Europe, which provides services to Europe.<br />- `cn-hz`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />"
  }, {
    heading: "query-parameters",
    content: "You can choose to pass in the following query parameters:"
  }, {
    heading: "query-parameters",
    content: "Parameter"
  }, {
    heading: "query-parameters",
    content: "Data type"
  }, {
    heading: "query-parameters",
    content: "Required/Optional"
  }, {
    heading: "query-parameters",
    content: "Description"
  }, {
    heading: "query-parameters",
    content: "`beginUUID`"
  }, {
    heading: "query-parameters",
    content: "string"
  }, {
    heading: "query-parameters",
    content: "Optional"
  }, {
    heading: "query-parameters",
    content: "The UUID of the room you want to start querying from."
  }, {
    heading: "query-parameters",
    content: "`limit`"
  }, {
    heading: "query-parameters",
    content: "integer"
  }, {
    heading: "query-parameters",
    content: "Optional"
  }, {
    heading: "query-parameters",
    content: "The maximum number of rooms on the list. The range is (0,1000]. If you do not set this parameter, the default maximum is 100 rooms."
  }, {
    heading: "http-response-2",
    content: "For details about all possible response status codes, see the status code table."
  }, {
    heading: "http-response-2",
    content: "If the status code is `200`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response-2",
    content: "**The following is a response example for a successful request:**"
  }, {
    heading: "http-response-2",
    content: "**Description of parameters in the response:**"
  }, {
    heading: "http-response-2",
    content: "Parameter"
  }, {
    heading: "http-response-2",
    content: "Data type"
  }, {
    heading: "http-response-2",
    content: "Description"
  }, {
    heading: "http-response-2",
    content: "`uuid`"
  }, {
    heading: "http-response-2",
    content: "string"
  }, {
    heading: "http-response-2",
    content: "The room UUID, which is the unique identifier of a room."
  }, {
    heading: "http-response-2",
    content: "`teamUUID`"
  }, {
    heading: "http-response-2",
    content: "string"
  }, {
    heading: "http-response-2",
    content: "The unique identifier of the Agora Console account that creates the whiteboard project."
  }, {
    heading: "http-response-2",
    content: "`appUUID`"
  }, {
    heading: "http-response-2",
    content: "string"
  }, {
    heading: "http-response-2",
    content: "The unique identifier of the whiteboard project."
  }, {
    heading: "http-response-2",
    content: "`isRecord`"
  }, {
    heading: "http-response-2",
    content: "boolean"
  }, {
    heading: "http-response-2",
    content: "Whether recording is enabled for the room: - `true`: Enabled.<br /> - `false`: Not enabled.<br />"
  }, {
    heading: "http-response-2",
    content: "`isBan`"
  }, {
    heading: "http-response-2",
    content: "boolean"
  }, {
    heading: "http-response-2",
    content: "Whether the room is disabled: - `true`: Disabled.<br />- `false`: Not disabled.<br />"
  }, {
    heading: "http-response-2",
    content: "`createdAt`"
  }, {
    heading: "http-response-2",
    content: "string"
  }, {
    heading: "http-response-2",
    content: "The UTC time when the room was created."
  }, {
    heading: "http-response-2",
    content: "`limit`"
  }, {
    heading: "http-response-2",
    content: "integer"
  }, {
    heading: "http-response-2",
    content: "The maximum number of users with a `writer` or `admin` token who can be in the room at the same time. If you set it to 0, there is no maximum."
  }, {
    heading: "http-response-2",
    content: "If the status code is not 200, the request fails. The response body includes a message field that describes the reason for the failure."
  }, {
    heading: "disable-a-room-patch",
    content: "Refer to the following information to disable or cancel disabling a room."
  }, {
    heading: "disable-a-room-patch",
    content: "Note that when you disable a room, the users in the room will be removed and no users will be able to join the room."
  }, {
    heading: "disable-a-room-patch",
    content: "If you want to cancel disabling the room, call the RESTful API again and set `isBan` to `false`."
  }, {
    heading: "prototype-3",
    content: "Method: `PATCH`"
  }, {
    heading: "prototype-3",
    content: "Access point: `https://api.netless.link/v5/rooms/{uuid}`"
  }, {
    heading: "request-header-3",
    content: "Pass in the following parameters in the request header:"
  }, {
    heading: "request-header-3",
    content: "Parameter"
  }, {
    heading: "request-header-3",
    content: "Data type"
  }, {
    heading: "request-header-3",
    content: "Required/Optional"
  }, {
    heading: "request-header-3",
    content: "Description"
  }, {
    heading: "request-header-3",
    content: "`token`"
  }, {
    heading: "request-header-3",
    content: "string"
  }, {
    heading: "request-header-3",
    content: "Required"
  }, {
    heading: "request-header-3",
    content: "An SDK token or room token with the `admin` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Use code samples. See Generate a token from your app server.<br />"
  }, {
    heading: "request-header-3",
    content: "`region`"
  }, {
    heading: "request-header-3",
    content: "string"
  }, {
    heading: "request-header-3",
    content: "Required"
  }, {
    heading: "request-header-3",
    content: "Specifies a data center to process the request: - `us-sv`: Silicon Valley, US, which provides services to North America and South America.<br />- `sg`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- `in-mum`: Mumbai, India, which provides services to India.<br />- `eu`: Frankfurt, Europe, which provides services to Europe.<br />- `cn-hz`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />"
  }, {
    heading: "request-path-1",
    content: "The following parameters are required in the URL:"
  }, {
    heading: "request-path-1",
    content: "Parameter"
  }, {
    heading: "request-path-1",
    content: "Data type"
  }, {
    heading: "request-path-1",
    content: "Required/Optional"
  }, {
    heading: "request-path-1",
    content: "Description"
  }, {
    heading: "request-path-1",
    content: "`uuid`"
  }, {
    heading: "request-path-1",
    content: "string"
  }, {
    heading: "request-path-1",
    content: "Required"
  }, {
    heading: "request-path-1",
    content: "The room UUID, which is the unique identifier of a room. You can get it by calling the RESTful API to create a room or calling the RESTful API to get room information."
  }, {
    heading: "request-body-1",
    content: "Parameter"
  }, {
    heading: "request-body-1",
    content: "Data type"
  }, {
    heading: "request-body-1",
    content: "Required/Optional"
  }, {
    heading: "request-body-1",
    content: "Description"
  }, {
    heading: "request-body-1",
    content: "`isBan`"
  }, {
    heading: "request-body-1",
    content: "boolean"
  }, {
    heading: "request-body-1",
    content: "Required"
  }, {
    heading: "request-body-1",
    content: "Whether the room is disabled:- `true`: Disabled.<br /> - `false`: (Default) Not disabled.<br />"
  }, {
    heading: "http-response-3",
    content: "For details about all possible response status codes, see the status code table."
  }, {
    heading: "http-response-3",
    content: "If the status code is `201`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response-3",
    content: "**The following is a response example for a successful request:**"
  }, {
    heading: "http-response-3",
    content: "**Description of parameters in the response:**"
  }, {
    heading: "http-response-3",
    content: "Parameter"
  }, {
    heading: "http-response-3",
    content: "Data type"
  }, {
    heading: "http-response-3",
    content: "Description"
  }, {
    heading: "http-response-3",
    content: "Parameter"
  }, {
    heading: "http-response-3",
    content: "Data type"
  }, {
    heading: "http-response-3",
    content: "Description"
  }, {
    heading: "http-response-3",
    content: "`uuid`"
  }, {
    heading: "http-response-3",
    content: "string"
  }, {
    heading: "http-response-3",
    content: "The room UUID, which is the unique identifier of a room."
  }, {
    heading: "http-response-3",
    content: "`teamUUID`"
  }, {
    heading: "http-response-3",
    content: "string"
  }, {
    heading: "http-response-3",
    content: "The unique identifier of the Agora Console account that creates the whiteboard project."
  }, {
    heading: "http-response-3",
    content: "`appUUID`"
  }, {
    heading: "http-response-3",
    content: "string"
  }, {
    heading: "http-response-3",
    content: "The unique identifier of the whiteboard project."
  }, {
    heading: "http-response-3",
    content: "`isRecord`"
  }, {
    heading: "http-response-3",
    content: "boolean"
  }, {
    heading: "http-response-3",
    content: "Whether recording is enabled for the room:- `true`: Enabled.<br />- `false`: Not enabled.<br />"
  }, {
    heading: "http-response-3",
    content: "`isBan`"
  }, {
    heading: "http-response-3",
    content: "boolean"
  }, {
    heading: "http-response-3",
    content: "Whether the room is disabled:- `true`: Disabled.<br />- `false`: Not disabled.<br />"
  }, {
    heading: "http-response-3",
    content: "`createdAt`"
  }, {
    heading: "http-response-3",
    content: "string"
  }, {
    heading: "http-response-3",
    content: "The UTC time when the room was created."
  }, {
    heading: "http-response-3",
    content: "`limit`"
  }, {
    heading: "http-response-3",
    content: "integer"
  }, {
    heading: "http-response-3",
    content: "The maximum number of users with a `writer` or `admin` token who can be in the room at the same time. If you set it to `0`, there is no maximum."
  }, {
    heading: "http-response-3",
    content: "If the status code is not `201`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }],
  headings: [{
    id: "create-a-room-post",
    content: "Create a room (POST)"
  }, {
    id: "prototype",
    content: "Prototype"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "http-response",
    content: "HTTP response"
  }, {
    id: "get-room-information-get",
    content: "Get room information (GET)"
  }, {
    id: "prototype-1",
    content: "Prototype"
  }, {
    id: "request-header-1",
    content: "Request header"
  }, {
    id: "request-path",
    content: "Request path"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "http-response-1",
    content: "HTTP response"
  }, {
    id: "get-a-room-list-get",
    content: "Get a room list (GET)"
  }, {
    id: "prototype-2",
    content: "Prototype"
  }, {
    id: "request-header-2",
    content: "Request header"
  }, {
    id: "query-parameters",
    content: "Query parameters"
  }, {
    id: "request-example-2",
    content: "Request example"
  }, {
    id: "http-response-2",
    content: "HTTP response"
  }, {
    id: "disable-a-room-patch",
    content: "Disable a room (PATCH)"
  }, {
    id: "prototype-3",
    content: "Prototype"
  }, {
    id: "request-header-3",
    content: "Request header"
  }, {
    id: "request-path-1",
    content: "Request path"
  }, {
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "request-example-3",
    content: "Request example"
  }, {
    id: "http-response-3",
    content: "HTTP response"
  }]
};
export let toc = [{
  depth: 2,
  url: "#create-a-room-post",
  title: _jsx(_Fragment, {
    children: "Create a room (POST)"
  })
}, {
  depth: 3,
  url: "#prototype",
  title: _jsx(_Fragment, {
    children: "Prototype"
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
  depth: 3,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#http-response",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 2,
  url: "#get-room-information-get",
  title: _jsx(_Fragment, {
    children: "Get room information (GET)"
  })
}, {
  depth: 3,
  url: "#prototype-1",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 3,
  url: "#request-header-1",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#request-path",
  title: _jsx(_Fragment, {
    children: "Request path"
  })
}, {
  depth: 3,
  url: "#request-example-1",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#http-response-1",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 2,
  url: "#get-a-room-list-get",
  title: _jsx(_Fragment, {
    children: "Get a room list (GET)"
  })
}, {
  depth: 3,
  url: "#prototype-2",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 3,
  url: "#request-header-2",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 3,
  url: "#request-example-2",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#http-response-2",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 2,
  url: "#disable-a-room-patch",
  title: _jsx(_Fragment, {
    children: "Disable a room (PATCH)"
  })
}, {
  depth: 3,
  url: "#prototype-3",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 3,
  url: "#request-header-3",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#request-path-1",
  title: _jsx(_Fragment, {
    children: "Request path"
  })
}, {
  depth: 3,
  url: "#request-body-1",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 3,
  url: "#request-example-3",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#http-response-3",
  title: _jsx(_Fragment, {
    children: "HTTP response"
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
    children: [_jsx(_components.h2, {
      id: "create-a-room-post",
      children: "Create a room (POST)"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to create a live room."
    }), `
`, _jsx(_components.h3, {
      id: "prototype",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "POST"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.netless.link/v5/rooms"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "request-header",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "Pass in the following parameters in the request header:"
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
            children: "Data type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required/Optional"
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
              children: "token"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The SDK token, which can be obtained through one of the following methods:- Get a test-purpose SDK token from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", "- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md",
              children: "Generate an SDK token"
            }), ".", "- Use code samples. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "Generate a token from your app server"
            }), "."]
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
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Specifies a data center to process the request: - ", _jsx(_components.code, {
              children: "us-sv"
            }), ": Silicon Valley, US, which provides services to North America and South America.", "- ", _jsx(_components.code, {
              children: "sg"
            }), ": Singapore, which provides services to Singapore, East Asia, and Southeast Asia.", "- ", _jsx(_components.code, {
              children: "in-mum"
            }), ": Mumbai, India, which provides services to India.", "- ", _jsx(_components.code, {
              children: "eu"
            }), ": Frankfurt, Europe, which provides services to Europe.", "- ", _jsx(_components.code, {
              children: "cn-hz"
            }), ": Hangzhou, China, which provides services to the areas not covered by other data centers."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
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
            children: "Data type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required/Optional"
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
              children: "isRecord"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["This function is not supported yet. This parameter is ", _jsx(_components.code, {
              children: "false"
            }), " by default for ", _jsx(_components.code, {
              children: "us-sv"
            }), ", ", _jsx(_components.code, {
              children: "sg"
            }), ", ", _jsx(_components.code, {
              children: "in-mum"
            }), ", ", _jsx(_components.code, {
              children: "eu"
            }), " region."]
          })]
        }), _jsxs(_components.tr, {
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
            children: "integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The maximum number of users with a ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " token who can be in the room at the same time. If you set this to ", _jsx(_components.code, {
              children: "0"
            }), ", there is no maximum. Agora recommends setting it to ", _jsx(_components.code, {
              children: "0"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
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
              children: "POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /v5/rooms"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Host:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " api.netless.link"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "token:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " NETLESSSDK_YWs9xxxxxxZGM2MjRi"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "region:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " us-sv"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Content-Type:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " application/json"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ' "isRecord"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " false"
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
`, _jsx(_components.h3, {
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about all possible response status codes, see the ", _jsx(_components.a, {
        href: "overview#status-codes",
        children: "status code table"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "201"
      }), ", the request is successful. The response returns the status code and corresponding parameters."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "The following is a response example for a successful request:"
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
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"status"'
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
              children: "201"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"body"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsx(_components.span, {
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
              children: '    "uuid"'
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
              children: '"4a5xxxxx6b"'
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
              children: '    "teamUUID"'
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
              children: '"RMxxxxx5aw"'
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
              children: '    "appUUID"'
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
              children: '"i54xxxxx1AQ"'
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
              children: '\t"isRecord"'
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
              children: '    "isBan"'
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
              children: '    "createdAt"'
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
              children: '"2021-01-18T06:56:29.432Z"'
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
              children: '    "limit"'
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
              children: "0"
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
        children: "Description of parameters in the response:"
      })
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
            children: "Data type"
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
              children: "uuid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The room UUID, which is the unique identifier of a room."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "teamUUID"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The unique identifier of the Agora Console account that creates the whiteboard project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appUUID"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The unique identifier of the whiteboard project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "isRecord"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether recording is enabled for the room:- ", _jsx(_components.code, {
              children: "true"
            }), ": Enabled.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Not enabled."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "isBan"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether the room is disabled:- ", _jsx(_components.code, {
              children: "true"
            }), ": Disabled.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Not disabled."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "createdAt"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The UTC time when the room was created."
          })]
        }), _jsxs(_components.tr, {
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
            children: "integer"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The maximum number of users with a ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " token who can be in the room at the same time. If you set it to ", _jsx(_components.code, {
              children: "0"
            }), ", there is no maximum."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. The response body includes a ", _jsx(_components.code, {
        children: "message"
      }), " field that describes the reason for the failure."]
    }), `
`, _jsx(_components.h2, {
      id: "get-room-information-get",
      children: "Get room information (GET)"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to get information about a room."
    }), `
`, _jsx(_components.h3, {
      id: "prototype-1",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Method: GET"
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.netless.link/v5/rooms/{uuid}"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "request-header-1",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "Pass in the following parameters in the request header:"
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
            children: "Data type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required/Optional"
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
              children: "token"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["An SDK token or room token with the ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", "- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md",
              children: "Generate an SDK token"
            }), ".", "- Use code samples. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "Generate a token from your app server"
            }), "."]
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
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Specifies a data center to process the request: - ", _jsx(_components.code, {
              children: "us-sv"
            }), ": Silicon Valley, US, which provides services to North America and South America.", "- ", _jsx(_components.code, {
              children: "sg"
            }), ": Singapore, which provides services to Singapore, East Asia, and Southeast Asia.", "- ", _jsx(_components.code, {
              children: "in-mum"
            }), ": Mumbai, India, which provides services to India.", "- ", _jsx(_components.code, {
              children: "eu"
            }), ": Frankfurt, Europe, which provides services to Europe.", "- ", _jsx(_components.code, {
              children: "cn-hz"
            }), ": Hangzhou, China, which provides services to the areas not covered by other data centers."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-path",
      children: "Request path"
    }), `
`, _jsx(_components.p, {
      children: "The following parameters are required in the URL:"
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
            children: "Data type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required/Optional"
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
              children: "uuid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The room UUID, which is the unique identifier of a room. You can get it by calling the ", _jsx(_components.a, {
              href: "#create-a-room-post",
              children: "RESTful API to create a room"
            }), " or calling the ", _jsx(_components.a, {
              href: "#get-room-information-get",
              children: "RESTful API to get room information"
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
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
              children: "GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /v5/rooms/a7exxxxxxa69"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Host:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " api.netless.link"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "region:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " us-sv"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Content-Type:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " application/json"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "token:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " NETLESSSDK_YWs9xxxxxxM2MjRi"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "http-response-1",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about all possible response status codes, see the ", _jsx(_components.a, {
        href: "overview#status-codes",
        children: "status code table"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request is successful. The response returns the status code and corresponding parameters."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "The following is a response example for a successful request:"
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
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"status"'
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
              children: "200"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"body"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsx(_components.span, {
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
              children: '    "uuid"'
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
              children: '"4axxxxx96b"'
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
              children: '    "teamUUID"'
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
              children: '"RMmxxxxx5aw"'
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
              children: '    "appUUID"'
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
              children: '"i5xxxxx1AQ"'
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
              children: '\t"isRecord"'
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
              children: '    "isBan"'
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
              children: '    "createdAt"'
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
              children: '"2021-01-18T06:56:29.432Z"'
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
              children: '    "limit"'
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
              children: "0"
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
        children: "Description of parameters in the response:"
      })
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
            children: "Data type"
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
              children: "uuid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The room UUID, which is the unique identifier of a room."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "teamUUID"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The unique identifier of the Agora Console account that creates the whiteboard project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appUUID"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The unique identifier of the whiteboard project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "isRecord"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether recording is enabled for the room:- ", _jsx(_components.code, {
              children: "true"
            }), ": Enabled.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Not enabled."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "isBan"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether the room is disabled:- ", _jsx(_components.code, {
              children: "true"
            }), ": Disabled.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Not disabled."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "createdAt"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The UTC time when the room was created."
          })]
        }), _jsxs(_components.tr, {
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
            children: "integer"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The maximum number of users with a ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " token who can be in the room at the same time. If you set it to 0, there is no maximum."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. The response body includes a ", _jsx(_components.code, {
        children: "message"
      }), " field that describes the reason for the failure."]
    }), `
`, _jsx(_components.h2, {
      id: "get-a-room-list-get",
      children: "Get a room list (GET)"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to get a list of rooms."
    }), `
`, _jsx(_components.h3, {
      id: "prototype-2",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.netless.link/v5/rooms"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "request-header-2",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "Pass in the following parameters in the request header:"
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
            children: "Data type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required/Optional"
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
              children: "token"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["An SDK token or room token with the ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", "- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md",
              children: "Generate an SDK token"
            }), ".", "- Use code samples. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "Generate a token from your app server"
            }), "."]
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
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Specifies a data center to process the request: - ", _jsx(_components.code, {
              children: "us-sv"
            }), ": Silicon Valley, US, which provides services to North America and South America.", "- ", _jsx(_components.code, {
              children: "sg"
            }), ": Singapore, which provides services to Singapore, East Asia, and Southeast Asia.", "- ", _jsx(_components.code, {
              children: "in-mum"
            }), ": Mumbai, India, which provides services to India.", "- ", _jsx(_components.code, {
              children: "eu"
            }), ": Frankfurt, Europe, which provides services to Europe.", "- ", _jsx(_components.code, {
              children: "cn-hz"
            }), ": Hangzhou, China, which provides services to the areas not covered by other data centers."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "query-parameters",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "You can choose to pass in the following query parameters:"
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
            children: "Data type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required/Optional"
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
              children: "beginUUID"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The UUID of the room you want to start querying from."
          })]
        }), _jsxs(_components.tr, {
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
            children: "integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The maximum number of rooms on the list. The range is (0,1000]. If you do not set this parameter, the default maximum is 100 rooms."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
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
              children: " /v5/rooms/?beginUUID=0e6exxxxxx4d95"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&limit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "2"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Host:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " api.netless.link"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "region:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " us-sv"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Content-Type:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " application/json"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "token:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " NETLESSSDK_YWs9QlxxxxxxM2MjRi"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "http-response-2",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about all possible response status codes, see the ", _jsx(_components.a, {
        href: "overview#status-codes",
        children: "status code table"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request is successful. The response returns the status code and corresponding parameters."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "The following is a response example for a successful request:"
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
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"status"'
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
              children: "200"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"body"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "["
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "uuid"'
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
              children: '"0e6exxxxxxd95"'
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
              children: '        "teamUUID"'
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
              children: '"RMmxxxxxxaw"'
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
              children: '        "appUUID"'
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
              children: '"vVxxxxzJF-A"'
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
              children: '\t    "isRecord"'
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
              children: '        "isBan"'
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
              children: '        "createdAt"'
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
              children: '"2020-12-20T14:02:54.846Z"'
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
              children: '        "limit"'
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
              children: "0"
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "uuid"'
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
              children: '"1d4xxxxxxca69"'
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
              children: '        "teamUUID"'
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
              children: '"RMmxxxxxx5aw"'
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
              children: '        "appUUID"'
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
              children: '"vVsxxxxzJF-A"'
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
              children: '\t    "isRecord"'
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
              children: '        "isBan"'
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
              children: '        "createdAt"'
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
              children: '"2020-12-20T14:10:29.265Z"'
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
              children: '        "limit"'
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
              children: "0"
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
              children: "]"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Description of parameters in the response:"
      })
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
            children: "Data type"
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
              children: "uuid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The room UUID, which is the unique identifier of a room."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "teamUUID"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The unique identifier of the Agora Console account that creates the whiteboard project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appUUID"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The unique identifier of the whiteboard project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "isRecord"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether recording is enabled for the room: - ", _jsx(_components.code, {
              children: "true"
            }), ": Enabled.", " - ", _jsx(_components.code, {
              children: "false"
            }), ": Not enabled."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "isBan"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether the room is disabled: - ", _jsx(_components.code, {
              children: "true"
            }), ": Disabled.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Not disabled."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "createdAt"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The UTC time when the room was created."
          })]
        }), _jsxs(_components.tr, {
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
            children: "integer"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The maximum number of users with a ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " token who can be in the room at the same time. If you set it to 0, there is no maximum."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "If the status code is not 200, the request fails. The response body includes a message field that describes the reason for the failure."
    }), `
`, _jsx(_components.h2, {
      id: "disable-a-room-patch",
      children: "Disable a room (PATCH)"
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following information to disable or cancel disabling a room."
    }), `
`, _jsx(_components.p, {
      children: "Note that when you disable a room, the users in the room will be removed and no users will be able to join the room."
    }), `
`, _jsxs(_components.p, {
      children: ["If you want to cancel disabling the room, call the RESTful API again and set ", _jsx(_components.code, {
        children: "isBan"
      }), " to ", _jsx(_components.code, {
        children: "false"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "prototype-3",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "PATCH"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.netless.link/v5/rooms/{uuid}"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "request-header-3",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "Pass in the following parameters in the request header:"
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
            children: "Data type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required/Optional"
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
              children: "token"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["An SDK token or room token with the ", _jsx(_components.code, {
              children: "admin"
            }), " role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", "- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md",
              children: "Generate an SDK token"
            }), ".", "- Use code samples. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "Generate a token from your app server"
            }), "."]
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
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Specifies a data center to process the request: - ", _jsx(_components.code, {
              children: "us-sv"
            }), ": Silicon Valley, US, which provides services to North America and South America.", "- ", _jsx(_components.code, {
              children: "sg"
            }), ": Singapore, which provides services to Singapore, East Asia, and Southeast Asia.", "- ", _jsx(_components.code, {
              children: "in-mum"
            }), ": Mumbai, India, which provides services to India.", "- ", _jsx(_components.code, {
              children: "eu"
            }), ": Frankfurt, Europe, which provides services to Europe.", "- ", _jsx(_components.code, {
              children: "cn-hz"
            }), ": Hangzhou, China, which provides services to the areas not covered by other data centers."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-path-1",
      children: "Request path"
    }), `
`, _jsx(_components.p, {
      children: "The following parameters are required in the URL:"
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
            children: "Data type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required/Optional"
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
              children: "uuid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The room UUID, which is the unique identifier of a room. You can get it by calling the ", _jsx(_components.a, {
              href: "#create-a-room-post",
              children: "RESTful API to create a room"
            }), " or calling the ", _jsx(_components.a, {
              href: "#get-room-information-get",
              children: "RESTful API to get room information"
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
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
            children: "Data type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required/Optional"
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
              children: "isBan"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether the room is disabled:- ", _jsx(_components.code, {
              children: "true"
            }), ": Disabled.", " - ", _jsx(_components.code, {
              children: "false"
            }), ": (Default) Not disabled."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-example-3",
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
              children: "PATCH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /v5/rooms/0e6exxxxxx4d95"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Host:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " api.netless.link"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "region:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " us-sv"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Content-Type:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " application/json"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "token:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " NETLESSSDK_YWs9xxxxxx5ZGM2MjRi"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '  "isBan"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
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
`, _jsx(_components.h3, {
      id: "http-response-3",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about all possible response status codes, see the ", _jsx(_components.a, {
        href: "overview#status-codes",
        children: "status code table"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "201"
      }), ", the request is successful. The response returns the status code and corresponding parameters."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "The following is a response example for a successful request:"
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
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"status"'
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
              children: "201"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"body"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsx(_components.span, {
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
              children: '    "uuid"'
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
              children: '"0e6xxxxxx95"'
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
              children: '    "teamUUID"'
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
              children: '"RMxxxxxaw"'
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
              children: '    "appUUID"'
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
              children: '"vVxxxxxJF-A"'
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
              children: '\t"isRecord"'
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
              children: '    "isBan"'
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
              children: '    "createdAt"'
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
              children: '"2020-12-20T14:02:54.846Z"'
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
              children: '    "limit"'
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
              children: "0"
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
        children: "Description of parameters in the response:"
      })
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
            children: "Data type"
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
            children: "Parameter"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data type"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uuid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The room UUID, which is the unique identifier of a room."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "teamUUID"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The unique identifier of the Agora Console account that creates the whiteboard project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appUUID"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The unique identifier of the whiteboard project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "isRecord"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether recording is enabled for the room:- ", _jsx(_components.code, {
              children: "true"
            }), ": Enabled.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Not enabled."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "isBan"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether the room is disabled:- ", _jsx(_components.code, {
              children: "true"
            }), ": Disabled.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Not disabled."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "createdAt"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The UTC time when the room was created."
          })]
        }), _jsxs(_components.tr, {
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
            children: "integer"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The maximum number of users with a ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " token who can be in the room at the same time. If you set it to ", _jsx(_components.code, {
              children: "0"
            }), ", there is no maximum."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. The response body includes a ", _jsx(_components.code, {
        children: "message"
      }), " field that describes the reason for the failure."]
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
