import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Alert notifications",
  description: "Alert Notifications sends alerts to you when abnormal metrics or events are detected in your Agora RTC SDK projects."
};
export let _markdown = `

You can receive the alerts through e-mails or API callbacks and take action accordingly.

Alert Notifications provides the following features:

* Predefined metrics that allow for easy alert creation.

* Support for sending alerts to multiple contacts through multiple channels.

* Automatic storage of the alert records for the last 7 days.

* Data synchronization with [Call Inspector](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search) and [Data Insights](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/data-insight), so that you can easily dive into problem analysis.

## Getting started [#getting-started]

To access the Alert Notifications page, do the following:

1. Subscribe to a [pricing plan](../../reference/pricing.md) to enable the **Alert Notifications** service.

2. Log in to [Agora Console](https://console.agora.io/), and click **Agora Analytics** > **Alert Notifications** on the left navigation bar.

## Alert rules [#alert-rules]

An alert rule consists of three parts: associated product, rule settings, and notification type.

This section introduces how to create, enable, edit, and delete an alert rule. It also provides parameter descriptions for alert callbacks.

### Create an alert rule [#create-an-alert-rule]

To create an alert rule, do the following:

1. On the top of the page, click **Alert rules**.

2. In the upper-left corner, select a project from the dropdown menu.

3. In the upper-right corner, click the **Create a rule** button, and fill in the following information in the pop-up window:

| Item                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Limitations                                                                                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Associated project    | The project to which the rule applies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Each individual rule can only be associated with one project.                                                                                                                                                                                                                                  |
| Rule name             | A name for the rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Rules associated with the same project must have unique names.                                                                                                                                                                                                                                 |
| Alert type            | Choose one of the following:<br/>- Metric alert: Sends an alert when a metric value is higher or lower than the threshold value.<br/>- Event alert: Sends an alert when a predefined event occurs.                                                                                                                                                                                                                                                                                                                             | /                                                                                                                                                                                                                                                                                              |
| Alert granularity     | Choose one of the following:<br/>- Channel: Sends an alert when a channel encounters abnormalities.<br/>- User: Sends an alert when a user encounters abnormalities.                                                                                                                                                                                                                                                                                                                                                           | **User** is the only option for event alerts.                                                                                                                                                                                                                                                  |
| Rule description      | The conditions that must be met to trigger an alert. For instance, the combination of **Audio Freeze Rate**, **20s Cycle**, **Lasts for 2 cycles*&#x2A;, &#x2A;*>=**, and &#x2A;*10%** indicates: The audio freeze rate is calculated every 20 seconds; if the calculated value equals or exceeds 10% for two continuous 20-second cycles, the alert is triggered.<br/>To monitor multiple metrics or events, add additional rule descriptions. You can set the operator between different rule descriptions as "AND" or "OR". | The maximum number of rule descriptions per rule is 20.                                                                                                                                                                                                                                        |
| Silent period         | The time period after an alert during which the alert is not triggered even if the same alert rule is met again. In this case, "the same alert rule" means that both the alert granularity and the applicable rule description are identical.                                                                                                                                                                                                                                                                                  | /                                                                                                                                                                                                                                                                                              |
| Effective period      | The time period during which the alert can be triggered.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | /                                                                                                                                                                                                                                                                                              |
| Scope                 | Choose one of the following:<br/>- **All users** or **All channels**.<br/>- Name list: A custom list of user names or channel names. Separate list entries with hard line breaks.<br/>- Regular expression: A string search pattern. For example, "aa.\\*" would apply to every channel whose name starts with "aa".                                                                                                                                                                                                            | /                                                                                                                                                                                                                                                                                              |
| Set advanced filters  | Predefined filters that help increase the precision of alerts. Click the button to edit or disable the default settings.                                                                                                                                                                                                                                                                                                                                                                                                       | /                                                                                                                                                                                                                                                                                              |
| Alert level           | Choose one of the following:<br/>- Critical<br/>- Warning<br/>- Info                                                                                                                                                                                                                                                                                                                                                                                                                                                           | /                                                                                                                                                                                                                                                                                              |
| Notification type     | Choose one or both:<br/>- Email: Sends alerts to the email addresses of the specified contacts.<br/>- WeCom bot: Sends alerts to a WeCom group.                                                                                                                                                                                                                                                                                                                                                                                | A maximum of 500 alert emails can be sent per account per day. The number of emails is calculated based on the total recipients. For example, if two contacts are set to receive alert emails and the rule is triggered 20 times during the day, Agora counts the number of sent emails as 40. |
| Email note            | The message contained in emails of alert notifications.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Notification type must be **Email** for this item to appear.                                                                                                                                                                                                                                   |
| WeCom bot webhooks    | The webhook URL for the WeCom bot.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notification type must be **WeCom bot** for this item to appear.                                                                                                                                                                                                                               |
| Alert contacts        | Email addresses set to receive alerts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | The maximum number of alert contacts per rule is five.                                                                                                                                                                                                                                         |
| Notification language | The language of the alert notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | /                                                                                                                                                                                                                                                                                              |
| Timezone              | The timezone displayed in the alert notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | /                                                                                                                                                                                                                                                                                              |
| Alert callbacks       | A publicly accessible URL that receives HTTP requests. You can take further action according to the alert information in these requests. See [Alert callback parameters](#alert-callback-parameters).                                                                                                                                                                                                                                                                                                                          | See [Alert callback parameters](#alert-callback-parameters).                                                                                                                                                                                                                                   |

### Enable an alert rule [#enable-an-alert-rule]

A newly created alert rule is disabled by default. To enable a rule, do the following:

1. On the top of the page, click **Alert rules**.

2. Find the rule you want to enable, click **Enabled** in the **Operation** column, and click **OK** in the pop-up window.

To enable a group of rules all at once, check the box next to the name of each rule, and click **Enabled**.

### Edit an alert rule [#edit-an-alert-rule]

To edit a rule, do the following:

1. On the top of the page, click **Alert rules**.

2. Find the rule you want to edit, and click **Edit** in the **Operation** column.

If you did not create this rule, a pop-up window appears. Read the text, and click **OK**.

1. Make your changes, and click **OK**.

### Delete an alert rule [#delete-an-alert-rule]

To delete a rule, do the following:

1. On the top of the page, click **Alert rules**.

2. Find the rule you want to delete, and click **Delete** in the **Operation** column.

3. Read the text in the pop-up window, and click **OK**.

To delete a group of rules all at once, check the box next to the name of each rule, and then click **Delete**.

### Alert callback parameters [#alert-callback-parameters]

If you create an alert callback for an alert rule, Agora sends requests to the URL you provide when the rule is triggered. Currently, the alert callback function has the following limitations:

* No authentication mechanism is supported, including HTTP authentication.

* If a request fails, Agora resends the request up to a maximum of two times. The timeout period for each request is two seconds.

* Agora sends a request whenever the alert rule is triggered.

* The outbound IP address of the alert callback API may change. You can do one of the following:

* (Recommended) Open port 80 for your security group.

* If opening port 80 is not an available option to you, contact Agora to get the outbound IP address. Note that when Agora changes the IP address, you need to make changes accordingly.

Alert information is sent to you through HTTP POST methods in JSON format. The following sections provide parameter descriptions and request examples for your reference.

**Metric alert**

If the alert granularity is set as **Channel**：

\`\`\`json
{
"alertTime":"1631703720000", // The timestamp (seconds) when the alert is sent
"timeZone":"UTC+8", // The timezone you set for the rule
"projectName":"XlaTest", // Your Agora project name
"cname":"d13bd8305da84578a45452a7e2e37f02", // The channel name
"enContent":"video freeze rate≥85%", // Alert information（"cnContent" means Chinese, and "enContent" means English）
"currentUserNum":"2", // The number of users in the channel
"currentHostNum":"1", // The number of hosts in the channel
"callId":"6141d1efc3421ca63b6470e5", // The call ID
"url":"https://console.agora.io/analytics/call/qoe?id=6141d1efc3421ca63b6470e5", // The corresponding Call Inspector page
"remark":"Video freeze" // The email note you set for the rule
}
\`\`\`

If the alert granularity is set as **User**：

\`\`\`json
{
"alertTime":"1631780400000", // The timestamp (seconds) when the alert is sent
"timeZone":"UTC+8", // The timezone you set for the rule
"projectName":"XlaTest", // Your Agora project name
"cname":"97c1bb03586945c2a5c9e4ec66ee79e1", // The channel name
"uid":"957288696", // The user ID
"enContent":"video freeze rate≥10%", // Alert information（"cnContent" means Chinese, and "enContent" means English）
"currentUserNum":"2", // The number of users in the channel
"currentHostNum":"2", // The number of hosts in the channel
"callId":"6142fe37bd1791b232cbb90e", // The call ID
"url":"https://console.agora.io/analytics/call/qoe?id=6142fe37bd1791b232cbb90e", // The corresponding Call Inspector page
"remark":"Video freeze" // The email note you set for the rule
}
\`\`\`

**Event alert**

\`\`\`json
{
  "alertTime":"1631785450000",  // The timestamp (seconds) when the alert is sent
  "timeZone":"UTC+8", // The timezone you set for the rule
  "projectName":"Premium-broadcasting", // Your Agora project name
  "cname":"tm_913_cname", // The channel name
  "uid":"67891", // The user ID
  "enContent":"no frame sending,no voice sending,no voice receiving,wifi congestion,system CPU utility too high",  // Alert information（"cnContent" means Chinese, and "enContent" means English）
  "currentUserNum":"100", // The number of users in the channel
  "currentHostNum":"1", // The number of hosts in the channel
  "callId":"6136b9fcb145efc91f4248f5", // The call ID
 "url":"https://console.agora.io/analytics/call/qoe?id=6136b9fcb145efc91f4248f5", // The corresponding Call Inspector page
  "remark":"Abnormal events" // The email note you set for the rule
}
\`\`\`

## Alert contacts [#alert-contacts]

**Alert contacts** lists the contacts you have created for all alert rules. For an individual alert rule, only the contacts you add for the rule receive notifications when the rule is triggered.

This section introduces how to create, edit, and delete a contact.

### Create a contact [#create-a-contact]

To create a contact, do the following:

1. On the top of the page, click **Alert contacts**.

2. In the upper-right corner, click **Create a contact**.

3. Enter the contact’s name and email address, and click **Get the verification code**.

4. Enter your verification code, and click **OK**.

Note the following limitations when creating a contact:

* Each email address can only be used to create one contact.

* An email address can request a verification code a maximum of five times per day.

### Edit a contact [#edit-a-contact]

To edit a contact, do the following:

1. On the top of the page, click **Alert contacts**.

2. Find the contact, and click **Edit** below in the **Operation** column.

3. Make your changes in the pop-up window, and click **OK**.

### Delete a contact [#delete-a-contact]

To delete a contact, do the following:

1. On the top of the page, click **Alert contacts**.

2. Find the contact, and click **Delete** in the **Operation** column.

3. Read the text in the pop-up window, and click **OK**.

To delete a group of contacts all at once, check the box next to the name of each contact, and then click **Delete**.

## Alert records [#alert-records]

Records of your alert notifications are saved for seven days.

This section introduces how to view and manage alert records.

### View alert records [#view-alert-records]

To view your alert records, do the following:

1. On the top of the page, click **Alert records**.

2. (Optional) Apply the following filters:

   * Project filter: Select a project from the dropdown menu in the upper-left corner.

   * Time filter: Select a start date and end data on the top.

   * Filter for alert granularity, alert level, or status: Click the corresponding funnel icon in the header row.

### Manage alert records [#manage-alert-records]

To manage an alert record, do the following:

1. On the top of the page, click **Alert records**.

2. Find the record, and click the dropdown menu in the **Status** column:

   * If you have resolved the issue, select **Resolved**.

   * If the issue does not require action, select **Ignored**.

3. (Optional) To further analyze an alert record, click **Call details** to use the [Call Inspector](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search) service.

4. (Optional) To adjust the rule corresponding to an alert record, click **Edit Alert Rule**, and make changes in the pop-up window.

To manage a group of alert records all at once, check the box in the first column for each record and click **Mark as resolved**, **Mark as ignored**, or **Delete**.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "You can receive the alerts through e-mails or API callbacks and take action accordingly."
  }, {
    heading: undefined,
    content: "Alert Notifications provides the following features:"
  }, {
    heading: undefined,
    content: "Predefined metrics that allow for easy alert creation."
  }, {
    heading: undefined,
    content: "Support for sending alerts to multiple contacts through multiple channels."
  }, {
    heading: undefined,
    content: "Automatic storage of the alert records for the last 7 days."
  }, {
    heading: undefined,
    content: "Data synchronization with Call Inspector and Data Insights, so that you can easily dive into problem analysis."
  }, {
    heading: "getting-started",
    content: "To access the Alert Notifications page, do the following:"
  }, {
    heading: "getting-started",
    content: "Subscribe to a pricing plan to enable the **Alert Notifications** service."
  }, {
    heading: "getting-started",
    content: "Log in to Agora Console, and click **Agora Analytics** > **Alert Notifications** on the left navigation bar."
  }, {
    heading: "alert-rules",
    content: "An alert rule consists of three parts: associated product, rule settings, and notification type."
  }, {
    heading: "alert-rules",
    content: "This section introduces how to create, enable, edit, and delete an alert rule. It also provides parameter descriptions for alert callbacks."
  }, {
    heading: "create-an-alert-rule",
    content: "To create an alert rule, do the following:"
  }, {
    heading: "create-an-alert-rule",
    content: "On the top of the page, click **Alert rules**."
  }, {
    heading: "create-an-alert-rule",
    content: "In the upper-left corner, select a project from the dropdown menu."
  }, {
    heading: "create-an-alert-rule",
    content: "In the upper-right corner, click the **Create a rule** button, and fill in the following information in the pop-up window:"
  }, {
    heading: "create-an-alert-rule",
    content: "Item"
  }, {
    heading: "create-an-alert-rule",
    content: "Description"
  }, {
    heading: "create-an-alert-rule",
    content: "Limitations"
  }, {
    heading: "create-an-alert-rule",
    content: "Associated project"
  }, {
    heading: "create-an-alert-rule",
    content: "The project to which the rule applies."
  }, {
    heading: "create-an-alert-rule",
    content: "Each individual rule can only be associated with one project."
  }, {
    heading: "create-an-alert-rule",
    content: "Rule name"
  }, {
    heading: "create-an-alert-rule",
    content: "A name for the rule."
  }, {
    heading: "create-an-alert-rule",
    content: "Rules associated with the same project must have unique names."
  }, {
    heading: "create-an-alert-rule",
    content: "Alert type"
  }, {
    heading: "create-an-alert-rule",
    content: "Choose one of the following:<br/>- Metric alert: Sends an alert when a metric value is higher or lower than the threshold value.<br/>- Event alert: Sends an alert when a predefined event occurs."
  }, {
    heading: "create-an-alert-rule",
    content: "/"
  }, {
    heading: "create-an-alert-rule",
    content: "Alert granularity"
  }, {
    heading: "create-an-alert-rule",
    content: "Choose one of the following:<br/>- Channel: Sends an alert when a channel encounters abnormalities.<br/>- User: Sends an alert when a user encounters abnormalities."
  }, {
    heading: "create-an-alert-rule",
    content: "**User** is the only option for event alerts."
  }, {
    heading: "create-an-alert-rule",
    content: "Rule description"
  }, {
    heading: "create-an-alert-rule",
    content: 'The conditions that must be met to trigger an alert. For instance, the combination of **Audio Freeze Rate**, **20s Cycle**, **Lasts for 2 cycles*&#x2A;, &#x2A;*>=**, and &#x2A;*10%** indicates: The audio freeze rate is calculated every 20 seconds; if the calculated value equals or exceeds 10% for two continuous 20-second cycles, the alert is triggered.<br/>To monitor multiple metrics or events, add additional rule descriptions. You can set the operator between different rule descriptions as "AND" or "OR".'
  }, {
    heading: "create-an-alert-rule",
    content: "The maximum number of rule descriptions per rule is 20."
  }, {
    heading: "create-an-alert-rule",
    content: "Silent period"
  }, {
    heading: "create-an-alert-rule",
    content: 'The time period after an alert during which the alert is not triggered even if the same alert rule is met again. In this case, "the same alert rule" means that both the alert granularity and the applicable rule description are identical.'
  }, {
    heading: "create-an-alert-rule",
    content: "/"
  }, {
    heading: "create-an-alert-rule",
    content: "Effective period"
  }, {
    heading: "create-an-alert-rule",
    content: "The time period during which the alert can be triggered."
  }, {
    heading: "create-an-alert-rule",
    content: "/"
  }, {
    heading: "create-an-alert-rule",
    content: "Scope"
  }, {
    heading: "create-an-alert-rule",
    content: 'Choose one of the following:<br/>- **All users** or **All channels**.<br/>- Name list: A custom list of user names or channel names. Separate list entries with hard line breaks.<br/>- Regular expression: A string search pattern. For example, "aa.\\*" would apply to every channel whose name starts with "aa".'
  }, {
    heading: "create-an-alert-rule",
    content: "/"
  }, {
    heading: "create-an-alert-rule",
    content: "Set advanced filters"
  }, {
    heading: "create-an-alert-rule",
    content: "Predefined filters that help increase the precision of alerts. Click the button to edit or disable the default settings."
  }, {
    heading: "create-an-alert-rule",
    content: "/"
  }, {
    heading: "create-an-alert-rule",
    content: "Alert level"
  }, {
    heading: "create-an-alert-rule",
    content: "Choose one of the following:<br/>- Critical<br/>- Warning<br/>- Info"
  }, {
    heading: "create-an-alert-rule",
    content: "/"
  }, {
    heading: "create-an-alert-rule",
    content: "Notification type"
  }, {
    heading: "create-an-alert-rule",
    content: "Choose one or both:<br/>- Email: Sends alerts to the email addresses of the specified contacts.<br/>- WeCom bot: Sends alerts to a WeCom group."
  }, {
    heading: "create-an-alert-rule",
    content: "A maximum of 500 alert emails can be sent per account per day. The number of emails is calculated based on the total recipients. For example, if two contacts are set to receive alert emails and the rule is triggered 20 times during the day, Agora counts the number of sent emails as 40."
  }, {
    heading: "create-an-alert-rule",
    content: "Email note"
  }, {
    heading: "create-an-alert-rule",
    content: "The message contained in emails of alert notifications."
  }, {
    heading: "create-an-alert-rule",
    content: "Notification type must be **Email** for this item to appear."
  }, {
    heading: "create-an-alert-rule",
    content: "WeCom bot webhooks"
  }, {
    heading: "create-an-alert-rule",
    content: "The webhook URL for the WeCom bot."
  }, {
    heading: "create-an-alert-rule",
    content: "Notification type must be **WeCom bot** for this item to appear."
  }, {
    heading: "create-an-alert-rule",
    content: "Alert contacts"
  }, {
    heading: "create-an-alert-rule",
    content: "Email addresses set to receive alerts."
  }, {
    heading: "create-an-alert-rule",
    content: "The maximum number of alert contacts per rule is five."
  }, {
    heading: "create-an-alert-rule",
    content: "Notification language"
  }, {
    heading: "create-an-alert-rule",
    content: "The language of the alert notification."
  }, {
    heading: "create-an-alert-rule",
    content: "/"
  }, {
    heading: "create-an-alert-rule",
    content: "Timezone"
  }, {
    heading: "create-an-alert-rule",
    content: "The timezone displayed in the alert notification."
  }, {
    heading: "create-an-alert-rule",
    content: "/"
  }, {
    heading: "create-an-alert-rule",
    content: "Alert callbacks"
  }, {
    heading: "create-an-alert-rule",
    content: "A publicly accessible URL that receives HTTP requests. You can take further action according to the alert information in these requests. See Alert callback parameters."
  }, {
    heading: "create-an-alert-rule",
    content: "See Alert callback parameters."
  }, {
    heading: "enable-an-alert-rule",
    content: "A newly created alert rule is disabled by default. To enable a rule, do the following:"
  }, {
    heading: "enable-an-alert-rule",
    content: "On the top of the page, click **Alert rules**."
  }, {
    heading: "enable-an-alert-rule",
    content: "Find the rule you want to enable, click **Enabled** in the **Operation** column, and click **OK** in the pop-up window."
  }, {
    heading: "enable-an-alert-rule",
    content: "To enable a group of rules all at once, check the box next to the name of each rule, and click **Enabled**."
  }, {
    heading: "edit-an-alert-rule",
    content: "To edit a rule, do the following:"
  }, {
    heading: "edit-an-alert-rule",
    content: "On the top of the page, click **Alert rules**."
  }, {
    heading: "edit-an-alert-rule",
    content: "Find the rule you want to edit, and click **Edit** in the **Operation** column."
  }, {
    heading: "edit-an-alert-rule",
    content: "If you did not create this rule, a pop-up window appears. Read the text, and click **OK**."
  }, {
    heading: "edit-an-alert-rule",
    content: "Make your changes, and click **OK**."
  }, {
    heading: "delete-an-alert-rule",
    content: "To delete a rule, do the following:"
  }, {
    heading: "delete-an-alert-rule",
    content: "On the top of the page, click **Alert rules**."
  }, {
    heading: "delete-an-alert-rule",
    content: "Find the rule you want to delete, and click **Delete** in the **Operation** column."
  }, {
    heading: "delete-an-alert-rule",
    content: "Read the text in the pop-up window, and click **OK**."
  }, {
    heading: "delete-an-alert-rule",
    content: "To delete a group of rules all at once, check the box next to the name of each rule, and then click **Delete**."
  }, {
    heading: "alert-callback-parameters",
    content: "If you create an alert callback for an alert rule, Agora sends requests to the URL you provide when the rule is triggered. Currently, the alert callback function has the following limitations:"
  }, {
    heading: "alert-callback-parameters",
    content: "No authentication mechanism is supported, including HTTP authentication."
  }, {
    heading: "alert-callback-parameters",
    content: "If a request fails, Agora resends the request up to a maximum of two times. The timeout period for each request is two seconds."
  }, {
    heading: "alert-callback-parameters",
    content: "Agora sends a request whenever the alert rule is triggered."
  }, {
    heading: "alert-callback-parameters",
    content: "The outbound IP address of the alert callback API may change. You can do one of the following:"
  }, {
    heading: "alert-callback-parameters",
    content: "(Recommended) Open port 80 for your security group."
  }, {
    heading: "alert-callback-parameters",
    content: "If opening port 80 is not an available option to you, contact Agora to get the outbound IP address. Note that when Agora changes the IP address, you need to make changes accordingly."
  }, {
    heading: "alert-callback-parameters",
    content: "Alert information is sent to you through HTTP POST methods in JSON format. The following sections provide parameter descriptions and request examples for your reference."
  }, {
    heading: "alert-callback-parameters",
    content: "**Metric alert**"
  }, {
    heading: "alert-callback-parameters",
    content: "If the alert granularity is set as **Channel**："
  }, {
    heading: "alert-callback-parameters",
    content: "If the alert granularity is set as **User**："
  }, {
    heading: "alert-callback-parameters",
    content: "**Event alert**"
  }, {
    heading: "alert-contacts",
    content: "**Alert contacts** lists the contacts you have created for all alert rules. For an individual alert rule, only the contacts you add for the rule receive notifications when the rule is triggered."
  }, {
    heading: "alert-contacts",
    content: "This section introduces how to create, edit, and delete a contact."
  }, {
    heading: "create-a-contact",
    content: "To create a contact, do the following:"
  }, {
    heading: "create-a-contact",
    content: "On the top of the page, click **Alert contacts**."
  }, {
    heading: "create-a-contact",
    content: "In the upper-right corner, click **Create a contact**."
  }, {
    heading: "create-a-contact",
    content: "Enter the contact’s name and email address, and click **Get the verification code**."
  }, {
    heading: "create-a-contact",
    content: "Enter your verification code, and click **OK**."
  }, {
    heading: "create-a-contact",
    content: "Note the following limitations when creating a contact:"
  }, {
    heading: "create-a-contact",
    content: "Each email address can only be used to create one contact."
  }, {
    heading: "create-a-contact",
    content: "An email address can request a verification code a maximum of five times per day."
  }, {
    heading: "edit-a-contact",
    content: "To edit a contact, do the following:"
  }, {
    heading: "edit-a-contact",
    content: "On the top of the page, click **Alert contacts**."
  }, {
    heading: "edit-a-contact",
    content: "Find the contact, and click **Edit** below in the **Operation** column."
  }, {
    heading: "edit-a-contact",
    content: "Make your changes in the pop-up window, and click **OK**."
  }, {
    heading: "delete-a-contact",
    content: "To delete a contact, do the following:"
  }, {
    heading: "delete-a-contact",
    content: "On the top of the page, click **Alert contacts**."
  }, {
    heading: "delete-a-contact",
    content: "Find the contact, and click **Delete** in the **Operation** column."
  }, {
    heading: "delete-a-contact",
    content: "Read the text in the pop-up window, and click **OK**."
  }, {
    heading: "delete-a-contact",
    content: "To delete a group of contacts all at once, check the box next to the name of each contact, and then click **Delete**."
  }, {
    heading: "alert-records",
    content: "Records of your alert notifications are saved for seven days."
  }, {
    heading: "alert-records",
    content: "This section introduces how to view and manage alert records."
  }, {
    heading: "view-alert-records",
    content: "To view your alert records, do the following:"
  }, {
    heading: "view-alert-records",
    content: "On the top of the page, click **Alert records**."
  }, {
    heading: "view-alert-records",
    content: "(Optional) Apply the following filters:"
  }, {
    heading: "view-alert-records",
    content: "Project filter: Select a project from the dropdown menu in the upper-left corner."
  }, {
    heading: "view-alert-records",
    content: "Time filter: Select a start date and end data on the top."
  }, {
    heading: "view-alert-records",
    content: "Filter for alert granularity, alert level, or status: Click the corresponding funnel icon in the header row."
  }, {
    heading: "manage-alert-records",
    content: "To manage an alert record, do the following:"
  }, {
    heading: "manage-alert-records",
    content: "On the top of the page, click **Alert records**."
  }, {
    heading: "manage-alert-records",
    content: "Find the record, and click the dropdown menu in the **Status** column:"
  }, {
    heading: "manage-alert-records",
    content: "If you have resolved the issue, select **Resolved**."
  }, {
    heading: "manage-alert-records",
    content: "If the issue does not require action, select **Ignored**."
  }, {
    heading: "manage-alert-records",
    content: "(Optional) To further analyze an alert record, click **Call details** to use the Call Inspector service."
  }, {
    heading: "manage-alert-records",
    content: "(Optional) To adjust the rule corresponding to an alert record, click **Edit Alert Rule**, and make changes in the pop-up window."
  }, {
    heading: "manage-alert-records",
    content: "To manage a group of alert records all at once, check the box in the first column for each record and click **Mark as resolved**, **Mark as ignored**, or **Delete**."
  }],
  headings: [{
    id: "getting-started",
    content: "Getting started"
  }, {
    id: "alert-rules",
    content: "Alert rules"
  }, {
    id: "create-an-alert-rule",
    content: "Create an alert rule"
  }, {
    id: "enable-an-alert-rule",
    content: "Enable an alert rule"
  }, {
    id: "edit-an-alert-rule",
    content: "Edit an alert rule"
  }, {
    id: "delete-an-alert-rule",
    content: "Delete an alert rule"
  }, {
    id: "alert-callback-parameters",
    content: "Alert callback parameters"
  }, {
    id: "alert-contacts",
    content: "Alert contacts"
  }, {
    id: "create-a-contact",
    content: "Create a contact"
  }, {
    id: "edit-a-contact",
    content: "Edit a contact"
  }, {
    id: "delete-a-contact",
    content: "Delete a contact"
  }, {
    id: "alert-records",
    content: "Alert records"
  }, {
    id: "view-alert-records",
    content: "View alert records"
  }, {
    id: "manage-alert-records",
    content: "Manage alert records"
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
  url: "#alert-rules",
  title: _jsx(_Fragment, {
    children: "Alert rules"
  })
}, {
  depth: 3,
  url: "#create-an-alert-rule",
  title: _jsx(_Fragment, {
    children: "Create an alert rule"
  })
}, {
  depth: 3,
  url: "#enable-an-alert-rule",
  title: _jsx(_Fragment, {
    children: "Enable an alert rule"
  })
}, {
  depth: 3,
  url: "#edit-an-alert-rule",
  title: _jsx(_Fragment, {
    children: "Edit an alert rule"
  })
}, {
  depth: 3,
  url: "#delete-an-alert-rule",
  title: _jsx(_Fragment, {
    children: "Delete an alert rule"
  })
}, {
  depth: 3,
  url: "#alert-callback-parameters",
  title: _jsx(_Fragment, {
    children: "Alert callback parameters"
  })
}, {
  depth: 2,
  url: "#alert-contacts",
  title: _jsx(_Fragment, {
    children: "Alert contacts"
  })
}, {
  depth: 3,
  url: "#create-a-contact",
  title: _jsx(_Fragment, {
    children: "Create a contact"
  })
}, {
  depth: 3,
  url: "#edit-a-contact",
  title: _jsx(_Fragment, {
    children: "Edit a contact"
  })
}, {
  depth: 3,
  url: "#delete-a-contact",
  title: _jsx(_Fragment, {
    children: "Delete a contact"
  })
}, {
  depth: 2,
  url: "#alert-records",
  title: _jsx(_Fragment, {
    children: "Alert records"
  })
}, {
  depth: 3,
  url: "#view-alert-records",
  title: _jsx(_Fragment, {
    children: "View alert records"
  })
}, {
  depth: 3,
  url: "#manage-alert-records",
  title: _jsx(_Fragment, {
    children: "Manage alert records"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
      children: "You can receive the alerts through e-mails or API callbacks and take action accordingly."
    }), `
`, _jsx(_components.p, {
      children: "Alert Notifications provides the following features:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Predefined metrics that allow for easy alert creation."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Support for sending alerts to multiple contacts through multiple channels."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Automatic storage of the alert records for the last 7 days."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Data synchronization with ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
            children: "Call Inspector"
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
      children: "To access the Alert Notifications page, do the following:"
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
            children: "Alert Notifications"
          }), " service."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), ", and click ", _jsx(_components.strong, {
            children: "Agora Analytics"
          }), " > ", _jsx(_components.strong, {
            children: "Alert Notifications"
          }), " on the left navigation bar."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "alert-rules",
      children: "Alert rules"
    }), `
`, _jsx(_components.p, {
      children: "An alert rule consists of three parts: associated product, rule settings, and notification type."
    }), `
`, _jsx(_components.p, {
      children: "This section introduces how to create, enable, edit, and delete an alert rule. It also provides parameter descriptions for alert callbacks."
    }), `
`, _jsx(_components.h3, {
      id: "create-an-alert-rule",
      children: "Create an alert rule"
    }), `
`, _jsx(_components.p, {
      children: "To create an alert rule, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the top of the page, click ", _jsx(_components.strong, {
            children: "Alert rules"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In the upper-left corner, select a project from the dropdown menu."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the upper-right corner, click the ", _jsx(_components.strong, {
            children: "Create a rule"
          }), " button, and fill in the following information in the pop-up window:"]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Item"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Limitations"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Associated project"
          }), _jsx(_components.td, {
            children: "The project to which the rule applies."
          }), _jsx(_components.td, {
            children: "Each individual rule can only be associated with one project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Rule name"
          }), _jsx(_components.td, {
            children: "A name for the rule."
          }), _jsx(_components.td, {
            children: "Rules associated with the same project must have unique names."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Alert type"
          }), _jsxs(_components.td, {
            children: ["Choose one of the following:", "- Metric alert: Sends an alert when a metric value is higher or lower than the threshold value.", "- Event alert: Sends an alert when a predefined event occurs."]
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Alert granularity"
          }), _jsxs(_components.td, {
            children: ["Choose one of the following:", "- Channel: Sends an alert when a channel encounters abnormalities.", "- User: Sends an alert when a user encounters abnormalities."]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "User"
            }), " is the only option for event alerts."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Rule description"
          }), _jsxs(_components.td, {
            children: ["The conditions that must be met to trigger an alert. For instance, the combination of ", _jsx(_components.strong, {
              children: "Audio Freeze Rate"
            }), ", ", _jsx(_components.strong, {
              children: "20s Cycle"
            }), ", ", _jsx(_components.strong, {
              children: "Lasts for 2 cycles"
            }), ", ", _jsx(_components.strong, {
              children: ">="
            }), ", and ", _jsx(_components.strong, {
              children: "10%"
            }), " indicates: The audio freeze rate is calculated every 20 seconds; if the calculated value equals or exceeds 10% for two continuous 20-second cycles, the alert is triggered.", 'To monitor multiple metrics or events, add additional rule descriptions. You can set the operator between different rule descriptions as "AND" or "OR".']
          }), _jsx(_components.td, {
            children: "The maximum number of rule descriptions per rule is 20."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Silent period"
          }), _jsx(_components.td, {
            children: 'The time period after an alert during which the alert is not triggered even if the same alert rule is met again. In this case, "the same alert rule" means that both the alert granularity and the applicable rule description are identical.'
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Effective period"
          }), _jsx(_components.td, {
            children: "The time period during which the alert can be triggered."
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Scope"
          }), _jsxs(_components.td, {
            children: ["Choose one of the following:", "- ", _jsx(_components.strong, {
              children: "All users"
            }), " or ", _jsx(_components.strong, {
              children: "All channels"
            }), ".", "- Name list: A custom list of user names or channel names. Separate list entries with hard line breaks.", '- Regular expression: A string search pattern. For example, "aa.*" would apply to every channel whose name starts with "aa".']
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Set advanced filters"
          }), _jsx(_components.td, {
            children: "Predefined filters that help increase the precision of alerts. Click the button to edit or disable the default settings."
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Alert level"
          }), _jsxs(_components.td, {
            children: ["Choose one of the following:", "- Critical", "- Warning", "- Info"]
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Notification type"
          }), _jsxs(_components.td, {
            children: ["Choose one or both:", "- Email: Sends alerts to the email addresses of the specified contacts.", "- WeCom bot: Sends alerts to a WeCom group."]
          }), _jsx(_components.td, {
            children: "A maximum of 500 alert emails can be sent per account per day. The number of emails is calculated based on the total recipients. For example, if two contacts are set to receive alert emails and the rule is triggered 20 times during the day, Agora counts the number of sent emails as 40."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Email note"
          }), _jsx(_components.td, {
            children: "The message contained in emails of alert notifications."
          }), _jsxs(_components.td, {
            children: ["Notification type must be ", _jsx(_components.strong, {
              children: "Email"
            }), " for this item to appear."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "WeCom bot webhooks"
          }), _jsx(_components.td, {
            children: "The webhook URL for the WeCom bot."
          }), _jsxs(_components.td, {
            children: ["Notification type must be ", _jsx(_components.strong, {
              children: "WeCom bot"
            }), " for this item to appear."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Alert contacts"
          }), _jsx(_components.td, {
            children: "Email addresses set to receive alerts."
          }), _jsx(_components.td, {
            children: "The maximum number of alert contacts per rule is five."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Notification language"
          }), _jsx(_components.td, {
            children: "The language of the alert notification."
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Timezone"
          }), _jsx(_components.td, {
            children: "The timezone displayed in the alert notification."
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Alert callbacks"
          }), _jsxs(_components.td, {
            children: ["A publicly accessible URL that receives HTTP requests. You can take further action according to the alert information in these requests. See ", _jsx(_components.a, {
              href: "#alert-callback-parameters",
              children: "Alert callback parameters"
            }), "."]
          }), _jsxs(_components.td, {
            children: ["See ", _jsx(_components.a, {
              href: "#alert-callback-parameters",
              children: "Alert callback parameters"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "enable-an-alert-rule",
      children: "Enable an alert rule"
    }), `
`, _jsx(_components.p, {
      children: "A newly created alert rule is disabled by default. To enable a rule, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the top of the page, click ", _jsx(_components.strong, {
            children: "Alert rules"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find the rule you want to enable, click ", _jsx(_components.strong, {
            children: "Enabled"
          }), " in the ", _jsx(_components.strong, {
            children: "Operation"
          }), " column, and click ", _jsx(_components.strong, {
            children: "OK"
          }), " in the pop-up window."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To enable a group of rules all at once, check the box next to the name of each rule, and click ", _jsx(_components.strong, {
        children: "Enabled"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "edit-an-alert-rule",
      children: "Edit an alert rule"
    }), `
`, _jsx(_components.p, {
      children: "To edit a rule, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the top of the page, click ", _jsx(_components.strong, {
            children: "Alert rules"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find the rule you want to edit, and click ", _jsx(_components.strong, {
            children: "Edit"
          }), " in the ", _jsx(_components.strong, {
            children: "Operation"
          }), " column."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If you did not create this rule, a pop-up window appears. Read the text, and click ", _jsx(_components.strong, {
        children: "OK"
      }), "."]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Make your changes, and click ", _jsx(_components.strong, {
          children: "OK"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "delete-an-alert-rule",
      children: "Delete an alert rule"
    }), `
`, _jsx(_components.p, {
      children: "To delete a rule, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the top of the page, click ", _jsx(_components.strong, {
            children: "Alert rules"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find the rule you want to delete, and click ", _jsx(_components.strong, {
            children: "Delete"
          }), " in the ", _jsx(_components.strong, {
            children: "Operation"
          }), " column."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Read the text in the pop-up window, and click ", _jsx(_components.strong, {
            children: "OK"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To delete a group of rules all at once, check the box next to the name of each rule, and then click ", _jsx(_components.strong, {
        children: "Delete"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "alert-callback-parameters",
      children: "Alert callback parameters"
    }), `
`, _jsx(_components.p, {
      children: "If you create an alert callback for an alert rule, Agora sends requests to the URL you provide when the rule is triggered. Currently, the alert callback function has the following limitations:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "No authentication mechanism is supported, including HTTP authentication."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If a request fails, Agora resends the request up to a maximum of two times. The timeout period for each request is two seconds."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Agora sends a request whenever the alert rule is triggered."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The outbound IP address of the alert callback API may change. You can do one of the following:"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "(Recommended) Open port 80 for your security group."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If opening port 80 is not an available option to you, contact Agora to get the outbound IP address. Note that when Agora changes the IP address, you need to make changes accordingly."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Alert information is sent to you through HTTP POST methods in JSON format. The following sections provide parameter descriptions and request examples for your reference."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Metric alert"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If the alert granularity is set as ", _jsx(_components.strong, {
        children: "Channel"
      }), "："]
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
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"alertTime"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"1631703720000"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The timestamp (seconds) when the alert is sent"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"timeZone"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"UTC+8"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The timezone you set for the rule"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"projectName"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"XlaTest"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Your Agora project name"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"cname"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"d13bd8305da84578a45452a7e2e37f02"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The channel name"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"enContent"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"video freeze rate≥85%"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '// Alert information（"cnContent" means Chinese, and "enContent" means English）'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"currentUserNum"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The number of users in the channel"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"currentHostNum"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The number of hosts in the channel"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"callId"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"6141d1efc3421ca63b6470e5"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The call ID"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"url"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"https://console.agora.io/analytics/call/qoe?id=6141d1efc3421ca63b6470e5"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The corresponding Call Inspector page"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"remark"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Video freeze"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " // The email note you set for the rule"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If the alert granularity is set as ", _jsx(_components.strong, {
        children: "User"
      }), "："]
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
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"alertTime"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"1631780400000"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The timestamp (seconds) when the alert is sent"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"timeZone"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"UTC+8"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The timezone you set for the rule"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"projectName"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"XlaTest"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Your Agora project name"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"cname"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"97c1bb03586945c2a5c9e4ec66ee79e1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The channel name"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"uid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"957288696"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The user ID"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"enContent"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"video freeze rate≥10%"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '// Alert information（"cnContent" means Chinese, and "enContent" means English）'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"currentUserNum"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The number of users in the channel"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"currentHostNum"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The number of hosts in the channel"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"callId"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"6142fe37bd1791b232cbb90e"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The call ID"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"url"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"https://console.agora.io/analytics/call/qoe?id=6142fe37bd1791b232cbb90e"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The corresponding Call Inspector page"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"remark"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Video freeze"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " // The email note you set for the rule"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Event alert"
      })
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
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "alertTime"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"1631785450000"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The timestamp (seconds) when the alert is sent"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "timeZone"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"UTC+8"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The timezone you set for the rule"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "projectName"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Premium-broadcasting"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Your Agora project name"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "cname"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"tm_913_cname"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The channel name"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"67891"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The user ID"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "enContent"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"no frame sending,no voice sending,no voice receiving,wifi congestion,system CPU utility too high"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '// Alert information（"cnContent" means Chinese, and "enContent" means English）'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "currentUserNum"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"100"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The number of users in the channel"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "currentHostNum"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The number of hosts in the channel"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "callId"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"6136b9fcb145efc91f4248f5"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The call ID"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ' "url"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"https://console.agora.io/analytics/call/qoe?id=6136b9fcb145efc91f4248f5"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The corresponding Call Inspector page"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "remark"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Abnormal events"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " // The email note you set for the rule"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "alert-contacts",
      children: "Alert contacts"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Alert contacts"
      }), " lists the contacts you have created for all alert rules. For an individual alert rule, only the contacts you add for the rule receive notifications when the rule is triggered."]
    }), `
`, _jsx(_components.p, {
      children: "This section introduces how to create, edit, and delete a contact."
    }), `
`, _jsx(_components.h3, {
      id: "create-a-contact",
      children: "Create a contact"
    }), `
`, _jsx(_components.p, {
      children: "To create a contact, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the top of the page, click ", _jsx(_components.strong, {
            children: "Alert contacts"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the upper-right corner, click ", _jsx(_components.strong, {
            children: "Create a contact"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter the contact’s name and email address, and click ", _jsx(_components.strong, {
            children: "Get the verification code"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter your verification code, and click ", _jsx(_components.strong, {
            children: "OK"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Note the following limitations when creating a contact:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Each email address can only be used to create one contact."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "An email address can request a verification code a maximum of five times per day."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "edit-a-contact",
      children: "Edit a contact"
    }), `
`, _jsx(_components.p, {
      children: "To edit a contact, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the top of the page, click ", _jsx(_components.strong, {
            children: "Alert contacts"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find the contact, and click ", _jsx(_components.strong, {
            children: "Edit"
          }), " below in the ", _jsx(_components.strong, {
            children: "Operation"
          }), " column."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Make your changes in the pop-up window, and click ", _jsx(_components.strong, {
            children: "OK"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "delete-a-contact",
      children: "Delete a contact"
    }), `
`, _jsx(_components.p, {
      children: "To delete a contact, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the top of the page, click ", _jsx(_components.strong, {
            children: "Alert contacts"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find the contact, and click ", _jsx(_components.strong, {
            children: "Delete"
          }), " in the ", _jsx(_components.strong, {
            children: "Operation"
          }), " column."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Read the text in the pop-up window, and click ", _jsx(_components.strong, {
            children: "OK"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To delete a group of contacts all at once, check the box next to the name of each contact, and then click ", _jsx(_components.strong, {
        children: "Delete"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "alert-records",
      children: "Alert records"
    }), `
`, _jsx(_components.p, {
      children: "Records of your alert notifications are saved for seven days."
    }), `
`, _jsx(_components.p, {
      children: "This section introduces how to view and manage alert records."
    }), `
`, _jsx(_components.h3, {
      id: "view-alert-records",
      children: "View alert records"
    }), `
`, _jsx(_components.p, {
      children: "To view your alert records, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the top of the page, click ", _jsx(_components.strong, {
            children: "Alert records"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "(Optional) Apply the following filters:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Project filter: Select a project from the dropdown menu in the upper-left corner."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Time filter: Select a start date and end data on the top."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Filter for alert granularity, alert level, or status: Click the corresponding funnel icon in the header row."
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "manage-alert-records",
      children: "Manage alert records"
    }), `
`, _jsx(_components.p, {
      children: "To manage an alert record, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the top of the page, click ", _jsx(_components.strong, {
            children: "Alert records"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find the record, and click the dropdown menu in the ", _jsx(_components.strong, {
            children: "Status"
          }), " column:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If you have resolved the issue, select ", _jsx(_components.strong, {
                children: "Resolved"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the issue does not require action, select ", _jsx(_components.strong, {
                children: "Ignored"
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
          children: ["(Optional) To further analyze an alert record, click ", _jsx(_components.strong, {
            children: "Call details"
          }), " to use the ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
            children: "Call Inspector"
          }), " service."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["(Optional) To adjust the rule corresponding to an alert record, click ", _jsx(_components.strong, {
            children: "Edit Alert Rule"
          }), ", and make changes in the pop-up window."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To manage a group of alert records all at once, check the box in the first column for each record and click ", _jsx(_components.strong, {
        children: "Mark as resolved"
      }), ", ", _jsx(_components.strong, {
        children: "Mark as ignored"
      }), ", or ", _jsx(_components.strong, {
        children: "Delete"
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
