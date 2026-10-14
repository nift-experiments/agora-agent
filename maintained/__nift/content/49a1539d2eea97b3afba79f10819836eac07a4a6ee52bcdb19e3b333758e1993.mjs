import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Legacy pricing",
  description: "Reference the previous monthly billing model for Video Calling during the transition to prepaid RTC packages."
};
export let _markdown = `

This page documents Agora's previous pricing model based on monthly billing. It remains available for reference during the transition to the new prepaid packages.

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    You're viewing information about Agora's previous monthly billing model. For the latest prepaid packages, see [Pricing](./pricing.mdx).
  </CalloutDescription>
</CalloutContainer>

If you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence.

## Video Calling pricing [#video-calling-pricing]

The unit prices for audio and video usage are as follows:

| Usage type    | Pricing, US$/1,000 participant minutes |
| ------------- | -------------------------------------: |
| Audio         |                                   0.99 |
| Video HD      |                                   3.99 |
| Video Full HD |                                   8.99 |
| Video 2K      |                                  15.99 |
| Video 2K+     |                                  35.99 |

| Options                                                  | Pricing            | Discount guidance                      |
| -------------------------------------------------------- | ------------------ | -------------------------------------- |
| SDK side screenshot                                      | $0.3/10,000 images | First 10,000 images per month are free |
| Additional charge for SDK side screenshot when QPS > 500 | $1.5/QPS           | First 500 QPS per month are free       |

## Cost calculation [#cost-calculation]

Billing occurs monthly. At the end of each month, Agora calculates the total duration of the audio and video usage in all projects under your [Agora account](https://console.agora.io/v2).

Video usage is divided into four different types based on aggregate resolution and priced individually. After deducting the monthly [10,000 free-of-charge minutes](./billing-policies.mdx) that Agora grants to every account, Agora multiplies any remaining usage by its corresponding unit price and adds up the costs to get the total cost for that month.

The basic formula is shown here:

**Monthly cost** = **audio minutes** × **audio unit price** + **video minutes of each type** × **video unit price of each type**

### Usage [#usage]

In each Video Calling session, users communicate with each other in a Video Calling [channel](./glossary.mdx#channel). Agora measures the usage for each user from the moment they join a channel to the moment they leave it. If a user subscribes to video from other users in the channel, the usage is counted as video usage of the applicable type; otherwise, the usage is counted as audio usage.

Agora calculates usage based solely on a user's subscriptions in the channels they join. Whether they publish streams does not matter.

#### Audio usage [#audio-usage]

Audio usage is the default rate at which users are billed for joining a channel. Any time a user spends in a channel where they do not subscribe to video is counted as audio usage, regardless of whether they actually subscribe to audio from another user.

In channels with only one user, this usage is counted as audio usage because the user does not subscribe to any video.

#### Video usage [#video-usage]

Video usage is the amount of time that a user in a channel subscribes to video from other users. When a user subscribes to both audio and video at the same time, Agora counts this only as video usage.

Agora calculates video usage for each user based on aggregate resolution. Aggregate resolution is the sum of the resolutions of all the video streams a user subscribes to at the same time, which is the total number of pixels in the video streams the user receives. This calculation applies when a user subscribes to one video stream or multiple video streams.

Based on the aggregate resolution of all the video streams received, Agora divides video into the following types and calculates the usage duration of each type separately:

| Video type                     | Aggregate resolution, px                                 |
| ------------------------------ | -------------------------------------------------------- |
| High-definition (HD)           | Less than or equal to 921,600 (1280 × 720)               |
| Full High-definition (Full HD) | Greater than 921,600 and up to 2,073,600 (1920 × 1080)   |
| 2K                             | Greater than 2,073,600 and up to 3,686,400 (2560 × 1440) |
| 2K+                            | Greater than 3,686,400 and up to 8,847,360 (4096 × 2160) |

For example, if a user subscribes to two video streams with resolutions of 1280 × 720 and 1920 × 1080 at the same time, the aggregate resolution is \`(1280 × 720) + (1920 × 1080) = 2,995,200\`. Because \`2,995,200\` is greater than \`2,073,600\` but less than \`3,686,400\`, Agora counts this video usage as 2K and bills it at the 2K unit price.

### Usage-based volume discounts [#usage-based-volume-discounts]

Agora automatically offers the following tiered discounts for total monthly usage that exceeds 100,000 minutes:

| Minutes used           | Discount level |
| ---------------------- | -------------: |
| 100,000 to 499,999     |             5% |
| 500,000 to 999,999     |             7% |
| 1,000,000 to 3,000,000 |            10% |

These discounts apply to the usage within each tier. For example, if Agora bills an account for 600,000 minutes, the usage from 1 to 99,999 minutes receives no discount, the usage from 100,000 to 499,999 minutes receives a 5% discount, and the usage from 500,000 to 600,000 minutes receives a 7% discount.

If you expect your total monthly usage to exceed 3,000,000 minutes, contact [sales-us@agora.io](mailto\\:sales-us@agora.io) for additional discounts.

## Pricing for associated features [#pricing-for-associated-features]

If your use case involves an Agora product other than Video Calling, such as Cloud Proxy, Interactive Whiteboard, or Cloud Recording, expect additional charges. See below for Cloud Proxy pricing and the dedicated pricing pages for other products.

### Cloud Proxy pricing [#cloud-proxy-pricing]

Typically, about 5% to 10% of the audio and video traffic may require [Cloud Proxy](../build/manage-connection-and-quality/cloud-proxy.mdx). For Cloud Proxy, automatic mode is free of charge. Agora offers Force UDP and Force TCP cloud proxy modes with tiered capacity.

The minimum monthly base fee for each tier is:

| Capacity tier    | PCU                 |                                                                                                    Minimum monthly base fee, US$ |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------: |
| Tier 1 - Default | 200 or fewer        |                                                                                                                              500 |
| Tier 2           | From 201 to 1,000   |                                                                                                                            1,000 |
| Tier 3           | From 1,001 to 2,000 |                                                                                                                            2,000 |
| Tier 4           | 2,001 or more       | [Contact Sales](https://www.agora.io/en/talk-to-us/) or request support through the [Agora Console](https://console.agora.io/v2) |

Force UDP or Force TCP cloud proxy usage is measured in minutes and calculated separately according to the media type. The unit prices are as follows:

| Force UDP or Force TCP usage            | Pricing, US$/1,000 minutes |
| --------------------------------------- | -------------------------: |
| Audio                                   |                       0.99 |
| Video HD (720P or below)                |                       3.99 |
| Video Full HD (above 720p, up to 1080p) |                       8.99 |
| Video 2K (above 1080p, up to 2K)        |                      15.99 |
| Video 2K+ (above 2K)                    |                      35.99 |

When Force UDP or Force TCP is enabled at a specified capacity, Agora charges according to the following rules:

* **Minimum monthly fee**: Monthly usage-based fee including volume discounts is lower than the minimum monthly base fee.
* **Usage monthly fee**: Monthly usage-based fee including volume discounts exceeds the minimum monthly base fee.

You activate Cloud Proxy for Tier 1 directly in [Agora Console](https://console.agora.io/v2). Once Force UDP or Force TCP Cloud Proxy is activated, you are billed according to the minimum monthly base fee or the actual minutes of usage, whichever is greater. You can deactivate Cloud Proxy Force UDP or Force TCP modes at any time in the Agora Console. Deactivation takes effect immediately.

Agora offers a 10% overage allowance for all tiers of PCU at no additional charge. Agora notifies you when your PCU exceeds the 10% overage allowance. Upon receiving this notice, contact [Agora Customer Support](mailto\\:support@agora.io) to upgrade to the next tier to ensure you have sufficient capacity in the future. Before your upgrade, Agora does try to provide the required capacity beyond the 10% overage allowance; however, the quality of service for an overage greater than 10% is not guaranteed.

Billing occurs at the end of each calendar month. For other tiers, contact [Agora Customer Support](mailto\\:support@agora.io).

### AI Noise Suppression pricing [#ai-noise-suppression-pricing]

[AI Noise Suppression](../build/enhance-the-audio-experience/ai-noise-suppression.mdx) helps reduce noise and voice distortion in virtual communication. Agora charges for voice sent to the channel by a host while AI Noise Suppression is enabled.

AI Noise Suppression is free for up to 10,000 minutes each month. Additional usage is billed at the standard rate.

| Usage        | Pricing, US$/1,000 minutes |
| ------------ | -------------------------: |
| 0 to 10,000  |                       Free |
| Above 10,000 |                       0.59 |

### 3D Spatial Audio pricing [#3d-spatial-audio-pricing]

[3D Spatial Audio](../build/enhance-the-audio-experience/spatial-audio.mdx) brings theater-like effects to virtual communication, making it seem as if the sound originates from all around the user.

The unit prices for this extension are as follows:

| Usage, minutes per month | Pricing, US$/1,000 minutes |
| ------------------------ | -------------------------: |
| 0 to 10,000              |                       Free |
| Above 10,000             |                       0.99 |

Agora charges for the time each user spends in a channel with 3D Spatial Audio activated. For example, imagine there are 3 users in a channel, each one of them subscribing to remote audio. User A enables 3D Spatial Audio for 10 minutes. User B enables 3D Spatial Audio and has it on until leaving the channel. User C does not enable it at all. In this case, Agora charges for the combined time that users A and B had 3D Spatial Audio enabled, even if the remote audio was on mute at the time.

### Examples [#examples]

This section illustrates how Agora calculates aggregate video resolution, total usage per service type, and the associated costs.

Suppose that five users join a channel at the same time and have interactive live video streaming for 60 minutes. There are three hosts (A, B, and C), each with a video resolution set to 960 × 720. Two audience members subscribe to the video streams from the hosts. Additionally, Host A shares their screen with all other users in the channel. The video resolution of the screen-sharing stream is set to and received at 1920 × 1080.

#### Calculate aggregate video resolution [#calculate-aggregate-video-resolution]

The following table shows the calculations for the aggregate resolution for each user's video stream subscriptions. These determine the unit prices for their video usage:

| User              | Video streams subscribed          | Aggregate video resolution      |     Total | Video type |
| ----------------- | --------------------------------- | ------------------------------- | --------: | ---------- |
| Host A            | 2 hosts                           | 960 × 720 × 2                   | 1,382,400 | Full HD    |
| Host B            | 2 hosts + Host A's screen sharing | (960 × 720 × 2) + (1920 × 1080) | 3,456,000 | 2K         |
| Host C            | 2 hosts + Host A's screen sharing | (960 × 720 × 2) + (1920 × 1080) | 3,456,000 | 2K         |
| Audience Member 1 | 3 hosts + Host A's screen sharing | (960 × 720 × 3) + (1920 × 1080) | 4,147,200 | 2K+        |
| Audience Member 2 | 3 hosts + Host A's screen sharing | (960 × 720 × 3) + (1920 × 1080) | 4,147,200 | 2K+        |

#### Calculate cost [#calculate-cost]

The following table shows the calculation of the total cost of the live video streaming session:

| Billed service (video type) | Total usage (minutes) = Sum of all individual usage | Unit price (US$/1,000 minutes) | Cost of each service (US$)    | Total cost (US$) (rounded to two decimal places) |
| --------------------------- | --------------------------------------------------- | -----------------------------: | ----------------------------- | ------------------------------------------------ |
| Full HD                     | 60                                                  |                           8.99 | \`(60/1000) × 8.99 = 0.5394\`   |                                                  |
| 2K                          | 60 × 2 = 120                                        |                          15.99 | \`(120/1000) × 15.99 = 1.9188\` | \`6.777 ≈ 6.78\`                                   |
| 2K+                         | 60 × 2 = 120                                        |                          35.99 | \`(120/1000) × 35.99 = 4.3188\` |                                                  |

## Reference [#reference]

This section provides additional information for your reference.

### Accuracy of usage duration [#accuracy-of-usage-duration]

Agora bills usage by the minute but records usage by the second. Monthly usage for billing is calculated by totaling each type of usage in seconds and then dividing by 60, rounding up to the nearest integer. For example, if the audio usage for a month is 59 seconds, this is billed as 1 minute; if the HD video usage for a month is 61 seconds, this is billed as 2 minutes. Therefore, the margin of error for each usage type per month is less than 1 minute.

### Aggregate video resolution in dual-stream use cases [#aggregate-video-resolution-in-dual-stream-use-cases]

In dual-stream mode, the aggregate video resolution for each user is calculated as follows:

* If the user subscribes to the high-quality video stream, their aggregate resolution is calculated based on the resolution of the high-quality video sent by the host, regardless of the resulting video resolution on the user's end.
* If the user subscribes to the low-quality video stream, their aggregate resolution is calculated based on the resolution of the video received by the user.

### Video resolution during screen sharing [#video-resolution-during-screen-sharing]

In screen-sharing use cases, the unit price of the screen-sharing stream is calculated based on the video dimension you set in [ScreenCaptureParameters](https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_data_type.html#class_screencaptureparameters2).

### Resolution calibration [#resolution-calibration]

When calculating aggregate resolution, Agora counts \`640 × 352\` (225,280) as if it were \`640 × 360\` (230,400).

## See also [#see-also]

* [Billing policies and free-of-charge policy](./billing-policies.mdx)
* [Pricing](./pricing.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page documents Agora's previous pricing model based on monthly billing. It remains available for reference during the transition to the new prepaid packages."
  }, {
    heading: undefined,
    content: "You're viewing information about Agora's previous monthly billing model. For the latest prepaid packages, see Pricing."
  }, {
    heading: undefined,
    content: "If you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence."
  }, {
    heading: "video-calling-pricing",
    content: "The unit prices for audio and video usage are as follows:"
  }, {
    heading: "video-calling-pricing",
    content: "Usage type"
  }, {
    heading: "video-calling-pricing",
    content: "Pricing, US$/1,000 participant minutes"
  }, {
    heading: "video-calling-pricing",
    content: "Audio"
  }, {
    heading: "video-calling-pricing",
    content: "0.99"
  }, {
    heading: "video-calling-pricing",
    content: "Video HD"
  }, {
    heading: "video-calling-pricing",
    content: "3.99"
  }, {
    heading: "video-calling-pricing",
    content: "Video Full HD"
  }, {
    heading: "video-calling-pricing",
    content: "8.99"
  }, {
    heading: "video-calling-pricing",
    content: "Video 2K"
  }, {
    heading: "video-calling-pricing",
    content: "15.99"
  }, {
    heading: "video-calling-pricing",
    content: "Video 2K+"
  }, {
    heading: "video-calling-pricing",
    content: "35.99"
  }, {
    heading: "video-calling-pricing",
    content: "Options"
  }, {
    heading: "video-calling-pricing",
    content: "Pricing"
  }, {
    heading: "video-calling-pricing",
    content: "Discount guidance"
  }, {
    heading: "video-calling-pricing",
    content: "SDK side screenshot"
  }, {
    heading: "video-calling-pricing",
    content: "$0.3/10,000 images"
  }, {
    heading: "video-calling-pricing",
    content: "First 10,000 images per month are free"
  }, {
    heading: "video-calling-pricing",
    content: "Additional charge for SDK side screenshot when QPS > 500"
  }, {
    heading: "video-calling-pricing",
    content: "$1.5/QPS"
  }, {
    heading: "video-calling-pricing",
    content: "First 500 QPS per month are free"
  }, {
    heading: "cost-calculation",
    content: "Billing occurs monthly. At the end of each month, Agora calculates the total duration of the audio and video usage in all projects under your Agora account."
  }, {
    heading: "cost-calculation",
    content: "Video usage is divided into four different types based on aggregate resolution and priced individually. After deducting the monthly 10,000 free-of-charge minutes that Agora grants to every account, Agora multiplies any remaining usage by its corresponding unit price and adds up the costs to get the total cost for that month."
  }, {
    heading: "cost-calculation",
    content: "The basic formula is shown here:"
  }, {
    heading: "cost-calculation",
    content: "**Monthly cost** = **audio minutes** × **audio unit price** + **video minutes of each type** × **video unit price of each type**"
  }, {
    heading: "usage",
    content: "In each Video Calling session, users communicate with each other in a Video Calling channel. Agora measures the usage for each user from the moment they join a channel to the moment they leave it. If a user subscribes to video from other users in the channel, the usage is counted as video usage of the applicable type; otherwise, the usage is counted as audio usage."
  }, {
    heading: "usage",
    content: "Agora calculates usage based solely on a user's subscriptions in the channels they join. Whether they publish streams does not matter."
  }, {
    heading: "audio-usage",
    content: "Audio usage is the default rate at which users are billed for joining a channel. Any time a user spends in a channel where they do not subscribe to video is counted as audio usage, regardless of whether they actually subscribe to audio from another user."
  }, {
    heading: "audio-usage",
    content: "In channels with only one user, this usage is counted as audio usage because the user does not subscribe to any video."
  }, {
    heading: "video-usage",
    content: "Video usage is the amount of time that a user in a channel subscribes to video from other users. When a user subscribes to both audio and video at the same time, Agora counts this only as video usage."
  }, {
    heading: "video-usage",
    content: "Agora calculates video usage for each user based on aggregate resolution. Aggregate resolution is the sum of the resolutions of all the video streams a user subscribes to at the same time, which is the total number of pixels in the video streams the user receives. This calculation applies when a user subscribes to one video stream or multiple video streams."
  }, {
    heading: "video-usage",
    content: "Based on the aggregate resolution of all the video streams received, Agora divides video into the following types and calculates the usage duration of each type separately:"
  }, {
    heading: "video-usage",
    content: "Video type"
  }, {
    heading: "video-usage",
    content: "Aggregate resolution, px"
  }, {
    heading: "video-usage",
    content: "High-definition (HD)"
  }, {
    heading: "video-usage",
    content: "Less than or equal to 921,600 (1280 × 720)"
  }, {
    heading: "video-usage",
    content: "Full High-definition (Full HD)"
  }, {
    heading: "video-usage",
    content: "Greater than 921,600 and up to 2,073,600 (1920 × 1080)"
  }, {
    heading: "video-usage",
    content: "2K"
  }, {
    heading: "video-usage",
    content: "Greater than 2,073,600 and up to 3,686,400 (2560 × 1440)"
  }, {
    heading: "video-usage",
    content: "2K+"
  }, {
    heading: "video-usage",
    content: "Greater than 3,686,400 and up to 8,847,360 (4096 × 2160)"
  }, {
    heading: "video-usage",
    content: "For example, if a user subscribes to two video streams with resolutions of 1280 × 720 and 1920 × 1080 at the same time, the aggregate resolution is `(1280 × 720) + (1920 × 1080) = 2,995,200`. Because `2,995,200` is greater than `2,073,600` but less than `3,686,400`, Agora counts this video usage as 2K and bills it at the 2K unit price."
  }, {
    heading: "usage-based-volume-discounts",
    content: "Agora automatically offers the following tiered discounts for total monthly usage that exceeds 100,000 minutes:"
  }, {
    heading: "usage-based-volume-discounts",
    content: "Minutes used"
  }, {
    heading: "usage-based-volume-discounts",
    content: "Discount level"
  }, {
    heading: "usage-based-volume-discounts",
    content: "100,000 to 499,999"
  }, {
    heading: "usage-based-volume-discounts",
    content: "5%"
  }, {
    heading: "usage-based-volume-discounts",
    content: "500,000 to 999,999"
  }, {
    heading: "usage-based-volume-discounts",
    content: "7%"
  }, {
    heading: "usage-based-volume-discounts",
    content: "1,000,000 to 3,000,000"
  }, {
    heading: "usage-based-volume-discounts",
    content: "10%"
  }, {
    heading: "usage-based-volume-discounts",
    content: "These discounts apply to the usage within each tier. For example, if Agora bills an account for 600,000 minutes, the usage from 1 to 99,999 minutes receives no discount, the usage from 100,000 to 499,999 minutes receives a 5% discount, and the usage from 500,000 to 600,000 minutes receives a 7% discount."
  }, {
    heading: "usage-based-volume-discounts",
    content: "If you expect your total monthly usage to exceed 3,000,000 minutes, contact sales-us\\@agora.io for additional discounts."
  }, {
    heading: "pricing-for-associated-features",
    content: "If your use case involves an Agora product other than Video Calling, such as Cloud Proxy, Interactive Whiteboard, or Cloud Recording, expect additional charges. See below for Cloud Proxy pricing and the dedicated pricing pages for other products."
  }, {
    heading: "cloud-proxy-pricing",
    content: "Typically, about 5% to 10% of the audio and video traffic may require Cloud Proxy. For Cloud Proxy, automatic mode is free of charge. Agora offers Force UDP and Force TCP cloud proxy modes with tiered capacity."
  }, {
    heading: "cloud-proxy-pricing",
    content: "The minimum monthly base fee for each tier is:"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Capacity tier"
  }, {
    heading: "cloud-proxy-pricing",
    content: "PCU"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Minimum monthly base fee, US$"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Tier 1 - Default"
  }, {
    heading: "cloud-proxy-pricing",
    content: "200 or fewer"
  }, {
    heading: "cloud-proxy-pricing",
    content: "500"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Tier 2"
  }, {
    heading: "cloud-proxy-pricing",
    content: "From 201 to 1,000"
  }, {
    heading: "cloud-proxy-pricing",
    content: "1,000"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Tier 3"
  }, {
    heading: "cloud-proxy-pricing",
    content: "From 1,001 to 2,000"
  }, {
    heading: "cloud-proxy-pricing",
    content: "2,000"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Tier 4"
  }, {
    heading: "cloud-proxy-pricing",
    content: "2,001 or more"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Contact Sales or request support through the Agora Console"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Force UDP or Force TCP cloud proxy usage is measured in minutes and calculated separately according to the media type. The unit prices are as follows:"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Force UDP or Force TCP usage"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Pricing, US$/1,000 minutes"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Audio"
  }, {
    heading: "cloud-proxy-pricing",
    content: "0.99"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Video HD (720P or below)"
  }, {
    heading: "cloud-proxy-pricing",
    content: "3.99"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Video Full HD (above 720p, up to 1080p)"
  }, {
    heading: "cloud-proxy-pricing",
    content: "8.99"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Video 2K (above 1080p, up to 2K)"
  }, {
    heading: "cloud-proxy-pricing",
    content: "15.99"
  }, {
    heading: "cloud-proxy-pricing",
    content: "Video 2K+ (above 2K)"
  }, {
    heading: "cloud-proxy-pricing",
    content: "35.99"
  }, {
    heading: "cloud-proxy-pricing",
    content: "When Force UDP or Force TCP is enabled at a specified capacity, Agora charges according to the following rules:"
  }, {
    heading: "cloud-proxy-pricing",
    content: "**Minimum monthly fee**: Monthly usage-based fee including volume discounts is lower than the minimum monthly base fee."
  }, {
    heading: "cloud-proxy-pricing",
    content: "**Usage monthly fee**: Monthly usage-based fee including volume discounts exceeds the minimum monthly base fee."
  }, {
    heading: "cloud-proxy-pricing",
    content: "You activate Cloud Proxy for Tier 1 directly in Agora Console. Once Force UDP or Force TCP Cloud Proxy is activated, you are billed according to the minimum monthly base fee or the actual minutes of usage, whichever is greater. You can deactivate Cloud Proxy Force UDP or Force TCP modes at any time in the Agora Console. Deactivation takes effect immediately."
  }, {
    heading: "cloud-proxy-pricing",
    content: "Agora offers a 10% overage allowance for all tiers of PCU at no additional charge. Agora notifies you when your PCU exceeds the 10% overage allowance. Upon receiving this notice, contact Agora Customer Support to upgrade to the next tier to ensure you have sufficient capacity in the future. Before your upgrade, Agora does try to provide the required capacity beyond the 10% overage allowance; however, the quality of service for an overage greater than 10% is not guaranteed."
  }, {
    heading: "cloud-proxy-pricing",
    content: "Billing occurs at the end of each calendar month. For other tiers, contact Agora Customer Support."
  }, {
    heading: "ai-noise-suppression-pricing",
    content: "AI Noise Suppression helps reduce noise and voice distortion in virtual communication. Agora charges for voice sent to the channel by a host while AI Noise Suppression is enabled."
  }, {
    heading: "ai-noise-suppression-pricing",
    content: "AI Noise Suppression is free for up to 10,000 minutes each month. Additional usage is billed at the standard rate."
  }, {
    heading: "ai-noise-suppression-pricing",
    content: "Usage"
  }, {
    heading: "ai-noise-suppression-pricing",
    content: "Pricing, US$/1,000 minutes"
  }, {
    heading: "ai-noise-suppression-pricing",
    content: "0 to 10,000"
  }, {
    heading: "ai-noise-suppression-pricing",
    content: "Free"
  }, {
    heading: "ai-noise-suppression-pricing",
    content: "Above 10,000"
  }, {
    heading: "ai-noise-suppression-pricing",
    content: "0.59"
  }, {
    heading: "3d-spatial-audio-pricing",
    content: "3D Spatial Audio brings theater-like effects to virtual communication, making it seem as if the sound originates from all around the user."
  }, {
    heading: "3d-spatial-audio-pricing",
    content: "The unit prices for this extension are as follows:"
  }, {
    heading: "3d-spatial-audio-pricing",
    content: "Usage, minutes per month"
  }, {
    heading: "3d-spatial-audio-pricing",
    content: "Pricing, US$/1,000 minutes"
  }, {
    heading: "3d-spatial-audio-pricing",
    content: "0 to 10,000"
  }, {
    heading: "3d-spatial-audio-pricing",
    content: "Free"
  }, {
    heading: "3d-spatial-audio-pricing",
    content: "Above 10,000"
  }, {
    heading: "3d-spatial-audio-pricing",
    content: "0.99"
  }, {
    heading: "3d-spatial-audio-pricing",
    content: "Agora charges for the time each user spends in a channel with 3D Spatial Audio activated. For example, imagine there are 3 users in a channel, each one of them subscribing to remote audio. User A enables 3D Spatial Audio for 10 minutes. User B enables 3D Spatial Audio and has it on until leaving the channel. User C does not enable it at all. In this case, Agora charges for the combined time that users A and B had 3D Spatial Audio enabled, even if the remote audio was on mute at the time."
  }, {
    heading: "examples",
    content: "This section illustrates how Agora calculates aggregate video resolution, total usage per service type, and the associated costs."
  }, {
    heading: "examples",
    content: "Suppose that five users join a channel at the same time and have interactive live video streaming for 60 minutes. There are three hosts (A, B, and C), each with a video resolution set to 960 × 720. Two audience members subscribe to the video streams from the hosts. Additionally, Host A shares their screen with all other users in the channel. The video resolution of the screen-sharing stream is set to and received at 1920 × 1080."
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "The following table shows the calculations for the aggregate resolution for each user's video stream subscriptions. These determine the unit prices for their video usage:"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "User"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Video streams subscribed"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Aggregate video resolution"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Total"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Video type"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Host A"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "2 hosts"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "960 × 720 × 2"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "1,382,400"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Full HD"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Host B"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "2 hosts + Host A's screen sharing"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "(960 × 720 × 2) + (1920 × 1080)"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "3,456,000"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "2K"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Host C"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "2 hosts + Host A's screen sharing"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "(960 × 720 × 2) + (1920 × 1080)"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "3,456,000"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "2K"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Audience Member 1"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "3 hosts + Host A's screen sharing"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "(960 × 720 × 3) + (1920 × 1080)"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "4,147,200"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "2K+"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "Audience Member 2"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "3 hosts + Host A's screen sharing"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "(960 × 720 × 3) + (1920 × 1080)"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "4,147,200"
  }, {
    heading: "calculate-aggregate-video-resolution",
    content: "2K+"
  }, {
    heading: "calculate-cost",
    content: "The following table shows the calculation of the total cost of the live video streaming session:"
  }, {
    heading: "calculate-cost",
    content: "Billed service (video type)"
  }, {
    heading: "calculate-cost",
    content: "Total usage (minutes) = Sum of all individual usage"
  }, {
    heading: "calculate-cost",
    content: "Unit price (US$/1,000 minutes)"
  }, {
    heading: "calculate-cost",
    content: "Cost of each service (US$)"
  }, {
    heading: "calculate-cost",
    content: "Total cost (US$) (rounded to two decimal places)"
  }, {
    heading: "calculate-cost",
    content: "Full HD"
  }, {
    heading: "calculate-cost",
    content: "60"
  }, {
    heading: "calculate-cost",
    content: "8.99"
  }, {
    heading: "calculate-cost",
    content: "`(60/1000) × 8.99 = 0.5394`"
  }, {
    heading: "calculate-cost",
    content: "2K"
  }, {
    heading: "calculate-cost",
    content: "60 × 2 = 120"
  }, {
    heading: "calculate-cost",
    content: "15.99"
  }, {
    heading: "calculate-cost",
    content: "`(120/1000) × 15.99 = 1.9188`"
  }, {
    heading: "calculate-cost",
    content: "`6.777 ≈ 6.78`"
  }, {
    heading: "calculate-cost",
    content: "2K+"
  }, {
    heading: "calculate-cost",
    content: "60 × 2 = 120"
  }, {
    heading: "calculate-cost",
    content: "35.99"
  }, {
    heading: "calculate-cost",
    content: "`(120/1000) × 35.99 = 4.3188`"
  }, {
    heading: "reference",
    content: "This section provides additional information for your reference."
  }, {
    heading: "accuracy-of-usage-duration",
    content: "Agora bills usage by the minute but records usage by the second. Monthly usage for billing is calculated by totaling each type of usage in seconds and then dividing by 60, rounding up to the nearest integer. For example, if the audio usage for a month is 59 seconds, this is billed as 1 minute; if the HD video usage for a month is 61 seconds, this is billed as 2 minutes. Therefore, the margin of error for each usage type per month is less than 1 minute."
  }, {
    heading: "aggregate-video-resolution-in-dual-stream-use-cases",
    content: "In dual-stream mode, the aggregate video resolution for each user is calculated as follows:"
  }, {
    heading: "aggregate-video-resolution-in-dual-stream-use-cases",
    content: "If the user subscribes to the high-quality video stream, their aggregate resolution is calculated based on the resolution of the high-quality video sent by the host, regardless of the resulting video resolution on the user's end."
  }, {
    heading: "aggregate-video-resolution-in-dual-stream-use-cases",
    content: "If the user subscribes to the low-quality video stream, their aggregate resolution is calculated based on the resolution of the video received by the user."
  }, {
    heading: "video-resolution-during-screen-sharing",
    content: "In screen-sharing use cases, the unit price of the screen-sharing stream is calculated based on the video dimension you set in ScreenCaptureParameters."
  }, {
    heading: "resolution-calibration",
    content: "When calculating aggregate resolution, Agora counts `640 × 352` (225,280) as if it were `640 × 360` (230,400)."
  }, {
    heading: "see-also",
    content: "Billing policies and free-of-charge policy"
  }, {
    heading: "see-also",
    content: "Pricing"
  }],
  headings: [{
    id: "video-calling-pricing",
    content: "Video Calling pricing"
  }, {
    id: "cost-calculation",
    content: "Cost calculation"
  }, {
    id: "usage",
    content: "Usage"
  }, {
    id: "audio-usage",
    content: "Audio usage"
  }, {
    id: "video-usage",
    content: "Video usage"
  }, {
    id: "usage-based-volume-discounts",
    content: "Usage-based volume discounts"
  }, {
    id: "pricing-for-associated-features",
    content: "Pricing for associated features"
  }, {
    id: "cloud-proxy-pricing",
    content: "Cloud Proxy pricing"
  }, {
    id: "ai-noise-suppression-pricing",
    content: "AI Noise Suppression pricing"
  }, {
    id: "3d-spatial-audio-pricing",
    content: "3D Spatial Audio pricing"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "calculate-aggregate-video-resolution",
    content: "Calculate aggregate video resolution"
  }, {
    id: "calculate-cost",
    content: "Calculate cost"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "accuracy-of-usage-duration",
    content: "Accuracy of usage duration"
  }, {
    id: "aggregate-video-resolution-in-dual-stream-use-cases",
    content: "Aggregate video resolution in dual-stream use cases"
  }, {
    id: "video-resolution-during-screen-sharing",
    content: "Video resolution during screen sharing"
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
  url: "#video-calling-pricing",
  title: _jsx(_Fragment, {
    children: "Video Calling pricing"
  })
}, {
  depth: 2,
  url: "#cost-calculation",
  title: _jsx(_Fragment, {
    children: "Cost calculation"
  })
}, {
  depth: 3,
  url: "#usage",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 4,
  url: "#audio-usage",
  title: _jsx(_Fragment, {
    children: "Audio usage"
  })
}, {
  depth: 4,
  url: "#video-usage",
  title: _jsx(_Fragment, {
    children: "Video usage"
  })
}, {
  depth: 3,
  url: "#usage-based-volume-discounts",
  title: _jsx(_Fragment, {
    children: "Usage-based volume discounts"
  })
}, {
  depth: 2,
  url: "#pricing-for-associated-features",
  title: _jsx(_Fragment, {
    children: "Pricing for associated features"
  })
}, {
  depth: 3,
  url: "#cloud-proxy-pricing",
  title: _jsx(_Fragment, {
    children: "Cloud Proxy pricing"
  })
}, {
  depth: 3,
  url: "#ai-noise-suppression-pricing",
  title: _jsx(_Fragment, {
    children: "AI Noise Suppression pricing"
  })
}, {
  depth: 3,
  url: "#3d-spatial-audio-pricing",
  title: _jsx(_Fragment, {
    children: "3D Spatial Audio pricing"
  })
}, {
  depth: 3,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 4,
  url: "#calculate-aggregate-video-resolution",
  title: _jsx(_Fragment, {
    children: "Calculate aggregate video resolution"
  })
}, {
  depth: 4,
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
  url: "#accuracy-of-usage-duration",
  title: _jsx(_Fragment, {
    children: "Accuracy of usage duration"
  })
}, {
  depth: 3,
  url: "#aggregate-video-resolution-in-dual-stream-use-cases",
  title: _jsx(_Fragment, {
    children: "Aggregate video resolution in dual-stream use cases"
  })
}, {
  depth: 3,
  url: "#video-resolution-during-screen-sharing",
  title: _jsx(_Fragment, {
    children: "Video resolution during screen sharing"
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
    code: "code",
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
      children: "This page documents Agora's previous pricing model based on monthly billing. It remains available for reference during the transition to the new prepaid packages."
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["You're viewing information about Agora's previous monthly billing model. For the latest prepaid packages, see ", _jsx(_components.a, {
            href: "./pricing.mdx",
            children: "Pricing"
          }), "."]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "If you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence."
    }), `
`, _jsx(_components.h2, {
      id: "video-calling-pricing",
      children: "Video Calling pricing"
    }), `
`, _jsx(_components.p, {
      children: "The unit prices for audio and video usage are as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Usage type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Pricing, US$/1,000 participant minutes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video HD"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "3.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video Full HD"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "8.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video 2K"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "15.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video 2K+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "35.99"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Options"
          }), _jsx(_components.th, {
            children: "Pricing"
          }), _jsx(_components.th, {
            children: "Discount guidance"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "SDK side screenshot"
          }), _jsx(_components.td, {
            children: "$0.3/10,000 images"
          }), _jsx(_components.td, {
            children: "First 10,000 images per month are free"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Additional charge for SDK side screenshot when QPS > 500"
          }), _jsx(_components.td, {
            children: "$1.5/QPS"
          }), _jsx(_components.td, {
            children: "First 500 QPS per month are free"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "cost-calculation",
      children: "Cost calculation"
    }), `
`, _jsxs(_components.p, {
      children: ["Billing occurs monthly. At the end of each month, Agora calculates the total duration of the audio and video usage in all projects under your ", _jsx(_components.a, {
        href: "https://console.agora.io/v2",
        children: "Agora account"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["Video usage is divided into four different types based on aggregate resolution and priced individually. After deducting the monthly ", _jsx(_components.a, {
        href: "./billing-policies.mdx",
        children: "10,000 free-of-charge minutes"
      }), " that Agora grants to every account, Agora multiplies any remaining usage by its corresponding unit price and adds up the costs to get the total cost for that month."]
    }), `
`, _jsx(_components.p, {
      children: "The basic formula is shown here:"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Monthly cost"
      }), " = ", _jsx(_components.strong, {
        children: "audio minutes"
      }), " × ", _jsx(_components.strong, {
        children: "audio unit price"
      }), " + ", _jsx(_components.strong, {
        children: "video minutes of each type"
      }), " × ", _jsx(_components.strong, {
        children: "video unit price of each type"
      })]
    }), `
`, _jsx(_components.h3, {
      id: "usage",
      children: "Usage"
    }), `
`, _jsxs(_components.p, {
      children: ["In each Video Calling session, users communicate with each other in a Video Calling ", _jsx(_components.a, {
        href: "./glossary.mdx#channel",
        children: "channel"
      }), ". Agora measures the usage for each user from the moment they join a channel to the moment they leave it. If a user subscribes to video from other users in the channel, the usage is counted as video usage of the applicable type; otherwise, the usage is counted as audio usage."]
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates usage based solely on a user's subscriptions in the channels they join. Whether they publish streams does not matter."
    }), `
`, _jsx(_components.h4, {
      id: "audio-usage",
      children: "Audio usage"
    }), `
`, _jsx(_components.p, {
      children: "Audio usage is the default rate at which users are billed for joining a channel. Any time a user spends in a channel where they do not subscribe to video is counted as audio usage, regardless of whether they actually subscribe to audio from another user."
    }), `
`, _jsx(_components.p, {
      children: "In channels with only one user, this usage is counted as audio usage because the user does not subscribe to any video."
    }), `
`, _jsx(_components.h4, {
      id: "video-usage",
      children: "Video usage"
    }), `
`, _jsx(_components.p, {
      children: "Video usage is the amount of time that a user in a channel subscribes to video from other users. When a user subscribes to both audio and video at the same time, Agora counts this only as video usage."
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates video usage for each user based on aggregate resolution. Aggregate resolution is the sum of the resolutions of all the video streams a user subscribes to at the same time, which is the total number of pixels in the video streams the user receives. This calculation applies when a user subscribes to one video stream or multiple video streams."
    }), `
`, _jsx(_components.p, {
      children: "Based on the aggregate resolution of all the video streams received, Agora divides video into the following types and calculates the usage duration of each type separately:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Video type"
          }), _jsx(_components.th, {
            children: "Aggregate resolution, px"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "High-definition (HD)"
          }), _jsx(_components.td, {
            children: "Less than or equal to 921,600 (1280 × 720)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Full High-definition (Full HD)"
          }), _jsx(_components.td, {
            children: "Greater than 921,600 and up to 2,073,600 (1920 × 1080)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2K"
          }), _jsx(_components.td, {
            children: "Greater than 2,073,600 and up to 3,686,400 (2560 × 1440)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2K+"
          }), _jsx(_components.td, {
            children: "Greater than 3,686,400 and up to 8,847,360 (4096 × 2160)"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if a user subscribes to two video streams with resolutions of 1280 × 720 and 1920 × 1080 at the same time, the aggregate resolution is ", _jsx(_components.code, {
        children: "(1280 × 720) + (1920 × 1080) = 2,995,200"
      }), ". Because ", _jsx(_components.code, {
        children: "2,995,200"
      }), " is greater than ", _jsx(_components.code, {
        children: "2,073,600"
      }), " but less than ", _jsx(_components.code, {
        children: "3,686,400"
      }), ", Agora counts this video usage as 2K and bills it at the 2K unit price."]
    }), `
`, _jsx(_components.h3, {
      id: "usage-based-volume-discounts",
      children: "Usage-based volume discounts"
    }), `
`, _jsx(_components.p, {
      children: "Agora automatically offers the following tiered discounts for total monthly usage that exceeds 100,000 minutes:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Minutes used"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Discount level"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "100,000 to 499,999"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "5%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "500,000 to 999,999"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "7%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1,000,000 to 3,000,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10%"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "These discounts apply to the usage within each tier. For example, if Agora bills an account for 600,000 minutes, the usage from 1 to 99,999 minutes receives no discount, the usage from 100,000 to 499,999 minutes receives a 5% discount, and the usage from 500,000 to 600,000 minutes receives a 7% discount."
    }), `
`, _jsxs(_components.p, {
      children: ["If you expect your total monthly usage to exceed 3,000,000 minutes, contact ", _jsx(_components.a, {
        href: "mailto:sales-us@agora.io",
        children: "sales-us@agora.io"
      }), " for additional discounts."]
    }), `
`, _jsx(_components.h2, {
      id: "pricing-for-associated-features",
      children: "Pricing for associated features"
    }), `
`, _jsx(_components.p, {
      children: "If your use case involves an Agora product other than Video Calling, such as Cloud Proxy, Interactive Whiteboard, or Cloud Recording, expect additional charges. See below for Cloud Proxy pricing and the dedicated pricing pages for other products."
    }), `
`, _jsx(_components.h3, {
      id: "cloud-proxy-pricing",
      children: "Cloud Proxy pricing"
    }), `
`, _jsxs(_components.p, {
      children: ["Typically, about 5% to 10% of the audio and video traffic may require ", _jsx(_components.a, {
        href: "../build/manage-connection-and-quality/cloud-proxy.mdx",
        children: "Cloud Proxy"
      }), ". For Cloud Proxy, automatic mode is free of charge. Agora offers Force UDP and Force TCP cloud proxy modes with tiered capacity."]
    }), `
`, _jsx(_components.p, {
      children: "The minimum monthly base fee for each tier is:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Capacity tier"
          }), _jsx(_components.th, {
            children: "PCU"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Minimum monthly base fee, US$"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Tier 1 - Default"
          }), _jsx(_components.td, {
            children: "200 or fewer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "500"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Tier 2"
          }), _jsx(_components.td, {
            children: "From 201 to 1,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "1,000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Tier 3"
          }), _jsx(_components.td, {
            children: "From 1,001 to 2,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "2,000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Tier 4"
          }), _jsx(_components.td, {
            children: "2,001 or more"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "right"
            },
            children: [_jsx(_components.a, {
              href: "https://www.agora.io/en/talk-to-us/",
              children: "Contact Sales"
            }), " or request support through the ", _jsx(_components.a, {
              href: "https://console.agora.io/v2",
              children: "Agora Console"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Force UDP or Force TCP cloud proxy usage is measured in minutes and calculated separately according to the media type. The unit prices are as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Force UDP or Force TCP usage"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Pricing, US$/1,000 minutes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video HD (720P or below)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "3.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video Full HD (above 720p, up to 1080p)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "8.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video 2K (above 1080p, up to 2K)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "15.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video 2K+ (above 2K)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "35.99"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "When Force UDP or Force TCP is enabled at a specified capacity, Agora charges according to the following rules:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Minimum monthly fee"
        }), ": Monthly usage-based fee including volume discounts is lower than the minimum monthly base fee."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Usage monthly fee"
        }), ": Monthly usage-based fee including volume discounts exceeds the minimum monthly base fee."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["You activate Cloud Proxy for Tier 1 directly in ", _jsx(_components.a, {
        href: "https://console.agora.io/v2",
        children: "Agora Console"
      }), ". Once Force UDP or Force TCP Cloud Proxy is activated, you are billed according to the minimum monthly base fee or the actual minutes of usage, whichever is greater. You can deactivate Cloud Proxy Force UDP or Force TCP modes at any time in the Agora Console. Deactivation takes effect immediately."]
    }), `
`, _jsxs(_components.p, {
      children: ["Agora offers a 10% overage allowance for all tiers of PCU at no additional charge. Agora notifies you when your PCU exceeds the 10% overage allowance. Upon receiving this notice, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora Customer Support"
      }), " to upgrade to the next tier to ensure you have sufficient capacity in the future. Before your upgrade, Agora does try to provide the required capacity beyond the 10% overage allowance; however, the quality of service for an overage greater than 10% is not guaranteed."]
    }), `
`, _jsxs(_components.p, {
      children: ["Billing occurs at the end of each calendar month. For other tiers, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora Customer Support"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "ai-noise-suppression-pricing",
      children: "AI Noise Suppression pricing"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "../build/enhance-the-audio-experience/ai-noise-suppression.mdx",
        children: "AI Noise Suppression"
      }), " helps reduce noise and voice distortion in virtual communication. Agora charges for voice sent to the channel by a host while AI Noise Suppression is enabled."]
    }), `
`, _jsx(_components.p, {
      children: "AI Noise Suppression is free for up to 10,000 minutes each month. Additional usage is billed at the standard rate."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Usage"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Pricing, US$/1,000 minutes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "0 to 10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Free"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Above 10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.59"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "3d-spatial-audio-pricing",
      children: "3D Spatial Audio pricing"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "../build/enhance-the-audio-experience/spatial-audio.mdx",
        children: "3D Spatial Audio"
      }), " brings theater-like effects to virtual communication, making it seem as if the sound originates from all around the user."]
    }), `
`, _jsx(_components.p, {
      children: "The unit prices for this extension are as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Usage, minutes per month"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Pricing, US$/1,000 minutes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "0 to 10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Free"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Above 10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.99"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Agora charges for the time each user spends in a channel with 3D Spatial Audio activated. For example, imagine there are 3 users in a channel, each one of them subscribing to remote audio. User A enables 3D Spatial Audio for 10 minutes. User B enables 3D Spatial Audio and has it on until leaving the channel. User C does not enable it at all. In this case, Agora charges for the combined time that users A and B had 3D Spatial Audio enabled, even if the remote audio was on mute at the time."
    }), `
`, _jsx(_components.h3, {
      id: "examples",
      children: "Examples"
    }), `
`, _jsx(_components.p, {
      children: "This section illustrates how Agora calculates aggregate video resolution, total usage per service type, and the associated costs."
    }), `
`, _jsx(_components.p, {
      children: "Suppose that five users join a channel at the same time and have interactive live video streaming for 60 minutes. There are three hosts (A, B, and C), each with a video resolution set to 960 × 720. Two audience members subscribe to the video streams from the hosts. Additionally, Host A shares their screen with all other users in the channel. The video resolution of the screen-sharing stream is set to and received at 1920 × 1080."
    }), `
`, _jsx(_components.h4, {
      id: "calculate-aggregate-video-resolution",
      children: "Calculate aggregate video resolution"
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the calculations for the aggregate resolution for each user's video stream subscriptions. These determine the unit prices for their video usage:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "User"
          }), _jsx(_components.th, {
            children: "Video streams subscribed"
          }), _jsx(_components.th, {
            children: "Aggregate video resolution"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Total"
          }), _jsx(_components.th, {
            children: "Video type"
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
            style: {
              textAlign: "right"
            },
            children: "1,382,400"
          }), _jsx(_components.td, {
            children: "Full HD"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Host B"
          }), _jsx(_components.td, {
            children: "2 hosts + Host A's screen sharing"
          }), _jsx(_components.td, {
            children: "(960 × 720 × 2) + (1920 × 1080)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "3,456,000"
          }), _jsx(_components.td, {
            children: "2K"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Host C"
          }), _jsx(_components.td, {
            children: "2 hosts + Host A's screen sharing"
          }), _jsx(_components.td, {
            children: "(960 × 720 × 2) + (1920 × 1080)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "3,456,000"
          }), _jsx(_components.td, {
            children: "2K"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audience Member 1"
          }), _jsx(_components.td, {
            children: "3 hosts + Host A's screen sharing"
          }), _jsx(_components.td, {
            children: "(960 × 720 × 3) + (1920 × 1080)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "4,147,200"
          }), _jsx(_components.td, {
            children: "2K+"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audience Member 2"
          }), _jsx(_components.td, {
            children: "3 hosts + Host A's screen sharing"
          }), _jsx(_components.td, {
            children: "(960 × 720 × 3) + (1920 × 1080)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "4,147,200"
          }), _jsx(_components.td, {
            children: "2K+"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "calculate-cost",
      children: "Calculate cost"
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the calculation of the total cost of the live video streaming session:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Billed service (video type)"
          }), _jsx(_components.th, {
            children: "Total usage (minutes) = Sum of all individual usage"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Unit price (US$/1,000 minutes)"
          }), _jsx(_components.th, {
            children: "Cost of each service (US$)"
          }), _jsx(_components.th, {
            children: "Total cost (US$) (rounded to two decimal places)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Full HD"
          }), _jsx(_components.td, {
            children: "60"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "8.99"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(60/1000) × 8.99 = 0.5394"
            })
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2K"
          }), _jsx(_components.td, {
            children: "60 × 2 = 120"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "15.99"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(120/1000) × 15.99 = 1.9188"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "6.777 ≈ 6.78"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2K+"
          }), _jsx(_components.td, {
            children: "60 × 2 = 120"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "35.99"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(120/1000) × 35.99 = 4.3188"
            })
          }), _jsx(_components.td, {})]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section provides additional information for your reference."
    }), `
`, _jsx(_components.h3, {
      id: "accuracy-of-usage-duration",
      children: "Accuracy of usage duration"
    }), `
`, _jsx(_components.p, {
      children: "Agora bills usage by the minute but records usage by the second. Monthly usage for billing is calculated by totaling each type of usage in seconds and then dividing by 60, rounding up to the nearest integer. For example, if the audio usage for a month is 59 seconds, this is billed as 1 minute; if the HD video usage for a month is 61 seconds, this is billed as 2 minutes. Therefore, the margin of error for each usage type per month is less than 1 minute."
    }), `
`, _jsx(_components.h3, {
      id: "aggregate-video-resolution-in-dual-stream-use-cases",
      children: "Aggregate video resolution in dual-stream use cases"
    }), `
`, _jsx(_components.p, {
      children: "In dual-stream mode, the aggregate video resolution for each user is calculated as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the user subscribes to the high-quality video stream, their aggregate resolution is calculated based on the resolution of the high-quality video sent by the host, regardless of the resulting video resolution on the user's end."
      }), `
`, _jsx(_components.li, {
        children: "If the user subscribes to the low-quality video stream, their aggregate resolution is calculated based on the resolution of the video received by the user."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "video-resolution-during-screen-sharing",
      children: "Video resolution during screen sharing"
    }), `
`, _jsxs(_components.p, {
      children: ["In screen-sharing use cases, the unit price of the screen-sharing stream is calculated based on the video dimension you set in ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_data_type.html#class_screencaptureparameters2",
        children: "ScreenCaptureParameters"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "resolution-calibration",
      children: "Resolution calibration"
    }), `
`, _jsxs(_components.p, {
      children: ["When calculating aggregate resolution, Agora counts ", _jsx(_components.code, {
        children: "640 × 352"
      }), " (225,280) as if it were ", _jsx(_components.code, {
        children: "640 × 360"
      }), " (230,400)."]
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./billing-policies.mdx",
          children: "Billing policies and free-of-charge policy"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./pricing.mdx",
          children: "Pricing"
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
