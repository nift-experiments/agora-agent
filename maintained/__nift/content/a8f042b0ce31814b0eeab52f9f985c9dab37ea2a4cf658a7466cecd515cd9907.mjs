import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Estimate your monthly Cloud Recording cost."
};
export let _markdown = `

This page explains how Agora calculates your monthly bill for Cloud Recording.

If you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence.

{ /*

  :::info
  The Agora Pricing calculator helps you estimate your channel and Cloud Recording costs. Use this tool to understand the pricing policy and estimate your session costs or monthly expenses.
  :::

  <Accordions>
  <Accordion title="Pricing Calculator">
    Use this calculator to estimate your Cloud Recording costs.

    <PricingCalculator />

    <div style={{ height: '20px' }}></div>

    :::warning[Disclaimer]
    The costs estimated by this calculator are indicative and may not match actual billing. Accuracy in all cases is not guaranteed, and the calculations should be used as estimates only. Actual billing is based on Agora's official pricing policy and may vary. Please refer to Agora's [Pricing](pricing) policy for complete and up-to-date information.
    :::
  </Accordion>
  </Accordions>
  */}

## Cloud Recording pricing [#cloud-recording-pricing]

The unit pricing for audio and video usage is as follows:

| Service Type                  | Category                       | Pricing, US$/1,000 minutes |
| :---------------------------- | :----------------------------- | :------------------------- |
| Recording Audio               | Audio                          | 1.49                       |
| Recording Video               | High-Definition (HD)           | 5.99                       |
| Recording Video               | Full High-Definition (Full HD) | 13.49                      |
| Recording Video               | 2K                             | 23.99                      |
| Recording Video               | 2K+                            | 53.99                      |
| Cloud-Based Screenshot Upload | All definitions                | 2.49 or free               |

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    Cloud-Based Screenshot Upload is free if bundled with Cloud Recording, that is, initiated along with Cloud Recording in a single task.
  </CalloutDescription>
</CalloutContainer>

### Video category [#video-category]

Agora determines video category based on **aggregate video resolution**, which is the sum of resolutions of all the video streams a user subscribes to at the same time. Agora adds up the resolution of all the video streams recorded at the same time to get the aggregate resolution, which categorizes video as follows:

| Video category                 | Aggregate video resolution                                           |
| :----------------------------- | :------------------------------------------------------------------- |
| High-Definition (HD)           | Up to 921,600 (1280 × 720）                                           |
| Full High-Definition (Full HD) | From greater than 921,600 (1280 × 720) to 2,073,600 (1920 × 1080)    |
| 2K                             | From greater than 2,073,600 (1920 × 1080) to 3,686,400 (2560 × 1440) |
| 2K+                            | From greater than 3,686,400 (2560 × 1440) to 8,847,360 (4096 × 2160) |

For example, if the recording server records two video streams with resolutions of 1280 × 720 and 1920 × 1080 at the same time, the aggregated resolution is (1280 × 720) + (1920 × 1080) = 2,995,200. Because 2,995,200 is greater than 2,073,600 but less than 3,686,400, the recording service is charged based on the 2K video pricing.

The recording fee does not depend on the recording mode you choose. Regardless of whether you use the individual mode or
composite mode, the recording fee relates only to the number of the streams recorded, the recording time, and the aggregate
recording resolutions. The number of the streams recorded does not affect the recording duration,
but affects the aggregate recording resolution.

## Cost calculation [#cost-calculation]

Billing for Cloud Recording begins once you use Cloud Recording to record and save audio calls, group video calls, or interactive video streaming made via the Agora RTC SDK on your cloud storage.

Agora calculates the billing of all projects under your [Agora Account](https://console.agora.io/) monthly.
Cloud Recording usage isn't covered by the monthly [10,000 free-of-charge minutes](/en/introduction/billing/billing-policies#free-of-charge-policy).
Agora adds up the usage duration (in seconds) of audio and video in each category,
and divides them by 60 to get the respective service minutes (rounded up to the nearest integer).
Then, Agora multiplies the service minutes by the corresponding pricing to get the cost of that month.

The basic formula is shown here:

**Monthly cost = audio pricing × audio service minutes + video pricing × video service minutes**

If the recording server successfully records both audio and video at the same time, then Agora only charges for the video minutes. During a recording, the idle minutes are charged based on the audio pricing. The cost is the audio pricing × idle minutes.

### Service minutes [#service-minutes]

Service minutes (accurate to seconds) are calculated from the time when the recording starts to the time when the recording stops in a channel.

Service minutes comprise the following:

* **Video minutes**: The duration that the recording server records video in a channel.
* **Audio minutes**: The remaining duration after deducting the video minutes from the total duration when the recording server is in the channel, regardless of whether the recording server records any audio.

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    The recording bot subscribes to audio and video streams in the channel, but these subscriptions do not incur additional Real-Time Communication usage fees.
  </CalloutDescription>
</CalloutContainer>

If you create a recording instance and record multiple audio and video streams at the same time in a channel, the total service minutes per streams are not additive. For example:

* If a recording instance records the video streams of both user A and user B for the same 10 minutes, the billing for the recording service is for 10 minutes of video.
* If a recording instance records the audio stream of user A and the video stream of user B for the same 10 minutes, the billing for the recording device is also for 10 minutes of video. If you use multiple recording sessions at the same time in a channel, then the service minutes per recording session are additive.

## Examples [#examples]

This section shows how to calculate the monthly audio and video service minutes of each category, as well as the total cost based on the corresponding unit price.

Suppose you have an enabled project named Test under your Agora account, and the project uses the Agora Cloud Recording to implement the recording function.

The recording usage duration of the project between February 1 and February 28, 2021 is as follows:

#### Recording one [#recording-one]

On February 4, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. You start one cloud recording session to record only the audio streams of the four users in the channel.

During this recording, the recording service generates only charges for the audio minutes.

| Session                     | Audio | HD video | Full HD video | 2K video | 2K+ video |
| :-------------------------- | :---- | :------- | :------------ | :------- | :-------- |
| Usage duration (in seconds) | 6,000 | 0        | 0             | 0        | 0         |

#### Recording two [#recording-two]

On February 9, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. You start an individual Recording and a composite Recording, two cloud recording sessions to record only the audio streams of the four users in the channel.

During this recording, the recording service generates only charges for the audio minutes.

| Session                   | Audio                  | HD video | Full HD video | 2K video | 2K+ video |
| :------------------------ | :--------------------- | :------- | :------------ | :------- | :-------- |
| Usage duration in seconds | 6,000 + 6,000 = 12,000 | 0        | 0             | 0        | 0         |

#### Recording three [#recording-three]

On February 13, 2021: Four users join the channel at the same time and have a video call for 3,500 seconds. You start one cloud recording session to record the audio and video streams of the four users in the channel. The video resolution of each user is 640 × 360.

During this recording, the recording service generates charges for the video minutes. The aggregate video resolution is 4 × (640 × 360) = 921,600, falling into the category of HD.

| Session                   | Audio | HD video | Full HD video | 2K video | 2K+ video |
| :------------------------ | :---- | :------- | :------------ | :------- | :-------- |
| Usage duration in seconds | 0     | 3,500    | 0             | 0        | 0         |

#### Recording four [#recording-four]

On February 15, 2021: Users A, B, and C join the channel at the same time and have interactive live video streaming. The video resolution of A, B, and C is 640 x 360, 1280 x 720, and 960 x 720. 1,680 seconds later, user D joins the channel, and has interactive live streaming with A, B, and C for 520 seconds. The video resolution of D is 1920 x 1080. During live streaming, you start one cloud recording session to record the audio and video streams of all the users in the channel.

During this recording, the recording service generates charges for the video minutes.

In the initial 1,680 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 = 1,843,200, falling into the category of Full HD video.

In the subsequent 520 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 + 1920 x 1080 = 3,916,800, falling into the category of 2K+ video.

| Session                     | Audio | HD video | Full HD video | 2K video | 2K+ video |
| :-------------------------- | :---- | :------- | :------------ | :------- | :-------- |
| Usage duration (in seconds) | 0     | 0        | 1,680         | 0        | 520       |

### Calculate cost [#calculate-cost]

| Date          | Actual audio (s) | Actual HD video (s) | Actual Full HD video (s) | Actual 2K video (s) | Actual 2K+ video (s) | Console audio (min) | Console HD video (min) | Console Full HD video (min) | Console 2K video (min) | Console 2K+ video (min) |
| ------------- | ---------------: | ------------------: | -----------------------: | ------------------: | -------------------: | ------------------: | ---------------------: | --------------------------: | ---------------------: | ----------------------: |
| 2020-02-04    |            6,000 |                   0 |                        0 |                   0 |                    0 |                 100 |                      0 |                           0 |                      0 |                       0 |
| 2020-02-09    |           12,000 |                   0 |                        0 |                   0 |                    0 |                 200 |                      0 |                           0 |                      0 |                       0 |
| 2020-02-13    |                0 |               3,500 |                        0 |                   0 |                    0 |                   0 |                     59 |                           0 |                      0 |                       0 |
| 2020-02-15    |                0 |                   0 |                    1,680 |                   0 |                  520 |                   0 |                      0 |                          28 |                      0 |                       9 |
| Monthly usage |           18,000 |               3,500 |                    1,680 |                   0 |                  520 |                 300 |                     59 |                          28 |                      0 |                       9 |

**Billable service minutes**

| Audio       | HD video   | Full HD video | 2K video | 2K+ video |
| ----------- | ---------- | ------------- | -------- | --------- |
| 300 minutes | 59 minutes | 28 minutes    | 0        | 9 minutes |

The usage displayed on Agora Console is for reference only and not used as the actual billing basis.

**Cost of each service**

| Audio                     | HD video                   | Full HD video               | 2K video | 2K+ video                  |
| ------------------------- | -------------------------- | --------------------------- | -------- | -------------------------- |
| (300/1000) × 1.49 = 0.447 | (59/1000) × 5.99 = 0.35341 | (28/1000) × 13.49 = 0.37772 | 0        | (9/1000) × 53.99 = 0.48591 |

**Total cost**

| Amount   | Calculation                                                |
| -------- | ---------------------------------------------------------- |
| **1.66** | **(0.447 + 0.35341 + 0.37772 + 0.48591 = 1.66404 ≈ 1.66)** |

* Agora rounds up the monthly total fees to two decimal places.
* Agora gives each Agora account 10,000 minutes of free time per month. Because the monthly total service minutes in the above example do not exceed 10,000 minutes, the service is free of charge and the bill would show $US 0.

## Reference [#reference]

### Accuracy of service minutes [#accuracy-of-service-minutes]

At the end of each month, Agora adds up the usage duration (in seconds) of audio and video in each category, and divides them by 60 to get the respective service minutes (rounded up to the next integer). For example, if the duration of audio service of the month is 59 seconds, then the audio service minutes is calculated as 1 minute; if the duration of video service is 61 seconds, then the video service minutes is calculated as 2 minutes. The error of service minutes for each month is within 1 minute.

### Aggregate video resolution in dual-stream use-cases [#aggregate-video-resolution-in-dual-stream-use-cases]

When the user being recorded enables [dual-stream mode](../reference/glossary#dual-stream-mode), the recording service can receive only one stream at a time:

* If the recording server records the high-quality video stream, the aggregate video resolution is calculated based on the resolution of the high-quality video.
* If the recording server records the low-quality video stream, the aggregate video resolution is calculated based on the resolution of the video received by the server.

### Resolution calibration [#resolution-calibration]

When calculating the aggregate resolution, Agora counts the resolution of 225,280 (640 × 352) as 640 × 360.

## See also [#see-also]

* [Agora's free-of-charge policy for the first 10,000 minutes](/en/introduction/billing/billing-policies#free-of-charge-policy)
* [Billing, free deduction, and account suspension](/en/introduction/billing/billing-policies#billing-and-account-policies)
* [Web Page Recording pricing](pricing-webpage-recording)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains how Agora calculates your monthly bill for Cloud Recording."
  }, {
    heading: undefined,
    content: "If you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence."
  }, {
    heading: "cloud-recording-pricing",
    content: "The unit pricing for audio and video usage is as follows:"
  }, {
    heading: "cloud-recording-pricing",
    content: "Service Type"
  }, {
    heading: "cloud-recording-pricing",
    content: "Category"
  }, {
    heading: "cloud-recording-pricing",
    content: "Pricing, US$/1,000 minutes"
  }, {
    heading: "cloud-recording-pricing",
    content: "Recording Audio"
  }, {
    heading: "cloud-recording-pricing",
    content: "Audio"
  }, {
    heading: "cloud-recording-pricing",
    content: "1.49"
  }, {
    heading: "cloud-recording-pricing",
    content: "Recording Video"
  }, {
    heading: "cloud-recording-pricing",
    content: "High-Definition (HD)"
  }, {
    heading: "cloud-recording-pricing",
    content: "5.99"
  }, {
    heading: "cloud-recording-pricing",
    content: "Recording Video"
  }, {
    heading: "cloud-recording-pricing",
    content: "Full High-Definition (Full HD)"
  }, {
    heading: "cloud-recording-pricing",
    content: "13.49"
  }, {
    heading: "cloud-recording-pricing",
    content: "Recording Video"
  }, {
    heading: "cloud-recording-pricing",
    content: "2K"
  }, {
    heading: "cloud-recording-pricing",
    content: "23.99"
  }, {
    heading: "cloud-recording-pricing",
    content: "Recording Video"
  }, {
    heading: "cloud-recording-pricing",
    content: "2K+"
  }, {
    heading: "cloud-recording-pricing",
    content: "53.99"
  }, {
    heading: "cloud-recording-pricing",
    content: "Cloud-Based Screenshot Upload"
  }, {
    heading: "cloud-recording-pricing",
    content: "All definitions"
  }, {
    heading: "cloud-recording-pricing",
    content: "2.49 or free"
  }, {
    heading: "cloud-recording-pricing",
    content: "Cloud-Based Screenshot Upload is free if bundled with Cloud Recording, that is, initiated along with Cloud Recording in a single task."
  }, {
    heading: "video-category",
    content: "Agora determines video category based on **aggregate video resolution**, which is the sum of resolutions of all the video streams a user subscribes to at the same time. Agora adds up the resolution of all the video streams recorded at the same time to get the aggregate resolution, which categorizes video as follows:"
  }, {
    heading: "video-category",
    content: "Video category"
  }, {
    heading: "video-category",
    content: "Aggregate video resolution"
  }, {
    heading: "video-category",
    content: "High-Definition (HD)"
  }, {
    heading: "video-category",
    content: "Up to 921,600 (1280 × 720）"
  }, {
    heading: "video-category",
    content: "Full High-Definition (Full HD)"
  }, {
    heading: "video-category",
    content: "From greater than 921,600 (1280 × 720) to 2,073,600 (1920 × 1080)"
  }, {
    heading: "video-category",
    content: "2K"
  }, {
    heading: "video-category",
    content: "From greater than 2,073,600 (1920 × 1080) to 3,686,400 (2560 × 1440)"
  }, {
    heading: "video-category",
    content: "2K+"
  }, {
    heading: "video-category",
    content: "From greater than 3,686,400 (2560 × 1440) to 8,847,360 (4096 × 2160)"
  }, {
    heading: "video-category",
    content: "For example, if the recording server records two video streams with resolutions of 1280 × 720 and 1920 × 1080 at the same time, the aggregated resolution is (1280 × 720) + (1920 × 1080) = 2,995,200. Because 2,995,200 is greater than 2,073,600 but less than 3,686,400, the recording service is charged based on the 2K video pricing."
  }, {
    heading: "video-category",
    content: `The recording fee does not depend on the recording mode you choose. Regardless of whether you use the individual mode or
composite mode, the recording fee relates only to the number of the streams recorded, the recording time, and the aggregate
recording resolutions. The number of the streams recorded does not affect the recording duration,
but affects the aggregate recording resolution.`
  }, {
    heading: "cost-calculation",
    content: "Billing for Cloud Recording begins once you use Cloud Recording to record and save audio calls, group video calls, or interactive video streaming made via the Agora RTC SDK on your cloud storage."
  }, {
    heading: "cost-calculation",
    content: `Agora calculates the billing of all projects under your Agora Account monthly.
Cloud Recording usage isn't covered by the monthly 10,000 free-of-charge minutes.
Agora adds up the usage duration (in seconds) of audio and video in each category,
and divides them by 60 to get the respective service minutes (rounded up to the nearest integer).
Then, Agora multiplies the service minutes by the corresponding pricing to get the cost of that month.`
  }, {
    heading: "cost-calculation",
    content: "The basic formula is shown here:"
  }, {
    heading: "cost-calculation",
    content: "**Monthly cost = audio pricing × audio service minutes + video pricing × video service minutes**"
  }, {
    heading: "cost-calculation",
    content: "If the recording server successfully records both audio and video at the same time, then Agora only charges for the video minutes. During a recording, the idle minutes are charged based on the audio pricing. The cost is the audio pricing × idle minutes."
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
    content: "The recording bot subscribes to audio and video streams in the channel, but these subscriptions do not incur additional Real-Time Communication usage fees."
  }, {
    heading: "service-minutes",
    content: "If you create a recording instance and record multiple audio and video streams at the same time in a channel, the total service minutes per streams are not additive. For example:"
  }, {
    heading: "service-minutes",
    content: "If a recording instance records the video streams of both user A and user B for the same 10 minutes, the billing for the recording service is for 10 minutes of video."
  }, {
    heading: "service-minutes",
    content: "If a recording instance records the audio stream of user A and the video stream of user B for the same 10 minutes, the billing for the recording device is also for 10 minutes of video. If you use multiple recording sessions at the same time in a channel, then the service minutes per recording session are additive."
  }, {
    heading: "examples",
    content: "This section shows how to calculate the monthly audio and video service minutes of each category, as well as the total cost based on the corresponding unit price."
  }, {
    heading: "examples",
    content: "Suppose you have an enabled project named Test under your Agora account, and the project uses the Agora Cloud Recording to implement the recording function."
  }, {
    heading: "examples",
    content: "The recording usage duration of the project between February 1 and February 28, 2021 is as follows:"
  }, {
    heading: "recording-one",
    content: "On February 4, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. You start one cloud recording session to record only the audio streams of the four users in the channel."
  }, {
    heading: "recording-one",
    content: "During this recording, the recording service generates only charges for the audio minutes."
  }, {
    heading: "recording-one",
    content: "Session"
  }, {
    heading: "recording-one",
    content: "Audio"
  }, {
    heading: "recording-one",
    content: "HD video"
  }, {
    heading: "recording-one",
    content: "Full HD video"
  }, {
    heading: "recording-one",
    content: "2K video"
  }, {
    heading: "recording-one",
    content: "2K+ video"
  }, {
    heading: "recording-one",
    content: "Usage duration (in seconds)"
  }, {
    heading: "recording-one",
    content: "6,000"
  }, {
    heading: "recording-one",
    content: "0"
  }, {
    heading: "recording-one",
    content: "0"
  }, {
    heading: "recording-one",
    content: "0"
  }, {
    heading: "recording-one",
    content: "0"
  }, {
    heading: "recording-two",
    content: "On February 9, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. You start an individual Recording and a composite Recording, two cloud recording sessions to record only the audio streams of the four users in the channel."
  }, {
    heading: "recording-two",
    content: "During this recording, the recording service generates only charges for the audio minutes."
  }, {
    heading: "recording-two",
    content: "Session"
  }, {
    heading: "recording-two",
    content: "Audio"
  }, {
    heading: "recording-two",
    content: "HD video"
  }, {
    heading: "recording-two",
    content: "Full HD video"
  }, {
    heading: "recording-two",
    content: "2K video"
  }, {
    heading: "recording-two",
    content: "2K+ video"
  }, {
    heading: "recording-two",
    content: "Usage duration in seconds"
  }, {
    heading: "recording-two",
    content: "6,000 + 6,000 = 12,000"
  }, {
    heading: "recording-two",
    content: "0"
  }, {
    heading: "recording-two",
    content: "0"
  }, {
    heading: "recording-two",
    content: "0"
  }, {
    heading: "recording-two",
    content: "0"
  }, {
    heading: "recording-three",
    content: "On February 13, 2021: Four users join the channel at the same time and have a video call for 3,500 seconds. You start one cloud recording session to record the audio and video streams of the four users in the channel. The video resolution of each user is 640 × 360."
  }, {
    heading: "recording-three",
    content: "During this recording, the recording service generates charges for the video minutes. The aggregate video resolution is 4 × (640 × 360) = 921,600, falling into the category of HD."
  }, {
    heading: "recording-three",
    content: "Session"
  }, {
    heading: "recording-three",
    content: "Audio"
  }, {
    heading: "recording-three",
    content: "HD video"
  }, {
    heading: "recording-three",
    content: "Full HD video"
  }, {
    heading: "recording-three",
    content: "2K video"
  }, {
    heading: "recording-three",
    content: "2K+ video"
  }, {
    heading: "recording-three",
    content: "Usage duration in seconds"
  }, {
    heading: "recording-three",
    content: "0"
  }, {
    heading: "recording-three",
    content: "3,500"
  }, {
    heading: "recording-three",
    content: "0"
  }, {
    heading: "recording-three",
    content: "0"
  }, {
    heading: "recording-three",
    content: "0"
  }, {
    heading: "recording-four",
    content: "On February 15, 2021: Users A, B, and C join the channel at the same time and have interactive live video streaming. The video resolution of A, B, and C is 640 x 360, 1280 x 720, and 960 x 720. 1,680 seconds later, user D joins the channel, and has interactive live streaming with A, B, and C for 520 seconds. The video resolution of D is 1920 x 1080. During live streaming, you start one cloud recording session to record the audio and video streams of all the users in the channel."
  }, {
    heading: "recording-four",
    content: "During this recording, the recording service generates charges for the video minutes."
  }, {
    heading: "recording-four",
    content: "In the initial 1,680 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 = 1,843,200, falling into the category of Full HD video."
  }, {
    heading: "recording-four",
    content: "In the subsequent 520 seconds, the aggregate resolution is 640 x 360 + 1280 x 720 + 960 x 720 + 1920 x 1080 = 3,916,800, falling into the category of 2K+ video."
  }, {
    heading: "recording-four",
    content: "Session"
  }, {
    heading: "recording-four",
    content: "Audio"
  }, {
    heading: "recording-four",
    content: "HD video"
  }, {
    heading: "recording-four",
    content: "Full HD video"
  }, {
    heading: "recording-four",
    content: "2K video"
  }, {
    heading: "recording-four",
    content: "2K+ video"
  }, {
    heading: "recording-four",
    content: "Usage duration (in seconds)"
  }, {
    heading: "recording-four",
    content: "0"
  }, {
    heading: "recording-four",
    content: "0"
  }, {
    heading: "recording-four",
    content: "1,680"
  }, {
    heading: "recording-four",
    content: "0"
  }, {
    heading: "recording-four",
    content: "520"
  }, {
    heading: "calculate-cost",
    content: "Date"
  }, {
    heading: "calculate-cost",
    content: "Actual audio (s)"
  }, {
    heading: "calculate-cost",
    content: "Actual HD video (s)"
  }, {
    heading: "calculate-cost",
    content: "Actual Full HD video (s)"
  }, {
    heading: "calculate-cost",
    content: "Actual 2K video (s)"
  }, {
    heading: "calculate-cost",
    content: "Actual 2K+ video (s)"
  }, {
    heading: "calculate-cost",
    content: "Console audio (min)"
  }, {
    heading: "calculate-cost",
    content: "Console HD video (min)"
  }, {
    heading: "calculate-cost",
    content: "Console Full HD video (min)"
  }, {
    heading: "calculate-cost",
    content: "Console 2K video (min)"
  }, {
    heading: "calculate-cost",
    content: "Console 2K+ video (min)"
  }, {
    heading: "calculate-cost",
    content: "2020-02-04"
  }, {
    heading: "calculate-cost",
    content: "6,000"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "100"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "2020-02-09"
  }, {
    heading: "calculate-cost",
    content: "12,000"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "200"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "2020-02-13"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "3,500"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "59"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "2020-02-15"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "1,680"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "520"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "28"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "9"
  }, {
    heading: "calculate-cost",
    content: "Monthly usage"
  }, {
    heading: "calculate-cost",
    content: "18,000"
  }, {
    heading: "calculate-cost",
    content: "3,500"
  }, {
    heading: "calculate-cost",
    content: "1,680"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "520"
  }, {
    heading: "calculate-cost",
    content: "300"
  }, {
    heading: "calculate-cost",
    content: "59"
  }, {
    heading: "calculate-cost",
    content: "28"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "9"
  }, {
    heading: "calculate-cost",
    content: "**Billable service minutes**"
  }, {
    heading: "calculate-cost",
    content: "Audio"
  }, {
    heading: "calculate-cost",
    content: "HD video"
  }, {
    heading: "calculate-cost",
    content: "Full HD video"
  }, {
    heading: "calculate-cost",
    content: "2K video"
  }, {
    heading: "calculate-cost",
    content: "2K+ video"
  }, {
    heading: "calculate-cost",
    content: "300 minutes"
  }, {
    heading: "calculate-cost",
    content: "59 minutes"
  }, {
    heading: "calculate-cost",
    content: "28 minutes"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "9 minutes"
  }, {
    heading: "calculate-cost",
    content: "The usage displayed on Agora Console is for reference only and not used as the actual billing basis."
  }, {
    heading: "calculate-cost",
    content: "**Cost of each service**"
  }, {
    heading: "calculate-cost",
    content: "Audio"
  }, {
    heading: "calculate-cost",
    content: "HD video"
  }, {
    heading: "calculate-cost",
    content: "Full HD video"
  }, {
    heading: "calculate-cost",
    content: "2K video"
  }, {
    heading: "calculate-cost",
    content: "2K+ video"
  }, {
    heading: "calculate-cost",
    content: "(300/1000) × 1.49 = 0.447"
  }, {
    heading: "calculate-cost",
    content: "(59/1000) × 5.99 = 0.35341"
  }, {
    heading: "calculate-cost",
    content: "(28/1000) × 13.49 = 0.37772"
  }, {
    heading: "calculate-cost",
    content: "0"
  }, {
    heading: "calculate-cost",
    content: "(9/1000) × 53.99 = 0.48591"
  }, {
    heading: "calculate-cost",
    content: "**Total cost**"
  }, {
    heading: "calculate-cost",
    content: "Amount"
  }, {
    heading: "calculate-cost",
    content: "Calculation"
  }, {
    heading: "calculate-cost",
    content: "**1.66**"
  }, {
    heading: "calculate-cost",
    content: "**(0.447 + 0.35341 + 0.37772 + 0.48591 = 1.66404 ≈ 1.66)**"
  }, {
    heading: "calculate-cost",
    content: "Agora rounds up the monthly total fees to two decimal places."
  }, {
    heading: "calculate-cost",
    content: "Agora gives each Agora account 10,000 minutes of free time per month. Because the monthly total service minutes in the above example do not exceed 10,000 minutes, the service is free of charge and the bill would show $US 0."
  }, {
    heading: "accuracy-of-service-minutes",
    content: "At the end of each month, Agora adds up the usage duration (in seconds) of audio and video in each category, and divides them by 60 to get the respective service minutes (rounded up to the next integer). For example, if the duration of audio service of the month is 59 seconds, then the audio service minutes is calculated as 1 minute; if the duration of video service is 61 seconds, then the video service minutes is calculated as 2 minutes. The error of service minutes for each month is within 1 minute."
  }, {
    heading: "aggregate-video-resolution-in-dual-stream-use-cases",
    content: "When the user being recorded enables dual-stream mode, the recording service can receive only one stream at a time:"
  }, {
    heading: "aggregate-video-resolution-in-dual-stream-use-cases",
    content: "If the recording server records the high-quality video stream, the aggregate video resolution is calculated based on the resolution of the high-quality video."
  }, {
    heading: "aggregate-video-resolution-in-dual-stream-use-cases",
    content: "If the recording server records the low-quality video stream, the aggregate video resolution is calculated based on the resolution of the video received by the server."
  }, {
    heading: "resolution-calibration",
    content: "When calculating the aggregate resolution, Agora counts the resolution of 225,280 (640 × 352) as 640 × 360."
  }, {
    heading: "see-also",
    content: "Agora's free-of-charge policy for the first 10,000 minutes"
  }, {
    heading: "see-also",
    content: "Billing, free deduction, and account suspension"
  }, {
    heading: "see-also",
    content: "Web Page Recording pricing"
  }],
  headings: [{
    id: "cloud-recording-pricing",
    content: "Cloud Recording pricing"
  }, {
    id: "video-category",
    content: "Video category"
  }, {
    id: "cost-calculation",
    content: "Cost calculation"
  }, {
    id: "service-minutes",
    content: "Service minutes"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "recording-one",
    content: "Recording one"
  }, {
    id: "recording-two",
    content: "Recording two"
  }, {
    id: "recording-three",
    content: "Recording three"
  }, {
    id: "recording-four",
    content: "Recording four"
  }, {
    id: "calculate-cost",
    content: "Calculate cost"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "accuracy-of-service-minutes",
    content: "Accuracy of service minutes"
  }, {
    id: "aggregate-video-resolution-in-dual-stream-use-cases",
    content: "Aggregate video resolution in dual-stream use-cases"
  }, {
    id: "resolution-calibration",
    content: "Resolution calibration"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
  depth: 2,
  url: "#cloud-recording-pricing",
  title: _jsx(_Fragment, {
    children: "Cloud Recording pricing"
  })
}, {
  depth: 3,
  url: "#video-category",
  title: _jsx(_Fragment, {
    children: "Video category"
  })
}, {
  depth: 2,
  url: "#cost-calculation",
  title: _jsx(_Fragment, {
    children: "Cost calculation"
  })
}, {
  depth: 3,
  url: "#service-minutes",
  title: _jsx(_Fragment, {
    children: "Service minutes"
  })
}, {
  depth: 2,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 4,
  url: "#recording-one",
  title: _jsx(_Fragment, {
    children: "Recording one"
  })
}, {
  depth: 4,
  url: "#recording-two",
  title: _jsx(_Fragment, {
    children: "Recording two"
  })
}, {
  depth: 4,
  url: "#recording-three",
  title: _jsx(_Fragment, {
    children: "Recording three"
  })
}, {
  depth: 4,
  url: "#recording-four",
  title: _jsx(_Fragment, {
    children: "Recording four"
  })
}, {
  depth: 3,
  url: "#calculate-cost",
  title: _jsx(_Fragment, {
    children: "Calculate cost"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#accuracy-of-service-minutes",
  title: _jsx(_Fragment, {
    children: "Accuracy of service minutes"
  })
}, {
  depth: 3,
  url: "#aggregate-video-resolution-in-dual-stream-use-cases",
  title: _jsx(_Fragment, {
    children: "Aggregate video resolution in dual-stream use-cases"
  })
}, {
  depth: 3,
  url: "#resolution-calibration",
  title: _jsx(_Fragment, {
    children: "Resolution calibration"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page explains how Agora calculates your monthly bill for Cloud Recording."
    }), `
`, _jsx(_components.p, {
      children: "If you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "cloud-recording-pricing",
      children: "Cloud Recording pricing"
    }), `
`, _jsx(_components.p, {
      children: "The unit pricing for audio and video usage is as follows:"
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
              textAlign: "left"
            },
            children: "Category"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Pricing, US$/1,000 minutes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recording Audio"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1.49"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recording Video"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-Definition (HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recording Video"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Full High-Definition (Full HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "13.49"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recording Video"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2K"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "23.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recording Video"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2K+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "53.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Cloud-Based Screenshot Upload"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "All definitions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2.49 or free"
          })]
        })]
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Cloud-Based Screenshot Upload is free if bundled with Cloud Recording, that is, initiated along with Cloud Recording in a single task."
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "video-category",
      children: "Video category"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora determines video category based on ", _jsx(_components.strong, {
        children: "aggregate video resolution"
      }), ", which is the sum of resolutions of all the video streams a user subscribes to at the same time. Agora adds up the resolution of all the video streams recorded at the same time to get the aggregate resolution, which categorizes video as follows:"]
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
            children: "Up to 921,600 (1280 × 720）"
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
`, _jsx(_components.p, {
      children: `The recording fee does not depend on the recording mode you choose. Regardless of whether you use the individual mode or
composite mode, the recording fee relates only to the number of the streams recorded, the recording time, and the aggregate
recording resolutions. The number of the streams recorded does not affect the recording duration,
but affects the aggregate recording resolution.`
    }), `
`, _jsx(_components.h2, {
      id: "cost-calculation",
      children: "Cost calculation"
    }), `
`, _jsx(_components.p, {
      children: "Billing for Cloud Recording begins once you use Cloud Recording to record and save audio calls, group video calls, or interactive video streaming made via the Agora RTC SDK on your cloud storage."
    }), `
`, _jsxs(_components.p, {
      children: ["Agora calculates the billing of all projects under your ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Account"
      }), ` monthly.
Cloud Recording usage isn't covered by the monthly `, _jsx(_components.a, {
        href: "/en/introduction/billing/billing-policies#free-of-charge-policy",
        children: "10,000 free-of-charge minutes"
      }), `.
Agora adds up the usage duration (in seconds) of audio and video in each category,
and divides them by 60 to get the respective service minutes (rounded up to the nearest integer).
Then, Agora multiplies the service minutes by the corresponding pricing to get the cost of that month.`]
    }), `
`, _jsx(_components.p, {
      children: "The basic formula is shown here:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Monthly cost = audio pricing × audio service minutes + video pricing × video service minutes"
      })
    }), `
`, _jsx(_components.p, {
      children: "If the recording server successfully records both audio and video at the same time, then Agora only charges for the video minutes. During a recording, the idle minutes are charged based on the audio pricing. The cost is the audio pricing × idle minutes."
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
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The recording bot subscribes to audio and video streams in the channel, but these subscriptions do not incur additional Real-Time Communication usage fees."
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "If you create a recording instance and record multiple audio and video streams at the same time in a channel, the total service minutes per streams are not additive. For example:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If a recording instance records the video streams of both user A and user B for the same 10 minutes, the billing for the recording service is for 10 minutes of video."
      }), `
`, _jsx(_components.li, {
        children: "If a recording instance records the audio stream of user A and the video stream of user B for the same 10 minutes, the billing for the recording device is also for 10 minutes of video. If you use multiple recording sessions at the same time in a channel, then the service minutes per recording session are additive."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), `
`, _jsx(_components.p, {
      children: "This section shows how to calculate the monthly audio and video service minutes of each category, as well as the total cost based on the corresponding unit price."
    }), `
`, _jsx(_components.p, {
      children: "Suppose you have an enabled project named Test under your Agora account, and the project uses the Agora Cloud Recording to implement the recording function."
    }), `
`, _jsx(_components.p, {
      children: "The recording usage duration of the project between February 1 and February 28, 2021 is as follows:"
    }), `
`, _jsx(_components.h4, {
      id: "recording-one",
      children: "Recording one"
    }), `
`, _jsx(_components.p, {
      children: "On February 4, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. You start one cloud recording session to record only the audio streams of the four users in the channel."
    }), `
`, _jsx(_components.p, {
      children: "During this recording, the recording service generates only charges for the audio minutes."
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
      id: "recording-two",
      children: "Recording two"
    }), `
`, _jsx(_components.p, {
      children: "On February 9, 2021: Four users join the channel at the same time and have a video call for 6,000 seconds. You start an individual Recording and a composite Recording, two cloud recording sessions to record only the audio streams of the four users in the channel."
    }), `
`, _jsx(_components.p, {
      children: "During this recording, the recording service generates only charges for the audio minutes."
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
            children: "Usage duration in seconds"
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
      id: "recording-three",
      children: "Recording three"
    }), `
`, _jsx(_components.p, {
      children: "On February 13, 2021: Four users join the channel at the same time and have a video call for 3,500 seconds. You start one cloud recording session to record the audio and video streams of the four users in the channel. The video resolution of each user is 640 × 360."
    }), `
`, _jsx(_components.p, {
      children: "During this recording, the recording service generates charges for the video minutes. The aggregate video resolution is 4 × (640 × 360) = 921,600, falling into the category of HD."
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
            children: "Usage duration in seconds"
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
      id: "recording-four",
      children: "Recording four"
    }), `
`, _jsx(_components.p, {
      children: "On February 15, 2021: Users A, B, and C join the channel at the same time and have interactive live video streaming. The video resolution of A, B, and C is 640 x 360, 1280 x 720, and 960 x 720. 1,680 seconds later, user D joins the channel, and has interactive live streaming with A, B, and C for 520 seconds. The video resolution of D is 1920 x 1080. During live streaming, you start one cloud recording session to record the audio and video streams of all the users in the channel."
    }), `
`, _jsx(_components.p, {
      children: "During this recording, the recording service generates charges for the video minutes."
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
      id: "calculate-cost",
      children: "Calculate cost"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Date"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Actual audio (s)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Actual HD video (s)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Actual Full HD video (s)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Actual 2K video (s)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Actual 2K+ video (s)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Console audio (min)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Console HD video (min)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Console Full HD video (min)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Console 2K video (min)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Console 2K+ video (min)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2020-02-04"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "6,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2020-02-09"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "12,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "200"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2020-02-13"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "3,500"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "59"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2020-02-15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "1,680"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "520"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "28"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "9"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Monthly usage"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "18,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "3,500"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "1,680"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "520"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "300"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "59"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "28"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "9"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Billable service minutes"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Audio"
          }), _jsx(_components.th, {
            children: "HD video"
          }), _jsx(_components.th, {
            children: "Full HD video"
          }), _jsx(_components.th, {
            children: "2K video"
          }), _jsx(_components.th, {
            children: "2K+ video"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "300 minutes"
          }), _jsx(_components.td, {
            children: "59 minutes"
          }), _jsx(_components.td, {
            children: "28 minutes"
          }), _jsx(_components.td, {
            children: "0"
          }), _jsx(_components.td, {
            children: "9 minutes"
          })]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "The usage displayed on Agora Console is for reference only and not used as the actual billing basis."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Cost of each service"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Audio"
          }), _jsx(_components.th, {
            children: "HD video"
          }), _jsx(_components.th, {
            children: "Full HD video"
          }), _jsx(_components.th, {
            children: "2K video"
          }), _jsx(_components.th, {
            children: "2K+ video"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "(300/1000) × 1.49 = 0.447"
          }), _jsx(_components.td, {
            children: "(59/1000) × 5.99 = 0.35341"
          }), _jsx(_components.td, {
            children: "(28/1000) × 13.49 = 0.37772"
          }), _jsx(_components.td, {
            children: "0"
          }), _jsx(_components.td, {
            children: "(9/1000) × 53.99 = 0.48591"
          })]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Total cost"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Amount"
          }), _jsx(_components.th, {
            children: "Calculation"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "1.66"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "(0.447 + 0.35341 + 0.37772 + 0.48591 = 1.66404 ≈ 1.66)"
            })
          })]
        })
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Agora rounds up the monthly total fees to two decimal places."
      }), `
`, _jsx(_components.li, {
        children: "Agora gives each Agora account 10,000 minutes of free time per month. Because the monthly total service minutes in the above example do not exceed 10,000 minutes, the service is free of charge and the bill would show $US 0."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.h3, {
      id: "accuracy-of-service-minutes",
      children: "Accuracy of service minutes"
    }), `
`, _jsx(_components.p, {
      children: "At the end of each month, Agora adds up the usage duration (in seconds) of audio and video in each category, and divides them by 60 to get the respective service minutes (rounded up to the next integer). For example, if the duration of audio service of the month is 59 seconds, then the audio service minutes is calculated as 1 minute; if the duration of video service is 61 seconds, then the video service minutes is calculated as 2 minutes. The error of service minutes for each month is within 1 minute."
    }), `
`, _jsx(_components.h3, {
      id: "aggregate-video-resolution-in-dual-stream-use-cases",
      children: "Aggregate video resolution in dual-stream use-cases"
    }), `
`, _jsxs(_components.p, {
      children: ["When the user being recorded enables ", _jsx(_components.a, {
        href: "../reference/glossary#dual-stream-mode",
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
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/billing/billing-policies#free-of-charge-policy",
          children: "Agora's free-of-charge policy for the first 10,000 minutes"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/billing/billing-policies#billing-and-account-policies",
          children: "Billing, free deduction, and account suspension"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "pricing-webpage-recording",
          children: "Web Page Recording pricing"
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
