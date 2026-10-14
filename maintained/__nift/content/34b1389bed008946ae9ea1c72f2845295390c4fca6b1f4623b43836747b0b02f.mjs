import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Messages overview",
  description: "Provides overview to the message types and message features supported by the Agora Chat SDK."
};
export let _markdown = `

In real-time messaging apps, messages are transmitted from the message sender to the message receiver. This page provides overview to the message types and message features supported by the Chat SDK.

## Message types [#message-types]

The Chat SDK supports the following types of messages.

### Text messages [#text-messages]

The message content is text, including hyperlinks and emojis. The maximum data length of a text message is 5 KB.

### Image messages [#image-messages]

Image messages are essentially attachment messages. To send an image message, you need to upload the image to the chat server. When the recipient receives the message, the SDK automatically downloads the image thumbnail. The image cannot exceed 10 MB and the maximum data length of an image message is 5 KB.

### Voice messages [#voice-messages]

Voice messages are essentially attachment messages. To send a voice message, you need to upload the audio file to the chat server. When the recipient receives a voice message, the SDK automatically downloads the audio file. The voice file cannot exceed 10 MB and the maximum data length of a voice message is 5 KB.

### Video messages [#video-messages]

Video messages are essentially attachment messages. To send a video message, you need to upload the video file to the chat server. When the recipient receives a video message, the SDK automatically downloads the video file thumbnail. To download the video file, the user needs to tap the thumbnail. The video file cannot exceed 10 MB and the maximum data length of a video message is 5 KB.

### File messages [#file-messages]

File messages are essentially attachment messages. To send a file message, you need to upload the file to the chat server. When the recipient receives a file message, the SDK automatically downloads the file. The attachment cannot exceed 10 MB and the maximum data length of a file message is 5 KB.

### Location messages [#location-messages]

To send location messages, you need to use a third-party map service provider to get the longitude and latitude information of the location. When the recipient receives a location message, the SDK displays the location in the third-party map service provider according to the longitude and latitude information.

### Command messages [#command-messages]

Command messages tell the recipient to take a certain action. After receiving a command message, the recipients deal with the command themselves. You do not need to render command messages on the user interface. You can use command messages to update the avatar and nickname and synchronize this update. Command messages are not stored in the local database. The maximum data length of a command message is 3 KB.

### Extended messages [#extended-messages]

In cases where text, attachment, and location messages do not meet your business requirement, you can use extended messages. One typical use case is sending messages that quote an earlier text or image message. The data length of an extended message must not exceed that of the original message type.

### Custom messages [#custom-messages]

This is a self-defined message type. You can customize multiple message types and add a name to each type. Typical use cases are red-packet messages and template messages. The maximum data length of a custom message is 5 KB.

## Message features [#message-features]

The Chat SDK supports sending and receiving messages, managing historical messages, and managing message read receipts.

You can implement the following features with the chat APIs.

### Send and receive messages [#send-and-receive-messages]

All chat users can send and receive messages.

* In one-to-one chats, two users send messages to each other.
* In group chats, group members send and receive messages in the group.
* In chat rooms, members send and receive messages in the chat room.

In the use-cases above, the messages between the two users, in each group, and in each chat room are also known as a conversation.

### Retrieve all local conversations [#retrieve-all-local-conversations]

The Chat SDK stores the messages that have been sent and received in the local database. You can manage these messages by retrieving all the conversations on the local device.

### Retrieve the specified conversation [#retrieve-the-specified-conversation]

You can retrieve the messages of the specified conversation. When a user enters the conversation, this user reads all the messages in this conversation.

### Retrieve the number of unread messages [#retrieve-the-number-of-unread-messages]

Since messages are stored with the read status, you can also retrieve the number of the unread messages in each conversation.

### Set all messages read [#set-all-messages-read]

Once you read all the messages, the number of the unread messages are cleared. You can also clear the number of unread messages of the specified conversation or all the conversations.

### Delete conversation and historical messages [#delete-conversation-and-historical-messages]

You can delete the conversations on the local device, and while doing so, you can choose whether to clear the chat history or not.

### Search for messages with keywords [#search-for-messages-with-keywords]

You can search for a message in a conversation using keywords.

### Import messages to the database [#import-messages-to-the-database]

You can import messages from third-party apps into the local database.

### Insert messages [#insert-messages]

You can insert a message to the conversation. This can be applied to use cases such as receiving a notification message.

### Retrieve conversations from the server [#retrieve-conversations-from-the-server]

Apart from the local device, you can also retrieve conversations from the server.

### Retrieve historical messages of the specified conversation [#retrieve-historical-messages-of-the-specified-conversation]

The Chat SDK stores historical messages in the chat server, and you can retrieve historical messages in each conversation from the server with pagination. The time duration for storing historical messages varies according to your pricing plan. See [Limitations of message storage duration](#limitations).

### Message resending mechanism [#message-resending-mechanism]

* For Android, iOS, Unity, React Native, and Flutter, the message resending mechanism is as follows:

  After the client calls the method of sending a message, it will wait for the server to return a response. The response timeout period is 10 seconds. If the sending fails due to a response timeout, the client will try to send the message again by reconnecting to the server through a persistent connection to send the message. If the sending fails again, the SDK considers the sending of the message failed, and returns error code 300 (\`SERVER_NOT_REACHABLE\` for Android, Unity, and Windows and \`EMErrorServerNotReachable\` for iOS), indicating that the server is unreachable.

* For Web, the message resending mechanism is as follows:

  When sending a message, if the WebSocket is disconnected and is reconnecting to the server, the message will be resent after reconnection; if the WebSocket is disconnected during message sending, the SDK will display error code 510 and the error message \`MESSAGE_WEBSOCKET_DISCONNECTED \`, indicating that the network disconnection caused the message sending failure.

### Message delivery receipt [#message-delivery-receipt]

The SDK supports sending a message delivery receipt when the message is successfully sent.

### Message read receipt [#message-read-receipt]

In one-to-one chats and group chats, the SDK supports sending a message read receipt when the message receiver has read the message.

## Limitations of message storage duration [#limitations-of-message-storage-duration]

The storage duration for historical messages varies according to your pricing plans:

| Chat plan      | Message storage duration (days) |
| -------------- | ------------------------------- |
| **Free**       | 7 days                          |
| **Starter**    | 90 days                         |
| **Pro**        | 180 days                        |
| **Enterprise** | Custom (180 days by default)    |

<CalloutContainer type="info">
  <CalloutDescription>
    Message attachments like images, voices, videos, and other files can be stored on the server for seven days by default. To raise the limit, you can contact [support@agora.io](mailto\\:support@agora.io).
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In real-time messaging apps, messages are transmitted from the message sender to the message receiver. This page provides overview to the message types and message features supported by the Chat SDK."
  }, {
    heading: "message-types",
    content: "The Chat SDK supports the following types of messages."
  }, {
    heading: "text-messages",
    content: "The message content is text, including hyperlinks and emojis. The maximum data length of a text message is 5 KB."
  }, {
    heading: "image-messages",
    content: "Image messages are essentially attachment messages. To send an image message, you need to upload the image to the chat server. When the recipient receives the message, the SDK automatically downloads the image thumbnail. The image cannot exceed 10 MB and the maximum data length of an image message is 5 KB."
  }, {
    heading: "voice-messages",
    content: "Voice messages are essentially attachment messages. To send a voice message, you need to upload the audio file to the chat server. When the recipient receives a voice message, the SDK automatically downloads the audio file. The voice file cannot exceed 10 MB and the maximum data length of a voice message is 5 KB."
  }, {
    heading: "video-messages",
    content: "Video messages are essentially attachment messages. To send a video message, you need to upload the video file to the chat server. When the recipient receives a video message, the SDK automatically downloads the video file thumbnail. To download the video file, the user needs to tap the thumbnail. The video file cannot exceed 10 MB and the maximum data length of a video message is 5 KB."
  }, {
    heading: "file-messages",
    content: "File messages are essentially attachment messages. To send a file message, you need to upload the file to the chat server. When the recipient receives a file message, the SDK automatically downloads the file. The attachment cannot exceed 10 MB and the maximum data length of a file message is 5 KB."
  }, {
    heading: "location-messages",
    content: "To send location messages, you need to use a third-party map service provider to get the longitude and latitude information of the location. When the recipient receives a location message, the SDK displays the location in the third-party map service provider according to the longitude and latitude information."
  }, {
    heading: "command-messages",
    content: "Command messages tell the recipient to take a certain action. After receiving a command message, the recipients deal with the command themselves. You do not need to render command messages on the user interface. You can use command messages to update the avatar and nickname and synchronize this update. Command messages are not stored in the local database. The maximum data length of a command message is 3 KB."
  }, {
    heading: "extended-messages",
    content: "In cases where text, attachment, and location messages do not meet your business requirement, you can use extended messages. One typical use case is sending messages that quote an earlier text or image message. The data length of an extended message must not exceed that of the original message type."
  }, {
    heading: "custom-messages",
    content: "This is a self-defined message type. You can customize multiple message types and add a name to each type. Typical use cases are red-packet messages and template messages. The maximum data length of a custom message is 5 KB."
  }, {
    heading: "message-features",
    content: "The Chat SDK supports sending and receiving messages, managing historical messages, and managing message read receipts."
  }, {
    heading: "message-features",
    content: "You can implement the following features with the chat APIs."
  }, {
    heading: "send-and-receive-messages",
    content: "All chat users can send and receive messages."
  }, {
    heading: "send-and-receive-messages",
    content: "In one-to-one chats, two users send messages to each other."
  }, {
    heading: "send-and-receive-messages",
    content: "In group chats, group members send and receive messages in the group."
  }, {
    heading: "send-and-receive-messages",
    content: "In chat rooms, members send and receive messages in the chat room."
  }, {
    heading: "send-and-receive-messages",
    content: "In the use-cases above, the messages between the two users, in each group, and in each chat room are also known as a conversation."
  }, {
    heading: "retrieve-all-local-conversations",
    content: "The Chat SDK stores the messages that have been sent and received in the local database. You can manage these messages by retrieving all the conversations on the local device."
  }, {
    heading: "retrieve-the-specified-conversation",
    content: "You can retrieve the messages of the specified conversation. When a user enters the conversation, this user reads all the messages in this conversation."
  }, {
    heading: "retrieve-the-number-of-unread-messages",
    content: "Since messages are stored with the read status, you can also retrieve the number of the unread messages in each conversation."
  }, {
    heading: "set-all-messages-read",
    content: "Once you read all the messages, the number of the unread messages are cleared. You can also clear the number of unread messages of the specified conversation or all the conversations."
  }, {
    heading: "delete-conversation-and-historical-messages",
    content: "You can delete the conversations on the local device, and while doing so, you can choose whether to clear the chat history or not."
  }, {
    heading: "search-for-messages-with-keywords",
    content: "You can search for a message in a conversation using keywords."
  }, {
    heading: "import-messages-to-the-database",
    content: "You can import messages from third-party apps into the local database."
  }, {
    heading: "insert-messages",
    content: "You can insert a message to the conversation. This can be applied to use cases such as receiving a notification message."
  }, {
    heading: "retrieve-conversations-from-the-server",
    content: "Apart from the local device, you can also retrieve conversations from the server."
  }, {
    heading: "retrieve-historical-messages-of-the-specified-conversation",
    content: "The Chat SDK stores historical messages in the chat server, and you can retrieve historical messages in each conversation from the server with pagination. The time duration for storing historical messages varies according to your pricing plan. See Limitations of message storage duration."
  }, {
    heading: "message-resending-mechanism",
    content: "For Android, iOS, Unity, React Native, and Flutter, the message resending mechanism is as follows:"
  }, {
    heading: "message-resending-mechanism",
    content: "After the client calls the method of sending a message, it will wait for the server to return a response. The response timeout period is 10 seconds. If the sending fails due to a response timeout, the client will try to send the message again by reconnecting to the server through a persistent connection to send the message. If the sending fails again, the SDK considers the sending of the message failed, and returns error code 300 (`SERVER_NOT_REACHABLE` for Android, Unity, and Windows and `EMErrorServerNotReachable` for iOS), indicating that the server is unreachable."
  }, {
    heading: "message-resending-mechanism",
    content: "For Web, the message resending mechanism is as follows:"
  }, {
    heading: "message-resending-mechanism",
    content: "When sending a message, if the WebSocket is disconnected and is reconnecting to the server, the message will be resent after reconnection; if the WebSocket is disconnected during message sending, the SDK will display error code 510 and the error message `MESSAGE_WEBSOCKET_DISCONNECTED `, indicating that the network disconnection caused the message sending failure."
  }, {
    heading: "message-delivery-receipt",
    content: "The SDK supports sending a message delivery receipt when the message is successfully sent."
  }, {
    heading: "message-read-receipt",
    content: "In one-to-one chats and group chats, the SDK supports sending a message read receipt when the message receiver has read the message."
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "The storage duration for historical messages varies according to your pricing plans:"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "Chat plan"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "Message storage duration (days)"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "**Free**"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "7 days"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "**Starter**"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "90 days"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "**Pro**"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "180 days"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "**Enterprise**"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "Custom (180 days by default)"
  }, {
    heading: "limitations-of-message-storage-duration",
    content: "Message attachments like images, voices, videos, and other files can be stored on the server for seven days by default. To raise the limit, you can contact support\\@agora.io."
  }],
  headings: [{
    id: "message-types",
    content: "Message types"
  }, {
    id: "text-messages",
    content: "Text messages"
  }, {
    id: "image-messages",
    content: "Image messages"
  }, {
    id: "voice-messages",
    content: "Voice messages"
  }, {
    id: "video-messages",
    content: "Video messages"
  }, {
    id: "file-messages",
    content: "File messages"
  }, {
    id: "location-messages",
    content: "Location messages"
  }, {
    id: "command-messages",
    content: "Command messages"
  }, {
    id: "extended-messages",
    content: "Extended messages"
  }, {
    id: "custom-messages",
    content: "Custom messages"
  }, {
    id: "message-features",
    content: "Message features"
  }, {
    id: "send-and-receive-messages",
    content: "Send and receive messages"
  }, {
    id: "retrieve-all-local-conversations",
    content: "Retrieve all local conversations"
  }, {
    id: "retrieve-the-specified-conversation",
    content: "Retrieve the specified conversation"
  }, {
    id: "retrieve-the-number-of-unread-messages",
    content: "Retrieve the number of unread messages"
  }, {
    id: "set-all-messages-read",
    content: "Set all messages read"
  }, {
    id: "delete-conversation-and-historical-messages",
    content: "Delete conversation and historical messages"
  }, {
    id: "search-for-messages-with-keywords",
    content: "Search for messages with keywords"
  }, {
    id: "import-messages-to-the-database",
    content: "Import messages to the database"
  }, {
    id: "insert-messages",
    content: "Insert messages"
  }, {
    id: "retrieve-conversations-from-the-server",
    content: "Retrieve conversations from the server"
  }, {
    id: "retrieve-historical-messages-of-the-specified-conversation",
    content: "Retrieve historical messages of the specified conversation"
  }, {
    id: "message-resending-mechanism",
    content: "Message resending mechanism"
  }, {
    id: "message-delivery-receipt",
    content: "Message delivery receipt"
  }, {
    id: "message-read-receipt",
    content: "Message read receipt"
  }, {
    id: "limitations-of-message-storage-duration",
    content: "Limitations of message storage duration"
  }]
};
export let toc = [{
  depth: 2,
  url: "#message-types",
  title: _jsx(_Fragment, {
    children: "Message types"
  })
}, {
  depth: 3,
  url: "#text-messages",
  title: _jsx(_Fragment, {
    children: "Text messages"
  })
}, {
  depth: 3,
  url: "#image-messages",
  title: _jsx(_Fragment, {
    children: "Image messages"
  })
}, {
  depth: 3,
  url: "#voice-messages",
  title: _jsx(_Fragment, {
    children: "Voice messages"
  })
}, {
  depth: 3,
  url: "#video-messages",
  title: _jsx(_Fragment, {
    children: "Video messages"
  })
}, {
  depth: 3,
  url: "#file-messages",
  title: _jsx(_Fragment, {
    children: "File messages"
  })
}, {
  depth: 3,
  url: "#location-messages",
  title: _jsx(_Fragment, {
    children: "Location messages"
  })
}, {
  depth: 3,
  url: "#command-messages",
  title: _jsx(_Fragment, {
    children: "Command messages"
  })
}, {
  depth: 3,
  url: "#extended-messages",
  title: _jsx(_Fragment, {
    children: "Extended messages"
  })
}, {
  depth: 3,
  url: "#custom-messages",
  title: _jsx(_Fragment, {
    children: "Custom messages"
  })
}, {
  depth: 2,
  url: "#message-features",
  title: _jsx(_Fragment, {
    children: "Message features"
  })
}, {
  depth: 3,
  url: "#send-and-receive-messages",
  title: _jsx(_Fragment, {
    children: "Send and receive messages"
  })
}, {
  depth: 3,
  url: "#retrieve-all-local-conversations",
  title: _jsx(_Fragment, {
    children: "Retrieve all local conversations"
  })
}, {
  depth: 3,
  url: "#retrieve-the-specified-conversation",
  title: _jsx(_Fragment, {
    children: "Retrieve the specified conversation"
  })
}, {
  depth: 3,
  url: "#retrieve-the-number-of-unread-messages",
  title: _jsx(_Fragment, {
    children: "Retrieve the number of unread messages"
  })
}, {
  depth: 3,
  url: "#set-all-messages-read",
  title: _jsx(_Fragment, {
    children: "Set all messages read"
  })
}, {
  depth: 3,
  url: "#delete-conversation-and-historical-messages",
  title: _jsx(_Fragment, {
    children: "Delete conversation and historical messages"
  })
}, {
  depth: 3,
  url: "#search-for-messages-with-keywords",
  title: _jsx(_Fragment, {
    children: "Search for messages with keywords"
  })
}, {
  depth: 3,
  url: "#import-messages-to-the-database",
  title: _jsx(_Fragment, {
    children: "Import messages to the database"
  })
}, {
  depth: 3,
  url: "#insert-messages",
  title: _jsx(_Fragment, {
    children: "Insert messages"
  })
}, {
  depth: 3,
  url: "#retrieve-conversations-from-the-server",
  title: _jsx(_Fragment, {
    children: "Retrieve conversations from the server"
  })
}, {
  depth: 3,
  url: "#retrieve-historical-messages-of-the-specified-conversation",
  title: _jsx(_Fragment, {
    children: "Retrieve historical messages of the specified conversation"
  })
}, {
  depth: 3,
  url: "#message-resending-mechanism",
  title: _jsx(_Fragment, {
    children: "Message resending mechanism"
  })
}, {
  depth: 3,
  url: "#message-delivery-receipt",
  title: _jsx(_Fragment, {
    children: "Message delivery receipt"
  })
}, {
  depth: 3,
  url: "#message-read-receipt",
  title: _jsx(_Fragment, {
    children: "Message read receipt"
  })
}, {
  depth: 2,
  url: "#limitations-of-message-storage-duration",
  title: _jsx(_Fragment, {
    children: "Limitations of message storage duration"
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
    strong: "strong",
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
      children: "In real-time messaging apps, messages are transmitted from the message sender to the message receiver. This page provides overview to the message types and message features supported by the Chat SDK."
    }), `
`, _jsx(_components.h2, {
      id: "message-types",
      children: "Message types"
    }), `
`, _jsx(_components.p, {
      children: "The Chat SDK supports the following types of messages."
    }), `
`, _jsx(_components.h3, {
      id: "text-messages",
      children: "Text messages"
    }), `
`, _jsx(_components.p, {
      children: "The message content is text, including hyperlinks and emojis. The maximum data length of a text message is 5 KB."
    }), `
`, _jsx(_components.h3, {
      id: "image-messages",
      children: "Image messages"
    }), `
`, _jsx(_components.p, {
      children: "Image messages are essentially attachment messages. To send an image message, you need to upload the image to the chat server. When the recipient receives the message, the SDK automatically downloads the image thumbnail. The image cannot exceed 10 MB and the maximum data length of an image message is 5 KB."
    }), `
`, _jsx(_components.h3, {
      id: "voice-messages",
      children: "Voice messages"
    }), `
`, _jsx(_components.p, {
      children: "Voice messages are essentially attachment messages. To send a voice message, you need to upload the audio file to the chat server. When the recipient receives a voice message, the SDK automatically downloads the audio file. The voice file cannot exceed 10 MB and the maximum data length of a voice message is 5 KB."
    }), `
`, _jsx(_components.h3, {
      id: "video-messages",
      children: "Video messages"
    }), `
`, _jsx(_components.p, {
      children: "Video messages are essentially attachment messages. To send a video message, you need to upload the video file to the chat server. When the recipient receives a video message, the SDK automatically downloads the video file thumbnail. To download the video file, the user needs to tap the thumbnail. The video file cannot exceed 10 MB and the maximum data length of a video message is 5 KB."
    }), `
`, _jsx(_components.h3, {
      id: "file-messages",
      children: "File messages"
    }), `
`, _jsx(_components.p, {
      children: "File messages are essentially attachment messages. To send a file message, you need to upload the file to the chat server. When the recipient receives a file message, the SDK automatically downloads the file. The attachment cannot exceed 10 MB and the maximum data length of a file message is 5 KB."
    }), `
`, _jsx(_components.h3, {
      id: "location-messages",
      children: "Location messages"
    }), `
`, _jsx(_components.p, {
      children: "To send location messages, you need to use a third-party map service provider to get the longitude and latitude information of the location. When the recipient receives a location message, the SDK displays the location in the third-party map service provider according to the longitude and latitude information."
    }), `
`, _jsx(_components.h3, {
      id: "command-messages",
      children: "Command messages"
    }), `
`, _jsx(_components.p, {
      children: "Command messages tell the recipient to take a certain action. After receiving a command message, the recipients deal with the command themselves. You do not need to render command messages on the user interface. You can use command messages to update the avatar and nickname and synchronize this update. Command messages are not stored in the local database. The maximum data length of a command message is 3 KB."
    }), `
`, _jsx(_components.h3, {
      id: "extended-messages",
      children: "Extended messages"
    }), `
`, _jsx(_components.p, {
      children: "In cases where text, attachment, and location messages do not meet your business requirement, you can use extended messages. One typical use case is sending messages that quote an earlier text or image message. The data length of an extended message must not exceed that of the original message type."
    }), `
`, _jsx(_components.h3, {
      id: "custom-messages",
      children: "Custom messages"
    }), `
`, _jsx(_components.p, {
      children: "This is a self-defined message type. You can customize multiple message types and add a name to each type. Typical use cases are red-packet messages and template messages. The maximum data length of a custom message is 5 KB."
    }), `
`, _jsx(_components.h2, {
      id: "message-features",
      children: "Message features"
    }), `
`, _jsx(_components.p, {
      children: "The Chat SDK supports sending and receiving messages, managing historical messages, and managing message read receipts."
    }), `
`, _jsx(_components.p, {
      children: "You can implement the following features with the chat APIs."
    }), `
`, _jsx(_components.h3, {
      id: "send-and-receive-messages",
      children: "Send and receive messages"
    }), `
`, _jsx(_components.p, {
      children: "All chat users can send and receive messages."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "In one-to-one chats, two users send messages to each other."
      }), `
`, _jsx(_components.li, {
        children: "In group chats, group members send and receive messages in the group."
      }), `
`, _jsx(_components.li, {
        children: "In chat rooms, members send and receive messages in the chat room."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In the use-cases above, the messages between the two users, in each group, and in each chat room are also known as a conversation."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-all-local-conversations",
      children: "Retrieve all local conversations"
    }), `
`, _jsx(_components.p, {
      children: "The Chat SDK stores the messages that have been sent and received in the local database. You can manage these messages by retrieving all the conversations on the local device."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-the-specified-conversation",
      children: "Retrieve the specified conversation"
    }), `
`, _jsx(_components.p, {
      children: "You can retrieve the messages of the specified conversation. When a user enters the conversation, this user reads all the messages in this conversation."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-the-number-of-unread-messages",
      children: "Retrieve the number of unread messages"
    }), `
`, _jsx(_components.p, {
      children: "Since messages are stored with the read status, you can also retrieve the number of the unread messages in each conversation."
    }), `
`, _jsx(_components.h3, {
      id: "set-all-messages-read",
      children: "Set all messages read"
    }), `
`, _jsx(_components.p, {
      children: "Once you read all the messages, the number of the unread messages are cleared. You can also clear the number of unread messages of the specified conversation or all the conversations."
    }), `
`, _jsx(_components.h3, {
      id: "delete-conversation-and-historical-messages",
      children: "Delete conversation and historical messages"
    }), `
`, _jsx(_components.p, {
      children: "You can delete the conversations on the local device, and while doing so, you can choose whether to clear the chat history or not."
    }), `
`, _jsx(_components.h3, {
      id: "search-for-messages-with-keywords",
      children: "Search for messages with keywords"
    }), `
`, _jsx(_components.p, {
      children: "You can search for a message in a conversation using keywords."
    }), `
`, _jsx(_components.h3, {
      id: "import-messages-to-the-database",
      children: "Import messages to the database"
    }), `
`, _jsx(_components.p, {
      children: "You can import messages from third-party apps into the local database."
    }), `
`, _jsx(_components.h3, {
      id: "insert-messages",
      children: "Insert messages"
    }), `
`, _jsx(_components.p, {
      children: "You can insert a message to the conversation. This can be applied to use cases such as receiving a notification message."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-conversations-from-the-server",
      children: "Retrieve conversations from the server"
    }), `
`, _jsx(_components.p, {
      children: "Apart from the local device, you can also retrieve conversations from the server."
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-historical-messages-of-the-specified-conversation",
      children: "Retrieve historical messages of the specified conversation"
    }), `
`, _jsxs(_components.p, {
      children: ["The Chat SDK stores historical messages in the chat server, and you can retrieve historical messages in each conversation from the server with pagination. The time duration for storing historical messages varies according to your pricing plan. See ", _jsx(_components.a, {
        href: "#limitations",
        children: "Limitations of message storage duration"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "message-resending-mechanism",
      children: "Message resending mechanism"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "For Android, iOS, Unity, React Native, and Flutter, the message resending mechanism is as follows:"
        }), `
`, _jsxs(_components.p, {
          children: ["After the client calls the method of sending a message, it will wait for the server to return a response. The response timeout period is 10 seconds. If the sending fails due to a response timeout, the client will try to send the message again by reconnecting to the server through a persistent connection to send the message. If the sending fails again, the SDK considers the sending of the message failed, and returns error code 300 (", _jsx(_components.code, {
            children: "SERVER_NOT_REACHABLE"
          }), " for Android, Unity, and Windows and ", _jsx(_components.code, {
            children: "EMErrorServerNotReachable"
          }), " for iOS), indicating that the server is unreachable."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "For Web, the message resending mechanism is as follows:"
        }), `
`, _jsxs(_components.p, {
          children: ["When sending a message, if the WebSocket is disconnected and is reconnecting to the server, the message will be resent after reconnection; if the WebSocket is disconnected during message sending, the SDK will display error code 510 and the error message ", _jsx(_components.code, {
            children: "MESSAGE_WEBSOCKET_DISCONNECTED "
          }), ", indicating that the network disconnection caused the message sending failure."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "message-delivery-receipt",
      children: "Message delivery receipt"
    }), `
`, _jsx(_components.p, {
      children: "The SDK supports sending a message delivery receipt when the message is successfully sent."
    }), `
`, _jsx(_components.h3, {
      id: "message-read-receipt",
      children: "Message read receipt"
    }), `
`, _jsx(_components.p, {
      children: "In one-to-one chats and group chats, the SDK supports sending a message read receipt when the message receiver has read the message."
    }), `
`, _jsx(_components.h2, {
      id: "limitations-of-message-storage-duration",
      children: "Limitations of message storage duration"
    }), `
`, _jsx(_components.p, {
      children: "The storage duration for historical messages varies according to your pricing plans:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Chat plan"
          }), _jsx(_components.th, {
            children: "Message storage duration (days)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Free"
            })
          }), _jsx(_components.td, {
            children: "7 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Starter"
            })
          }), _jsx(_components.td, {
            children: "90 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Pro"
            })
          }), _jsx(_components.td, {
            children: "180 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Enterprise"
            })
          }), _jsx(_components.td, {
            children: "Custom (180 days by default)"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Message attachments like images, voices, videos, and other files can be stored on the server for seven days by default. To raise the limit, you can contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), "."]
        })
      })
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
