import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "播放信息获取",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_mediaplayer_info" />

<a id="api_imediaplayer_getaudiobufferdelay" />

## getAudioBufferDelay [#getaudiobufferdelay]

获取播放媒体文件时的音频缓冲延迟。

<a id="api_imediaplayer_getaudiobufferdelay__prototype" />

\`\`\`java
int getAudioBufferDelay();
\`\`\`

<a id="api_imediaplayer_getaudiobufferdelay__detailed_desc" />

<a id="api_imediaplayer_getaudiobufferdelay__return_values" />

### 返回值 [#返回值]

* 方法调用成功，返回音频缓冲延迟（单位：毫秒）。
* 方法调用失败，返回小于 0 的错误码。你可以使用 MediaPlayerReason 检查错误原因。

### 所属接口类 [#所属接口类]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getduration" />

## getDuration [#getduration]

获取媒体资源的时长。

<a id="api_imediaplayer_getduration__prototype" />

\`\`\`java
long getDuration();
\`\`\`

<a id="api_imediaplayer_getduration__detailed_desc" />

<a id="api_imediaplayer_getduration__return_values" />

### 返回值 [#返回值-1]

* 方法调用成功时，返回媒体文件的总时长（毫秒）。
* 方法调用失败时，返回小于 0 的值。

### 所属接口类 [#所属接口类-1]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getmediaplayerid" />

## getMediaPlayerId [#getmediaplayerid]

获取媒体播放器的 ID。

<a id="api_imediaplayer_getmediaplayerid__prototype" />

\`\`\`java
int getMediaPlayerId();
\`\`\`

<a id="api_imediaplayer_getmediaplayerid__detailed_desc" />

<a id="api_imediaplayer_getmediaplayerid__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getmute" />

## getMute [#getmute]

报告媒体资源是否被静音。

<a id="api_imediaplayer_getmute__prototype" />

\`\`\`java
boolean getMute();
\`\`\`

<a id="api_imediaplayer_getmute__detailed_desc" />

<a id="api_imediaplayer_getmute__return_values" />

### 返回值 [#返回值-3]

true：媒体资源已被静音。 false：媒体资源未被静音。

### 所属接口类 [#所属接口类-3]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getplayoutvolume" />

## getPlayoutVolume [#getplayoutvolume]

获取本地播放音量。

<a id="api_imediaplayer_getplayoutvolume__prototype" />

\`\`\`java
int getPlayoutVolume();
\`\`\`

<a id="api_imediaplayer_getplayoutvolume__detailed_desc" />

<a id="api_imediaplayer_getplayoutvolume__return_values" />

### 返回值 [#返回值-4]

方法调用成功，返回本地播放音量，取值范围为 0 到 100。 0 表示静音，100（默认）表示原始音量。

### 所属接口类 [#所属接口类-4]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getplayposition" />

## getPlayPosition [#getplayposition]

获取当前本地播放进度。

<a id="api_imediaplayer_getplayposition__prototype" />

\`\`\`java
long getPlayPosition();
\`\`\`

<a id="api_imediaplayer_getplayposition__detailed_desc" />

<a id="api_imediaplayer_getplayposition__return_values" />

### 返回值 [#返回值-5]

* 方法调用成功时，返回当前播放进度（单位为毫秒）。
* 方法调用失败时，返回小于 0 的值，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-5]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getplaysrc_imediaplayer" />

## getPlaySrc \\[1/2] [#getplaysrc-12]

获取当前正在播放的媒体资源路径。

<a id="api_imediaplayer_getplaysrc_imediaplayer__prototype" />

\`\`\`java
String getPlaySrc();
\`\`\`

<a id="api_imediaplayer_getplaysrc_imediaplayer__detailed_desc" />

<a id="api_imediaplayer_getplaysrc_imediaplayer__return_values" />

### 返回值 [#返回值-6]

方法调用成功时，返回当前正在播放的媒体资源路径。 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-6]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getpublishsignalvolume" />

## getPublishSignalVolume [#getpublishsignalvolume]

获取用于发布的媒体文件音量。

<a id="api_imediaplayer_getpublishsignalvolume__prototype" />

\`\`\`java
int getPublishSignalVolume();
\`\`\`

<a id="api_imediaplayer_getpublishsignalvolume__detailed_desc" />

<a id="api_imediaplayer_getpublishsignalvolume__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getstate" />

## getState [#getstate]

获取当前播放状态。

<a id="api_imediaplayer_getstate__prototype" />

\`\`\`java
Constants.MediaPlayerState getState();
\`\`\`

<a id="api_imediaplayer_getstate__detailed_desc" />

<a id="api_imediaplayer_getstate__return_values" />

### 返回值 [#返回值-8]

方法调用成功，返回当前播放状态。详见 [MediaPlayerState](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayerstate)。

### 所属接口类 [#所属接口类-8]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getstreamcount" />

## getStreamCount [#getstreamcount]

获取媒体资源中媒体流的数量。

<a id="api_imediaplayer_getstreamcount__prototype" />

\`\`\`java
int getStreamCount();
\`\`\`

<a id="api_imediaplayer_getstreamcount__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    调用该方法前，请先调用 \`open\` 方法，并等待 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调报告状态 \`OPEN_COMPLETED\`。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayer_getstreamcount__return_values" />

### 返回值 [#返回值-9]

* 方法调用成功，返回媒体资源中的媒体流数量。
* \\< 0：方法调用失败，详见 MediaPlayerReason。

### 所属接口类 [#所属接口类-9]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_getstreaminfo" />

## getStreamInfo [#getstreaminfo]

获取媒体流的详细信息。

<a id="api_imediaplayer_getstreaminfo__prototype" />

\`\`\`java
MediaStreamInfo getStreamInfo(int index);
\`\`\`

<a id="api_imediaplayer_getstreaminfo__detailed_desc" />

调用 [getStreamCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount) 后，调用该方法获取指定索引的媒体流的详细信息。

<a id="api_imediaplayer_getstreaminfo__timing" />

### 调用时机 [#调用时机]

在调用 [getStreamCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount) 方法之后调用。

<a id="api_imediaplayer_getstreaminfo__parameters" />

### 参数 [#参数]

#### \`index\` [#index]

媒体流的索引。该参数必须小于 [getStreamCount](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount) 的返回值。

<a id="api_imediaplayer_getstreaminfo__return_values" />

### 返回值 [#返回值-10]

* 方法调用成功，返回 MediaStreamInfo 对象。
* 方法调用失败，返回 null。

### 所属接口类 [#所属接口类-10]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="callback_imediaplayersourceobserver_onplayerplaybackstats" />

## onPlayerPlaybackStats [#onplayerplaybackstats]

报告正在播放的媒体文件的统计信息回调。

<a id="callback_imediaplayersourceobserver_onplayerplaybackstats__prototype" />

\`\`\`java
void onPlayerPlaybackStats(PlayerPlaybackStats stats)
\`\`\`

<a id="callback_imediaplayersourceobserver_onplayerplaybackstats__detailed_desc" />

该回调在媒体文件播放过程中每秒触发一次。

<a id="callback_imediaplayersourceobserver_onplayerplaybackstats__timing" />

### 触发时机 [#触发时机]

该回调在媒体文件播放过程中每秒触发一次。

<a id="callback_imediaplayersourceobserver_onplayerplaybackstats__parameters" />

### 参数 [#参数-1]

#### \`stats\` [#stats]

媒体文件的统计信息。详见 [PlayerPlaybackStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-playerplaybackstats)。

### 所属接口类 [#所属接口类-11]

* [IMediaPlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayersourceobserver)
`;
export let structuredData = {
  contents: [{
    heading: "getaudiobufferdelay",
    content: "获取播放媒体文件时的音频缓冲延迟。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回音频缓冲延迟（单位：毫秒）。"
  }, {
    heading: "返回值",
    content: "方法调用失败，返回小于 0 的错误码。你可以使用 MediaPlayerReason 检查错误原因。"
  }, {
    heading: "所属接口类",
    content: "IMediaPlayer"
  }, {
    heading: "getduration",
    content: "获取媒体资源的时长。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功时，返回媒体文件的总时长（毫秒）。"
  }, {
    heading: "返回值-1",
    content: "方法调用失败时，返回小于 0 的值。"
  }, {
    heading: "所属接口类-1",
    content: "IMediaPlayer"
  }, {
    heading: "getmediaplayerid",
    content: "获取媒体播放器的 ID。"
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
    heading: "getmute",
    content: "报告媒体资源是否被静音。"
  }, {
    heading: "返回值-3",
    content: "true：媒体资源已被静音。 false：媒体资源未被静音。"
  }, {
    heading: "所属接口类-3",
    content: "IMediaPlayer"
  }, {
    heading: "getplayoutvolume",
    content: "获取本地播放音量。"
  }, {
    heading: "返回值-4",
    content: "方法调用成功，返回本地播放音量，取值范围为 0 到 100。 0 表示静音，100（默认）表示原始音量。"
  }, {
    heading: "所属接口类-4",
    content: "IMediaPlayer"
  }, {
    heading: "getplayposition",
    content: "获取当前本地播放进度。"
  }, {
    heading: "返回值-5",
    content: "方法调用成功时，返回当前播放进度（单位为毫秒）。"
  }, {
    heading: "返回值-5",
    content: "方法调用失败时，返回小于 0 的值，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-5",
    content: "IMediaPlayer"
  }, {
    heading: "getplaysrc-12",
    content: "获取当前正在播放的媒体资源路径。"
  }, {
    heading: "返回值-6",
    content: "方法调用成功时，返回当前正在播放的媒体资源路径。 方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-6",
    content: "IMediaPlayer"
  }, {
    heading: "getpublishsignalvolume",
    content: "获取用于发布的媒体文件音量。"
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
    heading: "getstate",
    content: "获取当前播放状态。"
  }, {
    heading: "返回值-8",
    content: "方法调用成功，返回当前播放状态。详见 MediaPlayerState。"
  }, {
    heading: "所属接口类-8",
    content: "IMediaPlayer"
  }, {
    heading: "getstreamcount",
    content: "获取媒体资源中媒体流的数量。"
  }, {
    heading: "getstreamcount",
    content: "调用该方法前，请先调用 `open` 方法，并等待 onPlayerStateChanged 回调报告状态 `OPEN_COMPLETED`。"
  }, {
    heading: "返回值-9",
    content: "方法调用成功，返回媒体资源中的媒体流数量。"
  }, {
    heading: "返回值-9",
    content: "\\< 0：方法调用失败，详见 MediaPlayerReason。"
  }, {
    heading: "所属接口类-9",
    content: "IMediaPlayer"
  }, {
    heading: "getstreaminfo",
    content: "获取媒体流的详细信息。"
  }, {
    heading: "getstreaminfo",
    content: "调用 getStreamCount 后，调用该方法获取指定索引的媒体流的详细信息。"
  }, {
    heading: "调用时机",
    content: "在调用 getStreamCount 方法之后调用。"
  }, {
    heading: "index",
    content: "媒体流的索引。该参数必须小于 getStreamCount 的返回值。"
  }, {
    heading: "返回值-10",
    content: "方法调用成功，返回 MediaStreamInfo 对象。"
  }, {
    heading: "返回值-10",
    content: "方法调用失败，返回 null。"
  }, {
    heading: "所属接口类-10",
    content: "IMediaPlayer"
  }, {
    heading: "onplayerplaybackstats",
    content: "报告正在播放的媒体文件的统计信息回调。"
  }, {
    heading: "onplayerplaybackstats",
    content: "该回调在媒体文件播放过程中每秒触发一次。"
  }, {
    heading: "触发时机",
    content: "该回调在媒体文件播放过程中每秒触发一次。"
  }, {
    heading: "stats",
    content: "媒体文件的统计信息。详见 PlayerPlaybackStats。"
  }, {
    heading: "所属接口类-11",
    content: "IMediaPlayerObserver"
  }],
  headings: [{
    id: "getaudiobufferdelay",
    content: "getAudioBufferDelay"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "getduration",
    content: "getDuration"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "getmediaplayerid",
    content: "getMediaPlayerId"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "getmute",
    content: "getMute"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "getplayoutvolume",
    content: "getPlayoutVolume"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "getplayposition",
    content: "getPlayPosition"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "getplaysrc-12",
    content: "getPlaySrc [1/2]"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "getpublishsignalvolume",
    content: "getPublishSignalVolume"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "getstate",
    content: "getState"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "getstreamcount",
    content: "getStreamCount"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "getstreaminfo",
    content: "getStreamInfo"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "index",
    content: "`index`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "onplayerplaybackstats",
    content: "onPlayerPlaybackStats"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "stats",
    content: "`stats`"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#getaudiobufferdelay",
  title: _jsx(_Fragment, {
    children: "getAudioBufferDelay"
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
  url: "#getduration",
  title: _jsx(_Fragment, {
    children: "getDuration"
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
  url: "#getmediaplayerid",
  title: _jsx(_Fragment, {
    children: "getMediaPlayerId"
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
  url: "#getmute",
  title: _jsx(_Fragment, {
    children: "getMute"
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
  url: "#getplayoutvolume",
  title: _jsx(_Fragment, {
    children: "getPlayoutVolume"
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
  url: "#getplayposition",
  title: _jsx(_Fragment, {
    children: "getPlayPosition"
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
  url: "#getplaysrc-12",
  title: _jsx(_Fragment, {
    children: "getPlaySrc [1/2]"
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
  url: "#getpublishsignalvolume",
  title: _jsx(_Fragment, {
    children: "getPublishSignalVolume"
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
  url: "#getstate",
  title: _jsx(_Fragment, {
    children: "getState"
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
  url: "#getstreamcount",
  title: _jsx(_Fragment, {
    children: "getStreamCount"
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
}, {
  depth: 2,
  url: "#getstreaminfo",
  title: _jsx(_Fragment, {
    children: "getStreamInfo"
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
  url: "#index",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "index"
    })
  })
}, {
  depth: 3,
  url: "#返回值-10",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-10",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onplayerplaybackstats",
  title: _jsx(_Fragment, {
    children: "onPlayerPlaybackStats"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#stats",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stats"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-11",
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
      id: "toc_mediaplayer_info"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getaudiobufferdelay"
    }), `
`, _jsx(_components.h2, {
      id: "getaudiobufferdelay",
      children: "getAudioBufferDelay"
    }), `
`, _jsx(_components.p, {
      children: "获取播放媒体文件时的音频缓冲延迟。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getaudiobufferdelay__prototype"
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
              children: " getAudioBufferDelay"
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
      id: "api_imediaplayer_getaudiobufferdelay__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getaudiobufferdelay__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回音频缓冲延迟（单位：毫秒）。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回小于 0 的错误码。你可以使用 MediaPlayerReason 检查错误原因。"
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
      id: "api_imediaplayer_getduration"
    }), `
`, _jsx(_components.h2, {
      id: "getduration",
      children: "getDuration"
    }), `
`, _jsx(_components.p, {
      children: "获取媒体资源的时长。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getduration__prototype"
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
              children: " getDuration"
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
      id: "api_imediaplayer_getduration__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getduration__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回媒体文件的总时长（毫秒）。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败时，返回小于 0 的值。"
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
      id: "api_imediaplayer_getmediaplayerid"
    }), `
`, _jsx(_components.h2, {
      id: "getmediaplayerid",
      children: "getMediaPlayerId"
    }), `
`, _jsx(_components.p, {
      children: "获取媒体播放器的 ID。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getmediaplayerid__prototype"
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
              children: " getMediaPlayerId"
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
      id: "api_imediaplayer_getmediaplayerid__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getmediaplayerid__return_values"
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
      id: "api_imediaplayer_getmute"
    }), `
`, _jsx(_components.h2, {
      id: "getmute",
      children: "getMute"
    }), `
`, _jsx(_components.p, {
      children: "报告媒体资源是否被静音。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getmute__prototype"
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
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getMute"
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
      id: "api_imediaplayer_getmute__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getmute__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "true：媒体资源已被静音。 false：媒体资源未被静音。"
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
      id: "api_imediaplayer_getplayoutvolume"
    }), `
`, _jsx(_components.h2, {
      id: "getplayoutvolume",
      children: "getPlayoutVolume"
    }), `
`, _jsx(_components.p, {
      children: "获取本地播放音量。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getplayoutvolume__prototype"
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
              children: " getPlayoutVolume"
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
      id: "api_imediaplayer_getplayoutvolume__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getplayoutvolume__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回本地播放音量，取值范围为 0 到 100。 0 表示静音，100（默认）表示原始音量。"
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
      id: "api_imediaplayer_getplayposition"
    }), `
`, _jsx(_components.h2, {
      id: "getplayposition",
      children: "getPlayPosition"
    }), `
`, _jsx(_components.p, {
      children: "获取当前本地播放进度。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getplayposition__prototype"
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
              children: " getPlayPosition"
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
      id: "api_imediaplayer_getplayposition__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getplayposition__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回当前播放进度（单位为毫秒）。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败时，返回小于 0 的值，详见 MediaPlayerReason。"
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
      id: "api_imediaplayer_getplaysrc_imediaplayer"
    }), `
`, _jsx(_components.h2, {
      id: "getplaysrc-12",
      children: "getPlaySrc [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "获取当前正在播放的媒体资源路径。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getplaysrc_imediaplayer__prototype"
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
              children: "String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getPlaySrc"
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
      id: "api_imediaplayer_getplaysrc_imediaplayer__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getplaysrc_imediaplayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功时，返回当前正在播放的媒体资源路径。 方法调用失败，返回空字符串。"
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
      id: "api_imediaplayer_getpublishsignalvolume"
    }), `
`, _jsx(_components.h2, {
      id: "getpublishsignalvolume",
      children: "getPublishSignalVolume"
    }), `
`, _jsx(_components.p, {
      children: "获取用于发布的媒体文件音量。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getpublishsignalvolume__prototype"
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
              children: " getPublishSignalVolume"
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
      id: "api_imediaplayer_getpublishsignalvolume__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getpublishsignalvolume__return_values"
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
      id: "api_imediaplayer_getstate"
    }), `
`, _jsx(_components.h2, {
      id: "getstate",
      children: "getState"
    }), `
`, _jsx(_components.p, {
      children: "获取当前播放状态。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstate__prototype"
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
              children: "Constants.MediaPlayerState "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getState"
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
      id: "api_imediaplayer_getstate__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstate__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回当前播放状态。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediaplayerstate",
        children: "MediaPlayerState"
      }), "。"]
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
      id: "api_imediaplayer_getstreamcount"
    }), `
`, _jsx(_components.h2, {
      id: "getstreamcount",
      children: "getStreamCount"
    }), `
`, _jsx(_components.p, {
      children: "获取媒体资源中媒体流的数量。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstreamcount__prototype"
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
              children: " getStreamCount"
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
      id: "api_imediaplayer_getstreamcount__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["调用该方法前，请先调用 ", _jsx(_components.code, {
            children: "open"
          }), " 方法，并等待 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
            children: "onPlayerStateChanged"
          }), " 回调报告状态 ", _jsx(_components.code, {
            children: "OPEN_COMPLETED"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstreamcount__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回媒体资源中的媒体流数量。"
      }), `
`, _jsx(_components.li, {
        children: "< 0：方法调用失败，详见 MediaPlayerReason。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer",
          children: "IMediaPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstreaminfo"
    }), `
`, _jsx(_components.h2, {
      id: "getstreaminfo",
      children: "getStreamInfo"
    }), `
`, _jsx(_components.p, {
      children: "获取媒体流的详细信息。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstreaminfo__prototype"
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
              children: "MediaStreamInfo "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getStreamInfo"
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
              children: " index);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstreaminfo__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount",
        children: "getStreamCount"
      }), " 后，调用该方法获取指定索引的媒体流的详细信息。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstreaminfo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount",
        children: "getStreamCount"
      }), " 方法之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstreaminfo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "index",
      children: _jsx(_components.code, {
        children: "index"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体流的索引。该参数必须小于 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreamcount",
        children: "getStreamCount"
      }), " 的返回值。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_getstreaminfo__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-10",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回 MediaStreamInfo 对象。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 null。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-10",
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
      id: "callback_imediaplayersourceobserver_onplayerplaybackstats"
    }), `
`, _jsx(_components.h2, {
      id: "onplayerplaybackstats",
      children: "onPlayerPlaybackStats"
    }), `
`, _jsx(_components.p, {
      children: "报告正在播放的媒体文件的统计信息回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerplaybackstats__prototype"
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
              children: " onPlayerPlaybackStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerPlaybackStats stats)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerplaybackstats__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调在媒体文件播放过程中每秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerplaybackstats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在媒体文件播放过程中每秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_imediaplayersourceobserver_onplayerplaybackstats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "stats",
      children: _jsx(_components.code, {
        children: "stats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体文件的统计信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-playerplaybackstats",
        children: "PlayerPlaybackStats"
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
