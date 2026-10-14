import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Billing policies",
  description: "Agora free-usage allowance and product lifecycle policies."
};
export let _markdown = `

This page explains billing, account settlement, end-of-life policies, and any applicable free-of-charge policies for this product.

## Billing and account policies [#billing-and-account-policies]

Agora Console provides billing information, fee deduction details, and account suspension notices based on your account type.

<CalloutContainer type="info">
  <CalloutDescription>
    If you have signed a contract with Agora, the contract terms override all billing, deduction, and suspension details described on this page.
  </CalloutDescription>
</CalloutContainer>

### Paid accounts [#paid-accounts]

Your account is a paid account if you have registered with Agora and completed any of the following:

* Added a credit card to your account or topped up your balance using a bank account.
* Made a recent payment.
* Signed a contract with Agora.

### Billing cycle [#billing-cycle]

Agora provides each account with [10,000 free minutes](#free-of-charge-policy) every month.

On the first day of each month, Agora issues your bill for the previous calendar month.

To view billing information for your projects:

1. In [Agora Console](https://console.agora.io/), click home.
2. Click **Billing**.

   You see the detailed billing information for your projects, including billing period, due date, and amount.

   ![View bills](https://assets-docs.agora.io/images/video-sdk/bills.png)

#### Additional charges [#additional-charges]

This section describes the additional charges applicable to your account.

#### Singapore goods and services tax [#singapore-goods-and-services-tax]

As of November 2021, Agora Singapore charges [9% Singapore Goods and Services Tax (GST)](https://www.iras.gov.sg/taxes/goods-services-tax-\\(gst\\)/basics-of-gst/goods-and-services-tax-\\(gst\\)-what-it-is-and-how-it-works) on invoices for all Agora services provided to accounts located in Singapore. Agora determines the account location based on the tax identification number, contact address, or billing address that you have provided. All GST collected from Singapore accounts is paid to the Singapore tax authority.

If you have any questions, contact [support@agora.io](mailto\\:support@agora.io).

#### Fee deduction [#fee-deduction]

On the sixth day of each month, Agora automatically deducts the fee for the previous month and notifies you by email. No fee is deducted if you meet both of the following conditions:

* Your monthly usage does not exceed the free quota.
* You do not use any other charged Agora services or products.

If your account balance is negative after the deduction, Agora sends you an email, reminding you to top up your account at your earliest convenience and avoid account suspension.

#### Account suspension [#account-suspension]

If your account balance remains negative for 5 days after the deduction date, Agora suspends your account and notifies you by email. During suspension, none of your projects can access Agora services.

To restore access, top up your account as soon as possible. Once your balance is zero or greater, Agora unfreezes your account.

### Free accounts [#free-accounts]

Your account is a free account if you have registered with Agora and have not completed any of the following:

* Added a credit card to your account or topped up your balance using a bank account.
* Made a recent payment.
* Signed a contract with Agora.

Free accounts include 10,000 free minutes per month. For details, see [Free-of-charge policy](#free-of-charge-policy).

#### Free account suspension [#free-account-suspension]

Agora suspends your account on the second day after any of the following occur:

* Your total usage exceeds the free quota of a service or product.
* You use Agora services or products not included in the free quota.

After account suspension, none of your projects can access Agora services. To restore access:

1. Add a credit card to your account or top up your balance using a bank account. This unfreezes your account and upgrades it to a paid account.
2. Purchase a [pre-paid monthly package](/en/introduction/billing/subscription-packages) or [top-up package](/en/introduction/billing/subscription-packages#top-up-package). This option is highly recommended.

## Free-of-charge policy [#free-of-charge-policy]

<CalloutContainer type="info">
  <CalloutDescription>
    Agora offers a new pricing model. If your account uses this model, you receive a monthly free usage package by default instead of the 10,000 free minutes described below.
  </CalloutDescription>
</CalloutContainer>

Agora provides each account with 10,000 free minutes per month and deducts them in the following order:

* Broadcast Streaming audio minutes
* Voice call, video call, and Interactive Live Streaming audio minutes
* On-premise recording audio minutes
* Cloud Proxy audio minutes
* Broadcast Streaming HD video minutes
* Voice call, video call, and Interactive Live Streaming HD video minutes
* On-premise recording HD video minutes
* Cloud Proxy HD video minutes
* Broadcast Streaming Full HD\\* video minutes
* Voice call, video call, and Interactive Live Streaming Full HD\\* video minutes
* On-premise recording Full HD\\* video minutes
* Cloud Proxy Full HD\\* video minutes
* Broadcast Streaming 2K video minutes
* Voice call, video call, and Interactive Live Streaming 2K video minutes
* On-premise recording 2K video minutes
* Broadcast Streaming 2K+ video minutes
* Voice call, video call, Interactive Live Streaming 2K+ video minutes
* On-premise recording 2K+ video minutes
* Cloud proxy 2K+ video minutes

\\* HD+ minutes are also included in the shared 10,000 free minutes.

If your total service minutes do not exceed 10,000 minutes, the service is free-of-charge. After the 10,000 free-of-charge minutes are fully deducted, Agora charges you for the additional service minutes. Agora clears any remaining free-of-charge minutes at the end of each calendar month.

<CalloutContainer type="info">
  <CalloutDescription>
    * The 10,000 free-of-charge minutes policy does not apply to the Signaling SDK, the Chat SDK, or the IoT SDK.
    * The 10,000 free-of-charge minutes policy does not apply to Cloud Recording or Web Page Recording. To use these services, add a credit card to your Agora account.
    * Conversational AI Engine has its own free minutes policy. For details, see [Conversational AI pricing](/en/ai/reference/pricing).
  </CalloutDescription>
</CalloutContainer>

### How service minutes are calculated [#how-service-minutes-are-calculated]

Service minutes are calculated either by the number of users or by the number of streams. Agora calculates service minutes **by the number of users**.

#### Approach 1: calculate by the number of users [#approach-1-calculate-by-the-number-of-users]

Suppose N users talk for M minutes in a channel, the total service minutes = N \\* M.

* If two users talk for 10 minutes, the total service minutes are: 2 \\* 10 = 20.
* If five users talk for 10 minutes, the total service minutes are: 5 \\* 10 = 50.
* If 10 users talk for 10 minutes, the total service minutes are: 10 \\* 10 = 100.

In this approach, service minutes depend only on the number of users in the channel, regardless of how many streams each user subscribes to.

#### Approach 2: calculate by the number of streams [#approach-2-calculate-by-the-number-of-streams]

Suppose N users talk for M minutes in a channel, and each user subscribes to all remote streams in the channel, the total service minutes = N \\* (N-1) \\* M.

* If two users talk for 10 minutes, the total service minutes are: 2 \\* (2-1) \\* 10 = 20.
* If five users talk for 10 minutes, the total service minutes are: 5 \\* (5-1) \\* 10 = 200.
* If 10 users talk for 10 minutes, the total service minutes are: 10 \\* (10-1) \\* 10 = 900.

In this approach, every remote stream that a user subscribes to is counted separately.

#### Comparison of calculation approaches [#comparison-of-calculation-approaches]

The following table compares service minutes under each approach:

| Use-case                        | Service minutes by the number of users | Service minutes by the number of streams |
| ------------------------------- | -------------------------------------- | ---------------------------------------- |
| Two users talk for 10 minutes.  | 20 minutes                             | 20 minutes                               |
| Five users talk for 10 minutes. | 50 minutes                             | 200 minutes                              |
| 10 users talk for 10 minutes.   | 100 minutes                            | 900 minutes                              |

The difference between the two approaches increases as more users join the channel.

### Agora's calculation method [#agoras-calculation-method]

Agora calculates service minutes **by the number of users**. Service minutes are also calculated based on aggregate video resolution.

## End-of-life policy [#end-of-life-policy]

Agora is committed to providing regular updates to core products, extensions, and tools. These updates include new features, updated APIs, bug fixes, security patches, and documentation improvements. Agora strongly encourages developers to update to the latest product releases to benefit from new features, security enhancements, and other improvements.

This section outlines the stages that an Agora product or service moves through, from pre-GA Beta to general availability to retirement, and the support Agora provides during each phase.

### Default introduction period [#default-introduction-period]

Agora guarantees a minimum introduction period of 12 months from the release of a product on the Agora Developer Center. During this period, Agora does not initiate any end-of-support or end-of-life actions. After the 12-month period, Agora may transition a product into the Maintenance phase, which marks the beginning of the end-of-support phase.

### SDK lifecycle [#sdk-lifecycle]

| Phase                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beta                                 | During this phase, SDKs are intended solely for early access and feedback purposes. They are not recommended for use in production environments. Beta products fall outside of the EOL policy and are intended for evaluation purposes only. For more information, see the Beta Service Agreement.                                                                                                                                                                                                                                                                                                                                                                                      |
| General Availability (GA)            | SDKs in this phase are fully supported by Agora. Agora provides support for new services, API updates, feature enhancements, bug fixes, and security patches. Agora guarantees a minimum of 12 months of support for GA SDKs. For details on client SDK support periods, see [Client SDK support periods](#client-sdk-support-periods).                                                                                                                                                                                                                                                                                                                                                 |
| Retirement (EOL) SDKs: (Maintenance) | When an SDK enters the Retirement phase, Agora announces its retirement with a minimum notice period of 60 days, which is approximately 2 months. This announcement will include crucial timelines and guidelines to assist developers in migrating to the latest recommended SDK version. Agora communicates retirement announcements through email, the Agora Console notifications center, and SDK documentation, and may also post announcements on social media or the [Agora blog](https://www.agora.io/en/blog/). When a product or service reaches the end-of-support or end-of-life stage, Agora stops providing security updates, non-security updates, and assisted support. |

### Client SDK support periods [#client-sdk-support-periods]

Agora provides the following support periods for client SDKs:

| Release       | Support                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------ |
| Major release | Agora guarantees support for at least 12 months starting from the date of a major release. |
| Minor release | For minor releases, Agora ensures support for at least 6 months from the release date.     |

### Maintenance support for retired SDKs [#maintenance-support-for-retired-sdks]

Occasionally, Agora may transition a product SDK into a maintenance support phase focused primarily on bug fixes and security patches. In such cases, Agora notifies customers at least 60 days, approximately 2 months, in advance of the retirement period for the affected SDK.

During the Retirement phase, products entering the EOS/EOL phase will continue to be supported as follows:

| Duration                           | Support                                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Months 1–6 after EOL announcement  | Agora provides bug fixes and security updates. New feature requests are not accepted.                                           |
| Months 7–12 after EOL announcement | Agora provides security updates only.                                                                                           |
| After 12 months                    | Agora no longer supports the product or service, unless a support extension was arranged before the end of the 12-month period. |

<CalloutContainer type="info">
  <CalloutDescription>
    Using an SDK beyond its maintenance support cycle is not recommended and is entirely at the developer's discretion and risk.
  </CalloutDescription>
</CalloutContainer>

Agora is committed to delivering the best SDK experience to its developers. This policy ensures that you have access to the latest features and security updates with clear guidance on the support timelines.

### Support extensions [#support-extensions]

Customers may apply to extend support for a retired SDK for a temporary period, subject to Agora's discretion and commercial terms. Agora reviews each request and decides whether to grant the customer a license to use the product or service for a limited period beyond the EOL timeline.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains billing, account settlement, end-of-life policies, and any applicable free-of-charge policies for this product."
  }, {
    heading: "billing-and-account-policies",
    content: "Agora Console provides billing information, fee deduction details, and account suspension notices based on your account type."
  }, {
    heading: "billing-and-account-policies",
    content: "If you have signed a contract with Agora, the contract terms override all billing, deduction, and suspension details described on this page."
  }, {
    heading: "paid-accounts",
    content: "Your account is a paid account if you have registered with Agora and completed any of the following:"
  }, {
    heading: "paid-accounts",
    content: "Added a credit card to your account or topped up your balance using a bank account."
  }, {
    heading: "paid-accounts",
    content: "Made a recent payment."
  }, {
    heading: "paid-accounts",
    content: "Signed a contract with Agora."
  }, {
    heading: "billing-cycle",
    content: "Agora provides each account with 10,000 free minutes every month."
  }, {
    heading: "billing-cycle",
    content: "On the first day of each month, Agora issues your bill for the previous calendar month."
  }, {
    heading: "billing-cycle",
    content: "To view billing information for your projects:"
  }, {
    heading: "billing-cycle",
    content: "In Agora Console, click home."
  }, {
    heading: "billing-cycle",
    content: "Click **Billing**."
  }, {
    heading: "billing-cycle",
    content: "You see the detailed billing information for your projects, including billing period, due date, and amount."
  }, {
    heading: "additional-charges",
    content: "This section describes the additional charges applicable to your account."
  }, {
    heading: "singapore-goods-and-services-tax",
    content: "As of November 2021, Agora Singapore charges 9% Singapore Goods and Services Tax (GST) on invoices for all Agora services provided to accounts located in Singapore. Agora determines the account location based on the tax identification number, contact address, or billing address that you have provided. All GST collected from Singapore accounts is paid to the Singapore tax authority."
  }, {
    heading: "singapore-goods-and-services-tax",
    content: "If you have any questions, contact support\\@agora.io."
  }, {
    heading: "fee-deduction",
    content: "On the sixth day of each month, Agora automatically deducts the fee for the previous month and notifies you by email. No fee is deducted if you meet both of the following conditions:"
  }, {
    heading: "fee-deduction",
    content: "Your monthly usage does not exceed the free quota."
  }, {
    heading: "fee-deduction",
    content: "You do not use any other charged Agora services or products."
  }, {
    heading: "fee-deduction",
    content: "If your account balance is negative after the deduction, Agora sends you an email, reminding you to top up your account at your earliest convenience and avoid account suspension."
  }, {
    heading: "account-suspension",
    content: "If your account balance remains negative for 5 days after the deduction date, Agora suspends your account and notifies you by email. During suspension, none of your projects can access Agora services."
  }, {
    heading: "account-suspension",
    content: "To restore access, top up your account as soon as possible. Once your balance is zero or greater, Agora unfreezes your account."
  }, {
    heading: "free-accounts",
    content: "Your account is a free account if you have registered with Agora and have not completed any of the following:"
  }, {
    heading: "free-accounts",
    content: "Added a credit card to your account or topped up your balance using a bank account."
  }, {
    heading: "free-accounts",
    content: "Made a recent payment."
  }, {
    heading: "free-accounts",
    content: "Signed a contract with Agora."
  }, {
    heading: "free-accounts",
    content: "Free accounts include 10,000 free minutes per month. For details, see Free-of-charge policy."
  }, {
    heading: "free-account-suspension",
    content: "Agora suspends your account on the second day after any of the following occur:"
  }, {
    heading: "free-account-suspension",
    content: "Your total usage exceeds the free quota of a service or product."
  }, {
    heading: "free-account-suspension",
    content: "You use Agora services or products not included in the free quota."
  }, {
    heading: "free-account-suspension",
    content: "After account suspension, none of your projects can access Agora services. To restore access:"
  }, {
    heading: "free-account-suspension",
    content: "Add a credit card to your account or top up your balance using a bank account. This unfreezes your account and upgrades it to a paid account."
  }, {
    heading: "free-account-suspension",
    content: "Purchase a pre-paid monthly package or top-up package. This option is highly recommended."
  }, {
    heading: "free-of-charge-policy",
    content: "Agora offers a new pricing model. If your account uses this model, you receive a monthly free usage package by default instead of the 10,000 free minutes described below."
  }, {
    heading: "free-of-charge-policy",
    content: "Agora provides each account with 10,000 free minutes per month and deducts them in the following order:"
  }, {
    heading: "free-of-charge-policy",
    content: "Broadcast Streaming audio minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Voice call, video call, and Interactive Live Streaming audio minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "On-premise recording audio minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Cloud Proxy audio minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Broadcast Streaming HD video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Voice call, video call, and Interactive Live Streaming HD video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "On-premise recording HD video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Cloud Proxy HD video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Broadcast Streaming Full HD\\* video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Voice call, video call, and Interactive Live Streaming Full HD\\* video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "On-premise recording Full HD\\* video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Cloud Proxy Full HD\\* video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Broadcast Streaming 2K video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Voice call, video call, and Interactive Live Streaming 2K video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "On-premise recording 2K video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Broadcast Streaming 2K+ video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Voice call, video call, Interactive Live Streaming 2K+ video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "On-premise recording 2K+ video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "Cloud proxy 2K+ video minutes"
  }, {
    heading: "free-of-charge-policy",
    content: "\\* HD+ minutes are also included in the shared 10,000 free minutes."
  }, {
    heading: "free-of-charge-policy",
    content: "If your total service minutes do not exceed 10,000 minutes, the service is free-of-charge. After the 10,000 free-of-charge minutes are fully deducted, Agora charges you for the additional service minutes. Agora clears any remaining free-of-charge minutes at the end of each calendar month."
  }, {
    heading: "free-of-charge-policy",
    content: "The 10,000 free-of-charge minutes policy does not apply to the Signaling SDK, the Chat SDK, or the IoT SDK."
  }, {
    heading: "free-of-charge-policy",
    content: "The 10,000 free-of-charge minutes policy does not apply to Cloud Recording or Web Page Recording. To use these services, add a credit card to your Agora account."
  }, {
    heading: "free-of-charge-policy",
    content: "Conversational AI Engine has its own free minutes policy. For details, see Conversational AI pricing."
  }, {
    heading: "how-service-minutes-are-calculated",
    content: "Service minutes are calculated either by the number of users or by the number of streams. Agora calculates service minutes **by the number of users**."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "Suppose N users talk for M minutes in a channel, the total service minutes = N \\* M."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "If two users talk for 10 minutes, the total service minutes are: 2 \\* 10 = 20."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "If five users talk for 10 minutes, the total service minutes are: 5 \\* 10 = 50."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "If 10 users talk for 10 minutes, the total service minutes are: 10 \\* 10 = 100."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "In this approach, service minutes depend only on the number of users in the channel, regardless of how many streams each user subscribes to."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "Suppose N users talk for M minutes in a channel, and each user subscribes to all remote streams in the channel, the total service minutes = N \\* (N-1) \\* M."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "If two users talk for 10 minutes, the total service minutes are: 2 \\* (2-1) \\* 10 = 20."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "If five users talk for 10 minutes, the total service minutes are: 5 \\* (5-1) \\* 10 = 200."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "If 10 users talk for 10 minutes, the total service minutes are: 10 \\* (10-1) \\* 10 = 900."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "In this approach, every remote stream that a user subscribes to is counted separately."
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "The following table compares service minutes under each approach:"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "Use-case"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "Service minutes by the number of users"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "Service minutes by the number of streams"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "Two users talk for 10 minutes."
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "20 minutes"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "20 minutes"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "Five users talk for 10 minutes."
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "50 minutes"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "200 minutes"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "10 users talk for 10 minutes."
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "100 minutes"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "900 minutes"
  }, {
    heading: "comparison-of-calculation-approaches",
    content: "The difference between the two approaches increases as more users join the channel."
  }, {
    heading: "agoras-calculation-method",
    content: "Agora calculates service minutes **by the number of users**. Service minutes are also calculated based on aggregate video resolution."
  }, {
    heading: "end-of-life-policy",
    content: "Agora is committed to providing regular updates to core products, extensions, and tools. These updates include new features, updated APIs, bug fixes, security patches, and documentation improvements. Agora strongly encourages developers to update to the latest product releases to benefit from new features, security enhancements, and other improvements."
  }, {
    heading: "end-of-life-policy",
    content: "This section outlines the stages that an Agora product or service moves through, from pre-GA Beta to general availability to retirement, and the support Agora provides during each phase."
  }, {
    heading: "default-introduction-period",
    content: "Agora guarantees a minimum introduction period of 12 months from the release of a product on the Agora Developer Center. During this period, Agora does not initiate any end-of-support or end-of-life actions. After the 12-month period, Agora may transition a product into the Maintenance phase, which marks the beginning of the end-of-support phase."
  }, {
    heading: "sdk-lifecycle",
    content: "Phase"
  }, {
    heading: "sdk-lifecycle",
    content: "Description"
  }, {
    heading: "sdk-lifecycle",
    content: "Beta"
  }, {
    heading: "sdk-lifecycle",
    content: "During this phase, SDKs are intended solely for early access and feedback purposes. They are not recommended for use in production environments. Beta products fall outside of the EOL policy and are intended for evaluation purposes only. For more information, see the Beta Service Agreement."
  }, {
    heading: "sdk-lifecycle",
    content: "General Availability (GA)"
  }, {
    heading: "sdk-lifecycle",
    content: "SDKs in this phase are fully supported by Agora. Agora provides support for new services, API updates, feature enhancements, bug fixes, and security patches. Agora guarantees a minimum of 12 months of support for GA SDKs. For details on client SDK support periods, see Client SDK support periods."
  }, {
    heading: "sdk-lifecycle",
    content: "Retirement (EOL) SDKs: (Maintenance)"
  }, {
    heading: "sdk-lifecycle",
    content: "When an SDK enters the Retirement phase, Agora announces its retirement with a minimum notice period of 60 days, which is approximately 2 months. This announcement will include crucial timelines and guidelines to assist developers in migrating to the latest recommended SDK version. Agora communicates retirement announcements through email, the Agora Console notifications center, and SDK documentation, and may also post announcements on social media or the Agora blog. When a product or service reaches the end-of-support or end-of-life stage, Agora stops providing security updates, non-security updates, and assisted support."
  }, {
    heading: "client-sdk-support-periods",
    content: "Agora provides the following support periods for client SDKs:"
  }, {
    heading: "client-sdk-support-periods",
    content: "Release"
  }, {
    heading: "client-sdk-support-periods",
    content: "Support"
  }, {
    heading: "client-sdk-support-periods",
    content: "Major release"
  }, {
    heading: "client-sdk-support-periods",
    content: "Agora guarantees support for at least 12 months starting from the date of a major release."
  }, {
    heading: "client-sdk-support-periods",
    content: "Minor release"
  }, {
    heading: "client-sdk-support-periods",
    content: "For minor releases, Agora ensures support for at least 6 months from the release date."
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Occasionally, Agora may transition a product SDK into a maintenance support phase focused primarily on bug fixes and security patches. In such cases, Agora notifies customers at least 60 days, approximately 2 months, in advance of the retirement period for the affected SDK."
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "During the Retirement phase, products entering the EOS/EOL phase will continue to be supported as follows:"
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Duration"
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Support"
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Months 1–6 after EOL announcement"
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Agora provides bug fixes and security updates. New feature requests are not accepted."
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Months 7–12 after EOL announcement"
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Agora provides security updates only."
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "After 12 months"
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Agora no longer supports the product or service, unless a support extension was arranged before the end of the 12-month period."
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Using an SDK beyond its maintenance support cycle is not recommended and is entirely at the developer's discretion and risk."
  }, {
    heading: "maintenance-support-for-retired-sdks",
    content: "Agora is committed to delivering the best SDK experience to its developers. This policy ensures that you have access to the latest features and security updates with clear guidance on the support timelines."
  }, {
    heading: "support-extensions",
    content: "Customers may apply to extend support for a retired SDK for a temporary period, subject to Agora's discretion and commercial terms. Agora reviews each request and decides whether to grant the customer a license to use the product or service for a limited period beyond the EOL timeline."
  }],
  headings: [{
    id: "billing-and-account-policies",
    content: "Billing and account policies"
  }, {
    id: "paid-accounts",
    content: "Paid accounts"
  }, {
    id: "billing-cycle",
    content: "Billing cycle"
  }, {
    id: "additional-charges",
    content: "Additional charges"
  }, {
    id: "singapore-goods-and-services-tax",
    content: "Singapore goods and services tax"
  }, {
    id: "fee-deduction",
    content: "Fee deduction"
  }, {
    id: "account-suspension",
    content: "Account suspension"
  }, {
    id: "free-accounts",
    content: "Free accounts"
  }, {
    id: "free-account-suspension",
    content: "Free account suspension"
  }, {
    id: "free-of-charge-policy",
    content: "Free-of-charge policy"
  }, {
    id: "how-service-minutes-are-calculated",
    content: "How service minutes are calculated"
  }, {
    id: "approach-1-calculate-by-the-number-of-users",
    content: "Approach 1: calculate by the number of users"
  }, {
    id: "approach-2-calculate-by-the-number-of-streams",
    content: "Approach 2: calculate by the number of streams"
  }, {
    id: "comparison-of-calculation-approaches",
    content: "Comparison of calculation approaches"
  }, {
    id: "agoras-calculation-method",
    content: "Agora's calculation method"
  }, {
    id: "end-of-life-policy",
    content: "End-of-life policy"
  }, {
    id: "default-introduction-period",
    content: "Default introduction period"
  }, {
    id: "sdk-lifecycle",
    content: "SDK lifecycle"
  }, {
    id: "client-sdk-support-periods",
    content: "Client SDK support periods"
  }, {
    id: "maintenance-support-for-retired-sdks",
    content: "Maintenance support for retired SDKs"
  }, {
    id: "support-extensions",
    content: "Support extensions"
  }]
};
export let toc = [{
  depth: 2,
  url: "#billing-and-account-policies",
  title: _jsx(_Fragment, {
    children: "Billing and account policies"
  })
}, {
  depth: 3,
  url: "#paid-accounts",
  title: _jsx(_Fragment, {
    children: "Paid accounts"
  })
}, {
  depth: 3,
  url: "#billing-cycle",
  title: _jsx(_Fragment, {
    children: "Billing cycle"
  })
}, {
  depth: 4,
  url: "#additional-charges",
  title: _jsx(_Fragment, {
    children: "Additional charges"
  })
}, {
  depth: 4,
  url: "#singapore-goods-and-services-tax",
  title: _jsx(_Fragment, {
    children: "Singapore goods and services tax"
  })
}, {
  depth: 4,
  url: "#fee-deduction",
  title: _jsx(_Fragment, {
    children: "Fee deduction"
  })
}, {
  depth: 4,
  url: "#account-suspension",
  title: _jsx(_Fragment, {
    children: "Account suspension"
  })
}, {
  depth: 3,
  url: "#free-accounts",
  title: _jsx(_Fragment, {
    children: "Free accounts"
  })
}, {
  depth: 4,
  url: "#free-account-suspension",
  title: _jsx(_Fragment, {
    children: "Free account suspension"
  })
}, {
  depth: 2,
  url: "#free-of-charge-policy",
  title: _jsx(_Fragment, {
    children: "Free-of-charge policy"
  })
}, {
  depth: 3,
  url: "#how-service-minutes-are-calculated",
  title: _jsx(_Fragment, {
    children: "How service minutes are calculated"
  })
}, {
  depth: 4,
  url: "#approach-1-calculate-by-the-number-of-users",
  title: _jsx(_Fragment, {
    children: "Approach 1: calculate by the number of users"
  })
}, {
  depth: 4,
  url: "#approach-2-calculate-by-the-number-of-streams",
  title: _jsx(_Fragment, {
    children: "Approach 2: calculate by the number of streams"
  })
}, {
  depth: 4,
  url: "#comparison-of-calculation-approaches",
  title: _jsx(_Fragment, {
    children: "Comparison of calculation approaches"
  })
}, {
  depth: 3,
  url: "#agoras-calculation-method",
  title: _jsx(_Fragment, {
    children: "Agora's calculation method"
  })
}, {
  depth: 2,
  url: "#end-of-life-policy",
  title: _jsx(_Fragment, {
    children: "End-of-life policy"
  })
}, {
  depth: 3,
  url: "#default-introduction-period",
  title: _jsx(_Fragment, {
    children: "Default introduction period"
  })
}, {
  depth: 3,
  url: "#sdk-lifecycle",
  title: _jsx(_Fragment, {
    children: "SDK lifecycle"
  })
}, {
  depth: 3,
  url: "#client-sdk-support-periods",
  title: _jsx(_Fragment, {
    children: "Client SDK support periods"
  })
}, {
  depth: 3,
  url: "#maintenance-support-for-retired-sdks",
  title: _jsx(_Fragment, {
    children: "Maintenance support for retired SDKs"
  })
}, {
  depth: 3,
  url: "#support-extensions",
  title: _jsx(_Fragment, {
    children: "Support extensions"
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
    children: [_jsx(_components.p, {
      children: "This page explains billing, account settlement, end-of-life policies, and any applicable free-of-charge policies for this product."
    }), `
`, _jsx(_components.h2, {
      id: "billing-and-account-policies",
      children: "Billing and account policies"
    }), `
`, _jsx(_components.p, {
      children: "Agora Console provides billing information, fee deduction details, and account suspension notices based on your account type."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "If you have signed a contract with Agora, the contract terms override all billing, deduction, and suspension details described on this page."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "paid-accounts",
      children: "Paid accounts"
    }), `
`, _jsx(_components.p, {
      children: "Your account is a paid account if you have registered with Agora and completed any of the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Added a credit card to your account or topped up your balance using a bank account."
      }), `
`, _jsx(_components.li, {
        children: "Made a recent payment."
      }), `
`, _jsx(_components.li, {
        children: "Signed a contract with Agora."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "billing-cycle",
      children: "Billing cycle"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora provides each account with ", _jsx(_components.a, {
        href: "#free-of-charge-policy",
        children: "10,000 free minutes"
      }), " every month."]
    }), `
`, _jsx(_components.p, {
      children: "On the first day of each month, Agora issues your bill for the previous calendar month."
    }), `
`, _jsx(_components.p, {
      children: "To view billing information for your projects:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), ", click home."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Billing"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: "You see the detailed billing information for your projects, including billing period, due date, and amount."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/bills.png",
            alt: "View bills"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "additional-charges",
      children: "Additional charges"
    }), `
`, _jsx(_components.p, {
      children: "This section describes the additional charges applicable to your account."
    }), `
`, _jsx(_components.h4, {
      id: "singapore-goods-and-services-tax",
      children: "Singapore goods and services tax"
    }), `
`, _jsxs(_components.p, {
      children: ["As of November 2021, Agora Singapore charges ", _jsx(_components.a, {
        href: "https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/basics-of-gst/goods-and-services-tax-(gst)-what-it-is-and-how-it-works",
        children: "9% Singapore Goods and Services Tax (GST)"
      }), " on invoices for all Agora services provided to accounts located in Singapore. Agora determines the account location based on the tax identification number, contact address, or billing address that you have provided. All GST collected from Singapore accounts is paid to the Singapore tax authority."]
    }), `
`, _jsxs(_components.p, {
      children: ["If you have any questions, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "fee-deduction",
      children: "Fee deduction"
    }), `
`, _jsx(_components.p, {
      children: "On the sixth day of each month, Agora automatically deducts the fee for the previous month and notifies you by email. No fee is deducted if you meet both of the following conditions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Your monthly usage does not exceed the free quota."
      }), `
`, _jsx(_components.li, {
        children: "You do not use any other charged Agora services or products."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If your account balance is negative after the deduction, Agora sends you an email, reminding you to top up your account at your earliest convenience and avoid account suspension."
    }), `
`, _jsx(_components.h4, {
      id: "account-suspension",
      children: "Account suspension"
    }), `
`, _jsx(_components.p, {
      children: "If your account balance remains negative for 5 days after the deduction date, Agora suspends your account and notifies you by email. During suspension, none of your projects can access Agora services."
    }), `
`, _jsx(_components.p, {
      children: "To restore access, top up your account as soon as possible. Once your balance is zero or greater, Agora unfreezes your account."
    }), `
`, _jsx(_components.h3, {
      id: "free-accounts",
      children: "Free accounts"
    }), `
`, _jsx(_components.p, {
      children: "Your account is a free account if you have registered with Agora and have not completed any of the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Added a credit card to your account or topped up your balance using a bank account."
      }), `
`, _jsx(_components.li, {
        children: "Made a recent payment."
      }), `
`, _jsx(_components.li, {
        children: "Signed a contract with Agora."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Free accounts include 10,000 free minutes per month. For details, see ", _jsx(_components.a, {
        href: "#free-of-charge-policy",
        children: "Free-of-charge policy"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "free-account-suspension",
      children: "Free account suspension"
    }), `
`, _jsx(_components.p, {
      children: "Agora suspends your account on the second day after any of the following occur:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Your total usage exceeds the free quota of a service or product."
      }), `
`, _jsx(_components.li, {
        children: "You use Agora services or products not included in the free quota."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "After account suspension, none of your projects can access Agora services. To restore access:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Add a credit card to your account or top up your balance using a bank account. This unfreezes your account and upgrades it to a paid account."
      }), `
`, _jsxs(_components.li, {
        children: ["Purchase a ", _jsx(_components.a, {
          href: "/en/introduction/billing/subscription-packages",
          children: "pre-paid monthly package"
        }), " or ", _jsx(_components.a, {
          href: "/en/introduction/billing/subscription-packages#top-up-package",
          children: "top-up package"
        }), ". This option is highly recommended."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "free-of-charge-policy",
      children: "Free-of-charge policy"
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Agora offers a new pricing model. If your account uses this model, you receive a monthly free usage package by default instead of the 10,000 free minutes described below."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Agora provides each account with 10,000 free minutes per month and deducts them in the following order:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Broadcast Streaming audio minutes"
      }), `
`, _jsx(_components.li, {
        children: "Voice call, video call, and Interactive Live Streaming audio minutes"
      }), `
`, _jsx(_components.li, {
        children: "On-premise recording audio minutes"
      }), `
`, _jsx(_components.li, {
        children: "Cloud Proxy audio minutes"
      }), `
`, _jsx(_components.li, {
        children: "Broadcast Streaming HD video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Voice call, video call, and Interactive Live Streaming HD video minutes"
      }), `
`, _jsx(_components.li, {
        children: "On-premise recording HD video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Cloud Proxy HD video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Broadcast Streaming Full HD* video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Voice call, video call, and Interactive Live Streaming Full HD* video minutes"
      }), `
`, _jsx(_components.li, {
        children: "On-premise recording Full HD* video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Cloud Proxy Full HD* video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Broadcast Streaming 2K video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Voice call, video call, and Interactive Live Streaming 2K video minutes"
      }), `
`, _jsx(_components.li, {
        children: "On-premise recording 2K video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Broadcast Streaming 2K+ video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Voice call, video call, Interactive Live Streaming 2K+ video minutes"
      }), `
`, _jsx(_components.li, {
        children: "On-premise recording 2K+ video minutes"
      }), `
`, _jsx(_components.li, {
        children: "Cloud proxy 2K+ video minutes"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "* HD+ minutes are also included in the shared 10,000 free minutes."
    }), `
`, _jsx(_components.p, {
      children: "If your total service minutes do not exceed 10,000 minutes, the service is free-of-charge. After the 10,000 free-of-charge minutes are fully deducted, Agora charges you for the additional service minutes. Agora clears any remaining free-of-charge minutes at the end of each calendar month."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The 10,000 free-of-charge minutes policy does not apply to the Signaling SDK, the Chat SDK, or the IoT SDK."
          }), `
`, _jsx(_components.li, {
            children: "The 10,000 free-of-charge minutes policy does not apply to Cloud Recording or Web Page Recording. To use these services, add a credit card to your Agora account."
          }), `
`, _jsxs(_components.li, {
            children: ["Conversational AI Engine has its own free minutes policy. For details, see ", _jsx(_components.a, {
              href: "/en/ai/reference/pricing",
              children: "Conversational AI pricing"
            }), "."]
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "how-service-minutes-are-calculated",
      children: "How service minutes are calculated"
    }), `
`, _jsxs(_components.p, {
      children: ["Service minutes are calculated either by the number of users or by the number of streams. Agora calculates service minutes ", _jsx(_components.strong, {
        children: "by the number of users"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "approach-1-calculate-by-the-number-of-users",
      children: "Approach 1: calculate by the number of users"
    }), `
`, _jsx(_components.p, {
      children: "Suppose N users talk for M minutes in a channel, the total service minutes = N * M."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If two users talk for 10 minutes, the total service minutes are: 2 * 10 = 20."
      }), `
`, _jsx(_components.li, {
        children: "If five users talk for 10 minutes, the total service minutes are: 5 * 10 = 50."
      }), `
`, _jsx(_components.li, {
        children: "If 10 users talk for 10 minutes, the total service minutes are: 10 * 10 = 100."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In this approach, service minutes depend only on the number of users in the channel, regardless of how many streams each user subscribes to."
    }), `
`, _jsx(_components.h4, {
      id: "approach-2-calculate-by-the-number-of-streams",
      children: "Approach 2: calculate by the number of streams"
    }), `
`, _jsx(_components.p, {
      children: "Suppose N users talk for M minutes in a channel, and each user subscribes to all remote streams in the channel, the total service minutes = N * (N-1) * M."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If two users talk for 10 minutes, the total service minutes are: 2 * (2-1) * 10 = 20."
      }), `
`, _jsx(_components.li, {
        children: "If five users talk for 10 minutes, the total service minutes are: 5 * (5-1) * 10 = 200."
      }), `
`, _jsx(_components.li, {
        children: "If 10 users talk for 10 minutes, the total service minutes are: 10 * (10-1) * 10 = 900."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In this approach, every remote stream that a user subscribes to is counted separately."
    }), `
`, _jsx(_components.h4, {
      id: "comparison-of-calculation-approaches",
      children: "Comparison of calculation approaches"
    }), `
`, _jsx(_components.p, {
      children: "The following table compares service minutes under each approach:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Use-case"
          }), _jsx(_components.th, {
            children: "Service minutes by the number of users"
          }), _jsx(_components.th, {
            children: "Service minutes by the number of streams"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Two users talk for 10 minutes."
          }), _jsx(_components.td, {
            children: "20 minutes"
          }), _jsx(_components.td, {
            children: "20 minutes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Five users talk for 10 minutes."
          }), _jsx(_components.td, {
            children: "50 minutes"
          }), _jsx(_components.td, {
            children: "200 minutes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "10 users talk for 10 minutes."
          }), _jsx(_components.td, {
            children: "100 minutes"
          }), _jsx(_components.td, {
            children: "900 minutes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The difference between the two approaches increases as more users join the channel."
    }), `
`, _jsx(_components.h3, {
      id: "agoras-calculation-method",
      children: "Agora's calculation method"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora calculates service minutes ", _jsx(_components.strong, {
        children: "by the number of users"
      }), ". Service minutes are also calculated based on aggregate video resolution."]
    }), `
`, _jsx(_components.h2, {
      id: "end-of-life-policy",
      children: "End-of-life policy"
    }), `
`, _jsx(_components.p, {
      children: "Agora is committed to providing regular updates to core products, extensions, and tools. These updates include new features, updated APIs, bug fixes, security patches, and documentation improvements. Agora strongly encourages developers to update to the latest product releases to benefit from new features, security enhancements, and other improvements."
    }), `
`, _jsx(_components.p, {
      children: "This section outlines the stages that an Agora product or service moves through, from pre-GA Beta to general availability to retirement, and the support Agora provides during each phase."
    }), `
`, _jsx(_components.h3, {
      id: "default-introduction-period",
      children: "Default introduction period"
    }), `
`, _jsx(_components.p, {
      children: "Agora guarantees a minimum introduction period of 12 months from the release of a product on the Agora Developer Center. During this period, Agora does not initiate any end-of-support or end-of-life actions. After the 12-month period, Agora may transition a product into the Maintenance phase, which marks the beginning of the end-of-support phase."
    }), `
`, _jsx(_components.h3, {
      id: "sdk-lifecycle",
      children: "SDK lifecycle"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Phase"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Beta"
          }), _jsx(_components.td, {
            children: "During this phase, SDKs are intended solely for early access and feedback purposes. They are not recommended for use in production environments. Beta products fall outside of the EOL policy and are intended for evaluation purposes only. For more information, see the Beta Service Agreement."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "General Availability (GA)"
          }), _jsxs(_components.td, {
            children: ["SDKs in this phase are fully supported by Agora. Agora provides support for new services, API updates, feature enhancements, bug fixes, and security patches. Agora guarantees a minimum of 12 months of support for GA SDKs. For details on client SDK support periods, see ", _jsx(_components.a, {
              href: "#client-sdk-support-periods",
              children: "Client SDK support periods"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Retirement (EOL) SDKs: (Maintenance)"
          }), _jsxs(_components.td, {
            children: ["When an SDK enters the Retirement phase, Agora announces its retirement with a minimum notice period of 60 days, which is approximately 2 months. This announcement will include crucial timelines and guidelines to assist developers in migrating to the latest recommended SDK version. Agora communicates retirement announcements through email, the Agora Console notifications center, and SDK documentation, and may also post announcements on social media or the ", _jsx(_components.a, {
              href: "https://www.agora.io/en/blog/",
              children: "Agora blog"
            }), ". When a product or service reaches the end-of-support or end-of-life stage, Agora stops providing security updates, non-security updates, and assisted support."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "client-sdk-support-periods",
      children: "Client SDK support periods"
    }), `
`, _jsx(_components.p, {
      children: "Agora provides the following support periods for client SDKs:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Release"
          }), _jsx(_components.th, {
            children: "Support"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Major release"
          }), _jsx(_components.td, {
            children: "Agora guarantees support for at least 12 months starting from the date of a major release."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Minor release"
          }), _jsx(_components.td, {
            children: "For minor releases, Agora ensures support for at least 6 months from the release date."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "maintenance-support-for-retired-sdks",
      children: "Maintenance support for retired SDKs"
    }), `
`, _jsx(_components.p, {
      children: "Occasionally, Agora may transition a product SDK into a maintenance support phase focused primarily on bug fixes and security patches. In such cases, Agora notifies customers at least 60 days, approximately 2 months, in advance of the retirement period for the affected SDK."
    }), `
`, _jsx(_components.p, {
      children: "During the Retirement phase, products entering the EOS/EOL phase will continue to be supported as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Duration"
          }), _jsx(_components.th, {
            children: "Support"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Months 1–6 after EOL announcement"
          }), _jsx(_components.td, {
            children: "Agora provides bug fixes and security updates. New feature requests are not accepted."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Months 7–12 after EOL announcement"
          }), _jsx(_components.td, {
            children: "Agora provides security updates only."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "After 12 months"
          }), _jsx(_components.td, {
            children: "Agora no longer supports the product or service, unless a support extension was arranged before the end of the 12-month period."
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Using an SDK beyond its maintenance support cycle is not recommended and is entirely at the developer's discretion and risk."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Agora is committed to delivering the best SDK experience to its developers. This policy ensures that you have access to the latest features and security updates with clear guidance on the support timelines."
    }), `
`, _jsx(_components.h3, {
      id: "support-extensions",
      children: "Support extensions"
    }), `
`, _jsx(_components.p, {
      children: "Customers may apply to extend support for a retired SDK for a temporary period, subject to Agora's discretion and commercial terms. Agora reviews each request and decides whether to grant the customer a license to use the product or service for a limited period beyond the EOL timeline."
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
