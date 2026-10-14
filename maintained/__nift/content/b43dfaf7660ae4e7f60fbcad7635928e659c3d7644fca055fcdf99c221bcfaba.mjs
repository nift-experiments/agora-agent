import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Real-time query",
  description: "Provides the overview of metrics available in Agora Chat."
};
export let _markdown = `

Agora Chat provides the following statistical data to help you monitor the usage in Agora Console:

* **Hotspot Data**: Query the top 50 active users, chat groups, and chat rooms within any time range.
* **Message Delivery**: Examine the delivery status of messages.
* **Device Log**: Retrieve client logs.
* **User Connection Status**: Query end users' presence (online or offline).

![Real-time query](https://assets-docs.agora.io/images/im/real-time-query.png)

## Real-time query overview [#real-time-query-overview]

The real-time query overview page provides a quick insight into the rest of the statistical data, which includes the following:

* **Activity**: Active users, groups, and chat rooms within the previous 30 minutes, updated every minute.
* **Percentage Of Daily Login Devices**: The number of devices logged-in on the day of viewing, updated every minute.
* **Message Volume Query**: The message volume for private chats, group chats, and chat rooms, updated every 10 minutes.

![Real-time query overview page](https://assets-docs.agora.io/images/im/real-time-query-overview.png)

## Hotspot Data [#hotspot-data]

To query the data, select the hotspot type and the required time range, down to minutes:

![Hotspot data](https://assets-docs.agora.io/images/im/hot-spot-data.png)

## Device Log [#device-log]

Query and download user device logs by specifying the user ID:

![Device log](https://assets-docs.agora.io/images/im/device-log.png)

## User Connection Status [#user-connection-status]

Query the user's historical connection status by user ID and time range in the previous three days.

![User connection status](https://assets-docs.agora.io/images/im/user-connection-status.png)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Chat provides the following statistical data to help you monitor the usage in Agora Console:"
  }, {
    heading: undefined,
    content: "**Hotspot Data**: Query the top 50 active users, chat groups, and chat rooms within any time range."
  }, {
    heading: undefined,
    content: "**Message Delivery**: Examine the delivery status of messages."
  }, {
    heading: undefined,
    content: "**Device Log**: Retrieve client logs."
  }, {
    heading: undefined,
    content: "**User Connection Status**: Query end users' presence (online or offline)."
  }, {
    heading: "real-time-query-overview",
    content: "The real-time query overview page provides a quick insight into the rest of the statistical data, which includes the following:"
  }, {
    heading: "real-time-query-overview",
    content: "**Activity**: Active users, groups, and chat rooms within the previous 30 minutes, updated every minute."
  }, {
    heading: "real-time-query-overview",
    content: "**Percentage Of Daily Login Devices**: The number of devices logged-in on the day of viewing, updated every minute."
  }, {
    heading: "real-time-query-overview",
    content: "**Message Volume Query**: The message volume for private chats, group chats, and chat rooms, updated every 10 minutes."
  }, {
    heading: "hotspot-data",
    content: "To query the data, select the hotspot type and the required time range, down to minutes:"
  }, {
    heading: "device-log",
    content: "Query and download user device logs by specifying the user ID:"
  }, {
    heading: "user-connection-status",
    content: "Query the user's historical connection status by user ID and time range in the previous three days."
  }],
  headings: [{
    id: "real-time-query-overview",
    content: "Real-time query overview"
  }, {
    id: "hotspot-data",
    content: "Hotspot Data"
  }, {
    id: "device-log",
    content: "Device Log"
  }, {
    id: "user-connection-status",
    content: "User Connection Status"
  }]
};
export let toc = [{
  depth: 2,
  url: "#real-time-query-overview",
  title: _jsx(_Fragment, {
    children: "Real-time query overview"
  })
}, {
  depth: 2,
  url: "#hotspot-data",
  title: _jsx(_Fragment, {
    children: "Hotspot Data"
  })
}, {
  depth: 2,
  url: "#device-log",
  title: _jsx(_Fragment, {
    children: "Device Log"
  })
}, {
  depth: 2,
  url: "#user-connection-status",
  title: _jsx(_Fragment, {
    children: "User Connection Status"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora Chat provides the following statistical data to help you monitor the usage in Agora Console:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Hotspot Data"
        }), ": Query the top 50 active users, chat groups, and chat rooms within any time range."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Message Delivery"
        }), ": Examine the delivery status of messages."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Device Log"
        }), ": Retrieve client logs."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "User Connection Status"
        }), ": Query end users' presence (online or offline)."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/im/real-time-query.png",
        alt: "Real-time query"
      })
    }), `
`, _jsx(_components.h2, {
      id: "real-time-query-overview",
      children: "Real-time query overview"
    }), `
`, _jsx(_components.p, {
      children: "The real-time query overview page provides a quick insight into the rest of the statistical data, which includes the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Activity"
        }), ": Active users, groups, and chat rooms within the previous 30 minutes, updated every minute."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Percentage Of Daily Login Devices"
        }), ": The number of devices logged-in on the day of viewing, updated every minute."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Message Volume Query"
        }), ": The message volume for private chats, group chats, and chat rooms, updated every 10 minutes."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/im/real-time-query-overview.png",
        alt: "Real-time query overview page"
      })
    }), `
`, _jsx(_components.h2, {
      id: "hotspot-data",
      children: "Hotspot Data"
    }), `
`, _jsx(_components.p, {
      children: "To query the data, select the hotspot type and the required time range, down to minutes:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/im/hot-spot-data.png",
        alt: "Hotspot data"
      })
    }), `
`, _jsx(_components.h2, {
      id: "device-log",
      children: "Device Log"
    }), `
`, _jsx(_components.p, {
      children: "Query and download user device logs by specifying the user ID:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/im/device-log.png",
        alt: "Device log"
      })
    }), `
`, _jsx(_components.h2, {
      id: "user-connection-status",
      children: "User Connection Status"
    }), `
`, _jsx(_components.p, {
      children: "Query the user's historical connection status by user ID and time range in the previous three days."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/im/user-connection-status.png",
        alt: "User connection status"
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
