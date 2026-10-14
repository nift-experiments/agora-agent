import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Call Inspector glossary",
  description: "Unless otherwise specified, the term explanations on this page refer to Agora Analytics for all platforms and frameworks."
};
export let _markdown = `

Unless otherwise specified, the term explanations on this page refer to Agora Analytics for all platforms and frameworks.

## General concepts [#general-concepts]

### Channel [#channel]

Every audio or video call implemented by Agora SDKs happens in a channel. If an app is a building, a channel is a room in the building.

### Call [#call]

When a user joins an empty channel, a call starts; when all users leave the channel, this call ends. A call is defined as the period between the first user joining a channel and the last user leaving the channel. Once a channel is empty, it can be used again for another call.

### User [#user]

Each user in a call has a unique [user ID](/en/realtime-media/agora-analytics/reference/glossary) (either \`uid\` or \`userId\`).

### Sender/Host [#senderhost]

A sender or host is a user who sends audio or video streams at any point during a call.

### Receiver/Audience member [#receiveraudience-member]

A receiver or audience member is a user who receives audio or video streams at any point during a call. A receiver can receive audio and video streams from multiple senders at the same time.

### Audio freeze rate [#audio-freeze-rate]

Audio freezing occurs if audio rendering pauses for over 200 ms. The actual length of such a pause is called the audio freezing duration.

Audio freeze rate = (Sum of audio freezing duration per unit time / Total audio duration per unit time) × 100%.

A user’s audio freeze rate is different from a call’s audio freeze rate:

* For a user, the total audio duration is the sum of the duration of all subscribed audio streams, that is, audio duration [calculated by stream](/en/realtime-media/agora-analytics/reference/billing-policies).
* For a call, the total audio duration is the sum of each user’s total audio duration.

### Video freeze rate [#video-freeze-rate]

Video freezing occurs in the following situations:

* Native: When video rendering pauses for over 600 ms.
* Web: When video rendering pauses for over 500 ms

The actual length of such a pause is called video freezing duration.

Video freeze rate = (Sum of video freezing duration per unit time / Total video duration per unit time) × 100%.

A user’s video freeze rate is different from a call’s video freeze rate:

* For a user, the total video duration is the sum of the duration of all subscribed video streams, that is, video duration [calculated by stream](/en/realtime-media/agora-analytics/reference/billing-policies).
* For a call, the total video duration is the sum of each user’s total video duration.

## Call-specific metrics [#call-specific-metrics]

### ACU (Accumulated Call Users) [#acu-accumulated-call-users]

ACU is the total number of users who have joined the call at some point.

### PCU (Peak Concurrent Users) [#pcu-peak-concurrent-users]

PCU is the maximum number of concurrent users during the call.

### Call duration [#call-duration]

A call’s duration is the time from the start of a call until its end, that is, from the first user joining the channel to the last user leaving the channel.

## User-specific metrics [#user-specific-metrics]

### Total duration [#total-duration]

A user’s total duration is the time from when they first join a channel to when they finally leave it. If a user joins and leaves a channel multiple times during a call, the total duration does not reflect how long the user actually stays in the channel.

### In-call duration [#in-call-duration]

A user’s in-call duration is the actual time the user spends in the call. If a user joins and leaves a channel multiple times during a call, the in-call duration totals the length of each time period to reflect how long the user actually stays in the channel.

### Bitrate [#bitrate]

Bitrate is the amount of data (bits) sent or received per second.

A higher audio/video bitrate means higher audio/video quality. A low bitrate does not necessarily cause quality issues, but a very low bitrate often means poor audio/video quality.

| Sender-side metric                        | Receiver-side metric                                                                 | Description                                                                                                                                                                                                                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audio sending bitrate                     | Audio receiving bitrate                                                              | N/A                                                                                                                                                                                                                                                                                      |
| High-quality video stream sending bitrate | Native: High-quality video stream receiving bitrate<br/>Web: Video receiving bitrate | Because a Web client only receives one video stream from each sender, there is no need to separate high-quality and low-quality streams for the video receiving bitrate. A Web client automatically switches to receiving the low-quality video stream when network conditions are poor. |
| Low-quality video stream sending bitrate  | Native: Low-quality video stream receiving bitrate<br/>Web: Video receiving bitrate  | See High-quality video stream sending bitrate                                                                                                                                                                                                                                            |

### Packet loss (rate) [#packet-loss-rate]

Packet loss is the percentage of the data packets lost during data transmission.

On the sender side, packet loss measures the packets lost when sending the data; on the receiver side, packet loss measures the packets lost during data transmission from the sender to the receiver.

Slight packet loss usually does not affect user experience. High packet loss (over 5%) means the network quality is poor and might result in audio/video freezing and blurry video.

| Sender-side metric         | Receiver-side metric         |
| -------------------------- | ---------------------------- |
| Audio upstream packet loss | Audio end-to-end packet loss |
| Video upstream packet loss | Video end-to-end packet loss |

### Freeze time [#freeze-time]

Freeze time is any significant pause in audio or video reception.

| Receiver-side metric                      | Description                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audio rendering freeze time (Native only) | Audio rendering freezing occurs if it pauses for over 200 ms. A longer audio rendering freeze time means more significant audio freezing for the user.                                                                                                                                                                    |
| Video rendering freeze time               | Native: Video rendering freezing occurs if it pauses for over 600 ms when the sending frame rate exceeds 5 fps.<br/>Web: Video rendering freezing occurs if it pauses for over 500 ms when the sending frame rate exceeds 2 fps. A longer video rendering freeze time means more significant video freezing for the user. |

### Frame rate [#frame-rate]

Frame rate is the rate at which consecutive images (frames) appear on a display.

A higher frame rate means smoother video but uses more bandwidth and CPU resources. A low frame rate might cause video freeze.

| Sender-side metric                           | Receiver-side metric                                                                       | Description                                                                                                                                                                                                                                                                                 |
| -------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Video capture frame rate                     | N/A                                                                                        | N/A                                                                                                                                                                                                                                                                                         |
| High-quality video stream sending frame rate | Native: High-quality video stream receiving frame rate<br/>Web: Video receiving frame rate | Because a Web client only receives one video stream from each sender, there is no need to separate high-quality and low-quality streams for the video receiving frame rate. A Web client automatically switches to receiving the low-quality video stream when network conditions are poor. |
| Low-quality video stream sending frame rate  | Native: Low-quality video stream receiving frame rate<br/>Web: Video receiving frame rate  | See High-quality video stream sending frame rate                                                                                                                                                                                                                                            |

### Resolution [#resolution]

Resolution is the number of pixels in the width and height of an image.

A higher resolution (higher number of pixels) means clearer video.

| Sender-side metric                                       | Receiver-side metric                                                                       | Description                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High-quality video stream sending resolution             | Native: High-quality video stream receiving resolution<br/>Web: Video receiving resolution | Because a Web client only receives one video stream from each sender, there is no need to separate high-quality and low-quality streams for the video receiving resolution. A Web client automatically switches to receiving the low-quality video stream when network conditions are poor. |
| Low-quality video stream receiving resolution (Web only) | Native: High-quality video stream receiving resolution<br/>Web: Video receiving resolution | See High-quality video stream sending resolution                                                                                                                                                                                                                                            |

### Audio signal strength [#audio-signal-strength]

Audio signal strength is an indicator of volume. If the value of audio signal strength is lower than 80, you should pay special attention.

| Sender-side metric            | Receiver-side metric           |
| ----------------------------- | ------------------------------ |
| Audio capture signal strength | Audio playback signal strength |

### Network and device status [#network-and-device-status]

| Metric                      | Description                                                                                                                                                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wi-Fi or LAN signal quality | Wi-Fi or LAN signal quality is measured by the round-trip delay (milliseconds) from the client to the local router. If the delay is longer than 500 ms, you should pay special attention.                                                               |
| App CPU usage               | The CPU usage (%) of the app. If the user’s device has poor performance, the app’s CPU usage might be high, causing audio and video freezing. This metric is not available when using an emulator or using Rosetta on an M1 Mac.                        |
| System CPU usage            | The CPU usage (%) of the system. If the user’s device has poor performance, the system’s CPU usage might be high, causing audio and video freezing. This metric is not available when using an emulator or using Rosetta on an M1 Mac.                  |
| SDK task scheduling delay   | SDK task scheduling delay is the time interval (milliseconds) the SDK needs to schedule tasks for worker threads. This delay is an indirect indicator of the system’s performance. If the delay is longer than 80 ms, you should pay special attention. |

## Diagnosis checklist items [#diagnosis-checklist-items]

### Call experience diagnosis [#call-experience-diagnosis]

| Diagnosis checklist items | Description                                                                                                                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Video freezing            | The user might experience significant video freezing. A typical reason is that the user’s device performance and network conditions are poor. You should check related metrics to locate the problem. |
| Blurry video              | The user might see blurry video. You should check the user’s video receiving resolution, device status, and network conditions.                                                                       |
| No sound                  | The user continues to hear no sound. You should check events on the receiver side and audio sending statistics on the sender side to confirm this exception and locate the reason.                    |
| Audio freezing            | The user might experience significant audio freezing. A typical reason is that the user’s device performance and network conditions are poor. You should check related metrics to locate the problem. |

### Host diagnosis [#host-diagnosis]

| Diagnosis checklist items       | Description                                                                                                                                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Video capture frame rate is low | The video capture frame rate continues to be lower than 3 fps. This exception might cause video freezing and blur for the receiver.                                                     |
| Video output frame rate is low  | The frame rate of video encoding is low, possibly because the sender’s CPU usage or network packet loss is high. This exception might cause video freezing and blur for the receiver.   |
| Audio sending stops             | The sender stops sending audio for a significant time period. You should check the user’s key events to validate. This exception might cause the receiver to continue to hear no sound. |
| Audio capture frequency is low  | This exception might cause audio freezing for the receiver.                                                                                                                             |
| Audio sender’s system is busy   | The main thread of the audio sender’s system is busy. This exception might cause audio freezing for the receiver.                                                                       |
| Audio sender’s network is poor  | Possible reasons include upstream network congestion, high packet loss, or poor Wi-Fi signal. This exception might cause audio freezing for the receiver.                               |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Unless otherwise specified, the term explanations on this page refer to Agora Analytics for all platforms and frameworks."
  }, {
    heading: "channel",
    content: "Every audio or video call implemented by Agora SDKs happens in a channel. If an app is a building, a channel is a room in the building."
  }, {
    heading: "call",
    content: "When a user joins an empty channel, a call starts; when all users leave the channel, this call ends. A call is defined as the period between the first user joining a channel and the last user leaving the channel. Once a channel is empty, it can be used again for another call."
  }, {
    heading: "user",
    content: "Each user in a call has a unique user ID (either `uid` or `userId`)."
  }, {
    heading: "senderhost",
    content: "A sender or host is a user who sends audio or video streams at any point during a call."
  }, {
    heading: "receiveraudience-member",
    content: "A receiver or audience member is a user who receives audio or video streams at any point during a call. A receiver can receive audio and video streams from multiple senders at the same time."
  }, {
    heading: "audio-freeze-rate",
    content: "Audio freezing occurs if audio rendering pauses for over 200 ms. The actual length of such a pause is called the audio freezing duration."
  }, {
    heading: "audio-freeze-rate",
    content: "Audio freeze rate = (Sum of audio freezing duration per unit time / Total audio duration per unit time) × 100%."
  }, {
    heading: "audio-freeze-rate",
    content: "A user’s audio freeze rate is different from a call’s audio freeze rate:"
  }, {
    heading: "audio-freeze-rate",
    content: "For a user, the total audio duration is the sum of the duration of all subscribed audio streams, that is, audio duration calculated by stream."
  }, {
    heading: "audio-freeze-rate",
    content: "For a call, the total audio duration is the sum of each user’s total audio duration."
  }, {
    heading: "video-freeze-rate",
    content: "Video freezing occurs in the following situations:"
  }, {
    heading: "video-freeze-rate",
    content: "Native: When video rendering pauses for over 600 ms."
  }, {
    heading: "video-freeze-rate",
    content: "Web: When video rendering pauses for over 500 ms"
  }, {
    heading: "video-freeze-rate",
    content: "The actual length of such a pause is called video freezing duration."
  }, {
    heading: "video-freeze-rate",
    content: "Video freeze rate = (Sum of video freezing duration per unit time / Total video duration per unit time) × 100%."
  }, {
    heading: "video-freeze-rate",
    content: "A user’s video freeze rate is different from a call’s video freeze rate:"
  }, {
    heading: "video-freeze-rate",
    content: "For a user, the total video duration is the sum of the duration of all subscribed video streams, that is, video duration calculated by stream."
  }, {
    heading: "video-freeze-rate",
    content: "For a call, the total video duration is the sum of each user’s total video duration."
  }, {
    heading: "acu-accumulated-call-users",
    content: "ACU is the total number of users who have joined the call at some point."
  }, {
    heading: "pcu-peak-concurrent-users",
    content: "PCU is the maximum number of concurrent users during the call."
  }, {
    heading: "call-duration",
    content: "A call’s duration is the time from the start of a call until its end, that is, from the first user joining the channel to the last user leaving the channel."
  }, {
    heading: "total-duration",
    content: "A user’s total duration is the time from when they first join a channel to when they finally leave it. If a user joins and leaves a channel multiple times during a call, the total duration does not reflect how long the user actually stays in the channel."
  }, {
    heading: "in-call-duration",
    content: "A user’s in-call duration is the actual time the user spends in the call. If a user joins and leaves a channel multiple times during a call, the in-call duration totals the length of each time period to reflect how long the user actually stays in the channel."
  }, {
    heading: "bitrate",
    content: "Bitrate is the amount of data (bits) sent or received per second."
  }, {
    heading: "bitrate",
    content: "A higher audio/video bitrate means higher audio/video quality. A low bitrate does not necessarily cause quality issues, but a very low bitrate often means poor audio/video quality."
  }, {
    heading: "bitrate",
    content: "Sender-side metric"
  }, {
    heading: "bitrate",
    content: "Receiver-side metric"
  }, {
    heading: "bitrate",
    content: "Description"
  }, {
    heading: "bitrate",
    content: "Audio sending bitrate"
  }, {
    heading: "bitrate",
    content: "Audio receiving bitrate"
  }, {
    heading: "bitrate",
    content: "N/A"
  }, {
    heading: "bitrate",
    content: "High-quality video stream sending bitrate"
  }, {
    heading: "bitrate",
    content: "Native: High-quality video stream receiving bitrate<br/>Web: Video receiving bitrate"
  }, {
    heading: "bitrate",
    content: "Because a Web client only receives one video stream from each sender, there is no need to separate high-quality and low-quality streams for the video receiving bitrate. A Web client automatically switches to receiving the low-quality video stream when network conditions are poor."
  }, {
    heading: "bitrate",
    content: "Low-quality video stream sending bitrate"
  }, {
    heading: "bitrate",
    content: "Native: Low-quality video stream receiving bitrate<br/>Web: Video receiving bitrate"
  }, {
    heading: "bitrate",
    content: "See High-quality video stream sending bitrate"
  }, {
    heading: "packet-loss-rate",
    content: "Packet loss is the percentage of the data packets lost during data transmission."
  }, {
    heading: "packet-loss-rate",
    content: "On the sender side, packet loss measures the packets lost when sending the data; on the receiver side, packet loss measures the packets lost during data transmission from the sender to the receiver."
  }, {
    heading: "packet-loss-rate",
    content: "Slight packet loss usually does not affect user experience. High packet loss (over 5%) means the network quality is poor and might result in audio/video freezing and blurry video."
  }, {
    heading: "packet-loss-rate",
    content: "Sender-side metric"
  }, {
    heading: "packet-loss-rate",
    content: "Receiver-side metric"
  }, {
    heading: "packet-loss-rate",
    content: "Audio upstream packet loss"
  }, {
    heading: "packet-loss-rate",
    content: "Audio end-to-end packet loss"
  }, {
    heading: "packet-loss-rate",
    content: "Video upstream packet loss"
  }, {
    heading: "packet-loss-rate",
    content: "Video end-to-end packet loss"
  }, {
    heading: "freeze-time",
    content: "Freeze time is any significant pause in audio or video reception."
  }, {
    heading: "freeze-time",
    content: "Receiver-side metric"
  }, {
    heading: "freeze-time",
    content: "Description"
  }, {
    heading: "freeze-time",
    content: "Audio rendering freeze time (Native only)"
  }, {
    heading: "freeze-time",
    content: "Audio rendering freezing occurs if it pauses for over 200 ms. A longer audio rendering freeze time means more significant audio freezing for the user."
  }, {
    heading: "freeze-time",
    content: "Video rendering freeze time"
  }, {
    heading: "freeze-time",
    content: "Native: Video rendering freezing occurs if it pauses for over 600 ms when the sending frame rate exceeds 5 fps.<br/>Web: Video rendering freezing occurs if it pauses for over 500 ms when the sending frame rate exceeds 2 fps. A longer video rendering freeze time means more significant video freezing for the user."
  }, {
    heading: "frame-rate",
    content: "Frame rate is the rate at which consecutive images (frames) appear on a display."
  }, {
    heading: "frame-rate",
    content: "A higher frame rate means smoother video but uses more bandwidth and CPU resources. A low frame rate might cause video freeze."
  }, {
    heading: "frame-rate",
    content: "Sender-side metric"
  }, {
    heading: "frame-rate",
    content: "Receiver-side metric"
  }, {
    heading: "frame-rate",
    content: "Description"
  }, {
    heading: "frame-rate",
    content: "Video capture frame rate"
  }, {
    heading: "frame-rate",
    content: "N/A"
  }, {
    heading: "frame-rate",
    content: "N/A"
  }, {
    heading: "frame-rate",
    content: "High-quality video stream sending frame rate"
  }, {
    heading: "frame-rate",
    content: "Native: High-quality video stream receiving frame rate<br/>Web: Video receiving frame rate"
  }, {
    heading: "frame-rate",
    content: "Because a Web client only receives one video stream from each sender, there is no need to separate high-quality and low-quality streams for the video receiving frame rate. A Web client automatically switches to receiving the low-quality video stream when network conditions are poor."
  }, {
    heading: "frame-rate",
    content: "Low-quality video stream sending frame rate"
  }, {
    heading: "frame-rate",
    content: "Native: Low-quality video stream receiving frame rate<br/>Web: Video receiving frame rate"
  }, {
    heading: "frame-rate",
    content: "See High-quality video stream sending frame rate"
  }, {
    heading: "resolution",
    content: "Resolution is the number of pixels in the width and height of an image."
  }, {
    heading: "resolution",
    content: "A higher resolution (higher number of pixels) means clearer video."
  }, {
    heading: "resolution",
    content: "Sender-side metric"
  }, {
    heading: "resolution",
    content: "Receiver-side metric"
  }, {
    heading: "resolution",
    content: "Description"
  }, {
    heading: "resolution",
    content: "High-quality video stream sending resolution"
  }, {
    heading: "resolution",
    content: "Native: High-quality video stream receiving resolution<br/>Web: Video receiving resolution"
  }, {
    heading: "resolution",
    content: "Because a Web client only receives one video stream from each sender, there is no need to separate high-quality and low-quality streams for the video receiving resolution. A Web client automatically switches to receiving the low-quality video stream when network conditions are poor."
  }, {
    heading: "resolution",
    content: "Low-quality video stream receiving resolution (Web only)"
  }, {
    heading: "resolution",
    content: "Native: High-quality video stream receiving resolution<br/>Web: Video receiving resolution"
  }, {
    heading: "resolution",
    content: "See High-quality video stream sending resolution"
  }, {
    heading: "audio-signal-strength",
    content: "Audio signal strength is an indicator of volume. If the value of audio signal strength is lower than 80, you should pay special attention."
  }, {
    heading: "audio-signal-strength",
    content: "Sender-side metric"
  }, {
    heading: "audio-signal-strength",
    content: "Receiver-side metric"
  }, {
    heading: "audio-signal-strength",
    content: "Audio capture signal strength"
  }, {
    heading: "audio-signal-strength",
    content: "Audio playback signal strength"
  }, {
    heading: "network-and-device-status",
    content: "Metric"
  }, {
    heading: "network-and-device-status",
    content: "Description"
  }, {
    heading: "network-and-device-status",
    content: "Wi-Fi or LAN signal quality"
  }, {
    heading: "network-and-device-status",
    content: "Wi-Fi or LAN signal quality is measured by the round-trip delay (milliseconds) from the client to the local router. If the delay is longer than 500 ms, you should pay special attention."
  }, {
    heading: "network-and-device-status",
    content: "App CPU usage"
  }, {
    heading: "network-and-device-status",
    content: "The CPU usage (%) of the app. If the user’s device has poor performance, the app’s CPU usage might be high, causing audio and video freezing. This metric is not available when using an emulator or using Rosetta on an M1 Mac."
  }, {
    heading: "network-and-device-status",
    content: "System CPU usage"
  }, {
    heading: "network-and-device-status",
    content: "The CPU usage (%) of the system. If the user’s device has poor performance, the system’s CPU usage might be high, causing audio and video freezing. This metric is not available when using an emulator or using Rosetta on an M1 Mac."
  }, {
    heading: "network-and-device-status",
    content: "SDK task scheduling delay"
  }, {
    heading: "network-and-device-status",
    content: "SDK task scheduling delay is the time interval (milliseconds) the SDK needs to schedule tasks for worker threads. This delay is an indirect indicator of the system’s performance. If the delay is longer than 80 ms, you should pay special attention."
  }, {
    heading: "call-experience-diagnosis",
    content: "Diagnosis checklist items"
  }, {
    heading: "call-experience-diagnosis",
    content: "Description"
  }, {
    heading: "call-experience-diagnosis",
    content: "Video freezing"
  }, {
    heading: "call-experience-diagnosis",
    content: "The user might experience significant video freezing. A typical reason is that the user’s device performance and network conditions are poor. You should check related metrics to locate the problem."
  }, {
    heading: "call-experience-diagnosis",
    content: "Blurry video"
  }, {
    heading: "call-experience-diagnosis",
    content: "The user might see blurry video. You should check the user’s video receiving resolution, device status, and network conditions."
  }, {
    heading: "call-experience-diagnosis",
    content: "No sound"
  }, {
    heading: "call-experience-diagnosis",
    content: "The user continues to hear no sound. You should check events on the receiver side and audio sending statistics on the sender side to confirm this exception and locate the reason."
  }, {
    heading: "call-experience-diagnosis",
    content: "Audio freezing"
  }, {
    heading: "call-experience-diagnosis",
    content: "The user might experience significant audio freezing. A typical reason is that the user’s device performance and network conditions are poor. You should check related metrics to locate the problem."
  }, {
    heading: "host-diagnosis",
    content: "Diagnosis checklist items"
  }, {
    heading: "host-diagnosis",
    content: "Description"
  }, {
    heading: "host-diagnosis",
    content: "Video capture frame rate is low"
  }, {
    heading: "host-diagnosis",
    content: "The video capture frame rate continues to be lower than 3 fps. This exception might cause video freezing and blur for the receiver."
  }, {
    heading: "host-diagnosis",
    content: "Video output frame rate is low"
  }, {
    heading: "host-diagnosis",
    content: "The frame rate of video encoding is low, possibly because the sender’s CPU usage or network packet loss is high. This exception might cause video freezing and blur for the receiver."
  }, {
    heading: "host-diagnosis",
    content: "Audio sending stops"
  }, {
    heading: "host-diagnosis",
    content: "The sender stops sending audio for a significant time period. You should check the user’s key events to validate. This exception might cause the receiver to continue to hear no sound."
  }, {
    heading: "host-diagnosis",
    content: "Audio capture frequency is low"
  }, {
    heading: "host-diagnosis",
    content: "This exception might cause audio freezing for the receiver."
  }, {
    heading: "host-diagnosis",
    content: "Audio sender’s system is busy"
  }, {
    heading: "host-diagnosis",
    content: "The main thread of the audio sender’s system is busy. This exception might cause audio freezing for the receiver."
  }, {
    heading: "host-diagnosis",
    content: "Audio sender’s network is poor"
  }, {
    heading: "host-diagnosis",
    content: "Possible reasons include upstream network congestion, high packet loss, or poor Wi-Fi signal. This exception might cause audio freezing for the receiver."
  }],
  headings: [{
    id: "general-concepts",
    content: "General concepts"
  }, {
    id: "channel",
    content: "Channel"
  }, {
    id: "call",
    content: "Call"
  }, {
    id: "user",
    content: "User"
  }, {
    id: "senderhost",
    content: "Sender/Host"
  }, {
    id: "receiveraudience-member",
    content: "Receiver/Audience member"
  }, {
    id: "audio-freeze-rate",
    content: "Audio freeze rate"
  }, {
    id: "video-freeze-rate",
    content: "Video freeze rate"
  }, {
    id: "call-specific-metrics",
    content: "Call-specific metrics"
  }, {
    id: "acu-accumulated-call-users",
    content: "ACU (Accumulated Call Users)"
  }, {
    id: "pcu-peak-concurrent-users",
    content: "PCU (Peak Concurrent Users)"
  }, {
    id: "call-duration",
    content: "Call duration"
  }, {
    id: "user-specific-metrics",
    content: "User-specific metrics"
  }, {
    id: "total-duration",
    content: "Total duration"
  }, {
    id: "in-call-duration",
    content: "In-call duration"
  }, {
    id: "bitrate",
    content: "Bitrate"
  }, {
    id: "packet-loss-rate",
    content: "Packet loss (rate)"
  }, {
    id: "freeze-time",
    content: "Freeze time"
  }, {
    id: "frame-rate",
    content: "Frame rate"
  }, {
    id: "resolution",
    content: "Resolution"
  }, {
    id: "audio-signal-strength",
    content: "Audio signal strength"
  }, {
    id: "network-and-device-status",
    content: "Network and device status"
  }, {
    id: "diagnosis-checklist-items",
    content: "Diagnosis checklist items"
  }, {
    id: "call-experience-diagnosis",
    content: "Call experience diagnosis"
  }, {
    id: "host-diagnosis",
    content: "Host diagnosis"
  }]
};
export let toc = [{
  depth: 2,
  url: "#general-concepts",
  title: _jsx(_Fragment, {
    children: "General concepts"
  })
}, {
  depth: 3,
  url: "#channel",
  title: _jsx(_Fragment, {
    children: "Channel"
  })
}, {
  depth: 3,
  url: "#call",
  title: _jsx(_Fragment, {
    children: "Call"
  })
}, {
  depth: 3,
  url: "#user",
  title: _jsx(_Fragment, {
    children: "User"
  })
}, {
  depth: 3,
  url: "#senderhost",
  title: _jsx(_Fragment, {
    children: "Sender/Host"
  })
}, {
  depth: 3,
  url: "#receiveraudience-member",
  title: _jsx(_Fragment, {
    children: "Receiver/Audience member"
  })
}, {
  depth: 3,
  url: "#audio-freeze-rate",
  title: _jsx(_Fragment, {
    children: "Audio freeze rate"
  })
}, {
  depth: 3,
  url: "#video-freeze-rate",
  title: _jsx(_Fragment, {
    children: "Video freeze rate"
  })
}, {
  depth: 2,
  url: "#call-specific-metrics",
  title: _jsx(_Fragment, {
    children: "Call-specific metrics"
  })
}, {
  depth: 3,
  url: "#acu-accumulated-call-users",
  title: _jsx(_Fragment, {
    children: "ACU (Accumulated Call Users)"
  })
}, {
  depth: 3,
  url: "#pcu-peak-concurrent-users",
  title: _jsx(_Fragment, {
    children: "PCU (Peak Concurrent Users)"
  })
}, {
  depth: 3,
  url: "#call-duration",
  title: _jsx(_Fragment, {
    children: "Call duration"
  })
}, {
  depth: 2,
  url: "#user-specific-metrics",
  title: _jsx(_Fragment, {
    children: "User-specific metrics"
  })
}, {
  depth: 3,
  url: "#total-duration",
  title: _jsx(_Fragment, {
    children: "Total duration"
  })
}, {
  depth: 3,
  url: "#in-call-duration",
  title: _jsx(_Fragment, {
    children: "In-call duration"
  })
}, {
  depth: 3,
  url: "#bitrate",
  title: _jsx(_Fragment, {
    children: "Bitrate"
  })
}, {
  depth: 3,
  url: "#packet-loss-rate",
  title: _jsx(_Fragment, {
    children: "Packet loss (rate)"
  })
}, {
  depth: 3,
  url: "#freeze-time",
  title: _jsx(_Fragment, {
    children: "Freeze time"
  })
}, {
  depth: 3,
  url: "#frame-rate",
  title: _jsx(_Fragment, {
    children: "Frame rate"
  })
}, {
  depth: 3,
  url: "#resolution",
  title: _jsx(_Fragment, {
    children: "Resolution"
  })
}, {
  depth: 3,
  url: "#audio-signal-strength",
  title: _jsx(_Fragment, {
    children: "Audio signal strength"
  })
}, {
  depth: 3,
  url: "#network-and-device-status",
  title: _jsx(_Fragment, {
    children: "Network and device status"
  })
}, {
  depth: 2,
  url: "#diagnosis-checklist-items",
  title: _jsx(_Fragment, {
    children: "Diagnosis checklist items"
  })
}, {
  depth: 3,
  url: "#call-experience-diagnosis",
  title: _jsx(_Fragment, {
    children: "Call experience diagnosis"
  })
}, {
  depth: 3,
  url: "#host-diagnosis",
  title: _jsx(_Fragment, {
    children: "Host diagnosis"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
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
      children: "Unless otherwise specified, the term explanations on this page refer to Agora Analytics for all platforms and frameworks."
    }), `
`, _jsx(_components.h2, {
      id: "general-concepts",
      children: "General concepts"
    }), `
`, _jsx(_components.h3, {
      id: "channel",
      children: "Channel"
    }), `
`, _jsx(_components.p, {
      children: "Every audio or video call implemented by Agora SDKs happens in a channel. If an app is a building, a channel is a room in the building."
    }), `
`, _jsx(_components.h3, {
      id: "call",
      children: "Call"
    }), `
`, _jsx(_components.p, {
      children: "When a user joins an empty channel, a call starts; when all users leave the channel, this call ends. A call is defined as the period between the first user joining a channel and the last user leaving the channel. Once a channel is empty, it can be used again for another call."
    }), `
`, _jsx(_components.h3, {
      id: "user",
      children: "User"
    }), `
`, _jsxs(_components.p, {
      children: ["Each user in a call has a unique ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/reference/glossary",
        children: "user ID"
      }), " (either ", _jsx(_components.code, {
        children: "uid"
      }), " or ", _jsx(_components.code, {
        children: "userId"
      }), ")."]
    }), `
`, _jsx(_components.h3, {
      id: "senderhost",
      children: "Sender/Host"
    }), `
`, _jsx(_components.p, {
      children: "A sender or host is a user who sends audio or video streams at any point during a call."
    }), `
`, _jsx(_components.h3, {
      id: "receiveraudience-member",
      children: "Receiver/Audience member"
    }), `
`, _jsx(_components.p, {
      children: "A receiver or audience member is a user who receives audio or video streams at any point during a call. A receiver can receive audio and video streams from multiple senders at the same time."
    }), `
`, _jsx(_components.h3, {
      id: "audio-freeze-rate",
      children: "Audio freeze rate"
    }), `
`, _jsx(_components.p, {
      children: "Audio freezing occurs if audio rendering pauses for over 200 ms. The actual length of such a pause is called the audio freezing duration."
    }), `
`, _jsx(_components.p, {
      children: "Audio freeze rate = (Sum of audio freezing duration per unit time / Total audio duration per unit time) × 100%."
    }), `
`, _jsx(_components.p, {
      children: "A user’s audio freeze rate is different from a call’s audio freeze rate:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["For a user, the total audio duration is the sum of the duration of all subscribed audio streams, that is, audio duration ", _jsx(_components.a, {
          href: "/en/realtime-media/agora-analytics/reference/billing-policies",
          children: "calculated by stream"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "For a call, the total audio duration is the sum of each user’s total audio duration."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "video-freeze-rate",
      children: "Video freeze rate"
    }), `
`, _jsx(_components.p, {
      children: "Video freezing occurs in the following situations:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Native: When video rendering pauses for over 600 ms."
      }), `
`, _jsx(_components.li, {
        children: "Web: When video rendering pauses for over 500 ms"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The actual length of such a pause is called video freezing duration."
    }), `
`, _jsx(_components.p, {
      children: "Video freeze rate = (Sum of video freezing duration per unit time / Total video duration per unit time) × 100%."
    }), `
`, _jsx(_components.p, {
      children: "A user’s video freeze rate is different from a call’s video freeze rate:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["For a user, the total video duration is the sum of the duration of all subscribed video streams, that is, video duration ", _jsx(_components.a, {
          href: "/en/realtime-media/agora-analytics/reference/billing-policies",
          children: "calculated by stream"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "For a call, the total video duration is the sum of each user’s total video duration."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "call-specific-metrics",
      children: "Call-specific metrics"
    }), `
`, _jsx(_components.h3, {
      id: "acu-accumulated-call-users",
      children: "ACU (Accumulated Call Users)"
    }), `
`, _jsx(_components.p, {
      children: "ACU is the total number of users who have joined the call at some point."
    }), `
`, _jsx(_components.h3, {
      id: "pcu-peak-concurrent-users",
      children: "PCU (Peak Concurrent Users)"
    }), `
`, _jsx(_components.p, {
      children: "PCU is the maximum number of concurrent users during the call."
    }), `
`, _jsx(_components.h3, {
      id: "call-duration",
      children: "Call duration"
    }), `
`, _jsx(_components.p, {
      children: "A call’s duration is the time from the start of a call until its end, that is, from the first user joining the channel to the last user leaving the channel."
    }), `
`, _jsx(_components.h2, {
      id: "user-specific-metrics",
      children: "User-specific metrics"
    }), `
`, _jsx(_components.h3, {
      id: "total-duration",
      children: "Total duration"
    }), `
`, _jsx(_components.p, {
      children: "A user’s total duration is the time from when they first join a channel to when they finally leave it. If a user joins and leaves a channel multiple times during a call, the total duration does not reflect how long the user actually stays in the channel."
    }), `
`, _jsx(_components.h3, {
      id: "in-call-duration",
      children: "In-call duration"
    }), `
`, _jsx(_components.p, {
      children: "A user’s in-call duration is the actual time the user spends in the call. If a user joins and leaves a channel multiple times during a call, the in-call duration totals the length of each time period to reflect how long the user actually stays in the channel."
    }), `
`, _jsx(_components.h3, {
      id: "bitrate",
      children: "Bitrate"
    }), `
`, _jsx(_components.p, {
      children: "Bitrate is the amount of data (bits) sent or received per second."
    }), `
`, _jsx(_components.p, {
      children: "A higher audio/video bitrate means higher audio/video quality. A low bitrate does not necessarily cause quality issues, but a very low bitrate often means poor audio/video quality."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Sender-side metric"
          }), _jsx(_components.th, {
            children: "Receiver-side metric"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio sending bitrate"
          }), _jsx(_components.td, {
            children: "Audio receiving bitrate"
          }), _jsx(_components.td, {
            children: "N/A"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "High-quality video stream sending bitrate"
          }), _jsxs(_components.td, {
            children: ["Native: High-quality video stream receiving bitrate", "Web: Video receiving bitrate"]
          }), _jsx(_components.td, {
            children: "Because a Web client only receives one video stream from each sender, there is no need to separate high-quality and low-quality streams for the video receiving bitrate. A Web client automatically switches to receiving the low-quality video stream when network conditions are poor."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Low-quality video stream sending bitrate"
          }), _jsxs(_components.td, {
            children: ["Native: Low-quality video stream receiving bitrate", "Web: Video receiving bitrate"]
          }), _jsx(_components.td, {
            children: "See High-quality video stream sending bitrate"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "packet-loss-rate",
      children: "Packet loss (rate)"
    }), `
`, _jsx(_components.p, {
      children: "Packet loss is the percentage of the data packets lost during data transmission."
    }), `
`, _jsx(_components.p, {
      children: "On the sender side, packet loss measures the packets lost when sending the data; on the receiver side, packet loss measures the packets lost during data transmission from the sender to the receiver."
    }), `
`, _jsx(_components.p, {
      children: "Slight packet loss usually does not affect user experience. High packet loss (over 5%) means the network quality is poor and might result in audio/video freezing and blurry video."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Sender-side metric"
          }), _jsx(_components.th, {
            children: "Receiver-side metric"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio upstream packet loss"
          }), _jsx(_components.td, {
            children: "Audio end-to-end packet loss"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video upstream packet loss"
          }), _jsx(_components.td, {
            children: "Video end-to-end packet loss"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "freeze-time",
      children: "Freeze time"
    }), `
`, _jsx(_components.p, {
      children: "Freeze time is any significant pause in audio or video reception."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Receiver-side metric"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio rendering freeze time (Native only)"
          }), _jsx(_components.td, {
            children: "Audio rendering freezing occurs if it pauses for over 200 ms. A longer audio rendering freeze time means more significant audio freezing for the user."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video rendering freeze time"
          }), _jsxs(_components.td, {
            children: ["Native: Video rendering freezing occurs if it pauses for over 600 ms when the sending frame rate exceeds 5 fps.", "Web: Video rendering freezing occurs if it pauses for over 500 ms when the sending frame rate exceeds 2 fps. A longer video rendering freeze time means more significant video freezing for the user."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "frame-rate",
      children: "Frame rate"
    }), `
`, _jsx(_components.p, {
      children: "Frame rate is the rate at which consecutive images (frames) appear on a display."
    }), `
`, _jsx(_components.p, {
      children: "A higher frame rate means smoother video but uses more bandwidth and CPU resources. A low frame rate might cause video freeze."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Sender-side metric"
          }), _jsx(_components.th, {
            children: "Receiver-side metric"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video capture frame rate"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            children: "N/A"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "High-quality video stream sending frame rate"
          }), _jsxs(_components.td, {
            children: ["Native: High-quality video stream receiving frame rate", "Web: Video receiving frame rate"]
          }), _jsx(_components.td, {
            children: "Because a Web client only receives one video stream from each sender, there is no need to separate high-quality and low-quality streams for the video receiving frame rate. A Web client automatically switches to receiving the low-quality video stream when network conditions are poor."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Low-quality video stream sending frame rate"
          }), _jsxs(_components.td, {
            children: ["Native: Low-quality video stream receiving frame rate", "Web: Video receiving frame rate"]
          }), _jsx(_components.td, {
            children: "See High-quality video stream sending frame rate"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "resolution",
      children: "Resolution"
    }), `
`, _jsx(_components.p, {
      children: "Resolution is the number of pixels in the width and height of an image."
    }), `
`, _jsx(_components.p, {
      children: "A higher resolution (higher number of pixels) means clearer video."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Sender-side metric"
          }), _jsx(_components.th, {
            children: "Receiver-side metric"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "High-quality video stream sending resolution"
          }), _jsxs(_components.td, {
            children: ["Native: High-quality video stream receiving resolution", "Web: Video receiving resolution"]
          }), _jsx(_components.td, {
            children: "Because a Web client only receives one video stream from each sender, there is no need to separate high-quality and low-quality streams for the video receiving resolution. A Web client automatically switches to receiving the low-quality video stream when network conditions are poor."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Low-quality video stream receiving resolution (Web only)"
          }), _jsxs(_components.td, {
            children: ["Native: High-quality video stream receiving resolution", "Web: Video receiving resolution"]
          }), _jsx(_components.td, {
            children: "See High-quality video stream sending resolution"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "audio-signal-strength",
      children: "Audio signal strength"
    }), `
`, _jsx(_components.p, {
      children: "Audio signal strength is an indicator of volume. If the value of audio signal strength is lower than 80, you should pay special attention."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Sender-side metric"
          }), _jsx(_components.th, {
            children: "Receiver-side metric"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio capture signal strength"
          }), _jsx(_components.td, {
            children: "Audio playback signal strength"
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "network-and-device-status",
      children: "Network and device status"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Metric"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Wi-Fi or LAN signal quality"
          }), _jsx(_components.td, {
            children: "Wi-Fi or LAN signal quality is measured by the round-trip delay (milliseconds) from the client to the local router. If the delay is longer than 500 ms, you should pay special attention."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "App CPU usage"
          }), _jsx(_components.td, {
            children: "The CPU usage (%) of the app. If the user’s device has poor performance, the app’s CPU usage might be high, causing audio and video freezing. This metric is not available when using an emulator or using Rosetta on an M1 Mac."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "System CPU usage"
          }), _jsx(_components.td, {
            children: "The CPU usage (%) of the system. If the user’s device has poor performance, the system’s CPU usage might be high, causing audio and video freezing. This metric is not available when using an emulator or using Rosetta on an M1 Mac."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "SDK task scheduling delay"
          }), _jsx(_components.td, {
            children: "SDK task scheduling delay is the time interval (milliseconds) the SDK needs to schedule tasks for worker threads. This delay is an indirect indicator of the system’s performance. If the delay is longer than 80 ms, you should pay special attention."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "diagnosis-checklist-items",
      children: "Diagnosis checklist items"
    }), `
`, _jsx(_components.h3, {
      id: "call-experience-diagnosis",
      children: "Call experience diagnosis"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Diagnosis checklist items"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video freezing"
          }), _jsx(_components.td, {
            children: "The user might experience significant video freezing. A typical reason is that the user’s device performance and network conditions are poor. You should check related metrics to locate the problem."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Blurry video"
          }), _jsx(_components.td, {
            children: "The user might see blurry video. You should check the user’s video receiving resolution, device status, and network conditions."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "No sound"
          }), _jsx(_components.td, {
            children: "The user continues to hear no sound. You should check events on the receiver side and audio sending statistics on the sender side to confirm this exception and locate the reason."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio freezing"
          }), _jsx(_components.td, {
            children: "The user might experience significant audio freezing. A typical reason is that the user’s device performance and network conditions are poor. You should check related metrics to locate the problem."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "host-diagnosis",
      children: "Host diagnosis"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Diagnosis checklist items"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video capture frame rate is low"
          }), _jsx(_components.td, {
            children: "The video capture frame rate continues to be lower than 3 fps. This exception might cause video freezing and blur for the receiver."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video output frame rate is low"
          }), _jsx(_components.td, {
            children: "The frame rate of video encoding is low, possibly because the sender’s CPU usage or network packet loss is high. This exception might cause video freezing and blur for the receiver."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio sending stops"
          }), _jsx(_components.td, {
            children: "The sender stops sending audio for a significant time period. You should check the user’s key events to validate. This exception might cause the receiver to continue to hear no sound."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio capture frequency is low"
          }), _jsx(_components.td, {
            children: "This exception might cause audio freezing for the receiver."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio sender’s system is busy"
          }), _jsx(_components.td, {
            children: "The main thread of the audio sender’s system is busy. This exception might cause audio freezing for the receiver."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio sender’s network is poor"
          }), _jsx(_components.td, {
            children: "Possible reasons include upstream network congestion, high packet loss, or poor Wi-Fi signal. This exception might cause audio freezing for the receiver."
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
