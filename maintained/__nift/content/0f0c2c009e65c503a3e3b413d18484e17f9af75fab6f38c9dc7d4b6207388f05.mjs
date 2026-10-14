import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Chat group overview",
  description: "Introduces chat group functionalities."
};
export let _markdown = `

Chat groups are features that enable instant messaging among multiple chat users. The relationship between chat group members is persistent: chat group members can send and receive messages in the group and also receive push notifications when they are offline.

## Chat group types [#chat-group-types]

Groups can be divided into public groups and private groups according to the public accessibility.

| Group type    | Join method                                                                                                                                                                                                                               | Retrieval of group information                                                                                                                                                                                                       |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public group  | Any users can apply to join a group or be invited by the group owner or an admin to join. Whether the join requests need to be approved by the group owner or admins depends on the group setting, for example, \`GroupStyle\` for Android. | The specifications of a group and the list of public groups are accessible to the public. The group announcement, the list of group shared files, and the group member list are only accessible to users that have joined the group. |
| Private group | Users can only be invited to join a group. Whether regular group members, besides the group owner and admins, can invite a user to join the group depends on the group setting, for example, \`GroupStyle\` for Android.                    | The group specifications, group announcement, the list of group shared files, and the group member list are only accessible to users that have joined the group.                                                                     |

The offline push function is not available to group with more than 3000 members. To enable the offline push function for such a large group, contact [support@agora.io](mailto\\:support@agora.io) before creating it. Note that it is impossible to enable the offline push function for a large group that is created. The maximum number of members that a group can contain varies with your price plans. For details, see [Pricing Plan Details](../../../reference/pricing-plan-details).

## Chat group roles and privileges [#chat-group-roles-and-privileges]

Chat groups have the following roles and privileges:

* Chat group members: Members can send and receive group messages. They do not have any administrative privileges.
* Chat group admins: Admins are members that also have some administrative privileges, including modifying the group announcements and managing chat group members (but not other admins). Admins are appointed by the chat group owner.
* Chat group owner: The owner is the group member with the most authority. When a user creates a chat group, they automatically become the group owner. Owners have the most privileges in a chat group, including appointing group admins, modifying group announcements, and managing group members (including admins). Owners can also disband the group or transfer ownership to another member.

## Chat groups vs. chat rooms [#chat-groups-vs-chat-rooms]

Chat groups and chat rooms both support instant messaging among multiple users. However, chat groups typically have a more consistent membership than Chat rooms. Chat group users are normally connected to the group itself; chat room users are more likely to be connected by their interest in the subject of the chat room, and so they tend to join and leave more freely.

The specific feature differences are listed in the following table:

| Feature                   | Chat group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Chat room                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use cases                 | Group chat use-cases in Signal and Skype, where members have a preexisting relationship with each other.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Stream chat use-cases in Twitch, where viewers have no relationship with each other. Once a member quits the stream channel, they leave the chat room.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Maximum number of members | 5,000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 20,000+                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Message push support      | If the offline push function is integrated, members receive push notifications when they go offline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Members do not receive push notifications when they go offline, as the offline push function is supported in chat rooms.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Offline message storage   | This feature is supported. Agora Chat servers store messages sent to offline group members and send to them once they go back online. A maximum number of 200 messages across chat groups can be stored per end user.                                                                                                                                                                                                                                                                                                                                                                                                                               | Chat room does not store messages sent to offline chat room members and this feature is not supported in chat rooms.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Message history           | Agora Chat servers store message history, subject to the [data retention period of your package selection](../../../reference/pricing-plan-details#message). The history can be retrieved by your app server via [this RESTful API](..//en/api-reference/api-ref/im/message-management#retrieve-historical-messages), in the format of JSON files. You can call [this Client API](../../build-core-messaging/messages/retrieve-messages#retrieve-historical-messages-of-the-specified-conversation) to allow the SDK to retrieve message history of a chat group. This allows end users to synchronize message history across multiple end devices. | Agora Chat servers store message history, subject to the [data retention period of your package selection](../../../reference/pricing-plan-details#message). The history can be retrieved by your app server via [this RESTful API](..//en/api-reference/api-ref/im/message-management#retrieve-historical-messages), in the format of JSON files. Agora Chat currently does not support SDK retrieving message history of a chat room via client APIs. However, when a user joins a chat room, Agora Chat servers can send 10 most recent messages to the client side via the message receiving callback. To enable this function, you need to contact [support@agora.io](mailto\\:support@agora.io). The number of historical messages sent to the new chat room member can be increased up to 200, without additional charges. |
| Message reliability       | Each member receives all the messages in the chat group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Members might not see all messages. The SDK discards messages if the chat room message threshold is exceeded. The default threshold is 100 messages per second. You can adjust this threshold according to your needs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Chat group features [#chat-group-features]

The Chat SDK supports creating and managing chat groups, managing group members, and modifying group attributes.

You can implement the following features with the chat group APIs.

### Create a chat group [#create-a-chat-group]

Any chat user can create a chat group. A user that creates a chat group becomes its owner. The maximum number of chat groups and group members supported varies according to the pricing plan. For details, see [Chat group total member limits](../../limitations).

### Join a chat group [#join-a-chat-group]

Users can search for public chat groups and request to join them by the group ID. For private chat groups, you can only join the group if the group owner or admin sends you a group chat invitation.

### Leave a chat group [#leave-a-chat-group]

Chat group members and admins can quit a chat group. Once they do, they no longer receive the group messages. Group owners cannot quit the chat group; instead, they must transfer ownership or disband the chat group. When a chat group is disbanded, all of its members are forced to leave the group.

### Add a chat group member [#add-a-chat-group-member]

Owners and admins for both public and private chat groups can invite other users to join their group.

### Remove a chat group member [#remove-a-chat-group-member]

Chat group owners and admins can remove a specified member from their group.

### Disband a chat group [#disband-a-chat-group]

Only the group owner can disband a chat group. Once a chat group is disbanded, all local group data is deleted, and all the group members are forced to leave the group.

### Retrieve a list of group members [#retrieve-a-list-of-group-members]

All the chat group users can retrieve a paginated list of the group's membership from the server. The members are displayed in descending order according to the timestamp when they joined the chat group.

### Retrieve a list of chat groups [#retrieve-a-list-of-chat-groups]

Users can retrieve the list of groups they have created or joined.

### Block and unblock group messages [#block-and-unblock-group-messages]

All chat group members can block and unblock group messages. Once a user blocks group messages, the user no longer receive messages from the specified chat group.

### Listen for chat group events [#listen-for-chat-group-events]

You can listen for chat group events such as when a user joins and leaves the group, and add app logic as needed.

### Manage the chat group blocklist [#manage-the-chat-group-blocklist]

Group owners or admins can add a specified group members to the blocklist; they can also remove blocked users from the list. Members added to the blocklist are forced to leave the chat group and can no longer join it.

### Retrieve a chat group blocklist [#retrieve-a-chat-group-blocklist]

Group owners and admins can retrieve the chat group blocklist. Members on the group blocklist cannot join the chat group.

### Manage a chat group allow list [#manage-a-chat-group-allow-list]

Chat group owners and admins can add specified group members to the group allow list; they can also remove users from the list. Members on the allow list can send group messages when a group owner or an admin has muted all group members.

### Retrieve a chat group allow list [#retrieve-a-chat-group-allow-list]

Chat group owners and admins can retrieve the chat group allow list. Members on the group allow list can still send group messages when a chat group owner or admin has muted all the group members.

### Manage a chat group mute list [#manage-a-chat-group-mute-list]

Chat group owner or admin can add specified group members to the group mute list. They can also remove them from the list. Members on the mute list can no longer send chat group messages. Muted members still receive group messages.

### Mute all chat group members [#mute-all-chat-group-members]

Chat group owners and admins can mute or unmute all the chat group members simultaneously. Muting all members prevents anyone from sending group messages except the group owner, admins, and the group members on the group allow list. Muted members still receive group messages.

### Retrieve a chat group mute list [#retrieve-a-chat-group-mute-list]

Chat group owners and admins can retrieve the chat group mute list. Members in the group mute list cannot send group messages.

### Transfer chat group ownership [#transfer-chat-group-ownership]

A chat group owner can transfer ownership of the group to a specified group member. Once the ownership is transferred, the group owner becomes a regular group member.

### Add and remove a group admin [#add-and-remove-a-group-admin]

Chat group owners can add members to the chat group admin list; they can also remove them from the list. Members on the admin list gain all admin privileges.

### Modify chat group attributes [#modify-chat-group-attributes]

Chat group owners and admins can modify their chat group name and description. They can also set or update the group announcements. Chat group members can retrieve group announcements.

### Manage chat group shared files [#manage-chat-group-shared-files]

All the chat group members can upload or download group shared files. Chat group owners and admins can delete all group shared files, whereas group members can only delete shared files whey have personally uploaded.

### Set chat group extensions [#set-chat-group-extensions]

Chat group owners and admins can update the extension information of the chat group. Extension information can be used to customize group extensions. The data length of the extension information cannot exceed 8 KB.

## Chat group total member limits [#chat-group-total-member-limits]

The maximum number of members per chat group depends on your pricing plan, as follows: 100 for Free, 10,000 for Starter, 50,000 for Pro, and custom (100,000 by default) for Enterprise.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Chat groups are features that enable instant messaging among multiple chat users. The relationship between chat group members is persistent: chat group members can send and receive messages in the group and also receive push notifications when they are offline."
  }, {
    heading: "chat-group-types",
    content: "Groups can be divided into public groups and private groups according to the public accessibility."
  }, {
    heading: "chat-group-types",
    content: "Group type"
  }, {
    heading: "chat-group-types",
    content: "Join method"
  }, {
    heading: "chat-group-types",
    content: "Retrieval of group information"
  }, {
    heading: "chat-group-types",
    content: "Public group"
  }, {
    heading: "chat-group-types",
    content: "Any users can apply to join a group or be invited by the group owner or an admin to join. Whether the join requests need to be approved by the group owner or admins depends on the group setting, for example, `GroupStyle` for Android."
  }, {
    heading: "chat-group-types",
    content: "The specifications of a group and the list of public groups are accessible to the public. The group announcement, the list of group shared files, and the group member list are only accessible to users that have joined the group."
  }, {
    heading: "chat-group-types",
    content: "Private group"
  }, {
    heading: "chat-group-types",
    content: "Users can only be invited to join a group. Whether regular group members, besides the group owner and admins, can invite a user to join the group depends on the group setting, for example, `GroupStyle` for Android."
  }, {
    heading: "chat-group-types",
    content: "The group specifications, group announcement, the list of group shared files, and the group member list are only accessible to users that have joined the group."
  }, {
    heading: "chat-group-types",
    content: "The offline push function is not available to group with more than 3000 members. To enable the offline push function for such a large group, contact support\\@agora.io before creating it. Note that it is impossible to enable the offline push function for a large group that is created. The maximum number of members that a group can contain varies with your price plans. For details, see Pricing Plan Details."
  }, {
    heading: "chat-group-roles-and-privileges",
    content: "Chat groups have the following roles and privileges:"
  }, {
    heading: "chat-group-roles-and-privileges",
    content: "Chat group members: Members can send and receive group messages. They do not have any administrative privileges."
  }, {
    heading: "chat-group-roles-and-privileges",
    content: "Chat group admins: Admins are members that also have some administrative privileges, including modifying the group announcements and managing chat group members (but not other admins). Admins are appointed by the chat group owner."
  }, {
    heading: "chat-group-roles-and-privileges",
    content: "Chat group owner: The owner is the group member with the most authority. When a user creates a chat group, they automatically become the group owner. Owners have the most privileges in a chat group, including appointing group admins, modifying group announcements, and managing group members (including admins). Owners can also disband the group or transfer ownership to another member."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Chat groups and chat rooms both support instant messaging among multiple users. However, chat groups typically have a more consistent membership than Chat rooms. Chat group users are normally connected to the group itself; chat room users are more likely to be connected by their interest in the subject of the chat room, and so they tend to join and leave more freely."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "The specific feature differences are listed in the following table:"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Feature"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Chat group"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Chat room"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Use cases"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Group chat use-cases in Signal and Skype, where members have a preexisting relationship with each other."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Stream chat use-cases in Twitch, where viewers have no relationship with each other. Once a member quits the stream channel, they leave the chat room."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Maximum number of members"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "5,000"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "20,000+"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Message push support"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "If the offline push function is integrated, members receive push notifications when they go offline."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Members do not receive push notifications when they go offline, as the offline push function is supported in chat rooms."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Offline message storage"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "This feature is supported. Agora Chat servers store messages sent to offline group members and send to them once they go back online. A maximum number of 200 messages across chat groups can be stored per end user."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Chat room does not store messages sent to offline chat room members and this feature is not supported in chat rooms."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Message history"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Agora Chat servers store message history, subject to the data retention period of your package selection. The history can be retrieved by your app server via this RESTful API, in the format of JSON files. You can call this Client API to allow the SDK to retrieve message history of a chat group. This allows end users to synchronize message history across multiple end devices."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Agora Chat servers store message history, subject to the data retention period of your package selection. The history can be retrieved by your app server via this RESTful API, in the format of JSON files. Agora Chat currently does not support SDK retrieving message history of a chat room via client APIs. However, when a user joins a chat room, Agora Chat servers can send 10 most recent messages to the client side via the message receiving callback. To enable this function, you need to contact support\\@agora.io. The number of historical messages sent to the new chat room member can be increased up to 200, without additional charges."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Message reliability"
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Each member receives all the messages in the chat group."
  }, {
    heading: "chat-groups-vs-chat-rooms",
    content: "Members might not see all messages. The SDK discards messages if the chat room message threshold is exceeded. The default threshold is 100 messages per second. You can adjust this threshold according to your needs."
  }, {
    heading: "chat-group-features",
    content: "The Chat SDK supports creating and managing chat groups, managing group members, and modifying group attributes."
  }, {
    heading: "chat-group-features",
    content: "You can implement the following features with the chat group APIs."
  }, {
    heading: "create-a-chat-group",
    content: "Any chat user can create a chat group. A user that creates a chat group becomes its owner. The maximum number of chat groups and group members supported varies according to the pricing plan. For details, see Chat group total member limits."
  }, {
    heading: "join-a-chat-group",
    content: "Users can search for public chat groups and request to join them by the group ID. For private chat groups, you can only join the group if the group owner or admin sends you a group chat invitation."
  }, {
    heading: "leave-a-chat-group",
    content: "Chat group members and admins can quit a chat group. Once they do, they no longer receive the group messages. Group owners cannot quit the chat group; instead, they must transfer ownership or disband the chat group. When a chat group is disbanded, all of its members are forced to leave the group."
  }, {
    heading: "add-a-chat-group-member",
    content: "Owners and admins for both public and private chat groups can invite other users to join their group."
  }, {
    heading: "remove-a-chat-group-member",
    content: "Chat group owners and admins can remove a specified member from their group."
  }, {
    heading: "disband-a-chat-group",
    content: "Only the group owner can disband a chat group. Once a chat group is disbanded, all local group data is deleted, and all the group members are forced to leave the group."
  }, {
    heading: "retrieve-a-list-of-group-members",
    content: "All the chat group users can retrieve a paginated list of the group's membership from the server. The members are displayed in descending order according to the timestamp when they joined the chat group."
  }, {
    heading: "retrieve-a-list-of-chat-groups",
    content: "Users can retrieve the list of groups they have created or joined."
  }, {
    heading: "block-and-unblock-group-messages",
    content: "All chat group members can block and unblock group messages. Once a user blocks group messages, the user no longer receive messages from the specified chat group."
  }, {
    heading: "listen-for-chat-group-events",
    content: "You can listen for chat group events such as when a user joins and leaves the group, and add app logic as needed."
  }, {
    heading: "manage-the-chat-group-blocklist",
    content: "Group owners or admins can add a specified group members to the blocklist; they can also remove blocked users from the list. Members added to the blocklist are forced to leave the chat group and can no longer join it."
  }, {
    heading: "retrieve-a-chat-group-blocklist",
    content: "Group owners and admins can retrieve the chat group blocklist. Members on the group blocklist cannot join the chat group."
  }, {
    heading: "manage-a-chat-group-allow-list",
    content: "Chat group owners and admins can add specified group members to the group allow list; they can also remove users from the list. Members on the allow list can send group messages when a group owner or an admin has muted all group members."
  }, {
    heading: "retrieve-a-chat-group-allow-list",
    content: "Chat group owners and admins can retrieve the chat group allow list. Members on the group allow list can still send group messages when a chat group owner or admin has muted all the group members."
  }, {
    heading: "manage-a-chat-group-mute-list",
    content: "Chat group owner or admin can add specified group members to the group mute list. They can also remove them from the list. Members on the mute list can no longer send chat group messages. Muted members still receive group messages."
  }, {
    heading: "mute-all-chat-group-members",
    content: "Chat group owners and admins can mute or unmute all the chat group members simultaneously. Muting all members prevents anyone from sending group messages except the group owner, admins, and the group members on the group allow list. Muted members still receive group messages."
  }, {
    heading: "retrieve-a-chat-group-mute-list",
    content: "Chat group owners and admins can retrieve the chat group mute list. Members in the group mute list cannot send group messages."
  }, {
    heading: "transfer-chat-group-ownership",
    content: "A chat group owner can transfer ownership of the group to a specified group member. Once the ownership is transferred, the group owner becomes a regular group member."
  }, {
    heading: "add-and-remove-a-group-admin",
    content: "Chat group owners can add members to the chat group admin list; they can also remove them from the list. Members on the admin list gain all admin privileges."
  }, {
    heading: "modify-chat-group-attributes",
    content: "Chat group owners and admins can modify their chat group name and description. They can also set or update the group announcements. Chat group members can retrieve group announcements."
  }, {
    heading: "manage-chat-group-shared-files",
    content: "All the chat group members can upload or download group shared files. Chat group owners and admins can delete all group shared files, whereas group members can only delete shared files whey have personally uploaded."
  }, {
    heading: "set-chat-group-extensions",
    content: "Chat group owners and admins can update the extension information of the chat group. Extension information can be used to customize group extensions. The data length of the extension information cannot exceed 8 KB."
  }, {
    heading: "chat-group-total-member-limits",
    content: "The maximum number of members per chat group depends on your pricing plan, as follows: 100 for Free, 10,000 for Starter, 50,000 for Pro, and custom (100,000 by default) for Enterprise."
  }],
  headings: [{
    id: "chat-group-types",
    content: "Chat group types"
  }, {
    id: "chat-group-roles-and-privileges",
    content: "Chat group roles and privileges"
  }, {
    id: "chat-groups-vs-chat-rooms",
    content: "Chat groups vs. chat rooms"
  }, {
    id: "chat-group-features",
    content: "Chat group features"
  }, {
    id: "create-a-chat-group",
    content: "Create a chat group"
  }, {
    id: "join-a-chat-group",
    content: "Join a chat group"
  }, {
    id: "leave-a-chat-group",
    content: "Leave a chat group"
  }, {
    id: "add-a-chat-group-member",
    content: "Add a chat group member"
  }, {
    id: "remove-a-chat-group-member",
    content: "Remove a chat group member"
  }, {
    id: "disband-a-chat-group",
    content: "Disband a chat group"
  }, {
    id: "retrieve-a-list-of-group-members",
    content: "Retrieve a list of group members"
  }, {
    id: "retrieve-a-list-of-chat-groups",
    content: "Retrieve a list of chat groups"
  }, {
    id: "block-and-unblock-group-messages",
    content: "Block and unblock group messages"
  }, {
    id: "listen-for-chat-group-events",
    content: "Listen for chat group events"
  }, {
    id: "manage-the-chat-group-blocklist",
    content: "Manage the chat group blocklist"
  }, {
    id: "retrieve-a-chat-group-blocklist",
    content: "Retrieve a chat group blocklist"
  }, {
    id: "manage-a-chat-group-allow-list",
    content: "Manage a chat group allow list"
  }, {
    id: "retrieve-a-chat-group-allow-list",
    content: "Retrieve a chat group allow list"
  }, {
    id: "manage-a-chat-group-mute-list",
    content: "Manage a chat group mute list"
  }, {
    id: "mute-all-chat-group-members",
    content: "Mute all chat group members"
  }, {
    id: "retrieve-a-chat-group-mute-list",
    content: "Retrieve a chat group mute list"
  }, {
    id: "transfer-chat-group-ownership",
    content: "Transfer chat group ownership"
  }, {
    id: "add-and-remove-a-group-admin",
    content: "Add and remove a group admin"
  }, {
    id: "modify-chat-group-attributes",
    content: "Modify chat group attributes"
  }, {
    id: "manage-chat-group-shared-files",
    content: "Manage chat group shared files"
  }, {
    id: "set-chat-group-extensions",
    content: "Set chat group extensions"
  }, {
    id: "chat-group-total-member-limits",
    content: "Chat group total member limits"
  }]
};
export let toc = [{
  depth: 2,
  url: "#chat-group-types",
  title: _jsx(_Fragment, {
    children: "Chat group types"
  })
}, {
  depth: 2,
  url: "#chat-group-roles-and-privileges",
  title: _jsx(_Fragment, {
    children: "Chat group roles and privileges"
  })
}, {
  depth: 2,
  url: "#chat-groups-vs-chat-rooms",
  title: _jsx(_Fragment, {
    children: "Chat groups vs. chat rooms"
  })
}, {
  depth: 2,
  url: "#chat-group-features",
  title: _jsx(_Fragment, {
    children: "Chat group features"
  })
}, {
  depth: 3,
  url: "#create-a-chat-group",
  title: _jsx(_Fragment, {
    children: "Create a chat group"
  })
}, {
  depth: 3,
  url: "#join-a-chat-group",
  title: _jsx(_Fragment, {
    children: "Join a chat group"
  })
}, {
  depth: 3,
  url: "#leave-a-chat-group",
  title: _jsx(_Fragment, {
    children: "Leave a chat group"
  })
}, {
  depth: 3,
  url: "#add-a-chat-group-member",
  title: _jsx(_Fragment, {
    children: "Add a chat group member"
  })
}, {
  depth: 3,
  url: "#remove-a-chat-group-member",
  title: _jsx(_Fragment, {
    children: "Remove a chat group member"
  })
}, {
  depth: 3,
  url: "#disband-a-chat-group",
  title: _jsx(_Fragment, {
    children: "Disband a chat group"
  })
}, {
  depth: 3,
  url: "#retrieve-a-list-of-group-members",
  title: _jsx(_Fragment, {
    children: "Retrieve a list of group members"
  })
}, {
  depth: 3,
  url: "#retrieve-a-list-of-chat-groups",
  title: _jsx(_Fragment, {
    children: "Retrieve a list of chat groups"
  })
}, {
  depth: 3,
  url: "#block-and-unblock-group-messages",
  title: _jsx(_Fragment, {
    children: "Block and unblock group messages"
  })
}, {
  depth: 3,
  url: "#listen-for-chat-group-events",
  title: _jsx(_Fragment, {
    children: "Listen for chat group events"
  })
}, {
  depth: 3,
  url: "#manage-the-chat-group-blocklist",
  title: _jsx(_Fragment, {
    children: "Manage the chat group blocklist"
  })
}, {
  depth: 3,
  url: "#retrieve-a-chat-group-blocklist",
  title: _jsx(_Fragment, {
    children: "Retrieve a chat group blocklist"
  })
}, {
  depth: 3,
  url: "#manage-a-chat-group-allow-list",
  title: _jsx(_Fragment, {
    children: "Manage a chat group allow list"
  })
}, {
  depth: 3,
  url: "#retrieve-a-chat-group-allow-list",
  title: _jsx(_Fragment, {
    children: "Retrieve a chat group allow list"
  })
}, {
  depth: 3,
  url: "#manage-a-chat-group-mute-list",
  title: _jsx(_Fragment, {
    children: "Manage a chat group mute list"
  })
}, {
  depth: 3,
  url: "#mute-all-chat-group-members",
  title: _jsx(_Fragment, {
    children: "Mute all chat group members"
  })
}, {
  depth: 3,
  url: "#retrieve-a-chat-group-mute-list",
  title: _jsx(_Fragment, {
    children: "Retrieve a chat group mute list"
  })
}, {
  depth: 3,
  url: "#transfer-chat-group-ownership",
  title: _jsx(_Fragment, {
    children: "Transfer chat group ownership"
  })
}, {
  depth: 3,
  url: "#add-and-remove-a-group-admin",
  title: _jsx(_Fragment, {
    children: "Add and remove a group admin"
  })
}, {
  depth: 3,
  url: "#modify-chat-group-attributes",
  title: _jsx(_Fragment, {
    children: "Modify chat group attributes"
  })
}, {
  depth: 3,
  url: "#manage-chat-group-shared-files",
  title: _jsx(_Fragment, {
    children: "Manage chat group shared files"
  })
}, {
  depth: 3,
  url: "#set-chat-group-extensions",
  title: _jsx(_Fragment, {
    children: "Set chat group extensions"
  })
}, {
  depth: 2,
  url: "#chat-group-total-member-limits",
  title: _jsx(_Fragment, {
    children: "Chat group total member limits"
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
      children: "Chat groups are features that enable instant messaging among multiple chat users. The relationship between chat group members is persistent: chat group members can send and receive messages in the group and also receive push notifications when they are offline."
    }), `
`, _jsx(_components.h2, {
      id: "chat-group-types",
      children: "Chat group types"
    }), `
`, _jsx(_components.p, {
      children: "Groups can be divided into public groups and private groups according to the public accessibility."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Group type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Join method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Retrieval of group information"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Public group"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Any users can apply to join a group or be invited by the group owner or an admin to join. Whether the join requests need to be approved by the group owner or admins depends on the group setting, for example, ", _jsx(_components.code, {
              children: "GroupStyle"
            }), " for Android."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The specifications of a group and the list of public groups are accessible to the public. The group announcement, the list of group shared files, and the group member list are only accessible to users that have joined the group."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Private group"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Users can only be invited to join a group. Whether regular group members, besides the group owner and admins, can invite a user to join the group depends on the group setting, for example, ", _jsx(_components.code, {
              children: "GroupStyle"
            }), " for Android."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The group specifications, group announcement, the list of group shared files, and the group member list are only accessible to users that have joined the group."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["The offline push function is not available to group with more than 3000 members. To enable the offline push function for such a large group, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " before creating it. Note that it is impossible to enable the offline push function for a large group that is created. The maximum number of members that a group can contain varies with your price plans. For details, see ", _jsx(_components.a, {
        href: "../../../reference/pricing-plan-details",
        children: "Pricing Plan Details"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "chat-group-roles-and-privileges",
      children: "Chat group roles and privileges"
    }), `
`, _jsx(_components.p, {
      children: "Chat groups have the following roles and privileges:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Chat group members: Members can send and receive group messages. They do not have any administrative privileges."
      }), `
`, _jsx(_components.li, {
        children: "Chat group admins: Admins are members that also have some administrative privileges, including modifying the group announcements and managing chat group members (but not other admins). Admins are appointed by the chat group owner."
      }), `
`, _jsx(_components.li, {
        children: "Chat group owner: The owner is the group member with the most authority. When a user creates a chat group, they automatically become the group owner. Owners have the most privileges in a chat group, including appointing group admins, modifying group announcements, and managing group members (including admins). Owners can also disband the group or transfer ownership to another member."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "chat-groups-vs-chat-rooms",
      children: "Chat groups vs. chat rooms"
    }), `
`, _jsx(_components.p, {
      children: "Chat groups and chat rooms both support instant messaging among multiple users. However, chat groups typically have a more consistent membership than Chat rooms. Chat group users are normally connected to the group itself; chat room users are more likely to be connected by their interest in the subject of the chat room, and so they tend to join and leave more freely."
    }), `
`, _jsx(_components.p, {
      children: "The specific feature differences are listed in the following table:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Feature"
          }), _jsx(_components.th, {
            children: "Chat group"
          }), _jsx(_components.th, {
            children: "Chat room"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Use cases"
          }), _jsx(_components.td, {
            children: "Group chat use-cases in Signal and Skype, where members have a preexisting relationship with each other."
          }), _jsx(_components.td, {
            children: "Stream chat use-cases in Twitch, where viewers have no relationship with each other. Once a member quits the stream channel, they leave the chat room."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Maximum number of members"
          }), _jsx(_components.td, {
            children: "5,000"
          }), _jsx(_components.td, {
            children: "20,000+"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Message push support"
          }), _jsx(_components.td, {
            children: "If the offline push function is integrated, members receive push notifications when they go offline."
          }), _jsx(_components.td, {
            children: "Members do not receive push notifications when they go offline, as the offline push function is supported in chat rooms."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Offline message storage"
          }), _jsx(_components.td, {
            children: "This feature is supported. Agora Chat servers store messages sent to offline group members and send to them once they go back online. A maximum number of 200 messages across chat groups can be stored per end user."
          }), _jsx(_components.td, {
            children: "Chat room does not store messages sent to offline chat room members and this feature is not supported in chat rooms."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Message history"
          }), _jsxs(_components.td, {
            children: ["Agora Chat servers store message history, subject to the ", _jsx(_components.a, {
              href: "../../../reference/pricing-plan-details#message",
              children: "data retention period of your package selection"
            }), ". The history can be retrieved by your app server via ", _jsx(_components.a, {
              href: "..//en/api-reference/api-ref/im/message-management#retrieve-historical-messages",
              children: "this RESTful API"
            }), ", in the format of JSON files. You can call ", _jsx(_components.a, {
              href: "../../build-core-messaging/messages/retrieve-messages#retrieve-historical-messages-of-the-specified-conversation",
              children: "this Client API"
            }), " to allow the SDK to retrieve message history of a chat group. This allows end users to synchronize message history across multiple end devices."]
          }), _jsxs(_components.td, {
            children: ["Agora Chat servers store message history, subject to the ", _jsx(_components.a, {
              href: "../../../reference/pricing-plan-details#message",
              children: "data retention period of your package selection"
            }), ". The history can be retrieved by your app server via ", _jsx(_components.a, {
              href: "..//en/api-reference/api-ref/im/message-management#retrieve-historical-messages",
              children: "this RESTful API"
            }), ", in the format of JSON files. Agora Chat currently does not support SDK retrieving message history of a chat room via client APIs. However, when a user joins a chat room, Agora Chat servers can send 10 most recent messages to the client side via the message receiving callback. To enable this function, you need to contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), ". The number of historical messages sent to the new chat room member can be increased up to 200, without additional charges."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Message reliability"
          }), _jsx(_components.td, {
            children: "Each member receives all the messages in the chat group."
          }), _jsx(_components.td, {
            children: "Members might not see all messages. The SDK discards messages if the chat room message threshold is exceeded. The default threshold is 100 messages per second. You can adjust this threshold according to your needs."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "chat-group-features",
      children: "Chat group features"
    }), `
`, _jsx(_components.p, {
      children: "The Chat SDK supports creating and managing chat groups, managing group members, and modifying group attributes."
    }), `
`, _jsx(_components.p, {
      children: "You can implement the following features with the chat group APIs."
    }), `
`, _jsx(_components.h3, {
      id: "create-a-chat-group",
      children: "Create a chat group"
    }), `
`, _jsxs(_components.p, {
      children: ["Any chat user can create a chat group. A user that creates a chat group becomes its owner. The maximum number of chat groups and group members supported varies according to the pricing plan. For details, see ", _jsx(_components.a, {
        href: "../../limitations",
        children: "Chat group total member limits"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "join-a-chat-group",
      children: "Join a chat group"
    }), `
`, _jsx(_components.p, {
      children: "Users can search for public chat groups and request to join them by the group ID. For private chat groups, you can only join the group if the group owner or admin sends you a group chat invitation."
    }), `
`, _jsx(_components.h3, {
      id: "leave-a-chat-group",
      children: "Leave a chat group"
    }), `
`, _jsx(_components.p, {
      children: "Chat group members and admins can quit a chat group. Once they do, they no longer receive the group messages. Group owners cannot quit the chat group; instead, they must transfer ownership or disband the chat group. When a chat group is disbanded, all of its members are forced to leave the group."
    }), `
`, _jsx(_components.h3, {
      id: "add-a-chat-group-member",
      children: "Add a chat group member"
    }), `
`, _jsx(_components.p, {
      children: "Owners and admins for both public and private chat groups can invite other users to join their group."
    }), `
`, _jsx(_components.h3, {
      id: "remove-a-chat-group-member",
      children: "Remove a chat group member"
    }), `
`, _jsx(_components.p, {
      children: "Chat group owners and admins can remove a specified member from their group."
    }), `
`, _jsx(_components.h3, {
      id: "disband-a-chat-group",
      children: "Disband a chat group"
    }), `
`, _jsx(_components.p, {
      children: "Only the group owner can disband a chat group. Once a chat group is disbanded, all local group data is deleted, and all the group members are forced to leave the group."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-a-list-of-group-members",
      children: "Retrieve a list of group members"
    }), `
`, _jsx(_components.p, {
      children: "All the chat group users can retrieve a paginated list of the group's membership from the server. The members are displayed in descending order according to the timestamp when they joined the chat group."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-a-list-of-chat-groups",
      children: "Retrieve a list of chat groups"
    }), `
`, _jsx(_components.p, {
      children: "Users can retrieve the list of groups they have created or joined."
    }), `
`, _jsx(_components.h3, {
      id: "block-and-unblock-group-messages",
      children: "Block and unblock group messages"
    }), `
`, _jsx(_components.p, {
      children: "All chat group members can block and unblock group messages. Once a user blocks group messages, the user no longer receive messages from the specified chat group."
    }), `
`, _jsx(_components.h3, {
      id: "listen-for-chat-group-events",
      children: "Listen for chat group events"
    }), `
`, _jsx(_components.p, {
      children: "You can listen for chat group events such as when a user joins and leaves the group, and add app logic as needed."
    }), `
`, _jsx(_components.h3, {
      id: "manage-the-chat-group-blocklist",
      children: "Manage the chat group blocklist"
    }), `
`, _jsx(_components.p, {
      children: "Group owners or admins can add a specified group members to the blocklist; they can also remove blocked users from the list. Members added to the blocklist are forced to leave the chat group and can no longer join it."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-a-chat-group-blocklist",
      children: "Retrieve a chat group blocklist"
    }), `
`, _jsx(_components.p, {
      children: "Group owners and admins can retrieve the chat group blocklist. Members on the group blocklist cannot join the chat group."
    }), `
`, _jsx(_components.h3, {
      id: "manage-a-chat-group-allow-list",
      children: "Manage a chat group allow list"
    }), `
`, _jsx(_components.p, {
      children: "Chat group owners and admins can add specified group members to the group allow list; they can also remove users from the list. Members on the allow list can send group messages when a group owner or an admin has muted all group members."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-a-chat-group-allow-list",
      children: "Retrieve a chat group allow list"
    }), `
`, _jsx(_components.p, {
      children: "Chat group owners and admins can retrieve the chat group allow list. Members on the group allow list can still send group messages when a chat group owner or admin has muted all the group members."
    }), `
`, _jsx(_components.h3, {
      id: "manage-a-chat-group-mute-list",
      children: "Manage a chat group mute list"
    }), `
`, _jsx(_components.p, {
      children: "Chat group owner or admin can add specified group members to the group mute list. They can also remove them from the list. Members on the mute list can no longer send chat group messages. Muted members still receive group messages."
    }), `
`, _jsx(_components.h3, {
      id: "mute-all-chat-group-members",
      children: "Mute all chat group members"
    }), `
`, _jsx(_components.p, {
      children: "Chat group owners and admins can mute or unmute all the chat group members simultaneously. Muting all members prevents anyone from sending group messages except the group owner, admins, and the group members on the group allow list. Muted members still receive group messages."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-a-chat-group-mute-list",
      children: "Retrieve a chat group mute list"
    }), `
`, _jsx(_components.p, {
      children: "Chat group owners and admins can retrieve the chat group mute list. Members in the group mute list cannot send group messages."
    }), `
`, _jsx(_components.h3, {
      id: "transfer-chat-group-ownership",
      children: "Transfer chat group ownership"
    }), `
`, _jsx(_components.p, {
      children: "A chat group owner can transfer ownership of the group to a specified group member. Once the ownership is transferred, the group owner becomes a regular group member."
    }), `
`, _jsx(_components.h3, {
      id: "add-and-remove-a-group-admin",
      children: "Add and remove a group admin"
    }), `
`, _jsx(_components.p, {
      children: "Chat group owners can add members to the chat group admin list; they can also remove them from the list. Members on the admin list gain all admin privileges."
    }), `
`, _jsx(_components.h3, {
      id: "modify-chat-group-attributes",
      children: "Modify chat group attributes"
    }), `
`, _jsx(_components.p, {
      children: "Chat group owners and admins can modify their chat group name and description. They can also set or update the group announcements. Chat group members can retrieve group announcements."
    }), `
`, _jsx(_components.h3, {
      id: "manage-chat-group-shared-files",
      children: "Manage chat group shared files"
    }), `
`, _jsx(_components.p, {
      children: "All the chat group members can upload or download group shared files. Chat group owners and admins can delete all group shared files, whereas group members can only delete shared files whey have personally uploaded."
    }), `
`, _jsx(_components.h3, {
      id: "set-chat-group-extensions",
      children: "Set chat group extensions"
    }), `
`, _jsx(_components.p, {
      children: "Chat group owners and admins can update the extension information of the chat group. Extension information can be used to customize group extensions. The data length of the extension information cannot exceed 8 KB."
    }), `
`, _jsx(_components.h2, {
      id: "chat-group-total-member-limits",
      children: "Chat group total member limits"
    }), `
`, _jsx(_components.p, {
      children: "The maximum number of members per chat group depends on your pricing plan, as follows: 100 for Free, 10,000 for Starter, 50,000 for Pro, and custom (100,000 by default) for Enterprise."
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
