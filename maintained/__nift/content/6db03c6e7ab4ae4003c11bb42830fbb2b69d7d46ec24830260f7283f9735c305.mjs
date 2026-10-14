import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Migration from SDK 3.x",
  description: "Sunset plans for Agora services."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    The On-Premise Recording SDK 4.x is the latest version that enables audio and video recording during real-time interactions. For a complete list of features and applicable use cases, refer to the [Product Overview](/en/realtime-media/on-premise-recording).

    This guide highlights the major changes introduced in version 4.x compared to version 3.x.

    ## Key improvements in 4.x [#key-improvements-in-4x]

    The On-Premise Recording SDK 4.x is built on top of the latest Agora RTC SDK 4.x. It provides significant improvements in compatibility, performance, and codec support.

    ### New capabilities [#new-capabilities]

    * Supports the latest Agora cloud agent
    * Improved resilience in weak network conditions and adaptive feedback
    * Compatibility with Video SDK 4.x and later
    * Support for AV1 and other peer codecs
    * Easier upgrades due to shared RTC engine between the RTC SDK and the recording SDK

    ## Functionality changes [#functionality-changes]

    Version 4.x focuses on recording audio and video streams in the RTC channel and generating MP4 files.

    ### Deprecated features [#deprecated-features]

    The following features are not available in SDK 4.x. If needed, use the Agora Server Gateway:

    * Access to raw audio and video (For example, YUV or PCM data)
    * Built-in cloud container deployment

    <CalloutContainer type="info">
      <CalloutDescription>
        Version 4.x is designed for self-hosted deployment. It is not a cloud or aPaaS service.
      </CalloutDescription>
    </CalloutContainer>

    ## Changes in service behavior [#changes-in-service-behavior]

    The following runtime behaviors from version 3.x have been removed in version 4.x:

    * Multi-process service management
    * Automatic crash recovery

    You must implement service management and failover handling in your own infrastructure.

    ## API comparison [#api-comparison]

    The following table compares key APIs between version 4.x and 3.x:

    | Functional module                          | 4.x API                                                                                                                                                                                                                                                                                           | Older versions                                                                                                                                           |
    | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Create and initialize a recording instance | - \`createAgoraService\`<br />- \`IAgoraService::initialize\`<br />- \`createAgoraMediaComponentFactory\`<br />- \`createMediaRtcRecorder\`<br />- \`IAgoraMediaRtcRecorder::initialize\`                                                                                                                   | \`createAgoraRecordingEngine\`                                                                                                                             |
    | Join a channel                             | \`joinChannel\`<br />If the String UID function is enabled, you can directly use the String UID to pass parameters when calling \`joinChannel\`, without calling other APIs.                                                                                                                          | - \`joinChannel\`<br />- \`joinChannelWithUserAccount\`<br />- \`getUserInfoByUserAccount\`<br />- \`getUserInfoByUid\`                                          |
    | Implement subscription logic               | - \`subscribeAllAudio\`<br />- \`unsubscribeAllAudio\`<br />- \`subscribeAllVideo\`<br />- \`unsubscribeAllVideo\`<br />- \`subscribeAudio\`<br />- \`unsubscribeAudio\`<br />- \`subscribeVideo\`<br />- \`unsubscribeVideo\`                                                                                    | Use the following fields in \`RecordingConfig\` when calling \`joinChannel\`:<br />- \`autoSubscribe\`<br />- \`subscribeVideoUids\`<br />- \`subscribeAudioUids\` |
    | Start or stop recording                    | **Individual recording:**<br />- \`startSingleRecordingByUid\`<br />- \`stopSingleRecordingByUid\`<br />- \`setRecorderConfigByUid\`<br /><br />&#x2A;*Composite recording:**<br />- \`startRecording\`<br />- \`stopRecording\`<br />- \`setRecordingConfig\`<br />Use with \`enable_mix\` set in \`initialize\` | - \`startService\`<br />- \`stopService\`<br />Use with \`isMixingEnabled\` in \`RecordingConfig\`                                                               |
    | Watermark                                  | - \`enableAndUpdateVideoWatermarks\`<br />- \`disableVideoWatermarks\`<br />- \`enableAndUpdateVideoWatermarksByUid\`<br />- \`disableVideoWatermarksByUid\`                                                                                                                                              | Use \`updateWatermarkConfigs\` with \`wm_num\` and \`wm_configs\` in \`VideoMixingLayout\`                                                                       |

    ## Callback comparison [#callback-comparison]

    The following table compares key callbacks between version 4.x and 3.x:

    | Event                                   | 4.x API                     | Older versions                    |
    | --------------------------------------- | --------------------------- | --------------------------------- |
    | Local user joins the channel            | \`onConnected\`               | \`onJoinChannelSuccess\`            |
    | Local user leaves the channel           | \`onDisconnected\`            | \`onLeaveChannel\`                  |
    | Local user rejoins after reconnecting   | \`onReconnected\`             | \`onRejoinChannelSuccess\`          |
    | Remote user leaves the channel          | \`onUserLeft\`                | \`onUserOffline\`                   |
    | First frame of remote audio is received | \`onFirstRemoteAudioDecoded\` | \`onFirstRemoteAudioFrame\`         |
    | Remote user's audio state changes       | \`onUserAudioStateChanged\`   | \`onRemoteAudioStreamStateChanged\` |
    | Remote user's video state changes       | \`onUserVideoStateChanged\`   | \`onRemoteVideoStreamStateChanged\` |

    For more information, refer to the [API reference](/en/api-reference/api-ref/on-premise-recording).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    The On-Premise Recording SDK 4.x is the latest version that enables audio and video recording during real-time interactions. For a complete list of features and applicable use cases, refer to the [Product Overview](/en/realtime-media/on-premise-recording).

    This guide highlights the major changes introduced in version 4.x compared to version 3.x.

    ## Key improvements in 4.x [#key-improvements-in-4x-1]

    The On-Premise Recording SDK 4.x is built on top of the latest Agora RTC SDK 4.x. It provides significant improvements in compatibility, performance, and codec support.

    ### New capabilities [#new-capabilities-1]

    * Supports the latest Agora cloud agent
    * Improved resilience in weak network conditions and adaptive feedback
    * Compatibility with Video SDK 4.x and later
    * Support for AV1 and other peer codecs
    * Easier upgrades due to shared RTC engine between the RTC SDK and the recording SDK

    ## Functionality changes [#functionality-changes-1]

    Version 4.x focuses on recording audio and video streams in the RTC channel and generating MP4 files.

    ### Deprecated features [#deprecated-features-1]

    The following features are not available in SDK 4.x. If needed, use the Agora Server Gateway:

    * Access to raw audio and video (For example, YUV or PCM data)
    * Built-in cloud container deployment

    <CalloutContainer type="info">
      <CalloutDescription>
        Version 4.x is designed for self-hosted deployment. It is not a cloud or aPaaS service.
      </CalloutDescription>
    </CalloutContainer>

    ## Changes in service behavior [#changes-in-service-behavior-1]

    The following runtime behaviors from version 3.x have been removed in version 4.x:

    * Multi-process service management
    * Automatic crash recovery

    You must implement service management and failover handling in your own infrastructure.

    ## API comparison [#api-comparison-1]

    The following table compares key APIs between version 4.x and 3.x:

    | Functional module                          | 4.x                                                                                                                                                                                                                                                                                                                        | 3.x                                                                                                                                                             |
    | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Create and initialize a recording instance | - \`AgoraService\`<br /> - \`AgoraService.initialize\`<br /> - \`createAgoraMediaComponentFactory\`<br /> - \`createMediaRtcRecorder\`<br /> - \`AgoraMediaRtcRecorder.initialize\`                                                                                                                                                  | \`RecordingSDK\`                                                                                                                                                  |
    | Join a channel                             | \`joinChannel\`<br />If the String UID function is enabled, you can directly use the String UID to pass parameters when calling \`joinChannel\`, without calling other APIs.                                                                                                                                                   | - \`createChannel\`<br /> - \`createChannelWithUserAccount\`<br /> - \`getUidByUserAccount\`<br /> - \`getUserAccountByUid\`                                            |
    | Implement subscription logic               | - \`subscribeAllAudio\`<br /> - \`unsubscribeAllAudio\`<br /> - \`subscribeAllVideo\`<br /> - \`unsubscribeAllVideo\`<br /> - \`subscribeAudio\`<br /> - \`unsubscribeAudio\`<br /> - \`subscribeVideo\`<br /> - \`unsubscribeVideo\`                                                                                                      | The following fields of the \`RecordingConfig\` object in the \`create\` method:<br /> - \`autoSubscribe\`<br /> - \`subscribeVideoUids\` <br /> - \`subscribeAudioUids\` |
    | Start or stop recording                    | **Individual recording:**<br /> - \`startSingleRecordingByUid\`<br /> - \`stopSingleRecordingByUid\`<br /> - \`setRecorderConfigByUid\`<br /><br />&#x2A;*Composite recording:**<br /> - \`startRecording\`<br /> - \`stopRecording\`<br /> - \`setRecordingConfig\`<br />Use with \`enableMix\` set to \`true\` when calling \`initialize\` | - \`startService\`<br /> - \`stopService\`<br />Use with \`isMixingEnabled\` in \`RecordingConfig\`                                                                     |
    | Watermark                                  | - \`enableAndUpdateVideoWatermarks\`<br /> - \`disableVideoWatermarks\`<br /> - \`enableAndUpdateVideoWatermarksByUid\`<br /> - \`disableVideoWatermarksByUid\`                                                                                                                                                                    | \`updateWatermarkConfigs\`                                                                                                                                        |

    ## Callback comparison [#callback-comparison-1]

    The following table compares key callbacks between version 4.x and 3.x:

    | Event                                   | 4.x API                     | Older versions                    |
    | --------------------------------------- | --------------------------- | --------------------------------- |
    | Local user joins the channel            | \`onConnected\`               | \`onJoinChannelSuccess\`            |
    | Local user leaves the channel           | \`onDisconnected\`            | \`onLeaveChannel\`                  |
    | Local user rejoins after reconnecting   | \`onReconnected\`             | \`onRejoinChannelSuccess\`          |
    | Remote user leaves the channel          | \`onUserLeft\`                | \`onUserOffline\`                   |
    | First frame of remote audio is received | \`onFirstRemoteAudioDecoded\` | \`onFirstRemoteAudioFrame\`         |
    | Remote user's audio state changes       | \`onUserAudioStateChanged\`   | \`onRemoteAudioStreamStateChanged\` |
    | Remote user's video state changes       | \`onUserVideoStateChanged\`   | \`onRemoteVideoStreamStateChanged\` |

    For more information, refer to the [API reference](/en/api-reference/api-ref/on-premise-recording).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The On-Premise Recording SDK 4.x is the latest version that enables audio and video recording during real-time interactions. For a complete list of features and applicable use cases, refer to the Product Overview."
  }, {
    heading: undefined,
    content: "This guide highlights the major changes introduced in version 4.x compared to version 3.x."
  }, {
    heading: "key-improvements-in-4x",
    content: "The On-Premise Recording SDK 4.x is built on top of the latest Agora RTC SDK 4.x. It provides significant improvements in compatibility, performance, and codec support."
  }, {
    heading: "new-capabilities",
    content: "Supports the latest Agora cloud agent"
  }, {
    heading: "new-capabilities",
    content: "Improved resilience in weak network conditions and adaptive feedback"
  }, {
    heading: "new-capabilities",
    content: "Compatibility with Video SDK 4.x and later"
  }, {
    heading: "new-capabilities",
    content: "Support for AV1 and other peer codecs"
  }, {
    heading: "new-capabilities",
    content: "Easier upgrades due to shared RTC engine between the RTC SDK and the recording SDK"
  }, {
    heading: "functionality-changes",
    content: "Version 4.x focuses on recording audio and video streams in the RTC channel and generating MP4 files."
  }, {
    heading: "deprecated-features",
    content: "The following features are not available in SDK 4.x. If needed, use the Agora Server Gateway:"
  }, {
    heading: "deprecated-features",
    content: "Access to raw audio and video (For example, YUV or PCM data)"
  }, {
    heading: "deprecated-features",
    content: "Built-in cloud container deployment"
  }, {
    heading: "deprecated-features",
    content: "Version 4.x is designed for self-hosted deployment. It is not a cloud or aPaaS service."
  }, {
    heading: "changes-in-service-behavior",
    content: "The following runtime behaviors from version 3.x have been removed in version 4.x:"
  }, {
    heading: "changes-in-service-behavior",
    content: "Multi-process service management"
  }, {
    heading: "changes-in-service-behavior",
    content: "Automatic crash recovery"
  }, {
    heading: "changes-in-service-behavior",
    content: "You must implement service management and failover handling in your own infrastructure."
  }, {
    heading: "api-comparison",
    content: "The following table compares key APIs between version 4.x and 3.x:"
  }, {
    heading: "api-comparison",
    content: "Functional module"
  }, {
    heading: "api-comparison",
    content: "4.x API"
  }, {
    heading: "api-comparison",
    content: "Older versions"
  }, {
    heading: "api-comparison",
    content: "Create and initialize a recording instance"
  }, {
    heading: "api-comparison",
    content: "- `createAgoraService`- `IAgoraService::initialize`- `createAgoraMediaComponentFactory`- `createMediaRtcRecorder`- `IAgoraMediaRtcRecorder::initialize`"
  }, {
    heading: "api-comparison",
    content: "`createAgoraRecordingEngine`"
  }, {
    heading: "api-comparison",
    content: "Join a channel"
  }, {
    heading: "api-comparison",
    content: "`joinChannel`If the String UID function is enabled, you can directly use the String UID to pass parameters when calling `joinChannel`, without calling other APIs."
  }, {
    heading: "api-comparison",
    content: "- `joinChannel`- `joinChannelWithUserAccount`- `getUserInfoByUserAccount`- `getUserInfoByUid`"
  }, {
    heading: "api-comparison",
    content: "Implement subscription logic"
  }, {
    heading: "api-comparison",
    content: "- `subscribeAllAudio`- `unsubscribeAllAudio`- `subscribeAllVideo`- `unsubscribeAllVideo`- `subscribeAudio`- `unsubscribeAudio`- `subscribeVideo`- `unsubscribeVideo`"
  }, {
    heading: "api-comparison",
    content: "Use the following fields in `RecordingConfig` when calling `joinChannel`:- `autoSubscribe`- `subscribeVideoUids`- `subscribeAudioUids`"
  }, {
    heading: "api-comparison",
    content: "Start or stop recording"
  }, {
    heading: "api-comparison",
    content: "**Individual recording:**- `startSingleRecordingByUid`- `stopSingleRecordingByUid`- `setRecorderConfigByUid`&#x2A;*Composite recording:**- `startRecording`- `stopRecording`- `setRecordingConfig`Use with `enable_mix` set in `initialize`"
  }, {
    heading: "api-comparison",
    content: "- `startService`- `stopService`Use with `isMixingEnabled` in `RecordingConfig`"
  }, {
    heading: "api-comparison",
    content: "Watermark"
  }, {
    heading: "api-comparison",
    content: "- `enableAndUpdateVideoWatermarks`- `disableVideoWatermarks`- `enableAndUpdateVideoWatermarksByUid`- `disableVideoWatermarksByUid`"
  }, {
    heading: "api-comparison",
    content: "Use `updateWatermarkConfigs` with `wm_num` and `wm_configs` in `VideoMixingLayout`"
  }, {
    heading: "callback-comparison",
    content: "The following table compares key callbacks between version 4.x and 3.x:"
  }, {
    heading: "callback-comparison",
    content: "Event"
  }, {
    heading: "callback-comparison",
    content: "4.x API"
  }, {
    heading: "callback-comparison",
    content: "Older versions"
  }, {
    heading: "callback-comparison",
    content: "Local user joins the channel"
  }, {
    heading: "callback-comparison",
    content: "`onConnected`"
  }, {
    heading: "callback-comparison",
    content: "`onJoinChannelSuccess`"
  }, {
    heading: "callback-comparison",
    content: "Local user leaves the channel"
  }, {
    heading: "callback-comparison",
    content: "`onDisconnected`"
  }, {
    heading: "callback-comparison",
    content: "`onLeaveChannel`"
  }, {
    heading: "callback-comparison",
    content: "Local user rejoins after reconnecting"
  }, {
    heading: "callback-comparison",
    content: "`onReconnected`"
  }, {
    heading: "callback-comparison",
    content: "`onRejoinChannelSuccess`"
  }, {
    heading: "callback-comparison",
    content: "Remote user leaves the channel"
  }, {
    heading: "callback-comparison",
    content: "`onUserLeft`"
  }, {
    heading: "callback-comparison",
    content: "`onUserOffline`"
  }, {
    heading: "callback-comparison",
    content: "First frame of remote audio is received"
  }, {
    heading: "callback-comparison",
    content: "`onFirstRemoteAudioDecoded`"
  }, {
    heading: "callback-comparison",
    content: "`onFirstRemoteAudioFrame`"
  }, {
    heading: "callback-comparison",
    content: "Remote user's audio state changes"
  }, {
    heading: "callback-comparison",
    content: "`onUserAudioStateChanged`"
  }, {
    heading: "callback-comparison",
    content: "`onRemoteAudioStreamStateChanged`"
  }, {
    heading: "callback-comparison",
    content: "Remote user's video state changes"
  }, {
    heading: "callback-comparison",
    content: "`onUserVideoStateChanged`"
  }, {
    heading: "callback-comparison",
    content: "`onRemoteVideoStreamStateChanged`"
  }, {
    heading: "callback-comparison",
    content: "For more information, refer to the API reference."
  }, {
    heading: "callback-comparison",
    content: "The On-Premise Recording SDK 4.x is the latest version that enables audio and video recording during real-time interactions. For a complete list of features and applicable use cases, refer to the Product Overview."
  }, {
    heading: "callback-comparison",
    content: "This guide highlights the major changes introduced in version 4.x compared to version 3.x."
  }, {
    heading: "key-improvements-in-4x-1",
    content: "The On-Premise Recording SDK 4.x is built on top of the latest Agora RTC SDK 4.x. It provides significant improvements in compatibility, performance, and codec support."
  }, {
    heading: "new-capabilities-1",
    content: "Supports the latest Agora cloud agent"
  }, {
    heading: "new-capabilities-1",
    content: "Improved resilience in weak network conditions and adaptive feedback"
  }, {
    heading: "new-capabilities-1",
    content: "Compatibility with Video SDK 4.x and later"
  }, {
    heading: "new-capabilities-1",
    content: "Support for AV1 and other peer codecs"
  }, {
    heading: "new-capabilities-1",
    content: "Easier upgrades due to shared RTC engine between the RTC SDK and the recording SDK"
  }, {
    heading: "functionality-changes-1",
    content: "Version 4.x focuses on recording audio and video streams in the RTC channel and generating MP4 files."
  }, {
    heading: "deprecated-features-1",
    content: "The following features are not available in SDK 4.x. If needed, use the Agora Server Gateway:"
  }, {
    heading: "deprecated-features-1",
    content: "Access to raw audio and video (For example, YUV or PCM data)"
  }, {
    heading: "deprecated-features-1",
    content: "Built-in cloud container deployment"
  }, {
    heading: "deprecated-features-1",
    content: "Version 4.x is designed for self-hosted deployment. It is not a cloud or aPaaS service."
  }, {
    heading: "changes-in-service-behavior-1",
    content: "The following runtime behaviors from version 3.x have been removed in version 4.x:"
  }, {
    heading: "changes-in-service-behavior-1",
    content: "Multi-process service management"
  }, {
    heading: "changes-in-service-behavior-1",
    content: "Automatic crash recovery"
  }, {
    heading: "changes-in-service-behavior-1",
    content: "You must implement service management and failover handling in your own infrastructure."
  }, {
    heading: "api-comparison-1",
    content: "The following table compares key APIs between version 4.x and 3.x:"
  }, {
    heading: "api-comparison-1",
    content: "Functional module"
  }, {
    heading: "api-comparison-1",
    content: "4.x"
  }, {
    heading: "api-comparison-1",
    content: "3.x"
  }, {
    heading: "api-comparison-1",
    content: "Create and initialize a recording instance"
  }, {
    heading: "api-comparison-1",
    content: "- `AgoraService` - `AgoraService.initialize` - `createAgoraMediaComponentFactory` - `createMediaRtcRecorder` - `AgoraMediaRtcRecorder.initialize`"
  }, {
    heading: "api-comparison-1",
    content: "`RecordingSDK`"
  }, {
    heading: "api-comparison-1",
    content: "Join a channel"
  }, {
    heading: "api-comparison-1",
    content: "`joinChannel`If the String UID function is enabled, you can directly use the String UID to pass parameters when calling `joinChannel`, without calling other APIs."
  }, {
    heading: "api-comparison-1",
    content: "- `createChannel` - `createChannelWithUserAccount` - `getUidByUserAccount` - `getUserAccountByUid`"
  }, {
    heading: "api-comparison-1",
    content: "Implement subscription logic"
  }, {
    heading: "api-comparison-1",
    content: "- `subscribeAllAudio` - `unsubscribeAllAudio` - `subscribeAllVideo` - `unsubscribeAllVideo` - `subscribeAudio` - `unsubscribeAudio` - `subscribeVideo` - `unsubscribeVideo`"
  }, {
    heading: "api-comparison-1",
    content: "The following fields of the `RecordingConfig` object in the `create` method: - `autoSubscribe` - `subscribeVideoUids`  - `subscribeAudioUids`"
  }, {
    heading: "api-comparison-1",
    content: "Start or stop recording"
  }, {
    heading: "api-comparison-1",
    content: "**Individual recording:** - `startSingleRecordingByUid` - `stopSingleRecordingByUid` - `setRecorderConfigByUid`&#x2A;*Composite recording:** - `startRecording` - `stopRecording` - `setRecordingConfig`Use with `enableMix` set to `true` when calling `initialize`"
  }, {
    heading: "api-comparison-1",
    content: "- `startService` - `stopService`Use with `isMixingEnabled` in `RecordingConfig`"
  }, {
    heading: "api-comparison-1",
    content: "Watermark"
  }, {
    heading: "api-comparison-1",
    content: "- `enableAndUpdateVideoWatermarks` - `disableVideoWatermarks` - `enableAndUpdateVideoWatermarksByUid` - `disableVideoWatermarksByUid`"
  }, {
    heading: "api-comparison-1",
    content: "`updateWatermarkConfigs`"
  }, {
    heading: "callback-comparison-1",
    content: "The following table compares key callbacks between version 4.x and 3.x:"
  }, {
    heading: "callback-comparison-1",
    content: "Event"
  }, {
    heading: "callback-comparison-1",
    content: "4.x API"
  }, {
    heading: "callback-comparison-1",
    content: "Older versions"
  }, {
    heading: "callback-comparison-1",
    content: "Local user joins the channel"
  }, {
    heading: "callback-comparison-1",
    content: "`onConnected`"
  }, {
    heading: "callback-comparison-1",
    content: "`onJoinChannelSuccess`"
  }, {
    heading: "callback-comparison-1",
    content: "Local user leaves the channel"
  }, {
    heading: "callback-comparison-1",
    content: "`onDisconnected`"
  }, {
    heading: "callback-comparison-1",
    content: "`onLeaveChannel`"
  }, {
    heading: "callback-comparison-1",
    content: "Local user rejoins after reconnecting"
  }, {
    heading: "callback-comparison-1",
    content: "`onReconnected`"
  }, {
    heading: "callback-comparison-1",
    content: "`onRejoinChannelSuccess`"
  }, {
    heading: "callback-comparison-1",
    content: "Remote user leaves the channel"
  }, {
    heading: "callback-comparison-1",
    content: "`onUserLeft`"
  }, {
    heading: "callback-comparison-1",
    content: "`onUserOffline`"
  }, {
    heading: "callback-comparison-1",
    content: "First frame of remote audio is received"
  }, {
    heading: "callback-comparison-1",
    content: "`onFirstRemoteAudioDecoded`"
  }, {
    heading: "callback-comparison-1",
    content: "`onFirstRemoteAudioFrame`"
  }, {
    heading: "callback-comparison-1",
    content: "Remote user's audio state changes"
  }, {
    heading: "callback-comparison-1",
    content: "`onUserAudioStateChanged`"
  }, {
    heading: "callback-comparison-1",
    content: "`onRemoteAudioStreamStateChanged`"
  }, {
    heading: "callback-comparison-1",
    content: "Remote user's video state changes"
  }, {
    heading: "callback-comparison-1",
    content: "`onUserVideoStateChanged`"
  }, {
    heading: "callback-comparison-1",
    content: "`onRemoteVideoStreamStateChanged`"
  }, {
    heading: "callback-comparison-1",
    content: "For more information, refer to the API reference."
  }],
  headings: [{
    id: "key-improvements-in-4x",
    content: "Key improvements in 4.x"
  }, {
    id: "new-capabilities",
    content: "New capabilities"
  }, {
    id: "functionality-changes",
    content: "Functionality changes"
  }, {
    id: "deprecated-features",
    content: "Deprecated features"
  }, {
    id: "changes-in-service-behavior",
    content: "Changes in service behavior"
  }, {
    id: "api-comparison",
    content: "API comparison"
  }, {
    id: "callback-comparison",
    content: "Callback comparison"
  }, {
    id: "key-improvements-in-4x-1",
    content: "Key improvements in 4.x"
  }, {
    id: "new-capabilities-1",
    content: "New capabilities"
  }, {
    id: "functionality-changes-1",
    content: "Functionality changes"
  }, {
    id: "deprecated-features-1",
    content: "Deprecated features"
  }, {
    id: "changes-in-service-behavior-1",
    content: "Changes in service behavior"
  }, {
    id: "api-comparison-1",
    content: "API comparison"
  }, {
    id: "callback-comparison-1",
    content: "Callback comparison"
  }]
};
export let toc = [{
  depth: 2,
  url: "#key-improvements-in-4x",
  title: _jsx(_Fragment, {
    children: "Key improvements in 4.x"
  })
}, {
  depth: 3,
  url: "#new-capabilities",
  title: _jsx(_Fragment, {
    children: "New capabilities"
  })
}, {
  depth: 2,
  url: "#functionality-changes",
  title: _jsx(_Fragment, {
    children: "Functionality changes"
  })
}, {
  depth: 3,
  url: "#deprecated-features",
  title: _jsx(_Fragment, {
    children: "Deprecated features"
  })
}, {
  depth: 2,
  url: "#changes-in-service-behavior",
  title: _jsx(_Fragment, {
    children: "Changes in service behavior"
  })
}, {
  depth: 2,
  url: "#api-comparison",
  title: _jsx(_Fragment, {
    children: "API comparison"
  })
}, {
  depth: 2,
  url: "#callback-comparison",
  title: _jsx(_Fragment, {
    children: "Callback comparison"
  })
}, {
  depth: 2,
  url: "#key-improvements-in-4x-1",
  title: _jsx(_Fragment, {
    children: "Key improvements in 4.x"
  })
}, {
  depth: 3,
  url: "#new-capabilities-1",
  title: _jsx(_Fragment, {
    children: "New capabilities"
  })
}, {
  depth: 2,
  url: "#functionality-changes-1",
  title: _jsx(_Fragment, {
    children: "Functionality changes"
  })
}, {
  depth: 3,
  url: "#deprecated-features-1",
  title: _jsx(_Fragment, {
    children: "Deprecated features"
  })
}, {
  depth: 2,
  url: "#changes-in-service-behavior-1",
  title: _jsx(_Fragment, {
    children: "Changes in service behavior"
  })
}, {
  depth: 2,
  url: "#api-comparison-1",
  title: _jsx(_Fragment, {
    children: "API comparison"
  })
}, {
  depth: 2,
  url: "#callback-comparison-1",
  title: _jsx(_Fragment, {
    children: "Callback comparison"
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
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "linux-cpp",
    platforms: '["linux-cpp","linux-java"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-cpp"
      }), _jsxs(_components.p, {
        children: ["The On-Premise Recording SDK 4.x is the latest version that enables audio and video recording during real-time interactions. For a complete list of features and applicable use cases, refer to the ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording",
          children: "Product Overview"
        }), "."]
      }), _jsx(_components.p, {
        children: "This guide highlights the major changes introduced in version 4.x compared to version 3.x."
      }), _jsx(_components.h2, {
        id: "key-improvements-in-4x",
        children: "Key improvements in 4.x"
      }), _jsx(_components.p, {
        children: "The On-Premise Recording SDK 4.x is built on top of the latest Agora RTC SDK 4.x. It provides significant improvements in compatibility, performance, and codec support."
      }), _jsx(_components.h3, {
        id: "new-capabilities",
        children: "New capabilities"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Supports the latest Agora cloud agent"
        }), `
`, _jsx(_components.li, {
          children: "Improved resilience in weak network conditions and adaptive feedback"
        }), `
`, _jsx(_components.li, {
          children: "Compatibility with Video SDK 4.x and later"
        }), `
`, _jsx(_components.li, {
          children: "Support for AV1 and other peer codecs"
        }), `
`, _jsx(_components.li, {
          children: "Easier upgrades due to shared RTC engine between the RTC SDK and the recording SDK"
        }), `
`]
      }), _jsx(_components.h2, {
        id: "functionality-changes",
        children: "Functionality changes"
      }), _jsx(_components.p, {
        children: "Version 4.x focuses on recording audio and video streams in the RTC channel and generating MP4 files."
      }), _jsx(_components.h3, {
        id: "deprecated-features",
        children: "Deprecated features"
      }), _jsx(_components.p, {
        children: "The following features are not available in SDK 4.x. If needed, use the Agora Server Gateway:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Access to raw audio and video (For example, YUV or PCM data)"
        }), `
`, _jsx(_components.li, {
          children: "Built-in cloud container deployment"
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Version 4.x is designed for self-hosted deployment. It is not a cloud or aPaaS service."
          })
        })
      }), _jsx(_components.h2, {
        id: "changes-in-service-behavior",
        children: "Changes in service behavior"
      }), _jsx(_components.p, {
        children: "The following runtime behaviors from version 3.x have been removed in version 4.x:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Multi-process service management"
        }), `
`, _jsx(_components.li, {
          children: "Automatic crash recovery"
        }), `
`]
      }), _jsx(_components.p, {
        children: "You must implement service management and failover handling in your own infrastructure."
      }), _jsx(_components.h2, {
        id: "api-comparison",
        children: "API comparison"
      }), _jsx(_components.p, {
        children: "The following table compares key APIs between version 4.x and 3.x:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Functional module"
            }), _jsx(_components.th, {
              children: "4.x API"
            }), _jsx(_components.th, {
              children: "Older versions"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Create and initialize a recording instance"
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "createAgoraService"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "IAgoraService::initialize"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "createAgoraMediaComponentFactory"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "createMediaRtcRecorder"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "IAgoraMediaRtcRecorder::initialize"
              })]
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "createAgoraRecordingEngine"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Join a channel"
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "joinChannel"
              }), _jsx("br", {}), "If the String UID function is enabled, you can directly use the String UID to pass parameters when calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ", without calling other APIs."]
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "joinChannel"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "getUserInfoByUserAccount"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "getUserInfoByUid"
              })]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Implement subscription logic"
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "subscribeAllAudio"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "unsubscribeAllAudio"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "subscribeAllVideo"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "unsubscribeAllVideo"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "subscribeAudio"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "unsubscribeAudio"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "subscribeVideo"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "unsubscribeVideo"
              })]
            }), _jsxs(_components.td, {
              children: ["Use the following fields in ", _jsx(_components.code, {
                children: "RecordingConfig"
              }), " when calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ":", _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "autoSubscribe"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "subscribeVideoUids"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "subscribeAudioUids"
              })]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Start or stop recording"
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Individual recording:"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "startSingleRecordingByUid"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "stopSingleRecordingByUid"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "setRecorderConfigByUid"
              }), _jsx("br", {}), _jsx("br", {}), _jsx(_components.strong, {
                children: "Composite recording:"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "startRecording"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "stopRecording"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "setRecordingConfig"
              }), _jsx("br", {}), "Use with ", _jsx(_components.code, {
                children: "enable_mix"
              }), " set in ", _jsx(_components.code, {
                children: "initialize"
              })]
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "startService"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "stopService"
              }), _jsx("br", {}), "Use with ", _jsx(_components.code, {
                children: "isMixingEnabled"
              }), " in ", _jsx(_components.code, {
                children: "RecordingConfig"
              })]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Watermark"
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "enableAndUpdateVideoWatermarks"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "disableVideoWatermarks"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "enableAndUpdateVideoWatermarksByUid"
              }), _jsx("br", {}), "- ", _jsx(_components.code, {
                children: "disableVideoWatermarksByUid"
              })]
            }), _jsxs(_components.td, {
              children: ["Use ", _jsx(_components.code, {
                children: "updateWatermarkConfigs"
              }), " with ", _jsx(_components.code, {
                children: "wm_num"
              }), " and ", _jsx(_components.code, {
                children: "wm_configs"
              }), " in ", _jsx(_components.code, {
                children: "VideoMixingLayout"
              })]
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "callback-comparison",
        children: "Callback comparison"
      }), _jsx(_components.p, {
        children: "The following table compares key callbacks between version 4.x and 3.x:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Event"
            }), _jsx(_components.th, {
              children: "4.x API"
            }), _jsx(_components.th, {
              children: "Older versions"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Local user joins the channel"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onConnected"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Local user leaves the channel"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onDisconnected"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onLeaveChannel"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Local user rejoins after reconnecting"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onReconnected"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onRejoinChannelSuccess"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Remote user leaves the channel"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onUserLeft"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onUserOffline"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "First frame of remote audio is received"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onFirstRemoteAudioDecoded"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onFirstRemoteAudioFrame"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Remote user's audio state changes"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onUserAudioStateChanged"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onRemoteAudioStreamStateChanged"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Remote user's video state changes"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onUserVideoStateChanged"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onRemoteVideoStreamStateChanged"
              })
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["For more information, refer to the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/on-premise-recording",
          children: "API reference"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-java",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-java"
      }), _jsxs(_components.p, {
        children: ["The On-Premise Recording SDK 4.x is the latest version that enables audio and video recording during real-time interactions. For a complete list of features and applicable use cases, refer to the ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording",
          children: "Product Overview"
        }), "."]
      }), _jsx(_components.p, {
        children: "This guide highlights the major changes introduced in version 4.x compared to version 3.x."
      }), _jsx(_components.h2, {
        id: "key-improvements-in-4x-1",
        children: "Key improvements in 4.x"
      }), _jsx(_components.p, {
        children: "The On-Premise Recording SDK 4.x is built on top of the latest Agora RTC SDK 4.x. It provides significant improvements in compatibility, performance, and codec support."
      }), _jsx(_components.h3, {
        id: "new-capabilities-1",
        children: "New capabilities"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Supports the latest Agora cloud agent"
        }), `
`, _jsx(_components.li, {
          children: "Improved resilience in weak network conditions and adaptive feedback"
        }), `
`, _jsx(_components.li, {
          children: "Compatibility with Video SDK 4.x and later"
        }), `
`, _jsx(_components.li, {
          children: "Support for AV1 and other peer codecs"
        }), `
`, _jsx(_components.li, {
          children: "Easier upgrades due to shared RTC engine between the RTC SDK and the recording SDK"
        }), `
`]
      }), _jsx(_components.h2, {
        id: "functionality-changes-1",
        children: "Functionality changes"
      }), _jsx(_components.p, {
        children: "Version 4.x focuses on recording audio and video streams in the RTC channel and generating MP4 files."
      }), _jsx(_components.h3, {
        id: "deprecated-features-1",
        children: "Deprecated features"
      }), _jsx(_components.p, {
        children: "The following features are not available in SDK 4.x. If needed, use the Agora Server Gateway:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Access to raw audio and video (For example, YUV or PCM data)"
        }), `
`, _jsx(_components.li, {
          children: "Built-in cloud container deployment"
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Version 4.x is designed for self-hosted deployment. It is not a cloud or aPaaS service."
          })
        })
      }), _jsx(_components.h2, {
        id: "changes-in-service-behavior-1",
        children: "Changes in service behavior"
      }), _jsx(_components.p, {
        children: "The following runtime behaviors from version 3.x have been removed in version 4.x:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Multi-process service management"
        }), `
`, _jsx(_components.li, {
          children: "Automatic crash recovery"
        }), `
`]
      }), _jsx(_components.p, {
        children: "You must implement service management and failover handling in your own infrastructure."
      }), _jsx(_components.h2, {
        id: "api-comparison-1",
        children: "API comparison"
      }), _jsx(_components.p, {
        children: "The following table compares key APIs between version 4.x and 3.x:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Functional module"
            }), _jsx(_components.th, {
              children: "4.x"
            }), _jsx(_components.th, {
              children: "3.x"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Create and initialize a recording instance"
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "AgoraService"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "AgoraService.initialize"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "createAgoraMediaComponentFactory"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "createMediaRtcRecorder"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "AgoraMediaRtcRecorder.initialize"
              })]
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "RecordingSDK"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Join a channel"
            }), _jsxs(_components.td, {
              children: [_jsx(_components.code, {
                children: "joinChannel"
              }), _jsx("br", {}), "If the String UID function is enabled, you can directly use the String UID to pass parameters when calling ", _jsx(_components.code, {
                children: "joinChannel"
              }), ", without calling other APIs."]
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "createChannel"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "createChannelWithUserAccount"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "getUidByUserAccount"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "getUserAccountByUid"
              })]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Implement subscription logic"
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "subscribeAllAudio"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "unsubscribeAllAudio"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "subscribeAllVideo"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "unsubscribeAllVideo"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "subscribeAudio"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "unsubscribeAudio"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "subscribeVideo"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "unsubscribeVideo"
              })]
            }), _jsxs(_components.td, {
              children: ["The following fields of the ", _jsx(_components.code, {
                children: "RecordingConfig"
              }), " object in the ", _jsx(_components.code, {
                children: "create"
              }), " method:", _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "autoSubscribe"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "subscribeVideoUids"
              }), " ", _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "subscribeAudioUids"
              })]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Start or stop recording"
            }), _jsxs(_components.td, {
              children: [_jsx(_components.strong, {
                children: "Individual recording:"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "startSingleRecordingByUid"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "stopSingleRecordingByUid"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "setRecorderConfigByUid"
              }), _jsx("br", {}), _jsx("br", {}), _jsx(_components.strong, {
                children: "Composite recording:"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "startRecording"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "stopRecording"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "setRecordingConfig"
              }), _jsx("br", {}), "Use with ", _jsx(_components.code, {
                children: "enableMix"
              }), " set to ", _jsx(_components.code, {
                children: "true"
              }), " when calling ", _jsx(_components.code, {
                children: "initialize"
              })]
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "startService"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "stopService"
              }), _jsx("br", {}), "Use with ", _jsx(_components.code, {
                children: "isMixingEnabled"
              }), " in ", _jsx(_components.code, {
                children: "RecordingConfig"
              })]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Watermark"
            }), _jsxs(_components.td, {
              children: ["- ", _jsx(_components.code, {
                children: "enableAndUpdateVideoWatermarks"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "disableVideoWatermarks"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "enableAndUpdateVideoWatermarksByUid"
              }), _jsx("br", {}), " - ", _jsx(_components.code, {
                children: "disableVideoWatermarksByUid"
              })]
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "updateWatermarkConfigs"
              })
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "callback-comparison-1",
        children: "Callback comparison"
      }), _jsx(_components.p, {
        children: "The following table compares key callbacks between version 4.x and 3.x:"
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Event"
            }), _jsx(_components.th, {
              children: "4.x API"
            }), _jsx(_components.th, {
              children: "Older versions"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Local user joins the channel"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onConnected"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onJoinChannelSuccess"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Local user leaves the channel"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onDisconnected"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onLeaveChannel"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Local user rejoins after reconnecting"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onReconnected"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onRejoinChannelSuccess"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Remote user leaves the channel"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onUserLeft"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onUserOffline"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "First frame of remote audio is received"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onFirstRemoteAudioDecoded"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onFirstRemoteAudioFrame"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Remote user's audio state changes"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onUserAudioStateChanged"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onRemoteAudioStreamStateChanged"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Remote user's video state changes"
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onUserVideoStateChanged"
              })
            }), _jsx(_components.td, {
              children: _jsx(_components.code, {
                children: "onRemoteVideoStreamStateChanged"
              })
            })]
          })]
        })]
      }), _jsxs(_components.p, {
        children: ["For more information, refer to the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/on-premise-recording",
          children: "API reference"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
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
