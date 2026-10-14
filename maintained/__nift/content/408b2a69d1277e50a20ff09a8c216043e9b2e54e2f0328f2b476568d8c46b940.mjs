import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Limitations",
  description: "Explains how your bill for using Agora Chat is calculated."
};
export let _markdown = `

This page introduces the usage limits of Chat, including limits to the user, the message, the group, the chatroom and the call limit of the server APIs.

### User attributes [#user-attributes]

The user attributes [UserInfo](https://hyphenateinc.github.io/android_reference/classio_1_1agora_1_1chat_1_1_user_info.html) include the user avatar, nickname, email address, and so on. The total length of the user information for one user must be 2 KB or less, and the total length for all users under an app must be within 10 GB or less.

### Message length [#message-length]

The length limits of the different types of messages are as follows:

| **Message type**                 | **Length limit**                                                               | **Related API**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Text message                     | 5 KB                                                                           | [createTxtSendMessage](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#af6312e5ea0ca70b36d22c5e0bdfc288f)                                                                                                                                                                                                                                                                                                                                              |
| Image message                    | 10 MB (default) to 200 MB. Set via [Agora Console](https://console.agora.io/). | [createImageSendMessage\\[1/2\\]](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#af8d0cd1cfc67aa8deb50386ff4dac2cd)[createImageSendMessage\\[2/2\\]](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a1207ebdd9c5ee4abd78ca1e49de6c7e1)                                                                                                                                                                   |
| Voice message                    | 10 MB (default) to 200 MB. Set via [Agora Console](https://console.agora.io/). | [createVoiceSendMessage\\[1/2\\]](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#afff9282db0b4fe2086a7afc70dc092f8)[createVoiceSendMessage\\[2/2\\]](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a5935e8c3e8ed4069b01ca38b1f1a6ab9)                                                                                                                                                                   |
| Video message                    | 10 MB (default) to 200 MB. Set via [Agora Console](https://console.agora.io/). | [createVideoSendMessage\\[1/3\\]](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#ac78142ff1dfe3fa07d63027978a9ef84)[createVideoSendMessage\\[2/3\\]](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a487c212c323a110d1d5ca6406903e11f)[createVideoSendMessage\\[3/3\\]](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#aae1215a31dad2f68bcad9a321defe3fd) |
| File message                     | 10 MB (default) to 200 MB. Set via [Agora Console](https://console.agora.io/). | [createFileSendMessage\\[1/2\\]](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a7b0d8a9c7edb6a7ed02a02a9d67d65f7)[createFileSendMessage\\[2/2\\]](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#acbab1df477a2b8a5aaf7053e27fc9232)                                                                                                                                                                     |
| Transparent transmission message | 5 KB                                                                           | [createSendMessage](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a1c26e1f6420a89921bae7eb9ea362506)                                                                                                                                                                                                                                                                                                                                                 |
| Customized extended message      | The size of the extended message must not exceed that of the original message. | [createSendMessage](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a1c26e1f6420a89921bae7eb9ea362506)                                                                                                                                                                                                                                                                                                                                                 |
| Customized message               | 5 KB                                                                           | [createSendMessage](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a1c26e1f6420a89921bae7eb9ea362506)                                                                                                                                                                                                                                                                                                                                                 |

Starting from v1.3, you can slice an image, voice, video, and file message into chunks and upload them in sequence.

<CalloutContainer type="info">
  <CalloutDescription>
    Note that exceeding the free quota for file storage or download traffic in your package will lead to an overage charge. See Agora Console for pricing details.
  </CalloutDescription>
</CalloutContainer>

### Group-related limitations [#group-related-limitations]

**Group attributes**

When a group [createGroup](https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_group_manager.html#a57cfa23aae3b00d282b75023fc43899c) is created, the length limits of the group information are as follows:

* Group name: 128 characters or less

* Group description: 512 characters or less

* Group extension information: 1024 characters or less

**Group member attributes**

* Key: Of string type, 16 bytes or less, only supports English uppercase and lowercase letters, numbers, and underscores

* Value: 512 bytes or less

* The total size of key-value pairs of a group member: 4KB or less

### Chatroom-related limitations [#chatroom-related-limitations]

**PCU per chatroom**

The limit of Peak Concurrent Users per chatroom is 10,000. To extend this limit, contact [support@agora.io](mailto\\:support@agora.io).

**Chatroom attributes**

When a chatroom [createChatRoom](https://hyphenateinc.github.io/android_reference/classio_1_1agora_1_1chat_1_1_chat_room_manager.html#a6ea3f7131041f844e710f00996091cab) is created, the length limits of the chatroom information are as follows:

* Chatroom name: 128 characters or less

* Chatroom description: 512 characters or less

Each chatroom can have up to 100 custom attributes, and the total size of custom attributes of each app cannot exceed 10 GB. The custom attributes are of a key-value pair structure. A single key cannot exceed 128 characters and a room attribute value cannot exceed 4096 characters. Attribute keys support the following character sets:

* 26 lowercase English letters a-z;
* 26 uppercase English letters A-Z;
* 10 numbers 0-9;
* "\\_", "-", ".".

### Multiple messages forwarding limitations [#multiple-messages-forwarding-limitations]

* The forwarding multiple messages capability is available only in client APIs and not RESTful APIs.
* End users can only forward up to 300 messages at a time.
* The content of the forwarded messages can't be searched.
* When forwarding multiple messages in a combined form, the title and preview of the combined message is displayed. The content of the message preview can't exceed 5KB.
* Applications developed with Chat SDK versions prior to \`1.2.x\` will not support display of forwarded messages.

### Sent message modification limitations [#sent-message-modification-limitations]

This feature has the following limitations:

* For a group, regular group members can only edit messages sent by themselves, but the group owner and admins can also edit messages sent by regular group members. The message sender remains unchanged regardless of the message edit operator.
* Supported message types: text only.
* Supported use case: One-on-one chat. Chatroom is not supported.
* End users can recall and modify messages that were sent up to 7 days ago.
* Agora supports editing the same message up to 10 times.

### Storage limitations [#storage-limitations]

* The Agora Chat server stores up to 100 conversations per end user.

### RESTful API Call limit of server-side [#restful-api-call-limit-of-server-side]

The RESTful API call frequency limit of each method varies. For details about each method, see [**Chat RESTful API Reference**](/en/api-reference/api-ref/im).

If the provided call frequency limit cannot meet your business requirements, contact [support@agora.io](mailto\\:support@agora.io).

### Presence limitations [#presence-limitations]

The presence status of each user can be subscribed by up to 3000 users.

### Contact limitations [#contact-limitations]

Each user can have a block list that can contain a maximum of 500 users.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page introduces the usage limits of Chat, including limits to the user, the message, the group, the chatroom and the call limit of the server APIs."
  }, {
    heading: "user-attributes",
    content: "The user attributes UserInfo include the user avatar, nickname, email address, and so on. The total length of the user information for one user must be 2 KB or less, and the total length for all users under an app must be within 10 GB or less."
  }, {
    heading: "message-length",
    content: "The length limits of the different types of messages are as follows:"
  }, {
    heading: "message-length",
    content: "**Message type**"
  }, {
    heading: "message-length",
    content: "**Length limit**"
  }, {
    heading: "message-length",
    content: "**Related API**"
  }, {
    heading: "message-length",
    content: "Text message"
  }, {
    heading: "message-length",
    content: "5 KB"
  }, {
    heading: "message-length",
    content: "createTxtSendMessage"
  }, {
    heading: "message-length",
    content: "Image message"
  }, {
    heading: "message-length",
    content: "10 MB (default) to 200 MB. Set via Agora Console."
  }, {
    heading: "message-length",
    content: "createImageSendMessage\\[1/2]createImageSendMessage\\[2/2]"
  }, {
    heading: "message-length",
    content: "Voice message"
  }, {
    heading: "message-length",
    content: "10 MB (default) to 200 MB. Set via Agora Console."
  }, {
    heading: "message-length",
    content: "createVoiceSendMessage\\[1/2]createVoiceSendMessage\\[2/2]"
  }, {
    heading: "message-length",
    content: "Video message"
  }, {
    heading: "message-length",
    content: "10 MB (default) to 200 MB. Set via Agora Console."
  }, {
    heading: "message-length",
    content: "createVideoSendMessage\\[1/3]createVideoSendMessage\\[2/3]createVideoSendMessage\\[3/3]"
  }, {
    heading: "message-length",
    content: "File message"
  }, {
    heading: "message-length",
    content: "10 MB (default) to 200 MB. Set via Agora Console."
  }, {
    heading: "message-length",
    content: "createFileSendMessage\\[1/2]createFileSendMessage\\[2/2]"
  }, {
    heading: "message-length",
    content: "Transparent transmission message"
  }, {
    heading: "message-length",
    content: "5 KB"
  }, {
    heading: "message-length",
    content: "createSendMessage"
  }, {
    heading: "message-length",
    content: "Customized extended message"
  }, {
    heading: "message-length",
    content: "The size of the extended message must not exceed that of the original message."
  }, {
    heading: "message-length",
    content: "createSendMessage"
  }, {
    heading: "message-length",
    content: "Customized message"
  }, {
    heading: "message-length",
    content: "5 KB"
  }, {
    heading: "message-length",
    content: "createSendMessage"
  }, {
    heading: "message-length",
    content: "Starting from v1.3, you can slice an image, voice, video, and file message into chunks and upload them in sequence."
  }, {
    heading: "message-length",
    content: "Note that exceeding the free quota for file storage or download traffic in your package will lead to an overage charge. See Agora Console for pricing details."
  }, {
    heading: "group-related-limitations",
    content: "**Group attributes**"
  }, {
    heading: "group-related-limitations",
    content: "When a group createGroup is created, the length limits of the group information are as follows:"
  }, {
    heading: "group-related-limitations",
    content: "Group name: 128 characters or less"
  }, {
    heading: "group-related-limitations",
    content: "Group description: 512 characters or less"
  }, {
    heading: "group-related-limitations",
    content: "Group extension information: 1024 characters or less"
  }, {
    heading: "group-related-limitations",
    content: "**Group member attributes**"
  }, {
    heading: "group-related-limitations",
    content: "Key: Of string type, 16 bytes or less, only supports English uppercase and lowercase letters, numbers, and underscores"
  }, {
    heading: "group-related-limitations",
    content: "Value: 512 bytes or less"
  }, {
    heading: "group-related-limitations",
    content: "The total size of key-value pairs of a group member: 4KB or less"
  }, {
    heading: "chatroom-related-limitations",
    content: "**PCU per chatroom**"
  }, {
    heading: "chatroom-related-limitations",
    content: "The limit of Peak Concurrent Users per chatroom is 10,000. To extend this limit, contact support\\@agora.io."
  }, {
    heading: "chatroom-related-limitations",
    content: "**Chatroom attributes**"
  }, {
    heading: "chatroom-related-limitations",
    content: "When a chatroom createChatRoom is created, the length limits of the chatroom information are as follows:"
  }, {
    heading: "chatroom-related-limitations",
    content: "Chatroom name: 128 characters or less"
  }, {
    heading: "chatroom-related-limitations",
    content: "Chatroom description: 512 characters or less"
  }, {
    heading: "chatroom-related-limitations",
    content: "Each chatroom can have up to 100 custom attributes, and the total size of custom attributes of each app cannot exceed 10 GB. The custom attributes are of a key-value pair structure. A single key cannot exceed 128 characters and a room attribute value cannot exceed 4096 characters. Attribute keys support the following character sets:"
  }, {
    heading: "chatroom-related-limitations",
    content: "26 lowercase English letters a-z;"
  }, {
    heading: "chatroom-related-limitations",
    content: "26 uppercase English letters A-Z;"
  }, {
    heading: "chatroom-related-limitations",
    content: "10 numbers 0-9;"
  }, {
    heading: "chatroom-related-limitations",
    content: '"\\_", "-", ".".'
  }, {
    heading: "multiple-messages-forwarding-limitations",
    content: "The forwarding multiple messages capability is available only in client APIs and not RESTful APIs."
  }, {
    heading: "multiple-messages-forwarding-limitations",
    content: "End users can only forward up to 300 messages at a time."
  }, {
    heading: "multiple-messages-forwarding-limitations",
    content: "The content of the forwarded messages can't be searched."
  }, {
    heading: "multiple-messages-forwarding-limitations",
    content: "When forwarding multiple messages in a combined form, the title and preview of the combined message is displayed. The content of the message preview can't exceed 5KB."
  }, {
    heading: "multiple-messages-forwarding-limitations",
    content: "Applications developed with Chat SDK versions prior to `1.2.x` will not support display of forwarded messages."
  }, {
    heading: "sent-message-modification-limitations",
    content: "This feature has the following limitations:"
  }, {
    heading: "sent-message-modification-limitations",
    content: "For a group, regular group members can only edit messages sent by themselves, but the group owner and admins can also edit messages sent by regular group members. The message sender remains unchanged regardless of the message edit operator."
  }, {
    heading: "sent-message-modification-limitations",
    content: "Supported message types: text only."
  }, {
    heading: "sent-message-modification-limitations",
    content: "Supported use case: One-on-one chat. Chatroom is not supported."
  }, {
    heading: "sent-message-modification-limitations",
    content: "End users can recall and modify messages that were sent up to 7 days ago."
  }, {
    heading: "sent-message-modification-limitations",
    content: "Agora supports editing the same message up to 10 times."
  }, {
    heading: "storage-limitations",
    content: "The Agora Chat server stores up to 100 conversations per end user."
  }, {
    heading: "restful-api-call-limit-of-server-side",
    content: "The RESTful API call frequency limit of each method varies. For details about each method, see **Chat RESTful API Reference**."
  }, {
    heading: "restful-api-call-limit-of-server-side",
    content: "If the provided call frequency limit cannot meet your business requirements, contact support\\@agora.io."
  }, {
    heading: "presence-limitations",
    content: "The presence status of each user can be subscribed by up to 3000 users."
  }, {
    heading: "contact-limitations",
    content: "Each user can have a block list that can contain a maximum of 500 users."
  }],
  headings: [{
    id: "user-attributes",
    content: "User attributes"
  }, {
    id: "message-length",
    content: "Message length"
  }, {
    id: "group-related-limitations",
    content: "Group-related limitations"
  }, {
    id: "chatroom-related-limitations",
    content: "Chatroom-related limitations"
  }, {
    id: "multiple-messages-forwarding-limitations",
    content: "Multiple messages forwarding limitations"
  }, {
    id: "sent-message-modification-limitations",
    content: "Sent message modification limitations"
  }, {
    id: "storage-limitations",
    content: "Storage limitations"
  }, {
    id: "restful-api-call-limit-of-server-side",
    content: "RESTful API Call limit of server-side"
  }, {
    id: "presence-limitations",
    content: "Presence limitations"
  }, {
    id: "contact-limitations",
    content: "Contact limitations"
  }]
};
export let toc = [{
  depth: 3,
  url: "#user-attributes",
  title: _jsx(_Fragment, {
    children: "User attributes"
  })
}, {
  depth: 3,
  url: "#message-length",
  title: _jsx(_Fragment, {
    children: "Message length"
  })
}, {
  depth: 3,
  url: "#group-related-limitations",
  title: _jsx(_Fragment, {
    children: "Group-related limitations"
  })
}, {
  depth: 3,
  url: "#chatroom-related-limitations",
  title: _jsx(_Fragment, {
    children: "Chatroom-related limitations"
  })
}, {
  depth: 3,
  url: "#multiple-messages-forwarding-limitations",
  title: _jsx(_Fragment, {
    children: "Multiple messages forwarding limitations"
  })
}, {
  depth: 3,
  url: "#sent-message-modification-limitations",
  title: _jsx(_Fragment, {
    children: "Sent message modification limitations"
  })
}, {
  depth: 3,
  url: "#storage-limitations",
  title: _jsx(_Fragment, {
    children: "Storage limitations"
  })
}, {
  depth: 3,
  url: "#restful-api-call-limit-of-server-side",
  title: _jsx(_Fragment, {
    children: "RESTful API Call limit of server-side"
  })
}, {
  depth: 3,
  url: "#presence-limitations",
  title: _jsx(_Fragment, {
    children: "Presence limitations"
  })
}, {
  depth: 3,
  url: "#contact-limitations",
  title: _jsx(_Fragment, {
    children: "Contact limitations"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
      children: "This page introduces the usage limits of Chat, including limits to the user, the message, the group, the chatroom and the call limit of the server APIs."
    }), `
`, _jsx(_components.h3, {
      id: "user-attributes",
      children: "User attributes"
    }), `
`, _jsxs(_components.p, {
      children: ["The user attributes ", _jsx(_components.a, {
        href: "https://hyphenateinc.github.io/android_reference/classio_1_1agora_1_1chat_1_1_user_info.html",
        children: "UserInfo"
      }), " include the user avatar, nickname, email address, and so on. The total length of the user information for one user must be 2 KB or less, and the total length for all users under an app must be within 10 GB or less."]
    }), `
`, _jsx(_components.h3, {
      id: "message-length",
      children: "Message length"
    }), `
`, _jsx(_components.p, {
      children: "The length limits of the different types of messages are as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.strong, {
              children: "Message type"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.strong, {
              children: "Length limit"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.strong, {
              children: "Related API"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Text message"
          }), _jsx(_components.td, {
            children: "5 KB"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#af6312e5ea0ca70b36d22c5e0bdfc288f",
              children: "createTxtSendMessage"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Image message"
          }), _jsxs(_components.td, {
            children: ["10 MB (default) to 200 MB. Set via ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#af8d0cd1cfc67aa8deb50386ff4dac2cd",
              children: "createImageSendMessage[1/2]"
            }), _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a1207ebdd9c5ee4abd78ca1e49de6c7e1",
              children: "createImageSendMessage[2/2]"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Voice message"
          }), _jsxs(_components.td, {
            children: ["10 MB (default) to 200 MB. Set via ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#afff9282db0b4fe2086a7afc70dc092f8",
              children: "createVoiceSendMessage[1/2]"
            }), _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a5935e8c3e8ed4069b01ca38b1f1a6ab9",
              children: "createVoiceSendMessage[2/2]"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video message"
          }), _jsxs(_components.td, {
            children: ["10 MB (default) to 200 MB. Set via ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#ac78142ff1dfe3fa07d63027978a9ef84",
              children: "createVideoSendMessage[1/3]"
            }), _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a487c212c323a110d1d5ca6406903e11f",
              children: "createVideoSendMessage[2/3]"
            }), _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#aae1215a31dad2f68bcad9a321defe3fd",
              children: "createVideoSendMessage[3/3]"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "File message"
          }), _jsxs(_components.td, {
            children: ["10 MB (default) to 200 MB. Set via ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a7b0d8a9c7edb6a7ed02a02a9d67d65f7",
              children: "createFileSendMessage[1/2]"
            }), _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#acbab1df477a2b8a5aaf7053e27fc9232",
              children: "createFileSendMessage[2/2]"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Transparent transmission message"
          }), _jsx(_components.td, {
            children: "5 KB"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a1c26e1f6420a89921bae7eb9ea362506",
              children: "createSendMessage"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Customized extended message"
          }), _jsx(_components.td, {
            children: "The size of the extended message must not exceed that of the original message."
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a1c26e1f6420a89921bae7eb9ea362506",
              children: "createSendMessage"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Customized message"
          }), _jsx(_components.td, {
            children: "5 KB"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_chat_message.html#a1c26e1f6420a89921bae7eb9ea362506",
              children: "createSendMessage"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Starting from v1.3, you can slice an image, voice, video, and file message into chunks and upload them in sequence."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Note that exceeding the free quota for file storage or download traffic in your package will lead to an overage charge. See Agora Console for pricing details."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "group-related-limitations",
      children: "Group-related limitations"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Group attributes"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["When a group ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/classio_1_1agora_1_1chat_1_1_group_manager.html#a57cfa23aae3b00d282b75023fc43899c",
        children: "createGroup"
      }), " is created, the length limits of the group information are as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Group name: 128 characters or less"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Group description: 512 characters or less"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Group extension information: 1024 characters or less"
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Group member attributes"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Key: Of string type, 16 bytes or less, only supports English uppercase and lowercase letters, numbers, and underscores"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Value: 512 bytes or less"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The total size of key-value pairs of a group member: 4KB or less"
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "chatroom-related-limitations",
      children: "Chatroom-related limitations"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "PCU per chatroom"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The limit of Peak Concurrent Users per chatroom is 10,000. To extend this limit, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Chatroom attributes"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["When a chatroom ", _jsx(_components.a, {
        href: "https://hyphenateinc.github.io/android_reference/classio_1_1agora_1_1chat_1_1_chat_room_manager.html#a6ea3f7131041f844e710f00996091cab",
        children: "createChatRoom"
      }), " is created, the length limits of the chatroom information are as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Chatroom name: 128 characters or less"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Chatroom description: 512 characters or less"
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Each chatroom can have up to 100 custom attributes, and the total size of custom attributes of each app cannot exceed 10 GB. The custom attributes are of a key-value pair structure. A single key cannot exceed 128 characters and a room attribute value cannot exceed 4096 characters. Attribute keys support the following character sets:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "26 lowercase English letters a-z;"
      }), `
`, _jsx(_components.li, {
        children: "26 uppercase English letters A-Z;"
      }), `
`, _jsx(_components.li, {
        children: "10 numbers 0-9;"
      }), `
`, _jsx(_components.li, {
        children: '"_", "-", ".".'
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "multiple-messages-forwarding-limitations",
      children: "Multiple messages forwarding limitations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The forwarding multiple messages capability is available only in client APIs and not RESTful APIs."
      }), `
`, _jsx(_components.li, {
        children: "End users can only forward up to 300 messages at a time."
      }), `
`, _jsx(_components.li, {
        children: "The content of the forwarded messages can't be searched."
      }), `
`, _jsx(_components.li, {
        children: "When forwarding multiple messages in a combined form, the title and preview of the combined message is displayed. The content of the message preview can't exceed 5KB."
      }), `
`, _jsxs(_components.li, {
        children: ["Applications developed with Chat SDK versions prior to ", _jsx(_components.code, {
          children: "1.2.x"
        }), " will not support display of forwarded messages."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "sent-message-modification-limitations",
      children: "Sent message modification limitations"
    }), `
`, _jsx(_components.p, {
      children: "This feature has the following limitations:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "For a group, regular group members can only edit messages sent by themselves, but the group owner and admins can also edit messages sent by regular group members. The message sender remains unchanged regardless of the message edit operator."
      }), `
`, _jsx(_components.li, {
        children: "Supported message types: text only."
      }), `
`, _jsx(_components.li, {
        children: "Supported use case: One-on-one chat. Chatroom is not supported."
      }), `
`, _jsx(_components.li, {
        children: "End users can recall and modify messages that were sent up to 7 days ago."
      }), `
`, _jsx(_components.li, {
        children: "Agora supports editing the same message up to 10 times."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "storage-limitations",
      children: "Storage limitations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The Agora Chat server stores up to 100 conversations per end user."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "restful-api-call-limit-of-server-side",
      children: "RESTful API Call limit of server-side"
    }), `
`, _jsxs(_components.p, {
      children: ["The RESTful API call frequency limit of each method varies. For details about each method, see ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/im",
        children: _jsx(_components.strong, {
          children: "Chat RESTful API Reference"
        })
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If the provided call frequency limit cannot meet your business requirements, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "presence-limitations",
      children: "Presence limitations"
    }), `
`, _jsx(_components.p, {
      children: "The presence status of each user can be subscribed by up to 3000 users."
    }), `
`, _jsx(_components.h3, {
      id: "contact-limitations",
      children: "Contact limitations"
    }), `
`, _jsx(_components.p, {
      children: "Each user can have a block list that can contain a maximum of 500 users."
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
