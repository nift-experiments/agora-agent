import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How do I troubleshoot slow first-frame rendering of remote video when using the Agora RTC SDK?"
};
export let _markdown = `

When using the Agora RTC SDK for real-time Video Calling, Interactive Live Streaming, or Broadcast Streaming, some developers observe that the remote video takes too long to display after joining a channel. This delay can negatively impact user experience, especially in scenarios like live broadcasts where quick video display is critical.

## Why delays occur [#why-delays-occur]

The delay in the first frame rendering is usually due to delays across multiple stages, including:

* Setting the remote rendering view too late
* Not subscribing to the remote video stream in time after joining the channel

## Solution [#solution]

RTC SDK provides a mechanism to help developers identify which stage of the video rendering pipeline is time-consuming. The \`onVideoRenderingTracingResult\` callback returns the duration of each stage. By default, durations are calculated from the time \`joinChannel\` is called. To customize the start time, call \`startMediaRenderingTracing\`.

### Step 1: Use \`startMediaRenderingTracing\` before joining [#step-1-use-startmediarenderingtracing-before-joining]

To align rendering metrics with actual user experience, call \`startMediaRenderingTracing\` immediately when the user triggers a join action (such as tapping **Join** or switching channels). This ensures the collected data reflects real-world latency.

The following table explains the fields returned in \`tracingInfo\` from the \`onVideoRenderingTracingResult\` callback:

| Field                         | Description                                                                                                                                                                              | Reference Range     | Recommendations                                                                                                                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`elapsedTime\`                 | * **Decoding event**: Time from \`startMediaRenderingTracing\` to \`onFirstRemoteVideoDecoded\`.
* **Rendering event**: Time from \`startMediaRenderingTracing\` to \`onFirstRemoteVideoFrame\`. | \\< 1000 ms for both | If the difference between decoding and rendering is >200 ms, ensure the remote view is set promptly. If only decoding events are reported, check whether:* The remote view is unset
* An external renderer is used |
| \`start2JoinChannel\`           | Time from \`startMediaRenderingTracing\` to \`joinChannel\`.                                                                                                                                 | \\< 10 ms            | If too large, ensure \`joinChannel\` is called promptly after user action.                                                                                                                                           |
| \`join2JoinSuccess\`            | Time from \`joinChannel\` to \`onJoinChannelSuccess\`.                                                                                                                                       | 50–500 ms           | If high, check network conditions. Consider calling \`preloadChannel\` to speed up joining.                                                                                                                          |
| \`joinSuccess2RemoteJoined\`    | Time from \`onJoinChannelSuccess\` to \`onUserJoined\`.                                                                                                                                      | ≤50 ms              | High values may occur if:* Host joins after the viewer
* Streams are not subscribed by default                                                                                                                     |
| \`remoteJoined2SetView\`        | Time from \`onUserJoined\` to \`setupRemoteVideo\`.                                                                                                                                          | 0–20 ms             | Set the remote view immediately in \`onUserJoined\`. For optimal performance, pre-set the view before joining.                                                                                                       |
| \`remoteJoined2UnmuteVideo\`    | Time from \`onUserJoined\` to subscribing to the video stream.                                                                                                                             | 0 ms                | If high, check if subscription is delayed. Subscribing during join keeps this value at 0.                                                                                                                          |
| \`remoteJoined2PacketReceived\` | Time from \`onUserJoined\` to receiving the first video packet.                                                                                                                            | 0–50 ms             | If high, check:* Whether video stream subscription is delayed
* Whether the host publishes the stream promptly                                                                                                     |

### Step 2: Use default behavior (without \`startMediaRenderingTracing\`) [#step-2-use-default-behavior-without-startmediarenderingtracing]

If you don't call \`startMediaRenderingTracing\`, the SDK uses the time \`joinChannel\` is called as the starting point for measuring rendering performance.

With this approach, most fields in the \`onVideoRenderingTracingResult\` callback have the same meaning as when tracing is started before joining. However, two fields have different interpretations, as shown below:

| Field               | Description                                                                                                                                                | Reference Range     | Recommendations                                                                                                                                                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`elapsedTime\`       | * **Decoding event**: Time from \`joinChannel\` to \`onFirstRemoteVideoDecoded\`.
* **Rendering event**: Time from \`joinChannel\` to \`onFirstRemoteVideoFrame\`. | \\< 1000 ms for both | If the difference between decoding and rendering is >200 ms, check whether the remote view is set on time. If only decoding events are received, possible causes include:* Remote view not set
* Use of an external renderer |
| \`start2JoinChannel\` | Time from \`startMediaRenderingTracing\` to \`joinChannel\`.                                                                                                   | 0 ms                | This value is always 0 because no tracing was started before calling \`joinChannel\`.                                                                                                                                          |

### Step 3: Pre-join the channel, then subscribe on demand [#step-3-pre-join-the-channel-then-subscribe-on-demand]

If your app requires extremely low latency for the first frame, pre-join the channel without subscribing to the stream. When the user triggers the join action, call \`startMediaRenderingTracing\` and subscribe to the remote stream.

For implementation details, see [Optimize first-frame rendering](/en/realtime-media/rtc/build/capture-and-render-video/optimize-frame-rendering).

The following table describes each field for this scenario:

| Field                         | Description                                                                                                                                                                              | Reference Range    | Recommendations                                                                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`elapsedTime\`                 | * **Decoding event**: Time from \`startMediaRenderingTracing\` to \`onFirstRemoteVideoDecoded\`.
* **Rendering event**: Time from \`startMediaRenderingTracing\` to \`onFirstRemoteVideoFrame\`. | \\< 500 ms for both | If the rendering time greatly exceeds decoding time, check whether the remote view was set in time.                                                    |
| \`start2JoinChannel\`           | Time from \`joinChannel\` to \`startMediaRenderingTracing\`.                                                                                                                                 | Negative           | Since the channel was joined before tracing started, this value is negative and can be ignored.                                                        |
| \`join2JoinSuccess\`            | Time from \`joinChannel\` to \`onJoinChannelSuccess\`.                                                                                                                                       | 50–500 ms          | This value is irrelevant because the user has already joined the channel.                                                                              |
| \`joinSuccess2RemoteJoined\`    | Time from \`startMediaRenderingTracing\` to \`onUserJoined\`.                                                                                                                                | 0 ms               | If greater than 0, it may indicate frequent channel switching. This value is not meaningful if \`onUserJoined\` is triggered after tracing starts.       |
| \`remoteJoined2SetView\`        | Time from \`startMediaRenderingTracing\` to \`setupRemoteVideo\`.                                                                                                                            | 0 ms               | If greater than 0, check whether the view was set promptly. This value may be invalid if the view was set before calling \`startMediaRenderingTracing\`. |
| \`remoteJoined2UnmuteVideo\`    | Time from \`startMediaRenderingTracing\` to subscribing to the stream.                                                                                                                     | 0 ms               | If this value is large, check for delays between calling \`startMediaRenderingTracing\` and subscribing to the remote stream.                            |
| \`remoteJoined2PacketReceived\` | Time from \`startMediaRenderingTracing\` to receiving the first video packet.                                                                                                              | \\~100 ms           | If high, verify that the remote host is publishing video promptly after joining.                                                                       |

## API Reference [#api-reference]

### Android [#android]

* [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2)

* [\`startMediaRenderingTracingEx\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_startmediarenderingtracingex)

* [\`onVideoRenderingTracingResult\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult)

* [\`preloadChannel\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_preloadchannel)

### iOS [#ios]

* [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:uid\\:mediaoptions\\:joinsuccess:\\))

* [\`startMediaRenderingTracingEx\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracingex\\(_:\\))

* [\`AgoraVideoRenderingTracingInfo\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideorenderingtracinginfo)

* [\`preloadChannel\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/preloadchannel\\(bytoken\\:channelid\\:uid:\\))

### macOS [#macos]

* [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:uid\\:mediaoptions\\:joinsuccess:\\))

* [\`startMediaRenderingTracingEx\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracingex\\(_:\\))

* [\`AgoraVideoRenderingTracingInfo\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideorenderingtracinginfo)

* [\`preloadChannel\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/preloadchannel\\(bytoken\\:channelid\\:uid:\\))

### Windows [#windows]

* [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2)

* [\`startMediaRenderingTracingEx\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_startmediarenderingtracingex)

* [\`onVideoRenderingTracingResult\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult)

* [\`preloadChannel\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_preloadchannel)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When using the Agora RTC SDK for real-time Video Calling, Interactive Live Streaming, or Broadcast Streaming, some developers observe that the remote video takes too long to display after joining a channel. This delay can negatively impact user experience, especially in scenarios like live broadcasts where quick video display is critical."
  }, {
    heading: "why-delays-occur",
    content: "The delay in the first frame rendering is usually due to delays across multiple stages, including:"
  }, {
    heading: "why-delays-occur",
    content: "Setting the remote rendering view too late"
  }, {
    heading: "why-delays-occur",
    content: "Not subscribing to the remote video stream in time after joining the channel"
  }, {
    heading: "solution",
    content: "RTC SDK provides a mechanism to help developers identify which stage of the video rendering pipeline is time-consuming. The `onVideoRenderingTracingResult` callback returns the duration of each stage. By default, durations are calculated from the time `joinChannel` is called. To customize the start time, call `startMediaRenderingTracing`."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "To align rendering metrics with actual user experience, call `startMediaRenderingTracing` immediately when the user triggers a join action (such as tapping **Join** or switching channels). This ensures the collected data reflects real-world latency."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "The following table explains the fields returned in `tracingInfo` from the `onVideoRenderingTracingResult` callback:"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Field"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Description"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Reference Range"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Recommendations"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "`elapsedTime`"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "* **Decoding event**: Time from `startMediaRenderingTracing` to `onFirstRemoteVideoDecoded`.\n* **Rendering event**: Time from `startMediaRenderingTracing` to `onFirstRemoteVideoFrame`."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "\\< 1000 ms for both"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: `If the difference between decoding and rendering is >200 ms, ensure the remote view is set promptly. If only decoding events are reported, check whether:- The remote view is unset
- An external renderer is used`
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "`start2JoinChannel`"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Time from `startMediaRenderingTracing` to `joinChannel`."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "\\< 10 ms"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "If too large, ensure `joinChannel` is called promptly after user action."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "`join2JoinSuccess`"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Time from `joinChannel` to `onJoinChannelSuccess`."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "50–500 ms"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "If high, check network conditions. Consider calling `preloadChannel` to speed up joining."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "`joinSuccess2RemoteJoined`"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Time from `onJoinChannelSuccess` to `onUserJoined`."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "≤50 ms"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: `High values may occur if:- Host joins after the viewer
- Streams are not subscribed by default`
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "`remoteJoined2SetView`"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Time from `onUserJoined` to `setupRemoteVideo`."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "0–20 ms"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Set the remote view immediately in `onUserJoined`. For optimal performance, pre-set the view before joining."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "`remoteJoined2UnmuteVideo`"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Time from `onUserJoined` to subscribing to the video stream."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "0 ms"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "If high, check if subscription is delayed. Subscribing during join keeps this value at 0."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "`remoteJoined2PacketReceived`"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Time from `onUserJoined` to receiving the first video packet."
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: "0–50 ms"
  }, {
    heading: "step-1-use-startmediarenderingtracing-before-joining",
    content: `If high, check:- Whether video stream subscription is delayed
- Whether the host publishes the stream promptly`
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "If you don't call `startMediaRenderingTracing`, the SDK uses the time `joinChannel` is called as the starting point for measuring rendering performance."
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "With this approach, most fields in the `onVideoRenderingTracingResult` callback have the same meaning as when tracing is started before joining. However, two fields have different interpretations, as shown below:"
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "Field"
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "Description"
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "Reference Range"
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "Recommendations"
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "`elapsedTime`"
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "* **Decoding event**: Time from `joinChannel` to `onFirstRemoteVideoDecoded`.\n* **Rendering event**: Time from `joinChannel` to `onFirstRemoteVideoFrame`."
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "\\< 1000 ms for both"
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: `If the difference between decoding and rendering is >200 ms, check whether the remote view is set on time. If only decoding events are received, possible causes include:- Remote view not set
- Use of an external renderer`
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "`start2JoinChannel`"
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "Time from `startMediaRenderingTracing` to `joinChannel`."
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "0 ms"
  }, {
    heading: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "This value is always 0 because no tracing was started before calling `joinChannel`."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "If your app requires extremely low latency for the first frame, pre-join the channel without subscribing to the stream. When the user triggers the join action, call `startMediaRenderingTracing` and subscribe to the remote stream."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "For implementation details, see Optimize first-frame rendering."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "The following table describes each field for this scenario:"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Field"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Description"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Reference Range"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Recommendations"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "`elapsedTime`"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "* **Decoding event**: Time from `startMediaRenderingTracing` to `onFirstRemoteVideoDecoded`.\n* **Rendering event**: Time from `startMediaRenderingTracing` to `onFirstRemoteVideoFrame`."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "\\< 500 ms for both"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "If the rendering time greatly exceeds decoding time, check whether the remote view was set in time."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "`start2JoinChannel`"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Time from `joinChannel` to `startMediaRenderingTracing`."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Negative"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Since the channel was joined before tracing started, this value is negative and can be ignored."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "`join2JoinSuccess`"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Time from `joinChannel` to `onJoinChannelSuccess`."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "50–500 ms"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "This value is irrelevant because the user has already joined the channel."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "`joinSuccess2RemoteJoined`"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Time from `startMediaRenderingTracing` to `onUserJoined`."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "0 ms"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "If greater than 0, it may indicate frequent channel switching. This value is not meaningful if `onUserJoined` is triggered after tracing starts."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "`remoteJoined2SetView`"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Time from `startMediaRenderingTracing` to `setupRemoteVideo`."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "0 ms"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "If greater than 0, check whether the view was set promptly. This value may be invalid if the view was set before calling `startMediaRenderingTracing`."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "`remoteJoined2UnmuteVideo`"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Time from `startMediaRenderingTracing` to subscribing to the stream."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "0 ms"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "If this value is large, check for delays between calling `startMediaRenderingTracing` and subscribing to the remote stream."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "`remoteJoined2PacketReceived`"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Time from `startMediaRenderingTracing` to receiving the first video packet."
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "\\~100 ms"
  }, {
    heading: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "If high, verify that the remote host is publishing video promptly after joining."
  }, {
    heading: "android",
    content: "`joinChannel`"
  }, {
    heading: "android",
    content: "`startMediaRenderingTracingEx`"
  }, {
    heading: "android",
    content: "`onVideoRenderingTracingResult`"
  }, {
    heading: "android",
    content: "`preloadChannel`"
  }, {
    heading: "ios",
    content: "`joinChannel`"
  }, {
    heading: "ios",
    content: "`startMediaRenderingTracingEx`"
  }, {
    heading: "ios",
    content: "`AgoraVideoRenderingTracingInfo`"
  }, {
    heading: "ios",
    content: "`preloadChannel`"
  }, {
    heading: "macos",
    content: "`joinChannel`"
  }, {
    heading: "macos",
    content: "`startMediaRenderingTracingEx`"
  }, {
    heading: "macos",
    content: "`AgoraVideoRenderingTracingInfo`"
  }, {
    heading: "macos",
    content: "`preloadChannel`"
  }, {
    heading: "windows",
    content: "`joinChannel`"
  }, {
    heading: "windows",
    content: "`startMediaRenderingTracingEx`"
  }, {
    heading: "windows",
    content: "`onVideoRenderingTracingResult`"
  }, {
    heading: "windows",
    content: "`preloadChannel`"
  }],
  headings: [{
    id: "why-delays-occur",
    content: "Why delays occur"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "step-1-use-startmediarenderingtracing-before-joining",
    content: "Step 1: Use `startMediaRenderingTracing` before joining"
  }, {
    id: "step-2-use-default-behavior-without-startmediarenderingtracing",
    content: "Step 2: Use default behavior (without `startMediaRenderingTracing`)"
  }, {
    id: "step-3-pre-join-the-channel-then-subscribe-on-demand",
    content: "Step 3: Pre-join the channel, then subscribe on demand"
  }, {
    id: "api-reference",
    content: "API Reference"
  }, {
    id: "android",
    content: "Android"
  }, {
    id: "ios",
    content: "iOS"
  }, {
    id: "macos",
    content: "macOS"
  }, {
    id: "windows",
    content: "Windows"
  }]
};
export let toc = [{
  depth: 2,
  url: "#why-delays-occur",
  title: _jsx(_Fragment, {
    children: "Why delays occur"
  })
}, {
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 3,
  url: "#step-1-use-startmediarenderingtracing-before-joining",
  title: _jsxs(_Fragment, {
    children: ["Step 1: Use ", _jsx("code", {
      children: "startMediaRenderingTracing"
    }), " before joining"]
  })
}, {
  depth: 3,
  url: "#step-2-use-default-behavior-without-startmediarenderingtracing",
  title: _jsxs(_Fragment, {
    children: ["Step 2: Use default behavior (without ", _jsx("code", {
      children: "startMediaRenderingTracing"
    }), ")"]
  })
}, {
  depth: 3,
  url: "#step-3-pre-join-the-channel-then-subscribe-on-demand",
  title: _jsx(_Fragment, {
    children: "Step 3: Pre-join the channel, then subscribe on demand"
  })
}, {
  depth: 2,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API Reference"
  })
}, {
  depth: 3,
  url: "#android",
  title: _jsx(_Fragment, {
    children: "Android"
  })
}, {
  depth: 3,
  url: "#ios",
  title: _jsx(_Fragment, {
    children: "iOS"
  })
}, {
  depth: 3,
  url: "#macos",
  title: _jsx(_Fragment, {
    children: "macOS"
  })
}, {
  depth: 3,
  url: "#windows",
  title: _jsx(_Fragment, {
    children: "Windows"
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
      children: "When using the Agora RTC SDK for real-time Video Calling, Interactive Live Streaming, or Broadcast Streaming, some developers observe that the remote video takes too long to display after joining a channel. This delay can negatively impact user experience, especially in scenarios like live broadcasts where quick video display is critical."
    }), `
`, _jsx(_components.h2, {
      id: "why-delays-occur",
      children: "Why delays occur"
    }), `
`, _jsx(_components.p, {
      children: "The delay in the first frame rendering is usually due to delays across multiple stages, including:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Setting the remote rendering view too late"
      }), `
`, _jsx(_components.li, {
        children: "Not subscribing to the remote video stream in time after joining the channel"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["RTC SDK provides a mechanism to help developers identify which stage of the video rendering pipeline is time-consuming. The ", _jsx(_components.code, {
        children: "onVideoRenderingTracingResult"
      }), " callback returns the duration of each stage. By default, durations are calculated from the time ", _jsx(_components.code, {
        children: "joinChannel"
      }), " is called. To customize the start time, call ", _jsx(_components.code, {
        children: "startMediaRenderingTracing"
      }), "."]
    }), `
`, _jsxs(_components.h3, {
      id: "step-1-use-startmediarenderingtracing-before-joining",
      children: ["Step 1: Use ", _jsx(_components.code, {
        children: "startMediaRenderingTracing"
      }), " before joining"]
    }), `
`, _jsxs(_components.p, {
      children: ["To align rendering metrics with actual user experience, call ", _jsx(_components.code, {
        children: "startMediaRenderingTracing"
      }), " immediately when the user triggers a join action (such as tapping ", _jsx(_components.strong, {
        children: "Join"
      }), " or switching channels). This ensures the collected data reflects real-world latency."]
    }), `
`, _jsxs(_components.p, {
      children: ["The following table explains the fields returned in ", _jsx(_components.code, {
        children: "tracingInfo"
      }), " from the ", _jsx(_components.code, {
        children: "onVideoRenderingTracingResult"
      }), " callback:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Reference Range"
          }), _jsx(_components.th, {
            children: "Recommendations"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "elapsedTime"
            })
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Decoding event"
                }), ": Time from ", _jsx(_components.code, {
                  children: "startMediaRenderingTracing"
                }), " to ", _jsx(_components.code, {
                  children: "onFirstRemoteVideoDecoded"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Rendering event"
                }), ": Time from ", _jsx(_components.code, {
                  children: "startMediaRenderingTracing"
                }), " to ", _jsx(_components.code, {
                  children: "onFirstRemoteVideoFrame"
                }), "."]
              }), `
`]
            })
          }), _jsx(_components.td, {
            children: "< 1000 ms for both"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "If the difference between decoding and rendering is >200 ms, ensure the remote view is set promptly. If only decoding events are reported, check whether:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The remote view is unset"
              }), `
`, _jsx(_components.li, {
                children: "An external renderer is used"
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start2JoinChannel"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "startMediaRenderingTracing"
            }), " to ", _jsx(_components.code, {
              children: "joinChannel"
            }), "."]
          }), _jsx(_components.td, {
            children: "< 10 ms"
          }), _jsxs(_components.td, {
            children: ["If too large, ensure ", _jsx(_components.code, {
              children: "joinChannel"
            }), " is called promptly after user action."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "join2JoinSuccess"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "joinChannel"
            }), " to ", _jsx(_components.code, {
              children: "onJoinChannelSuccess"
            }), "."]
          }), _jsx(_components.td, {
            children: "50–500 ms"
          }), _jsxs(_components.td, {
            children: ["If high, check network conditions. Consider calling ", _jsx(_components.code, {
              children: "preloadChannel"
            }), " to speed up joining."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "joinSuccess2RemoteJoined"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "onJoinChannelSuccess"
            }), " to ", _jsx(_components.code, {
              children: "onUserJoined"
            }), "."]
          }), _jsx(_components.td, {
            children: "≤50 ms"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "High values may occur if:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Host joins after the viewer"
              }), `
`, _jsx(_components.li, {
                children: "Streams are not subscribed by default"
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "remoteJoined2SetView"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " to ", _jsx(_components.code, {
              children: "setupRemoteVideo"
            }), "."]
          }), _jsx(_components.td, {
            children: "0–20 ms"
          }), _jsxs(_components.td, {
            children: ["Set the remote view immediately in ", _jsx(_components.code, {
              children: "onUserJoined"
            }), ". For optimal performance, pre-set the view before joining."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "remoteJoined2UnmuteVideo"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " to subscribing to the video stream."]
          }), _jsx(_components.td, {
            children: "0 ms"
          }), _jsx(_components.td, {
            children: "If high, check if subscription is delayed. Subscribing during join keeps this value at 0."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "remoteJoined2PacketReceived"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " to receiving the first video packet."]
          }), _jsx(_components.td, {
            children: "0–50 ms"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "If high, check:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Whether video stream subscription is delayed"
              }), `
`, _jsx(_components.li, {
                children: "Whether the host publishes the stream promptly"
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h3, {
      id: "step-2-use-default-behavior-without-startmediarenderingtracing",
      children: ["Step 2: Use default behavior (without ", _jsx(_components.code, {
        children: "startMediaRenderingTracing"
      }), ")"]
    }), `
`, _jsxs(_components.p, {
      children: ["If you don't call ", _jsx(_components.code, {
        children: "startMediaRenderingTracing"
      }), ", the SDK uses the time ", _jsx(_components.code, {
        children: "joinChannel"
      }), " is called as the starting point for measuring rendering performance."]
    }), `
`, _jsxs(_components.p, {
      children: ["With this approach, most fields in the ", _jsx(_components.code, {
        children: "onVideoRenderingTracingResult"
      }), " callback have the same meaning as when tracing is started before joining. However, two fields have different interpretations, as shown below:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Reference Range"
          }), _jsx(_components.th, {
            children: "Recommendations"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "elapsedTime"
            })
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Decoding event"
                }), ": Time from ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to ", _jsx(_components.code, {
                  children: "onFirstRemoteVideoDecoded"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Rendering event"
                }), ": Time from ", _jsx(_components.code, {
                  children: "joinChannel"
                }), " to ", _jsx(_components.code, {
                  children: "onFirstRemoteVideoFrame"
                }), "."]
              }), `
`]
            })
          }), _jsx(_components.td, {
            children: "< 1000 ms for both"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "If the difference between decoding and rendering is >200 ms, check whether the remote view is set on time. If only decoding events are received, possible causes include:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Remote view not set"
              }), `
`, _jsx(_components.li, {
                children: "Use of an external renderer"
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start2JoinChannel"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "startMediaRenderingTracing"
            }), " to ", _jsx(_components.code, {
              children: "joinChannel"
            }), "."]
          }), _jsx(_components.td, {
            children: "0 ms"
          }), _jsxs(_components.td, {
            children: ["This value is always 0 because no tracing was started before calling ", _jsx(_components.code, {
              children: "joinChannel"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "step-3-pre-join-the-channel-then-subscribe-on-demand",
      children: "Step 3: Pre-join the channel, then subscribe on demand"
    }), `
`, _jsxs(_components.p, {
      children: ["If your app requires extremely low latency for the first frame, pre-join the channel without subscribing to the stream. When the user triggers the join action, call ", _jsx(_components.code, {
        children: "startMediaRenderingTracing"
      }), " and subscribe to the remote stream."]
    }), `
`, _jsxs(_components.p, {
      children: ["For implementation details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/build/capture-and-render-video/optimize-frame-rendering",
        children: "Optimize first-frame rendering"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The following table describes each field for this scenario:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Reference Range"
          }), _jsx(_components.th, {
            children: "Recommendations"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "elapsedTime"
            })
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Decoding event"
                }), ": Time from ", _jsx(_components.code, {
                  children: "startMediaRenderingTracing"
                }), " to ", _jsx(_components.code, {
                  children: "onFirstRemoteVideoDecoded"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Rendering event"
                }), ": Time from ", _jsx(_components.code, {
                  children: "startMediaRenderingTracing"
                }), " to ", _jsx(_components.code, {
                  children: "onFirstRemoteVideoFrame"
                }), "."]
              }), `
`]
            })
          }), _jsx(_components.td, {
            children: "< 500 ms for both"
          }), _jsx(_components.td, {
            children: "If the rendering time greatly exceeds decoding time, check whether the remote view was set in time."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start2JoinChannel"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "joinChannel"
            }), " to ", _jsx(_components.code, {
              children: "startMediaRenderingTracing"
            }), "."]
          }), _jsx(_components.td, {
            children: "Negative"
          }), _jsx(_components.td, {
            children: "Since the channel was joined before tracing started, this value is negative and can be ignored."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "join2JoinSuccess"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "joinChannel"
            }), " to ", _jsx(_components.code, {
              children: "onJoinChannelSuccess"
            }), "."]
          }), _jsx(_components.td, {
            children: "50–500 ms"
          }), _jsx(_components.td, {
            children: "This value is irrelevant because the user has already joined the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "joinSuccess2RemoteJoined"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "startMediaRenderingTracing"
            }), " to ", _jsx(_components.code, {
              children: "onUserJoined"
            }), "."]
          }), _jsx(_components.td, {
            children: "0 ms"
          }), _jsxs(_components.td, {
            children: ["If greater than 0, it may indicate frequent channel switching. This value is not meaningful if ", _jsx(_components.code, {
              children: "onUserJoined"
            }), " is triggered after tracing starts."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "remoteJoined2SetView"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "startMediaRenderingTracing"
            }), " to ", _jsx(_components.code, {
              children: "setupRemoteVideo"
            }), "."]
          }), _jsx(_components.td, {
            children: "0 ms"
          }), _jsxs(_components.td, {
            children: ["If greater than 0, check whether the view was set promptly. This value may be invalid if the view was set before calling ", _jsx(_components.code, {
              children: "startMediaRenderingTracing"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "remoteJoined2UnmuteVideo"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "startMediaRenderingTracing"
            }), " to subscribing to the stream."]
          }), _jsx(_components.td, {
            children: "0 ms"
          }), _jsxs(_components.td, {
            children: ["If this value is large, check for delays between calling ", _jsx(_components.code, {
              children: "startMediaRenderingTracing"
            }), " and subscribing to the remote stream."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "remoteJoined2PacketReceived"
            })
          }), _jsxs(_components.td, {
            children: ["Time from ", _jsx(_components.code, {
              children: "startMediaRenderingTracing"
            }), " to receiving the first video packet."]
          }), _jsx(_components.td, {
            children: "~100 ms"
          }), _jsx(_components.td, {
            children: "If high, verify that the remote host is publishing video promptly after joining."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "api-reference",
      children: "API Reference"
    }), `
`, _jsx(_components.h3, {
      id: "android",
      children: "Android"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
            children: _jsx(_components.code, {
              children: "joinChannel"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineex.html#api_irtcengineex_startmediarenderingtracingex",
            children: _jsx(_components.code, {
              children: "startMediaRenderingTracingEx"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult",
            children: _jsx(_components.code, {
              children: "onVideoRenderingTracingResult"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_preloadchannel",
            children: _jsx(_components.code, {
              children: "preloadChannel"
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "ios",
      children: "iOS"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:uid:mediaoptions:joinsuccess:)",
            children: _jsx(_components.code, {
              children: "joinChannel"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracingex(_:)",
            children: _jsx(_components.code, {
              children: "startMediaRenderingTracingEx"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideorenderingtracinginfo",
            children: _jsx(_components.code, {
              children: "AgoraVideoRenderingTracingInfo"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/preloadchannel(bytoken:channelid:uid:)",
            children: _jsx(_components.code, {
              children: "preloadChannel"
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "macos",
      children: "macOS"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:uid:mediaoptions:joinsuccess:)",
            children: _jsx(_components.code, {
              children: "joinChannel"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startmediarenderingtracingex(_:)",
            children: _jsx(_components.code, {
              children: "startMediaRenderingTracingEx"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideorenderingtracinginfo",
            children: _jsx(_components.code, {
              children: "AgoraVideoRenderingTracingInfo"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/preloadchannel(bytoken:channelid:uid:)",
            children: _jsx(_components.code, {
              children: "preloadChannel"
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "windows",
      children: "Windows"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
            children: _jsx(_components.code, {
              children: "joinChannel"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineex.html#api_irtcengineex_startmediarenderingtracingex",
            children: _jsx(_components.code, {
              children: "startMediaRenderingTracingEx"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onvideorenderingtracingresult",
            children: _jsx(_components.code, {
              children: "onVideoRenderingTracingResult"
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_preloadchannel",
            children: _jsx(_components.code, {
              children: "preloadChannel"
            })
          })
        }), `
`]
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
