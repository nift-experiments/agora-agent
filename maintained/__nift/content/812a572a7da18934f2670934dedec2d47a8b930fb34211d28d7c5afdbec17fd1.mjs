import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音频采集",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_capture" />

<a id="api_irtcengine_adjustrecordingsignalvolume" />

## adjustRecordingSignalVolume [#adjustrecordingsignalvolume]

调节采集音频信号的音量。

<a id="api_irtcengine_adjustrecordingsignalvolume__prototype" />

\`\`\`java
public abstract int adjustRecordingSignalVolume(int volume);
\`\`\`

<a id="api_irtcengine_adjustrecordingsignalvolume__detailed_desc" />

如果你只需要静音音频信号，声网建议使用 [muteRecordingSignal](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_muterecordingsignal) 方法。

<a id="api_irtcengine_adjustrecordingsignalvolume__timing" />

### 调用时机 [#调用时机]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_adjustrecordingsignalvolume__parameters" />

### 参数 [#参数]

#### \`volume\` [#volume]

用户的音量，取值范围为 \\[0,400]：

* 0：静音。
* 100：（默认）原始音量。
* 400：原始音量的四倍（将音频信号放大四倍）。

<a id="api_irtcengine_adjustrecordingsignalvolume__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enableinearmonitoring" />

## enableInEarMonitoring \\[1/2] [#enableinearmonitoring-12]

启用或关闭耳返监听。

<a id="api_irtcengine_enableinearmonitoring__prototype" />

\`\`\`java
public abstract int enableInEarMonitoring(boolean enabled);
\`\`\`

<a id="api_irtcengine_enableinearmonitoring__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须使用有线或蓝牙耳机才能听到耳返监听效果。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_enableinearmonitoring__timing" />

### 调用时机 [#调用时机-1]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_enableinearmonitoring__parameters" />

### 参数 [#参数-1]

#### \`enabled\` [#enabled]

是否启用耳返监听（默认值为 false ）：

* true：启用耳返监听。
* false：关闭耳返监听。

<a id="api_irtcengine_enableinearmonitoring__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -8：请确保当前音频路由为蓝牙或有线耳机。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enableinearmonitoring2" />

## enableInEarMonitoring \\[2/2] [#enableinearmonitoring-22]

启用或关闭耳返监听功能。

<a id="api_irtcengine_enableinearmonitoring2__prototype" />

\`\`\`java
public abstract int enableInEarMonitoring(boolean enabled, int includeAudioFilters);
\`\`\`

<a id="api_irtcengine_enableinearmonitoring2__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须使用有线或蓝牙耳机才能听到耳返监听效果。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_enableinearmonitoring2__timing" />

### 调用时机 [#调用时机-2]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_enableinearmonitoring2__parameters" />

### 参数 [#参数-2]

#### \`enabled\` [#enabled-1]

是否启用耳返监听功能。

* true：启用耳返监听。
* false：（默认）关闭耳返监听。

#### \`includeAudioFilters\` [#includeaudiofilters]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅在 \`enabled\` 为 true 时生效。
  </CalloutDescription>
</CalloutContainer>

耳返监听的音频滤镜类型：

* EAR\\_MONITORING\\_FILTER\\_NONE (1 \\<\\< 0)：（1）耳返监听中不添加音频滤镜。
* EAR\\_MONITORING\\_FILTER\\_BUILT\\_IN\\_AUDIO\\_FILTERS (1 \\<\\< 1)：（2）在耳返监听中添加人声特效音频滤镜。如果你实现了美声、音效等功能，用户可以听到添加这些效果后的声音。该枚举值支持使用按位或运算符（|）组合使用。
* EAR\\_MONITORING\\_FILTER\\_NOISE\\_SUPPRESSION (1 \\<\\< 2)：（4）在耳返监听中添加降噪音频滤镜。该枚举值支持使用按位或运算符（|）组合使用。
* EAR\\_MONITORING\\_FILTER\\_REUSE\\_POST\\_PROCESSING\\_FILTER (1 \\<\\< 15)：复用发送端已处理的音频滤镜用于耳返监听。该枚举值可降低 CPU 使用率，但会增加耳返监听延迟，适用于对延迟不敏感但要求低 CPU 消耗的场景。该枚举值仅支持单独使用，选中后其他音频滤镜配置将自动失效。

<a id="api_irtcengine_enableinearmonitoring2__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -8：请确保当前音频路由为蓝牙或有线耳机。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enablelocalaudio" />

## enableLocalAudio [#enablelocalaudio]

启用或关闭本地音频采集功能。

<a id="api_irtcengine_enablelocalaudio__prototype" />

\`\`\`java
public abstract int enableLocalAudio(boolean enabled);
\`\`\`

<a id="api_irtcengine_enablelocalaudio__detailed_desc" />

[enableLocalAudio](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enablelocalaudio) 用于控制本地音频采集和处理的启用状态。调用该方法关闭或重新启用本地音频采集时，本地用户可能会听到远端音频播放中断。 该方法与 [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream) 的区别如下：

* enableLocalAudio：控制本地音频采集和处理的启用状态。
* muteLocalAudioStream：仅控制是否发送本地音频流，不影响音频采集状态。

<a id="api_irtcengine_enablelocalaudio__scenario" />

### 适用场景 [#适用场景]

\`enableLocalAudio(false)\` 适用于只接收远端音频流而不发送本地采集音频的场景。该方法不会影响接收远端音频流。

<a id="api_irtcengine_enablelocalaudio__timing" />

### 调用时机 [#调用时机-3]

你可以在加入频道前或加入频道后调用该方法。在加入频道前调用该方法仅设置设备状态，并在加入频道后立即生效。

<a id="api_irtcengine_enablelocalaudio__related" />

### 相关回调 [#相关回调]

一旦本地音频功能被关闭或重新启用，SDK 会触发 [onLocalAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostatechanged) 回调，报告 \`LOCAL_AUDIO_STREAM_STATE_STOPPED\` （0）或 \`LOCAL_AUDIO_STREAM_STATE_RECORDING\` （1）。

<a id="api_irtcengine_enablelocalaudio__parameters" />

### 参数 [#参数-3]

#### \`enabled\` [#enabled-2]

是否启用本地音频功能：

* true：（默认）重新启用本地音频功能，即启动本地音频采集设备（如麦克风）。
* false：关闭本地音频功能，即停止本地音频采集。

<a id="api_irtcengine_enablelocalaudio__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_muterecordingsignal" />

## muteRecordingSignal [#muterecordingsignal]

设置是否静音录制信号。

<a id="api_irtcengine_muterecordingsignal__prototype" />

\`\`\`java
public abstract int muteRecordingSignal(boolean muted);
\`\`\`

<a id="api_irtcengine_muterecordingsignal__detailed_desc" />

如果你已经调用了 [adjustRecordingSignalVolume](/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_adjustrecordingsignalvolume) 方法调整录制信号的音量，当你调用该方法并将参数设置为 true 时，SDK 会执行以下操作：

* 记录当前已调整的音量。
* 静音录制信号。

当你再次调用该方法并将参数设置为 false 时，录制信号的音量会恢复为静音前记录的音量。

<a id="api_irtcengine_muterecordingsignal__timing" />

### 调用时机 [#调用时机-4]

该方法可以在加入频道前或后调用。

<a id="api_irtcengine_muterecordingsignal__parameters" />

### 参数 [#参数-4]

#### \`muted\` [#muted]

是否静音录制信号：

* true：静音录制信号。
* false：（默认）不静音录制信号。

<a id="api_irtcengine_muterecordingsignal__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setinearmonitoringvolume" />

## setInEarMonitoringVolume [#setinearmonitoringvolume]

设置耳返音量。

<a id="api_irtcengine_setinearmonitoringvolume__prototype" />

\`\`\`java
public abstract int setInEarMonitoringVolume(int volume);
\`\`\`

<a id="api_irtcengine_setinearmonitoringvolume__detailed_desc" />

<a id="api_irtcengine_setinearmonitoringvolume__timing" />

### 调用时机 [#调用时机-5]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_setinearmonitoringvolume__parameters" />

### 参数 [#参数-5]

#### \`volume\` [#volume-1]

用户的音量，取值范围为 \\[0, 400]。0 表示静音，100（默认）表示原始音量，400 表示原始音量的四倍（将音频信号放大四倍）。

<a id="api_irtcengine_setinearmonitoringvolume__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数设置不合法，例如耳返音量超出有效范围（小于 0 或大于 400）。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "adjustrecordingsignalvolume",
    content: "调节采集音频信号的音量。"
  }, {
    heading: "adjustrecordingsignalvolume",
    content: "如果你只需要静音音频信号，声网建议使用 muteRecordingSignal 方法。"
  }, {
    heading: "调用时机",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "volume",
    content: "用户的音量，取值范围为 \\[0,400]："
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
    heading: "enableinearmonitoring-12",
    content: "启用或关闭耳返监听。"
  }, {
    heading: "enableinearmonitoring-12",
    content: "你必须使用有线或蓝牙耳机才能听到耳返监听效果。"
  }, {
    heading: "调用时机-1",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "enabled",
    content: "是否启用耳返监听（默认值为 false ）："
  }, {
    heading: "enabled",
    content: "true：启用耳返监听。"
  }, {
    heading: "enabled",
    content: "false：关闭耳返监听。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-1",
    content: "-8：请确保当前音频路由为蓝牙或有线耳机。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "enableinearmonitoring-22",
    content: "启用或关闭耳返监听功能。"
  }, {
    heading: "enableinearmonitoring-22",
    content: "你必须使用有线或蓝牙耳机才能听到耳返监听效果。"
  }, {
    heading: "调用时机-2",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "enabled-1",
    content: "是否启用耳返监听功能。"
  }, {
    heading: "enabled-1",
    content: "true：启用耳返监听。"
  }, {
    heading: "enabled-1",
    content: "false：（默认）关闭耳返监听。"
  }, {
    heading: "includeaudiofilters",
    content: "该参数仅在 `enabled` 为 true 时生效。"
  }, {
    heading: "includeaudiofilters",
    content: "耳返监听的音频滤镜类型："
  }, {
    heading: "includeaudiofilters",
    content: "EAR\\_MONITORING\\_FILTER\\_NONE (1 \\<\\< 0)：（1）耳返监听中不添加音频滤镜。"
  }, {
    heading: "includeaudiofilters",
    content: "EAR\\_MONITORING\\_FILTER\\_BUILT\\_IN\\_AUDIO\\_FILTERS (1 \\<\\< 1)：（2）在耳返监听中添加人声特效音频滤镜。如果你实现了美声、音效等功能，用户可以听到添加这些效果后的声音。该枚举值支持使用按位或运算符（|）组合使用。"
  }, {
    heading: "includeaudiofilters",
    content: "EAR\\_MONITORING\\_FILTER\\_NOISE\\_SUPPRESSION (1 \\<\\< 2)：（4）在耳返监听中添加降噪音频滤镜。该枚举值支持使用按位或运算符（|）组合使用。"
  }, {
    heading: "includeaudiofilters",
    content: "EAR\\_MONITORING\\_FILTER\\_REUSE\\_POST\\_PROCESSING\\_FILTER (1 \\<\\< 15)：复用发送端已处理的音频滤镜用于耳返监听。该枚举值可降低 CPU 使用率，但会增加耳返监听延迟，适用于对延迟不敏感但要求低 CPU 消耗的场景。该枚举值仅支持单独使用，选中后其他音频滤镜配置将自动失效。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-2",
    content: "-8：请确保当前音频路由为蓝牙或有线耳机。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "enablelocalaudio",
    content: "启用或关闭本地音频采集功能。"
  }, {
    heading: "enablelocalaudio",
    content: "enableLocalAudio 用于控制本地音频采集和处理的启用状态。调用该方法关闭或重新启用本地音频采集时，本地用户可能会听到远端音频播放中断。 该方法与 muteLocalAudioStream 的区别如下："
  }, {
    heading: "enablelocalaudio",
    content: "enableLocalAudio：控制本地音频采集和处理的启用状态。"
  }, {
    heading: "enablelocalaudio",
    content: "muteLocalAudioStream：仅控制是否发送本地音频流，不影响音频采集状态。"
  }, {
    heading: "适用场景",
    content: "`enableLocalAudio(false)` 适用于只接收远端音频流而不发送本地采集音频的场景。该方法不会影响接收远端音频流。"
  }, {
    heading: "调用时机-3",
    content: "你可以在加入频道前或加入频道后调用该方法。在加入频道前调用该方法仅设置设备状态，并在加入频道后立即生效。"
  }, {
    heading: "相关回调",
    content: "一旦本地音频功能被关闭或重新启用，SDK 会触发 onLocalAudioStateChanged 回调，报告 `LOCAL_AUDIO_STREAM_STATE_STOPPED` （0）或 `LOCAL_AUDIO_STREAM_STATE_RECORDING` （1）。"
  }, {
    heading: "enabled-2",
    content: "是否启用本地音频功能："
  }, {
    heading: "enabled-2",
    content: "true：（默认）重新启用本地音频功能，即启动本地音频采集设备（如麦克风）。"
  }, {
    heading: "enabled-2",
    content: "false：关闭本地音频功能，即停止本地音频采集。"
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
    heading: "muterecordingsignal",
    content: "设置是否静音录制信号。"
  }, {
    heading: "muterecordingsignal",
    content: "如果你已经调用了 adjustRecordingSignalVolume 方法调整录制信号的音量，当你调用该方法并将参数设置为 true 时，SDK 会执行以下操作："
  }, {
    heading: "muterecordingsignal",
    content: "记录当前已调整的音量。"
  }, {
    heading: "muterecordingsignal",
    content: "静音录制信号。"
  }, {
    heading: "muterecordingsignal",
    content: "当你再次调用该方法并将参数设置为 false 时，录制信号的音量会恢复为静音前记录的音量。"
  }, {
    heading: "调用时机-4",
    content: "该方法可以在加入频道前或后调用。"
  }, {
    heading: "muted",
    content: "是否静音录制信号："
  }, {
    heading: "muted",
    content: "true：静音录制信号。"
  }, {
    heading: "muted",
    content: "false：（默认）不静音录制信号。"
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
    heading: "setinearmonitoringvolume",
    content: "设置耳返音量。"
  }, {
    heading: "调用时机-5",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "volume-1",
    content: "用户的音量，取值范围为 \\[0, 400]。0 表示静音，100（默认）表示原始音量，400 表示原始音量的四倍（将音频信号放大四倍）。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-5",
    content: "-2：参数设置不合法，例如耳返音量超出有效范围（小于 0 或大于 400）。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }],
  headings: [{
    id: "adjustrecordingsignalvolume",
    content: "adjustRecordingSignalVolume"
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
    id: "enableinearmonitoring-12",
    content: "enableInEarMonitoring [1/2]"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "enableinearmonitoring-22",
    content: "enableInEarMonitoring [2/2]"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "enabled-1",
    content: "`enabled`"
  }, {
    id: "includeaudiofilters",
    content: "`includeAudioFilters`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "enablelocalaudio",
    content: "enableLocalAudio"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "enabled-2",
    content: "`enabled`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "muterecordingsignal",
    content: "muteRecordingSignal"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "muted",
    content: "`muted`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "setinearmonitoringvolume",
    content: "setInEarMonitoringVolume"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "volume-1",
    content: "`volume`"
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
  url: "#adjustrecordingsignalvolume",
  title: _jsx(_Fragment, {
    children: "adjustRecordingSignalVolume"
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
  url: "#enableinearmonitoring-12",
  title: _jsx(_Fragment, {
    children: "enableInEarMonitoring [1/2]"
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
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
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
  url: "#enableinearmonitoring-22",
  title: _jsx(_Fragment, {
    children: "enableInEarMonitoring [2/2]"
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
  url: "#enabled-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#includeaudiofilters",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "includeAudioFilters"
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
  url: "#enablelocalaudio",
  title: _jsx(_Fragment, {
    children: "enableLocalAudio"
  })
}, {
  depth: 3,
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
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
  url: "#enabled-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
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
  url: "#muterecordingsignal",
  title: _jsx(_Fragment, {
    children: "muteRecordingSignal"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
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
  url: "#muted",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
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
  url: "#setinearmonitoringvolume",
  title: _jsx(_Fragment, {
    children: "setInEarMonitoringVolume"
  })
}, {
  depth: 3,
  url: "#调用时机-5",
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
  url: "#volume-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "volume"
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
      id: "toc_audio_capture"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustrecordingsignalvolume"
    }), `
`, _jsx(_components.h2, {
      id: "adjustrecordingsignalvolume",
      children: "adjustRecordingSignalVolume"
    }), `
`, _jsx(_components.p, {
      children: "调节采集音频信号的音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustrecordingsignalvolume__prototype"
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
              children: " adjustRecordingSignalVolume"
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
      id: "api_irtcengine_adjustrecordingsignalvolume__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你只需要静音音频信号，声网建议使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_muterecordingsignal",
        children: "muteRecordingSignal"
      }), " 方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustrecordingsignalvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_adjustrecordingsignalvolume__parameters"
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
      children: "用户的音量，取值范围为 [0,400]："
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
      id: "api_irtcengine_adjustrecordingsignalvolume__return_values"
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
      id: "api_irtcengine_enableinearmonitoring"
    }), `
`, _jsx(_components.h2, {
      id: "enableinearmonitoring-12",
      children: "enableInEarMonitoring [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭耳返监听。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring__prototype"
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
              children: " enableInEarMonitoring"
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
              children: " enabled);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你必须使用有线或蓝牙耳机才能听到耳返监听效果。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用耳返监听（默认值为 false ）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用耳返监听。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭耳返监听。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-8：请确保当前音频路由为蓝牙或有线耳机。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_enableinearmonitoring2"
    }), `
`, _jsx(_components.h2, {
      id: "enableinearmonitoring-22",
      children: "enableInEarMonitoring [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭耳返监听功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring2__prototype"
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
              children: " enableInEarMonitoring"
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
              children: " includeAudioFilters);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring2__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你必须使用有线或蓝牙耳机才能听到耳返监听效果。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring2__parameters"
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
      children: "是否启用耳返监听功能。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用耳返监听。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭耳返监听。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "includeaudiofilters",
      children: _jsx(_components.code, {
        children: "includeAudioFilters"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该参数仅在 ", _jsx(_components.code, {
            children: "enabled"
          }), " 为 true 时生效。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "耳返监听的音频滤镜类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "EAR_MONITORING_FILTER_NONE (1 << 0)：（1）耳返监听中不添加音频滤镜。"
      }), `
`, _jsx(_components.li, {
        children: "EAR_MONITORING_FILTER_BUILT_IN_AUDIO_FILTERS (1 << 1)：（2）在耳返监听中添加人声特效音频滤镜。如果你实现了美声、音效等功能，用户可以听到添加这些效果后的声音。该枚举值支持使用按位或运算符（|）组合使用。"
      }), `
`, _jsx(_components.li, {
        children: "EAR_MONITORING_FILTER_NOISE_SUPPRESSION (1 << 2)：（4）在耳返监听中添加降噪音频滤镜。该枚举值支持使用按位或运算符（|）组合使用。"
      }), `
`, _jsx(_components.li, {
        children: "EAR_MONITORING_FILTER_REUSE_POST_PROCESSING_FILTER (1 << 15)：复用发送端已处理的音频滤镜用于耳返监听。该枚举值可降低 CPU 使用率，但会增加耳返监听延迟，适用于对延迟不敏感但要求低 CPU 消耗的场景。该枚举值仅支持单独使用，选中后其他音频滤镜配置将自动失效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinearmonitoring2__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-8：请确保当前音频路由为蓝牙或有线耳机。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_enablelocalaudio"
    }), `
`, _jsx(_components.h2, {
      id: "enablelocalaudio",
      children: "enableLocalAudio"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭本地音频采集功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalaudio__prototype"
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
              children: " enableLocalAudio"
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
              children: " enabled);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalaudio__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_enablelocalaudio",
        children: "enableLocalAudio"
      }), " 用于控制本地音频采集和处理的启用状态。调用该方法关闭或重新启用本地音频采集时，本地用户可能会听到远端音频播放中断。 该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalaudiostream",
        children: "muteLocalAudioStream"
      }), " 的区别如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "enableLocalAudio：控制本地音频采集和处理的启用状态。"
      }), `
`, _jsx(_components.li, {
        children: "muteLocalAudioStream：仅控制是否发送本地音频流，不影响音频采集状态。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalaudio__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "enableLocalAudio(false)"
      }), " 适用于只接收远端音频流而不发送本地采集音频的场景。该方法不会影响接收远端音频流。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalaudio__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。在加入频道前调用该方法仅设置设备状态，并在加入频道后立即生效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalaudio__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["一旦本地音频功能被关闭或重新启用，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onlocalaudiostatechanged",
        children: "onLocalAudioStateChanged"
      }), " 回调，报告 ", _jsx(_components.code, {
        children: "LOCAL_AUDIO_STREAM_STATE_STOPPED"
      }), " （0）或 ", _jsx(_components.code, {
        children: "LOCAL_AUDIO_STREAM_STATE_RECORDING"
      }), " （1）。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalaudio__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-2",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用本地音频功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）重新启用本地音频功能，即启动本地音频采集设备（如麦克风）。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭本地音频功能，即停止本地音频采集。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalaudio__return_values"
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
      id: "api_irtcengine_muterecordingsignal"
    }), `
`, _jsx(_components.h2, {
      id: "muterecordingsignal",
      children: "muteRecordingSignal"
    }), `
`, _jsx(_components.p, {
      children: "设置是否静音录制信号。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muterecordingsignal__prototype"
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
              children: " muteRecordingSignal"
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
      id: "api_irtcengine_muterecordingsignal__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你已经调用了 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-capture#api_irtcengine_adjustrecordingsignalvolume",
        children: "adjustRecordingSignalVolume"
      }), " 方法调整录制信号的音量，当你调用该方法并将参数设置为 true 时，SDK 会执行以下操作："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "记录当前已调整的音量。"
      }), `
`, _jsx(_components.li, {
        children: "静音录制信号。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "当你再次调用该方法并将参数设置为 false 时，录制信号的音量会恢复为静音前记录的音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muterecordingsignal__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muterecordingsignal__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否静音录制信号："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：静音录制信号。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不静音录制信号。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muterecordingsignal__return_values"
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
      id: "api_irtcengine_setinearmonitoringvolume"
    }), `
`, _jsx(_components.h2, {
      id: "setinearmonitoringvolume",
      children: "setInEarMonitoringVolume"
    }), `
`, _jsx(_components.p, {
      children: "设置耳返音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setinearmonitoringvolume__prototype"
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
              children: " setInEarMonitoringVolume"
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
      id: "api_irtcengine_setinearmonitoringvolume__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setinearmonitoringvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setinearmonitoringvolume__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "volume-1",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户的音量，取值范围为 [0, 400]。0 表示静音，100（默认）表示原始音量，400 表示原始音量的四倍（将音频信号放大四倍）。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setinearmonitoringvolume__return_values"
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
`, _jsx(_components.li, {
            children: "-2：参数设置不合法，例如耳返音量超出有效范围（小于 0 或大于 400）。"
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
