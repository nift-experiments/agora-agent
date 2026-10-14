import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "API sunset notice",
  description: "Deprecated and removed APIs"
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;javascript&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;,&#x22;python&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    This page lists the deprecated and removed APIs in the SDK and their suggested alternatives.

    ## Deprecated APIs [#deprecated-apis]

    A deprecated API is expected to be officially removed in about one year from deprecation. Agora recommends using the alternate API as soon as possible to avoid impacting your online business.

    | Deprecated API                           | Description                                                                                   | Alternate API                                   | Deprecating version |
    | :--------------------------------------- | :-------------------------------------------------------------------------------------------- | :---------------------------------------------- | :------------------ |
    | \`startRhythmPlayer\`                      | Enables the virtual metronome.                                                                | -                                               | v4.6.0              |
    | \`configRhythmPlayer\`                     | Configures the virtual metronome.                                                             | -                                               | v4.6.0              |
    | \`onRhythmPlayerStateChanged\`             | Occurs when the state of the virtual metronome changes.                                       | -                                               | v4.6.0              |
    | \`addVideoWatermarkEx [1/2]\`              | Adds a watermark image to the local video.                                                    | Use \`addVideoWatermarkEx [2/2]\` instead.        | v4.6.0              |
    | \`setRemoteSubscribeFallbackOption [1/2]\` | Sets the fallback option for the subscribed video stream based on the network conditions.     | \`setRemoteSubscribeFallbackOption [2/2]\`        | v4.4.0              |
    | \`setRemoteVideoStreamType [1/2]\`         | Sets the type of the video stream to subscribe to.                                            | \`setRemoteVideoStreamType [2/2]\`                | v4.4.0              |
    | \`setRemoteDefaultVideoStreamType [1/2]\`  | Sets the default video stream type to subscribe to.                                           | \`setRemoteDefaultVideoStreamType [2/2]\`         | v4.4.0              |
    | \`setRemoteVideoStreamTypeEx [1/2]\`       | Sets the type of the video stream to subscribe to.                                            | \`setRemoteVideoStreamTypeEx [2/2]\`              | v4.4.0              |
    | \`destroy\`                                | Destroys the music player.                                                                    | \`destroyMusicPlayer\`                            | v4.4.0              |
    | \`enableDualStreamMode [1/2]\`             | Enables or disables dual-stream mode on the sender side.                                      | \`setDualStreamMode [1/2]\`                       | v4.2.0              |
    | \`enableDualStreamMode [2/2]\`             | Sets dual-stream mode and the low video stream on the sender side.                            | \`setDualStreamMode [2/2]\`                       | v4.2.0              |
    | \`enableDualStreamModeEx\`                 | Enables or disables dual-stream mode on the sender side.                                      | \`setDualStreamModeEx\`                           | v4.2.0              |
    | \`enableWebSdkInteroperability\`           | Enables interoperability with the Agora Web SDK, applicable only in live streaming scenarios. | -                                               | v4.0.0              |
    | \`setExternalAudioSource [1/2]\`           | Sets the external audio source.                                                               | \`createCustomAudioTrack\`                        | v4.0.0              |
    | \`setExternalAudioSource [2/2]\`           | Sets the parameters of the external audio source.                                             | \`createCustomAudioTrack\`                        | v4.0.0              |
    | \`createDataStreamEx [1/2]\`               | Creates a data stream to provide more reliable and ordered data transmission.                 | \`createDataStreamEx [2/2]\`                      | v4.0.0              |
    | \`pushExternalVideoFrameById [1/2]\`       | Pushes external raw video frames to the SDK through a video track.                            | \`pushExternalVideoFrameById [2/2]\`              | v4.0.0              |
    | \`pushExternalVideoFrame [1/2]\`           | Pushes external raw video frames to the SDK.                                                  | \`pushExternalVideoFrame [2/2]\`                  | v4.0.0              |
    | \`setLocalVideoMirrorMode\`                | Sets the local video mirror mode.                                                             | \`setupLocalVideo\` or \`setLocalRenderMode [2/2]\` | v4.0.0              |
    | \`setLocalRenderMode [1/2]\`               | Sets the display mode of the local video.                                                     | \`setLocalRenderMode [2/2]\`                      | v4.0.0              |
    | \`setLogFileSize\`                         | Sets the size of the SDK log file.                                                            | Use the \`config\` parameter in \`create [2/2]\`.   | v4.0.0              |
    | \`setLogFilter\`                           | Sets the SDK log filter level.                                                                | Use the \`config\` parameter in \`create [2/2]\`.   | v4.0.0              |
    | \`setLogFile\`                             | Sets the SDK log output file.                                                                 | Use the \`config\` parameter in \`create [2/2]\`.   | v4.0.0              |
    | \`setLogLevel\`                            | Sets the SDK log output level.                                                                | Use the \`config\` parameter in \`create [2/2]\`.   | v4.0.0              |
    | \`setAudioProfile [1/2]\`                  | Sets the audio profile and audio scenario.                                                    | \`setAudioProfile [2/2]\` or \`setAudioScenario\`   | v4.0.0              |
    | \`startAudioMixing [1/2]\`                 | Starts playing a music file.                                                                  | \`startAudioMixing [2/2]\`                        | v4.0.0              |
    | \`preload [1/2]\`                          | Preloads music resources.                                                                     | \`preload [2/2]\`                                 | v4.0.0              |
    | \`addVideoWatermark [1/3]\`                | Adds a watermark image to the local video.                                                    | \`addVideoWatermark [2/3]\`                       | v4.0.0              |
    | \`getBlue\`                                | Gets the blue component of the background color.                                              | -                                               | v4.0.0              |
    | \`getGreen\`                               | Gets the green component of the background color.                                             | -                                               | v4.0.0              |
    | \`getRed\`                                 | Gets the red component of the background color.                                               | -                                               | v4.0.0              |
    | \`setBlue\`                                | Sets the blue component of the background color.                                              | -                                               | v4.0.0              |
    | \`setGreen\`                               | Sets the green component of the background color.                                             | -                                               | v4.0.0              |
    | \`setRed\`                                 | Sets the red component of the background color.                                               | -                                               | v4.0.0              |
    | \`onAudioMixingFinished\`                  | Occurs when local music playback finishes.                                                    | \`onAudioMixingStateChanged\`                     | v4.0.0              |
    | \`onAudioQuality\`                         | Reports the statistics of the audio streams sent by each remote user.                         | \`onRemoteAudioStats\`                            | v4.0.0              |
    | \`onConnectionBanned\`                     | Occurs when the connection is banned by the Agora server.                                     | \`onConnectionStateChanged\`                      | v4.0.0              |
    | \`onConnectionInterrupted\`                | Occurs when the connection is interrupted.                                                    | \`onConnectionStateChanged\`                      | v4.0.0              |
    | \`onFirstRemoteAudioFrame\`                | Occurs when the first remote audio frame is received.                                         | \`onRemoteAudioStateChanged\`                     | v4.0.0              |
    | \`onFirstRemoteAudioDecoded\`              | Occurs when the first remote audio frame is decoded.                                          | \`onRemoteAudioStateChanged\`                     | v4.0.0              |
    | \`onRemoteAudioTransportStats\`            | Reports the transport-layer statistics of each remote audio stream.                           | \`onRemoteAudioStats\`                            | v4.0.0              |
    | \`onRemoteVideoTransportStats\`            | Reports the transport-layer statistics of each remote video stream.                           | \`onRemoteVideoStats\`                            | v4.0.0              |
    | \`onUserEnableLocalVideo\`                 | Occurs when a specified remote user enables or disables local video capture.                  | \`onRemoteVideoStateChanged\`                     | v4.0.0              |
    | \`onVideoStopped\`                         | Occurs when video playback stops.                                                             | \`onLocalVideoStateChanged\`                      | v4.0.0              |

    ## Removed APIs [#removed-apis]

    The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions.

    | Removed API                               | Description                                                                                        | Alternate API                       | Deleting version |
    | :---------------------------------------- | :------------------------------------------------------------------------------------------------- | :---------------------------------- | :--------------- |
    | \`setLocalPublishFallbackOption\`           | Sets the fallback option for the published audio and video stream based on the network conditions. | -                                   | v4.6.0           |
    | \`onLocalPublishFallbackToAudioOnly\`       | Occurs when the local published stream falls back to audio-only.                                   | -                                   | v4.6.0           |
    | \`onDownlinkNetworkInfoUpdated\`            | Occurs when the downlink network information changes.                                              | -                                   | v4.6.0           |
    | \`enableWirelessAccelerate\`                | Enables or disables Wi-Fi acceleration.                                                            | -                                   | v4.6.0           |
    | \`onWlAccStats\`                            | Reports Wi-Fi acceleration statistics.                                                             | -                                   | v4.6.0           |
    | \`onWlAccMessage\`                          | Reports Wi-Fi acceleration messages.                                                               | -                                   | v4.6.0           |
    | \`WlAccStats\`                              | Wi-Fi acceleration statistics.                                                                     | -                                   | v4.6.0           |
    | \`setVideoProfile\`                         | Sets the video encoder configuration.                                                              | \`setVideoEncoderConfiguration\`      | v4.4.0           |
    | \`setRemoteRenderMode(userId, renderMode)\` | Sets the display mode of the remote view.                                                          | \`setRemoteRenderMode\`               | v4.4.0           |
    | \`CreateRendererView\`                      | Creates a \`RendererView\`.                                                                          | Use Android's native \`SurfaceView\`. | v4.4.0           |
    | \`CreateTextureView\`                       | Creates a \`TextureView\`.                                                                           | Use Android's native \`TextureView\`. | v4.4.0           |
    | \`openWithCustomSource\`                    | Opens a custom media resource file.                                                                | \`openWithMediaSource\`               | v4.4.0           |
    | \`startEchoTest()\`                         | Starts the voice call loop test.                                                                   | \`startEchoTest\`                     | v4.4.0           |
    | \`startEchoTest(intervalInSeconds)\`        | Starts the voice call loop test.                                                                   | \`startEchoTest\`                     | v4.4.0           |
    | \`setEncryptionMode\`                       | Enables the built-in encryption scheme.                                                            | \`enableEncryption\`                  | v4.4.0           |
    | \`setEncryptionSecret\`                     | Enables built-in encryption and sets the data encryption password.                                 | \`enableEncryption\`                  | v4.4.0           |
    | \`onEvent\`                                 | Plugin event callback.                                                                             | \`onEventWithContext\`                | v4.4.0           |
    | \`onStarted\`                               | Occurs when the plugin is enabled.                                                                 | \`onStartedWithContext\`              | v4.4.0           |
    | \`onStopped\`                               | Occurs when the plugin is disabled.                                                                | \`onStoppedWithContext\`              | v4.4.0           |
    | \`onError\`                                 | Plugin error callback.                                                                             | \`onErrorWithContext\`                | v4.4.0           |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    This page lists the deprecated and removed APIs in the SDK and their suggested alternatives.

    ## Deprecated APIs [#deprecated-apis-1]

    A deprecated API is expected to be officially removed in about one year from deprecation. Agora recommends using the alternate API as soon as possible to avoid impacting your online business.

    | Deprecated API                                                                                                                                                                                                                                 | Description                                                                                        | Alternate API                                                                                                                                                                                                                                                                                             | Deprecating version |
    | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
    | [\`setDirectCdnStreamingAudioConfiguration(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdirectcdnstreamingaudioconfiguration\\(_:\\))                                                       | Sets the audio profile of the audio streams directly pushed to the CDN by the host.                | Use [Media Push](../../media-push/index.md) instead.                                                                                                                                                                                                                                                      | v4.6.0              |
    | [\`setDirectCdnStreamingVideoConfiguration(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdirectcdnstreamingvideoconfiguration\\(_:\\))                                                       | Sets the video profile of the media streams directly pushed to the CDN by the host.                | Use [Media Push](../../media-push/index.md) instead.                                                                                                                                                                                                                                                      | v4.6.0              |
    | [\`startDirectCdnStreaming(_:publishUrl:mediaOptions:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startdirectcdnstreaming\\(_\\:publishurl\\:mediaoptions:\\))                                     | Starts pushing media streams to the CDN directly.                                                  | Use [Media Push](../../media-push/index.md) instead.                                                                                                                                                                                                                                                      | v4.6.0              |
    | [\`stopDirectCdnStreaming()\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stopdirectcdnstreaming\\(\\))                                                                                             | Stops pushing media streams to the CDN directly.                                                   | Use [Media Push](../../media-push/index.md) instead.                                                                                                                                                                                                                                                      | v4.6.0              |
    | [\`onDirectCdnStreamingStateChanged(_:reason:message:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingeventdelegate/ondirectcdnstreamingstatechanged\\(_\\:reason\\:message:\\))                  | CDN streaming state changed callback.                                                              | Use [Media Push](../../media-push/index.md) instead.                                                                                                                                                                                                                                                      | v4.6.0              |
    | [\`AgoraDirectCdnStreamingMediaOptions\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingmediaoptions)                                                                                           | The media setting options for the host.                                                            | Use [Media Push](../../media-push/index.md) instead.                                                                                                                                                                                                                                                      | v4.6.0              |
    | [\`AgoraDirectCdnStreamingStats\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingstats)                                                                                                         | The statistics of the current CDN streaming.                                                       | Use [Media Push](../../media-push/index.md) instead.                                                                                                                                                                                                                                                      | v4.6.0              |
    | [\`AgoraDirectCdnStreamingState\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingstate)                                                                                                         | The current CDN streaming state.                                                                   | Use [Media Push](../../media-push/index.md) instead.                                                                                                                                                                                                                                                      | v4.6.0              |
    | [\`AgoraDirectCdnStreamingReason\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoradirectcdnstreamingreason)                                                                                                       | Reasons for the changes in CDN streaming status.                                                   | Use [Media Push](../../media-push/index.md) instead.                                                                                                                                                                                                                                                      | v4.6.0              |
    | [\`startRhythmPlayer(_:sound2:config:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startrhythmplayer\\(_\\:sound2\\:config:\\))                                                                     | Enables the virtual metronome                                                                      | -                                                                                                                                                                                                                                                                                                         | v4.6.0              |
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
    | [\`createDataStreamEx(_:reliable:ordered:connection:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex\\(_\\:reliable\\:ordered\\:connection:\\))                                      | Create a data flow                                                                                 | [\`createDataStreamEx(_:config:connection:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex\\(_\\:config\\:connection:\\))                                                                                                                      | v4.0.0              |
    | [\`setLocalVideoMirrorMode(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalvideomirrormode\\(_:\\))                                                                                       | Set up local video mirroring.                                                                      | [\`setupLocalVideo(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo\\(_:\\)) or [\`setLocalRenderMode(_:mirror:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode\\(_\\:mirror:\\)) | v4.0.0              |
    | [\`setLogFile(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlogfile\\(_:\\))                                                                                                                 | Setting up log files.                                                                              | Use the \`logConfig\` parameter in [\`sharedEngine(with:delegate:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/sharedengine\\(with\\:delegate:\\))                                                                                                              | v4.0.0              |
    | [\`setAudioProfile(_:scenario:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_\\:scenario:\\))                                                                                    | Set audio encoding properties and audio scene.                                                     | [\`setAudioProfile(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\)) or [\`setAudioScenario(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\))                    | v4.0.0              |
    | [\`preload(songCode:jsonOption:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramusiccontentcenter/preload\\(songcode\\:jsonoption:\\))                                                                            | Preload music resources.                                                                           | [\`preload(songCode:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoramusiccontentcenter/preload\\(songcode:\\))                                                                                                                                                              | v4.0.0              |
    | [\`addVideoWatermark(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark\\(_:\\))                                                                                                   | Add local video watermark.                                                                         | [\`addVideoWatermark(_:options:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark\\(_\\:options:\\))                                                                                                                                             | v4.0.0              |

    ## Removed APIs [#removed-apis-1]

    The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions.

    | Removed API                                                              | Description                                                                              | Alternate API                                                                                                                                                                                              | Deleting version |
    | :----------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |
    | \`setLocalPublishFallbackOption(_:)\`                                      | Sets the fallback option for the published video stream based on the network conditions. |                                                                                                                                                                                                            | v4.6.0           |
    | \`rtcEngine(_:didLocalPublishFallbackToAudioOnly:)\`                       | Occurs when the published media stream falls back to an audio-only stream.               |                                                                                                                                                                                                            | v4.6.0           |
    | \`rtcEngine(_:downlinkNetworkInfoUpdate:)\`                                | Occurs when the downlink network information changes.                                    |                                                                                                                                                                                                            | v4.6.0           |
    | \`wlAccStats\`                                                             | Wi-Fi acceleration stats                                                                 |                                                                                                                                                                                                            | v4.6.0           |
    | \`AgoraWlAccReason\`                                                       |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`AgoraWlAccAction\`                                                       |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`rtcEngine(_:wlAccStats:averageStats:)\`                                  |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`rtcEngine(_:wlAccMessage:action:wlAccMsg:)\`                             |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`enableWirelessAccelerate\`                                               | Enables or disable Wi-Fi acceleration.                                                   |                                                                                                                                                                                                            | v4.6.0           |
    | \`receivedFrameRate\` (removed from \`AgoraRtcRemoteVideoStats\`)            |                                                                                          |                                                                                                                                                                                                            | v4.6.0           |
    | \`setVideoProfile(_:swapWidthAndHeight:)\`                                 | Set the video encoding configuration.                                                    | [\`setVideoEncoderConfiguration(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration\\(_:\\))                                         | v4.4.0           |
    | \`setRemoteRenderMode(_:mode:)\`                                           | Set the remote view display mode.                                                        | [\`setRemoteRenderMode(_:mode:mirror:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode\\(_\\:mode\\:mirror:\\))                                 | v4.4.0           |
    | \`openWithCustomSource(atStartPos:withPlayerOnReadData:andPlayerOnSeek:)\` | Open the custom media resource file.                                                     | [\`open(with:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/open\\(with:\\))                                                                         | v4.4.0           |
    | \`setVideoQualityParameters(_:preferFrameRateOverImageQuality:)\`          | Set video optimization options (only available for live streaming).                      | Use the \`degradationPreference\` parameter in the [\`AgoraVideoEncoderConfiguration\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoravideoencoderconfiguration) class          | v4.4.0           |
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
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    This page lists the deprecated and removed APIs in the SDK and their suggested alternatives.

    ## Deprecated APIs [#deprecated-apis-2]

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
    | [\`createDataStreamEx(_:reliable:ordered:connection:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex\\(_\\:reliable\\:ordered\\:connection:\\))                                      | Create a data flow                                                                                 | [\`createDataStreamEx(_:config:connection:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createdatastreamex\\(_\\:config\\:connection:\\))                                                                                                                        | v4.0.0              |
    | [\`setLocalVideoMirrorMode(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalvideomirrormode\\(_:\\))                                                                                       | Set up local video mirroring.                                                                      | [\`setupLocalVideo(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo\\(_:\\)) or [\`setLocalRenderMode(_:mirror:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode\\(_\\:mirror:\\)) | v4.0.0              |
    | [\`setLogFile(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlogfile\\(_:\\))                                                                                                                 | Setting up log files.                                                                              | Use the \`logConfig\` parameter in [\`sharedEngine(with:delegate:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/sharedengine\\(with\\:delegate:\\))                                                                                                                | v4.0.0              |
    | [\`setAudioProfile(_:scenario:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_\\:scenario:\\))                                                                                    | Set audio encoding properties and audio scene.                                                     | [\`setAudioProfile(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\)) or [\`setAudioScenario(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\))                    | v4.0.0              |
    | [\`preload(songCode:jsonOption:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramusiccontentcenter/preload\\(songcode\\:jsonoption:\\))                                                                            | Preload music resources.                                                                           | [\`preload(songCode:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoramusiccontentcenter/preload\\(songcode:\\))                                                                                                                                                                | v4.0.0              |
    | [\`addVideoWatermark(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark\\(_:\\))                                                                                                   | Add local video watermark.                                                                         | [\`addVideoWatermark(_:options:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/addvideowatermark\\(_\\:options:\\))                                                                                                                                               | v4.0.0              |

    ## Removed APIs [#removed-apis-2]

    The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions.

    | Removed API                                                              | Description                                                         | Alternate API                                                                                                                                                                                                | Deleting version |
    | :----------------------------------------------------------------------- | :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |
    | \`setVideoProfile(_:swapWidthAndHeight:)\`                                 | Set the video encoding configuration.                               | [\`setVideoEncoderConfiguration(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration\\(_:\\))                                         | v4.4.0           |
    | \`setRemoteRenderMode(_:mode:)\`                                           | Set the remote view display mode.                                   | [\`setRemoteRenderMode(_:mode:mirror:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode\\(_\\:mode\\:mirror:\\))                                 | v4.4.0           |
    | \`openWithCustomSource(atStartPos:withPlayerOnReadData:andPlayerOnSeek:)\` | Open the custom media resource file.                                | [\`open(with:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/open\\(with:\\))                                                                         | v4.4.0           |
    | \`setVideoQualityParameters(_:preferFrameRateOverImageQuality:)\`          | Set video optimization options (only available for live streaming). | Use the \`degradationPreference\` parameter in the [\`AgoraVideoEncoderConfiguration\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoravideoencoderconfiguration) class          | v4.4.0           |
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

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="javascript">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="javascript" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="python">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="python" />

    This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
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
    content: "`startRhythmPlayer`"
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
    content: "`configRhythmPlayer`"
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
    content: "`onRhythmPlayerStateChanged`"
  }, {
    heading: "deprecated-apis",
    content: "Occurs when the state of the virtual metronome changes."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`addVideoWatermarkEx [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Adds a watermark image to the local video."
  }, {
    heading: "deprecated-apis",
    content: "Use `addVideoWatermarkEx [2/2]` instead."
  }, {
    heading: "deprecated-apis",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis",
    content: "`setRemoteSubscribeFallbackOption [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the fallback option for the subscribed video stream based on the network conditions."
  }, {
    heading: "deprecated-apis",
    content: "`setRemoteSubscribeFallbackOption [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.4.0"
  }, {
    heading: "deprecated-apis",
    content: "`setRemoteVideoStreamType [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the type of the video stream to subscribe to."
  }, {
    heading: "deprecated-apis",
    content: "`setRemoteVideoStreamType [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.4.0"
  }, {
    heading: "deprecated-apis",
    content: "`setRemoteDefaultVideoStreamType [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the default video stream type to subscribe to."
  }, {
    heading: "deprecated-apis",
    content: "`setRemoteDefaultVideoStreamType [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.4.0"
  }, {
    heading: "deprecated-apis",
    content: "`setRemoteVideoStreamTypeEx [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the type of the video stream to subscribe to."
  }, {
    heading: "deprecated-apis",
    content: "`setRemoteVideoStreamTypeEx [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.4.0"
  }, {
    heading: "deprecated-apis",
    content: "`destroy`"
  }, {
    heading: "deprecated-apis",
    content: "Destroys the music player."
  }, {
    heading: "deprecated-apis",
    content: "`destroyMusicPlayer`"
  }, {
    heading: "deprecated-apis",
    content: "v4.4.0"
  }, {
    heading: "deprecated-apis",
    content: "`enableDualStreamMode [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Enables or disables dual-stream mode on the sender side."
  }, {
    heading: "deprecated-apis",
    content: "`setDualStreamMode [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis",
    content: "`enableDualStreamMode [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Sets dual-stream mode and the low video stream on the sender side."
  }, {
    heading: "deprecated-apis",
    content: "`setDualStreamMode [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis",
    content: "`enableDualStreamModeEx`"
  }, {
    heading: "deprecated-apis",
    content: "Enables or disables dual-stream mode on the sender side."
  }, {
    heading: "deprecated-apis",
    content: "`setDualStreamModeEx`"
  }, {
    heading: "deprecated-apis",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis",
    content: "`enableWebSdkInteroperability`"
  }, {
    heading: "deprecated-apis",
    content: "Enables interoperability with the Agora Web SDK, applicable only in live streaming scenarios."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setExternalAudioSource [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the external audio source."
  }, {
    heading: "deprecated-apis",
    content: "`createCustomAudioTrack`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setExternalAudioSource [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the parameters of the external audio source."
  }, {
    heading: "deprecated-apis",
    content: "`createCustomAudioTrack`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`createDataStreamEx [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Creates a data stream to provide more reliable and ordered data transmission."
  }, {
    heading: "deprecated-apis",
    content: "`createDataStreamEx [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`pushExternalVideoFrameById [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Pushes external raw video frames to the SDK through a video track."
  }, {
    heading: "deprecated-apis",
    content: "`pushExternalVideoFrameById [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`pushExternalVideoFrame [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Pushes external raw video frames to the SDK."
  }, {
    heading: "deprecated-apis",
    content: "`pushExternalVideoFrame [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setLocalVideoMirrorMode`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the local video mirror mode."
  }, {
    heading: "deprecated-apis",
    content: "`setupLocalVideo` or `setLocalRenderMode [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setLocalRenderMode [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the display mode of the local video."
  }, {
    heading: "deprecated-apis",
    content: "`setLocalRenderMode [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setLogFileSize`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the size of the SDK log file."
  }, {
    heading: "deprecated-apis",
    content: "Use the `config` parameter in `create [2/2]`."
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setLogFilter`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the SDK log filter level."
  }, {
    heading: "deprecated-apis",
    content: "Use the `config` parameter in `create [2/2]`."
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setLogFile`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the SDK log output file."
  }, {
    heading: "deprecated-apis",
    content: "Use the `config` parameter in `create [2/2]`."
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setLogLevel`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the SDK log output level."
  }, {
    heading: "deprecated-apis",
    content: "Use the `config` parameter in `create [2/2]`."
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setAudioProfile [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the audio profile and audio scenario."
  }, {
    heading: "deprecated-apis",
    content: "`setAudioProfile [2/2]` or `setAudioScenario`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`startAudioMixing [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Starts playing a music file."
  }, {
    heading: "deprecated-apis",
    content: "`startAudioMixing [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`preload [1/2]`"
  }, {
    heading: "deprecated-apis",
    content: "Preloads music resources."
  }, {
    heading: "deprecated-apis",
    content: "`preload [2/2]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`addVideoWatermark [1/3]`"
  }, {
    heading: "deprecated-apis",
    content: "Adds a watermark image to the local video."
  }, {
    heading: "deprecated-apis",
    content: "`addVideoWatermark [2/3]`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`getBlue`"
  }, {
    heading: "deprecated-apis",
    content: "Gets the blue component of the background color."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`getGreen`"
  }, {
    heading: "deprecated-apis",
    content: "Gets the green component of the background color."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`getRed`"
  }, {
    heading: "deprecated-apis",
    content: "Gets the red component of the background color."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setBlue`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the blue component of the background color."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setGreen`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the green component of the background color."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`setRed`"
  }, {
    heading: "deprecated-apis",
    content: "Sets the red component of the background color."
  }, {
    heading: "deprecated-apis",
    content: "-"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onAudioMixingFinished`"
  }, {
    heading: "deprecated-apis",
    content: "Occurs when local music playback finishes."
  }, {
    heading: "deprecated-apis",
    content: "`onAudioMixingStateChanged`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onAudioQuality`"
  }, {
    heading: "deprecated-apis",
    content: "Reports the statistics of the audio streams sent by each remote user."
  }, {
    heading: "deprecated-apis",
    content: "`onRemoteAudioStats`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onConnectionBanned`"
  }, {
    heading: "deprecated-apis",
    content: "Occurs when the connection is banned by the Agora server."
  }, {
    heading: "deprecated-apis",
    content: "`onConnectionStateChanged`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onConnectionInterrupted`"
  }, {
    heading: "deprecated-apis",
    content: "Occurs when the connection is interrupted."
  }, {
    heading: "deprecated-apis",
    content: "`onConnectionStateChanged`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onFirstRemoteAudioFrame`"
  }, {
    heading: "deprecated-apis",
    content: "Occurs when the first remote audio frame is received."
  }, {
    heading: "deprecated-apis",
    content: "`onRemoteAudioStateChanged`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onFirstRemoteAudioDecoded`"
  }, {
    heading: "deprecated-apis",
    content: "Occurs when the first remote audio frame is decoded."
  }, {
    heading: "deprecated-apis",
    content: "`onRemoteAudioStateChanged`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onRemoteAudioTransportStats`"
  }, {
    heading: "deprecated-apis",
    content: "Reports the transport-layer statistics of each remote audio stream."
  }, {
    heading: "deprecated-apis",
    content: "`onRemoteAudioStats`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onRemoteVideoTransportStats`"
  }, {
    heading: "deprecated-apis",
    content: "Reports the transport-layer statistics of each remote video stream."
  }, {
    heading: "deprecated-apis",
    content: "`onRemoteVideoStats`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onUserEnableLocalVideo`"
  }, {
    heading: "deprecated-apis",
    content: "Occurs when a specified remote user enables or disables local video capture."
  }, {
    heading: "deprecated-apis",
    content: "`onRemoteVideoStateChanged`"
  }, {
    heading: "deprecated-apis",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis",
    content: "`onVideoStopped`"
  }, {
    heading: "deprecated-apis",
    content: "Occurs when video playback stops."
  }, {
    heading: "deprecated-apis",
    content: "`onLocalVideoStateChanged`"
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
    content: "`setLocalPublishFallbackOption`"
  }, {
    heading: "removed-apis",
    content: "Sets the fallback option for the published audio and video stream based on the network conditions."
  }, {
    heading: "removed-apis",
    content: "-"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`onLocalPublishFallbackToAudioOnly`"
  }, {
    heading: "removed-apis",
    content: "Occurs when the local published stream falls back to audio-only."
  }, {
    heading: "removed-apis",
    content: "-"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`onDownlinkNetworkInfoUpdated`"
  }, {
    heading: "removed-apis",
    content: "Occurs when the downlink network information changes."
  }, {
    heading: "removed-apis",
    content: "-"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`enableWirelessAccelerate`"
  }, {
    heading: "removed-apis",
    content: "Enables or disables Wi-Fi acceleration."
  }, {
    heading: "removed-apis",
    content: "-"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`onWlAccStats`"
  }, {
    heading: "removed-apis",
    content: "Reports Wi-Fi acceleration statistics."
  }, {
    heading: "removed-apis",
    content: "-"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`onWlAccMessage`"
  }, {
    heading: "removed-apis",
    content: "Reports Wi-Fi acceleration messages."
  }, {
    heading: "removed-apis",
    content: "-"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`WlAccStats`"
  }, {
    heading: "removed-apis",
    content: "Wi-Fi acceleration statistics."
  }, {
    heading: "removed-apis",
    content: "-"
  }, {
    heading: "removed-apis",
    content: "v4.6.0"
  }, {
    heading: "removed-apis",
    content: "`setVideoProfile`"
  }, {
    heading: "removed-apis",
    content: "Sets the video encoder configuration."
  }, {
    heading: "removed-apis",
    content: "`setVideoEncoderConfiguration`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`setRemoteRenderMode(userId, renderMode)`"
  }, {
    heading: "removed-apis",
    content: "Sets the display mode of the remote view."
  }, {
    heading: "removed-apis",
    content: "`setRemoteRenderMode`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`CreateRendererView`"
  }, {
    heading: "removed-apis",
    content: "Creates a `RendererView`."
  }, {
    heading: "removed-apis",
    content: "Use Android's native `SurfaceView`."
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`CreateTextureView`"
  }, {
    heading: "removed-apis",
    content: "Creates a `TextureView`."
  }, {
    heading: "removed-apis",
    content: "Use Android's native `TextureView`."
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`openWithCustomSource`"
  }, {
    heading: "removed-apis",
    content: "Opens a custom media resource file."
  }, {
    heading: "removed-apis",
    content: "`openWithMediaSource`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`startEchoTest()`"
  }, {
    heading: "removed-apis",
    content: "Starts the voice call loop test."
  }, {
    heading: "removed-apis",
    content: "`startEchoTest`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`startEchoTest(intervalInSeconds)`"
  }, {
    heading: "removed-apis",
    content: "Starts the voice call loop test."
  }, {
    heading: "removed-apis",
    content: "`startEchoTest`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`setEncryptionMode`"
  }, {
    heading: "removed-apis",
    content: "Enables the built-in encryption scheme."
  }, {
    heading: "removed-apis",
    content: "`enableEncryption`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`setEncryptionSecret`"
  }, {
    heading: "removed-apis",
    content: "Enables built-in encryption and sets the data encryption password."
  }, {
    heading: "removed-apis",
    content: "`enableEncryption`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`onEvent`"
  }, {
    heading: "removed-apis",
    content: "Plugin event callback."
  }, {
    heading: "removed-apis",
    content: "`onEventWithContext`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`onStarted`"
  }, {
    heading: "removed-apis",
    content: "Occurs when the plugin is enabled."
  }, {
    heading: "removed-apis",
    content: "`onStartedWithContext`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`onStopped`"
  }, {
    heading: "removed-apis",
    content: "Occurs when the plugin is disabled."
  }, {
    heading: "removed-apis",
    content: "`onStoppedWithContext`"
  }, {
    heading: "removed-apis",
    content: "v4.4.0"
  }, {
    heading: "removed-apis",
    content: "`onError`"
  }, {
    heading: "removed-apis",
    content: "Plugin error callback."
  }, {
    heading: "removed-apis",
    content: "`onErrorWithContext`"
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
    content: "`setDirectCdnStreamingAudioConfiguration(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Sets the audio profile of the audio streams directly pushed to the CDN by the host."
  }, {
    heading: "deprecated-apis-1",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`setDirectCdnStreamingVideoConfiguration(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Sets the video profile of the media streams directly pushed to the CDN by the host."
  }, {
    heading: "deprecated-apis-1",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`startDirectCdnStreaming(_:publishUrl:mediaOptions:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Starts pushing media streams to the CDN directly."
  }, {
    heading: "deprecated-apis-1",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`stopDirectCdnStreaming()`"
  }, {
    heading: "deprecated-apis-1",
    content: "Stops pushing media streams to the CDN directly."
  }, {
    heading: "deprecated-apis-1",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`onDirectCdnStreamingStateChanged(_:reason:message:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "CDN streaming state changed callback."
  }, {
    heading: "deprecated-apis-1",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`AgoraDirectCdnStreamingMediaOptions`"
  }, {
    heading: "deprecated-apis-1",
    content: "The media setting options for the host."
  }, {
    heading: "deprecated-apis-1",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`AgoraDirectCdnStreamingStats`"
  }, {
    heading: "deprecated-apis-1",
    content: "The statistics of the current CDN streaming."
  }, {
    heading: "deprecated-apis-1",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`AgoraDirectCdnStreamingState`"
  }, {
    heading: "deprecated-apis-1",
    content: "The current CDN streaming state."
  }, {
    heading: "deprecated-apis-1",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`AgoraDirectCdnStreamingReason`"
  }, {
    heading: "deprecated-apis-1",
    content: "Reasons for the changes in CDN streaming status."
  }, {
    heading: "deprecated-apis-1",
    content: "Use Media Push instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`startRhythmPlayer(_:sound2:config:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Enables the virtual metronome"
  }, {
    heading: "deprecated-apis-1",
    content: "-"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`configRhythmPlayer(_:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Configures the virtual metronome."
  }, {
    heading: "deprecated-apis-1",
    content: "-"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`rtcEngine(_:didRhythmPlayerStateChanged:reason:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Occurs when the state of virtual metronome changes."
  }, {
    heading: "deprecated-apis-1",
    content: "-"
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`addVideoWatermark(_:options:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Adds a watermark image to the local video."
  }, {
    heading: "deprecated-apis-1",
    content: "Use `addVideoWatermarkWithImageUrl:options:` instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
  }, {
    heading: "deprecated-apis-1",
    content: "`addVideoWatermarkEx(_:options:connection:)`"
  }, {
    heading: "deprecated-apis-1",
    content: "Adds a watermark image to the local video."
  }, {
    heading: "deprecated-apis-1",
    content: "Use `addVideoWatermarkWithImageUrlEx:options:connection:` instead."
  }, {
    heading: "deprecated-apis-1",
    content: "v4.6.0"
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
    content: "Create a data flow"
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
    content: "`setLocalPublishFallbackOption(_:)`"
  }, {
    heading: "removed-apis-1",
    content: "Sets the fallback option for the published video stream based on the network conditions."
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
  }, {
    heading: "removed-apis-1",
    content: "`rtcEngine(_:didLocalPublishFallbackToAudioOnly:)`"
  }, {
    heading: "removed-apis-1",
    content: "Occurs when the published media stream falls back to an audio-only stream."
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
  }, {
    heading: "removed-apis-1",
    content: "`rtcEngine(_:downlinkNetworkInfoUpdate:)`"
  }, {
    heading: "removed-apis-1",
    content: "Occurs when the downlink network information changes."
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
  }, {
    heading: "removed-apis-1",
    content: "`wlAccStats`"
  }, {
    heading: "removed-apis-1",
    content: "Wi-Fi acceleration stats"
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
  }, {
    heading: "removed-apis-1",
    content: "`AgoraWlAccReason`"
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
  }, {
    heading: "removed-apis-1",
    content: "`AgoraWlAccAction`"
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
  }, {
    heading: "removed-apis-1",
    content: "`rtcEngine(_:wlAccStats:averageStats:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
  }, {
    heading: "removed-apis-1",
    content: "`rtcEngine(_:wlAccMessage:action:wlAccMsg:)`"
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
  }, {
    heading: "removed-apis-1",
    content: "`enableWirelessAccelerate`"
  }, {
    heading: "removed-apis-1",
    content: "Enables or disable Wi-Fi acceleration."
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
  }, {
    heading: "removed-apis-1",
    content: "`receivedFrameRate` (removed from `AgoraRtcRemoteVideoStats`)"
  }, {
    heading: "removed-apis-1",
    content: "v4.6.0"
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
    content: "Use the `degradationPreference` parameter in the `AgoraVideoEncoderConfiguration` class"
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
  }, {
    heading: "removed-apis-1",
    content: "This page lists the deprecated and removed APIs in the SDK and their suggested alternatives."
  }, {
    heading: "deprecated-apis-2",
    content: "A deprecated API is expected to be officially removed in about one year from deprecation. Agora recommends using the alternate API as soon as possible to avoid impacting your online business."
  }, {
    heading: "deprecated-apis-2",
    content: "Deprecated API"
  }, {
    heading: "deprecated-apis-2",
    content: "Description"
  }, {
    heading: "deprecated-apis-2",
    content: "Alternate API"
  }, {
    heading: "deprecated-apis-2",
    content: "Deprecating version"
  }, {
    heading: "deprecated-apis-2",
    content: "`pushExternalAudioFrameSampleBuffer(_:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Push external CMSampleBuffer audio frames."
  }, {
    heading: "deprecated-apis-2",
    content: "`pushExternalAudioFrameSampleBuffer(_:sampleRate:channels:trackId:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.3.1"
  }, {
    heading: "deprecated-apis-2",
    content: "`enableDualStreamMode(_:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Sets the dual-stream mode on the sender side."
  }, {
    heading: "deprecated-apis-2",
    content: "`setDualStreamMode(_:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`enableDualStreamMode(_:streamConfig:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Sets dual-stream mode configuration on the sender side."
  }, {
    heading: "deprecated-apis-2",
    content: "`setDualStreamMode(_:streamConfig:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`enableDualStreamModeEx(_:streamConfig:connection:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Sets the dual-stream mode on the sender side."
  }, {
    heading: "deprecated-apis-2",
    content: "`setDualStreamModeEx(_:streamConfig:connection:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.2.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`enableWebSdkInteroperability(_:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Enables interoperability with the Agora Web SDK (applicable only in the live streaming use-cases)."
  }, {
    heading: "deprecated-apis-2",
    content: "-"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`setLogFileSize(_:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Set the size of the log file output by the SDK."
  }, {
    heading: "deprecated-apis-2",
    content: "Use the `logConfig` parameter in `sharedEngine(with:delegate:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`setExternalAudioSource(_:sampleRate:channels:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Set external audio acquisition parameters."
  }, {
    heading: "deprecated-apis-2",
    content: "`createCustomAudioTrack(_:config:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`setExternalAudioSource(_:sampleRate:channels:localPlayback:publish:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Set external audio acquisition parameters."
  }, {
    heading: "deprecated-apis-2",
    content: "`createCustomAudioTrack(_:config:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`createDataStreamEx(_:reliable:ordered:connection:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Create a data flow"
  }, {
    heading: "deprecated-apis-2",
    content: "`createDataStreamEx(_:config:connection:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`setLocalVideoMirrorMode(_:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Set up local video mirroring."
  }, {
    heading: "deprecated-apis-2",
    content: "`setupLocalVideo(_:)` or `setLocalRenderMode(_:mirror:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`setLogFile(_:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Setting up log files."
  }, {
    heading: "deprecated-apis-2",
    content: "Use the `logConfig` parameter in `sharedEngine(with:delegate:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`setAudioProfile(_:scenario:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Set audio encoding properties and audio scene."
  }, {
    heading: "deprecated-apis-2",
    content: "`setAudioProfile(_:)` or `setAudioScenario(_:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`preload(songCode:jsonOption:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Preload music resources."
  }, {
    heading: "deprecated-apis-2",
    content: "`preload(songCode:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "deprecated-apis-2",
    content: "`addVideoWatermark(_:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "Add local video watermark."
  }, {
    heading: "deprecated-apis-2",
    content: "`addVideoWatermark(_:options:)`"
  }, {
    heading: "deprecated-apis-2",
    content: "v4.0.0"
  }, {
    heading: "removed-apis-2",
    content: "The following APIs have been removed from the SDK. Please use the recommended alternative to implement related functions."
  }, {
    heading: "removed-apis-2",
    content: "Removed API"
  }, {
    heading: "removed-apis-2",
    content: "Description"
  }, {
    heading: "removed-apis-2",
    content: "Alternate API"
  }, {
    heading: "removed-apis-2",
    content: "Deleting version"
  }, {
    heading: "removed-apis-2",
    content: "`setVideoProfile(_:swapWidthAndHeight:)`"
  }, {
    heading: "removed-apis-2",
    content: "Set the video encoding configuration."
  }, {
    heading: "removed-apis-2",
    content: "`setVideoEncoderConfiguration(_:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`setRemoteRenderMode(_:mode:)`"
  }, {
    heading: "removed-apis-2",
    content: "Set the remote view display mode."
  }, {
    heading: "removed-apis-2",
    content: "`setRemoteRenderMode(_:mode:mirror:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`openWithCustomSource(atStartPos:withPlayerOnReadData:andPlayerOnSeek:)`"
  }, {
    heading: "removed-apis-2",
    content: "Open the custom media resource file."
  }, {
    heading: "removed-apis-2",
    content: "`open(with:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`setVideoQualityParameters(_:preferFrameRateOverImageQuality:)`"
  }, {
    heading: "removed-apis-2",
    content: "Set video optimization options (only available for live streaming)."
  }, {
    heading: "removed-apis-2",
    content: "Use the `degradationPreference` parameter in the `AgoraVideoEncoderConfiguration` class"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`startEchoTest(_:)`"
  }, {
    heading: "removed-apis-2",
    content: "Start the voice call loop test."
  }, {
    heading: "removed-apis-2",
    content: "`startEchoTest(withConfig:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`startEchoTestWithInterval(_:successBlock:)`"
  }, {
    heading: "removed-apis-2",
    content: "Start the voice call loop test."
  }, {
    heading: "removed-apis-2",
    content: "`startEchoTest(withConfig:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`setEncryptionMode(_:)`"
  }, {
    heading: "removed-apis-2",
    content: "Enable the built-in encryption scheme."
  }, {
    heading: "removed-apis-2",
    content: "`enableEncryption(_:encryptionConfig:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`setEncryptionSecret(_:)`"
  }, {
    heading: "removed-apis-2",
    content: "Enable built-in encryption, and set a data encryption password."
  }, {
    heading: "removed-apis-2",
    content: "`enableEncryption(_:encryptionConfig:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`onEvent(provider:extension:key:value:)`"
  }, {
    heading: "removed-apis-2",
    content: "Plugin event callback."
  }, {
    heading: "removed-apis-2",
    content: "`onEventWithContext(_:key:value:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`onExtensionStarted(provider:extension:)`"
  }, {
    heading: "removed-apis-2",
    content: "Plugin enable callback."
  }, {
    heading: "removed-apis-2",
    content: "`onExtensionStartedWithContext(_:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`onExtensionStopped(provider:extension:)`"
  }, {
    heading: "removed-apis-2",
    content: "Plugin disable callback."
  }, {
    heading: "removed-apis-2",
    content: "`onExtensionStoppedWithContext(_:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "`onExtensionError(provider:extension:error:message:)`"
  }, {
    heading: "removed-apis-2",
    content: "Plugin error callback."
  }, {
    heading: "removed-apis-2",
    content: "`onExtensionErrorWithContext(_:error:message:)`"
  }, {
    heading: "removed-apis-2",
    content: "v4.4.0"
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
  }, {
    heading: "removed-apis-2",
    content: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
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
  }, {
    id: "deprecated-apis-2",
    content: "Deprecated APIs"
  }, {
    id: "removed-apis-2",
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
}, {
  depth: 2,
  url: "#deprecated-apis-2",
  title: _jsx(_Fragment, {
    children: "Deprecated APIs"
  })
}, {
  depth: 2,
  url: "#removed-apis-2",
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
    canonicalPlatform: "web",
    platforms: '["android","ios","macos","web","windows","electron","flutter","react-native","javascript","unity","unreal","blueprint","python"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
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
              children: _jsx(_components.code, {
                children: "startRhythmPlayer"
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
              children: _jsx(_components.code, {
                children: "configRhythmPlayer"
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
              children: _jsx(_components.code, {
                children: "onRhythmPlayerStateChanged"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the state of the virtual metronome changes."
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
              children: _jsx(_components.code, {
                children: "addVideoWatermarkEx [1/2]"
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
                children: "addVideoWatermarkEx [2/2]"
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
              children: _jsx(_components.code, {
                children: "setRemoteSubscribeFallbackOption [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the fallback option for the subscribed video stream based on the network conditions."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setRemoteSubscribeFallbackOption [2/2]"
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
                children: "setRemoteVideoStreamType [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the type of the video stream to subscribe to."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setRemoteVideoStreamType [2/2]"
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
                children: "setRemoteDefaultVideoStreamType [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the default video stream type to subscribe to."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setRemoteDefaultVideoStreamType [2/2]"
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
                children: "setRemoteVideoStreamTypeEx [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the type of the video stream to subscribe to."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setRemoteVideoStreamTypeEx [2/2]"
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
                children: "destroy"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Destroys the music player."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "destroyMusicPlayer"
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
                children: "enableDualStreamMode [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables or disables dual-stream mode on the sender side."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setDualStreamMode [1/2]"
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
              children: _jsx(_components.code, {
                children: "enableDualStreamMode [2/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets dual-stream mode and the low video stream on the sender side."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setDualStreamMode [2/2]"
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
              children: _jsx(_components.code, {
                children: "enableDualStreamModeEx"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables or disables dual-stream mode on the sender side."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setDualStreamModeEx"
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
              children: _jsx(_components.code, {
                children: "enableWebSdkInteroperability"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables interoperability with the Agora Web SDK, applicable only in live streaming scenarios."
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
              children: _jsx(_components.code, {
                children: "setExternalAudioSource [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the external audio source."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "createCustomAudioTrack"
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
              children: _jsx(_components.code, {
                children: "setExternalAudioSource [2/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the parameters of the external audio source."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "createCustomAudioTrack"
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
              children: _jsx(_components.code, {
                children: "createDataStreamEx [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Creates a data stream to provide more reliable and ordered data transmission."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "createDataStreamEx [2/2]"
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
              children: _jsx(_components.code, {
                children: "pushExternalVideoFrameById [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Pushes external raw video frames to the SDK through a video track."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "pushExternalVideoFrameById [2/2]"
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
              children: _jsx(_components.code, {
                children: "pushExternalVideoFrame [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Pushes external raw video frames to the SDK."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "pushExternalVideoFrame [2/2]"
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
              children: _jsx(_components.code, {
                children: "setLocalVideoMirrorMode"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the local video mirror mode."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "setupLocalVideo"
              }), " or ", _jsx(_components.code, {
                children: "setLocalRenderMode [2/2]"
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
              children: _jsx(_components.code, {
                children: "setLocalRenderMode [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the display mode of the local video."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setLocalRenderMode [2/2]"
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
              children: _jsx(_components.code, {
                children: "setLogFileSize"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the size of the SDK log file."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "config"
              }), " parameter in ", _jsx(_components.code, {
                children: "create [2/2]"
              }), "."]
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
              children: _jsx(_components.code, {
                children: "setLogFilter"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the SDK log filter level."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "config"
              }), " parameter in ", _jsx(_components.code, {
                children: "create [2/2]"
              }), "."]
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
              children: _jsx(_components.code, {
                children: "setLogFile"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the SDK log output file."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "config"
              }), " parameter in ", _jsx(_components.code, {
                children: "create [2/2]"
              }), "."]
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
              children: _jsx(_components.code, {
                children: "setLogLevel"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the SDK log output level."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use the ", _jsx(_components.code, {
                children: "config"
              }), " parameter in ", _jsx(_components.code, {
                children: "create [2/2]"
              }), "."]
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
              children: _jsx(_components.code, {
                children: "setAudioProfile [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the audio profile and audio scenario."
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "setAudioProfile [2/2]"
              }), " or ", _jsx(_components.code, {
                children: "setAudioScenario"
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
              children: _jsx(_components.code, {
                children: "startAudioMixing [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Starts playing a music file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startAudioMixing [2/2]"
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
              children: _jsx(_components.code, {
                children: "preload [1/2]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Preloads music resources."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "preload [2/2]"
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
              children: _jsx(_components.code, {
                children: "addVideoWatermark [1/3]"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Adds a watermark image to the local video."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "addVideoWatermark [2/3]"
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
              children: _jsx(_components.code, {
                children: "getBlue"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Gets the blue component of the background color."
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
              children: _jsx(_components.code, {
                children: "getGreen"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Gets the green component of the background color."
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
              children: _jsx(_components.code, {
                children: "getRed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Gets the red component of the background color."
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
              children: _jsx(_components.code, {
                children: "setBlue"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the blue component of the background color."
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
              children: _jsx(_components.code, {
                children: "setGreen"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the green component of the background color."
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
              children: _jsx(_components.code, {
                children: "setRed"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the red component of the background color."
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
              children: _jsx(_components.code, {
                children: "onAudioMixingFinished"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when local music playback finishes."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onAudioMixingStateChanged"
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
              children: _jsx(_components.code, {
                children: "onAudioQuality"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Reports the statistics of the audio streams sent by each remote user."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onRemoteAudioStats"
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
              children: _jsx(_components.code, {
                children: "onConnectionBanned"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the connection is banned by the Agora server."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onConnectionStateChanged"
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
              children: _jsx(_components.code, {
                children: "onConnectionInterrupted"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the connection is interrupted."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onConnectionStateChanged"
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
              children: _jsx(_components.code, {
                children: "onFirstRemoteAudioFrame"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the first remote audio frame is received."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onRemoteAudioStateChanged"
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
              children: _jsx(_components.code, {
                children: "onFirstRemoteAudioDecoded"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the first remote audio frame is decoded."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onRemoteAudioStateChanged"
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
              children: _jsx(_components.code, {
                children: "onRemoteAudioTransportStats"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Reports the transport-layer statistics of each remote audio stream."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onRemoteAudioStats"
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
              children: _jsx(_components.code, {
                children: "onRemoteVideoTransportStats"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Reports the transport-layer statistics of each remote video stream."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onRemoteVideoStats"
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
              children: _jsx(_components.code, {
                children: "onUserEnableLocalVideo"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when a specified remote user enables or disables local video capture."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onRemoteVideoStateChanged"
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
              children: _jsx(_components.code, {
                children: "onVideoStopped"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when video playback stops."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onLocalVideoStateChanged"
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
                children: "setLocalPublishFallbackOption"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the fallback option for the published audio and video stream based on the network conditions."
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
              children: _jsx(_components.code, {
                children: "onLocalPublishFallbackToAudioOnly"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the local published stream falls back to audio-only."
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
              children: _jsx(_components.code, {
                children: "onDownlinkNetworkInfoUpdated"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the downlink network information changes."
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
              children: _jsx(_components.code, {
                children: "enableWirelessAccelerate"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables or disables Wi-Fi acceleration."
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
              children: _jsx(_components.code, {
                children: "onWlAccStats"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Reports Wi-Fi acceleration statistics."
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
              children: _jsx(_components.code, {
                children: "onWlAccMessage"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Reports Wi-Fi acceleration messages."
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
              children: _jsx(_components.code, {
                children: "WlAccStats"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Wi-Fi acceleration statistics."
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
              children: _jsx(_components.code, {
                children: "setVideoProfile"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the video encoder configuration."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setVideoEncoderConfiguration"
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
                children: "setRemoteRenderMode(userId, renderMode)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Sets the display mode of the remote view."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "setRemoteRenderMode"
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
                children: "CreateRendererView"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Creates a ", _jsx(_components.code, {
                children: "RendererView"
              }), "."]
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use Android's native ", _jsx(_components.code, {
                children: "SurfaceView"
              }), "."]
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
                children: "CreateTextureView"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Creates a ", _jsx(_components.code, {
                children: "TextureView"
              }), "."]
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Use Android's native ", _jsx(_components.code, {
                children: "TextureView"
              }), "."]
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
                children: "openWithCustomSource"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Opens a custom media resource file."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "openWithMediaSource"
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
                children: "startEchoTest()"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Starts the voice call loop test."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startEchoTest"
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
                children: "startEchoTest(intervalInSeconds)"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Starts the voice call loop test."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startEchoTest"
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
                children: "setEncryptionMode"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables the built-in encryption scheme."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "enableEncryption"
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
                children: "setEncryptionSecret"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enables built-in encryption and sets the data encryption password."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "enableEncryption"
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
                children: "onEvent"
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
              children: _jsx(_components.code, {
                children: "onEventWithContext"
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
                children: "onStarted"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the plugin is enabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onStartedWithContext"
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
                children: "onStopped"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Occurs when the plugin is disabled."
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "onStoppedWithContext"
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
                children: "onError"
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
              children: _jsx(_components.code, {
                children: "onErrorWithContext"
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
      platform: "ios",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "ios"
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
                href: "../../media-push/index.md",
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
                href: "../../media-push/index.md",
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
                href: "../../media-push/index.md",
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
                href: "../../media-push/index.md",
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
                href: "../../media-push/index.md",
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
                href: "../../media-push/index.md",
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
                href: "../../media-push/index.md",
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
                href: "../../media-push/index.md",
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
                href: "../../media-push/index.md",
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
              children: "Enables the virtual metronome"
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
              children: "Create a data flow"
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
              children: "Wi-Fi acceleration stats"
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
              }), " class"]
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
        canonicalPlatform: "web",
        platform: "macos"
      }), _jsx(_components.p, {
        children: "This page lists the deprecated and removed APIs in the SDK and their suggested alternatives."
      }), _jsx(_components.h2, {
        id: "deprecated-apis-2",
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
              children: "Create a data flow"
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
        id: "removed-apis-2",
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
              }), " class"]
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
    }), _jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "windows",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "windows"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "electron",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "electron"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "flutter",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "flutter"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "react-native",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "react-native"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "javascript",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "javascript"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "unity",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "unity"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "unreal",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "unreal"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "blueprint",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "blueprint"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "python",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "python"
      }), _jsx(_components.p, {
        children: "This page is not yet available for Voice Calling on this platform. Refer to the API reference for information about deprecated APIs."
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
