import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Presence",
  description: "Introduces how to use the Agora Chat RESTful API to implement presence in your project."
};
export let _markdown = `

The presence feature enables users to publicly display their online presence status and quickly determine the status of others. Users can customize their presence status; using more specific terms such as "busy", "away", or "in a call" can add fun and diversity to real-time chatting.

This page shows how to use the Chat RESTful APIs to implement presence in your project. Before calling the following methods, ensure that you meet the following:

* You understand the call frequency limit of the Chat RESTful APIs as described in [Limitations](./limitations#call-limit-of-server-sides).
* You have activated the presence feature in [Agora Console](https://console.agora.io/).

## Common parameters [#common-parameters]

| Parameter | Type   | Description                                                                                                                                                                                                            | Required |
| :-------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`host\`    | String | The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see [Get the information of your project](/en/realtime-media/im/get-started/enable#get-chat-project-information). | Yes      |
| \`app_id\`  | String | The unique identifier automatically assigned to each project by Agora                                                                                                                                                  | Yes      |
| \`uid\`     | String | The unique login account of the user.                                                                                                                                                                                  | Yes      |

## Authorization [#authorization]

Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following \`Authorization\` field must be filled in the request header:

\`\`\`html
Authorization: Bearer \${YourAppToken}
\`\`\`

In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. Chat RESTful APIs only support authenticating users using app tokens. For details, see [Authentication using App Token](/en/realtime-media/im/build/secure-access-and-authentication/authentication).

## Set the presence status of a user [#set-the-presence-status-of-a-user]

Sets the user's presence status on a specific device.

For each App Key, the call frequency limit of this method is 50 per second.

### HTTP request [#http-request]

\`\`\`html
POST https://{host}/app-id/{app_id}/users/{uid}/presence/{resource}/{status}
\`\`\`

#### Path parameter [#path-parameter]

| Parameter  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                               | Required |
| :--------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`uid\`      | String | The user ID of user whose presence status is to be set.                                                                                                                                                                                                                                                                                                                                   | Required |
| \`resource\` | String | The ID of the user's device for which the presence status is set. This device ID is the unique identifier assigned to each device resource in the format \`{Device Platform}_{Resource ID}\`, where the device platform can be \`android\`, \`ios\`, or \`webim\`, followed by an underscore plus a resource ID assigned by the SDK. For example, \`android_34f0bbf7-8eab-46db-b572-b56b02405690\`. | Yes      |
| \`status\`   | String | The presence status defined by the user: \`0\`: Offline. \`1\`: Online. Other numeric strings: Custom status.                                                                                                                                                                                                                                                                                 | Yes      |

For the descriptions of the other path parameters, see [Common Parameters](#param).

#### Request header [#request-header]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | The content type. Set it to \`application/json\`.                                                                                                                                                  | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body]

| Parameter | Type   | Description                                                                                                       | Required |
| :-------- | :----- | :---------------------------------------------------------------------------------------------------------------- | :------- |
| \`ext\`     | String | The extension information of the presence status. The size of the extension field can be a maximum of 1024 bytes. | Yes      |

### HTTP response [#http-response]

#### Response body [#response-body]

If the returned HTTP status code is \`200\`, the request succeeds, and the data field in the response body contains the following parameters:

| Parameter | Type   | Description                                                                                                                                                           |
| :-------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`result\`  | String | Whether the setting of the presence status succeeds. \`ok\` indicates the presence setting succeeds; otherwise, you can troubleshoot according to the returned reasons. |

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#status-codes) for possible causes.

### Example [#example]

#### Request example [#request-example]

\`\`\`json
curl -X POST 'http://XXXX/app-id/XXXX/users/c1/presence/android_123423453246/0' \\
-H 'Authorization: Bearer ' \\
-H 'Content-Type: application/json' \\
-d '{"ext":"123"}'
\`\`\`

#### Response example [#response-example]

\`\`\`json
{"result":"ok"}
\`\`\`

## Subscribe to the presence status of multiple users [#subscribe-to-the-presence-status-of-multiple-users]

Subscribes to the presence status of multiple users.

For each App Key, the call frequency limit of this method is 50 per second.

### HTTP request [#http-request-1]

\`\`\`html
POST https://{host}/app-id/{app_id}/users/{uid}/presence/{expiry}
\`\`\`

#### Path parameter [#path-parameter-1]

| Parameter | Type   | Description                                                                                 | Required |
| :-------- | :----- | :------------------------------------------------------------------------------------------ | :------- |
| \`uid\`     | String | The user ID of user for which the presence status is subscribed.                            | Required |
| \`expiry\`  | String | The subscription duration in seconds. The maximum value is 2,592,000, which equals 30 days. | Yes      |

For the descriptions of the other path parameters, see [Common Parameters](#param).

#### Request header [#request-header-1]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | The content type. Set it to \`application/json\`.                                                                                                                                                  | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body-1]

| Parameter   | Type       | Description                                                                                                                   | Required |
| :---------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`usernames\` | JSON Array | The list of users to whom you subscribe, for example, \`[“user1”, “user2”]\`. This list can contain a maximum of 100 usernames. | Yes      |

### HTTP response [#http-response-1]

#### Response body [#response-body-1]

If the returned HTTP status code is \`200\`, the request succeeds, and the data field in the response body contains the following parameters:

| Parameter   | Type   | Description                                                                                                                                                     |
| :---------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`result\`    | JSON   | Whether the subscription succeeds. If successful, the presence statuses of the users return; otherwise, you can troubleshoot according to the returned reasons. |
| \`uid\`       | String | The unique login account of the user.                                                                                                                           |
| \`last_time\` | Number | The Unix timestamp when the user was last online, in seconds.                                                                                                   |
| \`expiry\`    | Number | The Unix timestamp when the subscription expires, in seconds.                                                                                                   |
| \`ext\`       | String | The extension information of the presence status.                                                                                                               |
| \`status\`    | JSON   | The presence statuses on multiple devices of the user. \`0\`: Offline. \`1\`: Online.Other strings: User-defined custom presence status.                            |

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#status-codes) for possible causes.

### Example [#example-1]

#### Request example [#request-example-1]

\`\`\`json
curl -X POST 'http://XXXX/app-id/XXXX/users/wzy/presence/1000' \\
-H 'Authorization: Bearer ' \\
-H 'Content-Type: application/json' \\
-d '{"usernames":["c2","c3"]}'
\`\`\`

#### Response example [#response-example-1]

\`\`\`json
{"result":[{"uid":"","last_time":"1644466063","expiry":"1645500371","ext":"123","status":{"android":"1","android_6b5610ac-4e11-4661-82b3-dee17bc7b2cc":"0"}},{"uid":"c3","last_time":"1645183991","expiry":"1645500371","ext":"","status":{"android":"0","android_6b5610ac-4e11-4661-82b3-dee17bc7b2cc":"0"}}]}
\`\`\`

## Retrieve the presence status of multiple users [#retrieve-the-presence-status-of-multiple-users]

Retrieves the presence status of multiple users.

<CalloutContainer type="info">
  <CalloutDescription>
    By default, if a user logs in and out several times in one second, the Chat server sends the presence status change notification to the SDK only after the last login or logout of the user.
  </CalloutDescription>
</CalloutContainer>

For each App Key, the call frequency limit of this method is 50 per second.

### HTTP request [#http-request-2]

\`\`\`html
POST https://{host}/app-id/{app_id}/users/{uid}/presence
\`\`\`

#### Path parameter [#path-parameter-2]

| Parameter | Type   | Description                                                                                                                                                                                        | Required |
| :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`uid\`     | String | The user whose subscribed presence statuses are retrieved. If the user ID you passed does not exist or the user does not subscribe to the presence status of any users, an empty list is returned. | Yes      |

For other parameters and descriptions, see [Common Parameters](#param).

#### Request header [#request-header-2]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | The content type. Set it to \`application/json\`.                                                                                                                                                  | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body-2]

| Parameter   | Type       | Description                                                                                                                                             | Required |
| :---------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| \`usernames\` | JSON Array | The list of users whose presence statuses you attempt to retrieve, for example, \`[“user1”, “user2”]\`. This list can contain a maximum of 100 usernames. | Yes      |

### HTTP response [#http-response-2]

#### Response body [#response-body-2]

If the returned HTTP status code is \`200\`, the request succeeds, and the data field in the response body contains the following parameters:

| Parameter   | Type   | Description                                                                                                                                                             |
| :---------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`result\`    | JSON   | Whether the retrieving operation succeeds. If successful, the presence statuses of the users return; otherwise, you can troubleshoot according to the returned reasons. |
| \`uid\`       | String | The unique login account of the user.                                                                                                                                   |
| \`last_time\` | Number | The Unix timestamp when the user was last online, in seconds.                                                                                                           |
| \`ext\`       | String | The extension information of the presence status.                                                                                                                       |
| \`status\`    | JSON   | The presence statuses on multiple devices of the user. \`0\`: Offline. \`1\`: Online.Other strings: User-defined custom presence status.                                    |

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#status-codes) for possible causes.

### Example [#example-2]

#### Request example [#request-example-2]

\`\`\`json
curl -X POST 'http://XXXX/app-id/XXXX/users/wzy/presence' \\
-H 'Authorization: Bearer ' \\
-H 'Content-Type: application/json' \\
-d '{"usernames":["c2","c3"]}'
\`\`\`

#### Response example [#response-example-2]

\`\`\`json
{
"result":[
  {"uid":"c2",
  "last_time":"1644466063",
  "ext":"",
  "status":{"android":"0"}
     },
   {"uid":"c3",
   "last_time":"1644475330",
   "ext":"",
   "status":{
       "android":"0",
       "android":"0"}
    }]
 }
\`\`\`

## Unsubscribe from the presence status of multiple users [#unsubscribe-from-the-presence-status-of-multiple-users]

Unsubscribes from the presence status of multiple users.

For each App Key, the call frequency limit of this method is 50 per second.

### HTTP request [#http-request-3]

\`\`\`html
DELETE https://{host}/app-id/{app_id}/users/{uid}/presence
\`\`\`

#### Path parameter [#path-parameter-3]

| Parameter | Type   | Description                                                        | Required |
| :-------- | :----- | :----------------------------------------------------------------- | :------- |
| \`uid\`     | String | The user whose subscribed presence statuses are unsubscribed from. | Yes      |

For other parameters and descriptions, see [Common Parameters](#param).

#### Request header [#request-header-3]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | The content type. Set it to \`application/json\`.                                                                                                                                                  | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body-3]

| Parameter | Type       | Description                                                                                                                       | Required |
| :-------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`users\`   | JSON Array | The list of users from whom you unsubscribe, for example, \`[“user1”, “user2”]\`. This list can contain a maximum of 100 usernames. | Yes      |

### HTTP response [#http-response-3]

#### Response body [#response-body-3]

If the returned HTTP status code is \`200\`, the request succeeds, and the data field in the response body contains the following parameters:

| Parameter | Type   | Description                                                                                                                                                               |
| :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`result\`  | String | Whether the subscription cancellation succeeds. \`ok\` indicates the subscription cancellation succeeds; otherwise, you can troubleshoot according to the returned reasons. |

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#status-codes) for possible causes.

### Example [#example-3]

#### Request example [#request-example-3]

\`\`\`json
curl -X DELETE 'http://XXXX/app-id/XXXX/users/wzy/presence' \\
-H 'Authorization: Bearer ' \\
-H 'Content-Type: application/json' \\
-d '["c1"]'
\`\`\`

#### Response example [#response-example-3]

\`\`\`json
{"result":"ok"}
\`\`\`

## Retrieve the subscriptions of a user [#retrieve-the-subscriptions-of-a-user]

Retrieves the subscriptions of a user in a paginated list.

For each App Key, the call frequency limit of this method is 50 per second.

### HTTP request [#http-request-4]

\`\`\`html
GET https://{host}/app-id/{app_id}/users/{uid}/presence/sublist?pageNum=1&pageSize=100
\`\`\`

#### Path parameter [#path-parameter-4]

| Parameter | Type   | Description                                         | Required |
| :-------- | :----- | :-------------------------------------------------- | :------- |
| \`uid\`     | String | The user for which the subscriptions are retrieved. | Yes      |

For other parameters and descriptions, see [Common Parameters](#param).

#### Query parameter [#query-parameter]

| Parameter  | Type | Description                                                                                                               | Required |
| :--------- | :--- | :------------------------------------------------------------------------------------------------------------------------ | :------- |
| \`pageNum\`  | Int  | The page from which to start retrieving subscriptions. The parameter value must be no smaller than the default value \`1\`. | Yes      |
| \`pageSize\` | Int  | The maximum number of subscriptions to retrieve per page. The value range is \\[1,500] with \`1\` as the default.            | Yes      |

#### Request header [#request-header-4]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | The content type. Set it to \`application/json\`.                                                                                                                                                  | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response-4]

#### Response body [#response-body-4]

If the returned HTTP status code is \`200\`, the request succeeds, and the data field in the response body contains the following parameters:

| Parameter  | Type   | Description                                                                                                                                                        |
| :--------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`result\`   | String | Whether the retrieving operation succeeds. If successful, the subscription information returns; otherwise, you can troubleshoot according to the returned reasons. |
| \`totalnum\` | String | The total number of the users you subscribe to.                                                                                                                    |
| \`sublist\`  | Object | The list of subscriptions. Each object in the list contains the \`uid\` and \`expiry\` fields.                                                                         |
| \`uid\`      | String | The unique login account of the user.                                                                                                                              |
| \`expiry\`   | String | The Unix timestamp when the subscription expires, in seconds                                                                                                       |

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#status-codes) for possible causes.

### Example [#example-4]

#### Request example [#request-example-4]

\`\`\`json
curl -X GET 'http://XXXX/app-id/XXXX/users/wzy/presence/sublist?pageNum=1&pageSize=100' \\
-H 'Authorization: Bearer ' \\
-H 'Content-Type: application/json' 
\`\`\`

#### Response example [#response-example-4]

\`\`\`json
{"result":{"totalnum":"2","sublist":[{"uid":"lxml2","expiry":"1645822322"},{"uid":"lxml1","expiry":"1645822322"}]}}%
\`\`\`

## Status codes [#status-codes]

For details, see [HTTP Status Codes](./http-status-codes).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: 'The presence feature enables users to publicly display their online presence status and quickly determine the status of others. Users can customize their presence status; using more specific terms such as "busy", "away", or "in a call" can add fun and diversity to real-time chatting.'
  }, {
    heading: undefined,
    content: "This page shows how to use the Chat RESTful APIs to implement presence in your project. Before calling the following methods, ensure that you meet the following:"
  }, {
    heading: undefined,
    content: "You understand the call frequency limit of the Chat RESTful APIs as described in Limitations."
  }, {
    heading: undefined,
    content: "You have activated the presence feature in Agora Console."
  }, {
    heading: "common-parameters",
    content: "Parameter"
  }, {
    heading: "common-parameters",
    content: "Type"
  }, {
    heading: "common-parameters",
    content: "Description"
  }, {
    heading: "common-parameters",
    content: "Required"
  }, {
    heading: "common-parameters",
    content: "`host`"
  }, {
    heading: "common-parameters",
    content: "String"
  }, {
    heading: "common-parameters",
    content: "The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see Get the information of your project."
  }, {
    heading: "common-parameters",
    content: "Yes"
  }, {
    heading: "common-parameters",
    content: "`app_id`"
  }, {
    heading: "common-parameters",
    content: "String"
  }, {
    heading: "common-parameters",
    content: "The unique identifier automatically assigned to each project by Agora"
  }, {
    heading: "common-parameters",
    content: "Yes"
  }, {
    heading: "common-parameters",
    content: "`uid`"
  }, {
    heading: "common-parameters",
    content: "String"
  }, {
    heading: "common-parameters",
    content: "The unique login account of the user."
  }, {
    heading: "common-parameters",
    content: "Yes"
  }, {
    heading: "authorization",
    content: "Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following `Authorization` field must be filled in the request header:"
  }, {
    heading: "authorization",
    content: "In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. Chat RESTful APIs only support authenticating users using app tokens. For details, see Authentication using App Token."
  }, {
    heading: "set-the-presence-status-of-a-user",
    content: "Sets the user's presence status on a specific device."
  }, {
    heading: "set-the-presence-status-of-a-user",
    content: "For each App Key, the call frequency limit of this method is 50 per second."
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
    content: "`uid`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "The user ID of user whose presence status is to be set."
  }, {
    heading: "path-parameter",
    content: "Required"
  }, {
    heading: "path-parameter",
    content: "`resource`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "The ID of the user's device for which the presence status is set. This device ID is the unique identifier assigned to each device resource in the format `{Device Platform}_{Resource ID}`, where the device platform can be `android`, `ios`, or `webim`, followed by an underscore plus a resource ID assigned by the SDK. For example, `android_34f0bbf7-8eab-46db-b572-b56b02405690`."
  }, {
    heading: "path-parameter",
    content: "Yes"
  }, {
    heading: "path-parameter",
    content: "`status`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "The presence status defined by the user: `0`: Offline. `1`: Online. Other numeric strings: Custom status."
  }, {
    heading: "path-parameter",
    content: "Yes"
  }, {
    heading: "path-parameter",
    content: "For the descriptions of the other path parameters, see Common Parameters."
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
    content: "`Content-Type`"
  }, {
    heading: "request-header",
    content: "String"
  }, {
    heading: "request-header",
    content: "The content type. Set it to `application/json`."
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
    content: "Description"
  }, {
    heading: "request-body",
    content: "Required"
  }, {
    heading: "request-body",
    content: "`ext`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The extension information of the presence status. The size of the extension field can be a maximum of 1024 bytes."
  }, {
    heading: "request-body",
    content: "Yes"
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
    content: "`result`"
  }, {
    heading: "response-body",
    content: "String"
  }, {
    heading: "response-body",
    content: "Whether the setting of the presence status succeeds. `ok` indicates the presence setting succeeds; otherwise, you can troubleshoot according to the returned reasons."
  }, {
    heading: "response-body",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible causes."
  }, {
    heading: "subscribe-to-the-presence-status-of-multiple-users",
    content: "Subscribes to the presence status of multiple users."
  }, {
    heading: "subscribe-to-the-presence-status-of-multiple-users",
    content: "For each App Key, the call frequency limit of this method is 50 per second."
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
    content: "`uid`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "The user ID of user for which the presence status is subscribed."
  }, {
    heading: "path-parameter-1",
    content: "Required"
  }, {
    heading: "path-parameter-1",
    content: "`expiry`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "The subscription duration in seconds. The maximum value is 2,592,000, which equals 30 days."
  }, {
    heading: "path-parameter-1",
    content: "Yes"
  }, {
    heading: "path-parameter-1",
    content: "For the descriptions of the other path parameters, see Common Parameters."
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
    content: "`Content-Type`"
  }, {
    heading: "request-header-1",
    content: "String"
  }, {
    heading: "request-header-1",
    content: "The content type. Set it to `application/json`."
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
    content: "Description"
  }, {
    heading: "request-body-1",
    content: "Required"
  }, {
    heading: "request-body-1",
    content: "`usernames`"
  }, {
    heading: "request-body-1",
    content: "JSON Array"
  }, {
    heading: "request-body-1",
    content: "The list of users to whom you subscribe, for example, `[“user1”, “user2”]`. This list can contain a maximum of 100 usernames."
  }, {
    heading: "request-body-1",
    content: "Yes"
  }, {
    heading: "response-body-1",
    content: "If the returned HTTP status code is `200`, the request succeeds, and the data field in the response body contains the following parameters:"
  }, {
    heading: "response-body-1",
    content: "Parameter"
  }, {
    heading: "response-body-1",
    content: "Type"
  }, {
    heading: "response-body-1",
    content: "Description"
  }, {
    heading: "response-body-1",
    content: "`result`"
  }, {
    heading: "response-body-1",
    content: "JSON"
  }, {
    heading: "response-body-1",
    content: "Whether the subscription succeeds. If successful, the presence statuses of the users return; otherwise, you can troubleshoot according to the returned reasons."
  }, {
    heading: "response-body-1",
    content: "`uid`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The unique login account of the user."
  }, {
    heading: "response-body-1",
    content: "`last_time`"
  }, {
    heading: "response-body-1",
    content: "Number"
  }, {
    heading: "response-body-1",
    content: "The Unix timestamp when the user was last online, in seconds."
  }, {
    heading: "response-body-1",
    content: "`expiry`"
  }, {
    heading: "response-body-1",
    content: "Number"
  }, {
    heading: "response-body-1",
    content: "The Unix timestamp when the subscription expires, in seconds."
  }, {
    heading: "response-body-1",
    content: "`ext`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The extension information of the presence status."
  }, {
    heading: "response-body-1",
    content: "`status`"
  }, {
    heading: "response-body-1",
    content: "JSON"
  }, {
    heading: "response-body-1",
    content: "The presence statuses on multiple devices of the user. `0`: Offline. `1`: Online.Other strings: User-defined custom presence status."
  }, {
    heading: "response-body-1",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible causes."
  }, {
    heading: "retrieve-the-presence-status-of-multiple-users",
    content: "Retrieves the presence status of multiple users."
  }, {
    heading: "retrieve-the-presence-status-of-multiple-users",
    content: "By default, if a user logs in and out several times in one second, the Chat server sends the presence status change notification to the SDK only after the last login or logout of the user."
  }, {
    heading: "retrieve-the-presence-status-of-multiple-users",
    content: "For each App Key, the call frequency limit of this method is 50 per second."
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
    content: "`uid`"
  }, {
    heading: "path-parameter-2",
    content: "String"
  }, {
    heading: "path-parameter-2",
    content: "The user whose subscribed presence statuses are retrieved. If the user ID you passed does not exist or the user does not subscribe to the presence status of any users, an empty list is returned."
  }, {
    heading: "path-parameter-2",
    content: "Yes"
  }, {
    heading: "path-parameter-2",
    content: "For other parameters and descriptions, see Common Parameters."
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
    content: "`Content-Type`"
  }, {
    heading: "request-header-2",
    content: "String"
  }, {
    heading: "request-header-2",
    content: "The content type. Set it to `application/json`."
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
    content: "Description"
  }, {
    heading: "request-body-2",
    content: "Required"
  }, {
    heading: "request-body-2",
    content: "`usernames`"
  }, {
    heading: "request-body-2",
    content: "JSON Array"
  }, {
    heading: "request-body-2",
    content: "The list of users whose presence statuses you attempt to retrieve, for example, `[“user1”, “user2”]`. This list can contain a maximum of 100 usernames."
  }, {
    heading: "request-body-2",
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
    content: "JSON"
  }, {
    heading: "response-body-2",
    content: "Whether the retrieving operation succeeds. If successful, the presence statuses of the users return; otherwise, you can troubleshoot according to the returned reasons."
  }, {
    heading: "response-body-2",
    content: "`uid`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The unique login account of the user."
  }, {
    heading: "response-body-2",
    content: "`last_time`"
  }, {
    heading: "response-body-2",
    content: "Number"
  }, {
    heading: "response-body-2",
    content: "The Unix timestamp when the user was last online, in seconds."
  }, {
    heading: "response-body-2",
    content: "`ext`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The extension information of the presence status."
  }, {
    heading: "response-body-2",
    content: "`status`"
  }, {
    heading: "response-body-2",
    content: "JSON"
  }, {
    heading: "response-body-2",
    content: "The presence statuses on multiple devices of the user. `0`: Offline. `1`: Online.Other strings: User-defined custom presence status."
  }, {
    heading: "response-body-2",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible causes."
  }, {
    heading: "unsubscribe-from-the-presence-status-of-multiple-users",
    content: "Unsubscribes from the presence status of multiple users."
  }, {
    heading: "unsubscribe-from-the-presence-status-of-multiple-users",
    content: "For each App Key, the call frequency limit of this method is 50 per second."
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
    content: "Required"
  }, {
    heading: "path-parameter-3",
    content: "`uid`"
  }, {
    heading: "path-parameter-3",
    content: "String"
  }, {
    heading: "path-parameter-3",
    content: "The user whose subscribed presence statuses are unsubscribed from."
  }, {
    heading: "path-parameter-3",
    content: "Yes"
  }, {
    heading: "path-parameter-3",
    content: "For other parameters and descriptions, see Common Parameters."
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
    content: "`Content-Type`"
  }, {
    heading: "request-header-3",
    content: "String"
  }, {
    heading: "request-header-3",
    content: "The content type. Set it to `application/json`."
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
    content: "Description"
  }, {
    heading: "request-body-3",
    content: "Required"
  }, {
    heading: "request-body-3",
    content: "`users`"
  }, {
    heading: "request-body-3",
    content: "JSON Array"
  }, {
    heading: "request-body-3",
    content: "The list of users from whom you unsubscribe, for example, `[“user1”, “user2”]`. This list can contain a maximum of 100 usernames."
  }, {
    heading: "request-body-3",
    content: "Yes"
  }, {
    heading: "response-body-3",
    content: "If the returned HTTP status code is `200`, the request succeeds, and the data field in the response body contains the following parameters:"
  }, {
    heading: "response-body-3",
    content: "Parameter"
  }, {
    heading: "response-body-3",
    content: "Type"
  }, {
    heading: "response-body-3",
    content: "Description"
  }, {
    heading: "response-body-3",
    content: "`result`"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "Whether the subscription cancellation succeeds. `ok` indicates the subscription cancellation succeeds; otherwise, you can troubleshoot according to the returned reasons."
  }, {
    heading: "response-body-3",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible causes."
  }, {
    heading: "retrieve-the-subscriptions-of-a-user",
    content: "Retrieves the subscriptions of a user in a paginated list."
  }, {
    heading: "retrieve-the-subscriptions-of-a-user",
    content: "For each App Key, the call frequency limit of this method is 50 per second."
  }, {
    heading: "path-parameter-4",
    content: "Parameter"
  }, {
    heading: "path-parameter-4",
    content: "Type"
  }, {
    heading: "path-parameter-4",
    content: "Description"
  }, {
    heading: "path-parameter-4",
    content: "Required"
  }, {
    heading: "path-parameter-4",
    content: "`uid`"
  }, {
    heading: "path-parameter-4",
    content: "String"
  }, {
    heading: "path-parameter-4",
    content: "The user for which the subscriptions are retrieved."
  }, {
    heading: "path-parameter-4",
    content: "Yes"
  }, {
    heading: "path-parameter-4",
    content: "For other parameters and descriptions, see Common Parameters."
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
    content: "`pageNum`"
  }, {
    heading: "query-parameter",
    content: "Int"
  }, {
    heading: "query-parameter",
    content: "The page from which to start retrieving subscriptions. The parameter value must be no smaller than the default value `1`."
  }, {
    heading: "query-parameter",
    content: "Yes"
  }, {
    heading: "query-parameter",
    content: "`pageSize`"
  }, {
    heading: "query-parameter",
    content: "Int"
  }, {
    heading: "query-parameter",
    content: "The maximum number of subscriptions to retrieve per page. The value range is \\[1,500] with `1` as the default."
  }, {
    heading: "query-parameter",
    content: "Yes"
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
    content: "`Content-Type`"
  }, {
    heading: "request-header-4",
    content: "String"
  }, {
    heading: "request-header-4",
    content: "The content type. Set it to `application/json`."
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
    heading: "response-body-4",
    content: "If the returned HTTP status code is `200`, the request succeeds, and the data field in the response body contains the following parameters:"
  }, {
    heading: "response-body-4",
    content: "Parameter"
  }, {
    heading: "response-body-4",
    content: "Type"
  }, {
    heading: "response-body-4",
    content: "Description"
  }, {
    heading: "response-body-4",
    content: "`result`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "Whether the retrieving operation succeeds. If successful, the subscription information returns; otherwise, you can troubleshoot according to the returned reasons."
  }, {
    heading: "response-body-4",
    content: "`totalnum`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The total number of the users you subscribe to."
  }, {
    heading: "response-body-4",
    content: "`sublist`"
  }, {
    heading: "response-body-4",
    content: "Object"
  }, {
    heading: "response-body-4",
    content: "The list of subscriptions. Each object in the list contains the `uid` and `expiry` fields."
  }, {
    heading: "response-body-4",
    content: "`uid`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The unique login account of the user."
  }, {
    heading: "response-body-4",
    content: "`expiry`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The Unix timestamp when the subscription expires, in seconds"
  }, {
    heading: "response-body-4",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible causes."
  }, {
    heading: "status-codes",
    content: "For details, see HTTP Status Codes."
  }],
  headings: [{
    id: "common-parameters",
    content: "Common parameters"
  }, {
    id: "authorization",
    content: "Authorization"
  }, {
    id: "set-the-presence-status-of-a-user",
    content: "Set the presence status of a user"
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
    id: "subscribe-to-the-presence-status-of-multiple-users",
    content: "Subscribe to the presence status of multiple users"
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
    id: "retrieve-the-presence-status-of-multiple-users",
    content: "Retrieve the presence status of multiple users"
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
    id: "unsubscribe-from-the-presence-status-of-multiple-users",
    content: "Unsubscribe from the presence status of multiple users"
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
    id: "retrieve-the-subscriptions-of-a-user",
    content: "Retrieve the subscriptions of a user"
  }, {
    id: "http-request-4",
    content: "HTTP request"
  }, {
    id: "path-parameter-4",
    content: "Path parameter"
  }, {
    id: "query-parameter",
    content: "Query parameter"
  }, {
    id: "request-header-4",
    content: "Request header"
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
  depth: 2,
  url: "#authorization",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 2,
  url: "#set-the-presence-status-of-a-user",
  title: _jsx(_Fragment, {
    children: "Set the presence status of a user"
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
  url: "#subscribe-to-the-presence-status-of-multiple-users",
  title: _jsx(_Fragment, {
    children: "Subscribe to the presence status of multiple users"
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
  url: "#retrieve-the-presence-status-of-multiple-users",
  title: _jsx(_Fragment, {
    children: "Retrieve the presence status of multiple users"
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
  url: "#unsubscribe-from-the-presence-status-of-multiple-users",
  title: _jsx(_Fragment, {
    children: "Unsubscribe from the presence status of multiple users"
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
  url: "#retrieve-the-subscriptions-of-a-user",
  title: _jsx(_Fragment, {
    children: "Retrieve the subscriptions of a user"
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
  url: "#query-parameter",
  title: _jsx(_Fragment, {
    children: "Query parameter"
  })
}, {
  depth: 4,
  url: "#request-header-4",
  title: _jsx(_Fragment, {
    children: "Request header"
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
      children: 'The presence feature enables users to publicly display their online presence status and quickly determine the status of others. Users can customize their presence status; using more specific terms such as "busy", "away", or "in a call" can add fun and diversity to real-time chatting.'
    }), `
`, _jsx(_components.p, {
      children: "This page shows how to use the Chat RESTful APIs to implement presence in your project. Before calling the following methods, ensure that you meet the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["You understand the call frequency limit of the Chat RESTful APIs as described in ", _jsx(_components.a, {
          href: "./limitations#call-limit-of-server-sides",
          children: "Limitations"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["You have activated the presence feature in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "common-parameters",
      children: "Common parameters"
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
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uid"
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
            children: "The unique login account of the user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
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
      id: "set-the-presence-status-of-a-user",
      children: "Set the presence status of a user"
    }), `
`, _jsx(_components.p, {
      children: "Sets the user's presence status on a specific device."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 50 per second."
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
              children: "POST https://{host}/app-id/{app_id}/users/{uid}/presence/{resource}/{status}"
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uid"
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
            children: "The user ID of user whose presence status is to be set."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
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
            children: "String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The ID of the user's device for which the presence status is set. This device ID is the unique identifier assigned to each device resource in the format ", _jsx(_components.code, {
              children: "{Device Platform}_{Resource ID}"
            }), ", where the device platform can be ", _jsx(_components.code, {
              children: "android"
            }), ", ", _jsx(_components.code, {
              children: "ios"
            }), ", or ", _jsx(_components.code, {
              children: "webim"
            }), ", followed by an underscore plus a resource ID assigned by the SDK. For example, ", _jsx(_components.code, {
              children: "android_34f0bbf7-8eab-46db-b572-b56b02405690"
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
              children: "status"
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
            children: ["The presence status defined by the user: ", _jsx(_components.code, {
              children: "0"
            }), ": Offline. ", _jsx(_components.code, {
              children: "1"
            }), ": Online. Other numeric strings: Custom status."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For the descriptions of the other path parameters, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common Parameters"
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
              children: "Content-Type"
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
            children: ["The content type. Set it to ", _jsx(_components.code, {
              children: "application/json"
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
              children: "ext"
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
            children: "The extension information of the presence status. The size of the extension field can be a maximum of 1024 bytes."
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
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
            children: "String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether the setting of the presence status succeeds. ", _jsx(_components.code, {
              children: "ok"
            }), " indicates the presence setting succeeds; otherwise, you can troubleshoot according to the returned reasons."]
          })]
        })
      })]
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
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X POST 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/users/c1/presence/android_123423453246/0' \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Authorization: Bearer ' \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Content-Type: application/json' \\"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-d '{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"ext"'
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
              children: '"123"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}'"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"result"'
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
              children: "}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "subscribe-to-the-presence-status-of-multiple-users",
      children: "Subscribe to the presence status of multiple users"
    }), `
`, _jsx(_components.p, {
      children: "Subscribes to the presence status of multiple users."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 50 per second."
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
              children: "POST https://{host}/app-id/{app_id}/users/{uid}/presence/{expiry}"
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uid"
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
            children: "The user ID of user for which the presence status is subscribed."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "expiry"
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
            children: "The subscription duration in seconds. The maximum value is 2,592,000, which equals 30 days."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For the descriptions of the other path parameters, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common Parameters"
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
              children: "Content-Type"
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
            children: ["The content type. Set it to ", _jsx(_components.code, {
              children: "application/json"
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
            children: "JSON Array"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The list of users to whom you subscribe, for example, ", _jsx(_components.code, {
              children: "[“user1”, “user2”]"
            }), ". This list can contain a maximum of 100 usernames."]
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
            children: "JSON"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Whether the subscription succeeds. If successful, the presence statuses of the users return; otherwise, you can troubleshoot according to the returned reasons."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uid"
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
            children: "The unique login account of the user."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "last_time"
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
            children: "The Unix timestamp when the user was last online, in seconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "expiry"
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
            children: "The Unix timestamp when the subscription expires, in seconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "ext"
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
            children: "The extension information of the presence status."
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
            children: "JSON"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The presence statuses on multiple devices of the user. ", _jsx(_components.code, {
              children: "0"
            }), ": Offline. ", _jsx(_components.code, {
              children: "1"
            }), ": Online.Other strings: User-defined custom presence status."]
          })]
        })]
      })]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X POST 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/users/wzy/presence/1000' \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Authorization: Bearer ' \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Content-Type: application/json' \\"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-d '{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"usernames"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"c2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"c3"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]}'"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"result"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":[{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"uid"'
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
              children: '""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"last_time"'
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
              children: '"1644466063"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"expiry"'
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
              children: '"1645500371"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"ext"'
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
              children: '"123"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"status"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"android"'
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
              children: '"1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"android_6b5610ac-4e11-4661-82b3-dee17bc7b2cc"'
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
              children: '"0"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}},{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"uid"'
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
              children: '"c3"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"last_time"'
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
              children: '"1645183991"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"expiry"'
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
              children: '"1645500371"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"ext"'
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
              children: '""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"status"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"android"'
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
              children: '"0"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"android_6b5610ac-4e11-4661-82b3-dee17bc7b2cc"'
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
              children: '"0"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}}]}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "retrieve-the-presence-status-of-multiple-users",
      children: "Retrieve the presence status of multiple users"
    }), `
`, _jsx(_components.p, {
      children: "Retrieves the presence status of multiple users."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "By default, if a user logs in and out several times in one second, the Chat server sends the presence status change notification to the SDK only after the last login or logout of the user."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 50 per second."
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
              children: "POST https://{host}/app-id/{app_id}/users/{uid}/presence"
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
              children: "uid"
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
            children: "The user whose subscribed presence statuses are retrieved. If the user ID you passed does not exist or the user does not subscribe to the presence status of any users, an empty list is returned."
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
      children: ["For other parameters and descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common Parameters"
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
              children: "Content-Type"
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
            children: ["The content type. Set it to ", _jsx(_components.code, {
              children: "application/json"
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
            children: "JSON Array"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The list of users whose presence statuses you attempt to retrieve, for example, ", _jsx(_components.code, {
              children: "[“user1”, “user2”]"
            }), ". This list can contain a maximum of 100 usernames."]
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
            children: "JSON"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Whether the retrieving operation succeeds. If successful, the presence statuses of the users return; otherwise, you can troubleshoot according to the returned reasons."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uid"
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
            children: "The unique login account of the user."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "last_time"
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
            children: "The Unix timestamp when the user was last online, in seconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "ext"
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
            children: "The extension information of the presence status."
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
            children: "JSON"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The presence statuses on multiple devices of the user. ", _jsx(_components.code, {
              children: "0"
            }), ": Offline. ", _jsx(_components.code, {
              children: "1"
            }), ": Online.Other strings: User-defined custom presence status."]
          })]
        })]
      })]
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
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X POST 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/users/wzy/presence' \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Authorization: Bearer ' \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Content-Type: application/json' \\"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-d '{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"usernames"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"c2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"c3"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]}'"
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
              children: '"result"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":["
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"uid"'
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
              children: '"c2"'
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
              children: '  "last_time"'
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
              children: '"1644466063"'
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
              children: '  "ext"'
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
              children: '""'
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
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"android"'
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
              children: '"0"'
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
              children: "     },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"uid"'
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
              children: '"c3"'
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
              children: '   "last_time"'
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
              children: '"1644475330"'
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
              children: '   "ext"'
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
              children: '""'
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
              children: '   "status"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '       "android"'
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
              children: '"0"'
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
              children: '       "android"'
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
              children: '"0"'
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
              children: "    }]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "unsubscribe-from-the-presence-status-of-multiple-users",
      children: "Unsubscribe from the presence status of multiple users"
    }), `
`, _jsx(_components.p, {
      children: "Unsubscribes from the presence status of multiple users."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 50 per second."
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
              children: "DELETE https://{host}/app-id/{app_id}/users/{uid}/presence"
            })
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
              children: "uid"
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
            children: "The user whose subscribed presence statuses are unsubscribed from."
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
      children: ["For other parameters and descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common Parameters"
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
              children: "Content-Type"
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
            children: ["The content type. Set it to ", _jsx(_components.code, {
              children: "application/json"
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
              children: "users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Array"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The list of users from whom you unsubscribe, for example, ", _jsx(_components.code, {
              children: "[“user1”, “user2”]"
            }), ". This list can contain a maximum of 100 usernames."]
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
      id: "http-response-3",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-3",
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
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
            children: "String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether the subscription cancellation succeeds. ", _jsx(_components.code, {
              children: "ok"
            }), " indicates the subscription cancellation succeeds; otherwise, you can troubleshoot according to the returned reasons."]
          })]
        })
      })]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X DELETE 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/users/wzy/presence' \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Authorization: Bearer ' \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Content-Type: application/json' \\"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-d '["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"c1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]'"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"result"'
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
              children: "}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "retrieve-the-subscriptions-of-a-user",
      children: "Retrieve the subscriptions of a user"
    }), `
`, _jsx(_components.p, {
      children: "Retrieves the subscriptions of a user in a paginated list."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 50 per second."
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
              children: "GET https://{host}/app-id/{app_id}/users/{uid}/presence/sublist?pageNum=1&pageSize=100"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-4",
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
              children: "uid"
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
            children: "The user for which the subscriptions are retrieved."
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
      children: ["For other parameters and descriptions, see ", _jsx(_components.a, {
        href: "#param",
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
              children: "pageNum"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Int"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The page from which to start retrieving subscriptions. The parameter value must be no smaller than the default value ", _jsx(_components.code, {
              children: "1"
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
              children: "pageSize"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Int"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The maximum number of subscriptions to retrieve per page. The value range is [1,500] with ", _jsx(_components.code, {
              children: "1"
            }), " as the default."]
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
              children: "Content-Type"
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
            children: ["The content type. Set it to ", _jsx(_components.code, {
              children: "application/json"
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
`, _jsx(_components.h3, {
      id: "http-response-4",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-4",
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
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Whether the retrieving operation succeeds. If successful, the subscription information returns; otherwise, you can troubleshoot according to the returned reasons."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "totalnum"
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
            children: "The total number of the users you subscribe to."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "sublist"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The list of subscriptions. Each object in the list contains the ", _jsx(_components.code, {
              children: "uid"
            }), " and ", _jsx(_components.code, {
              children: "expiry"
            }), " fields."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uid"
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
            children: "The unique login account of the user."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "expiry"
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
            children: "The Unix timestamp when the subscription expires, in seconds"
          })]
        })]
      })]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X GET 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/users/wzy/presence/sublist?pageNum=1&pageSize=100' \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Authorization: Bearer ' \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "-H 'Content-Type: application/json' "
            })
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"result"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"totalnum"'
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
              children: '"2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"sublist"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":[{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"uid"'
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
              children: '"lxml2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"expiry"'
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
              children: '"1645822322"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "},{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"uid"'
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
              children: '"lxml1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"expiry"'
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
              children: '"1645822322"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}]}}%"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "status-codes",
      children: "Status codes"
    }), `
`, _jsxs(_components.p, {
      children: ["For details, see ", _jsx(_components.a, {
        href: "./http-status-codes",
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
