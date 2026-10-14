import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "API 下架说明",
  description: "本页介绍 SDK 中已废弃和删除的 API。"
};
export let _markdown = `

## 已废弃 API [#已废弃-api]

废弃后的 API 预计会在 1 年左右正式下架。声网建议你尽快使用推荐的 API 进行替换，以免影响线上业务。

| API                                                                                                                                              | 描述                                                                                                                                        | 替代 API                                                                                                                                                                                                                             | 废弃版本   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| [startRhythmPlayer](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_startrhythmplayer)                                     | 启用虚拟节拍器。                                                                                                                                  | -                                                                                                                                                                                                                                  | v4.6.0 |
| [configRhythmPlayer](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_configrhythmplayer)                                   | 配置虚拟节拍器。                                                                                                                                  | -                                                                                                                                                                                                                                  | v4.6.0 |
| [onRhythmPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#callback_irtcengineeventhandler_onrhythmplayerstatechanged)  | 虚拟节拍器状态发生变化回调。                                                                                                                            | -                                                                                                                                                                                                                                  | v4.6.0 |
| [addVideoWatermarkEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex)     | 向本地视频添加水印图像。                                                                                                                              | 请改用 [addVideoWatermarkEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex1)                                                                                  | v4.6.0 |
| [setRemoteSubscribeFallbackOption \\[1/2\\]](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption)   | 根据网络状况设置订阅端的视频流回退选项。                                                                                                                      | [setRemoteSubscribeFallbackOption \\[2/2\\]](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption2)                                                                                    | v4.4.0 |
| [setRemoteVideoStreamType \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype)               | 设置要订阅的视频流类型。                                                                                                                              | [setRemoteVideoStreamType \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype2)                                                                                                | v4.4.0 |
| [setRemoteDefaultVideoStreamType \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype) | 设置默认订阅的视频流类型。                                                                                                                             | [setRemoteDefaultVideoStreamType \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype2)                                                                                  | v4.4.0 |
| [setRemoteVideoStreamTypeEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex)         | 设置要订阅的视频流类型。                                                                                                                              | [setRemoteVideoStreamTypeEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex2)                                                                                          | v4.4.0 |
| [destroy](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_destroy_imusicplayer)                                                   | 销毁音乐播放器。                                                                                                                                  | [destroyMusicPlayer](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroymusicplayer)                                                                                                                     | v4.4.0 |
| [enableDualStreamMode \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_enabledualstreammode)                       | 在发送端启用或禁用双流模式。                                                                                                                            | [setDualStreamMode \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode)                                                                                                               | v4.2.0 |
| [enableDualStreamMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_enabledualstreammode3)                      | 设置发送端的双流模式和视频小流。                                                                                                                          | [setDualStreamMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode2)                                                                                                              | v4.2.0 |
| [enableDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_enabledualstreammodeex)                         | 在发送端启用或关闭双流模式。                                                                                                                            | [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex)                                                                                                                 | v4.2.0 |
| [enableWebSdkInteroperability](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enablewebsdkinteroperability)                   | 启用或关闭与声网 Web SDK 的互通功能，仅适用于直播场景。                                                                                                          | -                                                                                                                                                                                                                                  | v4.0.0 |
| [setExternalAudioSource \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource)    | 设置外部音频源。                                                                                                                                  | [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack)                                                                                              | v4.0.0 |
| [setExternalAudioSource \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource2)   | 设置外部音频源参数。                                                                                                                                | [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack)                                                                                              | v4.0.0 |
| [createDataStreamEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex1)                          | 创建数据流以提升数据传输的可靠性和顺序性。                                                                                                                     | [createDataStreamEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex2)                                                                                                            | v4.0.0 |
| [pushExternalVideoFrameById \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe)        | 通过视频轨道向 SDK 推送外部原始视频帧。                                                                                                                    | [pushExternalVideoFrameById \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe3)                                                                                         | v4.0.0 |
| [pushExternalVideoFrame \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe2)           | 将外部原始视频帧推送至 SDK。                                                                                                                          | [pushExternalVideoFrame \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe4)                                                                                             | v4.0.0 |
| [setLocalVideoMirrorMode](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalvideomirrormode)                         | 设置本地视频镜像模式。                                                                                                                               | [setupLocalVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo) 或 [setLocalRenderMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode2) | v4.0.0 |
| [setLocalRenderMode \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode1)                          | 设置本地视频的显示模式。                                                                                                                              | [setLocalRenderMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode2)                                                                                                            | v4.0.0 |
| [setLogFileSize](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilesize)                                               | 设置 SDK 日志文件的大小。                                                                                                                           | 使用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 中的 config 参数                                                                                                                            | v4.0.0 |
| [setLogFilter](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilter)                                                   | 设置 SDK 的日志输出等级。                                                                                                                           | 使用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 中的 config 参数                                                                                                                            | v4.0.0 |
| [setLogFile](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfile)                                                       | 设置 SDK 输出日志文件。                                                                                                                            | 使用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 中的 config 参数                                                                                                                            | v4.0.0 |
| [setLogLevel](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setloglevel)                                                     | 设置 SDK 的输出日志等级。                                                                                                                           | 使用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 中的 config 参数                                                                                                                            | v4.0.0 |
| [setAudioProfile \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile)                                     | 设置音频配置和音频场景。                                                                                                                              | [setAudioProfile \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile2) 或 [setAudioScenario](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario)             | v4.0.0 |
| [startAudioMixing \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing)                               | 开始播放音乐文件。                                                                                                                                 | [startAudioMixing \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing2)                                                                                                                | v4.0.0 |
| [preload \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload)                                                 | 预加载音乐资源。                                                                                                                                  | [preload \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload2)                                                                                                                                  | v4.0.0 |
| [addVideoWatermark \\[1/3\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark1)          | 向本地视频添加水印图像。                                                                                                                              | [addVideoWatermark \\[2/3\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark2)                                                                                            | v4.0.0 |
| [getBlue](/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-getblue)                                           | 获取背景颜色的蓝色分量。                                                                                                                              | -                                                                                                                                                                                                                                  | v4.0.0 |
| [getGreen](/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-getgreen)                                         | 获取背景颜色的绿色分量。                                                                                                                              | -                                                                                                                                                                                                                                  | v4.0.0 |
| [getRed](/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-getred)                                             | 获取背景颜色的红色分量。                                                                                                                              | -                                                                                                                                                                                                                                  | v4.0.0 |
| [setBlue](/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-setblue)                                           | 设置背景颜色的蓝色分量。                                                                                                                              | -                                                                                                                                                                                                                                  | v4.0.0 |
| [setGreen](/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-setgreen)                                         | 设置背景颜色的绿色分量。                                                                                                                              | -                                                                                                                                                                                                                                  | v4.0.0 |
| [setRed](/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-setred)                                             | 设置背景颜色中红色分量的值。                                                                                                                            | -                                                                                                                                                                                                                                  | v4.0.0 |
| [onAudioMixingFinished](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingfinished)            | 本地音乐文件播放结束回调。                                                                                                                             | [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged)                                                                                      | v4.0.0 |
| [onAudioQuality](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudioquality)                              | 报告每个远端用户发送的音频流的统计信息回调。                                                                                                                    | [onRemoteAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats)                                                                                                        | v4.0.0 |
| [onConnectionBanned](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionbanned)                      | 连接被声网服务器封禁时触发的回调。                                                                                                                         | [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged)                                                                                            | v4.0.0 |
| [onConnectionInterrupted](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectioninterrupted)            | [onConnectionInterrupted](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectioninterrupted) 回调。 | [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged)                                                                                            | v4.0.0 |
| [onFirstRemoteAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudioframe)            | 远端用户音频首帧已接收回调。                                                                                                                            | [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged)                                                                                          | v4.0.0 |
| [onFirstRemoteAudioDecoded](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudiodecoded)        | 首帧远端音频解码完成回调。                                                                                                                             | [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged)                                                                                          | v4.0.0 |
| [onRemoteAudioTransportStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiotransportstats)    | 上报每个远端音频流的传输层统计信息。                                                                                                                        | [onRemoteAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats)                                                                                                        | v4.0.0 |
| [onRemoteVideoTransportStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideotransportstats)    | 远端视频流传输层统计信息回调。                                                                                                                           | [onRemoteVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats)                                                                                                        | v4.0.0 |
| [onUserEnableLocalVideo](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onuserenablelocalvideo)              | 指定远端用户启用或关闭本地视频采集功能时触发的回调。                                                                                                                | [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged)                                                                                          | v4.0.0 |
| [onVideoStopped](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideostopped)                              | 视频停止播放时触发的回调。                                                                                                                             | [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged)                                                                                            | v4.0.0 |

## 已删除 API [#已删除-api]

API 已在 SDK 中删除。请使用推荐的替代 API 实现相关功能。

| API                                     | 描述                  | 替代 API                                                                                                                              | 删除版本   |
| --------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------ |
| setLocalPublishFallbackOption           | 设置弱网条件下发布的音视频流回退选项。 | -                                                                                                                                   | v4.6.0 |
| onLocalPublishFallbackToAudioOnly       | 本地发布流已回退为音频流回调。     | -                                                                                                                                   | v4.6.0 |
| onDownlinkNetworkInfoUpdated            | 下行网络信息变化回调。         | -                                                                                                                                   | v4.6.0 |
| enableWirelessAccelerate                | 开启或关闭 Wi-Fi 加速功能。   | -                                                                                                                                   | v4.6.0 |
| onWlAccStats                            | 报告 Wi-Fi 加速效果。      | -                                                                                                                                   | v4.6.0 |
| onWlAccMessage                          | 报告 Wi-Fi 加速消息。      | -                                                                                                                                   | v4.6.0 |
| WlAccStats                              | Wi-Fi 加速统计信息。       | -                                                                                                                                   | v4.6.0 |
| setVideoProfile                         | 设置视频编码配置。           | [setVideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration)      | v4.4.0 |
| setRemoteRenderMode(userId, renderMode) | 设置远端视图显示模式。         | [setRemoteRenderMode](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setremoterendermode2)                   | v4.4.0 |
| CreateRendererView                      | 创建 RendererView。    | Android 原生的 [SurfaceView](https://developer.android.com/reference/android/view/SurfaceView) 方法                                      | v4.4.0 |
| CreateTextureView                       | 创建 TextureView。     | Android 原生的 [TextureView](https://developer.android.com/reference/android/view/TextureView)。                                        | v4.4.0 |
| openWithCustomSource                    | 打开自定义媒体资源文件。        | [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) | v4.4.0 |
| startEchoTest()                         | 开始语音通话回路测试。         | [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3)                                   | v4.4.0 |
| startEchoTest(intervalInSeconds)        | 开始语音通话回路测试。         | [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3)                                   | v4.4.0 |
| setEncryptionMode                       | 启用内置的加密方案。          | [enableEncryption](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption)                              | v4.4.0 |
| setEncryptionSecret                     | 启用内置加密，并设置数据加密密码。   | [enableEncryption](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption)                              | v4.4.0 |
| onEvent                                 | 插件事件回调。             | [onEventWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensioneventwithcontext)       | v4.4.0 |
| onStarted                               | 插件启用回调。             | [onStartedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstartedwithcontext)   | v4.4.0 |
| onStopped                               | 插件禁用回调。             | [onStoppedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstoppedwithcontext)   | v4.4.0 |
| onError                                 | 插件出错回调。             | [onErrorWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionerrorwithcontext)       | v4.4.0 |
`;
export let structuredData = {
  contents: [{
    heading: "已废弃-api",
    content: "废弃后的 API 预计会在 1 年左右正式下架。声网建议你尽快使用推荐的 API 进行替换，以免影响线上业务。"
  }, {
    heading: "已废弃-api",
    content: "API"
  }, {
    heading: "已废弃-api",
    content: "描述"
  }, {
    heading: "已废弃-api",
    content: "替代 API"
  }, {
    heading: "已废弃-api",
    content: "废弃版本"
  }, {
    heading: "已废弃-api",
    content: "startRhythmPlayer"
  }, {
    heading: "已废弃-api",
    content: "启用虚拟节拍器。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.6.0"
  }, {
    heading: "已废弃-api",
    content: "configRhythmPlayer"
  }, {
    heading: "已废弃-api",
    content: "配置虚拟节拍器。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.6.0"
  }, {
    heading: "已废弃-api",
    content: "onRhythmPlayerStateChanged"
  }, {
    heading: "已废弃-api",
    content: "虚拟节拍器状态发生变化回调。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.6.0"
  }, {
    heading: "已废弃-api",
    content: "addVideoWatermarkEx \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "向本地视频添加水印图像。"
  }, {
    heading: "已废弃-api",
    content: "请改用 addVideoWatermarkEx \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.6.0"
  }, {
    heading: "已废弃-api",
    content: "setRemoteSubscribeFallbackOption \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "根据网络状况设置订阅端的视频流回退选项。"
  }, {
    heading: "已废弃-api",
    content: "setRemoteSubscribeFallbackOption \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.4.0"
  }, {
    heading: "已废弃-api",
    content: "setRemoteVideoStreamType \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "设置要订阅的视频流类型。"
  }, {
    heading: "已废弃-api",
    content: "setRemoteVideoStreamType \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.4.0"
  }, {
    heading: "已废弃-api",
    content: "setRemoteDefaultVideoStreamType \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "设置默认订阅的视频流类型。"
  }, {
    heading: "已废弃-api",
    content: "setRemoteDefaultVideoStreamType \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.4.0"
  }, {
    heading: "已废弃-api",
    content: "setRemoteVideoStreamTypeEx \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "设置要订阅的视频流类型。"
  }, {
    heading: "已废弃-api",
    content: "setRemoteVideoStreamTypeEx \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.4.0"
  }, {
    heading: "已废弃-api",
    content: "destroy"
  }, {
    heading: "已废弃-api",
    content: "销毁音乐播放器。"
  }, {
    heading: "已废弃-api",
    content: "destroyMusicPlayer"
  }, {
    heading: "已废弃-api",
    content: "v4.4.0"
  }, {
    heading: "已废弃-api",
    content: "enableDualStreamMode \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "在发送端启用或禁用双流模式。"
  }, {
    heading: "已废弃-api",
    content: "setDualStreamMode \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.2.0"
  }, {
    heading: "已废弃-api",
    content: "enableDualStreamMode \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "设置发送端的双流模式和视频小流。"
  }, {
    heading: "已废弃-api",
    content: "setDualStreamMode \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.2.0"
  }, {
    heading: "已废弃-api",
    content: "enableDualStreamModeEx"
  }, {
    heading: "已废弃-api",
    content: "在发送端启用或关闭双流模式。"
  }, {
    heading: "已废弃-api",
    content: "setDualStreamModeEx"
  }, {
    heading: "已废弃-api",
    content: "v4.2.0"
  }, {
    heading: "已废弃-api",
    content: "enableWebSdkInteroperability"
  }, {
    heading: "已废弃-api",
    content: "启用或关闭与声网 Web SDK 的互通功能，仅适用于直播场景。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setExternalAudioSource \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "设置外部音频源。"
  }, {
    heading: "已废弃-api",
    content: "createCustomAudioTrack"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setExternalAudioSource \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "设置外部音频源参数。"
  }, {
    heading: "已废弃-api",
    content: "createCustomAudioTrack"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "createDataStreamEx \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "创建数据流以提升数据传输的可靠性和顺序性。"
  }, {
    heading: "已废弃-api",
    content: "createDataStreamEx \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "pushExternalVideoFrameById \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "通过视频轨道向 SDK 推送外部原始视频帧。"
  }, {
    heading: "已废弃-api",
    content: "pushExternalVideoFrameById \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "pushExternalVideoFrame \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "将外部原始视频帧推送至 SDK。"
  }, {
    heading: "已废弃-api",
    content: "pushExternalVideoFrame \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setLocalVideoMirrorMode"
  }, {
    heading: "已废弃-api",
    content: "设置本地视频镜像模式。"
  }, {
    heading: "已废弃-api",
    content: "setupLocalVideo 或 setLocalRenderMode \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setLocalRenderMode \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "设置本地视频的显示模式。"
  }, {
    heading: "已废弃-api",
    content: "setLocalRenderMode \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setLogFileSize"
  }, {
    heading: "已废弃-api",
    content: "设置 SDK 日志文件的大小。"
  }, {
    heading: "已废弃-api",
    content: "使用 create \\[2/2] 中的 config 参数"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setLogFilter"
  }, {
    heading: "已废弃-api",
    content: "设置 SDK 的日志输出等级。"
  }, {
    heading: "已废弃-api",
    content: "使用 create \\[2/2] 中的 config 参数"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setLogFile"
  }, {
    heading: "已废弃-api",
    content: "设置 SDK 输出日志文件。"
  }, {
    heading: "已废弃-api",
    content: "使用 create \\[2/2] 中的 config 参数"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setLogLevel"
  }, {
    heading: "已废弃-api",
    content: "设置 SDK 的输出日志等级。"
  }, {
    heading: "已废弃-api",
    content: "使用 create \\[2/2] 中的 config 参数"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setAudioProfile \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "设置音频配置和音频场景。"
  }, {
    heading: "已废弃-api",
    content: "setAudioProfile \\[2/2] 或 setAudioScenario"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "startAudioMixing \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "开始播放音乐文件。"
  }, {
    heading: "已废弃-api",
    content: "startAudioMixing \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "preload \\[1/2]"
  }, {
    heading: "已废弃-api",
    content: "预加载音乐资源。"
  }, {
    heading: "已废弃-api",
    content: "preload \\[2/2]"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "addVideoWatermark \\[1/3]"
  }, {
    heading: "已废弃-api",
    content: "向本地视频添加水印图像。"
  }, {
    heading: "已废弃-api",
    content: "addVideoWatermark \\[2/3]"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "getBlue"
  }, {
    heading: "已废弃-api",
    content: "获取背景颜色的蓝色分量。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "getGreen"
  }, {
    heading: "已废弃-api",
    content: "获取背景颜色的绿色分量。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "getRed"
  }, {
    heading: "已废弃-api",
    content: "获取背景颜色的红色分量。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setBlue"
  }, {
    heading: "已废弃-api",
    content: "设置背景颜色的蓝色分量。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setGreen"
  }, {
    heading: "已废弃-api",
    content: "设置背景颜色的绿色分量。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "setRed"
  }, {
    heading: "已废弃-api",
    content: "设置背景颜色中红色分量的值。"
  }, {
    heading: "已废弃-api",
    content: "-"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onAudioMixingFinished"
  }, {
    heading: "已废弃-api",
    content: "本地音乐文件播放结束回调。"
  }, {
    heading: "已废弃-api",
    content: "onAudioMixingStateChanged"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onAudioQuality"
  }, {
    heading: "已废弃-api",
    content: "报告每个远端用户发送的音频流的统计信息回调。"
  }, {
    heading: "已废弃-api",
    content: "onRemoteAudioStats"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onConnectionBanned"
  }, {
    heading: "已废弃-api",
    content: "连接被声网服务器封禁时触发的回调。"
  }, {
    heading: "已废弃-api",
    content: "onConnectionStateChanged"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onConnectionInterrupted"
  }, {
    heading: "已废弃-api",
    content: "onConnectionInterrupted 回调。"
  }, {
    heading: "已废弃-api",
    content: "onConnectionStateChanged"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onFirstRemoteAudioFrame"
  }, {
    heading: "已废弃-api",
    content: "远端用户音频首帧已接收回调。"
  }, {
    heading: "已废弃-api",
    content: "onRemoteAudioStateChanged"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onFirstRemoteAudioDecoded"
  }, {
    heading: "已废弃-api",
    content: "首帧远端音频解码完成回调。"
  }, {
    heading: "已废弃-api",
    content: "onRemoteAudioStateChanged"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onRemoteAudioTransportStats"
  }, {
    heading: "已废弃-api",
    content: "上报每个远端音频流的传输层统计信息。"
  }, {
    heading: "已废弃-api",
    content: "onRemoteAudioStats"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onRemoteVideoTransportStats"
  }, {
    heading: "已废弃-api",
    content: "远端视频流传输层统计信息回调。"
  }, {
    heading: "已废弃-api",
    content: "onRemoteVideoStats"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onUserEnableLocalVideo"
  }, {
    heading: "已废弃-api",
    content: "指定远端用户启用或关闭本地视频采集功能时触发的回调。"
  }, {
    heading: "已废弃-api",
    content: "onRemoteVideoStateChanged"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已废弃-api",
    content: "onVideoStopped"
  }, {
    heading: "已废弃-api",
    content: "视频停止播放时触发的回调。"
  }, {
    heading: "已废弃-api",
    content: "onLocalVideoStateChanged"
  }, {
    heading: "已废弃-api",
    content: "v4.0.0"
  }, {
    heading: "已删除-api",
    content: "API 已在 SDK 中删除。请使用推荐的替代 API 实现相关功能。"
  }, {
    heading: "已删除-api",
    content: "API"
  }, {
    heading: "已删除-api",
    content: "描述"
  }, {
    heading: "已删除-api",
    content: "替代 API"
  }, {
    heading: "已删除-api",
    content: "删除版本"
  }, {
    heading: "已删除-api",
    content: "setLocalPublishFallbackOption"
  }, {
    heading: "已删除-api",
    content: "设置弱网条件下发布的音视频流回退选项。"
  }, {
    heading: "已删除-api",
    content: "-"
  }, {
    heading: "已删除-api",
    content: "v4.6.0"
  }, {
    heading: "已删除-api",
    content: "onLocalPublishFallbackToAudioOnly"
  }, {
    heading: "已删除-api",
    content: "本地发布流已回退为音频流回调。"
  }, {
    heading: "已删除-api",
    content: "-"
  }, {
    heading: "已删除-api",
    content: "v4.6.0"
  }, {
    heading: "已删除-api",
    content: "onDownlinkNetworkInfoUpdated"
  }, {
    heading: "已删除-api",
    content: "下行网络信息变化回调。"
  }, {
    heading: "已删除-api",
    content: "-"
  }, {
    heading: "已删除-api",
    content: "v4.6.0"
  }, {
    heading: "已删除-api",
    content: "enableWirelessAccelerate"
  }, {
    heading: "已删除-api",
    content: "开启或关闭 Wi-Fi 加速功能。"
  }, {
    heading: "已删除-api",
    content: "-"
  }, {
    heading: "已删除-api",
    content: "v4.6.0"
  }, {
    heading: "已删除-api",
    content: "onWlAccStats"
  }, {
    heading: "已删除-api",
    content: "报告 Wi-Fi 加速效果。"
  }, {
    heading: "已删除-api",
    content: "-"
  }, {
    heading: "已删除-api",
    content: "v4.6.0"
  }, {
    heading: "已删除-api",
    content: "onWlAccMessage"
  }, {
    heading: "已删除-api",
    content: "报告 Wi-Fi 加速消息。"
  }, {
    heading: "已删除-api",
    content: "-"
  }, {
    heading: "已删除-api",
    content: "v4.6.0"
  }, {
    heading: "已删除-api",
    content: "WlAccStats"
  }, {
    heading: "已删除-api",
    content: "Wi-Fi 加速统计信息。"
  }, {
    heading: "已删除-api",
    content: "-"
  }, {
    heading: "已删除-api",
    content: "v4.6.0"
  }, {
    heading: "已删除-api",
    content: "setVideoProfile"
  }, {
    heading: "已删除-api",
    content: "设置视频编码配置。"
  }, {
    heading: "已删除-api",
    content: "setVideoEncoderConfiguration"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "setRemoteRenderMode(userId, renderMode)"
  }, {
    heading: "已删除-api",
    content: "设置远端视图显示模式。"
  }, {
    heading: "已删除-api",
    content: "setRemoteRenderMode"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "CreateRendererView"
  }, {
    heading: "已删除-api",
    content: "创建 RendererView。"
  }, {
    heading: "已删除-api",
    content: "Android 原生的 SurfaceView 方法"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "CreateTextureView"
  }, {
    heading: "已删除-api",
    content: "创建 TextureView。"
  }, {
    heading: "已删除-api",
    content: "Android 原生的 TextureView。"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "openWithCustomSource"
  }, {
    heading: "已删除-api",
    content: "打开自定义媒体资源文件。"
  }, {
    heading: "已删除-api",
    content: "openWithMediaSource"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "startEchoTest()"
  }, {
    heading: "已删除-api",
    content: "开始语音通话回路测试。"
  }, {
    heading: "已删除-api",
    content: "startEchoTest"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "startEchoTest(intervalInSeconds)"
  }, {
    heading: "已删除-api",
    content: "开始语音通话回路测试。"
  }, {
    heading: "已删除-api",
    content: "startEchoTest"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "setEncryptionMode"
  }, {
    heading: "已删除-api",
    content: "启用内置的加密方案。"
  }, {
    heading: "已删除-api",
    content: "enableEncryption"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "setEncryptionSecret"
  }, {
    heading: "已删除-api",
    content: "启用内置加密，并设置数据加密密码。"
  }, {
    heading: "已删除-api",
    content: "enableEncryption"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "onEvent"
  }, {
    heading: "已删除-api",
    content: "插件事件回调。"
  }, {
    heading: "已删除-api",
    content: "onEventWithContext"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "onStarted"
  }, {
    heading: "已删除-api",
    content: "插件启用回调。"
  }, {
    heading: "已删除-api",
    content: "onStartedWithContext"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "onStopped"
  }, {
    heading: "已删除-api",
    content: "插件禁用回调。"
  }, {
    heading: "已删除-api",
    content: "onStoppedWithContext"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }, {
    heading: "已删除-api",
    content: "onError"
  }, {
    heading: "已删除-api",
    content: "插件出错回调。"
  }, {
    heading: "已删除-api",
    content: "onErrorWithContext"
  }, {
    heading: "已删除-api",
    content: "v4.4.0"
  }],
  headings: [{
    id: "已废弃-api",
    content: "已废弃 API"
  }, {
    id: "已删除-api",
    content: "已删除 API"
  }]
};
export let toc = [{
  depth: 2,
  url: "#已废弃-api",
  title: _jsx(_Fragment, {
    children: "已废弃 API"
  })
}, {
  depth: 2,
  url: "#已删除-api",
  title: _jsx(_Fragment, {
    children: "已删除 API"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "已废弃-api",
      children: "已废弃 API"
    }), `
`, _jsx(_components.p, {
      children: "废弃后的 API 预计会在 1 年左右正式下架。声网建议你尽快使用推荐的 API 进行替换，以免影响线上业务。"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          }), _jsx(_components.th, {
            children: "替代 API"
          }), _jsx(_components.th, {
            children: "废弃版本"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_startrhythmplayer",
              children: "startRhythmPlayer"
            })
          }), _jsx(_components.td, {
            children: "启用虚拟节拍器。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_configrhythmplayer",
              children: "configRhythmPlayer"
            })
          }), _jsx(_components.td, {
            children: "配置虚拟节拍器。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/rhythmplayer#callback_irtcengineeventhandler_onrhythmplayerstatechanged",
              children: "onRhythmPlayerStateChanged"
            })
          }), _jsx(_components.td, {
            children: "虚拟节拍器状态发生变化回调。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex",
              children: "addVideoWatermarkEx [1/2]"
            })
          }), _jsx(_components.td, {
            children: "向本地视频添加水印图像。"
          }), _jsxs(_components.td, {
            children: ["请改用 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex1",
              children: "addVideoWatermarkEx [2/2]"
            })]
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption",
              children: "setRemoteSubscribeFallbackOption [1/2]"
            })
          }), _jsx(_components.td, {
            children: "根据网络状况设置订阅端的视频流回退选项。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption2",
              children: "setRemoteSubscribeFallbackOption [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype",
              children: "setRemoteVideoStreamType [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置要订阅的视频流类型。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype2",
              children: "setRemoteVideoStreamType [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype",
              children: "setRemoteDefaultVideoStreamType [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置默认订阅的视频流类型。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype2",
              children: "setRemoteDefaultVideoStreamType [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex",
              children: "setRemoteVideoStreamTypeEx [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置要订阅的视频流类型。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex2",
              children: "setRemoteVideoStreamTypeEx [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_destroy_imusicplayer",
              children: "destroy"
            })
          }), _jsx(_components.td, {
            children: "销毁音乐播放器。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroymusicplayer",
              children: "destroyMusicPlayer"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_enabledualstreammode",
              children: "enableDualStreamMode [1/2]"
            })
          }), _jsx(_components.td, {
            children: "在发送端启用或禁用双流模式。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode",
              children: "setDualStreamMode [1/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.2.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_enabledualstreammode3",
              children: "enableDualStreamMode [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置发送端的双流模式和视频小流。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode2",
              children: "setDualStreamMode [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.2.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_enabledualstreammodeex",
              children: "enableDualStreamModeEx"
            })
          }), _jsx(_components.td, {
            children: "在发送端启用或关闭双流模式。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
              children: "setDualStreamModeEx"
            })
          }), _jsx(_components.td, {
            children: "v4.2.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enablewebsdkinteroperability",
              children: "enableWebSdkInteroperability"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭与声网 Web SDK 的互通功能，仅适用于直播场景。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource",
              children: "setExternalAudioSource [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置外部音频源。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
              children: "createCustomAudioTrack"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource2",
              children: "setExternalAudioSource [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置外部音频源参数。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
              children: "createCustomAudioTrack"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex1",
              children: "createDataStreamEx [1/2]"
            })
          }), _jsx(_components.td, {
            children: "创建数据流以提升数据传输的可靠性和顺序性。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex2",
              children: "createDataStreamEx [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe",
              children: "pushExternalVideoFrameById [1/2]"
            })
          }), _jsx(_components.td, {
            children: "通过视频轨道向 SDK 推送外部原始视频帧。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe3",
              children: "pushExternalVideoFrameById [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe2",
              children: "pushExternalVideoFrame [1/2]"
            })
          }), _jsx(_components.td, {
            children: "将外部原始视频帧推送至 SDK。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe4",
              children: "pushExternalVideoFrame [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalvideomirrormode",
              children: "setLocalVideoMirrorMode"
            })
          }), _jsx(_components.td, {
            children: "设置本地视频镜像模式。"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo",
              children: "setupLocalVideo"
            }), " 或 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode2",
              children: "setLocalRenderMode [2/2]"
            })]
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode1",
              children: "setLocalRenderMode [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置本地视频的显示模式。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode2",
              children: "setLocalRenderMode [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilesize",
              children: "setLogFileSize"
            })
          }), _jsx(_components.td, {
            children: "设置 SDK 日志文件的大小。"
          }), _jsxs(_components.td, {
            children: ["使用 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
              children: "create [2/2]"
            }), " 中的 config 参数"]
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilter",
              children: "setLogFilter"
            })
          }), _jsx(_components.td, {
            children: "设置 SDK 的日志输出等级。"
          }), _jsxs(_components.td, {
            children: ["使用 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
              children: "create [2/2]"
            }), " 中的 config 参数"]
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfile",
              children: "setLogFile"
            })
          }), _jsx(_components.td, {
            children: "设置 SDK 输出日志文件。"
          }), _jsxs(_components.td, {
            children: ["使用 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
              children: "create [2/2]"
            }), " 中的 config 参数"]
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setloglevel",
              children: "setLogLevel"
            })
          }), _jsx(_components.td, {
            children: "设置 SDK 的输出日志等级。"
          }), _jsxs(_components.td, {
            children: ["使用 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
              children: "create [2/2]"
            }), " 中的 config 参数"]
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile",
              children: "setAudioProfile [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置音频配置和音频场景。"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile2",
              children: "setAudioProfile [2/2]"
            }), " 或 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario",
              children: "setAudioScenario"
            })]
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing",
              children: "startAudioMixing [1/2]"
            })
          }), _jsx(_components.td, {
            children: "开始播放音乐文件。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing2",
              children: "startAudioMixing [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload",
              children: "preload [1/2]"
            })
          }), _jsx(_components.td, {
            children: "预加载音乐资源。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload2",
              children: "preload [2/2]"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark1",
              children: "addVideoWatermark [1/3]"
            })
          }), _jsx(_components.td, {
            children: "向本地视频添加水印图像。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark2",
              children: "addVideoWatermark [2/3]"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-getblue",
              children: "getBlue"
            })
          }), _jsx(_components.td, {
            children: "获取背景颜色的蓝色分量。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-getgreen",
              children: "getGreen"
            })
          }), _jsx(_components.td, {
            children: "获取背景颜色的绿色分量。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-getred",
              children: "getRed"
            })
          }), _jsx(_components.td, {
            children: "获取背景颜色的红色分量。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-setblue",
              children: "setBlue"
            })
          }), _jsx(_components.td, {
            children: "设置背景颜色的蓝色分量。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-setgreen",
              children: "setGreen"
            })
          }), _jsx(_components.td, {
            children: "设置背景颜色的绿色分量。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/class-and-enum/standalone-apis/api-livetranscoding-setred",
              children: "setRed"
            })
          }), _jsx(_components.td, {
            children: "设置背景颜色中红色分量的值。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingfinished",
              children: "onAudioMixingFinished"
            })
          }), _jsx(_components.td, {
            children: "本地音乐文件播放结束回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
              children: "onAudioMixingStateChanged"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudioquality",
              children: "onAudioQuality"
            })
          }), _jsx(_components.td, {
            children: "报告每个远端用户发送的音频流的统计信息回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats",
              children: "onRemoteAudioStats"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionbanned",
              children: "onConnectionBanned"
            })
          }), _jsx(_components.td, {
            children: "连接被声网服务器封禁时触发的回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: "onConnectionStateChanged"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectioninterrupted",
              children: "onConnectionInterrupted"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectioninterrupted",
              children: "onConnectionInterrupted"
            }), " 回调。"]
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: "onConnectionStateChanged"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudioframe",
              children: "onFirstRemoteAudioFrame"
            })
          }), _jsx(_components.td, {
            children: "远端用户音频首帧已接收回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
              children: "onRemoteAudioStateChanged"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudiodecoded",
              children: "onFirstRemoteAudioDecoded"
            })
          }), _jsx(_components.td, {
            children: "首帧远端音频解码完成回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
              children: "onRemoteAudioStateChanged"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiotransportstats",
              children: "onRemoteAudioTransportStats"
            })
          }), _jsx(_components.td, {
            children: "上报每个远端音频流的传输层统计信息。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats",
              children: "onRemoteAudioStats"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideotransportstats",
              children: "onRemoteVideoTransportStats"
            })
          }), _jsx(_components.td, {
            children: "远端视频流传输层统计信息回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats",
              children: "onRemoteVideoStats"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onuserenablelocalvideo",
              children: "onUserEnableLocalVideo"
            })
          }), _jsx(_components.td, {
            children: "指定远端用户启用或关闭本地视频采集功能时触发的回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged",
              children: "onRemoteVideoStateChanged"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideostopped",
              children: "onVideoStopped"
            })
          }), _jsx(_components.td, {
            children: "视频停止播放时触发的回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
              children: "onLocalVideoStateChanged"
            })
          }), _jsx(_components.td, {
            children: "v4.0.0"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "已删除-api",
      children: "已删除 API"
    }), `
`, _jsx(_components.p, {
      children: "API 已在 SDK 中删除。请使用推荐的替代 API 实现相关功能。"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          }), _jsx(_components.th, {
            children: "替代 API"
          }), _jsx(_components.th, {
            children: "删除版本"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "setLocalPublishFallbackOption"
          }), _jsx(_components.td, {
            children: "设置弱网条件下发布的音视频流回退选项。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "onLocalPublishFallbackToAudioOnly"
          }), _jsx(_components.td, {
            children: "本地发布流已回退为音频流回调。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "onDownlinkNetworkInfoUpdated"
          }), _jsx(_components.td, {
            children: "下行网络信息变化回调。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "enableWirelessAccelerate"
          }), _jsx(_components.td, {
            children: "开启或关闭 Wi-Fi 加速功能。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "onWlAccStats"
          }), _jsx(_components.td, {
            children: "报告 Wi-Fi 加速效果。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "onWlAccMessage"
          }), _jsx(_components.td, {
            children: "报告 Wi-Fi 加速消息。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "WlAccStats"
          }), _jsx(_components.td, {
            children: "Wi-Fi 加速统计信息。"
          }), _jsx(_components.td, {
            children: "-"
          }), _jsx(_components.td, {
            children: "v4.6.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "setVideoProfile"
          }), _jsx(_components.td, {
            children: "设置视频编码配置。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration",
              children: "setVideoEncoderConfiguration"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "setRemoteRenderMode(userId, renderMode)"
          }), _jsx(_components.td, {
            children: "设置远端视图显示模式。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setremoterendermode2",
              children: "setRemoteRenderMode"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "CreateRendererView"
          }), _jsx(_components.td, {
            children: "创建 RendererView。"
          }), _jsxs(_components.td, {
            children: ["Android 原生的 ", _jsx(_components.a, {
              href: "https://developer.android.com/reference/android/view/SurfaceView",
              children: "SurfaceView"
            }), " 方法"]
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "CreateTextureView"
          }), _jsx(_components.td, {
            children: "创建 TextureView。"
          }), _jsxs(_components.td, {
            children: ["Android 原生的 ", _jsx(_components.a, {
              href: "https://developer.android.com/reference/android/view/TextureView",
              children: "TextureView"
            }), "。"]
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "openWithCustomSource"
          }), _jsx(_components.td, {
            children: "打开自定义媒体资源文件。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
              children: "openWithMediaSource"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "startEchoTest()"
          }), _jsx(_components.td, {
            children: "开始语音通话回路测试。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3",
              children: "startEchoTest"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "startEchoTest(intervalInSeconds)"
          }), _jsx(_components.td, {
            children: "开始语音通话回路测试。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3",
              children: "startEchoTest"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "setEncryptionMode"
          }), _jsx(_components.td, {
            children: "启用内置的加密方案。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption",
              children: "enableEncryption"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "setEncryptionSecret"
          }), _jsx(_components.td, {
            children: "启用内置加密，并设置数据加密密码。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption",
              children: "enableEncryption"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "onEvent"
          }), _jsx(_components.td, {
            children: "插件事件回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensioneventwithcontext",
              children: "onEventWithContext"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "onStarted"
          }), _jsx(_components.td, {
            children: "插件启用回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstartedwithcontext",
              children: "onStartedWithContext"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "onStopped"
          }), _jsx(_components.td, {
            children: "插件禁用回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstoppedwithcontext",
              children: "onStoppedWithContext"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "onError"
          }), _jsx(_components.td, {
            children: "插件出错回调。"
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionerrorwithcontext",
              children: "onErrorWithContext"
            })
          }), _jsx(_components.td, {
            children: "v4.4.0"
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
