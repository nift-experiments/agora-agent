import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音视频录制",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_recording" />

<a id="api_irtcengine_createmediarecorder" />

## createMediaRecorder [#createmediarecorder]

创建用于音视频录制的录制器实例。

<a id="api_irtcengine_createmediarecorder__prototype" />

\`\`\`java
public abstract AgoraMediaRecorder createMediaRecorder(RecorderStreamInfo info);
\`\`\`

<a id="api_irtcengine_createmediarecorder__detailed_desc" />

在开始录制音视频流之前，你需要调用该方法创建一个录制器实例。你可以多次调用该方法创建多个录制器，并通过 \`info\` 参数指定要录制的频道名和用户 ID。 成功创建录制器后，你需要调用 [setMediaRecorderObserver](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_setmediarecorderobserver) 为录制器注册观察者以监听录制相关的回调，然后调用 [startRecording](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_startrecording) 开始录制。

<a id="api_irtcengine_createmediarecorder__parameters" />

### 参数 [#参数]

#### \`info\` [#info]

要录制的音视频流的信息。详见 [RecorderStreamInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-recorderstreaminfo)。

<a id="api_irtcengine_createmediarecorder__return_values" />

### 返回值 [#返回值]

* 方法调用成功，返回 AgoraMediaRecorder 实例。
* 方法调用失败，返回 null。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_destroymediarecorder" />

## destroyMediaRecorder [#destroymediarecorder]

销毁音视频录制器实例。

<a id="api_irtcengine_destroymediarecorder__prototype" />

\`\`\`java
public abstract void destroyMediaRecorder(AgoraMediaRecorder mediaRecorder);
\`\`\`

<a id="api_irtcengine_destroymediarecorder__detailed_desc" />

如果当前正在录制，请先调用 [stopRecording](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_stoprecording) 停止录制，再调用 [destroyMediaRecorder](/zh-CN/api-reference/rtc/android/recording#api_irtcengine_destroymediarecorder) 销毁录制器实例。

<a id="api_irtcengine_destroymediarecorder__parameters" />

### 参数 [#参数-1]

#### \`mediaRecorder\` [#mediarecorder]

要销毁的录制器实例。详见 [AgoraMediaRecorder](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder)。

<a id="api_irtcengine_destroymediarecorder__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_imediarecorder_setmediarecorderobserver" />

## setMediaRecorderObserver [#setmediarecorderobserver]

注册一个用于音视频录制的回调观察者。

<a id="api_imediarecorder_setmediarecorderobserver__prototype" />

\`\`\`java
public int setMediaRecorderObserver(IMediaRecorderCallback callback)
\`\`\`

<a id="api_imediarecorder_setmediarecorderobserver__detailed_desc" />

#### \`自从\` [#自从]

自 v4.0.0 版本新增。

注： 在调用该方法前，请确保：

* RtcEngine 对象已创建并初始化。
* 已通过 createMediaRecorder 创建音视频录制对象。

<a id="api_imediarecorder_setmediarecorderobserver__parameters" />

### 参数 [#参数-2]

#### \`callback\` [#callback]

音视频流录制的回调。详见 [IMediaRecorderCallback](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorderobserver)。

<a id="api_imediarecorder_setmediarecorderobserver__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [AgoraMediaRecorder](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder)

<a id="api_irtcengine_startaudiorecording1" />

## startAudioRecording \\[1/2] [#startaudiorecording-12]

开始客户端录音。

<a id="api_irtcengine_startaudiorecording1__prototype" />

\`\`\`java
public abstract int startAudioRecording(String filePath, int quality);
\`\`\`

<a id="api_irtcengine_startaudiorecording1__detailed_desc" />

你必须在调用 \`joinChannel\` 后调用该方法。调用 \`leaveChannel\` 时，录音会自动停止。 请确保指定的目录存在且可写。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    调用该方法时，默认的录音采样率为 32 kHz，且无法更改。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_startaudiorecording1__parameters" />

### 参数 [#参数-3]

#### \`filePath\` [#filepath]

本地保存录音文件的绝对路径，包括文件名和扩展名。例如： /sdcard/emulated/0/audio.aac。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保指定路径存在且可写。
  </CalloutDescription>
</CalloutContainer>

#### \`quality\` [#quality]

录音质量：

* 0：低质量。采样率为 32 kHz，录制 10 分钟的文件大小约为 1.2 MB。
* 1：中等质量。采样率为 32 kHz，录制 10 分钟的文件大小约为 2 MB。
* 2：高质量。采样率为 32 kHz，录制 10 分钟的文件大小约为 3.75 MB。

<a id="api_irtcengine_startaudiorecording1__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startaudiorecording3" />

## startAudioRecording \\[2/2] [#startaudiorecording-22]

开始客户端录制并应用录制配置。

<a id="api_irtcengine_startaudiorecording3__prototype" />

\`\`\`java
public abstract int startAudioRecording(AudioRecordingConfiguration config);
\`\`\`

<a id="api_irtcengine_startaudiorecording3__detailed_desc" />

调用该方法后，你可以录制频道中用户的音频并获取录音文件。录音文件仅支持以下格式：

* WAV：音频保真度高但文件较大。例如，在 32000 Hz 采样率下，10 分钟录音约为 73 MB。
* AAC：音频保真度较低但文件较小。例如，在 32000 Hz 采样率和 AUDIO\\_RECORDING\\_QUALITY\\_MEDIUM 录音质量下，10 分钟录音约为 2 MB。

当用户离开频道时，录制会自动停止。

<a id="api_irtcengine_startaudiorecording3__timing" />

### 调用时机 [#调用时机]

你必须在加入频道后调用该方法。

<a id="api_irtcengine_startaudiorecording3__parameters" />

### 参数 [#参数-4]

#### \`config\` [#config]

录制配置。详见 [AudioRecordingConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audiorecordingconfiguration)。

<a id="api_irtcengine_startaudiorecording3__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_imediarecorder_startrecording" />

## startRecording [#startrecording]

开始录制音频和视频流。

<a id="api_imediarecorder_startrecording__prototype" />

\`\`\`java
public int startRecording(MediaRecorderConfiguration config)
\`\`\`

<a id="api_imediarecorder_startrecording__detailed_desc" />

该方法用于开始录制音频和视频流。声网 SDK 支持同时录制本地和远端用户的音视频流。 在调用该方法前，请确保：

* 已使用 createMediaRecorder 创建媒体录制器对象。
* 已使用 setMediaRecorderObserver 注册媒体录制器观察者以监听录制相关的回调。
* 已加入频道。

该方法支持录制以下数据：

* 由麦克风采集的音频，格式为 AAC。
* 由摄像头采集的视频，格式为 H.264 或 H.265。

录制开始后，如果视频分辨率发生变化，SDK 会停止录制；如果音频采样率或声道数发生变化，SDK 会继续录制并生成一个 MP4 文件。 仅当检测到可录制的音视频流时，才会生成录制文件。如果没有可录制的流，或录制过程中音视频流中断超过 5 秒，SDK 会停止录制并触发 [onRecorderStateChanged](/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderstatechanged) （\`RECORDER_STATE_ERROR\`, \`RECORDER_REASON_NO_STREAM\` ）回调。

注：

* 如果需要录制本地音视频流，请确保本地用户角色在开始录制前已设置为主播。
* 如果需要录制远端用户的音视频流，请确保在开始录制前已订阅远端用户的音视频流。

<a id="api_imediarecorder_startrecording__parameters" />

### 参数 [#参数-5]

#### \`config\` [#config-1]

音视频流录制的配置。详见 [MediaRecorderConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediarecorderconfiguration)。

<a id="api_imediarecorder_startrecording__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。请确保：
    * 指定的录制文件保存路径正确且可写。
    * 指定的录制文件格式正确。
    * 最大录制时长设置正确。
  * -4：当前 RtcEngine 状态不支持该操作。可能是录制已在进行中，或因错误而停止。
  * -7：在 RtcEngine 初始化前调用该方法。请确保在调用该方法前已创建 AgoraMediaRecorder 对象。

### 所属接口类 [#所属接口类-5]

* [AgoraMediaRecorder](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder)

<a id="api_irtcengine_stopaudiorecording" />

## stopAudioRecording [#stopaudiorecording]

停止客户端录制音频。

<a id="api_irtcengine_stopaudiorecording__prototype" />

\`\`\`java
public abstract int stopAudioRecording();
\`\`\`

<a id="api_irtcengine_stopaudiorecording__detailed_desc" />

<a id="api_irtcengine_stopaudiorecording__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_imediarecorder_stoprecording" />

## stopRecording [#stoprecording]

停止录制音视频流。

<a id="api_imediarecorder_stoprecording__prototype" />

\`\`\`java
public int stopRecording()
\`\`\`

<a id="api_imediarecorder_stoprecording__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    调用 [startRecording](/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_startrecording) 后，如果你想停止录制，必须调用此方法；否则生成的录制文件可能无法正常播放。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediarecorder_stoprecording__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败：
  * -7：在初始化 RtcEngine 之前调用该方法。请确保在调用此方法之前已创建 Recorder 实例。

### 所属接口类 [#所属接口类-7]

* [AgoraMediaRecorder](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder)

<a id="callback_imediarecorderobserver_onrecorderinfoupdated" />

## onRecorderInfoUpdated [#onrecorderinfoupdated]

录制信息更新回调。

<a id="callback_imediarecorderobserver_onrecorderinfoupdated__prototype" />

\`\`\`java
void onRecorderInfoUpdated(String channelId, int uid, RecorderInfo info)
\`\`\`

<a id="callback_imediarecorderobserver_onrecorderinfoupdated__detailed_desc" />

在你成功注册该回调并开始音视频流录制后，SDK 会根据你在 [MediaRecorderConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediarecorderconfiguration) 中设置的 \`recorderInfoUpdateInterval\` 的值定期触发该回调，报告当前录制文件的名称、时长和大小。

<a id="callback_imediarecorderobserver_onrecorderinfoupdated__timing" />

### 触发时机 [#触发时机]

该回调在你成功注册回调并开始音视频流录制后，根据 [MediaRecorderConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediarecorderconfiguration) 中设置的 \`recorderInfoUpdateInterval\` 定期触发。

<a id="callback_imediarecorderobserver_onrecorderinfoupdated__parameters" />

### 参数 [#参数-6]

#### \`channelId\` [#channelid]

频道名。

#### \`uid\` [#uid]

用户 ID。

#### \`info\` [#info-1]

录制文件信息，详见 [RecorderInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-recorderinfo)。

### 所属接口类 [#所属接口类-8]

* [IMediaRecorderCallback](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorderobserver)

<a id="callback_imediarecorderobserver_onrecorderstatechanged" />

## onRecorderStateChanged [#onrecorderstatechanged]

录制状态发生变化时的回调。

<a id="callback_imediarecorderobserver_onrecorderstatechanged__prototype" />

\`\`\`java
@CalledByNative void onRecorderStateChanged(String channelId, int uid, int state, int reason);
\`\`\`

<a id="callback_imediarecorderobserver_onrecorderstatechanged__detailed_desc" />

SDK 在音视频流的录制状态发生变化时会触发该回调，报告当前的录制状态及其变化原因。

<a id="callback_imediarecorderobserver_onrecorderstatechanged__parameters" />

### 参数 [#参数-7]

#### \`channelId\` [#channelid-1]

频道名。

#### \`uid\` [#uid-1]

用户 ID。

#### \`state\` [#state]

当前录制状态：

* RECORDER\\_STATE\\_ERROR （-1）：录制过程中发生错误。
* RECORDER\\_STATE\\_START （2）：开始录制音视频流。
* RECORDER\\_STATE\\_STOP （3）：停止录制音视频流。

#### \`reason\` [#reason]

录制状态变化的原因：

* RECORDER\\_REASON\\_NONE （0）：一切正常。
* RECORDER\\_REASON\\_WRITE\\_FAILED （1）：录制文件写入失败。
* RECORDER\\_REASON\\_NO\\_STREAM （2）：无可用音视频流，或音视频流中断超过 5 秒。
* RECORDER\\_REASON\\_OVER\\_MAX\\_DURATION （3）：录制时长超过最大限制。
* RECORDER\\_REASON\\_CONFIG\\_CHANGED （4）：录制配置发生变化。

### 所属接口类 [#所属接口类-9]

* [IMediaRecorderCallback](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorderobserver)
`;
export let structuredData = {
  contents: [{
    heading: "createmediarecorder",
    content: "创建用于音视频录制的录制器实例。"
  }, {
    heading: "createmediarecorder",
    content: "在开始录制音视频流之前，你需要调用该方法创建一个录制器实例。你可以多次调用该方法创建多个录制器，并通过 `info` 参数指定要录制的频道名和用户 ID。 成功创建录制器后，你需要调用 setMediaRecorderObserver 为录制器注册观察者以监听录制相关的回调，然后调用 startRecording 开始录制。"
  }, {
    heading: "info",
    content: "要录制的音视频流的信息。详见 RecorderStreamInfo。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回 AgoraMediaRecorder 实例。"
  }, {
    heading: "返回值",
    content: "方法调用失败，返回 null。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "destroymediarecorder",
    content: "销毁音视频录制器实例。"
  }, {
    heading: "destroymediarecorder",
    content: "如果当前正在录制，请先调用 stopRecording 停止录制，再调用 destroyMediaRecorder 销毁录制器实例。"
  }, {
    heading: "mediarecorder",
    content: "要销毁的录制器实例。详见 AgoraMediaRecorder。"
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
    heading: "setmediarecorderobserver",
    content: "注册一个用于音视频录制的回调观察者。"
  }, {
    heading: "自从",
    content: "自 v4.0.0 版本新增。"
  }, {
    heading: "自从",
    content: "注： 在调用该方法前，请确保："
  }, {
    heading: "自从",
    content: "RtcEngine 对象已创建并初始化。"
  }, {
    heading: "自从",
    content: "已通过 createMediaRecorder 创建音视频录制对象。"
  }, {
    heading: "callback",
    content: "音视频流录制的回调。详见 IMediaRecorderCallback。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-2",
    content: "AgoraMediaRecorder"
  }, {
    heading: "startaudiorecording-12",
    content: "开始客户端录音。"
  }, {
    heading: "startaudiorecording-12",
    content: "你必须在调用 `joinChannel` 后调用该方法。调用 `leaveChannel` 时，录音会自动停止。 请确保指定的目录存在且可写。"
  }, {
    heading: "startaudiorecording-12",
    content: "调用该方法时，默认的录音采样率为 32 kHz，且无法更改。"
  }, {
    heading: "filepath",
    content: "本地保存录音文件的绝对路径，包括文件名和扩展名。例如： /sdcard/emulated/0/audio.aac。"
  }, {
    heading: "filepath",
    content: "请确保指定路径存在且可写。"
  }, {
    heading: "quality",
    content: "录音质量："
  }, {
    heading: "quality",
    content: "0：低质量。采样率为 32 kHz，录制 10 分钟的文件大小约为 1.2 MB。"
  }, {
    heading: "quality",
    content: "1：中等质量。采样率为 32 kHz，录制 10 分钟的文件大小约为 2 MB。"
  }, {
    heading: "quality",
    content: "2：高质量。采样率为 32 kHz，录制 10 分钟的文件大小约为 3.75 MB。"
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
    heading: "startaudiorecording-22",
    content: "开始客户端录制并应用录制配置。"
  }, {
    heading: "startaudiorecording-22",
    content: "调用该方法后，你可以录制频道中用户的音频并获取录音文件。录音文件仅支持以下格式："
  }, {
    heading: "startaudiorecording-22",
    content: "WAV：音频保真度高但文件较大。例如，在 32000 Hz 采样率下，10 分钟录音约为 73 MB。"
  }, {
    heading: "startaudiorecording-22",
    content: "AAC：音频保真度较低但文件较小。例如，在 32000 Hz 采样率和 AUDIO\\_RECORDING\\_QUALITY\\_MEDIUM 录音质量下，10 分钟录音约为 2 MB。"
  }, {
    heading: "startaudiorecording-22",
    content: "当用户离开频道时，录制会自动停止。"
  }, {
    heading: "调用时机",
    content: "你必须在加入频道后调用该方法。"
  }, {
    heading: "config",
    content: "录制配置。详见 AudioRecordingConfiguration。"
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
    heading: "startrecording",
    content: "开始录制音频和视频流。"
  }, {
    heading: "startrecording",
    content: "该方法用于开始录制音频和视频流。声网 SDK 支持同时录制本地和远端用户的音视频流。 在调用该方法前，请确保："
  }, {
    heading: "startrecording",
    content: "已使用 createMediaRecorder 创建媒体录制器对象。"
  }, {
    heading: "startrecording",
    content: "已使用 setMediaRecorderObserver 注册媒体录制器观察者以监听录制相关的回调。"
  }, {
    heading: "startrecording",
    content: "已加入频道。"
  }, {
    heading: "startrecording",
    content: "该方法支持录制以下数据："
  }, {
    heading: "startrecording",
    content: "由麦克风采集的音频，格式为 AAC。"
  }, {
    heading: "startrecording",
    content: "由摄像头采集的视频，格式为 H.264 或 H.265。"
  }, {
    heading: "startrecording",
    content: "录制开始后，如果视频分辨率发生变化，SDK 会停止录制；如果音频采样率或声道数发生变化，SDK 会继续录制并生成一个 MP4 文件。 仅当检测到可录制的音视频流时，才会生成录制文件。如果没有可录制的流，或录制过程中音视频流中断超过 5 秒，SDK 会停止录制并触发 onRecorderStateChanged （`RECORDER_STATE_ERROR`, `RECORDER_REASON_NO_STREAM` ）回调。"
  }, {
    heading: "startrecording",
    content: "注："
  }, {
    heading: "startrecording",
    content: "如果需要录制本地音视频流，请确保本地用户角色在开始录制前已设置为主播。"
  }, {
    heading: "startrecording",
    content: "如果需要录制远端用户的音视频流，请确保在开始录制前已订阅远端用户的音视频流。"
  }, {
    heading: "config-1",
    content: "音视频流录制的配置。详见 MediaRecorderConfiguration。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-5",
    content: "-2：参数无效。请确保："
  }, {
    heading: "返回值-5",
    content: "指定的录制文件保存路径正确且可写。"
  }, {
    heading: "返回值-5",
    content: "指定的录制文件格式正确。"
  }, {
    heading: "返回值-5",
    content: "最大录制时长设置正确。"
  }, {
    heading: "返回值-5",
    content: "-4：当前 RtcEngine 状态不支持该操作。可能是录制已在进行中，或因错误而停止。"
  }, {
    heading: "返回值-5",
    content: "-7：在 RtcEngine 初始化前调用该方法。请确保在调用该方法前已创建 AgoraMediaRecorder 对象。"
  }, {
    heading: "所属接口类-5",
    content: "AgoraMediaRecorder"
  }, {
    heading: "stopaudiorecording",
    content: "停止客户端录制音频。"
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
    heading: "stoprecording",
    content: "停止录制音视频流。"
  }, {
    heading: "stoprecording",
    content: "调用 startRecording 后，如果你想停止录制，必须调用此方法；否则生成的录制文件可能无法正常播放。"
  }, {
    heading: "返回值-7",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败："
  }, {
    heading: "返回值-7",
    content: "-7：在初始化 RtcEngine 之前调用该方法。请确保在调用此方法之前已创建 Recorder 实例。"
  }, {
    heading: "所属接口类-7",
    content: "AgoraMediaRecorder"
  }, {
    heading: "onrecorderinfoupdated",
    content: "录制信息更新回调。"
  }, {
    heading: "onrecorderinfoupdated",
    content: "在你成功注册该回调并开始音视频流录制后，SDK 会根据你在 MediaRecorderConfiguration 中设置的 `recorderInfoUpdateInterval` 的值定期触发该回调，报告当前录制文件的名称、时长和大小。"
  }, {
    heading: "触发时机",
    content: "该回调在你成功注册回调并开始音视频流录制后，根据 MediaRecorderConfiguration 中设置的 `recorderInfoUpdateInterval` 定期触发。"
  }, {
    heading: "channelid",
    content: "频道名。"
  }, {
    heading: "uid",
    content: "用户 ID。"
  }, {
    heading: "info-1",
    content: "录制文件信息，详见 RecorderInfo。"
  }, {
    heading: "所属接口类-8",
    content: "IMediaRecorderCallback"
  }, {
    heading: "onrecorderstatechanged",
    content: "录制状态发生变化时的回调。"
  }, {
    heading: "onrecorderstatechanged",
    content: "SDK 在音视频流的录制状态发生变化时会触发该回调，报告当前的录制状态及其变化原因。"
  }, {
    heading: "channelid-1",
    content: "频道名。"
  }, {
    heading: "uid-1",
    content: "用户 ID。"
  }, {
    heading: "state",
    content: "当前录制状态："
  }, {
    heading: "state",
    content: "RECORDER\\_STATE\\_ERROR （-1）：录制过程中发生错误。"
  }, {
    heading: "state",
    content: "RECORDER\\_STATE\\_START （2）：开始录制音视频流。"
  }, {
    heading: "state",
    content: "RECORDER\\_STATE\\_STOP （3）：停止录制音视频流。"
  }, {
    heading: "reason",
    content: "录制状态变化的原因："
  }, {
    heading: "reason",
    content: "RECORDER\\_REASON\\_NONE （0）：一切正常。"
  }, {
    heading: "reason",
    content: "RECORDER\\_REASON\\_WRITE\\_FAILED （1）：录制文件写入失败。"
  }, {
    heading: "reason",
    content: "RECORDER\\_REASON\\_NO\\_STREAM （2）：无可用音视频流，或音视频流中断超过 5 秒。"
  }, {
    heading: "reason",
    content: "RECORDER\\_REASON\\_OVER\\_MAX\\_DURATION （3）：录制时长超过最大限制。"
  }, {
    heading: "reason",
    content: "RECORDER\\_REASON\\_CONFIG\\_CHANGED （4）：录制配置发生变化。"
  }, {
    heading: "所属接口类-9",
    content: "IMediaRecorderCallback"
  }],
  headings: [{
    id: "createmediarecorder",
    content: "createMediaRecorder"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "info",
    content: "`info`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "destroymediarecorder",
    content: "destroyMediaRecorder"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "mediarecorder",
    content: "`mediaRecorder`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "setmediarecorderobserver",
    content: "setMediaRecorderObserver"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "callback",
    content: "`callback`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "startaudiorecording-12",
    content: "startAudioRecording [1/2]"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "filepath",
    content: "`filePath`"
  }, {
    id: "quality",
    content: "`quality`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "startaudiorecording-22",
    content: "startAudioRecording [2/2]"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "startrecording",
    content: "startRecording"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "config-1",
    content: "`config`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "stopaudiorecording",
    content: "stopAudioRecording"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "stoprecording",
    content: "stopRecording"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "onrecorderinfoupdated",
    content: "onRecorderInfoUpdated"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "channelid",
    content: "`channelId`"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "info-1",
    content: "`info`"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "onrecorderstatechanged",
    content: "onRecorderStateChanged"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "channelid-1",
    content: "`channelId`"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#createmediarecorder",
  title: _jsx(_Fragment, {
    children: "createMediaRecorder"
  })
}, {
  depth: 3,
  url: "#参数",
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
  url: "#destroymediarecorder",
  title: _jsx(_Fragment, {
    children: "destroyMediaRecorder"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#mediarecorder",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mediaRecorder"
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
  url: "#setmediarecorderobserver",
  title: _jsx(_Fragment, {
    children: "setMediaRecorderObserver"
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
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#callback",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "callback"
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
  url: "#startaudiorecording-12",
  title: _jsx(_Fragment, {
    children: "startAudioRecording [1/2]"
  })
}, {
  depth: 3,
  url: "#参数-3",
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
  url: "#quality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "quality"
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
  url: "#startaudiorecording-22",
  title: _jsx(_Fragment, {
    children: "startAudioRecording [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#startrecording",
  title: _jsx(_Fragment, {
    children: "startRecording"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#config-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#stopaudiorecording",
  title: _jsx(_Fragment, {
    children: "stopAudioRecording"
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
  url: "#stoprecording",
  title: _jsx(_Fragment, {
    children: "stopRecording"
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
  url: "#onrecorderinfoupdated",
  title: _jsx(_Fragment, {
    children: "onRecorderInfoUpdated"
  })
}, {
  depth: 3,
  url: "#触发时机",
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
  url: "#channelid",
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
  url: "#info-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "info"
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
  url: "#onrecorderstatechanged",
  title: _jsx(_Fragment, {
    children: "onRecorderStateChanged"
  })
}, {
  depth: 3,
  url: "#参数-7",
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
  url: "#uid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
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
      id: "toc_recording"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediarecorder"
    }), `
`, _jsx(_components.h2, {
      id: "createmediarecorder",
      children: "createMediaRecorder"
    }), `
`, _jsx(_components.p, {
      children: "创建用于音视频录制的录制器实例。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediarecorder__prototype"
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
              children: " AgoraMediaRecorder "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "createMediaRecorder"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RecorderStreamInfo info);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediarecorder__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在开始录制音视频流之前，你需要调用该方法创建一个录制器实例。你可以多次调用该方法创建多个录制器，并通过 ", _jsx(_components.code, {
        children: "info"
      }), " 参数指定要录制的频道名和用户 ID。 成功创建录制器后，你需要调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_setmediarecorderobserver",
        children: "setMediaRecorderObserver"
      }), " 为录制器注册观察者以监听录制相关的回调，然后调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_startrecording",
        children: "startRecording"
      }), " 开始录制。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediarecorder__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "info",
      children: _jsx(_components.code, {
        children: "info"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要录制的音视频流的信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-recorderstreaminfo",
        children: "RecorderStreamInfo"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediarecorder__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回 AgoraMediaRecorder 实例。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 null。"
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
      id: "api_irtcengine_destroymediarecorder"
    }), `
`, _jsx(_components.h2, {
      id: "destroymediarecorder",
      children: "destroyMediaRecorder"
    }), `
`, _jsx(_components.p, {
      children: "销毁音视频录制器实例。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroymediarecorder__prototype"
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
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " destroyMediaRecorder"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AgoraMediaRecorder mediaRecorder);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroymediarecorder__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果当前正在录制，请先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_stoprecording",
        children: "stopRecording"
      }), " 停止录制，再调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/recording#api_irtcengine_destroymediarecorder",
        children: "destroyMediaRecorder"
      }), " 销毁录制器实例。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroymediarecorder__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mediarecorder",
      children: _jsx(_components.code, {
        children: "mediaRecorder"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要销毁的录制器实例。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder",
        children: "AgoraMediaRecorder"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroymediarecorder__return_values"
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
      id: "api_imediarecorder_setmediarecorderobserver"
    }), `
`, _jsx(_components.h2, {
      id: "setmediarecorderobserver",
      children: "setMediaRecorderObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册一个用于音视频录制的回调观察者。"
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_setmediarecorderobserver__prototype"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " setMediaRecorderObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IMediaRecorderCallback callback)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_setmediarecorderobserver__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.0.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "注： 在调用该方法前，请确保："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RtcEngine 对象已创建并初始化。"
      }), `
`, _jsx(_components.li, {
        children: "已通过 createMediaRecorder 创建音视频录制对象。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_setmediarecorderobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "callback",
      children: _jsx(_components.code, {
        children: "callback"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音视频流录制的回调。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorderobserver",
        children: "IMediaRecorderCallback"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_setmediarecorderobserver__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder",
          children: "AgoraMediaRecorder"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording1"
    }), `
`, _jsx(_components.h2, {
      id: "startaudiorecording-12",
      children: "startAudioRecording [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "开始客户端录音。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording1__prototype"
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
              children: " startAudioRecording"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " quality);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording1__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 后调用该方法。调用 ", _jsx(_components.code, {
        children: "leaveChannel"
      }), " 时，录音会自动停止。 请确保指定的目录存在且可写。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "调用该方法时，默认的录音采样率为 32 kHz，且无法更改。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "filepath",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地保存录音文件的绝对路径，包括文件名和扩展名。例如： /sdcard/emulated/0/audio.aac。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请确保指定路径存在且可写。"
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "quality",
      children: _jsx(_components.code, {
        children: "quality"
      })
    }), `
`, _jsx(_components.p, {
      children: "录音质量："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：低质量。采样率为 32 kHz，录制 10 分钟的文件大小约为 1.2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "1：中等质量。采样率为 32 kHz，录制 10 分钟的文件大小约为 2 MB。"
      }), `
`, _jsx(_components.li, {
        children: "2：高质量。采样率为 32 kHz，录制 10 分钟的文件大小约为 3.75 MB。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording1__return_values"
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
      id: "api_irtcengine_startaudiorecording3"
    }), `
`, _jsx(_components.h2, {
      id: "startaudiorecording-22",
      children: "startAudioRecording [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "开始客户端录制并应用录制配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording3__prototype"
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
              children: " startAudioRecording"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AudioRecordingConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording3__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法后，你可以录制频道中用户的音频并获取录音文件。录音文件仅支持以下格式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "WAV：音频保真度高但文件较大。例如，在 32000 Hz 采样率下，10 分钟录音约为 73 MB。"
      }), `
`, _jsx(_components.li, {
        children: "AAC：音频保真度较低但文件较小。例如，在 32000 Hz 采样率和 AUDIO_RECORDING_QUALITY_MEDIUM 录音质量下，10 分钟录音约为 2 MB。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "当用户离开频道时，录制会自动停止。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording3__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你必须在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording3__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["录制配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audiorecordingconfiguration",
        children: "AudioRecordingConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startaudiorecording3__return_values"
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
      id: "api_imediarecorder_startrecording"
    }), `
`, _jsx(_components.h2, {
      id: "startrecording",
      children: "startRecording"
    }), `
`, _jsx(_components.p, {
      children: "开始录制音频和视频流。"
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_startrecording__prototype"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " startRecording"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(MediaRecorderConfiguration config)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_startrecording__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于开始录制音频和视频流。声网 SDK 支持同时录制本地和远端用户的音视频流。 在调用该方法前，请确保："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "已使用 createMediaRecorder 创建媒体录制器对象。"
      }), `
`, _jsx(_components.li, {
        children: "已使用 setMediaRecorderObserver 注册媒体录制器观察者以监听录制相关的回调。"
      }), `
`, _jsx(_components.li, {
        children: "已加入频道。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "该方法支持录制以下数据："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "由麦克风采集的音频，格式为 AAC。"
      }), `
`, _jsx(_components.li, {
        children: "由摄像头采集的视频，格式为 H.264 或 H.265。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["录制开始后，如果视频分辨率发生变化，SDK 会停止录制；如果音频采样率或声道数发生变化，SDK 会继续录制并生成一个 MP4 文件。 仅当检测到可录制的音视频流时，才会生成录制文件。如果没有可录制的流，或录制过程中音视频流中断超过 5 秒，SDK 会停止录制并触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/recording#callback_imediarecorderobserver_onrecorderstatechanged",
        children: "onRecorderStateChanged"
      }), " （", _jsx(_components.code, {
        children: "RECORDER_STATE_ERROR"
      }), ", ", _jsx(_components.code, {
        children: "RECORDER_REASON_NO_STREAM"
      }), " ）回调。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果需要录制本地音视频流，请确保本地用户角色在开始录制前已设置为主播。"
      }), `
`, _jsx(_components.li, {
        children: "如果需要录制远端用户的音视频流，请确保在开始录制前已订阅远端用户的音视频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_startrecording__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-1",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音视频流录制的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediarecorderconfiguration",
        children: "MediaRecorderConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_startrecording__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["-2：参数无效。请确保：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "指定的录制文件保存路径正确且可写。"
              }), `
`, _jsx(_components.li, {
                children: "指定的录制文件格式正确。"
              }), `
`, _jsx(_components.li, {
                children: "最大录制时长设置正确。"
              }), `
`]
            }), `
`]
          }), `
`, _jsx(_components.li, {
            children: "-4：当前 RtcEngine 状态不支持该操作。可能是录制已在进行中，或因错误而停止。"
          }), `
`, _jsx(_components.li, {
            children: "-7：在 RtcEngine 初始化前调用该方法。请确保在调用该方法前已创建 AgoraMediaRecorder 对象。"
          }), `
`]
        }), `
`]
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder",
          children: "AgoraMediaRecorder"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopaudiorecording"
    }), `
`, _jsx(_components.h2, {
      id: "stopaudiorecording",
      children: "stopAudioRecording"
    }), `
`, _jsx(_components.p, {
      children: "停止客户端录制音频。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopaudiorecording__prototype"
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
              children: " stopAudioRecording"
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
      id: "api_irtcengine_stopaudiorecording__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopaudiorecording__return_values"
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
      id: "api_imediarecorder_stoprecording"
    }), `
`, _jsx(_components.h2, {
      id: "stoprecording",
      children: "stopRecording"
    }), `
`, _jsx(_components.p, {
      children: "停止录制音视频流。"
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_stoprecording__prototype"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " stopRecording"
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
      id: "api_imediarecorder_stoprecording__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/recording#api_imediarecorder_startrecording",
            children: "startRecording"
          }), " 后，如果你想停止录制，必须调用此方法；否则生成的录制文件可能无法正常播放。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediarecorder_stoprecording__return_values"
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
        children: ["< 0：方法调用失败：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-7：在初始化 RtcEngine 之前调用该方法。请确保在调用此方法之前已创建 Recorder 实例。"
          }), `
`]
        }), `
`]
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorder",
          children: "AgoraMediaRecorder"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediarecorderobserver_onrecorderinfoupdated"
    }), `
`, _jsx(_components.h2, {
      id: "onrecorderinfoupdated",
      children: "onRecorderInfoUpdated"
    }), `
`, _jsx(_components.p, {
      children: "录制信息更新回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediarecorderobserver_onrecorderinfoupdated__prototype"
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
              children: " onRecorderInfoUpdated"
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
              children: " uid, RecorderInfo info)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediarecorderobserver_onrecorderinfoupdated__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在你成功注册该回调并开始音视频流录制后，SDK 会根据你在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediarecorderconfiguration",
        children: "MediaRecorderConfiguration"
      }), " 中设置的 ", _jsx(_components.code, {
        children: "recorderInfoUpdateInterval"
      }), " 的值定期触发该回调，报告当前录制文件的名称、时长和大小。"]
    }), `
`, _jsx("a", {
      id: "callback_imediarecorderobserver_onrecorderinfoupdated__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在你成功注册回调并开始音视频流录制后，根据 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-mediarecorderconfiguration",
        children: "MediaRecorderConfiguration"
      }), " 中设置的 ", _jsx(_components.code, {
        children: "recorderInfoUpdateInterval"
      }), " 定期触发。"]
    }), `
`, _jsx("a", {
      id: "callback_imediarecorderobserver_onrecorderinfoupdated__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelid",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "info-1",
      children: _jsx(_components.code, {
        children: "info"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["录制文件信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-recorderinfo",
        children: "RecorderInfo"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorderobserver",
          children: "IMediaRecorderCallback"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_imediarecorderobserver_onrecorderstatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onrecorderstatechanged",
      children: "onRecorderStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "录制状态发生变化时的回调。"
    }), `
`, _jsx("a", {
      id: "callback_imediarecorderobserver_onrecorderstatechanged__prototype"
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
              children: " onRecorderStateChanged"
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
              children: " reason);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_imediarecorderobserver_onrecorderstatechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "SDK 在音视频流的录制状态发生变化时会触发该回调，报告当前的录制状态及其变化原因。"
    }), `
`, _jsx("a", {
      id: "callback_imediarecorderobserver_onrecorderstatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelid-1",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。"
    }), `
`, _jsx(_components.h4, {
      id: "uid-1",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前录制状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RECORDER_STATE_ERROR （-1）：录制过程中发生错误。"
      }), `
`, _jsx(_components.li, {
        children: "RECORDER_STATE_START （2）：开始录制音视频流。"
      }), `
`, _jsx(_components.li, {
        children: "RECORDER_STATE_STOP （3）：停止录制音视频流。"
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
      children: "录制状态变化的原因："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RECORDER_REASON_NONE （0）：一切正常。"
      }), `
`, _jsx(_components.li, {
        children: "RECORDER_REASON_WRITE_FAILED （1）：录制文件写入失败。"
      }), `
`, _jsx(_components.li, {
        children: "RECORDER_REASON_NO_STREAM （2）：无可用音视频流，或音视频流中断超过 5 秒。"
      }), `
`, _jsx(_components.li, {
        children: "RECORDER_REASON_OVER_MAX_DURATION （3）：录制时长超过最大限制。"
      }), `
`, _jsx(_components.li, {
        children: "RECORDER_REASON_CONFIG_CHANGED （4）：录制配置发生变化。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediarecorderobserver",
          children: "IMediaRecorderCallback"
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
