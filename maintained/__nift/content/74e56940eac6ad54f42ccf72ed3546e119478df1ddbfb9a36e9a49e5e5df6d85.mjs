import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Pricing information for On-Premise Recording."
};
export let _markdown = `

This article introduces the billing policy for the on-premise recording service provided by Agora.

Starting in April 2021, Agora further divided HD+ video into Full HD, 2K, and 2K+ video and set a more fine-grained pricing.

<CalloutContainer type="info">
  <CalloutDescription>
    * Your billing details may differ if you have signed a contract with Agora.
    * If the previous pricing set for HD and HD+ video still applies to you, see [What is the previous pricing for audio and video?](#question) for detailed video categorization and unit price.
  </CalloutDescription>
</CalloutContainer>

## Overview [#overview]

Agora calculates the billing of all projects under your [Agora Account](https://console.agora.io/) monthly.

Billing for the on-premise recording service begins once you use the Agora On-Premise Recording SDK to record and save audio calls, group video calls, or interactive live video streaming made via the Agora RTC SDK on your server.

On the first day of each month, Agora sends you the bill via email, and five days later deducts the payment from your account. For details, see [Billing, fee deduction, and account suspension](/en/introduction/billing/billing-policies).

<CalloutContainer type="info">
  <CalloutDescription>
    Agora gives each Agora account 10,000 free-of-charge minutes each month. For more information on the deduction sequence and applicable products, see[Agora's free-of-charge policy for the first 10,000 minutes](/en/api-reference/faq/account/billing_free).
  </CalloutDescription>
</CalloutContainer>

## Composition [#composition]

Agora calculates the recording service minutes of audio and video used by your projects on a monthly basis.

At the end of each month, Agora adds up the usage duration (in seconds) of audio and video in each category, and divides them by 60 to get the respective service minutes (rounded up to the nearest integer). Then, Agora multiplies the service minutes by the corresponding pricing to get the cost of that month.

**Cost = audio charges + video charges = audio pricing × audio service minutes + video pricing × video service minutes**

<CalloutContainer type="info">
  <CalloutDescription>
    * If the recording server successfully records both audio and video at the same time, then Agora only charges for the video minutes.
    * During a recording, the idle minutes are charged based on the audio pricing. The cost is the audio pricing × idle minutes.
  </CalloutDescription>
</CalloutContainer>

### Service minutes [#service-minutes]

Service minutes (accurate to seconds) are calculated from the time when the recording starts to the time when the recording stops in a channel.

Service minutes comprise the following:

* **Video minutes**: The duration that the recording server records video in a channel.
* **Audio minutes**: The remaining duration after deducting the video minutes from the total duration when the recording server is in the channel, regardless of whether the recording server records any audio.

<CalloutContainer type="info">
  <CalloutDescription>
    If you create a recording instance and record multiple audio and video streams at the same time in a channel, the total service minutes per streams are not additive. For example:

    * If a recording instance records the video streams of both user A and user B for the same 10 minutes, the billing for the recording service is for 10 minutes of video.
    * If a recording instance records the audio stream of user A and the video stream of user B for the same 10 minutes, the billing for the recording device is also for 10 minutes of video. If you use multiple recording instances at the same time in a channel, then the service minutes per recording instance are additive.
  </CalloutDescription>
</CalloutContainer>

### Unit Price [#unit-price]

The unit pricing for audio and video is as follows:

| Service type    | Category                        | Pricing ($US/1,000 minutes) |
| --------------- | ------------------------------- | --------------------------- |
| Recording audio | N/A                             | 0.99                        |
| Recording video | High-Definition (HD)①           | 3.99                        |
| Recording video | Full High-Definition (Full HD)① | 8.99                        |
| Recording video | 2K①                             | 15.99                       |
| Recording video | 2K+①                            | 35.99                       |

<CalloutContainer type="info">
  <CalloutDescription>
    Agora determines video category based on aggregate video resolution, which is the sum of resolutions of all the video streams a user subscribes to at the same time. For details, see [Aggregate video resolution](#aggregate).
  </CalloutDescription>
</CalloutContainer>

#### Aggregate video resolution [#aggregate-video-resolution]

Agora adds up the resolution of all the video streams recorded at the same time to get the **aggregate resolution**, which categorizes video as follows:

| Video category                 | Aggregate video resolution                                           |
| :----------------------------- | :------------------------------------------------------------------- |
| High-Definition (HD)           | Up to 921,600 (1280 × 720)                                           |
| Full High-Definition (Full HD) | From greater than 921,600 (1280 × 720) to 2,073,600 (1920 × 1080)    |
| 2K                             | From greater than 2,073,600 (1920 × 1080) to 3,686,400 (2560 × 1440) |
| 2K+                            | From greater than 3,686,400 (2560 × 1440) to 8,847,360 (4096 × 2160) |

For example, if the recording server records two video streams with resolutions of 1280 × 720 and 1920 × 1080 at the same time, the aggregated resolution is (1280 × 720) + (1920 × 1080) = 2,995,200. Because 2,995,200 is greater than 2,073,600 but less than 3,686,400, the recording service is charged based on the 2K video pricing.

## Examples [#examples]

This section shows how to calculate the monthly audio and video service minutes of each category, as well as the total cost based on the corresponding unit price.

### Use-case description [#use-case-description]

Suppose you have an enabled project named Test under your Agora account, and the project uses the Agora On-Premise Recording SDK to implement the recording function.

The project records the following sessions between February 1 and February 28, 2021:

#### Session one [#session-one]

On February 4, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. One on-premise recording instance joins the channel and records only the audio streams of the four users.

In this session, the recording service generates only charges for the audio minutes.

| Session                     | Audio | HD video | Full HD video | 2K video | 2K+ video |
| :-------------------------- | :---- | :------- | :------------ | :------- | :-------- |
| Usage duration (in seconds) | 6,000 | 0        | 0             | 0        | 0         |

#### Session two [#session-two]

On February 9, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. Two on-premise recording instances join the channel and record only the audio streams of the four users.

In this session, the recording service generates only charges for the audio minutes.

| Session                     | Audio                  | HD video | Full HD video | 2K video | 2K+ video |
| :-------------------------- | :--------------------- | :------- | :------------ | :------- | :-------- |
| Usage duration (in seconds) | 6,000 + 6,000 = 12,000 | 0        | 0             | 0        | 0         |

#### Session three [#session-three]

On February 13, 2021: Four users join the channel at the same time and have a video call for 3,500 seconds. One on-premise recording instance joins the channel and records the audio and video streams of the four users. The video resolution of each user is 640 × 360.

In this session, the recording service generates charges for the video minutes. The aggregate video resolution is 4 × (640 × 360) = 921,600, falling into the category of HD.

| Session                     | Audio | HD video | Full HD video | 2K video | 2K+ video |
| :-------------------------- | :---- | :------- | :------------ | :------- | :-------- |
| Usage duration (in seconds) | 0     | 3,500    | 0             | 0        | 0         |

#### Session four [#session-four]

On February 15, 2021: Users A, B, and C join the channel at the same time and have interactive live video streaming. The video resolution of A, B, and C is 640 x 360, 1280 x 720, and 960 x 720. 1,680 seconds later, user D joins the channel, and has interactive live streaming with A, B, and C for 520 seconds. The video resolution of D is 1920 x 1080. During live streaming, one on-premise recording instance joins the channel and records the audio and video streams of all the users.

In this session, the recording service generates charges for the video minutes.

In the initial 1,680 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 = 1,843,200, falling into the category of Full HD video.

In the subsequent 520 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 + 1920 x 1080 = 3,916,800, falling into the category of 2K+ video.

| Session                     | Audio | HD video | Full HD video | 2K video | 2K+ video |
| :-------------------------- | :---- | :------- | :------------ | :------- | :-------- |
| Usage duration (in seconds) | 0     | 0        | 1,680         | 0        | 520       |

### Cost calculation [#cost-calculation]

<table class="relative-table confluenceTable">
  <colgroup span="1">
    <col span="1" />

    <col span="1" />

    <col span="1" />

    <col span="1" />

    <col span="1" />

    <col span="1" />

    <col span="1" />

    <col span="1" />

    <col span="1" />

    <col span="1" />

    <col span="1" />
  </colgroup>

  <tbody>
    <tr>
      <th class="confluenceTh" rowspan="2" colspan="1">
        Date
      </th>

      <th class="confluenceTh" colspan="5" rowspan="1">
        Actual usage duration (seconds)
      </th>

      <th class="confluenceTh" colspan="5" rowspan="1">
        Usage duration displayed on Agora Console (minutes)
      </th>
    </tr>

    <tr>
      <td class="confluenceTd" colspan="1" rowspan="1">
        Audio
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        HD video
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        Full HD video
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        2K video
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        2K+ video
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        Audio
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        HD video
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        Full HD video
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        2K video
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        2K+ video
      </td>
    </tr>

    <tr>
      <td class="confluenceTd" colspan="1" rowspan="1">
        2025-02-04
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        6,000
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        100
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>
    </tr>

    <tr>
      <td class="confluenceTd" rowspan="1" colspan="1">
        2025-02-09
      </td>

      <td class="confluenceTd" owspan="1" colspan="1">
        12,000
      </td>

      <td class="confluenceTd" rowspan="1" colspan="1">
        0
      </td>

      <td class="confluenceTd" rowspan="1" colspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" owspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        200
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>
    </tr>

    <tr>
      <td class="confluenceTd" rowspan="1" colspan="1">
        2025-02-13
      </td>

      <td class="confluenceTd" rowspan="1" colspan="1">
        0
      </td>

      <td class="confluenceTd" rowspan="1" colspan="1">
        3,500
      </td>

      <td class="confluenceTd" rowspan="1" colspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        59
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>
    </tr>

    <tr>
      <td class="confluenceTd" colspan="1" rowspan="1">
        2025-02-15
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        1,680
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        520
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        28
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        9
      </td>
    </tr>

    <tr>
      <td class="confluenceTd" colspan="1" rowspan="1">
        Monthly usage
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        18,000
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        3,500
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        1,680
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        520
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        300
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        59
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        28
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        9
      </td>
    </tr>

    <tr>
      <td class="confluenceTd" colspan="1" rowspan="1">
        <strong>Billable service minutes</strong>
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        300
        minutes
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        59
         minutes
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        28
         minutes
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        9
         minutes
      </td>

      <td class="confluenceTd" colspan="5" rowspan="1">
        <strong>The usage displayed on Agora Console is for
        reference only and not used as the actual billing
        basis.</strong>
      </td>
    </tr>

    <tr>
      <td class="confluenceTd" colspan="1" rowspan="1">
        Cost of each service
        ($US)
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        (300/1000 )
        × 0.99
        \\= 0.297
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        (59/1000)
        × 3.99
        \\= 0.23541
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        (28/1000)
        × 8.99
        \\= 0.25172
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        0
      </td>

      <td class="confluenceTd" colspan="1" rowspan="1">
        (9/1000)
        × 35.99
        \\= 0.32391
      </td>

      <td class="confluenceTd" colspan="5" rowspan="1" />
    </tr>

    <tr>
      <td class="confluenceTd" colspan="1" rowspan="1">
        Total cost
        ($US)
      </td>

      <td class="confluenceTd" colspan="5" rowspan="1">
        1.11
        (0.297 + 2.3541 + 2.5172 + 0.32391 =
        1.10804 ≈ 1.11）
      </td>

      <td class="confluenceTd" colspan="5" rowspan="1" />
    </tr>
  </tbody>
</table>

<CalloutContainer type="info">
  <CalloutDescription>
    * Agora rounds up the monthly total fees to two decimal places.
    * Agora gives each Agora account 10,000 minutes of free time per month. Because the monthly total service minutes in the above example do not exceed 10,000 minutes, the service is free of charge and the bill would show $US 0.
  </CalloutDescription>
</CalloutContainer>

## Considerations [#considerations]

### Accuracy of service minutes [#accuracy-of-service-minutes]

At the end of each month, Agora adds up the usage duration (in seconds) of audio and video in each category, and divides them by 60 to get the respective service minutes (rounded up to the nearest integer). For example, if the duration of audio service of the month is 59 seconds, then the audio service minutes is calculated as 1 minute; if the duration of video service is 61 seconds, then the video service minutes is calculated as 2 minutes. The margin of error for service minutes for each month is within 1 minute.

### Video resolution in the dual-stream use-case [#video-resolution-in-the-dual-stream-use-case]

When the user being recorded enables [dual-stream mode](/en/introduction/glossary#dual-stream-mode), the recording service can receive only one stream at a time:

* If the recording server records the high-quality video stream, the aggregate video resolution is calculated based on the resolution of the high-quality video.
* If the recording server records the low-quality video stream, the aggregate video resolution is calculated based on the resolution of the video received by the server.

### Resolution calibration [#resolution-calibration]

When calculating the aggregate resolution, Agora counts the resolution of 225,280 (640 × 352) as 640 × 360.

## FAQs [#faqs]

### How does Agora charge if I use different recording modes? [#how-does-agora-charge-if-i-use-different-recording-modes]

Your recording fee has nothing to do with the recording mode you choose. Regardless of whether you use the individual mode or composite mode, your recording fee relates only to the number of streams recorded, the recording time, and the aggregate recording resolution. The number of streams recorded does not affect the recording duration, but affects the aggregate recording resolution.

### Does Agora charge for screen capture separately? [#does-agora-charge-for-screen-capture-separately]

Agora does not charge for screen capture separately. Screen capture is a variation of the recording function. The recording service joins the corresponding channel and subscribes to the specified video streams in order to capture screens at the specified interval. Therefore, if you have enabled screen capture, Agora charges you for the full-time recording of the corresponding stream, but does not charge you for screen capture separately.

## Relevant links [#relevant-links]

* [RTC Pricing](/en/realtime-media/rtc/reference/pricing)
* [Agora's free-of-charge policy for the first 10,000 minutes](/en/api-reference/faq/account/billing_free)
* [Billing, free deduction, and account suspension](/en/api-reference/faq/account/billing_account)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article introduces the billing policy for the on-premise recording service provided by Agora."
  }, {
    heading: undefined,
    content: "Starting in April 2021, Agora further divided HD+ video into Full HD, 2K, and 2K+ video and set a more fine-grained pricing."
  }, {
    heading: undefined,
    content: "Your billing details may differ if you have signed a contract with Agora."
  }, {
    heading: undefined,
    content: "If the previous pricing set for HD and HD+ video still applies to you, see What is the previous pricing for audio and video? for detailed video categorization and unit price."
  }, {
    heading: "overview",
    content: "Agora calculates the billing of all projects under your Agora Account monthly."
  }, {
    heading: "overview",
    content: "Billing for the on-premise recording service begins once you use the Agora On-Premise Recording SDK to record and save audio calls, group video calls, or interactive live video streaming made via the Agora RTC SDK on your server."
  }, {
    heading: "overview",
    content: "On the first day of each month, Agora sends you the bill via email, and five days later deducts the payment from your account. For details, see Billing, fee deduction, and account suspension."
  }, {
    heading: "overview",
    content: "Agora gives each Agora account 10,000 free-of-charge minutes each month. For more information on the deduction sequence and applicable products, seeAgora's free-of-charge policy for the first 10,000 minutes."
  }, {
    heading: "composition",
    content: "Agora calculates the recording service minutes of audio and video used by your projects on a monthly basis."
  }, {
    heading: "composition",
    content: "At the end of each month, Agora adds up the usage duration (in seconds) of audio and video in each category, and divides them by 60 to get the respective service minutes (rounded up to the nearest integer). Then, Agora multiplies the service minutes by the corresponding pricing to get the cost of that month."
  }, {
    heading: "composition",
    content: "**Cost = audio charges + video charges = audio pricing × audio service minutes + video pricing × video service minutes**"
  }, {
    heading: "composition",
    content: "If the recording server successfully records both audio and video at the same time, then Agora only charges for the video minutes."
  }, {
    heading: "composition",
    content: "During a recording, the idle minutes are charged based on the audio pricing. The cost is the audio pricing × idle minutes."
  }, {
    heading: "service-minutes",
    content: "Service minutes (accurate to seconds) are calculated from the time when the recording starts to the time when the recording stops in a channel."
  }, {
    heading: "service-minutes",
    content: "Service minutes comprise the following:"
  }, {
    heading: "service-minutes",
    content: "**Video minutes**: The duration that the recording server records video in a channel."
  }, {
    heading: "service-minutes",
    content: "**Audio minutes**: The remaining duration after deducting the video minutes from the total duration when the recording server is in the channel, regardless of whether the recording server records any audio."
  }, {
    heading: "service-minutes",
    content: "If you create a recording instance and record multiple audio and video streams at the same time in a channel, the total service minutes per streams are not additive. For example:"
  }, {
    heading: "service-minutes",
    content: "If a recording instance records the video streams of both user A and user B for the same 10 minutes, the billing for the recording service is for 10 minutes of video."
  }, {
    heading: "service-minutes",
    content: "If a recording instance records the audio stream of user A and the video stream of user B for the same 10 minutes, the billing for the recording device is also for 10 minutes of video. If you use multiple recording instances at the same time in a channel, then the service minutes per recording instance are additive."
  }, {
    heading: "unit-price",
    content: "The unit pricing for audio and video is as follows:"
  }, {
    heading: "unit-price",
    content: "Service type"
  }, {
    heading: "unit-price",
    content: "Category"
  }, {
    heading: "unit-price",
    content: "Pricing ($US/1,000 minutes)"
  }, {
    heading: "unit-price",
    content: "Recording audio"
  }, {
    heading: "unit-price",
    content: "N/A"
  }, {
    heading: "unit-price",
    content: "0.99"
  }, {
    heading: "unit-price",
    content: "Recording video"
  }, {
    heading: "unit-price",
    content: "High-Definition (HD)①"
  }, {
    heading: "unit-price",
    content: "3.99"
  }, {
    heading: "unit-price",
    content: "Recording video"
  }, {
    heading: "unit-price",
    content: "Full High-Definition (Full HD)①"
  }, {
    heading: "unit-price",
    content: "8.99"
  }, {
    heading: "unit-price",
    content: "Recording video"
  }, {
    heading: "unit-price",
    content: "2K①"
  }, {
    heading: "unit-price",
    content: "15.99"
  }, {
    heading: "unit-price",
    content: "Recording video"
  }, {
    heading: "unit-price",
    content: "2K+①"
  }, {
    heading: "unit-price",
    content: "35.99"
  }, {
    heading: "unit-price",
    content: "Agora determines video category based on aggregate video resolution, which is the sum of resolutions of all the video streams a user subscribes to at the same time. For details, see Aggregate video resolution."
  }, {
    heading: "aggregate-video-resolution",
    content: "Agora adds up the resolution of all the video streams recorded at the same time to get the **aggregate resolution**, which categorizes video as follows:"
  }, {
    heading: "aggregate-video-resolution",
    content: "Video category"
  }, {
    heading: "aggregate-video-resolution",
    content: "Aggregate video resolution"
  }, {
    heading: "aggregate-video-resolution",
    content: "High-Definition (HD)"
  }, {
    heading: "aggregate-video-resolution",
    content: "Up to 921,600 (1280 × 720)"
  }, {
    heading: "aggregate-video-resolution",
    content: "Full High-Definition (Full HD)"
  }, {
    heading: "aggregate-video-resolution",
    content: "From greater than 921,600 (1280 × 720) to 2,073,600 (1920 × 1080)"
  }, {
    heading: "aggregate-video-resolution",
    content: "2K"
  }, {
    heading: "aggregate-video-resolution",
    content: "From greater than 2,073,600 (1920 × 1080) to 3,686,400 (2560 × 1440)"
  }, {
    heading: "aggregate-video-resolution",
    content: "2K+"
  }, {
    heading: "aggregate-video-resolution",
    content: "From greater than 3,686,400 (2560 × 1440) to 8,847,360 (4096 × 2160)"
  }, {
    heading: "aggregate-video-resolution",
    content: "For example, if the recording server records two video streams with resolutions of 1280 × 720 and 1920 × 1080 at the same time, the aggregated resolution is (1280 × 720) + (1920 × 1080) = 2,995,200. Because 2,995,200 is greater than 2,073,600 but less than 3,686,400, the recording service is charged based on the 2K video pricing."
  }, {
    heading: "examples",
    content: "This section shows how to calculate the monthly audio and video service minutes of each category, as well as the total cost based on the corresponding unit price."
  }, {
    heading: "use-case-description",
    content: "Suppose you have an enabled project named Test under your Agora account, and the project uses the Agora On-Premise Recording SDK to implement the recording function."
  }, {
    heading: "use-case-description",
    content: "The project records the following sessions between February 1 and February 28, 2021:"
  }, {
    heading: "session-one",
    content: "On February 4, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. One on-premise recording instance joins the channel and records only the audio streams of the four users."
  }, {
    heading: "session-one",
    content: "In this session, the recording service generates only charges for the audio minutes."
  }, {
    heading: "session-one",
    content: "Session"
  }, {
    heading: "session-one",
    content: "Audio"
  }, {
    heading: "session-one",
    content: "HD video"
  }, {
    heading: "session-one",
    content: "Full HD video"
  }, {
    heading: "session-one",
    content: "2K video"
  }, {
    heading: "session-one",
    content: "2K+ video"
  }, {
    heading: "session-one",
    content: "Usage duration (in seconds)"
  }, {
    heading: "session-one",
    content: "6,000"
  }, {
    heading: "session-one",
    content: "0"
  }, {
    heading: "session-one",
    content: "0"
  }, {
    heading: "session-one",
    content: "0"
  }, {
    heading: "session-one",
    content: "0"
  }, {
    heading: "session-two",
    content: "On February 9, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. Two on-premise recording instances join the channel and record only the audio streams of the four users."
  }, {
    heading: "session-two",
    content: "In this session, the recording service generates only charges for the audio minutes."
  }, {
    heading: "session-two",
    content: "Session"
  }, {
    heading: "session-two",
    content: "Audio"
  }, {
    heading: "session-two",
    content: "HD video"
  }, {
    heading: "session-two",
    content: "Full HD video"
  }, {
    heading: "session-two",
    content: "2K video"
  }, {
    heading: "session-two",
    content: "2K+ video"
  }, {
    heading: "session-two",
    content: "Usage duration (in seconds)"
  }, {
    heading: "session-two",
    content: "6,000 + 6,000 = 12,000"
  }, {
    heading: "session-two",
    content: "0"
  }, {
    heading: "session-two",
    content: "0"
  }, {
    heading: "session-two",
    content: "0"
  }, {
    heading: "session-two",
    content: "0"
  }, {
    heading: "session-three",
    content: "On February 13, 2021: Four users join the channel at the same time and have a video call for 3,500 seconds. One on-premise recording instance joins the channel and records the audio and video streams of the four users. The video resolution of each user is 640 × 360."
  }, {
    heading: "session-three",
    content: "In this session, the recording service generates charges for the video minutes. The aggregate video resolution is 4 × (640 × 360) = 921,600, falling into the category of HD."
  }, {
    heading: "session-three",
    content: "Session"
  }, {
    heading: "session-three",
    content: "Audio"
  }, {
    heading: "session-three",
    content: "HD video"
  }, {
    heading: "session-three",
    content: "Full HD video"
  }, {
    heading: "session-three",
    content: "2K video"
  }, {
    heading: "session-three",
    content: "2K+ video"
  }, {
    heading: "session-three",
    content: "Usage duration (in seconds)"
  }, {
    heading: "session-three",
    content: "0"
  }, {
    heading: "session-three",
    content: "3,500"
  }, {
    heading: "session-three",
    content: "0"
  }, {
    heading: "session-three",
    content: "0"
  }, {
    heading: "session-three",
    content: "0"
  }, {
    heading: "session-four",
    content: "On February 15, 2021: Users A, B, and C join the channel at the same time and have interactive live video streaming. The video resolution of A, B, and C is 640 x 360, 1280 x 720, and 960 x 720. 1,680 seconds later, user D joins the channel, and has interactive live streaming with A, B, and C for 520 seconds. The video resolution of D is 1920 x 1080. During live streaming, one on-premise recording instance joins the channel and records the audio and video streams of all the users."
  }, {
    heading: "session-four",
    content: "In this session, the recording service generates charges for the video minutes."
  }, {
    heading: "session-four",
    content: "In the initial 1,680 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 = 1,843,200, falling into the category of Full HD video."
  }, {
    heading: "session-four",
    content: "In the subsequent 520 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 + 1920 x 1080 = 3,916,800, falling into the category of 2K+ video."
  }, {
    heading: "session-four",
    content: "Session"
  }, {
    heading: "session-four",
    content: "Audio"
  }, {
    heading: "session-four",
    content: "HD video"
  }, {
    heading: "session-four",
    content: "Full HD video"
  }, {
    heading: "session-four",
    content: "2K video"
  }, {
    heading: "session-four",
    content: "2K+ video"
  }, {
    heading: "session-four",
    content: "Usage duration (in seconds)"
  }, {
    heading: "session-four",
    content: "0"
  }, {
    heading: "session-four",
    content: "0"
  }, {
    heading: "session-four",
    content: "1,680"
  }, {
    heading: "session-four",
    content: "0"
  }, {
    heading: "session-four",
    content: "520"
  }, {
    heading: "cost-calculation",
    content: "Audio"
  }, {
    heading: "cost-calculation",
    content: "HD video"
  }, {
    heading: "cost-calculation",
    content: "Full HD video"
  }, {
    heading: "cost-calculation",
    content: "2K video"
  }, {
    heading: "cost-calculation",
    content: "2K+ video"
  }, {
    heading: "cost-calculation",
    content: "Audio"
  }, {
    heading: "cost-calculation",
    content: "HD video"
  }, {
    heading: "cost-calculation",
    content: "Full HD video"
  }, {
    heading: "cost-calculation",
    content: "2K video"
  }, {
    heading: "cost-calculation",
    content: "2K+ video"
  }, {
    heading: "cost-calculation",
    content: `Cost of each service
($US)`
  }, {
    heading: "cost-calculation",
    content: `Total cost
($US)`
  }, {
    heading: "cost-calculation",
    content: `1.11
(0.297 + 2.3541 + 2.5172 + 0.32391 =
1.10804 ≈ 1.11）`
  }, {
    heading: "cost-calculation",
    content: "Agora rounds up the monthly total fees to two decimal places."
  }, {
    heading: "cost-calculation",
    content: "Agora gives each Agora account 10,000 minutes of free time per month. Because the monthly total service minutes in the above example do not exceed 10,000 minutes, the service is free of charge and the bill would show $US 0."
  }, {
    heading: "accuracy-of-service-minutes",
    content: "At the end of each month, Agora adds up the usage duration (in seconds) of audio and video in each category, and divides them by 60 to get the respective service minutes (rounded up to the nearest integer). For example, if the duration of audio service of the month is 59 seconds, then the audio service minutes is calculated as 1 minute; if the duration of video service is 61 seconds, then the video service minutes is calculated as 2 minutes. The margin of error for service minutes for each month is within 1 minute."
  }, {
    heading: "video-resolution-in-the-dual-stream-use-case",
    content: "When the user being recorded enables dual-stream mode, the recording service can receive only one stream at a time:"
  }, {
    heading: "video-resolution-in-the-dual-stream-use-case",
    content: "If the recording server records the high-quality video stream, the aggregate video resolution is calculated based on the resolution of the high-quality video."
  }, {
    heading: "video-resolution-in-the-dual-stream-use-case",
    content: "If the recording server records the low-quality video stream, the aggregate video resolution is calculated based on the resolution of the video received by the server."
  }, {
    heading: "resolution-calibration",
    content: "When calculating the aggregate resolution, Agora counts the resolution of 225,280 (640 × 352) as 640 × 360."
  }, {
    heading: "how-does-agora-charge-if-i-use-different-recording-modes",
    content: "Your recording fee has nothing to do with the recording mode you choose. Regardless of whether you use the individual mode or composite mode, your recording fee relates only to the number of streams recorded, the recording time, and the aggregate recording resolution. The number of streams recorded does not affect the recording duration, but affects the aggregate recording resolution."
  }, {
    heading: "does-agora-charge-for-screen-capture-separately",
    content: "Agora does not charge for screen capture separately. Screen capture is a variation of the recording function. The recording service joins the corresponding channel and subscribes to the specified video streams in order to capture screens at the specified interval. Therefore, if you have enabled screen capture, Agora charges you for the full-time recording of the corresponding stream, but does not charge you for screen capture separately."
  }, {
    heading: "relevant-links",
    content: "RTC Pricing"
  }, {
    heading: "relevant-links",
    content: "Agora's free-of-charge policy for the first 10,000 minutes"
  }, {
    heading: "relevant-links",
    content: "Billing, free deduction, and account suspension"
  }],
  headings: [{
    id: "overview",
    content: "Overview"
  }, {
    id: "composition",
    content: "Composition"
  }, {
    id: "service-minutes",
    content: "Service minutes"
  }, {
    id: "unit-price",
    content: "Unit Price"
  }, {
    id: "aggregate-video-resolution",
    content: "Aggregate video resolution"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "use-case-description",
    content: "Use-case description"
  }, {
    id: "session-one",
    content: "Session one"
  }, {
    id: "session-two",
    content: "Session two"
  }, {
    id: "session-three",
    content: "Session three"
  }, {
    id: "session-four",
    content: "Session four"
  }, {
    id: "cost-calculation",
    content: "Cost calculation"
  }, {
    id: "considerations",
    content: "Considerations"
  }, {
    id: "accuracy-of-service-minutes",
    content: "Accuracy of service minutes"
  }, {
    id: "video-resolution-in-the-dual-stream-use-case",
    content: "Video resolution in the dual-stream use-case"
  }, {
    id: "resolution-calibration",
    content: "Resolution calibration"
  }, {
    id: "faqs",
    content: "FAQs"
  }, {
    id: "how-does-agora-charge-if-i-use-different-recording-modes",
    content: "How does Agora charge if I use different recording modes?"
  }, {
    id: "does-agora-charge-for-screen-capture-separately",
    content: "Does Agora charge for screen capture separately?"
  }, {
    id: "relevant-links",
    content: "Relevant links"
  }]
};
export let toc = [{
  depth: 2,
  url: "#overview",
  title: _jsx(_Fragment, {
    children: "Overview"
  })
}, {
  depth: 2,
  url: "#composition",
  title: _jsx(_Fragment, {
    children: "Composition"
  })
}, {
  depth: 3,
  url: "#service-minutes",
  title: _jsx(_Fragment, {
    children: "Service minutes"
  })
}, {
  depth: 3,
  url: "#unit-price",
  title: _jsx(_Fragment, {
    children: "Unit Price"
  })
}, {
  depth: 4,
  url: "#aggregate-video-resolution",
  title: _jsx(_Fragment, {
    children: "Aggregate video resolution"
  })
}, {
  depth: 2,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#use-case-description",
  title: _jsx(_Fragment, {
    children: "Use-case description"
  })
}, {
  depth: 4,
  url: "#session-one",
  title: _jsx(_Fragment, {
    children: "Session one"
  })
}, {
  depth: 4,
  url: "#session-two",
  title: _jsx(_Fragment, {
    children: "Session two"
  })
}, {
  depth: 4,
  url: "#session-three",
  title: _jsx(_Fragment, {
    children: "Session three"
  })
}, {
  depth: 4,
  url: "#session-four",
  title: _jsx(_Fragment, {
    children: "Session four"
  })
}, {
  depth: 3,
  url: "#cost-calculation",
  title: _jsx(_Fragment, {
    children: "Cost calculation"
  })
}, {
  depth: 2,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}, {
  depth: 3,
  url: "#accuracy-of-service-minutes",
  title: _jsx(_Fragment, {
    children: "Accuracy of service minutes"
  })
}, {
  depth: 3,
  url: "#video-resolution-in-the-dual-stream-use-case",
  title: _jsx(_Fragment, {
    children: "Video resolution in the dual-stream use-case"
  })
}, {
  depth: 3,
  url: "#resolution-calibration",
  title: _jsx(_Fragment, {
    children: "Resolution calibration"
  })
}, {
  depth: 2,
  url: "#faqs",
  title: _jsx(_Fragment, {
    children: "FAQs"
  })
}, {
  depth: 3,
  url: "#how-does-agora-charge-if-i-use-different-recording-modes",
  title: _jsx(_Fragment, {
    children: "How does Agora charge if I use different recording modes?"
  })
}, {
  depth: 3,
  url: "#does-agora-charge-for-screen-capture-separately",
  title: _jsx(_Fragment, {
    children: "Does Agora charge for screen capture separately?"
  })
}, {
  depth: 2,
  url: "#relevant-links",
  title: _jsx(_Fragment, {
    children: "Relevant links"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This article introduces the billing policy for the on-premise recording service provided by Agora."
    }), `
`, _jsx(_components.p, {
      children: "Starting in April 2021, Agora further divided HD+ video into Full HD, 2K, and 2K+ video and set a more fine-grained pricing."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Your billing details may differ if you have signed a contract with Agora."
          }), `
`, _jsxs(_components.li, {
            children: ["If the previous pricing set for HD and HD+ video still applies to you, see ", _jsx(_components.a, {
              href: "#question",
              children: "What is the previous pricing for audio and video?"
            }), " for detailed video categorization and unit price."]
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "overview",
      children: "Overview"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora calculates the billing of all projects under your ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Account"
      }), " monthly."]
    }), `
`, _jsx(_components.p, {
      children: "Billing for the on-premise recording service begins once you use the Agora On-Premise Recording SDK to record and save audio calls, group video calls, or interactive live video streaming made via the Agora RTC SDK on your server."
    }), `
`, _jsxs(_components.p, {
      children: ["On the first day of each month, Agora sends you the bill via email, and five days later deducts the payment from your account. For details, see ", _jsx(_components.a, {
        href: "/en/introduction/billing/billing-policies",
        children: "Billing, fee deduction, and account suspension"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Agora gives each Agora account 10,000 free-of-charge minutes each month. For more information on the deduction sequence and applicable products, see", _jsx(_components.a, {
            href: "/en/api-reference/faq/account/billing_free",
            children: "Agora's free-of-charge policy for the first 10,000 minutes"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "composition",
      children: "Composition"
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates the recording service minutes of audio and video used by your projects on a monthly basis."
    }), `
`, _jsx(_components.p, {
      children: "At the end of each month, Agora adds up the usage duration (in seconds) of audio and video in each category, and divides them by 60 to get the respective service minutes (rounded up to the nearest integer). Then, Agora multiplies the service minutes by the corresponding pricing to get the cost of that month."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Cost = audio charges + video charges = audio pricing × audio service minutes + video pricing × video service minutes"
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If the recording server successfully records both audio and video at the same time, then Agora only charges for the video minutes."
          }), `
`, _jsx(_components.li, {
            children: "During a recording, the idle minutes are charged based on the audio pricing. The cost is the audio pricing × idle minutes."
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "service-minutes",
      children: "Service minutes"
    }), `
`, _jsx(_components.p, {
      children: "Service minutes (accurate to seconds) are calculated from the time when the recording starts to the time when the recording stops in a channel."
    }), `
`, _jsx(_components.p, {
      children: "Service minutes comprise the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Video minutes"
        }), ": The duration that the recording server records video in a channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Audio minutes"
        }), ": The remaining duration after deducting the video minutes from the total duration when the recording server is in the channel, regardless of whether the recording server records any audio."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "If you create a recording instance and record multiple audio and video streams at the same time in a channel, the total service minutes per streams are not additive. For example:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If a recording instance records the video streams of both user A and user B for the same 10 minutes, the billing for the recording service is for 10 minutes of video."
          }), `
`, _jsx(_components.li, {
            children: "If a recording instance records the audio stream of user A and the video stream of user B for the same 10 minutes, the billing for the recording device is also for 10 minutes of video. If you use multiple recording instances at the same time in a channel, then the service minutes per recording instance are additive."
          }), `
`]
        })]
      })
    }), `
`, _jsx(_components.h3, {
      id: "unit-price",
      children: "Unit Price"
    }), `
`, _jsx(_components.p, {
      children: "The unit pricing for audio and video is as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service type"
          }), _jsx(_components.th, {
            children: "Category"
          }), _jsx(_components.th, {
            children: "Pricing ($US/1,000 minutes)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Recording audio"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            children: "0.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Recording video"
          }), _jsx(_components.td, {
            children: "High-Definition (HD)①"
          }), _jsx(_components.td, {
            children: "3.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Recording video"
          }), _jsx(_components.td, {
            children: "Full High-Definition (Full HD)①"
          }), _jsx(_components.td, {
            children: "8.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Recording video"
          }), _jsx(_components.td, {
            children: "2K①"
          }), _jsx(_components.td, {
            children: "15.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Recording video"
          }), _jsx(_components.td, {
            children: "2K+①"
          }), _jsx(_components.td, {
            children: "35.99"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Agora determines video category based on aggregate video resolution, which is the sum of resolutions of all the video streams a user subscribes to at the same time. For details, see ", _jsx(_components.a, {
            href: "#aggregate",
            children: "Aggregate video resolution"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "aggregate-video-resolution",
      children: "Aggregate video resolution"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora adds up the resolution of all the video streams recorded at the same time to get the ", _jsx(_components.strong, {
        children: "aggregate resolution"
      }), ", which categorizes video as follows:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Video category"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Aggregate video resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-Definition (HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Up to 921,600 (1280 × 720)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Full High-Definition (Full HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "From greater than 921,600 (1280 × 720) to 2,073,600 (1920 × 1080)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2K"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "From greater than 2,073,600 (1920 × 1080) to 3,686,400 (2560 × 1440)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2K+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "From greater than 3,686,400 (2560 × 1440) to 8,847,360 (4096 × 2160)"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "For example, if the recording server records two video streams with resolutions of 1280 × 720 and 1920 × 1080 at the same time, the aggregated resolution is (1280 × 720) + (1920 × 1080) = 2,995,200. Because 2,995,200 is greater than 2,073,600 but less than 3,686,400, the recording service is charged based on the 2K video pricing."
    }), `
`, _jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), `
`, _jsx(_components.p, {
      children: "This section shows how to calculate the monthly audio and video service minutes of each category, as well as the total cost based on the corresponding unit price."
    }), `
`, _jsx(_components.h3, {
      id: "use-case-description",
      children: "Use-case description"
    }), `
`, _jsx(_components.p, {
      children: "Suppose you have an enabled project named Test under your Agora account, and the project uses the Agora On-Premise Recording SDK to implement the recording function."
    }), `
`, _jsx(_components.p, {
      children: "The project records the following sessions between February 1 and February 28, 2021:"
    }), `
`, _jsx(_components.h4, {
      id: "session-one",
      children: "Session one"
    }), `
`, _jsx(_components.p, {
      children: "On February 4, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. One on-premise recording instance joins the channel and records only the audio streams of the four users."
    }), `
`, _jsx(_components.p, {
      children: "In this session, the recording service generates only charges for the audio minutes."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Session"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Audio"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "HD video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Full HD video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "2K video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "2K+ video"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Usage duration (in seconds)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "session-two",
      children: "Session two"
    }), `
`, _jsx(_components.p, {
      children: "On February 9, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. Two on-premise recording instances join the channel and record only the audio streams of the four users."
    }), `
`, _jsx(_components.p, {
      children: "In this session, the recording service generates only charges for the audio minutes."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Session"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Audio"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "HD video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Full HD video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "2K video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "2K+ video"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Usage duration (in seconds)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6,000 + 6,000 = 12,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "session-three",
      children: "Session three"
    }), `
`, _jsx(_components.p, {
      children: "On February 13, 2021: Four users join the channel at the same time and have a video call for 3,500 seconds. One on-premise recording instance joins the channel and records the audio and video streams of the four users. The video resolution of each user is 640 × 360."
    }), `
`, _jsx(_components.p, {
      children: "In this session, the recording service generates charges for the video minutes. The aggregate video resolution is 4 × (640 × 360) = 921,600, falling into the category of HD."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Session"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Audio"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "HD video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Full HD video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "2K video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "2K+ video"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Usage duration (in seconds)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3,500"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "session-four",
      children: "Session four"
    }), `
`, _jsx(_components.p, {
      children: "On February 15, 2021: Users A, B, and C join the channel at the same time and have interactive live video streaming. The video resolution of A, B, and C is 640 x 360, 1280 x 720, and 960 x 720. 1,680 seconds later, user D joins the channel, and has interactive live streaming with A, B, and C for 520 seconds. The video resolution of D is 1920 x 1080. During live streaming, one on-premise recording instance joins the channel and records the audio and video streams of all the users."
    }), `
`, _jsx(_components.p, {
      children: "In this session, the recording service generates charges for the video minutes."
    }), `
`, _jsx(_components.p, {
      children: "In the initial 1,680 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 = 1,843,200, falling into the category of Full HD video."
    }), `
`, _jsx(_components.p, {
      children: "In the subsequent 520 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 + 1920 x 1080 = 3,916,800, falling into the category of 2K+ video."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Session"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Audio"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "HD video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Full HD video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "2K video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "2K+ video"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Usage duration (in seconds)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1,680"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "520"
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "cost-calculation",
      children: "Cost calculation"
    }), `
`, _jsxs("table", {
      class: "relative-table confluenceTable",
      resolved: "",
      children: [_jsxs("colgroup", {
        span: "1",
        children: [_jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        }), _jsx("col", {
          span: "1"
        })]
      }), _jsxs("tbody", {
        children: [_jsxs("tr", {
          children: [_jsx("th", {
            class: "confluenceTh",
            rowspan: "2",
            colspan: "1",
            children: "Date"
          }), _jsx("th", {
            class: "confluenceTh",
            colspan: "5",
            rowspan: "1",
            children: "Actual usage duration (seconds)"
          }), _jsx("th", {
            class: "confluenceTh",
            colspan: "5",
            rowspan: "1",
            children: "Usage duration displayed on Agora Console (minutes)"
          })]
        }), _jsxs("tr", {
          children: [_jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "Audio"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "HD video"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "Full HD video"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "2K video"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "2K+ video"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "Audio"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "HD video"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "Full HD video"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "2K video"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: "2K+ video"
            })
          })]
        }), _jsxs("tr", {
          children: [_jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "2025-02-04"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "6,000"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "100"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          })]
        }), _jsxs("tr", {
          children: [_jsx("td", {
            class: "confluenceTd",
            rowspan: "1",
            colspan: "1",
            children: "2025-02-09"
          }), _jsx("td", {
            class: "confluenceTd",
            owspan: "1",
            colspan: "1",
            children: "12,000"
          }), _jsx("td", {
            class: "confluenceTd",
            rowspan: "1",
            colspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            rowspan: "1",
            colspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            owspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "200"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          })]
        }), _jsxs("tr", {
          children: [_jsx("td", {
            class: "confluenceTd",
            rowspan: "1",
            colspan: "1",
            children: "2025-02-13"
          }), _jsx("td", {
            class: "confluenceTd",
            rowspan: "1",
            colspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            rowspan: "1",
            colspan: "1",
            children: "3,500"
          }), _jsx("td", {
            class: "confluenceTd",
            rowspan: "1",
            colspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "59"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          })]
        }), _jsxs("tr", {
          children: [_jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "2025-02-15"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "1,680"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "520"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "28"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "9"
          })]
        }), _jsxs("tr", {
          children: [_jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "Monthly usage"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "18,000"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "3,500"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "1,680"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "520"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "300"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "59"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "28"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "9"
          })]
        }), _jsxs("tr", {
          children: [_jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx("strong", {
              children: "Billable service minutes"
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: `300
minutes`
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: `59
 minutes`
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: `28
 minutes`
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: `9
 minutes`
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "5",
            rowspan: "1",
            children: _jsx("strong", {
              children: `The usage displayed on Agora Console is for
reference only and not used as the actual billing
basis.`
            })
          })]
        }), _jsxs("tr", {
          children: [_jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: `Cost of each service
($US)`
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: `(300/1000 )
× 0.99
= 0.297`
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: `(59/1000)
× 3.99
= 0.23541`
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: `(28/1000)
× 8.99
= 0.25172`
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: "0"
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: `(9/1000)
× 35.99
= 0.32391`
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "5",
            rowspan: "1"
          })]
        }), _jsxs("tr", {
          children: [_jsx("td", {
            class: "confluenceTd",
            colspan: "1",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: `Total cost
($US)`
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "5",
            rowspan: "1",
            children: _jsx(_components.p, {
              children: `1.11
(0.297 + 2.3541 + 2.5172 + 0.32391 =
1.10804 ≈ 1.11）`
            })
          }), _jsx("td", {
            class: "confluenceTd",
            colspan: "5",
            rowspan: "1"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Agora rounds up the monthly total fees to two decimal places."
          }), `
`, _jsx(_components.li, {
            children: "Agora gives each Agora account 10,000 minutes of free time per month. Because the monthly total service minutes in the above example do not exceed 10,000 minutes, the service is free of charge and the bill would show $US 0."
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsx(_components.h3, {
      id: "accuracy-of-service-minutes",
      children: "Accuracy of service minutes"
    }), `
`, _jsx(_components.p, {
      children: "At the end of each month, Agora adds up the usage duration (in seconds) of audio and video in each category, and divides them by 60 to get the respective service minutes (rounded up to the nearest integer). For example, if the duration of audio service of the month is 59 seconds, then the audio service minutes is calculated as 1 minute; if the duration of video service is 61 seconds, then the video service minutes is calculated as 2 minutes. The margin of error for service minutes for each month is within 1 minute."
    }), `
`, _jsx(_components.h3, {
      id: "video-resolution-in-the-dual-stream-use-case",
      children: "Video resolution in the dual-stream use-case"
    }), `
`, _jsxs(_components.p, {
      children: ["When the user being recorded enables ", _jsx(_components.a, {
        href: "/en/introduction/glossary#dual-stream-mode",
        children: "dual-stream mode"
      }), ", the recording service can receive only one stream at a time:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the recording server records the high-quality video stream, the aggregate video resolution is calculated based on the resolution of the high-quality video."
      }), `
`, _jsx(_components.li, {
        children: "If the recording server records the low-quality video stream, the aggregate video resolution is calculated based on the resolution of the video received by the server."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "resolution-calibration",
      children: "Resolution calibration"
    }), `
`, _jsx(_components.p, {
      children: "When calculating the aggregate resolution, Agora counts the resolution of 225,280 (640 × 352) as 640 × 360."
    }), `
`, _jsx(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), `
`, _jsx(_components.h3, {
      id: "how-does-agora-charge-if-i-use-different-recording-modes",
      children: "How does Agora charge if I use different recording modes?"
    }), `
`, _jsx(_components.p, {
      children: "Your recording fee has nothing to do with the recording mode you choose. Regardless of whether you use the individual mode or composite mode, your recording fee relates only to the number of streams recorded, the recording time, and the aggregate recording resolution. The number of streams recorded does not affect the recording duration, but affects the aggregate recording resolution."
    }), `
`, _jsx(_components.h3, {
      id: "does-agora-charge-for-screen-capture-separately",
      children: "Does Agora charge for screen capture separately?"
    }), `
`, _jsx(_components.p, {
      children: "Agora does not charge for screen capture separately. Screen capture is a variation of the recording function. The recording service joins the corresponding channel and subscribes to the specified video streams in order to capture screens at the specified interval. Therefore, if you have enabled screen capture, Agora charges you for the full-time recording of the corresponding stream, but does not charge you for screen capture separately."
    }), `
`, _jsx(_components.h2, {
      id: "relevant-links",
      children: "Relevant links"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/reference/pricing",
          children: "RTC Pricing"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/account/billing_free",
          children: "Agora's free-of-charge policy for the first 10,000 minutes"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/account/billing_account",
          children: "Billing, free deduction, and account suspension"
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
