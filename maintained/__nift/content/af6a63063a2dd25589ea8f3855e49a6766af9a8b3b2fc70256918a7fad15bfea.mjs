import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Full SDK API 列表",
  description: "本页列出 Android 所有的接口类以及其中包含的 API。"
};
export let _markdown = `

<a id="rtc_interface_class" />

本页列出 Android 所有的接口类以及其中包含的 API。

<a id="class_asynccallback" />

## AsyncCallback [#asynccallback]

用于处理异步操作结果的回调。

### 相关参考 [#相关参考]

* [onResult](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_asynccallback_onresult_asynccallback)

<a id="class_canvas" />

## Canvas [#canvas]

用于设置视频渲染视图。

<a id="class_canvas__detailed_desc" />

#### \`自从\` [#自从]

自 v4.4.0 版本新增。

### 相关参考 [#相关参考-1]

* [addView](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_addview)
* [Canvas](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas)
* [getConfigs \\[3/3\\]](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_getconfigs_canvas)
* [removeView](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_removeview)
* [setConfigs \\[3/3\\]](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_setconfigs_canvas)

<a id="class_canvasconfig" />

## CanvasConfig [#canvasconfig]

用于配置播放器的视频渲染。

<a id="class_canvasconfig__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.4.0 版本新增。

### 相关参考 [#相关参考-2]

* [getVideoMirrorMode](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvasconfig_getmirrormode)
* [getVideoRenderMode](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvasconfig_getrendermode)
* [setVideoMirrorMode](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvasconfig_setmirrormode)
* [setVideoRenderMode](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvasconfig_setrendermode_canvasconfig)

<a id="class_error" />

## Error [#error]

用于获取错误码和错误信息。

<a id="class_error__detailed_desc" />

#### \`自从\` [#自从-2]

自 v4.4.0 版本新增。

### 相关参考 [#相关参考-3]

* [code](/zh-CN/api-reference/rtc/android/playback/rte-player#api_error_code)
* [message](/zh-CN/api-reference/rtc/android/playback/rte-player#api_error_message)

<a id="class_iaudioencodedframeobserver" />

## IAudioEncodedFrameObserver [#iaudioencodedframeobserver]

用于监听音频编码帧的接口。

### 相关参考 [#相关参考-4]

* [onMixedAudioEncodedFrame](/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onmixedaudioencodedframe)
* [onPlaybackAudioEncodedFrame](/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onplaybackaudioencodedframe)
* [onRecordAudioEncodedFrame](/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onrecordaudioencodedframe)

<a id="class_iaudioframeobserver" />

## IAudioFrameObserver [#iaudioframeobserver]

用于观测和处理音频帧的接口。

### 相关参考 [#相关参考-5]

* [getEarMonitoringAudioParams](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getearmonitoringaudioparams)
* [getMixedAudioParams](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getmixedaudioparams)
* [getObservedAudioFramePosition](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition)
* [getPlaybackAudioParams](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getplaybackaudioparams)
* [getRecordAudioParams](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getrecordaudioparams)
* [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe)
* [onMixedAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe)
* [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe)
* [onPlaybackAudioFrameBeforeMixing](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing)
* [onRecordAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe)

<a id="class_iaudiospectrumobserver" />

## IAudioSpectrumObserver [#iaudiospectrumobserver]

用于音频频谱观测的接口。

### 相关参考 [#相关参考-6]

* [onLocalAudioSpectrum](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum)
* [onRemoteAudioSpectrum](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onremoteaudiospectrum)

<a id="class_ibasespatialaudioengine" />

## IBaseSpatialAudioEngine [#ibasespatialaudioengine]

IBaseSpatialAudioEngine：基础空间音效引擎接口。

### 相关参考 [#相关参考-7]

* [clearRemotePositions](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_clearremotepositions)
* [muteAllRemoteAudioStreams](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine)
* [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine)
* [muteRemoteAudioStream](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine)
* [setAudioRecvRange](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setaudiorecvrange)
* [setDistanceUnit](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setdistanceunit)
* [setMaxAudioRecvCount](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setmaxaudiorecvcount)
* [setPlayerAttenuation](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setplayerattenuation)
* [setZones](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setzones)
* [updatePlayerPositionInfo](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateplayerpositioninfo)
* [updateSelfPosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateselfposition)

<a id="class_ilocalspatialaudioengine" />

## ILocalSpatialAudioEngine [#ilocalspatialaudioengine]

ILocalSpatialAudioEngine 是本地空间音效引擎接口。

### 相关参考 [#相关参考-8]

* [create](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_create_ilocalspatialaudioengine)
* [initialize](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine)
* [destroy](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_release_ilocalspatialaudioengine)
* [removeRemotePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_removeremoteposition)
* [setRemoteAudioAttenuation](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_setremoteaudioattenuation)
* [updateRemotePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_updateremoteposition)

<a id="class_imediaextensionobserver" />

## IMediaExtensionObserver [#imediaextensionobserver]

IMediaExtensionObserver 接口用于监听媒体扩展相关的事件。

<a id="class_imediaplayer" />

## IMediaPlayer [#imediaplayer]

IMediaPlayer 接口用于实现媒体播放功能。

### 相关参考 [#相关参考-9]

* [adjustPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustplayoutvolume)
* [adjustPublishSignalVolume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_adjustpublishsignalvolume)
* [destroy](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayer_destroy_imediaplayer)
* [getAudioBufferDelay](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getaudiobufferdelay)
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
* [setAudioDualMonoMode](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiodualmonomode)
* [setAudioPitch](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiopitch)
* [setLoopCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setloopcount)
* [setPlaybackSpeed](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplaybackspeed)
* [setPlayerOption](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption)
* [setPlayerOptionString](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2)
* [setVideoRenderMode](/zh-CN/api-reference/rtc/android/video/video-rendering#api_imediaplayer_setrendermode)
* [setSpatialAudioParams](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_imediaplayer_setspatialaudioparams)
* [setView](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setview)
* [stop \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_stop)
* [switchSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_switchsrc)
* [unloadSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_unloadsrc)
* [unRegisterPlayerObserver](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#api_imediaplayer_unregisterplayersourceobserver)

<a id="class_imediaplayeraudioframeobserver" />

## IMediaPlayerAudioFrameObserver [#imediaplayeraudioframeobserver]

用于观测媒体播放器的音频帧。

### 相关参考 [#相关参考-10]

* [onFrame](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver)

<a id="class_imediaplayercachemanager" />

## IMediaPlayerCacheManager [#imediaplayercachemanager]

用于管理媒体播放器的缓存。

### 相关参考 [#相关参考-11]

* [enableAutoRemoveCache](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_enableautoremovecache)
* [getCacheDir](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getcachedir)
* [getCacheFileCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getcachefilecount)
* [getMaxCacheFileCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getmaxcachefilecount)
* [getMaxCacheFileSize](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getmaxcachefilesize)
* [getMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager)
* [removeAllCaches](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeallcaches)
* [removeCacheByUri](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removecachebyuri)
* [removeOldCache](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeoldcache)
* [setCacheDir](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setcachedir)
* [setMaxCacheFileCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilecount)
* [setMaxCacheFileSize](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilesize)

<a id="class_imediaplayercustomdataprovider" />

## IMediaPlayerCustomDataProvider [#imediaplayercustomdataprovider]

IMediaPlayerCustomDataProvider 接口用于为媒体播放器提供自定义数据源。

### 相关参考 [#相关参考-12]

* [onReadData](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayercustomdataprovider_onreaddata)
* [onSeek](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#callback_imediaplayercustomdataprovider_onseek)

<a id="class_imediaplayersourceobserver" />

## IMediaPlayerObserver [#imediaplayerobserver]

用于监听媒体播放器状态变化的接口。

### 相关参考 [#相关参考-13]

* [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver)
* [onMetaData](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onmetadata)
* [onPlayBufferUpdated](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplaybufferupdated)
* [onPlayerCacheStats](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#callback_imediaplayersourceobserver_onplayercachestats)
* [onPlayerEvent](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent)
* [onPlayerInfoUpdated](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerinfoupdated)
* [onPlayerPlaybackStats](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#callback_imediaplayersourceobserver_onplayerplaybackstats)
* [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged)
* [onPlayerSrcInfoChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersrcinfochanged)
* [onPositionChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpositionchanged)
* [onPreloadEvent](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpreloadevent)

<a id="class_imediaplayervideoframeobserver" />

## IMediaPlayerVideoFrameObserver [#imediaplayervideoframeobserver]

用于观测媒体播放器的视频帧。

### 相关参考 [#相关参考-14]

* [onFrame](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver)

<a id="class_imediarecorder" />

## AgoraMediaRecorder [#agoramediarecorder]

用于录制客户端的音频和视频。

<a id="class_imediarecorder__detailed_desc" />

#### \`自从\` [#自从-3]

自 v3.5.2 版本新增。

[AgoraMediaRecorder](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder) 可录制以下内容：

* 本地麦克风采集并由 SDK 编码为 AAC 格式的音频。
* 本地摄像头采集并由 SDK 编码的视频。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在 \`COMMUNICATION\` 频道场景下，当频道中存在使用 v3.0.0 之前版本 SDK 的用户时，该功能不可用。
  </CalloutDescription>
</CalloutContainer>

### 相关参考 [#相关参考-15]

* [setMediaRecorderObserver](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_setmediarecorderobserver)
* [startRecording](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_startrecording)
* [stopRecording](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_stoprecording)

<a id="class_imediarecorderobserver" />

## IMediaRecorderCallback [#imediarecordercallback]

用于设置媒体录制的回调方法。

<a id="class_imediarecorderobserver__detailed_desc" />

#### \`自从\` [#自从-4]

自 v4.0.0 版本新增。

### 相关参考 [#相关参考-16]

* [onRecorderInfoUpdated](/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderinfoupdated)
* [onRecorderStateChanged](/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderstatechanged)

<a id="class_imetadataobserver" />

## IMetadataObserver [#imetadataobserver]

用于实现元数据观察功能。

<a id="class_imetadataobserver__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在关键线程中实现该类中的所有回调方法。建议避免在关键线程中执行任何耗时操作。
  </CalloutDescription>
</CalloutContainer>

### 相关参考 [#相关参考-17]

* [getMaxMetadataSize](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_imetadataobserver_getmaxmetadatasize)
* [onMetadataReceived](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#callback_imetadataobserver_onmetadatareceived)
* [onReadyToSendMetadata](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#callback_imetadataobserver_onreadytosendmetadata)

<a id="class_imusiccontentcenter" />

## IAgoraMusicContentCenter [#iagoramusiccontentcenter]

IAgoraMusicContentCenter 提供用于管理和访问音乐内容中心的接口。

### 相关参考 [#相关参考-18]

* [createMusicPlayer](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_createmusicplayer)
* [destroy](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroy_imusiccontentcenter)
* [destroyMusicPlayer](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroymusicplayer)
* [getCaches](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getcaches)
* [getInternalSongCode](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getinternalsongcode)
* [getLyric](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getlyric)
* [getMusicCharts](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccharts)
* [getMusicCollectionByMusicChartId \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccollectionbymusicchartid)
* [getMusicCollectionByMusicChartId \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccollectionbymusicchartid2)
* [getSongSimpleInfo](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getsongsimpleinfo)
* [initialize](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_initialize_imusiccontentcenter)
* [isPreloaded](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_ispreloaded)
* [preload \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload)
* [preload \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload2)
* [registerEventHandler](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_registereventhandler_imusiccontentcenter)
* [removeCache](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_removecache)
* [renewToken](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_renewtoken_imusiccontentcenter)
* [searchMusic \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_searchmusic)
* [searchMusic \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_searchmusic2)
* [unregisterEventHandler](/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter)

<a id="class_imusiccontentcentereventhandler" />

## IMusicContentCenterEventHandler [#imusiccontentcentereventhandler]

用于处理音乐内容中心相关事件的接口。

### 相关参考 [#相关参考-19]

* [onLyricResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onlyricresult)
* [onMusicChartsResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult)
* [onMusicCollectionResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult)
* [onPreLoadEvent](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler)
* [onSongSimpleInfoResult](/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onsongsimpleinforesult)

<a id="class_imusicplayer" />

## IAgoraMusicPlayer [#iagoramusicplayer]

扩展 IMediaPlayer 接口，支持更多音乐播放功能。

### 相关参考 [#相关参考-20]

* [destroy](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_destroy_imusicplayer)
* [getPlaySrc \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_getplaysrc)
* [open \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open2_imusicplayer)
* [open \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open_imusicplayer)
* [setPlayMode](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_setplaymode)
* [stop \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_stop_imusicplayer)

<a id="class_irtcengine" />

## RtcEngine [#rtcengine]

调用该类的方法以使用声网 SDK 的全部功能。

<a id="class_irtcengine__detailed_desc" />

声网建议在同一线程中调用 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 的 API 方法，避免在多个线程中调用。该类在早期版本中名为 \`AgoraAudio\`，从 1.0 版本起更名为 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)。

### 相关参考 [#相关参考-21]

* [addExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_addextension)
* [addHandler](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_addhandler)
* [addVideoWatermark \\[1/3\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark1)
* [addVideoWatermark \\[2/3\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark2)
* [addVideoWatermark \\[3/3\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark3)
* [adjustAudioMixingPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingplayoutvolume)
* [adjustAudioMixingPublishVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingpublishvolume)
* [adjustAudioMixingVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingvolume)
* [adjustCustomAudioPlayoutVolume](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudioplayoutvolume)
* [adjustCustomAudioPublishVolume](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudiopublishvolume)
* [adjustPlaybackSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustplaybacksignalvolume)
* [adjustRecordingSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_adjustrecordingsignalvolume)
* [adjustUserPlaybackSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustuserplaybacksignalvolume)
* [clearVideoWatermarks](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_clearvideowatermarks)
* [complain](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_complain)
* [configRhythmPlayer](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_configrhythmplayer)
* [create \\[1/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_create)
* [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack)
* [createCustomVideoTrack](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack)
* [createDataStream \\[1/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream1)
* [createDataStream \\[2/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_createdatastream2)
* [createMediaPlayer](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_irtcengine_createmediaplayer)
* [createMediaRecorder](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_createmediarecorder)
* [createVideoEffectObject](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_createvideoeffectobject)
* [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1)
* [destroyCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_destroycustomaudiotrack)
* [destroyCustomVideoTrack](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_destroycustomvideotrack)
* [destroyMediaRecorder](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_destroymediarecorder)
* [destroyVideoEffectObject](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_destroyvideoeffectobject)
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
* [enableSpatialAudio](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_enablespatialaudio)
* [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo)
* [enableVideoImageSource](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/image-source#api_irtcengine_enablevideoimagesource)
* [enableVirtualBackground \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground)
* [enableVirtualBackground \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground2)
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
* [getFaceShapeAreaOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapeareaoptions)
* [getFaceShapeAreaOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapeareaoptions2)
* [getFaceShapeBeautyOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapebeautyoptions)
* [getFaceShapeBeautyOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapebeautyoptions2)
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
* [joinChannel \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel2)
* [joinChannelWithUserAccount \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannelwithuseraccount1)
* [joinChannelWithUserAccount \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannelwithuseraccount2)
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
* [playAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playalleffects)
* [playEffect \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect2)
* [playEffect \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playeffect3)
* [preloadChannel](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_preloadchannel)
* [preloadChannelWithUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_preloadchannelwithuseraccount)
* [preloadEffect \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_preloadeffect)
* [preloadEffect \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_preloadeffect2)
* [pullPlaybackAudioFrame \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe)
* [pullPlaybackAudioFrame \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pullaudioframe2)
* [pushExternalAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_pushaudioframe2)
* [pushExternalVideoFrameById \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe)
* [pushExternalVideoFrame \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe2)
* [pushExternalVideoFrameById \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe3)
* [pushExternalVideoFrame \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe4)
* [queryCameraFocalLengthCapability](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycamerafocallengthcapability)
* [queryCodecCapability](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycodeccapability)
* [queryDeviceScore](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_querydevicescore)
* [queryScreenCaptureCapability](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_queryscreencapturecapability)
* [rate](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate)
* [registerAudioEncodedFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver)
* [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver)
* [registerAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver)
* [registerExtension](/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_registerextension)
* [registerLocalUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount)
* [registerMediaMetadataObserver](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_registermediametadataobserver)
* [registerVideoEncodedFrameObserver](/zh-CN/api-reference/rtc/android/video/video-encoded#api_irtcengine_registervideoencodedframeobserver)
* [registerVideoFrameObserver](/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver)
* [destroy \\[1/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_release)
* [removeHandler](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_removehandler)
* [removeVideoWatermark](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_removevideowatermark)
* [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken)
* [resumeAllChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_resumeallchannelmediarelay)
* [resumeAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumealleffects)
* [resumeAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_resumeaudiomixing)
* [resumeEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_resumeeffect)
* [selectAudioTrack](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_selectaudiotrack)
* [sendCustomReportMessage](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_sendcustomreportmessage)
* [sendStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage)
* [setAdvancedAudioOptions](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setadvancedaudiooptions)
* [setAINSMode](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setainsmode)
* [setAudioEffectParameters](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectparameters)
* [setAudioEffectPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectpreset)
* [setAudioMixingDualMonoMode](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingdualmonomode)
* [setAudioMixingPitch](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingpitch)
* [setAudioMixingPlaybackSpeed](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingplaybackspeed)
* [setAudioMixingPosition](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingposition)
* [setAudioProfile \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile)
* [setAudioProfile \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioprofile2)
* [setAudioScenario](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario)
* [setAVSyncSource](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setavsyncsource)
* [setBeautyEffectOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions)
* [setBeautyEffectOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions2)
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
* [setExternalAudioSource \\[1/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource)
* [setExternalAudioSource \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosource2)
* [setExternalMediaProjection](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_setexternalmediaprojection)
* [setExternalRemoteEglContext](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalremoteeglcontext)
* [setExternalVideoSource](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource)
* [setFaceShapeAreaOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions)
* [setFaceShapeAreaOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions2)
* [setFaceShapeBeautyOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions)
* [setFaceShapeBeautyOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions2)
* [setFilterEffectOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfiltereffectoptions)
* [setFilterEffectOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfiltereffectoptions2)
* [setHeadphoneEQParameters](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqparameters)
* [setHeadphoneEQPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqpreset)
* [setInEarMonitoringVolume](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_setinearmonitoringvolume)
* [setLocalAccessPoint](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlocalaccesspoint)
* [setLocalRenderMode \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode1)
* [setLocalRenderMode \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendermode2)
* [setLocalRenderTargetFps](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendertargetfps)
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
* [setPlaybackAudioFrameBeforeMixingParameters \\[2/2\\]](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframebeforemixingparameters1)
* [setPlaybackAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframeparameters)
* [setRecordingAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setrecordingaudioframeparameters)
* [setRemoteDefaultVideoStreamType \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype)
* [setRemoteDefaultVideoStreamType \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype2)
* [setRemoteRenderMode](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setremoterendermode2)
* [setRemoteRenderTargetFps](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setremoterendertargetfps)
* [setRemoteSubscribeFallbackOption \\[1/2\\]](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption)
* [setRemoteSubscribeFallbackOption \\[2/2\\]](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setremotesubscribefallbackoption2)
* [setRemoteUserSpatialAudioParams](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setremoteuserspatialaudioparams)
* [setRemoteVideoStreamType \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype)
* [setRemoteVideoStreamType \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideostreamtype2)
* [setRemoteVideoSubscriptionOptions](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotevideosubscriptionoptions)
* [setRemoteVoicePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengine_setremotevoiceposition)
* [setRouteInCommunicationMode](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setrouteincommunicationmode)
* [setScreenCaptureScenario](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_setscreencapturescenario)
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
* [startAudioRecording \\[1/2\\]](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_startaudiorecording1)
* [startAudioRecording \\[2/2\\]](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_startaudiorecording3)
* [startCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture)
* [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3)
* [startLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest)
* [startLocalAudioMixer](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer)
* [startLocalVideoTranscoder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_startlocalvideotranscoder)
* [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing)
* [startOrUpdateChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_startorupdatechannelmediarelay)
* [startPlaybackDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startplaybackdevicetest)
* [startPreview \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview)
* [startPreview \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_startpreview2)
* [startRecordingDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startrecordingdevicetest)
* [startRhythmPlayer](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_startrhythmplayer)
* [startRtmpStreamWithoutTranscoding](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithouttranscoding)
* [startRtmpStreamWithTranscoding](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding)
* [startScreenCapture](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture)
* [stopAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopalleffects)
* [stopAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_stopaudiomixing)
* [stopAudioRecording](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_stopaudiorecording)
* [stopCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_stopcameracapture)
* [stopChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_stopchannelmediarelay)
* [stopEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stopechotest)
* [stopEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_stopeffect)
* [stopLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_stoplastmileprobetest)
* [stopLocalAudioMixer](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_stoplocalaudiomixer)
* [stopLocalVideoTranscoder](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_stoplocalvideotranscoder)
* [stopPlaybackDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stopplaybackdevicetest)
* [stopPreview \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview)
* [stopPreview \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_stoppreview2)
* [stopRecordingDeviceTest](/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stoprecordingdevicetest)
* [stopRhythmPlayer](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#api_irtcengine_stoprhythmplayer)
* [stopRtmpStream](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_stoprtmpstream)
* [stopScreenCapture](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_stopscreencapture)
* [switchCamera \\[1/2\\]](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera)
* [switchCamera \\[2/2\\]](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_switchcamera2)
* [takeSnapshot \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_takesnapshot)
* [takeSnapshot \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_takesnapshot2)
* [unloadEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_unloadeffect)
* [unRegisterAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_unregisteraudiospectrumobserver)
* [unregisterMediaMetadataObserver](/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_irtcengine_unregistermediametadataobserver)
* [updateChannelMediaOptions](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions)
* [updateLocalAudioMixerConfiguration](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_updatelocalaudiomixerconfiguration)
* [updateLocalTranscoderConfiguration](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_updatelocaltranscoderconfiguration)
* [updatePreloadChannelToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatepreloadchanneltoken)
* [updateRtmpTranscoding](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_updatertmptranscoding)
* [updateScreenCaptureParameters](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_updatescreencaptureparameters)

<a id="class_irtcengineeventhandler" />

## IRtcEngineEventHandler [#irtcengineeventhandler]

封装 SDK 向应用层发送事件回调的方法。

<a id="class_irtcengineeventhandler__detailed_desc" />

[IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler) 是 SDK 用于向应用层发送事件回调的接口类。你可以继承该类以接收所需的事件通知。该接口中的所有方法均为默认空实现，你可以根据需要选择性地重写部分方法。为确保 SDK 正常运行，建议在回调方法中避免执行耗时操作或调用阻塞 API，例如 \`SendMessage\`。

### 相关参考 [#相关参考-22]

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
* [onErrorWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionerrorwithcontext)
* [onEventWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensioneventwithcontext)
* [onStartedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstartedwithcontext)
* [onStoppedWithContext](/zh-CN/api-reference/rtc/android/extensions#callback_irtcengineeventhandler_onextensionstoppedwithcontext)
* [onFacePositionChanged](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/face-detection#callback_irtcengineeventhandler_onfacepositionchanged)
* [onFirstLocalAudioFramePublished](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstlocalaudioframepublished)
* [onFirstLocalVideoFrame](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframe)
* [onFirstLocalVideoFramePublished](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstlocalvideoframepublished)
* [onFirstRemoteAudioDecoded](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudiodecoded)
* [onFirstRemoteAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudioframe)
* [onFirstRemoteVideoDecoded](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideodecoded)
* [onFirstRemoteVideoFrame](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideoframe)
* [onJoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess)
* [onLastmileProbeResult](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmileproberesult)
* [onLastmileQuality](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmilequality)
* [onLeaveChannel](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onleavechannel)
* [onLocalAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostatechanged)
* [onLocalAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostats)
* [onLocalUserRegistered](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered)
* [onLocalVideoEvent](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideoevent)
* [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged)
* [onLocalVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostats)
* [onLocalVideoTranscoderError](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#callback_irtcengineeventhandler_onlocalvideotranscodererror)
* [onMultipathStats](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onmultipathstats)
* [onNetworkQuality](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworkquality)
* [onNetworkTypeChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onnetworktypechanged)
* [onPermissionError](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissionerror)
* [onPermissionGranted](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissiongranted)
* [onProxyConnected](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onproxyconnected)
* [onRejoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess)
* [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged)
* [onRemoteAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats)
* [onRemoteAudioTransportStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiotransportstats)
* [onRemoteSubscribeFallbackToAudioOnly](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly)
* [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged)
* [onRemoteVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats)
* [onRemoteVideoTransportStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideotransportstats)
* [onRenewTokenResult](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrenewtokenresult)
* [onRequestToken](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrequesttoken)
* [onRhythmPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/rhythmplayer#callback_irtcengineeventhandler_onrhythmplayerstatechanged)
* [onRtcStats](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrtcstats)
* [onRtmpStreamingEvent](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingevent)
* [onRtmpStreamingStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged)
* [onSnapshotTaken](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken)
* [onStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage)
* [onStreamMessageError](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror)
* [onTokenPrivilegeWillExpire](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_ontokenprivilegewillexpire)
* [onTranscodedStreamLayoutInfo](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo)
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
* [onVideoRenderingTracingResult](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult)
* [onVideoSizeChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideosizechanged)
* [onVideoStopped](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideostopped)
* [onVideoSubscribeStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onvideosubscribestatechanged)

<a id="class_irtcengineex" />

## RtcEngineEx [#rtcengineex]

扩展 RtcEngine 接口的功能。

### 相关参考 [#相关参考-23]

* [addVideoWatermarkEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex)
* [addVideoWatermarkEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex1)
* [adjustUserPlaybackSignalVolumeEx](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_adjustuserplaybacksignalvolumeex)
* [clearVideoWatermarkEx](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_clearvideowatermarkex)
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
* [playEffectEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_playeffectex)
* [playEffectEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_playeffectex2)
* [preloadEffectEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_preloadeffectex)
* [preloadEffectEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_preloadeffectex2)
* [removeVideoWatermarkEx](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_removevideowatermarkex)
* [resumeAllChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_resumeallchannelmediarelayex)
* [sendCustomReportMessageEx](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengineex_sendcustomreportmessageex)
* [sendStreamMessageEx](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_sendstreammessageex)
* [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex)
* [setRemoteRenderModeEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setremoterendermodeex)
* [setRemoteVideoStreamTypeEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex)
* [setRemoteVideoStreamTypeEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex2)
* [setRemoteVideoSubscriptionOptionsEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideosubscriptionoptionsex)
* [setRemoteVoicePositionEx](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/sound-position#api_irtcengineex_setremotevoicepositionex)
* [setSubscribeAudioAllowlistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioallowlistex)
* [setSubscribeAudioBlocklistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioblocklistex)
* [setSubscribeVideoAllowlistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoallowlistex)
* [setSubscribeVideoBlocklistEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoblocklistex)
* [setupRemoteVideoEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setupremotevideoex)
* [setVideoEncoderConfigurationEx](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengineex_setvideoencoderconfigurationex)
* [startMediaRenderingTracingEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_startmediarenderingtracingex)
* [startOrUpdateChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_startorupdatechannelmediarelayex)
* [startRtmpStreamWithoutTranscodingEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_startrtmpstreamwithouttranscodingex)
* [startRtmpStreamWithTranscodingEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_startrtmpstreamwithtranscodingex)
* [stopChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_stopchannelmediarelayex)
* [stopRtmpStreamEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_stoprtmpstreamex)
* [takeSnapshotEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_takesnapshotex)
* [takeSnapshotEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_takesnapshotex2)
* [updateChannelMediaOptionsEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_updatechannelmediaoptionsex)
* [updateRtmpTranscodingEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_updatertmptranscodingex)

<a id="class_irtcenginereleasecallback" />

## IRtcEngineReleaseCallback [#irtcenginereleasecallback]

用于异步销毁引擎。

<a id="class_irtcenginereleasecallback__detailed_desc" />

#### \`自从\` [#自从-5]

自 v4.6.0 版本新增。

### 相关参考 [#相关参考-24]

* [onEngineReleased](/zh-CN/api-reference/rtc/android/initialize#callback_irtcenginereleasecallback_onenginereleased)

<a id="class_ivideoeffectobject" />

## IVideoEffectObject [#ivideoeffectobject]

用于管理和配置视频特效功能，例如美颜、风格妆容和滤镜。

<a id="class_ivideoeffectobject__detailed_desc" />

#### \`自从\` [#自从-6]

自 v4.6.0 版本新增。

### 相关参考 [#相关参考-25]

* [addOrUpdateVideoEffect](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_addorupdatevideoeffect)
* [getVideoEffectBoolParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectboolparam)
* [getVideoEffectFloatParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectfloatparam)
* [getVideoEffectIntParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectintparam)
* [performVideoEffectAction](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_performvideoeffectaction)
* [removeVideoEffect](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_removevideoeffect)
* [setVideoEffectBoolParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectboolparam)
* [setVideoEffectFloatParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectfloatparam)
* [setVideoEffectIntParam](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectintparam)

<a id="class_ivideoencodedframeobserver" />

## IVideoEncodedFrameObserver [#ivideoencodedframeobserver]

用于监听编码后的视频帧。

### 相关参考 [#相关参考-26]

* [onEncodedVideoFrameReceived](/zh-CN/api-reference/rtc/android/video/video-encoded#callback_ivideoencodedframeobserver_onencodedvideoframereceived)

<a id="class_ivideoframeobserver" />

## IVideoFrameObserver [#ivideoframeobserver]

用于处理视频帧的回调。

<a id="class_ivideoframeobserver__detailed_desc" />

你可以通过实现 [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver) 接口中的方法，接收并处理本地设备采集或远端用户发送的视频帧。

### 相关参考 [#相关参考-27]

* [getMirrorApplied](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getmirrorapplied)
* [getObservedFramePosition](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getobservedframeposition)
* [getRotationApplied](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getrotationapplied)
* [getVideoFormatPreference](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoformatpreference)
* [getVideoFrameProcessMode](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode)
* [onCaptureVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_oncapturevideoframe)
* [onPreEncodeVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onpreencodevideoframe)
* [onRenderVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onrendervideoframe)

<a id="class_player" />

## Player [#player]

用于播放 URL 资源。

<a id="class_player__detailed_desc" />

#### \`自从\` [#自从-7]

自 v4.4.0 版本新增。

### 相关参考 [#相关参考-28]

* [getConfigs \\[2/3\\]](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getconfigs_player)
* [getInfo](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getinfo)
* [getPosition](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getposition)
* [getStats](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getstats)
* [muteAudio](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_muteaudio)
* [muteVideo](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_mutevideo)
* [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl)
* [pause](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_pause_player)
* [play](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player)
* [Player](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player)
* [preloadWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_preloadwithurl)
* [registerObserver](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player)
* [seek](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_seek)
* [setCanvas](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_setcanvas)
* [setConfigs \\[2/3\\]](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_setconfigs_player)
* [stop](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player)
* [switchWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_switchwithurl)
* [unregisterObserver](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_unregisterobserver_player)

<a id="class_playerconfig" />

## PlayerConfig [#playerconfig]

用于配置媒体播放器选项。

<a id="class_playerconfig__detailed_desc" />

#### \`自从\` [#自从-8]

自 v4.4.0 版本新增。

### 相关参考 [#相关参考-29]

* [getAbrFallbackLayer](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getabrfallbacklayer)
* [getAbrSubscriptionLayer](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getabrsubscriptionlayer)
* [getAutoPlay](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getautoplay)
* [getLoopCount](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getloopcount)
* [getPlaybackSpeed](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getplaybackspeed)
* [getPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getplayoutvolume)
* [setAbrFallbackLayer](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setabrfallbacklayer)
* [setAbrSubscriptionLayer](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setabrsubscriptionlayer)
* [setAutoPlay](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setautoplay)
* [setLoopCount](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setloopcount)
* [setPlaybackSpeed](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setplaybackspeed)
* [setPlayoutVolume](/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setplayoutvolume)

<a id="class_playergetstatscallback" />

## PlayerGetStatsCallback [#playergetstatscallback]

用于获取播放统计信息的回调接口。

<a id="class_playergetstatscallback__detailed_desc" />

#### \`自从\` [#自从-9]

自 v4.4.0 版本新增。

### 相关参考 [#相关参考-30]

* [onResult](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playergetstatscallback_onresult_playergetstatscallback)

<a id="class_playerobserver" />

## PlayerObserver [#playerobserver]

PlayerObserver 用于接收播放器的事件回调。

<a id="class_playerobserver__detailed_desc" />

#### \`自从\` [#自从-10]

自 v4.4.0 版本新增。

### 相关参考 [#相关参考-31]

* [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onaudiovolumeindication_playerobserver)
* [onEvent](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onevent)
* [onMetadata \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onmetadata_playerobserver)
* [onPlayerInfoUpdated \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onplayerinfoupdated_playerobserver)
* [onPositionChanged](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onpositionchanged_playerobserver)
* [onResolutionChanged](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onresolutionchanged)
* [onStateChanged](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged)

<a id="class_rte" />

## Rte [#rte]

Rte 类是声网实时互动 SDK 的基础接口。

<a id="class_rte__detailed_desc" />

#### \`自从\` [#自从-11]

自 v4.4.0 版本新增。

### 相关参考 [#相关参考-32]

* [destroy](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_destroy_rte)
* [getConfigs \\[1/3\\]](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_getconfigs_rte)
* [getFromBridge](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_getfrombridge)
* [initMediaEngine](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine)
* [Rte](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_rte_rte)
* [setConfigs \\[1/3\\]](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_setconfigs_rte)

<a id="class_rteplayerinfo" />

## PlayerInfo [#playerinfo]

包含播放器和媒体流的信息。

<a id="class_rteplayerinfo__detailed_desc" />

#### \`自从\` [#自从-12]

自 v4.4.0 版本新增。

### 相关参考 [#相关参考-33]

* [abrSubscriptionLayer](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_abrsubscriptionlayer)
* [audioBitsPerSample](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_audiobitspersample)
* [audioChannels](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_audiochannels)
* [audioSampleRate](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_audiosamplerate)
* [currentUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_currenturl)
* [duration](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_duration)
* [hasAudio](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_hasaudio)
* [hasVideo](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_hasvideo)
* [isAudioMuted](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_isaudiomuted)
* [isVideoMuted](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_isvideomuted)
* [state](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_state)
* [streamCount](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_streamcount)
* [videoHeight](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_videoheight)
* [videoWidth](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_videowidth)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本页列出 Android 所有的接口类以及其中包含的 API。"
  }, {
    heading: "asynccallback",
    content: "用于处理异步操作结果的回调。"
  }, {
    heading: "相关参考",
    content: "onResult"
  }, {
    heading: "canvas",
    content: "用于设置视频渲染视图。"
  }, {
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "相关参考-1",
    content: "addView"
  }, {
    heading: "相关参考-1",
    content: "Canvas"
  }, {
    heading: "相关参考-1",
    content: "getConfigs \\[3/3]"
  }, {
    heading: "相关参考-1",
    content: "removeView"
  }, {
    heading: "相关参考-1",
    content: "setConfigs \\[3/3]"
  }, {
    heading: "canvasconfig",
    content: "用于配置播放器的视频渲染。"
  }, {
    heading: "自从-1",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "相关参考-2",
    content: "getVideoMirrorMode"
  }, {
    heading: "相关参考-2",
    content: "getVideoRenderMode"
  }, {
    heading: "相关参考-2",
    content: "setVideoMirrorMode"
  }, {
    heading: "相关参考-2",
    content: "setVideoRenderMode"
  }, {
    heading: "error",
    content: "用于获取错误码和错误信息。"
  }, {
    heading: "自从-2",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "相关参考-3",
    content: "code"
  }, {
    heading: "相关参考-3",
    content: "message"
  }, {
    heading: "iaudioencodedframeobserver",
    content: "用于监听音频编码帧的接口。"
  }, {
    heading: "相关参考-4",
    content: "onMixedAudioEncodedFrame"
  }, {
    heading: "相关参考-4",
    content: "onPlaybackAudioEncodedFrame"
  }, {
    heading: "相关参考-4",
    content: "onRecordAudioEncodedFrame"
  }, {
    heading: "iaudioframeobserver",
    content: "用于观测和处理音频帧的接口。"
  }, {
    heading: "相关参考-5",
    content: "getEarMonitoringAudioParams"
  }, {
    heading: "相关参考-5",
    content: "getMixedAudioParams"
  }, {
    heading: "相关参考-5",
    content: "getObservedAudioFramePosition"
  }, {
    heading: "相关参考-5",
    content: "getPlaybackAudioParams"
  }, {
    heading: "相关参考-5",
    content: "getRecordAudioParams"
  }, {
    heading: "相关参考-5",
    content: "onEarMonitoringAudioFrame"
  }, {
    heading: "相关参考-5",
    content: "onMixedAudioFrame"
  }, {
    heading: "相关参考-5",
    content: "onPlaybackAudioFrame"
  }, {
    heading: "相关参考-5",
    content: "onPlaybackAudioFrameBeforeMixing"
  }, {
    heading: "相关参考-5",
    content: "onRecordAudioFrame"
  }, {
    heading: "iaudiospectrumobserver",
    content: "用于音频频谱观测的接口。"
  }, {
    heading: "相关参考-6",
    content: "onLocalAudioSpectrum"
  }, {
    heading: "相关参考-6",
    content: "onRemoteAudioSpectrum"
  }, {
    heading: "ibasespatialaudioengine",
    content: "IBaseSpatialAudioEngine：基础空间音效引擎接口。"
  }, {
    heading: "相关参考-7",
    content: "clearRemotePositions"
  }, {
    heading: "相关参考-7",
    content: "muteAllRemoteAudioStreams"
  }, {
    heading: "相关参考-7",
    content: "muteLocalAudioStream"
  }, {
    heading: "相关参考-7",
    content: "muteRemoteAudioStream"
  }, {
    heading: "相关参考-7",
    content: "setAudioRecvRange"
  }, {
    heading: "相关参考-7",
    content: "setDistanceUnit"
  }, {
    heading: "相关参考-7",
    content: "setMaxAudioRecvCount"
  }, {
    heading: "相关参考-7",
    content: "setPlayerAttenuation"
  }, {
    heading: "相关参考-7",
    content: "setZones"
  }, {
    heading: "相关参考-7",
    content: "updatePlayerPositionInfo"
  }, {
    heading: "相关参考-7",
    content: "updateSelfPosition"
  }, {
    heading: "ilocalspatialaudioengine",
    content: "ILocalSpatialAudioEngine 是本地空间音效引擎接口。"
  }, {
    heading: "相关参考-8",
    content: "create"
  }, {
    heading: "相关参考-8",
    content: "initialize"
  }, {
    heading: "相关参考-8",
    content: "destroy"
  }, {
    heading: "相关参考-8",
    content: "removeRemotePosition"
  }, {
    heading: "相关参考-8",
    content: "setRemoteAudioAttenuation"
  }, {
    heading: "相关参考-8",
    content: "updateRemotePosition"
  }, {
    heading: "imediaextensionobserver",
    content: "IMediaExtensionObserver 接口用于监听媒体扩展相关的事件。"
  }, {
    heading: "imediaplayer",
    content: "IMediaPlayer 接口用于实现媒体播放功能。"
  }, {
    heading: "相关参考-9",
    content: "adjustPlayoutVolume"
  }, {
    heading: "相关参考-9",
    content: "adjustPublishSignalVolume"
  }, {
    heading: "相关参考-9",
    content: "destroy"
  }, {
    heading: "相关参考-9",
    content: "getAudioBufferDelay"
  }, {
    heading: "相关参考-9",
    content: "getDuration"
  }, {
    heading: "相关参考-9",
    content: "getMediaPlayerId"
  }, {
    heading: "相关参考-9",
    content: "getMute"
  }, {
    heading: "相关参考-9",
    content: "getPlayoutVolume"
  }, {
    heading: "相关参考-9",
    content: "getPlayPosition"
  }, {
    heading: "相关参考-9",
    content: "getPlaySrc \\[1/2]"
  }, {
    heading: "相关参考-9",
    content: "getPublishSignalVolume"
  }, {
    heading: "相关参考-9",
    content: "getState"
  }, {
    heading: "相关参考-9",
    content: "getStreamCount"
  }, {
    heading: "相关参考-9",
    content: "getStreamInfo"
  }, {
    heading: "相关参考-9",
    content: "mute"
  }, {
    heading: "相关参考-9",
    content: "open \\[1/2]"
  }, {
    heading: "相关参考-9",
    content: "open \\[2/2]"
  }, {
    heading: "相关参考-9",
    content: "openWithMediaSource"
  }, {
    heading: "相关参考-9",
    content: "pause"
  }, {
    heading: "相关参考-9",
    content: "play"
  }, {
    heading: "相关参考-9",
    content: "playPreloadedSrc"
  }, {
    heading: "相关参考-9",
    content: "preloadSrc"
  }, {
    heading: "相关参考-9",
    content: "registerAudioFrameObserver"
  }, {
    heading: "相关参考-9",
    content: "registerPlayerObserver"
  }, {
    heading: "相关参考-9",
    content: "registerVideoFrameObserver"
  }, {
    heading: "相关参考-9",
    content: "resume"
  }, {
    heading: "相关参考-9",
    content: "seek"
  }, {
    heading: "相关参考-9",
    content: "selectAudioTrack"
  }, {
    heading: "相关参考-9",
    content: "selectMultiAudioTrack"
  }, {
    heading: "相关参考-9",
    content: "setAudioDualMonoMode"
  }, {
    heading: "相关参考-9",
    content: "setAudioPitch"
  }, {
    heading: "相关参考-9",
    content: "setLoopCount"
  }, {
    heading: "相关参考-9",
    content: "setPlaybackSpeed"
  }, {
    heading: "相关参考-9",
    content: "setPlayerOption"
  }, {
    heading: "相关参考-9",
    content: "setPlayerOptionString"
  }, {
    heading: "相关参考-9",
    content: "setVideoRenderMode"
  }, {
    heading: "相关参考-9",
    content: "setSpatialAudioParams"
  }, {
    heading: "相关参考-9",
    content: "setView"
  }, {
    heading: "相关参考-9",
    content: "stop \\[1/2]"
  }, {
    heading: "相关参考-9",
    content: "switchSrc"
  }, {
    heading: "相关参考-9",
    content: "unloadSrc"
  }, {
    heading: "相关参考-9",
    content: "unRegisterPlayerObserver"
  }, {
    heading: "imediaplayeraudioframeobserver",
    content: "用于观测媒体播放器的音频帧。"
  }, {
    heading: "相关参考-10",
    content: "onFrame"
  }, {
    heading: "imediaplayercachemanager",
    content: "用于管理媒体播放器的缓存。"
  }, {
    heading: "相关参考-11",
    content: "enableAutoRemoveCache"
  }, {
    heading: "相关参考-11",
    content: "getCacheDir"
  }, {
    heading: "相关参考-11",
    content: "getCacheFileCount"
  }, {
    heading: "相关参考-11",
    content: "getMaxCacheFileCount"
  }, {
    heading: "相关参考-11",
    content: "getMaxCacheFileSize"
  }, {
    heading: "相关参考-11",
    content: "getMediaPlayerCacheManager"
  }, {
    heading: "相关参考-11",
    content: "removeAllCaches"
  }, {
    heading: "相关参考-11",
    content: "removeCacheByUri"
  }, {
    heading: "相关参考-11",
    content: "removeOldCache"
  }, {
    heading: "相关参考-11",
    content: "setCacheDir"
  }, {
    heading: "相关参考-11",
    content: "setMaxCacheFileCount"
  }, {
    heading: "相关参考-11",
    content: "setMaxCacheFileSize"
  }, {
    heading: "imediaplayercustomdataprovider",
    content: "IMediaPlayerCustomDataProvider 接口用于为媒体播放器提供自定义数据源。"
  }, {
    heading: "相关参考-12",
    content: "onReadData"
  }, {
    heading: "相关参考-12",
    content: "onSeek"
  }, {
    heading: "imediaplayerobserver",
    content: "用于监听媒体播放器状态变化的接口。"
  }, {
    heading: "相关参考-13",
    content: "onAudioVolumeIndication"
  }, {
    heading: "相关参考-13",
    content: "onMetaData"
  }, {
    heading: "相关参考-13",
    content: "onPlayBufferUpdated"
  }, {
    heading: "相关参考-13",
    content: "onPlayerCacheStats"
  }, {
    heading: "相关参考-13",
    content: "onPlayerEvent"
  }, {
    heading: "相关参考-13",
    content: "onPlayerInfoUpdated"
  }, {
    heading: "相关参考-13",
    content: "onPlayerPlaybackStats"
  }, {
    heading: "相关参考-13",
    content: "onPlayerStateChanged"
  }, {
    heading: "相关参考-13",
    content: "onPlayerSrcInfoChanged"
  }, {
    heading: "相关参考-13",
    content: "onPositionChanged"
  }, {
    heading: "相关参考-13",
    content: "onPreloadEvent"
  }, {
    heading: "imediaplayervideoframeobserver",
    content: "用于观测媒体播放器的视频帧。"
  }, {
    heading: "相关参考-14",
    content: "onFrame"
  }, {
    heading: "agoramediarecorder",
    content: "用于录制客户端的音频和视频。"
  }, {
    heading: "自从-3",
    content: "自 v3.5.2 版本新增。"
  }, {
    heading: "自从-3",
    content: "AgoraMediaRecorder 可录制以下内容："
  }, {
    heading: "自从-3",
    content: "本地麦克风采集并由 SDK 编码为 AAC 格式的音频。"
  }, {
    heading: "自从-3",
    content: "本地摄像头采集并由 SDK 编码的视频。"
  }, {
    heading: "自从-3",
    content: "在 `COMMUNICATION` 频道场景下，当频道中存在使用 v3.0.0 之前版本 SDK 的用户时，该功能不可用。"
  }, {
    heading: "相关参考-15",
    content: "setMediaRecorderObserver"
  }, {
    heading: "相关参考-15",
    content: "startRecording"
  }, {
    heading: "相关参考-15",
    content: "stopRecording"
  }, {
    heading: "imediarecordercallback",
    content: "用于设置媒体录制的回调方法。"
  }, {
    heading: "自从-4",
    content: "自 v4.0.0 版本新增。"
  }, {
    heading: "相关参考-16",
    content: "onRecorderInfoUpdated"
  }, {
    heading: "相关参考-16",
    content: "onRecorderStateChanged"
  }, {
    heading: "imetadataobserver",
    content: "用于实现元数据观察功能。"
  }, {
    heading: "imetadataobserver",
    content: "请在关键线程中实现该类中的所有回调方法。建议避免在关键线程中执行任何耗时操作。"
  }, {
    heading: "相关参考-17",
    content: "getMaxMetadataSize"
  }, {
    heading: "相关参考-17",
    content: "onMetadataReceived"
  }, {
    heading: "相关参考-17",
    content: "onReadyToSendMetadata"
  }, {
    heading: "iagoramusiccontentcenter",
    content: "IAgoraMusicContentCenter 提供用于管理和访问音乐内容中心的接口。"
  }, {
    heading: "相关参考-18",
    content: "createMusicPlayer"
  }, {
    heading: "相关参考-18",
    content: "destroy"
  }, {
    heading: "相关参考-18",
    content: "destroyMusicPlayer"
  }, {
    heading: "相关参考-18",
    content: "getCaches"
  }, {
    heading: "相关参考-18",
    content: "getInternalSongCode"
  }, {
    heading: "相关参考-18",
    content: "getLyric"
  }, {
    heading: "相关参考-18",
    content: "getMusicCharts"
  }, {
    heading: "相关参考-18",
    content: "getMusicCollectionByMusicChartId \\[1/2]"
  }, {
    heading: "相关参考-18",
    content: "getMusicCollectionByMusicChartId \\[2/2]"
  }, {
    heading: "相关参考-18",
    content: "getSongSimpleInfo"
  }, {
    heading: "相关参考-18",
    content: "initialize"
  }, {
    heading: "相关参考-18",
    content: "isPreloaded"
  }, {
    heading: "相关参考-18",
    content: "preload \\[1/2]"
  }, {
    heading: "相关参考-18",
    content: "preload \\[2/2]"
  }, {
    heading: "相关参考-18",
    content: "registerEventHandler"
  }, {
    heading: "相关参考-18",
    content: "removeCache"
  }, {
    heading: "相关参考-18",
    content: "renewToken"
  }, {
    heading: "相关参考-18",
    content: "searchMusic \\[1/2]"
  }, {
    heading: "相关参考-18",
    content: "searchMusic \\[2/2]"
  }, {
    heading: "相关参考-18",
    content: "unregisterEventHandler"
  }, {
    heading: "imusiccontentcentereventhandler",
    content: "用于处理音乐内容中心相关事件的接口。"
  }, {
    heading: "相关参考-19",
    content: "onLyricResult"
  }, {
    heading: "相关参考-19",
    content: "onMusicChartsResult"
  }, {
    heading: "相关参考-19",
    content: "onMusicCollectionResult"
  }, {
    heading: "相关参考-19",
    content: "onPreLoadEvent"
  }, {
    heading: "相关参考-19",
    content: "onSongSimpleInfoResult"
  }, {
    heading: "iagoramusicplayer",
    content: "扩展 IMediaPlayer 接口，支持更多音乐播放功能。"
  }, {
    heading: "相关参考-20",
    content: "destroy"
  }, {
    heading: "相关参考-20",
    content: "getPlaySrc \\[2/2]"
  }, {
    heading: "相关参考-20",
    content: "open \\[2/2]"
  }, {
    heading: "相关参考-20",
    content: "open \\[1/2]"
  }, {
    heading: "相关参考-20",
    content: "setPlayMode"
  }, {
    heading: "相关参考-20",
    content: "stop \\[2/2]"
  }, {
    heading: "rtcengine",
    content: "调用该类的方法以使用声网 SDK 的全部功能。"
  }, {
    heading: "rtcengine",
    content: "声网建议在同一线程中调用 RtcEngine 的 API 方法，避免在多个线程中调用。该类在早期版本中名为 `AgoraAudio`，从 1.0 版本起更名为 RtcEngine。"
  }, {
    heading: "相关参考-21",
    content: "addExtension"
  }, {
    heading: "相关参考-21",
    content: "addHandler"
  }, {
    heading: "相关参考-21",
    content: "addVideoWatermark \\[1/3]"
  }, {
    heading: "相关参考-21",
    content: "addVideoWatermark \\[2/3]"
  }, {
    heading: "相关参考-21",
    content: "addVideoWatermark \\[3/3]"
  }, {
    heading: "相关参考-21",
    content: "adjustAudioMixingPlayoutVolume"
  }, {
    heading: "相关参考-21",
    content: "adjustAudioMixingPublishVolume"
  }, {
    heading: "相关参考-21",
    content: "adjustAudioMixingVolume"
  }, {
    heading: "相关参考-21",
    content: "adjustCustomAudioPlayoutVolume"
  }, {
    heading: "相关参考-21",
    content: "adjustCustomAudioPublishVolume"
  }, {
    heading: "相关参考-21",
    content: "adjustPlaybackSignalVolume"
  }, {
    heading: "相关参考-21",
    content: "adjustRecordingSignalVolume"
  }, {
    heading: "相关参考-21",
    content: "adjustUserPlaybackSignalVolume"
  }, {
    heading: "相关参考-21",
    content: "clearVideoWatermarks"
  }, {
    heading: "相关参考-21",
    content: "complain"
  }, {
    heading: "相关参考-21",
    content: "configRhythmPlayer"
  }, {
    heading: "相关参考-21",
    content: "create \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "createCustomAudioTrack"
  }, {
    heading: "相关参考-21",
    content: "createCustomVideoTrack"
  }, {
    heading: "相关参考-21",
    content: "createDataStream \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "createDataStream \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "createMediaPlayer"
  }, {
    heading: "相关参考-21",
    content: "createMediaRecorder"
  }, {
    heading: "相关参考-21",
    content: "createVideoEffectObject"
  }, {
    heading: "相关参考-21",
    content: "destroy \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "destroyCustomAudioTrack"
  }, {
    heading: "相关参考-21",
    content: "destroyCustomVideoTrack"
  }, {
    heading: "相关参考-21",
    content: "destroyMediaRecorder"
  }, {
    heading: "相关参考-21",
    content: "destroyVideoEffectObject"
  }, {
    heading: "相关参考-21",
    content: "disableAudio"
  }, {
    heading: "相关参考-21",
    content: "disableAudioSpectrumMonitor"
  }, {
    heading: "相关参考-21",
    content: "disableVideo"
  }, {
    heading: "相关参考-21",
    content: "enableAudio"
  }, {
    heading: "相关参考-21",
    content: "enableAudioSpectrumMonitor"
  }, {
    heading: "相关参考-21",
    content: "enableAudioVolumeIndication"
  }, {
    heading: "相关参考-21",
    content: "enableContentInspect"
  }, {
    heading: "相关参考-21",
    content: "enableCustomAudioLocalPlayback"
  }, {
    heading: "相关参考-21",
    content: "enableDualStreamMode \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "enableDualStreamMode \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "enableEncryption"
  }, {
    heading: "相关参考-21",
    content: "enableExtension"
  }, {
    heading: "相关参考-21",
    content: "enableFaceDetection"
  }, {
    heading: "相关参考-21",
    content: "enableInEarMonitoring \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "enableInEarMonitoring \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "enableInstantMediaRendering"
  }, {
    heading: "相关参考-21",
    content: "enableLocalAudio"
  }, {
    heading: "相关参考-21",
    content: "enableLocalVideo"
  }, {
    heading: "相关参考-21",
    content: "enableSoundPositionIndication"
  }, {
    heading: "相关参考-21",
    content: "enableSpatialAudio"
  }, {
    heading: "相关参考-21",
    content: "enableVideo"
  }, {
    heading: "相关参考-21",
    content: "enableVideoImageSource"
  }, {
    heading: "相关参考-21",
    content: "enableVirtualBackground \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "enableVirtualBackground \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "enableVoiceAITuner"
  }, {
    heading: "相关参考-21",
    content: "enableWebSdkInteroperability"
  }, {
    heading: "相关参考-21",
    content: "getAudioDeviceInfo"
  }, {
    heading: "相关参考-21",
    content: "getAudioEffectManager"
  }, {
    heading: "相关参考-21",
    content: "getAudioMixingCurrentPosition"
  }, {
    heading: "相关参考-21",
    content: "getAudioMixingDuration"
  }, {
    heading: "相关参考-21",
    content: "getAudioMixingPlayoutVolume"
  }, {
    heading: "相关参考-21",
    content: "getAudioMixingPublishVolume"
  }, {
    heading: "相关参考-21",
    content: "getAudioTrackCount"
  }, {
    heading: "相关参考-21",
    content: "getCallId"
  }, {
    heading: "相关参考-21",
    content: "getCameraMaxZoomFactor"
  }, {
    heading: "相关参考-21",
    content: "getConnectionState"
  }, {
    heading: "相关参考-21",
    content: "getCurrentMonotonicTimeInMs"
  }, {
    heading: "相关参考-21",
    content: "getEffectCurrentPosition"
  }, {
    heading: "相关参考-21",
    content: "getEffectDuration"
  }, {
    heading: "相关参考-21",
    content: "getEffectsVolume"
  }, {
    heading: "相关参考-21",
    content: "getErrorDescription"
  }, {
    heading: "相关参考-21",
    content: "getExtensionProperty \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "getExtensionProperty \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "getFaceShapeAreaOptions \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "getFaceShapeAreaOptions \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "getFaceShapeBeautyOptions \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "getFaceShapeBeautyOptions \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "getNativeHandle"
  }, {
    heading: "相关参考-21",
    content: "getNetworkType"
  }, {
    heading: "相关参考-21",
    content: "getNtpWallTimeInMs"
  }, {
    heading: "相关参考-21",
    content: "getUserInfoByUid"
  }, {
    heading: "相关参考-21",
    content: "getUserInfoByUserAccount"
  }, {
    heading: "相关参考-21",
    content: "getSdkVersion"
  }, {
    heading: "相关参考-21",
    content: "getVolumeOfEffect"
  }, {
    heading: "相关参考-21",
    content: "create \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "isCameraAutoFocusFaceModeSupported"
  }, {
    heading: "相关参考-21",
    content: "isCameraExposurePositionSupported"
  }, {
    heading: "相关参考-21",
    content: "isCameraExposureSupported"
  }, {
    heading: "相关参考-21",
    content: "isCameraFaceDetectSupported"
  }, {
    heading: "相关参考-21",
    content: "isCameraFocusSupported"
  }, {
    heading: "相关参考-21",
    content: "isCameraTorchSupported"
  }, {
    heading: "相关参考-21",
    content: "isCameraZoomSupported"
  }, {
    heading: "相关参考-21",
    content: "isFeatureAvailableOnDevice"
  }, {
    heading: "相关参考-21",
    content: "isSpeakerphoneEnabled"
  }, {
    heading: "相关参考-21",
    content: "isTextureEncodeSupported"
  }, {
    heading: "相关参考-21",
    content: "joinChannel \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "joinChannel \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "joinChannelWithUserAccount \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "joinChannelWithUserAccount \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "leaveChannel \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "leaveChannel \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "muteAllRemoteAudioStreams"
  }, {
    heading: "相关参考-21",
    content: "muteAllRemoteVideoStreams"
  }, {
    heading: "相关参考-21",
    content: "muteLocalAudioStream"
  }, {
    heading: "相关参考-21",
    content: "muteLocalVideoStream"
  }, {
    heading: "相关参考-21",
    content: "muteRecordingSignal"
  }, {
    heading: "相关参考-21",
    content: "muteRemoteAudioStream"
  }, {
    heading: "相关参考-21",
    content: "muteRemoteVideoStream"
  }, {
    heading: "相关参考-21",
    content: "pauseAllChannelMediaRelay"
  }, {
    heading: "相关参考-21",
    content: "pauseAllEffects"
  }, {
    heading: "相关参考-21",
    content: "pauseAudioMixing"
  }, {
    heading: "相关参考-21",
    content: "pauseEffect"
  }, {
    heading: "相关参考-21",
    content: "playAllEffects"
  }, {
    heading: "相关参考-21",
    content: "playEffect \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "playEffect \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "preloadChannel"
  }, {
    heading: "相关参考-21",
    content: "preloadChannelWithUserAccount"
  }, {
    heading: "相关参考-21",
    content: "preloadEffect \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "preloadEffect \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "pullPlaybackAudioFrame \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "pullPlaybackAudioFrame \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "pushExternalAudioFrame"
  }, {
    heading: "相关参考-21",
    content: "pushExternalVideoFrameById \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "pushExternalVideoFrame \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "pushExternalVideoFrameById \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "pushExternalVideoFrame \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "queryCameraFocalLengthCapability"
  }, {
    heading: "相关参考-21",
    content: "queryCodecCapability"
  }, {
    heading: "相关参考-21",
    content: "queryDeviceScore"
  }, {
    heading: "相关参考-21",
    content: "queryScreenCaptureCapability"
  }, {
    heading: "相关参考-21",
    content: "rate"
  }, {
    heading: "相关参考-21",
    content: "registerAudioEncodedFrameObserver"
  }, {
    heading: "相关参考-21",
    content: "registerAudioFrameObserver"
  }, {
    heading: "相关参考-21",
    content: "registerAudioSpectrumObserver"
  }, {
    heading: "相关参考-21",
    content: "registerExtension"
  }, {
    heading: "相关参考-21",
    content: "registerLocalUserAccount"
  }, {
    heading: "相关参考-21",
    content: "registerMediaMetadataObserver"
  }, {
    heading: "相关参考-21",
    content: "registerVideoEncodedFrameObserver"
  }, {
    heading: "相关参考-21",
    content: "registerVideoFrameObserver"
  }, {
    heading: "相关参考-21",
    content: "destroy \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "removeHandler"
  }, {
    heading: "相关参考-21",
    content: "removeVideoWatermark"
  }, {
    heading: "相关参考-21",
    content: "renewToken"
  }, {
    heading: "相关参考-21",
    content: "resumeAllChannelMediaRelay"
  }, {
    heading: "相关参考-21",
    content: "resumeAllEffects"
  }, {
    heading: "相关参考-21",
    content: "resumeAudioMixing"
  }, {
    heading: "相关参考-21",
    content: "resumeEffect"
  }, {
    heading: "相关参考-21",
    content: "selectAudioTrack"
  }, {
    heading: "相关参考-21",
    content: "sendCustomReportMessage"
  }, {
    heading: "相关参考-21",
    content: "sendStreamMessage"
  }, {
    heading: "相关参考-21",
    content: "setAdvancedAudioOptions"
  }, {
    heading: "相关参考-21",
    content: "setAINSMode"
  }, {
    heading: "相关参考-21",
    content: "setAudioEffectParameters"
  }, {
    heading: "相关参考-21",
    content: "setAudioEffectPreset"
  }, {
    heading: "相关参考-21",
    content: "setAudioMixingDualMonoMode"
  }, {
    heading: "相关参考-21",
    content: "setAudioMixingPitch"
  }, {
    heading: "相关参考-21",
    content: "setAudioMixingPlaybackSpeed"
  }, {
    heading: "相关参考-21",
    content: "setAudioMixingPosition"
  }, {
    heading: "相关参考-21",
    content: "setAudioProfile \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setAudioProfile \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setAudioScenario"
  }, {
    heading: "相关参考-21",
    content: "setAVSyncSource"
  }, {
    heading: "相关参考-21",
    content: "setBeautyEffectOptions \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setBeautyEffectOptions \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setCameraAutoFocusFaceModeEnabled"
  }, {
    heading: "相关参考-21",
    content: "setCameraCapturerConfiguration"
  }, {
    heading: "相关参考-21",
    content: "setCameraExposureFactor"
  }, {
    heading: "相关参考-21",
    content: "setCameraExposurePosition"
  }, {
    heading: "相关参考-21",
    content: "setCameraFocusPositionInPreview"
  }, {
    heading: "相关参考-21",
    content: "setCameraTorchOn"
  }, {
    heading: "相关参考-21",
    content: "setCameraZoomFactor"
  }, {
    heading: "相关参考-21",
    content: "setChannelProfile"
  }, {
    heading: "相关参考-21",
    content: "setClientRole \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setClientRole \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setCloudProxy"
  }, {
    heading: "相关参考-21",
    content: "setColorEnhanceOptions \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setColorEnhanceOptions \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setDefaultAudioRoutetoSpeakerphone"
  }, {
    heading: "相关参考-21",
    content: "setDualStreamMode \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setDualStreamMode \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setEarMonitoringAudioFrameParameters"
  }, {
    heading: "相关参考-21",
    content: "setEffectPosition"
  }, {
    heading: "相关参考-21",
    content: "setEffectsVolume"
  }, {
    heading: "相关参考-21",
    content: "setEnableSpeakerphone"
  }, {
    heading: "相关参考-21",
    content: "setExtensionProperty"
  }, {
    heading: "相关参考-21",
    content: "setExtensionProviderProperty"
  }, {
    heading: "相关参考-21",
    content: "setExternalAudioSink"
  }, {
    heading: "相关参考-21",
    content: "setExternalAudioSource \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setExternalAudioSource \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setExternalMediaProjection"
  }, {
    heading: "相关参考-21",
    content: "setExternalRemoteEglContext"
  }, {
    heading: "相关参考-21",
    content: "setExternalVideoSource"
  }, {
    heading: "相关参考-21",
    content: "setFaceShapeAreaOptions \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setFaceShapeAreaOptions \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setFaceShapeBeautyOptions \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setFaceShapeBeautyOptions \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setFilterEffectOptions \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setFilterEffectOptions \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setHeadphoneEQParameters"
  }, {
    heading: "相关参考-21",
    content: "setHeadphoneEQPreset"
  }, {
    heading: "相关参考-21",
    content: "setInEarMonitoringVolume"
  }, {
    heading: "相关参考-21",
    content: "setLocalAccessPoint"
  }, {
    heading: "相关参考-21",
    content: "setLocalRenderMode \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setLocalRenderMode \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setLocalRenderTargetFps"
  }, {
    heading: "相关参考-21",
    content: "setLocalVideoMirrorMode"
  }, {
    heading: "相关参考-21",
    content: "setLocalVoiceEqualization"
  }, {
    heading: "相关参考-21",
    content: "setLocalVoiceFormant"
  }, {
    heading: "相关参考-21",
    content: "setLocalVoicePitch"
  }, {
    heading: "相关参考-21",
    content: "setLocalVoiceReverb"
  }, {
    heading: "相关参考-21",
    content: "setLogFile"
  }, {
    heading: "相关参考-21",
    content: "setLogFileSize"
  }, {
    heading: "相关参考-21",
    content: "setLogFilter"
  }, {
    heading: "相关参考-21",
    content: "setLogLevel"
  }, {
    heading: "相关参考-21",
    content: "setLowlightEnhanceOptions \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setLowlightEnhanceOptions \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setMixedAudioFrameParameters"
  }, {
    heading: "相关参考-21",
    content: "setParameters"
  }, {
    heading: "相关参考-21",
    content: "setPlaybackAudioFrameBeforeMixingParameters \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setPlaybackAudioFrameBeforeMixingParameters \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setPlaybackAudioFrameParameters"
  }, {
    heading: "相关参考-21",
    content: "setRecordingAudioFrameParameters"
  }, {
    heading: "相关参考-21",
    content: "setRemoteDefaultVideoStreamType \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setRemoteDefaultVideoStreamType \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setRemoteRenderMode"
  }, {
    heading: "相关参考-21",
    content: "setRemoteRenderTargetFps"
  }, {
    heading: "相关参考-21",
    content: "setRemoteSubscribeFallbackOption \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setRemoteSubscribeFallbackOption \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setRemoteUserSpatialAudioParams"
  }, {
    heading: "相关参考-21",
    content: "setRemoteVideoStreamType \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setRemoteVideoStreamType \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setRemoteVideoSubscriptionOptions"
  }, {
    heading: "相关参考-21",
    content: "setRemoteVoicePosition"
  }, {
    heading: "相关参考-21",
    content: "setRouteInCommunicationMode"
  }, {
    heading: "相关参考-21",
    content: "setScreenCaptureScenario"
  }, {
    heading: "相关参考-21",
    content: "setSubscribeAudioAllowlist"
  }, {
    heading: "相关参考-21",
    content: "setSubscribeAudioBlocklist"
  }, {
    heading: "相关参考-21",
    content: "setSubscribeVideoAllowlist"
  }, {
    heading: "相关参考-21",
    content: "setSubscribeVideoBlocklist"
  }, {
    heading: "相关参考-21",
    content: "setupLocalVideo"
  }, {
    heading: "相关参考-21",
    content: "setupRemoteVideo"
  }, {
    heading: "相关参考-21",
    content: "setVideoDenoiserOptions \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "setVideoDenoiserOptions \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "setVideoEncoderConfiguration"
  }, {
    heading: "相关参考-21",
    content: "setVideoScenario"
  }, {
    heading: "相关参考-21",
    content: "setVoiceBeautifierParameters"
  }, {
    heading: "相关参考-21",
    content: "setVoiceBeautifierPreset"
  }, {
    heading: "相关参考-21",
    content: "setVoiceConversionPreset"
  }, {
    heading: "相关参考-21",
    content: "setVolumeOfEffect"
  }, {
    heading: "相关参考-21",
    content: "startAudioMixing \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "startAudioMixing \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "startAudioRecording \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "startAudioRecording \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "startCameraCapture"
  }, {
    heading: "相关参考-21",
    content: "startEchoTest"
  }, {
    heading: "相关参考-21",
    content: "startLastmileProbeTest"
  }, {
    heading: "相关参考-21",
    content: "startLocalAudioMixer"
  }, {
    heading: "相关参考-21",
    content: "startLocalVideoTranscoder"
  }, {
    heading: "相关参考-21",
    content: "startMediaRenderingTracing"
  }, {
    heading: "相关参考-21",
    content: "startOrUpdateChannelMediaRelay"
  }, {
    heading: "相关参考-21",
    content: "startPlaybackDeviceTest"
  }, {
    heading: "相关参考-21",
    content: "startPreview \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "startPreview \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "startRecordingDeviceTest"
  }, {
    heading: "相关参考-21",
    content: "startRhythmPlayer"
  }, {
    heading: "相关参考-21",
    content: "startRtmpStreamWithoutTranscoding"
  }, {
    heading: "相关参考-21",
    content: "startRtmpStreamWithTranscoding"
  }, {
    heading: "相关参考-21",
    content: "startScreenCapture"
  }, {
    heading: "相关参考-21",
    content: "stopAllEffects"
  }, {
    heading: "相关参考-21",
    content: "stopAudioMixing"
  }, {
    heading: "相关参考-21",
    content: "stopAudioRecording"
  }, {
    heading: "相关参考-21",
    content: "stopCameraCapture"
  }, {
    heading: "相关参考-21",
    content: "stopChannelMediaRelay"
  }, {
    heading: "相关参考-21",
    content: "stopEchoTest"
  }, {
    heading: "相关参考-21",
    content: "stopEffect"
  }, {
    heading: "相关参考-21",
    content: "stopLastmileProbeTest"
  }, {
    heading: "相关参考-21",
    content: "stopLocalAudioMixer"
  }, {
    heading: "相关参考-21",
    content: "stopLocalVideoTranscoder"
  }, {
    heading: "相关参考-21",
    content: "stopPlaybackDeviceTest"
  }, {
    heading: "相关参考-21",
    content: "stopPreview \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "stopPreview \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "stopRecordingDeviceTest"
  }, {
    heading: "相关参考-21",
    content: "stopRhythmPlayer"
  }, {
    heading: "相关参考-21",
    content: "stopRtmpStream"
  }, {
    heading: "相关参考-21",
    content: "stopScreenCapture"
  }, {
    heading: "相关参考-21",
    content: "switchCamera \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "switchCamera \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "takeSnapshot \\[1/2]"
  }, {
    heading: "相关参考-21",
    content: "takeSnapshot \\[2/2]"
  }, {
    heading: "相关参考-21",
    content: "unloadEffect"
  }, {
    heading: "相关参考-21",
    content: "unRegisterAudioSpectrumObserver"
  }, {
    heading: "相关参考-21",
    content: "unregisterMediaMetadataObserver"
  }, {
    heading: "相关参考-21",
    content: "updateChannelMediaOptions"
  }, {
    heading: "相关参考-21",
    content: "updateLocalAudioMixerConfiguration"
  }, {
    heading: "相关参考-21",
    content: "updateLocalTranscoderConfiguration"
  }, {
    heading: "相关参考-21",
    content: "updatePreloadChannelToken"
  }, {
    heading: "相关参考-21",
    content: "updateRtmpTranscoding"
  }, {
    heading: "相关参考-21",
    content: "updateScreenCaptureParameters"
  }, {
    heading: "irtcengineeventhandler",
    content: "封装 SDK 向应用层发送事件回调的方法。"
  }, {
    heading: "irtcengineeventhandler",
    content: "IRtcEngineEventHandler 是 SDK 用于向应用层发送事件回调的接口类。你可以继承该类以接收所需的事件通知。该接口中的所有方法均为默认空实现，你可以根据需要选择性地重写部分方法。为确保 SDK 正常运行，建议在回调方法中避免执行耗时操作或调用阻塞 API，例如 `SendMessage`。"
  }, {
    heading: "相关参考-22",
    content: "onActiveSpeaker"
  }, {
    heading: "相关参考-22",
    content: "onAudioEffectFinished"
  }, {
    heading: "相关参考-22",
    content: "onAudioMixingFinished"
  }, {
    heading: "相关参考-22",
    content: "onAudioMixingPositionChanged"
  }, {
    heading: "相关参考-22",
    content: "onAudioMixingStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onAudioPublishStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onAudioQuality"
  }, {
    heading: "相关参考-22",
    content: "onAudioRouteChanged"
  }, {
    heading: "相关参考-22",
    content: "onAudioSubscribeStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onAudioVolumeIndication"
  }, {
    heading: "相关参考-22",
    content: "onCameraExposureAreaChanged"
  }, {
    heading: "相关参考-22",
    content: "onCameraFocusAreaChanged"
  }, {
    heading: "相关参考-22",
    content: "onCameraReady"
  }, {
    heading: "相关参考-22",
    content: "onChannelMediaRelayStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onClientRoleChanged"
  }, {
    heading: "相关参考-22",
    content: "onClientRoleChangeFailed"
  }, {
    heading: "相关参考-22",
    content: "onConnectionBanned"
  }, {
    heading: "相关参考-22",
    content: "onConnectionInterrupted"
  }, {
    heading: "相关参考-22",
    content: "onConnectionLost"
  }, {
    heading: "相关参考-22",
    content: "onConnectionStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onEncryptionError"
  }, {
    heading: "相关参考-22",
    content: "onError"
  }, {
    heading: "相关参考-22",
    content: "onErrorWithContext"
  }, {
    heading: "相关参考-22",
    content: "onEventWithContext"
  }, {
    heading: "相关参考-22",
    content: "onStartedWithContext"
  }, {
    heading: "相关参考-22",
    content: "onStoppedWithContext"
  }, {
    heading: "相关参考-22",
    content: "onFacePositionChanged"
  }, {
    heading: "相关参考-22",
    content: "onFirstLocalAudioFramePublished"
  }, {
    heading: "相关参考-22",
    content: "onFirstLocalVideoFrame"
  }, {
    heading: "相关参考-22",
    content: "onFirstLocalVideoFramePublished"
  }, {
    heading: "相关参考-22",
    content: "onFirstRemoteAudioDecoded"
  }, {
    heading: "相关参考-22",
    content: "onFirstRemoteAudioFrame"
  }, {
    heading: "相关参考-22",
    content: "onFirstRemoteVideoDecoded"
  }, {
    heading: "相关参考-22",
    content: "onFirstRemoteVideoFrame"
  }, {
    heading: "相关参考-22",
    content: "onJoinChannelSuccess"
  }, {
    heading: "相关参考-22",
    content: "onLastmileProbeResult"
  }, {
    heading: "相关参考-22",
    content: "onLastmileQuality"
  }, {
    heading: "相关参考-22",
    content: "onLeaveChannel"
  }, {
    heading: "相关参考-22",
    content: "onLocalAudioStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onLocalAudioStats"
  }, {
    heading: "相关参考-22",
    content: "onLocalUserRegistered"
  }, {
    heading: "相关参考-22",
    content: "onLocalVideoEvent"
  }, {
    heading: "相关参考-22",
    content: "onLocalVideoStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onLocalVideoStats"
  }, {
    heading: "相关参考-22",
    content: "onLocalVideoTranscoderError"
  }, {
    heading: "相关参考-22",
    content: "onMultipathStats"
  }, {
    heading: "相关参考-22",
    content: "onNetworkQuality"
  }, {
    heading: "相关参考-22",
    content: "onNetworkTypeChanged"
  }, {
    heading: "相关参考-22",
    content: "onPermissionError"
  }, {
    heading: "相关参考-22",
    content: "onPermissionGranted"
  }, {
    heading: "相关参考-22",
    content: "onProxyConnected"
  }, {
    heading: "相关参考-22",
    content: "onRejoinChannelSuccess"
  }, {
    heading: "相关参考-22",
    content: "onRemoteAudioStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onRemoteAudioStats"
  }, {
    heading: "相关参考-22",
    content: "onRemoteAudioTransportStats"
  }, {
    heading: "相关参考-22",
    content: "onRemoteSubscribeFallbackToAudioOnly"
  }, {
    heading: "相关参考-22",
    content: "onRemoteVideoStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onRemoteVideoStats"
  }, {
    heading: "相关参考-22",
    content: "onRemoteVideoTransportStats"
  }, {
    heading: "相关参考-22",
    content: "onRenewTokenResult"
  }, {
    heading: "相关参考-22",
    content: "onRequestToken"
  }, {
    heading: "相关参考-22",
    content: "onRhythmPlayerStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onRtcStats"
  }, {
    heading: "相关参考-22",
    content: "onRtmpStreamingEvent"
  }, {
    heading: "相关参考-22",
    content: "onRtmpStreamingStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onSnapshotTaken"
  }, {
    heading: "相关参考-22",
    content: "onStreamMessage"
  }, {
    heading: "相关参考-22",
    content: "onStreamMessageError"
  }, {
    heading: "相关参考-22",
    content: "onTokenPrivilegeWillExpire"
  }, {
    heading: "相关参考-22",
    content: "onTranscodedStreamLayoutInfo"
  }, {
    heading: "相关参考-22",
    content: "onTranscodingUpdated"
  }, {
    heading: "相关参考-22",
    content: "onUplinkNetworkInfoUpdated"
  }, {
    heading: "相关参考-22",
    content: "onUserEnableLocalVideo"
  }, {
    heading: "相关参考-22",
    content: "onUserEnableVideo"
  }, {
    heading: "相关参考-22",
    content: "onUserInfoUpdated"
  }, {
    heading: "相关参考-22",
    content: "onUserJoined"
  }, {
    heading: "相关参考-22",
    content: "onUserMuteAudio"
  }, {
    heading: "相关参考-22",
    content: "onUserMuteVideo"
  }, {
    heading: "相关参考-22",
    content: "onUserOffline"
  }, {
    heading: "相关参考-22",
    content: "onVideoPublishStateChanged"
  }, {
    heading: "相关参考-22",
    content: "onVideoRenderingTracingResult"
  }, {
    heading: "相关参考-22",
    content: "onVideoSizeChanged"
  }, {
    heading: "相关参考-22",
    content: "onVideoStopped"
  }, {
    heading: "相关参考-22",
    content: "onVideoSubscribeStateChanged"
  }, {
    heading: "rtcengineex",
    content: "扩展 RtcEngine 接口的功能。"
  }, {
    heading: "相关参考-23",
    content: "addVideoWatermarkEx \\[1/2]"
  }, {
    heading: "相关参考-23",
    content: "addVideoWatermarkEx \\[2/2]"
  }, {
    heading: "相关参考-23",
    content: "adjustUserPlaybackSignalVolumeEx"
  }, {
    heading: "相关参考-23",
    content: "clearVideoWatermarkEx"
  }, {
    heading: "相关参考-23",
    content: "createDataStreamEx \\[1/2]"
  }, {
    heading: "相关参考-23",
    content: "createDataStreamEx \\[2/2]"
  }, {
    heading: "相关参考-23",
    content: "enableAudioVolumeIndicationEx"
  }, {
    heading: "相关参考-23",
    content: "enableContentInspectEx"
  }, {
    heading: "相关参考-23",
    content: "enableDualStreamModeEx"
  }, {
    heading: "相关参考-23",
    content: "enableEncryptionEx"
  }, {
    heading: "相关参考-23",
    content: "getCallIdEx"
  }, {
    heading: "相关参考-23",
    content: "getConnectionStateEx"
  }, {
    heading: "相关参考-23",
    content: "getUserInfoByUidEx"
  }, {
    heading: "相关参考-23",
    content: "getUserInfoByUserAccountEx"
  }, {
    heading: "相关参考-23",
    content: "joinChannelEx"
  }, {
    heading: "相关参考-23",
    content: "joinChannelWithUserAccountEx"
  }, {
    heading: "相关参考-23",
    content: "leaveChannelEx \\[1/2]"
  }, {
    heading: "相关参考-23",
    content: "leaveChannelEx \\[2/2]"
  }, {
    heading: "相关参考-23",
    content: "muteAllRemoteAudioStreamsEx"
  }, {
    heading: "相关参考-23",
    content: "muteAllRemoteVideoStreamsEx"
  }, {
    heading: "相关参考-23",
    content: "muteLocalAudioStreamEx"
  }, {
    heading: "相关参考-23",
    content: "muteLocalVideoStreamEx"
  }, {
    heading: "相关参考-23",
    content: "muteRemoteAudioStreamEx"
  }, {
    heading: "相关参考-23",
    content: "muteRemoteVideoStreamEx"
  }, {
    heading: "相关参考-23",
    content: "pauseAllChannelMediaRelayEx"
  }, {
    heading: "相关参考-23",
    content: "playEffectEx \\[1/2]"
  }, {
    heading: "相关参考-23",
    content: "playEffectEx \\[2/2]"
  }, {
    heading: "相关参考-23",
    content: "preloadEffectEx \\[1/2]"
  }, {
    heading: "相关参考-23",
    content: "preloadEffectEx \\[2/2]"
  }, {
    heading: "相关参考-23",
    content: "removeVideoWatermarkEx"
  }, {
    heading: "相关参考-23",
    content: "resumeAllChannelMediaRelayEx"
  }, {
    heading: "相关参考-23",
    content: "sendCustomReportMessageEx"
  }, {
    heading: "相关参考-23",
    content: "sendStreamMessageEx"
  }, {
    heading: "相关参考-23",
    content: "setDualStreamModeEx"
  }, {
    heading: "相关参考-23",
    content: "setRemoteRenderModeEx"
  }, {
    heading: "相关参考-23",
    content: "setRemoteVideoStreamTypeEx \\[1/2]"
  }, {
    heading: "相关参考-23",
    content: "setRemoteVideoStreamTypeEx \\[2/2]"
  }, {
    heading: "相关参考-23",
    content: "setRemoteVideoSubscriptionOptionsEx"
  }, {
    heading: "相关参考-23",
    content: "setRemoteVoicePositionEx"
  }, {
    heading: "相关参考-23",
    content: "setSubscribeAudioAllowlistEx"
  }, {
    heading: "相关参考-23",
    content: "setSubscribeAudioBlocklistEx"
  }, {
    heading: "相关参考-23",
    content: "setSubscribeVideoAllowlistEx"
  }, {
    heading: "相关参考-23",
    content: "setSubscribeVideoBlocklistEx"
  }, {
    heading: "相关参考-23",
    content: "setupRemoteVideoEx"
  }, {
    heading: "相关参考-23",
    content: "setVideoEncoderConfigurationEx"
  }, {
    heading: "相关参考-23",
    content: "startMediaRenderingTracingEx"
  }, {
    heading: "相关参考-23",
    content: "startOrUpdateChannelMediaRelayEx"
  }, {
    heading: "相关参考-23",
    content: "startRtmpStreamWithoutTranscodingEx"
  }, {
    heading: "相关参考-23",
    content: "startRtmpStreamWithTranscodingEx"
  }, {
    heading: "相关参考-23",
    content: "stopChannelMediaRelayEx"
  }, {
    heading: "相关参考-23",
    content: "stopRtmpStreamEx"
  }, {
    heading: "相关参考-23",
    content: "takeSnapshotEx \\[1/2]"
  }, {
    heading: "相关参考-23",
    content: "takeSnapshotEx \\[2/2]"
  }, {
    heading: "相关参考-23",
    content: "updateChannelMediaOptionsEx"
  }, {
    heading: "相关参考-23",
    content: "updateRtmpTranscodingEx"
  }, {
    heading: "irtcenginereleasecallback",
    content: "用于异步销毁引擎。"
  }, {
    heading: "自从-5",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "相关参考-24",
    content: "onEngineReleased"
  }, {
    heading: "ivideoeffectobject",
    content: "用于管理和配置视频特效功能，例如美颜、风格妆容和滤镜。"
  }, {
    heading: "自从-6",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "相关参考-25",
    content: "addOrUpdateVideoEffect"
  }, {
    heading: "相关参考-25",
    content: "getVideoEffectBoolParam"
  }, {
    heading: "相关参考-25",
    content: "getVideoEffectFloatParam"
  }, {
    heading: "相关参考-25",
    content: "getVideoEffectIntParam"
  }, {
    heading: "相关参考-25",
    content: "performVideoEffectAction"
  }, {
    heading: "相关参考-25",
    content: "removeVideoEffect"
  }, {
    heading: "相关参考-25",
    content: "setVideoEffectBoolParam"
  }, {
    heading: "相关参考-25",
    content: "setVideoEffectFloatParam"
  }, {
    heading: "相关参考-25",
    content: "setVideoEffectIntParam"
  }, {
    heading: "ivideoencodedframeobserver",
    content: "用于监听编码后的视频帧。"
  }, {
    heading: "相关参考-26",
    content: "onEncodedVideoFrameReceived"
  }, {
    heading: "ivideoframeobserver",
    content: "用于处理视频帧的回调。"
  }, {
    heading: "ivideoframeobserver",
    content: "你可以通过实现 IVideoFrameObserver 接口中的方法，接收并处理本地设备采集或远端用户发送的视频帧。"
  }, {
    heading: "相关参考-27",
    content: "getMirrorApplied"
  }, {
    heading: "相关参考-27",
    content: "getObservedFramePosition"
  }, {
    heading: "相关参考-27",
    content: "getRotationApplied"
  }, {
    heading: "相关参考-27",
    content: "getVideoFormatPreference"
  }, {
    heading: "相关参考-27",
    content: "getVideoFrameProcessMode"
  }, {
    heading: "相关参考-27",
    content: "onCaptureVideoFrame"
  }, {
    heading: "相关参考-27",
    content: "onPreEncodeVideoFrame"
  }, {
    heading: "相关参考-27",
    content: "onRenderVideoFrame"
  }, {
    heading: "player",
    content: "用于播放 URL 资源。"
  }, {
    heading: "自从-7",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "相关参考-28",
    content: "getConfigs \\[2/3]"
  }, {
    heading: "相关参考-28",
    content: "getInfo"
  }, {
    heading: "相关参考-28",
    content: "getPosition"
  }, {
    heading: "相关参考-28",
    content: "getStats"
  }, {
    heading: "相关参考-28",
    content: "muteAudio"
  }, {
    heading: "相关参考-28",
    content: "muteVideo"
  }, {
    heading: "相关参考-28",
    content: "openWithUrl"
  }, {
    heading: "相关参考-28",
    content: "pause"
  }, {
    heading: "相关参考-28",
    content: "play"
  }, {
    heading: "相关参考-28",
    content: "Player"
  }, {
    heading: "相关参考-28",
    content: "preloadWithUrl"
  }, {
    heading: "相关参考-28",
    content: "registerObserver"
  }, {
    heading: "相关参考-28",
    content: "seek"
  }, {
    heading: "相关参考-28",
    content: "setCanvas"
  }, {
    heading: "相关参考-28",
    content: "setConfigs \\[2/3]"
  }, {
    heading: "相关参考-28",
    content: "stop"
  }, {
    heading: "相关参考-28",
    content: "switchWithUrl"
  }, {
    heading: "相关参考-28",
    content: "unregisterObserver"
  }, {
    heading: "playerconfig",
    content: "用于配置媒体播放器选项。"
  }, {
    heading: "自从-8",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "相关参考-29",
    content: "getAbrFallbackLayer"
  }, {
    heading: "相关参考-29",
    content: "getAbrSubscriptionLayer"
  }, {
    heading: "相关参考-29",
    content: "getAutoPlay"
  }, {
    heading: "相关参考-29",
    content: "getLoopCount"
  }, {
    heading: "相关参考-29",
    content: "getPlaybackSpeed"
  }, {
    heading: "相关参考-29",
    content: "getPlayoutVolume"
  }, {
    heading: "相关参考-29",
    content: "setAbrFallbackLayer"
  }, {
    heading: "相关参考-29",
    content: "setAbrSubscriptionLayer"
  }, {
    heading: "相关参考-29",
    content: "setAutoPlay"
  }, {
    heading: "相关参考-29",
    content: "setLoopCount"
  }, {
    heading: "相关参考-29",
    content: "setPlaybackSpeed"
  }, {
    heading: "相关参考-29",
    content: "setPlayoutVolume"
  }, {
    heading: "playergetstatscallback",
    content: "用于获取播放统计信息的回调接口。"
  }, {
    heading: "自从-9",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "相关参考-30",
    content: "onResult"
  }, {
    heading: "playerobserver",
    content: "PlayerObserver 用于接收播放器的事件回调。"
  }, {
    heading: "自从-10",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "相关参考-31",
    content: "onAudioVolumeIndication"
  }, {
    heading: "相关参考-31",
    content: "onEvent"
  }, {
    heading: "相关参考-31",
    content: "onMetadata \\[2/2]"
  }, {
    heading: "相关参考-31",
    content: "onPlayerInfoUpdated \\[2/2]"
  }, {
    heading: "相关参考-31",
    content: "onPositionChanged"
  }, {
    heading: "相关参考-31",
    content: "onResolutionChanged"
  }, {
    heading: "相关参考-31",
    content: "onStateChanged"
  }, {
    heading: "rte",
    content: "Rte 类是声网实时互动 SDK 的基础接口。"
  }, {
    heading: "自从-11",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "相关参考-32",
    content: "destroy"
  }, {
    heading: "相关参考-32",
    content: "getConfigs \\[1/3]"
  }, {
    heading: "相关参考-32",
    content: "getFromBridge"
  }, {
    heading: "相关参考-32",
    content: "initMediaEngine"
  }, {
    heading: "相关参考-32",
    content: "Rte"
  }, {
    heading: "相关参考-32",
    content: "setConfigs \\[1/3]"
  }, {
    heading: "playerinfo",
    content: "包含播放器和媒体流的信息。"
  }, {
    heading: "自从-12",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "相关参考-33",
    content: "abrSubscriptionLayer"
  }, {
    heading: "相关参考-33",
    content: "audioBitsPerSample"
  }, {
    heading: "相关参考-33",
    content: "audioChannels"
  }, {
    heading: "相关参考-33",
    content: "audioSampleRate"
  }, {
    heading: "相关参考-33",
    content: "currentUrl"
  }, {
    heading: "相关参考-33",
    content: "duration"
  }, {
    heading: "相关参考-33",
    content: "hasAudio"
  }, {
    heading: "相关参考-33",
    content: "hasVideo"
  }, {
    heading: "相关参考-33",
    content: "isAudioMuted"
  }, {
    heading: "相关参考-33",
    content: "isVideoMuted"
  }, {
    heading: "相关参考-33",
    content: "state"
  }, {
    heading: "相关参考-33",
    content: "streamCount"
  }, {
    heading: "相关参考-33",
    content: "videoHeight"
  }, {
    heading: "相关参考-33",
    content: "videoWidth"
  }],
  headings: [{
    id: "asynccallback",
    content: "AsyncCallback"
  }, {
    id: "相关参考",
    content: "相关参考"
  }, {
    id: "canvas",
    content: "Canvas"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "相关参考-1",
    content: "相关参考"
  }, {
    id: "canvasconfig",
    content: "CanvasConfig"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "相关参考-2",
    content: "相关参考"
  }, {
    id: "error",
    content: "Error"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "相关参考-3",
    content: "相关参考"
  }, {
    id: "iaudioencodedframeobserver",
    content: "IAudioEncodedFrameObserver"
  }, {
    id: "相关参考-4",
    content: "相关参考"
  }, {
    id: "iaudioframeobserver",
    content: "IAudioFrameObserver"
  }, {
    id: "相关参考-5",
    content: "相关参考"
  }, {
    id: "iaudiospectrumobserver",
    content: "IAudioSpectrumObserver"
  }, {
    id: "相关参考-6",
    content: "相关参考"
  }, {
    id: "ibasespatialaudioengine",
    content: "IBaseSpatialAudioEngine"
  }, {
    id: "相关参考-7",
    content: "相关参考"
  }, {
    id: "ilocalspatialaudioengine",
    content: "ILocalSpatialAudioEngine"
  }, {
    id: "相关参考-8",
    content: "相关参考"
  }, {
    id: "imediaextensionobserver",
    content: "IMediaExtensionObserver"
  }, {
    id: "imediaplayer",
    content: "IMediaPlayer"
  }, {
    id: "相关参考-9",
    content: "相关参考"
  }, {
    id: "imediaplayeraudioframeobserver",
    content: "IMediaPlayerAudioFrameObserver"
  }, {
    id: "相关参考-10",
    content: "相关参考"
  }, {
    id: "imediaplayercachemanager",
    content: "IMediaPlayerCacheManager"
  }, {
    id: "相关参考-11",
    content: "相关参考"
  }, {
    id: "imediaplayercustomdataprovider",
    content: "IMediaPlayerCustomDataProvider"
  }, {
    id: "相关参考-12",
    content: "相关参考"
  }, {
    id: "imediaplayerobserver",
    content: "IMediaPlayerObserver"
  }, {
    id: "相关参考-13",
    content: "相关参考"
  }, {
    id: "imediaplayervideoframeobserver",
    content: "IMediaPlayerVideoFrameObserver"
  }, {
    id: "相关参考-14",
    content: "相关参考"
  }, {
    id: "agoramediarecorder",
    content: "AgoraMediaRecorder"
  }, {
    id: "自从-3",
    content: "`自从`"
  }, {
    id: "相关参考-15",
    content: "相关参考"
  }, {
    id: "imediarecordercallback",
    content: "IMediaRecorderCallback"
  }, {
    id: "自从-4",
    content: "`自从`"
  }, {
    id: "相关参考-16",
    content: "相关参考"
  }, {
    id: "imetadataobserver",
    content: "IMetadataObserver"
  }, {
    id: "相关参考-17",
    content: "相关参考"
  }, {
    id: "iagoramusiccontentcenter",
    content: "IAgoraMusicContentCenter"
  }, {
    id: "相关参考-18",
    content: "相关参考"
  }, {
    id: "imusiccontentcentereventhandler",
    content: "IMusicContentCenterEventHandler"
  }, {
    id: "相关参考-19",
    content: "相关参考"
  }, {
    id: "iagoramusicplayer",
    content: "IAgoraMusicPlayer"
  }, {
    id: "相关参考-20",
    content: "相关参考"
  }, {
    id: "rtcengine",
    content: "RtcEngine"
  }, {
    id: "相关参考-21",
    content: "相关参考"
  }, {
    id: "irtcengineeventhandler",
    content: "IRtcEngineEventHandler"
  }, {
    id: "相关参考-22",
    content: "相关参考"
  }, {
    id: "rtcengineex",
    content: "RtcEngineEx"
  }, {
    id: "相关参考-23",
    content: "相关参考"
  }, {
    id: "irtcenginereleasecallback",
    content: "IRtcEngineReleaseCallback"
  }, {
    id: "自从-5",
    content: "`自从`"
  }, {
    id: "相关参考-24",
    content: "相关参考"
  }, {
    id: "ivideoeffectobject",
    content: "IVideoEffectObject"
  }, {
    id: "自从-6",
    content: "`自从`"
  }, {
    id: "相关参考-25",
    content: "相关参考"
  }, {
    id: "ivideoencodedframeobserver",
    content: "IVideoEncodedFrameObserver"
  }, {
    id: "相关参考-26",
    content: "相关参考"
  }, {
    id: "ivideoframeobserver",
    content: "IVideoFrameObserver"
  }, {
    id: "相关参考-27",
    content: "相关参考"
  }, {
    id: "player",
    content: "Player"
  }, {
    id: "自从-7",
    content: "`自从`"
  }, {
    id: "相关参考-28",
    content: "相关参考"
  }, {
    id: "playerconfig",
    content: "PlayerConfig"
  }, {
    id: "自从-8",
    content: "`自从`"
  }, {
    id: "相关参考-29",
    content: "相关参考"
  }, {
    id: "playergetstatscallback",
    content: "PlayerGetStatsCallback"
  }, {
    id: "自从-9",
    content: "`自从`"
  }, {
    id: "相关参考-30",
    content: "相关参考"
  }, {
    id: "playerobserver",
    content: "PlayerObserver"
  }, {
    id: "自从-10",
    content: "`自从`"
  }, {
    id: "相关参考-31",
    content: "相关参考"
  }, {
    id: "rte",
    content: "Rte"
  }, {
    id: "自从-11",
    content: "`自从`"
  }, {
    id: "相关参考-32",
    content: "相关参考"
  }, {
    id: "playerinfo",
    content: "PlayerInfo"
  }, {
    id: "自从-12",
    content: "`自从`"
  }, {
    id: "相关参考-33",
    content: "相关参考"
  }]
};
export let toc = [{
  depth: 2,
  url: "#asynccallback",
  title: _jsx(_Fragment, {
    children: "AsyncCallback"
  })
}, {
  depth: 3,
  url: "#相关参考",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#canvas",
  title: _jsx(_Fragment, {
    children: "Canvas"
  })
}, {
  depth: 4,
  url: "#自从",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-1",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#canvasconfig",
  title: _jsx(_Fragment, {
    children: "CanvasConfig"
  })
}, {
  depth: 4,
  url: "#自从-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-2",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#error",
  title: _jsx(_Fragment, {
    children: "Error"
  })
}, {
  depth: 4,
  url: "#自从-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-3",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#iaudioencodedframeobserver",
  title: _jsx(_Fragment, {
    children: "IAudioEncodedFrameObserver"
  })
}, {
  depth: 3,
  url: "#相关参考-4",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#iaudioframeobserver",
  title: _jsx(_Fragment, {
    children: "IAudioFrameObserver"
  })
}, {
  depth: 3,
  url: "#相关参考-5",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#iaudiospectrumobserver",
  title: _jsx(_Fragment, {
    children: "IAudioSpectrumObserver"
  })
}, {
  depth: 3,
  url: "#相关参考-6",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#ibasespatialaudioengine",
  title: _jsx(_Fragment, {
    children: "IBaseSpatialAudioEngine"
  })
}, {
  depth: 3,
  url: "#相关参考-7",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#ilocalspatialaudioengine",
  title: _jsx(_Fragment, {
    children: "ILocalSpatialAudioEngine"
  })
}, {
  depth: 3,
  url: "#相关参考-8",
  title: _jsx(_Fragment, {
    children: "相关参考"
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
  depth: 3,
  url: "#相关参考-9",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#imediaplayeraudioframeobserver",
  title: _jsx(_Fragment, {
    children: "IMediaPlayerAudioFrameObserver"
  })
}, {
  depth: 3,
  url: "#相关参考-10",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#imediaplayercachemanager",
  title: _jsx(_Fragment, {
    children: "IMediaPlayerCacheManager"
  })
}, {
  depth: 3,
  url: "#相关参考-11",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#imediaplayercustomdataprovider",
  title: _jsx(_Fragment, {
    children: "IMediaPlayerCustomDataProvider"
  })
}, {
  depth: 3,
  url: "#相关参考-12",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#imediaplayerobserver",
  title: _jsx(_Fragment, {
    children: "IMediaPlayerObserver"
  })
}, {
  depth: 3,
  url: "#相关参考-13",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#imediaplayervideoframeobserver",
  title: _jsx(_Fragment, {
    children: "IMediaPlayerVideoFrameObserver"
  })
}, {
  depth: 3,
  url: "#相关参考-14",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#agoramediarecorder",
  title: _jsx(_Fragment, {
    children: "AgoraMediaRecorder"
  })
}, {
  depth: 4,
  url: "#自从-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-15",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#imediarecordercallback",
  title: _jsx(_Fragment, {
    children: "IMediaRecorderCallback"
  })
}, {
  depth: 4,
  url: "#自从-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-16",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#imetadataobserver",
  title: _jsx(_Fragment, {
    children: "IMetadataObserver"
  })
}, {
  depth: 3,
  url: "#相关参考-17",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#iagoramusiccontentcenter",
  title: _jsx(_Fragment, {
    children: "IAgoraMusicContentCenter"
  })
}, {
  depth: 3,
  url: "#相关参考-18",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#imusiccontentcentereventhandler",
  title: _jsx(_Fragment, {
    children: "IMusicContentCenterEventHandler"
  })
}, {
  depth: 3,
  url: "#相关参考-19",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#iagoramusicplayer",
  title: _jsx(_Fragment, {
    children: "IAgoraMusicPlayer"
  })
}, {
  depth: 3,
  url: "#相关参考-20",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#rtcengine",
  title: _jsx(_Fragment, {
    children: "RtcEngine"
  })
}, {
  depth: 3,
  url: "#相关参考-21",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#irtcengineeventhandler",
  title: _jsx(_Fragment, {
    children: "IRtcEngineEventHandler"
  })
}, {
  depth: 3,
  url: "#相关参考-22",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#rtcengineex",
  title: _jsx(_Fragment, {
    children: "RtcEngineEx"
  })
}, {
  depth: 3,
  url: "#相关参考-23",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#irtcenginereleasecallback",
  title: _jsx(_Fragment, {
    children: "IRtcEngineReleaseCallback"
  })
}, {
  depth: 4,
  url: "#自从-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-24",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#ivideoeffectobject",
  title: _jsx(_Fragment, {
    children: "IVideoEffectObject"
  })
}, {
  depth: 4,
  url: "#自从-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-25",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#ivideoencodedframeobserver",
  title: _jsx(_Fragment, {
    children: "IVideoEncodedFrameObserver"
  })
}, {
  depth: 3,
  url: "#相关参考-26",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#ivideoframeobserver",
  title: _jsx(_Fragment, {
    children: "IVideoFrameObserver"
  })
}, {
  depth: 3,
  url: "#相关参考-27",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#player",
  title: _jsx(_Fragment, {
    children: "Player"
  })
}, {
  depth: 4,
  url: "#自从-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-28",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#playerconfig",
  title: _jsx(_Fragment, {
    children: "PlayerConfig"
  })
}, {
  depth: 4,
  url: "#自从-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-29",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#playergetstatscallback",
  title: _jsx(_Fragment, {
    children: "PlayerGetStatsCallback"
  })
}, {
  depth: 4,
  url: "#自从-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-30",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#playerobserver",
  title: _jsx(_Fragment, {
    children: "PlayerObserver"
  })
}, {
  depth: 4,
  url: "#自从-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-31",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#rte",
  title: _jsx(_Fragment, {
    children: "Rte"
  })
}, {
  depth: 4,
  url: "#自从-11",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-32",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}, {
  depth: 2,
  url: "#playerinfo",
  title: _jsx(_Fragment, {
    children: "PlayerInfo"
  })
}, {
  depth: 4,
  url: "#自从-12",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#相关参考-33",
  title: _jsx(_Fragment, {
    children: "相关参考"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [_jsx("a", {
      id: "rtc_interface_class"
    }), `
`, _jsx(_components.p, {
      children: "本页列出 Android 所有的接口类以及其中包含的 API。"
    }), `
`, _jsx("a", {
      id: "class_asynccallback"
    }), `
`, _jsx(_components.h2, {
      id: "asynccallback",
      children: "AsyncCallback"
    }), `
`, _jsx(_components.p, {
      children: "用于处理异步操作结果的回调。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_asynccallback_onresult_asynccallback",
          children: "onResult"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_canvas"
    }), `
`, _jsx(_components.h2, {
      id: "canvas",
      children: "Canvas"
    }), `
`, _jsx(_components.p, {
      children: "用于设置视频渲染视图。"
    }), `
`, _jsx("a", {
      id: "class_canvas__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-1",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_addview",
          children: "addView"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas",
          children: "Canvas"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_getconfigs_canvas",
          children: "getConfigs [3/3]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_removeview",
          children: "removeView"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_setconfigs_canvas",
          children: "setConfigs [3/3]"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_canvasconfig"
    }), `
`, _jsx(_components.h2, {
      id: "canvasconfig",
      children: "CanvasConfig"
    }), `
`, _jsx(_components.p, {
      children: "用于配置播放器的视频渲染。"
    }), `
`, _jsx("a", {
      id: "class_canvasconfig__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-1",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-2",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvasconfig_getmirrormode",
          children: "getVideoMirrorMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvasconfig_getrendermode",
          children: "getVideoRenderMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvasconfig_setmirrormode",
          children: "setVideoMirrorMode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvasconfig_setrendermode_canvasconfig",
          children: "setVideoRenderMode"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_error"
    }), `
`, _jsx(_components.h2, {
      id: "error",
      children: "Error"
    }), `
`, _jsx(_components.p, {
      children: "用于获取错误码和错误信息。"
    }), `
`, _jsx("a", {
      id: "class_error__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-2",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-3",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_error_code",
          children: "code"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_error_message",
          children: "message"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_iaudioencodedframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "iaudioencodedframeobserver",
      children: "IAudioEncodedFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "用于监听音频编码帧的接口。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-4",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onmixedaudioencodedframe",
          children: "onMixedAudioEncodedFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onplaybackaudioencodedframe",
          children: "onPlaybackAudioEncodedFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#callback_iaudioencodedframeobserver_onrecordaudioencodedframe",
          children: "onRecordAudioEncodedFrame"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_iaudioframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "iaudioframeobserver",
      children: "IAudioFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "用于观测和处理音频帧的接口。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-5",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getearmonitoringaudioparams",
          children: "getEarMonitoringAudioParams"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getmixedaudioparams",
          children: "getMixedAudioParams"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition",
          children: "getObservedAudioFramePosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getplaybackaudioparams",
          children: "getPlaybackAudioParams"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getrecordaudioparams",
          children: "getRecordAudioParams"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
          children: "onEarMonitoringAudioFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe",
          children: "onMixedAudioFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
          children: "onPlaybackAudioFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing",
          children: "onPlaybackAudioFrameBeforeMixing"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe",
          children: "onRecordAudioFrame"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_iaudiospectrumobserver"
    }), `
`, _jsx(_components.h2, {
      id: "iaudiospectrumobserver",
      children: "IAudioSpectrumObserver"
    }), `
`, _jsx(_components.p, {
      children: "用于音频频谱观测的接口。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-6",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum",
          children: "onLocalAudioSpectrum"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onremoteaudiospectrum",
          children: "onRemoteAudioSpectrum"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_ibasespatialaudioengine"
    }), `
`, _jsx(_components.h2, {
      id: "ibasespatialaudioengine",
      children: "IBaseSpatialAudioEngine"
    }), `
`, _jsx(_components.p, {
      children: "IBaseSpatialAudioEngine：基础空间音效引擎接口。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-7",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_clearremotepositions",
          children: "clearRemotePositions"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine",
          children: "muteAllRemoteAudioStreams"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine",
          children: "muteLocalAudioStream"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine",
          children: "muteRemoteAudioStream"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setaudiorecvrange",
          children: "setAudioRecvRange"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setdistanceunit",
          children: "setDistanceUnit"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setmaxaudiorecvcount",
          children: "setMaxAudioRecvCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setplayerattenuation",
          children: "setPlayerAttenuation"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setzones",
          children: "setZones"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateplayerpositioninfo",
          children: "updatePlayerPositionInfo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateselfposition",
          children: "updateSelfPosition"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_ilocalspatialaudioengine"
    }), `
`, _jsx(_components.h2, {
      id: "ilocalspatialaudioengine",
      children: "ILocalSpatialAudioEngine"
    }), `
`, _jsx(_components.p, {
      children: "ILocalSpatialAudioEngine 是本地空间音效引擎接口。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-8",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_create_ilocalspatialaudioengine",
          children: "create"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine",
          children: "initialize"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_release_ilocalspatialaudioengine",
          children: "destroy"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_removeremoteposition",
          children: "removeRemotePosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_setremoteaudioattenuation",
          children: "setRemoteAudioAttenuation"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_updateremoteposition",
          children: "updateRemotePosition"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imediaextensionobserver"
    }), `
`, _jsx(_components.h2, {
      id: "imediaextensionobserver",
      children: "IMediaExtensionObserver"
    }), `
`, _jsx(_components.p, {
      children: "IMediaExtensionObserver 接口用于监听媒体扩展相关的事件。"
    }), `
`, _jsx("a", {
      id: "class_imediaplayer"
    }), `
`, _jsx(_components.h2, {
      id: "imediaplayer",
      children: "IMediaPlayer"
    }), `
`, _jsx(_components.p, {
      children: "IMediaPlayer 接口用于实现媒体播放功能。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-9",
      children: "相关参考"
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
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayer_destroy_imediaplayer",
          children: "destroy"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getaudiobufferdelay",
          children: "getAudioBufferDelay"
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
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setaudiodualmonomode",
          children: "setAudioDualMonoMode"
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
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_imediaplayer_setspatialaudioparams",
          children: "setSpatialAudioParams"
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
`, _jsx("a", {
      id: "class_imediaplayeraudioframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "imediaplayeraudioframeobserver",
      children: "IMediaPlayerAudioFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "用于观测媒体播放器的音频帧。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-10",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver",
          children: "onFrame"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imediaplayercachemanager"
    }), `
`, _jsx(_components.h2, {
      id: "imediaplayercachemanager",
      children: "IMediaPlayerCacheManager"
    }), `
`, _jsx(_components.p, {
      children: "用于管理媒体播放器的缓存。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-11",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_enableautoremovecache",
          children: "enableAutoRemoveCache"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getcachedir",
          children: "getCacheDir"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getcachefilecount",
          children: "getCacheFileCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getmaxcachefilecount",
          children: "getMaxCacheFileCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_getmaxcachefilesize",
          children: "getMaxCacheFileSize"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager",
          children: "getMediaPlayerCacheManager"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeallcaches",
          children: "removeAllCaches"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removecachebyuri",
          children: "removeCacheByUri"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_removeoldcache",
          children: "removeOldCache"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setcachedir",
          children: "setCacheDir"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilecount",
          children: "setMaxCacheFileCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#api_imediaplayercachemanager_setmaxcachefilesize",
          children: "setMaxCacheFileSize"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imediaplayercustomdataprovider"
    }), `
`, _jsx(_components.h2, {
      id: "imediaplayercustomdataprovider",
      children: "IMediaPlayerCustomDataProvider"
    }), `
`, _jsx(_components.p, {
      children: "IMediaPlayerCustomDataProvider 接口用于为媒体播放器提供自定义数据源。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-12",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayercustomdataprovider_onreaddata",
          children: "onReadData"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#callback_imediaplayercustomdataprovider_onseek",
          children: "onSeek"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imediaplayersourceobserver"
    }), `
`, _jsx(_components.h2, {
      id: "imediaplayerobserver",
      children: "IMediaPlayerObserver"
    }), `
`, _jsx(_components.p, {
      children: "用于监听媒体播放器状态变化的接口。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-13",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver",
          children: "onAudioVolumeIndication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onmetadata",
          children: "onMetaData"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplaybufferupdated",
          children: "onPlayBufferUpdated"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-cache#callback_imediaplayersourceobserver_onplayercachestats",
          children: "onPlayerCacheStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent",
          children: "onPlayerEvent"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerinfoupdated",
          children: "onPlayerInfoUpdated"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#callback_imediaplayersourceobserver_onplayerplaybackstats",
          children: "onPlayerPlaybackStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
          children: "onPlayerStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersrcinfochanged",
          children: "onPlayerSrcInfoChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpositionchanged",
          children: "onPositionChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpreloadevent",
          children: "onPreloadEvent"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imediaplayervideoframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "imediaplayervideoframeobserver",
      children: "IMediaPlayerVideoFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "用于观测媒体播放器的视频帧。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-14",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver",
          children: "onFrame"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imediarecorder"
    }), `
`, _jsx(_components.h2, {
      id: "agoramediarecorder",
      children: "AgoraMediaRecorder"
    }), `
`, _jsx(_components.p, {
      children: "用于录制客户端的音频和视频。"
    }), `
`, _jsx("a", {
      id: "class_imediarecorder__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-3",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.5.2 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder",
        children: "AgoraMediaRecorder"
      }), " 可录制以下内容："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地麦克风采集并由 SDK 编码为 AAC 格式的音频。"
      }), `
`, _jsx(_components.li, {
        children: "本地摄像头采集并由 SDK 编码的视频。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在 ", _jsx(_components.code, {
            children: "COMMUNICATION"
          }), " 频道场景下，当频道中存在使用 v3.0.0 之前版本 SDK 的用户时，该功能不可用。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-15",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_setmediarecorderobserver",
          children: "setMediaRecorderObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_startrecording",
          children: "startRecording"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_stoprecording",
          children: "stopRecording"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imediarecorderobserver"
    }), `
`, _jsx(_components.h2, {
      id: "imediarecordercallback",
      children: "IMediaRecorderCallback"
    }), `
`, _jsx(_components.p, {
      children: "用于设置媒体录制的回调方法。"
    }), `
`, _jsx("a", {
      id: "class_imediarecorderobserver__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-4",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.0.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-16",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderinfoupdated",
          children: "onRecorderInfoUpdated"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderstatechanged",
          children: "onRecorderStateChanged"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imetadataobserver"
    }), `
`, _jsx(_components.h2, {
      id: "imetadataobserver",
      children: "IMetadataObserver"
    }), `
`, _jsx(_components.p, {
      children: "用于实现元数据观察功能。"
    }), `
`, _jsx("a", {
      id: "class_imetadataobserver__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请在关键线程中实现该类中的所有回调方法。建议避免在关键线程中执行任何耗时操作。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-17",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#api_imetadataobserver_getmaxmetadatasize",
          children: "getMaxMetadataSize"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#callback_imetadataobserver_onmetadatareceived",
          children: "onMetadataReceived"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/metadata/metadata-observer#callback_imetadataobserver_onreadytosendmetadata",
          children: "onReadyToSendMetadata"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imusiccontentcenter"
    }), `
`, _jsx(_components.h2, {
      id: "iagoramusiccontentcenter",
      children: "IAgoraMusicContentCenter"
    }), `
`, _jsx(_components.p, {
      children: "IAgoraMusicContentCenter 提供用于管理和访问音乐内容中心的接口。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-18",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_createmusicplayer",
          children: "createMusicPlayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroy_imusiccontentcenter",
          children: "destroy"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_destroymusicplayer",
          children: "destroyMusicPlayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getcaches",
          children: "getCaches"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getinternalsongcode",
          children: "getInternalSongCode"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getlyric",
          children: "getLyric"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccharts",
          children: "getMusicCharts"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccollectionbymusicchartid",
          children: "getMusicCollectionByMusicChartId [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getmusiccollectionbymusicchartid2",
          children: "getMusicCollectionByMusicChartId [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_getsongsimpleinfo",
          children: "getSongSimpleInfo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_initialize_imusiccontentcenter",
          children: "initialize"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_ispreloaded",
          children: "isPreloaded"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload",
          children: "preload [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_preload2",
          children: "preload [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_registereventhandler_imusiccontentcenter",
          children: "registerEventHandler"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_removecache",
          children: "removeCache"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_renewtoken_imusiccontentcenter",
          children: "renewToken"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_searchmusic",
          children: "searchMusic [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_searchmusic2",
          children: "searchMusic [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusiccontentcenter_unregistereventhandler_imusiccontentcenter",
          children: "unregisterEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imusiccontentcentereventhandler"
    }), `
`, _jsx(_components.h2, {
      id: "imusiccontentcentereventhandler",
      children: "IMusicContentCenterEventHandler"
    }), `
`, _jsx(_components.p, {
      children: "用于处理音乐内容中心相关事件的接口。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-19",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onlyricresult",
          children: "onLyricResult"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusicchartsresult",
          children: "onMusicChartsResult"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onmusiccollectionresult",
          children: "onMusicCollectionResult"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onpreloadevent_imusiccontentcentereventhandler",
          children: "onPreLoadEvent"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#callback_imusiccontentcentereventhandler_onsongsimpleinforesult",
          children: "onSongSimpleInfoResult"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_imusicplayer"
    }), `
`, _jsx(_components.h2, {
      id: "iagoramusicplayer",
      children: "IAgoraMusicPlayer"
    }), `
`, _jsx(_components.p, {
      children: "扩展 IMediaPlayer 接口，支持更多音乐播放功能。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-20",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_destroy_imusicplayer",
          children: "destroy"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_getplaysrc",
          children: "getPlaySrc [2/2]"
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
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_open_imusicplayer",
          children: "open [1/2]"
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
          href: "/zh-CN/api-reference/rtc/android/playback/drm#api_imusicplayer_stop_imusicplayer",
          children: "stop [2/2]"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_irtcengine"
    }), `
`, _jsx(_components.h2, {
      id: "rtcengine",
      children: "RtcEngine"
    }), `
`, _jsx(_components.p, {
      children: "调用该类的方法以使用声网 SDK 的全部功能。"
    }), `
`, _jsx("a", {
      id: "class_irtcengine__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网建议在同一线程中调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 的 API 方法，避免在多个线程中调用。该类在早期版本中名为 ", _jsx(_components.code, {
        children: "AgoraAudio"
      }), "，从 1.0 版本起更名为 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-21",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/extensions#api_irtcengine_addextension",
          children: "addExtension"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_addhandler",
          children: "addHandler"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark1",
          children: "addVideoWatermark [1/3]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark2",
          children: "addVideoWatermark [2/3]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark3",
          children: "addVideoWatermark [3/3]"
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
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_clearvideowatermarks",
          children: "clearVideoWatermarks"
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
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_createvideoeffectobject",
          children: "createVideoEffectObject"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
          children: "destroy [2/2]"
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
          href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_destroymediarecorder",
          children: "destroyMediaRecorder"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_destroyvideoeffectobject",
          children: "destroyVideoEffectObject"
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
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_enablespatialaudio",
          children: "enableSpatialAudio"
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
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground",
          children: "enableVirtualBackground [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground2",
          children: "enableVirtualBackground [2/2]"
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
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapeareaoptions",
          children: "getFaceShapeAreaOptions [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapeareaoptions2",
          children: "getFaceShapeAreaOptions [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapebeautyoptions",
          children: "getFaceShapeBeautyOptions [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_getfaceshapebeautyoptions2",
          children: "getFaceShapeBeautyOptions [2/2]"
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
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannel2",
          children: "joinChannel [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannelwithuseraccount1",
          children: "joinChannelWithUserAccount [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_joinchannelwithuseraccount2",
          children: "joinChannelWithUserAccount [2/2]"
        })
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
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playalleffects",
          children: "playAllEffects"
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
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_preloadeffect2",
          children: "preloadEffect [2/2]"
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
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe",
          children: "pushExternalVideoFrameById [1/2]"
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
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_pushvideoframe3",
          children: "pushExternalVideoFrameById [2/2]"
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
          href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_queryscreencapturecapability",
          children: "queryScreenCaptureCapability"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate",
          children: "rate"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-encoded#api_irtcengine_registeraudioencodedframeobserver",
          children: "registerAudioEncodedFrameObserver"
        })
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
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_removevideowatermark",
          children: "removeVideoWatermark"
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
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setainsmode",
          children: "setAINSMode"
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
          href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_setaudiomixingplaybackspeed",
          children: "setAudioMixingPlaybackSpeed"
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
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions",
          children: "setBeautyEffectOptions [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions2",
          children: "setBeautyEffectOptions [2/2]"
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
          href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_setexternalmediaprojection",
          children: "setExternalMediaProjection"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalremoteeglcontext",
          children: "setExternalRemoteEglContext"
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
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions",
          children: "setFaceShapeAreaOptions [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions2",
          children: "setFaceShapeAreaOptions [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions",
          children: "setFaceShapeBeautyOptions [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions2",
          children: "setFaceShapeBeautyOptions [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfiltereffectoptions",
          children: "setFilterEffectOptions [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfiltereffectoptions2",
          children: "setFilterEffectOptions [2/2]"
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
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setlocalrendertargetfps",
          children: "setLocalRenderTargetFps"
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
          href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframebeforemixingparameters1",
          children: "setPlaybackAudioFrameBeforeMixingParameters [2/2]"
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
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setremoterendertargetfps",
          children: "setRemoteRenderTargetFps"
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
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setremoteuserspatialaudioparams",
          children: "setRemoteUserSpatialAudioParams"
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
          href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_setscreencapturescenario",
          children: "setScreenCaptureScenario"
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
          href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_startaudiorecording1",
          children: "startAudioRecording [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_startaudiorecording3",
          children: "startAudioRecording [2/2]"
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
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_startlocalaudiomixer",
          children: "startLocalAudioMixer"
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
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
          children: "startMediaRenderingTracing"
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
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startplaybackdevicetest",
          children: "startPlaybackDeviceTest"
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
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_startrecordingdevicetest",
          children: "startRecordingDeviceTest"
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
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithouttranscoding",
          children: "startRtmpStreamWithoutTranscoding"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding",
          children: "startRtmpStreamWithTranscoding"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture",
          children: "startScreenCapture"
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
          href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_stopaudiorecording",
          children: "stopAudioRecording"
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
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_stoplocalaudiomixer",
          children: "stopLocalAudioMixer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/local-transcoder#api_irtcengine_stoplocalvideotranscoder",
          children: "stopLocalVideoTranscoder"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stopplaybackdevicetest",
          children: "stopPlaybackDeviceTest"
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
          href: "/zh-CN/api-reference/rtc/android/device-management/audio-device#api_irtcengine_stoprecordingdevicetest",
          children: "stopRecordingDeviceTest"
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
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_stoprtmpstream",
          children: "stopRtmpStream"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_stopscreencapture",
          children: "stopScreenCapture"
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
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_takesnapshot",
          children: "takeSnapshot [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengine_takesnapshot2",
          children: "takeSnapshot [2/2]"
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
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions",
          children: "updateChannelMediaOptions"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audiomixer#api_irtcengine_updatelocalaudiomixerconfiguration",
          children: "updateLocalAudioMixerConfiguration"
        })
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
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_updatertmptranscoding",
          children: "updateRtmpTranscoding"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_updatescreencaptureparameters",
          children: "updateScreenCaptureParameters"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_irtcengineeventhandler"
    }), `
`, _jsx(_components.h2, {
      id: "irtcengineeventhandler",
      children: "IRtcEngineEventHandler"
    }), `
`, _jsx(_components.p, {
      children: "封装 SDK 向应用层发送事件回调的方法。"
    }), `
`, _jsx("a", {
      id: "class_irtcengineeventhandler__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
        children: "IRtcEngineEventHandler"
      }), " 是 SDK 用于向应用层发送事件回调的接口类。你可以继承该类以接收所需的事件通知。该接口中的所有方法均为默认空实现，你可以根据需要选择性地重写部分方法。为确保 SDK 正常运行，建议在回调方法中避免执行耗时操作或调用阻塞 API，例如 ", _jsx(_components.code, {
        children: "SendMessage"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-22",
      children: "相关参考"
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
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onfirstremoteaudiodecoded",
          children: "onFirstRemoteAudioDecoded"
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
          href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideoevent",
          children: "onLocalVideoEvent"
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
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onmultipathstats",
          children: "onMultipathStats"
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
          href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onpermissiongranted",
          children: "onPermissionGranted"
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
          href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrenewtokenresult",
          children: "onRenewTokenResult"
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
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingevent",
          children: "onRtmpStreamingEvent"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged",
          children: "onRtmpStreamingStateChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#callback_irtcengineeventhandler_onsnapshottaken",
          children: "onSnapshotTaken"
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
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo",
          children: "onTranscodedStreamLayoutInfo"
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
          href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult",
          children: "onVideoRenderingTracingResult"
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
`]
    }), `
`, _jsx("a", {
      id: "class_irtcengineex"
    }), `
`, _jsx(_components.h2, {
      id: "rtcengineex",
      children: "RtcEngineEx"
    }), `
`, _jsx(_components.p, {
      children: "扩展 RtcEngine 接口的功能。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-23",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex",
          children: "addVideoWatermarkEx [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex1",
          children: "addVideoWatermarkEx [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengineex_adjustuserplaybacksignalvolumeex",
          children: "adjustUserPlaybackSignalVolumeEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_clearvideowatermarkex",
          children: "clearVideoWatermarkEx"
        })
      }), `
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
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_playeffectex",
          children: "playEffectEx [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_playeffectex2",
          children: "playEffectEx [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_preloadeffectex",
          children: "preloadEffectEx [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengineex_preloadeffectex2",
          children: "preloadEffectEx [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_removevideowatermarkex",
          children: "removeVideoWatermarkEx"
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
          href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_sendstreammessageex",
          children: "sendStreamMessageEx"
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
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideosubscriptionoptionsex",
          children: "setRemoteVideoSubscriptionOptionsEx"
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
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribeaudioallowlistex",
          children: "setSubscribeAudioAllowlistEx"
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
          href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setsubscribevideoallowlistex",
          children: "setSubscribeVideoAllowlistEx"
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
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_startrtmpstreamwithouttranscodingex",
          children: "startRtmpStreamWithoutTranscodingEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_startrtmpstreamwithtranscodingex",
          children: "startRtmpStreamWithTranscodingEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_stopchannelmediarelayex",
          children: "stopChannelMediaRelayEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_stoprtmpstreamex",
          children: "stopRtmpStreamEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_takesnapshotex",
          children: "takeSnapshotEx [1/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/snapshot#api_irtcengineex_takesnapshotex2",
          children: "takeSnapshotEx [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_updatechannelmediaoptionsex",
          children: "updateChannelMediaOptionsEx"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengineex_updatertmptranscodingex",
          children: "updateRtmpTranscodingEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_irtcenginereleasecallback"
    }), `
`, _jsx(_components.h2, {
      id: "irtcenginereleasecallback",
      children: "IRtcEngineReleaseCallback"
    }), `
`, _jsx(_components.p, {
      children: "用于异步销毁引擎。"
    }), `
`, _jsx("a", {
      id: "class_irtcenginereleasecallback__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-5",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-24",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/initialize#callback_irtcenginereleasecallback_onenginereleased",
          children: "onEngineReleased"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_ivideoeffectobject"
    }), `
`, _jsx(_components.h2, {
      id: "ivideoeffectobject",
      children: "IVideoEffectObject"
    }), `
`, _jsx(_components.p, {
      children: "用于管理和配置视频特效功能，例如美颜、风格妆容和滤镜。"
    }), `
`, _jsx("a", {
      id: "class_ivideoeffectobject__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-6",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-25",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_addorupdatevideoeffect",
          children: "addOrUpdateVideoEffect"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectboolparam",
          children: "getVideoEffectBoolParam"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectfloatparam",
          children: "getVideoEffectFloatParam"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_getvideoeffectintparam",
          children: "getVideoEffectIntParam"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_performvideoeffectaction",
          children: "performVideoEffectAction"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_removevideoeffect",
          children: "removeVideoEffect"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectboolparam",
          children: "setVideoEffectBoolParam"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectfloatparam",
          children: "setVideoEffectFloatParam"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_ivideoeffectobject_setvideoeffectintparam",
          children: "setVideoEffectIntParam"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_ivideoencodedframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "ivideoencodedframeobserver",
      children: "IVideoEncodedFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "用于监听编码后的视频帧。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-26",
      children: "相关参考"
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
`, _jsx("a", {
      id: "class_ivideoframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "ivideoframeobserver",
      children: "IVideoFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "用于处理视频帧的回调。"
    }), `
`, _jsx("a", {
      id: "class_ivideoframeobserver__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以通过实现 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
        children: "IVideoFrameObserver"
      }), " 接口中的方法，接收并处理本地设备采集或远端用户发送的视频帧。"]
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-27",
      children: "相关参考"
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
`, _jsx("a", {
      id: "class_player"
    }), `
`, _jsx(_components.h2, {
      id: "player",
      children: "Player"
    }), `
`, _jsx(_components.p, {
      children: "用于播放 URL 资源。"
    }), `
`, _jsx("a", {
      id: "class_player__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-7",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-28",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getconfigs_player",
          children: "getConfigs [2/3]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getinfo",
          children: "getInfo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getposition",
          children: "getPosition"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getstats",
          children: "getStats"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_muteaudio",
          children: "muteAudio"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_mutevideo",
          children: "muteVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
          children: "openWithUrl"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_pause_player",
          children: "pause"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player",
          children: "play"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player",
          children: "Player"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_preloadwithurl",
          children: "preloadWithUrl"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player",
          children: "registerObserver"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_seek",
          children: "seek"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_setcanvas",
          children: "setCanvas"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_setconfigs_player",
          children: "setConfigs [2/3]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player",
          children: "stop"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_switchwithurl",
          children: "switchWithUrl"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_unregisterobserver_player",
          children: "unregisterObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_playerconfig"
    }), `
`, _jsx(_components.h2, {
      id: "playerconfig",
      children: "PlayerConfig"
    }), `
`, _jsx(_components.p, {
      children: "用于配置媒体播放器选项。"
    }), `
`, _jsx("a", {
      id: "class_playerconfig__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-8",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-29",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getabrfallbacklayer",
          children: "getAbrFallbackLayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getabrsubscriptionlayer",
          children: "getAbrSubscriptionLayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getautoplay",
          children: "getAutoPlay"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getloopcount",
          children: "getLoopCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getplaybackspeed",
          children: "getPlaybackSpeed"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_getplayoutvolume",
          children: "getPlayoutVolume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setabrfallbacklayer",
          children: "setAbrFallbackLayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setabrsubscriptionlayer",
          children: "setAbrSubscriptionLayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setautoplay",
          children: "setAutoPlay"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setloopcount",
          children: "setLoopCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setplaybackspeed",
          children: "setPlaybackSpeed"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_playerconfig_setplayoutvolume",
          children: "setPlayoutVolume"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_playergetstatscallback"
    }), `
`, _jsx(_components.h2, {
      id: "playergetstatscallback",
      children: "PlayerGetStatsCallback"
    }), `
`, _jsx(_components.p, {
      children: "用于获取播放统计信息的回调接口。"
    }), `
`, _jsx("a", {
      id: "class_playergetstatscallback__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-9",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-30",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playergetstatscallback_onresult_playergetstatscallback",
          children: "onResult"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_playerobserver"
    }), `
`, _jsx(_components.h2, {
      id: "playerobserver",
      children: "PlayerObserver"
    }), `
`, _jsx(_components.p, {
      children: "PlayerObserver 用于接收播放器的事件回调。"
    }), `
`, _jsx("a", {
      id: "class_playerobserver__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-10",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-31",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onaudiovolumeindication_playerobserver",
          children: "onAudioVolumeIndication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onevent",
          children: "onEvent"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onmetadata_playerobserver",
          children: "onMetadata [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onplayerinfoupdated_playerobserver",
          children: "onPlayerInfoUpdated [2/2]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onpositionchanged_playerobserver",
          children: "onPositionChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onresolutionchanged",
          children: "onResolutionChanged"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged",
          children: "onStateChanged"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_rte"
    }), `
`, _jsx(_components.h2, {
      id: "rte",
      children: "Rte"
    }), `
`, _jsx(_components.p, {
      children: "Rte 类是声网实时互动 SDK 的基础接口。"
    }), `
`, _jsx("a", {
      id: "class_rte__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-11",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-32",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_destroy_rte",
          children: "destroy"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_getconfigs_rte",
          children: "getConfigs [1/3]"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_getfrombridge",
          children: "getFromBridge"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine",
          children: "initMediaEngine"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_rte_rte",
          children: "Rte"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_setconfigs_rte",
          children: "setConfigs [1/3]"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "class_rteplayerinfo"
    }), `
`, _jsx(_components.h2, {
      id: "playerinfo",
      children: "PlayerInfo"
    }), `
`, _jsx(_components.p, {
      children: "包含播放器和媒体流的信息。"
    }), `
`, _jsx("a", {
      id: "class_rteplayerinfo__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-12",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.h3, {
      id: "相关参考-33",
      children: "相关参考"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_abrsubscriptionlayer",
          children: "abrSubscriptionLayer"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_audiobitspersample",
          children: "audioBitsPerSample"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_audiochannels",
          children: "audioChannels"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_audiosamplerate",
          children: "audioSampleRate"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_currenturl",
          children: "currentUrl"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_duration",
          children: "duration"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_hasaudio",
          children: "hasAudio"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_hasvideo",
          children: "hasVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_isaudiomuted",
          children: "isAudioMuted"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_isvideomuted",
          children: "isVideoMuted"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_state",
          children: "state"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_streamcount",
          children: "streamCount"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_videoheight",
          children: "videoHeight"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_videowidth",
          children: "videoWidth"
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
