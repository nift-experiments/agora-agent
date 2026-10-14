import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manage chat room members",
  description: "Shows how to manage chat room members by calling the Agora Chat RESTful APIs."
};
export let _markdown = `

This page shows how to manage chat room members by calling the Chat RESTful APIs, including adding, retrieving, and deleting chat room members and revoking administrative privileges of chat room administrators.
Before calling the following methods, ensure that you understand the call frequency limit of the Chat RESTful APIs described in [Limitations](../limitations#call-limit-of-server-sides).

## Description of chat room member roles [#description-of-chat-room-member-roles]

| Role            | Description                                                                                      | Privilege                                                                                                                                       |
| :-------------- | :----------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| Regular member  | Chat room members without administrative privileges.                                             | Regular chat room members can modify their own chat room profiles.                                                                              |
| chat room admin | Chat room admins are authorized by the chat room owner and have chat room management privileges. | The admins can manage regular members of the chat room.  A maximum of 99 admins can be added.                                                   |
| chat room owner | The creator of the chat room. Chat room owners have the highest privileges.                      | The chat room owner can add chat room admins, disband the chat room, modify chat room information, and manage regular members of the chat room. |

## Common parameters [#common-parameters]

The following table lists common request and response parameters of the Chat RESTful APIs:

### Request parameters [#request-parameters]

| Parameter     | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required |
| :------------ | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`host\`        | String | The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see [Get the information of your project](/en/realtime-media/im/get-started/enable#get-chat-project-information).                                                                                                                                                                                                                               | Yes      |
| \`app_id\`      | String | The unique identifier automatically assigned to each project by Agora                                                                                                                                                                                                                                                                                                                                                                                | Yes      |
| \`username\`    | String | The unique login account of the user. The user ID must be 64 characters or less and cannot be empty. The following character sets are supported:* 26 lowercase English letters (a-z)
* 10 numbers (0-9)
* "\\_", "-", "."<CalloutContainer type="info">
  <CalloutDescription>
    Do not use any of the 26 uppercase English letters (A-Z). Ensure that each \`username\` under the same App ID is unique.
  </CalloutDescription>
</CalloutContainer> | Yes      |
| \`chatroom_id\` | String | The chat room ID. The unique chat room identifier assigned to each chat room by the Chat. You can get the chat room ID from the response body in [Retrieve the basic information of all chat rooms](manage-chatrooms#retrieving-basic-information-of-all-chat-rooms).                                                                                                                                                                                | Yes      |

### Response parameters [#response-parameters]

| Parameter           | Type   | Description                                                                                          |
| :------------------ | :----- | :--------------------------------------------------------------------------------------------------- |
| \`action\`            | String | The request method.                                                                                  |
| \`organization\`      | String | The unique identifier assigned to each company (organization) by the Chat service.                   |
| \`application\`       | String | A unique internal ID assigned to each app by the Chat service. You can safely ignore this parameter. |
| \`applicationName\`   | String | The unique identifier assigned to each app by the Chat service .                                     |
| \`uri\`               | String | The request URI.                                                                                     |
| \`path\`              | String | The request path, which is part of the request URL. You can safely ignore this parameter.            |
| \`entities \`         | JSON   | The response entity.                                                                                 |
| \`entities.created\`  | Number | The Unix timestamp (ms) when the user is registered.                                                 |
| \`entities.username\` | String | The username. The unique account the user is logged in with.                                         |
| \`data\`              | JSON   | The details of the response.                                                                         |
| \`timestamp\`         | Number | The Unix timestamp (ms) when the user is registered.                                                 |
| \`duration\`          | Number | The time duration (ms) from sending the HTTP request to receiving the response.                      |

## Adding a chat room member [#adding-a-chat-room-member]

Adds the specified user to the chat room.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request]

\`\`\`html
POST https://{host}/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}
\`\`\`

#### Path parameter [#path-parameter]

For the parameters and detailed descriptions, see [Common parameters ](#param).

> If the specified user does not exist in the app or is already a member of the chat room, the request fails and the error code \`400\` is returned.

#### Request header [#request-header]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response]

#### Response body [#response-body]

If the returned HTTP status code is \`200\`, the request succeeds, and the response body contains the following fields:

| Field    | Type   | Description                                                                                    |
| :------- | :----- | :--------------------------------------------------------------------------------------------- |
| \`result\` | Bool   | The addition result: \`true\`: Success. \`false\`: Failure.                                        |
| \`action\` | String | The operation that is performed. \`add_member\` means to add a member to the chat room.          |
| \`id\`     | String | The chat room ID. This is the unique identifier assigned to the chat room by the Chat service. |
| \`user\`   | String | The array of usernames of the existing chat room members.                                      |

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#code) for possible reasons.

### Example [#example]

#### Request example [#request-example]

\`\`\`json
# Replace  with the app token generated in your server.
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http://XXXX/app-id/XXXX/chatrooms/XXXX/users/XXXX'
\`\`\`

#### Response example [#response-example]

\`\`\`json
{
    "action": "post",
    "application": "8be024f0-XXXX-XXXX-b697-5d598d5f8402",
    "uri": "http://XXXX/app-id/XXXX/chatrooms/XXXX/users/XXXX",
    "entities": [],
    "data": {
        "result": true,
        "action": "add_member",
        "id": "XXXX",
        "user": "user1"
    },
    "timestamp": 1542554038353,
    "duration": 0,
    "organization": "XXXX",
    "applicationName": "XXXX"
}
\`\`\`

## Adding multiple chat room members [#adding-multiple-chat-room-members]

Adds multiple specified users to the chat room.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-1]

\`\`\`html
POST https://{host}/app-id/{app_id}/chatrooms/{chatroomid}/users
\`\`\`

#### Path parameter [#path-parameter-1]

For the parameters and detailed descriptions, see [Common parameters ](#param).

<CalloutContainer type="info">
  <CalloutDescription>
    You can add at most 60 users each time.
  </CalloutDescription>
</CalloutContainer>

#### Request header [#request-header-1]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body]

The request body is a JSON object, which contains the following fields:

| Field       | Type      | Description                                                                        | Required |
| :---------- | :-------- | :--------------------------------------------------------------------------------- | :------- |
| \`usernames\` | JSONArray | The array of usernames of chat room members that you want to add to the chat room. | Yes      |

### HTTP response [#http-response-1]

#### Response body [#response-body-1]

If the returned HTTP status code is \`200\`, the request succeeds, and the response body contains the following fields:

| Field        | Type      | Description                                                                            |
| :----------- | :-------- | :------------------------------------------------------------------------------------- |
| \`newmembers\` | JSONArray | The array of usernames of the existing chat room members.                              |
| \`action\`     | String    | The operation that is performed. \`add_member\` means to add a member to the chat room.  |
| \`id\`         | String    | The chat room ID. This is the unique identifier assigned to the chat room by the Chat. |

For other fields and detailed descriptions, see [Common parameters](#param).

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#code) for possible reasons.

### Example [#example-1]

#### Request example [#request-example-1]

\`\`\`json
# Replace  with the app token generated in your server.
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer ' -d '{
   "usernames": [
     "user": "user2"
   ]
 }' 'http://XXXX/app-id/XXXX/chatrooms/XXXX/users'
\`\`\`

#### Response example [#response-example-1]

\`\`\`json
{
    "action": "post",
    "application": "8be024f0-XXXX-XXXX-b697-5d598d5f8402",
    "uri": "http://XXXX/app-id/XXXX/chatrooms/XXXX/users",
    "entities": [],
    "data": {
        "newmembers": ["user1", "user2"],
        "action": "add_member",
        "id": "XXXX"
    },
    "timestamp": 1542554537237,
    "duration": 39,
    "organization": "XXXX",
    "applicationName": "XXXX"
}
\`\`\`

## Retrieving members with pagination [#retrieving-members-with-pagination]

Retrieves members with pagination.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-2]

\`\`\`html
GET https://{host}/app-id/{app_id}/chatrooms/{chatroom_id}/users?pagenum={N}&pagesize={N}
\`\`\`

#### Path parameter [#path-parameter-2]

For the parameters and detailed descriptions, see [Common parameters ](#param).

#### Query parameters [#query-parameters]

| Parameter  | Type | Description                                                                                                                                                                                                   | Required |
| :--------- | :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| \`pagenum\`  | Int  | The page number on which chat room members are retrieved. The default value is 1.                                                                                                                             | No       |
| \`pagesize\` | Int  | The number of chat room members displayed on each page. The default value is 1000. The value range is \\[0,1000]. If you pass in a value greater than \`1000\`, the server still returns 1000 chat room members. | No       |

#### Request header [#request-header-2]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response-2]

#### Response body [#response-body-2]

If the returned HTTP status code is \`200\`, the request succeeds, and the response body contains the following fields:

| Field    | Type   | Description                                                                                       |
| :------- | :----- | :------------------------------------------------------------------------------------------------ |
| \`owner\`  | String | The username of the chat room owner, for example, \`{"owner":"user1"}\`.                            |
| \`member\` | String | The username of a chat room admin or regular chat room member, for example, \`{"member":"user2"}\`. |
| \`count\`  | String | The number of chat room members retrieved at this call of this API.                               |

For other fields and detailed descriptions, see [Common parameters](#param).

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#code) for possible reasons.

### Example [#example-2]

#### Request example [#request-example-2]

\`\`\`json
# Replace  with the app token generated in your server.
curl -X GET -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http://XXXX/app-id/XXXX/chatrooms/XXXX/users?pagenum=2&pagesize=2'
\`\`\`

#### Response example [#response-example-2]

\`\`\`json
{
    "action": "get",
    "application": "527cd7e0-XXXX-XXXX-9f59-ef10ecd81ff0",
    "params": {
        "pagesize": ["2"],
        "pagenum": ["2"]
    },
    "uri": "http://XXXX/app-id/XXXX/chatrooms/XXXX/users",
    "entities": [],
    "data": [
        {
            "owner": "user1"
        },
        {
            "member": "user2"
        }
    ],
    "timestamp": 1489074511416,
    "duration": 0,
    "organization": "XXXX",
    "applicationName": "XXXX",
    "count": 2
}
\`\`\`

## Removing the specified member [#removing-the-specified-member]

Removes the specified user from the chat room.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-3]

\`\`\`html
DELETE https://{host}/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}
\`\`\`

#### Path parameter [#path-parameter-3]

For the parameters and detailed descriptions, see [Common parameters ](#param).

#### Request header [#request-header-3]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response-3]

#### Response body [#response-body-3]

If the returned HTTP status code is \`200\`, the request succeeds, and the response body contains the following fields:

| Field    | Type   | Description                                                                                    |
| :------- | :----- | :--------------------------------------------------------------------------------------------- |
| \`result\` | Bool   | The deletion result: \`true\`: Success. \`false\`: Failure.                                        |
| \`action\` | String | The operation that is performed. \`remove_member\` means to delete a chat room member.           |
| \`user\`   | String | The username of the chat room member that is removed.                                          |
| \`id\`     | String | The chat room ID. This is the unique identifier assigned to the chat room by the Chat service. |

For other fields and detailed descriptions, see [Common parameters](#param).

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#code) for possible reasons.

#### Request example [#request-example-3]

\`\`\`json
# Replace  with the app token generated in your server.
curl -X DELETE -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http://XXXX/app-id/XXXX/chatrooms/XXXX/users/XXXX'
\`\`\`

#### Response example [#response-example-3]

\`\`\`json
{
    "action": "delete",
    "application": "8be024f0-XXXX-XXXX-b697-5d598d5f8402",
    "uri": "http://XXXX/app-id/XXXX/chatrooms/XXXX/users/XXXX",
    "entities": [],
    "data": {
        "result": true,
        "action": "remove_member",
        "user": "user1"
        "id": "XXXX"
    },
    "timestamp": 1542555744726,
    "duration": 1,
    "organization": "XXXX",
    "applicationName": "XXXX"
}
\`\`\`

## Removing multiple chat room members [#removing-multiple-chat-room-members]

Removes multiple users from the chat room.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-4]

\`\`\`html
DELETE https://{host} /app-id/{app_id}/chatrooms/{chatroomid}/users/{usernames}
\`\`\`

### HTTP request [#http-request-5]

#### Path parameter [#path-parameter-4]

| Parameter   | Type   | Description                                                                                                                                                  | Required |
| :---------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`usernames\` | String | One or more usernames separated with the comma (,). In the URL, "," needs to be represented by "%2C". A maximum of 100 usernames can be passed in each time. | Yes      |

For other parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-4]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response-4]

#### Response body [#response-body-4]

If the returned HTTP status code is \`200\`, the request succeeds. The response body contains the following fields:

| Field    | Type   | Description                                                                                    |
| :------- | :----- | :--------------------------------------------------------------------------------------------- |
| \`result\` | Bool   | The deletion result: \`true\`: Success. \`false\`: Failure.                                        |
| \`action\` | String | The operation that is performed. \`remove_member\` means to remove a chat room member.           |
| \`reason\` | String | The reason why the method fails.                                                               |
| \`user\`   | String | The list of usernames of chat room members that are deleted.                                   |
| \`id\`     | String | The chat room ID. This is the unique identifier assigned to the chat room by the Chat service. |

For other fields and detailed descriptions, see [Common parameters](#param).

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#code) for possible reasons.

#### Request example [#request-example-4]

\`\`\`json
# Replace  with the app token generated in your server.
curl -X DELETE -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http://XXXX/app-id/XXXX/chatrooms/XXXX/users/user1%2Cuser2'
\`\`\`

#### Response example [#response-example-4]

\`\`\`json
{
    "action": "delete",
    "application": "8be024f0-XXXX-XXXX-b697-5d598d5f8402",
    "uri": "http://XXXX/app-id/XXXX/chatrooms/XXXX/users/user1%2Cuser2",
    "entities": [],
    "data": [
        {
            "result": false,
            "action": "remove_member",
            "reason": "user: user1 doesn't exist in group: 66213271109633",
            "user": "user1"
            "id": "XXXX"
        },
        {
            "result": true,
            "action": "remove_member",
            "user": "user2",
            "id": "XXXX"
        }
    ],
    "timestamp": 1542556177147,
    "duration": 0,
    "organization": "XXXX",
    "applicationName": "XXXX"
}
\`\`\`

## Adding a chat room admin [#adding-a-chat-room-admin]

Adds a regular chat room member as the chat room admin.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-6]

\`\`\`html
POST https://{host}/app-id/{app_id}/chatrooms/{chatroom_id}/admin
\`\`\`

#### Path parameter [#path-parameter-5]

For the parameters and detailed descriptions, see [Common parameters ](#param).

#### Request header [#request-header-5]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Content-Type\`  | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body-1]

The request body is a JSON object, which contains the following fields:

| Field      | Type   | Description                                      | Required |
| :--------- | :----- | :----------------------------------------------- | :------- |
| \`newadmin\` | String | The username to be added as the chat room admin. | Yes      |

### HTTP response [#http-response-5]

#### Response body [#response-body-5]

If the returned HTTP status code is \`200\`, the request succeeds, and the response body contains the following fields:

| Field      | Type   | Description                                                |
| :--------- | :----- | :--------------------------------------------------------- |
| \`result\`   | Bool   | The addition result: \`true\`: Success. \`false\`: Failure.    |
| \`newadmin\` | String | The username of the chat room administrator that is added. |

For other fields and detailed descriptions, see [Common parameters](#param).
If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#code) for possible reasons.

### Example [#example-3]

#### Request example [#request-example-5]

\`\`\`json
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer ' -d '{
   "newadmin": "user1"
 }' 'http://XXXX/app-id/XXXX/chatrooms/XXXX/admin'
\`\`\`

#### Response example [#response-example-5]

\`\`\`json
{
    "action": "post",
    "application": "22bcffa0-XXXX-XXXX-9df8-516f6df68c6d",
    "applicationName": "XXXX",
    "data": {
        "result": "success",
        "newadmin": "user1"
    },
    "duration": 0,
    "entities": [],
    "organization": "XXXX",
    "timestamp": 1642486989028,
    "uri": "http://XXXX/app-id/XXXX/chatrooms/XXXX/admin"
}
\`\`\`

## Retrieving admins [#retrieving-admins]

Retrieves all the admins of the specified chat room.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-7]

\`\`\`html
GET https://{host}/app-id/{app_id}/chatrooms/{chatroom_id}/admin
\`\`\`

#### Path parameter [#path-parameter-6]

For the parameters and detailed descriptions, see [Common parameters ](#param).

#### Request header [#request-header-6]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response-6]

#### Response body [#response-body-6]

If the returned HTTP status code is \`200\`, the request succeeds, and the response body contains the following fields:

| Field  | Type      | Description                                         |
| :----- | :-------- | :-------------------------------------------------- |
| \`data\` | JSONArray | The array of usernames of chat room administrators. |

For other fields and detailed descriptions, see [Common parameters](#param).

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#code) for possible reasons.

### Example [#example-4]

#### Request example [#request-example-6]

\`\`\`json
# Replace  with the app token generated in your server.
curl -X GET -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http://XXXX/app-id/XXXX/chatrooms/XXXX/admin'
\`\`\`

#### Response example [#response-example-6]

\`\`\`json
{
    "action": "get",
    "application": "527cd7e0-XXXX-XXXX-9f59-ef10ecd81ff0",
    "uri": "http://XXXX/app-id/XXXX/chatrooms/XXXX/admin",
    "entities": [],
    "data": ["XXXX"],
    "timestamp": 1489073361210,
    "duration": 0,
    "organization": "XXXX",
    "applicationName": "XXXX",
    "count": 1
}
\`\`\`

## Removing admins [#removing-admins]

Removes the administrative privileges of the chat room admin, and that admin becomes a regular chat room member.

For each App Key, the call frequency limit of this method is 100 per second.

### HTTP request [#http-request-8]

\`\`\`html
DELETE https://{host}/app-id/{app_id}/chatrooms/{chatroom_id}/admin/{oldadmin}
\`\`\`

#### Path parameter [#path-parameter-7]

| Parameter  | Type   | Description                                                                      | Required |
| :--------- | :----- | :------------------------------------------------------------------------------- | :------- |
| \`oldadmin\` | String | The username of the chat room admin to be demoted as a regular chat room member. | Yes      |

For other parameters and detailed descriptions, see [Common parameters](#param).

#### Request header [#request-header-7]

| Parameter       | Type   | Description                                                                                                                                                                                      | Required |
| :-------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Accept\`        | String | \`application/json\`                                                                                                                                                                               | Yes      |
| \`Authorization\` | String | The authentication token of the user or administrator, in the format of \`Bearer \${token}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

### HTTP response [#http-response-7]

#### Response body [#response-body-7]

If the returned HTTP status code is \`200\`, the request succeeds and the response body contains the following fields:

| Field      | Type    | Description                                                                              |
| :--------- | :------ | :--------------------------------------------------------------------------------------- |
| \`result\`   | Boolean | The revocation result: \`true\`: Success. \`false\`: Failure.                                |
| \`oldadmin\` | String  | The username of the chat room administrator whose administrative privileges are revoked. |

For other fields and detailed descriptions, see [Common parameters](#param).

If the returned HTTP status code is not \`200\`, the request fails. You can refer to [Status codes](#code) for possible reasons.

### Example [#example-5]

#### Request example [#request-example-7]

\`\`\`json
# Replace  with the app token generated in your server.
curl -X DELETE -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http://XXXX/app-id/XXXX/chatrooms/XXXX/admin/XXXX'
\`\`\`

#### Response example [#response-example-7]

\`\`\`json
{
    "action": "delete",
    "application": "527cd7e0-XXXX-XXXX-9f59-ef10ecd81ff0",
    "uri": "http://XXXX/app-id/XXXX/chatrooms/XXXX/admin/XXXX",
    "entities": [],
    "data": {
        "result": "success",
        "oldadmin": "XXXX"
    },
    "timestamp": 1489073432732,
    "duration": 1,
    "organization": "XXXX",
    "applicationName": "XXXX"
}
\`\`\`

## Status codes [#status-codes]

For details, see [HTTP Status Codes](../http-status-codes).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `This page shows how to manage chat room members by calling the Chat RESTful APIs, including adding, retrieving, and deleting chat room members and revoking administrative privileges of chat room administrators.
Before calling the following methods, ensure that you understand the call frequency limit of the Chat RESTful APIs described in Limitations.`
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "Role"
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "Description"
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "Privilege"
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "Regular member"
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "Chat room members without administrative privileges."
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "Regular chat room members can modify their own chat room profiles."
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "chat room admin"
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "Chat room admins are authorized by the chat room owner and have chat room management privileges."
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "The admins can manage regular members of the chat room.  A maximum of 99 admins can be added."
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "chat room owner"
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "The creator of the chat room. Chat room owners have the highest privileges."
  }, {
    heading: "description-of-chat-room-member-roles",
    content: "The chat room owner can add chat room admins, disband the chat room, modify chat room information, and manage regular members of the chat room."
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
    heading: "request-parameters",
    content: "`chatroom_id`"
  }, {
    heading: "request-parameters",
    content: "String"
  }, {
    heading: "request-parameters",
    content: "The chat room ID. The unique chat room identifier assigned to each chat room by the Chat. You can get the chat room ID from the response body in Retrieve the basic information of all chat rooms."
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
    content: "The unique identifier assigned to each app by the Chat service ."
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
    content: "The request path, which is part of the request URL. You can safely ignore this parameter."
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
    content: "`entities.created`"
  }, {
    heading: "response-parameters",
    content: "Number"
  }, {
    heading: "response-parameters",
    content: "The Unix timestamp (ms) when the user is registered."
  }, {
    heading: "response-parameters",
    content: "`entities.username`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "The username. The unique account the user is logged in with."
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
    content: "The Unix timestamp (ms) when the user is registered."
  }, {
    heading: "response-parameters",
    content: "`duration`"
  }, {
    heading: "response-parameters",
    content: "Number"
  }, {
    heading: "response-parameters",
    content: "The time duration (ms) from sending the HTTP request to receiving the response."
  }, {
    heading: "adding-a-chat-room-member",
    content: "Adds the specified user to the chat room."
  }, {
    heading: "adding-a-chat-room-member",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
  }, {
    heading: "path-parameter",
    content: "For the parameters and detailed descriptions, see Common parameters ."
  }, {
    heading: "path-parameter",
    content: "> If the specified user does not exist in the app or is already a member of the chat room, the request fails and the error code `400` is returned."
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
    content: "`application/json`"
  }, {
    heading: "request-header",
    content: "Yes"
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
    content: "If the returned HTTP status code is `200`, the request succeeds, and the response body contains the following fields:"
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
    content: "`result`"
  }, {
    heading: "response-body",
    content: "Bool"
  }, {
    heading: "response-body",
    content: "The addition result: `true`: Success. `false`: Failure."
  }, {
    heading: "response-body",
    content: "`action`"
  }, {
    heading: "response-body",
    content: "String"
  }, {
    heading: "response-body",
    content: "The operation that is performed. `add_member` means to add a member to the chat room."
  }, {
    heading: "response-body",
    content: "`id`"
  }, {
    heading: "response-body",
    content: "String"
  }, {
    heading: "response-body",
    content: "The chat room ID. This is the unique identifier assigned to the chat room by the Chat service."
  }, {
    heading: "response-body",
    content: "`user`"
  }, {
    heading: "response-body",
    content: "String"
  }, {
    heading: "response-body",
    content: "The array of usernames of the existing chat room members."
  }, {
    heading: "response-body",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible reasons."
  }, {
    heading: "adding-multiple-chat-room-members",
    content: "Adds multiple specified users to the chat room."
  }, {
    heading: "adding-multiple-chat-room-members",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
  }, {
    heading: "path-parameter-1",
    content: "For the parameters and detailed descriptions, see Common parameters ."
  }, {
    heading: "path-parameter-1",
    content: "You can add at most 60 users each time."
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
    content: "`application/json`"
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
    heading: "request-body",
    content: "The request body is a JSON object, which contains the following fields:"
  }, {
    heading: "request-body",
    content: "Field"
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
    content: "JSONArray"
  }, {
    heading: "request-body",
    content: "The array of usernames of chat room members that you want to add to the chat room."
  }, {
    heading: "request-body",
    content: "Yes"
  }, {
    heading: "response-body-1",
    content: "If the returned HTTP status code is `200`, the request succeeds, and the response body contains the following fields:"
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
    content: "`newmembers`"
  }, {
    heading: "response-body-1",
    content: "JSONArray"
  }, {
    heading: "response-body-1",
    content: "The array of usernames of the existing chat room members."
  }, {
    heading: "response-body-1",
    content: "`action`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The operation that is performed. `add_member` means to add a member to the chat room."
  }, {
    heading: "response-body-1",
    content: "`id`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The chat room ID. This is the unique identifier assigned to the chat room by the Chat."
  }, {
    heading: "response-body-1",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "response-body-1",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible reasons."
  }, {
    heading: "retrieving-members-with-pagination",
    content: "Retrieves members with pagination."
  }, {
    heading: "retrieving-members-with-pagination",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
  }, {
    heading: "path-parameter-2",
    content: "For the parameters and detailed descriptions, see Common parameters ."
  }, {
    heading: "query-parameters",
    content: "Parameter"
  }, {
    heading: "query-parameters",
    content: "Type"
  }, {
    heading: "query-parameters",
    content: "Description"
  }, {
    heading: "query-parameters",
    content: "Required"
  }, {
    heading: "query-parameters",
    content: "`pagenum`"
  }, {
    heading: "query-parameters",
    content: "Int"
  }, {
    heading: "query-parameters",
    content: "The page number on which chat room members are retrieved. The default value is 1."
  }, {
    heading: "query-parameters",
    content: "No"
  }, {
    heading: "query-parameters",
    content: "`pagesize`"
  }, {
    heading: "query-parameters",
    content: "Int"
  }, {
    heading: "query-parameters",
    content: "The number of chat room members displayed on each page. The default value is 1000. The value range is \\[0,1000]. If you pass in a value greater than `1000`, the server still returns 1000 chat room members."
  }, {
    heading: "query-parameters",
    content: "No"
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
    heading: "response-body-2",
    content: "If the returned HTTP status code is `200`, the request succeeds, and the response body contains the following fields:"
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
    content: "`owner`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: 'The username of the chat room owner, for example, `{"owner":"user1"}`.'
  }, {
    heading: "response-body-2",
    content: "`member`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: 'The username of a chat room admin or regular chat room member, for example, `{"member":"user2"}`.'
  }, {
    heading: "response-body-2",
    content: "`count`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The number of chat room members retrieved at this call of this API."
  }, {
    heading: "response-body-2",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "response-body-2",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible reasons."
  }, {
    heading: "removing-the-specified-member",
    content: "Removes the specified user from the chat room."
  }, {
    heading: "removing-the-specified-member",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
  }, {
    heading: "path-parameter-3",
    content: "For the parameters and detailed descriptions, see Common parameters ."
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
    content: "If the returned HTTP status code is `200`, the request succeeds, and the response body contains the following fields:"
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
    content: "`result`"
  }, {
    heading: "response-body-3",
    content: "Bool"
  }, {
    heading: "response-body-3",
    content: "The deletion result: `true`: Success. `false`: Failure."
  }, {
    heading: "response-body-3",
    content: "`action`"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The operation that is performed. `remove_member` means to delete a chat room member."
  }, {
    heading: "response-body-3",
    content: "`user`"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The username of the chat room member that is removed."
  }, {
    heading: "response-body-3",
    content: "`id`"
  }, {
    heading: "response-body-3",
    content: "String"
  }, {
    heading: "response-body-3",
    content: "The chat room ID. This is the unique identifier assigned to the chat room by the Chat service."
  }, {
    heading: "response-body-3",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "response-body-3",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible reasons."
  }, {
    heading: "removing-multiple-chat-room-members",
    content: "Removes multiple users from the chat room."
  }, {
    heading: "removing-multiple-chat-room-members",
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
    content: "`usernames`"
  }, {
    heading: "path-parameter-4",
    content: "String"
  }, {
    heading: "path-parameter-4",
    content: 'One or more usernames separated with the comma (,). In the URL, "," needs to be represented by "%2C". A maximum of 100 usernames can be passed in each time.'
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
    heading: "response-body-4",
    content: "If the returned HTTP status code is `200`, the request succeeds. The response body contains the following fields:"
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
    content: "`result`"
  }, {
    heading: "response-body-4",
    content: "Bool"
  }, {
    heading: "response-body-4",
    content: "The deletion result: `true`: Success. `false`: Failure."
  }, {
    heading: "response-body-4",
    content: "`action`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The operation that is performed. `remove_member` means to remove a chat room member."
  }, {
    heading: "response-body-4",
    content: "`reason`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The reason why the method fails."
  }, {
    heading: "response-body-4",
    content: "`user`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The list of usernames of chat room members that are deleted."
  }, {
    heading: "response-body-4",
    content: "`id`"
  }, {
    heading: "response-body-4",
    content: "String"
  }, {
    heading: "response-body-4",
    content: "The chat room ID. This is the unique identifier assigned to the chat room by the Chat service."
  }, {
    heading: "response-body-4",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "response-body-4",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible reasons."
  }, {
    heading: "adding-a-chat-room-admin",
    content: "Adds a regular chat room member as the chat room admin."
  }, {
    heading: "adding-a-chat-room-admin",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
  }, {
    heading: "path-parameter-5",
    content: "For the parameters and detailed descriptions, see Common parameters ."
  }, {
    heading: "request-header-5",
    content: "Parameter"
  }, {
    heading: "request-header-5",
    content: "Type"
  }, {
    heading: "request-header-5",
    content: "Description"
  }, {
    heading: "request-header-5",
    content: "Required"
  }, {
    heading: "request-header-5",
    content: "`Accept`"
  }, {
    heading: "request-header-5",
    content: "String"
  }, {
    heading: "request-header-5",
    content: "`application/json`"
  }, {
    heading: "request-header-5",
    content: "Yes"
  }, {
    heading: "request-header-5",
    content: "`Content-Type`"
  }, {
    heading: "request-header-5",
    content: "String"
  }, {
    heading: "request-header-5",
    content: "`application/json`"
  }, {
    heading: "request-header-5",
    content: "Yes"
  }, {
    heading: "request-header-5",
    content: "`Authorization`"
  }, {
    heading: "request-header-5",
    content: "String"
  }, {
    heading: "request-header-5",
    content: "The authentication token of the user or administrator, in the format of `Bearer ${token}`, where `Bearer` is a fixed character, followed by an English space, and then the obtained token value."
  }, {
    heading: "request-header-5",
    content: "Yes"
  }, {
    heading: "request-body-1",
    content: "The request body is a JSON object, which contains the following fields:"
  }, {
    heading: "request-body-1",
    content: "Field"
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
    content: "`newadmin`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "The username to be added as the chat room admin."
  }, {
    heading: "request-body-1",
    content: "Yes"
  }, {
    heading: "response-body-5",
    content: "If the returned HTTP status code is `200`, the request succeeds, and the response body contains the following fields:"
  }, {
    heading: "response-body-5",
    content: "Field"
  }, {
    heading: "response-body-5",
    content: "Type"
  }, {
    heading: "response-body-5",
    content: "Description"
  }, {
    heading: "response-body-5",
    content: "`result`"
  }, {
    heading: "response-body-5",
    content: "Bool"
  }, {
    heading: "response-body-5",
    content: "The addition result: `true`: Success. `false`: Failure."
  }, {
    heading: "response-body-5",
    content: "`newadmin`"
  }, {
    heading: "response-body-5",
    content: "String"
  }, {
    heading: "response-body-5",
    content: "The username of the chat room administrator that is added."
  }, {
    heading: "response-body-5",
    content: "For other fields and detailed descriptions, see Common parameters.\nIf the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible reasons."
  }, {
    heading: "retrieving-admins",
    content: "Retrieves all the admins of the specified chat room."
  }, {
    heading: "retrieving-admins",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
  }, {
    heading: "path-parameter-6",
    content: "For the parameters and detailed descriptions, see Common parameters ."
  }, {
    heading: "request-header-6",
    content: "Parameter"
  }, {
    heading: "request-header-6",
    content: "Type"
  }, {
    heading: "request-header-6",
    content: "Description"
  }, {
    heading: "request-header-6",
    content: "Required"
  }, {
    heading: "request-header-6",
    content: "`Accept`"
  }, {
    heading: "request-header-6",
    content: "String"
  }, {
    heading: "request-header-6",
    content: "`application/json`"
  }, {
    heading: "request-header-6",
    content: "Yes"
  }, {
    heading: "request-header-6",
    content: "`Authorization`"
  }, {
    heading: "request-header-6",
    content: "String"
  }, {
    heading: "request-header-6",
    content: "The authentication token of the user or administrator, in the format of `Bearer ${token}`, where `Bearer` is a fixed character, followed by an English space, and then the obtained token value."
  }, {
    heading: "request-header-6",
    content: "Yes"
  }, {
    heading: "response-body-6",
    content: "If the returned HTTP status code is `200`, the request succeeds, and the response body contains the following fields:"
  }, {
    heading: "response-body-6",
    content: "Field"
  }, {
    heading: "response-body-6",
    content: "Type"
  }, {
    heading: "response-body-6",
    content: "Description"
  }, {
    heading: "response-body-6",
    content: "`data`"
  }, {
    heading: "response-body-6",
    content: "JSONArray"
  }, {
    heading: "response-body-6",
    content: "The array of usernames of chat room administrators."
  }, {
    heading: "response-body-6",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "response-body-6",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible reasons."
  }, {
    heading: "removing-admins",
    content: "Removes the administrative privileges of the chat room admin, and that admin becomes a regular chat room member."
  }, {
    heading: "removing-admins",
    content: "For each App Key, the call frequency limit of this method is 100 per second."
  }, {
    heading: "path-parameter-7",
    content: "Parameter"
  }, {
    heading: "path-parameter-7",
    content: "Type"
  }, {
    heading: "path-parameter-7",
    content: "Description"
  }, {
    heading: "path-parameter-7",
    content: "Required"
  }, {
    heading: "path-parameter-7",
    content: "`oldadmin`"
  }, {
    heading: "path-parameter-7",
    content: "String"
  }, {
    heading: "path-parameter-7",
    content: "The username of the chat room admin to be demoted as a regular chat room member."
  }, {
    heading: "path-parameter-7",
    content: "Yes"
  }, {
    heading: "path-parameter-7",
    content: "For other parameters and detailed descriptions, see Common parameters."
  }, {
    heading: "request-header-7",
    content: "Parameter"
  }, {
    heading: "request-header-7",
    content: "Type"
  }, {
    heading: "request-header-7",
    content: "Description"
  }, {
    heading: "request-header-7",
    content: "Required"
  }, {
    heading: "request-header-7",
    content: "`Accept`"
  }, {
    heading: "request-header-7",
    content: "String"
  }, {
    heading: "request-header-7",
    content: "`application/json`"
  }, {
    heading: "request-header-7",
    content: "Yes"
  }, {
    heading: "request-header-7",
    content: "`Authorization`"
  }, {
    heading: "request-header-7",
    content: "String"
  }, {
    heading: "request-header-7",
    content: "The authentication token of the user or administrator, in the format of `Bearer ${token}`, where `Bearer` is a fixed character, followed by an English space, and then the obtained token value."
  }, {
    heading: "request-header-7",
    content: "Yes"
  }, {
    heading: "response-body-7",
    content: "If the returned HTTP status code is `200`, the request succeeds and the response body contains the following fields:"
  }, {
    heading: "response-body-7",
    content: "Field"
  }, {
    heading: "response-body-7",
    content: "Type"
  }, {
    heading: "response-body-7",
    content: "Description"
  }, {
    heading: "response-body-7",
    content: "`result`"
  }, {
    heading: "response-body-7",
    content: "Boolean"
  }, {
    heading: "response-body-7",
    content: "The revocation result: `true`: Success. `false`: Failure."
  }, {
    heading: "response-body-7",
    content: "`oldadmin`"
  }, {
    heading: "response-body-7",
    content: "String"
  }, {
    heading: "response-body-7",
    content: "The username of the chat room administrator whose administrative privileges are revoked."
  }, {
    heading: "response-body-7",
    content: "For other fields and detailed descriptions, see Common parameters."
  }, {
    heading: "response-body-7",
    content: "If the returned HTTP status code is not `200`, the request fails. You can refer to Status codes for possible reasons."
  }, {
    heading: "status-codes",
    content: "For details, see HTTP Status Codes."
  }],
  headings: [{
    id: "description-of-chat-room-member-roles",
    content: "Description of chat room member roles"
  }, {
    id: "common-parameters",
    content: "Common parameters"
  }, {
    id: "request-parameters",
    content: "Request parameters"
  }, {
    id: "response-parameters",
    content: "Response parameters"
  }, {
    id: "adding-a-chat-room-member",
    content: "Adding a chat room member"
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
    id: "adding-multiple-chat-room-members",
    content: "Adding multiple chat room members"
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
    id: "retrieving-members-with-pagination",
    content: "Retrieving members with pagination"
  }, {
    id: "http-request-2",
    content: "HTTP request"
  }, {
    id: "path-parameter-2",
    content: "Path parameter"
  }, {
    id: "query-parameters",
    content: "Query parameters"
  }, {
    id: "request-header-2",
    content: "Request header"
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
    id: "removing-the-specified-member",
    content: "Removing the specified member"
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
    id: "request-example-3",
    content: "Request example"
  }, {
    id: "response-example-3",
    content: "Response example"
  }, {
    id: "removing-multiple-chat-room-members",
    content: "Removing multiple chat room members"
  }, {
    id: "http-request-4",
    content: "HTTP request"
  }, {
    id: "http-request-5",
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
    id: "request-example-4",
    content: "Request example"
  }, {
    id: "response-example-4",
    content: "Response example"
  }, {
    id: "adding-a-chat-room-admin",
    content: "Adding a chat room admin"
  }, {
    id: "http-request-6",
    content: "HTTP request"
  }, {
    id: "path-parameter-5",
    content: "Path parameter"
  }, {
    id: "request-header-5",
    content: "Request header"
  }, {
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "http-response-5",
    content: "HTTP response"
  }, {
    id: "response-body-5",
    content: "Response body"
  }, {
    id: "example-3",
    content: "Example"
  }, {
    id: "request-example-5",
    content: "Request example"
  }, {
    id: "response-example-5",
    content: "Response example"
  }, {
    id: "retrieving-admins",
    content: "Retrieving admins"
  }, {
    id: "http-request-7",
    content: "HTTP request"
  }, {
    id: "path-parameter-6",
    content: "Path parameter"
  }, {
    id: "request-header-6",
    content: "Request header"
  }, {
    id: "http-response-6",
    content: "HTTP response"
  }, {
    id: "response-body-6",
    content: "Response body"
  }, {
    id: "example-4",
    content: "Example"
  }, {
    id: "request-example-6",
    content: "Request example"
  }, {
    id: "response-example-6",
    content: "Response example"
  }, {
    id: "removing-admins",
    content: "Removing admins"
  }, {
    id: "http-request-8",
    content: "HTTP request"
  }, {
    id: "path-parameter-7",
    content: "Path parameter"
  }, {
    id: "request-header-7",
    content: "Request header"
  }, {
    id: "http-response-7",
    content: "HTTP response"
  }, {
    id: "response-body-7",
    content: "Response body"
  }, {
    id: "example-5",
    content: "Example"
  }, {
    id: "request-example-7",
    content: "Request example"
  }, {
    id: "response-example-7",
    content: "Response example"
  }, {
    id: "status-codes",
    content: "Status codes"
  }]
};
export let toc = [{
  depth: 2,
  url: "#description-of-chat-room-member-roles",
  title: _jsx(_Fragment, {
    children: "Description of chat room member roles"
  })
}, {
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
  url: "#adding-a-chat-room-member",
  title: _jsx(_Fragment, {
    children: "Adding a chat room member"
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
  url: "#adding-multiple-chat-room-members",
  title: _jsx(_Fragment, {
    children: "Adding multiple chat room members"
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
  url: "#retrieving-members-with-pagination",
  title: _jsx(_Fragment, {
    children: "Retrieving members with pagination"
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
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#request-header-2",
  title: _jsx(_Fragment, {
    children: "Request header"
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
  url: "#removing-the-specified-member",
  title: _jsx(_Fragment, {
    children: "Removing the specified member"
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
  url: "#removing-multiple-chat-room-members",
  title: _jsx(_Fragment, {
    children: "Removing multiple chat room members"
  })
}, {
  depth: 3,
  url: "#http-request-4",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 3,
  url: "#http-request-5",
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
  url: "#adding-a-chat-room-admin",
  title: _jsx(_Fragment, {
    children: "Adding a chat room admin"
  })
}, {
  depth: 3,
  url: "#http-request-6",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-5",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#request-header-5",
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
  url: "#http-response-5",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-body-5",
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
  url: "#request-example-5",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example-5",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#retrieving-admins",
  title: _jsx(_Fragment, {
    children: "Retrieving admins"
  })
}, {
  depth: 3,
  url: "#http-request-7",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-6",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#request-header-6",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#http-response-6",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-body-6",
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
  url: "#request-example-6",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example-6",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#removing-admins",
  title: _jsx(_Fragment, {
    children: "Removing admins"
  })
}, {
  depth: 3,
  url: "#http-request-8",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-7",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#request-header-7",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#http-response-7",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-body-7",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#example-5",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#request-example-7",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example-7",
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
    blockquote: "blockquote",
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
    children: [_jsxs(_components.p, {
      children: [`This page shows how to manage chat room members by calling the Chat RESTful APIs, including adding, retrieving, and deleting chat room members and revoking administrative privileges of chat room administrators.
Before calling the following methods, ensure that you understand the call frequency limit of the Chat RESTful APIs described in `, _jsx(_components.a, {
        href: "../limitations#call-limit-of-server-sides",
        children: "Limitations"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "description-of-chat-room-member-roles",
      children: "Description of chat room member roles"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Role"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Privilege"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Regular member"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chat room members without administrative privileges."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Regular chat room members can modify their own chat room profiles."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "chat room admin"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chat room admins are authorized by the chat room owner and have chat room management privileges."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The admins can manage regular members of the chat room.  A maximum of 99 admins can be added."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "chat room owner"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The creator of the chat room. Chat room owners have the highest privileges."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The chat room owner can add chat room admins, disband the chat room, modify chat room information, and manage regular members of the chat room."
          })]
        })]
      })]
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
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "chatroom_id"
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
            children: ["The chat room ID. The unique chat room identifier assigned to each chat room by the Chat. You can get the chat room ID from the response body in ", _jsx(_components.a, {
              href: "manage-chatrooms#retrieving-basic-information-of-all-chat-rooms",
              children: "Retrieve the basic information of all chat rooms"
            }), "."]
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
            children: "The unique identifier assigned to each app by the Chat service ."
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
            children: "The request path, which is part of the request URL. You can safely ignore this parameter."
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
              children: "entities.created"
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
            children: "The Unix timestamp (ms) when the user is registered."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "entities.username"
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
            children: "The username. The unique account the user is logged in with."
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
            children: "The Unix timestamp (ms) when the user is registered."
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
            children: "The time duration (ms) from sending the HTTP request to receiving the response."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "adding-a-chat-room-member",
      children: "Adding a chat room member"
    }), `
`, _jsx(_components.p, {
      children: "Adds the specified user to the chat room."
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
              children: "POST https://{host}/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}"
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
        children: "Common parameters "
      }), "."]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: ["If the specified user does not exist in the app or is already a member of the chat room, the request fails and the error code ", _jsx(_components.code, {
          children: "400"
        }), " is returned."]
      }), `
`]
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
      children: ["If the returned HTTP status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request succeeds, and the response body contains the following fields:"]
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
              children: "result"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bool"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The addition result: ", _jsx(_components.code, {
              children: "true"
            }), ": Success. ", _jsx(_components.code, {
              children: "false"
            }), ": Failure."]
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The operation that is performed. ", _jsx(_components.code, {
              children: "add_member"
            }), " means to add a member to the chat room."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "id"
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
            children: "The chat room ID. This is the unique identifier assigned to the chat room by the Chat service."
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
            children: "The array of usernames of the existing chat room members."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), " for possible reasons."]
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# Replace  with the app token generated in your server."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/chatrooms/XXXX/users/XXXX'"
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
              children: '"http://XXXX/app-id/XXXX/chatrooms/XXXX/users/XXXX"'
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
              children: '"add_member"'
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
              children: '        "id"'
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
              children: "1542554038353"
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
      id: "adding-multiple-chat-room-members",
      children: "Adding multiple chat room members"
    }), `
`, _jsx(_components.p, {
      children: "Adds multiple specified users to the chat room."
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
              children: "POST https://{host}/app-id/{app_id}/chatrooms/{chatroomid}/users"
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
        children: "Common parameters "
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "You can add at most 60 users each time."
        })
      })
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
`, _jsx(_components.p, {
      children: "The request body is a JSON object, which contains the following fields:"
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
            children: "JSONArray"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The array of usernames of chat room members that you want to add to the chat room."
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
      }), ", the request succeeds, and the response body contains the following fields:"]
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
              children: "newmembers"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The array of usernames of the existing chat room members."
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The operation that is performed. ", _jsx(_components.code, {
              children: "add_member"
            }), " means to add a member to the chat room."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "id"
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
            children: "The chat room ID. This is the unique identifier assigned to the chat room by the Chat."
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
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), " for possible reasons."]
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# Replace  with the app token generated in your server."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer ' -d '{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '   "usernames"'
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
              children: '     "user"'
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
              children: ' "user2"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }' 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/chatrooms/XXXX/users'"
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
              children: '"http://XXXX/app-id/XXXX/chatrooms/XXXX/users"'
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
              children: '        "newmembers"'
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
              children: '"user1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
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
              children: '"add_member"'
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
              children: '        "id"'
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
              children: "1542554537237"
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
              children: "39"
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
      id: "retrieving-members-with-pagination",
      children: "Retrieving members with pagination"
    }), `
`, _jsx(_components.p, {
      children: "Retrieves members with pagination."
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
              children: "GET https://{host}/app-id/{app_id}/chatrooms/{chatroom_id}/users?pagenum={N}&pagesize={N}"
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
        children: "Common parameters "
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters",
      children: "Query parameters"
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
              children: "pagenum"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Int"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The page number on which chat room members are retrieved. The default value is 1."
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
              children: "pagesize"
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
            children: ["The number of chat room members displayed on each page. The default value is 1000. The value range is [0,1000]. If you pass in a value greater than ", _jsx(_components.code, {
              children: "1000"
            }), ", the server still returns 1000 chat room members."]
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
      }), ", the request succeeds, and the response body contains the following fields:"]
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
              children: "owner"
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
            children: ["The username of the chat room owner, for example, ", _jsx(_components.code, {
              children: '{"owner":"user1"}'
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "member"
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
            children: ["The username of a chat room admin or regular chat room member, for example, ", _jsx(_components.code, {
              children: '{"member":"user2"}'
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "count"
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
            children: "The number of chat room members retrieved at this call of this API."
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
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), " for possible reasons."]
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# Replace  with the app token generated in your server."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X GET -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/chatrooms/XXXX/users?pagenum=2&pagesize=2'"
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
              children: '"527cd7e0-XXXX-XXXX-9f59-ef10ecd81ff0"'
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
              children: '    "params"'
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
              children: '        "pagesize"'
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
              children: '"2"'
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
              children: '        "pagenum"'
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
              children: '"2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
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
              children: '"http://XXXX/app-id/XXXX/chatrooms/XXXX/users"'
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
              children: '            "owner"'
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
              children: '            "member"'
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
              children: "1489074511416"
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
      id: "removing-the-specified-member",
      children: "Removing the specified member"
    }), `
`, _jsx(_components.p, {
      children: "Removes the specified user from the chat room."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "DELETE https://{host}/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}"
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
        children: "Common parameters "
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
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request succeeds, and the response body contains the following fields:"]
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
              children: "result"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bool"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The deletion result: ", _jsx(_components.code, {
              children: "true"
            }), ": Success. ", _jsx(_components.code, {
              children: "false"
            }), ": Failure."]
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The operation that is performed. ", _jsx(_components.code, {
              children: "remove_member"
            }), " means to delete a chat room member."]
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
            children: "The username of the chat room member that is removed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "id"
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
            children: "The chat room ID. This is the unique identifier assigned to the chat room by the Chat service."
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
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), " for possible reasons."]
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# Replace  with the app token generated in your server."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X DELETE -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/chatrooms/XXXX/users/XXXX'"
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
              children: '"http://XXXX/app-id/XXXX/chatrooms/XXXX/users/XXXX"'
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
              children: '"remove_member"'
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
              children: '        "id"'
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
              children: ' "XXXX"'
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
              children: "1542555744726"
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
      id: "removing-multiple-chat-room-members",
      children: "Removing multiple chat room members"
    }), `
`, _jsx(_components.p, {
      children: "Removes multiple users from the chat room."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "DELETE https://{host} /app-id/{app_id}/chatrooms/{chatroomid}/users/{usernames}"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "http-request-5",
      children: "HTTP request"
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
            children: 'One or more usernames separated with the comma (,). In the URL, "," needs to be represented by "%2C". A maximum of 100 usernames can be passed in each time.'
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
      }), ", the request succeeds. The response body contains the following fields:"]
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
              children: "result"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bool"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The deletion result: ", _jsx(_components.code, {
              children: "true"
            }), ": Success. ", _jsx(_components.code, {
              children: "false"
            }), ": Failure."]
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
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The operation that is performed. ", _jsx(_components.code, {
              children: "remove_member"
            }), " means to remove a chat room member."]
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
            children: "The reason why the method fails."
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
            children: "The list of usernames of chat room members that are deleted."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "id"
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
            children: "The chat room ID. This is the unique identifier assigned to the chat room by the Chat service."
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
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), " for possible reasons."]
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# Replace  with the app token generated in your server."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X DELETE -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/chatrooms/XXXX/users/user1%2Cuser2'"
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
              children: '"http://XXXX/app-id/XXXX/chatrooms/XXXX/users/user1%2Cuser2"'
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
              children: '            "action"'
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
              children: '"remove_member"'
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
              children: '            "reason"'
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
              children: `"user: user1 doesn't exist in group: 66213271109633"`
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
              children: '            "id"'
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
              children: ' "XXXX"'
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
              children: '            "action"'
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
              children: '"remove_member"'
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
              children: '            "id"'
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
              children: "1542556177147"
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
      id: "adding-a-chat-room-admin",
      children: "Adding a chat room admin"
    }), `
`, _jsx(_components.p, {
      children: "Adds a regular chat room member as the chat room admin."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 100 per second."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-6",
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
              children: "POST https://{host}/app-id/{app_id}/chatrooms/{chatroom_id}/admin"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-5",
      children: "Path parameter"
    }), `
`, _jsxs(_components.p, {
      children: ["For the parameters and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters "
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-5",
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
`, _jsx(_components.p, {
      children: "The request body is a JSON object, which contains the following fields:"
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
              children: "newadmin"
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
            children: "The username to be added as the chat room admin."
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
      id: "http-response-5",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-5",
      children: "Response body"
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request succeeds, and the response body contains the following fields:"]
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
              children: "result"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bool"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The addition result: ", _jsx(_components.code, {
              children: "true"
            }), ": Success. ", _jsx(_components.code, {
              children: "false"
            }), ": Failure."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "newadmin"
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
            children: "The username of the chat room administrator that is added."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For other fields and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters"
      }), `.
If the returned HTTP status code is not `, _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), " for possible reasons."]
    }), `
`, _jsx(_components.h3, {
      id: "example-3",
      children: "Example"
    }), `
`, _jsx(_components.h4, {
      id: "request-example-5",
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer ' -d '{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '   "newadmin"'
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }' 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/chatrooms/XXXX/admin'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-5",
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
              children: '"22bcffa0-XXXX-XXXX-9df8-516f6df68c6d"'
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
              children: '        "result"'
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
              children: '        "newadmin"'
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
              children: "1642486989028"
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
              children: '"http://XXXX/app-id/XXXX/chatrooms/XXXX/admin"'
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
      id: "retrieving-admins",
      children: "Retrieving admins"
    }), `
`, _jsx(_components.p, {
      children: "Retrieves all the admins of the specified chat room."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 100 per second."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-7",
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
              children: "GET https://{host}/app-id/{app_id}/chatrooms/{chatroom_id}/admin"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-6",
      children: "Path parameter"
    }), `
`, _jsxs(_components.p, {
      children: ["For the parameters and detailed descriptions, see ", _jsx(_components.a, {
        href: "#param",
        children: "Common parameters "
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-6",
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
      id: "http-response-6",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-6",
      children: "Response body"
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request succeeds, and the response body contains the following fields:"]
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
            children: "JSONArray"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The array of usernames of chat room administrators."
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
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), " for possible reasons."]
    }), `
`, _jsx(_components.h3, {
      id: "example-4",
      children: "Example"
    }), `
`, _jsx(_components.h4, {
      id: "request-example-6",
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# Replace  with the app token generated in your server."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X GET -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/chatrooms/XXXX/admin'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-6",
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
              children: '"527cd7e0-XXXX-XXXX-9f59-ef10ecd81ff0"'
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
              children: '"http://XXXX/app-id/XXXX/chatrooms/XXXX/admin"'
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
              children: "1489073361210"
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "removing-admins",
      children: "Removing admins"
    }), `
`, _jsx(_components.p, {
      children: "Removes the administrative privileges of the chat room admin, and that admin becomes a regular chat room member."
    }), `
`, _jsx(_components.p, {
      children: "For each App Key, the call frequency limit of this method is 100 per second."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-8",
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
              children: "DELETE https://{host}/app-id/{app_id}/chatrooms/{chatroom_id}/admin/{oldadmin}"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-7",
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
              children: "oldadmin"
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
            children: "The username of the chat room admin to be demoted as a regular chat room member."
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
      id: "request-header-7",
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
      id: "http-response-7",
      children: "HTTP response"
    }), `
`, _jsx(_components.h4, {
      id: "response-body-7",
      children: "Response body"
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request succeeds and the response body contains the following fields:"]
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
            children: ["The revocation result: ", _jsx(_components.code, {
              children: "true"
            }), ": Success. ", _jsx(_components.code, {
              children: "false"
            }), ": Failure."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "oldadmin"
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
            children: "The username of the chat room administrator whose administrative privileges are revoked."
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
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. You can refer to ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), " for possible reasons."]
    }), `
`, _jsx(_components.h3, {
      id: "example-5",
      children: "Example"
    }), `
`, _jsx(_components.h4, {
      id: "request-example-7",
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# Replace  with the app token generated in your server."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl -X DELETE -H 'Accept: application/json' -H 'Authorization: Bearer ' 'http:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//XXXX/app-id/XXXX/chatrooms/XXXX/admin/XXXX'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-7",
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
              children: '"527cd7e0-XXXX-XXXX-9f59-ef10ecd81ff0"'
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
              children: '"http://XXXX/app-id/XXXX/chatrooms/XXXX/admin/XXXX"'
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
              children: '        "result"'
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
              children: '        "oldadmin"'
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
              children: "1489073432732"
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
