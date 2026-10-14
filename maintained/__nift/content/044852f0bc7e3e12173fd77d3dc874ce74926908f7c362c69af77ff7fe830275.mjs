import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Data Insights Plus",
  description: "Periodic analysis of call usage and quality data."
};
export let _markdown = `

Data insights in Agora Analytics offer periodic analysis of call usage and quality data. It helps you understand overall usage and quality trends, map distribution across different dimensions, and provide detailed data for each day, hour, and minute.

The regular version of Data Studio currently supports query analysis of time series graphs and one-dimensional
queries. Data Insights Plus offers additional capabilities, including multi-dimensional cross analysis, sampling
analysis, comparative analysis, and extended querying of service indicators for Video Calling, Voice Calling,
Interactive Live Streaming, and Broadcast Streaming. For a detailed comparison of Agora Analytics
Standard and Premium, see [pricing](../../reference/pricing.md).

**Want to try out this functionality? There is a 30 day trial period just for you. Please [submit a ticket](https://agora-ticket.agora.io/) to enroll for the trial.**

## Project setup [#project-setup]

To set up Agora Analytics for your account, take the following steps:

1. **Enable Agora Analytics**

   In [pricing](https://analytics-lab.agora.io/pricing), choose the Premium or the Enterprise package and press
   **Subscribe**.

   Data Insights Plus is activated as soon as you are subscribed.

2. **Open Data Insights Plus**

   1. log in to [Agora Console](https://console.agora.io/).
   2. In the left menu, click **Agora Analytics**
   3. Select **Data Insights Plus**

3. **Select metrics to analyze**

   The indicator selection area is located on the left side of the Data Insights page. You click the button in the upper left corner of the page to expand the indicator selection area. Indicator selection is divided into Core indicators and All indicators:

   * The seven [Core indicators](#core-indicators) commonly used in business, are displayed under **Core
     indicators**. To the right of the indicator is the thumbnail time series diagram of the corresponding indicator.
     The default time range is \`last week\`. Hover the mouse over any point on the thumbnail to see the corresponding
     time point and indicator value.

   * All indicators that can be analyzed are listed under **All Indicators**. Choose an indicator according to the
     product
     and your requirements. For an explanation of indicators, other than the core indicators, see [Other indicators](#other-indicators).

     When you click an indicator, it is used as the main analysis indicator for subsequent analysis.

     ![](https://assets-docs.agora.io/images/analytics/diplus-metrics-selection.png)

4. **Set global filters**

   At the top of the Data Studio page is the global filter area. The filter conditions in this area affect the global data on the page.

   ![](https://assets-docs.agora.io/images/analytics/diplus-dimension-and-time-filter.png)

   * **Dimension filtering**: Click the **Add Filter** button on the left to select a dimension in the drop-down box for filtering. Up to three [dimensions](#dimensions) can be selected at the same time, and the effective range is the time series analysis area and the dimension analysis area. The dimension values in the drop-down box are sorted in descending order of the number of active calls.

   * **Time filtering**: Use the right side of the global filter area to customize the time range, time granularity (by day/hour) and time zone (local/UTC time). It supports querying data within 90 days. The long query range is 30 days. The time series thumbnail in the indicator selection area depends on the time filter conditions in the global filter.

5. **Start the analysis**

   After selecting the indicators to be analyzed and setting the global filter conditions, you view the indicator
   data in the analysis area on the right and start the analysis. You click the collapse button in the upper right
   corner to collapse the indicator selection area to focus on the analysis.

> **Note**: The data provided on the Data Insights page is for analysis purposes only, and is not used as the basis for actual billing.

## Analyze data usage [#analyze-data-usage]

Data Insights Plus supports the following analysis methods:

### Time series analysis [#time-series-analysis]

Above the analysis area on the Data Insights page is the time series analysis section, which displays the changes in indicators over time based on the selected conditions.

![](https://assets-docs.agora.io/images/analytics/diplus-timing-analysis.png)

Timing analysis includes the following functions:

* **Linkage with global filter conditions**: The data displayed in the time series analysis chart is generated according to the conditions set in the global filter.

* **Line chart interaction**

  You interact with the line chart in the following ways:

  * Hover over a data point to display the indicator-dimension group name, timestamp, and indicator value.

  * Click a data point to:
    * View hour-level data. Use this point as the data range granularity to switch to a one-hour view.
    * Perform dimensional decomposition. Initiate dimensional analysis with this data point.
    * Conduct data sampling. Start sampling analysis with this data point. Currently, only the audio freeze rate, video freeze rate, and network transmission delay rate support data sampling.

* **Auxiliary reference indicators**

  The quality experience indicators (success rate of joining channels, audio/video freeze rate, network delay rate) display additional auxiliary reference indicators below the sequence diagram to assist in assessing the validity of the data. Hovering the mouse over the auxiliary indicator column chart reveals the timestamp, indicator/dimension group name, and indicator value corresponding to that specific point in time.

### Dimensional analysis [#dimensional-analysis]

The dimensional analysis area is located below the analysis area on the data insight page. It shows the distribution of selected indicators under each dimension.

![](https://assets-docs.agora.io/images/analytics/diplus-dimensional-analysis.png)

Dimensional analysis includes the following capabilities:

* **Dimension Time Picker**

  * The dimension analysis area features an independent time selector that aligns with the selected time interval in the time series analysis area. It maintains the same time granularity as the data points in the time series analysis.
  * By default, when you select a time interval in the time series analysis chart, the dimension analysis displays the result for the last data point within that interval.
  * You have the flexibility to manually adjust the time using the dimension time selector. Additionally, clicking a data point in the time series analysis diagram and selecting **Dimension Decomposition** allows you to view the dimensional analysis results specific to that point.

* **Quick distribution**: After you select the main analysis indicator, the dimension analysis area displays several commonly used dimension distribution graphs of the indicator. The dimensions supported by each indicator are different. Explore the display methods of each dimension.

* **One-dimensional analysis**: In addition to the quick distribution, the analysis dimensions supported by the selected indicator are displayed on the left side of the dimensional analysis area. When you click a dimension, the analysis result list of this dimension is displayed on the right.

  ![](https://assets-docs.agora.io/images/analytics/diplus-individual-dimension-analysis.png)

* **Linkage with global filter conditions**: The charts in the quick distribution of dimensional analysis and the results of one-dimensional analysis are generated according to the filter conditions set in the global filter.

### Sampling analysis [#sampling-analysis]

Sampling analysis is only supported when video/audio freeze rate and network transmission delay rate are selected as the main analysis indicators. Click a data point in the time series analysis diagram of these three indicators, and select **Data Sampling** to sample and analyze the data point.

![](https://assets-docs.agora.io/images/analytics/diplus-sampling-analysis.png)

Sampling analysis includes the following functions:

* **Drag the slider to sample**: The orange sampling slider covers a time interval of 30 minutes. When you drag the orange slider to any position on the graph, the indicator changes and gradient distribution during the 30 minute interval is displayed.

* **Stacked column chart**: The slider sampling result displays the indicator distribution of the 30 minute interval in the form of a stacked column chart. Click the color block in the column to perform user sampling for this group.

* **User sampling**
  * When you click the color column, the relevant information of this group of users is displayed in a list including user ID, device type, network type, and other parameters. Up to 500 sets of data can be displayed.
  * Click **Detailed Information** on the right to jump to the **Call Survey-Call Details** page of the corresponding call.
  * Click a header item to sort all results in ascending or descending order based on that item.

### Comparative analysis [#comparative-analysis]

You find the comparative analysis button in the upper right corner of the analysis area, click and select the desired analysis method to start the comparative analysis.

![](https://assets-docs.agora.io/images/analytics/diplus-comparative-analysis.png)

Comparative analysis supports the following methods:

#### Indicator comparison [#indicator-comparison]

Indicator comparison allows you to analyze and compare the changing trends of different indicators within the same time period.

![](https://assets-docs.agora.io/images/analytics/diplus-index-comparison.png)

Consider the following when using this feature:

* You can select up to 3 indicators to compare with the main analysis indicators.
* When multiple indicators are selected and applied, the dimension global filter conditions will be cleared to initialize the comparison mode. You can then add dimension global filter conditions again.
* After selecting and applying multiple indicators, the time series analysis area will display a multi-indicator time series diagram. The dimension analysis area will present dimensional data corresponding to the selected multiple indicators for single-dimensional analysis.

#### Time comparison [#time-comparison]

Time comparison is utilized to compare the data performance and change trend of the same indicator across different time periods.

![](https://assets-docs.agora.io/images/analytics/diplus-time-comparison.png)

The time comparison method supports the following selection modes:

\`\`\`
* **Comparison with the previous cycle**: Compares the data from the previous 14-day cycle.
* **Compare with last month**: Compares the data from the corresponding period in the previous month.
* **Custom time**: Allows you to choose a comparison period based on your preference. The granularity is in days, and the number of days selected should match the current time period.
\`\`\`

Ensure that the start time of all comparison time periods does not precede the earliest query time permitted by your package.

#### Global comparison [#global-comparison]

Global comparison is used to compare the results of a certain indicator under dimensional conditions with global results. When using this method, please note that the global comparison only takes effect when the main analysis indicator is selected and the dimension filter condition is added.

![](https://assets-docs.agora.io/images/analytics/diplus-global-comparison.png)

## Reference [#reference]

This section contains information that completes the information on this page, or points you to documentation that explains other aspects to this product.

### Core indicators [#core-indicators]

Data Insight plus supports the following core indicators.

| Indicator name                                                | Description                                                                                                                                                                                                                             |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Number of calls                                               | A call is counted from the time the first user joins the channel until the last user leaves the channel.<br/>Calls is the total number of calls that occurred during the selected time frame.                                           |
| Concurrent calls                                              | A call is counted from the time the first user joins the channel until the last user leaves the channel.<br/>Concurrent Calls is the number of simultaneous calls that were made online during the selected time frame.                 |
| Number of calling users (according to user ID + channel name) | Each user ID + channel name is counted as one user, and the same user repeatedly joining the same channel is counted as one person.<br/>The number of users is the total number of users who made calls during the selected time range. |
| Concurrent users                                              | Each user ID + channel name is counted as one user.<br/>The number of concurrent users is the number of users who are online at the same time during the selected time frame.                                                           |
| 5s join channel success rate                                  | Number of successful channel joins within 5 seconds / number of attempts to join the channel \\* 100%                                                                                                                                    |
| 500ms video freeze rate                                       | If the frame-free time exceeds 500 ms after the remote video is decoded, it is recorded as a video freeze.<br/>Video Freezing Rate = Video Freezing Duration ÷ Video Call Duration × 100%                                               |
| 200ms audio freeze rate                                       | If the frame-free time exceeds 200 ms after receiving the remote audio decoding, it is recorded as an audio freeze.<br/>Audio freeze rate = audio freeze duration ÷ audio call duration × 100%                                          |

### Other indicators [#other-indicators]

The following indicators are available in addition to the core indicators.

| Indicator name                                                          | Description                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Number of calling users (by user ID)                                    | Each user ID is counted as one user.<br/>The number of users is the total number of users who made calls during the selected time range.                                                                                                                                                                     |
| Call time                                                               | The cumulative duration of calls made by all users using the RTC SDK, in minutes. When audio and video exist at the same time, only the video duration is counted.                                                                                                                                           |
| Video call duration                                                     | The cumulative duration of video calls made by all users using the RTC SDK, in minutes.                                                                                                                                                                                                                      |
| Audio call duration                                                     | The cumulative duration of audio calls made by all users using the RTC SDK, in minutes.                                                                                                                                                                                                                      |
| Active calls                                                            | Each time a user enters and exits a channel is counted as one active call, and the same user repeatedly joins the same channel as multiple active calls.<br/>Active calls are the total number of sessions that occurred within the selected time frame.                                                     |
| 5s join channel success rate                                            | Number of successful channel joins within 5 seconds / number of attempts to join the channel \\* 100%                                                                                                                                                                                                         |
| End-to-end network transmission delay rate                              | The delay from the sending end to the receiving end through network transmission (excluding network jitter delay) is greater than 400ms, which is recorded as a delay.<br/>End-to-end network delay rate = total audio and video network transmission delay time ÷ total audio and video time length \\* 100% |
| Number of concurrent cloud recording tasks                              | Each time the method is called start to start cloud recording, a cloud recording task is created. Only displayed when cloud recording is enabled, see cloud recording for details.                                                                                                                           |
| Enter the maximum number of concurrent tasks for online media streaming | Each time Create the method is called to create a cloud player, an input media stream task is created. Only displayed when inputting online media stream is enabled, see Inputting Online Media Stream for details.                                                                                          |

### Dimensions [#dimensions]

Select from the following for dimension filtering:

| Dimension name   | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| Nation           | The user's country.                                                    |
| Area             | The user's region.                                                     |
| Operating system | The operating system used by the user, such as Windows, iOS, etc.      |
| Equipment type   | The device type used by the user, such as iPad 7.5, etc.               |
| SDK products     | SDK products used by users for calls, including RTC Native and WebRTC. |
| SDK version      | The SDK version used by the user call.                                 |
| Network Type     | The network used by the user when calling, such as Wi-Fi, 4G, etc.     |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Data insights in Agora Analytics offer periodic analysis of call usage and quality data. It helps you understand overall usage and quality trends, map distribution across different dimensions, and provide detailed data for each day, hour, and minute."
  }, {
    heading: undefined,
    content: `The regular version of Data Studio currently supports query analysis of time series graphs and one-dimensional
queries. Data Insights Plus offers additional capabilities, including multi-dimensional cross analysis, sampling
analysis, comparative analysis, and extended querying of service indicators for Video Calling, Voice Calling,
Interactive Live Streaming, and Broadcast Streaming. For a detailed comparison of Agora Analytics
Standard and Premium, see pricing.`
  }, {
    heading: undefined,
    content: "**Want to try out this functionality? There is a 30 day trial period just for you. Please submit a ticket to enroll for the trial.**"
  }, {
    heading: "project-setup",
    content: "To set up Agora Analytics for your account, take the following steps:"
  }, {
    heading: "project-setup",
    content: "**Enable Agora Analytics**"
  }, {
    heading: "project-setup",
    content: `In pricing, choose the Premium or the Enterprise package and press
**Subscribe**.`
  }, {
    heading: "project-setup",
    content: "Data Insights Plus is activated as soon as you are subscribed."
  }, {
    heading: "project-setup",
    content: "**Open Data Insights Plus**"
  }, {
    heading: "project-setup",
    content: "log in to Agora Console."
  }, {
    heading: "project-setup",
    content: "In the left menu, click **Agora Analytics**"
  }, {
    heading: "project-setup",
    content: "Select **Data Insights Plus**"
  }, {
    heading: "project-setup",
    content: "**Select metrics to analyze**"
  }, {
    heading: "project-setup",
    content: "The indicator selection area is located on the left side of the Data Insights page. You click the button in the upper left corner of the page to expand the indicator selection area. Indicator selection is divided into Core indicators and All indicators:"
  }, {
    heading: "project-setup",
    content: `The seven Core indicators commonly used in business, are displayed under **Core
indicators**. To the right of the indicator is the thumbnail time series diagram of the corresponding indicator.
The default time range is \`last week\`. Hover the mouse over any point on the thumbnail to see the corresponding
time point and indicator value.`
  }, {
    heading: "project-setup",
    content: `All indicators that can be analyzed are listed under **All Indicators**. Choose an indicator according to the
product
and your requirements. For an explanation of indicators, other than the core indicators, see Other indicators.`
  }, {
    heading: "project-setup",
    content: "When you click an indicator, it is used as the main analysis indicator for subsequent analysis."
  }, {
    heading: "project-setup",
    content: "**Set global filters**"
  }, {
    heading: "project-setup",
    content: "At the top of the Data Studio page is the global filter area. The filter conditions in this area affect the global data on the page."
  }, {
    heading: "project-setup",
    content: "**Dimension filtering**: Click the **Add Filter** button on the left to select a dimension in the drop-down box for filtering. Up to three dimensions can be selected at the same time, and the effective range is the time series analysis area and the dimension analysis area. The dimension values in the drop-down box are sorted in descending order of the number of active calls."
  }, {
    heading: "project-setup",
    content: "**Time filtering**: Use the right side of the global filter area to customize the time range, time granularity (by day/hour) and time zone (local/UTC time). It supports querying data within 90 days. The long query range is 30 days. The time series thumbnail in the indicator selection area depends on the time filter conditions in the global filter."
  }, {
    heading: "project-setup",
    content: "**Start the analysis**"
  }, {
    heading: "project-setup",
    content: `After selecting the indicators to be analyzed and setting the global filter conditions, you view the indicator
data in the analysis area on the right and start the analysis. You click the collapse button in the upper right
corner to collapse the indicator selection area to focus on the analysis.`
  }, {
    heading: "project-setup",
    content: "> **Note**: The data provided on the Data Insights page is for analysis purposes only, and is not used as the basis for actual billing."
  }, {
    heading: "analyze-data-usage",
    content: "Data Insights Plus supports the following analysis methods:"
  }, {
    heading: "time-series-analysis",
    content: "Above the analysis area on the Data Insights page is the time series analysis section, which displays the changes in indicators over time based on the selected conditions."
  }, {
    heading: "time-series-analysis",
    content: "Timing analysis includes the following functions:"
  }, {
    heading: "time-series-analysis",
    content: "**Linkage with global filter conditions**: The data displayed in the time series analysis chart is generated according to the conditions set in the global filter."
  }, {
    heading: "time-series-analysis",
    content: "**Line chart interaction**"
  }, {
    heading: "time-series-analysis",
    content: "You interact with the line chart in the following ways:"
  }, {
    heading: "time-series-analysis",
    content: "Hover over a data point to display the indicator-dimension group name, timestamp, and indicator value."
  }, {
    heading: "time-series-analysis",
    content: "Click a data point to:"
  }, {
    heading: "time-series-analysis",
    content: "View hour-level data. Use this point as the data range granularity to switch to a one-hour view."
  }, {
    heading: "time-series-analysis",
    content: "Perform dimensional decomposition. Initiate dimensional analysis with this data point."
  }, {
    heading: "time-series-analysis",
    content: "Conduct data sampling. Start sampling analysis with this data point. Currently, only the audio freeze rate, video freeze rate, and network transmission delay rate support data sampling."
  }, {
    heading: "time-series-analysis",
    content: "**Auxiliary reference indicators**"
  }, {
    heading: "time-series-analysis",
    content: "The quality experience indicators (success rate of joining channels, audio/video freeze rate, network delay rate) display additional auxiliary reference indicators below the sequence diagram to assist in assessing the validity of the data. Hovering the mouse over the auxiliary indicator column chart reveals the timestamp, indicator/dimension group name, and indicator value corresponding to that specific point in time."
  }, {
    heading: "dimensional-analysis",
    content: "The dimensional analysis area is located below the analysis area on the data insight page. It shows the distribution of selected indicators under each dimension."
  }, {
    heading: "dimensional-analysis",
    content: "Dimensional analysis includes the following capabilities:"
  }, {
    heading: "dimensional-analysis",
    content: "**Dimension Time Picker**"
  }, {
    heading: "dimensional-analysis",
    content: "The dimension analysis area features an independent time selector that aligns with the selected time interval in the time series analysis area. It maintains the same time granularity as the data points in the time series analysis."
  }, {
    heading: "dimensional-analysis",
    content: "By default, when you select a time interval in the time series analysis chart, the dimension analysis displays the result for the last data point within that interval."
  }, {
    heading: "dimensional-analysis",
    content: "You have the flexibility to manually adjust the time using the dimension time selector. Additionally, clicking a data point in the time series analysis diagram and selecting **Dimension Decomposition** allows you to view the dimensional analysis results specific to that point."
  }, {
    heading: "dimensional-analysis",
    content: "**Quick distribution**: After you select the main analysis indicator, the dimension analysis area displays several commonly used dimension distribution graphs of the indicator. The dimensions supported by each indicator are different. Explore the display methods of each dimension."
  }, {
    heading: "dimensional-analysis",
    content: "**One-dimensional analysis**: In addition to the quick distribution, the analysis dimensions supported by the selected indicator are displayed on the left side of the dimensional analysis area. When you click a dimension, the analysis result list of this dimension is displayed on the right."
  }, {
    heading: "dimensional-analysis",
    content: "**Linkage with global filter conditions**: The charts in the quick distribution of dimensional analysis and the results of one-dimensional analysis are generated according to the filter conditions set in the global filter."
  }, {
    heading: "sampling-analysis",
    content: "Sampling analysis is only supported when video/audio freeze rate and network transmission delay rate are selected as the main analysis indicators. Click a data point in the time series analysis diagram of these three indicators, and select **Data Sampling** to sample and analyze the data point."
  }, {
    heading: "sampling-analysis",
    content: "Sampling analysis includes the following functions:"
  }, {
    heading: "sampling-analysis",
    content: "**Drag the slider to sample**: The orange sampling slider covers a time interval of 30 minutes. When you drag the orange slider to any position on the graph, the indicator changes and gradient distribution during the 30 minute interval is displayed."
  }, {
    heading: "sampling-analysis",
    content: "**Stacked column chart**: The slider sampling result displays the indicator distribution of the 30 minute interval in the form of a stacked column chart. Click the color block in the column to perform user sampling for this group."
  }, {
    heading: "sampling-analysis",
    content: "**User sampling**"
  }, {
    heading: "sampling-analysis",
    content: "When you click the color column, the relevant information of this group of users is displayed in a list including user ID, device type, network type, and other parameters. Up to 500 sets of data can be displayed."
  }, {
    heading: "sampling-analysis",
    content: "Click **Detailed Information** on the right to jump to the **Call Survey-Call Details** page of the corresponding call."
  }, {
    heading: "sampling-analysis",
    content: "Click a header item to sort all results in ascending or descending order based on that item."
  }, {
    heading: "comparative-analysis",
    content: "You find the comparative analysis button in the upper right corner of the analysis area, click and select the desired analysis method to start the comparative analysis."
  }, {
    heading: "comparative-analysis",
    content: "Comparative analysis supports the following methods:"
  }, {
    heading: "indicator-comparison",
    content: "Indicator comparison allows you to analyze and compare the changing trends of different indicators within the same time period."
  }, {
    heading: "indicator-comparison",
    content: "Consider the following when using this feature:"
  }, {
    heading: "indicator-comparison",
    content: "You can select up to 3 indicators to compare with the main analysis indicators."
  }, {
    heading: "indicator-comparison",
    content: "When multiple indicators are selected and applied, the dimension global filter conditions will be cleared to initialize the comparison mode. You can then add dimension global filter conditions again."
  }, {
    heading: "indicator-comparison",
    content: "After selecting and applying multiple indicators, the time series analysis area will display a multi-indicator time series diagram. The dimension analysis area will present dimensional data corresponding to the selected multiple indicators for single-dimensional analysis."
  }, {
    heading: "time-comparison",
    content: "Time comparison is utilized to compare the data performance and change trend of the same indicator across different time periods."
  }, {
    heading: "time-comparison",
    content: "The time comparison method supports the following selection modes:"
  }, {
    heading: "time-comparison",
    content: "Ensure that the start time of all comparison time periods does not precede the earliest query time permitted by your package."
  }, {
    heading: "global-comparison",
    content: "Global comparison is used to compare the results of a certain indicator under dimensional conditions with global results. When using this method, please note that the global comparison only takes effect when the main analysis indicator is selected and the dimension filter condition is added."
  }, {
    heading: "reference",
    content: "This section contains information that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "core-indicators",
    content: "Data Insight plus supports the following core indicators."
  }, {
    heading: "core-indicators",
    content: "Indicator name"
  }, {
    heading: "core-indicators",
    content: "Description"
  }, {
    heading: "core-indicators",
    content: "Number of calls"
  }, {
    heading: "core-indicators",
    content: "A call is counted from the time the first user joins the channel until the last user leaves the channel.<br/>Calls is the total number of calls that occurred during the selected time frame."
  }, {
    heading: "core-indicators",
    content: "Concurrent calls"
  }, {
    heading: "core-indicators",
    content: "A call is counted from the time the first user joins the channel until the last user leaves the channel.<br/>Concurrent Calls is the number of simultaneous calls that were made online during the selected time frame."
  }, {
    heading: "core-indicators",
    content: "Number of calling users (according to user ID + channel name)"
  }, {
    heading: "core-indicators",
    content: "Each user ID + channel name is counted as one user, and the same user repeatedly joining the same channel is counted as one person.<br/>The number of users is the total number of users who made calls during the selected time range."
  }, {
    heading: "core-indicators",
    content: "Concurrent users"
  }, {
    heading: "core-indicators",
    content: "Each user ID + channel name is counted as one user.<br/>The number of concurrent users is the number of users who are online at the same time during the selected time frame."
  }, {
    heading: "core-indicators",
    content: "5s join channel success rate"
  }, {
    heading: "core-indicators",
    content: "Number of successful channel joins within 5 seconds / number of attempts to join the channel \\* 100%"
  }, {
    heading: "core-indicators",
    content: "500ms video freeze rate"
  }, {
    heading: "core-indicators",
    content: "If the frame-free time exceeds 500 ms after the remote video is decoded, it is recorded as a video freeze.<br/>Video Freezing Rate = Video Freezing Duration ÷ Video Call Duration × 100%"
  }, {
    heading: "core-indicators",
    content: "200ms audio freeze rate"
  }, {
    heading: "core-indicators",
    content: "If the frame-free time exceeds 200 ms after receiving the remote audio decoding, it is recorded as an audio freeze.<br/>Audio freeze rate = audio freeze duration ÷ audio call duration × 100%"
  }, {
    heading: "other-indicators",
    content: "The following indicators are available in addition to the core indicators."
  }, {
    heading: "other-indicators",
    content: "Indicator name"
  }, {
    heading: "other-indicators",
    content: "Description"
  }, {
    heading: "other-indicators",
    content: "Number of calling users (by user ID)"
  }, {
    heading: "other-indicators",
    content: "Each user ID is counted as one user.<br/>The number of users is the total number of users who made calls during the selected time range."
  }, {
    heading: "other-indicators",
    content: "Call time"
  }, {
    heading: "other-indicators",
    content: "The cumulative duration of calls made by all users using the RTC SDK, in minutes. When audio and video exist at the same time, only the video duration is counted."
  }, {
    heading: "other-indicators",
    content: "Video call duration"
  }, {
    heading: "other-indicators",
    content: "The cumulative duration of video calls made by all users using the RTC SDK, in minutes."
  }, {
    heading: "other-indicators",
    content: "Audio call duration"
  }, {
    heading: "other-indicators",
    content: "The cumulative duration of audio calls made by all users using the RTC SDK, in minutes."
  }, {
    heading: "other-indicators",
    content: "Active calls"
  }, {
    heading: "other-indicators",
    content: "Each time a user enters and exits a channel is counted as one active call, and the same user repeatedly joins the same channel as multiple active calls.<br/>Active calls are the total number of sessions that occurred within the selected time frame."
  }, {
    heading: "other-indicators",
    content: "5s join channel success rate"
  }, {
    heading: "other-indicators",
    content: "Number of successful channel joins within 5 seconds / number of attempts to join the channel \\* 100%"
  }, {
    heading: "other-indicators",
    content: "End-to-end network transmission delay rate"
  }, {
    heading: "other-indicators",
    content: "The delay from the sending end to the receiving end through network transmission (excluding network jitter delay) is greater than 400ms, which is recorded as a delay.<br/>End-to-end network delay rate = total audio and video network transmission delay time ÷ total audio and video time length \\* 100%"
  }, {
    heading: "other-indicators",
    content: "Number of concurrent cloud recording tasks"
  }, {
    heading: "other-indicators",
    content: "Each time the method is called start to start cloud recording, a cloud recording task is created. Only displayed when cloud recording is enabled, see cloud recording for details."
  }, {
    heading: "other-indicators",
    content: "Enter the maximum number of concurrent tasks for online media streaming"
  }, {
    heading: "other-indicators",
    content: "Each time Create the method is called to create a cloud player, an input media stream task is created. Only displayed when inputting online media stream is enabled, see Inputting Online Media Stream for details."
  }, {
    heading: "dimensions",
    content: "Select from the following for dimension filtering:"
  }, {
    heading: "dimensions",
    content: "Dimension name"
  }, {
    heading: "dimensions",
    content: "Description"
  }, {
    heading: "dimensions",
    content: "Nation"
  }, {
    heading: "dimensions",
    content: "The user's country."
  }, {
    heading: "dimensions",
    content: "Area"
  }, {
    heading: "dimensions",
    content: "The user's region."
  }, {
    heading: "dimensions",
    content: "Operating system"
  }, {
    heading: "dimensions",
    content: "The operating system used by the user, such as Windows, iOS, etc."
  }, {
    heading: "dimensions",
    content: "Equipment type"
  }, {
    heading: "dimensions",
    content: "The device type used by the user, such as iPad 7.5, etc."
  }, {
    heading: "dimensions",
    content: "SDK products"
  }, {
    heading: "dimensions",
    content: "SDK products used by users for calls, including RTC Native and WebRTC."
  }, {
    heading: "dimensions",
    content: "SDK version"
  }, {
    heading: "dimensions",
    content: "The SDK version used by the user call."
  }, {
    heading: "dimensions",
    content: "Network Type"
  }, {
    heading: "dimensions",
    content: "The network used by the user when calling, such as Wi-Fi, 4G, etc."
  }],
  headings: [{
    id: "project-setup",
    content: "Project setup"
  }, {
    id: "analyze-data-usage",
    content: "Analyze data usage"
  }, {
    id: "time-series-analysis",
    content: "Time series analysis"
  }, {
    id: "dimensional-analysis",
    content: "Dimensional analysis"
  }, {
    id: "sampling-analysis",
    content: "Sampling analysis"
  }, {
    id: "comparative-analysis",
    content: "Comparative analysis"
  }, {
    id: "indicator-comparison",
    content: "Indicator comparison"
  }, {
    id: "time-comparison",
    content: "Time comparison"
  }, {
    id: "global-comparison",
    content: "Global comparison"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "core-indicators",
    content: "Core indicators"
  }, {
    id: "other-indicators",
    content: "Other indicators"
  }, {
    id: "dimensions",
    content: "Dimensions"
  }]
};
export let toc = [{
  depth: 2,
  url: "#project-setup",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#analyze-data-usage",
  title: _jsx(_Fragment, {
    children: "Analyze data usage"
  })
}, {
  depth: 3,
  url: "#time-series-analysis",
  title: _jsx(_Fragment, {
    children: "Time series analysis"
  })
}, {
  depth: 3,
  url: "#dimensional-analysis",
  title: _jsx(_Fragment, {
    children: "Dimensional analysis"
  })
}, {
  depth: 3,
  url: "#sampling-analysis",
  title: _jsx(_Fragment, {
    children: "Sampling analysis"
  })
}, {
  depth: 3,
  url: "#comparative-analysis",
  title: _jsx(_Fragment, {
    children: "Comparative analysis"
  })
}, {
  depth: 4,
  url: "#indicator-comparison",
  title: _jsx(_Fragment, {
    children: "Indicator comparison"
  })
}, {
  depth: 4,
  url: "#time-comparison",
  title: _jsx(_Fragment, {
    children: "Time comparison"
  })
}, {
  depth: 4,
  url: "#global-comparison",
  title: _jsx(_Fragment, {
    children: "Global comparison"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#core-indicators",
  title: _jsx(_Fragment, {
    children: "Core indicators"
  })
}, {
  depth: 3,
  url: "#other-indicators",
  title: _jsx(_Fragment, {
    children: "Other indicators"
  })
}, {
  depth: 3,
  url: "#dimensions",
  title: _jsx(_Fragment, {
    children: "Dimensions"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
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
      children: "Data insights in Agora Analytics offer periodic analysis of call usage and quality data. It helps you understand overall usage and quality trends, map distribution across different dimensions, and provide detailed data for each day, hour, and minute."
    }), `
`, _jsxs(_components.p, {
      children: [`The regular version of Data Studio currently supports query analysis of time series graphs and one-dimensional
queries. Data Insights Plus offers additional capabilities, including multi-dimensional cross analysis, sampling
analysis, comparative analysis, and extended querying of service indicators for Video Calling, Voice Calling,
Interactive Live Streaming, and Broadcast Streaming. For a detailed comparison of Agora Analytics
Standard and Premium, see `, _jsx(_components.a, {
        href: "../../reference/pricing.md",
        children: "pricing"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Want to try out this functionality? There is a 30 day trial period just for you. Please ", _jsx(_components.a, {
          href: "https://agora-ticket.agora.io/",
          children: "submit a ticket"
        }), " to enroll for the trial."]
      })
    }), `
`, _jsx(_components.h2, {
      id: "project-setup",
      children: "Project setup"
    }), `
`, _jsx(_components.p, {
      children: "To set up Agora Analytics for your account, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Enable Agora Analytics"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://analytics-lab.agora.io/pricing",
            children: "pricing"
          }), `, choose the Premium or the Enterprise package and press
`, _jsx(_components.strong, {
            children: "Subscribe"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: "Data Insights Plus is activated as soon as you are subscribed."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Open Data Insights Plus"
          })
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["log in to ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["In the left menu, click ", _jsx(_components.strong, {
              children: "Agora Analytics"
            })]
          }), `
`, _jsxs(_components.li, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Data Insights Plus"
            })]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Select metrics to analyze"
          })
        }), `
`, _jsx(_components.p, {
          children: "The indicator selection area is located on the left side of the Data Insights page. You click the button in the upper left corner of the page to expand the indicator selection area. Indicator selection is divided into Core indicators and All indicators:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The seven ", _jsx(_components.a, {
                href: "#core-indicators",
                children: "Core indicators"
              }), " commonly used in business, are displayed under ", _jsx(_components.strong, {
                children: `Core
indicators`
              }), `. To the right of the indicator is the thumbnail time series diagram of the corresponding indicator.
The default time range is `, _jsx(_components.code, {
                children: "last week"
              }), `. Hover the mouse over any point on the thumbnail to see the corresponding
time point and indicator value.`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["All indicators that can be analyzed are listed under ", _jsx(_components.strong, {
                children: "All Indicators"
              }), `. Choose an indicator according to the
product
and your requirements. For an explanation of indicators, other than the core indicators, see `, _jsx(_components.a, {
                href: "#other-indicators",
                children: "Other indicators"
              }), "."]
            }), `
`, _jsx(_components.p, {
              children: "When you click an indicator, it is used as the main analysis indicator for subsequent analysis."
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/analytics/diplus-metrics-selection.png",
                alt: ""
              })
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Set global filters"
          })
        }), `
`, _jsx(_components.p, {
          children: "At the top of the Data Studio page is the global filter area. The filter conditions in this area affect the global data on the page."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/diplus-dimension-and-time-filter.png",
            alt: ""
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Dimension filtering"
              }), ": Click the ", _jsx(_components.strong, {
                children: "Add Filter"
              }), " button on the left to select a dimension in the drop-down box for filtering. Up to three ", _jsx(_components.a, {
                href: "#dimensions",
                children: "dimensions"
              }), " can be selected at the same time, and the effective range is the time series analysis area and the dimension analysis area. The dimension values in the drop-down box are sorted in descending order of the number of active calls."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Time filtering"
              }), ": Use the right side of the global filter area to customize the time range, time granularity (by day/hour) and time zone (local/UTC time). It supports querying data within 90 days. The long query range is 30 days. The time series thumbnail in the indicator selection area depends on the time filter conditions in the global filter."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Start the analysis"
          })
        }), `
`, _jsx(_components.p, {
          children: `After selecting the indicators to be analyzed and setting the global filter conditions, you view the indicator
data in the analysis area on the right and start the analysis. You click the collapse button in the upper right
corner to collapse the indicator selection area to focus on the analysis.`
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Note"
        }), ": The data provided on the Data Insights page is for analysis purposes only, and is not used as the basis for actual billing."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "analyze-data-usage",
      children: "Analyze data usage"
    }), `
`, _jsx(_components.p, {
      children: "Data Insights Plus supports the following analysis methods:"
    }), `
`, _jsx(_components.h3, {
      id: "time-series-analysis",
      children: "Time series analysis"
    }), `
`, _jsx(_components.p, {
      children: "Above the analysis area on the Data Insights page is the time series analysis section, which displays the changes in indicators over time based on the selected conditions."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/diplus-timing-analysis.png",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Timing analysis includes the following functions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Linkage with global filter conditions"
          }), ": The data displayed in the time series analysis chart is generated according to the conditions set in the global filter."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Line chart interaction"
          })
        }), `
`, _jsx(_components.p, {
          children: "You interact with the line chart in the following ways:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Hover over a data point to display the indicator-dimension group name, timestamp, and indicator value."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Click a data point to:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "View hour-level data. Use this point as the data range granularity to switch to a one-hour view."
              }), `
`, _jsx(_components.li, {
                children: "Perform dimensional decomposition. Initiate dimensional analysis with this data point."
              }), `
`, _jsx(_components.li, {
                children: "Conduct data sampling. Start sampling analysis with this data point. Currently, only the audio freeze rate, video freeze rate, and network transmission delay rate support data sampling."
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Auxiliary reference indicators"
          })
        }), `
`, _jsx(_components.p, {
          children: "The quality experience indicators (success rate of joining channels, audio/video freeze rate, network delay rate) display additional auxiliary reference indicators below the sequence diagram to assist in assessing the validity of the data. Hovering the mouse over the auxiliary indicator column chart reveals the timestamp, indicator/dimension group name, and indicator value corresponding to that specific point in time."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "dimensional-analysis",
      children: "Dimensional analysis"
    }), `
`, _jsx(_components.p, {
      children: "The dimensional analysis area is located below the analysis area on the data insight page. It shows the distribution of selected indicators under each dimension."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/diplus-dimensional-analysis.png",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Dimensional analysis includes the following capabilities:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Dimension Time Picker"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The dimension analysis area features an independent time selector that aligns with the selected time interval in the time series analysis area. It maintains the same time granularity as the data points in the time series analysis."
          }), `
`, _jsx(_components.li, {
            children: "By default, when you select a time interval in the time series analysis chart, the dimension analysis displays the result for the last data point within that interval."
          }), `
`, _jsxs(_components.li, {
            children: ["You have the flexibility to manually adjust the time using the dimension time selector. Additionally, clicking a data point in the time series analysis diagram and selecting ", _jsx(_components.strong, {
              children: "Dimension Decomposition"
            }), " allows you to view the dimensional analysis results specific to that point."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Quick distribution"
          }), ": After you select the main analysis indicator, the dimension analysis area displays several commonly used dimension distribution graphs of the indicator. The dimensions supported by each indicator are different. Explore the display methods of each dimension."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "One-dimensional analysis"
          }), ": In addition to the quick distribution, the analysis dimensions supported by the selected indicator are displayed on the left side of the dimensional analysis area. When you click a dimension, the analysis result list of this dimension is displayed on the right."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/diplus-individual-dimension-analysis.png",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Linkage with global filter conditions"
          }), ": The charts in the quick distribution of dimensional analysis and the results of one-dimensional analysis are generated according to the filter conditions set in the global filter."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "sampling-analysis",
      children: "Sampling analysis"
    }), `
`, _jsxs(_components.p, {
      children: ["Sampling analysis is only supported when video/audio freeze rate and network transmission delay rate are selected as the main analysis indicators. Click a data point in the time series analysis diagram of these three indicators, and select ", _jsx(_components.strong, {
        children: "Data Sampling"
      }), " to sample and analyze the data point."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/diplus-sampling-analysis.png",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Sampling analysis includes the following functions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Drag the slider to sample"
          }), ": The orange sampling slider covers a time interval of 30 minutes. When you drag the orange slider to any position on the graph, the indicator changes and gradient distribution during the 30 minute interval is displayed."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Stacked column chart"
          }), ": The slider sampling result displays the indicator distribution of the 30 minute interval in the form of a stacked column chart. Click the color block in the column to perform user sampling for this group."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "User sampling"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "When you click the color column, the relevant information of this group of users is displayed in a list including user ID, device type, network type, and other parameters. Up to 500 sets of data can be displayed."
          }), `
`, _jsxs(_components.li, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Detailed Information"
            }), " on the right to jump to the ", _jsx(_components.strong, {
              children: "Call Survey-Call Details"
            }), " page of the corresponding call."]
          }), `
`, _jsx(_components.li, {
            children: "Click a header item to sort all results in ascending or descending order based on that item."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "comparative-analysis",
      children: "Comparative analysis"
    }), `
`, _jsx(_components.p, {
      children: "You find the comparative analysis button in the upper right corner of the analysis area, click and select the desired analysis method to start the comparative analysis."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/diplus-comparative-analysis.png",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Comparative analysis supports the following methods:"
    }), `
`, _jsx(_components.h4, {
      id: "indicator-comparison",
      children: "Indicator comparison"
    }), `
`, _jsx(_components.p, {
      children: "Indicator comparison allows you to analyze and compare the changing trends of different indicators within the same time period."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/diplus-index-comparison.png",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Consider the following when using this feature:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "You can select up to 3 indicators to compare with the main analysis indicators."
      }), `
`, _jsx(_components.li, {
        children: "When multiple indicators are selected and applied, the dimension global filter conditions will be cleared to initialize the comparison mode. You can then add dimension global filter conditions again."
      }), `
`, _jsx(_components.li, {
        children: "After selecting and applying multiple indicators, the time series analysis area will display a multi-indicator time series diagram. The dimension analysis area will present dimensional data corresponding to the selected multiple indicators for single-dimensional analysis."
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "time-comparison",
      children: "Time comparison"
    }), `
`, _jsx(_components.p, {
      children: "Time comparison is utilized to compare the data performance and change trend of the same indicator across different time periods."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/diplus-time-comparison.png",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "The time comparison method supports the following selection modes:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "* **Comparison with the previous cycle**: Compares the data from the previous 14-day cycle."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "* **Compare with last month**: Compares the data from the corresponding period in the previous month."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "* **Custom time**: Allows you to choose a comparison period based on your preference. The granularity is in days, and the number of days selected should match the current time period."
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Ensure that the start time of all comparison time periods does not precede the earliest query time permitted by your package."
    }), `
`, _jsx(_components.h4, {
      id: "global-comparison",
      children: "Global comparison"
    }), `
`, _jsx(_components.p, {
      children: "Global comparison is used to compare the results of a certain indicator under dimensional conditions with global results. When using this method, please note that the global comparison only takes effect when the main analysis indicator is selected and the dimension filter condition is added."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/diplus-global-comparison.png",
        alt: ""
      })
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains information that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsx(_components.h3, {
      id: "core-indicators",
      children: "Core indicators"
    }), `
`, _jsx(_components.p, {
      children: "Data Insight plus supports the following core indicators."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Indicator name"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Number of calls"
          }), _jsxs(_components.td, {
            children: ["A call is counted from the time the first user joins the channel until the last user leaves the channel.", "Calls is the total number of calls that occurred during the selected time frame."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Concurrent calls"
          }), _jsxs(_components.td, {
            children: ["A call is counted from the time the first user joins the channel until the last user leaves the channel.", "Concurrent Calls is the number of simultaneous calls that were made online during the selected time frame."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Number of calling users (according to user ID + channel name)"
          }), _jsxs(_components.td, {
            children: ["Each user ID + channel name is counted as one user, and the same user repeatedly joining the same channel is counted as one person.", "The number of users is the total number of users who made calls during the selected time range."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Concurrent users"
          }), _jsxs(_components.td, {
            children: ["Each user ID + channel name is counted as one user.", "The number of concurrent users is the number of users who are online at the same time during the selected time frame."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "5s join channel success rate"
          }), _jsx(_components.td, {
            children: "Number of successful channel joins within 5 seconds / number of attempts to join the channel * 100%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "500ms video freeze rate"
          }), _jsxs(_components.td, {
            children: ["If the frame-free time exceeds 500 ms after the remote video is decoded, it is recorded as a video freeze.", "Video Freezing Rate = Video Freezing Duration ÷ Video Call Duration × 100%"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "200ms audio freeze rate"
          }), _jsxs(_components.td, {
            children: ["If the frame-free time exceeds 200 ms after receiving the remote audio decoding, it is recorded as an audio freeze.", "Audio freeze rate = audio freeze duration ÷ audio call duration × 100%"]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "other-indicators",
      children: "Other indicators"
    }), `
`, _jsx(_components.p, {
      children: "The following indicators are available in addition to the core indicators."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Indicator name"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Number of calling users (by user ID)"
          }), _jsxs(_components.td, {
            children: ["Each user ID is counted as one user.", "The number of users is the total number of users who made calls during the selected time range."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Call time"
          }), _jsx(_components.td, {
            children: "The cumulative duration of calls made by all users using the RTC SDK, in minutes. When audio and video exist at the same time, only the video duration is counted."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video call duration"
          }), _jsx(_components.td, {
            children: "The cumulative duration of video calls made by all users using the RTC SDK, in minutes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio call duration"
          }), _jsx(_components.td, {
            children: "The cumulative duration of audio calls made by all users using the RTC SDK, in minutes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Active calls"
          }), _jsxs(_components.td, {
            children: ["Each time a user enters and exits a channel is counted as one active call, and the same user repeatedly joins the same channel as multiple active calls.", "Active calls are the total number of sessions that occurred within the selected time frame."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "5s join channel success rate"
          }), _jsx(_components.td, {
            children: "Number of successful channel joins within 5 seconds / number of attempts to join the channel * 100%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "End-to-end network transmission delay rate"
          }), _jsxs(_components.td, {
            children: ["The delay from the sending end to the receiving end through network transmission (excluding network jitter delay) is greater than 400ms, which is recorded as a delay.", "End-to-end network delay rate = total audio and video network transmission delay time ÷ total audio and video time length * 100%"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Number of concurrent cloud recording tasks"
          }), _jsx(_components.td, {
            children: "Each time the method is called start to start cloud recording, a cloud recording task is created. Only displayed when cloud recording is enabled, see cloud recording for details."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Enter the maximum number of concurrent tasks for online media streaming"
          }), _jsx(_components.td, {
            children: "Each time Create the method is called to create a cloud player, an input media stream task is created. Only displayed when inputting online media stream is enabled, see Inputting Online Media Stream for details."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "dimensions",
      children: "Dimensions"
    }), `
`, _jsx(_components.p, {
      children: "Select from the following for dimension filtering:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Dimension name"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Nation"
          }), _jsx(_components.td, {
            children: "The user's country."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Area"
          }), _jsx(_components.td, {
            children: "The user's region."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Operating system"
          }), _jsx(_components.td, {
            children: "The operating system used by the user, such as Windows, iOS, etc."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Equipment type"
          }), _jsx(_components.td, {
            children: "The device type used by the user, such as iPad 7.5, etc."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "SDK products"
          }), _jsx(_components.td, {
            children: "SDK products used by users for calls, including RTC Native and WebRTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "SDK version"
          }), _jsx(_components.td, {
            children: "The SDK version used by the user call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Network Type"
          }), _jsx(_components.td, {
            children: "The network used by the user when calling, such as Wi-Fi, 4G, etc."
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
