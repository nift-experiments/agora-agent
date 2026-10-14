import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Data Insights",
  description: "Provides periodic call-usage and call-quality statistics."
};
export let _markdown = `

**Data Insights** are designed to help you understand the usage and quality of calls in your app. You can view their distribution in multiple dimensions with daily and hourly data breakdown.

## Getting started [#getting-started]

1. Subscribe to a [pricing plan](../../reference/pricing.md) to enable the **Data Insights** feature for your project.

2. Log in to [Agora Console](https://console.agora.io/) and click **Agora Analytics** on the left navigation bar.

3. Select a project in the top-left corner.

4. Click **Usage Insights** to view the usage statistics or **Quality Insights** to view the quality statistics.

5. Configure the data filter:

* **Usage Insights**: Select the timezone, data granularity, and time frame in the upper-right corner.

![usage-insights-filters](https://assets-docs.agora.io/images/analytics/usage-insights-filters.png)

* **Quality Insights**: Select the product type in the upper-left corner, and the timezone, data granularity, and time frame in the upper-right corner.

![quality-insights-filters](https://assets-docs.agora.io/images/analytics/quality-insights-filters.png)

## Usage Insights [#usage-insights]

![rtm-peak-traffic](https://assets-docs.agora.io/images/analytics/rtm-peak-traffic.png)

The **Usage Insights** page presents metrics that can help you locate the dates with abnormalities and understand how usage is distributed in different dimensions.

<div class="alert warning">**Disclaimer**: The usage data provided in the Usage Overview page is for reference only and is not used for billing calculation.</div>

**Peak traffic**, **Channel and user count**, and **Service minutes** represent the overall trend. In each section, the summary boxes in the upper-left corner highlight the aggregate or peak value of each usage metric, and the line chart in the bottom area shows the daily values of each usage metric. Click **All data** in the top-right corner of each section to download the data or view it in the table form.

These metrics are described in [Usage metrics](#usage-metrics).

Each line chart provides the following features:

* Hide and display: To hide or display the line for a usage metric, click on the corresponding summary box.

* Change time selection: When data granularity is set to **By day** in the data filter, you can click a data point and select **Hourly data**, which changes the data granularity to hourly and the time frame to the corresponding hour. To switch back to the original time selection, click **Restore filter** at the top.

* Jump to Metric Analysis: To jump to the Metric Analysis panel of a usage metric for a specific day, click the corresponding data point on the line and select **Metric Analysis**.

### Metric Analysis [#metric-analysis]

![metric-analysis](https://assets-docs.agora.io/images/analytics/metric-analysis.png)

The **Metric Analysis** panel has six sections: **Region**, **Network type**, **Operating system**, **SDK version**, **Device type**, and **Channel size**. Each section presents the top six values for that dimension in the chart form.

In the top-left corner of the panel, you can select the usage metric you want to view. In the top-right corner of each section, you can click **All data** to download the data or view it in the table form.

The six dimensions are described in [Dimensions](#dimensions).

### Media Service [#media-service]

![rtm-media-service](https://assets-docs.agora.io/images/analytics/rtm-media-service.png)

The **Media Service** panel presents peak numbers for Cloud Recording and Media Pull concurrent workers in the line chart form. Hover over a data point to see the value and its change compared to the previous week. The summary boxes in the upper-left corner highlight maximum values.

## Quality Insights [#quality-insights]

![rtm-user-experience](https://assets-docs.agora.io/images/analytics/rtm-user-experience.png)

The **Quality Insights** page presents metrics that can help you locate the dates and hours with abnormalities and understand how quality is related to usage in different dimensions.

The **User experience** and **Success at joining channels** panels represent the overall trend. In each section, the summary boxes in the upper-left corner highlight the peak or bottom value of each quality metric, and the line chart in the bottom area shows the daily or hourly values of each quality metric. You can click **All data** in the top-right corner of the section to download the data or view it in the table form.

The quality metrics are described in [Quality metrics](#quality-metrics).

Each line chart provides the following features:

* Hide and display: To hide or display the line for a quality metric, click on the corresponding summary box.

* Change time selection:

  * When data granularity is set to **By day** in the data filter, you can click a data point and select **Hourly data**, which changes the data granularity to hourly and the time frame to the corresponding hour. To switch back to the original filter setting, click **Restore filter** at the top.

  * When data granularity is set to **By hour** in the data filter, you can click a data point and select **Minutely data**, which changes the data granularity to by minute and the time frame to the corresponding minute. To switch back to the original filter setting, click **Restore filter** at the top.

* Jump to Metric Analysis: To jump to the Metric Analysis panel of a quality metric for a specific day or hour, click the corresponding data point on the line and select **Metric Analysis**.

Additionally, the line chart for **User experience** provides the data sampling feature:

* Channel data sampling: When data granularity is set to **By day** or **By minute**, click a data point and select **Channel data sampling** to view its scatter chart. The X coordinates are described in [Quality metrics](#quality-metrics).

* User data sampling: On the scatter chart, click a data point and select **User data sampling** to view the top six users who experience a high freeze rate. To view call quality details about a user, click **Call Inspector** to use the [Call Inspector](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search) function.

### Metric Analysis [#metric-analysis-1]

![metric-analysis](https://assets-docs.agora.io/images/analytics/quality-metric-analysis.png)

The **Metric Analysis** panel has six sections: **Region**, **Network type**, **Operating system**, **SDK version**, **Device type**, and **Channel size**. Each section presents the connection between quality and usage in the chart form.

In the top-left corner of the panel, you can select the quality metric you want to view. In the top-right corner of each section, you can click **All data** to download the data or view it in table form.

The six dimensions are described in [Dimensions](#dimensions).

In the country and region bubble charts, the Y coordinate is the value of the selected metric, and the corresponding X coordinate is listed in [Quality metrics](#quality-metrics). The bubble color represents whether the metric value is normal. The bubble turns red if one of the following occurs:

* The video freeze rate exceeds 5%.
* The audio freeze rate exceeds 3%.
* The network delay rate exceeds 10%.
* The success rate of users joining channels is below 95%, or the success rate of users joining channels within 5 seconds is below 95%.

## Key terms [#key-terms]

This section describes the key terms used in **Data Insights**. See [Agora Key Terms](../../reference/glossary.md) for more key terms.

### Channel [#channel]

Every audio or video call happens in a channel. If an app is a building, a channel is a room in the building.

**Data Insights** does not count a channel by name, but by lifecycle. A channel is counted once for each period of time between when the first user joins it until the last user leaves it. That is, it is not counted when there are no users.

### User [#user]

Each user in a channel is identified by a unique [user ID](../../reference/glossary.md). There can never be two identical user IDs in a channel.

**Data Insights** counts each instance of a unique user ID. If a real-life user joins one channel using multiple user IDs, or joins multiple channels using one user ID, **Data Insights** counts the user in both situations as multiple users.

### Usage metrics [#usage-metrics]

| Usage metric                          | Description                                                                                                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Peak channel traffic                  | The maximum number of channels in use.                                                                                                                                |
| Peak user traffic                     | The maximum number of in-call users across all channels.                                                                                                              |
| Total number of channels              | A channel is counted once for each period of time between when the first user joins it until the last user leaves it.                                                 |
| Total number of users                 | The number of users across all channels. A user joining one channel using multiple user IDs or joining multiple channels using one user ID is counted multiple times. |
| Total count of users joining channels | Each time any user ID joins any channel is counted.                                                                                                                   |
| Total minutes                         | The total duration of video and audio-only calls calculated by the number of users.                                                                                   |
| Video minutes                         | The total duration of video calls calculated by the number of users.                                                                                                  |
| Audio minutes                         | The total duration of audio-only calls calculated by the number of users                                                                                              |

### Quality metrics [#quality-metrics]

| Quality metric                                          | Description                                                                                                                                                                                                                       | X coordinate in scatter chart                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Video freeze rate                                       | The rate at which video freezing occurs, which equals Total video freeze time ÷ Total video minutes calculated by the number of streams①. Only video freezes longer than 600 milliseconds are counted.                            | Total video minutes calculated by the number of streams           |
| Audio freeze rate                                       | The rate at which audio freezing occurs, which equals Total audio freeze time ÷ Total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted.                             | Total audio minutes calculated by the number of streams           |
| Network delay rate                                      | The rate at which network delay occurs, which equals Total end-to-end network delay ÷ Total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted. | Total audio and video minutes calculated by the number of streams |
| Success rate of users joining channels                  | The rate at which users attempting to join any channel succeed, which equals Number of users who have joined ÷ Number of attempts to join                                                                                         | Number of attempts to join a channel                              |
| Success rate of users joining channels within 5 seconds | The rate at which users attempting to join any channel succeed within 5 seconds, which equals Number of users who have joined within 5 seconds ÷ Number of attempts to join                                                       | Number of attempts to join a channel                              |

### Dimensions [#dimensions]

| Dimension        | Description                                             |
| ---------------- | ------------------------------------------------------- |
| Geography        | The country and region from which the user connects.    |
| Network type     | The user’s network type, such as Wi-Fi or 4G.           |
| Operating system | The user’s operating system, such as Windows or iOS.    |
| SDK version      | The version number of the SDK that implements the call. |
| Device type      | The user’s device type.                                 |
| Channel size     | The number of users in the channel.                     |

### Calculating usage by the number of users vs. by the number of streams [#calculating-usage-by-the-number-of-users-vs-by-the-number-of-streams]

There are two different approaches to calculating RTC SDK service minutes for a channel: by the number of users in the channel, and by the number of streams each user is subscribed to in the channel. Their difference is described in [How does Agora calculate service minutes](../../reference/billing-policies.md).

### Data sampling criteria [#data-sampling-criteria]

Line charts under the **Overall Trend** panel on the **Quality Overview** page support data sampling. The data sampling criteria is defined as follows:

| Line chart         | Data sampling criteria                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Video freeze rate  | The video freeze rate exceeds 5%, and the video minutes across all channels exceed 100 in one minute.   |
| Audio freeze rate  | The audio freeze rate exceeds 3%, and the audio minutes across all channels exceed 100 in one minute.   |
| Network delay rate | The network delay rate exceeds 10%, and the total minutes across all channels exceed 100 in one minute. |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "**Data Insights** are designed to help you understand the usage and quality of calls in your app. You can view their distribution in multiple dimensions with daily and hourly data breakdown."
  }, {
    heading: "getting-started",
    content: "Subscribe to a pricing plan to enable the **Data Insights** feature for your project."
  }, {
    heading: "getting-started",
    content: "Log in to Agora Console and click **Agora Analytics** on the left navigation bar."
  }, {
    heading: "getting-started",
    content: "Select a project in the top-left corner."
  }, {
    heading: "getting-started",
    content: "Click **Usage Insights** to view the usage statistics or **Quality Insights** to view the quality statistics."
  }, {
    heading: "getting-started",
    content: "Configure the data filter:"
  }, {
    heading: "getting-started",
    content: "**Usage Insights**: Select the timezone, data granularity, and time frame in the upper-right corner."
  }, {
    heading: "getting-started",
    content: "**Quality Insights**: Select the product type in the upper-left corner, and the timezone, data granularity, and time frame in the upper-right corner."
  }, {
    heading: "usage-insights",
    content: "The **Usage Insights** page presents metrics that can help you locate the dates with abnormalities and understand how usage is distributed in different dimensions."
  }, {
    heading: "usage-insights",
    content: "**Peak traffic**, **Channel and user count**, and **Service minutes** represent the overall trend. In each section, the summary boxes in the upper-left corner highlight the aggregate or peak value of each usage metric, and the line chart in the bottom area shows the daily values of each usage metric. Click **All data** in the top-right corner of each section to download the data or view it in the table form."
  }, {
    heading: "usage-insights",
    content: "These metrics are described in Usage metrics."
  }, {
    heading: "usage-insights",
    content: "Each line chart provides the following features:"
  }, {
    heading: "usage-insights",
    content: "Hide and display: To hide or display the line for a usage metric, click on the corresponding summary box."
  }, {
    heading: "usage-insights",
    content: "Change time selection: When data granularity is set to **By day** in the data filter, you can click a data point and select **Hourly data**, which changes the data granularity to hourly and the time frame to the corresponding hour. To switch back to the original time selection, click **Restore filter** at the top."
  }, {
    heading: "usage-insights",
    content: "Jump to Metric Analysis: To jump to the Metric Analysis panel of a usage metric for a specific day, click the corresponding data point on the line and select **Metric Analysis**."
  }, {
    heading: "metric-analysis",
    content: "The **Metric Analysis** panel has six sections: **Region**, **Network type**, **Operating system**, **SDK version**, **Device type**, and **Channel size**. Each section presents the top six values for that dimension in the chart form."
  }, {
    heading: "metric-analysis",
    content: "In the top-left corner of the panel, you can select the usage metric you want to view. In the top-right corner of each section, you can click **All data** to download the data or view it in the table form."
  }, {
    heading: "metric-analysis",
    content: "The six dimensions are described in Dimensions."
  }, {
    heading: "media-service",
    content: "The **Media Service** panel presents peak numbers for Cloud Recording and Media Pull concurrent workers in the line chart form. Hover over a data point to see the value and its change compared to the previous week. The summary boxes in the upper-left corner highlight maximum values."
  }, {
    heading: "quality-insights",
    content: "The **Quality Insights** page presents metrics that can help you locate the dates and hours with abnormalities and understand how quality is related to usage in different dimensions."
  }, {
    heading: "quality-insights",
    content: "The **User experience** and **Success at joining channels** panels represent the overall trend. In each section, the summary boxes in the upper-left corner highlight the peak or bottom value of each quality metric, and the line chart in the bottom area shows the daily or hourly values of each quality metric. You can click **All data** in the top-right corner of the section to download the data or view it in the table form."
  }, {
    heading: "quality-insights",
    content: "The quality metrics are described in Quality metrics."
  }, {
    heading: "quality-insights",
    content: "Each line chart provides the following features:"
  }, {
    heading: "quality-insights",
    content: "Hide and display: To hide or display the line for a quality metric, click on the corresponding summary box."
  }, {
    heading: "quality-insights",
    content: "Change time selection:"
  }, {
    heading: "quality-insights",
    content: "When data granularity is set to **By day** in the data filter, you can click a data point and select **Hourly data**, which changes the data granularity to hourly and the time frame to the corresponding hour. To switch back to the original filter setting, click **Restore filter** at the top."
  }, {
    heading: "quality-insights",
    content: "When data granularity is set to **By hour** in the data filter, you can click a data point and select **Minutely data**, which changes the data granularity to by minute and the time frame to the corresponding minute. To switch back to the original filter setting, click **Restore filter** at the top."
  }, {
    heading: "quality-insights",
    content: "Jump to Metric Analysis: To jump to the Metric Analysis panel of a quality metric for a specific day or hour, click the corresponding data point on the line and select **Metric Analysis**."
  }, {
    heading: "quality-insights",
    content: "Additionally, the line chart for **User experience** provides the data sampling feature:"
  }, {
    heading: "quality-insights",
    content: "Channel data sampling: When data granularity is set to **By day** or **By minute**, click a data point and select **Channel data sampling** to view its scatter chart. The X coordinates are described in Quality metrics."
  }, {
    heading: "quality-insights",
    content: "User data sampling: On the scatter chart, click a data point and select **User data sampling** to view the top six users who experience a high freeze rate. To view call quality details about a user, click **Call Inspector** to use the Call Inspector function."
  }, {
    heading: "metric-analysis-1",
    content: "The **Metric Analysis** panel has six sections: **Region**, **Network type**, **Operating system**, **SDK version**, **Device type**, and **Channel size**. Each section presents the connection between quality and usage in the chart form."
  }, {
    heading: "metric-analysis-1",
    content: "In the top-left corner of the panel, you can select the quality metric you want to view. In the top-right corner of each section, you can click **All data** to download the data or view it in table form."
  }, {
    heading: "metric-analysis-1",
    content: "The six dimensions are described in Dimensions."
  }, {
    heading: "metric-analysis-1",
    content: "In the country and region bubble charts, the Y coordinate is the value of the selected metric, and the corresponding X coordinate is listed in Quality metrics. The bubble color represents whether the metric value is normal. The bubble turns red if one of the following occurs:"
  }, {
    heading: "metric-analysis-1",
    content: "The video freeze rate exceeds 5%."
  }, {
    heading: "metric-analysis-1",
    content: "The audio freeze rate exceeds 3%."
  }, {
    heading: "metric-analysis-1",
    content: "The network delay rate exceeds 10%."
  }, {
    heading: "metric-analysis-1",
    content: "The success rate of users joining channels is below 95%, or the success rate of users joining channels within 5 seconds is below 95%."
  }, {
    heading: "key-terms",
    content: "This section describes the key terms used in **Data Insights**. See Agora Key Terms for more key terms."
  }, {
    heading: "channel",
    content: "Every audio or video call happens in a channel. If an app is a building, a channel is a room in the building."
  }, {
    heading: "channel",
    content: "**Data Insights** does not count a channel by name, but by lifecycle. A channel is counted once for each period of time between when the first user joins it until the last user leaves it. That is, it is not counted when there are no users."
  }, {
    heading: "user",
    content: "Each user in a channel is identified by a unique user ID. There can never be two identical user IDs in a channel."
  }, {
    heading: "user",
    content: "**Data Insights** counts each instance of a unique user ID. If a real-life user joins one channel using multiple user IDs, or joins multiple channels using one user ID, **Data Insights** counts the user in both situations as multiple users."
  }, {
    heading: "usage-metrics",
    content: "Usage metric"
  }, {
    heading: "usage-metrics",
    content: "Description"
  }, {
    heading: "usage-metrics",
    content: "Peak channel traffic"
  }, {
    heading: "usage-metrics",
    content: "The maximum number of channels in use."
  }, {
    heading: "usage-metrics",
    content: "Peak user traffic"
  }, {
    heading: "usage-metrics",
    content: "The maximum number of in-call users across all channels."
  }, {
    heading: "usage-metrics",
    content: "Total number of channels"
  }, {
    heading: "usage-metrics",
    content: "A channel is counted once for each period of time between when the first user joins it until the last user leaves it."
  }, {
    heading: "usage-metrics",
    content: "Total number of users"
  }, {
    heading: "usage-metrics",
    content: "The number of users across all channels. A user joining one channel using multiple user IDs or joining multiple channels using one user ID is counted multiple times."
  }, {
    heading: "usage-metrics",
    content: "Total count of users joining channels"
  }, {
    heading: "usage-metrics",
    content: "Each time any user ID joins any channel is counted."
  }, {
    heading: "usage-metrics",
    content: "Total minutes"
  }, {
    heading: "usage-metrics",
    content: "The total duration of video and audio-only calls calculated by the number of users."
  }, {
    heading: "usage-metrics",
    content: "Video minutes"
  }, {
    heading: "usage-metrics",
    content: "The total duration of video calls calculated by the number of users."
  }, {
    heading: "usage-metrics",
    content: "Audio minutes"
  }, {
    heading: "usage-metrics",
    content: "The total duration of audio-only calls calculated by the number of users"
  }, {
    heading: "quality-metrics",
    content: "Quality metric"
  }, {
    heading: "quality-metrics",
    content: "Description"
  }, {
    heading: "quality-metrics",
    content: "X coordinate in scatter chart"
  }, {
    heading: "quality-metrics",
    content: "Video freeze rate"
  }, {
    heading: "quality-metrics",
    content: "The rate at which video freezing occurs, which equals Total video freeze time ÷ Total video minutes calculated by the number of streams①. Only video freezes longer than 600 milliseconds are counted."
  }, {
    heading: "quality-metrics",
    content: "Total video minutes calculated by the number of streams"
  }, {
    heading: "quality-metrics",
    content: "Audio freeze rate"
  }, {
    heading: "quality-metrics",
    content: "The rate at which audio freezing occurs, which equals Total audio freeze time ÷ Total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted."
  }, {
    heading: "quality-metrics",
    content: "Total audio minutes calculated by the number of streams"
  }, {
    heading: "quality-metrics",
    content: "Network delay rate"
  }, {
    heading: "quality-metrics",
    content: "The rate at which network delay occurs, which equals Total end-to-end network delay ÷ Total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted."
  }, {
    heading: "quality-metrics",
    content: "Total audio and video minutes calculated by the number of streams"
  }, {
    heading: "quality-metrics",
    content: "Success rate of users joining channels"
  }, {
    heading: "quality-metrics",
    content: "The rate at which users attempting to join any channel succeed, which equals Number of users who have joined ÷ Number of attempts to join"
  }, {
    heading: "quality-metrics",
    content: "Number of attempts to join a channel"
  }, {
    heading: "quality-metrics",
    content: "Success rate of users joining channels within 5 seconds"
  }, {
    heading: "quality-metrics",
    content: "The rate at which users attempting to join any channel succeed within 5 seconds, which equals Number of users who have joined within 5 seconds ÷ Number of attempts to join"
  }, {
    heading: "quality-metrics",
    content: "Number of attempts to join a channel"
  }, {
    heading: "dimensions",
    content: "Dimension"
  }, {
    heading: "dimensions",
    content: "Description"
  }, {
    heading: "dimensions",
    content: "Geography"
  }, {
    heading: "dimensions",
    content: "The country and region from which the user connects."
  }, {
    heading: "dimensions",
    content: "Network type"
  }, {
    heading: "dimensions",
    content: "The user’s network type, such as Wi-Fi or 4G."
  }, {
    heading: "dimensions",
    content: "Operating system"
  }, {
    heading: "dimensions",
    content: "The user’s operating system, such as Windows or iOS."
  }, {
    heading: "dimensions",
    content: "SDK version"
  }, {
    heading: "dimensions",
    content: "The version number of the SDK that implements the call."
  }, {
    heading: "dimensions",
    content: "Device type"
  }, {
    heading: "dimensions",
    content: "The user’s device type."
  }, {
    heading: "dimensions",
    content: "Channel size"
  }, {
    heading: "dimensions",
    content: "The number of users in the channel."
  }, {
    heading: "calculating-usage-by-the-number-of-users-vs-by-the-number-of-streams",
    content: "There are two different approaches to calculating RTC SDK service minutes for a channel: by the number of users in the channel, and by the number of streams each user is subscribed to in the channel. Their difference is described in How does Agora calculate service minutes."
  }, {
    heading: "data-sampling-criteria",
    content: "Line charts under the **Overall Trend** panel on the **Quality Overview** page support data sampling. The data sampling criteria is defined as follows:"
  }, {
    heading: "data-sampling-criteria",
    content: "Line chart"
  }, {
    heading: "data-sampling-criteria",
    content: "Data sampling criteria"
  }, {
    heading: "data-sampling-criteria",
    content: "Video freeze rate"
  }, {
    heading: "data-sampling-criteria",
    content: "The video freeze rate exceeds 5%, and the video minutes across all channels exceed 100 in one minute."
  }, {
    heading: "data-sampling-criteria",
    content: "Audio freeze rate"
  }, {
    heading: "data-sampling-criteria",
    content: "The audio freeze rate exceeds 3%, and the audio minutes across all channels exceed 100 in one minute."
  }, {
    heading: "data-sampling-criteria",
    content: "Network delay rate"
  }, {
    heading: "data-sampling-criteria",
    content: "The network delay rate exceeds 10%, and the total minutes across all channels exceed 100 in one minute."
  }],
  headings: [{
    id: "getting-started",
    content: "Getting started"
  }, {
    id: "usage-insights",
    content: "Usage Insights"
  }, {
    id: "metric-analysis",
    content: "Metric Analysis"
  }, {
    id: "media-service",
    content: "Media Service"
  }, {
    id: "quality-insights",
    content: "Quality Insights"
  }, {
    id: "metric-analysis-1",
    content: "Metric Analysis"
  }, {
    id: "key-terms",
    content: "Key terms"
  }, {
    id: "channel",
    content: "Channel"
  }, {
    id: "user",
    content: "User"
  }, {
    id: "usage-metrics",
    content: "Usage metrics"
  }, {
    id: "quality-metrics",
    content: "Quality metrics"
  }, {
    id: "dimensions",
    content: "Dimensions"
  }, {
    id: "calculating-usage-by-the-number-of-users-vs-by-the-number-of-streams",
    content: "Calculating usage by the number of users vs. by the number of streams"
  }, {
    id: "data-sampling-criteria",
    content: "Data sampling criteria"
  }]
};
export let toc = [{
  depth: 2,
  url: "#getting-started",
  title: _jsx(_Fragment, {
    children: "Getting started"
  })
}, {
  depth: 2,
  url: "#usage-insights",
  title: _jsx(_Fragment, {
    children: "Usage Insights"
  })
}, {
  depth: 3,
  url: "#metric-analysis",
  title: _jsx(_Fragment, {
    children: "Metric Analysis"
  })
}, {
  depth: 3,
  url: "#media-service",
  title: _jsx(_Fragment, {
    children: "Media Service"
  })
}, {
  depth: 2,
  url: "#quality-insights",
  title: _jsx(_Fragment, {
    children: "Quality Insights"
  })
}, {
  depth: 3,
  url: "#metric-analysis-1",
  title: _jsx(_Fragment, {
    children: "Metric Analysis"
  })
}, {
  depth: 2,
  url: "#key-terms",
  title: _jsx(_Fragment, {
    children: "Key terms"
  })
}, {
  depth: 3,
  url: "#channel",
  title: _jsx(_Fragment, {
    children: "Channel"
  })
}, {
  depth: 3,
  url: "#user",
  title: _jsx(_Fragment, {
    children: "User"
  })
}, {
  depth: 3,
  url: "#usage-metrics",
  title: _jsx(_Fragment, {
    children: "Usage metrics"
  })
}, {
  depth: 3,
  url: "#quality-metrics",
  title: _jsx(_Fragment, {
    children: "Quality metrics"
  })
}, {
  depth: 3,
  url: "#dimensions",
  title: _jsx(_Fragment, {
    children: "Dimensions"
  })
}, {
  depth: 3,
  url: "#calculating-usage-by-the-number-of-users-vs-by-the-number-of-streams",
  title: _jsx(_Fragment, {
    children: "Calculating usage by the number of users vs. by the number of streams"
  })
}, {
  depth: 3,
  url: "#data-sampling-criteria",
  title: _jsx(_Fragment, {
    children: "Data sampling criteria"
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
    children: [_jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Data Insights"
      }), " are designed to help you understand the usage and quality of calls in your app. You can view their distribution in multiple dimensions with daily and hourly data breakdown."]
    }), `
`, _jsx(_components.h2, {
      id: "getting-started",
      children: "Getting started"
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
            children: "Data Insights"
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
          }), " on the left navigation bar."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Select a project in the top-left corner."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Usage Insights"
          }), " to view the usage statistics or ", _jsx(_components.strong, {
            children: "Quality Insights"
          }), " to view the quality statistics."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Configure the data filter:"
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Usage Insights"
        }), ": Select the timezone, data granularity, and time frame in the upper-right corner."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/usage-insights-filters.png",
        alt: "usage-insights-filters"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Quality Insights"
        }), ": Select the product type in the upper-left corner, and the timezone, data granularity, and time frame in the upper-right corner."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/quality-insights-filters.png",
        alt: "quality-insights-filters"
      })
    }), `
`, _jsx(_components.h2, {
      id: "usage-insights",
      children: "Usage Insights"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/rtm-peak-traffic.png",
        alt: "rtm-peak-traffic"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Usage Insights"
      }), " page presents metrics that can help you locate the dates with abnormalities and understand how usage is distributed in different dimensions."]
    }), `
`, `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Peak traffic"
      }), ", ", _jsx(_components.strong, {
        children: "Channel and user count"
      }), ", and ", _jsx(_components.strong, {
        children: "Service minutes"
      }), " represent the overall trend. In each section, the summary boxes in the upper-left corner highlight the aggregate or peak value of each usage metric, and the line chart in the bottom area shows the daily values of each usage metric. Click ", _jsx(_components.strong, {
        children: "All data"
      }), " in the top-right corner of each section to download the data or view it in the table form."]
    }), `
`, _jsxs(_components.p, {
      children: ["These metrics are described in ", _jsx(_components.a, {
        href: "#usage-metrics",
        children: "Usage metrics"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Each line chart provides the following features:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Hide and display: To hide or display the line for a usage metric, click on the corresponding summary box."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Change time selection: When data granularity is set to ", _jsx(_components.strong, {
            children: "By day"
          }), " in the data filter, you can click a data point and select ", _jsx(_components.strong, {
            children: "Hourly data"
          }), ", which changes the data granularity to hourly and the time frame to the corresponding hour. To switch back to the original time selection, click ", _jsx(_components.strong, {
            children: "Restore filter"
          }), " at the top."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Jump to Metric Analysis: To jump to the Metric Analysis panel of a usage metric for a specific day, click the corresponding data point on the line and select ", _jsx(_components.strong, {
            children: "Metric Analysis"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "metric-analysis",
      children: "Metric Analysis"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/metric-analysis.png",
        alt: "metric-analysis"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Metric Analysis"
      }), " panel has six sections: ", _jsx(_components.strong, {
        children: "Region"
      }), ", ", _jsx(_components.strong, {
        children: "Network type"
      }), ", ", _jsx(_components.strong, {
        children: "Operating system"
      }), ", ", _jsx(_components.strong, {
        children: "SDK version"
      }), ", ", _jsx(_components.strong, {
        children: "Device type"
      }), ", and ", _jsx(_components.strong, {
        children: "Channel size"
      }), ". Each section presents the top six values for that dimension in the chart form."]
    }), `
`, _jsxs(_components.p, {
      children: ["In the top-left corner of the panel, you can select the usage metric you want to view. In the top-right corner of each section, you can click ", _jsx(_components.strong, {
        children: "All data"
      }), " to download the data or view it in the table form."]
    }), `
`, _jsxs(_components.p, {
      children: ["The six dimensions are described in ", _jsx(_components.a, {
        href: "#dimensions",
        children: "Dimensions"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "media-service",
      children: "Media Service"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/rtm-media-service.png",
        alt: "rtm-media-service"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Media Service"
      }), " panel presents peak numbers for Cloud Recording and Media Pull concurrent workers in the line chart form. Hover over a data point to see the value and its change compared to the previous week. The summary boxes in the upper-left corner highlight maximum values."]
    }), `
`, _jsx(_components.h2, {
      id: "quality-insights",
      children: "Quality Insights"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/rtm-user-experience.png",
        alt: "rtm-user-experience"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Quality Insights"
      }), " page presents metrics that can help you locate the dates and hours with abnormalities and understand how quality is related to usage in different dimensions."]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "User experience"
      }), " and ", _jsx(_components.strong, {
        children: "Success at joining channels"
      }), " panels represent the overall trend. In each section, the summary boxes in the upper-left corner highlight the peak or bottom value of each quality metric, and the line chart in the bottom area shows the daily or hourly values of each quality metric. You can click ", _jsx(_components.strong, {
        children: "All data"
      }), " in the top-right corner of the section to download the data or view it in the table form."]
    }), `
`, _jsxs(_components.p, {
      children: ["The quality metrics are described in ", _jsx(_components.a, {
        href: "#quality-metrics",
        children: "Quality metrics"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Each line chart provides the following features:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Hide and display: To hide or display the line for a quality metric, click on the corresponding summary box."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Change time selection:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When data granularity is set to ", _jsx(_components.strong, {
                children: "By day"
              }), " in the data filter, you can click a data point and select ", _jsx(_components.strong, {
                children: "Hourly data"
              }), ", which changes the data granularity to hourly and the time frame to the corresponding hour. To switch back to the original filter setting, click ", _jsx(_components.strong, {
                children: "Restore filter"
              }), " at the top."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When data granularity is set to ", _jsx(_components.strong, {
                children: "By hour"
              }), " in the data filter, you can click a data point and select ", _jsx(_components.strong, {
                children: "Minutely data"
              }), ", which changes the data granularity to by minute and the time frame to the corresponding minute. To switch back to the original filter setting, click ", _jsx(_components.strong, {
                children: "Restore filter"
              }), " at the top."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Jump to Metric Analysis: To jump to the Metric Analysis panel of a quality metric for a specific day or hour, click the corresponding data point on the line and select ", _jsx(_components.strong, {
            children: "Metric Analysis"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Additionally, the line chart for ", _jsx(_components.strong, {
        children: "User experience"
      }), " provides the data sampling feature:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Channel data sampling: When data granularity is set to ", _jsx(_components.strong, {
            children: "By day"
          }), " or ", _jsx(_components.strong, {
            children: "By minute"
          }), ", click a data point and select ", _jsx(_components.strong, {
            children: "Channel data sampling"
          }), " to view its scatter chart. The X coordinates are described in ", _jsx(_components.a, {
            href: "#quality-metrics",
            children: "Quality metrics"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["User data sampling: On the scatter chart, click a data point and select ", _jsx(_components.strong, {
            children: "User data sampling"
          }), " to view the top six users who experience a high freeze rate. To view call quality details about a user, click ", _jsx(_components.strong, {
            children: "Call Inspector"
          }), " to use the ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
            children: "Call Inspector"
          }), " function."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "metric-analysis-1",
      children: "Metric Analysis"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/quality-metric-analysis.png",
        alt: "metric-analysis"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Metric Analysis"
      }), " panel has six sections: ", _jsx(_components.strong, {
        children: "Region"
      }), ", ", _jsx(_components.strong, {
        children: "Network type"
      }), ", ", _jsx(_components.strong, {
        children: "Operating system"
      }), ", ", _jsx(_components.strong, {
        children: "SDK version"
      }), ", ", _jsx(_components.strong, {
        children: "Device type"
      }), ", and ", _jsx(_components.strong, {
        children: "Channel size"
      }), ". Each section presents the connection between quality and usage in the chart form."]
    }), `
`, _jsxs(_components.p, {
      children: ["In the top-left corner of the panel, you can select the quality metric you want to view. In the top-right corner of each section, you can click ", _jsx(_components.strong, {
        children: "All data"
      }), " to download the data or view it in table form."]
    }), `
`, _jsxs(_components.p, {
      children: ["The six dimensions are described in ", _jsx(_components.a, {
        href: "#dimensions",
        children: "Dimensions"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["In the country and region bubble charts, the Y coordinate is the value of the selected metric, and the corresponding X coordinate is listed in ", _jsx(_components.a, {
        href: "#quality-metrics",
        children: "Quality metrics"
      }), ". The bubble color represents whether the metric value is normal. The bubble turns red if one of the following occurs:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The video freeze rate exceeds 5%."
      }), `
`, _jsx(_components.li, {
        children: "The audio freeze rate exceeds 3%."
      }), `
`, _jsx(_components.li, {
        children: "The network delay rate exceeds 10%."
      }), `
`, _jsx(_components.li, {
        children: "The success rate of users joining channels is below 95%, or the success rate of users joining channels within 5 seconds is below 95%."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "key-terms",
      children: "Key terms"
    }), `
`, _jsxs(_components.p, {
      children: ["This section describes the key terms used in ", _jsx(_components.strong, {
        children: "Data Insights"
      }), ". See ", _jsx(_components.a, {
        href: "../../reference/glossary.md",
        children: "Agora Key Terms"
      }), " for more key terms."]
    }), `
`, _jsx(_components.h3, {
      id: "channel",
      children: "Channel"
    }), `
`, _jsx(_components.p, {
      children: "Every audio or video call happens in a channel. If an app is a building, a channel is a room in the building."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Data Insights"
      }), " does not count a channel by name, but by lifecycle. A channel is counted once for each period of time between when the first user joins it until the last user leaves it. That is, it is not counted when there are no users."]
    }), `
`, _jsx(_components.h3, {
      id: "user",
      children: "User"
    }), `
`, _jsxs(_components.p, {
      children: ["Each user in a channel is identified by a unique ", _jsx(_components.a, {
        href: "../../reference/glossary.md",
        children: "user ID"
      }), ". There can never be two identical user IDs in a channel."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Data Insights"
      }), " counts each instance of a unique user ID. If a real-life user joins one channel using multiple user IDs, or joins multiple channels using one user ID, ", _jsx(_components.strong, {
        children: "Data Insights"
      }), " counts the user in both situations as multiple users."]
    }), `
`, _jsx(_components.h3, {
      id: "usage-metrics",
      children: "Usage metrics"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Usage metric"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Peak channel traffic"
          }), _jsx(_components.td, {
            children: "The maximum number of channels in use."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Peak user traffic"
          }), _jsx(_components.td, {
            children: "The maximum number of in-call users across all channels."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Total number of channels"
          }), _jsx(_components.td, {
            children: "A channel is counted once for each period of time between when the first user joins it until the last user leaves it."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Total number of users"
          }), _jsx(_components.td, {
            children: "The number of users across all channels. A user joining one channel using multiple user IDs or joining multiple channels using one user ID is counted multiple times."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Total count of users joining channels"
          }), _jsx(_components.td, {
            children: "Each time any user ID joins any channel is counted."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Total minutes"
          }), _jsx(_components.td, {
            children: "The total duration of video and audio-only calls calculated by the number of users."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video minutes"
          }), _jsx(_components.td, {
            children: "The total duration of video calls calculated by the number of users."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio minutes"
          }), _jsx(_components.td, {
            children: "The total duration of audio-only calls calculated by the number of users"
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
            children: "Quality metric"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "X coordinate in scatter chart"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video freeze rate"
          }), _jsx(_components.td, {
            children: "The rate at which video freezing occurs, which equals Total video freeze time ÷ Total video minutes calculated by the number of streams①. Only video freezes longer than 600 milliseconds are counted."
          }), _jsx(_components.td, {
            children: "Total video minutes calculated by the number of streams"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio freeze rate"
          }), _jsx(_components.td, {
            children: "The rate at which audio freezing occurs, which equals Total audio freeze time ÷ Total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted."
          }), _jsx(_components.td, {
            children: "Total audio minutes calculated by the number of streams"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Network delay rate"
          }), _jsx(_components.td, {
            children: "The rate at which network delay occurs, which equals Total end-to-end network delay ÷ Total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted."
          }), _jsx(_components.td, {
            children: "Total audio and video minutes calculated by the number of streams"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Success rate of users joining channels"
          }), _jsx(_components.td, {
            children: "The rate at which users attempting to join any channel succeed, which equals Number of users who have joined ÷ Number of attempts to join"
          }), _jsx(_components.td, {
            children: "Number of attempts to join a channel"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Success rate of users joining channels within 5 seconds"
          }), _jsx(_components.td, {
            children: "The rate at which users attempting to join any channel succeed within 5 seconds, which equals Number of users who have joined within 5 seconds ÷ Number of attempts to join"
          }), _jsx(_components.td, {
            children: "Number of attempts to join a channel"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "dimensions",
      children: "Dimensions"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Dimension"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Geography"
          }), _jsx(_components.td, {
            children: "The country and region from which the user connects."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Network type"
          }), _jsx(_components.td, {
            children: "The user’s network type, such as Wi-Fi or 4G."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Operating system"
          }), _jsx(_components.td, {
            children: "The user’s operating system, such as Windows or iOS."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "SDK version"
          }), _jsx(_components.td, {
            children: "The version number of the SDK that implements the call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Device type"
          }), _jsx(_components.td, {
            children: "The user’s device type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Channel size"
          }), _jsx(_components.td, {
            children: "The number of users in the channel."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "calculating-usage-by-the-number-of-users-vs-by-the-number-of-streams",
      children: "Calculating usage by the number of users vs. by the number of streams"
    }), `
`, _jsxs(_components.p, {
      children: ["There are two different approaches to calculating RTC SDK service minutes for a channel: by the number of users in the channel, and by the number of streams each user is subscribed to in the channel. Their difference is described in ", _jsx(_components.a, {
        href: "../../reference/billing-policies.md",
        children: "How does Agora calculate service minutes"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "data-sampling-criteria",
      children: "Data sampling criteria"
    }), `
`, _jsxs(_components.p, {
      children: ["Line charts under the ", _jsx(_components.strong, {
        children: "Overall Trend"
      }), " panel on the ", _jsx(_components.strong, {
        children: "Quality Overview"
      }), " page support data sampling. The data sampling criteria is defined as follows:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Line chart"
          }), _jsx(_components.th, {
            children: "Data sampling criteria"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video freeze rate"
          }), _jsx(_components.td, {
            children: "The video freeze rate exceeds 5%, and the video minutes across all channels exceed 100 in one minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio freeze rate"
          }), _jsx(_components.td, {
            children: "The audio freeze rate exceeds 3%, and the audio minutes across all channels exceed 100 in one minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Network delay rate"
          }), _jsx(_components.td, {
            children: "The network delay rate exceeds 10%, and the total minutes across all channels exceed 100 in one minute."
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
