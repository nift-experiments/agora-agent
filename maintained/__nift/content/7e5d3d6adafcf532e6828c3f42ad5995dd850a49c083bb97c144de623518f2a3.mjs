import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音视频观测器",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_mediaplayer_observer" />

<a id="api_imediaplayer_registeraudioframeobserver2_imediaplayer" />

## registerAudioFrameObserver [#registeraudioframeobserver]

注册音频帧观测器对象。

<a id="api_imediaplayer_registeraudioframeobserver2_imediaplayer__prototype" />

\`\`\`java
int registerAudioFrameObserver(IMediaPlayerAudioFrameObserver audioFrameObserver, int mode);
\`\`\`

<a id="api_imediaplayer_registeraudioframeobserver2_imediaplayer__detailed_desc" />

<a id="api_imediaplayer_registeraudioframeobserver2_imediaplayer__parameters" />

### 参数 [#参数]

#### \`audioFrameObserver\` [#audioframeobserver]

音频帧观测器对象，用于接收每一帧音频数据。详见 [IMediaPlayerAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayeraudioframeobserver)。

#### \`mode\` [#mode]

音频帧的使用模式：

* RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_ONLY （0）：（默认）只读模式。例如，你通过声网 SDK 获取音频数据后，再推送 RTMP 或 RTMPS 流。
* RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_WRITE （2）：读写模式。你可以从 AudioFrame 中读取音频数据，修改后再播放。例如，你有自己的音频特效处理模块，并进行语音预处理，如变声。

<a id="api_imediaplayer_registeraudioframeobserver2_imediaplayer__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_registerplayersourceobserver" />

## registerPlayerObserver [#registerplayerobserver]

注册媒体播放器观察器。

<a id="api_imediaplayer_registerplayersourceobserver__prototype" />

\`\`\`java
int registerPlayerObserver(IMediaPlayerObserver playerObserver);
\`\`\`

<a id="api_imediaplayer_registerplayersourceobserver__detailed_desc" />

用于监听媒体播放器播放过程中的事件。

<a id="api_imediaplayer_registerplayersourceobserver__timing" />

### 调用时机 [#调用时机]

该方法可以在加入频道前或加入频道后调用。

<a id="api_imediaplayer_registerplayersourceobserver__parameters" />

### 参数 [#参数-1]

#### \`playerObserver\` [#playerobserver]

媒体播放器观察器，详见 [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)。

<a id="api_imediaplayer_registerplayersourceobserver__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_registervideoframeobserver_imediaplayer" />

## registerVideoFrameObserver [#registervideoframeobserver]

注册视频帧观察者对象。

<a id="api_imediaplayer_registervideoframeobserver_imediaplayer__prototype" />

\`\`\`java
int registerVideoFrameObserver(IMediaPlayerVideoFrameObserver videoFrameObserver);
\`\`\`

<a id="api_imediaplayer_registervideoframeobserver_imediaplayer__detailed_desc" />

你需要实现 [IMediaPlayerVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayervideoframeobserver) 类，并注册回调。成功注册后，SDK 每次接收到视频帧时都会触发已注册的回调。

<a id="api_imediaplayer_registervideoframeobserver_imediaplayer__parameters" />

### 参数 [#参数-2]

#### \`videoFrameObserver\` [#videoframeobserver]

用于上报每一帧视频的接收情况。详见 [IMediaPlayerVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayervideoframeobserver)。

<a id="api_imediaplayer_registervideoframeobserver_imediaplayer__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_unregisterplayersourceobserver" />

## unRegisterPlayerObserver [#unregisterplayerobserver]

释放媒体播放器观察者。

<a id="api_imediaplayer_unregisterplayersourceobserver__prototype" />

\`\`\`java
int unRegisterPlayerObserver(IMediaPlayerObserver playerObserver);
\`\`\`

<a id="api_imediaplayer_unregisterplayersourceobserver__detailed_desc" />

<a id="api_imediaplayer_unregisterplayersourceobserver__parameters" />

### 参数 [#参数-3]

#### \`playerObserver\` [#playerobserver-1]

用于监听播放过程中的事件的媒体播放器观察者。详见 [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)。

<a id="api_imediaplayer_unregisterplayersourceobserver__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver" />

## onAudioVolumeIndication [#onaudiovolumeindication]

报告媒体播放器音量的回调。

<a id="callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver__prototype" />

\`\`\`java
@CalledByNative void onAudioVolumeIndication(int volume);
\`\`\`

<a id="callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver__detailed_desc" />

该回调每 200 毫秒触发一次。

<a id="callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver__timing" />

### 触发时机 [#触发时机]

该回调每 200 毫秒触发一次，用于报告媒体播放器的当前音量。

<a id="callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver__parameters" />

### 参数 [#参数-4]

#### \`volume\` [#volume]

媒体播放器的音量，取值范围为 0 到 255。

### 所属接口类 [#所属接口类-4]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)

<a id="callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver" />

## onFrame [#onframe]

播放器接收到音频帧时触发的回调。

<a id="callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__prototype" />

\`\`\`java
@CalledByNative AudioFrame onFrame(AudioFrame frame);
\`\`\`

<a id="callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__detailed_desc" />

注册音频帧观察器后，该回调会在播放器每次接收到音频帧时触发。

<a id="callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__timing" />

### 触发时机 [#触发时机-1]

该回调在播放器接收到音频帧时被触发。

<a id="callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__parameters" />

### 参数 [#参数-5]

#### \`frame\` [#frame]

音频帧信息，详见 [AudioFrame](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioframe)。

<a id="callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__return_values" />

### 返回值 [#返回值-4]

在调用 [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver) 并设置 \`mode\` 参数后传入的音频数据，用于处理音频数据。

### 所属接口类 [#所属接口类-5]

* [IMediaPlayerAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayeraudioframeobserver)

<a id="callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver" />

## onFrame [#onframe-1]

播放器接收到视频帧时触发的回调。

<a id="callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver__prototype" />

\`\`\`java
@CalledByNative void onFrame(VideoFrame frame);
\`\`\`

<a id="callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver__detailed_desc" />

注册视频帧观察器后，该回调在播放器接收到视频帧时被触发。

<a id="callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver__timing" />

### 触发时机 [#触发时机-2]

该回调在播放器接收到视频帧时被触发。

<a id="callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver__parameters" />

### 参数 [#参数-6]

#### \`frame\` [#frame-1]

视频帧信息。

### 所属接口类 [#所属接口类-6]

* [IMediaPlayerVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayervideoframeobserver)

<a id="callback_imediaplayersourceobserver_onmetadata" />

## onMetaData [#onmetadata]

接收到媒体元数据时触发的回调。

<a id="callback_imediaplayersourceobserver_onmetadata__prototype" />

\`\`\`java
void onMetaData(Constants.MediaPlayerMetadataType type, byte[] data)
\`\`\`

<a id="callback_imediaplayersourceobserver_onmetadata__detailed_desc" />

该回调在播放器接收到媒体元数据时被触发。

<a id="callback_imediaplayersourceobserver_onmetadata__timing" />

### 触发时机 [#触发时机-3]

该回调在播放器接收到媒体元数据时被触发。

<a id="callback_imediaplayersourceobserver_onmetadata__parameters" />

### 参数 [#参数-7]

#### \`type\` [#type]

媒体元数据的类型，详见 [MediaPlayerMetadataType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayermetadatatype)。

#### \`data\` [#data]

媒体元数据的详细内容。

### 所属接口类 [#所属接口类-7]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)

<a id="callback_imediaplayersourceobserver_onplaybufferupdated" />

## onPlayBufferUpdated [#onplaybufferupdated]

onPlayBufferUpdated 回调：报告缓冲数据可支持的播放时长。

<a id="callback_imediaplayersourceobserver_onplaybufferupdated__prototype" />

\`\`\`java
void onPlayBufferUpdated(long playCachedBuffer)
\`\`\`

<a id="callback_imediaplayersourceobserver_onplaybufferupdated__detailed_desc" />

该回调在播放在线媒体资源时每两秒触发一次。

* 当缓冲数据可支持的播放时长小于阈值（默认值为 0）时，SDK 返回 PLAYER\\_EVENT\\_BUFFER\\_LOW （6）。
* 当缓冲数据可支持的播放时长大于阈值（默认值为 0）时，SDK 返回 PLAYER\\_EVENT\\_BUFFER\\_RECOVER （7）。

<a id="callback_imediaplayersourceobserver_onplaybufferupdated__timing" />

### 触发时机 [#触发时机-4]

该回调在播放在线媒体资源时每两秒被触发。

<a id="callback_imediaplayersourceobserver_onplaybufferupdated__parameters" />

### 参数 [#参数-8]

#### \`playCachedBuffer\` [#playcachedbuffer]

缓冲数据可支持的播放时长，单位为毫秒。

### 所属接口类 [#所属接口类-8]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)

<a id="callback_imediaplayersourceobserver_onplayerevent" />

## onPlayerEvent [#onplayerevent]

播放器事件回调。

<a id="callback_imediaplayersourceobserver_onplayerevent__prototype" />

\`\`\`java
void onPlayerEvent(Constants.MediaPlayerEvent eventCode, long elapsedTime, String message)
\`\`\`

<a id="callback_imediaplayersourceobserver_onplayerevent__detailed_desc" />

调用 [seek](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_seek) 方法后，SDK 会触发该回调报告操作结果。

<a id="callback_imediaplayersourceobserver_onplayerevent__parameters" />

### 参数 [#参数-9]

#### \`eventCode\` [#eventcode]

播放器事件，详见 [MediaPlayerEvent](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayerevent)。

#### \`elapsedTime\` [#elapsedtime]

事件发生的时间，单位为毫秒。

#### \`message\` [#message]

关于该事件的补充信息。

### 所属接口类 [#所属接口类-9]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)

<a id="callback_imediaplayersourceobserver_onplayerinfoupdated" />

## onPlayerInfoUpdated [#onplayerinfoupdated]

媒体播放器相关信息发生变化时的回调。

<a id="callback_imediaplayersourceobserver_onplayerinfoupdated__prototype" />

\`\`\`java
@CalledByNative void onPlayerInfoUpdated(PlayerUpdatedInfo info);
\`\`\`

<a id="callback_imediaplayersourceobserver_onplayerinfoupdated__detailed_desc" />

你可以使用该回调进行故障排查。

<a id="callback_imediaplayersourceobserver_onplayerinfoupdated__timing" />

### 触发时机 [#触发时机-5]

该回调在媒体播放器相关信息发生变化时被触发。

<a id="callback_imediaplayersourceobserver_onplayerinfoupdated__parameters" />

### 参数 [#参数-10]

#### \`info\` [#info]

媒体播放器相关信息。详见 [PlayerUpdatedInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-playerupdatedinfo)。

### 所属接口类 [#所属接口类-10]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)

<a id="callback_imediaplayersourceobserver_onplayersourcestatechanged" />

## onPlayerStateChanged [#onplayerstatechanged]

播放状态发生改变回调。

<a id="callback_imediaplayersourceobserver_onplayersourcestatechanged__prototype" />

\`\`\`java
void onPlayerStateChanged(Constants.MediaPlayerState state, Constants.MediaPlayerReason reason);
\`\`\`

<a id="callback_imediaplayersourceobserver_onplayersourcestatechanged__detailed_desc" />

当媒体播放器的状态发生变化时，SDK 会触发该回调。

<a id="callback_imediaplayersourceobserver_onplayersourcestatechanged__parameters" />

### 参数 [#参数-11]

#### \`state\` [#state]

播放状态，详见 [MediaPlayerState](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayerstate)。

#### \`reason\` [#reason]

播放状态变化的原因，详见 [MediaPlayerReason](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayerreason)。

### 所属接口类 [#所属接口类-11]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)

<a id="callback_imediaplayersourceobserver_onplayersrcinfochanged" />

## onPlayerSrcInfoChanged [#onplayersrcinfochanged]

媒体资源视频码率发生变化回调。

<a id="callback_imediaplayersourceobserver_onplayersrcinfochanged__prototype" />

\`\`\`java
void onPlayerSrcInfoChanged(SrcInfo from, SrcInfo to)
\`\`\`

<a id="callback_imediaplayersourceobserver_onplayersrcinfochanged__detailed_desc" />

<a id="callback_imediaplayersourceobserver_onplayersrcinfochanged__timing" />

### 触发时机 [#触发时机-6]

该回调在媒体资源的视频码率发生变化时被触发。

<a id="callback_imediaplayersourceobserver_onplayersrcinfochanged__parameters" />

### 参数 [#参数-12]

#### \`from\` [#from]

正在播放的媒体资源的视频码率信息。详见 [SrcInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-srcinfo)。

#### \`to\` [#to]

变更后的视频码率信息。详见 [SrcInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-srcinfo)。

### 所属接口类 [#所属接口类-12]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)

<a id="callback_imediaplayersourceobserver_onpositionchanged" />

## onPositionChanged [#onpositionchanged]

播放进度回调。

<a id="callback_imediaplayersourceobserver_onpositionchanged__prototype" />

\`\`\`java
void onPositionChanged(long positionMs, long timestampMs)
\`\`\`

<a id="callback_imediaplayersourceobserver_onpositionchanged__detailed_desc" />

该回调用于报告媒体文件的播放进度。

<a id="callback_imediaplayersourceobserver_onpositionchanged__timing" />

### 触发时机 [#触发时机-7]

该回调在播放媒体文件时每两秒被触发。

<a id="callback_imediaplayersourceobserver_onpositionchanged__parameters" />

### 参数 [#参数-13]

#### \`positionMs\` [#positionms]

媒体文件的播放位置，单位为毫秒。

#### \`timestampMs\` [#timestampms]

当前播放进度对应的 NTP 时间戳，单位为毫秒。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅在频道内生效。
  </CalloutDescription>
</CalloutContainer>

### 所属接口类 [#所属接口类-13]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)

<a id="callback_imediaplayersourceobserver_onpreloadevent" />

## onPreloadEvent [#onpreloadevent]

预加载媒体资源事件回调。

<a id="callback_imediaplayersourceobserver_onpreloadevent__prototype" />

\`\`\`java
void onPreloadEvent(String src, Constants.MediaPlayerPreloadEvent event)
\`\`\`

<a id="callback_imediaplayersourceobserver_onpreloadevent__detailed_desc" />

该回调用于上报预加载媒体资源过程中发生的事件。

<a id="callback_imediaplayersourceobserver_onpreloadevent__parameters" />

### 参数 [#参数-14]

#### \`src\` [#src]

媒体资源的 URL。

#### \`event\` [#event]

预加载媒体资源时发生的事件。详见 [MediaPlayerPreloadEvent](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-playerpreloadevent)。

### 所属接口类 [#所属接口类-14]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)

<a id="callback_imediaplayercustomdataprovider_onreaddata" />

## onReadData [#onreaddata]

SDK 读取媒体资源数据时触发的回调。

<a id="callback_imediaplayercustomdataprovider_onreaddata__prototype" />

\`\`\`java
@CalledByNative int onReadData(ByteBuffer buffer, int bufferSize);
\`\`\`

<a id="callback_imediaplayercustomdataprovider_onreaddata__detailed_desc" />

当你调用 [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) 方法打开媒体资源时，SDK 会触发该回调，并请求你传入媒体资源数据的缓冲区。

<a id="callback_imediaplayercustomdataprovider_onreaddata__parameters" />

### 参数 [#参数-15]

#### \`buffer\` [#buffer]

数据缓冲区。你需要将 SDK 请求的 \`bufferSize\` 字节数据写入该缓冲区。详见 \`ByteBuffer\`。

#### \`bufferSize\` [#buffersize]

数据缓冲区的长度，单位为字节。

<a id="callback_imediaplayercustomdataprovider_onreaddata__return_values" />

### 返回值 [#返回值-5]

* 数据读取成功时，返回实际读取的数据长度（字节）。
* 数据读取失败时，返回 0。

### 所属接口类 [#所属接口类-15]

* [IMediaPlayerCustomDataProvider](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercustomdataprovider)
`;
export let structuredData = {
  contents: [{
    heading: "registeraudioframeobserver",
    content: "注册音频帧观测器对象。"
  }, {
    heading: "audioframeobserver",
    content: "音频帧观测器对象，用于接收每一帧音频数据。详见 IMediaPlayerAudioFrameObserver。"
  }, {
    heading: "mode",
    content: "音频帧的使用模式："
  }, {
    heading: "mode",
    content: "RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_ONLY （0）：（默认）只读模式。例如，你通过声网 SDK 获取音频数据后，再推送 RTMP 或 RTMPS 流。"
  }, {
    heading: "mode",
    content: "RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_WRITE （2）：读写模式。你可以从 AudioFrame 中读取音频数据，修改后再播放。例如，你有自己的音频特效处理模块，并进行语音预处理，如变声。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "IMediaPlayer"
  }, {
    heading: "registerplayerobserver",
    content: "注册媒体播放器观察器。"
  }, {
    heading: "registerplayerobserver",
    content: "用于监听媒体播放器播放过程中的事件。"
  }, {
    heading: "调用时机",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "playerobserver",
    content: "媒体播放器观察器，详见 IMediaPlayerObserver。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-1",
    content: "IMediaPlayer"
  }, {
    heading: "registervideoframeobserver",
    content: "注册视频帧观察者对象。"
  }, {
    heading: "registervideoframeobserver",
    content: "你需要实现 IMediaPlayerVideoFrameObserver 类，并注册回调。成功注册后，SDK 每次接收到视频帧时都会触发已注册的回调。"
  }, {
    heading: "videoframeobserver",
    content: "用于上报每一帧视频的接收情况。详见 IMediaPlayerVideoFrameObserver。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-2",
    content: "IMediaPlayer"
  }, {
    heading: "unregisterplayerobserver",
    content: "释放媒体播放器观察者。"
  }, {
    heading: "playerobserver-1",
    content: "用于监听播放过程中的事件的媒体播放器观察者。详见 IMediaPlayerObserver。"
  }, {
    heading: "返回值-3",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-3",
    content: "IMediaPlayer"
  }, {
    heading: "onaudiovolumeindication",
    content: "报告媒体播放器音量的回调。"
  }, {
    heading: "onaudiovolumeindication",
    content: "该回调每 200 毫秒触发一次。"
  }, {
    heading: "触发时机",
    content: "该回调每 200 毫秒触发一次，用于报告媒体播放器的当前音量。"
  }, {
    heading: "volume",
    content: "媒体播放器的音量，取值范围为 0 到 255。"
  }, {
    heading: "所属接口类-4",
    content: "IMediaPlayerObserver"
  }, {
    heading: "onframe",
    content: "播放器接收到音频帧时触发的回调。"
  }, {
    heading: "onframe",
    content: "注册音频帧观察器后，该回调会在播放器每次接收到音频帧时触发。"
  }, {
    heading: "触发时机-1",
    content: "该回调在播放器接收到音频帧时被触发。"
  }, {
    heading: "frame",
    content: "音频帧信息，详见 AudioFrame。"
  }, {
    heading: "返回值-4",
    content: "在调用 registerAudioFrameObserver 并设置 `mode` 参数后传入的音频数据，用于处理音频数据。"
  }, {
    heading: "所属接口类-5",
    content: "IMediaPlayerAudioFrameObserver"
  }, {
    heading: "onframe-1",
    content: "播放器接收到视频帧时触发的回调。"
  }, {
    heading: "onframe-1",
    content: "注册视频帧观察器后，该回调在播放器接收到视频帧时被触发。"
  }, {
    heading: "触发时机-2",
    content: "该回调在播放器接收到视频帧时被触发。"
  }, {
    heading: "frame-1",
    content: "视频帧信息。"
  }, {
    heading: "所属接口类-6",
    content: "IMediaPlayerVideoFrameObserver"
  }, {
    heading: "onmetadata",
    content: "接收到媒体元数据时触发的回调。"
  }, {
    heading: "onmetadata",
    content: "该回调在播放器接收到媒体元数据时被触发。"
  }, {
    heading: "触发时机-3",
    content: "该回调在播放器接收到媒体元数据时被触发。"
  }, {
    heading: "type",
    content: "媒体元数据的类型，详见 MediaPlayerMetadataType。"
  }, {
    heading: "data",
    content: "媒体元数据的详细内容。"
  }, {
    heading: "所属接口类-7",
    content: "IMediaPlayerObserver"
  }, {
    heading: "onplaybufferupdated",
    content: "onPlayBufferUpdated 回调：报告缓冲数据可支持的播放时长。"
  }, {
    heading: "onplaybufferupdated",
    content: "该回调在播放在线媒体资源时每两秒触发一次。"
  }, {
    heading: "onplaybufferupdated",
    content: "当缓冲数据可支持的播放时长小于阈值（默认值为 0）时，SDK 返回 PLAYER\\_EVENT\\_BUFFER\\_LOW （6）。"
  }, {
    heading: "onplaybufferupdated",
    content: "当缓冲数据可支持的播放时长大于阈值（默认值为 0）时，SDK 返回 PLAYER\\_EVENT\\_BUFFER\\_RECOVER （7）。"
  }, {
    heading: "触发时机-4",
    content: "该回调在播放在线媒体资源时每两秒被触发。"
  }, {
    heading: "playcachedbuffer",
    content: "缓冲数据可支持的播放时长，单位为毫秒。"
  }, {
    heading: "所属接口类-8",
    content: "IMediaPlayerObserver"
  }, {
    heading: "onplayerevent",
    content: "播放器事件回调。"
  }, {
    heading: "onplayerevent",
    content: "调用 seek 方法后，SDK 会触发该回调报告操作结果。"
  }, {
    heading: "eventcode",
    content: "播放器事件，详见 MediaPlayerEvent。"
  }, {
    heading: "elapsedtime",
    content: "事件发生的时间，单位为毫秒。"
  }, {
    heading: "message",
    content: "关于该事件的补充信息。"
  }, {
    heading: "所属接口类-9",
    content: "IMediaPlayerObserver"
  }, {
    heading: "onplayerinfoupdated",
    content: "媒体播放器相关信息发生变化时的回调。"
  }, {
    heading: "onplayerinfoupdated",
    content: "你可以使用该回调进行故障排查。"
  }, {
    heading: "触发时机-5",
    content: "该回调在媒体播放器相关信息发生变化时被触发。"
  }, {
    heading: "info",
    content: "媒体播放器相关信息。详见 PlayerUpdatedInfo。"
  }, {
    heading: "所属接口类-10",
    content: "IMediaPlayerObserver"
  }, {
    heading: "onplayerstatechanged",
    content: "播放状态发生改变回调。"
  }, {
    heading: "onplayerstatechanged",
    content: "当媒体播放器的状态发生变化时，SDK 会触发该回调。"
  }, {
    heading: "state",
    content: "播放状态，详见 MediaPlayerState。"
  }, {
    heading: "reason",
    content: "播放状态变化的原因，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-11",
    content: "IMediaPlayerObserver"
  }, {
    heading: "onplayersrcinfochanged",
    content: "媒体资源视频码率发生变化回调。"
  }, {
    heading: "触发时机-6",
    content: "该回调在媒体资源的视频码率发生变化时被触发。"
  }, {
    heading: "from",
    content: "正在播放的媒体资源的视频码率信息。详见 SrcInfo。"
  }, {
    heading: "to",
    content: "变更后的视频码率信息。详见 SrcInfo。"
  }, {
    heading: "所属接口类-12",
    content: "IMediaPlayerObserver"
  }, {
    heading: "onpositionchanged",
    content: "播放进度回调。"
  }, {
    heading: "onpositionchanged",
    content: "该回调用于报告媒体文件的播放进度。"
  }, {
    heading: "触发时机-7",
    content: "该回调在播放媒体文件时每两秒被触发。"
  }, {
    heading: "positionms",
    content: "媒体文件的播放位置，单位为毫秒。"
  }, {
    heading: "timestampms",
    content: "当前播放进度对应的 NTP 时间戳，单位为毫秒。"
  }, {
    heading: "timestampms",
    content: "该参数仅在频道内生效。"
  }, {
    heading: "所属接口类-13",
    content: "IMediaPlayerObserver"
  }, {
    heading: "onpreloadevent",
    content: "预加载媒体资源事件回调。"
  }, {
    heading: "onpreloadevent",
    content: "该回调用于上报预加载媒体资源过程中发生的事件。"
  }, {
    heading: "src",
    content: "媒体资源的 URL。"
  }, {
    heading: "event",
    content: "预加载媒体资源时发生的事件。详见 MediaPlayerPreloadEvent。"
  }, {
    heading: "所属接口类-14",
    content: "IMediaPlayerObserver"
  }, {
    heading: "onreaddata",
    content: "SDK 读取媒体资源数据时触发的回调。"
  }, {
    heading: "onreaddata",
    content: "当你调用 openWithMediaSource 方法打开媒体资源时，SDK 会触发该回调，并请求你传入媒体资源数据的缓冲区。"
  }, {
    heading: "buffer",
    content: "数据缓冲区。你需要将 SDK 请求的 `bufferSize` 字节数据写入该缓冲区。详见 `ByteBuffer`。"
  }, {
    heading: "buffersize",
    content: "数据缓冲区的长度，单位为字节。"
  }, {
    heading: "返回值-5",
    content: "数据读取成功时，返回实际读取的数据长度（字节）。"
  }, {
    heading: "返回值-5",
    content: "数据读取失败时，返回 0。"
  }, {
    heading: "所属接口类-15",
    content: "IMediaPlayerCustomDataProvider"
  }],
  headings: [{
    id: "registeraudioframeobserver",
    content: "registerAudioFrameObserver"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "audioframeobserver",
    content: "`audioFrameObserver`"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "registerplayerobserver",
    content: "registerPlayerObserver"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "playerobserver",
    content: "`playerObserver`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "registervideoframeobserver",
    content: "registerVideoFrameObserver"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "videoframeobserver",
    content: "`videoFrameObserver`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "unregisterplayerobserver",
    content: "unRegisterPlayerObserver"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "playerobserver-1",
    content: "`playerObserver`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "onaudiovolumeindication",
    content: "onAudioVolumeIndication"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "volume",
    content: "`volume`"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "onframe",
    content: "onFrame"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "frame",
    content: "`frame`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "onframe-1",
    content: "onFrame"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "frame-1",
    content: "`frame`"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "onmetadata",
    content: "onMetaData"
  }, {
    id: "触发时机-3",
    content: "触发时机"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "type",
    content: "`type`"
  }, {
    id: "data",
    content: "`data`"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "onplaybufferupdated",
    content: "onPlayBufferUpdated"
  }, {
    id: "触发时机-4",
    content: "触发时机"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "playcachedbuffer",
    content: "`playCachedBuffer`"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "onplayerevent",
    content: "onPlayerEvent"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "eventcode",
    content: "`eventCode`"
  }, {
    id: "elapsedtime",
    content: "`elapsedTime`"
  }, {
    id: "message",
    content: "`message`"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "onplayerinfoupdated",
    content: "onPlayerInfoUpdated"
  }, {
    id: "触发时机-5",
    content: "触发时机"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "info",
    content: "`info`"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "onplayerstatechanged",
    content: "onPlayerStateChanged"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "onplayersrcinfochanged",
    content: "onPlayerSrcInfoChanged"
  }, {
    id: "触发时机-6",
    content: "触发时机"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "from",
    content: "`from`"
  }, {
    id: "to",
    content: "`to`"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "onpositionchanged",
    content: "onPositionChanged"
  }, {
    id: "触发时机-7",
    content: "触发时机"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "positionms",
    content: "`positionMs`"
  }, {
    id: "timestampms",
    content: "`timestampMs`"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "onpreloadevent",
    content: "onPreloadEvent"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "src",
    content: "`src`"
  }, {
    id: "event",
    content: "`event`"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "onreaddata",
    content: "onReadData"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "buffer",
    content: "`buffer`"
  }, {
    id: "buffersize",
    content: "`bufferSize`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#registeraudioframeobserver",
  title: _jsx(_Fragment, {
    children: "registerAudioFrameObserver"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#audioframeobserver",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioFrameObserver"
    })
  })
}, {
  depth: 4,
  url: "#mode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mode"
    })
  })
}, {
  depth: 3,
  url: "#返回值",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#registerplayerobserver",
  title: _jsx(_Fragment, {
    children: "registerPlayerObserver"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#playerobserver",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "playerObserver"
    })
  })
}, {
  depth: 3,
  url: "#返回值-1",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-1",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#registervideoframeobserver",
  title: _jsx(_Fragment, {
    children: "registerVideoFrameObserver"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#videoframeobserver",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoFrameObserver"
    })
  })
}, {
  depth: 3,
  url: "#返回值-2",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-2",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#unregisterplayerobserver",
  title: _jsx(_Fragment, {
    children: "unRegisterPlayerObserver"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#playerobserver-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "playerObserver"
    })
  })
}, {
  depth: 3,
  url: "#返回值-3",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-3",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onaudiovolumeindication",
  title: _jsx(_Fragment, {
    children: "onAudioVolumeIndication"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#volume",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "volume"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-4",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onframe",
  title: _jsx(_Fragment, {
    children: "onFrame"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#frame",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frame"
    })
  })
}, {
  depth: 3,
  url: "#返回值-4",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-5",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onframe-1",
  title: _jsx(_Fragment, {
    children: "onFrame"
  })
}, {
  depth: 3,
  url: "#触发时机-2",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#frame-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frame"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-6",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onmetadata",
  title: _jsx(_Fragment, {
    children: "onMetaData"
  })
}, {
  depth: 3,
  url: "#触发时机-3",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#type",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
    })
  })
}, {
  depth: 4,
  url: "#data",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "data"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-7",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onplaybufferupdated",
  title: _jsx(_Fragment, {
    children: "onPlayBufferUpdated"
  })
}, {
  depth: 3,
  url: "#触发时机-4",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#playcachedbuffer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "playCachedBuffer"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-8",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onplayerevent",
  title: _jsx(_Fragment, {
    children: "onPlayerEvent"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#eventcode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "eventCode"
    })
  })
}, {
  depth: 4,
  url: "#elapsedtime",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapsedTime"
    })
  })
}, {
  depth: 4,
  url: "#message",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "message"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-9",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onplayerinfoupdated",
  title: _jsx(_Fragment, {
    children: "onPlayerInfoUpdated"
  })
}, {
  depth: 3,
  url: "#触发时机-5",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#info",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "info"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-10",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onplayerstatechanged",
  title: _jsx(_Fragment, {
    children: "onPlayerStateChanged"
  })
}, {
  depth: 3,
  url: "#参数-11",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#state",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "state"
    })
  })
}, {
  depth: 4,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reason"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-11",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onplayersrcinfochanged",
  title: _jsx(_Fragment, {
    children: "onPlayerSrcInfoChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-6",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-12",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#from",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "from"
    })
  })
}, {
  depth: 4,
  url: "#to",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "to"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-12",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onpositionchanged",
  title: _jsx(_Fragment, {
    children: "onPositionChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-7",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-13",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#positionms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "positionMs"
    })
  })
}, {
  depth: 4,
  url: "#timestampms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "timestampMs"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-13",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onpreloadevent",
  title: _jsx(_Fragment, {
    children: "onPreloadEvent"
  })
}, {
  depth: 3,
  url: "#参数-14",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#src",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "src"
    })
  })
}, {
  depth: 4,
  url: "#event",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "event"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-14",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onreaddata",
  title: _jsx(_Fragment, {
    children: "onReadData"
  })
}, {
  depth: 3,
  url: "#参数-15",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#buffer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 4,
  url: "#buffersize",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bufferSize"
    })
  })
}, {
  depth: 3,
  url: "#返回值-5",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-15",
  title: _jsx(_Fragment, {
    children: "所属接口类"
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
    pre: "pre",
    span: "span",
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
      id: "toc_mediaplayer_observer"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registeraudioframeobserver2_imediaplayer"
    }), `
`, _jsx(_components.h2, {
      id: "registeraudioframeobserver",
      children: "registerAudioFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册音频帧观测器对象。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registeraudioframeobserver2_imediaplayer__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " registerAudioFrameObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IMediaPlayerAudioFrameObserver audioFrameObserver, "
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
              children: " mode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registeraudioframeobserver2_imediaplayer__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registeraudioframeobserver2_imediaplayer__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "audioframeobserver",
      children: _jsx(_components.code, {
        children: "audioFrameObserver"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频帧观测器对象，用于接收每一帧音频数据。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayeraudioframeobserver",
        children: "IMediaPlayerAudioFrameObserver"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "mode",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频帧的使用模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RAW_AUDIO_FRAME_OP_MODE_READ_ONLY （0）：（默认）只读模式。例如，你通过声网 SDK 获取音频数据后，再推送 RTMP 或 RTMPS 流。"
      }), `
`, _jsx(_components.li, {
        children: "RAW_AUDIO_FRAME_OP_MODE_READ_WRITE （2）：读写模式。你可以从 AudioFrame 中读取音频数据，修改后再播放。例如，你有自己的音频特效处理模块，并进行语音预处理，如变声。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registeraudioframeobserver2_imediaplayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：方法调用失败。详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
          children: "错误码"
        }), "了解详情和解决建议。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer",
          children: "IMediaPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registerplayersourceobserver"
    }), `
`, _jsx(_components.h2, {
      id: "registerplayerobserver",
      children: "registerPlayerObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册媒体播放器观察器。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registerplayersourceobserver__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " registerPlayerObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IMediaPlayerObserver playerObserver);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registerplayersourceobserver__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "用于监听媒体播放器播放过程中的事件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registerplayersourceobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registerplayersourceobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "playerobserver",
      children: _jsx(_components.code, {
        children: "playerObserver"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体播放器观察器，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
        children: "IMediaPlayerObserver"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registerplayersourceobserver__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：方法调用失败。详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
          children: "错误码"
        }), "了解详情和解决建议。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer",
          children: "IMediaPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registervideoframeobserver_imediaplayer"
    }), `
`, _jsx(_components.h2, {
      id: "registervideoframeobserver",
      children: "registerVideoFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册视频帧观察者对象。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registervideoframeobserver_imediaplayer__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " registerVideoFrameObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IMediaPlayerVideoFrameObserver videoFrameObserver);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registervideoframeobserver_imediaplayer__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要实现 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayervideoframeobserver",
        children: "IMediaPlayerVideoFrameObserver"
      }), " 类，并注册回调。成功注册后，SDK 每次接收到视频帧时都会触发已注册的回调。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registervideoframeobserver_imediaplayer__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "videoframeobserver",
      children: _jsx(_components.code, {
        children: "videoFrameObserver"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于上报每一帧视频的接收情况。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayervideoframeobserver",
        children: "IMediaPlayerVideoFrameObserver"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_registervideoframeobserver_imediaplayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：方法调用失败。详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
          children: "错误码"
        }), "了解详情和解决建议。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-2",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer",
          children: "IMediaPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_unregisterplayersourceobserver"
    }), `
`, _jsx(_components.h2, {
      id: "unregisterplayerobserver",
      children: "unRegisterPlayerObserver"
    }), `
`, _jsx(_components.p, {
      children: "释放媒体播放器观察者。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_unregisterplayersourceobserver__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " unRegisterPlayerObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IMediaPlayerObserver playerObserver);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_unregisterplayersourceobserver__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_unregisterplayersourceobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "playerobserver-1",
      children: _jsx(_components.code, {
        children: "playerObserver"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于监听播放过程中的事件的媒体播放器观察者。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
        children: "IMediaPlayerObserver"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_unregisterplayersourceobserver__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：方法调用失败。详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
          children: "错误码"
        }), "了解详情和解决建议。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-3",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer",
          children: "IMediaPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver"
    }), `
`, _jsx(_components.h2, {
      id: "onaudiovolumeindication",
      children: "onAudioVolumeIndication"
    }), `
`, _jsx(_components.p, {
      children: "报告媒体播放器音量的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " onAudioVolumeIndication"
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
              children: " volume);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调每 200 毫秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调每 200 毫秒触发一次，用于报告媒体播放器的当前音量。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onaudiovolumeindication_imediaplayersourceobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "volume",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体播放器的音量，取值范围为 0 到 255。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-4",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "onframe",
      children: "onFrame"
    }), `
`, _jsx(_components.p, {
      children: "播放器接收到音频帧时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " AudioFrame "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AudioFrame frame);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注册音频帧观察器后，该回调会在播放器每次接收到音频帧时触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放器接收到音频帧时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "frame",
      children: _jsx(_components.code, {
        children: "frame"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频帧信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioframe",
        children: "AudioFrame"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayeraudioframeobserver_onframe_imediaplayeraudioframeobserver__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver",
        children: "registerAudioFrameObserver"
      }), " 并设置 ", _jsx(_components.code, {
        children: "mode"
      }), " 参数后传入的音频数据，用于处理音频数据。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-5",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayeraudioframeobserver",
          children: "IMediaPlayerAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "onframe-1",
      children: "onFrame"
    }), `
`, _jsx(_components.p, {
      children: "播放器接收到视频帧时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " onFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VideoFrame frame);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注册视频帧观察器后，该回调在播放器接收到视频帧时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放器接收到视频帧时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayervideoframeobserver_onframe_imediaplayervideoframeobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "frame-1",
      children: _jsx(_components.code, {
        children: "frame"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧信息。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-6",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayervideoframeobserver",
          children: "IMediaPlayerVideoFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onmetadata"
    }), `
`, _jsx(_components.h2, {
      id: "onmetadata",
      children: "onMetaData"
    }), `
`, _jsx(_components.p, {
      children: "接收到媒体元数据时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onmetadata__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onMetaData"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.MediaPlayerMetadataType type, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] data)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onmetadata__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放器接收到媒体元数据时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onmetadata__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-3",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放器接收到媒体元数据时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onmetadata__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "type",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体元数据的类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayermetadatatype",
        children: "MediaPlayerMetadataType"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "data",
      children: _jsx(_components.code, {
        children: "data"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体元数据的详细内容。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-7",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplaybufferupdated"
    }), `
`, _jsx(_components.h2, {
      id: "onplaybufferupdated",
      children: "onPlayBufferUpdated"
    }), `
`, _jsx(_components.p, {
      children: "onPlayBufferUpdated 回调：报告缓冲数据可支持的播放时长。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplaybufferupdated__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPlayBufferUpdated"
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
              children: "long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " playCachedBuffer)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplaybufferupdated__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放在线媒体资源时每两秒触发一次。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当缓冲数据可支持的播放时长小于阈值（默认值为 0）时，SDK 返回 PLAYER_EVENT_BUFFER_LOW （6）。"
      }), `
`, _jsx(_components.li, {
        children: "当缓冲数据可支持的播放时长大于阈值（默认值为 0）时，SDK 返回 PLAYER_EVENT_BUFFER_RECOVER （7）。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplaybufferupdated__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-4",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放在线媒体资源时每两秒被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplaybufferupdated__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "playcachedbuffer",
      children: _jsx(_components.code, {
        children: "playCachedBuffer"
      })
    }), `
`, _jsx(_components.p, {
      children: "缓冲数据可支持的播放时长，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-8",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerevent"
    }), `
`, _jsx(_components.h2, {
      id: "onplayerevent",
      children: "onPlayerEvent"
    }), `
`, _jsx(_components.p, {
      children: "播放器事件回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerevent__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPlayerEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.MediaPlayerEvent eventCode, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " elapsedTime, String message)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerevent__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_seek",
        children: "seek"
      }), " 方法后，SDK 会触发该回调报告操作结果。"]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerevent__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "eventcode",
      children: _jsx(_components.code, {
        children: "eventCode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["播放器事件，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayerevent",
        children: "MediaPlayerEvent"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "elapsedtime",
      children: _jsx(_components.code, {
        children: "elapsedTime"
      })
    }), `
`, _jsx(_components.p, {
      children: "事件发生的时间，单位为毫秒。"
    }), `
`, _jsx(_components.h4, {
      id: "message",
      children: _jsx(_components.code, {
        children: "message"
      })
    }), `
`, _jsx(_components.p, {
      children: "关于该事件的补充信息。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-9",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerinfoupdated"
    }), `
`, _jsx(_components.h2, {
      id: "onplayerinfoupdated",
      children: "onPlayerInfoUpdated"
    }), `
`, _jsx(_components.p, {
      children: "媒体播放器相关信息发生变化时的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerinfoupdated__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " onPlayerInfoUpdated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerUpdatedInfo info);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerinfoupdated__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以使用该回调进行故障排查。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerinfoupdated__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-5",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在媒体播放器相关信息发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerinfoupdated__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "info",
      children: _jsx(_components.code, {
        children: "info"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体播放器相关信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-playerupdatedinfo",
        children: "PlayerUpdatedInfo"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-10",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayersourcestatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onplayerstatechanged",
      children: "onPlayerStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "播放状态发生改变回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayersourcestatechanged__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPlayerStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.MediaPlayerState state, Constants.MediaPlayerReason reason);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayersourcestatechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当媒体播放器的状态发生变化时，SDK 会触发该回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayersourcestatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["播放状态，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayerstate",
        children: "MediaPlayerState"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "reason",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["播放状态变化的原因，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayerreason",
        children: "MediaPlayerReason"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-11",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayersrcinfochanged"
    }), `
`, _jsx(_components.h2, {
      id: "onplayersrcinfochanged",
      children: "onPlayerSrcInfoChanged"
    }), `
`, _jsx(_components.p, {
      children: "媒体资源视频码率发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayersrcinfochanged__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPlayerSrcInfoChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(SrcInfo from, SrcInfo to)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayersrcinfochanged__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayersrcinfochanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-6",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在媒体资源的视频码率发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayersrcinfochanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "from",
      children: _jsx(_components.code, {
        children: "from"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["正在播放的媒体资源的视频码率信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-srcinfo",
        children: "SrcInfo"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "to",
      children: _jsx(_components.code, {
        children: "to"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["变更后的视频码率信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-srcinfo",
        children: "SrcInfo"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-12",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onpositionchanged"
    }), `
`, _jsx(_components.h2, {
      id: "onpositionchanged",
      children: "onPositionChanged"
    }), `
`, _jsx(_components.p, {
      children: "播放进度回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onpositionchanged__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPositionChanged"
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
              children: "long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " positionMs, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestampMs)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onpositionchanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调用于报告媒体文件的播放进度。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onpositionchanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-7",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放媒体文件时每两秒被触发。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onpositionchanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "positionms",
      children: _jsx(_components.code, {
        children: "positionMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体文件的播放位置，单位为毫秒。"
    }), `
`, _jsx(_components.h4, {
      id: "timestampms",
      children: _jsx(_components.code, {
        children: "timestampMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前播放进度对应的 NTP 时间戳，单位为毫秒。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该参数仅在频道内生效。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-13",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onpreloadevent"
    }), `
`, _jsx(_components.h2, {
      id: "onpreloadevent",
      children: "onPreloadEvent"
    }), `
`, _jsx(_components.p, {
      children: "预加载媒体资源事件回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onpreloadevent__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPreloadEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String src, Constants.MediaPlayerPreloadEvent event)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onpreloadevent__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调用于上报预加载媒体资源过程中发生的事件。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onpreloadevent__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "src",
      children: _jsx(_components.code, {
        children: "src"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体资源的 URL。"
    }), `
`, _jsx(_components.h4, {
      id: "event",
      children: _jsx(_components.code, {
        children: "event"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["预加载媒体资源时发生的事件。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-playerpreloadevent",
        children: "MediaPlayerPreloadEvent"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-14",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver",
          children: "IMediaPlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayercustomdataprovider_onreaddata"
    }), `
`, _jsx(_components.h2, {
      id: "onreaddata",
      children: "onReadData"
    }), `
`, _jsx(_components.p, {
      children: "SDK 读取媒体资源数据时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayercustomdataprovider_onreaddata__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onReadData"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ByteBuffer buffer, "
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
              children: " bufferSize);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayercustomdataprovider_onreaddata__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当你调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
        children: "openWithMediaSource"
      }), " 方法打开媒体资源时，SDK 会触发该回调，并请求你传入媒体资源数据的缓冲区。"]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayercustomdataprovider_onreaddata__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "buffer",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["数据缓冲区。你需要将 SDK 请求的 ", _jsx(_components.code, {
        children: "bufferSize"
      }), " 字节数据写入该缓冲区。详见 ", _jsx(_components.code, {
        children: "ByteBuffer"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "buffersize",
      children: _jsx(_components.code, {
        children: "bufferSize"
      })
    }), `
`, _jsx(_components.p, {
      children: "数据缓冲区的长度，单位为字节。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayercustomdataprovider_onreaddata__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "数据读取成功时，返回实际读取的数据长度（字节）。"
      }), `
`, _jsx(_components.li, {
        children: "数据读取失败时，返回 0。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-15",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercustomdataprovider",
          children: "IMediaPlayerCustomDataProvider"
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
