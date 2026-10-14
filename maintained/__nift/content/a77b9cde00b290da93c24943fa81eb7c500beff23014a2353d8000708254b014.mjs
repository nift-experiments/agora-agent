import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Compare Agora Analytics pricing plans, their features, and monthly fees, and manage your subscription."
};
export let _markdown = `

Agora Analytics manages analytics features and API access through pricing plans. To use a feature or an API, you
subscribe to the plan that provides access to that feature or API.

## Pricing plan features [#pricing-plan-features]

Agora Analytics offers the Starter, Standard, Premium, and Enterprise pricing plans. The features available in each
pricing plan are listed in the following sections.

### Call Inspector [#call-inspector]

[Call Inspector](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search) is available on all plans. Data retention, RESTful API access, and embedding vary by plan:

| Feature                              | Starter |    Standard    |    Premium    |    Enterprise    |
| ------------------------------------ | :-----: | :------------: | :-----------: | :--------------: |
| Access through Agora Console         |    ✔    |        ✔       |       ✔       |         ✔        |
| Data retention                       |  3 days |     7 days     |    14 days    |      30 days     |
| Call Inspector RESTful API           |    ✘    | Standard-level | Premium-level | Enterprise-level |
| Support for embedding in web portals |    ✘    |        ✔       |       ✔       |         ✔        |

For details about the Standard, Premium, and Enterprise-level Call Inspector RESTful APIs, see [RESTful API](api.md).

### Data Insights and Data Insights Plus [#data-insights-and-data-insights-plus]

[Data Insights](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/data-insight) and [Data Insights Plus](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/data-insight-plus) start with the Standard plan. Higher plans offer longer data retention, finer granularity, lower latency, and more analysis options:

| Module             | Feature                              | Starter | Standard                       | Premium                               | Enterprise                            |
| ------------------ | ------------------------------------ | ------- | ------------------------------ | ------------------------------------- | ------------------------------------- |
| Data Insights      | Access through Agora Console         | ✘       | ✔                              | ✔                                     | ✔                                     |
| Data Insights      | Data retention                       | ✘       | 30 days                        | 60 days                               | 90 days                               |
| Data Insights      | Data granularity                     | ✘       | **Usage Overview**: Day        | **Usage Overview**: Day/Hour          | **Usage Overview**: Day/Hour          |
| Data Insights      | Data granularity                     | ✘       | **Quality Overview**: Day/Hour | **Quality Overview**: Day/Hour/Minute | **Quality Overview**: Day/Hour/Minute |
| Data Insights      | Data latency                         | N/A     | **Usage Overview**: 24 hours   | **Usage Overview**: 12 hours          | **Usage Overview**: 6 hours           |
| Data Insights      | Data latency                         | N/A     | **Quality Overview**: 12 hours | **Quality Overview**: 6 hours         | **Quality Overview**: 6 hours         |
| Data Insights      | Support for embedding in web portals | ✘       | ✘                              | ✔                                     | ✔                                     |
| Data Insights      | Data Insights RESTful API            | ✘       | ✘                              | ✔                                     | ✔                                     |
| Data Insights Plus | Multi-dimensional cross analysis     | ✘       | ✔                              | ✔                                     | ✔                                     |
| Data Insights Plus | Data sampling analysis               | ✘       | ✘                              | ✔                                     | ✔                                     |
| Data Insights Plus | Comparative analysis                 | ✘       | ✘                              | ✔                                     | ✔                                     |

For details about the Data Insights RESTful API, see [RESTful API](api.md).

### Real-time Monitoring [#real-time-monitoring]

[Real-time Monitoring](/en/realtime-media/agora-analytics/build/monitor-and-get-alerts/monitor) starts with the Standard plan. RESTful API access requires the Premium or Enterprise plan:

| Feature                              | Starter | Standard |    Premium    |    Enterprise    |
| ------------------------------------ | :-----: | :------: | :-----------: | :--------------: |
| Access through Agora Console         |    ✘    |     ✔    |       ✔       |         ✔        |
| Real-time Monitoring RESTful API     |    ✘    |     ✘    | Premium-level | Enterprise-level |
| Data sampling                        |    ✘    |     ✔    |       ✔       |         ✔        |
| Support for embedding in web portals |    ✘    |     ✔    |       ✔       |         ✔        |

For details about the Premium and Enterprise-level Real-time Monitoring RESTful APIs, see [RESTful API](api.md).

### Alert Notifications [#alert-notifications]

[Alert Notifications](/en/realtime-media/agora-analytics/build/monitor-and-get-alerts/alarm) start with the Premium plan. Embedding in web portals requires the Enterprise plan:

| Feature                              | Starter | Standard | Premium | Enterprise |
| ------------------------------------ | :-----: | :------: | :-----: | :--------: |
| Access through Agora Console         |    ✘    |     ✘    |    ✔    |      ✔     |
| Support for embedding in web portals |    ✘    |     ✘    |    ✘    |      ✔     |

### Third-party integrations [#third-party-integrations]

Agora Analytics can push real-time data to the following third-party observability platforms:

| Platform                                                                                        | Starter | Standard | Premium | Enterprise |
| ----------------------------------------------------------------------------------------------- | :-----: | :------: | :-----: | :--------: |
| [Datadog](/en/realtime-media/agora-analytics/build/integrate-and-embed/datadog-integration)     |    ✘    |     ✘    |    ✔    |      ✔     |
| [New Relic](/en/realtime-media/agora-analytics/build/integrate-and-embed/new-relic-integration) |    ✘    |     ✘    |    ✔    |      ✔     |

## Prices [#prices]

Each plan is billed as a monthly subscription:

|                                  | Starter | Standard | Premium | Enterprise |
| -------------------------------- | :-----: | :------: | :-----: | :--------: |
| Subscription fee per month (US$) |    0    |    449   |   999   |    1,599   |

You can also subscribe to Agora Analytics packages through Agora support plans. For details, visit [Agora Support Plans](https://www.agora.io/en/pricing/support-plans/).

## Plan management [#plan-management]

This section shows you how to subscribe to, unsubscribe from, or switch Agora Analytics pricing plans.

### Subscribe to a plan [#subscribe-to-a-plan]

To subscribe to an Agora Analytics pricing plan, do the following:

1. In [Agora Console](https://console.agora.io/), select **Agora Analytics** in the sidebar to open Agora Analytics in a new tab, then select **Pricing Plan**.

2. Choose the plan you want to use, and click **Subscribe**.

   <CalloutContainer type="info">
     <CalloutDescription>
       For the Enterprise pricing plan, contact [support@agora.io](mailto\\:support@agora.io).
     </CalloutDescription>
   </CalloutContainer>

3. Follow the on-screen instructions to complete your payment.

Subscription takes effect immediately. After subscribing to a plan, you can click **My Package Subscription** in the upper-right corner to view your subscription details.

By default, subscription to Agora Analytics pricing plans is automatically renewed. You can cancel it at any time. See [Unsubscribe from a plan](#unsubscribe-from-a-plan-or-switch-to-another-plan) for details.

Agora Analytics charges are billed to your account on the first of every month until you cancel your subscription. Your subscription fee for the subsequent month is listed in your monthly bill. For details, see [Billing policies and free-of-charge policy](billing-policies.md).

### Unsubscribe from a plan or switch to another plan [#unsubscribe-from-a-plan-or-switch-to-another-plan]

To unsubscribe from an Agora Analytics pricing plan, do the following:

1. In [Agora Console](https://console.agora.io/), select **Agora Analytics** in the sidebar to open Agora Analytics in a new tab, then select **Pricing Plan**.

2. In the upper-right corner, click **My Package Subscription**.

3. Find the plan you want to unsubscribe from, and click **Cancel** in the **Action** column.

To switch to another plan, do the following:

1. In [Agora Console](https://console.agora.io/), select **Agora Analytics** in the sidebar to open Agora Analytics in a new tab, then select **Pricing Plan**.

2. Choose the plan you want to switch to, and click **Subscribe**.

   <CalloutContainer type="info">
     <CalloutDescription>
       For the Enterprise pricing plan, contact [support@agora.io](mailto\\:support@agora.io).
     </CalloutDescription>
   </CalloutContainer>

3. In the confirmation dialog, click **Confirm to switch**.

Unsubscribing from a plan or switching to another plan takes effect on the first of the next month. For the current month, you still have access to the features and APIs provided by the plan. The subscription fee you paid for this month is not refunded, and any excess usage that occurs in this month is charged.

## See also [#see-also]

* [RTC pricing](/en/realtime-media/rtc/reference/pricing)
* [Billing policies and free-of-charge policy](billing-policies.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `Agora Analytics manages analytics features and API access through pricing plans. To use a feature or an API, you
subscribe to the plan that provides access to that feature or API.`
  }, {
    heading: "pricing-plan-features",
    content: `Agora Analytics offers the Starter, Standard, Premium, and Enterprise pricing plans. The features available in each
pricing plan are listed in the following sections.`
  }, {
    heading: "call-inspector",
    content: "Call Inspector is available on all plans. Data retention, RESTful API access, and embedding vary by plan:"
  }, {
    heading: "call-inspector",
    content: "Feature"
  }, {
    heading: "call-inspector",
    content: "Starter"
  }, {
    heading: "call-inspector",
    content: "Standard"
  }, {
    heading: "call-inspector",
    content: "Premium"
  }, {
    heading: "call-inspector",
    content: "Enterprise"
  }, {
    heading: "call-inspector",
    content: "Access through Agora Console"
  }, {
    heading: "call-inspector",
    content: "✔"
  }, {
    heading: "call-inspector",
    content: "✔"
  }, {
    heading: "call-inspector",
    content: "✔"
  }, {
    heading: "call-inspector",
    content: "✔"
  }, {
    heading: "call-inspector",
    content: "Data retention"
  }, {
    heading: "call-inspector",
    content: "3 days"
  }, {
    heading: "call-inspector",
    content: "7 days"
  }, {
    heading: "call-inspector",
    content: "14 days"
  }, {
    heading: "call-inspector",
    content: "30 days"
  }, {
    heading: "call-inspector",
    content: "Call Inspector RESTful API"
  }, {
    heading: "call-inspector",
    content: "✘"
  }, {
    heading: "call-inspector",
    content: "Standard-level"
  }, {
    heading: "call-inspector",
    content: "Premium-level"
  }, {
    heading: "call-inspector",
    content: "Enterprise-level"
  }, {
    heading: "call-inspector",
    content: "Support for embedding in web portals"
  }, {
    heading: "call-inspector",
    content: "✘"
  }, {
    heading: "call-inspector",
    content: "✔"
  }, {
    heading: "call-inspector",
    content: "✔"
  }, {
    heading: "call-inspector",
    content: "✔"
  }, {
    heading: "call-inspector",
    content: "For details about the Standard, Premium, and Enterprise-level Call Inspector RESTful APIs, see RESTful API."
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights and Data Insights Plus start with the Standard plan. Higher plans offer longer data retention, finer granularity, lower latency, and more analysis options:"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Module"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Feature"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Starter"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Standard"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Premium"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Enterprise"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Access through Agora Console"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data retention"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "30 days"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "60 days"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "90 days"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data granularity"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Usage Overview**: Day"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Usage Overview**: Day/Hour"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Usage Overview**: Day/Hour"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data granularity"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Quality Overview**: Day/Hour"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Quality Overview**: Day/Hour/Minute"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Quality Overview**: Day/Hour/Minute"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data latency"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "N/A"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Usage Overview**: 24 hours"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Usage Overview**: 12 hours"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Usage Overview**: 6 hours"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data latency"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "N/A"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Quality Overview**: 12 hours"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Quality Overview**: 6 hours"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "**Quality Overview**: 6 hours"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Support for embedding in web portals"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights RESTful API"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights Plus"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Multi-dimensional cross analysis"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights Plus"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data sampling analysis"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Data Insights Plus"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "Comparative analysis"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✘"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "✔"
  }, {
    heading: "data-insights-and-data-insights-plus",
    content: "For details about the Data Insights RESTful API, see RESTful API."
  }, {
    heading: "real-time-monitoring",
    content: "Real-time Monitoring starts with the Standard plan. RESTful API access requires the Premium or Enterprise plan:"
  }, {
    heading: "real-time-monitoring",
    content: "Feature"
  }, {
    heading: "real-time-monitoring",
    content: "Starter"
  }, {
    heading: "real-time-monitoring",
    content: "Standard"
  }, {
    heading: "real-time-monitoring",
    content: "Premium"
  }, {
    heading: "real-time-monitoring",
    content: "Enterprise"
  }, {
    heading: "real-time-monitoring",
    content: "Access through Agora Console"
  }, {
    heading: "real-time-monitoring",
    content: "✘"
  }, {
    heading: "real-time-monitoring",
    content: "✔"
  }, {
    heading: "real-time-monitoring",
    content: "✔"
  }, {
    heading: "real-time-monitoring",
    content: "✔"
  }, {
    heading: "real-time-monitoring",
    content: "Real-time Monitoring RESTful API"
  }, {
    heading: "real-time-monitoring",
    content: "✘"
  }, {
    heading: "real-time-monitoring",
    content: "✘"
  }, {
    heading: "real-time-monitoring",
    content: "Premium-level"
  }, {
    heading: "real-time-monitoring",
    content: "Enterprise-level"
  }, {
    heading: "real-time-monitoring",
    content: "Data sampling"
  }, {
    heading: "real-time-monitoring",
    content: "✘"
  }, {
    heading: "real-time-monitoring",
    content: "✔"
  }, {
    heading: "real-time-monitoring",
    content: "✔"
  }, {
    heading: "real-time-monitoring",
    content: "✔"
  }, {
    heading: "real-time-monitoring",
    content: "Support for embedding in web portals"
  }, {
    heading: "real-time-monitoring",
    content: "✘"
  }, {
    heading: "real-time-monitoring",
    content: "✔"
  }, {
    heading: "real-time-monitoring",
    content: "✔"
  }, {
    heading: "real-time-monitoring",
    content: "✔"
  }, {
    heading: "real-time-monitoring",
    content: "For details about the Premium and Enterprise-level Real-time Monitoring RESTful APIs, see RESTful API."
  }, {
    heading: "alert-notifications",
    content: "Alert Notifications start with the Premium plan. Embedding in web portals requires the Enterprise plan:"
  }, {
    heading: "alert-notifications",
    content: "Feature"
  }, {
    heading: "alert-notifications",
    content: "Starter"
  }, {
    heading: "alert-notifications",
    content: "Standard"
  }, {
    heading: "alert-notifications",
    content: "Premium"
  }, {
    heading: "alert-notifications",
    content: "Enterprise"
  }, {
    heading: "alert-notifications",
    content: "Access through Agora Console"
  }, {
    heading: "alert-notifications",
    content: "✘"
  }, {
    heading: "alert-notifications",
    content: "✘"
  }, {
    heading: "alert-notifications",
    content: "✔"
  }, {
    heading: "alert-notifications",
    content: "✔"
  }, {
    heading: "alert-notifications",
    content: "Support for embedding in web portals"
  }, {
    heading: "alert-notifications",
    content: "✘"
  }, {
    heading: "alert-notifications",
    content: "✘"
  }, {
    heading: "alert-notifications",
    content: "✘"
  }, {
    heading: "alert-notifications",
    content: "✔"
  }, {
    heading: "third-party-integrations",
    content: "Agora Analytics can push real-time data to the following third-party observability platforms:"
  }, {
    heading: "third-party-integrations",
    content: "Platform"
  }, {
    heading: "third-party-integrations",
    content: "Starter"
  }, {
    heading: "third-party-integrations",
    content: "Standard"
  }, {
    heading: "third-party-integrations",
    content: "Premium"
  }, {
    heading: "third-party-integrations",
    content: "Enterprise"
  }, {
    heading: "third-party-integrations",
    content: "Datadog"
  }, {
    heading: "third-party-integrations",
    content: "✘"
  }, {
    heading: "third-party-integrations",
    content: "✘"
  }, {
    heading: "third-party-integrations",
    content: "✔"
  }, {
    heading: "third-party-integrations",
    content: "✔"
  }, {
    heading: "third-party-integrations",
    content: "New Relic"
  }, {
    heading: "third-party-integrations",
    content: "✘"
  }, {
    heading: "third-party-integrations",
    content: "✘"
  }, {
    heading: "third-party-integrations",
    content: "✔"
  }, {
    heading: "third-party-integrations",
    content: "✔"
  }, {
    heading: "prices",
    content: "Each plan is billed as a monthly subscription:"
  }, {
    heading: "prices",
    content: "Starter"
  }, {
    heading: "prices",
    content: "Standard"
  }, {
    heading: "prices",
    content: "Premium"
  }, {
    heading: "prices",
    content: "Enterprise"
  }, {
    heading: "prices",
    content: "Subscription fee per month (US$)"
  }, {
    heading: "prices",
    content: "0"
  }, {
    heading: "prices",
    content: "449"
  }, {
    heading: "prices",
    content: "999"
  }, {
    heading: "prices",
    content: "1,599"
  }, {
    heading: "prices",
    content: "You can also subscribe to Agora Analytics packages through Agora support plans. For details, visit Agora Support Plans."
  }, {
    heading: "plan-management",
    content: "This section shows you how to subscribe to, unsubscribe from, or switch Agora Analytics pricing plans."
  }, {
    heading: "subscribe-to-a-plan",
    content: "To subscribe to an Agora Analytics pricing plan, do the following:"
  }, {
    heading: "subscribe-to-a-plan",
    content: "In Agora Console, select **Agora Analytics** in the sidebar to open Agora Analytics in a new tab, then select **Pricing Plan**."
  }, {
    heading: "subscribe-to-a-plan",
    content: "Choose the plan you want to use, and click **Subscribe**."
  }, {
    heading: "subscribe-to-a-plan",
    content: "For the Enterprise pricing plan, contact support\\@agora.io."
  }, {
    heading: "subscribe-to-a-plan",
    content: "Follow the on-screen instructions to complete your payment."
  }, {
    heading: "subscribe-to-a-plan",
    content: "Subscription takes effect immediately. After subscribing to a plan, you can click **My Package Subscription** in the upper-right corner to view your subscription details."
  }, {
    heading: "subscribe-to-a-plan",
    content: "By default, subscription to Agora Analytics pricing plans is automatically renewed. You can cancel it at any time. See Unsubscribe from a plan for details."
  }, {
    heading: "subscribe-to-a-plan",
    content: "Agora Analytics charges are billed to your account on the first of every month until you cancel your subscription. Your subscription fee for the subsequent month is listed in your monthly bill. For details, see Billing policies and free-of-charge policy."
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "To unsubscribe from an Agora Analytics pricing plan, do the following:"
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "In Agora Console, select **Agora Analytics** in the sidebar to open Agora Analytics in a new tab, then select **Pricing Plan**."
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "In the upper-right corner, click **My Package Subscription**."
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "Find the plan you want to unsubscribe from, and click **Cancel** in the **Action** column."
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "To switch to another plan, do the following:"
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "In Agora Console, select **Agora Analytics** in the sidebar to open Agora Analytics in a new tab, then select **Pricing Plan**."
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "Choose the plan you want to switch to, and click **Subscribe**."
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "For the Enterprise pricing plan, contact support\\@agora.io."
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "In the confirmation dialog, click **Confirm to switch**."
  }, {
    heading: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "Unsubscribing from a plan or switching to another plan takes effect on the first of the next month. For the current month, you still have access to the features and APIs provided by the plan. The subscription fee you paid for this month is not refunded, and any excess usage that occurs in this month is charged."
  }, {
    heading: "see-also",
    content: "RTC pricing"
  }, {
    heading: "see-also",
    content: "Billing policies and free-of-charge policy"
  }],
  headings: [{
    id: "pricing-plan-features",
    content: "Pricing plan features"
  }, {
    id: "call-inspector",
    content: "Call Inspector"
  }, {
    id: "data-insights-and-data-insights-plus",
    content: "Data Insights and Data Insights Plus"
  }, {
    id: "real-time-monitoring",
    content: "Real-time Monitoring"
  }, {
    id: "alert-notifications",
    content: "Alert Notifications"
  }, {
    id: "third-party-integrations",
    content: "Third-party integrations"
  }, {
    id: "prices",
    content: "Prices"
  }, {
    id: "plan-management",
    content: "Plan management"
  }, {
    id: "subscribe-to-a-plan",
    content: "Subscribe to a plan"
  }, {
    id: "unsubscribe-from-a-plan-or-switch-to-another-plan",
    content: "Unsubscribe from a plan or switch to another plan"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
  depth: 2,
  url: "#pricing-plan-features",
  title: _jsx(_Fragment, {
    children: "Pricing plan features"
  })
}, {
  depth: 3,
  url: "#call-inspector",
  title: _jsx(_Fragment, {
    children: "Call Inspector"
  })
}, {
  depth: 3,
  url: "#data-insights-and-data-insights-plus",
  title: _jsx(_Fragment, {
    children: "Data Insights and Data Insights Plus"
  })
}, {
  depth: 3,
  url: "#real-time-monitoring",
  title: _jsx(_Fragment, {
    children: "Real-time Monitoring"
  })
}, {
  depth: 3,
  url: "#alert-notifications",
  title: _jsx(_Fragment, {
    children: "Alert Notifications"
  })
}, {
  depth: 3,
  url: "#third-party-integrations",
  title: _jsx(_Fragment, {
    children: "Third-party integrations"
  })
}, {
  depth: 2,
  url: "#prices",
  title: _jsx(_Fragment, {
    children: "Prices"
  })
}, {
  depth: 2,
  url: "#plan-management",
  title: _jsx(_Fragment, {
    children: "Plan management"
  })
}, {
  depth: 3,
  url: "#subscribe-to-a-plan",
  title: _jsx(_Fragment, {
    children: "Subscribe to a plan"
  })
}, {
  depth: 3,
  url: "#unsubscribe-from-a-plan-or-switch-to-another-plan",
  title: _jsx(_Fragment, {
    children: "Unsubscribe from a plan or switch to another plan"
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
    h2: "h2",
    h3: "h3",
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
    children: [_jsx(_components.p, {
      children: `Agora Analytics manages analytics features and API access through pricing plans. To use a feature or an API, you
subscribe to the plan that provides access to that feature or API.`
    }), `
`, _jsx(_components.h2, {
      id: "pricing-plan-features",
      children: "Pricing plan features"
    }), `
`, _jsx(_components.p, {
      children: `Agora Analytics offers the Starter, Standard, Premium, and Enterprise pricing plans. The features available in each
pricing plan are listed in the following sections.`
    }), `
`, _jsx(_components.h3, {
      id: "call-inspector",
      children: "Call Inspector"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
        children: "Call Inspector"
      }), " is available on all plans. Data retention, RESTful API access, and embedding vary by plan:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Feature"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Access through Agora Console"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data retention"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "14 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "30 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Call Inspector RESTful API"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Standard-level"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Premium-level"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise-level"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Support for embedding in web portals"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For details about the Standard, Premium, and Enterprise-level Call Inspector RESTful APIs, see ", _jsx(_components.a, {
        href: "api.md",
        children: "RESTful API"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "data-insights-and-data-insights-plus",
      children: "Data Insights and Data Insights Plus"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/data-insight",
        children: "Data Insights"
      }), " and ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/data-insight-plus",
        children: "Data Insights Plus"
      }), " start with the Standard plan. Higher plans offer longer data retention, finer granularity, lower latency, and more analysis options:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Module"
          }), _jsx(_components.th, {
            children: "Feature"
          }), _jsx(_components.th, {
            children: "Starter"
          }), _jsx(_components.th, {
            children: "Standard"
          }), _jsx(_components.th, {
            children: "Premium"
          }), _jsx(_components.th, {
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights"
          }), _jsx(_components.td, {
            children: "Access through Agora Console"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights"
          }), _jsx(_components.td, {
            children: "Data retention"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "30 days"
          }), _jsx(_components.td, {
            children: "60 days"
          }), _jsx(_components.td, {
            children: "90 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights"
          }), _jsx(_components.td, {
            children: "Data granularity"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Usage Overview"
            }), ": Day"]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Usage Overview"
            }), ": Day/Hour"]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Usage Overview"
            }), ": Day/Hour"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights"
          }), _jsx(_components.td, {
            children: "Data granularity"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Quality Overview"
            }), ": Day/Hour"]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Quality Overview"
            }), ": Day/Hour/Minute"]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Quality Overview"
            }), ": Day/Hour/Minute"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights"
          }), _jsx(_components.td, {
            children: "Data latency"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Usage Overview"
            }), ": 24 hours"]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Usage Overview"
            }), ": 12 hours"]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Usage Overview"
            }), ": 6 hours"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights"
          }), _jsx(_components.td, {
            children: "Data latency"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Quality Overview"
            }), ": 12 hours"]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Quality Overview"
            }), ": 6 hours"]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Quality Overview"
            }), ": 6 hours"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights"
          }), _jsx(_components.td, {
            children: "Support for embedding in web portals"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights"
          }), _jsx(_components.td, {
            children: "Data Insights RESTful API"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights Plus"
          }), _jsx(_components.td, {
            children: "Multi-dimensional cross analysis"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights Plus"
          }), _jsx(_components.td, {
            children: "Data sampling analysis"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data Insights Plus"
          }), _jsx(_components.td, {
            children: "Comparative analysis"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For details about the Data Insights RESTful API, see ", _jsx(_components.a, {
        href: "api.md",
        children: "RESTful API"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "real-time-monitoring",
      children: "Real-time Monitoring"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/monitor-and-get-alerts/monitor",
        children: "Real-time Monitoring"
      }), " starts with the Standard plan. RESTful API access requires the Premium or Enterprise plan:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Feature"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Access through Agora Console"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Real-time Monitoring RESTful API"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Premium-level"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise-level"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Data sampling"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Support for embedding in web portals"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For details about the Premium and Enterprise-level Real-time Monitoring RESTful APIs, see ", _jsx(_components.a, {
        href: "api.md",
        children: "RESTful API"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "alert-notifications",
      children: "Alert Notifications"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/monitor-and-get-alerts/alarm",
        children: "Alert Notifications"
      }), " start with the Premium plan. Embedding in web portals requires the Enterprise plan:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Feature"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Access through Agora Console"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Support for embedding in web portals"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "third-party-integrations",
      children: "Third-party integrations"
    }), `
`, _jsx(_components.p, {
      children: "Agora Analytics can push real-time data to the following third-party observability platforms:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Platform"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/build/integrate-and-embed/datadog-integration",
              children: "Datadog"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/build/integrate-and-embed/new-relic-integration",
              children: "New Relic"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prices",
      children: "Prices"
    }), `
`, _jsx(_components.p, {
      children: "Each plan is billed as a monthly subscription:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {}), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enterprise"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Subscription fee per month (US$)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "449"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "999"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1,599"
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["You can also subscribe to Agora Analytics packages through Agora support plans. For details, visit ", _jsx(_components.a, {
        href: "https://www.agora.io/en/pricing/support-plans/",
        children: "Agora Support Plans"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "plan-management",
      children: "Plan management"
    }), `
`, _jsx(_components.p, {
      children: "This section shows you how to subscribe to, unsubscribe from, or switch Agora Analytics pricing plans."
    }), `
`, _jsx(_components.h3, {
      id: "subscribe-to-a-plan",
      children: "Subscribe to a plan"
    }), `
`, _jsx(_components.p, {
      children: "To subscribe to an Agora Analytics pricing plan, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), ", select ", _jsx(_components.strong, {
            children: "Agora Analytics"
          }), " in the sidebar to open Agora Analytics in a new tab, then select ", _jsx(_components.strong, {
            children: "Pricing Plan"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Choose the plan you want to use, and click ", _jsx(_components.strong, {
            children: "Subscribe"
          }), "."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["For the Enterprise pricing plan, contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "support@agora.io"
              }), "."]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Follow the on-screen instructions to complete your payment."
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Subscription takes effect immediately. After subscribing to a plan, you can click ", _jsx(_components.strong, {
        children: "My Package Subscription"
      }), " in the upper-right corner to view your subscription details."]
    }), `
`, _jsxs(_components.p, {
      children: ["By default, subscription to Agora Analytics pricing plans is automatically renewed. You can cancel it at any time. See ", _jsx(_components.a, {
        href: "#unsubscribe-from-a-plan-or-switch-to-another-plan",
        children: "Unsubscribe from a plan"
      }), " for details."]
    }), `
`, _jsxs(_components.p, {
      children: ["Agora Analytics charges are billed to your account on the first of every month until you cancel your subscription. Your subscription fee for the subsequent month is listed in your monthly bill. For details, see ", _jsx(_components.a, {
        href: "billing-policies.md",
        children: "Billing policies and free-of-charge policy"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "unsubscribe-from-a-plan-or-switch-to-another-plan",
      children: "Unsubscribe from a plan or switch to another plan"
    }), `
`, _jsx(_components.p, {
      children: "To unsubscribe from an Agora Analytics pricing plan, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), ", select ", _jsx(_components.strong, {
            children: "Agora Analytics"
          }), " in the sidebar to open Agora Analytics in a new tab, then select ", _jsx(_components.strong, {
            children: "Pricing Plan"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the upper-right corner, click ", _jsx(_components.strong, {
            children: "My Package Subscription"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find the plan you want to unsubscribe from, and click ", _jsx(_components.strong, {
            children: "Cancel"
          }), " in the ", _jsx(_components.strong, {
            children: "Action"
          }), " column."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To switch to another plan, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), ", select ", _jsx(_components.strong, {
            children: "Agora Analytics"
          }), " in the sidebar to open Agora Analytics in a new tab, then select ", _jsx(_components.strong, {
            children: "Pricing Plan"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Choose the plan you want to switch to, and click ", _jsx(_components.strong, {
            children: "Subscribe"
          }), "."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["For the Enterprise pricing plan, contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "support@agora.io"
              }), "."]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the confirmation dialog, click ", _jsx(_components.strong, {
            children: "Confirm to switch"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Unsubscribing from a plan or switching to another plan takes effect on the first of the next month. For the current month, you still have access to the features and APIs provided by the plan. The subscription fee you paid for this month is not refunded, and any excess usage that occurs in this month is charged."
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/reference/pricing",
          children: "RTC pricing"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "billing-policies.md",
          children: "Billing policies and free-of-charge policy"
        })
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
