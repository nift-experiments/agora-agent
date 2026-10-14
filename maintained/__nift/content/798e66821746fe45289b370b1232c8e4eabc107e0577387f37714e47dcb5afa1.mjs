import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "Information about changes in each release of Agora Analytics."
};
export let _markdown = `

Agora Analytics is a tool that tracks and analyzes the usage and quality of calls. You can use this tool to locate quality issues, find root causes, and fix the issues to improve the final user experience.

<Accordions type="multiple">
  <Accordion title="2026.09" id="202609" headingLevel="2" value="202609">
    Released on September 30, 2026.

    **New features**

    [New Relic integration](/en/realtime-media/agora-analytics/build/integrate-and-embed/new-relic-integration) pushes Agora Analytics usage, quality, and performance metrics to your New Relic account. Premium and Enterprise subscribers can select the RTC metrics to push, then query and monitor them in New Relic alongside their other telemetry.
  </Accordion>

  <Accordion title="2023.08" id="202308" headingLevel="2" value="202308">
    **New features**

    [Data Insights Plus](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/data-insight-plus) provides valuable insights into indicators,
    dimensions, and trends. Users can analyze data, view time series changes, examine distribution patterns, and compare data across different periods.

    Data Insights Plus helps businesses make better decisions by providing deeper insights into their data. With Data Insights Plus, businesses can:

    * Analyze data across multiple dimensions: See how different dimensions of the RTC influence data. Identify quality and usage trends and patterns.
    * Perform user sampling analysis: Drill down into data and understand the impact areas with greater granularity.
    * Perform comparative analysis: Compare trends with historical data to identify areas for improvement.
  </Accordion>

  <Accordion title="2023.04" id="202304" headingLevel="2" value="202304">
    **New features**

    Media service is an important auxiliary product of real-time audio and video. This release upgrades the [Usage Insights](../build/explore-and-analyze-data/data-insight.md) and [Real-time Monitoring](../build/monitor-and-get-alerts/monitor.md) modules to support querying historical or real-time scale of the Cloud Recording, Media Pull, and Media Push services. The Usage Insights module now includes a new Media Service panel that presents peak numbers of Cloud Recording and Media Pull concurrent workers. The Real-time Monitoring module includes three new charts for the number of Cloud Recording, Media Pull, and Media Push workers, respectively.
  </Accordion>

  <Accordion title="2023.03" id="202303" headingLevel="2" value="202303">
    **Improvement**

    This release upgrades some RESTful APIs under the real-time audio and video (RTC) product:

    * Data Insights RESTful API
      * Adds a new query interface to obtain aggregated quality metrics under a specified dimension for a specified time range.
      * Adds a new query interface to obtain aggregated usage metrics under a specified dimension for a specified time range.

    See [API reference](api.md).

    * Real-time Monitoring RESTful APIs
      * Adds \`dimension\` and \`dimensionValues\` parameters to the query real-time scale and query real-time quality interfaces, which can be used to specify the query dimension.
      * Adds a new query interface for top 20 real-time scale metrics groups, which can be used to obtain the top 20 groups of real-time call volumes under a specified dimension.
      * Adds a new query interface for top 20 real-time quality metrics groups, which can be used to obtain the top 20 groups of quality-related metrics under a specified dimension.

    See [API reference](api.md).
  </Accordion>

  <Accordion title="2022.09" id="202209" headingLevel="2" value="202209">
    **Improvement**

    This release improves the calculation of the video freeze rate. By optimizing data collection and analysis methods and eliminating the influence of special use-cases such as screen sharing, the accuracy of the video freeze rate is further improved. This improvement applies to the following features:

    * Call Inspector
    * Data Insights
    * Real-time Monitoring
    * Alert Notifications
  </Accordion>

  <Accordion title="2022.08" id="202208" headingLevel="2" value="202208">
    **Improvement**

    To improve the balance between timeliness and accuracy, this release adds a data recalculation mechanism to Data Insights. The data latency of Data Insights can be as low as six hours, but internal resource scheduling or poor user network conditions can cause unexpected data reporting delays. With the data recalculation mechanism, the data for each day is recalculated two days later. For example, the data for July 6, 2022, is recalculated in the early hours of July 8, 2022.
  </Accordion>

  <Accordion title="2022.05" id="202205" headingLevel="2" value="202205">
    **New features**

    This release launches a new version of Call Inspector. This new version has the following advantages over the previous version:

    * Locating user-specific issues through call-specific issues is more efficient, especially for large-scale calls.
    * Key quality metrics and events now offer receiver's and sender's views, making it convenient to locate exceptions.
    * Agora's auto-diagnosis engine is fully integrated to reduce the time cost of inspecting a call through intuitive conclusions. All features related to the auto-diagnosis engine are currently in beta.

    For full details, see [Call Inspector Overview](../build/explore-and-analyze-data/call-search.md).
  </Accordion>

  <Accordion title="2021.11" id="202111" headingLevel="2" value="202111">
    This release retires the Realtime (Beta) and Real-time Alarm (Beta) features on November 1, 2021, and adds the [Real-time Monitoring](../build/monitor-and-get-alerts/monitor.md) and [Alert Notifications](../build/monitor-and-get-alerts/alarm.md) features:

    * Real-time Monitoring: Provides visualized data for multiple call metrics in real time.

    * Alert Notifications: Sends alerts to you through e-mails or API callbacks when abnormal metrics or events are detected in your Agora RTC SDK projects.

    This release also adds the [Real-time Monitoring RESTful APIs](api.md) to query the real-time scale and quality metrics.
  </Accordion>

  <Accordion title="2021.07" id="202107" headingLevel="2" value="202107">
    This release includes changes to the Data Insights function as follows:

    * Optimizes the usage and quality metrics and adds options for data granularity.
    * Improves the Data Insights RESTful APIs:
    * Updates the /beta/insight/usage/by\\_time endpoint.
    * Adds the /beta/insight/quality/by\\_time ([Query quality metrics](api.md)) endpoint.
  </Accordion>

  <Accordion title="2021.05" id="202105" headingLevel="2" value="202105">
    This release includes changes to the Call Inspector RESTful APIs as follows:

    * Updates the /beta/analytics/call/lists endpoint.
    * Replaces the /beta/analytics/call/details endpoint with /beta/analytics/call/sessions ([Get session details](api.md)) and /beta/analytics/call/metrics ([Get quality metrics](api.md)).
  </Accordion>

  <Accordion title="2020.09" id="202009" headingLevel="2" value="202009">
    **New features**

    #### 1. Big Channel RESTful API (Beta) [#1-big-channel-restful-api-beta]

    This release adds the Big Channel RESTful API, and you can get the following data:

    * The number of users who have a poor communication experience in a Big Channel. Poor communication experience in this case refers to video freezes and channel-join delay.

    * The number of users who try to join a Big Channel.

    * Users' call rating for a Big Channel.

    * The number of online users in a Big Channel.

    **Improvement**

    #### 1. Call Inspector [#1-call-inspector]

    * Moves the event timeline from the **Quality of Experience Overview** page to the **End-to-End Details** page. You can see the event timeline on the **Audio/Video Upstream Bitrate and Packet Loss** and **Audio/Video Downstream Bitrate and End-to-End Packet Loss** diagrams.

    * Adds the following statistics on the **End-to-End Details** page:

    * Bitrate of the sent high-quality video

    * Bitrate of the sent low-quality video

    * Frame rate of the captured video

    * Resolution of the sent video

    * Supports submitting a ticket on the **Quality of Experience Overview** page.

    * Improves the user interface design.

    #### 2. Others [#2-others]

    Except for RESTful APIs, all Agora Analytics functions use the local time zone by default.
  </Accordion>

  <Accordion title="2020.05" id="202005" headingLevel="2" value="202005">
    This release adds the Real-time Alarm function (Beta), to help you identify abnormalities, analyze quality factors, and locate the source of each abnormal issue, all in real time.
  </Accordion>

  <Accordion title="2020.01" id="202001" headingLevel="2" value="202001">
    This release adds the Big Channel function (Beta), which provides the Big Channel monitoring and issues diagnosis, and improves the operational efficiency of user activities in Big Channels.
  </Accordion>

  <Accordion title="2019.10" id="201910" headingLevel="2" value="201910">
    This release adds the Realtime function (Beta), which helps to monitor the live status of your project. It also informs you of any abnormalities that occur along with their root cause. See details in [Realtime Monitor](../build/monitor-and-get-alerts/monitor.md).
  </Accordion>

  <Accordion title="2019.09" id="201909" headingLevel="2" value="201909">
    This release adds the Data Insights function (Beta), which provides statistics on the usage and quality of your project over a specified period of time. You can view the quality statistics in various dimensions, such as country and SDK version. See details in [Data Insights](../build/explore-and-analyze-data/data-insight.md).
  </Accordion>

  <Accordion title="2019.08" id="201908" headingLevel="2" value="201908">
    This release adds key events in Call Inspector function, which improves the efficiency of call search.
  </Accordion>

  <Accordion title="2018.08" id="201808" headingLevel="2" value="201808">
    This release provides Call Inspector function, which helps to search calls and analyze quality issues. See details in [Call Inspector](../build/explore-and-analyze-data/call-search.md).
  </Accordion>
</Accordions>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Analytics is a tool that tracks and analyzes the usage and quality of calls. You can use this tool to locate quality issues, find root causes, and fix the issues to improve the final user experience."
  }, {
    heading: undefined,
    content: "Released on September 30, 2026."
  }, {
    heading: undefined,
    content: "**New features**"
  }, {
    heading: undefined,
    content: "New Relic integration pushes Agora Analytics usage, quality, and performance metrics to your New Relic account. Premium and Enterprise subscribers can select the RTC metrics to push, then query and monitor them in New Relic alongside their other telemetry."
  }, {
    heading: undefined,
    content: "**New features**"
  }, {
    heading: undefined,
    content: `Data Insights Plus provides valuable insights into indicators,
dimensions, and trends. Users can analyze data, view time series changes, examine distribution patterns, and compare data across different periods.`
  }, {
    heading: undefined,
    content: "Data Insights Plus helps businesses make better decisions by providing deeper insights into their data. With Data Insights Plus, businesses can:"
  }, {
    heading: undefined,
    content: "Analyze data across multiple dimensions: See how different dimensions of the RTC influence data. Identify quality and usage trends and patterns."
  }, {
    heading: undefined,
    content: "Perform user sampling analysis: Drill down into data and understand the impact areas with greater granularity."
  }, {
    heading: undefined,
    content: "Perform comparative analysis: Compare trends with historical data to identify areas for improvement."
  }, {
    heading: undefined,
    content: "**New features**"
  }, {
    heading: undefined,
    content: "Media service is an important auxiliary product of real-time audio and video. This release upgrades the Usage Insights and Real-time Monitoring modules to support querying historical or real-time scale of the Cloud Recording, Media Pull, and Media Push services. The Usage Insights module now includes a new Media Service panel that presents peak numbers of Cloud Recording and Media Pull concurrent workers. The Real-time Monitoring module includes three new charts for the number of Cloud Recording, Media Pull, and Media Push workers, respectively."
  }, {
    heading: undefined,
    content: "**Improvement**"
  }, {
    heading: undefined,
    content: "This release upgrades some RESTful APIs under the real-time audio and video (RTC) product:"
  }, {
    heading: undefined,
    content: "Data Insights RESTful API"
  }, {
    heading: undefined,
    content: "Adds a new query interface to obtain aggregated quality metrics under a specified dimension for a specified time range."
  }, {
    heading: undefined,
    content: "Adds a new query interface to obtain aggregated usage metrics under a specified dimension for a specified time range."
  }, {
    heading: undefined,
    content: "See API reference."
  }, {
    heading: undefined,
    content: "Real-time Monitoring RESTful APIs"
  }, {
    heading: undefined,
    content: "Adds `dimension` and `dimensionValues` parameters to the query real-time scale and query real-time quality interfaces, which can be used to specify the query dimension."
  }, {
    heading: undefined,
    content: "Adds a new query interface for top 20 real-time scale metrics groups, which can be used to obtain the top 20 groups of real-time call volumes under a specified dimension."
  }, {
    heading: undefined,
    content: "Adds a new query interface for top 20 real-time quality metrics groups, which can be used to obtain the top 20 groups of quality-related metrics under a specified dimension."
  }, {
    heading: undefined,
    content: "See API reference."
  }, {
    heading: undefined,
    content: "**Improvement**"
  }, {
    heading: undefined,
    content: "This release improves the calculation of the video freeze rate. By optimizing data collection and analysis methods and eliminating the influence of special use-cases such as screen sharing, the accuracy of the video freeze rate is further improved. This improvement applies to the following features:"
  }, {
    heading: undefined,
    content: "Call Inspector"
  }, {
    heading: undefined,
    content: "Data Insights"
  }, {
    heading: undefined,
    content: "Real-time Monitoring"
  }, {
    heading: undefined,
    content: "Alert Notifications"
  }, {
    heading: undefined,
    content: "**Improvement**"
  }, {
    heading: undefined,
    content: "To improve the balance between timeliness and accuracy, this release adds a data recalculation mechanism to Data Insights. The data latency of Data Insights can be as low as six hours, but internal resource scheduling or poor user network conditions can cause unexpected data reporting delays. With the data recalculation mechanism, the data for each day is recalculated two days later. For example, the data for July 6, 2022, is recalculated in the early hours of July 8, 2022."
  }, {
    heading: undefined,
    content: "**New features**"
  }, {
    heading: undefined,
    content: "This release launches a new version of Call Inspector. This new version has the following advantages over the previous version:"
  }, {
    heading: undefined,
    content: "Locating user-specific issues through call-specific issues is more efficient, especially for large-scale calls."
  }, {
    heading: undefined,
    content: "Key quality metrics and events now offer receiver's and sender's views, making it convenient to locate exceptions."
  }, {
    heading: undefined,
    content: "Agora's auto-diagnosis engine is fully integrated to reduce the time cost of inspecting a call through intuitive conclusions. All features related to the auto-diagnosis engine are currently in beta."
  }, {
    heading: undefined,
    content: "For full details, see Call Inspector Overview."
  }, {
    heading: undefined,
    content: "This release retires the Realtime (Beta) and Real-time Alarm (Beta) features on November 1, 2021, and adds the Real-time Monitoring and Alert Notifications features:"
  }, {
    heading: undefined,
    content: "Real-time Monitoring: Provides visualized data for multiple call metrics in real time."
  }, {
    heading: undefined,
    content: "Alert Notifications: Sends alerts to you through e-mails or API callbacks when abnormal metrics or events are detected in your Agora RTC SDK projects."
  }, {
    heading: undefined,
    content: "This release also adds the Real-time Monitoring RESTful APIs to query the real-time scale and quality metrics."
  }, {
    heading: undefined,
    content: "This release includes changes to the Data Insights function as follows:"
  }, {
    heading: undefined,
    content: "Optimizes the usage and quality metrics and adds options for data granularity."
  }, {
    heading: undefined,
    content: "Improves the Data Insights RESTful APIs:"
  }, {
    heading: undefined,
    content: "Updates the /beta/insight/usage/by\\_time endpoint."
  }, {
    heading: undefined,
    content: "Adds the /beta/insight/quality/by\\_time (Query quality metrics) endpoint."
  }, {
    heading: undefined,
    content: "This release includes changes to the Call Inspector RESTful APIs as follows:"
  }, {
    heading: undefined,
    content: "Updates the /beta/analytics/call/lists endpoint."
  }, {
    heading: undefined,
    content: "Replaces the /beta/analytics/call/details endpoint with /beta/analytics/call/sessions (Get session details) and /beta/analytics/call/metrics (Get quality metrics)."
  }, {
    heading: undefined,
    content: "**New features**"
  }, {
    heading: "1-big-channel-restful-api-beta",
    content: "This release adds the Big Channel RESTful API, and you can get the following data:"
  }, {
    heading: "1-big-channel-restful-api-beta",
    content: "The number of users who have a poor communication experience in a Big Channel. Poor communication experience in this case refers to video freezes and channel-join delay."
  }, {
    heading: "1-big-channel-restful-api-beta",
    content: "The number of users who try to join a Big Channel."
  }, {
    heading: "1-big-channel-restful-api-beta",
    content: "Users' call rating for a Big Channel."
  }, {
    heading: "1-big-channel-restful-api-beta",
    content: "The number of online users in a Big Channel."
  }, {
    heading: "1-big-channel-restful-api-beta",
    content: "**Improvement**"
  }, {
    heading: "1-call-inspector",
    content: "Moves the event timeline from the **Quality of Experience Overview** page to the **End-to-End Details** page. You can see the event timeline on the **Audio/Video Upstream Bitrate and Packet Loss** and **Audio/Video Downstream Bitrate and End-to-End Packet Loss** diagrams."
  }, {
    heading: "1-call-inspector",
    content: "Adds the following statistics on the **End-to-End Details** page:"
  }, {
    heading: "1-call-inspector",
    content: "Bitrate of the sent high-quality video"
  }, {
    heading: "1-call-inspector",
    content: "Bitrate of the sent low-quality video"
  }, {
    heading: "1-call-inspector",
    content: "Frame rate of the captured video"
  }, {
    heading: "1-call-inspector",
    content: "Resolution of the sent video"
  }, {
    heading: "1-call-inspector",
    content: "Supports submitting a ticket on the **Quality of Experience Overview** page."
  }, {
    heading: "1-call-inspector",
    content: "Improves the user interface design."
  }, {
    heading: "2-others",
    content: "Except for RESTful APIs, all Agora Analytics functions use the local time zone by default."
  }, {
    heading: "2-others",
    content: "This release adds the Real-time Alarm function (Beta), to help you identify abnormalities, analyze quality factors, and locate the source of each abnormal issue, all in real time."
  }, {
    heading: "2-others",
    content: "This release adds the Big Channel function (Beta), which provides the Big Channel monitoring and issues diagnosis, and improves the operational efficiency of user activities in Big Channels."
  }, {
    heading: "2-others",
    content: "This release adds the Realtime function (Beta), which helps to monitor the live status of your project. It also informs you of any abnormalities that occur along with their root cause. See details in Realtime Monitor."
  }, {
    heading: "2-others",
    content: "This release adds the Data Insights function (Beta), which provides statistics on the usage and quality of your project over a specified period of time. You can view the quality statistics in various dimensions, such as country and SDK version. See details in Data Insights."
  }, {
    heading: "2-others",
    content: "This release adds key events in Call Inspector function, which improves the efficiency of call search."
  }, {
    heading: "2-others",
    content: "This release provides Call Inspector function, which helps to search calls and analyze quality issues. See details in Call Inspector."
  }],
  headings: [{
    id: "1-big-channel-restful-api-beta",
    content: "1\\. Big Channel RESTful API (Beta)"
  }, {
    id: "1-call-inspector",
    content: "1\\. Call Inspector"
  }, {
    id: "2-others",
    content: "2\\. Others"
  }]
};
export let toc = [{
  depth: 4,
  url: "#1-big-channel-restful-api-beta",
  title: _jsx(_Fragment, {
    children: "1. Big Channel RESTful API (Beta)"
  })
}, {
  depth: 4,
  url: "#1-call-inspector",
  title: _jsx(_Fragment, {
    children: "1. Call Inspector"
  })
}, {
  depth: 4,
  url: "#2-others",
  title: _jsx(_Fragment, {
    children: "2. Others"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora Analytics is a tool that tracks and analyzes the usage and quality of calls. You can use this tool to locate quality issues, find root causes, and fix the issues to improve the final user experience."
    }), `
`, _jsxs(Accordions, {
      type: "multiple",
      openFirst: true,
      children: [_jsxs(Accordion, {
        title: "2026.09",
        id: "202609",
        headingLevel: 2,
        value: "202609",
        children: [_jsx(_components.p, {
          children: "Released on September 30, 2026."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New features"
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/build/integrate-and-embed/new-relic-integration",
            children: "New Relic integration"
          }), " pushes Agora Analytics usage, quality, and performance metrics to your New Relic account. Premium and Enterprise subscribers can select the RTC metrics to push, then query and monitor them in New Relic alongside their other telemetry."]
        })]
      }), _jsxs(Accordion, {
        title: "2023.08",
        id: "202308",
        headingLevel: 2,
        value: "202308",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New features"
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/data-insight-plus",
            children: "Data Insights Plus"
          }), ` provides valuable insights into indicators,
dimensions, and trends. Users can analyze data, view time series changes, examine distribution patterns, and compare data across different periods.`]
        }), _jsx(_components.p, {
          children: "Data Insights Plus helps businesses make better decisions by providing deeper insights into their data. With Data Insights Plus, businesses can:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Analyze data across multiple dimensions: See how different dimensions of the RTC influence data. Identify quality and usage trends and patterns."
          }), `
`, _jsx(_components.li, {
            children: "Perform user sampling analysis: Drill down into data and understand the impact areas with greater granularity."
          }), `
`, _jsx(_components.li, {
            children: "Perform comparative analysis: Compare trends with historical data to identify areas for improvement."
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2023.04",
        id: "202304",
        headingLevel: 2,
        value: "202304",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New features"
          })
        }), _jsxs(_components.p, {
          children: ["Media service is an important auxiliary product of real-time audio and video. This release upgrades the ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/data-insight.md",
            children: "Usage Insights"
          }), " and ", _jsx(_components.a, {
            href: "../build/monitor-and-get-alerts/monitor.md",
            children: "Real-time Monitoring"
          }), " modules to support querying historical or real-time scale of the Cloud Recording, Media Pull, and Media Push services. The Usage Insights module now includes a new Media Service panel that presents peak numbers of Cloud Recording and Media Pull concurrent workers. The Real-time Monitoring module includes three new charts for the number of Cloud Recording, Media Pull, and Media Push workers, respectively."]
        })]
      }), _jsxs(Accordion, {
        title: "2023.03",
        id: "202303",
        headingLevel: 2,
        value: "202303",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Improvement"
          })
        }), _jsx(_components.p, {
          children: "This release upgrades some RESTful APIs under the real-time audio and video (RTC) product:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Data Insights RESTful API", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Adds a new query interface to obtain aggregated quality metrics under a specified dimension for a specified time range."
              }), `
`, _jsx(_components.li, {
                children: "Adds a new query interface to obtain aggregated usage metrics under a specified dimension for a specified time range."
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["See ", _jsx(_components.a, {
            href: "api.md",
            children: "API reference"
          }), "."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Real-time Monitoring RESTful APIs", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Adds ", _jsx(_components.code, {
                  children: "dimension"
                }), " and ", _jsx(_components.code, {
                  children: "dimensionValues"
                }), " parameters to the query real-time scale and query real-time quality interfaces, which can be used to specify the query dimension."]
              }), `
`, _jsx(_components.li, {
                children: "Adds a new query interface for top 20 real-time scale metrics groups, which can be used to obtain the top 20 groups of real-time call volumes under a specified dimension."
              }), `
`, _jsx(_components.li, {
                children: "Adds a new query interface for top 20 real-time quality metrics groups, which can be used to obtain the top 20 groups of quality-related metrics under a specified dimension."
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["See ", _jsx(_components.a, {
            href: "api.md",
            children: "API reference"
          }), "."]
        })]
      }), _jsxs(Accordion, {
        title: "2022.09",
        id: "202209",
        headingLevel: 2,
        value: "202209",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Improvement"
          })
        }), _jsx(_components.p, {
          children: "This release improves the calculation of the video freeze rate. By optimizing data collection and analysis methods and eliminating the influence of special use-cases such as screen sharing, the accuracy of the video freeze rate is further improved. This improvement applies to the following features:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Call Inspector"
          }), `
`, _jsx(_components.li, {
            children: "Data Insights"
          }), `
`, _jsx(_components.li, {
            children: "Real-time Monitoring"
          }), `
`, _jsx(_components.li, {
            children: "Alert Notifications"
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2022.08",
        id: "202208",
        headingLevel: 2,
        value: "202208",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Improvement"
          })
        }), _jsx(_components.p, {
          children: "To improve the balance between timeliness and accuracy, this release adds a data recalculation mechanism to Data Insights. The data latency of Data Insights can be as low as six hours, but internal resource scheduling or poor user network conditions can cause unexpected data reporting delays. With the data recalculation mechanism, the data for each day is recalculated two days later. For example, the data for July 6, 2022, is recalculated in the early hours of July 8, 2022."
        })]
      }), _jsxs(Accordion, {
        title: "2022.05",
        id: "202205",
        headingLevel: 2,
        value: "202205",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New features"
          })
        }), _jsx(_components.p, {
          children: "This release launches a new version of Call Inspector. This new version has the following advantages over the previous version:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Locating user-specific issues through call-specific issues is more efficient, especially for large-scale calls."
          }), `
`, _jsx(_components.li, {
            children: "Key quality metrics and events now offer receiver's and sender's views, making it convenient to locate exceptions."
          }), `
`, _jsx(_components.li, {
            children: "Agora's auto-diagnosis engine is fully integrated to reduce the time cost of inspecting a call through intuitive conclusions. All features related to the auto-diagnosis engine are currently in beta."
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["For full details, see ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/call-search.md",
            children: "Call Inspector Overview"
          }), "."]
        })]
      }), _jsxs(Accordion, {
        title: "2021.11",
        id: "202111",
        headingLevel: 2,
        value: "202111",
        children: [_jsxs(_components.p, {
          children: ["This release retires the Realtime (Beta) and Real-time Alarm (Beta) features on November 1, 2021, and adds the ", _jsx(_components.a, {
            href: "../build/monitor-and-get-alerts/monitor.md",
            children: "Real-time Monitoring"
          }), " and ", _jsx(_components.a, {
            href: "../build/monitor-and-get-alerts/alarm.md",
            children: "Alert Notifications"
          }), " features:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Real-time Monitoring: Provides visualized data for multiple call metrics in real time."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Alert Notifications: Sends alerts to you through e-mails or API callbacks when abnormal metrics or events are detected in your Agora RTC SDK projects."
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["This release also adds the ", _jsx(_components.a, {
            href: "api.md",
            children: "Real-time Monitoring RESTful APIs"
          }), " to query the real-time scale and quality metrics."]
        })]
      }), _jsxs(Accordion, {
        title: "2021.07",
        id: "202107",
        headingLevel: 2,
        value: "202107",
        children: [_jsx(_components.p, {
          children: "This release includes changes to the Data Insights function as follows:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Optimizes the usage and quality metrics and adds options for data granularity."
          }), `
`, _jsx(_components.li, {
            children: "Improves the Data Insights RESTful APIs:"
          }), `
`, _jsx(_components.li, {
            children: "Updates the /beta/insight/usage/by_time endpoint."
          }), `
`, _jsxs(_components.li, {
            children: ["Adds the /beta/insight/quality/by_time (", _jsx(_components.a, {
              href: "api.md",
              children: "Query quality metrics"
            }), ") endpoint."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2021.05",
        id: "202105",
        headingLevel: 2,
        value: "202105",
        children: [_jsx(_components.p, {
          children: "This release includes changes to the Call Inspector RESTful APIs as follows:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Updates the /beta/analytics/call/lists endpoint."
          }), `
`, _jsxs(_components.li, {
            children: ["Replaces the /beta/analytics/call/details endpoint with /beta/analytics/call/sessions (", _jsx(_components.a, {
              href: "api.md",
              children: "Get session details"
            }), ") and /beta/analytics/call/metrics (", _jsx(_components.a, {
              href: "api.md",
              children: "Get quality metrics"
            }), ")."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2020.09",
        id: "202009",
        headingLevel: 2,
        value: "202009",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New features"
          })
        }), _jsx(_components.h4, {
          id: "1-big-channel-restful-api-beta",
          children: "1. Big Channel RESTful API (Beta)"
        }), _jsx(_components.p, {
          children: "This release adds the Big Channel RESTful API, and you can get the following data:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "The number of users who have a poor communication experience in a Big Channel. Poor communication experience in this case refers to video freezes and channel-join delay."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "The number of users who try to join a Big Channel."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Users' call rating for a Big Channel."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "The number of online users in a Big Channel."
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Improvement"
          })
        }), _jsx(_components.h4, {
          id: "1-call-inspector",
          children: "1. Call Inspector"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Moves the event timeline from the ", _jsx(_components.strong, {
                children: "Quality of Experience Overview"
              }), " page to the ", _jsx(_components.strong, {
                children: "End-to-End Details"
              }), " page. You can see the event timeline on the ", _jsx(_components.strong, {
                children: "Audio/Video Upstream Bitrate and Packet Loss"
              }), " and ", _jsx(_components.strong, {
                children: "Audio/Video Downstream Bitrate and End-to-End Packet Loss"
              }), " diagrams."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Adds the following statistics on the ", _jsx(_components.strong, {
                children: "End-to-End Details"
              }), " page:"]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Bitrate of the sent high-quality video"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Bitrate of the sent low-quality video"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Frame rate of the captured video"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Resolution of the sent video"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Supports submitting a ticket on the ", _jsx(_components.strong, {
                children: "Quality of Experience Overview"
              }), " page."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Improves the user interface design."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "2-others",
          children: "2. Others"
        }), _jsx(_components.p, {
          children: "Except for RESTful APIs, all Agora Analytics functions use the local time zone by default."
        })]
      }), _jsx(Accordion, {
        title: "2020.05",
        id: "202005",
        headingLevel: 2,
        value: "202005",
        children: _jsx(_components.p, {
          children: "This release adds the Real-time Alarm function (Beta), to help you identify abnormalities, analyze quality factors, and locate the source of each abnormal issue, all in real time."
        })
      }), _jsx(Accordion, {
        title: "2020.01",
        id: "202001",
        headingLevel: 2,
        value: "202001",
        children: _jsx(_components.p, {
          children: "This release adds the Big Channel function (Beta), which provides the Big Channel monitoring and issues diagnosis, and improves the operational efficiency of user activities in Big Channels."
        })
      }), _jsx(Accordion, {
        title: "2019.10",
        id: "201910",
        headingLevel: 2,
        value: "201910",
        children: _jsxs(_components.p, {
          children: ["This release adds the Realtime function (Beta), which helps to monitor the live status of your project. It also informs you of any abnormalities that occur along with their root cause. See details in ", _jsx(_components.a, {
            href: "../build/monitor-and-get-alerts/monitor.md",
            children: "Realtime Monitor"
          }), "."]
        })
      }), _jsx(Accordion, {
        title: "2019.09",
        id: "201909",
        headingLevel: 2,
        value: "201909",
        children: _jsxs(_components.p, {
          children: ["This release adds the Data Insights function (Beta), which provides statistics on the usage and quality of your project over a specified period of time. You can view the quality statistics in various dimensions, such as country and SDK version. See details in ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/data-insight.md",
            children: "Data Insights"
          }), "."]
        })
      }), _jsx(Accordion, {
        title: "2019.08",
        id: "201908",
        headingLevel: 2,
        value: "201908",
        children: _jsx(_components.p, {
          children: "This release adds key events in Call Inspector function, which improves the efficiency of call search."
        })
      }), _jsx(Accordion, {
        title: "2018.08",
        id: "201808",
        headingLevel: 2,
        value: "201808",
        children: _jsxs(_components.p, {
          children: ["This release provides Call Inspector function, which helps to search calls and analyze quality issues. See details in ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/call-search.md",
            children: "Call Inspector"
          }), "."]
        })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
