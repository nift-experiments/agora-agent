import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "媒体资源打开",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_mediaplayer_open" />

<a id="api_imediaplayer_open" />

## open \\[1/2] [#open-12]

打开媒体资源。

<a id="api_imediaplayer_open__prototype" />

\`\`\`java
int open(String url, long startPos);
\`\`\`

<a id="api_imediaplayer_open__detailed_desc" />

支持播放以 \`content://\` 开头的 URI 文件。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法为异步调用。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayer_open__timing" />

### 调用时机 [#调用时机]

该方法可以在加入频道前或后调用。

<a id="api_imediaplayer_open__related" />

### 相关回调 [#相关回调]

调用该方法后，SDK 会触发 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调。在收到播放状态为 \`OPEN_COMPLETED\` 的上报后，你可以调用 [play](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play) 方法播放媒体文件。

<a id="api_imediaplayer_open__parameters" />

### 参数 [#参数]

#### \`url\` [#url]

媒体文件的路径，支持本地路径和在线路径。

#### \`startPos\` [#startpos]

播放的起始位置（毫秒，默认值为 0）。

<a id="api_imediaplayer_open__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_open2" />

## open \\[2/2] [#open-22]

通过 URI 地址打开媒体文件。

<a id="api_imediaplayer_open2__prototype" />

\`\`\`java
int open(Uri uri, long startPos);
\`\`\`

<a id="api_imediaplayer_open2__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法为异步调用。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayer_open2__parameters" />

### 参数 [#参数-1]

#### \`uri\` [#uri]

媒体文件的 URI 地址。

#### \`startPos\` [#startpos-1]

播放的起始位置，单位为毫秒。（默认值为 0）

<a id="api_imediaplayer_open2__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_openwithmediasource" />

## openWithMediaSource [#openwithmediasource]

打开媒体文件并配置播放场景。

<a id="api_imediaplayer_openwithmediasource__prototype" />

\`\`\`java
int openWithMediaSource(MediaPlayerSource source);
\`\`\`

<a id="api_imediaplayer_openwithmediasource__detailed_desc" />

该方法支持打开不同类型的媒体文件，包括以 \`content://\` 开头的 URI 文件和 \`assets\` 文件夹中的媒体文件，并设置播放选项。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法为异步调用。如果需要播放媒体文件，请确保在调用 [play](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play) 方法之前，已收到 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调并报告 \`OPEN_COMPLETED\`。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayer_openwithmediasource__timing" />

### 调用时机 [#调用时机-1]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_imediaplayer_openwithmediasource__parameters" />

### 参数 [#参数-2]

#### \`source\` [#source]

媒体资源，详见 [MediaPlayerSource](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediasource)。

<a id="api_imediaplayer_openwithmediasource__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_preloadsrc" />

## preloadSrc [#preloadsrc]

预加载媒体资源。

<a id="api_imediaplayer_preloadsrc__prototype" />

\`\`\`java
int preloadSrc(String src, long startPos);
\`\`\`

<a id="api_imediaplayer_preloadsrc__detailed_desc" />

调用该方法后，如果在 [onPreloadEvent](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpreloadevent) 回调中收到 \`PLAYER_PRELOAD_EVENT_COMPLETE\` 事件，表示预加载成功；如果收到 \`PLAYER_PRELOAD_EVENT_ERROR\` 事件，表示预加载失败。预加载成功后，如需播放该媒体资源，请调用 [playPreloadedSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc)；如需清空播放列表，请调用 \`stop()\`。

注：

* 在调用此方法前，请确保已成功调用 open 或 openWithMediaSource 打开媒体资源。
* 声网不支持将重复的媒体资源预加载到播放列表中。但你可以将正在播放的媒体资源再次预加载到播放列表中。

<a id="api_imediaplayer_preloadsrc__parameters" />

### 参数 [#参数-3]

#### \`src\` [#src]

媒体资源的 URL。

#### \`startPos\` [#startpos-2]

媒体资源预加载到播放列表后开始播放的位置（单位为毫秒）。预加载直播流时，请将该参数设为 0。

<a id="api_imediaplayer_preloadsrc__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_switchsrc" />

## switchSrc [#switchsrc]

切换正在播放的媒体资源。

<a id="api_imediaplayer_switchsrc__prototype" />

\`\`\`java
int switchSrc(String src, boolean syncPts);
\`\`\`

<a id="api_imediaplayer_switchsrc__detailed_desc" />

你可以调用此方法根据当前网络状态切换播放的媒体资源地址。例如：

* 当网络较差时，将播放的媒体资源切换为码率较低的媒体资源地址。
* 当网络良好时，将播放的媒体资源切换为码率较高的媒体资源地址。

调用此方法后，如果收到 [onPlayerEvent](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent) 回调报告 \`PLAYER_EVENT_SWITCH_COMPLETE\` 事件，表示切换成功。如果切换失败，SDK 会自动重试 3 次。如果仍然失败，你将收到 [onPlayerEvent](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent) 回调报告 \`PLAYER_EVENT_SWITCH_ERROR\` 事件，表示切换过程中发生错误。

注：

* 请确保在调用 open 之后再调用此方法。
* 为确保正常播放，调用此方法时请注意以下事项：
  * 播放暂停时不要调用此方法。
  * 切换过程中不要调用 seek 方法。
  * 切换媒体资源前，请确保播放位置未超过待切换媒体资源的总时长。

<a id="api_imediaplayer_switchsrc__parameters" />

### 参数 [#参数-4]

#### \`src\` [#src-1]

媒体资源的 URL 地址。

#### \`syncPts\` [#syncpts]

是否在切换前后同步播放位置（毫秒）：

* true：同步切换前后的播放位置。
* false：（默认）不同步切换前后的播放位置。

<a id="api_imediaplayer_switchsrc__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_unloadsrc" />

## unloadSrc [#unloadsrc]

卸载预加载的媒体资源。

<a id="api_imediaplayer_unloadsrc__prototype" />

\`\`\`java
int unloadSrc(String src);
\`\`\`

<a id="api_imediaplayer_unloadsrc__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [unloadSrc](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_unloadsrc) 无法释放正在播放的媒体资源。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayer_unloadsrc__parameters" />

### 参数 [#参数-5]

#### \`src\` [#src-2]

媒体资源的 URL。

<a id="api_imediaplayer_unloadsrc__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)
`;
export let structuredData = {
  contents: [{
    heading: "open-12",
    content: "打开媒体资源。"
  }, {
    heading: "open-12",
    content: "支持播放以 `content://` 开头的 URI 文件。"
  }, {
    heading: "open-12",
    content: "该方法为异步调用。"
  }, {
    heading: "调用时机",
    content: "该方法可以在加入频道前或后调用。"
  }, {
    heading: "相关回调",
    content: "调用该方法后，SDK 会触发 onPlayerStateChanged 回调。在收到播放状态为 `OPEN_COMPLETED` 的上报后，你可以调用 play 方法播放媒体文件。"
  }, {
    heading: "url",
    content: "媒体文件的路径，支持本地路径和在线路径。"
  }, {
    heading: "startpos",
    content: "播放的起始位置（毫秒，默认值为 0）。"
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
    heading: "open-22",
    content: "通过 URI 地址打开媒体文件。"
  }, {
    heading: "open-22",
    content: "该方法为异步调用。"
  }, {
    heading: "uri",
    content: "媒体文件的 URI 地址。"
  }, {
    heading: "startpos-1",
    content: "播放的起始位置，单位为毫秒。（默认值为 0）"
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
    heading: "openwithmediasource",
    content: "打开媒体文件并配置播放场景。"
  }, {
    heading: "openwithmediasource",
    content: "该方法支持打开不同类型的媒体文件，包括以 `content://` 开头的 URI 文件和 `assets` 文件夹中的媒体文件，并设置播放选项。"
  }, {
    heading: "openwithmediasource",
    content: "该方法为异步调用。如果需要播放媒体文件，请确保在调用 play 方法之前，已收到 onPlayerStateChanged 回调并报告 `OPEN_COMPLETED`。"
  }, {
    heading: "调用时机-1",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "source",
    content: "媒体资源，详见 MediaPlayerSource。"
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
    heading: "preloadsrc",
    content: "预加载媒体资源。"
  }, {
    heading: "preloadsrc",
    content: "调用该方法后，如果在 onPreloadEvent 回调中收到 `PLAYER_PRELOAD_EVENT_COMPLETE` 事件，表示预加载成功；如果收到 `PLAYER_PRELOAD_EVENT_ERROR` 事件，表示预加载失败。预加载成功后，如需播放该媒体资源，请调用 playPreloadedSrc；如需清空播放列表，请调用 `stop()`。"
  }, {
    heading: "preloadsrc",
    content: "注："
  }, {
    heading: "preloadsrc",
    content: "在调用此方法前，请确保已成功调用 open 或 openWithMediaSource 打开媒体资源。"
  }, {
    heading: "preloadsrc",
    content: "声网不支持将重复的媒体资源预加载到播放列表中。但你可以将正在播放的媒体资源再次预加载到播放列表中。"
  }, {
    heading: "src",
    content: "媒体资源的 URL。"
  }, {
    heading: "startpos-2",
    content: "媒体资源预加载到播放列表后开始播放的位置（单位为毫秒）。预加载直播流时，请将该参数设为 0。"
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
    heading: "switchsrc",
    content: "切换正在播放的媒体资源。"
  }, {
    heading: "switchsrc",
    content: "你可以调用此方法根据当前网络状态切换播放的媒体资源地址。例如："
  }, {
    heading: "switchsrc",
    content: "当网络较差时，将播放的媒体资源切换为码率较低的媒体资源地址。"
  }, {
    heading: "switchsrc",
    content: "当网络良好时，将播放的媒体资源切换为码率较高的媒体资源地址。"
  }, {
    heading: "switchsrc",
    content: "调用此方法后，如果收到 onPlayerEvent 回调报告 `PLAYER_EVENT_SWITCH_COMPLETE` 事件，表示切换成功。如果切换失败，SDK 会自动重试 3 次。如果仍然失败，你将收到 onPlayerEvent 回调报告 `PLAYER_EVENT_SWITCH_ERROR` 事件，表示切换过程中发生错误。"
  }, {
    heading: "switchsrc",
    content: "注："
  }, {
    heading: "switchsrc",
    content: "请确保在调用 open 之后再调用此方法。"
  }, {
    heading: "switchsrc",
    content: "为确保正常播放，调用此方法时请注意以下事项："
  }, {
    heading: "switchsrc",
    content: "播放暂停时不要调用此方法。"
  }, {
    heading: "switchsrc",
    content: "切换过程中不要调用 seek 方法。"
  }, {
    heading: "switchsrc",
    content: "切换媒体资源前，请确保播放位置未超过待切换媒体资源的总时长。"
  }, {
    heading: "src-1",
    content: "媒体资源的 URL 地址。"
  }, {
    heading: "syncpts",
    content: "是否在切换前后同步播放位置（毫秒）："
  }, {
    heading: "syncpts",
    content: "true：同步切换前后的播放位置。"
  }, {
    heading: "syncpts",
    content: "false：（默认）不同步切换前后的播放位置。"
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
    heading: "unloadsrc",
    content: "卸载预加载的媒体资源。"
  }, {
    heading: "unloadsrc",
    content: "unloadSrc 无法释放正在播放的媒体资源。"
  }, {
    heading: "src-2",
    content: "媒体资源的 URL。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-5",
    content: "IMediaPlayer"
  }],
  headings: [{
    id: "open-12",
    content: "open [1/2]"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "url",
    content: "`url`"
  }, {
    id: "startpos",
    content: "`startPos`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "open-22",
    content: "open [2/2]"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "uri",
    content: "`uri`"
  }, {
    id: "startpos-1",
    content: "`startPos`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "openwithmediasource",
    content: "openWithMediaSource"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "source",
    content: "`source`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "preloadsrc",
    content: "preloadSrc"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "src",
    content: "`src`"
  }, {
    id: "startpos-2",
    content: "`startPos`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "switchsrc",
    content: "switchSrc"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "src-1",
    content: "`src`"
  }, {
    id: "syncpts",
    content: "`syncPts`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "unloadsrc",
    content: "unloadSrc"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "src-2",
    content: "`src`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#open-12",
  title: _jsx(_Fragment, {
    children: "open [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机",
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
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#url",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
    })
  })
}, {
  depth: 4,
  url: "#startpos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
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
  url: "#open-22",
  title: _jsx(_Fragment, {
    children: "open [2/2]"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uri",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uri"
    })
  })
}, {
  depth: 4,
  url: "#startpos-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
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
  url: "#openwithmediasource",
  title: _jsx(_Fragment, {
    children: "openWithMediaSource"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#source",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "source"
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
  url: "#preloadsrc",
  title: _jsx(_Fragment, {
    children: "preloadSrc"
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
  depth: 4,
  url: "#startpos-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
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
  url: "#switchsrc",
  title: _jsx(_Fragment, {
    children: "switchSrc"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#src-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "src"
    })
  })
}, {
  depth: 4,
  url: "#syncpts",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "syncPts"
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
  url: "#所属接口类-4",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#unloadsrc",
  title: _jsx(_Fragment, {
    children: "unloadSrc"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#src-2",
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
      id: "toc_mediaplayer_open"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open"
    }), `
`, _jsx(_components.h2, {
      id: "open-12",
      children: "open [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "打开媒体资源。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open__prototype"
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
              children: " open"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url, "
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
              children: " startPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["支持播放以 ", _jsx(_components.code, {
        children: "content://"
      }), " 开头的 URI 文件。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法为异步调用。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或后调用。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
        children: "onPlayerStateChanged"
      }), " 回调。在收到播放状态为 ", _jsx(_components.code, {
        children: "OPEN_COMPLETED"
      }), " 的上报后，你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play",
        children: "play"
      }), " 方法播放媒体文件。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体文件的路径，支持本地路径和在线路径。"
    }), `
`, _jsx(_components.h4, {
      id: "startpos",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放的起始位置（毫秒，默认值为 0）。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open__return_values"
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
      id: "api_imediaplayer_open2"
    }), `
`, _jsx(_components.h2, {
      id: "open-22",
      children: "open [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "通过 URI 地址打开媒体文件。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open2__prototype"
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
              children: " open"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Uri uri, "
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
              children: " startPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open2__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法为异步调用。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uri",
      children: _jsx(_components.code, {
        children: "uri"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体文件的 URI 地址。"
    }), `
`, _jsx(_components.h4, {
      id: "startpos-1",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放的起始位置，单位为毫秒。（默认值为 0）"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_open2__return_values"
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
      id: "api_imediaplayer_openwithmediasource"
    }), `
`, _jsx(_components.h2, {
      id: "openwithmediasource",
      children: "openWithMediaSource"
    }), `
`, _jsx(_components.p, {
      children: "打开媒体文件并配置播放场景。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_openwithmediasource__prototype"
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
              children: " openWithMediaSource"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(MediaPlayerSource source);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_openwithmediasource__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法支持打开不同类型的媒体文件，包括以 ", _jsx(_components.code, {
        children: "content://"
      }), " 开头的 URI 文件和 ", _jsx(_components.code, {
        children: "assets"
      }), " 文件夹中的媒体文件，并设置播放选项。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该方法为异步调用。如果需要播放媒体文件，请确保在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_play",
            children: "play"
          }), " 方法之前，已收到 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
            children: "onPlayerStateChanged"
          }), " 回调并报告 ", _jsx(_components.code, {
            children: "OPEN_COMPLETED"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_openwithmediasource__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_openwithmediasource__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "source",
      children: _jsx(_components.code, {
        children: "source"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体资源，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediasource",
        children: "MediaPlayerSource"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_openwithmediasource__return_values"
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
      id: "api_imediaplayer_preloadsrc"
    }), `
`, _jsx(_components.h2, {
      id: "preloadsrc",
      children: "preloadSrc"
    }), `
`, _jsx(_components.p, {
      children: "预加载媒体资源。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_preloadsrc__prototype"
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
              children: " preloadSrc"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String src, "
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
              children: " startPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_preloadsrc__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，如果在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onpreloadevent",
        children: "onPreloadEvent"
      }), " 回调中收到 ", _jsx(_components.code, {
        children: "PLAYER_PRELOAD_EVENT_COMPLETE"
      }), " 事件，表示预加载成功；如果收到 ", _jsx(_components.code, {
        children: "PLAYER_PRELOAD_EVENT_ERROR"
      }), " 事件，表示预加载失败。预加载成功后，如需播放该媒体资源，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-control#api_imediaplayer_playpreloadedsrc",
        children: "playPreloadedSrc"
      }), "；如需清空播放列表，请调用 ", _jsx(_components.code, {
        children: "stop()"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在调用此方法前，请确保已成功调用 open 或 openWithMediaSource 打开媒体资源。"
      }), `
`, _jsx(_components.li, {
        children: "声网不支持将重复的媒体资源预加载到播放列表中。但你可以将正在播放的媒体资源再次预加载到播放列表中。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_preloadsrc__parameters"
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
`, _jsx(_components.p, {
      children: "媒体资源的 URL。"
    }), `
`, _jsx(_components.h4, {
      id: "startpos-2",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体资源预加载到播放列表后开始播放的位置（单位为毫秒）。预加载直播流时，请将该参数设为 0。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_preloadsrc__return_values"
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
      id: "api_imediaplayer_switchsrc"
    }), `
`, _jsx(_components.h2, {
      id: "switchsrc",
      children: "switchSrc"
    }), `
`, _jsx(_components.p, {
      children: "切换正在播放的媒体资源。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_switchsrc__prototype"
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
              children: " switchSrc"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String src, "
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
              children: " syncPts);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_switchsrc__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用此方法根据当前网络状态切换播放的媒体资源地址。例如："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当网络较差时，将播放的媒体资源切换为码率较低的媒体资源地址。"
      }), `
`, _jsx(_components.li, {
        children: "当网络良好时，将播放的媒体资源切换为码率较高的媒体资源地址。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["调用此方法后，如果收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent",
        children: "onPlayerEvent"
      }), " 回调报告 ", _jsx(_components.code, {
        children: "PLAYER_EVENT_SWITCH_COMPLETE"
      }), " 事件，表示切换成功。如果切换失败，SDK 会自动重试 3 次。如果仍然失败，你将收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerevent",
        children: "onPlayerEvent"
      }), " 回调报告 ", _jsx(_components.code, {
        children: "PLAYER_EVENT_SWITCH_ERROR"
      }), " 事件，表示切换过程中发生错误。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请确保在调用 open 之后再调用此方法。"
      }), `
`, _jsxs(_components.li, {
        children: ["为确保正常播放，调用此方法时请注意以下事项：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "播放暂停时不要调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "切换过程中不要调用 seek 方法。"
          }), `
`, _jsx(_components.li, {
            children: "切换媒体资源前，请确保播放位置未超过待切换媒体资源的总时长。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_switchsrc__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "src-1",
      children: _jsx(_components.code, {
        children: "src"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体资源的 URL 地址。"
    }), `
`, _jsx(_components.h4, {
      id: "syncpts",
      children: _jsx(_components.code, {
        children: "syncPts"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否在切换前后同步播放位置（毫秒）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：同步切换前后的播放位置。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不同步切换前后的播放位置。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_switchsrc__return_values"
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
      id: "api_imediaplayer_unloadsrc"
    }), `
`, _jsx(_components.h2, {
      id: "unloadsrc",
      children: "unloadSrc"
    }), `
`, _jsx(_components.p, {
      children: "卸载预加载的媒体资源。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_unloadsrc__prototype"
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
              children: " unloadSrc"
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
      id: "api_imediaplayer_unloadsrc__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_unloadsrc",
            children: "unloadSrc"
          }), " 无法释放正在播放的媒体资源。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_unloadsrc__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "src-2",
      children: _jsx(_components.code, {
        children: "src"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体资源的 URL。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_unloadsrc__return_values"
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
