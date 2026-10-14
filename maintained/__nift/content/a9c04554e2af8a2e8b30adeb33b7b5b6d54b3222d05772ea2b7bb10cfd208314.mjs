import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Audio-strength stream selection",
  description: ""
};
export let _markdown = `

By default, users joining a channel are automatically subscribed to the audio streams of all remote users. However, in use-cases with many users streaming simultaneously, such as large meetings, this consumes significant downstream bandwidth and system resources. To alleviate the bandwidth pressure and reduce system resource consumption on the receiving end, Agora offers audio-strength stream selection based on volume.

## Understand the tech [#understand-the-tech]

After you enable audio-strength stream selection, Agora selects \`N\` audio streams with the highest volume, according to an audio-strength algorithm, and transmits them to the receiving end. The default value of \`N\` is 3 streams but you can customize it according to your requirements.
To accommodate diverse business use-cases, Agora also provides the streaming end with the option to choose whether its published audio stream participates in audio-strength stream selection or is directly transmitted to the receiving end.

## Prerequisites [#prerequisites]

Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

<CalloutContainer type="info">
  <CalloutDescription>
    To enable this feature, contact [technical support](mailto\\:support@agora.io).
  </CalloutDescription>
</CalloutContainer>

## Implement stream selection [#implement-stream-selection]

This section shows you how to implement audio-strength stream selection in common business use-cases.

### Enable audio-strength stream selection [#enable-audio-strength-stream-selection]

When audio-strength stream selection is enabled, all audio streams in the channel participate in the selection by default. Agora transmits the top 3 audio streams with the highest volume to the receiving end. To customize the number of transmitted audio streams \`N\`, contact [technical support](mailto\\:support@agora.io). In use-cases with dozens or even hundreds of simultaneous streams, enabling audio-strength stream selection helps reduce pressure on the downstream bandwidth resource at the receiving end.

### Customize participation [#customize-participation]

To exclude a user from audio-strength stream selection and ensure that their stream is transmitted to the receiving end regardless of its volume, use one of the following methods:

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    To exclude a user from audio-strength stream selection and ensure that their stream is transmitted to the receiving end regardless of its volume, contact [technical support](mailto\\:support@agora.io).

    ### Use case example [#use-case-example]

    In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end.

    If there are 500 participants in the channel, and \`N\` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low.

    **Audio strength selection use case**

    ![Use Case use-case](https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    * When calling \`joinChannel\` or \`joinChannelWithUserAccount\` to join a channel, set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    * After joining a channel, call \`updateChannelMediaOptions\` and set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the \`setParameters\` method with suitable JSON options. For details, contact [technical support](mailto\\:support@agora.io).

    ### Use case example [#use-case-example-1]

    In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end.

    If there are 500 participants in the channel, and \`N\` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low.

    **Audio strength selection use case**

    ![Use Case use-case](https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg)

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference]

    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2)
    * [\`joinChannelWithUserAccount\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount)
    * [\`updateChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions)
    * [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setparameters)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    * When calling \`joinChannel\`, set \`isAudioFilterable\` to \`false\` in \`AgoraRtcChannelMediaOptions\` and pass the object in the \`mediaOptions\` parameter.

    * After joining a channel, call \`updateChannel\` and set \`isAudioFilterable\` to \`false\` in \`AgoraRtcChannelMediaOptions\` and pass the object in the \`mediaOptions\` parameter.

    To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the \`setParameters\` method with suitable JSON options. For details, contact [technical support](mailto\\:support@agora.io).

    ### Use case example [#use-case-example-2]

    In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end.

    If there are 500 participants in the channel, and \`N\` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low.

    **Audio strength selection use case**

    ![Use Case use-case](https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg)

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-1]

    * [\`updateChannel\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/updatechannel\\(with:\\))
    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:useraccount\\:mediaoptions\\:joinsuccess:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    * When calling \`joinChannelByToken\` or \`joinChannelWithUserAccount\` to join a channel, set \`isAudioFilterable\` to \`false\` in \`AgoraRtcChannelMediaOptions\` and pass the object in the \`mediaOptions\` parameter.

    * After joining a channel, call \`updateChannelWithMediaOptions\` and set \`isAudioFilterable\` to \`false\` in the \`AgoraRtcChannelMediaOptions\` and pass the object in the \`mediaOptions\` parameter.

    To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the \`setParameters\` method with suitable JSON options. For details, contact [technical support](mailto\\:support@agora.io).

    ### Use case example [#use-case-example-3]

    In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end.

    If there are 500 participants in the channel, and \`N\` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low.

    **Audio strength selection use case**

    ![Use Case use-case](https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg)

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-2]

    * [\`updateChannel\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/updatechannel\\(with:\\))
    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:useraccount\\:mediaoptions\\:joinsuccess:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    * When calling \`joinChannel\` or \`joinChannelWithUserAccount\` to join a channel, set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    * After joining a channel, call \`updateChannelMediaOptions\` and set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the \`setParameters\` method with suitable JSON options. For details, contact [technical support](mailto\\:support@agora.io).

    ### Use case example [#use-case-example-4]

    In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end.

    If there are 500 participants in the channel, and \`N\` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low.

    **Audio strength selection use case**

    ![Use Case use-case](https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg)

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-3]

    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2)
    * [\`joinChannelWithUserAccount\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount)
    * [\`updateChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions)
    * [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setparameters)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    * When calling \`joinChannel\` or \`joinChannelWithUserAccount\` to join a channel, set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    * After joining a channel, call \`updateChannelMediaOptions\` and set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the \`setParameters\` method with suitable JSON options. For details, contact [technical support](mailto\\:support@agora.io).

    ### Use case example [#use-case-example-5]

    In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end.

    If there are 500 participants in the channel, and \`N\` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low.

    **Audio strength selection use case**

    ![Use Case use-case](https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg)

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-4]

    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2)
    * [\`joinChannelWithUserAccount\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount2)
    * [\`updateChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions)
    * [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setparameters)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    * When calling \`joinChannel\` or \`joinChannelWithUserAccount\` to join a channel, set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    * After joining a channel, call \`updateChannelMediaOptions\` and set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the \`setParameters\` method with suitable JSON options. For details, contact [technical support](mailto\\:support@agora.io).

    ### Use case example [#use-case-example-6]

    In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end.

    If there are 500 participants in the channel, and \`N\` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low.

    **Audio strength selection use case**

    ![Use Case use-case](https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg)

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-5]

    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_joinchannel2)
    * [\`joinChannelWithUserAccount\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount2)
    * [\`updateChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions)
    * [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setparameters)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    * When calling \`joinChannel\` or \`joinChannelWithUserAccount\` to join a channel, set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    * After joining a channel, call \`updateChannelMediaOptions\` and set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the \`setParameters\` method with suitable JSON options. For details, contact [technical support](mailto\\:support@agora.io).

    ### Use case example [#use-case-example-7]

    In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end.

    If there are 500 participants in the channel, and \`N\` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low.

    **Audio strength selection use case**

    ![Use Case use-case](https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg)

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-6]

    * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2)
    * [\`joinChannelWithUserAccount\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount2)
    * [\`updateChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions)
    * [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setparameters)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    * When calling \`JoinChannel\` or \`JoinChannelWithUserAccount\` to join a channel, set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    * After joining a channel, call \`UpdateChannelMediaOptions\` and set \`isAudioFilterable\` to \`false\` in \`ChannelMediaOptions\` and pass the object in the \`options\` argument.

    To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the \`setParameters\` method with suitable JSON options. For details, contact [technical support](mailto\\:support@agora.io).

    ### Use case example [#use-case-example-8]

    In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end.

    If there are 500 participants in the channel, and \`N\` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low.

    **Audio strength selection use case**

    ![Use Case use-case](https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg)

    ## Reference [#reference-7]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-7]

    * [\`JoinChannel\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2)
    * [\`JoinChannelWithUserAccount\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount)
    * [\`UpdateChannelMediaOptions\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions)
    * [\`SetParameters\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setparameters)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "By default, users joining a channel are automatically subscribed to the audio streams of all remote users. However, in use-cases with many users streaming simultaneously, such as large meetings, this consumes significant downstream bandwidth and system resources. To alleviate the bandwidth pressure and reduce system resource consumption on the receiving end, Agora offers audio-strength stream selection based on volume."
  }, {
    heading: "understand-the-tech",
    content: "After you enable audio-strength stream selection, Agora selects `N` audio streams with the highest volume, according to an audio-strength algorithm, and transmits them to the receiving end. The default value of `N` is 3 streams but you can customize it according to your requirements.\nTo accommodate diverse business use-cases, Agora also provides the streaming end with the option to choose whether its published audio stream participates in audio-strength stream selection or is directly transmitted to the receiving end."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites",
    content: "To enable this feature, contact technical support."
  }, {
    heading: "implement-stream-selection",
    content: "This section shows you how to implement audio-strength stream selection in common business use-cases."
  }, {
    heading: "enable-audio-strength-stream-selection",
    content: "When audio-strength stream selection is enabled, all audio streams in the channel participate in the selection by default. Agora transmits the top 3 audio streams with the highest volume to the receiving end. To customize the number of transmitted audio streams `N`, contact technical support. In use-cases with dozens or even hundreds of simultaneous streams, enabling audio-strength stream selection helps reduce pressure on the downstream bandwidth resource at the receiving end."
  }, {
    heading: "customize-participation",
    content: "To exclude a user from audio-strength stream selection and ensure that their stream is transmitted to the receiving end regardless of its volume, use one of the following methods:"
  }, {
    heading: "customize-participation",
    content: "To exclude a user from audio-strength stream selection and ensure that their stream is transmitted to the receiving end regardless of its volume, contact technical support."
  }, {
    heading: "use-case-example",
    content: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
  }, {
    heading: "use-case-example",
    content: "If there are 500 participants in the channel, and `N` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."
  }, {
    heading: "use-case-example",
    content: "**Audio strength selection use case**"
  }, {
    heading: "use-case-example",
    content: "When calling `joinChannel` or `joinChannelWithUserAccount` to join a channel, set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "use-case-example",
    content: "After joining a channel, call `updateChannelMediaOptions` and set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "use-case-example",
    content: "To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the `setParameters` method with suitable JSON options. For details, contact technical support."
  }, {
    heading: "use-case-example-1",
    content: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
  }, {
    heading: "use-case-example-1",
    content: "If there are 500 participants in the channel, and `N` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."
  }, {
    heading: "use-case-example-1",
    content: "**Audio strength selection use case**"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "`joinChannel`"
  }, {
    heading: "api-reference",
    content: "`joinChannelWithUserAccount`"
  }, {
    heading: "api-reference",
    content: "`updateChannelMediaOptions`"
  }, {
    heading: "api-reference",
    content: "`setParameters`"
  }, {
    heading: "api-reference",
    content: "When calling `joinChannel`, set `isAudioFilterable` to `false` in `AgoraRtcChannelMediaOptions` and pass the object in the `mediaOptions` parameter."
  }, {
    heading: "api-reference",
    content: "After joining a channel, call `updateChannel` and set `isAudioFilterable` to `false` in `AgoraRtcChannelMediaOptions` and pass the object in the `mediaOptions` parameter."
  }, {
    heading: "api-reference",
    content: "To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the `setParameters` method with suitable JSON options. For details, contact technical support."
  }, {
    heading: "use-case-example-2",
    content: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
  }, {
    heading: "use-case-example-2",
    content: "If there are 500 participants in the channel, and `N` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."
  }, {
    heading: "use-case-example-2",
    content: "**Audio strength selection use case**"
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-1",
    content: "`updateChannel`"
  }, {
    heading: "api-reference-1",
    content: "`joinChannel`"
  }, {
    heading: "api-reference-1",
    content: "When calling `joinChannelByToken` or `joinChannelWithUserAccount` to join a channel, set `isAudioFilterable` to `false` in `AgoraRtcChannelMediaOptions` and pass the object in the `mediaOptions` parameter."
  }, {
    heading: "api-reference-1",
    content: "After joining a channel, call `updateChannelWithMediaOptions` and set `isAudioFilterable` to `false` in the `AgoraRtcChannelMediaOptions` and pass the object in the `mediaOptions` parameter."
  }, {
    heading: "api-reference-1",
    content: "To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the `setParameters` method with suitable JSON options. For details, contact technical support."
  }, {
    heading: "use-case-example-3",
    content: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
  }, {
    heading: "use-case-example-3",
    content: "If there are 500 participants in the channel, and `N` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."
  }, {
    heading: "use-case-example-3",
    content: "**Audio strength selection use case**"
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-2",
    content: "`updateChannel`"
  }, {
    heading: "api-reference-2",
    content: "`joinChannel`"
  }, {
    heading: "api-reference-2",
    content: "When calling `joinChannel` or `joinChannelWithUserAccount` to join a channel, set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-2",
    content: "After joining a channel, call `updateChannelMediaOptions` and set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-2",
    content: "To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the `setParameters` method with suitable JSON options. For details, contact technical support."
  }, {
    heading: "use-case-example-4",
    content: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
  }, {
    heading: "use-case-example-4",
    content: "If there are 500 participants in the channel, and `N` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."
  }, {
    heading: "use-case-example-4",
    content: "**Audio strength selection use case**"
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-3",
    content: "`joinChannel`"
  }, {
    heading: "api-reference-3",
    content: "`joinChannelWithUserAccount`"
  }, {
    heading: "api-reference-3",
    content: "`updateChannelMediaOptions`"
  }, {
    heading: "api-reference-3",
    content: "`setParameters`"
  }, {
    heading: "api-reference-3",
    content: "When calling `joinChannel` or `joinChannelWithUserAccount` to join a channel, set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-3",
    content: "After joining a channel, call `updateChannelMediaOptions` and set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-3",
    content: "To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the `setParameters` method with suitable JSON options. For details, contact technical support."
  }, {
    heading: "use-case-example-5",
    content: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
  }, {
    heading: "use-case-example-5",
    content: "If there are 500 participants in the channel, and `N` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."
  }, {
    heading: "use-case-example-5",
    content: "**Audio strength selection use case**"
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-4",
    content: "`joinChannel`"
  }, {
    heading: "api-reference-4",
    content: "`joinChannelWithUserAccount`"
  }, {
    heading: "api-reference-4",
    content: "`updateChannelMediaOptions`"
  }, {
    heading: "api-reference-4",
    content: "`setParameters`"
  }, {
    heading: "api-reference-4",
    content: "When calling `joinChannel` or `joinChannelWithUserAccount` to join a channel, set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-4",
    content: "After joining a channel, call `updateChannelMediaOptions` and set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-4",
    content: "To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the `setParameters` method with suitable JSON options. For details, contact technical support."
  }, {
    heading: "use-case-example-6",
    content: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
  }, {
    heading: "use-case-example-6",
    content: "If there are 500 participants in the channel, and `N` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."
  }, {
    heading: "use-case-example-6",
    content: "**Audio strength selection use case**"
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-5",
    content: "`joinChannel`"
  }, {
    heading: "api-reference-5",
    content: "`joinChannelWithUserAccount`"
  }, {
    heading: "api-reference-5",
    content: "`updateChannelMediaOptions`"
  }, {
    heading: "api-reference-5",
    content: "`setParameters`"
  }, {
    heading: "api-reference-5",
    content: "When calling `joinChannel` or `joinChannelWithUserAccount` to join a channel, set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-5",
    content: "After joining a channel, call `updateChannelMediaOptions` and set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-5",
    content: "To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the `setParameters` method with suitable JSON options. For details, contact technical support."
  }, {
    heading: "use-case-example-7",
    content: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
  }, {
    heading: "use-case-example-7",
    content: "If there are 500 participants in the channel, and `N` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."
  }, {
    heading: "use-case-example-7",
    content: "**Audio strength selection use case**"
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-6",
    content: "`joinChannel`"
  }, {
    heading: "api-reference-6",
    content: "`joinChannelWithUserAccount`"
  }, {
    heading: "api-reference-6",
    content: "`updateChannelMediaOptions`"
  }, {
    heading: "api-reference-6",
    content: "`setParameters`"
  }, {
    heading: "api-reference-6",
    content: "When calling `JoinChannel` or `JoinChannelWithUserAccount` to join a channel, set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-6",
    content: "After joining a channel, call `UpdateChannelMediaOptions` and set `isAudioFilterable` to `false` in `ChannelMediaOptions` and pass the object in the `options` argument."
  }, {
    heading: "api-reference-6",
    content: "To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the `setParameters` method with suitable JSON options. For details, contact technical support."
  }, {
    heading: "use-case-example-8",
    content: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
  }, {
    heading: "use-case-example-8",
    content: "If there are 500 participants in the channel, and `N` is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."
  }, {
    heading: "use-case-example-8",
    content: "**Audio strength selection use case**"
  }, {
    heading: "reference-7",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-7",
    content: "`JoinChannel`"
  }, {
    heading: "api-reference-7",
    content: "`JoinChannelWithUserAccount`"
  }, {
    heading: "api-reference-7",
    content: "`UpdateChannelMediaOptions`"
  }, {
    heading: "api-reference-7",
    content: "`SetParameters`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-stream-selection",
    content: "Implement stream selection"
  }, {
    id: "enable-audio-strength-stream-selection",
    content: "Enable audio-strength stream selection"
  }, {
    id: "customize-participation",
    content: "Customize participation"
  }, {
    id: "use-case-example",
    content: "Use case example"
  }, {
    id: "use-case-example-1",
    content: "Use case example"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "use-case-example-2",
    content: "Use case example"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "use-case-example-3",
    content: "Use case example"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "use-case-example-4",
    content: "Use case example"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "use-case-example-5",
    content: "Use case example"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "use-case-example-6",
    content: "Use case example"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "use-case-example-7",
    content: "Use case example"
  }, {
    id: "reference-6",
    content: "Reference"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "use-case-example-8",
    content: "Use case example"
  }, {
    id: "reference-7",
    content: "Reference"
  }, {
    id: "api-reference-7",
    content: "API reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-stream-selection",
  title: _jsx(_Fragment, {
    children: "Implement stream selection"
  })
}, {
  depth: 3,
  url: "#enable-audio-strength-stream-selection",
  title: _jsx(_Fragment, {
    children: "Enable audio-strength stream selection"
  })
}, {
  depth: 3,
  url: "#customize-participation",
  title: _jsx(_Fragment, {
    children: "Customize participation"
  })
}, {
  depth: 3,
  url: "#use-case-example",
  title: _jsx(_Fragment, {
    children: "Use case example"
  })
}, {
  depth: 3,
  url: "#use-case-example-1",
  title: _jsx(_Fragment, {
    children: "Use case example"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#use-case-example-2",
  title: _jsx(_Fragment, {
    children: "Use case example"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#use-case-example-3",
  title: _jsx(_Fragment, {
    children: "Use case example"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#use-case-example-4",
  title: _jsx(_Fragment, {
    children: "Use case example"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-3",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#use-case-example-5",
  title: _jsx(_Fragment, {
    children: "Use case example"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#use-case-example-6",
  title: _jsx(_Fragment, {
    children: "Use case example"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#use-case-example-7",
  title: _jsx(_Fragment, {
    children: "Use case example"
  })
}, {
  depth: 2,
  url: "#reference-6",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#use-case-example-8",
  title: _jsx(_Fragment, {
    children: "Use case example"
  })
}, {
  depth: 2,
  url: "#reference-7",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-7",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "By default, users joining a channel are automatically subscribed to the audio streams of all remote users. However, in use-cases with many users streaming simultaneously, such as large meetings, this consumes significant downstream bandwidth and system resources. To alleviate the bandwidth pressure and reduce system resource consumption on the receiving end, Agora offers audio-strength stream selection based on volume."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["After you enable audio-strength stream selection, Agora selects ", _jsx(_components.code, {
        children: "N"
      }), " audio streams with the highest volume, according to an audio-strength algorithm, and transmits them to the receiving end. The default value of ", _jsx(_components.code, {
        children: "N"
      }), ` is 3 streams but you can customize it according to your requirements.
To accommodate diverse business use-cases, Agora also provides the streaming end with the option to choose whether its published audio stream participates in audio-strength stream selection or is directly transmitted to the receiving end.`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure that you have implemented the ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/get-started-sdk",
        children: "SDK quickstart"
      }), " in your project."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To enable this feature, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "implement-stream-selection",
      children: "Implement stream selection"
    }), `
`, _jsx(_components.p, {
      children: "This section shows you how to implement audio-strength stream selection in common business use-cases."
    }), `
`, _jsx(_components.h3, {
      id: "enable-audio-strength-stream-selection",
      children: "Enable audio-strength stream selection"
    }), `
`, _jsxs(_components.p, {
      children: ["When audio-strength stream selection is enabled, all audio streams in the channel participate in the selection by default. Agora transmits the top 3 audio streams with the highest volume to the receiving end. To customize the number of transmitted audio streams ", _jsx(_components.code, {
        children: "N"
      }), ", contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "technical support"
      }), ". In use-cases with dozens or even hundreds of simultaneous streams, enabling audio-strength stream selection helps reduce pressure on the downstream bandwidth resource at the receiving end."]
    }), `
`, _jsx(_components.h3, {
      id: "customize-participation",
      children: "Customize participation"
    }), `
`, _jsx(_components.p, {
      children: "To exclude a user from audio-strength stream selection and ensure that their stream is transmitted to the receiving end regardless of its volume, use one of the following methods:"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["web","android","ios","macos","windows","electron","flutter","react-native","unity"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsxs(_components.p, {
          children: ["To exclude a user from audio-strength stream selection and ensure that their stream is transmitted to the receiving end regardless of its volume, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        }), _jsx(_components.h3, {
          id: "use-case-example",
          children: "Use case example"
        }), _jsx(_components.p, {
          children: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
        }), _jsxs(_components.p, {
          children: ["If there are 500 participants in the channel, and ", _jsx(_components.code, {
            children: "N"
          }), " is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio strength selection use case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg",
            alt: "Use Case use-case"
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), " or ", _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              }), " to join a channel, set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              }), " and set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the ", _jsx(_components.code, {
            children: "setParameters"
          }), " method with suitable JSON options. For details, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        }), _jsx(_components.h3, {
          id: "use-case-example-1",
          children: "Use case example"
        }), _jsx(_components.p, {
          children: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
        }), _jsxs(_components.p, {
          children: ["If there are 500 participants in the channel, and ", _jsx(_components.code, {
            children: "N"
          }), " is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio strength selection use case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg",
            alt: "Use Case use-case"
          })
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount",
              children: _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions",
              children: _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
              children: _jsx(_components.code, {
                children: "setParameters"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ", set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "AgoraRtcChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "updateChannel"
              }), " and set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "AgoraRtcChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the ", _jsx(_components.code, {
            children: "setParameters"
          }), " method with suitable JSON options. For details, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        }), _jsx(_components.h3, {
          id: "use-case-example-2",
          children: "Use case example"
        }), _jsx(_components.p, {
          children: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
        }), _jsxs(_components.p, {
          children: ["If there are 500 participants in the channel, and ", _jsx(_components.code, {
            children: "N"
          }), " is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio strength selection use case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg",
            alt: "Use Case use-case"
          })
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/updatechannel(with:)",
              children: _jsx(_components.code, {
                children: "updateChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:useraccount:mediaoptions:joinsuccess:)",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When calling ", _jsx(_components.code, {
                children: "joinChannelByToken"
              }), " or ", _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              }), " to join a channel, set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "AgoraRtcChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "updateChannelWithMediaOptions"
              }), " and set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in the ", _jsx(_components.code, {
                children: "AgoraRtcChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "mediaOptions"
              }), " parameter."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the ", _jsx(_components.code, {
            children: "setParameters"
          }), " method with suitable JSON options. For details, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        }), _jsx(_components.h3, {
          id: "use-case-example-3",
          children: "Use case example"
        }), _jsx(_components.p, {
          children: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
        }), _jsxs(_components.p, {
          children: ["If there are 500 participants in the channel, and ", _jsx(_components.code, {
            children: "N"
          }), " is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio strength selection use case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg",
            alt: "Use Case use-case"
          })
        }), _jsx(_components.h2, {
          id: "reference-2",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/updatechannel(with:)",
              children: _jsx(_components.code, {
                children: "updateChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:useraccount:mediaoptions:joinsuccess:)",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), " or ", _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              }), " to join a channel, set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              }), " and set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the ", _jsx(_components.code, {
            children: "setParameters"
          }), " method with suitable JSON options. For details, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        }), _jsx(_components.h3, {
          id: "use-case-example-4",
          children: "Use case example"
        }), _jsx(_components.p, {
          children: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
        }), _jsxs(_components.p, {
          children: ["If there are 500 participants in the channel, and ", _jsx(_components.code, {
            children: "N"
          }), " is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio strength selection use case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg",
            alt: "Use Case use-case"
          })
        }), _jsx(_components.h2, {
          id: "reference-3",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount",
              children: _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions",
              children: _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
              children: _jsx(_components.code, {
                children: "setParameters"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), " or ", _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              }), " to join a channel, set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              }), " and set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the ", _jsx(_components.code, {
            children: "setParameters"
          }), " method with suitable JSON options. For details, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        }), _jsx(_components.h3, {
          id: "use-case-example-5",
          children: "Use case example"
        }), _jsx(_components.p, {
          children: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
        }), _jsxs(_components.p, {
          children: ["If there are 500 participants in the channel, and ", _jsx(_components.code, {
            children: "N"
          }), " is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio strength selection use case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg",
            alt: "Use Case use-case"
          })
        }), _jsx(_components.h2, {
          id: "reference-4",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount2",
              children: _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions",
              children: _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
              children: _jsx(_components.code, {
                children: "setParameters"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "flutter"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), " or ", _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              }), " to join a channel, set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              }), " and set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the ", _jsx(_components.code, {
            children: "setParameters"
          }), " method with suitable JSON options. For details, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        }), _jsx(_components.h3, {
          id: "use-case-example-6",
          children: "Use case example"
        }), _jsx(_components.p, {
          children: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
        }), _jsxs(_components.p, {
          children: ["If there are 500 participants in the channel, and ", _jsx(_components.code, {
            children: "N"
          }), " is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio strength selection use case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg",
            alt: "Use Case use-case"
          })
        }), _jsx(_components.h2, {
          id: "reference-5",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount2",
              children: _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions",
              children: _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setparameters",
              children: _jsx(_components.code, {
                children: "setParameters"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), " or ", _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              }), " to join a channel, set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              }), " and set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the ", _jsx(_components.code, {
            children: "setParameters"
          }), " method with suitable JSON options. For details, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        }), _jsx(_components.h3, {
          id: "use-case-example-7",
          children: "Use case example"
        }), _jsx(_components.p, {
          children: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
        }), _jsxs(_components.p, {
          children: ["If there are 500 participants in the channel, and ", _jsx(_components.code, {
            children: "N"
          }), " is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio strength selection use case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg",
            alt: "Use Case use-case"
          })
        }), _jsx(_components.h2, {
          id: "reference-6",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount2",
              children: _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions",
              children: _jsx(_components.code, {
                children: "updateChannelMediaOptions"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
              children: _jsx(_components.code, {
                children: "setParameters"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When calling ", _jsx(_components.code, {
                children: "JoinChannel"
              }), " or ", _jsx(_components.code, {
                children: "JoinChannelWithUserAccount"
              }), " to join a channel, set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "UpdateChannelMediaOptions"
              }), " and set ", _jsx(_components.code, {
                children: "isAudioFilterable"
              }), " to ", _jsx(_components.code, {
                children: "false"
              }), " in ", _jsx(_components.code, {
                children: "ChannelMediaOptions"
              }), " and pass the object in the ", _jsx(_components.code, {
                children: "options"
              }), " argument."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["To receive all audio streams for a particular user, without any filtering by the audio-strength stream selection feature, pull all subscribed remote audio streams. To achieve this, you call the ", _jsx(_components.code, {
            children: "setParameters"
          }), " method with suitable JSON options. For details, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        }), _jsx(_components.h3, {
          id: "use-case-example-8",
          children: "Use case example"
        }), _jsx(_components.p, {
          children: "In a large enterprise meeting, with audio-strength stream selection enabled, certain key participants may designate their published audio streams to be excluded from selection based on audio strength. Instead, these streams are transmitted directly to the receiving end."
        }), _jsxs(_components.p, {
          children: ["If there are 500 participants in the channel, and ", _jsx(_components.code, {
            children: "N"
          }), " is set to 4, it means that Agora transmits the top 4 audio streams with the highest volume to the receiving end. However, the main speaker A, representing headquarters, and other branch representatives B, C, D set their published audio streams not to participate in the selection. This setting reduces stuttering when playing audio streams at the receiving end. It also ensures that key users have their audio streams received by the audience, even if their speaking volume is low."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Audio strength selection use case"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/audio-strength-selection-use-case.svg",
            alt: "Use Case use-case"
          })
        }), _jsx(_components.h2, {
          id: "reference-7",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-7",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel2",
              children: _jsx(_components.code, {
                children: "JoinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount",
              children: _jsx(_components.code, {
                children: "JoinChannelWithUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_updatechannelmediaoptions",
              children: _jsx(_components.code, {
                children: "UpdateChannelMediaOptions"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
              children: _jsx(_components.code, {
                children: "SetParameters"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
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
