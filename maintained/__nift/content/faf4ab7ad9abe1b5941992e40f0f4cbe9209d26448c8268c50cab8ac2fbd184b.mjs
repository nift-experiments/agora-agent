import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Screenshot management",
  description: "Capture and manage whiteboard screenshots through the Interactive Whiteboard REST API."
};
export let _markdown = `

The screenshot-management feature is implemented by Interactive Whiteboard. You can take screenshots for a single scene or a scene directory, generate images in PNG format, and upload them to a third-party cloud storage space.

Before calling the REST API for screenshot management, ensure that:

* You have created a third-party cloud storage account and a storage space under that account. Agora supports only [Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/?nc1=h_ls) now.
* You have enabled the screenshot feature and configured storage settings in Agora Console. See [Enable whitebaord server-side features](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#enable-whiteboard-server-side-features).

## Screenshot a scene [#screenshot-a-scene]

Call this API to take screenshots for a single scene.

<CalloutContainer type="warning">
  <CalloutDescription>
    This backend screenshot API is deprecated. Use the frontend API, [\`screenshotToCanvasAsync\`](https://api-ref.agora.io/en/interactive-whiteboard-sdk/web/2.x/interfaces/displayer.html#screenshottocanvas), instead.
  </CalloutDescription>
</CalloutContainer>

### Prototype [#prototype]

* Method: \`POST\`
* Access point: \`https://api.netless.link/v5/rooms/{uuid}/screenshots\`

### Request header [#request-header]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :-------- | :-------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string    | Required          | An SDK token or room token with the \`writer\` or \`admin\` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the REST API. See [Generate a room token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br />To get a room token, you can:- Call the REST API. See [Generate a room token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Request path [#request-path]

The following parameters are required in the URL:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                             |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`uuid\`    | string    | Required          | The room UUID, which is the unique identifier of a room. You can get it by calling the [REST API to create a room](./room-management#create-a-room-post) or calling the [REST API to get room information](./room-management#get-room-information-get). |

### Request body [#request-body]

| Parameter | Data type | Required/Optional | Description                                                                                                       |
| :-------- | :-------- | :---------------- | :---------------------------------------------------------------------------------------------------------------- |
| \`width\`   | number    | Required          | The width of the screenshot in pixels.                                                                            |
| \`height\`  | number    | Required          | The height of the screenshot in pixels.                                                                           |
| \`path\`    | string    | Optional          | The path to the scene, which starts with \`/\`. If you do not set this parameter, the default path \`/init\` is used. |

### Request example [#request-example]

\`\`\`bash
POST /v5/rooms/a7e04xxxxx7d1eca69/screenshots
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWs9xxxxxxzA5ZGM2MjRi

{
    "width": 640,
    "height": 480
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
    "url": "https://white-cover.oss-cn-hangzhou.aliyuncs.com/room_cover/2811/a7exxxxca69undefined.png",
    "key": "room_cover/2811/a7exxxxxca69undefined.png",
    "bucket": "white-cover",
    "region": "oss-cn-hangzhou"
}
\`\`\`

**Description of parameters in the response:**

| Parameter | Data type | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| \`url\`     | string    | The URL of the screenshot.                                   |
| \`key\`     | string    | The filename of the screenshot in the storage space.         |
| \`bucket\`  | string    | The name of the storage space where the screenshot is saved. |
| \`region\`  | string    | The region where the storage space is located.               |

If the status code is not \`201\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Screenshot a scene directory [#screenshot-a-scene-directory]

Call this API to take screenshots for a scene directory.

<CalloutContainer type="warning">
  <CalloutDescription>
    This backend screenshot API is deprecated. Use the frontend API, [\`screenshotToCanvasAsync\`](https://api-ref.agora.io/en/interactive-whiteboard-sdk/web/2.x/interfaces/displayer.html#screenshottocanvas), instead.
  </CalloutDescription>
</CalloutContainer>

### Prototype [#prototype-1]

* Method: \`POST\`
* Access point: \`https://api.netless.link/v5/rooms/{uuid}/screenshot-list\`

### Request header [#request-header-1]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------- | :-------- | :---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string    | Required          | An SDK token or room token with the \`writer\` or \`admin\` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the REST API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br />To get a room token, you can:- Call the REST API. See [Generate a room token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Request path [#request-path-1]

The following parameters are required in the URL:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                             |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`uuid\`    | string    | Required          | The room UUID, which is the unique identifier of a room. You can get it by calling the [REST API to create a room](./room-management#create-a-room-post) or calling the [REST API to get room information](./room-management#get-room-information-get). |

### Request body [#request-body-1]

| Parameter | Data type | Required/Optional | Description                                                                                                                     |
| :-------- | :-------- | :---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| \`width\`   | number    | Required          | The width of the screenshot in pixels.                                                                                          |
| \`height\`  | number    | Required          | The height of the screenshot in pixels.                                                                                         |
| \`path\`    | string    | Optional          | The path to the scene directory, which starts with \`/\`. If you do not set this parameter , the current scene directory is used. |

### Request example [#request-example-1]

\`\`\`bash
POST /v5/rooms/faed3130727911ebaea37759ee91947c/screenshot-list
Host: api.netless.link
region: us-sv
token: NETLESSSDK_YWsxxxxxxYjc0
Content-Type: application/json

{
    "width": 640,
    "height": 480,
    "path": "/test"
}
\`\`\`

### HTTP response [#http-response-1]

For details about all possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`201\`, the request is successful. The response returns the status code and corresponding parameters.

**The following is a response example for a successful request:**

\`\`\`json
"status": 201,
"body":
[
    {
        "url": "https://docs-test-xxx.oss-cn-hangzhou.aliyuncs.com/room_cover/2811/faxxxxx47c/test/cover.png",
        "key": "room_cover/2811/faxxxxx47c/test/cover.png",
        "bucket": "docs-test-xxx",
        "region": "oss-cn-hangzhou"
    },
    {
        "url": "https://docs-test-xxx.oss-cn-hangzhou.aliyuncs.com/room_cover/2811/faxxxxx47c/test/page1.png",
        "key": "room_cover/2811/faxxxxx47c/test/page1.png",
        "bucket": "docs-test-xxx",
        "region": "oss-cn-hangzhou"
    }
]
\`\`\`

The response body is an array of the screenshot information for each scene. Every member in the array contains the following parameters:

| Parameter | Data type | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| \`url\`     | string    | The URL of the screenshot.                                   |
| \`key\`     | string    | The filename of the screenshot in the storage space.         |
| \`bucket\`  | string    | The name of the storage space where the screenshot is saved. |
| \`region\`  | string    | The region where the storage space is located.               |

If the status code is not \`201\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The screenshot-management feature is implemented by Interactive Whiteboard. You can take screenshots for a single scene or a scene directory, generate images in PNG format, and upload them to a third-party cloud storage space."
  }, {
    heading: undefined,
    content: "Before calling the REST API for screenshot management, ensure that:"
  }, {
    heading: undefined,
    content: "You have created a third-party cloud storage account and a storage space under that account. Agora supports only Amazon Simple Storage Service (Amazon S3) now."
  }, {
    heading: undefined,
    content: "You have enabled the screenshot feature and configured storage settings in Agora Console. See Enable whitebaord server-side features."
  }, {
    heading: "screenshot-a-scene",
    content: "Call this API to take screenshots for a single scene."
  }, {
    heading: "screenshot-a-scene",
    content: "This backend screenshot API is deprecated. Use the frontend API, `screenshotToCanvasAsync`, instead."
  }, {
    heading: "prototype",
    content: "Method: `POST`"
  }, {
    heading: "prototype",
    content: "Access point: `https://api.netless.link/v5/rooms/{uuid}/screenshots`"
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
    content: "An SDK token or room token with the `writer` or `admin` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the REST API. See Generate a room token.<br />- Use code samples. See Generate a token from your app server.<br />To get a room token, you can:- Call the REST API. See Generate a room token.<br />- Use code samples. See Generate a token from your app server.<br />"
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
    content: "The room UUID, which is the unique identifier of a room. You can get it by calling the REST API to create a room or calling the REST API to get room information."
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
    content: "`width`"
  }, {
    heading: "request-body",
    content: "number"
  }, {
    heading: "request-body",
    content: "Required"
  }, {
    heading: "request-body",
    content: "The width of the screenshot in pixels."
  }, {
    heading: "request-body",
    content: "`height`"
  }, {
    heading: "request-body",
    content: "number"
  }, {
    heading: "request-body",
    content: "Required"
  }, {
    heading: "request-body",
    content: "The height of the screenshot in pixels."
  }, {
    heading: "request-body",
    content: "`path`"
  }, {
    heading: "request-body",
    content: "string"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "The path to the scene, which starts with `/`. If you do not set this parameter, the default path `/init` is used."
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
    content: "`url`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The URL of the screenshot."
  }, {
    heading: "http-response",
    content: "`key`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The filename of the screenshot in the storage space."
  }, {
    heading: "http-response",
    content: "`bucket`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The name of the storage space where the screenshot is saved."
  }, {
    heading: "http-response",
    content: "`region`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The region where the storage space is located."
  }, {
    heading: "http-response",
    content: "If the status code is not `201`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "screenshot-a-scene-directory",
    content: "Call this API to take screenshots for a scene directory."
  }, {
    heading: "screenshot-a-scene-directory",
    content: "This backend screenshot API is deprecated. Use the frontend API, `screenshotToCanvasAsync`, instead."
  }, {
    heading: "prototype-1",
    content: "Method: `POST`"
  }, {
    heading: "prototype-1",
    content: "Access point: `https://api.netless.link/v5/rooms/{uuid}/screenshot-list`"
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
    content: "An SDK token or room token with the `writer` or `admin` role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the REST API. See Generate an SDK token.<br />- Use code samples. See Generate a token from your app server.<br />To get a room token, you can:- Call the REST API. See Generate a room token.<br />- Use code samples. See Generate a token from your app server.<br />"
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
    content: "The room UUID, which is the unique identifier of a room. You can get it by calling the REST API to create a room or calling the REST API to get room information."
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
    content: "`width`"
  }, {
    heading: "request-body-1",
    content: "number"
  }, {
    heading: "request-body-1",
    content: "Required"
  }, {
    heading: "request-body-1",
    content: "The width of the screenshot in pixels."
  }, {
    heading: "request-body-1",
    content: "`height`"
  }, {
    heading: "request-body-1",
    content: "number"
  }, {
    heading: "request-body-1",
    content: "Required"
  }, {
    heading: "request-body-1",
    content: "The height of the screenshot in pixels."
  }, {
    heading: "request-body-1",
    content: "`path`"
  }, {
    heading: "request-body-1",
    content: "string"
  }, {
    heading: "request-body-1",
    content: "Optional"
  }, {
    heading: "request-body-1",
    content: "The path to the scene directory, which starts with `/`. If you do not set this parameter , the current scene directory is used."
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
    content: "The response body is an array of the screenshot information for each scene. Every member in the array contains the following parameters:"
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
    content: "`url`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The URL of the screenshot."
  }, {
    heading: "http-response-1",
    content: "`key`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The filename of the screenshot in the storage space."
  }, {
    heading: "http-response-1",
    content: "`bucket`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The name of the storage space where the screenshot is saved."
  }, {
    heading: "http-response-1",
    content: "`region`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The region where the storage space is located."
  }, {
    heading: "http-response-1",
    content: "If the status code is not `201`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }],
  headings: [{
    id: "screenshot-a-scene",
    content: "Screenshot a scene"
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
    id: "request-body",
    content: "Request body"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "http-response",
    content: "HTTP response"
  }, {
    id: "screenshot-a-scene-directory",
    content: "Screenshot a scene directory"
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
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "http-response-1",
    content: "HTTP response"
  }]
};
export let toc = [{
  depth: 2,
  url: "#screenshot-a-scene",
  title: _jsx(_Fragment, {
    children: "Screenshot a scene"
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
  url: "#screenshot-a-scene-directory",
  title: _jsx(_Fragment, {
    children: "Screenshot a scene directory"
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
  url: "#request-body-1",
  title: _jsx(_Fragment, {
    children: "Request body"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The screenshot-management feature is implemented by Interactive Whiteboard. You can take screenshots for a single scene or a scene directory, generate images in PNG format, and upload them to a third-party cloud storage space."
    }), `
`, _jsx(_components.p, {
      children: "Before calling the REST API for screenshot management, ensure that:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["You have created a third-party cloud storage account and a storage space under that account. Agora supports only ", _jsx(_components.a, {
          href: "https://aws.amazon.com/s3/?nc1=h_ls",
          children: "Amazon Simple Storage Service (Amazon S3)"
        }), " now."]
      }), `
`, _jsxs(_components.li, {
        children: ["You have enabled the screenshot feature and configured storage settings in Agora Console. See ", _jsx(_components.a, {
          href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#enable-whiteboard-server-side-features",
          children: "Enable whitebaord server-side features"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "screenshot-a-scene",
      children: "Screenshot a scene"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to take screenshots for a single scene."
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This backend screenshot API is deprecated. Use the frontend API, ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/interactive-whiteboard-sdk/web/2.x/interfaces/displayer.html#screenshottocanvas",
            children: _jsx(_components.code, {
              children: "screenshotToCanvasAsync"
            })
          }), ", instead."]
        })
      })
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
          children: "https://api.netless.link/v5/rooms/{uuid}/screenshots"
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
            }), ".", "- Call the REST API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post",
              children: "Generate a room token"
            }), ".", "- Use code samples. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "Generate a token from your app server"
            }), ".", "To get a room token, you can:- Call the REST API. See ", _jsx(_components.a, {
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
              children: "REST API to create a room"
            }), " or calling the ", _jsx(_components.a, {
              href: "./room-management#get-room-information-get",
              children: "REST API to get room information"
            }), "."]
          })]
        })
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
              children: "width"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The width of the screenshot in pixels."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "height"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The height of the screenshot in pixels."
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
            children: "Optional"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The path to the scene, which starts with ", _jsx(_components.code, {
              children: "/"
            }), ". If you do not set this parameter, the default path ", _jsx(_components.code, {
              children: "/init"
            }), " is used."]
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
              children: " /v5/rooms/a7e04xxxxx7d1eca69/screenshots"
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
              children: " NETLESSSDK_YWs9xxxxxxzA5ZGM2MjRi"
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
              children: '    "width"'
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
              children: '    "height"'
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
              children: " 480"
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
              children: '"https://white-cover.oss-cn-hangzhou.aliyuncs.com/room_cover/2811/a7exxxxca69undefined.png"'
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
              children: '    "key"'
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
              children: '"room_cover/2811/a7exxxxxca69undefined.png"'
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
              children: '    "bucket"'
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
              children: '"white-cover"'
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
              children: '"oss-cn-hangzhou"'
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
              children: "url"
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
            children: "The URL of the screenshot."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "key"
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
            children: "The filename of the screenshot in the storage space."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "bucket"
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
            children: "The name of the storage space where the screenshot is saved."
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
            children: "The region where the storage space is located."
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
      id: "screenshot-a-scene-directory",
      children: "Screenshot a scene directory"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to take screenshots for a scene directory."
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This backend screenshot API is deprecated. Use the frontend API, ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/interactive-whiteboard-sdk/web/2.x/interfaces/displayer.html#screenshottocanvas",
            children: _jsx(_components.code, {
              children: "screenshotToCanvasAsync"
            })
          }), ", instead."]
        })
      })
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
          children: "https://api.netless.link/v5/rooms/{uuid}/screenshot-list"
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
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
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
            children: ["An SDK token or room token with the ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " role. To get an SDK token, you can:- Get a test-purpose SDK token from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", "- Call the REST API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md",
              children: "Generate an SDK token"
            }), ".", "- Use code samples. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "Generate a token from your app server"
            }), ".", "To get a room token, you can:- Call the REST API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-room-token-post",
              children: "Generate a room token"
            }), ".", "- Use code samples. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "Generate a token from your app server"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
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
              children: "REST API to create a room"
            }), " or calling the ", _jsx(_components.a, {
              href: "./room-management#get-room-information-get",
              children: "REST API to get room information"
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
              children: "width"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            children: "The width of the screenshot in pixels."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "height"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            children: "The height of the screenshot in pixels."
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
            children: "Optional"
          }), _jsxs(_components.td, {
            children: ["The path to the scene directory, which starts with ", _jsx(_components.code, {
              children: "/"
            }), ". If you do not set this parameter , the current scene directory is used."]
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
              children: " /v5/rooms/faed3130727911ebaea37759ee91947c/screenshot-list"
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
              children: " NETLESSSDK_YWsxxxxxxYjc0"
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
              children: '    "width"'
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
              children: '    "height"'
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
              children: " 480,"
            })]
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
              children: '        "url"'
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
              children: '"https://docs-test-xxx.oss-cn-hangzhou.aliyuncs.com/room_cover/2811/faxxxxx47c/test/cover.png"'
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
              children: '        "key"'
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
              children: '"room_cover/2811/faxxxxx47c/test/cover.png"'
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
              children: '        "bucket"'
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
              children: '"docs-test-xxx"'
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
              children: '        "region"'
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
              children: '"oss-cn-hangzhou"'
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
              children: '        "url"'
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
              children: '"https://docs-test-xxx.oss-cn-hangzhou.aliyuncs.com/room_cover/2811/faxxxxx47c/test/page1.png"'
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
              children: '        "key"'
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
              children: '"room_cover/2811/faxxxxx47c/test/page1.png"'
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
              children: '        "bucket"'
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
              children: '"docs-test-xxx"'
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
              children: '        "region"'
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
              children: '"oss-cn-hangzhou"'
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
      children: "The response body is an array of the screenshot information for each scene. Every member in the array contains the following parameters:"
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
              children: "url"
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
            children: "The URL of the screenshot."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "key"
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
            children: "The filename of the screenshot in the storage space."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "bucket"
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
            children: "The name of the storage space where the screenshot is saved."
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
            children: "The region where the storage space is located."
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
