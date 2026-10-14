import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora Analytics data metrics",
  description: "Explains Chat-related metrics."
};
export let _markdown = `

This page explains Chat-related metrics.

## Scale metrics [#scale-metrics]

### Total registered users [#total-registered-users]

The accumulated number of registered users under this project as of the current time. This number could decline if some UIDs are deleted.

### Daily new users [#daily-new-users]

The number of newly registered users under this project today (00:00 – current time).

### Daily active users (DAU) [#daily-active-users-dau]

The number of users who log in or send or receive messages today (00:00 – current time). A user connected through multiple devices is regarded as one active user.

### Monthly Max. DAU [#monthly-max-dau]

The highest number of DAU from 00:00 on the first day of this month to the current time.

### Total chat groups [#total-chat-groups]

The number of created chat groups under this project as of the current time (disbanded chat groups are excluded).

### Daily new chat groups [#daily-new-chat-groups]

The number of newly created chat groups under this project today (00:00 – current time).

### Daily disbanded chat groups [#daily-disbanded-chat-groups]

The number of disbanded chat groups under this project today (00:00 – current time).

### Daily active chat groups [#daily-active-chat-groups]

The number of chat groups that send uplink messages or receive downlink messages today (00:00 – current time).

### Total chat rooms [#total-chat-rooms]

The number of created chat rooms under this project as of the current time (disbanded chat rooms are excluded).

### Daily new chat rooms [#daily-new-chat-rooms]

The number of newly created chat rooms under this project today (00:00 – current time).

### Daily disbanded chat rooms [#daily-disbanded-chat-rooms]

The number of disbanded chat rooms under this project today (00:00 – current time).

### Daily active chat rooms [#daily-active-chat-rooms]

The number of chat rooms that send uplink messages or receive downlink messages today (00:00 – current time).

### Daily chat room PCU [#daily-chat-room-pcu]

The highest number of users connected to servers at the same time in chat rooms under this project today (00:00 - current time). Note that the displayed data has a 10-minute delay.

## Message count metrics [#message-count-metrics]

The following metrics apply to chat groups, chat rooms, and one-to-one chats, as well as all message types.

### Total dispatched messages [#total-dispatched-messages]

The number of messages dispatched by the Chat server as of yesterday.

### Total uplink messages [#total-uplink-messages]

The number of messages sent from clients to the Chat server as of yesterday.

### Total downlink messages [#total-downlink-messages]

The number of messages sent from the Chat server to online users as of yesterday.

### Total offline messages [#total-offline-messages]

The number of messages sent from the Chat server to offline users as of yesterday.

## End-user API metrics [#end-user-api-metrics]

### Metric type [#metric-type]

| Metric type           | Description                                                             |
| :-------------------- | :---------------------------------------------------------------------- |
| Manual login          | Users log in through a password or token.                               |
| Automatic login       | Users log in automatically through a persistent token.                  |
| Message sending       | Users send messages.                                                    |
| Friends management    | User operations such as adding or removing friends from their contacts. |
| User management       | User operations such as creating and updating a profile.                |
| Chat group management | User operations such as creating and deleting chat groups.              |
| Chat room management  | User operations such as creating and deleting chat rooms.               |

### Metric [#metric]

| Metric                        | Description                                                                                                                |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| Request attempts              | The total number of attempts to call the client SDK APIs.                                                                  |
| 1s/3s/5s request success rate | The number of successful calls of the client SDK API in 1s/3s/5s divided by the total number of effective call attempts ①. |
| Average request delay         | The sum of delay of client SDK API calls divided by the total number of successful calls.                                  |

① The total number of effective call attempts does not include invalid call attempts. A call attempt is considered as invalid if one of the following requirements is met:

* The username or password is empty or incorrect.
* The username is illegal.
* The password is invalid.
* The user cannot perform the operation without an admin permission.
* The user does not exist.
* The chat group does not exist.
* The user is not found in the chat group.

## Server API metrics [#server-api-metrics]

### Metric type [#metric-type-1]

| Metric type              | Description                                                                                         |
| :----------------------- | :-------------------------------------------------------------------------------------------------- |
| Token generation         | Retrieving a token that has the privilege of an administrator through the RESTful API.              |
| User system registration | User registration and retrieving, modifying, and deleting user information through the RESTful API. |
| File upload / download   | Uploading and downloading audio, image, and other files through the RESTful API.                    |
| Message sending          | Sending a message through the RESTful API.                                                          |
| Chat group management    | Functions such as creating and deleting chat groups through the RESTful API.                        |
| Chat room management     | Functions such as creating and deleting chat rooms through the RESTful API.                         |
| User attributes          | Functions such as setting and deleting user attributes through the RESTful API.                     |

### Metric [#metric-1]

| Metric                        | Description                                                                                                             |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| Request attempts              | The total number of attempts to make RESTful API requests.                                                              |
| 1s/3s/5s request success rate | The number of successful RESTful API requests in 1s/3s/5s divided by the total number of RESTful API  request attempts. |
| Average request delay         | The sum of delay of all RESTful API requests divided by the total number of successful RESTful API requests.            |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains Chat-related metrics."
  }, {
    heading: "total-registered-users",
    content: "The accumulated number of registered users under this project as of the current time. This number could decline if some UIDs are deleted."
  }, {
    heading: "daily-new-users",
    content: "The number of newly registered users under this project today (00:00 – current time)."
  }, {
    heading: "daily-active-users-dau",
    content: "The number of users who log in or send or receive messages today (00:00 – current time). A user connected through multiple devices is regarded as one active user."
  }, {
    heading: "monthly-max-dau",
    content: "The highest number of DAU from 00:00 on the first day of this month to the current time."
  }, {
    heading: "total-chat-groups",
    content: "The number of created chat groups under this project as of the current time (disbanded chat groups are excluded)."
  }, {
    heading: "daily-new-chat-groups",
    content: "The number of newly created chat groups under this project today (00:00 – current time)."
  }, {
    heading: "daily-disbanded-chat-groups",
    content: "The number of disbanded chat groups under this project today (00:00 – current time)."
  }, {
    heading: "daily-active-chat-groups",
    content: "The number of chat groups that send uplink messages or receive downlink messages today (00:00 – current time)."
  }, {
    heading: "total-chat-rooms",
    content: "The number of created chat rooms under this project as of the current time (disbanded chat rooms are excluded)."
  }, {
    heading: "daily-new-chat-rooms",
    content: "The number of newly created chat rooms under this project today (00:00 – current time)."
  }, {
    heading: "daily-disbanded-chat-rooms",
    content: "The number of disbanded chat rooms under this project today (00:00 – current time)."
  }, {
    heading: "daily-active-chat-rooms",
    content: "The number of chat rooms that send uplink messages or receive downlink messages today (00:00 – current time)."
  }, {
    heading: "daily-chat-room-pcu",
    content: "The highest number of users connected to servers at the same time in chat rooms under this project today (00:00 - current time). Note that the displayed data has a 10-minute delay."
  }, {
    heading: "message-count-metrics",
    content: "The following metrics apply to chat groups, chat rooms, and one-to-one chats, as well as all message types."
  }, {
    heading: "total-dispatched-messages",
    content: "The number of messages dispatched by the Chat server as of yesterday."
  }, {
    heading: "total-uplink-messages",
    content: "The number of messages sent from clients to the Chat server as of yesterday."
  }, {
    heading: "total-downlink-messages",
    content: "The number of messages sent from the Chat server to online users as of yesterday."
  }, {
    heading: "total-offline-messages",
    content: "The number of messages sent from the Chat server to offline users as of yesterday."
  }, {
    heading: "metric-type",
    content: "Metric type"
  }, {
    heading: "metric-type",
    content: "Description"
  }, {
    heading: "metric-type",
    content: "Manual login"
  }, {
    heading: "metric-type",
    content: "Users log in through a password or token."
  }, {
    heading: "metric-type",
    content: "Automatic login"
  }, {
    heading: "metric-type",
    content: "Users log in automatically through a persistent token."
  }, {
    heading: "metric-type",
    content: "Message sending"
  }, {
    heading: "metric-type",
    content: "Users send messages."
  }, {
    heading: "metric-type",
    content: "Friends management"
  }, {
    heading: "metric-type",
    content: "User operations such as adding or removing friends from their contacts."
  }, {
    heading: "metric-type",
    content: "User management"
  }, {
    heading: "metric-type",
    content: "User operations such as creating and updating a profile."
  }, {
    heading: "metric-type",
    content: "Chat group management"
  }, {
    heading: "metric-type",
    content: "User operations such as creating and deleting chat groups."
  }, {
    heading: "metric-type",
    content: "Chat room management"
  }, {
    heading: "metric-type",
    content: "User operations such as creating and deleting chat rooms."
  }, {
    heading: "metric",
    content: "Metric"
  }, {
    heading: "metric",
    content: "Description"
  }, {
    heading: "metric",
    content: "Request attempts"
  }, {
    heading: "metric",
    content: "The total number of attempts to call the client SDK APIs."
  }, {
    heading: "metric",
    content: "1s/3s/5s request success rate"
  }, {
    heading: "metric",
    content: "The number of successful calls of the client SDK API in 1s/3s/5s divided by the total number of effective call attempts ①."
  }, {
    heading: "metric",
    content: "Average request delay"
  }, {
    heading: "metric",
    content: "The sum of delay of client SDK API calls divided by the total number of successful calls."
  }, {
    heading: "metric",
    content: "① The total number of effective call attempts does not include invalid call attempts. A call attempt is considered as invalid if one of the following requirements is met:"
  }, {
    heading: "metric",
    content: "The username or password is empty or incorrect."
  }, {
    heading: "metric",
    content: "The username is illegal."
  }, {
    heading: "metric",
    content: "The password is invalid."
  }, {
    heading: "metric",
    content: "The user cannot perform the operation without an admin permission."
  }, {
    heading: "metric",
    content: "The user does not exist."
  }, {
    heading: "metric",
    content: "The chat group does not exist."
  }, {
    heading: "metric",
    content: "The user is not found in the chat group."
  }, {
    heading: "metric-type-1",
    content: "Metric type"
  }, {
    heading: "metric-type-1",
    content: "Description"
  }, {
    heading: "metric-type-1",
    content: "Token generation"
  }, {
    heading: "metric-type-1",
    content: "Retrieving a token that has the privilege of an administrator through the RESTful API."
  }, {
    heading: "metric-type-1",
    content: "User system registration"
  }, {
    heading: "metric-type-1",
    content: "User registration and retrieving, modifying, and deleting user information through the RESTful API."
  }, {
    heading: "metric-type-1",
    content: "File upload / download"
  }, {
    heading: "metric-type-1",
    content: "Uploading and downloading audio, image, and other files through the RESTful API."
  }, {
    heading: "metric-type-1",
    content: "Message sending"
  }, {
    heading: "metric-type-1",
    content: "Sending a message through the RESTful API."
  }, {
    heading: "metric-type-1",
    content: "Chat group management"
  }, {
    heading: "metric-type-1",
    content: "Functions such as creating and deleting chat groups through the RESTful API."
  }, {
    heading: "metric-type-1",
    content: "Chat room management"
  }, {
    heading: "metric-type-1",
    content: "Functions such as creating and deleting chat rooms through the RESTful API."
  }, {
    heading: "metric-type-1",
    content: "User attributes"
  }, {
    heading: "metric-type-1",
    content: "Functions such as setting and deleting user attributes through the RESTful API."
  }, {
    heading: "metric-1",
    content: "Metric"
  }, {
    heading: "metric-1",
    content: "Description"
  }, {
    heading: "metric-1",
    content: "Request attempts"
  }, {
    heading: "metric-1",
    content: "The total number of attempts to make RESTful API requests."
  }, {
    heading: "metric-1",
    content: "1s/3s/5s request success rate"
  }, {
    heading: "metric-1",
    content: "The number of successful RESTful API requests in 1s/3s/5s divided by the total number of RESTful API  request attempts."
  }, {
    heading: "metric-1",
    content: "Average request delay"
  }, {
    heading: "metric-1",
    content: "The sum of delay of all RESTful API requests divided by the total number of successful RESTful API requests."
  }],
  headings: [{
    id: "scale-metrics",
    content: "Scale metrics"
  }, {
    id: "total-registered-users",
    content: "Total registered users"
  }, {
    id: "daily-new-users",
    content: "Daily new users"
  }, {
    id: "daily-active-users-dau",
    content: "Daily active users (DAU)"
  }, {
    id: "monthly-max-dau",
    content: "Monthly Max. DAU"
  }, {
    id: "total-chat-groups",
    content: "Total chat groups"
  }, {
    id: "daily-new-chat-groups",
    content: "Daily new chat groups"
  }, {
    id: "daily-disbanded-chat-groups",
    content: "Daily disbanded chat groups"
  }, {
    id: "daily-active-chat-groups",
    content: "Daily active chat groups"
  }, {
    id: "total-chat-rooms",
    content: "Total chat rooms"
  }, {
    id: "daily-new-chat-rooms",
    content: "Daily new chat rooms"
  }, {
    id: "daily-disbanded-chat-rooms",
    content: "Daily disbanded chat rooms"
  }, {
    id: "daily-active-chat-rooms",
    content: "Daily active chat rooms"
  }, {
    id: "daily-chat-room-pcu",
    content: "Daily chat room PCU"
  }, {
    id: "message-count-metrics",
    content: "Message count metrics"
  }, {
    id: "total-dispatched-messages",
    content: "Total dispatched messages"
  }, {
    id: "total-uplink-messages",
    content: "Total uplink messages"
  }, {
    id: "total-downlink-messages",
    content: "Total downlink messages"
  }, {
    id: "total-offline-messages",
    content: "Total offline messages"
  }, {
    id: "end-user-api-metrics",
    content: "End-user API metrics"
  }, {
    id: "metric-type",
    content: "Metric type"
  }, {
    id: "metric",
    content: "Metric"
  }, {
    id: "server-api-metrics",
    content: "Server API metrics"
  }, {
    id: "metric-type-1",
    content: "Metric type"
  }, {
    id: "metric-1",
    content: "Metric"
  }]
};
export let toc = [{
  depth: 2,
  url: "#scale-metrics",
  title: _jsx(_Fragment, {
    children: "Scale metrics"
  })
}, {
  depth: 3,
  url: "#total-registered-users",
  title: _jsx(_Fragment, {
    children: "Total registered users"
  })
}, {
  depth: 3,
  url: "#daily-new-users",
  title: _jsx(_Fragment, {
    children: "Daily new users"
  })
}, {
  depth: 3,
  url: "#daily-active-users-dau",
  title: _jsx(_Fragment, {
    children: "Daily active users (DAU)"
  })
}, {
  depth: 3,
  url: "#monthly-max-dau",
  title: _jsx(_Fragment, {
    children: "Monthly Max. DAU"
  })
}, {
  depth: 3,
  url: "#total-chat-groups",
  title: _jsx(_Fragment, {
    children: "Total chat groups"
  })
}, {
  depth: 3,
  url: "#daily-new-chat-groups",
  title: _jsx(_Fragment, {
    children: "Daily new chat groups"
  })
}, {
  depth: 3,
  url: "#daily-disbanded-chat-groups",
  title: _jsx(_Fragment, {
    children: "Daily disbanded chat groups"
  })
}, {
  depth: 3,
  url: "#daily-active-chat-groups",
  title: _jsx(_Fragment, {
    children: "Daily active chat groups"
  })
}, {
  depth: 3,
  url: "#total-chat-rooms",
  title: _jsx(_Fragment, {
    children: "Total chat rooms"
  })
}, {
  depth: 3,
  url: "#daily-new-chat-rooms",
  title: _jsx(_Fragment, {
    children: "Daily new chat rooms"
  })
}, {
  depth: 3,
  url: "#daily-disbanded-chat-rooms",
  title: _jsx(_Fragment, {
    children: "Daily disbanded chat rooms"
  })
}, {
  depth: 3,
  url: "#daily-active-chat-rooms",
  title: _jsx(_Fragment, {
    children: "Daily active chat rooms"
  })
}, {
  depth: 3,
  url: "#daily-chat-room-pcu",
  title: _jsx(_Fragment, {
    children: "Daily chat room PCU"
  })
}, {
  depth: 2,
  url: "#message-count-metrics",
  title: _jsx(_Fragment, {
    children: "Message count metrics"
  })
}, {
  depth: 3,
  url: "#total-dispatched-messages",
  title: _jsx(_Fragment, {
    children: "Total dispatched messages"
  })
}, {
  depth: 3,
  url: "#total-uplink-messages",
  title: _jsx(_Fragment, {
    children: "Total uplink messages"
  })
}, {
  depth: 3,
  url: "#total-downlink-messages",
  title: _jsx(_Fragment, {
    children: "Total downlink messages"
  })
}, {
  depth: 3,
  url: "#total-offline-messages",
  title: _jsx(_Fragment, {
    children: "Total offline messages"
  })
}, {
  depth: 2,
  url: "#end-user-api-metrics",
  title: _jsx(_Fragment, {
    children: "End-user API metrics"
  })
}, {
  depth: 3,
  url: "#metric-type",
  title: _jsx(_Fragment, {
    children: "Metric type"
  })
}, {
  depth: 3,
  url: "#metric",
  title: _jsx(_Fragment, {
    children: "Metric"
  })
}, {
  depth: 2,
  url: "#server-api-metrics",
  title: _jsx(_Fragment, {
    children: "Server API metrics"
  })
}, {
  depth: 3,
  url: "#metric-type-1",
  title: _jsx(_Fragment, {
    children: "Metric type"
  })
}, {
  depth: 3,
  url: "#metric-1",
  title: _jsx(_Fragment, {
    children: "Metric"
  })
}];
function _createMdxContent(props) {
  const _components = {
    div: "div",
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
      children: "This page explains Chat-related metrics."
    }), `
`, _jsx(_components.h2, {
      id: "scale-metrics",
      children: "Scale metrics"
    }), `
`, _jsx(_components.h3, {
      id: "total-registered-users",
      children: "Total registered users"
    }), `
`, _jsx(_components.p, {
      children: "The accumulated number of registered users under this project as of the current time. This number could decline if some UIDs are deleted."
    }), `
`, _jsx(_components.h3, {
      id: "daily-new-users",
      children: "Daily new users"
    }), `
`, _jsxs(_components.p, {
      children: ["The number of newly registered users under this project today (00", _jsx(_components.div, {}), " – current time)."]
    }), `
`, _jsx(_components.h3, {
      id: "daily-active-users-dau",
      children: "Daily active users (DAU)"
    }), `
`, _jsxs(_components.p, {
      children: ["The number of users who log in or send or receive messages today (00", _jsx(_components.div, {}), " – current time). A user connected through multiple devices is regarded as one active user."]
    }), `
`, _jsx(_components.h3, {
      id: "monthly-max-dau",
      children: "Monthly Max. DAU"
    }), `
`, _jsxs(_components.p, {
      children: ["The highest number of DAU from 00", _jsx(_components.div, {}), " on the first day of this month to the current time."]
    }), `
`, _jsx(_components.h3, {
      id: "total-chat-groups",
      children: "Total chat groups"
    }), `
`, _jsx(_components.p, {
      children: "The number of created chat groups under this project as of the current time (disbanded chat groups are excluded)."
    }), `
`, _jsx(_components.h3, {
      id: "daily-new-chat-groups",
      children: "Daily new chat groups"
    }), `
`, _jsxs(_components.p, {
      children: ["The number of newly created chat groups under this project today (00", _jsx(_components.div, {}), " – current time)."]
    }), `
`, _jsx(_components.h3, {
      id: "daily-disbanded-chat-groups",
      children: "Daily disbanded chat groups"
    }), `
`, _jsxs(_components.p, {
      children: ["The number of disbanded chat groups under this project today (00", _jsx(_components.div, {}), " – current time)."]
    }), `
`, _jsx(_components.h3, {
      id: "daily-active-chat-groups",
      children: "Daily active chat groups"
    }), `
`, _jsxs(_components.p, {
      children: ["The number of chat groups that send uplink messages or receive downlink messages today (00", _jsx(_components.div, {}), " – current time)."]
    }), `
`, _jsx(_components.h3, {
      id: "total-chat-rooms",
      children: "Total chat rooms"
    }), `
`, _jsx(_components.p, {
      children: "The number of created chat rooms under this project as of the current time (disbanded chat rooms are excluded)."
    }), `
`, _jsx(_components.h3, {
      id: "daily-new-chat-rooms",
      children: "Daily new chat rooms"
    }), `
`, _jsxs(_components.p, {
      children: ["The number of newly created chat rooms under this project today (00", _jsx(_components.div, {}), " – current time)."]
    }), `
`, _jsx(_components.h3, {
      id: "daily-disbanded-chat-rooms",
      children: "Daily disbanded chat rooms"
    }), `
`, _jsxs(_components.p, {
      children: ["The number of disbanded chat rooms under this project today (00", _jsx(_components.div, {}), " – current time)."]
    }), `
`, _jsx(_components.h3, {
      id: "daily-active-chat-rooms",
      children: "Daily active chat rooms"
    }), `
`, _jsxs(_components.p, {
      children: ["The number of chat rooms that send uplink messages or receive downlink messages today (00", _jsx(_components.div, {}), " – current time)."]
    }), `
`, _jsx(_components.h3, {
      id: "daily-chat-room-pcu",
      children: "Daily chat room PCU"
    }), `
`, _jsxs(_components.p, {
      children: ["The highest number of users connected to servers at the same time in chat rooms under this project today (00", _jsx(_components.div, {}), " - current time). Note that the displayed data has a 10-minute delay."]
    }), `
`, _jsx(_components.h2, {
      id: "message-count-metrics",
      children: "Message count metrics"
    }), `
`, _jsx(_components.p, {
      children: "The following metrics apply to chat groups, chat rooms, and one-to-one chats, as well as all message types."
    }), `
`, _jsx(_components.h3, {
      id: "total-dispatched-messages",
      children: "Total dispatched messages"
    }), `
`, _jsx(_components.p, {
      children: "The number of messages dispatched by the Chat server as of yesterday."
    }), `
`, _jsx(_components.h3, {
      id: "total-uplink-messages",
      children: "Total uplink messages"
    }), `
`, _jsx(_components.p, {
      children: "The number of messages sent from clients to the Chat server as of yesterday."
    }), `
`, _jsx(_components.h3, {
      id: "total-downlink-messages",
      children: "Total downlink messages"
    }), `
`, _jsx(_components.p, {
      children: "The number of messages sent from the Chat server to online users as of yesterday."
    }), `
`, _jsx(_components.h3, {
      id: "total-offline-messages",
      children: "Total offline messages"
    }), `
`, _jsx(_components.p, {
      children: "The number of messages sent from the Chat server to offline users as of yesterday."
    }), `
`, _jsx(_components.h2, {
      id: "end-user-api-metrics",
      children: "End-user API metrics"
    }), `
`, _jsx(_components.h3, {
      id: "metric-type",
      children: "Metric type"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Metric type"
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
            children: "Manual login"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Users log in through a password or token."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Automatic login"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Users log in automatically through a persistent token."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message sending"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Users send messages."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Friends management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User operations such as adding or removing friends from their contacts."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User operations such as creating and updating a profile."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chat group management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User operations such as creating and deleting chat groups."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chat room management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User operations such as creating and deleting chat rooms."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "metric",
      children: "Metric"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Metric"
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
            children: "Request attempts"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The total number of attempts to call the client SDK APIs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1s/3s/5s request success rate"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The number of successful calls of the client SDK API in 1s/3s/5s divided by the total number of effective call attempts ①."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Average request delay"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The sum of delay of client SDK API calls divided by the total number of successful calls."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "① The total number of effective call attempts does not include invalid call attempts. A call attempt is considered as invalid if one of the following requirements is met:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The username or password is empty or incorrect."
      }), `
`, _jsx(_components.li, {
        children: "The username is illegal."
      }), `
`, _jsx(_components.li, {
        children: "The password is invalid."
      }), `
`, _jsx(_components.li, {
        children: "The user cannot perform the operation without an admin permission."
      }), `
`, _jsx(_components.li, {
        children: "The user does not exist."
      }), `
`, _jsx(_components.li, {
        children: "The chat group does not exist."
      }), `
`, _jsx(_components.li, {
        children: "The user is not found in the chat group."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "server-api-metrics",
      children: "Server API metrics"
    }), `
`, _jsx(_components.h3, {
      id: "metric-type-1",
      children: "Metric type"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Metric type"
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
            children: "Token generation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retrieving a token that has the privilege of an administrator through the RESTful API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User system registration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User registration and retrieving, modifying, and deleting user information through the RESTful API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "File upload / download"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Uploading and downloading audio, image, and other files through the RESTful API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message sending"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sending a message through the RESTful API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chat group management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Functions such as creating and deleting chat groups through the RESTful API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chat room management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Functions such as creating and deleting chat rooms through the RESTful API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Functions such as setting and deleting user attributes through the RESTful API."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "metric-1",
      children: "Metric"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Metric"
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
            children: "Request attempts"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The total number of attempts to make RESTful API requests."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1s/3s/5s request success rate"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The number of successful RESTful API requests in 1s/3s/5s divided by the total number of RESTful API  request attempts."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Average request delay"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The sum of delay of all RESTful API requests divided by the total number of successful RESTful API requests."
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
