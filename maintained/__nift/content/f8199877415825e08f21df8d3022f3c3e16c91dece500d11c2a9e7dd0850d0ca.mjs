import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Product and service status",
  description: "Track service performance and maintenance events."
};
export let _markdown = `

The Status Page provides up-to-date insights into the operational status and Quality of Experience (QoE) of Agora’s products and services. It displays historical service stability over the past 90 days and real-time quality data for the past 24 hours, enabling efficient monitoring of real-time interactions. You can access the Status Page directly at [https://status.agora.io/](https://status.agora.io/) or at any time from the [Agora Support Center](https://agoraio.zendesk.com/hc/en-us) by selecting **System Status** from the profile menu.

Use the Status Page to track service performance, maintenance events, and disruptions. The Status Page offers RSS push notifications for updates on ongoing events and combines multiple indicators to deliver comprehensive QoE data.

## Features [#features]

The [Status Page](https://status.agora.io/) interface is divided into the following functional areas:

* [Health banner](#health-banner)
* [Product and service filter](#product-and-service-filter)
* [Status dashboard](#status-dashboard)

The following image shows a snapshot of the Agora Status Page.

![](https://assets-docs.agora.io/images/status-page/status-page.png)

<CalloutContainer type="info">
  <CalloutDescription>
    The screenshots on this page were generated in a test environment for demonstration purposes and do not reflect actual historical availability data or events.
  </CalloutDescription>
</CalloutContainer>

### Health banner [#health-banner]

The health banner at the top of the page provides buttons for event RSS subscription and viewing details of historical events. The following sections describe how to subscribe to the RSS feed and view historical events.

#### RSS subscription [#rss-subscription]

The RSS feed provides live updates on incidents and historical events related to Agora's services, such as service quality degradation and interruptions. Each incident includes details such as investigation, identification, resolution steps, and a summary.

To use the RSS feed in an feed reader:

1. Click the **Event RSS feed** button, the raw RSS feed opens in your browser.
2. Copy the URL from the address bar.
3. Paste the URL into your feed reader's **Add subscription** or **Add feed** section.
4. Save and view your subscription.

   <CalloutContainer type="info">
     <CalloutDescription>
       After you subscribe to the RSS feed, you start receiving the latest updates about the status of Agora's products and services. Check your RSS reader regularly to stay aware of product and service events.
     </CalloutDescription>
   </CalloutContainer>

#### Historical events [#historical-events]

To view a list of historical events for selected products & services during the past year:

1. Click the **Events** button in the health banner.

   You see a list of events, in your browser.

   ![](https://assets-docs.agora.io/images/status-page/status-historical-events.png)

2. Select a specific event from the list to view its details.

   ![](https://assets-docs.agora.io/images/status-page/status-event-details.png)

### Product and service Filter [#product-and-service-filter]

Use the filter dropdown to select a product or service. By default, the page displays the status for all Agora products and services.

![](https://assets-docs.agora.io/images/status-page/status-product-filter.png)

The filter section also displays the time of the last update and the corresponding time zone for the dashboard data. The page updates the data automatically every 5 minutes. To view the latest status at any time, manually refresh the page.

### Status dashboard [#status-dashboard]

The status dashboard section presents the operating status and event details. It uses quality columns to display the status of the selected product or service in chronological order.

The color of each column indicates the operating state:

* Green: Normal operation
* Yellow: Degraded performance
* Red: Abnormal

The status dashboard shows the following data:

![](https://assets-docs.agora.io/images/status-page/status-check-running.png)

1. **Global comprehensive service quality**

   This dashboard graphic shows the comprehensive service status over the past 24 hours. The quality columns are arranged in chronological order with one column for every 5 minutes. The height of the column represents the quality of the comprehensive service experience. The text on the right shows the latest real-time interactive service status and the update time. Hover the mouse over a quality column to view the corresponding time and status.

   ![](https://assets-docs.agora.io/images/status-page/status-hover.png)

2. **24-hour real-time experience metrics**

   Use the expand button to view detailed [quality metrics](#quality-metrics), which together constitute the comprehensive service experience quality index of real-time interaction. The quality columns, show the service quality based on each metric for the past 24 hours. There is a quality column every 5 minutes, and the height of the quality column represents the quality of the indicator.

   ![](https://assets-docs.agora.io/images/status-page/status-quality-metrics.png)

3. **90-day service status**

   The quality columns show the availability data for the past 90 days. There is one quality column for each day. Hover the mouse over the quality column to view the corresponding date and event for the day.

   ![](https://assets-docs.agora.io/images/status-page/status-event-popup.png)

Currently, the status dashboard provides information regarding the following Agora products and services.

* Real-Time Communication (Video calling, Voice calling, Broadcast streaming, and Interactive live streaming)
* Cloud Recording
* Agora Chat
* Interactive Whiteboard

## Quality metrics [#quality-metrics]

The Status Page computes the quality metrics as follows:

### Real-Time Communication QoE [#real-time-communication-qoe]

The comprehensive QoE for real-time communication services is based on multiple factors including the Agora SDRTN® login experience, SDK stability, end-to-end responsiveness, audio fluency, and video fluency.

| Metric                    | Description                                                  | Calculation method                                       |
| :------------------------ | :----------------------------------------------------------- | :------------------------------------------------------- |
| Agora SDRTN® login        | Measures accessibility of real-time audio and video services | Ratio of successful logins to total login attempts       |
| SDK stability             | Measures stability of real-time services                     | Ratio of service crashes to total services               |
| End-to-end responsiveness | Measures responsiveness and smoothness of services           | Ratio of network delay to total audio and video duration |
| Audio fluency             | Measures audio playback continuity                           | Ratio of audio freeze duration to total audio duration   |
| Video fluency             | Measures video playback smoothness                           | Ratio of video freeze duration to total video duration   |

<CalloutContainer type="info">
  <CalloutDescription>
    Use the **Expand** button under the comprehensive Real-Time Communication QoE index to view the historical data for each metric.
  </CalloutDescription>
</CalloutContainer>

### Cloud Recording status [#cloud-recording-status]

The Cloud Recording service status evaluates reliability and user experience based on the Cloud Recording service's running state and the recording task creation success rate.

### Agora Chat status [#agora-chat-status]

The Chat status indicates the success rate of message-sending requests and the availability of Agora Chat services.

### Interactive Whiteboard status [#interactive-whiteboard-status]

The Interactive Whiteboard reliability and user experience status is based on the service's operating status and the success rate of joining a whiteboard room.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Status Page provides up-to-date insights into the operational status and Quality of Experience (QoE) of Agora’s products and services. It displays historical service stability over the past 90 days and real-time quality data for the past 24 hours, enabling efficient monitoring of real-time interactions. You can access the Status Page directly at https\\://status.agora.io/ or at any time from the Agora Support Center by selecting **System Status** from the profile menu."
  }, {
    heading: undefined,
    content: "Use the Status Page to track service performance, maintenance events, and disruptions. The Status Page offers RSS push notifications for updates on ongoing events and combines multiple indicators to deliver comprehensive QoE data."
  }, {
    heading: "features",
    content: "The Status Page interface is divided into the following functional areas:"
  }, {
    heading: "features",
    content: "Health banner"
  }, {
    heading: "features",
    content: "Product and service filter"
  }, {
    heading: "features",
    content: "Status dashboard"
  }, {
    heading: "features",
    content: "The following image shows a snapshot of the Agora Status Page."
  }, {
    heading: "features",
    content: "The screenshots on this page were generated in a test environment for demonstration purposes and do not reflect actual historical availability data or events."
  }, {
    heading: "health-banner",
    content: "The health banner at the top of the page provides buttons for event RSS subscription and viewing details of historical events. The following sections describe how to subscribe to the RSS feed and view historical events."
  }, {
    heading: "rss-subscription",
    content: "The RSS feed provides live updates on incidents and historical events related to Agora's services, such as service quality degradation and interruptions. Each incident includes details such as investigation, identification, resolution steps, and a summary."
  }, {
    heading: "rss-subscription",
    content: "To use the RSS feed in an feed reader:"
  }, {
    heading: "rss-subscription",
    content: "Click the **Event RSS feed** button, the raw RSS feed opens in your browser."
  }, {
    heading: "rss-subscription",
    content: "Copy the URL from the address bar."
  }, {
    heading: "rss-subscription",
    content: "Paste the URL into your feed reader's **Add subscription** or **Add feed** section."
  }, {
    heading: "rss-subscription",
    content: "Save and view your subscription."
  }, {
    heading: "rss-subscription",
    content: "After you subscribe to the RSS feed, you start receiving the latest updates about the status of Agora's products and services. Check your RSS reader regularly to stay aware of product and service events."
  }, {
    heading: "historical-events",
    content: "To view a list of historical events for selected products & services during the past year:"
  }, {
    heading: "historical-events",
    content: "Click the **Events** button in the health banner."
  }, {
    heading: "historical-events",
    content: "You see a list of events, in your browser."
  }, {
    heading: "historical-events",
    content: "Select a specific event from the list to view its details."
  }, {
    heading: "product-and-service-filter",
    content: "Use the filter dropdown to select a product or service. By default, the page displays the status for all Agora products and services."
  }, {
    heading: "product-and-service-filter",
    content: "The filter section also displays the time of the last update and the corresponding time zone for the dashboard data. The page updates the data automatically every 5 minutes. To view the latest status at any time, manually refresh the page."
  }, {
    heading: "status-dashboard",
    content: "The status dashboard section presents the operating status and event details. It uses quality columns to display the status of the selected product or service in chronological order."
  }, {
    heading: "status-dashboard",
    content: "The color of each column indicates the operating state:"
  }, {
    heading: "status-dashboard",
    content: "Green: Normal operation"
  }, {
    heading: "status-dashboard",
    content: "Yellow: Degraded performance"
  }, {
    heading: "status-dashboard",
    content: "Red: Abnormal"
  }, {
    heading: "status-dashboard",
    content: "The status dashboard shows the following data:"
  }, {
    heading: "status-dashboard",
    content: "**Global comprehensive service quality**"
  }, {
    heading: "status-dashboard",
    content: "This dashboard graphic shows the comprehensive service status over the past 24 hours. The quality columns are arranged in chronological order with one column for every 5 minutes. The height of the column represents the quality of the comprehensive service experience. The text on the right shows the latest real-time interactive service status and the update time. Hover the mouse over a quality column to view the corresponding time and status."
  }, {
    heading: "status-dashboard",
    content: "**24-hour real-time experience metrics**"
  }, {
    heading: "status-dashboard",
    content: "Use the expand button to view detailed quality metrics, which together constitute the comprehensive service experience quality index of real-time interaction. The quality columns, show the service quality based on each metric for the past 24 hours. There is a quality column every 5 minutes, and the height of the quality column represents the quality of the indicator."
  }, {
    heading: "status-dashboard",
    content: "**90-day service status**"
  }, {
    heading: "status-dashboard",
    content: "The quality columns show the availability data for the past 90 days. There is one quality column for each day. Hover the mouse over the quality column to view the corresponding date and event for the day."
  }, {
    heading: "status-dashboard",
    content: "Currently, the status dashboard provides information regarding the following Agora products and services."
  }, {
    heading: "status-dashboard",
    content: "Real-Time Communication (Video calling, Voice calling, Broadcast streaming, and Interactive live streaming)"
  }, {
    heading: "status-dashboard",
    content: "Cloud Recording"
  }, {
    heading: "status-dashboard",
    content: "Agora Chat"
  }, {
    heading: "status-dashboard",
    content: "Interactive Whiteboard"
  }, {
    heading: "quality-metrics",
    content: "The Status Page computes the quality metrics as follows:"
  }, {
    heading: "real-time-communication-qoe",
    content: "The comprehensive QoE for real-time communication services is based on multiple factors including the Agora SDRTN® login experience, SDK stability, end-to-end responsiveness, audio fluency, and video fluency."
  }, {
    heading: "real-time-communication-qoe",
    content: "Metric"
  }, {
    heading: "real-time-communication-qoe",
    content: "Description"
  }, {
    heading: "real-time-communication-qoe",
    content: "Calculation method"
  }, {
    heading: "real-time-communication-qoe",
    content: "Agora SDRTN® login"
  }, {
    heading: "real-time-communication-qoe",
    content: "Measures accessibility of real-time audio and video services"
  }, {
    heading: "real-time-communication-qoe",
    content: "Ratio of successful logins to total login attempts"
  }, {
    heading: "real-time-communication-qoe",
    content: "SDK stability"
  }, {
    heading: "real-time-communication-qoe",
    content: "Measures stability of real-time services"
  }, {
    heading: "real-time-communication-qoe",
    content: "Ratio of service crashes to total services"
  }, {
    heading: "real-time-communication-qoe",
    content: "End-to-end responsiveness"
  }, {
    heading: "real-time-communication-qoe",
    content: "Measures responsiveness and smoothness of services"
  }, {
    heading: "real-time-communication-qoe",
    content: "Ratio of network delay to total audio and video duration"
  }, {
    heading: "real-time-communication-qoe",
    content: "Audio fluency"
  }, {
    heading: "real-time-communication-qoe",
    content: "Measures audio playback continuity"
  }, {
    heading: "real-time-communication-qoe",
    content: "Ratio of audio freeze duration to total audio duration"
  }, {
    heading: "real-time-communication-qoe",
    content: "Video fluency"
  }, {
    heading: "real-time-communication-qoe",
    content: "Measures video playback smoothness"
  }, {
    heading: "real-time-communication-qoe",
    content: "Ratio of video freeze duration to total video duration"
  }, {
    heading: "real-time-communication-qoe",
    content: "Use the **Expand** button under the comprehensive Real-Time Communication QoE index to view the historical data for each metric."
  }, {
    heading: "cloud-recording-status",
    content: "The Cloud Recording service status evaluates reliability and user experience based on the Cloud Recording service's running state and the recording task creation success rate."
  }, {
    heading: "agora-chat-status",
    content: "The Chat status indicates the success rate of message-sending requests and the availability of Agora Chat services."
  }, {
    heading: "interactive-whiteboard-status",
    content: "The Interactive Whiteboard reliability and user experience status is based on the service's operating status and the success rate of joining a whiteboard room."
  }],
  headings: [{
    id: "features",
    content: "Features"
  }, {
    id: "health-banner",
    content: "Health banner"
  }, {
    id: "rss-subscription",
    content: "RSS subscription"
  }, {
    id: "historical-events",
    content: "Historical events"
  }, {
    id: "product-and-service-filter",
    content: "Product and service Filter"
  }, {
    id: "status-dashboard",
    content: "Status dashboard"
  }, {
    id: "quality-metrics",
    content: "Quality metrics"
  }, {
    id: "real-time-communication-qoe",
    content: "Real-Time Communication QoE"
  }, {
    id: "cloud-recording-status",
    content: "Cloud Recording status"
  }, {
    id: "agora-chat-status",
    content: "Agora Chat status"
  }, {
    id: "interactive-whiteboard-status",
    content: "Interactive Whiteboard status"
  }]
};
export let toc = [{
  depth: 2,
  url: "#features",
  title: _jsx(_Fragment, {
    children: "Features"
  })
}, {
  depth: 3,
  url: "#health-banner",
  title: _jsx(_Fragment, {
    children: "Health banner"
  })
}, {
  depth: 4,
  url: "#rss-subscription",
  title: _jsx(_Fragment, {
    children: "RSS subscription"
  })
}, {
  depth: 4,
  url: "#historical-events",
  title: _jsx(_Fragment, {
    children: "Historical events"
  })
}, {
  depth: 3,
  url: "#product-and-service-filter",
  title: _jsx(_Fragment, {
    children: "Product and service Filter"
  })
}, {
  depth: 3,
  url: "#status-dashboard",
  title: _jsx(_Fragment, {
    children: "Status dashboard"
  })
}, {
  depth: 2,
  url: "#quality-metrics",
  title: _jsx(_Fragment, {
    children: "Quality metrics"
  })
}, {
  depth: 3,
  url: "#real-time-communication-qoe",
  title: _jsx(_Fragment, {
    children: "Real-Time Communication QoE"
  })
}, {
  depth: 3,
  url: "#cloud-recording-status",
  title: _jsx(_Fragment, {
    children: "Cloud Recording status"
  })
}, {
  depth: 3,
  url: "#agora-chat-status",
  title: _jsx(_Fragment, {
    children: "Agora Chat status"
  })
}, {
  depth: 3,
  url: "#interactive-whiteboard-status",
  title: _jsx(_Fragment, {
    children: "Interactive Whiteboard status"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [_jsxs(_components.p, {
      children: ["The Status Page provides up-to-date insights into the operational status and Quality of Experience (QoE) of Agora’s products and services. It displays historical service stability over the past 90 days and real-time quality data for the past 24 hours, enabling efficient monitoring of real-time interactions. You can access the Status Page directly at ", _jsx(_components.a, {
        href: "https://status.agora.io/",
        children: "https://status.agora.io/"
      }), " or at any time from the ", _jsx(_components.a, {
        href: "https://agoraio.zendesk.com/hc/en-us",
        children: "Agora Support Center"
      }), " by selecting ", _jsx(_components.strong, {
        children: "System Status"
      }), " from the profile menu."]
    }), `
`, _jsx(_components.p, {
      children: "Use the Status Page to track service performance, maintenance events, and disruptions. The Status Page offers RSS push notifications for updates on ongoing events and combines multiple indicators to deliver comprehensive QoE data."
    }), `
`, _jsx(_components.h2, {
      id: "features",
      children: "Features"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.a, {
        href: "https://status.agora.io/",
        children: "Status Page"
      }), " interface is divided into the following functional areas:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#health-banner",
          children: "Health banner"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#product-and-service-filter",
          children: "Product and service filter"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#status-dashboard",
          children: "Status dashboard"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following image shows a snapshot of the Agora Status Page."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/status-page/status-page.png",
        alt: ""
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The screenshots on this page were generated in a test environment for demonstration purposes and do not reflect actual historical availability data or events."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "health-banner",
      children: "Health banner"
    }), `
`, _jsx(_components.p, {
      children: "The health banner at the top of the page provides buttons for event RSS subscription and viewing details of historical events. The following sections describe how to subscribe to the RSS feed and view historical events."
    }), `
`, _jsx(_components.h4, {
      id: "rss-subscription",
      children: "RSS subscription"
    }), `
`, _jsx(_components.p, {
      children: "The RSS feed provides live updates on incidents and historical events related to Agora's services, such as service quality degradation and interruptions. Each incident includes details such as investigation, identification, resolution steps, and a summary."
    }), `
`, _jsx(_components.p, {
      children: "To use the RSS feed in an feed reader:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click the ", _jsx(_components.strong, {
            children: "Event RSS feed"
          }), " button, the raw RSS feed opens in your browser."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Copy the URL from the address bar."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Paste the URL into your feed reader's ", _jsx(_components.strong, {
            children: "Add subscription"
          }), " or ", _jsx(_components.strong, {
            children: "Add feed"
          }), " section."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Save and view your subscription."
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "After you subscribe to the RSS feed, you start receiving the latest updates about the status of Agora's products and services. Check your RSS reader regularly to stay aware of product and service events."
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "historical-events",
      children: "Historical events"
    }), `
`, _jsx(_components.p, {
      children: "To view a list of historical events for selected products & services during the past year:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click the ", _jsx(_components.strong, {
            children: "Events"
          }), " button in the health banner."]
        }), `
`, _jsx(_components.p, {
          children: "You see a list of events, in your browser."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/status-page/status-historical-events.png",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Select a specific event from the list to view its details."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/status-page/status-event-details.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "product-and-service-filter",
      children: "Product and service Filter"
    }), `
`, _jsx(_components.p, {
      children: "Use the filter dropdown to select a product or service. By default, the page displays the status for all Agora products and services."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/status-page/status-product-filter.png",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "The filter section also displays the time of the last update and the corresponding time zone for the dashboard data. The page updates the data automatically every 5 minutes. To view the latest status at any time, manually refresh the page."
    }), `
`, _jsx(_components.h3, {
      id: "status-dashboard",
      children: "Status dashboard"
    }), `
`, _jsx(_components.p, {
      children: "The status dashboard section presents the operating status and event details. It uses quality columns to display the status of the selected product or service in chronological order."
    }), `
`, _jsx(_components.p, {
      children: "The color of each column indicates the operating state:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Green: Normal operation"
      }), `
`, _jsx(_components.li, {
        children: "Yellow: Degraded performance"
      }), `
`, _jsx(_components.li, {
        children: "Red: Abnormal"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The status dashboard shows the following data:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/status-page/status-check-running.png",
        alt: ""
      })
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Global comprehensive service quality"
          })
        }), `
`, _jsx(_components.p, {
          children: "This dashboard graphic shows the comprehensive service status over the past 24 hours. The quality columns are arranged in chronological order with one column for every 5 minutes. The height of the column represents the quality of the comprehensive service experience. The text on the right shows the latest real-time interactive service status and the update time. Hover the mouse over a quality column to view the corresponding time and status."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/status-page/status-hover.png",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "24-hour real-time experience metrics"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Use the expand button to view detailed ", _jsx(_components.a, {
            href: "#quality-metrics",
            children: "quality metrics"
          }), ", which together constitute the comprehensive service experience quality index of real-time interaction. The quality columns, show the service quality based on each metric for the past 24 hours. There is a quality column every 5 minutes, and the height of the quality column represents the quality of the indicator."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/status-page/status-quality-metrics.png",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "90-day service status"
          })
        }), `
`, _jsx(_components.p, {
          children: "The quality columns show the availability data for the past 90 days. There is one quality column for each day. Hover the mouse over the quality column to view the corresponding date and event for the day."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/status-page/status-event-popup.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Currently, the status dashboard provides information regarding the following Agora products and services."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Real-Time Communication (Video calling, Voice calling, Broadcast streaming, and Interactive live streaming)"
      }), `
`, _jsx(_components.li, {
        children: "Cloud Recording"
      }), `
`, _jsx(_components.li, {
        children: "Agora Chat"
      }), `
`, _jsx(_components.li, {
        children: "Interactive Whiteboard"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "quality-metrics",
      children: "Quality metrics"
    }), `
`, _jsx(_components.p, {
      children: "The Status Page computes the quality metrics as follows:"
    }), `
`, _jsx(_components.h3, {
      id: "real-time-communication-qoe",
      children: "Real-Time Communication QoE"
    }), `
`, _jsx(_components.p, {
      children: "The comprehensive QoE for real-time communication services is based on multiple factors including the Agora SDRTN® login experience, SDK stability, end-to-end responsiveness, audio fluency, and video fluency."
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
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Calculation method"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Agora SDRTN® login"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Measures accessibility of real-time audio and video services"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ratio of successful logins to total login attempts"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "SDK stability"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Measures stability of real-time services"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ratio of service crashes to total services"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "End-to-end responsiveness"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Measures responsiveness and smoothness of services"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ratio of network delay to total audio and video duration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio fluency"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Measures audio playback continuity"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ratio of audio freeze duration to total audio duration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video fluency"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Measures video playback smoothness"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ratio of video freeze duration to total video duration"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Use the ", _jsx(_components.strong, {
            children: "Expand"
          }), " button under the comprehensive Real-Time Communication QoE index to view the historical data for each metric."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "cloud-recording-status",
      children: "Cloud Recording status"
    }), `
`, _jsx(_components.p, {
      children: "The Cloud Recording service status evaluates reliability and user experience based on the Cloud Recording service's running state and the recording task creation success rate."
    }), `
`, _jsx(_components.h3, {
      id: "agora-chat-status",
      children: "Agora Chat status"
    }), `
`, _jsx(_components.p, {
      children: "The Chat status indicates the success rate of message-sending requests and the availability of Agora Chat services."
    }), `
`, _jsx(_components.h3, {
      id: "interactive-whiteboard-status",
      children: "Interactive Whiteboard status"
    }), `
`, _jsx(_components.p, {
      children: "The Interactive Whiteboard reliability and user experience status is based on the service's operating status and the success rate of joining a whiteboard room."
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
