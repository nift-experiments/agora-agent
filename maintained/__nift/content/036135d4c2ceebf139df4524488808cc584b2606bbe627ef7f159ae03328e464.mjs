import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "API usage restrictions",
  description: "A brief overview of the restrictions of the Signaling SDK, including API call limit, string size, encoding, and more."
};
export let _markdown = `

This page provides a brief overview of the restrictions of the Agora Signaling SDK, including API call limit, string size, encoding, and more.

## API call limit [#api-call-limit]

Unless otherwise specified below, limit the API call frequency by a single client to 20 calls per second. If the number of calls per second exceeds 20, some calls are ignored by the SDK. If you need to call more APIs per second, contact [support@agora.io](mailto\\:support@agora.io).

## General [#general]

| Item                                  |      Soft limit     |      Hard limit     | Comments                                                                                                                 |
| :------------------------------------ | :-----------------: | :-----------------: | :----------------------------------------------------------------------------------------------------------------------- |
| Number of projects in an account      |         1000        |          -          | To change the limit, contact [support@agora.io](mailto\\:support@agora.io).                                               |
| Number of client instances            |          1          |          1          | Attempts to create multiple instances fail. To increase the limit, contact [support@agora.io](mailto\\:support@agora.io). |
| Number of message channels per app ID |      Unlimited      |          -          | Channel resources are public, users can take them as needed.                                                             |
| Number of stream channels per app ID  |      Unlimited      |          -          | Channel resources are public, users can take them as needed.                                                             |
| User ID length                        | 64 ASCII characters | 64 ASCII characters | Exceeding the soft limit produces an error.                                                                              |

## Message channel [#message-channel]

| Item                                     |      Soft limit     |      Hard limit     | Comments                                                                                                               |
| :--------------------------------------- | :-----------------: | :-----------------: | :--------------------------------------------------------------------------------------------------------------------- |
| Message sending rate/client              |   60 messages/sec   |   60 messages/sec   | Exceeding the soft limit produces an error. To change the limit, contact [support@agora.io](mailto\\:support@agora.io). |
| Number of subscribers per channel        |      Unlimited      |          -          |                                                                                                                        |
| Number of publishers per channel         |      Unlimited      |          -          |                                                                                                                        |
| Number of subscribed channels per client |          50         |          -          | Exceeding the soft limit produces an error.                                                                            |
| Message packet size                      |        32 KB        |        32 KB        | Exceeding the soft limit produces an error.                                                                            |
| Channel name length                      | 64 ASCII characters | 64 ASCII characters | Exceeding the soft limit produces an error.                                                                            |
| Custom message type length               | 32 ASCII characters | 32 ASCII characters | Exceeding the soft limit produces an error.                                                                            |

## Stream channel [#stream-channel]

| Item                                   |      Soft limit     |      Hard limit     | Comments                                                                                                                                                                                               |
| :------------------------------------- | :-----------------: | :-----------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Number of channels a client can create |      Unlimited      |          -          |                                                                                                                                                                                                        |
| Number of channels a client can join   |          10         |          -          | A single client can join a maximum of 10 channels simultaneously; exceeding this soft limit results in an error message.  To increase the limit, contact [support@agora.io](mailto\\:support@agora.io). |
| Number of users per channel            |         128         |         128         | A single channel can accommodate a maximum of 128 users simultaneously; exceeding this soft limit results in an error message.                                                                         |
| Number of topics per channel           |      Unlimited      |          -          |                                                                                                                                                                                                        |
| Channel name length                    | 64 ASCII characters | 64 ASCII characters | Exceeding the soft limit produces an error.                                                                                                                                                            |

## Topic [#topic]

| Item                                                           |      Soft limit     |      Hard limit     | Comments                                                                                                               |
| :------------------------------------------------------------- | :-----------------: | :-----------------: | :--------------------------------------------------------------------------------------------------------------------- |
| Number of topics joined by a client in a channel               |          8          |          8          | Exceeding the soft limit produces an error.                                                                            |
| Number of messages published by a client in a topic per second |   200 messages/sec  |   200 messages/sec  | Exceeding the soft limit produces an error. To change the limit, contact [support@agora.io](mailto\\:support@agora.io). |
| Number of topics subscribed to by a client in a channel        |          50         |          50         | Exceeding the soft limit produces an error.                                                                            |
| Number of users subscribed to a topic by a client              |          64         |          64         | A single client can subscribe up to 64 user IDs to a single topic. Exceeding the soft limit produces an error.         |
| Number of publishers in a topic                                |      Unlimited      |          -          |                                                                                                                        |
| Topic name length                                              | 16 ASCII characters | 16 ASCII characters | The topic name length will be extended to 64 ASCII characters in future releases.                                      |
| Message packet size                                            |         1 KB        |         1 KB        | Exceeding the soft limit produces an error.                                                                            |
| Custom message type length                                     | 32 ASCII characters | 32 ASCII characters | Exceeding the soft limit produces an error.                                                                            |

## Presence [#presence]

| Item                                                              |                          Soft limit                         | Hard limit | Comments                                                                                                                                                                                 |
| :---------------------------------------------------------------- | :---------------------------------------------------------: | :--------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Presence timeout                                                  | Adjustable range: 5 - 300 seconds<br/> Default: 300 seconds |      -     | When the set timeout value is exceeded, the SDK matches the closest boundary value. For example, if you set presence timeout to 400 seconds, the actual application time is 300 seconds. |
| Number of temporary user state key/value pairs                    |                           32 pairs                          |  32 pairs  | Exceeding the soft limit produces an error.                                                                                                                                              |
| Number of temporary user states cached before joining the channel |                             100                             |     100    | Exceeding the soft limit produces an error.                                                                                                                                              |

## Storage [#storage]

| Item                                                      |      Soft limit     |  Hard limit  | Comments                                                                                    |
| :-------------------------------------------------------- | :-----------------: | :----------: | :------------------------------------------------------------------------------------------ |
| Metadata item key length                                  | 32 ASCII characters |       -      |                                                                                             |
| Number of metadata sets per user or channel               |          1          |       1      | Each channel and each user can only have one set of channel or user metadata, respectively. |
| Number of items per channel metadata or user metadata set |      Unlimited      |       -      |                                                                                             |
| Storage space per channel or user metadata set            |        16 KB        |       -      | To change the limit, contact [support@agora.io](mailto\\:support@agora.io).                  |
| Storage space per metadata item                           |        16 KB        |       -      | To change the limit, contact [support@agora.io](mailto\\:support@agora.io).                  |
| Channel metadata API call frequency by a single client    |     10 times/sec    | 20 times/sec | To change the limit, contact [support@agora.io](mailto\\:support@agora.io).                  |
| User metadata API call frequency by a single client       |     10 times/sec    | 20 times/sec | To change the limit, contact [support@agora.io](mailto\\:support@agora.io).                  |
| Number of channel metadata sets per app ID                |      1 million      |       -      |                                                                                             |
| Number of user metadata sets per app ID                   |      1 million      |       -      | To change the limit, contact [support@agora.io](mailto\\:support@agora.io).                  |

## Lock [#lock]

| Item                                |        Soft limit        |        Hard limit        | Comments                                                                                                                                                                                                                                                                                       |
| :---------------------------------- | :----------------------: | :----------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Number of locks per channel         |            32            |             -            | To change the limit, contact [support@agora.io](mailto\\:support@agora.io).                                                                                                                                                                                                                     |
| Number of locked locks per client   |         Unlimited        |             -            |                                                                                                                                                                                                                                                                                                |
| Lock TTL (Time to live)             | 10 seconds - 300 seconds | 10 seconds - 300 seconds | When a user leaves a channel or disconnects, the lock held by that user is automatically released after the set time. When the set value is exceeded, the SDK matches the closest boundary value. For example, if you set lock TTL to 400 seconds, the actual application time is 300 seconds. |
| Lock length                         |    64 ASCII characters   |    64 ASCII characters   | Exceeding the soft limit produces an error.                                                                                                                                                                                                                                                    |
| Number of locks per app ID          |         1 million        |             -            | Exceeding the soft limit produces an error. To change the limit, contact [support@agora.io](mailto\\:support@agora.io).                                                                                                                                                                         |
| Lock acquisition API call frequency |       10 times/sec       |             -            |                                                                                                                                                                                                                                                                                                |

## Miscellaneous [#miscellaneous]

* The number of RESTful API requests per second per app ID are limited to 500. To extend the limit, contact [support@agora.io](mailto\\:support@agora.io).
* The max number of concurrent users is 50,000. To extend the limit, contact [support@agora.io](mailto\\:support@agora.io).
* The max number of daily active users is 500,000. To extend the limit, contact [support@agora.io](mailto\\:support@agora.io).
* The max number of users in a single channel is 50,000. To extend the limit, contact [support@agora.io](mailto\\:support@agora.io).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page provides a brief overview of the restrictions of the Agora Signaling SDK, including API call limit, string size, encoding, and more."
  }, {
    heading: "api-call-limit",
    content: "Unless otherwise specified below, limit the API call frequency by a single client to 20 calls per second. If the number of calls per second exceeds 20, some calls are ignored by the SDK. If you need to call more APIs per second, contact support\\@agora.io."
  }, {
    heading: "general",
    content: "Item"
  }, {
    heading: "general",
    content: "Soft limit"
  }, {
    heading: "general",
    content: "Hard limit"
  }, {
    heading: "general",
    content: "Comments"
  }, {
    heading: "general",
    content: "Number of projects in an account"
  }, {
    heading: "general",
    content: "1000"
  }, {
    heading: "general",
    content: "-"
  }, {
    heading: "general",
    content: "To change the limit, contact support\\@agora.io."
  }, {
    heading: "general",
    content: "Number of client instances"
  }, {
    heading: "general",
    content: "1"
  }, {
    heading: "general",
    content: "1"
  }, {
    heading: "general",
    content: "Attempts to create multiple instances fail. To increase the limit, contact support\\@agora.io."
  }, {
    heading: "general",
    content: "Number of message channels per app ID"
  }, {
    heading: "general",
    content: "Unlimited"
  }, {
    heading: "general",
    content: "-"
  }, {
    heading: "general",
    content: "Channel resources are public, users can take them as needed."
  }, {
    heading: "general",
    content: "Number of stream channels per app ID"
  }, {
    heading: "general",
    content: "Unlimited"
  }, {
    heading: "general",
    content: "-"
  }, {
    heading: "general",
    content: "Channel resources are public, users can take them as needed."
  }, {
    heading: "general",
    content: "User ID length"
  }, {
    heading: "general",
    content: "64 ASCII characters"
  }, {
    heading: "general",
    content: "64 ASCII characters"
  }, {
    heading: "general",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "message-channel",
    content: "Item"
  }, {
    heading: "message-channel",
    content: "Soft limit"
  }, {
    heading: "message-channel",
    content: "Hard limit"
  }, {
    heading: "message-channel",
    content: "Comments"
  }, {
    heading: "message-channel",
    content: "Message sending rate/client"
  }, {
    heading: "message-channel",
    content: "60 messages/sec"
  }, {
    heading: "message-channel",
    content: "60 messages/sec"
  }, {
    heading: "message-channel",
    content: "Exceeding the soft limit produces an error. To change the limit, contact support\\@agora.io."
  }, {
    heading: "message-channel",
    content: "Number of subscribers per channel"
  }, {
    heading: "message-channel",
    content: "Unlimited"
  }, {
    heading: "message-channel",
    content: "-"
  }, {
    heading: "message-channel",
    content: "Number of publishers per channel"
  }, {
    heading: "message-channel",
    content: "Unlimited"
  }, {
    heading: "message-channel",
    content: "-"
  }, {
    heading: "message-channel",
    content: "Number of subscribed channels per client"
  }, {
    heading: "message-channel",
    content: "50"
  }, {
    heading: "message-channel",
    content: "-"
  }, {
    heading: "message-channel",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "message-channel",
    content: "Message packet size"
  }, {
    heading: "message-channel",
    content: "32 KB"
  }, {
    heading: "message-channel",
    content: "32 KB"
  }, {
    heading: "message-channel",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "message-channel",
    content: "Channel name length"
  }, {
    heading: "message-channel",
    content: "64 ASCII characters"
  }, {
    heading: "message-channel",
    content: "64 ASCII characters"
  }, {
    heading: "message-channel",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "message-channel",
    content: "Custom message type length"
  }, {
    heading: "message-channel",
    content: "32 ASCII characters"
  }, {
    heading: "message-channel",
    content: "32 ASCII characters"
  }, {
    heading: "message-channel",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "stream-channel",
    content: "Item"
  }, {
    heading: "stream-channel",
    content: "Soft limit"
  }, {
    heading: "stream-channel",
    content: "Hard limit"
  }, {
    heading: "stream-channel",
    content: "Comments"
  }, {
    heading: "stream-channel",
    content: "Number of channels a client can create"
  }, {
    heading: "stream-channel",
    content: "Unlimited"
  }, {
    heading: "stream-channel",
    content: "-"
  }, {
    heading: "stream-channel",
    content: "Number of channels a client can join"
  }, {
    heading: "stream-channel",
    content: "10"
  }, {
    heading: "stream-channel",
    content: "-"
  }, {
    heading: "stream-channel",
    content: "A single client can join a maximum of 10 channels simultaneously; exceeding this soft limit results in an error message.  To increase the limit, contact support\\@agora.io."
  }, {
    heading: "stream-channel",
    content: "Number of users per channel"
  }, {
    heading: "stream-channel",
    content: "128"
  }, {
    heading: "stream-channel",
    content: "128"
  }, {
    heading: "stream-channel",
    content: "A single channel can accommodate a maximum of 128 users simultaneously; exceeding this soft limit results in an error message."
  }, {
    heading: "stream-channel",
    content: "Number of topics per channel"
  }, {
    heading: "stream-channel",
    content: "Unlimited"
  }, {
    heading: "stream-channel",
    content: "-"
  }, {
    heading: "stream-channel",
    content: "Channel name length"
  }, {
    heading: "stream-channel",
    content: "64 ASCII characters"
  }, {
    heading: "stream-channel",
    content: "64 ASCII characters"
  }, {
    heading: "stream-channel",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "topic",
    content: "Item"
  }, {
    heading: "topic",
    content: "Soft limit"
  }, {
    heading: "topic",
    content: "Hard limit"
  }, {
    heading: "topic",
    content: "Comments"
  }, {
    heading: "topic",
    content: "Number of topics joined by a client in a channel"
  }, {
    heading: "topic",
    content: "8"
  }, {
    heading: "topic",
    content: "8"
  }, {
    heading: "topic",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "topic",
    content: "Number of messages published by a client in a topic per second"
  }, {
    heading: "topic",
    content: "200 messages/sec"
  }, {
    heading: "topic",
    content: "200 messages/sec"
  }, {
    heading: "topic",
    content: "Exceeding the soft limit produces an error. To change the limit, contact support\\@agora.io."
  }, {
    heading: "topic",
    content: "Number of topics subscribed to by a client in a channel"
  }, {
    heading: "topic",
    content: "50"
  }, {
    heading: "topic",
    content: "50"
  }, {
    heading: "topic",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "topic",
    content: "Number of users subscribed to a topic by a client"
  }, {
    heading: "topic",
    content: "64"
  }, {
    heading: "topic",
    content: "64"
  }, {
    heading: "topic",
    content: "A single client can subscribe up to 64 user IDs to a single topic. Exceeding the soft limit produces an error."
  }, {
    heading: "topic",
    content: "Number of publishers in a topic"
  }, {
    heading: "topic",
    content: "Unlimited"
  }, {
    heading: "topic",
    content: "-"
  }, {
    heading: "topic",
    content: "Topic name length"
  }, {
    heading: "topic",
    content: "16 ASCII characters"
  }, {
    heading: "topic",
    content: "16 ASCII characters"
  }, {
    heading: "topic",
    content: "The topic name length will be extended to 64 ASCII characters in future releases."
  }, {
    heading: "topic",
    content: "Message packet size"
  }, {
    heading: "topic",
    content: "1 KB"
  }, {
    heading: "topic",
    content: "1 KB"
  }, {
    heading: "topic",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "topic",
    content: "Custom message type length"
  }, {
    heading: "topic",
    content: "32 ASCII characters"
  }, {
    heading: "topic",
    content: "32 ASCII characters"
  }, {
    heading: "topic",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "presence",
    content: "Item"
  }, {
    heading: "presence",
    content: "Soft limit"
  }, {
    heading: "presence",
    content: "Hard limit"
  }, {
    heading: "presence",
    content: "Comments"
  }, {
    heading: "presence",
    content: "Presence timeout"
  }, {
    heading: "presence",
    content: "Adjustable range: 5 - 300 seconds<br/> Default: 300 seconds"
  }, {
    heading: "presence",
    content: "-"
  }, {
    heading: "presence",
    content: "When the set timeout value is exceeded, the SDK matches the closest boundary value. For example, if you set presence timeout to 400 seconds, the actual application time is 300 seconds."
  }, {
    heading: "presence",
    content: "Number of temporary user state key/value pairs"
  }, {
    heading: "presence",
    content: "32 pairs"
  }, {
    heading: "presence",
    content: "32 pairs"
  }, {
    heading: "presence",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "presence",
    content: "Number of temporary user states cached before joining the channel"
  }, {
    heading: "presence",
    content: "100"
  }, {
    heading: "presence",
    content: "100"
  }, {
    heading: "presence",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "storage",
    content: "Item"
  }, {
    heading: "storage",
    content: "Soft limit"
  }, {
    heading: "storage",
    content: "Hard limit"
  }, {
    heading: "storage",
    content: "Comments"
  }, {
    heading: "storage",
    content: "Metadata item key length"
  }, {
    heading: "storage",
    content: "32 ASCII characters"
  }, {
    heading: "storage",
    content: "-"
  }, {
    heading: "storage",
    content: "Number of metadata sets per user or channel"
  }, {
    heading: "storage",
    content: "1"
  }, {
    heading: "storage",
    content: "1"
  }, {
    heading: "storage",
    content: "Each channel and each user can only have one set of channel or user metadata, respectively."
  }, {
    heading: "storage",
    content: "Number of items per channel metadata or user metadata set"
  }, {
    heading: "storage",
    content: "Unlimited"
  }, {
    heading: "storage",
    content: "-"
  }, {
    heading: "storage",
    content: "Storage space per channel or user metadata set"
  }, {
    heading: "storage",
    content: "16 KB"
  }, {
    heading: "storage",
    content: "-"
  }, {
    heading: "storage",
    content: "To change the limit, contact support\\@agora.io."
  }, {
    heading: "storage",
    content: "Storage space per metadata item"
  }, {
    heading: "storage",
    content: "16 KB"
  }, {
    heading: "storage",
    content: "-"
  }, {
    heading: "storage",
    content: "To change the limit, contact support\\@agora.io."
  }, {
    heading: "storage",
    content: "Channel metadata API call frequency by a single client"
  }, {
    heading: "storage",
    content: "10 times/sec"
  }, {
    heading: "storage",
    content: "20 times/sec"
  }, {
    heading: "storage",
    content: "To change the limit, contact support\\@agora.io."
  }, {
    heading: "storage",
    content: "User metadata API call frequency by a single client"
  }, {
    heading: "storage",
    content: "10 times/sec"
  }, {
    heading: "storage",
    content: "20 times/sec"
  }, {
    heading: "storage",
    content: "To change the limit, contact support\\@agora.io."
  }, {
    heading: "storage",
    content: "Number of channel metadata sets per app ID"
  }, {
    heading: "storage",
    content: "1 million"
  }, {
    heading: "storage",
    content: "-"
  }, {
    heading: "storage",
    content: "Number of user metadata sets per app ID"
  }, {
    heading: "storage",
    content: "1 million"
  }, {
    heading: "storage",
    content: "-"
  }, {
    heading: "storage",
    content: "To change the limit, contact support\\@agora.io."
  }, {
    heading: "lock",
    content: "Item"
  }, {
    heading: "lock",
    content: "Soft limit"
  }, {
    heading: "lock",
    content: "Hard limit"
  }, {
    heading: "lock",
    content: "Comments"
  }, {
    heading: "lock",
    content: "Number of locks per channel"
  }, {
    heading: "lock",
    content: "32"
  }, {
    heading: "lock",
    content: "-"
  }, {
    heading: "lock",
    content: "To change the limit, contact support\\@agora.io."
  }, {
    heading: "lock",
    content: "Number of locked locks per client"
  }, {
    heading: "lock",
    content: "Unlimited"
  }, {
    heading: "lock",
    content: "-"
  }, {
    heading: "lock",
    content: "Lock TTL (Time to live)"
  }, {
    heading: "lock",
    content: "10 seconds - 300 seconds"
  }, {
    heading: "lock",
    content: "10 seconds - 300 seconds"
  }, {
    heading: "lock",
    content: "When a user leaves a channel or disconnects, the lock held by that user is automatically released after the set time. When the set value is exceeded, the SDK matches the closest boundary value. For example, if you set lock TTL to 400 seconds, the actual application time is 300 seconds."
  }, {
    heading: "lock",
    content: "Lock length"
  }, {
    heading: "lock",
    content: "64 ASCII characters"
  }, {
    heading: "lock",
    content: "64 ASCII characters"
  }, {
    heading: "lock",
    content: "Exceeding the soft limit produces an error."
  }, {
    heading: "lock",
    content: "Number of locks per app ID"
  }, {
    heading: "lock",
    content: "1 million"
  }, {
    heading: "lock",
    content: "-"
  }, {
    heading: "lock",
    content: "Exceeding the soft limit produces an error. To change the limit, contact support\\@agora.io."
  }, {
    heading: "lock",
    content: "Lock acquisition API call frequency"
  }, {
    heading: "lock",
    content: "10 times/sec"
  }, {
    heading: "lock",
    content: "-"
  }, {
    heading: "miscellaneous",
    content: "The number of RESTful API requests per second per app ID are limited to 500. To extend the limit, contact support\\@agora.io."
  }, {
    heading: "miscellaneous",
    content: "The max number of concurrent users is 50,000. To extend the limit, contact support\\@agora.io."
  }, {
    heading: "miscellaneous",
    content: "The max number of daily active users is 500,000. To extend the limit, contact support\\@agora.io."
  }, {
    heading: "miscellaneous",
    content: "The max number of users in a single channel is 50,000. To extend the limit, contact support\\@agora.io."
  }],
  headings: [{
    id: "api-call-limit",
    content: "API call limit"
  }, {
    id: "general",
    content: "General"
  }, {
    id: "message-channel",
    content: "Message channel"
  }, {
    id: "stream-channel",
    content: "Stream channel"
  }, {
    id: "topic",
    content: "Topic"
  }, {
    id: "presence",
    content: "Presence"
  }, {
    id: "storage",
    content: "Storage"
  }, {
    id: "lock",
    content: "Lock"
  }, {
    id: "miscellaneous",
    content: "Miscellaneous"
  }]
};
export let toc = [{
  depth: 2,
  url: "#api-call-limit",
  title: _jsx(_Fragment, {
    children: "API call limit"
  })
}, {
  depth: 2,
  url: "#general",
  title: _jsx(_Fragment, {
    children: "General"
  })
}, {
  depth: 2,
  url: "#message-channel",
  title: _jsx(_Fragment, {
    children: "Message channel"
  })
}, {
  depth: 2,
  url: "#stream-channel",
  title: _jsx(_Fragment, {
    children: "Stream channel"
  })
}, {
  depth: 2,
  url: "#topic",
  title: _jsx(_Fragment, {
    children: "Topic"
  })
}, {
  depth: 2,
  url: "#presence",
  title: _jsx(_Fragment, {
    children: "Presence"
  })
}, {
  depth: 2,
  url: "#storage",
  title: _jsx(_Fragment, {
    children: "Storage"
  })
}, {
  depth: 2,
  url: "#lock",
  title: _jsx(_Fragment, {
    children: "Lock"
  })
}, {
  depth: 2,
  url: "#miscellaneous",
  title: _jsx(_Fragment, {
    children: "Miscellaneous"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
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
      children: "This page provides a brief overview of the restrictions of the Agora Signaling SDK, including API call limit, string size, encoding, and more."
    }), `
`, _jsx(_components.h2, {
      id: "api-call-limit",
      children: "API call limit"
    }), `
`, _jsxs(_components.p, {
      children: ["Unless otherwise specified below, limit the API call frequency by a single client to 20 calls per second. If the number of calls per second exceeds 20, some calls are ignored by the SDK. If you need to call more APIs per second, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "general",
      children: "General"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Soft limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Hard limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Comments"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of projects in an account"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of client instances"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Attempts to create multiple instances fail. To increase the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of message channels per app ID"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Channel resources are public, users can take them as needed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of stream channels per app ID"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Channel resources are public, users can take them as needed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User ID length"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "message-channel",
      children: "Message channel"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Soft limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Hard limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Comments"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message sending rate/client"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "60 messages/sec"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "60 messages/sec"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Exceeding the soft limit produces an error. To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of subscribers per channel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of publishers per channel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of subscribed channels per client"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message packet size"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32 KB"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32 KB"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Channel name length"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Custom message type length"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "stream-channel",
      children: "Stream channel"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Soft limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Hard limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Comments"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of channels a client can create"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of channels a client can join"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["A single client can join a maximum of 10 channels simultaneously; exceeding this soft limit results in an error message.  To increase the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of users per channel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "128"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A single channel can accommodate a maximum of 128 users simultaneously; exceeding this soft limit results in an error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of topics per channel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Channel name length"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "topic",
      children: "Topic"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Soft limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Hard limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Comments"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of topics joined by a client in a channel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of messages published by a client in a topic per second"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "200 messages/sec"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "200 messages/sec"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Exceeding the soft limit produces an error. To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of topics subscribed to by a client in a channel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of users subscribed to a topic by a client"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A single client can subscribe up to 64 user IDs to a single topic. Exceeding the soft limit produces an error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of publishers in a topic"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Topic name length"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "16 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "16 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The topic name length will be extended to 64 ASCII characters in future releases."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message packet size"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 KB"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 KB"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Custom message type length"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "presence",
      children: "Presence"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Soft limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Hard limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Comments"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Presence timeout"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["Adjustable range: 5 - 300 seconds", " Default: 300 seconds"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "When the set timeout value is exceeded, the SDK matches the closest boundary value. For example, if you set presence timeout to 400 seconds, the actual application time is 300 seconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of temporary user state key/value pairs"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32 pairs"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32 pairs"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of temporary user states cached before joining the channel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "storage",
      children: "Storage"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Soft limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Hard limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Comments"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Metadata item key length"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of metadata sets per user or channel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Each channel and each user can only have one set of channel or user metadata, respectively."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of items per channel metadata or user metadata set"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Storage space per channel or user metadata set"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "16 KB"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Storage space per metadata item"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "16 KB"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Channel metadata API call frequency by a single client"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10 times/sec"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20 times/sec"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User metadata API call frequency by a single client"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10 times/sec"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20 times/sec"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of channel metadata sets per app ID"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 million"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of user metadata sets per app ID"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 million"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "lock",
      children: "Lock"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Soft limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Hard limit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Comments"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of locks per channel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of locked locks per client"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlimited"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lock TTL (Time to live)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10 seconds - 300 seconds"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10 seconds - 300 seconds"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "When a user leaves a channel or disconnects, the lock held by that user is automatically released after the set time. When the set value is exceeded, the SDK matches the closest boundary value. For example, if you set lock TTL to 400 seconds, the actual application time is 300 seconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lock length"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "64 ASCII characters"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exceeding the soft limit produces an error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of locks per app ID"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 million"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Exceeding the soft limit produces an error. To change the limit, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lock acquisition API call frequency"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10 times/sec"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "miscellaneous",
      children: "Miscellaneous"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The number of RESTful API requests per second per app ID are limited to 500. To extend the limit, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["The max number of concurrent users is 50,000. To extend the limit, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["The max number of daily active users is 500,000. To extend the limit, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["The max number of users in a single channel is 50,000. To extend the limit, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), "."]
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
