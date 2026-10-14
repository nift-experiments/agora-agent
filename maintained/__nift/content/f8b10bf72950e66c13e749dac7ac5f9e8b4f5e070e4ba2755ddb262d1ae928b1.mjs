import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora Analytics data insights",
  description: "Introduces Agora Analytics for Agora Chat."
};
export let _markdown = `

## Introduction [#introduction]

[Agora Analytics](/en/realtime-media/agora-analytics/product-overview) provides periodic analysis of usage and quality data for [Chat](../../index), helping you keep track of the usage trends and quality details.

### Feature overview [#feature-overview]

Agora Analytics offers the following features for Chat:

* Automatic collection, processing, and storage of usage and quality metrics data. This data has a delay of one minute.
* Display of current and historical data at the user, chat group, and chat room levels, as well as historical trends in message count and message type.
* Display of the number of request attempts, request success rate, and request delay of API calls at the client side and server side.

### Enable Chat-related features [#enable-chat-related-features]

After [enabling and configuring Chat Service](../../get-started/enable), the Chat-related features in Agora Analytics are enabled by default and are free to use. No additional operation is required.

## Usage Insights [#usage-insights]

Follow these steps to view the Chat Usage Insights page:

1. In [Agora Console](https://console.agora.io), select **Agora Analytics** in the left navigation to open Agora Analytics in a new tab. From the sidebar, select **Chat > Usage Insights**.
2. In the upper left corner, select the project you want to view from the drop-down menu.
3. Click the **Scale Statistics** or **Message Statistics** tab at the top of the page.

### Scale Statistics [#scale-statistics]

The Scale Statistics page shows the scale of users, chat groups, and chat rooms on the current day and within a past period. This page includes the following sections:

|                  | Description                                                                                                                                                    | Notes                                                                                                                                                                                                                         |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Today's Overview | Values of key usage metrics as of today. For a detailed description of each metric, see [Scale Metrics](/en/realtime-media/im/reference/console/data-metrics). | N/A                                                                                                                                                                                                                           |
| Historical Data  | Line charts and bar charts showing how the metric values change in a certain time range.                                                                       | The maximum time range to query is the past 30 days.Each metric in this section is calculated at an interval of a day, and the data has a one-minute delay (except for Daily chat room PCU, which has a delay of 10 minutes). |

![](https://web-cdn.agora.io/docs-files/1656493263570)

![](https://web-cdn.agora.io/docs-files/1656491897724)

Taking the historical data for chat rooms as an example, the bar chart contains the following information:

* The red bar chart represents the number of new chat rooms.
* The cyan bar chart represents the number of disbanded chat rooms.
* Line charts are used for total chat rooms, peak concurrent users, and daily active chat rooms.

To hide the bar chart or line chart for a metric, click the corresponding legend.

### Message Statistics [#message-statistics]

The Message Statistics page shows the historical numbers of messages and distribution of message types. This page includes the following sections:

|                      | Description                                                                                                                                                                                                                                                                                      | Notes                                                                                                                                                        |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message Count Trends | Line charts showing how the total numbers of messages change within a certain time range. For a detailed description of each metric, see [Message metrics](/en/realtime-media/im/reference/console/data-metrics).                                                                                | The maximum time range to query is the past 6 months.Each metric in this section is calculated at an interval of a day, and the data has a one minute delay. |
| Message Type Trends  | Line charts showing the number of messages by type in a certain time range, and pie charts showing the message type breakdown (the percentage of each type of messages). For a detailed description of each metric, see [Message metrics](/en/realtime-media/im/reference/console/data-metrics). | See Message Count Trends                                                                                                                                     |

![](https://web-cdn.agora.io/docs-files/1656491965158)

![](https://web-cdn.agora.io/docs-files/1656492249498)

Taking the uplink message trends of chat rooms as an example, the pie chart contains the following information:

* By default, it shows the message type breakdown within the selected time range.
* If you click a data point in the line chart on the left, the pie chart is updated to show the message type breakdown on that specific day. Click the blue **Back** button to restore the default pie chart.

## Quality Insights [#quality-insights]

Follow these steps to view the Chat quality insights page:

1. In [Agora Console](https://console.agora.io), select **Agora Analytics** in the left navigation to open Agora Analytics in a new tab. From the sidebar, select **Chat > Quality Insights**.

2. In the upper left corner, select the project you want to view from the drop-down menu.

3. (Optional) In the upper right corner, select a unit and duration to view the end-user and server-side API data. The default is to view the last 30 minutes of data by minute.

   <CalloutContainer type="info">
     <CalloutDescription>
       You can query any data within the last 7 days. If you view the data by hour, the time range of a single query cannot exceed 24 hours; if you view the data by minute, the time range of a single query cannot exceed 30 minutes.
     </CalloutDescription>
   </CalloutContainer>

4. Click the **End-user Data** or **Server API Data** tab at the top of the page.

### End-user Data [#end-user-data]

The End-user Data section shows the number of request attempts, request success rate, and average request delay of client-side APIs. For details on the metric types and definitions, see [End-user API metrics](/en/realtime-media/im/reference/console/data-metrics).
[End-user API metrics](./data-metrics).

To present the data more intuitively, different metrics use different charts:

| Metric                        | Map (on the left)                                                                                                                                        | Chart (on the right)                                                                                                                                                                                                                           |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Request attempts              | The higher the number of request attempts, the darker the color of the area.                                                                             | Line chart.                                                                                                                                                                                                                                    |
| 1s/3s/5s request success rate | The higher the number of request attempts, the darker the color of the area. The larger the bubble, the lower the request success rate in that area.     | Line chart.                                                                                                                                                                                                                                    |
| Request delay                 | The higher the number of request attempts, the darker the color of the area. The larger the bubble, the higher the average request delay in that region. | Heat map chart, where the horizontal axis is time and the vertical axis is the predefined value buckets of average request delay. The darker the color of the cell, the higher the number of request attempts in the corresponding time range. |

<CalloutContainer type="info">
  <CalloutDescription>
    When entering the page for the first time, the chart shows the aggregated metric value of all areas on the map. After clicking an area on the map, the chart is updated to show the metric value of that area alone.
  </CalloutDescription>
</CalloutContainer>

![](https://web-cdn.agora.io/docs-files/1656492270872)

### Server API Data [#server-api-data]

The Server API Data section shows the number of request attempts, request success rate, and average request delay of server-side RESTful APIs. For details on the metric types and definitions, see [Server API metrics](/en/realtime-media/im/reference/console/data-metrics).
[Server API metrics](./data-metrics).

<CalloutContainer type="info">
  <CalloutDescription>
    Server API data includes the RESTful API calls made by client SDKs. For example, operations on the client SDK is implemented by calling the RESTful API, so it is counted in the Server API data.
  </CalloutDescription>
</CalloutContainer>

To present the data more intuitively, different metrics use different charts:

| Metric                        | Chart                                                                                                                                                                                                                                          |
| :---------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Request attempts              | Line chart.                                                                                                                                                                                                                                    |
| 1s/3s/5s request success rate | Line chart.                                                                                                                                                                                                                                    |
| Average request delay         | Heat map chart, where the horizontal axis is time and the vertical axis is the predefined value buckets of average request delay. The darker the color of the cell, the higher the number of request attempts in the corresponding time range. |

![](https://web-cdn.agora.io/docs-files/1656493809585)
`;
export let structuredData = {
  contents: [{
    heading: "introduction",
    content: "Agora Analytics provides periodic analysis of usage and quality data for Chat, helping you keep track of the usage trends and quality details."
  }, {
    heading: "feature-overview",
    content: "Agora Analytics offers the following features for Chat:"
  }, {
    heading: "feature-overview",
    content: "Automatic collection, processing, and storage of usage and quality metrics data. This data has a delay of one minute."
  }, {
    heading: "feature-overview",
    content: "Display of current and historical data at the user, chat group, and chat room levels, as well as historical trends in message count and message type."
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
    content: "In Agora Console, select **Agora Analytics** in the left navigation to open Agora Analytics in a new tab. From the sidebar, select **Chat > Usage Insights**."
  }, {
    heading: "usage-insights",
    content: "In the upper left corner, select the project you want to view from the drop-down menu."
  }, {
    heading: "usage-insights",
    content: "Click the **Scale Statistics** or **Message Statistics** tab at the top of the page."
  }, {
    heading: "scale-statistics",
    content: "The Scale Statistics page shows the scale of users, chat groups, and chat rooms on the current day and within a past period. This page includes the following sections:"
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
    content: "Values of key usage metrics as of today. For a detailed description of each metric, see Scale Metrics."
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
    content: "The maximum time range to query is the past 30 days.Each metric in this section is calculated at an interval of a day, and the data has a one-minute delay (except for Daily chat room PCU, which has a delay of 10 minutes)."
  }, {
    heading: "scale-statistics",
    content: "Taking the historical data for chat rooms as an example, the bar chart contains the following information:"
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
    content: "The Message Statistics page shows the historical numbers of messages and distribution of message types. This page includes the following sections:"
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
    content: "Line charts showing how the total numbers of messages change within a certain time range. For a detailed description of each metric, see Message metrics."
  }, {
    heading: "message-statistics",
    content: "The maximum time range to query is the past 6 months.Each metric in this section is calculated at an interval of a day, and the data has a one minute delay."
  }, {
    heading: "message-statistics",
    content: "Message Type Trends"
  }, {
    heading: "message-statistics",
    content: "Line charts showing the number of messages by type in a certain time range, and pie charts showing the message type breakdown (the percentage of each type of messages). For a detailed description of each metric, see Message metrics."
  }, {
    heading: "message-statistics",
    content: "See Message Count Trends"
  }, {
    heading: "message-statistics",
    content: "Taking the uplink message trends of chat rooms as an example, the pie chart contains the following information:"
  }, {
    heading: "message-statistics",
    content: "By default, it shows the message type breakdown within the selected time range."
  }, {
    heading: "message-statistics",
    content: "If you click a data point in the line chart on the left, the pie chart is updated to show the message type breakdown on that specific day. Click the blue **Back** button to restore the default pie chart."
  }, {
    heading: "quality-insights",
    content: "Follow these steps to view the Chat quality insights page:"
  }, {
    heading: "quality-insights",
    content: "In Agora Console, select **Agora Analytics** in the left navigation to open Agora Analytics in a new tab. From the sidebar, select **Chat > Quality Insights**."
  }, {
    heading: "quality-insights",
    content: "In the upper left corner, select the project you want to view from the drop-down menu."
  }, {
    heading: "quality-insights",
    content: "(Optional) In the upper right corner, select a unit and duration to view the end-user and server-side API data. The default is to view the last 30 minutes of data by minute."
  }, {
    heading: "quality-insights",
    content: "You can query any data within the last 7 days. If you view the data by hour, the time range of a single query cannot exceed 24 hours; if you view the data by minute, the time range of a single query cannot exceed 30 minutes."
  }, {
    heading: "quality-insights",
    content: "Click the **End-user Data** or **Server API Data** tab at the top of the page."
  }, {
    heading: "end-user-data",
    content: `The End-user Data section shows the number of request attempts, request success rate, and average request delay of client-side APIs. For details on the metric types and definitions, see End-user API metrics.
End-user API metrics.`
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
    content: "Line chart."
  }, {
    heading: "end-user-data",
    content: "1s/3s/5s request success rate"
  }, {
    heading: "end-user-data",
    content: "The higher the number of request attempts, the darker the color of the area. The larger the bubble, the lower the request success rate in that area."
  }, {
    heading: "end-user-data",
    content: "Line chart."
  }, {
    heading: "end-user-data",
    content: "Request delay"
  }, {
    heading: "end-user-data",
    content: "The higher the number of request attempts, the darker the color of the area. The larger the bubble, the higher the average request delay in that region."
  }, {
    heading: "end-user-data",
    content: "Heat map chart, where the horizontal axis is time and the vertical axis is the predefined value buckets of average request delay. The darker the color of the cell, the higher the number of request attempts in the corresponding time range."
  }, {
    heading: "end-user-data",
    content: "When entering the page for the first time, the chart shows the aggregated metric value of all areas on the map. After clicking an area on the map, the chart is updated to show the metric value of that area alone."
  }, {
    heading: "server-api-data",
    content: `The Server API Data section shows the number of request attempts, request success rate, and average request delay of server-side RESTful APIs. For details on the metric types and definitions, see Server API metrics.
Server API metrics.`
  }, {
    heading: "server-api-data",
    content: "Server API data includes the RESTful API calls made by client SDKs. For example, operations on the client SDK is implemented by calling the RESTful API, so it is counted in the Server API data."
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
    content: "Line chart."
  }, {
    heading: "server-api-data",
    content: "1s/3s/5s request success rate"
  }, {
    heading: "server-api-data",
    content: "Line chart."
  }, {
    heading: "server-api-data",
    content: "Average request delay"
  }, {
    heading: "server-api-data",
    content: "Heat map chart, where the horizontal axis is time and the vertical axis is the predefined value buckets of average request delay. The darker the color of the cell, the higher the number of request attempts in the corresponding time range."
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
        href: "../../index",
        children: "Chat"
      }), ", helping you keep track of the usage trends and quality details."]
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
        children: "Display of current and historical data at the user, chat group, and chat room levels, as well as historical trends in message count and message type."
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
        href: "../../get-started/enable",
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
        children: ["In ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        }), ", select ", _jsx(_components.strong, {
          children: "Agora Analytics"
        }), " in the left navigation to open Agora Analytics in a new tab. From the sidebar, select ", _jsx(_components.strong, {
          children: "Chat > Usage Insights"
        }), "."]
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
      children: "The Scale Statistics page shows the scale of users, chat groups, and chat rooms on the current day and within a past period. This page includes the following sections:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Notes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Today's Overview"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Values of key usage metrics as of today. For a detailed description of each metric, see ", _jsx(_components.a, {
              href: "/en/realtime-media/im/reference/console/data-metrics",
              children: "Scale Metrics"
            }), "."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Historical Data"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Line charts and bar charts showing how the metric values change in a certain time range."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The maximum time range to query is the past 30 days.Each metric in this section is calculated at an interval of a day, and the data has a one-minute delay (except for Daily chat room PCU, which has a delay of 10 minutes)."
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
      children: "Taking the historical data for chat rooms as an example, the bar chart contains the following information:"
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
      children: "The Message Statistics page shows the historical numbers of messages and distribution of message types. This page includes the following sections:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Notes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Count Trends"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Line charts showing how the total numbers of messages change within a certain time range. For a detailed description of each metric, see ", _jsx(_components.a, {
              href: "/en/realtime-media/im/reference/console/data-metrics",
              children: "Message metrics"
            }), "."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The maximum time range to query is the past 6 months.Each metric in this section is calculated at an interval of a day, and the data has a one minute delay."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message Type Trends"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Line charts showing the number of messages by type in a certain time range, and pie charts showing the message type breakdown (the percentage of each type of messages). For a detailed description of each metric, see ", _jsx(_components.a, {
              href: "/en/realtime-media/im/reference/console/data-metrics",
              children: "Message metrics"
            }), "."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "See Message Count Trends"
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
      children: "Taking the uplink message trends of chat rooms as an example, the pie chart contains the following information:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "By default, it shows the message type breakdown within the selected time range."
      }), `
`, _jsxs(_components.li, {
        children: ["If you click a data point in the line chart on the left, the pie chart is updated to show the message type breakdown on that specific day. Click the blue ", _jsx(_components.strong, {
          children: "Back"
        }), " button to restore the default pie chart."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "quality-insights",
      children: "Quality Insights"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to view the Chat quality insights page:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          }), ", select ", _jsx(_components.strong, {
            children: "Agora Analytics"
          }), " in the left navigation to open Agora Analytics in a new tab. From the sidebar, select ", _jsx(_components.strong, {
            children: "Chat > Quality Insights"
          }), "."]
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
          children: "(Optional) In the upper right corner, select a unit and duration to view the end-user and server-side API data. The default is to view the last 30 minutes of data by minute."
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "You can query any data within the last 7 days. If you view the data by hour, the time range of a single query cannot exceed 24 hours; if you view the data by minute, the time range of a single query cannot exceed 30 minutes."
            })
          })
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "end-user-data",
      children: "End-user Data"
    }), `
`, _jsxs(_components.p, {
      children: ["The End-user Data section shows the number of request attempts, request success rate, and average request delay of client-side APIs. For details on the metric types and definitions, see ", _jsx(_components.a, {
        href: "/en/realtime-media/im/reference/console/data-metrics",
        children: "End-user API metrics"
      }), `.
`, _jsx(_components.a, {
        href: "./data-metrics",
        children: "End-user API metrics"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "To present the data more intuitively, different metrics use different charts:"
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
            children: "Map (on the left)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Chart (on the right)"
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
            children: "The higher the number of request attempts, the darker the color of the area."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Line chart."
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
            children: "The higher the number of request attempts, the darker the color of the area. The larger the bubble, the lower the request success rate in that area."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Line chart."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request delay"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The higher the number of request attempts, the darker the color of the area. The larger the bubble, the higher the average request delay in that region."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Heat map chart, where the horizontal axis is time and the vertical axis is the predefined value buckets of average request delay. The darker the color of the cell, the higher the number of request attempts in the corresponding time range."
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "When entering the page for the first time, the chart shows the aggregated metric value of all areas on the map. After clicking an area on the map, the chart is updated to show the metric value of that area alone."
        })
      })
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
      children: ["The Server API Data section shows the number of request attempts, request success rate, and average request delay of server-side RESTful APIs. For details on the metric types and definitions, see ", _jsx(_components.a, {
        href: "/en/realtime-media/im/reference/console/data-metrics",
        children: "Server API metrics"
      }), `.
`, _jsx(_components.a, {
        href: "./data-metrics",
        children: "Server API metrics"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Server API data includes the RESTful API calls made by client SDKs. For example, operations on the client SDK is implemented by calling the RESTful API, so it is counted in the Server API data."
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
            style: {
              textAlign: "left"
            },
            children: "Metric"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Chart"
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
            children: "Line chart."
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
            children: "Line chart."
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
            children: "Heat map chart, where the horizontal axis is time and the vertical axis is the predefined value buckets of average request delay. The darker the color of the cell, the higher the number of request attempts in the corresponding time range."
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
