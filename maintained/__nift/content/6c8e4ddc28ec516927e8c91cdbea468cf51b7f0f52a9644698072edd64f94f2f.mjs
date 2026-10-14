import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "API sunset notice",
  description: "Deprecated and removed APIs for Voice & Video Calling."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    See the [API Sunset Notice](https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_sunset.html) page in the Android API reference.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    This page lists the deprecated and removed APIs in the SDK and their suggested alternatives.

    ## Deprecated APIs [#deprecated-apis]

    A deprecated API is expected to be officially removed in about one year from deprecation. Agora recommends using the alternate API as soon as possible to avoid impacting your online business.

    | Deprecated API                                                                                                                                                                                                                                 | Description                                                                                        | Alternate API                                                                                                                                                                                                                                                                                             | Deprecating version |
    | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
    | [\`setDirectCdnStreamingAudioConfiguration(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdirectcdnstreamingaudioconfiguration\\(_:\\))                                                       | Sets the audio profile of the audio streams directly pushed to the CDN by the host.                | Use [Media Push](/en/api-reference/api-ref/media-push) instead.                                                                                                                                                                                                                                           | v4.6.0              |
    | [\`setDirectCdnStreamingVideoConfiguration(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdirectcdnstreamingvideoconfiguration\\(_:\\))                                                       | Sets the video profile of the media streams directly pushed to the CDN by the host.                | Use [Media Push](/en/api-reference/api-ref/media-push) instead.                                                                                                                                                                                                                                           | v4.6.0              |
    | [\`startDirectCdnStreaming(_:publishUrl:mediaOptions:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startdirectcdnstreaming\\(_\\:publishurl\\:mediaoptions:\\))                                     | Starts pushing media streams to the CDN directly.                                                  | Use [Media Push](/en/api-reference/api-ref/media-push) instead.                                                                                                                                                                                                                                           | v4.6.0              |
    | [\`stopDirectCdnStreaming()\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stopdirectcdnstreaming\\(\\))                                                                                             | Stops pushing media streams to the CDN directly.                                                   | Use [Media Push](/en/api-reference/api-ref/media-push) instead.                                                                                                                                                                                                                                           | v4.6.0              |
    | [\`onDirectCdnStreamingStateChanged(_:reason:message:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingeventdelegate/ondirectcdnstreamingstatechanged\\(_\\:reason\\:message:\\))                  | CDN streaming state changed callback.                                                              | Use [Media Push](/en/api-reference/api-ref/media-push) instead.                                                                                                                                                                                                                                           | v4.6.0              |
    | [\`AgoraDirectCdnStreamingMediaOptions\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingmediaoptions)                                                                                           | The media setting options for the host.                                                            | Use [Media Push](/en/api-reference/api-ref/media-push) instead.                                                                                                                                                                                                                                           | v4.6.0              |
    | [\`AgoraDirectCdnStreamingStats\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingstats)                                                                                                         | The statistics of the current CDN streaming.                                                       | Use [Media Push](/en/api-reference/api-ref/media-push) instead.                                                                                                                                                                                                                                           | v4.6.0              |
    | [\`AgoraDirectCdnStreamingState\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingstate)                                                                                                         | The current CDN streaming state.                                                                   | Use [Media Push](/en/api-reference/api-ref/media-push) instead.                                                                                                                                                                                                                                           | v4.6.0              |
    | [\`AgoraDirectCdnStreamingReason\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingreason)                                                                                                       | Reasons for the changes in CDN streaming status.                                                   | Use [Media Push](/en/api-reference/api-ref/media-push) instead.                                                                                                                                                                                                                                           | v4.6.0              |
    | [\`startRhythmPlayer(_:sound2:config:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startrhythmplayer\\(_\\:sound2\\:config:\\))                                                                     | Enables the virtual metronome.                                                                     | -                                                                                                                                                                                                                                                                                                         | v4.6.0              |
    | [\`configRhythmPlayer(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/configrhythmplayer\\(_:\\))                                                                                                 | Configures the virtual metronome.                                                                  | -                                                                                                                                                                                                                                                                                                         | v4.6.0              |
    | [\`rtcEngine(_:didRhythmPlayerStateChanged:reason:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:didrhythmplayerstatechanged\\:reason:\\))                                      | Occurs when the state of virtual metronome changes.                                                | -                                                                                                                                                                                                                                                                                                         | v4.6.0              |
    | [\`addVideoWatermark(_:options:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark\\(_\\:options:\\))                                                                                  | Adds a watermark image to the local video.                                                         | Use \`addVideoWatermarkWithImageUrl:options:\` instead.                                                                                                                                                                                                                                                     | v4.6.0              |
    | [\`addVideoWatermarkEx(_:options:connection:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermarkex\\(_\\:options\\:connection:\\))                                                       | Adds a watermark image to the local video.                                                         | Use \`addVideoWatermarkWithImageUrlEx:options:connection:\` instead.                                                                                                                                                                                                                                        | v4.6.0              |
    | [\`pushExternalAudioFrameSampleBuffer(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer\\(_:\\))                                                                 | Push external CMSampleBuffer audio frames.                                                         | [\`pushExternalAudioFrameSampleBuffer(_:sampleRate:channels:trackId:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer\\(_\\:samplerate\\:channels\\:trackid:\\))                                                                 | v4.3.1              |
    | [\`enableDualStreamMode(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammode\\(_:\\))                                                                                             | Sets the dual-stream mode on the sender side.                                                      | [\`setDualStreamMode(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammode\\(_:\\))                                                                                                                                                              | v4.2.0              |
    | [\`enableDualStreamMode(_:streamConfig:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammode\\(_\\:streamconfig:\\))                                                                  | Sets dual-stream mode configuration on the sender side.                                            | [\`setDualStreamMode(_:streamConfig:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammode\\(_\\:streamconfig:\\))                                                                                                                                   | v4.2.0              |
    | [\`enableDualStreamModeEx(_:streamConfig:connection:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammodeex\\(_\\:streamconfig\\:connection:\\))                                       | Sets the dual-stream mode on the sender side.                                                      | [\`setDualStreamModeEx(_:streamConfig:connection:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammodeex\\(_\\:streamconfig\\:connection:\\))                                                                                                        | v4.2.0              |
    | [\`enableWebSdkInteroperability(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enablewebsdkinteroperability\\(_:\\))                                                                             | Enables interoperability with the Agora Web SDK (applicable only in the live streaming use-cases). | -                                                                                                                                                                                                                                                                                                         | v4.0.0              |
    | [\`setLogFileSize(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlogfilesize\\(_:\\))                                                                                                         | Set the size of the log file output by the SDK.                                                    | Use the \`logConfig\` parameter in [\`sharedEngine(with:delegate:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/sharedengine\\(with\\:delegate:\\))                                                                                                              | v4.0.0              |
    | [\`setExternalAudioSource(_:sampleRate:channels:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setexternalaudiosource\\(_\\:samplerate\\:channels:\\))                                               | Set external audio acquisition parameters.                                                         | [\`createCustomAudioTrack(_:config:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack\\(_\\:config:\\))                                                                                                                                     | v4.0.0              |
    | [\`setExternalAudioSource(_:sampleRate:channels:localPlayback:publish:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setexternalaudiosource\\(_\\:samplerate\\:channels\\:localplayback\\:publish:\\)) | Set external audio acquisition parameters.                                                         | [\`createCustomAudioTrack(_:config:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack\\(_\\:config:\\))                                                                                                                                     | v4.0.0              |
    | [\`createDataStreamEx(_:reliable:ordered:connection:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex\\(_\\:reliable\\:ordered\\:connection:\\))                                      | Create a data flow.                                                                                | [\`createDataStreamEx(_:config:connection:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex\\(_\\:config\\:connection:\\))                                                                                                                      | v4.0.0              |
    | [\`setLocalVideoMirrorMode(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalvideomirrormode\\(_:\\))                                                                                       | Set up local video mirroring.                                                                      | [\`setupLocalVideo(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo\\(_:\\)) or [\`setLocalRenderMode(_:mirror:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode\\(_\\:mirror:\\)) | v4.0.0              |
    | [\`setLogFile(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlogfile\\(_:\\))                                                                                                                 | Setting up log files.                                                                              | Use the \`logConfig\` parameter in [\`sharedEngine(with:delegate:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/sharedengine\\(with\\:delegate:\\))                                                                                                              | v4.0.0              |
    | [\`setAudioProfile(_:scenario:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_\\:scenario:\\))                                                                                    | Set audio encoding properties and audio scene.                                                     | [\`setAudioProfile(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\)) or [\`setAudioScenario(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\))                    | v4.0.0              |
    | [\`preload(songCode:jsonOption:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramusiccontentcenter/preload\\(songcode\\:jsonoption:\\))                                                                            | Preload music resources.                                                                           | [\`preload(songCode:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramusiccontentcenter/preload\\(songcode:\\))                                                                                                                                                              | v4.0.0              |
    | [\`addVideoWatermark(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark\\(_:\\))                                                                                                   | Add local video watermark.                                                                         | [\`addVideoWatermark(_:options:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark\\(_\\:options:\\))                                                                                                                                             | v4.0.0              |

    ## Removed APIs [#removed-apis]

    The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions.

    | Removed API                                                              | Description                                                                              | Alternate API                                                                                                                                                                                              | Deleting version |
    | :----------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |
    | \`setLocalPublishFallbackOption(_:)\`                                      | Sets the fallback option for the published video stream based on the network conditions. |                                                                                                                                                                                                            | v4.6.0           |
    | \`rtcEngine(_:didLocalPublishFallbackToAudioOnly:)\`                       | Occurs when the published media stream falls back to an audio-only stream.               |                                                                                                                                                                                                            | v4.6.0           |
    | \`rtcEngine(_:downlinkNetworkInfoUpdate:)\`                                | Occurs when the downlink network information changes.                                    |                                                                                                                                                                                                            | v4.6.0           |
    | \`wlAccStats\`                                                             | Wi-Fi acceleration stats.                                                                |                                                                                                                                                                                                            | v4.6.0           |
    | \`AgoraWlAccReason\`                                                       |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`AgoraWlAccAction\`                                                       |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`rtcEngine(_:wlAccStats:averageStats:)\`                                  |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`rtcEngine(_:wlAccMessage:action:wlAccMsg:)\`                             |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`enableWirelessAccelerate\`                                               | Enables or disable Wi-Fi acceleration.                                                   |                                                                                                                                                                                                            | v4.6.0           |
    | \`receivedFrameRate\` (removed from \`AgoraRtcRemoteVideoStats\`)            |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`setVideoProfile(_:swapWidthAndHeight:)\`                                 | Set the video encoding configuration.                                                    | [\`setVideoEncoderConfiguration(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration\\(_:\\))                                         | v4.4.0           |
    | \`setRemoteRenderMode(_:mode:)\`                                           | Set the remote view display mode.                                                        | [\`setRemoteRenderMode(_:mode:mirror:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode\\(_\\:mode\\:mirror:\\))                                 | v4.4.0           |
    | \`openWithCustomSource(atStartPos:withPlayerOnReadData:andPlayerOnSeek:)\` | Open the custom media resource file.                                                     | [\`open(with:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/open\\(with:\\))                                                                         | v4.4.0           |
    | \`setVideoQualityParameters(_:preferFrameRateOverImageQuality:)\`          | Set video optimization options (only available for live streaming).                      | Use the \`degradationPreference\` parameter in the [\`AgoraVideoEncoderConfiguration\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideoencoderconfiguration) class.         | v4.4.0           |
    | \`startEchoTest(_:)\`                                                      | Start the voice call loop test.                                                          | [\`startEchoTest(withConfig:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startechotest\\(withconfig:\\))                                                     | v4.4.0           |
    | \`startEchoTestWithInterval(_:successBlock:)\`                             | Start the voice call loop test.                                                          | [\`startEchoTest(withConfig:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startechotest\\(withconfig:\\))                                                     | v4.4.0           |
    | \`setEncryptionMode(_:)\`                                                  | Enable the built-in encryption scheme.                                                   | [\`enableEncryption(_:encryptionConfig:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableencryption\\(_\\:encryptionconfig:\\))                              | v4.4.0           |
    | \`setEncryptionSecret(_:)\`                                                | Enable built-in encryption, and set a data encryption password.                          | [\`enableEncryption(_:encryptionConfig:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableencryption\\(_\\:encryptionconfig:\\))                              | v4.4.0           |
    | \`onEvent(provider:extension:key:value:)\`                                 | Plugin event callback.                                                                   | [\`onEventWithContext(_:key:value:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramediafiltereventdelegate/oneventwithcontext\\(_\\:key\\:value:\\))                           | v4.4.0           |
    | \`onExtensionStarted(provider:extension:)\`                                | Plugin enable callback.                                                                  | [\`onExtensionStartedWithContext(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionstartedwithcontext\\(_:\\))                           | v4.4.0           |
    | \`onExtensionStopped(provider:extension:)\`                                | Plugin disable callback.                                                                 | [\`onExtensionStoppedWithContext(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionstoppedwithcontext\\(_:\\))                           | v4.4.0           |
    | \`onExtensionError(provider:extension:error:message:)\`                    | Plugin error callback.                                                                   | [\`onExtensionErrorWithContext(_:error:message:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionerrorwithcontext\\(_\\:error\\:message:\\)) | v4.4.0           |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    This page lists the deprecated and removed APIs in the SDK and their suggested alternatives.

    ## Deprecated APIs [#deprecated-apis-1]

    A deprecated API is expected to be officially removed in about one year from deprecation. Agora recommends using the alternate API as soon as possible to avoid impacting your online business.

    | Deprecated API                                                                                                                                                                                                                                   | Description                                                                                        | Alternate API                                                                                                                                                                                                                                                                                                 | Deprecating version |
    | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------ |
    | [\`pushExternalAudioFrameSampleBuffer(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer\\(_:\\))                                                                 | Push external CMSampleBuffer audio frames.                                                         | [\`pushExternalAudioFrameSampleBuffer(_:sampleRate:channels:trackId:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer\\(_\\:samplerate\\:channels\\:trackid:\\))                                                                   | v4.3.1              |
    | [\`enableDualStreamMode(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammode\\(_:\\))                                                                                             | Sets the dual-stream mode on the sender side.                                                      | [\`setDualStreamMode(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammode\\(_:\\))                                                                                                                                                                | v4.2.0              |
    | [\`enableDualStreamMode(_:streamConfig:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammode\\(_\\:streamconfig:\\))                                                                  | Sets dual-stream mode configuration on the sender side.                                            | [\`setDualStreamMode(_:streamConfig:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammode\\(_\\:streamconfig:\\))                                                                                                                                     | v4.2.0              |
    | [\`enableDualStreamModeEx(_:streamConfig:connection:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammodeex\\(_\\:streamconfig\\:connection:\\))                                       | Sets the dual-stream mode on the sender side.                                                      | [\`setDualStreamModeEx(_:streamConfig:connection:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammodeex\\(_\\:streamconfig\\:connection:\\))                                                                                                          | v4.2.0              |
    | [\`enableWebSdkInteroperability(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enablewebsdkinteroperability\\(_:\\))                                                                             | Enables interoperability with the Agora Web SDK (applicable only in the live streaming use-cases). | -                                                                                                                                                                                                                                                                                                             | v4.0.0              |
    | [\`setLogFileSize(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlogfilesize\\(_:\\))                                                                                                         | Set the size of the log file output by the SDK.                                                    | Use the \`logConfig\` parameter in [\`sharedEngine(with:delegate:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/sharedengine\\(with\\:delegate:\\))                                                                                                                | v4.0.0              |
    | [\`setExternalAudioSource(_:sampleRate:channels:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setexternalaudiosource\\(_\\:samplerate\\:channels:\\))                                               | Set external audio acquisition parameters.                                                         | [\`createCustomAudioTrack(_:config:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack\\(_\\:config:\\))                                                                                                                                       | v4.0.0              |
    | [\`setExternalAudioSource(_:sampleRate:channels:localPlayback:publish:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setexternalaudiosource\\(_\\:samplerate\\:channels\\:localplayback\\:publish:\\)) | Set external audio acquisition parameters.                                                         | [\`createCustomAudioTrack(_:config:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack\\(_\\:config:\\))                                                                                                                                       | v4.0.0              |
    | [\`createDataStreamEx(_:reliable:ordered:connection:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex\\(_\\:reliable\\:ordered\\:connection:\\))                                      | Create a data flow.                                                                                | [\`createDataStreamEx(_:config:connection:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex\\(_\\:config\\:connection:\\))                                                                                                                        | v4.0.0              |
    | [\`setLocalVideoMirrorMode(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalvideomirrormode\\(_:\\))                                                                                       | Set up local video mirroring.                                                                      | [\`setupLocalVideo(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo\\(_:\\)) or [\`setLocalRenderMode(_:mirror:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode\\(_\\:mirror:\\)) | v4.0.0              |
    | [\`setLogFile(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlogfile\\(_:\\))                                                                                                                 | Setting up log files.                                                                              | Use the \`logConfig\` parameter in [\`sharedEngine(with:delegate:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/sharedengine\\(with\\:delegate:\\))                                                                                                                | v4.0.0              |
    | [\`setAudioProfile(_:scenario:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_\\:scenario:\\))                                                                                    | Set audio encoding properties and audio scene.                                                     | [\`setAudioProfile(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\)) or [\`setAudioScenario(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\))                    | v4.0.0              |
    | [\`preload(songCode:jsonOption:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramusiccontentcenter/preload\\(songcode\\:jsonoption:\\))                                                                            | Preload music resources.                                                                           | [\`preload(songCode:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramusiccontentcenter/preload\\(songcode:\\))                                                                                                                                                                | v4.0.0              |
    | [\`addVideoWatermark(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark\\(_:\\))                                                                                                   | Add local video watermark.                                                                         | [\`addVideoWatermark(_:options:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark\\(_\\:options:\\))                                                                                                                                               | v4.0.0              |

    ## Removed APIs [#removed-apis-1]

    The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions.

    | Removed API                                                              | Description                                                         | Alternate API                                                                                                                                                                                                | Deleting version |
    | :----------------------------------------------------------------------- | :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |
    | \`setVideoProfile(_:swapWidthAndHeight:)\`                                 | Set the video encoding configuration.                               | [\`setVideoEncoderConfiguration(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration\\(_:\\))                                         | v4.4.0           |
    | \`setRemoteRenderMode(_:mode:)\`                                           | Set the remote view display mode.                                   | [\`setRemoteRenderMode(_:mode:mirror:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode\\(_\\:mode\\:mirror:\\))                                 | v4.4.0           |
    | \`openWithCustomSource(atStartPos:withPlayerOnReadData:andPlayerOnSeek:)\` | Open the custom media resource file.                                | [\`open(with:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/open\\(with:\\))                                                                         | v4.4.0           |
    | \`setVideoQualityParameters(_:preferFrameRateOverImageQuality:)\`          | Set video optimization options (only available for live streaming). | Use the \`degradationPreference\` parameter in the [\`AgoraVideoEncoderConfiguration\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideoencoderconfiguration) class.         | v4.4.0           |
    | \`startEchoTest(_:)\`                                                      | Start the voice call loop test.                                     | [\`startEchoTest(withConfig:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startechotest\\(withconfig:\\))                                                     | v4.4.0           |
    | \`startEchoTestWithInterval(_:successBlock:)\`                             | Start the voice call loop test.                                     | [\`startEchoTest(withConfig:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startechotest\\(withconfig:\\))                                                     | v4.4.0           |
    | \`setEncryptionMode(_:)\`                                                  | Enable the built-in encryption scheme.                              | [\`enableEncryption(_:encryptionConfig:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableencryption\\(_\\:encryptionconfig:\\))                              | v4.4.0           |
    | \`setEncryptionSecret(_:)\`                                                | Enable built-in encryption, and set a data encryption password.     | [\`enableEncryption(_:encryptionConfig:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableencryption\\(_\\:encryptionconfig:\\))                              | v4.4.0           |
    | \`onEvent(provider:extension:key:value:)\`                                 | Plugin event callback.                                              | [\`onEventWithContext(_:key:value:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramediafiltereventdelegate/oneventwithcontext\\(_\\:key\\:value:\\))                           | v4.4.0           |
    | \`onExtensionStarted(provider:extension:)\`                                | Plugin enable callback.                                             | [\`onExtensionStartedWithContext(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionstartedwithcontext\\(_:\\))                           | v4.4.0           |
    | \`onExtensionStopped(provider:extension:)\`                                | Plugin disable callback.                                            | [\`onExtensionStoppedWithContext(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionstoppedwithcontext\\(_:\\))                           | v4.4.0           |
    | \`onExtensionError(provider:extension:error:message:)\`                    | Plugin error callback.                                              | [\`onExtensionErrorWithContext(_:error:message:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionerrorwithcontext\\(_\\:error\\:message:\\)) | v4.4.0           |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "See the API Sunset Notice page in the Android API reference."
  }, {
    heading: undefined,
    content: "This page lists the deprecated and removed APIs in the SDK and their suggested alternatives."
  }, {
    heading: "deprecated-apis",
    content: "A deprecated API is expected to be officially removed in about one year from deprecation. Agora recommends using the alternate API as soon as possible to avoid impacting your online business."
  }, {
    heading: "deprecated-apis",
    content: "Deprecated API"
  }, {
    heading: "deprecated-apis",
    content: "Description"
  }, {
    heading: "deprecated-apis",
    content: "Alternate API"
  }, {
    heading: "deprecated-apis",
    content: "Deprecating version"
  }, {
    heading: "deprecated-apis",
    content: "`setDirectCdnStreamingAudioConfiguration(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the audio profile of the audio streams directly pushed to the CDN by the host."
  }, {
    heading: "deprecated-apis",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`setDirectCdnStreamingVideoConfiguration(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the video profile of the media streams directly pushed to the CDN by the host."
  }, {
    heading: "deprecated-apis",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`startDirectCdnStreaming(_:publishUrl:mediaOptions:)`"
  }, {
    heading: "deprecated-apis",
    content: "Starts pushing media streams to the CDN directly."
  }, {
    heading: "deprecated-apis",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`stopDirectCdnStreaming()`"
  }, {
    heading: "deprecated-apis",
    content: "Stops pushing media streams to the CDN directly."
  }, {
    heading: "deprecated-apis",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`onDirectCdnStreamingStateChanged(_:reason:message:)`"
  }, {
    heading: "deprecated-apis",
    content: "CDN streaming state changed callback."
  }, {
    heading: "deprecated-apis",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`AgoraDirectCdnStreamingMediaOptions`"
  }, {
    heading: "deprecated-apis",
    content: "The media setting options for the host."
  }, {
    heading: "deprecated-apis",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`AgoraDirectCdnStreamingStats`"
  }, {
    heading: "deprecated-apis",
    content: "The statistics of the current CDN streaming."
  }, {
    heading: "deprecated-apis",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`AgoraDirectCdnStreamingState`"
  }, {
    heading: "deprecated-apis",
    content: "The current CDN streaming state."
  }, {
    heading: "deprecated-apis",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`AgoraDirectCdnStreamingReason`"
  }, {
    heading: "deprecated-apis",
    content: "Reasons for the changes in CDN streaming status."
  }, {
    heading: "deprecated-apis",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`startRhythmPlayer(_:sound2:config:)`"
  }, {
    heading: "deprecated-apis",
    content: "Enables the virtual metronome."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`configRhythmPlayer(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Configures the virtual metronome."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`rtcEngine(_:didRhythmPlayerStateChanged:reason:)`"
  }, {
    heading: "deprecated-apis",
    content: "Occurs when the state of virtual metronome changes."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`addVideoWatermark(_:options:)`"
  }, {
    heading: "deprecated-apis",
    content: "Adds a watermark image to the local video."
  }, {
    heading: "deprecated-apis",
    content: "Use `addVideoWatermarkWithImageUrl:options:` instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`addVideoWatermarkEx(_:options:connection:)`"
  }, {
    heading: "deprecated-apis",
    content: "Adds a watermark image to the local video."
  }, {
    heading: "deprecated-apis",
    content: "Use `addVideoWatermarkWithImageUrlEx:options:connection:` instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`pushExternalAudioFrameSampleBuffer(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Push external CMSampleBuffer audio frames."
  }, {
    heading: "deprecated-apis",
    content: "`pushExternalAudioFrameSampleBuffer(_:sampleRate:channels:trackId:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.3.1"
  }, {
    heading: "deprecated-apis",
    content: "`enableDualStreamMode(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the dual-stream mode on the sender side."
  }, {
    heading: "deprecated-apis",
    content: "`setDualStreamMode(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis",
    content: "`enableDualStreamMode(_:streamConfig:)`"
  }, {
    heading: "deprecated-apis",
    content: "Sets dual-stream mode configuration on the sender side."
  }, {
    heading: "deprecated-apis",
    content: "`setDualStreamMode(_:streamConfig:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis",
    content: "`enableDualStreamModeEx(_:streamConfig:connection:)`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the dual-stream mode on the sender side."
  }, {
    heading: "deprecated-apis",
    content: "`setDualStreamModeEx(_:streamConfig:connection:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis",
    content: "`enableWebSdkInteroperability(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Enables interoperability with the Agora Web SDK (applicable only in the live streaming use-cases)."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setLogFileSize(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Set the size of the log file output by the SDK."
  }, {
    heading: "deprecated-apis",
    content: "Use the `logConfig` parameter in `sharedEngine(with:delegate:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setExternalAudioSource(_:sampleRate:channels:)`"
  }, {
    heading: "deprecated-apis",
    content: "Set external audio acquisition parameters."
  }, {
    heading: "deprecated-apis",
    content: "`createCustomAudioTrack(_:config:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setExternalAudioSource(_:sampleRate:channels:localPlayback:publish:)`"
  }, {
    heading: "deprecated-apis",
    content: "Set external audio acquisition parameters."
  }, {
    heading: "deprecated-apis",
    content: "`createCustomAudioTrack(_:config:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`createDataStreamEx(_:reliable:ordered:connection:)`"
  }, {
    heading: "deprecated-apis",
    content: "Create a data flow."
  }, {
    heading: "deprecated-apis",
    content: "`createDataStreamEx(_:config:connection:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setLocalVideoMirrorMode(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Set up local video mirroring."
  }, {
    heading: "deprecated-apis",
    content: "`setupLocalVideo(_:)` or `setLocalRenderMode(_:mirror:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setLogFile(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Setting up log files."
  }, {
    heading: "deprecated-apis",
    content: "Use the `logConfig` parameter in `sharedEngine(with:delegate:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setAudioProfile(_:scenario:)`"
  }, {
    heading: "deprecated-apis",
    content: "Set audio encoding properties and audio scene."
  }, {
    heading: "deprecated-apis",
    content: "`setAudioProfile(_:)` or `setAudioScenario(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`preload(songCode:jsonOption:)`"
  }, {
    heading: "deprecated-apis",
    content: "Preload music resources."
  }, {
    heading: "deprecated-apis",
    content: "`preload(songCode:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`addVideoWatermark(_:)`"
  }, {
    heading: "deprecated-apis",
    content: "Add local video watermark."
  }, {
    heading: "deprecated-apis",
    content: "`addVideoWatermark(_:options:)`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "removed-apis",
    content: "The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions."
  }, {
    heading: "removed-apis",
    content: "Removed API"
  }, {
    heading: "removed-apis",
    content: "Description"
  }, {
    heading: "removed-apis",
    content: "Alternate API"
  }, {
    heading: "removed-apis",
    content: "Deleting version"
  }, {
    heading: "removed-apis",
    content: "`setLocalPublishFallbackOption(_:)`"
  }, {
    heading: "removed-apis",
    content: "Sets the fallback option for the published video stream based on the network conditions."
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`rtcEngine(_:didLocalPublishFallbackToAudioOnly:)`"
  }, {
    heading: "removed-apis",
    content: "Occurs when the published media stream falls back to an audio-only stream."
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`rtcEngine(_:downlinkNetworkInfoUpdate:)`"
  }, {
    heading: "removed-apis",
    content: "Occurs when the downlink network information changes."
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`wlAccStats`"
  }, {
    heading: "removed-apis",
    content: "Wi-Fi acceleration stats."
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`AgoraWlAccReason`"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`AgoraWlAccAction`"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`rtcEngine(_:wlAccStats:averageStats:)`"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`rtcEngine(_:wlAccMessage:action:wlAccMsg:)`"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`enableWirelessAccelerate`"
  }, {
    heading: "removed-apis",
    content: "Enables or disable Wi-Fi acceleration."
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`receivedFrameRate` (removed from `AgoraRtcRemoteVideoStats`)"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`setVideoProfile(_:swapWidthAndHeight:)`"
  }, {
    heading: "removed-apis",
    content: "Set the video encoding configuration."
  }, {
    heading: "removed-apis",
    content: "`setVideoEncoderConfiguration(_:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`setRemoteRenderMode(_:mode:)`"
  }, {
    heading: "removed-apis",
    content: "Set the remote view display mode."
  }, {
    heading: "removed-apis",
    content: "`setRemoteRenderMode(_:mode:mirror:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`openWithCustomSource(atStartPos:withPlayerOnReadData:andPlayerOnSeek:)`"
  }, {
    heading: "removed-apis",
    content: "Open the custom media resource file."
  }, {
    heading: "removed-apis",
    content: "`open(with:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`setVideoQualityParameters(_:preferFrameRateOverImageQuality:)`"
  }, {
    heading: "removed-apis",
    content: "Set video optimization options (only available for live streaming)."
  }, {
    heading: "removed-apis",
    content: "Use the `degradationPreference` parameter in the `AgoraVideoEncoderConfiguration` class."
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`startEchoTest(_:)`"
  }, {
    heading: "removed-apis",
    content: "Start the voice call loop test."
  }, {
    heading: "removed-apis",
    content: "`startEchoTest(withConfig:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`startEchoTestWithInterval(_:successBlock:)`"
  }, {
    heading: "removed-apis",
    content: "Start the voice call loop test."
  }, {
    heading: "removed-apis",
    content: "`startEchoTest(withConfig:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`setEncryptionMode(_:)`"
  }, {
    heading: "removed-apis",
    content: "Enable the built-in encryption scheme."
  }, {
    heading: "removed-apis",
    content: "`enableEncryption(_:encryptionConfig:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`setEncryptionSecret(_:)`"
  }, {
    heading: "removed-apis",
    content: "Enable built-in encryption, and set a data encryption password."
  }, {
    heading: "removed-apis",
    content: "`enableEncryption(_:encryptionConfig:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`onEvent(provider:extension:key:value:)`"
  }, {
    heading: "removed-apis",
    content: "Plugin event callback."
  }, {
    heading: "removed-apis",
    content: "`onEventWithContext(_:key:value:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`onExtensionStarted(provider:extension:)`"
  }, {
    heading: "removed-apis",
    content: "Plugin enable callback."
  }, {
    heading: "removed-apis",
    content: "`onExtensionStartedWithContext(_:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`onExtensionStopped(provider:extension:)`"
  }, {
    heading: "removed-apis",
    content: "Plugin disable callback."
  }, {
    heading: "removed-apis",
    content: "`onExtensionStoppedWithContext(_:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`onExtensionError(provider:extension:error:message:)`"
  }, {
    heading: "removed-apis",
    content: "Plugin error callback."
  }, {
    heading: "removed-apis",
    content: "`onExtensionErrorWithContext(_:error:message:)`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "This page lists the deprecated and removed APIs in the SDK and their suggested alternatives."
  }, {
    heading: "deprecated-apis-1",
    content: "A deprecated API is expected to be officially removed in about one year from deprecation. Agora recommends using the alternate API as soon as possible to avoid impacting your online business."
  }, {
    heading: "deprecated-apis-1",
    content: "Deprecated API"
  }, {
    heading: "deprecated-apis-1",
    content: "Description"
  }, {
    heading: "deprecated-apis-1",
    content: "Alternate API"
  }, {
    heading: "deprecated-apis-1",
    content: "Deprecating version"
  }, {
    heading: "deprecated-apis-1",
    content: "`pushExternalAudioFrameSampleBuffer(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Push external CMSampleBuffer audio frames."
  }, {
    heading: "deprecated-apis-1",
    content: "`pushExternalAudioFrameSampleBuffer(_:sampleRate:channels:trackId:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.3.1"
  }, {
    heading: "deprecated-apis-1",
    content: "`enableDualStreamMode(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Sets the dual-stream mode on the sender side."
  }, {
    heading: "deprecated-apis-1",
    content: "`setDualStreamMode(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`enableDualStreamMode(_:streamConfig:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Sets dual-stream mode configuration on the sender side."
  }, {
    heading: "deprecated-apis-1",
    content: "`setDualStreamMode(_:streamConfig:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`enableDualStreamModeEx(_:streamConfig:connection:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Sets the dual-stream mode on the sender side."
  }, {
    heading: "deprecated-apis-1",
    content: "`setDualStreamModeEx(_:streamConfig:connection:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`enableWebSdkInteroperability(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Enables interoperability with the Agora Web SDK (applicable only in the live streaming use-cases)."
  }, {
    heading: "deprecated-apis-1",
    content: "-"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`setLogFileSize(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Set the size of the log file output by the SDK."
  }, {
    heading: "deprecated-apis-1",
    content: "Use the `logConfig` parameter in `sharedEngine(with:delegate:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`setExternalAudioSource(_:sampleRate:channels:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Set external audio acquisition parameters."
  }, {
    heading: "deprecated-apis-1",
    content: "`createCustomAudioTrack(_:config:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`setExternalAudioSource(_:sampleRate:channels:localPlayback:publish:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Set external audio acquisition parameters."
  }, {
    heading: "deprecated-apis-1",
    content: "`createCustomAudioTrack(_:config:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`createDataStreamEx(_:reliable:ordered:connection:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Create a data flow."
  }, {
    heading: "deprecated-apis-1",
    content: "`createDataStreamEx(_:config:connection:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`setLocalVideoMirrorMode(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Set up local video mirroring."
  }, {
    heading: "deprecated-apis-1",
    content: "`setupLocalVideo(_:)` or `setLocalRenderMode(_:mirror:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`setLogFile(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Setting up log files."
  }, {
    heading: "deprecated-apis-1",
    content: "Use the `logConfig` parameter in `sharedEngine(with:delegate:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`setAudioProfile(_:scenario:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Set audio encoding properties and audio scene."
  }, {
    heading: "deprecated-apis-1",
    content: "`setAudioProfile(_:)` or `setAudioScenario(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`preload(songCode:jsonOption:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Preload music resources."
  }, {
    heading: "deprecated-apis-1",
    content: "`preload(songCode:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`addVideoWatermark(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Add local video watermark."
  }, {
    heading: "deprecated-apis-1",
    content: "`addVideoWatermark(_:options:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.0.0"
  }, {
    heading: "removed-apis-1",
    content: "The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions."
  }, {
    heading: "removed-apis-1",
    content: "Removed API"
  }, {
    heading: "removed-apis-1",
    content: "Description"
  }, {
    heading: "removed-apis-1",
    content: "Alternate API"
  }, {
    heading: "removed-apis-1",
    content: "Deleting version"
  }, {
    heading: "removed-apis-1",
    content: "`setVideoProfile(_:swapWidthAndHeight:)`"
  }, {
    heading: "removed-apis-1",
    content: "Set the video encoding configuration."
  }, {
    heading: "removed-apis-1",
    content: "`setVideoEncoderConfiguration(_:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`setRemoteRenderMode(_:mode:)`"
  }, {
    heading: "removed-apis-1",
    content: "Set the remote view display mode."
  }, {
    heading: "removed-apis-1",
    content: "`setRemoteRenderMode(_:mode:mirror:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`openWithCustomSource(atStartPos:withPlayerOnReadData:andPlayerOnSeek:)`"
  }, {
    heading: "removed-apis-1",
    content: "Open the custom media resource file."
  }, {
    heading: "removed-apis-1",
    content: "`open(with:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`setVideoQualityParameters(_:preferFrameRateOverImageQuality:)`"
  }, {
    heading: "removed-apis-1",
    content: "Set video optimization options (only available for live streaming)."
  }, {
    heading: "removed-apis-1",
    content: "Use the `degradationPreference` parameter in the `AgoraVideoEncoderConfiguration` class."
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`startEchoTest(_:)`"
  }, {
    heading: "removed-apis-1",
    content: "Start the voice call loop test."
  }, {
    heading: "removed-apis-1",
    content: "`startEchoTest(withConfig:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`startEchoTestWithInterval(_:successBlock:)`"
  }, {
    heading: "removed-apis-1",
    content: "Start the voice call loop test."
  }, {
    heading: "removed-apis-1",
    content: "`startEchoTest(withConfig:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`setEncryptionMode(_:)`"
  }, {
    heading: "removed-apis-1",
    content: "Enable the built-in encryption scheme."
  }, {
    heading: "removed-apis-1",
    content: "`enableEncryption(_:encryptionConfig:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`setEncryptionSecret(_:)`"
  }, {
    heading: "removed-apis-1",
    content: "Enable built-in encryption, and set a data encryption password."
  }, {
    heading: "removed-apis-1",
    content: "`enableEncryption(_:encryptionConfig:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`onEvent(provider:extension:key:value:)`"
  }, {
    heading: "removed-apis-1",
    content: "Plugin event callback."
  }, {
    heading: "removed-apis-1",
    content: "`onEventWithContext(_:key:value:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`onExtensionStarted(provider:extension:)`"
  }, {
    heading: "removed-apis-1",
    content: "Plugin enable callback."
  }, {
    heading: "removed-apis-1",
    content: "`onExtensionStartedWithContext(_:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`onExtensionStopped(provider:extension:)`"
  }, {
    heading: "removed-apis-1",
    content: "Plugin disable callback."
  }, {
    heading: "removed-apis-1",
    content: "`onExtensionStoppedWithContext(_:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-1",
    content: "`onExtensionError(provider:extension:error:message:)`"
  }, {
    heading: "removed-apis-1",
    content: "Plugin error callback."
  }, {
    heading: "removed-apis-1",
    content: "`onExtensionErrorWithContext(_:error:message:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.4.0"
  }],
  headings: [{
    id: "deprecated-apis",
    content: "Deprecated APIs"
  }, {
    id: "removed-apis",
    content: "Removed APIs"
  }, {
    id: "deprecated-apis-1",
    content: "Deprecated APIs"
  }, {
    id: "removed-apis-1",
    content: "Removed APIs"
  }]
};
export let toc = [{
  depth: 2,
  url: "#deprecated-apis",
  title: _jsx(_Fragment, {
    children: "Deprecated APIs"
  })
}, {
  depth: 2,
  url: "#removed-apis",
  title: _jsx(_Fragment, {
    children: "Removed APIs"
  })
}, {
  depth: 2,
  url: "#deprecated-apis-1",
  title: _jsx(_Fragment, {
    children: "Deprecated APIs"
  })
}, {
  depth: 2,
  url: "#removed-apis-1",
  title: _jsx(_Fragment, {
    children: "Removed APIs"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "android",
    platforms: '["android","ios","macos"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "android",
        platform: "android"
      }), _jsxs(_components.p, {
        children: ["See the ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_sunset.html",
          children: "API Sunset Notice"
        }), " page in the Android API reference."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "ios",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "android",
        platform: "ios"
      }), _jsx(_components.p, {
        children: "This page lists the deprecated and removed APIs in the SDK and their suggested alternatives."
      }), _jsx(_components.h2, {
        id: "deprecated-apis",
        children: "Deprecated APIs"
      }), _jsx(_components.p, {
        children: "A deprecated API is expected to be officially removed in about one year from deprecation. Agora recommends using the alternate API as soon as possible to avoid impacting your online business."
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Deprecated API"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Alternate API"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Deprecating version"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdirectcdnstreamingaudioconfiguration(_:)",
                children: _jsx(_components.code, {
                  children: "setDirectCdnStreamingAudioConfiguration(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the audio profile of the audio streams directly pushed to the CDN by the host."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/media-push",
                children: "Media Push"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdirectcdnstreamingvideoconfiguration(_:)",
                children: _jsx(_components.code, {
                  children: "setDirectCdnStreamingVideoConfiguration(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the video profile of the media streams directly pushed to the CDN by the host."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/media-push",
                children: "Media Push"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startdirectcdnstreaming(_:publishurl:mediaoptions:)",
                children: _jsx(_components.code, {
                  children: "startDirectCdnStreaming(_:publishUrl:mediaOptions:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Starts pushing media streams to the CDN directly."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/media-push",
                children: "Media Push"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stopdirectcdnstreaming()",
                children: _jsx(_components.code, {
                  children: "stopDirectCdnStreaming()"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Stops pushing media streams to the CDN directly."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/media-push",
                children: "Media Push"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingeventdelegate/ondirectcdnstreamingstatechanged(_:reason:message:)",
                children: _jsx(_components.code, {
                  children: "onDirectCdnStreamingStateChanged(_:reason:message:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "CDN streaming state changed callback."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/media-push",
                children: "Media Push"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingmediaoptions",
                children: _jsx(_components.code, {
                  children: "AgoraDirectCdnStreamingMediaOptions"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The media setting options for the host."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/media-push",
                children: "Media Push"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingstats",
                children: _jsx(_components.code, {
                  children: "AgoraDirectCdnStreamingStats"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The statistics of the current CDN streaming."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/media-push",
                children: "Media Push"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingstate",
                children: _jsx(_components.code, {
                  children: "AgoraDirectCdnStreamingState"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The current CDN streaming state."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/media-push",
                children: "Media Push"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingreason",
                children: _jsx(_components.code, {
                  children: "AgoraDirectCdnStreamingReason"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Reasons for the changes in CDN streaming status."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/media-push",
                children: "Media Push"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startrhythmplayer(_:sound2:config:)",
                children: _jsx(_components.code, {
                  children: "startRhythmPlayer(_:sound2:config:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables the virtual metronome."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "-"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/configrhythmplayer(_:)",
                children: _jsx(_components.code, {
                  children: "configRhythmPlayer(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Configures the virtual metronome."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "-"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:didrhythmplayerstatechanged:reason:)",
                children: _jsx(_components.code, {
                  children: "rtcEngine(_:didRhythmPlayerStateChanged:reason:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the state of virtual metronome changes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "-"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark(_:options:)",
                children: _jsx(_components.code, {
                  children: "addVideoWatermark(_:options:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Adds a watermark image to the local video."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.code, {
                children: "addVideoWatermarkWithImageUrl:options:"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermarkex(_:options:connection:)",
                children: _jsx(_components.code, {
                  children: "addVideoWatermarkEx(_:options:connection:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Adds a watermark image to the local video."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use ", _jsx(_components.code, {
                children: "addVideoWatermarkWithImageUrlEx:options:connection:"
              }), " instead."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer(_:)",
                children: _jsx(_components.code, {
                  children: "pushExternalAudioFrameSampleBuffer(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Push external CMSampleBuffer audio frames."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer(_:samplerate:channels:trackid:)",
                children: _jsx(_components.code, {
                  children: "pushExternalAudioFrameSampleBuffer(_:sampleRate:channels:trackId:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.3.1"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammode(_:)",
                children: _jsx(_components.code, {
                  children: "enableDualStreamMode(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the dual-stream mode on the sender side."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammode(_:)",
                children: _jsx(_components.code, {
                  children: "setDualStreamMode(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.2.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammode(_:streamconfig:)",
                children: _jsx(_components.code, {
                  children: "enableDualStreamMode(_:streamConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets dual-stream mode configuration on the sender side."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammode(_:streamconfig:)",
                children: _jsx(_components.code, {
                  children: "setDualStreamMode(_:streamConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.2.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammodeex(_:streamconfig:connection:)",
                children: _jsx(_components.code, {
                  children: "enableDualStreamModeEx(_:streamConfig:connection:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the dual-stream mode on the sender side."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammodeex(_:streamconfig:connection:)",
                children: _jsx(_components.code, {
                  children: "setDualStreamModeEx(_:streamConfig:connection:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.2.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enablewebsdkinteroperability(_:)",
                children: _jsx(_components.code, {
                  children: "enableWebSdkInteroperability(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables interoperability with the Agora Web SDK (applicable only in the live streaming use-cases)."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "-"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlogfilesize(_:)",
                children: _jsx(_components.code, {
                  children: "setLogFileSize(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set the size of the log file output by the SDK."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "logConfig"
              }), " parameter in ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/sharedengine(with:delegate:)",
                children: _jsx(_components.code, {
                  children: "sharedEngine(with:delegate:)"
                })
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setexternalaudiosource(_:samplerate:channels:)",
                children: _jsx(_components.code, {
                  children: "setExternalAudioSource(_:sampleRate:channels:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set external audio acquisition parameters."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack(_:config:)",
                children: _jsx(_components.code, {
                  children: "createCustomAudioTrack(_:config:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setexternalaudiosource(_:samplerate:channels:localplayback:publish:)",
                children: _jsx(_components.code, {
                  children: "setExternalAudioSource(_:sampleRate:channels:localPlayback:publish:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set external audio acquisition parameters."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack(_:config:)",
                children: _jsx(_components.code, {
                  children: "createCustomAudioTrack(_:config:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex(_:reliable:ordered:connection:)",
                children: _jsx(_components.code, {
                  children: "createDataStreamEx(_:reliable:ordered:connection:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Create a data flow."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex(_:config:connection:)",
                children: _jsx(_components.code, {
                  children: "createDataStreamEx(_:config:connection:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalvideomirrormode(_:)",
                children: _jsx(_components.code, {
                  children: "setLocalVideoMirrorMode(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set up local video mirroring."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo(_:)",
                children: _jsx(_components.code, {
                  children: "setupLocalVideo(_:)"
                })
              }), " or ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode(_:mirror:)",
                children: _jsx(_components.code, {
                  children: "setLocalRenderMode(_:mirror:)"
                })
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlogfile(_:)",
                children: _jsx(_components.code, {
                  children: "setLogFile(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Setting up log files."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "logConfig"
              }), " parameter in ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/sharedengine(with:delegate:)",
                children: _jsx(_components.code, {
                  children: "sharedEngine(with:delegate:)"
                })
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:scenario:)",
                children: _jsx(_components.code, {
                  children: "setAudioProfile(_:scenario:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set audio encoding properties and audio scene."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioProfile(_:)"
                })
              }), " or ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioScenario(_:)"
                })
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramusiccontentcenter/preload(songcode:jsonoption:)",
                children: _jsx(_components.code, {
                  children: "preload(songCode:jsonOption:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Preload music resources."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramusiccontentcenter/preload(songcode:)",
                children: _jsx(_components.code, {
                  children: "preload(songCode:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark(_:)",
                children: _jsx(_components.code, {
                  children: "addVideoWatermark(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Add local video watermark."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark(_:options:)",
                children: _jsx(_components.code, {
                  children: "addVideoWatermark(_:options:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "removed-apis",
        children: "Removed APIs"
      }), _jsx(_components.p, {
        children: "The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions."
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Removed API"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Alternate API"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Deleting version"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setLocalPublishFallbackOption(_:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the fallback option for the published video stream based on the network conditions."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "rtcEngine(_:didLocalPublishFallbackToAudioOnly:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the published media stream falls back to an audio-only stream."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "rtcEngine(_:downlinkNetworkInfoUpdate:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the downlink network information changes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "wlAccStats"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Wi-Fi acceleration stats."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraWlAccReason"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AgoraWlAccAction"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "rtcEngine(_:wlAccStats:averageStats:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "rtcEngine(_:wlAccMessage:action:wlAccMsg:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "enableWirelessAccelerate"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables or disable Wi-Fi acceleration."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "receivedFrameRate"
              }), " (removed from ", _jsx(_components.code, {
                children: "AgoraRtcRemoteVideoStats"
              }), ")"]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.6.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setVideoProfile(_:swapWidthAndHeight:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set the video encoding configuration."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration(_:)",
                children: _jsx(_components.code, {
                  children: "setVideoEncoderConfiguration(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setRemoteRenderMode(_:mode:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set the remote view display mode."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode(_:mode:mirror:)",
                children: _jsx(_components.code, {
                  children: "setRemoteRenderMode(_:mode:mirror:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "openWithCustomSource(atStartPos:withPlayerOnReadData:andPlayerOnSeek:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Open the custom media resource file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/open(with:)",
                children: _jsx(_components.code, {
                  children: "open(with:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setVideoQualityParameters(_:preferFrameRateOverImageQuality:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set video optimization options (only available for live streaming)."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "degradationPreference"
              }), " parameter in the ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideoencoderconfiguration",
                children: _jsx(_components.code, {
                  children: "AgoraVideoEncoderConfiguration"
                })
              }), " class."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startEchoTest(_:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Start the voice call loop test."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startechotest(withconfig:)",
                children: _jsx(_components.code, {
                  children: "startEchoTest(withConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startEchoTestWithInterval(_:successBlock:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Start the voice call loop test."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startechotest(withconfig:)",
                children: _jsx(_components.code, {
                  children: "startEchoTest(withConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setEncryptionMode(_:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable the built-in encryption scheme."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableencryption(_:encryptionconfig:)",
                children: _jsx(_components.code, {
                  children: "enableEncryption(_:encryptionConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setEncryptionSecret(_:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable built-in encryption, and set a data encryption password."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableencryption(_:encryptionconfig:)",
                children: _jsx(_components.code, {
                  children: "enableEncryption(_:encryptionConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onEvent(provider:extension:key:value:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Plugin event callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramediafiltereventdelegate/oneventwithcontext(_:key:value:)",
                children: _jsx(_components.code, {
                  children: "onEventWithContext(_:key:value:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onExtensionStarted(provider:extension:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Plugin enable callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionstartedwithcontext(_:)",
                children: _jsx(_components.code, {
                  children: "onExtensionStartedWithContext(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onExtensionStopped(provider:extension:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Plugin disable callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionstoppedwithcontext(_:)",
                children: _jsx(_components.code, {
                  children: "onExtensionStoppedWithContext(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onExtensionError(provider:extension:error:message:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Plugin error callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionerrorwithcontext(_:error:message:)",
                children: _jsx(_components.code, {
                  children: "onExtensionErrorWithContext(_:error:message:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          })]
        })]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "macos",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "android",
        platform: "macos"
      }), _jsx(_components.p, {
        children: "This page lists the deprecated and removed APIs in the SDK and their suggested alternatives."
      }), _jsx(_components.h2, {
        id: "deprecated-apis-1",
        children: "Deprecated APIs"
      }), _jsx(_components.p, {
        children: "A deprecated API is expected to be officially removed in about one year from deprecation. Agora recommends using the alternate API as soon as possible to avoid impacting your online business."
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Deprecated API"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Alternate API"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Deprecating version"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer(_:)",
                children: _jsx(_components.code, {
                  children: "pushExternalAudioFrameSampleBuffer(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Push external CMSampleBuffer audio frames."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer(_:samplerate:channels:trackid:)",
                children: _jsx(_components.code, {
                  children: "pushExternalAudioFrameSampleBuffer(_:sampleRate:channels:trackId:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.3.1"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammode(_:)",
                children: _jsx(_components.code, {
                  children: "enableDualStreamMode(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the dual-stream mode on the sender side."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammode(_:)",
                children: _jsx(_components.code, {
                  children: "setDualStreamMode(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.2.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammode(_:streamconfig:)",
                children: _jsx(_components.code, {
                  children: "enableDualStreamMode(_:streamConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets dual-stream mode configuration on the sender side."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammode(_:streamconfig:)",
                children: _jsx(_components.code, {
                  children: "setDualStreamMode(_:streamConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.2.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enabledualstreammodeex(_:streamconfig:connection:)",
                children: _jsx(_components.code, {
                  children: "enableDualStreamModeEx(_:streamConfig:connection:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the dual-stream mode on the sender side."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setdualstreammodeex(_:streamconfig:connection:)",
                children: _jsx(_components.code, {
                  children: "setDualStreamModeEx(_:streamConfig:connection:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.2.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enablewebsdkinteroperability(_:)",
                children: _jsx(_components.code, {
                  children: "enableWebSdkInteroperability(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables interoperability with the Agora Web SDK (applicable only in the live streaming use-cases)."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "-"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlogfilesize(_:)",
                children: _jsx(_components.code, {
                  children: "setLogFileSize(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set the size of the log file output by the SDK."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "logConfig"
              }), " parameter in ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/sharedengine(with:delegate:)",
                children: _jsx(_components.code, {
                  children: "sharedEngine(with:delegate:)"
                })
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setexternalaudiosource(_:samplerate:channels:)",
                children: _jsx(_components.code, {
                  children: "setExternalAudioSource(_:sampleRate:channels:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set external audio acquisition parameters."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack(_:config:)",
                children: _jsx(_components.code, {
                  children: "createCustomAudioTrack(_:config:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setexternalaudiosource(_:samplerate:channels:localplayback:publish:)",
                children: _jsx(_components.code, {
                  children: "setExternalAudioSource(_:sampleRate:channels:localPlayback:publish:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set external audio acquisition parameters."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack(_:config:)",
                children: _jsx(_components.code, {
                  children: "createCustomAudioTrack(_:config:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex(_:reliable:ordered:connection:)",
                children: _jsx(_components.code, {
                  children: "createDataStreamEx(_:reliable:ordered:connection:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Create a data flow."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex(_:config:connection:)",
                children: _jsx(_components.code, {
                  children: "createDataStreamEx(_:config:connection:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalvideomirrormode(_:)",
                children: _jsx(_components.code, {
                  children: "setLocalVideoMirrorMode(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set up local video mirroring."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo(_:)",
                children: _jsx(_components.code, {
                  children: "setupLocalVideo(_:)"
                })
              }), " or ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode(_:mirror:)",
                children: _jsx(_components.code, {
                  children: "setLocalRenderMode(_:mirror:)"
                })
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlogfile(_:)",
                children: _jsx(_components.code, {
                  children: "setLogFile(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Setting up log files."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "logConfig"
              }), " parameter in ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/sharedengine(with:delegate:)",
                children: _jsx(_components.code, {
                  children: "sharedEngine(with:delegate:)"
                })
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:scenario:)",
                children: _jsx(_components.code, {
                  children: "setAudioProfile(_:scenario:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set audio encoding properties and audio scene."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioProfile(_:)"
                })
              }), " or ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioScenario(_:)"
                })
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramusiccontentcenter/preload(songcode:jsonoption:)",
                children: _jsx(_components.code, {
                  children: "preload(songCode:jsonOption:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Preload music resources."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramusiccontentcenter/preload(songcode:)",
                children: _jsx(_components.code, {
                  children: "preload(songCode:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark(_:)",
                children: _jsx(_components.code, {
                  children: "addVideoWatermark(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Add local video watermark."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark(_:options:)",
                children: _jsx(_components.code, {
                  children: "addVideoWatermark(_:options:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.0.0"
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "removed-apis-1",
        children: "Removed APIs"
      }), _jsx(_components.p, {
        children: "The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions."
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Removed API"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Alternate API"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Deleting version"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setVideoProfile(_:swapWidthAndHeight:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set the video encoding configuration."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration(_:)",
                children: _jsx(_components.code, {
                  children: "setVideoEncoderConfiguration(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setRemoteRenderMode(_:mode:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set the remote view display mode."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode(_:mode:mirror:)",
                children: _jsx(_components.code, {
                  children: "setRemoteRenderMode(_:mode:mirror:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "openWithCustomSource(atStartPos:withPlayerOnReadData:andPlayerOnSeek:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Open the custom media resource file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/open(with:)",
                children: _jsx(_components.code, {
                  children: "open(with:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setVideoQualityParameters(_:preferFrameRateOverImageQuality:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Set video optimization options (only available for live streaming)."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "degradationPreference"
              }), " parameter in the ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideoencoderconfiguration",
                children: _jsx(_components.code, {
                  children: "AgoraVideoEncoderConfiguration"
                })
              }), " class."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startEchoTest(_:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Start the voice call loop test."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startechotest(withconfig:)",
                children: _jsx(_components.code, {
                  children: "startEchoTest(withConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startEchoTestWithInterval(_:successBlock:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Start the voice call loop test."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startechotest(withconfig:)",
                children: _jsx(_components.code, {
                  children: "startEchoTest(withConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setEncryptionMode(_:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable the built-in encryption scheme."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableencryption(_:encryptionconfig:)",
                children: _jsx(_components.code, {
                  children: "enableEncryption(_:encryptionConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setEncryptionSecret(_:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enable built-in encryption, and set a data encryption password."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableencryption(_:encryptionconfig:)",
                children: _jsx(_components.code, {
                  children: "enableEncryption(_:encryptionConfig:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onEvent(provider:extension:key:value:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Plugin event callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramediafiltereventdelegate/oneventwithcontext(_:key:value:)",
                children: _jsx(_components.code, {
                  children: "onEventWithContext(_:key:value:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onExtensionStarted(provider:extension:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Plugin enable callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionstartedwithcontext(_:)",
                children: _jsx(_components.code, {
                  children: "onExtensionStartedWithContext(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onExtensionStopped(provider:extension:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Plugin disable callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionstoppedwithcontext(_:)",
                children: _jsx(_components.code, {
                  children: "onExtensionStoppedWithContext(_:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onExtensionError(provider:extension:error:message:)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Plugin error callback."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramediafiltereventdelegate/onextensionerrorwithcontext(_:error:message:)",
                children: _jsx(_components.code, {
                  children: "onExtensionErrorWithContext(_:error:message:)"
                })
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "v4.4.0"
            })]
          })]
        })]
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
