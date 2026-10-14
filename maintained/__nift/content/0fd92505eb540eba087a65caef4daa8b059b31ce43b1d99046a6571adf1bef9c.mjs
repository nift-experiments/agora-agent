import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "人声音效",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_effect" />

<a id="api_irtcengine_enablevoiceaituner" />

## enableVoiceAITuner [#enablevoiceaituner]

启用或关闭语音 AI 调音器。

<a id="api_irtcengine_enablevoiceaituner__prototype" />

\`\`\`java
public abstract int enableVoiceAITuner(boolean enabled, Constants.VOICE_AI_TUNER_TYPE type);
\`\`\`

<a id="api_irtcengine_enablevoiceaituner__detailed_desc" />

支持增强音质和调整音色风格。

<a id="api_irtcengine_enablevoiceaituner__scenario" />

### 适用场景 [#适用场景]

社交娱乐场景，包括在线 KTV、在线播客和展厅直播等对音质要求较高的场景。

<a id="api_irtcengine_enablevoiceaituner__timing" />

### 调用时机 [#调用时机]

该方法可在加入频道前或后调用。

<a id="api_irtcengine_enablevoiceaituner__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否启用语音 AI 调音器：

* true：启用语音 AI 调音器。
* false：（默认）关闭语音 AI 调音器。

#### \`type\` [#type]

语音 AI 调音器的音效类型，详见 [VOICE\\_AI\\_TUNER\\_TYPE](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-voiceaitunertype)。

<a id="api_irtcengine_enablevoiceaituner__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getaudioeffectmanager" />

## getAudioEffectManager [#getaudioeffectmanager]

获取用于管理音效文件的 IAudioEffectManager 实例。

<a id="api_irtcengine_getaudioeffectmanager__prototype" />

\`\`\`java
public abstract IAudioEffectManager getAudioEffectManager();
\`\`\`

<a id="api_irtcengine_getaudioeffectmanager__detailed_desc" />

<a id="api_irtcengine_getaudioeffectmanager__return_values" />

### 返回值 [#返回值-1]

方法调用成功，返回 \`IAudioEffectManager\` 实例。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setadvancedaudiooptions" />

## setAdvancedAudioOptions [#setadvancedaudiooptions]

设置高级音频选项。

<a id="api_irtcengine_setadvancedaudiooptions__prototype" />

\`\`\`java
public abstract int setAdvancedAudioOptions(AdvancedAudioOptions options);
\`\`\`

<a id="api_irtcengine_setadvancedaudiooptions__detailed_desc" />

如果你有高级音频处理需求，例如采集和发送立体声音频，可以调用此方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 \`joinChannel\`、 [enableAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio) 和 [enableLocalAudio](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enablelocalaudio) 之前调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setadvancedaudiooptions__parameters" />

### 参数 [#参数-1]

#### \`options\` [#options]

高级音频选项。详见 [AdvancedAudioOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-advancedaudiooptions)。

<a id="api_irtcengine_setadvancedaudiooptions__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setainsmode" />

## setAINSMode [#setainsmode]

设置是否启用 AI 降噪功能并设置降噪模式。

<a id="api_irtcengine_setainsmode__prototype" />

\`\`\`java
public abstract int setAINSMode(boolean enabled, int mode);
\`\`\`

<a id="api_irtcengine_setainsmode__detailed_desc" />

你可以调用此方法启用 AI 降噪功能。启用后，SDK 会在保证人声质量的前提下，自动检测并减少音频中的稳态和非稳态噪声。

* 稳态噪声是指在观察时间内平均统计特性恒定、幅度波动极小的噪声信号，常见来源包括：
  * 电视；
  * 空调；
  * 机械设备等。
* 非稳态噪声是指在观察时间内幅度波动剧烈的噪声信号，常见来源包括：
  * 雷声；
  * 爆炸声；
  * 破裂声等。

注：

* 此方法依赖于 AI 降噪动态库 libagora\\_ai\\_noise\\_suppression\\_extension.so。如果该动态库被删除，则无法启用该功能。
* 声网不建议在运行 Android 6.0 及以下版本的设备上启用此功能。

<a id="api_irtcengine_setainsmode__scenario" />

### 适用场景 [#适用场景-1]

在连麦、在线教育和视频会议等场景中，该功能可检测并减少背景噪声，从而提升体验。

<a id="api_irtcengine_setainsmode__timing" />

### 调用时机 [#调用时机-1]

你可以在加入频道前或加入频道后调用此方法。

<a id="api_irtcengine_setainsmode__parameters" />

### 参数 [#参数-2]

#### \`enabled\` [#enabled-1]

是否启用 AI 降噪功能：

* true：启用 AI 降噪。
* false：（默认）关闭 AI 降噪。

#### \`mode\` [#mode]

AI 降噪模式：

* 0：（默认）平衡模式。该模式在降噪效果和延迟之间提供平衡表现。
* 1：激进模式。适用于对降噪效果要求较高的场景，如户外活动直播。该模式降噪更强，但可能会影响音频的原始特性。
* 2：低延迟激进模式。该模式的降噪延迟约为平衡模式和激进模式的一半，适用于对低延迟降噪有较高要求的场景，如实时在线合唱。

<a id="api_irtcengine_setainsmode__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setaudioeffectparameters" />

## setAudioEffectParameters [#setaudioeffectparameters]

设置 SDK 预设音效的参数。

<a id="api_irtcengine_setaudioeffectparameters__prototype" />

\`\`\`java
public abstract int setAudioEffectParameters(int preset, int param1, int param2);
\`\`\`

<a id="api_irtcengine_setaudioeffectparameters__detailed_desc" />

#### \`自从\` [#自从]

自 v3.2.0 版本新增。

调用该方法可以为发送音频流的本地用户设置以下参数：

* 3D 人声特效：设置 3D 人声的循环周期。
* 音高修正特效：设置音高修正的基本模式和主音。

声网建议将该方法与界面元素绑定，方便用户交互式地调整音高修正效果。 为了获得更好的人声效果，建议在调用该方法前先调用以下 API：

* 调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。
* 调用 setAudioProfile，将 profile 设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。

注：

* 你可以在加入频道前或加入频道后调用该方法。
* 请勿将 setAudioProfile 中的 profile 设置为 SPEECH\\_STANDARD （1），否则该方法不生效。
* 该方法在人声处理方面效果最佳，不建议用于处理包含音乐的音频数据。
* 调用 setAudioEffectParameters 后，不建议再调用以下方法，否则会覆盖该方法设置的效果：
  * setAudioEffectPreset
  * setVoiceBeautifierPreset
  * setLocalVoicePitch
  * setLocalVoiceEqualization
  * setLocalVoiceReverb
  * setVoiceBeautifierParameters
  * setVoiceConversionPreset
* 该方法依赖语音美声动态库 libagora\\_audio\\_beauty\\_extension.so。如果该动态库被删除，将无法正常启用该功能。

<a id="api_irtcengine_setaudioeffectparameters__parameters" />

### 参数 [#参数-3]

#### \`preset\` [#preset]

SDK 预设音效的选项：

* ROOM\\_ACOUSTICS\\_3D\\_VOICE：3D 人声特效。
  * 设置该枚举值前，需要将 setAudioProfile 中的 profile 设置为 MUSIC\\_STANDARD\\_STEREO （3）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则设置不生效。
  * 启用该特效后，用户需使用立体声播放设备才能听到预期效果。
* PITCH\\_CORRECTION：音高修正特效。

#### \`param1\` [#param1]

* 当 preset 为 ROOM\\_ACOUSTICS\\_3D\\_VOICE 时，表示 3D 人声特效的循环周期，单位为秒，取值范围为 \\[1,60]，默认值为 10，表示声音每 10 秒绕你一圈。
* 当 preset 为 PITCH\\_CORRECTION 时，表示音高修正特效的基本模式：
  * 1：（默认）自然大调。
  * 2：自然小调。
  * 3：日本五声音阶。

#### \`param2\` [#param2]

* 当 preset 为 ROOM\\_ACOUSTICS\\_3D\\_VOICE 时，需将 param2 设置为 0。
* 当 preset 为 PITCH\\_CORRECTION 时，表示音高修正特效的主音：
  * 1：A
  * 2：A#
  * 3：B
  * 4：（默认）C
  * 5：C#
  * 6：D
  * 7：D#
  * 8：E
  * 9：F
  * 10：F#
  * 11：G
  * 12：G#

<a id="api_irtcengine_setaudioeffectparameters__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setaudioeffectpreset" />

## setAudioEffectPreset [#setaudioeffectpreset]

设置 SDK 预设的音效效果。

<a id="api_irtcengine_setaudioeffectpreset__prototype" />

\`\`\`java
public abstract int setAudioEffectPreset(int preset);
\`\`\`

<a id="api_irtcengine_setaudioeffectpreset__detailed_desc" />

#### \`自从\` [#自从-1]

自 v3.2.0 版本新增。

该方法不会改变原始声音的性别特征。设置后，频道内所有用户都能听到该效果。 为获得更好的人声效果，建议在调用该方法前先调用以下方法：

* 调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。
* 调用 setAudioProfile，将 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。

注：

* 不要将 setAudioProfile 中的 profile 参数设置为 SPEECH\\_STANDARD （1），否则该方法不生效。
* 如果调用 setAudioEffectPreset 设置的枚举值不是 ROOM\\_ACOUSTICS\\_3D\\_VOICE 或 PITCH\\_CORRECTION，则不要调用 setAudioEffectParameters，否则 setAudioEffectPreset 的设置会被覆盖。
* 调用 setAudioEffectPreset 后，声网不建议再调用以下方法，否则 setAudioEffectPreset 设置的效果会被覆盖：
  * setVoiceBeautifierPreset
  * setLocalVoicePitch
  * setLocalVoiceEqualization
  * setLocalVoiceReverb
  * setVoiceBeautifierParameters
  * setVoiceConversionPreset
* 该方法依赖语音美声动态库 libagora\\_audio\\_beauty\\_extension.so。如果该动态库被删除，则无法正常启用该功能。

<a id="api_irtcengine_setaudioeffectpreset__timing" />

### 调用时机 [#调用时机-2]

该方法可在加入频道前或加入频道后调用。

<a id="api_irtcengine_setaudioeffectpreset__parameters" />

### 参数 [#参数-4]

#### \`preset\` [#preset-1]

预设的音效效果：

* AUDIO\\_EFFECT\\_OFF （0）：关闭音效，使用原始声音。
* ROOM\\_ACOUSTICS\\_KTV （1）：KTV 场所典型的混响风格。
* ROOM\\_ACOUSTICS\\_VOCAL\\_CONCERT （2）：音乐会场所典型的混响风格。
* ROOM\\_ACOUSTICS\\_STUDIO （3）：录音棚典型的混响风格。
* ROOM\\_ACOUSTICS\\_PHONOGRAPH （4）：老式留声机典型的混响风格。
* ROOM\\_ACOUSTICS\\_VIRTUAL\\_STEREO （5）：虚拟立体声效果，将单声道音频渲染为立体声。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则该预设无效。
* ROOM\\_ACOUSTICS\\_SPACIAL （6）：更具空间感的音效。
* ROOM\\_ACOUSTICS\\_ETHEREAL （7）：更空灵的音效。
* ROOM\\_ACOUSTICS\\_VIRTUAL\\_SURROUND\\_SOUND （8）：虚拟环绕声效果，SDK 在立体声通道基础上生成模拟环绕声场。启用后，用户需使用立体声播放设备才能听到预期音效。
* ROOM\\_ACOUSTICS\\_CHORUS （9）：合唱音效，适用于合唱场景，可增强人声的层次感和空间感。
* ROOM\\_ACOUSTICS\\_3D\\_VOICE （10）：3D 声音效果，使声音在用户周围移动，默认循环周期为 10 秒。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC\\_STANDARD\\_STEREO （3）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则该预设无效。启用后，用户需使用立体声播放设备才能听到预期音效。
* VOICE\\_CHANGER\\_EFFECT\\_UNCLE （11）：大叔音效，建议用于处理男性音色，否则可能无法听到预期效果。
* VOICE\\_CHANGER\\_EFFECT\\_OLDMAN （12）：老人音效，建议用于处理男性音色，否则可能无法听到预期效果。
* VOICE\\_CHANGER\\_EFFECT\\_BOY （13）：男孩音效，建议用于处理男性音色，否则可能无法听到预期效果。
* VOICE\\_CHANGER\\_EFFECT\\_SISTER （14）：年轻女性音效，建议用于处理女性音色，否则可能无法听到预期效果。
* VOICE\\_CHANGER\\_EFFECT\\_GIRL （15）：女孩音效，建议用于处理女性音色，否则可能无法听到预期效果。
* VOICE\\_CHANGER\\_EFFECT\\_PIGKING （16）：猪八戒音效，声音如熊吼。
* VOICE\\_CHANGER\\_EFFECT\\_HULK （17）：绿巨人音效。
* STYLE\\_TRANSFORMATION\\_RNB （18）：R\\&B 音乐典型的混响风格。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则该预设无效。
* STYLE\\_TRANSFORMATION\\_POPULAR （19）：流行音乐典型的混响风格。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则该预设无效。
* PITCH\\_CORRECTION （20）：音高修正效果，根据自然 C 大调音阶修正用户音高。设置该效果后，可调用 setAudioEffectParameters 调整调音的基本模式和主音音高。

<a id="api_irtcengine_setaudioeffectpreset__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlocalvoiceequalization" />

## setLocalVoiceEqualization [#setlocalvoiceequalization]

设置本地语音的均衡效果。

<a id="api_irtcengine_setlocalvoiceequalization__prototype" />

\`\`\`java
public abstract int setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY bandFrequency, int bandGain);
\`\`\`

<a id="api_irtcengine_setlocalvoiceequalization__detailed_desc" />

<a id="api_irtcengine_setlocalvoiceequalization__timing" />

### 调用时机 [#调用时机-3]

该方法可在加入频道前或加入频道后调用。

<a id="api_irtcengine_setlocalvoiceequalization__parameters" />

### 参数 [#参数-5]

#### \`bandFrequency\` [#bandfrequency]

频段索引，取值范围为 0 到 9，分别对应 10 个语音效果的中心频率段：31、62、125、250、500、1k、2k、4k、8k 和 16k Hz。详见 [AUDIO\\_EQUALIZATION\\_BAND\\_FREQUENCY](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audioequalizationbandfrequency)。

#### \`bandGain\` [#bandgain]

每个频段的增益值，单位为 dB。取值范围为 -15 到 15，默认值为 0。

<a id="api_irtcengine_setlocalvoiceequalization__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlocalvoiceformant" />

## setLocalVoiceFormant [#setlocalvoiceformant]

设置共振峰比例以改变人声音色。

<a id="api_irtcengine_setlocalvoiceformant__prototype" />

\`\`\`java
public abstract int setLocalVoiceFormant(double formantRatio);
\`\`\`

<a id="api_irtcengine_setlocalvoiceformant__detailed_desc" />

共振峰比例会影响声音的音色。值越小，声音越低沉；值越大，声音越尖锐。如果你希望同时改变音色和音调，建议同时使用 [setLocalVoiceFormant](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceformant) 和 [setLocalVoicePitch](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicepitch) 方法。

<a id="api_irtcengine_setlocalvoiceformant__scenario" />

### 适用场景 [#适用场景-2]

你可以调用该方法设置本地音频的共振峰比例，以改变人声音色。

<a id="api_irtcengine_setlocalvoiceformant__timing" />

### 调用时机 [#调用时机-4]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_setlocalvoiceformant__parameters" />

### 参数 [#参数-6]

#### \`formantRatio\` [#formantratio]

共振峰比例。取值范围为 \\[-1.0, 1.0]。（默认值为 0.0）

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    建议将该值设置在 \\[-0.4, 0.6] 范围内，否则声音可能会严重失真。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setlocalvoiceformant__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlocalvoicepitch" />

## setLocalVoicePitch [#setlocalvoicepitch]

设置本地语音的音调。

<a id="api_irtcengine_setlocalvoicepitch__prototype" />

\`\`\`java
public abstract int setLocalVoicePitch(double pitch);
\`\`\`

<a id="api_irtcengine_setlocalvoicepitch__detailed_desc" />

<a id="api_irtcengine_setlocalvoicepitch__timing" />

### 调用时机 [#调用时机-5]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_irtcengine_setlocalvoicepitch__parameters" />

### 参数 [#参数-7]

#### \`pitch\` [#pitch]

本地语音的音调。取值范围为 \\[0.5, 2.0]。值越小，音调越低。（默认值为 1.0，表示不改变音调。）

<a id="api_irtcengine_setlocalvoicepitch__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlocalvoicereverb" />

## setLocalVoiceReverb [#setlocalvoicereverb]

设置本地语音的混响效果。

<a id="api_irtcengine_setlocalvoicereverb__prototype" />

\`\`\`java
public abstract int setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE reverbKey, int value);
\`\`\`

<a id="api_irtcengine_setlocalvoicereverb__detailed_desc" />

你可以使用更易用的方法 [setAudioEffectPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectpreset) 实现如流行、R\\&B 和 KTV 等预设混响效果。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你可以在加入频道前或加入频道后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setlocalvoicereverb__parameters" />

### 参数 [#参数-8]

#### \`reverbKey\` [#reverbkey]

混响键。详见 [AUDIO\\_REVERB\\_TYPE](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audioreverbtype)。

#### \`value\` [#value]

混响键的取值。

<a id="api_irtcengine_setlocalvoicereverb__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setvoicebeautifierparameters" />

## setVoiceBeautifierParameters [#setvoicebeautifierparameters]

设置预设美声特效的参数。

<a id="api_irtcengine_setvoicebeautifierparameters__prototype" />

\`\`\`java
public abstract int setVoiceBeautifierParameters(int preset, int param1, int param2);
\`\`\`

<a id="api_irtcengine_setvoicebeautifierparameters__detailed_desc" />

#### \`自从\` [#自从-2]

自 v3.3.0 版本新增。

为了获得更好的人声效果，建议在调用该方法前先调用以下 API：

* 调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。
* 调用 setAudioProfile，将 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。

注：

* 可在加入频道前或加入频道后调用该方法。
* 请勿将 setAudioProfile 中的 profile 参数设置为 SPEECH\\_STANDARD （1），否则该方法不生效。
* 该方法在人声处理方面效果最佳，不建议用于处理包含音乐的音频数据。
* 调用 setVoiceBeautifierParameters 后，不建议再调用以下方法，否则会覆盖该方法设置的效果：
  * setAudioEffectPreset
  * setAudioEffectParameters
  * setVoiceBeautifierPreset
  * setLocalVoicePitch
  * setLocalVoiceEqualization
  * setLocalVoiceReverb
  * setVoiceConversionPreset
* 该方法依赖于美声动态库 libagora\\_audio\\_beauty\\_extension.so。若该动态库被删除，则无法正常启用该功能。

<a id="api_irtcengine_setvoicebeautifierparameters__parameters" />

### 参数 [#参数-9]

#### \`preset\` [#preset-2]

预设音效选项：

* SINGING\\_BEAUTIFIER：美声特效。

#### \`param1\` [#param1-1]

歌声的性别特征选项：

* 1：男性音色。
* 2：女性音色。

#### \`param2\` [#param2-1]

歌声的混响效果选项：

* 1：小房间混响效果。
* 2：大房间混响效果。
* 3：大厅混响效果。

<a id="api_irtcengine_setvoicebeautifierparameters__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-10]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setvoicebeautifierpreset" />

## setVoiceBeautifierPreset [#setvoicebeautifierpreset]

设置预设的美声效果。

<a id="api_irtcengine_setvoicebeautifierpreset__prototype" />

\`\`\`java
public abstract int setVoiceBeautifierPreset(int preset);
\`\`\`

<a id="api_irtcengine_setvoicebeautifierpreset__detailed_desc" />

#### \`自从\` [#自从-3]

自 v3.2.0 版本新增。

你可以根据不同场景设置不同的美声效果。 为获得更好的人声效果，建议在调用该方法前调用以下 API：

* 调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。
* 调用 setAudioProfile，将 profile 设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。

注：

* 不要将 setAudioProfile 中的 profile 设置为 SPEECH\\_STANDARD （1），否则该方法不生效。
* 该方法在人声处理方面效果最佳，不建议用于处理包含音乐的音频数据。
* 调用 setVoiceBeautifierPreset 后，不建议再调用以下方法，否则会覆盖通过该方法设置的效果：
  * setAudioEffectPreset
  * setAudioEffectParameters
  * setLocalVoicePitch
  * setLocalVoiceEqualization
  * setLocalVoiceReverb
  * setVoiceBeautifierParameters
  * setVoiceConversionPreset
* 该方法依赖于美声动态库 libagora\\_audio\\_beauty\\_extension.so。如果该动态库被删除，则无法正常启用该功能。

<a id="api_irtcengine_setvoicebeautifierpreset__timing" />

### 调用时机 [#调用时机-6]

该方法可在加入频道前或加入频道后调用。

<a id="api_irtcengine_setvoicebeautifierpreset__parameters" />

### 参数 [#参数-10]

#### \`preset\` [#preset-3]

预设的美声效果选项：

* VOICE\\_BEAUTIFIER\\_OFF：关闭美声效果，使用原始声音。
* CHAT\\_BEAUTIFIER\\_MAGNETIC：更具磁性的声音（仅限男性）。
* CHAT\\_BEAUTIFIER\\_FRESH：更清新的声音（仅限女性）。
* CHAT\\_BEAUTIFIER\\_VITALITY：更有活力的声音（仅限女性）。
* SINGING\\_BEAUTIFIER：歌唱美声效果。
  * 调用 setVoiceBeautifierPreset 设置该选项可美化男性声音，并添加类似在小房间中歌唱的混响效果。建议用于处理男性声音，否则可能出现声音失真。
  * 调用 setVoiceBeautifierParameters 设置该选项可美化男性或女性声音，并添加混响效果。
* TIMBRE\\_TRANSFORMATION\\_VIGOROUS：更有力的声音。
* TIMBRE\\_TRANSFORMATION\\_DEEP：更深沉的声音。
* TIMBRE\\_TRANSFORMATION\\_MELLOW：更柔和的声音。
* TIMBRE\\_TRANSFORMATION\\_FALSETTO：假声。
* TIMBRE\\_TRANSFORMATION\\_FULL：更饱满的声音。
* TIMBRE\\_TRANSFORMATION\\_CLEAR：更清晰的声音。
* TIMBRE\\_TRANSFORMATION\\_RESOUNDING：更响亮的声音。
* TIMBRE\\_TRANSFORMATION\\_RINGING：更有穿透力的声音。
* ULTRA\\_HIGH\\_QUALITY\\_VOICE：超高音质人声，使音频更清晰并还原更多细节。
  * 为获得更好的音效质量，建议在调用该方法前调用 setAudioProfile，将 profile 设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），并将 scenario 设置为 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。
  * 如果你使用的音频采集设备已经可以高度还原音频细节，建议不要启用超高音质人声，否则 SDK 可能会过度还原音频细节，导致无法听到预期的声音效果。

<a id="api_irtcengine_setvoicebeautifierpreset__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-11]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setvoiceconversionpreset" />

## setVoiceConversionPreset [#setvoiceconversionpreset]

设置 SDK 预设的变声效果。

<a id="api_irtcengine_setvoiceconversionpreset__prototype" />

\`\`\`java
public abstract int setVoiceConversionPreset(int preset);
\`\`\`

<a id="api_irtcengine_setvoiceconversionpreset__detailed_desc" />

#### \`自从\` [#自从-4]

自 v3.3.1 版本新增。

你可以调用该方法为发布音频流的本地用户设置预设的变声效果。设置后，频道内所有用户都能听到该变声效果。你可以根据不同场景为用户设置不同的变声效果。 为了获得更好的音效效果，建议在调用该方法前调用以下 API：

* 调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。
* 调用 setAudioProfile，并将 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。

注：

* 不要将 setAudioProfile 中的 profile 参数设置为 SPEECH\\_STANDARD （1），否则该方法不生效。
* 该方法对人声处理效果最佳，声网不建议使用该方法处理包含音乐的音频数据。
* 调用 setVoiceConversionPreset 后，声网不建议你再调用以下方法，否则会覆盖 setVoiceConversionPreset 设置的效果：
  * setAudioEffectPreset
  * setAudioEffectParameters
  * setVoiceBeautifierPreset
  * setVoiceBeautifierParameters
  * setLocalVoicePitch
  * setLocalVoiceFormant
  * setLocalVoiceEqualization
  * setLocalVoiceReverb
* 该方法依赖于美声特效动态库 libagora\\_audio\\_beauty\\_extension.so。如果该动态库被删除，该功能将无法正常启用。

<a id="api_irtcengine_setvoiceconversionpreset__timing" />

### 调用时机 [#调用时机-7]

该方法可在加入频道前或加入频道后调用。

<a id="api_irtcengine_setvoiceconversionpreset__parameters" />

### 参数 [#参数-11]

#### \`preset\` [#preset-4]

SDK 预设的变声效果选项：

* VOICE\\_CONVERSION\\_OFF：关闭变声效果，使用原始声音。
* VOICE\\_CHANGER\\_NEUTRAL：中性声音。为避免音频失真，建议用于处理女性音色。
* VOICE\\_CHANGER\\_SWEET：甜美声音。为避免音频失真，建议用于处理女性音色。
* VOICE\\_CHANGER\\_SOLID：沉稳声音。为避免音频失真，建议用于处理男性音色。
* VOICE\\_CHANGER\\_BASS：低沉声音。为避免音频失真，建议用于处理男性音色。

<a id="api_irtcengine_setvoiceconversionpreset__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-12]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "enablevoiceaituner",
    content: "启用或关闭语音 AI 调音器。"
  }, {
    heading: "enablevoiceaituner",
    content: "支持增强音质和调整音色风格。"
  }, {
    heading: "适用场景",
    content: "社交娱乐场景，包括在线 KTV、在线播客和展厅直播等对音质要求较高的场景。"
  }, {
    heading: "调用时机",
    content: "该方法可在加入频道前或后调用。"
  }, {
    heading: "enabled",
    content: "是否启用语音 AI 调音器："
  }, {
    heading: "enabled",
    content: "true：启用语音 AI 调音器。"
  }, {
    heading: "enabled",
    content: "false：（默认）关闭语音 AI 调音器。"
  }, {
    heading: "type",
    content: "语音 AI 调音器的音效类型，详见 VOICE\\_AI\\_TUNER\\_TYPE。"
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
    heading: "getaudioeffectmanager",
    content: "获取用于管理音效文件的 IAudioEffectManager 实例。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回 `IAudioEffectManager` 实例。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "setadvancedaudiooptions",
    content: "设置高级音频选项。"
  }, {
    heading: "setadvancedaudiooptions",
    content: "如果你有高级音频处理需求，例如采集和发送立体声音频，可以调用此方法。"
  }, {
    heading: "setadvancedaudiooptions",
    content: "请在调用 `joinChannel`、 enableAudio 和 enableLocalAudio 之前调用此方法。"
  }, {
    heading: "options",
    content: "高级音频选项。详见 AdvancedAudioOptions。"
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
    heading: "setainsmode",
    content: "设置是否启用 AI 降噪功能并设置降噪模式。"
  }, {
    heading: "setainsmode",
    content: "你可以调用此方法启用 AI 降噪功能。启用后，SDK 会在保证人声质量的前提下，自动检测并减少音频中的稳态和非稳态噪声。"
  }, {
    heading: "setainsmode",
    content: "稳态噪声是指在观察时间内平均统计特性恒定、幅度波动极小的噪声信号，常见来源包括："
  }, {
    heading: "setainsmode",
    content: "电视；"
  }, {
    heading: "setainsmode",
    content: "空调；"
  }, {
    heading: "setainsmode",
    content: "机械设备等。"
  }, {
    heading: "setainsmode",
    content: "非稳态噪声是指在观察时间内幅度波动剧烈的噪声信号，常见来源包括："
  }, {
    heading: "setainsmode",
    content: "雷声；"
  }, {
    heading: "setainsmode",
    content: "爆炸声；"
  }, {
    heading: "setainsmode",
    content: "破裂声等。"
  }, {
    heading: "setainsmode",
    content: "注："
  }, {
    heading: "setainsmode",
    content: "此方法依赖于 AI 降噪动态库 libagora\\_ai\\_noise\\_suppression\\_extension.so。如果该动态库被删除，则无法启用该功能。"
  }, {
    heading: "setainsmode",
    content: "声网不建议在运行 Android 6.0 及以下版本的设备上启用此功能。"
  }, {
    heading: "适用场景-1",
    content: "在连麦、在线教育和视频会议等场景中，该功能可检测并减少背景噪声，从而提升体验。"
  }, {
    heading: "调用时机-1",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "enabled-1",
    content: "是否启用 AI 降噪功能："
  }, {
    heading: "enabled-1",
    content: "true：启用 AI 降噪。"
  }, {
    heading: "enabled-1",
    content: "false：（默认）关闭 AI 降噪。"
  }, {
    heading: "mode",
    content: "AI 降噪模式："
  }, {
    heading: "mode",
    content: "0：（默认）平衡模式。该模式在降噪效果和延迟之间提供平衡表现。"
  }, {
    heading: "mode",
    content: "1：激进模式。适用于对降噪效果要求较高的场景，如户外活动直播。该模式降噪更强，但可能会影响音频的原始特性。"
  }, {
    heading: "mode",
    content: "2：低延迟激进模式。该模式的降噪延迟约为平衡模式和激进模式的一半，适用于对低延迟降噪有较高要求的场景，如实时在线合唱。"
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
    heading: "setaudioeffectparameters",
    content: "设置 SDK 预设音效的参数。"
  }, {
    heading: "自从",
    content: "自 v3.2.0 版本新增。"
  }, {
    heading: "自从",
    content: "调用该方法可以为发送音频流的本地用户设置以下参数："
  }, {
    heading: "自从",
    content: "3D 人声特效：设置 3D 人声的循环周期。"
  }, {
    heading: "自从",
    content: "音高修正特效：设置音高修正的基本模式和主音。"
  }, {
    heading: "自从",
    content: "声网建议将该方法与界面元素绑定，方便用户交互式地调整音高修正效果。 为了获得更好的人声效果，建议在调用该方法前先调用以下 API："
  }, {
    heading: "自从",
    content: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。"
  }, {
    heading: "自从",
    content: "调用 setAudioProfile，将 profile 设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。"
  }, {
    heading: "自从",
    content: "注："
  }, {
    heading: "自从",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "自从",
    content: "请勿将 setAudioProfile 中的 profile 设置为 SPEECH\\_STANDARD （1），否则该方法不生效。"
  }, {
    heading: "自从",
    content: "该方法在人声处理方面效果最佳，不建议用于处理包含音乐的音频数据。"
  }, {
    heading: "自从",
    content: "调用 setAudioEffectParameters 后，不建议再调用以下方法，否则会覆盖该方法设置的效果："
  }, {
    heading: "自从",
    content: "setAudioEffectPreset"
  }, {
    heading: "自从",
    content: "setVoiceBeautifierPreset"
  }, {
    heading: "自从",
    content: "setLocalVoicePitch"
  }, {
    heading: "自从",
    content: "setLocalVoiceEqualization"
  }, {
    heading: "自从",
    content: "setLocalVoiceReverb"
  }, {
    heading: "自从",
    content: "setVoiceBeautifierParameters"
  }, {
    heading: "自从",
    content: "setVoiceConversionPreset"
  }, {
    heading: "自从",
    content: "该方法依赖语音美声动态库 libagora\\_audio\\_beauty\\_extension.so。如果该动态库被删除，将无法正常启用该功能。"
  }, {
    heading: "preset",
    content: "SDK 预设音效的选项："
  }, {
    heading: "preset",
    content: "ROOM\\_ACOUSTICS\\_3D\\_VOICE：3D 人声特效。"
  }, {
    heading: "preset",
    content: "设置该枚举值前，需要将 setAudioProfile 中的 profile 设置为 MUSIC\\_STANDARD\\_STEREO （3）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则设置不生效。"
  }, {
    heading: "preset",
    content: "启用该特效后，用户需使用立体声播放设备才能听到预期效果。"
  }, {
    heading: "preset",
    content: "PITCH\\_CORRECTION：音高修正特效。"
  }, {
    heading: "param1",
    content: "当 preset 为 ROOM\\_ACOUSTICS\\_3D\\_VOICE 时，表示 3D 人声特效的循环周期，单位为秒，取值范围为 \\[1,60]，默认值为 10，表示声音每 10 秒绕你一圈。"
  }, {
    heading: "param1",
    content: "当 preset 为 PITCH\\_CORRECTION 时，表示音高修正特效的基本模式："
  }, {
    heading: "param1",
    content: "1：（默认）自然大调。"
  }, {
    heading: "param1",
    content: "2：自然小调。"
  }, {
    heading: "param1",
    content: "3：日本五声音阶。"
  }, {
    heading: "param2",
    content: "当 preset 为 ROOM\\_ACOUSTICS\\_3D\\_VOICE 时，需将 param2 设置为 0。"
  }, {
    heading: "param2",
    content: "当 preset 为 PITCH\\_CORRECTION 时，表示音高修正特效的主音："
  }, {
    heading: "param2",
    content: "1：A"
  }, {
    heading: "param2",
    content: "2：A#"
  }, {
    heading: "param2",
    content: "3：B"
  }, {
    heading: "param2",
    content: "4：（默认）C"
  }, {
    heading: "param2",
    content: "5：C#"
  }, {
    heading: "param2",
    content: "6：D"
  }, {
    heading: "param2",
    content: "7：D#"
  }, {
    heading: "param2",
    content: "8：E"
  }, {
    heading: "param2",
    content: "9：F"
  }, {
    heading: "param2",
    content: "10：F#"
  }, {
    heading: "param2",
    content: "11：G"
  }, {
    heading: "param2",
    content: "12：G#"
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
    heading: "setaudioeffectpreset",
    content: "设置 SDK 预设的音效效果。"
  }, {
    heading: "自从-1",
    content: "自 v3.2.0 版本新增。"
  }, {
    heading: "自从-1",
    content: "该方法不会改变原始声音的性别特征。设置后，频道内所有用户都能听到该效果。 为获得更好的人声效果，建议在调用该方法前先调用以下方法："
  }, {
    heading: "自从-1",
    content: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。"
  }, {
    heading: "自从-1",
    content: "调用 setAudioProfile，将 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。"
  }, {
    heading: "自从-1",
    content: "注："
  }, {
    heading: "自从-1",
    content: "不要将 setAudioProfile 中的 profile 参数设置为 SPEECH\\_STANDARD （1），否则该方法不生效。"
  }, {
    heading: "自从-1",
    content: "如果调用 setAudioEffectPreset 设置的枚举值不是 ROOM\\_ACOUSTICS\\_3D\\_VOICE 或 PITCH\\_CORRECTION，则不要调用 setAudioEffectParameters，否则 setAudioEffectPreset 的设置会被覆盖。"
  }, {
    heading: "自从-1",
    content: "调用 setAudioEffectPreset 后，声网不建议再调用以下方法，否则 setAudioEffectPreset 设置的效果会被覆盖："
  }, {
    heading: "自从-1",
    content: "setVoiceBeautifierPreset"
  }, {
    heading: "自从-1",
    content: "setLocalVoicePitch"
  }, {
    heading: "自从-1",
    content: "setLocalVoiceEqualization"
  }, {
    heading: "自从-1",
    content: "setLocalVoiceReverb"
  }, {
    heading: "自从-1",
    content: "setVoiceBeautifierParameters"
  }, {
    heading: "自从-1",
    content: "setVoiceConversionPreset"
  }, {
    heading: "自从-1",
    content: "该方法依赖语音美声动态库 libagora\\_audio\\_beauty\\_extension.so。如果该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "调用时机-2",
    content: "该方法可在加入频道前或加入频道后调用。"
  }, {
    heading: "preset-1",
    content: "预设的音效效果："
  }, {
    heading: "preset-1",
    content: "AUDIO\\_EFFECT\\_OFF （0）：关闭音效，使用原始声音。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_KTV （1）：KTV 场所典型的混响风格。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_VOCAL\\_CONCERT （2）：音乐会场所典型的混响风格。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_STUDIO （3）：录音棚典型的混响风格。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_PHONOGRAPH （4）：老式留声机典型的混响风格。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_VIRTUAL\\_STEREO （5）：虚拟立体声效果，将单声道音频渲染为立体声。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则该预设无效。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_SPACIAL （6）：更具空间感的音效。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_ETHEREAL （7）：更空灵的音效。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_VIRTUAL\\_SURROUND\\_SOUND （8）：虚拟环绕声效果，SDK 在立体声通道基础上生成模拟环绕声场。启用后，用户需使用立体声播放设备才能听到预期音效。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_CHORUS （9）：合唱音效，适用于合唱场景，可增强人声的层次感和空间感。"
  }, {
    heading: "preset-1",
    content: "ROOM\\_ACOUSTICS\\_3D\\_VOICE （10）：3D 声音效果，使声音在用户周围移动，默认循环周期为 10 秒。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC\\_STANDARD\\_STEREO （3）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则该预设无效。启用后，用户需使用立体声播放设备才能听到预期音效。"
  }, {
    heading: "preset-1",
    content: "VOICE\\_CHANGER\\_EFFECT\\_UNCLE （11）：大叔音效，建议用于处理男性音色，否则可能无法听到预期效果。"
  }, {
    heading: "preset-1",
    content: "VOICE\\_CHANGER\\_EFFECT\\_OLDMAN （12）：老人音效，建议用于处理男性音色，否则可能无法听到预期效果。"
  }, {
    heading: "preset-1",
    content: "VOICE\\_CHANGER\\_EFFECT\\_BOY （13）：男孩音效，建议用于处理男性音色，否则可能无法听到预期效果。"
  }, {
    heading: "preset-1",
    content: "VOICE\\_CHANGER\\_EFFECT\\_SISTER （14）：年轻女性音效，建议用于处理女性音色，否则可能无法听到预期效果。"
  }, {
    heading: "preset-1",
    content: "VOICE\\_CHANGER\\_EFFECT\\_GIRL （15）：女孩音效，建议用于处理女性音色，否则可能无法听到预期效果。"
  }, {
    heading: "preset-1",
    content: "VOICE\\_CHANGER\\_EFFECT\\_PIGKING （16）：猪八戒音效，声音如熊吼。"
  }, {
    heading: "preset-1",
    content: "VOICE\\_CHANGER\\_EFFECT\\_HULK （17）：绿巨人音效。"
  }, {
    heading: "preset-1",
    content: "STYLE\\_TRANSFORMATION\\_RNB （18）：R\\&B 音乐典型的混响风格。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则该预设无效。"
  }, {
    heading: "preset-1",
    content: "STYLE\\_TRANSFORMATION\\_POPULAR （19）：流行音乐典型的混响风格。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），否则该预设无效。"
  }, {
    heading: "preset-1",
    content: "PITCH\\_CORRECTION （20）：音高修正效果，根据自然 C 大调音阶修正用户音高。设置该效果后，可调用 setAudioEffectParameters 调整调音的基本模式和主音音高。"
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
    heading: "setlocalvoiceequalization",
    content: "设置本地语音的均衡效果。"
  }, {
    heading: "调用时机-3",
    content: "该方法可在加入频道前或加入频道后调用。"
  }, {
    heading: "bandfrequency",
    content: "频段索引，取值范围为 0 到 9，分别对应 10 个语音效果的中心频率段：31、62、125、250、500、1k、2k、4k、8k 和 16k Hz。详见 AUDIO\\_EQUALIZATION\\_BAND\\_FREQUENCY。"
  }, {
    heading: "bandgain",
    content: "每个频段的增益值，单位为 dB。取值范围为 -15 到 15，默认值为 0。"
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
    heading: "setlocalvoiceformant",
    content: "设置共振峰比例以改变人声音色。"
  }, {
    heading: "setlocalvoiceformant",
    content: "共振峰比例会影响声音的音色。值越小，声音越低沉；值越大，声音越尖锐。如果你希望同时改变音色和音调，建议同时使用 setLocalVoiceFormant 和 setLocalVoicePitch 方法。"
  }, {
    heading: "适用场景-2",
    content: "你可以调用该方法设置本地音频的共振峰比例，以改变人声音色。"
  }, {
    heading: "调用时机-4",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "formantratio",
    content: "共振峰比例。取值范围为 \\[-1.0, 1.0]。（默认值为 0.0）"
  }, {
    heading: "formantratio",
    content: "建议将该值设置在 \\[-0.4, 0.6] 范围内，否则声音可能会严重失真。"
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
    heading: "setlocalvoicepitch",
    content: "设置本地语音的音调。"
  }, {
    heading: "调用时机-5",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "pitch",
    content: "本地语音的音调。取值范围为 \\[0.5, 2.0]。值越小，音调越低。（默认值为 1.0，表示不改变音调。）"
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
    heading: "setlocalvoicereverb",
    content: "设置本地语音的混响效果。"
  }, {
    heading: "setlocalvoicereverb",
    content: "你可以使用更易用的方法 setAudioEffectPreset 实现如流行、R\\&B 和 KTV 等预设混响效果。"
  }, {
    heading: "setlocalvoicereverb",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "reverbkey",
    content: "混响键。详见 AUDIO\\_REVERB\\_TYPE。"
  }, {
    heading: "value",
    content: "混响键的取值。"
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
    heading: "setvoicebeautifierparameters",
    content: "设置预设美声特效的参数。"
  }, {
    heading: "自从-2",
    content: "自 v3.3.0 版本新增。"
  }, {
    heading: "自从-2",
    content: "为了获得更好的人声效果，建议在调用该方法前先调用以下 API："
  }, {
    heading: "自从-2",
    content: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。"
  }, {
    heading: "自从-2",
    content: "调用 setAudioProfile，将 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。"
  }, {
    heading: "自从-2",
    content: "注："
  }, {
    heading: "自从-2",
    content: "可在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "自从-2",
    content: "请勿将 setAudioProfile 中的 profile 参数设置为 SPEECH\\_STANDARD （1），否则该方法不生效。"
  }, {
    heading: "自从-2",
    content: "该方法在人声处理方面效果最佳，不建议用于处理包含音乐的音频数据。"
  }, {
    heading: "自从-2",
    content: "调用 setVoiceBeautifierParameters 后，不建议再调用以下方法，否则会覆盖该方法设置的效果："
  }, {
    heading: "自从-2",
    content: "setAudioEffectPreset"
  }, {
    heading: "自从-2",
    content: "setAudioEffectParameters"
  }, {
    heading: "自从-2",
    content: "setVoiceBeautifierPreset"
  }, {
    heading: "自从-2",
    content: "setLocalVoicePitch"
  }, {
    heading: "自从-2",
    content: "setLocalVoiceEqualization"
  }, {
    heading: "自从-2",
    content: "setLocalVoiceReverb"
  }, {
    heading: "自从-2",
    content: "setVoiceConversionPreset"
  }, {
    heading: "自从-2",
    content: "该方法依赖于美声动态库 libagora\\_audio\\_beauty\\_extension.so。若该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "preset-2",
    content: "预设音效选项："
  }, {
    heading: "preset-2",
    content: "SINGING\\_BEAUTIFIER：美声特效。"
  }, {
    heading: "param1-1",
    content: "歌声的性别特征选项："
  }, {
    heading: "param1-1",
    content: "1：男性音色。"
  }, {
    heading: "param1-1",
    content: "2：女性音色。"
  }, {
    heading: "param2-1",
    content: "歌声的混响效果选项："
  }, {
    heading: "param2-1",
    content: "1：小房间混响效果。"
  }, {
    heading: "param2-1",
    content: "2：大房间混响效果。"
  }, {
    heading: "param2-1",
    content: "3：大厅混响效果。"
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
    heading: "setvoicebeautifierpreset",
    content: "设置预设的美声效果。"
  }, {
    heading: "自从-3",
    content: "自 v3.2.0 版本新增。"
  }, {
    heading: "自从-3",
    content: "你可以根据不同场景设置不同的美声效果。 为获得更好的人声效果，建议在调用该方法前调用以下 API："
  }, {
    heading: "自从-3",
    content: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。"
  }, {
    heading: "自从-3",
    content: "调用 setAudioProfile，将 profile 设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。"
  }, {
    heading: "自从-3",
    content: "注："
  }, {
    heading: "自从-3",
    content: "不要将 setAudioProfile 中的 profile 设置为 SPEECH\\_STANDARD （1），否则该方法不生效。"
  }, {
    heading: "自从-3",
    content: "该方法在人声处理方面效果最佳，不建议用于处理包含音乐的音频数据。"
  }, {
    heading: "自从-3",
    content: "调用 setVoiceBeautifierPreset 后，不建议再调用以下方法，否则会覆盖通过该方法设置的效果："
  }, {
    heading: "自从-3",
    content: "setAudioEffectPreset"
  }, {
    heading: "自从-3",
    content: "setAudioEffectParameters"
  }, {
    heading: "自从-3",
    content: "setLocalVoicePitch"
  }, {
    heading: "自从-3",
    content: "setLocalVoiceEqualization"
  }, {
    heading: "自从-3",
    content: "setLocalVoiceReverb"
  }, {
    heading: "自从-3",
    content: "setVoiceBeautifierParameters"
  }, {
    heading: "自从-3",
    content: "setVoiceConversionPreset"
  }, {
    heading: "自从-3",
    content: "该方法依赖于美声动态库 libagora\\_audio\\_beauty\\_extension.so。如果该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "调用时机-6",
    content: "该方法可在加入频道前或加入频道后调用。"
  }, {
    heading: "preset-3",
    content: "预设的美声效果选项："
  }, {
    heading: "preset-3",
    content: "VOICE\\_BEAUTIFIER\\_OFF：关闭美声效果，使用原始声音。"
  }, {
    heading: "preset-3",
    content: "CHAT\\_BEAUTIFIER\\_MAGNETIC：更具磁性的声音（仅限男性）。"
  }, {
    heading: "preset-3",
    content: "CHAT\\_BEAUTIFIER\\_FRESH：更清新的声音（仅限女性）。"
  }, {
    heading: "preset-3",
    content: "CHAT\\_BEAUTIFIER\\_VITALITY：更有活力的声音（仅限女性）。"
  }, {
    heading: "preset-3",
    content: "SINGING\\_BEAUTIFIER：歌唱美声效果。"
  }, {
    heading: "preset-3",
    content: "调用 setVoiceBeautifierPreset 设置该选项可美化男性声音，并添加类似在小房间中歌唱的混响效果。建议用于处理男性声音，否则可能出现声音失真。"
  }, {
    heading: "preset-3",
    content: "调用 setVoiceBeautifierParameters 设置该选项可美化男性或女性声音，并添加混响效果。"
  }, {
    heading: "preset-3",
    content: "TIMBRE\\_TRANSFORMATION\\_VIGOROUS：更有力的声音。"
  }, {
    heading: "preset-3",
    content: "TIMBRE\\_TRANSFORMATION\\_DEEP：更深沉的声音。"
  }, {
    heading: "preset-3",
    content: "TIMBRE\\_TRANSFORMATION\\_MELLOW：更柔和的声音。"
  }, {
    heading: "preset-3",
    content: "TIMBRE\\_TRANSFORMATION\\_FALSETTO：假声。"
  }, {
    heading: "preset-3",
    content: "TIMBRE\\_TRANSFORMATION\\_FULL：更饱满的声音。"
  }, {
    heading: "preset-3",
    content: "TIMBRE\\_TRANSFORMATION\\_CLEAR：更清晰的声音。"
  }, {
    heading: "preset-3",
    content: "TIMBRE\\_TRANSFORMATION\\_RESOUNDING：更响亮的声音。"
  }, {
    heading: "preset-3",
    content: "TIMBRE\\_TRANSFORMATION\\_RINGING：更有穿透力的声音。"
  }, {
    heading: "preset-3",
    content: "ULTRA\\_HIGH\\_QUALITY\\_VOICE：超高音质人声，使音频更清晰并还原更多细节。"
  }, {
    heading: "preset-3",
    content: "为获得更好的音效质量，建议在调用该方法前调用 setAudioProfile，将 profile 设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5），并将 scenario 设置为 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。"
  }, {
    heading: "preset-3",
    content: "如果你使用的音频采集设备已经可以高度还原音频细节，建议不要启用超高音质人声，否则 SDK 可能会过度还原音频细节，导致无法听到预期的声音效果。"
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
    heading: "setvoiceconversionpreset",
    content: "设置 SDK 预设的变声效果。"
  }, {
    heading: "自从-4",
    content: "自 v3.3.1 版本新增。"
  }, {
    heading: "自从-4",
    content: "你可以调用该方法为发布音频流的本地用户设置预设的变声效果。设置后，频道内所有用户都能听到该变声效果。你可以根据不同场景为用户设置不同的变声效果。 为了获得更好的音效效果，建议在调用该方法前调用以下 API："
  }, {
    heading: "自从-4",
    content: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO\\_SCENARIO\\_GAME\\_STREAMING （3）。"
  }, {
    heading: "自从-4",
    content: "调用 setAudioProfile，并将 profile 参数设置为 MUSIC\\_HIGH\\_QUALITY （4）或 MUSIC\\_HIGH\\_QUALITY\\_STEREO （5）。"
  }, {
    heading: "自从-4",
    content: "注："
  }, {
    heading: "自从-4",
    content: "不要将 setAudioProfile 中的 profile 参数设置为 SPEECH\\_STANDARD （1），否则该方法不生效。"
  }, {
    heading: "自从-4",
    content: "该方法对人声处理效果最佳，声网不建议使用该方法处理包含音乐的音频数据。"
  }, {
    heading: "自从-4",
    content: "调用 setVoiceConversionPreset 后，声网不建议你再调用以下方法，否则会覆盖 setVoiceConversionPreset 设置的效果："
  }, {
    heading: "自从-4",
    content: "setAudioEffectPreset"
  }, {
    heading: "自从-4",
    content: "setAudioEffectParameters"
  }, {
    heading: "自从-4",
    content: "setVoiceBeautifierPreset"
  }, {
    heading: "自从-4",
    content: "setVoiceBeautifierParameters"
  }, {
    heading: "自从-4",
    content: "setLocalVoicePitch"
  }, {
    heading: "自从-4",
    content: "setLocalVoiceFormant"
  }, {
    heading: "自从-4",
    content: "setLocalVoiceEqualization"
  }, {
    heading: "自从-4",
    content: "setLocalVoiceReverb"
  }, {
    heading: "自从-4",
    content: "该方法依赖于美声特效动态库 libagora\\_audio\\_beauty\\_extension.so。如果该动态库被删除，该功能将无法正常启用。"
  }, {
    heading: "调用时机-7",
    content: "该方法可在加入频道前或加入频道后调用。"
  }, {
    heading: "preset-4",
    content: "SDK 预设的变声效果选项："
  }, {
    heading: "preset-4",
    content: "VOICE\\_CONVERSION\\_OFF：关闭变声效果，使用原始声音。"
  }, {
    heading: "preset-4",
    content: "VOICE\\_CHANGER\\_NEUTRAL：中性声音。为避免音频失真，建议用于处理女性音色。"
  }, {
    heading: "preset-4",
    content: "VOICE\\_CHANGER\\_SWEET：甜美声音。为避免音频失真，建议用于处理女性音色。"
  }, {
    heading: "preset-4",
    content: "VOICE\\_CHANGER\\_SOLID：沉稳声音。为避免音频失真，建议用于处理男性音色。"
  }, {
    heading: "preset-4",
    content: "VOICE\\_CHANGER\\_BASS：低沉声音。为避免音频失真，建议用于处理男性音色。"
  }, {
    heading: "返回值-12",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-12",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-12",
    content: "RtcEngine"
  }],
  headings: [{
    id: "enablevoiceaituner",
    content: "enableVoiceAITuner"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "type",
    content: "`type`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "getaudioeffectmanager",
    content: "getAudioEffectManager"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "setadvancedaudiooptions",
    content: "setAdvancedAudioOptions"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "options",
    content: "`options`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "setainsmode",
    content: "setAINSMode"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "enabled-1",
    content: "`enabled`"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "setaudioeffectparameters",
    content: "setAudioEffectParameters"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "preset",
    content: "`preset`"
  }, {
    id: "param1",
    content: "`param1`"
  }, {
    id: "param2",
    content: "`param2`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "setaudioeffectpreset",
    content: "setAudioEffectPreset"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "preset-1",
    content: "`preset`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "setlocalvoiceequalization",
    content: "setLocalVoiceEqualization"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "bandfrequency",
    content: "`bandFrequency`"
  }, {
    id: "bandgain",
    content: "`bandGain`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "setlocalvoiceformant",
    content: "setLocalVoiceFormant"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "formantratio",
    content: "`formantRatio`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "setlocalvoicepitch",
    content: "setLocalVoicePitch"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "pitch",
    content: "`pitch`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "setlocalvoicereverb",
    content: "setLocalVoiceReverb"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "reverbkey",
    content: "`reverbKey`"
  }, {
    id: "value",
    content: "`value`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "setvoicebeautifierparameters",
    content: "setVoiceBeautifierParameters"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "preset-2",
    content: "`preset`"
  }, {
    id: "param1-1",
    content: "`param1`"
  }, {
    id: "param2-1",
    content: "`param2`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "setvoicebeautifierpreset",
    content: "setVoiceBeautifierPreset"
  }, {
    id: "自从-3",
    content: "`自从`"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "preset-3",
    content: "`preset`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "setvoiceconversionpreset",
    content: "setVoiceConversionPreset"
  }, {
    id: "自从-4",
    content: "`自从`"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "preset-4",
    content: "`preset`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enablevoiceaituner",
  title: _jsx(_Fragment, {
    children: "enableVoiceAITuner"
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
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
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
  depth: 4,
  url: "#type",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
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
  url: "#getaudioeffectmanager",
  title: _jsx(_Fragment, {
    children: "getAudioEffectManager"
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
  url: "#setadvancedaudiooptions",
  title: _jsx(_Fragment, {
    children: "setAdvancedAudioOptions"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#options",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#setainsmode",
  title: _jsx(_Fragment, {
    children: "setAINSMode"
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
  url: "#参数-2",
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
  url: "#mode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mode"
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
  url: "#setaudioeffectparameters",
  title: _jsx(_Fragment, {
    children: "setAudioEffectParameters"
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
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#preset",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "preset"
    })
  })
}, {
  depth: 4,
  url: "#param1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "param1"
    })
  })
}, {
  depth: 4,
  url: "#param2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "param2"
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
  url: "#setaudioeffectpreset",
  title: _jsx(_Fragment, {
    children: "setAudioEffectPreset"
  })
}, {
  depth: 4,
  url: "#自从-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-2",
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
  url: "#preset-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "preset"
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
  url: "#setlocalvoiceequalization",
  title: _jsx(_Fragment, {
    children: "setLocalVoiceEqualization"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
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
  url: "#bandfrequency",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bandFrequency"
    })
  })
}, {
  depth: 4,
  url: "#bandgain",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bandGain"
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
  url: "#setlocalvoiceformant",
  title: _jsx(_Fragment, {
    children: "setLocalVoiceFormant"
  })
}, {
  depth: 3,
  url: "#适用场景-2",
  title: _jsx(_Fragment, {
    children: "适用场景"
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
  url: "#formantratio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "formantRatio"
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
  url: "#setlocalvoicepitch",
  title: _jsx(_Fragment, {
    children: "setLocalVoicePitch"
  })
}, {
  depth: 3,
  url: "#调用时机-5",
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
  url: "#pitch",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pitch"
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
  url: "#setlocalvoicereverb",
  title: _jsx(_Fragment, {
    children: "setLocalVoiceReverb"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#reverbkey",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reverbKey"
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
  url: "#setvoicebeautifierparameters",
  title: _jsx(_Fragment, {
    children: "setVoiceBeautifierParameters"
  })
}, {
  depth: 4,
  url: "#自从-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#preset-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "preset"
    })
  })
}, {
  depth: 4,
  url: "#param1-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "param1"
    })
  })
}, {
  depth: 4,
  url: "#param2-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "param2"
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
  url: "#setvoicebeautifierpreset",
  title: _jsx(_Fragment, {
    children: "setVoiceBeautifierPreset"
  })
}, {
  depth: 4,
  url: "#自从-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-6",
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
  url: "#preset-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "preset"
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
  url: "#setvoiceconversionpreset",
  title: _jsx(_Fragment, {
    children: "setVoiceConversionPreset"
  })
}, {
  depth: 4,
  url: "#自从-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-7",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-11",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#preset-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "preset"
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
      id: "toc_audio_effect"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevoiceaituner"
    }), `
`, _jsx(_components.h2, {
      id: "enablevoiceaituner",
      children: "enableVoiceAITuner"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭语音 AI 调音器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevoiceaituner__prototype"
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
              children: " enableVoiceAITuner"
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
              children: " enabled, Constants.VOICE_AI_TUNER_TYPE type);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevoiceaituner__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "支持增强音质和调整音色风格。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevoiceaituner__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "社交娱乐场景，包括在线 KTV、在线播客和展厅直播等对音质要求较高的场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevoiceaituner__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可在加入频道前或后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevoiceaituner__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用语音 AI 调音器："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用语音 AI 调音器。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭语音 AI 调音器。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "type",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["语音 AI 调音器的音效类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-voiceaitunertype",
        children: "VOICE_AI_TUNER_TYPE"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevoiceaituner__return_values"
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
      id: "api_irtcengine_getaudioeffectmanager"
    }), `
`, _jsx(_components.h2, {
      id: "getaudioeffectmanager",
      children: "getAudioEffectManager"
    }), `
`, _jsx(_components.p, {
      children: "获取用于管理音效文件的 IAudioEffectManager 实例。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudioeffectmanager__prototype"
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
              children: " IAudioEffectManager "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getAudioEffectManager"
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
      id: "api_irtcengine_getaudioeffectmanager__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getaudioeffectmanager__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.code, {
        children: "IAudioEffectManager"
      }), " 实例。"]
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
      id: "api_irtcengine_setadvancedaudiooptions"
    }), `
`, _jsx(_components.h2, {
      id: "setadvancedaudiooptions",
      children: "setAdvancedAudioOptions"
    }), `
`, _jsx(_components.p, {
      children: "设置高级音频选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setadvancedaudiooptions__prototype"
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
              children: " setAdvancedAudioOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AdvancedAudioOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setadvancedaudiooptions__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "如果你有高级音频处理需求，例如采集和发送立体声音频，可以调用此方法。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.code, {
            children: "joinChannel"
          }), "、 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio",
            children: "enableAudio"
          }), " 和 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enablelocalaudio",
            children: "enableLocalAudio"
          }), " 之前调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setadvancedaudiooptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "options",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["高级音频选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-advancedaudiooptions",
        children: "AdvancedAudioOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setadvancedaudiooptions__return_values"
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
      id: "api_irtcengine_setainsmode"
    }), `
`, _jsx(_components.h2, {
      id: "setainsmode",
      children: "setAINSMode"
    }), `
`, _jsx(_components.p, {
      children: "设置是否启用 AI 降噪功能并设置降噪模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setainsmode__prototype"
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
              children: " setAINSMode"
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
              children: " mode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setainsmode__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用此方法启用 AI 降噪功能。启用后，SDK 会在保证人声质量的前提下，自动检测并减少音频中的稳态和非稳态噪声。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["稳态噪声是指在观察时间内平均统计特性恒定、幅度波动极小的噪声信号，常见来源包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "电视；"
          }), `
`, _jsx(_components.li, {
            children: "空调；"
          }), `
`, _jsx(_components.li, {
            children: "机械设备等。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["非稳态噪声是指在观察时间内幅度波动剧烈的噪声信号，常见来源包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "雷声；"
          }), `
`, _jsx(_components.li, {
            children: "爆炸声；"
          }), `
`, _jsx(_components.li, {
            children: "破裂声等。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法依赖于 AI 降噪动态库 libagora_ai_noise_suppression_extension.so。如果该动态库被删除，则无法启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "声网不建议在运行 Android 6.0 及以下版本的设备上启用此功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setainsmode__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在连麦、在线教育和视频会议等场景中，该功能可检测并减少背景噪声，从而提升体验。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setainsmode__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setainsmode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-1",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用 AI 降噪功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用 AI 降噪。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭 AI 降噪。"
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
      children: "AI 降噪模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：（默认）平衡模式。该模式在降噪效果和延迟之间提供平衡表现。"
      }), `
`, _jsx(_components.li, {
        children: "1：激进模式。适用于对降噪效果要求较高的场景，如户外活动直播。该模式降噪更强，但可能会影响音频的原始特性。"
      }), `
`, _jsx(_components.li, {
        children: "2：低延迟激进模式。该模式的降噪延迟约为平衡模式和激进模式的一半，适用于对低延迟降噪有较高要求的场景，如实时在线合唱。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setainsmode__return_values"
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
      id: "api_irtcengine_setaudioeffectparameters"
    }), `
`, _jsx(_components.h2, {
      id: "setaudioeffectparameters",
      children: "setAudioEffectParameters"
    }), `
`, _jsx(_components.p, {
      children: "设置 SDK 预设音效的参数。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioeffectparameters__prototype"
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
              children: " setAudioEffectParameters"
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
              children: " preset, "
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
              children: " param1, "
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
              children: " param2);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioeffectparameters__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.2.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法可以为发送音频流的本地用户设置以下参数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "3D 人声特效：设置 3D 人声的循环周期。"
      }), `
`, _jsx(_components.li, {
        children: "音高修正特效：设置音高修正的基本模式和主音。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "声网建议将该方法与界面元素绑定，方便用户交互式地调整音高修正效果。 为了获得更好的人声效果，建议在调用该方法前先调用以下 API："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO_SCENARIO_GAME_STREAMING （3）。"
      }), `
`, _jsx(_components.li, {
        children: "调用 setAudioProfile，将 profile 设置为 MUSIC_HIGH_QUALITY （4）或 MUSIC_HIGH_QUALITY_STEREO （5）。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "请勿将 setAudioProfile 中的 profile 设置为 SPEECH_STANDARD （1），否则该方法不生效。"
      }), `
`, _jsx(_components.li, {
        children: "该方法在人声处理方面效果最佳，不建议用于处理包含音乐的音频数据。"
      }), `
`, _jsxs(_components.li, {
        children: ["调用 setAudioEffectParameters 后，不建议再调用以下方法，否则会覆盖该方法设置的效果：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "setAudioEffectPreset"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceBeautifierPreset"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoicePitch"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceEqualization"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceReverb"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceBeautifierParameters"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceConversionPreset"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "该方法依赖语音美声动态库 libagora_audio_beauty_extension.so。如果该动态库被删除，将无法正常启用该功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioeffectparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "preset",
      children: _jsx(_components.code, {
        children: "preset"
      })
    }), `
`, _jsx(_components.p, {
      children: "SDK 预设音效的选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["ROOM_ACOUSTICS_3D_VOICE：3D 人声特效。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "设置该枚举值前，需要将 setAudioProfile 中的 profile 设置为 MUSIC_STANDARD_STEREO （3）或 MUSIC_HIGH_QUALITY_STEREO （5），否则设置不生效。"
          }), `
`, _jsx(_components.li, {
            children: "启用该特效后，用户需使用立体声播放设备才能听到预期效果。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "PITCH_CORRECTION：音高修正特效。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "param1",
      children: _jsx(_components.code, {
        children: "param1"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当 preset 为 ROOM_ACOUSTICS_3D_VOICE 时，表示 3D 人声特效的循环周期，单位为秒，取值范围为 [1,60]，默认值为 10，表示声音每 10 秒绕你一圈。"
      }), `
`, _jsxs(_components.li, {
        children: ["当 preset 为 PITCH_CORRECTION 时，表示音高修正特效的基本模式：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "1：（默认）自然大调。"
          }), `
`, _jsx(_components.li, {
            children: "2：自然小调。"
          }), `
`, _jsx(_components.li, {
            children: "3：日本五声音阶。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "param2",
      children: _jsx(_components.code, {
        children: "param2"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当 preset 为 ROOM_ACOUSTICS_3D_VOICE 时，需将 param2 设置为 0。"
      }), `
`, _jsxs(_components.li, {
        children: ["当 preset 为 PITCH_CORRECTION 时，表示音高修正特效的主音：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "1：A"
          }), `
`, _jsx(_components.li, {
            children: "2：A#"
          }), `
`, _jsx(_components.li, {
            children: "3：B"
          }), `
`, _jsx(_components.li, {
            children: "4：（默认）C"
          }), `
`, _jsx(_components.li, {
            children: "5：C#"
          }), `
`, _jsx(_components.li, {
            children: "6：D"
          }), `
`, _jsx(_components.li, {
            children: "7：D#"
          }), `
`, _jsx(_components.li, {
            children: "8：E"
          }), `
`, _jsx(_components.li, {
            children: "9：F"
          }), `
`, _jsx(_components.li, {
            children: "10：F#"
          }), `
`, _jsx(_components.li, {
            children: "11：G"
          }), `
`, _jsx(_components.li, {
            children: "12：G#"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioeffectparameters__return_values"
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
      id: "api_irtcengine_setaudioeffectpreset"
    }), `
`, _jsx(_components.h2, {
      id: "setaudioeffectpreset",
      children: "setAudioEffectPreset"
    }), `
`, _jsx(_components.p, {
      children: "设置 SDK 预设的音效效果。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioeffectpreset__prototype"
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
              children: " setAudioEffectPreset"
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
              children: " preset);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioeffectpreset__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-1",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.2.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "该方法不会改变原始声音的性别特征。设置后，频道内所有用户都能听到该效果。 为获得更好的人声效果，建议在调用该方法前先调用以下方法："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO_SCENARIO_GAME_STREAMING （3）。"
      }), `
`, _jsx(_components.li, {
        children: "调用 setAudioProfile，将 profile 参数设置为 MUSIC_HIGH_QUALITY （4）或 MUSIC_HIGH_QUALITY_STEREO （5）。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "不要将 setAudioProfile 中的 profile 参数设置为 SPEECH_STANDARD （1），否则该方法不生效。"
      }), `
`, _jsx(_components.li, {
        children: "如果调用 setAudioEffectPreset 设置的枚举值不是 ROOM_ACOUSTICS_3D_VOICE 或 PITCH_CORRECTION，则不要调用 setAudioEffectParameters，否则 setAudioEffectPreset 的设置会被覆盖。"
      }), `
`, _jsxs(_components.li, {
        children: ["调用 setAudioEffectPreset 后，声网不建议再调用以下方法，否则 setAudioEffectPreset 设置的效果会被覆盖：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "setVoiceBeautifierPreset"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoicePitch"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceEqualization"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceReverb"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceBeautifierParameters"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceConversionPreset"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "该方法依赖语音美声动态库 libagora_audio_beauty_extension.so。如果该动态库被删除，则无法正常启用该功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioeffectpreset__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioeffectpreset__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "preset-1",
      children: _jsx(_components.code, {
        children: "preset"
      })
    }), `
`, _jsx(_components.p, {
      children: "预设的音效效果："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_EFFECT_OFF （0）：关闭音效，使用原始声音。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_KTV （1）：KTV 场所典型的混响风格。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_VOCAL_CONCERT （2）：音乐会场所典型的混响风格。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_STUDIO （3）：录音棚典型的混响风格。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_PHONOGRAPH （4）：老式留声机典型的混响风格。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_VIRTUAL_STEREO （5）：虚拟立体声效果，将单声道音频渲染为立体声。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC_HIGH_QUALITY （4）或 MUSIC_HIGH_QUALITY_STEREO （5），否则该预设无效。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_SPACIAL （6）：更具空间感的音效。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_ETHEREAL （7）：更空灵的音效。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_VIRTUAL_SURROUND_SOUND （8）：虚拟环绕声效果，SDK 在立体声通道基础上生成模拟环绕声场。启用后，用户需使用立体声播放设备才能听到预期音效。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_CHORUS （9）：合唱音效，适用于合唱场景，可增强人声的层次感和空间感。"
      }), `
`, _jsx(_components.li, {
        children: "ROOM_ACOUSTICS_3D_VOICE （10）：3D 声音效果，使声音在用户周围移动，默认循环周期为 10 秒。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC_STANDARD_STEREO （3）或 MUSIC_HIGH_QUALITY_STEREO （5），否则该预设无效。启用后，用户需使用立体声播放设备才能听到预期音效。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_EFFECT_UNCLE （11）：大叔音效，建议用于处理男性音色，否则可能无法听到预期效果。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_EFFECT_OLDMAN （12）：老人音效，建议用于处理男性音色，否则可能无法听到预期效果。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_EFFECT_BOY （13）：男孩音效，建议用于处理男性音色，否则可能无法听到预期效果。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_EFFECT_SISTER （14）：年轻女性音效，建议用于处理女性音色，否则可能无法听到预期效果。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_EFFECT_GIRL （15）：女孩音效，建议用于处理女性音色，否则可能无法听到预期效果。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_EFFECT_PIGKING （16）：猪八戒音效，声音如熊吼。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_EFFECT_HULK （17）：绿巨人音效。"
      }), `
`, _jsx(_components.li, {
        children: "STYLE_TRANSFORMATION_RNB （18）：R&B 音乐典型的混响风格。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC_HIGH_QUALITY （4）或 MUSIC_HIGH_QUALITY_STEREO （5），否则该预设无效。"
      }), `
`, _jsx(_components.li, {
        children: "STYLE_TRANSFORMATION_POPULAR （19）：流行音乐典型的混响风格。使用前需将 setAudioProfile 的 profile 参数设置为 MUSIC_HIGH_QUALITY （4）或 MUSIC_HIGH_QUALITY_STEREO （5），否则该预设无效。"
      }), `
`, _jsx(_components.li, {
        children: "PITCH_CORRECTION （20）：音高修正效果，根据自然 C 大调音阶修正用户音高。设置该效果后，可调用 setAudioEffectParameters 调整调音的基本模式和主音音高。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setaudioeffectpreset__return_values"
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
      id: "api_irtcengine_setlocalvoiceequalization"
    }), `
`, _jsx(_components.h2, {
      id: "setlocalvoiceequalization",
      children: "setLocalVoiceEqualization"
    }), `
`, _jsx(_components.p, {
      children: "设置本地语音的均衡效果。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceequalization__prototype"
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
              children: " setLocalVoiceEqualization"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY bandFrequency, "
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
              children: " bandGain);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceequalization__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceequalization__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceequalization__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "bandfrequency",
      children: _jsx(_components.code, {
        children: "bandFrequency"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["频段索引，取值范围为 0 到 9，分别对应 10 个语音效果的中心频率段：31、62、125、250、500、1k、2k、4k、8k 和 16k Hz。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audioequalizationbandfrequency",
        children: "AUDIO_EQUALIZATION_BAND_FREQUENCY"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "bandgain",
      children: _jsx(_components.code, {
        children: "bandGain"
      })
    }), `
`, _jsx(_components.p, {
      children: "每个频段的增益值，单位为 dB。取值范围为 -15 到 15，默认值为 0。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceequalization__return_values"
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
      id: "api_irtcengine_setlocalvoiceformant"
    }), `
`, _jsx(_components.h2, {
      id: "setlocalvoiceformant",
      children: "setLocalVoiceFormant"
    }), `
`, _jsx(_components.p, {
      children: "设置共振峰比例以改变人声音色。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceformant__prototype"
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
              children: " setLocalVoiceFormant"
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
              children: "double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " formantRatio);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceformant__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["共振峰比例会影响声音的音色。值越小，声音越低沉；值越大，声音越尖锐。如果你希望同时改变音色和音调，建议同时使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoiceformant",
        children: "setLocalVoiceFormant"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setlocalvoicepitch",
        children: "setLocalVoicePitch"
      }), " 方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceformant__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法设置本地音频的共振峰比例，以改变人声音色。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceformant__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceformant__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "formantratio",
      children: _jsx(_components.code, {
        children: "formantRatio"
      })
    }), `
`, _jsx(_components.p, {
      children: "共振峰比例。取值范围为 [-1.0, 1.0]。（默认值为 0.0）"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "建议将该值设置在 [-0.4, 0.6] 范围内，否则声音可能会严重失真。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoiceformant__return_values"
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
      id: "api_irtcengine_setlocalvoicepitch"
    }), `
`, _jsx(_components.h2, {
      id: "setlocalvoicepitch",
      children: "setLocalVoicePitch"
    }), `
`, _jsx(_components.p, {
      children: "设置本地语音的音调。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoicepitch__prototype"
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
              children: " setLocalVoicePitch"
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
              children: "double"
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
      id: "api_irtcengine_setlocalvoicepitch__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoicepitch__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoicepitch__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "pitch",
      children: _jsx(_components.code, {
        children: "pitch"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地语音的音调。取值范围为 [0.5, 2.0]。值越小，音调越低。（默认值为 1.0，表示不改变音调。）"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoicepitch__return_values"
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
      id: "api_irtcengine_setlocalvoicereverb"
    }), `
`, _jsx(_components.h2, {
      id: "setlocalvoicereverb",
      children: "setLocalVoiceReverb"
    }), `
`, _jsx(_components.p, {
      children: "设置本地语音的混响效果。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoicereverb__prototype"
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
              children: " setLocalVoiceReverb"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.AUDIO_REVERB_TYPE reverbKey, "
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
      id: "api_irtcengine_setlocalvoicereverb__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以使用更易用的方法 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/audio-effect#api_irtcengine_setaudioeffectpreset",
        children: "setAudioEffectPreset"
      }), " 实现如流行、R&B 和 KTV 等预设混响效果。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你可以在加入频道前或加入频道后调用该方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoicereverb__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "reverbkey",
      children: _jsx(_components.code, {
        children: "reverbKey"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["混响键。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-audioreverbtype",
        children: "AUDIO_REVERB_TYPE"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "value",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "混响键的取值。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvoicereverb__return_values"
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
      id: "api_irtcengine_setvoicebeautifierparameters"
    }), `
`, _jsx(_components.h2, {
      id: "setvoicebeautifierparameters",
      children: "setVoiceBeautifierParameters"
    }), `
`, _jsx(_components.p, {
      children: "设置预设美声特效的参数。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoicebeautifierparameters__prototype"
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
              children: " setVoiceBeautifierParameters"
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
              children: " preset, "
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
              children: " param1, "
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
              children: " param2);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoicebeautifierparameters__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-2",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.3.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "为了获得更好的人声效果，建议在调用该方法前先调用以下 API："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO_SCENARIO_GAME_STREAMING （3）。"
      }), `
`, _jsx(_components.li, {
        children: "调用 setAudioProfile，将 profile 参数设置为 MUSIC_HIGH_QUALITY （4）或 MUSIC_HIGH_QUALITY_STEREO （5）。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "可在加入频道前或加入频道后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "请勿将 setAudioProfile 中的 profile 参数设置为 SPEECH_STANDARD （1），否则该方法不生效。"
      }), `
`, _jsx(_components.li, {
        children: "该方法在人声处理方面效果最佳，不建议用于处理包含音乐的音频数据。"
      }), `
`, _jsxs(_components.li, {
        children: ["调用 setVoiceBeautifierParameters 后，不建议再调用以下方法，否则会覆盖该方法设置的效果：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "setAudioEffectPreset"
          }), `
`, _jsx(_components.li, {
            children: "setAudioEffectParameters"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceBeautifierPreset"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoicePitch"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceEqualization"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceReverb"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceConversionPreset"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "该方法依赖于美声动态库 libagora_audio_beauty_extension.so。若该动态库被删除，则无法正常启用该功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoicebeautifierparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "preset-2",
      children: _jsx(_components.code, {
        children: "preset"
      })
    }), `
`, _jsx(_components.p, {
      children: "预设音效选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SINGING_BEAUTIFIER：美声特效。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "param1-1",
      children: _jsx(_components.code, {
        children: "param1"
      })
    }), `
`, _jsx(_components.p, {
      children: "歌声的性别特征选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：男性音色。"
      }), `
`, _jsx(_components.li, {
        children: "2：女性音色。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "param2-1",
      children: _jsx(_components.code, {
        children: "param2"
      })
    }), `
`, _jsx(_components.p, {
      children: "歌声的混响效果选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：小房间混响效果。"
      }), `
`, _jsx(_components.li, {
        children: "2：大房间混响效果。"
      }), `
`, _jsx(_components.li, {
        children: "3：大厅混响效果。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoicebeautifierparameters__return_values"
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
      id: "api_irtcengine_setvoicebeautifierpreset"
    }), `
`, _jsx(_components.h2, {
      id: "setvoicebeautifierpreset",
      children: "setVoiceBeautifierPreset"
    }), `
`, _jsx(_components.p, {
      children: "设置预设的美声效果。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoicebeautifierpreset__prototype"
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
              children: " setVoiceBeautifierPreset"
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
              children: " preset);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoicebeautifierpreset__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-3",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.2.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "你可以根据不同场景设置不同的美声效果。 为获得更好的人声效果，建议在调用该方法前调用以下 API："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO_SCENARIO_GAME_STREAMING （3）。"
      }), `
`, _jsx(_components.li, {
        children: "调用 setAudioProfile，将 profile 设置为 MUSIC_HIGH_QUALITY （4）或 MUSIC_HIGH_QUALITY_STEREO （5）。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "不要将 setAudioProfile 中的 profile 设置为 SPEECH_STANDARD （1），否则该方法不生效。"
      }), `
`, _jsx(_components.li, {
        children: "该方法在人声处理方面效果最佳，不建议用于处理包含音乐的音频数据。"
      }), `
`, _jsxs(_components.li, {
        children: ["调用 setVoiceBeautifierPreset 后，不建议再调用以下方法，否则会覆盖通过该方法设置的效果：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "setAudioEffectPreset"
          }), `
`, _jsx(_components.li, {
            children: "setAudioEffectParameters"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoicePitch"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceEqualization"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceReverb"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceBeautifierParameters"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceConversionPreset"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "该方法依赖于美声动态库 libagora_audio_beauty_extension.so。如果该动态库被删除，则无法正常启用该功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoicebeautifierpreset__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoicebeautifierpreset__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "preset-3",
      children: _jsx(_components.code, {
        children: "preset"
      })
    }), `
`, _jsx(_components.p, {
      children: "预设的美声效果选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VOICE_BEAUTIFIER_OFF：关闭美声效果，使用原始声音。"
      }), `
`, _jsx(_components.li, {
        children: "CHAT_BEAUTIFIER_MAGNETIC：更具磁性的声音（仅限男性）。"
      }), `
`, _jsx(_components.li, {
        children: "CHAT_BEAUTIFIER_FRESH：更清新的声音（仅限女性）。"
      }), `
`, _jsx(_components.li, {
        children: "CHAT_BEAUTIFIER_VITALITY：更有活力的声音（仅限女性）。"
      }), `
`, _jsxs(_components.li, {
        children: ["SINGING_BEAUTIFIER：歌唱美声效果。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "调用 setVoiceBeautifierPreset 设置该选项可美化男性声音，并添加类似在小房间中歌唱的混响效果。建议用于处理男性声音，否则可能出现声音失真。"
          }), `
`, _jsx(_components.li, {
            children: "调用 setVoiceBeautifierParameters 设置该选项可美化男性或女性声音，并添加混响效果。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "TIMBRE_TRANSFORMATION_VIGOROUS：更有力的声音。"
      }), `
`, _jsx(_components.li, {
        children: "TIMBRE_TRANSFORMATION_DEEP：更深沉的声音。"
      }), `
`, _jsx(_components.li, {
        children: "TIMBRE_TRANSFORMATION_MELLOW：更柔和的声音。"
      }), `
`, _jsx(_components.li, {
        children: "TIMBRE_TRANSFORMATION_FALSETTO：假声。"
      }), `
`, _jsx(_components.li, {
        children: "TIMBRE_TRANSFORMATION_FULL：更饱满的声音。"
      }), `
`, _jsx(_components.li, {
        children: "TIMBRE_TRANSFORMATION_CLEAR：更清晰的声音。"
      }), `
`, _jsx(_components.li, {
        children: "TIMBRE_TRANSFORMATION_RESOUNDING：更响亮的声音。"
      }), `
`, _jsx(_components.li, {
        children: "TIMBRE_TRANSFORMATION_RINGING：更有穿透力的声音。"
      }), `
`, _jsxs(_components.li, {
        children: ["ULTRA_HIGH_QUALITY_VOICE：超高音质人声，使音频更清晰并还原更多细节。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "为获得更好的音效质量，建议在调用该方法前调用 setAudioProfile，将 profile 设置为 MUSIC_HIGH_QUALITY （4）或 MUSIC_HIGH_QUALITY_STEREO （5），并将 scenario 设置为 AUDIO_SCENARIO_GAME_STREAMING （3）。"
          }), `
`, _jsx(_components.li, {
            children: "如果你使用的音频采集设备已经可以高度还原音频细节，建议不要启用超高音质人声，否则 SDK 可能会过度还原音频细节，导致无法听到预期的声音效果。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoicebeautifierpreset__return_values"
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
      id: "api_irtcengine_setvoiceconversionpreset"
    }), `
`, _jsx(_components.h2, {
      id: "setvoiceconversionpreset",
      children: "setVoiceConversionPreset"
    }), `
`, _jsx(_components.p, {
      children: "设置 SDK 预设的变声效果。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoiceconversionpreset__prototype"
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
              children: " setVoiceConversionPreset"
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
              children: " preset);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoiceconversionpreset__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-4",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.3.1 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法为发布音频流的本地用户设置预设的变声效果。设置后，频道内所有用户都能听到该变声效果。你可以根据不同场景为用户设置不同的变声效果。 为了获得更好的音效效果，建议在调用该方法前调用以下 API："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 setAudioScenario 将音频场景设置为高音质音频场景，即 AUDIO_SCENARIO_GAME_STREAMING （3）。"
      }), `
`, _jsx(_components.li, {
        children: "调用 setAudioProfile，并将 profile 参数设置为 MUSIC_HIGH_QUALITY （4）或 MUSIC_HIGH_QUALITY_STEREO （5）。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "不要将 setAudioProfile 中的 profile 参数设置为 SPEECH_STANDARD （1），否则该方法不生效。"
      }), `
`, _jsx(_components.li, {
        children: "该方法对人声处理效果最佳，声网不建议使用该方法处理包含音乐的音频数据。"
      }), `
`, _jsxs(_components.li, {
        children: ["调用 setVoiceConversionPreset 后，声网不建议你再调用以下方法，否则会覆盖 setVoiceConversionPreset 设置的效果：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "setAudioEffectPreset"
          }), `
`, _jsx(_components.li, {
            children: "setAudioEffectParameters"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceBeautifierPreset"
          }), `
`, _jsx(_components.li, {
            children: "setVoiceBeautifierParameters"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoicePitch"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceFormant"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceEqualization"
          }), `
`, _jsx(_components.li, {
            children: "setLocalVoiceReverb"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "该方法依赖于美声特效动态库 libagora_audio_beauty_extension.so。如果该动态库被删除，该功能将无法正常启用。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoiceconversionpreset__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoiceconversionpreset__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "preset-4",
      children: _jsx(_components.code, {
        children: "preset"
      })
    }), `
`, _jsx(_components.p, {
      children: "SDK 预设的变声效果选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VOICE_CONVERSION_OFF：关闭变声效果，使用原始声音。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_NEUTRAL：中性声音。为避免音频失真，建议用于处理女性音色。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_SWEET：甜美声音。为避免音频失真，建议用于处理女性音色。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_SOLID：沉稳声音。为避免音频失真，建议用于处理男性音色。"
      }), `
`, _jsx(_components.li, {
        children: "VOICE_CHANGER_BASS：低沉声音。为避免音频失真，建议用于处理男性音色。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvoiceconversionpreset__return_values"
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
