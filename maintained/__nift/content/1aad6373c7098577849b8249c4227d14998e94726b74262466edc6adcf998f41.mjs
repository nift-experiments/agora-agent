import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "自定义音频采集和渲染",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_custom_capturenrendering" />

<a id="api_irtcengine_adjustcustomaudioplayoutvolume" />

## adjustCustomAudioPlayoutVolume [#adjustcustomaudioplayoutvolume]

调节本地播放的自定义音频轨道的音量。

<a id="api_irtcengine_adjustcustomaudioplayoutvolume__prototype" />

\`\`\`java
public abstract int adjustCustomAudioPlayoutVolume(int trackId, int volume);
\`\`\`

<a id="api_irtcengine_adjustcustomaudioplayoutvolume__detailed_desc" />

如果你希望更改本地播放的音频音量，需要再次调用该方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保在调用该方法前，已调用 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 创建自定义音频轨道。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_adjustcustomaudioplayoutvolume__parameters" />

### 参数 [#参数]

#### \`trackId\` [#trackid]

音频轨道 ID。设置为 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 返回的自定义音频轨道 ID。

#### \`volume\` [#volume]

音频源的音量，取值范围为 0 到 100。

* 0：静音。
* 100：原始音量。

<a id="api_irtcengine_adjustcustomaudioplayoutvolume__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_adjustcustomaudiopublishvolume" />

## adjustCustomAudioPublishVolume [#adjustcustomaudiopublishvolume]

调节远端播放的自定义音频轨道的音量。

<a id="api_irtcengine_adjustcustomaudiopublishvolume__prototype" />

\`\`\`java
public abstract int adjustCustomAudioPublishVolume(int trackId, int volume);
\`\`\`

<a id="api_irtcengine_adjustcustomaudiopublishvolume__detailed_desc" />

如果你想更改远端播放的音频音量，需要再次调用该方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保在调用该方法前已调用 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 创建自定义音频轨道。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_adjustcustomaudiopublishvolume__parameters" />

### 参数 [#参数-1]

#### \`trackId\` [#trackid-1]

音频轨道 ID。设置为 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 返回的自定义音频轨道 ID。

#### \`volume\` [#volume-1]

音频源的音量，取值范围为 0 到 100。

* 0：静音。
* 100：原始音量。

<a id="api_irtcengine_adjustcustomaudiopublishvolume__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_createcustomaudiotrack" />

## createCustomAudioTrack [#createcustomaudiotrack]

创建一个自定义音频轨道。

<a id="api_irtcengine_createcustomaudiotrack__prototype" />

\`\`\`java
public abstract int createCustomAudioTrack(Constants.AudioTrackType trackType, AudioTrackConfig config)
\`\`\`

<a id="api_irtcengine_createcustomaudiotrack__detailed_desc" />

你可以通过以下步骤发布自定义音频源：

1. 调用该方法创建一个自定义音频轨道，并获取音频轨道 ID。
2. 调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 publishCustomAudioTrackId 设置为步骤 1 中获取的音频轨道 ID，并将 publishCustomAudioTrack 设置为 true。
3. 调用 pushExternalAudioFrame，并将 trackId 设置为步骤 2 中的音频轨道 ID，即可在频道中发布对应的自定义音频源。

   <CalloutContainer type="info">
     <CalloutTitle>
       注
     </CalloutTitle>

     <CalloutDescription>
       该方法需要在加入频道前调用。
     </CalloutDescription>
   </CalloutContainer>

<a id="api_irtcengine_createcustomaudiotrack__parameters" />

### 参数 [#参数-2]

#### \`trackType\` [#tracktype]

自定义音频轨道的类型，详见 [AudioTrackType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiotracktype)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果该参数设置为 \`AUDIO_TRACK_DIRECT\`，则在调用 \`joinChannel\` 加入频道时，必须将 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions) 中的 \`publishMicrophoneTrack\` 设置为 false，否则加入频道会失败并返回错误码 -2。
  </CalloutDescription>
</CalloutContainer>

#### \`config\` [#config]

自定义音频轨道的配置，详见 [AudioTrackConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audiotrackconfig)。

<a id="api_irtcengine_createcustomaudiotrack__return_values" />

### 返回值 [#返回值-2]

* 方法调用成功，返回音频轨道 ID，作为该音频轨道的唯一标识。
* 方法调用失败，返回 0xffffffff。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_destroycustomaudiotrack" />

## destroyCustomAudioTrack [#destroycustomaudiotrack]

销毁指定的音频轨道。

<a id="api_irtcengine_destroycustomaudiotrack__prototype" />

\`\`\`java
public abstract int destroyCustomAudioTrack(int trackId);
\`\`\`

<a id="api_irtcengine_destroycustomaudiotrack__detailed_desc" />

<a id="api_irtcengine_destroycustomaudiotrack__parameters" />

### 参数 [#参数-3]

#### \`trackId\` [#trackid-2]

在 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 中返回的自定义音频轨道 ID。

<a id="api_irtcengine_destroycustomaudiotrack__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enablecustomaudiolocalplayback" />

## enableCustomAudioLocalPlayback [#enablecustomaudiolocalplayback]

设置是否启用外部音频源的本地播放。

<a id="api_irtcengine_enablecustomaudiolocalplayback__prototype" />

\`\`\`java
public abstract int enableCustomAudioLocalPlayback(int trackId, boolean enabled);
\`\`\`

<a id="api_irtcengine_enablecustomaudiolocalplayback__detailed_desc" />

你可以调用 [adjustCustomAudioPlayoutVolume](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudioplayoutvolume) 方法调整自定义音频轨道的本地播放音量。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保在调用该方法前，已通过调用 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 创建自定义音频轨道。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_enablecustomaudiolocalplayback__parameters" />

### 参数 [#参数-4]

#### \`trackId\` [#trackid-3]

音频轨道 ID，需设置为 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 返回的自定义音频轨道 ID。

#### \`enabled\` [#enabled]

是否播放外部音频源：

* true：播放外部音频源。
* false：（默认）不播放外部音频源。

<a id="api_irtcengine_enablecustomaudiolocalplayback__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pullaudioframe" />

## pullPlaybackAudioFrame \\[1/2] [#pullplaybackaudioframe-12]

拉取远端混音后的音频数据用于播放。

<a id="api_irtcengine_pullaudioframe__prototype" />

\`\`\`java
public abstract int pullPlaybackAudioFrame(byte[] data, int lengthInByte);
\`\`\`

<a id="api_irtcengine_pullaudioframe__detailed_desc" />

调用该方法前，请先调用 [setExternalAudioSink](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink) 并设置 \`enabled\` 为 true，以启用外部音频渲染。

注： \`pullPlaybackAudioFrame\` 方法和 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe) 回调都可用于获取远端混音后的音频数据。启用外部音频渲染（调用 [setExternalAudioSink](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink) ）后，无法再通过 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe) 回调获取数据。请根据实际业务需求选择使用 \`pullPlaybackAudioFrame\` 方法或 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe) 回调。两者区别如下：

* 调用 pullPlaybackAudioFrame 方法后，App 会自动从 SDK 拉取音频数据。通过设置音频数据参数，SDK 会调整帧缓冲区以帮助 App 处理延迟，有效避免音频播放抖动。
* 注册 onPlaybackAudioFrame 回调后，SDK 会通过回调将音频数据发送给 App。若处理音频帧存在延迟，可能会导致音频抖动。

该方法仅用于获取远端混音后的音频数据。如需获取采集、播放等其他音频处理阶段的数据，可通过调用 [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver) 注册相应的回调。

<a id="api_irtcengine_pullaudioframe__timing" />

### 调用时机 [#调用时机]

该方法需要在加入频道后调用。

<a id="api_irtcengine_pullaudioframe__parameters" />

### 参数 [#参数-5]

#### \`data\` [#data]

输出参数，要拉取的远端音频数据。

#### \`lengthInByte\` [#lengthinbyte]

数据长度（字节）。该值与音频时长，以及在 [setExternalAudioSink](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink) 中设置的 \`sampleRate\` 和 \`channels\` 参数有关。计算公式为： \`lengthInByte\` = \`sampleRate\` / 1000 × 2 × \`channels\` × 音频时长（毫秒）。

<a id="api_irtcengine_pullaudioframe__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pullaudioframe2" />

## pullPlaybackAudioFrame \\[2/2] [#pullplaybackaudioframe-22]

拉取远端音频数据。

<a id="api_irtcengine_pullaudioframe2__prototype" />

\`\`\`java
public abstract int pullPlaybackAudioFrame(ByteBuffer data, int lengthInByte);
\`\`\`

<a id="api_irtcengine_pullaudioframe2__detailed_desc" />

在调用该方法之前，你需要调用 [setExternalAudioSink](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink) 方法，并将 \`enabled\` 设置为 true，以启用并设置外部音频播放。调用该方法成功后，App 会拉取解码并混音后的音频数据用于播放。

注：

* 该方法需要在加入频道后调用。
* 该方法与 onPlaybackAudioFrame 回调的区别如下：
  * onPlaybackAudioFrame：SDK 通过该回调将音频数据发送给 App。若 App 处理音频帧存在延迟，可能会导致音频抖动。
  * pullPlaybackAudioFrame：App 主动拉取远端音频数据。设置音频参数后，SDK 会调整帧缓冲区，避免外部音频播放中因抖动引发的问题。

<a id="api_irtcengine_pullaudioframe2__parameters" />

### 参数 [#参数-6]

#### \`data\` [#data-1]

用于接收拉取的远端音频数据。详见 \`ByteBuffer\`。

#### \`lengthInByte\` [#lengthinbyte-1]

远端音频数据的字节长度。该值与音频时长，以及在 [setExternalAudioSink](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink) 中设置的 \`sampleRate\` 和 \`channels\` 参数有关。 \`lengthInByte\` = \`sampleRate\` / 1000 × 2 × \`channels\` × 音频时长（毫秒）。

<a id="api_irtcengine_pullaudioframe2__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pushaudioframe2" />

## pushExternalAudioFrame [#pushexternalaudioframe]

将外部音频帧推送到 SDK。

<a id="api_irtcengine_pushaudioframe2__prototype" />

\`\`\`java
public abstract int pushExternalAudioFrame(byte[] data, long timestamp, int sampleRate, int channels, Constants.BytesPerSample bytesPerSample, int trackId);
\`\`\`

<a id="api_irtcengine_pushaudioframe2__detailed_desc" />

调用该方法前，请按以下顺序操作：

1. 调用 createCustomAudioTrack 创建自定义音频轨道，并获取音频轨道 ID。
2. 调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 publishCustomAudioTrackId 设置为要发布的音频轨道 ID，并将 publishCustomAudioTrack 设置为 true。

<a id="api_irtcengine_pushaudioframe2__timing" />

### 调用时机 [#调用时机-1]

在调用该方法推送外部音频数据前，请先完成以下步骤：

1. 调用 createCustomAudioTrack 创建自定义音频轨道并获取音频轨道 ID。
2. 调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 publishCustomAudioTrackId 设置为要发布的音频轨道 ID，并将 publishCustomAudioTrack 设置为 true。

<a id="api_irtcengine_pushaudioframe2__parameters" />

### 参数 [#参数-7]

#### \`data\` [#data-2]

外部音频数据。

#### \`timestamp\` [#timestamp]

外部音频帧的时间戳（毫秒）。该参数为必填项，可用于还原采集音频帧的顺序，或在涉及视频的场景中（包括使用外部视频源的场景）实现音视频同步。

#### \`sampleRate\` [#samplerate]

外部音频源的采样率（Hz），可设置为以下值：

* 8000
* 16000
* 32000
* 44100
* 48000。

#### \`channels\` [#channels]

外部音频源的声道数，可设置为以下值：

* 1：单声道。
* 2：立体声。

#### \`bytesPerSample\` [#bytespersample]

每个采样点的字节数。

#### \`trackId\` [#trackid-4]

音频轨道 ID。请设置为 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 返回的自定义音频轨道 ID。

<a id="api_irtcengine_pushaudioframe2__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setexternalaudiosink" />

## setExternalAudioSink [#setexternalaudiosink]

设置外部音频渲染器。

<a id="api_irtcengine_setexternalaudiosink__prototype" />

\`\`\`java
public abstract int setExternalAudioSink(boolean enabled, int sampleRate, int channels);
\`\`\`

<a id="api_irtcengine_setexternalaudiosink__detailed_desc" />

启用外部音频渲染器后，你可以调用 \`pullPlaybackAudioFrame\` 拉取远端音频帧，应用可以处理远端音频，并使用你希望的音效进行播放。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    启用外部音频渲染器后，应用将无法从 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe) 回调中获取任何音频数据。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setexternalaudiosink__scenario" />

### 适用场景 [#适用场景]

适用于需要使用外部音频数据进行播放的场景。

<a id="api_irtcengine_setexternalaudiosink__timing" />

### 调用时机 [#调用时机-2]

请在加入频道前调用该方法。

<a id="api_irtcengine_setexternalaudiosink__parameters" />

### 参数 [#参数-8]

#### \`enabled\` [#enabled-1]

是否启用外部音频渲染器：

* true：启用外部音频渲染器。
* false：（默认）关闭外部音频渲染器。

#### \`sampleRate\` [#samplerate-1]

外部音频渲染器的采样率（Hz），可设置为以下值：

* 16000
* 32000
* 44100
* 48000

#### \`channels\` [#channels-1]

外部音频渲染器的声道数：

* 1：单声道。
* 2：立体声。

<a id="api_irtcengine_setexternalaudiosink__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setexternalaudiosource" />

## setExternalAudioSource \\[1/2] [#setexternalaudiosource-12]

设置外部音频源。

<a id="api_irtcengine_setexternalaudiosource__prototype" />

\`\`\`java
public abstract int setExternalAudioSource(boolean enabled, int sampleRate, int channels);
\`\`\`

<a id="api_irtcengine_setexternalaudiosource__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃，请改用 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack)。

在调用 \`joinChannel\` 和 \`startPreview\` 之前调用该方法。

<a id="api_irtcengine_setexternalaudiosource__parameters" />

### 参数 [#参数-9]

#### \`enabled\` [#enabled-2]

是否启用外部音频源：

* true：启用外部音频源。
* false：（默认）禁用外部音频源。

#### \`sampleRate\` [#samplerate-2]

外部音频源的采样率（Hz），可设置为以下值：

* 8000
* 16000
* 32000
* 44100
* 48000。

#### \`channels\` [#channels-2]

外部音频源的声道数：

* 1：单声道。
* 2：立体声。

<a id="api_irtcengine_setexternalaudiosource__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setexternalaudiosource2" />

## setExternalAudioSource \\[2/2] [#setexternalaudiosource-22]

设置外部音频源参数。

<a id="api_irtcengine_setexternalaudiosource2__prototype" />

\`\`\`java
public abstract int setExternalAudioSource(boolean enabled, int sampleRate, int channels, boolean localPlayback, boolean publish);
\`\`\`

<a id="api_irtcengine_setexternalaudiosource2__detailed_desc" />

#### \`废弃\` [#废弃-1]

该方法已废弃，请改用 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack)。

<a id="api_irtcengine_setexternalaudiosource2__timing" />

### 调用时机 [#调用时机-3]

在加入频道前调用该方法。

<a id="api_irtcengine_setexternalaudiosource2__parameters" />

### 参数 [#参数-10]

#### \`enabled\` [#enabled-3]

是否启用外部音频源：

* true：启用外部音频源。
* false：（默认）不启用外部音频源。

#### \`sampleRate\` [#samplerate-3]

外部音频源的采样率（Hz），可设置为以下值：

* 8000
* 16000
* 32000
* 44100
* 48000。

#### \`channels\` [#channels-3]

外部音频源的声道数，可设置为以下值：

* 1：单声道。
* 2：立体声。

#### \`localPlayback\` [#localplayback]

是否播放外部音频源：

* true：播放外部音频源。
* false：（默认）不播放外部音频源。

#### \`publish\` [#publish]

是否向远端用户发布音频：

* true：（默认）发布音频到远端用户。
* false：不发布音频到远端用户。

<a id="api_irtcengine_setexternalaudiosource2__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-10]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "adjustcustomaudioplayoutvolume",
    content: "调节本地播放的自定义音频轨道的音量。"
  }, {
    heading: "adjustcustomaudioplayoutvolume",
    content: "如果你希望更改本地播放的音频音量，需要再次调用该方法。"
  }, {
    heading: "adjustcustomaudioplayoutvolume",
    content: "请确保在调用该方法前，已调用 createCustomAudioTrack 创建自定义音频轨道。"
  }, {
    heading: "trackid",
    content: "音频轨道 ID。设置为 createCustomAudioTrack 返回的自定义音频轨道 ID。"
  }, {
    heading: "volume",
    content: "音频源的音量，取值范围为 0 到 100。"
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
    heading: "adjustcustomaudiopublishvolume",
    content: "调节远端播放的自定义音频轨道的音量。"
  }, {
    heading: "adjustcustomaudiopublishvolume",
    content: "如果你想更改远端播放的音频音量，需要再次调用该方法。"
  }, {
    heading: "adjustcustomaudiopublishvolume",
    content: "请确保在调用该方法前已调用 createCustomAudioTrack 创建自定义音频轨道。"
  }, {
    heading: "trackid-1",
    content: "音频轨道 ID。设置为 createCustomAudioTrack 返回的自定义音频轨道 ID。"
  }, {
    heading: "volume-1",
    content: "音频源的音量，取值范围为 0 到 100。"
  }, {
    heading: "volume-1",
    content: "0：静音。"
  }, {
    heading: "volume-1",
    content: "100：原始音量。"
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
    heading: "createcustomaudiotrack",
    content: "创建一个自定义音频轨道。"
  }, {
    heading: "createcustomaudiotrack",
    content: "你可以通过以下步骤发布自定义音频源："
  }, {
    heading: "createcustomaudiotrack",
    content: "调用该方法创建一个自定义音频轨道，并获取音频轨道 ID。"
  }, {
    heading: "createcustomaudiotrack",
    content: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 publishCustomAudioTrackId 设置为步骤 1 中获取的音频轨道 ID，并将 publishCustomAudioTrack 设置为 true。"
  }, {
    heading: "createcustomaudiotrack",
    content: "调用 pushExternalAudioFrame，并将 trackId 设置为步骤 2 中的音频轨道 ID，即可在频道中发布对应的自定义音频源。"
  }, {
    heading: "createcustomaudiotrack",
    content: "该方法需要在加入频道前调用。"
  }, {
    heading: "tracktype",
    content: "自定义音频轨道的类型，详见 AudioTrackType。"
  }, {
    heading: "tracktype",
    content: "如果该参数设置为 `AUDIO_TRACK_DIRECT`，则在调用 `joinChannel` 加入频道时，必须将 ChannelMediaOptions 中的 `publishMicrophoneTrack` 设置为 false，否则加入频道会失败并返回错误码 -2。"
  }, {
    heading: "config",
    content: "自定义音频轨道的配置，详见 AudioTrackConfig。"
  }, {
    heading: "返回值-2",
    content: "方法调用成功，返回音频轨道 ID，作为该音频轨道的唯一标识。"
  }, {
    heading: "返回值-2",
    content: "方法调用失败，返回 0xffffffff。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "destroycustomaudiotrack",
    content: "销毁指定的音频轨道。"
  }, {
    heading: "trackid-2",
    content: "在 createCustomAudioTrack 中返回的自定义音频轨道 ID。"
  }, {
    heading: "返回值-3",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngine"
  }, {
    heading: "enablecustomaudiolocalplayback",
    content: "设置是否启用外部音频源的本地播放。"
  }, {
    heading: "enablecustomaudiolocalplayback",
    content: "你可以调用 adjustCustomAudioPlayoutVolume 方法调整自定义音频轨道的本地播放音量。"
  }, {
    heading: "enablecustomaudiolocalplayback",
    content: "请确保在调用该方法前，已通过调用 createCustomAudioTrack 创建自定义音频轨道。"
  }, {
    heading: "trackid-3",
    content: "音频轨道 ID，需设置为 createCustomAudioTrack 返回的自定义音频轨道 ID。"
  }, {
    heading: "enabled",
    content: "是否播放外部音频源："
  }, {
    heading: "enabled",
    content: "true：播放外部音频源。"
  }, {
    heading: "enabled",
    content: "false：（默认）不播放外部音频源。"
  }, {
    heading: "返回值-4",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "pullplaybackaudioframe-12",
    content: "拉取远端混音后的音频数据用于播放。"
  }, {
    heading: "pullplaybackaudioframe-12",
    content: "调用该方法前，请先调用 setExternalAudioSink 并设置 `enabled` 为 true，以启用外部音频渲染。"
  }, {
    heading: "pullplaybackaudioframe-12",
    content: "注： `pullPlaybackAudioFrame` 方法和 onPlaybackAudioFrame 回调都可用于获取远端混音后的音频数据。启用外部音频渲染（调用 setExternalAudioSink ）后，无法再通过 onPlaybackAudioFrame 回调获取数据。请根据实际业务需求选择使用 `pullPlaybackAudioFrame` 方法或 onPlaybackAudioFrame 回调。两者区别如下："
  }, {
    heading: "pullplaybackaudioframe-12",
    content: "调用 pullPlaybackAudioFrame 方法后，App 会自动从 SDK 拉取音频数据。通过设置音频数据参数，SDK 会调整帧缓冲区以帮助 App 处理延迟，有效避免音频播放抖动。"
  }, {
    heading: "pullplaybackaudioframe-12",
    content: "注册 onPlaybackAudioFrame 回调后，SDK 会通过回调将音频数据发送给 App。若处理音频帧存在延迟，可能会导致音频抖动。"
  }, {
    heading: "pullplaybackaudioframe-12",
    content: "该方法仅用于获取远端混音后的音频数据。如需获取采集、播放等其他音频处理阶段的数据，可通过调用 registerAudioFrameObserver 注册相应的回调。"
  }, {
    heading: "调用时机",
    content: "该方法需要在加入频道后调用。"
  }, {
    heading: "data",
    content: "输出参数，要拉取的远端音频数据。"
  }, {
    heading: "lengthinbyte",
    content: "数据长度（字节）。该值与音频时长，以及在 setExternalAudioSink 中设置的 `sampleRate` 和 `channels` 参数有关。计算公式为： `lengthInByte` = `sampleRate` / 1000 × 2 × `channels` × 音频时长（毫秒）。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }, {
    heading: "pullplaybackaudioframe-22",
    content: "拉取远端音频数据。"
  }, {
    heading: "pullplaybackaudioframe-22",
    content: "在调用该方法之前，你需要调用 setExternalAudioSink 方法，并将 `enabled` 设置为 true，以启用并设置外部音频播放。调用该方法成功后，App 会拉取解码并混音后的音频数据用于播放。"
  }, {
    heading: "pullplaybackaudioframe-22",
    content: "注："
  }, {
    heading: "pullplaybackaudioframe-22",
    content: "该方法需要在加入频道后调用。"
  }, {
    heading: "pullplaybackaudioframe-22",
    content: "该方法与 onPlaybackAudioFrame 回调的区别如下："
  }, {
    heading: "pullplaybackaudioframe-22",
    content: "onPlaybackAudioFrame：SDK 通过该回调将音频数据发送给 App。若 App 处理音频帧存在延迟，可能会导致音频抖动。"
  }, {
    heading: "pullplaybackaudioframe-22",
    content: "pullPlaybackAudioFrame：App 主动拉取远端音频数据。设置音频参数后，SDK 会调整帧缓冲区，避免外部音频播放中因抖动引发的问题。"
  }, {
    heading: "data-1",
    content: "用于接收拉取的远端音频数据。详见 `ByteBuffer`。"
  }, {
    heading: "lengthinbyte-1",
    content: "远端音频数据的字节长度。该值与音频时长，以及在 setExternalAudioSink 中设置的 `sampleRate` 和 `channels` 参数有关。 `lengthInByte` = `sampleRate` / 1000 × 2 × `channels` × 音频时长（毫秒）。"
  }, {
    heading: "返回值-6",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-6",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngine"
  }, {
    heading: "pushexternalaudioframe",
    content: "将外部音频帧推送到 SDK。"
  }, {
    heading: "pushexternalaudioframe",
    content: "调用该方法前，请按以下顺序操作："
  }, {
    heading: "pushexternalaudioframe",
    content: "调用 createCustomAudioTrack 创建自定义音频轨道，并获取音频轨道 ID。"
  }, {
    heading: "pushexternalaudioframe",
    content: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 publishCustomAudioTrackId 设置为要发布的音频轨道 ID，并将 publishCustomAudioTrack 设置为 true。"
  }, {
    heading: "调用时机-1",
    content: "在调用该方法推送外部音频数据前，请先完成以下步骤："
  }, {
    heading: "调用时机-1",
    content: "调用 createCustomAudioTrack 创建自定义音频轨道并获取音频轨道 ID。"
  }, {
    heading: "调用时机-1",
    content: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 publishCustomAudioTrackId 设置为要发布的音频轨道 ID，并将 publishCustomAudioTrack 设置为 true。"
  }, {
    heading: "data-2",
    content: "外部音频数据。"
  }, {
    heading: "timestamp",
    content: "外部音频帧的时间戳（毫秒）。该参数为必填项，可用于还原采集音频帧的顺序，或在涉及视频的场景中（包括使用外部视频源的场景）实现音视频同步。"
  }, {
    heading: "samplerate",
    content: "外部音频源的采样率（Hz），可设置为以下值："
  }, {
    heading: "samplerate",
    content: "8000"
  }, {
    heading: "samplerate",
    content: "16000"
  }, {
    heading: "samplerate",
    content: "32000"
  }, {
    heading: "samplerate",
    content: "44100"
  }, {
    heading: "samplerate",
    content: "48000。"
  }, {
    heading: "channels",
    content: "外部音频源的声道数，可设置为以下值："
  }, {
    heading: "channels",
    content: "1：单声道。"
  }, {
    heading: "channels",
    content: "2：立体声。"
  }, {
    heading: "bytespersample",
    content: "每个采样点的字节数。"
  }, {
    heading: "trackid-4",
    content: "音频轨道 ID。请设置为 createCustomAudioTrack 返回的自定义音频轨道 ID。"
  }, {
    heading: "返回值-7",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-7",
    content: "RtcEngine"
  }, {
    heading: "setexternalaudiosink",
    content: "设置外部音频渲染器。"
  }, {
    heading: "setexternalaudiosink",
    content: "启用外部音频渲染器后，你可以调用 `pullPlaybackAudioFrame` 拉取远端音频帧，应用可以处理远端音频，并使用你希望的音效进行播放。"
  }, {
    heading: "setexternalaudiosink",
    content: "启用外部音频渲染器后，应用将无法从 onPlaybackAudioFrame 回调中获取任何音频数据。"
  }, {
    heading: "适用场景",
    content: "适用于需要使用外部音频数据进行播放的场景。"
  }, {
    heading: "调用时机-2",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "enabled-1",
    content: "是否启用外部音频渲染器："
  }, {
    heading: "enabled-1",
    content: "true：启用外部音频渲染器。"
  }, {
    heading: "enabled-1",
    content: "false：（默认）关闭外部音频渲染器。"
  }, {
    heading: "samplerate-1",
    content: "外部音频渲染器的采样率（Hz），可设置为以下值："
  }, {
    heading: "samplerate-1",
    content: "16000"
  }, {
    heading: "samplerate-1",
    content: "32000"
  }, {
    heading: "samplerate-1",
    content: "44100"
  }, {
    heading: "samplerate-1",
    content: "48000"
  }, {
    heading: "channels-1",
    content: "外部音频渲染器的声道数："
  }, {
    heading: "channels-1",
    content: "1：单声道。"
  }, {
    heading: "channels-1",
    content: "2：立体声。"
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
    heading: "setexternalaudiosource-12",
    content: "设置外部音频源。"
  }, {
    heading: "废弃",
    content: "该方法已废弃，请改用 createCustomAudioTrack。"
  }, {
    heading: "废弃",
    content: "在调用 `joinChannel` 和 `startPreview` 之前调用该方法。"
  }, {
    heading: "enabled-2",
    content: "是否启用外部音频源："
  }, {
    heading: "enabled-2",
    content: "true：启用外部音频源。"
  }, {
    heading: "enabled-2",
    content: "false：（默认）禁用外部音频源。"
  }, {
    heading: "samplerate-2",
    content: "外部音频源的采样率（Hz），可设置为以下值："
  }, {
    heading: "samplerate-2",
    content: "8000"
  }, {
    heading: "samplerate-2",
    content: "16000"
  }, {
    heading: "samplerate-2",
    content: "32000"
  }, {
    heading: "samplerate-2",
    content: "44100"
  }, {
    heading: "samplerate-2",
    content: "48000。"
  }, {
    heading: "channels-2",
    content: "外部音频源的声道数："
  }, {
    heading: "channels-2",
    content: "1：单声道。"
  }, {
    heading: "channels-2",
    content: "2：立体声。"
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
    heading: "setexternalaudiosource-22",
    content: "设置外部音频源参数。"
  }, {
    heading: "废弃-1",
    content: "该方法已废弃，请改用 createCustomAudioTrack。"
  }, {
    heading: "调用时机-3",
    content: "在加入频道前调用该方法。"
  }, {
    heading: "enabled-3",
    content: "是否启用外部音频源："
  }, {
    heading: "enabled-3",
    content: "true：启用外部音频源。"
  }, {
    heading: "enabled-3",
    content: "false：（默认）不启用外部音频源。"
  }, {
    heading: "samplerate-3",
    content: "外部音频源的采样率（Hz），可设置为以下值："
  }, {
    heading: "samplerate-3",
    content: "8000"
  }, {
    heading: "samplerate-3",
    content: "16000"
  }, {
    heading: "samplerate-3",
    content: "32000"
  }, {
    heading: "samplerate-3",
    content: "44100"
  }, {
    heading: "samplerate-3",
    content: "48000。"
  }, {
    heading: "channels-3",
    content: "外部音频源的声道数，可设置为以下值："
  }, {
    heading: "channels-3",
    content: "1：单声道。"
  }, {
    heading: "channels-3",
    content: "2：立体声。"
  }, {
    heading: "localplayback",
    content: "是否播放外部音频源："
  }, {
    heading: "localplayback",
    content: "true：播放外部音频源。"
  }, {
    heading: "localplayback",
    content: "false：（默认）不播放外部音频源。"
  }, {
    heading: "publish",
    content: "是否向远端用户发布音频："
  }, {
    heading: "publish",
    content: "true：（默认）发布音频到远端用户。"
  }, {
    heading: "publish",
    content: "false：不发布音频到远端用户。"
  }, {
    heading: "返回值-10",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-10",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-10",
    content: "RtcEngine"
  }],
  headings: [{
    id: "adjustcustomaudioplayoutvolume",
    content: "adjustCustomAudioPlayoutVolume"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "trackid",
    content: "`trackId`"
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
    id: "adjustcustomaudiopublishvolume",
    content: "adjustCustomAudioPublishVolume"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "trackid-1",
    content: "`trackId`"
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
    id: "createcustomaudiotrack",
    content: "createCustomAudioTrack"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "tracktype",
    content: "`trackType`"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "destroycustomaudiotrack",
    content: "destroyCustomAudioTrack"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "trackid-2",
    content: "`trackId`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "enablecustomaudiolocalplayback",
    content: "enableCustomAudioLocalPlayback"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "trackid-3",
    content: "`trackId`"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "pullplaybackaudioframe-12",
    content: "pullPlaybackAudioFrame [1/2]"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "data",
    content: "`data`"
  }, {
    id: "lengthinbyte",
    content: "`lengthInByte`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "pullplaybackaudioframe-22",
    content: "pullPlaybackAudioFrame [2/2]"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "data-1",
    content: "`data`"
  }, {
    id: "lengthinbyte-1",
    content: "`lengthInByte`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "pushexternalaudioframe",
    content: "pushExternalAudioFrame"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "data-2",
    content: "`data`"
  }, {
    id: "timestamp",
    content: "`timestamp`"
  }, {
    id: "samplerate",
    content: "`sampleRate`"
  }, {
    id: "channels",
    content: "`channels`"
  }, {
    id: "bytespersample",
    content: "`bytesPerSample`"
  }, {
    id: "trackid-4",
    content: "`trackId`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "setexternalaudiosink",
    content: "setExternalAudioSink"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "enabled-1",
    content: "`enabled`"
  }, {
    id: "samplerate-1",
    content: "`sampleRate`"
  }, {
    id: "channels-1",
    content: "`channels`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "setexternalaudiosource-12",
    content: "setExternalAudioSource [1/2]"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "enabled-2",
    content: "`enabled`"
  }, {
    id: "samplerate-2",
    content: "`sampleRate`"
  }, {
    id: "channels-2",
    content: "`channels`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "setexternalaudiosource-22",
    content: "setExternalAudioSource [2/2]"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "enabled-3",
    content: "`enabled`"
  }, {
    id: "samplerate-3",
    content: "`sampleRate`"
  }, {
    id: "channels-3",
    content: "`channels`"
  }, {
    id: "localplayback",
    content: "`localPlayback`"
  }, {
    id: "publish",
    content: "`publish`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#adjustcustomaudioplayoutvolume",
  title: _jsx(_Fragment, {
    children: "adjustCustomAudioPlayoutVolume"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#trackid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "trackId"
    })
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
  url: "#adjustcustomaudiopublishvolume",
  title: _jsx(_Fragment, {
    children: "adjustCustomAudioPublishVolume"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#trackid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "trackId"
    })
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
  url: "#createcustomaudiotrack",
  title: _jsx(_Fragment, {
    children: "createCustomAudioTrack"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#tracktype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "trackType"
    })
  })
}, {
  depth: 4,
  url: "#config",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#destroycustomaudiotrack",
  title: _jsx(_Fragment, {
    children: "destroyCustomAudioTrack"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#trackid-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "trackId"
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
  url: "#enablecustomaudiolocalplayback",
  title: _jsx(_Fragment, {
    children: "enableCustomAudioLocalPlayback"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#trackid-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "trackId"
    })
  })
}, {
  depth: 4,
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
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
  url: "#pullplaybackaudioframe-12",
  title: _jsx(_Fragment, {
    children: "pullPlaybackAudioFrame [1/2]"
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
  url: "#data",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "data"
    })
  })
}, {
  depth: 4,
  url: "#lengthinbyte",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lengthInByte"
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
  url: "#pullplaybackaudioframe-22",
  title: _jsx(_Fragment, {
    children: "pullPlaybackAudioFrame [2/2]"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#data-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "data"
    })
  })
}, {
  depth: 4,
  url: "#lengthinbyte-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lengthInByte"
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
  url: "#pushexternalaudioframe",
  title: _jsx(_Fragment, {
    children: "pushExternalAudioFrame"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#data-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "data"
    })
  })
}, {
  depth: 4,
  url: "#timestamp",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "timestamp"
    })
  })
}, {
  depth: 4,
  url: "#samplerate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 4,
  url: "#channels",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
    })
  })
}, {
  depth: 4,
  url: "#bytespersample",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bytesPerSample"
    })
  })
}, {
  depth: 4,
  url: "#trackid-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "trackId"
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
  url: "#setexternalaudiosink",
  title: _jsx(_Fragment, {
    children: "setExternalAudioSink"
  })
}, {
  depth: 3,
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
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
  url: "#enabled-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#samplerate-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 4,
  url: "#channels-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
    })
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
  url: "#setexternalaudiosource-12",
  title: _jsx(_Fragment, {
    children: "setExternalAudioSource [1/2]"
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
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#samplerate-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 4,
  url: "#channels-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
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
}, {
  depth: 2,
  url: "#setexternalaudiosource-22",
  title: _jsx(_Fragment, {
    children: "setExternalAudioSource [2/2]"
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
  url: "#调用时机-3",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#samplerate-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 4,
  url: "#channels-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
    })
  })
}, {
  depth: 4,
  url: "#localplayback",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "localPlayback"
    })
  })
}, {
  depth: 4,
  url: "#publish",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publish"
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
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
      id: "toc_audio_custom_capturenrendering"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustcustomaudioplayoutvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustcustomaudioplayoutvolume",
      children: "adjustCustomAudioPlayoutVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节本地播放的自定义音频轨道的音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustcustomaudioplayoutvolume__prototype"
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
              children: " adjustCustomAudioPlayoutVolume"
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
              children: " trackId, "
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
      id: "api_irtcengine_adjustcustomaudioplayoutvolume__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "如果你希望更改本地播放的音频音量，需要再次调用该方法。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请确保在调用该方法前，已调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
            children: "createCustomAudioTrack"
          }), " 创建自定义音频轨道。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustcustomaudioplayoutvolume__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "trackid",
      children: _jsx(_components.code, {
        children: "trackId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频轨道 ID。设置为 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
        children: "createCustomAudioTrack"
      }), " 返回的自定义音频轨道 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "volume",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频源的音量，取值范围为 0 到 100。"
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
      id: "api_irtcengine_adjustcustomaudioplayoutvolume__return_values"
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
      id: "api_irtcengine_adjustcustomaudiopublishvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustcustomaudiopublishvolume",
      children: "adjustCustomAudioPublishVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节远端播放的自定义音频轨道的音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustcustomaudiopublishvolume__prototype"
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
              children: " adjustCustomAudioPublishVolume"
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
              children: " trackId, "
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
      id: "api_irtcengine_adjustcustomaudiopublishvolume__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "如果你想更改远端播放的音频音量，需要再次调用该方法。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请确保在调用该方法前已调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
            children: "createCustomAudioTrack"
          }), " 创建自定义音频轨道。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustcustomaudiopublishvolume__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "trackid-1",
      children: _jsx(_components.code, {
        children: "trackId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频轨道 ID。设置为 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
        children: "createCustomAudioTrack"
      }), " 返回的自定义音频轨道 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "volume-1",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频源的音量，取值范围为 0 到 100。"
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
      id: "api_irtcengine_adjustcustomaudiopublishvolume__return_values"
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
      id: "api_irtcengine_createcustomaudiotrack"
    }), `
`, _jsx(_components.h2, {
      id: "createcustomaudiotrack",
      children: "createCustomAudioTrack"
    }), `
`, _jsx(_components.p, {
      children: "创建一个自定义音频轨道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createcustomaudiotrack__prototype"
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
              children: " createCustomAudioTrack"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.AudioTrackType trackType, AudioTrackConfig config)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createcustomaudiotrack__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以通过以下步骤发布自定义音频源："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "调用该方法创建一个自定义音频轨道，并获取音频轨道 ID。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 publishCustomAudioTrackId 设置为步骤 1 中获取的音频轨道 ID，并将 publishCustomAudioTrack 设置为 true。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "调用 pushExternalAudioFrame，并将 trackId 设置为步骤 2 中的音频轨道 ID，即可在频道中发布对应的自定义音频源。"
        }), `
`, _jsxs(CalloutContainer, {
          type: "info",
          children: [_jsx(CalloutTitle, {
            children: "注"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "该方法需要在加入频道前调用。"
            })
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createcustomaudiotrack__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "tracktype",
      children: _jsx(_components.code, {
        children: "trackType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自定义音频轨道的类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audiotracktype",
        children: "AudioTrackType"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果该参数设置为 ", _jsx(_components.code, {
            children: "AUDIO_TRACK_DIRECT"
          }), "，则在调用 ", _jsx(_components.code, {
            children: "joinChannel"
          }), " 加入频道时，必须将 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
            children: "ChannelMediaOptions"
          }), " 中的 ", _jsx(_components.code, {
            children: "publishMicrophoneTrack"
          }), " 设置为 false，否则加入频道会失败并返回错误码 -2。"]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自定义音频轨道的配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audiotrackconfig",
        children: "AudioTrackConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createcustomaudiotrack__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回音频轨道 ID，作为该音频轨道的唯一标识。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 0xffffffff。"
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
      id: "api_irtcengine_destroycustomaudiotrack"
    }), `
`, _jsx(_components.h2, {
      id: "destroycustomaudiotrack",
      children: "destroyCustomAudioTrack"
    }), `
`, _jsx(_components.p, {
      children: "销毁指定的音频轨道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroycustomaudiotrack__prototype"
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
              children: " destroyCustomAudioTrack"
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
              children: " trackId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroycustomaudiotrack__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroycustomaudiotrack__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "trackid-2",
      children: _jsx(_components.code, {
        children: "trackId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
        children: "createCustomAudioTrack"
      }), " 中返回的自定义音频轨道 ID。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroycustomaudiotrack__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecustomaudiolocalplayback"
    }), `
`, _jsx(_components.h2, {
      id: "enablecustomaudiolocalplayback",
      children: "enableCustomAudioLocalPlayback"
    }), `
`, _jsx(_components.p, {
      children: "设置是否启用外部音频源的本地播放。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecustomaudiolocalplayback__prototype"
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
              children: " enableCustomAudioLocalPlayback"
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
              children: " trackId, "
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
              children: " enabled);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecustomaudiolocalplayback__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_adjustcustomaudioplayoutvolume",
        children: "adjustCustomAudioPlayoutVolume"
      }), " 方法调整自定义音频轨道的本地播放音量。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请确保在调用该方法前，已通过调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
            children: "createCustomAudioTrack"
          }), " 创建自定义音频轨道。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecustomaudiolocalplayback__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "trackid-3",
      children: _jsx(_components.code, {
        children: "trackId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频轨道 ID，需设置为 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
        children: "createCustomAudioTrack"
      }), " 返回的自定义音频轨道 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "enabled",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否播放外部音频源："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：播放外部音频源。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不播放外部音频源。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablecustomaudiolocalplayback__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe"
    }), `
`, _jsx(_components.h2, {
      id: "pullplaybackaudioframe-12",
      children: "pullPlaybackAudioFrame [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "拉取远端混音后的音频数据用于播放。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe__prototype"
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
              children: " pullPlaybackAudioFrame"
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
              children: "byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] data, "
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
              children: " lengthInByte);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法前，请先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink",
        children: "setExternalAudioSink"
      }), " 并设置 ", _jsx(_components.code, {
        children: "enabled"
      }), " 为 true，以启用外部音频渲染。"]
    }), `
`, _jsxs(_components.p, {
      children: ["注： ", _jsx(_components.code, {
        children: "pullPlaybackAudioFrame"
      }), " 方法和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
        children: "onPlaybackAudioFrame"
      }), " 回调都可用于获取远端混音后的音频数据。启用外部音频渲染（调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink",
        children: "setExternalAudioSink"
      }), " ）后，无法再通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
        children: "onPlaybackAudioFrame"
      }), " 回调获取数据。请根据实际业务需求选择使用 ", _jsx(_components.code, {
        children: "pullPlaybackAudioFrame"
      }), " 方法或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
        children: "onPlaybackAudioFrame"
      }), " 回调。两者区别如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 pullPlaybackAudioFrame 方法后，App 会自动从 SDK 拉取音频数据。通过设置音频数据参数，SDK 会调整帧缓冲区以帮助 App 处理延迟，有效避免音频播放抖动。"
      }), `
`, _jsx(_components.li, {
        children: "注册 onPlaybackAudioFrame 回调后，SDK 会通过回调将音频数据发送给 App。若处理音频帧存在延迟，可能会导致音频抖动。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["该方法仅用于获取远端混音后的音频数据。如需获取采集、播放等其他音频处理阶段的数据，可通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver",
        children: "registerAudioFrameObserver"
      }), " 注册相应的回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法需要在加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "data",
      children: _jsx(_components.code, {
        children: "data"
      })
    }), `
`, _jsx(_components.p, {
      children: "输出参数，要拉取的远端音频数据。"
    }), `
`, _jsx(_components.h4, {
      id: "lengthinbyte",
      children: _jsx(_components.code, {
        children: "lengthInByte"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["数据长度（字节）。该值与音频时长，以及在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink",
        children: "setExternalAudioSink"
      }), " 中设置的 ", _jsx(_components.code, {
        children: "sampleRate"
      }), " 和 ", _jsx(_components.code, {
        children: "channels"
      }), " 参数有关。计算公式为： ", _jsx(_components.code, {
        children: "lengthInByte"
      }), " = ", _jsx(_components.code, {
        children: "sampleRate"
      }), " / 1000 × 2 × ", _jsx(_components.code, {
        children: "channels"
      }), " × 音频时长（毫秒）。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe2"
    }), `
`, _jsx(_components.h2, {
      id: "pullplaybackaudioframe-22",
      children: "pullPlaybackAudioFrame [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "拉取远端音频数据。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe2__prototype"
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
              children: " pullPlaybackAudioFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ByteBuffer data, "
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
              children: " lengthInByte);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用该方法之前，你需要调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink",
        children: "setExternalAudioSink"
      }), " 方法，并将 ", _jsx(_components.code, {
        children: "enabled"
      }), " 设置为 true，以启用并设置外部音频播放。调用该方法成功后，App 会拉取解码并混音后的音频数据用于播放。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法需要在加入频道后调用。"
      }), `
`, _jsxs(_components.li, {
        children: ["该方法与 onPlaybackAudioFrame 回调的区别如下：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "onPlaybackAudioFrame：SDK 通过该回调将音频数据发送给 App。若 App 处理音频帧存在延迟，可能会导致音频抖动。"
          }), `
`, _jsx(_components.li, {
            children: "pullPlaybackAudioFrame：App 主动拉取远端音频数据。设置音频参数后，SDK 会调整帧缓冲区，避免外部音频播放中因抖动引发的问题。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "data-1",
      children: _jsx(_components.code, {
        children: "data"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于接收拉取的远端音频数据。详见 ", _jsx(_components.code, {
        children: "ByteBuffer"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "lengthinbyte-1",
      children: _jsx(_components.code, {
        children: "lengthInByte"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["远端音频数据的字节长度。该值与音频时长，以及在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_setexternalaudiosink",
        children: "setExternalAudioSink"
      }), " 中设置的 ", _jsx(_components.code, {
        children: "sampleRate"
      }), " 和 ", _jsx(_components.code, {
        children: "channels"
      }), " 参数有关。 ", _jsx(_components.code, {
        children: "lengthInByte"
      }), " = ", _jsx(_components.code, {
        children: "sampleRate"
      }), " / 1000 × 2 × ", _jsx(_components.code, {
        children: "channels"
      }), " × 音频时长（毫秒）。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pullaudioframe2__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushaudioframe2"
    }), `
`, _jsx(_components.h2, {
      id: "pushexternalaudioframe",
      children: "pushExternalAudioFrame"
    }), `
`, _jsx(_components.p, {
      children: "将外部音频帧推送到 SDK。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushaudioframe2__prototype"
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
              children: " pushExternalAudioFrame"
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
              children: "byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] data, "
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
              children: " timestamp, "
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
              children: " sampleRate, "
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
              children: " channels, Constants.BytesPerSample bytesPerSample, "
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
              children: " trackId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushaudioframe2__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法前，请按以下顺序操作："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 createCustomAudioTrack 创建自定义音频轨道，并获取音频轨道 ID。"
      }), `
`, _jsx(_components.li, {
        children: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 publishCustomAudioTrackId 设置为要发布的音频轨道 ID，并将 publishCustomAudioTrack 设置为 true。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushaudioframe2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在调用该方法推送外部音频数据前，请先完成以下步骤："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 createCustomAudioTrack 创建自定义音频轨道并获取音频轨道 ID。"
      }), `
`, _jsx(_components.li, {
        children: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 publishCustomAudioTrackId 设置为要发布的音频轨道 ID，并将 publishCustomAudioTrack 设置为 true。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushaudioframe2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "data-2",
      children: _jsx(_components.code, {
        children: "data"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频数据。"
    }), `
`, _jsx(_components.h4, {
      id: "timestamp",
      children: _jsx(_components.code, {
        children: "timestamp"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频帧的时间戳（毫秒）。该参数为必填项，可用于还原采集音频帧的顺序，或在涉及视频的场景中（包括使用外部视频源的场景）实现音视频同步。"
    }), `
`, _jsx(_components.h4, {
      id: "samplerate",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频源的采样率（Hz），可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "8000"
      }), `
`, _jsx(_components.li, {
        children: "16000"
      }), `
`, _jsx(_components.li, {
        children: "32000"
      }), `
`, _jsx(_components.li, {
        children: "44100"
      }), `
`, _jsx(_components.li, {
        children: "48000。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channels",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频源的声道数，可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "bytespersample",
      children: _jsx(_components.code, {
        children: "bytesPerSample"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个采样点的字节数。"
    }), `
`, _jsx(_components.h4, {
      id: "trackid-4",
      children: _jsx(_components.code, {
        children: "trackId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频轨道 ID。请设置为 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
        children: "createCustomAudioTrack"
      }), " 返回的自定义音频轨道 ID。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushaudioframe2__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosink"
    }), `
`, _jsx(_components.h2, {
      id: "setexternalaudiosink",
      children: "setExternalAudioSink"
    }), `
`, _jsx(_components.p, {
      children: "设置外部音频渲染器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosink__prototype"
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
              children: " setExternalAudioSink"
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
              children: " enabled, "
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
              children: " sampleRate, "
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
              children: " channels);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosink__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["启用外部音频渲染器后，你可以调用 ", _jsx(_components.code, {
        children: "pullPlaybackAudioFrame"
      }), " 拉取远端音频帧，应用可以处理远端音频，并使用你希望的音效进行播放。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["启用外部音频渲染器后，应用将无法从 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
            children: "onPlaybackAudioFrame"
          }), " 回调中获取任何音频数据。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosink__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于需要使用外部音频数据进行播放的场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosink__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosink__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-1",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用外部音频渲染器："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用外部音频渲染器。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭外部音频渲染器。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplerate-1",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频渲染器的采样率（Hz），可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "16000"
      }), `
`, _jsx(_components.li, {
        children: "32000"
      }), `
`, _jsx(_components.li, {
        children: "44100"
      }), `
`, _jsx(_components.li, {
        children: "48000"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channels-1",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频渲染器的声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosink__return_values"
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
      id: "api_irtcengine_setexternalaudiosource"
    }), `
`, _jsx(_components.h2, {
      id: "setexternalaudiosource-12",
      children: "setExternalAudioSource [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置外部音频源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosource__prototype"
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
              children: " setExternalAudioSource"
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
              children: " enabled, "
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
              children: " sampleRate, "
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
              children: " channels);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosource__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
        children: "createCustomAudioTrack"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 和 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 之前调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosource__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-2",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用外部音频源："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用外部音频源。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）禁用外部音频源。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplerate-2",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频源的采样率（Hz），可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "8000"
      }), `
`, _jsx(_components.li, {
        children: "16000"
      }), `
`, _jsx(_components.li, {
        children: "32000"
      }), `
`, _jsx(_components.li, {
        children: "44100"
      }), `
`, _jsx(_components.li, {
        children: "48000。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channels-2",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频源的声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosource__return_values"
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
      id: "api_irtcengine_setexternalaudiosource2"
    }), `
`, _jsx(_components.h2, {
      id: "setexternalaudiosource-22",
      children: "setExternalAudioSource [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置外部音频源参数。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosource2__prototype"
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
              children: " setExternalAudioSource"
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
              children: " enabled, "
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
              children: " sampleRate, "
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
              children: " channels, "
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
              children: " localPlayback, "
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
              children: " publish);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosource2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
        children: "createCustomAudioTrack"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosource2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosource2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-3",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用外部音频源："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用外部音频源。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不启用外部音频源。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplerate-3",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频源的采样率（Hz），可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "8000"
      }), `
`, _jsx(_components.li, {
        children: "16000"
      }), `
`, _jsx(_components.li, {
        children: "32000"
      }), `
`, _jsx(_components.li, {
        children: "44100"
      }), `
`, _jsx(_components.li, {
        children: "48000。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channels-3",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频源的声道数，可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "localplayback",
      children: _jsx(_components.code, {
        children: "localPlayback"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否播放外部音频源："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：播放外部音频源。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不播放外部音频源。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "publish",
      children: _jsx(_components.code, {
        children: "publish"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否向远端用户发布音频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）发布音频到远端用户。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布音频到远端用户。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalaudiosource2__return_values"
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
