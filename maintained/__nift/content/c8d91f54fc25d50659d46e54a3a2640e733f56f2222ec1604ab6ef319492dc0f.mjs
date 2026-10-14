import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "原始音频数据",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_raw" />

<a id="api_iaudioframeobserver_getearmonitoringaudioparams" />

## getEarMonitoringAudioParams [#getearmonitoringaudioparams]

onEarMonitoringAudioFrame 回调的音频格式设置方法。

<a id="api_iaudioframeobserver_getearmonitoringaudioparams__prototype" />

\`\`\`java
@CalledByNative public abstract AudioParams getEarMonitoringAudioParams();
\`\`\`

<a id="api_iaudioframeobserver_getearmonitoringaudioparams__detailed_desc" />

调用 [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver) 注册音频帧观察者时，需要实现该回调。SDK 会触发该回调，你可以在该回调的返回值中设置音频格式。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    SDK 会根据你在返回值中设置的采样间隔计算公式触发 [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe) 回调。采样间隔（秒） = \`samplePerCall\` /（\`sampleRate\` × \`channel\` ）。请确保采样间隔 ≥ 0.01 秒。
  </CalloutDescription>
</CalloutContainer>

<a id="api_iaudioframeobserver_getearmonitoringaudioparams__return_values" />

### 返回值 [#返回值]

耳返音频数据格式，详见 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams)。

### 所属接口类 [#所属接口类]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)

<a id="api_iaudioframeobserver_getmixedaudioparams" />

## getMixedAudioParams [#getmixedaudioparams]

设置 onMixedAudioFrame 回调的音频格式。

<a id="api_iaudioframeobserver_getmixedaudioparams__prototype" />

\`\`\`java
@CalledByNative public abstract AudioParams getMixedAudioParams();
\`\`\`

<a id="api_iaudioframeobserver_getmixedaudioparams__detailed_desc" />

调用 [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver) 注册音频帧观察者时，需要实现该回调。成功注册音频帧观察者后，SDK 会触发该回调，你可以在该回调的返回值中设置音频格式。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    SDK 会根据你在返回值中设置的采样间隔计算公式触发 [onMixedAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe) 回调。采样间隔（秒） = \`samplePerCall\` /（\`sampleRate\` × \`channel\` ）。确保采样间隔 ≥ 0.01 秒。
  </CalloutDescription>
</CalloutContainer>

<a id="api_iaudioframeobserver_getmixedaudioparams__return_values" />

### 返回值 [#返回值-1]

方法调用成功，返回 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams) 对象。详见 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams)。

### 所属接口类 [#所属接口类-1]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)

<a id="api_iaudioframeobserver_getobservedaudioframeposition" />

## getObservedAudioFramePosition [#getobservedaudioframeposition]

设置音频数据观察位置。

<a id="api_iaudioframeobserver_getobservedaudioframeposition__prototype" />

\`\`\`java
@CalledByNative public abstract int getObservedAudioFramePosition();
\`\`\`

<a id="api_iaudioframeobserver_getobservedaudioframeposition__detailed_desc" />

成功注册音频数据观察器后，SDK 会在每个特定的音频帧处理节点调用该回调，以判断是否触发以下回调：

* onRecordAudioFrame
* onPlaybackAudioFrame
* onPlaybackAudioFrameBeforeMixing
* onMixedAudioFrame
* onEarMonitoringAudioFrame

你可以根据场景需求，通过修改 [getObservedAudioFramePosition](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition) 的返回值设置需要观察的一个或多个位置。 当需要观察多个位置时，需使用 |（或运算符）。为节省系统资源，建议减少观察的帧位置数量。

<a id="api_iaudioframeobserver_getobservedaudioframeposition__return_values" />

### 返回值 [#返回值-2]

返回一个位掩码，用于设置观察位置，具体取值如下：

* POSITION\\_PLAYBACK （0x0001）：可观察所有远端用户混音后的播放音频，对应 onPlaybackAudioFrame 回调。
* POSITION\\_RECORD （0x0002）：可观察本地用户采集的音频，对应 onRecordAudioFrame 回调。
* POSITION\\_MIXED （0x0004）：可观察本地用户与所有远端用户混音后的播放音频，对应 onMixedAudioFrame 回调。
* POSITION\\_BEFORE\\_MIXING （0x0008）：可观察单个远端用户混音前的音频，对应 onPlaybackAudioFrameBeforeMixing 回调。
* POSITION\\_EAR\\_MONITORING （0x0010）：可观察本地用户的耳返音频，对应 onEarMonitoringAudioFrame 回调。

### 所属接口类 [#所属接口类-2]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)

<a id="api_iaudioframeobserver_getplaybackaudioparams" />

## getPlaybackAudioParams [#getplaybackaudioparams]

onPlaybackAudioFrame 回调的音频格式设置方法。

<a id="api_iaudioframeobserver_getplaybackaudioparams__prototype" />

\`\`\`java
public abstract AudioParams getPlaybackAudioParams()
\`\`\`

<a id="api_iaudioframeobserver_getplaybackaudioparams__detailed_desc" />

你需要在调用 [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver) 方法时注册回调。在成功注册音频观测器后，SDK 会触发该回调。你可以在该回调的返回值中设置音频格式。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    SDK 会根据你在返回值中设置的 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams) 计算采样间隔，并以此触发 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe) 回调。采样间隔的计算公式为：采样间隔（秒） = \`samplePerCall\` /（\`sampleRate\` × \`channel\` ）。确保采样间隔 ≥ 0.01 秒。
  </CalloutDescription>
</CalloutContainer>

<a id="api_iaudioframeobserver_getplaybackaudioparams__return_values" />

### 返回值 [#返回值-3]

方法调用成功，返回 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams) 对象。详见 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams)。

### 所属接口类 [#所属接口类-3]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)

<a id="api_iaudioframeobserver_getrecordaudioparams" />

## getRecordAudioParams [#getrecordaudioparams]

设置 onRecordAudioFrame 回调的音频格式。

<a id="api_iaudioframeobserver_getrecordaudioparams__prototype" />

\`\`\`java
@CalledByNative public abstract AudioParams getRecordAudioParams();
\`\`\`

<a id="api_iaudioframeobserver_getrecordaudioparams__detailed_desc" />

调用 [registerAudioFrameObserver](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver) 注册回调后，SDK 会触发该回调。你可以在该回调的返回值中设置音频格式。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    SDK 会根据你在返回值中设置的 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams) 计算采样间隔并触发 [onRecordAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe) 回调。采样间隔（秒） = \`samplePerCall\` /（\`sampleRate\` × \`channel\` ）。请确保采样间隔 ≥ 0.01 秒。
  </CalloutDescription>
</CalloutContainer>

<a id="api_iaudioframeobserver_getrecordaudioparams__return_values" />

### 返回值 [#返回值-4]

方法调用成功，返回 [AudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams) 对象。

### 所属接口类 [#所属接口类-4]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)

<a id="api_irtcengine_registeraudioframeobserver" />

## registerAudioFrameObserver [#registeraudioframeobserver]

注册音频帧观测器对象。

<a id="api_irtcengine_registeraudioframeobserver__prototype" />

\`\`\`java
public abstract int registerAudioFrameObserver(IAudioFrameObserver observer);
\`\`\`

<a id="api_irtcengine_registeraudioframeobserver__detailed_desc" />

调用该方法注册音频帧观测器对象后，SDK 会触发 [onMixedAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe)、 [onRecordAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe)、 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe)、 [onPlaybackAudioFrameBeforeMixing](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing) 或 [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe) 回调。

<a id="api_irtcengine_registeraudioframeobserver__timing" />

### 调用时机 [#调用时机]

在加入频道前调用此方法。

<a id="api_irtcengine_registeraudioframeobserver__related" />

### 相关回调 [#相关回调]

相关回调： [onMixedAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe)、 [onRecordAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe)、 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe)、 [onPlaybackAudioFrameBeforeMixing](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing)、 [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe)。

<a id="api_irtcengine_registeraudioframeobserver__parameters" />

### 参数 [#参数]

#### \`observer\` [#observer]

音频帧观测器实例。详见 [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)。设置为 \`null\` 可释放该实例。建议在收到 [onLeaveChannel](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onleavechannel) 回调后调用此方法释放音频帧观测器对象。

<a id="api_irtcengine_registeraudioframeobserver__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setearmonitoringaudioframeparameters" />

## setEarMonitoringAudioFrameParameters [#setearmonitoringaudioframeparameters]

设置耳返音频数据格式。

<a id="api_irtcengine_setearmonitoringaudioframeparameters__prototype" />

\`\`\`java
public abstract int setEarMonitoringAudioFrameParameters(int sampleRate, int channel, int mode, int samplesPerCall);
\`\`\`

<a id="api_irtcengine_setearmonitoringaudioframeparameters__detailed_desc" />

该方法用于设置 [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe) 回调中报告的耳返音频数据格式。

注：

* 在调用该方法前，你需要先调用 enableInEarMonitoring 方法，并将 includeAudioFilters 设置为 EAR\\_MONITORING\\_FILTER\\_BUILT\\_IN\\_AUDIO\\_FILTERS 或 EAR\\_MONITORING\\_FILTER\\_NOISE\\_SUPPRESSION。
* SDK 会根据该方法中设置的 samplesPerCall、 sampleRate 和 channel 参数计算采样间隔。采样间隔（秒）= samplesPerCall /（sampleRate × channel ）。请确保采样间隔 ≥ 0.01 秒。SDK 会根据采样间隔触发 onEarMonitoringAudioFrame 回调。

<a id="api_irtcengine_setearmonitoringaudioframeparameters__parameters" />

### 参数 [#参数-1]

#### \`sampleRate\` [#samplerate]

在 [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe) 回调中报告的音频采样率。可设置为 8000、16000、32000、44100 或 48000 Hz。

#### \`channel\` [#channel]

在 [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe) 回调中报告的音频通道数：

* 1：单声道。
* 2：立体声。

#### \`mode\` [#mode]

音频帧的使用模式：

* RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_ONLY （0）：（默认）只读模式。例如，用户通过声网 SDK 获取数据后推送 RTMP 或 RTMPS 流。
* RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_WRITE （2）：读写模式。用户从 AudioFrame 中读取数据，修改后再播放。例如，用户有自己的音效处理模块并进行语音预处理，如变声。

#### \`samplesPerCall\` [#samplespercall]

在 [onEarMonitoringAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe) 回调中报告的每次调用采样数，例如媒体推流时为 1024。

<a id="api_irtcengine_setearmonitoringaudioframeparameters__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setmixedaudioframeparameters" />

## setMixedAudioFrameParameters [#setmixedaudioframeparameters]

设置混音后用于采集和播放的原始音频数据格式。

<a id="api_irtcengine_setmixedaudioframeparameters__prototype" />

\`\`\`java
public abstract int setMixedAudioFrameParameters(int sampleRate, int channel, int samplesPerCall);
\`\`\`

<a id="api_irtcengine_setmixedaudioframeparameters__detailed_desc" />

SDK 会根据该方法中设置的 \`samplesPerCall\`、 \`sampleRate\` 和 \`channel\` 参数计算采样间隔。 采样间隔（秒） = \`samplesPerCall\` / (\`sampleRate\` × \`channel\`)，请确保采样间隔 ≥ 0.01 秒。 SDK 会根据采样间隔触发 [onMixedAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe) 回调。

<a id="api_irtcengine_setmixedaudioframeparameters__timing" />

### 调用时机 [#调用时机-1]

请在加入频道前调用该方法。

<a id="api_irtcengine_setmixedaudioframeparameters__parameters" />

### 参数 [#参数-2]

#### \`sampleRate\` [#samplerate-1]

回调中返回的采样率，可设置为 8000、16000、32000、44100 或 48000 Hz。

#### \`channel\` [#channel-1]

音频声道数，可设置为以下取值：

* 1：单声道。
* 2：立体声。

#### \`samplesPerCall\` [#samplespercall-1]

每次回调的数据采样数，例如媒体推流时为 1024。

<a id="api_irtcengine_setmixedaudioframeparameters__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters" />

## setPlaybackAudioFrameBeforeMixingParameters \\[1/2] [#setplaybackaudioframebeforemixingparameters-12]

设置混音前原始音频播放数据的格式。

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters__prototype" />

\`\`\`java
public abstract int setPlaybackAudioFrameBeforeMixingParameters(int sampleRate, int channel);
\`\`\`

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters__detailed_desc" />

SDK 会根据采样间隔触发 [onPlaybackAudioFrameBeforeMixing](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing) 回调。

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters__timing" />

### 调用时机 [#调用时机-2]

请在加入频道前调用此方法。

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters__related" />

### 相关回调 [#相关回调-1]

相关回调： [onPlaybackAudioFrameBeforeMixing](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing)。

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters__parameters" />

### 参数 [#参数-3]

#### \`sampleRate\` [#samplerate-2]

回调中返回的采样率。可设置为以下值：

* 8000：8 kHz。
* 16000：16 kHz。
* 32000：32 kHz。
* 44100：44.1 kHz。
* 48000：48 kHz。

#### \`channel\` [#channel-2]

音频声道数。可设置为以下值：

* 1：单声道。
* 2：立体声。

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters1" />

## setPlaybackAudioFrameBeforeMixingParameters \\[2/2] [#setplaybackaudioframebeforemixingparameters-22]

设置 onPlaybackAudioFrameBeforeMixing 回调中返回音频数据的格式。

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters1__prototype" />

\`\`\`java
public abstract int setPlaybackAudioFrameBeforeMixingParameters(int sampleRate, int channel, int samplesPerCall);
\`\`\`

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters1__detailed_desc" />

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters1__parameters" />

### 参数 [#参数-4]

#### \`sampleRate\` [#samplerate-3]

设置 [onPlaybackAudioFrameBeforeMixing](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing) 回调中返回的采样率。可设置为以下值（单位：Hz）：

* 8000
* 16000
* 32000
* 44100
* 48000

#### \`channel\` [#channel-3]

设置 [onPlaybackAudioFrameBeforeMixing](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing) 回调中返回的音频数据的声道数。可设置为：

* 1：单声道。
* 2：立体声。

#### \`samplesPerCall\` [#samplespercall-2]

设置 [onMixedAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe) 回调中返回的音频数据的采样点数。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在 RTMP 推流场景中，建议设置为 1024。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setplaybackaudioframebeforemixingparameters1__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setplaybackaudioframeparameters" />

## setPlaybackAudioFrameParameters [#setplaybackaudioframeparameters]

设置原始音频播放数据的格式。

<a id="api_irtcengine_setplaybackaudioframeparameters__prototype" />

\`\`\`java
public abstract int setPlaybackAudioFrameParameters(int sampleRate, int channel, int mode, int samplesPerCall);
\`\`\`

<a id="api_irtcengine_setplaybackaudioframeparameters__detailed_desc" />

SDK 会根据 \`samplesPerCall\`、 \`sampleRate\` 和 \`channel\` 参数计算采样间隔。采样间隔（单位：秒） = \`samplesPerCall\` /（\`sampleRate\` × \`channel\` ）。请确保采样间隔 ≥ 0.01 秒。SDK 会根据采样间隔触发 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe) 回调。

<a id="api_irtcengine_setplaybackaudioframeparameters__timing" />

### 调用时机 [#调用时机-3]

在加入频道前调用此方法。

<a id="api_irtcengine_setplaybackaudioframeparameters__related" />

### 相关回调 [#相关回调-2]

该方法会根据采样间隔触发 [onPlaybackAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe) 回调。

<a id="api_irtcengine_setplaybackaudioframeparameters__parameters" />

### 参数 [#参数-5]

#### \`sampleRate\` [#samplerate-4]

回调中返回的采样率。可设置为 8000、16000、24000、32000、44100 或 48000 Hz。

#### \`channel\` [#channel-4]

音频声道数。可设置为：

* 1：单声道。
* 2：立体声。

#### \`mode\` [#mode-1]

音频帧的使用模式：

* RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_ONLY (0)：（默认）只读模式。例如，用户通过声网 SDK 获取数据后推送 RTMP 或 RTMPS 流。
* RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_WRITE (2)：读写模式。用户从 AudioFrame 中读取数据，修改后再播放。例如，用户有自己的音效处理模块并进行语音预处理，如变声。

#### \`samplesPerCall\` [#samplespercall-3]

每次调用返回的数据采样数，例如媒体推流时为 1024。

<a id="api_irtcengine_setplaybackaudioframeparameters__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-10]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setrecordingaudioframeparameters" />

## setRecordingAudioFrameParameters [#setrecordingaudioframeparameters]

设置采集的原始音频数据格式。

<a id="api_irtcengine_setrecordingaudioframeparameters__prototype" />

\`\`\`java
public abstract int setRecordingAudioFrameParameters(int sampleRate, int channel, int mode, int samplesPerCall);
\`\`\`

<a id="api_irtcengine_setrecordingaudioframeparameters__detailed_desc" />

SDK 会根据 \`samplesPerCall\`、 \`sampleRate\` 和 \`channel\` 参数计算采样间隔。采样间隔（单位：秒） = \`samplesPerCall\` /（\`sampleRate\` × \`channel\` ）。请确保采样间隔 ≥ 0.01 秒。SDK 会根据采样间隔触发 [onRecordAudioFrame](/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe) 回调。

<a id="api_irtcengine_setrecordingaudioframeparameters__timing" />

### 调用时机 [#调用时机-4]

请在加入频道前调用该方法。

<a id="api_irtcengine_setrecordingaudioframeparameters__parameters" />

### 参数 [#参数-6]

#### \`sampleRate\` [#samplerate-5]

回调中返回的采样率，可设置为 8000、16000、32000、44100 或 48000 Hz。

#### \`channel\` [#channel-5]

音频声道数，可设置为：

* 1：单声道。
* 2：立体声。

#### \`mode\` [#mode-2]

音频帧的使用模式：

* 0：只读模式。例如，用户通过声网 SDK 获取数据后推送 RTMP 或 RTMPS 流。
* 2：读写模式。用户从 AudioFrame 中读取数据并进行修改后播放。例如，用户有自己的音效处理模块并进行语音预处理，如变声。

#### \`samplesPerCall\` [#samplespercall-4]

每次调用的数据采样数，例如媒体推流时为 1024。

<a id="api_irtcengine_setrecordingaudioframeparameters__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-11]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_iaudioframeobserver_onearmonitoringaudioframe" />

## onEarMonitoringAudioFrame [#onearmonitoringaudioframe]

耳返音频帧回调。

<a id="callback_iaudioframeobserver_onearmonitoringaudioframe__prototype" />

\`\`\`java
public abstract boolean onEarMonitoringAudioFrame(int type, int samplesPerChannel, int bytesPerSample, int channels, int samplesPerSec, ByteBuffer buffer, long renderTimeMs, int avsync_type);
\`\`\`

<a id="callback_iaudioframeobserver_onearmonitoringaudioframe__detailed_desc" />

该回调用于获取耳返音频数据。为了确保获取的数据符合预期，声网建议你通过以下任一方式设置音频数据格式：

* 方法一：调用 setEarMonitoringAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据设置的参数计算采样间隔，并按该间隔触发 onEarMonitoringAudioFrame 回调。
* 方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 的返回值中设置音频数据格式。然后 SDK 会根据 getEarMonitoringAudioParams 的返回值计算采样间隔，并按该间隔触发 onEarMonitoringAudioFrame 回调。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    方法一的优先级高于方法二。如果使用方法一设置音频数据格式，则方法二的设置无效。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_iaudioframeobserver_onearmonitoringaudioframe__parameters" />

### 参数 [#参数-7]

#### \`type\` [#type]

音频帧类型。

#### \`samplesPerChannel\` [#samplesperchannel]

每个声道中的采样点数。

#### \`bytesPerSample\` [#bytespersample]

每个音频采样点的字节数。例如，每个 PCM 音频采样点通常占用 16 位（2 字节）。

#### \`channels\` [#channels]

声道数：

* 1：单声道。
* 2：立体声。若为立体声，数据为交错格式。

#### \`samplesPerSec\` [#samplespersec]

录音采样率（Hz）。

#### \`buffer\` [#buffer]

音频缓冲区。缓冲区大小 = \`samplesPerChannel\` × \`channels\` × \`bytesPerSample\`。详见 \`ByteBuffer\`。

#### \`renderTimeMs\` [#rendertimems]

外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用自定义视频源的场景）实现音视频帧同步。

#### \`avsync_type\` [#avsync_type]

预留参数。

<a id="callback_iaudioframeobserver_onearmonitoringaudioframe__return_values" />

### 返回值 [#返回值-12]

* true：回调处理成功。
* false：回调处理失败。

### 所属接口类 [#所属接口类-12]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)

<a id="callback_iaudioframeobserver_onmixedaudioframe" />

## onMixedAudioFrame [#onmixedaudioframe]

获取混合采集和播放的音频帧回调。

<a id="callback_iaudioframeobserver_onmixedaudioframe__prototype" />

\`\`\`java
public abstract boolean onMixedAudioFrame(String channelId, int type, int samplesPerChannel, int bytesPerSample, int channels, int samplesPerSec, ByteBuffer buffer, long renderTimeMs, int avsync_type);
\`\`\`

<a id="callback_iaudioframeobserver_onmixedaudioframe__detailed_desc" />

声网建议通过以下两种方式之一设置音频数据格式，以确保混合采集和播放音频帧的数据格式符合预期：

* 方法一：调用 setMixedAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据设置的参数计算采样间隔，并按照采样间隔触发该回调。
* 方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 回调的返回值中设置音频数据格式。SDK 会根据 getMixedAudioParams 回调的返回值计算采样间隔，并按照采样间隔触发该回调。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [setMixedAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setmixedaudioframeparameters) 的设置优先级高于 [getObservedAudioFramePosition](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition)。如果使用方法一设置音频数据格式，则方法二的设置无效。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_iaudioframeobserver_onmixedaudioframe__parameters" />

### 参数 [#参数-8]

#### \`channelId\` [#channelid]

频道 ID。

#### \`type\` [#type-1]

音频帧类型。

#### \`samplesPerChannel\` [#samplesperchannel-1]

每个声道的采样点数。

#### \`bytesPerSample\` [#bytespersample-1]

每个音频采样的字节数。例如，每个 PCM 音频采样通常占用 16 位（2 字节）。

#### \`channels\` [#channels-1]

声道数：

* 1：单声道。
* 2：立体声。使用立体声时，数据为交错格式。

#### \`samplesPerSec\` [#samplespersec-1]

录音采样率（Hz）。

#### \`buffer\` [#buffer-1]

音频缓冲区。缓冲区大小 = \`samplesPerChannel\` × \`channels\` × \`bytesPerSample\`。详见 \`ByteBuffer\`。

#### \`renderTimeMs\` [#rendertimems-1]

外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用外部视频源的场景）实现音视频帧同步。

#### \`avsync_type\` [#avsync_type-1]

预留参数。

<a id="callback_iaudioframeobserver_onmixedaudioframe__return_values" />

### 返回值 [#返回值-13]

* true：回调处理成功。
* false：回调处理失败。

### 所属接口类 [#所属接口类-13]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)

<a id="callback_iaudioframeobserver_onplaybackaudioframe" />

## onPlaybackAudioFrame [#onplaybackaudioframe]

获取用于播放的原始音频帧回调。

<a id="callback_iaudioframeobserver_onplaybackaudioframe__prototype" />

\`\`\`java
public abstract boolean onPlaybackAudioFrame(String channelId, int type, int samplesPerChannel, int bytesPerSample, int channels, int samplesPerSec, ByteBuffer buffer, long renderTimeMs, int avsync_type);
\`\`\`

<a id="callback_iaudioframeobserver_onplaybackaudioframe__detailed_desc" />

你可以通过以下两种方式之一设置音频数据格式：

* 方法一：调用 setPlaybackAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据设置的参数计算采样间隔，并按照采样间隔触发该回调。
* 方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 回调的返回值中设置音频数据格式。SDK 会根据 getPlaybackAudioParams 回调的返回值计算采样间隔，并按照采样间隔触发该回调。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [setPlaybackAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframeparameters) 的设置优先级高于 [getObservedAudioFramePosition](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition)。如果使用方法一设置音频数据格式，则方法二的设置无效。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_iaudioframeobserver_onplaybackaudioframe__parameters" />

### 参数 [#参数-9]

#### \`channelId\` [#channelid-1]

频道 ID。

#### \`type\` [#type-2]

音频帧类型。

#### \`samplesPerChannel\` [#samplesperchannel-2]

每个声道中的采样点数。

#### \`bytesPerSample\` [#bytespersample-2]

每个音频采样点的字节数。例如，每个 PCM 音频采样点通常占用 16 位（2 字节）。

#### \`channels\` [#channels-2]

声道数：

* 1：单声道。
* 2：立体声。若为立体声，数据为交错排列。

#### \`samplesPerSec\` [#samplespersec-2]

录音采样率（Hz）。

#### \`buffer\` [#buffer-2]

音频缓冲区。缓冲区大小 = \`samplesPerChannel\` × \`channels\` × \`bytesPerSample\`。

#### \`renderTimeMs\` [#rendertimems-2]

外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用外部视频源的场景）实现音视频帧同步。

#### \`avsync_type\` [#avsync_type-2]

预留参数。

<a id="callback_iaudioframeobserver_onplaybackaudioframe__return_values" />

### 返回值 [#返回值-14]

* true：回调处理成功。
* false：回调处理失败。

### 所属接口类 [#所属接口类-14]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)

<a id="callback_iaudioframeobserver_onplaybackaudioframebeforemixing" />

## onPlaybackAudioFrameBeforeMixing [#onplaybackaudioframebeforemixing]

获取已订阅远端用户混音前的音频帧回调。

<a id="callback_iaudioframeobserver_onplaybackaudioframebeforemixing__prototype" />

\`\`\`java
public abstract boolean onPlaybackAudioFrameBeforeMixing(String channelId, int uid, int type, int samplesPerChannel, int bytesPerSample, int channels, int samplesPerSec, ByteBuffer buffer, long renderTimeMs, int avsync_type, int rtpTimestamp, long presentationMs);
\`\`\`

<a id="callback_iaudioframeobserver_onplaybackaudioframebeforemixing__detailed_desc" />

<a id="callback_iaudioframeobserver_onplaybackaudioframebeforemixing__timing" />

### 触发时机 [#触发时机]

该回调在获取远端用户音频帧并在混音前触发。

<a id="callback_iaudioframeobserver_onplaybackaudioframebeforemixing__parameters" />

### 参数 [#参数-10]

#### \`channelId\` [#channelid-2]

频道 ID。

#### \`uid\` [#uid]

已订阅远端用户的用户 ID。

#### \`type\` [#type-3]

音频帧类型。

#### \`samplesPerChannel\` [#samplesperchannel-3]

每个声道的采样点数。

#### \`bytesPerSample\` [#bytespersample-3]

每个音频采样点的字节数。例如，每个 PCM 音频采样点通常为 16 位（2 字节）。

#### \`channels\` [#channels-3]

声道数：

* 1：单声道。
* 2：立体声。立体声数据为交错排列。

#### \`samplesPerSec\` [#samplespersec-3]

录音采样率（Hz）。

#### \`buffer\` [#buffer-3]

音频缓冲区。缓冲区大小 = \`samplesPerChannel\` × \`channels\` × \`bytesPerSample\`。

#### \`renderTimeMs\` [#rendertimems-3]

外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用自定义视频源的场景）实现音视频同步。

#### \`avsync_type\` [#avsync_type-3]

预留参数。

#### \`rtpTimestamp\` [#rtptimestamp]

RTP 时间戳。

#### \`presentationMs\` [#presentationms]

展示时间戳（毫秒）。

<a id="callback_iaudioframeobserver_onplaybackaudioframebeforemixing__return_values" />

### 返回值 [#返回值-15]

* true：处理成功。
* false：处理失败。

### 所属接口类 [#所属接口类-15]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)

<a id="callback_iaudioframeobserver_onrecordaudioframe" />

## onRecordAudioFrame [#onrecordaudioframe]

获取采集到的音频帧回调。

<a id="callback_iaudioframeobserver_onrecordaudioframe__prototype" />

\`\`\`java
public abstract boolean onRecordAudioFrame(String channelId, int type, int samplesPerChannel, int bytesPerSample, int channels, int samplesPerSec, ByteBuffer buffer, long renderTimeMs, int avsync_type);
\`\`\`

<a id="callback_iaudioframeobserver_onrecordaudioframe__detailed_desc" />

你可以通过以下两种方式之一设置音频数据格式：

* 方法一：调用 setRecordingAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据方法中设置的参数计算采样间隔，并按照采样间隔触发该回调。
* 方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 回调的返回值中设置音频数据格式。SDK 会根据 getRecordAudioParams 回调的返回值计算采样间隔，并按照采样间隔触发该回调。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [setRecordingAudioFrameParameters](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setrecordingaudioframeparameters) 的设置优先级高于 [getObservedAudioFramePosition](/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition)。如果使用方法一设置音频数据格式，则方法二的设置无效。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_iaudioframeobserver_onrecordaudioframe__parameters" />

### 参数 [#参数-11]

#### \`channelId\` [#channelid-3]

频道 ID。

#### \`type\` [#type-4]

音频帧类型。

#### \`samplesPerChannel\` [#samplesperchannel-4]

每个声道中的采样点数。

#### \`bytesPerSample\` [#bytespersample-4]

每个音频采样的字节数。例如，每个 PCM 音频采样通常占用 16 位（2 字节）。

#### \`channels\` [#channels-4]

声道数：

* 1：单声道。
* 2：立体声。如果使用立体声，数据为交错排列。

#### \`samplesPerSec\` [#samplespersec-4]

录音采样率（Hz）。

#### \`buffer\` [#buffer-4]

音频缓冲区。缓冲区大小 = \`samplesPerChannel\` × \`channels\` × \`bytesPerSample\`。

#### \`renderTimeMs\` [#rendertimems-4]

外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用外部视频源的场景）实现音视频帧同步。

#### \`avsync_type\` [#avsync_type-4]

预留参数。

<a id="callback_iaudioframeobserver_onrecordaudioframe__return_values" />

### 返回值 [#返回值-16]

* true：回调处理成功。
* false：回调处理失败。

### 所属接口类 [#所属接口类-16]

* [IAudioFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver)
`;
export let structuredData = {
  contents: [{
    heading: "getearmonitoringaudioparams",
    content: "onEarMonitoringAudioFrame 回调的音频格式设置方法。"
  }, {
    heading: "getearmonitoringaudioparams",
    content: "调用 registerAudioFrameObserver 注册音频帧观察者时，需要实现该回调。SDK 会触发该回调，你可以在该回调的返回值中设置音频格式。"
  }, {
    heading: "getearmonitoringaudioparams",
    content: "SDK 会根据你在返回值中设置的采样间隔计算公式触发 onEarMonitoringAudioFrame 回调。采样间隔（秒） = `samplePerCall` /（`sampleRate` × `channel` ）。请确保采样间隔 ≥ 0.01 秒。"
  }, {
    heading: "返回值",
    content: "耳返音频数据格式，详见 AudioParams。"
  }, {
    heading: "所属接口类",
    content: "IAudioFrameObserver"
  }, {
    heading: "getmixedaudioparams",
    content: "设置 onMixedAudioFrame 回调的音频格式。"
  }, {
    heading: "getmixedaudioparams",
    content: "调用 registerAudioFrameObserver 注册音频帧观察者时，需要实现该回调。成功注册音频帧观察者后，SDK 会触发该回调，你可以在该回调的返回值中设置音频格式。"
  }, {
    heading: "getmixedaudioparams",
    content: "SDK 会根据你在返回值中设置的采样间隔计算公式触发 onMixedAudioFrame 回调。采样间隔（秒） = `samplePerCall` /（`sampleRate` × `channel` ）。确保采样间隔 ≥ 0.01 秒。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回 AudioParams 对象。详见 AudioParams。"
  }, {
    heading: "所属接口类-1",
    content: "IAudioFrameObserver"
  }, {
    heading: "getobservedaudioframeposition",
    content: "设置音频数据观察位置。"
  }, {
    heading: "getobservedaudioframeposition",
    content: "成功注册音频数据观察器后，SDK 会在每个特定的音频帧处理节点调用该回调，以判断是否触发以下回调："
  }, {
    heading: "getobservedaudioframeposition",
    content: "onRecordAudioFrame"
  }, {
    heading: "getobservedaudioframeposition",
    content: "onPlaybackAudioFrame"
  }, {
    heading: "getobservedaudioframeposition",
    content: "onPlaybackAudioFrameBeforeMixing"
  }, {
    heading: "getobservedaudioframeposition",
    content: "onMixedAudioFrame"
  }, {
    heading: "getobservedaudioframeposition",
    content: "onEarMonitoringAudioFrame"
  }, {
    heading: "getobservedaudioframeposition",
    content: "你可以根据场景需求，通过修改 getObservedAudioFramePosition 的返回值设置需要观察的一个或多个位置。 当需要观察多个位置时，需使用 |（或运算符）。为节省系统资源，建议减少观察的帧位置数量。"
  }, {
    heading: "返回值-2",
    content: "返回一个位掩码，用于设置观察位置，具体取值如下："
  }, {
    heading: "返回值-2",
    content: "POSITION\\_PLAYBACK （0x0001）：可观察所有远端用户混音后的播放音频，对应 onPlaybackAudioFrame 回调。"
  }, {
    heading: "返回值-2",
    content: "POSITION\\_RECORD （0x0002）：可观察本地用户采集的音频，对应 onRecordAudioFrame 回调。"
  }, {
    heading: "返回值-2",
    content: "POSITION\\_MIXED （0x0004）：可观察本地用户与所有远端用户混音后的播放音频，对应 onMixedAudioFrame 回调。"
  }, {
    heading: "返回值-2",
    content: "POSITION\\_BEFORE\\_MIXING （0x0008）：可观察单个远端用户混音前的音频，对应 onPlaybackAudioFrameBeforeMixing 回调。"
  }, {
    heading: "返回值-2",
    content: "POSITION\\_EAR\\_MONITORING （0x0010）：可观察本地用户的耳返音频，对应 onEarMonitoringAudioFrame 回调。"
  }, {
    heading: "所属接口类-2",
    content: "IAudioFrameObserver"
  }, {
    heading: "getplaybackaudioparams",
    content: "onPlaybackAudioFrame 回调的音频格式设置方法。"
  }, {
    heading: "getplaybackaudioparams",
    content: "你需要在调用 registerAudioFrameObserver 方法时注册回调。在成功注册音频观测器后，SDK 会触发该回调。你可以在该回调的返回值中设置音频格式。"
  }, {
    heading: "getplaybackaudioparams",
    content: "SDK 会根据你在返回值中设置的 AudioParams 计算采样间隔，并以此触发 onPlaybackAudioFrame 回调。采样间隔的计算公式为：采样间隔（秒） = `samplePerCall` /（`sampleRate` × `channel` ）。确保采样间隔 ≥ 0.01 秒。"
  }, {
    heading: "返回值-3",
    content: "方法调用成功，返回 AudioParams 对象。详见 AudioParams。"
  }, {
    heading: "所属接口类-3",
    content: "IAudioFrameObserver"
  }, {
    heading: "getrecordaudioparams",
    content: "设置 onRecordAudioFrame 回调的音频格式。"
  }, {
    heading: "getrecordaudioparams",
    content: "调用 registerAudioFrameObserver 注册回调后，SDK 会触发该回调。你可以在该回调的返回值中设置音频格式。"
  }, {
    heading: "getrecordaudioparams",
    content: "SDK 会根据你在返回值中设置的 AudioParams 计算采样间隔并触发 onRecordAudioFrame 回调。采样间隔（秒） = `samplePerCall` /（`sampleRate` × `channel` ）。请确保采样间隔 ≥ 0.01 秒。"
  }, {
    heading: "返回值-4",
    content: "方法调用成功，返回 AudioParams 对象。"
  }, {
    heading: "所属接口类-4",
    content: "IAudioFrameObserver"
  }, {
    heading: "registeraudioframeobserver",
    content: "注册音频帧观测器对象。"
  }, {
    heading: "registeraudioframeobserver",
    content: "调用该方法注册音频帧观测器对象后，SDK 会触发 onMixedAudioFrame、 onRecordAudioFrame、 onPlaybackAudioFrame、 onPlaybackAudioFrameBeforeMixing 或 onEarMonitoringAudioFrame 回调。"
  }, {
    heading: "调用时机",
    content: "在加入频道前调用此方法。"
  }, {
    heading: "相关回调",
    content: "相关回调： onMixedAudioFrame、 onRecordAudioFrame、 onPlaybackAudioFrame、 onPlaybackAudioFrameBeforeMixing、 onEarMonitoringAudioFrame。"
  }, {
    heading: "observer",
    content: "音频帧观测器实例。详见 IAudioFrameObserver。设置为 `null` 可释放该实例。建议在收到 onLeaveChannel 回调后调用此方法释放音频帧观测器对象。"
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
    heading: "setearmonitoringaudioframeparameters",
    content: "设置耳返音频数据格式。"
  }, {
    heading: "setearmonitoringaudioframeparameters",
    content: "该方法用于设置 onEarMonitoringAudioFrame 回调中报告的耳返音频数据格式。"
  }, {
    heading: "setearmonitoringaudioframeparameters",
    content: "注："
  }, {
    heading: "setearmonitoringaudioframeparameters",
    content: "在调用该方法前，你需要先调用 enableInEarMonitoring 方法，并将 includeAudioFilters 设置为 EAR\\_MONITORING\\_FILTER\\_BUILT\\_IN\\_AUDIO\\_FILTERS 或 EAR\\_MONITORING\\_FILTER\\_NOISE\\_SUPPRESSION。"
  }, {
    heading: "setearmonitoringaudioframeparameters",
    content: "SDK 会根据该方法中设置的 samplesPerCall、 sampleRate 和 channel 参数计算采样间隔。采样间隔（秒）= samplesPerCall /（sampleRate × channel ）。请确保采样间隔 ≥ 0.01 秒。SDK 会根据采样间隔触发 onEarMonitoringAudioFrame 回调。"
  }, {
    heading: "samplerate",
    content: "在 onEarMonitoringAudioFrame 回调中报告的音频采样率。可设置为 8000、16000、32000、44100 或 48000 Hz。"
  }, {
    heading: "channel",
    content: "在 onEarMonitoringAudioFrame 回调中报告的音频通道数："
  }, {
    heading: "channel",
    content: "1：单声道。"
  }, {
    heading: "channel",
    content: "2：立体声。"
  }, {
    heading: "mode",
    content: "音频帧的使用模式："
  }, {
    heading: "mode",
    content: "RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_ONLY （0）：（默认）只读模式。例如，用户通过声网 SDK 获取数据后推送 RTMP 或 RTMPS 流。"
  }, {
    heading: "mode",
    content: "RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_WRITE （2）：读写模式。用户从 AudioFrame 中读取数据，修改后再播放。例如，用户有自己的音效处理模块并进行语音预处理，如变声。"
  }, {
    heading: "samplespercall",
    content: "在 onEarMonitoringAudioFrame 回调中报告的每次调用采样数，例如媒体推流时为 1024。"
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
    heading: "setmixedaudioframeparameters",
    content: "设置混音后用于采集和播放的原始音频数据格式。"
  }, {
    heading: "setmixedaudioframeparameters",
    content: "SDK 会根据该方法中设置的 `samplesPerCall`、 `sampleRate` 和 `channel` 参数计算采样间隔。 采样间隔（秒） = `samplesPerCall` / (`sampleRate` × `channel`)，请确保采样间隔 ≥ 0.01 秒。 SDK 会根据采样间隔触发 onMixedAudioFrame 回调。"
  }, {
    heading: "调用时机-1",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "samplerate-1",
    content: "回调中返回的采样率，可设置为 8000、16000、32000、44100 或 48000 Hz。"
  }, {
    heading: "channel-1",
    content: "音频声道数，可设置为以下取值："
  }, {
    heading: "channel-1",
    content: "1：单声道。"
  }, {
    heading: "channel-1",
    content: "2：立体声。"
  }, {
    heading: "samplespercall-1",
    content: "每次回调的数据采样数，例如媒体推流时为 1024。"
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
    heading: "setplaybackaudioframebeforemixingparameters-12",
    content: "设置混音前原始音频播放数据的格式。"
  }, {
    heading: "setplaybackaudioframebeforemixingparameters-12",
    content: "SDK 会根据采样间隔触发 onPlaybackAudioFrameBeforeMixing 回调。"
  }, {
    heading: "调用时机-2",
    content: "请在加入频道前调用此方法。"
  }, {
    heading: "相关回调-1",
    content: "相关回调： onPlaybackAudioFrameBeforeMixing。"
  }, {
    heading: "samplerate-2",
    content: "回调中返回的采样率。可设置为以下值："
  }, {
    heading: "samplerate-2",
    content: "8000：8 kHz。"
  }, {
    heading: "samplerate-2",
    content: "16000：16 kHz。"
  }, {
    heading: "samplerate-2",
    content: "32000：32 kHz。"
  }, {
    heading: "samplerate-2",
    content: "44100：44.1 kHz。"
  }, {
    heading: "samplerate-2",
    content: "48000：48 kHz。"
  }, {
    heading: "channel-2",
    content: "音频声道数。可设置为以下值："
  }, {
    heading: "channel-2",
    content: "1：单声道。"
  }, {
    heading: "channel-2",
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
    heading: "setplaybackaudioframebeforemixingparameters-22",
    content: "设置 onPlaybackAudioFrameBeforeMixing 回调中返回音频数据的格式。"
  }, {
    heading: "samplerate-3",
    content: "设置 onPlaybackAudioFrameBeforeMixing 回调中返回的采样率。可设置为以下值（单位：Hz）："
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
    content: "48000"
  }, {
    heading: "channel-3",
    content: "设置 onPlaybackAudioFrameBeforeMixing 回调中返回的音频数据的声道数。可设置为："
  }, {
    heading: "channel-3",
    content: "1：单声道。"
  }, {
    heading: "channel-3",
    content: "2：立体声。"
  }, {
    heading: "samplespercall-2",
    content: "设置 onMixedAudioFrame 回调中返回的音频数据的采样点数。"
  }, {
    heading: "samplespercall-2",
    content: "在 RTMP 推流场景中，建议设置为 1024。"
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
    heading: "setplaybackaudioframeparameters",
    content: "设置原始音频播放数据的格式。"
  }, {
    heading: "setplaybackaudioframeparameters",
    content: "SDK 会根据 `samplesPerCall`、 `sampleRate` 和 `channel` 参数计算采样间隔。采样间隔（单位：秒） = `samplesPerCall` /（`sampleRate` × `channel` ）。请确保采样间隔 ≥ 0.01 秒。SDK 会根据采样间隔触发 onPlaybackAudioFrame 回调。"
  }, {
    heading: "调用时机-3",
    content: "在加入频道前调用此方法。"
  }, {
    heading: "相关回调-2",
    content: "该方法会根据采样间隔触发 onPlaybackAudioFrame 回调。"
  }, {
    heading: "samplerate-4",
    content: "回调中返回的采样率。可设置为 8000、16000、24000、32000、44100 或 48000 Hz。"
  }, {
    heading: "channel-4",
    content: "音频声道数。可设置为："
  }, {
    heading: "channel-4",
    content: "1：单声道。"
  }, {
    heading: "channel-4",
    content: "2：立体声。"
  }, {
    heading: "mode-1",
    content: "音频帧的使用模式："
  }, {
    heading: "mode-1",
    content: "RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_ONLY (0)：（默认）只读模式。例如，用户通过声网 SDK 获取数据后推送 RTMP 或 RTMPS 流。"
  }, {
    heading: "mode-1",
    content: "RAW\\_AUDIO\\_FRAME\\_OP\\_MODE\\_READ\\_WRITE (2)：读写模式。用户从 AudioFrame 中读取数据，修改后再播放。例如，用户有自己的音效处理模块并进行语音预处理，如变声。"
  }, {
    heading: "samplespercall-3",
    content: "每次调用返回的数据采样数，例如媒体推流时为 1024。"
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
    heading: "setrecordingaudioframeparameters",
    content: "设置采集的原始音频数据格式。"
  }, {
    heading: "setrecordingaudioframeparameters",
    content: "SDK 会根据 `samplesPerCall`、 `sampleRate` 和 `channel` 参数计算采样间隔。采样间隔（单位：秒） = `samplesPerCall` /（`sampleRate` × `channel` ）。请确保采样间隔 ≥ 0.01 秒。SDK 会根据采样间隔触发 onRecordAudioFrame 回调。"
  }, {
    heading: "调用时机-4",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "samplerate-5",
    content: "回调中返回的采样率，可设置为 8000、16000、32000、44100 或 48000 Hz。"
  }, {
    heading: "channel-5",
    content: "音频声道数，可设置为："
  }, {
    heading: "channel-5",
    content: "1：单声道。"
  }, {
    heading: "channel-5",
    content: "2：立体声。"
  }, {
    heading: "mode-2",
    content: "音频帧的使用模式："
  }, {
    heading: "mode-2",
    content: "0：只读模式。例如，用户通过声网 SDK 获取数据后推送 RTMP 或 RTMPS 流。"
  }, {
    heading: "mode-2",
    content: "2：读写模式。用户从 AudioFrame 中读取数据并进行修改后播放。例如，用户有自己的音效处理模块并进行语音预处理，如变声。"
  }, {
    heading: "samplespercall-4",
    content: "每次调用的数据采样数，例如媒体推流时为 1024。"
  }, {
    heading: "返回值-11",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-11",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-11",
    content: "RtcEngine"
  }, {
    heading: "onearmonitoringaudioframe",
    content: "耳返音频帧回调。"
  }, {
    heading: "onearmonitoringaudioframe",
    content: "该回调用于获取耳返音频数据。为了确保获取的数据符合预期，声网建议你通过以下任一方式设置音频数据格式："
  }, {
    heading: "onearmonitoringaudioframe",
    content: "方法一：调用 setEarMonitoringAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据设置的参数计算采样间隔，并按该间隔触发 onEarMonitoringAudioFrame 回调。"
  }, {
    heading: "onearmonitoringaudioframe",
    content: "方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 的返回值中设置音频数据格式。然后 SDK 会根据 getEarMonitoringAudioParams 的返回值计算采样间隔，并按该间隔触发 onEarMonitoringAudioFrame 回调。"
  }, {
    heading: "onearmonitoringaudioframe",
    content: "方法一的优先级高于方法二。如果使用方法一设置音频数据格式，则方法二的设置无效。"
  }, {
    heading: "type",
    content: "音频帧类型。"
  }, {
    heading: "samplesperchannel",
    content: "每个声道中的采样点数。"
  }, {
    heading: "bytespersample",
    content: "每个音频采样点的字节数。例如，每个 PCM 音频采样点通常占用 16 位（2 字节）。"
  }, {
    heading: "channels",
    content: "声道数："
  }, {
    heading: "channels",
    content: "1：单声道。"
  }, {
    heading: "channels",
    content: "2：立体声。若为立体声，数据为交错格式。"
  }, {
    heading: "samplespersec",
    content: "录音采样率（Hz）。"
  }, {
    heading: "buffer",
    content: "音频缓冲区。缓冲区大小 = `samplesPerChannel` × `channels` × `bytesPerSample`。详见 `ByteBuffer`。"
  }, {
    heading: "rendertimems",
    content: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用自定义视频源的场景）实现音视频帧同步。"
  }, {
    heading: "avsync_type",
    content: "预留参数。"
  }, {
    heading: "返回值-12",
    content: "true：回调处理成功。"
  }, {
    heading: "返回值-12",
    content: "false：回调处理失败。"
  }, {
    heading: "所属接口类-12",
    content: "IAudioFrameObserver"
  }, {
    heading: "onmixedaudioframe",
    content: "获取混合采集和播放的音频帧回调。"
  }, {
    heading: "onmixedaudioframe",
    content: "声网建议通过以下两种方式之一设置音频数据格式，以确保混合采集和播放音频帧的数据格式符合预期："
  }, {
    heading: "onmixedaudioframe",
    content: "方法一：调用 setMixedAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据设置的参数计算采样间隔，并按照采样间隔触发该回调。"
  }, {
    heading: "onmixedaudioframe",
    content: "方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 回调的返回值中设置音频数据格式。SDK 会根据 getMixedAudioParams 回调的返回值计算采样间隔，并按照采样间隔触发该回调。"
  }, {
    heading: "onmixedaudioframe",
    content: "setMixedAudioFrameParameters 的设置优先级高于 getObservedAudioFramePosition。如果使用方法一设置音频数据格式，则方法二的设置无效。"
  }, {
    heading: "channelid",
    content: "频道 ID。"
  }, {
    heading: "type-1",
    content: "音频帧类型。"
  }, {
    heading: "samplesperchannel-1",
    content: "每个声道的采样点数。"
  }, {
    heading: "bytespersample-1",
    content: "每个音频采样的字节数。例如，每个 PCM 音频采样通常占用 16 位（2 字节）。"
  }, {
    heading: "channels-1",
    content: "声道数："
  }, {
    heading: "channels-1",
    content: "1：单声道。"
  }, {
    heading: "channels-1",
    content: "2：立体声。使用立体声时，数据为交错格式。"
  }, {
    heading: "samplespersec-1",
    content: "录音采样率（Hz）。"
  }, {
    heading: "buffer-1",
    content: "音频缓冲区。缓冲区大小 = `samplesPerChannel` × `channels` × `bytesPerSample`。详见 `ByteBuffer`。"
  }, {
    heading: "rendertimems-1",
    content: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用外部视频源的场景）实现音视频帧同步。"
  }, {
    heading: "avsync_type-1",
    content: "预留参数。"
  }, {
    heading: "返回值-13",
    content: "true：回调处理成功。"
  }, {
    heading: "返回值-13",
    content: "false：回调处理失败。"
  }, {
    heading: "所属接口类-13",
    content: "IAudioFrameObserver"
  }, {
    heading: "onplaybackaudioframe",
    content: "获取用于播放的原始音频帧回调。"
  }, {
    heading: "onplaybackaudioframe",
    content: "你可以通过以下两种方式之一设置音频数据格式："
  }, {
    heading: "onplaybackaudioframe",
    content: "方法一：调用 setPlaybackAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据设置的参数计算采样间隔，并按照采样间隔触发该回调。"
  }, {
    heading: "onplaybackaudioframe",
    content: "方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 回调的返回值中设置音频数据格式。SDK 会根据 getPlaybackAudioParams 回调的返回值计算采样间隔，并按照采样间隔触发该回调。"
  }, {
    heading: "onplaybackaudioframe",
    content: "setPlaybackAudioFrameParameters 的设置优先级高于 getObservedAudioFramePosition。如果使用方法一设置音频数据格式，则方法二的设置无效。"
  }, {
    heading: "channelid-1",
    content: "频道 ID。"
  }, {
    heading: "type-2",
    content: "音频帧类型。"
  }, {
    heading: "samplesperchannel-2",
    content: "每个声道中的采样点数。"
  }, {
    heading: "bytespersample-2",
    content: "每个音频采样点的字节数。例如，每个 PCM 音频采样点通常占用 16 位（2 字节）。"
  }, {
    heading: "channels-2",
    content: "声道数："
  }, {
    heading: "channels-2",
    content: "1：单声道。"
  }, {
    heading: "channels-2",
    content: "2：立体声。若为立体声，数据为交错排列。"
  }, {
    heading: "samplespersec-2",
    content: "录音采样率（Hz）。"
  }, {
    heading: "buffer-2",
    content: "音频缓冲区。缓冲区大小 = `samplesPerChannel` × `channels` × `bytesPerSample`。"
  }, {
    heading: "rendertimems-2",
    content: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用外部视频源的场景）实现音视频帧同步。"
  }, {
    heading: "avsync_type-2",
    content: "预留参数。"
  }, {
    heading: "返回值-14",
    content: "true：回调处理成功。"
  }, {
    heading: "返回值-14",
    content: "false：回调处理失败。"
  }, {
    heading: "所属接口类-14",
    content: "IAudioFrameObserver"
  }, {
    heading: "onplaybackaudioframebeforemixing",
    content: "获取已订阅远端用户混音前的音频帧回调。"
  }, {
    heading: "触发时机",
    content: "该回调在获取远端用户音频帧并在混音前触发。"
  }, {
    heading: "channelid-2",
    content: "频道 ID。"
  }, {
    heading: "uid",
    content: "已订阅远端用户的用户 ID。"
  }, {
    heading: "type-3",
    content: "音频帧类型。"
  }, {
    heading: "samplesperchannel-3",
    content: "每个声道的采样点数。"
  }, {
    heading: "bytespersample-3",
    content: "每个音频采样点的字节数。例如，每个 PCM 音频采样点通常为 16 位（2 字节）。"
  }, {
    heading: "channels-3",
    content: "声道数："
  }, {
    heading: "channels-3",
    content: "1：单声道。"
  }, {
    heading: "channels-3",
    content: "2：立体声。立体声数据为交错排列。"
  }, {
    heading: "samplespersec-3",
    content: "录音采样率（Hz）。"
  }, {
    heading: "buffer-3",
    content: "音频缓冲区。缓冲区大小 = `samplesPerChannel` × `channels` × `bytesPerSample`。"
  }, {
    heading: "rendertimems-3",
    content: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用自定义视频源的场景）实现音视频同步。"
  }, {
    heading: "avsync_type-3",
    content: "预留参数。"
  }, {
    heading: "rtptimestamp",
    content: "RTP 时间戳。"
  }, {
    heading: "presentationms",
    content: "展示时间戳（毫秒）。"
  }, {
    heading: "返回值-15",
    content: "true：处理成功。"
  }, {
    heading: "返回值-15",
    content: "false：处理失败。"
  }, {
    heading: "所属接口类-15",
    content: "IAudioFrameObserver"
  }, {
    heading: "onrecordaudioframe",
    content: "获取采集到的音频帧回调。"
  }, {
    heading: "onrecordaudioframe",
    content: "你可以通过以下两种方式之一设置音频数据格式："
  }, {
    heading: "onrecordaudioframe",
    content: "方法一：调用 setRecordingAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据方法中设置的参数计算采样间隔，并按照采样间隔触发该回调。"
  }, {
    heading: "onrecordaudioframe",
    content: "方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 回调的返回值中设置音频数据格式。SDK 会根据 getRecordAudioParams 回调的返回值计算采样间隔，并按照采样间隔触发该回调。"
  }, {
    heading: "onrecordaudioframe",
    content: "setRecordingAudioFrameParameters 的设置优先级高于 getObservedAudioFramePosition。如果使用方法一设置音频数据格式，则方法二的设置无效。"
  }, {
    heading: "channelid-3",
    content: "频道 ID。"
  }, {
    heading: "type-4",
    content: "音频帧类型。"
  }, {
    heading: "samplesperchannel-4",
    content: "每个声道中的采样点数。"
  }, {
    heading: "bytespersample-4",
    content: "每个音频采样的字节数。例如，每个 PCM 音频采样通常占用 16 位（2 字节）。"
  }, {
    heading: "channels-4",
    content: "声道数："
  }, {
    heading: "channels-4",
    content: "1：单声道。"
  }, {
    heading: "channels-4",
    content: "2：立体声。如果使用立体声，数据为交错排列。"
  }, {
    heading: "samplespersec-4",
    content: "录音采样率（Hz）。"
  }, {
    heading: "buffer-4",
    content: "音频缓冲区。缓冲区大小 = `samplesPerChannel` × `channels` × `bytesPerSample`。"
  }, {
    heading: "rendertimems-4",
    content: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用外部视频源的场景）实现音视频帧同步。"
  }, {
    heading: "avsync_type-4",
    content: "预留参数。"
  }, {
    heading: "返回值-16",
    content: "true：回调处理成功。"
  }, {
    heading: "返回值-16",
    content: "false：回调处理失败。"
  }, {
    heading: "所属接口类-16",
    content: "IAudioFrameObserver"
  }],
  headings: [{
    id: "getearmonitoringaudioparams",
    content: "getEarMonitoringAudioParams"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "getmixedaudioparams",
    content: "getMixedAudioParams"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "getobservedaudioframeposition",
    content: "getObservedAudioFramePosition"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "getplaybackaudioparams",
    content: "getPlaybackAudioParams"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "getrecordaudioparams",
    content: "getRecordAudioParams"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "registeraudioframeobserver",
    content: "registerAudioFrameObserver"
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
    id: "observer",
    content: "`observer`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "setearmonitoringaudioframeparameters",
    content: "setEarMonitoringAudioFrameParameters"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "samplerate",
    content: "`sampleRate`"
  }, {
    id: "channel",
    content: "`channel`"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "samplespercall",
    content: "`samplesPerCall`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "setmixedaudioframeparameters",
    content: "setMixedAudioFrameParameters"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "samplerate-1",
    content: "`sampleRate`"
  }, {
    id: "channel-1",
    content: "`channel`"
  }, {
    id: "samplespercall-1",
    content: "`samplesPerCall`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "setplaybackaudioframebeforemixingparameters-12",
    content: "setPlaybackAudioFrameBeforeMixingParameters [1/2]"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "samplerate-2",
    content: "`sampleRate`"
  }, {
    id: "channel-2",
    content: "`channel`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "setplaybackaudioframebeforemixingparameters-22",
    content: "setPlaybackAudioFrameBeforeMixingParameters [2/2]"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "samplerate-3",
    content: "`sampleRate`"
  }, {
    id: "channel-3",
    content: "`channel`"
  }, {
    id: "samplespercall-2",
    content: "`samplesPerCall`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "setplaybackaudioframeparameters",
    content: "setPlaybackAudioFrameParameters"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "相关回调-2",
    content: "相关回调"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "samplerate-4",
    content: "`sampleRate`"
  }, {
    id: "channel-4",
    content: "`channel`"
  }, {
    id: "mode-1",
    content: "`mode`"
  }, {
    id: "samplespercall-3",
    content: "`samplesPerCall`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "setrecordingaudioframeparameters",
    content: "setRecordingAudioFrameParameters"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "samplerate-5",
    content: "`sampleRate`"
  }, {
    id: "channel-5",
    content: "`channel`"
  }, {
    id: "mode-2",
    content: "`mode`"
  }, {
    id: "samplespercall-4",
    content: "`samplesPerCall`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "onearmonitoringaudioframe",
    content: "onEarMonitoringAudioFrame"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "type",
    content: "`type`"
  }, {
    id: "samplesperchannel",
    content: "`samplesPerChannel`"
  }, {
    id: "bytespersample",
    content: "`bytesPerSample`"
  }, {
    id: "channels",
    content: "`channels`"
  }, {
    id: "samplespersec",
    content: "`samplesPerSec`"
  }, {
    id: "buffer",
    content: "`buffer`"
  }, {
    id: "rendertimems",
    content: "`renderTimeMs`"
  }, {
    id: "avsync_type",
    content: "`avsync_type`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "onmixedaudioframe",
    content: "onMixedAudioFrame"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "channelid",
    content: "`channelId`"
  }, {
    id: "type-1",
    content: "`type`"
  }, {
    id: "samplesperchannel-1",
    content: "`samplesPerChannel`"
  }, {
    id: "bytespersample-1",
    content: "`bytesPerSample`"
  }, {
    id: "channels-1",
    content: "`channels`"
  }, {
    id: "samplespersec-1",
    content: "`samplesPerSec`"
  }, {
    id: "buffer-1",
    content: "`buffer`"
  }, {
    id: "rendertimems-1",
    content: "`renderTimeMs`"
  }, {
    id: "avsync_type-1",
    content: "`avsync_type`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "onplaybackaudioframe",
    content: "onPlaybackAudioFrame"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "channelid-1",
    content: "`channelId`"
  }, {
    id: "type-2",
    content: "`type`"
  }, {
    id: "samplesperchannel-2",
    content: "`samplesPerChannel`"
  }, {
    id: "bytespersample-2",
    content: "`bytesPerSample`"
  }, {
    id: "channels-2",
    content: "`channels`"
  }, {
    id: "samplespersec-2",
    content: "`samplesPerSec`"
  }, {
    id: "buffer-2",
    content: "`buffer`"
  }, {
    id: "rendertimems-2",
    content: "`renderTimeMs`"
  }, {
    id: "avsync_type-2",
    content: "`avsync_type`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "onplaybackaudioframebeforemixing",
    content: "onPlaybackAudioFrameBeforeMixing"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "channelid-2",
    content: "`channelId`"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "type-3",
    content: "`type`"
  }, {
    id: "samplesperchannel-3",
    content: "`samplesPerChannel`"
  }, {
    id: "bytespersample-3",
    content: "`bytesPerSample`"
  }, {
    id: "channels-3",
    content: "`channels`"
  }, {
    id: "samplespersec-3",
    content: "`samplesPerSec`"
  }, {
    id: "buffer-3",
    content: "`buffer`"
  }, {
    id: "rendertimems-3",
    content: "`renderTimeMs`"
  }, {
    id: "avsync_type-3",
    content: "`avsync_type`"
  }, {
    id: "rtptimestamp",
    content: "`rtpTimestamp`"
  }, {
    id: "presentationms",
    content: "`presentationMs`"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "onrecordaudioframe",
    content: "onRecordAudioFrame"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "channelid-3",
    content: "`channelId`"
  }, {
    id: "type-4",
    content: "`type`"
  }, {
    id: "samplesperchannel-4",
    content: "`samplesPerChannel`"
  }, {
    id: "bytespersample-4",
    content: "`bytesPerSample`"
  }, {
    id: "channels-4",
    content: "`channels`"
  }, {
    id: "samplespersec-4",
    content: "`samplesPerSec`"
  }, {
    id: "buffer-4",
    content: "`buffer`"
  }, {
    id: "rendertimems-4",
    content: "`renderTimeMs`"
  }, {
    id: "avsync_type-4",
    content: "`avsync_type`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#getearmonitoringaudioparams",
  title: _jsx(_Fragment, {
    children: "getEarMonitoringAudioParams"
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
  url: "#getmixedaudioparams",
  title: _jsx(_Fragment, {
    children: "getMixedAudioParams"
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
  url: "#getobservedaudioframeposition",
  title: _jsx(_Fragment, {
    children: "getObservedAudioFramePosition"
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
  url: "#getplaybackaudioparams",
  title: _jsx(_Fragment, {
    children: "getPlaybackAudioParams"
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
  url: "#getrecordaudioparams",
  title: _jsx(_Fragment, {
    children: "getRecordAudioParams"
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
  url: "#registeraudioframeobserver",
  title: _jsx(_Fragment, {
    children: "registerAudioFrameObserver"
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
  url: "#observer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "observer"
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
  url: "#setearmonitoringaudioframeparameters",
  title: _jsx(_Fragment, {
    children: "setEarMonitoringAudioFrameParameters"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#channel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channel"
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
  depth: 4,
  url: "#samplespercall",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerCall"
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
  url: "#setmixedaudioframeparameters",
  title: _jsx(_Fragment, {
    children: "setMixedAudioFrameParameters"
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
  url: "#samplerate-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 4,
  url: "#channel-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channel"
    })
  })
}, {
  depth: 4,
  url: "#samplespercall-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerCall"
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
  url: "#setplaybackaudioframebeforemixingparameters-12",
  title: _jsx(_Fragment, {
    children: "setPlaybackAudioFrameBeforeMixingParameters [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
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
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#channel-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channel"
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
  url: "#setplaybackaudioframebeforemixingparameters-22",
  title: _jsx(_Fragment, {
    children: "setPlaybackAudioFrameBeforeMixingParameters [2/2]"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#channel-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channel"
    })
  })
}, {
  depth: 4,
  url: "#samplespercall-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerCall"
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
  url: "#setplaybackaudioframeparameters",
  title: _jsx(_Fragment, {
    children: "setPlaybackAudioFrameParameters"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-2",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#samplerate-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 4,
  url: "#channel-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channel"
    })
  })
}, {
  depth: 4,
  url: "#mode-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mode"
    })
  })
}, {
  depth: 4,
  url: "#samplespercall-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerCall"
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
  url: "#setrecordingaudioframeparameters",
  title: _jsx(_Fragment, {
    children: "setRecordingAudioFrameParameters"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
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
  url: "#samplerate-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sampleRate"
    })
  })
}, {
  depth: 4,
  url: "#channel-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channel"
    })
  })
}, {
  depth: 4,
  url: "#mode-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mode"
    })
  })
}, {
  depth: 4,
  url: "#samplespercall-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerCall"
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
  url: "#onearmonitoringaudioframe",
  title: _jsx(_Fragment, {
    children: "onEarMonitoringAudioFrame"
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
  url: "#samplesperchannel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerChannel"
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
  url: "#channels",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
    })
  })
}, {
  depth: 4,
  url: "#samplespersec",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerSec"
    })
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
  url: "#rendertimems",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderTimeMs"
    })
  })
}, {
  depth: 4,
  url: "#avsync_type",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "avsync_type"
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
  url: "#onmixedaudioframe",
  title: _jsx(_Fragment, {
    children: "onMixedAudioFrame"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#channelid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelId"
    })
  })
}, {
  depth: 4,
  url: "#type-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
    })
  })
}, {
  depth: 4,
  url: "#samplesperchannel-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerChannel"
    })
  })
}, {
  depth: 4,
  url: "#bytespersample-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bytesPerSample"
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
  depth: 4,
  url: "#samplespersec-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerSec"
    })
  })
}, {
  depth: 4,
  url: "#buffer-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 4,
  url: "#rendertimems-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderTimeMs"
    })
  })
}, {
  depth: 4,
  url: "#avsync_type-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "avsync_type"
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
  url: "#onplaybackaudioframe",
  title: _jsx(_Fragment, {
    children: "onPlaybackAudioFrame"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#channelid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelId"
    })
  })
}, {
  depth: 4,
  url: "#type-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
    })
  })
}, {
  depth: 4,
  url: "#samplesperchannel-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerChannel"
    })
  })
}, {
  depth: 4,
  url: "#bytespersample-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bytesPerSample"
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
  depth: 4,
  url: "#samplespersec-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerSec"
    })
  })
}, {
  depth: 4,
  url: "#buffer-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 4,
  url: "#rendertimems-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderTimeMs"
    })
  })
}, {
  depth: 4,
  url: "#avsync_type-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "avsync_type"
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
  url: "#onplaybackaudioframebeforemixing",
  title: _jsx(_Fragment, {
    children: "onPlaybackAudioFrameBeforeMixing"
  })
}, {
  depth: 3,
  url: "#触发时机",
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
  url: "#channelid-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelId"
    })
  })
}, {
  depth: 4,
  url: "#uid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#type-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
    })
  })
}, {
  depth: 4,
  url: "#samplesperchannel-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerChannel"
    })
  })
}, {
  depth: 4,
  url: "#bytespersample-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bytesPerSample"
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
  url: "#samplespersec-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerSec"
    })
  })
}, {
  depth: 4,
  url: "#buffer-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 4,
  url: "#rendertimems-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderTimeMs"
    })
  })
}, {
  depth: 4,
  url: "#avsync_type-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "avsync_type"
    })
  })
}, {
  depth: 4,
  url: "#rtptimestamp",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rtpTimestamp"
    })
  })
}, {
  depth: 4,
  url: "#presentationms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "presentationMs"
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
  url: "#onrecordaudioframe",
  title: _jsx(_Fragment, {
    children: "onRecordAudioFrame"
  })
}, {
  depth: 3,
  url: "#参数-11",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#channelid-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelId"
    })
  })
}, {
  depth: 4,
  url: "#type-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
    })
  })
}, {
  depth: 4,
  url: "#samplesperchannel-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerChannel"
    })
  })
}, {
  depth: 4,
  url: "#bytespersample-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bytesPerSample"
    })
  })
}, {
  depth: 4,
  url: "#channels-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channels"
    })
  })
}, {
  depth: 4,
  url: "#samplespersec-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "samplesPerSec"
    })
  })
}, {
  depth: 4,
  url: "#buffer-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "buffer"
    })
  })
}, {
  depth: 4,
  url: "#rendertimems-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderTimeMs"
    })
  })
}, {
  depth: 4,
  url: "#avsync_type-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "avsync_type"
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
      id: "toc_audio_raw"
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getearmonitoringaudioparams"
    }), `
`, _jsx(_components.h2, {
      id: "getearmonitoringaudioparams",
      children: "getEarMonitoringAudioParams"
    }), `
`, _jsx(_components.p, {
      children: "onEarMonitoringAudioFrame 回调的音频格式设置方法。"
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getearmonitoringaudioparams__prototype"
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
              children: " public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " AudioParams "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getEarMonitoringAudioParams"
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
      id: "api_iaudioframeobserver_getearmonitoringaudioparams__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver",
        children: "registerAudioFrameObserver"
      }), " 注册音频帧观察者时，需要实现该回调。SDK 会触发该回调，你可以在该回调的返回值中设置音频格式。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["SDK 会根据你在返回值中设置的采样间隔计算公式触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
            children: "onEarMonitoringAudioFrame"
          }), " 回调。采样间隔（秒） = ", _jsx(_components.code, {
            children: "samplePerCall"
          }), " /（", _jsx(_components.code, {
            children: "sampleRate"
          }), " × ", _jsx(_components.code, {
            children: "channel"
          }), " ）。请确保采样间隔 ≥ 0.01 秒。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getearmonitoringaudioparams__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["耳返音频数据格式，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
        children: "AudioParams"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getmixedaudioparams"
    }), `
`, _jsx(_components.h2, {
      id: "getmixedaudioparams",
      children: "getMixedAudioParams"
    }), `
`, _jsx(_components.p, {
      children: "设置 onMixedAudioFrame 回调的音频格式。"
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getmixedaudioparams__prototype"
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
              children: " public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " AudioParams "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getMixedAudioParams"
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
      id: "api_iaudioframeobserver_getmixedaudioparams__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver",
        children: "registerAudioFrameObserver"
      }), " 注册音频帧观察者时，需要实现该回调。成功注册音频帧观察者后，SDK 会触发该回调，你可以在该回调的返回值中设置音频格式。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["SDK 会根据你在返回值中设置的采样间隔计算公式触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe",
            children: "onMixedAudioFrame"
          }), " 回调。采样间隔（秒） = ", _jsx(_components.code, {
            children: "samplePerCall"
          }), " /（", _jsx(_components.code, {
            children: "sampleRate"
          }), " × ", _jsx(_components.code, {
            children: "channel"
          }), " ）。确保采样间隔 ≥ 0.01 秒。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getmixedaudioparams__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
        children: "AudioParams"
      }), " 对象。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
        children: "AudioParams"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getobservedaudioframeposition"
    }), `
`, _jsx(_components.h2, {
      id: "getobservedaudioframeposition",
      children: "getObservedAudioFramePosition"
    }), `
`, _jsx(_components.p, {
      children: "设置音频数据观察位置。"
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getobservedaudioframeposition__prototype"
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
              children: " public"
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
              children: " getObservedAudioFramePosition"
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
      id: "api_iaudioframeobserver_getobservedaudioframeposition__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "成功注册音频数据观察器后，SDK 会在每个特定的音频帧处理节点调用该回调，以判断是否触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "onRecordAudioFrame"
      }), `
`, _jsx(_components.li, {
        children: "onPlaybackAudioFrame"
      }), `
`, _jsx(_components.li, {
        children: "onPlaybackAudioFrameBeforeMixing"
      }), `
`, _jsx(_components.li, {
        children: "onMixedAudioFrame"
      }), `
`, _jsx(_components.li, {
        children: "onEarMonitoringAudioFrame"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["你可以根据场景需求，通过修改 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition",
        children: "getObservedAudioFramePosition"
      }), " 的返回值设置需要观察的一个或多个位置。 当需要观察多个位置时，需使用 |（或运算符）。为节省系统资源，建议减少观察的帧位置数量。"]
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getobservedaudioframeposition__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "返回一个位掩码，用于设置观察位置，具体取值如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "POSITION_PLAYBACK （0x0001）：可观察所有远端用户混音后的播放音频，对应 onPlaybackAudioFrame 回调。"
      }), `
`, _jsx(_components.li, {
        children: "POSITION_RECORD （0x0002）：可观察本地用户采集的音频，对应 onRecordAudioFrame 回调。"
      }), `
`, _jsx(_components.li, {
        children: "POSITION_MIXED （0x0004）：可观察本地用户与所有远端用户混音后的播放音频，对应 onMixedAudioFrame 回调。"
      }), `
`, _jsx(_components.li, {
        children: "POSITION_BEFORE_MIXING （0x0008）：可观察单个远端用户混音前的音频，对应 onPlaybackAudioFrameBeforeMixing 回调。"
      }), `
`, _jsx(_components.li, {
        children: "POSITION_EAR_MONITORING （0x0010）：可观察本地用户的耳返音频，对应 onEarMonitoringAudioFrame 回调。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getplaybackaudioparams"
    }), `
`, _jsx(_components.h2, {
      id: "getplaybackaudioparams",
      children: "getPlaybackAudioParams"
    }), `
`, _jsx(_components.p, {
      children: "onPlaybackAudioFrame 回调的音频格式设置方法。"
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getplaybackaudioparams__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " AudioParams "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getPlaybackAudioParams"
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
      id: "api_iaudioframeobserver_getplaybackaudioparams__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver",
        children: "registerAudioFrameObserver"
      }), " 方法时注册回调。在成功注册音频观测器后，SDK 会触发该回调。你可以在该回调的返回值中设置音频格式。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["SDK 会根据你在返回值中设置的 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
            children: "AudioParams"
          }), " 计算采样间隔，并以此触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
            children: "onPlaybackAudioFrame"
          }), " 回调。采样间隔的计算公式为：采样间隔（秒） = ", _jsx(_components.code, {
            children: "samplePerCall"
          }), " /（", _jsx(_components.code, {
            children: "sampleRate"
          }), " × ", _jsx(_components.code, {
            children: "channel"
          }), " ）。确保采样间隔 ≥ 0.01 秒。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getplaybackaudioparams__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
        children: "AudioParams"
      }), " 对象。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
        children: "AudioParams"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-3",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getrecordaudioparams"
    }), `
`, _jsx(_components.h2, {
      id: "getrecordaudioparams",
      children: "getRecordAudioParams"
    }), `
`, _jsx(_components.p, {
      children: "设置 onRecordAudioFrame 回调的音频格式。"
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getrecordaudioparams__prototype"
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
              children: " public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " AudioParams "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getRecordAudioParams"
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
      id: "api_iaudioframeobserver_getrecordaudioparams__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_registeraudioframeobserver",
        children: "registerAudioFrameObserver"
      }), " 注册回调后，SDK 会触发该回调。你可以在该回调的返回值中设置音频格式。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["SDK 会根据你在返回值中设置的 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
            children: "AudioParams"
          }), " 计算采样间隔并触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe",
            children: "onRecordAudioFrame"
          }), " 回调。采样间隔（秒） = ", _jsx(_components.code, {
            children: "samplePerCall"
          }), " /（", _jsx(_components.code, {
            children: "sampleRate"
          }), " × ", _jsx(_components.code, {
            children: "channel"
          }), " ）。请确保采样间隔 ≥ 0.01 秒。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_iaudioframeobserver_getrecordaudioparams__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioparams",
        children: "AudioParams"
      }), " 对象。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-4",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "registeraudioframeobserver",
      children: "registerAudioFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册音频帧观测器对象。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioframeobserver__prototype"
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
              children: " registerAudioFrameObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IAudioFrameObserver observer);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioframeobserver__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法注册音频帧观测器对象后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe",
        children: "onMixedAudioFrame"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe",
        children: "onRecordAudioFrame"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
        children: "onPlaybackAudioFrame"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing",
        children: "onPlaybackAudioFrameBeforeMixing"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
        children: "onEarMonitoringAudioFrame"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioframeobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道前调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioframeobserver__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["相关回调： ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe",
        children: "onMixedAudioFrame"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe",
        children: "onRecordAudioFrame"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
        children: "onPlaybackAudioFrame"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing",
        children: "onPlaybackAudioFrameBeforeMixing"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
        children: "onEarMonitoringAudioFrame"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioframeobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "observer",
      children: _jsx(_components.code, {
        children: "observer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频帧观测器实例。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
        children: "IAudioFrameObserver"
      }), "。设置为 ", _jsx(_components.code, {
        children: "null"
      }), " 可释放该实例。建议在收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onleavechannel",
        children: "onLeaveChannel"
      }), " 回调后调用此方法释放音频帧观测器对象。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudioframeobserver__return_values"
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
      id: "api_irtcengine_setearmonitoringaudioframeparameters"
    }), `
`, _jsx(_components.h2, {
      id: "setearmonitoringaudioframeparameters",
      children: "setEarMonitoringAudioFrameParameters"
    }), `
`, _jsx(_components.p, {
      children: "设置耳返音频数据格式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setearmonitoringaudioframeparameters__prototype"
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
              children: " setEarMonitoringAudioFrameParameters"
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
              children: " channel, "
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
              children: " mode, "
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
              children: " samplesPerCall);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setearmonitoringaudioframeparameters__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法用于设置 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
        children: "onEarMonitoringAudioFrame"
      }), " 回调中报告的耳返音频数据格式。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在调用该方法前，你需要先调用 enableInEarMonitoring 方法，并将 includeAudioFilters 设置为 EAR_MONITORING_FILTER_BUILT_IN_AUDIO_FILTERS 或 EAR_MONITORING_FILTER_NOISE_SUPPRESSION。"
      }), `
`, _jsx(_components.li, {
        children: "SDK 会根据该方法中设置的 samplesPerCall、 sampleRate 和 channel 参数计算采样间隔。采样间隔（秒）= samplesPerCall /（sampleRate × channel ）。请确保采样间隔 ≥ 0.01 秒。SDK 会根据采样间隔触发 onEarMonitoringAudioFrame 回调。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setearmonitoringaudioframeparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "samplerate",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
        children: "onEarMonitoringAudioFrame"
      }), " 回调中报告的音频采样率。可设置为 8000、16000、32000、44100 或 48000 Hz。"]
    }), `
`, _jsx(_components.h4, {
      id: "channel",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
        children: "onEarMonitoringAudioFrame"
      }), " 回调中报告的音频通道数："]
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
        children: "RAW_AUDIO_FRAME_OP_MODE_READ_ONLY （0）：（默认）只读模式。例如，用户通过声网 SDK 获取数据后推送 RTMP 或 RTMPS 流。"
      }), `
`, _jsx(_components.li, {
        children: "RAW_AUDIO_FRAME_OP_MODE_READ_WRITE （2）：读写模式。用户从 AudioFrame 中读取数据，修改后再播放。例如，用户有自己的音效处理模块并进行语音预处理，如变声。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespercall",
      children: _jsx(_components.code, {
        children: "samplesPerCall"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onearmonitoringaudioframe",
        children: "onEarMonitoringAudioFrame"
      }), " 回调中报告的每次调用采样数，例如媒体推流时为 1024。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setearmonitoringaudioframeparameters__return_values"
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
      id: "api_irtcengine_setmixedaudioframeparameters"
    }), `
`, _jsx(_components.h2, {
      id: "setmixedaudioframeparameters",
      children: "setMixedAudioFrameParameters"
    }), `
`, _jsx(_components.p, {
      children: "设置混音后用于采集和播放的原始音频数据格式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setmixedaudioframeparameters__prototype"
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
              children: " setMixedAudioFrameParameters"
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
              children: " channel, "
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
              children: " samplesPerCall);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setmixedaudioframeparameters__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 会根据该方法中设置的 ", _jsx(_components.code, {
        children: "samplesPerCall"
      }), "、 ", _jsx(_components.code, {
        children: "sampleRate"
      }), " 和 ", _jsx(_components.code, {
        children: "channel"
      }), " 参数计算采样间隔。 采样间隔（秒） = ", _jsx(_components.code, {
        children: "samplesPerCall"
      }), " / (", _jsx(_components.code, {
        children: "sampleRate"
      }), " × ", _jsx(_components.code, {
        children: "channel"
      }), ")，请确保采样间隔 ≥ 0.01 秒。 SDK 会根据采样间隔触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe",
        children: "onMixedAudioFrame"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setmixedaudioframeparameters__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setmixedaudioframeparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "samplerate-1",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "回调中返回的采样率，可设置为 8000、16000、32000、44100 或 48000 Hz。"
    }), `
`, _jsx(_components.h4, {
      id: "channel-1",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频声道数，可设置为以下取值："
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
      id: "samplespercall-1",
      children: _jsx(_components.code, {
        children: "samplesPerCall"
      })
    }), `
`, _jsx(_components.p, {
      children: "每次回调的数据采样数，例如媒体推流时为 1024。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setmixedaudioframeparameters__return_values"
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
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters"
    }), `
`, _jsx(_components.h2, {
      id: "setplaybackaudioframebeforemixingparameters-12",
      children: "setPlaybackAudioFrameBeforeMixingParameters [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置混音前原始音频播放数据的格式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters__prototype"
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
              children: " setPlaybackAudioFrameBeforeMixingParameters"
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
              children: " channel);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 会根据采样间隔触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing",
        children: "onPlaybackAudioFrameBeforeMixing"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["相关回调： ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing",
        children: "onPlaybackAudioFrameBeforeMixing"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "samplerate-2",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "回调中返回的采样率。可设置为以下值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "8000：8 kHz。"
      }), `
`, _jsx(_components.li, {
        children: "16000：16 kHz。"
      }), `
`, _jsx(_components.li, {
        children: "32000：32 kHz。"
      }), `
`, _jsx(_components.li, {
        children: "44100：44.1 kHz。"
      }), `
`, _jsx(_components.li, {
        children: "48000：48 kHz。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channel-2",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频声道数。可设置为以下值："
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
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters__return_values"
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
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters1"
    }), `
`, _jsx(_components.h2, {
      id: "setplaybackaudioframebeforemixingparameters-22",
      children: "setPlaybackAudioFrameBeforeMixingParameters [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置 onPlaybackAudioFrameBeforeMixing 回调中返回音频数据的格式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters1__prototype"
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
              children: " setPlaybackAudioFrameBeforeMixingParameters"
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
              children: " channel, "
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
              children: " samplesPerCall);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters1__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "samplerate-3",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["设置 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing",
        children: "onPlaybackAudioFrameBeforeMixing"
      }), " 回调中返回的采样率。可设置为以下值（单位：Hz）："]
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
        children: "48000"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channel-3",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["设置 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframebeforemixing",
        children: "onPlaybackAudioFrameBeforeMixing"
      }), " 回调中返回的音频数据的声道数。可设置为："]
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
      id: "samplespercall-2",
      children: _jsx(_components.code, {
        children: "samplesPerCall"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["设置 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onmixedaudioframe",
        children: "onMixedAudioFrame"
      }), " 回调中返回的音频数据的采样点数。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "在 RTMP 推流场景中，建议设置为 1024。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframebeforemixingparameters1__return_values"
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
      id: "api_irtcengine_setplaybackaudioframeparameters"
    }), `
`, _jsx(_components.h2, {
      id: "setplaybackaudioframeparameters",
      children: "setPlaybackAudioFrameParameters"
    }), `
`, _jsx(_components.p, {
      children: "设置原始音频播放数据的格式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframeparameters__prototype"
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
              children: " setPlaybackAudioFrameParameters"
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
              children: " channel, "
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
              children: " mode, "
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
              children: " samplesPerCall);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframeparameters__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 会根据 ", _jsx(_components.code, {
        children: "samplesPerCall"
      }), "、 ", _jsx(_components.code, {
        children: "sampleRate"
      }), " 和 ", _jsx(_components.code, {
        children: "channel"
      }), " 参数计算采样间隔。采样间隔（单位：秒） = ", _jsx(_components.code, {
        children: "samplesPerCall"
      }), " /（", _jsx(_components.code, {
        children: "sampleRate"
      }), " × ", _jsx(_components.code, {
        children: "channel"
      }), " ）。请确保采样间隔 ≥ 0.01 秒。SDK 会根据采样间隔触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
        children: "onPlaybackAudioFrame"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframeparameters__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道前调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframeparameters__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-2",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法会根据采样间隔触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onplaybackaudioframe",
        children: "onPlaybackAudioFrame"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframeparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "samplerate-4",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "回调中返回的采样率。可设置为 8000、16000、24000、32000、44100 或 48000 Hz。"
    }), `
`, _jsx(_components.h4, {
      id: "channel-4",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频声道数。可设置为："
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
      id: "mode-1",
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
        children: "RAW_AUDIO_FRAME_OP_MODE_READ_ONLY (0)：（默认）只读模式。例如，用户通过声网 SDK 获取数据后推送 RTMP 或 RTMPS 流。"
      }), `
`, _jsx(_components.li, {
        children: "RAW_AUDIO_FRAME_OP_MODE_READ_WRITE (2)：读写模式。用户从 AudioFrame 中读取数据，修改后再播放。例如，用户有自己的音效处理模块并进行语音预处理，如变声。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespercall-3",
      children: _jsx(_components.code, {
        children: "samplesPerCall"
      })
    }), `
`, _jsx(_components.p, {
      children: "每次调用返回的数据采样数，例如媒体推流时为 1024。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setplaybackaudioframeparameters__return_values"
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
      id: "api_irtcengine_setrecordingaudioframeparameters"
    }), `
`, _jsx(_components.h2, {
      id: "setrecordingaudioframeparameters",
      children: "setRecordingAudioFrameParameters"
    }), `
`, _jsx(_components.p, {
      children: "设置采集的原始音频数据格式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrecordingaudioframeparameters__prototype"
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
              children: " setRecordingAudioFrameParameters"
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
              children: " channel, "
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
              children: " mode, "
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
              children: " samplesPerCall);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrecordingaudioframeparameters__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 会根据 ", _jsx(_components.code, {
        children: "samplesPerCall"
      }), "、 ", _jsx(_components.code, {
        children: "sampleRate"
      }), " 和 ", _jsx(_components.code, {
        children: "channel"
      }), " 参数计算采样间隔。采样间隔（单位：秒） = ", _jsx(_components.code, {
        children: "samplesPerCall"
      }), " /（", _jsx(_components.code, {
        children: "sampleRate"
      }), " × ", _jsx(_components.code, {
        children: "channel"
      }), " ）。请确保采样间隔 ≥ 0.01 秒。SDK 会根据采样间隔触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#callback_iaudioframeobserver_onrecordaudioframe",
        children: "onRecordAudioFrame"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrecordingaudioframeparameters__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrecordingaudioframeparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "samplerate-5",
      children: _jsx(_components.code, {
        children: "sampleRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "回调中返回的采样率，可设置为 8000、16000、32000、44100 或 48000 Hz。"
    }), `
`, _jsx(_components.h4, {
      id: "channel-5",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频声道数，可设置为："
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
      id: "mode-2",
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
        children: "0：只读模式。例如，用户通过声网 SDK 获取数据后推送 RTMP 或 RTMPS 流。"
      }), `
`, _jsx(_components.li, {
        children: "2：读写模式。用户从 AudioFrame 中读取数据并进行修改后播放。例如，用户有自己的音效处理模块并进行语音预处理，如变声。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespercall-4",
      children: _jsx(_components.code, {
        children: "samplesPerCall"
      })
    }), `
`, _jsx(_components.p, {
      children: "每次调用的数据采样数，例如媒体推流时为 1024。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrecordingaudioframeparameters__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onearmonitoringaudioframe"
    }), `
`, _jsx(_components.h2, {
      id: "onearmonitoringaudioframe",
      children: "onEarMonitoringAudioFrame"
    }), `
`, _jsx(_components.p, {
      children: "耳返音频帧回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onearmonitoringaudioframe__prototype"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onEarMonitoringAudioFrame"
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
              children: " type, "
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
              children: " samplesPerChannel, "
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
              children: " bytesPerSample, "
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerSec, ByteBuffer buffer, "
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
              children: " renderTimeMs, "
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
              children: " avsync_type);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onearmonitoringaudioframe__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调用于获取耳返音频数据。为了确保获取的数据符合预期，声网建议你通过以下任一方式设置音频数据格式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法一：调用 setEarMonitoringAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据设置的参数计算采样间隔，并按该间隔触发 onEarMonitoringAudioFrame 回调。"
      }), `
`, _jsx(_components.li, {
        children: "方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 的返回值中设置音频数据格式。然后 SDK 会根据 getEarMonitoringAudioParams 的返回值计算采样间隔，并按该间隔触发 onEarMonitoringAudioFrame 回调。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "方法一的优先级高于方法二。如果使用方法一设置音频数据格式，则方法二的设置无效。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onearmonitoringaudioframe__parameters"
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
`, _jsx(_components.p, {
      children: "音频帧类型。"
    }), `
`, _jsx(_components.h4, {
      id: "samplesperchannel",
      children: _jsx(_components.code, {
        children: "samplesPerChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个声道中的采样点数。"
    }), `
`, _jsx(_components.h4, {
      id: "bytespersample",
      children: _jsx(_components.code, {
        children: "bytesPerSample"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个音频采样点的字节数。例如，每个 PCM 音频采样点通常占用 16 位（2 字节）。"
    }), `
`, _jsx(_components.h4, {
      id: "channels",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。若为立体声，数据为交错格式。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespersec",
      children: _jsx(_components.code, {
        children: "samplesPerSec"
      })
    }), `
`, _jsx(_components.p, {
      children: "录音采样率（Hz）。"
    }), `
`, _jsx(_components.h4, {
      id: "buffer",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频缓冲区。缓冲区大小 = ", _jsx(_components.code, {
        children: "samplesPerChannel"
      }), " × ", _jsx(_components.code, {
        children: "channels"
      }), " × ", _jsx(_components.code, {
        children: "bytesPerSample"
      }), "。详见 ", _jsx(_components.code, {
        children: "ByteBuffer"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "rendertimems",
      children: _jsx(_components.code, {
        children: "renderTimeMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用自定义视频源的场景）实现音视频帧同步。"
    }), `
`, _jsx(_components.h4, {
      id: "avsync_type",
      children: _jsx(_components.code, {
        children: "avsync_type"
      })
    }), `
`, _jsx(_components.p, {
      children: "预留参数。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onearmonitoringaudioframe__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-12",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：回调处理成功。"
      }), `
`, _jsx(_components.li, {
        children: "false：回调处理失败。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onmixedaudioframe"
    }), `
`, _jsx(_components.h2, {
      id: "onmixedaudioframe",
      children: "onMixedAudioFrame"
    }), `
`, _jsx(_components.p, {
      children: "获取混合采集和播放的音频帧回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onmixedaudioframe__prototype"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onMixedAudioFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String channelId, "
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
              children: " type, "
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
              children: " samplesPerChannel, "
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
              children: " bytesPerSample, "
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerSec, ByteBuffer buffer, "
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
              children: " renderTimeMs, "
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
              children: " avsync_type);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onmixedaudioframe__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "声网建议通过以下两种方式之一设置音频数据格式，以确保混合采集和播放音频帧的数据格式符合预期："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法一：调用 setMixedAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据设置的参数计算采样间隔，并按照采样间隔触发该回调。"
      }), `
`, _jsx(_components.li, {
        children: "方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 回调的返回值中设置音频数据格式。SDK 会根据 getMixedAudioParams 回调的返回值计算采样间隔，并按照采样间隔触发该回调。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setmixedaudioframeparameters",
            children: "setMixedAudioFrameParameters"
          }), " 的设置优先级高于 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition",
            children: "getObservedAudioFramePosition"
          }), "。如果使用方法一设置音频数据格式，则方法二的设置无效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onmixedaudioframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelid",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "type-1",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频帧类型。"
    }), `
`, _jsx(_components.h4, {
      id: "samplesperchannel-1",
      children: _jsx(_components.code, {
        children: "samplesPerChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个声道的采样点数。"
    }), `
`, _jsx(_components.h4, {
      id: "bytespersample-1",
      children: _jsx(_components.code, {
        children: "bytesPerSample"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个音频采样的字节数。例如，每个 PCM 音频采样通常占用 16 位（2 字节）。"
    }), `
`, _jsx(_components.h4, {
      id: "channels-1",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。使用立体声时，数据为交错格式。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespersec-1",
      children: _jsx(_components.code, {
        children: "samplesPerSec"
      })
    }), `
`, _jsx(_components.p, {
      children: "录音采样率（Hz）。"
    }), `
`, _jsx(_components.h4, {
      id: "buffer-1",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频缓冲区。缓冲区大小 = ", _jsx(_components.code, {
        children: "samplesPerChannel"
      }), " × ", _jsx(_components.code, {
        children: "channels"
      }), " × ", _jsx(_components.code, {
        children: "bytesPerSample"
      }), "。详见 ", _jsx(_components.code, {
        children: "ByteBuffer"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "rendertimems-1",
      children: _jsx(_components.code, {
        children: "renderTimeMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用外部视频源的场景）实现音视频帧同步。"
    }), `
`, _jsx(_components.h4, {
      id: "avsync_type-1",
      children: _jsx(_components.code, {
        children: "avsync_type"
      })
    }), `
`, _jsx(_components.p, {
      children: "预留参数。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onmixedaudioframe__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-13",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：回调处理成功。"
      }), `
`, _jsx(_components.li, {
        children: "false：回调处理失败。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframe"
    }), `
`, _jsx(_components.h2, {
      id: "onplaybackaudioframe",
      children: "onPlaybackAudioFrame"
    }), `
`, _jsx(_components.p, {
      children: "获取用于播放的原始音频帧回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframe__prototype"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPlaybackAudioFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String channelId, "
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
              children: " type, "
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
              children: " samplesPerChannel, "
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
              children: " bytesPerSample, "
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerSec, ByteBuffer buffer, "
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
              children: " renderTimeMs, "
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
              children: " avsync_type);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframe__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以通过以下两种方式之一设置音频数据格式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法一：调用 setPlaybackAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据设置的参数计算采样间隔，并按照采样间隔触发该回调。"
      }), `
`, _jsx(_components.li, {
        children: "方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 回调的返回值中设置音频数据格式。SDK 会根据 getPlaybackAudioParams 回调的返回值计算采样间隔，并按照采样间隔触发该回调。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setplaybackaudioframeparameters",
            children: "setPlaybackAudioFrameParameters"
          }), " 的设置优先级高于 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition",
            children: "getObservedAudioFramePosition"
          }), "。如果使用方法一设置音频数据格式，则方法二的设置无效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelid-1",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "type-2",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频帧类型。"
    }), `
`, _jsx(_components.h4, {
      id: "samplesperchannel-2",
      children: _jsx(_components.code, {
        children: "samplesPerChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个声道中的采样点数。"
    }), `
`, _jsx(_components.h4, {
      id: "bytespersample-2",
      children: _jsx(_components.code, {
        children: "bytesPerSample"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个音频采样点的字节数。例如，每个 PCM 音频采样点通常占用 16 位（2 字节）。"
    }), `
`, _jsx(_components.h4, {
      id: "channels-2",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。若为立体声，数据为交错排列。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespersec-2",
      children: _jsx(_components.code, {
        children: "samplesPerSec"
      })
    }), `
`, _jsx(_components.p, {
      children: "录音采样率（Hz）。"
    }), `
`, _jsx(_components.h4, {
      id: "buffer-2",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频缓冲区。缓冲区大小 = ", _jsx(_components.code, {
        children: "samplesPerChannel"
      }), " × ", _jsx(_components.code, {
        children: "channels"
      }), " × ", _jsx(_components.code, {
        children: "bytesPerSample"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "rendertimems-2",
      children: _jsx(_components.code, {
        children: "renderTimeMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用外部视频源的场景）实现音视频帧同步。"
    }), `
`, _jsx(_components.h4, {
      id: "avsync_type-2",
      children: _jsx(_components.code, {
        children: "avsync_type"
      })
    }), `
`, _jsx(_components.p, {
      children: "预留参数。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframe__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-14",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：回调处理成功。"
      }), `
`, _jsx(_components.li, {
        children: "false：回调处理失败。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframebeforemixing"
    }), `
`, _jsx(_components.h2, {
      id: "onplaybackaudioframebeforemixing",
      children: "onPlaybackAudioFrameBeforeMixing"
    }), `
`, _jsx(_components.p, {
      children: "获取已订阅远端用户混音前的音频帧回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframebeforemixing__prototype"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onPlaybackAudioFrameBeforeMixing"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String channelId, "
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
              children: " uid, "
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
              children: " type, "
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
              children: " samplesPerChannel, "
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
              children: " bytesPerSample, "
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerSec, ByteBuffer buffer, "
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
              children: " renderTimeMs, "
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
              children: " avsync_type, "
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
              children: " rtpTimestamp, "
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
              children: " presentationMs);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframebeforemixing__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframebeforemixing__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在获取远端用户音频帧并在混音前触发。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframebeforemixing__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelid-2",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "已订阅远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "type-3",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频帧类型。"
    }), `
`, _jsx(_components.h4, {
      id: "samplesperchannel-3",
      children: _jsx(_components.code, {
        children: "samplesPerChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个声道的采样点数。"
    }), `
`, _jsx(_components.h4, {
      id: "bytespersample-3",
      children: _jsx(_components.code, {
        children: "bytesPerSample"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个音频采样点的字节数。例如，每个 PCM 音频采样点通常为 16 位（2 字节）。"
    }), `
`, _jsx(_components.h4, {
      id: "channels-3",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。立体声数据为交错排列。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespersec-3",
      children: _jsx(_components.code, {
        children: "samplesPerSec"
      })
    }), `
`, _jsx(_components.p, {
      children: "录音采样率（Hz）。"
    }), `
`, _jsx(_components.h4, {
      id: "buffer-3",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频缓冲区。缓冲区大小 = ", _jsx(_components.code, {
        children: "samplesPerChannel"
      }), " × ", _jsx(_components.code, {
        children: "channels"
      }), " × ", _jsx(_components.code, {
        children: "bytesPerSample"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "rendertimems-3",
      children: _jsx(_components.code, {
        children: "renderTimeMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用自定义视频源的场景）实现音视频同步。"
    }), `
`, _jsx(_components.h4, {
      id: "avsync_type-3",
      children: _jsx(_components.code, {
        children: "avsync_type"
      })
    }), `
`, _jsx(_components.p, {
      children: "预留参数。"
    }), `
`, _jsx(_components.h4, {
      id: "rtptimestamp",
      children: _jsx(_components.code, {
        children: "rtpTimestamp"
      })
    }), `
`, _jsx(_components.p, {
      children: "RTP 时间戳。"
    }), `
`, _jsx(_components.h4, {
      id: "presentationms",
      children: _jsx(_components.code, {
        children: "presentationMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "展示时间戳（毫秒）。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onplaybackaudioframebeforemixing__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-15",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：处理成功。"
      }), `
`, _jsx(_components.li, {
        children: "false：处理失败。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onrecordaudioframe"
    }), `
`, _jsx(_components.h2, {
      id: "onrecordaudioframe",
      children: "onRecordAudioFrame"
    }), `
`, _jsx(_components.p, {
      children: "获取采集到的音频帧回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onrecordaudioframe__prototype"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onRecordAudioFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String channelId, "
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
              children: " type, "
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
              children: " samplesPerChannel, "
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
              children: " bytesPerSample, "
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " samplesPerSec, ByteBuffer buffer, "
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
              children: " renderTimeMs, "
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
              children: " avsync_type);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onrecordaudioframe__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以通过以下两种方式之一设置音频数据格式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法一：调用 setRecordingAudioFrameParameters 设置音频数据格式，并调用 registerAudioFrameObserver 注册音频帧观察者对象后，SDK 会根据方法中设置的参数计算采样间隔，并按照采样间隔触发该回调。"
      }), `
`, _jsx(_components.li, {
        children: "方法二：调用 registerAudioFrameObserver 注册音频帧观察者对象后，在 getObservedAudioFramePosition 回调的返回值中设置音频数据格式。SDK 会根据 getRecordAudioParams 回调的返回值计算采样间隔，并按照采样间隔触发该回调。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_irtcengine_setrecordingaudioframeparameters",
            children: "setRecordingAudioFrameParameters"
          }), " 的设置优先级高于 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-raw#api_iaudioframeobserver_getobservedaudioframeposition",
            children: "getObservedAudioFramePosition"
          }), "。如果使用方法一设置音频数据格式，则方法二的设置无效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onrecordaudioframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelid-3",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "type-4",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频帧类型。"
    }), `
`, _jsx(_components.h4, {
      id: "samplesperchannel-4",
      children: _jsx(_components.code, {
        children: "samplesPerChannel"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个声道中的采样点数。"
    }), `
`, _jsx(_components.h4, {
      id: "bytespersample-4",
      children: _jsx(_components.code, {
        children: "bytesPerSample"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个音频采样的字节数。例如，每个 PCM 音频采样通常占用 16 位（2 字节）。"
    }), `
`, _jsx(_components.h4, {
      id: "channels-4",
      children: _jsx(_components.code, {
        children: "channels"
      })
    }), `
`, _jsx(_components.p, {
      children: "声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单声道。"
      }), `
`, _jsx(_components.li, {
        children: "2：立体声。如果使用立体声，数据为交错排列。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "samplespersec-4",
      children: _jsx(_components.code, {
        children: "samplesPerSec"
      })
    }), `
`, _jsx(_components.p, {
      children: "录音采样率（Hz）。"
    }), `
`, _jsx(_components.h4, {
      id: "buffer-4",
      children: _jsx(_components.code, {
        children: "buffer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频缓冲区。缓冲区大小 = ", _jsx(_components.code, {
        children: "samplesPerChannel"
      }), " × ", _jsx(_components.code, {
        children: "channels"
      }), " × ", _jsx(_components.code, {
        children: "bytesPerSample"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "rendertimems-4",
      children: _jsx(_components.code, {
        children: "renderTimeMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "外部音频帧的时间戳（毫秒）。你可以使用该参数在视频或音频相关场景中（包括使用外部视频源的场景）实现音视频帧同步。"
    }), `
`, _jsx(_components.h4, {
      id: "avsync_type-4",
      children: _jsx(_components.code, {
        children: "avsync_type"
      })
    }), `
`, _jsx(_components.p, {
      children: "预留参数。"
    }), `
`, _jsx("a", {
      id: "callback_iaudioframeobserver_onrecordaudioframe__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-16",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：回调处理成功。"
      }), `
`, _jsx(_components.li, {
        children: "false：回调处理失败。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudioframeobserver",
          children: "IAudioFrameObserver"
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
