import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Chat Overview",
  description: "Gives an overview of RESTful APIs."
};
export let _markdown = `

Chat provides RESTful APIs through the REST platform. You can send HTTP requests to the Agora server through your business server to realize real-time communication on the server side.

## REST Platform Architecture [#rest-platform-architecture]

The Chat REST platform provides a multi-tenant architecture to manage resources in the form of a Collection. A Collection contains the following:

* Database
* Organizations (orgs)
* Apps (apps)
* Users (users)
* Chat groups (chatgroups)
* Chat messages (chatmessages)
* Chat files (chatfiles)

The user data of different orgs is isolated from each other. Under the same org, the user data of different apps is also isolated from each other. The data structure of an org is as follows:

Data structure of an org

![1642333129463](https://web-cdn.agora.io/docs-files/1642333129463)

## Prerequisites [#prerequisites]

Ensure that you meet the following requirements before calling the Chat RESTful APIs:

* You have [enabled and configured Chat in the Console](/en/realtime-media/im/get-started/enable).
* You have retrieved an app token from the app server. For details, see [Authentication with App Token](/en/realtime-media/im/build/secure-access-and-authentication/authentication).

## Features [#features]

### User system integration [#user-system-integration]

This group of methods enable you to implement user system management, including user registration, retrieving users, modifying user attributes, and deleting users.

| Name                                              | Method | Request                                                         | Description                                        | Rate Limits |
| :------------------------------------------------ | :----- | :-------------------------------------------------------------- | :------------------------------------------------- | :---------- |
| Registering a user                                | POST   | \`/app-id/{app_id}/users\`                                        | Creates a user account.                            | 100/second  |
| Registering multiple users                        | POST   | \`/app-id/{app_id}/users\`                                        | Creates multiple user accounts.                    | 100/second  |
| Retrieving a user                                 | GET    | \`/app-id/{app_id}/users/{username}\`                             | Retrieves the information of the specified user.   | 100/second  |
| Retrieving multiple users.                        | GET    | \`/app-id/{app_id}/users\`                                        | Retrieves the information of the specified users.  | 100/second  |
| Deleting a user                                   | DELETE | \`/app-id/{app_id}/users/{username}\`                             | Deletes the specified user.                        | 100/second  |
| Deleting multiple users                           | DELETE | \`/app-id/{app_id}/users\`                                        | Deletes all the users in the app.                  | 30/second   |
| Banning a user                                    | POST   | \`/app-id/{app_id}/users/{username}/deactivate\`                  | Bans a user.                                       | 100/second  |
| Unbanning a user                                  | POST   | \`/app-id/{app_id}/users/{username}/activate\`                    | Unbans a user.                                     | 100/second  |
| Forcing a user offline                            | POST   | \`/app-id/{app_id}/users/{username}/disconnect\`                  | Forcibly moves a user offline.                     | 100/second  |
| Querying the online state                         | GET    | \`/app-id/{app_id}/users/{username}/status\`                      | Queries whether a user is online.                  | 100/second  |
| Querying the online state of multiple users       | POST   | \`/app-id/{app_id}/users/batch/status\`                           | Queries whether multiple users are online.         | 50/second   |
| Querying the number of offline messages           | GET    | \`/app-id/{app_id}/users/{owner_username}/offline_msg_count\`     | Queries the number of offline messages a user has. | 100/second  |
| Querying the delivery state of an offline message | GET    | \`/app-id/{app_id}/users/{username}/offline_msg_status/{msg_id}\` | Queries the delivery state of an offline message.  | 100/second  |

### Push [#push]

This group of methods enables you to set the push message display mode, display nickname, and do-not-disturb mode.

| Name                                                  | Method | Request                             | Description                                                                                                | Rate Limits                                                                          |
| :---------------------------------------------------- | :----- | :---------------------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| Setting the display nickname                          | PUT    | \`/app-id/{app_id}/users/{username}\` | Sets the display nickname of the push message.                                                             | 100/second                                                                           |
| Setting the display options                           | PUT    | \`/app-id/{app_id}/users/{username}\` | Sets whether the push messages are displayed as notifications only or details are visible.                 | 100/second                                                                           |
| Setting do-not-disturb (DND)                          | PUT    | \`/app-id/{app_id}/users/{username}\` | Sets whether to enable DND, and the time to enable and disable DND.                                        | 100/second                                                                           |
| Sending push notifications to users                   | POST   | \`/app-id/{app_id}/push/single\`      | Sends push notifications to one or more users by specifying user IDs.                                      | 1200/minute                                                                          |
| Sending push notifications by labels                  | POST   | \`/app-id/{app_id}/push/list/label\`  | Sends push notifications to all users under one label, or the intersection of users under multiple labels. | 1200/minute, the number of concurrent ongoing tasks cannot exceed 3                  |
| Sending push notifications to all users under the app | POST   | \`/app-id/{app_id}/push/task\`        | Sends push notifications to all users under the app.                                                       | 5/minute & 100 times per day, the number of concurrent ongoing tasks cannot exceed 3 |

#### Push label [#push-label]

The total rate limit of the following methods is 100/second.

| Name                                                                              | Method | Request                                                 | Description                                                                                                  |
| :-------------------------------------------------------------------------------- | :----- | :------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------- |
| Creating a push label                                                             | POST   | \`/app-id/{app_id}/push/label\`                           | Sets a push label to group targeting users, to implement a bespoke push.                                     |
| Querying the detailed information of the specified push label.                    | GET    | \`/app-id/{app_id}/push/label/{labelname}\`               | Retrieves the detailed information of the specified push label.                                              |
| Querying the detailed information of push labels by page                          | GET    | \`/app-id/{app_id}/push/label\`                           | Retrieves the detailed information of multiple push labels by page.                                          |
| Deleting a push label                                                             | DELETE | \`/app-id/{app_id}/push/label/{labelname}\`               | Deletes the specified push label. You can delete one push label at each call.                                |
| Adding users to a push label                                                      | POST   | \`/app-id/{app_id}/push/label/{labelname}/user\`          | Adds one or more users to the specified push label. You can add a maximum of 100 users at each call.         |
| Querying the specified user under the specified push label                        | GET    | \`/app-id/{app_id}/push/label/{labelname}/user/{member}\` | Retrieves the detailed information of the specified user under the specified push label.                     |
| Querying the detailed information of users under the specified push label by page | GET    | \`/app-id/{app_id}/push/label/{labelname}/user\`          | Retrieves the detailed information of one or more users under the specified push label by page.              |
| Removing users from a push label                                                  | DELETE | \`/app-id/{app_id}/push/label/{labelname}/user\`          | Removes one or more users from the specified push label. You can remove a maximum of 100 users at each call. |

### Sending messages and uploading/downloading files [#sending-messages-and-uploadingdownloading-files]

This group of methods enables you to send text, image, voice, video, CMD, extension, file, custom, and other types of messages, as well as uploading and downloading files from the server.

| Name                                   | Method | Request                                          | Description                                                                                                                                                       | Rate Limits |
| :------------------------------------- | :----- | :----------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| Sending a message                      | POST   | \`/app-id/{app_id}/messages\`                      | App admins use this method to send messages to users, groups, and chat rooms. This method supports sending text, image, voice, video, command, and file messages. | 100/second  |
| Uploading files                        | POST   | \`/app-id/{app_id}/chatfiles\`                     | Uploads voice and image files.                                                                                                                                    | 100/second  |
| Downloading files                      | POST   | \`/app-id/{app_id}/chatfiles/{file_uuid}\`         | Downloads voice and image files.                                                                                                                                  | 100/second  |
| Retrieving historical messages         | GET    | \`/app-id/{app_id}/chatmessages/\${time}\`          | Retrieves chat historical messages                                                                                                                                | 10/minute   |
| Modify a text or custom message        | PUT    | \`/app-id/{app_id}/messages/rewrite/{msg_id}\`     | Modifies a text message or custom message.                                                                                                                        | 100/second  |
| Recalling a message                    | POST   | \`app-id/{app_id}/messages/recall\`                | Recalls a message within two minutes after it is sent.                                                                                                            | 100/second  |
| Deleting conversations from the server | DELETE | \`/app-id/{app_id}/users/{userName}/user_channel\` | Deletes the conversation from the server.                                                                                                                         | 100/second  |

### User attributes [#user-attributes]

This group of methods enables you to set, retrieve, and delete user attributes.

| Name                                             | Method | Request                                     | Description                                                                                    | Rate Limits |
| :----------------------------------------------- | :----- | :------------------------------------------ | :--------------------------------------------------------------------------------------------- | :---------- |
| Setting user attributes                          | PUT    | \`/app-id/{app_id}/metadata/user/{username}\` | Sets the user attributes for the specified user.                                               | 100/second  |
| Retrieving user attributes                       | GET    | \`/app-id/{app_id}/metadata/user/{username}\` | Retrieves all the user attributes of the specified user.                                       | 100/second  |
| Retrieving the user attributes of multiple users | POST   | \`/app-id/{app_id}/metadata/user/get\`        | Retrieves multiple users' attributes by specifying the user name list and user attribute list. | 100/second  |
| Deleting user attributes                         | DELETE | \`/app-id/{app_id}/metadata/user/{username}\` | Deletes all the user attributes for the specified user.                                        | 100/second  |
| Retrieving the total size of user attributes     | GET    | \`/app-id/{app_id}/metadata/user/capacity\`   | Gets the total size of user attributes for all the users in the app.                           | 100/second  |

### Contact management [#contact-management]

This group of methods enables you to manage the user's contact list and block list.

| Name                          | Method | Request                                                                    | Description                                       | Rate Limits |
| :---------------------------- | :----- | :------------------------------------------------------------------------- | :------------------------------------------------ | :---------- |
| Adding a contact              | POST   | \`/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}\` | Adds the specified user as a contact.             | 100/second  |
| Removing a contact            | DELETE | \`/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}\` | Removes the specified user from the contact list. | 100/second  |
| Retrieving a contact list     | GET    | \`/app-id/{app_id}/users/{owner_username}/contacts/users\`                   | Retrieves the contact list.                       | 100/second  |
| Retrieving a block list       | GET    | \`/app-id/{app_id}/users/{owner_username}/blocks/users\`                     | Retrieves the block list.                         | 50/second   |
| Adding user to block list     | POST   | \`/app-id/{app_id}/users/{owner_username}/blocks/users\`                     | Add the specified user to the block list.         | 50/second   |
| Removing user from block list | DELETE | \`/app-id/{app_id}/users/{owner_username}/blocks/users/{blocked_username}\`  | Removes the specified user from the block list.   | 50/second   |

### Chat group management [#chat-group-management]

This group of methods enables you to create, retrieve, modify, and delete chat rooms.

| Name                                     | Method | Request                                                 | Description                                                                                                         | Rate Limits |
| :--------------------------------------- | :----- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ | :---------- |
| Retrieving all groups in the app by page | GET    | \`/app-id/{app_id}/chatgroups?limit={N}&cursor={cursor}\` | Retrieves the information of all the groups in the app by page.                                                     | 100/second  |
| Retrieving all the groups the user joins | GET    | \`/app-id/{app_id}/users/{username}/joined_chatgroups\`   | Retrieves all the groups the user joins by specifying the user name.                                                | 100/second  |
| Retrieving group details                 | GET    | \`/app-id/{app_id}/chatgroups/{group_ids}\`               | Retrieves group details by specifying the group ID.                                                                 | 100/second  |
| Creating a group                         | POST   | \`/app-id/{app_id}/chatgroups\`                           | Creates a group.                                                                                                    | 100/second  |
| Banning a group                          | POST   | \`/app-id/{app_id}/chatgroups/{group_id}/disable\`        | Bans the specified group. Groups are typically banned when too many users or messages violate community guidelines. | 100/second  |
| Unbanning a group                        | POST   | \`/app-id/{app_id}/chatgroups/{group_id}/enable\`         | Lifts a ban on the specified group.                                                                                 | 100/second  |
| Modifying group information              | PUT    | \`/app-id/{app_id}/chatgroups/{group_id}\`                | Modifies the group information.                                                                                     | 100/second  |
| Deleting a group                         | DELETE | \`/app-id/{app_id}/chatgroups/{group_id}\`                | Deletes a group.                                                                                                    | 100/second  |

### Chat group member management [#chat-group-member-management]

This group of methods enables you to manage group members, including adding and removing group members, transferring group ownership, and retrieving lists of group admins and members.

| Name                                      | Method | Request                                                    | Description                                             | Rate Limits |
| :---------------------------------------- | :----- | :--------------------------------------------------------- | :------------------------------------------------------ | :---------- |
| Retrieving group member list (Pagination) | GET    | \`/app-id/{app_id}/chatgroups/{group_id}/users\`             | Retrieves the member list of the group by pagination.   | 100/second  |
| Adding a group member                     | POST   | \`/app-id/{app_id}/chatgroups/{group_id}/users/{username}\`  | Adds a user to the group member list.                   | 100/second  |
| Adding multiple group members             | POST   | \`/app-id/{app_id}/chatgroups/{chatgroupid}/users\`          | Adds multiple users to the group member list.           | 100/second  |
| Removing a group member                   | DELETE | \`/app-id/{app_id}/chatgroups/{group_id}/users/{username}\`  | Removes the specified user from the group member list.  | 100/second  |
| Removing multiple group members           | DELETE | \`/app-id/{app_id}/chatgroups/{group_id}/users/{usernames}\` | Removes the specified users from the group member list. | 100/second  |
| Retrieving group admin list               | GET    | \`/app-id/{app_id}/chatgroups/{group_id}/admin\`             | Retrieves the group admin list.                         | 100/second  |
| Adding a group admin                      | POST   | \`/app-id/{app_id}/chatgroups/{group_id}/admin\`             | Adds the specified user to the group admin list.        | 100/second  |
| Removing a group admin                    | DELETE | \`/app-id/{app_id}/chatgroups/{group_id}/admin/{oldadmin}\`  | Removes the specified user from the group admin list.   | 100/second  |
| Transferring group ownership              | PUT    | \`/app-id/{app_id}/chatgroups/{groupid}\`                    | Transfers the group owner privileges.                   | 100/second  |

### Chat room management [#chat-room-management]

This group of methods enables you to create, retrieve, modify, and delete chat rooms.

| Name                                | Method | Request                                                                   | Description                                                                                                                                                                        | Rate Limits |
| :---------------------------------- | :----- | :------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| Retrieving all chat rooms by page   | GET    | \`/app-id/{app_id}/chatrooms?limit={N}&cursor={cursor}\`                    | Retrieves the information of all the chat rooms in the app by page.                                                                                                                | 50/second   |
| Retrieving chat rooms a user joins  | GET    | \`/app-id/{app_id}/users/{username}/joined_chatrooms\`                      | Retrieves the chat rooms that a user joins by specifying the username.                                                                                                             | 50/second   |
| Retrieving chat room details        | GET    | \`/app-id/{app_id}/chatrooms/{chatroom_id}\`                                | Retrieves the details of the chat room by specifying the chat room ID.                                                                                                             | 100/second  |
| Creating a chat room                | POST   | \`/app-id/{app_id}/chatrooms\`                                              | Creates a new chat room.                                                                                                                                                           | 50/second   |
| Modifying chat room information     | PUT    | \`/app-id/{app_id}/chatrooms/{chatroom_id}\`                                | Modifies the chat room information.                                                                                                                                                | 100/second  |
| Deleting a chat room                | DELETE | \`/app-id/{app_id}/chatrooms/{chatroom_id}\`                                | Deletes a chat room.                                                                                                                                                               | 100/second  |
| Setting custom attributes           | PUT    | \`/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}\`        | Adds new custom chat room attributes or modifies existing ones set by the current user.                                                                                            | 100/second  |
| Retrieving custom attributes        | POST   | \`/app-id/{app_id}/metadata/chatroom/{chatroom_id}\`                        | Retrieves the specified custom attributes of a chat room.                                                                                                                          | 100/second  |
| Forcibly setting custom attributes  | PUT    | \`/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced\` | In addition to adding new custom attributes or modifying the existing ones set by the current user, this method can also be used to overwrite the custom attributes set by others. | 100/second  |
| Removing custom attributes          | DELETE | \`/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}\`        | Removes custom attributes set by the current user. This method is only used to remove the key-value pairs set by the current user.                                                 | 100/second  |
| Forcibly removing custom attributes | DELETE | \`/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced\` | In addition to removing the custom attributes set by the current user, this method can also be used to remove custom attributes set by others.                                     | 100/second  |

### Chat room member management [#chat-room-member-management]

This group of methods enables you to add, retrieve, modify, and delete members from the chat room.

| Name                                          | Method | Request                                                     | Description                                                 | Rate Limits |
| :-------------------------------------------- | :----- | :---------------------------------------------------------- | :---------------------------------------------------------- | :---------- |
| Retrieving chat room member list (Pagination) | GET    | \`/app-id/{app_id}/chatrooms/{chatroom_id}/users\`            | Retrieves the member list of the chat room by pagination.   | 100/second  |
| Adding a chat room member                     | POST   | \`/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}\`  | Adds the specified user to the chat room member list.       | 100/second  |
| Adding multiple chat room members             | POST   | \`/app-id/{app_id}/chatrooms/{chatroomid}/users\`             | Adds multiple specified users to the chat room member list. | 100/second  |
| Removing a chat room member                   | DELETE | \`/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}\`  | Removes the specified user from the chat room member list.  | 100/second  |
| Removing multiple chat room members           | DELETE | \`/app-id/{app_id}/chatrooms/{chatroomid}/users/{usernames}\` | Removes the specified users from the chat room member list. | 100/second  |
| Retrieving chat room admin list               | GET    | \`/app-id/{app_id}/chatrooms/{chatroom_id}/admin\`            | Retrieves the chat room admin list.                         | 100/second  |
| Adding a chat room admin                      | POST   | \`/app-id/{app_id}/chatrooms/{chatroom_id}/admin\`            | Adds the specified user to the chat room admin list.        | 100/second  |
| Removing a chat room admin                    | DELETE | \`/app-id/{app_id}/chatrooms/{chatroom_id}/admin/{oldadmin}\` | Removes the specified user from the chat room admin list.   | 100/second  |

### Global mute [#global-mute]

This group of methods enables you to mute any user ID in one-to-one chats, chat groups, or chat rooms, preventing these users from sending messages to other chat users, chat groups, or chat rooms.

| Name                                          | Method | Request                           | Description                                                                                                                         | Rate Limits |
| --------------------------------------------- | ------ | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Globally mute a specified user                | POST   | \`/app-id/{app_id}/mutes\`          | Mutes a specified user in one-to-one chats, chat groups, or chat rooms.                                                             | 100/second  |
| Query the detailed information of global-mute | GET    | \`/app-id/{app_id}/mutes/username\` | Queries the detailed information of the global-mute settings of the specified user in one-to-one chats, chat groups, or chat rooms. | 100/second  |
| Retrieve all globally muted users             | GET    | \`/app-id/{app_id}/mutes\`          | Retrieves all the users that have been globally muted in the app.                                                                   | 100/second  |

### Presence [#presence]

This group of methods enable you to set the presence of a user, subscribe to the presence of multiple users, retrieve the presence status of multiple users, and retrieve the subscriptions of a user.

| Name                                                     | Method | Request                                                                     | Description                                              | Rate Limits |
| :------------------------------------------------------- | :----- | :-------------------------------------------------------------------------- | :------------------------------------------------------- | :---------- |
| Setting the presence status of a user                    | POST   | \`/app-id/{app_id}/users/{username}/presence/{resource}/{status}\`            | Sets the presence status of a user by user ID.           | 50/second   |
| Subscribing to the presence status of multiple users     | POST   | \`/app-id/{app_id}/users/{username}/presence/{expiry}\`                       | Subscribes to the presence status of multiple users.     | 50/second   |
| Retrieving the presence status of multiple users         | POST   | \`/app-id/{app_id}/users/{username}/presence\`                                | Retrieves the presence status of multiple users.         | 50/second   |
| Unsubscribing from the presence status of multiple users | DELETE | \`/app-id/{app_id}/users/{username}/presence\`                                | Unsubscribes from the presence status of multiple users. | 50/second   |
| Retrieving the subscriptions of a user                   | GET    | \`/app-id/{app_id}/users/{username}/presence/sublist?pageNum=1&pageSize=100\` | Retrieves the subscriptions of a user.                   | 50/second   |

### Reaction [#reaction]

This group of methods enable your chat users to reply the message with emojis.

| Name                                              | Method | Request                                          | Description                                                                                      | Rate Limits |
| ------------------------------------------------- | ------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ----------- |
| Create a reaction                                 | POST   | \`/app-id/{app_id}/reaction/user/{userId}\`        | Creates or adds a reaction to a specified message.                                               | 100/second  |
| Retrieve reactions with message IDs               | GET    | \`/app-id/{app_id}/reaction/user/{userId}\`        | Retrieves the information of the reaction according to the message ID.                           | 100/second  |
| Delete a reaction                                 | DELETE | \`/app-id/{app_id}/reaction/user/{userId}\`        | Deletes a reaction.                                                                              | 100/second  |
| Retrieve the detailed information of the reaction | GET    | \`/app-id/{app_id}/reaction/user/{userId}/detail\` | Retrieves the detailed information of the reaction by specifying the message ID and reaction ID. | 100/second  |

### Thread management [#thread-management]

This group of methods enable you to create a thread, modify a thread, delete a thread, and retrieve threads.

| Name                                                  | Method | Request                                                                                                    | Description                                                     | Rate Limits |
| :---------------------------------------------------- | :----- | :--------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------- | :---------- |
| Creating a thread                                     | POST   | \`/app-id/{app_id}/thread\`                                                                                  | Creates a thread.                                               | 100/second  |
| Modifying a thread                                    | PUT    | \`/app-id/{app_id}/thread/{thread_id}\`                                                                      | Modifies a thread.                                              | 100/second  |
| Deleting a thread                                     | DELETE | \`/app-id/{app_id}/thread/{thread_id}\`                                                                      | Deletes a thread.                                               | 100/second  |
| Retrieving all the threads under the app              | GET    | \`/app-id/{app_id}/thread?limit={limit}&cursor={cursor}&sort={sort}\`                                        | Retrieves all the threads under the app                         | 100/second  |
| Retrieving all the threads a user joins under the app | GET    | \`/app-id/{app_id}/threads/user/{username}?limit={limit}&cursor={cursor}&sort={sort}\`                       | Retrieves all the threads a user joins under the app            | 100/second  |
| Retrieving all the threads a user joins under a group | GET    | \`/app-id/{app_id}/threads/chatgroups/{group_id}/user/{username}?limit={limit}&cursor={cursor}&sort={sort}\` | Retrieves all the threads a user joins by user ID and group ID. | 100/second  |

### Thread member management [#thread-member-management]

This group of methods enable you to join a thread and remove members from the thread.

| Name                              | Method | Request                                                               | Description                                        | Rate Limits |
| :-------------------------------- | :----- | :-------------------------------------------------------------------- | :------------------------------------------------- | :---------- |
| Retrieving thread members         | GET    | \`/app-id/{app_id}/thread/{thread_id}/users?limit={N}&cursor={cursor}\` | Retrieves all the members in the specified thread. | 100/second  |
| Adding multiple users to a thread | POST   | \`/app-id/{app_id}/thread/{thread_id}/users\`                           | Adds multiple users to the specified thread.       | 100/second  |
| Removing multiple thread members  | DELETE | \`/app-id/{app_id}/threads/{thread_id}/users\`                          | Removes multiple users from the specified thread.  | 100/second  |

## Request structure [#request-structure]

### Authorization [#authorization]

The Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following \`Authorization\` field must be filled in the request header:

\`\`\`text
Authorization: Bearer \${token}
\`\`\`

In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. The Chat RESTful APIs only supports authenticating users using app tokens. For details, see [Authentication using App Token](/en/realtime-media/im/build/secure-access-and-authentication/authentication).

### Server address [#server-address]

Under the same project, all requests are sent to the same domain name. For how to get the domain name, see [Get the information of the Chat project](/en/realtime-media/im/get-started/enable#get-chat-project-information).

### Protocol [#protocol]

To ensure communication security, the Chat RESTful APIs only support the HTTPS protocol.

### Data Format [#data-format]

* Request: See the sample code of each API for the data format of the request.
* Response: The format of the response is JSON.

> All request URLs and request bodies are case sensitive.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Chat provides RESTful APIs through the REST platform. You can send HTTP requests to the Agora server through your business server to realize real-time communication on the server side."
  }, {
    heading: "rest-platform-architecture",
    content: "The Chat REST platform provides a multi-tenant architecture to manage resources in the form of a Collection. A Collection contains the following:"
  }, {
    heading: "rest-platform-architecture",
    content: "Database"
  }, {
    heading: "rest-platform-architecture",
    content: "Organizations (orgs)"
  }, {
    heading: "rest-platform-architecture",
    content: "Apps (apps)"
  }, {
    heading: "rest-platform-architecture",
    content: "Users (users)"
  }, {
    heading: "rest-platform-architecture",
    content: "Chat groups (chatgroups)"
  }, {
    heading: "rest-platform-architecture",
    content: "Chat messages (chatmessages)"
  }, {
    heading: "rest-platform-architecture",
    content: "Chat files (chatfiles)"
  }, {
    heading: "rest-platform-architecture",
    content: "The user data of different orgs is isolated from each other. Under the same org, the user data of different apps is also isolated from each other. The data structure of an org is as follows:"
  }, {
    heading: "rest-platform-architecture",
    content: "Data structure of an org"
  }, {
    heading: "prerequisites",
    content: "Ensure that you meet the following requirements before calling the Chat RESTful APIs:"
  }, {
    heading: "prerequisites",
    content: "You have enabled and configured Chat in the Console."
  }, {
    heading: "prerequisites",
    content: "You have retrieved an app token from the app server. For details, see Authentication with App Token."
  }, {
    heading: "user-system-integration",
    content: "This group of methods enable you to implement user system management, including user registration, retrieving users, modifying user attributes, and deleting users."
  }, {
    heading: "user-system-integration",
    content: "Name"
  }, {
    heading: "user-system-integration",
    content: "Method"
  }, {
    heading: "user-system-integration",
    content: "Request"
  }, {
    heading: "user-system-integration",
    content: "Description"
  }, {
    heading: "user-system-integration",
    content: "Rate Limits"
  }, {
    heading: "user-system-integration",
    content: "Registering a user"
  }, {
    heading: "user-system-integration",
    content: "POST"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users`"
  }, {
    heading: "user-system-integration",
    content: "Creates a user account."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Registering multiple users"
  }, {
    heading: "user-system-integration",
    content: "POST"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users`"
  }, {
    heading: "user-system-integration",
    content: "Creates multiple user accounts."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Retrieving a user"
  }, {
    heading: "user-system-integration",
    content: "GET"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "user-system-integration",
    content: "Retrieves the information of the specified user."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Retrieving multiple users."
  }, {
    heading: "user-system-integration",
    content: "GET"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users`"
  }, {
    heading: "user-system-integration",
    content: "Retrieves the information of the specified users."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Deleting a user"
  }, {
    heading: "user-system-integration",
    content: "DELETE"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "user-system-integration",
    content: "Deletes the specified user."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Deleting multiple users"
  }, {
    heading: "user-system-integration",
    content: "DELETE"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users`"
  }, {
    heading: "user-system-integration",
    content: "Deletes all the users in the app."
  }, {
    heading: "user-system-integration",
    content: "30/second"
  }, {
    heading: "user-system-integration",
    content: "Banning a user"
  }, {
    heading: "user-system-integration",
    content: "POST"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users/{username}/deactivate`"
  }, {
    heading: "user-system-integration",
    content: "Bans a user."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Unbanning a user"
  }, {
    heading: "user-system-integration",
    content: "POST"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users/{username}/activate`"
  }, {
    heading: "user-system-integration",
    content: "Unbans a user."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Forcing a user offline"
  }, {
    heading: "user-system-integration",
    content: "POST"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users/{username}/disconnect`"
  }, {
    heading: "user-system-integration",
    content: "Forcibly moves a user offline."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Querying the online state"
  }, {
    heading: "user-system-integration",
    content: "GET"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users/{username}/status`"
  }, {
    heading: "user-system-integration",
    content: "Queries whether a user is online."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Querying the online state of multiple users"
  }, {
    heading: "user-system-integration",
    content: "POST"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users/batch/status`"
  }, {
    heading: "user-system-integration",
    content: "Queries whether multiple users are online."
  }, {
    heading: "user-system-integration",
    content: "50/second"
  }, {
    heading: "user-system-integration",
    content: "Querying the number of offline messages"
  }, {
    heading: "user-system-integration",
    content: "GET"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users/{owner_username}/offline_msg_count`"
  }, {
    heading: "user-system-integration",
    content: "Queries the number of offline messages a user has."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "user-system-integration",
    content: "Querying the delivery state of an offline message"
  }, {
    heading: "user-system-integration",
    content: "GET"
  }, {
    heading: "user-system-integration",
    content: "`/app-id/{app_id}/users/{username}/offline_msg_status/{msg_id}`"
  }, {
    heading: "user-system-integration",
    content: "Queries the delivery state of an offline message."
  }, {
    heading: "user-system-integration",
    content: "100/second"
  }, {
    heading: "push",
    content: "This group of methods enables you to set the push message display mode, display nickname, and do-not-disturb mode."
  }, {
    heading: "push",
    content: "Name"
  }, {
    heading: "push",
    content: "Method"
  }, {
    heading: "push",
    content: "Request"
  }, {
    heading: "push",
    content: "Description"
  }, {
    heading: "push",
    content: "Rate Limits"
  }, {
    heading: "push",
    content: "Setting the display nickname"
  }, {
    heading: "push",
    content: "PUT"
  }, {
    heading: "push",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "push",
    content: "Sets the display nickname of the push message."
  }, {
    heading: "push",
    content: "100/second"
  }, {
    heading: "push",
    content: "Setting the display options"
  }, {
    heading: "push",
    content: "PUT"
  }, {
    heading: "push",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "push",
    content: "Sets whether the push messages are displayed as notifications only or details are visible."
  }, {
    heading: "push",
    content: "100/second"
  }, {
    heading: "push",
    content: "Setting do-not-disturb (DND)"
  }, {
    heading: "push",
    content: "PUT"
  }, {
    heading: "push",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "push",
    content: "Sets whether to enable DND, and the time to enable and disable DND."
  }, {
    heading: "push",
    content: "100/second"
  }, {
    heading: "push",
    content: "Sending push notifications to users"
  }, {
    heading: "push",
    content: "POST"
  }, {
    heading: "push",
    content: "`/app-id/{app_id}/push/single`"
  }, {
    heading: "push",
    content: "Sends push notifications to one or more users by specifying user IDs."
  }, {
    heading: "push",
    content: "1200/minute"
  }, {
    heading: "push",
    content: "Sending push notifications by labels"
  }, {
    heading: "push",
    content: "POST"
  }, {
    heading: "push",
    content: "`/app-id/{app_id}/push/list/label`"
  }, {
    heading: "push",
    content: "Sends push notifications to all users under one label, or the intersection of users under multiple labels."
  }, {
    heading: "push",
    content: "1200/minute, the number of concurrent ongoing tasks cannot exceed 3"
  }, {
    heading: "push",
    content: "Sending push notifications to all users under the app"
  }, {
    heading: "push",
    content: "POST"
  }, {
    heading: "push",
    content: "`/app-id/{app_id}/push/task`"
  }, {
    heading: "push",
    content: "Sends push notifications to all users under the app."
  }, {
    heading: "push",
    content: "5/minute & 100 times per day, the number of concurrent ongoing tasks cannot exceed 3"
  }, {
    heading: "push-label",
    content: "The total rate limit of the following methods is 100/second."
  }, {
    heading: "push-label",
    content: "Name"
  }, {
    heading: "push-label",
    content: "Method"
  }, {
    heading: "push-label",
    content: "Request"
  }, {
    heading: "push-label",
    content: "Description"
  }, {
    heading: "push-label",
    content: "Creating a push label"
  }, {
    heading: "push-label",
    content: "POST"
  }, {
    heading: "push-label",
    content: "`/app-id/{app_id}/push/label`"
  }, {
    heading: "push-label",
    content: "Sets a push label to group targeting users, to implement a bespoke push."
  }, {
    heading: "push-label",
    content: "Querying the detailed information of the specified push label."
  }, {
    heading: "push-label",
    content: "GET"
  }, {
    heading: "push-label",
    content: "`/app-id/{app_id}/push/label/{labelname}`"
  }, {
    heading: "push-label",
    content: "Retrieves the detailed information of the specified push label."
  }, {
    heading: "push-label",
    content: "Querying the detailed information of push labels by page"
  }, {
    heading: "push-label",
    content: "GET"
  }, {
    heading: "push-label",
    content: "`/app-id/{app_id}/push/label`"
  }, {
    heading: "push-label",
    content: "Retrieves the detailed information of multiple push labels by page."
  }, {
    heading: "push-label",
    content: "Deleting a push label"
  }, {
    heading: "push-label",
    content: "DELETE"
  }, {
    heading: "push-label",
    content: "`/app-id/{app_id}/push/label/{labelname}`"
  }, {
    heading: "push-label",
    content: "Deletes the specified push label. You can delete one push label at each call."
  }, {
    heading: "push-label",
    content: "Adding users to a push label"
  }, {
    heading: "push-label",
    content: "POST"
  }, {
    heading: "push-label",
    content: "`/app-id/{app_id}/push/label/{labelname}/user`"
  }, {
    heading: "push-label",
    content: "Adds one or more users to the specified push label. You can add a maximum of 100 users at each call."
  }, {
    heading: "push-label",
    content: "Querying the specified user under the specified push label"
  }, {
    heading: "push-label",
    content: "GET"
  }, {
    heading: "push-label",
    content: "`/app-id/{app_id}/push/label/{labelname}/user/{member}`"
  }, {
    heading: "push-label",
    content: "Retrieves the detailed information of the specified user under the specified push label."
  }, {
    heading: "push-label",
    content: "Querying the detailed information of users under the specified push label by page"
  }, {
    heading: "push-label",
    content: "GET"
  }, {
    heading: "push-label",
    content: "`/app-id/{app_id}/push/label/{labelname}/user`"
  }, {
    heading: "push-label",
    content: "Retrieves the detailed information of one or more users under the specified push label by page."
  }, {
    heading: "push-label",
    content: "Removing users from a push label"
  }, {
    heading: "push-label",
    content: "DELETE"
  }, {
    heading: "push-label",
    content: "`/app-id/{app_id}/push/label/{labelname}/user`"
  }, {
    heading: "push-label",
    content: "Removes one or more users from the specified push label. You can remove a maximum of 100 users at each call."
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "This group of methods enables you to send text, image, voice, video, CMD, extension, file, custom, and other types of messages, as well as uploading and downloading files from the server."
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Name"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Method"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Request"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Description"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Rate Limits"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Sending a message"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "POST"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "`/app-id/{app_id}/messages`"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "App admins use this method to send messages to users, groups, and chat rooms. This method supports sending text, image, voice, video, command, and file messages."
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "100/second"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Uploading files"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "POST"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "`/app-id/{app_id}/chatfiles`"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Uploads voice and image files."
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "100/second"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Downloading files"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "POST"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "`/app-id/{app_id}/chatfiles/{file_uuid}`"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Downloads voice and image files."
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "100/second"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Retrieving historical messages"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "GET"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "`/app-id/{app_id}/chatmessages/${time}`"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Retrieves chat historical messages"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "10/minute"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Modify a text or custom message"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "PUT"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "`/app-id/{app_id}/messages/rewrite/{msg_id}`"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Modifies a text message or custom message."
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "100/second"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Recalling a message"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "POST"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "`app-id/{app_id}/messages/recall`"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Recalls a message within two minutes after it is sent."
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "100/second"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Deleting conversations from the server"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "DELETE"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "`/app-id/{app_id}/users/{userName}/user_channel`"
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "Deletes the conversation from the server."
  }, {
    heading: "sending-messages-and-uploadingdownloading-files",
    content: "100/second"
  }, {
    heading: "user-attributes",
    content: "This group of methods enables you to set, retrieve, and delete user attributes."
  }, {
    heading: "user-attributes",
    content: "Name"
  }, {
    heading: "user-attributes",
    content: "Method"
  }, {
    heading: "user-attributes",
    content: "Request"
  }, {
    heading: "user-attributes",
    content: "Description"
  }, {
    heading: "user-attributes",
    content: "Rate Limits"
  }, {
    heading: "user-attributes",
    content: "Setting user attributes"
  }, {
    heading: "user-attributes",
    content: "PUT"
  }, {
    heading: "user-attributes",
    content: "`/app-id/{app_id}/metadata/user/{username}`"
  }, {
    heading: "user-attributes",
    content: "Sets the user attributes for the specified user."
  }, {
    heading: "user-attributes",
    content: "100/second"
  }, {
    heading: "user-attributes",
    content: "Retrieving user attributes"
  }, {
    heading: "user-attributes",
    content: "GET"
  }, {
    heading: "user-attributes",
    content: "`/app-id/{app_id}/metadata/user/{username}`"
  }, {
    heading: "user-attributes",
    content: "Retrieves all the user attributes of the specified user."
  }, {
    heading: "user-attributes",
    content: "100/second"
  }, {
    heading: "user-attributes",
    content: "Retrieving the user attributes of multiple users"
  }, {
    heading: "user-attributes",
    content: "POST"
  }, {
    heading: "user-attributes",
    content: "`/app-id/{app_id}/metadata/user/get`"
  }, {
    heading: "user-attributes",
    content: "Retrieves multiple users' attributes by specifying the user name list and user attribute list."
  }, {
    heading: "user-attributes",
    content: "100/second"
  }, {
    heading: "user-attributes",
    content: "Deleting user attributes"
  }, {
    heading: "user-attributes",
    content: "DELETE"
  }, {
    heading: "user-attributes",
    content: "`/app-id/{app_id}/metadata/user/{username}`"
  }, {
    heading: "user-attributes",
    content: "Deletes all the user attributes for the specified user."
  }, {
    heading: "user-attributes",
    content: "100/second"
  }, {
    heading: "user-attributes",
    content: "Retrieving the total size of user attributes"
  }, {
    heading: "user-attributes",
    content: "GET"
  }, {
    heading: "user-attributes",
    content: "`/app-id/{app_id}/metadata/user/capacity`"
  }, {
    heading: "user-attributes",
    content: "Gets the total size of user attributes for all the users in the app."
  }, {
    heading: "user-attributes",
    content: "100/second"
  }, {
    heading: "contact-management",
    content: "This group of methods enables you to manage the user's contact list and block list."
  }, {
    heading: "contact-management",
    content: "Name"
  }, {
    heading: "contact-management",
    content: "Method"
  }, {
    heading: "contact-management",
    content: "Request"
  }, {
    heading: "contact-management",
    content: "Description"
  }, {
    heading: "contact-management",
    content: "Rate Limits"
  }, {
    heading: "contact-management",
    content: "Adding a contact"
  }, {
    heading: "contact-management",
    content: "POST"
  }, {
    heading: "contact-management",
    content: "`/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}`"
  }, {
    heading: "contact-management",
    content: "Adds the specified user as a contact."
  }, {
    heading: "contact-management",
    content: "100/second"
  }, {
    heading: "contact-management",
    content: "Removing a contact"
  }, {
    heading: "contact-management",
    content: "DELETE"
  }, {
    heading: "contact-management",
    content: "`/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}`"
  }, {
    heading: "contact-management",
    content: "Removes the specified user from the contact list."
  }, {
    heading: "contact-management",
    content: "100/second"
  }, {
    heading: "contact-management",
    content: "Retrieving a contact list"
  }, {
    heading: "contact-management",
    content: "GET"
  }, {
    heading: "contact-management",
    content: "`/app-id/{app_id}/users/{owner_username}/contacts/users`"
  }, {
    heading: "contact-management",
    content: "Retrieves the contact list."
  }, {
    heading: "contact-management",
    content: "100/second"
  }, {
    heading: "contact-management",
    content: "Retrieving a block list"
  }, {
    heading: "contact-management",
    content: "GET"
  }, {
    heading: "contact-management",
    content: "`/app-id/{app_id}/users/{owner_username}/blocks/users`"
  }, {
    heading: "contact-management",
    content: "Retrieves the block list."
  }, {
    heading: "contact-management",
    content: "50/second"
  }, {
    heading: "contact-management",
    content: "Adding user to block list"
  }, {
    heading: "contact-management",
    content: "POST"
  }, {
    heading: "contact-management",
    content: "`/app-id/{app_id}/users/{owner_username}/blocks/users`"
  }, {
    heading: "contact-management",
    content: "Add the specified user to the block list."
  }, {
    heading: "contact-management",
    content: "50/second"
  }, {
    heading: "contact-management",
    content: "Removing user from block list"
  }, {
    heading: "contact-management",
    content: "DELETE"
  }, {
    heading: "contact-management",
    content: "`/app-id/{app_id}/users/{owner_username}/blocks/users/{blocked_username}`"
  }, {
    heading: "contact-management",
    content: "Removes the specified user from the block list."
  }, {
    heading: "contact-management",
    content: "50/second"
  }, {
    heading: "chat-group-management",
    content: "This group of methods enables you to create, retrieve, modify, and delete chat rooms."
  }, {
    heading: "chat-group-management",
    content: "Name"
  }, {
    heading: "chat-group-management",
    content: "Method"
  }, {
    heading: "chat-group-management",
    content: "Request"
  }, {
    heading: "chat-group-management",
    content: "Description"
  }, {
    heading: "chat-group-management",
    content: "Rate Limits"
  }, {
    heading: "chat-group-management",
    content: "Retrieving all groups in the app by page"
  }, {
    heading: "chat-group-management",
    content: "GET"
  }, {
    heading: "chat-group-management",
    content: "`/app-id/{app_id}/chatgroups?limit={N}&cursor={cursor}`"
  }, {
    heading: "chat-group-management",
    content: "Retrieves the information of all the groups in the app by page."
  }, {
    heading: "chat-group-management",
    content: "100/second"
  }, {
    heading: "chat-group-management",
    content: "Retrieving all the groups the user joins"
  }, {
    heading: "chat-group-management",
    content: "GET"
  }, {
    heading: "chat-group-management",
    content: "`/app-id/{app_id}/users/{username}/joined_chatgroups`"
  }, {
    heading: "chat-group-management",
    content: "Retrieves all the groups the user joins by specifying the user name."
  }, {
    heading: "chat-group-management",
    content: "100/second"
  }, {
    heading: "chat-group-management",
    content: "Retrieving group details"
  }, {
    heading: "chat-group-management",
    content: "GET"
  }, {
    heading: "chat-group-management",
    content: "`/app-id/{app_id}/chatgroups/{group_ids}`"
  }, {
    heading: "chat-group-management",
    content: "Retrieves group details by specifying the group ID."
  }, {
    heading: "chat-group-management",
    content: "100/second"
  }, {
    heading: "chat-group-management",
    content: "Creating a group"
  }, {
    heading: "chat-group-management",
    content: "POST"
  }, {
    heading: "chat-group-management",
    content: "`/app-id/{app_id}/chatgroups`"
  }, {
    heading: "chat-group-management",
    content: "Creates a group."
  }, {
    heading: "chat-group-management",
    content: "100/second"
  }, {
    heading: "chat-group-management",
    content: "Banning a group"
  }, {
    heading: "chat-group-management",
    content: "POST"
  }, {
    heading: "chat-group-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/disable`"
  }, {
    heading: "chat-group-management",
    content: "Bans the specified group. Groups are typically banned when too many users or messages violate community guidelines."
  }, {
    heading: "chat-group-management",
    content: "100/second"
  }, {
    heading: "chat-group-management",
    content: "Unbanning a group"
  }, {
    heading: "chat-group-management",
    content: "POST"
  }, {
    heading: "chat-group-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/enable`"
  }, {
    heading: "chat-group-management",
    content: "Lifts a ban on the specified group."
  }, {
    heading: "chat-group-management",
    content: "100/second"
  }, {
    heading: "chat-group-management",
    content: "Modifying group information"
  }, {
    heading: "chat-group-management",
    content: "PUT"
  }, {
    heading: "chat-group-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}`"
  }, {
    heading: "chat-group-management",
    content: "Modifies the group information."
  }, {
    heading: "chat-group-management",
    content: "100/second"
  }, {
    heading: "chat-group-management",
    content: "Deleting a group"
  }, {
    heading: "chat-group-management",
    content: "DELETE"
  }, {
    heading: "chat-group-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}`"
  }, {
    heading: "chat-group-management",
    content: "Deletes a group."
  }, {
    heading: "chat-group-management",
    content: "100/second"
  }, {
    heading: "chat-group-member-management",
    content: "This group of methods enables you to manage group members, including adding and removing group members, transferring group ownership, and retrieving lists of group admins and members."
  }, {
    heading: "chat-group-member-management",
    content: "Name"
  }, {
    heading: "chat-group-member-management",
    content: "Method"
  }, {
    heading: "chat-group-member-management",
    content: "Request"
  }, {
    heading: "chat-group-member-management",
    content: "Description"
  }, {
    heading: "chat-group-member-management",
    content: "Rate Limits"
  }, {
    heading: "chat-group-member-management",
    content: "Retrieving group member list (Pagination)"
  }, {
    heading: "chat-group-member-management",
    content: "GET"
  }, {
    heading: "chat-group-member-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/users`"
  }, {
    heading: "chat-group-member-management",
    content: "Retrieves the member list of the group by pagination."
  }, {
    heading: "chat-group-member-management",
    content: "100/second"
  }, {
    heading: "chat-group-member-management",
    content: "Adding a group member"
  }, {
    heading: "chat-group-member-management",
    content: "POST"
  }, {
    heading: "chat-group-member-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/users/{username}`"
  }, {
    heading: "chat-group-member-management",
    content: "Adds a user to the group member list."
  }, {
    heading: "chat-group-member-management",
    content: "100/second"
  }, {
    heading: "chat-group-member-management",
    content: "Adding multiple group members"
  }, {
    heading: "chat-group-member-management",
    content: "POST"
  }, {
    heading: "chat-group-member-management",
    content: "`/app-id/{app_id}/chatgroups/{chatgroupid}/users`"
  }, {
    heading: "chat-group-member-management",
    content: "Adds multiple users to the group member list."
  }, {
    heading: "chat-group-member-management",
    content: "100/second"
  }, {
    heading: "chat-group-member-management",
    content: "Removing a group member"
  }, {
    heading: "chat-group-member-management",
    content: "DELETE"
  }, {
    heading: "chat-group-member-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/users/{username}`"
  }, {
    heading: "chat-group-member-management",
    content: "Removes the specified user from the group member list."
  }, {
    heading: "chat-group-member-management",
    content: "100/second"
  }, {
    heading: "chat-group-member-management",
    content: "Removing multiple group members"
  }, {
    heading: "chat-group-member-management",
    content: "DELETE"
  }, {
    heading: "chat-group-member-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/users/{usernames}`"
  }, {
    heading: "chat-group-member-management",
    content: "Removes the specified users from the group member list."
  }, {
    heading: "chat-group-member-management",
    content: "100/second"
  }, {
    heading: "chat-group-member-management",
    content: "Retrieving group admin list"
  }, {
    heading: "chat-group-member-management",
    content: "GET"
  }, {
    heading: "chat-group-member-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/admin`"
  }, {
    heading: "chat-group-member-management",
    content: "Retrieves the group admin list."
  }, {
    heading: "chat-group-member-management",
    content: "100/second"
  }, {
    heading: "chat-group-member-management",
    content: "Adding a group admin"
  }, {
    heading: "chat-group-member-management",
    content: "POST"
  }, {
    heading: "chat-group-member-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/admin`"
  }, {
    heading: "chat-group-member-management",
    content: "Adds the specified user to the group admin list."
  }, {
    heading: "chat-group-member-management",
    content: "100/second"
  }, {
    heading: "chat-group-member-management",
    content: "Removing a group admin"
  }, {
    heading: "chat-group-member-management",
    content: "DELETE"
  }, {
    heading: "chat-group-member-management",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/admin/{oldadmin}`"
  }, {
    heading: "chat-group-member-management",
    content: "Removes the specified user from the group admin list."
  }, {
    heading: "chat-group-member-management",
    content: "100/second"
  }, {
    heading: "chat-group-member-management",
    content: "Transferring group ownership"
  }, {
    heading: "chat-group-member-management",
    content: "PUT"
  }, {
    heading: "chat-group-member-management",
    content: "`/app-id/{app_id}/chatgroups/{groupid}`"
  }, {
    heading: "chat-group-member-management",
    content: "Transfers the group owner privileges."
  }, {
    heading: "chat-group-member-management",
    content: "100/second"
  }, {
    heading: "chat-room-management",
    content: "This group of methods enables you to create, retrieve, modify, and delete chat rooms."
  }, {
    heading: "chat-room-management",
    content: "Name"
  }, {
    heading: "chat-room-management",
    content: "Method"
  }, {
    heading: "chat-room-management",
    content: "Request"
  }, {
    heading: "chat-room-management",
    content: "Description"
  }, {
    heading: "chat-room-management",
    content: "Rate Limits"
  }, {
    heading: "chat-room-management",
    content: "Retrieving all chat rooms by page"
  }, {
    heading: "chat-room-management",
    content: "GET"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/chatrooms?limit={N}&cursor={cursor}`"
  }, {
    heading: "chat-room-management",
    content: "Retrieves the information of all the chat rooms in the app by page."
  }, {
    heading: "chat-room-management",
    content: "50/second"
  }, {
    heading: "chat-room-management",
    content: "Retrieving chat rooms a user joins"
  }, {
    heading: "chat-room-management",
    content: "GET"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/users/{username}/joined_chatrooms`"
  }, {
    heading: "chat-room-management",
    content: "Retrieves the chat rooms that a user joins by specifying the username."
  }, {
    heading: "chat-room-management",
    content: "50/second"
  }, {
    heading: "chat-room-management",
    content: "Retrieving chat room details"
  }, {
    heading: "chat-room-management",
    content: "GET"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}`"
  }, {
    heading: "chat-room-management",
    content: "Retrieves the details of the chat room by specifying the chat room ID."
  }, {
    heading: "chat-room-management",
    content: "100/second"
  }, {
    heading: "chat-room-management",
    content: "Creating a chat room"
  }, {
    heading: "chat-room-management",
    content: "POST"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/chatrooms`"
  }, {
    heading: "chat-room-management",
    content: "Creates a new chat room."
  }, {
    heading: "chat-room-management",
    content: "50/second"
  }, {
    heading: "chat-room-management",
    content: "Modifying chat room information"
  }, {
    heading: "chat-room-management",
    content: "PUT"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}`"
  }, {
    heading: "chat-room-management",
    content: "Modifies the chat room information."
  }, {
    heading: "chat-room-management",
    content: "100/second"
  }, {
    heading: "chat-room-management",
    content: "Deleting a chat room"
  }, {
    heading: "chat-room-management",
    content: "DELETE"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}`"
  }, {
    heading: "chat-room-management",
    content: "Deletes a chat room."
  }, {
    heading: "chat-room-management",
    content: "100/second"
  }, {
    heading: "chat-room-management",
    content: "Setting custom attributes"
  }, {
    heading: "chat-room-management",
    content: "PUT"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}`"
  }, {
    heading: "chat-room-management",
    content: "Adds new custom chat room attributes or modifies existing ones set by the current user."
  }, {
    heading: "chat-room-management",
    content: "100/second"
  }, {
    heading: "chat-room-management",
    content: "Retrieving custom attributes"
  }, {
    heading: "chat-room-management",
    content: "POST"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/metadata/chatroom/{chatroom_id}`"
  }, {
    heading: "chat-room-management",
    content: "Retrieves the specified custom attributes of a chat room."
  }, {
    heading: "chat-room-management",
    content: "100/second"
  }, {
    heading: "chat-room-management",
    content: "Forcibly setting custom attributes"
  }, {
    heading: "chat-room-management",
    content: "PUT"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced`"
  }, {
    heading: "chat-room-management",
    content: "In addition to adding new custom attributes or modifying the existing ones set by the current user, this method can also be used to overwrite the custom attributes set by others."
  }, {
    heading: "chat-room-management",
    content: "100/second"
  }, {
    heading: "chat-room-management",
    content: "Removing custom attributes"
  }, {
    heading: "chat-room-management",
    content: "DELETE"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}`"
  }, {
    heading: "chat-room-management",
    content: "Removes custom attributes set by the current user. This method is only used to remove the key-value pairs set by the current user."
  }, {
    heading: "chat-room-management",
    content: "100/second"
  }, {
    heading: "chat-room-management",
    content: "Forcibly removing custom attributes"
  }, {
    heading: "chat-room-management",
    content: "DELETE"
  }, {
    heading: "chat-room-management",
    content: "`/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced`"
  }, {
    heading: "chat-room-management",
    content: "In addition to removing the custom attributes set by the current user, this method can also be used to remove custom attributes set by others."
  }, {
    heading: "chat-room-management",
    content: "100/second"
  }, {
    heading: "chat-room-member-management",
    content: "This group of methods enables you to add, retrieve, modify, and delete members from the chat room."
  }, {
    heading: "chat-room-member-management",
    content: "Name"
  }, {
    heading: "chat-room-member-management",
    content: "Method"
  }, {
    heading: "chat-room-member-management",
    content: "Request"
  }, {
    heading: "chat-room-member-management",
    content: "Description"
  }, {
    heading: "chat-room-member-management",
    content: "Rate Limits"
  }, {
    heading: "chat-room-member-management",
    content: "Retrieving chat room member list (Pagination)"
  }, {
    heading: "chat-room-member-management",
    content: "GET"
  }, {
    heading: "chat-room-member-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/users`"
  }, {
    heading: "chat-room-member-management",
    content: "Retrieves the member list of the chat room by pagination."
  }, {
    heading: "chat-room-member-management",
    content: "100/second"
  }, {
    heading: "chat-room-member-management",
    content: "Adding a chat room member"
  }, {
    heading: "chat-room-member-management",
    content: "POST"
  }, {
    heading: "chat-room-member-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}`"
  }, {
    heading: "chat-room-member-management",
    content: "Adds the specified user to the chat room member list."
  }, {
    heading: "chat-room-member-management",
    content: "100/second"
  }, {
    heading: "chat-room-member-management",
    content: "Adding multiple chat room members"
  }, {
    heading: "chat-room-member-management",
    content: "POST"
  }, {
    heading: "chat-room-member-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroomid}/users`"
  }, {
    heading: "chat-room-member-management",
    content: "Adds multiple specified users to the chat room member list."
  }, {
    heading: "chat-room-member-management",
    content: "100/second"
  }, {
    heading: "chat-room-member-management",
    content: "Removing a chat room member"
  }, {
    heading: "chat-room-member-management",
    content: "DELETE"
  }, {
    heading: "chat-room-member-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}`"
  }, {
    heading: "chat-room-member-management",
    content: "Removes the specified user from the chat room member list."
  }, {
    heading: "chat-room-member-management",
    content: "100/second"
  }, {
    heading: "chat-room-member-management",
    content: "Removing multiple chat room members"
  }, {
    heading: "chat-room-member-management",
    content: "DELETE"
  }, {
    heading: "chat-room-member-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroomid}/users/{usernames}`"
  }, {
    heading: "chat-room-member-management",
    content: "Removes the specified users from the chat room member list."
  }, {
    heading: "chat-room-member-management",
    content: "100/second"
  }, {
    heading: "chat-room-member-management",
    content: "Retrieving chat room admin list"
  }, {
    heading: "chat-room-member-management",
    content: "GET"
  }, {
    heading: "chat-room-member-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/admin`"
  }, {
    heading: "chat-room-member-management",
    content: "Retrieves the chat room admin list."
  }, {
    heading: "chat-room-member-management",
    content: "100/second"
  }, {
    heading: "chat-room-member-management",
    content: "Adding a chat room admin"
  }, {
    heading: "chat-room-member-management",
    content: "POST"
  }, {
    heading: "chat-room-member-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/admin`"
  }, {
    heading: "chat-room-member-management",
    content: "Adds the specified user to the chat room admin list."
  }, {
    heading: "chat-room-member-management",
    content: "100/second"
  }, {
    heading: "chat-room-member-management",
    content: "Removing a chat room admin"
  }, {
    heading: "chat-room-member-management",
    content: "DELETE"
  }, {
    heading: "chat-room-member-management",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/admin/{oldadmin}`"
  }, {
    heading: "chat-room-member-management",
    content: "Removes the specified user from the chat room admin list."
  }, {
    heading: "chat-room-member-management",
    content: "100/second"
  }, {
    heading: "global-mute",
    content: "This group of methods enables you to mute any user ID in one-to-one chats, chat groups, or chat rooms, preventing these users from sending messages to other chat users, chat groups, or chat rooms."
  }, {
    heading: "global-mute",
    content: "Name"
  }, {
    heading: "global-mute",
    content: "Method"
  }, {
    heading: "global-mute",
    content: "Request"
  }, {
    heading: "global-mute",
    content: "Description"
  }, {
    heading: "global-mute",
    content: "Rate Limits"
  }, {
    heading: "global-mute",
    content: "Globally mute a specified user"
  }, {
    heading: "global-mute",
    content: "POST"
  }, {
    heading: "global-mute",
    content: "`/app-id/{app_id}/mutes`"
  }, {
    heading: "global-mute",
    content: "Mutes a specified user in one-to-one chats, chat groups, or chat rooms."
  }, {
    heading: "global-mute",
    content: "100/second"
  }, {
    heading: "global-mute",
    content: "Query the detailed information of global-mute"
  }, {
    heading: "global-mute",
    content: "GET"
  }, {
    heading: "global-mute",
    content: "`/app-id/{app_id}/mutes/username`"
  }, {
    heading: "global-mute",
    content: "Queries the detailed information of the global-mute settings of the specified user in one-to-one chats, chat groups, or chat rooms."
  }, {
    heading: "global-mute",
    content: "100/second"
  }, {
    heading: "global-mute",
    content: "Retrieve all globally muted users"
  }, {
    heading: "global-mute",
    content: "GET"
  }, {
    heading: "global-mute",
    content: "`/app-id/{app_id}/mutes`"
  }, {
    heading: "global-mute",
    content: "Retrieves all the users that have been globally muted in the app."
  }, {
    heading: "global-mute",
    content: "100/second"
  }, {
    heading: "presence",
    content: "This group of methods enable you to set the presence of a user, subscribe to the presence of multiple users, retrieve the presence status of multiple users, and retrieve the subscriptions of a user."
  }, {
    heading: "presence",
    content: "Name"
  }, {
    heading: "presence",
    content: "Method"
  }, {
    heading: "presence",
    content: "Request"
  }, {
    heading: "presence",
    content: "Description"
  }, {
    heading: "presence",
    content: "Rate Limits"
  }, {
    heading: "presence",
    content: "Setting the presence status of a user"
  }, {
    heading: "presence",
    content: "POST"
  }, {
    heading: "presence",
    content: "`/app-id/{app_id}/users/{username}/presence/{resource}/{status}`"
  }, {
    heading: "presence",
    content: "Sets the presence status of a user by user ID."
  }, {
    heading: "presence",
    content: "50/second"
  }, {
    heading: "presence",
    content: "Subscribing to the presence status of multiple users"
  }, {
    heading: "presence",
    content: "POST"
  }, {
    heading: "presence",
    content: "`/app-id/{app_id}/users/{username}/presence/{expiry}`"
  }, {
    heading: "presence",
    content: "Subscribes to the presence status of multiple users."
  }, {
    heading: "presence",
    content: "50/second"
  }, {
    heading: "presence",
    content: "Retrieving the presence status of multiple users"
  }, {
    heading: "presence",
    content: "POST"
  }, {
    heading: "presence",
    content: "`/app-id/{app_id}/users/{username}/presence`"
  }, {
    heading: "presence",
    content: "Retrieves the presence status of multiple users."
  }, {
    heading: "presence",
    content: "50/second"
  }, {
    heading: "presence",
    content: "Unsubscribing from the presence status of multiple users"
  }, {
    heading: "presence",
    content: "DELETE"
  }, {
    heading: "presence",
    content: "`/app-id/{app_id}/users/{username}/presence`"
  }, {
    heading: "presence",
    content: "Unsubscribes from the presence status of multiple users."
  }, {
    heading: "presence",
    content: "50/second"
  }, {
    heading: "presence",
    content: "Retrieving the subscriptions of a user"
  }, {
    heading: "presence",
    content: "GET"
  }, {
    heading: "presence",
    content: "`/app-id/{app_id}/users/{username}/presence/sublist?pageNum=1&pageSize=100`"
  }, {
    heading: "presence",
    content: "Retrieves the subscriptions of a user."
  }, {
    heading: "presence",
    content: "50/second"
  }, {
    heading: "reaction",
    content: "This group of methods enable your chat users to reply the message with emojis."
  }, {
    heading: "reaction",
    content: "Name"
  }, {
    heading: "reaction",
    content: "Method"
  }, {
    heading: "reaction",
    content: "Request"
  }, {
    heading: "reaction",
    content: "Description"
  }, {
    heading: "reaction",
    content: "Rate Limits"
  }, {
    heading: "reaction",
    content: "Create a reaction"
  }, {
    heading: "reaction",
    content: "POST"
  }, {
    heading: "reaction",
    content: "`/app-id/{app_id}/reaction/user/{userId}`"
  }, {
    heading: "reaction",
    content: "Creates or adds a reaction to a specified message."
  }, {
    heading: "reaction",
    content: "100/second"
  }, {
    heading: "reaction",
    content: "Retrieve reactions with message IDs"
  }, {
    heading: "reaction",
    content: "GET"
  }, {
    heading: "reaction",
    content: "`/app-id/{app_id}/reaction/user/{userId}`"
  }, {
    heading: "reaction",
    content: "Retrieves the information of the reaction according to the message ID."
  }, {
    heading: "reaction",
    content: "100/second"
  }, {
    heading: "reaction",
    content: "Delete a reaction"
  }, {
    heading: "reaction",
    content: "DELETE"
  }, {
    heading: "reaction",
    content: "`/app-id/{app_id}/reaction/user/{userId}`"
  }, {
    heading: "reaction",
    content: "Deletes a reaction."
  }, {
    heading: "reaction",
    content: "100/second"
  }, {
    heading: "reaction",
    content: "Retrieve the detailed information of the reaction"
  }, {
    heading: "reaction",
    content: "GET"
  }, {
    heading: "reaction",
    content: "`/app-id/{app_id}/reaction/user/{userId}/detail`"
  }, {
    heading: "reaction",
    content: "Retrieves the detailed information of the reaction by specifying the message ID and reaction ID."
  }, {
    heading: "reaction",
    content: "100/second"
  }, {
    heading: "thread-management",
    content: "This group of methods enable you to create a thread, modify a thread, delete a thread, and retrieve threads."
  }, {
    heading: "thread-management",
    content: "Name"
  }, {
    heading: "thread-management",
    content: "Method"
  }, {
    heading: "thread-management",
    content: "Request"
  }, {
    heading: "thread-management",
    content: "Description"
  }, {
    heading: "thread-management",
    content: "Rate Limits"
  }, {
    heading: "thread-management",
    content: "Creating a thread"
  }, {
    heading: "thread-management",
    content: "POST"
  }, {
    heading: "thread-management",
    content: "`/app-id/{app_id}/thread`"
  }, {
    heading: "thread-management",
    content: "Creates a thread."
  }, {
    heading: "thread-management",
    content: "100/second"
  }, {
    heading: "thread-management",
    content: "Modifying a thread"
  }, {
    heading: "thread-management",
    content: "PUT"
  }, {
    heading: "thread-management",
    content: "`/app-id/{app_id}/thread/{thread_id}`"
  }, {
    heading: "thread-management",
    content: "Modifies a thread."
  }, {
    heading: "thread-management",
    content: "100/second"
  }, {
    heading: "thread-management",
    content: "Deleting a thread"
  }, {
    heading: "thread-management",
    content: "DELETE"
  }, {
    heading: "thread-management",
    content: "`/app-id/{app_id}/thread/{thread_id}`"
  }, {
    heading: "thread-management",
    content: "Deletes a thread."
  }, {
    heading: "thread-management",
    content: "100/second"
  }, {
    heading: "thread-management",
    content: "Retrieving all the threads under the app"
  }, {
    heading: "thread-management",
    content: "GET"
  }, {
    heading: "thread-management",
    content: "`/app-id/{app_id}/thread?limit={limit}&cursor={cursor}&sort={sort}`"
  }, {
    heading: "thread-management",
    content: "Retrieves all the threads under the app"
  }, {
    heading: "thread-management",
    content: "100/second"
  }, {
    heading: "thread-management",
    content: "Retrieving all the threads a user joins under the app"
  }, {
    heading: "thread-management",
    content: "GET"
  }, {
    heading: "thread-management",
    content: "`/app-id/{app_id}/threads/user/{username}?limit={limit}&cursor={cursor}&sort={sort}`"
  }, {
    heading: "thread-management",
    content: "Retrieves all the threads a user joins under the app"
  }, {
    heading: "thread-management",
    content: "100/second"
  }, {
    heading: "thread-management",
    content: "Retrieving all the threads a user joins under a group"
  }, {
    heading: "thread-management",
    content: "GET"
  }, {
    heading: "thread-management",
    content: "`/app-id/{app_id}/threads/chatgroups/{group_id}/user/{username}?limit={limit}&cursor={cursor}&sort={sort}`"
  }, {
    heading: "thread-management",
    content: "Retrieves all the threads a user joins by user ID and group ID."
  }, {
    heading: "thread-management",
    content: "100/second"
  }, {
    heading: "thread-member-management",
    content: "This group of methods enable you to join a thread and remove members from the thread."
  }, {
    heading: "thread-member-management",
    content: "Name"
  }, {
    heading: "thread-member-management",
    content: "Method"
  }, {
    heading: "thread-member-management",
    content: "Request"
  }, {
    heading: "thread-member-management",
    content: "Description"
  }, {
    heading: "thread-member-management",
    content: "Rate Limits"
  }, {
    heading: "thread-member-management",
    content: "Retrieving thread members"
  }, {
    heading: "thread-member-management",
    content: "GET"
  }, {
    heading: "thread-member-management",
    content: "`/app-id/{app_id}/thread/{thread_id}/users?limit={N}&cursor={cursor}`"
  }, {
    heading: "thread-member-management",
    content: "Retrieves all the members in the specified thread."
  }, {
    heading: "thread-member-management",
    content: "100/second"
  }, {
    heading: "thread-member-management",
    content: "Adding multiple users to a thread"
  }, {
    heading: "thread-member-management",
    content: "POST"
  }, {
    heading: "thread-member-management",
    content: "`/app-id/{app_id}/thread/{thread_id}/users`"
  }, {
    heading: "thread-member-management",
    content: "Adds multiple users to the specified thread."
  }, {
    heading: "thread-member-management",
    content: "100/second"
  }, {
    heading: "thread-member-management",
    content: "Removing multiple thread members"
  }, {
    heading: "thread-member-management",
    content: "DELETE"
  }, {
    heading: "thread-member-management",
    content: "`/app-id/{app_id}/threads/{thread_id}/users`"
  }, {
    heading: "thread-member-management",
    content: "Removes multiple users from the specified thread."
  }, {
    heading: "thread-member-management",
    content: "100/second"
  }, {
    heading: "authorization",
    content: "The Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following `Authorization` field must be filled in the request header:"
  }, {
    heading: "authorization",
    content: "In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. The Chat RESTful APIs only supports authenticating users using app tokens. For details, see Authentication using App Token."
  }, {
    heading: "server-address",
    content: "Under the same project, all requests are sent to the same domain name. For how to get the domain name, see Get the information of the Chat project."
  }, {
    heading: "protocol",
    content: "To ensure communication security, the Chat RESTful APIs only support the HTTPS protocol."
  }, {
    heading: "data-format",
    content: "Request: See the sample code of each API for the data format of the request."
  }, {
    heading: "data-format",
    content: "Response: The format of the response is JSON."
  }, {
    heading: "data-format",
    content: "> All request URLs and request bodies are case sensitive."
  }],
  headings: [{
    id: "rest-platform-architecture",
    content: "REST Platform Architecture"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "features",
    content: "Features"
  }, {
    id: "user-system-integration",
    content: "User system integration"
  }, {
    id: "push",
    content: "Push"
  }, {
    id: "push-label",
    content: "Push label"
  }, {
    id: "sending-messages-and-uploadingdownloading-files",
    content: "Sending messages and uploading/downloading files"
  }, {
    id: "user-attributes",
    content: "User attributes"
  }, {
    id: "contact-management",
    content: "Contact management"
  }, {
    id: "chat-group-management",
    content: "Chat group management"
  }, {
    id: "chat-group-member-management",
    content: "Chat group member management"
  }, {
    id: "chat-room-management",
    content: "Chat room management"
  }, {
    id: "chat-room-member-management",
    content: "Chat room member management"
  }, {
    id: "global-mute",
    content: "Global mute"
  }, {
    id: "presence",
    content: "Presence"
  }, {
    id: "reaction",
    content: "Reaction"
  }, {
    id: "thread-management",
    content: "Thread management"
  }, {
    id: "thread-member-management",
    content: "Thread member management"
  }, {
    id: "request-structure",
    content: "Request structure"
  }, {
    id: "authorization",
    content: "Authorization"
  }, {
    id: "server-address",
    content: "Server address"
  }, {
    id: "protocol",
    content: "Protocol"
  }, {
    id: "data-format",
    content: "Data Format"
  }]
};
export let toc = [{
  depth: 2,
  url: "#rest-platform-architecture",
  title: _jsx(_Fragment, {
    children: "REST Platform Architecture"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#features",
  title: _jsx(_Fragment, {
    children: "Features"
  })
}, {
  depth: 3,
  url: "#user-system-integration",
  title: _jsx(_Fragment, {
    children: "User system integration"
  })
}, {
  depth: 3,
  url: "#push",
  title: _jsx(_Fragment, {
    children: "Push"
  })
}, {
  depth: 4,
  url: "#push-label",
  title: _jsx(_Fragment, {
    children: "Push label"
  })
}, {
  depth: 3,
  url: "#sending-messages-and-uploadingdownloading-files",
  title: _jsx(_Fragment, {
    children: "Sending messages and uploading/downloading files"
  })
}, {
  depth: 3,
  url: "#user-attributes",
  title: _jsx(_Fragment, {
    children: "User attributes"
  })
}, {
  depth: 3,
  url: "#contact-management",
  title: _jsx(_Fragment, {
    children: "Contact management"
  })
}, {
  depth: 3,
  url: "#chat-group-management",
  title: _jsx(_Fragment, {
    children: "Chat group management"
  })
}, {
  depth: 3,
  url: "#chat-group-member-management",
  title: _jsx(_Fragment, {
    children: "Chat group member management"
  })
}, {
  depth: 3,
  url: "#chat-room-management",
  title: _jsx(_Fragment, {
    children: "Chat room management"
  })
}, {
  depth: 3,
  url: "#chat-room-member-management",
  title: _jsx(_Fragment, {
    children: "Chat room member management"
  })
}, {
  depth: 3,
  url: "#global-mute",
  title: _jsx(_Fragment, {
    children: "Global mute"
  })
}, {
  depth: 3,
  url: "#presence",
  title: _jsx(_Fragment, {
    children: "Presence"
  })
}, {
  depth: 3,
  url: "#reaction",
  title: _jsx(_Fragment, {
    children: "Reaction"
  })
}, {
  depth: 3,
  url: "#thread-management",
  title: _jsx(_Fragment, {
    children: "Thread management"
  })
}, {
  depth: 3,
  url: "#thread-member-management",
  title: _jsx(_Fragment, {
    children: "Thread member management"
  })
}, {
  depth: 2,
  url: "#request-structure",
  title: _jsx(_Fragment, {
    children: "Request structure"
  })
}, {
  depth: 3,
  url: "#authorization",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 3,
  url: "#server-address",
  title: _jsx(_Fragment, {
    children: "Server address"
  })
}, {
  depth: 3,
  url: "#protocol",
  title: _jsx(_Fragment, {
    children: "Protocol"
  })
}, {
  depth: 3,
  url: "#data-format",
  title: _jsx(_Fragment, {
    children: "Data Format"
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
    img: "img",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Chat provides RESTful APIs through the REST platform. You can send HTTP requests to the Agora server through your business server to realize real-time communication on the server side."
    }), `
`, _jsx(_components.h2, {
      id: "rest-platform-architecture",
      children: "REST Platform Architecture"
    }), `
`, _jsx(_components.p, {
      children: "The Chat REST platform provides a multi-tenant architecture to manage resources in the form of a Collection. A Collection contains the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Database"
      }), `
`, _jsx(_components.li, {
        children: "Organizations (orgs)"
      }), `
`, _jsx(_components.li, {
        children: "Apps (apps)"
      }), `
`, _jsx(_components.li, {
        children: "Users (users)"
      }), `
`, _jsx(_components.li, {
        children: "Chat groups (chatgroups)"
      }), `
`, _jsx(_components.li, {
        children: "Chat messages (chatmessages)"
      }), `
`, _jsx(_components.li, {
        children: "Chat files (chatfiles)"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The user data of different orgs is isolated from each other. Under the same org, the user data of different apps is also isolated from each other. The data structure of an org is as follows:"
    }), `
`, _jsx(_components.p, {
      children: "Data structure of an org"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1642333129463",
        alt: "1642333129463"
      })
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Ensure that you meet the following requirements before calling the Chat RESTful APIs:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["You have ", _jsx(_components.a, {
          href: "/en/realtime-media/im/get-started/enable",
          children: "enabled and configured Chat in the Console"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["You have retrieved an app token from the app server. For details, see ", _jsx(_components.a, {
          href: "/en/realtime-media/im/build/secure-access-and-authentication/authentication",
          children: "Authentication with App Token"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "features",
      children: "Features"
    }), `
`, _jsx(_components.h3, {
      id: "user-system-integration",
      children: "User system integration"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enable you to implement user system management, including user registration, retrieving users, modifying user attributes, and deleting users."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Registering a user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creates a user account."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Registering multiple users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creates multiple user accounts."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving a user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the information of the specified user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving multiple users."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the information of the specified users."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deleting a user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deletes the specified user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deleting multiple users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deletes all the users in the app."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Banning a user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/deactivate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bans a user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unbanning a user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/activate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unbans a user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Forcing a user offline"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/disconnect"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Forcibly moves a user offline."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Querying the online state"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/status"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Queries whether a user is online."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Querying the online state of multiple users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/batch/status"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Queries whether multiple users are online."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Querying the number of offline messages"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{owner_username}/offline_msg_count"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Queries the number of offline messages a user has."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Querying the delivery state of an offline message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/offline_msg_status/{msg_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Queries the delivery state of an offline message."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "push",
      children: "Push"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enables you to set the push message display mode, display nickname, and do-not-disturb mode."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Setting the display nickname"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets the display nickname of the push message."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Setting the display options"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets whether the push messages are displayed as notifications only or details are visible."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Setting do-not-disturb (DND)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets whether to enable DND, and the time to enable and disable DND."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sending push notifications to users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/single"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sends push notifications to one or more users by specifying user IDs."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1200/minute"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sending push notifications by labels"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/list/label"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sends push notifications to all users under one label, or the intersection of users under multiple labels."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1200/minute, the number of concurrent ongoing tasks cannot exceed 3"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sending push notifications to all users under the app"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/task"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sends push notifications to all users under the app."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5/minute & 100 times per day, the number of concurrent ongoing tasks cannot exceed 3"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "push-label",
      children: "Push label"
    }), `
`, _jsx(_components.p, {
      children: "The total rate limit of the following methods is 100/second."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
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
            children: "Creating a push label"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/label"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets a push label to group targeting users, to implement a bespoke push."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Querying the detailed information of the specified push label."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/label/{labelname}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the detailed information of the specified push label."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Querying the detailed information of push labels by page"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/label"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the detailed information of multiple push labels by page."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deleting a push label"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/label/{labelname}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deletes the specified push label. You can delete one push label at each call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding users to a push label"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/label/{labelname}/user"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds one or more users to the specified push label. You can add a maximum of 100 users at each call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Querying the specified user under the specified push label"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/label/{labelname}/user/{member}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the detailed information of the specified user under the specified push label."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Querying the detailed information of users under the specified push label by page"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/label/{labelname}/user"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the detailed information of one or more users under the specified push label by page."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing users from a push label"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/push/label/{labelname}/user"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes one or more users from the specified push label. You can remove a maximum of 100 users at each call."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "sending-messages-and-uploadingdownloading-files",
      children: "Sending messages and uploading/downloading files"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enables you to send text, image, voice, video, CMD, extension, file, custom, and other types of messages, as well as uploading and downloading files from the server."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sending a message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/messages"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "App admins use this method to send messages to users, groups, and chat rooms. This method supports sending text, image, voice, video, command, and file messages."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Uploading files"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatfiles"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Uploads voice and image files."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Downloading files"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatfiles/{file_uuid}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Downloads voice and image files."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving historical messages"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatmessages/${time}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves chat historical messages"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10/minute"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modify a text or custom message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/messages/rewrite/{msg_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifies a text message or custom message."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recalling a message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "app-id/{app_id}/messages/recall"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recalls a message within two minutes after it is sent."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deleting conversations from the server"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{userName}/user_channel"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deletes the conversation from the server."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "user-attributes",
      children: "User attributes"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enables you to set, retrieve, and delete user attributes."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Setting user attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/user/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets the user attributes for the specified user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving user attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/user/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves all the user attributes of the specified user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving the user attributes of multiple users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/user/get"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves multiple users' attributes by specifying the user name list and user attribute list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deleting user attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/user/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deletes all the user attributes for the specified user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving the total size of user attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/user/capacity"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Gets the total size of user attributes for all the users in the app."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "contact-management",
      children: "Contact management"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enables you to manage the user's contact list and block list."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a contact"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds the specified user as a contact."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing a contact"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes the specified user from the contact list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving a contact list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{owner_username}/contacts/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the contact list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving a block list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{owner_username}/blocks/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the block list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding user to block list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{owner_username}/blocks/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add the specified user to the block list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing user from block list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{owner_username}/blocks/users/{blocked_username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes the specified user from the block list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "chat-group-management",
      children: "Chat group management"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enables you to create, retrieve, modify, and delete chat rooms."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving all groups in the app by page"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups?limit={N}&cursor={cursor}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the information of all the groups in the app by page."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving all the groups the user joins"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/joined_chatgroups"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves all the groups the user joins by specifying the user name."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving group details"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_ids}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves group details by specifying the group ID."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creating a group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creates a group."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Banning a group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/disable"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bans the specified group. Groups are typically banned when too many users or messages violate community guidelines."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unbanning a group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/enable"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lifts a ban on the specified group."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifying group information"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifies the group information."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deleting a group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deletes a group."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "chat-group-member-management",
      children: "Chat group member management"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enables you to manage group members, including adding and removing group members, transferring group ownership, and retrieving lists of group admins and members."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving group member list (Pagination)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the member list of the group by pagination."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a group member"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/users/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds a user to the group member list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding multiple group members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{chatgroupid}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds multiple users to the group member list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing a group member"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/users/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes the specified user from the group member list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing multiple group members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/users/{usernames}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes the specified users from the group member list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving group admin list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/admin"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the group admin list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a group admin"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/admin"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds the specified user to the group admin list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing a group admin"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/admin/{oldadmin}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes the specified user from the group admin list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transferring group ownership"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{groupid}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transfers the group owner privileges."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "chat-room-management",
      children: "Chat room management"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enables you to create, retrieve, modify, and delete chat rooms."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving all chat rooms by page"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms?limit={N}&cursor={cursor}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the information of all the chat rooms in the app by page."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving chat rooms a user joins"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/joined_chatrooms"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the chat rooms that a user joins by specifying the username."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving chat room details"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the details of the chat room by specifying the chat room ID."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creating a chat room"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creates a new chat room."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifying chat room information"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifies the chat room information."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deleting a chat room"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deletes a chat room."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Setting custom attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds new custom chat room attributes or modifies existing ones set by the current user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving custom attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/chatroom/{chatroom_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the specified custom attributes of a chat room."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Forcibly setting custom attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "In addition to adding new custom attributes or modifying the existing ones set by the current user, this method can also be used to overwrite the custom attributes set by others."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing custom attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes custom attributes set by the current user. This method is only used to remove the key-value pairs set by the current user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Forcibly removing custom attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/metadata/chatroom/{chatroom_id}/user/{username}/forced"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "In addition to removing the custom attributes set by the current user, this method can also be used to remove custom attributes set by others."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "chat-room-member-management",
      children: "Chat room member management"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enables you to add, retrieve, modify, and delete members from the chat room."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving chat room member list (Pagination)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the member list of the chat room by pagination."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a chat room member"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds the specified user to the chat room member list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding multiple chat room members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroomid}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds multiple specified users to the chat room member list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing a chat room member"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes the specified user from the chat room member list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing multiple chat room members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroomid}/users/{usernames}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes the specified users from the chat room member list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving chat room admin list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/admin"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the chat room admin list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding a chat room admin"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/admin"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds the specified user to the chat room admin list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing a chat room admin"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/admin/{oldadmin}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes the specified user from the chat room admin list."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "global-mute",
      children: "Global mute"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enables you to mute any user ID in one-to-one chats, chat groups, or chat rooms, preventing these users from sending messages to other chat users, chat groups, or chat rooms."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Name"
          }), _jsx(_components.th, {
            children: "Method"
          }), _jsx(_components.th, {
            children: "Request"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Globally mute a specified user"
          }), _jsx(_components.td, {
            children: "POST"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/mutes"
            })
          }), _jsx(_components.td, {
            children: "Mutes a specified user in one-to-one chats, chat groups, or chat rooms."
          }), _jsx(_components.td, {
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Query the detailed information of global-mute"
          }), _jsx(_components.td, {
            children: "GET"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/mutes/username"
            })
          }), _jsx(_components.td, {
            children: "Queries the detailed information of the global-mute settings of the specified user in one-to-one chats, chat groups, or chat rooms."
          }), _jsx(_components.td, {
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Retrieve all globally muted users"
          }), _jsx(_components.td, {
            children: "GET"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/mutes"
            })
          }), _jsx(_components.td, {
            children: "Retrieves all the users that have been globally muted in the app."
          }), _jsx(_components.td, {
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "presence",
      children: "Presence"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enable you to set the presence of a user, subscribe to the presence of multiple users, retrieve the presence status of multiple users, and retrieve the subscriptions of a user."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Setting the presence status of a user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/presence/{resource}/{status}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sets the presence status of a user by user ID."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Subscribing to the presence status of multiple users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/presence/{expiry}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Subscribes to the presence status of multiple users."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving the presence status of multiple users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/presence"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the presence status of multiple users."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unsubscribing from the presence status of multiple users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/presence"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unsubscribes from the presence status of multiple users."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving the subscriptions of a user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/users/{username}/presence/sublist?pageNum=1&pageSize=100"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves the subscriptions of a user."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "reaction",
      children: "Reaction"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enable your chat users to reply the message with emojis."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Name"
          }), _jsx(_components.th, {
            children: "Method"
          }), _jsx(_components.th, {
            children: "Request"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Create a reaction"
          }), _jsx(_components.td, {
            children: "POST"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/reaction/user/{userId}"
            })
          }), _jsx(_components.td, {
            children: "Creates or adds a reaction to a specified message."
          }), _jsx(_components.td, {
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Retrieve reactions with message IDs"
          }), _jsx(_components.td, {
            children: "GET"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/reaction/user/{userId}"
            })
          }), _jsx(_components.td, {
            children: "Retrieves the information of the reaction according to the message ID."
          }), _jsx(_components.td, {
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Delete a reaction"
          }), _jsx(_components.td, {
            children: "DELETE"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/reaction/user/{userId}"
            })
          }), _jsx(_components.td, {
            children: "Deletes a reaction."
          }), _jsx(_components.td, {
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Retrieve the detailed information of the reaction"
          }), _jsx(_components.td, {
            children: "GET"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/reaction/user/{userId}/detail"
            })
          }), _jsx(_components.td, {
            children: "Retrieves the detailed information of the reaction by specifying the message ID and reaction ID."
          }), _jsx(_components.td, {
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "thread-management",
      children: "Thread management"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enable you to create a thread, modify a thread, delete a thread, and retrieve threads."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creating a thread"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/thread"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creates a thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifying a thread"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PUT"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/thread/{thread_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modifies a thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deleting a thread"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/thread/{thread_id}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deletes a thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving all the threads under the app"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/thread?limit={limit}&cursor={cursor}&sort={sort}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves all the threads under the app"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving all the threads a user joins under the app"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/threads/user/{username}?limit={limit}&cursor={cursor}&sort={sort}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves all the threads a user joins under the app"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving all the threads a user joins under a group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/threads/chatgroups/{group_id}/user/{username}?limit={limit}&cursor={cursor}&sort={sort}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves all the threads a user joins by user ID and group ID."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "thread-member-management",
      children: "Thread member management"
    }), `
`, _jsx(_components.p, {
      children: "This group of methods enable you to join a thread and remove members from the thread."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Request"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate Limits"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving thread members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/thread/{thread_id}/users?limit={N}&cursor={cursor}"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieves all the members in the specified thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adding multiple users to a thread"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "POST"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/thread/{thread_id}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adds multiple users to the specified thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removing multiple thread members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DELETE"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "/app-id/{app_id}/threads/{thread_id}/users"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Removes multiple users from the specified thread."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100/second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "request-structure",
      children: "Request structure"
    }), `
`, _jsx(_components.h3, {
      id: "authorization",
      children: "Authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["The Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following ", _jsx(_components.code, {
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
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Authorization:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Bearer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ${token}"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log in to the chat system. The Chat RESTful APIs only supports authenticating users using app tokens. For details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/im/build/secure-access-and-authentication/authentication",
        children: "Authentication using App Token"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "server-address",
      children: "Server address"
    }), `
`, _jsxs(_components.p, {
      children: ["Under the same project, all requests are sent to the same domain name. For how to get the domain name, see ", _jsx(_components.a, {
        href: "/en/realtime-media/im/get-started/enable#get-chat-project-information",
        children: "Get the information of the Chat project"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "protocol",
      children: "Protocol"
    }), `
`, _jsx(_components.p, {
      children: "To ensure communication security, the Chat RESTful APIs only support the HTTPS protocol."
    }), `
`, _jsx(_components.h3, {
      id: "data-format",
      children: "Data Format"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Request: See the sample code of each API for the data format of the request."
      }), `
`, _jsx(_components.li, {
        children: "Response: The format of the response is JSON."
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: "All request URLs and request bodies are case sensitive."
      }), `
`]
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
