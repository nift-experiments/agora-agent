import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "媒体资源播放和渲染",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_mediaplayer_playnrender" />

<a id="api_imediaplayer_selectaudiotrack_imediaplayer" />

## selectAudioTrack [#selectaudiotrack]

在播放过程中选择音频轨道。

<a id="api_imediaplayer_selectaudiotrack_imediaplayer__prototype" />

\`\`\`java
int selectAudioTrack(int index);
\`\`\`

<a id="api_imediaplayer_selectaudiotrack_imediaplayer__detailed_desc" />

获取音频文件的轨道索引后，可以调用该方法选择指定的音频轨道进行播放。例如，如果一个多轨道文件的不同轨道存储了不同语言的音频内容，可以调用该方法设置播放语言。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [selectAudioTrack](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_selectaudiotrack_imediaplayer) 需要在调用 [getStreamInfo](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo) 获取音频流索引值之后再调用。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayer_selectaudiotrack_imediaplayer__parameters" />

### 参数 [#参数]

#### \`index\` [#index]

音频轨道的索引。

<a id="api_imediaplayer_selectaudiotrack_imediaplayer__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_setaudiodualmonomode" />

## setAudioDualMonoMode [#setaudiodualmonomode]

设置当前音频文件的声道模式。

<a id="api_imediaplayer_setaudiodualmonomode__prototype" />

\`\`\`java
int setAudioDualMonoMode(int mode);
\`\`\`

<a id="api_imediaplayer_setaudiodualmonomode__detailed_desc" />

在立体声音频文件中，左右声道可以存储不同的音频数据。你可以根据需要将声道模式设置为原始模式、左声道模式、右声道模式或混合声道模式。例如，在 KTV 场景中，音乐文件的左声道存储伴奏，右声道存储人声。如果你只需要听伴奏，可以将声道模式设置为左声道模式；如果你需要同时听到伴奏和人声，可以将声道模式设置为混合声道模式。

注：

* 请在调用 open 方法之后调用该方法。
* 该方法仅适用于立体声音频文件。

<a id="api_imediaplayer_setaudiodualmonomode__parameters" />

### 参数 [#参数-1]

#### \`mode\` [#mode]

声道模式：

* AUDIO\\_DUAL\\_MONO\\_STEREO (0)：原始模式。
* AUDIO\\_DUAL\\_MONO\\_L (1)：左声道模式。该模式用左声道的音频替换右声道，你只能听到左声道的音频。
* AUDIO\\_DUAL\\_MONO\\_R (2)：右声道模式。该模式用右声道的音频替换左声道，你只能听到右声道的音频。
* AUDIO\\_DUAL\\_MONO\\_MIX (3)：混合声道模式。该模式将左右声道的音频混合，你可以同时听到左右声道的音频。

<a id="api_imediaplayer_setaudiodualmonomode__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_setaudiopitch" />

## setAudioPitch [#setaudiopitch]

设置当前媒体资源的音调。

<a id="api_imediaplayer_setaudiopitch__prototype" />

\`\`\`java
int setAudioPitch(int pitch);
\`\`\`

<a id="api_imediaplayer_setaudiopitch__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 \`open\` 方法之后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayer_setaudiopitch__parameters" />

### 参数 [#参数-2]

#### \`pitch\` [#pitch]

按半音阶设置本地音乐文件的音调。默认值为 0，表示保持原始音调。取值范围为 -12 到 12，相邻两个值之间的音调差为一个半音。该参数的绝对值越大，本地音乐文件的音调越高或越低。

<a id="api_imediaplayer_setaudiopitch__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_setloopcount" />

## setLoopCount [#setloopcount]

设置音效的循环播放次数。

<a id="api_imediaplayer_setloopcount__prototype" />

\`\`\`java
int setLoopCount(int loopCount);
\`\`\`

<a id="api_imediaplayer_setloopcount__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当循环播放完成后，SDK 会触发 [onPlayerStateChanged](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged) 回调，并报告播放状态为 \`PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED\`。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayer_setloopcount__parameters" />

### 参数 [#参数-3]

#### \`loopCount\` [#loopcount]

音效的循环播放次数：

* ≥ 0：播放的次数。例如，设置为 0 表示不循环播放，仅播放一次；设置为 1 表示循环播放一次，共播放两次。
* -1：无限循环播放音频文件。

<a id="api_imediaplayer_setloopcount__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_setplaybackspeed" />

## setPlaybackSpeed [#setplaybackspeed]

设置当前音频文件的播放速度。

<a id="api_imediaplayer_setplaybackspeed__prototype" />

\`\`\`java
int setPlaybackSpeed(int speed);
\`\`\`

<a id="api_imediaplayer_setplaybackspeed__detailed_desc" />

调用该方法前，需要先调用 \`open\` 方法。

<a id="api_imediaplayer_setplaybackspeed__parameters" />

### 参数 [#参数-4]

#### \`speed\` [#speed]

播放速度。建议设置为 30 到 400 之间的值，具体如下：

* 30：原始速度的 0.3 倍。
* 100：原始速度。
* 400：原始速度的 4 倍。

<a id="api_imediaplayer_setplaybackspeed__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_setplayeroption" />

## setPlayerOption [#setplayeroption]

设置媒体播放器选项。

<a id="api_imediaplayer_setplayeroption__prototype" />

\`\`\`java
int setPlayerOption(String key, int value);
\`\`\`

<a id="api_imediaplayer_setplayeroption__detailed_desc" />

该方法用于通过 \`key\` 和 \`value\` 设置媒体播放器的选项。与 [setPlayerOptionString](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2) 不同，本方法的 \`value\` 参数类型为 \`int\`，而 [setPlayerOptionString](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2) 的 \`value\` 参数类型为 \`String\`。这两个方法不能同时使用。一般情况下无需调用此方法，直接使用媒体播放器提供的默认选项即可。

<a id="api_imediaplayer_setplayeroption__scenario" />

### 适用场景 [#适用场景]

适用于需要技术预览或特殊定制功能的场景。

<a id="api_imediaplayer_setplayeroption__timing" />

### 调用时机 [#调用时机]

请在调用 \`open\` 或 [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) 方法之前调用。

<a id="api_imediaplayer_setplayeroption__parameters" />

### 参数 [#参数-5]

#### \`key\` [#key]

选项的键。

#### \`value\` [#value]

选项的值。

<a id="api_imediaplayer_setplayeroption__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_setplayeroption2" />

## setPlayerOptionString [#setplayeroptionstring]

设置媒体播放器的参数选项。

<a id="api_imediaplayer_setplayeroption2__prototype" />

\`\`\`java
int setPlayerOptionString(String key, String value);
\`\`\`

<a id="api_imediaplayer_setplayeroption2__detailed_desc" />

该方法与 [setPlayerOption](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption) 的区别在于： [setPlayerOptionString](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2) 的 \`value\` 参数类型为 \`String\`，而 [setPlayerOption](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption) 的 \`value\` 参数类型也是 \`String\`。这两个方法不能同时使用。通常情况下无需调用该方法，直接使用媒体播放器提供的默认参数即可。

<a id="api_imediaplayer_setplayeroption2__scenario" />

### 适用场景 [#适用场景-1]

适用于需要技术预览或特殊定制功能的场景。

<a id="api_imediaplayer_setplayeroption2__timing" />

### 调用时机 [#调用时机-1]

请在调用 \`open\` 或 [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) 方法之前调用本方法。

<a id="api_imediaplayer_setplayeroption2__parameters" />

### 参数 [#参数-6]

#### \`key\` [#key-1]

参数选项的键。

#### \`value\` [#value-1]

参数选项的值。

<a id="api_imediaplayer_setplayeroption2__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayer_setview" />

## setView [#setview]

设置渲染视图。

<a id="api_imediaplayer_setview__prototype" />

\`\`\`java
int setView(View videoView);
\`\`\`

<a id="api_imediaplayer_setview__detailed_desc" />

<a id="api_imediaplayer_setview__timing" />

### 调用时机 [#调用时机-2]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_imediaplayer_setview__parameters" />

### 参数 [#参数-7]

#### \`videoView\` [#videoview]

渲染视图。

<a id="api_imediaplayer_setview__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)
`;
export let structuredData = {
  contents: [{
    heading: "selectaudiotrack",
    content: "在播放过程中选择音频轨道。"
  }, {
    heading: "selectaudiotrack",
    content: "获取音频文件的轨道索引后，可以调用该方法选择指定的音频轨道进行播放。例如，如果一个多轨道文件的不同轨道存储了不同语言的音频内容，可以调用该方法设置播放语言。"
  }, {
    heading: "selectaudiotrack",
    content: "selectAudioTrack 需要在调用 getStreamInfo 获取音频流索引值之后再调用。"
  }, {
    heading: "index",
    content: "音频轨道的索引。"
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
    heading: "setaudiodualmonomode",
    content: "设置当前音频文件的声道模式。"
  }, {
    heading: "setaudiodualmonomode",
    content: "在立体声音频文件中，左右声道可以存储不同的音频数据。你可以根据需要将声道模式设置为原始模式、左声道模式、右声道模式或混合声道模式。例如，在 KTV 场景中，音乐文件的左声道存储伴奏，右声道存储人声。如果你只需要听伴奏，可以将声道模式设置为左声道模式；如果你需要同时听到伴奏和人声，可以将声道模式设置为混合声道模式。"
  }, {
    heading: "setaudiodualmonomode",
    content: "注："
  }, {
    heading: "setaudiodualmonomode",
    content: "请在调用 open 方法之后调用该方法。"
  }, {
    heading: "setaudiodualmonomode",
    content: "该方法仅适用于立体声音频文件。"
  }, {
    heading: "mode",
    content: "声道模式："
  }, {
    heading: "mode",
    content: "AUDIO\\_DUAL\\_MONO\\_STEREO (0)：原始模式。"
  }, {
    heading: "mode",
    content: "AUDIO\\_DUAL\\_MONO\\_L (1)：左声道模式。该模式用左声道的音频替换右声道，你只能听到左声道的音频。"
  }, {
    heading: "mode",
    content: "AUDIO\\_DUAL\\_MONO\\_R (2)：右声道模式。该模式用右声道的音频替换左声道，你只能听到右声道的音频。"
  }, {
    heading: "mode",
    content: "AUDIO\\_DUAL\\_MONO\\_MIX (3)：混合声道模式。该模式将左右声道的音频混合，你可以同时听到左右声道的音频。"
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
    heading: "setaudiopitch",
    content: "设置当前媒体资源的音调。"
  }, {
    heading: "setaudiopitch",
    content: "请在调用 `open` 方法之后调用此方法。"
  }, {
    heading: "pitch",
    content: "按半音阶设置本地音乐文件的音调。默认值为 0，表示保持原始音调。取值范围为 -12 到 12，相邻两个值之间的音调差为一个半音。该参数的绝对值越大，本地音乐文件的音调越高或越低。"
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
    heading: "setloopcount",
    content: "设置音效的循环播放次数。"
  }, {
    heading: "setloopcount",
    content: "当循环播放完成后，SDK 会触发 onPlayerStateChanged 回调，并报告播放状态为 `PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED`。"
  }, {
    heading: "loopcount",
    content: "音效的循环播放次数："
  }, {
    heading: "loopcount",
    content: "≥ 0：播放的次数。例如，设置为 0 表示不循环播放，仅播放一次；设置为 1 表示循环播放一次，共播放两次。"
  }, {
    heading: "loopcount",
    content: "-1：无限循环播放音频文件。"
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
    heading: "setplaybackspeed",
    content: "设置当前音频文件的播放速度。"
  }, {
    heading: "setplaybackspeed",
    content: "调用该方法前，需要先调用 `open` 方法。"
  }, {
    heading: "speed",
    content: "播放速度。建议设置为 30 到 400 之间的值，具体如下："
  }, {
    heading: "speed",
    content: "30：原始速度的 0.3 倍。"
  }, {
    heading: "speed",
    content: "100：原始速度。"
  }, {
    heading: "speed",
    content: "400：原始速度的 4 倍。"
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
    heading: "setplayeroption",
    content: "设置媒体播放器选项。"
  }, {
    heading: "setplayeroption",
    content: "该方法用于通过 `key` 和 `value` 设置媒体播放器的选项。与 setPlayerOptionString 不同，本方法的 `value` 参数类型为 `int`，而 setPlayerOptionString 的 `value` 参数类型为 `String`。这两个方法不能同时使用。一般情况下无需调用此方法，直接使用媒体播放器提供的默认选项即可。"
  }, {
    heading: "适用场景",
    content: "适用于需要技术预览或特殊定制功能的场景。"
  }, {
    heading: "调用时机",
    content: "请在调用 `open` 或 openWithMediaSource 方法之前调用。"
  }, {
    heading: "key",
    content: "选项的键。"
  }, {
    heading: "value",
    content: "选项的值。"
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
    heading: "setplayeroptionstring",
    content: "设置媒体播放器的参数选项。"
  }, {
    heading: "setplayeroptionstring",
    content: "该方法与 setPlayerOption 的区别在于： setPlayerOptionString 的 `value` 参数类型为 `String`，而 setPlayerOption 的 `value` 参数类型也是 `String`。这两个方法不能同时使用。通常情况下无需调用该方法，直接使用媒体播放器提供的默认参数即可。"
  }, {
    heading: "适用场景-1",
    content: "适用于需要技术预览或特殊定制功能的场景。"
  }, {
    heading: "调用时机-1",
    content: "请在调用 `open` 或 openWithMediaSource 方法之前调用本方法。"
  }, {
    heading: "key-1",
    content: "参数选项的键。"
  }, {
    heading: "value-1",
    content: "参数选项的值。"
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
    heading: "setview",
    content: "设置渲染视图。"
  }, {
    heading: "调用时机-2",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "videoview",
    content: "渲染视图。"
  }, {
    heading: "返回值-7",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-7",
    content: "IMediaPlayer"
  }],
  headings: [{
    id: "selectaudiotrack",
    content: "selectAudioTrack"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "index",
    content: "`index`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "setaudiodualmonomode",
    content: "setAudioDualMonoMode"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "setaudiopitch",
    content: "setAudioPitch"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "pitch",
    content: "`pitch`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "setloopcount",
    content: "setLoopCount"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "loopcount",
    content: "`loopCount`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "setplaybackspeed",
    content: "setPlaybackSpeed"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "speed",
    content: "`speed`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "setplayeroption",
    content: "setPlayerOption"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "key",
    content: "`key`"
  }, {
    id: "value",
    content: "`value`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "setplayeroptionstring",
    content: "setPlayerOptionString"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "key-1",
    content: "`key`"
  }, {
    id: "value-1",
    content: "`value`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "setview",
    content: "setView"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "videoview",
    content: "`videoView`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#selectaudiotrack",
  title: _jsx(_Fragment, {
    children: "selectAudioTrack"
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
  url: "#setaudiodualmonomode",
  title: _jsx(_Fragment, {
    children: "setAudioDualMonoMode"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#setaudiopitch",
  title: _jsx(_Fragment, {
    children: "setAudioPitch"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#pitch",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pitch"
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
  url: "#setloopcount",
  title: _jsx(_Fragment, {
    children: "setLoopCount"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#loopcount",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loopCount"
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
  url: "#setplaybackspeed",
  title: _jsx(_Fragment, {
    children: "setPlaybackSpeed"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#speed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "speed"
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
  url: "#setplayeroption",
  title: _jsx(_Fragment, {
    children: "setPlayerOption"
  })
}, {
  depth: 3,
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#key",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
    })
  })
}, {
  depth: 4,
  url: "#value",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "value"
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
  url: "#setplayeroptionstring",
  title: _jsx(_Fragment, {
    children: "setPlayerOptionString"
  })
}, {
  depth: 3,
  url: "#适用场景-1",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#key-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
    })
  })
}, {
  depth: 4,
  url: "#value-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "value"
    })
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
  url: "#setview",
  title: _jsx(_Fragment, {
    children: "setView"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#videoview",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoView"
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
      id: "toc_mediaplayer_playnrender"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectaudiotrack_imediaplayer"
    }), `
`, _jsx(_components.h2, {
      id: "selectaudiotrack",
      children: "selectAudioTrack"
    }), `
`, _jsx(_components.p, {
      children: "在播放过程中选择音频轨道。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectaudiotrack_imediaplayer__prototype"
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
              children: " selectAudioTrack"
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
      id: "api_imediaplayer_selectaudiotrack_imediaplayer__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "获取音频文件的轨道索引后，可以调用该方法选择指定的音频轨道进行播放。例如，如果一个多轨道文件的不同轨道存储了不同语言的音频内容，可以调用该方法设置播放语言。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_selectaudiotrack_imediaplayer",
            children: "selectAudioTrack"
          }), " 需要在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo",
            children: "getStreamInfo"
          }), " 获取音频流索引值之后再调用。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectaudiotrack_imediaplayer__parameters"
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
`, _jsx(_components.p, {
      children: "音频轨道的索引。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectaudiotrack_imediaplayer__return_values"
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
      id: "api_imediaplayer_setaudiodualmonomode"
    }), `
`, _jsx(_components.h2, {
      id: "setaudiodualmonomode",
      children: "setAudioDualMonoMode"
    }), `
`, _jsx(_components.p, {
      children: "设置当前音频文件的声道模式。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setaudiodualmonomode__prototype"
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
              children: " setAudioDualMonoMode"
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
              children: " mode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setaudiodualmonomode__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "在立体声音频文件中，左右声道可以存储不同的音频数据。你可以根据需要将声道模式设置为原始模式、左声道模式、右声道模式或混合声道模式。例如，在 KTV 场景中，音乐文件的左声道存储伴奏，右声道存储人声。如果你只需要听伴奏，可以将声道模式设置为左声道模式；如果你需要同时听到伴奏和人声，可以将声道模式设置为混合声道模式。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请在调用 open 方法之后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "该方法仅适用于立体声音频文件。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setaudiodualmonomode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsx(_components.p, {
      children: "声道模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_DUAL_MONO_STEREO (0)：原始模式。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_DUAL_MONO_L (1)：左声道模式。该模式用左声道的音频替换右声道，你只能听到左声道的音频。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_DUAL_MONO_R (2)：右声道模式。该模式用右声道的音频替换左声道，你只能听到右声道的音频。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_DUAL_MONO_MIX (3)：混合声道模式。该模式将左右声道的音频混合，你可以同时听到左右声道的音频。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setaudiodualmonomode__return_values"
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
      id: "api_imediaplayer_setaudiopitch"
    }), `
`, _jsx(_components.h2, {
      id: "setaudiopitch",
      children: "setAudioPitch"
    }), `
`, _jsx(_components.p, {
      children: "设置当前媒体资源的音调。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setaudiopitch__prototype"
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
              children: " setAudioPitch"
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
              children: " pitch);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setaudiopitch__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.code, {
            children: "open"
          }), " 方法之后调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setaudiopitch__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "pitch",
      children: _jsx(_components.code, {
        children: "pitch"
      })
    }), `
`, _jsx(_components.p, {
      children: "按半音阶设置本地音乐文件的音调。默认值为 0，表示保持原始音调。取值范围为 -12 到 12，相邻两个值之间的音调差为一个半音。该参数的绝对值越大，本地音乐文件的音调越高或越低。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setaudiopitch__return_values"
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
      id: "api_imediaplayer_setloopcount"
    }), `
`, _jsx(_components.h2, {
      id: "setloopcount",
      children: "setLoopCount"
    }), `
`, _jsx(_components.p, {
      children: "设置音效的循环播放次数。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setloopcount__prototype"
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
              children: " setLoopCount"
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
              children: " loopCount);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setloopcount__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当循环播放完成后，SDK 会触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayersourcestatechanged",
            children: "onPlayerStateChanged"
          }), " 回调，并报告播放状态为 ", _jsx(_components.code, {
            children: "PLAYER_STATE_PLAYBACK_ALL_LOOPS_COMPLETED"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setloopcount__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "loopcount",
      children: _jsx(_components.code, {
        children: "loopCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的循环播放次数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "≥ 0：播放的次数。例如，设置为 0 表示不循环播放，仅播放一次；设置为 1 表示循环播放一次，共播放两次。"
      }), `
`, _jsx(_components.li, {
        children: "-1：无限循环播放音频文件。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setloopcount__return_values"
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
      id: "api_imediaplayer_setplaybackspeed"
    }), `
`, _jsx(_components.h2, {
      id: "setplaybackspeed",
      children: "setPlaybackSpeed"
    }), `
`, _jsx(_components.p, {
      children: "设置当前音频文件的播放速度。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplaybackspeed__prototype"
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
              children: " setPlaybackSpeed"
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
              children: " speed);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplaybackspeed__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法前，需要先调用 ", _jsx(_components.code, {
        children: "open"
      }), " 方法。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplaybackspeed__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "speed",
      children: _jsx(_components.code, {
        children: "speed"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放速度。建议设置为 30 到 400 之间的值，具体如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "30：原始速度的 0.3 倍。"
      }), `
`, _jsx(_components.li, {
        children: "100：原始速度。"
      }), `
`, _jsx(_components.li, {
        children: "400：原始速度的 4 倍。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplaybackspeed__return_values"
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
      id: "api_imediaplayer_setplayeroption"
    }), `
`, _jsx(_components.h2, {
      id: "setplayeroption",
      children: "setPlayerOption"
    }), `
`, _jsx(_components.p, {
      children: "设置媒体播放器选项。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption__prototype"
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
              children: " setPlayerOption"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String key, "
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
              children: " value);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法用于通过 ", _jsx(_components.code, {
        children: "key"
      }), " 和 ", _jsx(_components.code, {
        children: "value"
      }), " 设置媒体播放器的选项。与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2",
        children: "setPlayerOptionString"
      }), " 不同，本方法的 ", _jsx(_components.code, {
        children: "value"
      }), " 参数类型为 ", _jsx(_components.code, {
        children: "int"
      }), "，而 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2",
        children: "setPlayerOptionString"
      }), " 的 ", _jsx(_components.code, {
        children: "value"
      }), " 参数类型为 ", _jsx(_components.code, {
        children: "String"
      }), "。这两个方法不能同时使用。一般情况下无需调用此方法，直接使用媒体播放器提供的默认选项即可。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于需要技术预览或特殊定制功能的场景。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.code, {
        children: "open"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
        children: "openWithMediaSource"
      }), " 方法之前调用。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "key",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "选项的键。"
    }), `
`, _jsx(_components.h4, {
      id: "value",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "选项的值。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption__return_values"
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
      id: "api_imediaplayer_setplayeroption2"
    }), `
`, _jsx(_components.h2, {
      id: "setplayeroptionstring",
      children: "setPlayerOptionString"
    }), `
`, _jsx(_components.p, {
      children: "设置媒体播放器的参数选项。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption2__prototype"
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
              children: " setPlayerOptionString"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String key, String value);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption",
        children: "setPlayerOption"
      }), " 的区别在于： ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption2",
        children: "setPlayerOptionString"
      }), " 的 ", _jsx(_components.code, {
        children: "value"
      }), " 参数类型为 ", _jsx(_components.code, {
        children: "String"
      }), "，而 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-playnrender#api_imediaplayer_setplayeroption",
        children: "setPlayerOption"
      }), " 的 ", _jsx(_components.code, {
        children: "value"
      }), " 参数类型也是 ", _jsx(_components.code, {
        children: "String"
      }), "。这两个方法不能同时使用。通常情况下无需调用该方法，直接使用媒体播放器提供的默认参数即可。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于需要技术预览或特殊定制功能的场景。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.code, {
        children: "open"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
        children: "openWithMediaSource"
      }), " 方法之前调用本方法。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "key-1",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数选项的键。"
    }), `
`, _jsx(_components.h4, {
      id: "value-1",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数选项的值。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setplayeroption2__return_values"
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
      id: "api_imediaplayer_setview"
    }), `
`, _jsx(_components.h2, {
      id: "setview",
      children: "setView"
    }), `
`, _jsx(_components.p, {
      children: "设置渲染视图。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setview__prototype"
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
              children: " setView"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(View videoView);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setview__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setview__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setview__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "videoview",
      children: _jsx(_components.code, {
        children: "videoView"
      })
    }), `
`, _jsx(_components.p, {
      children: "渲染视图。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setview__return_values"
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
