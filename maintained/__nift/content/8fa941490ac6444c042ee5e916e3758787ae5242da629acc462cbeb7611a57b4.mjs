import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Lite SDK API 列表",
  description: "本页列出 Lite SDK 支持的 API 列表。"
};
export let _markdown = `

<CalloutContainer type="warning">
  <CalloutTitle>
    注意
  </CalloutTitle>

  <CalloutDescription>
    如果在本页中无法查询到你要使用的 API，则代表 Lite SDK 不支持该 API，调用该 API 时会返回错误码 -2。
  </CalloutDescription>
</CalloutContainer>

## RtcEngine [#rtcengine]

* [addHandler](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_addhandler)
* [adjustAudioMixingPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingplayoutvolume)
* [adjustAudioMixingPublishVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingpublishvolume)
* [adjustAudioMixingVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingvolume)
* [adjustCustomAudioPlayoutVolume](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudioplayoutvolume)
* [adjustCustomAudioPublishVolume](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudiopublishvolume)
* [adjustPlaybackSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustplaybacksignalvolume)
* [adjustRecordingSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_adjustrecordingsignalvolume)
* [adjustUserPlaybackSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustuserplaybacksignalvolume)
* [complain](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_complain)
* [configRhythmPlayer](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_configrhythmplayer)
* [create \\[1/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_create)
* [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack)
* [createCustomVideoTrack](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack)
* [createDataStream \\[1/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream1)
* [createDataStream \\[2/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream2)
* [createMediaPlayer](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_irtcengine_createmediaplayer)
* [createMediaRecorder](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_createmediarecorder)
* [destroyCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_destroycustomaudiotrack)
* [destroyCustomVideoTrack](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_destroycustomvideotrack)
* [disableAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_disableaudio)
* [disableAudioSpectrumMonitor](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_disableaudiospectrummonitor)
* [disableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo)
* [enableAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio)
* [enableAudioSpectrumMonitor](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor)
* [enableAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication)
* [enableContentInspect](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_enablecontentinspect)
* [enableCustomAudioLocalPlayback](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_enablecustomaudiolocalplayback)
* [enableDualStreamMode \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_enabledualstreammode)
* [enableDualStreamMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_enabledualstreammode3)
* [enableEncryption](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption)
* [enableExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension)
* [enableFaceDetection](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#api_irtcengine_enablefacedetection)
* [enableInEarMonitoring \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enableinearmonitoring)
* [enableInEarMonitoring \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enableinearmonitoring2)
* [enableInstantMediaRendering](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_enableinstantmediarendering)
* [enableLocalAudio](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enablelocalaudio)
* [enableLocalVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo)
* [enableSoundPositionIndication](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_enablesoundpositionindication)
* [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo)
* [enableVideoImageSource](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/image-source#api_irtcengine_enablevideoimagesource)
* [enableVoiceAITuner](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_enablevoiceaituner)
* [enableWebSdkInteroperability](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enablewebsdkinteroperability)
* [getAudioDeviceInfo](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_getaudiodeviceinfo)
* [getAudioEffectManager](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_getaudioeffectmanager)
* [getAudioMixingCurrentPosition](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingcurrentposition)
* [getAudioMixingDuration](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingduration)
* [getAudioMixingPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingplayoutvolume)
* [getAudioMixingPublishVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingpublishvolume)
* [getAudioTrackCount](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiotrackcount)
* [getCallId](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid)
* [getCameraMaxZoomFactor](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_getcameramaxzoomfactor)
* [getConnectionState](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getconnectionstate)
* [getCurrentMonotonicTimeInMs](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcurrentmonotonictimeinms)
* [getEffectCurrentPosition](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectcurrentposition)
* [getEffectDuration](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectduration)
* [getEffectsVolume](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectsvolume)
* [getErrorDescription](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_geterrordescription)
* [getExtensionProperty \\[1/2\\]](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_getextensionproperty)
* [getExtensionProperty \\[2/2\\]](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_getextensionproperty2)
* [getNativeHandle](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getnativehandle)
* [getNetworkType](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getnetworktype)
* [getNtpWallTimeInMs](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getntpwalltimeinms)
* [getUserInfoByUid](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_getuserinfobyuid)
* [getUserInfoByUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_getuserinfobyuseraccount)
* [getSdkVersion](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getversion)
* [getVolumeOfEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_getvolumeofeffect)
* [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize)
* [isCameraAutoFocusFaceModeSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraautofocusfacemodesupported)
* [isCameraExposurePositionSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraexposurepositionsupported)
* [isCameraExposureSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraexposuresupported)
* [isCameraFaceDetectSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerafacedetectsupported)
* [isCameraFocusSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerafocussupported)
* [isCameraTorchSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameratorchsupported)
* [isCameraZoomSupported](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerazoomsupported)
* [isFeatureAvailableOnDevice](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_isfeatureavailableondevice)
* [isSpeakerphoneEnabled](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_isspeakerphoneenabled)
* [isTextureEncodeSupported](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_istextureencodesupported)
* [joinChannel \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel1)
* 在 [joinChannel \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel2) 中，以下跟屏幕采集相关的参数设置无效：
  * publishScreenCaptureVideo
  * publishScreenCaptureAudio
* [joinChannelWithUserAccount \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannelwithuseraccount1)
* 在 [joinChannelWithUserAccount \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannelwithuseraccount2) 中，以下跟屏幕采集相关的参数设置无效：
  * publishScreenCaptureVideo
  * publishScreenCaptureAudio
* [leaveChannel \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel)
* [leaveChannel \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel2)
* [muteAllRemoteAudioStreams](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremoteaudiostreams)
* [muteAllRemoteVideoStreams](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremotevideostreams)
* [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream)
* [muteLocalVideoStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalvideostream)
* [muteRecordingSignal](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_muterecordingsignal)
* [muteRemoteAudioStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremoteaudiostream)
* [muteRemoteVideoStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremotevideostream)
* [pauseAllChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_pauseallchannelmediarelay)
* [pauseAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects)
* [pauseAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_pauseaudiomixing)
* [pauseEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pauseeffect)
* [playEffect \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect2)
* [playEffect \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect3)
* [preloadChannel](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_preloadchannel)
* [preloadChannelWithUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_preloadchannelwithuseraccount)
* [preloadEffect \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_preloadeffect)
* [pullPlaybackAudioFrame \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe)
* [pullPlaybackAudioFrame \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe2)
* [pushExternalAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pushaudioframe2)
* [pushExternalAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pushaudioframe2)
* [pushExternalVideoFrameById \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe)
* [pushExternalVideoFrameById \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe3)
* [pushExternalVideoFrame \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe2)
* [pushExternalVideoFrame \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe4)
* [queryCameraFocalLengthCapability](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycamerafocallengthcapability)
* [queryCodecCapability](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycodeccapability)
* [queryDeviceScore](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_querydevicescore)
* [rate](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate)
* 在 [registerAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver) 中， config 中的 encodingType 仅支持 OPUS 编码格式。
* [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver)
* [registerAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver)
* [registerExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension)
* [registerLocalUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount)
* [registerMediaMetadataObserver](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_registermediametadataobserver)
* [registerVideoEncodedFrameObserver](/zh-CN/api-reference/rtc/android/video/video-encoded#api_irtcengine_registervideoencodedframeobserver)
* [registerVideoFrameObserver](/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver)
* [destroy \\[1/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_release)
* [removeHandler](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_removehandler)
* [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken)
* [resumeAllChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_resumeallchannelmediarelay)
* [resumeAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumealleffects)
* [resumeAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_resumeaudiomixing)
* [resumeEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumeeffect)
* [selectAudioTrack](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_selectaudiotrack)
* [sendCustomReportMessage](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_sendcustomreportmessage)
* [sendStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage)
* [setAdvancedAudioOptions](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setadvancedaudiooptions)
* [setAudioEffectParameters](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectparameters)
* [setAudioEffectPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectpreset)
* [setAudioMixingDualMonoMode](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingdualmonomode)
* [setAudioMixingPitch](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingpitch)
* [setAudioMixingPosition](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingposition)
* [setAudioMixingPlaybackSpeed](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingplaybackspeed)
* [setAudioProfile \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile)
* [setAudioProfile \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile2)
* [setAudioScenario](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario)
* [setAVSyncSource](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setavsyncsource)
* [setCameraAutoFocusFaceModeEnabled](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraautofocusfacemodeenabled)
* [setCameraCapturerConfiguration](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameracapturerconfiguration)
* [setCameraExposureFactor](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposurefactor)
* [setCameraExposurePosition](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposureposition)
* [setCameraFocusPositionInPreview](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerafocuspositioninpreview)
* [setCameraTorchOn](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameratorchon)
* [setCameraZoomFactor](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerazoomfactor)
* [setChannelProfile](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setchannelprofile)
* [setClientRole \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole1)
* [setClientRole \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole2)
* [setCloudProxy](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy)
* [setColorEnhanceOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions)
* [setColorEnhanceOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions2)
* [setDefaultAudioRoutetoSpeakerphone](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setdefaultaudioroutetospeakerphone)
* [setDualStreamMode \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode)
* [setDualStreamMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode2)
* [setEarMonitoringAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setearmonitoringaudioframeparameters)
* [setEffectPosition](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_seteffectposition)
* [setEffectsVolume](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_seteffectsvolume)
* [setEnableSpeakerphone](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setenablespeakerphone)
* [setExtensionProperty](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_setextensionproperty)
* [setExtensionProviderProperty](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_setextensionproviderproperty)
* [setExternalAudioSink](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink)
* [setExternalAudioSink](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink)
* [setExternalAudioSource \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource)
* [setExternalAudioSource \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource2)
* [setExternalVideoSource](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource)
* [setHeadphoneEQParameters](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqparameters)
* [setHeadphoneEQPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqpreset)
* [setInEarMonitoringVolume](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_setinearmonitoringvolume)
* [setLocalAccessPoint](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlocalaccesspoint)
* [setLocalRenderMode \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode1)
* [setLocalRenderMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode2)
* [setLocalVideoMirrorMode](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalvideomirrormode)
* [setLocalVoiceEqualization](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceequalization)
* [setLocalVoiceFormant](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceformant)
* [setLocalVoicePitch](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicepitch)
* [setLocalVoiceReverb](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicereverb)
* [setLogFile](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfile)
* [setLogFileSize](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilesize)
* [setLogFilter](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilter)
* [setLogLevel](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setloglevel)
* [setLowlightEnhanceOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setlowlightenhanceoptions)
* [setLowlightEnhanceOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setlowlightenhanceoptions2)
* [setMixedAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setmixedaudioframeparameters)
* [setParameters](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setparameters)
* [setPlaybackAudioFrameBeforeMixingParameters \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframebeforemixingparameters)
* [setPlaybackAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframeparameters)
* [setRecordingAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setrecordingaudioframeparameters)
* [setRemoteDefaultVideoStreamType \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype)
* [setRemoteDefaultVideoStreamType \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype2)
* [setRemoteRenderMode](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setremoterendermode2)
* [setRemoteSubscribeFallbackOption \\[1/2\\]](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption)
* [setRemoteSubscribeFallbackOption \\[2/2\\]](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption2)
* [setRemoteVideoStreamType \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype)
* [setRemoteVideoStreamType \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype2)
* [setRemoteVideoSubscriptionOptions](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideosubscriptionoptions)
* [setRemoteVoicePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_setremotevoiceposition)
* [setRouteInCommunicationMode](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setrouteincommunicationmode)
* [setSubscribeAudioAllowlist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioallowlist)
* [setSubscribeAudioBlocklist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioblocklist)
* [setSubscribeVideoAllowlist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoallowlist)
* [setSubscribeVideoBlocklist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoblocklist)
* [setupLocalVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo)
* [setupRemoteVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setupremotevideo)
* [setVideoDenoiserOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions)
* [setVideoDenoiserOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions2)
* [setVideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration)
* [setVideoScenario](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoscenario)
* [setVoiceBeautifierParameters](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoicebeautifierparameters)
* [setVoiceBeautifierPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoicebeautifierpreset)
* [setVoiceConversionPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoiceconversionpreset)
* [setVolumeOfEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_setvolumeofeffect)
* [startAudioMixing \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing)
* [startAudioMixing \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing2)
* [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3)
* [startLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest)
* [startLocalVideoTranscoder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder)
* [startOrUpdateChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_startorupdatechannelmediarelay)
* [startPreview \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview)
* [startPreview \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview2)
* [startCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture)
* [startRhythmPlayer](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_startrhythmplayer)
* [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)
* [stopAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopalleffects)
* [stopAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_stopaudiomixing)
* [stopChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_stopchannelmediarelay)
* [stopEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stopechotest)
* [stopEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopeffect)
* [stopLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stoplastmileprobetest)
* [stopPreview \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview)
* [stopPreview \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview2)
* [stopCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_stopcameracapture)
* [stopRhythmPlayer](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_stoprhythmplayer)
* [switchCamera \\[1/2\\]](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera)
* [switchCamera \\[2/2\\]](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera2)
* [unloadEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_unloadeffect)
* [unRegisterAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_unregisteraudiospectrumobserver)
* [unregisterMediaMetadataObserver](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_unregistermediametadataobserver)
* 在 [updateChannelMediaOptions](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions) 中，以下跟屏幕采集相关的参数设置无效：
  * publishScreenCaptureVideo
  * publishScreenCaptureAudio
* [updateLocalTranscoderConfiguration](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_updatelocaltranscoderconfiguration)
* [updatePreloadChannelToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatepreloadchanneltoken)

## RtcEngineEx [#rtcengineex]

* [createDataStreamEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex1)
* [createDataStreamEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex2)
* [enableAudioVolumeIndicationEx](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_enableaudiovolumeindicationex)
* [enableContentInspectEx](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_enablecontentinspectex)
* [enableDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_enabledualstreammodeex)
* [enableEncryptionEx](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_enableencryptionex)
* [getCallIdEx](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_getcallidex)
* [getConnectionStateEx](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_getconnectionstateex)
* [getUserInfoByUidEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuidex)
* [getUserInfoByUserAccountEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuseraccountex)
* [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex)
* [joinChannelWithUserAccountEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelwithuseraccountex)
* [leaveChannelEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex)
* [leaveChannelEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex2)
* [muteAllRemoteAudioStreamsEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteallremoteaudiostreamsex)
* [muteAllRemoteVideoStreamsEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteallremotevideostreamsex)
* [muteLocalAudioStreamEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_mutelocalaudiostreamex)
* [muteLocalVideoStreamEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_mutelocalvideostreamex)
* [muteRemoteAudioStreamEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteremoteaudiostreamex)
* [muteRemoteVideoStreamEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteremotevideostreamex)
* [pauseAllChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_pauseallchannelmediarelayex)
* [resumeAllChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_resumeallchannelmediarelayex)
* [sendCustomReportMessageEx](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_sendcustomreportmessageex)
* [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex)
* [setRemoteRenderModeEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setremoterendermodeex)
* [setRemoteVideoStreamTypeEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex)
* [setRemoteVideoStreamTypeEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex2)
* [setRemoteVoicePositionEx](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengineex_setremotevoicepositionex)
* [setSubscribeAudioBlocklistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioblocklistex)
* [setSubscribeAudioAllowlistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioallowlistex)
* [setSubscribeVideoBlocklistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoblocklistex)
* [setSubscribeVideoAllowlistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoallowlistex)
* [setupRemoteVideoEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setupremotevideoex)
* [setVideoEncoderConfigurationEx](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengineex_setvideoencoderconfigurationex)
* [sendStreamMessageEx](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_sendstreammessageex)
* [startMediaRenderingTracingEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_startmediarenderingtracingex)
* [startOrUpdateChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_startorupdatechannelmediarelayex)
* [stopChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_stopchannelmediarelayex)
* 在 [updateChannelMediaOptionsEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_updatechannelmediaoptionsex) 中，以下跟屏幕采集相关的参数设置无效：
  * publishScreenCaptureVideo
  * publishScreenCaptureAudio
* [setRemoteVideoSubscriptionOptionsEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideosubscriptionoptionsex)
* [adjustUserPlaybackSignalVolumeEx](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_adjustuserplaybacksignalvolumeex)

## IRtcEngineEventHandler [#irtcengineeventhandler]

* [onActiveSpeaker](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onactivespeaker)
* [onAudioEffectFinished](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#callback_irtcengineeventhandler_onaudioeffectfinished)
* [onAudioMixingFinished](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingfinished)
* [onAudioMixingPositionChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingpositionchanged)
* [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged)
* [onAudioPublishStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiopublishstatechanged)
* [onAudioQuality](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudioquality)
* [onAudioRouteChanged](/zh-CN/api-reference/rtc/android/device-management/audio-route#callback_irtcengineeventhandler_onaudioroutingchanged)
* [onAudioSubscribeStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiosubscribestatechanged)
* [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication)
* [onCameraExposureAreaChanged](/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncameraexposureareachanged)
* [onCameraFocusAreaChanged](/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncamerafocusareachanged)
* [onCameraReady](/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncameraready)
* [onChannelMediaRelayStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged)
* [onClientRoleChanged](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechanged)
* [onClientRoleChangeFailed](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechangefailed)
* [onConnectionBanned](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionbanned)
* [onConnectionInterrupted](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectioninterrupted)
* [onConnectionLost](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionlost)
* [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged)
* [onEncryptionError](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onencryptionerror)
* [onError](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onerror)
* [onFacePositionChanged](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#callback_irtcengineeventhandler_onfacepositionchanged)
* [onFirstLocalAudioFramePublished](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstlocalaudioframepublished)
* [onFirstLocalVideoFrame](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframe)
* [onFirstLocalVideoFramePublished](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframepublished)
* [onFirstRemoteAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudioframe)
* [onFirstRemoteAudioDecoded](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudiodecoded)
* [onFirstRemoteVideoDecoded](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideodecoded)
* [onFirstRemoteVideoFrame](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideoframe)
* [onJoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess)
* [onLastmileProbeResult](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmileproberesult)
* [onLastmileQuality](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmilequality)
* [onLeaveChannel](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onleavechannel)
* [onLocalAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostatechanged)
* [onLocalAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostats)
* [onLocalUserRegistered](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered)
* [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged)
* [onLocalVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostats)
* [onLocalVideoTranscoderError](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#callback_irtcengineeventhandler_onlocalvideotranscodererror)
* [onTranscodedStreamLayoutInfo](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo)
* [onNetworkQuality](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworkquality)
* [onNetworkTypeChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworktypechanged)
* [onPermissionError](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissionerror)
* [onProxyConnected](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onproxyconnected)
* [onRejoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess)
* [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged)
* [onRemoteAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats)
* [onRemoteAudioTransportStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiotransportstats)
* [onRemoteSubscribeFallbackToAudioOnly](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly)
* [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged)
* [onRemoteVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats)
* [onRemoteVideoTransportStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideotransportstats)
* [onRequestToken](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrequesttoken)
* [onRhythmPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#callback_irtcengineeventhandler_onrhythmplayerstatechanged)
* [onRtcStats](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrtcstats)
* [onStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage)
* [onStreamMessageError](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror)
* [onTokenPrivilegeWillExpire](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_ontokenprivilegewillexpire)
* [onTranscodingUpdated](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_ontranscodingupdated)
* [onUplinkNetworkInfoUpdated](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onuplinknetworkinfoupdated)
* [onUserEnableLocalVideo](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onuserenablelocalvideo)
* [onUserEnableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onuserenablevideo)
* [onUserInfoUpdated](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated)
* [onUserJoined](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined)
* [onUserMuteAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio)
* [onUserMuteVideo](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onusermutevideo)
* [onUserOffline](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuseroffline)
* [onVideoPublishStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideopublishstatechanged)
* [onVideoSizeChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideosizechanged)
* [onVideoStopped](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideostopped)
* [onVideoSubscribeStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onvideosubscribestatechanged)
* [onVideoRenderingTracingResult](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult)

## IMediaExtensionObserver [#imediaextensionobserver]

* [onErrorWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionerrorwithcontext)
* [onEventWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensioneventwithcontext)
* [onStartedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstartedwithcontext)
* [onStoppedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstoppedwithcontext)

## IMediaPlayer [#imediaplayer]

* [adjustPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustplayoutvolume)
* [adjustPublishSignalVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustpublishsignalvolume)
* [getDuration](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getduration)
* [getMediaPlayerId](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmediaplayerid)
* [getMute](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmute)
* [getPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplayoutvolume)
* [getPlayPosition](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplayposition)
* [getPlaySrc \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplaysrc_imediaplayer)
* [getPublishSignalVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getpublishsignalvolume)
* [getState](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstate)
* [getStreamCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount)
* [getStreamInfo](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo)
* [mute](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_mute)
* [open \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_open)
* [open \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_open2)
* [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource)
* [pause](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_pause)
* [play](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play)
* [playPreloadedSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc)
* [preloadSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc)
* [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registeraudioframeobserver2_imediaplayer)
* [registerPlayerObserver](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registerplayersourceobserver)
* [registerVideoFrameObserver](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registervideoframeobserver_imediaplayer)
* [resume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_resume)
* [seek](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_seek)
* [selectAudioTrack](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_selectaudiotrack_imediaplayer)
* [selectMultiAudioTrack](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_imediaplayer_selectmultiaudiotrack)
* [setAudioPitch](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiopitch)
* [setAudioDualMonoMode](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiodualmonomode)
* [setLoopCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setloopcount)
* [setPlaybackSpeed](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplaybackspeed)
* [setPlayerOption](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption)
* [setPlayerOptionString](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2)
* [setVideoRenderMode](/zh-CN/api-reference/rtc/android/video/video-rendering#api_imediaplayer_setrendermode)
* [setView](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setview)
* [stop \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_stop)
* [switchSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_switchsrc)
* [unloadSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_unloadsrc)
* [unRegisterPlayerObserver](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_unregisterplayersourceobserver)

## IVideoEncodedFrameObserver [#ivideoencodedframeobserver]

* [onEncodedVideoFrameReceived](/zh-CN/api-reference/rtc/android/video/video-encoded#callback_ivideoencodedframeobserver_onencodedvideoframereceived)

## IVideoFrameObserver [#ivideoframeobserver]

* [getMirrorApplied](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getmirrorapplied)
* [getObservedFramePosition](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getobservedframeposition)
* [getRotationApplied](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getrotationapplied)
* [getVideoFormatPreference](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoformatpreference)
* [getVideoFrameProcessMode](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode)
* [onCaptureVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_oncapturevideoframe)
* [onPreEncodeVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onpreencodevideoframe)
* [onRenderVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onrendervideoframe)

## IMediaExtensionObserver [#imediaextensionobserver-1]

* [onErrorWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionerrorwithcontext)
* [onEventWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensioneventwithcontext)
* [onStartedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstartedwithcontext)
* [onStoppedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstoppedwithcontext)

## IAgoraMusicPlayer [#iagoramusicplayer]

* [getPlaySrc \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_getplaysrc)
* [open \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open_imusicplayer)
* [open \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open2_imusicplayer)
* [stop \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_stop_imusicplayer)
* [setPlayMode](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_setplaymode)
* [destroy](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_destroy_imusicplayer)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "如果在本页中无法查询到你要使用的 API，则代表 Lite SDK 不支持该 API，调用该 API 时会返回错误码 -2。"
  }, {
    heading: "rtcengine",
    content: "addHandler"
  }, {
    heading: "rtcengine",
    content: "adjustAudioMixingPlayoutVolume"
  }, {
    heading: "rtcengine",
    content: "adjustAudioMixingPublishVolume"
  }, {
    heading: "rtcengine",
    content: "adjustAudioMixingVolume"
  }, {
    heading: "rtcengine",
    content: "adjustCustomAudioPlayoutVolume"
  }, {
    heading: "rtcengine",
    content: "adjustCustomAudioPublishVolume"
  }, {
    heading: "rtcengine",
    content: "adjustPlaybackSignalVolume"
  }, {
    heading: "rtcengine",
    content: "adjustRecordingSignalVolume"
  }, {
    heading: "rtcengine",
    content: "adjustUserPlaybackSignalVolume"
  }, {
    heading: "rtcengine",
    content: "complain"
  }, {
    heading: "rtcengine",
    content: "configRhythmPlayer"
  }, {
    heading: "rtcengine",
    content: "create \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "createCustomAudioTrack"
  }, {
    heading: "rtcengine",
    content: "createCustomVideoTrack"
  }, {
    heading: "rtcengine",
    content: "createDataStream \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "createDataStream \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "createMediaPlayer"
  }, {
    heading: "rtcengine",
    content: "createMediaRecorder"
  }, {
    heading: "rtcengine",
    content: "destroyCustomAudioTrack"
  }, {
    heading: "rtcengine",
    content: "destroyCustomVideoTrack"
  }, {
    heading: "rtcengine",
    content: "disableAudio"
  }, {
    heading: "rtcengine",
    content: "disableAudioSpectrumMonitor"
  }, {
    heading: "rtcengine",
    content: "disableVideo"
  }, {
    heading: "rtcengine",
    content: "enableAudio"
  }, {
    heading: "rtcengine",
    content: "enableAudioSpectrumMonitor"
  }, {
    heading: "rtcengine",
    content: "enableAudioVolumeIndication"
  }, {
    heading: "rtcengine",
    content: "enableContentInspect"
  }, {
    heading: "rtcengine",
    content: "enableCustomAudioLocalPlayback"
  }, {
    heading: "rtcengine",
    content: "enableDualStreamMode \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "enableDualStreamMode \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "enableEncryption"
  }, {
    heading: "rtcengine",
    content: "enableExtension"
  }, {
    heading: "rtcengine",
    content: "enableFaceDetection"
  }, {
    heading: "rtcengine",
    content: "enableInEarMonitoring \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "enableInEarMonitoring \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "enableInstantMediaRendering"
  }, {
    heading: "rtcengine",
    content: "enableLocalAudio"
  }, {
    heading: "rtcengine",
    content: "enableLocalVideo"
  }, {
    heading: "rtcengine",
    content: "enableSoundPositionIndication"
  }, {
    heading: "rtcengine",
    content: "enableVideo"
  }, {
    heading: "rtcengine",
    content: "enableVideoImageSource"
  }, {
    heading: "rtcengine",
    content: "enableVoiceAITuner"
  }, {
    heading: "rtcengine",
    content: "enableWebSdkInteroperability"
  }, {
    heading: "rtcengine",
    content: "getAudioDeviceInfo"
  }, {
    heading: "rtcengine",
    content: "getAudioEffectManager"
  }, {
    heading: "rtcengine",
    content: "getAudioMixingCurrentPosition"
  }, {
    heading: "rtcengine",
    content: "getAudioMixingDuration"
  }, {
    heading: "rtcengine",
    content: "getAudioMixingPlayoutVolume"
  }, {
    heading: "rtcengine",
    content: "getAudioMixingPublishVolume"
  }, {
    heading: "rtcengine",
    content: "getAudioTrackCount"
  }, {
    heading: "rtcengine",
    content: "getCallId"
  }, {
    heading: "rtcengine",
    content: "getCameraMaxZoomFactor"
  }, {
    heading: "rtcengine",
    content: "getConnectionState"
  }, {
    heading: "rtcengine",
    content: "getCurrentMonotonicTimeInMs"
  }, {
    heading: "rtcengine",
    content: "getEffectCurrentPosition"
  }, {
    heading: "rtcengine",
    content: "getEffectDuration"
  }, {
    heading: "rtcengine",
    content: "getEffectsVolume"
  }, {
    heading: "rtcengine",
    content: "getErrorDescription"
  }, {
    heading: "rtcengine",
    content: "getExtensionProperty \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "getExtensionProperty \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "getNativeHandle"
  }, {
    heading: "rtcengine",
    content: "getNetworkType"
  }, {
    heading: "rtcengine",
    content: "getNtpWallTimeInMs"
  }, {
    heading: "rtcengine",
    content: "getUserInfoByUid"
  }, {
    heading: "rtcengine",
    content: "getUserInfoByUserAccount"
  }, {
    heading: "rtcengine",
    content: "getSdkVersion"
  }, {
    heading: "rtcengine",
    content: "getVolumeOfEffect"
  }, {
    heading: "rtcengine",
    content: "create \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "isCameraAutoFocusFaceModeSupported"
  }, {
    heading: "rtcengine",
    content: "isCameraExposurePositionSupported"
  }, {
    heading: "rtcengine",
    content: "isCameraExposureSupported"
  }, {
    heading: "rtcengine",
    content: "isCameraFaceDetectSupported"
  }, {
    heading: "rtcengine",
    content: "isCameraFocusSupported"
  }, {
    heading: "rtcengine",
    content: "isCameraTorchSupported"
  }, {
    heading: "rtcengine",
    content: "isCameraZoomSupported"
  }, {
    heading: "rtcengine",
    content: "isFeatureAvailableOnDevice"
  }, {
    heading: "rtcengine",
    content: "isSpeakerphoneEnabled"
  }, {
    heading: "rtcengine",
    content: "isTextureEncodeSupported"
  }, {
    heading: "rtcengine",
    content: "joinChannel \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "在 joinChannel \\[2/2] 中，以下跟屏幕采集相关的参数设置无效："
  }, {
    heading: "rtcengine",
    content: "publishScreenCaptureVideo"
  }, {
    heading: "rtcengine",
    content: "publishScreenCaptureAudio"
  }, {
    heading: "rtcengine",
    content: "joinChannelWithUserAccount \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "在 joinChannelWithUserAccount \\[2/2] 中，以下跟屏幕采集相关的参数设置无效："
  }, {
    heading: "rtcengine",
    content: "publishScreenCaptureVideo"
  }, {
    heading: "rtcengine",
    content: "publishScreenCaptureAudio"
  }, {
    heading: "rtcengine",
    content: "leaveChannel \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "leaveChannel \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "muteAllRemoteAudioStreams"
  }, {
    heading: "rtcengine",
    content: "muteAllRemoteVideoStreams"
  }, {
    heading: "rtcengine",
    content: "muteLocalAudioStream"
  }, {
    heading: "rtcengine",
    content: "muteLocalVideoStream"
  }, {
    heading: "rtcengine",
    content: "muteRecordingSignal"
  }, {
    heading: "rtcengine",
    content: "muteRemoteAudioStream"
  }, {
    heading: "rtcengine",
    content: "muteRemoteVideoStream"
  }, {
    heading: "rtcengine",
    content: "pauseAllChannelMediaRelay"
  }, {
    heading: "rtcengine",
    content: "pauseAllEffects"
  }, {
    heading: "rtcengine",
    content: "pauseAudioMixing"
  }, {
    heading: "rtcengine",
    content: "pauseEffect"
  }, {
    heading: "rtcengine",
    content: "playEffect \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "playEffect \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "preloadChannel"
  }, {
    heading: "rtcengine",
    content: "preloadChannelWithUserAccount"
  }, {
    heading: "rtcengine",
    content: "preloadEffect \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "pullPlaybackAudioFrame \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "pullPlaybackAudioFrame \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "pushExternalAudioFrame"
  }, {
    heading: "rtcengine",
    content: "pushExternalAudioFrame"
  }, {
    heading: "rtcengine",
    content: "pushExternalVideoFrameById \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "pushExternalVideoFrameById \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "pushExternalVideoFrame \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "pushExternalVideoFrame \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "queryCameraFocalLengthCapability"
  }, {
    heading: "rtcengine",
    content: "queryCodecCapability"
  }, {
    heading: "rtcengine",
    content: "queryDeviceScore"
  }, {
    heading: "rtcengine",
    content: "rate"
  }, {
    heading: "rtcengine",
    content: "在 registerAudioEncodedFrameObserver 中， config 中的 encodingType 仅支持 OPUS 编码格式。"
  }, {
    heading: "rtcengine",
    content: "registerAudioFrameObserver"
  }, {
    heading: "rtcengine",
    content: "registerAudioSpectrumObserver"
  }, {
    heading: "rtcengine",
    content: "registerExtension"
  }, {
    heading: "rtcengine",
    content: "registerLocalUserAccount"
  }, {
    heading: "rtcengine",
    content: "registerMediaMetadataObserver"
  }, {
    heading: "rtcengine",
    content: "registerVideoEncodedFrameObserver"
  }, {
    heading: "rtcengine",
    content: "registerVideoFrameObserver"
  }, {
    heading: "rtcengine",
    content: "destroy \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "removeHandler"
  }, {
    heading: "rtcengine",
    content: "renewToken"
  }, {
    heading: "rtcengine",
    content: "resumeAllChannelMediaRelay"
  }, {
    heading: "rtcengine",
    content: "resumeAllEffects"
  }, {
    heading: "rtcengine",
    content: "resumeAudioMixing"
  }, {
    heading: "rtcengine",
    content: "resumeEffect"
  }, {
    heading: "rtcengine",
    content: "selectAudioTrack"
  }, {
    heading: "rtcengine",
    content: "sendCustomReportMessage"
  }, {
    heading: "rtcengine",
    content: "sendStreamMessage"
  }, {
    heading: "rtcengine",
    content: "setAdvancedAudioOptions"
  }, {
    heading: "rtcengine",
    content: "setAudioEffectParameters"
  }, {
    heading: "rtcengine",
    content: "setAudioEffectPreset"
  }, {
    heading: "rtcengine",
    content: "setAudioMixingDualMonoMode"
  }, {
    heading: "rtcengine",
    content: "setAudioMixingPitch"
  }, {
    heading: "rtcengine",
    content: "setAudioMixingPosition"
  }, {
    heading: "rtcengine",
    content: "setAudioMixingPlaybackSpeed"
  }, {
    heading: "rtcengine",
    content: "setAudioProfile \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setAudioProfile \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setAudioScenario"
  }, {
    heading: "rtcengine",
    content: "setAVSyncSource"
  }, {
    heading: "rtcengine",
    content: "setCameraAutoFocusFaceModeEnabled"
  }, {
    heading: "rtcengine",
    content: "setCameraCapturerConfiguration"
  }, {
    heading: "rtcengine",
    content: "setCameraExposureFactor"
  }, {
    heading: "rtcengine",
    content: "setCameraExposurePosition"
  }, {
    heading: "rtcengine",
    content: "setCameraFocusPositionInPreview"
  }, {
    heading: "rtcengine",
    content: "setCameraTorchOn"
  }, {
    heading: "rtcengine",
    content: "setCameraZoomFactor"
  }, {
    heading: "rtcengine",
    content: "setChannelProfile"
  }, {
    heading: "rtcengine",
    content: "setClientRole \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setClientRole \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setCloudProxy"
  }, {
    heading: "rtcengine",
    content: "setColorEnhanceOptions \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setColorEnhanceOptions \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setDefaultAudioRoutetoSpeakerphone"
  }, {
    heading: "rtcengine",
    content: "setDualStreamMode \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setDualStreamMode \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setEarMonitoringAudioFrameParameters"
  }, {
    heading: "rtcengine",
    content: "setEffectPosition"
  }, {
    heading: "rtcengine",
    content: "setEffectsVolume"
  }, {
    heading: "rtcengine",
    content: "setEnableSpeakerphone"
  }, {
    heading: "rtcengine",
    content: "setExtensionProperty"
  }, {
    heading: "rtcengine",
    content: "setExtensionProviderProperty"
  }, {
    heading: "rtcengine",
    content: "setExternalAudioSink"
  }, {
    heading: "rtcengine",
    content: "setExternalAudioSink"
  }, {
    heading: "rtcengine",
    content: "setExternalAudioSource \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setExternalAudioSource \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setExternalVideoSource"
  }, {
    heading: "rtcengine",
    content: "setHeadphoneEQParameters"
  }, {
    heading: "rtcengine",
    content: "setHeadphoneEQPreset"
  }, {
    heading: "rtcengine",
    content: "setInEarMonitoringVolume"
  }, {
    heading: "rtcengine",
    content: "setLocalAccessPoint"
  }, {
    heading: "rtcengine",
    content: "setLocalRenderMode \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setLocalRenderMode \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setLocalVideoMirrorMode"
  }, {
    heading: "rtcengine",
    content: "setLocalVoiceEqualization"
  }, {
    heading: "rtcengine",
    content: "setLocalVoiceFormant"
  }, {
    heading: "rtcengine",
    content: "setLocalVoicePitch"
  }, {
    heading: "rtcengine",
    content: "setLocalVoiceReverb"
  }, {
    heading: "rtcengine",
    content: "setLogFile"
  }, {
    heading: "rtcengine",
    content: "setLogFileSize"
  }, {
    heading: "rtcengine",
    content: "setLogFilter"
  }, {
    heading: "rtcengine",
    content: "setLogLevel"
  }, {
    heading: "rtcengine",
    content: "setLowlightEnhanceOptions \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setLowlightEnhanceOptions \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setMixedAudioFrameParameters"
  }, {
    heading: "rtcengine",
    content: "setParameters"
  }, {
    heading: "rtcengine",
    content: "setPlaybackAudioFrameBeforeMixingParameters \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setPlaybackAudioFrameParameters"
  }, {
    heading: "rtcengine",
    content: "setRecordingAudioFrameParameters"
  }, {
    heading: "rtcengine",
    content: "setRemoteDefaultVideoStreamType \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setRemoteDefaultVideoStreamType \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setRemoteRenderMode"
  }, {
    heading: "rtcengine",
    content: "setRemoteSubscribeFallbackOption \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setRemoteSubscribeFallbackOption \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setRemoteVideoStreamType \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setRemoteVideoStreamType \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setRemoteVideoSubscriptionOptions"
  }, {
    heading: "rtcengine",
    content: "setRemoteVoicePosition"
  }, {
    heading: "rtcengine",
    content: "setRouteInCommunicationMode"
  }, {
    heading: "rtcengine",
    content: "setSubscribeAudioAllowlist"
  }, {
    heading: "rtcengine",
    content: "setSubscribeAudioBlocklist"
  }, {
    heading: "rtcengine",
    content: "setSubscribeVideoAllowlist"
  }, {
    heading: "rtcengine",
    content: "setSubscribeVideoBlocklist"
  }, {
    heading: "rtcengine",
    content: "setupLocalVideo"
  }, {
    heading: "rtcengine",
    content: "setupRemoteVideo"
  }, {
    heading: "rtcengine",
    content: "setVideoDenoiserOptions \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "setVideoDenoiserOptions \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "setVideoEncoderConfiguration"
  }, {
    heading: "rtcengine",
    content: "setVideoScenario"
  }, {
    heading: "rtcengine",
    content: "setVoiceBeautifierParameters"
  }, {
    heading: "rtcengine",
    content: "setVoiceBeautifierPreset"
  }, {
    heading: "rtcengine",
    content: "setVoiceConversionPreset"
  }, {
    heading: "rtcengine",
    content: "setVolumeOfEffect"
  }, {
    heading: "rtcengine",
    content: "startAudioMixing \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "startAudioMixing \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "startEchoTest"
  }, {
    heading: "rtcengine",
    content: "startLastmileProbeTest"
  }, {
    heading: "rtcengine",
    content: "startLocalVideoTranscoder"
  }, {
    heading: "rtcengine",
    content: "startOrUpdateChannelMediaRelay"
  }, {
    heading: "rtcengine",
    content: "startPreview \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "startPreview \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "startCameraCapture"
  }, {
    heading: "rtcengine",
    content: "startRhythmPlayer"
  }, {
    heading: "rtcengine",
    content: "startMediaRenderingTracing"
  }, {
    heading: "rtcengine",
    content: "stopAllEffects"
  }, {
    heading: "rtcengine",
    content: "stopAudioMixing"
  }, {
    heading: "rtcengine",
    content: "stopChannelMediaRelay"
  }, {
    heading: "rtcengine",
    content: "stopEchoTest"
  }, {
    heading: "rtcengine",
    content: "stopEffect"
  }, {
    heading: "rtcengine",
    content: "stopLastmileProbeTest"
  }, {
    heading: "rtcengine",
    content: "stopPreview \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "stopPreview \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "stopCameraCapture"
  }, {
    heading: "rtcengine",
    content: "stopRhythmPlayer"
  }, {
    heading: "rtcengine",
    content: "switchCamera \\[1/2]"
  }, {
    heading: "rtcengine",
    content: "switchCamera \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "unloadEffect"
  }, {
    heading: "rtcengine",
    content: "unRegisterAudioSpectrumObserver"
  }, {
    heading: "rtcengine",
    content: "unregisterMediaMetadataObserver"
  }, {
    heading: "rtcengine",
    content: "在 updateChannelMediaOptions 中，以下跟屏幕采集相关的参数设置无效："
  }, {
    heading: "rtcengine",
    content: "publishScreenCaptureVideo"
  }, {
    heading: "rtcengine",
    content: "publishScreenCaptureAudio"
  }, {
    heading: "rtcengine",
    content: "updateLocalTranscoderConfiguration"
  }, {
    heading: "rtcengine",
    content: "updatePreloadChannelToken"
  }, {
    heading: "rtcengineex",
    content: "createDataStreamEx \\[1/2]"
  }, {
    heading: "rtcengineex",
    content: "createDataStreamEx \\[2/2]"
  }, {
    heading: "rtcengineex",
    content: "enableAudioVolumeIndicationEx"
  }, {
    heading: "rtcengineex",
    content: "enableContentInspectEx"
  }, {
    heading: "rtcengineex",
    content: "enableDualStreamModeEx"
  }, {
    heading: "rtcengineex",
    content: "enableEncryptionEx"
  }, {
    heading: "rtcengineex",
    content: "getCallIdEx"
  }, {
    heading: "rtcengineex",
    content: "getConnectionStateEx"
  }, {
    heading: "rtcengineex",
    content: "getUserInfoByUidEx"
  }, {
    heading: "rtcengineex",
    content: "getUserInfoByUserAccountEx"
  }, {
    heading: "rtcengineex",
    content: "joinChannelEx"
  }, {
    heading: "rtcengineex",
    content: "joinChannelWithUserAccountEx"
  }, {
    heading: "rtcengineex",
    content: "leaveChannelEx \\[1/2]"
  }, {
    heading: "rtcengineex",
    content: "leaveChannelEx \\[2/2]"
  }, {
    heading: "rtcengineex",
    content: "muteAllRemoteAudioStreamsEx"
  }, {
    heading: "rtcengineex",
    content: "muteAllRemoteVideoStreamsEx"
  }, {
    heading: "rtcengineex",
    content: "muteLocalAudioStreamEx"
  }, {
    heading: "rtcengineex",
    content: "muteLocalVideoStreamEx"
  }, {
    heading: "rtcengineex",
    content: "muteRemoteAudioStreamEx"
  }, {
    heading: "rtcengineex",
    content: "muteRemoteVideoStreamEx"
  }, {
    heading: "rtcengineex",
    content: "pauseAllChannelMediaRelayEx"
  }, {
    heading: "rtcengineex",
    content: "resumeAllChannelMediaRelayEx"
  }, {
    heading: "rtcengineex",
    content: "sendCustomReportMessageEx"
  }, {
    heading: "rtcengineex",
    content: "setDualStreamModeEx"
  }, {
    heading: "rtcengineex",
    content: "setRemoteRenderModeEx"
  }, {
    heading: "rtcengineex",
    content: "setRemoteVideoStreamTypeEx \\[1/2]"
  }, {
    heading: "rtcengineex",
    content: "setRemoteVideoStreamTypeEx \\[2/2]"
  }, {
    heading: "rtcengineex",
    content: "setRemoteVoicePositionEx"
  }, {
    heading: "rtcengineex",
    content: "setSubscribeAudioBlocklistEx"
  }, {
    heading: "rtcengineex",
    content: "setSubscribeAudioAllowlistEx"
  }, {
    heading: "rtcengineex",
    content: "setSubscribeVideoBlocklistEx"
  }, {
    heading: "rtcengineex",
    content: "setSubscribeVideoAllowlistEx"
  }, {
    heading: "rtcengineex",
    content: "setupRemoteVideoEx"
  }, {
    heading: "rtcengineex",
    content: "setVideoEncoderConfigurationEx"
  }, {
    heading: "rtcengineex",
    content: "sendStreamMessageEx"
  }, {
    heading: "rtcengineex",
    content: "startMediaRenderingTracingEx"
  }, {
    heading: "rtcengineex",
    content: "startOrUpdateChannelMediaRelayEx"
  }, {
    heading: "rtcengineex",
    content: "stopChannelMediaRelayEx"
  }, {
    heading: "rtcengineex",
    content: "在 updateChannelMediaOptionsEx 中，以下跟屏幕采集相关的参数设置无效："
  }, {
    heading: "rtcengineex",
    content: "publishScreenCaptureVideo"
  }, {
    heading: "rtcengineex",
    content: "publishScreenCaptureAudio"
  }, {
    heading: "rtcengineex",
    content: "setRemoteVideoSubscriptionOptionsEx"
  }, {
    heading: "rtcengineex",
    content: "adjustUserPlaybackSignalVolumeEx"
  }, {
    heading: "irtcengineeventhandler",
    content: "onActiveSpeaker"
  }, {
    heading: "irtcengineeventhandler",
    content: "onAudioEffectFinished"
  }, {
    heading: "irtcengineeventhandler",
    content: "onAudioMixingFinished"
  }, {
    heading: "irtcengineeventhandler",
    content: "onAudioMixingPositionChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onAudioMixingStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onAudioPublishStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onAudioQuality"
  }, {
    heading: "irtcengineeventhandler",
    content: "onAudioRouteChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onAudioSubscribeStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onAudioVolumeIndication"
  }, {
    heading: "irtcengineeventhandler",
    content: "onCameraExposureAreaChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onCameraFocusAreaChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onCameraReady"
  }, {
    heading: "irtcengineeventhandler",
    content: "onChannelMediaRelayStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onClientRoleChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onClientRoleChangeFailed"
  }, {
    heading: "irtcengineeventhandler",
    content: "onConnectionBanned"
  }, {
    heading: "irtcengineeventhandler",
    content: "onConnectionInterrupted"
  }, {
    heading: "irtcengineeventhandler",
    content: "onConnectionLost"
  }, {
    heading: "irtcengineeventhandler",
    content: "onConnectionStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onEncryptionError"
  }, {
    heading: "irtcengineeventhandler",
    content: "onError"
  }, {
    heading: "irtcengineeventhandler",
    content: "onFacePositionChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onFirstLocalAudioFramePublished"
  }, {
    heading: "irtcengineeventhandler",
    content: "onFirstLocalVideoFrame"
  }, {
    heading: "irtcengineeventhandler",
    content: "onFirstLocalVideoFramePublished"
  }, {
    heading: "irtcengineeventhandler",
    content: "onFirstRemoteAudioFrame"
  }, {
    heading: "irtcengineeventhandler",
    content: "onFirstRemoteAudioDecoded"
  }, {
    heading: "irtcengineeventhandler",
    content: "onFirstRemoteVideoDecoded"
  }, {
    heading: "irtcengineeventhandler",
    content: "onFirstRemoteVideoFrame"
  }, {
    heading: "irtcengineeventhandler",
    content: "onJoinChannelSuccess"
  }, {
    heading: "irtcengineeventhandler",
    content: "onLastmileProbeResult"
  }, {
    heading: "irtcengineeventhandler",
    content: "onLastmileQuality"
  }, {
    heading: "irtcengineeventhandler",
    content: "onLeaveChannel"
  }, {
    heading: "irtcengineeventhandler",
    content: "onLocalAudioStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onLocalAudioStats"
  }, {
    heading: "irtcengineeventhandler",
    content: "onLocalUserRegistered"
  }, {
    heading: "irtcengineeventhandler",
    content: "onLocalVideoStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onLocalVideoStats"
  }, {
    heading: "irtcengineeventhandler",
    content: "onLocalVideoTranscoderError"
  }, {
    heading: "irtcengineeventhandler",
    content: "onTranscodedStreamLayoutInfo"
  }, {
    heading: "irtcengineeventhandler",
    content: "onNetworkQuality"
  }, {
    heading: "irtcengineeventhandler",
    content: "onNetworkTypeChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onPermissionError"
  }, {
    heading: "irtcengineeventhandler",
    content: "onProxyConnected"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRejoinChannelSuccess"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRemoteAudioStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRemoteAudioStats"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRemoteAudioTransportStats"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRemoteSubscribeFallbackToAudioOnly"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRemoteVideoStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRemoteVideoStats"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRemoteVideoTransportStats"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRequestToken"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRhythmPlayerStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onRtcStats"
  }, {
    heading: "irtcengineeventhandler",
    content: "onStreamMessage"
  }, {
    heading: "irtcengineeventhandler",
    content: "onStreamMessageError"
  }, {
    heading: "irtcengineeventhandler",
    content: "onTokenPrivilegeWillExpire"
  }, {
    heading: "irtcengineeventhandler",
    content: "onTranscodingUpdated"
  }, {
    heading: "irtcengineeventhandler",
    content: "onUplinkNetworkInfoUpdated"
  }, {
    heading: "irtcengineeventhandler",
    content: "onUserEnableLocalVideo"
  }, {
    heading: "irtcengineeventhandler",
    content: "onUserEnableVideo"
  }, {
    heading: "irtcengineeventhandler",
    content: "onUserInfoUpdated"
  }, {
    heading: "irtcengineeventhandler",
    content: "onUserJoined"
  }, {
    heading: "irtcengineeventhandler",
    content: "onUserMuteAudio"
  }, {
    heading: "irtcengineeventhandler",
    content: "onUserMuteVideo"
  }, {
    heading: "irtcengineeventhandler",
    content: "onUserOffline"
  }, {
    heading: "irtcengineeventhandler",
    content: "onVideoPublishStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onVideoSizeChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onVideoStopped"
  }, {
    heading: "irtcengineeventhandler",
    content: "onVideoSubscribeStateChanged"
  }, {
    heading: "irtcengineeventhandler",
    content: "onVideoRenderingTracingResult"
  }, {
    heading: "imediaextensionobserver",
    content: "onErrorWithContext"
  }, {
    heading: "imediaextensionobserver",
    content: "onEventWithContext"
  }, {
    heading: "imediaextensionobserver",
    content: "onStartedWithContext"
  }, {
    heading: "imediaextensionobserver",
    content: "onStoppedWithContext"
  }, {
    heading: "imediaplayer",
    content: "adjustPlayoutVolume"
  }, {
    heading: "imediaplayer",
    content: "adjustPublishSignalVolume"
  }, {
    heading: "imediaplayer",
    content: "getDuration"
  }, {
    heading: "imediaplayer",
    content: "getMediaPlayerId"
  }, {
    heading: "imediaplayer",
    content: "getMute"
  }, {
    heading: "imediaplayer",
    content: "getPlayoutVolume"
  }, {
    heading: "imediaplayer",
    content: "getPlayPosition"
  }, {
    heading: "imediaplayer",
    content: "getPlaySrc \\[1/2]"
  }, {
    heading: "imediaplayer",
    content: "getPublishSignalVolume"
  }, {
    heading: "imediaplayer",
    content: "getState"
  }, {
    heading: "imediaplayer",
    content: "getStreamCount"
  }, {
    heading: "imediaplayer",
    content: "getStreamInfo"
  }, {
    heading: "imediaplayer",
    content: "mute"
  }, {
    heading: "imediaplayer",
    content: "open \\[1/2]"
  }, {
    heading: "imediaplayer",
    content: "open \\[2/2]"
  }, {
    heading: "imediaplayer",
    content: "openWithMediaSource"
  }, {
    heading: "imediaplayer",
    content: "pause"
  }, {
    heading: "imediaplayer",
    content: "play"
  }, {
    heading: "imediaplayer",
    content: "playPreloadedSrc"
  }, {
    heading: "imediaplayer",
    content: "preloadSrc"
  }, {
    heading: "imediaplayer",
    content: "registerAudioFrameObserver"
  }, {
    heading: "imediaplayer",
    content: "registerPlayerObserver"
  }, {
    heading: "imediaplayer",
    content: "registerVideoFrameObserver"
  }, {
    heading: "imediaplayer",
    content: "resume"
  }, {
    heading: "imediaplayer",
    content: "seek"
  }, {
    heading: "imediaplayer",
    content: "selectAudioTrack"
  }, {
    heading: "imediaplayer",
    content: "selectMultiAudioTrack"
  }, {
    heading: "imediaplayer",
    content: "setAudioPitch"
  }, {
    heading: "imediaplayer",
    content: "setAudioDualMonoMode"
  }, {
    heading: "imediaplayer",
    content: "setLoopCount"
  }, {
    heading: "imediaplayer",
    content: "setPlaybackSpeed"
  }, {
    heading: "imediaplayer",
    content: "setPlayerOption"
  }, {
    heading: "imediaplayer",
    content: "setPlayerOptionString"
  }, {
    heading: "imediaplayer",
    content: "setVideoRenderMode"
  }, {
    heading: "imediaplayer",
    content: "setView"
  }, {
    heading: "imediaplayer",
    content: "stop \\[1/2]"
  }, {
    heading: "imediaplayer",
    content: "switchSrc"
  }, {
    heading: "imediaplayer",
    content: "unloadSrc"
  }, {
    heading: "imediaplayer",
    content: "unRegisterPlayerObserver"
  }, {
    heading: "ivideoencodedframeobserver",
    content: "onEncodedVideoFrameReceived"
  }, {
    heading: "ivideoframeobserver",
    content: "getMirrorApplied"
  }, {
    heading: "ivideoframeobserver",
    content: "getObservedFramePosition"
  }, {
    heading: "ivideoframeobserver",
    content: "getRotationApplied"
  }, {
    heading: "ivideoframeobserver",
    content: "getVideoFormatPreference"
  }, {
    heading: "ivideoframeobserver",
    content: "getVideoFrameProcessMode"
  }, {
    heading: "ivideoframeobserver",
    content: "onCaptureVideoFrame"
  }, {
    heading: "ivideoframeobserver",
    content: "onPreEncodeVideoFrame"
  }, {
    heading: "ivideoframeobserver",
    content: "onRenderVideoFrame"
  }, {
    heading: "imediaextensionobserver-1",
    content: "onErrorWithContext"
  }, {
    heading: "imediaextensionobserver-1",
    content: "onEventWithContext"
  }, {
    heading: "imediaextensionobserver-1",
    content: "onStartedWithContext"
  }, {
    heading: "imediaextensionobserver-1",
    content: "onStoppedWithContext"
  }, {
    heading: "iagoramusicplayer",
    content: "getPlaySrc \\[2/2]"
  }, {
    heading: "iagoramusicplayer",
    content: "open \\[1/2]"
  }, {
    heading: "iagoramusicplayer",
    content: "open \\[2/2]"
  }, {
    heading: "iagoramusicplayer",
    content: "stop \\[2/2]"
  }, {
    heading: "iagoramusicplayer",
    content: "setPlayMode"
  }, {
    heading: "iagoramusicplayer",
    content: "destroy"
  }],
  headings: [{
    id: "rtcengine",
    content: "RtcEngine"
  }, {
    id: "rtcengineex",
    content: "RtcEngineEx"
  }, {
    id: "irtcengineeventhandler",
    content: "IRtcEngineEventHandler"
  }, {
    id: "imediaextensionobserver",
    content: "IMediaExtensionObserver"
  }, {
    id: "imediaplayer",
    content: "IMediaPlayer"
  }, {
    id: "ivideoencodedframeobserver",
    content: "IVideoEncodedFrameObserver"
  }, {
    id: "ivideoframeobserver",
    content: "IVideoFrameObserver"
  }, {
    id: "imediaextensionobserver-1",
    content: "IMediaExtensionObserver"
  }, {
    id: "iagoramusicplayer",
    content: "IAgoraMusicPlayer"
  }]
};
export let toc = [{
  depth: 2,
  url: "#rtcengine",
  title: _jsx(_Fragment, {
    children: "RtcEngine"
  })
}, {
  depth: 2,
  url: "#rtcengineex",
  title: _jsx(_Fragment, {
    children: "RtcEngineEx"
  })
}, {
  depth: 2,
  url: "#irtcengineeventhandler",
  title: _jsx(_Fragment, {
    children: "IRtcEngineEventHandler"
  })
}, {
  depth: 2,
  url: "#imediaextensionobserver",
  title: _jsx(_Fragment, {
    children: "IMediaExtensionObserver"
  })
}, {
  depth: 2,
  url: "#imediaplayer",
  title: _jsx(_Fragment, {
    children: "IMediaPlayer"
  })
}, {
  depth: 2,
  url: "#ivideoencodedframeobserver",
  title: _jsx(_Fragment, {
    children: "IVideoEncodedFrameObserver"
  })
}, {
  depth: 2,
  url: "#ivideoframeobserver",
  title: _jsx(_Fragment, {
    children: "IVideoFrameObserver"
  })
}, {
  depth: 2,
  url: "#imediaextensionobserver-1",
  title: _jsx(_Fragment, {
    children: "IMediaExtensionObserver"
  })
}, {
  depth: 2,
  url: "#iagoramusicplayer",
  title: _jsx(_Fragment, {
    children: "IAgoraMusicPlayer"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
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
    children: [_jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "注意"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果在本页中无法查询到你要使用的 API，则代表 Lite SDK 不支持该 API，调用该 API 时会返回错误码 -2。"
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "rtcengine",
      children: "RtcEngine"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_addhandler",
          children: "addHandler"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingplayoutvolume",
          children: "adjustAudioMixingPlayoutVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingpublishvolume",
          children: "adjustAudioMixingPublishVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingvolume",
          children: "adjustAudioMixingVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudioplayoutvolume",
          children: "adjustCustomAudioPlayoutVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudiopublishvolume",
          children: "adjustCustomAudioPublishVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustplaybacksignalvolume",
          children: "adjustPlaybackSignalVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_adjustrecordingsignalvolume",
          children: "adjustRecordingSignalVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustuserplaybacksignalvolume",
          children: "adjustUserPlaybackSignalVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_complain",
          children: "complain"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_configrhythmplayer",
          children: "configRhythmPlayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_create",
          children: "create [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
          children: "createCustomAudioTrack"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack",
          children: "createCustomVideoTrack"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream1",
          children: "createDataStream [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream2",
          children: "createDataStream [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_irtcengine_createmediaplayer",
          children: "createMediaPlayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_createmediarecorder",
          children: "createMediaRecorder"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_destroycustomaudiotrack",
          children: "destroyCustomAudioTrack"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_destroycustomvideotrack",
          children: "destroyCustomVideoTrack"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_disableaudio",
          children: "disableAudio"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_disableaudiospectrummonitor",
          children: "disableAudioSpectrumMonitor"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo",
          children: "disableVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio",
          children: "enableAudio"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor",
          children: "enableAudioSpectrumMonitor"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication",
          children: "enableAudioVolumeIndication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_enablecontentinspect",
          children: "enableContentInspect"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_enablecustomaudiolocalplayback",
          children: "enableCustomAudioLocalPlayback"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_enabledualstreammode",
          children: "enableDualStreamMode [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_enabledualstreammode3",
          children: "enableDualStreamMode [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption",
          children: "enableEncryption"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_enableextension",
          children: "enableExtension"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#api_irtcengine_enablefacedetection",
          children: "enableFaceDetection"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enableinearmonitoring",
          children: "enableInEarMonitoring [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enableinearmonitoring2",
          children: "enableInEarMonitoring [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_enableinstantmediarendering",
          children: "enableInstantMediaRendering"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enablelocalaudio",
          children: "enableLocalAudio"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo",
          children: "enableLocalVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_enablesoundpositionindication",
          children: "enableSoundPositionIndication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
          children: "enableVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/image-source#api_irtcengine_enablevideoimagesource",
          children: "enableVideoImageSource"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_enablevoiceaituner",
          children: "enableVoiceAITuner"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enablewebsdkinteroperability",
          children: "enableWebSdkInteroperability"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_getaudiodeviceinfo",
          children: "getAudioDeviceInfo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_getaudioeffectmanager",
          children: "getAudioEffectManager"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingcurrentposition",
          children: "getAudioMixingCurrentPosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingduration",
          children: "getAudioMixingDuration"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingplayoutvolume",
          children: "getAudioMixingPlayoutVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiomixingpublishvolume",
          children: "getAudioMixingPublishVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiotrackcount",
          children: "getAudioTrackCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid",
          children: "getCallId"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_getcameramaxzoomfactor",
          children: "getCameraMaxZoomFactor"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getconnectionstate",
          children: "getConnectionState"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcurrentmonotonictimeinms",
          children: "getCurrentMonotonicTimeInMs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectcurrentposition",
          children: "getEffectCurrentPosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectduration",
          children: "getEffectDuration"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_geteffectsvolume",
          children: "getEffectsVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_geterrordescription",
          children: "getErrorDescription"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_getextensionproperty",
          children: "getExtensionProperty [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_getextensionproperty2",
          children: "getExtensionProperty [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getnativehandle",
          children: "getNativeHandle"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getnetworktype",
          children: "getNetworkType"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getntpwalltimeinms",
          children: "getNtpWallTimeInMs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_getuserinfobyuid",
          children: "getUserInfoByUid"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_getuserinfobyuseraccount",
          children: "getUserInfoByUserAccount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getversion",
          children: "getSdkVersion"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_getvolumeofeffect",
          children: "getVolumeOfEffect"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
          children: "create [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraautofocusfacemodesupported",
          children: "isCameraAutoFocusFaceModeSupported"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraexposurepositionsupported",
          children: "isCameraExposurePositionSupported"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameraexposuresupported",
          children: "isCameraExposureSupported"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerafacedetectsupported",
          children: "isCameraFaceDetectSupported"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerafocussupported",
          children: "isCameraFocusSupported"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscameratorchsupported",
          children: "isCameraTorchSupported"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_iscamerazoomsupported",
          children: "isCameraZoomSupported"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_isfeatureavailableondevice",
          children: "isFeatureAvailableOnDevice"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_isspeakerphoneenabled",
          children: "isSpeakerphoneEnabled"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_istextureencodesupported",
          children: "isTextureEncodeSupported"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel1",
          children: "joinChannel [1/2]"
        })
      }), `
`, _jsxs(_components.li, {
        children: ["在 ", _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel2",
          children: "joinChannel [2/2]"
        }), " 中，以下跟屏幕采集相关的参数设置无效：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "publishScreenCaptureVideo"
          }), `
`, _jsx(_components.li, {
            children: "publishScreenCaptureAudio"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannelwithuseraccount1",
          children: "joinChannelWithUserAccount [1/2]"
        })
      }), `
`, _jsxs(_components.li, {
        children: ["在 ", _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannelwithuseraccount2",
          children: "joinChannelWithUserAccount [2/2]"
        }), " 中，以下跟屏幕采集相关的参数设置无效：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "publishScreenCaptureVideo"
          }), `
`, _jsx(_components.li, {
            children: "publishScreenCaptureAudio"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel",
          children: "leaveChannel [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel2",
          children: "leaveChannel [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremoteaudiostreams",
          children: "muteAllRemoteAudioStreams"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremotevideostreams",
          children: "muteAllRemoteVideoStreams"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream",
          children: "muteLocalAudioStream"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalvideostream",
          children: "muteLocalVideoStream"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_muterecordingsignal",
          children: "muteRecordingSignal"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremoteaudiostream",
          children: "muteRemoteAudioStream"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremotevideostream",
          children: "muteRemoteVideoStream"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_pauseallchannelmediarelay",
          children: "pauseAllChannelMediaRelay"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects",
          children: "pauseAllEffects"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_pauseaudiomixing",
          children: "pauseAudioMixing"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pauseeffect",
          children: "pauseEffect"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect2",
          children: "playEffect [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect3",
          children: "playEffect [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_preloadchannel",
          children: "preloadChannel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_preloadchannelwithuseraccount",
          children: "preloadChannelWithUserAccount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_preloadeffect",
          children: "preloadEffect [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe",
          children: "pullPlaybackAudioFrame [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe2",
          children: "pullPlaybackAudioFrame [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pushaudioframe2",
          children: "pushExternalAudioFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pushaudioframe2",
          children: "pushExternalAudioFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe",
          children: "pushExternalVideoFrameById [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe3",
          children: "pushExternalVideoFrameById [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe2",
          children: "pushExternalVideoFrame [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe4",
          children: "pushExternalVideoFrame [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycamerafocallengthcapability",
          children: "queryCameraFocalLengthCapability"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycodeccapability",
          children: "queryCodecCapability"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_querydevicescore",
          children: "queryDeviceScore"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate",
          children: "rate"
        })
      }), `
`, _jsxs(_components.li, {
        children: ["在 ", _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver",
          children: "registerAudioEncodedFrameObserver"
        }), " 中， config 中的 encodingType 仅支持 OPUS 编码格式。"]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver",
          children: "registerAudioFrameObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver",
          children: "registerAudioSpectrumObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension",
          children: "registerExtension"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount",
          children: "registerLocalUserAccount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_registermediametadataobserver",
          children: "registerMediaMetadataObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-encoded#api_irtcengine_registervideoencodedframeobserver",
          children: "registerVideoEncodedFrameObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver",
          children: "registerVideoFrameObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_release",
          children: "destroy [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_removehandler",
          children: "removeHandler"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
          children: "renewToken"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_resumeallchannelmediarelay",
          children: "resumeAllChannelMediaRelay"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumealleffects",
          children: "resumeAllEffects"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_resumeaudiomixing",
          children: "resumeAudioMixing"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumeeffect",
          children: "resumeEffect"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_selectaudiotrack",
          children: "selectAudioTrack"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_sendcustomreportmessage",
          children: "sendCustomReportMessage"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage",
          children: "sendStreamMessage"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setadvancedaudiooptions",
          children: "setAdvancedAudioOptions"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectparameters",
          children: "setAudioEffectParameters"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectpreset",
          children: "setAudioEffectPreset"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingdualmonomode",
          children: "setAudioMixingDualMonoMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingpitch",
          children: "setAudioMixingPitch"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingposition",
          children: "setAudioMixingPosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingplaybackspeed",
          children: "setAudioMixingPlaybackSpeed"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile",
          children: "setAudioProfile [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile2",
          children: "setAudioProfile [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario",
          children: "setAudioScenario"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setavsyncsource",
          children: "setAVSyncSource"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraautofocusfacemodeenabled",
          children: "setCameraAutoFocusFaceModeEnabled"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameracapturerconfiguration",
          children: "setCameraCapturerConfiguration"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposurefactor",
          children: "setCameraExposureFactor"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposureposition",
          children: "setCameraExposurePosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerafocuspositioninpreview",
          children: "setCameraFocusPositionInPreview"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameratorchon",
          children: "setCameraTorchOn"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerazoomfactor",
          children: "setCameraZoomFactor"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setchannelprofile",
          children: "setChannelProfile"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole1",
          children: "setClientRole [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole2",
          children: "setClientRole [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy",
          children: "setCloudProxy"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions",
          children: "setColorEnhanceOptions [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions2",
          children: "setColorEnhanceOptions [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setdefaultaudioroutetospeakerphone",
          children: "setDefaultAudioRoutetoSpeakerphone"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode",
          children: "setDualStreamMode [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setdualstreammode2",
          children: "setDualStreamMode [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setearmonitoringaudioframeparameters",
          children: "setEarMonitoringAudioFrameParameters"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_seteffectposition",
          children: "setEffectPosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_seteffectsvolume",
          children: "setEffectsVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setenablespeakerphone",
          children: "setEnableSpeakerphone"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_setextensionproperty",
          children: "setExtensionProperty"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_setextensionproviderproperty",
          children: "setExtensionProviderProperty"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink",
          children: "setExternalAudioSink"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink",
          children: "setExternalAudioSink"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource",
          children: "setExternalAudioSource [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource2",
          children: "setExternalAudioSource [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource",
          children: "setExternalVideoSource"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqparameters",
          children: "setHeadphoneEQParameters"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqpreset",
          children: "setHeadphoneEQPreset"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_setinearmonitoringvolume",
          children: "setInEarMonitoringVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlocalaccesspoint",
          children: "setLocalAccessPoint"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode1",
          children: "setLocalRenderMode [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode2",
          children: "setLocalRenderMode [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalvideomirrormode",
          children: "setLocalVideoMirrorMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceequalization",
          children: "setLocalVoiceEqualization"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceformant",
          children: "setLocalVoiceFormant"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicepitch",
          children: "setLocalVoicePitch"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicereverb",
          children: "setLocalVoiceReverb"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfile",
          children: "setLogFile"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilesize",
          children: "setLogFileSize"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilter",
          children: "setLogFilter"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setloglevel",
          children: "setLogLevel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setlowlightenhanceoptions",
          children: "setLowlightEnhanceOptions [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setlowlightenhanceoptions2",
          children: "setLowlightEnhanceOptions [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setmixedaudioframeparameters",
          children: "setMixedAudioFrameParameters"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setparameters",
          children: "setParameters"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframebeforemixingparameters",
          children: "setPlaybackAudioFrameBeforeMixingParameters [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframeparameters",
          children: "setPlaybackAudioFrameParameters"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setrecordingaudioframeparameters",
          children: "setRecordingAudioFrameParameters"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype",
          children: "setRemoteDefaultVideoStreamType [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype2",
          children: "setRemoteDefaultVideoStreamType [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setremoterendermode2",
          children: "setRemoteRenderMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption",
          children: "setRemoteSubscribeFallbackOption [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption2",
          children: "setRemoteSubscribeFallbackOption [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype",
          children: "setRemoteVideoStreamType [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype2",
          children: "setRemoteVideoStreamType [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideosubscriptionoptions",
          children: "setRemoteVideoSubscriptionOptions"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_setremotevoiceposition",
          children: "setRemoteVoicePosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setrouteincommunicationmode",
          children: "setRouteInCommunicationMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioallowlist",
          children: "setSubscribeAudioAllowlist"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioblocklist",
          children: "setSubscribeAudioBlocklist"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoallowlist",
          children: "setSubscribeVideoAllowlist"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoblocklist",
          children: "setSubscribeVideoBlocklist"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo",
          children: "setupLocalVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setupremotevideo",
          children: "setupRemoteVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions",
          children: "setVideoDenoiserOptions [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions2",
          children: "setVideoDenoiserOptions [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration",
          children: "setVideoEncoderConfiguration"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoscenario",
          children: "setVideoScenario"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoicebeautifierparameters",
          children: "setVoiceBeautifierParameters"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoicebeautifierpreset",
          children: "setVoiceBeautifierPreset"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setvoiceconversionpreset",
          children: "setVoiceConversionPreset"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_setvolumeofeffect",
          children: "setVolumeOfEffect"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing",
          children: "startAudioMixing [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing2",
          children: "startAudioMixing [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3",
          children: "startEchoTest"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest",
          children: "startLastmileProbeTest"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder",
          children: "startLocalVideoTranscoder"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_startorupdatechannelmediarelay",
          children: "startOrUpdateChannelMediaRelay"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview",
          children: "startPreview [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview2",
          children: "startPreview [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture",
          children: "startCameraCapture"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_startrhythmplayer",
          children: "startRhythmPlayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
          children: "startMediaRenderingTracing"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopalleffects",
          children: "stopAllEffects"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_stopaudiomixing",
          children: "stopAudioMixing"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_stopchannelmediarelay",
          children: "stopChannelMediaRelay"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stopechotest",
          children: "stopEchoTest"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopeffect",
          children: "stopEffect"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stoplastmileprobetest",
          children: "stopLastmileProbeTest"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview",
          children: "stopPreview [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview2",
          children: "stopPreview [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_stopcameracapture",
          children: "stopCameraCapture"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_stoprhythmplayer",
          children: "stopRhythmPlayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera",
          children: "switchCamera [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera2",
          children: "switchCamera [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_unloadeffect",
          children: "unloadEffect"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_unregisteraudiospectrumobserver",
          children: "unRegisterAudioSpectrumObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_unregistermediametadataobserver",
          children: "unregisterMediaMetadataObserver"
        })
      }), `
`, _jsxs(_components.li, {
        children: ["在 ", _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions",
          children: "updateChannelMediaOptions"
        }), " 中，以下跟屏幕采集相关的参数设置无效：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "publishScreenCaptureVideo"
          }), `
`, _jsx(_components.li, {
            children: "publishScreenCaptureAudio"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_updatelocaltranscoderconfiguration",
          children: "updateLocalTranscoderConfiguration"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatepreloadchanneltoken",
          children: "updatePreloadChannelToken"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "rtcengineex",
      children: "RtcEngineEx"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex1",
          children: "createDataStreamEx [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex2",
          children: "createDataStreamEx [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_enableaudiovolumeindicationex",
          children: "enableAudioVolumeIndicationEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_enablecontentinspectex",
          children: "enableContentInspectEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_enabledualstreammodeex",
          children: "enableDualStreamModeEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_enableencryptionex",
          children: "enableEncryptionEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_getcallidex",
          children: "getCallIdEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_getconnectionstateex",
          children: "getConnectionStateEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuidex",
          children: "getUserInfoByUidEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuseraccountex",
          children: "getUserInfoByUserAccountEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
          children: "joinChannelEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelwithuseraccountex",
          children: "joinChannelWithUserAccountEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex",
          children: "leaveChannelEx [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex2",
          children: "leaveChannelEx [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteallremoteaudiostreamsex",
          children: "muteAllRemoteAudioStreamsEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteallremotevideostreamsex",
          children: "muteAllRemoteVideoStreamsEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_mutelocalaudiostreamex",
          children: "muteLocalAudioStreamEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_mutelocalvideostreamex",
          children: "muteLocalVideoStreamEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteremoteaudiostreamex",
          children: "muteRemoteAudioStreamEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_muteremotevideostreamex",
          children: "muteRemoteVideoStreamEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_pauseallchannelmediarelayex",
          children: "pauseAllChannelMediaRelayEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_resumeallchannelmediarelayex",
          children: "resumeAllChannelMediaRelayEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_sendcustomreportmessageex",
          children: "sendCustomReportMessageEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
          children: "setDualStreamModeEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setremoterendermodeex",
          children: "setRemoteRenderModeEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex",
          children: "setRemoteVideoStreamTypeEx [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex2",
          children: "setRemoteVideoStreamTypeEx [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengineex_setremotevoicepositionex",
          children: "setRemoteVoicePositionEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioblocklistex",
          children: "setSubscribeAudioBlocklistEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioallowlistex",
          children: "setSubscribeAudioAllowlistEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoblocklistex",
          children: "setSubscribeVideoBlocklistEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoallowlistex",
          children: "setSubscribeVideoAllowlistEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setupremotevideoex",
          children: "setupRemoteVideoEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengineex_setvideoencoderconfigurationex",
          children: "setVideoEncoderConfigurationEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_sendstreammessageex",
          children: "sendStreamMessageEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_startmediarenderingtracingex",
          children: "startMediaRenderingTracingEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_startorupdatechannelmediarelayex",
          children: "startOrUpdateChannelMediaRelayEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_stopchannelmediarelayex",
          children: "stopChannelMediaRelayEx"
        })
      }), `
`, _jsxs(_components.li, {
        children: ["在 ", _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_updatechannelmediaoptionsex",
          children: "updateChannelMediaOptionsEx"
        }), " 中，以下跟屏幕采集相关的参数设置无效：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "publishScreenCaptureVideo"
          }), `
`, _jsx(_components.li, {
            children: "publishScreenCaptureAudio"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideosubscriptionoptionsex",
          children: "setRemoteVideoSubscriptionOptionsEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_adjustuserplaybacksignalvolumeex",
          children: "adjustUserPlaybackSignalVolumeEx"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "irtcengineeventhandler",
      children: "IRtcEngineEventHandler"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onactivespeaker",
          children: "onActiveSpeaker"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#callback_irtcengineeventhandler_onaudioeffectfinished",
          children: "onAudioEffectFinished"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingfinished",
          children: "onAudioMixingFinished"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingpositionchanged",
          children: "onAudioMixingPositionChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
          children: "onAudioMixingStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiopublishstatechanged",
          children: "onAudioPublishStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudioquality",
          children: "onAudioQuality"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#callback_irtcengineeventhandler_onaudioroutingchanged",
          children: "onAudioRouteChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiosubscribestatechanged",
          children: "onAudioSubscribeStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication",
          children: "onAudioVolumeIndication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncameraexposureareachanged",
          children: "onCameraExposureAreaChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncamerafocusareachanged",
          children: "onCameraFocusAreaChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncameraready",
          children: "onCameraReady"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
          children: "onChannelMediaRelayStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechanged",
          children: "onClientRoleChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechangefailed",
          children: "onClientRoleChangeFailed"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionbanned",
          children: "onConnectionBanned"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectioninterrupted",
          children: "onConnectionInterrupted"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionlost",
          children: "onConnectionLost"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
          children: "onConnectionStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onencryptionerror",
          children: "onEncryptionError"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onerror",
          children: "onError"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#callback_irtcengineeventhandler_onfacepositionchanged",
          children: "onFacePositionChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstlocalaudioframepublished",
          children: "onFirstLocalAudioFramePublished"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframe",
          children: "onFirstLocalVideoFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframepublished",
          children: "onFirstLocalVideoFramePublished"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudioframe",
          children: "onFirstRemoteAudioFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudiodecoded",
          children: "onFirstRemoteAudioDecoded"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideodecoded",
          children: "onFirstRemoteVideoDecoded"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideoframe",
          children: "onFirstRemoteVideoFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess",
          children: "onJoinChannelSuccess"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmileproberesult",
          children: "onLastmileProbeResult"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmilequality",
          children: "onLastmileQuality"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onleavechannel",
          children: "onLeaveChannel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostatechanged",
          children: "onLocalAudioStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostats",
          children: "onLocalAudioStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered",
          children: "onLocalUserRegistered"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
          children: "onLocalVideoStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostats",
          children: "onLocalVideoStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#callback_irtcengineeventhandler_onlocalvideotranscodererror",
          children: "onLocalVideoTranscoderError"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo",
          children: "onTranscodedStreamLayoutInfo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworkquality",
          children: "onNetworkQuality"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworktypechanged",
          children: "onNetworkTypeChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissionerror",
          children: "onPermissionError"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onproxyconnected",
          children: "onProxyConnected"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess",
          children: "onRejoinChannelSuccess"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
          children: "onRemoteAudioStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats",
          children: "onRemoteAudioStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiotransportstats",
          children: "onRemoteAudioTransportStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly",
          children: "onRemoteSubscribeFallbackToAudioOnly"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged",
          children: "onRemoteVideoStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats",
          children: "onRemoteVideoStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideotransportstats",
          children: "onRemoteVideoTransportStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrequesttoken",
          children: "onRequestToken"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rhythmplayer#callback_irtcengineeventhandler_onrhythmplayerstatechanged",
          children: "onRhythmPlayerStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrtcstats",
          children: "onRtcStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage",
          children: "onStreamMessage"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror",
          children: "onStreamMessageError"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_ontokenprivilegewillexpire",
          children: "onTokenPrivilegeWillExpire"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_ontranscodingupdated",
          children: "onTranscodingUpdated"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onuplinknetworkinfoupdated",
          children: "onUplinkNetworkInfoUpdated"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onuserenablelocalvideo",
          children: "onUserEnableLocalVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onuserenablevideo",
          children: "onUserEnableVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated",
          children: "onUserInfoUpdated"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined",
          children: "onUserJoined"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio",
          children: "onUserMuteAudio"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onusermutevideo",
          children: "onUserMuteVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuseroffline",
          children: "onUserOffline"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideopublishstatechanged",
          children: "onVideoPublishStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideosizechanged",
          children: "onVideoSizeChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideostopped",
          children: "onVideoStopped"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onvideosubscribestatechanged",
          children: "onVideoSubscribeStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult",
          children: "onVideoRenderingTracingResult"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "imediaextensionobserver",
      children: "IMediaExtensionObserver"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionerrorwithcontext",
          children: "onErrorWithContext"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensioneventwithcontext",
          children: "onEventWithContext"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstartedwithcontext",
          children: "onStartedWithContext"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstoppedwithcontext",
          children: "onStoppedWithContext"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "imediaplayer",
      children: "IMediaPlayer"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustplayoutvolume",
          children: "adjustPlayoutVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustpublishsignalvolume",
          children: "adjustPublishSignalVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getduration",
          children: "getDuration"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmediaplayerid",
          children: "getMediaPlayerId"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmute",
          children: "getMute"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplayoutvolume",
          children: "getPlayoutVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplayposition",
          children: "getPlayPosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getplaysrc_imediaplayer",
          children: "getPlaySrc [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getpublishsignalvolume",
          children: "getPublishSignalVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstate",
          children: "getState"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount",
          children: "getStreamCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo",
          children: "getStreamInfo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_mute",
          children: "mute"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_open",
          children: "open [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_open2",
          children: "open [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
          children: "openWithMediaSource"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_pause",
          children: "pause"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play",
          children: "play"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc",
          children: "playPreloadedSrc"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc",
          children: "preloadSrc"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registeraudioframeobserver2_imediaplayer",
          children: "registerAudioFrameObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registerplayersourceobserver",
          children: "registerPlayerObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_registervideoframeobserver_imediaplayer",
          children: "registerVideoFrameObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_resume",
          children: "resume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_seek",
          children: "seek"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_selectaudiotrack_imediaplayer",
          children: "selectAudioTrack"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_imediaplayer_selectmultiaudiotrack",
          children: "selectMultiAudioTrack"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiopitch",
          children: "setAudioPitch"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiodualmonomode",
          children: "setAudioDualMonoMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setloopcount",
          children: "setLoopCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplaybackspeed",
          children: "setPlaybackSpeed"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption",
          children: "setPlayerOption"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2",
          children: "setPlayerOptionString"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_imediaplayer_setrendermode",
          children: "setVideoRenderMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setview",
          children: "setView"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_stop",
          children: "stop [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_switchsrc",
          children: "switchSrc"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_unloadsrc",
          children: "unloadSrc"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_unregisterplayersourceobserver",
          children: "unRegisterPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "ivideoencodedframeobserver",
      children: "IVideoEncodedFrameObserver"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-encoded#callback_ivideoencodedframeobserver_onencodedvideoframereceived",
          children: "onEncodedVideoFrameReceived"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "ivideoframeobserver",
      children: "IVideoFrameObserver"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getmirrorapplied",
          children: "getMirrorApplied"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getobservedframeposition",
          children: "getObservedFramePosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getrotationapplied",
          children: "getRotationApplied"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoformatpreference",
          children: "getVideoFormatPreference"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode",
          children: "getVideoFrameProcessMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_oncapturevideoframe",
          children: "onCaptureVideoFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onpreencodevideoframe",
          children: "onPreEncodeVideoFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onrendervideoframe",
          children: "onRenderVideoFrame"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "imediaextensionobserver-1",
      children: "IMediaExtensionObserver"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionerrorwithcontext",
          children: "onErrorWithContext"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensioneventwithcontext",
          children: "onEventWithContext"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstartedwithcontext",
          children: "onStartedWithContext"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstoppedwithcontext",
          children: "onStoppedWithContext"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "iagoramusicplayer",
      children: "IAgoraMusicPlayer"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_getplaysrc",
          children: "getPlaySrc [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open_imusicplayer",
          children: "open [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open2_imusicplayer",
          children: "open [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_stop_imusicplayer",
          children: "stop [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_setplaymode",
          children: "setPlayMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_destroy_imusicplayer",
          children: "destroy"
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
