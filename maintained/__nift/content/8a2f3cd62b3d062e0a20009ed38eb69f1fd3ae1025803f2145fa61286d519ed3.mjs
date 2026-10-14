import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Real-time monitoring",
  description: "Provides visualized data for multiple call metrics in real time, so that you can track the status of your Agora RTC SDK projects and discover when a problem occurs."
};
export let _markdown = `

Real-time Monitoring provides the following features:

* Automatic collection, processing, and storage of metrics data, which refreshes every 20 seconds.

* Intuitive diagrams that help you grasp data in multiple dimensions, such as line charts, heat maps, bubble charts, and ranking lists.

* Data synchronization with [Call Search](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search) and [Data Insights](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/data-insight), so that you can easily dive into problem analysis.

## Getting started [#getting-started]

To access the Real-time Monitoring page, do the following:

1. Subscribe to a [pricing plan](../../reference/pricing.md) to enable the **Real-time Monitoring** feature for your project.

2. Log in to [Agora Console](https://console.agora.io/) and click **Agora Analytics** > **Real-time Monitoring** on the left navigation bar.

This section walks you through the Real-time Monitoring page and its basic features.

### Global settings [#global-settings]

All data on the page, except certain heat maps, refreshes every 20 seconds.

You can apply the following global settings to the page:

* Timezone: On the top of the page, select your timezone as **Local** or **UTC**.
* Project: In the upper-left corner of the left navigation bar, select a project.
* Product type: In the upper-right corner of the page, select **Native** or **Web RTC SDK** from the dropdown menu.
* Auto update: In the upper-right corner of the page, uncheck the box for **Auto Update** to stop the data from automatic refreshing. Agora recommends you do this when investigating the metrics data at a specific moment. To resume automatic refreshing, check the box again.

### Real-time scale [#real-time-scale]

![real-time-scale](https://assets-docs.agora.io/images/analytics/rtm-dashboard-scale.png)

The following line charts display data for the last 30 minutes and refresh every 20 seconds:

* **In-call users**
* **Number of in-call channels**
* **Number of Cloud Recording workers**
* **Number of Media Pull workers**
* **Number of Media Push workers**

These metrics are explained in [Scale metrics](#scale-metrics).

The latest value of each metric is displayed above the line chart, and refreshes every 20 seconds.

Each line chart refreshes every 20 seconds. To see the metric value at a specific moment, hover your mouse on a data point.

### Real-time quality [#real-time-quality]

![real-time-quality](https://assets-docs.agora.io/images/analytics/rtm-dashboard-quality.png)

The heat map charts for **Average login time**, **Audio freeze rate**, **Video freeze rate**, and **Network delay rate** display data for the last 30 minutes. The four metrics are explained in [Quality metrics](#quality-metrics).

The latest value of each metric is displayed above the heat map chart, and the tag next to the value shows the diagnosis result of the value. Both the value and the tag refresh every 20 seconds.

Each heat map chart refreshes every 60 seconds. The color of each cell represents the number of users or channels. The darker the color, the higher the number. To see the metric value at a specific moment, hover your mouse on a cell.

Additionally, the heat map charts provide the data sampling feature:

* Channel data sampling: On the chart for **Audio Freeze Rate**, **Video Freeze Rate**, or **Network delay rate**, click a data point to see its ranked channel list. The list is ranked in descending order of the metric value, and includes a maximum of 20 channels. To get more details about a channel, click **Call Details** to use [Call Inspector](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search).
* User data sampling: On the chart for **Average login time**, click a data point to see its ranked user list. The list is ranked in descending order of the metric value, and includes a maximum of 50 users. To get more details about a user, click **Call Details** to use [Call Inspector](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search).

### Alert notification [#alert-notification]

If you have enabled the [Alert Notification](/en/realtime-media/agora-analytics/build/monitor-and-get-alerts/alarm) service, the **Alert Notifications** panel displays the latest three notifications.

![1640934517935](https://web-cdn.agora.io/docs-files/1640934517935)

In this panel, you can do the following:

* Jump to Alert Notification: The upper-right corner shows the number of notifications in the last three hours. Click it to jump to the **Alert Notification** page.

* Jump to Call Search: For each displayed alert notification, click **Call Details** to analyze the call using the [Call Inspector](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search) service.

To enable and configure the Alert Notification service, see [Alert Notification](/en/realtime-media/agora-analytics/build/monitor-and-get-alerts/alarm).

### Region [#region]

![rtm-region](https://assets-docs.agora.io/images/analytics/rtm-region.png)

The **Region** heat map shows the geographical distribution of the video freeze rate and audio freeze rate. The color represents the number of users, and the bubble size represents the metric value.

You can refer to the following tips when navigating through the heat map:

* Select a metric: In the upper-right corner, click to select **Video Freeze Rate** or **Audio Freeze Rate**.

* Select a map: In the upper-right corner, choose **World map**, **China map**, or **US map** from the dropdown menu.

* To see the metric value in a country or region, hover your mouse on the map.

* Channel data sampling: Click a country or region or a bubble to see its ranked channel list. The list is ranked in descending order of the metric value, and includes a maximum of 20 channels. To further analyze a channel, click **Call details** to use [Call Inspector](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search).

### Ranked channel lists [#ranked-channel-lists]

This panel includes the following ranked channel lists:

* **Ranked by users**: The list of channels that have the most concurrent users.

* **Ranked by freeze rates**: The lists of key channels that have relatively high video or audio freeze rates.

### Multidimensional analysis [#multidimensional-analysis]

The bubble charts of **Video Freeze Rate** and **Audio Freeze Rate** show distributions of the two metrics from the perspectives of network type, SDK version, and device type.

![1634267180282](https://web-cdn.agora.io/docs-files/1634267180282)

In each bubble chart, the X coordinate is the number of concurrent users, and the Y coordinate is the metric value. The bubble color represents whether the metric value is normal. If the video freeze rate exceeds 5%, or the audio freeze rate exceeds 3%, the bubble turns red.

To see the specific data, hover your mouse on a bubble.

## Key terms [#key-terms]

### Scale metrics [#scale-metrics]

| Metric                            | Description                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| In-call users                     | The total number of users across all in-use channels. A user joining multiple channels is counted multiple times. |
| Number of in-use channels         | The total number of in-use channels, as determined by uniquely named channels that contain users.                 |
| Number of Cloud Recording workers | See [Cloud Recording](/en/realtime-media/cloud-recording).                                                        |
| Number of Media Pull workers      | See [Media Pull](/en/realtime-media/media-pull).                                                                  |
| Number of Media Push workers      | See [Media Push](/en/realtime-media/media-push).                                                                  |

### Quality metrics [#quality-metrics]

| Metric             | Description                                                                                                                                                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Average login time | The average time it takes for a user to join a channel.                                                                                                                                                                                                                     |
| Audio freeze rate  | Audio freeze rate is not included in the quality metrics of the Agora RTC SDK for Web. That is, if you select <strong>Web RTC SDK</strong> for product type in the global settings, the heat map chart for audio freeze rate does not display in the real-time scale panel. |
| Video freeze rate  | The rate at which video freezing occurs, which equals Total video freezing time ÷ Total video duration. Native: Only video freezing longer than 600 milliseconds is counted. Web RTC SDK: Only video freezing longer than 500 milliseconds is counted.                      |
| Network delay rate | The rate at which network delay occurs, which equals Total end-to-end network delay ÷ Total audio and video duration. Only end-to-end network delays longer than 400 milliseconds are counted.                                                                              |

Both the audio duration and video duration in the table above are [calculated by the number of streams](../../reference/billing-policies.md).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Real-time Monitoring provides the following features:"
  }, {
    heading: undefined,
    content: "Automatic collection, processing, and storage of metrics data, which refreshes every 20 seconds."
  }, {
    heading: undefined,
    content: "Intuitive diagrams that help you grasp data in multiple dimensions, such as line charts, heat maps, bubble charts, and ranking lists."
  }, {
    heading: undefined,
    content: "Data synchronization with Call Search and Data Insights, so that you can easily dive into problem analysis."
  }, {
    heading: "getting-started",
    content: "To access the Real-time Monitoring page, do the following:"
  }, {
    heading: "getting-started",
    content: "Subscribe to a pricing plan to enable the **Real-time Monitoring** feature for your project."
  }, {
    heading: "getting-started",
    content: "Log in to Agora Console and click **Agora Analytics** > **Real-time Monitoring** on the left navigation bar."
  }, {
    heading: "getting-started",
    content: "This section walks you through the Real-time Monitoring page and its basic features."
  }, {
    heading: "global-settings",
    content: "All data on the page, except certain heat maps, refreshes every 20 seconds."
  }, {
    heading: "global-settings",
    content: "You can apply the following global settings to the page:"
  }, {
    heading: "global-settings",
    content: "Timezone: On the top of the page, select your timezone as **Local** or **UTC**."
  }, {
    heading: "global-settings",
    content: "Project: In the upper-left corner of the left navigation bar, select a project."
  }, {
    heading: "global-settings",
    content: "Product type: In the upper-right corner of the page, select **Native** or **Web RTC SDK** from the dropdown menu."
  }, {
    heading: "global-settings",
    content: "Auto update: In the upper-right corner of the page, uncheck the box for **Auto Update** to stop the data from automatic refreshing. Agora recommends you do this when investigating the metrics data at a specific moment. To resume automatic refreshing, check the box again."
  }, {
    heading: "real-time-scale",
    content: "The following line charts display data for the last 30 minutes and refresh every 20 seconds:"
  }, {
    heading: "real-time-scale",
    content: "**In-call users**"
  }, {
    heading: "real-time-scale",
    content: "**Number of in-call channels**"
  }, {
    heading: "real-time-scale",
    content: "**Number of Cloud Recording workers**"
  }, {
    heading: "real-time-scale",
    content: "**Number of Media Pull workers**"
  }, {
    heading: "real-time-scale",
    content: "**Number of Media Push workers**"
  }, {
    heading: "real-time-scale",
    content: "These metrics are explained in Scale metrics."
  }, {
    heading: "real-time-scale",
    content: "The latest value of each metric is displayed above the line chart, and refreshes every 20 seconds."
  }, {
    heading: "real-time-scale",
    content: "Each line chart refreshes every 20 seconds. To see the metric value at a specific moment, hover your mouse on a data point."
  }, {
    heading: "real-time-quality",
    content: "The heat map charts for **Average login time**, **Audio freeze rate**, **Video freeze rate**, and **Network delay rate** display data for the last 30 minutes. The four metrics are explained in Quality metrics."
  }, {
    heading: "real-time-quality",
    content: "The latest value of each metric is displayed above the heat map chart, and the tag next to the value shows the diagnosis result of the value. Both the value and the tag refresh every 20 seconds."
  }, {
    heading: "real-time-quality",
    content: "Each heat map chart refreshes every 60 seconds. The color of each cell represents the number of users or channels. The darker the color, the higher the number. To see the metric value at a specific moment, hover your mouse on a cell."
  }, {
    heading: "real-time-quality",
    content: "Additionally, the heat map charts provide the data sampling feature:"
  }, {
    heading: "real-time-quality",
    content: "Channel data sampling: On the chart for **Audio Freeze Rate**, **Video Freeze Rate**, or **Network delay rate**, click a data point to see its ranked channel list. The list is ranked in descending order of the metric value, and includes a maximum of 20 channels. To get more details about a channel, click **Call Details** to use Call Inspector."
  }, {
    heading: "real-time-quality",
    content: "User data sampling: On the chart for **Average login time**, click a data point to see its ranked user list. The list is ranked in descending order of the metric value, and includes a maximum of 50 users. To get more details about a user, click **Call Details** to use Call Inspector."
  }, {
    heading: "alert-notification",
    content: "If you have enabled the Alert Notification service, the **Alert Notifications** panel displays the latest three notifications."
  }, {
    heading: "alert-notification",
    content: "In this panel, you can do the following:"
  }, {
    heading: "alert-notification",
    content: "Jump to Alert Notification: The upper-right corner shows the number of notifications in the last three hours. Click it to jump to the **Alert Notification** page."
  }, {
    heading: "alert-notification",
    content: "Jump to Call Search: For each displayed alert notification, click **Call Details** to analyze the call using the Call Inspector service."
  }, {
    heading: "alert-notification",
    content: "To enable and configure the Alert Notification service, see Alert Notification."
  }, {
    heading: "region",
    content: "The **Region** heat map shows the geographical distribution of the video freeze rate and audio freeze rate. The color represents the number of users, and the bubble size represents the metric value."
  }, {
    heading: "region",
    content: "You can refer to the following tips when navigating through the heat map:"
  }, {
    heading: "region",
    content: "Select a metric: In the upper-right corner, click to select **Video Freeze Rate** or **Audio Freeze Rate**."
  }, {
    heading: "region",
    content: "Select a map: In the upper-right corner, choose **World map**, **China map**, or **US map** from the dropdown menu."
  }, {
    heading: "region",
    content: "To see the metric value in a country or region, hover your mouse on the map."
  }, {
    heading: "region",
    content: "Channel data sampling: Click a country or region or a bubble to see its ranked channel list. The list is ranked in descending order of the metric value, and includes a maximum of 20 channels. To further analyze a channel, click **Call details** to use Call Inspector."
  }, {
    heading: "ranked-channel-lists",
    content: "This panel includes the following ranked channel lists:"
  }, {
    heading: "ranked-channel-lists",
    content: "**Ranked by users**: The list of channels that have the most concurrent users."
  }, {
    heading: "ranked-channel-lists",
    content: "**Ranked by freeze rates**: The lists of key channels that have relatively high video or audio freeze rates."
  }, {
    heading: "multidimensional-analysis",
    content: "The bubble charts of **Video Freeze Rate** and **Audio Freeze Rate** show distributions of the two metrics from the perspectives of network type, SDK version, and device type."
  }, {
    heading: "multidimensional-analysis",
    content: "In each bubble chart, the X coordinate is the number of concurrent users, and the Y coordinate is the metric value. The bubble color represents whether the metric value is normal. If the video freeze rate exceeds 5%, or the audio freeze rate exceeds 3%, the bubble turns red."
  }, {
    heading: "multidimensional-analysis",
    content: "To see the specific data, hover your mouse on a bubble."
  }, {
    heading: "scale-metrics",
    content: "Metric"
  }, {
    heading: "scale-metrics",
    content: "Description"
  }, {
    heading: "scale-metrics",
    content: "In-call users"
  }, {
    heading: "scale-metrics",
    content: "The total number of users across all in-use channels. A user joining multiple channels is counted multiple times."
  }, {
    heading: "scale-metrics",
    content: "Number of in-use channels"
  }, {
    heading: "scale-metrics",
    content: "The total number of in-use channels, as determined by uniquely named channels that contain users."
  }, {
    heading: "scale-metrics",
    content: "Number of Cloud Recording workers"
  }, {
    heading: "scale-metrics",
    content: "See Cloud Recording."
  }, {
    heading: "scale-metrics",
    content: "Number of Media Pull workers"
  }, {
    heading: "scale-metrics",
    content: "See Media Pull."
  }, {
    heading: "scale-metrics",
    content: "Number of Media Push workers"
  }, {
    heading: "scale-metrics",
    content: "See Media Push."
  }, {
    heading: "quality-metrics",
    content: "Metric"
  }, {
    heading: "quality-metrics",
    content: "Description"
  }, {
    heading: "quality-metrics",
    content: "Average login time"
  }, {
    heading: "quality-metrics",
    content: "The average time it takes for a user to join a channel."
  }, {
    heading: "quality-metrics",
    content: "Audio freeze rate"
  }, {
    heading: "quality-metrics",
    content: "Audio freeze rate is not included in the quality metrics of the Agora RTC SDK for Web. That is, if you select <strong>Web RTC SDK</strong> for product type in the global settings, the heat map chart for audio freeze rate does not display in the real-time scale panel."
  }, {
    heading: "quality-metrics",
    content: "Video freeze rate"
  }, {
    heading: "quality-metrics",
    content: "The rate at which video freezing occurs, which equals Total video freezing time ÷ Total video duration. Native: Only video freezing longer than 600 milliseconds is counted. Web RTC SDK: Only video freezing longer than 500 milliseconds is counted."
  }, {
    heading: "quality-metrics",
    content: "Network delay rate"
  }, {
    heading: "quality-metrics",
    content: "The rate at which network delay occurs, which equals Total end-to-end network delay ÷ Total audio and video duration. Only end-to-end network delays longer than 400 milliseconds are counted."
  }, {
    heading: "quality-metrics",
    content: "Both the audio duration and video duration in the table above are calculated by the number of streams."
  }],
  headings: [{
    id: "getting-started",
    content: "Getting started"
  }, {
    id: "global-settings",
    content: "Global settings"
  }, {
    id: "real-time-scale",
    content: "Real-time scale"
  }, {
    id: "real-time-quality",
    content: "Real-time quality"
  }, {
    id: "alert-notification",
    content: "Alert notification"
  }, {
    id: "region",
    content: "Region"
  }, {
    id: "ranked-channel-lists",
    content: "Ranked channel lists"
  }, {
    id: "multidimensional-analysis",
    content: "Multidimensional analysis"
  }, {
    id: "key-terms",
    content: "Key terms"
  }, {
    id: "scale-metrics",
    content: "Scale metrics"
  }, {
    id: "quality-metrics",
    content: "Quality metrics"
  }]
};
export let toc = [{
  depth: 2,
  url: "#getting-started",
  title: _jsx(_Fragment, {
    children: "Getting started"
  })
}, {
  depth: 3,
  url: "#global-settings",
  title: _jsx(_Fragment, {
    children: "Global settings"
  })
}, {
  depth: 3,
  url: "#real-time-scale",
  title: _jsx(_Fragment, {
    children: "Real-time scale"
  })
}, {
  depth: 3,
  url: "#real-time-quality",
  title: _jsx(_Fragment, {
    children: "Real-time quality"
  })
}, {
  depth: 3,
  url: "#alert-notification",
  title: _jsx(_Fragment, {
    children: "Alert notification"
  })
}, {
  depth: 3,
  url: "#region",
  title: _jsx(_Fragment, {
    children: "Region"
  })
}, {
  depth: 3,
  url: "#ranked-channel-lists",
  title: _jsx(_Fragment, {
    children: "Ranked channel lists"
  })
}, {
  depth: 3,
  url: "#multidimensional-analysis",
  title: _jsx(_Fragment, {
    children: "Multidimensional analysis"
  })
}, {
  depth: 2,
  url: "#key-terms",
  title: _jsx(_Fragment, {
    children: "Key terms"
  })
}, {
  depth: 3,
  url: "#scale-metrics",
  title: _jsx(_Fragment, {
    children: "Scale metrics"
  })
}, {
  depth: 3,
  url: "#quality-metrics",
  title: _jsx(_Fragment, {
    children: "Quality metrics"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Real-time Monitoring provides the following features:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Automatic collection, processing, and storage of metrics data, which refreshes every 20 seconds."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Intuitive diagrams that help you grasp data in multiple dimensions, such as line charts, heat maps, bubble charts, and ranking lists."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Data synchronization with ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
            children: "Call Search"
          }), " and ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/data-insight",
            children: "Data Insights"
          }), ", so that you can easily dive into problem analysis."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "getting-started",
      children: "Getting started"
    }), `
`, _jsx(_components.p, {
      children: "To access the Real-time Monitoring page, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Subscribe to a ", _jsx(_components.a, {
            href: "../../reference/pricing.md",
            children: "pricing plan"
          }), " to enable the ", _jsx(_components.strong, {
            children: "Real-time Monitoring"
          }), " feature for your project."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), " and click ", _jsx(_components.strong, {
            children: "Agora Analytics"
          }), " > ", _jsx(_components.strong, {
            children: "Real-time Monitoring"
          }), " on the left navigation bar."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This section walks you through the Real-time Monitoring page and its basic features."
    }), `
`, _jsx(_components.h3, {
      id: "global-settings",
      children: "Global settings"
    }), `
`, _jsx(_components.p, {
      children: "All data on the page, except certain heat maps, refreshes every 20 seconds."
    }), `
`, _jsx(_components.p, {
      children: "You can apply the following global settings to the page:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Timezone: On the top of the page, select your timezone as ", _jsx(_components.strong, {
          children: "Local"
        }), " or ", _jsx(_components.strong, {
          children: "UTC"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Project: In the upper-left corner of the left navigation bar, select a project."
      }), `
`, _jsxs(_components.li, {
        children: ["Product type: In the upper-right corner of the page, select ", _jsx(_components.strong, {
          children: "Native"
        }), " or ", _jsx(_components.strong, {
          children: "Web RTC SDK"
        }), " from the dropdown menu."]
      }), `
`, _jsxs(_components.li, {
        children: ["Auto update: In the upper-right corner of the page, uncheck the box for ", _jsx(_components.strong, {
          children: "Auto Update"
        }), " to stop the data from automatic refreshing. Agora recommends you do this when investigating the metrics data at a specific moment. To resume automatic refreshing, check the box again."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "real-time-scale",
      children: "Real-time scale"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/rtm-dashboard-scale.png",
        alt: "real-time-scale"
      })
    }), `
`, _jsx(_components.p, {
      children: "The following line charts display data for the last 30 minutes and refresh every 20 seconds:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "In-call users"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Number of in-call channels"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Number of Cloud Recording workers"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Number of Media Pull workers"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Number of Media Push workers"
        })
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["These metrics are explained in ", _jsx(_components.a, {
        href: "#scale-metrics",
        children: "Scale metrics"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The latest value of each metric is displayed above the line chart, and refreshes every 20 seconds."
    }), `
`, _jsx(_components.p, {
      children: "Each line chart refreshes every 20 seconds. To see the metric value at a specific moment, hover your mouse on a data point."
    }), `
`, _jsx(_components.h3, {
      id: "real-time-quality",
      children: "Real-time quality"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/rtm-dashboard-quality.png",
        alt: "real-time-quality"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The heat map charts for ", _jsx(_components.strong, {
        children: "Average login time"
      }), ", ", _jsx(_components.strong, {
        children: "Audio freeze rate"
      }), ", ", _jsx(_components.strong, {
        children: "Video freeze rate"
      }), ", and ", _jsx(_components.strong, {
        children: "Network delay rate"
      }), " display data for the last 30 minutes. The four metrics are explained in ", _jsx(_components.a, {
        href: "#quality-metrics",
        children: "Quality metrics"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The latest value of each metric is displayed above the heat map chart, and the tag next to the value shows the diagnosis result of the value. Both the value and the tag refresh every 20 seconds."
    }), `
`, _jsx(_components.p, {
      children: "Each heat map chart refreshes every 60 seconds. The color of each cell represents the number of users or channels. The darker the color, the higher the number. To see the metric value at a specific moment, hover your mouse on a cell."
    }), `
`, _jsx(_components.p, {
      children: "Additionally, the heat map charts provide the data sampling feature:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Channel data sampling: On the chart for ", _jsx(_components.strong, {
          children: "Audio Freeze Rate"
        }), ", ", _jsx(_components.strong, {
          children: "Video Freeze Rate"
        }), ", or ", _jsx(_components.strong, {
          children: "Network delay rate"
        }), ", click a data point to see its ranked channel list. The list is ranked in descending order of the metric value, and includes a maximum of 20 channels. To get more details about a channel, click ", _jsx(_components.strong, {
          children: "Call Details"
        }), " to use ", _jsx(_components.a, {
          href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
          children: "Call Inspector"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["User data sampling: On the chart for ", _jsx(_components.strong, {
          children: "Average login time"
        }), ", click a data point to see its ranked user list. The list is ranked in descending order of the metric value, and includes a maximum of 50 users. To get more details about a user, click ", _jsx(_components.strong, {
          children: "Call Details"
        }), " to use ", _jsx(_components.a, {
          href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
          children: "Call Inspector"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "alert-notification",
      children: "Alert notification"
    }), `
`, _jsxs(_components.p, {
      children: ["If you have enabled the ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/monitor-and-get-alerts/alarm",
        children: "Alert Notification"
      }), " service, the ", _jsx(_components.strong, {
        children: "Alert Notifications"
      }), " panel displays the latest three notifications."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1640934517935",
        alt: "1640934517935"
      })
    }), `
`, _jsx(_components.p, {
      children: "In this panel, you can do the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Jump to Alert Notification: The upper-right corner shows the number of notifications in the last three hours. Click it to jump to the ", _jsx(_components.strong, {
            children: "Alert Notification"
          }), " page."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Jump to Call Search: For each displayed alert notification, click ", _jsx(_components.strong, {
            children: "Call Details"
          }), " to analyze the call using the ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
            children: "Call Inspector"
          }), " service."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To enable and configure the Alert Notification service, see ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/monitor-and-get-alerts/alarm",
        children: "Alert Notification"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "region",
      children: "Region"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/rtm-region.png",
        alt: "rtm-region"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Region"
      }), " heat map shows the geographical distribution of the video freeze rate and audio freeze rate. The color represents the number of users, and the bubble size represents the metric value."]
    }), `
`, _jsx(_components.p, {
      children: "You can refer to the following tips when navigating through the heat map:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select a metric: In the upper-right corner, click to select ", _jsx(_components.strong, {
            children: "Video Freeze Rate"
          }), " or ", _jsx(_components.strong, {
            children: "Audio Freeze Rate"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select a map: In the upper-right corner, choose ", _jsx(_components.strong, {
            children: "World map"
          }), ", ", _jsx(_components.strong, {
            children: "China map"
          }), ", or ", _jsx(_components.strong, {
            children: "US map"
          }), " from the dropdown menu."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "To see the metric value in a country or region, hover your mouse on the map."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Channel data sampling: Click a country or region or a bubble to see its ranked channel list. The list is ranked in descending order of the metric value, and includes a maximum of 20 channels. To further analyze a channel, click ", _jsx(_components.strong, {
            children: "Call details"
          }), " to use ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
            children: "Call Inspector"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "ranked-channel-lists",
      children: "Ranked channel lists"
    }), `
`, _jsx(_components.p, {
      children: "This panel includes the following ranked channel lists:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Ranked by users"
          }), ": The list of channels that have the most concurrent users."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Ranked by freeze rates"
          }), ": The lists of key channels that have relatively high video or audio freeze rates."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "multidimensional-analysis",
      children: "Multidimensional analysis"
    }), `
`, _jsxs(_components.p, {
      children: ["The bubble charts of ", _jsx(_components.strong, {
        children: "Video Freeze Rate"
      }), " and ", _jsx(_components.strong, {
        children: "Audio Freeze Rate"
      }), " show distributions of the two metrics from the perspectives of network type, SDK version, and device type."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1634267180282",
        alt: "1634267180282"
      })
    }), `
`, _jsx(_components.p, {
      children: "In each bubble chart, the X coordinate is the number of concurrent users, and the Y coordinate is the metric value. The bubble color represents whether the metric value is normal. If the video freeze rate exceeds 5%, or the audio freeze rate exceeds 3%, the bubble turns red."
    }), `
`, _jsx(_components.p, {
      children: "To see the specific data, hover your mouse on a bubble."
    }), `
`, _jsx(_components.h2, {
      id: "key-terms",
      children: "Key terms"
    }), `
`, _jsx(_components.h3, {
      id: "scale-metrics",
      children: "Scale metrics"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Metric"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "In-call users"
          }), _jsx(_components.td, {
            children: "The total number of users across all in-use channels. A user joining multiple channels is counted multiple times."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Number of in-use channels"
          }), _jsx(_components.td, {
            children: "The total number of in-use channels, as determined by uniquely named channels that contain users."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Number of Cloud Recording workers"
          }), _jsxs(_components.td, {
            children: ["See ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording",
              children: "Cloud Recording"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Number of Media Pull workers"
          }), _jsxs(_components.td, {
            children: ["See ", _jsx(_components.a, {
              href: "/en/realtime-media/media-pull",
              children: "Media Pull"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Number of Media Push workers"
          }), _jsxs(_components.td, {
            children: ["See ", _jsx(_components.a, {
              href: "/en/realtime-media/media-push",
              children: "Media Push"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "quality-metrics",
      children: "Quality metrics"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Metric"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Average login time"
          }), _jsx(_components.td, {
            children: "The average time it takes for a user to join a channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio freeze rate"
          }), _jsxs(_components.td, {
            children: ["Audio freeze rate is not included in the quality metrics of the Agora RTC SDK for Web. That is, if you select ", "Web RTC SDK", " for product type in the global settings, the heat map chart for audio freeze rate does not display in the real-time scale panel."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video freeze rate"
          }), _jsx(_components.td, {
            children: "The rate at which video freezing occurs, which equals Total video freezing time ÷ Total video duration. Native: Only video freezing longer than 600 milliseconds is counted. Web RTC SDK: Only video freezing longer than 500 milliseconds is counted."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Network delay rate"
          }), _jsx(_components.td, {
            children: "The rate at which network delay occurs, which equals Total end-to-end network delay ÷ Total audio and video duration. Only end-to-end network delays longer than 400 milliseconds are counted."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["Both the audio duration and video duration in the table above are ", _jsx(_components.a, {
        href: "../../reference/billing-policies.md",
        children: "calculated by the number of streams"
      }), "."]
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
