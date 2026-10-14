import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Agora now offers a simplified prepaid pricing model. Learn how prepaid packages work, how to estimate usage, and how to top up your account."
};
export let _markdown = `

This page explains the updated pricing for Agora Video Calling and guides you through the new pricing model.

<CalloutContainer type="info">
  <CalloutTitle>
    Information
  </CalloutTitle>

  <CalloutDescription>
    * Starting August 29, 2025, all new Agora customers are automatically subscribed to the RTC Free package when creating a new project in the Agora Console. This ensures you can start using our service immediately. If auto-subscription fails, you can subscribe manually. For assistance, contact [\`support@agora.io\`](mailto\\:support@agora.io).
    * If you are an existing Agora customer before August 29, 2025, your projects continue under the legacy billing model. For details, see [Legacy pricing](./pricing-legacy.mdx). You may also manually subscribe or upgrade in the Agora Console to switch to the new RTC pricing model.
    * If you have signed a sales contract with Agora, your billing follows the terms in your contract.
  </CalloutDescription>
</CalloutContainer>

Billing for Video Calling includes charges for the following service categories:

* [Basic service](#basic-service): Audio and video subscription service for hosts and audience.
* [Value-added services](#value-added-services): Independently billed services such as screenshot uploads, co-host across channels, Agora Hybrid Cloud, and other media services.

The following diagram shows the billing structure:

![Billing structure](https://assets-docs.agora.io/images/video-sdk/pricing-structure.png)

For post-payment, Agora follows a monthly billing cycle. At the end of each month, Agora calculates usage fees for all projects under the [Agora Console](https://console.agora.io/v2). Your previous month's charges are finalized on the 1st day of each month. If payment is required, deductions from your payment method occur on the 6th day of the month.

The following diagram walks you through how your usage is calculated and billed each month:

![Package usage workflow](https://assets-docs.agora.io/images/video-sdk/pricing-workflow.svg)

## Basic service [#basic-service]

Agora uses [standard minutes](#standard-minutes-calculator) to measure usage for all basic services. Audio and video usage is converted into Standard minutes according to the following conversion ratios:

| Service Type                               | Conversion Ratio | List Price/1000 min |
| :----------------------------------------- | :--------------: | ------------------: |
| Audio minute                               |       1 : 1      |               $0.99 |
| Video HD                                   |       1 : 4      |               $3.99 |
| Video Full HD                              |       1 : 9      |               $8.99 |
| Video 2K                                   |      1 : 16      |              $15.99 |
| Video 2K+                                  |      1 : 36      |              $35.99 |
| Broadcast Streaming Audience Audio         |     1 : 0.57     |               $0.59 |
| Broadcast Streaming Audience Video HD      |       1 : 2      |               $1.99 |
| Broadcast Streaming Audience Video Full HD |     1 : 4.57     |               $4.59 |
| Broadcast Streaming Audience Video 2K      |       1 : 8      |               $7.99 |
| Broadcast Streaming Audience Video 2K+     |      1 : 18      |              $17.99 |

<CalloutContainer type="info">
  <CalloutDescription>
    To estimate the standard minutes consumed for your use case, use the [Standard minutes calculator](#standard-minutes-calculator).
  </CalloutDescription>
</CalloutContainer>

### Subscription packages [#subscription-packages]

Agora deducts Standard minutes from the balance in your subscribed package. If you have not purchased a package, Agora provides a default Free package that includes 10,000 Standard minutes per month. The following table shows the available packages.

|                                                      |        Free        |         Starter        |           Pro          |        Business        |    Business Advanced   |      Business Plus     |  Enterprise |
| ---------------------------------------------------- | :----------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :---------: |
| **Minutes included**                                 |       10,000       |         50,000         |         150,000        |         400,000        |         800,000        |        1,500,000       | Pay per use |
| **List Price/month**                                 |          -         |       ~~$49.50~~       |       ~~$148.50~~      |       ~~$396.00~~      |       ~~$792.00~~      |      ~~$1,485.00~~     |      -      |
| **Price/month**                                      |     ***FREE***     |      ***$45.99***      |      ***$133.99***     |      ***$339.99***     |      ***$659.99***     |     ***$1,217.99***    |      -      |
| **You save**\\*                                       |          -         |           7%           |           10%          |           14%          |           16%          |           18%          |      -      |
| **Overuse policy**                                   | Service suspension | Overage protection\\*\\* | Overage protection\\*\\* | Overage protection\\*\\* | Overage protection\\*\\* | Overage protection\\*\\* |      -      |
| **Media encryption**                                 |          ✔         |            ✔           |            ✔           |            ✔           |            ✔           |            ✔           |      -      |
| **Analytics starter plan**                           |          ✔         |            ✔           |            ✔           |            ✔           |            ✔           |            ✔           |      -      |
| **Advanced audio processing**&#xA;(AGC, AEC and ANS) |          ✔         |            ✔           |            ✔           |            ✔           |            ✔           |            ✔           |      -      |

\\* The percentage is calculated based on the Standard minute (audio) rate ($0.99 per 1,000 minutes) and is already reflected in the package price.

\\*\\* Overage protection keeps your service running seamlessly. Overage charges are billed weekly to your prepaid balance or card on file, unless your contract specifies a different billing cycle.

**Additional usage cost** over and above the fixed package limits:

Standard Minutes $0.99 per 1000 Minutes.

**Note**: If overage charges cannot be covered by your available balance or a valid payment method on file, your account may be temporarily paused once your prepaid package quota is exhausted. Your account will be restored after all outstanding charges are settled.

<CalloutContainer type="warning">
  <CalloutTitle>
    Caution
  </CalloutTitle>

  <CalloutDescription>
    * When you purchase a paid package, the free minutes are reflected in the package price through discounts. The 10,000 free minutes per month no longer apply.
    * Different packages support different value-added features. Purchase a package that fits your business needs.
  </CalloutDescription>
</CalloutContainer>

For subscription, upgrade, downgrade and other package details, see [Subscription packages](/en/realtime-media/rtc/subscription-packages)

#### Additional usage [#additional-usage]

If your usage exceeds the minutes included in your subscribed package, you can:

* Upgrade to a package with more included minutes and higher discount (recommended)
* Purchase a [top-up package](#top-up-packages)
* Use monthly postpaid billing

### Top-up packages [#top-up-packages]

Agora offers the following top-up packages:

| Top-up minutes | Price         | Discount\\* |
| -------------- | ------------- | ---------- |
| 25,000         | ***$23.50***  | 5%         |
| 250,000        | ***$230.00*** | 7%         |
| 1,000,000      | ***$891.00*** | 10%        |

\\* The discount is calculated based on the Standard minute (audio) rate ($0.99 per 1,000 minutes) and is already reflected in the package price.

* Top-up minutes remain valid for one year.
* You can apply top-up to any package, including the Free package.

If you purchase a top-up package, Agora automatically deducts excess minutes from it when your usage exceeds the minutes in the subscribed package.

<CalloutContainer type="info">
  <CalloutTitle>
    Information
  </CalloutTitle>

  <CalloutDescription>
    * If you purchase a top-up package before the 1st of a month, the package covers usage from the previous month
    * Agora deducts usage on the 6th of each month.
      * From the 1st to the 6th day: Console shows remaining balance after last month’s settlement.
      * From the 7th day onwards: Console shows balance after current month’s deduction.
  </CalloutDescription>
</CalloutContainer>

#### Monthly postpaid billing [#monthly-postpaid-billing]

If your actual usage for the month exceeds both the subscribed package minutes and the minutes in the top-up package, Agora:

* Converts the overage use into Standard minutes
* Charges $0.99 per 1,000 Standard minutes at the time of settlement

<CalloutContainer type="warning">
  <CalloutTitle>
    Caution
  </CalloutTitle>

  <CalloutDescription>
    * Ensure your account has sufficient balance to prevent service interruption due to non-payment.
    * To switch to postpaid billing, contact [support@agora.io](mailto\\:support@agora.io). Postpaid billing requires a minimum monthly usage.
  </CalloutDescription>
</CalloutContainer>

### Billing example [#billing-example]

User A purchases the Premium Package on August 15.

* **August 15*&#x2A;: On purchase, User A pays:
  *$339.99* for the month of August.
* **August 25*&#x2A;: The package is automatically renewed for September.
  *$339.99* is deducted from the balance.
* **September 1**: August usage exceeds the package minutes by 100,000.
  *100,000 ÷ 1,000 × $0.99 = $99* is automatically deducted from your account.

## Value-added services [#value-added-services]

Use of RTC SDK value-added services may incur costs in addition to basic service charges. For billing details, refer to the corresponding pricing page:

* [Cloud Recording](/en/realtime-media/cloud-recording/reference/pricing)
* [Cloud Transcoding](/en/realtime-media/transcoding/reference/pricing)
* [Local screenshot upload](../build/add-advanced-video-features/screenshot-upload.mdx#pricing)
* [Media Push](/en/realtime-media/media-push/reference/pricing)
* [Media Pull](/en/realtime-media/media-pull/reference/pricing)
* [RTC associated features](./pricing-legacy.mdx#pricing-for-associated-features)

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

### Aggregate resolution [#aggregate-resolution]

Agora calculates video usage for each user based on aggregate resolution, which is the combined resolution of all video streams a user subscribes to. If a user subscribes to both audio and video at the same time, Agora counts this usage as video only.

The following table shows how usage tiers are applied based on aggregate resolution:

| Subscription Type | Aggregate Resolution                                    | Usage Tier    |
| ----------------- | ------------------------------------------------------- | ------------- |
| Audio Only        | –                                                       | Audio         |
| Video             | ≤ 921,600 (For example, 1280 × 720)                     | HD Video      |
| Video             | 921,600 \\< res ≤ 2,073,600 (For example, 1920 × 1080)   | Full HD Video |
| Video             | 2,073,600 \\< res ≤ 3,686,400 (For example, 2560 × 1440) | 2K Video      |
| Video             | > 3,686,400                                             | 2K+ Video     |

**Example 1**:

A user subscribes to the following streams:

* *1280 × 720*
* *1920 × 1080*

The aggregate resolution is: *(1280 × 720) + (1920 × 1080) = 2,995,200*
This falls in the range 2,073,600 to 3,686,400, so Agora counts this usage as **2K video**.

**Example 2**:

Five users join an interactive live video streaming channel at the same time for 60 minutes. There are three video streaming hosts (A, B, and C), each with a video resolution set to 960 × 720. Two users subscribe as audience to the video streams from the hosts. Additionally, Host A shares their screen with all other users in the channel. The resolution of the screen-sharing stream is set to and received at 1920 × 1080.

The following table shows the aggregate resolution for each user’s video stream subscriptions.

| **User**          | **Video streams subscribed**      | **Aggregate video resolution**  | **Total** | **Video type** |
| ----------------- | --------------------------------- | ------------------------------- | --------- | -------------- |
| Host A            | 2 hosts                           | 960 × 720 × 2                   | 1,382,400 | Full HD        |
| Host B            | 2 hosts + Host A’s screen sharing | (960 × 720 × 2) + (1920 × 1080) | 3,456,000 | 2K             |
| Host C            | 2 hosts + Host A’s screen sharing | (960 × 720 × 2) + (1920 × 1080) | 3,456,000 | 2K             |
| Audience Member 1 | 3 hosts + Host A’s screen sharing | (960 × 720 × 3) + (1920 × 1080) | 4,147,200 | 2K+            |
| Audience Member 2 | 3 hosts + Host A’s screen sharing | (960 × 720 × 3) + (1920 × 1080) | 4,147,200 | 2K+            |

### Standard duration calculation [#standard-duration-calculation]

Agora uses standard duration for unified billing. It is calculated using the following formula:

*Standard Duration = Usage Time × Conversion Coefficient*

| Role                         | Audio | HD Video | Full HD | 2K | 2K+ |
| ---------------------------- | ----- | -------- | ------- | -- | --- |
| Host                         | 1     | 4        | 9       | 16 | 36  |
| Interactive Live Audience    | 1     | 4        | 9       | 16 | 36  |
| Broadcast Streaming Audience | 0.57  | 2        | 4.57    | 8  | 18  |

When actual usage is converted to standard duration, Agora calculates the total at the second level and rounds up the final result to the nearest whole number (minute).

**Example:**

* The host’s HD video usage is 360 seconds
  → Standard duration: *360 × 4 = 1440 seconds*
* The audience’s audio usage is 360 seconds
  → Standard duration: *360 × 0.57 = 205.2 seconds*
* **Total:** *1440 + 205.2 = 1645.2 seconds = 27.42 minutes → Final billed: 28 minutes*

<CalloutContainer type="info">
  <CalloutDescription>
    This example is for illustrative purposes only. The actual billed duration is based on your project’s monthly report.
  </CalloutDescription>
</CalloutContainer>

### Standard minutes calculator [#standard-minutes-calculator]

The Standard minutes calculator helps you estimate usage of Standard minutes based on the number of hosts, the resolution of their published streams, and the number of audience members subscribing to those streams. Standard minutes are consumed based on user subscriptions. Use this tool to understand the pricing policy and estimate your monthly usage.

#### Standard Minutes Calculator [#standard-minutes-calculator-1]

<RTCMinutesCalculator />

<CalloutContainer type="warning">
  <CalloutTitle>
    Disclaimer
  </CalloutTitle>

  <CalloutDescription>
    The Standard minutes estimated by this calculator are indicative and may not match actual usage billing. Accuracy in all cases is not guaranteed, and the calculations should be used as estimates only. Actual billing is based on Agora's official pricing policy and conversion ratios, which may vary. Please refer to Agora's [Pricing](/en/realtime-media/rtc/reference/pricing) policy for complete and up-to-date information on Standard minutes conversion and billing.
  </CalloutDescription>
</CalloutContainer>

### FAQs [#faqs]

This section answers common billing-related questions.

#### Free minutes [#free-minutes]

<Accordions>
  <Accordion title="If I purchase a paid package, do I still get 10,000 free minutes each month?">
    **Answer**: No. You won't get additional 10,000 free minutes

    When you purchase a paid package, the free minutes are reflected in the package price through discounts. Higher-tier packages offer more free minutes. The 10,000 free minutes per month do not apply to paid packages.
  </Accordion>
</Accordions>

#### Billing [#billing]

<Accordions>
  <Accordion title="If a user doesn’t publish or subscribe to any audio or video streams in a channel, will they still be charged?">
    **Answer**:
    Yes. The audio subscription fees will apply.

    Even if a user does not actively subscribe to any streams, audio usage time is still generated in the channel, which results in audio subscription fees. Only audio usage is charged for publishing audio or video streams.
  </Accordion>
</Accordions>

#### Duration and usage [#duration-and-usage]

<Accordions>
  <Accordion title="How is usage duration calculated in the bill?">
    **Answer**:

    Agora tracks usage in seconds and then converts it to minutes for billing. At the end of each month, it calculates the total audio and video usage in seconds, divides each by 60, and rounds up to the nearest whole minute.

    For example:

    * If you use 59 seconds of audio, it is billed as **1 minute**.
    * If you use 61 seconds of video, it is billed as **2 minutes**.

    The rounding error per month is within **1 minute**.
  </Accordion>
</Accordions>

<Accordions>
  <Accordion title="Can I view individual user usage in the bill?">
    **Answer**: No.

    The bill only shows the total audio and video usage for all users across all projects under your Agora developer account.

    To check usage for an individual user, use the statistics reported by the SDK:

    * **Android:** \`onRtcStats\` callback → \`totalDuration\` property
    * **iOS:** \`reportRtcStats\` callback → \`duration\` property
    * **Windows:** \`onRtcStats\` callback → \`duration\` property
    * **macOS:** \`reportRtcStats\` callback → \`duration\` property

    <CalloutContainer type="info">
      <CalloutDescription>
        If a client disconnects due to poor network connection, the call duration reported by the SDK might be inaccurate.
        To improve accuracy, implement a heartbeat mechanism using the Agora Signaling SDK or another signaling system. Subtract the disconnection time from the RTC-reported duration to get a more precise call duration for the user.
      </CalloutDescription>
    </CalloutContainer>
  </Accordion>
</Accordions>

#### Video resolution [#video-resolution]

<Accordions>
  <Accordion title="Why is my applied billing rate for Ultra-HD when all users subscribe to 360 × 640 video streams?">
    **Answer**:

    Billing is based on the aggregate resolution, which is the total resolution of all subscribed video streams combined.

    Even if each individual stream is 360 × 640, subscribing to multiple streams can cause the aggregate resolution to exceed 1,280 × 720, which may qualify as Full HD Video or higher under Agora’s billing rules.
  </Accordion>
</Accordions>

<Accordions>
  <Accordion title="How is video stream resolution calculated in dual-stream mode?">
    **Answer**:

    In dual-stream mode, a user's video resolution is calculated based on the type of stream received:

    * If subscribed to the high-quality (large) stream, the aggregate resolution is based on the resolution set by the sender.
    * If subscribed to the low-quality (small) stream, the aggregate resolution is based on the actual resolution received.
    * If the high-quality stream is requested but the low-quality stream is delivered, for example, due to a poor network, the resolution is still calculated based on the actual resolution of the stream received.
  </Accordion>
</Accordions>

<Accordions>
  <Accordion title="How can I determine the resolution of a screen sharing video stream?">
    **Answer**:

    The resolution of a screen sharing video stream is determined by the video resolution you set in the relevant API or class. If no resolution is specified, the default resolution is used for billing.

    | **Platform** | **Class or Configuration**                 | **Default Resolution** |
    | ------------ | ------------------------------------------ | ---------------------- |
    | Android      | \`ScreenCaptureParameters\`                  | 1280 × 720             |
    | iOS          | \`AgoraScreenCaptureParameters2\`            | 1280 × 720             |
    | Windows      | \`ScreenCaptureParameters\`                  | 1920 × 1080            |
    | macOS        | \`AgoraScreenCaptureParameters\`             | 1920 × 1080            |
    | Web          | \`ScreenVideoTrackInitConfig.encoderConfig\` | 1920 × 1080            |

    <CalloutContainer type="info">
      <CalloutDescription>
        On the Web platform, some browsers may not support the resolution you set due to device and browser limitations. In such cases, billing is based on the actual captured resolution, not the configured value.
      </CalloutDescription>
    </CalloutContainer>
  </Accordion>
</Accordions>

<Accordions>
  <Accordion title="What is resolution calibration?">
    **Answer**:

    Resolution calibration refers to adjusting the resolution of a video stream to a standard value when calculating aggregate resolution.

    For example, a video stream with a resolution of **640 × 352** (225,280 pixels) is rounded up and treated as **640 × 360** (230,400 pixels) for billing purposes.
  </Accordion>
</Accordions>

#### Arrears [#arrears]

<Accordions>
  <Accordion title="What should I do if my account is frozen due to outstanding balance?">
    **Answer**:

    If your account is frozen, recharge it promptly. Once your balance meets or exceeds the minimum required amount, the account will be automatically unfrozen.

    To avoid service interruptions, Agora recommends monitoring deduction emails, recharge reminders, and account freeze warnings.

    For further details, see [What are Agora's policies on billing, fee deductions, and account suspension?](/en/realtime-media/rtc/reference/billing-policies#billing-and-account-policies)
  </Accordion>
</Accordions>

### See also [#see-also]

* [Billing policies and free-of-charge policy](/en/realtime-media/rtc/reference/billing-policies)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains the updated pricing for Agora Video Calling and guides you through the new pricing model."
  }, {
    heading: undefined,
    content: "Starting August 29, 2025, all new Agora customers are automatically subscribed to the RTC Free package when creating a new project in the Agora Console. This ensures you can start using our service immediately. If auto-subscription fails, you can subscribe manually. For assistance, contact `support@agora.io`."
  }, {
    heading: undefined,
    content: "If you are an existing Agora customer before August 29, 2025, your projects continue under the legacy billing model. For details, see Legacy pricing. You may also manually subscribe or upgrade in the Agora Console to switch to the new RTC pricing model."
  }, {
    heading: undefined,
    content: "If you have signed a sales contract with Agora, your billing follows the terms in your contract."
  }, {
    heading: undefined,
    content: "Billing for Video Calling includes charges for the following service categories:"
  }, {
    heading: undefined,
    content: "Basic service: Audio and video subscription service for hosts and audience."
  }, {
    heading: undefined,
    content: "Value-added services: Independently billed services such as screenshot uploads, co-host across channels, Agora Hybrid Cloud, and other media services."
  }, {
    heading: undefined,
    content: "The following diagram shows the billing structure:"
  }, {
    heading: undefined,
    content: "For post-payment, Agora follows a monthly billing cycle. At the end of each month, Agora calculates usage fees for all projects under the Agora Console. Your previous month's charges are finalized on the 1st day of each month. If payment is required, deductions from your payment method occur on the 6th day of the month."
  }, {
    heading: undefined,
    content: "The following diagram walks you through how your usage is calculated and billed each month:"
  }, {
    heading: "basic-service",
    content: "Agora uses standard minutes to measure usage for all basic services. Audio and video usage is converted into Standard minutes according to the following conversion ratios:"
  }, {
    heading: "basic-service",
    content: "Service Type"
  }, {
    heading: "basic-service",
    content: "Conversion Ratio"
  }, {
    heading: "basic-service",
    content: "List Price/1000 min"
  }, {
    heading: "basic-service",
    content: "Audio minute"
  }, {
    heading: "basic-service",
    content: "1 : 1"
  }, {
    heading: "basic-service",
    content: "$0.99"
  }, {
    heading: "basic-service",
    content: "Video HD"
  }, {
    heading: "basic-service",
    content: "1 : 4"
  }, {
    heading: "basic-service",
    content: "$3.99"
  }, {
    heading: "basic-service",
    content: "Video Full HD"
  }, {
    heading: "basic-service",
    content: "1 : 9"
  }, {
    heading: "basic-service",
    content: "$8.99"
  }, {
    heading: "basic-service",
    content: "Video 2K"
  }, {
    heading: "basic-service",
    content: "1 : 16"
  }, {
    heading: "basic-service",
    content: "$15.99"
  }, {
    heading: "basic-service",
    content: "Video 2K+"
  }, {
    heading: "basic-service",
    content: "1 : 36"
  }, {
    heading: "basic-service",
    content: "$35.99"
  }, {
    heading: "basic-service",
    content: "Broadcast Streaming Audience Audio"
  }, {
    heading: "basic-service",
    content: "1 : 0.57"
  }, {
    heading: "basic-service",
    content: "$0.59"
  }, {
    heading: "basic-service",
    content: "Broadcast Streaming Audience Video HD"
  }, {
    heading: "basic-service",
    content: "1 : 2"
  }, {
    heading: "basic-service",
    content: "$1.99"
  }, {
    heading: "basic-service",
    content: "Broadcast Streaming Audience Video Full HD"
  }, {
    heading: "basic-service",
    content: "1 : 4.57"
  }, {
    heading: "basic-service",
    content: "$4.59"
  }, {
    heading: "basic-service",
    content: "Broadcast Streaming Audience Video 2K"
  }, {
    heading: "basic-service",
    content: "1 : 8"
  }, {
    heading: "basic-service",
    content: "$7.99"
  }, {
    heading: "basic-service",
    content: "Broadcast Streaming Audience Video 2K+"
  }, {
    heading: "basic-service",
    content: "1 : 18"
  }, {
    heading: "basic-service",
    content: "$17.99"
  }, {
    heading: "basic-service",
    content: "To estimate the standard minutes consumed for your use case, use the Standard minutes calculator."
  }, {
    heading: "subscription-packages",
    content: "Agora deducts Standard minutes from the balance in your subscribed package. If you have not purchased a package, Agora provides a default Free package that includes 10,000 Standard minutes per month. The following table shows the available packages."
  }, {
    heading: "subscription-packages",
    content: "Free"
  }, {
    heading: "subscription-packages",
    content: "Starter"
  }, {
    heading: "subscription-packages",
    content: "Pro"
  }, {
    heading: "subscription-packages",
    content: "Business"
  }, {
    heading: "subscription-packages",
    content: "Business Advanced"
  }, {
    heading: "subscription-packages",
    content: "Business Plus"
  }, {
    heading: "subscription-packages",
    content: "Enterprise"
  }, {
    heading: "subscription-packages",
    content: "**Minutes included**"
  }, {
    heading: "subscription-packages",
    content: "10,000"
  }, {
    heading: "subscription-packages",
    content: "50,000"
  }, {
    heading: "subscription-packages",
    content: "150,000"
  }, {
    heading: "subscription-packages",
    content: "400,000"
  }, {
    heading: "subscription-packages",
    content: "800,000"
  }, {
    heading: "subscription-packages",
    content: "1,500,000"
  }, {
    heading: "subscription-packages",
    content: "Pay per use"
  }, {
    heading: "subscription-packages",
    content: "**List Price/month**"
  }, {
    heading: "subscription-packages",
    content: "-"
  }, {
    heading: "subscription-packages",
    content: "~~$49.50~~"
  }, {
    heading: "subscription-packages",
    content: "~~$148.50~~"
  }, {
    heading: "subscription-packages",
    content: "~~$396.00~~"
  }, {
    heading: "subscription-packages",
    content: "~~$792.00~~"
  }, {
    heading: "subscription-packages",
    content: "~~$1,485.00~~"
  }, {
    heading: "subscription-packages",
    content: "-"
  }, {
    heading: "subscription-packages",
    content: "**Price/month**"
  }, {
    heading: "subscription-packages",
    content: "***FREE***"
  }, {
    heading: "subscription-packages",
    content: "***$45.99***"
  }, {
    heading: "subscription-packages",
    content: "***$133.99***"
  }, {
    heading: "subscription-packages",
    content: "***$339.99***"
  }, {
    heading: "subscription-packages",
    content: "***$659.99***"
  }, {
    heading: "subscription-packages",
    content: "***$1,217.99***"
  }, {
    heading: "subscription-packages",
    content: "-"
  }, {
    heading: "subscription-packages",
    content: "**You save**\\*"
  }, {
    heading: "subscription-packages",
    content: "-"
  }, {
    heading: "subscription-packages",
    content: "7%"
  }, {
    heading: "subscription-packages",
    content: "10%"
  }, {
    heading: "subscription-packages",
    content: "14%"
  }, {
    heading: "subscription-packages",
    content: "16%"
  }, {
    heading: "subscription-packages",
    content: "18%"
  }, {
    heading: "subscription-packages",
    content: "-"
  }, {
    heading: "subscription-packages",
    content: "**Overuse policy**"
  }, {
    heading: "subscription-packages",
    content: "Service suspension"
  }, {
    heading: "subscription-packages",
    content: "Overage protection\\*\\*"
  }, {
    heading: "subscription-packages",
    content: "Overage protection\\*\\*"
  }, {
    heading: "subscription-packages",
    content: "Overage protection\\*\\*"
  }, {
    heading: "subscription-packages",
    content: "Overage protection\\*\\*"
  }, {
    heading: "subscription-packages",
    content: "Overage protection\\*\\*"
  }, {
    heading: "subscription-packages",
    content: "-"
  }, {
    heading: "subscription-packages",
    content: "**Media encryption**"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "-"
  }, {
    heading: "subscription-packages",
    content: "**Analytics starter plan**"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "-"
  }, {
    heading: "subscription-packages",
    content: "**Advanced audio processing**&#xA;(AGC, AEC and ANS)"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "✔"
  }, {
    heading: "subscription-packages",
    content: "-"
  }, {
    heading: "subscription-packages",
    content: "\\* The percentage is calculated based on the Standard minute (audio) rate ($0.99 per 1,000 minutes) and is already reflected in the package price."
  }, {
    heading: "subscription-packages",
    content: "\\*\\* Overage protection keeps your service running seamlessly. Overage charges are billed weekly to your prepaid balance or card on file, unless your contract specifies a different billing cycle."
  }, {
    heading: "subscription-packages",
    content: "**Additional usage cost** over and above the fixed package limits:"
  }, {
    heading: "subscription-packages",
    content: "Standard Minutes $0.99 per 1000 Minutes."
  }, {
    heading: "subscription-packages",
    content: "**Note**: If overage charges cannot be covered by your available balance or a valid payment method on file, your account may be temporarily paused once your prepaid package quota is exhausted. Your account will be restored after all outstanding charges are settled."
  }, {
    heading: "subscription-packages",
    content: "When you purchase a paid package, the free minutes are reflected in the package price through discounts. The 10,000 free minutes per month no longer apply."
  }, {
    heading: "subscription-packages",
    content: "Different packages support different value-added features. Purchase a package that fits your business needs."
  }, {
    heading: "subscription-packages",
    content: "For subscription, upgrade, downgrade and other package details, see Subscription packages"
  }, {
    heading: "additional-usage",
    content: "If your usage exceeds the minutes included in your subscribed package, you can:"
  }, {
    heading: "additional-usage",
    content: "Upgrade to a package with more included minutes and higher discount (recommended)"
  }, {
    heading: "additional-usage",
    content: "Purchase a top-up package"
  }, {
    heading: "additional-usage",
    content: "Use monthly postpaid billing"
  }, {
    heading: "top-up-packages",
    content: "Agora offers the following top-up packages:"
  }, {
    heading: "top-up-packages",
    content: "Top-up minutes"
  }, {
    heading: "top-up-packages",
    content: "Price"
  }, {
    heading: "top-up-packages",
    content: "Discount\\*"
  }, {
    heading: "top-up-packages",
    content: "25,000"
  }, {
    heading: "top-up-packages",
    content: "***$23.50***"
  }, {
    heading: "top-up-packages",
    content: "5%"
  }, {
    heading: "top-up-packages",
    content: "250,000"
  }, {
    heading: "top-up-packages",
    content: "***$230.00***"
  }, {
    heading: "top-up-packages",
    content: "7%"
  }, {
    heading: "top-up-packages",
    content: "1,000,000"
  }, {
    heading: "top-up-packages",
    content: "***$891.00***"
  }, {
    heading: "top-up-packages",
    content: "10%"
  }, {
    heading: "top-up-packages",
    content: "\\* The discount is calculated based on the Standard minute (audio) rate ($0.99 per 1,000 minutes) and is already reflected in the package price."
  }, {
    heading: "top-up-packages",
    content: "Top-up minutes remain valid for one year."
  }, {
    heading: "top-up-packages",
    content: "You can apply top-up to any package, including the Free package."
  }, {
    heading: "top-up-packages",
    content: "If you purchase a top-up package, Agora automatically deducts excess minutes from it when your usage exceeds the minutes in the subscribed package."
  }, {
    heading: "top-up-packages",
    content: "If you purchase a top-up package before the 1st of a month, the package covers usage from the previous month"
  }, {
    heading: "top-up-packages",
    content: "Agora deducts usage on the 6th of each month."
  }, {
    heading: "top-up-packages",
    content: "From the 1st to the 6th day: Console shows remaining balance after last month’s settlement."
  }, {
    heading: "top-up-packages",
    content: "From the 7th day onwards: Console shows balance after current month’s deduction."
  }, {
    heading: "monthly-postpaid-billing",
    content: "If your actual usage for the month exceeds both the subscribed package minutes and the minutes in the top-up package, Agora:"
  }, {
    heading: "monthly-postpaid-billing",
    content: "Converts the overage use into Standard minutes"
  }, {
    heading: "monthly-postpaid-billing",
    content: "Charges $0.99 per 1,000 Standard minutes at the time of settlement"
  }, {
    heading: "monthly-postpaid-billing",
    content: "Ensure your account has sufficient balance to prevent service interruption due to non-payment."
  }, {
    heading: "monthly-postpaid-billing",
    content: "To switch to postpaid billing, contact support\\@agora.io. Postpaid billing requires a minimum monthly usage."
  }, {
    heading: "billing-example",
    content: "User A purchases the Premium Package on August 15."
  }, {
    heading: "billing-example",
    content: `**August 15*&#x2A;: On purchase, User A pays:
*$339.99* for the month of August.`
  }, {
    heading: "billing-example",
    content: `**August 25*&#x2A;: The package is automatically renewed for September.
*$339.99* is deducted from the balance.`
  }, {
    heading: "billing-example",
    content: `**September 1**: August usage exceeds the package minutes by 100,000.
*100,000 ÷ 1,000 × $0.99 = $99* is automatically deducted from your account.`
  }, {
    heading: "value-added-services",
    content: "Use of RTC SDK value-added services may incur costs in addition to basic service charges. For billing details, refer to the corresponding pricing page:"
  }, {
    heading: "value-added-services",
    content: "Cloud Recording"
  }, {
    heading: "value-added-services",
    content: "Cloud Transcoding"
  }, {
    heading: "value-added-services",
    content: "Local screenshot upload"
  }, {
    heading: "value-added-services",
    content: "Media Push"
  }, {
    heading: "value-added-services",
    content: "Media Pull"
  }, {
    heading: "value-added-services",
    content: "RTC associated features"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "aggregate-resolution",
    content: "Agora calculates video usage for each user based on aggregate resolution, which is the combined resolution of all video streams a user subscribes to. If a user subscribes to both audio and video at the same time, Agora counts this usage as video only."
  }, {
    heading: "aggregate-resolution",
    content: "The following table shows how usage tiers are applied based on aggregate resolution:"
  }, {
    heading: "aggregate-resolution",
    content: "Subscription Type"
  }, {
    heading: "aggregate-resolution",
    content: "Aggregate Resolution"
  }, {
    heading: "aggregate-resolution",
    content: "Usage Tier"
  }, {
    heading: "aggregate-resolution",
    content: "Audio Only"
  }, {
    heading: "aggregate-resolution",
    content: "–"
  }, {
    heading: "aggregate-resolution",
    content: "Audio"
  }, {
    heading: "aggregate-resolution",
    content: "Video"
  }, {
    heading: "aggregate-resolution",
    content: "≤ 921,600 (For example, 1280 × 720)"
  }, {
    heading: "aggregate-resolution",
    content: "HD Video"
  }, {
    heading: "aggregate-resolution",
    content: "Video"
  }, {
    heading: "aggregate-resolution",
    content: "921,600 \\< res ≤ 2,073,600 (For example, 1920 × 1080)"
  }, {
    heading: "aggregate-resolution",
    content: "Full HD Video"
  }, {
    heading: "aggregate-resolution",
    content: "Video"
  }, {
    heading: "aggregate-resolution",
    content: "2,073,600 \\< res ≤ 3,686,400 (For example, 2560 × 1440)"
  }, {
    heading: "aggregate-resolution",
    content: "2K Video"
  }, {
    heading: "aggregate-resolution",
    content: "Video"
  }, {
    heading: "aggregate-resolution",
    content: "> 3,686,400"
  }, {
    heading: "aggregate-resolution",
    content: "2K+ Video"
  }, {
    heading: "aggregate-resolution",
    content: "**Example 1**:"
  }, {
    heading: "aggregate-resolution",
    content: "A user subscribes to the following streams:"
  }, {
    heading: "aggregate-resolution",
    content: "*1280 × 720*"
  }, {
    heading: "aggregate-resolution",
    content: "*1920 × 1080*"
  }, {
    heading: "aggregate-resolution",
    content: `The aggregate resolution is: *(1280 × 720) + (1920 × 1080) = 2,995,200*
This falls in the range 2,073,600 to 3,686,400, so Agora counts this usage as **2K video**.`
  }, {
    heading: "aggregate-resolution",
    content: "**Example 2**:"
  }, {
    heading: "aggregate-resolution",
    content: "Five users join an interactive live video streaming channel at the same time for 60 minutes. There are three video streaming hosts (A, B, and C), each with a video resolution set to 960 × 720. Two users subscribe as audience to the video streams from the hosts. Additionally, Host A shares their screen with all other users in the channel. The resolution of the screen-sharing stream is set to and received at 1920 × 1080."
  }, {
    heading: "aggregate-resolution",
    content: "The following table shows the aggregate resolution for each user’s video stream subscriptions."
  }, {
    heading: "aggregate-resolution",
    content: "**User**"
  }, {
    heading: "aggregate-resolution",
    content: "**Video streams subscribed**"
  }, {
    heading: "aggregate-resolution",
    content: "**Aggregate video resolution**"
  }, {
    heading: "aggregate-resolution",
    content: "**Total**"
  }, {
    heading: "aggregate-resolution",
    content: "**Video type**"
  }, {
    heading: "aggregate-resolution",
    content: "Host A"
  }, {
    heading: "aggregate-resolution",
    content: "2 hosts"
  }, {
    heading: "aggregate-resolution",
    content: "960 × 720 × 2"
  }, {
    heading: "aggregate-resolution",
    content: "1,382,400"
  }, {
    heading: "aggregate-resolution",
    content: "Full HD"
  }, {
    heading: "aggregate-resolution",
    content: "Host B"
  }, {
    heading: "aggregate-resolution",
    content: "2 hosts + Host A’s screen sharing"
  }, {
    heading: "aggregate-resolution",
    content: "(960 × 720 × 2) + (1920 × 1080)"
  }, {
    heading: "aggregate-resolution",
    content: "3,456,000"
  }, {
    heading: "aggregate-resolution",
    content: "2K"
  }, {
    heading: "aggregate-resolution",
    content: "Host C"
  }, {
    heading: "aggregate-resolution",
    content: "2 hosts + Host A’s screen sharing"
  }, {
    heading: "aggregate-resolution",
    content: "(960 × 720 × 2) + (1920 × 1080)"
  }, {
    heading: "aggregate-resolution",
    content: "3,456,000"
  }, {
    heading: "aggregate-resolution",
    content: "2K"
  }, {
    heading: "aggregate-resolution",
    content: "Audience Member 1"
  }, {
    heading: "aggregate-resolution",
    content: "3 hosts + Host A’s screen sharing"
  }, {
    heading: "aggregate-resolution",
    content: "(960 × 720 × 3) + (1920 × 1080)"
  }, {
    heading: "aggregate-resolution",
    content: "4,147,200"
  }, {
    heading: "aggregate-resolution",
    content: "2K+"
  }, {
    heading: "aggregate-resolution",
    content: "Audience Member 2"
  }, {
    heading: "aggregate-resolution",
    content: "3 hosts + Host A’s screen sharing"
  }, {
    heading: "aggregate-resolution",
    content: "(960 × 720 × 3) + (1920 × 1080)"
  }, {
    heading: "aggregate-resolution",
    content: "4,147,200"
  }, {
    heading: "aggregate-resolution",
    content: "2K+"
  }, {
    heading: "standard-duration-calculation",
    content: "Agora uses standard duration for unified billing. It is calculated using the following formula:"
  }, {
    heading: "standard-duration-calculation",
    content: "*Standard Duration = Usage Time × Conversion Coefficient*"
  }, {
    heading: "standard-duration-calculation",
    content: "Role"
  }, {
    heading: "standard-duration-calculation",
    content: "Audio"
  }, {
    heading: "standard-duration-calculation",
    content: "HD Video"
  }, {
    heading: "standard-duration-calculation",
    content: "Full HD"
  }, {
    heading: "standard-duration-calculation",
    content: "2K"
  }, {
    heading: "standard-duration-calculation",
    content: "2K+"
  }, {
    heading: "standard-duration-calculation",
    content: "Host"
  }, {
    heading: "standard-duration-calculation",
    content: "1"
  }, {
    heading: "standard-duration-calculation",
    content: "4"
  }, {
    heading: "standard-duration-calculation",
    content: "9"
  }, {
    heading: "standard-duration-calculation",
    content: "16"
  }, {
    heading: "standard-duration-calculation",
    content: "36"
  }, {
    heading: "standard-duration-calculation",
    content: "Interactive Live Audience"
  }, {
    heading: "standard-duration-calculation",
    content: "1"
  }, {
    heading: "standard-duration-calculation",
    content: "4"
  }, {
    heading: "standard-duration-calculation",
    content: "9"
  }, {
    heading: "standard-duration-calculation",
    content: "16"
  }, {
    heading: "standard-duration-calculation",
    content: "36"
  }, {
    heading: "standard-duration-calculation",
    content: "Broadcast Streaming Audience"
  }, {
    heading: "standard-duration-calculation",
    content: "0.57"
  }, {
    heading: "standard-duration-calculation",
    content: "2"
  }, {
    heading: "standard-duration-calculation",
    content: "4.57"
  }, {
    heading: "standard-duration-calculation",
    content: "8"
  }, {
    heading: "standard-duration-calculation",
    content: "18"
  }, {
    heading: "standard-duration-calculation",
    content: "When actual usage is converted to standard duration, Agora calculates the total at the second level and rounds up the final result to the nearest whole number (minute)."
  }, {
    heading: "standard-duration-calculation",
    content: "**Example:**"
  }, {
    heading: "standard-duration-calculation",
    content: `The host’s HD video usage is 360 seconds
→ Standard duration: *360 × 4 = 1440 seconds*`
  }, {
    heading: "standard-duration-calculation",
    content: `The audience’s audio usage is 360 seconds
→ Standard duration: *360 × 0.57 = 205.2 seconds*`
  }, {
    heading: "standard-duration-calculation",
    content: "**Total:** *1440 + 205.2 = 1645.2 seconds = 27.42 minutes → Final billed: 28 minutes*"
  }, {
    heading: "standard-duration-calculation",
    content: "This example is for illustrative purposes only. The actual billed duration is based on your project’s monthly report."
  }, {
    heading: "standard-minutes-calculator",
    content: "The Standard minutes calculator helps you estimate usage of Standard minutes based on the number of hosts, the resolution of their published streams, and the number of audience members subscribing to those streams. Standard minutes are consumed based on user subscriptions. Use this tool to understand the pricing policy and estimate your monthly usage."
  }, {
    heading: "standard-minutes-calculator-1",
    content: "The Standard minutes estimated by this calculator are indicative and may not match actual usage billing. Accuracy in all cases is not guaranteed, and the calculations should be used as estimates only. Actual billing is based on Agora's official pricing policy and conversion ratios, which may vary. Please refer to Agora's Pricing policy for complete and up-to-date information on Standard minutes conversion and billing."
  }, {
    heading: "faqs",
    content: "This section answers common billing-related questions."
  }, {
    heading: "free-minutes",
    content: "**Answer**: No. You won't get additional 10,000 free minutes"
  }, {
    heading: "free-minutes",
    content: "When you purchase a paid package, the free minutes are reflected in the package price through discounts. Higher-tier packages offer more free minutes. The 10,000 free minutes per month do not apply to paid packages."
  }, {
    heading: "billing",
    content: `**Answer**:
Yes. The audio subscription fees will apply.`
  }, {
    heading: "billing",
    content: "Even if a user does not actively subscribe to any streams, audio usage time is still generated in the channel, which results in audio subscription fees. Only audio usage is charged for publishing audio or video streams."
  }, {
    heading: "duration-and-usage",
    content: "**Answer**:"
  }, {
    heading: "duration-and-usage",
    content: "Agora tracks usage in seconds and then converts it to minutes for billing. At the end of each month, it calculates the total audio and video usage in seconds, divides each by 60, and rounds up to the nearest whole minute."
  }, {
    heading: "duration-and-usage",
    content: "For example:"
  }, {
    heading: "duration-and-usage",
    content: "If you use 59 seconds of audio, it is billed as **1 minute**."
  }, {
    heading: "duration-and-usage",
    content: "If you use 61 seconds of video, it is billed as **2 minutes**."
  }, {
    heading: "duration-and-usage",
    content: "The rounding error per month is within **1 minute**."
  }, {
    heading: "duration-and-usage",
    content: "**Answer**: No."
  }, {
    heading: "duration-and-usage",
    content: "The bill only shows the total audio and video usage for all users across all projects under your Agora developer account."
  }, {
    heading: "duration-and-usage",
    content: "To check usage for an individual user, use the statistics reported by the SDK:"
  }, {
    heading: "duration-and-usage",
    content: "**Android:** `onRtcStats` callback → `totalDuration` property"
  }, {
    heading: "duration-and-usage",
    content: "**iOS:** `reportRtcStats` callback → `duration` property"
  }, {
    heading: "duration-and-usage",
    content: "**Windows:** `onRtcStats` callback → `duration` property"
  }, {
    heading: "duration-and-usage",
    content: "**macOS:** `reportRtcStats` callback → `duration` property"
  }, {
    heading: "duration-and-usage",
    content: `If a client disconnects due to poor network connection, the call duration reported by the SDK might be inaccurate.
To improve accuracy, implement a heartbeat mechanism using the Agora Signaling SDK or another signaling system. Subtract the disconnection time from the RTC-reported duration to get a more precise call duration for the user.`
  }, {
    heading: "video-resolution",
    content: "**Answer**:"
  }, {
    heading: "video-resolution",
    content: "Billing is based on the aggregate resolution, which is the total resolution of all subscribed video streams combined."
  }, {
    heading: "video-resolution",
    content: "Even if each individual stream is 360 × 640, subscribing to multiple streams can cause the aggregate resolution to exceed 1,280 × 720, which may qualify as Full HD Video or higher under Agora’s billing rules."
  }, {
    heading: "video-resolution",
    content: "**Answer**:"
  }, {
    heading: "video-resolution",
    content: "In dual-stream mode, a user's video resolution is calculated based on the type of stream received:"
  }, {
    heading: "video-resolution",
    content: "If subscribed to the high-quality (large) stream, the aggregate resolution is based on the resolution set by the sender."
  }, {
    heading: "video-resolution",
    content: "If subscribed to the low-quality (small) stream, the aggregate resolution is based on the actual resolution received."
  }, {
    heading: "video-resolution",
    content: "If the high-quality stream is requested but the low-quality stream is delivered, for example, due to a poor network, the resolution is still calculated based on the actual resolution of the stream received."
  }, {
    heading: "video-resolution",
    content: "**Answer**:"
  }, {
    heading: "video-resolution",
    content: "The resolution of a screen sharing video stream is determined by the video resolution you set in the relevant API or class. If no resolution is specified, the default resolution is used for billing."
  }, {
    heading: "video-resolution",
    content: "**Platform**"
  }, {
    heading: "video-resolution",
    content: "**Class or Configuration**"
  }, {
    heading: "video-resolution",
    content: "**Default Resolution**"
  }, {
    heading: "video-resolution",
    content: "Android"
  }, {
    heading: "video-resolution",
    content: "`ScreenCaptureParameters`"
  }, {
    heading: "video-resolution",
    content: "1280 × 720"
  }, {
    heading: "video-resolution",
    content: "iOS"
  }, {
    heading: "video-resolution",
    content: "`AgoraScreenCaptureParameters2`"
  }, {
    heading: "video-resolution",
    content: "1280 × 720"
  }, {
    heading: "video-resolution",
    content: "Windows"
  }, {
    heading: "video-resolution",
    content: "`ScreenCaptureParameters`"
  }, {
    heading: "video-resolution",
    content: "1920 × 1080"
  }, {
    heading: "video-resolution",
    content: "macOS"
  }, {
    heading: "video-resolution",
    content: "`AgoraScreenCaptureParameters`"
  }, {
    heading: "video-resolution",
    content: "1920 × 1080"
  }, {
    heading: "video-resolution",
    content: "Web"
  }, {
    heading: "video-resolution",
    content: "`ScreenVideoTrackInitConfig.encoderConfig`"
  }, {
    heading: "video-resolution",
    content: "1920 × 1080"
  }, {
    heading: "video-resolution",
    content: "On the Web platform, some browsers may not support the resolution you set due to device and browser limitations. In such cases, billing is based on the actual captured resolution, not the configured value."
  }, {
    heading: "video-resolution",
    content: "**Answer**:"
  }, {
    heading: "video-resolution",
    content: "Resolution calibration refers to adjusting the resolution of a video stream to a standard value when calculating aggregate resolution."
  }, {
    heading: "video-resolution",
    content: "For example, a video stream with a resolution of **640 × 352** (225,280 pixels) is rounded up and treated as **640 × 360** (230,400 pixels) for billing purposes."
  }, {
    heading: "arrears",
    content: "**Answer**:"
  }, {
    heading: "arrears",
    content: "If your account is frozen, recharge it promptly. Once your balance meets or exceeds the minimum required amount, the account will be automatically unfrozen."
  }, {
    heading: "arrears",
    content: "To avoid service interruptions, Agora recommends monitoring deduction emails, recharge reminders, and account freeze warnings."
  }, {
    heading: "arrears",
    content: "For further details, see What are Agora's policies on billing, fee deductions, and account suspension?"
  }, {
    heading: "see-also",
    content: "Billing policies and free-of-charge policy"
  }],
  headings: [{
    id: "basic-service",
    content: "Basic service"
  }, {
    id: "subscription-packages",
    content: "Subscription packages"
  }, {
    id: "additional-usage",
    content: "Additional usage"
  }, {
    id: "top-up-packages",
    content: "Top-up packages"
  }, {
    id: "monthly-postpaid-billing",
    content: "Monthly postpaid billing"
  }, {
    id: "billing-example",
    content: "Billing example"
  }, {
    id: "value-added-services",
    content: "Value-added services"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "aggregate-resolution",
    content: "Aggregate resolution"
  }, {
    id: "standard-duration-calculation",
    content: "Standard duration calculation"
  }, {
    id: "standard-minutes-calculator",
    content: "Standard minutes calculator"
  }, {
    id: "standard-minutes-calculator-1",
    content: "Standard Minutes Calculator"
  }, {
    id: "faqs",
    content: "FAQs"
  }, {
    id: "free-minutes",
    content: "Free minutes"
  }, {
    id: "billing",
    content: "Billing"
  }, {
    id: "duration-and-usage",
    content: "Duration and usage"
  }, {
    id: "video-resolution",
    content: "Video resolution"
  }, {
    id: "arrears",
    content: "Arrears"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
  depth: 2,
  url: "#basic-service",
  title: _jsx(_Fragment, {
    children: "Basic service"
  })
}, {
  depth: 3,
  url: "#subscription-packages",
  title: _jsx(_Fragment, {
    children: "Subscription packages"
  })
}, {
  depth: 4,
  url: "#additional-usage",
  title: _jsx(_Fragment, {
    children: "Additional usage"
  })
}, {
  depth: 3,
  url: "#top-up-packages",
  title: _jsx(_Fragment, {
    children: "Top-up packages"
  })
}, {
  depth: 4,
  url: "#monthly-postpaid-billing",
  title: _jsx(_Fragment, {
    children: "Monthly postpaid billing"
  })
}, {
  depth: 3,
  url: "#billing-example",
  title: _jsx(_Fragment, {
    children: "Billing example"
  })
}, {
  depth: 2,
  url: "#value-added-services",
  title: _jsx(_Fragment, {
    children: "Value-added services"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#aggregate-resolution",
  title: _jsx(_Fragment, {
    children: "Aggregate resolution"
  })
}, {
  depth: 3,
  url: "#standard-duration-calculation",
  title: _jsx(_Fragment, {
    children: "Standard duration calculation"
  })
}, {
  depth: 3,
  url: "#standard-minutes-calculator",
  title: _jsx(_Fragment, {
    children: "Standard minutes calculator"
  })
}, {
  depth: 4,
  url: "#standard-minutes-calculator-1",
  title: _jsx(_Fragment, {
    children: "Standard Minutes Calculator"
  })
}, {
  depth: 3,
  url: "#faqs",
  title: _jsx(_Fragment, {
    children: "FAQs"
  })
}, {
  depth: 4,
  url: "#free-minutes",
  title: _jsx(_Fragment, {
    children: "Free minutes"
  })
}, {
  depth: 4,
  url: "#billing",
  title: _jsx(_Fragment, {
    children: "Billing"
  })
}, {
  depth: 4,
  url: "#duration-and-usage",
  title: _jsx(_Fragment, {
    children: "Duration and usage"
  })
}, {
  depth: 4,
  url: "#video-resolution",
  title: _jsx(_Fragment, {
    children: "Video resolution"
  })
}, {
  depth: 4,
  url: "#arrears",
  title: _jsx(_Fragment, {
    children: "Arrears"
  })
}, {
  depth: 3,
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
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
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, CalloutTitle, RTCMinutesCalculator } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!RTCMinutesCalculator)
    _missingMdxReference("RTCMinutesCalculator", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page explains the updated pricing for Agora Video Calling and guides you through the new pricing model."
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Information"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Starting August 29, 2025, all new Agora customers are automatically subscribed to the RTC Free package when creating a new project in the Agora Console. This ensures you can start using our service immediately. If auto-subscription fails, you can subscribe manually. For assistance, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: _jsx(_components.code, {
                children: "support@agora.io"
              })
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If you are an existing Agora customer before August 29, 2025, your projects continue under the legacy billing model. For details, see ", _jsx(_components.a, {
              href: "./pricing-legacy.mdx",
              children: "Legacy pricing"
            }), ". You may also manually subscribe or upgrade in the Agora Console to switch to the new RTC pricing model."]
          }), `
`, _jsx(_components.li, {
            children: "If you have signed a sales contract with Agora, your billing follows the terms in your contract."
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "Billing for Video Calling includes charges for the following service categories:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#basic-service",
          children: "Basic service"
        }), ": Audio and video subscription service for hosts and audience."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#value-added-services",
          children: "Value-added services"
        }), ": Independently billed services such as screenshot uploads, co-host across channels, Agora Hybrid Cloud, and other media services."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following diagram shows the billing structure:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/video-sdk/pricing-structure.png",
        alt: "Billing structure"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["For post-payment, Agora follows a monthly billing cycle. At the end of each month, Agora calculates usage fees for all projects under the ", _jsx(_components.a, {
        href: "https://console.agora.io/v2",
        children: "Agora Console"
      }), ". Your previous month's charges are finalized on the 1st day of each month. If payment is required, deductions from your payment method occur on the 6th day of the month."]
    }), `
`, _jsx(_components.p, {
      children: "The following diagram walks you through how your usage is calculated and billed each month:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/video-sdk/pricing-workflow.svg",
        alt: "Package usage workflow"
      })
    }), `
`, _jsx(_components.h2, {
      id: "basic-service",
      children: "Basic service"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora uses ", _jsx(_components.a, {
        href: "#standard-minutes-calculator",
        children: "standard minutes"
      }), " to measure usage for all basic services. Audio and video usage is converted into Standard minutes according to the following conversion ratios:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Service Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Conversion Ratio"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "List Price/1000 min"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio minute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 1"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$0.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video HD"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 4"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$3.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video Full HD"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 9"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$8.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video 2K"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 16"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$15.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video 2K+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 36"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$35.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Broadcast Streaming Audience Audio"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 0.57"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$0.59"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Broadcast Streaming Audience Video HD"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 2"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$1.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Broadcast Streaming Audience Video Full HD"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 4.57"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$4.59"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Broadcast Streaming Audience Video 2K"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 8"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$7.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Broadcast Streaming Audience Video 2K+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 : 18"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "$17.99"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To estimate the standard minutes consumed for your use case, use the ", _jsx(_components.a, {
            href: "#standard-minutes-calculator",
            children: "Standard minutes calculator"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "subscription-packages",
      children: "Subscription packages"
    }), `
`, _jsx(_components.p, {
      children: "Agora deducts Standard minutes from the balance in your subscribed package. If you have not purchased a package, Agora provides a default Free package that includes 10,000 Standard minutes per month. The following table shows the available packages."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {}), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Free"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pro"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Business"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Business Advanced"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Business Plus"
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
            children: _jsx(_components.strong, {
              children: "Minutes included"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "150,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "400,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "800,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1,500,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Pay per use"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "List Price/month"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.del, {
              children: "$49.50"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.del, {
              children: "$148.50"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.del, {
              children: "$396.00"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.del, {
              children: "$792.00"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.del, {
              children: "$1,485.00"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Price/month"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.em, {
              children: _jsx(_components.strong, {
                children: "FREE"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.em, {
              children: _jsx(_components.strong, {
                children: "$45.99"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.em, {
              children: _jsx(_components.strong, {
                children: "$133.99"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.em, {
              children: _jsx(_components.strong, {
                children: "$339.99"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.em, {
              children: _jsx(_components.strong, {
                children: "$659.99"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.em, {
              children: _jsx(_components.strong, {
                children: "$1,217.99"
              })
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "You save"
            }), "*"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "14%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "16%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "18%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Overuse policy"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Service suspension"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Overage protection**"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Overage protection**"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Overage protection**"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Overage protection**"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Overage protection**"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Media encryption"
            })
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
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Analytics starter plan"
            })
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
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Advanced audio processing"
              }), `
(AGC, AEC and ANS)`]
            })
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
            children: "-"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "* The percentage is calculated based on the Standard minute (audio) rate ($0.99 per 1,000 minutes) and is already reflected in the package price."
    }), `
`, _jsx(_components.p, {
      children: "** Overage protection keeps your service running seamlessly. Overage charges are billed weekly to your prepaid balance or card on file, unless your contract specifies a different billing cycle."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Additional usage cost"
      }), " over and above the fixed package limits:"]
    }), `
`, _jsx(_components.p, {
      children: "Standard Minutes $0.99 per 1000 Minutes."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Note"
      }), ": If overage charges cannot be covered by your available balance or a valid payment method on file, your account may be temporarily paused once your prepaid package quota is exhausted. Your account will be restored after all outstanding charges are settled."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Caution"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "When you purchase a paid package, the free minutes are reflected in the package price through discounts. The 10,000 free minutes per month no longer apply."
          }), `
`, _jsx(_components.li, {
            children: "Different packages support different value-added features. Purchase a package that fits your business needs."
          }), `
`]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For subscription, upgrade, downgrade and other package details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/subscription-packages",
        children: "Subscription packages"
      })]
    }), `
`, _jsx(_components.h4, {
      id: "additional-usage",
      children: "Additional usage"
    }), `
`, _jsx(_components.p, {
      children: "If your usage exceeds the minutes included in your subscribed package, you can:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Upgrade to a package with more included minutes and higher discount (recommended)"
      }), `
`, _jsxs(_components.li, {
        children: ["Purchase a ", _jsx(_components.a, {
          href: "#top-up-packages",
          children: "top-up package"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Use monthly postpaid billing"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "top-up-packages",
      children: "Top-up packages"
    }), `
`, _jsx(_components.p, {
      children: "Agora offers the following top-up packages:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Top-up minutes"
          }), _jsx(_components.th, {
            children: "Price"
          }), _jsx(_components.th, {
            children: "Discount*"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "25,000"
          }), _jsx(_components.td, {
            children: _jsx(_components.em, {
              children: _jsx(_components.strong, {
                children: "$23.50"
              })
            })
          }), _jsx(_components.td, {
            children: "5%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "250,000"
          }), _jsx(_components.td, {
            children: _jsx(_components.em, {
              children: _jsx(_components.strong, {
                children: "$230.00"
              })
            })
          }), _jsx(_components.td, {
            children: "7%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1,000,000"
          }), _jsx(_components.td, {
            children: _jsx(_components.em, {
              children: _jsx(_components.strong, {
                children: "$891.00"
              })
            })
          }), _jsx(_components.td, {
            children: "10%"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "* The discount is calculated based on the Standard minute (audio) rate ($0.99 per 1,000 minutes) and is already reflected in the package price."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Top-up minutes remain valid for one year."
      }), `
`, _jsx(_components.li, {
        children: "You can apply top-up to any package, including the Free package."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If you purchase a top-up package, Agora automatically deducts excess minutes from it when your usage exceeds the minutes in the subscribed package."
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Information"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If you purchase a top-up package before the 1st of a month, the package covers usage from the previous month"
          }), `
`, _jsxs(_components.li, {
            children: ["Agora deducts usage on the 6th of each month.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "From the 1st to the 6th day: Console shows remaining balance after last month’s settlement."
              }), `
`, _jsx(_components.li, {
                children: "From the 7th day onwards: Console shows balance after current month’s deduction."
              }), `
`]
            }), `
`]
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "monthly-postpaid-billing",
      children: "Monthly postpaid billing"
    }), `
`, _jsx(_components.p, {
      children: "If your actual usage for the month exceeds both the subscribed package minutes and the minutes in the top-up package, Agora:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Converts the overage use into Standard minutes"
      }), `
`, _jsx(_components.li, {
        children: "Charges $0.99 per 1,000 Standard minutes at the time of settlement"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Caution"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Ensure your account has sufficient balance to prevent service interruption due to non-payment."
          }), `
`, _jsxs(_components.li, {
            children: ["To switch to postpaid billing, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), ". Postpaid billing requires a minimum monthly usage."]
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "billing-example",
      children: "Billing example"
    }), `
`, _jsx(_components.p, {
      children: "User A purchases the Premium Package on August 15."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "August 15"
        }), `: On purchase, User A pays:
`, _jsx(_components.em, {
          children: "$339.99"
        }), " for the month of August."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "August 25"
        }), `: The package is automatically renewed for September.
`, _jsx(_components.em, {
          children: "$339.99"
        }), " is deducted from the balance."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "September 1"
        }), `: August usage exceeds the package minutes by 100,000.
`, _jsx(_components.em, {
          children: "100,000 ÷ 1,000 × $0.99 = $99"
        }), " is automatically deducted from your account."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "value-added-services",
      children: "Value-added services"
    }), `
`, _jsx(_components.p, {
      children: "Use of RTC SDK value-added services may incur costs in addition to basic service charges. For billing details, refer to the corresponding pricing page:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/reference/pricing",
          children: "Cloud Recording"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/transcoding/reference/pricing",
          children: "Cloud Transcoding"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/add-advanced-video-features/screenshot-upload.mdx#pricing",
          children: "Local screenshot upload"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/media-push/reference/pricing",
          children: "Media Push"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/media-pull/reference/pricing",
          children: "Media Pull"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./pricing-legacy.mdx#pricing-for-associated-features",
          children: "RTC associated features"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsx(_components.h3, {
      id: "aggregate-resolution",
      children: "Aggregate resolution"
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates video usage for each user based on aggregate resolution, which is the combined resolution of all video streams a user subscribes to. If a user subscribes to both audio and video at the same time, Agora counts this usage as video only."
    }), `
`, _jsx(_components.p, {
      children: "The following table shows how usage tiers are applied based on aggregate resolution:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Subscription Type"
          }), _jsx(_components.th, {
            children: "Aggregate Resolution"
          }), _jsx(_components.th, {
            children: "Usage Tier"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio Only"
          }), _jsx(_components.td, {
            children: "–"
          }), _jsx(_components.td, {
            children: "Audio"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video"
          }), _jsx(_components.td, {
            children: "≤ 921,600 (For example, 1280 × 720)"
          }), _jsx(_components.td, {
            children: "HD Video"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video"
          }), _jsx(_components.td, {
            children: "921,600 < res ≤ 2,073,600 (For example, 1920 × 1080)"
          }), _jsx(_components.td, {
            children: "Full HD Video"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video"
          }), _jsx(_components.td, {
            children: "2,073,600 < res ≤ 3,686,400 (For example, 2560 × 1440)"
          }), _jsx(_components.td, {
            children: "2K Video"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video"
          }), _jsx(_components.td, {
            children: "> 3,686,400"
          }), _jsx(_components.td, {
            children: "2K+ Video"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example 1"
      }), ":"]
    }), `
`, _jsx(_components.p, {
      children: "A user subscribes to the following streams:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.em, {
          children: "1280 × 720"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.em, {
          children: "1920 × 1080"
        })
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The aggregate resolution is: ", _jsx(_components.em, {
        children: "(1280 × 720) + (1920 × 1080) = 2,995,200"
      }), `
This falls in the range 2,073,600 to 3,686,400, so Agora counts this usage as `, _jsx(_components.strong, {
        children: "2K video"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example 2"
      }), ":"]
    }), `
`, _jsx(_components.p, {
      children: "Five users join an interactive live video streaming channel at the same time for 60 minutes. There are three video streaming hosts (A, B, and C), each with a video resolution set to 960 × 720. Two users subscribe as audience to the video streams from the hosts. Additionally, Host A shares their screen with all other users in the channel. The resolution of the screen-sharing stream is set to and received at 1920 × 1080."
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the aggregate resolution for each user’s video stream subscriptions."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.strong, {
              children: "User"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.strong, {
              children: "Video streams subscribed"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.strong, {
              children: "Aggregate video resolution"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.strong, {
              children: "Total"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.strong, {
              children: "Video type"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Host A"
          }), _jsx(_components.td, {
            children: "2 hosts"
          }), _jsx(_components.td, {
            children: "960 × 720 × 2"
          }), _jsx(_components.td, {
            children: "1,382,400"
          }), _jsx(_components.td, {
            children: "Full HD"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Host B"
          }), _jsx(_components.td, {
            children: "2 hosts + Host A’s screen sharing"
          }), _jsx(_components.td, {
            children: "(960 × 720 × 2) + (1920 × 1080)"
          }), _jsx(_components.td, {
            children: "3,456,000"
          }), _jsx(_components.td, {
            children: "2K"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Host C"
          }), _jsx(_components.td, {
            children: "2 hosts + Host A’s screen sharing"
          }), _jsx(_components.td, {
            children: "(960 × 720 × 2) + (1920 × 1080)"
          }), _jsx(_components.td, {
            children: "3,456,000"
          }), _jsx(_components.td, {
            children: "2K"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audience Member 1"
          }), _jsx(_components.td, {
            children: "3 hosts + Host A’s screen sharing"
          }), _jsx(_components.td, {
            children: "(960 × 720 × 3) + (1920 × 1080)"
          }), _jsx(_components.td, {
            children: "4,147,200"
          }), _jsx(_components.td, {
            children: "2K+"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audience Member 2"
          }), _jsx(_components.td, {
            children: "3 hosts + Host A’s screen sharing"
          }), _jsx(_components.td, {
            children: "(960 × 720 × 3) + (1920 × 1080)"
          }), _jsx(_components.td, {
            children: "4,147,200"
          }), _jsx(_components.td, {
            children: "2K+"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "standard-duration-calculation",
      children: "Standard duration calculation"
    }), `
`, _jsx(_components.p, {
      children: "Agora uses standard duration for unified billing. It is calculated using the following formula:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: "Standard Duration = Usage Time × Conversion Coefficient"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Role"
          }), _jsx(_components.th, {
            children: "Audio"
          }), _jsx(_components.th, {
            children: "HD Video"
          }), _jsx(_components.th, {
            children: "Full HD"
          }), _jsx(_components.th, {
            children: "2K"
          }), _jsx(_components.th, {
            children: "2K+"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Host"
          }), _jsx(_components.td, {
            children: "1"
          }), _jsx(_components.td, {
            children: "4"
          }), _jsx(_components.td, {
            children: "9"
          }), _jsx(_components.td, {
            children: "16"
          }), _jsx(_components.td, {
            children: "36"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Interactive Live Audience"
          }), _jsx(_components.td, {
            children: "1"
          }), _jsx(_components.td, {
            children: "4"
          }), _jsx(_components.td, {
            children: "9"
          }), _jsx(_components.td, {
            children: "16"
          }), _jsx(_components.td, {
            children: "36"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Broadcast Streaming Audience"
          }), _jsx(_components.td, {
            children: "0.57"
          }), _jsx(_components.td, {
            children: "2"
          }), _jsx(_components.td, {
            children: "4.57"
          }), _jsx(_components.td, {
            children: "8"
          }), _jsx(_components.td, {
            children: "18"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "When actual usage is converted to standard duration, Agora calculates the total at the second level and rounds up the final result to the nearest whole number (minute)."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example:"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`The host’s HD video usage is 360 seconds
→ Standard duration: `, _jsx(_components.em, {
          children: "360 × 4 = 1440 seconds"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [`The audience’s audio usage is 360 seconds
→ Standard duration: `, _jsx(_components.em, {
          children: "360 × 0.57 = 205.2 seconds"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Total:"
        }), " ", _jsx(_components.em, {
          children: "1440 + 205.2 = 1645.2 seconds = 27.42 minutes → Final billed: 28 minutes"
        })]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This example is for illustrative purposes only. The actual billed duration is based on your project’s monthly report."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "standard-minutes-calculator",
      children: "Standard minutes calculator"
    }), `
`, _jsx(_components.p, {
      children: "The Standard minutes calculator helps you estimate usage of Standard minutes based on the number of hosts, the resolution of their published streams, and the number of audience members subscribing to those streams. Standard minutes are consumed based on user subscriptions. Use this tool to understand the pricing policy and estimate your monthly usage."
    }), `
`, _jsx(_components.h4, {
      id: "standard-minutes-calculator-1",
      children: "Standard Minutes Calculator"
    }), `
`, _jsx(RTCMinutesCalculator, {}), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Disclaimer"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["The Standard minutes estimated by this calculator are indicative and may not match actual usage billing. Accuracy in all cases is not guaranteed, and the calculations should be used as estimates only. Actual billing is based on Agora's official pricing policy and conversion ratios, which may vary. Please refer to Agora's ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/pricing",
            children: "Pricing"
          }), " policy for complete and up-to-date information on Standard minutes conversion and billing."]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "faqs",
      children: "FAQs"
    }), `
`, _jsx(_components.p, {
      children: "This section answers common billing-related questions."
    }), `
`, _jsx(_components.h4, {
      id: "free-minutes",
      children: "Free minutes"
    }), `
`, _jsx(Accordions, {
      children: _jsxs(Accordion, {
        title: "If I purchase a paid package, do I still get 10,000 free minutes each month?",
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Answer"
          }), ": No. You won't get additional 10,000 free minutes"]
        }), _jsx(_components.p, {
          children: "When you purchase a paid package, the free minutes are reflected in the package price through discounts. Higher-tier packages offer more free minutes. The 10,000 free minutes per month do not apply to paid packages."
        })]
      })
    }), `
`, _jsx(_components.h4, {
      id: "billing",
      children: "Billing"
    }), `
`, _jsx(Accordions, {
      children: _jsxs(Accordion, {
        title: "If a user doesn’t publish or subscribe to any audio or video streams in a channel, will they still be charged?",
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Answer"
          }), `:
Yes. The audio subscription fees will apply.`]
        }), _jsx(_components.p, {
          children: "Even if a user does not actively subscribe to any streams, audio usage time is still generated in the channel, which results in audio subscription fees. Only audio usage is charged for publishing audio or video streams."
        })]
      })
    }), `
`, _jsx(_components.h4, {
      id: "duration-and-usage",
      children: "Duration and usage"
    }), `
`, _jsx(Accordions, {
      children: _jsxs(Accordion, {
        title: "How is usage duration calculated in the bill?",
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Answer"
          }), ":"]
        }), _jsx(_components.p, {
          children: "Agora tracks usage in seconds and then converts it to minutes for billing. At the end of each month, it calculates the total audio and video usage in seconds, divides each by 60, and rounds up to the nearest whole minute."
        }), _jsx(_components.p, {
          children: "For example:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If you use 59 seconds of audio, it is billed as ", _jsx(_components.strong, {
              children: "1 minute"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If you use 61 seconds of video, it is billed as ", _jsx(_components.strong, {
              children: "2 minutes"
            }), "."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["The rounding error per month is within ", _jsx(_components.strong, {
            children: "1 minute"
          }), "."]
        })]
      })
    }), `
`, _jsx(Accordions, {
      children: _jsxs(Accordion, {
        title: "Can I view individual user usage in the bill?",
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Answer"
          }), ": No."]
        }), _jsx(_components.p, {
          children: "The bill only shows the total audio and video usage for all users across all projects under your Agora developer account."
        }), _jsx(_components.p, {
          children: "To check usage for an individual user, use the statistics reported by the SDK:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Android:"
            }), " ", _jsx(_components.code, {
              children: "onRtcStats"
            }), " callback → ", _jsx(_components.code, {
              children: "totalDuration"
            }), " property"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "iOS:"
            }), " ", _jsx(_components.code, {
              children: "reportRtcStats"
            }), " callback → ", _jsx(_components.code, {
              children: "duration"
            }), " property"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Windows:"
            }), " ", _jsx(_components.code, {
              children: "onRtcStats"
            }), " callback → ", _jsx(_components.code, {
              children: "duration"
            }), " property"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "macOS:"
            }), " ", _jsx(_components.code, {
              children: "reportRtcStats"
            }), " callback → ", _jsx(_components.code, {
              children: "duration"
            }), " property"]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: `If a client disconnects due to poor network connection, the call duration reported by the SDK might be inaccurate.
To improve accuracy, implement a heartbeat mechanism using the Agora Signaling SDK or another signaling system. Subtract the disconnection time from the RTC-reported duration to get a more precise call duration for the user.`
            })
          })
        })]
      })
    }), `
`, _jsx(_components.h4, {
      id: "video-resolution",
      children: "Video resolution"
    }), `
`, _jsx(Accordions, {
      children: _jsxs(Accordion, {
        title: "Why is my applied billing rate for Ultra-HD when all users subscribe to 360 × 640 video streams?",
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Answer"
          }), ":"]
        }), _jsx(_components.p, {
          children: "Billing is based on the aggregate resolution, which is the total resolution of all subscribed video streams combined."
        }), _jsx(_components.p, {
          children: "Even if each individual stream is 360 × 640, subscribing to multiple streams can cause the aggregate resolution to exceed 1,280 × 720, which may qualify as Full HD Video or higher under Agora’s billing rules."
        })]
      })
    }), `
`, _jsx(Accordions, {
      children: _jsxs(Accordion, {
        title: "How is video stream resolution calculated in dual-stream mode?",
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Answer"
          }), ":"]
        }), _jsx(_components.p, {
          children: "In dual-stream mode, a user's video resolution is calculated based on the type of stream received:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If subscribed to the high-quality (large) stream, the aggregate resolution is based on the resolution set by the sender."
          }), `
`, _jsx(_components.li, {
            children: "If subscribed to the low-quality (small) stream, the aggregate resolution is based on the actual resolution received."
          }), `
`, _jsx(_components.li, {
            children: "If the high-quality stream is requested but the low-quality stream is delivered, for example, due to a poor network, the resolution is still calculated based on the actual resolution of the stream received."
          }), `
`]
        })]
      })
    }), `
`, _jsx(Accordions, {
      children: _jsxs(Accordion, {
        title: "How can I determine the resolution of a screen sharing video stream?",
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Answer"
          }), ":"]
        }), _jsx(_components.p, {
          children: "The resolution of a screen sharing video stream is determined by the video resolution you set in the relevant API or class. If no resolution is specified, the default resolution is used for billing."
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Platform"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Class or Configuration"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Default Resolution"
                })
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Android"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "ScreenCaptureParameters"
                })
              }), _jsx(_components.td, {
                children: "1280 × 720"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "iOS"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AgoraScreenCaptureParameters2"
                })
              }), _jsx(_components.td, {
                children: "1280 × 720"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Windows"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "ScreenCaptureParameters"
                })
              }), _jsx(_components.td, {
                children: "1920 × 1080"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "macOS"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AgoraScreenCaptureParameters"
                })
              }), _jsx(_components.td, {
                children: "1920 × 1080"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Web"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "ScreenVideoTrackInitConfig.encoderConfig"
                })
              }), _jsx(_components.td, {
                children: "1920 × 1080"
              })]
            })]
          })]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "On the Web platform, some browsers may not support the resolution you set due to device and browser limitations. In such cases, billing is based on the actual captured resolution, not the configured value."
            })
          })
        })]
      })
    }), `
`, _jsx(Accordions, {
      children: _jsxs(Accordion, {
        title: "What is resolution calibration?",
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Answer"
          }), ":"]
        }), _jsx(_components.p, {
          children: "Resolution calibration refers to adjusting the resolution of a video stream to a standard value when calculating aggregate resolution."
        }), _jsxs(_components.p, {
          children: ["For example, a video stream with a resolution of ", _jsx(_components.strong, {
            children: "640 × 352"
          }), " (225,280 pixels) is rounded up and treated as ", _jsx(_components.strong, {
            children: "640 × 360"
          }), " (230,400 pixels) for billing purposes."]
        })]
      })
    }), `
`, _jsx(_components.h4, {
      id: "arrears",
      children: "Arrears"
    }), `
`, _jsx(Accordions, {
      children: _jsxs(Accordion, {
        title: "What should I do if my account is frozen due to outstanding balance?",
        children: [_jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Answer"
          }), ":"]
        }), _jsx(_components.p, {
          children: "If your account is frozen, recharge it promptly. Once your balance meets or exceeds the minimum required amount, the account will be automatically unfrozen."
        }), _jsx(_components.p, {
          children: "To avoid service interruptions, Agora recommends monitoring deduction emails, recharge reminders, and account freeze warnings."
        }), _jsxs(_components.p, {
          children: ["For further details, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/billing-policies#billing-and-account-policies",
            children: "What are Agora's policies on billing, fee deductions, and account suspension?"
          })]
        })]
      })
    }), `
`, _jsx(_components.h3, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/reference/billing-policies",
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
