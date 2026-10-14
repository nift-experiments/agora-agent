import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "HTTP status codes",
  description: "Describes the security best practices recommended by Agora Chat."
};
export let _markdown = `

This page describes the frequently returned HTTP status codes for the Chat RESTful API.

## \`200\` - Success [#200---success]

The API request succeeds.

## \`4xx\` - Client error [#4xx---client-error]

The API request fails due to a client error. Troubleshoot based on the returned \`error\` code and retry the request.

### 400 Bad Request [#400-bad-request]

Indicates that the API request could not be understood by the server because of malformed syntax.

| Status code | Error code                            | Error message                                                                                                      | Description                                                                                                                                                                                                          | Fix                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---------- | :------------------------------------ | :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`400\`       | \`json_parse\`                          | "Unexpected character."                                                                                            | The request body does not conform to the standard JSON format, so the server cannot parse it properly.                                                                                                               | Use tools to check and ensure that the JSON format is correct.                                                                                                                                                                                                                                                                                                                                                                                     |
| \`400\`       | \`illegal_argument\`                    | "Entity 'user' requires a property named username."                                                                | The username is not specified when registering a user.                                                                                                                                                               | Pass the \`username\` parameter when registering a user.                                                                                                                                                                                                                                                                                                                                                                                             |
| \`400\`       | \`illegal_argument\`                    | "This is an invalid request."                                                                                      | The request URL, header, or body is invalid.                                                                                                                                                                         | Check that the request URL, header, and body are correct.                                                                                                                                                                                                                                                                                                                                                                                          |
| \`400\`       | \`illegal_argument\`                    | "'From' can't be empty."                                                                                           | The sender is not specified when sending a message.                                                                                                                                                                  | When sending a message, pass the \`from\` field.                                                                                                                                                                                                                                                                                                                                                                                                     |
| \`400\`       | \`illegal_argument\`                    | "'Target\\_type' can only be 'users', 'chatgroups', or 'chatrooms'."                                                | A value other than \`users\`, \`chatgroups\`, or \`chatrooms\` is passed to \`target_type\` when sending a message.                                                                                                          | The \`target_type\` parameter must be \`users\`, \`chatgroups\`, or \`chatrooms\`.                                                                                                                                                                                                                                                                                                                                                                         |
| \`400\`       | \`illegal_argument\`                    | "\`{username}\` is not legal."                                                                                       | The specified username is invalid when registering a user. For details, see [Registering a user](/en/api-reference/api-ref/im/user-system-registration#registering-a-user).                                          | When registering a user, pass a valid user ID \`username\`.                                                                                                                                                                                                                                                                                                                                                                                          |
| \`400\`       | \`illegal_argument\`                    | "message is too large"                                                                                             | The body or extension information of the message exceeds the allowed size.                                                                                                                                           | Limit the content of the \`body\` and \`ext\` fields to no more than 5 KB.                                                                                                                                                                                                                                                                                                                                                                             |
| \`400\`       | \`illegal_argument\`                    | "This \`chatmessage\` request is not supported."                                                                     | The specified time format is incorrect when querying chat history. The correct format is \`yyyyMMddHH\`.                                                                                                               | Format the \`time\` parameter as \`yyyyMMddHH\`.                                                                                                                                                                                                                                                                                                                                                                                                       |
| \`400\`       | \`illegal_argument\`                    | "Illegal arguments: appkey: \`{app_key}\`, time: \`{yyyymmddhh}\`, maybe chat message history is expired or unstored." | The chat history for the queried time period has expired or has not been generated. For details, see [Retrieving historical messages](/en/api-reference/api-ref/im/message-management#retrieve-historical-messages). | When retrieving chat history, note the following restrictions:A single request retrieves message history for one hour starting from the specified time.You can retrieve historical messages for up to the past 3 days. To extend this limit, contact [support@agora.io](mailto\\:support@agora.io).When platform message volume is high, generating historical records may take time. For time-sensitive requirements, pull records after 24 hours. |
| \`400\`       | \`invalid_parameter\`                   | "Some of \`{group_id}\` are not valid fields."                                                                       | The specified name, description, or size of the group is invalid when creating a group.                                                                                                                              | [Create a group](/en/api-reference/api-ref/im/chat-group-management/create-delete-retrieve-groups#creating-a-group). Enter a valid group name, description, and maximum number of members.                                                                                                                                                                                                                                                         |
| \`400\`       | \`duplicate_unique\` \`_property_exists\` | "Application null Entity user requires that property named \`username\` be unique, value of \`{username}\` exists."    | The specified \`username\` already exists when registering a user.                                                                                                                                                     | User IDs must be unique within the app. When [registering a user](/en/api-reference/api-ref/im/user-system-registration#registering-a-user), pass a unique user ID.                                                                                                                                                                                                                                                                                |
| \`400\`       | N/A                                   | "set presence failed"                                                                                              | The request to set the presence status failed.                                                                                                                                                                       | Reset the user's presence status and ensure that the correct parameters are passed.                                                                                                                                                                                                                                                                                                                                                                |
| \`400\`       | N/A                                   | "ext is too big"                                                                                                   | The custom presence status exceeds the allowed length.                                                                                                                                                               | Limit the online status extension message to no more than 1024 bytes.                                                                                                                                                                                                                                                                                                                                                                              |
| \`400\`       | N/A                                   | "resource not exist"                                                                                               | The specified device resource does not exist.                                                                                                                                                                        | Pass the correct device resource ID. The ID is a unique identifier assigned by the server in the format \`{device type}_{resource ID}\`, where \`device type\` can be \`android\`, \`ios\`, or \`web\`, and \`resource ID\` is assigned by the SDK. For example, \`android_123423453246\`.                                                                                                                                                                       |
| \`400\`       | N/A                                   | "you can't sub yourself"                                                                                           | Subscribing to your own presence status is not allowed.                                                                                                                                                              | Remove yourself from the list of users you subscribe to.                                                                                                                                                                                                                                                                                                                                                                                           |
| \`400\`       | N/A                                   | "too many sub presence"                                                                                            | The number of presence subscriptions exceeds the limit.                                                                                                                                                              | You can subscribe to the presence status of up to 100 user IDs at a time.                                                                                                                                                                                                                                                                                                                                                                          |
| \`400\`       | N/A                                   | "too many get presences"                                                                                           | The number of presence statuses you are trying to retrieve exceeds the limit.                                                                                                                                        | You can retrieve the presence status of up to 100 user IDs at a time.                                                                                                                                                                                                                                                                                                                                                                              |
| \`400\`       | N/A                                   | "too many unsub presences"                                                                                         | The number of users you are trying to unsubscribe from exceeds the limit.                                                                                                                                            | You can unsubscribe from the presence status of up to 100 user IDs at a time.                                                                                                                                                                                                                                                                                                                                                                      |
| \`400\`       | N/A                                   | "too many queries"                                                                                                 | The call frequency exceeds the limit.                                                                                                                                                                                | Reduce the frequency of your API calls.                                                                                                                                                                                                                                                                                                                                                                                                            |

### 401 Unauthorized [#401-unauthorized]

Indicates that the authentication process could not be implemented due to invalid tokens.

| Status code | Error code              | Error message                                             | Description                                                                                                                                                                                                                                                                                          | Fix                                                   |
| :---------- | :---------------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| \`401\`       | \`unauthorized\`          | "Registration is not open, please contact the app admin." | The app token is missing, incorrect, expired, or in an invalid format when calling [Registering a user](/en/api-reference/api-ref/im/user-system-registration#registering-a-user) or [Registering multiple users](/en/api-reference/api-ref/im/user-system-registration#registering-multiple-users). | Pass a valid app token.                               |
| \`401\`       | \`unauthorized\`          | "Unable to authenticate due to expired access token."     | The app token is missing or expired when calling any RESTful API other than the user registration APIs.                                                                                                                                                                                              | Pass a valid app token.                               |
| \`401\`       | \`auth_bad_access_token\` | "Unable to authenticate due to corrupt access token."     | The app token is in an invalid format when calling any RESTful API other than the user registration APIs.                                                                                                                                                                                            | Pass a valid app token.                               |
| \`401\`       | \`auth_bad_access_token\` | "Unable to authenticate."                                 | The app token format is correct but was not generated by the server that receives the request. This happens when calling any RESTful API other than the user registration APIs.                                                                                                                      | Pass a valid app token generated by the Agora server. |

### 403 Forbidden [#403-forbidden]

Indicates that the API request is rejected by the server due to forbidden operations.

| Status code | Error code     | Error message                                                                             | Description                                                                       | Fix                                                                       |
| :---------- | :------------- | :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| \`403\`       | \`forbidden_op\` | "Can not join this group, reason: user: \`{username}\` already in group: \`{group_id}\`."     | The user is already a member of the group.                                        | Do not add duplicate users to the group.                                  |
| \`403\`       | \`forbidden_op\` | "Users \`{username}\` are not members of this group!"                                       | The user to be removed is not a member of the group.                              | Only remove users who are members of the group.                           |
| \`403\`       | \`forbidden_op\` | "User: \`{username}\` doesn't exist in group: \`{group_id}\`."                                | The user to be assigned ownership is not a member of the group.                   | Transfer ownership only to members within the group.                      |
| \`403\`       | \`forbidden_op\` | "New owner and old owner are the same."                                                   | The new owner is the same as the current owner.                                   | Transfer ownership to a different member.                                 |
| \`403\`       | \`forbidden_op\` | "Forbidden operation on group owner!"                                                     | The operation is not allowed on the group owner, such as blocking the owner.      | Do not perform restricted actions on the group owner.                     |
| \`403\`       | \`forbidden_op\` | "Can not join this group, reason：user: \`{username}\` has joined too many groups/chatroom!" | The user has joined the maximum number of groups or chat rooms.                   | Users cannot join more than the allowed number of groups or chat rooms.   |
| \`403\`       | \`forbidden_op\` | "This appKey has created too many groups/chatrooms!"                                      | The App Key has reached the limit for creating groups or chat rooms.              | Users cannot create more than the allowed number of groups or chat rooms. |
| \`403\`       | \`exceed_limit\` | "Invitee's contact max count"                                                             | The user receiving the friend request has reached the maximum number of contacts. | The maximum number of contacts for a user has been reached.               |
| \`403\`       | \`exceed_limit\` | "Inviter's contact max count"                                                             | The user sending the friend request has reached the maximum number of contacts.   | The maximum number of contacts for a user has been reached.               |

### 404 Not Found [#404-not-found]

Indicates that the specified resources of the API request could not be found by the server.

| Status code | Error code                           | Error message                                                                                     | Description                                                                                                                       | Fix                                                                                                                             |
| :---------- | :----------------------------------- | :------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| \`404\`       | \`organization_application_not_found\` | "Could not find application for \`{org_url}\` from URI: \`{app_url}\`/token."                         | The specified organization or application does not exist.                                                                         | Pass the correct \`app_id\` when calling the RESTful API.                                                                         |
| \`404\`       | \`service_resource_not_found\`         | "Service resource not found."                                                                     | The specified user, group, or chat room does not exist when calling user-, group-, or chat room–related APIs.                     | Pass the correct User ID, Group ID, or Chat Room ID when calling the RESTful API.                                               |
| \`404\`       | \`resource_not_found\`                 | "username XXXX doesn't exist"                                                                     | The specified user does not exist. For example, the invited user during group creation does not exist.                            | Pass the correct User ID when calling the RESTful API.                                                                          |
| \`404\`       | \`service_resource_not_found\`         | "Service resource not found."                                                                     | The specified user does not exist, or dirty data blocks the operation. Delete the user by UUID and re-register the same username. | Pass the UUID to delete the user, then register the username again.                                                             |
| \`404\`       | \`storage_object_not_found\`           | "Failed to find chat message history download URL for appkey: \`{app_key}\`, time: \`{yyyymmddhh}\`." | No chat history exists within the queried time period.                                                                            | [Submit a ticket](https://agora-ticket.agora.io/) to Agora Support.                                                             |
| \`404\`       | \`file_expired\`                       | "file xxxxx is expired"                                                                           | The file has expired.                                                                                                             | By default, message attachments are stored for 7 days. To extend storage, contact [support@agora.io](mailto\\:support@agora.io). |

### 405 Method Not Allowed [#405-method-not-allowed]

Indicates that the API request method is not supported by the server.

**Fix:** Follow the RESTful API documentation and use the correct request methods: \`GET\`, \`POST\`, \`PUT\`, and \`DELETE\`.

### 408 Request Timeout [#408-request-timeout]

Indicates that the server did not receive the API request within the allotted time.

**Fix:** Resend the request.

### 413 Payload Too Large [#413-payload-too-large]

Indicates that the API request is larger than the maximum server can process.

| Status code | Error code                     | Error message                              | Description                                                                                                                                                          | Fix                                                                                                                   |
| :---------- | :----------------------------- | :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| \`413\`       | \`file exceeding maximum limit\` | "the file size exceeds the maximum limit." | The size of the message attachment uploaded using the [message upload API](/en/api-reference/api-ref/im/message-management#upload-a-file) exceeds the allowed limit. | For more information about the size limit of message attachments, see [Message Length](./limitations#message-length). |

### 415 Unsupported Media Type [#415-unsupported-media-type]

Indicates that the format of the API request is not supported by the server.

| Status code | Error code        | Error message             | Description                                                                                                                                                                                                                                          | Fix                                                                                                                                                                                                             |
| :---------- | :---------------- | :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`415\`       | \`web_application\` | "Unsupported Media Type." | The format of the client request is not supported by the server. For example, the request header includes extra parameters, does not include \`"Content-Type": "application/json"\`, or the request body does not conform to the standard JSON format. | Ensure that the request format meets the server’s requirements. For example, include \`"Content-Type": "application/json"\` in the request header and ensure that the request body uses the standard JSON format. |

### 429 Too Many Requests [#429-too-many-requests]

Indicates that the API request exceeds the allowed call limit.

| Status code | Error code         | Error message                                                                                    | Description                                                      | Fix                                                                                                                                                                                                                                          |
| :---------- | :----------------- | :----------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`429\`       | \`resource_limited\` | "You have exceeded the limit of the \`{pricing_plan}\` edition. Please upgrade to higher edition." | The usage of Chat exceeds the limit of the current pricing plan. | For usage limits, see [Pricing](/en/realtime-media/im/reference/pricing). To upgrade your pricing plan, contact [support@agora.io](mailto\\:support@agora.io).                                                                                |
| \`429\`       | \`reach_limit\`      | "This request has reached API limit."                                                            | The calling frequency of the Chat API exceeds the allowed limit. | You cannot exceed the call frequency limit for RESTful APIs. For details, see [RESTful API Call Frequency Limit](/en/api-reference/api-ref/im#features). To upgrade your pricing plan, contact [support@agora.io](mailto\\:support@agora.io). |

## \`5xx\` - Server error [#5xx---server-error]

These HTTP status codes indicate that the API request failed due to a server error. If the request continues to fail after retries, [submit a ticket](https://agoraio.zendesk.com/hc/en-us) to Agora Support and provide your system logs.

<CalloutContainer type="info">
  <CalloutDescription>
    If you encounter a 5xx error, [contact Agora technical support](https://agoraio.zendesk.com/hc/en-us).
  </CalloutDescription>
</CalloutContainer>

### 500 Internal Server Error [#500-internal-server-error]

Indicates that the server encountered an unexpected condition that prevents it from fulfilling the request.

| Status code | Error code                      | Error message                                                                                                                 | Description                                                                                                      |
| :---------- | :------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| \`500\`       | \`no_full_text_index\`            | "Entity 'user' with property named 'username' is not full text indexed. You cannot use the 'contains' operand on this field." | The \`contains\` operand cannot be used on the \`username\` property because it does not support full-text indexing. |
| \`500\`       | \`unsupported_service_operation\` | "Service operation not supported."                                                                                            | The request method is not supported by the request URL.                                                          |
| \`500\`       | \`web_application\`               | "javax.ws.rs.WebApplicationException"                                                                                         | The request URL is invalid.                                                                                      |

### 501 Not Implemented [#501-not-implemented]

The server cannot recognize or implement the API request.

### 502 Bad Gateway [#502-bad-gateway]

The server, while acting as a gateway or proxy, received an invalid response from the upstream server.

### 503 Service Unavailable [#503-service-unavailable]

The server is unavailable to handle the request.

### 504 Gateway Timeout [#504-gateway-timeout]

The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page describes the frequently returned HTTP status codes for the Chat RESTful API."
  }, {
    heading: "200---success",
    content: "The API request succeeds."
  }, {
    heading: "4xx---client-error",
    content: "The API request fails due to a client error. Troubleshoot based on the returned `error` code and retry the request."
  }, {
    heading: "400-bad-request",
    content: "Indicates that the API request could not be understood by the server because of malformed syntax."
  }, {
    heading: "400-bad-request",
    content: "Status code"
  }, {
    heading: "400-bad-request",
    content: "Error code"
  }, {
    heading: "400-bad-request",
    content: "Error message"
  }, {
    heading: "400-bad-request",
    content: "Description"
  }, {
    heading: "400-bad-request",
    content: "Fix"
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`json_parse`"
  }, {
    heading: "400-bad-request",
    content: '"Unexpected character."'
  }, {
    heading: "400-bad-request",
    content: "The request body does not conform to the standard JSON format, so the server cannot parse it properly."
  }, {
    heading: "400-bad-request",
    content: "Use tools to check and ensure that the JSON format is correct."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`illegal_argument`"
  }, {
    heading: "400-bad-request",
    content: `"Entity 'user' requires a property named username."`
  }, {
    heading: "400-bad-request",
    content: "The username is not specified when registering a user."
  }, {
    heading: "400-bad-request",
    content: "Pass the `username` parameter when registering a user."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`illegal_argument`"
  }, {
    heading: "400-bad-request",
    content: '"This is an invalid request."'
  }, {
    heading: "400-bad-request",
    content: "The request URL, header, or body is invalid."
  }, {
    heading: "400-bad-request",
    content: "Check that the request URL, header, and body are correct."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`illegal_argument`"
  }, {
    heading: "400-bad-request",
    content: `"'From' can't be empty."`
  }, {
    heading: "400-bad-request",
    content: "The sender is not specified when sending a message."
  }, {
    heading: "400-bad-request",
    content: "When sending a message, pass the `from` field."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`illegal_argument`"
  }, {
    heading: "400-bad-request",
    content: `"'Target\\_type' can only be 'users', 'chatgroups', or 'chatrooms'."`
  }, {
    heading: "400-bad-request",
    content: "A value other than `users`, `chatgroups`, or `chatrooms` is passed to `target_type` when sending a message."
  }, {
    heading: "400-bad-request",
    content: "The `target_type` parameter must be `users`, `chatgroups`, or `chatrooms`."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`illegal_argument`"
  }, {
    heading: "400-bad-request",
    content: '"`{username}` is not legal."'
  }, {
    heading: "400-bad-request",
    content: "The specified username is invalid when registering a user. For details, see Registering a user."
  }, {
    heading: "400-bad-request",
    content: "When registering a user, pass a valid user ID `username`."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`illegal_argument`"
  }, {
    heading: "400-bad-request",
    content: '"message is too large"'
  }, {
    heading: "400-bad-request",
    content: "The body or extension information of the message exceeds the allowed size."
  }, {
    heading: "400-bad-request",
    content: "Limit the content of the `body` and `ext` fields to no more than 5 KB."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`illegal_argument`"
  }, {
    heading: "400-bad-request",
    content: '"This `chatmessage` request is not supported."'
  }, {
    heading: "400-bad-request",
    content: "The specified time format is incorrect when querying chat history. The correct format is `yyyyMMddHH`."
  }, {
    heading: "400-bad-request",
    content: "Format the `time` parameter as `yyyyMMddHH`."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`illegal_argument`"
  }, {
    heading: "400-bad-request",
    content: '"Illegal arguments: appkey: `{app_key}`, time: `{yyyymmddhh}`, maybe chat message history is expired or unstored."'
  }, {
    heading: "400-bad-request",
    content: "The chat history for the queried time period has expired or has not been generated. For details, see Retrieving historical messages."
  }, {
    heading: "400-bad-request",
    content: "When retrieving chat history, note the following restrictions:A single request retrieves message history for one hour starting from the specified time.You can retrieve historical messages for up to the past 3 days. To extend this limit, contact support\\@agora.io.When platform message volume is high, generating historical records may take time. For time-sensitive requirements, pull records after 24 hours."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`invalid_parameter`"
  }, {
    heading: "400-bad-request",
    content: '"Some of `{group_id}` are not valid fields."'
  }, {
    heading: "400-bad-request",
    content: "The specified name, description, or size of the group is invalid when creating a group."
  }, {
    heading: "400-bad-request",
    content: "Create a group. Enter a valid group name, description, and maximum number of members."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "`duplicate_unique` `_property_exists`"
  }, {
    heading: "400-bad-request",
    content: '"Application null Entity user requires that property named `username` be unique, value of `{username}` exists."'
  }, {
    heading: "400-bad-request",
    content: "The specified `username` already exists when registering a user."
  }, {
    heading: "400-bad-request",
    content: "User IDs must be unique within the app. When registering a user, pass a unique user ID."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "N/A"
  }, {
    heading: "400-bad-request",
    content: '"set presence failed"'
  }, {
    heading: "400-bad-request",
    content: "The request to set the presence status failed."
  }, {
    heading: "400-bad-request",
    content: "Reset the user's presence status and ensure that the correct parameters are passed."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "N/A"
  }, {
    heading: "400-bad-request",
    content: '"ext is too big"'
  }, {
    heading: "400-bad-request",
    content: "The custom presence status exceeds the allowed length."
  }, {
    heading: "400-bad-request",
    content: "Limit the online status extension message to no more than 1024 bytes."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "N/A"
  }, {
    heading: "400-bad-request",
    content: '"resource not exist"'
  }, {
    heading: "400-bad-request",
    content: "The specified device resource does not exist."
  }, {
    heading: "400-bad-request",
    content: "Pass the correct device resource ID. The ID is a unique identifier assigned by the server in the format `{device type}_{resource ID}`, where `device type` can be `android`, `ios`, or `web`, and `resource ID` is assigned by the SDK. For example, `android_123423453246`."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "N/A"
  }, {
    heading: "400-bad-request",
    content: `"you can't sub yourself"`
  }, {
    heading: "400-bad-request",
    content: "Subscribing to your own presence status is not allowed."
  }, {
    heading: "400-bad-request",
    content: "Remove yourself from the list of users you subscribe to."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "N/A"
  }, {
    heading: "400-bad-request",
    content: '"too many sub presence"'
  }, {
    heading: "400-bad-request",
    content: "The number of presence subscriptions exceeds the limit."
  }, {
    heading: "400-bad-request",
    content: "You can subscribe to the presence status of up to 100 user IDs at a time."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "N/A"
  }, {
    heading: "400-bad-request",
    content: '"too many get presences"'
  }, {
    heading: "400-bad-request",
    content: "The number of presence statuses you are trying to retrieve exceeds the limit."
  }, {
    heading: "400-bad-request",
    content: "You can retrieve the presence status of up to 100 user IDs at a time."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "N/A"
  }, {
    heading: "400-bad-request",
    content: '"too many unsub presences"'
  }, {
    heading: "400-bad-request",
    content: "The number of users you are trying to unsubscribe from exceeds the limit."
  }, {
    heading: "400-bad-request",
    content: "You can unsubscribe from the presence status of up to 100 user IDs at a time."
  }, {
    heading: "400-bad-request",
    content: "`400`"
  }, {
    heading: "400-bad-request",
    content: "N/A"
  }, {
    heading: "400-bad-request",
    content: '"too many queries"'
  }, {
    heading: "400-bad-request",
    content: "The call frequency exceeds the limit."
  }, {
    heading: "400-bad-request",
    content: "Reduce the frequency of your API calls."
  }, {
    heading: "401-unauthorized",
    content: "Indicates that the authentication process could not be implemented due to invalid tokens."
  }, {
    heading: "401-unauthorized",
    content: "Status code"
  }, {
    heading: "401-unauthorized",
    content: "Error code"
  }, {
    heading: "401-unauthorized",
    content: "Error message"
  }, {
    heading: "401-unauthorized",
    content: "Description"
  }, {
    heading: "401-unauthorized",
    content: "Fix"
  }, {
    heading: "401-unauthorized",
    content: "`401`"
  }, {
    heading: "401-unauthorized",
    content: "`unauthorized`"
  }, {
    heading: "401-unauthorized",
    content: '"Registration is not open, please contact the app admin."'
  }, {
    heading: "401-unauthorized",
    content: "The app token is missing, incorrect, expired, or in an invalid format when calling Registering a user or Registering multiple users."
  }, {
    heading: "401-unauthorized",
    content: "Pass a valid app token."
  }, {
    heading: "401-unauthorized",
    content: "`401`"
  }, {
    heading: "401-unauthorized",
    content: "`unauthorized`"
  }, {
    heading: "401-unauthorized",
    content: '"Unable to authenticate due to expired access token."'
  }, {
    heading: "401-unauthorized",
    content: "The app token is missing or expired when calling any RESTful API other than the user registration APIs."
  }, {
    heading: "401-unauthorized",
    content: "Pass a valid app token."
  }, {
    heading: "401-unauthorized",
    content: "`401`"
  }, {
    heading: "401-unauthorized",
    content: "`auth_bad_access_token`"
  }, {
    heading: "401-unauthorized",
    content: '"Unable to authenticate due to corrupt access token."'
  }, {
    heading: "401-unauthorized",
    content: "The app token is in an invalid format when calling any RESTful API other than the user registration APIs."
  }, {
    heading: "401-unauthorized",
    content: "Pass a valid app token."
  }, {
    heading: "401-unauthorized",
    content: "`401`"
  }, {
    heading: "401-unauthorized",
    content: "`auth_bad_access_token`"
  }, {
    heading: "401-unauthorized",
    content: '"Unable to authenticate."'
  }, {
    heading: "401-unauthorized",
    content: "The app token format is correct but was not generated by the server that receives the request. This happens when calling any RESTful API other than the user registration APIs."
  }, {
    heading: "401-unauthorized",
    content: "Pass a valid app token generated by the Agora server."
  }, {
    heading: "403-forbidden",
    content: "Indicates that the API request is rejected by the server due to forbidden operations."
  }, {
    heading: "403-forbidden",
    content: "Status code"
  }, {
    heading: "403-forbidden",
    content: "Error code"
  }, {
    heading: "403-forbidden",
    content: "Error message"
  }, {
    heading: "403-forbidden",
    content: "Description"
  }, {
    heading: "403-forbidden",
    content: "Fix"
  }, {
    heading: "403-forbidden",
    content: "`403`"
  }, {
    heading: "403-forbidden",
    content: "`forbidden_op`"
  }, {
    heading: "403-forbidden",
    content: '"Can not join this group, reason: user: `{username}` already in group: `{group_id}`."'
  }, {
    heading: "403-forbidden",
    content: "The user is already a member of the group."
  }, {
    heading: "403-forbidden",
    content: "Do not add duplicate users to the group."
  }, {
    heading: "403-forbidden",
    content: "`403`"
  }, {
    heading: "403-forbidden",
    content: "`forbidden_op`"
  }, {
    heading: "403-forbidden",
    content: '"Users `{username}` are not members of this group!"'
  }, {
    heading: "403-forbidden",
    content: "The user to be removed is not a member of the group."
  }, {
    heading: "403-forbidden",
    content: "Only remove users who are members of the group."
  }, {
    heading: "403-forbidden",
    content: "`403`"
  }, {
    heading: "403-forbidden",
    content: "`forbidden_op`"
  }, {
    heading: "403-forbidden",
    content: '"User: `{username}` doesn\'t exist in group: `{group_id}`."'
  }, {
    heading: "403-forbidden",
    content: "The user to be assigned ownership is not a member of the group."
  }, {
    heading: "403-forbidden",
    content: "Transfer ownership only to members within the group."
  }, {
    heading: "403-forbidden",
    content: "`403`"
  }, {
    heading: "403-forbidden",
    content: "`forbidden_op`"
  }, {
    heading: "403-forbidden",
    content: '"New owner and old owner are the same."'
  }, {
    heading: "403-forbidden",
    content: "The new owner is the same as the current owner."
  }, {
    heading: "403-forbidden",
    content: "Transfer ownership to a different member."
  }, {
    heading: "403-forbidden",
    content: "`403`"
  }, {
    heading: "403-forbidden",
    content: "`forbidden_op`"
  }, {
    heading: "403-forbidden",
    content: '"Forbidden operation on group owner!"'
  }, {
    heading: "403-forbidden",
    content: "The operation is not allowed on the group owner, such as blocking the owner."
  }, {
    heading: "403-forbidden",
    content: "Do not perform restricted actions on the group owner."
  }, {
    heading: "403-forbidden",
    content: "`403`"
  }, {
    heading: "403-forbidden",
    content: "`forbidden_op`"
  }, {
    heading: "403-forbidden",
    content: '"Can not join this group, reason：user: `{username}` has joined too many groups/chatroom!"'
  }, {
    heading: "403-forbidden",
    content: "The user has joined the maximum number of groups or chat rooms."
  }, {
    heading: "403-forbidden",
    content: "Users cannot join more than the allowed number of groups or chat rooms."
  }, {
    heading: "403-forbidden",
    content: "`403`"
  }, {
    heading: "403-forbidden",
    content: "`forbidden_op`"
  }, {
    heading: "403-forbidden",
    content: '"This appKey has created too many groups/chatrooms!"'
  }, {
    heading: "403-forbidden",
    content: "The App Key has reached the limit for creating groups or chat rooms."
  }, {
    heading: "403-forbidden",
    content: "Users cannot create more than the allowed number of groups or chat rooms."
  }, {
    heading: "403-forbidden",
    content: "`403`"
  }, {
    heading: "403-forbidden",
    content: "`exceed_limit`"
  }, {
    heading: "403-forbidden",
    content: `"Invitee's contact max count"`
  }, {
    heading: "403-forbidden",
    content: "The user receiving the friend request has reached the maximum number of contacts."
  }, {
    heading: "403-forbidden",
    content: "The maximum number of contacts for a user has been reached."
  }, {
    heading: "403-forbidden",
    content: "`403`"
  }, {
    heading: "403-forbidden",
    content: "`exceed_limit`"
  }, {
    heading: "403-forbidden",
    content: `"Inviter's contact max count"`
  }, {
    heading: "403-forbidden",
    content: "The user sending the friend request has reached the maximum number of contacts."
  }, {
    heading: "403-forbidden",
    content: "The maximum number of contacts for a user has been reached."
  }, {
    heading: "404-not-found",
    content: "Indicates that the specified resources of the API request could not be found by the server."
  }, {
    heading: "404-not-found",
    content: "Status code"
  }, {
    heading: "404-not-found",
    content: "Error code"
  }, {
    heading: "404-not-found",
    content: "Error message"
  }, {
    heading: "404-not-found",
    content: "Description"
  }, {
    heading: "404-not-found",
    content: "Fix"
  }, {
    heading: "404-not-found",
    content: "`404`"
  }, {
    heading: "404-not-found",
    content: "`organization_application_not_found`"
  }, {
    heading: "404-not-found",
    content: '"Could not find application for `{org_url}` from URI: `{app_url}`/token."'
  }, {
    heading: "404-not-found",
    content: "The specified organization or application does not exist."
  }, {
    heading: "404-not-found",
    content: "Pass the correct `app_id` when calling the RESTful API."
  }, {
    heading: "404-not-found",
    content: "`404`"
  }, {
    heading: "404-not-found",
    content: "`service_resource_not_found`"
  }, {
    heading: "404-not-found",
    content: '"Service resource not found."'
  }, {
    heading: "404-not-found",
    content: "The specified user, group, or chat room does not exist when calling user-, group-, or chat room–related APIs."
  }, {
    heading: "404-not-found",
    content: "Pass the correct User ID, Group ID, or Chat Room ID when calling the RESTful API."
  }, {
    heading: "404-not-found",
    content: "`404`"
  }, {
    heading: "404-not-found",
    content: "`resource_not_found`"
  }, {
    heading: "404-not-found",
    content: `"username XXXX doesn't exist"`
  }, {
    heading: "404-not-found",
    content: "The specified user does not exist. For example, the invited user during group creation does not exist."
  }, {
    heading: "404-not-found",
    content: "Pass the correct User ID when calling the RESTful API."
  }, {
    heading: "404-not-found",
    content: "`404`"
  }, {
    heading: "404-not-found",
    content: "`service_resource_not_found`"
  }, {
    heading: "404-not-found",
    content: '"Service resource not found."'
  }, {
    heading: "404-not-found",
    content: "The specified user does not exist, or dirty data blocks the operation. Delete the user by UUID and re-register the same username."
  }, {
    heading: "404-not-found",
    content: "Pass the UUID to delete the user, then register the username again."
  }, {
    heading: "404-not-found",
    content: "`404`"
  }, {
    heading: "404-not-found",
    content: "`storage_object_not_found`"
  }, {
    heading: "404-not-found",
    content: '"Failed to find chat message history download URL for appkey: `{app_key}`, time: `{yyyymmddhh}`."'
  }, {
    heading: "404-not-found",
    content: "No chat history exists within the queried time period."
  }, {
    heading: "404-not-found",
    content: "Submit a ticket to Agora Support."
  }, {
    heading: "404-not-found",
    content: "`404`"
  }, {
    heading: "404-not-found",
    content: "`file_expired`"
  }, {
    heading: "404-not-found",
    content: '"file xxxxx is expired"'
  }, {
    heading: "404-not-found",
    content: "The file has expired."
  }, {
    heading: "404-not-found",
    content: "By default, message attachments are stored for 7 days. To extend storage, contact support\\@agora.io."
  }, {
    heading: "405-method-not-allowed",
    content: "Indicates that the API request method is not supported by the server."
  }, {
    heading: "405-method-not-allowed",
    content: "**Fix:** Follow the RESTful API documentation and use the correct request methods: `GET`, `POST`, `PUT`, and `DELETE`."
  }, {
    heading: "408-request-timeout",
    content: "Indicates that the server did not receive the API request within the allotted time."
  }, {
    heading: "408-request-timeout",
    content: "**Fix:** Resend the request."
  }, {
    heading: "413-payload-too-large",
    content: "Indicates that the API request is larger than the maximum server can process."
  }, {
    heading: "413-payload-too-large",
    content: "Status code"
  }, {
    heading: "413-payload-too-large",
    content: "Error code"
  }, {
    heading: "413-payload-too-large",
    content: "Error message"
  }, {
    heading: "413-payload-too-large",
    content: "Description"
  }, {
    heading: "413-payload-too-large",
    content: "Fix"
  }, {
    heading: "413-payload-too-large",
    content: "`413`"
  }, {
    heading: "413-payload-too-large",
    content: "`file exceeding maximum limit`"
  }, {
    heading: "413-payload-too-large",
    content: '"the file size exceeds the maximum limit."'
  }, {
    heading: "413-payload-too-large",
    content: "The size of the message attachment uploaded using the message upload API exceeds the allowed limit."
  }, {
    heading: "413-payload-too-large",
    content: "For more information about the size limit of message attachments, see Message Length."
  }, {
    heading: "415-unsupported-media-type",
    content: "Indicates that the format of the API request is not supported by the server."
  }, {
    heading: "415-unsupported-media-type",
    content: "Status code"
  }, {
    heading: "415-unsupported-media-type",
    content: "Error code"
  }, {
    heading: "415-unsupported-media-type",
    content: "Error message"
  }, {
    heading: "415-unsupported-media-type",
    content: "Description"
  }, {
    heading: "415-unsupported-media-type",
    content: "Fix"
  }, {
    heading: "415-unsupported-media-type",
    content: "`415`"
  }, {
    heading: "415-unsupported-media-type",
    content: "`web_application`"
  }, {
    heading: "415-unsupported-media-type",
    content: '"Unsupported Media Type."'
  }, {
    heading: "415-unsupported-media-type",
    content: 'The format of the client request is not supported by the server. For example, the request header includes extra parameters, does not include `"Content-Type": "application/json"`, or the request body does not conform to the standard JSON format.'
  }, {
    heading: "415-unsupported-media-type",
    content: 'Ensure that the request format meets the server’s requirements. For example, include `"Content-Type": "application/json"` in the request header and ensure that the request body uses the standard JSON format.'
  }, {
    heading: "429-too-many-requests",
    content: "Indicates that the API request exceeds the allowed call limit."
  }, {
    heading: "429-too-many-requests",
    content: "Status code"
  }, {
    heading: "429-too-many-requests",
    content: "Error code"
  }, {
    heading: "429-too-many-requests",
    content: "Error message"
  }, {
    heading: "429-too-many-requests",
    content: "Description"
  }, {
    heading: "429-too-many-requests",
    content: "Fix"
  }, {
    heading: "429-too-many-requests",
    content: "`429`"
  }, {
    heading: "429-too-many-requests",
    content: "`resource_limited`"
  }, {
    heading: "429-too-many-requests",
    content: '"You have exceeded the limit of the `{pricing_plan}` edition. Please upgrade to higher edition."'
  }, {
    heading: "429-too-many-requests",
    content: "The usage of Chat exceeds the limit of the current pricing plan."
  }, {
    heading: "429-too-many-requests",
    content: "For usage limits, see Pricing. To upgrade your pricing plan, contact support\\@agora.io."
  }, {
    heading: "429-too-many-requests",
    content: "`429`"
  }, {
    heading: "429-too-many-requests",
    content: "`reach_limit`"
  }, {
    heading: "429-too-many-requests",
    content: '"This request has reached API limit."'
  }, {
    heading: "429-too-many-requests",
    content: "The calling frequency of the Chat API exceeds the allowed limit."
  }, {
    heading: "429-too-many-requests",
    content: "You cannot exceed the call frequency limit for RESTful APIs. For details, see RESTful API Call Frequency Limit. To upgrade your pricing plan, contact support\\@agora.io."
  }, {
    heading: "5xx---server-error",
    content: "These HTTP status codes indicate that the API request failed due to a server error. If the request continues to fail after retries, submit a ticket to Agora Support and provide your system logs."
  }, {
    heading: "5xx---server-error",
    content: "If you encounter a 5xx error, contact Agora technical support."
  }, {
    heading: "500-internal-server-error",
    content: "Indicates that the server encountered an unexpected condition that prevents it from fulfilling the request."
  }, {
    heading: "500-internal-server-error",
    content: "Status code"
  }, {
    heading: "500-internal-server-error",
    content: "Error code"
  }, {
    heading: "500-internal-server-error",
    content: "Error message"
  }, {
    heading: "500-internal-server-error",
    content: "Description"
  }, {
    heading: "500-internal-server-error",
    content: "`500`"
  }, {
    heading: "500-internal-server-error",
    content: "`no_full_text_index`"
  }, {
    heading: "500-internal-server-error",
    content: `"Entity 'user' with property named 'username' is not full text indexed. You cannot use the 'contains' operand on this field."`
  }, {
    heading: "500-internal-server-error",
    content: "The `contains` operand cannot be used on the `username` property because it does not support full-text indexing."
  }, {
    heading: "500-internal-server-error",
    content: "`500`"
  }, {
    heading: "500-internal-server-error",
    content: "`unsupported_service_operation`"
  }, {
    heading: "500-internal-server-error",
    content: '"Service operation not supported."'
  }, {
    heading: "500-internal-server-error",
    content: "The request method is not supported by the request URL."
  }, {
    heading: "500-internal-server-error",
    content: "`500`"
  }, {
    heading: "500-internal-server-error",
    content: "`web_application`"
  }, {
    heading: "500-internal-server-error",
    content: '"javax.ws.rs.WebApplicationException"'
  }, {
    heading: "500-internal-server-error",
    content: "The request URL is invalid."
  }, {
    heading: "501-not-implemented",
    content: "The server cannot recognize or implement the API request."
  }, {
    heading: "502-bad-gateway",
    content: "The server, while acting as a gateway or proxy, received an invalid response from the upstream server."
  }, {
    heading: "503-service-unavailable",
    content: "The server is unavailable to handle the request."
  }, {
    heading: "504-gateway-timeout",
    content: "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server."
  }],
  headings: [{
    id: "200---success",
    content: "`200` - Success"
  }, {
    id: "4xx---client-error",
    content: "`4xx` - Client error"
  }, {
    id: "400-bad-request",
    content: "400 Bad Request"
  }, {
    id: "401-unauthorized",
    content: "401 Unauthorized"
  }, {
    id: "403-forbidden",
    content: "403 Forbidden"
  }, {
    id: "404-not-found",
    content: "404 Not Found"
  }, {
    id: "405-method-not-allowed",
    content: "405 Method Not Allowed"
  }, {
    id: "408-request-timeout",
    content: "408 Request Timeout"
  }, {
    id: "413-payload-too-large",
    content: "413 Payload Too Large"
  }, {
    id: "415-unsupported-media-type",
    content: "415 Unsupported Media Type"
  }, {
    id: "429-too-many-requests",
    content: "429 Too Many Requests"
  }, {
    id: "5xx---server-error",
    content: "`5xx` - Server error"
  }, {
    id: "500-internal-server-error",
    content: "500 Internal Server Error"
  }, {
    id: "501-not-implemented",
    content: "501 Not Implemented"
  }, {
    id: "502-bad-gateway",
    content: "502 Bad Gateway"
  }, {
    id: "503-service-unavailable",
    content: "503 Service Unavailable"
  }, {
    id: "504-gateway-timeout",
    content: "504 Gateway Timeout"
  }]
};
export let toc = [{
  depth: 2,
  url: "#200---success",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "200"
    }), " - Success"]
  })
}, {
  depth: 2,
  url: "#4xx---client-error",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "4xx"
    }), " - Client error"]
  })
}, {
  depth: 3,
  url: "#400-bad-request",
  title: _jsx(_Fragment, {
    children: "400 Bad Request"
  })
}, {
  depth: 3,
  url: "#401-unauthorized",
  title: _jsx(_Fragment, {
    children: "401 Unauthorized"
  })
}, {
  depth: 3,
  url: "#403-forbidden",
  title: _jsx(_Fragment, {
    children: "403 Forbidden"
  })
}, {
  depth: 3,
  url: "#404-not-found",
  title: _jsx(_Fragment, {
    children: "404 Not Found"
  })
}, {
  depth: 3,
  url: "#405-method-not-allowed",
  title: _jsx(_Fragment, {
    children: "405 Method Not Allowed"
  })
}, {
  depth: 3,
  url: "#408-request-timeout",
  title: _jsx(_Fragment, {
    children: "408 Request Timeout"
  })
}, {
  depth: 3,
  url: "#413-payload-too-large",
  title: _jsx(_Fragment, {
    children: "413 Payload Too Large"
  })
}, {
  depth: 3,
  url: "#415-unsupported-media-type",
  title: _jsx(_Fragment, {
    children: "415 Unsupported Media Type"
  })
}, {
  depth: 3,
  url: "#429-too-many-requests",
  title: _jsx(_Fragment, {
    children: "429 Too Many Requests"
  })
}, {
  depth: 2,
  url: "#5xx---server-error",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "5xx"
    }), " - Server error"]
  })
}, {
  depth: 3,
  url: "#500-internal-server-error",
  title: _jsx(_Fragment, {
    children: "500 Internal Server Error"
  })
}, {
  depth: 3,
  url: "#501-not-implemented",
  title: _jsx(_Fragment, {
    children: "501 Not Implemented"
  })
}, {
  depth: 3,
  url: "#502-bad-gateway",
  title: _jsx(_Fragment, {
    children: "502 Bad Gateway"
  })
}, {
  depth: 3,
  url: "#503-service-unavailable",
  title: _jsx(_Fragment, {
    children: "503 Service Unavailable"
  })
}, {
  depth: 3,
  url: "#504-gateway-timeout",
  title: _jsx(_Fragment, {
    children: "504 Gateway Timeout"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page describes the frequently returned HTTP status codes for the Chat RESTful API."
    }), `
`, _jsxs(_components.h2, {
      id: "200---success",
      children: [_jsx(_components.code, {
        children: "200"
      }), " - Success"]
    }), `
`, _jsx(_components.p, {
      children: "The API request succeeds."
    }), `
`, _jsxs(_components.h2, {
      id: "4xx---client-error",
      children: [_jsx(_components.code, {
        children: "4xx"
      }), " - Client error"]
    }), `
`, _jsxs(_components.p, {
      children: ["The API request fails due to a client error. Troubleshoot based on the returned ", _jsx(_components.code, {
        children: "error"
      }), " code and retry the request."]
    }), `
`, _jsx(_components.h3, {
      id: "400-bad-request",
      children: "400 Bad Request"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the API request could not be understood by the server because of malformed syntax."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
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
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Fix"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "json_parse"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Unexpected character."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request body does not conform to the standard JSON format, so the server cannot parse it properly."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use tools to check and ensure that the JSON format is correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "illegal_argument"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: `"Entity 'user' requires a property named username."`
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The username is not specified when registering a user."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Pass the ", _jsx(_components.code, {
              children: "username"
            }), " parameter when registering a user."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "illegal_argument"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"This is an invalid request."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request URL, header, or body is invalid."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check that the request URL, header, and body are correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "illegal_argument"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: `"'From' can't be empty."`
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The sender is not specified when sending a message."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["When sending a message, pass the ", _jsx(_components.code, {
              children: "from"
            }), " field."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "illegal_argument"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: `"'Target_type' can only be 'users', 'chatgroups', or 'chatrooms'."`
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["A value other than ", _jsx(_components.code, {
              children: "users"
            }), ", ", _jsx(_components.code, {
              children: "chatgroups"
            }), ", or ", _jsx(_components.code, {
              children: "chatrooms"
            }), " is passed to ", _jsx(_components.code, {
              children: "target_type"
            }), " when sending a message."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The ", _jsx(_components.code, {
              children: "target_type"
            }), " parameter must be ", _jsx(_components.code, {
              children: "users"
            }), ", ", _jsx(_components.code, {
              children: "chatgroups"
            }), ", or ", _jsx(_components.code, {
              children: "chatrooms"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "illegal_argument"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"', _jsx(_components.code, {
              children: "{username}"
            }), ' is not legal."']
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The specified username is invalid when registering a user. For details, see ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/user-system-registration#registering-a-user",
              children: "Registering a user"
            }), "."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["When registering a user, pass a valid user ID ", _jsx(_components.code, {
              children: "username"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "illegal_argument"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"message is too large"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The body or extension information of the message exceeds the allowed size."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Limit the content of the ", _jsx(_components.code, {
              children: "body"
            }), " and ", _jsx(_components.code, {
              children: "ext"
            }), " fields to no more than 5 KB."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "illegal_argument"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"This ', _jsx(_components.code, {
              children: "chatmessage"
            }), ' request is not supported."']
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The specified time format is incorrect when querying chat history. The correct format is ", _jsx(_components.code, {
              children: "yyyyMMddHH"
            }), "."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Format the ", _jsx(_components.code, {
              children: "time"
            }), " parameter as ", _jsx(_components.code, {
              children: "yyyyMMddHH"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "illegal_argument"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"Illegal arguments: appkey: ', _jsx(_components.code, {
              children: "{app_key}"
            }), ", time: ", _jsx(_components.code, {
              children: "{yyyymmddhh}"
            }), ', maybe chat message history is expired or unstored."']
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The chat history for the queried time period has expired or has not been generated. For details, see ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/message-management#retrieve-historical-messages",
              children: "Retrieving historical messages"
            }), "."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["When retrieving chat history, note the following restrictions", _jsx(_components.div, {}), " single request retrieves message history for one hour starting from the specified time.You can retrieve historical messages for up to the past 3 days. To extend this limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), ".When platform message volume is high, generating historical records may take time. For time-sensitive requirements, pull records after 24 hours."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "invalid_parameter"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"Some of ', _jsx(_components.code, {
              children: "{group_id}"
            }), ' are not valid fields."']
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The specified name, description, or size of the group is invalid when creating a group."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/chat-group-management/create-delete-retrieve-groups#creating-a-group",
              children: "Create a group"
            }), ". Enter a valid group name, description, and maximum number of members."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "duplicate_unique"
            }), " ", _jsx(_components.code, {
              children: "_property_exists"
            })]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"Application null Entity user requires that property named ', _jsx(_components.code, {
              children: "username"
            }), " be unique, value of ", _jsx(_components.code, {
              children: "{username}"
            }), ' exists."']
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The specified ", _jsx(_components.code, {
              children: "username"
            }), " already exists when registering a user."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["User IDs must be unique within the app. When ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/user-system-registration#registering-a-user",
              children: "registering a user"
            }), ", pass a unique user ID."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"set presence failed"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request to set the presence status failed."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Reset the user's presence status and ensure that the correct parameters are passed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"ext is too big"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The custom presence status exceeds the allowed length."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Limit the online status extension message to no more than 1024 bytes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"resource not exist"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The specified device resource does not exist."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Pass the correct device resource ID. The ID is a unique identifier assigned by the server in the format ", _jsx(_components.code, {
              children: "{device type}_{resource ID}"
            }), ", where ", _jsx(_components.code, {
              children: "device type"
            }), " can be ", _jsx(_components.code, {
              children: "android"
            }), ", ", _jsx(_components.code, {
              children: "ios"
            }), ", or ", _jsx(_components.code, {
              children: "web"
            }), ", and ", _jsx(_components.code, {
              children: "resource ID"
            }), " is assigned by the SDK. For example, ", _jsx(_components.code, {
              children: "android_123423453246"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: `"you can't sub yourself"`
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Subscribing to your own presence status is not allowed."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove yourself from the list of users you subscribe to."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"too many sub presence"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The number of presence subscriptions exceeds the limit."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You can subscribe to the presence status of up to 100 user IDs at a time."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"too many get presences"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The number of presence statuses you are trying to retrieve exceeds the limit."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You can retrieve the presence status of up to 100 user IDs at a time."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"too many unsub presences"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The number of users you are trying to unsubscribe from exceeds the limit."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You can unsubscribe from the presence status of up to 100 user IDs at a time."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"too many queries"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The call frequency exceeds the limit."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Reduce the frequency of your API calls."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "401-unauthorized",
      children: "401 Unauthorized"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the authentication process could not be implemented due to invalid tokens."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
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
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Fix"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "unauthorized"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Registration is not open, please contact the app admin."'
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The app token is missing, incorrect, expired, or in an invalid format when calling ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/user-system-registration#registering-a-user",
              children: "Registering a user"
            }), " or ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/user-system-registration#registering-multiple-users",
              children: "Registering multiple users"
            }), "."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pass a valid app token."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "unauthorized"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Unable to authenticate due to expired access token."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The app token is missing or expired when calling any RESTful API other than the user registration APIs."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pass a valid app token."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "auth_bad_access_token"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Unable to authenticate due to corrupt access token."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The app token is in an invalid format when calling any RESTful API other than the user registration APIs."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pass a valid app token."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "auth_bad_access_token"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Unable to authenticate."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The app token format is correct but was not generated by the server that receives the request. This happens when calling any RESTful API other than the user registration APIs."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pass a valid app token generated by the Agora server."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "403-forbidden",
      children: "403 Forbidden"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the API request is rejected by the server due to forbidden operations."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
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
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Fix"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "forbidden_op"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"Can not join this group, reason: user: ', _jsx(_components.code, {
              children: "{username}"
            }), " already in group: ", _jsx(_components.code, {
              children: "{group_id}"
            }), '."']
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user is already a member of the group."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Do not add duplicate users to the group."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "forbidden_op"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"Users ', _jsx(_components.code, {
              children: "{username}"
            }), ' are not members of this group!"']
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user to be removed is not a member of the group."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Only remove users who are members of the group."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "forbidden_op"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"User: ', _jsx(_components.code, {
              children: "{username}"
            }), " doesn't exist in group: ", _jsx(_components.code, {
              children: "{group_id}"
            }), '."']
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user to be assigned ownership is not a member of the group."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transfer ownership only to members within the group."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "forbidden_op"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"New owner and old owner are the same."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The new owner is the same as the current owner."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transfer ownership to a different member."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "forbidden_op"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Forbidden operation on group owner!"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The operation is not allowed on the group owner, such as blocking the owner."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Do not perform restricted actions on the group owner."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "forbidden_op"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"Can not join this group, reason：user: ', _jsx(_components.code, {
              children: "{username}"
            }), ' has joined too many groups/chatroom!"']
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user has joined the maximum number of groups or chat rooms."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Users cannot join more than the allowed number of groups or chat rooms."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "forbidden_op"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"This appKey has created too many groups/chatrooms!"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The App Key has reached the limit for creating groups or chat rooms."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Users cannot create more than the allowed number of groups or chat rooms."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "exceed_limit"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: `"Invitee's contact max count"`
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user receiving the friend request has reached the maximum number of contacts."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The maximum number of contacts for a user has been reached."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "exceed_limit"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: `"Inviter's contact max count"`
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user sending the friend request has reached the maximum number of contacts."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The maximum number of contacts for a user has been reached."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "404-not-found",
      children: "404 Not Found"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the specified resources of the API request could not be found by the server."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
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
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Fix"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "organization_application_not_found"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"Could not find application for ', _jsx(_components.code, {
              children: "{org_url}"
            }), " from URI: ", _jsx(_components.code, {
              children: "{app_url}"
            }), '/token."']
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The specified organization or application does not exist."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Pass the correct ", _jsx(_components.code, {
              children: "app_id"
            }), " when calling the RESTful API."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "service_resource_not_found"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Service resource not found."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The specified user, group, or chat room does not exist when calling user-, group-, or chat room–related APIs."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pass the correct User ID, Group ID, or Chat Room ID when calling the RESTful API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "resource_not_found"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: `"username XXXX doesn't exist"`
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The specified user does not exist. For example, the invited user during group creation does not exist."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pass the correct User ID when calling the RESTful API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "service_resource_not_found"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Service resource not found."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The specified user does not exist, or dirty data blocks the operation. Delete the user by UUID and re-register the same username."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pass the UUID to delete the user, then register the username again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "storage_object_not_found"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"Failed to find chat message history download URL for appkey: ', _jsx(_components.code, {
              children: "{app_key}"
            }), ", time: ", _jsx(_components.code, {
              children: "{yyyymmddhh}"
            }), '."']
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No chat history exists within the queried time period."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.a, {
              href: "https://agora-ticket.agora.io/",
              children: "Submit a ticket"
            }), " to Agora Support."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "file_expired"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"file xxxxx is expired"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The file has expired."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["By default, message attachments are stored for 7 days. To extend storage, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "405-method-not-allowed",
      children: "405 Method Not Allowed"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the API request method is not supported by the server."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Fix:"
      }), " Follow the RESTful API documentation and use the correct request methods: ", _jsx(_components.code, {
        children: "GET"
      }), ", ", _jsx(_components.code, {
        children: "POST"
      }), ", ", _jsx(_components.code, {
        children: "PUT"
      }), ", and ", _jsx(_components.code, {
        children: "DELETE"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "408-request-timeout",
      children: "408 Request Timeout"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the server did not receive the API request within the allotted time."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Fix:"
      }), " Resend the request."]
    }), `
`, _jsx(_components.h3, {
      id: "413-payload-too-large",
      children: "413 Payload Too Large"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the API request is larger than the maximum server can process."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
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
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Fix"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "413"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "file exceeding maximum limit"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"the file size exceeds the maximum limit."'
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The size of the message attachment uploaded using the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/message-management#upload-a-file",
              children: "message upload API"
            }), " exceeds the allowed limit."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["For more information about the size limit of message attachments, see ", _jsx(_components.a, {
              href: "./limitations#message-length",
              children: "Message Length"
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "415-unsupported-media-type",
      children: "415 Unsupported Media Type"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the format of the API request is not supported by the server."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
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
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Fix"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "415"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "web_application"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Unsupported Media Type."'
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The format of the client request is not supported by the server. For example, the request header includes extra parameters, does not include ", _jsx(_components.code, {
              children: '"Content-Type": "application/json"'
            }), ", or the request body does not conform to the standard JSON format."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Ensure that the request format meets the server’s requirements. For example, include ", _jsx(_components.code, {
              children: '"Content-Type": "application/json"'
            }), " in the request header and ensure that the request body uses the standard JSON format."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "429-too-many-requests",
      children: "429 Too Many Requests"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the API request exceeds the allowed call limit."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
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
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Fix"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "429"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "resource_limited"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ['"You have exceeded the limit of the ', _jsx(_components.code, {
              children: "{pricing_plan}"
            }), ' edition. Please upgrade to higher edition."']
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The usage of Chat exceeds the limit of the current pricing plan."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["For usage limits, see ", _jsx(_components.a, {
              href: "/en/realtime-media/im/reference/pricing",
              children: "Pricing"
            }), ". To upgrade your pricing plan, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "429"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "reach_limit"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"This request has reached API limit."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The calling frequency of the Chat API exceeds the allowed limit."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["You cannot exceed the call frequency limit for RESTful APIs. For details, see ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im#features",
              children: "RESTful API Call Frequency Limit"
            }), ". To upgrade your pricing plan, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h2, {
      id: "5xx---server-error",
      children: [_jsx(_components.code, {
        children: "5xx"
      }), " - Server error"]
    }), `
`, _jsxs(_components.p, {
      children: ["These HTTP status codes indicate that the API request failed due to a server error. If the request continues to fail after retries, ", _jsx(_components.a, {
        href: "https://agoraio.zendesk.com/hc/en-us",
        children: "submit a ticket"
      }), " to Agora Support and provide your system logs."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you encounter a 5xx error, ", _jsx(_components.a, {
            href: "https://agoraio.zendesk.com/hc/en-us",
            children: "contact Agora technical support"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "500-internal-server-error",
      children: "500 Internal Server Error"
    }), `
`, _jsx(_components.p, {
      children: "Indicates that the server encountered an unexpected condition that prevents it from fulfilling the request."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
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
              children: "500"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "no_full_text_index"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: `"Entity 'user' with property named 'username' is not full text indexed. You cannot use the 'contains' operand on this field."`
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The ", _jsx(_components.code, {
              children: "contains"
            }), " operand cannot be used on the ", _jsx(_components.code, {
              children: "username"
            }), " property because it does not support full-text indexing."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "500"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "unsupported_service_operation"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"Service operation not supported."'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request method is not supported by the request URL."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "500"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "web_application"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"javax.ws.rs.WebApplicationException"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request URL is invalid."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "501-not-implemented",
      children: "501 Not Implemented"
    }), `
`, _jsx(_components.p, {
      children: "The server cannot recognize or implement the API request."
    }), `
`, _jsx(_components.h3, {
      id: "502-bad-gateway",
      children: "502 Bad Gateway"
    }), `
`, _jsx(_components.p, {
      children: "The server, while acting as a gateway or proxy, received an invalid response from the upstream server."
    }), `
`, _jsx(_components.h3, {
      id: "503-service-unavailable",
      children: "503 Service Unavailable"
    }), `
`, _jsx(_components.p, {
      children: "The server is unavailable to handle the request."
    }), `
`, _jsx(_components.h3, {
      id: "504-gateway-timeout",
      children: "504 Gateway Timeout"
    }), `
`, _jsx(_components.p, {
      children: "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server."
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
