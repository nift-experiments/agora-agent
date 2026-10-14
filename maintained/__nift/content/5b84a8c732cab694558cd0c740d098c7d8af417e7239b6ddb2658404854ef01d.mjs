import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Cross-channel media stream relay",
  description: "Forward the media stream from a source channel to multiple target channels at the same time"
};
export let _markdown = `

Some special use-cases require cross-channel media stream forwarding functionality. RTC SDK enables you to relay the media stream of a host, from a source channel, to multiple target channels simultaneously. This functionality allows you to realize the following interactions:

* The hosts publish and receive each other's audio and video streams while engaging in *cross-channel* real-time interaction.

* The audience receive all audio and video streams from hosts and watch multiple hosts interact at the same time.

Due to its real-time and interactive nature, this feature enriches live broadcasts and game-play, It is especially suitable for live scenes such as co-hosting PK and online choir. It provides the audience with a better viewing experience, while bringing more traffic and revenue to the hosts.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    <CalloutContainer type="info">
      <CalloutDescription>
        Cross-channel media stream relay is included in Agora's policy of [10,000 free minutes](/en/api-reference/faq/account/billing_free) every month. For usage beyond the free quota, please refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites]

    * Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.
    * Contact [support@agora.io](mailto\\:support@agora.io) to activate the cross-channel media stream relay feature.

    ## Implement cross-channel media stream relay [#implement-cross-channel-media-stream-relay]

    The following figure shows the workflow you implement to facilitate cross-channel media stream relay:

    <Accordions>
      <Accordion title="Cross-channel media stream relay workflow">
        ![Cross-channel media stream relay workflow](https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg)
      </Accordion>
    </Accordions>

    To implement cross-channel media stream relay in your app, take the following steps:

    1. Start cross-channel media stream relay

       After joining a channel, call \`startOrUpdateChannelMediaRelay\` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method.

       \`\`\`java
       // Configure source channel information
       ChannelMediaInfo srcChannelInfo = new ChannelMediaInfo(et_channel.getText().toString(), null, myUid);
       ChannelMediaRelayConfiguration mediaRelayConfiguration = new ChannelMediaRelayConfiguration();
       mediaRelayConfiguration.setSrcChannelInfo(srcChannelInfo);
       // Configure target channel information
       ChannelMediaInfo destChannelInfo = new ChannelMediaInfo(destChannelName, null, myUid);
       mediaRelayConfiguration.setDestChannelInfo(destChannelName, destChannelInfo);
       // Start cross-channel media stream relay
       engine.startOrUpdateChannelMediaRelay(mediaRelayConfiguration);
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           * Best practice is to set the UID of the source channel to \`0\`, allowing the SDK to assign a random UID.
           * The source channel token in \`srcChannelInfo\` should be different from the one used when joining the source channel. Generate a new token using the source channel name and \`uid = 0\`.
           * For the destination channel, set the uid to \`0\`, to allow the SDK to assign a random \`uid\`, or specify a \`uid\`, ensuring that it is different from all UIDs in the target channel.
           * Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type \`uid\`.
         </CalloutDescription>
       </CalloutContainer>

    2. Update media stream relay channels

       To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call \`startOrUpdateChannelMediaRelay\` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels.

       <CalloutContainer type="info">
         <CalloutDescription>
           The updated configuration completely **replaces** the previous configuration.
         </CalloutDescription>
       </CalloutContainer>

    3. Pause or resume media stream relay

       To pause forwarding the media stream to all target channels, call \`pauseAllChannelMediaRelay\`.

       \`\`\`java
       engine.pauseAllChannelMediaRelay();
       isPaused = true;
       pause.setText(R.string.resume);
       \`\`\`

       To resume forwarding the media stream to all target channels, call \`resumeAllChannelMediaRelay\`.

       \`\`\`java
       engine.resumeAllChannelMediaRelay();
       isPaused = false;
       pause.setText(R.string.pause);
       \`\`\`

    4. Stop cross-channel media stream relay

       To stop forwarding the media stream, call \`stopChannelMediaRelay\`. When forwarding stops, the host exits all target channels.

       \`\`\`java
       engine.stopChannelMediaRelay();
       et_channel_ex.setEnabled(true);
       pause.setEnabled(false);
       join_ex.setText(getString(R.string.join));
       mediaRelaying = false;
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           If this method fails, call \`leaveChannel\` to leave the channel and stop cross-channel media stream relay.
         </CalloutDescription>
       </CalloutContainer>

    5. Monitor cross-channel media stream status

       During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the \`onChannelMediaRelayStateChanged\` callback. Implement the relevant business logic based on the [status codes](#status-codes).

       \`\`\`java
       public void onChannelMediaRelayStateChanged(int state, int code) {
         switch (state) {
           case RELAY_STATE_CONNECTING:
             mediaRelaying = true;
             handler.post(() -> {
               et_channel_ex.setEnabled(false);
               join_ex.setEnabled(true);
               join_ex.setText(getText(R.string.stop));
               showLongToast("channel media Relay connected.");
             });
             break;
           case RELAY_STATE_FAILURE:
             mediaRelaying = false;
             handler.post(() -> {
               showLongToast(String.format("channel media Relay failed at error code: %d", code));
             });
           default:
             break;
         }
       }
       \`\`\`

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Status codes [#status-codes]

    The main media stream forwarding states and their corresponding status codes are as follows:

    | Media stream forwarding status                                                                                                                                                                                                                                                | status code                                |
    | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
    | The source channel starts transmitting data to the target channel.                                                                                                                                                                                                            | \`RELAY_STATE_RUNNING\`(2) and \`RELAY_OK\`(0) |
    | Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the [error code](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged__code). | \`RELAY_STATE_FAILURE\`(3)                   |
    | Media stream forwarding has stopped.                                                                                                                                                                                                                                          | \`RELAY_STATE_IDLE\`(0) and \`RELAY_OK\`(0)    |

    ### Sample project [#sample-project]

    Agora provides an open-source [HostAcrossChannels](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/HostAcrossChannel.java) sample project for your reference. Download the project or view the source code for a more detailed example.

    ### API reference [#api-reference]

    * [\`startOrUpdateChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay)
    * [\`stopChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay)
    * [\`pauseAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay)
    * [\`resumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay)
    * [\`onChannelMediaRelayStateChanged\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged)
    * [\`ChannelMediaRelayConfiguration\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_channelmediarelayconfiguration.html)
    * [\`ChannelMediaInfo\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_channelmediainfo.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    <CalloutContainer type="info">
      <CalloutDescription>
        Cross-channel media stream relay is included in Agora's policy of [10,000 free minutes](/en/api-reference/faq/account/billing_free) every month. For usage beyond the free quota, please refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites-1]

    * Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.
    * Contact [support@agora.io](mailto\\:support@agora.io) to activate the cross-channel media stream relay feature.

    ## Implement cross-channel media stream relay [#implement-cross-channel-media-stream-relay-1]

    The following figure shows the workflow you implement to facilitate cross-channel media stream relay:

    <Accordions>
      <Accordion title="Cross-channel media stream relay workflow">
        ![Cross-channel media stream relay workflow](https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg)
      </Accordion>
    </Accordions>

    To implement cross-channel media stream relay in your app, take the following steps:

    1. Start cross-channel media stream relay

       After joining a channel, call \`startOrUpdateChannelMediaRelay\` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method.

       \`\`\`swift
       // Configure source channel information
       let config = AgoraChannelMediaRelayConfiguration()
       config.sourceInfo = AgoraChannelMediaRelayInfo(token: nil)
       isProcessing = true
       // Configure target channel information
       let destinationInfo = AgoraChannelMediaRelayInfo(token: nil)
       config.setDestinationInfo(destinationInfo, forChannelName: destinationChannelName)
       // Start cross-channel media stream forwarding
       agoraKit.startOrUpdateChannelMediaRelay(config)
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           * Best practice is to set the UID of the source channel to \`0\`, allowing the SDK to assign a random UID.
           * The source channel token in \`srcChannelInfo\` should be different from the one used when joining the source channel. Generate a new token using the source channel name and \`uid = 0\`.
           * For the destination channel, set the uid to \`0\`, to allow the SDK to assign a random \`uid\`, or specify a \`uid\`, ensuring that it is different from all UIDs in the target channel.
           * Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type \`uid\`.
         </CalloutDescription>
       </CalloutContainer>

    2. Update media stream relay channels

       To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call \`startOrUpdateChannelMediaRelay\` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels.

       <CalloutContainer type="info">
         <CalloutDescription>
           The updated configuration completely **replaces** the previous configuration.
         </CalloutDescription>
       </CalloutContainer>

    3. Pause or resume media stream relay

       To pause forwarding the media stream to all target channels, call \`pauseAllChannelMediaRelay\`.

       \`\`\`swift
       isPauseRelaying = true
       agoraKit.pauseAllChannelMediaRelay()
       \`\`\`

       To resume forwarding the media stream to all target channels, call \`resumeAllChannelMediaRelay\`.

       \`\`\`swift
       isPauseRelaying = false
       agoraKit.resumeAllChannelMediaRelay()
       \`\`\`

    4. Stop cross-channel media stream relay

       To stop forwarding the media stream, call \`stopChannelMediaRelay\` . When forwarding stops, the host exits all target channels.

       \`\`\`swift
       isProcessing = true
       isPauseRelaying = false
       agoraKit.stopChannelMediaRelay()
       pauseRelayButton.isEnabled = false
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           If this method fails, you can call \`leaveChannel\` to leave the channel, and cross-channel media stream relay will automatically stop.
         </CalloutDescription>
       </CalloutContainer>

    5. Listen for cross-channel media stream status changes

       During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the \`onChannelMediaRelayStateChanged\` callback. Implement relevant business logic based on the [status codes](#status-codes).

       \`\`\`swift
       func rtcEngine(_ engine: AgoraRtcEngineKit,
             channelMediaRelayStateDidChange state: AgoraChannelMediaRelayState,
             error: AgoraChannelMediaRelayError) {

         LogUtils.log(message: "channelMediaRelayStateDidChange: \\(state.rawValue) error \\(error.rawValue)", level: .info)
         isProcessing = false

         switch state {
         case .running:
           isRelaying = true

         case .failure:
           showAlert(message: "Media Relay Failed: \\(error.rawValue)")
           isRelaying = false

         case .idle:
           isRelaying = false

         default:
           break
         }
       }
       \`\`\`

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Status codes [#status-codes-1]

    The main media stream forwarding states and their corresponding status codes are as follows:

    | Media stream forwarding status                                                                                                                                                                                      | status code                                                                      |
    | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------- |
    | The source channel starts transmitting data to the target channel.                                                                                                                                                  | \`AgoraChannelMediaRelayStateRunning\`(2) and \`AgoraChannelMediaRelayErrorNone\`(0) |
    | Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the [error code](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorachannelmediarelayerror). | \`AgoraChannelMediaRelayStateFailure\`(3)                                          |
    | Media stream forwarding has stopped.                                                                                                                                                                                | \`AgoraChannelMediaRelayStateIdle\`(0) and \`AgoraChannelMediaRelayErrorNone\`(0)    |

    ### Sample project [#sample-project-1]

    Agora provides an open-source [MediaChannelRelay](https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/MediaChannelRelay/MediaChannelRelay.swift) sample project for your reference. Download the project or view the source code for a more detailed example.

    ### API reference [#api-reference-1]

    * [\`startOrUpdateChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startorupdatechannelmediarelay\\(_:\\))
    * [\`stopChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stopchannelmediarelay\\(\\))
    * [\`pauseAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pauseallchannelmediarelay\\(\\))
    * [\`resumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/resumeallchannelmediarelay\\(\\))
    * [\`resumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/resumeallchannelmediarelay\\(\\))
    * [\`channelMediaRelayStateDidChange\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:channelmediarelaystatedidchange\\:error:\\))
    * [\`AgoraChannelMediaRelayConfiguration\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorachannelmediarelayconfiguration)
    * [\`AgoraChannelMediaRelayInfo\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorachannelmediarelayinfo)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    <CalloutContainer type="info">
      <CalloutDescription>
        Cross-channel media stream relay is included in Agora's policy of [10,000 free minutes](/en/api-reference/faq/account/billing_free) every month. For usage beyond the free quota, please refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites-2]

    * Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.
    * Contact [support@agora.io](mailto\\:support@agora.io) to activate the cross-channel media stream relay feature.

    ## Implement cross-channel media stream relay [#implement-cross-channel-media-stream-relay-2]

    The following figure shows the workflow you implement to facilitate cross-channel media stream relay:

    <Accordions>
      <Accordion title="Cross-channel media stream relay workflow">
        ![Cross-channel media stream relay workflow](https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg)
      </Accordion>
    </Accordions>

    To implement cross-channel media stream relay in your app, take the following steps:

    1. Start cross-channel media stream relay

       After joining a channel, call \`startOrUpdateChannelMediaRelay\` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method.

       \`\`\`swift
       // Configure source channel information
       let config = AgoraChannelMediaRelayConfiguration()
       config.sourceInfo = AgoraChannelMediaRelayInfo(token: nil)
       isProcessing = true
       // Configure target channel information
       let destinationInfo = AgoraChannelMediaRelayInfo(token: nil)
       config.setDestinationInfo(destinationInfo, forChannelName: destinationChannelName)
       // Start cross-channel media stream forwarding
       agoraKit.startOrUpdateChannelMediaRelay(config)
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           * Best practice is to set the UID of the source channel to \`0\`, allowing the SDK to assign a random UID.
           * The source channel token in \`srcChannelInfo\` should be different from the one used when joining the source channel. Generate a new token using the source channel name and \`uid = 0\`.
           * For the destination channel, set the uid to \`0\`, to allow the SDK to assign a random \`uid\`, or specify a \`uid\`, ensuring that it is different from all UIDs in the target channel.
           * Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type \`uid\`.
         </CalloutDescription>
       </CalloutContainer>

    2. Update media stream relay channels

       To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call \`startOrUpdateChannelMediaRelay\` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels.

       <CalloutContainer type="info">
         <CalloutDescription>
           The updated configuration completely **replaces** the previous configuration.
         </CalloutDescription>
       </CalloutContainer>

    3. Pause or resume media stream relay

       To pause forwarding the media stream to all target channels, call \`pauseAllChannelMediaRelay\`.

       \`\`\`swift
       isPauseRelaying = true
       agoraKit.pauseAllChannelMediaRelay()
       \`\`\`

       To resume forwarding the media stream to all target channels, call \`resumeAllChannelMediaRelay\`.

       \`\`\`swift
       isPauseRelaying = false
       agoraKit.resumeAllChannelMediaRelay()
       \`\`\`

    4. Stop cross-channel media stream relay

       To stop forwarding the media stream, call \`stopChannelMediaRelay\` . When forwarding stops, the host exits all target channels.

       \`\`\`swift
       isProcessing = true
       isPauseRelaying = false
       agoraKit.stopChannelMediaRelay()
       pauseRelayButton.isEnabled = false
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           If this method fails, you can call \`leaveChannel\` to leave the channel, and cross-channel media stream relay will automatically stop.
         </CalloutDescription>
       </CalloutContainer>

    5. Listen for cross-channel media stream status changes

       During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the \`onChannelMediaRelayStateChanged\` callback. Implement relevant business logic based on the [status codes](#status-codes).

       \`\`\`swift
       func rtcEngine(_ engine: AgoraRtcEngineKit,
             channelMediaRelayStateDidChange state: AgoraChannelMediaRelayState,
             error: AgoraChannelMediaRelayError) {

         LogUtils.log(message: "channelMediaRelayStateDidChange: \\(state.rawValue) error \\(error.rawValue)", level: .info)
         isProcessing = false

         switch state {
         case .running:
           isRelaying = true

         case .failure:
           showAlert(message: "Media Relay Failed: \\(error.rawValue)")
           isRelaying = false

         case .idle:
           isRelaying = false

         default:
           break
         }
       }
       \`\`\`

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Status codes [#status-codes-2]

    The main media stream forwarding states and their corresponding status codes are as follows:

    | Media stream forwarding status                                                                                                                                                                                      | status code                                                                      |
    | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------- |
    | The source channel starts transmitting data to the target channel.                                                                                                                                                  | \`AgoraChannelMediaRelayStateRunning\`(2) and \`AgoraChannelMediaRelayErrorNone\`(0) |
    | Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the [error code](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorachannelmediarelayerror). | \`AgoraChannelMediaRelayStateFailure\`(3)                                          |
    | Media stream forwarding has stopped.                                                                                                                                                                                | \`AgoraChannelMediaRelayStateIdle\`(0) and \`AgoraChannelMediaRelayErrorNone\`(0)    |

    ### Sample project [#sample-project-2]

    Agora provides an open-source [ChannelMediaRelay](https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/ChannelMediaRelay/ChannelMediaRelay.swift) sample project for your reference. Download the project or view the source code for a more detailed example.

    ### API reference [#api-reference-2]

    * [\`startOrUpdateChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startorupdatechannelmediarelay\\(_:\\))
    * [\`stopChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/stopchannelmediarelay\\(\\))
    * [\`pauseAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pauseallchannelmediarelay\\(\\))
    * [\`resumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/resumeallchannelmediarelay\\(\\))
    * [\`resumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/resumeallchannelmediarelay\\(\\))
    * [\`channelMediaRelayStateDidChange\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:channelmediarelaystatedidchange\\:error:\\))
    * [\`AgoraChannelMediaRelayConfiguration\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorachannelmediarelayconfiguration)
    * [\`AgoraChannelMediaRelayInfo\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorachannelmediarelayinfo)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    <CalloutContainer type="info">
      <CalloutDescription>
        Cross-channel media stream relay is included in Agora's policy of [10,000 free minutes](/en/api-reference/faq/account/billing_free) every month. For usage beyond the free quota, please refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites-3]

    * Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.
    * Contact [support@agora.io](mailto\\:support@agora.io) to activate the cross-channel media stream relay feature.

    ## Implement cross-channel media stream relay [#implement-cross-channel-media-stream-relay-3]

    To implement cross-channel media stream relay in your app, take the following steps:

    1. Configure cross-channel media stream relay

       To create a cross-channel media stream relay configuration object, and set the source and target channel information, call \`createChannelMediaRelayConfiguration\`.

       \`\`\`javascript
       const channelMediaConfig = AgoraRTC.createChannelMediaRelayConfiguration();
       // Set source channel information
       channelMediaConfig.setSrcChannelInfo({
        channelName: "srcChannel",
        uid: <USER_UID>,
        token: "yourSrcToken",
       });

       // Set target channel information.
       // It can be called multiple times, for up to 4 target channels
       channelMediaConfig.addDestChannelInfo({
        channelName: "destChannel1",
        uid: 123,
        token: "yourDestToken",
       });
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           * Set the source channel \`uid\` to a value different from the current host's \`uid\`. Best practice is to set it to \`0\` so the server assigns a random \`uid\`.
           * Cross-channel media stream relay doesn't support String usernames.
         </CalloutDescription>
       </CalloutContainer>

    2. Start cross-channel media stream relay

       To start cross-channel media stream relay, call \`startChannelMediaRelay\` after calling \`AgoraRTCClient.publish\`. The SDK forwards the stream of the host who calls this method, and multiple hosts in a channel can forward media streams. To call \`startChannelMediaRelay\` again after a successful call, first call \`stopChannelMediaRelay\`.

       \`\`\`javascript
       client.startChannelMediaRelay(channelMediaConfig).then(() => {
        console.log(\`startChannelMediaRelay success\`);
       }).catch(e => {
        console.log(\`startChannelMediaRelay failed\`, e);
       });
       \`\`\`

       \`client\` refers to the local client object you create using \`AgoraRTC.createClient\`.

    3. Listen for cross-channel media stream status changes

       During cross-channel media stream relay, the SDK reports the status of media stream relay through \`AgoraRTCClient.on("channel-media-relay-state")\` callback with state codes and error codes. Listen to the \`AgoraRTCClient.on("channel-media-relay-event")\` callback for relay events. After you call \`startChannelMediaRelay\` or \`updateChannelMediaRelay\` successfully, users in the target channels receive the \`AgoraRTCClient.on("user-published")\` callback. If a host in a target channel goes offline or leaves the channel during relay, the host in the source channel receives the \`AgoraRTCClient.on("user-left")\` callback.

    4. Update media stream relay channels

       To add or remove target channels after successfully calling \`startChannelMediaRelay\`, call \`updateChannelMediaRelay\`. You can forward a media stream to up to four target channels.

       \`\`\`javascript
       // Remove a target channel
       channelMediaConfig.removeDestChannelInfo("destChannel1");
       // Update cross-channel media stream relay settings
       client.updateChannelMediaRelay(channelMediaConfig).then(() => {
        console.log("updateChannelMediaRelay success");
       }).catch(e => {
        console.log("updateChannelMediaRelay failed", e);
       });
       \`\`\`

    5. Stop cross-channel media stream relay

       To stop cross-channel media stream relay, call \`stopChannelMediaRelay\`.

       \`\`\`javascript
       client.stopChannelMediaRelay().then(() => {
        console.log("stop media relay success");
       }).catch(e => {
        console.log("stop media relay failed", e);
       });
       \`\`\`

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-3]

    * [\`startChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#startchannelmediarelay)
    * [\`updateChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#updatechannelmediarelay)
    * [\`stopChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#stopchannelmediarelay)
    * [\`AgoraRTCClient.on("channel-media-relay-state")\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_channel_media_relay_state)
    * [\`AgoraRTCClient.on("channel-media-relay-event")\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_channel_media_relay_event)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    <CalloutContainer type="info">
      <CalloutDescription>
        Cross-channel media stream relay is included in Agora's policy of [10,000 free minutes](/en/api-reference/faq/account/billing_free) every month. For usage beyond the free quota, please refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites-4]

    * Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.
    * Contact [support@agora.io](mailto\\:support@agora.io) to activate the cross-channel media stream relay feature.

    ## Implement cross-channel media stream relay [#implement-cross-channel-media-stream-relay-4]

    The following figure shows the workflow you implement to facilitate cross-channel media stream relay:

    <Accordions>
      <Accordion title="Cross-channel media stream relay workflow">
        ![Cross-channel media stream relay workflow](https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg)
      </Accordion>
    </Accordions>

    To implement cross-channel media stream relay in your app, take the following steps:

    1. Start cross-channel media stream relay

       After joining a channel, call \`startOrUpdateChannelMediaRelay\` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method.

       \`\`\`cpp
       // Configure source channel information
       ChannelMediaInfo *m_srcInfo = new ChannelMediaInfo;
       m_srcInfo->channelName = new char[szChannelId.size() + 1];
       strcpy_s(const_cast<char *>(m_srcInfo->channelName), szChannelId.size() + 1,
       		szChannelId.data());
       // Note: The token for source channel is different from the token used when joining the source channel.
       // It needs to be regenerated using the source channel name and uid = 0
       m_srcInfo->token = APP_TOKEN;
       // It is recommended to set the uid of the source channel to 0, allowing the SDK to assign a random uid.
       m_srcInfo->uid = 0;

       // Configure destination channel information
       int nDestCount = m_vecChannelMedias.size();
       ChannelMediaInfo *lpDestInfos = new ChannelMediaInfo[nDestCount];
       for (int nIndex = 0; nIndex < nDestCount; nIndex++) {
       	lpDestInfos[nIndex].channelName = m_vecChannelMedias[nIndex].channelName;
       	lpDestInfos[nIndex].token = m_vecChannelMedias[nIndex].token;
       	// Set the uid to 0, allowing the SDK to assign a random uid, or specify your own uid
       	// Ensure that it is different from all uids in the target channels
       	lpDestInfos[nIndex].uid = m_vecChannelMedias[nIndex].uid;
       }

       ChannelMediaRelayConfiguration cmrc;
       cmrc.srcInfo = m_srcInfo;
       cmrc.destInfos = lpDestInfos;
       cmrc.destCount = nDestCount;
       int ret = 0;
       // Start or update the cross-channel media stream relay
       ret = m_rtcEngine->startOrUpdateChannelMediaRelay(cmrc);
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           * Best practice is to set the UID of the source channel to \`0\`, allowing the SDK to assign a random UID.
           * The source channel token in \`srcChannelInfo\` should be different from the one used when joining the source channel. Generate a new token using the source channel name and \`uid = 0\`.
           * For the destination channel, set the uid to \`0\`, to allow the SDK to assign a random \`uid\`, or specify a \`uid\`, ensuring that it is different from all uids in the target channel.
           * Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type \`uid\`.
         </CalloutDescription>
       </CalloutContainer>

    2. Update media stream relay channels

       To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call \`startOrUpdateChannelMediaRelay\` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels.

       <CalloutContainer type="info">
         <CalloutDescription>
           The updated configuration completely **replaces** the previous configuration.
         </CalloutDescription>
       </CalloutContainer>

    3. Pause or resume media stream relay

       To pause forwarding the media stream to all target channels, call \`pauseAllChannelMediaRelay\`.

       \`\`\`cpp
       m_rtcEngine->pauseAllChannelMediaRelay();
       \`\`\`

       To resume forwarding the media stream to all target channels, call \`resumeAllChannelMediaRelay\`.

       \`\`\`cpp
       m_rtcEngine->resumeAllChannelMediaRelay();
       \`\`\`

    4. Stop cross-channel media stream relay

       To stop forwarding the media stream, call \`stopChannelMediaRelay\` . When forwarding stops, the host exits all target channels.

       \`\`\`cpp
       m_rtcEngine->stopChannelMediaRelay();
       m_lstInfo.AddString(_T("stopChannelMediaRelay"));
       m_btnStartMediaRelay.SetWindowText(CrossChannelStartMediaRelay);
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           If this method fails, you can call \`leaveChannel\` to leave the channel, and cross-channel media stream relay will automatically stop.
         </CalloutDescription>
       </CalloutContainer>

    5. Listen for cross-channel media stream status changes

       During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the \`onChannelMediaRelayStateChanged\` callback. Implement relevant business logic based on the [status codes](#status-codes).

       \`\`\`cpp
       class CAgoraCrossChannelEventHandler : public IRtcEngineEventHandler {
           virtual void onChannelMediaRelayStateChanged(
               CHANNEL_MEDIA_RELAY_STATE state,
               CHANNEL_MEDIA_RELAY_ERROR code) override {
               if (m_hMsgHanlder)
                   ::PostMessage(m_hMsgHanlder,
                       WM_MSGID(EID_CHANNEL_MEDIA_RELAY_STATE_CHNAGENED),
                       state, code);
           }
       };
       \`\`\`

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Status codes [#status-codes-3]

    The main media stream forwarding states and their corresponding status codes are as follows:

    | Media stream forwarding status                                                                                                                                                                     | status code                                |
    | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
    | The source channel starts transmitting data to the target channel.                                                                                                                                 | \`RELAY_STATE_RUNNING\`(2) and \`RELAY_OK\`(0) |
    | Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the [error code](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/enum_channelmediarelayerror.html). | \`RELAY_STATE_FAILURE\`(3)                   |
    | Media stream forwarding has stopped.                                                                                                                                                               | \`RELAY_STATE_IDLE\`(0) and \`RELAY_OK\`(0)    |

    ### Sample project [#sample-project-3]

    Agora provides an open-source [CrossChannel](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/CrossChannel) sample project for your reference. Download the project or view the source code for a more detailed example.

    ### API reference [#api-reference-4]

    * [\`startOrUpdateChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/api_irtcengine_startorupdatechannelmediarelay.html)
    * [\`stopChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay)
    * [\`pauseAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay)
    * [\`resumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay)
    * [\`onChannelMediaRelayStateChanged\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged)
    * [\`ChannelMediaRelayConfiguration\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_channelmediarelayconfiguration.html)
    * [\`ChannelMediaInfo\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_channelmediainfo.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    <CalloutContainer type="info">
      <CalloutDescription>
        Cross-channel media stream relay is included in Agora's policy of [10,000 free minutes](/en/api-reference/faq/account/billing_free) every month. For usage beyond the free quota, please refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites-5]

    * Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.
    * Contact [support@agora.io](mailto\\:support@agora.io) to activate the cross-channel media stream relay feature.

    ## Implement cross-channel media stream relay [#implement-cross-channel-media-stream-relay-5]

    The following figure shows the workflow you implement to facilitate cross-channel media stream relay:

    <Accordions>
      <Accordion title="Cross-channel media stream relay workflow">
        ![Cross-channel media stream relay workflow](https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg)
      </Accordion>
    </Accordions>

    To implement cross-channel media stream relay in your app, take the following steps:

    1. Start cross-channel media stream relay

       After joining a channel, call \`startOrUpdateChannelMediaRelay\` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method.

       \`\`\`typescript
       const srcChannelId = "srcChannel";
       const destChannelId = "destChannel";
       const uid = 0;
       const token = "insert-your-token";

       // Start cross-channel media stream forwarding
       rtcEngine.startOrUpdateChannelMediaRelay({
         // Configure source channel information srcInfo
         srcInfo: {
           channelName: srcChannelId,
           uid: uid,
           token: token,
         },
         // Configure the target channel information destInfos
         destInfos: [
           {
             channelName: destChannelId,
             token: '', // A token to join the target channel
             uid: 0, // SDK randomly assigns a uid
           },
         ],
         // Number of target channels
         destCount: 1,
       });
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type \`uid\`.
         </CalloutDescription>
       </CalloutContainer>

    2. Update media stream relay channels

       To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call \`startOrUpdateChannelMediaRelay\` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels.

       <CalloutContainer type="info">
         <CalloutDescription>
           The updated configuration completely **replaces** the previous configuration.
         </CalloutDescription>
       </CalloutContainer>

    3. Pause or resume media stream relay

       To pause forwarding the media stream to all target channels, call \`pauseAllChannelMediaRelay\`.

       \`\`\`typescript
       rtcEngine.pauseAllChannelMediaRelay();
       \`\`\`

       To resume forwarding the media stream to all target channels, call \`resumeAllChannelMediaRelay\`.

       \`\`\`typescript
       rtcEngine.resumeAllChannelMediaRelay();
       \`\`\`

    4. Stop cross-channel media stream relay

       To stop forwarding the media stream, call \`stopChannelMediaRelay\`. When forwarding stops, the host exits all target channels.

       \`\`\`typescript
       rtcEngine.stopChannelMediaRelay();
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           If this method fails, call \`leaveChannel\` to leave the channel and stop cross-channel media stream relay.
         </CalloutDescription>
       </CalloutContainer>

    5. Monitor cross-channel media stream status

       During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the \`onChannelMediaRelayStateChanged\` callback. Implement the relevant business logic based on the [status codes](#status-codes).

       \`\`\`typescript
       // Register event callback
       rtcEngine.registerEventHandler(
         onChannelMediaRelayStateChanged: (state: ChannelMediaRelayState, code: ChannelMediaRelayError) => {
           console.log(\`Cross-channel media stream forwarding status：\${state}，Error Code：\${code}\`);
         },
       );
       \`\`\`

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Status codes [#status-codes-4]

    The main media stream forwarding states and their corresponding status codes are as follows:

    | Media stream forwarding status                                                                                                                                                                          | status code                             |
    | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------- |
    | The source channel starts transmitting data to the target channel.                                                                                                                                      | \`RelayStateRunning\`(2) and \`RelayOk\`(0) |
    | Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the [error code](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/enum_channelmediarelayerror.html). | \`RelayStateFailure\`(3)                  |
    | Media stream forwarding has stopped.                                                                                                                                                                    | \`RelayStateIdle\`(0) and \`RelayOk\`(0)    |

    ### Sample project [#sample-project-4]

    Agora provides an open-source [ChannelMediaRelay](https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/advanced/ChannelMediaRelay/ChannelMediaRelay.tsx) sample project for your reference. Download the project or view the source code for a more detailed example.

    ### API reference [#api-reference-5]

    * [\`startOrUpdateChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay)
    * [\`stopChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay)
    * [\`pauseAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay)
    * [\`resumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay)
    * [\`onChannelMediaRelayStateChanged\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged)
    * [\`ChannelMediaRelayConfiguration\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_channelmediarelayconfiguration.html)
    * [\`ChannelMediaInfo\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_channelmediainfo.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    <CalloutContainer type="info">
      <CalloutDescription>
        Cross-channel media stream relay is included in Agora's policy of [10,000 free minutes](/en/api-reference/faq/account/billing_free) every month. For usage beyond the free quota, please refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites-6]

    * Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.
    * Contact [support@agora.io](mailto\\:support@agora.io) to activate the cross-channel media stream relay feature.

    ## Implement cross-channel media stream relay [#implement-cross-channel-media-stream-relay-6]

    The following figure shows the workflow you implement to facilitate cross-channel media stream relay:

    <Accordions>
      <Accordion title="Cross-channel media stream relay workflow">
        ![Cross-channel media stream relay workflow](https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg)
      </Accordion>
    </Accordions>

    To implement cross-channel media stream relay in your app, take the following steps:

    1. Start cross-channel media stream relay

       After joining a channel, call \`startOrUpdateChannelMediaRelay\` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method.

       \`\`\`dart
       // Configures the source channel information for media relay.
       final srcChannelInfo = ChannelMediaInfo(
        channelName: sourceChannelName,
        token: srcToken, // Token generated with UID 0.
        uid: 0,
       );

       // Configures the destination channel information for media relay.
       final destChannelInfo = ChannelMediaInfo(
        channelName: destChannelName,
        token: destToken,
        uid: 0,
       );

       // Creates the media relay configuration with source and destination channels.
       final mediaRelayConfiguration = ChannelMediaRelayConfiguration(
        srcChannelInfo: srcChannelInfo,
        destInfos: {destChannelName: destChannelInfo},
       );

       // Starts relaying media streams from the source channel to the destination channel.
       await engine.startOrUpdateChannelMediaRelay(mediaRelayConfiguration);
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           * Best practice is to set the UID of the source channel to \`0\`, allowing the SDK to assign a random UID.
           * The source channel token in \`srcChannelInfo\` should be different from the one used when joining the source channel. Generate a new token using the source channel name and \`uid = 0\`.
           * For the destination channel, set the uid to \`0\`, to allow the SDK to assign a random \`uid\`, or specify a \`uid\`, ensuring that it is different from all UIDs in the target channel.
           * Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type \`uid\`.
         </CalloutDescription>
       </CalloutContainer>

    2. Update media stream relay channels

       To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call \`startOrUpdateChannelMediaRelay\` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels.

       <CalloutContainer type="info">
         <CalloutDescription>
           The updated configuration completely **replaces** the previous configuration.
         </CalloutDescription>
       </CalloutContainer>

    3. Pause or resume media stream relay

       To pause forwarding the media stream to all target channels, call \`pauseAllChannelMediaRelay\`.

       \`\`\`dart
       await engine.pauseAllChannelMediaRelay();
       isPaused = true;
       \`\`\`

       To resume forwarding the media stream to all target channels, call \`resumeAllChannelMediaRelay\`.

       \`\`\`dart
       await engine.resumeAllChannelMediaRelay();
       isPaused = false;
       \`\`\`

    4. Stop cross-channel media stream relay

       To stop forwarding the media stream, call \`stopChannelMediaRelay\`. When forwarding stops, the host exits all target channels.

       \`\`\`dart
       await engine.stopChannelMediaRelay();
       mediaRelaying = false;
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           If this method fails, call \`leaveChannel\` to leave the channel and stop cross-channel media stream relay.
         </CalloutDescription>
       </CalloutContainer>

    5. Monitor cross-channel media stream status

       During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the \`onChannelMediaRelayStateChanged\` callback. Implement the relevant business logic based on the [status codes](#status-codes).

       \`\`\`dart
       engine.registerEventHandler(
        RtcEngineEventHandler(
         onChannelMediaRelayStateChanged: (state, code) {
          switch (state) {
           case ChannelMediaRelayState.relaying:
            mediaRelaying = true;
            print("Channel media relay connected.");
            break;
           case ChannelMediaRelayState.failure:
            mediaRelaying = false;
            print("Channel media relay failed with error code: $code");
            break;
           default:
            break;
          }
         },
        ),
       );
       \`\`\`

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Status codes [#status-codes-5]

    The following table shows the main forwarding states and their corresponding codes:

    | Forwarding status                                                                                                                                                             | State and error code                                                            |
    | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
    | The source channel starts transmitting data to the target channel.                                                                                                            | \`ChannelMediaRelayState.relayRunning (2)\`, \`ChannelMediaRelayError.relayOk (0)\` |
    | Forwarding encounters an exception. Troubleshoot the issue based on the [error code](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/enum_channelmediarelayerror.html). | \`ChannelMediaRelayState.relayFailure (3)\`                                       |
    | Forwarding has stopped.                                                                                                                                                       | \`ChannelMediaRelayState.relayIdle (0)\`, \`ChannelMediaRelayError.relayOk (0)\`    |

    ### API reference [#api-reference-6]

    * [\`startOrUpdateChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay)
    * [\`stopChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay)
    * [\`pauseAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay)
    * [\`resumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay)
    * [\`onChannelMediaRelayStateChanged\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged)
    * [\`ChannelMediaRelayConfiguration\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_channelmediarelayconfiguration.html)
    * [\`ChannelMediaInfo\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_channelmediainfo.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    <CalloutContainer type="info">
      <CalloutDescription>
        Cross-channel media stream relay is included in Agora's policy of [10,000 free minutes](/en/api-reference/faq/account/billing_free) every month. For usage beyond the free quota, please refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites-7]

    * Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.
    * Contact [support@agora.io](mailto\\:support@agora.io) to activate the cross-channel media stream relay feature.

    ## Implement cross-channel media stream relay [#implement-cross-channel-media-stream-relay-7]

    The following figure shows the workflow you implement to facilitate cross-channel media stream relay:

    <Accordions>
      <Accordion title="Cross-channel media stream relay workflow">
        ![Cross-channel media stream relay workflow](https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg)
      </Accordion>
    </Accordions>

    To implement cross-channel media stream relay in your app, take the following steps:

    1. Start cross-channel media stream relay

       After joining a channel, call \`startOrUpdateChannelMediaRelay\` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method.

       \`\`\`typescript
       const srcChannelId = "srcChannel";
       const destChannelId = "destChannel";
       const uid = 0;
       const token = "insert-your-token";

       // Start cross-channel media stream forwarding
       rtcEngine.startOrUpdateChannelMediaRelay({
         // Configure source channel information srcInfo
         srcInfo: {
           channelName: srcChannelId,
           uid: uid,
           token: token,
         },
         // Configure the target channel information destInfos
         destInfos: [
           {
             channelName: destChannelId,
             token: '', // A token to join the target channel
             uid: 0, // SDK randomly assigns a uid
           },
         ],
         // Number of target channels
         destCount: 1,
       });
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type \`uid\`.
         </CalloutDescription>
       </CalloutContainer>

    2. Update media stream relay channels

       To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call \`startOrUpdateChannelMediaRelay\` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels.

       <CalloutContainer type="info">
         <CalloutDescription>
           The updated configuration completely **replaces** the previous configuration.
         </CalloutDescription>
       </CalloutContainer>

    3. Pause or resume media stream relay

       To pause forwarding the media stream to all target channels, call \`pauseAllChannelMediaRelay\`.

       \`\`\`typescript
       rtcEngine.pauseAllChannelMediaRelay();
       \`\`\`

       To resume forwarding the media stream to all target channels, call \`resumeAllChannelMediaRelay\`.

       \`\`\`typescript
       rtcEngine.resumeAllChannelMediaRelay();
       \`\`\`

    4. Stop cross-channel media stream relay

       To stop forwarding the media stream, call \`stopChannelMediaRelay\`. When forwarding stops, the host exits all target channels.

       \`\`\`typescript
       rtcEngine.stopChannelMediaRelay();
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           If this method fails, call \`leaveChannel\` to leave the channel and stop cross-channel media stream relay.
         </CalloutDescription>
       </CalloutContainer>

    5. Monitor cross-channel media stream status

       During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the \`onChannelMediaRelayStateChanged\` callback. Implement the relevant business logic based on the [status codes](#status-codes).

       \`\`\`typescript
       // Register event callback
       rtcEngine.registerEventHandler(
         onChannelMediaRelayStateChanged: (state: ChannelMediaRelayState, code: ChannelMediaRelayError) => {
           console.log(\`Cross-channel media stream forwarding status：\${state}，Error Code：\${code}\`);
         },
       );
       \`\`\`

    ## Reference [#reference-7]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Status codes [#status-codes-6]

    The main media stream forwarding states and their corresponding status codes are as follows:

    | Media stream forwarding status                                                                                                                                                                              | status code                             |
    | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
    | The source channel starts transmitting data to the target channel.                                                                                                                                          | \`RelayStateRunning\`(2) and \`RelayOk\`(0) |
    | Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the [error code](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/enum_channelmediarelayerror.html). | \`RelayStateFailure\`(3)                  |
    | Media stream forwarding has stopped.                                                                                                                                                                        | \`RelayStateIdle\`(0) and \`RelayOk\`(0)    |

    ### Sample project [#sample-project-5]

    Agora provides an open-source [ChannelMediaRelay](https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/ChannelMediaRelay/ChannelMediaRelay.tsx) sample project for your reference. Download the project or view the source code for a more detailed example.

    ### API reference [#api-reference-7]

    * [\`startOrUpdateChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay)
    * [\`stopChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay)
    * [\`pauseAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay)
    * [\`resumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay)
    * [\`onChannelMediaRelayStateChanged\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged)
    * [\`ChannelMediaRelayConfiguration\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_channelmediarelayconfiguration.html)
    * [\`ChannelMediaInfo\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_channelmediainfo.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    <CalloutContainer type="info">
      <CalloutDescription>
        Cross-channel media stream relay is included in Agora's policy of [10,000 free minutes](/en/api-reference/faq/account/billing_free) every month. For usage beyond the free quota, please refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites-8]

    * Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.
    * Contact [support@agora.io](mailto\\:support@agora.io) to activate the cross-channel media stream relay feature.

    ## Implement cross-channel media stream relay [#implement-cross-channel-media-stream-relay-8]

    The following figure shows the workflow you implement to facilitate cross-channel media stream relay:

    <Accordions>
      <Accordion title="Cross-channel media stream relay workflow">
        ![Cross-channel media stream relay workflow](https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg)
      </Accordion>
    </Accordions>

    To implement cross-channel media stream relay in your game, take the following steps:

    1. Start cross-channel media stream relay

       After joining a channel, call \`StartOrUpdateChannelMediaRelay\` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method.

       \`\`\`csharp
       private void OnStartButtonClick()
       {
         ChannelMediaRelayConfiguration config = new ChannelMediaRelayConfiguration();

         // Configure source channel
         config.srcInfo = new ChannelMediaInfo
         {
           channelName = this._appIdInput.channelName,
           uid = 0, // Let the SDK assign a random UID
           token = this._appIdInput.token // Regenerate token for source channel with UID 0
         };

         // Configure target channel (up to 6 supported)
         config.destInfos = new ChannelMediaInfo[1];
         config.destInfos[0] = new ChannelMediaInfo
         {
           channelName = this._appIdInput.channelName + "_2",
           uid = 0, // Random UID or specify a unique one
           token = this._appIdInput.token
         };
         config.destCount = 1;

         // Start media stream forwarding
         var nRet = RtcEngine.StartOrUpdateChannelMediaRelay(config);
         this.Log.UpdateLog(\`StartOrUpdateChannelMediaRelay nRet: \${nRet}, New Channel: \${this._appIdInput.channelName}_2\`);
       }
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type \`uid\`.
         </CalloutDescription>
       </CalloutContainer>

    2. Update media stream relay channels

       To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call \`StartOrUpdateChannelMediaRelay\` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels.

       <CalloutContainer type="info">
         <CalloutDescription>
           The updated configuration completely **replaces** the previous configuration.
         </CalloutDescription>
       </CalloutContainer>

    3. Pause or resume media stream relay

       To pause forwarding the media stream to all target channels, call \`PauseAllChannelMediaRelay\`.

       \`\`\`csharp
       private void onPauseAllButtonClick()
       {
         var nRet = RtcEngine.PauseAllChannelMediaRelay();
         this.Log.UpdateLog(\`onPauseAllButtonClick nRet: \${nRet}\`);
       }
       \`\`\`

       To resume forwarding the media stream to all target channels, call \`ResumeAllChannelMediaRelay\`:

       \`\`\`csharp
       private void OnResumeAllButtonClick()
       {
         var nRet = RtcEngine.ResumeAllChannelMediaRelay();
         this.Log.UpdateLog(\`OnResumeAllButtonClick nRet: \${nRet}\`);
       }
       \`\`\`

    4. Stop cross-channel media stream relay

       To stop forwarding the media stream, call \`StopChannelMediaRelay\`. When forwarding stops, the host exits all target channels.

       \`\`\`csharp
       private void OnStopButtonClick()
       {
         var nRet = RtcEngine.StopChannelMediaRelay();
         this.Log.UpdateLog(\`OnStopButtonClick nRet: \${nRet}\`);
       }
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           If this method fails, call \`LeaveChannel\` to leave the channel and stop cross-channel media stream relay.
         </CalloutDescription>
       </CalloutContainer>

    5. Monitor cross-channel media stream status

       During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the \`OnChannelMediaRelayStateChanged\` callback. Implement the relevant business logic based on the [status codes](#status-codes).

       \`\`\`csharp
       public override void OnChannelMediaRelayStateChanged(int state, int code)
       {
         _channelMediaRelay.Log.UpdateLog(\`OnChannelMediaRelayStateChanged state: \${state}, code: \${code}\`);
       }
       \`\`\`

    ## Reference [#reference-8]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Status codes [#status-codes-7]

    To understand and respond to changes in the media relay state, refer to the [\`CHANNEL_MEDIA_RELAY_STATE\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/enum_channelmediarelaystate.html) and [\`CHANNEL_MEDIA_RELAY_ERROR\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/enum_channelmediarelayerror.html) enums in the API reference.

    ### Sample project [#sample-project-6]

    Agora provides an open-source [ChannelMediaRelay](https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/blob/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/ChannelMediaRelay/ChannelMediaRelay.cs) sample project for your reference. Download the project or view the source code for a more detailed example.

    ### API reference [#api-reference-8]

    * [\`StartOrUpdateChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay)
    * [\`StopChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay)
    * [\`PauseAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay)
    * [\`ResumeAllChannelMediaRelay\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay)
    * [\`OnChannelMediaRelayStateChanged\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged)
    * [\`ChannelMediaRelayConfiguration\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_channelmediarelayconfiguration.html)
    * [\`ChannelMediaInfo\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_channelmediainfo.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Some special use-cases require cross-channel media stream forwarding functionality. RTC SDK enables you to relay the media stream of a host, from a source channel, to multiple target channels simultaneously. This functionality allows you to realize the following interactions:"
  }, {
    heading: undefined,
    content: "The hosts publish and receive each other's audio and video streams while engaging in *cross-channel* real-time interaction."
  }, {
    heading: undefined,
    content: "The audience receive all audio and video streams from hosts and watch multiple hosts interact at the same time."
  }, {
    heading: undefined,
    content: "Due to its real-time and interactive nature, this feature enriches live broadcasts and game-play, It is especially suitable for live scenes such as co-hosting PK and online choir. It provides the audience with a better viewing experience, while bringing more traffic and revenue to the hosts."
  }, {
    heading: undefined,
    content: "Cross-channel media stream relay is included in Agora's policy of 10,000 free minutes every month. For usage beyond the free quota, please refer to Pricing."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites",
    content: "Contact support\\@agora.io to activate the cross-channel media stream relay feature."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "To implement cross-channel media stream relay in your app, take the following steps:"
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "Start cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "After joining a channel, call `startOrUpdateChannelMediaRelay` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "Best practice is to set the UID of the source channel to `0`, allowing the SDK to assign a random UID."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "The source channel token in `srcChannelInfo` should be different from the one used when joining the source channel. Generate a new token using the source channel name and `uid = 0`."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "For the destination channel, set the uid to `0`, to allow the SDK to assign a random `uid`, or specify a `uid`, ensuring that it is different from all UIDs in the target channel."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type `uid`."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "Update media stream relay channels"
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call `startOrUpdateChannelMediaRelay` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "The updated configuration completely **replaces** the previous configuration."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "Pause or resume media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "To pause forwarding the media stream to all target channels, call `pauseAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "To resume forwarding the media stream to all target channels, call `resumeAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "Stop cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "To stop forwarding the media stream, call `stopChannelMediaRelay`. When forwarding stops, the host exits all target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "If this method fails, call `leaveChannel` to leave the channel and stop cross-channel media stream relay."
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "Monitor cross-channel media stream status"
  }, {
    heading: "implement-cross-channel-media-stream-relay",
    content: "During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the `onChannelMediaRelayStateChanged` callback. Implement the relevant business logic based on the status codes."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "status-codes",
    content: "The main media stream forwarding states and their corresponding status codes are as follows:"
  }, {
    heading: "status-codes",
    content: "Media stream forwarding status"
  }, {
    heading: "status-codes",
    content: "status code"
  }, {
    heading: "status-codes",
    content: "The source channel starts transmitting data to the target channel."
  }, {
    heading: "status-codes",
    content: "`RELAY_STATE_RUNNING`(2) and `RELAY_OK`(0)"
  }, {
    heading: "status-codes",
    content: "Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the error code."
  }, {
    heading: "status-codes",
    content: "`RELAY_STATE_FAILURE`(3)"
  }, {
    heading: "status-codes",
    content: "Media stream forwarding has stopped."
  }, {
    heading: "status-codes",
    content: "`RELAY_STATE_IDLE`(0) and `RELAY_OK`(0)"
  }, {
    heading: "sample-project",
    content: "Agora provides an open-source HostAcrossChannels sample project for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "api-reference",
    content: "`startOrUpdateChannelMediaRelay`"
  }, {
    heading: "api-reference",
    content: "`stopChannelMediaRelay`"
  }, {
    heading: "api-reference",
    content: "`pauseAllChannelMediaRelay`"
  }, {
    heading: "api-reference",
    content: "`resumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference",
    content: "`onChannelMediaRelayStateChanged`"
  }, {
    heading: "api-reference",
    content: "`ChannelMediaRelayConfiguration`"
  }, {
    heading: "api-reference",
    content: "`ChannelMediaInfo`"
  }, {
    heading: "api-reference",
    content: "Cross-channel media stream relay is included in Agora's policy of 10,000 free minutes every month. For usage beyond the free quota, please refer to Pricing."
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-1",
    content: "Contact support\\@agora.io to activate the cross-channel media stream relay feature."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "To implement cross-channel media stream relay in your app, take the following steps:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "Start cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "After joining a channel, call `startOrUpdateChannelMediaRelay` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "Best practice is to set the UID of the source channel to `0`, allowing the SDK to assign a random UID."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "The source channel token in `srcChannelInfo` should be different from the one used when joining the source channel. Generate a new token using the source channel name and `uid = 0`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "For the destination channel, set the uid to `0`, to allow the SDK to assign a random `uid`, or specify a `uid`, ensuring that it is different from all UIDs in the target channel."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type `uid`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "Update media stream relay channels"
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call `startOrUpdateChannelMediaRelay` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "The updated configuration completely **replaces** the previous configuration."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "Pause or resume media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "To pause forwarding the media stream to all target channels, call `pauseAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "To resume forwarding the media stream to all target channels, call `resumeAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "Stop cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "To stop forwarding the media stream, call `stopChannelMediaRelay` . When forwarding stops, the host exits all target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "If this method fails, you can call `leaveChannel` to leave the channel, and cross-channel media stream relay will automatically stop."
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "Listen for cross-channel media stream status changes"
  }, {
    heading: "implement-cross-channel-media-stream-relay-1",
    content: "During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the `onChannelMediaRelayStateChanged` callback. Implement relevant business logic based on the status codes."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "status-codes-1",
    content: "The main media stream forwarding states and their corresponding status codes are as follows:"
  }, {
    heading: "status-codes-1",
    content: "Media stream forwarding status"
  }, {
    heading: "status-codes-1",
    content: "status code"
  }, {
    heading: "status-codes-1",
    content: "The source channel starts transmitting data to the target channel."
  }, {
    heading: "status-codes-1",
    content: "`AgoraChannelMediaRelayStateRunning`(2) and `AgoraChannelMediaRelayErrorNone`(0)"
  }, {
    heading: "status-codes-1",
    content: "Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the error code."
  }, {
    heading: "status-codes-1",
    content: "`AgoraChannelMediaRelayStateFailure`(3)"
  }, {
    heading: "status-codes-1",
    content: "Media stream forwarding has stopped."
  }, {
    heading: "status-codes-1",
    content: "`AgoraChannelMediaRelayStateIdle`(0) and `AgoraChannelMediaRelayErrorNone`(0)"
  }, {
    heading: "sample-project-1",
    content: "Agora provides an open-source MediaChannelRelay sample project for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "api-reference-1",
    content: "`startOrUpdateChannelMediaRelay`"
  }, {
    heading: "api-reference-1",
    content: "`stopChannelMediaRelay`"
  }, {
    heading: "api-reference-1",
    content: "`pauseAllChannelMediaRelay`"
  }, {
    heading: "api-reference-1",
    content: "`resumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference-1",
    content: "`resumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference-1",
    content: "`channelMediaRelayStateDidChange`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraChannelMediaRelayConfiguration`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraChannelMediaRelayInfo`"
  }, {
    heading: "api-reference-1",
    content: "Cross-channel media stream relay is included in Agora's policy of 10,000 free minutes every month. For usage beyond the free quota, please refer to Pricing."
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-2",
    content: "Contact support\\@agora.io to activate the cross-channel media stream relay feature."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "To implement cross-channel media stream relay in your app, take the following steps:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "Start cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "After joining a channel, call `startOrUpdateChannelMediaRelay` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "Best practice is to set the UID of the source channel to `0`, allowing the SDK to assign a random UID."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "The source channel token in `srcChannelInfo` should be different from the one used when joining the source channel. Generate a new token using the source channel name and `uid = 0`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "For the destination channel, set the uid to `0`, to allow the SDK to assign a random `uid`, or specify a `uid`, ensuring that it is different from all UIDs in the target channel."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type `uid`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "Update media stream relay channels"
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call `startOrUpdateChannelMediaRelay` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "The updated configuration completely **replaces** the previous configuration."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "Pause or resume media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "To pause forwarding the media stream to all target channels, call `pauseAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "To resume forwarding the media stream to all target channels, call `resumeAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "Stop cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "To stop forwarding the media stream, call `stopChannelMediaRelay` . When forwarding stops, the host exits all target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "If this method fails, you can call `leaveChannel` to leave the channel, and cross-channel media stream relay will automatically stop."
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "Listen for cross-channel media stream status changes"
  }, {
    heading: "implement-cross-channel-media-stream-relay-2",
    content: "During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the `onChannelMediaRelayStateChanged` callback. Implement relevant business logic based on the status codes."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "status-codes-2",
    content: "The main media stream forwarding states and their corresponding status codes are as follows:"
  }, {
    heading: "status-codes-2",
    content: "Media stream forwarding status"
  }, {
    heading: "status-codes-2",
    content: "status code"
  }, {
    heading: "status-codes-2",
    content: "The source channel starts transmitting data to the target channel."
  }, {
    heading: "status-codes-2",
    content: "`AgoraChannelMediaRelayStateRunning`(2) and `AgoraChannelMediaRelayErrorNone`(0)"
  }, {
    heading: "status-codes-2",
    content: "Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the error code."
  }, {
    heading: "status-codes-2",
    content: "`AgoraChannelMediaRelayStateFailure`(3)"
  }, {
    heading: "status-codes-2",
    content: "Media stream forwarding has stopped."
  }, {
    heading: "status-codes-2",
    content: "`AgoraChannelMediaRelayStateIdle`(0) and `AgoraChannelMediaRelayErrorNone`(0)"
  }, {
    heading: "sample-project-2",
    content: "Agora provides an open-source ChannelMediaRelay sample project for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "api-reference-2",
    content: "`startOrUpdateChannelMediaRelay`"
  }, {
    heading: "api-reference-2",
    content: "`stopChannelMediaRelay`"
  }, {
    heading: "api-reference-2",
    content: "`pauseAllChannelMediaRelay`"
  }, {
    heading: "api-reference-2",
    content: "`resumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference-2",
    content: "`resumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference-2",
    content: "`channelMediaRelayStateDidChange`"
  }, {
    heading: "api-reference-2",
    content: "`AgoraChannelMediaRelayConfiguration`"
  }, {
    heading: "api-reference-2",
    content: "`AgoraChannelMediaRelayInfo`"
  }, {
    heading: "api-reference-2",
    content: "Cross-channel media stream relay is included in Agora's policy of 10,000 free minutes every month. For usage beyond the free quota, please refer to Pricing."
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-3",
    content: "Contact support\\@agora.io to activate the cross-channel media stream relay feature."
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "To implement cross-channel media stream relay in your app, take the following steps:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "Configure cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "To create a cross-channel media stream relay configuration object, and set the source and target channel information, call `createChannelMediaRelayConfiguration`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "Set the source channel `uid` to a value different from the current host's `uid`. Best practice is to set it to `0` so the server assigns a random `uid`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "Cross-channel media stream relay doesn't support String usernames."
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "Start cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "To start cross-channel media stream relay, call `startChannelMediaRelay` after calling `AgoraRTCClient.publish`. The SDK forwards the stream of the host who calls this method, and multiple hosts in a channel can forward media streams. To call `startChannelMediaRelay` again after a successful call, first call `stopChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "`client` refers to the local client object you create using `AgoraRTC.createClient`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "Listen for cross-channel media stream status changes"
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: 'During cross-channel media stream relay, the SDK reports the status of media stream relay through `AgoraRTCClient.on("channel-media-relay-state")` callback with state codes and error codes. Listen to the `AgoraRTCClient.on("channel-media-relay-event")` callback for relay events. After you call `startChannelMediaRelay` or `updateChannelMediaRelay` successfully, users in the target channels receive the `AgoraRTCClient.on("user-published")` callback. If a host in a target channel goes offline or leaves the channel during relay, the host in the source channel receives the `AgoraRTCClient.on("user-left")` callback.'
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "Update media stream relay channels"
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "To add or remove target channels after successfully calling `startChannelMediaRelay`, call `updateChannelMediaRelay`. You can forward a media stream to up to four target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "Stop cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-3",
    content: "To stop cross-channel media stream relay, call `stopChannelMediaRelay`."
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-3",
    content: "`startChannelMediaRelay`"
  }, {
    heading: "api-reference-3",
    content: "`updateChannelMediaRelay`"
  }, {
    heading: "api-reference-3",
    content: "`stopChannelMediaRelay`"
  }, {
    heading: "api-reference-3",
    content: '`AgoraRTCClient.on("channel-media-relay-state")`'
  }, {
    heading: "api-reference-3",
    content: '`AgoraRTCClient.on("channel-media-relay-event")`'
  }, {
    heading: "api-reference-3",
    content: "Cross-channel media stream relay is included in Agora's policy of 10,000 free minutes every month. For usage beyond the free quota, please refer to Pricing."
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-4",
    content: "Contact support\\@agora.io to activate the cross-channel media stream relay feature."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "To implement cross-channel media stream relay in your app, take the following steps:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "Start cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "After joining a channel, call `startOrUpdateChannelMediaRelay` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "Best practice is to set the UID of the source channel to `0`, allowing the SDK to assign a random UID."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "The source channel token in `srcChannelInfo` should be different from the one used when joining the source channel. Generate a new token using the source channel name and `uid = 0`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "For the destination channel, set the uid to `0`, to allow the SDK to assign a random `uid`, or specify a `uid`, ensuring that it is different from all uids in the target channel."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type `uid`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "Update media stream relay channels"
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call `startOrUpdateChannelMediaRelay` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "The updated configuration completely **replaces** the previous configuration."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "Pause or resume media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "To pause forwarding the media stream to all target channels, call `pauseAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "To resume forwarding the media stream to all target channels, call `resumeAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "Stop cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "To stop forwarding the media stream, call `stopChannelMediaRelay` . When forwarding stops, the host exits all target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "If this method fails, you can call `leaveChannel` to leave the channel, and cross-channel media stream relay will automatically stop."
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "Listen for cross-channel media stream status changes"
  }, {
    heading: "implement-cross-channel-media-stream-relay-4",
    content: "During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the `onChannelMediaRelayStateChanged` callback. Implement relevant business logic based on the status codes."
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "status-codes-3",
    content: "The main media stream forwarding states and their corresponding status codes are as follows:"
  }, {
    heading: "status-codes-3",
    content: "Media stream forwarding status"
  }, {
    heading: "status-codes-3",
    content: "status code"
  }, {
    heading: "status-codes-3",
    content: "The source channel starts transmitting data to the target channel."
  }, {
    heading: "status-codes-3",
    content: "`RELAY_STATE_RUNNING`(2) and `RELAY_OK`(0)"
  }, {
    heading: "status-codes-3",
    content: "Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the error code."
  }, {
    heading: "status-codes-3",
    content: "`RELAY_STATE_FAILURE`(3)"
  }, {
    heading: "status-codes-3",
    content: "Media stream forwarding has stopped."
  }, {
    heading: "status-codes-3",
    content: "`RELAY_STATE_IDLE`(0) and `RELAY_OK`(0)"
  }, {
    heading: "sample-project-3",
    content: "Agora provides an open-source CrossChannel sample project for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "api-reference-4",
    content: "`startOrUpdateChannelMediaRelay`"
  }, {
    heading: "api-reference-4",
    content: "`stopChannelMediaRelay`"
  }, {
    heading: "api-reference-4",
    content: "`pauseAllChannelMediaRelay`"
  }, {
    heading: "api-reference-4",
    content: "`resumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference-4",
    content: "`onChannelMediaRelayStateChanged`"
  }, {
    heading: "api-reference-4",
    content: "`ChannelMediaRelayConfiguration`"
  }, {
    heading: "api-reference-4",
    content: "`ChannelMediaInfo`"
  }, {
    heading: "api-reference-4",
    content: "Cross-channel media stream relay is included in Agora's policy of 10,000 free minutes every month. For usage beyond the free quota, please refer to Pricing."
  }, {
    heading: "prerequisites-5",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-5",
    content: "Contact support\\@agora.io to activate the cross-channel media stream relay feature."
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "To implement cross-channel media stream relay in your app, take the following steps:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "Start cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "After joining a channel, call `startOrUpdateChannelMediaRelay` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type `uid`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "Update media stream relay channels"
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call `startOrUpdateChannelMediaRelay` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "The updated configuration completely **replaces** the previous configuration."
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "Pause or resume media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "To pause forwarding the media stream to all target channels, call `pauseAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "To resume forwarding the media stream to all target channels, call `resumeAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "Stop cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "To stop forwarding the media stream, call `stopChannelMediaRelay`. When forwarding stops, the host exits all target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "If this method fails, call `leaveChannel` to leave the channel and stop cross-channel media stream relay."
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "Monitor cross-channel media stream status"
  }, {
    heading: "implement-cross-channel-media-stream-relay-5",
    content: "During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the `onChannelMediaRelayStateChanged` callback. Implement the relevant business logic based on the status codes."
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "status-codes-4",
    content: "The main media stream forwarding states and their corresponding status codes are as follows:"
  }, {
    heading: "status-codes-4",
    content: "Media stream forwarding status"
  }, {
    heading: "status-codes-4",
    content: "status code"
  }, {
    heading: "status-codes-4",
    content: "The source channel starts transmitting data to the target channel."
  }, {
    heading: "status-codes-4",
    content: "`RelayStateRunning`(2) and `RelayOk`(0)"
  }, {
    heading: "status-codes-4",
    content: "Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the error code."
  }, {
    heading: "status-codes-4",
    content: "`RelayStateFailure`(3)"
  }, {
    heading: "status-codes-4",
    content: "Media stream forwarding has stopped."
  }, {
    heading: "status-codes-4",
    content: "`RelayStateIdle`(0) and `RelayOk`(0)"
  }, {
    heading: "sample-project-4",
    content: "Agora provides an open-source ChannelMediaRelay sample project for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "api-reference-5",
    content: "`startOrUpdateChannelMediaRelay`"
  }, {
    heading: "api-reference-5",
    content: "`stopChannelMediaRelay`"
  }, {
    heading: "api-reference-5",
    content: "`pauseAllChannelMediaRelay`"
  }, {
    heading: "api-reference-5",
    content: "`resumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference-5",
    content: "`onChannelMediaRelayStateChanged`"
  }, {
    heading: "api-reference-5",
    content: "`ChannelMediaRelayConfiguration`"
  }, {
    heading: "api-reference-5",
    content: "`ChannelMediaInfo`"
  }, {
    heading: "api-reference-5",
    content: "Cross-channel media stream relay is included in Agora's policy of 10,000 free minutes every month. For usage beyond the free quota, please refer to Pricing."
  }, {
    heading: "prerequisites-6",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-6",
    content: "Contact support\\@agora.io to activate the cross-channel media stream relay feature."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "To implement cross-channel media stream relay in your app, take the following steps:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "Start cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "After joining a channel, call `startOrUpdateChannelMediaRelay` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "Best practice is to set the UID of the source channel to `0`, allowing the SDK to assign a random UID."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "The source channel token in `srcChannelInfo` should be different from the one used when joining the source channel. Generate a new token using the source channel name and `uid = 0`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "For the destination channel, set the uid to `0`, to allow the SDK to assign a random `uid`, or specify a `uid`, ensuring that it is different from all UIDs in the target channel."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type `uid`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "Update media stream relay channels"
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call `startOrUpdateChannelMediaRelay` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "The updated configuration completely **replaces** the previous configuration."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "Pause or resume media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "To pause forwarding the media stream to all target channels, call `pauseAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "To resume forwarding the media stream to all target channels, call `resumeAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "Stop cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "To stop forwarding the media stream, call `stopChannelMediaRelay`. When forwarding stops, the host exits all target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "If this method fails, call `leaveChannel` to leave the channel and stop cross-channel media stream relay."
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "Monitor cross-channel media stream status"
  }, {
    heading: "implement-cross-channel-media-stream-relay-6",
    content: "During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the `onChannelMediaRelayStateChanged` callback. Implement the relevant business logic based on the status codes."
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "status-codes-5",
    content: "The following table shows the main forwarding states and their corresponding codes:"
  }, {
    heading: "status-codes-5",
    content: "Forwarding status"
  }, {
    heading: "status-codes-5",
    content: "State and error code"
  }, {
    heading: "status-codes-5",
    content: "The source channel starts transmitting data to the target channel."
  }, {
    heading: "status-codes-5",
    content: "`ChannelMediaRelayState.relayRunning (2)`, `ChannelMediaRelayError.relayOk (0)`"
  }, {
    heading: "status-codes-5",
    content: "Forwarding encounters an exception. Troubleshoot the issue based on the error code."
  }, {
    heading: "status-codes-5",
    content: "`ChannelMediaRelayState.relayFailure (3)`"
  }, {
    heading: "status-codes-5",
    content: "Forwarding has stopped."
  }, {
    heading: "status-codes-5",
    content: "`ChannelMediaRelayState.relayIdle (0)`, `ChannelMediaRelayError.relayOk (0)`"
  }, {
    heading: "api-reference-6",
    content: "`startOrUpdateChannelMediaRelay`"
  }, {
    heading: "api-reference-6",
    content: "`stopChannelMediaRelay`"
  }, {
    heading: "api-reference-6",
    content: "`pauseAllChannelMediaRelay`"
  }, {
    heading: "api-reference-6",
    content: "`resumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference-6",
    content: "`onChannelMediaRelayStateChanged`"
  }, {
    heading: "api-reference-6",
    content: "`ChannelMediaRelayConfiguration`"
  }, {
    heading: "api-reference-6",
    content: "`ChannelMediaInfo`"
  }, {
    heading: "api-reference-6",
    content: "Cross-channel media stream relay is included in Agora's policy of 10,000 free minutes every month. For usage beyond the free quota, please refer to Pricing."
  }, {
    heading: "prerequisites-7",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-7",
    content: "Contact support\\@agora.io to activate the cross-channel media stream relay feature."
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "To implement cross-channel media stream relay in your app, take the following steps:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "Start cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "After joining a channel, call `startOrUpdateChannelMediaRelay` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type `uid`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "Update media stream relay channels"
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call `startOrUpdateChannelMediaRelay` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "The updated configuration completely **replaces** the previous configuration."
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "Pause or resume media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "To pause forwarding the media stream to all target channels, call `pauseAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "To resume forwarding the media stream to all target channels, call `resumeAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "Stop cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "To stop forwarding the media stream, call `stopChannelMediaRelay`. When forwarding stops, the host exits all target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "If this method fails, call `leaveChannel` to leave the channel and stop cross-channel media stream relay."
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "Monitor cross-channel media stream status"
  }, {
    heading: "implement-cross-channel-media-stream-relay-7",
    content: "During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the `onChannelMediaRelayStateChanged` callback. Implement the relevant business logic based on the status codes."
  }, {
    heading: "reference-7",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "status-codes-6",
    content: "The main media stream forwarding states and their corresponding status codes are as follows:"
  }, {
    heading: "status-codes-6",
    content: "Media stream forwarding status"
  }, {
    heading: "status-codes-6",
    content: "status code"
  }, {
    heading: "status-codes-6",
    content: "The source channel starts transmitting data to the target channel."
  }, {
    heading: "status-codes-6",
    content: "`RelayStateRunning`(2) and `RelayOk`(0)"
  }, {
    heading: "status-codes-6",
    content: "Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the error code."
  }, {
    heading: "status-codes-6",
    content: "`RelayStateFailure`(3)"
  }, {
    heading: "status-codes-6",
    content: "Media stream forwarding has stopped."
  }, {
    heading: "status-codes-6",
    content: "`RelayStateIdle`(0) and `RelayOk`(0)"
  }, {
    heading: "sample-project-5",
    content: "Agora provides an open-source ChannelMediaRelay sample project for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "api-reference-7",
    content: "`startOrUpdateChannelMediaRelay`"
  }, {
    heading: "api-reference-7",
    content: "`stopChannelMediaRelay`"
  }, {
    heading: "api-reference-7",
    content: "`pauseAllChannelMediaRelay`"
  }, {
    heading: "api-reference-7",
    content: "`resumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference-7",
    content: "`onChannelMediaRelayStateChanged`"
  }, {
    heading: "api-reference-7",
    content: "`ChannelMediaRelayConfiguration`"
  }, {
    heading: "api-reference-7",
    content: "`ChannelMediaInfo`"
  }, {
    heading: "api-reference-7",
    content: "Cross-channel media stream relay is included in Agora's policy of 10,000 free minutes every month. For usage beyond the free quota, please refer to Pricing."
  }, {
    heading: "prerequisites-8",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-8",
    content: "Contact support\\@agora.io to activate the cross-channel media stream relay feature."
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "To implement cross-channel media stream relay in your game, take the following steps:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "Start cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "After joining a channel, call `StartOrUpdateChannelMediaRelay` to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type `uid`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "Update media stream relay channels"
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call `StartOrUpdateChannelMediaRelay` again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "The updated configuration completely **replaces** the previous configuration."
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "Pause or resume media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "To pause forwarding the media stream to all target channels, call `PauseAllChannelMediaRelay`."
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "To resume forwarding the media stream to all target channels, call `ResumeAllChannelMediaRelay`:"
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "Stop cross-channel media stream relay"
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "To stop forwarding the media stream, call `StopChannelMediaRelay`. When forwarding stops, the host exits all target channels."
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "If this method fails, call `LeaveChannel` to leave the channel and stop cross-channel media stream relay."
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "Monitor cross-channel media stream status"
  }, {
    heading: "implement-cross-channel-media-stream-relay-8",
    content: "During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the `OnChannelMediaRelayStateChanged` callback. Implement the relevant business logic based on the status codes."
  }, {
    heading: "reference-8",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "status-codes-7",
    content: "To understand and respond to changes in the media relay state, refer to the `CHANNEL_MEDIA_RELAY_STATE` and `CHANNEL_MEDIA_RELAY_ERROR` enums in the API reference."
  }, {
    heading: "sample-project-6",
    content: "Agora provides an open-source ChannelMediaRelay sample project for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "api-reference-8",
    content: "`StartOrUpdateChannelMediaRelay`"
  }, {
    heading: "api-reference-8",
    content: "`StopChannelMediaRelay`"
  }, {
    heading: "api-reference-8",
    content: "`PauseAllChannelMediaRelay`"
  }, {
    heading: "api-reference-8",
    content: "`ResumeAllChannelMediaRelay`"
  }, {
    heading: "api-reference-8",
    content: "`OnChannelMediaRelayStateChanged`"
  }, {
    heading: "api-reference-8",
    content: "`ChannelMediaRelayConfiguration`"
  }, {
    heading: "api-reference-8",
    content: "`ChannelMediaInfo`"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-cross-channel-media-stream-relay",
    content: "Implement cross-channel media stream relay"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "status-codes",
    content: "Status codes"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implement-cross-channel-media-stream-relay-1",
    content: "Implement cross-channel media stream relay"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "status-codes-1",
    content: "Status codes"
  }, {
    id: "sample-project-1",
    content: "Sample project"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "implement-cross-channel-media-stream-relay-2",
    content: "Implement cross-channel media stream relay"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "status-codes-2",
    content: "Status codes"
  }, {
    id: "sample-project-2",
    content: "Sample project"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "implement-cross-channel-media-stream-relay-3",
    content: "Implement cross-channel media stream relay"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "implement-cross-channel-media-stream-relay-4",
    content: "Implement cross-channel media stream relay"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "status-codes-3",
    content: "Status codes"
  }, {
    id: "sample-project-3",
    content: "Sample project"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "implement-cross-channel-media-stream-relay-5",
    content: "Implement cross-channel media stream relay"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "status-codes-4",
    content: "Status codes"
  }, {
    id: "sample-project-4",
    content: "Sample project"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "prerequisites-6",
    content: "Prerequisites"
  }, {
    id: "implement-cross-channel-media-stream-relay-6",
    content: "Implement cross-channel media stream relay"
  }, {
    id: "reference-6",
    content: "Reference"
  }, {
    id: "status-codes-5",
    content: "Status codes"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "prerequisites-7",
    content: "Prerequisites"
  }, {
    id: "implement-cross-channel-media-stream-relay-7",
    content: "Implement cross-channel media stream relay"
  }, {
    id: "reference-7",
    content: "Reference"
  }, {
    id: "status-codes-6",
    content: "Status codes"
  }, {
    id: "sample-project-5",
    content: "Sample project"
  }, {
    id: "api-reference-7",
    content: "API reference"
  }, {
    id: "prerequisites-8",
    content: "Prerequisites"
  }, {
    id: "implement-cross-channel-media-stream-relay-8",
    content: "Implement cross-channel media stream relay"
  }, {
    id: "reference-8",
    content: "Reference"
  }, {
    id: "status-codes-7",
    content: "Status codes"
  }, {
    id: "sample-project-6",
    content: "Sample project"
  }, {
    id: "api-reference-8",
    content: "API reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cross-channel-media-stream-relay",
  title: _jsx(_Fragment, {
    children: "Implement cross-channel media stream relay"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#sample-project",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cross-channel-media-stream-relay-1",
  title: _jsx(_Fragment, {
    children: "Implement cross-channel media stream relay"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#status-codes-1",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#sample-project-1",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#prerequisites-2",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cross-channel-media-stream-relay-2",
  title: _jsx(_Fragment, {
    children: "Implement cross-channel media stream relay"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#status-codes-2",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#sample-project-2",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#prerequisites-3",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cross-channel-media-stream-relay-3",
  title: _jsx(_Fragment, {
    children: "Implement cross-channel media stream relay"
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
  depth: 2,
  url: "#prerequisites-4",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cross-channel-media-stream-relay-4",
  title: _jsx(_Fragment, {
    children: "Implement cross-channel media stream relay"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#status-codes-3",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#sample-project-3",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#prerequisites-5",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cross-channel-media-stream-relay-5",
  title: _jsx(_Fragment, {
    children: "Implement cross-channel media stream relay"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#status-codes-4",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#sample-project-4",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#prerequisites-6",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cross-channel-media-stream-relay-6",
  title: _jsx(_Fragment, {
    children: "Implement cross-channel media stream relay"
  })
}, {
  depth: 2,
  url: "#reference-6",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#status-codes-5",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#prerequisites-7",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cross-channel-media-stream-relay-7",
  title: _jsx(_Fragment, {
    children: "Implement cross-channel media stream relay"
  })
}, {
  depth: 2,
  url: "#reference-7",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#status-codes-6",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#sample-project-5",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-7",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#prerequisites-8",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cross-channel-media-stream-relay-8",
  title: _jsx(_Fragment, {
    children: "Implement cross-channel media stream relay"
  })
}, {
  depth: 2,
  url: "#reference-8",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#status-codes-7",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#sample-project-6",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-8",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
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
      children: "Some special use-cases require cross-channel media stream forwarding functionality. RTC SDK enables you to relay the media stream of a host, from a source channel, to multiple target channels simultaneously. This functionality allows you to realize the following interactions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["The hosts publish and receive each other's audio and video streams while engaging in ", _jsx(_components.em, {
            children: "cross-channel"
          }), " real-time interaction."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The audience receive all audio and video streams from hosts and watch multiple hosts interact at the same time."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Due to its real-time and interactive nature, this feature enriches live broadcasts and game-play, It is especially suitable for live scenes such as co-hosting PK and online choir. It provides the audience with a better viewing experience, while bringing more traffic and revenue to the hosts."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","web","windows","electron","flutter","react-native","unity"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Cross-channel media stream relay is included in Agora's policy of ", _jsx(_components.a, {
                href: "/en/api-reference/faq/account/billing_free",
                children: "10,000 free minutes"
              }), " every month. For usage beyond the free quota, please refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Ensure that you have implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`, _jsxs(_components.li, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to activate the cross-channel media stream relay feature."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-cross-channel-media-stream-relay",
          children: "Implement cross-channel media stream relay"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Cross-channel media stream relay workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg",
                alt: "Cross-channel media stream relay workflow"
              })
            })
          })
        }), _jsx(_components.p, {
          children: "To implement cross-channel media stream relay in your app, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configure source channel information"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ChannelMediaInfo srcChannelInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(et_channel."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getText"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "toString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "null"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", myUid);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ChannelMediaRelayConfiguration mediaRelayConfiguration "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaRelayConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mediaRelayConfiguration."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setSrcChannelInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(srcChannelInfo);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configure target channel information"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ChannelMediaInfo destChannelInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(destChannelName, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "null"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", myUid);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mediaRelayConfiguration."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setDestChannelInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(destChannelName, destChannelInfo);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Start cross-channel media stream relay"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startOrUpdateChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(mediaRelayConfiguration);"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Best practice is to set the UID of the source channel to ", _jsx(_components.code, {
                      children: "0"
                    }), ", allowing the SDK to assign a random UID."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["The source channel token in ", _jsx(_components.code, {
                      children: "srcChannelInfo"
                    }), " should be different from the one used when joining the source channel. Generate a new token using the source channel name and ", _jsx(_components.code, {
                      children: "uid = 0"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["For the destination channel, set the uid to ", _jsx(_components.code, {
                      children: "0"
                    }), ", to allow the SDK to assign a random ", _jsx(_components.code, {
                      children: "uid"
                    }), ", or specify a ", _jsx(_components.code, {
                      children: "uid"
                    }), ", ensuring that it is different from all UIDs in the target channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type ", _jsx(_components.code, {
                      children: "uid"
                    }), "."]
                  }), `
`]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Update media stream relay channels"
            }), `
`, _jsxs(_components.p, {
              children: ["To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The updated configuration completely ", _jsx(_components.strong, {
                    children: "replaces"
                  }), " the previous configuration."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Pause or resume media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To pause forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPaused "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pause."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setText"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(R.string.resume);"
                    })]
                  })]
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To resume forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPaused "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pause."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setText"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(R.string.pause);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Stop cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop forwarding the media stream, call ", _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              }), ". When forwarding stops, the host exits all target channels."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stopChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "et_channel_ex."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setEnabled"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pause."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setEnabled"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "join_ex."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setText"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(R.string.join));"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mediaRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If this method fails, call ", _jsx(_components.code, {
                    children: "leaveChannel"
                  }), " to leave the channel and stop cross-channel media stream relay."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Monitor cross-channel media stream status"
            }), `
`, _jsxs(_components.p, {
              children: ["During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the ", _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              }), " callback. Implement the relevant business logic based on the ", _jsx(_components.a, {
                href: "#status-codes",
                children: "status codes"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " onChannelMediaRelayStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " state, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " code) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  switch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (state) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RELAY_STATE_CONNECTING"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      mediaRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      handler."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "post"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        et_channel_ex."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setEnabled"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        join_ex."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setEnabled"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        join_ex."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setText"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getText"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(R.string.stop));"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "        showLongToast"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"channel media Relay connected."'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      });"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "      break"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RELAY_STATE_FAILURE"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      mediaRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      handler."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "post"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "        showLongToast"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(String."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "format"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"channel media Relay failed at error code: %d"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", code));"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      });"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    default:"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "      break"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  }"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "status-codes",
          children: "Status codes"
        }), _jsx(_components.p, {
          children: "The main media stream forwarding states and their corresponding status codes are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding status"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "status code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The source channel starts transmitting data to the target channel."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RELAY_STATE_RUNNING"
                }), "(2) and ", _jsx(_components.code, {
                  children: "RELAY_OK"
                }), "(0)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged__code",
                  children: "error code"
                }), "."]
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RELAY_STATE_FAILURE"
                }), "(3)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding has stopped."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RELAY_STATE_IDLE"
                }), "(0) and ", _jsx(_components.code, {
                  children: "RELAY_OK"
                }), "(0)"]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "sample-project",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/HostAcrossChannel.java",
            children: "HostAcrossChannels"
          }), " sample project for your reference. Download the project or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay",
              children: _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay",
              children: _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
              children: _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_channelmediarelayconfiguration.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaRelayConfiguration"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_channelmediainfo.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaInfo"
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
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Cross-channel media stream relay is included in Agora's policy of ", _jsx(_components.a, {
                href: "/en/api-reference/faq/account/billing_free",
                children: "10,000 free minutes"
              }), " every month. For usage beyond the free quota, please refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Ensure that you have implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`, _jsxs(_components.li, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to activate the cross-channel media stream relay feature."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-cross-channel-media-stream-relay-1",
          children: "Implement cross-channel media stream relay"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Cross-channel media stream relay workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg",
                alt: "Cross-channel media stream relay workflow"
              })
            })
          })
        }), _jsx(_components.p, {
          children: "To implement cross-channel media stream relay in your app, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configure source channel information"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " config "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " AgoraChannelMediaRelayConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.sourceInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " AgoraChannelMediaRelayInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "token"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "nil"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isProcessing "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configure target channel information"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " destinationInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " AgoraChannelMediaRelayInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "token"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "nil"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "setDestinationInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(destinationInfo, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "forChannelName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": destinationChannelName)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Start cross-channel media stream forwarding"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "startOrUpdateChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(config)"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Best practice is to set the UID of the source channel to ", _jsx(_components.code, {
                      children: "0"
                    }), ", allowing the SDK to assign a random UID."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["The source channel token in ", _jsx(_components.code, {
                      children: "srcChannelInfo"
                    }), " should be different from the one used when joining the source channel. Generate a new token using the source channel name and ", _jsx(_components.code, {
                      children: "uid = 0"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["For the destination channel, set the uid to ", _jsx(_components.code, {
                      children: "0"
                    }), ", to allow the SDK to assign a random ", _jsx(_components.code, {
                      children: "uid"
                    }), ", or specify a ", _jsx(_components.code, {
                      children: "uid"
                    }), ", ensuring that it is different from all UIDs in the target channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type ", _jsx(_components.code, {
                      children: "uid"
                    }), "."]
                  }), `
`]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Update media stream relay channels"
            }), `
`, _jsxs(_components.p, {
              children: ["To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The updated configuration completely ", _jsx(_components.strong, {
                    children: "replaces"
                  }), " the previous configuration."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Pause or resume media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To pause forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPauseRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "pauseAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  })]
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To resume forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPauseRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "resumeAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Stop cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop forwarding the media stream, call ", _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              }), " . When forwarding stops, the host exits all target channels."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isProcessing "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPauseRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "stopChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pauseRelayButton.isEnabled "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If this method fails, you can call ", _jsx(_components.code, {
                    children: "leaveChannel"
                  }), " to leave the channel, and cross-channel media stream relay will automatically stop."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Listen for cross-channel media stream status changes"
            }), `
`, _jsxs(_components.p, {
              children: ["During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the ", _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              }), " callback. Implement relevant business logic based on the ", _jsx(_components.a, {
                href: "#status-codes",
                children: "status codes"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "func"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " rtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "_"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " engine: AgoraRtcEngineKit,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "      channelMediaRelayStateDidChange"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " state: AgoraChannelMediaRelayState,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "      error"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": AgoraChannelMediaRelayError) {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  LogUtils."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "message"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"channelMediaRelayStateDidChange: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(state."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "rawValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " error "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(error."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "rawValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "level"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": .info)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  isProcessing "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  switch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " state {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " .running"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    isRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " .failure"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "    showAlert"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "message"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"Media Relay Failed: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(error."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "rawValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    isRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " .idle"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    isRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  default:"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    break"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  }"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "status-codes-1",
          children: "Status codes"
        }), _jsx(_components.p, {
          children: "The main media stream forwarding states and their corresponding status codes are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding status"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "status code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The source channel starts transmitting data to the target channel."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "AgoraChannelMediaRelayStateRunning"
                }), "(2) and ", _jsx(_components.code, {
                  children: "AgoraChannelMediaRelayErrorNone"
                }), "(0)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorachannelmediarelayerror",
                  children: "error code"
                }), "."]
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "AgoraChannelMediaRelayStateFailure"
                }), "(3)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding has stopped."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "AgoraChannelMediaRelayStateIdle"
                }), "(0) and ", _jsx(_components.code, {
                  children: "AgoraChannelMediaRelayErrorNone"
                }), "(0)"]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "sample-project-1",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/MediaChannelRelay/MediaChannelRelay.swift",
            children: "MediaChannelRelay"
          }), " sample project for your reference. Download the project or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startorupdatechannelmediarelay(_:)",
              children: _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stopchannelmediarelay()",
              children: _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pauseallchannelmediarelay()",
              children: _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/resumeallchannelmediarelay()",
              children: _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/resumeallchannelmediarelay()",
              children: _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:channelmediarelaystatedidchange:error:)",
              children: _jsx(_components.code, {
                children: "channelMediaRelayStateDidChange"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorachannelmediarelayconfiguration",
              children: _jsx(_components.code, {
                children: "AgoraChannelMediaRelayConfiguration"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorachannelmediarelayinfo",
              children: _jsx(_components.code, {
                children: "AgoraChannelMediaRelayInfo"
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
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Cross-channel media stream relay is included in Agora's policy of ", _jsx(_components.a, {
                href: "/en/api-reference/faq/account/billing_free",
                children: "10,000 free minutes"
              }), " every month. For usage beyond the free quota, please refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-2",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Ensure that you have implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`, _jsxs(_components.li, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to activate the cross-channel media stream relay feature."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-cross-channel-media-stream-relay-2",
          children: "Implement cross-channel media stream relay"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Cross-channel media stream relay workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg",
                alt: "Cross-channel media stream relay workflow"
              })
            })
          })
        }), _jsx(_components.p, {
          children: "To implement cross-channel media stream relay in your app, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configure source channel information"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " config "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " AgoraChannelMediaRelayConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.sourceInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " AgoraChannelMediaRelayInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "token"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "nil"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isProcessing "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configure target channel information"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " destinationInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " AgoraChannelMediaRelayInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "token"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "nil"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "setDestinationInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(destinationInfo, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "forChannelName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": destinationChannelName)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Start cross-channel media stream forwarding"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "startOrUpdateChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(config)"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Best practice is to set the UID of the source channel to ", _jsx(_components.code, {
                      children: "0"
                    }), ", allowing the SDK to assign a random UID."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["The source channel token in ", _jsx(_components.code, {
                      children: "srcChannelInfo"
                    }), " should be different from the one used when joining the source channel. Generate a new token using the source channel name and ", _jsx(_components.code, {
                      children: "uid = 0"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["For the destination channel, set the uid to ", _jsx(_components.code, {
                      children: "0"
                    }), ", to allow the SDK to assign a random ", _jsx(_components.code, {
                      children: "uid"
                    }), ", or specify a ", _jsx(_components.code, {
                      children: "uid"
                    }), ", ensuring that it is different from all UIDs in the target channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type ", _jsx(_components.code, {
                      children: "uid"
                    }), "."]
                  }), `
`]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Update media stream relay channels"
            }), `
`, _jsxs(_components.p, {
              children: ["To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The updated configuration completely ", _jsx(_components.strong, {
                    children: "replaces"
                  }), " the previous configuration."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Pause or resume media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To pause forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPauseRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "pauseAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  })]
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To resume forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPauseRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "resumeAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Stop cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop forwarding the media stream, call ", _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              }), " . When forwarding stops, the host exits all target channels."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isProcessing "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPauseRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "agoraKit."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "stopChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "pauseRelayButton.isEnabled "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If this method fails, you can call ", _jsx(_components.code, {
                    children: "leaveChannel"
                  }), " to leave the channel, and cross-channel media stream relay will automatically stop."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Listen for cross-channel media stream status changes"
            }), `
`, _jsxs(_components.p, {
              children: ["During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the ", _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              }), " callback. Implement relevant business logic based on the ", _jsx(_components.a, {
                href: "#status-codes",
                children: "status codes"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "func"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " rtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "_"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " engine: AgoraRtcEngineKit,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "      channelMediaRelayStateDidChange"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " state: AgoraChannelMediaRelayState,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "      error"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": AgoraChannelMediaRelayError) {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  LogUtils."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "message"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"channelMediaRelayStateDidChange: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(state."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "rawValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " error "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(error."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "rawValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "level"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": .info)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  isProcessing "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  switch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " state {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " .running"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    isRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " .failure"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "    showAlert"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "message"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"Media Relay Failed: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(error."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "rawValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    isRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " .idle"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    isRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  default:"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    break"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  }"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-2",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "status-codes-2",
          children: "Status codes"
        }), _jsx(_components.p, {
          children: "The main media stream forwarding states and their corresponding status codes are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding status"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "status code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The source channel starts transmitting data to the target channel."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "AgoraChannelMediaRelayStateRunning"
                }), "(2) and ", _jsx(_components.code, {
                  children: "AgoraChannelMediaRelayErrorNone"
                }), "(0)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorachannelmediarelayerror",
                  children: "error code"
                }), "."]
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "AgoraChannelMediaRelayStateFailure"
                }), "(3)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding has stopped."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "AgoraChannelMediaRelayStateIdle"
                }), "(0) and ", _jsx(_components.code, {
                  children: "AgoraChannelMediaRelayErrorNone"
                }), "(0)"]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "sample-project-2",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/ChannelMediaRelay/ChannelMediaRelay.swift",
            children: "ChannelMediaRelay"
          }), " sample project for your reference. Download the project or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startorupdatechannelmediarelay(_:)",
              children: _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/stopchannelmediarelay()",
              children: _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pauseallchannelmediarelay()",
              children: _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/resumeallchannelmediarelay()",
              children: _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/resumeallchannelmediarelay()",
              children: _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:channelmediarelaystatedidchange:error:)",
              children: _jsx(_components.code, {
                children: "channelMediaRelayStateDidChange"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorachannelmediarelayconfiguration",
              children: _jsx(_components.code, {
                children: "AgoraChannelMediaRelayConfiguration"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorachannelmediarelayinfo",
              children: _jsx(_components.code, {
                children: "AgoraChannelMediaRelayInfo"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Cross-channel media stream relay is included in Agora's policy of ", _jsx(_components.a, {
                href: "/en/api-reference/faq/account/billing_free",
                children: "10,000 free minutes"
              }), " every month. For usage beyond the free quota, please refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-3",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Ensure that you have implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`, _jsxs(_components.li, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to activate the cross-channel media stream relay feature."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-cross-channel-media-stream-relay-3",
          children: "Implement cross-channel media stream relay"
        }), _jsx(_components.p, {
          children: "To implement cross-channel media stream relay in your app, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Configure cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To create a cross-channel media stream relay configuration object, and set the source and target channel information, call ", _jsx(_components.code, {
                children: "createChannelMediaRelayConfiguration"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " channelMediaConfig"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AgoraRTC."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createChannelMediaRelayConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set source channel information"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "channelMediaConfig."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setSrcChannelInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "({"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " channelName: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"srcChannel"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " uid: <"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "USER_UID"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">,"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ' token: "yourSrcToken",'
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "});"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "// Set target channel information."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "// It can be called multiple times, for up to 4 target channels"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "channelMediaConfig.addDestChannelInfo({"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " channelName: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"destChannel1"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " uid: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "123"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " token: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"yourDestToken"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "});"
                    })
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Set the source channel ", _jsx(_components.code, {
                      children: "uid"
                    }), " to a value different from the current host's ", _jsx(_components.code, {
                      children: "uid"
                    }), ". Best practice is to set it to ", _jsx(_components.code, {
                      children: "0"
                    }), " so the server assigns a random ", _jsx(_components.code, {
                      children: "uid"
                    }), "."]
                  }), `
`, _jsx(_components.li, {
                    children: "Cross-channel media stream relay doesn't support String usernames."
                  }), `
`]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To start cross-channel media stream relay, call ", _jsx(_components.code, {
                children: "startChannelMediaRelay"
              }), " after calling ", _jsx(_components.code, {
                children: "AgoraRTCClient.publish"
              }), ". The SDK forwards the stream of the host who calls this method, and multiple hosts in a channel can forward media streams. To call ", _jsx(_components.code, {
                children: "startChannelMediaRelay"
              }), " again after a successful call, first call ", _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(channelMediaConfig)."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "then"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "=>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "`startChannelMediaRelay success`"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "})."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "catch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "e"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " =>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "`startChannelMediaRelay failed`"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", e);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "});"
                    })
                  })]
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "client"
              }), " refers to the local client object you create using ", _jsx(_components.code, {
                children: "AgoraRTC.createClient"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Listen for cross-channel media stream status changes"
            }), `
`, _jsxs(_components.p, {
              children: ["During cross-channel media stream relay, the SDK reports the status of media stream relay through ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("channel-media-relay-state")'
              }), " callback with state codes and error codes. Listen to the ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("channel-media-relay-event")'
              }), " callback for relay events. After you call ", _jsx(_components.code, {
                children: "startChannelMediaRelay"
              }), " or ", _jsx(_components.code, {
                children: "updateChannelMediaRelay"
              }), " successfully, users in the target channels receive the ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("user-published")'
              }), " callback. If a host in a target channel goes offline or leaves the channel during relay, the host in the source channel receives the ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("user-left")'
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Update media stream relay channels"
            }), `
`, _jsxs(_components.p, {
              children: ["To add or remove target channels after successfully calling ", _jsx(_components.code, {
                children: "startChannelMediaRelay"
              }), ", call ", _jsx(_components.code, {
                children: "updateChannelMediaRelay"
              }), ". You can forward a media stream to up to four target channels."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Remove a target channel"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "channelMediaConfig."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "removeDestChannelInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"destChannel1"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Update cross-channel media stream relay settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "updateChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(channelMediaConfig)."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "then"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "=>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"updateChannelMediaRelay success"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "})."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "catch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "e"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " =>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"updateChannelMediaRelay failed"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", e);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "});"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Stop cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop cross-channel media stream relay, call ", _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stopChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "then"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "=>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"stop media relay success"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "})."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "catch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "e"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " =>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"stop media relay failed"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", e);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "});"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
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
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#startchannelmediarelay",
              children: _jsx(_components.code, {
                children: "startChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#updatechannelmediarelay",
              children: _jsx(_components.code, {
                children: "updateChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#stopchannelmediarelay",
              children: _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_channel_media_relay_state",
              children: _jsx(_components.code, {
                children: 'AgoraRTCClient.on("channel-media-relay-state")'
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_channel_media_relay_event",
              children: _jsx(_components.code, {
                children: 'AgoraRTCClient.on("channel-media-relay-event")'
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
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Cross-channel media stream relay is included in Agora's policy of ", _jsx(_components.a, {
                href: "/en/api-reference/faq/account/billing_free",
                children: "10,000 free minutes"
              }), " every month. For usage beyond the free quota, please refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-4",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Ensure that you have implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`, _jsxs(_components.li, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to activate the cross-channel media stream relay feature."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-cross-channel-media-stream-relay-4",
          children: "Implement cross-channel media stream relay"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Cross-channel media stream relay workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg",
                alt: "Cross-channel media stream relay workflow"
              })
            })
          })
        }), _jsx(_components.p, {
          children: "To implement cross-channel media stream relay in your app, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configure source channel information"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ChannelMediaInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_srcInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ChannelMediaInfo;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_srcInfo->channelName "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " char"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[szChannelId."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "size"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "strcpy_s"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const_cast<char"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " *>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(m_srcInfo->channelName), szChannelId."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "size"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "\t\tszChannelId."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "data"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "());"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Note: The token for source channel is different from the token used when joining the source channel."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// It needs to be regenerated using the source channel name and uid = 0"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_srcInfo->token "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " APP_TOKEN;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// It is recommended to set the uid of the source channel to 0, allowing the SDK to assign a random uid."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_srcInfo->uid "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configure destination channel information"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " nDestCount "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " m_vecChannelMedias."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "size"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ChannelMediaInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "*"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "lpDestInfos "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ChannelMediaInfo[nDestCount];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "for"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " nIndex "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "; nIndex "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " nDestCount; nIndex"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "++"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "\tlpDestInfos[nIndex].channelName "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " m_vecChannelMedias[nIndex].channelName;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "\tlpDestInfos[nIndex].token "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " m_vecChannelMedias[nIndex].token;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "\t// Set the uid to 0, allowing the SDK to assign a random uid, or specify your own uid"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "\t// Ensure that it is different from all uids in the target channels"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "\tlpDestInfos[nIndex].uid "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " m_vecChannelMedias[nIndex].uid;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ChannelMediaRelayConfiguration cmrc;"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "cmrc.srcInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " m_srcInfo;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "cmrc.destInfos "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " lpDestInfos;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "cmrc.destCount "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " nDestCount;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ret "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Start or update the cross-channel media stream relay"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ret "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " m_rtcEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startOrUpdateChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(cmrc);"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Best practice is to set the UID of the source channel to ", _jsx(_components.code, {
                      children: "0"
                    }), ", allowing the SDK to assign a random UID."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["The source channel token in ", _jsx(_components.code, {
                      children: "srcChannelInfo"
                    }), " should be different from the one used when joining the source channel. Generate a new token using the source channel name and ", _jsx(_components.code, {
                      children: "uid = 0"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["For the destination channel, set the uid to ", _jsx(_components.code, {
                      children: "0"
                    }), ", to allow the SDK to assign a random ", _jsx(_components.code, {
                      children: "uid"
                    }), ", or specify a ", _jsx(_components.code, {
                      children: "uid"
                    }), ", ensuring that it is different from all uids in the target channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type ", _jsx(_components.code, {
                      children: "uid"
                    }), "."]
                  }), `
`]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Update media stream relay channels"
            }), `
`, _jsxs(_components.p, {
              children: ["To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The updated configuration completely ", _jsx(_components.strong, {
                    children: "replaces"
                  }), " the previous configuration."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Pause or resume media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To pause forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_rtcEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To resume forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_rtcEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Stop cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop forwarding the media stream, call ", _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              }), " . When forwarding stops, the host exits all target channels."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_rtcEngine->"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stopChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_lstInfo."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "AddString"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "_T"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"stopChannelMediaRelay"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "));"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_btnStartMediaRelay."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "SetWindowText"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(CrossChannelStartMediaRelay);"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If this method fails, you can call ", _jsx(_components.code, {
                    children: "leaveChannel"
                  }), " to leave the channel, and cross-channel media stream relay will automatically stop."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Listen for cross-channel media stream status changes"
            }), `
`, _jsxs(_components.p, {
              children: ["During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the ", _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              }), " callback. Implement relevant business logic based on the ", _jsx(_components.a, {
                href: "#status-codes",
                children: "status codes"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "class"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " CAgoraCrossChannelEventHandler"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " : "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " IRtcEngineEventHandler"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    virtual"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " onChannelMediaRelayStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "        CHANNEL_MEDIA_RELAY_STATE"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " state"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "        CHANNEL_MEDIA_RELAY_ERROR"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " code"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "override"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "        if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (m_hMsgHanlder)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "            ::"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "PostMessage"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(m_hMsgHanlder,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "                WM_MSGID"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(EID_CHANNEL_MEDIA_RELAY_STATE_CHNAGENED),"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "                state, code);"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    }"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "};"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-4",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "status-codes-3",
          children: "Status codes"
        }), _jsx(_components.p, {
          children: "The main media stream forwarding states and their corresponding status codes are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding status"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "status code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The source channel starts transmitting data to the target channel."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RELAY_STATE_RUNNING"
                }), "(2) and ", _jsx(_components.code, {
                  children: "RELAY_OK"
                }), "(0)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/enum_channelmediarelayerror.html",
                  children: "error code"
                }), "."]
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RELAY_STATE_FAILURE"
                }), "(3)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding has stopped."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RELAY_STATE_IDLE"
                }), "(0) and ", _jsx(_components.code, {
                  children: "RELAY_OK"
                }), "(0)"]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "sample-project-3",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/CrossChannel",
            children: "CrossChannel"
          }), " sample project for your reference. Download the project or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/api_irtcengine_startorupdatechannelmediarelay.html",
              children: _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay",
              children: _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
              children: _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_channelmediarelayconfiguration.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaRelayConfiguration"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_channelmediainfo.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaInfo"
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
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Cross-channel media stream relay is included in Agora's policy of ", _jsx(_components.a, {
                href: "/en/api-reference/faq/account/billing_free",
                children: "10,000 free minutes"
              }), " every month. For usage beyond the free quota, please refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-5",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Ensure that you have implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`, _jsxs(_components.li, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to activate the cross-channel media stream relay feature."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-cross-channel-media-stream-relay-5",
          children: "Implement cross-channel media stream relay"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Cross-channel media stream relay workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg",
                alt: "Cross-channel media stream relay workflow"
              })
            })
          })
        }), _jsx(_components.p, {
          children: "To implement cross-channel media stream relay in your app, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " srcChannelId"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "srcChannel"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " destChannelId"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "destChannel"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " uid"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " token"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "insert-your-token"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Start cross-channel media stream forwarding"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startOrUpdateChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "({"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Configure source channel information srcInfo"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  srcInfo: {"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    channelName: srcChannelId,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    uid: uid,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    token: token,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  },"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Configure the target channel information destInfos"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  destInfos: ["
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    {"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      channelName: destChannelId,"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      token: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "''"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// A token to join the target channel"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      uid: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// SDK randomly assigns a uid"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    },"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  ],"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Number of target channels"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  destCount: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "});"
                    })
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type ", _jsx(_components.code, {
                    children: "uid"
                  }), "."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Update media stream relay channels"
            }), `
`, _jsxs(_components.p, {
              children: ["To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The updated configuration completely ", _jsx(_components.strong, {
                    children: "replaces"
                  }), " the previous configuration."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Pause or resume media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To pause forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To resume forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Stop cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop forwarding the media stream, call ", _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              }), ". When forwarding stops, the host exits all target channels."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stopChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If this method fails, call ", _jsx(_components.code, {
                    children: "leaveChannel"
                  }), " to leave the channel and stop cross-channel media stream relay."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Monitor cross-channel media stream status"
            }), `
`, _jsxs(_components.p, {
              children: ["During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the ", _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              }), " callback. Implement the relevant business logic based on the ", _jsx(_components.a, {
                href: "#status-codes",
                children: "status codes"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Register event callback"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "registerEventHandler"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  onChannelMediaRelayStateChanged: ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "state"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaRelayState"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "code"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaRelayError"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "=>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "`Cross-channel media stream forwarding status：${"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "state"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "}，Error Code：${"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "code"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "}`"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  },"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-5",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "status-codes-4",
          children: "Status codes"
        }), _jsx(_components.p, {
          children: "The main media stream forwarding states and their corresponding status codes are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding status"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "status code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The source channel starts transmitting data to the target channel."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RelayStateRunning"
                }), "(2) and ", _jsx(_components.code, {
                  children: "RelayOk"
                }), "(0)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/enum_channelmediarelayerror.html",
                  children: "error code"
                }), "."]
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RelayStateFailure"
                }), "(3)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding has stopped."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RelayStateIdle"
                }), "(0) and ", _jsx(_components.code, {
                  children: "RelayOk"
                }), "(0)"]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "sample-project-4",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/advanced/ChannelMediaRelay/ChannelMediaRelay.tsx",
            children: "ChannelMediaRelay"
          }), " sample project for your reference. Download the project or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay",
              children: _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay",
              children: _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
              children: _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_channelmediarelayconfiguration.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaRelayConfiguration"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_channelmediainfo.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaInfo"
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
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Cross-channel media stream relay is included in Agora's policy of ", _jsx(_components.a, {
                href: "/en/api-reference/faq/account/billing_free",
                children: "10,000 free minutes"
              }), " every month. For usage beyond the free quota, please refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-6",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Ensure that you have implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`, _jsxs(_components.li, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to activate the cross-channel media stream relay feature."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-cross-channel-media-stream-relay-6",
          children: "Implement cross-channel media stream relay"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Cross-channel media stream relay workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg",
                alt: "Cross-channel media stream relay workflow"
              })
            })
          })
        }), _jsx(_components.p, {
          children: "To implement cross-channel media stream relay in your app, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configures the source channel information for media relay."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "final"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " srcChannelInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " ChannelMediaInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " channelName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " sourceChannelName,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " token"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " srcToken, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Token generated with UID 0."
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " uid"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Configures the destination channel information for media relay."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "final"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " destChannelInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " ChannelMediaInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " channelName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " destChannelName,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " token"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " destToken,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " uid"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Creates the media relay configuration with source and destination channels."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "final"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " mediaRelayConfiguration "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " ChannelMediaRelayConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " srcChannelInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " srcChannelInfo,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " destInfos"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {destChannelName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " destChannelInfo},"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Starts relaying media streams from the source channel to the destination channel."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startOrUpdateChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(mediaRelayConfiguration);"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Best practice is to set the UID of the source channel to ", _jsx(_components.code, {
                      children: "0"
                    }), ", allowing the SDK to assign a random UID."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["The source channel token in ", _jsx(_components.code, {
                      children: "srcChannelInfo"
                    }), " should be different from the one used when joining the source channel. Generate a new token using the source channel name and ", _jsx(_components.code, {
                      children: "uid = 0"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["For the destination channel, set the uid to ", _jsx(_components.code, {
                      children: "0"
                    }), ", to allow the SDK to assign a random ", _jsx(_components.code, {
                      children: "uid"
                    }), ", or specify a ", _jsx(_components.code, {
                      children: "uid"
                    }), ", ensuring that it is different from all UIDs in the target channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type ", _jsx(_components.code, {
                      children: "uid"
                    }), "."]
                  }), `
`]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Update media stream relay channels"
            }), `
`, _jsxs(_components.p, {
              children: ["To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The updated configuration completely ", _jsx(_components.strong, {
                    children: "replaces"
                  }), " the previous configuration."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Pause or resume media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To pause forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPaused "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  })]
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To resume forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "isPaused "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Stop cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop forwarding the media stream, call ", _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              }), ". When forwarding stops, the host exits all target channels."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stopChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mediaRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If this method fails, call ", _jsx(_components.code, {
                    children: "leaveChannel"
                  }), " to leave the channel and stop cross-channel media stream relay."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Monitor cross-channel media stream status"
            }), `
`, _jsxs(_components.p, {
              children: ["During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the ", _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              }), " callback. Implement the relevant business logic based on the ", _jsx(_components.a, {
                href: "#status-codes",
                children: "status codes"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "registerEventHandler"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " RtcEngineEventHandler"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  onChannelMediaRelayStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (state, code) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "   switch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (state) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " ChannelMediaRelayState"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".relaying"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "     mediaRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "     print"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"Channel media relay connected."'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "     break"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    case"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " ChannelMediaRelayState"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".failure"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "     mediaRelaying "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "     print"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"Channel media relay failed with error code: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "$"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "code"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "     break"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    default:"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "     break"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   }"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  },"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ),"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-6",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "status-codes-5",
          children: "Status codes"
        }), _jsx(_components.p, {
          children: "The following table shows the main forwarding states and their corresponding codes:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Forwarding status"
              }), _jsx(_components.th, {
                children: "State and error code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "The source channel starts transmitting data to the target channel."
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "ChannelMediaRelayState.relayRunning (2)"
                }), ", ", _jsx(_components.code, {
                  children: "ChannelMediaRelayError.relayOk (0)"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: ["Forwarding encounters an exception. Troubleshoot the issue based on the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/enum_channelmediarelayerror.html",
                  children: "error code"
                }), "."]
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "ChannelMediaRelayState.relayFailure (3)"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Forwarding has stopped."
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "ChannelMediaRelayState.relayIdle (0)"
                }), ", ", _jsx(_components.code, {
                  children: "ChannelMediaRelayError.relayOk (0)"
                })]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay",
              children: _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay",
              children: _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
              children: _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_channelmediarelayconfiguration.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaRelayConfiguration"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_channelmediainfo.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaInfo"
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
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Cross-channel media stream relay is included in Agora's policy of ", _jsx(_components.a, {
                href: "/en/api-reference/faq/account/billing_free",
                children: "10,000 free minutes"
              }), " every month. For usage beyond the free quota, please refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-7",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Ensure that you have implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`, _jsxs(_components.li, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to activate the cross-channel media stream relay feature."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-cross-channel-media-stream-relay-7",
          children: "Implement cross-channel media stream relay"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Cross-channel media stream relay workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg",
                alt: "Cross-channel media stream relay workflow"
              })
            })
          })
        }), _jsx(_components.p, {
          children: "To implement cross-channel media stream relay in your app, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " srcChannelId"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "srcChannel"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " destChannelId"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "destChannel"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " uid"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " token"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "insert-your-token"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Start cross-channel media stream forwarding"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startOrUpdateChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "({"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Configure source channel information srcInfo"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  srcInfo: {"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    channelName: srcChannelId,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    uid: uid,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    token: token,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  },"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Configure the target channel information destInfos"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  destInfos: ["
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    {"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      channelName: destChannelId,"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      token: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "''"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// A token to join the target channel"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      uid: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// SDK randomly assigns a uid"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    },"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  ],"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Number of target channels"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  destCount: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "});"
                    })
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type ", _jsx(_components.code, {
                    children: "uid"
                  }), "."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Update media stream relay channels"
            }), `
`, _jsxs(_components.p, {
              children: ["To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call ", _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              }), " again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The updated configuration completely ", _jsx(_components.strong, {
                    children: "replaces"
                  }), " the previous configuration."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Pause or resume media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To pause forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To resume forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Stop cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop forwarding the media stream, call ", _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              }), ". When forwarding stops, the host exits all target channels."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stopChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If this method fails, call ", _jsx(_components.code, {
                    children: "leaveChannel"
                  }), " to leave the channel and stop cross-channel media stream relay."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Monitor cross-channel media stream status"
            }), `
`, _jsxs(_components.p, {
              children: ["During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the ", _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              }), " callback. Implement the relevant business logic based on the ", _jsx(_components.a, {
                href: "#status-codes",
                children: "status codes"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Register event callback"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "registerEventHandler"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  onChannelMediaRelayStateChanged: ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "state"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaRelayState"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "code"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ":"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaRelayError"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "=>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "`Cross-channel media stream forwarding status：${"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "state"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "}，Error Code：${"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "code"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "}`"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  },"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-7",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "status-codes-6",
          children: "Status codes"
        }), _jsx(_components.p, {
          children: "The main media stream forwarding states and their corresponding status codes are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding status"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "status code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The source channel starts transmitting data to the target channel."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RelayStateRunning"
                }), "(2) and ", _jsx(_components.code, {
                  children: "RelayOk"
                }), "(0)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Cross-channel media stream forwarding encounters an exception. You can troubleshoot based on the ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/enum_channelmediarelayerror.html",
                  children: "error code"
                }), "."]
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RelayStateFailure"
                }), "(3)"]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Media stream forwarding has stopped."
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "RelayStateIdle"
                }), "(0) and ", _jsx(_components.code, {
                  children: "RelayOk"
                }), "(0)"]
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "sample-project-5",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/ChannelMediaRelay/ChannelMediaRelay.tsx",
            children: "ChannelMediaRelay"
          }), " sample project for your reference. Download the project or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-7",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay",
              children: _jsx(_components.code, {
                children: "startOrUpdateChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay",
              children: _jsx(_components.code, {
                children: "stopChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "pauseAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "resumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
              children: _jsx(_components.code, {
                children: "onChannelMediaRelayStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_channelmediarelayconfiguration.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaRelayConfiguration"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_channelmediainfo.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaInfo"
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
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Cross-channel media stream relay is included in Agora's policy of ", _jsx(_components.a, {
                href: "/en/api-reference/faq/account/billing_free",
                children: "10,000 free minutes"
              }), " every month. For usage beyond the free quota, please refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-8",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Ensure that you have implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`, _jsxs(_components.li, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to activate the cross-channel media stream relay feature."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-cross-channel-media-stream-relay-8",
          children: "Implement cross-channel media stream relay"
        }), _jsx(_components.p, {
          children: "The following figure shows the workflow you implement to facilitate cross-channel media stream relay:"
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Cross-channel media stream relay workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/cross-channel-forwarding.svg",
                alt: "Cross-channel media stream relay workflow"
              })
            })
          })
        }), _jsx(_components.p, {
          children: "To implement cross-channel media stream relay in your game, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "StartOrUpdateChannelMediaRelay"
              }), " to configure the source and target channel information and start forwarding a media stream. Calling this method before joining a channel fails. In live broadcasting, only hosts can call this method."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " OnStartButtonClick"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "{"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "  ChannelMediaRelayConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " config"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaRelayConfiguration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Configure source channel"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  config.srcInfo "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaInfo"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  {"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    channelName "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "._appIdInput.channelName,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    uid "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Let the SDK assign a random UID"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    token "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "._appIdInput.token "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Regenerate token for source channel with UID 0"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  };"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Configure target channel (up to 6 supported)"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  config.destInfos "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  config.destInfos["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChannelMediaInfo"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  {"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    channelName "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "._appIdInput.channelName "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "_2"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    uid "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Random UID or specify a unique one"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    token "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "._appIdInput.token"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  };"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  config.destCount "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Start media stream forwarding"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " nRet"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "StartOrUpdateChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(config);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".Log."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "UpdateLog"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(`StartOrUpdateChannelMediaRelay "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "nRet"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": ${nRet}, New "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Channel"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": ${"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "._appIdInput.channelName}_2`);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Cross-channel media stream relay doesn't support String-type user IDs. Join the channel with an int-type ", _jsx(_components.code, {
                    children: "uid"
                  }), "."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Update media stream relay channels"
            }), `
`, _jsxs(_components.p, {
              children: ["To forward the stream to multiple target channels or exit the current forwarding channel after starting channel media relay, call ", _jsx(_components.code, {
                children: "StartOrUpdateChannelMediaRelay"
              }), " again to add or remove target channels for forwarding. Multiple hosts in a channel can forward media streams, and each host can forward to up to six target channels."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The updated configuration completely ", _jsx(_components.strong, {
                    children: "replaces"
                  }), " the previous configuration."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Pause or resume media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To pause forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "PauseAllChannelMediaRelay"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " onPauseAllButtonClick"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "{"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " nRet"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "PauseAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".Log."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "UpdateLog"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(`onPauseAllButtonClick "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "nRet"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": ${nRet}`);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To resume forwarding the media stream to all target channels, call ", _jsx(_components.code, {
                children: "ResumeAllChannelMediaRelay"
              }), ":"]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " OnResumeAllButtonClick"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "{"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " nRet"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "ResumeAllChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".Log."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "UpdateLog"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(`OnResumeAllButtonClick "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "nRet"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": ${nRet}`);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Stop cross-channel media stream relay"
            }), `
`, _jsxs(_components.p, {
              children: ["To stop forwarding the media stream, call ", _jsx(_components.code, {
                children: "StopChannelMediaRelay"
              }), ". When forwarding stops, the host exits all target channels."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " OnStopButtonClick"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "{"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " nRet"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "StopChannelMediaRelay"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ".Log."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "UpdateLog"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(`OnStopButtonClick "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "nRet"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": ${nRet}`);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["If this method fails, call ", _jsx(_components.code, {
                    children: "LeaveChannel"
                  }), " to leave the channel and stop cross-channel media stream relay."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Monitor cross-channel media stream status"
            }), `
`, _jsxs(_components.p, {
              children: ["During cross-channel media stream relay, the SDK reports changes in the status of media stream relay through the ", _jsx(_components.code, {
                children: "OnChannelMediaRelayStateChanged"
              }), " callback. Implement the relevant business logic based on the ", _jsx(_components.a, {
                href: "#status-codes",
                children: "status codes"
              }), "."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "public"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " override"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " OnChannelMediaRelayStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " state"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " code"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "{"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  _channelMediaRelay.Log."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "UpdateLog"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(`OnChannelMediaRelayStateChanged "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "state"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": ${state}, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "code"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": ${code}`);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference-8",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "status-codes-7",
          children: "Status codes"
        }), _jsxs(_components.p, {
          children: ["To understand and respond to changes in the media relay state, refer to the ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/enum_channelmediarelaystate.html",
            children: _jsx(_components.code, {
              children: "CHANNEL_MEDIA_RELAY_STATE"
            })
          }), " and ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/enum_channelmediarelayerror.html",
            children: _jsx(_components.code, {
              children: "CHANNEL_MEDIA_RELAY_ERROR"
            })
          }), " enums in the API reference."]
        }), _jsx(_components.h3, {
          id: "sample-project-6",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/blob/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/ChannelMediaRelay/ChannelMediaRelay.cs",
            children: "ChannelMediaRelay"
          }), " sample project for your reference. Download the project or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-8",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_startorupdatechannelmediarelay",
              children: _jsx(_components.code, {
                children: "StartOrUpdateChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_stopchannelmediarelay",
              children: _jsx(_components.code, {
                children: "StopChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_pauseallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "PauseAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_resumeallchannelmediarelay",
              children: _jsx(_components.code, {
                children: "ResumeAllChannelMediaRelay"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
              children: _jsx(_components.code, {
                children: "OnChannelMediaRelayStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_channelmediarelayconfiguration.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaRelayConfiguration"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_channelmediainfo.html",
              children: _jsx(_components.code, {
                children: "ChannelMediaInfo"
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
