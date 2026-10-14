import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Policies",
  description: "Provides you with information on billing, fee deductions, free-of-charge policy, account settlement and any suspension to your account based on the account type."
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

If your account balance is negative after the deduction, Agora sends you an email, reminding you to [top up your account](./pricing) at your earliest convenience and avoid account suspension.

#### Account suspension [#account-suspension]

If your account balance remains negative for 5 days after the deduction date, Agora suspends your account and notifies you by email. During suspension, none of your projects can access Agora services.

To restore access, top up your account as soon as possible. Once your balance is zero or greater, Agora unfreezes your account.

### Free accounts [#free-accounts]

Your account is a free account if you have registered with Agora and have not completed any of the following:

* Added a credit card to your account or topped up your balance using a bank account.
* Made a recent payment.
* Signed a contract with Agora.

#### Free account suspension  [#free-account-suspension]

Agora suspends your account on the second day after any of the following occur:

* Your total usage exceeds the free quota of a service or product.
* You use Agora services or products not included in the free quota.

After account suspension, none of your projects can access Agora services. To restore access:

1. Add a credit card to your account or top up your balance using a bank account. This unfreezes your account and upgrades it to a paid account.

2. Purchase a [pre-paid monthly package](./subscription-packages) or [top-up package](./subscription-packages). This option is highly recommended.

## Account settlement [#account-settlement]

To ensure billing transparency and smooth service continuity, Agora implements real-time account balance reservation based on estimated usage across all Agora products for SSP customers. This does not apply to customers with a signed contract.

<CalloutContainer type="info">
  <CalloutDescription>
    For uninterrupted access to Agora's products and services, ensure at least one of the following:

    * Add a valid credit card for auto-recharge to your Agora account, **or**
    * Maintain sufficient funds in your Agora Console balance to cover your estimated usage.
  </CalloutDescription>
</CalloutContainer>

Agora employs the following policies to manage your account balance and ensure uninterrupted access to its products and services.

### Real-time usage and estimated bill [#real-time-usage-and-estimated-bill]

You can view your real-time usage and estimated monthly bill at any time by selecting **Billing** in the Agora Console sidebar.

![bill estimate preview](https://assets-docs.agora.io/images/console/bill-estimate-preview.png)

### Real-time reservation of balance [#real-time-reservation-of-balance]

Your reserved balance is updated continuously based on your real-time bill estimation. The corresponding estimated amount is reserved from your available balance at all times.

![Available and reserved balance](https://assets-docs.agora.io/images/console/available-reserved-balance.png)

### Auto-recharge and account suspension [#auto-recharge-and-account-suspension]

On the **7th, 14th, 21st, and 28th*&#x2A; of each calendar month (excluding February 28), if your available balance is in arrears by more than **$50**:

* If a valid credit card is linked, the system automatically recharges your balance to zero.
* If no credit card is linked, or if auto-recharge fails, a notification email is sent to you.
* Top up your wallet within the **24-hour grace period** to avoid account suspension.
* If your balance remains in arrears after 24 hours, your account is suspended until the balance is restored to zero or above.

### Monthly billing [#monthly-billing]

Your final bill is issued monthly. After bill finalization:

* Any overpaid amount is refunded to your balance.
* Any undercharged amount is deducted accordingly.

### Balance withdrawal [#balance-withdrawal]

You can withdraw your available balance at any time directly from the Agora Console.

![Withdraw balance](https://assets-docs.agora.io/images/console/withdraw-balance.png)

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

### Additional information [#additional-information]

If you need more time to transition to the latest version of a product or service, contact your Agora account manager, partnership manager, or device manufacturer for assistance.

Agora is committed to providing support throughout the lifecycle of its products and services to ensure the best possible developer experience.

<!-- PRODUCT-SPECIFIC TAIL START (Signaling): version retirement schedule below is Signaling-specific; everything above is generic Agora billing/EOL policy and is a candidate for cross-product globalization. -->

### Signaling version retirement schedule [#signaling-version-retirement-schedule]

| Version | Release date       | Retirement date                                                                   |
| ------- | ------------------ | --------------------------------------------------------------------------------- |
| v2.3.0  | July 20, 2026      | July 21, 2029, or 1 year after the release of v2.5.x (whichever comes first)      |
| v2.2.8  | February 12, 2026  | February 13, 2029, or 1 year after the release of v2.4.x (whichever comes first)  |
| v2.2.7  | December 12, 2025  | December 13, 2028, or 1 year after the release of v2.4.x (whichever comes first)  |
| v2.2.6  | October 31, 2025   | November 1, 2028, or 1 year after the release of v2.4.x (whichever comes first)   |
| v2.2.5  | July 1, 2025       | July 2, 2028, or 1 year after the release of v2.4.x (whichever comes first)       |
| v2.2.4  | April 1, 2025      | April 2, 2028, or 1 year after the release of v2.4.x (whichever comes first)      |
| v2.2.3  | March 21, 2025     | March 22, 2028, or 1 year after the release of v2.4.x (whichever comes first)     |
| v2.2.2  | November 6, 2024   | November 7, 2027, or 1 year after the release of v2.4.x (whichever comes first)   |
| v2.2.1  | July 17, 2024      | July 18, 2027, or 1 year after the release of v2.4.x (whichever comes first)      |
| v2.2.0  | April 23, 2024     | April 24, 2027, or 1 year after the release of v2.4.x (whichever comes first)     |
| v2.1.12 | June 7, 2024       | June 8, 2027, or 1 year after the release of v2.3.x (whichever comes first)       |
| v2.1.11 | April 30, 2024     | May 1, 2027, or 1 year after the release of v2.3.x (whichever comes first)        |
| v2.1.10 | February 26, 2024  | February 27, 2027, or 1 year after the release of v2.3.x (whichever comes first)  |
| v2.1.9  | January 10, 2024   | January 11, 2027, or 1 year after the release of v2.3.x (whichever comes first)   |
| v2.1.8  | December 4, 2023   | December 5, 2026, or 1 year after the release of v2.3.x (whichever comes first)   |
| v2.1.7  | October 20, 2023   | October 21, 2026, or 1 year after the release of v2.3.x (whichever comes first)   |
| v2.1.6  | September 19, 2023 | September 20, 2026, or 1 year after the release of v2.3.x (whichever comes first) |
| v2.1.4  | August 16, 2023    | August 17, 2026, or 1 year after the release of v2.3.x (whichever comes first)    |
| v1.5.3  | October 17, 2022   | August 17, 2024                                                                   |
| v1.5.2  | October 12, 2022   | August 17, 2024                                                                   |
| v1.5.1  | September 1, 2022  | August 17, 2024                                                                   |
| v1.5.0  | July 27, 2022      | August 17, 2024                                                                   |
| v1.4.10 | March 1, 2022      | August 17, 2024                                                                   |
| v1.4.9  | November 19, 2021  | August 17, 2024                                                                   |
| v1.4.7  | July 19, 2021      | July 20, 2024                                                                     |
| v1.4.6  | June 21, 2021      | June 22, 2024                                                                     |
| v1.4.5  | April 30, 2021     | May 1, 2024                                                                       |
| v1.4.4  | April 20, 2021     | April 21, 2024                                                                    |
| v1.4.3  | February 10, 2021  | February 11, 2024                                                                 |
| v1.4.2  | November 23, 2020  | November 24, 2023                                                                 |
| v1.4.1  | September 30, 2020 | October 1, 2023                                                                   |
| v1.4.0  | September 1, 2020  | September 2, 2023                                                                 |
| v1.3.0  | May 11, 2020       | May 12, 2023                                                                      |
| v1.2.2  | December 13, 2019  | September 2, 2021                                                                 |
| v1.2.1  | November 29, 2019  | September 2, 2021                                                                 |
| v1.2.0  | November 6, 2019   | September 2, 2021                                                                 |
| v1.1.0  | September 18, 2019 | May 12, 2021                                                                      |
| v1.0.1  | August 1, 2019     | November 7, 2020                                                                  |
| v1.0.0  | July 24, 2019      | November 7, 2020                                                                  |
| v0.9.3  | June 7, 2019       | September 19, 2020                                                                |
| v0.9.2  | May 8, 2019        | September 19, 2020                                                                |
| v0.9.1  | April 4, 2019      | September 19, 2020                                                                |
| v0.9.0  | February 4, 2019   | September 19, 2020                                                                |

<!-- END product-specific tail (Signaling) -->
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
    content: "After account suspension, none of your projects can access Agora services. To restore access:"
  }, {
    heading: "free-account-suspension",
    content: "Add a credit card to your account or top up your balance using a bank account. This unfreezes your account and upgrades it to a paid account."
  }, {
    heading: "free-account-suspension",
    content: "Purchase a pre-paid monthly package or top-up package. This option is highly recommended."
  }, {
    heading: "account-settlement",
    content: "To ensure billing transparency and smooth service continuity, Agora implements real-time account balance reservation based on estimated usage across all Agora products for SSP customers. This does not apply to customers with a signed contract."
  }, {
    heading: "account-settlement",
    content: "For uninterrupted access to Agora's products and services, ensure at least one of the following:"
  }, {
    heading: "account-settlement",
    content: "Add a valid credit card for auto-recharge to your Agora account, **or**"
  }, {
    heading: "account-settlement",
    content: "Maintain sufficient funds in your Agora Console balance to cover your estimated usage."
  }, {
    heading: "account-settlement",
    content: "Agora employs the following policies to manage your account balance and ensure uninterrupted access to its products and services."
  }, {
    heading: "real-time-usage-and-estimated-bill",
    content: "You can view your real-time usage and estimated monthly bill at any time by selecting **Billing** in the Agora Console sidebar."
  }, {
    heading: "real-time-reservation-of-balance",
    content: "Your reserved balance is updated continuously based on your real-time bill estimation. The corresponding estimated amount is reserved from your available balance at all times."
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "On the **7th, 14th, 21st, and 28th*&#x2A; of each calendar month (excluding February 28), if your available balance is in arrears by more than **$50**:"
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "If a valid credit card is linked, the system automatically recharges your balance to zero."
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "If no credit card is linked, or if auto-recharge fails, a notification email is sent to you."
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "Top up your wallet within the **24-hour grace period** to avoid account suspension."
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "If your balance remains in arrears after 24 hours, your account is suspended until the balance is restored to zero or above."
  }, {
    heading: "monthly-billing",
    content: "Your final bill is issued monthly. After bill finalization:"
  }, {
    heading: "monthly-billing",
    content: "Any overpaid amount is refunded to your balance."
  }, {
    heading: "monthly-billing",
    content: "Any undercharged amount is deducted accordingly."
  }, {
    heading: "balance-withdrawal",
    content: "You can withdraw your available balance at any time directly from the Agora Console."
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
  }, {
    heading: "additional-information",
    content: "If you need more time to transition to the latest version of a product or service, contact your Agora account manager, partnership manager, or device manufacturer for assistance."
  }, {
    heading: "additional-information",
    content: "Agora is committed to providing support throughout the lifecycle of its products and services to ensure the best possible developer experience."
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "Version"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "Release date"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "Retirement date"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.3.0"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 20, 2026"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 21, 2029, or 1 year after the release of v2.5.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.2.8"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "February 12, 2026"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "February 13, 2029, or 1 year after the release of v2.4.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.2.7"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "December 12, 2025"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "December 13, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.2.6"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "October 31, 2025"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 1, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.2.5"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 1, 2025"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 2, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.2.4"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "April 1, 2025"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "April 2, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.2.3"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "March 21, 2025"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "March 22, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.2.2"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 6, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 7, 2027, or 1 year after the release of v2.4.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.2.1"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 17, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 18, 2027, or 1 year after the release of v2.4.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.2.0"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "April 23, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "April 24, 2027, or 1 year after the release of v2.4.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.1.12"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "June 7, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "June 8, 2027, or 1 year after the release of v2.3.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.1.11"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "April 30, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "May 1, 2027, or 1 year after the release of v2.3.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.1.10"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "February 26, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "February 27, 2027, or 1 year after the release of v2.3.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.1.9"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "January 10, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "January 11, 2027, or 1 year after the release of v2.3.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.1.8"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "December 4, 2023"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "December 5, 2026, or 1 year after the release of v2.3.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.1.7"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "October 20, 2023"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "October 21, 2026, or 1 year after the release of v2.3.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.1.6"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 19, 2023"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 20, 2026, or 1 year after the release of v2.3.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v2.1.4"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "August 16, 2023"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "August 17, 2026, or 1 year after the release of v2.3.x (whichever comes first)"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.5.3"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "October 17, 2022"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "August 17, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.5.2"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "October 12, 2022"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "August 17, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.5.1"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 1, 2022"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "August 17, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.5.0"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 27, 2022"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "August 17, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.10"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "March 1, 2022"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "August 17, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.9"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 19, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "August 17, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.7"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 19, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 20, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.6"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "June 21, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "June 22, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.5"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "April 30, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "May 1, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.4"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "April 20, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "April 21, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.3"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "February 10, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "February 11, 2024"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.2"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 23, 2020"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 24, 2023"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.1"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 30, 2020"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "October 1, 2023"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.4.0"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 1, 2020"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 2, 2023"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.3.0"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "May 11, 2020"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "May 12, 2023"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.2.2"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "December 13, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 2, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.2.1"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 29, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 2, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.2.0"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 6, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 2, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.1.0"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 18, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "May 12, 2021"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.0.1"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "August 1, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 7, 2020"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v1.0.0"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "July 24, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "November 7, 2020"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v0.9.3"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "June 7, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 19, 2020"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v0.9.2"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "May 8, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 19, 2020"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v0.9.1"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "April 4, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 19, 2020"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "v0.9.0"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "February 4, 2019"
  }, {
    heading: "signaling-version-retirement-schedule",
    content: "September 19, 2020"
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
    id: "account-settlement",
    content: "Account settlement"
  }, {
    id: "real-time-usage-and-estimated-bill",
    content: "Real-time usage and estimated bill"
  }, {
    id: "real-time-reservation-of-balance",
    content: "Real-time reservation of balance"
  }, {
    id: "auto-recharge-and-account-suspension",
    content: "Auto-recharge and account suspension"
  }, {
    id: "monthly-billing",
    content: "Monthly billing"
  }, {
    id: "balance-withdrawal",
    content: "Balance withdrawal"
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
  }, {
    id: "additional-information",
    content: "Additional information"
  }, {
    id: "signaling-version-retirement-schedule",
    content: "Signaling version retirement schedule"
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
    children: "Free account suspension "
  })
}, {
  depth: 2,
  url: "#account-settlement",
  title: _jsx(_Fragment, {
    children: "Account settlement"
  })
}, {
  depth: 3,
  url: "#real-time-usage-and-estimated-bill",
  title: _jsx(_Fragment, {
    children: "Real-time usage and estimated bill"
  })
}, {
  depth: 3,
  url: "#real-time-reservation-of-balance",
  title: _jsx(_Fragment, {
    children: "Real-time reservation of balance"
  })
}, {
  depth: 3,
  url: "#auto-recharge-and-account-suspension",
  title: _jsx(_Fragment, {
    children: "Auto-recharge and account suspension"
  })
}, {
  depth: 3,
  url: "#monthly-billing",
  title: _jsx(_Fragment, {
    children: "Monthly billing"
  })
}, {
  depth: 3,
  url: "#balance-withdrawal",
  title: _jsx(_Fragment, {
    children: "Balance withdrawal"
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
}, {
  depth: 3,
  url: "#additional-information",
  title: _jsx(_Fragment, {
    children: "Additional information"
  })
}, {
  depth: 3,
  url: "#signaling-version-retirement-schedule",
  title: _jsx(_Fragment, {
    children: "Signaling version retirement schedule"
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
`, _jsxs(_components.p, {
      children: ["If your account balance is negative after the deduction, Agora sends you an email, reminding you to ", _jsx(_components.a, {
        href: "./pricing",
        children: "top up your account"
      }), " at your earliest convenience and avoid account suspension."]
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
`, _jsx(_components.h4, {
      id: "free-account-suspension",
      children: "Free account suspension "
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
      children: "After account suspension, none of your projects can access Agora services. To restore access:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Add a credit card to your account or top up your balance using a bank account. This unfreezes your account and upgrades it to a paid account."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Purchase a ", _jsx(_components.a, {
            href: "./subscription-packages",
            children: "pre-paid monthly package"
          }), " or ", _jsx(_components.a, {
            href: "./subscription-packages",
            children: "top-up package"
          }), ". This option is highly recommended."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "account-settlement",
      children: "Account settlement"
    }), `
`, _jsx(_components.p, {
      children: "To ensure billing transparency and smooth service continuity, Agora implements real-time account balance reservation based on estimated usage across all Agora products for SSP customers. This does not apply to customers with a signed contract."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "For uninterrupted access to Agora's products and services, ensure at least one of the following:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Add a valid credit card for auto-recharge to your Agora account, ", _jsx(_components.strong, {
              children: "or"
            })]
          }), `
`, _jsx(_components.li, {
            children: "Maintain sufficient funds in your Agora Console balance to cover your estimated usage."
          }), `
`]
        })]
      })
    }), `
`, _jsx(_components.p, {
      children: "Agora employs the following policies to manage your account balance and ensure uninterrupted access to its products and services."
    }), `
`, _jsx(_components.h3, {
      id: "real-time-usage-and-estimated-bill",
      children: "Real-time usage and estimated bill"
    }), `
`, _jsxs(_components.p, {
      children: ["You can view your real-time usage and estimated monthly bill at any time by selecting ", _jsx(_components.strong, {
        children: "Billing"
      }), " in the Agora Console sidebar."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/bill-estimate-preview.png",
        alt: "bill estimate preview"
      })
    }), `
`, _jsx(_components.h3, {
      id: "real-time-reservation-of-balance",
      children: "Real-time reservation of balance"
    }), `
`, _jsx(_components.p, {
      children: "Your reserved balance is updated continuously based on your real-time bill estimation. The corresponding estimated amount is reserved from your available balance at all times."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/available-reserved-balance.png",
        alt: "Available and reserved balance"
      })
    }), `
`, _jsx(_components.h3, {
      id: "auto-recharge-and-account-suspension",
      children: "Auto-recharge and account suspension"
    }), `
`, _jsxs(_components.p, {
      children: ["On the ", _jsx(_components.strong, {
        children: "7th, 14th, 21st, and 28th"
      }), " of each calendar month (excluding February 28), if your available balance is in arrears by more than ", _jsx(_components.strong, {
        children: "$50"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If a valid credit card is linked, the system automatically recharges your balance to zero."
      }), `
`, _jsx(_components.li, {
        children: "If no credit card is linked, or if auto-recharge fails, a notification email is sent to you."
      }), `
`, _jsxs(_components.li, {
        children: ["Top up your wallet within the ", _jsx(_components.strong, {
          children: "24-hour grace period"
        }), " to avoid account suspension."]
      }), `
`, _jsx(_components.li, {
        children: "If your balance remains in arrears after 24 hours, your account is suspended until the balance is restored to zero or above."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "monthly-billing",
      children: "Monthly billing"
    }), `
`, _jsx(_components.p, {
      children: "Your final bill is issued monthly. After bill finalization:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Any overpaid amount is refunded to your balance."
      }), `
`, _jsx(_components.li, {
        children: "Any undercharged amount is deducted accordingly."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "balance-withdrawal",
      children: "Balance withdrawal"
    }), `
`, _jsx(_components.p, {
      children: "You can withdraw your available balance at any time directly from the Agora Console."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/withdraw-balance.png",
        alt: "Withdraw balance"
      })
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
    }), `
`, _jsx(_components.h3, {
      id: "additional-information",
      children: "Additional information"
    }), `
`, _jsx(_components.p, {
      children: "If you need more time to transition to the latest version of a product or service, contact your Agora account manager, partnership manager, or device manufacturer for assistance."
    }), `
`, _jsx(_components.p, {
      children: "Agora is committed to providing support throughout the lifecycle of its products and services to ensure the best possible developer experience."
    }), `
`, `
`, _jsx(_components.h3, {
      id: "signaling-version-retirement-schedule",
      children: "Signaling version retirement schedule"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Version"
          }), _jsx(_components.th, {
            children: "Release date"
          }), _jsx(_components.th, {
            children: "Retirement date"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.3.0"
          }), _jsx(_components.td, {
            children: "July 20, 2026"
          }), _jsx(_components.td, {
            children: "July 21, 2029, or 1 year after the release of v2.5.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.2.8"
          }), _jsx(_components.td, {
            children: "February 12, 2026"
          }), _jsx(_components.td, {
            children: "February 13, 2029, or 1 year after the release of v2.4.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.2.7"
          }), _jsx(_components.td, {
            children: "December 12, 2025"
          }), _jsx(_components.td, {
            children: "December 13, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.2.6"
          }), _jsx(_components.td, {
            children: "October 31, 2025"
          }), _jsx(_components.td, {
            children: "November 1, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.2.5"
          }), _jsx(_components.td, {
            children: "July 1, 2025"
          }), _jsx(_components.td, {
            children: "July 2, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.2.4"
          }), _jsx(_components.td, {
            children: "April 1, 2025"
          }), _jsx(_components.td, {
            children: "April 2, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.2.3"
          }), _jsx(_components.td, {
            children: "March 21, 2025"
          }), _jsx(_components.td, {
            children: "March 22, 2028, or 1 year after the release of v2.4.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.2.2"
          }), _jsx(_components.td, {
            children: "November 6, 2024"
          }), _jsx(_components.td, {
            children: "November 7, 2027, or 1 year after the release of v2.4.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.2.1"
          }), _jsx(_components.td, {
            children: "July 17, 2024"
          }), _jsx(_components.td, {
            children: "July 18, 2027, or 1 year after the release of v2.4.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.2.0"
          }), _jsx(_components.td, {
            children: "April 23, 2024"
          }), _jsx(_components.td, {
            children: "April 24, 2027, or 1 year after the release of v2.4.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.1.12"
          }), _jsx(_components.td, {
            children: "June 7, 2024"
          }), _jsx(_components.td, {
            children: "June 8, 2027, or 1 year after the release of v2.3.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.1.11"
          }), _jsx(_components.td, {
            children: "April 30, 2024"
          }), _jsx(_components.td, {
            children: "May 1, 2027, or 1 year after the release of v2.3.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.1.10"
          }), _jsx(_components.td, {
            children: "February 26, 2024"
          }), _jsx(_components.td, {
            children: "February 27, 2027, or 1 year after the release of v2.3.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.1.9"
          }), _jsx(_components.td, {
            children: "January 10, 2024"
          }), _jsx(_components.td, {
            children: "January 11, 2027, or 1 year after the release of v2.3.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.1.8"
          }), _jsx(_components.td, {
            children: "December 4, 2023"
          }), _jsx(_components.td, {
            children: "December 5, 2026, or 1 year after the release of v2.3.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.1.7"
          }), _jsx(_components.td, {
            children: "October 20, 2023"
          }), _jsx(_components.td, {
            children: "October 21, 2026, or 1 year after the release of v2.3.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.1.6"
          }), _jsx(_components.td, {
            children: "September 19, 2023"
          }), _jsx(_components.td, {
            children: "September 20, 2026, or 1 year after the release of v2.3.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v2.1.4"
          }), _jsx(_components.td, {
            children: "August 16, 2023"
          }), _jsx(_components.td, {
            children: "August 17, 2026, or 1 year after the release of v2.3.x (whichever comes first)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.5.3"
          }), _jsx(_components.td, {
            children: "October 17, 2022"
          }), _jsx(_components.td, {
            children: "August 17, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.5.2"
          }), _jsx(_components.td, {
            children: "October 12, 2022"
          }), _jsx(_components.td, {
            children: "August 17, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.5.1"
          }), _jsx(_components.td, {
            children: "September 1, 2022"
          }), _jsx(_components.td, {
            children: "August 17, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.5.0"
          }), _jsx(_components.td, {
            children: "July 27, 2022"
          }), _jsx(_components.td, {
            children: "August 17, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.10"
          }), _jsx(_components.td, {
            children: "March 1, 2022"
          }), _jsx(_components.td, {
            children: "August 17, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.9"
          }), _jsx(_components.td, {
            children: "November 19, 2021"
          }), _jsx(_components.td, {
            children: "August 17, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.7"
          }), _jsx(_components.td, {
            children: "July 19, 2021"
          }), _jsx(_components.td, {
            children: "July 20, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.6"
          }), _jsx(_components.td, {
            children: "June 21, 2021"
          }), _jsx(_components.td, {
            children: "June 22, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.5"
          }), _jsx(_components.td, {
            children: "April 30, 2021"
          }), _jsx(_components.td, {
            children: "May 1, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.4"
          }), _jsx(_components.td, {
            children: "April 20, 2021"
          }), _jsx(_components.td, {
            children: "April 21, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.3"
          }), _jsx(_components.td, {
            children: "February 10, 2021"
          }), _jsx(_components.td, {
            children: "February 11, 2024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.2"
          }), _jsx(_components.td, {
            children: "November 23, 2020"
          }), _jsx(_components.td, {
            children: "November 24, 2023"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.1"
          }), _jsx(_components.td, {
            children: "September 30, 2020"
          }), _jsx(_components.td, {
            children: "October 1, 2023"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.4.0"
          }), _jsx(_components.td, {
            children: "September 1, 2020"
          }), _jsx(_components.td, {
            children: "September 2, 2023"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.3.0"
          }), _jsx(_components.td, {
            children: "May 11, 2020"
          }), _jsx(_components.td, {
            children: "May 12, 2023"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.2.2"
          }), _jsx(_components.td, {
            children: "December 13, 2019"
          }), _jsx(_components.td, {
            children: "September 2, 2021"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.2.1"
          }), _jsx(_components.td, {
            children: "November 29, 2019"
          }), _jsx(_components.td, {
            children: "September 2, 2021"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.2.0"
          }), _jsx(_components.td, {
            children: "November 6, 2019"
          }), _jsx(_components.td, {
            children: "September 2, 2021"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.1.0"
          }), _jsx(_components.td, {
            children: "September 18, 2019"
          }), _jsx(_components.td, {
            children: "May 12, 2021"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.0.1"
          }), _jsx(_components.td, {
            children: "August 1, 2019"
          }), _jsx(_components.td, {
            children: "November 7, 2020"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v1.0.0"
          }), _jsx(_components.td, {
            children: "July 24, 2019"
          }), _jsx(_components.td, {
            children: "November 7, 2020"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v0.9.3"
          }), _jsx(_components.td, {
            children: "June 7, 2019"
          }), _jsx(_components.td, {
            children: "September 19, 2020"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v0.9.2"
          }), _jsx(_components.td, {
            children: "May 8, 2019"
          }), _jsx(_components.td, {
            children: "September 19, 2020"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v0.9.1"
          }), _jsx(_components.td, {
            children: "April 4, 2019"
          }), _jsx(_components.td, {
            children: "September 19, 2020"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "v0.9.0"
          }), _jsx(_components.td, {
            children: "February 4, 2019"
          }), _jsx(_components.td, {
            children: "September 19, 2020"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
