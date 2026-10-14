import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Call Inspector",
  description: "See the quality of your calls in diagrams displaying data during the call process."
};
export let _markdown = `

The Agora Analytics Call Inspector enables you to:

* Find a call or a group of calls.
* Determine the overall call quality in a channel.
* Dive into user-specific metrics and events.
* Examine user experience issues.

The following workflow shows how to use Call Inspector features:

![call-inspector](https://assets-docs.agora.io/images/analytics/call-inspector.svg)

<CalloutContainer type="info">
  <CalloutTitle>
    Enable Call Inspector
  </CalloutTitle>

  <CalloutDescription>
    To enable Call Inspector, subscribe to an Agora Analytics pricing plan. For details, see [Pricing](../../reference/pricing.md).
  </CalloutDescription>
</CalloutContainer>

## Use Call Search [#use-call-search]

On the Call Search page, you can apply multiple filters such as channel name, call duration, call freeze rates, and number of users to search calls and view their basic information.

![Call Search](https://assets-docs.agora.io/images/analytics/call-search.png)

To search calls, follow these steps:

1. Log in to [Agora Console](https://console.agora.io/) and click **Agora Analytics** > **Call Inspector** in the left navigation menu.
2. In the upper-left corner, select a project. You see all the available calls under the project.
3. Start a search in one of the following ways:

   * Basic search: On the top of the page, select a time range, channel name or call ID, and call status.

   * Advanced search: Click **Advanced** in the upper right corner, add one or more filters as needed, and then click **Search**.

The accessible time range depends on the data retention policy for Call Inspector features in your [Pricing Plan](../../reference/pricing.md).

## Get Call Overview [#get-call-overview]

The Call Overview page is designed to help you quickly understand the overall situation of a large-scale call, so that you can locate problems or users and inspect user-specific issues. This page includes a summary of exceptions, as well as comprehensive metric statistics.

To enter the Call Overview page, follow these steps:

1. [Subscribe](../../reference/pricing.md) to the Premium or Enterprise pricing plan. Other pricing plans do not provide access to the Call Overview page.
2. [Use Call Search](#use-call-search) to find the call you want to inspect, then click **Call Details** in the **Action** column.
   * If [the number of Accumulated Call Users (ACU)](../../reference/call-search-terms.md) is greater than or equal to 50, you enter the Call Overview page.
   * If the number of ACU is less than 50, you first enter the Call Details page. Click the **Call Overview** tab on the top to switch.

The Call Overview page consists of the following sections.

### Exception summary [#exception-summary]

This section shows issues that might significantly affect user experience in the current call, including the following subsections:

![Call Overview](https://assets-docs.agora.io/images/analytics/call-overview.png)

|                      | Description                                                | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Statistical insights | Important conclusions related to audio and video freezing. | * If the number of [ACU](../../reference/call-search-terms.md) for the current call is less than 20 or no conclusion is available, this subsection is hidden.
* The data granularity of this subsection is one minute. If fewer than 20 (included) users are online during a given minute, the data point for this minute is ignored.
* In the upper right corner of this subsection, click the arrow icon \`>\` to scroll to [Detailed statistics](#detailed-statistics). |

### Detailed statistics [#detailed-statistics]

This section displays call quality statistics through various charts to help monitor and analyze large-scale calls.

![1650429301020](https://web-cdn.agora.io/docs-files/1650429301020)

![1650429365123](https://web-cdn.agora.io/docs-files/1650429365123)

This section includes the following subsections:

| Sub-section                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                | Notes                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Time selector                                 | Select the time range you want to inspect.                                                                                                                                                                                                                                                                                                                                                                                 | If you change the time range, the data displayed in all of the following subsections is updated.                                                                                                                                                                                                                                                                       |
| Top video freezing users/Video freeze details | * If the number of [ACU](../../reference/call-search-terms.md) does not exceed 20 in the current call, this subsection is shown as **Top video freezing users**, ranking all users in the descending order of video freeze rate.
* If the number of ACU in the current call exceeds 20, this subsection is shown as **Video freeze details**, distributing users into different brackets based on their video freeze rate. | N/A                                                                                                                                                                                                                                                                                                                                                                    |
| TOP audio freezing users/Audio freeze details | - If the number of ACU does not exceed 20 in the current call, this subsection is shown as **Top audio freezing users**, ranking all users in the descending order of audio freeze rate.
- If the number of ACU in the current call exceeds 20, this subsection is shown as **Audio freeze details**, distributing users into different brackets based on their audio freeze rate.                                         | N/A                                                                                                                                                                                                                                                                                                                                                                    |
| Trend tracking                                | Relations between the following metrics and time:- Audio freezing users: The number of users whose audio freeze rate is greater than 3%.
- Video freezing users: The number of users whose video freeze rate is greater than 5%.
- Number of in-call users
- [Audio freeze rate](../../reference/call-search-terms.md)
- [Video freeze rate](../../reference/call-search-terms.md)                                         | * If the number of ACU in the current call does not exceed 20, this subsection is hidden.
* All the metrics displayed in the subsection are calculated by minute.
* The value of Peak Call Users to the left of the line chart is for reference only. The more precise metric is [Peak Concurrent Users](../../reference/call-search-terms.md) at the top of the page. |
| Metric Analysis                               | Distribution of audio freeze rate and video freeze rate by geography, device, network, SDK version, and operating system.                                                                                                                                                                                                                                                                                                  | If the number of ACU in the current call does not exceed 20, this subsection is hidden.                                                                                                                                                                                                                                                                                |

## View Call Details [#view-call-details]

The Call Details page helps you locate user-specific quality issues and exceptions. It consists of the following subpages:

* Homepage: The page you enter by clicking the **Call Details** tab on the top. On the homepage, you can get basic information about each user in the call. You can also view the key events and audio and video quality metrics for 20 users simultaneously.
* End-to-end details page: This page provides all the key quality metrics and events for a single sender-receiver pair.
* Sender details page: This page provides all of the key quality metrics and events for a single sender.

For details on how to troubleshoot common call-quality issues, see [Troubleshooting](../../reference/call-search-manual.md).

### Homepage [#homepage]

To view the Call Details homepage, follow these steps:

1. [Use Call Search](#use-call-search) to find the call, then click **Call Details** in the **Action** column.

   * If the [ACU](../../reference/call-search-terms.md) is greater than or equal to 50, first enter the Call Overview page. Click the **Call Details** tab on the top to switch.

   * If the ACU is less than 50, you enter the Call Details homepage.

2. Add users through one of the following ways:

   * Add one by one: Enter the user ID, and click **Add User**.

   * Add in a batch: Click **Advanced search**, add one or more filters as needed, and then click **Search**. In the returned list, select the users you want to add, and click **Save**.

3. Display or hide the [audio and video quality metrics](#audio-and-video-quality-metrics) for the added users: Click the switch in the **View metrics** column. You can turn on the switch for a maximum of 20 users simultaneously.

4. Select the time range you want to inspect. If the time range changes, the audio and video quality metrics data is updated.

   ![1650430027822](https://web-cdn.agora.io/docs-files/1650430027822)

#### Key events [#key-events]

For each user with the **View metrics** switch enabled, this section displays their events within the selected time range in two views: Timeline and List

**Timeline view**

The circles on the timeline represent events. A larger circle means more events occurred at that time. If a noteworthy event occurred, the circle is marked red.

![1650430075044](https://web-cdn.agora.io/docs-files/1650430075044)

In the timeline view, you can do the following:

* Hover your mouse over a circle to view event logs.

* Click the zoom-in or zoom-out icon in the upper right corner to adjust the time scale.

* Select one or more event types using the drop-down menu in the upper right corner, including **login and logout**, **network transmission**, **video sending**, and **audio sending**.

* Click **List view** in the upper right corner to switch to the list view.

**List view**

The list view has three columns: Time, event type, and event. The list is displayed side by side with the corresponding user’s audio and video quality metrics.

![1650430094383](https://web-cdn.agora.io/docs-files/1650430094383)

In the list view, you can do the following:

* Select one or more event types using the drop-down menu in the upper right corner, including **login and logout**, **network transmission**, **video sending**, **video receiving**, **audio sending**, and **audio receiving**.

* Click **Timeline view** in the upper right corner to switch to the timeline view.

#### Audio and video quality metrics [#audio-and-video-quality-metrics]

With the core audio and video metrics displayed in the sender’s and receiver’s view, this section shows the quality of experience within the selected time range for each user whose **View metrics** switch is turned on (referred to as "selected users").

The metrics are defined in [User-specific metrics](../../reference/call-search-terms.md).

**Sender’s view**

Click **Sender’s view**, and choose **Audio** or **Video**. You can see the sending bitrates and upstream packet loss rates for all [senders](../../reference/call-search-terms.md) among the selected users.

Follow these steps to locate abnormal senders:

* If the line chart has many red glitches, the upstream packet loss rate might be high. Click **View sender details** in the upper right corner to enter the [sender details page](#sender-details-page) for further inspection.

* If an exclamation mark appears in the upper right corner, the user might encounter an issue that significantly affects the user experience. Click the exclamation mark to enter this user’s [Call diagnosis (Beta)](#view-call-diagnosis-beta) page.

**Receiver’s view**

Click **Receiver’s view**, and click **Audio** or **Video**. You can see the receiving bitrates and freeze time for all [receivers](../../reference/call-search-terms.md) among the selected users. If audio and video streams from multiple senders are received, they are marked in different colors on the line chart.

Follow these steps to locate abnormal receivers:

* If the line chart has many red glitches, the receiver might experience significant freezing issues. In the upper right corner of the line chart, click **Inspect a remote client**, and select the corresponding sender’s user ID from the drop-down menu. You enter the [end-to-end details page](#end-to-end-details-page) for further inspection.

* If an exclamation mark ![](https://assets-docs.agora.io/images/analytics/exclaimaition.png) appears in the upper right corner, the user might have encountered an issue that significantly affected the user experience. Click the exclamation mark to enter this user’s [Call diagnosis (Beta)](#view-call-diagnosis-beta) page.

### End-to-end details page [#end-to-end-details-page]

This page provides the following information for the selected sender-receiver pair:

* Call Diagnosis conclusions. If the selected receiver and sender do not encounter significant experience issues, this information is hidden.

* Quality metrics, including network status, device status, and audio and video quality. See [User-specific metrics](../../reference/call-search-terms.md).

* Key events, including a timeline view and a list view. In the list view, you can filter event types using the drop-down menu in the upper left corner.

![1650435338925](https://web-cdn.agora.io/docs-files/1650435338925)

### Sender details page [#sender-details-page]

This page contains the following information for the selected sender:

* Call Diagnosis conclusions. If the selected sender does not encounter significant experience issues, this information is hidden.

* Quality metrics, including network status, device status, and audio and video quality. See [User-specific metrics](../../reference/call-search-terms.md).

* Key events, including a timeline view and a list view. You can filter event types using the drop-down menu in the upper right corner.

![1650435355537](https://web-cdn.agora.io/docs-files/1650435355537)

## View Call Diagnosis (Beta) [#view-call-diagnosis-beta]

The Call Diagnosis page embeds Agora's auto-diagnosis engine to examine user experience issues and detect exceptions. The engine gives diagnosis conclusions based on a mapping between experience issues and possible causes. Currently, the engine is able to detect a number of call experience issues and host-specific issues. For details, see [Diagnosis checklist items](../../reference/call-search-terms.md).

![1650429448641](https://web-cdn.agora.io/docs-files/1650429448641)

To view the Call Diagnosis page, follow these steps:

1. [Use Call Search](#use-call-search) to find the call you want to inspect, then click **Call Details** in the **Action** column.
2. Click the &#x2A;*Call Diagnosis (Beta)** tab at the top of the page.
3. Add the following filters, as needed:
   * User: Enter the user ID to add users one by one, or use advanced search to add users in a batch. You can add up to 10 users for each diagnosis.
   * Time: Drag the slider, or select from the drop-down menu.
   * Exception: Select the exception type from the drop-down menu, such as sending issue, receiving issue, network issue, capturing issue, abnormal behavior, or user experience exception issue.
4. Click a user in the returned list to see the diagnosis conclusion:
   * If only one user ID is displayed, the conclusion is for the corresponding user.
   * If two user IDs are displayed, the conclusion is for the corresponding sender-receiver pair.
5. (Optional) Click **View Details**:
   * If the conclusion is for a single user and the user is a sender, you enter the [sender details page](#sender-details-page).
   * If the conclusion is for a single user and the user is a receiver, you enter the [call details homepage ](#homepage), and the switch for **View metrics** is turned on for the user.
   * If the conclusion is for a sender-receiver pair, you enter their [end-to-end details page](#end-to-end-details-page).

## Give your feedback [#give-your-feedback]

All features related to the auto-diagnosis engine are currently in beta. Follow these steps to send your feedback:

1. Hover your mouse over a diagnosis entry in any of the following places:
   * The Call Diagnosis page.
   * The Call experience (beta), Host diagnosis (beta), or Abnormal host (beta) subsection on the Call Overview page.
2. Hover your mouse over the highlighted text &#x2A;*Is it accurate?**.
3. Click **Accurate diagnosis** or **Inaccurate diagnosis**.
4. (Optional) Enter a detailed description in the text box.
5. Click **Submit**.

## See also [#see-also]

* For a detailed explanation of the metrics and diagnosis checklist items used by Call Inspector, see [Call Inspector Glossary](../../reference/call-search-terms.md).
* Alternatively, you can use the Call Inspector service through the RESTful API. For details, see [Agora Analytics RESTful API](/en/api-reference/api-ref/agora-analytics/analytics-rest-api).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora Analytics Call Inspector enables you to:"
  }, {
    heading: undefined,
    content: "Find a call or a group of calls."
  }, {
    heading: undefined,
    content: "Determine the overall call quality in a channel."
  }, {
    heading: undefined,
    content: "Dive into user-specific metrics and events."
  }, {
    heading: undefined,
    content: "Examine user experience issues."
  }, {
    heading: undefined,
    content: "The following workflow shows how to use Call Inspector features:"
  }, {
    heading: undefined,
    content: "To enable Call Inspector, subscribe to an Agora Analytics pricing plan. For details, see Pricing."
  }, {
    heading: "use-call-search",
    content: "On the Call Search page, you can apply multiple filters such as channel name, call duration, call freeze rates, and number of users to search calls and view their basic information."
  }, {
    heading: "use-call-search",
    content: "To search calls, follow these steps:"
  }, {
    heading: "use-call-search",
    content: "Log in to Agora Console and click **Agora Analytics** > **Call Inspector** in the left navigation menu."
  }, {
    heading: "use-call-search",
    content: "In the upper-left corner, select a project. You see all the available calls under the project."
  }, {
    heading: "use-call-search",
    content: "Start a search in one of the following ways:"
  }, {
    heading: "use-call-search",
    content: "Basic search: On the top of the page, select a time range, channel name or call ID, and call status."
  }, {
    heading: "use-call-search",
    content: "Advanced search: Click **Advanced** in the upper right corner, add one or more filters as needed, and then click **Search**."
  }, {
    heading: "use-call-search",
    content: "The accessible time range depends on the data retention policy for Call Inspector features in your Pricing Plan."
  }, {
    heading: "get-call-overview",
    content: "The Call Overview page is designed to help you quickly understand the overall situation of a large-scale call, so that you can locate problems or users and inspect user-specific issues. This page includes a summary of exceptions, as well as comprehensive metric statistics."
  }, {
    heading: "get-call-overview",
    content: "To enter the Call Overview page, follow these steps:"
  }, {
    heading: "get-call-overview",
    content: "Subscribe to the Premium or Enterprise pricing plan. Other pricing plans do not provide access to the Call Overview page."
  }, {
    heading: "get-call-overview",
    content: "Use Call Search to find the call you want to inspect, then click **Call Details** in the **Action** column."
  }, {
    heading: "get-call-overview",
    content: "If the number of Accumulated Call Users (ACU) is greater than or equal to 50, you enter the Call Overview page."
  }, {
    heading: "get-call-overview",
    content: "If the number of ACU is less than 50, you first enter the Call Details page. Click the **Call Overview** tab on the top to switch."
  }, {
    heading: "get-call-overview",
    content: "The Call Overview page consists of the following sections."
  }, {
    heading: "exception-summary",
    content: "This section shows issues that might significantly affect user experience in the current call, including the following subsections:"
  }, {
    heading: "exception-summary",
    content: "Description"
  }, {
    heading: "exception-summary",
    content: "Notes"
  }, {
    heading: "exception-summary",
    content: "Statistical insights"
  }, {
    heading: "exception-summary",
    content: "Important conclusions related to audio and video freezing."
  }, {
    heading: "exception-summary",
    content: "* If the number of ACU for the current call is less than 20 or no conclusion is available, this subsection is hidden.\n* The data granularity of this subsection is one minute. If fewer than 20 (included) users are online during a given minute, the data point for this minute is ignored.\n* In the upper right corner of this subsection, click the arrow icon `>` to scroll to Detailed statistics."
  }, {
    heading: "detailed-statistics",
    content: "This section displays call quality statistics through various charts to help monitor and analyze large-scale calls."
  }, {
    heading: "detailed-statistics",
    content: "This section includes the following subsections:"
  }, {
    heading: "detailed-statistics",
    content: "Sub-section"
  }, {
    heading: "detailed-statistics",
    content: "Description"
  }, {
    heading: "detailed-statistics",
    content: "Notes"
  }, {
    heading: "detailed-statistics",
    content: "Time selector"
  }, {
    heading: "detailed-statistics",
    content: "Select the time range you want to inspect."
  }, {
    heading: "detailed-statistics",
    content: "If you change the time range, the data displayed in all of the following subsections is updated."
  }, {
    heading: "detailed-statistics",
    content: "Top video freezing users/Video freeze details"
  }, {
    heading: "detailed-statistics",
    content: `* If the number of ACU does not exceed 20 in the current call, this subsection is shown as **Top video freezing users**, ranking all users in the descending order of video freeze rate.
* If the number of ACU in the current call exceeds 20, this subsection is shown as **Video freeze details**, distributing users into different brackets based on their video freeze rate.`
  }, {
    heading: "detailed-statistics",
    content: "N/A"
  }, {
    heading: "detailed-statistics",
    content: "TOP audio freezing users/Audio freeze details"
  }, {
    heading: "detailed-statistics",
    content: `* If the number of ACU does not exceed 20 in the current call, this subsection is shown as **Top audio freezing users**, ranking all users in the descending order of audio freeze rate.
* If the number of ACU in the current call exceeds 20, this subsection is shown as **Audio freeze details**, distributing users into different brackets based on their audio freeze rate.`
  }, {
    heading: "detailed-statistics",
    content: "N/A"
  }, {
    heading: "detailed-statistics",
    content: "Trend tracking"
  }, {
    heading: "detailed-statistics",
    content: `Relations between the following metrics and time:- Audio freezing users: The number of users whose audio freeze rate is greater than 3%.
- Video freezing users: The number of users whose video freeze rate is greater than 5%.
- Number of in-call users
- Audio freeze rate
- Video freeze rate`
  }, {
    heading: "detailed-statistics",
    content: `* If the number of ACU in the current call does not exceed 20, this subsection is hidden.
* All the metrics displayed in the subsection are calculated by minute.
* The value of Peak Call Users to the left of the line chart is for reference only. The more precise metric is Peak Concurrent Users at the top of the page.`
  }, {
    heading: "detailed-statistics",
    content: "Metric Analysis"
  }, {
    heading: "detailed-statistics",
    content: "Distribution of audio freeze rate and video freeze rate by geography, device, network, SDK version, and operating system."
  }, {
    heading: "detailed-statistics",
    content: "If the number of ACU in the current call does not exceed 20, this subsection is hidden."
  }, {
    heading: "view-call-details",
    content: "The Call Details page helps you locate user-specific quality issues and exceptions. It consists of the following subpages:"
  }, {
    heading: "view-call-details",
    content: "Homepage: The page you enter by clicking the **Call Details** tab on the top. On the homepage, you can get basic information about each user in the call. You can also view the key events and audio and video quality metrics for 20 users simultaneously."
  }, {
    heading: "view-call-details",
    content: "End-to-end details page: This page provides all the key quality metrics and events for a single sender-receiver pair."
  }, {
    heading: "view-call-details",
    content: "Sender details page: This page provides all of the key quality metrics and events for a single sender."
  }, {
    heading: "view-call-details",
    content: "For details on how to troubleshoot common call-quality issues, see Troubleshooting."
  }, {
    heading: "homepage",
    content: "To view the Call Details homepage, follow these steps:"
  }, {
    heading: "homepage",
    content: "Use Call Search to find the call, then click **Call Details** in the **Action** column."
  }, {
    heading: "homepage",
    content: "If the ACU is greater than or equal to 50, first enter the Call Overview page. Click the **Call Details** tab on the top to switch."
  }, {
    heading: "homepage",
    content: "If the ACU is less than 50, you enter the Call Details homepage."
  }, {
    heading: "homepage",
    content: "Add users through one of the following ways:"
  }, {
    heading: "homepage",
    content: "Add one by one: Enter the user ID, and click **Add User**."
  }, {
    heading: "homepage",
    content: "Add in a batch: Click **Advanced search**, add one or more filters as needed, and then click **Search**. In the returned list, select the users you want to add, and click **Save**."
  }, {
    heading: "homepage",
    content: "Display or hide the audio and video quality metrics for the added users: Click the switch in the **View metrics** column. You can turn on the switch for a maximum of 20 users simultaneously."
  }, {
    heading: "homepage",
    content: "Select the time range you want to inspect. If the time range changes, the audio and video quality metrics data is updated."
  }, {
    heading: "key-events",
    content: "For each user with the **View metrics** switch enabled, this section displays their events within the selected time range in two views: Timeline and List"
  }, {
    heading: "key-events",
    content: "**Timeline view**"
  }, {
    heading: "key-events",
    content: "The circles on the timeline represent events. A larger circle means more events occurred at that time. If a noteworthy event occurred, the circle is marked red."
  }, {
    heading: "key-events",
    content: "In the timeline view, you can do the following:"
  }, {
    heading: "key-events",
    content: "Hover your mouse over a circle to view event logs."
  }, {
    heading: "key-events",
    content: "Click the zoom-in or zoom-out icon in the upper right corner to adjust the time scale."
  }, {
    heading: "key-events",
    content: "Select one or more event types using the drop-down menu in the upper right corner, including **login and logout**, **network transmission**, **video sending**, and **audio sending**."
  }, {
    heading: "key-events",
    content: "Click **List view** in the upper right corner to switch to the list view."
  }, {
    heading: "key-events",
    content: "**List view**"
  }, {
    heading: "key-events",
    content: "The list view has three columns: Time, event type, and event. The list is displayed side by side with the corresponding user’s audio and video quality metrics."
  }, {
    heading: "key-events",
    content: "In the list view, you can do the following:"
  }, {
    heading: "key-events",
    content: "Select one or more event types using the drop-down menu in the upper right corner, including **login and logout**, **network transmission**, **video sending**, **video receiving**, **audio sending**, and **audio receiving**."
  }, {
    heading: "key-events",
    content: "Click **Timeline view** in the upper right corner to switch to the timeline view."
  }, {
    heading: "audio-and-video-quality-metrics",
    content: 'With the core audio and video metrics displayed in the sender’s and receiver’s view, this section shows the quality of experience within the selected time range for each user whose **View metrics** switch is turned on (referred to as "selected users").'
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "The metrics are defined in User-specific metrics."
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "**Sender’s view**"
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "Click **Sender’s view**, and choose **Audio** or **Video**. You can see the sending bitrates and upstream packet loss rates for all senders among the selected users."
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "Follow these steps to locate abnormal senders:"
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "If the line chart has many red glitches, the upstream packet loss rate might be high. Click **View sender details** in the upper right corner to enter the sender details page for further inspection."
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "If an exclamation mark appears in the upper right corner, the user might encounter an issue that significantly affects the user experience. Click the exclamation mark to enter this user’s Call diagnosis (Beta) page."
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "**Receiver’s view**"
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "Click **Receiver’s view**, and click **Audio** or **Video**. You can see the receiving bitrates and freeze time for all receivers among the selected users. If audio and video streams from multiple senders are received, they are marked in different colors on the line chart."
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "Follow these steps to locate abnormal receivers:"
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "If the line chart has many red glitches, the receiver might experience significant freezing issues. In the upper right corner of the line chart, click **Inspect a remote client**, and select the corresponding sender’s user ID from the drop-down menu. You enter the end-to-end details page for further inspection."
  }, {
    heading: "audio-and-video-quality-metrics",
    content: "If an exclamation mark  appears in the upper right corner, the user might have encountered an issue that significantly affected the user experience. Click the exclamation mark to enter this user’s Call diagnosis (Beta) page."
  }, {
    heading: "end-to-end-details-page",
    content: "This page provides the following information for the selected sender-receiver pair:"
  }, {
    heading: "end-to-end-details-page",
    content: "Call Diagnosis conclusions. If the selected receiver and sender do not encounter significant experience issues, this information is hidden."
  }, {
    heading: "end-to-end-details-page",
    content: "Quality metrics, including network status, device status, and audio and video quality. See User-specific metrics."
  }, {
    heading: "end-to-end-details-page",
    content: "Key events, including a timeline view and a list view. In the list view, you can filter event types using the drop-down menu in the upper left corner."
  }, {
    heading: "sender-details-page",
    content: "This page contains the following information for the selected sender:"
  }, {
    heading: "sender-details-page",
    content: "Call Diagnosis conclusions. If the selected sender does not encounter significant experience issues, this information is hidden."
  }, {
    heading: "sender-details-page",
    content: "Quality metrics, including network status, device status, and audio and video quality. See User-specific metrics."
  }, {
    heading: "sender-details-page",
    content: "Key events, including a timeline view and a list view. You can filter event types using the drop-down menu in the upper right corner."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "The Call Diagnosis page embeds Agora's auto-diagnosis engine to examine user experience issues and detect exceptions. The engine gives diagnosis conclusions based on a mapping between experience issues and possible causes. Currently, the engine is able to detect a number of call experience issues and host-specific issues. For details, see Diagnosis checklist items."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "To view the Call Diagnosis page, follow these steps:"
  }, {
    heading: "view-call-diagnosis-beta",
    content: "Use Call Search to find the call you want to inspect, then click **Call Details** in the **Action** column."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "Click the &#x2A;*Call Diagnosis (Beta)** tab at the top of the page."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "Add the following filters, as needed:"
  }, {
    heading: "view-call-diagnosis-beta",
    content: "User: Enter the user ID to add users one by one, or use advanced search to add users in a batch. You can add up to 10 users for each diagnosis."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "Time: Drag the slider, or select from the drop-down menu."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "Exception: Select the exception type from the drop-down menu, such as sending issue, receiving issue, network issue, capturing issue, abnormal behavior, or user experience exception issue."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "Click a user in the returned list to see the diagnosis conclusion:"
  }, {
    heading: "view-call-diagnosis-beta",
    content: "If only one user ID is displayed, the conclusion is for the corresponding user."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "If two user IDs are displayed, the conclusion is for the corresponding sender-receiver pair."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "(Optional) Click **View Details**:"
  }, {
    heading: "view-call-diagnosis-beta",
    content: "If the conclusion is for a single user and the user is a sender, you enter the sender details page."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "If the conclusion is for a single user and the user is a receiver, you enter the call details homepage , and the switch for **View metrics** is turned on for the user."
  }, {
    heading: "view-call-diagnosis-beta",
    content: "If the conclusion is for a sender-receiver pair, you enter their end-to-end details page."
  }, {
    heading: "give-your-feedback",
    content: "All features related to the auto-diagnosis engine are currently in beta. Follow these steps to send your feedback:"
  }, {
    heading: "give-your-feedback",
    content: "Hover your mouse over a diagnosis entry in any of the following places:"
  }, {
    heading: "give-your-feedback",
    content: "The Call Diagnosis page."
  }, {
    heading: "give-your-feedback",
    content: "The Call experience (beta), Host diagnosis (beta), or Abnormal host (beta) subsection on the Call Overview page."
  }, {
    heading: "give-your-feedback",
    content: "Hover your mouse over the highlighted text &#x2A;*Is it accurate?**."
  }, {
    heading: "give-your-feedback",
    content: "Click **Accurate diagnosis** or **Inaccurate diagnosis**."
  }, {
    heading: "give-your-feedback",
    content: "(Optional) Enter a detailed description in the text box."
  }, {
    heading: "give-your-feedback",
    content: "Click **Submit**."
  }, {
    heading: "see-also",
    content: "For a detailed explanation of the metrics and diagnosis checklist items used by Call Inspector, see Call Inspector Glossary."
  }, {
    heading: "see-also",
    content: "Alternatively, you can use the Call Inspector service through the RESTful API. For details, see Agora Analytics RESTful API."
  }],
  headings: [{
    id: "use-call-search",
    content: "Use Call Search"
  }, {
    id: "get-call-overview",
    content: "Get Call Overview"
  }, {
    id: "exception-summary",
    content: "Exception summary"
  }, {
    id: "detailed-statistics",
    content: "Detailed statistics"
  }, {
    id: "view-call-details",
    content: "View Call Details"
  }, {
    id: "homepage",
    content: "Homepage"
  }, {
    id: "key-events",
    content: "Key events"
  }, {
    id: "audio-and-video-quality-metrics",
    content: "Audio and video quality metrics"
  }, {
    id: "end-to-end-details-page",
    content: "End-to-end details page"
  }, {
    id: "sender-details-page",
    content: "Sender details page"
  }, {
    id: "view-call-diagnosis-beta",
    content: "View Call Diagnosis (Beta)"
  }, {
    id: "give-your-feedback",
    content: "Give your feedback"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
  depth: 2,
  url: "#use-call-search",
  title: _jsx(_Fragment, {
    children: "Use Call Search"
  })
}, {
  depth: 2,
  url: "#get-call-overview",
  title: _jsx(_Fragment, {
    children: "Get Call Overview"
  })
}, {
  depth: 3,
  url: "#exception-summary",
  title: _jsx(_Fragment, {
    children: "Exception summary"
  })
}, {
  depth: 3,
  url: "#detailed-statistics",
  title: _jsx(_Fragment, {
    children: "Detailed statistics"
  })
}, {
  depth: 2,
  url: "#view-call-details",
  title: _jsx(_Fragment, {
    children: "View Call Details"
  })
}, {
  depth: 3,
  url: "#homepage",
  title: _jsx(_Fragment, {
    children: "Homepage"
  })
}, {
  depth: 4,
  url: "#key-events",
  title: _jsx(_Fragment, {
    children: "Key events"
  })
}, {
  depth: 4,
  url: "#audio-and-video-quality-metrics",
  title: _jsx(_Fragment, {
    children: "Audio and video quality metrics"
  })
}, {
  depth: 3,
  url: "#end-to-end-details-page",
  title: _jsx(_Fragment, {
    children: "End-to-end details page"
  })
}, {
  depth: 3,
  url: "#sender-details-page",
  title: _jsx(_Fragment, {
    children: "Sender details page"
  })
}, {
  depth: 2,
  url: "#view-call-diagnosis-beta",
  title: _jsx(_Fragment, {
    children: "View Call Diagnosis (Beta)"
  })
}, {
  depth: 2,
  url: "#give-your-feedback",
  title: _jsx(_Fragment, {
    children: "Give your feedback"
  })
}, {
  depth: 2,
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Agora Analytics Call Inspector enables you to:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Find a call or a group of calls."
      }), `
`, _jsx(_components.li, {
        children: "Determine the overall call quality in a channel."
      }), `
`, _jsx(_components.li, {
        children: "Dive into user-specific metrics and events."
      }), `
`, _jsx(_components.li, {
        children: "Examine user experience issues."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following workflow shows how to use Call Inspector features:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/call-inspector.svg",
        alt: "call-inspector"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Enable Call Inspector"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To enable Call Inspector, subscribe to an Agora Analytics pricing plan. For details, see ", _jsx(_components.a, {
            href: "../../reference/pricing.md",
            children: "Pricing"
          }), "."]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "use-call-search",
      children: "Use Call Search"
    }), `
`, _jsx(_components.p, {
      children: "On the Call Search page, you can apply multiple filters such as channel name, call duration, call freeze rates, and number of users to search calls and view their basic information."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/call-search.png",
        alt: "Call Search"
      })
    }), `
`, _jsx(_components.p, {
      children: "To search calls, follow these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), " and click ", _jsx(_components.strong, {
            children: "Agora Analytics"
          }), " > ", _jsx(_components.strong, {
            children: "Call Inspector"
          }), " in the left navigation menu."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In the upper-left corner, select a project. You see all the available calls under the project."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Start a search in one of the following ways:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Basic search: On the top of the page, select a time range, channel name or call ID, and call status."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Advanced search: Click ", _jsx(_components.strong, {
                children: "Advanced"
              }), " in the upper right corner, add one or more filters as needed, and then click ", _jsx(_components.strong, {
                children: "Search"
              }), "."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The accessible time range depends on the data retention policy for Call Inspector features in your ", _jsx(_components.a, {
        href: "../../reference/pricing.md",
        children: "Pricing Plan"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "get-call-overview",
      children: "Get Call Overview"
    }), `
`, _jsx(_components.p, {
      children: "The Call Overview page is designed to help you quickly understand the overall situation of a large-scale call, so that you can locate problems or users and inspect user-specific issues. This page includes a summary of exceptions, as well as comprehensive metric statistics."
    }), `
`, _jsx(_components.p, {
      children: "To enter the Call Overview page, follow these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../../reference/pricing.md",
          children: "Subscribe"
        }), " to the Premium or Enterprise pricing plan. Other pricing plans do not provide access to the Call Overview page."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#use-call-search",
          children: "Use Call Search"
        }), " to find the call you want to inspect, then click ", _jsx(_components.strong, {
          children: "Call Details"
        }), " in the ", _jsx(_components.strong, {
          children: "Action"
        }), " column.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If ", _jsx(_components.a, {
              href: "../../reference/call-search-terms.md",
              children: "the number of Accumulated Call Users (ACU)"
            }), " is greater than or equal to 50, you enter the Call Overview page."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the number of ACU is less than 50, you first enter the Call Details page. Click the ", _jsx(_components.strong, {
              children: "Call Overview"
            }), " tab on the top to switch."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The Call Overview page consists of the following sections."
    }), `
`, _jsx(_components.h3, {
      id: "exception-summary",
      children: "Exception summary"
    }), `
`, _jsx(_components.p, {
      children: "This section shows issues that might significantly affect user experience in the current call, including the following subsections:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/call-overview.png",
        alt: "Call Overview"
      })
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Statistical insights"
          }), _jsx(_components.td, {
            children: "Important conclusions related to audio and video freezing."
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If the number of ", _jsx(_components.a, {
                  href: "../../reference/call-search-terms.md",
                  children: "ACU"
                }), " for the current call is less than 20 or no conclusion is available, this subsection is hidden."]
              }), `
`, _jsx(_components.li, {
                children: "The data granularity of this subsection is one minute. If fewer than 20 (included) users are online during a given minute, the data point for this minute is ignored."
              }), `
`, _jsxs(_components.li, {
                children: ["In the upper right corner of this subsection, click the arrow icon ", _jsx(_components.code, {
                  children: ">"
                }), " to scroll to ", _jsx(_components.a, {
                  href: "#detailed-statistics",
                  children: "Detailed statistics"
                }), "."]
              }), `
`]
            })
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "detailed-statistics",
      children: "Detailed statistics"
    }), `
`, _jsx(_components.p, {
      children: "This section displays call quality statistics through various charts to help monitor and analyze large-scale calls."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1650429301020",
        alt: "1650429301020"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1650429365123",
        alt: "1650429365123"
      })
    }), `
`, _jsx(_components.p, {
      children: "This section includes the following subsections:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Sub-section"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Notes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Time selector"
          }), _jsx(_components.td, {
            children: "Select the time range you want to inspect."
          }), _jsx(_components.td, {
            children: "If you change the time range, the data displayed in all of the following subsections is updated."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Top video freezing users/Video freeze details"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If the number of ", _jsx(_components.a, {
                  href: "../../reference/call-search-terms.md",
                  children: "ACU"
                }), " does not exceed 20 in the current call, this subsection is shown as ", _jsx(_components.strong, {
                  children: "Top video freezing users"
                }), ", ranking all users in the descending order of video freeze rate."]
              }), `
`, _jsxs(_components.li, {
                children: ["If the number of ACU in the current call exceeds 20, this subsection is shown as ", _jsx(_components.strong, {
                  children: "Video freeze details"
                }), ", distributing users into different brackets based on their video freeze rate."]
              }), `
`]
            })
          }), _jsx(_components.td, {
            children: "N/A"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "TOP audio freezing users/Audio freeze details"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If the number of ACU does not exceed 20 in the current call, this subsection is shown as ", _jsx(_components.strong, {
                  children: "Top audio freezing users"
                }), ", ranking all users in the descending order of audio freeze rate."]
              }), `
`, _jsxs(_components.li, {
                children: ["If the number of ACU in the current call exceeds 20, this subsection is shown as ", _jsx(_components.strong, {
                  children: "Audio freeze details"
                }), ", distributing users into different brackets based on their audio freeze rate."]
              }), `
`]
            })
          }), _jsx(_components.td, {
            children: "N/A"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Trend tracking"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Relations between the following metrics and time:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Audio freezing users: The number of users whose audio freeze rate is greater than 3%."
              }), `
`, _jsx(_components.li, {
                children: "Video freezing users: The number of users whose video freeze rate is greater than 5%."
              }), `
`, _jsx(_components.li, {
                children: "Number of in-call users"
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "../../reference/call-search-terms.md",
                  children: "Audio freeze rate"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "../../reference/call-search-terms.md",
                  children: "Video freeze rate"
                })
              }), `
`]
            })]
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "If the number of ACU in the current call does not exceed 20, this subsection is hidden."
              }), `
`, _jsx(_components.li, {
                children: "All the metrics displayed in the subsection are calculated by minute."
              }), `
`, _jsxs(_components.li, {
                children: ["The value of Peak Call Users to the left of the line chart is for reference only. The more precise metric is ", _jsx(_components.a, {
                  href: "../../reference/call-search-terms.md",
                  children: "Peak Concurrent Users"
                }), " at the top of the page."]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Metric Analysis"
          }), _jsx(_components.td, {
            children: "Distribution of audio freeze rate and video freeze rate by geography, device, network, SDK version, and operating system."
          }), _jsx(_components.td, {
            children: "If the number of ACU in the current call does not exceed 20, this subsection is hidden."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "view-call-details",
      children: "View Call Details"
    }), `
`, _jsx(_components.p, {
      children: "The Call Details page helps you locate user-specific quality issues and exceptions. It consists of the following subpages:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Homepage: The page you enter by clicking the ", _jsx(_components.strong, {
          children: "Call Details"
        }), " tab on the top. On the homepage, you can get basic information about each user in the call. You can also view the key events and audio and video quality metrics for 20 users simultaneously."]
      }), `
`, _jsx(_components.li, {
        children: "End-to-end details page: This page provides all the key quality metrics and events for a single sender-receiver pair."
      }), `
`, _jsx(_components.li, {
        children: "Sender details page: This page provides all of the key quality metrics and events for a single sender."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For details on how to troubleshoot common call-quality issues, see ", _jsx(_components.a, {
        href: "../../reference/call-search-manual.md",
        children: "Troubleshooting"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "homepage",
      children: "Homepage"
    }), `
`, _jsx(_components.p, {
      children: "To view the Call Details homepage, follow these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "#use-call-search",
            children: "Use Call Search"
          }), " to find the call, then click ", _jsx(_components.strong, {
            children: "Call Details"
          }), " in the ", _jsx(_components.strong, {
            children: "Action"
          }), " column."]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the ", _jsx(_components.a, {
                href: "../../reference/call-search-terms.md",
                children: "ACU"
              }), " is greater than or equal to 50, first enter the Call Overview page. Click the ", _jsx(_components.strong, {
                children: "Call Details"
              }), " tab on the top to switch."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "If the ACU is less than 50, you enter the Call Details homepage."
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
          children: "Add users through one of the following ways:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add one by one: Enter the user ID, and click ", _jsx(_components.strong, {
                children: "Add User"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add in a batch: Click ", _jsx(_components.strong, {
                children: "Advanced search"
              }), ", add one or more filters as needed, and then click ", _jsx(_components.strong, {
                children: "Search"
              }), ". In the returned list, select the users you want to add, and click ", _jsx(_components.strong, {
                children: "Save"
              }), "."]
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
          children: ["Display or hide the ", _jsx(_components.a, {
            href: "#audio-and-video-quality-metrics",
            children: "audio and video quality metrics"
          }), " for the added users: Click the switch in the ", _jsx(_components.strong, {
            children: "View metrics"
          }), " column. You can turn on the switch for a maximum of 20 users simultaneously."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Select the time range you want to inspect. If the time range changes, the audio and video quality metrics data is updated."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1650430027822",
            alt: "1650430027822"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "key-events",
      children: "Key events"
    }), `
`, _jsxs(_components.p, {
      children: ["For each user with the ", _jsx(_components.strong, {
        children: "View metrics"
      }), " switch enabled, this section displays their events within the selected time range in two views: Timeline and List"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Timeline view"
      })
    }), `
`, _jsx(_components.p, {
      children: "The circles on the timeline represent events. A larger circle means more events occurred at that time. If a noteworthy event occurred, the circle is marked red."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1650430075044",
        alt: "1650430075044"
      })
    }), `
`, _jsx(_components.p, {
      children: "In the timeline view, you can do the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Hover your mouse over a circle to view event logs."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Click the zoom-in or zoom-out icon in the upper right corner to adjust the time scale."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select one or more event types using the drop-down menu in the upper right corner, including ", _jsx(_components.strong, {
            children: "login and logout"
          }), ", ", _jsx(_components.strong, {
            children: "network transmission"
          }), ", ", _jsx(_components.strong, {
            children: "video sending"
          }), ", and ", _jsx(_components.strong, {
            children: "audio sending"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "List view"
          }), " in the upper right corner to switch to the list view."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "List view"
      })
    }), `
`, _jsx(_components.p, {
      children: "The list view has three columns: Time, event type, and event. The list is displayed side by side with the corresponding user’s audio and video quality metrics."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1650430094383",
        alt: "1650430094383"
      })
    }), `
`, _jsx(_components.p, {
      children: "In the list view, you can do the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select one or more event types using the drop-down menu in the upper right corner, including ", _jsx(_components.strong, {
            children: "login and logout"
          }), ", ", _jsx(_components.strong, {
            children: "network transmission"
          }), ", ", _jsx(_components.strong, {
            children: "video sending"
          }), ", ", _jsx(_components.strong, {
            children: "video receiving"
          }), ", ", _jsx(_components.strong, {
            children: "audio sending"
          }), ", and ", _jsx(_components.strong, {
            children: "audio receiving"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Timeline view"
          }), " in the upper right corner to switch to the timeline view."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "audio-and-video-quality-metrics",
      children: "Audio and video quality metrics"
    }), `
`, _jsxs(_components.p, {
      children: ["With the core audio and video metrics displayed in the sender’s and receiver’s view, this section shows the quality of experience within the selected time range for each user whose ", _jsx(_components.strong, {
        children: "View metrics"
      }), ' switch is turned on (referred to as "selected users").']
    }), `
`, _jsxs(_components.p, {
      children: ["The metrics are defined in ", _jsx(_components.a, {
        href: "../../reference/call-search-terms.md",
        children: "User-specific metrics"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Sender’s view"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Click ", _jsx(_components.strong, {
        children: "Sender’s view"
      }), ", and choose ", _jsx(_components.strong, {
        children: "Audio"
      }), " or ", _jsx(_components.strong, {
        children: "Video"
      }), ". You can see the sending bitrates and upstream packet loss rates for all ", _jsx(_components.a, {
        href: "../../reference/call-search-terms.md",
        children: "senders"
      }), " among the selected users."]
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to locate abnormal senders:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the line chart has many red glitches, the upstream packet loss rate might be high. Click ", _jsx(_components.strong, {
            children: "View sender details"
          }), " in the upper right corner to enter the ", _jsx(_components.a, {
            href: "#sender-details-page",
            children: "sender details page"
          }), " for further inspection."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If an exclamation mark appears in the upper right corner, the user might encounter an issue that significantly affects the user experience. Click the exclamation mark to enter this user’s ", _jsx(_components.a, {
            href: "#view-call-diagnosis-beta",
            children: "Call diagnosis (Beta)"
          }), " page."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Receiver’s view"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Click ", _jsx(_components.strong, {
        children: "Receiver’s view"
      }), ", and click ", _jsx(_components.strong, {
        children: "Audio"
      }), " or ", _jsx(_components.strong, {
        children: "Video"
      }), ". You can see the receiving bitrates and freeze time for all ", _jsx(_components.a, {
        href: "../../reference/call-search-terms.md",
        children: "receivers"
      }), " among the selected users. If audio and video streams from multiple senders are received, they are marked in different colors on the line chart."]
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to locate abnormal receivers:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the line chart has many red glitches, the receiver might experience significant freezing issues. In the upper right corner of the line chart, click ", _jsx(_components.strong, {
            children: "Inspect a remote client"
          }), ", and select the corresponding sender’s user ID from the drop-down menu. You enter the ", _jsx(_components.a, {
            href: "#end-to-end-details-page",
            children: "end-to-end details page"
          }), " for further inspection."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If an exclamation mark ", _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/exclaimaition.png",
            alt: ""
          }), " appears in the upper right corner, the user might have encountered an issue that significantly affected the user experience. Click the exclamation mark to enter this user’s ", _jsx(_components.a, {
            href: "#view-call-diagnosis-beta",
            children: "Call diagnosis (Beta)"
          }), " page."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "end-to-end-details-page",
      children: "End-to-end details page"
    }), `
`, _jsx(_components.p, {
      children: "This page provides the following information for the selected sender-receiver pair:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Call Diagnosis conclusions. If the selected receiver and sender do not encounter significant experience issues, this information is hidden."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Quality metrics, including network status, device status, and audio and video quality. See ", _jsx(_components.a, {
            href: "../../reference/call-search-terms.md",
            children: "User-specific metrics"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Key events, including a timeline view and a list view. In the list view, you can filter event types using the drop-down menu in the upper left corner."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1650435338925",
        alt: "1650435338925"
      })
    }), `
`, _jsx(_components.h3, {
      id: "sender-details-page",
      children: "Sender details page"
    }), `
`, _jsx(_components.p, {
      children: "This page contains the following information for the selected sender:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Call Diagnosis conclusions. If the selected sender does not encounter significant experience issues, this information is hidden."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Quality metrics, including network status, device status, and audio and video quality. See ", _jsx(_components.a, {
            href: "../../reference/call-search-terms.md",
            children: "User-specific metrics"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Key events, including a timeline view and a list view. You can filter event types using the drop-down menu in the upper right corner."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1650435355537",
        alt: "1650435355537"
      })
    }), `
`, _jsx(_components.h2, {
      id: "view-call-diagnosis-beta",
      children: "View Call Diagnosis (Beta)"
    }), `
`, _jsxs(_components.p, {
      children: ["The Call Diagnosis page embeds Agora's auto-diagnosis engine to examine user experience issues and detect exceptions. The engine gives diagnosis conclusions based on a mapping between experience issues and possible causes. Currently, the engine is able to detect a number of call experience issues and host-specific issues. For details, see ", _jsx(_components.a, {
        href: "../../reference/call-search-terms.md",
        children: "Diagnosis checklist items"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1650429448641",
        alt: "1650429448641"
      })
    }), `
`, _jsx(_components.p, {
      children: "To view the Call Diagnosis page, follow these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#use-call-search",
          children: "Use Call Search"
        }), " to find the call you want to inspect, then click ", _jsx(_components.strong, {
          children: "Call Details"
        }), " in the ", _jsx(_components.strong, {
          children: "Action"
        }), " column."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click the ", _jsx(_components.strong, {
          children: "Call Diagnosis (Beta)"
        }), " tab at the top of the page."]
      }), `
`, _jsxs(_components.li, {
        children: ["Add the following filters, as needed:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "User: Enter the user ID to add users one by one, or use advanced search to add users in a batch. You can add up to 10 users for each diagnosis."
          }), `
`, _jsx(_components.li, {
            children: "Time: Drag the slider, or select from the drop-down menu."
          }), `
`, _jsx(_components.li, {
            children: "Exception: Select the exception type from the drop-down menu, such as sending issue, receiving issue, network issue, capturing issue, abnormal behavior, or user experience exception issue."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["Click a user in the returned list to see the diagnosis conclusion:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If only one user ID is displayed, the conclusion is for the corresponding user."
          }), `
`, _jsx(_components.li, {
            children: "If two user IDs are displayed, the conclusion is for the corresponding sender-receiver pair."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["(Optional) Click ", _jsx(_components.strong, {
          children: "View Details"
        }), ":", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the conclusion is for a single user and the user is a sender, you enter the ", _jsx(_components.a, {
              href: "#sender-details-page",
              children: "sender details page"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the conclusion is for a single user and the user is a receiver, you enter the ", _jsx(_components.a, {
              href: "#homepage",
              children: "call details homepage "
            }), ", and the switch for ", _jsx(_components.strong, {
              children: "View metrics"
            }), " is turned on for the user."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the conclusion is for a sender-receiver pair, you enter their ", _jsx(_components.a, {
              href: "#end-to-end-details-page",
              children: "end-to-end details page"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "give-your-feedback",
      children: "Give your feedback"
    }), `
`, _jsx(_components.p, {
      children: "All features related to the auto-diagnosis engine are currently in beta. Follow these steps to send your feedback:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Hover your mouse over a diagnosis entry in any of the following places:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The Call Diagnosis page."
          }), `
`, _jsx(_components.li, {
            children: "The Call experience (beta), Host diagnosis (beta), or Abnormal host (beta) subsection on the Call Overview page."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["Hover your mouse over the highlighted text ", _jsx(_components.strong, {
          children: "Is it accurate?"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Accurate diagnosis"
        }), " or ", _jsx(_components.strong, {
          children: "Inaccurate diagnosis"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "(Optional) Enter a detailed description in the text box."
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Submit"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["For a detailed explanation of the metrics and diagnosis checklist items used by Call Inspector, see ", _jsx(_components.a, {
          href: "../../reference/call-search-terms.md",
          children: "Call Inspector Glossary"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Alternatively, you can use the Call Inspector service through the RESTful API. For details, see ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/agora-analytics/analytics-rest-api",
          children: "Agora Analytics RESTful API"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
