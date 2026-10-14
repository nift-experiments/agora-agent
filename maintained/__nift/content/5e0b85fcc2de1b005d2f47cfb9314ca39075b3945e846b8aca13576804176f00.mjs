import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音乐文件播放",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_mixing" />

<a id="api_irtcengine_adjustaudiomixingplayoutvolume" />

## adjustAudioMixingPlayoutVolume [#adjustaudiomixingplayoutvolume]

调节本地播放的混音音量。

<a id="api_irtcengine_adjustaudiomixingplayoutvolume__prototype" />

\`\`\`java
public abstract int adjustAudioMixingPlayoutVolume(int volume);
\`\`\`

<a id="api_irtcengine_adjustaudiomixingplayoutvolume__detailed_desc" />

你需要在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用此方法。

<a id="api_irtcengine_adjustaudiomixingplayoutvolume__timing" />

### 调用时机 [#调用时机]

你需要在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用此方法。

<a id="api_irtcengine_adjustaudiomixingplayoutvolume__parameters" />

### 参数 [#参数]

#### \`volume\` [#volume]

本地播放的混音音量，取值范围为 0 到 100。（默认值为 100）

* 0：静音。
* 100：原始音量。

<a id="api_irtcengine_adjustaudiomixingplayoutvolume__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_adjustaudiomixingpublishvolume" />

## adjustAudioMixingPublishVolume [#adjustaudiomixingpublishvolume]

调节用于发布的混音音量。

<a id="api_irtcengine_adjustaudiomixingpublishvolume__prototype" />

\`\`\`java
public abstract int adjustAudioMixingPublishVolume(int volume);
\`\`\`

<a id="api_irtcengine_adjustaudiomixingpublishvolume__detailed_desc" />

该方法用于调节发送给其他用户的混音音量。

<a id="api_irtcengine_adjustaudiomixingpublishvolume__timing" />

### 调用时机 [#调用时机-1]

请在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用该方法。

<a id="api_irtcengine_adjustaudiomixingpublishvolume__parameters" />

### 参数 [#参数-1]

#### \`volume\` [#volume-1]

用于发布的混音音量。取值范围为 0 到 100，默认值为 100，表示原始音量。

<a id="api_irtcengine_adjustaudiomixingpublishvolume__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_adjustaudiomixingvolume" />

## adjustAudioMixingVolume [#adjustaudiomixingvolume]

调节混音时的音量。

<a id="api_irtcengine_adjustaudiomixingvolume__prototype" />

\`\`\`java
public abstract int adjustAudioMixingVolume(int volume);
\`\`\`

<a id="api_irtcengine_adjustaudiomixingvolume__detailed_desc" />

该方法用于在本地客户端和远端客户端上调节混音音量。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [adjustAudioMixingVolume](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingvolume) 不会影响通过 \`playEffect\` 方法设置的音效文件的音量。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_adjustaudiomixingvolume__timing" />

### 调用时机 [#调用时机-2]

请在调用 \`startAudioMixing\` 方法之后调用该方法。

<a id="api_irtcengine_adjustaudiomixingvolume__parameters" />

### 参数 [#参数-2]

#### \`volume\` [#volume-2]

混音音量，取值范围为 0 到 100。（默认值为 100，表示原始音量。）

<a id="api_irtcengine_adjustaudiomixingvolume__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getaudiomixingcurrentposition" />

## getAudioMixingCurrentPosition [#getaudiomixingcurrentposition]

获取当前混音的播放位置（毫秒）。

<a id="api_irtcengine_getaudiomixingcurrentposition__prototype" />

\`\`\`java
public abstract int getAudioMixingCurrentPosition();
\`\`\`

<a id="api_irtcengine_getaudiomixingcurrentposition__detailed_desc" />

注：

* 你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged （AUDIO\\_MIXING\\_STATE\\_PLAYING ）回调后调用此方法。
* 如果需要多次调用 getAudioMixingCurrentPosition，请确保两次调用之间的时间间隔大于 500 毫秒。

<a id="api_irtcengine_getaudiomixingcurrentposition__return_values" />

### 返回值 [#返回值-3]

* 方法调用成功，返回当前混音的播放位置（毫秒）。0 表示当前音乐文件尚未开始播放。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getaudiomixingduration" />

## getAudioMixingDuration [#getaudiomixingduration]

获取音频文件的混音时长（毫秒）。

<a id="api_irtcengine_getaudiomixingduration__prototype" />

\`\`\`java
public abstract int getAudioMixingDuration();
\`\`\`

<a id="api_irtcengine_getaudiomixingduration__detailed_desc" />

<a id="api_irtcengine_getaudiomixingduration__timing" />

### 调用时机 [#调用时机-3]

请在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用该方法。

<a id="api_irtcengine_getaudiomixingduration__return_values" />

### 返回值 [#返回值-4]

* 方法调用成功，返回混音的时长（毫秒）。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getaudiomixingplayoutvolume" />

## getAudioMixingPlayoutVolume [#getaudiomixingplayoutvolume]

获取本地播放的混音音量。

<a id="api_irtcengine_getaudiomixingplayoutvolume__prototype" />

\`\`\`java
public abstract int getAudioMixingPlayoutVolume();
\`\`\`

<a id="api_irtcengine_getaudiomixingplayoutvolume__detailed_desc" />

你可以调用该方法获取混音音频文件的本地播放音量，有助于排查与音量相关的问题。

<a id="api_irtcengine_getaudiomixingplayoutvolume__timing" />

### 调用时机 [#调用时机-4]

在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用此方法。

<a id="api_irtcengine_getaudiomixingplayoutvolume__return_values" />

### 返回值 [#返回值-5]

* 方法调用成功，返回混音音量，取值范围为 \\[0, 100]。
* 方法调用失败，返回小于 0 的错误码。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getaudiomixingpublishvolume" />

## getAudioMixingPublishVolume [#getaudiomixingpublishvolume]

获取用于发布的混音音量。

<a id="api_irtcengine_getaudiomixingpublishvolume__prototype" />

\`\`\`java
public abstract int getAudioMixingPublishVolume();
\`\`\`

<a id="api_irtcengine_getaudiomixingpublishvolume__detailed_desc" />

该方法有助于排查音频音量相关的问题。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你需要在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_getaudiomixingpublishvolume__return_values" />

### 返回值 [#返回值-6]

* ≥ 0：方法调用成功，返回混音音量，取值范围为 \\[0, 100]。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getaudiotrackcount" />

## getAudioTrackCount [#getaudiotrackcount]

获取当前音乐文件的音轨索引。

<a id="api_irtcengine_getaudiotrackcount__prototype" />

\`\`\`java
public abstract int getAudioTrackCount();
\`\`\`

<a id="api_irtcengine_getaudiotrackcount__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你需要在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_getaudiotrackcount__return_values" />

### 返回值 [#返回值-7]

* 方法调用成功，返回音轨的索引。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pauseaudiomixing" />

## pauseAudioMixing [#pauseaudiomixing]

暂停播放和混音的音乐文件。

<a id="api_irtcengine_pauseaudiomixing__prototype" />

\`\`\`java
public abstract int pauseAudioMixing();
\`\`\`

<a id="api_irtcengine_pauseaudiomixing__detailed_desc" />

调用 \`startAudioMixing\` 播放音乐文件后，可以调用该方法暂停播放。如果需要停止播放，请调用 [stopAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_stopaudiomixing)。

<a id="api_irtcengine_pauseaudiomixing__timing" />

### 调用时机 [#调用时机-5]

请在加入频道后调用该方法。

<a id="api_irtcengine_pauseaudiomixing__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_resumeaudiomixing" />

## resumeAudioMixing [#resumeaudiomixing]

恢复播放和混音的音乐文件。

<a id="api_irtcengine_resumeaudiomixing__prototype" />

\`\`\`java
public abstract int resumeAudioMixing();
\`\`\`

<a id="api_irtcengine_resumeaudiomixing__detailed_desc" />

调用 [pauseAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_pauseaudiomixing) 后，可以调用 [resumeAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_resumeaudiomixing) 恢复播放。

<a id="api_irtcengine_resumeaudiomixing__timing" />

### 调用时机 [#调用时机-6]

请在加入频道后调用此方法。

<a id="api_irtcengine_resumeaudiomixing__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_selectaudiotrack" />

## selectAudioTrack [#selectaudiotrack]

选择播放过程中使用的音轨。

<a id="api_irtcengine_selectaudiotrack__prototype" />

\`\`\`java
public abstract int selectAudioTrack(int audioIndex);
\`\`\`

<a id="api_irtcengine_selectaudiotrack__detailed_desc" />

获取音频文件的音轨索引后，可以调用该方法指定任意音轨进行播放。例如，如果一个多音轨文件的不同音轨存储了不同语言的歌曲，可以调用该方法设置播放语言。

注：

* 支持的音频文件格式详见[声网 RTC SDK 支持哪些格式的音频文件](https://doc.shengwang.cn/faq/general-product-inquiry/audio-format)。
* 你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged （AUDIO\\_MIXING\\_STATE\\_PLAYING ）回调后再调用该方法。

<a id="api_irtcengine_selectaudiotrack__parameters" />

### 参数 [#参数-3]

#### \`audioIndex\` [#audioindex]

你想要指定的音轨索引。该值应大于 0 且小于 [getAudioTrackCount](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiotrackcount) 返回的值。

<a id="api_irtcengine_selectaudiotrack__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-10]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_imediaplayer_selectmultiaudiotrack" />

## selectMultiAudioTrack [#selectmultiaudiotrack]

选择要在本地设备播放和发布到频道的音轨。

<a id="api_imediaplayer_selectmultiaudiotrack__prototype" />

\`\`\`java
int selectMultiAudioTrack(int playoutTrackIndex, int publishTrackIndex);
\`\`\`

<a id="api_imediaplayer_selectmultiaudiotrack__detailed_desc" />

在调用该方法前，你需要通过 [openWithMediaSource](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource) 打开媒体文件，并在 [MediaPlayerSource](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediasource) 中将 \`enableMultiAudioTrack\` 设置为 true。

<a id="api_imediaplayer_selectmultiaudiotrack__scenario" />

### 适用场景 [#适用场景]

该方法适用于例如 KTV 场景：主持人可以选择在本地播放原唱音轨，同时将伴奏音轨发布到频道。

<a id="api_imediaplayer_selectmultiaudiotrack__parameters" />

### 参数 [#参数-4]

#### \`playoutTrackIndex\` [#playouttrackindex]

用于本地播放的音轨索引。你可以通过 [getStreamInfo](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo) 获取该索引。

#### \`publishTrackIndex\` [#publishtrackindex]

要发布到频道中的音轨索引。你可以通过 [getStreamInfo](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo) 获取该索引。

<a id="api_imediaplayer_selectmultiaudiotrack__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-11]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_irtcengine_setaudiomixingdualmonomode" />

## setAudioMixingDualMonoMode [#setaudiomixingdualmonomode]

设置当前音频文件的声道模式。

<a id="api_irtcengine_setaudiomixingdualmonomode__prototype" />

\`\`\`java
public abstract int setAudioMixingDualMonoMode(Constants.AudioMixingDualMonoMode mode);
\`\`\`

<a id="api_irtcengine_setaudiomixingdualmonomode__detailed_desc" />

你可以根据需要将音频文件的声道模式设置为原始模式、左声道模式、右声道模式或混合声道模式。例如，在 KTV 场景中，音乐文件的左声道存储伴奏，右声道存储原唱人声。你可以根据实际需求进行设置：

* 如果只想听伴奏，使用该方法将音频文件的声道模式设置为左声道模式。
* 如果需要同时听到伴奏和原唱人声，调用该方法将声道模式设置为混合模式。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法仅适用于立体声音频文件。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setaudiomixingdualmonomode__scenario" />

### 适用场景 [#适用场景-1]

在 KTV 场景中，音乐文件的左声道存储伴奏，右声道存储原唱人声。你可以根据实际需求进行设置：

* 如果你只想听到伴奏，调用该方法将声道模式设置为左声道模式。
* 如果你需要同时听到伴奏和原唱人声，调用该方法将声道模式设置为混合模式。

<a id="api_irtcengine_setaudiomixingdualmonomode__timing" />

### 调用时机 [#调用时机-7]

在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用该方法。

<a id="api_irtcengine_setaudiomixingdualmonomode__parameters" />

### 参数 [#参数-5]

#### \`mode\` [#mode]

声道模式。详见 [AudioMixingDualMonoMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiomixingdualmonomode)。

<a id="api_irtcengine_setaudiomixingdualmonomode__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-12]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setaudiomixingpitch" />

## setAudioMixingPitch [#setaudiomixingpitch]

设置本地音乐文件的音调。

<a id="api_irtcengine_setaudiomixingpitch__prototype" />

\`\`\`java
public abstract int setAudioMixingPitch(int pitch);
\`\`\`

<a id="api_irtcengine_setaudiomixingpitch__detailed_desc" />

你需要在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用该方法。

<a id="api_irtcengine_setaudiomixingpitch__timing" />

### 调用时机 [#调用时机-8]

你需要在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调后调用该方法。

<a id="api_irtcengine_setaudiomixingpitch__parameters" />

### 参数 [#参数-6]

#### \`pitch\` [#pitch]

按半音阶设置本地音乐文件的音调（默认值为 0）。取值范围为 -12 到 12，相邻数值之间的音调差为一个半音。该参数的绝对值越大，音调变化越明显。

<a id="api_irtcengine_setaudiomixingpitch__return_values" />

### 返回值 [#返回值-13]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-13]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setaudiomixingplaybackspeed" />

## setAudioMixingPlaybackSpeed [#setaudiomixingplaybackspeed]

设置当前音频文件的播放速度。

<a id="api_irtcengine_setaudiomixingplaybackspeed__prototype" />

\`\`\`java
public abstract int setAudioMixingPlaybackSpeed(int speed);
\`\`\`

<a id="api_irtcengine_setaudiomixingplaybackspeed__detailed_desc" />

请确保在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) 回调，报告状态为 \`AUDIO_MIXING_STATE_PLAYING\` 后再调用此方法。

<a id="api_irtcengine_setaudiomixingplaybackspeed__parameters" />

### 参数 [#参数-7]

#### \`speed\` [#speed]

播放速度。建议设置为 50 到 400 之间的值，定义如下：

* 50：原始速度的一半。
* 100：原始速度。
* 400：原始速度的 4 倍。

<a id="api_irtcengine_setaudiomixingplaybackspeed__return_values" />

### 返回值 [#返回值-14]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-14]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setaudiomixingposition" />

## setAudioMixingPosition [#setaudiomixingposition]

设置混音的播放位置。

<a id="api_irtcengine_setaudiomixingposition__prototype" />

\`\`\`java
public abstract int setAudioMixingPosition(int pos);
\`\`\`

<a id="api_irtcengine_setaudiomixingposition__detailed_desc" />

<a id="api_irtcengine_setaudiomixingposition__timing" />

### 调用时机 [#调用时机-9]

请在调用 \`startAudioMixing\` 并收到 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) 回调后调用此方法。

<a id="api_irtcengine_setaudiomixingposition__parameters" />

### 参数 [#参数-8]

#### \`pos\` [#pos]

播放位置，单位为毫秒。

<a id="api_irtcengine_setaudiomixingposition__return_values" />

### 返回值 [#返回值-15]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-15]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startaudiomixing" />

## startAudioMixing \\[1/2] [#startaudiomixing-12]

开始播放音乐文件。

<a id="api_irtcengine_startaudiomixing__prototype" />

\`\`\`java
public abstract int startAudioMixing(String filePath, boolean loopback, int cycle);
\`\`\`

<a id="api_irtcengine_startaudiomixing__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃。请改用 [startAudioMixing \\[2/2\\]](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing2)。

该方法支持播放以 \`content://\` 开头的 URI 文件。支持的音频文件格式详见声网 RTC SDK 支持的音频文件格式。如果本地音乐文件不存在、SDK 不支持该文件格式，或无法访问音乐文件的 URL，SDK 会上报 \`AUDIO_MIXING_REASON_CAN_NOT_OPEN\`。

注：

* 如果调用该方法播放短音效文件，可能会播放失败。建议使用 playEffect 播放此类文件。
* 如果需要多次调用该方法，确保每次调用的时间间隔大于 500 毫秒。
* 在 Android 平台上，有以下注意事项：
  * 使用该方法时，需确保 Android 设备版本为 v4.2 或更高，API 版本为 v16 或更高。
  * 如果需要播放在线音乐文件，不建议使用重定向的 URL 地址。部分 Android 设备可能无法打开重定向的 URL。
  * 如果在模拟器上调用该方法，需确保音乐文件位于 /sdcard/ 目录下，且格式为 MP3。

<a id="api_irtcengine_startaudiomixing__timing" />

### 调用时机 [#调用时机-10]

你可以在加入频道前或后调用该方法。

<a id="api_irtcengine_startaudiomixing__related" />

### 相关回调 [#相关回调]

成功调用该方法会触发 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调。当音频混音文件播放结束时，SDK 会在本地客户端触发 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_STOPPED\` ）回调。

<a id="api_irtcengine_startaudiomixing__parameters" />

### 参数 [#参数-9]

#### \`filePath\` [#filepath]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你已通过调用 \`preloadEffect\` 将音效预加载到内存中，确保该参数的值与 \`preloadEffect\` 中的 \`filePath\` 参数一致。
  </CalloutDescription>
</CalloutContainer>

文件路径。支持以下类型：

* 以 content:// 开头的 URI 地址。
* 以 /assets/ 开头的路径。
* URL。
* 本地文件的绝对路径，需精确到文件名及扩展名。

支持的音频格式包括 MP3、AAC、M4A、MP4、WAV 和 3GP。

#### \`loopback\` [#loopback]

是否仅在本地客户端播放音乐文件：

* true：仅本地播放，只有本地用户能听到音乐。
* false：发布到远端，远端用户也能听到音乐。

#### \`cycle\` [#cycle]

音乐文件的播放次数：

* \\> 0：播放指定次数，例如 1 表示播放 1 次。
* -1：无限循环播放。

<a id="api_irtcengine_startaudiomixing__return_values" />

### 返回值 [#返回值-16]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无明确原因）。
  * -2：参数无效。
  * -3：SDK 未就绪：
    * 音频模块未启用。
    * 程序未完成。
    * RtcEngine 初始化失败。请重新初始化 RtcEngine。

### 所属接口类 [#所属接口类-16]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startaudiomixing2" />

## startAudioMixing \\[2/2] [#startaudiomixing-22]

开始播放音乐文件。

<a id="api_irtcengine_startaudiomixing2__prototype" />

\`\`\`java
public abstract int startAudioMixing(String filePath, boolean loopback, int cycle, int startPos);
\`\`\`

<a id="api_irtcengine_startaudiomixing2__detailed_desc" />

该方法支持播放以 \`content://\` 开头的 URI 文件。如果本地音乐文件不存在、SDK 不支持该文件格式，或无法访问音乐文件的 URL，SDK 会返回 \`AUDIO_MIXING_REASON_CAN_NOT_OPEN\`。

注：

* 如果你调用该方法播放短音效文件，可能会播放失败。声网建议使用 playEffect 方法播放此类文件。
* 如果你需要多次调用该方法，请确保每次调用之间的时间间隔大于 500 毫秒。
* 在 Android 平台上，请注意以下事项：
  * 设备需为 Android v4.2 或更高版本，且 API 版本为 v16 或更高。
  * 如果播放在线音乐文件，声网不建议使用重定向的 URL 地址，部分 Android 设备可能无法打开此类地址。
  * 如果在模拟器上调用该方法，请确保音乐文件位于 /sdcard/ 目录下，且格式为 MP3。

<a id="api_irtcengine_startaudiomixing2__timing" />

### 调用时机 [#调用时机-11]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_irtcengine_startaudiomixing2__related" />

### 相关回调 [#相关回调-1]

成功调用该方法会触发 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_PLAYING\` ）回调。当音频混音文件播放结束时，SDK 会在本地触发 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged) （\`AUDIO_MIXING_STATE_STOPPED\` ）回调。

<a id="api_irtcengine_startaudiomixing2__parameters" />

### 参数 [#参数-10]

#### \`filePath\` [#filepath-1]

文件路径。路径需精确到文件名和后缀名。支持 URL 地址、绝对路径或以 \`/assets/\` 开头的路径。使用绝对路径访问本地文件可能会遇到权限问题，建议使用 URI 地址，例如： \`content://com.android.providers.media.documents/document/audio%3A14441\`。

#### \`loopback\` [#loopback-1]

是否仅在本地播放音乐文件：

* true：仅本地播放，只有本地用户能听到音乐。
* false：将音乐发布到远端，远端用户也能听到音乐。

#### \`cycle\` [#cycle-1]

音乐文件的播放次数：

* \\> 0：播放指定次数，例如 1 表示播放 1 次。
* -1：无限循环播放。

#### \`startPos\` [#startpos]

音乐文件的播放起始位置（单位：毫秒）。

<a id="api_irtcengine_startaudiomixing2__return_values" />

### 返回值 [#返回值-17]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无明确原因）。
  * -2：参数无效。
  * -3：SDK 未就绪：
    * 音频模块未启用。
    * 程序未完成。
    * RtcEngine 初始化失败，请重新初始化 RtcEngine。

### 所属接口类 [#所属接口类-17]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stopaudiomixing" />

## stopAudioMixing [#stopaudiomixing]

停止播放音乐文件。

<a id="api_irtcengine_stopaudiomixing__prototype" />

\`\`\`java
public abstract int stopAudioMixing();
\`\`\`

<a id="api_irtcengine_stopaudiomixing__detailed_desc" />

调用 \`startAudioMixing\` 播放音乐文件后，可以调用该方法停止播放。如果只需要暂停播放，请调用 [pauseAudioMixing](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_pauseaudiomixing)。

<a id="api_irtcengine_stopaudiomixing__timing" />

### 调用时机 [#调用时机-12]

请在加入频道后调用此方法。

<a id="api_irtcengine_stopaudiomixing__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-18]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onaudiomixingfinished" />

## onAudioMixingFinished [#onaudiomixingfinished]

本地音乐文件播放结束回调。

<a id="callback_irtcengineeventhandler_onaudiomixingfinished__prototype" />

\`\`\`java
public void onAudioMixingFinished()
\`\`\`

<a id="callback_irtcengineeventhandler_onaudiomixingfinished__detailed_desc" />

#### \`废弃\` [#废弃-1]

该方法已废弃，请改用 [onAudioMixingStateChanged](/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged)。

调用 \`startAudioMixing\` 播放本地音乐文件后，播放结束时会触发该回调。如果调用 \`startAudioMixing\` 失败，会返回错误码 \`WARN_AUDIO_MIXING_OPEN_ERROR\`。

<a id="callback_irtcengineeventhandler_onaudiomixingfinished__timing" />

### 触发时机 [#触发时机]

该回调在本地音乐文件播放结束时被触发。

### 所属接口类 [#所属接口类-19]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onaudiomixingpositionchanged" />

## onAudioMixingPositionChanged [#onaudiomixingpositionchanged]

音乐文件播放进度回调。

<a id="callback_irtcengineeventhandler_onaudiomixingpositionchanged__prototype" />

\`\`\`java
public void onAudioMixingPositionChanged(long position)
\`\`\`

<a id="callback_irtcengineeventhandler_onaudiomixingpositionchanged__detailed_desc" />

调用 \`startAudioMixing\` 方法播放音乐文件后，SDK 每两秒触发一次该回调，报告音乐文件的播放进度。

<a id="callback_irtcengineeventhandler_onaudiomixingpositionchanged__timing" />

### 触发时机 [#触发时机-1]

该回调在调用 \`startAudioMixing\` 播放音乐文件后，每两秒触发一次。

<a id="callback_irtcengineeventhandler_onaudiomixingpositionchanged__parameters" />

### 参数 [#参数-11]

#### \`position\` [#position]

播放进度，单位为毫秒。

### 所属接口类 [#所属接口类-20]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onaudiomixingstatechanged" />

## onAudioMixingStateChanged [#onaudiomixingstatechanged]

音乐文件播放状态变化回调。

<a id="callback_irtcengineeventhandler_onaudiomixingstatechanged__prototype" />

\`\`\`java
public void onAudioMixingStateChanged(int state, int reason)
\`\`\`

<a id="callback_irtcengineeventhandler_onaudiomixingstatechanged__detailed_desc" />

该回调报告当前音乐文件的播放状态和错误码。

<a id="callback_irtcengineeventhandler_onaudiomixingstatechanged__timing" />

### 触发时机 [#触发时机-2]

该回调在音乐文件播放状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onaudiomixingstatechanged__parameters" />

### 参数 [#参数-12]

#### \`state\` [#state]

音乐文件的播放状态：

* AUDIO\\_MIXING\\_STATE\\_PLAYING (710)：音乐文件正在播放。
* AUDIO\\_MIXING\\_STATE\\_PAUSED (711)：音乐文件暂停播放。
* AUDIO\\_MIXING\\_STATE\\_STOPPED (713)：音乐文件停止播放。
* AUDIO\\_MIXING\\_STATE\\_FAILED (714)：播放音乐文件时出现异常，SDK 会通过 reason 参数返回具体原因。

#### \`reason\` [#reason]

错误码：

* AUDIO\\_MIXING\\_REASON\\_OK (0)：没有错误。
* AUDIO\\_MIXING\\_REASON\\_CAN\\_NOT\\_OPEN (701)：SDK 无法打开音乐文件。
* AUDIO\\_MIXING\\_REASON\\_TOO\\_FREQUENT\\_CALL (702)：SDK 打开音乐文件过于频繁。
* AUDIO\\_MIXING\\_REASON\\_INTERRUPTED\\_EOF (703)：音乐文件播放被中断。
* AUDIO\\_MIXING\\_REASON\\_ONE\\_LOOP\\_COMPLETED (721)：音乐文件完成一次循环播放。
* AUDIO\\_MIXING\\_REASON\\_ALL\\_LOOPS\\_COMPLETED (723)：音乐文件完成所有循环播放。
* AUDIO\\_MIXING\\_REASON\\_STOPPED\\_BY\\_USER (724)：通过调用 stopAudioMixing 停止音乐文件播放。

### 所属接口类 [#所属接口类-21]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "adjustaudiomixingplayoutvolume",
    content: "调节本地播放的混音音量。"
  }, {
    heading: "adjustaudiomixingplayoutvolume",
    content: "你需要在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用此方法。"
  }, {
    heading: "调用时机",
    content: "你需要在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用此方法。"
  }, {
    heading: "volume",
    content: "本地播放的混音音量，取值范围为 0 到 100。（默认值为 100）"
  }, {
    heading: "volume",
    content: "0：静音。"
  }, {
    heading: "volume",
    content: "100：原始音量。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "adjustaudiomixingpublishvolume",
    content: "调节用于发布的混音音量。"
  }, {
    heading: "adjustaudiomixingpublishvolume",
    content: "该方法用于调节发送给其他用户的混音音量。"
  }, {
    heading: "调用时机-1",
    content: "请在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用该方法。"
  }, {
    heading: "volume-1",
    content: "用于发布的混音音量。取值范围为 0 到 100，默认值为 100，表示原始音量。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "adjustaudiomixingvolume",
    content: "调节混音时的音量。"
  }, {
    heading: "adjustaudiomixingvolume",
    content: "该方法用于在本地客户端和远端客户端上调节混音音量。"
  }, {
    heading: "adjustaudiomixingvolume",
    content: "adjustAudioMixingVolume 不会影响通过 `playEffect` 方法设置的音效文件的音量。"
  }, {
    heading: "调用时机-2",
    content: "请在调用 `startAudioMixing` 方法之后调用该方法。"
  }, {
    heading: "volume-2",
    content: "混音音量，取值范围为 0 到 100。（默认值为 100，表示原始音量。）"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "getaudiomixingcurrentposition",
    content: "获取当前混音的播放位置（毫秒）。"
  }, {
    heading: "getaudiomixingcurrentposition",
    content: "注："
  }, {
    heading: "getaudiomixingcurrentposition",
    content: "你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged （AUDIO\\_MIXING\\_STATE\\_PLAYING ）回调后调用此方法。"
  }, {
    heading: "getaudiomixingcurrentposition",
    content: "如果需要多次调用 getAudioMixingCurrentPosition，请确保两次调用之间的时间间隔大于 500 毫秒。"
  }, {
    heading: "返回值-3",
    content: "方法调用成功，返回当前混音的播放位置（毫秒）。0 表示当前音乐文件尚未开始播放。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngine"
  }, {
    heading: "getaudiomixingduration",
    content: "获取音频文件的混音时长（毫秒）。"
  }, {
    heading: "调用时机-3",
    content: "请在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用该方法。"
  }, {
    heading: "返回值-4",
    content: "方法调用成功，返回混音的时长（毫秒）。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "getaudiomixingplayoutvolume",
    content: "获取本地播放的混音音量。"
  }, {
    heading: "getaudiomixingplayoutvolume",
    content: "你可以调用该方法获取混音音频文件的本地播放音量，有助于排查与音量相关的问题。"
  }, {
    heading: "调用时机-4",
    content: "在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用此方法。"
  }, {
    heading: "返回值-5",
    content: "方法调用成功，返回混音音量，取值范围为 \\[0, 100]。"
  }, {
    heading: "返回值-5",
    content: "方法调用失败，返回小于 0 的错误码。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }, {
    heading: "getaudiomixingpublishvolume",
    content: "获取用于发布的混音音量。"
  }, {
    heading: "getaudiomixingpublishvolume",
    content: "该方法有助于排查音频音量相关的问题。"
  }, {
    heading: "getaudiomixingpublishvolume",
    content: "你需要在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用该方法。"
  }, {
    heading: "返回值-6",
    content: "≥ 0：方法调用成功，返回混音音量，取值范围为 \\[0, 100]。"
  }, {
    heading: "返回值-6",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngine"
  }, {
    heading: "getaudiotrackcount",
    content: "获取当前音乐文件的音轨索引。"
  }, {
    heading: "getaudiotrackcount",
    content: "你需要在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用此方法。"
  }, {
    heading: "返回值-7",
    content: "方法调用成功，返回音轨的索引。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-7",
    content: "RtcEngine"
  }, {
    heading: "pauseaudiomixing",
    content: "暂停播放和混音的音乐文件。"
  }, {
    heading: "pauseaudiomixing",
    content: "调用 `startAudioMixing` 播放音乐文件后，可以调用该方法暂停播放。如果需要停止播放，请调用 stopAudioMixing。"
  }, {
    heading: "调用时机-5",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "返回值-8",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-8",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-8",
    content: "RtcEngine"
  }, {
    heading: "resumeaudiomixing",
    content: "恢复播放和混音的音乐文件。"
  }, {
    heading: "resumeaudiomixing",
    content: "调用 pauseAudioMixing 后，可以调用 resumeAudioMixing 恢复播放。"
  }, {
    heading: "调用时机-6",
    content: "请在加入频道后调用此方法。"
  }, {
    heading: "返回值-9",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-9",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-9",
    content: "RtcEngine"
  }, {
    heading: "selectaudiotrack",
    content: "选择播放过程中使用的音轨。"
  }, {
    heading: "selectaudiotrack",
    content: "获取音频文件的音轨索引后，可以调用该方法指定任意音轨进行播放。例如，如果一个多音轨文件的不同音轨存储了不同语言的歌曲，可以调用该方法设置播放语言。"
  }, {
    heading: "selectaudiotrack",
    content: "注："
  }, {
    heading: "selectaudiotrack",
    content: "支持的音频文件格式详见声网 RTC SDK 支持哪些格式的音频文件。"
  }, {
    heading: "selectaudiotrack",
    content: "你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged （AUDIO\\_MIXING\\_STATE\\_PLAYING ）回调后再调用该方法。"
  }, {
    heading: "audioindex",
    content: "你想要指定的音轨索引。该值应大于 0 且小于 getAudioTrackCount 返回的值。"
  }, {
    heading: "返回值-10",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-10",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-10",
    content: "RtcEngine"
  }, {
    heading: "selectmultiaudiotrack",
    content: "选择要在本地设备播放和发布到频道的音轨。"
  }, {
    heading: "selectmultiaudiotrack",
    content: "在调用该方法前，你需要通过 openWithMediaSource 打开媒体文件，并在 MediaPlayerSource 中将 `enableMultiAudioTrack` 设置为 true。"
  }, {
    heading: "适用场景",
    content: "该方法适用于例如 KTV 场景：主持人可以选择在本地播放原唱音轨，同时将伴奏音轨发布到频道。"
  }, {
    heading: "playouttrackindex",
    content: "用于本地播放的音轨索引。你可以通过 getStreamInfo 获取该索引。"
  }, {
    heading: "publishtrackindex",
    content: "要发布到频道中的音轨索引。你可以通过 getStreamInfo 获取该索引。"
  }, {
    heading: "返回值-11",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-11",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-11",
    content: "IMediaPlayer"
  }, {
    heading: "setaudiomixingdualmonomode",
    content: "设置当前音频文件的声道模式。"
  }, {
    heading: "setaudiomixingdualmonomode",
    content: "你可以根据需要将音频文件的声道模式设置为原始模式、左声道模式、右声道模式或混合声道模式。例如，在 KTV 场景中，音乐文件的左声道存储伴奏，右声道存储原唱人声。你可以根据实际需求进行设置："
  }, {
    heading: "setaudiomixingdualmonomode",
    content: "如果只想听伴奏，使用该方法将音频文件的声道模式设置为左声道模式。"
  }, {
    heading: "setaudiomixingdualmonomode",
    content: "如果需要同时听到伴奏和原唱人声，调用该方法将声道模式设置为混合模式。"
  }, {
    heading: "setaudiomixingdualmonomode",
    content: "该方法仅适用于立体声音频文件。"
  }, {
    heading: "适用场景-1",
    content: "在 KTV 场景中，音乐文件的左声道存储伴奏，右声道存储原唱人声。你可以根据实际需求进行设置："
  }, {
    heading: "适用场景-1",
    content: "如果你只想听到伴奏，调用该方法将声道模式设置为左声道模式。"
  }, {
    heading: "适用场景-1",
    content: "如果你需要同时听到伴奏和原唱人声，调用该方法将声道模式设置为混合模式。"
  }, {
    heading: "调用时机-7",
    content: "在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用该方法。"
  }, {
    heading: "mode",
    content: "声道模式。详见 AudioMixingDualMonoMode。"
  }, {
    heading: "返回值-12",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-12",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-12",
    content: "RtcEngine"
  }, {
    heading: "setaudiomixingpitch",
    content: "设置本地音乐文件的音调。"
  }, {
    heading: "setaudiomixingpitch",
    content: "你需要在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用该方法。"
  }, {
    heading: "调用时机-8",
    content: "你需要在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调后调用该方法。"
  }, {
    heading: "pitch",
    content: "按半音阶设置本地音乐文件的音调（默认值为 0）。取值范围为 -12 到 12，相邻数值之间的音调差为一个半音。该参数的绝对值越大，音调变化越明显。"
  }, {
    heading: "返回值-13",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-13",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-13",
    content: "RtcEngine"
  }, {
    heading: "setaudiomixingplaybackspeed",
    content: "设置当前音频文件的播放速度。"
  }, {
    heading: "setaudiomixingplaybackspeed",
    content: "请确保在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged 回调，报告状态为 `AUDIO_MIXING_STATE_PLAYING` 后再调用此方法。"
  }, {
    heading: "speed",
    content: "播放速度。建议设置为 50 到 400 之间的值，定义如下："
  }, {
    heading: "speed",
    content: "50：原始速度的一半。"
  }, {
    heading: "speed",
    content: "100：原始速度。"
  }, {
    heading: "speed",
    content: "400：原始速度的 4 倍。"
  }, {
    heading: "返回值-14",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-14",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-14",
    content: "RtcEngine"
  }, {
    heading: "setaudiomixingposition",
    content: "设置混音的播放位置。"
  }, {
    heading: "调用时机-9",
    content: "请在调用 `startAudioMixing` 并收到 onAudioMixingStateChanged 回调后调用此方法。"
  }, {
    heading: "pos",
    content: "播放位置，单位为毫秒。"
  }, {
    heading: "返回值-15",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-15",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-15",
    content: "RtcEngine"
  }, {
    heading: "startaudiomixing-12",
    content: "开始播放音乐文件。"
  }, {
    heading: "废弃",
    content: "该方法已废弃。请改用 startAudioMixing \\[2/2]。"
  }, {
    heading: "废弃",
    content: "该方法支持播放以 `content://` 开头的 URI 文件。支持的音频文件格式详见声网 RTC SDK 支持的音频文件格式。如果本地音乐文件不存在、SDK 不支持该文件格式，或无法访问音乐文件的 URL，SDK 会上报 `AUDIO_MIXING_REASON_CAN_NOT_OPEN`。"
  }, {
    heading: "废弃",
    content: "注："
  }, {
    heading: "废弃",
    content: "如果调用该方法播放短音效文件，可能会播放失败。建议使用 playEffect 播放此类文件。"
  }, {
    heading: "废弃",
    content: "如果需要多次调用该方法，确保每次调用的时间间隔大于 500 毫秒。"
  }, {
    heading: "废弃",
    content: "在 Android 平台上，有以下注意事项："
  }, {
    heading: "废弃",
    content: "使用该方法时，需确保 Android 设备版本为 v4.2 或更高，API 版本为 v16 或更高。"
  }, {
    heading: "废弃",
    content: "如果需要播放在线音乐文件，不建议使用重定向的 URL 地址。部分 Android 设备可能无法打开重定向的 URL。"
  }, {
    heading: "废弃",
    content: "如果在模拟器上调用该方法，需确保音乐文件位于 /sdcard/ 目录下，且格式为 MP3。"
  }, {
    heading: "调用时机-10",
    content: "你可以在加入频道前或后调用该方法。"
  }, {
    heading: "相关回调",
    content: "成功调用该方法会触发 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调。当音频混音文件播放结束时，SDK 会在本地客户端触发 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_STOPPED` ）回调。"
  }, {
    heading: "filepath",
    content: "如果你已通过调用 `preloadEffect` 将音效预加载到内存中，确保该参数的值与 `preloadEffect` 中的 `filePath` 参数一致。"
  }, {
    heading: "filepath",
    content: "文件路径。支持以下类型："
  }, {
    heading: "filepath",
    content: "以 content:// 开头的 URI 地址。"
  }, {
    heading: "filepath",
    content: "以 /assets/ 开头的路径。"
  }, {
    heading: "filepath",
    content: "URL。"
  }, {
    heading: "filepath",
    content: "本地文件的绝对路径，需精确到文件名及扩展名。"
  }, {
    heading: "filepath",
    content: "支持的音频格式包括 MP3、AAC、M4A、MP4、WAV 和 3GP。"
  }, {
    heading: "loopback",
    content: "是否仅在本地客户端播放音乐文件："
  }, {
    heading: "loopback",
    content: "true：仅本地播放，只有本地用户能听到音乐。"
  }, {
    heading: "loopback",
    content: "false：发布到远端，远端用户也能听到音乐。"
  }, {
    heading: "cycle",
    content: "音乐文件的播放次数："
  }, {
    heading: "cycle",
    content: "\\> 0：播放指定次数，例如 1 表示播放 1 次。"
  }, {
    heading: "cycle",
    content: "-1：无限循环播放。"
  }, {
    heading: "返回值-16",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-16",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-16",
    content: "-1：发生通用错误（无明确原因）。"
  }, {
    heading: "返回值-16",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-16",
    content: "-3：SDK 未就绪："
  }, {
    heading: "返回值-16",
    content: "音频模块未启用。"
  }, {
    heading: "返回值-16",
    content: "程序未完成。"
  }, {
    heading: "返回值-16",
    content: "RtcEngine 初始化失败。请重新初始化 RtcEngine。"
  }, {
    heading: "所属接口类-16",
    content: "RtcEngine"
  }, {
    heading: "startaudiomixing-22",
    content: "开始播放音乐文件。"
  }, {
    heading: "startaudiomixing-22",
    content: "该方法支持播放以 `content://` 开头的 URI 文件。如果本地音乐文件不存在、SDK 不支持该文件格式，或无法访问音乐文件的 URL，SDK 会返回 `AUDIO_MIXING_REASON_CAN_NOT_OPEN`。"
  }, {
    heading: "startaudiomixing-22",
    content: "注："
  }, {
    heading: "startaudiomixing-22",
    content: "如果你调用该方法播放短音效文件，可能会播放失败。声网建议使用 playEffect 方法播放此类文件。"
  }, {
    heading: "startaudiomixing-22",
    content: "如果你需要多次调用该方法，请确保每次调用之间的时间间隔大于 500 毫秒。"
  }, {
    heading: "startaudiomixing-22",
    content: "在 Android 平台上，请注意以下事项："
  }, {
    heading: "startaudiomixing-22",
    content: "设备需为 Android v4.2 或更高版本，且 API 版本为 v16 或更高。"
  }, {
    heading: "startaudiomixing-22",
    content: "如果播放在线音乐文件，声网不建议使用重定向的 URL 地址，部分 Android 设备可能无法打开此类地址。"
  }, {
    heading: "startaudiomixing-22",
    content: "如果在模拟器上调用该方法，请确保音乐文件位于 /sdcard/ 目录下，且格式为 MP3。"
  }, {
    heading: "调用时机-11",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "相关回调-1",
    content: "成功调用该方法会触发 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_PLAYING` ）回调。当音频混音文件播放结束时，SDK 会在本地触发 onAudioMixingStateChanged （`AUDIO_MIXING_STATE_STOPPED` ）回调。"
  }, {
    heading: "filepath-1",
    content: "文件路径。路径需精确到文件名和后缀名。支持 URL 地址、绝对路径或以 `/assets/` 开头的路径。使用绝对路径访问本地文件可能会遇到权限问题，建议使用 URI 地址，例如： `content://com.android.providers.media.documents/document/audio%3A14441`。"
  }, {
    heading: "loopback-1",
    content: "是否仅在本地播放音乐文件："
  }, {
    heading: "loopback-1",
    content: "true：仅本地播放，只有本地用户能听到音乐。"
  }, {
    heading: "loopback-1",
    content: "false：将音乐发布到远端，远端用户也能听到音乐。"
  }, {
    heading: "cycle-1",
    content: "音乐文件的播放次数："
  }, {
    heading: "cycle-1",
    content: "\\> 0：播放指定次数，例如 1 表示播放 1 次。"
  }, {
    heading: "cycle-1",
    content: "-1：无限循环播放。"
  }, {
    heading: "startpos",
    content: "音乐文件的播放起始位置（单位：毫秒）。"
  }, {
    heading: "返回值-17",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-17",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-17",
    content: "-1：发生通用错误（无明确原因）。"
  }, {
    heading: "返回值-17",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-17",
    content: "-3：SDK 未就绪："
  }, {
    heading: "返回值-17",
    content: "音频模块未启用。"
  }, {
    heading: "返回值-17",
    content: "程序未完成。"
  }, {
    heading: "返回值-17",
    content: "RtcEngine 初始化失败，请重新初始化 RtcEngine。"
  }, {
    heading: "所属接口类-17",
    content: "RtcEngine"
  }, {
    heading: "stopaudiomixing",
    content: "停止播放音乐文件。"
  }, {
    heading: "stopaudiomixing",
    content: "调用 `startAudioMixing` 播放音乐文件后，可以调用该方法停止播放。如果只需要暂停播放，请调用 pauseAudioMixing。"
  }, {
    heading: "调用时机-12",
    content: "请在加入频道后调用此方法。"
  }, {
    heading: "返回值-18",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-18",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-18",
    content: "RtcEngine"
  }, {
    heading: "onaudiomixingfinished",
    content: "本地音乐文件播放结束回调。"
  }, {
    heading: "废弃-1",
    content: "该方法已废弃，请改用 onAudioMixingStateChanged。"
  }, {
    heading: "废弃-1",
    content: "调用 `startAudioMixing` 播放本地音乐文件后，播放结束时会触发该回调。如果调用 `startAudioMixing` 失败，会返回错误码 `WARN_AUDIO_MIXING_OPEN_ERROR`。"
  }, {
    heading: "触发时机",
    content: "该回调在本地音乐文件播放结束时被触发。"
  }, {
    heading: "所属接口类-19",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onaudiomixingpositionchanged",
    content: "音乐文件播放进度回调。"
  }, {
    heading: "onaudiomixingpositionchanged",
    content: "调用 `startAudioMixing` 方法播放音乐文件后，SDK 每两秒触发一次该回调，报告音乐文件的播放进度。"
  }, {
    heading: "触发时机-1",
    content: "该回调在调用 `startAudioMixing` 播放音乐文件后，每两秒触发一次。"
  }, {
    heading: "position",
    content: "播放进度，单位为毫秒。"
  }, {
    heading: "所属接口类-20",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onaudiomixingstatechanged",
    content: "音乐文件播放状态变化回调。"
  }, {
    heading: "onaudiomixingstatechanged",
    content: "该回调报告当前音乐文件的播放状态和错误码。"
  }, {
    heading: "触发时机-2",
    content: "该回调在音乐文件播放状态发生变化时被触发。"
  }, {
    heading: "state",
    content: "音乐文件的播放状态："
  }, {
    heading: "state",
    content: "AUDIO\\_MIXING\\_STATE\\_PLAYING (710)：音乐文件正在播放。"
  }, {
    heading: "state",
    content: "AUDIO\\_MIXING\\_STATE\\_PAUSED (711)：音乐文件暂停播放。"
  }, {
    heading: "state",
    content: "AUDIO\\_MIXING\\_STATE\\_STOPPED (713)：音乐文件停止播放。"
  }, {
    heading: "state",
    content: "AUDIO\\_MIXING\\_STATE\\_FAILED (714)：播放音乐文件时出现异常，SDK 会通过 reason 参数返回具体原因。"
  }, {
    heading: "reason",
    content: "错误码："
  }, {
    heading: "reason",
    content: "AUDIO\\_MIXING\\_REASON\\_OK (0)：没有错误。"
  }, {
    heading: "reason",
    content: "AUDIO\\_MIXING\\_REASON\\_CAN\\_NOT\\_OPEN (701)：SDK 无法打开音乐文件。"
  }, {
    heading: "reason",
    content: "AUDIO\\_MIXING\\_REASON\\_TOO\\_FREQUENT\\_CALL (702)：SDK 打开音乐文件过于频繁。"
  }, {
    heading: "reason",
    content: "AUDIO\\_MIXING\\_REASON\\_INTERRUPTED\\_EOF (703)：音乐文件播放被中断。"
  }, {
    heading: "reason",
    content: "AUDIO\\_MIXING\\_REASON\\_ONE\\_LOOP\\_COMPLETED (721)：音乐文件完成一次循环播放。"
  }, {
    heading: "reason",
    content: "AUDIO\\_MIXING\\_REASON\\_ALL\\_LOOPS\\_COMPLETED (723)：音乐文件完成所有循环播放。"
  }, {
    heading: "reason",
    content: "AUDIO\\_MIXING\\_REASON\\_STOPPED\\_BY\\_USER (724)：通过调用 stopAudioMixing 停止音乐文件播放。"
  }, {
    heading: "所属接口类-21",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "adjustaudiomixingplayoutvolume",
    content: "adjustAudioMixingPlayoutVolume"
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
    id: "adjustaudiomixingpublishvolume",
    content: "adjustAudioMixingPublishVolume"
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
    id: "adjustaudiomixingvolume",
    content: "adjustAudioMixingVolume"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "volume-2",
    content: "`volume`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "getaudiomixingcurrentposition",
    content: "getAudioMixingCurrentPosition"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "getaudiomixingduration",
    content: "getAudioMixingDuration"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "getaudiomixingplayoutvolume",
    content: "getAudioMixingPlayoutVolume"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "getaudiomixingpublishvolume",
    content: "getAudioMixingPublishVolume"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "getaudiotrackcount",
    content: "getAudioTrackCount"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "pauseaudiomixing",
    content: "pauseAudioMixing"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "resumeaudiomixing",
    content: "resumeAudioMixing"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "selectaudiotrack",
    content: "selectAudioTrack"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "audioindex",
    content: "`audioIndex`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "selectmultiaudiotrack",
    content: "selectMultiAudioTrack"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "playouttrackindex",
    content: "`playoutTrackIndex`"
  }, {
    id: "publishtrackindex",
    content: "`publishTrackIndex`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "setaudiomixingdualmonomode",
    content: "setAudioMixingDualMonoMode"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "setaudiomixingpitch",
    content: "setAudioMixingPitch"
  }, {
    id: "调用时机-8",
    content: "调用时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "pitch",
    content: "`pitch`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "setaudiomixingplaybackspeed",
    content: "setAudioMixingPlaybackSpeed"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "speed",
    content: "`speed`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "setaudiomixingposition",
    content: "setAudioMixingPosition"
  }, {
    id: "调用时机-9",
    content: "调用时机"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "pos",
    content: "`pos`"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "startaudiomixing-12",
    content: "startAudioMixing [1/2]"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "调用时机-10",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "filepath",
    content: "`filePath`"
  }, {
    id: "loopback",
    content: "`loopback`"
  }, {
    id: "cycle",
    content: "`cycle`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "startaudiomixing-22",
    content: "startAudioMixing [2/2]"
  }, {
    id: "调用时机-11",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "filepath-1",
    content: "`filePath`"
  }, {
    id: "loopback-1",
    content: "`loopback`"
  }, {
    id: "cycle-1",
    content: "`cycle`"
  }, {
    id: "startpos",
    content: "`startPos`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "stopaudiomixing",
    content: "stopAudioMixing"
  }, {
    id: "调用时机-12",
    content: "调用时机"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "onaudiomixingfinished",
    content: "onAudioMixingFinished"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "onaudiomixingpositionchanged",
    content: "onAudioMixingPositionChanged"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "position",
    content: "`position`"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "onaudiomixingstatechanged",
    content: "onAudioMixingStateChanged"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#adjustaudiomixingplayoutvolume",
  title: _jsx(_Fragment, {
    children: "adjustAudioMixingPlayoutVolume"
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
  url: "#adjustaudiomixingpublishvolume",
  title: _jsx(_Fragment, {
    children: "adjustAudioMixingPublishVolume"
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
  url: "#adjustaudiomixingvolume",
  title: _jsx(_Fragment, {
    children: "adjustAudioMixingVolume"
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
  url: "#volume-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "volume"
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
  url: "#getaudiomixingcurrentposition",
  title: _jsx(_Fragment, {
    children: "getAudioMixingCurrentPosition"
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
  url: "#getaudiomixingduration",
  title: _jsx(_Fragment, {
    children: "getAudioMixingDuration"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
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
  url: "#getaudiomixingplayoutvolume",
  title: _jsx(_Fragment, {
    children: "getAudioMixingPlayoutVolume"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#getaudiomixingpublishvolume",
  title: _jsx(_Fragment, {
    children: "getAudioMixingPublishVolume"
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
  url: "#getaudiotrackcount",
  title: _jsx(_Fragment, {
    children: "getAudioTrackCount"
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
  url: "#pauseaudiomixing",
  title: _jsx(_Fragment, {
    children: "pauseAudioMixing"
  })
}, {
  depth: 3,
  url: "#调用时机-5",
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
  url: "#resumeaudiomixing",
  title: _jsx(_Fragment, {
    children: "resumeAudioMixing"
  })
}, {
  depth: 3,
  url: "#调用时机-6",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#selectaudiotrack",
  title: _jsx(_Fragment, {
    children: "selectAudioTrack"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#audioindex",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioIndex"
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
  url: "#selectmultiaudiotrack",
  title: _jsx(_Fragment, {
    children: "selectMultiAudioTrack"
  })
}, {
  depth: 3,
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#playouttrackindex",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "playoutTrackIndex"
    })
  })
}, {
  depth: 4,
  url: "#publishtrackindex",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishTrackIndex"
    })
  })
}, {
  depth: 3,
  url: "#返回值-11",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-11",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setaudiomixingdualmonomode",
  title: _jsx(_Fragment, {
    children: "setAudioMixingDualMonoMode"
  })
}, {
  depth: 3,
  url: "#适用场景-1",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-7",
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
  url: "#mode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mode"
    })
  })
}, {
  depth: 3,
  url: "#返回值-12",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-12",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setaudiomixingpitch",
  title: _jsx(_Fragment, {
    children: "setAudioMixingPitch"
  })
}, {
  depth: 3,
  url: "#调用时机-8",
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
  url: "#pitch",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pitch"
    })
  })
}, {
  depth: 3,
  url: "#返回值-13",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-13",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setaudiomixingplaybackspeed",
  title: _jsx(_Fragment, {
    children: "setAudioMixingPlaybackSpeed"
  })
}, {
  depth: 3,
  url: "#参数-7",
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
  url: "#返回值-14",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-14",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setaudiomixingposition",
  title: _jsx(_Fragment, {
    children: "setAudioMixingPosition"
  })
}, {
  depth: 3,
  url: "#调用时机-9",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#pos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pos"
    })
  })
}, {
  depth: 3,
  url: "#返回值-15",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-15",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#startaudiomixing-12",
  title: _jsx(_Fragment, {
    children: "startAudioMixing [1/2]"
  })
}, {
  depth: 4,
  url: "#废弃",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-10",
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
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#filepath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 4,
  url: "#loopback",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loopback"
    })
  })
}, {
  depth: 4,
  url: "#cycle",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cycle"
    })
  })
}, {
  depth: 3,
  url: "#返回值-16",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-16",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#startaudiomixing-22",
  title: _jsx(_Fragment, {
    children: "startAudioMixing [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-11",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-1",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#filepath-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 4,
  url: "#loopback-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loopback"
    })
  })
}, {
  depth: 4,
  url: "#cycle-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cycle"
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
  url: "#返回值-17",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-17",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#stopaudiomixing",
  title: _jsx(_Fragment, {
    children: "stopAudioMixing"
  })
}, {
  depth: 3,
  url: "#调用时机-12",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#返回值-18",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-18",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onaudiomixingfinished",
  title: _jsx(_Fragment, {
    children: "onAudioMixingFinished"
  })
}, {
  depth: 4,
  url: "#废弃-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#所属接口类-19",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onaudiomixingpositionchanged",
  title: _jsx(_Fragment, {
    children: "onAudioMixingPositionChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-11",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#position",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "position"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-20",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onaudiomixingstatechanged",
  title: _jsx(_Fragment, {
    children: "onAudioMixingStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-2",
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
  url: "#所属接口类-21",
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
      id: "toc_audio_mixing"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingplayoutvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustaudiomixingplayoutvolume",
      children: "adjustAudioMixingPlayoutVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节本地播放的混音音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingplayoutvolume__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " adjustAudioMixingPlayoutVolume"
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
      id: "api_irtcengine_adjustaudiomixingplayoutvolume__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingplayoutvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingplayoutvolume__parameters"
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
      children: "本地播放的混音音量，取值范围为 0 到 100。（默认值为 100）"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：静音。"
      }), `
`, _jsx(_components.li, {
        children: "100：原始音量。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingplayoutvolume__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingpublishvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustaudiomixingpublishvolume",
      children: "adjustAudioMixingPublishVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节用于发布的混音音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingpublishvolume__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " adjustAudioMixingPublishVolume"
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
      id: "api_irtcengine_adjustaudiomixingpublishvolume__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于调节发送给其他用户的混音音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingpublishvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingpublishvolume__parameters"
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
      children: "用于发布的混音音量。取值范围为 0 到 100，默认值为 100，表示原始音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingpublishvolume__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustaudiomixingvolume",
      children: "adjustAudioMixingVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节混音时的音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingvolume__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " adjustAudioMixingVolume"
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
      id: "api_irtcengine_adjustaudiomixingvolume__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于在本地客户端和远端客户端上调节混音音量。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_adjustaudiomixingvolume",
            children: "adjustAudioMixingVolume"
          }), " 不会影响通过 ", _jsx(_components.code, {
            children: "playEffect"
          }), " 方法设置的音效文件的音量。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 方法之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingvolume__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "volume-2",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "混音音量，取值范围为 0 到 100。（默认值为 100，表示原始音量。）"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustaudiomixingvolume__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingcurrentposition"
    }), `
`, _jsx(_components.h2, {
      id: "getaudiomixingcurrentposition",
      children: "getAudioMixingCurrentPosition"
    }), `
`, _jsx(_components.p, {
      children: "获取当前混音的播放位置（毫秒）。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingcurrentposition__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " getAudioMixingCurrentPosition"
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
      id: "api_irtcengine_getaudiomixingcurrentposition__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged （AUDIO_MIXING_STATE_PLAYING ）回调后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果需要多次调用 getAudioMixingCurrentPosition，请确保两次调用之间的时间间隔大于 500 毫秒。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingcurrentposition__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回当前混音的播放位置（毫秒）。0 表示当前音乐文件尚未开始播放。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingduration"
    }), `
`, _jsx(_components.h2, {
      id: "getaudiomixingduration",
      children: "getAudioMixingDuration"
    }), `
`, _jsx(_components.p, {
      children: "获取音频文件的混音时长（毫秒）。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingduration__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " getAudioMixingDuration"
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
      id: "api_irtcengine_getaudiomixingduration__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingduration__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingduration__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回混音的时长（毫秒）。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingplayoutvolume"
    }), `
`, _jsx(_components.h2, {
      id: "getaudiomixingplayoutvolume",
      children: "getAudioMixingPlayoutVolume"
    }), `
`, _jsx(_components.p, {
      children: "获取本地播放的混音音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingplayoutvolume__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " getAudioMixingPlayoutVolume"
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
      id: "api_irtcengine_getaudiomixingplayoutvolume__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法获取混音音频文件的本地播放音量，有助于排查与音量相关的问题。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingplayoutvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingplayoutvolume__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回混音音量，取值范围为 [0, 100]。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回小于 0 的错误码。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingpublishvolume"
    }), `
`, _jsx(_components.h2, {
      id: "getaudiomixingpublishvolume",
      children: "getAudioMixingPublishVolume"
    }), `
`, _jsx(_components.p, {
      children: "获取用于发布的混音音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingpublishvolume__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " getAudioMixingPublishVolume"
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
      id: "api_irtcengine_getaudiomixingpublishvolume__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法有助于排查音频音量相关的问题。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你需要在调用 ", _jsx(_components.code, {
            children: "startAudioMixing"
          }), " 并收到 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
            children: "onAudioMixingStateChanged"
          }), " （", _jsx(_components.code, {
            children: "AUDIO_MIXING_STATE_PLAYING"
          }), " ）回调后调用该方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiomixingpublishvolume__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "≥ 0：方法调用成功，返回混音音量，取值范围为 [0, 100]。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiotrackcount"
    }), `
`, _jsx(_components.h2, {
      id: "getaudiotrackcount",
      children: "getAudioTrackCount"
    }), `
`, _jsx(_components.p, {
      children: "获取当前音乐文件的音轨索引。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiotrackcount__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " getAudioTrackCount"
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
      id: "api_irtcengine_getaudiotrackcount__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你需要在调用 ", _jsx(_components.code, {
            children: "startAudioMixing"
          }), " 并收到 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
            children: "onAudioMixingStateChanged"
          }), " （", _jsx(_components.code, {
            children: "AUDIO_MIXING_STATE_PLAYING"
          }), " ）回调后调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudiotrackcount__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-7",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回音轨的索引。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseaudiomixing"
    }), `
`, _jsx(_components.h2, {
      id: "pauseaudiomixing",
      children: "pauseAudioMixing"
    }), `
`, _jsx(_components.p, {
      children: "暂停播放和混音的音乐文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseaudiomixing__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " pauseAudioMixing"
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
      id: "api_irtcengine_pauseaudiomixing__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 播放音乐文件后，可以调用该方法暂停播放。如果需要停止播放，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_stopaudiomixing",
        children: "stopAudioMixing"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseaudiomixing__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseaudiomixing__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeaudiomixing"
    }), `
`, _jsx(_components.h2, {
      id: "resumeaudiomixing",
      children: "resumeAudioMixing"
    }), `
`, _jsx(_components.p, {
      children: "恢复播放和混音的音乐文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeaudiomixing__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " resumeAudioMixing"
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
      id: "api_irtcengine_resumeaudiomixing__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_pauseaudiomixing",
        children: "pauseAudioMixing"
      }), " 后，可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_resumeaudiomixing",
        children: "resumeAudioMixing"
      }), " 恢复播放。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeaudiomixing__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeaudiomixing__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
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
      id: "所属接口类-9",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_selectaudiotrack"
    }), `
`, _jsx(_components.h2, {
      id: "selectaudiotrack",
      children: "selectAudioTrack"
    }), `
`, _jsx(_components.p, {
      children: "选择播放过程中使用的音轨。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_selectaudiotrack__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " audioIndex);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_selectaudiotrack__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "获取音频文件的音轨索引后，可以调用该方法指定任意音轨进行播放。例如，如果一个多音轨文件的不同音轨存储了不同语言的歌曲，可以调用该方法设置播放语言。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["支持的音频文件格式详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/faq/general-product-inquiry/audio-format",
          children: "声网 RTC SDK 支持哪些格式的音频文件"
        }), "。"]
      }), `
`, _jsx(_components.li, {
        children: "你需要在调用 startAudioMixing 并收到 onAudioMixingStateChanged （AUDIO_MIXING_STATE_PLAYING ）回调后再调用该方法。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_selectaudiotrack__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "audioindex",
      children: _jsx(_components.code, {
        children: "audioIndex"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["你想要指定的音轨索引。该值应大于 0 且小于 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_getaudiotrackcount",
        children: "getAudioTrackCount"
      }), " 返回的值。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_selectaudiotrack__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-10",
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
      id: "所属接口类-10",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectmultiaudiotrack"
    }), `
`, _jsx(_components.h2, {
      id: "selectmultiaudiotrack",
      children: "selectMultiAudioTrack"
    }), `
`, _jsx(_components.p, {
      children: "选择要在本地设备播放和发布到频道的音轨。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectmultiaudiotrack__prototype"
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
              children: " selectMultiAudioTrack"
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
              children: " playoutTrackIndex, "
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
              children: " publishTrackIndex);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectmultiaudiotrack__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用该方法前，你需要通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-open#api_imediaplayer_openwithmediasource",
        children: "openWithMediaSource"
      }), " 打开媒体文件，并在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediasource",
        children: "MediaPlayerSource"
      }), " 中将 ", _jsx(_components.code, {
        children: "enableMultiAudioTrack"
      }), " 设置为 true。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectmultiaudiotrack__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于例如 KTV 场景：主持人可以选择在本地播放原唱音轨，同时将伴奏音轨发布到频道。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectmultiaudiotrack__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "playouttrackindex",
      children: _jsx(_components.code, {
        children: "playoutTrackIndex"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于本地播放的音轨索引。你可以通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo",
        children: "getStreamInfo"
      }), " 获取该索引。"]
    }), `
`, _jsx(_components.h4, {
      id: "publishtrackindex",
      children: _jsx(_components.code, {
        children: "publishTrackIndex"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要发布到频道中的音轨索引。你可以通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getstreaminfo",
        children: "getStreamInfo"
      }), " 获取该索引。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_selectmultiaudiotrack__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-11",
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
      id: "所属接口类-11",
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
      id: "api_irtcengine_setaudiomixingdualmonomode"
    }), `
`, _jsx(_components.h2, {
      id: "setaudiomixingdualmonomode",
      children: "setAudioMixingDualMonoMode"
    }), `
`, _jsx(_components.p, {
      children: "设置当前音频文件的声道模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingdualmonomode__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " setAudioMixingDualMonoMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.AudioMixingDualMonoMode mode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingdualmonomode__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以根据需要将音频文件的声道模式设置为原始模式、左声道模式、右声道模式或混合声道模式。例如，在 KTV 场景中，音乐文件的左声道存储伴奏，右声道存储原唱人声。你可以根据实际需求进行设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果只想听伴奏，使用该方法将音频文件的声道模式设置为左声道模式。"
      }), `
`, _jsx(_components.li, {
        children: "如果需要同时听到伴奏和原唱人声，调用该方法将声道模式设置为混合模式。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法仅适用于立体声音频文件。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingdualmonomode__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在 KTV 场景中，音乐文件的左声道存储伴奏，右声道存储原唱人声。你可以根据实际需求进行设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你只想听到伴奏，调用该方法将声道模式设置为左声道模式。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要同时听到伴奏和原唱人声，调用该方法将声道模式设置为混合模式。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingdualmonomode__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingdualmonomode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["声道模式。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiomixingdualmonomode",
        children: "AudioMixingDualMonoMode"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingdualmonomode__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-12",
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
      id: "所属接口类-12",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingpitch"
    }), `
`, _jsx(_components.h2, {
      id: "setaudiomixingpitch",
      children: "setAudioMixingPitch"
    }), `
`, _jsx(_components.p, {
      children: "设置本地音乐文件的音调。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingpitch__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " setAudioMixingPitch"
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
      id: "api_irtcengine_setaudiomixingpitch__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingpitch__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-8",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingpitch__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "pitch",
      children: _jsx(_components.code, {
        children: "pitch"
      })
    }), `
`, _jsx(_components.p, {
      children: "按半音阶设置本地音乐文件的音调（默认值为 0）。取值范围为 -12 到 12，相邻数值之间的音调差为一个半音。该参数的绝对值越大，音调变化越明显。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingpitch__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-13",
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
      id: "所属接口类-13",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingplaybackspeed"
    }), `
`, _jsx(_components.h2, {
      id: "setaudiomixingplaybackspeed",
      children: "setAudioMixingPlaybackSpeed"
    }), `
`, _jsx(_components.p, {
      children: "设置当前音频文件的播放速度。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingplaybackspeed__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " setAudioMixingPlaybackSpeed"
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
      id: "api_irtcengine_setaudiomixingplaybackspeed__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["请确保在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " 回调，报告状态为 ", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " 后再调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingplaybackspeed__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "speed",
      children: _jsx(_components.code, {
        children: "speed"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放速度。建议设置为 50 到 400 之间的值，定义如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "50：原始速度的一半。"
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
      id: "api_irtcengine_setaudiomixingplaybackspeed__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-14",
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
      id: "所属接口类-14",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingposition"
    }), `
`, _jsx(_components.h2, {
      id: "setaudiomixingposition",
      children: "setAudioMixingPosition"
    }), `
`, _jsx(_components.p, {
      children: "设置混音的播放位置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingposition__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " setAudioMixingPosition"
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
              children: " pos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingposition__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingposition__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-9",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 并收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " 回调后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingposition__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "pos",
      children: _jsx(_components.code, {
        children: "pos"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放位置，单位为毫秒。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudiomixingposition__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-15",
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
      id: "所属接口类-15",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing"
    }), `
`, _jsx(_components.h2, {
      id: "startaudiomixing-12",
      children: "startAudioMixing [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "开始播放音乐文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " startAudioMixing"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String filePath, "
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
              children: " loopback, "
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
              children: " cycle);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃。请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_startaudiomixing2",
        children: "startAudioMixing [2/2]"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["该方法支持播放以 ", _jsx(_components.code, {
        children: "content://"
      }), " 开头的 URI 文件。支持的音频文件格式详见声网 RTC SDK 支持的音频文件格式。如果本地音乐文件不存在、SDK 不支持该文件格式，或无法访问音乐文件的 URL，SDK 会上报 ", _jsx(_components.code, {
        children: "AUDIO_MIXING_REASON_CAN_NOT_OPEN"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果调用该方法播放短音效文件，可能会播放失败。建议使用 playEffect 播放此类文件。"
      }), `
`, _jsx(_components.li, {
        children: "如果需要多次调用该方法，确保每次调用的时间间隔大于 500 毫秒。"
      }), `
`, _jsxs(_components.li, {
        children: ["在 Android 平台上，有以下注意事项：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "使用该方法时，需确保 Android 设备版本为 v4.2 或更高，API 版本为 v16 或更高。"
          }), `
`, _jsx(_components.li, {
            children: "如果需要播放在线音乐文件，不建议使用重定向的 URL 地址。部分 Android 设备可能无法打开重定向的 URL。"
          }), `
`, _jsx(_components.li, {
            children: "如果在模拟器上调用该方法，需确保音乐文件位于 /sdcard/ 目录下，且格式为 MP3。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-10",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调。当音频混音文件播放结束时，SDK 会在本地客户端触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_STOPPED"
      }), " ）回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "filepath",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你已通过调用 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 将音效预加载到内存中，确保该参数的值与 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 中的 ", _jsx(_components.code, {
            children: "filePath"
          }), " 参数一致。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "文件路径。支持以下类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "以 content:// 开头的 URI 地址。"
      }), `
`, _jsx(_components.li, {
        children: "以 /assets/ 开头的路径。"
      }), `
`, _jsx(_components.li, {
        children: "URL。"
      }), `
`, _jsx(_components.li, {
        children: "本地文件的绝对路径，需精确到文件名及扩展名。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "支持的音频格式包括 MP3、AAC、M4A、MP4、WAV 和 3GP。"
    }), `
`, _jsx(_components.h4, {
      id: "loopback",
      children: _jsx(_components.code, {
        children: "loopback"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否仅在本地客户端播放音乐文件："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：仅本地播放，只有本地用户能听到音乐。"
      }), `
`, _jsx(_components.li, {
        children: "false：发布到远端，远端用户也能听到音乐。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "cycle",
      children: _jsx(_components.code, {
        children: "cycle"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐文件的播放次数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "> 0：播放指定次数，例如 1 表示播放 1 次。"
      }), `
`, _jsx(_components.li, {
        children: "-1：无限循环播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-16",
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-1：发生通用错误（无明确原因）。"
          }), `
`, _jsx(_components.li, {
            children: "-2：参数无效。"
          }), `
`, _jsxs(_components.li, {
            children: ["-3：SDK 未就绪：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "音频模块未启用。"
              }), `
`, _jsx(_components.li, {
                children: "程序未完成。"
              }), `
`, _jsx(_components.li, {
                children: "RtcEngine 初始化失败。请重新初始化 RtcEngine。"
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-16",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing2"
    }), `
`, _jsx(_components.h2, {
      id: "startaudiomixing-22",
      children: "startAudioMixing [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "开始播放音乐文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing2__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " startAudioMixing"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String filePath, "
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
              children: " loopback, "
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
              children: " cycle, "
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
              children: " startPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法支持播放以 ", _jsx(_components.code, {
        children: "content://"
      }), " 开头的 URI 文件。如果本地音乐文件不存在、SDK 不支持该文件格式，或无法访问音乐文件的 URL，SDK 会返回 ", _jsx(_components.code, {
        children: "AUDIO_MIXING_REASON_CAN_NOT_OPEN"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你调用该方法播放短音效文件，可能会播放失败。声网建议使用 playEffect 方法播放此类文件。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要多次调用该方法，请确保每次调用之间的时间间隔大于 500 毫秒。"
      }), `
`, _jsxs(_components.li, {
        children: ["在 Android 平台上，请注意以下事项：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "设备需为 Android v4.2 或更高版本，且 API 版本为 v16 或更高。"
          }), `
`, _jsx(_components.li, {
            children: "如果播放在线音乐文件，声网不建议使用重定向的 URL 地址，部分 Android 设备可能无法打开此类地址。"
          }), `
`, _jsx(_components.li, {
            children: "如果在模拟器上调用该方法，请确保音乐文件位于 /sdcard/ 目录下，且格式为 MP3。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-11",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_PLAYING"
      }), " ）回调。当音频混音文件播放结束时，SDK 会在本地触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), " （", _jsx(_components.code, {
        children: "AUDIO_MIXING_STATE_STOPPED"
      }), " ）回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "filepath-1",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["文件路径。路径需精确到文件名和后缀名。支持 URL 地址、绝对路径或以 ", _jsx(_components.code, {
        children: "/assets/"
      }), " 开头的路径。使用绝对路径访问本地文件可能会遇到权限问题，建议使用 URI 地址，例如： ", _jsx(_components.code, {
        children: "content://com.android.providers.media.documents/document/audio%3A14441"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "loopback-1",
      children: _jsx(_components.code, {
        children: "loopback"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否仅在本地播放音乐文件："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：仅本地播放，只有本地用户能听到音乐。"
      }), `
`, _jsx(_components.li, {
        children: "false：将音乐发布到远端，远端用户也能听到音乐。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "cycle-1",
      children: _jsx(_components.code, {
        children: "cycle"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐文件的播放次数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "> 0：播放指定次数，例如 1 表示播放 1 次。"
      }), `
`, _jsx(_components.li, {
        children: "-1：无限循环播放。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "startpos",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐文件的播放起始位置（单位：毫秒）。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiomixing2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-17",
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-1：发生通用错误（无明确原因）。"
          }), `
`, _jsx(_components.li, {
            children: "-2：参数无效。"
          }), `
`, _jsxs(_components.li, {
            children: ["-3：SDK 未就绪：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "音频模块未启用。"
              }), `
`, _jsx(_components.li, {
                children: "程序未完成。"
              }), `
`, _jsx(_components.li, {
                children: "RtcEngine 初始化失败，请重新初始化 RtcEngine。"
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-17",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopaudiomixing"
    }), `
`, _jsx(_components.h2, {
      id: "stopaudiomixing",
      children: "stopAudioMixing"
    }), `
`, _jsx(_components.p, {
      children: "停止播放音乐文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopaudiomixing__prototype"
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
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
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
              children: " stopAudioMixing"
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
      id: "api_irtcengine_stopaudiomixing__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 播放音乐文件后，可以调用该方法停止播放。如果只需要暂停播放，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_irtcengine_pauseaudiomixing",
        children: "pauseAudioMixing"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopaudiomixing__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-12",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopaudiomixing__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-18",
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
      id: "所属接口类-18",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingfinished"
    }), `
`, _jsx(_components.h2, {
      id: "onaudiomixingfinished",
      children: "onAudioMixingFinished"
    }), `
`, _jsx(_components.p, {
      children: "本地音乐文件播放结束回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingfinished__prototype"
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
              children: "public"
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
              children: " onAudioMixingFinished"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingfinished__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#callback_irtcengineeventhandler_onaudiomixingstatechanged",
        children: "onAudioMixingStateChanged"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 播放本地音乐文件后，播放结束时会触发该回调。如果调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 失败，会返回错误码 ", _jsx(_components.code, {
        children: "WARN_AUDIO_MIXING_OPEN_ERROR"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingfinished__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地音乐文件播放结束时被触发。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-19",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingpositionchanged"
    }), `
`, _jsx(_components.h2, {
      id: "onaudiomixingpositionchanged",
      children: "onAudioMixingPositionChanged"
    }), `
`, _jsx(_components.p, {
      children: "音乐文件播放进度回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingpositionchanged__prototype"
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
              children: "public"
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
              children: " onAudioMixingPositionChanged"
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
              children: " position)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingpositionchanged__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 方法播放音乐文件后，SDK 每两秒触发一次该回调，报告音乐文件的播放进度。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingpositionchanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " 播放音乐文件后，每两秒触发一次。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingpositionchanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "position",
      children: _jsx(_components.code, {
        children: "position"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放进度，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-20",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingstatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onaudiomixingstatechanged",
      children: "onAudioMixingStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "音乐文件播放状态变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingstatechanged__prototype"
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
              children: "public"
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
              children: " onAudioMixingStateChanged"
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
              children: " state, "
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
              children: " reason)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingstatechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调报告当前音乐文件的播放状态和错误码。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingstatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在音乐文件播放状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiomixingstatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐文件的播放状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_STATE_PLAYING (710)：音乐文件正在播放。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_STATE_PAUSED (711)：音乐文件暂停播放。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_STATE_STOPPED (713)：音乐文件停止播放。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_STATE_FAILED (714)：播放音乐文件时出现异常，SDK 会通过 reason 参数返回具体原因。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "reason",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "错误码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_REASON_OK (0)：没有错误。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_REASON_CAN_NOT_OPEN (701)：SDK 无法打开音乐文件。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_REASON_TOO_FREQUENT_CALL (702)：SDK 打开音乐文件过于频繁。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_REASON_INTERRUPTED_EOF (703)：音乐文件播放被中断。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_REASON_ONE_LOOP_COMPLETED (721)：音乐文件完成一次循环播放。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_REASON_ALL_LOOPS_COMPLETED (723)：音乐文件完成所有循环播放。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_MIXING_REASON_STOPPED_BY_USER (724)：通过调用 stopAudioMixing 停止音乐文件播放。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-21",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
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
