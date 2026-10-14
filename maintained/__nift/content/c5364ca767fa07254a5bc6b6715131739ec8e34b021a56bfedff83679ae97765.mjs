import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora Console",
  description: "Interact with Agora Console using the REST API."
};
export let _markdown = `

When you need to [create and manage Agora projects](#create-a-project) or [check usage](#get-project-usage), besides using the graphic user interface at Agora Console, you can also call the Agora Console RESTful API.

This page provides detailed help for the Agora Console RESTful APIs.

## Basic information [#basic-information]

This section provides basic information about the Agora Console RESTful APIs.

#### Domain [#domain]

All requests are sent to the host \`api.agora.io\`. See [Ensure service reliability](#ensure-service-reliability) for alternate domain names.

#### Data format [#data-format]

The \`Content-Type\` field in all HTTP request headers is \`application/json\`. All requests and responses are in JSON format. All request URLs and request bodies are case-sensitive.

#### Authentication [#authentication]

The Agora Console RESTful APIs only support HTTPS. Before sending HTTP requests, you must generate a Base64-encoded credential with the **Customer ID** and **Customer Secret** provided by Agora, and pass the credential to the \`Authorization\` field in the HTTP request header.

#### Call frequency limit [#call-frequency-limit]

For each Agora account (not each App ID), the call frequency of each API on this page is no more than 10 queries per second.

## Create a project [#create-a-project]

Creates an Agora project.

#### Prototype [#prototype]

* Method: \`POST\`

* Endpoint: \`https://api.agora.io/dev/v1/project\`

#### Request parameters [#request-parameters]

**Request body parameters**

Pass in the following parameters in the request body:

| Parameter         | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`name\`            | String  | (Required) The project name, which is between 1 to 255 characters in length.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| \`enable_sign_key\` | Boolean | (Required) Whether to enable the primary app certificate:* true: Enable the primary app certificate.
* false: (Default) Do not enable the primary app certificate.<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    After creating a project, you can send a request to \`https://api.agora.io/dev/v1/signkey\` to enable or disable the primary app certificate, or send a request to \`https://api.agora.io/dev/v1/reset_signkey\` to reset the primary app certificate.
  </CalloutDescription>
</CalloutContainer> |

#### Request example [#request-example]

**Request body**

\`\`\`json
{
  "name": "project1",
  "enable_sign_key": true
}
\`\`\`

#### Response parameters [#response-parameters]

For details about possible response status codes, see the [Response status codes](#response-status-codes) table.

If the status code is not \`201\`, the request fails. See the \`message\` field in the response body for the reason for this failure.

If the status code is \`201\`, the request succeeds, and the response body includes the following parameters:

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`project\` | Object | The information on the project, including the following fields:- \`id\`: String. The project ID
- \`name\`: String. The project name.
- \`vendor_key\`: String. The App ID of the project.
- \`sign_key\`: String. The primary app certificate of the project.
- \`recording_server\`: String. The IP address of the recording server.
  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.
  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.
- \`status\`: Number. The status of the project:
  * \`1\`: The project is enabled.
  * \`0\`: The project is disabled.
- \`created\`: Number. The Unix timestamp (in seconds) of when the project is created. |

#### Response example [#response-example]

The following is a response example for a successful request:

\`\`\`json
{
  "project": {
    "id": "xxxx",
    "name": "project1",
    "vendor_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "sign_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "recording_server": null,
    "status": 1,
    "created": 1464165672
  }
}
\`\`\`

## Get a specified project [#get-a-specified-project]

Gets the information on a specified project.

#### Prototype [#prototype-1]

* Method: \`GET\`

* Endpoint: \`https://api.agora.io/dev/v1/project\`

#### Request Parameters [#request-parameters-1]

**Query parameters**

Pass in the following query parameters in the request URL:

| Parameter | Type   | Description                                                                                                |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| \`id\`      | String | (Required) The project ID, which can be obtained by calling the [Get all projects](#get-all-projects) API. |
| \`name\`    | String | (Required) The project name.                                                                               |

#### Request example [#request-example-1]

**Request URL**

\`\`\`
\`https://api.agora.io/dev/v1/project?id=7sdnf3xRH&name=project1\`
\`\`\`

#### Response parameters [#response-parameters-1]

For details about possible response status codes, see the [Response status codes](#response-status-codes) table.

If the status code is not \`201\`, the request fails. See the \`message\` field in the response body for the reason for this failure.

If the status code is \`201\`, the request succeeds, and the response body includes the following parameters:

| Parameter  | Type  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`projects\` | Array | The information on the projects. This Array consists of multiple Objects. Each Object shows the information on one project and includes the following fields:- \`id\`: String. The project ID.
- \`name\`: String. The project name.
- \`vendor_key\`: String. The App ID of the project.
- \`sign_key\`: String. The primary App Certificate of the project.
- \`recording_server\`: String. The IP of the recording server.
  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.
  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.
- \`status\`: Number. The status of the project:
  * \`1\`: The project is enabled.
  * \`0\`: The project is disabled.
- \`created\`: Number. The Unix timestamp (in seconds) of when the project is created. |

#### Response example [#response-example-1]

The following is a response example for a successful request:

\`\`\`json
{
  "projects": [
    {
      "id": "xxxx",
      "name": "project1",
      "sign_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
      "vendor_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
      "recording_server": null,
      "status": 1,
      "created": 1464165672
    }
  ]
}
\`\`\`

## Get all projects [#get-all-projects]

Gets the information on all your Agora projects.

#### Prototype [#prototype-2]

* Method: \`GET\`

* Endpoint: \`https://api.agora.io/dev/v1/projects\`

#### Request example [#request-example-2]

**Request URL**

\`\`\`
\`https://api.agora.io/dev/v1/projects\`
\`\`\`

#### Response parameters [#response-parameters-2]

For details about possible response status codes, see the [Response status codes](#response-status-codes) table.

If the status code is not \`201\`, the request fails. See the \`message\` field in the response body for the reason for this failure.

If the status code is \`201\`, the request succeeds, and the response body includes the following parameters:

| Parameter  | Type  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`projects\` | Array | The information on the projects. This Array consists of multiple Objects. Each Object shows the information on one project and includes the following fields:- \`id\`: String. The project ID.
- \`name\`: String. The project name.
- \`vendor_key\`: String. The App ID of the project.
- \`sign_key\`: String. The primary App Certificate of the project.
- \`recording_server\`: String. The IP of the recording server.
  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.
  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.
- \`status\`: Number. The status of the project:
  * \`1\`: The project is enabled.
  * \`0\`: The project is disabled.
  * \`created\`: Number. The Unix timestamp (in seconds) of when the project is created. |

#### Response example [#response-example-2]

The following is a response example for a successful request:

\`\`\`json
{
  "projects": [
    {
      "id": "xxxx",
      "name": "project1",
      "sign_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
      "vendor_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
      "recording_server": null,
      "status": 1,
      "created": 1464165672
    },
    {
      "id": "xxxx",
      "name": "project1",
      "sign_key": "2c01da6d6f6741df88ec47005f08572b",
      "vendor_key": "eb00cd2b222a4eeaa24fc6046d90b227",
      "recording_server": null,
      "status": 1,
      "created": 1637153755
    }
  ]
}
\`\`\`

## Disable or enable a project [#disable-or-enable-a-project]

Disables or enables a specified Agora project.

#### Prototype [#prototype-3]

* Method: \`POST\`

* Endpoint: \`https://api.agora.io/dev/v1/project_status\`

#### Request parameters [#request-parameters-2]

**Request body parameters**

Pass in the following parameters in the request body:

| Parameter | Type   | Description                                                                                                |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| \`id\`      | String | (Required) The project ID, which can be obtained by calling the [Get all projects](#get-all-projects) API. |
| \`status\`  | Number | (Required) Whether to enable or disable the project:- \`0\`: Disable the project.
- \`1\`: Enable the project. |

#### Request example [#request-example-3]

**Request body**

\`\`\`json
{
  "id": "xxxx",
  "status": 0
}
\`\`\`

#### Response parameters [#response-parameters-3]

For details about possible response status codes, see the [Response status codes](#response-status-codes) table.

If the status code is not \`201\`, the request fails. See the \`message\` field in the response body for the reason for this failure.

If the status code is \`201\`, the request succeeds, and the response body includes the following parameters:

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`project\` | Object | The information on the project, including the following fields:- \`id\`: String. The project ID.
- \`name\`: String. The project name.
- \`vendor_key\`: String. The App ID of the project.
- \`sign_key\`: String. The primary app certificate of the project.
- \`recording_server\`: String. The IP address of the recording server.
  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.
  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.
- \`status\`: Number. The status of the project:
  * \`1\`: The project is enabled.
  * \`0\`: The project is disabled.
- \`created\`: Number. The Unix timestamp (in seconds) of when the project is created. |

#### Response example [#response-example-3]

The following is a response example for a successful request:

\`\`\`json
{
  "project": {
    "id": "xxxx",
    "name": "project1",
    "vendor_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "sign_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "recording_server": null,
    "status": 1,
    "created": 1464165672
  }
}
\`\`\`

## Set the IP address of the recording server [#set-the-ip-address-of-the-recording-server]

Sets the IP of the recording server for a specified project.

#### Prototype [#prototype-4]

* Method: \`POST\`

* Endpoint: \`https://api.agora.io/dev/v1/recording_config\`

#### Request parameters [#request-parameters-3]

**Request body parameters**

Pass in the following parameters in the request body:

| Parameter          | Type   | Description                                                                                                                                                |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`id\`               | String | (Required) The project ID, which can be obtained by calling the [Get all projects](#get-all-projects) API.                                                 |
| \`recording_server\` | String | (Required) The IP address of the recording server. This field takes effect only when you use v1.9.0 or earlier versions of Agora On-Premise Recording SDK. |

#### Request example [#request-example-4]

**Request body**

\`\`\`json
{
  "id": "xxxx",
  "recording_server": "10.12.1.5:8080"
}
\`\`\`

#### Response parameters [#response-parameters-4]

For details about possible response status codes, see the [Response status codes](#response-status-codes) table.

If the status code is not \`201\`, the request fails. See the \`message\` field in the response body for the reason for this failure.

If the status code is \`201\`, the request succeeds, and the response body includes the following parameters:

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`project\` | Object | The information on the project, including the following fields:- \`id\`: String. The project ID.
- \`name\`: String. The project name.
- \`vendor_key\`: String. The App ID of the project.
- \`sign_key\`: String. The primary app certificate of the project.
- \`recording_server\`: String. The IP address of the recording server.
  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.
  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.
- \`status\`: Number. The status of the project:
  * \`1\`: The project is enabled.
  * \`0\`: The project is disabled.
- \`created\`: Number. The Unix timestamp (in seconds) of when the project is created. |

#### Response example [#response-example-4]

The following is a response example for a successful request:

\`\`\`json
{
  "project": {
    "id": "xxxx",
    "name": "project1",
    "vendor_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "sign_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "recording_server": null,
    "status": 1,
    "created": 1464165672
  }
}
\`\`\`

## Enable or disable the primary app certificate [#enable-or-disable-the-primary-app-certificate]

Enables or disables the primary app certificate for a specified project.

#### Prototype [#prototype-5]

* Method: \`POST\`

* Endpoint: \`https://api.agora.io/dev/v1/signkey\`

#### Request parameters [#request-parameters-4]

**Request body parameters**

The following parameters are required in the request body:

| Parameter | Type    | Description                                                                                                                                                                                   |
| --------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`id\`      | String  | (Required) The project ID, which can be obtained by calling the [Get all projects](#get-all-projects) API.                                                                                    |
| \`enable\`  | Boolean | (Required) Whether to enable or disable the primary app certificate for the project:- true: (Default) Enable the primary app certificate.
- false: Do not enable the primary app certificate. |

#### Request example [#request-example-5]

**Request body**

\`\`\`json
{
  "id": "xxxx",
  "enable": true
}
\`\`\`

#### Response parameters [#response-parameters-5]

For details about possible response status codes, see the [Response status codes](#response-status-codes) table.

If the status code is not \`201\`, the request fails. See the \`message\` field in the response body for the reason for this failure.

If the status code is \`201\`, the request succeeds, and the response body includes the following parameters:

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`project\` | Object | The information on the project, including the following fields:- \`id\`: String. The project ID.
- \`name\`: String. The project name.
- \`vendor_key\`: String. The App ID of the project.
- \`sign_key\`: String. The primary app certificate of the project.
- \`recording_server\`: String. The IP address of the recording server.
  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.
  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.
- \`status\`: Number. The status of the project:
  * \`1\`: The project is enabled.
  * \`0\`: The project is disabled.
- \`created\`: Number. The Unix timestamp (in seconds) of when the project is created. |

#### Response example [#response-example-5]

The following is a response example for a successful request:

\`\`\`json
{
  "project": {
    "id": "xxxx",
    "name": "project1",
    "vendor_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "sign_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "recording_server": null,
    "status": 1,
    "created": 1464165672
  }
}
\`\`\`

## Reset the primary app certificate [#reset-the-primary-app-certificate]

Resets the primary app certificate for a specified project.

#### Prototype [#prototype-6]

* Method: \`POST\`

* Endpoint: \`https://api.agora.io/dev/v1/reset_signkey\`

#### Request parameter [#request-parameter]

**Request body parameter**

Pass in the following parameter in the request body:

| Parameter | Type   | Description                                                                                                |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| \`id\`      | String | (Required) The project ID, which can be obtained by calling the [Get all projects](#get-all-projects) API. |

#### Request example [#request-example-6]

**Request body**

\`\`\`json
{
  "id": "xxxx"
}
\`\`\`

#### Response parameters [#response-parameters-6]

For details about possible response status codes, see the [Response status codes](#response-status-codes) table.

If the status code is not \`201\`, the request fails. See the \`message\` field in the response body for the reason for this failure.

If the status code is \`201\`, the request succeeds, and the response body includes the following parameters:

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`project\` | Object | The information on the project, including the following fields:- \`id\`: String. The project ID.
- \`name\`: String. The project name.
- \`vendor_key\`: String. The App ID of the project.
- \`sign_key\`: String. The primary app certificate of the project.
- \`recording_server\`: String. The IP address of the recording server.
  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.
  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.
- \`status\`: Number. The status of the project:
  * \`1\`: The project is enabled.
  * \`0\`: The project is disabled.
- \`created\`: Number. The Unix timestamp (in seconds) of when the project is created. |

#### Response example [#response-example-6]

The following is a response example for a successful request:

\`\`\`json
{
  "project": {
    "id": "xxxx",
    "name": "project1",
    "vendor_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "sign_key": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
    "recording_server": null,
    "status": 1,
    "created": 1464165672
  }
}
\`\`\`

## Get project usage [#get-project-usage]

Gets the usage data of a specified project.

#### Prototype [#prototype-7]

* Method: \`GET\`

* Endpoint: \`https://api.agora.io/dev/v3/usage\`

#### Request parameters [#request-parameters-5]

**Query parameters**

Pass the following query parameters in the request path:

| Parameter    | Type   | Description                                                                                                                                                                                                                                                                      |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`project_id\` | String | (Required) The project ID, which can be obtained by calling the [Get all projects](#get-all-projects) API.                                                                                                                                                                       |
| \`from_date\`  | String | (Required) The start date of the query, UTC time. For example, 2020-01-01.                                                                                                                                                                                                       |
| \`to_date\`    | String | (Required) The end date of the query, UTC time. For example, 2020-01-31.                                                                                                                                                                                                         |
| \`business\`   | String | (Required) The business type. You can choose one of the following values:- \`default\`: Audio and video. The usage on Miniapp is not included.
- \`transcodeDuration\`: Transcoding.
- \`recording\`: On-premise recording.
- \`cloudRecording\`: Cloud recording.
- \`miniapp\`: Miniapp. |

#### Request example [#request-example-7]

**Request path**

\`\`\`
\`https://api.agora.io/dev/v3/usage?project_id=rxxxxxxj5u&from_date=2021-10-12&to_date=2021-12-14&business=default\`
\`\`\`

#### Response parameters [#response-parameters-7]

For details about possible response status codes, see the [Response status codes](#response-status-codes) table.

If the status code is not \`200\`, the request fails. See the \`message\` field in the response body for the reason for this failure.

If the status code is \`200\`, the request succeeds, and the response body includes the following parameters:

| Parameter | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`meta\`    | Object | Metadata, which describes the meaning of \`durationAudioAll\`, \`durationVideo1080P\`, \`durationVideo2K\`, \`durationVideo4K\`, \`durationVideoHd\` and \`durationVideoHdp\` in the \`usage\` parameter.- \`durationAudioAll\`: Object. Total audio duration.
  * \`en\`: String . \`durationAudioAll\` in English, that is, "Total Audio Duration".
  * \`unit\`: String. The unit of audio duration, in seconds.
- \`durationVideo1080P\`: Object. Total Full HD video duration.
  * \`en\`: String . \`durationVideo1080P\` in English, that is, "Full HD Video Duration (including Recording)".
  * \`unit\`: String . The unit of Full HD video duration, in seconds.
- \`durationVideo2K\`: Object. Total duration of 2K video.
  * \`en\`: String. \`durationVideo2K\` in English, that is, "2K Video Duration(including Recording)".
  * \`unit\`: String . The unit of 2K video duration, in seconds.
- \`durationVideo4K\`: Object. Total duration of 2K+ video.
  * \`en\`: String. \`durationVideo4K\` in English, that is, "2K+ Video Duration(including Recording)".
  * \`unit\`: String. The unit of 2K+ video duration, in seconds.
- \`durationVideoHd\`: Total duration of HD video.
  * \`en\`: String. \`durationVideoHd\` in English, that is, "HD Video Duration (including On premise Recording)".
  * \`unit\`: String. The unit of HD video duration, in seconds.
- \`durationVideoHdp\`: Total duration of Hdp video.
  * \`en\`: String. \`durationVideoHdp\` in English, that is, "HDP Video Duration(including Recording)".
  * \`unit\`: String. The unit of HDP video duration, in seconds. |
| \`usages\`  | Array  | Usage of the specified project. This array consists of multiple objects. Each object shows the usage of a specific day and includes the following fields:- \`date\`: Number. The query date, using UTC time and Unix timestamp.
- \`usage\`: Object. The usage of the query date.
- \`durationAudioAll\`: Number. Total duration of the audio, in seconds.
- \`durationVideo1080P\`: Number. Total duration of Full HD video, in seconds.
- \`durationVideo2K\`: Number. Total duration of 2K video, in seconds.
- \`durationVideo4K\`: Number. Total duration of 2K+ video, in seconds.
- \`durationVideoHd\`: Number. Total duration of HD video, in seconds.
- \`durationVideoHdp\`: Number. Total duration of HDP video, in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Response example [#response-example-7]

The following is a response example for a successful request:

\`\`\`json
{
  "meta": {
    "durationAudioAll": {
      "en": "Total Audio Duration",
      "unit": "second"
    },
    "durationVideo1080P": {
      "en": "Full HD Video Duration(including Recording)",
      "unit": "second"
    },
    "durationVideo2K": {
      "en": "2K Video Duration(including Recording)",
      "unit": "second"
    },
    "durationVideo4K": {
      "en": "4K Video Duration(including Recording)",
      "unit": "second"
    },
    "durationVideoHd": {
      "en": "HD Video Duration(including Recording)",
      "unit": "second"
    },
    "durationVideoHdp": {
      "en": "HDP Video Duration(including Recording)",
      "unit": "second"
    }
  },
  "usages": [
    {
      "date": "2021-10-12T00:00:00.000Z",
      "usage": {
        "durationAudioAll": 0,
        "durationVideo1080P": 0,
        "durationVideo2K": 0,
        "durationVideo4K": 0,
        "durationVideoHd": 0,
        "durationVideoHdp": 0
      }
    },
    {
      "date": "2021-10-13T00:00:00.000Z",
      "usage": {
        "durationAudioAll": 779,
        "durationVideo1080P": 0,
        "durationVideo2K": 0,
        "durationVideo4K": 0,
        "durationVideoHd": 60,
        "durationVideoHdp": 0
      }
    },
    {
      "date": "2021-10-14T00:00:00.000Z",
      "usage": {
        "durationAudioAll": 0,
        "durationVideo1080P": 0,
        "durationVideo2K": 0,
        "durationVideo4K": 0,
        "durationVideoHd": 0,
        "durationVideoHdp": 0
      }
    }
  ]
}
\`\`\`

## Response status codes [#response-status-codes]

The following table shows the possible response status codes.

* If the status code is \`200\` or \`201\`, the request succeeds.

* If the status code is neither \`200\` nor \`201\`, the request fails. See the \`message\` field in the response body for the reason for this failure.

| Response status code | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 200                  | The request is successful.                                                                                                       |
| 201                  | The request has been fulfilled, resulting in the creation of a new resource.                                                     |
| 400                  | Bad request. Possible reasons:* Duplicate project name.
* Vendor is blocked.
* The number of projects exceeds the maximum limit. |
| 401                  | Unauthorized (incorrect App ID/Customer Certificate).                                                                            |
| 403                  | Forbidden.                                                                                                                       |
| 404                  | The requested resource could not be found.                                                                                       |
| 415                  | Unsupported media type. Make sure that you set \`Content-Type\` in \`Headers\` as \`application/json\`.                                |
| 429                  | Too many requests.                                                                                                               |
| 500                  | Internal error of the Agora RESTful API service.                                                                                 |

## Ensure service reliability [#ensure-service-reliability]

This section presents the overall strategy you use to ensure high availability of REST services.

### Switch the domain name [#switch-the-domain-name]

To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures. Take the following steps to set up and switch your domain name:

1. Set the primary domain name based on the location of your service server:
   * If the DNS address of the service server is located in a country or region other than mainland China, set the primary domain name to \`api.agora.io\`.
   * If the DNS address of the service server is in mainland China, set the primary domain name to \`api.sd-rtn.com\`.

2. If your attempt to initiate a RESTful API request using the primary domain fails, set up your retry strategy as follows:

   1. **Primary domain retry**: Retry using the same primary domain name.

   2. **Alternate domain retry**:
      * If the current primary domain name is \`api.sd-rtn.com\`, use \`api.agora.io\` as the alternate domain name.
      * If the current primary domain name is \`api.agora.io\`, use \`api.sd-rtn.com\` as the alternate domain name.

   3. **Adjacent domain retry**: If alternate domain retry fails, retry using the domain name adjacent to the current region.

      For example, suppose your business server is located in Europe. You set the primary domain name to \`api.agora.io\`, and the business server resolves the primary domain name to Germany. Germany is located in central Europe (\`api-eu-central-1.agora.io\`). The [domain name table](#domain-name-table) shows that the adjacent area is West Europe. Use the \`api-eu-west-1.agora.io\` or \`api-eu-west-1.sd-rtn.com\` domain name to retry.

#### Precautions [#precautions]

Take the following precautions when setting up your retry strategy:

* To avoid exceeding the QPS limit with retry requests, best practice is to use a back-off strategy. For example, wait 1 second before you retry for the first time, wait 3 seconds before retrying the second time, and wait 6 seconds before retrying a third time.
* If the request fails because of a network problem rather than a DNS domain name resolution problem, skip alternate domain retry and proceed to adjacent domain retry.
* Before switching to the region domain name, ensure that the REST services you wish to use, for example, cloud recording or channel management, are deployed in that region.

### Domain name table [#domain-name-table]

The following table shows the primary and region domain names for various regions.

| Primary domain name | Region domain name              | Region                 |
| :------------------ | :------------------------------ | :--------------------- |
| \`api.sd-rtn.com\`    | \`api-us-west-1.sd-rtn.com\`      | Western United States  |
|                     | \`api-us-east-1.sd-rtn.com\`      | Eastern United States  |
|                     | \`api-ap-southeast-1.sd-rtn.com\` | Southeast Asia Pacific |
|                     | \`api-ap-northeast-1.sd-rtn.com\` | Northeast Asia Pacific |
|                     | \`api-eu-west-1.sd-rtn.com\`      | Western Europe         |
|                     | \`api-eu-central-1.sd-rtn.com\`   | Central Europe         |
|                     | \`api-cn-east-1.sd-rtn.com\`      | East China             |
|                     | \`api-cn-north-1.sd-rtn.com\`     | North China            |
| \`api.agora.io\`      | \`api-us-west-1.agora.io\`        | Western United States  |
|                     | \`api-us-east-1.agora.io\`        | Eastern United States  |
|                     | \`api-ap-southeast-1.agora.io\`   | Southeast Asia Pacific |
|                     | \`api-ap-northeast-1.agora.io\`   | Northeast Asia Pacific |
|                     | \`api-eu-west-1.agora.io\`        | Western Europe         |
|                     | \`api-eu-central-1.agora.io\`     | Central Europe         |
|                     | \`api-cn-east-1.agora.io\`        | East China             |
|                     | \`api-cn-north-1.agora.io\`       | North China            |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When you need to create and manage Agora projects or check usage, besides using the graphic user interface at Agora Console, you can also call the Agora Console RESTful API."
  }, {
    heading: undefined,
    content: "This page provides detailed help for the Agora Console RESTful APIs."
  }, {
    heading: "basic-information",
    content: "This section provides basic information about the Agora Console RESTful APIs."
  }, {
    heading: "domain",
    content: "All requests are sent to the host `api.agora.io`. See Ensure service reliability for alternate domain names."
  }, {
    heading: "data-format",
    content: "The `Content-Type` field in all HTTP request headers is `application/json`. All requests and responses are in JSON format. All request URLs and request bodies are case-sensitive."
  }, {
    heading: "authentication",
    content: "The Agora Console RESTful APIs only support HTTPS. Before sending HTTP requests, you must generate a Base64-encoded credential with the **Customer ID** and **Customer Secret** provided by Agora, and pass the credential to the `Authorization` field in the HTTP request header."
  }, {
    heading: "call-frequency-limit",
    content: "For each Agora account (not each App ID), the call frequency of each API on this page is no more than 10 queries per second."
  }, {
    heading: "create-a-project",
    content: "Creates an Agora project."
  }, {
    heading: "prototype",
    content: "Method: `POST`"
  }, {
    heading: "prototype",
    content: "Endpoint: `https://api.agora.io/dev/v1/project`"
  }, {
    heading: "request-parameters",
    content: "**Request body parameters**"
  }, {
    heading: "request-parameters",
    content: "Pass in the following parameters in the request body:"
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
    content: "`name`"
  }, {
    heading: "request-parameters",
    content: "String"
  }, {
    heading: "request-parameters",
    content: "(Required) The project name, which is between 1 to 255 characters in length."
  }, {
    heading: "request-parameters",
    content: "`enable_sign_key`"
  }, {
    heading: "request-parameters",
    content: "Boolean"
  }, {
    heading: "request-parameters",
    content: "(Required) Whether to enable the primary app certificate:* true: Enable the primary app certificate.\n* false: (Default) Do not enable the primary app certificate.Note\n\nAfter creating a project, you can send a request to `https://api.agora.io/dev/v1/signkey` to enable or disable the primary app certificate, or send a request to `https://api.agora.io/dev/v1/reset_signkey` to reset the primary app certificate."
  }, {
    heading: "request-example",
    content: "**Request body**"
  }, {
    heading: "response-parameters",
    content: "For details about possible response status codes, see the Response status codes table."
  }, {
    heading: "response-parameters",
    content: "If the status code is not `201`, the request fails. See the `message` field in the response body for the reason for this failure."
  }, {
    heading: "response-parameters",
    content: "If the status code is `201`, the request succeeds, and the response body includes the following parameters:"
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
    content: "`project`"
  }, {
    heading: "response-parameters",
    content: "Object"
  }, {
    heading: "response-parameters",
    content: "The information on the project, including the following fields:- `id`: String. The project ID\n- `name`: String. The project name.\n- `vendor_key`: String. The App ID of the project.\n- `sign_key`: String. The primary app certificate of the project.\n- `recording_server`: String. The IP address of the recording server.\n  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.\n  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.\n- `status`: Number. The status of the project:\n  * `1`: The project is enabled.\n  * `0`: The project is disabled.\n- `created`: Number. The Unix timestamp (in seconds) of when the project is created."
  }, {
    heading: "response-example",
    content: "The following is a response example for a successful request:"
  }, {
    heading: "get-a-specified-project",
    content: "Gets the information on a specified project."
  }, {
    heading: "prototype-1",
    content: "Method: `GET`"
  }, {
    heading: "prototype-1",
    content: "Endpoint: `https://api.agora.io/dev/v1/project`"
  }, {
    heading: "request-parameters-1",
    content: "**Query parameters**"
  }, {
    heading: "request-parameters-1",
    content: "Pass in the following query parameters in the request URL:"
  }, {
    heading: "request-parameters-1",
    content: "Parameter"
  }, {
    heading: "request-parameters-1",
    content: "Type"
  }, {
    heading: "request-parameters-1",
    content: "Description"
  }, {
    heading: "request-parameters-1",
    content: "`id`"
  }, {
    heading: "request-parameters-1",
    content: "String"
  }, {
    heading: "request-parameters-1",
    content: "(Required) The project ID, which can be obtained by calling the Get all projects API."
  }, {
    heading: "request-parameters-1",
    content: "`name`"
  }, {
    heading: "request-parameters-1",
    content: "String"
  }, {
    heading: "request-parameters-1",
    content: "(Required) The project name."
  }, {
    heading: "request-example-1",
    content: "**Request URL**"
  }, {
    heading: "response-parameters-1",
    content: "For details about possible response status codes, see the Response status codes table."
  }, {
    heading: "response-parameters-1",
    content: "If the status code is not `201`, the request fails. See the `message` field in the response body for the reason for this failure."
  }, {
    heading: "response-parameters-1",
    content: "If the status code is `201`, the request succeeds, and the response body includes the following parameters:"
  }, {
    heading: "response-parameters-1",
    content: "Parameter"
  }, {
    heading: "response-parameters-1",
    content: "Type"
  }, {
    heading: "response-parameters-1",
    content: "Description"
  }, {
    heading: "response-parameters-1",
    content: "`projects`"
  }, {
    heading: "response-parameters-1",
    content: "Array"
  }, {
    heading: "response-parameters-1",
    content: "The information on the projects. This Array consists of multiple Objects. Each Object shows the information on one project and includes the following fields:- `id`: String. The project ID.\n- `name`: String. The project name.\n- `vendor_key`: String. The App ID of the project.\n- `sign_key`: String. The primary App Certificate of the project.\n- `recording_server`: String. The IP of the recording server.\n  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.\n  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.\n- `status`: Number. The status of the project:\n  * `1`: The project is enabled.\n  * `0`: The project is disabled.\n- `created`: Number. The Unix timestamp (in seconds) of when the project is created."
  }, {
    heading: "response-example-1",
    content: "The following is a response example for a successful request:"
  }, {
    heading: "get-all-projects",
    content: "Gets the information on all your Agora projects."
  }, {
    heading: "prototype-2",
    content: "Method: `GET`"
  }, {
    heading: "prototype-2",
    content: "Endpoint: `https://api.agora.io/dev/v1/projects`"
  }, {
    heading: "request-example-2",
    content: "**Request URL**"
  }, {
    heading: "response-parameters-2",
    content: "For details about possible response status codes, see the Response status codes table."
  }, {
    heading: "response-parameters-2",
    content: "If the status code is not `201`, the request fails. See the `message` field in the response body for the reason for this failure."
  }, {
    heading: "response-parameters-2",
    content: "If the status code is `201`, the request succeeds, and the response body includes the following parameters:"
  }, {
    heading: "response-parameters-2",
    content: "Parameter"
  }, {
    heading: "response-parameters-2",
    content: "Type"
  }, {
    heading: "response-parameters-2",
    content: "Description"
  }, {
    heading: "response-parameters-2",
    content: "`projects`"
  }, {
    heading: "response-parameters-2",
    content: "Array"
  }, {
    heading: "response-parameters-2",
    content: "The information on the projects. This Array consists of multiple Objects. Each Object shows the information on one project and includes the following fields:- `id`: String. The project ID.\n- `name`: String. The project name.\n- `vendor_key`: String. The App ID of the project.\n- `sign_key`: String. The primary App Certificate of the project.\n- `recording_server`: String. The IP of the recording server.\n  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.\n  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.\n- `status`: Number. The status of the project:\n  * `1`: The project is enabled.\n  * `0`: The project is disabled.\n  * `created`: Number. The Unix timestamp (in seconds) of when the project is created."
  }, {
    heading: "response-example-2",
    content: "The following is a response example for a successful request:"
  }, {
    heading: "disable-or-enable-a-project",
    content: "Disables or enables a specified Agora project."
  }, {
    heading: "prototype-3",
    content: "Method: `POST`"
  }, {
    heading: "prototype-3",
    content: "Endpoint: `https://api.agora.io/dev/v1/project_status`"
  }, {
    heading: "request-parameters-2",
    content: "**Request body parameters**"
  }, {
    heading: "request-parameters-2",
    content: "Pass in the following parameters in the request body:"
  }, {
    heading: "request-parameters-2",
    content: "Parameter"
  }, {
    heading: "request-parameters-2",
    content: "Type"
  }, {
    heading: "request-parameters-2",
    content: "Description"
  }, {
    heading: "request-parameters-2",
    content: "`id`"
  }, {
    heading: "request-parameters-2",
    content: "String"
  }, {
    heading: "request-parameters-2",
    content: "(Required) The project ID, which can be obtained by calling the Get all projects API."
  }, {
    heading: "request-parameters-2",
    content: "`status`"
  }, {
    heading: "request-parameters-2",
    content: "Number"
  }, {
    heading: "request-parameters-2",
    content: "(Required) Whether to enable or disable the project:- `0`: Disable the project.\n- `1`: Enable the project."
  }, {
    heading: "request-example-3",
    content: "**Request body**"
  }, {
    heading: "response-parameters-3",
    content: "For details about possible response status codes, see the Response status codes table."
  }, {
    heading: "response-parameters-3",
    content: "If the status code is not `201`, the request fails. See the `message` field in the response body for the reason for this failure."
  }, {
    heading: "response-parameters-3",
    content: "If the status code is `201`, the request succeeds, and the response body includes the following parameters:"
  }, {
    heading: "response-parameters-3",
    content: "Parameter"
  }, {
    heading: "response-parameters-3",
    content: "Type"
  }, {
    heading: "response-parameters-3",
    content: "Description"
  }, {
    heading: "response-parameters-3",
    content: "`project`"
  }, {
    heading: "response-parameters-3",
    content: "Object"
  }, {
    heading: "response-parameters-3",
    content: "The information on the project, including the following fields:- `id`: String. The project ID.\n- `name`: String. The project name.\n- `vendor_key`: String. The App ID of the project.\n- `sign_key`: String. The primary app certificate of the project.\n- `recording_server`: String. The IP address of the recording server.\n  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.\n  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.\n- `status`: Number. The status of the project:\n  * `1`: The project is enabled.\n  * `0`: The project is disabled.\n- `created`: Number. The Unix timestamp (in seconds) of when the project is created."
  }, {
    heading: "response-example-3",
    content: "The following is a response example for a successful request:"
  }, {
    heading: "set-the-ip-address-of-the-recording-server",
    content: "Sets the IP of the recording server for a specified project."
  }, {
    heading: "prototype-4",
    content: "Method: `POST`"
  }, {
    heading: "prototype-4",
    content: "Endpoint: `https://api.agora.io/dev/v1/recording_config`"
  }, {
    heading: "request-parameters-3",
    content: "**Request body parameters**"
  }, {
    heading: "request-parameters-3",
    content: "Pass in the following parameters in the request body:"
  }, {
    heading: "request-parameters-3",
    content: "Parameter"
  }, {
    heading: "request-parameters-3",
    content: "Type"
  }, {
    heading: "request-parameters-3",
    content: "Description"
  }, {
    heading: "request-parameters-3",
    content: "`id`"
  }, {
    heading: "request-parameters-3",
    content: "String"
  }, {
    heading: "request-parameters-3",
    content: "(Required) The project ID, which can be obtained by calling the Get all projects API."
  }, {
    heading: "request-parameters-3",
    content: "`recording_server`"
  }, {
    heading: "request-parameters-3",
    content: "String"
  }, {
    heading: "request-parameters-3",
    content: "(Required) The IP address of the recording server. This field takes effect only when you use v1.9.0 or earlier versions of Agora On-Premise Recording SDK."
  }, {
    heading: "request-example-4",
    content: "**Request body**"
  }, {
    heading: "response-parameters-4",
    content: "For details about possible response status codes, see the Response status codes table."
  }, {
    heading: "response-parameters-4",
    content: "If the status code is not `201`, the request fails. See the `message` field in the response body for the reason for this failure."
  }, {
    heading: "response-parameters-4",
    content: "If the status code is `201`, the request succeeds, and the response body includes the following parameters:"
  }, {
    heading: "response-parameters-4",
    content: "Parameter"
  }, {
    heading: "response-parameters-4",
    content: "Type"
  }, {
    heading: "response-parameters-4",
    content: "Description"
  }, {
    heading: "response-parameters-4",
    content: "`project`"
  }, {
    heading: "response-parameters-4",
    content: "Object"
  }, {
    heading: "response-parameters-4",
    content: "The information on the project, including the following fields:- `id`: String. The project ID.\n- `name`: String. The project name.\n- `vendor_key`: String. The App ID of the project.\n- `sign_key`: String. The primary app certificate of the project.\n- `recording_server`: String. The IP address of the recording server.\n  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.\n  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.\n- `status`: Number. The status of the project:\n  * `1`: The project is enabled.\n  * `0`: The project is disabled.\n- `created`: Number. The Unix timestamp (in seconds) of when the project is created."
  }, {
    heading: "response-example-4",
    content: "The following is a response example for a successful request:"
  }, {
    heading: "enable-or-disable-the-primary-app-certificate",
    content: "Enables or disables the primary app certificate for a specified project."
  }, {
    heading: "prototype-5",
    content: "Method: `POST`"
  }, {
    heading: "prototype-5",
    content: "Endpoint: `https://api.agora.io/dev/v1/signkey`"
  }, {
    heading: "request-parameters-4",
    content: "**Request body parameters**"
  }, {
    heading: "request-parameters-4",
    content: "The following parameters are required in the request body:"
  }, {
    heading: "request-parameters-4",
    content: "Parameter"
  }, {
    heading: "request-parameters-4",
    content: "Type"
  }, {
    heading: "request-parameters-4",
    content: "Description"
  }, {
    heading: "request-parameters-4",
    content: "`id`"
  }, {
    heading: "request-parameters-4",
    content: "String"
  }, {
    heading: "request-parameters-4",
    content: "(Required) The project ID, which can be obtained by calling the Get all projects API."
  }, {
    heading: "request-parameters-4",
    content: "`enable`"
  }, {
    heading: "request-parameters-4",
    content: "Boolean"
  }, {
    heading: "request-parameters-4",
    content: `(Required) Whether to enable or disable the primary app certificate for the project:- true: (Default) Enable the primary app certificate.
- false: Do not enable the primary app certificate.`
  }, {
    heading: "request-example-5",
    content: "**Request body**"
  }, {
    heading: "response-parameters-5",
    content: "For details about possible response status codes, see the Response status codes table."
  }, {
    heading: "response-parameters-5",
    content: "If the status code is not `201`, the request fails. See the `message` field in the response body for the reason for this failure."
  }, {
    heading: "response-parameters-5",
    content: "If the status code is `201`, the request succeeds, and the response body includes the following parameters:"
  }, {
    heading: "response-parameters-5",
    content: "Parameter"
  }, {
    heading: "response-parameters-5",
    content: "Type"
  }, {
    heading: "response-parameters-5",
    content: "Description"
  }, {
    heading: "response-parameters-5",
    content: "`project`"
  }, {
    heading: "response-parameters-5",
    content: "Object"
  }, {
    heading: "response-parameters-5",
    content: "The information on the project, including the following fields:- `id`: String. The project ID.\n- `name`: String. The project name.\n- `vendor_key`: String. The App ID of the project.\n- `sign_key`: String. The primary app certificate of the project.\n- `recording_server`: String. The IP address of the recording server.\n  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.\n  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.\n- `status`: Number. The status of the project:\n  * `1`: The project is enabled.\n  * `0`: The project is disabled.\n- `created`: Number. The Unix timestamp (in seconds) of when the project is created."
  }, {
    heading: "response-example-5",
    content: "The following is a response example for a successful request:"
  }, {
    heading: "reset-the-primary-app-certificate",
    content: "Resets the primary app certificate for a specified project."
  }, {
    heading: "prototype-6",
    content: "Method: `POST`"
  }, {
    heading: "prototype-6",
    content: "Endpoint: `https://api.agora.io/dev/v1/reset_signkey`"
  }, {
    heading: "request-parameter",
    content: "**Request body parameter**"
  }, {
    heading: "request-parameter",
    content: "Pass in the following parameter in the request body:"
  }, {
    heading: "request-parameter",
    content: "Parameter"
  }, {
    heading: "request-parameter",
    content: "Type"
  }, {
    heading: "request-parameter",
    content: "Description"
  }, {
    heading: "request-parameter",
    content: "`id`"
  }, {
    heading: "request-parameter",
    content: "String"
  }, {
    heading: "request-parameter",
    content: "(Required) The project ID, which can be obtained by calling the Get all projects API."
  }, {
    heading: "request-example-6",
    content: "**Request body**"
  }, {
    heading: "response-parameters-6",
    content: "For details about possible response status codes, see the Response status codes table."
  }, {
    heading: "response-parameters-6",
    content: "If the status code is not `201`, the request fails. See the `message` field in the response body for the reason for this failure."
  }, {
    heading: "response-parameters-6",
    content: "If the status code is `201`, the request succeeds, and the response body includes the following parameters:"
  }, {
    heading: "response-parameters-6",
    content: "Parameter"
  }, {
    heading: "response-parameters-6",
    content: "Type"
  }, {
    heading: "response-parameters-6",
    content: "Description"
  }, {
    heading: "response-parameters-6",
    content: "`project`"
  }, {
    heading: "response-parameters-6",
    content: "Object"
  }, {
    heading: "response-parameters-6",
    content: "The information on the project, including the following fields:- `id`: String. The project ID.\n- `name`: String. The project name.\n- `vendor_key`: String. The App ID of the project.\n- `sign_key`: String. The primary app certificate of the project.\n- `recording_server`: String. The IP address of the recording server.\n  * Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK.\n  * Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK.\n- `status`: Number. The status of the project:\n  * `1`: The project is enabled.\n  * `0`: The project is disabled.\n- `created`: Number. The Unix timestamp (in seconds) of when the project is created."
  }, {
    heading: "response-example-6",
    content: "The following is a response example for a successful request:"
  }, {
    heading: "get-project-usage",
    content: "Gets the usage data of a specified project."
  }, {
    heading: "prototype-7",
    content: "Method: `GET`"
  }, {
    heading: "prototype-7",
    content: "Endpoint: `https://api.agora.io/dev/v3/usage`"
  }, {
    heading: "request-parameters-5",
    content: "**Query parameters**"
  }, {
    heading: "request-parameters-5",
    content: "Pass the following query parameters in the request path:"
  }, {
    heading: "request-parameters-5",
    content: "Parameter"
  }, {
    heading: "request-parameters-5",
    content: "Type"
  }, {
    heading: "request-parameters-5",
    content: "Description"
  }, {
    heading: "request-parameters-5",
    content: "`project_id`"
  }, {
    heading: "request-parameters-5",
    content: "String"
  }, {
    heading: "request-parameters-5",
    content: "(Required) The project ID, which can be obtained by calling the Get all projects API."
  }, {
    heading: "request-parameters-5",
    content: "`from_date`"
  }, {
    heading: "request-parameters-5",
    content: "String"
  }, {
    heading: "request-parameters-5",
    content: "(Required) The start date of the query, UTC time. For example, 2020-01-01."
  }, {
    heading: "request-parameters-5",
    content: "`to_date`"
  }, {
    heading: "request-parameters-5",
    content: "String"
  }, {
    heading: "request-parameters-5",
    content: "(Required) The end date of the query, UTC time. For example, 2020-01-31."
  }, {
    heading: "request-parameters-5",
    content: "`business`"
  }, {
    heading: "request-parameters-5",
    content: "String"
  }, {
    heading: "request-parameters-5",
    content: "(Required) The business type. You can choose one of the following values:- `default`: Audio and video. The usage on Miniapp is not included.\n- `transcodeDuration`: Transcoding.\n- `recording`: On-premise recording.\n- `cloudRecording`: Cloud recording.\n- `miniapp`: Miniapp."
  }, {
    heading: "request-example-7",
    content: "**Request path**"
  }, {
    heading: "response-parameters-7",
    content: "For details about possible response status codes, see the Response status codes table."
  }, {
    heading: "response-parameters-7",
    content: "If the status code is not `200`, the request fails. See the `message` field in the response body for the reason for this failure."
  }, {
    heading: "response-parameters-7",
    content: "If the status code is `200`, the request succeeds, and the response body includes the following parameters:"
  }, {
    heading: "response-parameters-7",
    content: "Parameter"
  }, {
    heading: "response-parameters-7",
    content: "Type"
  }, {
    heading: "response-parameters-7",
    content: "Description"
  }, {
    heading: "response-parameters-7",
    content: "`meta`"
  }, {
    heading: "response-parameters-7",
    content: "Object"
  }, {
    heading: "response-parameters-7",
    content: 'Metadata, which describes the meaning of `durationAudioAll`, `durationVideo1080P`, `durationVideo2K`, `durationVideo4K`, `durationVideoHd` and `durationVideoHdp` in the `usage` parameter.- `durationAudioAll`: Object. Total audio duration.\n  * `en`: String . `durationAudioAll` in English, that is, "Total Audio Duration".\n  * `unit`: String. The unit of audio duration, in seconds.\n- `durationVideo1080P`: Object. Total Full HD video duration.\n  * `en`: String . `durationVideo1080P` in English, that is, "Full HD Video Duration (including Recording)".\n  * `unit`: String . The unit of Full HD video duration, in seconds.\n- `durationVideo2K`: Object. Total duration of 2K video.\n  * `en`: String. `durationVideo2K` in English, that is, "2K Video Duration(including Recording)".\n  * `unit`: String . The unit of 2K video duration, in seconds.\n- `durationVideo4K`: Object. Total duration of 2K+ video.\n  * `en`: String. `durationVideo4K` in English, that is, "2K+ Video Duration(including Recording)".\n  * `unit`: String. The unit of 2K+ video duration, in seconds.\n- `durationVideoHd`: Total duration of HD video.\n  * `en`: String. `durationVideoHd` in English, that is, "HD Video Duration (including On premise Recording)".\n  * `unit`: String. The unit of HD video duration, in seconds.\n- `durationVideoHdp`: Total duration of Hdp video.\n  * `en`: String. `durationVideoHdp` in English, that is, "HDP Video Duration(including Recording)".\n  * `unit`: String. The unit of HDP video duration, in seconds.'
  }, {
    heading: "response-parameters-7",
    content: "`usages`"
  }, {
    heading: "response-parameters-7",
    content: "Array"
  }, {
    heading: "response-parameters-7",
    content: "Usage of the specified project. This array consists of multiple objects. Each object shows the usage of a specific day and includes the following fields:- `date`: Number. The query date, using UTC time and Unix timestamp.\n- `usage`: Object. The usage of the query date.\n- `durationAudioAll`: Number. Total duration of the audio, in seconds.\n- `durationVideo1080P`: Number. Total duration of Full HD video, in seconds.\n- `durationVideo2K`: Number. Total duration of 2K video, in seconds.\n- `durationVideo4K`: Number. Total duration of 2K+ video, in seconds.\n- `durationVideoHd`: Number. Total duration of HD video, in seconds.\n- `durationVideoHdp`: Number. Total duration of HDP video, in seconds."
  }, {
    heading: "response-example-7",
    content: "The following is a response example for a successful request:"
  }, {
    heading: "response-status-codes",
    content: "The following table shows the possible response status codes."
  }, {
    heading: "response-status-codes",
    content: "If the status code is `200` or `201`, the request succeeds."
  }, {
    heading: "response-status-codes",
    content: "If the status code is neither `200` nor `201`, the request fails. See the `message` field in the response body for the reason for this failure."
  }, {
    heading: "response-status-codes",
    content: "Response status code"
  }, {
    heading: "response-status-codes",
    content: "Description"
  }, {
    heading: "response-status-codes",
    content: "200"
  }, {
    heading: "response-status-codes",
    content: "The request is successful."
  }, {
    heading: "response-status-codes",
    content: "201"
  }, {
    heading: "response-status-codes",
    content: "The request has been fulfilled, resulting in the creation of a new resource."
  }, {
    heading: "response-status-codes",
    content: "400"
  }, {
    heading: "response-status-codes",
    content: `Bad request. Possible reasons:- Duplicate project name.
- Vendor is blocked.
- The number of projects exceeds the maximum limit.`
  }, {
    heading: "response-status-codes",
    content: "401"
  }, {
    heading: "response-status-codes",
    content: "Unauthorized (incorrect App ID/Customer Certificate)."
  }, {
    heading: "response-status-codes",
    content: "403"
  }, {
    heading: "response-status-codes",
    content: "Forbidden."
  }, {
    heading: "response-status-codes",
    content: "404"
  }, {
    heading: "response-status-codes",
    content: "The requested resource could not be found."
  }, {
    heading: "response-status-codes",
    content: "415"
  }, {
    heading: "response-status-codes",
    content: "Unsupported media type. Make sure that you set `Content-Type` in `Headers` as `application/json`."
  }, {
    heading: "response-status-codes",
    content: "429"
  }, {
    heading: "response-status-codes",
    content: "Too many requests."
  }, {
    heading: "response-status-codes",
    content: "500"
  }, {
    heading: "response-status-codes",
    content: "Internal error of the Agora RESTful API service."
  }, {
    heading: "ensure-service-reliability",
    content: "This section presents the overall strategy you use to ensure high availability of REST services."
  }, {
    heading: "switch-the-domain-name",
    content: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures. Take the following steps to set up and switch your domain name:"
  }, {
    heading: "switch-the-domain-name",
    content: "Set the primary domain name based on the location of your service server:"
  }, {
    heading: "switch-the-domain-name",
    content: "If the DNS address of the service server is located in a country or region other than mainland China, set the primary domain name to `api.agora.io`."
  }, {
    heading: "switch-the-domain-name",
    content: "If the DNS address of the service server is in mainland China, set the primary domain name to `api.sd-rtn.com`."
  }, {
    heading: "switch-the-domain-name",
    content: "If your attempt to initiate a RESTful API request using the primary domain fails, set up your retry strategy as follows:"
  }, {
    heading: "switch-the-domain-name",
    content: "**Primary domain retry**: Retry using the same primary domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "**Alternate domain retry**:"
  }, {
    heading: "switch-the-domain-name",
    content: "If the current primary domain name is `api.sd-rtn.com`, use `api.agora.io` as the alternate domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "If the current primary domain name is `api.agora.io`, use `api.sd-rtn.com` as the alternate domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "**Adjacent domain retry**: If alternate domain retry fails, retry using the domain name adjacent to the current region."
  }, {
    heading: "switch-the-domain-name",
    content: "For example, suppose your business server is located in Europe. You set the primary domain name to `api.agora.io`, and the business server resolves the primary domain name to Germany. Germany is located in central Europe (`api-eu-central-1.agora.io`). The domain name table shows that the adjacent area is West Europe. Use the `api-eu-west-1.agora.io` or `api-eu-west-1.sd-rtn.com` domain name to retry."
  }, {
    heading: "precautions",
    content: "Take the following precautions when setting up your retry strategy:"
  }, {
    heading: "precautions",
    content: "To avoid exceeding the QPS limit with retry requests, best practice is to use a back-off strategy. For example, wait 1 second before you retry for the first time, wait 3 seconds before retrying the second time, and wait 6 seconds before retrying a third time."
  }, {
    heading: "precautions",
    content: "If the request fails because of a network problem rather than a DNS domain name resolution problem, skip alternate domain retry and proceed to adjacent domain retry."
  }, {
    heading: "precautions",
    content: "Before switching to the region domain name, ensure that the REST services you wish to use, for example, cloud recording or channel management, are deployed in that region."
  }, {
    heading: "domain-name-table",
    content: "The following table shows the primary and region domain names for various regions."
  }, {
    heading: "domain-name-table",
    content: "Primary domain name"
  }, {
    heading: "domain-name-table",
    content: "Region domain name"
  }, {
    heading: "domain-name-table",
    content: "Region"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-us-west-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Western United States"
  }, {
    heading: "domain-name-table",
    content: "`api-us-east-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Eastern United States"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-southeast-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Southeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-northeast-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Northeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-west-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Western Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-central-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Central Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-east-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "East China"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-north-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "North China"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-us-west-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Western United States"
  }, {
    heading: "domain-name-table",
    content: "`api-us-east-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Eastern United States"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-southeast-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Southeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-northeast-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Northeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-west-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Western Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-central-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Central Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-east-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "East China"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-north-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "North China"
  }],
  headings: [{
    id: "basic-information",
    content: "Basic information"
  }, {
    id: "domain",
    content: "Domain"
  }, {
    id: "data-format",
    content: "Data format"
  }, {
    id: "authentication",
    content: "Authentication"
  }, {
    id: "call-frequency-limit",
    content: "Call frequency limit"
  }, {
    id: "create-a-project",
    content: "Create a project"
  }, {
    id: "prototype",
    content: "Prototype"
  }, {
    id: "request-parameters",
    content: "Request parameters"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "response-parameters",
    content: "Response parameters"
  }, {
    id: "response-example",
    content: "Response example"
  }, {
    id: "get-a-specified-project",
    content: "Get a specified project"
  }, {
    id: "prototype-1",
    content: "Prototype"
  }, {
    id: "request-parameters-1",
    content: "Request Parameters"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "response-parameters-1",
    content: "Response parameters"
  }, {
    id: "response-example-1",
    content: "Response example"
  }, {
    id: "get-all-projects",
    content: "Get all projects"
  }, {
    id: "prototype-2",
    content: "Prototype"
  }, {
    id: "request-example-2",
    content: "Request example"
  }, {
    id: "response-parameters-2",
    content: "Response parameters"
  }, {
    id: "response-example-2",
    content: "Response example"
  }, {
    id: "disable-or-enable-a-project",
    content: "Disable or enable a project"
  }, {
    id: "prototype-3",
    content: "Prototype"
  }, {
    id: "request-parameters-2",
    content: "Request parameters"
  }, {
    id: "request-example-3",
    content: "Request example"
  }, {
    id: "response-parameters-3",
    content: "Response parameters"
  }, {
    id: "response-example-3",
    content: "Response example"
  }, {
    id: "set-the-ip-address-of-the-recording-server",
    content: "Set the IP address of the recording server"
  }, {
    id: "prototype-4",
    content: "Prototype"
  }, {
    id: "request-parameters-3",
    content: "Request parameters"
  }, {
    id: "request-example-4",
    content: "Request example"
  }, {
    id: "response-parameters-4",
    content: "Response parameters"
  }, {
    id: "response-example-4",
    content: "Response example"
  }, {
    id: "enable-or-disable-the-primary-app-certificate",
    content: "Enable or disable the primary app certificate"
  }, {
    id: "prototype-5",
    content: "Prototype"
  }, {
    id: "request-parameters-4",
    content: "Request parameters"
  }, {
    id: "request-example-5",
    content: "Request example"
  }, {
    id: "response-parameters-5",
    content: "Response parameters"
  }, {
    id: "response-example-5",
    content: "Response example"
  }, {
    id: "reset-the-primary-app-certificate",
    content: "Reset the primary app certificate"
  }, {
    id: "prototype-6",
    content: "Prototype"
  }, {
    id: "request-parameter",
    content: "Request parameter"
  }, {
    id: "request-example-6",
    content: "Request example"
  }, {
    id: "response-parameters-6",
    content: "Response parameters"
  }, {
    id: "response-example-6",
    content: "Response example"
  }, {
    id: "get-project-usage",
    content: "Get project usage"
  }, {
    id: "prototype-7",
    content: "Prototype"
  }, {
    id: "request-parameters-5",
    content: "Request parameters"
  }, {
    id: "request-example-7",
    content: "Request example"
  }, {
    id: "response-parameters-7",
    content: "Response parameters"
  }, {
    id: "response-example-7",
    content: "Response example"
  }, {
    id: "response-status-codes",
    content: "Response status codes"
  }, {
    id: "ensure-service-reliability",
    content: "Ensure service reliability"
  }, {
    id: "switch-the-domain-name",
    content: "Switch the domain name"
  }, {
    id: "precautions",
    content: "Precautions"
  }, {
    id: "domain-name-table",
    content: "Domain name table"
  }]
};
export let toc = [{
  depth: 2,
  url: "#basic-information",
  title: _jsx(_Fragment, {
    children: "Basic information"
  })
}, {
  depth: 4,
  url: "#domain",
  title: _jsx(_Fragment, {
    children: "Domain"
  })
}, {
  depth: 4,
  url: "#data-format",
  title: _jsx(_Fragment, {
    children: "Data format"
  })
}, {
  depth: 4,
  url: "#authentication",
  title: _jsx(_Fragment, {
    children: "Authentication"
  })
}, {
  depth: 4,
  url: "#call-frequency-limit",
  title: _jsx(_Fragment, {
    children: "Call frequency limit"
  })
}, {
  depth: 2,
  url: "#create-a-project",
  title: _jsx(_Fragment, {
    children: "Create a project"
  })
}, {
  depth: 4,
  url: "#prototype",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 4,
  url: "#request-parameters",
  title: _jsx(_Fragment, {
    children: "Request parameters"
  })
}, {
  depth: 4,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#get-a-specified-project",
  title: _jsx(_Fragment, {
    children: "Get a specified project"
  })
}, {
  depth: 4,
  url: "#prototype-1",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 4,
  url: "#request-parameters-1",
  title: _jsx(_Fragment, {
    children: "Request Parameters"
  })
}, {
  depth: 4,
  url: "#request-example-1",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-1",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-1",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#get-all-projects",
  title: _jsx(_Fragment, {
    children: "Get all projects"
  })
}, {
  depth: 4,
  url: "#prototype-2",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 4,
  url: "#request-example-2",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-2",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-2",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#disable-or-enable-a-project",
  title: _jsx(_Fragment, {
    children: "Disable or enable a project"
  })
}, {
  depth: 4,
  url: "#prototype-3",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 4,
  url: "#request-parameters-2",
  title: _jsx(_Fragment, {
    children: "Request parameters"
  })
}, {
  depth: 4,
  url: "#request-example-3",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-3",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-3",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#set-the-ip-address-of-the-recording-server",
  title: _jsx(_Fragment, {
    children: "Set the IP address of the recording server"
  })
}, {
  depth: 4,
  url: "#prototype-4",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 4,
  url: "#request-parameters-3",
  title: _jsx(_Fragment, {
    children: "Request parameters"
  })
}, {
  depth: 4,
  url: "#request-example-4",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-4",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-4",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#enable-or-disable-the-primary-app-certificate",
  title: _jsx(_Fragment, {
    children: "Enable or disable the primary app certificate"
  })
}, {
  depth: 4,
  url: "#prototype-5",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 4,
  url: "#request-parameters-4",
  title: _jsx(_Fragment, {
    children: "Request parameters"
  })
}, {
  depth: 4,
  url: "#request-example-5",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-5",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-5",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#reset-the-primary-app-certificate",
  title: _jsx(_Fragment, {
    children: "Reset the primary app certificate"
  })
}, {
  depth: 4,
  url: "#prototype-6",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 4,
  url: "#request-parameter",
  title: _jsx(_Fragment, {
    children: "Request parameter"
  })
}, {
  depth: 4,
  url: "#request-example-6",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-6",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-6",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#get-project-usage",
  title: _jsx(_Fragment, {
    children: "Get project usage"
  })
}, {
  depth: 4,
  url: "#prototype-7",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 4,
  url: "#request-parameters-5",
  title: _jsx(_Fragment, {
    children: "Request parameters"
  })
}, {
  depth: 4,
  url: "#request-example-7",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-7",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-7",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#response-status-codes",
  title: _jsx(_Fragment, {
    children: "Response status codes"
  })
}, {
  depth: 2,
  url: "#ensure-service-reliability",
  title: _jsx(_Fragment, {
    children: "Ensure service reliability"
  })
}, {
  depth: 3,
  url: "#switch-the-domain-name",
  title: _jsx(_Fragment, {
    children: "Switch the domain name"
  })
}, {
  depth: 4,
  url: "#precautions",
  title: _jsx(_Fragment, {
    children: "Precautions"
  })
}, {
  depth: 3,
  url: "#domain-name-table",
  title: _jsx(_Fragment, {
    children: "Domain name table"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When you need to ", _jsx(_components.a, {
        href: "#create-a-project",
        children: "create and manage Agora projects"
      }), " or ", _jsx(_components.a, {
        href: "#get-project-usage",
        children: "check usage"
      }), ", besides using the graphic user interface at Agora Console, you can also call the Agora Console RESTful API."]
    }), `
`, _jsx(_components.p, {
      children: "This page provides detailed help for the Agora Console RESTful APIs."
    }), `
`, _jsx(_components.h2, {
      id: "basic-information",
      children: "Basic information"
    }), `
`, _jsx(_components.p, {
      children: "This section provides basic information about the Agora Console RESTful APIs."
    }), `
`, _jsx(_components.h4, {
      id: "domain",
      children: "Domain"
    }), `
`, _jsxs(_components.p, {
      children: ["All requests are sent to the host ", _jsx(_components.code, {
        children: "api.agora.io"
      }), ". See ", _jsx(_components.a, {
        href: "#ensure-service-reliability",
        children: "Ensure service reliability"
      }), " for alternate domain names."]
    }), `
`, _jsx(_components.h4, {
      id: "data-format",
      children: "Data format"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "Content-Type"
      }), " field in all HTTP request headers is ", _jsx(_components.code, {
        children: "application/json"
      }), ". All requests and responses are in JSON format. All request URLs and request bodies are case-sensitive."]
    }), `
`, _jsx(_components.h4, {
      id: "authentication",
      children: "Authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora Console RESTful APIs only support HTTPS. Before sending HTTP requests, you must generate a Base64-encoded credential with the ", _jsx(_components.strong, {
        children: "Customer ID"
      }), " and ", _jsx(_components.strong, {
        children: "Customer Secret"
      }), " provided by Agora, and pass the credential to the ", _jsx(_components.code, {
        children: "Authorization"
      }), " field in the HTTP request header."]
    }), `
`, _jsx(_components.h4, {
      id: "call-frequency-limit",
      children: "Call frequency limit"
    }), `
`, _jsx(_components.p, {
      children: "For each Agora account (not each App ID), the call frequency of each API on this page is no more than 10 queries per second."
    }), `
`, _jsx(_components.h2, {
      id: "create-a-project",
      children: "Create a project"
    }), `
`, _jsx(_components.p, {
      children: "Creates an Agora project."
    }), `
`, _jsx(_components.h4, {
      id: "prototype",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Method: ", _jsx(_components.code, {
            children: "POST"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Endpoint: ", _jsx(_components.code, {
            children: "https://api.agora.io/dev/v1/project"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-parameters",
      children: "Request parameters"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request body parameters"
      })
    }), `
`, _jsx(_components.p, {
      children: "Pass in the following parameters in the request body:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "(Required) The project name, which is between 1 to 255 characters in length."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable_sign_key"
            })
          }), _jsx(_components.td, {
            children: "Boolean"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "(Required) Whether to enable the primary app certificate:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "true: Enable the primary app certificate."
              }), `
`, _jsx(_components.li, {
                children: "false: (Default) Do not enable the primary app certificate."
              }), `
`]
            }), _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Note"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["After creating a project, you can send a request to ", _jsx(_components.code, {
                    children: "https://api.agora.io/dev/v1/signkey"
                  }), " to enable or disable the primary app certificate, or send a request to ", _jsx(_components.code, {
                    children: "https://api.agora.io/dev/v1/reset_signkey"
                  }), " to reset the primary app certificate."]
                })
              })]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example",
      children: "Request example"
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
              children: '  "name"'
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
              children: '"project1"'
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
              children: '  "enable_sign_key"'
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
`, _jsx(_components.h4, {
      id: "response-parameters",
      children: "Response parameters"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about possible response status codes, see the ", _jsx(_components.a, {
        href: "#response-status-codes",
        children: "Response status codes"
      }), " table."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "201"
      }), ", the request succeeds, and the response body includes the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "project"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The information on the project, including the following fields:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String. The project ID"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "name"
                }), ": String. The project name."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "vendor_key"
                }), ": String. The App ID of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "sign_key"
                }), ": String. The primary app certificate of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "recording_server"
                }), ": String. The IP address of the recording server.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK."
                  }), `
`, _jsx(_components.li, {
                    children: "Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "status"
                }), ": Number. The status of the project:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "1"
                    }), ": The project is enabled."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "0"
                    }), ": The project is disabled."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "created"
                }), ": Number. The Unix timestamp (in seconds) of when the project is created."]
              }), `
`]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for a successful request:"
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
              children: '  "project"'
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
              children: '    "id"'
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
              children: '"xxxx"'
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
              children: '"project1"'
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
              children: '    "vendor_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "sign_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "recording_server"'
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
              children: "null"
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
              children: '    "created"'
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
              children: "1464165672"
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
`, _jsx(_components.h2, {
      id: "get-a-specified-project",
      children: "Get a specified project"
    }), `
`, _jsx(_components.p, {
      children: "Gets the information on a specified project."
    }), `
`, _jsx(_components.h4, {
      id: "prototype-1",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Method: ", _jsx(_components.code, {
            children: "GET"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Endpoint: ", _jsx(_components.code, {
            children: "https://api.agora.io/dev/v1/project"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-parameters-1",
      children: "Request Parameters"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Query parameters"
      })
    }), `
`, _jsx(_components.p, {
      children: "Pass in the following query parameters in the request URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["(Required) The project ID, which can be obtained by calling the ", _jsx(_components.a, {
              href: "#get-all-projects",
              children: "Get all projects"
            }), " API."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "(Required) The project name."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-1",
      children: "Request example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request URL"
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
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "`https://api.agora.io/dev/v1/project?id=7sdnf3xRH&name=project1`"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-1",
      children: "Response parameters"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about possible response status codes, see the ", _jsx(_components.a, {
        href: "#response-status-codes",
        children: "Response status codes"
      }), " table."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "201"
      }), ", the request succeeds, and the response body includes the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "projects"
            })
          }), _jsx(_components.td, {
            children: "Array"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The information on the projects. This Array consists of multiple Objects. Each Object shows the information on one project and includes the following fields:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String. The project ID."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "name"
                }), ": String. The project name."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "vendor_key"
                }), ": String. The App ID of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "sign_key"
                }), ": String. The primary App Certificate of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "recording_server"
                }), ": String. The IP of the recording server.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK."
                  }), `
`, _jsx(_components.li, {
                    children: "Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "status"
                }), ": Number. The status of the project:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "1"
                    }), ": The project is enabled."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "0"
                    }), ": The project is disabled."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "created"
                }), ": Number. The Unix timestamp (in seconds) of when the project is created."]
              }), `
`]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-1",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for a successful request:"
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
              children: '  "projects"'
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
              children: '      "id"'
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
              children: '"xxxx"'
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
              children: '      "name"'
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
              children: '"project1"'
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
              children: '      "sign_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '      "vendor_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '      "recording_server"'
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
              children: "null"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
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
              children: '      "created"'
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
              children: "1464165672"
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
`, _jsx(_components.h2, {
      id: "get-all-projects",
      children: "Get all projects"
    }), `
`, _jsx(_components.p, {
      children: "Gets the information on all your Agora projects."
    }), `
`, _jsx(_components.h4, {
      id: "prototype-2",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Method: ", _jsx(_components.code, {
            children: "GET"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Endpoint: ", _jsx(_components.code, {
            children: "https://api.agora.io/dev/v1/projects"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-2",
      children: "Request example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request URL"
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
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "`https://api.agora.io/dev/v1/projects`"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-2",
      children: "Response parameters"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about possible response status codes, see the ", _jsx(_components.a, {
        href: "#response-status-codes",
        children: "Response status codes"
      }), " table."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "201"
      }), ", the request succeeds, and the response body includes the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "projects"
            })
          }), _jsx(_components.td, {
            children: "Array"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The information on the projects. This Array consists of multiple Objects. Each Object shows the information on one project and includes the following fields:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String. The project ID."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "name"
                }), ": String. The project name."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "vendor_key"
                }), ": String. The App ID of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "sign_key"
                }), ": String. The primary App Certificate of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "recording_server"
                }), ": String. The IP of the recording server.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK."
                  }), `
`, _jsx(_components.li, {
                    children: "Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "status"
                }), ": Number. The status of the project:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "1"
                    }), ": The project is enabled."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "0"
                    }), ": The project is disabled."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "created"
                    }), ": Number. The Unix timestamp (in seconds) of when the project is created."]
                  }), `
`]
                }), `
`]
              }), `
`]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-2",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for a successful request:"
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
              children: '  "projects"'
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
              children: '      "id"'
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
              children: '"xxxx"'
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
              children: '      "name"'
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
              children: '"project1"'
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
              children: '      "sign_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '      "vendor_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '      "recording_server"'
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
              children: "null"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
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
              children: '      "created"'
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
              children: "1464165672"
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
              children: '      "id"'
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
              children: '"xxxx"'
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
              children: '      "name"'
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
              children: '"project1"'
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
              children: '      "sign_key"'
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
              children: '"2c01da6d6f6741df88ec47005f08572b"'
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
              children: '      "vendor_key"'
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
              children: '"eb00cd2b222a4eeaa24fc6046d90b227"'
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
              children: '      "recording_server"'
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
              children: "null"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
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
              children: '      "created"'
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
              children: "1637153755"
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
`, _jsx(_components.h2, {
      id: "disable-or-enable-a-project",
      children: "Disable or enable a project"
    }), `
`, _jsx(_components.p, {
      children: "Disables or enables a specified Agora project."
    }), `
`, _jsx(_components.h4, {
      id: "prototype-3",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Method: ", _jsx(_components.code, {
            children: "POST"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Endpoint: ", _jsx(_components.code, {
            children: "https://api.agora.io/dev/v1/project_status"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-parameters-2",
      children: "Request parameters"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request body parameters"
      })
    }), `
`, _jsx(_components.p, {
      children: "Pass in the following parameters in the request body:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["(Required) The project ID, which can be obtained by calling the ", _jsx(_components.a, {
              href: "#get-all-projects",
              children: "Get all projects"
            }), " API."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "(Required) Whether to enable or disable the project:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Disable the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Enable the project."]
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-3",
      children: "Request example"
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
              children: '  "id"'
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
              children: '"xxxx"'
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
`, _jsx(_components.h4, {
      id: "response-parameters-3",
      children: "Response parameters"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about possible response status codes, see the ", _jsx(_components.a, {
        href: "#response-status-codes",
        children: "Response status codes"
      }), " table."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "201"
      }), ", the request succeeds, and the response body includes the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "project"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The information on the project, including the following fields:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String. The project ID."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "name"
                }), ": String. The project name."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "vendor_key"
                }), ": String. The App ID of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "sign_key"
                }), ": String. The primary app certificate of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "recording_server"
                }), ": String. The IP address of the recording server.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK."
                  }), `
`, _jsx(_components.li, {
                    children: "Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "status"
                }), ": Number. The status of the project:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "1"
                    }), ": The project is enabled."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "0"
                    }), ": The project is disabled."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "created"
                }), ": Number. The Unix timestamp (in seconds) of when the project is created."]
              }), `
`]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-3",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for a successful request:"
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
              children: '  "project"'
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
              children: '    "id"'
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
              children: '"xxxx"'
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
              children: '"project1"'
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
              children: '    "vendor_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "sign_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "recording_server"'
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
              children: "null"
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
              children: '    "created"'
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
              children: "1464165672"
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
`, _jsx(_components.h2, {
      id: "set-the-ip-address-of-the-recording-server",
      children: "Set the IP address of the recording server"
    }), `
`, _jsx(_components.p, {
      children: "Sets the IP of the recording server for a specified project."
    }), `
`, _jsx(_components.h4, {
      id: "prototype-4",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Method: ", _jsx(_components.code, {
            children: "POST"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Endpoint: ", _jsx(_components.code, {
            children: "https://api.agora.io/dev/v1/recording_config"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-parameters-3",
      children: "Request parameters"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request body parameters"
      })
    }), `
`, _jsx(_components.p, {
      children: "Pass in the following parameters in the request body:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["(Required) The project ID, which can be obtained by calling the ", _jsx(_components.a, {
              href: "#get-all-projects",
              children: "Get all projects"
            }), " API."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "recording_server"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "(Required) The IP address of the recording server. This field takes effect only when you use v1.9.0 or earlier versions of Agora On-Premise Recording SDK."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-4",
      children: "Request example"
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
              children: '  "id"'
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
              children: '"xxxx"'
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
              children: '  "recording_server"'
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
              children: '"10.12.1.5:8080"'
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
`, _jsx(_components.h4, {
      id: "response-parameters-4",
      children: "Response parameters"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about possible response status codes, see the ", _jsx(_components.a, {
        href: "#response-status-codes",
        children: "Response status codes"
      }), " table."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "201"
      }), ", the request succeeds, and the response body includes the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "project"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The information on the project, including the following fields:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String. The project ID."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "name"
                }), ": String. The project name."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "vendor_key"
                }), ": String. The App ID of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "sign_key"
                }), ": String. The primary app certificate of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "recording_server"
                }), ": String. The IP address of the recording server.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK."
                  }), `
`, _jsx(_components.li, {
                    children: "Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "status"
                }), ": Number. The status of the project:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "1"
                    }), ": The project is enabled."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "0"
                    }), ": The project is disabled."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "created"
                }), ": Number. The Unix timestamp (in seconds) of when the project is created."]
              }), `
`]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-4",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for a successful request:"
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
              children: '  "project"'
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
              children: '    "id"'
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
              children: '"xxxx"'
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
              children: '"project1"'
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
              children: '    "vendor_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "sign_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "recording_server"'
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
              children: "null"
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
              children: '    "created"'
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
              children: "1464165672"
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
`, _jsx(_components.h2, {
      id: "enable-or-disable-the-primary-app-certificate",
      children: "Enable or disable the primary app certificate"
    }), `
`, _jsx(_components.p, {
      children: "Enables or disables the primary app certificate for a specified project."
    }), `
`, _jsx(_components.h4, {
      id: "prototype-5",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Method: ", _jsx(_components.code, {
            children: "POST"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Endpoint: ", _jsx(_components.code, {
            children: "https://api.agora.io/dev/v1/signkey"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-parameters-4",
      children: "Request parameters"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request body parameters"
      })
    }), `
`, _jsx(_components.p, {
      children: "The following parameters are required in the request body:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["(Required) The project ID, which can be obtained by calling the ", _jsx(_components.a, {
              href: "#get-all-projects",
              children: "Get all projects"
            }), " API."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            children: "Boolean"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "(Required) Whether to enable or disable the primary app certificate for the project:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "true: (Default) Enable the primary app certificate."
              }), `
`, _jsx(_components.li, {
                children: "false: Do not enable the primary app certificate."
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-5",
      children: "Request example"
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
              children: '  "id"'
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
              children: '"xxxx"'
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
              children: '  "enable"'
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
`, _jsx(_components.h4, {
      id: "response-parameters-5",
      children: "Response parameters"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about possible response status codes, see the ", _jsx(_components.a, {
        href: "#response-status-codes",
        children: "Response status codes"
      }), " table."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "201"
      }), ", the request succeeds, and the response body includes the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "project"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The information on the project, including the following fields:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String. The project ID."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "name"
                }), ": String. The project name."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "vendor_key"
                }), ": String. The App ID of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "sign_key"
                }), ": String. The primary app certificate of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "recording_server"
                }), ": String. The IP address of the recording server.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK."
                  }), `
`, _jsx(_components.li, {
                    children: "Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "status"
                }), ": Number. The status of the project:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "1"
                    }), ": The project is enabled."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "0"
                    }), ": The project is disabled."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "created"
                }), ": Number. The Unix timestamp (in seconds) of when the project is created."]
              }), `
`]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-5",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for a successful request:"
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
              children: '  "project"'
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
              children: '    "id"'
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
              children: '"xxxx"'
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
              children: '"project1"'
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
              children: '    "vendor_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "sign_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "recording_server"'
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
              children: "null"
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
              children: '    "created"'
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
              children: "1464165672"
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
`, _jsx(_components.h2, {
      id: "reset-the-primary-app-certificate",
      children: "Reset the primary app certificate"
    }), `
`, _jsx(_components.p, {
      children: "Resets the primary app certificate for a specified project."
    }), `
`, _jsx(_components.h4, {
      id: "prototype-6",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Method: ", _jsx(_components.code, {
            children: "POST"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Endpoint: ", _jsx(_components.code, {
            children: "https://api.agora.io/dev/v1/reset_signkey"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-parameter",
      children: "Request parameter"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request body parameter"
      })
    }), `
`, _jsx(_components.p, {
      children: "Pass in the following parameter in the request body:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["(Required) The project ID, which can be obtained by calling the ", _jsx(_components.a, {
              href: "#get-all-projects",
              children: "Get all projects"
            }), " API."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-6",
      children: "Request example"
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
              children: '  "id"'
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
              children: '"xxxx"'
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
`, _jsx(_components.h4, {
      id: "response-parameters-6",
      children: "Response parameters"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about possible response status codes, see the ", _jsx(_components.a, {
        href: "#response-status-codes",
        children: "Response status codes"
      }), " table."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "201"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "201"
      }), ", the request succeeds, and the response body includes the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "project"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The information on the project, including the following fields:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String. The project ID."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "name"
                }), ": String. The project name."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "vendor_key"
                }), ": String. The App ID of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "sign_key"
                }), ": String. The primary app certificate of the project."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "recording_server"
                }), ": String. The IP address of the recording server.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Pay attention to this field if you use v1.9.0 and earlier versions of the Agora On-Premise Recording SDK."
                  }), `
`, _jsx(_components.li, {
                    children: "Ignore this field if you use v1.11.0 and later versions of the Agora On-Premise Recording SDK."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "status"
                }), ": Number. The status of the project:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "1"
                    }), ": The project is enabled."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "0"
                    }), ": The project is disabled."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "created"
                }), ": Number. The Unix timestamp (in seconds) of when the project is created."]
              }), `
`]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-6",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for a successful request:"
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
              children: '  "project"'
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
              children: '    "id"'
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
              children: '"xxxx"'
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
              children: '"project1"'
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
              children: '    "vendor_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "sign_key"'
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
              children: '"4855xxxxxxxxxxxxxxxxxxxxxxxxeae2"'
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
              children: '    "recording_server"'
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
              children: "null"
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
              children: '    "created"'
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
              children: "1464165672"
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
`, _jsx(_components.h2, {
      id: "get-project-usage",
      children: "Get project usage"
    }), `
`, _jsx(_components.p, {
      children: "Gets the usage data of a specified project."
    }), `
`, _jsx(_components.h4, {
      id: "prototype-7",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Method: ", _jsx(_components.code, {
            children: "GET"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Endpoint: ", _jsx(_components.code, {
            children: "https://api.agora.io/dev/v3/usage"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-parameters-5",
      children: "Request parameters"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Query parameters"
      })
    }), `
`, _jsx(_components.p, {
      children: "Pass the following query parameters in the request path:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "project_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["(Required) The project ID, which can be obtained by calling the ", _jsx(_components.a, {
              href: "#get-all-projects",
              children: "Get all projects"
            }), " API."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "from_date"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "(Required) The start date of the query, UTC time. For example, 2020-01-01."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "to_date"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "(Required) The end date of the query, UTC time. For example, 2020-01-31."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "business"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "(Required) The business type. You can choose one of the following values:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "default"
                }), ": Audio and video. The usage on Miniapp is not included."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "transcodeDuration"
                }), ": Transcoding."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "recording"
                }), ": On-premise recording."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "cloudRecording"
                }), ": Cloud recording."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "miniapp"
                }), ": Miniapp."]
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-7",
      children: "Request example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request path"
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
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "`https://api.agora.io/dev/v3/usage?project_id=rxxxxxxj5u&from_date=2021-10-12&to_date=2021-12-14&business=default`"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-7",
      children: "Response parameters"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about possible response status codes, see the ", _jsx(_components.a, {
        href: "#response-status-codes",
        children: "Response status codes"
      }), " table."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request succeeds, and the response body includes the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "meta"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: [_jsxs(_components.p, {
              children: ["Metadata, which describes the meaning of ", _jsx(_components.code, {
                children: "durationAudioAll"
              }), ", ", _jsx(_components.code, {
                children: "durationVideo1080P"
              }), ", ", _jsx(_components.code, {
                children: "durationVideo2K"
              }), ", ", _jsx(_components.code, {
                children: "durationVideo4K"
              }), ", ", _jsx(_components.code, {
                children: "durationVideoHd"
              }), " and ", _jsx(_components.code, {
                children: "durationVideoHdp"
              }), " in the ", _jsx(_components.code, {
                children: "usage"
              }), " parameter."]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationAudioAll"
                }), ": Object. Total audio duration.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "en"
                    }), ": String . ", _jsx(_components.code, {
                      children: "durationAudioAll"
                    }), ' in English, that is, "Total Audio Duration".']
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "unit"
                    }), ": String. The unit of audio duration, in seconds."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideo1080P"
                }), ": Object. Total Full HD video duration.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "en"
                    }), ": String . ", _jsx(_components.code, {
                      children: "durationVideo1080P"
                    }), ' in English, that is, "Full HD Video Duration (including Recording)".']
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "unit"
                    }), ": String . The unit of Full HD video duration, in seconds."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideo2K"
                }), ": Object. Total duration of 2K video.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "en"
                    }), ": String. ", _jsx(_components.code, {
                      children: "durationVideo2K"
                    }), ' in English, that is, "2K Video Duration(including Recording)".']
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "unit"
                    }), ": String . The unit of 2K video duration, in seconds."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideo4K"
                }), ": Object. Total duration of 2K+ video.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "en"
                    }), ": String. ", _jsx(_components.code, {
                      children: "durationVideo4K"
                    }), ' in English, that is, "2K+ Video Duration(including Recording)".']
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "unit"
                    }), ": String. The unit of 2K+ video duration, in seconds."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideoHd"
                }), ": Total duration of HD video.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "en"
                    }), ": String. ", _jsx(_components.code, {
                      children: "durationVideoHd"
                    }), ' in English, that is, "HD Video Duration (including On premise Recording)".']
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "unit"
                    }), ": String. The unit of HD video duration, in seconds."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideoHdp"
                }), ": Total duration of Hdp video.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "en"
                    }), ": String. ", _jsx(_components.code, {
                      children: "durationVideoHdp"
                    }), ' in English, that is, "HDP Video Duration(including Recording)".']
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "unit"
                    }), ": String. The unit of HDP video duration, in seconds."]
                  }), `
`]
                }), `
`]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "usages"
            })
          }), _jsx(_components.td, {
            children: "Array"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Usage of the specified project. This array consists of multiple objects. Each object shows the usage of a specific day and includes the following fields:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "date"
                }), ": Number. The query date, using UTC time and Unix timestamp."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "usage"
                }), ": Object. The usage of the query date."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationAudioAll"
                }), ": Number. Total duration of the audio, in seconds."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideo1080P"
                }), ": Number. Total duration of Full HD video, in seconds."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideo2K"
                }), ": Number. Total duration of 2K video, in seconds."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideo4K"
                }), ": Number. Total duration of 2K+ video, in seconds."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideoHd"
                }), ": Number. Total duration of HD video, in seconds."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "durationVideoHdp"
                }), ": Number. Total duration of HDP video, in seconds."]
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-7",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for a successful request:"
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
              children: '  "meta"'
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
              children: '    "durationAudioAll"'
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
              children: '      "en"'
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
              children: '"Total Audio Duration"'
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
              children: '      "unit"'
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
              children: '"second"'
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
              children: '    "durationVideo1080P"'
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
              children: '      "en"'
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
              children: '"Full HD Video Duration(including Recording)"'
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
              children: '      "unit"'
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
              children: '"second"'
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
              children: '    "durationVideo2K"'
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
              children: '      "en"'
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
              children: '"2K Video Duration(including Recording)"'
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
              children: '      "unit"'
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
              children: '"second"'
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
              children: '    "durationVideo4K"'
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
              children: '      "en"'
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
              children: '"4K Video Duration(including Recording)"'
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
              children: '      "unit"'
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
              children: '"second"'
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
              children: '    "durationVideoHd"'
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
              children: '      "en"'
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
              children: '"HD Video Duration(including Recording)"'
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
              children: '      "unit"'
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
              children: '"second"'
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
              children: '    "durationVideoHdp"'
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
              children: '      "en"'
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
              children: '"HDP Video Duration(including Recording)"'
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
              children: '      "unit"'
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
              children: '"second"'
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
              children: '  "usages"'
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
              children: '      "date"'
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
              children: '"2021-10-12T00:00:00.000Z"'
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
              children: '      "usage"'
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
              children: '        "durationAudioAll"'
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
              children: '        "durationVideo1080P"'
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
              children: '        "durationVideo2K"'
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
              children: '        "durationVideo4K"'
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
              children: '        "durationVideoHd"'
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
              children: '        "durationVideoHdp"'
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
              children: "      }"
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
              children: '      "date"'
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
              children: '"2021-10-13T00:00:00.000Z"'
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
              children: '      "usage"'
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
              children: '        "durationAudioAll"'
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
              children: "779"
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
              children: '        "durationVideo1080P"'
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
              children: '        "durationVideo2K"'
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
              children: '        "durationVideo4K"'
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
              children: '        "durationVideoHd"'
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
              children: "60"
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
              children: '        "durationVideoHdp"'
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
              children: "      }"
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
              children: '      "date"'
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
              children: '"2021-10-14T00:00:00.000Z"'
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
              children: '      "usage"'
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
              children: '        "durationAudioAll"'
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
              children: '        "durationVideo1080P"'
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
              children: '        "durationVideo2K"'
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
              children: '        "durationVideo4K"'
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
              children: '        "durationVideoHd"'
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
              children: '        "durationVideoHdp"'
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
              children: "      }"
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
`, _jsx(_components.h2, {
      id: "response-status-codes",
      children: "Response status codes"
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the possible response status codes."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the status code is ", _jsx(_components.code, {
            children: "200"
          }), " or ", _jsx(_components.code, {
            children: "201"
          }), ", the request succeeds."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the status code is neither ", _jsx(_components.code, {
            children: "200"
          }), " nor ", _jsx(_components.code, {
            children: "201"
          }), ", the request fails. See the ", _jsx(_components.code, {
            children: "message"
          }), " field in the response body for the reason for this failure."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Response status code"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "200"
          }), _jsx(_components.td, {
            children: "The request is successful."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "201"
          }), _jsx(_components.td, {
            children: "The request has been fulfilled, resulting in the creation of a new resource."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "400"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Bad request. Possible reasons:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Duplicate project name."
              }), `
`, _jsx(_components.li, {
                children: "Vendor is blocked."
              }), `
`, _jsx(_components.li, {
                children: "The number of projects exceeds the maximum limit."
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "401"
          }), _jsx(_components.td, {
            children: "Unauthorized (incorrect App ID/Customer Certificate)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "403"
          }), _jsx(_components.td, {
            children: "Forbidden."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "404"
          }), _jsx(_components.td, {
            children: "The requested resource could not be found."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "415"
          }), _jsxs(_components.td, {
            children: ["Unsupported media type. Make sure that you set ", _jsx(_components.code, {
              children: "Content-Type"
            }), " in ", _jsx(_components.code, {
              children: "Headers"
            }), " as ", _jsx(_components.code, {
              children: "application/json"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "429"
          }), _jsx(_components.td, {
            children: "Too many requests."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "500"
          }), _jsx(_components.td, {
            children: "Internal error of the Agora RESTful API service."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "ensure-service-reliability",
      children: "Ensure service reliability"
    }), `
`, _jsx(_components.p, {
      children: "This section presents the overall strategy you use to ensure high availability of REST services."
    }), `
`, _jsx(_components.h3, {
      id: "switch-the-domain-name",
      children: "Switch the domain name"
    }), `
`, _jsx(_components.p, {
      children: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures. Take the following steps to set up and switch your domain name:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set the primary domain name based on the location of your service server:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the DNS address of the service server is located in a country or region other than mainland China, set the primary domain name to ", _jsx(_components.code, {
              children: "api.agora.io"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the DNS address of the service server is in mainland China, set the primary domain name to ", _jsx(_components.code, {
              children: "api.sd-rtn.com"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If your attempt to initiate a RESTful API request using the primary domain fails, set up your retry strategy as follows:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Primary domain retry"
              }), ": Retry using the same primary domain name."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Alternate domain retry"
              }), ":"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If the current primary domain name is ", _jsx(_components.code, {
                  children: "api.sd-rtn.com"
                }), ", use ", _jsx(_components.code, {
                  children: "api.agora.io"
                }), " as the alternate domain name."]
              }), `
`, _jsxs(_components.li, {
                children: ["If the current primary domain name is ", _jsx(_components.code, {
                  children: "api.agora.io"
                }), ", use ", _jsx(_components.code, {
                  children: "api.sd-rtn.com"
                }), " as the alternate domain name."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Adjacent domain retry"
              }), ": If alternate domain retry fails, retry using the domain name adjacent to the current region."]
            }), `
`, _jsxs(_components.p, {
              children: ["For example, suppose your business server is located in Europe. You set the primary domain name to ", _jsx(_components.code, {
                children: "api.agora.io"
              }), ", and the business server resolves the primary domain name to Germany. Germany is located in central Europe (", _jsx(_components.code, {
                children: "api-eu-central-1.agora.io"
              }), "). The ", _jsx(_components.a, {
                href: "#domain-name-table",
                children: "domain name table"
              }), " shows that the adjacent area is West Europe. Use the ", _jsx(_components.code, {
                children: "api-eu-west-1.agora.io"
              }), " or ", _jsx(_components.code, {
                children: "api-eu-west-1.sd-rtn.com"
              }), " domain name to retry."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "precautions",
      children: "Precautions"
    }), `
`, _jsx(_components.p, {
      children: "Take the following precautions when setting up your retry strategy:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "To avoid exceeding the QPS limit with retry requests, best practice is to use a back-off strategy. For example, wait 1 second before you retry for the first time, wait 3 seconds before retrying the second time, and wait 6 seconds before retrying a third time."
      }), `
`, _jsx(_components.li, {
        children: "If the request fails because of a network problem rather than a DNS domain name resolution problem, skip alternate domain retry and proceed to adjacent domain retry."
      }), `
`, _jsx(_components.li, {
        children: "Before switching to the region domain name, ensure that the REST services you wish to use, for example, cloud recording or channel management, are deployed in that region."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "domain-name-table",
      children: "Domain name table"
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the primary and region domain names for various regions."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Primary domain name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Region domain name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Region"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-west-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-east-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Eastern United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-southeast-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Southeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-northeast-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Northeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-west-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-central-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Central Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-east-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "East China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-north-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "North China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-west-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-east-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Eastern United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-southeast-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Southeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-northeast-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Northeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-west-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-central-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Central Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-east-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "East China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-north-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "North China"
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
