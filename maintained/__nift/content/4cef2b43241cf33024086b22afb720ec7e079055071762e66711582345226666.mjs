import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing plan details",
  description: "Lists the details of the pricing plans for Agora Chat."
};
export let _markdown = `

This page lists the details of the pricing plans for Chat.

## User [#user]

| Description                            |    Free   |   Starter  |     Pro    |                              Enterprise                             |
| :------------------------------------- | :-------: | :--------: | :--------: | :-----------------------------------------------------------------: |
| Maximum number of contacts for a user  |    100    |     250    |    1,000   |                      Custom (10,000 by default)                     |
| Total number of registered users       | unlimited |  unlimited |  unlimited |                              unlimited                              |
| Maximum number of monthly active users |    500    |   50,000   |   100,000  | Customizable (requires a minimum monthly commitment of 100,000 MAU) |
| Peak concurrent connection\\*           |     50    | 10% of MAU | 10% of MAU |                 Customizable (10% of MAU by default)                |

## Message [#message]

| Description                                                                                                                        |  Free  | Starter |    Pro   |             Enterprise             |
| :--------------------------------------------------------------------------------------------------------------------------------- | :----: | :-----: | :------: | :--------------------------------: |
| Message cloud storage (provides message storage services, supports historical messages, roaming messages, and offline messages)    | 7 days | 90 days | 180 days | Customizable (180 days by default) |
| All message types (including: text, emoticons, voice, video, image, location, transparent transmission, customized messages, etc.) |    ✓   |    ✓    |     ✓    |                  ✓                 |
| Custom message (flexibly customize message content and functions according to business needs)                                      |    ✓   |    ✓    |     ✓    |                  ✓                 |
| Command message (as a control command)                                                                                             |    ✓   |    ✓    |     ✓    |                  ✓                 |
| Offline messages (support / offline messages, offline messages can be pulled after going online)                                   |    ✓   |    ✓    |     ✓    |                  ✓                 |

## Group [#group]

| Description                          | Free | Starter |   Pro  |             Enterprise            |
| :----------------------------------- | :--: | :-----: | :----: | :-------------------------------: |
| Total number of groups               |  100 |  10,000 | 50,000 | Customizable (100,000 by default) |
| Number of group members              |  100 |   250   |  1,000 |  Customizable (5,000 by default)  |
| Number of groups that users can join |  100 |  1,000  |  2,000 |  Customizable (10,000 by default) |

## Chatroom [#chatroom]

| Description                                            | Free | Starter |   Pro  |             Enterprise            |
| :----------------------------------------------------- | :--: | :-----: | :----: | :-------------------------------: |
| Number of chatrooms                                    |  100 |  10,000 | 50,000 | Customizable (100,000 by default) |
| Number of chatroom members                             |  100 |  2,000  | 10,000 |  Customizable (20,000 by default) |
| Number of chatrooms that users can join                |  100 |  1,000  |  2,000 |  Customizable (10,000 by default) |
| Real-time interactive chatroom broadcast messages      |   ✓  |    ✓    |    ✓   |                 ✓                 |
| Global muting in real-time interactive chatrooms       |   ✓  |    ✓    |    ✓   |                 ✓                 |
| Real-time interactive chatroom user allowed list       |   ✓  |    ✓    |    ✓   |                 ✓                 |
| Real-time interactive chatroom history message storage |   ✓  |    ✓    |    ✓   |                 ✓                 |

## Features [#features]

| Description                                                                                                                      | Free | Starter | Pro | Enterprise |
| :------------------------------------------------------------------------------------------------------------------------------- | :--: | :-----: | :-: | :--------: |
| Message and event callback (provides full message routing and forwarding, support messages, and multiple event types)            |   X  |    X    |  ✓  |      ✓     |
| User status callback (synchronizes the user's offline status through callback)                                                   |   X  |    X    |  ✓  |      ✓     |
| Callback before sending (used to connect to third-party message review services)                                                 |   X  |    X    |  ✓  |      ✓     |
| Multi-terminal and multi-device online (supporting different devices online at the same time, simultaneous message reception)    |   ✓  |    ✓    |  ✓  |      ✓     |
| Message read receipts (supports single chat receipts. Receipts are only supported above the Pro version)                         |   ✓  |    ✓    |  ✓  |      ✓     |
| Message withdrawal (supports client/REST message withdrawal)                                                                     |   ✓  |    ✓    |  ✓  |      ✓     |
| Message Do Not Disturb (no push messages will be received during the set Do Not Disturb time)                                    |   ✓  |    ✓    |  ✓  |      ✓     |
| Server session list (WEB side pulls historical sessions)                                                                         |   ✓  |    ✓    |  ✓  |      ✓     |
| IM UI Samples (provides IM UI components)                                                                                        |   ✓  |    ✓    |  ✓  |      ✓     |
| Full platform offline push (support Apple(MVP), Google(MVP), Huawei, Xiaomi, OPPO, VIVO, Meizu, custom ringtones and extensions) |   ✓  |    ✓    |  ✓  |      ✓     |
| File sharing                                                                                                                     |   ✓  |    ✓    |  ✓  |      ✓     |
| Generating thumbnails for image messages                                                                                         |   ✓  |    ✓    |  ✓  |      ✓     |
| Retrieving offline messages                                                                                                      |   ✓  |    ✓    |  ✓  |      ✓     |
| Group chat and chat room notifications                                                                                           |   ✓  |    ✓    |  ✓  |      ✓     |
| Reactions                                                                                                                        |   ✓  |    ✓    |  ✓  |      ✓     |
| Message threading                                                                                                                |   ✓  |    ✓    |  ✓  |      ✓     |
| Presence                                                                                                                         |   ✓  |    ✓    |  ✓  |      ✓     |
| Translation                                                                                                                      |   X  |    X    |  ✓  |      ✓     |

## Content moderation [#content-moderation]

| Description                         | Free | Starter | Pro | Enterprise |
| :---------------------------------- | :--: | :-----: | :-: | :--------: |
| Reporting messages                  |   X  |    X    |  ✓  |      ✓     |
| Banning users                       |   ✓  |    ✓    |  ✓  |      ✓     |
| Muting users                        |   ✓  |    ✓    |  ✓  |      ✓     |
| Real-time moderation                |   X  |    X    |  ✓  |      ✓     |
| Global mute in groups and chatrooms |   ✓  |    ✓    |  ✓  |      ✓     |
| User ID filter                      |   X  |    X    |  ✓  |      ✓     |
| Text message moderation             |   X  |    X    |  ✓  |      ✓     |
| Image message moderation            |   X  |    X    |  ✓  |      ✓     |

## Analytics [#analytics]

| Description               | Free | Starter | Pro | Enterprise |
| :------------------------ | :--: | :-----: | :-: | :--------: |
| Usage inspection          |   ✓  |    ✓    |  ✓  |      ✓     |
| Quality inspection (BETA) |   ✓  |    ✓    |  ✓  |      ✓     |

## Security [#security]

| Description                | Free | Starter | Pro | Enterprise |
| :------------------------- | :--: | :-----: | :-: | :--------: |
| TLS/SSL encryption         |   ✓  |    ✓    |  ✓  |      ✓     |
| File encryption            |   ✓  |    ✓    |  ✓  |      ✓     |
| Personal data deletion API |   ✓  |    ✓    |  ✓  |      ✓     |
| IP allowed list            |   ✓  |    ✓    |  ✓  |      ✓     |

## Compliance [#compliance]

| Description | Free | Starter | Pro | Enterprise |
| :---------- | :--: | :-----: | :-: | :--------: |
| ISO27001    |   ✓  |    ✓    |  ✓  |      ✓     |
| GDPR        |   ✓  |    ✓    |  ✓  |      ✓     |
| HIPPA       |   ✓  |    ✓    |  ✓  |      ✓     |
| SOC 2       |   ✓  |    ✓    |  ✓  |      ✓     |

## RESTful APIs [#restful-apis]

| Description                |          Free         |                    Starter                   |                      Pro                     |                  Enterprise                  |
| :------------------------- | :-------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: |
| RESTful API call frequency | Up to 10 calls/second | Individual API calls: up to 100 calls/second | Individual API calls: up to 100 calls/second | Individual API calls: up to 100 calls/second |

### RESTful API call detailed pricing [#restful-api-call-detailed-pricing]

Submit a support ticket if you want to lift the limits and pay for overage charge.

| Category                     | Rest API Description                                  | API calls included in the package/application  (times/second) | Allows "pay for overage" | API Call Overage Charge                     | Http Method | Endpoint                                                                                                                                                                |
| :--------------------------- | :---------------------------------------------------- | ------------------------------------------------------------: | :----------------------: | :------------------------------------------ | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Management              | Get user token                                        |                                                           100 |             Y            | $0/month                                    | GET         | \`/app-id/{app_id}/token\`                                                                                                                                                |
| User Management              | Register user                                         |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users\`                                                                                                                                                |
| User Management              | Register users in bulk                                |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users\`                                                                                                                                                |
| User Management              | Check whether the user token is invalid               |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/token/users/{uid}/invalid\`                                                                                                                            |
| User Management              | Get user information                                  |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{username}\`                                                                                                                                     |
| User Management              | Get user information in bulk                          |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users\`                                                                                                                                                |
| User Management              | Delete user                                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/users/{username}\`                                                                                                                                     |
| User Management              | Delete users in bulk                                  |                                                            30 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/users\`                                                                                                                                                |
| User Management              | Change user password                                  |                                                           100 |             Y            | $50/month/additional 50 QPS                 | PUT         | \`/app-id/{app_id}/users/{username}/password\`                                                                                                                            |
| User Management              | Get user online status                                |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{username}/status\`                                                                                                                              |
| User Management              | Get user online status in bulk                        |                                                            50 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users/batch/status\`                                                                                                                                   |
| User Management              | Get offline message count                             |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{owner_username}/offline_msg_count\`                                                                                                             |
| User Management              | Get status of offline messages                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{username}/offline_msg_status/{msg_id}\`                                                                                                         |
| User Management              | Ban user                                              |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users/{username}/deactivate\`                                                                                                                          |
| User Management              | Unban user                                            |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users/{username}/activate\`                                                                                                                            |
| User Management              | Force user offline                                    |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{username}/disconnect\`                                                                                                                          |
| User Attributes              | Set user attributes                                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | PUT         | \`/app-id/{app_id}/metadata/user/{username}\`                                                                                                                             |
| User Attributes              | Get user attributes                                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/metadata/user/{username}\`                                                                                                                             |
| User Attributes              | Get user attributes in bulk                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/metadata/user/get\`                                                                                                                                    |
| User Attributes              | Delete user attribute                                 |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/metadata/user/{username}\`                                                                                                                             |
| User Attributes              | Get the total size of user attributes                 |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/metadata/user/capacity\`                                                                                                                               |
| User Mute                    | Mute user in the app                                  |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/mutes\`                                                                                                                                                |
| User Mute                    | Query the app global mute of a single user ID         |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/mutes/username\`                                                                                                                                       |
| User Mute                    | Query all app globally users under the app            |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/mutes\`                                                                                                                                                |
| User online & offline status | Set user online status                                |                                                            50 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users/{uid}/presence/{resource}/{status}\`                                                                                                             |
| User online & offline status | Subscript online status in bulk                       |                                                            50 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users/{uid}/presence/{expiry}\`                                                                                                                        |
| User online & offline status | Get online status in bulk                             |                                                            50 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users/{uid}/presence\`                                                                                                                                 |
| User online & offline status | Unsubscribe online status                             |                                                            50 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/users/{uid}/presence\`                                                                                                                                 |
| User online & offline status | Query subscription list                               |                                                            50 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{uid}/presence/sublist?pageNum=1&pageSize=100\`                                                                                                  |
| User relationship management | Add friend                                            |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}\`                                                                                              |
| User relationship management | Remove friend                                         |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}\`                                                                                              |
| User relationship management | Accept friend adding request                          |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users/{uid}/contacts/accept/users/{friendUsername}\`                                                                                                   |
| User relationship management | Decline friend adding request                         |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/users/{uid}/contacts/decline/users/{friendUsername}\`                                                                                                  |
| User relationship management | Query user friend list                                |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{uid}/rosters\`                                                                                                                                  |
| User relationship management | Get contact                                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{owner_username}/contacts/users\`                                                                                                                |
| User relationship management | Get blocked user list                                 |                                                            50 |             N            | /                                           | GET         | \`/app-id/{app_id}/users/{owner_username}/blocks/users\`                                                                                                                  |
| User relationship management | Block user                                            |                                                            50 |             N            | /                                           | POST        | \`/app-id/{app_id}/users/{owner_username}/blocks/users\`                                                                                                                  |
| User relationship management | Remove user of block user                             |                                                            50 |             N            | /                                           | DELETE      | \`/app-id/{app_id}/users/{owner_username}/blocks/users/{blocked_username}\`                                                                                               |
| Message                      | Send a single chat message                            |                                     6,000 messages per minute |             Y            | $50/month/additional 6,000 messages/minute  | POST        | \`/app-id/{app_id}/messages/users\`                                                                                                                                       |
| Message                      | Send a group chat message                             |                                        20 messages per second |             Y            | $200/month/ additional 20 messages/second   | POST        | \`/app-id/{app_id}/messages/chatgroups\`                                                                                                                                  |
| Message                      | Send a chat room message                              |                                       100 messages per second |             Y            | $200/month/ additional 100 messages/second  | POST        | \`/app-id/{app_id}/messages/chatrooms\`                                                                                                                                   |
| Message                      | Get message history file                              |                                           10 times per minute |             Y            | $50/month/additional 10 times/minute        | GET         | \`/app-id/{app_id}/chatmessages/\${time}\`                                                                                                                                 |
| Message                      | Send a message                                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/messages\`                                                                                                                                             |
| Message                      | Upload files                                          |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatfiles\`                                                                                                                                            |
| Message                      | Download files                                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatfiles/{uuid}\`                                                                                                                                     |
| Message                      | Download thumbnail                                    |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatfiles/{file_uuid}\`                                                                                                                                |
| Message                      | Message recall                                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/messages/recall\`                                                                                                                                      |
| Message                      | Delete conversation                                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/users/{userName}/user_channel\`                                                                                                                        |
| Message Push                 | Set push message display name                         |                                                           100 |             N            | /                                           | PUT         | \`/app-id/{app_id}/users/{username}\`                                                                                                                                     |
| Message Push                 | Set push message display method                       |                                                           100 |             N            | /                                           | PUT         | \`/app-id/{app_id}/users/{username}\`                                                                                                                                     |
| Message Push                 | Set do not disturb                                    |                                                           100 |             N            | /                                           | PUT         | \`/app-id/{app_id}/users/{username}\`                                                                                                                                     |
| Message Push                 | Set do not disturb                                    |                                                           100 |             N            | /                                           | PUT         | \`/app-id/{app_id}/users/{username}\`                                                                                                                                     |
| Message Push                 | Send push notifications by users                      |                                         1200 times per minute |             Y            | $100/month/additional 1200 times per minute | POST        | \`/app-id/{app_id}/push/single\`                                                                                                                                          |
| Message Push                 | Send push notifications to all users under the app    |                        5 times per minute & 100 times per day |             N            | /                                           | POST        | \`/app-id/{app_id}/push/task\`                                                                                                                                            |
| Message Push                 | Send push notifications by labels                     |                                         1200 times per minute |             Y            | $100/month/additional 1200 times per minute | POST        | \`/app-id/{app_id}/push/list/label\`                                                                                                                                      |
| Message Push                 | Create a push label                                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/push/label\`                                                                                                                                           |
| Message Push                 | Delete a push label                                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/push/label/{labelname}\`                                                                                                                               |
| Message Push                 | Add users to a push label                             |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/push/label/{labelname}/user\`                                                                                                                          |
| Message Push                 | Remove users from a push label                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/push/label/{labelname}/user\`                                                                                                                          |
| Group Management             | Get all groups in the app                             |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups\`                                                                                                                                           |
| Group Management             | Get groups a user added                               |                                                            50 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{username}/joined_chatgroups\`                                                                                                                   |
| Group Management             | Get group details                                     |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups/{group_ids}\`                                                                                                                               |
| Group Management             | Create a group                                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups\`                                                                                                                                           |
| Group Management             | Edit group information                                |                                                           100 |             Y            | $50/month/additional 50 QPS                 | PUT         | \`/app-id/{app_id}/chatgroups/{group_id}\`                                                                                                                                |
| Group Management             | Delete a group                                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}\`                                                                                                                                |
| Group Management             | Get group announcement                                |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups/{group_id}/announcement\`                                                                                                                   |
| Group Management             | Update group announcement                             |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/announcement\`                                                                                                                   |
| Group Management             | Get group file                                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | - Without pagination: \`/app-id/{app_id}/chatgroups/{group_id}/share_files\`- With pagination: \`/app-id/{app_id}/chatgroups/{group_id}/share_files?pagenum=1&pagesize=10\` |
| Group Management             | Upload group file                                     |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/share_files\`                                                                                                                    |
| Group Management             | Download group file                                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups/{group_id}/share_files/{file_id}\`                                                                                                          |
| Group Management             | Delete group file                                     |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}/share_files/{file_id}\`                                                                                                          |
| Group Member Management      | Get group members                                     |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups/{group_id}/users\`                                                                                                                          |
| Group Member Management      | add group member                                      |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/users/{username}\`                                                                                                               |
| Group Member Management      | add group member in bulk                              |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{chatgroupid}/users\`                                                                                                                       |
| Group Member Management      | Remove group member                                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}/users/{username}\`                                                                                                               |
| Group Member Management      | Remove group member in bulk                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}/users/{usernames}\`                                                                                                              |
| Group Member Management      | List group administrators                             |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups/{group_id}/admin\`                                                                                                                          |
| Group Member Management      | Add group administrator                               |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/admin\`                                                                                                                          |
| Group Member Management      | Remove group administrator                            |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}/admin/{oldadmin}\`                                                                                                               |
| Group Member Management      | Transfer ownership of group                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | PUT         | \`/app-id/{app_id}/chatgroups/{groupid}\`                                                                                                                                 |
| Group Member Management      | List group block users                                |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups/{group_id}/blocks/users\`                                                                                                                   |
| Group Member Management      | Add a group member to block list                      |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}\`                                                                                                        |
| Group Member Management      | Remove group members from group block list            |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}\`                                                                                                        |
| Group Member Management      | List group allowed list                               |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups/{group_id}/white/users\`                                                                                                                    |
| Group Member Management      | Add group member into group allowed list              |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/white/users/{username}\`                                                                                                         |
| Group Member Management      | Add group members to block list in bulk               |                                                           100 |             N            | /                                           | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/blocks/users\`                                                                                                                   |
| Group Member Management      | Remove group members from group block list in bulk    |                                                           100 |             N            | /                                           | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{usernames}\`                                                                                                       |
| Group Member Management      | Add group member into group allowed list in bulk      |                                                           100 |             N            | /                                           | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/blocks/users\`                                                                                                                   |
| Group Member Management      | Remove user from group allowed list                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}/white/users/{username}\`                                                                                                         |
| Group Member Management      | List muted users in group                             |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups/{group_id}/mute}\`                                                                                                                          |
| Group Member Management      | Mute a member in group                                |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/mute\`                                                                                                                           |
| Group Member Management      | Mute all members in group (except users in whitelist) |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{group_id}/ban\`                                                                                                                            |
| Group Member Management      | Unmute a member in group                              |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}/mute/{member1}(,{member2},…)\`                                                                                                   |
| Group Member Management      | Unmute all members in group                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{group_id}/ban\`                                                                                                                            |
| Group Member Management      | Get group role                                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatgroups/{groupId}/roles\`                                                                                                                           |
| Group Member Management      | Apply to join group                                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{groupId}/apply\`                                                                                                                           |
| Group Member Management      | Agree to join the group                               |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{groupId}/apply_verify\`                                                                                                                    |
| Group Member Management      | Leave group                                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatgroups/{groupId}/quit\`                                                                                                                            |
| Group Member Management      | Invite to group                                       |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{groupId}/invite\`                                                                                                                          |
| Group Member Management      | Agree to invite to group                              |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatgroups/{groupId}/invite_verify\`                                                                                                                   |
| Chatroom Management          | List chatrooms                                        |                                                            50 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms\`                                                                                                                                            |
| Chatroom Management          | Get user added chatrooms                              |                                                            50 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/users/{username}/joined_chatrooms\`                                                                                                                    |
| Chatroom Management          | Get chatroom information                              |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms/{chatroom_id}\`                                                                                                                              |
| Chatroom Management          | Create a chatroom                                     |                                                            50 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms\`                                                                                                                                            |
| Chatroom Management          | Update chatroom information                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | PUT         | \`/app-id/{app_id}/chatrooms/{chatroom_id}\`                                                                                                                              |
| Chatroom Management          | Delete a chatroom                                     |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroom_id}\`                                                                                                                              |
| Chatroom Management          | Get chatroom announcement                             |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms/{chatroom_id}/announcement\`                                                                                                                 |
| Chatroom Management          | Update chatroom announcement                          |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/{chatroom_id}/announcement\`                                                                                                                 |
| Chatroom Member Management   | List chatroom members                                 |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms/{chatroom_id}/users\`                                                                                                                        |
| Chatroom Member Management   | Add member to chatroom                                |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}\`                                                                                                              |
| Chatroom Member Management   | Add member to chatroom in bulk                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/{chatroomid}/users\`                                                                                                                         |
| Chatroom Member Management   | Delete member from chatroom                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}\`                                                                                                              |
| Chatroom Member Management   | Delete member from chatroom in bulk                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroomid}/users/{usernames}\`                                                                                                             |
| Chatroom Member Management   | List chatroom administrators                          |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms/{chatroom_id}/admin\`                                                                                                                        |
| Chatroom Member Management   | Add chatroom administrator                            |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/{chatroom_id}/admin\`                                                                                                                        |
| Chatroom Member Management   | Delete chatroom administrator                         |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroom_id}/admin/{oldadmin}\`                                                                                                             |
| Chatroom Member Management   | List chatroom members blocked                         |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users\`                                                                                                                 |
| Chatroom Member Management   | Add chatroom member to block list                     |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users/{username}\`                                                                                                      |
| Chatroom Member Management   | Remove user from chatroom block list                  |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users/{username}\`                                                                                                      |
| Chatroom Member Management   | List chatroom members in allowed list                 |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms/{chatroom_id}/white/users\`                                                                                                                  |
| Chatroom Member Management   | Add user to chatroom allowed list                     |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/{chatroom_id}/white/users/{username}\`                                                                                                       |
| Chatroom Member Management   | Remove chatroom member from allowed list              |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroom_id}/white/users/{username}\`                                                                                                       |
| Chatroom Member Management   | List blocked users in chatroom block list             |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms/{chatroom_id}/mute\`                                                                                                                         |
| Chatroom Member Management   | Mute chatroom member                                  |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/{chatroom_id}/mute\`                                                                                                                         |
| Chatroom Member Management   | Mute all members in chatroom                          |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/{chatroom_id}/ban\`                                                                                                                          |
| Chatroom Member Management   | Unmute a member in chatroom                           |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroom_id}/mute/{member1}(,{member2},…)\`                                                                                                 |
| Chatroom Member Management   | Unmute all members in chatroom                        |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroom_id}/ban\`                                                                                                                          |
| Chatroom Member Management   | List super administrators in chatroom                 |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms/super_admin\`                                                                                                                                |
| Chatroom Member Management   | Add super administrator in chatroom                   |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/super_admin\`                                                                                                                                |
| Chatroom Member Management   | Remove super administrator in chatroom                |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/super_admin/{superAdmin}\`                                                                                                                   |
| Chatroom Member Management   | Get chatroom roles                                    |                                                           100 |             Y            | $50/month/additional 50 QPS                 | GET         | \`/app-id/{app_id}/chatrooms/{chatroomId}/roles\`                                                                                                                         |
| Chatroom Member Management   | Join chatroom                                         |                                                           100 |             Y            | $50/month/additional 50 QPS                 | POST        | \`/app-id/{app_id}/chatrooms/{chatroomId}/apply\`                                                                                                                         |
| Chatroom Member Management   | Exit the chatroom                                     |                                                           100 |             Y            | $50/month/additional 50 QPS                 | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroomId}/quit\`                                                                                                                          |
| Chatroom Member Management   | Add chatroom member to block list in bulk             |                                                           100 |             N            | /                                           | POST        | \`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users\`                                                                                                                 |
| Chatroom Member Management   | Remove user from chatroom block list in bulk          |                                                           100 |             N            | /                                           | DELETE      | \`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users/{usernames}\`                                                                                                     |
| Chatroom Member Management   | Add user to chatroom allowed list in bulk             |                                                           100 |             N            | /                                           | POST        | \`/app-id/{app_id}/chatrooms/{chatroom_id}/white/users\`                                                                                                                  |

## SDK support [#sdk-support]

| Description     | Free | Starter | Pro | Enterprise |
| :-------------- | :--- | :------ | :-- | :--------- |
| Android         | ✓    | ✓       | ✓   | ✓          |
| iOS             | ✓    | ✓       | ✓   | ✓          |
| Web             | ✓    | ✓       | ✓   | ✓          |
| Windows         | ✓    | ✓       | ✓   | ✓          |
| Unity           | ✓    | ✓       | ✓   | ✓          |
| Flutter         | ✓    | ✓       | ✓   | ✓          |
| Reactive Native | ✓    | ✓       | ✓   | ✓          |

## Peak concurrent connections (PCC) [#peak-concurrent-connections-pcc]

PCC measures the peak number of concurrent TCP long-lived connections to Agora Chat servers in a calendar month. This value is typically different from your DAU or MAU. If a user (with one UID or UUID) logs into Agora Chat from multiple devices, they count as one MAU but multiple PCCs—one per device.

### PCC overage fee [#pcc-overage-fee]

Agora calculates the total number of PCCs and MAUs across all your projects at the end of each billing cycle, which ends on the last day of each calendar month. If your usage exceeds the included limits, an overage fee may apply.

By default, paid Agora Chat packages include a free PCC allowance equal to 10% of your total MAU.

**An overage fee of $5 per additional PCC is charged when the free threshold (10% of MAU) is exceeded.**

Exceeding the 10% PCC limit does not affect end users or disrupt services, because Agora meters PCC only at the end of each billing cycle.

Starter, Pro, and Enterprise package subscribers are entitled to at least 500, 1K, and 1K free PCCs per month, respectively. For example, if a Starter subscriber has 1,000 MAUs and 500 PCCs in a given month, no overage fee is charged.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page lists the details of the pricing plans for Chat."
  }, {
    heading: "user",
    content: "Description"
  }, {
    heading: "user",
    content: "Free"
  }, {
    heading: "user",
    content: "Starter"
  }, {
    heading: "user",
    content: "Pro"
  }, {
    heading: "user",
    content: "Enterprise"
  }, {
    heading: "user",
    content: "Maximum number of contacts for a user"
  }, {
    heading: "user",
    content: "100"
  }, {
    heading: "user",
    content: "250"
  }, {
    heading: "user",
    content: "1,000"
  }, {
    heading: "user",
    content: "Custom (10,000 by default)"
  }, {
    heading: "user",
    content: "Total number of registered users"
  }, {
    heading: "user",
    content: "unlimited"
  }, {
    heading: "user",
    content: "unlimited"
  }, {
    heading: "user",
    content: "unlimited"
  }, {
    heading: "user",
    content: "unlimited"
  }, {
    heading: "user",
    content: "Maximum number of monthly active users"
  }, {
    heading: "user",
    content: "500"
  }, {
    heading: "user",
    content: "50,000"
  }, {
    heading: "user",
    content: "100,000"
  }, {
    heading: "user",
    content: "Customizable (requires a minimum monthly commitment of 100,000 MAU)"
  }, {
    heading: "user",
    content: "Peak concurrent connection\\*"
  }, {
    heading: "user",
    content: "50"
  }, {
    heading: "user",
    content: "10% of MAU"
  }, {
    heading: "user",
    content: "10% of MAU"
  }, {
    heading: "user",
    content: "Customizable (10% of MAU by default)"
  }, {
    heading: "message",
    content: "Description"
  }, {
    heading: "message",
    content: "Free"
  }, {
    heading: "message",
    content: "Starter"
  }, {
    heading: "message",
    content: "Pro"
  }, {
    heading: "message",
    content: "Enterprise"
  }, {
    heading: "message",
    content: "Message cloud storage (provides message storage services, supports historical messages, roaming messages, and offline messages)"
  }, {
    heading: "message",
    content: "7 days"
  }, {
    heading: "message",
    content: "90 days"
  }, {
    heading: "message",
    content: "180 days"
  }, {
    heading: "message",
    content: "Customizable (180 days by default)"
  }, {
    heading: "message",
    content: "All message types (including: text, emoticons, voice, video, image, location, transparent transmission, customized messages, etc.)"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "Custom message (flexibly customize message content and functions according to business needs)"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "Command message (as a control command)"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "Offline messages (support / offline messages, offline messages can be pulled after going online)"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "message",
    content: "✓"
  }, {
    heading: "group",
    content: "Description"
  }, {
    heading: "group",
    content: "Free"
  }, {
    heading: "group",
    content: "Starter"
  }, {
    heading: "group",
    content: "Pro"
  }, {
    heading: "group",
    content: "Enterprise"
  }, {
    heading: "group",
    content: "Total number of groups"
  }, {
    heading: "group",
    content: "100"
  }, {
    heading: "group",
    content: "10,000"
  }, {
    heading: "group",
    content: "50,000"
  }, {
    heading: "group",
    content: "Customizable (100,000 by default)"
  }, {
    heading: "group",
    content: "Number of group members"
  }, {
    heading: "group",
    content: "100"
  }, {
    heading: "group",
    content: "250"
  }, {
    heading: "group",
    content: "1,000"
  }, {
    heading: "group",
    content: "Customizable (5,000 by default)"
  }, {
    heading: "group",
    content: "Number of groups that users can join"
  }, {
    heading: "group",
    content: "100"
  }, {
    heading: "group",
    content: "1,000"
  }, {
    heading: "group",
    content: "2,000"
  }, {
    heading: "group",
    content: "Customizable (10,000 by default)"
  }, {
    heading: "chatroom",
    content: "Description"
  }, {
    heading: "chatroom",
    content: "Free"
  }, {
    heading: "chatroom",
    content: "Starter"
  }, {
    heading: "chatroom",
    content: "Pro"
  }, {
    heading: "chatroom",
    content: "Enterprise"
  }, {
    heading: "chatroom",
    content: "Number of chatrooms"
  }, {
    heading: "chatroom",
    content: "100"
  }, {
    heading: "chatroom",
    content: "10,000"
  }, {
    heading: "chatroom",
    content: "50,000"
  }, {
    heading: "chatroom",
    content: "Customizable (100,000 by default)"
  }, {
    heading: "chatroom",
    content: "Number of chatroom members"
  }, {
    heading: "chatroom",
    content: "100"
  }, {
    heading: "chatroom",
    content: "2,000"
  }, {
    heading: "chatroom",
    content: "10,000"
  }, {
    heading: "chatroom",
    content: "Customizable (20,000 by default)"
  }, {
    heading: "chatroom",
    content: "Number of chatrooms that users can join"
  }, {
    heading: "chatroom",
    content: "100"
  }, {
    heading: "chatroom",
    content: "1,000"
  }, {
    heading: "chatroom",
    content: "2,000"
  }, {
    heading: "chatroom",
    content: "Customizable (10,000 by default)"
  }, {
    heading: "chatroom",
    content: "Real-time interactive chatroom broadcast messages"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "Global muting in real-time interactive chatrooms"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "Real-time interactive chatroom user allowed list"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "Real-time interactive chatroom history message storage"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "chatroom",
    content: "✓"
  }, {
    heading: "features",
    content: "Description"
  }, {
    heading: "features",
    content: "Free"
  }, {
    heading: "features",
    content: "Starter"
  }, {
    heading: "features",
    content: "Pro"
  }, {
    heading: "features",
    content: "Enterprise"
  }, {
    heading: "features",
    content: "Message and event callback (provides full message routing and forwarding, support messages, and multiple event types)"
  }, {
    heading: "features",
    content: "X"
  }, {
    heading: "features",
    content: "X"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "User status callback (synchronizes the user's offline status through callback)"
  }, {
    heading: "features",
    content: "X"
  }, {
    heading: "features",
    content: "X"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Callback before sending (used to connect to third-party message review services)"
  }, {
    heading: "features",
    content: "X"
  }, {
    heading: "features",
    content: "X"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Multi-terminal and multi-device online (supporting different devices online at the same time, simultaneous message reception)"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Message read receipts (supports single chat receipts. Receipts are only supported above the Pro version)"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Message withdrawal (supports client/REST message withdrawal)"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Message Do Not Disturb (no push messages will be received during the set Do Not Disturb time)"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Server session list (WEB side pulls historical sessions)"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "IM UI Samples (provides IM UI components)"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Full platform offline push (support Apple(MVP), Google(MVP), Huawei, Xiaomi, OPPO, VIVO, Meizu, custom ringtones and extensions)"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "File sharing"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Generating thumbnails for image messages"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Retrieving offline messages"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Group chat and chat room notifications"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Reactions"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Message threading"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Presence"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "Translation"
  }, {
    heading: "features",
    content: "X"
  }, {
    heading: "features",
    content: "X"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "features",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "Description"
  }, {
    heading: "content-moderation",
    content: "Free"
  }, {
    heading: "content-moderation",
    content: "Starter"
  }, {
    heading: "content-moderation",
    content: "Pro"
  }, {
    heading: "content-moderation",
    content: "Enterprise"
  }, {
    heading: "content-moderation",
    content: "Reporting messages"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "Banning users"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "Muting users"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "Real-time moderation"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "Global mute in groups and chatrooms"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "User ID filter"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "Text message moderation"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "Image message moderation"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "X"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "content-moderation",
    content: "✓"
  }, {
    heading: "analytics",
    content: "Description"
  }, {
    heading: "analytics",
    content: "Free"
  }, {
    heading: "analytics",
    content: "Starter"
  }, {
    heading: "analytics",
    content: "Pro"
  }, {
    heading: "analytics",
    content: "Enterprise"
  }, {
    heading: "analytics",
    content: "Usage inspection"
  }, {
    heading: "analytics",
    content: "✓"
  }, {
    heading: "analytics",
    content: "✓"
  }, {
    heading: "analytics",
    content: "✓"
  }, {
    heading: "analytics",
    content: "✓"
  }, {
    heading: "analytics",
    content: "Quality inspection (BETA)"
  }, {
    heading: "analytics",
    content: "✓"
  }, {
    heading: "analytics",
    content: "✓"
  }, {
    heading: "analytics",
    content: "✓"
  }, {
    heading: "analytics",
    content: "✓"
  }, {
    heading: "security",
    content: "Description"
  }, {
    heading: "security",
    content: "Free"
  }, {
    heading: "security",
    content: "Starter"
  }, {
    heading: "security",
    content: "Pro"
  }, {
    heading: "security",
    content: "Enterprise"
  }, {
    heading: "security",
    content: "TLS/SSL encryption"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "File encryption"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "Personal data deletion API"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "IP allowed list"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "security",
    content: "✓"
  }, {
    heading: "compliance",
    content: "Description"
  }, {
    heading: "compliance",
    content: "Free"
  }, {
    heading: "compliance",
    content: "Starter"
  }, {
    heading: "compliance",
    content: "Pro"
  }, {
    heading: "compliance",
    content: "Enterprise"
  }, {
    heading: "compliance",
    content: "ISO27001"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "GDPR"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "HIPPA"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "SOC 2"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "compliance",
    content: "✓"
  }, {
    heading: "restful-apis",
    content: "Description"
  }, {
    heading: "restful-apis",
    content: "Free"
  }, {
    heading: "restful-apis",
    content: "Starter"
  }, {
    heading: "restful-apis",
    content: "Pro"
  }, {
    heading: "restful-apis",
    content: "Enterprise"
  }, {
    heading: "restful-apis",
    content: "RESTful API call frequency"
  }, {
    heading: "restful-apis",
    content: "Up to 10 calls/second"
  }, {
    heading: "restful-apis",
    content: "Individual API calls: up to 100 calls/second"
  }, {
    heading: "restful-apis",
    content: "Individual API calls: up to 100 calls/second"
  }, {
    heading: "restful-apis",
    content: "Individual API calls: up to 100 calls/second"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Submit a support ticket if you want to lift the limits and pay for overage charge."
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Category"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Rest API Description"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "API calls included in the package/application  (times/second)"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: 'Allows "pay for overage"'
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "API Call Overage Charge"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Http Method"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Endpoint"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get user token"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$0/month"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/token`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Register user"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Register users in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Check whether the user token is invalid"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/token/users/{uid}/invalid`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get user information"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get user information in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete user"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete users in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "30"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Change user password"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "PUT"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}/password`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get user online status"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}/status`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get user online status in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/batch/status`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get offline message count"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{owner_username}/offline_msg_count`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get status of offline messages"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}/offline_msg_status/{msg_id}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Ban user"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}/deactivate`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Unban user"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}/activate`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Force user offline"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}/disconnect`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Attributes"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Set user attributes"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "PUT"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/metadata/user/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Attributes"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get user attributes"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/metadata/user/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Attributes"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get user attributes in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/metadata/user/get`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Attributes"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete user attribute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/metadata/user/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Attributes"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get the total size of user attributes"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/metadata/user/capacity`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Mute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Mute user in the app"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/mutes`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Mute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Query the app global mute of a single user ID"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/mutes/username`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User Mute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Query all app globally users under the app"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/mutes`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User online & offline status"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Set user online status"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{uid}/presence/{resource}/{status}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User online & offline status"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Subscript online status in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{uid}/presence/{expiry}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User online & offline status"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get online status in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{uid}/presence`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User online & offline status"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Unsubscribe online status"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{uid}/presence`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User online & offline status"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Query subscription list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{uid}/presence/sublist?pageNum=1&pageSize=100`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User relationship management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add friend"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User relationship management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove friend"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{owner_username}/contacts/users/{friend_username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User relationship management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Accept friend adding request"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{uid}/contacts/accept/users/{friendUsername}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User relationship management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Decline friend adding request"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{uid}/contacts/decline/users/{friendUsername}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User relationship management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Query user friend list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{uid}/rosters`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User relationship management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get contact"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{owner_username}/contacts/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User relationship management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get blocked user list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{owner_username}/blocks/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User relationship management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Block user"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{owner_username}/blocks/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "User relationship management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove user of block user"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{owner_username}/blocks/users/{blocked_username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Send a single chat message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "6,000 messages per minute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 6,000 messages/minute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/messages/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Send a group chat message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "20 messages per second"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$200/month/ additional 20 messages/second"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/messages/chatgroups`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Send a chat room message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100 messages per second"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$200/month/ additional 100 messages/second"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/messages/chatrooms`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get message history file"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "10 times per minute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 10 times/minute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatmessages/${time}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Send a message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/messages`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Upload files"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatfiles`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Download files"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatfiles/{uuid}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Download thumbnail"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatfiles/{file_uuid}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message recall"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/messages/recall`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete conversation"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{userName}/user_channel`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Set push message display name"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "PUT"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Set push message display method"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "PUT"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Set do not disturb"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "PUT"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Set do not disturb"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "PUT"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Send push notifications by users"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "1200 times per minute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$100/month/additional 1200 times per minute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/push/single`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Send push notifications to all users under the app"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "5 times per minute & 100 times per day"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/push/task`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Send push notifications by labels"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "1200 times per minute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$100/month/additional 1200 times per minute"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/push/list/label`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Create a push label"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/push/label`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete a push label"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/push/label/{labelname}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add users to a push label"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/push/label/{labelname}/user`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Message Push"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove users from a push label"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/push/label/{labelname}/user`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get all groups in the app"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get groups a user added"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}/joined_chatgroups`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get group details"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_ids}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Create a group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Edit group information"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "PUT"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete a group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get group announcement"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/announcement`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Update group announcement"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/announcement`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get group file"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "- Without pagination: `/app-id/{app_id}/chatgroups/{group_id}/share_files`- With pagination: `/app-id/{app_id}/chatgroups/{group_id}/share_files?pagenum=1&pagesize=10`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Upload group file"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/share_files`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Download group file"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/share_files/{file_id}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete group file"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/share_files/{file_id}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get group members"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "add group member"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "add group member in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{chatgroupid}/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove group member"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove group member in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/users/{usernames}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List group administrators"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/admin`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add group administrator"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/admin`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove group administrator"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/admin/{oldadmin}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Transfer ownership of group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "PUT"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{groupid}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List group block users"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/blocks/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add a group member to block list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove group members from group block list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List group allowed list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/white/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add group member into group allowed list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/white/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add group members to block list in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/blocks/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove group members from group block list in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{usernames}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add group member into group allowed list in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/blocks/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove user from group allowed list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/white/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List muted users in group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/mute}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Mute a member in group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/mute`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Mute all members in group (except users in whitelist)"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/ban`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Unmute a member in group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/mute/{member1}(,{member2},…)`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Unmute all members in group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{group_id}/ban`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get group role"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{groupId}/roles`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Apply to join group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{groupId}/apply`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Agree to join the group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{groupId}/apply_verify`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Leave group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{groupId}/quit`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Invite to group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{groupId}/invite`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Group Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Agree to invite to group"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatgroups/{groupId}/invite_verify`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List chatrooms"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get user added chatrooms"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/users/{username}/joined_chatrooms`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get chatroom information"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Create a chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "50"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Update chatroom information"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "PUT"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete a chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get chatroom announcement"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/announcement`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Update chatroom announcement"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/announcement`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List chatroom members"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add member to chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add member to chatroom in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroomid}/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete member from chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroomid}/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete member from chatroom in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroomid}/users/{usernames}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List chatroom administrators"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/admin`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add chatroom administrator"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/admin`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Delete chatroom administrator"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/admin/{oldadmin}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List chatroom members blocked"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add chatroom member to block list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove user from chatroom block list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List chatroom members in allowed list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/white/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add user to chatroom allowed list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/white/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove chatroom member from allowed list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/white/users/{username}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List blocked users in chatroom block list"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/mute`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Mute chatroom member"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/mute`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Mute all members in chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/ban`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Unmute a member in chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/mute/{member1}(,{member2},…)`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Unmute all members in chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/ban`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "List super administrators in chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/super_admin`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add super administrator in chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/super_admin`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove super administrator in chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/super_admin/{superAdmin}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Get chatroom roles"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "GET"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroomId}/roles`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Join chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroomId}/apply`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Exit the chatroom"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Y"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "$50/month/additional 50 QPS"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroomId}/quit`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add chatroom member to block list in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Remove user from chatroom block list in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "DELETE"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users/{usernames}`"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Chatroom Member Management"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "Add user to chatroom allowed list in bulk"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "100"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "N"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "/"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "POST"
  }, {
    heading: "restful-api-call-detailed-pricing",
    content: "`/app-id/{app_id}/chatrooms/{chatroom_id}/white/users`"
  }, {
    heading: "sdk-support",
    content: "Description"
  }, {
    heading: "sdk-support",
    content: "Free"
  }, {
    heading: "sdk-support",
    content: "Starter"
  }, {
    heading: "sdk-support",
    content: "Pro"
  }, {
    heading: "sdk-support",
    content: "Enterprise"
  }, {
    heading: "sdk-support",
    content: "Android"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "iOS"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "Web"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "Windows"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "Unity"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "Flutter"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "Reactive Native"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "sdk-support",
    content: "✓"
  }, {
    heading: "peak-concurrent-connections-pcc",
    content: "PCC measures the peak number of concurrent TCP long-lived connections to Agora Chat servers in a calendar month. This value is typically different from your DAU or MAU. If a user (with one UID or UUID) logs into Agora Chat from multiple devices, they count as one MAU but multiple PCCs—one per device."
  }, {
    heading: "pcc-overage-fee",
    content: "Agora calculates the total number of PCCs and MAUs across all your projects at the end of each billing cycle, which ends on the last day of each calendar month. If your usage exceeds the included limits, an overage fee may apply."
  }, {
    heading: "pcc-overage-fee",
    content: "By default, paid Agora Chat packages include a free PCC allowance equal to 10% of your total MAU."
  }, {
    heading: "pcc-overage-fee",
    content: "**An overage fee of $5 per additional PCC is charged when the free threshold (10% of MAU) is exceeded.**"
  }, {
    heading: "pcc-overage-fee",
    content: "Exceeding the 10% PCC limit does not affect end users or disrupt services, because Agora meters PCC only at the end of each billing cycle."
  }, {
    heading: "pcc-overage-fee",
    content: "Starter, Pro, and Enterprise package subscribers are entitled to at least 500, 1K, and 1K free PCCs per month, respectively. For example, if a Starter subscriber has 1,000 MAUs and 500 PCCs in a given month, no overage fee is charged."
  }],
  headings: [{
    id: "user",
    content: "User"
  }, {
    id: "message",
    content: "Message"
  }, {
    id: "group",
    content: "Group"
  }, {
    id: "chatroom",
    content: "Chatroom"
  }, {
    id: "features",
    content: "Features"
  }, {
    id: "content-moderation",
    content: "Content moderation"
  }, {
    id: "analytics",
    content: "Analytics"
  }, {
    id: "security",
    content: "Security"
  }, {
    id: "compliance",
    content: "Compliance"
  }, {
    id: "restful-apis",
    content: "RESTful APIs"
  }, {
    id: "restful-api-call-detailed-pricing",
    content: "RESTful API call detailed pricing"
  }, {
    id: "sdk-support",
    content: "SDK support"
  }, {
    id: "peak-concurrent-connections-pcc",
    content: "Peak concurrent connections (PCC)"
  }, {
    id: "pcc-overage-fee",
    content: "PCC overage fee"
  }]
};
export let toc = [{
  depth: 2,
  url: "#user",
  title: _jsx(_Fragment, {
    children: "User"
  })
}, {
  depth: 2,
  url: "#message",
  title: _jsx(_Fragment, {
    children: "Message"
  })
}, {
  depth: 2,
  url: "#group",
  title: _jsx(_Fragment, {
    children: "Group"
  })
}, {
  depth: 2,
  url: "#chatroom",
  title: _jsx(_Fragment, {
    children: "Chatroom"
  })
}, {
  depth: 2,
  url: "#features",
  title: _jsx(_Fragment, {
    children: "Features"
  })
}, {
  depth: 2,
  url: "#content-moderation",
  title: _jsx(_Fragment, {
    children: "Content moderation"
  })
}, {
  depth: 2,
  url: "#analytics",
  title: _jsx(_Fragment, {
    children: "Analytics"
  })
}, {
  depth: 2,
  url: "#security",
  title: _jsx(_Fragment, {
    children: "Security"
  })
}, {
  depth: 2,
  url: "#compliance",
  title: _jsx(_Fragment, {
    children: "Compliance"
  })
}, {
  depth: 2,
  url: "#restful-apis",
  title: _jsx(_Fragment, {
    children: "RESTful APIs"
  })
}, {
  depth: 3,
  url: "#restful-api-call-detailed-pricing",
  title: _jsx(_Fragment, {
    children: "RESTful API call detailed pricing"
  })
}, {
  depth: 2,
  url: "#sdk-support",
  title: _jsx(_Fragment, {
    children: "SDK support"
  })
}, {
  depth: 2,
  url: "#peak-concurrent-connections-pcc",
  title: _jsx(_Fragment, {
    children: "Peak concurrent connections (PCC)"
  })
}, {
  depth: 3,
  url: "#pcc-overage-fee",
  title: _jsx(_Fragment, {
    children: "PCC overage fee"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page lists the details of the pricing plans for Chat."
    }), `
`, _jsx(_components.h2, {
      id: "user",
      children: "User"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Maximum number of contacts for a user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "250"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Custom (10,000 by default)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Total number of registered users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "unlimited"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Maximum number of monthly active users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "500"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customizable (requires a minimum monthly commitment of 100,000 MAU)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Peak concurrent connection*"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10% of MAU"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10% of MAU"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customizable (10% of MAU by default)"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "message",
      children: "Message"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message cloud storage (provides message storage services, supports historical messages, roaming messages, and offline messages)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "90 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "180 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customizable (180 days by default)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "All message types (including: text, emoticons, voice, video, image, location, transparent transmission, customized messages, etc.)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Custom message (flexibly customize message content and functions according to business needs)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Command message (as a control command)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Offline messages (support / offline messages, offline messages can be pulled after going online)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "group",
      children: "Group"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Total number of groups"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customizable (100,000 by default)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of group members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "250"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customizable (5,000 by default)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of groups that users can join"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customizable (10,000 by default)"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "chatroom",
      children: "Chatroom"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of chatrooms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customizable (100,000 by default)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of chatroom members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customizable (20,000 by default)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of chatrooms that users can join"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customizable (10,000 by default)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Real-time interactive chatroom broadcast messages"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Global muting in real-time interactive chatrooms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Real-time interactive chatroom user allowed list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Real-time interactive chatroom history message storage"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "features",
      children: "Features"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message and event callback (provides full message routing and forwarding, support messages, and multiple event types)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User status callback (synchronizes the user's offline status through callback)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Callback before sending (used to connect to third-party message review services)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multi-terminal and multi-device online (supporting different devices online at the same time, simultaneous message reception)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message read receipts (supports single chat receipts. Receipts are only supported above the Pro version)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message withdrawal (supports client/REST message withdrawal)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Do Not Disturb (no push messages will be received during the set Do Not Disturb time)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server session list (WEB side pulls historical sessions)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "IM UI Samples (provides IM UI components)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Full platform offline push (support Apple(MVP), Google(MVP), Huawei, Xiaomi, OPPO, VIVO, Meizu, custom ringtones and extensions)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "File sharing"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Generating thumbnails for image messages"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving offline messages"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group chat and chat room notifications"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Reactions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message threading"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Presence"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Translation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "content-moderation",
      children: "Content moderation"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Reporting messages"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Banning users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Muting users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Real-time moderation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Global mute in groups and chatrooms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User ID filter"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Text message moderation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Image message moderation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "analytics",
      children: "Analytics"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Usage inspection"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Quality inspection (BETA)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "security",
      children: "Security"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "TLS/SSL encryption"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "File encryption"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Personal data deletion API"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "IP allowed list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "compliance",
      children: "Compliance"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ISO27001"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GDPR"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HIPPA"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "SOC 2"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "restful-apis",
      children: "RESTful APIs"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RESTful API call frequency"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Up to 10 calls/second"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Individual API calls: up to 100 calls/second"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Individual API calls: up to 100 calls/second"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Individual API calls: up to 100 calls/second"
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "restful-api-call-detailed-pricing",
      children: "RESTful API call detailed pricing"
    }), `
`, _jsx(_components.p, {
      children: "Submit a support ticket if you want to lift the limits and pay for overage charge."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Category"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rest API Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "API calls included in the package/application  (times/second)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: 'Allows "pay for overage"'
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "API Call Overage Charge"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Http Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Endpoint"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get user token"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$0/month"
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
              children: "/app-id/{app_id}/token"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Register user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Register users in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the user token is invalid"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/token/users/{uid}/invalid"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get user information"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get user information in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete users in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Change user password"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{username}/password"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get user online status"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get user online status in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get offline message count"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get status of offline messages"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ban user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unban user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Force user offline"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{username}/disconnect"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Set user attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get user attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get user attributes in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete user attribute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get the total size of user attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Mute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mute user in the app"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/mutes"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Mute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Query the app global mute of a single user ID"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/mutes/username"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User Mute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Query all app globally users under the app"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/mutes"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User online & offline status"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Set user online status"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{uid}/presence/{resource}/{status}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User online & offline status"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Subscript online status in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{uid}/presence/{expiry}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User online & offline status"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get online status in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{uid}/presence"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User online & offline status"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unsubscribe online status"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{uid}/presence"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User online & offline status"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Query subscription list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{uid}/presence/sublist?pageNum=1&pageSize=100"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User relationship management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add friend"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User relationship management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove friend"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User relationship management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Accept friend adding request"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{uid}/contacts/accept/users/{friendUsername}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User relationship management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Decline friend adding request"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{uid}/contacts/decline/users/{friendUsername}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User relationship management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Query user friend list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/users/{uid}/rosters"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User relationship management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get contact"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User relationship management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get blocked user list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User relationship management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Block user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User relationship management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove user of block user"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Send a single chat message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "6,000 messages per minute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 6,000 messages/minute"
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
              children: "/app-id/{app_id}/messages/users"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Send a group chat message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "20 messages per second"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$200/month/ additional 20 messages/second"
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
              children: "/app-id/{app_id}/messages/chatgroups"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Send a chat room message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100 messages per second"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$200/month/ additional 100 messages/second"
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
              children: "/app-id/{app_id}/messages/chatrooms"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get message history file"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10 times per minute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 10 times/minute"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Send a message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Upload files"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Download files"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatfiles/{uuid}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Download thumbnail"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatfiles/{file_uuid}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message recall"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/messages/recall"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete conversation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Set push message display name"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Set push message display method"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Set do not disturb"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Set do not disturb"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Send push notifications by users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "1200 times per minute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$100/month/additional 1200 times per minute"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Send push notifications to all users under the app"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "5 times per minute & 100 times per day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Send push notifications by labels"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "1200 times per minute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$100/month/additional 1200 times per minute"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Create a push label"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete a push label"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add users to a push label"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove users from a push label"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get all groups in the app"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get groups a user added"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get group details"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Create a group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Edit group information"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete a group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get group announcement"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/announcement"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Update group announcement"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/announcement"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get group file"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "GET"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Without pagination: ", _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/share_files"
            }), "- With pagination: ", _jsx(_components.code, {
              children: "/app-id/{app_id}/chatgroups/{group_id}/share_files?pagenum=1&pagesize=10"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Upload group file"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/share_files"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Download group file"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/share_files/{file_id}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete group file"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/share_files/{file_id}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get group members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "add group member"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "add group member in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove group member"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove group member in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List group administrators"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add group administrator"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove group administrator"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transfer ownership of group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List group block users"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/blocks/users"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add a group member to block list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove group members from group block list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{username}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List group allowed list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/white/users"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add group member into group allowed list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/white/users/{username}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add group members to block list in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/blocks/users"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove group members from group block list in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/blocks/users/{usernames}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add group member into group allowed list in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/blocks/users"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove user from group allowed list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/white/users/{username}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List muted users in group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/mute}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mute a member in group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/mute"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mute all members in group (except users in whitelist)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/ban"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unmute a member in group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/mute/{member1}(,{member2},…)"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unmute all members in group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{group_id}/ban"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get group role"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{groupId}/roles"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Apply to join group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{groupId}/apply"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Agree to join the group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{groupId}/apply_verify"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Leave group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{groupId}/quit"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Invite to group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{groupId}/invite"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Group Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Agree to invite to group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatgroups/{groupId}/invite_verify"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List chatrooms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get user added chatrooms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get chatroom information"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Create a chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Update chatroom information"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete a chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get chatroom announcement"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/announcement"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Update chatroom announcement"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/announcement"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List chatroom members"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add member to chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add member to chatroom in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete member from chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete member from chatroom in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List chatroom administrators"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add chatroom administrator"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete chatroom administrator"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List chatroom members blocked"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add chatroom member to block list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users/{username}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove user from chatroom block list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users/{username}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List chatroom members in allowed list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/white/users"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add user to chatroom allowed list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/white/users/{username}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove chatroom member from allowed list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/white/users/{username}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List blocked users in chatroom block list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/mute"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mute chatroom member"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/mute"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mute all members in chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/ban"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unmute a member in chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/mute/{member1}(,{member2},…)"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unmute all members in chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/ban"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List super administrators in chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/super_admin"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add super administrator in chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/super_admin"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove super administrator in chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/super_admin/{superAdmin}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get chatroom roles"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroomId}/roles"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Join chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroomId}/apply"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exit the chatroom"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Y"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$50/month/additional 50 QPS"
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
              children: "/app-id/{app_id}/chatrooms/{chatroomId}/quit"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add chatroom member to block list in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Remove user from chatroom block list in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/blocks/users/{usernames}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chatroom Member Management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Add user to chatroom allowed list in bulk"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "/"
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
              children: "/app-id/{app_id}/chatrooms/{chatroom_id}/white/users"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "sdk-support",
      children: "SDK support"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iOS"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Web"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Windows"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unity"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Flutter"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Reactive Native"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "✓"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "peak-concurrent-connections-pcc",
      children: "Peak concurrent connections (PCC)"
    }), `
`, _jsx(_components.p, {
      children: "PCC measures the peak number of concurrent TCP long-lived connections to Agora Chat servers in a calendar month. This value is typically different from your DAU or MAU. If a user (with one UID or UUID) logs into Agora Chat from multiple devices, they count as one MAU but multiple PCCs—one per device."
    }), `
`, _jsx(_components.h3, {
      id: "pcc-overage-fee",
      children: "PCC overage fee"
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates the total number of PCCs and MAUs across all your projects at the end of each billing cycle, which ends on the last day of each calendar month. If your usage exceeds the included limits, an overage fee may apply."
    }), `
`, _jsx(_components.p, {
      children: "By default, paid Agora Chat packages include a free PCC allowance equal to 10% of your total MAU."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "An overage fee of $5 per additional PCC is charged when the free threshold (10% of MAU) is exceeded."
      })
    }), `
`, _jsx(_components.p, {
      children: "Exceeding the 10% PCC limit does not affect end users or disrupt services, because Agora meters PCC only at the end of each billing cycle."
    }), `
`, _jsx(_components.p, {
      children: "Starter, Pro, and Enterprise package subscribers are entitled to at least 500, 1K, and 1K free PCCs per month, respectively. For example, if a Starter subscriber has 1,000 MAUs and 500 PCCs in a given month, no overage fee is charged."
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
