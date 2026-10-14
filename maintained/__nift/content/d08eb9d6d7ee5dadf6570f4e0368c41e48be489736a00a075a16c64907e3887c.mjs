import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Legacy file conversion API",
  description: "Reference the previous Interactive Whiteboard file-conversion REST API."
};
export let _markdown = `

Interactive Whiteboard released a new version of file conversion service on July 27, 2022, that greatly improves conversion speed, content parsing, and stability. The new version also adds the ability to integrate with third-party whiteboard SDKs. Agora strongly recommends you use the new version of file conversion. See [File conversion RESTful API reference](file-conversion.md).

The file-conversion feature provided by Interactive Whiteboard can convert PPT, PPTX, DOC, DOCX, and PDF files into static images or dynamic HTML web pages. The generated images and web pages can be presented on the whiteboard. See [Old File Conversion Overview](../file-conversion-overview-deprecated.mdx).

<CalloutContainer type="info">
  <CalloutDescription>
    Before calling the RESTful API for file conversion, ensure that:

    * You have enabled **Docs to Picture** or **Docs to Web** and configured storage settings in [Agora Console](https://console.agora.io/). See [Enable whiteboard server-side features](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#enable-whiteboard-server-side-features).
    * You have generated a URL address for the file you want to convert, and the address is publicly accessible.
  </CalloutDescription>
</CalloutContainer>

## Start file conversion (POST) [#start-file-conversion-post]

Call this API to start a file-conversion task.

### Prototype [#prototype]

* Method: \`POST\`
* Access point: \`https://api.netless.link/v5/services/conversion/tasks\`

### Request header [#request-header]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`token\`   | string    | Required          | An SDK token with the \`writer\` or \`admin\` role. <br />To get an SDK Token, you can:- Get a test-purpose SDK token from Agora Console. See [Get security credentials for your whiteboard project](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project).<br />- Call the RESTful API. See [Generate an SDK Token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post).<br /> |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br />                                |

### Request Body [#request-body]

The following parameters are required in the URL.

| Parameter      | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`resource\`     | string    | Required          | The URL of the file you want to convert.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| \`type\`         | string    | Required          | The conversion type:- \`dynamic\`: Dynamic-file conversion, converting the file to web pages.
- \`static\`: Static-file conversion, converting the file to images.                                                                                                                                                                                                                                                                                                                                                            |
| \`preview\`      | boolean   | Optional          | Whether to generate a preview of the generated web pages:* \`true\`: Generate a preview.
* \`false\`: Do not generate a preview.<CalloutContainer type="info">
  <CalloutDescription>
    This parameter only takes effect when \`type\` is set to \`dynamic\`. Note that generating a preview can take a long time.
  </CalloutDescription>
</CalloutContainer>                                                                                                                                                                  |
| \`scale\`        | number    | Optional          | The scale factor of an image. The range is \\[0.1,3.0], and the default value is \`1.2\`. The higher the value, the clearer the generated image.<CalloutContainer type="info">
  <CalloutDescription>
    This parameter only takes effect when \`type\` is set to \`static\`.
  </CalloutDescription>
</CalloutContainer>                                                                                                                                                                                                       |
| \`outputFormat\` | string    | Optional          | The format of the generated image:- \`png\`
- \`jpg\` or \`jpeg\`
- \`webp\`The default value is \`png\`.<CalloutContainer type="info">
  <CalloutDescription>
    This parameter only takes effect when \`type\` is set to \`static\`.
  </CalloutDescription>
</CalloutContainer>                                                                                                                                                                                                                                                     |
| \`pack\`         | boolean   | Optional          | Whether to generate a resource package when performing a static document conversion task:- \`true\`: Generate a resource package.When this parameter is set as \`true\`, the Agora server packages all converted images into a \`{uuid}.zip\` file and uploads it to your specified storage path.* \`false\`: (Default) Do not generate a resource package.<CalloutContainer type="info">
  <CalloutDescription>
    This parameter only takes effect when \`type\` is set to \`static\`.
  </CalloutDescription>
</CalloutContainer> |

### Request example [#request-example]

\`\`\`bash
POST /v5/services/conversion/tasks
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWs9QxxxxxxMjRi

{
    "resource": "https://docs-test-xx.oss-cn-hangzhou.aliyuncs.com/xxx",
    "type": "static",
    "preview": true,
    "scale": 1,
    "outputFormat": "jpg"
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
    "uuid": "2fd2dxxxxx367e",
    "type": "static",
    "status": "Waiting"
}
\`\`\`

**Description of parameters in the response:**

| Parameter | Data type | Description                                                                                                                                                                                                        |
| :-------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`    | string    | The Task UUID, which is the unique identifier of the file-conversion task.                                                                                                                                         |
| \`type\`    | string    | The conversion type:- \`dynamic\`: Dynamic-file conversion, converting the file to web pages.
- \`static\`: Static-file conversion, converting the file to images.                                                     |
| \`status\`  | string    | The status of the conversion task:- \`Waiting\`: Conversion is waiting to start.<br />- \`Converting\`: Conversion is in progress.<br />- \`Finished\`: Conversion has finished.<br />- \`Fail\`: Conversion failed.<br /> |

If the status code is not \`201\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.

## Query file conversion progress (GET) [#query-file-conversion-progress-get]

Call this API to query the progress of a file-conversion task.

### Prototype [#prototype-1]

* Method: \`GET\`
* Access point: \`https://api.netless.link/v5/services/conversion/tasks/{uuid}\`

### Request header [#request-header-1]

Pass in the following parameters in the request header:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`token\`   | string    | Required          | A Task Token. To get one, you can:- Call the RESTful API. See [Generate a Task Token](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-task-token-post).<br />- Use code samples. See [Generate a token from your app server](/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx).<br />                                                                                                                          |
| \`region\`  | string    | Required          | Specifies a data center to process the request: - \`us-sv\`: Silicon Valley, US, which provides services to North America and South America.<br />- \`sg\`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.<br />- \`in-mum\`: Mumbai, India, which provides services to India.<br />- \`eu\`: Frankfurt, Europe, which provides services to Europe.<br />- \`cn-hz\`: Hangzhou, China, which provides services to the areas not covered by other data centers.<br /> |

### Request Path [#request-path]

The following parameters are required in the URL:

| Parameter | Data type | Required/Optional | Description                                                                                                                                      |
| :-------- | :-------- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`    | string    | Required          | The Task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion. |

### Query Parameters [#query-parameters]

You need to pass in the following query parameters:

| Parameter | Data type | Required/Optional | Description                                                                                                                                                    |
| :-------- | :-------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`type\`    | string    | Required          | The conversion type:- \`dynamic\`: Dynamic-file conversion, converting the file to web pages.
- \`static\`: Static-file conversion, converting the file to images. |

### Request example [#request-example-1]

\`\`\`bash
GET /v5/services/conversion/tasks/2fxxxxxx367e?type=static
Host: api.netless.link
region: us-sv
Content-Type: application/json
token: NETLESSSDK_YWsxxxxxM2MjRi
\`\`\`

### HTTP response [#http-response-1]

For details about all possible response status codes, see the [status code table](overview#status-codes).

If the status code is \`200\`, the request is successful. The response returns the status code and corresponding parameters.

**The following is a response example for a successful request:**

\`\`\`json
"status": 200,
"body":
{
    "uuid": "2fdxxxx7e",
    "type": "static",
    "status": "Finished",
    "progress": {
        "totalPageSize": 2,
        "convertedPageSize": 2,
        "convertedPercentage": 100,
        "convertedFileList": [
            {
                "width": 1333,
                "height": 750,
                "conversionFileUrl": "https://docs-test-xxx.oss-cn-hangzhou.aliyuncs.com/staticConvert/2fdxxxxx67e/1.jpeg"
            },
            {
                "width": 1333,
                "height": 750,
                "conversionFileUrl": "https://docs-test-xxx.oss-cn-hangzhou.aliyuncs.com/staticConvert/2fdxxxxx67e/2.jpeg"
            }
        ]
    }
}
\`\`\`

**Description of parameters in the response:**

| Parameter      | Data type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`uuid\`         | string    | The Task UUID, which is the unique identifier of the file-conversion task.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| \`type\`         | string    | The conversion type:- \`dynamic\`: Dynamic-file conversion, converting the file to web pages.
- \`static\`: Static-file conversion, converting the file to images.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| \`status\`       | string    | The status of the conversion task:- \`Waiting\`: Conversion is waiting to start.<br />- \`Converting\`: Conversion is in progress.<br />- \`Finished\`: Conversion has finished.<br />- \`Fail\`: Conversion failed.<br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| \`failedReason\` | string    | The reason the conversion task failed. This field is returned only when \`status\` is \`Fail\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| \`progress\`     | object    | The progress of the conversion task, which includes the following fields: - \`totalPageSize\`: Number. Indicates the number of pages of the source file.<br />- \`convertedPageSize\`: Number. Indicates the number of pages that have been converted.<br />- \`convertedPercentage\`: Number. Indicates the conversion progress in percentage form.<br />- \`convertedFileList\`: Array. Contains a list of generated files, each containing the following parameters:- \`width\`: Number. Indicates the width of the image or PPT slide in pixels.<br />- \`height\`: Number. Indicates the height of the image or PPT slide in pixels.<br />- \`conversionFileUrl\`: String. Indicates the URL of the generated file.<br />- \`preview\`: String. Indicates the address of the preview. This field is returned only when \`preview\` is set to \`true\` and \`type\` is set to \`dynamic\` in the request body when starting file conversion.<br /><br />- \`currentStep\`: String. Indicates the current step of a dynamic-file conversion task:- \`Extracting\`: The server is extracting resources.<br />- \`Packaging\`: The server is packaging resources.<br />- \`GeneratingPreview\`: The server is generating the preview.<br />- \`MediaTranscode\`: The server is transcoding.<br /><br />\` currentStep\` is returned only when \`type\` is set to \`dynamic\` in the request body when starting file conversion. |

If the status code is not \`200\`, the request fails. The response body includes a \`message\` field that describes the reason for the failure.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Interactive Whiteboard released a new version of file conversion service on July 27, 2022, that greatly improves conversion speed, content parsing, and stability. The new version also adds the ability to integrate with third-party whiteboard SDKs. Agora strongly recommends you use the new version of file conversion. See File conversion RESTful API reference."
  }, {
    heading: undefined,
    content: "The file-conversion feature provided by Interactive Whiteboard can convert PPT, PPTX, DOC, DOCX, and PDF files into static images or dynamic HTML web pages. The generated images and web pages can be presented on the whiteboard. See Old File Conversion Overview."
  }, {
    heading: undefined,
    content: "Before calling the RESTful API for file conversion, ensure that:"
  }, {
    heading: undefined,
    content: "You have enabled **Docs to Picture** or **Docs to Web** and configured storage settings in Agora Console. See Enable whiteboard server-side features."
  }, {
    heading: undefined,
    content: "You have generated a URL address for the file you want to convert, and the address is publicly accessible."
  }, {
    heading: "start-file-conversion-post",
    content: "Call this API to start a file-conversion task."
  }, {
    heading: "prototype",
    content: "Method: `POST`"
  }, {
    heading: "prototype",
    content: "Access point: `https://api.netless.link/v5/services/conversion/tasks`"
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
    content: "An SDK token with the `writer` or `admin` role. To get an SDK Token, you can:- Get a test-purpose SDK token from Agora Console. See Get security credentials for your whiteboard project.- Call the RESTful API. See Generate an SDK Token."
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
    content: "Specifies a data center to process the request: - `us-sv`: Silicon Valley, US, which provides services to North America and South America.- `sg`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.- `in-mum`: Mumbai, India, which provides services to India.- `eu`: Frankfurt, Europe, which provides services to Europe.- `cn-hz`: Hangzhou, China, which provides services to the areas not covered by other data centers."
  }, {
    heading: "request-body",
    content: "The following parameters are required in the URL."
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
    content: "The conversion type:- `dynamic`: Dynamic-file conversion, converting the file to web pages.\n- `static`: Static-file conversion, converting the file to images."
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
    content: "Whether to generate a preview of the generated web pages:* `true`: Generate a preview.\n* `false`: Do not generate a preview.This parameter only takes effect when `type` is set to `dynamic`. Note that generating a preview can take a long time."
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
    content: "The scale factor of an image. The range is \\[0.1,3.0], and the default value is `1.2`. The higher the value, the clearer the generated image.This parameter only takes effect when `type` is set to `static`."
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
    content: "The format of the generated image:- `png`\n- `jpg` or `jpeg`\n- `webp`The default value is `png`.This parameter only takes effect when `type` is set to `static`."
  }, {
    heading: "request-body",
    content: "`pack`"
  }, {
    heading: "request-body",
    content: "boolean"
  }, {
    heading: "request-body",
    content: "Optional"
  }, {
    heading: "request-body",
    content: "Whether to generate a resource package when performing a static document conversion task:- `true`: Generate a resource package.When this parameter is set as `true`, the Agora server packages all converted images into a `{uuid}.zip` file and uploads it to your specified storage path.* `false`: (Default) Do not generate a resource package.This parameter only takes effect when `type` is set to `static`."
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
    content: "The Task UUID, which is the unique identifier of the file-conversion task."
  }, {
    heading: "http-response",
    content: "`type`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The conversion type:- `dynamic`: Dynamic-file conversion, converting the file to web pages.\n- `static`: Static-file conversion, converting the file to images."
  }, {
    heading: "http-response",
    content: "`status`"
  }, {
    heading: "http-response",
    content: "string"
  }, {
    heading: "http-response",
    content: "The status of the conversion task:- `Waiting`: Conversion is waiting to start.- `Converting`: Conversion is in progress.- `Finished`: Conversion has finished.- `Fail`: Conversion failed."
  }, {
    heading: "http-response",
    content: "If the status code is not `201`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }, {
    heading: "query-file-conversion-progress-get",
    content: "Call this API to query the progress of a file-conversion task."
  }, {
    heading: "prototype-1",
    content: "Method: `GET`"
  }, {
    heading: "prototype-1",
    content: "Access point: `https://api.netless.link/v5/services/conversion/tasks/{uuid}`"
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
    content: "A Task Token. To get one, you can:- Call the RESTful API. See Generate a Task Token.- Use code samples. See Generate a token from your app server."
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
    content: "Specifies a data center to process the request: - `us-sv`: Silicon Valley, US, which provides services to North America and South America.- `sg`: Singapore, which provides services to Singapore, East Asia, and Southeast Asia.- `in-mum`: Mumbai, India, which provides services to India.- `eu`: Frankfurt, Europe, which provides services to Europe.- `cn-hz`: Hangzhou, China, which provides services to the areas not covered by other data centers."
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
    content: "The Task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion."
  }, {
    heading: "query-parameters",
    content: "You need to pass in the following query parameters:"
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
    content: "`type`"
  }, {
    heading: "query-parameters",
    content: "string"
  }, {
    heading: "query-parameters",
    content: "Required"
  }, {
    heading: "query-parameters",
    content: "The conversion type:- `dynamic`: Dynamic-file conversion, converting the file to web pages.\n- `static`: Static-file conversion, converting the file to images."
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
    content: "The Task UUID, which is the unique identifier of the file-conversion task."
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
    content: "`status`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The status of the conversion task:- `Waiting`: Conversion is waiting to start.- `Converting`: Conversion is in progress.- `Finished`: Conversion has finished.- `Fail`: Conversion failed."
  }, {
    heading: "http-response-1",
    content: "`failedReason`"
  }, {
    heading: "http-response-1",
    content: "string"
  }, {
    heading: "http-response-1",
    content: "The reason the conversion task failed. This field is returned only when `status` is `Fail`."
  }, {
    heading: "http-response-1",
    content: "`progress`"
  }, {
    heading: "http-response-1",
    content: "object"
  }, {
    heading: "http-response-1",
    content: "The progress of the conversion task, which includes the following fields: - `totalPageSize`: Number. Indicates the number of pages of the source file.- `convertedPageSize`: Number. Indicates the number of pages that have been converted.- `convertedPercentage`: Number. Indicates the conversion progress in percentage form.- `convertedFileList`: Array. Contains a list of generated files, each containing the following parameters:- `width`: Number. Indicates the width of the image or PPT slide in pixels.- `height`: Number. Indicates the height of the image or PPT slide in pixels.- `conversionFileUrl`: String. Indicates the URL of the generated file.- `preview`: String. Indicates the address of the preview. This field is returned only when `preview` is set to `true` and `type` is set to `dynamic` in the request body when starting file conversion.- `currentStep`: String. Indicates the current step of a dynamic-file conversion task:- `Extracting`: The server is extracting resources.- `Packaging`: The server is packaging resources.- `GeneratingPreview`: The server is generating the preview.- `MediaTranscode`: The server is transcoding.` currentStep` is returned only when `type` is set to `dynamic` in the request body when starting file conversion."
  }, {
    heading: "http-response-1",
    content: "If the status code is not `200`, the request fails. The response body includes a `message` field that describes the reason for the failure."
  }],
  headings: [{
    id: "start-file-conversion-post",
    content: "Start file conversion (POST)"
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
    id: "query-file-conversion-progress-get",
    content: "Query file conversion progress (GET)"
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
    id: "query-parameters",
    content: "Query Parameters"
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
  url: "#start-file-conversion-post",
  title: _jsx(_Fragment, {
    children: "Start file conversion (POST)"
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
  url: "#query-file-conversion-progress-get",
  title: _jsx(_Fragment, {
    children: "Query file conversion progress (GET)"
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
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query Parameters"
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
    children: [_jsxs(_components.p, {
      children: ["Interactive Whiteboard released a new version of file conversion service on July 27, 2022, that greatly improves conversion speed, content parsing, and stability. The new version also adds the ability to integrate with third-party whiteboard SDKs. Agora strongly recommends you use the new version of file conversion. See ", _jsx(_components.a, {
        href: "file-conversion.md",
        children: "File conversion RESTful API reference"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["The file-conversion feature provided by Interactive Whiteboard can convert PPT, PPTX, DOC, DOCX, and PDF files into static images or dynamic HTML web pages. The generated images and web pages can be presented on the whiteboard. See ", _jsx(_components.a, {
        href: "../file-conversion-overview-deprecated.mdx",
        children: "Old File Conversion Overview"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "Before calling the RESTful API for file conversion, ensure that:"
        }), _jsxs(_components.ul, {
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
              children: "Enable whiteboard server-side features"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "You have generated a URL address for the file you want to convert, and the address is publicly accessible."
          }), `
`]
        })]
      })
    }), `
`, _jsx(_components.h2, {
      id: "start-file-conversion-post",
      children: "Start file conversion (POST)"
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
          children: "https://api.netless.link/v5/services/conversion/tasks"
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
            children: ["An SDK token with the ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "admin"
            }), " role. ", _jsx("br", {}), "To get an SDK Token, you can:- Get a test-purpose SDK token from Agora Console. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard.md#get-security-credentials-for-your-whiteboard-project",
              children: "Get security credentials for your whiteboard project"
            }), ".", _jsx("br", {}), "- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-an-sdk-token-post",
              children: "Generate an SDK Token"
            }), ".", _jsx("br", {})]
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
            }), ": Silicon Valley, US, which provides services to North America and South America.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "sg"
            }), ": Singapore, which provides services to Singapore, East Asia, and Southeast Asia.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "in-mum"
            }), ": Mumbai, India, which provides services to India.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "eu"
            }), ": Frankfurt, Europe, which provides services to Europe.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "cn-hz"
            }), ": Hangzhou, China, which provides services to the areas not covered by other data centers.", _jsx("br", {})]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-body",
      children: "Request Body"
    }), `
`, _jsx(_components.p, {
      children: "The following parameters are required in the URL."
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
            children: [_jsx(_components.p, {
              children: "Whether to generate a preview of the generated web pages:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "true"
                }), ": Generate a preview."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "false"
                }), ": Do not generate a preview."]
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["This parameter only takes effect when ", _jsx(_components.code, {
                    children: "type"
                  }), " is set to ", _jsx(_components.code, {
                    children: "dynamic"
                  }), ". Note that generating a preview can take a long time."]
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
            children: [_jsxs(_components.p, {
              children: ["The scale factor of an image. The range is [0.1,3.0], and the default value is ", _jsx(_components.code, {
                children: "1.2"
              }), ". The higher the value, the clearer the generated image."]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["This parameter only takes effect when ", _jsx(_components.code, {
                    children: "type"
                  }), " is set to ", _jsx(_components.code, {
                    children: "static"
                  }), "."]
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
            children: [_jsx(_components.p, {
              children: "The format of the generated image:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "png"
                })
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "jpg"
                }), " or ", _jsx(_components.code, {
                  children: "jpeg"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "webp"
                })
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["The default value is ", _jsx(_components.code, {
                children: "png"
              }), "."]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["This parameter only takes effect when ", _jsx(_components.code, {
                    children: "type"
                  }), " is set to ", _jsx(_components.code, {
                    children: "static"
                  }), "."]
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
              children: "pack"
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
            children: [_jsx(_components.p, {
              children: "Whether to generate a resource package when performing a static document conversion task:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "true"
                }), ": Generate a resource package."]
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["When this parameter is set as ", _jsx(_components.code, {
                children: "true"
              }), ", the Agora server packages all converted images into a ", _jsx(_components.code, {
                children: "{uuid}.zip"
              }), " file and uploads it to your specified storage path."]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "false"
                }), ": (Default) Do not generate a resource package."]
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["This parameter only takes effect when ", _jsx(_components.code, {
                    children: "type"
                  }), " is set to ", _jsx(_components.code, {
                    children: "static"
                  }), "."]
                })
              })
            })]
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
              children: " /v5/services/conversion/tasks"
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
              children: '    "resource"'
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
              children: ' "https://docs-test-xx.oss-cn-hangzhou.aliyuncs.com/xxx",'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "type"'
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
              children: ' "static",'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "preview"'
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "scale"'
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
              children: " 1,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "outputFormat"'
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
              children: ' "jpg"'
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
              children: '    "status"'
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
            children: "The Task UUID, which is the unique identifier of the file-conversion task."
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
            children: ["The status of the conversion task:- ", _jsx(_components.code, {
              children: "Waiting"
            }), ": Conversion is waiting to start.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Converting"
            }), ": Conversion is in progress.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Finished"
            }), ": Conversion has finished.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Fail"
            }), ": Conversion failed.", _jsx("br", {})]
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
      id: "query-file-conversion-progress-get",
      children: "Query file conversion progress (GET)"
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
          children: "https://api.netless.link/v5/services/conversion/tasks/{uuid}"
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
            children: ["A Task Token. To get one, you can:- Call the RESTful API. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-rest.md#generate-a-task-token-post",
              children: "Generate a Task Token"
            }), ".", _jsx("br", {}), "- Use code samples. See ", _jsx(_components.a, {
              href: "/en/realtime-media/whiteboard/build/authenticate-users/generate-token-app-server.mdx",
              children: "Generate a token from your app server"
            }), ".", _jsx("br", {})]
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
            }), ": Silicon Valley, US, which provides services to North America and South America.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "sg"
            }), ": Singapore, which provides services to Singapore, East Asia, and Southeast Asia.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "in-mum"
            }), ": Mumbai, India, which provides services to India.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "eu"
            }), ": Frankfurt, Europe, which provides services to Europe.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "cn-hz"
            }), ": Hangzhou, China, which provides services to the areas not covered by other data centers.", _jsx("br", {})]
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
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Task UUID, which is the unique identifier of the file-conversion task. You can get it by calling the RESTful API to start a file conversion."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "query-parameters",
      children: "Query Parameters"
    }), `
`, _jsx(_components.p, {
      children: "You need to pass in the following query parameters:"
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
              children: " /v5/services/conversion/tasks/2fxxxxxx367e?type=static"
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
              children: '"2fdxxxx7e"'
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
              children: '    "status"'
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
              children: '    "progress"'
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
              children: '        "totalPageSize"'
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
              children: '        "convertedPageSize"'
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
              children: '        "convertedPercentage"'
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
              children: '        "convertedFileList"'
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
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "width"'
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
              children: "1333"
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
              children: '                "height"'
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
              children: "750"
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
              children: '                "conversionFileUrl"'
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
              children: '"https://docs-test-xxx.oss-cn-hangzhou.aliyuncs.com/staticConvert/2fdxxxxx67e/1.jpeg"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "width"'
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
              children: "1333"
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
              children: '                "height"'
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
              children: "750"
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
              children: '                "conversionFileUrl"'
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
              children: '"https://docs-test-xxx.oss-cn-hangzhou.aliyuncs.com/staticConvert/2fdxxxxx67e/2.jpeg"'
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
            children: "The Task UUID, which is the unique identifier of the file-conversion task."
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
            children: ["The status of the conversion task:- ", _jsx(_components.code, {
              children: "Waiting"
            }), ": Conversion is waiting to start.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Converting"
            }), ": Conversion is in progress.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Finished"
            }), ": Conversion has finished.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Fail"
            }), ": Conversion failed.", _jsx("br", {})]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "failedReason"
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
            children: ["The reason the conversion task failed. This field is returned only when ", _jsx(_components.code, {
              children: "status"
            }), " is ", _jsx(_components.code, {
              children: "Fail"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "progress"
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
            children: ["The progress of the conversion task, which includes the following fields: - ", _jsx(_components.code, {
              children: "totalPageSize"
            }), ": Number. Indicates the number of pages of the source file.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "convertedPageSize"
            }), ": Number. Indicates the number of pages that have been converted.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "convertedPercentage"
            }), ": Number. Indicates the conversion progress in percentage form.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "convertedFileList"
            }), ": Array. Contains a list of generated files, each containing the following parameters:- ", _jsx(_components.code, {
              children: "width"
            }), ": Number. Indicates the width of the image or PPT slide in pixels.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "height"
            }), ": Number. Indicates the height of the image or PPT slide in pixels.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "conversionFileUrl"
            }), ": String. Indicates the URL of the generated file.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "preview"
            }), ": String. Indicates the address of the preview. This field is returned only when ", _jsx(_components.code, {
              children: "preview"
            }), " is set to ", _jsx(_components.code, {
              children: "true"
            }), " and ", _jsx(_components.code, {
              children: "type"
            }), " is set to ", _jsx(_components.code, {
              children: "dynamic"
            }), " in the request body when starting file conversion.", _jsx("br", {}), _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "currentStep"
            }), ": String. Indicates the current step of a dynamic-file conversion task:- ", _jsx(_components.code, {
              children: "Extracting"
            }), ": The server is extracting resources.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Packaging"
            }), ": The server is packaging resources.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "GeneratingPreview"
            }), ": The server is generating the preview.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "MediaTranscode"
            }), ": The server is transcoding.", _jsx("br", {}), _jsx("br", {}), _jsx(_components.code, {
              children: " currentStep"
            }), " is returned only when ", _jsx(_components.code, {
              children: "type"
            }), " is set to ", _jsx(_components.code, {
              children: "dynamic"
            }), " in the request body when starting file conversion."]
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
