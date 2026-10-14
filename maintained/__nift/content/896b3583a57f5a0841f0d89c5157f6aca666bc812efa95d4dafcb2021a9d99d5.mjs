import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "API 概览",
  description: "声网通过全球部署的 SD-RTN™，提供可以灵活搭配的 API 组合，实现质量可靠的实时音视频通信。"
};
export let _markdown = `

<a id="rtc_api_overview__toc_initialize" />

## 初始化相关 [#初始化相关]

| API                                                                                                                 | 描述                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [create \\[1/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_create)                                 | 创建并初始化 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例。                         |
| [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize)                             | 创建并初始化 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例。                         |
| [addHandler](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_addhandler)                                 | 添加事件处理器。                                                                                                            |
| [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1)                              | 销毁 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例并释放相关资源。                      |
| [destroy \\[1/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_release)                               | 释放 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 实例。                             |
| [removeHandler](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_removehandler)                           | 移除指定的 [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler) 实例。 |
| [onEngineReleased](/zh-CN/api-reference/rtc/android/initialize#callback_irtcenginereleasecallback_onenginereleased) | [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 被释放时触发的回调。                         |

<a id="rtc_api_overview__toc_channel" />

## 频道相关 [#频道相关]

| API                                                                                                                               | 描述                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [setChannelProfile](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setchannelprofile)                                    | 设置频道场景。                                                                                  |
| [joinChannel \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel1)                                       | 加入一个频道。                                                                                  |
| [joinChannel \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel2)                                       | 加入频道并设置媒体选项。                                                                             |
| [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex)                                          | 加入一个频道。                                                                                  |
| [updateChannelMediaOptions](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions)                    | 在加入频道后更新频道媒体选项。                                                                          |
| [updateChannelMediaOptionsEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_updatechannelmediaoptionsex)              | 加入频道后更新频道媒体选项。                                                                           |
| [leaveChannel \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel)                                      | 离开频道。                                                                                    |
| [leaveChannel \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel2)                                     | 设置频道选项并离开频道。                                                                             |
| [leaveChannelEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex)                                | 离开频道。                                                                                    |
| [leaveChannelEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex2)                               | 设置频道参数并离开频道。                                                                             |
| [preloadChannel](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_preloadchannel)                                          | 预加载指定频道以缩短观众加入频道的时间。                                                                     |
| [updatePreloadChannelToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatepreloadchanneltoken)                    | 更新用于预加载频道的通配 Token。                                                                      |
| [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken)                                                  | 更新 Token。                                                                                |
| [setClientRole \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole1)                                   | 设置客户端实例的用户角色。                                                                            |
| [setClientRole \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole2)                                   | 设置直播场景下的用户角色和观众延迟等级。                                                                     |
| [getUserInfoByUidEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuidex)                                | 通过传入用户 ID 获取用户信息。                                                                        |
| [onClientRoleChanged](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechanged)               | 用户角色或观众延迟级别发生变化回调。                                                                       |
| [onClientRoleChangeFailed](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechangefailed)     | 切换用户角色失败时的回调。                                                                            |
| [onError](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onerror)                                       | SDK 运行期间发生错误时触发的回调。                                                                      |
| [onJoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess)             | 本地用户成功加入频道回调。                                                                            |
| [onLeaveChannel](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onleavechannel)                         | 用户离开频道回调。                                                                                |
| [onRejoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess)         | 用户重新加入频道回调。                                                                              |
| [onRenewTokenResult](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrenewtokenresult)                 | [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken) 调用结果回调。 |
| [onRequestToken](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrequesttoken)                         | Token 过期回调。                                                                              |
| [onRtcStats](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrtcstats)                                 | 报告当前通话统计信息的回调。                                                                           |
| [onTokenPrivilegeWillExpire](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_ontokenprivilegewillexpire) | Token 即将在 30 秒后过期时触发的回调。                                                                 |
| [onUserJoined](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined)                             | 远端用户或主播加入频道回调。                                                                           |
| [onUserOffline](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuseroffline)                           | 远端用户或主播离开频道时触发的回调。                                                                       |

<a id="rtc_api_overview__toc_publishnsubscribe" />

## 发布和订阅 [#发布和订阅]

| API                                                                                                                                                 | 描述                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [muteAllRemoteAudioStreams](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremoteaudiostreams)                        | 停止或恢复订阅所有远端用户的音频流。        |
| [muteAllRemoteAudioStreamsEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteallremoteaudiostreamsex)                  | 停止或恢复订阅所有远端用户的音频流。        |
| [muteAllRemoteVideoStreams](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremotevideostreams)                        | 停止或恢复订阅所有远端用户的视频流。        |
| [muteAllRemoteVideoStreamsEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteallremotevideostreamsex)                  | 停止或恢复订阅所有远端用户的视频流。        |
| [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream)                                  | 停止或恢复发布本地采集音频流。           |
| [muteLocalAudioStreamEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_mutelocalaudiostreamex)                            | 停止或恢复发布本地音频流。             |
| [muteLocalVideoStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalvideostream)                                  | 停止或恢复发布本地视频流。             |
| [muteLocalVideoStreamEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_mutelocalvideostreamex)                            | 停止或恢复发布本地视频流。             |
| [muteRemoteAudioStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremoteaudiostream)                                | 停止或恢复订阅指定远端用户的音频流。        |
| [muteRemoteAudioStreamEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteremoteaudiostreamex)                          | 停止或恢复接收指定用户的音频流。          |
| [muteRemoteVideoStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremotevideostream)                                | 停止或恢复订阅指定远端用户的视频流。        |
| [muteRemoteVideoStreamEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteremotevideostreamex)                          | 停止或恢复接收指定用户的视频流。          |
| [setDualStreamMode \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode)                                | 设置发送端的视频流模式，用于控制是否发送视频小流。 |
| [setDualStreamMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode2)                               | 设置发送端的不同质量层级的视频流模式配置。     |
| [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex)                                  | 设置发送端的视频流模式，用于控制是否发送视频小流。 |
| [setRemoteDefaultVideoStreamType \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype)    | 设置默认订阅的视频流类型。             |
| [setRemoteVideoStreamType \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype)                  | 设置要订阅的视频流类型。              |
| [setRemoteVideoStreamTypeEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex)            | 设置要订阅的视频流类型。              |
| [setRemoteVideoSubscriptionOptions](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideosubscriptionoptions)        | 设置订阅远端视频流的选项。             |
| [setRemoteVideoSubscriptionOptionsEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideosubscriptionoptionsex)  | 设置订阅远端视频流的选项。             |
| [setSubscribeAudioAllowlist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioallowlist)                      | 设置音频流订阅的白名单。              |
| [setSubscribeAudioAllowlistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioallowlistex)                | 设置音频流订阅的白名单。              |
| [setSubscribeAudioBlocklist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioblocklist)                      | 设置音频流订阅的黑名单。              |
| [setSubscribeAudioBlocklistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioblocklistex)                | 设置音频流订阅的黑名单。              |
| [setSubscribeVideoAllowlist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoallowlist)                      | 设置视频流订阅的白名单。              |
| [setSubscribeVideoAllowlistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoallowlistex)                | 设置视频流订阅的白名单。              |
| [setSubscribeVideoBlocklist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoblocklist)                      | 设置视频流订阅的阻止名单。             |
| [setSubscribeVideoBlocklistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoblocklistex)                | 设置视频流订阅的黑名单。              |
| [onAudioPublishStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiopublishstatechanged)     | 音频发布状态发生变化回调。             |
| [onAudioSubscribeStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiosubscribestatechanged) | 音频订阅状态发生变化回调。             |
| [onVideoSubscribeStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onvideosubscribestatechanged) | 视频订阅状态发生变化回调。             |

<a id="rtc_api_overview__toc_audio_basic" />

## 音频基础功能 [#音频基础功能]

| API                                                                                                                                                   | 描述                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [adjustPlaybackSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustplaybacksignalvolume)                            | 调节所有远端用户的本地播放音量。      |
| [adjustUserPlaybackSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustuserplaybacksignalvolume)                    | 调节指定远端用户的播放音量。        |
| [adjustUserPlaybackSignalVolumeEx](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_adjustuserplaybacksignalvolumeex)              | 调整指定远端用户的播放音量。        |
| [disableAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_disableaudio)                                                        | 禁用音频模块。               |
| [enableAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio)                                                          | 启用音频模块。               |
| [enableAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication)                          | 启用用户音量提示上报功能。         |
| [enableAudioVolumeIndicationEx](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_enableaudiovolumeindicationex)                    | 启用用户音量提示的上报功能。        |
| [setAudioProfile \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile2)                                         | 设置音频配置文件。             |
| [setAudioScenario](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario)                                                | 设置音频场景。               |
| [onActiveSpeaker](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onactivespeaker)                                 | 最活跃远端说话人回调。           |
| [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication)                 | 报告用户音量信息的回调。          |
| [onFirstLocalAudioFramePublished](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstlocalaudioframepublished) | 本地音频首帧发布回调。           |
| [onLocalAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostatechanged)               | 本地音频流状态发生变化回调。        |
| [onLocalAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostats)                             | 本地音频流统计信息回调。          |
| [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged)             | 远端音频状态发生变化回调。         |
| [onRemoteAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats)                           | 报告每个远端音频流的传输层统计信息回调。  |
| [onUserMuteAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio)                                 | 远端用户或主播停止或恢复发送音频流的回调。 |

<a id="rtc_api_overview__toc_audio_capture" />

## 音频采集 [#音频采集]

| API                                                                                                                            | 描述             |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| [adjustRecordingSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_adjustrecordingsignalvolume) | 调节采集音频信号的音量。   |
| [enableInEarMonitoring \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enableinearmonitoring)     | 启用或关闭耳返监听。     |
| [enableInEarMonitoring \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enableinearmonitoring2)    | 启用或关闭耳返监听功能。   |
| [enableLocalAudio](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enablelocalaudio)                       | 启用或关闭本地音频采集功能。 |
| [muteRecordingSignal](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_muterecordingsignal)                 | 设置是否静音录制信号。    |
| [setInEarMonitoringVolume](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_setinearmonitoringvolume)       | 设置耳返音量。        |

<a id="rtc_api_overview__toc_audio_effect" />

## 人声音效 [#人声音效]

| API                                                                                                                                                     | 描述                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [enableVoiceAITuner](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_enablevoiceaituner)                     | 启用或关闭语音 AI 调音器。                       |
| [getAudioEffectManager](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_getaudioeffectmanager)               | 获取用于管理音效文件的 \`IAudioEffectManager\` 实例。 |
| [setAdvancedAudioOptions](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setadvancedaudiooptions)           | 设置高级音频选项。                             |
| [setAINSMode](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setainsmode)                                   | 设置是否启用 AI 降噪功能并设置降噪模式。                |
| [setAudioEffectParameters](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectparameters)         | 设置 SDK 预设音效的参数。                       |
| [setAudioEffectPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectpreset)                 | 设置 SDK 预设的音效效果。                       |
| [setLocalVoiceEqualization](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceequalization)       | 设置本地语音的均衡效果。                          |
| [setLocalVoiceFormant](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceformant)                 | 设置共振峰比例以改变人声音色。                       |
| [setLocalVoicePitch](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicepitch)                     | 设置本地语音的音调。                            |
| [setLocalVoiceReverb](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicereverb)                   | 设置本地语音的混响效果。                          |
| [setVoiceBeautifierParameters](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoicebeautifierparameters) | 设置预设美声特效的参数。                          |
| [setVoiceBeautifierPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoicebeautifierpreset)         | 设置预设的美声效果。                            |
| [setVoiceConversionPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoiceconversionpreset)         | 设置 SDK 预设的变声效果。                       |

<a id="rtc_api_overview__toc_sound_position" />

## 听声辨位 [#听声辨位]

| API                                                                                                                                                         | 描述                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [enableSoundPositionIndication](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_enablesoundpositionindication) | 启用或关闭远端用户的立体声声像功能。 |
| [setRemoteVoicePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_setremotevoiceposition)               | 设置远端用户语音的二维位置和音量。  |
| [setRemoteVoicePositionEx](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengineex_setremotevoicepositionex)         | 设置远端用户语音的二维位置和音量。  |

<a id="rtc_api_overview__toc_spatial_audio" />

## 空间音频 [#空间音频]

| API                                                                                                                                                                                     | 描述                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [initialize](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine)                             | 初始化 [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine)。     |
| [clearRemotePositions](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_clearremotepositions)                                   | 移除所有远端用户的空间位置。                                                                                                         |
| [create](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_create_ilocalspatialaudioengine)                                     | 创建一个 [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine) 实例。 |
| [enableSpatialAudio](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_enablespatialaudio)                                                    | 启用或关闭空间音效。                                                                                                             |
| [muteAllRemoteAudioStreams](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine) | 停止或恢复订阅所有远端用户的音频流。                                                                                                     |
| [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine)           | 停止或恢复发布本地音频流。                                                                                                          |
| [muteRemoteAudioStream](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine)         | 停止或恢复订阅指定远端用户的音频流。                                                                                                     |
| [destroy](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_release_ilocalspatialaudioengine)                                   | 销毁 [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine) 实例。   |
| [removeRemotePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_removeremoteposition)                                  | 移除指定远端用户的空间位置信息。                                                                                                       |
| [setAudioRecvRange](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setaudiorecvrange)                                         | 设置本地用户的音频接收范围。                                                                                                         |
| [setDistanceUnit](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setdistanceunit)                                             | 设置游戏引擎中每个单位距离对应的米数。                                                                                                    |
| [setHeadphoneEQParameters](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqparameters)                                        | 设置耳机均衡器的低频和高频参数。                                                                                                       |
| [setHeadphoneEQPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqpreset)                                                | 设置预设的耳机均衡器效果。                                                                                                          |
| [setMaxAudioRecvCount](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setmaxaudiorecvcount)                                   | 设置你在指定音频接收范围内可接收的最大音频流数量。                                                                                              |
| [setPlayerAttenuation](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setplayerattenuation)                                   | 设置媒体播放器的声音衰减属性。                                                                                                        |
| [setRemoteAudioAttenuation](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_setremoteaudioattenuation)                        | 设置指定用户的声音衰减效果。                                                                                                         |
| [setRemoteUserSpatialAudioParams](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setremoteuserspatialaudioparams)                          | 设置远端用户的空间音效参数。                                                                                                         |
| [setSpatialAudioParams](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_imediaplayer_setspatialaudioparams)                                            | 启用或关闭媒体播放器的空间音效。                                                                                                       |
| [setZones](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setzones)                                                           | 设置隔音区域。                                                                                                                |
| [updatePlayerPositionInfo](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateplayerpositioninfo)                           | 更新媒体播放器的空间位置。                                                                                                          |
| [updateRemotePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_updateremoteposition)                                  | 更新指定远端用户的空间位置。                                                                                                         |
| [updateSelfPosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateselfposition)                                       | 更新本地用户的空间位置。                                                                                                           |

<a id="rtc_api_overview__toc_audiomixer" />

## 本地音频合流 [#本地音频合流]

| API                                                                                                                                                               | 描述          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [startLocalAudioMixer](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer)                             | 开始本地音频合流。   |
| [stopLocalAudioMixer](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_stoplocalaudiomixer)                               | 停止本地音频合流。   |
| [updateLocalAudioMixerConfiguration](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_updatelocalaudiomixerconfiguration) | 更新本地音频合流配置。 |

<a id="rtc_api_overview__toc_audio_raw" />

## 原始音频数据 [#原始音频数据]

| API                                                                                                                                                                 | 描述                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getEarMonitoringAudioParams](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getearmonitoringaudioparams)                                 | [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe) 回调的音频格式设置方法。                   |
| [getMixedAudioParams](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getmixedaudioparams)                                                 | 设置 [onMixedAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe) 回调的音频格式。                                    |
| [getObservedAudioFramePosition](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition)                             | 设置音频数据观察位置。                                                                                                                                                         |
| [getPlaybackAudioParams](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getplaybackaudioparams)                                           | [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe) 回调的音频格式设置方法。                             |
| [getRecordAudioParams](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getrecordaudioparams)                                               | 设置 [onRecordAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe) 回调的音频格式。                                  |
| [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver)                                            | 注册音频帧观测器对象。                                                                                                                                                         |
| [setEarMonitoringAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setearmonitoringaudioframeparameters)                        | 设置耳返音频数据格式。                                                                                                                                                         |
| [setMixedAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setmixedaudioframeparameters)                                        | 设置混音后用于采集和播放的原始音频数据格式。                                                                                                                                              |
| [setPlaybackAudioFrameBeforeMixingParameters \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframebeforemixingparameters)  | 设置混音前原始音频播放数据的格式。                                                                                                                                                   |
| [setPlaybackAudioFrameBeforeMixingParameters \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframebeforemixingparameters1) | 设置 [onPlaybackAudioFrameBeforeMixing](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing) 回调中返回音频数据的格式。 |
| [setPlaybackAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframeparameters)                                  | 设置原始音频播放数据的格式。                                                                                                                                                      |
| [setRecordingAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setrecordingaudioframeparameters)                                | 设置采集的原始音频数据格式。                                                                                                                                                      |
| [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe)                                | 耳返音频帧回调。                                                                                                                                                            |
| [onMixedAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe)                                                | 获取混合采集和播放的音频帧回调。                                                                                                                                                    |
| [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe)                                          | 获取用于播放的原始音频帧回调。                                                                                                                                                     |
| [onPlaybackAudioFrameBeforeMixing](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing)                  | 获取已订阅远端用户混音前的音频帧回调。                                                                                                                                                 |
| [onRecordAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe)                                              | 获取采集到的音频帧回调。                                                                                                                                                        |

<a id="rtc_api_overview__toc_audio_encoded" />

## 已编码音频数据 [#已编码音频数据]

| API                                                                                                                                                 | 描述                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [registerAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver)          | 注册编码音频数据的观察器。         |
| [onMixedAudioEncodedFrame](/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onmixedaudioencodedframe)       | 本地及所有远端用户的混音编码音频数据回调。 |
| [onPlaybackAudioEncodedFrame](/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onplaybackaudioencodedframe) | 获取所有远端用户编码音频数据的回调。    |
| [onRecordAudioEncodedFrame](/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onrecordaudioencodedframe)     | 本地用户编码音频数据回调。         |

<a id="rtc_api_overview__toc_audio_custom_capturenrendering" />

## 自定义音频采集和渲染 [#自定义音频采集和渲染]

| API                                                                                                                                                   | 描述                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [adjustCustomAudioPlayoutVolume](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudioplayoutvolume) | 调节本地播放的自定义音频轨道的音量。 |
| [adjustCustomAudioPublishVolume](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudiopublishvolume) | 调节远端播放的自定义音频轨道的音量。 |
| [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack)                 | 创建一个自定义音频轨道。       |
| [destroyCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_destroycustomaudiotrack)               | 销毁指定的音频轨道。         |
| [enableCustomAudioLocalPlayback](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_enablecustomaudiolocalplayback) | 设置是否启用外部音频源的本地播放。  |
| [pullPlaybackAudioFrame \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe)                 | 拉取远端混音后的音频数据用于播放。  |
| [pullPlaybackAudioFrame \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe2)                | 拉取远端音频数据。          |
| [pushExternalAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pushaudioframe2)                        | 将外部音频帧推送到 SDK。     |
| [setExternalAudioSink](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink)                     | 设置外部音频渲染器。         |

<a id="rtc_api_overview__toc_audio_spectrum" />

## 音频频谱 [#音频频谱]

| API                                                                                                                                     | 描述           |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [disableAudioSpectrumMonitor](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_disableaudiospectrummonitor)         | 禁用音频频谱监测。    |
| [enableAudioSpectrumMonitor](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor)           | 开启音频频谱监测功能。  |
| [registerAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver)     | 注册音频频谱观察器。   |
| [unRegisterAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_unregisteraudiospectrumobserver) | 取消注册音频频谱观察器。 |
| [onLocalAudioSpectrum](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum)      | 本地音频频谱数据回调。  |
| [onRemoteAudioSpectrum](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onremoteaudiospectrum)    | 远端音频频谱数据回调。  |

<a id="rtc_api_overview__toc_video_basic" />

## 视频基础功能 [#视频基础功能]

| API                                                                                                                                                   | 描述                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| [disableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo)                                                        | 关闭视频模块。                |
| [enableLocalVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo)                                                | 启用或禁用本地视频采集。           |
| [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo)                                                          | 启用视频模块。                |
| [setVideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration)                        | 设置本地视频的编码器配置。          |
| [setVideoEncoderConfigurationEx](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengineex_setvideoencoderconfigurationex)                  | 设置本地视频的编码器配置。          |
| [setVideoScenario](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoscenario)                                                | 设置视频应用场景。              |
| [startPreview \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview)                                                | 启用本地视频预览。              |
| [startPreview \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview2)                                               | 启用本地视频预览，并指定用于预览的视频源。  |
| [stopPreview \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview)                                                  | 停止本地视频预览。              |
| [stopPreview \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview2)                                                 | 停止本地视频预览。              |
| [onFirstLocalVideoFrame](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframe)                   | 本地视频首帧在本地视图中显示时触发的回调。  |
| [onFirstLocalVideoFramePublished](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframepublished) | 本地视频首帧发布回调。            |
| [onFirstRemoteVideoFrame](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideoframe)                 | 远端视频首帧显示回调。            |
| [onLocalVideoEvent](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideoevent)                             | 本地视频事件发生时触发的回调。        |
| [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged)               | 本地视频流状态发生变化回调。         |
| [onLocalVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostats)                             | 本地视频流统计信息回调。           |
| [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged)             | 远端视频状态发生改变回调。          |
| [onRemoteVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats)                           | 报告每个远端用户发送的视频流的统计信息回调。 |
| [onUserEnableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onuserenablevideo)                             | 远端用户启用或关闭视频模块的回调。      |
| [onUserMuteVideo](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onusermutevideo)                                 | 远端视频状态发生改变回调。          |
| [onVideoPublishStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideopublishstatechanged)           | 视频发布状态发生变化回调。          |
| [onVideoSizeChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideosizechanged)                           | 指定用户的视频尺寸或旋转信息发生变化回调。  |

<a id="rtc_api_overview__toc_camera_capture" />

## 摄像头采集 [#摄像头采集]

| API                                                                                                           | 描述       |
| ------------------------------------------------------------------------------------------------------------- | -------- |
| [startCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture) | 开始视频采集。  |
| [stopCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_stopcameracapture)   | 停止摄像头采集。 |

<a id="rtc_api_overview__toc_screencapture" />

## 屏幕采集 [#屏幕采集]

| API                                                                                                                                | 描述                                     |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [queryScreenCaptureCapability](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_queryscreencapturecapability)   | 查询设备在屏幕共享时支持的最高帧率。                     |
| [setExternalMediaProjection](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_setexternalmediaprojection)       | 配置 SDK 外部的 \`MediaProjection\` 以采集屏幕视频流。 |
| [setScreenCaptureScenario](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_setscreencapturescenario)           | 设置屏幕共享场景。                              |
| [startScreenCapture](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture)                       | 开始屏幕采集。                                |
| [stopScreenCapture](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_stopscreencapture)                         | 停止屏幕采集。                                |
| [updateScreenCaptureParameters](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_updatescreencaptureparameters) | 更新屏幕采集参数。                              |

<a id="rtc_api_overview__toc_snapshot" />

## 本地截图上传 [#本地截图上传]

| API                                                                                                                                        | 描述                       |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| [enableContentInspect](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_enablecontentinspect)        | 启用或关闭本地截图上传功能。           |
| [enableContentInspectEx](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_enablecontentinspectex)  | 启用或关闭本地截图上传功能。           |
| [takeSnapshot \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_takesnapshot)                | 截取指定用户的视频流快照并保存为 JPG 图像。 |
| [takeSnapshot \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_takesnapshot2)               | 在指定的观察点截取视频截图。           |
| [takeSnapshotEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_takesnapshotex)          | 使用连接 ID 对视频流进行截图。        |
| [takeSnapshotEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_takesnapshotex2)         | 通过连接 ID 获取指定用户的视频截图。     |
| [onSnapshotTaken](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken) | 视频截图结果回调。                |

<a id="rtc_api_overview__toc_virtualbackground" />

## 虚拟背景 [#虚拟背景]

| API                                                                                                                                                         | 描述                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [enableVirtualBackground \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground)  | 启用或关闭虚拟背景功能。          |
| [enableVirtualBackground \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground2) | 启用虚拟背景并指定媒体源，或关闭虚拟背景。 |

<a id="rtc_api_overview__toc_local_transcoder" />

## 本地合图 [#本地合图]

| API                                                                                                                                                                        | 描述               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| [startLocalVideoTranscoder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder)                      | 开始本地视频合图。        |
| [stopLocalVideoTranscoder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_stoplocalvideotranscoder)                        | 停止本地合图。          |
| [updateLocalTranscoderConfiguration](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_updatelocaltranscoderconfiguration)    | 更新本地合图配置。        |
| [onLocalVideoTranscoderError](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#callback_irtcengineeventhandler_onlocalvideotranscodererror) | 本地视频合图过程中发生错误回调。 |

<a id="rtc_api_overview__toc_video_enhance_option" />

## 视频增强 [#视频增强]

| API                                                                                                                                                                | 描述                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| [addOrUpdateVideoEffect](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_addorupdatevideoeffect)        | 为指定的视频特效节点 ID 和模板添加或更新视频特效。                                                                                    |
| [createVideoEffectObject](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_createvideoeffectobject)              | 创建一个 [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject) 视频特效对象。 |
| [destroyVideoEffectObject](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_destroyvideoeffectobject)            | 销毁一个视频特效对象。                                                                                                    |
| [getFaceShapeAreaOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapeareaoptions)      | 获取美颜区域的当前设置。                                                                                                   |
| [getFaceShapeAreaOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapeareaoptions2)     | 获取当前美颜效果区域的设置选项。                                                                                               |
| [getFaceShapeBeautyOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapebeautyoptions)  | 获取当前的美颜特效设置。                                                                                                   |
| [getFaceShapeBeautyOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapebeautyoptions2) | 获取当前的美颜特效设置。                                                                                                   |
| [getOptions](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_watermarkconfig_getoptions)                                   | 获取当前配置的水印显示选项。                                                                                                 |
| [getVideoEffectBoolParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectboolparam)      | 获取视频特效中的布尔类型参数。                                                                                                |
| [getVideoEffectFloatParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectfloatparam)    | 获取视频特效中指定参数的 \`float\` 类型值。                                                                                      |
| [getVideoEffectIntParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectintparam)        | 获取视频特效中的整数类型参数。                                                                                                |
| [performVideoEffectAction](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_performvideoeffectaction)    | 对指定的视频特效节点执行操作。                                                                                                |
| [removeVideoEffect](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_removevideoeffect)                  | 移除指定节点 ID 的视频特效节点。                                                                                             |
| [setBeautyEffectOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions)        | 设置美颜特效功能及其参数。                                                                                                  |
| [setBeautyEffectOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions2)       | 设置美颜特效选项并指定媒体源。                                                                                                |
| [setColorEnhanceOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions)        | 设置色彩增强功能。                                                                                                      |
| [setColorEnhanceOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions2)       | 设置色彩增强选项并指定媒体源。                                                                                                |
| [setFaceShapeAreaOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions)      | 设置面部区域的美颜特效选项并指定媒体源。                                                                                           |
| [setFaceShapeAreaOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions2)     | 设置美颜增强的面部区域选项。                                                                                                 |
| [setFaceShapeBeautyOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions)  | 设置美型效果并指定应用的媒体源。                                                                                               |
| [setFaceShapeBeautyOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions2) | 设置美型选项。                                                                                                        |
| [setFilterEffectOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfiltereffectoptions)        | 设置滤镜特效参数并指定媒体源。                                                                                                |
| [setFilterEffectOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfiltereffectoptions2)       | 设置滤镜特效选项。                                                                                                      |
| [setLowlightEnhanceOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setlowlightenhanceoptions)  | 设置暗光增强功能。                                                                                                      |
| [setLowlightEnhanceOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setlowlightenhanceoptions2) | 设置低光增强选项并指定媒体源。                                                                                                |
| [setVideoDenoiserOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions)      | 设置视频降噪功能及其选项。                                                                                                  |
| [setVideoDenoiserOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions2)     | 设置视频降噪并指定媒体源。                                                                                                  |
| [setVideoEffectBoolParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectboolparam)      | 设置视频特效的布尔参数。                                                                                                   |
| [setVideoEffectFloatParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectfloatparam)    | 设置视频特效的浮点参数。                                                                                                   |
| [setVideoEffectIntParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectintparam)        | 设置视频特效的整数参数。                                                                                                   |

<a id="rtc_api_overview__toc_face_detection" />

## 人脸检测 [#人脸检测]

| API                                                                                                                                                          | 描述                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| [enableFaceDetection](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#api_irtcengine_enablefacedetection)                      | 启用或关闭本地用户的人脸检测功能。 |
| [onFacePositionChanged](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#callback_irtcengineeventhandler_onfacepositionchanged) | 上报本地用户的人脸检测结果。    |

<a id="rtc_api_overview__toc_watermark" />

## 直播水印 [#直播水印]

| API                                                                                                                                                    | 描述                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| [addVideoWatermark \\[3/3\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark3)                | 向本地视频流添加水印图像。        |
| [addVideoWatermarkEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex1)          | 向本地视频添加水印图像。         |
| [clearVideoWatermarkEx](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_clearvideowatermarkex)               | 从视频流中移除水印图像。         |
| [clearVideoWatermarks](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_clearvideowatermarks)                   | 从视频流中移除水印图像。         |
| [getBuffer](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getbuffer)                                    | 获取水印图像的数据缓冲区。        |
| [getFormat](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getformat)                                    | 获取水印图像的格式。           |
| [getHeight](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getheight)                                    | 获取水印图像的高度。           |
| [getId](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getid)                                            | 获取水印的唯一标识符。          |
| [getImageUrl](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkconfig_getimageurl)                                | 获取水印图像的 URL。         |
| [getPositionInLandscapeMode](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkoptions_getpositioninlandscapemode) | 获取横屏模式下水印的位置。        |
| [getPositionInPortraitMode](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkoptions_getpositioninportraitmode)   | 获取竖屏模式下水印的位置。        |
| [getType](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkconfig_gettype)                                        | 获取当前水印配置中的水印类型信息。    |
| [getWidth](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getwidth)                                      | 获取水印图像的宽度。           |
| [getzOrder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkoptions_getzorder)                                   | 获取水印图像的 Z-order 索引。  |
| [isVisibleInPreview](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkoptions_isvisibleinpreview)                 | 检查水印在本地视频预览中是否可见。    |
| [removeVideoWatermark](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_removevideowatermark)                   | 从本地视频中移除水印图像。        |
| [removeVideoWatermarkEx](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_removevideowatermarkex)             | 从本地或远端视频流中移除指定的水印图像。 |

<a id="rtc_api_overview__toc_image_source" />

## 垫片推流 [#垫片推流]

| API                                                                                                                                         | 描述                       |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [enableVideoImageSource](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/image-source#api_irtcengine_enablevideoimagesource) | 设置在发布视频流时是否使用图片替代当前视频画面。 |

<a id="rtc_api_overview__toc_video_rendering" />

## 视频渲染 [#视频渲染]

| API                                                                                                                                                   | 描述                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [enableInstantMediaRendering](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_enableinstantmediarendering)                      | 启用音视频帧的即时渲染。       |
| [setLocalRenderMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode2)                               | 更新本地视频画面的显示模式。     |
| [setLocalRenderTargetFps](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendertargetfps)                              | 设置本地视频渲染的最大帧率。     |
| [setRemoteRenderModeEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setremoterendermodeex)                                | 设置指定远端用户的视频显示模式。   |
| [setRemoteRenderTargetFps](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setremoterendertargetfps)                            | 设置远端视频渲染的最大帧率。     |
| [setVideoRenderMode](/zh-CN/api-reference/rtc/android/video/video-rendering#api_imediaplayer_setrendermode)                                           | 设置媒体播放器的渲染模式。      |
| [setupLocalVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo)                                              | 初始化本地视频画面。         |
| [setupRemoteVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setupremotevideo)                                            | 初始化远端视频视图。         |
| [setupRemoteVideoEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setupremotevideoex)                                      | 初始化远端用户的视频视图。      |
| [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)                        | 启用视频帧渲染过程的追踪。      |
| [startMediaRenderingTracingEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_startmediarenderingtracingex)                  | 启用视频帧渲染过程的追踪。      |
| [onTranscodedStreamLayoutInfo](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo)   | 接收到携带布局信息的合图视频流回调。 |
| [onVideoRenderingTracingResult](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult) | 视频帧渲染事件回调。         |

<a id="rtc_api_overview__toc_video_raw" />

## 原始视频数据 [#原始视频数据]

| API                                                                                                                           | 描述                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getMirrorApplied](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getmirrorapplied)                 | 每次 SDK 接收到视频帧时触发的回调，用于设置是否对采集的视频进行镜像。                                                                                                                             |
| [getObservedFramePosition](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getobservedframeposition) | 设置视频观察器的帧位置。                                                                                                                                                      |
| [getRotationApplied](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getrotationapplied)             | [getRotationApplied](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getrotationapplied) 回调在每次 SDK 接收到视频帧时触发，用于设置是否旋转采集的视频。              |
| [getVideoFormatPreference](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoformatpreference) | 设置 SDK 输出的原始视频数据格式。                                                                                                                                               |
| [getVideoFrameProcessMode](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode) | [getVideoFrameProcessMode](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode) 回调。每次 SDK 接收到视频帧时触发，并提示你设置视频帧的处理模式。 |
| [registerVideoFrameObserver](/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver)      | 注册原始视频帧观察器对象。                                                                                                                                                     |
| [onCaptureVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_oncapturevideoframe)      | 本地设备采集到视频帧时触发的回调。                                                                                                                                                 |
| [onPreEncodeVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onpreencodevideoframe)  | 每次 SDK 接收到编码前视频帧时触发该回调。                                                                                                                                           |
| [onRenderVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onrendervideoframe)        | 远端用户发送视频帧时触发的回调。                                                                                                                                                  |

<a id="rtc_api_overview__toc_video_encoded" />

## 已编码视频数据 [#已编码视频数据]

| API                                                                                                                                                 | 描述                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [registerVideoEncodedFrameObserver](/zh-CN/api-reference/rtc/android/video/video-encoded#api_irtcengine_registervideoencodedframeobserver)          | 注册用于接收编码后视频帧的观察器对象。 |
| [onEncodedVideoFrameReceived](/zh-CN/api-reference/rtc/android/video/video-encoded#callback_ivideoencodedframeobserver_onencodedvideoframereceived) | 接收端收到远端编码视频帧回调。     |

<a id="rtc_api_overview__toc_video_custom_capturenrendering" />

## 自定义视频采集和渲染 [#自定义视频采集和渲染]

| API                                                                                                                                             | 描述                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| [createCustomVideoTrack](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack)           | 创建一个自定义视频轨道。           |
| [destroyCustomVideoTrack](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_destroycustomvideotrack)         | 销毁指定的视频轨道。             |
| [isTextureEncodeSupported](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_istextureencodesupported)       | 检查视频是否支持 \`Texture\` 编码。 |
| [pushExternalVideoFrameById \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe)       | 通过视频轨道向 SDK 推送外部原始视频帧。 |
| [pushExternalVideoFrameById \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe3)      | 通过视频轨道向 SDK 推送外部原始视频帧。 |
| [setExternalRemoteEglContext](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalremoteeglcontext) | 设置用于渲染远端视频流的 EGL 上下文。  |
| [setExternalVideoSource](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource)           | 配置外部视频源。               |

<a id="rtc_api_overview__toc_audio_mixing" />

## 音乐文件播放 [#音乐文件播放]

| API                                                                                                                                                 | 描述                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [adjustAudioMixingPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingplayoutvolume)              | 调节本地播放的混音音量。         |
| [adjustAudioMixingPublishVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingpublishvolume)              | 调节用于发布的混音音量。         |
| [adjustAudioMixingVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingvolume)                            | 调节混音时的音量。            |
| [getAudioMixingCurrentPosition](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingcurrentposition)                | 获取当前混音的播放位置（毫秒）。     |
| [getAudioMixingDuration](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingduration)                              | 获取音频文件的混音时长（毫秒）。     |
| [getAudioMixingPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingplayoutvolume)                    | 获取本地播放的混音音量。         |
| [getAudioMixingPublishVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingpublishvolume)                    | 获取用于发布的混音音量。         |
| [getAudioTrackCount](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiotrackcount)                                      | 获取当前音乐文件的音轨索引。       |
| [pauseAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_pauseaudiomixing)                                          | 暂停播放和混音的音乐文件。        |
| [resumeAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_resumeaudiomixing)                                        | 恢复播放和混音的音乐文件。        |
| [selectAudioTrack](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_selectaudiotrack)                                          | 选择播放过程中使用的音轨。        |
| [selectMultiAudioTrack](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_imediaplayer_selectmultiaudiotrack)                              | 选择要在本地设备播放和发布到频道的音轨。 |
| [setAudioMixingDualMonoMode](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingdualmonomode)                      | 设置当前音频文件的声道模式。       |
| [setAudioMixingPitch](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingpitch)                                    | 设置本地音乐文件的音调。         |
| [setAudioMixingPlaybackSpeed](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingplaybackspeed)                    | 设置当前音频文件的播放速度。       |
| [setAudioMixingPosition](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingposition)                              | 设置混音的播放位置。           |
| [startAudioMixing \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing2)                                 | 开始播放音乐文件。            |
| [stopAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_stopaudiomixing)                                            | 停止播放音乐文件。            |
| [onAudioMixingPositionChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingpositionchanged) | 音乐文件播放进度回调。          |
| [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged)       | 音乐文件播放状态变化回调。        |

<a id="rtc_api_overview__toc_audio_effect_file" />

## 音效文件播放 [#音效文件播放]

| API                                                                                                                                        | 描述               |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| [getEffectCurrentPosition](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectcurrentposition)            | 获取指定音效文件的播放位置。   |
| [getEffectDuration](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectduration)                          | 获取音效文件的时长。       |
| [getEffectsVolume](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectsvolume)                            | 获取音效的音量。         |
| [getVolumeOfEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_getvolumeofeffect)                          | 获取指定音效文件的音量。     |
| [pauseAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects)                              | 暂停所有音效。          |
| [pauseEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pauseeffect)                                      | 暂停指定音效文件的播放。     |
| [playAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playalleffects)                                | 播放所有音效。          |
| [playEffect \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect2)                               | 播放指定的本地或在线音效文件。  |
| [playEffect \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect3)                               | 播放指定的本地或在线音效文件。  |
| [playEffectEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_playeffectex)                          | 在频道中播放指定的音效。     |
| [playEffectEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_playeffectex2)                         | 在频道中播放指定音效。      |
| [preloadEffect \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_preloadeffect)                          | 预加载指定的音效文件。      |
| [preloadEffect \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_preloadeffect2)                         | 将指定的音效文件预加载到内存中。 |
| [preloadEffectEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_preloadeffectex)                    | 将指定音效预加载到频道中。    |
| [preloadEffectEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_preloadeffectex2)                   | 将指定音效预加载到频道中。    |
| [resumeAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumealleffects)                            | 恢复播放所有音效文件。      |
| [resumeEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumeeffect)                                    | 恢复播放指定音效。        |
| [setEffectPosition](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_seteffectposition)                          | 设置音效文件的播放位置。     |
| [setEffectsVolume](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_seteffectsvolume)                            | 设置音效的播放音量。       |
| [setVolumeOfEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_setvolumeofeffect)                          | 设置指定音效文件的播放音量。   |
| [stopAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopalleffects)                                | 停止播放所有音效。        |
| [stopEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopeffect)                                        | 停止播放指定音效。        |
| [unloadEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_unloadeffect)                                    | 释放指定的预加载音效文件。    |
| [onAudioEffectFinished](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#callback_irtcengineeventhandler_onaudioeffectfinished) | 本地音效文件播放完成时的回调。  |

<a id="rtc_api_overview__toc_mediaplayer_initialize" />

## 初始化 [#初始化]

| API                                                                                                                                                                 | 描述                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [createMediaPlayer](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_irtcengine_createmediaplayer)                                 | 创建一个 [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer) 对象。                         |
| [destroy](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayer_destroy_imediaplayer)                                      | 销毁媒体播放器实例。                                                                                                             |
| [getMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager) | 获取一个 [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager) 实例。 |

<a id="rtc_api_overview__toc_mediaplayer_open" />

## 媒体资源打开 [#媒体资源打开]

| API                                                                                                                                 | 描述               |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| [open \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_open)                       | 打开媒体资源。          |
| [open \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_open2)                      | 通过 URI 地址打开媒体文件。 |
| [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) | 打开媒体文件并配置播放场景。   |
| [preloadSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc)                   | 预加载媒体资源。         |
| [switchSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_switchsrc)                     | 切换正在播放的媒体资源。     |
| [unloadSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_unloadsrc)                     | 卸载预加载的媒体资源。      |

<a id="rtc_api_overview__toc_mediaplayer_playnrender" />

## 媒体资源播放和渲染 [#媒体资源播放和渲染]

| API                                                                                                                                               | 描述             |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| [selectAudioTrack](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_selectaudiotrack_imediaplayer) | 在播放过程中选择音频轨道。  |
| [setAudioDualMonoMode](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiodualmonomode)      | 设置当前音频文件的声道模式。 |
| [setAudioPitch](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiopitch)                    | 设置当前媒体资源的音调。   |
| [setLoopCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setloopcount)                      | 设置音效的循环播放次数。   |
| [setPlaybackSpeed](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplaybackspeed)              | 设置当前音频文件的播放速度。 |
| [setPlayerOption](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption)                | 设置媒体播放器选项。     |
| [setPlayerOptionString](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2)         | 设置媒体播放器的参数选项。  |
| [setView](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setview)                                | 设置渲染视图。        |

<a id="rtc_api_overview__toc_mediaplayer_control" />

## 播放器控制 [#播放器控制]

| API                                                                                                                                                | 描述                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [adjustPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustplayoutvolume)             | 调节本地播放音量。             |
| [adjustPublishSignalVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustpublishsignalvolume) | 调节用于发布的媒体文件音量。        |
| [mute](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_mute)                                           | 设置是否静音媒体文件。           |
| [pause](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_pause)                                         | 暂停播放。                 |
| [play](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play)                                           | 播放媒体文件。               |
| [playPreloadedSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc)                   | 播放预加载的媒体资源。           |
| [resume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_resume)                                       | 恢复播放媒体文件。             |
| [seek](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_seek)                                           | 跳转到新的播放位置。            |
| [stop \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_stop)                                   | 停止播放媒体轨道。             |
| [onSeek](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#callback_imediaplayercustomdataprovider_onseek)                | 当 SDK 定位媒体资源数据时触发的回调。 |

<a id="rtc_api_overview__toc_mediaplayer_info" />

## 播放信息获取 [#播放信息获取]

| API                                                                                                                                                        | 描述                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [getAudioBufferDelay](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getaudiobufferdelay)                        | 获取播放媒体文件时的音频缓冲延迟。   |
| [getDuration](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getduration)                                        | 获取媒体资源的时长。          |
| [getMediaPlayerId](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmediaplayerid)                              | 获取媒体播放器的 ID。        |
| [getMute](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmute)                                                | 报告媒体资源是否被静音。        |
| [getPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplayoutvolume)                              | 获取本地播放音量。           |
| [getPlayPosition](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplayposition)                                | 获取当前本地播放进度。         |
| [getPlaySrc \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplaysrc_imediaplayer)                     | 获取当前正在播放的媒体资源路径。    |
| [getPublishSignalVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getpublishsignalvolume)                  | 获取用于发布的媒体文件音量。      |
| [getState](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstate)                                              | 获取当前播放状态。           |
| [getStreamCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount)                                  | 获取媒体资源中媒体流的数量。      |
| [getStreamInfo](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo)                                    | 获取媒体流的详细信息。         |
| [onPlayerPlaybackStats](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#callback_imediaplayersourceobserver_onplayerplaybackstats) | 报告正在播放的媒体文件的统计信息回调。 |

<a id="rtc_api_overview__toc_mediaplayer_observer" />

## 音视频观测器 [#音视频观测器]

| API                                                                                                                                                                                           | 描述                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registeraudioframeobserver2_imediaplayer)                           | 注册音频帧观测器对象。                                                                                                                                                                   |
| [registerPlayerObserver](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registerplayersourceobserver)                                           | 注册媒体播放器观察器。                                                                                                                                                                   |
| [registerVideoFrameObserver](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registervideoframeobserver_imediaplayer)                            | 注册视频帧观察者对象。                                                                                                                                                                   |
| [unRegisterPlayerObserver](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_unregisterplayersourceobserver)                                       | 释放媒体播放器观察者。                                                                                                                                                                   |
| [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver) | 报告媒体播放器音量的回调。                                                                                                                                                                 |
| [onFrame](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver)                         | 播放器接收到音频帧时触发的回调。                                                                                                                                                              |
| [onFrame](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver)                         | 播放器接收到视频帧时触发的回调。                                                                                                                                                              |
| [onMetaData](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onmetadata)                                                      | 接收到媒体元数据时触发的回调。                                                                                                                                                               |
| [onPlayBufferUpdated](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplaybufferupdated)                                    | [onPlayBufferUpdated](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplaybufferupdated) 回调：报告缓冲数据可支持的播放时长。 |
| [onPlayerEvent](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent)                                                | 播放器事件回调。                                                                                                                                                                      |
| [onPlayerInfoUpdated](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerinfoupdated)                                    | 媒体播放器相关信息发生变化时的回调。                                                                                                                                                            |
| [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged)                            | 播放状态发生改变回调。                                                                                                                                                                   |
| [onPlayerSrcInfoChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersrcinfochanged)                              | 媒体资源视频码率发生变化回调。                                                                                                                                                               |
| [onPositionChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpositionchanged)                                        | 播放进度回调。                                                                                                                                                                       |
| [onPreloadEvent](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpreloadevent)                                              | 预加载媒体资源事件回调。                                                                                                                                                                  |
| [onReadData](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayercustomdataprovider_onreaddata)                                                  | SDK 读取媒体资源数据时触发的回调。                                                                                                                                                           |

<a id="rtc_api_overview__toc_mediaplayer_cache" />

## 媒体播放器缓存 [#媒体播放器缓存]

| API                                                                                                                                                   | 描述                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [enableAutoRemoveCache](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_enableautoremovecache)  | 设置是否自动删除缓存的媒体文件。      |
| [getCacheDir](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getcachedir)                      | 获取缓存媒体文件的存储路径。        |
| [getCacheFileCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getcachefilecount)          | 获取已缓存的媒体文件数量。         |
| [getMaxCacheFileCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getmaxcachefilecount)    | 获取可缓存的媒体文件的最大数量。      |
| [getMaxCacheFileSize](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getmaxcachefilesize)      | 获取缓存媒体文件聚合存储空间的最大大小。  |
| [removeAllCaches](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeallcaches)              | 删除媒体播放器中所有缓存的媒体文件。    |
| [removeCacheByUri](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removecachebyuri)            | 删除缓存的媒体文件。            |
| [removeOldCache](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeoldcache)                | 删除最少使用的缓存媒体文件。        |
| [setCacheDir](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setcachedir)                      | 设置要缓存的媒体文件的存储路径。      |
| [setMaxCacheFileCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilecount)    | 设置可缓存的媒体文件数量上限。       |
| [setMaxCacheFileSize](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilesize)      | 设置缓存媒体文件的聚合存储空间的最大大小。 |
| [onPlayerCacheStats](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#callback_imediaplayersourceobserver_onplayercachestats) | 报告正在缓存的媒体文件的统计信息回调。   |

<a id="rtc_api_overview__toc_drm" />

## 版权音乐 [#版权音乐]

| API                                                                                                                                                     | 描述                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [createMusicPlayer](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_createmusicplayer)                                            | 创建一个音乐播放器。                                                                                                      |
| [destroy](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroy_imusiccontentcenter)                                            | 销毁 [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter) 实例。 |
| [destroyMusicPlayer](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroymusicplayer)                                          | 销毁音乐播放器对象。                                                                                                      |
| [getCaches](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getcaches)                                                            | 获取已缓存的音乐资源信息。                                                                                                   |
| [getInternalSongCode](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getinternalsongcode)                                        | 创建音乐资源副歌片段的内部标识符。                                                                                               |
| [getLyric](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getlyric)                                                              | 获取音乐资源歌词的下载链接。                                                                                                  |
| [getMusicCharts](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccharts)                                                  | 获取所有音乐排行榜。                                                                                                      |
| [getMusicCollectionByMusicChartId \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccollectionbymusicchartid)      | 根据音乐榜单 ID 获取音乐资源列表。                                                                                             |
| [getMusicCollectionByMusicChartId \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccollectionbymusicchartid2)     | 根据音乐榜单 ID 获取音乐资源列表。                                                                                             |
| [getPlaySrc \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_getplaysrc)                                                         | 获取当前播放的音乐资源的标识符或 URL。                                                                                           |
| [getSongSimpleInfo](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getsongsimpleinfo)                                            | 检索特定音乐资源的详细信息。                                                                                                  |
| [initialize](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_initialize_imusiccontentcenter)                                      | 初始化 [IAgoraMusicContentCenter](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter)。   |
| [isPreloaded](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_ispreloaded)                                                        | 检查指定音乐资源是否已预加载。                                                                                                 |
| [open \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open2_imusicplayer)                                                       | 通过 URL 打开音乐资源。                                                                                                  |
| [open \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open_imusicplayer)                                                        | 通过资源 ID 打开音乐资源。                                                                                                 |
| [preload \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload2)                                                       | 预加载版权音乐资源。                                                                                                      |
| [registerEventHandler](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_registereventhandler_imusiccontentcenter)                  | 注册版权音乐内容中心的回调事件。                                                                                                |
| [removeCache](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_removecache)                                                        | 删除已缓存的音乐资源。                                                                                                     |
| [renewToken](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_renewtoken_imusiccontentcenter)                                      | 更新 Token。                                                                                                       |
| [searchMusic \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_searchmusic)                                                | 搜索音乐资源。                                                                                                         |
| [searchMusic \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_searchmusic2)                                               | 搜索音乐资源。                                                                                                         |
| [setPlayMode](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_setplaymode)                                                               | 设置音乐曲目的播放模式。                                                                                                    |
| [stop \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_stop_imusicplayer)                                                        | 停止播放音乐资源。                                                                                                       |
| [unregisterEventHandler](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter)              | 取消注册版权音乐内容中心的事件回调。                                                                                              |
| [onLyricResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onlyricresult)                                   | 歌词下载链接回调。                                                                                                       |
| [onMusicChartsResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult)                       | 获取音乐排行榜后的回调。                                                                                                    |
| [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult)               | 获取音乐资源列表的回调。                                                                                                    |
| [onPreLoadEvent](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler) | 预加载音乐资源事件的回调。                                                                                                   |
| [onSongSimpleInfoResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onsongsimpleinforesult)                 | 获取音乐资源详细信息的回调。                                                                                                  |

<a id="rtc_api_overview__toc_recording" />

## 音视频录制 [#音视频录制]

| API                                                                                                                         | 描述                 |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [createMediaRecorder](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_createmediarecorder)                        | 创建用于音视频录制的录制器实例。   |
| [destroyMediaRecorder](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_destroymediarecorder)                      | 销毁音视频录制器实例。        |
| [setMediaRecorderObserver](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_setmediarecorderobserver)          | 注册一个用于音视频录制的回调观察者。 |
| [startAudioRecording \\[1/2\\]](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_startaudiorecording1)               | 开始客户端录音。           |
| [startAudioRecording \\[2/2\\]](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_startaudiorecording3)               | 开始客户端录制并应用录制配置。    |
| [startRecording](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_startrecording)                              | 开始录制音频和视频流。        |
| [stopAudioRecording](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_stopaudiorecording)                          | 停止客户端录制音频。         |
| [stopRecording](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_stoprecording)                                | 停止录制音视频流。          |
| [onRecorderInfoUpdated](/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderinfoupdated)   | 录制信息更新回调。          |
| [onRecorderStateChanged](/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderstatechanged) | 录制状态发生变化时的回调。      |

<a id="rtc_api_overview__toc_channel_media_relay" />

## 跨频道媒体流转发 [#跨频道媒体流转发]

| API                                                                                                                                                                       | 描述                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [pauseAllChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_pauseallchannelmediarelay)                              | 暂停向所有目标频道的跨频道媒体流转发。 |
| [resumeAllChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_resumeallchannelmediarelay)                            | 恢复向所有目标频道的跨频道媒体流转发。 |
| [resumeAllChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_resumeallchannelmediarelayex)                      | 恢复向所有目标频道的跨频道媒体流转发。 |
| [startOrUpdateChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_startorupdatechannelmediarelay)                    | 开始或更新跨频道媒体流转发。      |
| [startOrUpdateChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_startorupdatechannelmediarelayex)              | 开始或更新跨频道媒体流转发。      |
| [stopChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_stopchannelmediarelay)                                      | 停止跨频道媒体流转发。         |
| [stopChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_stopchannelmediarelayex)                                | 停止跨频道媒体流转发。         |
| [onChannelMediaRelayStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged) | 跨频道媒体流转发状态发生变化回调。   |

<a id="rtc_api_overview__toc_media_push" />

## 旁路推流 [#旁路推流]

| API                                                                                                                                                       | 描述                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| [startRtmpStreamWithoutTranscoding](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithouttranscoding)       | 开始向 CDN 推送音视频流（不进行转码）。 |
| [startRtmpStreamWithoutTranscodingEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_startrtmpstreamwithouttranscodingex) | 开始向 CDN 推送未经转码的媒体流。    |
| [startRtmpStreamWithTranscoding](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding)             | 开始旁路推流并设置转码配置。         |
| [startRtmpStreamWithTranscodingEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_startrtmpstreamwithtranscodingex)       | 开始旁路推流并设置转码配置。         |
| [stopRtmpStream](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_stoprtmpstream)                                             | 停止向指定 CDN 地址推送媒体流。     |
| [stopRtmpStreamEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_stoprtmpstreamex)                                       | 停止向指定 CDN 地址推送媒体流。     |
| [updateRtmpTranscoding](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_updatertmptranscoding)                               | 更新旁路推流的转码配置。           |
| [updateRtmpTranscodingEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_updatertmptranscodingex)                         | 更新旁路推流的转码配置。           |
| [onRtmpStreamingEvent](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingevent)                | 旁路推流事件回调。              |
| [onRtmpStreamingStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged)  | 旁路推流状态发生变化回调。          |
| [onTranscodingUpdated](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_ontranscodingupdated)                | 发布端云端转码配置更新回调。         |

<a id="rtc_api_overview__toc_datastream" />

## 数据流 Datastream [#数据流-datastream]

| API                                                                                                                               | 描述                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createDataStream \\[1/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream1)                 | 创建一个数据流，用于提升数据传输的可靠性和顺序性。                                                                                                                                  |
| [createDataStream \\[2/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream2)                 | 创建一个数据流。                                                                                                                                                   |
| [createDataStreamEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex2)           | 创建一个数据流。                                                                                                                                                   |
| [sendStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage)                        | 发送数据流消息。                                                                                                                                                   |
| [sendStreamMessageEx](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_sendstreammessageex)                  | 发送数据流消息。                                                                                                                                                   |
| [onStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage)           | 远端用户发送数据流时的回调。                                                                                                                                             |
| [onStreamMessageError](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror) | [onStreamMessageError](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror) 回调：本地用户未收到远端用户发送的数据流时触发。 |

<a id="rtc_api_overview__toc_metadata_observer" />

## 媒体流附属信息分发 [#媒体流附属信息分发]

| API                                                                                                                                           | 描述                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| [getMaxMetadataSize](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_imetadataobserver_getmaxmetadatasize)                    | 当 SDK 请求元数据最大大小时触发的回调。 |
| [registerMediaMetadataObserver](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_registermediametadataobserver)     | 注册元数据观察器。              |
| [unregisterMediaMetadataObserver](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_unregistermediametadataobserver) | 取消注册指定的元数据观察者。         |
| [onMetadataReceived](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#callback_imetadataobserver_onmetadatareceived)               | 本地用户接收到元数据时触发的回调。      |
| [onReadyToSendMetadata](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#callback_imetadataobserver_onreadytosendmetadata)         | SDK 准备好发送元数据时触发的回调。    |

<a id="rtc_api_overview__toc_audio_route" />

## 音频路由 [#音频路由]

| API                                                                                                                                                    | 描述                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| [isSpeakerphoneEnabled](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_isspeakerphoneenabled)                           | 检查是否启用扬声器播放音频。    |
| [setDefaultAudioRoutetoSpeakerphone](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setdefaultaudioroutetospeakerphone) | 设置默认音频播放路由。       |
| [setEnableSpeakerphone](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setenablespeakerphone)                           | 设置是否将音频路由切换到扬声器。  |
| [setRouteInCommunicationMode](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setrouteincommunicationmode)               | 在通信音频模式下设置音频播放路由。 |
| [onAudioRouteChanged](/zh-CN/api-reference/rtc/android/device-management/audio-route#callback_irtcengineeventhandler_onaudioroutingchanged)            | 本地音频路由发生变化时的回调。   |

<a id="rtc_api_overview__toc_video_device" />

## 视频设备管理 [#视频设备管理]

| API                                                                                                                                                        | 描述                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [getCameraMaxZoomFactor](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_getcameramaxzoomfactor)                            | 获取摄像头支持的最大变焦倍数。   |
| [isCameraAutoFocusFaceModeSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraautofocusfacemodesupported)    | 检查设备是否支持人脸自动对焦功能。 |
| [isCameraExposurePositionSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraexposurepositionsupported)      | 检查设备是否支持手动曝光。     |
| [isCameraExposureSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraexposuresupported)                      | 查询当前摄像头是否支持调节曝光值。 |
| [isCameraFaceDetectSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerafacedetectsupported)                  | 检查设备摄像头是否支持人脸检测。  |
| [isCameraFocusSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerafocussupported)                            | 检查设备是否支持手动对焦功能。   |
| [isCameraTorchSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameratorchsupported)                            | 检查设备是否支持相机闪光灯功能。  |
| [isCameraZoomSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerazoomsupported)                              | 检查设备是否支持摄像头变焦。    |
| [queryCameraFocalLengthCapability](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycamerafocallengthcapability)        | 查询摄像头支持的焦距能力。     |
| [queryCodecCapability](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycodeccapability)                                | 查询 SDK 的视频编解码能力。  |
| [setCameraAutoFocusFaceModeEnabled](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraautofocusfacemodeenabled)      | 启用或关闭摄像头人脸自动对焦功能。 |
| [setCameraCapturerConfiguration](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameracapturerconfiguration)            | 设置摄像头采集配置。        |
| [setCameraExposureFactor](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposurefactor)                          | 设置摄像头曝光值。         |
| [setCameraExposurePosition](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposureposition)                      | 设置摄像头曝光位置。        |
| [setCameraFocusPositionInPreview](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerafocuspositioninpreview)          | 设置摄像头的手动对焦位置。     |
| [setCameraTorchOn](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameratorchon)                                        | 打开或关闭摄像头闪光灯。      |
| [setCameraZoomFactor](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerazoomfactor)                                  | 设置摄像头的缩放因子。       |
| [switchCamera \\[1/2\\]](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera)                                        | 切换前置和后置摄像头。       |
| [switchCamera \\[2/2\\]](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera2)                                       | 通过摄像头 ID 切换摄像头。   |
| [onCameraExposureAreaChanged](/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncameraexposureareachanged) | 摄像头曝光区域发生变化回调。    |
| [onCameraFocusAreaChanged](/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncamerafocusareachanged)       | 摄像头对焦区域发生变化的回调。   |

<a id="rtc_api_overview__toc_audio_device" />

## 音频设备管理 [#音频设备管理]

| API                                                                                                                                 | 描述            |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [getAudioDeviceInfo](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_getaudiodeviceinfo)             | 获取音频设备信息。     |
| [startPlaybackDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startplaybackdevicetest)   | 启动本地音频播放设备测试。 |
| [startRecordingDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startrecordingdevicetest) | 启动音频采集设备测试。   |
| [stopPlaybackDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stopplaybackdevicetest)     | 停止音频播放设备测试。   |
| [stopRecordingDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stoprecordingdevicetest)   | 停止音频采集设备测试。   |

<a id="rtc_api_overview__toc_extension" />

## 插件 [#插件]

| API                                                                                                                               | 描述            |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [addExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_addextension)                                           | 添加扩展。         |
| [enableExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension)                                     | 启用或禁用扩展功能。    |
| [getExtensionProperty \\[1/2\\]](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_getextensionproperty)                   | 获取扩展组件的详细信息。  |
| [getExtensionProperty \\[2/2\\]](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_getextensionproperty2)                  | 获取扩展组件的详细信息。  |
| [registerExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension)                                 | 注册一个扩展。       |
| [setExtensionProperty](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_setextensionproperty)                           | 设置扩展组件的属性。    |
| [setExtensionProviderProperty](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_setextensionproviderproperty)           | 设置扩展提供方的属性。   |
| [onErrorWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionerrorwithcontext)     | 扩展运行异常时触发的回调。 |
| [onEventWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensioneventwithcontext)     | 扩展事件回调。       |
| [onStartedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstartedwithcontext) | 扩展启用成功回调。     |
| [onStoppedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstoppedwithcontext) | 扩展被禁用时触发的回调。  |

<a id="rtc_api_overview__toc_network" />

## 网络及其他 [#网络及其他]

| API                                                                                                                                                             | 描述                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [complain](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_complain)                                                                          | 允许你在通话结束后投诉通话质量。                                                                                                                                                                               |
| [enableEncryption](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption)                                                          | 启用或关闭内置加密功能。                                                                                                                                                                                   |
| [enableEncryptionEx](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_enableencryptionex)                                                    | 启用或关闭内置加密功能。                                                                                                                                                                                   |
| [getCallId](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid)                                                                        | 获取当前通话 ID。                                                                                                                                                                                     |
| [getCallIdEx](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_getcallidex)                                                                  | 获取与连接 ID 对应的通话 ID。                                                                                                                                                                             |
| [getConnectionState](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getconnectionstate)                                                      | 获取 SDK 当前的连接状态。                                                                                                                                                                                |
| [getConnectionStateEx](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_getconnectionstateex)                                                | 获取 SDK 当前的连接状态。                                                                                                                                                                                |
| [getCurrentMonotonicTimeInMs](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcurrentmonotonictimeinms)                                    | 获取 SDK 当前的单调时间。                                                                                                                                                                                |
| [getErrorDescription](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_geterrordescription)                                                    | 获取警告或错误码对应的描述信息。                                                                                                                                                                               |
| [getNativeHandle](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getnativehandle)                                                            | 获取原生 SDK 的 C++ 句柄。                                                                                                                                                                             |
| [getNetworkType](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getnetworktype)                                                              | 获取本地网络连接类型。                                                                                                                                                                                    |
| [getNtpWallTimeInMs](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getntpwalltimeinms)                                                      | 获取当前 NTP（网络时间协议）时间。                                                                                                                                                                            |
| [getSdkVersion](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getversion)                                                                   | 获取 SDK 的版本号。                                                                                                                                                                                   |
| [isFeatureAvailableOnDevice](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_isfeatureavailableondevice)                                      | 检查当前设备是否支持指定的高级功能。                                                                                                                                                                             |
| [queryDeviceScore](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_querydevicescore)                                                          | 查询设备评分。                                                                                                                                                                                        |
| [rate](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate)                                                                                  | 允许用户在通话结束后对通话进行评分。                                                                                                                                                                             |
| [sendCustomReportMessage](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_sendcustomreportmessage)                                            | 上报自定义消息。                                                                                                                                                                                       |
| [sendCustomReportMessageEx](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_sendcustomreportmessageex)                                      | 支持上报和分析自定义消息。                                                                                                                                                                                  |
| [setAVSyncSource](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setavsyncsource)                                                            | 设置发布端的音视频同步源。                                                                                                                                                                                  |
| [setCloudProxy](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy)                                                                | 设置云代理服务。                                                                                                                                                                                       |
| [setLocalAccessPoint](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlocalaccesspoint)                                                    | 配置连接到声网私有媒体服务器接入模块。                                                                                                                                                                            |
| [setParameters](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setparameters)                                                                | 通过配置 JSON 选项，为 SDK 提供技术预览功能或特殊定制。                                                                                                                                                              |
| [setRemoteSubscribeFallbackOption \\[1/2\\]](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption)                  | 根据网络状况设置订阅端的视频流回退选项。                                                                                                                                                                           |
| [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3)                                                               | 开始音视频设备回路测试。                                                                                                                                                                                   |
| [startLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest)                                              | 开始 Last-mile 网络探测测试。                                                                                                                                                                           |
| [stopEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stopechotest)                                                                  | 停止音频通话测试。                                                                                                                                                                                      |
| [stopLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stoplastmileprobetest)                                                | 停止 Last-mile 网络探测测试。                                                                                                                                                                           |
| [onConnectionLost](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionlost)                                         | [onConnectionLost](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionlost) 回调：当 SDK 在连接中断后 10 秒内无法重新连接到声网边缘服务器时触发。                                |
| [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged)                         | 网络连接状态发生变化回调。                                                                                                                                                                                  |
| [onEncryptionError](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onencryptionerror)                                       | 内置加密错误回调。                                                                                                                                                                                      |
| [onLastmileProbeResult](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmileproberesult)                               | 上行和下行 Last-mile 网络探测测试结果的回调。                                                                                                                                                                   |
| [onLastmileQuality](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmilequality)                                       | 本地用户的 Last-mile 网络质量回调。                                                                                                                                                                        |
| [onMultipathStats](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onmultipathstats)                                         | 多路径传输统计信息回调。                                                                                                                                                                                   |
| [onNetworkQuality](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworkquality)                                         | [onNetworkQuality](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworkquality) 回调。报告频道中每个用户的 Last-mile 网络质量。                                          |
| [onNetworkTypeChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworktypechanged)                                 | 本地网络类型发生变化时的回调。                                                                                                                                                                                |
| [onPermissionError](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissionerror)                                       | 设备权限获取失败时触发的回调。                                                                                                                                                                                |
| [onPermissionGranted](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissiongranted)                                   | [onPermissionGranted](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissiongranted) 回调。用于上报已授予的权限。                                                   |
| [onProxyConnected](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onproxyconnected)                                         | 代理连接状态回调。                                                                                                                                                                                      |
| [onRemoteSubscribeFallbackToAudioOnly](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly) | [onRemoteSubscribeFallbackToAudioOnly](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly) 回调。当远端媒体流因网络变化在音频流与视频流之间切换时触发。 |
| [onUplinkNetworkInfoUpdated](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onuplinknetworkinfoupdated)                     | 上行网络信息发生变化回调。                                                                                                                                                                                  |
`;
export let structuredData = {
  contents: [{
    heading: "初始化相关",
    content: "API"
  }, {
    heading: "初始化相关",
    content: "描述"
  }, {
    heading: "初始化相关",
    content: "create \\[1/2]"
  }, {
    heading: "初始化相关",
    content: "创建并初始化 RtcEngine 实例。"
  }, {
    heading: "初始化相关",
    content: "create \\[2/2]"
  }, {
    heading: "初始化相关",
    content: "创建并初始化 RtcEngine 实例。"
  }, {
    heading: "初始化相关",
    content: "addHandler"
  }, {
    heading: "初始化相关",
    content: "添加事件处理器。"
  }, {
    heading: "初始化相关",
    content: "destroy \\[2/2]"
  }, {
    heading: "初始化相关",
    content: "销毁 RtcEngine 实例并释放相关资源。"
  }, {
    heading: "初始化相关",
    content: "destroy \\[1/2]"
  }, {
    heading: "初始化相关",
    content: "释放 RtcEngine 实例。"
  }, {
    heading: "初始化相关",
    content: "removeHandler"
  }, {
    heading: "初始化相关",
    content: "移除指定的 IRtcEngineEventHandler 实例。"
  }, {
    heading: "初始化相关",
    content: "onEngineReleased"
  }, {
    heading: "初始化相关",
    content: "RtcEngine 被释放时触发的回调。"
  }, {
    heading: "频道相关",
    content: "API"
  }, {
    heading: "频道相关",
    content: "描述"
  }, {
    heading: "频道相关",
    content: "setChannelProfile"
  }, {
    heading: "频道相关",
    content: "设置频道场景。"
  }, {
    heading: "频道相关",
    content: "joinChannel \\[1/2]"
  }, {
    heading: "频道相关",
    content: "加入一个频道。"
  }, {
    heading: "频道相关",
    content: "joinChannel \\[2/2]"
  }, {
    heading: "频道相关",
    content: "加入频道并设置媒体选项。"
  }, {
    heading: "频道相关",
    content: "joinChannelEx"
  }, {
    heading: "频道相关",
    content: "加入一个频道。"
  }, {
    heading: "频道相关",
    content: "updateChannelMediaOptions"
  }, {
    heading: "频道相关",
    content: "在加入频道后更新频道媒体选项。"
  }, {
    heading: "频道相关",
    content: "updateChannelMediaOptionsEx"
  }, {
    heading: "频道相关",
    content: "加入频道后更新频道媒体选项。"
  }, {
    heading: "频道相关",
    content: "leaveChannel \\[1/2]"
  }, {
    heading: "频道相关",
    content: "离开频道。"
  }, {
    heading: "频道相关",
    content: "leaveChannel \\[2/2]"
  }, {
    heading: "频道相关",
    content: "设置频道选项并离开频道。"
  }, {
    heading: "频道相关",
    content: "leaveChannelEx \\[1/2]"
  }, {
    heading: "频道相关",
    content: "离开频道。"
  }, {
    heading: "频道相关",
    content: "leaveChannelEx \\[2/2]"
  }, {
    heading: "频道相关",
    content: "设置频道参数并离开频道。"
  }, {
    heading: "频道相关",
    content: "preloadChannel"
  }, {
    heading: "频道相关",
    content: "预加载指定频道以缩短观众加入频道的时间。"
  }, {
    heading: "频道相关",
    content: "updatePreloadChannelToken"
  }, {
    heading: "频道相关",
    content: "更新用于预加载频道的通配 Token。"
  }, {
    heading: "频道相关",
    content: "renewToken"
  }, {
    heading: "频道相关",
    content: "更新 Token。"
  }, {
    heading: "频道相关",
    content: "setClientRole \\[1/2]"
  }, {
    heading: "频道相关",
    content: "设置客户端实例的用户角色。"
  }, {
    heading: "频道相关",
    content: "setClientRole \\[2/2]"
  }, {
    heading: "频道相关",
    content: "设置直播场景下的用户角色和观众延迟等级。"
  }, {
    heading: "频道相关",
    content: "getUserInfoByUidEx"
  }, {
    heading: "频道相关",
    content: "通过传入用户 ID 获取用户信息。"
  }, {
    heading: "频道相关",
    content: "onClientRoleChanged"
  }, {
    heading: "频道相关",
    content: "用户角色或观众延迟级别发生变化回调。"
  }, {
    heading: "频道相关",
    content: "onClientRoleChangeFailed"
  }, {
    heading: "频道相关",
    content: "切换用户角色失败时的回调。"
  }, {
    heading: "频道相关",
    content: "onError"
  }, {
    heading: "频道相关",
    content: "SDK 运行期间发生错误时触发的回调。"
  }, {
    heading: "频道相关",
    content: "onJoinChannelSuccess"
  }, {
    heading: "频道相关",
    content: "本地用户成功加入频道回调。"
  }, {
    heading: "频道相关",
    content: "onLeaveChannel"
  }, {
    heading: "频道相关",
    content: "用户离开频道回调。"
  }, {
    heading: "频道相关",
    content: "onRejoinChannelSuccess"
  }, {
    heading: "频道相关",
    content: "用户重新加入频道回调。"
  }, {
    heading: "频道相关",
    content: "onRenewTokenResult"
  }, {
    heading: "频道相关",
    content: "renewToken 调用结果回调。"
  }, {
    heading: "频道相关",
    content: "onRequestToken"
  }, {
    heading: "频道相关",
    content: "Token 过期回调。"
  }, {
    heading: "频道相关",
    content: "onRtcStats"
  }, {
    heading: "频道相关",
    content: "报告当前通话统计信息的回调。"
  }, {
    heading: "频道相关",
    content: "onTokenPrivilegeWillExpire"
  }, {
    heading: "频道相关",
    content: "Token 即将在 30 秒后过期时触发的回调。"
  }, {
    heading: "频道相关",
    content: "onUserJoined"
  }, {
    heading: "频道相关",
    content: "远端用户或主播加入频道回调。"
  }, {
    heading: "频道相关",
    content: "onUserOffline"
  }, {
    heading: "频道相关",
    content: "远端用户或主播离开频道时触发的回调。"
  }, {
    heading: "发布和订阅",
    content: "API"
  }, {
    heading: "发布和订阅",
    content: "描述"
  }, {
    heading: "发布和订阅",
    content: "muteAllRemoteAudioStreams"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复订阅所有远端用户的音频流。"
  }, {
    heading: "发布和订阅",
    content: "muteAllRemoteAudioStreamsEx"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复订阅所有远端用户的音频流。"
  }, {
    heading: "发布和订阅",
    content: "muteAllRemoteVideoStreams"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复订阅所有远端用户的视频流。"
  }, {
    heading: "发布和订阅",
    content: "muteAllRemoteVideoStreamsEx"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复订阅所有远端用户的视频流。"
  }, {
    heading: "发布和订阅",
    content: "muteLocalAudioStream"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复发布本地采集音频流。"
  }, {
    heading: "发布和订阅",
    content: "muteLocalAudioStreamEx"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复发布本地音频流。"
  }, {
    heading: "发布和订阅",
    content: "muteLocalVideoStream"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复发布本地视频流。"
  }, {
    heading: "发布和订阅",
    content: "muteLocalVideoStreamEx"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复发布本地视频流。"
  }, {
    heading: "发布和订阅",
    content: "muteRemoteAudioStream"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复订阅指定远端用户的音频流。"
  }, {
    heading: "发布和订阅",
    content: "muteRemoteAudioStreamEx"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复接收指定用户的音频流。"
  }, {
    heading: "发布和订阅",
    content: "muteRemoteVideoStream"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复订阅指定远端用户的视频流。"
  }, {
    heading: "发布和订阅",
    content: "muteRemoteVideoStreamEx"
  }, {
    heading: "发布和订阅",
    content: "停止或恢复接收指定用户的视频流。"
  }, {
    heading: "发布和订阅",
    content: "setDualStreamMode \\[1/2]"
  }, {
    heading: "发布和订阅",
    content: "设置发送端的视频流模式，用于控制是否发送视频小流。"
  }, {
    heading: "发布和订阅",
    content: "setDualStreamMode \\[2/2]"
  }, {
    heading: "发布和订阅",
    content: "设置发送端的不同质量层级的视频流模式配置。"
  }, {
    heading: "发布和订阅",
    content: "setDualStreamModeEx"
  }, {
    heading: "发布和订阅",
    content: "设置发送端的视频流模式，用于控制是否发送视频小流。"
  }, {
    heading: "发布和订阅",
    content: "setRemoteDefaultVideoStreamType \\[1/2]"
  }, {
    heading: "发布和订阅",
    content: "设置默认订阅的视频流类型。"
  }, {
    heading: "发布和订阅",
    content: "setRemoteVideoStreamType \\[1/2]"
  }, {
    heading: "发布和订阅",
    content: "设置要订阅的视频流类型。"
  }, {
    heading: "发布和订阅",
    content: "setRemoteVideoStreamTypeEx \\[1/2]"
  }, {
    heading: "发布和订阅",
    content: "设置要订阅的视频流类型。"
  }, {
    heading: "发布和订阅",
    content: "setRemoteVideoSubscriptionOptions"
  }, {
    heading: "发布和订阅",
    content: "设置订阅远端视频流的选项。"
  }, {
    heading: "发布和订阅",
    content: "setRemoteVideoSubscriptionOptionsEx"
  }, {
    heading: "发布和订阅",
    content: "设置订阅远端视频流的选项。"
  }, {
    heading: "发布和订阅",
    content: "setSubscribeAudioAllowlist"
  }, {
    heading: "发布和订阅",
    content: "设置音频流订阅的白名单。"
  }, {
    heading: "发布和订阅",
    content: "setSubscribeAudioAllowlistEx"
  }, {
    heading: "发布和订阅",
    content: "设置音频流订阅的白名单。"
  }, {
    heading: "发布和订阅",
    content: "setSubscribeAudioBlocklist"
  }, {
    heading: "发布和订阅",
    content: "设置音频流订阅的黑名单。"
  }, {
    heading: "发布和订阅",
    content: "setSubscribeAudioBlocklistEx"
  }, {
    heading: "发布和订阅",
    content: "设置音频流订阅的黑名单。"
  }, {
    heading: "发布和订阅",
    content: "setSubscribeVideoAllowlist"
  }, {
    heading: "发布和订阅",
    content: "设置视频流订阅的白名单。"
  }, {
    heading: "发布和订阅",
    content: "setSubscribeVideoAllowlistEx"
  }, {
    heading: "发布和订阅",
    content: "设置视频流订阅的白名单。"
  }, {
    heading: "发布和订阅",
    content: "setSubscribeVideoBlocklist"
  }, {
    heading: "发布和订阅",
    content: "设置视频流订阅的阻止名单。"
  }, {
    heading: "发布和订阅",
    content: "setSubscribeVideoBlocklistEx"
  }, {
    heading: "发布和订阅",
    content: "设置视频流订阅的黑名单。"
  }, {
    heading: "发布和订阅",
    content: "onAudioPublishStateChanged"
  }, {
    heading: "发布和订阅",
    content: "音频发布状态发生变化回调。"
  }, {
    heading: "发布和订阅",
    content: "onAudioSubscribeStateChanged"
  }, {
    heading: "发布和订阅",
    content: "音频订阅状态发生变化回调。"
  }, {
    heading: "发布和订阅",
    content: "onVideoSubscribeStateChanged"
  }, {
    heading: "发布和订阅",
    content: "视频订阅状态发生变化回调。"
  }, {
    heading: "音频基础功能",
    content: "API"
  }, {
    heading: "音频基础功能",
    content: "描述"
  }, {
    heading: "音频基础功能",
    content: "adjustPlaybackSignalVolume"
  }, {
    heading: "音频基础功能",
    content: "调节所有远端用户的本地播放音量。"
  }, {
    heading: "音频基础功能",
    content: "adjustUserPlaybackSignalVolume"
  }, {
    heading: "音频基础功能",
    content: "调节指定远端用户的播放音量。"
  }, {
    heading: "音频基础功能",
    content: "adjustUserPlaybackSignalVolumeEx"
  }, {
    heading: "音频基础功能",
    content: "调整指定远端用户的播放音量。"
  }, {
    heading: "音频基础功能",
    content: "disableAudio"
  }, {
    heading: "音频基础功能",
    content: "禁用音频模块。"
  }, {
    heading: "音频基础功能",
    content: "enableAudio"
  }, {
    heading: "音频基础功能",
    content: "启用音频模块。"
  }, {
    heading: "音频基础功能",
    content: "enableAudioVolumeIndication"
  }, {
    heading: "音频基础功能",
    content: "启用用户音量提示上报功能。"
  }, {
    heading: "音频基础功能",
    content: "enableAudioVolumeIndicationEx"
  }, {
    heading: "音频基础功能",
    content: "启用用户音量提示的上报功能。"
  }, {
    heading: "音频基础功能",
    content: "setAudioProfile \\[2/2]"
  }, {
    heading: "音频基础功能",
    content: "设置音频配置文件。"
  }, {
    heading: "音频基础功能",
    content: "setAudioScenario"
  }, {
    heading: "音频基础功能",
    content: "设置音频场景。"
  }, {
    heading: "音频基础功能",
    content: "onActiveSpeaker"
  }, {
    heading: "音频基础功能",
    content: "最活跃远端说话人回调。"
  }, {
    heading: "音频基础功能",
    content: "onAudioVolumeIndication"
  }, {
    heading: "音频基础功能",
    content: "报告用户音量信息的回调。"
  }, {
    heading: "音频基础功能",
    content: "onFirstLocalAudioFramePublished"
  }, {
    heading: "音频基础功能",
    content: "本地音频首帧发布回调。"
  }, {
    heading: "音频基础功能",
    content: "onLocalAudioStateChanged"
  }, {
    heading: "音频基础功能",
    content: "本地音频流状态发生变化回调。"
  }, {
    heading: "音频基础功能",
    content: "onLocalAudioStats"
  }, {
    heading: "音频基础功能",
    content: "本地音频流统计信息回调。"
  }, {
    heading: "音频基础功能",
    content: "onRemoteAudioStateChanged"
  }, {
    heading: "音频基础功能",
    content: "远端音频状态发生变化回调。"
  }, {
    heading: "音频基础功能",
    content: "onRemoteAudioStats"
  }, {
    heading: "音频基础功能",
    content: "报告每个远端音频流的传输层统计信息回调。"
  }, {
    heading: "音频基础功能",
    content: "onUserMuteAudio"
  }, {
    heading: "音频基础功能",
    content: "远端用户或主播停止或恢复发送音频流的回调。"
  }, {
    heading: "音频采集",
    content: "API"
  }, {
    heading: "音频采集",
    content: "描述"
  }, {
    heading: "音频采集",
    content: "adjustRecordingSignalVolume"
  }, {
    heading: "音频采集",
    content: "调节采集音频信号的音量。"
  }, {
    heading: "音频采集",
    content: "enableInEarMonitoring \\[1/2]"
  }, {
    heading: "音频采集",
    content: "启用或关闭耳返监听。"
  }, {
    heading: "音频采集",
    content: "enableInEarMonitoring \\[2/2]"
  }, {
    heading: "音频采集",
    content: "启用或关闭耳返监听功能。"
  }, {
    heading: "音频采集",
    content: "enableLocalAudio"
  }, {
    heading: "音频采集",
    content: "启用或关闭本地音频采集功能。"
  }, {
    heading: "音频采集",
    content: "muteRecordingSignal"
  }, {
    heading: "音频采集",
    content: "设置是否静音录制信号。"
  }, {
    heading: "音频采集",
    content: "setInEarMonitoringVolume"
  }, {
    heading: "音频采集",
    content: "设置耳返音量。"
  }, {
    heading: "人声音效",
    content: "API"
  }, {
    heading: "人声音效",
    content: "描述"
  }, {
    heading: "人声音效",
    content: "enableVoiceAITuner"
  }, {
    heading: "人声音效",
    content: "启用或关闭语音 AI 调音器。"
  }, {
    heading: "人声音效",
    content: "getAudioEffectManager"
  }, {
    heading: "人声音效",
    content: "获取用于管理音效文件的 `IAudioEffectManager` 实例。"
  }, {
    heading: "人声音效",
    content: "setAdvancedAudioOptions"
  }, {
    heading: "人声音效",
    content: "设置高级音频选项。"
  }, {
    heading: "人声音效",
    content: "setAINSMode"
  }, {
    heading: "人声音效",
    content: "设置是否启用 AI 降噪功能并设置降噪模式。"
  }, {
    heading: "人声音效",
    content: "setAudioEffectParameters"
  }, {
    heading: "人声音效",
    content: "设置 SDK 预设音效的参数。"
  }, {
    heading: "人声音效",
    content: "setAudioEffectPreset"
  }, {
    heading: "人声音效",
    content: "设置 SDK 预设的音效效果。"
  }, {
    heading: "人声音效",
    content: "setLocalVoiceEqualization"
  }, {
    heading: "人声音效",
    content: "设置本地语音的均衡效果。"
  }, {
    heading: "人声音效",
    content: "setLocalVoiceFormant"
  }, {
    heading: "人声音效",
    content: "设置共振峰比例以改变人声音色。"
  }, {
    heading: "人声音效",
    content: "setLocalVoicePitch"
  }, {
    heading: "人声音效",
    content: "设置本地语音的音调。"
  }, {
    heading: "人声音效",
    content: "setLocalVoiceReverb"
  }, {
    heading: "人声音效",
    content: "设置本地语音的混响效果。"
  }, {
    heading: "人声音效",
    content: "setVoiceBeautifierParameters"
  }, {
    heading: "人声音效",
    content: "设置预设美声特效的参数。"
  }, {
    heading: "人声音效",
    content: "setVoiceBeautifierPreset"
  }, {
    heading: "人声音效",
    content: "设置预设的美声效果。"
  }, {
    heading: "人声音效",
    content: "setVoiceConversionPreset"
  }, {
    heading: "人声音效",
    content: "设置 SDK 预设的变声效果。"
  }, {
    heading: "听声辨位",
    content: "API"
  }, {
    heading: "听声辨位",
    content: "描述"
  }, {
    heading: "听声辨位",
    content: "enableSoundPositionIndication"
  }, {
    heading: "听声辨位",
    content: "启用或关闭远端用户的立体声声像功能。"
  }, {
    heading: "听声辨位",
    content: "setRemoteVoicePosition"
  }, {
    heading: "听声辨位",
    content: "设置远端用户语音的二维位置和音量。"
  }, {
    heading: "听声辨位",
    content: "setRemoteVoicePositionEx"
  }, {
    heading: "听声辨位",
    content: "设置远端用户语音的二维位置和音量。"
  }, {
    heading: "空间音频",
    content: "API"
  }, {
    heading: "空间音频",
    content: "描述"
  }, {
    heading: "空间音频",
    content: "initialize"
  }, {
    heading: "空间音频",
    content: "初始化 ILocalSpatialAudioEngine。"
  }, {
    heading: "空间音频",
    content: "clearRemotePositions"
  }, {
    heading: "空间音频",
    content: "移除所有远端用户的空间位置。"
  }, {
    heading: "空间音频",
    content: "create"
  }, {
    heading: "空间音频",
    content: "创建一个 ILocalSpatialAudioEngine 实例。"
  }, {
    heading: "空间音频",
    content: "enableSpatialAudio"
  }, {
    heading: "空间音频",
    content: "启用或关闭空间音效。"
  }, {
    heading: "空间音频",
    content: "muteAllRemoteAudioStreams"
  }, {
    heading: "空间音频",
    content: "停止或恢复订阅所有远端用户的音频流。"
  }, {
    heading: "空间音频",
    content: "muteLocalAudioStream"
  }, {
    heading: "空间音频",
    content: "停止或恢复发布本地音频流。"
  }, {
    heading: "空间音频",
    content: "muteRemoteAudioStream"
  }, {
    heading: "空间音频",
    content: "停止或恢复订阅指定远端用户的音频流。"
  }, {
    heading: "空间音频",
    content: "destroy"
  }, {
    heading: "空间音频",
    content: "销毁 ILocalSpatialAudioEngine 实例。"
  }, {
    heading: "空间音频",
    content: "removeRemotePosition"
  }, {
    heading: "空间音频",
    content: "移除指定远端用户的空间位置信息。"
  }, {
    heading: "空间音频",
    content: "setAudioRecvRange"
  }, {
    heading: "空间音频",
    content: "设置本地用户的音频接收范围。"
  }, {
    heading: "空间音频",
    content: "setDistanceUnit"
  }, {
    heading: "空间音频",
    content: "设置游戏引擎中每个单位距离对应的米数。"
  }, {
    heading: "空间音频",
    content: "setHeadphoneEQParameters"
  }, {
    heading: "空间音频",
    content: "设置耳机均衡器的低频和高频参数。"
  }, {
    heading: "空间音频",
    content: "setHeadphoneEQPreset"
  }, {
    heading: "空间音频",
    content: "设置预设的耳机均衡器效果。"
  }, {
    heading: "空间音频",
    content: "setMaxAudioRecvCount"
  }, {
    heading: "空间音频",
    content: "设置你在指定音频接收范围内可接收的最大音频流数量。"
  }, {
    heading: "空间音频",
    content: "setPlayerAttenuation"
  }, {
    heading: "空间音频",
    content: "设置媒体播放器的声音衰减属性。"
  }, {
    heading: "空间音频",
    content: "setRemoteAudioAttenuation"
  }, {
    heading: "空间音频",
    content: "设置指定用户的声音衰减效果。"
  }, {
    heading: "空间音频",
    content: "setRemoteUserSpatialAudioParams"
  }, {
    heading: "空间音频",
    content: "设置远端用户的空间音效参数。"
  }, {
    heading: "空间音频",
    content: "setSpatialAudioParams"
  }, {
    heading: "空间音频",
    content: "启用或关闭媒体播放器的空间音效。"
  }, {
    heading: "空间音频",
    content: "setZones"
  }, {
    heading: "空间音频",
    content: "设置隔音区域。"
  }, {
    heading: "空间音频",
    content: "updatePlayerPositionInfo"
  }, {
    heading: "空间音频",
    content: "更新媒体播放器的空间位置。"
  }, {
    heading: "空间音频",
    content: "updateRemotePosition"
  }, {
    heading: "空间音频",
    content: "更新指定远端用户的空间位置。"
  }, {
    heading: "空间音频",
    content: "updateSelfPosition"
  }, {
    heading: "空间音频",
    content: "更新本地用户的空间位置。"
  }, {
    heading: "本地音频合流",
    content: "API"
  }, {
    heading: "本地音频合流",
    content: "描述"
  }, {
    heading: "本地音频合流",
    content: "startLocalAudioMixer"
  }, {
    heading: "本地音频合流",
    content: "开始本地音频合流。"
  }, {
    heading: "本地音频合流",
    content: "stopLocalAudioMixer"
  }, {
    heading: "本地音频合流",
    content: "停止本地音频合流。"
  }, {
    heading: "本地音频合流",
    content: "updateLocalAudioMixerConfiguration"
  }, {
    heading: "本地音频合流",
    content: "更新本地音频合流配置。"
  }, {
    heading: "原始音频数据",
    content: "API"
  }, {
    heading: "原始音频数据",
    content: "描述"
  }, {
    heading: "原始音频数据",
    content: "getEarMonitoringAudioParams"
  }, {
    heading: "原始音频数据",
    content: "onEarMonitoringAudioFrame 回调的音频格式设置方法。"
  }, {
    heading: "原始音频数据",
    content: "getMixedAudioParams"
  }, {
    heading: "原始音频数据",
    content: "设置 onMixedAudioFrame 回调的音频格式。"
  }, {
    heading: "原始音频数据",
    content: "getObservedAudioFramePosition"
  }, {
    heading: "原始音频数据",
    content: "设置音频数据观察位置。"
  }, {
    heading: "原始音频数据",
    content: "getPlaybackAudioParams"
  }, {
    heading: "原始音频数据",
    content: "onPlaybackAudioFrame 回调的音频格式设置方法。"
  }, {
    heading: "原始音频数据",
    content: "getRecordAudioParams"
  }, {
    heading: "原始音频数据",
    content: "设置 onRecordAudioFrame 回调的音频格式。"
  }, {
    heading: "原始音频数据",
    content: "registerAudioFrameObserver"
  }, {
    heading: "原始音频数据",
    content: "注册音频帧观测器对象。"
  }, {
    heading: "原始音频数据",
    content: "setEarMonitoringAudioFrameParameters"
  }, {
    heading: "原始音频数据",
    content: "设置耳返音频数据格式。"
  }, {
    heading: "原始音频数据",
    content: "setMixedAudioFrameParameters"
  }, {
    heading: "原始音频数据",
    content: "设置混音后用于采集和播放的原始音频数据格式。"
  }, {
    heading: "原始音频数据",
    content: "setPlaybackAudioFrameBeforeMixingParameters \\[1/2]"
  }, {
    heading: "原始音频数据",
    content: "设置混音前原始音频播放数据的格式。"
  }, {
    heading: "原始音频数据",
    content: "setPlaybackAudioFrameBeforeMixingParameters \\[2/2]"
  }, {
    heading: "原始音频数据",
    content: "设置 onPlaybackAudioFrameBeforeMixing 回调中返回音频数据的格式。"
  }, {
    heading: "原始音频数据",
    content: "setPlaybackAudioFrameParameters"
  }, {
    heading: "原始音频数据",
    content: "设置原始音频播放数据的格式。"
  }, {
    heading: "原始音频数据",
    content: "setRecordingAudioFrameParameters"
  }, {
    heading: "原始音频数据",
    content: "设置采集的原始音频数据格式。"
  }, {
    heading: "原始音频数据",
    content: "onEarMonitoringAudioFrame"
  }, {
    heading: "原始音频数据",
    content: "耳返音频帧回调。"
  }, {
    heading: "原始音频数据",
    content: "onMixedAudioFrame"
  }, {
    heading: "原始音频数据",
    content: "获取混合采集和播放的音频帧回调。"
  }, {
    heading: "原始音频数据",
    content: "onPlaybackAudioFrame"
  }, {
    heading: "原始音频数据",
    content: "获取用于播放的原始音频帧回调。"
  }, {
    heading: "原始音频数据",
    content: "onPlaybackAudioFrameBeforeMixing"
  }, {
    heading: "原始音频数据",
    content: "获取已订阅远端用户混音前的音频帧回调。"
  }, {
    heading: "原始音频数据",
    content: "onRecordAudioFrame"
  }, {
    heading: "原始音频数据",
    content: "获取采集到的音频帧回调。"
  }, {
    heading: "已编码音频数据",
    content: "API"
  }, {
    heading: "已编码音频数据",
    content: "描述"
  }, {
    heading: "已编码音频数据",
    content: "registerAudioEncodedFrameObserver"
  }, {
    heading: "已编码音频数据",
    content: "注册编码音频数据的观察器。"
  }, {
    heading: "已编码音频数据",
    content: "onMixedAudioEncodedFrame"
  }, {
    heading: "已编码音频数据",
    content: "本地及所有远端用户的混音编码音频数据回调。"
  }, {
    heading: "已编码音频数据",
    content: "onPlaybackAudioEncodedFrame"
  }, {
    heading: "已编码音频数据",
    content: "获取所有远端用户编码音频数据的回调。"
  }, {
    heading: "已编码音频数据",
    content: "onRecordAudioEncodedFrame"
  }, {
    heading: "已编码音频数据",
    content: "本地用户编码音频数据回调。"
  }, {
    heading: "自定义音频采集和渲染",
    content: "API"
  }, {
    heading: "自定义音频采集和渲染",
    content: "描述"
  }, {
    heading: "自定义音频采集和渲染",
    content: "adjustCustomAudioPlayoutVolume"
  }, {
    heading: "自定义音频采集和渲染",
    content: "调节本地播放的自定义音频轨道的音量。"
  }, {
    heading: "自定义音频采集和渲染",
    content: "adjustCustomAudioPublishVolume"
  }, {
    heading: "自定义音频采集和渲染",
    content: "调节远端播放的自定义音频轨道的音量。"
  }, {
    heading: "自定义音频采集和渲染",
    content: "createCustomAudioTrack"
  }, {
    heading: "自定义音频采集和渲染",
    content: "创建一个自定义音频轨道。"
  }, {
    heading: "自定义音频采集和渲染",
    content: "destroyCustomAudioTrack"
  }, {
    heading: "自定义音频采集和渲染",
    content: "销毁指定的音频轨道。"
  }, {
    heading: "自定义音频采集和渲染",
    content: "enableCustomAudioLocalPlayback"
  }, {
    heading: "自定义音频采集和渲染",
    content: "设置是否启用外部音频源的本地播放。"
  }, {
    heading: "自定义音频采集和渲染",
    content: "pullPlaybackAudioFrame \\[1/2]"
  }, {
    heading: "自定义音频采集和渲染",
    content: "拉取远端混音后的音频数据用于播放。"
  }, {
    heading: "自定义音频采集和渲染",
    content: "pullPlaybackAudioFrame \\[2/2]"
  }, {
    heading: "自定义音频采集和渲染",
    content: "拉取远端音频数据。"
  }, {
    heading: "自定义音频采集和渲染",
    content: "pushExternalAudioFrame"
  }, {
    heading: "自定义音频采集和渲染",
    content: "将外部音频帧推送到 SDK。"
  }, {
    heading: "自定义音频采集和渲染",
    content: "setExternalAudioSink"
  }, {
    heading: "自定义音频采集和渲染",
    content: "设置外部音频渲染器。"
  }, {
    heading: "音频频谱",
    content: "API"
  }, {
    heading: "音频频谱",
    content: "描述"
  }, {
    heading: "音频频谱",
    content: "disableAudioSpectrumMonitor"
  }, {
    heading: "音频频谱",
    content: "禁用音频频谱监测。"
  }, {
    heading: "音频频谱",
    content: "enableAudioSpectrumMonitor"
  }, {
    heading: "音频频谱",
    content: "开启音频频谱监测功能。"
  }, {
    heading: "音频频谱",
    content: "registerAudioSpectrumObserver"
  }, {
    heading: "音频频谱",
    content: "注册音频频谱观察器。"
  }, {
    heading: "音频频谱",
    content: "unRegisterAudioSpectrumObserver"
  }, {
    heading: "音频频谱",
    content: "取消注册音频频谱观察器。"
  }, {
    heading: "音频频谱",
    content: "onLocalAudioSpectrum"
  }, {
    heading: "音频频谱",
    content: "本地音频频谱数据回调。"
  }, {
    heading: "音频频谱",
    content: "onRemoteAudioSpectrum"
  }, {
    heading: "音频频谱",
    content: "远端音频频谱数据回调。"
  }, {
    heading: "视频基础功能",
    content: "API"
  }, {
    heading: "视频基础功能",
    content: "描述"
  }, {
    heading: "视频基础功能",
    content: "disableVideo"
  }, {
    heading: "视频基础功能",
    content: "关闭视频模块。"
  }, {
    heading: "视频基础功能",
    content: "enableLocalVideo"
  }, {
    heading: "视频基础功能",
    content: "启用或禁用本地视频采集。"
  }, {
    heading: "视频基础功能",
    content: "enableVideo"
  }, {
    heading: "视频基础功能",
    content: "启用视频模块。"
  }, {
    heading: "视频基础功能",
    content: "setVideoEncoderConfiguration"
  }, {
    heading: "视频基础功能",
    content: "设置本地视频的编码器配置。"
  }, {
    heading: "视频基础功能",
    content: "setVideoEncoderConfigurationEx"
  }, {
    heading: "视频基础功能",
    content: "设置本地视频的编码器配置。"
  }, {
    heading: "视频基础功能",
    content: "setVideoScenario"
  }, {
    heading: "视频基础功能",
    content: "设置视频应用场景。"
  }, {
    heading: "视频基础功能",
    content: "startPreview \\[1/2]"
  }, {
    heading: "视频基础功能",
    content: "启用本地视频预览。"
  }, {
    heading: "视频基础功能",
    content: "startPreview \\[2/2]"
  }, {
    heading: "视频基础功能",
    content: "启用本地视频预览，并指定用于预览的视频源。"
  }, {
    heading: "视频基础功能",
    content: "stopPreview \\[1/2]"
  }, {
    heading: "视频基础功能",
    content: "停止本地视频预览。"
  }, {
    heading: "视频基础功能",
    content: "stopPreview \\[2/2]"
  }, {
    heading: "视频基础功能",
    content: "停止本地视频预览。"
  }, {
    heading: "视频基础功能",
    content: "onFirstLocalVideoFrame"
  }, {
    heading: "视频基础功能",
    content: "本地视频首帧在本地视图中显示时触发的回调。"
  }, {
    heading: "视频基础功能",
    content: "onFirstLocalVideoFramePublished"
  }, {
    heading: "视频基础功能",
    content: "本地视频首帧发布回调。"
  }, {
    heading: "视频基础功能",
    content: "onFirstRemoteVideoFrame"
  }, {
    heading: "视频基础功能",
    content: "远端视频首帧显示回调。"
  }, {
    heading: "视频基础功能",
    content: "onLocalVideoEvent"
  }, {
    heading: "视频基础功能",
    content: "本地视频事件发生时触发的回调。"
  }, {
    heading: "视频基础功能",
    content: "onLocalVideoStateChanged"
  }, {
    heading: "视频基础功能",
    content: "本地视频流状态发生变化回调。"
  }, {
    heading: "视频基础功能",
    content: "onLocalVideoStats"
  }, {
    heading: "视频基础功能",
    content: "本地视频流统计信息回调。"
  }, {
    heading: "视频基础功能",
    content: "onRemoteVideoStateChanged"
  }, {
    heading: "视频基础功能",
    content: "远端视频状态发生改变回调。"
  }, {
    heading: "视频基础功能",
    content: "onRemoteVideoStats"
  }, {
    heading: "视频基础功能",
    content: "报告每个远端用户发送的视频流的统计信息回调。"
  }, {
    heading: "视频基础功能",
    content: "onUserEnableVideo"
  }, {
    heading: "视频基础功能",
    content: "远端用户启用或关闭视频模块的回调。"
  }, {
    heading: "视频基础功能",
    content: "onUserMuteVideo"
  }, {
    heading: "视频基础功能",
    content: "远端视频状态发生改变回调。"
  }, {
    heading: "视频基础功能",
    content: "onVideoPublishStateChanged"
  }, {
    heading: "视频基础功能",
    content: "视频发布状态发生变化回调。"
  }, {
    heading: "视频基础功能",
    content: "onVideoSizeChanged"
  }, {
    heading: "视频基础功能",
    content: "指定用户的视频尺寸或旋转信息发生变化回调。"
  }, {
    heading: "摄像头采集",
    content: "API"
  }, {
    heading: "摄像头采集",
    content: "描述"
  }, {
    heading: "摄像头采集",
    content: "startCameraCapture"
  }, {
    heading: "摄像头采集",
    content: "开始视频采集。"
  }, {
    heading: "摄像头采集",
    content: "stopCameraCapture"
  }, {
    heading: "摄像头采集",
    content: "停止摄像头采集。"
  }, {
    heading: "屏幕采集",
    content: "API"
  }, {
    heading: "屏幕采集",
    content: "描述"
  }, {
    heading: "屏幕采集",
    content: "queryScreenCaptureCapability"
  }, {
    heading: "屏幕采集",
    content: "查询设备在屏幕共享时支持的最高帧率。"
  }, {
    heading: "屏幕采集",
    content: "setExternalMediaProjection"
  }, {
    heading: "屏幕采集",
    content: "配置 SDK 外部的 `MediaProjection` 以采集屏幕视频流。"
  }, {
    heading: "屏幕采集",
    content: "setScreenCaptureScenario"
  }, {
    heading: "屏幕采集",
    content: "设置屏幕共享场景。"
  }, {
    heading: "屏幕采集",
    content: "startScreenCapture"
  }, {
    heading: "屏幕采集",
    content: "开始屏幕采集。"
  }, {
    heading: "屏幕采集",
    content: "stopScreenCapture"
  }, {
    heading: "屏幕采集",
    content: "停止屏幕采集。"
  }, {
    heading: "屏幕采集",
    content: "updateScreenCaptureParameters"
  }, {
    heading: "屏幕采集",
    content: "更新屏幕采集参数。"
  }, {
    heading: "本地截图上传",
    content: "API"
  }, {
    heading: "本地截图上传",
    content: "描述"
  }, {
    heading: "本地截图上传",
    content: "enableContentInspect"
  }, {
    heading: "本地截图上传",
    content: "启用或关闭本地截图上传功能。"
  }, {
    heading: "本地截图上传",
    content: "enableContentInspectEx"
  }, {
    heading: "本地截图上传",
    content: "启用或关闭本地截图上传功能。"
  }, {
    heading: "本地截图上传",
    content: "takeSnapshot \\[1/2]"
  }, {
    heading: "本地截图上传",
    content: "截取指定用户的视频流快照并保存为 JPG 图像。"
  }, {
    heading: "本地截图上传",
    content: "takeSnapshot \\[2/2]"
  }, {
    heading: "本地截图上传",
    content: "在指定的观察点截取视频截图。"
  }, {
    heading: "本地截图上传",
    content: "takeSnapshotEx \\[1/2]"
  }, {
    heading: "本地截图上传",
    content: "使用连接 ID 对视频流进行截图。"
  }, {
    heading: "本地截图上传",
    content: "takeSnapshotEx \\[2/2]"
  }, {
    heading: "本地截图上传",
    content: "通过连接 ID 获取指定用户的视频截图。"
  }, {
    heading: "本地截图上传",
    content: "onSnapshotTaken"
  }, {
    heading: "本地截图上传",
    content: "视频截图结果回调。"
  }, {
    heading: "虚拟背景",
    content: "API"
  }, {
    heading: "虚拟背景",
    content: "描述"
  }, {
    heading: "虚拟背景",
    content: "enableVirtualBackground \\[1/2]"
  }, {
    heading: "虚拟背景",
    content: "启用或关闭虚拟背景功能。"
  }, {
    heading: "虚拟背景",
    content: "enableVirtualBackground \\[2/2]"
  }, {
    heading: "虚拟背景",
    content: "启用虚拟背景并指定媒体源，或关闭虚拟背景。"
  }, {
    heading: "本地合图",
    content: "API"
  }, {
    heading: "本地合图",
    content: "描述"
  }, {
    heading: "本地合图",
    content: "startLocalVideoTranscoder"
  }, {
    heading: "本地合图",
    content: "开始本地视频合图。"
  }, {
    heading: "本地合图",
    content: "stopLocalVideoTranscoder"
  }, {
    heading: "本地合图",
    content: "停止本地合图。"
  }, {
    heading: "本地合图",
    content: "updateLocalTranscoderConfiguration"
  }, {
    heading: "本地合图",
    content: "更新本地合图配置。"
  }, {
    heading: "本地合图",
    content: "onLocalVideoTranscoderError"
  }, {
    heading: "本地合图",
    content: "本地视频合图过程中发生错误回调。"
  }, {
    heading: "视频增强",
    content: "API"
  }, {
    heading: "视频增强",
    content: "描述"
  }, {
    heading: "视频增强",
    content: "addOrUpdateVideoEffect"
  }, {
    heading: "视频增强",
    content: "为指定的视频特效节点 ID 和模板添加或更新视频特效。"
  }, {
    heading: "视频增强",
    content: "createVideoEffectObject"
  }, {
    heading: "视频增强",
    content: "创建一个 IVideoEffectObject 视频特效对象。"
  }, {
    heading: "视频增强",
    content: "destroyVideoEffectObject"
  }, {
    heading: "视频增强",
    content: "销毁一个视频特效对象。"
  }, {
    heading: "视频增强",
    content: "getFaceShapeAreaOptions \\[1/2]"
  }, {
    heading: "视频增强",
    content: "获取美颜区域的当前设置。"
  }, {
    heading: "视频增强",
    content: "getFaceShapeAreaOptions \\[2/2]"
  }, {
    heading: "视频增强",
    content: "获取当前美颜效果区域的设置选项。"
  }, {
    heading: "视频增强",
    content: "getFaceShapeBeautyOptions \\[1/2]"
  }, {
    heading: "视频增强",
    content: "获取当前的美颜特效设置。"
  }, {
    heading: "视频增强",
    content: "getFaceShapeBeautyOptions \\[2/2]"
  }, {
    heading: "视频增强",
    content: "获取当前的美颜特效设置。"
  }, {
    heading: "视频增强",
    content: "getOptions"
  }, {
    heading: "视频增强",
    content: "获取当前配置的水印显示选项。"
  }, {
    heading: "视频增强",
    content: "getVideoEffectBoolParam"
  }, {
    heading: "视频增强",
    content: "获取视频特效中的布尔类型参数。"
  }, {
    heading: "视频增强",
    content: "getVideoEffectFloatParam"
  }, {
    heading: "视频增强",
    content: "获取视频特效中指定参数的 `float` 类型值。"
  }, {
    heading: "视频增强",
    content: "getVideoEffectIntParam"
  }, {
    heading: "视频增强",
    content: "获取视频特效中的整数类型参数。"
  }, {
    heading: "视频增强",
    content: "performVideoEffectAction"
  }, {
    heading: "视频增强",
    content: "对指定的视频特效节点执行操作。"
  }, {
    heading: "视频增强",
    content: "removeVideoEffect"
  }, {
    heading: "视频增强",
    content: "移除指定节点 ID 的视频特效节点。"
  }, {
    heading: "视频增强",
    content: "setBeautyEffectOptions \\[1/2]"
  }, {
    heading: "视频增强",
    content: "设置美颜特效功能及其参数。"
  }, {
    heading: "视频增强",
    content: "setBeautyEffectOptions \\[2/2]"
  }, {
    heading: "视频增强",
    content: "设置美颜特效选项并指定媒体源。"
  }, {
    heading: "视频增强",
    content: "setColorEnhanceOptions \\[1/2]"
  }, {
    heading: "视频增强",
    content: "设置色彩增强功能。"
  }, {
    heading: "视频增强",
    content: "setColorEnhanceOptions \\[2/2]"
  }, {
    heading: "视频增强",
    content: "设置色彩增强选项并指定媒体源。"
  }, {
    heading: "视频增强",
    content: "setFaceShapeAreaOptions \\[1/2]"
  }, {
    heading: "视频增强",
    content: "设置面部区域的美颜特效选项并指定媒体源。"
  }, {
    heading: "视频增强",
    content: "setFaceShapeAreaOptions \\[2/2]"
  }, {
    heading: "视频增强",
    content: "设置美颜增强的面部区域选项。"
  }, {
    heading: "视频增强",
    content: "setFaceShapeBeautyOptions \\[1/2]"
  }, {
    heading: "视频增强",
    content: "设置美型效果并指定应用的媒体源。"
  }, {
    heading: "视频增强",
    content: "setFaceShapeBeautyOptions \\[2/2]"
  }, {
    heading: "视频增强",
    content: "设置美型选项。"
  }, {
    heading: "视频增强",
    content: "setFilterEffectOptions \\[1/2]"
  }, {
    heading: "视频增强",
    content: "设置滤镜特效参数并指定媒体源。"
  }, {
    heading: "视频增强",
    content: "setFilterEffectOptions \\[2/2]"
  }, {
    heading: "视频增强",
    content: "设置滤镜特效选项。"
  }, {
    heading: "视频增强",
    content: "setLowlightEnhanceOptions \\[1/2]"
  }, {
    heading: "视频增强",
    content: "设置暗光增强功能。"
  }, {
    heading: "视频增强",
    content: "setLowlightEnhanceOptions \\[2/2]"
  }, {
    heading: "视频增强",
    content: "设置低光增强选项并指定媒体源。"
  }, {
    heading: "视频增强",
    content: "setVideoDenoiserOptions \\[1/2]"
  }, {
    heading: "视频增强",
    content: "设置视频降噪功能及其选项。"
  }, {
    heading: "视频增强",
    content: "setVideoDenoiserOptions \\[2/2]"
  }, {
    heading: "视频增强",
    content: "设置视频降噪并指定媒体源。"
  }, {
    heading: "视频增强",
    content: "setVideoEffectBoolParam"
  }, {
    heading: "视频增强",
    content: "设置视频特效的布尔参数。"
  }, {
    heading: "视频增强",
    content: "setVideoEffectFloatParam"
  }, {
    heading: "视频增强",
    content: "设置视频特效的浮点参数。"
  }, {
    heading: "视频增强",
    content: "setVideoEffectIntParam"
  }, {
    heading: "视频增强",
    content: "设置视频特效的整数参数。"
  }, {
    heading: "人脸检测",
    content: "API"
  }, {
    heading: "人脸检测",
    content: "描述"
  }, {
    heading: "人脸检测",
    content: "enableFaceDetection"
  }, {
    heading: "人脸检测",
    content: "启用或关闭本地用户的人脸检测功能。"
  }, {
    heading: "人脸检测",
    content: "onFacePositionChanged"
  }, {
    heading: "人脸检测",
    content: "上报本地用户的人脸检测结果。"
  }, {
    heading: "直播水印",
    content: "API"
  }, {
    heading: "直播水印",
    content: "描述"
  }, {
    heading: "直播水印",
    content: "addVideoWatermark \\[3/3]"
  }, {
    heading: "直播水印",
    content: "向本地视频流添加水印图像。"
  }, {
    heading: "直播水印",
    content: "addVideoWatermarkEx \\[2/2]"
  }, {
    heading: "直播水印",
    content: "向本地视频添加水印图像。"
  }, {
    heading: "直播水印",
    content: "clearVideoWatermarkEx"
  }, {
    heading: "直播水印",
    content: "从视频流中移除水印图像。"
  }, {
    heading: "直播水印",
    content: "clearVideoWatermarks"
  }, {
    heading: "直播水印",
    content: "从视频流中移除水印图像。"
  }, {
    heading: "直播水印",
    content: "getBuffer"
  }, {
    heading: "直播水印",
    content: "获取水印图像的数据缓冲区。"
  }, {
    heading: "直播水印",
    content: "getFormat"
  }, {
    heading: "直播水印",
    content: "获取水印图像的格式。"
  }, {
    heading: "直播水印",
    content: "getHeight"
  }, {
    heading: "直播水印",
    content: "获取水印图像的高度。"
  }, {
    heading: "直播水印",
    content: "getId"
  }, {
    heading: "直播水印",
    content: "获取水印的唯一标识符。"
  }, {
    heading: "直播水印",
    content: "getImageUrl"
  }, {
    heading: "直播水印",
    content: "获取水印图像的 URL。"
  }, {
    heading: "直播水印",
    content: "getPositionInLandscapeMode"
  }, {
    heading: "直播水印",
    content: "获取横屏模式下水印的位置。"
  }, {
    heading: "直播水印",
    content: "getPositionInPortraitMode"
  }, {
    heading: "直播水印",
    content: "获取竖屏模式下水印的位置。"
  }, {
    heading: "直播水印",
    content: "getType"
  }, {
    heading: "直播水印",
    content: "获取当前水印配置中的水印类型信息。"
  }, {
    heading: "直播水印",
    content: "getWidth"
  }, {
    heading: "直播水印",
    content: "获取水印图像的宽度。"
  }, {
    heading: "直播水印",
    content: "getzOrder"
  }, {
    heading: "直播水印",
    content: "获取水印图像的 Z-order 索引。"
  }, {
    heading: "直播水印",
    content: "isVisibleInPreview"
  }, {
    heading: "直播水印",
    content: "检查水印在本地视频预览中是否可见。"
  }, {
    heading: "直播水印",
    content: "removeVideoWatermark"
  }, {
    heading: "直播水印",
    content: "从本地视频中移除水印图像。"
  }, {
    heading: "直播水印",
    content: "removeVideoWatermarkEx"
  }, {
    heading: "直播水印",
    content: "从本地或远端视频流中移除指定的水印图像。"
  }, {
    heading: "垫片推流",
    content: "API"
  }, {
    heading: "垫片推流",
    content: "描述"
  }, {
    heading: "垫片推流",
    content: "enableVideoImageSource"
  }, {
    heading: "垫片推流",
    content: "设置在发布视频流时是否使用图片替代当前视频画面。"
  }, {
    heading: "视频渲染",
    content: "API"
  }, {
    heading: "视频渲染",
    content: "描述"
  }, {
    heading: "视频渲染",
    content: "enableInstantMediaRendering"
  }, {
    heading: "视频渲染",
    content: "启用音视频帧的即时渲染。"
  }, {
    heading: "视频渲染",
    content: "setLocalRenderMode \\[2/2]"
  }, {
    heading: "视频渲染",
    content: "更新本地视频画面的显示模式。"
  }, {
    heading: "视频渲染",
    content: "setLocalRenderTargetFps"
  }, {
    heading: "视频渲染",
    content: "设置本地视频渲染的最大帧率。"
  }, {
    heading: "视频渲染",
    content: "setRemoteRenderModeEx"
  }, {
    heading: "视频渲染",
    content: "设置指定远端用户的视频显示模式。"
  }, {
    heading: "视频渲染",
    content: "setRemoteRenderTargetFps"
  }, {
    heading: "视频渲染",
    content: "设置远端视频渲染的最大帧率。"
  }, {
    heading: "视频渲染",
    content: "setVideoRenderMode"
  }, {
    heading: "视频渲染",
    content: "设置媒体播放器的渲染模式。"
  }, {
    heading: "视频渲染",
    content: "setupLocalVideo"
  }, {
    heading: "视频渲染",
    content: "初始化本地视频画面。"
  }, {
    heading: "视频渲染",
    content: "setupRemoteVideo"
  }, {
    heading: "视频渲染",
    content: "初始化远端视频视图。"
  }, {
    heading: "视频渲染",
    content: "setupRemoteVideoEx"
  }, {
    heading: "视频渲染",
    content: "初始化远端用户的视频视图。"
  }, {
    heading: "视频渲染",
    content: "startMediaRenderingTracing"
  }, {
    heading: "视频渲染",
    content: "启用视频帧渲染过程的追踪。"
  }, {
    heading: "视频渲染",
    content: "startMediaRenderingTracingEx"
  }, {
    heading: "视频渲染",
    content: "启用视频帧渲染过程的追踪。"
  }, {
    heading: "视频渲染",
    content: "onTranscodedStreamLayoutInfo"
  }, {
    heading: "视频渲染",
    content: "接收到携带布局信息的合图视频流回调。"
  }, {
    heading: "视频渲染",
    content: "onVideoRenderingTracingResult"
  }, {
    heading: "视频渲染",
    content: "视频帧渲染事件回调。"
  }, {
    heading: "原始视频数据",
    content: "API"
  }, {
    heading: "原始视频数据",
    content: "描述"
  }, {
    heading: "原始视频数据",
    content: "getMirrorApplied"
  }, {
    heading: "原始视频数据",
    content: "每次 SDK 接收到视频帧时触发的回调，用于设置是否对采集的视频进行镜像。"
  }, {
    heading: "原始视频数据",
    content: "getObservedFramePosition"
  }, {
    heading: "原始视频数据",
    content: "设置视频观察器的帧位置。"
  }, {
    heading: "原始视频数据",
    content: "getRotationApplied"
  }, {
    heading: "原始视频数据",
    content: "getRotationApplied 回调在每次 SDK 接收到视频帧时触发，用于设置是否旋转采集的视频。"
  }, {
    heading: "原始视频数据",
    content: "getVideoFormatPreference"
  }, {
    heading: "原始视频数据",
    content: "设置 SDK 输出的原始视频数据格式。"
  }, {
    heading: "原始视频数据",
    content: "getVideoFrameProcessMode"
  }, {
    heading: "原始视频数据",
    content: "getVideoFrameProcessMode 回调。每次 SDK 接收到视频帧时触发，并提示你设置视频帧的处理模式。"
  }, {
    heading: "原始视频数据",
    content: "registerVideoFrameObserver"
  }, {
    heading: "原始视频数据",
    content: "注册原始视频帧观察器对象。"
  }, {
    heading: "原始视频数据",
    content: "onCaptureVideoFrame"
  }, {
    heading: "原始视频数据",
    content: "本地设备采集到视频帧时触发的回调。"
  }, {
    heading: "原始视频数据",
    content: "onPreEncodeVideoFrame"
  }, {
    heading: "原始视频数据",
    content: "每次 SDK 接收到编码前视频帧时触发该回调。"
  }, {
    heading: "原始视频数据",
    content: "onRenderVideoFrame"
  }, {
    heading: "原始视频数据",
    content: "远端用户发送视频帧时触发的回调。"
  }, {
    heading: "已编码视频数据",
    content: "API"
  }, {
    heading: "已编码视频数据",
    content: "描述"
  }, {
    heading: "已编码视频数据",
    content: "registerVideoEncodedFrameObserver"
  }, {
    heading: "已编码视频数据",
    content: "注册用于接收编码后视频帧的观察器对象。"
  }, {
    heading: "已编码视频数据",
    content: "onEncodedVideoFrameReceived"
  }, {
    heading: "已编码视频数据",
    content: "接收端收到远端编码视频帧回调。"
  }, {
    heading: "自定义视频采集和渲染",
    content: "API"
  }, {
    heading: "自定义视频采集和渲染",
    content: "描述"
  }, {
    heading: "自定义视频采集和渲染",
    content: "createCustomVideoTrack"
  }, {
    heading: "自定义视频采集和渲染",
    content: "创建一个自定义视频轨道。"
  }, {
    heading: "自定义视频采集和渲染",
    content: "destroyCustomVideoTrack"
  }, {
    heading: "自定义视频采集和渲染",
    content: "销毁指定的视频轨道。"
  }, {
    heading: "自定义视频采集和渲染",
    content: "isTextureEncodeSupported"
  }, {
    heading: "自定义视频采集和渲染",
    content: "检查视频是否支持 `Texture` 编码。"
  }, {
    heading: "自定义视频采集和渲染",
    content: "pushExternalVideoFrameById \\[1/2]"
  }, {
    heading: "自定义视频采集和渲染",
    content: "通过视频轨道向 SDK 推送外部原始视频帧。"
  }, {
    heading: "自定义视频采集和渲染",
    content: "pushExternalVideoFrameById \\[2/2]"
  }, {
    heading: "自定义视频采集和渲染",
    content: "通过视频轨道向 SDK 推送外部原始视频帧。"
  }, {
    heading: "自定义视频采集和渲染",
    content: "setExternalRemoteEglContext"
  }, {
    heading: "自定义视频采集和渲染",
    content: "设置用于渲染远端视频流的 EGL 上下文。"
  }, {
    heading: "自定义视频采集和渲染",
    content: "setExternalVideoSource"
  }, {
    heading: "自定义视频采集和渲染",
    content: "配置外部视频源。"
  }, {
    heading: "音乐文件播放",
    content: "API"
  }, {
    heading: "音乐文件播放",
    content: "描述"
  }, {
    heading: "音乐文件播放",
    content: "adjustAudioMixingPlayoutVolume"
  }, {
    heading: "音乐文件播放",
    content: "调节本地播放的混音音量。"
  }, {
    heading: "音乐文件播放",
    content: "adjustAudioMixingPublishVolume"
  }, {
    heading: "音乐文件播放",
    content: "调节用于发布的混音音量。"
  }, {
    heading: "音乐文件播放",
    content: "adjustAudioMixingVolume"
  }, {
    heading: "音乐文件播放",
    content: "调节混音时的音量。"
  }, {
    heading: "音乐文件播放",
    content: "getAudioMixingCurrentPosition"
  }, {
    heading: "音乐文件播放",
    content: "获取当前混音的播放位置（毫秒）。"
  }, {
    heading: "音乐文件播放",
    content: "getAudioMixingDuration"
  }, {
    heading: "音乐文件播放",
    content: "获取音频文件的混音时长（毫秒）。"
  }, {
    heading: "音乐文件播放",
    content: "getAudioMixingPlayoutVolume"
  }, {
    heading: "音乐文件播放",
    content: "获取本地播放的混音音量。"
  }, {
    heading: "音乐文件播放",
    content: "getAudioMixingPublishVolume"
  }, {
    heading: "音乐文件播放",
    content: "获取用于发布的混音音量。"
  }, {
    heading: "音乐文件播放",
    content: "getAudioTrackCount"
  }, {
    heading: "音乐文件播放",
    content: "获取当前音乐文件的音轨索引。"
  }, {
    heading: "音乐文件播放",
    content: "pauseAudioMixing"
  }, {
    heading: "音乐文件播放",
    content: "暂停播放和混音的音乐文件。"
  }, {
    heading: "音乐文件播放",
    content: "resumeAudioMixing"
  }, {
    heading: "音乐文件播放",
    content: "恢复播放和混音的音乐文件。"
  }, {
    heading: "音乐文件播放",
    content: "selectAudioTrack"
  }, {
    heading: "音乐文件播放",
    content: "选择播放过程中使用的音轨。"
  }, {
    heading: "音乐文件播放",
    content: "selectMultiAudioTrack"
  }, {
    heading: "音乐文件播放",
    content: "选择要在本地设备播放和发布到频道的音轨。"
  }, {
    heading: "音乐文件播放",
    content: "setAudioMixingDualMonoMode"
  }, {
    heading: "音乐文件播放",
    content: "设置当前音频文件的声道模式。"
  }, {
    heading: "音乐文件播放",
    content: "setAudioMixingPitch"
  }, {
    heading: "音乐文件播放",
    content: "设置本地音乐文件的音调。"
  }, {
    heading: "音乐文件播放",
    content: "setAudioMixingPlaybackSpeed"
  }, {
    heading: "音乐文件播放",
    content: "设置当前音频文件的播放速度。"
  }, {
    heading: "音乐文件播放",
    content: "setAudioMixingPosition"
  }, {
    heading: "音乐文件播放",
    content: "设置混音的播放位置。"
  }, {
    heading: "音乐文件播放",
    content: "startAudioMixing \\[2/2]"
  }, {
    heading: "音乐文件播放",
    content: "开始播放音乐文件。"
  }, {
    heading: "音乐文件播放",
    content: "stopAudioMixing"
  }, {
    heading: "音乐文件播放",
    content: "停止播放音乐文件。"
  }, {
    heading: "音乐文件播放",
    content: "onAudioMixingPositionChanged"
  }, {
    heading: "音乐文件播放",
    content: "音乐文件播放进度回调。"
  }, {
    heading: "音乐文件播放",
    content: "onAudioMixingStateChanged"
  }, {
    heading: "音乐文件播放",
    content: "音乐文件播放状态变化回调。"
  }, {
    heading: "音效文件播放",
    content: "API"
  }, {
    heading: "音效文件播放",
    content: "描述"
  }, {
    heading: "音效文件播放",
    content: "getEffectCurrentPosition"
  }, {
    heading: "音效文件播放",
    content: "获取指定音效文件的播放位置。"
  }, {
    heading: "音效文件播放",
    content: "getEffectDuration"
  }, {
    heading: "音效文件播放",
    content: "获取音效文件的时长。"
  }, {
    heading: "音效文件播放",
    content: "getEffectsVolume"
  }, {
    heading: "音效文件播放",
    content: "获取音效的音量。"
  }, {
    heading: "音效文件播放",
    content: "getVolumeOfEffect"
  }, {
    heading: "音效文件播放",
    content: "获取指定音效文件的音量。"
  }, {
    heading: "音效文件播放",
    content: "pauseAllEffects"
  }, {
    heading: "音效文件播放",
    content: "暂停所有音效。"
  }, {
    heading: "音效文件播放",
    content: "pauseEffect"
  }, {
    heading: "音效文件播放",
    content: "暂停指定音效文件的播放。"
  }, {
    heading: "音效文件播放",
    content: "playAllEffects"
  }, {
    heading: "音效文件播放",
    content: "播放所有音效。"
  }, {
    heading: "音效文件播放",
    content: "playEffect \\[1/2]"
  }, {
    heading: "音效文件播放",
    content: "播放指定的本地或在线音效文件。"
  }, {
    heading: "音效文件播放",
    content: "playEffect \\[2/2]"
  }, {
    heading: "音效文件播放",
    content: "播放指定的本地或在线音效文件。"
  }, {
    heading: "音效文件播放",
    content: "playEffectEx \\[1/2]"
  }, {
    heading: "音效文件播放",
    content: "在频道中播放指定的音效。"
  }, {
    heading: "音效文件播放",
    content: "playEffectEx \\[2/2]"
  }, {
    heading: "音效文件播放",
    content: "在频道中播放指定音效。"
  }, {
    heading: "音效文件播放",
    content: "preloadEffect \\[1/2]"
  }, {
    heading: "音效文件播放",
    content: "预加载指定的音效文件。"
  }, {
    heading: "音效文件播放",
    content: "preloadEffect \\[2/2]"
  }, {
    heading: "音效文件播放",
    content: "将指定的音效文件预加载到内存中。"
  }, {
    heading: "音效文件播放",
    content: "preloadEffectEx \\[1/2]"
  }, {
    heading: "音效文件播放",
    content: "将指定音效预加载到频道中。"
  }, {
    heading: "音效文件播放",
    content: "preloadEffectEx \\[2/2]"
  }, {
    heading: "音效文件播放",
    content: "将指定音效预加载到频道中。"
  }, {
    heading: "音效文件播放",
    content: "resumeAllEffects"
  }, {
    heading: "音效文件播放",
    content: "恢复播放所有音效文件。"
  }, {
    heading: "音效文件播放",
    content: "resumeEffect"
  }, {
    heading: "音效文件播放",
    content: "恢复播放指定音效。"
  }, {
    heading: "音效文件播放",
    content: "setEffectPosition"
  }, {
    heading: "音效文件播放",
    content: "设置音效文件的播放位置。"
  }, {
    heading: "音效文件播放",
    content: "setEffectsVolume"
  }, {
    heading: "音效文件播放",
    content: "设置音效的播放音量。"
  }, {
    heading: "音效文件播放",
    content: "setVolumeOfEffect"
  }, {
    heading: "音效文件播放",
    content: "设置指定音效文件的播放音量。"
  }, {
    heading: "音效文件播放",
    content: "stopAllEffects"
  }, {
    heading: "音效文件播放",
    content: "停止播放所有音效。"
  }, {
    heading: "音效文件播放",
    content: "stopEffect"
  }, {
    heading: "音效文件播放",
    content: "停止播放指定音效。"
  }, {
    heading: "音效文件播放",
    content: "unloadEffect"
  }, {
    heading: "音效文件播放",
    content: "释放指定的预加载音效文件。"
  }, {
    heading: "音效文件播放",
    content: "onAudioEffectFinished"
  }, {
    heading: "音效文件播放",
    content: "本地音效文件播放完成时的回调。"
  }, {
    heading: "初始化",
    content: "API"
  }, {
    heading: "初始化",
    content: "描述"
  }, {
    heading: "初始化",
    content: "createMediaPlayer"
  }, {
    heading: "初始化",
    content: "创建一个 IMediaPlayer 对象。"
  }, {
    heading: "初始化",
    content: "destroy"
  }, {
    heading: "初始化",
    content: "销毁媒体播放器实例。"
  }, {
    heading: "初始化",
    content: "getMediaPlayerCacheManager"
  }, {
    heading: "初始化",
    content: "获取一个 IMediaPlayerCacheManager 实例。"
  }, {
    heading: "媒体资源打开",
    content: "API"
  }, {
    heading: "媒体资源打开",
    content: "描述"
  }, {
    heading: "媒体资源打开",
    content: "open \\[1/2]"
  }, {
    heading: "媒体资源打开",
    content: "打开媒体资源。"
  }, {
    heading: "媒体资源打开",
    content: "open \\[2/2]"
  }, {
    heading: "媒体资源打开",
    content: "通过 URI 地址打开媒体文件。"
  }, {
    heading: "媒体资源打开",
    content: "openWithMediaSource"
  }, {
    heading: "媒体资源打开",
    content: "打开媒体文件并配置播放场景。"
  }, {
    heading: "媒体资源打开",
    content: "preloadSrc"
  }, {
    heading: "媒体资源打开",
    content: "预加载媒体资源。"
  }, {
    heading: "媒体资源打开",
    content: "switchSrc"
  }, {
    heading: "媒体资源打开",
    content: "切换正在播放的媒体资源。"
  }, {
    heading: "媒体资源打开",
    content: "unloadSrc"
  }, {
    heading: "媒体资源打开",
    content: "卸载预加载的媒体资源。"
  }, {
    heading: "媒体资源播放和渲染",
    content: "API"
  }, {
    heading: "媒体资源播放和渲染",
    content: "描述"
  }, {
    heading: "媒体资源播放和渲染",
    content: "selectAudioTrack"
  }, {
    heading: "媒体资源播放和渲染",
    content: "在播放过程中选择音频轨道。"
  }, {
    heading: "媒体资源播放和渲染",
    content: "setAudioDualMonoMode"
  }, {
    heading: "媒体资源播放和渲染",
    content: "设置当前音频文件的声道模式。"
  }, {
    heading: "媒体资源播放和渲染",
    content: "setAudioPitch"
  }, {
    heading: "媒体资源播放和渲染",
    content: "设置当前媒体资源的音调。"
  }, {
    heading: "媒体资源播放和渲染",
    content: "setLoopCount"
  }, {
    heading: "媒体资源播放和渲染",
    content: "设置音效的循环播放次数。"
  }, {
    heading: "媒体资源播放和渲染",
    content: "setPlaybackSpeed"
  }, {
    heading: "媒体资源播放和渲染",
    content: "设置当前音频文件的播放速度。"
  }, {
    heading: "媒体资源播放和渲染",
    content: "setPlayerOption"
  }, {
    heading: "媒体资源播放和渲染",
    content: "设置媒体播放器选项。"
  }, {
    heading: "媒体资源播放和渲染",
    content: "setPlayerOptionString"
  }, {
    heading: "媒体资源播放和渲染",
    content: "设置媒体播放器的参数选项。"
  }, {
    heading: "媒体资源播放和渲染",
    content: "setView"
  }, {
    heading: "媒体资源播放和渲染",
    content: "设置渲染视图。"
  }, {
    heading: "播放器控制",
    content: "API"
  }, {
    heading: "播放器控制",
    content: "描述"
  }, {
    heading: "播放器控制",
    content: "adjustPlayoutVolume"
  }, {
    heading: "播放器控制",
    content: "调节本地播放音量。"
  }, {
    heading: "播放器控制",
    content: "adjustPublishSignalVolume"
  }, {
    heading: "播放器控制",
    content: "调节用于发布的媒体文件音量。"
  }, {
    heading: "播放器控制",
    content: "mute"
  }, {
    heading: "播放器控制",
    content: "设置是否静音媒体文件。"
  }, {
    heading: "播放器控制",
    content: "pause"
  }, {
    heading: "播放器控制",
    content: "暂停播放。"
  }, {
    heading: "播放器控制",
    content: "play"
  }, {
    heading: "播放器控制",
    content: "播放媒体文件。"
  }, {
    heading: "播放器控制",
    content: "playPreloadedSrc"
  }, {
    heading: "播放器控制",
    content: "播放预加载的媒体资源。"
  }, {
    heading: "播放器控制",
    content: "resume"
  }, {
    heading: "播放器控制",
    content: "恢复播放媒体文件。"
  }, {
    heading: "播放器控制",
    content: "seek"
  }, {
    heading: "播放器控制",
    content: "跳转到新的播放位置。"
  }, {
    heading: "播放器控制",
    content: "stop \\[1/2]"
  }, {
    heading: "播放器控制",
    content: "停止播放媒体轨道。"
  }, {
    heading: "播放器控制",
    content: "onSeek"
  }, {
    heading: "播放器控制",
    content: "当 SDK 定位媒体资源数据时触发的回调。"
  }, {
    heading: "播放信息获取",
    content: "API"
  }, {
    heading: "播放信息获取",
    content: "描述"
  }, {
    heading: "播放信息获取",
    content: "getAudioBufferDelay"
  }, {
    heading: "播放信息获取",
    content: "获取播放媒体文件时的音频缓冲延迟。"
  }, {
    heading: "播放信息获取",
    content: "getDuration"
  }, {
    heading: "播放信息获取",
    content: "获取媒体资源的时长。"
  }, {
    heading: "播放信息获取",
    content: "getMediaPlayerId"
  }, {
    heading: "播放信息获取",
    content: "获取媒体播放器的 ID。"
  }, {
    heading: "播放信息获取",
    content: "getMute"
  }, {
    heading: "播放信息获取",
    content: "报告媒体资源是否被静音。"
  }, {
    heading: "播放信息获取",
    content: "getPlayoutVolume"
  }, {
    heading: "播放信息获取",
    content: "获取本地播放音量。"
  }, {
    heading: "播放信息获取",
    content: "getPlayPosition"
  }, {
    heading: "播放信息获取",
    content: "获取当前本地播放进度。"
  }, {
    heading: "播放信息获取",
    content: "getPlaySrc \\[1/2]"
  }, {
    heading: "播放信息获取",
    content: "获取当前正在播放的媒体资源路径。"
  }, {
    heading: "播放信息获取",
    content: "getPublishSignalVolume"
  }, {
    heading: "播放信息获取",
    content: "获取用于发布的媒体文件音量。"
  }, {
    heading: "播放信息获取",
    content: "getState"
  }, {
    heading: "播放信息获取",
    content: "获取当前播放状态。"
  }, {
    heading: "播放信息获取",
    content: "getStreamCount"
  }, {
    heading: "播放信息获取",
    content: "获取媒体资源中媒体流的数量。"
  }, {
    heading: "播放信息获取",
    content: "getStreamInfo"
  }, {
    heading: "播放信息获取",
    content: "获取媒体流的详细信息。"
  }, {
    heading: "播放信息获取",
    content: "onPlayerPlaybackStats"
  }, {
    heading: "播放信息获取",
    content: "报告正在播放的媒体文件的统计信息回调。"
  }, {
    heading: "音视频观测器",
    content: "API"
  }, {
    heading: "音视频观测器",
    content: "描述"
  }, {
    heading: "音视频观测器",
    content: "registerAudioFrameObserver"
  }, {
    heading: "音视频观测器",
    content: "注册音频帧观测器对象。"
  }, {
    heading: "音视频观测器",
    content: "registerPlayerObserver"
  }, {
    heading: "音视频观测器",
    content: "注册媒体播放器观察器。"
  }, {
    heading: "音视频观测器",
    content: "registerVideoFrameObserver"
  }, {
    heading: "音视频观测器",
    content: "注册视频帧观察者对象。"
  }, {
    heading: "音视频观测器",
    content: "unRegisterPlayerObserver"
  }, {
    heading: "音视频观测器",
    content: "释放媒体播放器观察者。"
  }, {
    heading: "音视频观测器",
    content: "onAudioVolumeIndication"
  }, {
    heading: "音视频观测器",
    content: "报告媒体播放器音量的回调。"
  }, {
    heading: "音视频观测器",
    content: "onFrame"
  }, {
    heading: "音视频观测器",
    content: "播放器接收到音频帧时触发的回调。"
  }, {
    heading: "音视频观测器",
    content: "onFrame"
  }, {
    heading: "音视频观测器",
    content: "播放器接收到视频帧时触发的回调。"
  }, {
    heading: "音视频观测器",
    content: "onMetaData"
  }, {
    heading: "音视频观测器",
    content: "接收到媒体元数据时触发的回调。"
  }, {
    heading: "音视频观测器",
    content: "onPlayBufferUpdated"
  }, {
    heading: "音视频观测器",
    content: "onPlayBufferUpdated 回调：报告缓冲数据可支持的播放时长。"
  }, {
    heading: "音视频观测器",
    content: "onPlayerEvent"
  }, {
    heading: "音视频观测器",
    content: "播放器事件回调。"
  }, {
    heading: "音视频观测器",
    content: "onPlayerInfoUpdated"
  }, {
    heading: "音视频观测器",
    content: "媒体播放器相关信息发生变化时的回调。"
  }, {
    heading: "音视频观测器",
    content: "onPlayerStateChanged"
  }, {
    heading: "音视频观测器",
    content: "播放状态发生改变回调。"
  }, {
    heading: "音视频观测器",
    content: "onPlayerSrcInfoChanged"
  }, {
    heading: "音视频观测器",
    content: "媒体资源视频码率发生变化回调。"
  }, {
    heading: "音视频观测器",
    content: "onPositionChanged"
  }, {
    heading: "音视频观测器",
    content: "播放进度回调。"
  }, {
    heading: "音视频观测器",
    content: "onPreloadEvent"
  }, {
    heading: "音视频观测器",
    content: "预加载媒体资源事件回调。"
  }, {
    heading: "音视频观测器",
    content: "onReadData"
  }, {
    heading: "音视频观测器",
    content: "SDK 读取媒体资源数据时触发的回调。"
  }, {
    heading: "媒体播放器缓存",
    content: "API"
  }, {
    heading: "媒体播放器缓存",
    content: "描述"
  }, {
    heading: "媒体播放器缓存",
    content: "enableAutoRemoveCache"
  }, {
    heading: "媒体播放器缓存",
    content: "设置是否自动删除缓存的媒体文件。"
  }, {
    heading: "媒体播放器缓存",
    content: "getCacheDir"
  }, {
    heading: "媒体播放器缓存",
    content: "获取缓存媒体文件的存储路径。"
  }, {
    heading: "媒体播放器缓存",
    content: "getCacheFileCount"
  }, {
    heading: "媒体播放器缓存",
    content: "获取已缓存的媒体文件数量。"
  }, {
    heading: "媒体播放器缓存",
    content: "getMaxCacheFileCount"
  }, {
    heading: "媒体播放器缓存",
    content: "获取可缓存的媒体文件的最大数量。"
  }, {
    heading: "媒体播放器缓存",
    content: "getMaxCacheFileSize"
  }, {
    heading: "媒体播放器缓存",
    content: "获取缓存媒体文件聚合存储空间的最大大小。"
  }, {
    heading: "媒体播放器缓存",
    content: "removeAllCaches"
  }, {
    heading: "媒体播放器缓存",
    content: "删除媒体播放器中所有缓存的媒体文件。"
  }, {
    heading: "媒体播放器缓存",
    content: "removeCacheByUri"
  }, {
    heading: "媒体播放器缓存",
    content: "删除缓存的媒体文件。"
  }, {
    heading: "媒体播放器缓存",
    content: "removeOldCache"
  }, {
    heading: "媒体播放器缓存",
    content: "删除最少使用的缓存媒体文件。"
  }, {
    heading: "媒体播放器缓存",
    content: "setCacheDir"
  }, {
    heading: "媒体播放器缓存",
    content: "设置要缓存的媒体文件的存储路径。"
  }, {
    heading: "媒体播放器缓存",
    content: "setMaxCacheFileCount"
  }, {
    heading: "媒体播放器缓存",
    content: "设置可缓存的媒体文件数量上限。"
  }, {
    heading: "媒体播放器缓存",
    content: "setMaxCacheFileSize"
  }, {
    heading: "媒体播放器缓存",
    content: "设置缓存媒体文件的聚合存储空间的最大大小。"
  }, {
    heading: "媒体播放器缓存",
    content: "onPlayerCacheStats"
  }, {
    heading: "媒体播放器缓存",
    content: "报告正在缓存的媒体文件的统计信息回调。"
  }, {
    heading: "版权音乐",
    content: "API"
  }, {
    heading: "版权音乐",
    content: "描述"
  }, {
    heading: "版权音乐",
    content: "createMusicPlayer"
  }, {
    heading: "版权音乐",
    content: "创建一个音乐播放器。"
  }, {
    heading: "版权音乐",
    content: "destroy"
  }, {
    heading: "版权音乐",
    content: "销毁 IAgoraMusicContentCenter 实例。"
  }, {
    heading: "版权音乐",
    content: "destroyMusicPlayer"
  }, {
    heading: "版权音乐",
    content: "销毁音乐播放器对象。"
  }, {
    heading: "版权音乐",
    content: "getCaches"
  }, {
    heading: "版权音乐",
    content: "获取已缓存的音乐资源信息。"
  }, {
    heading: "版权音乐",
    content: "getInternalSongCode"
  }, {
    heading: "版权音乐",
    content: "创建音乐资源副歌片段的内部标识符。"
  }, {
    heading: "版权音乐",
    content: "getLyric"
  }, {
    heading: "版权音乐",
    content: "获取音乐资源歌词的下载链接。"
  }, {
    heading: "版权音乐",
    content: "getMusicCharts"
  }, {
    heading: "版权音乐",
    content: "获取所有音乐排行榜。"
  }, {
    heading: "版权音乐",
    content: "getMusicCollectionByMusicChartId \\[1/2]"
  }, {
    heading: "版权音乐",
    content: "根据音乐榜单 ID 获取音乐资源列表。"
  }, {
    heading: "版权音乐",
    content: "getMusicCollectionByMusicChartId \\[2/2]"
  }, {
    heading: "版权音乐",
    content: "根据音乐榜单 ID 获取音乐资源列表。"
  }, {
    heading: "版权音乐",
    content: "getPlaySrc \\[2/2]"
  }, {
    heading: "版权音乐",
    content: "获取当前播放的音乐资源的标识符或 URL。"
  }, {
    heading: "版权音乐",
    content: "getSongSimpleInfo"
  }, {
    heading: "版权音乐",
    content: "检索特定音乐资源的详细信息。"
  }, {
    heading: "版权音乐",
    content: "initialize"
  }, {
    heading: "版权音乐",
    content: "初始化 IAgoraMusicContentCenter。"
  }, {
    heading: "版权音乐",
    content: "isPreloaded"
  }, {
    heading: "版权音乐",
    content: "检查指定音乐资源是否已预加载。"
  }, {
    heading: "版权音乐",
    content: "open \\[2/2]"
  }, {
    heading: "版权音乐",
    content: "通过 URL 打开音乐资源。"
  }, {
    heading: "版权音乐",
    content: "open \\[1/2]"
  }, {
    heading: "版权音乐",
    content: "通过资源 ID 打开音乐资源。"
  }, {
    heading: "版权音乐",
    content: "preload \\[2/2]"
  }, {
    heading: "版权音乐",
    content: "预加载版权音乐资源。"
  }, {
    heading: "版权音乐",
    content: "registerEventHandler"
  }, {
    heading: "版权音乐",
    content: "注册版权音乐内容中心的回调事件。"
  }, {
    heading: "版权音乐",
    content: "removeCache"
  }, {
    heading: "版权音乐",
    content: "删除已缓存的音乐资源。"
  }, {
    heading: "版权音乐",
    content: "renewToken"
  }, {
    heading: "版权音乐",
    content: "更新 Token。"
  }, {
    heading: "版权音乐",
    content: "searchMusic \\[1/2]"
  }, {
    heading: "版权音乐",
    content: "搜索音乐资源。"
  }, {
    heading: "版权音乐",
    content: "searchMusic \\[2/2]"
  }, {
    heading: "版权音乐",
    content: "搜索音乐资源。"
  }, {
    heading: "版权音乐",
    content: "setPlayMode"
  }, {
    heading: "版权音乐",
    content: "设置音乐曲目的播放模式。"
  }, {
    heading: "版权音乐",
    content: "stop \\[2/2]"
  }, {
    heading: "版权音乐",
    content: "停止播放音乐资源。"
  }, {
    heading: "版权音乐",
    content: "unregisterEventHandler"
  }, {
    heading: "版权音乐",
    content: "取消注册版权音乐内容中心的事件回调。"
  }, {
    heading: "版权音乐",
    content: "onLyricResult"
  }, {
    heading: "版权音乐",
    content: "歌词下载链接回调。"
  }, {
    heading: "版权音乐",
    content: "onMusicChartsResult"
  }, {
    heading: "版权音乐",
    content: "获取音乐排行榜后的回调。"
  }, {
    heading: "版权音乐",
    content: "onMusicCollectionResult"
  }, {
    heading: "版权音乐",
    content: "获取音乐资源列表的回调。"
  }, {
    heading: "版权音乐",
    content: "onPreLoadEvent"
  }, {
    heading: "版权音乐",
    content: "预加载音乐资源事件的回调。"
  }, {
    heading: "版权音乐",
    content: "onSongSimpleInfoResult"
  }, {
    heading: "版权音乐",
    content: "获取音乐资源详细信息的回调。"
  }, {
    heading: "音视频录制",
    content: "API"
  }, {
    heading: "音视频录制",
    content: "描述"
  }, {
    heading: "音视频录制",
    content: "createMediaRecorder"
  }, {
    heading: "音视频录制",
    content: "创建用于音视频录制的录制器实例。"
  }, {
    heading: "音视频录制",
    content: "destroyMediaRecorder"
  }, {
    heading: "音视频录制",
    content: "销毁音视频录制器实例。"
  }, {
    heading: "音视频录制",
    content: "setMediaRecorderObserver"
  }, {
    heading: "音视频录制",
    content: "注册一个用于音视频录制的回调观察者。"
  }, {
    heading: "音视频录制",
    content: "startAudioRecording \\[1/2]"
  }, {
    heading: "音视频录制",
    content: "开始客户端录音。"
  }, {
    heading: "音视频录制",
    content: "startAudioRecording \\[2/2]"
  }, {
    heading: "音视频录制",
    content: "开始客户端录制并应用录制配置。"
  }, {
    heading: "音视频录制",
    content: "startRecording"
  }, {
    heading: "音视频录制",
    content: "开始录制音频和视频流。"
  }, {
    heading: "音视频录制",
    content: "stopAudioRecording"
  }, {
    heading: "音视频录制",
    content: "停止客户端录制音频。"
  }, {
    heading: "音视频录制",
    content: "stopRecording"
  }, {
    heading: "音视频录制",
    content: "停止录制音视频流。"
  }, {
    heading: "音视频录制",
    content: "onRecorderInfoUpdated"
  }, {
    heading: "音视频录制",
    content: "录制信息更新回调。"
  }, {
    heading: "音视频录制",
    content: "onRecorderStateChanged"
  }, {
    heading: "音视频录制",
    content: "录制状态发生变化时的回调。"
  }, {
    heading: "跨频道媒体流转发",
    content: "API"
  }, {
    heading: "跨频道媒体流转发",
    content: "描述"
  }, {
    heading: "跨频道媒体流转发",
    content: "pauseAllChannelMediaRelay"
  }, {
    heading: "跨频道媒体流转发",
    content: "暂停向所有目标频道的跨频道媒体流转发。"
  }, {
    heading: "跨频道媒体流转发",
    content: "resumeAllChannelMediaRelay"
  }, {
    heading: "跨频道媒体流转发",
    content: "恢复向所有目标频道的跨频道媒体流转发。"
  }, {
    heading: "跨频道媒体流转发",
    content: "resumeAllChannelMediaRelayEx"
  }, {
    heading: "跨频道媒体流转发",
    content: "恢复向所有目标频道的跨频道媒体流转发。"
  }, {
    heading: "跨频道媒体流转发",
    content: "startOrUpdateChannelMediaRelay"
  }, {
    heading: "跨频道媒体流转发",
    content: "开始或更新跨频道媒体流转发。"
  }, {
    heading: "跨频道媒体流转发",
    content: "startOrUpdateChannelMediaRelayEx"
  }, {
    heading: "跨频道媒体流转发",
    content: "开始或更新跨频道媒体流转发。"
  }, {
    heading: "跨频道媒体流转发",
    content: "stopChannelMediaRelay"
  }, {
    heading: "跨频道媒体流转发",
    content: "停止跨频道媒体流转发。"
  }, {
    heading: "跨频道媒体流转发",
    content: "stopChannelMediaRelayEx"
  }, {
    heading: "跨频道媒体流转发",
    content: "停止跨频道媒体流转发。"
  }, {
    heading: "跨频道媒体流转发",
    content: "onChannelMediaRelayStateChanged"
  }, {
    heading: "跨频道媒体流转发",
    content: "跨频道媒体流转发状态发生变化回调。"
  }, {
    heading: "旁路推流",
    content: "API"
  }, {
    heading: "旁路推流",
    content: "描述"
  }, {
    heading: "旁路推流",
    content: "startRtmpStreamWithoutTranscoding"
  }, {
    heading: "旁路推流",
    content: "开始向 CDN 推送音视频流（不进行转码）。"
  }, {
    heading: "旁路推流",
    content: "startRtmpStreamWithoutTranscodingEx"
  }, {
    heading: "旁路推流",
    content: "开始向 CDN 推送未经转码的媒体流。"
  }, {
    heading: "旁路推流",
    content: "startRtmpStreamWithTranscoding"
  }, {
    heading: "旁路推流",
    content: "开始旁路推流并设置转码配置。"
  }, {
    heading: "旁路推流",
    content: "startRtmpStreamWithTranscodingEx"
  }, {
    heading: "旁路推流",
    content: "开始旁路推流并设置转码配置。"
  }, {
    heading: "旁路推流",
    content: "stopRtmpStream"
  }, {
    heading: "旁路推流",
    content: "停止向指定 CDN 地址推送媒体流。"
  }, {
    heading: "旁路推流",
    content: "stopRtmpStreamEx"
  }, {
    heading: "旁路推流",
    content: "停止向指定 CDN 地址推送媒体流。"
  }, {
    heading: "旁路推流",
    content: "updateRtmpTranscoding"
  }, {
    heading: "旁路推流",
    content: "更新旁路推流的转码配置。"
  }, {
    heading: "旁路推流",
    content: "updateRtmpTranscodingEx"
  }, {
    heading: "旁路推流",
    content: "更新旁路推流的转码配置。"
  }, {
    heading: "旁路推流",
    content: "onRtmpStreamingEvent"
  }, {
    heading: "旁路推流",
    content: "旁路推流事件回调。"
  }, {
    heading: "旁路推流",
    content: "onRtmpStreamingStateChanged"
  }, {
    heading: "旁路推流",
    content: "旁路推流状态发生变化回调。"
  }, {
    heading: "旁路推流",
    content: "onTranscodingUpdated"
  }, {
    heading: "旁路推流",
    content: "发布端云端转码配置更新回调。"
  }, {
    heading: "数据流-datastream",
    content: "API"
  }, {
    heading: "数据流-datastream",
    content: "描述"
  }, {
    heading: "数据流-datastream",
    content: "createDataStream \\[1/2]"
  }, {
    heading: "数据流-datastream",
    content: "创建一个数据流，用于提升数据传输的可靠性和顺序性。"
  }, {
    heading: "数据流-datastream",
    content: "createDataStream \\[2/2]"
  }, {
    heading: "数据流-datastream",
    content: "创建一个数据流。"
  }, {
    heading: "数据流-datastream",
    content: "createDataStreamEx \\[2/2]"
  }, {
    heading: "数据流-datastream",
    content: "创建一个数据流。"
  }, {
    heading: "数据流-datastream",
    content: "sendStreamMessage"
  }, {
    heading: "数据流-datastream",
    content: "发送数据流消息。"
  }, {
    heading: "数据流-datastream",
    content: "sendStreamMessageEx"
  }, {
    heading: "数据流-datastream",
    content: "发送数据流消息。"
  }, {
    heading: "数据流-datastream",
    content: "onStreamMessage"
  }, {
    heading: "数据流-datastream",
    content: "远端用户发送数据流时的回调。"
  }, {
    heading: "数据流-datastream",
    content: "onStreamMessageError"
  }, {
    heading: "数据流-datastream",
    content: "onStreamMessageError 回调：本地用户未收到远端用户发送的数据流时触发。"
  }, {
    heading: "媒体流附属信息分发",
    content: "API"
  }, {
    heading: "媒体流附属信息分发",
    content: "描述"
  }, {
    heading: "媒体流附属信息分发",
    content: "getMaxMetadataSize"
  }, {
    heading: "媒体流附属信息分发",
    content: "当 SDK 请求元数据最大大小时触发的回调。"
  }, {
    heading: "媒体流附属信息分发",
    content: "registerMediaMetadataObserver"
  }, {
    heading: "媒体流附属信息分发",
    content: "注册元数据观察器。"
  }, {
    heading: "媒体流附属信息分发",
    content: "unregisterMediaMetadataObserver"
  }, {
    heading: "媒体流附属信息分发",
    content: "取消注册指定的元数据观察者。"
  }, {
    heading: "媒体流附属信息分发",
    content: "onMetadataReceived"
  }, {
    heading: "媒体流附属信息分发",
    content: "本地用户接收到元数据时触发的回调。"
  }, {
    heading: "媒体流附属信息分发",
    content: "onReadyToSendMetadata"
  }, {
    heading: "媒体流附属信息分发",
    content: "SDK 准备好发送元数据时触发的回调。"
  }, {
    heading: "音频路由",
    content: "API"
  }, {
    heading: "音频路由",
    content: "描述"
  }, {
    heading: "音频路由",
    content: "isSpeakerphoneEnabled"
  }, {
    heading: "音频路由",
    content: "检查是否启用扬声器播放音频。"
  }, {
    heading: "音频路由",
    content: "setDefaultAudioRoutetoSpeakerphone"
  }, {
    heading: "音频路由",
    content: "设置默认音频播放路由。"
  }, {
    heading: "音频路由",
    content: "setEnableSpeakerphone"
  }, {
    heading: "音频路由",
    content: "设置是否将音频路由切换到扬声器。"
  }, {
    heading: "音频路由",
    content: "setRouteInCommunicationMode"
  }, {
    heading: "音频路由",
    content: "在通信音频模式下设置音频播放路由。"
  }, {
    heading: "音频路由",
    content: "onAudioRouteChanged"
  }, {
    heading: "音频路由",
    content: "本地音频路由发生变化时的回调。"
  }, {
    heading: "视频设备管理",
    content: "API"
  }, {
    heading: "视频设备管理",
    content: "描述"
  }, {
    heading: "视频设备管理",
    content: "getCameraMaxZoomFactor"
  }, {
    heading: "视频设备管理",
    content: "获取摄像头支持的最大变焦倍数。"
  }, {
    heading: "视频设备管理",
    content: "isCameraAutoFocusFaceModeSupported"
  }, {
    heading: "视频设备管理",
    content: "检查设备是否支持人脸自动对焦功能。"
  }, {
    heading: "视频设备管理",
    content: "isCameraExposurePositionSupported"
  }, {
    heading: "视频设备管理",
    content: "检查设备是否支持手动曝光。"
  }, {
    heading: "视频设备管理",
    content: "isCameraExposureSupported"
  }, {
    heading: "视频设备管理",
    content: "查询当前摄像头是否支持调节曝光值。"
  }, {
    heading: "视频设备管理",
    content: "isCameraFaceDetectSupported"
  }, {
    heading: "视频设备管理",
    content: "检查设备摄像头是否支持人脸检测。"
  }, {
    heading: "视频设备管理",
    content: "isCameraFocusSupported"
  }, {
    heading: "视频设备管理",
    content: "检查设备是否支持手动对焦功能。"
  }, {
    heading: "视频设备管理",
    content: "isCameraTorchSupported"
  }, {
    heading: "视频设备管理",
    content: "检查设备是否支持相机闪光灯功能。"
  }, {
    heading: "视频设备管理",
    content: "isCameraZoomSupported"
  }, {
    heading: "视频设备管理",
    content: "检查设备是否支持摄像头变焦。"
  }, {
    heading: "视频设备管理",
    content: "queryCameraFocalLengthCapability"
  }, {
    heading: "视频设备管理",
    content: "查询摄像头支持的焦距能力。"
  }, {
    heading: "视频设备管理",
    content: "queryCodecCapability"
  }, {
    heading: "视频设备管理",
    content: "查询 SDK 的视频编解码能力。"
  }, {
    heading: "视频设备管理",
    content: "setCameraAutoFocusFaceModeEnabled"
  }, {
    heading: "视频设备管理",
    content: "启用或关闭摄像头人脸自动对焦功能。"
  }, {
    heading: "视频设备管理",
    content: "setCameraCapturerConfiguration"
  }, {
    heading: "视频设备管理",
    content: "设置摄像头采集配置。"
  }, {
    heading: "视频设备管理",
    content: "setCameraExposureFactor"
  }, {
    heading: "视频设备管理",
    content: "设置摄像头曝光值。"
  }, {
    heading: "视频设备管理",
    content: "setCameraExposurePosition"
  }, {
    heading: "视频设备管理",
    content: "设置摄像头曝光位置。"
  }, {
    heading: "视频设备管理",
    content: "setCameraFocusPositionInPreview"
  }, {
    heading: "视频设备管理",
    content: "设置摄像头的手动对焦位置。"
  }, {
    heading: "视频设备管理",
    content: "setCameraTorchOn"
  }, {
    heading: "视频设备管理",
    content: "打开或关闭摄像头闪光灯。"
  }, {
    heading: "视频设备管理",
    content: "setCameraZoomFactor"
  }, {
    heading: "视频设备管理",
    content: "设置摄像头的缩放因子。"
  }, {
    heading: "视频设备管理",
    content: "switchCamera \\[1/2]"
  }, {
    heading: "视频设备管理",
    content: "切换前置和后置摄像头。"
  }, {
    heading: "视频设备管理",
    content: "switchCamera \\[2/2]"
  }, {
    heading: "视频设备管理",
    content: "通过摄像头 ID 切换摄像头。"
  }, {
    heading: "视频设备管理",
    content: "onCameraExposureAreaChanged"
  }, {
    heading: "视频设备管理",
    content: "摄像头曝光区域发生变化回调。"
  }, {
    heading: "视频设备管理",
    content: "onCameraFocusAreaChanged"
  }, {
    heading: "视频设备管理",
    content: "摄像头对焦区域发生变化的回调。"
  }, {
    heading: "音频设备管理",
    content: "API"
  }, {
    heading: "音频设备管理",
    content: "描述"
  }, {
    heading: "音频设备管理",
    content: "getAudioDeviceInfo"
  }, {
    heading: "音频设备管理",
    content: "获取音频设备信息。"
  }, {
    heading: "音频设备管理",
    content: "startPlaybackDeviceTest"
  }, {
    heading: "音频设备管理",
    content: "启动本地音频播放设备测试。"
  }, {
    heading: "音频设备管理",
    content: "startRecordingDeviceTest"
  }, {
    heading: "音频设备管理",
    content: "启动音频采集设备测试。"
  }, {
    heading: "音频设备管理",
    content: "stopPlaybackDeviceTest"
  }, {
    heading: "音频设备管理",
    content: "停止音频播放设备测试。"
  }, {
    heading: "音频设备管理",
    content: "stopRecordingDeviceTest"
  }, {
    heading: "音频设备管理",
    content: "停止音频采集设备测试。"
  }, {
    heading: "插件",
    content: "API"
  }, {
    heading: "插件",
    content: "描述"
  }, {
    heading: "插件",
    content: "addExtension"
  }, {
    heading: "插件",
    content: "添加扩展。"
  }, {
    heading: "插件",
    content: "enableExtension"
  }, {
    heading: "插件",
    content: "启用或禁用扩展功能。"
  }, {
    heading: "插件",
    content: "getExtensionProperty \\[1/2]"
  }, {
    heading: "插件",
    content: "获取扩展组件的详细信息。"
  }, {
    heading: "插件",
    content: "getExtensionProperty \\[2/2]"
  }, {
    heading: "插件",
    content: "获取扩展组件的详细信息。"
  }, {
    heading: "插件",
    content: "registerExtension"
  }, {
    heading: "插件",
    content: "注册一个扩展。"
  }, {
    heading: "插件",
    content: "setExtensionProperty"
  }, {
    heading: "插件",
    content: "设置扩展组件的属性。"
  }, {
    heading: "插件",
    content: "setExtensionProviderProperty"
  }, {
    heading: "插件",
    content: "设置扩展提供方的属性。"
  }, {
    heading: "插件",
    content: "onErrorWithContext"
  }, {
    heading: "插件",
    content: "扩展运行异常时触发的回调。"
  }, {
    heading: "插件",
    content: "onEventWithContext"
  }, {
    heading: "插件",
    content: "扩展事件回调。"
  }, {
    heading: "插件",
    content: "onStartedWithContext"
  }, {
    heading: "插件",
    content: "扩展启用成功回调。"
  }, {
    heading: "插件",
    content: "onStoppedWithContext"
  }, {
    heading: "插件",
    content: "扩展被禁用时触发的回调。"
  }, {
    heading: "网络及其他",
    content: "API"
  }, {
    heading: "网络及其他",
    content: "描述"
  }, {
    heading: "网络及其他",
    content: "complain"
  }, {
    heading: "网络及其他",
    content: "允许你在通话结束后投诉通话质量。"
  }, {
    heading: "网络及其他",
    content: "enableEncryption"
  }, {
    heading: "网络及其他",
    content: "启用或关闭内置加密功能。"
  }, {
    heading: "网络及其他",
    content: "enableEncryptionEx"
  }, {
    heading: "网络及其他",
    content: "启用或关闭内置加密功能。"
  }, {
    heading: "网络及其他",
    content: "getCallId"
  }, {
    heading: "网络及其他",
    content: "获取当前通话 ID。"
  }, {
    heading: "网络及其他",
    content: "getCallIdEx"
  }, {
    heading: "网络及其他",
    content: "获取与连接 ID 对应的通话 ID。"
  }, {
    heading: "网络及其他",
    content: "getConnectionState"
  }, {
    heading: "网络及其他",
    content: "获取 SDK 当前的连接状态。"
  }, {
    heading: "网络及其他",
    content: "getConnectionStateEx"
  }, {
    heading: "网络及其他",
    content: "获取 SDK 当前的连接状态。"
  }, {
    heading: "网络及其他",
    content: "getCurrentMonotonicTimeInMs"
  }, {
    heading: "网络及其他",
    content: "获取 SDK 当前的单调时间。"
  }, {
    heading: "网络及其他",
    content: "getErrorDescription"
  }, {
    heading: "网络及其他",
    content: "获取警告或错误码对应的描述信息。"
  }, {
    heading: "网络及其他",
    content: "getNativeHandle"
  }, {
    heading: "网络及其他",
    content: "获取原生 SDK 的 C++ 句柄。"
  }, {
    heading: "网络及其他",
    content: "getNetworkType"
  }, {
    heading: "网络及其他",
    content: "获取本地网络连接类型。"
  }, {
    heading: "网络及其他",
    content: "getNtpWallTimeInMs"
  }, {
    heading: "网络及其他",
    content: "获取当前 NTP（网络时间协议）时间。"
  }, {
    heading: "网络及其他",
    content: "getSdkVersion"
  }, {
    heading: "网络及其他",
    content: "获取 SDK 的版本号。"
  }, {
    heading: "网络及其他",
    content: "isFeatureAvailableOnDevice"
  }, {
    heading: "网络及其他",
    content: "检查当前设备是否支持指定的高级功能。"
  }, {
    heading: "网络及其他",
    content: "queryDeviceScore"
  }, {
    heading: "网络及其他",
    content: "查询设备评分。"
  }, {
    heading: "网络及其他",
    content: "rate"
  }, {
    heading: "网络及其他",
    content: "允许用户在通话结束后对通话进行评分。"
  }, {
    heading: "网络及其他",
    content: "sendCustomReportMessage"
  }, {
    heading: "网络及其他",
    content: "上报自定义消息。"
  }, {
    heading: "网络及其他",
    content: "sendCustomReportMessageEx"
  }, {
    heading: "网络及其他",
    content: "支持上报和分析自定义消息。"
  }, {
    heading: "网络及其他",
    content: "setAVSyncSource"
  }, {
    heading: "网络及其他",
    content: "设置发布端的音视频同步源。"
  }, {
    heading: "网络及其他",
    content: "setCloudProxy"
  }, {
    heading: "网络及其他",
    content: "设置云代理服务。"
  }, {
    heading: "网络及其他",
    content: "setLocalAccessPoint"
  }, {
    heading: "网络及其他",
    content: "配置连接到声网私有媒体服务器接入模块。"
  }, {
    heading: "网络及其他",
    content: "setParameters"
  }, {
    heading: "网络及其他",
    content: "通过配置 JSON 选项，为 SDK 提供技术预览功能或特殊定制。"
  }, {
    heading: "网络及其他",
    content: "setRemoteSubscribeFallbackOption \\[1/2]"
  }, {
    heading: "网络及其他",
    content: "根据网络状况设置订阅端的视频流回退选项。"
  }, {
    heading: "网络及其他",
    content: "startEchoTest"
  }, {
    heading: "网络及其他",
    content: "开始音视频设备回路测试。"
  }, {
    heading: "网络及其他",
    content: "startLastmileProbeTest"
  }, {
    heading: "网络及其他",
    content: "开始 Last-mile 网络探测测试。"
  }, {
    heading: "网络及其他",
    content: "stopEchoTest"
  }, {
    heading: "网络及其他",
    content: "停止音频通话测试。"
  }, {
    heading: "网络及其他",
    content: "stopLastmileProbeTest"
  }, {
    heading: "网络及其他",
    content: "停止 Last-mile 网络探测测试。"
  }, {
    heading: "网络及其他",
    content: "onConnectionLost"
  }, {
    heading: "网络及其他",
    content: "onConnectionLost 回调：当 SDK 在连接中断后 10 秒内无法重新连接到声网边缘服务器时触发。"
  }, {
    heading: "网络及其他",
    content: "onConnectionStateChanged"
  }, {
    heading: "网络及其他",
    content: "网络连接状态发生变化回调。"
  }, {
    heading: "网络及其他",
    content: "onEncryptionError"
  }, {
    heading: "网络及其他",
    content: "内置加密错误回调。"
  }, {
    heading: "网络及其他",
    content: "onLastmileProbeResult"
  }, {
    heading: "网络及其他",
    content: "上行和下行 Last-mile 网络探测测试结果的回调。"
  }, {
    heading: "网络及其他",
    content: "onLastmileQuality"
  }, {
    heading: "网络及其他",
    content: "本地用户的 Last-mile 网络质量回调。"
  }, {
    heading: "网络及其他",
    content: "onMultipathStats"
  }, {
    heading: "网络及其他",
    content: "多路径传输统计信息回调。"
  }, {
    heading: "网络及其他",
    content: "onNetworkQuality"
  }, {
    heading: "网络及其他",
    content: "onNetworkQuality 回调。报告频道中每个用户的 Last-mile 网络质量。"
  }, {
    heading: "网络及其他",
    content: "onNetworkTypeChanged"
  }, {
    heading: "网络及其他",
    content: "本地网络类型发生变化时的回调。"
  }, {
    heading: "网络及其他",
    content: "onPermissionError"
  }, {
    heading: "网络及其他",
    content: "设备权限获取失败时触发的回调。"
  }, {
    heading: "网络及其他",
    content: "onPermissionGranted"
  }, {
    heading: "网络及其他",
    content: "onPermissionGranted 回调。用于上报已授予的权限。"
  }, {
    heading: "网络及其他",
    content: "onProxyConnected"
  }, {
    heading: "网络及其他",
    content: "代理连接状态回调。"
  }, {
    heading: "网络及其他",
    content: "onRemoteSubscribeFallbackToAudioOnly"
  }, {
    heading: "网络及其他",
    content: "onRemoteSubscribeFallbackToAudioOnly 回调。当远端媒体流因网络变化在音频流与视频流之间切换时触发。"
  }, {
    heading: "网络及其他",
    content: "onUplinkNetworkInfoUpdated"
  }, {
    heading: "网络及其他",
    content: "上行网络信息发生变化回调。"
  }],
  headings: [{
    id: "初始化相关",
    content: "初始化相关"
  }, {
    id: "频道相关",
    content: "频道相关"
  }, {
    id: "发布和订阅",
    content: "发布和订阅"
  }, {
    id: "音频基础功能",
    content: "音频基础功能"
  }, {
    id: "音频采集",
    content: "音频采集"
  }, {
    id: "人声音效",
    content: "人声音效"
  }, {
    id: "听声辨位",
    content: "听声辨位"
  }, {
    id: "空间音频",
    content: "空间音频"
  }, {
    id: "本地音频合流",
    content: "本地音频合流"
  }, {
    id: "原始音频数据",
    content: "原始音频数据"
  }, {
    id: "已编码音频数据",
    content: "已编码音频数据"
  }, {
    id: "自定义音频采集和渲染",
    content: "自定义音频采集和渲染"
  }, {
    id: "音频频谱",
    content: "音频频谱"
  }, {
    id: "视频基础功能",
    content: "视频基础功能"
  }, {
    id: "摄像头采集",
    content: "摄像头采集"
  }, {
    id: "屏幕采集",
    content: "屏幕采集"
  }, {
    id: "本地截图上传",
    content: "本地截图上传"
  }, {
    id: "虚拟背景",
    content: "虚拟背景"
  }, {
    id: "本地合图",
    content: "本地合图"
  }, {
    id: "视频增强",
    content: "视频增强"
  }, {
    id: "人脸检测",
    content: "人脸检测"
  }, {
    id: "直播水印",
    content: "直播水印"
  }, {
    id: "垫片推流",
    content: "垫片推流"
  }, {
    id: "视频渲染",
    content: "视频渲染"
  }, {
    id: "原始视频数据",
    content: "原始视频数据"
  }, {
    id: "已编码视频数据",
    content: "已编码视频数据"
  }, {
    id: "自定义视频采集和渲染",
    content: "自定义视频采集和渲染"
  }, {
    id: "音乐文件播放",
    content: "音乐文件播放"
  }, {
    id: "音效文件播放",
    content: "音效文件播放"
  }, {
    id: "初始化",
    content: "初始化"
  }, {
    id: "媒体资源打开",
    content: "媒体资源打开"
  }, {
    id: "媒体资源播放和渲染",
    content: "媒体资源播放和渲染"
  }, {
    id: "播放器控制",
    content: "播放器控制"
  }, {
    id: "播放信息获取",
    content: "播放信息获取"
  }, {
    id: "音视频观测器",
    content: "音视频观测器"
  }, {
    id: "媒体播放器缓存",
    content: "媒体播放器缓存"
  }, {
    id: "版权音乐",
    content: "版权音乐"
  }, {
    id: "音视频录制",
    content: "音视频录制"
  }, {
    id: "跨频道媒体流转发",
    content: "跨频道媒体流转发"
  }, {
    id: "旁路推流",
    content: "旁路推流"
  }, {
    id: "数据流-datastream",
    content: "数据流 Datastream"
  }, {
    id: "媒体流附属信息分发",
    content: "媒体流附属信息分发"
  }, {
    id: "音频路由",
    content: "音频路由"
  }, {
    id: "视频设备管理",
    content: "视频设备管理"
  }, {
    id: "音频设备管理",
    content: "音频设备管理"
  }, {
    id: "插件",
    content: "插件"
  }, {
    id: "网络及其他",
    content: "网络及其他"
  }]
};
export let toc = [{
  depth: 2,
  url: "#初始化相关",
  title: _jsx(_Fragment, {
    children: "初始化相关"
  })
}, {
  depth: 2,
  url: "#频道相关",
  title: _jsx(_Fragment, {
    children: "频道相关"
  })
}, {
  depth: 2,
  url: "#发布和订阅",
  title: _jsx(_Fragment, {
    children: "发布和订阅"
  })
}, {
  depth: 2,
  url: "#音频基础功能",
  title: _jsx(_Fragment, {
    children: "音频基础功能"
  })
}, {
  depth: 2,
  url: "#音频采集",
  title: _jsx(_Fragment, {
    children: "音频采集"
  })
}, {
  depth: 2,
  url: "#人声音效",
  title: _jsx(_Fragment, {
    children: "人声音效"
  })
}, {
  depth: 2,
  url: "#听声辨位",
  title: _jsx(_Fragment, {
    children: "听声辨位"
  })
}, {
  depth: 2,
  url: "#空间音频",
  title: _jsx(_Fragment, {
    children: "空间音频"
  })
}, {
  depth: 2,
  url: "#本地音频合流",
  title: _jsx(_Fragment, {
    children: "本地音频合流"
  })
}, {
  depth: 2,
  url: "#原始音频数据",
  title: _jsx(_Fragment, {
    children: "原始音频数据"
  })
}, {
  depth: 2,
  url: "#已编码音频数据",
  title: _jsx(_Fragment, {
    children: "已编码音频数据"
  })
}, {
  depth: 2,
  url: "#自定义音频采集和渲染",
  title: _jsx(_Fragment, {
    children: "自定义音频采集和渲染"
  })
}, {
  depth: 2,
  url: "#音频频谱",
  title: _jsx(_Fragment, {
    children: "音频频谱"
  })
}, {
  depth: 2,
  url: "#视频基础功能",
  title: _jsx(_Fragment, {
    children: "视频基础功能"
  })
}, {
  depth: 2,
  url: "#摄像头采集",
  title: _jsx(_Fragment, {
    children: "摄像头采集"
  })
}, {
  depth: 2,
  url: "#屏幕采集",
  title: _jsx(_Fragment, {
    children: "屏幕采集"
  })
}, {
  depth: 2,
  url: "#本地截图上传",
  title: _jsx(_Fragment, {
    children: "本地截图上传"
  })
}, {
  depth: 2,
  url: "#虚拟背景",
  title: _jsx(_Fragment, {
    children: "虚拟背景"
  })
}, {
  depth: 2,
  url: "#本地合图",
  title: _jsx(_Fragment, {
    children: "本地合图"
  })
}, {
  depth: 2,
  url: "#视频增强",
  title: _jsx(_Fragment, {
    children: "视频增强"
  })
}, {
  depth: 2,
  url: "#人脸检测",
  title: _jsx(_Fragment, {
    children: "人脸检测"
  })
}, {
  depth: 2,
  url: "#直播水印",
  title: _jsx(_Fragment, {
    children: "直播水印"
  })
}, {
  depth: 2,
  url: "#垫片推流",
  title: _jsx(_Fragment, {
    children: "垫片推流"
  })
}, {
  depth: 2,
  url: "#视频渲染",
  title: _jsx(_Fragment, {
    children: "视频渲染"
  })
}, {
  depth: 2,
  url: "#原始视频数据",
  title: _jsx(_Fragment, {
    children: "原始视频数据"
  })
}, {
  depth: 2,
  url: "#已编码视频数据",
  title: _jsx(_Fragment, {
    children: "已编码视频数据"
  })
}, {
  depth: 2,
  url: "#自定义视频采集和渲染",
  title: _jsx(_Fragment, {
    children: "自定义视频采集和渲染"
  })
}, {
  depth: 2,
  url: "#音乐文件播放",
  title: _jsx(_Fragment, {
    children: "音乐文件播放"
  })
}, {
  depth: 2,
  url: "#音效文件播放",
  title: _jsx(_Fragment, {
    children: "音效文件播放"
  })
}, {
  depth: 2,
  url: "#初始化",
  title: _jsx(_Fragment, {
    children: "初始化"
  })
}, {
  depth: 2,
  url: "#媒体资源打开",
  title: _jsx(_Fragment, {
    children: "媒体资源打开"
  })
}, {
  depth: 2,
  url: "#媒体资源播放和渲染",
  title: _jsx(_Fragment, {
    children: "媒体资源播放和渲染"
  })
}, {
  depth: 2,
  url: "#播放器控制",
  title: _jsx(_Fragment, {
    children: "播放器控制"
  })
}, {
  depth: 2,
  url: "#播放信息获取",
  title: _jsx(_Fragment, {
    children: "播放信息获取"
  })
}, {
  depth: 2,
  url: "#音视频观测器",
  title: _jsx(_Fragment, {
    children: "音视频观测器"
  })
}, {
  depth: 2,
  url: "#媒体播放器缓存",
  title: _jsx(_Fragment, {
    children: "媒体播放器缓存"
  })
}, {
  depth: 2,
  url: "#版权音乐",
  title: _jsx(_Fragment, {
    children: "版权音乐"
  })
}, {
  depth: 2,
  url: "#音视频录制",
  title: _jsx(_Fragment, {
    children: "音视频录制"
  })
}, {
  depth: 2,
  url: "#跨频道媒体流转发",
  title: _jsx(_Fragment, {
    children: "跨频道媒体流转发"
  })
}, {
  depth: 2,
  url: "#旁路推流",
  title: _jsx(_Fragment, {
    children: "旁路推流"
  })
}, {
  depth: 2,
  url: "#数据流-datastream",
  title: _jsx(_Fragment, {
    children: "数据流 Datastream"
  })
}, {
  depth: 2,
  url: "#媒体流附属信息分发",
  title: _jsx(_Fragment, {
    children: "媒体流附属信息分发"
  })
}, {
  depth: 2,
  url: "#音频路由",
  title: _jsx(_Fragment, {
    children: "音频路由"
  })
}, {
  depth: 2,
  url: "#视频设备管理",
  title: _jsx(_Fragment, {
    children: "视频设备管理"
  })
}, {
  depth: 2,
  url: "#音频设备管理",
  title: _jsx(_Fragment, {
    children: "音频设备管理"
  })
}, {
  depth: 2,
  url: "#插件",
  title: _jsx(_Fragment, {
    children: "插件"
  })
}, {
  depth: 2,
  url: "#网络及其他",
  title: _jsx(_Fragment, {
    children: "网络及其他"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "rtc_api_overview__toc_initialize"
    }), `
`, _jsx(_components.h2, {
      id: "初始化相关",
      children: "初始化相关"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_create",
              children: "create [1/2]"
            })
          }), _jsxs(_components.td, {
            children: ["创建并初始化 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
              children: "RtcEngine"
            }), " 实例。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
              children: "create [2/2]"
            })
          }), _jsxs(_components.td, {
            children: ["创建并初始化 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
              children: "RtcEngine"
            }), " 实例。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_addhandler",
              children: "addHandler"
            })
          }), _jsx(_components.td, {
            children: "添加事件处理器。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
              children: "destroy [2/2]"
            })
          }), _jsxs(_components.td, {
            children: ["销毁 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
              children: "RtcEngine"
            }), " 实例并释放相关资源。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_release",
              children: "destroy [1/2]"
            })
          }), _jsxs(_components.td, {
            children: ["释放 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
              children: "RtcEngine"
            }), " 实例。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_removehandler",
              children: "removeHandler"
            })
          }), _jsxs(_components.td, {
            children: ["移除指定的 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
              children: "IRtcEngineEventHandler"
            }), " 实例。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/initialize#callback_irtcenginereleasecallback_onenginereleased",
              children: "onEngineReleased"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
              children: "RtcEngine"
            }), " 被释放时触发的回调。"]
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_channel"
    }), `
`, _jsx(_components.h2, {
      id: "频道相关",
      children: "频道相关"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setchannelprofile",
              children: "setChannelProfile"
            })
          }), _jsx(_components.td, {
            children: "设置频道场景。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel1",
              children: "joinChannel [1/2]"
            })
          }), _jsx(_components.td, {
            children: "加入一个频道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel2",
              children: "joinChannel [2/2]"
            })
          }), _jsx(_components.td, {
            children: "加入频道并设置媒体选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
              children: "joinChannelEx"
            })
          }), _jsx(_components.td, {
            children: "加入一个频道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions",
              children: "updateChannelMediaOptions"
            })
          }), _jsx(_components.td, {
            children: "在加入频道后更新频道媒体选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_updatechannelmediaoptionsex",
              children: "updateChannelMediaOptionsEx"
            })
          }), _jsx(_components.td, {
            children: "加入频道后更新频道媒体选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel",
              children: "leaveChannel [1/2]"
            })
          }), _jsx(_components.td, {
            children: "离开频道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel2",
              children: "leaveChannel [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置频道选项并离开频道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex",
              children: "leaveChannelEx [1/2]"
            })
          }), _jsx(_components.td, {
            children: "离开频道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex2",
              children: "leaveChannelEx [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置频道参数并离开频道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_preloadchannel",
              children: "preloadChannel"
            })
          }), _jsx(_components.td, {
            children: "预加载指定频道以缩短观众加入频道的时间。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatepreloadchanneltoken",
              children: "updatePreloadChannelToken"
            })
          }), _jsx(_components.td, {
            children: "更新用于预加载频道的通配 Token。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
              children: "renewToken"
            })
          }), _jsx(_components.td, {
            children: "更新 Token。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole1",
              children: "setClientRole [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置客户端实例的用户角色。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole2",
              children: "setClientRole [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置直播场景下的用户角色和观众延迟等级。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuidex",
              children: "getUserInfoByUidEx"
            })
          }), _jsx(_components.td, {
            children: "通过传入用户 ID 获取用户信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechanged",
              children: "onClientRoleChanged"
            })
          }), _jsx(_components.td, {
            children: "用户角色或观众延迟级别发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechangefailed",
              children: "onClientRoleChangeFailed"
            })
          }), _jsx(_components.td, {
            children: "切换用户角色失败时的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onerror",
              children: "onError"
            })
          }), _jsx(_components.td, {
            children: "SDK 运行期间发生错误时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess",
              children: "onJoinChannelSuccess"
            })
          }), _jsx(_components.td, {
            children: "本地用户成功加入频道回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onleavechannel",
              children: "onLeaveChannel"
            })
          }), _jsx(_components.td, {
            children: "用户离开频道回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess",
              children: "onRejoinChannelSuccess"
            })
          }), _jsx(_components.td, {
            children: "用户重新加入频道回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrenewtokenresult",
              children: "onRenewTokenResult"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
              children: "renewToken"
            }), " 调用结果回调。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrequesttoken",
              children: "onRequestToken"
            })
          }), _jsx(_components.td, {
            children: "Token 过期回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrtcstats",
              children: "onRtcStats"
            })
          }), _jsx(_components.td, {
            children: "报告当前通话统计信息的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_ontokenprivilegewillexpire",
              children: "onTokenPrivilegeWillExpire"
            })
          }), _jsx(_components.td, {
            children: "Token 即将在 30 秒后过期时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined",
              children: "onUserJoined"
            })
          }), _jsx(_components.td, {
            children: "远端用户或主播加入频道回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuseroffline",
              children: "onUserOffline"
            })
          }), _jsx(_components.td, {
            children: "远端用户或主播离开频道时触发的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_publishnsubscribe"
    }), `
`, _jsx(_components.h2, {
      id: "发布和订阅",
      children: "发布和订阅"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremoteaudiostreams",
              children: "muteAllRemoteAudioStreams"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复订阅所有远端用户的音频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteallremoteaudiostreamsex",
              children: "muteAllRemoteAudioStreamsEx"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复订阅所有远端用户的音频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremotevideostreams",
              children: "muteAllRemoteVideoStreams"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复订阅所有远端用户的视频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteallremotevideostreamsex",
              children: "muteAllRemoteVideoStreamsEx"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复订阅所有远端用户的视频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream",
              children: "muteLocalAudioStream"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复发布本地采集音频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_mutelocalaudiostreamex",
              children: "muteLocalAudioStreamEx"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复发布本地音频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalvideostream",
              children: "muteLocalVideoStream"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复发布本地视频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_mutelocalvideostreamex",
              children: "muteLocalVideoStreamEx"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复发布本地视频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremoteaudiostream",
              children: "muteRemoteAudioStream"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复订阅指定远端用户的音频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteremoteaudiostreamex",
              children: "muteRemoteAudioStreamEx"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复接收指定用户的音频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremotevideostream",
              children: "muteRemoteVideoStream"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复订阅指定远端用户的视频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteremotevideostreamex",
              children: "muteRemoteVideoStreamEx"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复接收指定用户的视频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode",
              children: "setDualStreamMode [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置发送端的视频流模式，用于控制是否发送视频小流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode2",
              children: "setDualStreamMode [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置发送端的不同质量层级的视频流模式配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
              children: "setDualStreamModeEx"
            })
          }), _jsx(_components.td, {
            children: "设置发送端的视频流模式，用于控制是否发送视频小流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype",
              children: "setRemoteDefaultVideoStreamType [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置默认订阅的视频流类型。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype",
              children: "setRemoteVideoStreamType [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置要订阅的视频流类型。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex",
              children: "setRemoteVideoStreamTypeEx [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置要订阅的视频流类型。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideosubscriptionoptions",
              children: "setRemoteVideoSubscriptionOptions"
            })
          }), _jsx(_components.td, {
            children: "设置订阅远端视频流的选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideosubscriptionoptionsex",
              children: "setRemoteVideoSubscriptionOptionsEx"
            })
          }), _jsx(_components.td, {
            children: "设置订阅远端视频流的选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioallowlist",
              children: "setSubscribeAudioAllowlist"
            })
          }), _jsx(_components.td, {
            children: "设置音频流订阅的白名单。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioallowlistex",
              children: "setSubscribeAudioAllowlistEx"
            })
          }), _jsx(_components.td, {
            children: "设置音频流订阅的白名单。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioblocklist",
              children: "setSubscribeAudioBlocklist"
            })
          }), _jsx(_components.td, {
            children: "设置音频流订阅的黑名单。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioblocklistex",
              children: "setSubscribeAudioBlocklistEx"
            })
          }), _jsx(_components.td, {
            children: "设置音频流订阅的黑名单。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoallowlist",
              children: "setSubscribeVideoAllowlist"
            })
          }), _jsx(_components.td, {
            children: "设置视频流订阅的白名单。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoallowlistex",
              children: "setSubscribeVideoAllowlistEx"
            })
          }), _jsx(_components.td, {
            children: "设置视频流订阅的白名单。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoblocklist",
              children: "setSubscribeVideoBlocklist"
            })
          }), _jsx(_components.td, {
            children: "设置视频流订阅的阻止名单。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoblocklistex",
              children: "setSubscribeVideoBlocklistEx"
            })
          }), _jsx(_components.td, {
            children: "设置视频流订阅的黑名单。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiopublishstatechanged",
              children: "onAudioPublishStateChanged"
            })
          }), _jsx(_components.td, {
            children: "音频发布状态发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiosubscribestatechanged",
              children: "onAudioSubscribeStateChanged"
            })
          }), _jsx(_components.td, {
            children: "音频订阅状态发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onvideosubscribestatechanged",
              children: "onVideoSubscribeStateChanged"
            })
          }), _jsx(_components.td, {
            children: "视频订阅状态发生变化回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_basic"
    }), `
`, _jsx(_components.h2, {
      id: "音频基础功能",
      children: "音频基础功能"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustplaybacksignalvolume",
              children: "adjustPlaybackSignalVolume"
            })
          }), _jsx(_components.td, {
            children: "调节所有远端用户的本地播放音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustuserplaybacksignalvolume",
              children: "adjustUserPlaybackSignalVolume"
            })
          }), _jsx(_components.td, {
            children: "调节指定远端用户的播放音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_adjustuserplaybacksignalvolumeex",
              children: "adjustUserPlaybackSignalVolumeEx"
            })
          }), _jsx(_components.td, {
            children: "调整指定远端用户的播放音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_disableaudio",
              children: "disableAudio"
            })
          }), _jsx(_components.td, {
            children: "禁用音频模块。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio",
              children: "enableAudio"
            })
          }), _jsx(_components.td, {
            children: "启用音频模块。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication",
              children: "enableAudioVolumeIndication"
            })
          }), _jsx(_components.td, {
            children: "启用用户音量提示上报功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_enableaudiovolumeindicationex",
              children: "enableAudioVolumeIndicationEx"
            })
          }), _jsx(_components.td, {
            children: "启用用户音量提示的上报功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile2",
              children: "setAudioProfile [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置音频配置文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario",
              children: "setAudioScenario"
            })
          }), _jsx(_components.td, {
            children: "设置音频场景。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onactivespeaker",
              children: "onActiveSpeaker"
            })
          }), _jsx(_components.td, {
            children: "最活跃远端说话人回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: "onAudioVolumeIndication"
            })
          }), _jsx(_components.td, {
            children: "报告用户音量信息的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstlocalaudioframepublished",
              children: "onFirstLocalAudioFramePublished"
            })
          }), _jsx(_components.td, {
            children: "本地音频首帧发布回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostatechanged",
              children: "onLocalAudioStateChanged"
            })
          }), _jsx(_components.td, {
            children: "本地音频流状态发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostats",
              children: "onLocalAudioStats"
            })
          }), _jsx(_components.td, {
            children: "本地音频流统计信息回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
              children: "onRemoteAudioStateChanged"
            })
          }), _jsx(_components.td, {
            children: "远端音频状态发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats",
              children: "onRemoteAudioStats"
            })
          }), _jsx(_components.td, {
            children: "报告每个远端音频流的传输层统计信息回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio",
              children: "onUserMuteAudio"
            })
          }), _jsx(_components.td, {
            children: "远端用户或主播停止或恢复发送音频流的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_capture"
    }), `
`, _jsx(_components.h2, {
      id: "音频采集",
      children: "音频采集"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_adjustrecordingsignalvolume",
              children: "adjustRecordingSignalVolume"
            })
          }), _jsx(_components.td, {
            children: "调节采集音频信号的音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enableinearmonitoring",
              children: "enableInEarMonitoring [1/2]"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭耳返监听。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enableinearmonitoring2",
              children: "enableInEarMonitoring [2/2]"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭耳返监听功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enablelocalaudio",
              children: "enableLocalAudio"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭本地音频采集功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_muterecordingsignal",
              children: "muteRecordingSignal"
            })
          }), _jsx(_components.td, {
            children: "设置是否静音录制信号。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_setinearmonitoringvolume",
              children: "setInEarMonitoringVolume"
            })
          }), _jsx(_components.td, {
            children: "设置耳返音量。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_effect"
    }), `
`, _jsx(_components.h2, {
      id: "人声音效",
      children: "人声音效"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_enablevoiceaituner",
              children: "enableVoiceAITuner"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭语音 AI 调音器。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_getaudioeffectmanager",
              children: "getAudioEffectManager"
            })
          }), _jsxs(_components.td, {
            children: ["获取用于管理音效文件的 ", _jsx(_components.code, {
              children: "IAudioEffectManager"
            }), " 实例。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setadvancedaudiooptions",
              children: "setAdvancedAudioOptions"
            })
          }), _jsx(_components.td, {
            children: "设置高级音频选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setainsmode",
              children: "setAINSMode"
            })
          }), _jsx(_components.td, {
            children: "设置是否启用 AI 降噪功能并设置降噪模式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectparameters",
              children: "setAudioEffectParameters"
            })
          }), _jsx(_components.td, {
            children: "设置 SDK 预设音效的参数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectpreset",
              children: "setAudioEffectPreset"
            })
          }), _jsx(_components.td, {
            children: "设置 SDK 预设的音效效果。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceequalization",
              children: "setLocalVoiceEqualization"
            })
          }), _jsx(_components.td, {
            children: "设置本地语音的均衡效果。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceformant",
              children: "setLocalVoiceFormant"
            })
          }), _jsx(_components.td, {
            children: "设置共振峰比例以改变人声音色。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicepitch",
              children: "setLocalVoicePitch"
            })
          }), _jsx(_components.td, {
            children: "设置本地语音的音调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicereverb",
              children: "setLocalVoiceReverb"
            })
          }), _jsx(_components.td, {
            children: "设置本地语音的混响效果。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoicebeautifierparameters",
              children: "setVoiceBeautifierParameters"
            })
          }), _jsx(_components.td, {
            children: "设置预设美声特效的参数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoicebeautifierpreset",
              children: "setVoiceBeautifierPreset"
            })
          }), _jsx(_components.td, {
            children: "设置预设的美声效果。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoiceconversionpreset",
              children: "setVoiceConversionPreset"
            })
          }), _jsx(_components.td, {
            children: "设置 SDK 预设的变声效果。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_sound_position"
    }), `
`, _jsx(_components.h2, {
      id: "听声辨位",
      children: "听声辨位"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_enablesoundpositionindication",
              children: "enableSoundPositionIndication"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭远端用户的立体声声像功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_setremotevoiceposition",
              children: "setRemoteVoicePosition"
            })
          }), _jsx(_components.td, {
            children: "设置远端用户语音的二维位置和音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengineex_setremotevoicepositionex",
              children: "setRemoteVoicePositionEx"
            })
          }), _jsx(_components.td, {
            children: "设置远端用户语音的二维位置和音量。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_spatial_audio"
    }), `
`, _jsx(_components.h2, {
      id: "空间音频",
      children: "空间音频"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine",
              children: "initialize"
            })
          }), _jsxs(_components.td, {
            children: ["初始化 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
              children: "ILocalSpatialAudioEngine"
            }), "。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_clearremotepositions",
              children: "clearRemotePositions"
            })
          }), _jsx(_components.td, {
            children: "移除所有远端用户的空间位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_create_ilocalspatialaudioengine",
              children: "create"
            })
          }), _jsxs(_components.td, {
            children: ["创建一个 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
              children: "ILocalSpatialAudioEngine"
            }), " 实例。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_enablespatialaudio",
              children: "enableSpatialAudio"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭空间音效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine",
              children: "muteAllRemoteAudioStreams"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复订阅所有远端用户的音频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine",
              children: "muteLocalAudioStream"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复发布本地音频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine",
              children: "muteRemoteAudioStream"
            })
          }), _jsx(_components.td, {
            children: "停止或恢复订阅指定远端用户的音频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_release_ilocalspatialaudioengine",
              children: "destroy"
            })
          }), _jsxs(_components.td, {
            children: ["销毁 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
              children: "ILocalSpatialAudioEngine"
            }), " 实例。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_removeremoteposition",
              children: "removeRemotePosition"
            })
          }), _jsx(_components.td, {
            children: "移除指定远端用户的空间位置信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setaudiorecvrange",
              children: "setAudioRecvRange"
            })
          }), _jsx(_components.td, {
            children: "设置本地用户的音频接收范围。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setdistanceunit",
              children: "setDistanceUnit"
            })
          }), _jsx(_components.td, {
            children: "设置游戏引擎中每个单位距离对应的米数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqparameters",
              children: "setHeadphoneEQParameters"
            })
          }), _jsx(_components.td, {
            children: "设置耳机均衡器的低频和高频参数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqpreset",
              children: "setHeadphoneEQPreset"
            })
          }), _jsx(_components.td, {
            children: "设置预设的耳机均衡器效果。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setmaxaudiorecvcount",
              children: "setMaxAudioRecvCount"
            })
          }), _jsx(_components.td, {
            children: "设置你在指定音频接收范围内可接收的最大音频流数量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setplayerattenuation",
              children: "setPlayerAttenuation"
            })
          }), _jsx(_components.td, {
            children: "设置媒体播放器的声音衰减属性。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_setremoteaudioattenuation",
              children: "setRemoteAudioAttenuation"
            })
          }), _jsx(_components.td, {
            children: "设置指定用户的声音衰减效果。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setremoteuserspatialaudioparams",
              children: "setRemoteUserSpatialAudioParams"
            })
          }), _jsx(_components.td, {
            children: "设置远端用户的空间音效参数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_imediaplayer_setspatialaudioparams",
              children: "setSpatialAudioParams"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭媒体播放器的空间音效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setzones",
              children: "setZones"
            })
          }), _jsx(_components.td, {
            children: "设置隔音区域。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateplayerpositioninfo",
              children: "updatePlayerPositionInfo"
            })
          }), _jsx(_components.td, {
            children: "更新媒体播放器的空间位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_updateremoteposition",
              children: "updateRemotePosition"
            })
          }), _jsx(_components.td, {
            children: "更新指定远端用户的空间位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateselfposition",
              children: "updateSelfPosition"
            })
          }), _jsx(_components.td, {
            children: "更新本地用户的空间位置。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audiomixer"
    }), `
`, _jsx(_components.h2, {
      id: "本地音频合流",
      children: "本地音频合流"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer",
              children: "startLocalAudioMixer"
            })
          }), _jsx(_components.td, {
            children: "开始本地音频合流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_stoplocalaudiomixer",
              children: "stopLocalAudioMixer"
            })
          }), _jsx(_components.td, {
            children: "停止本地音频合流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_updatelocalaudiomixerconfiguration",
              children: "updateLocalAudioMixerConfiguration"
            })
          }), _jsx(_components.td, {
            children: "更新本地音频合流配置。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_raw"
    }), `
`, _jsx(_components.h2, {
      id: "原始音频数据",
      children: "原始音频数据"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getearmonitoringaudioparams",
              children: "getEarMonitoringAudioParams"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
              children: "onEarMonitoringAudioFrame"
            }), " 回调的音频格式设置方法。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getmixedaudioparams",
              children: "getMixedAudioParams"
            })
          }), _jsxs(_components.td, {
            children: ["设置 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe",
              children: "onMixedAudioFrame"
            }), " 回调的音频格式。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition",
              children: "getObservedAudioFramePosition"
            })
          }), _jsx(_components.td, {
            children: "设置音频数据观察位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getplaybackaudioparams",
              children: "getPlaybackAudioParams"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
              children: "onPlaybackAudioFrame"
            }), " 回调的音频格式设置方法。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getrecordaudioparams",
              children: "getRecordAudioParams"
            })
          }), _jsxs(_components.td, {
            children: ["设置 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe",
              children: "onRecordAudioFrame"
            }), " 回调的音频格式。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver",
              children: "registerAudioFrameObserver"
            })
          }), _jsx(_components.td, {
            children: "注册音频帧观测器对象。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setearmonitoringaudioframeparameters",
              children: "setEarMonitoringAudioFrameParameters"
            })
          }), _jsx(_components.td, {
            children: "设置耳返音频数据格式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setmixedaudioframeparameters",
              children: "setMixedAudioFrameParameters"
            })
          }), _jsx(_components.td, {
            children: "设置混音后用于采集和播放的原始音频数据格式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframebeforemixingparameters",
              children: "setPlaybackAudioFrameBeforeMixingParameters [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置混音前原始音频播放数据的格式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframebeforemixingparameters1",
              children: "setPlaybackAudioFrameBeforeMixingParameters [2/2]"
            })
          }), _jsxs(_components.td, {
            children: ["设置 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing",
              children: "onPlaybackAudioFrameBeforeMixing"
            }), " 回调中返回音频数据的格式。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframeparameters",
              children: "setPlaybackAudioFrameParameters"
            })
          }), _jsx(_components.td, {
            children: "设置原始音频播放数据的格式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setrecordingaudioframeparameters",
              children: "setRecordingAudioFrameParameters"
            })
          }), _jsx(_components.td, {
            children: "设置采集的原始音频数据格式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
              children: "onEarMonitoringAudioFrame"
            })
          }), _jsx(_components.td, {
            children: "耳返音频帧回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe",
              children: "onMixedAudioFrame"
            })
          }), _jsx(_components.td, {
            children: "获取混合采集和播放的音频帧回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
              children: "onPlaybackAudioFrame"
            })
          }), _jsx(_components.td, {
            children: "获取用于播放的原始音频帧回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing",
              children: "onPlaybackAudioFrameBeforeMixing"
            })
          }), _jsx(_components.td, {
            children: "获取已订阅远端用户混音前的音频帧回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe",
              children: "onRecordAudioFrame"
            })
          }), _jsx(_components.td, {
            children: "获取采集到的音频帧回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_encoded"
    }), `
`, _jsx(_components.h2, {
      id: "已编码音频数据",
      children: "已编码音频数据"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver",
              children: "registerAudioEncodedFrameObserver"
            })
          }), _jsx(_components.td, {
            children: "注册编码音频数据的观察器。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onmixedaudioencodedframe",
              children: "onMixedAudioEncodedFrame"
            })
          }), _jsx(_components.td, {
            children: "本地及所有远端用户的混音编码音频数据回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onplaybackaudioencodedframe",
              children: "onPlaybackAudioEncodedFrame"
            })
          }), _jsx(_components.td, {
            children: "获取所有远端用户编码音频数据的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onrecordaudioencodedframe",
              children: "onRecordAudioEncodedFrame"
            })
          }), _jsx(_components.td, {
            children: "本地用户编码音频数据回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_custom_capturenrendering"
    }), `
`, _jsx(_components.h2, {
      id: "自定义音频采集和渲染",
      children: "自定义音频采集和渲染"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudioplayoutvolume",
              children: "adjustCustomAudioPlayoutVolume"
            })
          }), _jsx(_components.td, {
            children: "调节本地播放的自定义音频轨道的音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudiopublishvolume",
              children: "adjustCustomAudioPublishVolume"
            })
          }), _jsx(_components.td, {
            children: "调节远端播放的自定义音频轨道的音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
              children: "createCustomAudioTrack"
            })
          }), _jsx(_components.td, {
            children: "创建一个自定义音频轨道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_destroycustomaudiotrack",
              children: "destroyCustomAudioTrack"
            })
          }), _jsx(_components.td, {
            children: "销毁指定的音频轨道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_enablecustomaudiolocalplayback",
              children: "enableCustomAudioLocalPlayback"
            })
          }), _jsx(_components.td, {
            children: "设置是否启用外部音频源的本地播放。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe",
              children: "pullPlaybackAudioFrame [1/2]"
            })
          }), _jsx(_components.td, {
            children: "拉取远端混音后的音频数据用于播放。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe2",
              children: "pullPlaybackAudioFrame [2/2]"
            })
          }), _jsx(_components.td, {
            children: "拉取远端音频数据。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pushaudioframe2",
              children: "pushExternalAudioFrame"
            })
          }), _jsx(_components.td, {
            children: "将外部音频帧推送到 SDK。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink",
              children: "setExternalAudioSink"
            })
          }), _jsx(_components.td, {
            children: "设置外部音频渲染器。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_spectrum"
    }), `
`, _jsx(_components.h2, {
      id: "音频频谱",
      children: "音频频谱"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_disableaudiospectrummonitor",
              children: "disableAudioSpectrumMonitor"
            })
          }), _jsx(_components.td, {
            children: "禁用音频频谱监测。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor",
              children: "enableAudioSpectrumMonitor"
            })
          }), _jsx(_components.td, {
            children: "开启音频频谱监测功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver",
              children: "registerAudioSpectrumObserver"
            })
          }), _jsx(_components.td, {
            children: "注册音频频谱观察器。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_unregisteraudiospectrumobserver",
              children: "unRegisterAudioSpectrumObserver"
            })
          }), _jsx(_components.td, {
            children: "取消注册音频频谱观察器。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum",
              children: "onLocalAudioSpectrum"
            })
          }), _jsx(_components.td, {
            children: "本地音频频谱数据回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onremoteaudiospectrum",
              children: "onRemoteAudioSpectrum"
            })
          }), _jsx(_components.td, {
            children: "远端音频频谱数据回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_video_basic"
    }), `
`, _jsx(_components.h2, {
      id: "视频基础功能",
      children: "视频基础功能"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo",
              children: "disableVideo"
            })
          }), _jsx(_components.td, {
            children: "关闭视频模块。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo",
              children: "enableLocalVideo"
            })
          }), _jsx(_components.td, {
            children: "启用或禁用本地视频采集。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
              children: "enableVideo"
            })
          }), _jsx(_components.td, {
            children: "启用视频模块。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration",
              children: "setVideoEncoderConfiguration"
            })
          }), _jsx(_components.td, {
            children: "设置本地视频的编码器配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengineex_setvideoencoderconfigurationex",
              children: "setVideoEncoderConfigurationEx"
            })
          }), _jsx(_components.td, {
            children: "设置本地视频的编码器配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoscenario",
              children: "setVideoScenario"
            })
          }), _jsx(_components.td, {
            children: "设置视频应用场景。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview",
              children: "startPreview [1/2]"
            })
          }), _jsx(_components.td, {
            children: "启用本地视频预览。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview2",
              children: "startPreview [2/2]"
            })
          }), _jsx(_components.td, {
            children: "启用本地视频预览，并指定用于预览的视频源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview",
              children: "stopPreview [1/2]"
            })
          }), _jsx(_components.td, {
            children: "停止本地视频预览。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview2",
              children: "stopPreview [2/2]"
            })
          }), _jsx(_components.td, {
            children: "停止本地视频预览。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframe",
              children: "onFirstLocalVideoFrame"
            })
          }), _jsx(_components.td, {
            children: "本地视频首帧在本地视图中显示时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframepublished",
              children: "onFirstLocalVideoFramePublished"
            })
          }), _jsx(_components.td, {
            children: "本地视频首帧发布回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideoframe",
              children: "onFirstRemoteVideoFrame"
            })
          }), _jsx(_components.td, {
            children: "远端视频首帧显示回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideoevent",
              children: "onLocalVideoEvent"
            })
          }), _jsx(_components.td, {
            children: "本地视频事件发生时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
              children: "onLocalVideoStateChanged"
            })
          }), _jsx(_components.td, {
            children: "本地视频流状态发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostats",
              children: "onLocalVideoStats"
            })
          }), _jsx(_components.td, {
            children: "本地视频流统计信息回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged",
              children: "onRemoteVideoStateChanged"
            })
          }), _jsx(_components.td, {
            children: "远端视频状态发生改变回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats",
              children: "onRemoteVideoStats"
            })
          }), _jsx(_components.td, {
            children: "报告每个远端用户发送的视频流的统计信息回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onuserenablevideo",
              children: "onUserEnableVideo"
            })
          }), _jsx(_components.td, {
            children: "远端用户启用或关闭视频模块的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onusermutevideo",
              children: "onUserMuteVideo"
            })
          }), _jsx(_components.td, {
            children: "远端视频状态发生改变回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideopublishstatechanged",
              children: "onVideoPublishStateChanged"
            })
          }), _jsx(_components.td, {
            children: "视频发布状态发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideosizechanged",
              children: "onVideoSizeChanged"
            })
          }), _jsx(_components.td, {
            children: "指定用户的视频尺寸或旋转信息发生变化回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_camera_capture"
    }), `
`, _jsx(_components.h2, {
      id: "摄像头采集",
      children: "摄像头采集"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture",
              children: "startCameraCapture"
            })
          }), _jsx(_components.td, {
            children: "开始视频采集。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_stopcameracapture",
              children: "stopCameraCapture"
            })
          }), _jsx(_components.td, {
            children: "停止摄像头采集。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_screencapture"
    }), `
`, _jsx(_components.h2, {
      id: "屏幕采集",
      children: "屏幕采集"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_queryscreencapturecapability",
              children: "queryScreenCaptureCapability"
            })
          }), _jsx(_components.td, {
            children: "查询设备在屏幕共享时支持的最高帧率。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_setexternalmediaprojection",
              children: "setExternalMediaProjection"
            })
          }), _jsxs(_components.td, {
            children: ["配置 SDK 外部的 ", _jsx(_components.code, {
              children: "MediaProjection"
            }), " 以采集屏幕视频流。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_setscreencapturescenario",
              children: "setScreenCaptureScenario"
            })
          }), _jsx(_components.td, {
            children: "设置屏幕共享场景。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture",
              children: "startScreenCapture"
            })
          }), _jsx(_components.td, {
            children: "开始屏幕采集。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_stopscreencapture",
              children: "stopScreenCapture"
            })
          }), _jsx(_components.td, {
            children: "停止屏幕采集。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_updatescreencaptureparameters",
              children: "updateScreenCaptureParameters"
            })
          }), _jsx(_components.td, {
            children: "更新屏幕采集参数。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_snapshot"
    }), `
`, _jsx(_components.h2, {
      id: "本地截图上传",
      children: "本地截图上传"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_enablecontentinspect",
              children: "enableContentInspect"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭本地截图上传功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_enablecontentinspectex",
              children: "enableContentInspectEx"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭本地截图上传功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_takesnapshot",
              children: "takeSnapshot [1/2]"
            })
          }), _jsx(_components.td, {
            children: "截取指定用户的视频流快照并保存为 JPG 图像。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_takesnapshot2",
              children: "takeSnapshot [2/2]"
            })
          }), _jsx(_components.td, {
            children: "在指定的观察点截取视频截图。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_takesnapshotex",
              children: "takeSnapshotEx [1/2]"
            })
          }), _jsx(_components.td, {
            children: "使用连接 ID 对视频流进行截图。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_takesnapshotex2",
              children: "takeSnapshotEx [2/2]"
            })
          }), _jsx(_components.td, {
            children: "通过连接 ID 获取指定用户的视频截图。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken",
              children: "onSnapshotTaken"
            })
          }), _jsx(_components.td, {
            children: "视频截图结果回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_virtualbackground"
    }), `
`, _jsx(_components.h2, {
      id: "虚拟背景",
      children: "虚拟背景"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground",
              children: "enableVirtualBackground [1/2]"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭虚拟背景功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground2",
              children: "enableVirtualBackground [2/2]"
            })
          }), _jsx(_components.td, {
            children: "启用虚拟背景并指定媒体源，或关闭虚拟背景。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_local_transcoder"
    }), `
`, _jsx(_components.h2, {
      id: "本地合图",
      children: "本地合图"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder",
              children: "startLocalVideoTranscoder"
            })
          }), _jsx(_components.td, {
            children: "开始本地视频合图。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_stoplocalvideotranscoder",
              children: "stopLocalVideoTranscoder"
            })
          }), _jsx(_components.td, {
            children: "停止本地合图。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_updatelocaltranscoderconfiguration",
              children: "updateLocalTranscoderConfiguration"
            })
          }), _jsx(_components.td, {
            children: "更新本地合图配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#callback_irtcengineeventhandler_onlocalvideotranscodererror",
              children: "onLocalVideoTranscoderError"
            })
          }), _jsx(_components.td, {
            children: "本地视频合图过程中发生错误回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_video_enhance_option"
    }), `
`, _jsx(_components.h2, {
      id: "视频增强",
      children: "视频增强"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_addorupdatevideoeffect",
              children: "addOrUpdateVideoEffect"
            })
          }), _jsx(_components.td, {
            children: "为指定的视频特效节点 ID 和模板添加或更新视频特效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_createvideoeffectobject",
              children: "createVideoEffectObject"
            })
          }), _jsxs(_components.td, {
            children: ["创建一个 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
              children: "IVideoEffectObject"
            }), " 视频特效对象。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_destroyvideoeffectobject",
              children: "destroyVideoEffectObject"
            })
          }), _jsx(_components.td, {
            children: "销毁一个视频特效对象。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapeareaoptions",
              children: "getFaceShapeAreaOptions [1/2]"
            })
          }), _jsx(_components.td, {
            children: "获取美颜区域的当前设置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapeareaoptions2",
              children: "getFaceShapeAreaOptions [2/2]"
            })
          }), _jsx(_components.td, {
            children: "获取当前美颜效果区域的设置选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapebeautyoptions",
              children: "getFaceShapeBeautyOptions [1/2]"
            })
          }), _jsx(_components.td, {
            children: "获取当前的美颜特效设置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapebeautyoptions2",
              children: "getFaceShapeBeautyOptions [2/2]"
            })
          }), _jsx(_components.td, {
            children: "获取当前的美颜特效设置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_watermarkconfig_getoptions",
              children: "getOptions"
            })
          }), _jsx(_components.td, {
            children: "获取当前配置的水印显示选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectboolparam",
              children: "getVideoEffectBoolParam"
            })
          }), _jsx(_components.td, {
            children: "获取视频特效中的布尔类型参数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectfloatparam",
              children: "getVideoEffectFloatParam"
            })
          }), _jsxs(_components.td, {
            children: ["获取视频特效中指定参数的 ", _jsx(_components.code, {
              children: "float"
            }), " 类型值。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectintparam",
              children: "getVideoEffectIntParam"
            })
          }), _jsx(_components.td, {
            children: "获取视频特效中的整数类型参数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_performvideoeffectaction",
              children: "performVideoEffectAction"
            })
          }), _jsx(_components.td, {
            children: "对指定的视频特效节点执行操作。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_removevideoeffect",
              children: "removeVideoEffect"
            })
          }), _jsx(_components.td, {
            children: "移除指定节点 ID 的视频特效节点。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions",
              children: "setBeautyEffectOptions [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置美颜特效功能及其参数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions2",
              children: "setBeautyEffectOptions [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置美颜特效选项并指定媒体源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions",
              children: "setColorEnhanceOptions [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置色彩增强功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions2",
              children: "setColorEnhanceOptions [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置色彩增强选项并指定媒体源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions",
              children: "setFaceShapeAreaOptions [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置面部区域的美颜特效选项并指定媒体源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions2",
              children: "setFaceShapeAreaOptions [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置美颜增强的面部区域选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions",
              children: "setFaceShapeBeautyOptions [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置美型效果并指定应用的媒体源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions2",
              children: "setFaceShapeBeautyOptions [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置美型选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfiltereffectoptions",
              children: "setFilterEffectOptions [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置滤镜特效参数并指定媒体源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfiltereffectoptions2",
              children: "setFilterEffectOptions [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置滤镜特效选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setlowlightenhanceoptions",
              children: "setLowlightEnhanceOptions [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置暗光增强功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setlowlightenhanceoptions2",
              children: "setLowlightEnhanceOptions [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置低光增强选项并指定媒体源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions",
              children: "setVideoDenoiserOptions [1/2]"
            })
          }), _jsx(_components.td, {
            children: "设置视频降噪功能及其选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions2",
              children: "setVideoDenoiserOptions [2/2]"
            })
          }), _jsx(_components.td, {
            children: "设置视频降噪并指定媒体源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectboolparam",
              children: "setVideoEffectBoolParam"
            })
          }), _jsx(_components.td, {
            children: "设置视频特效的布尔参数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectfloatparam",
              children: "setVideoEffectFloatParam"
            })
          }), _jsx(_components.td, {
            children: "设置视频特效的浮点参数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectintparam",
              children: "setVideoEffectIntParam"
            })
          }), _jsx(_components.td, {
            children: "设置视频特效的整数参数。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_face_detection"
    }), `
`, _jsx(_components.h2, {
      id: "人脸检测",
      children: "人脸检测"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#api_irtcengine_enablefacedetection",
              children: "enableFaceDetection"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭本地用户的人脸检测功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#callback_irtcengineeventhandler_onfacepositionchanged",
              children: "onFacePositionChanged"
            })
          }), _jsx(_components.td, {
            children: "上报本地用户的人脸检测结果。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_watermark"
    }), `
`, _jsx(_components.h2, {
      id: "直播水印",
      children: "直播水印"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark3",
              children: "addVideoWatermark [3/3]"
            })
          }), _jsx(_components.td, {
            children: "向本地视频流添加水印图像。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex1",
              children: "addVideoWatermarkEx [2/2]"
            })
          }), _jsx(_components.td, {
            children: "向本地视频添加水印图像。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_clearvideowatermarkex",
              children: "clearVideoWatermarkEx"
            })
          }), _jsx(_components.td, {
            children: "从视频流中移除水印图像。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_clearvideowatermarks",
              children: "clearVideoWatermarks"
            })
          }), _jsx(_components.td, {
            children: "从视频流中移除水印图像。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getbuffer",
              children: "getBuffer"
            })
          }), _jsx(_components.td, {
            children: "获取水印图像的数据缓冲区。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getformat",
              children: "getFormat"
            })
          }), _jsx(_components.td, {
            children: "获取水印图像的格式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getheight",
              children: "getHeight"
            })
          }), _jsx(_components.td, {
            children: "获取水印图像的高度。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getid",
              children: "getId"
            })
          }), _jsx(_components.td, {
            children: "获取水印的唯一标识符。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkconfig_getimageurl",
              children: "getImageUrl"
            })
          }), _jsx(_components.td, {
            children: "获取水印图像的 URL。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkoptions_getpositioninlandscapemode",
              children: "getPositionInLandscapeMode"
            })
          }), _jsx(_components.td, {
            children: "获取横屏模式下水印的位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkoptions_getpositioninportraitmode",
              children: "getPositionInPortraitMode"
            })
          }), _jsx(_components.td, {
            children: "获取竖屏模式下水印的位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkconfig_gettype",
              children: "getType"
            })
          }), _jsx(_components.td, {
            children: "获取当前水印配置中的水印类型信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkbuffer_getwidth",
              children: "getWidth"
            })
          }), _jsx(_components.td, {
            children: "获取水印图像的宽度。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkoptions_getzorder",
              children: "getzOrder"
            })
          }), _jsx(_components.td, {
            children: "获取水印图像的 Z-order 索引。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_watermarkoptions_isvisibleinpreview",
              children: "isVisibleInPreview"
            })
          }), _jsx(_components.td, {
            children: "检查水印在本地视频预览中是否可见。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_removevideowatermark",
              children: "removeVideoWatermark"
            })
          }), _jsx(_components.td, {
            children: "从本地视频中移除水印图像。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_removevideowatermarkex",
              children: "removeVideoWatermarkEx"
            })
          }), _jsx(_components.td, {
            children: "从本地或远端视频流中移除指定的水印图像。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_image_source"
    }), `
`, _jsx(_components.h2, {
      id: "垫片推流",
      children: "垫片推流"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/image-source#api_irtcengine_enablevideoimagesource",
              children: "enableVideoImageSource"
            })
          }), _jsx(_components.td, {
            children: "设置在发布视频流时是否使用图片替代当前视频画面。"
          })]
        })
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_video_rendering"
    }), `
`, _jsx(_components.h2, {
      id: "视频渲染",
      children: "视频渲染"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_enableinstantmediarendering",
              children: "enableInstantMediaRendering"
            })
          }), _jsx(_components.td, {
            children: "启用音视频帧的即时渲染。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode2",
              children: "setLocalRenderMode [2/2]"
            })
          }), _jsx(_components.td, {
            children: "更新本地视频画面的显示模式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendertargetfps",
              children: "setLocalRenderTargetFps"
            })
          }), _jsx(_components.td, {
            children: "设置本地视频渲染的最大帧率。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setremoterendermodeex",
              children: "setRemoteRenderModeEx"
            })
          }), _jsx(_components.td, {
            children: "设置指定远端用户的视频显示模式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setremoterendertargetfps",
              children: "setRemoteRenderTargetFps"
            })
          }), _jsx(_components.td, {
            children: "设置远端视频渲染的最大帧率。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_imediaplayer_setrendermode",
              children: "setVideoRenderMode"
            })
          }), _jsx(_components.td, {
            children: "设置媒体播放器的渲染模式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo",
              children: "setupLocalVideo"
            })
          }), _jsx(_components.td, {
            children: "初始化本地视频画面。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setupremotevideo",
              children: "setupRemoteVideo"
            })
          }), _jsx(_components.td, {
            children: "初始化远端视频视图。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setupremotevideoex",
              children: "setupRemoteVideoEx"
            })
          }), _jsx(_components.td, {
            children: "初始化远端用户的视频视图。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
              children: "startMediaRenderingTracing"
            })
          }), _jsx(_components.td, {
            children: "启用视频帧渲染过程的追踪。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_startmediarenderingtracingex",
              children: "startMediaRenderingTracingEx"
            })
          }), _jsx(_components.td, {
            children: "启用视频帧渲染过程的追踪。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo",
              children: "onTranscodedStreamLayoutInfo"
            })
          }), _jsx(_components.td, {
            children: "接收到携带布局信息的合图视频流回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult",
              children: "onVideoRenderingTracingResult"
            })
          }), _jsx(_components.td, {
            children: "视频帧渲染事件回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_video_raw"
    }), `
`, _jsx(_components.h2, {
      id: "原始视频数据",
      children: "原始视频数据"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getmirrorapplied",
              children: "getMirrorApplied"
            })
          }), _jsx(_components.td, {
            children: "每次 SDK 接收到视频帧时触发的回调，用于设置是否对采集的视频进行镜像。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getobservedframeposition",
              children: "getObservedFramePosition"
            })
          }), _jsx(_components.td, {
            children: "设置视频观察器的帧位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getrotationapplied",
              children: "getRotationApplied"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getrotationapplied",
              children: "getRotationApplied"
            }), " 回调在每次 SDK 接收到视频帧时触发，用于设置是否旋转采集的视频。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoformatpreference",
              children: "getVideoFormatPreference"
            })
          }), _jsx(_components.td, {
            children: "设置 SDK 输出的原始视频数据格式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode",
              children: "getVideoFrameProcessMode"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode",
              children: "getVideoFrameProcessMode"
            }), " 回调。每次 SDK 接收到视频帧时触发，并提示你设置视频帧的处理模式。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver",
              children: "registerVideoFrameObserver"
            })
          }), _jsx(_components.td, {
            children: "注册原始视频帧观察器对象。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_oncapturevideoframe",
              children: "onCaptureVideoFrame"
            })
          }), _jsx(_components.td, {
            children: "本地设备采集到视频帧时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onpreencodevideoframe",
              children: "onPreEncodeVideoFrame"
            })
          }), _jsx(_components.td, {
            children: "每次 SDK 接收到编码前视频帧时触发该回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onrendervideoframe",
              children: "onRenderVideoFrame"
            })
          }), _jsx(_components.td, {
            children: "远端用户发送视频帧时触发的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_video_encoded"
    }), `
`, _jsx(_components.h2, {
      id: "已编码视频数据",
      children: "已编码视频数据"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-encoded#api_irtcengine_registervideoencodedframeobserver",
              children: "registerVideoEncodedFrameObserver"
            })
          }), _jsx(_components.td, {
            children: "注册用于接收编码后视频帧的观察器对象。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-encoded#callback_ivideoencodedframeobserver_onencodedvideoframereceived",
              children: "onEncodedVideoFrameReceived"
            })
          }), _jsx(_components.td, {
            children: "接收端收到远端编码视频帧回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_video_custom_capturenrendering"
    }), `
`, _jsx(_components.h2, {
      id: "自定义视频采集和渲染",
      children: "自定义视频采集和渲染"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack",
              children: "createCustomVideoTrack"
            })
          }), _jsx(_components.td, {
            children: "创建一个自定义视频轨道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_destroycustomvideotrack",
              children: "destroyCustomVideoTrack"
            })
          }), _jsx(_components.td, {
            children: "销毁指定的视频轨道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_istextureencodesupported",
              children: "isTextureEncodeSupported"
            })
          }), _jsxs(_components.td, {
            children: ["检查视频是否支持 ", _jsx(_components.code, {
              children: "Texture"
            }), " 编码。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe",
              children: "pushExternalVideoFrameById [1/2]"
            })
          }), _jsx(_components.td, {
            children: "通过视频轨道向 SDK 推送外部原始视频帧。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe3",
              children: "pushExternalVideoFrameById [2/2]"
            })
          }), _jsx(_components.td, {
            children: "通过视频轨道向 SDK 推送外部原始视频帧。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalremoteeglcontext",
              children: "setExternalRemoteEglContext"
            })
          }), _jsx(_components.td, {
            children: "设置用于渲染远端视频流的 EGL 上下文。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource",
              children: "setExternalVideoSource"
            })
          }), _jsx(_components.td, {
            children: "配置外部视频源。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_mixing"
    }), `
`, _jsx(_components.h2, {
      id: "音乐文件播放",
      children: "音乐文件播放"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingplayoutvolume",
              children: "adjustAudioMixingPlayoutVolume"
            })
          }), _jsx(_components.td, {
            children: "调节本地播放的混音音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingpublishvolume",
              children: "adjustAudioMixingPublishVolume"
            })
          }), _jsx(_components.td, {
            children: "调节用于发布的混音音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingvolume",
              children: "adjustAudioMixingVolume"
            })
          }), _jsx(_components.td, {
            children: "调节混音时的音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingcurrentposition",
              children: "getAudioMixingCurrentPosition"
            })
          }), _jsx(_components.td, {
            children: "获取当前混音的播放位置（毫秒）。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingduration",
              children: "getAudioMixingDuration"
            })
          }), _jsx(_components.td, {
            children: "获取音频文件的混音时长（毫秒）。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingplayoutvolume",
              children: "getAudioMixingPlayoutVolume"
            })
          }), _jsx(_components.td, {
            children: "获取本地播放的混音音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingpublishvolume",
              children: "getAudioMixingPublishVolume"
            })
          }), _jsx(_components.td, {
            children: "获取用于发布的混音音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiotrackcount",
              children: "getAudioTrackCount"
            })
          }), _jsx(_components.td, {
            children: "获取当前音乐文件的音轨索引。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_pauseaudiomixing",
              children: "pauseAudioMixing"
            })
          }), _jsx(_components.td, {
            children: "暂停播放和混音的音乐文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_resumeaudiomixing",
              children: "resumeAudioMixing"
            })
          }), _jsx(_components.td, {
            children: "恢复播放和混音的音乐文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_selectaudiotrack",
              children: "selectAudioTrack"
            })
          }), _jsx(_components.td, {
            children: "选择播放过程中使用的音轨。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_imediaplayer_selectmultiaudiotrack",
              children: "selectMultiAudioTrack"
            })
          }), _jsx(_components.td, {
            children: "选择要在本地设备播放和发布到频道的音轨。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingdualmonomode",
              children: "setAudioMixingDualMonoMode"
            })
          }), _jsx(_components.td, {
            children: "设置当前音频文件的声道模式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingpitch",
              children: "setAudioMixingPitch"
            })
          }), _jsx(_components.td, {
            children: "设置本地音乐文件的音调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingplaybackspeed",
              children: "setAudioMixingPlaybackSpeed"
            })
          }), _jsx(_components.td, {
            children: "设置当前音频文件的播放速度。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingposition",
              children: "setAudioMixingPosition"
            })
          }), _jsx(_components.td, {
            children: "设置混音的播放位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing2",
              children: "startAudioMixing [2/2]"
            })
          }), _jsx(_components.td, {
            children: "开始播放音乐文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_stopaudiomixing",
              children: "stopAudioMixing"
            })
          }), _jsx(_components.td, {
            children: "停止播放音乐文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingpositionchanged",
              children: "onAudioMixingPositionChanged"
            })
          }), _jsx(_components.td, {
            children: "音乐文件播放进度回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
              children: "onAudioMixingStateChanged"
            })
          }), _jsx(_components.td, {
            children: "音乐文件播放状态变化回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_effect_file"
    }), `
`, _jsx(_components.h2, {
      id: "音效文件播放",
      children: "音效文件播放"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectcurrentposition",
              children: "getEffectCurrentPosition"
            })
          }), _jsx(_components.td, {
            children: "获取指定音效文件的播放位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectduration",
              children: "getEffectDuration"
            })
          }), _jsx(_components.td, {
            children: "获取音效文件的时长。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectsvolume",
              children: "getEffectsVolume"
            })
          }), _jsx(_components.td, {
            children: "获取音效的音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_getvolumeofeffect",
              children: "getVolumeOfEffect"
            })
          }), _jsx(_components.td, {
            children: "获取指定音效文件的音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects",
              children: "pauseAllEffects"
            })
          }), _jsx(_components.td, {
            children: "暂停所有音效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pauseeffect",
              children: "pauseEffect"
            })
          }), _jsx(_components.td, {
            children: "暂停指定音效文件的播放。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playalleffects",
              children: "playAllEffects"
            })
          }), _jsx(_components.td, {
            children: "播放所有音效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect2",
              children: "playEffect [1/2]"
            })
          }), _jsx(_components.td, {
            children: "播放指定的本地或在线音效文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect3",
              children: "playEffect [2/2]"
            })
          }), _jsx(_components.td, {
            children: "播放指定的本地或在线音效文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_playeffectex",
              children: "playEffectEx [1/2]"
            })
          }), _jsx(_components.td, {
            children: "在频道中播放指定的音效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_playeffectex2",
              children: "playEffectEx [2/2]"
            })
          }), _jsx(_components.td, {
            children: "在频道中播放指定音效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_preloadeffect",
              children: "preloadEffect [1/2]"
            })
          }), _jsx(_components.td, {
            children: "预加载指定的音效文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_preloadeffect2",
              children: "preloadEffect [2/2]"
            })
          }), _jsx(_components.td, {
            children: "将指定的音效文件预加载到内存中。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_preloadeffectex",
              children: "preloadEffectEx [1/2]"
            })
          }), _jsx(_components.td, {
            children: "将指定音效预加载到频道中。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_preloadeffectex2",
              children: "preloadEffectEx [2/2]"
            })
          }), _jsx(_components.td, {
            children: "将指定音效预加载到频道中。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumealleffects",
              children: "resumeAllEffects"
            })
          }), _jsx(_components.td, {
            children: "恢复播放所有音效文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumeeffect",
              children: "resumeEffect"
            })
          }), _jsx(_components.td, {
            children: "恢复播放指定音效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_seteffectposition",
              children: "setEffectPosition"
            })
          }), _jsx(_components.td, {
            children: "设置音效文件的播放位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_seteffectsvolume",
              children: "setEffectsVolume"
            })
          }), _jsx(_components.td, {
            children: "设置音效的播放音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_setvolumeofeffect",
              children: "setVolumeOfEffect"
            })
          }), _jsx(_components.td, {
            children: "设置指定音效文件的播放音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopalleffects",
              children: "stopAllEffects"
            })
          }), _jsx(_components.td, {
            children: "停止播放所有音效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopeffect",
              children: "stopEffect"
            })
          }), _jsx(_components.td, {
            children: "停止播放指定音效。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_unloadeffect",
              children: "unloadEffect"
            })
          }), _jsx(_components.td, {
            children: "释放指定的预加载音效文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#callback_irtcengineeventhandler_onaudioeffectfinished",
              children: "onAudioEffectFinished"
            })
          }), _jsx(_components.td, {
            children: "本地音效文件播放完成时的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_mediaplayer_initialize"
    }), `
`, _jsx(_components.h2, {
      id: "初始化",
      children: "初始化"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_irtcengine_createmediaplayer",
              children: "createMediaPlayer"
            })
          }), _jsxs(_components.td, {
            children: ["创建一个 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer",
              children: "IMediaPlayer"
            }), " 对象。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayer_destroy_imediaplayer",
              children: "destroy"
            })
          }), _jsx(_components.td, {
            children: "销毁媒体播放器实例。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager",
              children: "getMediaPlayerCacheManager"
            })
          }), _jsxs(_components.td, {
            children: ["获取一个 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
              children: "IMediaPlayerCacheManager"
            }), " 实例。"]
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_mediaplayer_open"
    }), `
`, _jsx(_components.h2, {
      id: "媒体资源打开",
      children: "媒体资源打开"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_open",
              children: "open [1/2]"
            })
          }), _jsx(_components.td, {
            children: "打开媒体资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_open2",
              children: "open [2/2]"
            })
          }), _jsx(_components.td, {
            children: "通过 URI 地址打开媒体文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
              children: "openWithMediaSource"
            })
          }), _jsx(_components.td, {
            children: "打开媒体文件并配置播放场景。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc",
              children: "preloadSrc"
            })
          }), _jsx(_components.td, {
            children: "预加载媒体资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_switchsrc",
              children: "switchSrc"
            })
          }), _jsx(_components.td, {
            children: "切换正在播放的媒体资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_unloadsrc",
              children: "unloadSrc"
            })
          }), _jsx(_components.td, {
            children: "卸载预加载的媒体资源。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_mediaplayer_playnrender"
    }), `
`, _jsx(_components.h2, {
      id: "媒体资源播放和渲染",
      children: "媒体资源播放和渲染"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_selectaudiotrack_imediaplayer",
              children: "selectAudioTrack"
            })
          }), _jsx(_components.td, {
            children: "在播放过程中选择音频轨道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiodualmonomode",
              children: "setAudioDualMonoMode"
            })
          }), _jsx(_components.td, {
            children: "设置当前音频文件的声道模式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiopitch",
              children: "setAudioPitch"
            })
          }), _jsx(_components.td, {
            children: "设置当前媒体资源的音调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setloopcount",
              children: "setLoopCount"
            })
          }), _jsx(_components.td, {
            children: "设置音效的循环播放次数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplaybackspeed",
              children: "setPlaybackSpeed"
            })
          }), _jsx(_components.td, {
            children: "设置当前音频文件的播放速度。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption",
              children: "setPlayerOption"
            })
          }), _jsx(_components.td, {
            children: "设置媒体播放器选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2",
              children: "setPlayerOptionString"
            })
          }), _jsx(_components.td, {
            children: "设置媒体播放器的参数选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setview",
              children: "setView"
            })
          }), _jsx(_components.td, {
            children: "设置渲染视图。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_mediaplayer_control"
    }), `
`, _jsx(_components.h2, {
      id: "播放器控制",
      children: "播放器控制"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustplayoutvolume",
              children: "adjustPlayoutVolume"
            })
          }), _jsx(_components.td, {
            children: "调节本地播放音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustpublishsignalvolume",
              children: "adjustPublishSignalVolume"
            })
          }), _jsx(_components.td, {
            children: "调节用于发布的媒体文件音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_mute",
              children: "mute"
            })
          }), _jsx(_components.td, {
            children: "设置是否静音媒体文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_pause",
              children: "pause"
            })
          }), _jsx(_components.td, {
            children: "暂停播放。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play",
              children: "play"
            })
          }), _jsx(_components.td, {
            children: "播放媒体文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc",
              children: "playPreloadedSrc"
            })
          }), _jsx(_components.td, {
            children: "播放预加载的媒体资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_resume",
              children: "resume"
            })
          }), _jsx(_components.td, {
            children: "恢复播放媒体文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_seek",
              children: "seek"
            })
          }), _jsx(_components.td, {
            children: "跳转到新的播放位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_stop",
              children: "stop [1/2]"
            })
          }), _jsx(_components.td, {
            children: "停止播放媒体轨道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#callback_imediaplayercustomdataprovider_onseek",
              children: "onSeek"
            })
          }), _jsx(_components.td, {
            children: "当 SDK 定位媒体资源数据时触发的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_mediaplayer_info"
    }), `
`, _jsx(_components.h2, {
      id: "播放信息获取",
      children: "播放信息获取"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getaudiobufferdelay",
              children: "getAudioBufferDelay"
            })
          }), _jsx(_components.td, {
            children: "获取播放媒体文件时的音频缓冲延迟。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getduration",
              children: "getDuration"
            })
          }), _jsx(_components.td, {
            children: "获取媒体资源的时长。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmediaplayerid",
              children: "getMediaPlayerId"
            })
          }), _jsx(_components.td, {
            children: "获取媒体播放器的 ID。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmute",
              children: "getMute"
            })
          }), _jsx(_components.td, {
            children: "报告媒体资源是否被静音。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplayoutvolume",
              children: "getPlayoutVolume"
            })
          }), _jsx(_components.td, {
            children: "获取本地播放音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplayposition",
              children: "getPlayPosition"
            })
          }), _jsx(_components.td, {
            children: "获取当前本地播放进度。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplaysrc_imediaplayer",
              children: "getPlaySrc [1/2]"
            })
          }), _jsx(_components.td, {
            children: "获取当前正在播放的媒体资源路径。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getpublishsignalvolume",
              children: "getPublishSignalVolume"
            })
          }), _jsx(_components.td, {
            children: "获取用于发布的媒体文件音量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstate",
              children: "getState"
            })
          }), _jsx(_components.td, {
            children: "获取当前播放状态。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount",
              children: "getStreamCount"
            })
          }), _jsx(_components.td, {
            children: "获取媒体资源中媒体流的数量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo",
              children: "getStreamInfo"
            })
          }), _jsx(_components.td, {
            children: "获取媒体流的详细信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#callback_imediaplayersourceobserver_onplayerplaybackstats",
              children: "onPlayerPlaybackStats"
            })
          }), _jsx(_components.td, {
            children: "报告正在播放的媒体文件的统计信息回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_mediaplayer_observer"
    }), `
`, _jsx(_components.h2, {
      id: "音视频观测器",
      children: "音视频观测器"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registeraudioframeobserver2_imediaplayer",
              children: "registerAudioFrameObserver"
            })
          }), _jsx(_components.td, {
            children: "注册音频帧观测器对象。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registerplayersourceobserver",
              children: "registerPlayerObserver"
            })
          }), _jsx(_components.td, {
            children: "注册媒体播放器观察器。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registervideoframeobserver_imediaplayer",
              children: "registerVideoFrameObserver"
            })
          }), _jsx(_components.td, {
            children: "注册视频帧观察者对象。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_unregisterplayersourceobserver",
              children: "unRegisterPlayerObserver"
            })
          }), _jsx(_components.td, {
            children: "释放媒体播放器观察者。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver",
              children: "onAudioVolumeIndication"
            })
          }), _jsx(_components.td, {
            children: "报告媒体播放器音量的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver",
              children: "onFrame"
            })
          }), _jsx(_components.td, {
            children: "播放器接收到音频帧时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver",
              children: "onFrame"
            })
          }), _jsx(_components.td, {
            children: "播放器接收到视频帧时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onmetadata",
              children: "onMetaData"
            })
          }), _jsx(_components.td, {
            children: "接收到媒体元数据时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplaybufferupdated",
              children: "onPlayBufferUpdated"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplaybufferupdated",
              children: "onPlayBufferUpdated"
            }), " 回调：报告缓冲数据可支持的播放时长。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent",
              children: "onPlayerEvent"
            })
          }), _jsx(_components.td, {
            children: "播放器事件回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerinfoupdated",
              children: "onPlayerInfoUpdated"
            })
          }), _jsx(_components.td, {
            children: "媒体播放器相关信息发生变化时的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
              children: "onPlayerStateChanged"
            })
          }), _jsx(_components.td, {
            children: "播放状态发生改变回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersrcinfochanged",
              children: "onPlayerSrcInfoChanged"
            })
          }), _jsx(_components.td, {
            children: "媒体资源视频码率发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpositionchanged",
              children: "onPositionChanged"
            })
          }), _jsx(_components.td, {
            children: "播放进度回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpreloadevent",
              children: "onPreloadEvent"
            })
          }), _jsx(_components.td, {
            children: "预加载媒体资源事件回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayercustomdataprovider_onreaddata",
              children: "onReadData"
            })
          }), _jsx(_components.td, {
            children: "SDK 读取媒体资源数据时触发的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_mediaplayer_cache"
    }), `
`, _jsx(_components.h2, {
      id: "媒体播放器缓存",
      children: "媒体播放器缓存"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_enableautoremovecache",
              children: "enableAutoRemoveCache"
            })
          }), _jsx(_components.td, {
            children: "设置是否自动删除缓存的媒体文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getcachedir",
              children: "getCacheDir"
            })
          }), _jsx(_components.td, {
            children: "获取缓存媒体文件的存储路径。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getcachefilecount",
              children: "getCacheFileCount"
            })
          }), _jsx(_components.td, {
            children: "获取已缓存的媒体文件数量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getmaxcachefilecount",
              children: "getMaxCacheFileCount"
            })
          }), _jsx(_components.td, {
            children: "获取可缓存的媒体文件的最大数量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getmaxcachefilesize",
              children: "getMaxCacheFileSize"
            })
          }), _jsx(_components.td, {
            children: "获取缓存媒体文件聚合存储空间的最大大小。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeallcaches",
              children: "removeAllCaches"
            })
          }), _jsx(_components.td, {
            children: "删除媒体播放器中所有缓存的媒体文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removecachebyuri",
              children: "removeCacheByUri"
            })
          }), _jsx(_components.td, {
            children: "删除缓存的媒体文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeoldcache",
              children: "removeOldCache"
            })
          }), _jsx(_components.td, {
            children: "删除最少使用的缓存媒体文件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setcachedir",
              children: "setCacheDir"
            })
          }), _jsx(_components.td, {
            children: "设置要缓存的媒体文件的存储路径。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilecount",
              children: "setMaxCacheFileCount"
            })
          }), _jsx(_components.td, {
            children: "设置可缓存的媒体文件数量上限。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilesize",
              children: "setMaxCacheFileSize"
            })
          }), _jsx(_components.td, {
            children: "设置缓存媒体文件的聚合存储空间的最大大小。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#callback_imediaplayersourceobserver_onplayercachestats",
              children: "onPlayerCacheStats"
            })
          }), _jsx(_components.td, {
            children: "报告正在缓存的媒体文件的统计信息回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_drm"
    }), `
`, _jsx(_components.h2, {
      id: "版权音乐",
      children: "版权音乐"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_createmusicplayer",
              children: "createMusicPlayer"
            })
          }), _jsx(_components.td, {
            children: "创建一个音乐播放器。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroy_imusiccontentcenter",
              children: "destroy"
            })
          }), _jsxs(_components.td, {
            children: ["销毁 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
              children: "IAgoraMusicContentCenter"
            }), " 实例。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroymusicplayer",
              children: "destroyMusicPlayer"
            })
          }), _jsx(_components.td, {
            children: "销毁音乐播放器对象。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getcaches",
              children: "getCaches"
            })
          }), _jsx(_components.td, {
            children: "获取已缓存的音乐资源信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getinternalsongcode",
              children: "getInternalSongCode"
            })
          }), _jsx(_components.td, {
            children: "创建音乐资源副歌片段的内部标识符。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getlyric",
              children: "getLyric"
            })
          }), _jsx(_components.td, {
            children: "获取音乐资源歌词的下载链接。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccharts",
              children: "getMusicCharts"
            })
          }), _jsx(_components.td, {
            children: "获取所有音乐排行榜。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccollectionbymusicchartid",
              children: "getMusicCollectionByMusicChartId [1/2]"
            })
          }), _jsx(_components.td, {
            children: "根据音乐榜单 ID 获取音乐资源列表。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccollectionbymusicchartid2",
              children: "getMusicCollectionByMusicChartId [2/2]"
            })
          }), _jsx(_components.td, {
            children: "根据音乐榜单 ID 获取音乐资源列表。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_getplaysrc",
              children: "getPlaySrc [2/2]"
            })
          }), _jsx(_components.td, {
            children: "获取当前播放的音乐资源的标识符或 URL。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getsongsimpleinfo",
              children: "getSongSimpleInfo"
            })
          }), _jsx(_components.td, {
            children: "检索特定音乐资源的详细信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_initialize_imusiccontentcenter",
              children: "initialize"
            })
          }), _jsxs(_components.td, {
            children: ["初始化 ", _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imusiccontentcenter",
              children: "IAgoraMusicContentCenter"
            }), "。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_ispreloaded",
              children: "isPreloaded"
            })
          }), _jsx(_components.td, {
            children: "检查指定音乐资源是否已预加载。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open2_imusicplayer",
              children: "open [2/2]"
            })
          }), _jsx(_components.td, {
            children: "通过 URL 打开音乐资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open_imusicplayer",
              children: "open [1/2]"
            })
          }), _jsx(_components.td, {
            children: "通过资源 ID 打开音乐资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload2",
              children: "preload [2/2]"
            })
          }), _jsx(_components.td, {
            children: "预加载版权音乐资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_registereventhandler_imusiccontentcenter",
              children: "registerEventHandler"
            })
          }), _jsx(_components.td, {
            children: "注册版权音乐内容中心的回调事件。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_removecache",
              children: "removeCache"
            })
          }), _jsx(_components.td, {
            children: "删除已缓存的音乐资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_renewtoken_imusiccontentcenter",
              children: "renewToken"
            })
          }), _jsx(_components.td, {
            children: "更新 Token。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_searchmusic",
              children: "searchMusic [1/2]"
            })
          }), _jsx(_components.td, {
            children: "搜索音乐资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_searchmusic2",
              children: "searchMusic [2/2]"
            })
          }), _jsx(_components.td, {
            children: "搜索音乐资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_setplaymode",
              children: "setPlayMode"
            })
          }), _jsx(_components.td, {
            children: "设置音乐曲目的播放模式。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_stop_imusicplayer",
              children: "stop [2/2]"
            })
          }), _jsx(_components.td, {
            children: "停止播放音乐资源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter",
              children: "unregisterEventHandler"
            })
          }), _jsx(_components.td, {
            children: "取消注册版权音乐内容中心的事件回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onlyricresult",
              children: "onLyricResult"
            })
          }), _jsx(_components.td, {
            children: "歌词下载链接回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult",
              children: "onMusicChartsResult"
            })
          }), _jsx(_components.td, {
            children: "获取音乐排行榜后的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
              children: "onMusicCollectionResult"
            })
          }), _jsx(_components.td, {
            children: "获取音乐资源列表的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler",
              children: "onPreLoadEvent"
            })
          }), _jsx(_components.td, {
            children: "预加载音乐资源事件的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onsongsimpleinforesult",
              children: "onSongSimpleInfoResult"
            })
          }), _jsx(_components.td, {
            children: "获取音乐资源详细信息的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_recording"
    }), `
`, _jsx(_components.h2, {
      id: "音视频录制",
      children: "音视频录制"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_createmediarecorder",
              children: "createMediaRecorder"
            })
          }), _jsx(_components.td, {
            children: "创建用于音视频录制的录制器实例。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_destroymediarecorder",
              children: "destroyMediaRecorder"
            })
          }), _jsx(_components.td, {
            children: "销毁音视频录制器实例。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_setmediarecorderobserver",
              children: "setMediaRecorderObserver"
            })
          }), _jsx(_components.td, {
            children: "注册一个用于音视频录制的回调观察者。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_startaudiorecording1",
              children: "startAudioRecording [1/2]"
            })
          }), _jsx(_components.td, {
            children: "开始客户端录音。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_startaudiorecording3",
              children: "startAudioRecording [2/2]"
            })
          }), _jsx(_components.td, {
            children: "开始客户端录制并应用录制配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_startrecording",
              children: "startRecording"
            })
          }), _jsx(_components.td, {
            children: "开始录制音频和视频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_stopaudiorecording",
              children: "stopAudioRecording"
            })
          }), _jsx(_components.td, {
            children: "停止客户端录制音频。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_stoprecording",
              children: "stopRecording"
            })
          }), _jsx(_components.td, {
            children: "停止录制音视频流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderinfoupdated",
              children: "onRecorderInfoUpdated"
            })
          }), _jsx(_components.td, {
            children: "录制信息更新回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderstatechanged",
              children: "onRecorderStateChanged"
            })
          }), _jsx(_components.td, {
            children: "录制状态发生变化时的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_channel_media_relay"
    }), `
`, _jsx(_components.h2, {
      id: "跨频道媒体流转发",
      children: "跨频道媒体流转发"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_pauseallchannelmediarelay",
              children: "pauseAllChannelMediaRelay"
            })
          }), _jsx(_components.td, {
            children: "暂停向所有目标频道的跨频道媒体流转发。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_resumeallchannelmediarelay",
              children: "resumeAllChannelMediaRelay"
            })
          }), _jsx(_components.td, {
            children: "恢复向所有目标频道的跨频道媒体流转发。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_resumeallchannelmediarelayex",
              children: "resumeAllChannelMediaRelayEx"
            })
          }), _jsx(_components.td, {
            children: "恢复向所有目标频道的跨频道媒体流转发。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_startorupdatechannelmediarelay",
              children: "startOrUpdateChannelMediaRelay"
            })
          }), _jsx(_components.td, {
            children: "开始或更新跨频道媒体流转发。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_startorupdatechannelmediarelayex",
              children: "startOrUpdateChannelMediaRelayEx"
            })
          }), _jsx(_components.td, {
            children: "开始或更新跨频道媒体流转发。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_stopchannelmediarelay",
              children: "stopChannelMediaRelay"
            })
          }), _jsx(_components.td, {
            children: "停止跨频道媒体流转发。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_stopchannelmediarelayex",
              children: "stopChannelMediaRelayEx"
            })
          }), _jsx(_components.td, {
            children: "停止跨频道媒体流转发。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
              children: "onChannelMediaRelayStateChanged"
            })
          }), _jsx(_components.td, {
            children: "跨频道媒体流转发状态发生变化回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_media_push"
    }), `
`, _jsx(_components.h2, {
      id: "旁路推流",
      children: "旁路推流"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithouttranscoding",
              children: "startRtmpStreamWithoutTranscoding"
            })
          }), _jsx(_components.td, {
            children: "开始向 CDN 推送音视频流（不进行转码）。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_startrtmpstreamwithouttranscodingex",
              children: "startRtmpStreamWithoutTranscodingEx"
            })
          }), _jsx(_components.td, {
            children: "开始向 CDN 推送未经转码的媒体流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding",
              children: "startRtmpStreamWithTranscoding"
            })
          }), _jsx(_components.td, {
            children: "开始旁路推流并设置转码配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_startrtmpstreamwithtranscodingex",
              children: "startRtmpStreamWithTranscodingEx"
            })
          }), _jsx(_components.td, {
            children: "开始旁路推流并设置转码配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_stoprtmpstream",
              children: "stopRtmpStream"
            })
          }), _jsx(_components.td, {
            children: "停止向指定 CDN 地址推送媒体流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_stoprtmpstreamex",
              children: "stopRtmpStreamEx"
            })
          }), _jsx(_components.td, {
            children: "停止向指定 CDN 地址推送媒体流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_updatertmptranscoding",
              children: "updateRtmpTranscoding"
            })
          }), _jsx(_components.td, {
            children: "更新旁路推流的转码配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_updatertmptranscodingex",
              children: "updateRtmpTranscodingEx"
            })
          }), _jsx(_components.td, {
            children: "更新旁路推流的转码配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingevent",
              children: "onRtmpStreamingEvent"
            })
          }), _jsx(_components.td, {
            children: "旁路推流事件回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged",
              children: "onRtmpStreamingStateChanged"
            })
          }), _jsx(_components.td, {
            children: "旁路推流状态发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_ontranscodingupdated",
              children: "onTranscodingUpdated"
            })
          }), _jsx(_components.td, {
            children: "发布端云端转码配置更新回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_datastream"
    }), `
`, _jsx(_components.h2, {
      id: "数据流-datastream",
      children: "数据流 Datastream"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream1",
              children: "createDataStream [1/2]"
            })
          }), _jsx(_components.td, {
            children: "创建一个数据流，用于提升数据传输的可靠性和顺序性。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream2",
              children: "createDataStream [2/2]"
            })
          }), _jsx(_components.td, {
            children: "创建一个数据流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex2",
              children: "createDataStreamEx [2/2]"
            })
          }), _jsx(_components.td, {
            children: "创建一个数据流。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage",
              children: "sendStreamMessage"
            })
          }), _jsx(_components.td, {
            children: "发送数据流消息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_sendstreammessageex",
              children: "sendStreamMessageEx"
            })
          }), _jsx(_components.td, {
            children: "发送数据流消息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage",
              children: "onStreamMessage"
            })
          }), _jsx(_components.td, {
            children: "远端用户发送数据流时的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror",
              children: "onStreamMessageError"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror",
              children: "onStreamMessageError"
            }), " 回调：本地用户未收到远端用户发送的数据流时触发。"]
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_metadata_observer"
    }), `
`, _jsx(_components.h2, {
      id: "媒体流附属信息分发",
      children: "媒体流附属信息分发"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_imetadataobserver_getmaxmetadatasize",
              children: "getMaxMetadataSize"
            })
          }), _jsx(_components.td, {
            children: "当 SDK 请求元数据最大大小时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_registermediametadataobserver",
              children: "registerMediaMetadataObserver"
            })
          }), _jsx(_components.td, {
            children: "注册元数据观察器。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_unregistermediametadataobserver",
              children: "unregisterMediaMetadataObserver"
            })
          }), _jsx(_components.td, {
            children: "取消注册指定的元数据观察者。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#callback_imetadataobserver_onmetadatareceived",
              children: "onMetadataReceived"
            })
          }), _jsx(_components.td, {
            children: "本地用户接收到元数据时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#callback_imetadataobserver_onreadytosendmetadata",
              children: "onReadyToSendMetadata"
            })
          }), _jsx(_components.td, {
            children: "SDK 准备好发送元数据时触发的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_route"
    }), `
`, _jsx(_components.h2, {
      id: "音频路由",
      children: "音频路由"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_isspeakerphoneenabled",
              children: "isSpeakerphoneEnabled"
            })
          }), _jsx(_components.td, {
            children: "检查是否启用扬声器播放音频。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setdefaultaudioroutetospeakerphone",
              children: "setDefaultAudioRoutetoSpeakerphone"
            })
          }), _jsx(_components.td, {
            children: "设置默认音频播放路由。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setenablespeakerphone",
              children: "setEnableSpeakerphone"
            })
          }), _jsx(_components.td, {
            children: "设置是否将音频路由切换到扬声器。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setrouteincommunicationmode",
              children: "setRouteInCommunicationMode"
            })
          }), _jsx(_components.td, {
            children: "在通信音频模式下设置音频播放路由。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#callback_irtcengineeventhandler_onaudioroutingchanged",
              children: "onAudioRouteChanged"
            })
          }), _jsx(_components.td, {
            children: "本地音频路由发生变化时的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_video_device"
    }), `
`, _jsx(_components.h2, {
      id: "视频设备管理",
      children: "视频设备管理"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_getcameramaxzoomfactor",
              children: "getCameraMaxZoomFactor"
            })
          }), _jsx(_components.td, {
            children: "获取摄像头支持的最大变焦倍数。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraautofocusfacemodesupported",
              children: "isCameraAutoFocusFaceModeSupported"
            })
          }), _jsx(_components.td, {
            children: "检查设备是否支持人脸自动对焦功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraexposurepositionsupported",
              children: "isCameraExposurePositionSupported"
            })
          }), _jsx(_components.td, {
            children: "检查设备是否支持手动曝光。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraexposuresupported",
              children: "isCameraExposureSupported"
            })
          }), _jsx(_components.td, {
            children: "查询当前摄像头是否支持调节曝光值。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerafacedetectsupported",
              children: "isCameraFaceDetectSupported"
            })
          }), _jsx(_components.td, {
            children: "检查设备摄像头是否支持人脸检测。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerafocussupported",
              children: "isCameraFocusSupported"
            })
          }), _jsx(_components.td, {
            children: "检查设备是否支持手动对焦功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameratorchsupported",
              children: "isCameraTorchSupported"
            })
          }), _jsx(_components.td, {
            children: "检查设备是否支持相机闪光灯功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerazoomsupported",
              children: "isCameraZoomSupported"
            })
          }), _jsx(_components.td, {
            children: "检查设备是否支持摄像头变焦。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycamerafocallengthcapability",
              children: "queryCameraFocalLengthCapability"
            })
          }), _jsx(_components.td, {
            children: "查询摄像头支持的焦距能力。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycodeccapability",
              children: "queryCodecCapability"
            })
          }), _jsx(_components.td, {
            children: "查询 SDK 的视频编解码能力。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraautofocusfacemodeenabled",
              children: "setCameraAutoFocusFaceModeEnabled"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭摄像头人脸自动对焦功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameracapturerconfiguration",
              children: "setCameraCapturerConfiguration"
            })
          }), _jsx(_components.td, {
            children: "设置摄像头采集配置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposurefactor",
              children: "setCameraExposureFactor"
            })
          }), _jsx(_components.td, {
            children: "设置摄像头曝光值。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposureposition",
              children: "setCameraExposurePosition"
            })
          }), _jsx(_components.td, {
            children: "设置摄像头曝光位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerafocuspositioninpreview",
              children: "setCameraFocusPositionInPreview"
            })
          }), _jsx(_components.td, {
            children: "设置摄像头的手动对焦位置。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameratorchon",
              children: "setCameraTorchOn"
            })
          }), _jsx(_components.td, {
            children: "打开或关闭摄像头闪光灯。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerazoomfactor",
              children: "setCameraZoomFactor"
            })
          }), _jsx(_components.td, {
            children: "设置摄像头的缩放因子。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera",
              children: "switchCamera [1/2]"
            })
          }), _jsx(_components.td, {
            children: "切换前置和后置摄像头。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera2",
              children: "switchCamera [2/2]"
            })
          }), _jsx(_components.td, {
            children: "通过摄像头 ID 切换摄像头。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncameraexposureareachanged",
              children: "onCameraExposureAreaChanged"
            })
          }), _jsx(_components.td, {
            children: "摄像头曝光区域发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncamerafocusareachanged",
              children: "onCameraFocusAreaChanged"
            })
          }), _jsx(_components.td, {
            children: "摄像头对焦区域发生变化的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_audio_device"
    }), `
`, _jsx(_components.h2, {
      id: "音频设备管理",
      children: "音频设备管理"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_getaudiodeviceinfo",
              children: "getAudioDeviceInfo"
            })
          }), _jsx(_components.td, {
            children: "获取音频设备信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startplaybackdevicetest",
              children: "startPlaybackDeviceTest"
            })
          }), _jsx(_components.td, {
            children: "启动本地音频播放设备测试。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startrecordingdevicetest",
              children: "startRecordingDeviceTest"
            })
          }), _jsx(_components.td, {
            children: "启动音频采集设备测试。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stopplaybackdevicetest",
              children: "stopPlaybackDeviceTest"
            })
          }), _jsx(_components.td, {
            children: "停止音频播放设备测试。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stoprecordingdevicetest",
              children: "stopRecordingDeviceTest"
            })
          }), _jsx(_components.td, {
            children: "停止音频采集设备测试。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_extension"
    }), `
`, _jsx(_components.h2, {
      id: "插件",
      children: "插件"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_addextension",
              children: "addExtension"
            })
          }), _jsx(_components.td, {
            children: "添加扩展。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension",
              children: "enableExtension"
            })
          }), _jsx(_components.td, {
            children: "启用或禁用扩展功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_getextensionproperty",
              children: "getExtensionProperty [1/2]"
            })
          }), _jsx(_components.td, {
            children: "获取扩展组件的详细信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_getextensionproperty2",
              children: "getExtensionProperty [2/2]"
            })
          }), _jsx(_components.td, {
            children: "获取扩展组件的详细信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension",
              children: "registerExtension"
            })
          }), _jsx(_components.td, {
            children: "注册一个扩展。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_setextensionproperty",
              children: "setExtensionProperty"
            })
          }), _jsx(_components.td, {
            children: "设置扩展组件的属性。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_setextensionproviderproperty",
              children: "setExtensionProviderProperty"
            })
          }), _jsx(_components.td, {
            children: "设置扩展提供方的属性。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionerrorwithcontext",
              children: "onErrorWithContext"
            })
          }), _jsx(_components.td, {
            children: "扩展运行异常时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensioneventwithcontext",
              children: "onEventWithContext"
            })
          }), _jsx(_components.td, {
            children: "扩展事件回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstartedwithcontext",
              children: "onStartedWithContext"
            })
          }), _jsx(_components.td, {
            children: "扩展启用成功回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstoppedwithcontext",
              children: "onStoppedWithContext"
            })
          }), _jsx(_components.td, {
            children: "扩展被禁用时触发的回调。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "rtc_api_overview__toc_network"
    }), `
`, _jsx(_components.h2, {
      id: "网络及其他",
      children: "网络及其他"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_complain",
              children: "complain"
            })
          }), _jsx(_components.td, {
            children: "允许你在通话结束后投诉通话质量。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption",
              children: "enableEncryption"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭内置加密功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_enableencryptionex",
              children: "enableEncryptionEx"
            })
          }), _jsx(_components.td, {
            children: "启用或关闭内置加密功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid",
              children: "getCallId"
            })
          }), _jsx(_components.td, {
            children: "获取当前通话 ID。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_getcallidex",
              children: "getCallIdEx"
            })
          }), _jsx(_components.td, {
            children: "获取与连接 ID 对应的通话 ID。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getconnectionstate",
              children: "getConnectionState"
            })
          }), _jsx(_components.td, {
            children: "获取 SDK 当前的连接状态。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_getconnectionstateex",
              children: "getConnectionStateEx"
            })
          }), _jsx(_components.td, {
            children: "获取 SDK 当前的连接状态。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcurrentmonotonictimeinms",
              children: "getCurrentMonotonicTimeInMs"
            })
          }), _jsx(_components.td, {
            children: "获取 SDK 当前的单调时间。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_geterrordescription",
              children: "getErrorDescription"
            })
          }), _jsx(_components.td, {
            children: "获取警告或错误码对应的描述信息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getnativehandle",
              children: "getNativeHandle"
            })
          }), _jsx(_components.td, {
            children: "获取原生 SDK 的 C++ 句柄。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getnetworktype",
              children: "getNetworkType"
            })
          }), _jsx(_components.td, {
            children: "获取本地网络连接类型。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getntpwalltimeinms",
              children: "getNtpWallTimeInMs"
            })
          }), _jsx(_components.td, {
            children: "获取当前 NTP（网络时间协议）时间。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getversion",
              children: "getSdkVersion"
            })
          }), _jsx(_components.td, {
            children: "获取 SDK 的版本号。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_isfeatureavailableondevice",
              children: "isFeatureAvailableOnDevice"
            })
          }), _jsx(_components.td, {
            children: "检查当前设备是否支持指定的高级功能。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_querydevicescore",
              children: "queryDeviceScore"
            })
          }), _jsx(_components.td, {
            children: "查询设备评分。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate",
              children: "rate"
            })
          }), _jsx(_components.td, {
            children: "允许用户在通话结束后对通话进行评分。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_sendcustomreportmessage",
              children: "sendCustomReportMessage"
            })
          }), _jsx(_components.td, {
            children: "上报自定义消息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_sendcustomreportmessageex",
              children: "sendCustomReportMessageEx"
            })
          }), _jsx(_components.td, {
            children: "支持上报和分析自定义消息。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setavsyncsource",
              children: "setAVSyncSource"
            })
          }), _jsx(_components.td, {
            children: "设置发布端的音视频同步源。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy",
              children: "setCloudProxy"
            })
          }), _jsx(_components.td, {
            children: "设置云代理服务。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlocalaccesspoint",
              children: "setLocalAccessPoint"
            })
          }), _jsx(_components.td, {
            children: "配置连接到声网私有媒体服务器接入模块。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setparameters",
              children: "setParameters"
            })
          }), _jsx(_components.td, {
            children: "通过配置 JSON 选项，为 SDK 提供技术预览功能或特殊定制。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption",
              children: "setRemoteSubscribeFallbackOption [1/2]"
            })
          }), _jsx(_components.td, {
            children: "根据网络状况设置订阅端的视频流回退选项。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3",
              children: "startEchoTest"
            })
          }), _jsx(_components.td, {
            children: "开始音视频设备回路测试。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest",
              children: "startLastmileProbeTest"
            })
          }), _jsx(_components.td, {
            children: "开始 Last-mile 网络探测测试。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stopechotest",
              children: "stopEchoTest"
            })
          }), _jsx(_components.td, {
            children: "停止音频通话测试。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stoplastmileprobetest",
              children: "stopLastmileProbeTest"
            })
          }), _jsx(_components.td, {
            children: "停止 Last-mile 网络探测测试。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionlost",
              children: "onConnectionLost"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionlost",
              children: "onConnectionLost"
            }), " 回调：当 SDK 在连接中断后 10 秒内无法重新连接到声网边缘服务器时触发。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
              children: "onConnectionStateChanged"
            })
          }), _jsx(_components.td, {
            children: "网络连接状态发生变化回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onencryptionerror",
              children: "onEncryptionError"
            })
          }), _jsx(_components.td, {
            children: "内置加密错误回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmileproberesult",
              children: "onLastmileProbeResult"
            })
          }), _jsx(_components.td, {
            children: "上行和下行 Last-mile 网络探测测试结果的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmilequality",
              children: "onLastmileQuality"
            })
          }), _jsx(_components.td, {
            children: "本地用户的 Last-mile 网络质量回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onmultipathstats",
              children: "onMultipathStats"
            })
          }), _jsx(_components.td, {
            children: "多路径传输统计信息回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworkquality",
              children: "onNetworkQuality"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworkquality",
              children: "onNetworkQuality"
            }), " 回调。报告频道中每个用户的 Last-mile 网络质量。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworktypechanged",
              children: "onNetworkTypeChanged"
            })
          }), _jsx(_components.td, {
            children: "本地网络类型发生变化时的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissionerror",
              children: "onPermissionError"
            })
          }), _jsx(_components.td, {
            children: "设备权限获取失败时触发的回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissiongranted",
              children: "onPermissionGranted"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissiongranted",
              children: "onPermissionGranted"
            }), " 回调。用于上报已授予的权限。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onproxyconnected",
              children: "onProxyConnected"
            })
          }), _jsx(_components.td, {
            children: "代理连接状态回调。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly",
              children: "onRemoteSubscribeFallbackToAudioOnly"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly",
              children: "onRemoteSubscribeFallbackToAudioOnly"
            }), " 回调。当远端媒体流因网络变化在音频流与视频流之间切换时触发。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onuplinknetworkinfoupdated",
              children: "onUplinkNetworkInfoUpdated"
            })
          }), _jsx(_components.td, {
            children: "上行网络信息发生变化回调。"
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
