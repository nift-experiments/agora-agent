import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Scene management",
  description: "Manage whiteboard scenes through the Interactive Whiteboard REST API."
};
export let _markdown = `

## Get scene path list (GET) [#get-scene-path-list-get]

Call this API to get a list of scene paths in a room.

### Prototype [#prototype]

* Method: \`GET\`
* Access point: \`https://api.netless.link/v5/rooms/{uuid}/scenes\`

### Request header [#request-header]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string    | Required          | An SDK token or room token with the \`writer\` or \`admin\` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br />To get a room token, you can:- Call the RESTful API. See [Generate a Room Token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Request path [#request-path]

The following parameters are required in the URL:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                   |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`uuid\`    | string    | Required          | The room UUID, which is the unique identifier of a room. You can get it by calling the [RESTful API to create a room](./room-management#create-a-room-post) or calling the [RESTful API to get room information](./room-management#get-room-information-get). |

### Query parameters [#query-parameters]

You can choose to pass in the following query parameters:

| Parameter  | Data type | Required/Optional | Description                                                                                                                                                                                                                                                |
| :--------- | :-------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`sceneDir\` | string    | Optional          | The path to the scene directory, which starts with \`/\`. If you pass in this parameter, a list of the scene paths under the specified directory is generated. If you do not pass it in, a list of the scene paths under the current directory is generated. |

### Request example [#request-example]

\`\`\`bash
GET /v5/rooms/faexxxxx47c/scenes?sceneDir=/test
Host: api.netless.link
region: us-sv
token: NETLESSSDK_YWs9T3YtxxxxxYjc0
Content-Type: application/json
\`\`\`

### HTTP response [#http-response]

For details about all possible response status codes, see the [status code table](./index#status-codes).

If the status code is \`200\`, the request is successful. The response returns the status code and corresponding parameters.

**Response example**

\`\`\`json
"status": 200,
"body":
[
    "/test/cover",
    "/test/page1"
]
\`\`\`

The response body is a JSON Array of scene path strings.

If the status code is not \`200\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Add a scene (POST) [#add-a-scene-post]

Call this API to add a scene.

### Prototype [#prototype-1]

* Method: \`POST\`
* Access point: \`https://api.netless.link/v5/rooms/{uuid}/scenes\`

### Request header [#request-header-1]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string    | Required          | An SDK token or room token with the \`writer\` or \`admin\` role. To get an SDK Token, you can:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br />To get a room token, you can:- Call the RESTful API. See [Generate a room token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Request path [#request-path-1]

The following parameters are required in the URL:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                   |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`uuid\`    | string    | Required          | The room UUID, which is the unique identifier of a room. You can get it by calling the [RESTful API to create a room](./room-management#create-a-room-post) or calling the [RESTful API to get room information](./room-management#get-room-information-get). |

### Request Body [#request-body]

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------- | :-------- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`scenes\`  | array     | Required          | An array of scenes, each containing the following parameters:- \`name\`: String. Sets the scene name. It cannot be the same as another scene in the same group and cannot contain \`/\`.<br />- \`ppt\`: (Optional) Object. Sets the property of the background image of the scene.<br />- \`src\`: String. Sets the URL of the image. Ensure that your browser can access and display the image properly; otherwise, the image may not be displayed in the scene.<br />- \`width\`: Number. Sets the width of the image in pixels.<br />- \`height\`: Number. Sets the height of the image in pixels.<br /> |
| \`path\`    | string    | Required          | The path of a scene directory.If the path already exists, the new scene is added under the existing scene directory; if not, a new scene directory is created, and the new scene is added under the created directory.                                                                                                                                                                                                                                                                                                                                                                           |

### Request example [#request-example-1]

\`\`\`bash
POST /v5/rooms/a7e0xxxxxa69/scenes
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWs9QlxxxxxA0NzA5ZGM2MjRi

{
    "scenes": [
        {
            "name": "page1",
            "ppt": {
                "src": "xxxx",
                "width": 640,
                "height": 360
            }
        },
        {
            "name": "page2",
            "ppt": {
                "src": "xxxx",
                "width": 640,
                "height": 360
            }
        }
    ],
    "path": "/test"
}
\`\`\`

### HTTP response [#http-response-1]

For details about all possible response status codes, see the [status code table](./index#status-codes).

If the status code is \`201\`, the request is successful. The response returns the status code and corresponding parameters.

**The following is a response example for a successful request:**

\`\`\`json
"status": 201,
"body":
{}
\`\`\`

The response body is an empty JSON object.

If the status code is not \`201\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Switch to a scene (PATCH) [#switch-to-a-scene-patch]

Call this API to switch scenes when there are multiple scenes or scene directories in the room.

### Prototype [#prototype-2]

* Method: \`PATCH\`
* Access point: \`https://api.netless.link/v5/rooms/{uuid}/scene-state\`

### Request header [#request-header-2]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string    | Required          | An SDK token or room token with the \`admin\` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br />To get a room token, you can:- Call the RESTful API. See [Generate a room token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Request path [#request-path-2]

The following parameters are required in the URL:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                   |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`uuid\`    | string    | Required          | The room UUID, which is the unique identifier of a room. You can get it by calling the [RESTful API to create a room](./room-management#create-a-room-post) or calling the [RESTful API to get room information](./room-management#get-room-information-get). |

### Request body [#request-body-1]

| Parameter   | Data type | Required/Optional | Description                                  |
| :---------- | :-------- | :---------------- | :------------------------------------------- |
| \`scenePath\` | string    | Required          | The path of the scene you want to switch to. |

### Request example [#request-example-2]

\`\`\`bash
PATCH /v5/rooms/faexxxxx1947c/scene-state
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWs9TxxxxxYjc0

{
    "scenePath": "/test/page1"
}
\`\`\`

### HTTP response [#http-response-2]

For details about all possible response status codes, see the [status code table](./index#status-codes).

If the status code is \`201\`, the request is successful. The response returns the status code and corresponding parameters.

**The following is a response example for a successful request:**

\`\`\`json
"status": 201,
"body":
{
    "currentScenePath": [
        "test",
        "page1"
    ]
}
\`\`\`

**Description of parameters in the response:**

| Parameter          | Data type | Description                                                                                                          |
| :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------- |
| \`currentScenePath\` | array     | The path of the current scene, which is an array consisting of the scene name and the corresponding scene directory. |

If the status code is not \`201\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.
`;
export let structuredData = {
  contents: [{
    heading: "get-scene-path-list-get",
    content: "Call this API to get a list of scene paths in a room."
  }, {
    heading: "prototype",
    content: "Method: `GET`"
  }, {
    heading: "prototype",
    content: "Access point: `https://api.netless.link/v5/rooms/{uuid}/scenes`"
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
    content: "An SDK token or room token with the `writer` or `admin` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Use code samples. See Generate a token from your app server.<br />To get a room token, you can:- Call the RESTful API. See Generate a Room Token.<br />- Use code samples. See Generate a token from your app server.<br />"
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
    content: "`sceneDir`"
  }, {
    heading: "query-parameters",
    content: "string"
  }, {
    heading: "query-parameters",
    content: "Optional"
  }, {
    heading: "query-parameters",
    content: "The path to the scene directory, which starts with `/`. If you pass in this parameter, a list of the scene paths under the specified directory is generated. If you do not pass it in, a list of the scene paths under the current directory is generated."
  }, {
    heading: "http-response",
    content: "For details about all possible response status codes, see the status code table."
  }, {
    heading: "http-response",
    content: "If the status code is `200`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response",
    content: "**Response example**"
  }, {
    heading: "http-response",
    content: "The response body is a JSON Array of scene path strings."
  }, {
    heading: "http-response",
    content: "If the status code is not `200`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "add-a-scene-post",
    content: "Call this API to add a scene."
  }, {
    heading: "prototype-1",
    content: "Method: `POST`"
  }, {
    heading: "prototype-1",
    content: "Access point: `https://api.netless.link/v5/rooms/{uuid}/scenes`"
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
    content: "An SDK token or room token with the `writer` or `admin` role. To get an SDK Token, you can:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Use code samples. See Generate a token from your app server.<br />To get a room token, you can:- Call the RESTful API. See Generate a room token.<br />- Use code samples. See Generate a token from your app server.<br />"
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
    content: "`scenes`"
  }, {
    heading: "request-body",
    content: "array"
  }, {
    heading: "request-body",
    content: "Required"
  }, {
    heading: "request-body",
    content: "An array of scenes, each containing the following parameters:- `name`: String. Sets the scene name. It cannot be the same as another scene in the same group and cannot contain `/`.<br />- `ppt`: (Optional) Object. Sets the property of the background image of the scene.<br />- `src`: String. Sets the URL of the image. Ensure that your browser can access and display the image properly; otherwise, the image may not be displayed in the scene.<br />- `width`: Number. Sets the width of the image in pixels.<br />- `height`: Number. Sets the height of the image in pixels.<br />"
  }, {
    heading: "request-body",
    content: "`path`"
  }, {
    heading: "request-body",
    content: "string"
  }, {
    heading: "request-body",
    content: "Required"
  }, {
    heading: "request-body",
    content: "The path of a scene directory.If the path already exists, the new scene is added under the existing scene directory; if not, a new scene directory is created, and the new scene is added under the created directory."
  }, {
    heading: "http-response-1",
    content: "For details about all possible response status codes, see the status code table."
  }, {
    heading: "http-response-1",
    content: "If the status code is `201`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response-1",
    content: "**The following is a response example for a successful request:**"
  }, {
    heading: "http-response-1",
    content: "The response body is an empty JSON object."
  }, {
    heading: "http-response-1",
    content: "If the status code is not `201`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "switch-to-a-scene-patch",
    content: "Call this API to switch scenes when there are multiple scenes or scene directories in the room."
  }, {
    heading: "prototype-2",
    content: "Method: `PATCH`"
  }, {
    heading: "prototype-2",
    content: "Access point: `https://api.netless.link/v5/rooms/{uuid}/scene-state`"
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
    content: "An SDK token or room token with the `admin` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Use code samples. See Generate a token from your app server.<br />To get a room token, you can:- Call the RESTful API. See Generate a room token.<br />- Use code samples. See Generate a token from your app server.<br />"
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
    heading: "request-path-2",
    content: "The following parameters are required in the URL:"
  }, {
    heading: "request-path-2",
    content: "Parameter"
  }, {
    heading: "request-path-2",
    content: "Data type"
  }, {
    heading: "request-path-2",
    content: "Required/Optional"
  }, {
    heading: "request-path-2",
    content: "Description"
  }, {
    heading: "request-path-2",
    content: "`uuid`"
  }, {
    heading: "request-path-2",
    content: "string"
  }, {
    heading: "request-path-2",
    content: "Required"
  }, {
    heading: "request-path-2",
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
    content: "`scenePath`"
  }, {
    heading: "request-body-1",
    content: "string"
  }, {
    heading: "request-body-1",
    content: "Required"
  }, {
    heading: "request-body-1",
    content: "The path of the scene you want to switch to."
  }, {
    heading: "http-response-2",
    content: "For details about all possible response status codes, see the status code table."
  }, {
    heading: "http-response-2",
    content: "If the status code is `201`, the request is successful. The response returns the status code and corresponding parameters."
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
    content: "`currentScenePath`"
  }, {
    heading: "http-response-2",
    content: "array"
  }, {
    heading: "http-response-2",
    content: "The path of the current scene, which is an array consisting of the scene name and the corresponding scene directory."
  }, {
    heading: "http-response-2",
    content: "If the status code is not `201`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }],
  headings: [{
    id: "get-scene-path-list-get",
    content: "Get scene path list (GET)"
  }, {
    id: "prototype",
    content: "Prototype"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-path",
    content: "Request path"
  }, {
    id: "query-parameters",
    content: "Query parameters"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "http-response",
    content: "HTTP response"
  }, {
    id: "add-a-scene-post",
    content: "Add a scene (POST)"
  }, {
    id: "prototype-1",
    content: "Prototype"
  }, {
    id: "request-header-1",
    content: "Request header"
  }, {
    id: "request-path-1",
    content: "Request path"
  }, {
    id: "request-body",
    content: "Request Body"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "http-response-1",
    content: "HTTP response"
  }, {
    id: "switch-to-a-scene-patch",
    content: "Switch to a scene (PATCH)"
  }, {
    id: "prototype-2",
    content: "Prototype"
  }, {
    id: "request-header-2",
    content: "Request header"
  }, {
    id: "request-path-2",
    content: "Request path"
  }, {
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "request-example-2",
    content: "Request example"
  }, {
    id: "http-response-2",
    content: "HTTP response"
  }]
};
export let toc = [{
  depth: 2,
  url: "#get-scene-path-list-get",
  title: _jsx(_Fragment, {
    children: "Get scene path list (GET)"
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
  url: "#request-path",
  title: _jsx(_Fragment, {
    children: "Request path"
  })
}, {
  depth: 3,
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query parameters"
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
  url: "#add-a-scene-post",
  title: _jsx(_Fragment, {
    children: "Add a scene (POST)"
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
  url: "#request-path-1",
  title: _jsx(_Fragment, {
    children: "Request path"
  })
}, {
  depth: 3,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request Body"
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
  url: "#switch-to-a-scene-patch",
  title: _jsx(_Fragment, {
    children: "Switch to a scene (PATCH)"
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
  url: "#request-path-2",
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
      id: "get-scene-path-list-get",
      children: "Get scene path list (GET)"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to get a list of scene paths in a room."
    }), `
`, _jsx(_components.h3, {
      id: "prototype",
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
          children: "https://api.netless.link/v5/rooms/{uuid}/scenes"
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
            }), ".", "To get a room token, you can:- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post",
              children: "Generate a Room Token"
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
              href: "./room-management#create-a-room-post",
              children: "RESTful API to create a room"
            }), " or calling the ", _jsx(_components.a, {
              href: "./room-management#get-room-information-get",
              children: "RESTful API to get room information"
            }), "."]
          })]
        })
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "sceneDir"
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The path to the scene directory, which starts with ", _jsx(_components.code, {
              children: "/"
            }), ". If you pass in this parameter, a list of the scene paths under the specified directory is generated. If you do not pass it in, a list of the scene paths under the current directory is generated."]
          })]
        })
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
              children: "GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /v5/rooms/faexxxxx47c/scenes?sceneDir=/test"
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
              children: "token:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " NETLESSSDK_YWs9T3YtxxxxxYjc0"
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
        href: "./index#status-codes",
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
        children: "Response example"
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "/test/cover"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "/test/page1"'
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
      children: "The response body is a JSON Array of scene path strings."
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. The response body includes a ", _jsx(_components.code, {
        children: "message"
      }), " field that describes the reason for the failure."]
    }), `
`, _jsx(_components.h2, {
      id: "add-a-scene-post",
      children: "Add a scene (POST)"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to add a scene."
    }), `
`, _jsx(_components.h3, {
      id: "prototype-1",
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
          children: "https://api.netless.link/v5/rooms/{uuid}/scenes"
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
            }), " role. To get an SDK Token, you can:- Get a test-purpose SDK token from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", "- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md",
              children: "Generate an SDK token"
            }), ".", "- Use code samples. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "Generate a token from your app server"
            }), ".", "To get a room token, you can:- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post",
              children: "Generate a room token"
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
              href: "./room-management#create-a-room-post",
              children: "RESTful API to create a room"
            }), " or calling the ", _jsx(_components.a, {
              href: "./room-management#get-room-information-get",
              children: "RESTful API to get room information"
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-body",
      children: "Request Body"
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
              children: "scenes"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["An array of scenes, each containing the following parameters:- ", _jsx(_components.code, {
              children: "name"
            }), ": String. Sets the scene name. It cannot be the same as another scene in the same group and cannot contain ", _jsx(_components.code, {
              children: "/"
            }), ".", "- ", _jsx(_components.code, {
              children: "ppt"
            }), ": (Optional) Object. Sets the property of the background image of the scene.", "- ", _jsx(_components.code, {
              children: "src"
            }), ": String. Sets the URL of the image. Ensure that your browser can access and display the image properly; otherwise, the image may not be displayed in the scene.", "- ", _jsx(_components.code, {
              children: "width"
            }), ": Number. Sets the width of the image in pixels.", "- ", _jsx(_components.code, {
              children: "height"
            }), ": Number. Sets the height of the image in pixels."]
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
            children: "string"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The path of a scene directory.If the path already exists, the new scene is added under the existing scene directory; if not, a new scene directory is created, and the new scene is added under the created directory."
          })]
        })]
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
              children: "POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /v5/rooms/a7e0xxxxxa69/scenes"
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
              children: " NETLESSSDK_YWs9QlxxxxxA0NzA5ZGM2MjRi"
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
              children: '    "scenes"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ["
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '            "name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "page1",'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '            "ppt"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '                "src"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "xxxx",'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '                "width"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 640,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '                "height"'
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
              children: " 360"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            }"
            })
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '            "name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "page2",'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '            "ppt"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '                "src"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "xxxx",'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '                "width"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 640,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '                "height"'
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
              children: " 360"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            }"
            })
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "path"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "/test"'
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
      id: "http-response-1",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about all possible response status codes, see the ", _jsx(_components.a, {
        href: "./index#status-codes",
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
              children: "{}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The response body is an empty JSON object."
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. The response body includes a ", _jsx(_components.code, {
        children: "message"
      }), " field that describes the reason for the failure."]
    }), `
`, _jsx(_components.h2, {
      id: "switch-to-a-scene-patch",
      children: "Switch to a scene (PATCH)"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to switch scenes when there are multiple scenes or scene directories in the room."
    }), `
`, _jsx(_components.h3, {
      id: "prototype-2",
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
          children: "https://api.netless.link/v5/rooms/{uuid}/scene-state"
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
            }), ".", "To get a room token, you can:- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post",
              children: "Generate a room token"
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
      id: "request-path-2",
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
              href: "./room-management#create-a-room-post",
              children: "RESTful API to create a room"
            }), " or calling the ", _jsx(_components.a, {
              href: "./room-management#get-room-information-get",
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
              children: "scenePath"
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
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The path of the scene you want to switch to."
          })]
        })
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
              children: "PATCH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /v5/rooms/faexxxxx1947c/scene-state"
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
              children: " NETLESSSDK_YWs9TxxxxxYjc0"
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
              children: '    "scenePath"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "/test/page1"'
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
      id: "http-response-2",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about all possible response status codes, see the ", _jsx(_components.a, {
        href: "./index#status-codes",
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
              children: '    "currentScenePath"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "test"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "page1"'
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "currentScenePath"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The path of the current scene, which is an array consisting of the scene name and the corresponding scene directory."
          })]
        })
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
