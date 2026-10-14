import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manage chat room attributes",
  description: "Explains how to manage chat room attributes via the Agora Chat RESTful APIs."
};
export let _markdown = `

This page shows how to manage custom attributes by calling Agora Chat RESTful APIs, including adding, removing, modifying, and retrieving attributes that are stored as key-value maps.

Before calling the following methods, ensure that you understand the call frequency limit of Agora Chat RESTful API calls described in [Limitations](../limitations#call-limit-of-server-sides).

## Common parameters [#common-parameters]

The following table lists common request and response parameters of the Agora Chat RESTful APIs:

### Request parameters [#request-parameters]

| Parameter  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         | Required |
| :--------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`host\`     | String | The domain name assigned by the Agora Chat service to access RESTful APIs. For how to get the domain name, see [Get the information of your project](/en/realtime-media/im/get-started/enable#get-chat-project-information).                                                                                                                                                                                                                        | Yes      |
| \`app_id\`   | String | The unique identifier automatically assigned to each project by Agora                                                                                                                                                                                                                                                                                                                                                                               | Yes      |
| \`username\` | String | The unique login account of the user. The username must be 64 characters or less and cannot be empty. The following character sets are supported:* 26 lowercase English letters (a-z)
* 10 numbers (0-9)
* "\\_", "-", "."<CalloutContainer type="info">
  <CalloutDescription>
    Do not use any of the 26 uppercase English letters (A-Z). Ensure that each username under the same App ID is unique.
  </CalloutDescription>
</CalloutContainer> | Yes      |

### Response parameters [#response-parameters]

| Parameter         | Type   | Description                                                                                                |
| :---------------- | :----- | :--------------------------------------------------------------------------------------------------------- |
| \`action\`          | String | The request method.                                                                                        |
| \`organization\`    | String | The unique identifier assigned to each company (organization) by the Agora Chat service.                   |
| \`application\`     | String | A unique internal ID assigned to each app by the Agora Chat service. You can safely ignore this parameter. |
| \`applicationName\` | String | The unique identifier assigned to each app by the Agora Chat service.                                      |
| \`uri\`             | String | The request URI.                                                                                           |
| \`entities \`       | JSON   | The response entity.                                                                                       |
| \`data\`            | JSON   | The details of the response.                                                                               |
| \`timestamp\`       | Number | The Unix timestamp (ms) of the HTTP response.                                                              |
| \`duration\`        | Number | The duration (ms) from when the HTTP request is sent to the time the response is received.                 |

## Authorization [#authorization]

Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following \`Authorization\` field must be filled in the request header:

\`\`\`html
Authorization: Bearer \${YourAppToken}
\`\`\`

In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. Chat RESTful APIs only support authenticating users using app tokens. For details, see [Authentication using App Token](/en/realtime-media/im/build/secure-access-and-authentication/authentication).

## Set custom attributes [#set-custom-attributes]

Adds new custom attributes or modifies existing ones set by the current user.

<CalloutContainer type="info">
  <CalloutDescription>
    This method is only used to modify the existing key-value pairs set by the current user. To perform the overwrite operation, see [Forcibly set custom attributes](overwrite).
  </CalloutDescription>
</CalloutContainer>

### HTTP request [#http-request]

\`\`\`html
PUT https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}
\`\`\`

#### Path parameter [#path-parameter]

For the parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Content-Type\`  | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body]

| Parameter    | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :----------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`metaData\`   | JSON   | Yes      | The custom attributes that are stored as a collection of key-value pairs in the format \`Map\`. Keys in a map are unique attribute names that map to the corresponding attribute values. Note the following limitations: Each chat room can have a maximum of 100 custom attributes.The size of all custom attributes in an app can be a maximum of 10 GB.Each map can contain a maximum of 10 key-value pairs.Each key can contain a maximum of 128 characters.Each value can contain a maximum of 4,096 characters. The following character sets are supported:26 lowercase English letters (a-z)26 uppercase English letters (A-Z)10 numbers (0-9)"\\_", "-", "." |
| \`autoDelete\` | String | No       | Whether to automatically delete the custom attributes set by a chat room member when this member leaves the chat room:(Default) \`DELETE\`: Delete the custom attributes. \`NO_DELETE\`: Do not delete the custom attributes.                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### HTTP response [#http-response]

#### Response body [#response-body]

| Field              | Type   | Description                                                                                             |
| :----------------- | :----- | :------------------------------------------------------------------------------------------------------ |
| \`data.successKeys\` | Array  | The keys of the custom attributes that are successfully set.                                            |
| \`data.errorKeys\`   | Object | The keys of the custom attributes that fail to be set paired with the corresponding error descriptions. |

For other fields and detailed descriptions, see [Common parameters](#param).

### Example [#example]

#### Request example [#request-example]

\`\`\`bash
# Replaces  with the app token generated from your token server.
curl -X PUT -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer  ' -d '{
    "metaData": {
        "key1": "value1",
		    "key2": "value2"
      },
    "autoDelete": "DELETE"
 }' 'http://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13/user/user1'
\`\`\`

#### Response example [#response-example]

\`\`\`json
{
  "uri":"https://XXXX/app-id/XXXX/metadata/chatroom",
  "timestamp":1716887320215,
  "action":"put",
  "data":
  {
    "successKeys": ["key1"],
	  "errorKeys": {"key2":"errorDesc"},
  }
}
\`\`\`

## Retrieve custom attributes [#retrieve-custom-attributes]

Retrieves the specified custom attributes of a chat room.

### HTTP request [#http-request-1]

\`\`\`html
POST https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}
\`\`\`

#### Path parameter [#path-parameter-1]

For the parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-1]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Content-Type\`  | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body-1]

| Parameter | Type  | Required | Description                                                                                                                                                 |
| :-------- | :---- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`keys\`    | Array | No       | The keys of the custom attributes to retrieve. If you pass an empty array to this parameter, all custom attributes of the specified chat room are returned. |

### HTTP response [#http-response-1]

#### Response body [#response-body-1]

| Field  | Type   | Description                                             |
| :----- | :----- | :------------------------------------------------------ |
| \`data\` | Object | The key-value pairs of the retrieved custom attributes. |

For other fields and detailed descriptions, see [Common parameters](#param).

### Example [#example-1]

#### Request example [#request-example-1]

\`\`\`bash
# Replaces  with the app token generated from your token server.
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer  ' -d '{
    "keys": ["key1","key2"]
 }' 'http://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13'
\`\`\`

#### Response example [#response-example-1]

\`\`\`json
{
  "uri": "https://XXXX/app-id/XXXX/metadata/chatroom",
  "timestamp": 1716891388636,
  "action": "post",
  "data":
  {
    "key1": "value1",
		"key2": "value2"
  }
}
\`\`\`

## Remove custom attributes [#remove-custom-attributes]

Removes custom attributes set by the current user.

<CalloutContainer type="info">
  <CalloutDescription>
    This method is only used to remove the key-value pairs set by the current user. To remove the key-value pairs set by others, see [Forcibly remove custom attributes](#force).
  </CalloutDescription>
</CalloutContainer>

You can remove a maximum of 10 custom attributes at each call of this API.

### HTTP request [#http-request-2]

\`\`\`html
DELETE https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}
\`\`\`

#### Path parameter [#path-parameter-2]

For the parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-2]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Content-Type\`  | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body-2]

| Parameter | Type  | Required | Description                                                                             |
| :-------- | :---- | :------- | :-------------------------------------------------------------------------------------- |
| \`keys\`    | Array | No       | The keys of the custom attributes to remove. You can pass in at most 10 keys each time. |

### HTTP response [#http-response-2]

#### Response body [#response-body-2]

| Field              | Type   | Description                                                                                                 |
| :----------------- | :----- | :---------------------------------------------------------------------------------------------------------- |
| \`data.successKeys\` | Array  | The keys of the custom attributes that are successfully removed.                                            |
| \`data.errorKeys\`   | Object | The keys of the custom attributes that fail to be removed paired with the corresponding error descriptions. |

For other fields and detailed descriptions, see [Common parameters](#param).

### Example [#example-2]

#### Request example [#request-example-2]

\`\`\`bash
# Replaces  with the app token generated from your token server.
DELETE -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer  ' -d '{
    "keys": ["key1","key2"]
 }' 'http://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13/user/user1'
\`\`\`

#### Response example [#response-example-2]

\`\`\`json
{
  "uri":"https://XXXX/app-id/XXXX/metadata/chatroom",
  "status":"ok",
  "timestamp":1716887320215,
  "action":"delete",
  "data":
  {
    "successKeys": ["key1"],
	  "errorKeys": {"key2":"errorDesc"}
  }
}
\`\`\`

## Forcibly set custom attributes [#forcibly-set-custom-attributes]

In addition to adding new custom attributes or modifying the existing ones set by the current user, this method can also be used to overwrite the custom attributes set by others.

### HTTP request [#http-request-3]

\`\`\`html
PUT https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced
\`\`\`

#### Path parameter [#path-parameter-3]

For the parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-3]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Content-Type\`  | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body-3]

| Parameter    | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :----------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`metaData\`   | JSON   | Yes      | The custom attributes that are stored as a collection of key-value pairs in the format \`Map\`. Keys in a map are unique attribute names that map to the corresponding attribute values. Note the following limitations: Each chat room can have a maximum of 100 custom attributes.The size of all custom attributes in an app can be a maximum of 10 GB.Each map can contain a maximum of 10 key-value pairs.Each key can contain a maximum of 128 characters.Each value can contain a maximum of 4,096 characters. The following character sets are supported:26 lowercase English letters (a-z)26 uppercase English letters (A-Z)10 numbers (0-9)"\\_", "-", "." |
| \`autoDelete\` | String | No       | Whether to automatically delete the custom attributes set by a chat room member when this member leaves the chat room:(Default) \`DELETE\`: Delete the custom attributes. \`NO_DELETE\`: Do not delete the custom attributes.                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### HTTP response [#http-response-3]

#### Response body [#response-body-3]

| Field              | Type   | Description                                                                                             |
| :----------------- | :----- | :------------------------------------------------------------------------------------------------------ |
| \`data.successKeys\` | Array  | The keys of the custom attributes that are successfully set.                                            |
| \`data.errorKeys\`   | Object | The keys of the custom attributes that fail to be set paired with the corresponding error descriptions. |

For other fields and detailed descriptions, see [Common parameters](#param).

### Example [#example-3]

#### Request example [#request-example-3]

\`\`\`bash
# Replaces  with the app token generated from your token server.
curl -X PUT -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer  ' -d '{
    "metaData": {
        "key1": "value1",
		    "key2": "value2"
      },
    "autoDelete": "DELETE"
 }' 'http://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13/user/user1/forced'
\`\`\`

#### Response example [#response-example-3]

\`\`\`json
{
  "data":
  {
    "successKeys": ["key1"],
	  "errorKeys": {"key2":"errorDesc"}
  }
}
\`\`\`

## Forcibly remove custom attributes [#forcibly-remove-custom-attributes]

In addition to removing the custom attributes set by the current user, this method can also be used to remove custom attributes set by others.

### HTTP request [#http-request-4]

\`\`\`html
DELETE https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced
\`\`\`

#### Path parameter [#path-parameter-4]

For the parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-4]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Content-Type\`  | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body-4]

| Parameter | Type  | Required | Description                                                                   |
| :-------- | :---- | :------- | :---------------------------------------------------------------------------- |
| \`keys\`    | Array | No       | The keys of the custom attributes to remove. You can pass in at most 10 keys. |

### HTTP response [#http-response-4]

#### Response body [#response-body-4]

| Field              | Type   | Description                                                                                                 |
| :----------------- | :----- | :---------------------------------------------------------------------------------------------------------- |
| \`data.successKeys\` | Array  | The keys of the custom attributes that are successfully removed.                                            |
| \`data.errorKeys\`   | Object | The keys of the custom attributes that fail to be removed paired with the corresponding error descriptions. |

For other fields and detailed descriptions, see [Common parameters](#param).

### Example [#example-4]

#### Request example [#request-example-4]

\`\`\`bash
# Replaces  with the app token generated from your token server.
curl  -X DELETE -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer ' -d '{
    "keys": ["key1","key2"]
 }' 'https://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13/user/user1/forced'
\`\`\`

#### Response example [#response-example-4]

\`\`\`json
{
  "data":
  {
    "successKeys": ["key1"],
	"errorKeys": {"key2":"errorDesc"}
  }
}
\`\`\`

## Status codes [#status-codes]

For details, see [HTTP Status Codes](../http-status-codes).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page shows how to manage custom attributes by calling Agora Chat RESTful APIs, including adding, removing, modifying, and retrieving attributes that are stored as key-value maps."
  }, {
    heading: undefined,
    content: "Before calling the following methods, ensure that you understand the call frequency limit of Agora Chat RESTful API calls described in Limitations."
  }, {
    heading: "common-parameters",
    content: "The following table lists common request and response parameters of the Agora Chat RESTful APIs:"
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
    content: "The domain name assigned by the Agora Chat service to access RESTful APIs. For how to get the domain name, see Get the information of your project."
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
    heading: "request-parameters",
    content: "`username`"
  }, {
    heading: "request-parameters",
    content: "String"
  }, {
    heading: "request-parameters",
    content: `The unique login account of the user. The username must be 64 characters or less and cannot be empty. The following character sets are supported:* 26 lowercase English letters (a-z)
* 10 numbers (0-9)
* "\\_", "-", "."Do not use any of the 26 uppercase English letters (A-Z). Ensure that each username under the same App ID is unique.`
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
    content: "The unique identifier assigned to each company (organization) by the Agora Chat service."
  }, {
    heading: "response-parameters",
    content: "`application`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "A unique internal ID assigned to each app by the Agora Chat service. You can safely ignore this parameter."
  }, {
    heading: "response-parameters",
    content: "`applicationName`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "The unique identifier assigned to each app by the Agora Chat service."
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
    content: "`entities `"
  }, {
    heading: "response-parameters",
    content: "JSON"
  }, {
    heading: "response-parameters",
    content: "The response entity."
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
    heading: "authorization",
    content: "Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following `Authorization` field must be filled in the request header:"
  }, {
    heading: "authorization",
    content: "In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. Chat RESTful APIs only support authenticating users using app tokens. For details, see Authentication using App Token."
  }, {
    heading: "set-custom-attributes",
    content: "Adds new custom attributes or modifies existing ones set by the current user."
  }, {
    heading: "set-custom-attributes",
    content: "This method is only used to modify the existing key-value pairs set by the current user. To perform the overwrite operation, see Forcibly set custom attributes."
  }, {
    heading: "path-parameter",
    content: "For the parameters and detailed descriptions, see Common parameters."
  }, {
    heading: "request-header",
    content: "Parameter"
  }, {
    heading: "request-header",
    content: "Type"
  }, {
    heading: "request-header",
    content: "Description"
  }, {
    heading: "request-header",
    content: "Required"
  }, {
    heading: "request-header",
    content: "`Accept`"
  }, {
    heading: "request-header",
    content: "String"
  }, {
    heading: "request-header",
    content: "`application/json`"
  }, {
    heading: "request-header",
    content: "Yes"
  }, {
    heading: "request-header",
    content: "`Content-Type`"
  }, {
    heading: "request-header",
    content: "String"
  }, {
    heading: "request-header",
    content: "`application/json`"
  }, {
    heading: "request-header",
    content: "Yes"
  }, {
    heading: "request-header",
    content: "`Authorization`"
  }, {
    heading: "request-header",
    content: "String"
  }, {
    heading: "request-header",
    content: "The authentication token of the user or administrator, in the format of `Bearer ${token}`, where `Bearer` is a fixed character, followed by an English space, and then the obtained token value."
  }, {
    heading: "request-header",
    content: "Yes"
  }, {
    heading: "request-body",
    content: "Parameter"
  }, {
    heading: "request-body",
    content: "Type"
  }, {
    heading: "request-body",
    content: "Required"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`metaData`"
  }, {
    heading: "request-body",
    content: "JSON"
  }, {
    heading: "request-body",
    content: "Yes"
  }, {
    heading: "request-body",
    content: 'The custom attributes that are stored as a collection of key-value pairs in the format `Map`. Keys in a map are unique attribute names that map to the corresponding attribute values. Note the following limitations: Each chat room can have a maximum of 100 custom attributes.The size of all custom attributes in an app can be a maximum of 10 GB.Each map can contain a maximum of 10 key-value pairs.Each key can contain a maximum of 128 characters.Each value can contain a maximum of 4,096 characters. The following character sets are supported:26 lowercase English letters (a-z)26 uppercase English letters (A-Z)10 numbers (0-9)"\\_", "-", "."'
  }, {
    heading: "request-body",
    content: "`autoDelete`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "No"
  }, {
    heading: "request-body",
    content: "Whether to automatically delete the custom attributes set by a chat room member when this member leaves the chat room:(Default) `DELETE`: Delete the custom attributes. `NO_DELETE`: Do not delete the custom attributes."
  }, {
    heading: "response-body",
    content: "Field"
  }, {
    heading: "response-body",
    content: "Type"
  }, {
    heading: "response-body",
    content: "Description"
  }, {
    heading: "response-body",
    content: "`data.successKeys`"
  }, {
    heading: "response-body",
    content: "Array"
  }, {
    heading: "response-body",
    content: "The keys of the custom attributes that are successfully set."
  }, {
    heading: "response-body",
    content: "`data.errorKeys`"
  }, {
    heading: "response-body",
    content: "Object"
  }, {
    heading: "response-body",
    content: "The keys of the custom attributes that fail to be set paired with the corresponding error descriptions."
  }, {
    heading: "response-body",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "retrieve-custom-attributes",
    content: "Retrieves the specified custom attributes of a chat room."
  }, {
    heading: "path-parameter-1",
    content: "For the parameters and detailed descriptions, see Common parameters."
  }, {
    heading: "request-header-1",
    content: "Parameter"
  }, {
    heading: "request-header-1",
    content: "Type"
  }, {
    heading: "request-header-1",
    content: "Description"
  }, {
    heading: "request-header-1",
    content: "Required"
  }, {
    heading: "request-header-1",
    content: "`Accept`"
  }, {
    heading: "request-header-1",
    content: "String"
  }, {
    heading: "request-header-1",
    content: "`application/json`"
  }, {
    heading: "request-header-1",
    content: "Yes"
  }, {
    heading: "request-header-1",
    content: "`Content-Type`"
  }, {
    heading: "request-header-1",
    content: "String"
  }, {
    heading: "request-header-1",
    content: "`application/json`"
  }, {
    heading: "request-header-1",
    content: "Yes"
  }, {
    heading: "request-header-1",
    content: "`Authorization`"
  }, {
    heading: "request-header-1",
    content: "String"
  }, {
    heading: "request-header-1",
    content: "The authentication token of the user or administrator, in the format of `Bearer ${token}`, where `Bearer` is a fixed character, followed by an English space, and then the obtained token value."
  }, {
    heading: "request-header-1",
    content: "Yes"
  }, {
    heading: "request-body-1",
    content: "Parameter"
  }, {
    heading: "request-body-1",
    content: "Type"
  }, {
    heading: "request-body-1",
    content: "Required"
  }, {
    heading: "request-body-1",
    content: "Description"
  }, {
    heading: "request-body-1",
    content: "`keys`"
  }, {
    heading: "request-body-1",
    content: "Array"
  }, {
    heading: "request-body-1",
    content: "No"
  }, {
    heading: "request-body-1",
    content: "The keys of the custom attributes to retrieve. If you pass an empty array to this parameter, all custom attributes of the specified chat room are returned."
  }, {
    heading: "response-body-1",
    content: "Field"
  }, {
    heading: "response-body-1",
    content: "Type"
  }, {
    heading: "response-body-1",
    content: "Description"
  }, {
    heading: "response-body-1",
    content: "`data`"
  }, {
    heading: "response-body-1",
    content: "Object"
  }, {
    heading: "response-body-1",
    content: "The key-value pairs of the retrieved custom attributes."
  }, {
    heading: "response-body-1",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "remove-custom-attributes",
    content: "Removes custom attributes set by the current user."
  }, {
    heading: "remove-custom-attributes",
    content: "This method is only used to remove the key-value pairs set by the current user. To remove the key-value pairs set by others, see Forcibly remove custom attributes."
  }, {
    heading: "remove-custom-attributes",
    content: "You can remove a maximum of 10 custom attributes at each call of this API."
  }, {
    heading: "path-parameter-2",
    content: "For the parameters and detailed descriptions, see Common parameters."
  }, {
    heading: "request-header-2",
    content: "Parameter"
  }, {
    heading: "request-header-2",
    content: "Type"
  }, {
    heading: "request-header-2",
    content: "Description"
  }, {
    heading: "request-header-2",
    content: "Required"
  }, {
    heading: "request-header-2",
    content: "`Accept`"
  }, {
    heading: "request-header-2",
    content: "String"
  }, {
    heading: "request-header-2",
    content: "`application/json`"
  }, {
    heading: "request-header-2",
    content: "Yes"
  }, {
    heading: "request-header-2",
    content: "`Content-Type`"
  }, {
    heading: "request-header-2",
    content: "String"
  }, {
    heading: "request-header-2",
    content: "`application/json`"
  }, {
    heading: "request-header-2",
    content: "Yes"
  }, {
    heading: "request-header-2",
    content: "`Authorization`"
  }, {
    heading: "request-header-2",
    content: "String"
  }, {
    heading: "request-header-2",
    content: "The authentication token of the user or administrator, in the format of `Bearer ${token}`, where `Bearer` is a fixed character, followed by an English space, and then the obtained token value."
  }, {
    heading: "request-header-2",
    content: "Yes"
  }, {
    heading: "request-body-2",
    content: "Parameter"
  }, {
    heading: "request-body-2",
    content: "Type"
  }, {
    heading: "request-body-2",
    content: "Required"
  }, {
    heading: "request-body-2",
    content: "Description"
  }, {
    heading: "request-body-2",
    content: "`keys`"
  }, {
    heading: "request-body-2",
    content: "Array"
  }, {
    heading: "request-body-2",
    content: "No"
  }, {
    heading: "request-body-2",
    content: "The keys of the custom attributes to remove. You can pass in at most 10 keys each time."
  }, {
    heading: "response-body-2",
    content: "Field"
  }, {
    heading: "response-body-2",
    content: "Type"
  }, {
    heading: "response-body-2",
    content: "Description"
  }, {
    heading: "response-body-2",
    content: "`data.successKeys`"
  }, {
    heading: "response-body-2",
    content: "Array"
  }, {
    heading: "response-body-2",
    content: "The keys of the custom attributes that are successfully removed."
  }, {
    heading: "response-body-2",
    content: "`data.errorKeys`"
  }, {
    heading: "response-body-2",
    content: "Object"
  }, {
    heading: "response-body-2",
    content: "The keys of the custom attributes that fail to be removed paired with the corresponding error descriptions."
  }, {
    heading: "response-body-2",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "forcibly-set-custom-attributes",
    content: "In addition to adding new custom attributes or modifying the existing ones set by the current user, this method can also be used to overwrite the custom attributes set by others."
  }, {
    heading: "path-parameter-3",
    content: "For the parameters and detailed descriptions, see Common parameters."
  }, {
    heading: "request-header-3",
    content: "Parameter"
  }, {
    heading: "request-header-3",
    content: "Type"
  }, {
    heading: "request-header-3",
    content: "Description"
  }, {
    heading: "request-header-3",
    content: "Required"
  }, {
    heading: "request-header-3",
    content: "`Accept`"
  }, {
    heading: "request-header-3",
    content: "String"
  }, {
    heading: "request-header-3",
    content: "`application/json`"
  }, {
    heading: "request-header-3",
    content: "Yes"
  }, {
    heading: "request-header-3",
    content: "`Content-Type`"
  }, {
    heading: "request-header-3",
    content: "String"
  }, {
    heading: "request-header-3",
    content: "`application/json`"
  }, {
    heading: "request-header-3",
    content: "Yes"
  }, {
    heading: "request-header-3",
    content: "`Authorization`"
  }, {
    heading: "request-header-3",
    content: "String"
  }, {
    heading: "request-header-3",
    content: "The authentication token of the user or administrator, in the format of `Bearer ${token}`, where `Bearer` is a fixed character, followed by an English space, and then the obtained token value."
  }, {
    heading: "request-header-3",
    content: "Yes"
  }, {
    heading: "request-body-3",
    content: "Parameter"
  }, {
    heading: "request-body-3",
    content: "Type"
  }, {
    heading: "request-body-3",
    content: "Required"
  }, {
    heading: "request-body-3",
    content: "Description"
  }, {
    heading: "request-body-3",
    content: "`metaData`"
  }, {
    heading: "request-body-3",
    content: "JSON"
  }, {
    heading: "request-body-3",
    content: "Yes"
  }, {
    heading: "request-body-3",
    content: 'The custom attributes that are stored as a collection of key-value pairs in the format `Map`. Keys in a map are unique attribute names that map to the corresponding attribute values. Note the following limitations: Each chat room can have a maximum of 100 custom attributes.The size of all custom attributes in an app can be a maximum of 10 GB.Each map can contain a maximum of 10 key-value pairs.Each key can contain a maximum of 128 characters.Each value can contain a maximum of 4,096 characters. The following character sets are supported:26 lowercase English letters (a-z)26 uppercase English letters (A-Z)10 numbers (0-9)"\\_", "-", "."'
  }, {
    heading: "request-body-3",
    content: "`autoDelete`"
  }, {
    heading: "request-body-3",
    content: "String"
  }, {
    heading: "request-body-3",
    content: "No"
  }, {
    heading: "request-body-3",
    content: "Whether to automatically delete the custom attributes set by a chat room member when this member leaves the chat room:(Default) `DELETE`: Delete the custom attributes. `NO_DELETE`: Do not delete the custom attributes."
  }, {
    heading: "response-body-3",
    content: "Field"
  }, {
    heading: "response-body-3",
    content: "Type"
  }, {
    heading: "response-body-3",
    content: "Description"
  }, {
    heading: "response-body-3",
    content: "`data.successKeys`"
  }, {
    heading: "response-body-3",
    content: "Array"
  }, {
    heading: "response-body-3",
    content: "The keys of the custom attributes that are successfully set."
  }, {
    heading: "response-body-3",
    content: "`data.errorKeys`"
  }, {
    heading: "response-body-3",
    content: "Object"
  }, {
    heading: "response-body-3",
    content: "The keys of the custom attributes that fail to be set paired with the corresponding error descriptions."
  }, {
    heading: "response-body-3",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "forcibly-remove-custom-attributes",
    content: "In addition to removing the custom attributes set by the current user, this method can also be used to remove custom attributes set by others."
  }, {
    heading: "path-parameter-4",
    content: "For the parameters and detailed descriptions, see Common parameters."
  }, {
    heading: "request-header-4",
    content: "Parameter"
  }, {
    heading: "request-header-4",
    content: "Type"
  }, {
    heading: "request-header-4",
    content: "Description"
  }, {
    heading: "request-header-4",
    content: "Required"
  }, {
    heading: "request-header-4",
    content: "`Accept`"
  }, {
    heading: "request-header-4",
    content: "String"
  }, {
    heading: "request-header-4",
    content: "`application/json`"
  }, {
    heading: "request-header-4",
    content: "Yes"
  }, {
    heading: "request-header-4",
    content: "`Content-Type`"
  }, {
    heading: "request-header-4",
    content: "String"
  }, {
    heading: "request-header-4",
    content: "`application/json`"
  }, {
    heading: "request-header-4",
    content: "Yes"
  }, {
    heading: "request-header-4",
    content: "`Authorization`"
  }, {
    heading: "request-header-4",
    content: "String"
  }, {
    heading: "request-header-4",
    content: "The authentication token of the user or administrator, in the format of `Bearer ${token}`, where `Bearer` is a fixed character, followed by an English space, and then the obtained token value."
  }, {
    heading: "request-header-4",
    content: "Yes"
  }, {
    heading: "request-body-4",
    content: "Parameter"
  }, {
    heading: "request-body-4",
    content: "Type"
  }, {
    heading: "request-body-4",
    content: "Required"
  }, {
    heading: "request-body-4",
    content: "Description"
  }, {
    heading: "request-body-4",
    content: "`keys`"
  }, {
    heading: "request-body-4",
    content: "Array"
  }, {
    heading: "request-body-4",
    content: "No"
  }, {
    heading: "request-body-4",
    content: "The keys of the custom attributes to remove. You can pass in at most 10 keys."
  }, {
    heading: "response-body-4",
    content: "Field"
  }, {
    heading: "response-body-4",
    content: "Type"
  }, {
    heading: "response-body-4",
    content: "Description"
  }, {
    heading: "response-body-4",
    content: "`data.successKeys`"
  }, {
    heading: "response-body-4",
    content: "Array"
  }, {
    heading: "response-body-4",
    content: "The keys of the custom attributes that are successfully removed."
  }, {
    heading: "response-body-4",
    content: "`data.errorKeys`"
  }, {
    heading: "response-body-4",
    content: "Object"
  }, {
    heading: "response-body-4",
    content: "The keys of the custom attributes that fail to be removed paired with the corresponding error descriptions."
  }, {
    heading: "response-body-4",
    content: "For other fields and detailed descriptions, see Common parameters."
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
    id: "set-custom-attributes",
    content: "Set custom attributes"
  }, {
    id: "http-request",
    content: "HTTP request"
  }, {
    id: "path-parameter",
    content: "Path parameter"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request body"
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
    id: "retrieve-custom-attributes",
    content: "Retrieve custom attributes"
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
    id: "request-body-1",
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
    id: "remove-custom-attributes",
    content: "Remove custom attributes"
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
    id: "request-body-2",
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
    id: "forcibly-set-custom-attributes",
    content: "Forcibly set custom attributes"
  }, {
    id: "http-request-3",
    content: "HTTP request"
  }, {
    id: "path-parameter-3",
    content: "Path parameter"
  }, {
    id: "request-header-3",
    content: "Request header"
  }, {
    id: "request-body-3",
    content: "Request body"
  }, {
    id: "http-response-3",
    content: "HTTP response"
  }, {
    id: "response-body-3",
    content: "Response body"
  }, {
    id: "example-3",
    content: "Example"
  }, {
    id: "request-example-3",
    content: "Request example"
  }, {
    id: "response-example-3",
    content: "Response example"
  }, {
    id: "forcibly-remove-custom-attributes",
    content: "Forcibly remove custom attributes"
  }, {
    id: "http-request-4",
    content: "HTTP request"
  }, {
    id: "path-parameter-4",
    content: "Path parameter"
  }, {
    id: "request-header-4",
    content: "Request header"
  }, {
    id: "request-body-4",
    content: "Request body"
  }, {
    id: "http-response-4",
    content: "HTTP response"
  }, {
    id: "response-body-4",
    content: "Response body"
  }, {
    id: "example-4",
    content: "Example"
  }, {
    id: "request-example-4",
    content: "Request example"
  }, {
    id: "response-example-4",
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
  url: "#set-custom-attributes",
  title: _jsx(_Fragment, {
    children: "Set custom attributes"
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
  url: "#request-header",
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
  url: "#retrieve-custom-attributes",
  title: _jsx(_Fragment, {
    children: "Retrieve custom attributes"
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
  url: "#remove-custom-attributes",
  title: _jsx(_Fragment, {
    children: "Remove custom attributes"
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
  url: "#request-body-2",
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
  url: "#forcibly-set-custom-attributes",
  title: _jsx(_Fragment, {
    children: "Forcibly set custom attributes"
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
  depth: 4,
  url: "#request-header-3",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-3",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 3,
  url: "#http-response-3",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-body-3",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#example-3",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#request-example-3",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example-3",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#forcibly-remove-custom-attributes",
  title: _jsx(_Fragment, {
    children: "Forcibly remove custom attributes"
  })
}, {
  depth: 3,
  url: "#http-request-4",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-4",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#request-header-4",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-4",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 3,
  url: "#http-response-4",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-body-4",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#example-4",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#request-example-4",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example-4",
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
    div: "div",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
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
      children: "This page shows how to manage custom attributes by calling Agora Chat RESTful APIs, including adding, removing, modifying, and retrieving attributes that are stored as key-value maps."
    }), `
`, _jsxs(_components.p, {
      children: ["Before calling the following methods, ensure that you understand the call frequency limit of Agora Chat RESTful API calls described in ", _jsx(_components.a, {
        href: "../limitations#call-limit-of-server-sides",
        children: "Limitations"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "common-parameters",
      children: "Common parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following table lists common request and response parameters of the Agora Chat RESTful APIs:"
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
            children: ["The domain name assigned by the Agora Chat service to access RESTful APIs. For how to get the domain name, see ", _jsx(_components.a, {
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
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "username"
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
              children: "The unique login account of the user. The username must be 64 characters or less and cannot be empty. The following character sets are supported:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "26 lowercase English letters (a-z)"
              }), `
`, _jsx(_components.li, {
                children: "10 numbers (0-9)"
              }), `
`, _jsx(_components.li, {
                children: '"_", "-", "."'
              }), `
`]
            }), _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "Do not use any of the 26 uppercase English letters (A-Z). Ensure that each username under the same App ID is unique."
                })
              })
            })]
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
            children: "The unique identifier assigned to each company (organization) by the Agora Chat service."
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
            children: "A unique internal ID assigned to each app by the Agora Chat service. You can safely ignore this parameter."
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
            children: "The unique identifier assigned to each app by the Agora Chat service."
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
      id: "set-custom-attributes",
      children: "Set custom attributes"
    }), `
`, _jsx(_components.p, {
      children: "Adds new custom attributes or modifies existing ones set by the current user."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This method is only used to modify the existing key-value pairs set by the current user. To perform the overwrite operation, see ", _jsx(_components.a, {
            href: "overwrite",
            children: "Forcibly set custom attributes"
          }), "."]
        })
      })
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
              children: "PUT https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter",
      children: "Path parameter"
    }), `
`, _jsxs(_components.p, {
      children: ["For the parameters and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header",
      children: "Request header"
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
              children: "Accept"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Content-Type"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Authorization"
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
            children: ["The authentication token of the user or administrator, in the format of ", _jsx(_components.code, {
              children: "Bearer ${token}"
            }), ", where ", _jsx(_components.code, {
              children: "Bearer"
            }), " is a fixed character, followed by an English space, and then the obtained token value."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
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
              children: "metaData"
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
            children: "Yes"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The custom attributes that are stored as a collection of key-value pairs in the format ", _jsx(_components.code, {
              children: "Map"
            }), ". Keys in a map are unique attribute names that map to the corresponding attribute values. Note the following limitations: Each chat room can have a maximum of 100 custom attributes.The size of all custom attributes in an app can be a maximum of 10 GB.Each map can contain a maximum of 10 key-value pairs.Each key can contain a maximum of 128 characters.Each value can contain a maximum of 4,096 characters. The following character sets are supported", _jsx(_components.div, {}), ' lowercase English letters (a-z)26 uppercase English letters (A-Z)10 numbers (0-9)"_", "-", "."']
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "autoDelete"
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether to automatically delete the custom attributes set by a chat room member when this member leaves the chat room:(Default) ", _jsx(_components.code, {
              children: "DELETE"
            }), ": Delete the custom attributes. ", _jsx(_components.code, {
              children: "NO_DELETE"
            }), ": Do not delete the custom attributes."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body",
      children: "Response body"
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
              children: "data.successKeys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes that are successfully set."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.errorKeys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes that fail to be set paired with the corresponding error descriptions."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replaces  with the app token generated from your token server."
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " PUT"
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
              children: " 'Content-Type: application/json'"
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
              children: " 'Accept: application/json'"
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
              children: " 'Authorization: Bearer  '"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -d"
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
              children: '    "metaData": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "key1": "value1",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '\t\t    "key2": "value2"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "autoDelete": "DELETE"'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " }'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13/user/user1'"
            })]
          })]
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
              children: '  "uri"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"https://XXXX/app-id/XXXX/metadata/chatroom"'
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
              children: '  "timestamp"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1716887320215"
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
              children: '  "action"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"put"'
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
              children: '    "successKeys"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"key1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '\t  "errorKeys"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"key2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"errorDesc"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "},"
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
      id: "retrieve-custom-attributes",
      children: "Retrieve custom attributes"
    }), `
`, _jsx(_components.p, {
      children: "Retrieves the specified custom attributes of a chat room."
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
              children: "POST https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-1",
      children: "Path parameter"
    }), `
`, _jsxs(_components.p, {
      children: ["For the parameters and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-1",
      children: "Request header"
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
              children: "Accept"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Content-Type"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Authorization"
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
            children: ["The authentication token of the user or administrator, in the format of ", _jsx(_components.code, {
              children: "Bearer ${token}"
            }), ", where ", _jsx(_components.code, {
              children: "Bearer"
            }), " is a fixed character, followed by an English space, and then the obtained token value."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
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
            children: "Required"
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
              children: "keys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes to retrieve. If you pass an empty array to this parameter, all custom attributes of the specified chat room are returned."
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
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
            children: "Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The key-value pairs of the retrieved custom attributes."
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replaces  with the app token generated from your token server."
            })
          }), `
`, _jsxs(_components.span, {
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -H"
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
              children: " -H"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Accept: application/json'"
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
              children: " 'Authorization: Bearer  '"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -d"
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
              children: '    "keys": ["key1","key2"]'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " }'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13'"
            })]
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
              children: '  "uri"'
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
              children: '"https://XXXX/app-id/XXXX/metadata/chatroom"'
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
              children: '  "timestamp"'
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
              children: "1716891388636"
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
              children: '  "action"'
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
              children: '  "data"'
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
              children: '    "key1"'
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
              children: '"value1"'
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
              children: '\t\t"key2"'
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
              children: '"value2"'
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
      id: "remove-custom-attributes",
      children: "Remove custom attributes"
    }), `
`, _jsx(_components.p, {
      children: "Removes custom attributes set by the current user."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This method is only used to remove the key-value pairs set by the current user. To remove the key-value pairs set by others, see ", _jsx(_components.a, {
            href: "#force",
            children: "Forcibly remove custom attributes"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "You can remove a maximum of 10 custom attributes at each call of this API."
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
              children: "DELETE https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-2",
      children: "Path parameter"
    }), `
`, _jsxs(_components.p, {
      children: ["For the parameters and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-2",
      children: "Request header"
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
              children: "Accept"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Content-Type"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Authorization"
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
            children: ["The authentication token of the user or administrator, in the format of ", _jsx(_components.code, {
              children: "Bearer ${token}"
            }), ", where ", _jsx(_components.code, {
              children: "Bearer"
            }), " is a fixed character, followed by an English space, and then the obtained token value."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body-2",
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
            children: "Required"
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
              children: "keys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes to remove. You can pass in at most 10 keys each time."
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
              children: "data.successKeys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes that are successfully removed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.errorKeys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes that fail to be removed paired with the corresponding error descriptions."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replaces  with the app token generated from your token server."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "DELETE"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -H"
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
              children: " -H"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Accept: application/json'"
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
              children: " 'Authorization: Bearer  '"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -d"
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
              children: '    "keys": ["key1","key2"]'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " }'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13/user/user1'"
            })]
          })]
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
              children: '  "uri"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"https://XXXX/app-id/XXXX/metadata/chatroom"'
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
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"ok"'
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
              children: '  "timestamp"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1716887320215"
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
              children: '  "action"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
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
              children: '  "data"'
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
              children: '    "successKeys"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"key1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '\t  "errorKeys"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"key2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"errorDesc"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
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
      id: "forcibly-set-custom-attributes",
      children: "Forcibly set custom attributes"
    }), `
`, _jsx(_components.p, {
      children: "In addition to adding new custom attributes or modifying the existing ones set by the current user, this method can also be used to overwrite the custom attributes set by others."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PUT https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-3",
      children: "Path parameter"
    }), `
`, _jsxs(_components.p, {
      children: ["For the parameters and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-3",
      children: "Request header"
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
              children: "Accept"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Content-Type"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Authorization"
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
            children: ["The authentication token of the user or administrator, in the format of ", _jsx(_components.code, {
              children: "Bearer ${token}"
            }), ", where ", _jsx(_components.code, {
              children: "Bearer"
            }), " is a fixed character, followed by an English space, and then the obtained token value."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body-3",
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
              children: "metaData"
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
            children: "Yes"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The custom attributes that are stored as a collection of key-value pairs in the format ", _jsx(_components.code, {
              children: "Map"
            }), ". Keys in a map are unique attribute names that map to the corresponding attribute values. Note the following limitations: Each chat room can have a maximum of 100 custom attributes.The size of all custom attributes in an app can be a maximum of 10 GB.Each map can contain a maximum of 10 key-value pairs.Each key can contain a maximum of 128 characters.Each value can contain a maximum of 4,096 characters. The following character sets are supported", _jsx(_components.div, {}), ' lowercase English letters (a-z)26 uppercase English letters (A-Z)10 numbers (0-9)"_", "-", "."']
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "autoDelete"
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether to automatically delete the custom attributes set by a chat room member when this member leaves the chat room:(Default) ", _jsx(_components.code, {
              children: "DELETE"
            }), ": Delete the custom attributes. ", _jsx(_components.code, {
              children: "NO_DELETE"
            }), ": Do not delete the custom attributes."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-3",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-3",
      children: "Response body"
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
              children: "data.successKeys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes that are successfully set."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.errorKeys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes that fail to be set paired with the corresponding error descriptions."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "example-3",
      children: "Example"
    }), `
`, _jsx(_components.h4, {
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replaces  with the app token generated from your token server."
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " PUT"
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
              children: " 'Content-Type: application/json'"
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
              children: " 'Accept: application/json'"
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
              children: " 'Authorization: Bearer  '"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -d"
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
              children: '    "metaData": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "key1": "value1",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '\t\t    "key2": "value2"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "autoDelete": "DELETE"'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " }'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13/user/user1/forced'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-3",
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
              children: '  "data"'
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
              children: '    "successKeys"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"key1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '\t  "errorKeys"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"key2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"errorDesc"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
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
      id: "forcibly-remove-custom-attributes",
      children: "Forcibly remove custom attributes"
    }), `
`, _jsx(_components.p, {
      children: "In addition to removing the custom attributes set by the current user, this method can also be used to remove custom attributes set by others."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-4",
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
              children: "DELETE https://{host}/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-4",
      children: "Path parameter"
    }), `
`, _jsxs(_components.p, {
      children: ["For the parameters and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-4",
      children: "Request header"
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
              children: "Accept"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Content-Type"
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
            children: _jsx(_components.code, {
              children: "application/json"
            })
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
              children: "Authorization"
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
            children: ["The authentication token of the user or administrator, in the format of ", _jsx(_components.code, {
              children: "Bearer ${token}"
            }), ", where ", _jsx(_components.code, {
              children: "Bearer"
            }), " is a fixed character, followed by an English space, and then the obtained token value."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body-4",
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
            children: "Required"
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
              children: "keys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes to remove. You can pass in at most 10 keys."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-4",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-4",
      children: "Response body"
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
              children: "data.successKeys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes that are successfully removed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data.errorKeys"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The keys of the custom attributes that fail to be removed paired with the corresponding error descriptions."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "example-4",
      children: "Example"
    }), `
`, _jsx(_components.h4, {
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replaces  with the app token generated from your token server."
            })
          }), `
`, _jsxs(_components.span, {
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
              children: "  -X"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " DELETE"
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
              children: " 'Content-Type: application/json'"
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
              children: " 'Accept: application/json'"
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
              children: " 'Authorization: Bearer '"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -d"
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
              children: '    "keys": ["key1","key2"]'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " }'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://XXXX/app-id/XXXX/metadata/chatroom/662XXXX13/user/user1/forced'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-4",
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
              children: '  "data"'
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
              children: '    "successKeys"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"key1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '\t"errorKeys"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"key2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"errorDesc"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
