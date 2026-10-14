import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "播放器控制",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_mediaplayer_control" />

<a id="api_imediaplayer_adjustplayoutvolume" />

## adjustPlayoutVolume [#adjustplayoutvolume]

调节本地播放音量。

<a id="api_imediaplayer_adjustplayoutvolume__prototype" />

\`\`\`java
int adjustPlayoutVolume(int volume);
\`\`\`

<a id="api_imediaplayer_adjustplayoutvolume__detailed_desc" />

<a id="api_imediaplayer_adjustplayoutvolume__timing" />

### 调用时机 [#调用时机]

该方法可在加入频道前或加入频道后调用。

<a id="api_imediaplayer_adjustplayoutvolume__parameters" />

### 参数 [#参数]

#### \`volume\` [#volume]

本地播放音量，取值范围为 0 到 100：

* 0：静音。
* 100：（默认）原始音量。

<a id="api_imediaplayer_adjustplayoutvolume__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_adjustpublishsignalvolume" />

## adjustPublishSignalVolume [#adjustpublishsignalvolume]

调节用于发布的媒体文件音量。

<a id="api_imediaplayer_adjustpublishsignalvolume__prototype" />

\`\`\`java
int adjustPublishSignalVolume(int volume);
\`\`\`

<a id="api_imediaplayer_adjustpublishsignalvolume__detailed_desc" />

你可以调用该方法调节远端用户听到的媒体文件音量。

<a id="api_imediaplayer_adjustpublishsignalvolume__timing" />

### 调用时机 [#调用时机-1]

该方法可以在加入频道前或加入频道后调用。

<a id="api_imediaplayer_adjustpublishsignalvolume__parameters" />

### 参数 [#参数-1]

#### \`volume\` [#volume-1]

音量，取值范围为 0 到 400：

* 0：静音。
* 100：（默认）原始音量。
* 400：原始音量的四倍（将音频信号放大四倍）。

<a id="api_imediaplayer_adjustpublishsignalvolume__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_mute" />

## mute [#mute]

设置是否静音媒体文件。

<a id="api_imediaplayer_mute__prototype" />

\`\`\`java
int mute(boolean muted);
\`\`\`

<a id="api_imediaplayer_mute__detailed_desc" />

<a id="api_imediaplayer_mute__timing" />

### 调用时机 [#调用时机-2]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_imediaplayer_mute__parameters" />

### 参数 [#参数-2]

#### \`muted\` [#muted]

是否静音媒体文件：

* true：静音媒体文件。
* false：（默认）取消静音媒体文件。

<a id="api_imediaplayer_mute__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_pause" />

## pause [#pause]

暂停播放。

<a id="api_imediaplayer_pause__prototype" />

\`\`\`java
int pause();
\`\`\`

<a id="api_imediaplayer_pause__detailed_desc" />

<a id="api_imediaplayer_pause__timing" />

### 调用时机 [#调用时机-3]

你可以在加入频道前或加入频道后调用此方法。

<a id="api_imediaplayer_pause__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_play" />

## play [#play]

播放媒体文件。

<a id="api_imediaplayer_play__prototype" />

\`\`\`java
int play();
\`\`\`

<a id="api_imediaplayer_play__detailed_desc" />

<a id="api_imediaplayer_play__timing" />

### 调用时机 [#调用时机-4]

* 在调用 open 或 openWithMediaSource 打开媒体文件并收到 onPlayerStateChanged 回调报告状态为 PLAYER\\_STATE\\_OPEN\\_COMPLETED 后调用该方法。
* 在调用 seek 后调用该方法。

<a id="api_imediaplayer_play__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_playpreloadedsrc" />

## playPreloadedSrc [#playpreloadedsrc]

播放预加载的媒体资源。

<a id="api_imediaplayer_playpreloadedsrc__prototype" />

\`\`\`java
int playPreloadedSrc(String src);
\`\`\`

<a id="api_imediaplayer_playpreloadedsrc__detailed_desc" />

调用 [preloadSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc) 将媒体资源预加载到播放列表后，可以调用 [playPreloadedSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc) 播放该预加载的媒体资源。调用该方法后，如果收到 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调并报告 \`PLAYER_STATE_PLAYING\` 状态，则表示播放成功。 如果想更换要播放的预加载媒体资源，可以再次调用 [playPreloadedSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc) 并指定新的媒体资源 URL。若想重新播放该媒体资源，需要先调用 [preloadSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc) 重新预加载后再播放。若想清空播放列表，请调用 [stop](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果在播放暂停时调用该方法，该方法在播放恢复之前不会生效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayer_playpreloadedsrc__parameters" />

### 参数 [#参数-3]

#### \`src\` [#src]

播放列表中媒体资源的 URL，必须与通过 [preloadSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc) 设置的 \`src\` 保持一致，否则无法播放该媒体资源。

<a id="api_imediaplayer_playpreloadedsrc__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_resume" />

## resume [#resume]

恢复播放媒体文件。

<a id="api_imediaplayer_resume__prototype" />

\`\`\`java
int resume();
\`\`\`

<a id="api_imediaplayer_resume__detailed_desc" />

<a id="api_imediaplayer_resume__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_seek" />

## seek [#seek]

跳转到新的播放位置。

<a id="api_imediaplayer_seek__prototype" />

\`\`\`java
int seek(long newPos);
\`\`\`

<a id="api_imediaplayer_seek__detailed_desc" />

如果在播放完成后调用 [seek](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_seek)，即收到回调 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged)，播放状态为 \`PLAYER_STATE_PLAYBACK_COMPLETED\` 或 \`PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED\`，SDK 会从指定位置开始播放媒体文件，并触发 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调，播放状态为 \`PLAYER_STATE_PLAYING\`。 如果在播放暂停时调用 [seek](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_seek)，调用成功后，SDK 会跳转到指定位置。要恢复播放，请调用 [resume](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_resume) 或 [play](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play)。

<a id="api_imediaplayer_seek__timing" />

### 调用时机 [#调用时机-5]

你可以在加入频道前或后调用此方法。

<a id="api_imediaplayer_seek__related" />

### 相关回调 [#相关回调]

调用该方法成功后，你会收到 [onPlayerEvent](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent) 回调，报告跳转到新播放位置的结果。

<a id="api_imediaplayer_seek__parameters" />

### 参数 [#参数-4]

#### \`newPos\` [#newpos]

新的播放位置，单位为毫秒。

<a id="api_imediaplayer_seek__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_stop" />

## stop \\[1/2] [#stop-12]

停止播放媒体轨道。

<a id="api_imediaplayer_stop__prototype" />

\`\`\`java
int stop();
\`\`\`

<a id="api_imediaplayer_stop__detailed_desc" />

调用该方法后，如需再次播放，需要调用 \`open\` 或 [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) 重新打开媒体资源。

<a id="api_imediaplayer_stop__timing" />

### 调用时机 [#调用时机-6]

请在播放后调用此方法。

<a id="api_imediaplayer_stop__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="callback_imediaplayercustomdataprovider_onseek" />

## onSeek [#onseek]

当 SDK 定位媒体资源数据时触发的回调。

<a id="callback_imediaplayercustomdataprovider_onseek__prototype" />

\`\`\`java
long onSeek(long offset, int whence)
\`\`\`

<a id="callback_imediaplayercustomdataprovider_onseek__detailed_desc" />

当你调用 [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) 或 \`open\` 方法打开自定义媒体资源时，SDK 会触发该回调，请求媒体资源中指定位置的数据。

<a id="callback_imediaplayercustomdataprovider_onseek__parameters" />

### 参数 [#参数-5]

#### \`offset\` [#offset]

目标位置相对于起始点的偏移量，单位为字节。该值可以为正数或负数。

#### \`whence\` [#whence]

起始点，可设置为以下值之一：

* 0：起始点为数据开头，定位后的实际数据偏移量为 offset。
* 1：起始点为当前位置，定位后的实际数据偏移量为当前位置加 offset。
* 2：起始点为数据末尾，定位后的实际数据偏移量为整个数据长度加 offset。
* 65536：不执行定位操作，返回文件大小。建议在播放 MP3、WAV 等纯音频文件时使用该值。

<a id="callback_imediaplayercustomdataprovider_onseek__return_values" />

### 返回值 [#返回值-9]

* whence 为 65536 时，返回媒体文件大小。
* whence 为 0、1 或 2 时，返回定位后的实际数据偏移量。
* -1：定位失败。

### 所属接口类 [#所属接口类-9]

* [IMediaPlayerCustomDataProvider](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercustomdataprovider)
`;
export let structuredData = {
  contents: [{
    heading: "adjustplayoutvolume",
    content: "调节本地播放音量。"
  }, {
    heading: "调用时机",
    content: "该方法可在加入频道前或加入频道后调用。"
  }, {
    heading: "volume",
    content: "本地播放音量，取值范围为 0 到 100："
  }, {
    heading: "volume",
    content: "0：静音。"
  }, {
    heading: "volume",
    content: "100：（默认）原始音量。"
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
    heading: "adjustpublishsignalvolume",
    content: "调节用于发布的媒体文件音量。"
  }, {
    heading: "adjustpublishsignalvolume",
    content: "你可以调用该方法调节远端用户听到的媒体文件音量。"
  }, {
    heading: "调用时机-1",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "volume-1",
    content: "音量，取值范围为 0 到 400："
  }, {
    heading: "volume-1",
    content: "0：静音。"
  }, {
    heading: "volume-1",
    content: "100：（默认）原始音量。"
  }, {
    heading: "volume-1",
    content: "400：原始音量的四倍（将音频信号放大四倍）。"
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
    heading: "mute",
    content: "设置是否静音媒体文件。"
  }, {
    heading: "调用时机-2",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "muted",
    content: "是否静音媒体文件："
  }, {
    heading: "muted",
    content: "true：静音媒体文件。"
  }, {
    heading: "muted",
    content: "false：（默认）取消静音媒体文件。"
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
    heading: "pause",
    content: "暂停播放。"
  }, {
    heading: "调用时机-3",
    content: "你可以在加入频道前或加入频道后调用此方法。"
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
    heading: "play",
    content: "播放媒体文件。"
  }, {
    heading: "调用时机-4",
    content: "在调用 open 或 openWithMediaSource 打开媒体文件并收到 onPlayerStateChanged 回调报告状态为 PLAYER\\_STATE\\_OPEN\\_COMPLETED 后调用该方法。"
  }, {
    heading: "调用时机-4",
    content: "在调用 seek 后调用该方法。"
  }, {
    heading: "返回值-4",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-4",
    content: "IMediaPlayer"
  }, {
    heading: "playpreloadedsrc",
    content: "播放预加载的媒体资源。"
  }, {
    heading: "playpreloadedsrc",
    content: "调用 preloadSrc 将媒体资源预加载到播放列表后，可以调用 playPreloadedSrc 播放该预加载的媒体资源。调用该方法后，如果收到 onPlayerStateChanged 回调并报告 `PLAYER_STATE_PLAYING` 状态，则表示播放成功。 如果想更换要播放的预加载媒体资源，可以再次调用 playPreloadedSrc 并指定新的媒体资源 URL。若想重新播放该媒体资源，需要先调用 preloadSrc 重新预加载后再播放。若想清空播放列表，请调用 stop。"
  }, {
    heading: "playpreloadedsrc",
    content: "如果在播放暂停时调用该方法，该方法在播放恢复之前不会生效。"
  }, {
    heading: "src",
    content: "播放列表中媒体资源的 URL，必须与通过 preloadSrc 设置的 `src` 保持一致，否则无法播放该媒体资源。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-5",
    content: "IMediaPlayer"
  }, {
    heading: "resume",
    content: "恢复播放媒体文件。"
  }, {
    heading: "返回值-6",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-6",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-6",
    content: "IMediaPlayer"
  }, {
    heading: "seek",
    content: "跳转到新的播放位置。"
  }, {
    heading: "seek",
    content: "如果在播放完成后调用 seek，即收到回调 onPlayerStateChanged，播放状态为 `PLAYER_STATE_PLAYBACK_COMPLETED` 或 `PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED`，SDK 会从指定位置开始播放媒体文件，并触发 onPlayerStateChanged 回调，播放状态为 `PLAYER_STATE_PLAYING`。 如果在播放暂停时调用 seek，调用成功后，SDK 会跳转到指定位置。要恢复播放，请调用 resume 或 play。"
  }, {
    heading: "调用时机-5",
    content: "你可以在加入频道前或后调用此方法。"
  }, {
    heading: "相关回调",
    content: "调用该方法成功后，你会收到 onPlayerEvent 回调，报告跳转到新播放位置的结果。"
  }, {
    heading: "newpos",
    content: "新的播放位置，单位为毫秒。"
  }, {
    heading: "返回值-7",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-7",
    content: "IMediaPlayer"
  }, {
    heading: "stop-12",
    content: "停止播放媒体轨道。"
  }, {
    heading: "stop-12",
    content: "调用该方法后，如需再次播放，需要调用 `open` 或 openWithMediaSource 重新打开媒体资源。"
  }, {
    heading: "调用时机-6",
    content: "请在播放后调用此方法。"
  }, {
    heading: "返回值-8",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-8",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-8",
    content: "IMediaPlayer"
  }, {
    heading: "onseek",
    content: "当 SDK 定位媒体资源数据时触发的回调。"
  }, {
    heading: "onseek",
    content: "当你调用 openWithMediaSource 或 `open` 方法打开自定义媒体资源时，SDK 会触发该回调，请求媒体资源中指定位置的数据。"
  }, {
    heading: "offset",
    content: "目标位置相对于起始点的偏移量，单位为字节。该值可以为正数或负数。"
  }, {
    heading: "whence",
    content: "起始点，可设置为以下值之一："
  }, {
    heading: "whence",
    content: "0：起始点为数据开头，定位后的实际数据偏移量为 offset。"
  }, {
    heading: "whence",
    content: "1：起始点为当前位置，定位后的实际数据偏移量为当前位置加 offset。"
  }, {
    heading: "whence",
    content: "2：起始点为数据末尾，定位后的实际数据偏移量为整个数据长度加 offset。"
  }, {
    heading: "whence",
    content: "65536：不执行定位操作，返回文件大小。建议在播放 MP3、WAV 等纯音频文件时使用该值。"
  }, {
    heading: "返回值-9",
    content: "whence 为 65536 时，返回媒体文件大小。"
  }, {
    heading: "返回值-9",
    content: "whence 为 0、1 或 2 时，返回定位后的实际数据偏移量。"
  }, {
    heading: "返回值-9",
    content: "-1：定位失败。"
  }, {
    heading: "所属接口类-9",
    content: "IMediaPlayerCustomDataProvider"
  }],
  headings: [{
    id: "adjustplayoutvolume",
    content: "adjustPlayoutVolume"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "volume",
    content: "`volume`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "adjustpublishsignalvolume",
    content: "adjustPublishSignalVolume"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "volume-1",
    content: "`volume`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "mute",
    content: "mute"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "muted",
    content: "`muted`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "pause",
    content: "pause"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "play",
    content: "play"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "playpreloadedsrc",
    content: "playPreloadedSrc"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "src",
    content: "`src`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "resume",
    content: "resume"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "seek",
    content: "seek"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "newpos",
    content: "`newPos`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "stop-12",
    content: "stop [1/2]"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "onseek",
    content: "onSeek"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "offset",
    content: "`offset`"
  }, {
    id: "whence",
    content: "`whence`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#adjustplayoutvolume",
  title: _jsx(_Fragment, {
    children: "adjustPlayoutVolume"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数",
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
  url: "#adjustpublishsignalvolume",
  title: _jsx(_Fragment, {
    children: "adjustPublishSignalVolume"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#volume-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "volume"
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
  url: "#mute",
  title: _jsx(_Fragment, {
    children: "mute"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#muted",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
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
  url: "#pause",
  title: _jsx(_Fragment, {
    children: "pause"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#play",
  title: _jsx(_Fragment, {
    children: "play"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#返回值-4",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-4",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#playpreloadedsrc",
  title: _jsx(_Fragment, {
    children: "playPreloadedSrc"
  })
}, {
  depth: 3,
  url: "#参数-3",
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
  depth: 3,
  url: "#返回值-5",
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
  url: "#resume",
  title: _jsx(_Fragment, {
    children: "resume"
  })
}, {
  depth: 3,
  url: "#返回值-6",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-6",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#seek",
  title: _jsx(_Fragment, {
    children: "seek"
  })
}, {
  depth: 3,
  url: "#调用时机-5",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#newpos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "newPos"
    })
  })
}, {
  depth: 3,
  url: "#返回值-7",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-7",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#stop-12",
  title: _jsx(_Fragment, {
    children: "stop [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-6",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#返回值-8",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-8",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onseek",
  title: _jsx(_Fragment, {
    children: "onSeek"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#offset",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "offset"
    })
  })
}, {
  depth: 4,
  url: "#whence",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "whence"
    })
  })
}, {
  depth: 3,
  url: "#返回值-9",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-9",
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
      id: "toc_mediaplayer_control"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_adjustplayoutvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustplayoutvolume",
      children: "adjustPlayoutVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节本地播放音量。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_adjustplayoutvolume__prototype"
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
              children: " adjustPlayoutVolume"
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
      id: "api_imediaplayer_adjustplayoutvolume__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_adjustplayoutvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_adjustplayoutvolume__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "volume",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地播放音量，取值范围为 0 到 100："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：静音。"
      }), `
`, _jsx(_components.li, {
        children: "100：（默认）原始音量。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_adjustplayoutvolume__return_values"
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
      id: "api_imediaplayer_adjustpublishsignalvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustpublishsignalvolume",
      children: "adjustPublishSignalVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节用于发布的媒体文件音量。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_adjustpublishsignalvolume__prototype"
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
              children: " adjustPublishSignalVolume"
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
      id: "api_imediaplayer_adjustpublishsignalvolume__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法调节远端用户听到的媒体文件音量。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_adjustpublishsignalvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_adjustpublishsignalvolume__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "volume-1",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "音量，取值范围为 0 到 400："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：静音。"
      }), `
`, _jsx(_components.li, {
        children: "100：（默认）原始音量。"
      }), `
`, _jsx(_components.li, {
        children: "400：原始音量的四倍（将音频信号放大四倍）。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_adjustpublishsignalvolume__return_values"
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
      id: "api_imediaplayer_mute"
    }), `
`, _jsx(_components.h2, {
      id: "mute",
      children: "mute"
    }), `
`, _jsx(_components.p, {
      children: "设置是否静音媒体文件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_mute__prototype"
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
              children: " mute"
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
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " muted);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_mute__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_mute__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_mute__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否静音媒体文件："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：静音媒体文件。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）取消静音媒体文件。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_mute__return_values"
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
      id: "api_imediaplayer_pause"
    }), `
`, _jsx(_components.h2, {
      id: "pause",
      children: "pause"
    }), `
`, _jsx(_components.p, {
      children: "暂停播放。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_pause__prototype"
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
              children: " pause"
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
`, _jsx("a", {
      id: "api_imediaplayer_pause__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_pause__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_pause__return_values"
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
      id: "api_imediaplayer_play"
    }), `
`, _jsx(_components.h2, {
      id: "play",
      children: "play"
    }), `
`, _jsx(_components.p, {
      children: "播放媒体文件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_play__prototype"
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
              children: " play"
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
`, _jsx("a", {
      id: "api_imediaplayer_play__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_play__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在调用 open 或 openWithMediaSource 打开媒体文件并收到 onPlayerStateChanged 回调报告状态为 PLAYER_STATE_OPEN_COMPLETED 后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "在调用 seek 后调用该方法。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_play__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
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
      id: "所属接口类-4",
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
      id: "api_imediaplayer_playpreloadedsrc"
    }), `
`, _jsx(_components.h2, {
      id: "playpreloadedsrc",
      children: "playPreloadedSrc"
    }), `
`, _jsx(_components.p, {
      children: "播放预加载的媒体资源。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_playpreloadedsrc__prototype"
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
              children: " playPreloadedSrc"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String src);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_playpreloadedsrc__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc",
        children: "preloadSrc"
      }), " 将媒体资源预加载到播放列表后，可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc",
        children: "playPreloadedSrc"
      }), " 播放该预加载的媒体资源。调用该方法后，如果收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
        children: "onPlayerStateChanged"
      }), " 回调并报告 ", _jsx(_components.code, {
        children: "PLAYER_STATE_PLAYING"
      }), " 状态，则表示播放成功。 如果想更换要播放的预加载媒体资源，可以再次调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc",
        children: "playPreloadedSrc"
      }), " 并指定新的媒体资源 URL。若想重新播放该媒体资源，需要先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc",
        children: "preloadSrc"
      }), " 重新预加载后再播放。若想清空播放列表，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player",
        children: "stop"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果在播放暂停时调用该方法，该方法在播放恢复之前不会生效。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_playpreloadedsrc__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "src",
      children: _jsx(_components.code, {
        children: "src"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["播放列表中媒体资源的 URL，必须与通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_preloadsrc",
        children: "preloadSrc"
      }), " 设置的 ", _jsx(_components.code, {
        children: "src"
      }), " 保持一致，否则无法播放该媒体资源。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_playpreloadedsrc__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
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
      id: "所属接口类-5",
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
      id: "api_imediaplayer_resume"
    }), `
`, _jsx(_components.h2, {
      id: "resume",
      children: "resume"
    }), `
`, _jsx(_components.p, {
      children: "恢复播放媒体文件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_resume__prototype"
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
              children: " resume"
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
`, _jsx("a", {
      id: "api_imediaplayer_resume__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_resume__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
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
      id: "所属接口类-6",
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
      id: "api_imediaplayer_seek"
    }), `
`, _jsx(_components.h2, {
      id: "seek",
      children: "seek"
    }), `
`, _jsx(_components.p, {
      children: "跳转到新的播放位置。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_seek__prototype"
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
              children: " seek"
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
              children: " newPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_seek__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果在播放完成后调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_seek",
        children: "seek"
      }), "，即收到回调 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
        children: "onPlayerStateChanged"
      }), "，播放状态为 ", _jsx(_components.code, {
        children: "PLAYER_STATE_PLAYBACK_COMPLETED"
      }), " 或 ", _jsx(_components.code, {
        children: "PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED"
      }), "，SDK 会从指定位置开始播放媒体文件，并触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
        children: "onPlayerStateChanged"
      }), " 回调，播放状态为 ", _jsx(_components.code, {
        children: "PLAYER_STATE_PLAYING"
      }), "。 如果在播放暂停时调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_seek",
        children: "seek"
      }), "，调用成功后，SDK 会跳转到指定位置。要恢复播放，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_resume",
        children: "resume"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play",
        children: "play"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_seek__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_seek__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，你会收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent",
        children: "onPlayerEvent"
      }), " 回调，报告跳转到新播放位置的结果。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_seek__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "newpos",
      children: _jsx(_components.code, {
        children: "newPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "新的播放位置，单位为毫秒。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_seek__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-7",
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
      id: "所属接口类-7",
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
      id: "api_imediaplayer_stop"
    }), `
`, _jsx(_components.h2, {
      id: "stop-12",
      children: "stop [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "停止播放媒体轨道。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_stop__prototype"
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
              children: " stop"
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
`, _jsx("a", {
      id: "api_imediaplayer_stop__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，如需再次播放，需要调用 ", _jsx(_components.code, {
        children: "open"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
        children: "openWithMediaSource"
      }), " 重新打开媒体资源。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_stop__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在播放后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_stop__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
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
      id: "所属接口类-8",
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
      id: "callback_imediaplayercustomdataprovider_onseek"
    }), `
`, _jsx(_components.h2, {
      id: "onseek",
      children: "onSeek"
    }), `
`, _jsx(_components.p, {
      children: "当 SDK 定位媒体资源数据时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayercustomdataprovider_onseek__prototype"
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
              children: "long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onSeek"
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
              children: " offset, "
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
              children: " whence)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayercustomdataprovider_onseek__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当你调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
        children: "openWithMediaSource"
      }), " 或 ", _jsx(_components.code, {
        children: "open"
      }), " 方法打开自定义媒体资源时，SDK 会触发该回调，请求媒体资源中指定位置的数据。"]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayercustomdataprovider_onseek__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "offset",
      children: _jsx(_components.code, {
        children: "offset"
      })
    }), `
`, _jsx(_components.p, {
      children: "目标位置相对于起始点的偏移量，单位为字节。该值可以为正数或负数。"
    }), `
`, _jsx(_components.h4, {
      id: "whence",
      children: _jsx(_components.code, {
        children: "whence"
      })
    }), `
`, _jsx(_components.p, {
      children: "起始点，可设置为以下值之一："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：起始点为数据开头，定位后的实际数据偏移量为 offset。"
      }), `
`, _jsx(_components.li, {
        children: "1：起始点为当前位置，定位后的实际数据偏移量为当前位置加 offset。"
      }), `
`, _jsx(_components.li, {
        children: "2：起始点为数据末尾，定位后的实际数据偏移量为整个数据长度加 offset。"
      }), `
`, _jsx(_components.li, {
        children: "65536：不执行定位操作，返回文件大小。建议在播放 MP3、WAV 等纯音频文件时使用该值。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediaplayercustomdataprovider_onseek__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "whence 为 65536 时，返回媒体文件大小。"
      }), `
`, _jsx(_components.li, {
        children: "whence 为 0、1 或 2 时，返回定位后的实际数据偏移量。"
      }), `
`, _jsx(_components.li, {
        children: "-1：定位失败。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-9",
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
