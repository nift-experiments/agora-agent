import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "File conversion",
  description: "Start and query Interactive Whiteboard file-conversion tasks through the REST API."
};
export let _markdown = `

Interactive Whiteboard supports file conversion from PPT, PPTX, DOC, DOCX, and PDF files into static images, as well as from PPT/PPTX files into dynamic HTML web pages. The generated images and web pages can be presented on the whiteboard. See [File Conversion Overview](/en/realtime-media/whiteboard/build/display-files-and-manage-scenes/file-conversion-overview.md).

<CalloutContainer type="info">
  <CalloutDescription>
    This page applies to the new version of file conversion. For the main differences between the old and new versions, see [Version comparison](/en/realtime-media/whiteboard/build/display-files-and-manage-scenes/file-conversion-overview#version-comparison). If you use the old file conversion, see [Old File Conversion RESTful API Reference](file-conversion-deprecated.mdx).
  </CalloutDescription>
</CalloutContainer>

## Prerequisites [#prerequisites]

Before calling the RESTful API for file conversion, ensure that you have:

* You have enabled **Docs to Picture** or **Docs to Web** and configured storage settings in [Agora Console](https://console.agora.io/). See [Enable server-side supporting features](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#enable-whiteboard-server-side-features).
* You have generated a URL address for the file you want to convert, and the address is publicly accessible.

## Start file conversion [#start-file-conversion]

Call this API to start a file-conversion task.

### Prototype [#prototype]

* Method: \`POST\`
* Access point: \`https://api.netless.link/v5/projector/tasks\`

### Request header [#request-header]

Pass in the following parameters in the request header:

| Parameter | Category | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------- | :------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string   | Required          | A \`writer\` or \`admin\` SDK token. You can obtain a token using one of the following methods:- Get an SDK token for testing purposes from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post).<br />- Write code on your app server. See Generate a [token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string   | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />                                                                                                                                                                                                                          |

### Request Body [#request-body]

You can specify the following parameters:

| Parameter               | Category | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :---------------------- | :------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`resource\`              | string   | Required          | The URL of the file you want to convert.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| \`type\`                  | string   | Required          | The conversion type:<br />- \`dynamic\`: Dynamic-file conversion, converting the file to web pages.<br />- \`static\`: Static-file conversion, converting the file to images.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| \`preview\`               | boolean  | Optional          | Whether to generate a preview of the generated files:<br />- \`true\`: Generate a preview.<br />- \`false\`: Do not generate a preview.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| \`scale\`                 | number   | Optional          | The scale factor of an image. The range is \\[0.1,3.0], and the default value is \`1.2\`. The higher the value, the clearer the generated image. This parameter only takes effect when \`type\` is set to \`static\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| \`outputFormat\`          | string   | Optional          | The format of the generated image:<br />- \`png\`<br />- \`jpg\`<br />- \`jpeg\`<br />The default value is \`png\`. This parameter only takes effect when \`type\` is set to \`static\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| \`webhookEndpoint\`       | string   | Optional          | The address of the Webhook callback, generally the app server address, is used to receive information sent by the server, such as the progress of tasks. See [webhook callback](#webhook-callback).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| \`webhookRetry\`          | number   | Optional          | The number of retries the system attempts when the Webhook callback fails. The default value is \`3\`, and the maximum is \`10\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| \`imageCompressionLevel\` | number   | Optional          | The compression level of the output image. You can only pass in the following values:- \`0\`: (Default) Output the original image.
- \`1\`: The maximum number of colors used in the output image is limited to 256.
- \`2\`: The maximum number of colors used in the output image is limited to 192.
- \`3\`: The maximum number of colors used in the output image is limited to 128.
- \`4\`: The maximum number of colors used in the output image is limited to 64.This parameter only takes effect when \`type\` is set to \`dynamic\`.<CalloutContainer type="info">
  <CalloutDescription>
    Usually, the size of the output image can be compressed to up to 10% of its original without significantly reducing the image quality. Compressing the size of images can improve the first loading time of PPT files after conversion in poor network environment.
  </CalloutDescription>
</CalloutContainer> |
| \`buildSpa\`              | boolean  | Optional          | Specifies whether to build a Single-page Application (SPA) after conversion. - \`true\`: (Default) Builds an SPA file. The output is an HTML file containing all resources needed to render the PPT, suitable for single-page preview. Note that the server requires additional time (approximately 3 to 300 seconds) to download necessary resources and compile the file.<br /> - \`false\`: Does not build an SPA file.<br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Request example [#request-example]

\`\`\`bash
curl --request POST \\
  --url https://api.netless.link/v5/projector/tasks \\
  --header 'region: <string>' \\
  --header 'token: <string>' \\
  --data '
{
  "resource": "https://docs-test-xx.oss-cn-hangzhou.aliyuncs.com/xxx",
  "type": "dynamic",
  "preview": true,
  "webhookEndpoint": "https://example.com/agoracallback",
  "webhookRetry": 3,
  "imageCompressionLevel": 0
}'
\`\`\`

### HTTP response [#http-response]

For the details of all the possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`201\`, the request is successful. The response returns the status code and corresponding parameters.

**Response example**

\`\`\`json
{
  "uuid": "2fd2dxxxxx367e",
  "type": "dynamic",
  "status": "Waiting"
}
\`\`\`

**Response parameters**

| Parameter | Category | Description                                                                                                                                                                                                                 |
| :-------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`    | string   | The task UUID, which is the unique identifier of the file-conversion task.                                                                                                                                                  |
| \`status\`  | string   | The status of the file-conversion task:- \`Waiting\`: Conversion is \`waiting\` to start.<br />- \`Converting\`: Conversion is in progress.<br />- \`Finished\`: Conversion has \`finished\`.<br />- \`Fail\`: Conversion failed.<br /> |

If the status code is not \`201\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Query the progress of a file-conversion task [#query-the-progress-of-a-file-conversion-task]

Call this API to query the progress of a file-conversion task.

### Prototype [#prototype-1]

* Method: \`GET\`
* Access point: \`https://api.netless.link/v5/projector/tasks/{uuid}\`

### Request header [#request-header-1]

Pass in the following parameters in the request header:

| Parameter | Category | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :-------- | :------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`token\`   | string   | Required          | The Task token. You can obtain a token using one of the following methods:- Call the RESTful API. See [Generate a task token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-task-token-post).<br />- Write code on your app server. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br />                                                                     |
| \`region\`  | string   | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br /> |

### Request Path [#request-path]

The following parameters are required in the URL:

| Parameter | Category | Required/Optional | Description                                                                                                                                      |
| :-------- | :------- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`    | string   | Required          | The task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion. |

### Request example [#request-example-1]

\`\`\`bash
curl --request GET \\
  --url https://api.netless.link/v5/projector/tasks/:uuid \\
  --header 'region: <string>' \\
  --header 'token: <string>'
\`\`\`

### HTTP response [#http-response-1]

For the details of all the possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`200\`, the request is successful. The response returns the status code and corresponding parameters.

**Response examples:**

* Dynamic conversion completed

  \`\`\`json
  {
    "uuid": "dc11fe9e1xxxxxx7cd7ca3670a",
    "type": "dynamic",
    "status": "Finished",
    "convertedPercentage": 100,
    "pageCount": 2,
    "previews": {
      "1": "https://xxx/flat/dynamicConvert/xxx/1.png",
      "2": "https://xxx/flat/dynamicConvertxxx/2.png"
    },
    "note": "https://xxx/jsonOutput/note.json",
    "prefix": "https://xxx/flat/dynamicConvert",
    "zip": "https://xxx.com/flat/dynamicConvert/xxx.zip",
    "resources": [
      "https://xxx/jsonOutput/note.json",
      "https://xxx/flat/dynamicConvert/xxx/1.png",
      "https://xxx/flat/dynamicConvert/xxx/2.png"
    ]
  }
  \`\`\`

* Static conversion completed

  \`\`\`json
  {
    "uuid": "b5ec7c26ebxxxx217b8e2fb4dc5",
    "type": "static",
    "status": "Finished",
    "convertedPercentage": 100,
    "pageCount": 2,
    "images": {
      "1": {
        "width": 1440,
        "height": 810,
        "url": "https:/xxx/flat/staticConvert/xxxx/1.png"
      },
      "2": {
        "width": 1440,
        "height": 810,
        "url": "https://xxx/flat/staticConvert/xxxx/2.png"
      }
    },
    "prefix": "https://xxx/flat/"
  }
  \`\`\`

* Task in progress

  \`\`\`json
  {
    "uuid": "b5ec7c26exxxxb8e2fb4dc5",
    "type": "static",
    "status": "Converting",
    "convertedPercentage": 0,
    "prefix": "https://xxx/flat/"
  }
  \`\`\`

**Response parameters:**

| Parameter             | Category       | Description                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------------------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`                | string         | The task UUID, which is the unique identifier of the file-conversion task.                                                                                                                                                                                                                                                                                                                       |
| \`status\`              | string         | The status of the conversion task:- \`Waiting\`: Conversion is waiting to start.
- \`Converting\`: Conversion is in progress.
- \`Finished\`: Conversion is finished.
- \`Fail\`: Conversion failed.                                                                                                                                                                                                     |
| \`type\`                | string         | The conversion type:- \`dynamic\`: Dynamic-file conversion, converting the file to web pages.
- \`static\`: Static-file conversion, converting the file to images.                                                                                                                                                                                                                                   |
| \`convertedPercentage\` | number         | The progress of the conversion expressed as a percentage.                                                                                                                                                                                                                                                                                                                                        |
| \`prefix\`              | string         | The prefix of the address of the generated file.                                                                                                                                                                                                                                                                                                                                                 |
| \`pageCount\`           | number         | The number of file pages. This value is not available when the conversion task fails.                                                                                                                                                                                                                                                                                                            |
| \`previews\`            | object         | The address of the preview. Each page corresponds to a preview address. This parameter is only returned when \`preview\` is set to \`true\` and \`type\` is set to \`dynamic\` in the [request body](#request-body) when starting the file conversion. This value is not available when the conversion task fails.                                                                                       |
| \`note\`                | string         | Notes and comments extracted from the file. This parameter contains only the pages that have notes or comments.                                                                                                                                                                                                                                                                                  |
| \`images\`              | object         | The address of the static conversion results. Each page corresponds to an image. This parameter is only returned when \`type\` is set to \`static\` in the [request body](#request-body) when starting the file conversion. This value is not available when the conversion task fails.                                                                                                              |
| \`errorCode\`           | string         | The error code. This parameter is only returned when the conversion task fails.  For the details of all the possible error codes, see [error code](#error-code).                                                                                                                                                                                                                                 |
| \`errorMessage\`        | string         | The error message corresponding to the error code, describing the cause of the error. This parameter is only returned when the conversion task fails.                                                                                                                                                                                                                                            |
| \`zip\`                 | string         | Provides a link to a downloadable ZIP package containing the complete set of conversion results for the PPT. This package includes preview images and all rendering resources. It can be used with SDK APIs to redirect to local resources, enabling full preloading. This reduces wait times when users view the PPT or switch pages, as resources are not requested from the server each time. |
| \`resources\`           | array\\[string] | A list of download URLs for all required rendering resources. This can be used with private cloud storage for bulk link signing, enabling secure sharing or access to these resources.                                                                                                                                                                                                           |

<CalloutContainer type="info">
  <CalloutDescription>
    The API for querying the progress of file conversion tasks only supports tasks created within the past seven days. To prevent the loss of status information or results, Agora recommends that you additionally store task information after completing or failing a conversion, or receive notifications of task status changes through webhook callbacks.
  </CalloutDescription>
</CalloutContainer>

## Query to-be-converted tasks [#query-to-be-converted-tasks]

Call this API to list all tasks that are waiting to be converted.

### Prototype [#prototype-2]

* Method: \`GET\`
* Access point: \`https://api.netless.link/v5/projector/tasks\`

### Request header [#request-header-2]

Pass in the following parameters in the request header:

| Parameter | Category | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------- | :------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string   | Required          | A \`writer\` or \`admin\` SDK token. You can obtain a token using one of the following methods:- Get an SDK token for testing purposes from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post).<br />- Write code on your app server. See Generate a [token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string   | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />                                                                                                                                                                                                                          |

### Request example [#request-example-2]

\`\`\`bash
curl --request GET \\
  --url https://api.netless.link/v5/projector/tasks \\
  --header 'region: <string>' \\
  --header 'token: <string>'
\`\`\`

### HTTP response [#http-response-2]

For the details of all the possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`200\`, the request is successful. The response returns the status code and corresponding parameters.

**Response example**

\`\`\`json
[
  {
    "taskId": "xxx",
    "status": 1
  },
  {
    "taskId": "xxx",
    "status": 0
  }
]
\`\`\`

**Response parameters**

| Parameter | Category | Description                                                                                      |
| :-------- | :------- | :----------------------------------------------------------------------------------------------- |
| \`taskId\`  | string   | The task UUID, which is the unique identifier of the file-conversion task.                       |
| \`status\`  | number   | The status of the conversion task:- \`1\`: In progress.<br />- \`0\`: Waiting to be converted.<br /> |

If the status code is not \`200\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Cancel conversion task [#cancel-conversion-task]

Call this API to cancel a specified conversion task.

### Prototype [#prototype-3]

* Method: \`DELETE\`
* Access point: \`https://api.netless.link/v5/projector/tasks/{uuid}\`

### Request header [#request-header-3]

Pass in the following parameters in the request header:

| Parameter | Category | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :-------- | :------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`token\`   | string   | Required          | An SDK token. You can obtain a token using one of the following methods:- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post).<br />- Write code on your app server. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br />                                                                       |
| \`region\`  | string   | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br /> |

### Request Path [#request-path-1]

The following parameters are required in the URL:

| Parameter | Category | Required/Optional | Description                                                                                                                                      |
| :-------- | :------- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`    | string   | Required          | The task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion. |

### Request example [#request-example-3]

\`\`\`bash
DELETE /v5/projector/tasks/2fxxxxxx367e
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWsxxxxxM2MjRi
\`\`\`

### HTTP response [#http-response-3]

For the details of all the possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`200\`, the request is successful. The response returns the status code and corresponding parameters.

**Response example**

\`\`\`json
{
  "taskId": "xxx",
  "success": true
}
\`\`\`

**Response parameters**

| Parameter | Category | Description                                                                                                                                              |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`taskId\`  | string   | The task UUID, which is the unique identifier of the file-conversion task.                                                                               |
| \`success\` | boolean  | Whether canceling the conversion task is successful: - \`true\`: Task cancellation is successful.<br />- \`false\`: Task cancellation is unsuccessful.<br /> |

If the status code is not \`200\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Set task priority [#set-task-priority]

Call this API to move the specified conversion task in the waiting list to the front or the back of the task queue.

### Prototype [#prototype-4]

* Method: \`PUT\`
* Access point: \`https://api.netless.link/v5/projector/tasks/{uuid}/priority\`

### Request header [#request-header-4]

Pass in the following parameters in the request header:

| Parameter | Category | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :-------- | :------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string   | Required          | A \`writer\` or \`admin\` SDK token. You can obtain a token using one of the following methods:<br />- Get an SDK token for testing purposes from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post).<br />- Write code on your app server. See Generate a [token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br /> |
| \`region\`  | string   | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                                                                                                                                                                                                                |

### Request Body [#request-body-1]

You can specify the following parameters:

| Parameter  | Category | Required/Optional | Description                                                                                                                      |
| :--------- | :------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| \`priority\` | string   | Required          | Set task priority: - \`highest\`: Move to the front of the task queue.<br /> - \`lowest\`: Move to the back of the task queue.<br /> |

### Request Path [#request-path-2]

The following parameters are required in the URL:

| Parameter | Category | Required/Optional | Description                                                                                                                                      |
| :-------- | :------- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`    | string   | Required          | The task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion. |

### Request example [#request-example-4]

\`\`\`bash
PUT /v5/projector/tasks/2fxxxxxx367e
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWs9QxxxxxxMjRi

{
  "priority": "highest"
}
\`\`\`

### HTTP response [#http-response-4]

For the details of all the possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`200\`, the request is successful. The response returns the status code and corresponding parameters.

**Response example**

\`\`\`json
{
  "taskId": "xxx",
  "success": true
}
\`\`\`

**Response parameters**

| Parameter | Category | Description                                                                                                                              |
| :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`    | string   | The task UUID, which is the unique identifier of the file-conversion task.                                                               |
| \`success\` | boolean  | Whether setting the priority is successful: - \`true\`: Setting the priority succeeded.<br />- \`false\`: Setting the priority failed.<br /> |

If the status code is not \`200\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Webhook callback [#webhook-callback]

Call this callback to receive reports on the progress and operating status of file-conversion tasks from the server. You can call this callback by passing in the relevant parameters in the [request body](#request-body) when launching a file-conversion task.

<CalloutContainer type="info">
  <CalloutDescription>
    The Webhook callback could be repeated multiple times. To ensure that the app server processes identical responses in the same manner, you need to apply idempotent processing.
  </CalloutDescription>
</CalloutContainer>

### HTTP response [#http-response-5]

For the details of all the possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`200\`, the request is successful. The response returns the status code and corresponding parameters.

**Response example**

\`\`\`json
{
  "code": 0,
  "message": "success",
  "data": {
    "taskId": "da4c1b9ae************92af4ef22b8",
    "taskType": "dynamic_conversion",
    "prefixUrl": "https://xxxx.com/dynamicConvert",
    "pageCount": 10,
    "previews": {
      "1": "https://xxxx.xx.xx/1.png",
      "2": "https://xxxx.xx.xx/2.png"
    },
    "note": "https://xxx.xx.xx/note.json",
    "images": {
      "1": "https://xxxx.xx.xx/1.xxx",
      "2": "https://xxxx.xx.xx/2.xxx"
    },
    "noticeTimestamp": 1231369699739
  }
}
\`\`\`

**Response parameters**

| Parameter         | Category | Description                                                                                                                                                                                                                                                                          |
| :---------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`code\`            | number   | The error code. When the task succeeds, the value is \`0\`. For the details of all the possible error codes, see [error code](#error-code).                                                                                                                                            |
| \`message\`         | string   | The error message corresponding to the error code, describing the cause of the error.                                                                                                                                                                                                |
| \`taskId\`          | string   | The task UUID, which is the unique identifier of the file-conversion task.                                                                                                                                                                                                           |
| \`taskType\`        | string   | The type of the conversion task. Currently, only \`dynamic_conversion\` is available.                                                                                                                                                                                                  |
| \`prefixUrl\`       | string   | The prefix of the address of the generated file.                                                                                                                                                                                                                                     |
| \`pageCount\`       | number   | The number of file pages. This parameter is not available when the conversion task fails.                                                                                                                                                                                            |
| \`previews\`        | object   | The address of the preview. Each page corresponds to a preview address. This parameter is only returned when \`preview\` is set to \`true\` in the [request body](#request-body) when starting the file conversion. This parameter is not available when the conversion task fails.      |
| \`note\`            | string   | Notes and comments extracted from the file. This parameter contains only the pages that have notes or comments.                                                                                                                                                                      |
| \`images\`          | object   | The address of the static conversion results. Each page corresponds to a picture. This parameter is only returned when \`type\` is set to \`static\` in the [request body](#request-body) when starting the file conversion. This value is not available when the conversion task fails. |
| \`noticeTimestamp\` | number   | The time when you receive the Webhook callback.                                                                                                                                                                                                                                      |

## Error code [#error-code]

The following are details and solutions for all the possible error codes that could occur when calling the file conversion RESTful API.

| Error code | Error message                                           | Solution                                                                                                                                                                                                                          |
| :--------- | :------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2010201    | unsupported file format                                 | Upload the PPT or PPTX files.                                                                                                                                                                                                     |
| 2010202    | dynamic conversion only support pptx                    | Upload the PPTX files.                                                                                                                                                                                                            |
| 2010203    | the number of tasks exceeds limit                       | Call [Cancel conversion task](#cancel-conversion-task) to reduce the number of tasks in the queue, or wait for existing conversion tasks to complete before starting a conversion task.                                           |
| 2010605    | task not found                                          | Check whether the task UUID is correct.                                                                                                                                                                                           |
| 2011201    | task timeout                                            | Check the network connection or compress the file size.                                                                                                                                                                           |
| 2010606    | team not found                                          | Check whether the token is correct.  In Agora Console, check whether the data center is correctly configured and docs-to-web is enabled.                                                                                          |
| 2010607    | modify priority for running task is not allowed         | Ensure that the target task is in the waiting list.                                                                                                                                                                               |
| 2011301    | task not found                                          | Check whether the task UUID is correct.                                                                                                                                                                                           |
| 2030100    | download from OSS file failed                           | Check whether the target file has been uploaded.                                                                                                                                                                                  |
| 2030101    | unzip file failed, unsupported file in PPT              | Check whether the file can be opened with PowerPoint.                                                                                                                                                                             |
| 2030102    | can't find media file from unzip PPT                    | Check whether the path of the media files in the PPT is correct and whether an external link is used.  On the user's computer, move the PPT file to other folders and check whether the media files in the PPT file are playable. |
| 2030200    | read xml file failed                                    | Check whether the uploaded file is edited with software other than MS PowerPoint.                                                                                                                                                 |
| 2030201    | formula resolve failed, please check animation of PPT   | Examine or delete the animation in the PPT, and retry.                                                                                                                                                                            |
| 2030202    | unsupported formula type, please check animation of PPT | Examine or delete the animation in the PPT, and retry.                                                                                                                                                                            |
| 2040005    | task timeout                                            | Abnormal or oversized images are used in the uploaded file; contact [support@agora.io](mailto\\:support@agora.io)                                                                                                                  |
| 2050099    | unknown error                                           | Check whether the uploaded file is edited with software other than MS PowerPoint.                                                                                                                                                 |
| 2050100    | unsupported file type                                   | Upload the PPT or PPTX files.                                                                                                                                                                                                     |
| 2050101    | file download failed                                    | Check the network connection.                                                                                                                                                                                                     |
| 2050102    | file is empty                                           | Open the file locally, and check whether the file is empty.                                                                                                                                                                       |
| 2050107    | file url encode failed                                  | Check whether the URL address of the file is correct.                                                                                                                                                                             |
| 2050201    | init presentation parser failed                         | Check whether the uploaded file is edited with software other than MS PowerPoint.                                                                                                                                                 |
| 2050299    | unknown parsing error                                   | Check whether the uploaded file is edited with software other than MS PowerPoint.                                                                                                                                                 |
| 2050401    | generate preview failed                                 | Check whether the uploaded file is edited with software other than MS PowerPoint.                                                                                                                                                 |
| 2060402    | fonts in the rules that are not provided                | Contact [support@agora.io](mailto\\:support@agora.io)                                                                                                                                                                              |
| 2090304    | upload file to custom storage failed                    | Check whether the storage configuration is correct.                                                                                                                                                                               |
| 2090305    | not supported storage provider                          | Check whether the link to the cloud storage service provider is correct, or consider changing the service provider.                                                                                                               |
| 2110099    | unknown error                                           | Check whether the uploaded file is edited with software other than MS PowerPoint.                                                                                                                                                 |
| 2110100    | unsupported file type                                   | Upload files in a format that static conversion supports (PPT/PPTX/DOC/DOCX/PDF).                                                                                                                                                 |
| 2110101    | download file failed                                    | Check whether the address of the file is valid.                                                                                                                                                                                   |
| 2110102    | file is empty                                           | Open the file locally, and check whether the file is empty.                                                                                                                                                                       |
| 2110107    | file url encode failed                                  | Check whether the URL address of the file is correct.                                                                                                                                                                             |
| 2110108    | get file extension failed                               | Check whether the extension of the uploaded file has been modified intentionally, but the content of the file remains in an unsupported format.                                                                                   |
| 2110201    | init presentation parser failed                         | Check whether the uploaded file is edited with software other than MS PowerPoint.                                                                                                                                                 |
| 2110202    | init word parser failed                                 | Check whether the uploaded file is edited with software other than MS Word.                                                                                                                                                       |
| 2120201    | file is empty                                           | Open the file locally, and check whether the file is empty.                                                                                                                                                                       |
| 2120301    | download file failed                                    | Check whether the address of the file is valid.                                                                                                                                                                                   |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Interactive Whiteboard supports file conversion from PPT, PPTX, DOC, DOCX, and PDF files into static images, as well as from PPT/PPTX files into dynamic HTML web pages. The generated images and web pages can be presented on the whiteboard. See File Conversion Overview."
  }, {
    heading: undefined,
    content: "This page applies to the new version of file conversion. For the main differences between the old and new versions, see Version comparison. If you use the old file conversion, see Old File Conversion RESTful API Reference."
  }, {
    heading: "prerequisites",
    content: "Before calling the RESTful API for file conversion, ensure that you have:"
  }, {
    heading: "prerequisites",
    content: "You have enabled **Docs to Picture** or **Docs to Web** and configured storage settings in Agora Console. See Enable server-side supporting features."
  }, {
    heading: "prerequisites",
    content: "You have generated a URL address for the file you want to convert, and the address is publicly accessible."
  }, {
    heading: "start-file-conversion",
    content: "Call this API to start a file-conversion task."
  }, {
    heading: "prototype",
    content: "Method: `POST`"
  }, {
    heading: "prototype",
    content: "Access point: `https://api.netless.link/v5/projector/tasks`"
  }, {
    heading: "request-header",
    content: "Pass in the following parameters in the request header:"
  }, {
    heading: "request-header",
    content: "Parameter"
  }, {
    heading: "request-header",
    content: "Category"
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
    content: "A `writer` or `admin` SDK token. You can obtain a token using one of the following methods:- Get an SDK token for testing purposes from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Write code on your app server. See Generate a token from your app server.<br />"
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
    content: "Specifies a data center to process the request: - `us-sv`: Silicon Valley, US, which provides services to North America and South America.<br />- `sg`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- `in-mum`: Mumbai, India, which provides services to India.<br />- `cn-hz`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />- `eu`: Frankfurt, Europe, which provides services to Europe.<br />"
  }, {
    heading: "request-body",
    content: "You can specify the following parameters:"
  }, {
    heading: "request-body",
    content: "Parameter"
  }, {
    heading: "request-body",
    content: "Category"
  }, {
    heading: "request-body",
    content: "Required/Optional"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`resource`"
  }, {
    heading: "request-body",
    content: "string"
  }, {
    heading: "request-body",
    content: "Required"
  }, {
    heading: "request-body",
    content: "The URL of the file you want to convert."
  }, {
    heading: "request-body",
    content: "`type`"
  }, {
    heading: "request-body",
    content: "string"
  }, {
    heading: "request-body",
    content: "Required"
  }, {
    heading: "request-body",
    content: "The conversion type:<br />- `dynamic`: Dynamic-file conversion, converting the file to web pages.<br />- `static`: Static-file conversion, converting the file to images."
  }, {
    heading: "request-body",
    content: "`preview`"
  }, {
    heading: "request-body",
    content: "boolean"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "Whether to generate a preview of the generated files:<br />- `true`: Generate a preview.<br />- `false`: Do not generate a preview."
  }, {
    heading: "request-body",
    content: "`scale`"
  }, {
    heading: "request-body",
    content: "number"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "The scale factor of an image. The range is \\[0.1,3.0], and the default value is `1.2`. The higher the value, the clearer the generated image. This parameter only takes effect when `type` is set to `static`."
  }, {
    heading: "request-body",
    content: "`outputFormat`"
  }, {
    heading: "request-body",
    content: "string"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "The format of the generated image:<br />- `png`<br />- `jpg`<br />- `jpeg`<br />The default value is `png`. This parameter only takes effect when `type` is set to `static`."
  }, {
    heading: "request-body",
    content: "`webhookEndpoint`"
  }, {
    heading: "request-body",
    content: "string"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "The address of the Webhook callback, generally the app server address, is used to receive information sent by the server, such as the progress of tasks. See webhook callback."
  }, {
    heading: "request-body",
    content: "`webhookRetry`"
  }, {
    heading: "request-body",
    content: "number"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "The number of retries the system attempts when the Webhook callback fails. The default value is `3`, and the maximum is `10`."
  }, {
    heading: "request-body",
    content: "`imageCompressionLevel`"
  }, {
    heading: "request-body",
    content: "number"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "The compression level of the output image. You can only pass in the following values:- `0`: (Default) Output the original image.\n- `1`: The maximum number of colors used in the output image is limited to 256.\n- `2`: The maximum number of colors used in the output image is limited to 192.\n- `3`: The maximum number of colors used in the output image is limited to 128.\n- `4`: The maximum number of colors used in the output image is limited to 64.This parameter only takes effect when `type` is set to `dynamic`.Usually, the size of the output image can be compressed to up to 10% of its original without significantly reducing the image quality. Compressing the size of images can improve the first loading time of PPT files after conversion in poor network environment."
  }, {
    heading: "request-body",
    content: "`buildSpa`"
  }, {
    heading: "request-body",
    content: "boolean"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "Specifies whether to build a Single-page Application (SPA) after conversion. - `true`: (Default) Builds an SPA file. The output is an HTML file containing all resources needed to render the PPT, suitable for single-page preview. Note that the server requires additional time (approximately 3 to 300 seconds) to download necessary resources and compile the file.<br /> - `false`: Does not build an SPA file.<br />"
  }, {
    heading: "http-response",
    content: "For the details of all the possible response status codes, see the status code table."
  }, {
    heading: "http-response",
    content: "If the status code is `201`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response",
    content: "**Response example**"
  }, {
    heading: "http-response",
    content: "**Response parameters**"
  }, {
    heading: "http-response",
    content: "Parameter"
  }, {
    heading: "http-response",
    content: "Category"
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
    content: "The task UUID, which is the unique identifier of the file-conversion task."
  }, {
    heading: "http-response",
    content: "`status`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The status of the file-conversion task:- `Waiting`: Conversion is `waiting` to start.<br />- `Converting`: Conversion is in progress.<br />- `Finished`: Conversion has `finished`.<br />- `Fail`: Conversion failed.<br />"
  }, {
    heading: "http-response",
    content: "If the status code is not `201`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "query-the-progress-of-a-file-conversion-task",
    content: "Call this API to query the progress of a file-conversion task."
  }, {
    heading: "prototype-1",
    content: "Method: `GET`"
  }, {
    heading: "prototype-1",
    content: "Access point: `https://api.netless.link/v5/projector/tasks/{uuid}`"
  }, {
    heading: "request-header-1",
    content: "Pass in the following parameters in the request header:"
  }, {
    heading: "request-header-1",
    content: "Parameter"
  }, {
    heading: "request-header-1",
    content: "Category"
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
    content: "The Task token. You can obtain a token using one of the following methods:- Call the RESTful API. See Generate a task token.<br />- Write code on your app server. See Generate a token from your app server.<br />"
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
    content: "Category"
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
    content: "The task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion."
  }, {
    heading: "http-response-1",
    content: "For the details of all the possible response status codes, see the status code table."
  }, {
    heading: "http-response-1",
    content: "If the status code is `200`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response-1",
    content: "**Response examples:**"
  }, {
    heading: "http-response-1",
    content: "Dynamic conversion completed"
  }, {
    heading: "http-response-1",
    content: "Static conversion completed"
  }, {
    heading: "http-response-1",
    content: "Task in progress"
  }, {
    heading: "http-response-1",
    content: "**Response parameters:**"
  }, {
    heading: "http-response-1",
    content: "Parameter"
  }, {
    heading: "http-response-1",
    content: "Category"
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
    content: "The task UUID, which is the unique identifier of the file-conversion task."
  }, {
    heading: "http-response-1",
    content: "`status`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The status of the conversion task:- `Waiting`: Conversion is waiting to start.\n- `Converting`: Conversion is in progress.\n- `Finished`: Conversion is finished.\n- `Fail`: Conversion failed."
  }, {
    heading: "http-response-1",
    content: "`type`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The conversion type:- `dynamic`: Dynamic-file conversion, converting the file to web pages.\n- `static`: Static-file conversion, converting the file to images."
  }, {
    heading: "http-response-1",
    content: "`convertedPercentage`"
  }, {
    heading: "http-response-1",
    content: "number"
  }, {
    heading: "http-response-1",
    content: "The progress of the conversion expressed as a percentage."
  }, {
    heading: "http-response-1",
    content: "`prefix`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The prefix of the address of the generated file."
  }, {
    heading: "http-response-1",
    content: "`pageCount`"
  }, {
    heading: "http-response-1",
    content: "number"
  }, {
    heading: "http-response-1",
    content: "The number of file pages. This value is not available when the conversion task fails."
  }, {
    heading: "http-response-1",
    content: "`previews`"
  }, {
    heading: "http-response-1",
    content: "object"
  }, {
    heading: "http-response-1",
    content: "The address of the preview. Each page corresponds to a preview address. This parameter is only returned when `preview` is set to `true` and `type` is set to `dynamic` in the request body when starting the file conversion. This value is not available when the conversion task fails."
  }, {
    heading: "http-response-1",
    content: "`note`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "Notes and comments extracted from the file. This parameter contains only the pages that have notes or comments."
  }, {
    heading: "http-response-1",
    content: "`images`"
  }, {
    heading: "http-response-1",
    content: "object"
  }, {
    heading: "http-response-1",
    content: "The address of the static conversion results. Each page corresponds to an image. This parameter is only returned when `type` is set to `static` in the request body when starting the file conversion. This value is not available when the conversion task fails."
  }, {
    heading: "http-response-1",
    content: "`errorCode`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The error code. This parameter is only returned when the conversion task fails.  For the details of all the possible error codes, see error code."
  }, {
    heading: "http-response-1",
    content: "`errorMessage`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The error message corresponding to the error code, describing the cause of the error. This parameter is only returned when the conversion task fails."
  }, {
    heading: "http-response-1",
    content: "`zip`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "Provides a link to a downloadable ZIP package containing the complete set of conversion results for the PPT. This package includes preview images and all rendering resources. It can be used with SDK APIs to redirect to local resources, enabling full preloading. This reduces wait times when users view the PPT or switch pages, as resources are not requested from the server each time."
  }, {
    heading: "http-response-1",
    content: "`resources`"
  }, {
    heading: "http-response-1",
    content: "array\\[string]"
  }, {
    heading: "http-response-1",
    content: "A list of download URLs for all required rendering resources. This can be used with private cloud storage for bulk link signing, enabling secure sharing or access to these resources."
  }, {
    heading: "http-response-1",
    content: "The API for querying the progress of file conversion tasks only supports tasks created within the past seven days. To prevent the loss of status information or results, Agora recommends that you additionally store task information after completing or failing a conversion, or receive notifications of task status changes through webhook callbacks."
  }, {
    heading: "query-to-be-converted-tasks",
    content: "Call this API to list all tasks that are waiting to be converted."
  }, {
    heading: "prototype-2",
    content: "Method: `GET`"
  }, {
    heading: "prototype-2",
    content: "Access point: `https://api.netless.link/v5/projector/tasks`"
  }, {
    heading: "request-header-2",
    content: "Pass in the following parameters in the request header:"
  }, {
    heading: "request-header-2",
    content: "Parameter"
  }, {
    heading: "request-header-2",
    content: "Category"
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
    content: "A `writer` or `admin` SDK token. You can obtain a token using one of the following methods:- Get an SDK token for testing purposes from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Write code on your app server. See Generate a token from your app server.<br />"
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
    content: "Specifies a data center to process the request: - `us-sv`: Silicon Valley, US, which provides services to North America and South America.<br />- `sg`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- `in-mum`: Mumbai, India, which provides services to India.<br />- `cn-hz`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />- `eu`: Frankfurt, Europe, which provides services to Europe.<br />"
  }, {
    heading: "http-response-2",
    content: "For the details of all the possible response status codes, see the status code table."
  }, {
    heading: "http-response-2",
    content: "If the status code is `200`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response-2",
    content: "**Response example**"
  }, {
    heading: "http-response-2",
    content: "**Response parameters**"
  }, {
    heading: "http-response-2",
    content: "Parameter"
  }, {
    heading: "http-response-2",
    content: "Category"
  }, {
    heading: "http-response-2",
    content: "Description"
  }, {
    heading: "http-response-2",
    content: "`taskId`"
  }, {
    heading: "http-response-2",
    content: "string"
  }, {
    heading: "http-response-2",
    content: "The task UUID, which is the unique identifier of the file-conversion task."
  }, {
    heading: "http-response-2",
    content: "`status`"
  }, {
    heading: "http-response-2",
    content: "number"
  }, {
    heading: "http-response-2",
    content: "The status of the conversion task:- `1`: In progress.<br />- `0`: Waiting to be converted.<br />"
  }, {
    heading: "http-response-2",
    content: "If the status code is not `200`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "cancel-conversion-task",
    content: "Call this API to cancel a specified conversion task."
  }, {
    heading: "prototype-3",
    content: "Method: `DELETE`"
  }, {
    heading: "prototype-3",
    content: "Access point: `https://api.netless.link/v5/projector/tasks/{uuid}`"
  }, {
    heading: "request-header-3",
    content: "Pass in the following parameters in the request header:"
  }, {
    heading: "request-header-3",
    content: "Parameter"
  }, {
    heading: "request-header-3",
    content: "Category"
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
    content: "An SDK token. You can obtain a token using one of the following methods:- Call the RESTful API. See Generate an SDK token.<br />- Write code on your app server. See Generate a token from your app server.<br />"
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
    content: "Category"
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
    content: "The task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion."
  }, {
    heading: "http-response-3",
    content: "For the details of all the possible response status codes, see the status code table."
  }, {
    heading: "http-response-3",
    content: "If the status code is `200`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response-3",
    content: "**Response example**"
  }, {
    heading: "http-response-3",
    content: "**Response parameters**"
  }, {
    heading: "http-response-3",
    content: "Parameter"
  }, {
    heading: "http-response-3",
    content: "Category"
  }, {
    heading: "http-response-3",
    content: "Description"
  }, {
    heading: "http-response-3",
    content: "`taskId`"
  }, {
    heading: "http-response-3",
    content: "string"
  }, {
    heading: "http-response-3",
    content: "The task UUID, which is the unique identifier of the file-conversion task."
  }, {
    heading: "http-response-3",
    content: "`success`"
  }, {
    heading: "http-response-3",
    content: "boolean"
  }, {
    heading: "http-response-3",
    content: "Whether canceling the conversion task is successful: - `true`: Task cancellation is successful.<br />- `false`: Task cancellation is unsuccessful.<br />"
  }, {
    heading: "http-response-3",
    content: "If the status code is not `200`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "set-task-priority",
    content: "Call this API to move the specified conversion task in the waiting list to the front or the back of the task queue."
  }, {
    heading: "prototype-4",
    content: "Method: `PUT`"
  }, {
    heading: "prototype-4",
    content: "Access point: `https://api.netless.link/v5/projector/tasks/{uuid}/priority`"
  }, {
    heading: "request-header-4",
    content: "Pass in the following parameters in the request header:"
  }, {
    heading: "request-header-4",
    content: "Parameter"
  }, {
    heading: "request-header-4",
    content: "Category"
  }, {
    heading: "request-header-4",
    content: "Required/Optional"
  }, {
    heading: "request-header-4",
    content: "Description"
  }, {
    heading: "request-header-4",
    content: "`token`"
  }, {
    heading: "request-header-4",
    content: "string"
  }, {
    heading: "request-header-4",
    content: "Required"
  }, {
    heading: "request-header-4",
    content: "A `writer` or `admin` SDK token. You can obtain a token using one of the following methods:<br />- Get an SDK token for testing purposes from Agora Console. See Get security credentials for your whiteboard project.<br />- Call the RESTful API. See Generate an SDK token.<br />- Write code on your app server. See Generate a token from your app server.<br />"
  }, {
    heading: "request-header-4",
    content: "`region`"
  }, {
    heading: "request-header-4",
    content: "string"
  }, {
    heading: "request-header-4",
    content: "Required"
  }, {
    heading: "request-header-4",
    content: "Specifies a data center to process the request: - `us-sv`: Silicon Valley, US, which provides services to North America and South America.<br />- `sg`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- `in-mum`: Mumbai, India, which provides services to India.<br />- `eu`: Frankfurt, Europe, which provides services to Europe.<br />- `cn-hz`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />"
  }, {
    heading: "request-body-1",
    content: "You can specify the following parameters:"
  }, {
    heading: "request-body-1",
    content: "Parameter"
  }, {
    heading: "request-body-1",
    content: "Category"
  }, {
    heading: "request-body-1",
    content: "Required/Optional"
  }, {
    heading: "request-body-1",
    content: "Description"
  }, {
    heading: "request-body-1",
    content: "`priority`"
  }, {
    heading: "request-body-1",
    content: "string"
  }, {
    heading: "request-body-1",
    content: "Required"
  }, {
    heading: "request-body-1",
    content: "Set task priority: - `highest`: Move to the front of the task queue.<br /> - `lowest`: Move to the back of the task queue.<br />"
  }, {
    heading: "request-path-2",
    content: "The following parameters are required in the URL:"
  }, {
    heading: "request-path-2",
    content: "Parameter"
  }, {
    heading: "request-path-2",
    content: "Category"
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
    content: "The task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion."
  }, {
    heading: "http-response-4",
    content: "For the details of all the possible response status codes, see the status code table."
  }, {
    heading: "http-response-4",
    content: "If the status code is `200`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response-4",
    content: "**Response example**"
  }, {
    heading: "http-response-4",
    content: "**Response parameters**"
  }, {
    heading: "http-response-4",
    content: "Parameter"
  }, {
    heading: "http-response-4",
    content: "Category"
  }, {
    heading: "http-response-4",
    content: "Description"
  }, {
    heading: "http-response-4",
    content: "`uuid`"
  }, {
    heading: "http-response-4",
    content: "string"
  }, {
    heading: "http-response-4",
    content: "The task UUID, which is the unique identifier of the file-conversion task."
  }, {
    heading: "http-response-4",
    content: "`success`"
  }, {
    heading: "http-response-4",
    content: "boolean"
  }, {
    heading: "http-response-4",
    content: "Whether setting the priority is successful: - `true`: Setting the priority succeeded.<br />- `false`: Setting the priority failed.<br />"
  }, {
    heading: "http-response-4",
    content: "If the status code is not `200`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "webhook-callback",
    content: "Call this callback to receive reports on the progress and operating status of file-conversion tasks from the server. You can call this callback by passing in the relevant parameters in the request body when launching a file-conversion task."
  }, {
    heading: "webhook-callback",
    content: "The Webhook callback could be repeated multiple times. To ensure that the app server processes identical responses in the same manner, you need to apply idempotent processing."
  }, {
    heading: "http-response-5",
    content: "For the details of all the possible response status codes, see the status code table."
  }, {
    heading: "http-response-5",
    content: "If the status code is `200`, the request is successful. The response returns the status code and corresponding parameters."
  }, {
    heading: "http-response-5",
    content: "**Response example**"
  }, {
    heading: "http-response-5",
    content: "**Response parameters**"
  }, {
    heading: "http-response-5",
    content: "Parameter"
  }, {
    heading: "http-response-5",
    content: "Category"
  }, {
    heading: "http-response-5",
    content: "Description"
  }, {
    heading: "http-response-5",
    content: "`code`"
  }, {
    heading: "http-response-5",
    content: "number"
  }, {
    heading: "http-response-5",
    content: "The error code. When the task succeeds, the value is `0`. For the details of all the possible error codes, see error code."
  }, {
    heading: "http-response-5",
    content: "`message`"
  }, {
    heading: "http-response-5",
    content: "string"
  }, {
    heading: "http-response-5",
    content: "The error message corresponding to the error code, describing the cause of the error."
  }, {
    heading: "http-response-5",
    content: "`taskId`"
  }, {
    heading: "http-response-5",
    content: "string"
  }, {
    heading: "http-response-5",
    content: "The task UUID, which is the unique identifier of the file-conversion task."
  }, {
    heading: "http-response-5",
    content: "`taskType`"
  }, {
    heading: "http-response-5",
    content: "string"
  }, {
    heading: "http-response-5",
    content: "The type of the conversion task. Currently, only `dynamic_conversion` is available."
  }, {
    heading: "http-response-5",
    content: "`prefixUrl`"
  }, {
    heading: "http-response-5",
    content: "string"
  }, {
    heading: "http-response-5",
    content: "The prefix of the address of the generated file."
  }, {
    heading: "http-response-5",
    content: "`pageCount`"
  }, {
    heading: "http-response-5",
    content: "number"
  }, {
    heading: "http-response-5",
    content: "The number of file pages. This parameter is not available when the conversion task fails."
  }, {
    heading: "http-response-5",
    content: "`previews`"
  }, {
    heading: "http-response-5",
    content: "object"
  }, {
    heading: "http-response-5",
    content: "The address of the preview. Each page corresponds to a preview address. This parameter is only returned when `preview` is set to `true` in the request body when starting the file conversion. This parameter is not available when the conversion task fails."
  }, {
    heading: "http-response-5",
    content: "`note`"
  }, {
    heading: "http-response-5",
    content: "string"
  }, {
    heading: "http-response-5",
    content: "Notes and comments extracted from the file. This parameter contains only the pages that have notes or comments."
  }, {
    heading: "http-response-5",
    content: "`images`"
  }, {
    heading: "http-response-5",
    content: "object"
  }, {
    heading: "http-response-5",
    content: "The address of the static conversion results. Each page corresponds to a picture. This parameter is only returned when `type` is set to `static` in the request body when starting the file conversion. This value is not available when the conversion task fails."
  }, {
    heading: "http-response-5",
    content: "`noticeTimestamp`"
  }, {
    heading: "http-response-5",
    content: "number"
  }, {
    heading: "http-response-5",
    content: "The time when you receive the Webhook callback."
  }, {
    heading: "error-code",
    content: "The following are details and solutions for all the possible error codes that could occur when calling the file conversion RESTful API."
  }, {
    heading: "error-code",
    content: "Error code"
  }, {
    heading: "error-code",
    content: "Error message"
  }, {
    heading: "error-code",
    content: "Solution"
  }, {
    heading: "error-code",
    content: "2010201"
  }, {
    heading: "error-code",
    content: "unsupported file format"
  }, {
    heading: "error-code",
    content: "Upload the PPT or PPTX files."
  }, {
    heading: "error-code",
    content: "2010202"
  }, {
    heading: "error-code",
    content: "dynamic conversion only support pptx"
  }, {
    heading: "error-code",
    content: "Upload the PPTX files."
  }, {
    heading: "error-code",
    content: "2010203"
  }, {
    heading: "error-code",
    content: "the number of tasks exceeds limit"
  }, {
    heading: "error-code",
    content: "Call Cancel conversion task to reduce the number of tasks in the queue, or wait for existing conversion tasks to complete before starting a conversion task."
  }, {
    heading: "error-code",
    content: "2010605"
  }, {
    heading: "error-code",
    content: "task not found"
  }, {
    heading: "error-code",
    content: "Check whether the task UUID is correct."
  }, {
    heading: "error-code",
    content: "2011201"
  }, {
    heading: "error-code",
    content: "task timeout"
  }, {
    heading: "error-code",
    content: "Check the network connection or compress the file size."
  }, {
    heading: "error-code",
    content: "2010606"
  }, {
    heading: "error-code",
    content: "team not found"
  }, {
    heading: "error-code",
    content: "Check whether the token is correct.  In Agora Console, check whether the data center is correctly configured and docs-to-web is enabled."
  }, {
    heading: "error-code",
    content: "2010607"
  }, {
    heading: "error-code",
    content: "modify priority for running task is not allowed"
  }, {
    heading: "error-code",
    content: "Ensure that the target task is in the waiting list."
  }, {
    heading: "error-code",
    content: "2011301"
  }, {
    heading: "error-code",
    content: "task not found"
  }, {
    heading: "error-code",
    content: "Check whether the task UUID is correct."
  }, {
    heading: "error-code",
    content: "2030100"
  }, {
    heading: "error-code",
    content: "download from OSS file failed"
  }, {
    heading: "error-code",
    content: "Check whether the target file has been uploaded."
  }, {
    heading: "error-code",
    content: "2030101"
  }, {
    heading: "error-code",
    content: "unzip file failed, unsupported file in PPT"
  }, {
    heading: "error-code",
    content: "Check whether the file can be opened with PowerPoint."
  }, {
    heading: "error-code",
    content: "2030102"
  }, {
    heading: "error-code",
    content: "can't find media file from unzip PPT"
  }, {
    heading: "error-code",
    content: "Check whether the path of the media files in the PPT is correct and whether an external link is used.  On the user's computer, move the PPT file to other folders and check whether the media files in the PPT file are playable."
  }, {
    heading: "error-code",
    content: "2030200"
  }, {
    heading: "error-code",
    content: "read xml file failed"
  }, {
    heading: "error-code",
    content: "Check whether the uploaded file is edited with software other than MS PowerPoint."
  }, {
    heading: "error-code",
    content: "2030201"
  }, {
    heading: "error-code",
    content: "formula resolve failed, please check animation of PPT"
  }, {
    heading: "error-code",
    content: "Examine or delete the animation in the PPT, and retry."
  }, {
    heading: "error-code",
    content: "2030202"
  }, {
    heading: "error-code",
    content: "unsupported formula type, please check animation of PPT"
  }, {
    heading: "error-code",
    content: "Examine or delete the animation in the PPT, and retry."
  }, {
    heading: "error-code",
    content: "2040005"
  }, {
    heading: "error-code",
    content: "task timeout"
  }, {
    heading: "error-code",
    content: "Abnormal or oversized images are used in the uploaded file; contact support\\@agora.io"
  }, {
    heading: "error-code",
    content: "2050099"
  }, {
    heading: "error-code",
    content: "unknown error"
  }, {
    heading: "error-code",
    content: "Check whether the uploaded file is edited with software other than MS PowerPoint."
  }, {
    heading: "error-code",
    content: "2050100"
  }, {
    heading: "error-code",
    content: "unsupported file type"
  }, {
    heading: "error-code",
    content: "Upload the PPT or PPTX files."
  }, {
    heading: "error-code",
    content: "2050101"
  }, {
    heading: "error-code",
    content: "file download failed"
  }, {
    heading: "error-code",
    content: "Check the network connection."
  }, {
    heading: "error-code",
    content: "2050102"
  }, {
    heading: "error-code",
    content: "file is empty"
  }, {
    heading: "error-code",
    content: "Open the file locally, and check whether the file is empty."
  }, {
    heading: "error-code",
    content: "2050107"
  }, {
    heading: "error-code",
    content: "file url encode failed"
  }, {
    heading: "error-code",
    content: "Check whether the URL address of the file is correct."
  }, {
    heading: "error-code",
    content: "2050201"
  }, {
    heading: "error-code",
    content: "init presentation parser failed"
  }, {
    heading: "error-code",
    content: "Check whether the uploaded file is edited with software other than MS PowerPoint."
  }, {
    heading: "error-code",
    content: "2050299"
  }, {
    heading: "error-code",
    content: "unknown parsing error"
  }, {
    heading: "error-code",
    content: "Check whether the uploaded file is edited with software other than MS PowerPoint."
  }, {
    heading: "error-code",
    content: "2050401"
  }, {
    heading: "error-code",
    content: "generate preview failed"
  }, {
    heading: "error-code",
    content: "Check whether the uploaded file is edited with software other than MS PowerPoint."
  }, {
    heading: "error-code",
    content: "2060402"
  }, {
    heading: "error-code",
    content: "fonts in the rules that are not provided"
  }, {
    heading: "error-code",
    content: "Contact support\\@agora.io"
  }, {
    heading: "error-code",
    content: "2090304"
  }, {
    heading: "error-code",
    content: "upload file to custom storage failed"
  }, {
    heading: "error-code",
    content: "Check whether the storage configuration is correct."
  }, {
    heading: "error-code",
    content: "2090305"
  }, {
    heading: "error-code",
    content: "not supported storage provider"
  }, {
    heading: "error-code",
    content: "Check whether the link to the cloud storage service provider is correct, or consider changing the service provider."
  }, {
    heading: "error-code",
    content: "2110099"
  }, {
    heading: "error-code",
    content: "unknown error"
  }, {
    heading: "error-code",
    content: "Check whether the uploaded file is edited with software other than MS PowerPoint."
  }, {
    heading: "error-code",
    content: "2110100"
  }, {
    heading: "error-code",
    content: "unsupported file type"
  }, {
    heading: "error-code",
    content: "Upload files in a format that static conversion supports (PPT/PPTX/DOC/DOCX/PDF)."
  }, {
    heading: "error-code",
    content: "2110101"
  }, {
    heading: "error-code",
    content: "download file failed"
  }, {
    heading: "error-code",
    content: "Check whether the address of the file is valid."
  }, {
    heading: "error-code",
    content: "2110102"
  }, {
    heading: "error-code",
    content: "file is empty"
  }, {
    heading: "error-code",
    content: "Open the file locally, and check whether the file is empty."
  }, {
    heading: "error-code",
    content: "2110107"
  }, {
    heading: "error-code",
    content: "file url encode failed"
  }, {
    heading: "error-code",
    content: "Check whether the URL address of the file is correct."
  }, {
    heading: "error-code",
    content: "2110108"
  }, {
    heading: "error-code",
    content: "get file extension failed"
  }, {
    heading: "error-code",
    content: "Check whether the extension of the uploaded file has been modified intentionally, but the content of the file remains in an unsupported format."
  }, {
    heading: "error-code",
    content: "2110201"
  }, {
    heading: "error-code",
    content: "init presentation parser failed"
  }, {
    heading: "error-code",
    content: "Check whether the uploaded file is edited with software other than MS PowerPoint."
  }, {
    heading: "error-code",
    content: "2110202"
  }, {
    heading: "error-code",
    content: "init word parser failed"
  }, {
    heading: "error-code",
    content: "Check whether the uploaded file is edited with software other than MS Word."
  }, {
    heading: "error-code",
    content: "2120201"
  }, {
    heading: "error-code",
    content: "file is empty"
  }, {
    heading: "error-code",
    content: "Open the file locally, and check whether the file is empty."
  }, {
    heading: "error-code",
    content: "2120301"
  }, {
    heading: "error-code",
    content: "download file failed"
  }, {
    heading: "error-code",
    content: "Check whether the address of the file is valid."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "start-file-conversion",
    content: "Start file conversion"
  }, {
    id: "prototype",
    content: "Prototype"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request Body"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "http-response",
    content: "HTTP response"
  }, {
    id: "query-the-progress-of-a-file-conversion-task",
    content: "Query the progress of a file-conversion task"
  }, {
    id: "prototype-1",
    content: "Prototype"
  }, {
    id: "request-header-1",
    content: "Request header"
  }, {
    id: "request-path",
    content: "Request Path"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "http-response-1",
    content: "HTTP response"
  }, {
    id: "query-to-be-converted-tasks",
    content: "Query to-be-converted tasks"
  }, {
    id: "prototype-2",
    content: "Prototype"
  }, {
    id: "request-header-2",
    content: "Request header"
  }, {
    id: "request-example-2",
    content: "Request example"
  }, {
    id: "http-response-2",
    content: "HTTP response"
  }, {
    id: "cancel-conversion-task",
    content: "Cancel conversion task"
  }, {
    id: "prototype-3",
    content: "Prototype"
  }, {
    id: "request-header-3",
    content: "Request header"
  }, {
    id: "request-path-1",
    content: "Request Path"
  }, {
    id: "request-example-3",
    content: "Request example"
  }, {
    id: "http-response-3",
    content: "HTTP response"
  }, {
    id: "set-task-priority",
    content: "Set task priority"
  }, {
    id: "prototype-4",
    content: "Prototype"
  }, {
    id: "request-header-4",
    content: "Request header"
  }, {
    id: "request-body-1",
    content: "Request Body"
  }, {
    id: "request-path-2",
    content: "Request Path"
  }, {
    id: "request-example-4",
    content: "Request example"
  }, {
    id: "http-response-4",
    content: "HTTP response"
  }, {
    id: "webhook-callback",
    content: "Webhook callback"
  }, {
    id: "http-response-5",
    content: "HTTP response"
  }, {
    id: "error-code",
    content: "Error code"
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
  url: "#start-file-conversion",
  title: _jsx(_Fragment, {
    children: "Start file conversion"
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
    children: "Request Body"
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
  url: "#query-the-progress-of-a-file-conversion-task",
  title: _jsx(_Fragment, {
    children: "Query the progress of a file-conversion task"
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
    children: "Request Path"
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
  url: "#query-to-be-converted-tasks",
  title: _jsx(_Fragment, {
    children: "Query to-be-converted tasks"
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
  url: "#cancel-conversion-task",
  title: _jsx(_Fragment, {
    children: "Cancel conversion task"
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
    children: "Request Path"
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
}, {
  depth: 2,
  url: "#set-task-priority",
  title: _jsx(_Fragment, {
    children: "Set task priority"
  })
}, {
  depth: 3,
  url: "#prototype-4",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 3,
  url: "#request-header-4",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#request-body-1",
  title: _jsx(_Fragment, {
    children: "Request Body"
  })
}, {
  depth: 3,
  url: "#request-path-2",
  title: _jsx(_Fragment, {
    children: "Request Path"
  })
}, {
  depth: 3,
  url: "#request-example-4",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#http-response-4",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 2,
  url: "#webhook-callback",
  title: _jsx(_Fragment, {
    children: "Webhook callback"
  })
}, {
  depth: 3,
  url: "#http-response-5",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 2,
  url: "#error-code",
  title: _jsx(_Fragment, {
    children: "Error code"
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
    children: [_jsxs(_components.p, {
      children: ["Interactive Whiteboard supports file conversion from PPT, PPTX, DOC, DOCX, and PDF files into static images, as well as from PPT/PPTX files into dynamic HTML web pages. The generated images and web pages can be presented on the whiteboard. See ", _jsx(_components.a, {
        href: "/en/realtime-media/whiteboard/build/display-files-and-manage-scenes/file-conversion-overview.md",
        children: "File Conversion Overview"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This page applies to the new version of file conversion. For the main differences between the old and new versions, see ", _jsx(_components.a, {
            href: "/en/realtime-media/whiteboard/build/display-files-and-manage-scenes/file-conversion-overview#version-comparison",
            children: "Version comparison"
          }), ". If you use the old file conversion, see ", _jsx(_components.a, {
            href: "file-conversion-deprecated.mdx",
            children: "Old File Conversion RESTful API Reference"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before calling the RESTful API for file conversion, ensure that you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["You have enabled ", _jsx(_components.strong, {
          children: "Docs to Picture"
        }), " or ", _jsx(_components.strong, {
          children: "Docs to Web"
        }), " and configured storage settings in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ". See ", _jsx(_components.a, {
          href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#enable-whiteboard-server-side-features",
          children: "Enable server-side supporting features"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "You have generated a URL address for the file you want to convert, and the address is publicly accessible."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "start-file-conversion",
      children: "Start file conversion"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to start a file-conversion task."
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
          children: "https://api.netless.link/v5/projector/tasks"
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
            children: "Category"
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
            children: ["A ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " SDK token. You can obtain a token using one of the following methods:- Get an SDK token for testing purposes from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", "- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post",
              children: "Generate an SDK token"
            }), ".", "- Write code on your app server. See Generate a ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "token from your app server"
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
              children: "cn-hz"
            }), ": Hangzhou, China, which provides services to the areas not covered by other data centers.", "- ", _jsx(_components.code, {
              children: "eu"
            }), ": Frankfurt, Europe, which provides services to Europe."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-body",
      children: "Request Body"
    }), `
`, _jsx(_components.p, {
      children: "You can specify the following parameters:"
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
            children: "Category"
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
              children: "resource"
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
            children: "The URL of the file you want to convert."
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
            children: ["The conversion type:", "- ", _jsx(_components.code, {
              children: "dynamic"
            }), ": Dynamic-file conversion, converting the file to web pages.", "- ", _jsx(_components.code, {
              children: "static"
            }), ": Static-file conversion, converting the file to images."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "preview"
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
            children: ["Whether to generate a preview of the generated files:", "- ", _jsx(_components.code, {
              children: "true"
            }), ": Generate a preview.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Do not generate a preview."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "scale"
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
            children: "Optional"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The scale factor of an image. The range is [0.1,3.0], and the default value is ", _jsx(_components.code, {
              children: "1.2"
            }), ". The higher the value, the clearer the generated image. This parameter only takes effect when ", _jsx(_components.code, {
              children: "type"
            }), " is set to ", _jsx(_components.code, {
              children: "static"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "outputFormat"
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
            children: ["The format of the generated image:", "- ", _jsx(_components.code, {
              children: "png"
            }), "- ", _jsx(_components.code, {
              children: "jpg"
            }), "- ", _jsx(_components.code, {
              children: "jpeg"
            }), "The default value is ", _jsx(_components.code, {
              children: "png"
            }), ". This parameter only takes effect when ", _jsx(_components.code, {
              children: "type"
            }), " is set to ", _jsx(_components.code, {
              children: "static"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "webhookEndpoint"
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
            children: ["The address of the Webhook callback, generally the app server address, is used to receive information sent by the server, such as the progress of tasks. See ", _jsx(_components.a, {
              href: "#webhook-callback",
              children: "webhook callback"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "webhookRetry"
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
            children: "Optional"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The number of retries the system attempts when the Webhook callback fails. The default value is ", _jsx(_components.code, {
              children: "3"
            }), ", and the maximum is ", _jsx(_components.code, {
              children: "10"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "imageCompressionLevel"
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
            children: "Optional"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The compression level of the output image. You can only pass in the following values:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": (Default) Output the original image."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": The maximum number of colors used in the output image is limited to 256."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": The maximum number of colors used in the output image is limited to 192."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": The maximum number of colors used in the output image is limited to 128."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": The maximum number of colors used in the output image is limited to 64."]
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["This parameter only takes effect when ", _jsx(_components.code, {
                children: "type"
              }), " is set to ", _jsx(_components.code, {
                children: "dynamic"
              }), "."]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "Usually, the size of the output image can be compressed to up to 10% of its original without significantly reducing the image quality. Compressing the size of images can improve the first loading time of PPT files after conversion in poor network environment."
                })
              })
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "buildSpa"
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
            children: ["Specifies whether to build a Single-page Application (SPA) after conversion. - ", _jsx(_components.code, {
              children: "true"
            }), ": (Default) Builds an SPA file. The output is an HTML file containing all resources needed to render the PPT, suitable for single-page preview. Note that the server requires additional time (approximately 3 to 300 seconds) to download necessary resources and compile the file.", " - ", _jsx(_components.code, {
              children: "false"
            }), ": Does not build an SPA file."]
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
              children: "curl"
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
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.netless.link/v5/projector/tasks"
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
              children: " 'region: <string>'"
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
              children: " 'token: <string>'"
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
              children: " '"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "{"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "resource": "https://docs-test-xx.oss-cn-hangzhou.aliyuncs.com/xxx",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "type": "dynamic",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "preview": true,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "webhookEndpoint": "https://example.com/agoracallback",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "webhookRetry": 3,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "imageCompressionLevel": 0'
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
`, _jsx(_components.h3, {
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For the details of all the possible response status codes, see the ", _jsx(_components.a, {
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
              children: '  "uuid"'
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
              children: '"2fd2dxxxxx367e"'
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
              children: '  "type"'
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
              children: '"dynamic"'
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
              children: '"Waiting"'
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
        children: "Response parameters"
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
            children: "Category"
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
            children: "The task UUID, which is the unique identifier of the file-conversion task."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The status of the file-conversion task:- ", _jsx(_components.code, {
              children: "Waiting"
            }), ": Conversion is ", _jsx(_components.code, {
              children: "waiting"
            }), " to start.", "- ", _jsx(_components.code, {
              children: "Converting"
            }), ": Conversion is in progress.", "- ", _jsx(_components.code, {
              children: "Finished"
            }), ": Conversion has ", _jsx(_components.code, {
              children: "finished"
            }), ".", "- ", _jsx(_components.code, {
              children: "Fail"
            }), ": Conversion failed."]
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
      id: "query-the-progress-of-a-file-conversion-task",
      children: "Query the progress of a file-conversion task"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to query the progress of a file-conversion task."
    }), `
`, _jsx(_components.h3, {
      id: "prototype-1",
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
          children: "https://api.netless.link/v5/projector/tasks/{uuid}"
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
            children: "Category"
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
            children: ["The Task token. You can obtain a token using one of the following methods:- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-task-token-post",
              children: "Generate a task token"
            }), ".", "- Write code on your app server. See ", _jsx(_components.a, {
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
      children: "Request Path"
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
            children: "Category"
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
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion."
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
              children: "curl"
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
              children: " GET"
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
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.netless.link/v5/projector/tasks/:uuid"
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
              children: " 'region: <string>'"
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
              children: " 'token: <string>'"
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
      children: ["For the details of all the possible response status codes, see the ", _jsx(_components.a, {
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
        children: "Response examples:"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Dynamic conversion completed"
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
                  children: '  "uuid"'
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
                  children: '"dc11fe9e1xxxxxx7cd7ca3670a"'
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
                  children: '  "type"'
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
                  children: '"dynamic"'
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
                  children: '"Finished"'
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
                  children: '  "convertedPercentage"'
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
                  children: "100"
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
                  children: '  "pageCount"'
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
                  children: "2"
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
                  children: '  "previews"'
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
                  children: '    "1"'
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
                  children: '"https://xxx/flat/dynamicConvert/xxx/1.png"'
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
                  children: '    "2"'
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
                  children: '"https://xxx/flat/dynamicConvertxxx/2.png"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "note"'
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
                  children: '"https://xxx/jsonOutput/note.json"'
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
                  children: '  "prefix"'
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
                  children: '"https://xxx/flat/dynamicConvert"'
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
                  children: '  "zip"'
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
                  children: '"https://xxx.com/flat/dynamicConvert/xxx.zip"'
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
                  children: '  "resources"'
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
                  children: '    "https://xxx/jsonOutput/note.json"'
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
                  children: '    "https://xxx/flat/dynamicConvert/xxx/1.png"'
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
                  children: '    "https://xxx/flat/dynamicConvert/xxx/2.png"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ]"
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
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Static conversion completed"
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
                  children: '  "uuid"'
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
                  children: '"b5ec7c26ebxxxx217b8e2fb4dc5"'
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
                  children: '  "type"'
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
                  children: '"static"'
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
                  children: '"Finished"'
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
                  children: '  "convertedPercentage"'
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
                  children: "100"
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
                  children: '  "pageCount"'
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
                  children: "2"
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
                  children: '  "images"'
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
                  children: '    "1"'
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
                  children: '      "width"'
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
                  children: "1440"
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
                  children: '      "height"'
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
                  children: "810"
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
                  children: '      "url"'
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
                  children: '"https:/xxx/flat/staticConvert/xxxx/1.png"'
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
                  children: '    "2"'
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
                  children: '      "width"'
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
                  children: "1440"
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
                  children: '      "height"'
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
                  children: "810"
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
                  children: '      "url"'
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
                  children: '"https://xxx/flat/staticConvert/xxxx/2.png"'
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
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "prefix"'
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
                  children: '"https://xxx/flat/"'
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
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Task in progress"
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
                  children: '  "uuid"'
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
                  children: '"b5ec7c26exxxxb8e2fb4dc5"'
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
                  children: '  "type"'
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
                  children: '"static"'
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
                  children: '"Converting"'
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
                  children: '  "convertedPercentage"'
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
                  children: '  "prefix"'
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
                  children: '"https://xxx/flat/"'
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
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response parameters:"
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
            children: "Category"
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
            children: "The task UUID, which is the unique identifier of the file-conversion task."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The status of the conversion task:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Waiting"
                }), ": Conversion is waiting to start."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Converting"
                }), ": Conversion is in progress."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Finished"
                }), ": Conversion is finished."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Fail"
                }), ": Conversion failed."]
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
              children: "type"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The conversion type:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "dynamic"
                }), ": Dynamic-file conversion, converting the file to web pages."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "static"
                }), ": Static-file conversion, converting the file to images."]
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
              children: "convertedPercentage"
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
            children: "The progress of the conversion expressed as a percentage."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "prefix"
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
            children: "The prefix of the address of the generated file."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "pageCount"
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
            children: "The number of file pages. This value is not available when the conversion task fails."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "previews"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The address of the preview. Each page corresponds to a preview address. This parameter is only returned when ", _jsx(_components.code, {
              children: "preview"
            }), " is set to ", _jsx(_components.code, {
              children: "true"
            }), " and ", _jsx(_components.code, {
              children: "type"
            }), " is set to ", _jsx(_components.code, {
              children: "dynamic"
            }), " in the ", _jsx(_components.a, {
              href: "#request-body",
              children: "request body"
            }), " when starting the file conversion. This value is not available when the conversion task fails."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "note"
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
            children: "Notes and comments extracted from the file. This parameter contains only the pages that have notes or comments."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "images"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The address of the static conversion results. Each page corresponds to an image. This parameter is only returned when ", _jsx(_components.code, {
              children: "type"
            }), " is set to ", _jsx(_components.code, {
              children: "static"
            }), " in the ", _jsx(_components.a, {
              href: "#request-body",
              children: "request body"
            }), " when starting the file conversion. This value is not available when the conversion task fails."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "errorCode"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The error code. This parameter is only returned when the conversion task fails.  For the details of all the possible error codes, see ", _jsx(_components.a, {
              href: "#error-code",
              children: "error code"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "errorMessage"
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
            children: "The error message corresponding to the error code, describing the cause of the error. This parameter is only returned when the conversion task fails."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "zip"
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
            children: "Provides a link to a downloadable ZIP package containing the complete set of conversion results for the PPT. This package includes preview images and all rendering resources. It can be used with SDK APIs to redirect to local resources, enabling full preloading. This reduces wait times when users view the PPT or switch pages, as resources are not requested from the server each time."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "resources"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "array[string]"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A list of download URLs for all required rendering resources. This can be used with private cloud storage for bulk link signing, enabling secure sharing or access to these resources."
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The API for querying the progress of file conversion tasks only supports tasks created within the past seven days. To prevent the loss of status information or results, Agora recommends that you additionally store task information after completing or failing a conversion, or receive notifications of task status changes through webhook callbacks."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "query-to-be-converted-tasks",
      children: "Query to-be-converted tasks"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to list all tasks that are waiting to be converted."
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
          children: "https://api.netless.link/v5/projector/tasks"
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
            children: "Category"
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
            children: ["A ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " SDK token. You can obtain a token using one of the following methods:- Get an SDK token for testing purposes from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", "- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post",
              children: "Generate an SDK token"
            }), ".", "- Write code on your app server. See Generate a ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "token from your app server"
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
              children: "cn-hz"
            }), ": Hangzhou, China, which provides services to the areas not covered by other data centers.", "- ", _jsx(_components.code, {
              children: "eu"
            }), ": Frankfurt, Europe, which provides services to Europe."]
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
              children: "curl"
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
              children: " GET"
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
              children: "  --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.netless.link/v5/projector/tasks"
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
              children: " 'region: <string>'"
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
              children: " 'token: <string>'"
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
      children: ["For the details of all the possible response status codes, see the ", _jsx(_components.a, {
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
          children: [_jsx(_components.span, {
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
              children: "  {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "taskId"'
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
              children: '"xxx"'
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
              children: '    "status"'
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
              children: "1"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "taskId"'
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
              children: '"xxx"'
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
              children: '    "status"'
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
              children: "]"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response parameters"
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
            children: "Category"
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
              children: "taskId"
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
            children: "The task UUID, which is the unique identifier of the file-conversion task."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The status of the conversion task:- ", _jsx(_components.code, {
              children: "1"
            }), ": In progress.", "- ", _jsx(_components.code, {
              children: "0"
            }), ": Waiting to be converted."]
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
      id: "cancel-conversion-task",
      children: "Cancel conversion task"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to cancel a specified conversion task."
    }), `
`, _jsx(_components.h3, {
      id: "prototype-3",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "DELETE"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.netless.link/v5/projector/tasks/{uuid}"
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
            children: "Category"
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
            children: ["An SDK token. You can obtain a token using one of the following methods:- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post",
              children: "Generate an SDK token"
            }), ".", "- Write code on your app server. See ", _jsx(_components.a, {
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
      children: "Request Path"
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
            children: "Category"
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
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion."
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
              children: "DELETE"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /v5/projector/tasks/2fxxxxxx367e"
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
              children: " NETLESSSDK_YWsxxxxxM2MjRi"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "http-response-3",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For the details of all the possible response status codes, see the ", _jsx(_components.a, {
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
              children: '"xxx"'
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
              children: '  "success"'
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
        children: "Response parameters"
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
            children: "Category"
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
              children: "taskId"
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
            children: "The task UUID, which is the unique identifier of the file-conversion task."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "success"
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
            children: ["Whether canceling the conversion task is successful: - ", _jsx(_components.code, {
              children: "true"
            }), ": Task cancellation is successful.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Task cancellation is unsuccessful."]
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
      id: "set-task-priority",
      children: "Set task priority"
    }), `
`, _jsx(_components.p, {
      children: "Call this API to move the specified conversion task in the waiting list to the front or the back of the task queue."
    }), `
`, _jsx(_components.h3, {
      id: "prototype-4",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "PUT"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.netless.link/v5/projector/tasks/{uuid}/priority"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "request-header-4",
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
            children: "Category"
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
            children: ["A ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " SDK token. You can obtain a token using one of the following methods:", "- Get an SDK token for testing purposes from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", "- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post",
              children: "Generate an SDK token"
            }), ".", "- Write code on your app server. See Generate a ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "token from your app server"
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
      id: "request-body-1",
      children: "Request Body"
    }), `
`, _jsx(_components.p, {
      children: "You can specify the following parameters:"
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
            children: "Category"
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
              children: "priority"
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
            children: ["Set task priority: - ", _jsx(_components.code, {
              children: "highest"
            }), ": Move to the front of the task queue.", " - ", _jsx(_components.code, {
              children: "lowest"
            }), ": Move to the back of the task queue."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-path-2",
      children: "Request Path"
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
            children: "Category"
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
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-example-4",
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
              children: "PUT"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /v5/projector/tasks/2fxxxxxx367e"
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
              children: " NETLESSSDK_YWs9QxxxxxxMjRi"
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
              children: '  "priority"'
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
              children: ' "highest"'
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
      id: "http-response-4",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For the details of all the possible response status codes, see the ", _jsx(_components.a, {
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
              children: '"xxx"'
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
              children: '  "success"'
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
        children: "Response parameters"
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
            children: "Category"
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
            children: "The task UUID, which is the unique identifier of the file-conversion task."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "success"
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
            children: ["Whether setting the priority is successful: - ", _jsx(_components.code, {
              children: "true"
            }), ": Setting the priority succeeded.", "- ", _jsx(_components.code, {
              children: "false"
            }), ": Setting the priority failed."]
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
      id: "webhook-callback",
      children: "Webhook callback"
    }), `
`, _jsxs(_components.p, {
      children: ["Call this callback to receive reports on the progress and operating status of file-conversion tasks from the server. You can call this callback by passing in the relevant parameters in the ", _jsx(_components.a, {
        href: "#request-body",
        children: "request body"
      }), " when launching a file-conversion task."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The Webhook callback could be repeated multiple times. To ensure that the app server processes identical responses in the same manner, you need to apply idempotent processing."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "http-response-5",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For the details of all the possible response status codes, see the ", _jsx(_components.a, {
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
              children: '  "code"'
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
              children: '  "data"'
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
              children: '    "taskId"'
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
              children: '"da4c1b9ae************92af4ef22b8"'
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
              children: '    "taskType"'
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
              children: '"dynamic_conversion"'
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
              children: '    "prefixUrl"'
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
              children: '"https://xxxx.com/dynamicConvert"'
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
              children: '    "pageCount"'
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
              children: "10"
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
              children: '    "previews"'
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
              children: '      "1"'
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
              children: '"https://xxxx.xx.xx/1.png"'
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
              children: '      "2"'
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
              children: '"https://xxxx.xx.xx/2.png"'
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
              children: '    "note"'
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
              children: '"https://xxx.xx.xx/note.json"'
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
              children: '    "images"'
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
              children: '      "1"'
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
              children: '"https://xxxx.xx.xx/1.xxx"'
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
              children: '      "2"'
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
              children: '"https://xxxx.xx.xx/2.xxx"'
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
              children: '    "noticeTimestamp"'
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
              children: "1231369699739"
            })]
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
        children: "Response parameters"
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
            children: "Category"
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
              children: "code"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The error code. When the task succeeds, the value is ", _jsx(_components.code, {
              children: "0"
            }), ". For the details of all the possible error codes, see ", _jsx(_components.a, {
              href: "#error-code",
              children: "error code"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
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
            children: "The error message corresponding to the error code, describing the cause of the error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "taskId"
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
            children: "The task UUID, which is the unique identifier of the file-conversion task."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "taskType"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The type of the conversion task. Currently, only ", _jsx(_components.code, {
              children: "dynamic_conversion"
            }), " is available."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "prefixUrl"
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
            children: "The prefix of the address of the generated file."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "pageCount"
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
            children: "The number of file pages. This parameter is not available when the conversion task fails."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "previews"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The address of the preview. Each page corresponds to a preview address. This parameter is only returned when ", _jsx(_components.code, {
              children: "preview"
            }), " is set to ", _jsx(_components.code, {
              children: "true"
            }), " in the ", _jsx(_components.a, {
              href: "#request-body",
              children: "request body"
            }), " when starting the file conversion. This parameter is not available when the conversion task fails."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "note"
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
            children: "Notes and comments extracted from the file. This parameter contains only the pages that have notes or comments."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "images"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The address of the static conversion results. Each page corresponds to a picture. This parameter is only returned when ", _jsx(_components.code, {
              children: "type"
            }), " is set to ", _jsx(_components.code, {
              children: "static"
            }), " in the ", _jsx(_components.a, {
              href: "#request-body",
              children: "request body"
            }), " when starting the file conversion. This value is not available when the conversion task fails."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "noticeTimestamp"
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
            children: "The time when you receive the Webhook callback."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "error-code",
      children: "Error code"
    }), `
`, _jsx(_components.p, {
      children: "The following are details and solutions for all the possible error codes that could occur when calling the file conversion RESTful API."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Error code"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Error message"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2010201"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "unsupported file format"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Upload the PPT or PPTX files."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2010202"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "dynamic conversion only support pptx"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Upload the PPTX files."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2010203"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "the number of tasks exceeds limit"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Call ", _jsx(_components.a, {
              href: "#cancel-conversion-task",
              children: "Cancel conversion task"
            }), " to reduce the number of tasks in the queue, or wait for existing conversion tasks to complete before starting a conversion task."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2010605"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "task not found"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the task UUID is correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2011201"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "task timeout"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check the network connection or compress the file size."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2010606"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "team not found"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the token is correct.  In Agora Console, check whether the data center is correctly configured and docs-to-web is enabled."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2010607"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "modify priority for running task is not allowed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ensure that the target task is in the waiting list."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2011301"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "task not found"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the task UUID is correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2030100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "download from OSS file failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the target file has been uploaded."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2030101"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "unzip file failed, unsupported file in PPT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the file can be opened with PowerPoint."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2030102"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "can't find media file from unzip PPT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the path of the media files in the PPT is correct and whether an external link is used.  On the user's computer, move the PPT file to other folders and check whether the media files in the PPT file are playable."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2030200"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "read xml file failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the uploaded file is edited with software other than MS PowerPoint."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2030201"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "formula resolve failed, please check animation of PPT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examine or delete the animation in the PPT, and retry."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2030202"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "unsupported formula type, please check animation of PPT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examine or delete the animation in the PPT, and retry."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2040005"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "task timeout"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Abnormal or oversized images are used in the uploaded file; contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2050099"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "unknown error"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the uploaded file is edited with software other than MS PowerPoint."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2050100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "unsupported file type"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Upload the PPT or PPTX files."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2050101"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "file download failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check the network connection."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2050102"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "file is empty"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Open the file locally, and check whether the file is empty."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2050107"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "file url encode failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the URL address of the file is correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2050201"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "init presentation parser failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the uploaded file is edited with software other than MS PowerPoint."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2050299"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "unknown parsing error"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the uploaded file is edited with software other than MS PowerPoint."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2050401"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "generate preview failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the uploaded file is edited with software other than MS PowerPoint."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2060402"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "fonts in the rules that are not provided"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2090304"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "upload file to custom storage failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the storage configuration is correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2090305"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "not supported storage provider"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the link to the cloud storage service provider is correct, or consider changing the service provider."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2110099"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "unknown error"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the uploaded file is edited with software other than MS PowerPoint."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2110100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "unsupported file type"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Upload files in a format that static conversion supports (PPT/PPTX/DOC/DOCX/PDF)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2110101"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "download file failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the address of the file is valid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2110102"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "file is empty"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Open the file locally, and check whether the file is empty."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2110107"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "file url encode failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the URL address of the file is correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2110108"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "get file extension failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the extension of the uploaded file has been modified intentionally, but the content of the file remains in an unsupported format."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2110201"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "init presentation parser failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the uploaded file is edited with software other than MS PowerPoint."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2110202"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "init word parser failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the uploaded file is edited with software other than MS Word."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2120201"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "file is empty"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Open the file locally, and check whether the file is empty."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2120301"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "download file failed"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the address of the file is valid."
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
