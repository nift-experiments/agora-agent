import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Chat room overview",
  description: "Gives an overview of chat room functionalities provided by Agora Chat SDK."
};
export let _markdown = `

Chat rooms enable real-time messaging among multiple users and are widely applied in live broadcast use cases as stream chat in Twitch. Chat rooms do not have a strict membership, and members do not retain any permanent relationship with each other. Once going offline, chat room members cannot receive any messages from the chat room and automatically leave the chat room after 2 minutes (members on the chat room allow list remain in the chat room even if they stay offline for 2 minutes or more). If you want to adjust the time, contact [support@agora.io](mailto\\:support@agora.io).

## Chat room roles and privileges [#chat-room-roles-and-privileges]

Chat rooms have the following roles and privileges:

* Chat room members: Regular members that can send and receive chat room messages.
* Chat room admins: They are specified by the chat group owner. Apart from sending and receiving chat room messages, they have some administrative privileges. You can add up to 99 admins for each chat room.
* Chat room owner: The creator of the chat room. Chat room owners have the highest privileges, including specifying the chat room admin, disbanding the chat room, modifying the chat room attributes, and managing other chat room members.

## Differences between chat group and chat room [#differences-between-chat-group-and-chat-room]

Both chat group and chat room support instant messaging among multiple users. The major difference lies in whether mmebers have a stable relationship. Chat group members tend to remain for a long time, whereas chat room members join and leave freely.

The following table shows the feature comparisons between a chat group and a chat room:

| Feature                   | Chat group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Chat room                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use cases                 | Group chat use-cases in Signal and Skype, where all members have a stable relationship.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Stream chat use-cases in Twitch, where viewers have no relationship with each other. Once a member quits the stream chat channel, this member leaves the chat room.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Maximum number of members | 5,000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 20,000 and more                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Message push support      | Members receive push messages when they go offline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Members do not receive push messages when they go offline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Offline message storage   | This feature is supported. Agora Chat servers store messages sent to offline group members and sends to them once they go back online. A maximum number of 200 messages across chat groups can be stored per end user.                                                                                                                                                                                                                                                                                                                                                                                                                              | Chat room does not store messages sent to offline chat room members and this feature is not supported in chat rooms.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Message history           | Agora Chat servers store message history, subject to the [data retention period of your package selection](../../../reference/pricing-plan-details#message). The history can be retrieved by your app server via [this RESTful API](..//en/api-reference/api-ref/im/message-management#retrieve-historical-messages), in the format of JSON files. You can call [this Client API](../../build-core-messaging/messages/retrieve-messages#retrieve-historical-messages-of-the-specified-conversation) to allow the SDK to retrieve message history of a chat group. This allows end users to synchronize message history across multiple end devices. | Agora Chat servers store message history, subject to the [data retention period of your package selection](../../../reference/pricing-plan-details#message). The history can be retrieved by your app server via [this RESTful API](..//en/api-reference/api-ref/im/message-management#retrieve-historical-messages), in the format of JSON files. Agora Chat currently does not support SDK retrieving message history of a chatroom via client APIs. However, when a user joins a chat room, Agora Chat servers send 10 most recent messages to the client side via the message receiving callback. The number of historical messages sent to the new chat room member can be increased up to 200, without additional charges. |
| Message reliability       | Each member receives all the messages in the chat group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Members might not see all messages. The SDK discards messages if the chat room message threshold is exceeded. The default threshold is delivering 20 messages per second. You can adjust this threshold according to your needs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Chat room features [#chat-room-features]

The Chat SDK supports creating and managing chat rooms, managing chat room members, and modifying chat room attributes.

You can implement the following features with the chat room APIs:

### Create a chat room [#create-a-chat-room]

Only the [chat room super admin](..//en/api-reference/api-ref/im/chatroom-management/manage-chatroom-admins#adding-a-chat-room-super-admin) can create a chat room, and the user that creates the chat room becomes the chat room owner. The maximum number of chat room member supported vary according to the pricing plan. For details, see [Limitations of chat room](#limitations).

### Join and leave a chat room [#join-and-leave-a-chat-room]

All the chat users can join and leave the chat rooms freely.

### Disband a chat room [#disband-a-chat-room]

Only the chat room owner can disband the chat room.

### Retrieve the chat room list [#retrieve-the-chat-room-list]

All the chat users can retrieve the chat room list from the server with pagination.

### Retrieve the chat room attributes [#retrieve-the-chat-room-attributes]

All the chat room members can retrieve the chat room attributes including the chat room name and descriptions.

### Modify the chat room name [#modify-the-chat-room-name]

Only the chat room owner has the privilege to modify the chat room name.

### Modify the chat room announcement [#modify-the-chat-room-announcement]

Only the chat room owner has the privilege to edit and delete the chat room announcement. Once the notification is updated, all the chat room members are informed of this update by callback events.

### Transfer the chat room ownership [#transfer-the-chat-room-ownership]

The chat room owner can transfer the ownership to the specified chat room member.

### Add and remove the chat room admin [#add-and-remove-the-chat-room-admin]

The chat room owner can add and remove the chat room admin.

### Mute the specified chat room member [#mute-the-specified-chat-room-member]

The chat room owner or admin can mute the specified chat room member.

### Mute all the chat room members [#mute-all-the-chat-room-members]

The chat room owner or admin can mute all the chat room members. By default, the chat room owner and admin are excluded from the chat room mute list.

### Manage the chat room allow list [#manage-the-chat-room-allow-list]

The chat room owner or admin can add the specified members to the chat room allow list, and remove them from the list. Once added to the chat room allow list, the members can send messages to the chat room even when the chat room owner or admin has muted all the chat room members.

### Manage the chat room blocklist [#manage-the-chat-room-blocklist]

The chat room owner or admin can add the specified members to the chat room blocklist, and remove them from the list. Once added to the chat room blocklist, the members cannot send or receive chat group messages, nor can they join the chat room again.

## Limitations of chat room [#limitations-of-chat-room]

The maximum number of chat room members, the total number of chat rooms you can create, and the maximum number of chat rooms a user can join vary according to your pricing plan.

| Pricing plan   | Number of chat room members | Number of chat rooms you can create | Number of chat rooms a user can join |
| :------------- | :-------------------------- | :---------------------------------- | ------------------------------------ |
| **Free**       | 100                         | 100                                 | 100                                  |
| **Starter**    | 2,000                       | 10,000                              | 1,000                                |
| **Pro**        | 10,000                      | 50,000                              | 2,000                                |
| **Enterprise** | Custom (20,000 by default)  | Custom (100,000 by default)         | Custom (10,000 by default)           |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Chat rooms enable real-time messaging among multiple users and are widely applied in live broadcast use cases as stream chat in Twitch. Chat rooms do not have a strict membership, and members do not retain any permanent relationship with each other. Once going offline, chat room members cannot receive any messages from the chat room and automatically leave the chat room after 2 minutes (members on the chat room allow list remain in the chat room even if they stay offline for 2 minutes or more). If you want to adjust the time, contact support\\@agora.io."
  }, {
    heading: "chat-room-roles-and-privileges",
    content: "Chat rooms have the following roles and privileges:"
  }, {
    heading: "chat-room-roles-and-privileges",
    content: "Chat room members: Regular members that can send and receive chat room messages."
  }, {
    heading: "chat-room-roles-and-privileges",
    content: "Chat room admins: They are specified by the chat group owner. Apart from sending and receiving chat room messages, they have some administrative privileges. You can add up to 99 admins for each chat room."
  }, {
    heading: "chat-room-roles-and-privileges",
    content: "Chat room owner: The creator of the chat room. Chat room owners have the highest privileges, including specifying the chat room admin, disbanding the chat room, modifying the chat room attributes, and managing other chat room members."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Both chat group and chat room support instant messaging among multiple users. The major difference lies in whether mmebers have a stable relationship. Chat group members tend to remain for a long time, whereas chat room members join and leave freely."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "The following table shows the feature comparisons between a chat group and a chat room:"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Feature"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Chat group"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Chat room"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Use cases"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Group chat use-cases in Signal and Skype, where all members have a stable relationship."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Stream chat use-cases in Twitch, where viewers have no relationship with each other. Once a member quits the stream chat channel, this member leaves the chat room."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Maximum number of members"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "5,000"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "20,000 and more"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Message push support"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Members receive push messages when they go offline."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Members do not receive push messages when they go offline."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Offline message storage"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "This feature is supported. Agora Chat servers store messages sent to offline group members and sends to them once they go back online. A maximum number of 200 messages across chat groups can be stored per end user."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Chat room does not store messages sent to offline chat room members and this feature is not supported in chat rooms."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Message history"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Agora Chat servers store message history, subject to the data retention period of your package selection. The history can be retrieved by your app server via this RESTful API, in the format of JSON files. You can call this Client API to allow the SDK to retrieve message history of a chat group. This allows end users to synchronize message history across multiple end devices."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Agora Chat servers store message history, subject to the data retention period of your package selection. The history can be retrieved by your app server via this RESTful API, in the format of JSON files. Agora Chat currently does not support SDK retrieving message history of a chatroom via client APIs. However, when a user joins a chat room, Agora Chat servers send 10 most recent messages to the client side via the message receiving callback. The number of historical messages sent to the new chat room member can be increased up to 200, without additional charges."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Message reliability"
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Each member receives all the messages in the chat group."
  }, {
    heading: "differences-between-chat-group-and-chat-room",
    content: "Members might not see all messages. The SDK discards messages if the chat room message threshold is exceeded. The default threshold is delivering 20 messages per second. You can adjust this threshold according to your needs."
  }, {
    heading: "chat-room-features",
    content: "The Chat SDK supports creating and managing chat rooms, managing chat room members, and modifying chat room attributes."
  }, {
    heading: "chat-room-features",
    content: "You can implement the following features with the chat room APIs:"
  }, {
    heading: "create-a-chat-room",
    content: "Only the chat room super admin can create a chat room, and the user that creates the chat room becomes the chat room owner. The maximum number of chat room member supported vary according to the pricing plan. For details, see Limitations of chat room."
  }, {
    heading: "join-and-leave-a-chat-room",
    content: "All the chat users can join and leave the chat rooms freely."
  }, {
    heading: "disband-a-chat-room",
    content: "Only the chat room owner can disband the chat room."
  }, {
    heading: "retrieve-the-chat-room-list",
    content: "All the chat users can retrieve the chat room list from the server with pagination."
  }, {
    heading: "retrieve-the-chat-room-attributes",
    content: "All the chat room members can retrieve the chat room attributes including the chat room name and descriptions."
  }, {
    heading: "modify-the-chat-room-name",
    content: "Only the chat room owner has the privilege to modify the chat room name."
  }, {
    heading: "modify-the-chat-room-announcement",
    content: "Only the chat room owner has the privilege to edit and delete the chat room announcement. Once the notification is updated, all the chat room members are informed of this update by callback events."
  }, {
    heading: "transfer-the-chat-room-ownership",
    content: "The chat room owner can transfer the ownership to the specified chat room member."
  }, {
    heading: "add-and-remove-the-chat-room-admin",
    content: "The chat room owner can add and remove the chat room admin."
  }, {
    heading: "mute-the-specified-chat-room-member",
    content: "The chat room owner or admin can mute the specified chat room member."
  }, {
    heading: "mute-all-the-chat-room-members",
    content: "The chat room owner or admin can mute all the chat room members. By default, the chat room owner and admin are excluded from the chat room mute list."
  }, {
    heading: "manage-the-chat-room-allow-list",
    content: "The chat room owner or admin can add the specified members to the chat room allow list, and remove them from the list. Once added to the chat room allow list, the members can send messages to the chat room even when the chat room owner or admin has muted all the chat room members."
  }, {
    heading: "manage-the-chat-room-blocklist",
    content: "The chat room owner or admin can add the specified members to the chat room blocklist, and remove them from the list. Once added to the chat room blocklist, the members cannot send or receive chat group messages, nor can they join the chat room again."
  }, {
    heading: "limitations-of-chat-room",
    content: "The maximum number of chat room members, the total number of chat rooms you can create, and the maximum number of chat rooms a user can join vary according to your pricing plan."
  }, {
    heading: "limitations-of-chat-room",
    content: "Pricing plan"
  }, {
    heading: "limitations-of-chat-room",
    content: "Number of chat room members"
  }, {
    heading: "limitations-of-chat-room",
    content: "Number of chat rooms you can create"
  }, {
    heading: "limitations-of-chat-room",
    content: "Number of chat rooms a user can join"
  }, {
    heading: "limitations-of-chat-room",
    content: "**Free**"
  }, {
    heading: "limitations-of-chat-room",
    content: "100"
  }, {
    heading: "limitations-of-chat-room",
    content: "100"
  }, {
    heading: "limitations-of-chat-room",
    content: "100"
  }, {
    heading: "limitations-of-chat-room",
    content: "**Starter**"
  }, {
    heading: "limitations-of-chat-room",
    content: "2,000"
  }, {
    heading: "limitations-of-chat-room",
    content: "10,000"
  }, {
    heading: "limitations-of-chat-room",
    content: "1,000"
  }, {
    heading: "limitations-of-chat-room",
    content: "**Pro**"
  }, {
    heading: "limitations-of-chat-room",
    content: "10,000"
  }, {
    heading: "limitations-of-chat-room",
    content: "50,000"
  }, {
    heading: "limitations-of-chat-room",
    content: "2,000"
  }, {
    heading: "limitations-of-chat-room",
    content: "**Enterprise**"
  }, {
    heading: "limitations-of-chat-room",
    content: "Custom (20,000 by default)"
  }, {
    heading: "limitations-of-chat-room",
    content: "Custom (100,000 by default)"
  }, {
    heading: "limitations-of-chat-room",
    content: "Custom (10,000 by default)"
  }],
  headings: [{
    id: "chat-room-roles-and-privileges",
    content: "Chat room roles and privileges"
  }, {
    id: "differences-between-chat-group-and-chat-room",
    content: "Differences between chat group and chat room"
  }, {
    id: "chat-room-features",
    content: "Chat room features"
  }, {
    id: "create-a-chat-room",
    content: "Create a chat room"
  }, {
    id: "join-and-leave-a-chat-room",
    content: "Join and leave a chat room"
  }, {
    id: "disband-a-chat-room",
    content: "Disband a chat room"
  }, {
    id: "retrieve-the-chat-room-list",
    content: "Retrieve the chat room list"
  }, {
    id: "retrieve-the-chat-room-attributes",
    content: "Retrieve the chat room attributes"
  }, {
    id: "modify-the-chat-room-name",
    content: "Modify the chat room name"
  }, {
    id: "modify-the-chat-room-announcement",
    content: "Modify the chat room announcement"
  }, {
    id: "transfer-the-chat-room-ownership",
    content: "Transfer the chat room ownership"
  }, {
    id: "add-and-remove-the-chat-room-admin",
    content: "Add and remove the chat room admin"
  }, {
    id: "mute-the-specified-chat-room-member",
    content: "Mute the specified chat room member"
  }, {
    id: "mute-all-the-chat-room-members",
    content: "Mute all the chat room members"
  }, {
    id: "manage-the-chat-room-allow-list",
    content: "Manage the chat room allow list"
  }, {
    id: "manage-the-chat-room-blocklist",
    content: "Manage the chat room blocklist"
  }, {
    id: "limitations-of-chat-room",
    content: "Limitations of chat room"
  }]
};
export let toc = [{
  depth: 2,
  url: "#chat-room-roles-and-privileges",
  title: _jsx(_Fragment, {
    children: "Chat room roles and privileges"
  })
}, {
  depth: 2,
  url: "#differences-between-chat-group-and-chat-room",
  title: _jsx(_Fragment, {
    children: "Differences between chat group and chat room"
  })
}, {
  depth: 2,
  url: "#chat-room-features",
  title: _jsx(_Fragment, {
    children: "Chat room features"
  })
}, {
  depth: 3,
  url: "#create-a-chat-room",
  title: _jsx(_Fragment, {
    children: "Create a chat room"
  })
}, {
  depth: 3,
  url: "#join-and-leave-a-chat-room",
  title: _jsx(_Fragment, {
    children: "Join and leave a chat room"
  })
}, {
  depth: 3,
  url: "#disband-a-chat-room",
  title: _jsx(_Fragment, {
    children: "Disband a chat room"
  })
}, {
  depth: 3,
  url: "#retrieve-the-chat-room-list",
  title: _jsx(_Fragment, {
    children: "Retrieve the chat room list"
  })
}, {
  depth: 3,
  url: "#retrieve-the-chat-room-attributes",
  title: _jsx(_Fragment, {
    children: "Retrieve the chat room attributes"
  })
}, {
  depth: 3,
  url: "#modify-the-chat-room-name",
  title: _jsx(_Fragment, {
    children: "Modify the chat room name"
  })
}, {
  depth: 3,
  url: "#modify-the-chat-room-announcement",
  title: _jsx(_Fragment, {
    children: "Modify the chat room announcement"
  })
}, {
  depth: 3,
  url: "#transfer-the-chat-room-ownership",
  title: _jsx(_Fragment, {
    children: "Transfer the chat room ownership"
  })
}, {
  depth: 3,
  url: "#add-and-remove-the-chat-room-admin",
  title: _jsx(_Fragment, {
    children: "Add and remove the chat room admin"
  })
}, {
  depth: 3,
  url: "#mute-the-specified-chat-room-member",
  title: _jsx(_Fragment, {
    children: "Mute the specified chat room member"
  })
}, {
  depth: 3,
  url: "#mute-all-the-chat-room-members",
  title: _jsx(_Fragment, {
    children: "Mute all the chat room members"
  })
}, {
  depth: 3,
  url: "#manage-the-chat-room-allow-list",
  title: _jsx(_Fragment, {
    children: "Manage the chat room allow list"
  })
}, {
  depth: 3,
  url: "#manage-the-chat-room-blocklist",
  title: _jsx(_Fragment, {
    children: "Manage the chat room blocklist"
  })
}, {
  depth: 2,
  url: "#limitations-of-chat-room",
  title: _jsx(_Fragment, {
    children: "Limitations of chat room"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
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
    children: [_jsxs(_components.p, {
      children: ["Chat rooms enable real-time messaging among multiple users and are widely applied in live broadcast use cases as stream chat in Twitch. Chat rooms do not have a strict membership, and members do not retain any permanent relationship with each other. Once going offline, chat room members cannot receive any messages from the chat room and automatically leave the chat room after 2 minutes (members on the chat room allow list remain in the chat room even if they stay offline for 2 minutes or more). If you want to adjust the time, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "chat-room-roles-and-privileges",
      children: "Chat room roles and privileges"
    }), `
`, _jsx(_components.p, {
      children: "Chat rooms have the following roles and privileges:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Chat room members: Regular members that can send and receive chat room messages."
      }), `
`, _jsx(_components.li, {
        children: "Chat room admins: They are specified by the chat group owner. Apart from sending and receiving chat room messages, they have some administrative privileges. You can add up to 99 admins for each chat room."
      }), `
`, _jsx(_components.li, {
        children: "Chat room owner: The creator of the chat room. Chat room owners have the highest privileges, including specifying the chat room admin, disbanding the chat room, modifying the chat room attributes, and managing other chat room members."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "differences-between-chat-group-and-chat-room",
      children: "Differences between chat group and chat room"
    }), `
`, _jsx(_components.p, {
      children: "Both chat group and chat room support instant messaging among multiple users. The major difference lies in whether mmebers have a stable relationship. Chat group members tend to remain for a long time, whereas chat room members join and leave freely."
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the feature comparisons between a chat group and a chat room:"
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
            children: "Group chat use-cases in Signal and Skype, where all members have a stable relationship."
          }), _jsx(_components.td, {
            children: "Stream chat use-cases in Twitch, where viewers have no relationship with each other. Once a member quits the stream chat channel, this member leaves the chat room."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Maximum number of members"
          }), _jsx(_components.td, {
            children: "5,000"
          }), _jsx(_components.td, {
            children: "20,000 and more"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Message push support"
          }), _jsx(_components.td, {
            children: "Members receive push messages when they go offline."
          }), _jsx(_components.td, {
            children: "Members do not receive push messages when they go offline."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Offline message storage"
          }), _jsx(_components.td, {
            children: "This feature is supported. Agora Chat servers store messages sent to offline group members and sends to them once they go back online. A maximum number of 200 messages across chat groups can be stored per end user."
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
            }), ", in the format of JSON files. Agora Chat currently does not support SDK retrieving message history of a chatroom via client APIs. However, when a user joins a chat room, Agora Chat servers send 10 most recent messages to the client side via the message receiving callback. The number of historical messages sent to the new chat room member can be increased up to 200, without additional charges."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Message reliability"
          }), _jsx(_components.td, {
            children: "Each member receives all the messages in the chat group."
          }), _jsx(_components.td, {
            children: "Members might not see all messages. The SDK discards messages if the chat room message threshold is exceeded. The default threshold is delivering 20 messages per second. You can adjust this threshold according to your needs."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "chat-room-features",
      children: "Chat room features"
    }), `
`, _jsx(_components.p, {
      children: "The Chat SDK supports creating and managing chat rooms, managing chat room members, and modifying chat room attributes."
    }), `
`, _jsx(_components.p, {
      children: "You can implement the following features with the chat room APIs:"
    }), `
`, _jsx(_components.h3, {
      id: "create-a-chat-room",
      children: "Create a chat room"
    }), `
`, _jsxs(_components.p, {
      children: ["Only the ", _jsx(_components.a, {
        href: "..//en/api-reference/api-ref/im/chatroom-management/manage-chatroom-admins#adding-a-chat-room-super-admin",
        children: "chat room super admin"
      }), " can create a chat room, and the user that creates the chat room becomes the chat room owner. The maximum number of chat room member supported vary according to the pricing plan. For details, see ", _jsx(_components.a, {
        href: "#limitations",
        children: "Limitations of chat room"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "join-and-leave-a-chat-room",
      children: "Join and leave a chat room"
    }), `
`, _jsx(_components.p, {
      children: "All the chat users can join and leave the chat rooms freely."
    }), `
`, _jsx(_components.h3, {
      id: "disband-a-chat-room",
      children: "Disband a chat room"
    }), `
`, _jsx(_components.p, {
      children: "Only the chat room owner can disband the chat room."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-the-chat-room-list",
      children: "Retrieve the chat room list"
    }), `
`, _jsx(_components.p, {
      children: "All the chat users can retrieve the chat room list from the server with pagination."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-the-chat-room-attributes",
      children: "Retrieve the chat room attributes"
    }), `
`, _jsx(_components.p, {
      children: "All the chat room members can retrieve the chat room attributes including the chat room name and descriptions."
    }), `
`, _jsx(_components.h3, {
      id: "modify-the-chat-room-name",
      children: "Modify the chat room name"
    }), `
`, _jsx(_components.p, {
      children: "Only the chat room owner has the privilege to modify the chat room name."
    }), `
`, _jsx(_components.h3, {
      id: "modify-the-chat-room-announcement",
      children: "Modify the chat room announcement"
    }), `
`, _jsx(_components.p, {
      children: "Only the chat room owner has the privilege to edit and delete the chat room announcement. Once the notification is updated, all the chat room members are informed of this update by callback events."
    }), `
`, _jsx(_components.h3, {
      id: "transfer-the-chat-room-ownership",
      children: "Transfer the chat room ownership"
    }), `
`, _jsx(_components.p, {
      children: "The chat room owner can transfer the ownership to the specified chat room member."
    }), `
`, _jsx(_components.h3, {
      id: "add-and-remove-the-chat-room-admin",
      children: "Add and remove the chat room admin"
    }), `
`, _jsx(_components.p, {
      children: "The chat room owner can add and remove the chat room admin."
    }), `
`, _jsx(_components.h3, {
      id: "mute-the-specified-chat-room-member",
      children: "Mute the specified chat room member"
    }), `
`, _jsx(_components.p, {
      children: "The chat room owner or admin can mute the specified chat room member."
    }), `
`, _jsx(_components.h3, {
      id: "mute-all-the-chat-room-members",
      children: "Mute all the chat room members"
    }), `
`, _jsx(_components.p, {
      children: "The chat room owner or admin can mute all the chat room members. By default, the chat room owner and admin are excluded from the chat room mute list."
    }), `
`, _jsx(_components.h3, {
      id: "manage-the-chat-room-allow-list",
      children: "Manage the chat room allow list"
    }), `
`, _jsx(_components.p, {
      children: "The chat room owner or admin can add the specified members to the chat room allow list, and remove them from the list. Once added to the chat room allow list, the members can send messages to the chat room even when the chat room owner or admin has muted all the chat room members."
    }), `
`, _jsx(_components.h3, {
      id: "manage-the-chat-room-blocklist",
      children: "Manage the chat room blocklist"
    }), `
`, _jsx(_components.p, {
      children: "The chat room owner or admin can add the specified members to the chat room blocklist, and remove them from the list. Once added to the chat room blocklist, the members cannot send or receive chat group messages, nor can they join the chat room again."
    }), `
`, _jsx(_components.h2, {
      id: "limitations-of-chat-room",
      children: "Limitations of chat room"
    }), `
`, _jsx(_components.p, {
      children: "The maximum number of chat room members, the total number of chat rooms you can create, and the maximum number of chat rooms a user can join vary according to your pricing plan."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Pricing plan"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Number of chat room members"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Number of chat rooms you can create"
          }), _jsx(_components.th, {
            children: "Number of chat rooms a user can join"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Free"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100"
          }), _jsx(_components.td, {
            children: "100"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Starter"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10,000"
          }), _jsx(_components.td, {
            children: "1,000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Pro"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50,000"
          }), _jsx(_components.td, {
            children: "2,000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Enterprise"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Custom (20,000 by default)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Custom (100,000 by default)"
          }), _jsx(_components.td, {
            children: "Custom (10,000 by default)"
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
