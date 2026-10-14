import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manage chat group block list",
  description: "Shows how to manage a chat group block list by calling the Agora Chat RESTful APIs."
};
export let _markdown = `

A chat group blocklist refers to a list of users that can neither see nor receive group messages. Chat provides a complete set of blocklist management methods, including adding and removing chat group members from the chat group blocklist, and retrieving the blocklist.

This page shows how to manage a chat group blocklist by calling the Chat RESTful APIs. Before calling the following methods, ensure that you understand the call frequency limit described in [Limitations](../limitations#call-limit-of-server-sides).

## Common parameters [#common-parameters]

The following table lists common request and response parameters of the Chat RESTful APIs:

### Request parameters [#request-parameters]

| Parameter  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required |
| :--------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`host\`     | String | The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see [Get the information of your project](/en/realtime-media/im/get-started/enable#get-chat-project-information).                                                                                                                                                                                                                               | Yes      |
| \`app_id\`   | String | The unique identifier automatically assigned to each project by Agora                                                                                                                                                                                                                                                                                                                                                                                | Yes      |
| \`username\` | String | The unique login account of the user. The user ID must be 64 characters or less and cannot be empty. The following character sets are supported:* 26 lowercase English letters (a-z)
* 10 numbers (0-9)
* "\\_", "-", "."<CalloutContainer type="info">
  <CalloutDescription>
    Do not use any of the 26 uppercase English letters (A-Z). Ensure that each \`username\` under the same App ID is unique.
  </CalloutDescription>
</CalloutContainer> | Yes      |

### Response parameters [#response-parameters]

| Parameter         | Type   | Description                                                                                          |
| :---------------- | :----- | :--------------------------------------------------------------------------------------------------- |
| \`action\`          | String | The request method.                                                                                  |
| \`organization\`    | String | The unique identifier assigned to each company (organization) by the Chat service.                   |
| \`application\`     | String | A unique internal ID assigned to each app by the Chat service. You can safely ignore this parameter. |
| \`applicationName\` | String | The unique identifier assigned to each app by the Chat service.                                      |
| \`uri\`             | String | The request URI.                                                                                     |
| \`path\`            | String | The request path, which is part of the request URI. You can safely ignore this parameter.            |
| \`entities \`       | JSON   | The response entity.                                                                                 |
| \`data\`            | JSON   | The details of the response.                                                                         |
| \`timestamp\`       | Number | The Unix timestamp (ms) of the HTTP response.                                                        |
| \`duration\`        | Number | The duration (ms) from when the HTTP request is sent to the time the response is received.           |

## Authorization [#authorization]

Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following \`Authorization\` field must be filled in the request header:

\`\`\`html
Authorization: Bearer \${YourAppToken}
\`\`\`

In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. Chat RESTful APIs only support authenticating users using app tokens. For details, see [Authentication using App Token](/en/realtime-media/im/build/secure-access-and-authentication/authentication).

## Retrieving the chat group blocklist [#retrieving-the-chat-group-blocklist]

Retrieves the blocklist of the specified chat group. Users added to the blocklist can neither see nor receive messages in the chat group.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request]

\`\`\`bash
GET https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users?pageSize={N}&cursor={cursor}
\`\`\`

#### Path parameter [#path-parameter]

| Parameter  | Type   | Description   | Required |
| :--------- | :----- | :------------ | :------- |
| \`group_id\` | String | The group ID. | Yes      |

For other parameters and detailed descriptions, see [Common parameters](#param).

#### Query parameter [#query-parameter]

| Parameter  | Type   | Description                                                | Required |
| :--------- | :----- | :--------------------------------------------------------- | :------- |
| \`pageSize\` | Number | The number of users on the blocklist to retrieve per page. | Yes      |
| \`cursor\`   | String | The position from which to start getting data.             | Yes      |

<CalloutContainer type="info">
  <CalloutDescription>
    If you pass in neither \`pageSize\` nor \`cursor\`, the server returns the top 500 users in the descending order of time when they are added to the blocklist. If you pass in only  \`pageSize\`, but not \`cursor\`, the server returns a maximum of 50 users in the descending order of time when they are added to the blocklist.
  </CalloutDescription>
</CalloutContainer>

#### Request header [#request-header]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | The parameter type. Set it as \`application/json\`.                                                                                                                                                | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response]

#### Response body [#response-body]

If the returned HTTP status code is 200, the request succeeds, and the \`data\` field in the response body contains the usernames in the group blocklist.

If the returned HTTP status code is not 200, the request fails. You can refer to [Status code ](#code) for possible causes.

### Example [#example]

#### Request example [#request-example]

\`\`\`bash
curl -X GET -H 'Accept: application/json' -H 'Authorization: Bearer ' 'https://XXXX/app-id/XXXX/chatgroups/66XXXX85/blocks/users?pageSize=2'
\`\`\`

#### Response example [#response-example]

\`\`\`json
{
    "uri": " https://XXXX/app-id/XXXX/chatgroups/66XXXX85/users/blocks/users",
    "timestamp": 1682064422108,
    "entities": [],
    "cursor": "MTA5OTAwMzMwNDUzNTA2ODY1NA==",
    "count": 2,
    "action": "get",
    "data": [
        "tst05",
        "tst04"
    ],
    "duration": 52
}
\`\`\`

## Adding a user to the chat group blocklist [#adding-a-user-to-the-chat-group-blocklist]

Adds the specified user to the chat group blocklist. Once added to the chat group blocklist, users can neither send nor receive messages in the chat group.

You cannot add the chat group owner to the group blocklist.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-1]

\`\`\`bash
POST https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}
\`\`\`

#### Path parameter [#path-parameter-1]

| Parameter  | Type   | Description   | Required |
| :--------- | :----- | :------------ | :------- |
| \`group_id\` | String | The group ID. | Yes      |

For other parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-1]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | The parameter type. Set it as \`application/json\`.                                                                                                                                                | Yes      |
| \`Accept\`        | String | The parameter type. Set it as \`application/json\`.                                                                                                                                                | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response-1]

#### Response body [#response-body-1]

If the returned HTTP status code is 200, the request succeeds, and the data field in the response body contains the following parameters.

| Parameter | Type    | Description                                                                                |
| :-------- | :------ | :----------------------------------------------------------------------------------------- |
| \`result\`  | Boolean | Whether the users are successfully added to the group blocklist. \`true\`: Yes. \`false\`: No. |
| \`groupid\` | String  | The group ID.                                                                              |
| \`action\`  | String  | The request method.                                                                        |
| \`user\`    | String  | The usernames added to the group blocklist.                                                |

For other fields and descriptions, see [Common parameters](#param).

If the returned HTTP status code is not 200, the request fails. You can refer to [Status code ](#code) for possible causes.

### Example [#example-1]

#### Request example [#request-example-1]

\`\`\`bash
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1'
\`\`\`

#### Response example [#response-example-1]

\`\`\`json
{
    "action": "post",
    "application": "8be024f0-XXXX-XXXX-b697-5d598d5f8402",
    "uri": "http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1",
    "entities": [],
    "data": {
      "result": true,
      "action": "add_blocks",
      "user": "user1"
      "groupid": "66016455491585"
    },
    "timestamp": 1542539577124,
    "duration": 27,
    "organization": "XXXX",
    "applicationName": "XXXX"
}
\`\`\`

## Adding multiple users to the chat group blocklist [#adding-multiple-users-to-the-chat-group-blocklist]

Adding multiple users to the group blocklist. Once added to the chat group blocklist, users can neither send nor receive messages in the chat group.

You can add a maximim of 60 users to the group blocklist each time. You cannot add the group owner to the group blocklist.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-2]

\`\`\`bash
POST https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users
\`\`\`

#### Path parameter [#path-parameter-2]

| Parameter  | Type   | Description   | Required |
| :--------- | :----- | :------------ | :------- |
| \`group_id\` | String | The group ID. | Yes      |

For other parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-2]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | The parameter type. Set it as \`application/json\`.                                                                                                                                                | Yes      |
| \`Accept\`        | String | The parameter type. Set it as \`application/json\`.                                                                                                                                                | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body]

| Parameter   | Type  | Description                                                | Required |
| :---------- | :---- | :--------------------------------------------------------- | :------- |
| \`usernames\` | Array | The array of usernames to be added to the group blocklist. | Yes      |

### HTTP response [#http-response-2]

#### Response body [#response-body-2]

If the returned HTTP status code is 200, the request succeeds, and the data field in the response body contains the following parameters.

| Parameter | Type    | Description                                                                                |
| :-------- | :------ | :----------------------------------------------------------------------------------------- |
| \`result\`  | Boolean | Whether the users are successfully added to the group blocklist. \`true\`: Yes. \`false\`: No. |
| \`reason\`  | String  | The reason why the users fail to be added to the group blocklist.                          |
| \`groupid\` | String  | The group ID.                                                                              |
| \`action\`  | String  | The request method.                                                                        |
| \`user\`    | String  | The usernames added to the group blocklist.                                                |

For other fields and descriptions, see [Common parameters](#param).

If the returned HTTP status code is not 200, the request fails. You can refer to [Status code ](#code) for possible causes.

### Example [#example-2]

#### Request example [#request-example-2]

\`\`\`bash
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer ' -d '{
    "usernames": [
      "user3","user4"
    ]
}' 'http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users'
\`\`\`

#### Response example [#response-example-2]

\`\`\`json
{
    "action": "post",
    "application": "8be024f0-XXXX-XXXX-b697-5d598d5f8402",
    "uri": "http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users",
    "entities": [],
    "data": [
      {
        "result": false,
        "action": "add_blocks",
        "reason": "user: user3 doesn't exist in group: 66016455491585",
        "user": "user3",
        "groupid": "66016455491585"
      },
      {
        "result": true,
        "action": "add_blocks",
        "user": "user4",
        "groupid": "66016455491585"
      }
    ],
    "timestamp": 1542540095540,
    "duration": 16,
    "organization": "XXXX",
    "applicationName": "XXXX"
}
\`\`\`

## Removing a user from the chat group blocklist [#removing-a-user-from-the-chat-group-blocklist]

Removes the specified user from the chat group blocklist. To add a user that is in the blocklist back to the chat group, you need to remove that user from the blocklist first.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-3]

\`\`\`bash
DELETE https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}
\`\`\`

#### Path parameter [#path-parameter-3]

| Parameter  | Type   | Description   | Required |
| :--------- | :----- | :------------ | :------- |
| \`group_id\` | String | The group ID. | Yes      |

For other parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-3]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | The parameter type. Set it as \`application/json\`.                                                                                                                                                | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response-3]

#### Response body [#response-body-3]

If the returned HTTP status code is 200, the request succeeds, and the data field in the response body contains the following parameters.

| Parameter | Type    | Description                                                                             |
| :-------- | :------ | :-------------------------------------------------------------------------------------- |
| \`result\`  | Boolean | Whether the user is successfully removed from the group blocklist. true: Yes.false: No. |
| \`groupid\` | String  | The group ID.                                                                           |
| \`action\`  | String  | The request method.                                                                     |
| \`user\`    | String  | The usernames removed from the group blocklist.                                         |

For other fields and descriptions, see [Common parameters](#param).

If the returned HTTP status code is not 200, the request fails. You can refer to [Status code ](#code) for possible causes.

### Example [#example-3]

#### Request example [#request-example-3]

\`\`\`bash
curl -X DELETE -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1'
\`\`\`

#### Response example [#response-example-3]

\`\`\`json
{
    "action": "delete",
    "application": "8be024f0-XXXX-XXXX-b697-5d598d5f8402",
    "uri": "http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1",
    "entities": [],
    "data": {
      "result": true,
      "action": "remove_blocks",
      "user": "user1"
      "groupid": "66016455491585"
    },
    "timestamp": 1542540470679,
    "duration": 45,
    "organization": "XXXX",
    "applicationName": "XXXX"
}
\`\`\`

## Removing multiple users from the chat group blocklist [#removing-multiple-users-from-the-chat-group-blocklist]

Removes the specified users from the group blocklist. To add users that are in the blocklist back to the chat group, you need to remove these users from the blocklist first. You can remove up to 60 users from the blocklist each time.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-4]

\`\`\`bash
DELETE https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{usernames}
\`\`\`

#### Path parameter [#path-parameter-4]

| Parameter   | Type   | Description                                                                       | Required |
| :---------- | :----- | :-------------------------------------------------------------------------------- | :------- |
| \`group_id\`  | String | The group ID.                                                                     | Yes      |
| \`usernames\` | String | The usernames to be removed from the group blocklist, separated by the comma (,). | Yes      |

For other parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-4]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | The parameter type. Set it as \`application/json\`.                                                                                                                                                | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response-4]

#### Response body [#response-body-4]

If the returned HTTP status code is 200, the request succeeds, and the \`data\` field in the response body contains the following parameters.

| Parameter | Type    | Description                                                                   |
| :-------- | :------ | :---------------------------------------------------------------------------- |
| Parameter | Type    | Description                                                                   |
| \`result\`  | Boolean | Whether the user is successfully removed from the group. true: Yes.false: No. |
| \`groupid\` | String  | The group ID.                                                                 |
| \`action\`  | String  | The request method.                                                           |
| \`user\`    | String  | The usernames removed from the group blocklist.                               |

For other fields and descriptions, see [Common parameters](#param).

If the returned HTTP status code is not 200, the request fails. You can refer to [Status code ](#code) for possible causes.

### Example [#example-4]

#### Request example [#request-example-4]

\`\`\`bash
curl -X DELETE -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1%2Cuser2'
\`\`\`

#### Response example [#response-example-4]

\`\`\`json
{
    "action": "delete",
    "application": "8be024f0-XXXX-XXXX-b697-5d598d5f8402",
    "uri": "http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1%2Cuser2",
    "entities": [],
    "data": [
      {
        "result": true,
        "action": "remove_blocks",
        "user": "user1"
        "groupid": "66016455491585"
      },
      {
        "result": true,
        "action": "remove_blocks",
        "user": "user2",
        "groupid": "66016455491585"
      }
    ],
    "timestamp": 1542541014655,
    "duration": 29,
    "organization": "XXXX",
    "applicationName": "XXXX"
}
\`\`\`

## Status codes [#status-codes]

For details, see [HTTP Status Code](../http-status-codes).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A chat group blocklist refers to a list of users that can neither see nor receive group messages. Chat provides a complete set of blocklist management methods, including adding and removing chat group members from the chat group blocklist, and retrieving the blocklist."
  }, {
    heading: undefined,
    content: "This page shows how to manage a chat group blocklist by calling the Chat RESTful APIs. Before calling the following methods, ensure that you understand the call frequency limit described in Limitations."
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
    heading: "request-parameters",
    content: "`username`"
  }, {
    heading: "request-parameters",
    content: "String"
  }, {
    heading: "request-parameters",
    content: 'The unique login account of the user. The user ID must be 64 characters or less and cannot be empty. The following character sets are supported:* 26 lowercase English letters (a-z)\n* 10 numbers (0-9)\n* "\\_", "-", "."Do not use any of the 26 uppercase English letters (A-Z). Ensure that each `username` under the same App ID is unique.'
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
    heading: "retrieving-the-chat-group-blocklist",
    content: "Retrieves the blocklist of the specified chat group. Users added to the blocklist can neither see nor receive messages in the chat group."
  }, {
    heading: "retrieving-the-chat-group-blocklist",
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
    content: "`group_id`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "The group ID."
  }, {
    heading: "path-parameter",
    content: "Yes"
  }, {
    heading: "path-parameter",
    content: "For other parameters and detailed descriptions, see Common parameters."
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
    content: "`pageSize`"
  }, {
    heading: "query-parameter",
    content: "Number"
  }, {
    heading: "query-parameter",
    content: "The number of users on the blocklist to retrieve per page."
  }, {
    heading: "query-parameter",
    content: "Yes"
  }, {
    heading: "query-parameter",
    content: "`cursor`"
  }, {
    heading: "query-parameter",
    content: "String"
  }, {
    heading: "query-parameter",
    content: "The position from which to start getting data."
  }, {
    heading: "query-parameter",
    content: "Yes"
  }, {
    heading: "query-parameter",
    content: "If you pass in neither `pageSize` nor `cursor`, the server returns the top 500 users in the descending order of time when they are added to the blocklist. If you pass in only  `pageSize`, but not `cursor`, the server returns a maximum of 50 users in the descending order of time when they are added to the blocklist."
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
    content: "The parameter type. Set it as `application/json`."
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
    heading: "response-body",
    content: "If the returned HTTP status code is 200, the request succeeds, and the `data` field in the response body contains the usernames in the group blocklist."
  }, {
    heading: "response-body",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to Status code  for possible causes."
  }, {
    heading: "adding-a-user-to-the-chat-group-blocklist",
    content: "Adds the specified user to the chat group blocklist. Once added to the chat group blocklist, users can neither send nor receive messages in the chat group."
  }, {
    heading: "adding-a-user-to-the-chat-group-blocklist",
    content: "You cannot add the chat group owner to the group blocklist."
  }, {
    heading: "adding-a-user-to-the-chat-group-blocklist",
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
    content: "`group_id`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "The group ID."
  }, {
    heading: "path-parameter-1",
    content: "Yes"
  }, {
    heading: "path-parameter-1",
    content: "For other parameters and detailed descriptions, see Common parameters."
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
    content: "The parameter type. Set it as `application/json`."
  }, {
    heading: "request-header-1",
    content: "Yes"
  }, {
    heading: "request-header-1",
    content: "`Accept`"
  }, {
    heading: "request-header-1",
    content: "String"
  }, {
    heading: "request-header-1",
    content: "The parameter type. Set it as `application/json`."
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
    heading: "response-body-1",
    content: "If the returned HTTP status code is 200, the request succeeds, and the data field in the response body contains the following parameters."
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
    content: "Boolean"
  }, {
    heading: "response-body-1",
    content: "Whether the users are successfully added to the group blocklist. `true`: Yes. `false`: No."
  }, {
    heading: "response-body-1",
    content: "`groupid`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The group ID."
  }, {
    heading: "response-body-1",
    content: "`action`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The request method."
  }, {
    heading: "response-body-1",
    content: "`user`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The usernames added to the group blocklist."
  }, {
    heading: "response-body-1",
    content: "For other fields and descriptions, see Common parameters."
  }, {
    heading: "response-body-1",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to Status code  for possible causes."
  }, {
    heading: "adding-multiple-users-to-the-chat-group-blocklist",
    content: "Adding multiple users to the group blocklist. Once added to the chat group blocklist, users can neither send nor receive messages in the chat group."
  }, {
    heading: "adding-multiple-users-to-the-chat-group-blocklist",
    content: "You can add a maximim of 60 users to the group blocklist each time. You cannot add the group owner to the group blocklist."
  }, {
    heading: "adding-multiple-users-to-the-chat-group-blocklist",
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
    content: "`group_id`"
  }, {
    heading: "path-parameter-2",
    content: "String"
  }, {
    heading: "path-parameter-2",
    content: "The group ID."
  }, {
    heading: "path-parameter-2",
    content: "Yes"
  }, {
    heading: "path-parameter-2",
    content: "For other parameters and detailed descriptions, see Common parameters."
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
    content: "The parameter type. Set it as `application/json`."
  }, {
    heading: "request-header-2",
    content: "Yes"
  }, {
    heading: "request-header-2",
    content: "`Accept`"
  }, {
    heading: "request-header-2",
    content: "String"
  }, {
    heading: "request-header-2",
    content: "The parameter type. Set it as `application/json`."
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
    content: "Array"
  }, {
    heading: "request-body",
    content: "The array of usernames to be added to the group blocklist."
  }, {
    heading: "request-body",
    content: "Yes"
  }, {
    heading: "response-body-2",
    content: "If the returned HTTP status code is 200, the request succeeds, and the data field in the response body contains the following parameters."
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
    content: "Whether the users are successfully added to the group blocklist. `true`: Yes. `false`: No."
  }, {
    heading: "response-body-2",
    content: "`reason`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The reason why the users fail to be added to the group blocklist."
  }, {
    heading: "response-body-2",
    content: "`groupid`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The group ID."
  }, {
    heading: "response-body-2",
    content: "`action`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The request method."
  }, {
    heading: "response-body-2",
    content: "`user`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The usernames added to the group blocklist."
  }, {
    heading: "response-body-2",
    content: "For other fields and descriptions, see Common parameters."
  }, {
    heading: "response-body-2",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to Status code  for possible causes."
  }, {
    heading: "removing-a-user-from-the-chat-group-blocklist",
    content: "Removes the specified user from the chat group blocklist. To add a user that is in the blocklist back to the chat group, you need to remove that user from the blocklist first."
  }, {
    heading: "removing-a-user-from-the-chat-group-blocklist",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
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
    content: "`group_id`"
  }, {
    heading: "path-parameter-3",
    content: "String"
  }, {
    heading: "path-parameter-3",
    content: "The group ID."
  }, {
    heading: "path-parameter-3",
    content: "Yes"
  }, {
    heading: "path-parameter-3",
    content: "For other parameters and detailed descriptions, see Common parameters."
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
    content: "The parameter type. Set it as `application/json`."
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
    heading: "response-body-3",
    content: "If the returned HTTP status code is 200, the request succeeds, and the data field in the response body contains the following parameters."
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
    content: "Boolean"
  }, {
    heading: "response-body-3",
    content: "Whether the user is successfully removed from the group blocklist. true: Yes.false: No."
  }, {
    heading: "response-body-3",
    content: "`groupid`"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The group ID."
  }, {
    heading: "response-body-3",
    content: "`action`"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The request method."
  }, {
    heading: "response-body-3",
    content: "`user`"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The usernames removed from the group blocklist."
  }, {
    heading: "response-body-3",
    content: "For other fields and descriptions, see Common parameters."
  }, {
    heading: "response-body-3",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to Status code  for possible causes."
  }, {
    heading: "removing-multiple-users-from-the-chat-group-blocklist",
    content: "Removes the specified users from the group blocklist. To add users that are in the blocklist back to the chat group, you need to remove these users from the blocklist first. You can remove up to 60 users from the blocklist each time."
  }, {
    heading: "removing-multiple-users-from-the-chat-group-blocklist",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
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
    content: "`group_id`"
  }, {
    heading: "path-parameter-4",
    content: "String"
  }, {
    heading: "path-parameter-4",
    content: "The group ID."
  }, {
    heading: "path-parameter-4",
    content: "Yes"
  }, {
    heading: "path-parameter-4",
    content: "`usernames`"
  }, {
    heading: "path-parameter-4",
    content: "String"
  }, {
    heading: "path-parameter-4",
    content: "The usernames to be removed from the group blocklist, separated by the comma (,)."
  }, {
    heading: "path-parameter-4",
    content: "Yes"
  }, {
    heading: "path-parameter-4",
    content: "For other parameters and detailed descriptions, see Common parameters."
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
    content: "The parameter type. Set it as `application/json`."
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
    content: "If the returned HTTP status code is 200, the request succeeds, and the `data` field in the response body contains the following parameters."
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
    content: "Boolean"
  }, {
    heading: "response-body-4",
    content: "Whether the user is successfully removed from the group. true: Yes.false: No."
  }, {
    heading: "response-body-4",
    content: "`groupid`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The group ID."
  }, {
    heading: "response-body-4",
    content: "`action`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The request method."
  }, {
    heading: "response-body-4",
    content: "`user`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The usernames removed from the group blocklist."
  }, {
    heading: "response-body-4",
    content: "For other fields and descriptions, see Common parameters."
  }, {
    heading: "response-body-4",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to Status code  for possible causes."
  }, {
    heading: "status-codes",
    content: "For details, see HTTP Status Code."
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
    id: "retrieving-the-chat-group-blocklist",
    content: "Retrieving the chat group blocklist"
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
    id: "adding-a-user-to-the-chat-group-blocklist",
    content: "Adding a user to the chat group blocklist"
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
    id: "adding-multiple-users-to-the-chat-group-blocklist",
    content: "Adding multiple users to the chat group blocklist"
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
    id: "request-body",
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
    id: "removing-a-user-from-the-chat-group-blocklist",
    content: "Removing a user from the chat group blocklist"
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
    id: "removing-multiple-users-from-the-chat-group-blocklist",
    content: "Removing multiple users from the chat group blocklist"
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
  url: "#retrieving-the-chat-group-blocklist",
  title: _jsx(_Fragment, {
    children: "Retrieving the chat group blocklist"
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
  url: "#adding-a-user-to-the-chat-group-blocklist",
  title: _jsx(_Fragment, {
    children: "Adding a user to the chat group blocklist"
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
  url: "#adding-multiple-users-to-the-chat-group-blocklist",
  title: _jsx(_Fragment, {
    children: "Adding multiple users to the chat group blocklist"
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
  url: "#request-body",
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
  url: "#removing-a-user-from-the-chat-group-blocklist",
  title: _jsx(_Fragment, {
    children: "Removing a user from the chat group blocklist"
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
  url: "#removing-multiple-users-from-the-chat-group-blocklist",
  title: _jsx(_Fragment, {
    children: "Removing multiple users from the chat group blocklist"
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
      children: "A chat group blocklist refers to a list of users that can neither see nor receive group messages. Chat provides a complete set of blocklist management methods, including adding and removing chat group members from the chat group blocklist, and retrieving the blocklist."
    }), `
`, _jsxs(_components.p, {
      children: ["This page shows how to manage a chat group blocklist by calling the Chat RESTful APIs. Before calling the following methods, ensure that you understand the call frequency limit described in ", _jsx(_components.a, {
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
              children: "The unique login account of the user. The user ID must be 64 characters or less and cannot be empty. The following character sets are supported:"
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
                children: _jsxs(_components.p, {
                  children: ["Do not use any of the 26 uppercase English letters (A-Z). Ensure that each ", _jsx(_components.code, {
                    children: "username"
                  }), " under the same App ID is unique."]
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
      id: "retrieving-the-chat-group-blocklist",
      children: "Retrieving the chat group blocklist"
    }), `
`, _jsx(_components.p, {
      children: "Retrieves the blocklist of the specified chat group. Users added to the blocklist can neither see nor receive messages in the chat group."
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
              children: " https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users?pageSize={N}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&cursor"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "cursor}"
            })]
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
              children: "group_id"
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
            children: "The group ID."
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
      children: ["For other parameters and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
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
              children: "pageSize"
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
            children: "The number of users on the blocklist to retrieve per page."
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
              children: "cursor"
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
            children: "The position from which to start getting data."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you pass in neither ", _jsx(_components.code, {
            children: "pageSize"
          }), " nor ", _jsx(_components.code, {
            children: "cursor"
          }), ", the server returns the top 500 users in the descending order of time when they are added to the blocklist. If you pass in only  ", _jsx(_components.code, {
            children: "pageSize"
          }), ", but not ", _jsx(_components.code, {
            children: "cursor"
          }), ", the server returns a maximum of 50 users in the descending order of time when they are added to the blocklist."]
        })
      })
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
            children: ["The parameter type. Set it as ", _jsx(_components.code, {
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
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body",
      children: "Response body"
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is 200, the request succeeds, and the ", _jsx(_components.code, {
        children: "data"
      }), " field in the response body contains the usernames in the group blocklist."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status code "
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " GET"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://XXXX/app-id/XXXX/chatgroups/66XXXX85/blocks/users?pageSize=2'"
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
              children: '" https://XXXX/app-id/XXXX/chatgroups/66XXXX85/users/blocks/users"'
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
              children: "1682064422108"
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
              children: ": [],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cursor"'
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
              children: '"MTA5OTAwMzMwNDUzNTA2ODY1NA=="'
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
              children: '    "count"'
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
              children: '        "tst05"'
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
              children: '        "tst04"'
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
              children: "52"
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
      id: "adding-a-user-to-the-chat-group-blocklist",
      children: "Adding a user to the chat group blocklist"
    }), `
`, _jsx(_components.p, {
      children: "Adds the specified user to the chat group blocklist. Once added to the chat group blocklist, users can neither send nor receive messages in the chat group."
    }), `
`, _jsx(_components.p, {
      children: "You cannot add the chat group owner to the group blocklist."
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
              children: " https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}"
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
              children: "group_id"
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
            children: "The group ID."
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
      children: ["For other parameters and detailed descriptions, see ", _jsx(_components.a, {
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
            children: ["The parameter type. Set it as ", _jsx(_components.code, {
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
              children: "Accept"
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
            children: ["The parameter type. Set it as ", _jsx(_components.code, {
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
      id: "http-response-1",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-1",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "If the returned HTTP status code is 200, the request succeeds, and the data field in the response body contains the following parameters."
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
            children: ["Whether the users are successfully added to the group blocklist. ", _jsx(_components.code, {
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
              children: "groupid"
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
            children: "The group ID."
          })]
        }), _jsxs(_components.tr, {
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
            children: "The usernames added to the group blocklist."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status code "
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " 'Authorization: Bearer '"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1'"
            })]
          })
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
              children: '    "application"'
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
              children: '"8be024f0-XXXX-XXXX-b697-5d598d5f8402"'
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
              children: '"http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1"'
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
              children: ": [],"
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
              children: '      "result"'
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
              children: '      "action"'
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
              children: '"add_blocks"'
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
              children: '      "user"'
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
              children: '"user1"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "groupid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "66016455491585"'
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
              children: "1542539577124"
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
              children: "27"
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
              children: '"XXXX"'
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
      id: "adding-multiple-users-to-the-chat-group-blocklist",
      children: "Adding multiple users to the chat group blocklist"
    }), `
`, _jsx(_components.p, {
      children: "Adding multiple users to the group blocklist. Once added to the chat group blocklist, users can neither send nor receive messages in the chat group."
    }), `
`, _jsx(_components.p, {
      children: "You can add a maximim of 60 users to the group blocklist each time. You cannot add the group owner to the group blocklist."
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
              children: " https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users"
            })]
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
              children: "group_id"
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
            children: "The group ID."
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
      children: ["For other parameters and detailed descriptions, see ", _jsx(_components.a, {
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
            children: ["The parameter type. Set it as ", _jsx(_components.code, {
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
              children: "Accept"
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
            children: ["The parameter type. Set it as ", _jsx(_components.code, {
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
              children: "usernames"
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
            children: "The array of usernames to be added to the group blocklist."
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
`, _jsx(_components.p, {
      children: "If the returned HTTP status code is 200, the request succeeds, and the data field in the response body contains the following parameters."
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
            children: ["Whether the users are successfully added to the group blocklist. ", _jsx(_components.code, {
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
              children: "reason"
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
            children: "The reason why the users fail to be added to the group blocklist."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "groupid"
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
            children: "The group ID."
          })]
        }), _jsxs(_components.tr, {
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
            children: "The usernames added to the group blocklist."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status code "
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
              children: '    "usernames": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "user3","user4"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    ]"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users'"
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
              children: '    "application"'
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
              children: '"8be024f0-XXXX-XXXX-b697-5d598d5f8402"'
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
              children: '"http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users"'
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
              children: ": [],"
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
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "result"'
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
              children: '        "action"'
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
              children: '"add_blocks"'
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
              children: '        "reason"'
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
              children: `"user: user3 doesn't exist in group: 66016455491585"`
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
              children: '        "user"'
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
              children: '"user3"'
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
              children: '        "groupid"'
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
              children: '"66016455491585"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "result"'
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
              children: '        "action"'
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
              children: '"add_blocks"'
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
              children: '        "user"'
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
              children: '"user4"'
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
              children: '        "groupid"'
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
              children: '"66016455491585"'
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
              children: "1542540095540"
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
              children: "16"
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
              children: '"XXXX"'
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
      id: "removing-a-user-from-the-chat-group-blocklist",
      children: "Removing a user from the chat group blocklist"
    }), `
`, _jsx(_components.p, {
      children: "Removes the specified user from the chat group blocklist. To add a user that is in the blocklist back to the chat group, you need to remove that user from the blocklist first."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 100 per second."
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
              children: "DELETE"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}"
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
              children: "group_id"
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
            children: "The group ID."
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
      children: ["For other parameters and detailed descriptions, see ", _jsx(_components.a, {
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The parameter type. Set it as ", _jsx(_components.code, {
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
      id: "http-response-3",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-3",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "If the returned HTTP status code is 200, the request succeeds, and the data field in the response body contains the following parameters."
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
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Whether the user is successfully removed from the group blocklist. true: Yes.false: No."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "groupid"
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
            children: "The group ID."
          })]
        }), _jsxs(_components.tr, {
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
            children: "The usernames removed from the group blocklist."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status code "
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1'"
            })]
          })
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
              children: '    "application"'
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
              children: '"8be024f0-XXXX-XXXX-b697-5d598d5f8402"'
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
              children: '"http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1"'
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
              children: ": [],"
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
              children: '      "result"'
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
              children: '      "action"'
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
              children: '"remove_blocks"'
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
              children: '      "user"'
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
              children: '"user1"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "groupid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "66016455491585"'
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
              children: "1542540470679"
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
              children: "45"
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
              children: '"XXXX"'
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
      id: "removing-multiple-users-from-the-chat-group-blocklist",
      children: "Removing multiple users from the chat group blocklist"
    }), `
`, _jsx(_components.p, {
      children: "Removes the specified users from the group blocklist. To add users that are in the blocklist back to the chat group, you need to remove these users from the blocklist first. You can remove up to 60 users from the blocklist each time."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 100 per second."
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
              children: " https://{host}/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{usernames}"
            })]
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "group_id"
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
            children: "The group ID."
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
              children: "usernames"
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
            children: "The usernames to be removed from the group blocklist, separated by the comma (,)."
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
      children: ["For other parameters and detailed descriptions, see ", _jsx(_components.a, {
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The parameter type. Set it as ", _jsx(_components.code, {
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
      children: ["If the returned HTTP status code is 200, the request succeeds, and the ", _jsx(_components.code, {
        children: "data"
      }), " field in the response body contains the following parameters."]
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
            children: "Parameter"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Type"
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
              children: "result"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Boolean"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Whether the user is successfully removed from the group. true: Yes.false: No."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "groupid"
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
            children: "The group ID."
          })]
        }), _jsxs(_components.tr, {
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
            children: "The usernames removed from the group blocklist."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status code "
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1%2Cuser2'"
            })]
          })
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
              children: '    "application"'
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
              children: '"8be024f0-XXXX-XXXX-b697-5d598d5f8402"'
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
              children: '"http://XXXX/app-id/XXXX/chatgroups/66016455491585/blocks/users/user1%2Cuser2"'
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
              children: ": [],"
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
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "result"'
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
              children: '        "action"'
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
              children: '"remove_blocks"'
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
              children: '        "user"'
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
              children: '"user1"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "groupid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "66016455491585"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "result"'
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
              children: '        "action"'
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
              children: '"remove_blocks"'
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
              children: '        "user"'
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
              children: '"user2"'
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
              children: '        "groupid"'
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
              children: '"66016455491585"'
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
              children: "1542541014655"
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
              children: "29"
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
              children: '"XXXX"'
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
        children: "HTTP Status Code"
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
