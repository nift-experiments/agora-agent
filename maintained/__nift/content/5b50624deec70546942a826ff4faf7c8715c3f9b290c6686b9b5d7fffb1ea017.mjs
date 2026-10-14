import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音频频谱",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_spectrum" />

<a id="api_irtcengine_disableaudiospectrummonitor" />

## disableAudioSpectrumMonitor [#disableaudiospectrummonitor]

禁用音频频谱监测。

<a id="api_irtcengine_disableaudiospectrummonitor__prototype" />

\`\`\`java
public abstract int disableAudioSpectrumMonitor();
\`\`\`

<a id="api_irtcengine_disableaudiospectrummonitor__detailed_desc" />

调用 [enableAudioSpectrumMonitor](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor) 后，如需关闭音频频谱监测，可以调用该方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你可以在加入频道前或加入频道后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_disableaudiospectrummonitor__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enableaudiospectrummonitor" />

## enableAudioSpectrumMonitor [#enableaudiospectrummonitor]

开启音频频谱监测功能。

<a id="api_irtcengine_enableaudiospectrummonitor__prototype" />

\`\`\`java
public abstract int enableAudioSpectrumMonitor(int intervalInMS);
\`\`\`

<a id="api_irtcengine_enableaudiospectrummonitor__detailed_desc" />

你可以注册音频频谱观察器并调用该方法以获取本地或远端用户的音频频谱数据。

<a id="api_irtcengine_enableaudiospectrummonitor__scenario" />

### 适用场景 [#适用场景]

你可以在加入频道前或加入频道后调用此方法。

<a id="api_irtcengine_enableaudiospectrummonitor__related" />

### 相关回调 [#相关回调]

[onLocalAudioSpectrum](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum) 和 [onRemoteAudioSpectrum](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onremoteaudiospectrum) 回调。

<a id="api_irtcengine_enableaudiospectrummonitor__parameters" />

### 参数 [#参数]

#### \`intervalInMS\` [#intervalinms]

SDK 触发 [onLocalAudioSpectrum](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum) 和 [onRemoteAudioSpectrum](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onremoteaudiospectrum) 回调的时间间隔，单位为毫秒。该参数不能小于 10，否则调用该方法会失败。（默认值为 100）

<a id="api_irtcengine_enableaudiospectrummonitor__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_registeraudiospectrumobserver" />

## registerAudioSpectrumObserver [#registeraudiospectrumobserver]

注册音频频谱观察器。

<a id="api_irtcengine_registeraudiospectrumobserver__prototype" />

\`\`\`java
public abstract int registerAudioSpectrumObserver(IAudioSpectrumObserver observer);
\`\`\`

<a id="api_irtcengine_registeraudiospectrumobserver__detailed_desc" />

成功注册音频频谱观察器并调用 [enableAudioSpectrumMonitor](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor) 启用音频频谱监测后，SDK 会根据你设置的时间间隔，触发你在 [IAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver) 中实现的回调。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你可以在加入频道前或加入频道后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_registeraudiospectrumobserver__parameters" />

### 参数 [#参数-1]

#### \`observer\` [#observer]

音频频谱观察器。详见 [IAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver)。

<a id="api_irtcengine_registeraudiospectrumobserver__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_unregisteraudiospectrumobserver" />

## unRegisterAudioSpectrumObserver [#unregisteraudiospectrumobserver]

取消注册音频频谱观察器。

<a id="api_irtcengine_unregisteraudiospectrumobserver__prototype" />

\`\`\`java
public abstract int unRegisterAudioSpectrumObserver(IAudioSpectrumObserver observer);
\`\`\`

<a id="api_irtcengine_unregisteraudiospectrumobserver__detailed_desc" />

调用 [registerAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver) 后，如果你希望关闭音频频谱监测，可以调用此方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你可以在加入频道前或加入后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_unregisteraudiospectrumobserver__parameters" />

### 参数 [#参数-2]

#### \`observer\` [#observer-1]

音频频谱观察器，详见 [IAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver)。

<a id="api_irtcengine_unregisteraudiospectrumobserver__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_iaudiospectrumobserver_onlocalaudiospectrum" />

## onLocalAudioSpectrum [#onlocalaudiospectrum]

本地音频频谱数据回调。

<a id="callback_iaudiospectrumobserver_onlocalaudiospectrum__prototype" />

\`\`\`java
@CalledByNative boolean onLocalAudioSpectrum(AudioSpectrumInfo data);
\`\`\`

<a id="callback_iaudiospectrumobserver_onlocalaudiospectrum__detailed_desc" />

在成功调用 [registerAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver) 实现 [onLocalAudioSpectrum](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum) 回调，并调用 [enableAudioSpectrumMonitor](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor) 启用音频频谱监测后，SDK 会按照你设置的时间间隔，在编码前触发该回调报告本地用户的音频频谱数据。

<a id="callback_iaudiospectrumobserver_onlocalaudiospectrum__timing" />

### 触发时机 [#触发时机]

该回调在启用音频频谱监测并设置时间间隔后，由 SDK 按照设置的时间间隔在编码前触发。

<a id="callback_iaudiospectrumobserver_onlocalaudiospectrum__parameters" />

### 参数 [#参数-3]

#### \`data\` [#data]

本地用户的音频频谱数据。详见 [AudioSpectrumInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audiospectrumdata)。

<a id="callback_iaudiospectrumobserver_onlocalaudiospectrum__return_values" />

### 返回值 [#返回值-4]

是否接收到频谱数据：

* true：已接收到频谱数据。
* false：未接收到频谱数据。

### 所属接口类 [#所属接口类-4]

* [IAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver)

<a id="callback_iaudiospectrumobserver_onremoteaudiospectrum" />

## onRemoteAudioSpectrum [#onremoteaudiospectrum]

远端音频频谱数据回调。

<a id="callback_iaudiospectrumobserver_onremoteaudiospectrum__prototype" />

\`\`\`java
boolean onRemoteAudioSpectrum(UserAudioSpectrumInfo[] userAudioSpectrumInfos, int spectrumNumber);
\`\`\`

<a id="callback_iaudiospectrumobserver_onremoteaudiospectrum__detailed_desc" />

成功调用 [registerAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver) 并调用 [enableAudioSpectrumMonitor](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor) 启用音频频谱监测后，SDK 会按照你设置的时间间隔触发该回调。

<a id="callback_iaudiospectrumobserver_onremoteaudiospectrum__timing" />

### 触发时机 [#触发时机-1]

该回调在成功调用 [registerAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver) 并启用音频频谱监测后，根据设置的时间间隔被触发。

<a id="callback_iaudiospectrumobserver_onremoteaudiospectrum__parameters" />

### 参数 [#参数-4]

#### \`userAudioSpectrumInfos\` [#useraudiospectruminfos]

远端用户的音频频谱信息。数组长度为 SDK 监测到的远端用户数量。如果该数组为 \`null\`，表示未检测到远端用户的音频频谱。详见 [UserAudioSpectrumInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-useraudiospectruminfo)。

#### \`spectrumNumber\` [#spectrumnumber]

远端用户的数量。

<a id="callback_iaudiospectrumobserver_onremoteaudiospectrum__return_values" />

### 返回值 [#返回值-5]

* true：接收到频谱数据。
* false：未接收到频谱数据。

### 所属接口类 [#所属接口类-5]

* [IAudioSpectrumObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver)
`;
export let structuredData = {
  contents: [{
    heading: "disableaudiospectrummonitor",
    content: "禁用音频频谱监测。"
  }, {
    heading: "disableaudiospectrummonitor",
    content: "调用 enableAudioSpectrumMonitor 后，如需关闭音频频谱监测，可以调用该方法。"
  }, {
    heading: "disableaudiospectrummonitor",
    content: "你可以在加入频道前或加入频道后调用此方法。"
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
    heading: "enableaudiospectrummonitor",
    content: "开启音频频谱监测功能。"
  }, {
    heading: "enableaudiospectrummonitor",
    content: "你可以注册音频频谱观察器并调用该方法以获取本地或远端用户的音频频谱数据。"
  }, {
    heading: "适用场景",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "相关回调",
    content: "onLocalAudioSpectrum 和 onRemoteAudioSpectrum 回调。"
  }, {
    heading: "intervalinms",
    content: "SDK 触发 onLocalAudioSpectrum 和 onRemoteAudioSpectrum 回调的时间间隔，单位为毫秒。该参数不能小于 10，否则调用该方法会失败。（默认值为 100）"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-1",
    content: "-2：参数无效。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "registeraudiospectrumobserver",
    content: "注册音频频谱观察器。"
  }, {
    heading: "registeraudiospectrumobserver",
    content: "成功注册音频频谱观察器并调用 enableAudioSpectrumMonitor 启用音频频谱监测后，SDK 会根据你设置的时间间隔，触发你在 IAudioSpectrumObserver 中实现的回调。"
  }, {
    heading: "registeraudiospectrumobserver",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "observer",
    content: "音频频谱观察器。详见 IAudioSpectrumObserver。"
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
    heading: "unregisteraudiospectrumobserver",
    content: "取消注册音频频谱观察器。"
  }, {
    heading: "unregisteraudiospectrumobserver",
    content: "调用 registerAudioSpectrumObserver 后，如果你希望关闭音频频谱监测，可以调用此方法。"
  }, {
    heading: "unregisteraudiospectrumobserver",
    content: "你可以在加入频道前或加入后调用此方法。"
  }, {
    heading: "observer-1",
    content: "音频频谱观察器，详见 IAudioSpectrumObserver。"
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
    heading: "onlocalaudiospectrum",
    content: "本地音频频谱数据回调。"
  }, {
    heading: "onlocalaudiospectrum",
    content: "在成功调用 registerAudioSpectrumObserver 实现 onLocalAudioSpectrum 回调，并调用 enableAudioSpectrumMonitor 启用音频频谱监测后，SDK 会按照你设置的时间间隔，在编码前触发该回调报告本地用户的音频频谱数据。"
  }, {
    heading: "触发时机",
    content: "该回调在启用音频频谱监测并设置时间间隔后，由 SDK 按照设置的时间间隔在编码前触发。"
  }, {
    heading: "data",
    content: "本地用户的音频频谱数据。详见 AudioSpectrumInfo。"
  }, {
    heading: "返回值-4",
    content: "是否接收到频谱数据："
  }, {
    heading: "返回值-4",
    content: "true：已接收到频谱数据。"
  }, {
    heading: "返回值-4",
    content: "false：未接收到频谱数据。"
  }, {
    heading: "所属接口类-4",
    content: "IAudioSpectrumObserver"
  }, {
    heading: "onremoteaudiospectrum",
    content: "远端音频频谱数据回调。"
  }, {
    heading: "onremoteaudiospectrum",
    content: "成功调用 registerAudioSpectrumObserver 并调用 enableAudioSpectrumMonitor 启用音频频谱监测后，SDK 会按照你设置的时间间隔触发该回调。"
  }, {
    heading: "触发时机-1",
    content: "该回调在成功调用 registerAudioSpectrumObserver 并启用音频频谱监测后，根据设置的时间间隔被触发。"
  }, {
    heading: "useraudiospectruminfos",
    content: "远端用户的音频频谱信息。数组长度为 SDK 监测到的远端用户数量。如果该数组为 `null`，表示未检测到远端用户的音频频谱。详见 UserAudioSpectrumInfo。"
  }, {
    heading: "spectrumnumber",
    content: "远端用户的数量。"
  }, {
    heading: "返回值-5",
    content: "true：接收到频谱数据。"
  }, {
    heading: "返回值-5",
    content: "false：未接收到频谱数据。"
  }, {
    heading: "所属接口类-5",
    content: "IAudioSpectrumObserver"
  }],
  headings: [{
    id: "disableaudiospectrummonitor",
    content: "disableAudioSpectrumMonitor"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "enableaudiospectrummonitor",
    content: "enableAudioSpectrumMonitor"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "intervalinms",
    content: "`intervalInMS`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "registeraudiospectrumobserver",
    content: "registerAudioSpectrumObserver"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "observer",
    content: "`observer`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "unregisteraudiospectrumobserver",
    content: "unRegisterAudioSpectrumObserver"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "observer-1",
    content: "`observer`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "onlocalaudiospectrum",
    content: "onLocalAudioSpectrum"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "data",
    content: "`data`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "onremoteaudiospectrum",
    content: "onRemoteAudioSpectrum"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "useraudiospectruminfos",
    content: "`userAudioSpectrumInfos`"
  }, {
    id: "spectrumnumber",
    content: "`spectrumNumber`"
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
  url: "#disableaudiospectrummonitor",
  title: _jsx(_Fragment, {
    children: "disableAudioSpectrumMonitor"
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
  url: "#enableaudiospectrummonitor",
  title: _jsx(_Fragment, {
    children: "enableAudioSpectrumMonitor"
  })
}, {
  depth: 3,
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
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
  url: "#intervalinms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "intervalInMS"
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
  url: "#registeraudiospectrumobserver",
  title: _jsx(_Fragment, {
    children: "registerAudioSpectrumObserver"
  })
}, {
  depth: 3,
  url: "#参数-1",
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
  url: "#unregisteraudiospectrumobserver",
  title: _jsx(_Fragment, {
    children: "unRegisterAudioSpectrumObserver"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#observer-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "observer"
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
  url: "#onlocalaudiospectrum",
  title: _jsx(_Fragment, {
    children: "onLocalAudioSpectrum"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-3",
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
  url: "#onremoteaudiospectrum",
  title: _jsx(_Fragment, {
    children: "onRemoteAudioSpectrum"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#useraudiospectruminfos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userAudioSpectrumInfos"
    })
  })
}, {
  depth: 4,
  url: "#spectrumnumber",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "spectrumNumber"
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
      id: "toc_audio_spectrum"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disableaudiospectrummonitor"
    }), `
`, _jsx(_components.h2, {
      id: "disableaudiospectrummonitor",
      children: "disableAudioSpectrumMonitor"
    }), `
`, _jsx(_components.p, {
      children: "禁用音频频谱监测。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disableaudiospectrummonitor__prototype"
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
              children: " disableAudioSpectrumMonitor"
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
      id: "api_irtcengine_disableaudiospectrummonitor__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor",
        children: "enableAudioSpectrumMonitor"
      }), " 后，如需关闭音频频谱监测，可以调用该方法。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你可以在加入频道前或加入频道后调用此方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disableaudiospectrummonitor__return_values"
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
      id: "api_irtcengine_enableaudiospectrummonitor"
    }), `
`, _jsx(_components.h2, {
      id: "enableaudiospectrummonitor",
      children: "enableAudioSpectrumMonitor"
    }), `
`, _jsx(_components.p, {
      children: "开启音频频谱监测功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiospectrummonitor__prototype"
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
              children: " enableAudioSpectrumMonitor"
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
              children: " intervalInMS);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiospectrummonitor__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以注册音频频谱观察器并调用该方法以获取本地或远端用户的音频频谱数据。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiospectrummonitor__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiospectrummonitor__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum",
        children: "onLocalAudioSpectrum"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onremoteaudiospectrum",
        children: "onRemoteAudioSpectrum"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiospectrummonitor__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "intervalinms",
      children: _jsx(_components.code, {
        children: "intervalInMS"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum",
        children: "onLocalAudioSpectrum"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onremoteaudiospectrum",
        children: "onRemoteAudioSpectrum"
      }), " 回调的时间间隔，单位为毫秒。该参数不能小于 10，否则调用该方法会失败。（默认值为 100）"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableaudiospectrummonitor__return_values"
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
            children: "-2：参数无效。"
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
      id: "api_irtcengine_registeraudiospectrumobserver"
    }), `
`, _jsx(_components.h2, {
      id: "registeraudiospectrumobserver",
      children: "registerAudioSpectrumObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册音频频谱观察器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudiospectrumobserver__prototype"
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
              children: " registerAudioSpectrumObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IAudioSpectrumObserver observer);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudiospectrumobserver__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["成功注册音频频谱观察器并调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor",
        children: "enableAudioSpectrumMonitor"
      }), " 启用音频频谱监测后，SDK 会根据你设置的时间间隔，触发你在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver",
        children: "IAudioSpectrumObserver"
      }), " 中实现的回调。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你可以在加入频道前或加入频道后调用此方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudiospectrumobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "observer",
      children: _jsx(_components.code, {
        children: "observer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频频谱观察器。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver",
        children: "IAudioSpectrumObserver"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registeraudiospectrumobserver__return_values"
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
      id: "api_irtcengine_unregisteraudiospectrumobserver"
    }), `
`, _jsx(_components.h2, {
      id: "unregisteraudiospectrumobserver",
      children: "unRegisterAudioSpectrumObserver"
    }), `
`, _jsx(_components.p, {
      children: "取消注册音频频谱观察器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unregisteraudiospectrumobserver__prototype"
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
              children: " unRegisterAudioSpectrumObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IAudioSpectrumObserver observer);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unregisteraudiospectrumobserver__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver",
        children: "registerAudioSpectrumObserver"
      }), " 后，如果你希望关闭音频频谱监测，可以调用此方法。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你可以在加入频道前或加入后调用此方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unregisteraudiospectrumobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "observer-1",
      children: _jsx(_components.code, {
        children: "observer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音频频谱观察器，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver",
        children: "IAudioSpectrumObserver"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unregisteraudiospectrumobserver__return_values"
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
      id: "callback_iaudiospectrumobserver_onlocalaudiospectrum"
    }), `
`, _jsx(_components.h2, {
      id: "onlocalaudiospectrum",
      children: "onLocalAudioSpectrum"
    }), `
`, _jsx(_components.p, {
      children: "本地音频频谱数据回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onlocalaudiospectrum__prototype"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onLocalAudioSpectrum"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AudioSpectrumInfo data);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onlocalaudiospectrum__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在成功调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver",
        children: "registerAudioSpectrumObserver"
      }), " 实现 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#callback_iaudiospectrumobserver_onlocalaudiospectrum",
        children: "onLocalAudioSpectrum"
      }), " 回调，并调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor",
        children: "enableAudioSpectrumMonitor"
      }), " 启用音频频谱监测后，SDK 会按照你设置的时间间隔，在编码前触发该回调报告本地用户的音频频谱数据。"]
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onlocalaudiospectrum__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在启用音频频谱监测并设置时间间隔后，由 SDK 按照设置的时间间隔在编码前触发。"
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onlocalaudiospectrum__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "data",
      children: _jsx(_components.code, {
        children: "data"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地用户的音频频谱数据。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audiospectrumdata",
        children: "AudioSpectrumInfo"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onlocalaudiospectrum__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "是否接收到频谱数据："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：已接收到频谱数据。"
      }), `
`, _jsx(_components.li, {
        children: "false：未接收到频谱数据。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver",
          children: "IAudioSpectrumObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onremoteaudiospectrum"
    }), `
`, _jsx(_components.h2, {
      id: "onremoteaudiospectrum",
      children: "onRemoteAudioSpectrum"
    }), `
`, _jsx(_components.p, {
      children: "远端音频频谱数据回调。"
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onremoteaudiospectrum__prototype"
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
              children: " onRemoteAudioSpectrum"
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
              children: "UserAudioSpectrumInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] userAudioSpectrumInfos, "
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
              children: " spectrumNumber);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onremoteaudiospectrum__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver",
        children: "registerAudioSpectrumObserver"
      }), " 并调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_enableaudiospectrummonitor",
        children: "enableAudioSpectrumMonitor"
      }), " 启用音频频谱监测后，SDK 会按照你设置的时间间隔触发该回调。"]
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onremoteaudiospectrum__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在成功调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-spectrum#api_irtcengine_registeraudiospectrumobserver",
        children: "registerAudioSpectrumObserver"
      }), " 并启用音频频谱监测后，根据设置的时间间隔被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onremoteaudiospectrum__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "useraudiospectruminfos",
      children: _jsx(_components.code, {
        children: "userAudioSpectrumInfos"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["远端用户的音频频谱信息。数组长度为 SDK 监测到的远端用户数量。如果该数组为 ", _jsx(_components.code, {
        children: "null"
      }), "，表示未检测到远端用户的音频频谱。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-useraudiospectruminfo",
        children: "UserAudioSpectrumInfo"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "spectrumnumber",
      children: _jsx(_components.code, {
        children: "spectrumNumber"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的数量。"
    }), `
`, _jsx("a", {
      id: "callback_iaudiospectrumobserver_onremoteaudiospectrum__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：接收到频谱数据。"
      }), `
`, _jsx(_components.li, {
        children: "false：未接收到频谱数据。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_iaudiospectrumobserver",
          children: "IAudioSpectrumObserver"
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
