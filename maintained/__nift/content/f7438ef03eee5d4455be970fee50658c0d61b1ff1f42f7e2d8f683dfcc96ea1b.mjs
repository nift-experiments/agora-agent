import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音频基础功能",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_basic" />

<a id="api_irtcengine_adjustplaybacksignalvolume" />

## adjustPlaybackSignalVolume [#adjustplaybacksignalvolume]

调节所有远端用户的本地播放音量。

<a id="api_irtcengine_adjustplaybacksignalvolume__prototype" />

\`\`\`java
public abstract int adjustPlaybackSignalVolume(int volume);
\`\`\`

<a id="api_irtcengine_adjustplaybacksignalvolume__detailed_desc" />

如果你需要调节某个指定远端用户在本地播放的音量，建议调用 [adjustUserPlaybackSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustuserplaybacksignalvolume)。

<a id="api_irtcengine_adjustplaybacksignalvolume__timing" />

### 调用时机 [#调用时机]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_adjustplaybacksignalvolume__parameters" />

### 参数 [#参数]

#### \`volume\` [#volume]

用户的音量，取值范围为 \\[0,400]。

* 0：静音。
* 100：（默认）原始音量。
* 400：原始音量的四倍（将音频信号放大四倍）。

<a id="api_irtcengine_adjustplaybacksignalvolume__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_adjustuserplaybacksignalvolume" />

## adjustUserPlaybackSignalVolume [#adjustuserplaybacksignalvolume]

调节指定远端用户的播放音量。

<a id="api_irtcengine_adjustuserplaybacksignalvolume__prototype" />

\`\`\`java
public abstract int adjustUserPlaybackSignalVolume(int uid, int volume);
\`\`\`

<a id="api_irtcengine_adjustuserplaybacksignalvolume__detailed_desc" />

你可以调用该方法调节指定远端用户的播放音量。若需调节多个远端用户的播放音量，请分别多次调用该方法，每次针对一个远端用户。

<a id="api_irtcengine_adjustuserplaybacksignalvolume__timing" />

### 调用时机 [#调用时机-1]

请在加入频道后调用该方法。

<a id="api_irtcengine_adjustuserplaybacksignalvolume__parameters" />

### 参数 [#参数-1]

#### \`uid\` [#uid]

远端用户的用户 ID。

#### \`volume\` [#volume-1]

用户的音量，取值范围为 \\[0, 400]。

* 0：静音。
* 100：（默认）原始音量。
* 400：原始音量的四倍（将音频信号放大四倍）。

<a id="api_irtcengine_adjustuserplaybacksignalvolume__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_adjustuserplaybacksignalvolumeex" />

## adjustUserPlaybackSignalVolumeEx [#adjustuserplaybacksignalvolumeex]

调整指定远端用户的播放音量。

<a id="api_irtcengineex_adjustuserplaybacksignalvolumeex__prototype" />

\`\`\`java
public abstract int adjustUserPlaybackSignalVolumeEx(int uid, int volume, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_adjustuserplaybacksignalvolumeex__detailed_desc" />

你可以调用此方法调整指定远端用户的播放音量。若需调整多个远端用户的播放音量，请分别多次调用此方法，每次针对一个远端用户。

<a id="api_irtcengineex_adjustuserplaybacksignalvolumeex__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_adjustuserplaybacksignalvolumeex__timing" />

### 调用时机 [#调用时机-2]

请在调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 后调用此方法。

<a id="api_irtcengineex_adjustuserplaybacksignalvolumeex__parameters" />

### 参数 [#参数-2]

#### \`uid\` [#uid-1]

远端用户的用户 ID。

#### \`volume\` [#volume-2]

用户的音量，取值范围为 \\[0, 400]。

* 0：静音。
* 100：（默认）原始音量。
* 400：原始音量的四倍（将音频信号放大四倍）。

#### \`connection\` [#connection]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_adjustuserplaybacksignalvolumeex__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_disableaudio" />

## disableAudio [#disableaudio]

禁用音频模块。

<a id="api_irtcengine_disableaudio__prototype" />

\`\`\`java
public abstract int disableAudio();
\`\`\`

<a id="api_irtcengine_disableaudio__detailed_desc" />

音频模块默认启用。你可以调用该方法来禁用。

注： 该方法会重置内部引擎，并需要一些时间生效。声网建议使用以下 API 分别控制音频模块：

* enableLocalAudio：是否启用麦克风以创建本地音频流。
* muteLocalAudioStream：是否发布本地音频流。
* muteRemoteAudioStream：是否订阅并播放远端音频流。
* muteAllRemoteAudioStreams：是否订阅并播放所有远端音频流。

<a id="api_irtcengine_disableaudio__timing" />

### 调用时机 [#调用时机-3]

该方法可以在加入频道前或加入频道后调用。离开频道后仍然有效。

<a id="api_irtcengine_disableaudio__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enableaudio" />

## enableAudio [#enableaudio]

启用音频模块。

<a id="api_irtcengine_enableaudio__prototype" />

\`\`\`java
public abstract int enableAudio();
\`\`\`

<a id="api_irtcengine_enableaudio__detailed_desc" />

调用 [disableAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_disableaudio) 方法禁用音频模块后，可以调用 [enableAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio) 方法重新启用。

注：

* 调用此方法会重置整个引擎，可能导致响应时间变慢。你可以根据实际需求，使用以下方法分别控制音频模块的具体功能：
  * enableLocalAudio：是否启用麦克风以创建本地音频流。
  * muteLocalAudioStream：是否发布本地音频流。
  * muteRemoteAudioStream：是否订阅并播放远端音频流。
  * muteAllRemoteAudioStreams：是否订阅并播放所有远端音频流。
* 成功调用此方法会重置 enableLocalAudio、 muteRemoteAudioStream 和 muteAllRemoteAudioStreams 的状态，请谨慎使用。

<a id="api_irtcengine_enableaudio__timing" />

### 调用时机 [#调用时机-4]

该方法可以在加入频道前或加入频道后调用，离开频道后仍然有效。

<a id="api_irtcengine_enableaudio__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enableaudiovolumeindication" />

## enableAudioVolumeIndication [#enableaudiovolumeindication]

启用用户音量提示上报功能。

<a id="api_irtcengine_enableaudiovolumeindication__prototype" />

\`\`\`java
public abstract int enableAudioVolumeIndication(int interval, int smooth, boolean reportVad);
\`\`\`

<a id="api_irtcengine_enableaudiovolumeindication__detailed_desc" />

该方法用于启用 SDK 定期向应用上报本地发送流的用户和音量瞬时值最高的最多三位远端用户的音量信息。

<a id="api_irtcengine_enableaudiovolumeindication__timing" />

### 调用时机 [#调用时机-5]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_enableaudiovolumeindication__related" />

### 相关回调 [#相关回调]

成功调用该方法后，若频道中有用户正在发布流，SDK 会根据设置的时间间隔触发 [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication) 回调。

<a id="api_irtcengine_enableaudiovolumeindication__parameters" />

### 参数 [#参数-3]

#### \`interval\` [#interval]

设置两次音量提示之间的时间间隔（毫秒）：

* ≤ 0：关闭音量提示。
* \\> 0：两次音量提示之间的时间间隔（毫秒）。该值需大于 10，否则无法收到 onAudioVolumeIndication 回调。建议设置为大于 100。

#### \`smooth\` [#smooth]

设置音量提示的灵敏度平滑系数。取值范围为 0 到 10，推荐值为 3。数值越大，提示越灵敏。

#### \`reportVad\` [#reportvad]

* true：启用本地用户的语音活动检测。启用后， onAudioVolumeIndication 回调中的 vad 参数会报告本地用户的语音活动状态。
* false：（默认）关闭本地用户的语音活动检测。关闭后， onAudioVolumeIndication 回调中的 vad 参数不会报告本地用户的语音活动状态，除非引擎自动检测到语音活动。

<a id="api_irtcengine_enableaudiovolumeindication__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_enableaudiovolumeindicationex" />

## enableAudioVolumeIndicationEx [#enableaudiovolumeindicationex]

启用用户音量提示的上报功能。

<a id="api_irtcengineex_enableaudiovolumeindicationex__prototype" />

\`\`\`java
public abstract int enableAudioVolumeIndicationEx(int interval, int smooth, boolean reportVad, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_enableaudiovolumeindicationex__detailed_desc" />

该方法使 SDK 能够定期向应用上报本地发送音频流的用户和音量瞬时值最高的最多三位远端用户的音量信息。

<a id="api_irtcengineex_enableaudiovolumeindicationex__scenario" />

### 适用场景 [#适用场景-1]

该方法适用于多频道场景。

<a id="api_irtcengineex_enableaudiovolumeindicationex__timing" />

### 调用时机 [#调用时机-6]

请在调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 之后调用该方法。

<a id="api_irtcengineex_enableaudiovolumeindicationex__related" />

### 相关回调 [#相关回调-1]

如果该方法调用成功且频道中有用户发布音频流，SDK 会根据设置的时间间隔触发 [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication) 回调。

<a id="api_irtcengineex_enableaudiovolumeindicationex__parameters" />

### 参数 [#参数-4]

#### \`interval\` [#interval-1]

设置两次音量提示之间的时间间隔（单位为毫秒）：

* ≤ 0：关闭音量提示功能。
* \\> 0：两次音量提示之间的时间间隔。该值需大于 10，否则无法收到 onAudioVolumeIndication 回调。建议设置为大于 100。

#### \`smooth\` [#smooth-1]

设置音量提示的灵敏度平滑系数，取值范围为 \\[0, 10]，推荐值为 3。数值越大，提示越灵敏。

#### \`reportVad\` [#reportvad-1]

是否启用本地用户的语音活动检测（VAD）：

* true：启用语音活动检测， onAudioVolumeIndication 回调中的 vad 参数会报告本地用户的语音活动状态。
* false：（默认）关闭语音活动检测， vad 参数不会报告本地用户的语音活动状态，除非引擎自动检测到语音活动。

#### \`connection\` [#connection-1]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_enableaudiovolumeindicationex__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setaudioprofile" />

## setAudioProfile \\[1/2] [#setaudioprofile-12]

设置音频配置和音频场景。

<a id="api_irtcengine_setaudioprofile__prototype" />

\`\`\`java
public abstract int setAudioProfile(int profile, int scenario);
\`\`\`

<a id="api_irtcengine_setaudioprofile__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃。请使用 \`setAudioProfile(int profile)\` 设置音频配置，使用 \`setAudioScenario(int scenario)\` 设置音频场景。

<a id="api_irtcengine_setaudioprofile__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多种音频场景，你可以根据实际需求进行选择。例如，在对音质要求较高的场景（如音乐教学）中，建议将 \`profile\` 设置为 \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY\` （4），将 \`scenario\` 设置为 \`AUDIO_SCENARIO_GAME_STREAMING\` （3）。你可以在加入频道前或加入频道后调用该方法。

<a id="api_irtcengine_setaudioprofile__timing" />

### 调用时机 [#调用时机-7]

你可以在加入频道前或后调用该方法。

<a id="api_irtcengine_setaudioprofile__parameters" />

### 参数 [#参数-5]

#### \`profile\` [#profile]

音频配置，包括采样率、码率、编码模式和声道数，详见 \`profile\`：

* DEFAULT (0)：默认值。
  * 互动直播场景：采样率 48 kHz，音乐编码，单声道，码率最高 64 Kbps。
  * 通信场景：采样率 32 kHz，语音编码，单声道，码率最高 18 Kbps。
* SPEECH\\_STANDARD (1)：采样率 32 kHz，语音编码，单声道，码率最高 18 Kbps。
* MUSIC\\_STANDARD (2)：采样率 48 kHz，音乐编码，单声道，码率最高 64 Kbps。
* MUSIC\\_STANDARD\\_STEREO (3)：采样率 48 kHz，音乐编码，立体声，码率最高 80 Kbps。
* MUSIC\\_HIGH\\_QUALITY (4)：采样率 48 kHz，音乐编码，单声道，码率最高 96 Kbps。
* MUSIC\\_HIGH\\_QUALITY\\_STEREO (5)：采样率 48 kHz，音乐编码，立体声，码率最高 128 Kbps。

#### \`scenario\` [#scenario]

音频场景，不同场景下设备使用不同的音量类型，详见 \`scenario\`：

* AUDIO\\_SCENARIO\\_DEFAULT (0)：默认自动场景，SDK 会根据用户角色和音频路由选择合适的音频质量。
* AUDIO\\_SCENARIO\\_GAME\\_STREAMING (3)：高音质场景，适用于主要播放音乐的场景。
* AUDIO\\_SCENARIO\\_CHATROOM (5)：聊天室场景，适用于频繁切换角色或静音/取消静音麦克风的场景。
* AUDIO\\_SCENARIO\\_CHORUS (7)：实时合唱场景，适用于网络状况良好且对延迟要求极高的场景。使用该枚举前需调用 getAudioDeviceInfo 查看音频设备是否支持超低延迟采集和播放。若要体验超低延迟，需确保音频设备支持超低延迟（isLowLatencyAudioSupported = true ）。
* AUDIO\\_SCENARIO\\_MEETING (8)：会议场景，以人声为主。
* AUDIO\\_SCENARIO\\_AI\\_CLIENT (10)：AI 对话场景，仅适用于用户与由 Conversational AI Engine 创建的对话式智能体交互的场景。

<a id="api_irtcengine_setaudioprofile__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setaudioprofile2" />

## setAudioProfile \\[2/2] [#setaudioprofile-22]

设置音频配置文件。

<a id="api_irtcengine_setaudioprofile2__prototype" />

\`\`\`java
public abstract int setAudioProfile(int profile);
\`\`\`

<a id="api_irtcengine_setaudioprofile2__detailed_desc" />

如果你需要设置音频场景，可以调用 [setAudioScenario](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario) 方法，或调用 [create](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_create_ilocalspatialaudioengine) 并在 [RtcEngineConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig) 中设置 \`mAudioScenario\`。

<a id="api_irtcengine_setaudioprofile2__scenario" />

### 适用场景 [#适用场景-3]

你可以根据实际需求选择合适的音频配置文件。例如，在音乐教学等对音质要求较高的场景中，建议将 \`profile\` 设置为 \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY\` （4）。如果你需要设置音频场景，可以调用 [setAudioScenario](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario)，或者调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 并在 [RtcEngineConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig) 中设置 \`audioScenario\`。

<a id="api_irtcengine_setaudioprofile2__timing" />

### 调用时机 [#调用时机-8]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_irtcengine_setaudioprofile2__parameters" />

### 参数 [#参数-6]

#### \`profile\` [#profile-1]

音频配置文件，包括采样率、码率、编码模式和声道数：

* DEFAULT （0）：默认配置。
  * 互动直播场景：采样率为 48 kHz，音乐编码，单声道，码率最高为 64 Kbps。
  * 通信场景：采样率为 32 kHz，语音编码，单声道，码率最高为 18 Kbps。
* SPEECH\\_STANDARD （1）：采样率为 32 kHz，语音编码，单声道，码率最高为 18 Kbps。
* MUSIC\\_STANDARD （2）：采样率为 48 kHz，音乐编码，单声道，码率最高为 64 Kbps。
* MUSIC\\_STANDARD\\_STEREO （3）：采样率为 48 kHz，音乐编码，立体声，码率最高为 80 Kbps。
* MUSIC\\_HIGH\\_QUALITY （4）：采样率为 48 kHz，音乐编码，单声道，码率最高为 96 Kbps。
* MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）：采样率为 48 kHz，音乐编码，立体声，码率最高为 128 Kbps。

<a id="api_irtcengine_setaudioprofile2__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setaudioscenario" />

## setAudioScenario [#setaudioscenario]

设置音频场景。

<a id="api_irtcengine_setaudioscenario__prototype" />

\`\`\`java
public abstract int setAudioScenario(int scenario);
\`\`\`

<a id="api_irtcengine_setaudioscenario__detailed_desc" />

<a id="api_irtcengine_setaudioscenario__scenario" />

### 适用场景 [#适用场景-4]

该方法适用于多种音频场景。例如，在对音质要求较高的音乐教学场景中，建议将 \`scenario\` 设置为 \`AUDIO_SCENARIO_GAME_STREAMING\` （3）。

<a id="api_irtcengine_setaudioscenario__timing" />

### 调用时机 [#调用时机-9]

你可以在加入频道前或后调用该方法。

<a id="api_irtcengine_setaudioscenario__parameters" />

### 参数 [#参数-7]

#### \`scenario\` [#scenario-1]

音频场景。在不同的音频场景下，设备使用不同的音量类型：

* AUDIO\\_SCENARIO\\_DEFAULT （0）：默认自动场景，SDK 会根据用户角色和音频路由选择合适的音质。
* AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）：高音质场景，适用于主要播放音乐的场景。
* AUDIO\\_SCENARIO\\_CHATROOM （5）：聊天室场景，适用于用户频繁切换角色或静音/取消静音麦克风的场景。
* AUDIO\\_SCENARIO\\_CHORUS （7）：实时合唱场景，适用于网络状况良好且对超低延迟有要求的场景。在使用该枚举值前，你需要调用 getAudioDeviceInfo 查看音频设备是否支持超低延迟采集和播放。若要体验超低延迟，需确保音频设备支持超低延迟（isLowLatencyAudioSupported = true ）。
* AUDIO\\_SCENARIO\\_MEETING （8）：会议场景，主要以人声为主。
* AUDIO\\_SCENARIO\\_AI\\_CLIENT （10）：AI 对话场景，仅适用于用户与由 Conversational AI Engine 创建的对话式智能体交互的场景。

<a id="api_irtcengine_setaudioscenario__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onactivespeaker" />

## onActiveSpeaker [#onactivespeaker]

最活跃远端说话人回调。

<a id="callback_irtcengineeventhandler_onactivespeaker__prototype" />

\`\`\`java
public void onActiveSpeaker(int uid)
\`\`\`

<a id="callback_irtcengineeventhandler_onactivespeaker__detailed_desc" />

成功调用 [enableAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication) 方法后，SDK 会持续检测哪位远端用户的音量最大。在当前周期内，音量被检测为最大次数最多的远端用户即为最活跃用户。当频道中用户数不少于两人，且存在活跃的远端说话人时，SDK 会触发该回调，并报告最活跃远端说话人的用户 ID。

* 如果最活跃的远端说话人始终是同一用户，SDK 只会触发一次该回调。
* 如果最活跃的远端说话人变更为其他用户，SDK 会再次触发该回调，并报告新的最活跃远端说话人的用户 ID。

<a id="callback_irtcengineeventhandler_onactivespeaker__timing" />

### 触发时机 [#触发时机]

该回调在检测到最活跃的远端说话人时被触发。

<a id="callback_irtcengineeventhandler_onactivespeaker__parameters" />

### 参数 [#参数-8]

#### \`uid\` [#uid-2]

最活跃远端说话用户的用户 ID。

### 所属接口类 [#所属接口类-10]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onaudioquality" />

## onAudioQuality [#onaudioquality]

报告每个远端用户发送的音频流的统计信息回调。

<a id="callback_irtcengineeventhandler_onaudioquality__prototype" />

\`\`\`java
public void onAudioQuality(int uid, int quality, short delay, short lost)
\`\`\`

<a id="callback_irtcengineeventhandler_onaudioquality__detailed_desc" />

#### \`废弃\` [#废弃-1]

该方法已废弃，请改用 [onRemoteAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats)。

该回调每两秒触发一次，用于报告每个正在发送音频流的远端用户的音频质量。

<a id="callback_irtcengineeventhandler_onaudioquality__parameters" />

### 参数 [#参数-9]

#### \`uid\` [#uid-3]

发送音频流的远端用户 ID。

#### \`quality\` [#quality]

用户的音频质量：

* QUALITY\\_UNKNOWN (0)：音质未知。
* QUALITY\\_EXCELLENT (1)：音质极佳。
* QUALITY\\_GOOD (2)：网络质量很好，但码率略低于极佳。
* QUALITY\\_POOR (3)：通话质量轻微受损。
* QUALITY\\_BAD (4)：无法流畅沟通。
* QUALITY\\_VBAD (5)：音质极差，几乎无法沟通。
* QUALITY\\_DOWN (6)：网络连接中断，完全无法沟通。
* QUALITY\\_DETECTING (8)：正在进行 Last-mile 网络探测。

#### \`delay\` [#delay]

从发送端到接收端的网络延迟（毫秒），包括音频采样预处理、网络传输和网络抖动缓冲造成的延迟。

#### \`lost\` [#lost]

从远端用户发送到接收端的音频数据包的丢包率（%）。

### 所属接口类 [#所属接口类-11]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onaudiovolumeindication" />

## onAudioVolumeIndication [#onaudiovolumeindication]

报告用户音量信息的回调。

<a id="callback_irtcengineeventhandler_onaudiovolumeindication__prototype" />

\`\`\`java
public void onAudioVolumeIndication(AudioVolumeInfo[] speakers, int totalVolume)
\`\`\`

<a id="callback_irtcengineeventhandler_onaudiovolumeindication__detailed_desc" />

默认情况下，该回调处于关闭状态。你可以通过调用 [enableAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication) 方法开启该回调。开启后，当用户在频道中发送音频流时，SDK 会根据 [enableAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication) 中设置的时间间隔触发该回调。SDK 会同时触发两个独立的 [onAudioVolumeIndication](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication) 回调，分别报告发送音频流的本地用户和瞬时音量最高的最多三位远端用户的音量信息。

注： 开启该回调后，即使本地用户调用 [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream) 方法静音，SDK 仍会继续报告本地用户的音量信息。

* 如果某位远端用户的音量在频道中排名前三，但停止发布音频流超过 20 秒，该回调将不再包含该用户的信息。
* 如果所有远端用户都停止发布音频流超过 20 秒，SDK 将不再触发远端用户的音量回调。

<a id="callback_irtcengineeventhandler_onaudiovolumeindication__parameters" />

### 参数 [#参数-10]

#### \`speakers\` [#speakers]

用户的音量信息。当该数组为空时，表示频道中没有远端用户或远端用户未发送音频流。详见 [AudioVolumeInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audiovolumeinfo)。

#### \`totalVolume\` [#totalvolume]

说话者的音量，取值范围为 \\[0, 255]。

* 对于本地用户的回调， totalVolume 是发送音频流的本地用户的音量。
* 对于远端用户的回调， totalVolume 是瞬时音量最高的最多三位远端用户的音量总和。
* 如果调用了 startAudioMixing，则 totalVolume 是混音后的音量。

### 所属接口类 [#所属接口类-12]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onfirstlocalaudioframepublished" />

## onFirstLocalAudioFramePublished [#onfirstlocalaudioframepublished]

本地音频首帧发布回调。

<a id="callback_irtcengineeventhandler_onfirstlocalaudioframepublished__prototype" />

\`\`\`java
public void onFirstLocalAudioFramePublished(int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onfirstlocalaudioframepublished__detailed_desc" />

当满足以下任一条件时，SDK 会触发该回调：

* 本地客户端启用音频模块并成功调用 joinChannel。
* 本地客户端依次调用 muteLocalAudioStream(true) 和 muteLocalAudioStream(false)。
* 本地客户端依次调用 disableAudio 和 enableAudio。
* 本地客户端调用 pushExternalAudioFrame 成功将音频帧推送至 SDK。

<a id="callback_irtcengineeventhandler_onfirstlocalaudioframepublished__timing" />

### 触发时机 [#触发时机-1]

该回调在本地音频首帧发布时被触发。

<a id="callback_irtcengineeventhandler_onfirstlocalaudioframepublished__parameters" />

### 参数 [#参数-11]

#### \`elapsed\` [#elapsed]

从本地用户调用 \`joinChannel\` 到 SDK 触发该回调的时间间隔（毫秒）。

### 所属接口类 [#所属接口类-13]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onfirstremoteaudiodecoded" />

## onFirstRemoteAudioDecoded [#onfirstremoteaudiodecoded]

首帧远端音频解码完成回调。

<a id="callback_irtcengineeventhandler_onfirstremoteaudiodecoded__prototype" />

\`\`\`java
public void onFirstRemoteAudioDecoded(int uid, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onfirstremoteaudiodecoded__detailed_desc" />

#### \`废弃\` [#废弃-2]

该方法已废弃，请改用 [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged)。

<a id="callback_irtcengineeventhandler_onfirstremoteaudiodecoded__timing" />

### 触发时机 [#触发时机-2]

该回调在以下场景中被触发：

* 远端用户加入频道并首次发送音频流。
* 远端用户音频从离线恢复为在线并重新发送音频流。可能的原因包括：远端用户离开频道、掉线、调用 muteLocalAudioStream 停止发送音频流，或调用 disableAudio 禁用音频。

<a id="callback_irtcengineeventhandler_onfirstremoteaudiodecoded__parameters" />

### 参数 [#参数-12]

#### \`uid\` [#uid-4]

远端用户 ID。

#### \`elapsed\` [#elapsed-1]

从本地用户调用 \`joinChannel\` 到 SDK 触发该回调的时间（毫秒）。

### 所属接口类 [#所属接口类-14]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onfirstremoteaudioframe" />

## onFirstRemoteAudioFrame [#onfirstremoteaudioframe]

远端用户音频首帧已接收回调。

<a id="callback_irtcengineeventhandler_onfirstremoteaudioframe__prototype" />

\`\`\`java
public void onFirstRemoteAudioFrame(int uid, int elapsed) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onfirstremoteaudioframe__detailed_desc" />

#### \`废弃\` [#废弃-3]

该方法已废弃，请改用 [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged)。

<a id="callback_irtcengineeventhandler_onfirstremoteaudioframe__timing" />

### 触发时机 [#触发时机-3]

该回调在 SDK 收到来自某个远端用户的首帧音频时被触发。

<a id="callback_irtcengineeventhandler_onfirstremoteaudioframe__parameters" />

### 参数 [#参数-13]

#### \`uid\` [#uid-5]

远端用户的用户 ID。

#### \`elapsed\` [#elapsed-2]

从本地用户调用 \`joinChannel\` 到 SDK 触发该回调的时间（毫秒）。

### 所属接口类 [#所属接口类-15]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onlocalaudiostatechanged" />

## onLocalAudioStateChanged [#onlocalaudiostatechanged]

本地音频流状态发生变化回调。

<a id="callback_irtcengineeventhandler_onlocalaudiostatechanged__prototype" />

\`\`\`java
public void onLocalAudioStateChanged(int state, int reason)
\`\`\`

<a id="callback_irtcengineeventhandler_onlocalaudiostatechanged__detailed_desc" />

当本地音频流的状态发生变化时，SDK 会触发该回调以报告当前状态，便于你在音频异常时排查问题。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当状态为 \`LOCAL_AUDIO_STREAM_STATE_FAILED\` （3）时，可以在 \`error\` 参数中查看错误信息。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onlocalaudiostatechanged__timing" />

### 触发时机 [#触发时机-4]

该回调在本地音频流状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onlocalaudiostatechanged__parameters" />

### 参数 [#参数-14]

#### \`state\` [#state]

本地音频的状态：

* LOCAL\\_AUDIO\\_STREAM\\_STATE\\_STOPPED （0）：本地音频处于初始状态。
* LOCAL\\_AUDIO\\_STREAM\\_STATE\\_RECORDING （1）：本地音频采集设备启动成功。
* LOCAL\\_AUDIO\\_STREAM\\_STATE\\_ENCODING （2）：首帧音频编码成功。
* LOCAL\\_AUDIO\\_STREAM\\_STATE\\_FAILED （3）：本地音频启动失败。

#### \`reason\` [#reason]

本地音频状态变化的原因：

* LOCAL\\_AUDIO\\_STREAM\\_REASON\\_OK （0）：本地音频状态正常。
* LOCAL\\_AUDIO\\_STREAM\\_REASON\\_FAILURE （1）：本地音频失败的原因不明确。提示用户尝试重新加入频道。
* LOCAL\\_AUDIO\\_STREAM\\_REASON\\_DEVICE\\_NO\\_PERMISSION （2）：没有权限使用本地音频采集设备。提示用户授予权限。
* LOCAL\\_AUDIO\\_STREAM\\_REASON\\_DEVICE\\_BUSY （3）：麦克风被占用。提示用户检查是否有其他应用占用了麦克风。麦克风空闲约五秒后本地音频采集会自动恢复，也可以在麦克风空闲后尝试重新加入频道。
* LOCAL\\_AUDIO\\_STREAM\\_REASON\\_CAPTURE\\_FAILURE （4）：本地音频采集失败。
* LOCAL\\_AUDIO\\_STREAM\\_REASON\\_ENCODE\\_FAILURE （5）：本地音频编码失败。
* LOCAL\\_AUDIO\\_STREAM\\_REASON\\_INTERRUPTED （8）：本地音频采集被系统电话、智能助手或闹钟中断。如果需要继续采集本地音频，提示用户结束电话、智能助手或闹钟。

### 所属接口类 [#所属接口类-16]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onlocalaudiostats" />

## onLocalAudioStats [#onlocalaudiostats]

本地音频流统计信息回调。

<a id="callback_irtcengineeventhandler_onlocalaudiostats__prototype" />

\`\`\`java
public void onLocalAudioStats(LocalAudioStats stats) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onlocalaudiostats__detailed_desc" />

该回调每两秒触发一次。

<a id="callback_irtcengineeventhandler_onlocalaudiostats__timing" />

### 触发时机 [#触发时机-5]

该回调每两秒触发一次。

<a id="callback_irtcengineeventhandler_onlocalaudiostats__parameters" />

### 参数 [#参数-15]

#### \`stats\` [#stats]

本地音频统计信息。详见 [LocalAudioStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localaudiostats)。

### 所属接口类 [#所属接口类-17]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onremoteaudiostatechanged" />

## onRemoteAudioStateChanged [#onremoteaudiostatechanged]

远端音频状态发生变化回调。

<a id="callback_irtcengineeventhandler_onremoteaudiostatechanged__prototype" />

\`\`\`java
public void onRemoteAudioStateChanged(int uid, int state, int reason, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onremoteaudiostatechanged__detailed_desc" />

该回调在语音/视频通话频道中的远端用户或直播频道中的主播的音频状态发生变化时被触发，用于报告远端音频流的当前状态。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当频道中的用户（通信场景）或主播（直播场景）数量超过 32 时，该回调可能无法正常工作。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onremoteaudiostatechanged__timing" />

### 触发时机 [#触发时机-6]

该回调在远端用户的音频状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onremoteaudiostatechanged__parameters" />

### 参数 [#参数-16]

#### \`uid\` [#uid-6]

音频状态发生变化的远端用户 ID。

#### \`state\` [#state-1]

远端音频状态：

* REMOTE\\_AUDIO\\_STATE\\_STOPPED （0）：远端音频处于初始状态。SDK 在 REMOTE\\_AUDIO\\_REASON\\_LOCAL\\_MUTED、 REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_MUTED 或 REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_OFFLINE 的情况下报告该状态。
* REMOTE\\_AUDIO\\_STATE\\_STARTING （1）：已接收到第一包远端音频数据。
* REMOTE\\_AUDIO\\_STATE\\_DECODING （2）：远端音频流解码并正常播放。SDK 在 REMOTE\\_AUDIO\\_REASON\\_NETWORK\\_RECOVERY、 REMOTE\\_AUDIO\\_REASON\\_LOCAL\\_UNMUTED 或 REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_UNMUTED 的情况下报告该状态。
* REMOTE\\_AUDIO\\_STATE\\_FROZEN （3）：远端音频卡顿。SDK 在 REMOTE\\_AUDIO\\_REASON\\_NETWORK\\_CONGESTION 的情况下报告该状态。
* REMOTE\\_AUDIO\\_STATE\\_FAILED （4）：远端音频启动失败。SDK 在 REMOTE\\_AUDIO\\_REASON\\_INTERNAL 的情况下报告该状态。

#### \`reason\` [#reason-1]

远端音频状态变化的原因：

* REMOTE\\_AUDIO\\_REASON\\_INTERNAL （0）：SDK 音频状态改变时报告该原因。
* REMOTE\\_AUDIO\\_REASON\\_NETWORK\\_CONGESTION （1）：网络拥塞。
* REMOTE\\_AUDIO\\_REASON\\_NETWORK\\_RECOVERY （2）：网络恢复。
* REMOTE\\_AUDIO\\_REASON\\_LOCAL\\_MUTED （3）：本地用户停止接收远端音频流或关闭音频模块。
* REMOTE\\_AUDIO\\_REASON\\_LOCAL\\_UNMUTED （4）：本地用户恢复接收远端音频流或开启音频模块。
* REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_MUTED （5）：远端用户停止发送音频流或关闭音频模块。
* REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_UNMUTED （6）：远端用户恢复发送音频流或开启音频模块。
* REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_OFFLINE （7）：远端用户离开频道。

#### \`elapsed\` [#elapsed-3]

从本地用户调用 \`joinChannel\` 方法到 SDK 触发该回调的时间（毫秒）。

### 所属接口类 [#所属接口类-18]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onremoteaudiostats" />

## onRemoteAudioStats [#onremoteaudiostats]

报告每个远端音频流的传输层统计信息回调。

<a id="callback_irtcengineeventhandler_onremoteaudiostats__prototype" />

\`\`\`java
public void onRemoteAudioStats(RemoteAudioStats stats) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onremoteaudiostats__detailed_desc" />

该回调每两秒触发一次。如果频道中有多个远端用户，SDK 会分别为每个用户触发该回调。

<a id="callback_irtcengineeventhandler_onremoteaudiostats__parameters" />

### 参数 [#参数-17]

#### \`stats\` [#stats-1]

远端音频流的统计信息。详见 [RemoteAudioStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remoteaudiostats)。

### 所属接口类 [#所属接口类-19]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onremoteaudiotransportstats" />

## onRemoteAudioTransportStats [#onremoteaudiotransportstats]

上报每个远端音频流的传输层统计信息。

<a id="callback_irtcengineeventhandler_onremoteaudiotransportstats__prototype" />

\`\`\`java
public void onRemoteAudioTransportStats(int uid, int delay, int lost, int rxKBitRate)
\`\`\`

<a id="callback_irtcengineeventhandler_onremoteaudiotransportstats__detailed_desc" />

#### \`废弃\` [#废弃-4]

该回调已废弃，请使用 [onRemoteAudioStats](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats) 代替。

该回调上报远端音频流的传输层统计信息，例如本地用户接收到远端用户音频包后的丢包率和网络时延。

<a id="callback_irtcengineeventhandler_onremoteaudiotransportstats__timing" />

### 触发时机 [#触发时机-7]

该回调在通话过程中，当本地用户接收到远端用户发送的音频包时每 2 秒被触发。

<a id="callback_irtcengineeventhandler_onremoteaudiotransportstats__parameters" />

### 参数 [#参数-18]

#### \`uid\` [#uid-7]

远端用户 ID，即发送音频流的用户。

#### \`delay\` [#delay-1]

从远端用户到接收端的网络时延，单位为毫秒。

#### \`lost\` [#lost-1]

从远端用户到接收端的音频包丢包率，单位为百分比（%）。

#### \`rxKBitRate\` [#rxkbitrate]

接收到的音频码率，单位为 Kbps。

### 所属接口类 [#所属接口类-20]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onusermuteaudio" />

## onUserMuteAudio [#onusermuteaudio]

远端用户或主播停止或恢复发送音频流的回调。

<a id="callback_irtcengineeventhandler_onusermuteaudio__prototype" />

\`\`\`java
public void onUserMuteAudio(int uid, boolean muted)
\`\`\`

<a id="callback_irtcengineeventhandler_onusermuteaudio__detailed_desc" />

该回调在远端用户调用 [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream) 方法时触发。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当频道中用户（在通信场景下）或主播（在直播场景下）数量超过 32 时，该回调可能无法正常工作。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onusermuteaudio__timing" />

### 触发时机 [#触发时机-8]

该回调在远端用户调用 [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream) 方法停止或恢复发送音频流时被触发。

<a id="callback_irtcengineeventhandler_onusermuteaudio__parameters" />

### 参数 [#参数-19]

#### \`uid\` [#uid-8]

远端用户 ID。

#### \`muted\` [#muted]

远端用户的音频流是否被静音：

* true：音频流被静音。
* false：音频流未被静音。

### 所属接口类 [#所属接口类-21]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "adjustplaybacksignalvolume",
    content: "调节所有远端用户的本地播放音量。"
  }, {
    heading: "adjustplaybacksignalvolume",
    content: "如果你需要调节某个指定远端用户在本地播放的音量，建议调用 adjustUserPlaybackSignalVolume。"
  }, {
    heading: "调用时机",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "volume",
    content: "用户的音量，取值范围为 \\[0,400]。"
  }, {
    heading: "volume",
    content: "0：静音。"
  }, {
    heading: "volume",
    content: "100：（默认）原始音量。"
  }, {
    heading: "volume",
    content: "400：原始音量的四倍（将音频信号放大四倍）。"
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
    heading: "adjustuserplaybacksignalvolume",
    content: "调节指定远端用户的播放音量。"
  }, {
    heading: "adjustuserplaybacksignalvolume",
    content: "你可以调用该方法调节指定远端用户的播放音量。若需调节多个远端用户的播放音量，请分别多次调用该方法，每次针对一个远端用户。"
  }, {
    heading: "调用时机-1",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "uid",
    content: "远端用户的用户 ID。"
  }, {
    heading: "volume-1",
    content: "用户的音量，取值范围为 \\[0, 400]。"
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
    content: "RtcEngine"
  }, {
    heading: "adjustuserplaybacksignalvolumeex",
    content: "调整指定远端用户的播放音量。"
  }, {
    heading: "adjustuserplaybacksignalvolumeex",
    content: "你可以调用此方法调整指定远端用户的播放音量。若需调整多个远端用户的播放音量，请分别多次调用此方法，每次针对一个远端用户。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-2",
    content: "请在调用 joinChannelEx 后调用此方法。"
  }, {
    heading: "uid-1",
    content: "远端用户的用户 ID。"
  }, {
    heading: "volume-2",
    content: "用户的音量，取值范围为 \\[0, 400]。"
  }, {
    heading: "volume-2",
    content: "0：静音。"
  }, {
    heading: "volume-2",
    content: "100：（默认）原始音量。"
  }, {
    heading: "volume-2",
    content: "400：原始音量的四倍（将音频信号放大四倍）。"
  }, {
    heading: "connection",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngineEx"
  }, {
    heading: "disableaudio",
    content: "禁用音频模块。"
  }, {
    heading: "disableaudio",
    content: "音频模块默认启用。你可以调用该方法来禁用。"
  }, {
    heading: "disableaudio",
    content: "注： 该方法会重置内部引擎，并需要一些时间生效。声网建议使用以下 API 分别控制音频模块："
  }, {
    heading: "disableaudio",
    content: "enableLocalAudio：是否启用麦克风以创建本地音频流。"
  }, {
    heading: "disableaudio",
    content: "muteLocalAudioStream：是否发布本地音频流。"
  }, {
    heading: "disableaudio",
    content: "muteRemoteAudioStream：是否订阅并播放远端音频流。"
  }, {
    heading: "disableaudio",
    content: "muteAllRemoteAudioStreams：是否订阅并播放所有远端音频流。"
  }, {
    heading: "调用时机-3",
    content: "该方法可以在加入频道前或加入频道后调用。离开频道后仍然有效。"
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
    heading: "enableaudio",
    content: "启用音频模块。"
  }, {
    heading: "enableaudio",
    content: "调用 disableAudio 方法禁用音频模块后，可以调用 enableAudio 方法重新启用。"
  }, {
    heading: "enableaudio",
    content: "注："
  }, {
    heading: "enableaudio",
    content: "调用此方法会重置整个引擎，可能导致响应时间变慢。你可以根据实际需求，使用以下方法分别控制音频模块的具体功能："
  }, {
    heading: "enableaudio",
    content: "enableLocalAudio：是否启用麦克风以创建本地音频流。"
  }, {
    heading: "enableaudio",
    content: "muteLocalAudioStream：是否发布本地音频流。"
  }, {
    heading: "enableaudio",
    content: "muteRemoteAudioStream：是否订阅并播放远端音频流。"
  }, {
    heading: "enableaudio",
    content: "muteAllRemoteAudioStreams：是否订阅并播放所有远端音频流。"
  }, {
    heading: "enableaudio",
    content: "成功调用此方法会重置 enableLocalAudio、 muteRemoteAudioStream 和 muteAllRemoteAudioStreams 的状态，请谨慎使用。"
  }, {
    heading: "调用时机-4",
    content: "该方法可以在加入频道前或加入频道后调用，离开频道后仍然有效。"
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
    heading: "enableaudiovolumeindication",
    content: "启用用户音量提示上报功能。"
  }, {
    heading: "enableaudiovolumeindication",
    content: "该方法用于启用 SDK 定期向应用上报本地发送流的用户和音量瞬时值最高的最多三位远端用户的音量信息。"
  }, {
    heading: "调用时机-5",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "相关回调",
    content: "成功调用该方法后，若频道中有用户正在发布流，SDK 会根据设置的时间间隔触发 onAudioVolumeIndication 回调。"
  }, {
    heading: "interval",
    content: "设置两次音量提示之间的时间间隔（毫秒）："
  }, {
    heading: "interval",
    content: "≤ 0：关闭音量提示。"
  }, {
    heading: "interval",
    content: "\\> 0：两次音量提示之间的时间间隔（毫秒）。该值需大于 10，否则无法收到 onAudioVolumeIndication 回调。建议设置为大于 100。"
  }, {
    heading: "smooth",
    content: "设置音量提示的灵敏度平滑系数。取值范围为 0 到 10，推荐值为 3。数值越大，提示越灵敏。"
  }, {
    heading: "reportvad",
    content: "true：启用本地用户的语音活动检测。启用后， onAudioVolumeIndication 回调中的 vad 参数会报告本地用户的语音活动状态。"
  }, {
    heading: "reportvad",
    content: "false：（默认）关闭本地用户的语音活动检测。关闭后， onAudioVolumeIndication 回调中的 vad 参数不会报告本地用户的语音活动状态，除非引擎自动检测到语音活动。"
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
    heading: "enableaudiovolumeindicationex",
    content: "启用用户音量提示的上报功能。"
  }, {
    heading: "enableaudiovolumeindicationex",
    content: "该方法使 SDK 能够定期向应用上报本地发送音频流的用户和音量瞬时值最高的最多三位远端用户的音量信息。"
  }, {
    heading: "适用场景-1",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-6",
    content: "请在调用 joinChannelEx 之后调用该方法。"
  }, {
    heading: "相关回调-1",
    content: "如果该方法调用成功且频道中有用户发布音频流，SDK 会根据设置的时间间隔触发 onAudioVolumeIndication 回调。"
  }, {
    heading: "interval-1",
    content: "设置两次音量提示之间的时间间隔（单位为毫秒）："
  }, {
    heading: "interval-1",
    content: "≤ 0：关闭音量提示功能。"
  }, {
    heading: "interval-1",
    content: "\\> 0：两次音量提示之间的时间间隔。该值需大于 10，否则无法收到 onAudioVolumeIndication 回调。建议设置为大于 100。"
  }, {
    heading: "smooth-1",
    content: "设置音量提示的灵敏度平滑系数，取值范围为 \\[0, 10]，推荐值为 3。数值越大，提示越灵敏。"
  }, {
    heading: "reportvad-1",
    content: "是否启用本地用户的语音活动检测（VAD）："
  }, {
    heading: "reportvad-1",
    content: "true：启用语音活动检测， onAudioVolumeIndication 回调中的 vad 参数会报告本地用户的语音活动状态。"
  }, {
    heading: "reportvad-1",
    content: "false：（默认）关闭语音活动检测， vad 参数不会报告本地用户的语音活动状态，除非引擎自动检测到语音活动。"
  }, {
    heading: "connection-1",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "返回值-6",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-6",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngineEx"
  }, {
    heading: "setaudioprofile-12",
    content: "设置音频配置和音频场景。"
  }, {
    heading: "废弃",
    content: "该方法已废弃。请使用 `setAudioProfile(int profile)` 设置音频配置，使用 `setAudioScenario(int scenario)` 设置音频场景。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多种音频场景，你可以根据实际需求进行选择。例如，在对音质要求较高的场景（如音乐教学）中，建议将 `profile` 设置为 `AUDIO_PROFILE_MUSIC_HIGH_QUALITY` （4），将 `scenario` 设置为 `AUDIO_SCENARIO_GAME_STREAMING` （3）。你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "调用时机-7",
    content: "你可以在加入频道前或后调用该方法。"
  }, {
    heading: "profile",
    content: "音频配置，包括采样率、码率、编码模式和声道数，详见 `profile`："
  }, {
    heading: "profile",
    content: "DEFAULT (0)：默认值。"
  }, {
    heading: "profile",
    content: "互动直播场景：采样率 48 kHz，音乐编码，单声道，码率最高 64 Kbps。"
  }, {
    heading: "profile",
    content: "通信场景：采样率 32 kHz，语音编码，单声道，码率最高 18 Kbps。"
  }, {
    heading: "profile",
    content: "SPEECH\\_STANDARD (1)：采样率 32 kHz，语音编码，单声道，码率最高 18 Kbps。"
  }, {
    heading: "profile",
    content: "MUSIC\\_STANDARD (2)：采样率 48 kHz，音乐编码，单声道，码率最高 64 Kbps。"
  }, {
    heading: "profile",
    content: "MUSIC\\_STANDARD\\_STEREO (3)：采样率 48 kHz，音乐编码，立体声，码率最高 80 Kbps。"
  }, {
    heading: "profile",
    content: "MUSIC\\_HIGH\\_QUALITY (4)：采样率 48 kHz，音乐编码，单声道，码率最高 96 Kbps。"
  }, {
    heading: "profile",
    content: "MUSIC\\_HIGH\\_QUALITY\\_STEREO (5)：采样率 48 kHz，音乐编码，立体声，码率最高 128 Kbps。"
  }, {
    heading: "scenario",
    content: "音频场景，不同场景下设备使用不同的音量类型，详见 `scenario`："
  }, {
    heading: "scenario",
    content: "AUDIO\\_SCENARIO\\_DEFAULT (0)：默认自动场景，SDK 会根据用户角色和音频路由选择合适的音频质量。"
  }, {
    heading: "scenario",
    content: "AUDIO\\_SCENARIO\\_GAME\\_STREAMING (3)：高音质场景，适用于主要播放音乐的场景。"
  }, {
    heading: "scenario",
    content: "AUDIO\\_SCENARIO\\_CHATROOM (5)：聊天室场景，适用于频繁切换角色或静音/取消静音麦克风的场景。"
  }, {
    heading: "scenario",
    content: "AUDIO\\_SCENARIO\\_CHORUS (7)：实时合唱场景，适用于网络状况良好且对延迟要求极高的场景。使用该枚举前需调用 getAudioDeviceInfo 查看音频设备是否支持超低延迟采集和播放。若要体验超低延迟，需确保音频设备支持超低延迟（isLowLatencyAudioSupported = true ）。"
  }, {
    heading: "scenario",
    content: "AUDIO\\_SCENARIO\\_MEETING (8)：会议场景，以人声为主。"
  }, {
    heading: "scenario",
    content: "AUDIO\\_SCENARIO\\_AI\\_CLIENT (10)：AI 对话场景，仅适用于用户与由 Conversational AI Engine 创建的对话式智能体交互的场景。"
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
    heading: "setaudioprofile-22",
    content: "设置音频配置文件。"
  }, {
    heading: "setaudioprofile-22",
    content: "如果你需要设置音频场景，可以调用 setAudioScenario 方法，或调用 create 并在 RtcEngineConfig 中设置 `mAudioScenario`。"
  }, {
    heading: "适用场景-3",
    content: "你可以根据实际需求选择合适的音频配置文件。例如，在音乐教学等对音质要求较高的场景中，建议将 `profile` 设置为 `AUDIO_PROFILE_MUSIC_HIGH_QUALITY` （4）。如果你需要设置音频场景，可以调用 setAudioScenario，或者调用 create \\[2/2] 并在 RtcEngineConfig 中设置 `audioScenario`。"
  }, {
    heading: "调用时机-8",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "profile-1",
    content: "音频配置文件，包括采样率、码率、编码模式和声道数："
  }, {
    heading: "profile-1",
    content: "DEFAULT （0）：默认配置。"
  }, {
    heading: "profile-1",
    content: "互动直播场景：采样率为 48 kHz，音乐编码，单声道，码率最高为 64 Kbps。"
  }, {
    heading: "profile-1",
    content: "通信场景：采样率为 32 kHz，语音编码，单声道，码率最高为 18 Kbps。"
  }, {
    heading: "profile-1",
    content: "SPEECH\\_STANDARD （1）：采样率为 32 kHz，语音编码，单声道，码率最高为 18 Kbps。"
  }, {
    heading: "profile-1",
    content: "MUSIC\\_STANDARD （2）：采样率为 48 kHz，音乐编码，单声道，码率最高为 64 Kbps。"
  }, {
    heading: "profile-1",
    content: "MUSIC\\_STANDARD\\_STEREO （3）：采样率为 48 kHz，音乐编码，立体声，码率最高为 80 Kbps。"
  }, {
    heading: "profile-1",
    content: "MUSIC\\_HIGH\\_QUALITY （4）：采样率为 48 kHz，音乐编码，单声道，码率最高为 96 Kbps。"
  }, {
    heading: "profile-1",
    content: "MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）：采样率为 48 kHz，音乐编码，立体声，码率最高为 128 Kbps。"
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
    heading: "setaudioscenario",
    content: "设置音频场景。"
  }, {
    heading: "适用场景-4",
    content: "该方法适用于多种音频场景。例如，在对音质要求较高的音乐教学场景中，建议将 `scenario` 设置为 `AUDIO_SCENARIO_GAME_STREAMING` （3）。"
  }, {
    heading: "调用时机-9",
    content: "你可以在加入频道前或后调用该方法。"
  }, {
    heading: "scenario-1",
    content: "音频场景。在不同的音频场景下，设备使用不同的音量类型："
  }, {
    heading: "scenario-1",
    content: "AUDIO\\_SCENARIO\\_DEFAULT （0）：默认自动场景，SDK 会根据用户角色和音频路由选择合适的音质。"
  }, {
    heading: "scenario-1",
    content: "AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）：高音质场景，适用于主要播放音乐的场景。"
  }, {
    heading: "scenario-1",
    content: "AUDIO\\_SCENARIO\\_CHATROOM （5）：聊天室场景，适用于用户频繁切换角色或静音/取消静音麦克风的场景。"
  }, {
    heading: "scenario-1",
    content: "AUDIO\\_SCENARIO\\_CHORUS （7）：实时合唱场景，适用于网络状况良好且对超低延迟有要求的场景。在使用该枚举值前，你需要调用 getAudioDeviceInfo 查看音频设备是否支持超低延迟采集和播放。若要体验超低延迟，需确保音频设备支持超低延迟（isLowLatencyAudioSupported = true ）。"
  }, {
    heading: "scenario-1",
    content: "AUDIO\\_SCENARIO\\_MEETING （8）：会议场景，主要以人声为主。"
  }, {
    heading: "scenario-1",
    content: "AUDIO\\_SCENARIO\\_AI\\_CLIENT （10）：AI 对话场景，仅适用于用户与由 Conversational AI Engine 创建的对话式智能体交互的场景。"
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
    heading: "onactivespeaker",
    content: "最活跃远端说话人回调。"
  }, {
    heading: "onactivespeaker",
    content: "成功调用 enableAudioVolumeIndication 方法后，SDK 会持续检测哪位远端用户的音量最大。在当前周期内，音量被检测为最大次数最多的远端用户即为最活跃用户。当频道中用户数不少于两人，且存在活跃的远端说话人时，SDK 会触发该回调，并报告最活跃远端说话人的用户 ID。"
  }, {
    heading: "onactivespeaker",
    content: "如果最活跃的远端说话人始终是同一用户，SDK 只会触发一次该回调。"
  }, {
    heading: "onactivespeaker",
    content: "如果最活跃的远端说话人变更为其他用户，SDK 会再次触发该回调，并报告新的最活跃远端说话人的用户 ID。"
  }, {
    heading: "触发时机",
    content: "该回调在检测到最活跃的远端说话人时被触发。"
  }, {
    heading: "uid-2",
    content: "最活跃远端说话用户的用户 ID。"
  }, {
    heading: "所属接口类-10",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onaudioquality",
    content: "报告每个远端用户发送的音频流的统计信息回调。"
  }, {
    heading: "废弃-1",
    content: "该方法已废弃，请改用 onRemoteAudioStats。"
  }, {
    heading: "废弃-1",
    content: "该回调每两秒触发一次，用于报告每个正在发送音频流的远端用户的音频质量。"
  }, {
    heading: "uid-3",
    content: "发送音频流的远端用户 ID。"
  }, {
    heading: "quality",
    content: "用户的音频质量："
  }, {
    heading: "quality",
    content: "QUALITY\\_UNKNOWN (0)：音质未知。"
  }, {
    heading: "quality",
    content: "QUALITY\\_EXCELLENT (1)：音质极佳。"
  }, {
    heading: "quality",
    content: "QUALITY\\_GOOD (2)：网络质量很好，但码率略低于极佳。"
  }, {
    heading: "quality",
    content: "QUALITY\\_POOR (3)：通话质量轻微受损。"
  }, {
    heading: "quality",
    content: "QUALITY\\_BAD (4)：无法流畅沟通。"
  }, {
    heading: "quality",
    content: "QUALITY\\_VBAD (5)：音质极差，几乎无法沟通。"
  }, {
    heading: "quality",
    content: "QUALITY\\_DOWN (6)：网络连接中断，完全无法沟通。"
  }, {
    heading: "quality",
    content: "QUALITY\\_DETECTING (8)：正在进行 Last-mile 网络探测。"
  }, {
    heading: "delay",
    content: "从发送端到接收端的网络延迟（毫秒），包括音频采样预处理、网络传输和网络抖动缓冲造成的延迟。"
  }, {
    heading: "lost",
    content: "从远端用户发送到接收端的音频数据包的丢包率（%）。"
  }, {
    heading: "所属接口类-11",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onaudiovolumeindication",
    content: "报告用户音量信息的回调。"
  }, {
    heading: "onaudiovolumeindication",
    content: "默认情况下，该回调处于关闭状态。你可以通过调用 enableAudioVolumeIndication 方法开启该回调。开启后，当用户在频道中发送音频流时，SDK 会根据 enableAudioVolumeIndication 中设置的时间间隔触发该回调。SDK 会同时触发两个独立的 onAudioVolumeIndication 回调，分别报告发送音频流的本地用户和瞬时音量最高的最多三位远端用户的音量信息。"
  }, {
    heading: "onaudiovolumeindication",
    content: "注： 开启该回调后，即使本地用户调用 muteLocalAudioStream 方法静音，SDK 仍会继续报告本地用户的音量信息。"
  }, {
    heading: "onaudiovolumeindication",
    content: "如果某位远端用户的音量在频道中排名前三，但停止发布音频流超过 20 秒，该回调将不再包含该用户的信息。"
  }, {
    heading: "onaudiovolumeindication",
    content: "如果所有远端用户都停止发布音频流超过 20 秒，SDK 将不再触发远端用户的音量回调。"
  }, {
    heading: "speakers",
    content: "用户的音量信息。当该数组为空时，表示频道中没有远端用户或远端用户未发送音频流。详见 AudioVolumeInfo。"
  }, {
    heading: "totalvolume",
    content: "说话者的音量，取值范围为 \\[0, 255]。"
  }, {
    heading: "totalvolume",
    content: "对于本地用户的回调， totalVolume 是发送音频流的本地用户的音量。"
  }, {
    heading: "totalvolume",
    content: "对于远端用户的回调， totalVolume 是瞬时音量最高的最多三位远端用户的音量总和。"
  }, {
    heading: "totalvolume",
    content: "如果调用了 startAudioMixing，则 totalVolume 是混音后的音量。"
  }, {
    heading: "所属接口类-12",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onfirstlocalaudioframepublished",
    content: "本地音频首帧发布回调。"
  }, {
    heading: "onfirstlocalaudioframepublished",
    content: "当满足以下任一条件时，SDK 会触发该回调："
  }, {
    heading: "onfirstlocalaudioframepublished",
    content: "本地客户端启用音频模块并成功调用 joinChannel。"
  }, {
    heading: "onfirstlocalaudioframepublished",
    content: "本地客户端依次调用 muteLocalAudioStream(true) 和 muteLocalAudioStream(false)。"
  }, {
    heading: "onfirstlocalaudioframepublished",
    content: "本地客户端依次调用 disableAudio 和 enableAudio。"
  }, {
    heading: "onfirstlocalaudioframepublished",
    content: "本地客户端调用 pushExternalAudioFrame 成功将音频帧推送至 SDK。"
  }, {
    heading: "触发时机-1",
    content: "该回调在本地音频首帧发布时被触发。"
  }, {
    heading: "elapsed",
    content: "从本地用户调用 `joinChannel` 到 SDK 触发该回调的时间间隔（毫秒）。"
  }, {
    heading: "所属接口类-13",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onfirstremoteaudiodecoded",
    content: "首帧远端音频解码完成回调。"
  }, {
    heading: "废弃-2",
    content: "该方法已废弃，请改用 onRemoteAudioStateChanged。"
  }, {
    heading: "触发时机-2",
    content: "该回调在以下场景中被触发："
  }, {
    heading: "触发时机-2",
    content: "远端用户加入频道并首次发送音频流。"
  }, {
    heading: "触发时机-2",
    content: "远端用户音频从离线恢复为在线并重新发送音频流。可能的原因包括：远端用户离开频道、掉线、调用 muteLocalAudioStream 停止发送音频流，或调用 disableAudio 禁用音频。"
  }, {
    heading: "uid-4",
    content: "远端用户 ID。"
  }, {
    heading: "elapsed-1",
    content: "从本地用户调用 `joinChannel` 到 SDK 触发该回调的时间（毫秒）。"
  }, {
    heading: "所属接口类-14",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onfirstremoteaudioframe",
    content: "远端用户音频首帧已接收回调。"
  }, {
    heading: "废弃-3",
    content: "该方法已废弃，请改用 onRemoteAudioStateChanged。"
  }, {
    heading: "触发时机-3",
    content: "该回调在 SDK 收到来自某个远端用户的首帧音频时被触发。"
  }, {
    heading: "uid-5",
    content: "远端用户的用户 ID。"
  }, {
    heading: "elapsed-2",
    content: "从本地用户调用 `joinChannel` 到 SDK 触发该回调的时间（毫秒）。"
  }, {
    heading: "所属接口类-15",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onlocalaudiostatechanged",
    content: "本地音频流状态发生变化回调。"
  }, {
    heading: "onlocalaudiostatechanged",
    content: "当本地音频流的状态发生变化时，SDK 会触发该回调以报告当前状态，便于你在音频异常时排查问题。"
  }, {
    heading: "onlocalaudiostatechanged",
    content: "当状态为 `LOCAL_AUDIO_STREAM_STATE_FAILED` （3）时，可以在 `error` 参数中查看错误信息。"
  }, {
    heading: "触发时机-4",
    content: "该回调在本地音频流状态发生变化时被触发。"
  }, {
    heading: "state",
    content: "本地音频的状态："
  }, {
    heading: "state",
    content: "LOCAL\\_AUDIO\\_STREAM\\_STATE\\_STOPPED （0）：本地音频处于初始状态。"
  }, {
    heading: "state",
    content: "LOCAL\\_AUDIO\\_STREAM\\_STATE\\_RECORDING （1）：本地音频采集设备启动成功。"
  }, {
    heading: "state",
    content: "LOCAL\\_AUDIO\\_STREAM\\_STATE\\_ENCODING （2）：首帧音频编码成功。"
  }, {
    heading: "state",
    content: "LOCAL\\_AUDIO\\_STREAM\\_STATE\\_FAILED （3）：本地音频启动失败。"
  }, {
    heading: "reason",
    content: "本地音频状态变化的原因："
  }, {
    heading: "reason",
    content: "LOCAL\\_AUDIO\\_STREAM\\_REASON\\_OK （0）：本地音频状态正常。"
  }, {
    heading: "reason",
    content: "LOCAL\\_AUDIO\\_STREAM\\_REASON\\_FAILURE （1）：本地音频失败的原因不明确。提示用户尝试重新加入频道。"
  }, {
    heading: "reason",
    content: "LOCAL\\_AUDIO\\_STREAM\\_REASON\\_DEVICE\\_NO\\_PERMISSION （2）：没有权限使用本地音频采集设备。提示用户授予权限。"
  }, {
    heading: "reason",
    content: "LOCAL\\_AUDIO\\_STREAM\\_REASON\\_DEVICE\\_BUSY （3）：麦克风被占用。提示用户检查是否有其他应用占用了麦克风。麦克风空闲约五秒后本地音频采集会自动恢复，也可以在麦克风空闲后尝试重新加入频道。"
  }, {
    heading: "reason",
    content: "LOCAL\\_AUDIO\\_STREAM\\_REASON\\_CAPTURE\\_FAILURE （4）：本地音频采集失败。"
  }, {
    heading: "reason",
    content: "LOCAL\\_AUDIO\\_STREAM\\_REASON\\_ENCODE\\_FAILURE （5）：本地音频编码失败。"
  }, {
    heading: "reason",
    content: "LOCAL\\_AUDIO\\_STREAM\\_REASON\\_INTERRUPTED （8）：本地音频采集被系统电话、智能助手或闹钟中断。如果需要继续采集本地音频，提示用户结束电话、智能助手或闹钟。"
  }, {
    heading: "所属接口类-16",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onlocalaudiostats",
    content: "本地音频流统计信息回调。"
  }, {
    heading: "onlocalaudiostats",
    content: "该回调每两秒触发一次。"
  }, {
    heading: "触发时机-5",
    content: "该回调每两秒触发一次。"
  }, {
    heading: "stats",
    content: "本地音频统计信息。详见 LocalAudioStats。"
  }, {
    heading: "所属接口类-17",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onremoteaudiostatechanged",
    content: "远端音频状态发生变化回调。"
  }, {
    heading: "onremoteaudiostatechanged",
    content: "该回调在语音/视频通话频道中的远端用户或直播频道中的主播的音频状态发生变化时被触发，用于报告远端音频流的当前状态。"
  }, {
    heading: "onremoteaudiostatechanged",
    content: "当频道中的用户（通信场景）或主播（直播场景）数量超过 32 时，该回调可能无法正常工作。"
  }, {
    heading: "触发时机-6",
    content: "该回调在远端用户的音频状态发生变化时被触发。"
  }, {
    heading: "uid-6",
    content: "音频状态发生变化的远端用户 ID。"
  }, {
    heading: "state-1",
    content: "远端音频状态："
  }, {
    heading: "state-1",
    content: "REMOTE\\_AUDIO\\_STATE\\_STOPPED （0）：远端音频处于初始状态。SDK 在 REMOTE\\_AUDIO\\_REASON\\_LOCAL\\_MUTED、 REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_MUTED 或 REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_OFFLINE 的情况下报告该状态。"
  }, {
    heading: "state-1",
    content: "REMOTE\\_AUDIO\\_STATE\\_STARTING （1）：已接收到第一包远端音频数据。"
  }, {
    heading: "state-1",
    content: "REMOTE\\_AUDIO\\_STATE\\_DECODING （2）：远端音频流解码并正常播放。SDK 在 REMOTE\\_AUDIO\\_REASON\\_NETWORK\\_RECOVERY、 REMOTE\\_AUDIO\\_REASON\\_LOCAL\\_UNMUTED 或 REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_UNMUTED 的情况下报告该状态。"
  }, {
    heading: "state-1",
    content: "REMOTE\\_AUDIO\\_STATE\\_FROZEN （3）：远端音频卡顿。SDK 在 REMOTE\\_AUDIO\\_REASON\\_NETWORK\\_CONGESTION 的情况下报告该状态。"
  }, {
    heading: "state-1",
    content: "REMOTE\\_AUDIO\\_STATE\\_FAILED （4）：远端音频启动失败。SDK 在 REMOTE\\_AUDIO\\_REASON\\_INTERNAL 的情况下报告该状态。"
  }, {
    heading: "reason-1",
    content: "远端音频状态变化的原因："
  }, {
    heading: "reason-1",
    content: "REMOTE\\_AUDIO\\_REASON\\_INTERNAL （0）：SDK 音频状态改变时报告该原因。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_AUDIO\\_REASON\\_NETWORK\\_CONGESTION （1）：网络拥塞。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_AUDIO\\_REASON\\_NETWORK\\_RECOVERY （2）：网络恢复。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_AUDIO\\_REASON\\_LOCAL\\_MUTED （3）：本地用户停止接收远端音频流或关闭音频模块。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_AUDIO\\_REASON\\_LOCAL\\_UNMUTED （4）：本地用户恢复接收远端音频流或开启音频模块。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_MUTED （5）：远端用户停止发送音频流或关闭音频模块。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_UNMUTED （6）：远端用户恢复发送音频流或开启音频模块。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_AUDIO\\_REASON\\_REMOTE\\_OFFLINE （7）：远端用户离开频道。"
  }, {
    heading: "elapsed-3",
    content: "从本地用户调用 `joinChannel` 方法到 SDK 触发该回调的时间（毫秒）。"
  }, {
    heading: "所属接口类-18",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onremoteaudiostats",
    content: "报告每个远端音频流的传输层统计信息回调。"
  }, {
    heading: "onremoteaudiostats",
    content: "该回调每两秒触发一次。如果频道中有多个远端用户，SDK 会分别为每个用户触发该回调。"
  }, {
    heading: "stats-1",
    content: "远端音频流的统计信息。详见 RemoteAudioStats。"
  }, {
    heading: "所属接口类-19",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onremoteaudiotransportstats",
    content: "上报每个远端音频流的传输层统计信息。"
  }, {
    heading: "废弃-4",
    content: "该回调已废弃，请使用 onRemoteAudioStats 代替。"
  }, {
    heading: "废弃-4",
    content: "该回调上报远端音频流的传输层统计信息，例如本地用户接收到远端用户音频包后的丢包率和网络时延。"
  }, {
    heading: "触发时机-7",
    content: "该回调在通话过程中，当本地用户接收到远端用户发送的音频包时每 2 秒被触发。"
  }, {
    heading: "uid-7",
    content: "远端用户 ID，即发送音频流的用户。"
  }, {
    heading: "delay-1",
    content: "从远端用户到接收端的网络时延，单位为毫秒。"
  }, {
    heading: "lost-1",
    content: "从远端用户到接收端的音频包丢包率，单位为百分比（%）。"
  }, {
    heading: "rxkbitrate",
    content: "接收到的音频码率，单位为 Kbps。"
  }, {
    heading: "所属接口类-20",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onusermuteaudio",
    content: "远端用户或主播停止或恢复发送音频流的回调。"
  }, {
    heading: "onusermuteaudio",
    content: "该回调在远端用户调用 muteLocalAudioStream 方法时触发。"
  }, {
    heading: "onusermuteaudio",
    content: "当频道中用户（在通信场景下）或主播（在直播场景下）数量超过 32 时，该回调可能无法正常工作。"
  }, {
    heading: "触发时机-8",
    content: "该回调在远端用户调用 muteLocalAudioStream 方法停止或恢复发送音频流时被触发。"
  }, {
    heading: "uid-8",
    content: "远端用户 ID。"
  }, {
    heading: "muted",
    content: "远端用户的音频流是否被静音："
  }, {
    heading: "muted",
    content: "true：音频流被静音。"
  }, {
    heading: "muted",
    content: "false：音频流未被静音。"
  }, {
    heading: "所属接口类-21",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "adjustplaybacksignalvolume",
    content: "adjustPlaybackSignalVolume"
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
    id: "adjustuserplaybacksignalvolume",
    content: "adjustUserPlaybackSignalVolume"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "uid",
    content: "`uid`"
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
    id: "adjustuserplaybacksignalvolumeex",
    content: "adjustUserPlaybackSignalVolumeEx"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "volume-2",
    content: "`volume`"
  }, {
    id: "connection",
    content: "`connection`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "disableaudio",
    content: "disableAudio"
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
    id: "enableaudio",
    content: "enableAudio"
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
    id: "enableaudiovolumeindication",
    content: "enableAudioVolumeIndication"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "interval",
    content: "`interval`"
  }, {
    id: "smooth",
    content: "`smooth`"
  }, {
    id: "reportvad",
    content: "`reportVad`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "enableaudiovolumeindicationex",
    content: "enableAudioVolumeIndicationEx"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "interval-1",
    content: "`interval`"
  }, {
    id: "smooth-1",
    content: "`smooth`"
  }, {
    id: "reportvad-1",
    content: "`reportVad`"
  }, {
    id: "connection-1",
    content: "`connection`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "setaudioprofile-12",
    content: "setAudioProfile [1/2]"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "profile",
    content: "`profile`"
  }, {
    id: "scenario",
    content: "`scenario`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "setaudioprofile-22",
    content: "setAudioProfile [2/2]"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "调用时机-8",
    content: "调用时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "profile-1",
    content: "`profile`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "setaudioscenario",
    content: "setAudioScenario"
  }, {
    id: "适用场景-4",
    content: "适用场景"
  }, {
    id: "调用时机-9",
    content: "调用时机"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "scenario-1",
    content: "`scenario`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "onactivespeaker",
    content: "onActiveSpeaker"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "uid-2",
    content: "`uid`"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "onaudioquality",
    content: "onAudioQuality"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "uid-3",
    content: "`uid`"
  }, {
    id: "quality",
    content: "`quality`"
  }, {
    id: "delay",
    content: "`delay`"
  }, {
    id: "lost",
    content: "`lost`"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "onaudiovolumeindication",
    content: "onAudioVolumeIndication"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "speakers",
    content: "`speakers`"
  }, {
    id: "totalvolume",
    content: "`totalVolume`"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "onfirstlocalaudioframepublished",
    content: "onFirstLocalAudioFramePublished"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "elapsed",
    content: "`elapsed`"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "onfirstremoteaudiodecoded",
    content: "onFirstRemoteAudioDecoded"
  }, {
    id: "废弃-2",
    content: "`废弃`"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "uid-4",
    content: "`uid`"
  }, {
    id: "elapsed-1",
    content: "`elapsed`"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "onfirstremoteaudioframe",
    content: "onFirstRemoteAudioFrame"
  }, {
    id: "废弃-3",
    content: "`废弃`"
  }, {
    id: "触发时机-3",
    content: "触发时机"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "uid-5",
    content: "`uid`"
  }, {
    id: "elapsed-2",
    content: "`elapsed`"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "onlocalaudiostatechanged",
    content: "onLocalAudioStateChanged"
  }, {
    id: "触发时机-4",
    content: "触发时机"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "onlocalaudiostats",
    content: "onLocalAudioStats"
  }, {
    id: "触发时机-5",
    content: "触发时机"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "stats",
    content: "`stats`"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "onremoteaudiostatechanged",
    content: "onRemoteAudioStateChanged"
  }, {
    id: "触发时机-6",
    content: "触发时机"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "uid-6",
    content: "`uid`"
  }, {
    id: "state-1",
    content: "`state`"
  }, {
    id: "reason-1",
    content: "`reason`"
  }, {
    id: "elapsed-3",
    content: "`elapsed`"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "onremoteaudiostats",
    content: "onRemoteAudioStats"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "stats-1",
    content: "`stats`"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "onremoteaudiotransportstats",
    content: "onRemoteAudioTransportStats"
  }, {
    id: "废弃-4",
    content: "`废弃`"
  }, {
    id: "触发时机-7",
    content: "触发时机"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "uid-7",
    content: "`uid`"
  }, {
    id: "delay-1",
    content: "`delay`"
  }, {
    id: "lost-1",
    content: "`lost`"
  }, {
    id: "rxkbitrate",
    content: "`rxKBitRate`"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "onusermuteaudio",
    content: "onUserMuteAudio"
  }, {
    id: "触发时机-8",
    content: "触发时机"
  }, {
    id: "参数-19",
    content: "参数"
  }, {
    id: "uid-8",
    content: "`uid`"
  }, {
    id: "muted",
    content: "`muted`"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#adjustplaybacksignalvolume",
  title: _jsx(_Fragment, {
    children: "adjustPlaybackSignalVolume"
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
  url: "#adjustuserplaybacksignalvolume",
  title: _jsx(_Fragment, {
    children: "adjustUserPlaybackSignalVolume"
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
  url: "#uid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
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
  url: "#adjustuserplaybacksignalvolumeex",
  title: _jsx(_Fragment, {
    children: "adjustUserPlaybackSignalVolumeEx"
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
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#volume-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "volume"
    })
  })
}, {
  depth: 4,
  url: "#connection",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  url: "#disableaudio",
  title: _jsx(_Fragment, {
    children: "disableAudio"
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
  url: "#enableaudio",
  title: _jsx(_Fragment, {
    children: "enableAudio"
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
  url: "#enableaudiovolumeindication",
  title: _jsx(_Fragment, {
    children: "enableAudioVolumeIndication"
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
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#interval",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "interval"
    })
  })
}, {
  depth: 4,
  url: "#smooth",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "smooth"
    })
  })
}, {
  depth: 4,
  url: "#reportvad",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reportVad"
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
  url: "#enableaudiovolumeindicationex",
  title: _jsx(_Fragment, {
    children: "enableAudioVolumeIndicationEx"
  })
}, {
  depth: 3,
  url: "#适用场景-1",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-6",
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
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#interval-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "interval"
    })
  })
}, {
  depth: 4,
  url: "#smooth-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "smooth"
    })
  })
}, {
  depth: 4,
  url: "#reportvad-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reportVad"
    })
  })
}, {
  depth: 4,
  url: "#connection-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  url: "#setaudioprofile-12",
  title: _jsx(_Fragment, {
    children: "setAudioProfile [1/2]"
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
  url: "#适用场景-2",
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
  url: "#profile",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "profile"
    })
  })
}, {
  depth: 4,
  url: "#scenario",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "scenario"
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
  url: "#setaudioprofile-22",
  title: _jsx(_Fragment, {
    children: "setAudioProfile [2/2]"
  })
}, {
  depth: 3,
  url: "#适用场景-3",
  title: _jsx(_Fragment, {
    children: "适用场景"
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
  url: "#profile-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "profile"
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
  url: "#setaudioscenario",
  title: _jsx(_Fragment, {
    children: "setAudioScenario"
  })
}, {
  depth: 3,
  url: "#适用场景-4",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-9",
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
  url: "#scenario-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "scenario"
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
  url: "#onactivespeaker",
  title: _jsx(_Fragment, {
    children: "onActiveSpeaker"
  })
}, {
  depth: 3,
  url: "#触发时机",
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
  url: "#uid-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
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
  url: "#onaudioquality",
  title: _jsx(_Fragment, {
    children: "onAudioQuality"
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
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uid-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
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
  depth: 4,
  url: "#delay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "delay"
    })
  })
}, {
  depth: 4,
  url: "#lost",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lost"
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
  url: "#onaudiovolumeindication",
  title: _jsx(_Fragment, {
    children: "onAudioVolumeIndication"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#speakers",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "speakers"
    })
  })
}, {
  depth: 4,
  url: "#totalvolume",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "totalVolume"
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
  url: "#onfirstlocalaudioframepublished",
  title: _jsx(_Fragment, {
    children: "onFirstLocalAudioFramePublished"
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
  url: "#elapsed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapsed"
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
  url: "#onfirstremoteaudiodecoded",
  title: _jsx(_Fragment, {
    children: "onFirstRemoteAudioDecoded"
  })
}, {
  depth: 4,
  url: "#废弃-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
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
  url: "#uid-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#elapsed-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapsed"
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
  url: "#onfirstremoteaudioframe",
  title: _jsx(_Fragment, {
    children: "onFirstRemoteAudioFrame"
  })
}, {
  depth: 4,
  url: "#废弃-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
  })
}, {
  depth: 3,
  url: "#触发时机-3",
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
  url: "#uid-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#elapsed-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapsed"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-15",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlocalaudiostatechanged",
  title: _jsx(_Fragment, {
    children: "onLocalAudioStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-4",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-14",
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
  url: "#所属接口类-16",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlocalaudiostats",
  title: _jsx(_Fragment, {
    children: "onLocalAudioStats"
  })
}, {
  depth: 3,
  url: "#触发时机-5",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-15",
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
  url: "#所属接口类-17",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onremoteaudiostatechanged",
  title: _jsx(_Fragment, {
    children: "onRemoteAudioStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-6",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-16",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uid-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#state-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "state"
    })
  })
}, {
  depth: 4,
  url: "#reason-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reason"
    })
  })
}, {
  depth: 4,
  url: "#elapsed-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapsed"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-18",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onremoteaudiostats",
  title: _jsx(_Fragment, {
    children: "onRemoteAudioStats"
  })
}, {
  depth: 3,
  url: "#参数-17",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#stats-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stats"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-19",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onremoteaudiotransportstats",
  title: _jsx(_Fragment, {
    children: "onRemoteAudioTransportStats"
  })
}, {
  depth: 4,
  url: "#废弃-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
  })
}, {
  depth: 3,
  url: "#触发时机-7",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-18",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uid-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#delay-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "delay"
    })
  })
}, {
  depth: 4,
  url: "#lost-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lost"
    })
  })
}, {
  depth: 4,
  url: "#rxkbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxKBitRate"
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
  url: "#onusermuteaudio",
  title: _jsx(_Fragment, {
    children: "onUserMuteAudio"
  })
}, {
  depth: 3,
  url: "#触发时机-8",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-19",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uid-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
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
      id: "toc_audio_basic"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustplaybacksignalvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustplaybacksignalvolume",
      children: "adjustPlaybackSignalVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节所有远端用户的本地播放音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustplaybacksignalvolume__prototype"
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
              children: " adjustPlaybackSignalVolume"
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
      id: "api_irtcengine_adjustplaybacksignalvolume__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你需要调节某个指定远端用户在本地播放的音量，建议调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_adjustuserplaybacksignalvolume",
        children: "adjustUserPlaybackSignalVolume"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustplaybacksignalvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustplaybacksignalvolume__parameters"
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
      children: "用户的音量，取值范围为 [0,400]。"
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
      id: "api_irtcengine_adjustplaybacksignalvolume__return_values"
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
      id: "api_irtcengine_adjustuserplaybacksignalvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustuserplaybacksignalvolume",
      children: "adjustUserPlaybackSignalVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节指定远端用户的播放音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustuserplaybacksignalvolume__prototype"
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
              children: " adjustUserPlaybackSignalVolume"
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
              children: " volume);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustuserplaybacksignalvolume__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法调节指定远端用户的播放音量。若需调节多个远端用户的播放音量，请分别多次调用该方法，每次针对一个远端用户。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustuserplaybacksignalvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustuserplaybacksignalvolume__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "volume-1",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户的音量，取值范围为 [0, 400]。"
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
      id: "api_irtcengine_adjustuserplaybacksignalvolume__return_values"
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
      id: "api_irtcengineex_adjustuserplaybacksignalvolumeex"
    }), `
`, _jsx(_components.h2, {
      id: "adjustuserplaybacksignalvolumeex",
      children: "adjustUserPlaybackSignalVolumeEx"
    }), `
`, _jsx(_components.p, {
      children: "调整指定远端用户的播放音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_adjustuserplaybacksignalvolumeex__prototype"
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
              children: " adjustUserPlaybackSignalVolumeEx"
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
              children: " volume, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_adjustuserplaybacksignalvolumeex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用此方法调整指定远端用户的播放音量。若需调整多个远端用户的播放音量，请分别多次调用此方法，每次针对一个远端用户。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_adjustuserplaybacksignalvolumeex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_adjustuserplaybacksignalvolumeex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_adjustuserplaybacksignalvolumeex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-1",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "volume-2",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户的音量，取值范围为 [0, 400]。"
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
`, _jsx(_components.h4, {
      id: "connection",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_adjustuserplaybacksignalvolumeex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disableaudio"
    }), `
`, _jsx(_components.h2, {
      id: "disableaudio",
      children: "disableAudio"
    }), `
`, _jsx(_components.p, {
      children: "禁用音频模块。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disableaudio__prototype"
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
              children: " disableAudio"
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
      id: "api_irtcengine_disableaudio__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "音频模块默认启用。你可以调用该方法来禁用。"
    }), `
`, _jsx(_components.p, {
      children: "注： 该方法会重置内部引擎，并需要一些时间生效。声网建议使用以下 API 分别控制音频模块："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "enableLocalAudio：是否启用麦克风以创建本地音频流。"
      }), `
`, _jsx(_components.li, {
        children: "muteLocalAudioStream：是否发布本地音频流。"
      }), `
`, _jsx(_components.li, {
        children: "muteRemoteAudioStream：是否订阅并播放远端音频流。"
      }), `
`, _jsx(_components.li, {
        children: "muteAllRemoteAudioStreams：是否订阅并播放所有远端音频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disableaudio__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。离开频道后仍然有效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disableaudio__return_values"
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
      id: "api_irtcengine_enableaudio"
    }), `
`, _jsx(_components.h2, {
      id: "enableaudio",
      children: "enableAudio"
    }), `
`, _jsx(_components.p, {
      children: "启用音频模块。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudio__prototype"
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
              children: " enableAudio"
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
      id: "api_irtcengine_enableaudio__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_disableaudio",
        children: "disableAudio"
      }), " 方法禁用音频模块后，可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio",
        children: "enableAudio"
      }), " 方法重新启用。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["调用此方法会重置整个引擎，可能导致响应时间变慢。你可以根据实际需求，使用以下方法分别控制音频模块的具体功能：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "enableLocalAudio：是否启用麦克风以创建本地音频流。"
          }), `
`, _jsx(_components.li, {
            children: "muteLocalAudioStream：是否发布本地音频流。"
          }), `
`, _jsx(_components.li, {
            children: "muteRemoteAudioStream：是否订阅并播放远端音频流。"
          }), `
`, _jsx(_components.li, {
            children: "muteAllRemoteAudioStreams：是否订阅并播放所有远端音频流。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "成功调用此方法会重置 enableLocalAudio、 muteRemoteAudioStream 和 muteAllRemoteAudioStreams 的状态，请谨慎使用。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudio__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用，离开频道后仍然有效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudio__return_values"
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
      id: "api_irtcengine_enableaudiovolumeindication"
    }), `
`, _jsx(_components.h2, {
      id: "enableaudiovolumeindication",
      children: "enableAudioVolumeIndication"
    }), `
`, _jsx(_components.p, {
      children: "启用用户音量提示上报功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiovolumeindication__prototype"
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
              children: " enableAudioVolumeIndication"
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
              children: " interval, "
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
              children: " smooth, "
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
              children: " reportVad);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiovolumeindication__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于启用 SDK 定期向应用上报本地发送流的用户和音量瞬时值最高的最多三位远端用户的音量信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiovolumeindication__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiovolumeindication__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，若频道中有用户正在发布流，SDK 会根据设置的时间间隔触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication",
        children: "onAudioVolumeIndication"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiovolumeindication__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "interval",
      children: _jsx(_components.code, {
        children: "interval"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置两次音量提示之间的时间间隔（毫秒）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "≤ 0：关闭音量提示。"
      }), `
`, _jsx(_components.li, {
        children: "> 0：两次音量提示之间的时间间隔（毫秒）。该值需大于 10，否则无法收到 onAudioVolumeIndication 回调。建议设置为大于 100。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "smooth",
      children: _jsx(_components.code, {
        children: "smooth"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置音量提示的灵敏度平滑系数。取值范围为 0 到 10，推荐值为 3。数值越大，提示越灵敏。"
    }), `
`, _jsx(_components.h4, {
      id: "reportvad",
      children: _jsx(_components.code, {
        children: "reportVad"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用本地用户的语音活动检测。启用后， onAudioVolumeIndication 回调中的 vad 参数会报告本地用户的语音活动状态。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭本地用户的语音活动检测。关闭后， onAudioVolumeIndication 回调中的 vad 参数不会报告本地用户的语音活动状态，除非引擎自动检测到语音活动。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiovolumeindication__return_values"
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
      id: "api_irtcengineex_enableaudiovolumeindicationex"
    }), `
`, _jsx(_components.h2, {
      id: "enableaudiovolumeindicationex",
      children: "enableAudioVolumeIndicationEx"
    }), `
`, _jsx(_components.p, {
      children: "启用用户音量提示的上报功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableaudiovolumeindicationex__prototype"
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
              children: " enableAudioVolumeIndicationEx"
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
              children: " interval, "
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
              children: " smooth, "
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
              children: " reportVad, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableaudiovolumeindicationex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法使 SDK 能够定期向应用上报本地发送音频流的用户和音量瞬时值最高的最多三位远端用户的音量信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableaudiovolumeindicationex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableaudiovolumeindicationex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableaudiovolumeindicationex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["如果该方法调用成功且频道中有用户发布音频流，SDK 会根据设置的时间间隔触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication",
        children: "onAudioVolumeIndication"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableaudiovolumeindicationex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "interval-1",
      children: _jsx(_components.code, {
        children: "interval"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置两次音量提示之间的时间间隔（单位为毫秒）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "≤ 0：关闭音量提示功能。"
      }), `
`, _jsx(_components.li, {
        children: "> 0：两次音量提示之间的时间间隔。该值需大于 10，否则无法收到 onAudioVolumeIndication 回调。建议设置为大于 100。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "smooth-1",
      children: _jsx(_components.code, {
        children: "smooth"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置音量提示的灵敏度平滑系数，取值范围为 [0, 10]，推荐值为 3。数值越大，提示越灵敏。"
    }), `
`, _jsx(_components.h4, {
      id: "reportvad-1",
      children: _jsx(_components.code, {
        children: "reportVad"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用本地用户的语音活动检测（VAD）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用语音活动检测， onAudioVolumeIndication 回调中的 vad 参数会报告本地用户的语音活动状态。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭语音活动检测， vad 参数不会报告本地用户的语音活动状态，除非引擎自动检测到语音活动。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "connection-1",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableaudiovolumeindicationex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile"
    }), `
`, _jsx(_components.h2, {
      id: "setaudioprofile-12",
      children: "setAudioProfile [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置音频配置和音频场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile__prototype"
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
              children: " setAudioProfile"
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
              children: " profile, "
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
              children: " scenario);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃。请使用 ", _jsx(_components.code, {
        children: "setAudioProfile(int profile)"
      }), " 设置音频配置，使用 ", _jsx(_components.code, {
        children: "setAudioScenario(int scenario)"
      }), " 设置音频场景。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法适用于多种音频场景，你可以根据实际需求进行选择。例如，在对音质要求较高的场景（如音乐教学）中，建议将 ", _jsx(_components.code, {
        children: "profile"
      }), " 设置为 ", _jsx(_components.code, {
        children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY"
      }), " （4），将 ", _jsx(_components.code, {
        children: "scenario"
      }), " 设置为 ", _jsx(_components.code, {
        children: "AUDIO_SCENARIO_GAME_STREAMING"
      }), " （3）。你可以在加入频道前或加入频道后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "profile",
      children: _jsx(_components.code, {
        children: "profile"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频配置，包括采样率、码率、编码模式和声道数，详见 ", _jsx(_components.code, {
        children: "profile"
      }), "："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["DEFAULT (0)：默认值。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "互动直播场景：采样率 48 kHz，音乐编码，单声道，码率最高 64 Kbps。"
          }), `
`, _jsx(_components.li, {
            children: "通信场景：采样率 32 kHz，语音编码，单声道，码率最高 18 Kbps。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "SPEECH_STANDARD (1)：采样率 32 kHz，语音编码，单声道，码率最高 18 Kbps。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_STANDARD (2)：采样率 48 kHz，音乐编码，单声道，码率最高 64 Kbps。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_STANDARD_STEREO (3)：采样率 48 kHz，音乐编码，立体声，码率最高 80 Kbps。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_HIGH_QUALITY (4)：采样率 48 kHz，音乐编码，单声道，码率最高 96 Kbps。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_HIGH_QUALITY_STEREO (5)：采样率 48 kHz，音乐编码，立体声，码率最高 128 Kbps。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "scenario",
      children: _jsx(_components.code, {
        children: "scenario"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频场景，不同场景下设备使用不同的音量类型，详见 ", _jsx(_components.code, {
        children: "scenario"
      }), "："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_DEFAULT (0)：默认自动场景，SDK 会根据用户角色和音频路由选择合适的音频质量。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_GAME_STREAMING (3)：高音质场景，适用于主要播放音乐的场景。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_CHATROOM (5)：聊天室场景，适用于频繁切换角色或静音/取消静音麦克风的场景。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_CHORUS (7)：实时合唱场景，适用于网络状况良好且对延迟要求极高的场景。使用该枚举前需调用 getAudioDeviceInfo 查看音频设备是否支持超低延迟采集和播放。若要体验超低延迟，需确保音频设备支持超低延迟（isLowLatencyAudioSupported = true ）。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_MEETING (8)：会议场景，以人声为主。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_AI_CLIENT (10)：AI 对话场景，仅适用于用户与由 Conversational AI Engine 创建的对话式智能体交互的场景。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile__return_values"
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
      id: "api_irtcengine_setaudioprofile2"
    }), `
`, _jsx(_components.h2, {
      id: "setaudioprofile-22",
      children: "setAudioProfile [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置音频配置文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile2__prototype"
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
              children: " setAudioProfile"
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
              children: " profile);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你需要设置音频场景，可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario",
        children: "setAudioScenario"
      }), " 方法，或调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_create_ilocalspatialaudioengine",
        children: "create"
      }), " 并在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig",
        children: "RtcEngineConfig"
      }), " 中设置 ", _jsx(_components.code, {
        children: "mAudioScenario"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以根据实际需求选择合适的音频配置文件。例如，在音乐教学等对音质要求较高的场景中，建议将 ", _jsx(_components.code, {
        children: "profile"
      }), " 设置为 ", _jsx(_components.code, {
        children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY"
      }), " （4）。如果你需要设置音频场景，可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_setaudioscenario",
        children: "setAudioScenario"
      }), "，或者调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 并在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig",
        children: "RtcEngineConfig"
      }), " 中设置 ", _jsx(_components.code, {
        children: "audioScenario"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-8",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "profile-1",
      children: _jsx(_components.code, {
        children: "profile"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频配置文件，包括采样率、码率、编码模式和声道数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["DEFAULT （0）：默认配置。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "互动直播场景：采样率为 48 kHz，音乐编码，单声道，码率最高为 64 Kbps。"
          }), `
`, _jsx(_components.li, {
            children: "通信场景：采样率为 32 kHz，语音编码，单声道，码率最高为 18 Kbps。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "SPEECH_STANDARD （1）：采样率为 32 kHz，语音编码，单声道，码率最高为 18 Kbps。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_STANDARD （2）：采样率为 48 kHz，音乐编码，单声道，码率最高为 64 Kbps。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_STANDARD_STEREO （3）：采样率为 48 kHz，音乐编码，立体声，码率最高为 80 Kbps。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_HIGH_QUALITY （4）：采样率为 48 kHz，音乐编码，单声道，码率最高为 96 Kbps。"
      }), `
`, _jsx(_components.li, {
        children: "MUSIC_HIGH_QUALITY_STEREO （5）：采样率为 48 kHz，音乐编码，立体声，码率最高为 128 Kbps。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioprofile2__return_values"
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
      id: "api_irtcengine_setaudioscenario"
    }), `
`, _jsx(_components.h2, {
      id: "setaudioscenario",
      children: "setAudioScenario"
    }), `
`, _jsx(_components.p, {
      children: "设置音频场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioscenario__prototype"
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
              children: " setAudioScenario"
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
              children: " scenario);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioscenario__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioscenario__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-4",
      children: "适用场景"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法适用于多种音频场景。例如，在对音质要求较高的音乐教学场景中，建议将 ", _jsx(_components.code, {
        children: "scenario"
      }), " 设置为 ", _jsx(_components.code, {
        children: "AUDIO_SCENARIO_GAME_STREAMING"
      }), " （3）。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioscenario__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-9",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioscenario__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "scenario-1",
      children: _jsx(_components.code, {
        children: "scenario"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频场景。在不同的音频场景下，设备使用不同的音量类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_DEFAULT （0）：默认自动场景，SDK 会根据用户角色和音频路由选择合适的音质。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_GAME_STREAMING （3）：高音质场景，适用于主要播放音乐的场景。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_CHATROOM （5）：聊天室场景，适用于用户频繁切换角色或静音/取消静音麦克风的场景。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_CHORUS （7）：实时合唱场景，适用于网络状况良好且对超低延迟有要求的场景。在使用该枚举值前，你需要调用 getAudioDeviceInfo 查看音频设备是否支持超低延迟采集和播放。若要体验超低延迟，需确保音频设备支持超低延迟（isLowLatencyAudioSupported = true ）。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_MEETING （8）：会议场景，主要以人声为主。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_SCENARIO_AI_CLIENT （10）：AI 对话场景，仅适用于用户与由 Conversational AI Engine 创建的对话式智能体交互的场景。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioscenario__return_values"
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
      id: "callback_irtcengineeventhandler_onactivespeaker"
    }), `
`, _jsx(_components.h2, {
      id: "onactivespeaker",
      children: "onActiveSpeaker"
    }), `
`, _jsx(_components.p, {
      children: "最活跃远端说话人回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onactivespeaker__prototype"
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
              children: " onActiveSpeaker"
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
              children: " uid)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onactivespeaker__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication",
        children: "enableAudioVolumeIndication"
      }), " 方法后，SDK 会持续检测哪位远端用户的音量最大。在当前周期内，音量被检测为最大次数最多的远端用户即为最活跃用户。当频道中用户数不少于两人，且存在活跃的远端说话人时，SDK 会触发该回调，并报告最活跃远端说话人的用户 ID。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果最活跃的远端说话人始终是同一用户，SDK 只会触发一次该回调。"
      }), `
`, _jsx(_components.li, {
        children: "如果最活跃的远端说话人变更为其他用户，SDK 会再次触发该回调，并报告新的最活跃远端说话人的用户 ID。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onactivespeaker__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在检测到最活跃的远端说话人时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onactivespeaker__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-2",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "最活跃远端说话用户的用户 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-10",
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
      id: "callback_irtcengineeventhandler_onaudioquality"
    }), `
`, _jsx(_components.h2, {
      id: "onaudioquality",
      children: "onAudioQuality"
    }), `
`, _jsx(_components.p, {
      children: "报告每个远端用户发送的音频流的统计信息回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioquality__prototype"
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
              children: " onAudioQuality"
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
              children: " quality, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "short"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " delay, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "short"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " lost)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioquality__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats",
        children: "onRemoteAudioStats"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "该回调每两秒触发一次，用于报告每个正在发送音频流的远端用户的音频质量。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioquality__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-3",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送音频流的远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "quality",
      children: _jsx(_components.code, {
        children: "quality"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户的音频质量："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "QUALITY_UNKNOWN (0)：音质未知。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_EXCELLENT (1)：音质极佳。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_GOOD (2)：网络质量很好，但码率略低于极佳。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_POOR (3)：通话质量轻微受损。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_BAD (4)：无法流畅沟通。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_VBAD (5)：音质极差，几乎无法沟通。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_DOWN (6)：网络连接中断，完全无法沟通。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_DETECTING (8)：正在进行 Last-mile 网络探测。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "delay",
      children: _jsx(_components.code, {
        children: "delay"
      })
    }), `
`, _jsx(_components.p, {
      children: "从发送端到接收端的网络延迟（毫秒），包括音频采样预处理、网络传输和网络抖动缓冲造成的延迟。"
    }), `
`, _jsx(_components.h4, {
      id: "lost",
      children: _jsx(_components.code, {
        children: "lost"
      })
    }), `
`, _jsx(_components.p, {
      children: "从远端用户发送到接收端的音频数据包的丢包率（%）。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-11",
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
      id: "callback_irtcengineeventhandler_onaudiovolumeindication"
    }), `
`, _jsx(_components.h2, {
      id: "onaudiovolumeindication",
      children: "onAudioVolumeIndication"
    }), `
`, _jsx(_components.p, {
      children: "报告用户音量信息的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiovolumeindication__prototype"
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
              children: "AudioVolumeInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] speakers, "
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
              children: " totalVolume)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiovolumeindication__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["默认情况下，该回调处于关闭状态。你可以通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication",
        children: "enableAudioVolumeIndication"
      }), " 方法开启该回调。开启后，当用户在频道中发送音频流时，SDK 会根据 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudiovolumeindication",
        children: "enableAudioVolumeIndication"
      }), " 中设置的时间间隔触发该回调。SDK 会同时触发两个独立的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onaudiovolumeindication",
        children: "onAudioVolumeIndication"
      }), " 回调，分别报告发送音频流的本地用户和瞬时音量最高的最多三位远端用户的音量信息。"]
    }), `
`, _jsxs(_components.p, {
      children: ["注： 开启该回调后，即使本地用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream",
        children: "muteLocalAudioStream"
      }), " 方法静音，SDK 仍会继续报告本地用户的音量信息。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果某位远端用户的音量在频道中排名前三，但停止发布音频流超过 20 秒，该回调将不再包含该用户的信息。"
      }), `
`, _jsx(_components.li, {
        children: "如果所有远端用户都停止发布音频流超过 20 秒，SDK 将不再触发远端用户的音量回调。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiovolumeindication__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "speakers",
      children: _jsx(_components.code, {
        children: "speakers"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户的音量信息。当该数组为空时，表示频道中没有远端用户或远端用户未发送音频流。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audiovolumeinfo",
        children: "AudioVolumeInfo"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "totalvolume",
      children: _jsx(_components.code, {
        children: "totalVolume"
      })
    }), `
`, _jsx(_components.p, {
      children: "说话者的音量，取值范围为 [0, 255]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "对于本地用户的回调， totalVolume 是发送音频流的本地用户的音量。"
      }), `
`, _jsx(_components.li, {
        children: "对于远端用户的回调， totalVolume 是瞬时音量最高的最多三位远端用户的音量总和。"
      }), `
`, _jsx(_components.li, {
        children: "如果调用了 startAudioMixing，则 totalVolume 是混音后的音量。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalaudioframepublished"
    }), `
`, _jsx(_components.h2, {
      id: "onfirstlocalaudioframepublished",
      children: "onFirstLocalAudioFramePublished"
    }), `
`, _jsx(_components.p, {
      children: "本地音频首帧发布回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalaudioframepublished__prototype"
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
              children: " onFirstLocalAudioFramePublished"
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
              children: " elapsed)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalaudioframepublished__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当满足以下任一条件时，SDK 会触发该回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端启用音频模块并成功调用 joinChannel。"
      }), `
`, _jsx(_components.li, {
        children: "本地客户端依次调用 muteLocalAudioStream(true) 和 muteLocalAudioStream(false)。"
      }), `
`, _jsx(_components.li, {
        children: "本地客户端依次调用 disableAudio 和 enableAudio。"
      }), `
`, _jsx(_components.li, {
        children: "本地客户端调用 pushExternalAudioFrame 成功将音频帧推送至 SDK。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalaudioframepublished__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地音频首帧发布时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalaudioframepublished__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "elapsed",
      children: _jsx(_components.code, {
        children: "elapsed"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从本地用户调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 到 SDK 触发该回调的时间间隔（毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-13",
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
      id: "callback_irtcengineeventhandler_onfirstremoteaudiodecoded"
    }), `
`, _jsx(_components.h2, {
      id: "onfirstremoteaudiodecoded",
      children: "onFirstRemoteAudioDecoded"
    }), `
`, _jsx(_components.p, {
      children: "首帧远端音频解码完成回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremoteaudiodecoded__prototype"
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
              children: " onFirstRemoteAudioDecoded"
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
              children: " elapsed)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremoteaudiodecoded__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-2",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
        children: "onRemoteAudioStateChanged"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremoteaudiodecoded__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在以下场景中被触发："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "远端用户加入频道并首次发送音频流。"
      }), `
`, _jsx(_components.li, {
        children: "远端用户音频从离线恢复为在线并重新发送音频流。可能的原因包括：远端用户离开频道、掉线、调用 muteLocalAudioStream 停止发送音频流，或调用 disableAudio 禁用音频。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremoteaudiodecoded__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-4",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "elapsed-1",
      children: _jsx(_components.code, {
        children: "elapsed"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从本地用户调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 到 SDK 触发该回调的时间（毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-14",
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
      id: "callback_irtcengineeventhandler_onfirstremoteaudioframe"
    }), `
`, _jsx(_components.h2, {
      id: "onfirstremoteaudioframe",
      children: "onFirstRemoteAudioFrame"
    }), `
`, _jsx(_components.p, {
      children: "远端用户音频首帧已接收回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremoteaudioframe__prototype"
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
              children: " onFirstRemoteAudioFrame"
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
              children: " elapsed) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremoteaudioframe__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-3",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
        children: "onRemoteAudioStateChanged"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremoteaudioframe__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-3",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 收到来自某个远端用户的首帧音频时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremoteaudioframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-5",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "elapsed-2",
      children: _jsx(_components.code, {
        children: "elapsed"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从本地用户调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 到 SDK 触发该回调的时间（毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-15",
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
      id: "callback_irtcengineeventhandler_onlocalaudiostatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onlocalaudiostatechanged",
      children: "onLocalAudioStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "本地音频流状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalaudiostatechanged__prototype"
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
              children: " onLocalAudioStateChanged"
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
      id: "callback_irtcengineeventhandler_onlocalaudiostatechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当本地音频流的状态发生变化时，SDK 会触发该回调以报告当前状态，便于你在音频异常时排查问题。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当状态为 ", _jsx(_components.code, {
            children: "LOCAL_AUDIO_STREAM_STATE_FAILED"
          }), " （3）时，可以在 ", _jsx(_components.code, {
            children: "error"
          }), " 参数中查看错误信息。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalaudiostatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-4",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地音频流状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalaudiostatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地音频的状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_STATE_STOPPED （0）：本地音频处于初始状态。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_STATE_RECORDING （1）：本地音频采集设备启动成功。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_STATE_ENCODING （2）：首帧音频编码成功。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_STATE_FAILED （3）：本地音频启动失败。"
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
      children: "本地音频状态变化的原因："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_REASON_OK （0）：本地音频状态正常。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_REASON_FAILURE （1）：本地音频失败的原因不明确。提示用户尝试重新加入频道。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_REASON_DEVICE_NO_PERMISSION （2）：没有权限使用本地音频采集设备。提示用户授予权限。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_REASON_DEVICE_BUSY （3）：麦克风被占用。提示用户检查是否有其他应用占用了麦克风。麦克风空闲约五秒后本地音频采集会自动恢复，也可以在麦克风空闲后尝试重新加入频道。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_REASON_CAPTURE_FAILURE （4）：本地音频采集失败。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_REASON_ENCODE_FAILURE （5）：本地音频编码失败。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_AUDIO_STREAM_REASON_INTERRUPTED （8）：本地音频采集被系统电话、智能助手或闹钟中断。如果需要继续采集本地音频，提示用户结束电话、智能助手或闹钟。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalaudiostats"
    }), `
`, _jsx(_components.h2, {
      id: "onlocalaudiostats",
      children: "onLocalAudioStats"
    }), `
`, _jsx(_components.p, {
      children: "本地音频流统计信息回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalaudiostats__prototype"
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
              children: " onLocalAudioStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LocalAudioStats stats) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalaudiostats__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调每两秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalaudiostats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-5",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调每两秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalaudiostats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "stats",
      children: _jsx(_components.code, {
        children: "stats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地音频统计信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localaudiostats",
        children: "LocalAudioStats"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-17",
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
      id: "callback_irtcengineeventhandler_onremoteaudiostatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onremoteaudiostatechanged",
      children: "onRemoteAudioStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "远端音频状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiostatechanged__prototype"
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
              children: " onRemoteAudioStateChanged"
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
              children: " reason, "
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
              children: " elapsed)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiostatechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调在语音/视频通话频道中的远端用户或直播频道中的主播的音频状态发生变化时被触发，用于报告远端音频流的当前状态。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "当频道中的用户（通信场景）或主播（直播场景）数量超过 32 时，该回调可能无法正常工作。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiostatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-6",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在远端用户的音频状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiostatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-6",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频状态发生变化的远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "state-1",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端音频状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_STATE_STOPPED （0）：远端音频处于初始状态。SDK 在 REMOTE_AUDIO_REASON_LOCAL_MUTED、 REMOTE_AUDIO_REASON_REMOTE_MUTED 或 REMOTE_AUDIO_REASON_REMOTE_OFFLINE 的情况下报告该状态。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_STATE_STARTING （1）：已接收到第一包远端音频数据。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_STATE_DECODING （2）：远端音频流解码并正常播放。SDK 在 REMOTE_AUDIO_REASON_NETWORK_RECOVERY、 REMOTE_AUDIO_REASON_LOCAL_UNMUTED 或 REMOTE_AUDIO_REASON_REMOTE_UNMUTED 的情况下报告该状态。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_STATE_FROZEN （3）：远端音频卡顿。SDK 在 REMOTE_AUDIO_REASON_NETWORK_CONGESTION 的情况下报告该状态。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_STATE_FAILED （4）：远端音频启动失败。SDK 在 REMOTE_AUDIO_REASON_INTERNAL 的情况下报告该状态。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "reason-1",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端音频状态变化的原因："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_REASON_INTERNAL （0）：SDK 音频状态改变时报告该原因。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_REASON_NETWORK_CONGESTION （1）：网络拥塞。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_REASON_NETWORK_RECOVERY （2）：网络恢复。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_REASON_LOCAL_MUTED （3）：本地用户停止接收远端音频流或关闭音频模块。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_REASON_LOCAL_UNMUTED （4）：本地用户恢复接收远端音频流或开启音频模块。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_REASON_REMOTE_MUTED （5）：远端用户停止发送音频流或关闭音频模块。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_REASON_REMOTE_UNMUTED （6）：远端用户恢复发送音频流或开启音频模块。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_AUDIO_REASON_REMOTE_OFFLINE （7）：远端用户离开频道。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "elapsed-3",
      children: _jsx(_components.code, {
        children: "elapsed"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从本地用户调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 方法到 SDK 触发该回调的时间（毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-18",
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
      id: "callback_irtcengineeventhandler_onremoteaudiostats"
    }), `
`, _jsx(_components.h2, {
      id: "onremoteaudiostats",
      children: "onRemoteAudioStats"
    }), `
`, _jsx(_components.p, {
      children: "报告每个远端音频流的传输层统计信息回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiostats__prototype"
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
              children: " onRemoteAudioStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RemoteAudioStats stats) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiostats__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调每两秒触发一次。如果频道中有多个远端用户，SDK 会分别为每个用户触发该回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiostats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "stats-1",
      children: _jsx(_components.code, {
        children: "stats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["远端音频流的统计信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remoteaudiostats",
        children: "RemoteAudioStats"
      }), "。"]
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
      id: "callback_irtcengineeventhandler_onremoteaudiotransportstats"
    }), `
`, _jsx(_components.h2, {
      id: "onremoteaudiotransportstats",
      children: "onRemoteAudioTransportStats"
    }), `
`, _jsx(_components.p, {
      children: "上报每个远端音频流的传输层统计信息。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiotransportstats__prototype"
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
              children: " onRemoteAudioTransportStats"
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
              children: " delay, "
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
              children: " lost, "
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
              children: " rxKBitRate)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiotransportstats__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-4",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该回调已废弃，请使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostats",
        children: "onRemoteAudioStats"
      }), " 代替。"]
    }), `
`, _jsx(_components.p, {
      children: "该回调上报远端音频流的传输层统计信息，例如本地用户接收到远端用户音频包后的丢包率和网络时延。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiotransportstats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-7",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在通话过程中，当本地用户接收到远端用户发送的音频包时每 2 秒被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremoteaudiotransportstats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-7",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID，即发送音频流的用户。"
    }), `
`, _jsx(_components.h4, {
      id: "delay-1",
      children: _jsx(_components.code, {
        children: "delay"
      })
    }), `
`, _jsx(_components.p, {
      children: "从远端用户到接收端的网络时延，单位为毫秒。"
    }), `
`, _jsx(_components.h4, {
      id: "lost-1",
      children: _jsx(_components.code, {
        children: "lost"
      })
    }), `
`, _jsx(_components.p, {
      children: "从远端用户到接收端的音频包丢包率，单位为百分比（%）。"
    }), `
`, _jsx(_components.h4, {
      id: "rxkbitrate",
      children: _jsx(_components.code, {
        children: "rxKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "接收到的音频码率，单位为 Kbps。"
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
      id: "callback_irtcengineeventhandler_onusermuteaudio"
    }), `
`, _jsx(_components.h2, {
      id: "onusermuteaudio",
      children: "onUserMuteAudio"
    }), `
`, _jsx(_components.p, {
      children: "远端用户或主播停止或恢复发送音频流的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onusermuteaudio__prototype"
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
              children: " onUserMuteAudio"
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
              children: " uid, "
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
              children: " muted)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onusermuteaudio__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在远端用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream",
        children: "muteLocalAudioStream"
      }), " 方法时触发。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "当频道中用户（在通信场景下）或主播（在直播场景下）数量超过 32 时，该回调可能无法正常工作。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onusermuteaudio__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-8",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在远端用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream",
        children: "muteLocalAudioStream"
      }), " 方法停止或恢复发送音频流时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onusermuteaudio__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-19",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-8",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "muted",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的音频流是否被静音："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：音频流被静音。"
      }), `
`, _jsx(_components.li, {
        children: "false：音频流未被静音。"
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
