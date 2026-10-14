import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Data Insights",
  description: "Introduces Agora Analytics for Agora Chat."
};
export let _markdown = `

## Introduction [#introduction]

[Agora Analytics](/en/realtime-media/agora-analytics/product-overview) provides periodic analysis of usage and quality data for [Chat](/en/realtime-media/im), helping you keep track of usage trends and quality details.

### Feature overview [#feature-overview]

Agora Analytics offers the following features for Chat:

* Automatic collection, processing, and storage of usage and quality metrics data. This data has a delay of one minute.
* Display of current and historical data at the user, group chat, and chat room levels, as well as historical trends in message count and message type.
* Display of the number of request attempts, request success rate, and request delay of API calls at the client side and server side.

### Enable Chat-related features [#enable-chat-related-features]

After [enabling and configuring Chat Service](/en/realtime-media/im/get-started/enable), the Chat-related features in Agora Analytics are enabled by default and are free to use. No additional operation is required.

## Usage Insights [#usage-insights]

Follow these steps to view the Chat Usage Insights page:

1. Log in to [Agora Console](https://console.agora.io/), and click **Agora Analytics** > **Chat Usage Insights** in the left menu bar.
2. In the upper left corner, select the project you want to view from the drop-down menu.
3. Click the **Scale Statistics** or **Message Statistics** tab at the top of the page.

### Scale Statistics [#scale-statistics]

The Scale Statistics page shows the scale of users, group chats, and chat rooms on the current day and within a past period. This page includes the following sections:

|                  | Description                                                                                                                      | Notes                                                                                                                                                                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Today's Overview | Values of key usage metrics as of today. For a detailed description of each metric, see [Chat glossary](./chat-data-metrics.md). | N/A                                                                                                                                                                                                                           |
| Historical Data  | Line charts and bar charts showing how the metric values change in a certain time range.                                         | * The maximum time range to query is the past 30 days.
* Each metric in this section is calculated at an interval of a day, and the data has a one-minute delay, except for daily chat room PCU, which has a 10-minute delay. |

![](https://web-cdn.agora.io/docs-files/1656493263570)

![](https://web-cdn.agora.io/docs-files/1656491897724)

Taking the historical data for chat rooms as an example:

* The red bar chart represents the number of new chat rooms.
* The cyan bar chart represents the number of disbanded chat rooms.
* Line charts are used for total chat rooms, peak concurrent users, and daily active chat rooms.

To hide the bar chart or line chart for a metric, click the corresponding legend.

### Message Statistics [#message-statistics]

The Message Statistics page shows the historical numbers of messages and the distribution of message types. This page includes the following sections:

|                      | Description                                                                                                                                                                                                            | Notes                                                                                                                                                             |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message Count Trends | Line charts showing how the total numbers of messages change within a certain time range. For a detailed description of each metric, see [Chat glossary](./chat-data-metrics.md).                                      | * The maximum time range to query is the past 6 months.
* Each metric in this section is calculated at an interval of a day, and the data has a one-minute delay. |
| Message Type Trends  | Line charts showing the number of messages by type in a certain time range, and pie charts showing the message type breakdown. For a detailed description of each metric, see [Chat glossary](./chat-data-metrics.md). | Same as Message Count Trends                                                                                                                                      |

![](https://web-cdn.agora.io/docs-files/1656491965158)

![](https://web-cdn.agora.io/docs-files/1656492249498)

Taking uplink message trends of chat rooms as an example:

* By default, the pie chart shows the message type breakdown within the selected time range.
* If you click a data point in the line chart on the left, the pie chart updates to show the message type breakdown on that specific day.

## Quality Insights [#quality-insights]

Follow these steps to view Chat quality insights:

1. Log in to [Agora Console](https://console.agora.io/), and click **Agora Analytics** > **Chat Quality Insights** in the left menu bar.
2. In the upper left corner, select the project you want to view from the drop-down menu.
3. In the upper right corner, select a unit and duration to view end-user and server-side API data. The default is the last 30 minutes by minute.
4. Click the **End-user Data** or **Server API Data** tab at the top of the page.

   <CalloutContainer type="info">
     <CalloutDescription>
       You can query any data within the last 7 days. If you view the data by hour, the time range of a single query cannot exceed 24 hours. If you view the data by minute, the time range of a single query cannot exceed 30 minutes.
     </CalloutDescription>
   </CalloutContainer>

### End-user Data [#end-user-data]

The End-user Data section shows the number of request attempts, request success rate, and average request delay of client-side APIs. For details on metric types and definitions, see [Chat glossary](./chat-data-metrics.md).

To present the data more intuitively, different metrics use different charts:

| Metric                        | Map (on the left)                                                                                                                                        | Chart (on the right) |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Request attempts              | The higher the number of request attempts, the darker the color of the area.                                                                             | Line chart           |
| 1s/3s/5s request success rate | The higher the number of request attempts, the darker the color of the area. The larger the bubble, the lower the request success rate in that area.     | Line chart           |
| Request delay                 | The higher the number of request attempts, the darker the color of the area. The larger the bubble, the higher the average request delay in that region. | Heat map             |

![](https://web-cdn.agora.io/docs-files/1656492270872)

### Server API Data [#server-api-data]

The Server API Data section shows the number of request attempts, request success rate, and average request delay of server-side RESTful APIs. For details on metric types and definitions, see [Chat glossary](./chat-data-metrics.md).

<CalloutContainer type="info">
  <CalloutDescription>
    Server API data includes the RESTful API calls made by client SDKs. For example, group chat operations in the client SDK are implemented by calling RESTful APIs, so they are counted in Server API Data.
  </CalloutDescription>
</CalloutContainer>

To present the data more intuitively, different metrics use different charts:

| Metric                        | Chart      |
| ----------------------------- | ---------- |
| Request attempts              | Line chart |
| 1s/3s/5s request success rate | Line chart |
| Average request delay         | Heat map   |

![](https://web-cdn.agora.io/docs-files/1656493809585)
`;
export let structuredData = {
  contents: [{
    heading: "introduction",
    content: "Agora Analytics provides periodic analysis of usage and quality data for Chat, helping you keep track of usage trends and quality details."
  }, {
    heading: "feature-overview",
    content: "Agora Analytics offers the following features for Chat:"
  }, {
    heading: "feature-overview",
    content: "Automatic collection, processing, and storage of usage and quality metrics data. This data has a delay of one minute."
  }, {
    heading: "feature-overview",
    content: "Display of current and historical data at the user, group chat, and chat room levels, as well as historical trends in message count and message type."
  }, {
    heading: "feature-overview",
    content: "Display of the number of request attempts, request success rate, and request delay of API calls at the client side and server side."
  }, {
    heading: "enable-chat-related-features",
    content: "After enabling and configuring Chat Service, the Chat-related features in Agora Analytics are enabled by default and are free to use. No additional operation is required."
  }, {
    heading: "usage-insights",
    content: "Follow these steps to view the Chat Usage Insights page:"
  }, {
    heading: "usage-insights",
    content: "Log in to Agora Console, and click **Agora Analytics** > **Chat Usage Insights** in the left menu bar."
  }, {
    heading: "usage-insights",
    content: "In the upper left corner, select the project you want to view from the drop-down menu."
  }, {
    heading: "usage-insights",
    content: "Click the **Scale Statistics** or **Message Statistics** tab at the top of the page."
  }, {
    heading: "scale-statistics",
    content: "The Scale Statistics page shows the scale of users, group chats, and chat rooms on the current day and within a past period. This page includes the following sections:"
  }, {
    heading: "scale-statistics",
    content: "Description"
  }, {
    heading: "scale-statistics",
    content: "Notes"
  }, {
    heading: "scale-statistics",
    content: "Today's Overview"
  }, {
    heading: "scale-statistics",
    content: "Values of key usage metrics as of today. For a detailed description of each metric, see Chat glossary."
  }, {
    heading: "scale-statistics",
    content: "N/A"
  }, {
    heading: "scale-statistics",
    content: "Historical Data"
  }, {
    heading: "scale-statistics",
    content: "Line charts and bar charts showing how the metric values change in a certain time range."
  }, {
    heading: "scale-statistics",
    content: `* The maximum time range to query is the past 30 days.
* Each metric in this section is calculated at an interval of a day, and the data has a one-minute delay, except for daily chat room PCU, which has a 10-minute delay.`
  }, {
    heading: "scale-statistics",
    content: "Taking the historical data for chat rooms as an example:"
  }, {
    heading: "scale-statistics",
    content: "The red bar chart represents the number of new chat rooms."
  }, {
    heading: "scale-statistics",
    content: "The cyan bar chart represents the number of disbanded chat rooms."
  }, {
    heading: "scale-statistics",
    content: "Line charts are used for total chat rooms, peak concurrent users, and daily active chat rooms."
  }, {
    heading: "scale-statistics",
    content: "To hide the bar chart or line chart for a metric, click the corresponding legend."
  }, {
    heading: "message-statistics",
    content: "The Message Statistics page shows the historical numbers of messages and the distribution of message types. This page includes the following sections:"
  }, {
    heading: "message-statistics",
    content: "Description"
  }, {
    heading: "message-statistics",
    content: "Notes"
  }, {
    heading: "message-statistics",
    content: "Message Count Trends"
  }, {
    heading: "message-statistics",
    content: "Line charts showing how the total numbers of messages change within a certain time range. For a detailed description of each metric, see Chat glossary."
  }, {
    heading: "message-statistics",
    content: `* The maximum time range to query is the past 6 months.
* Each metric in this section is calculated at an interval of a day, and the data has a one-minute delay.`
  }, {
    heading: "message-statistics",
    content: "Message Type Trends"
  }, {
    heading: "message-statistics",
    content: "Line charts showing the number of messages by type in a certain time range, and pie charts showing the message type breakdown. For a detailed description of each metric, see Chat glossary."
  }, {
    heading: "message-statistics",
    content: "Same as Message Count Trends"
  }, {
    heading: "message-statistics",
    content: "Taking uplink message trends of chat rooms as an example:"
  }, {
    heading: "message-statistics",
    content: "By default, the pie chart shows the message type breakdown within the selected time range."
  }, {
    heading: "message-statistics",
    content: "If you click a data point in the line chart on the left, the pie chart updates to show the message type breakdown on that specific day."
  }, {
    heading: "quality-insights",
    content: "Follow these steps to view Chat quality insights:"
  }, {
    heading: "quality-insights",
    content: "Log in to Agora Console, and click **Agora Analytics** > **Chat Quality Insights** in the left menu bar."
  }, {
    heading: "quality-insights",
    content: "In the upper left corner, select the project you want to view from the drop-down menu."
  }, {
    heading: "quality-insights",
    content: "In the upper right corner, select a unit and duration to view end-user and server-side API data. The default is the last 30 minutes by minute."
  }, {
    heading: "quality-insights",
    content: "Click the **End-user Data** or **Server API Data** tab at the top of the page."
  }, {
    heading: "quality-insights",
    content: "You can query any data within the last 7 days. If you view the data by hour, the time range of a single query cannot exceed 24 hours. If you view the data by minute, the time range of a single query cannot exceed 30 minutes."
  }, {
    heading: "end-user-data",
    content: "The End-user Data section shows the number of request attempts, request success rate, and average request delay of client-side APIs. For details on metric types and definitions, see Chat glossary."
  }, {
    heading: "end-user-data",
    content: "To present the data more intuitively, different metrics use different charts:"
  }, {
    heading: "end-user-data",
    content: "Metric"
  }, {
    heading: "end-user-data",
    content: "Map (on the left)"
  }, {
    heading: "end-user-data",
    content: "Chart (on the right)"
  }, {
    heading: "end-user-data",
    content: "Request attempts"
  }, {
    heading: "end-user-data",
    content: "The higher the number of request attempts, the darker the color of the area."
  }, {
    heading: "end-user-data",
    content: "Line chart"
  }, {
    heading: "end-user-data",
    content: "1s/3s/5s request success rate"
  }, {
    heading: "end-user-data",
    content: "The higher the number of request attempts, the darker the color of the area. The larger the bubble, the lower the request success rate in that area."
  }, {
    heading: "end-user-data",
    content: "Line chart"
  }, {
    heading: "end-user-data",
    content: "Request delay"
  }, {
    heading: "end-user-data",
    content: "The higher the number of request attempts, the darker the color of the area. The larger the bubble, the higher the average request delay in that region."
  }, {
    heading: "end-user-data",
    content: "Heat map"
  }, {
    heading: "server-api-data",
    content: "The Server API Data section shows the number of request attempts, request success rate, and average request delay of server-side RESTful APIs. For details on metric types and definitions, see Chat glossary."
  }, {
    heading: "server-api-data",
    content: "Server API data includes the RESTful API calls made by client SDKs. For example, group chat operations in the client SDK are implemented by calling RESTful APIs, so they are counted in Server API Data."
  }, {
    heading: "server-api-data",
    content: "To present the data more intuitively, different metrics use different charts:"
  }, {
    heading: "server-api-data",
    content: "Metric"
  }, {
    heading: "server-api-data",
    content: "Chart"
  }, {
    heading: "server-api-data",
    content: "Request attempts"
  }, {
    heading: "server-api-data",
    content: "Line chart"
  }, {
    heading: "server-api-data",
    content: "1s/3s/5s request success rate"
  }, {
    heading: "server-api-data",
    content: "Line chart"
  }, {
    heading: "server-api-data",
    content: "Average request delay"
  }, {
    heading: "server-api-data",
    content: "Heat map"
  }],
  headings: [{
    id: "introduction",
    content: "Introduction"
  }, {
    id: "feature-overview",
    content: "Feature overview"
  }, {
    id: "enable-chat-related-features",
    content: "Enable Chat-related features"
  }, {
    id: "usage-insights",
    content: "Usage Insights"
  }, {
    id: "scale-statistics",
    content: "Scale Statistics"
  }, {
    id: "message-statistics",
    content: "Message Statistics"
  }, {
    id: "quality-insights",
    content: "Quality Insights"
  }, {
    id: "end-user-data",
    content: "End-user Data"
  }, {
    id: "server-api-data",
    content: "Server API Data"
  }]
};
export let toc = [{
  depth: 2,
  url: "#introduction",
  title: _jsx(_Fragment, {
    children: "Introduction"
  })
}, {
  depth: 3,
  url: "#feature-overview",
  title: _jsx(_Fragment, {
    children: "Feature overview"
  })
}, {
  depth: 3,
  url: "#enable-chat-related-features",
  title: _jsx(_Fragment, {
    children: "Enable Chat-related features"
  })
}, {
  depth: 2,
  url: "#usage-insights",
  title: _jsx(_Fragment, {
    children: "Usage Insights"
  })
}, {
  depth: 3,
  url: "#scale-statistics",
  title: _jsx(_Fragment, {
    children: "Scale Statistics"
  })
}, {
  depth: 3,
  url: "#message-statistics",
  title: _jsx(_Fragment, {
    children: "Message Statistics"
  })
}, {
  depth: 2,
  url: "#quality-insights",
  title: _jsx(_Fragment, {
    children: "Quality Insights"
  })
}, {
  depth: 3,
  url: "#end-user-data",
  title: _jsx(_Fragment, {
    children: "End-user Data"
  })
}, {
  depth: 3,
  url: "#server-api-data",
  title: _jsx(_Fragment, {
    children: "Server API Data"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
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
    children: [_jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/product-overview",
        children: "Agora Analytics"
      }), " provides periodic analysis of usage and quality data for ", _jsx(_components.a, {
        href: "/en/realtime-media/im",
        children: "Chat"
      }), ", helping you keep track of usage trends and quality details."]
    }), `
`, _jsx(_components.h3, {
      id: "feature-overview",
      children: "Feature overview"
    }), `
`, _jsx(_components.p, {
      children: "Agora Analytics offers the following features for Chat:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Automatic collection, processing, and storage of usage and quality metrics data. This data has a delay of one minute."
      }), `
`, _jsx(_components.li, {
        children: "Display of current and historical data at the user, group chat, and chat room levels, as well as historical trends in message count and message type."
      }), `
`, _jsx(_components.li, {
        children: "Display of the number of request attempts, request success rate, and request delay of API calls at the client side and server side."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enable-chat-related-features",
      children: "Enable Chat-related features"
    }), `
`, _jsxs(_components.p, {
      children: ["After ", _jsx(_components.a, {
        href: "/en/realtime-media/im/get-started/enable",
        children: "enabling and configuring Chat Service"
      }), ", the Chat-related features in Agora Analytics are enabled by default and are free to use. No additional operation is required."]
    }), `
`, _jsx(_components.h2, {
      id: "usage-insights",
      children: "Usage Insights"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to view the Chat Usage Insights page:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Log in to ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ", and click ", _jsx(_components.strong, {
          children: "Agora Analytics"
        }), " > ", _jsx(_components.strong, {
          children: "Chat Usage Insights"
        }), " in the left menu bar."]
      }), `
`, _jsx(_components.li, {
        children: "In the upper left corner, select the project you want to view from the drop-down menu."
      }), `
`, _jsxs(_components.li, {
        children: ["Click the ", _jsx(_components.strong, {
          children: "Scale Statistics"
        }), " or ", _jsx(_components.strong, {
          children: "Message Statistics"
        }), " tab at the top of the page."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "scale-statistics",
      children: "Scale Statistics"
    }), `
`, _jsx(_components.p, {
      children: "The Scale Statistics page shows the scale of users, group chats, and chat rooms on the current day and within a past period. This page includes the following sections:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {}), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Notes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Today's Overview"
          }), _jsxs(_components.td, {
            children: ["Values of key usage metrics as of today. For a detailed description of each metric, see ", _jsx(_components.a, {
              href: "./chat-data-metrics.md",
              children: "Chat glossary"
            }), "."]
          }), _jsx(_components.td, {
            children: "N/A"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Historical Data"
          }), _jsx(_components.td, {
            children: "Line charts and bar charts showing how the metric values change in a certain time range."
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The maximum time range to query is the past 30 days."
              }), `
`, _jsx(_components.li, {
                children: "Each metric in this section is calculated at an interval of a day, and the data has a one-minute delay, except for daily chat room PCU, which has a 10-minute delay."
              }), `
`]
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1656493263570",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1656491897724",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Taking the historical data for chat rooms as an example:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The red bar chart represents the number of new chat rooms."
      }), `
`, _jsx(_components.li, {
        children: "The cyan bar chart represents the number of disbanded chat rooms."
      }), `
`, _jsx(_components.li, {
        children: "Line charts are used for total chat rooms, peak concurrent users, and daily active chat rooms."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To hide the bar chart or line chart for a metric, click the corresponding legend."
    }), `
`, _jsx(_components.h3, {
      id: "message-statistics",
      children: "Message Statistics"
    }), `
`, _jsx(_components.p, {
      children: "The Message Statistics page shows the historical numbers of messages and the distribution of message types. This page includes the following sections:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {}), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Notes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Message Count Trends"
          }), _jsxs(_components.td, {
            children: ["Line charts showing how the total numbers of messages change within a certain time range. For a detailed description of each metric, see ", _jsx(_components.a, {
              href: "./chat-data-metrics.md",
              children: "Chat glossary"
            }), "."]
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The maximum time range to query is the past 6 months."
              }), `
`, _jsx(_components.li, {
                children: "Each metric in this section is calculated at an interval of a day, and the data has a one-minute delay."
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Message Type Trends"
          }), _jsxs(_components.td, {
            children: ["Line charts showing the number of messages by type in a certain time range, and pie charts showing the message type breakdown. For a detailed description of each metric, see ", _jsx(_components.a, {
              href: "./chat-data-metrics.md",
              children: "Chat glossary"
            }), "."]
          }), _jsx(_components.td, {
            children: "Same as Message Count Trends"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1656491965158",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1656492249498",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Taking uplink message trends of chat rooms as an example:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "By default, the pie chart shows the message type breakdown within the selected time range."
      }), `
`, _jsx(_components.li, {
        children: "If you click a data point in the line chart on the left, the pie chart updates to show the message type breakdown on that specific day."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "quality-insights",
      children: "Quality Insights"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to view Chat quality insights:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), ", and click ", _jsx(_components.strong, {
            children: "Agora Analytics"
          }), " > ", _jsx(_components.strong, {
            children: "Chat Quality Insights"
          }), " in the left menu bar."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In the upper left corner, select the project you want to view from the drop-down menu."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In the upper right corner, select a unit and duration to view end-user and server-side API data. The default is the last 30 minutes by minute."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click the ", _jsx(_components.strong, {
            children: "End-user Data"
          }), " or ", _jsx(_components.strong, {
            children: "Server API Data"
          }), " tab at the top of the page."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "You can query any data within the last 7 days. If you view the data by hour, the time range of a single query cannot exceed 24 hours. If you view the data by minute, the time range of a single query cannot exceed 30 minutes."
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "end-user-data",
      children: "End-user Data"
    }), `
`, _jsxs(_components.p, {
      children: ["The End-user Data section shows the number of request attempts, request success rate, and average request delay of client-side APIs. For details on metric types and definitions, see ", _jsx(_components.a, {
        href: "./chat-data-metrics.md",
        children: "Chat glossary"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "To present the data more intuitively, different metrics use different charts:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Metric"
          }), _jsx(_components.th, {
            children: "Map (on the left)"
          }), _jsx(_components.th, {
            children: "Chart (on the right)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Request attempts"
          }), _jsx(_components.td, {
            children: "The higher the number of request attempts, the darker the color of the area."
          }), _jsx(_components.td, {
            children: "Line chart"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1s/3s/5s request success rate"
          }), _jsx(_components.td, {
            children: "The higher the number of request attempts, the darker the color of the area. The larger the bubble, the lower the request success rate in that area."
          }), _jsx(_components.td, {
            children: "Line chart"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Request delay"
          }), _jsx(_components.td, {
            children: "The higher the number of request attempts, the darker the color of the area. The larger the bubble, the higher the average request delay in that region."
          }), _jsx(_components.td, {
            children: "Heat map"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1656492270872",
        alt: ""
      })
    }), `
`, _jsx(_components.h3, {
      id: "server-api-data",
      children: "Server API Data"
    }), `
`, _jsxs(_components.p, {
      children: ["The Server API Data section shows the number of request attempts, request success rate, and average request delay of server-side RESTful APIs. For details on metric types and definitions, see ", _jsx(_components.a, {
        href: "./chat-data-metrics.md",
        children: "Chat glossary"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Server API data includes the RESTful API calls made by client SDKs. For example, group chat operations in the client SDK are implemented by calling RESTful APIs, so they are counted in Server API Data."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "To present the data more intuitively, different metrics use different charts:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Metric"
          }), _jsx(_components.th, {
            children: "Chart"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Request attempts"
          }), _jsx(_components.td, {
            children: "Line chart"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1s/3s/5s request success rate"
          }), _jsx(_components.td, {
            children: "Line chart"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Average request delay"
          }), _jsx(_components.td, {
            children: "Heat map"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1656493809585",
        alt: ""
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
