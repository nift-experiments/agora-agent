import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音频路由",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_route" />

<a id="api_irtcengine_isspeakerphoneenabled" />

## isSpeakerphoneEnabled [#isspeakerphoneenabled]

检查是否启用扬声器播放音频。

<a id="api_irtcengine_isspeakerphoneenabled__prototype" />

\`\`\`java
public abstract boolean isSpeakerphoneEnabled();
\`\`\`

<a id="api_irtcengine_isspeakerphoneenabled__detailed_desc" />

<a id="api_irtcengine_isspeakerphoneenabled__timing" />

### 调用时机 [#调用时机]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_irtcengine_isspeakerphoneenabled__return_values" />

### 返回值 [#返回值]

* true：扬声器已启用，音频将从扬声器播放。
* false：扬声器未启用，音频将从其他设备播放，例如耳机或听筒。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setdefaultaudioroutetospeakerphone" />

## setDefaultAudioRoutetoSpeakerphone [#setdefaultaudioroutetospeakerphone]

设置默认音频播放路由。

<a id="api_irtcengine_setdefaultaudioroutetospeakerphone__prototype" />

\`\`\`java
public abstract int setDefaultAudioRoutetoSpeakerphone(boolean defaultToSpeaker);
\`\`\`

<a id="api_irtcengine_setdefaultaudioroutetospeakerphone__detailed_desc" />

大多数手机有两个音频路由：顶部的听筒和底部的扬声器。你可以通过调用该方法设置默认音频路由，在未连接外部音频设备时决定音频是通过听筒还是扬声器播放。 在不同场景下，系统的默认音频路由如下：

* 语音通话：听筒。
* 音频直播：扬声器。
* 视频通话：扬声器。
* 视频直播：扬声器。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    调用该方法设置默认音频路由后，系统的实际音频路由会根据外部音频设备（如有线耳机或蓝牙耳机）的连接情况自动切换。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setdefaultaudioroutetospeakerphone__timing" />

### 调用时机 [#调用时机-1]

请在加入频道前调用该方法。如果需要在加入频道后更改音频路由，请调用 [setEnableSpeakerphone](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setenablespeakerphone)。

<a id="api_irtcengine_setdefaultaudioroutetospeakerphone__parameters" />

### 参数 [#参数]

#### \`defaultToSpeaker\` [#defaulttospeaker]

是否将扬声器设置为默认音频路由：

* true：将扬声器设置为默认音频路由。
* false：将听筒设置为默认音频路由。

<a id="api_irtcengine_setdefaultaudioroutetospeakerphone__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setenablespeakerphone" />

## setEnableSpeakerphone [#setenablespeakerphone]

设置是否将音频路由切换到扬声器。

<a id="api_irtcengine_setenablespeakerphone__prototype" />

\`\`\`java
public abstract int setEnableSpeakerphone(boolean enabled);
\`\`\`

<a id="api_irtcengine_setenablespeakerphone__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法仅设置当前频道中的音频路由，不影响默认音频路由。如果用户离开当前频道并加入另一个频道，将使用默认音频路由。 如果用户使用了蓝牙或有线耳机等外部音频播放设备，该方法不生效，SDK 会通过外部设备播放音频。当用户连接多个外部设备时，SDK 会通过最后连接的设备播放音频。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setenablespeakerphone__scenario" />

### 适用场景 [#适用场景]

如果 SDK 的默认音频路由或 [setDefaultAudioRoutetoSpeakerphone](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setdefaultaudioroutetospeakerphone) 的设置无法满足你的需求，可以调用该方法切换当前音频路由。

<a id="api_irtcengine_setenablespeakerphone__timing" />

### 调用时机 [#调用时机-2]

请在加入频道后调用该方法。

<a id="api_irtcengine_setenablespeakerphone__related" />

### 相关回调 [#相关回调]

成功调用该方法后，SDK 会触发 [onAudioRouteChanged](/zh-CN/api-reference/rtc/android/device-management/audio-route#callback_irtcengineeventhandler_onaudioroutingchanged) 回调报告当前音频路由。

<a id="api_irtcengine_setenablespeakerphone__parameters" />

### 参数 [#参数-1]

#### \`enabled\` [#enabled]

是否启用扬声器：

* true：启用设备状态监测，音频路由为扬声器。
* false：关闭设备状态监测，音频路由为听筒。

<a id="api_irtcengine_setenablespeakerphone__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setrouteincommunicationmode" />

## setRouteInCommunicationMode [#setrouteincommunicationmode]

在通信音频模式下设置音频播放路由。

<a id="api_irtcengine_setrouteincommunicationmode__prototype" />

\`\`\`java
public abstract int setRouteInCommunicationMode(int route);
\`\`\`

<a id="api_irtcengine_setrouteincommunicationmode__detailed_desc" />

该方法用于将音频路由从蓝牙耳机切换为听筒、有线耳机或扬声器。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    同时使用该方法和 [setEnableSpeakerphone](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setenablespeakerphone) 方法可能会导致冲突。建议仅使用 [setRouteInCommunicationMode](/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setrouteincommunicationmode) 方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setrouteincommunicationmode__timing" />

### 调用时机 [#调用时机-3]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_setrouteincommunicationmode__related" />

### 相关回调 [#相关回调-1]

成功调用该方法后，SDK 会触发 [onAudioRouteChanged](/zh-CN/api-reference/rtc/android/device-management/audio-route#callback_irtcengineeventhandler_onaudioroutingchanged) 回调报告当前音频路由。

<a id="api_irtcengine_setrouteincommunicationmode__parameters" />

### 参数 [#参数-2]

#### \`route\` [#route]

你希望使用的音频播放路由：

* -1：默认音频路由。
* 0：带麦克风的耳机。
* 1：听筒。
* 2：不带麦克风的耳机。
* 3：设备内置扬声器。
* 4：（尚不支持）外部扬声器。
* 5：蓝牙耳机。
* 6：USB 设备。

<a id="api_irtcengine_setrouteincommunicationmode__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onaudioroutingchanged" />

## onAudioRouteChanged [#onaudioroutechanged]

本地音频路由发生变化时的回调。

<a id="callback_irtcengineeventhandler_onaudioroutingchanged__prototype" />

\`\`\`java
public void onAudioRouteChanged(int routing) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onaudioroutingchanged__detailed_desc" />

<a id="callback_irtcengineeventhandler_onaudioroutingchanged__timing" />

### 触发时机 [#触发时机]

该回调在本地音频路由发生变化时被触发。

<a id="callback_irtcengineeventhandler_onaudioroutingchanged__parameters" />

### 参数 [#参数-3]

#### \`routing\` [#routing]

当前的音频路由。

* AUDIO\\_ROUTE\\_DEFAULT （-1）：默认音频路由。
* AUDIO\\_ROUTE\\_HEADSET （0）：音频路由为带麦克风的耳机。
* AUDIO\\_ROUTE\\_EARPIECE （1）：音频路由为听筒。
* AUDIO\\_ROUTE\\_HEADSETNOMIC （2）：音频路由为不带麦克风的耳机。
* AUDIO\\_ROUTE\\_SPEAKERPHONE （3）：音频路由为设备自带扬声器。
* AUDIO\\_ROUTE\\_LOUDSPEAKER （4）：音频路由为外接扬声器（预留）。
* AUDIO\\_ROUTE\\_BLUETOOTH\\_DEVICE\\_HFP （5）：音频路由为使用 HFP 协议的蓝牙设备。
* AUDIO\\_ROUTE\\_BLUETOOTH\\_DEVICE\\_A2DP （10）：音频路由为使用 A2DP 协议的蓝牙设备。

### 所属接口类 [#所属接口类-4]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "isspeakerphoneenabled",
    content: "检查是否启用扬声器播放音频。"
  }, {
    heading: "调用时机",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "返回值",
    content: "true：扬声器已启用，音频将从扬声器播放。"
  }, {
    heading: "返回值",
    content: "false：扬声器未启用，音频将从其他设备播放，例如耳机或听筒。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "setdefaultaudioroutetospeakerphone",
    content: "设置默认音频播放路由。"
  }, {
    heading: "setdefaultaudioroutetospeakerphone",
    content: "大多数手机有两个音频路由：顶部的听筒和底部的扬声器。你可以通过调用该方法设置默认音频路由，在未连接外部音频设备时决定音频是通过听筒还是扬声器播放。 在不同场景下，系统的默认音频路由如下："
  }, {
    heading: "setdefaultaudioroutetospeakerphone",
    content: "语音通话：听筒。"
  }, {
    heading: "setdefaultaudioroutetospeakerphone",
    content: "音频直播：扬声器。"
  }, {
    heading: "setdefaultaudioroutetospeakerphone",
    content: "视频通话：扬声器。"
  }, {
    heading: "setdefaultaudioroutetospeakerphone",
    content: "视频直播：扬声器。"
  }, {
    heading: "setdefaultaudioroutetospeakerphone",
    content: "调用该方法设置默认音频路由后，系统的实际音频路由会根据外部音频设备（如有线耳机或蓝牙耳机）的连接情况自动切换。"
  }, {
    heading: "调用时机-1",
    content: "请在加入频道前调用该方法。如果需要在加入频道后更改音频路由，请调用 setEnableSpeakerphone。"
  }, {
    heading: "defaulttospeaker",
    content: "是否将扬声器设置为默认音频路由："
  }, {
    heading: "defaulttospeaker",
    content: "true：将扬声器设置为默认音频路由。"
  }, {
    heading: "defaulttospeaker",
    content: "false：将听筒设置为默认音频路由。"
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
    heading: "setenablespeakerphone",
    content: "设置是否将音频路由切换到扬声器。"
  }, {
    heading: "setenablespeakerphone",
    content: "该方法仅设置当前频道中的音频路由，不影响默认音频路由。如果用户离开当前频道并加入另一个频道，将使用默认音频路由。 如果用户使用了蓝牙或有线耳机等外部音频播放设备，该方法不生效，SDK 会通过外部设备播放音频。当用户连接多个外部设备时，SDK 会通过最后连接的设备播放音频。"
  }, {
    heading: "适用场景",
    content: "如果 SDK 的默认音频路由或 setDefaultAudioRoutetoSpeakerphone 的设置无法满足你的需求，可以调用该方法切换当前音频路由。"
  }, {
    heading: "调用时机-2",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "相关回调",
    content: "成功调用该方法后，SDK 会触发 onAudioRouteChanged 回调报告当前音频路由。"
  }, {
    heading: "enabled",
    content: "是否启用扬声器："
  }, {
    heading: "enabled",
    content: "true：启用设备状态监测，音频路由为扬声器。"
  }, {
    heading: "enabled",
    content: "false：关闭设备状态监测，音频路由为听筒。"
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
    heading: "setrouteincommunicationmode",
    content: "在通信音频模式下设置音频播放路由。"
  }, {
    heading: "setrouteincommunicationmode",
    content: "该方法用于将音频路由从蓝牙耳机切换为听筒、有线耳机或扬声器。"
  }, {
    heading: "setrouteincommunicationmode",
    content: "同时使用该方法和 setEnableSpeakerphone 方法可能会导致冲突。建议仅使用 setRouteInCommunicationMode 方法。"
  }, {
    heading: "调用时机-3",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "相关回调-1",
    content: "成功调用该方法后，SDK 会触发 onAudioRouteChanged 回调报告当前音频路由。"
  }, {
    heading: "route",
    content: "你希望使用的音频播放路由："
  }, {
    heading: "route",
    content: "-1：默认音频路由。"
  }, {
    heading: "route",
    content: "0：带麦克风的耳机。"
  }, {
    heading: "route",
    content: "1：听筒。"
  }, {
    heading: "route",
    content: "2：不带麦克风的耳机。"
  }, {
    heading: "route",
    content: "3：设备内置扬声器。"
  }, {
    heading: "route",
    content: "4：（尚不支持）外部扬声器。"
  }, {
    heading: "route",
    content: "5：蓝牙耳机。"
  }, {
    heading: "route",
    content: "6：USB 设备。"
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
    heading: "onaudioroutechanged",
    content: "本地音频路由发生变化时的回调。"
  }, {
    heading: "触发时机",
    content: "该回调在本地音频路由发生变化时被触发。"
  }, {
    heading: "routing",
    content: "当前的音频路由。"
  }, {
    heading: "routing",
    content: "AUDIO\\_ROUTE\\_DEFAULT （-1）：默认音频路由。"
  }, {
    heading: "routing",
    content: "AUDIO\\_ROUTE\\_HEADSET （0）：音频路由为带麦克风的耳机。"
  }, {
    heading: "routing",
    content: "AUDIO\\_ROUTE\\_EARPIECE （1）：音频路由为听筒。"
  }, {
    heading: "routing",
    content: "AUDIO\\_ROUTE\\_HEADSETNOMIC （2）：音频路由为不带麦克风的耳机。"
  }, {
    heading: "routing",
    content: "AUDIO\\_ROUTE\\_SPEAKERPHONE （3）：音频路由为设备自带扬声器。"
  }, {
    heading: "routing",
    content: "AUDIO\\_ROUTE\\_LOUDSPEAKER （4）：音频路由为外接扬声器（预留）。"
  }, {
    heading: "routing",
    content: "AUDIO\\_ROUTE\\_BLUETOOTH\\_DEVICE\\_HFP （5）：音频路由为使用 HFP 协议的蓝牙设备。"
  }, {
    heading: "routing",
    content: "AUDIO\\_ROUTE\\_BLUETOOTH\\_DEVICE\\_A2DP （10）：音频路由为使用 A2DP 协议的蓝牙设备。"
  }, {
    heading: "所属接口类-4",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "isspeakerphoneenabled",
    content: "isSpeakerphoneEnabled"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "setdefaultaudioroutetospeakerphone",
    content: "setDefaultAudioRoutetoSpeakerphone"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "defaulttospeaker",
    content: "`defaultToSpeaker`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "setenablespeakerphone",
    content: "setEnableSpeakerphone"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "setrouteincommunicationmode",
    content: "setRouteInCommunicationMode"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "route",
    content: "`route`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "onaudioroutechanged",
    content: "onAudioRouteChanged"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "routing",
    content: "`routing`"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#isspeakerphoneenabled",
  title: _jsx(_Fragment, {
    children: "isSpeakerphoneEnabled"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#setdefaultaudioroutetospeakerphone",
  title: _jsx(_Fragment, {
    children: "setDefaultAudioRoutetoSpeakerphone"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#defaulttospeaker",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "defaultToSpeaker"
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
  url: "#setenablespeakerphone",
  title: _jsx(_Fragment, {
    children: "setEnableSpeakerphone"
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
  url: "#相关回调",
  title: _jsx(_Fragment, {
    children: "相关回调"
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
  url: "#setrouteincommunicationmode",
  title: _jsx(_Fragment, {
    children: "setRouteInCommunicationMode"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
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
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#route",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "route"
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
  url: "#onaudioroutechanged",
  title: _jsx(_Fragment, {
    children: "onAudioRouteChanged"
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
  url: "#routing",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "routing"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-4",
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
      id: "toc_audio_route"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_isspeakerphoneenabled"
    }), `
`, _jsx(_components.h2, {
      id: "isspeakerphoneenabled",
      children: "isSpeakerphoneEnabled"
    }), `
`, _jsx(_components.p, {
      children: "检查是否启用扬声器播放音频。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_isspeakerphoneenabled__prototype"
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
              children: " isSpeakerphoneEnabled"
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
      id: "api_irtcengine_isspeakerphoneenabled__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_isspeakerphoneenabled__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_isspeakerphoneenabled__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：扬声器已启用，音频将从扬声器播放。"
      }), `
`, _jsx(_components.li, {
        children: "false：扬声器未启用，音频将从其他设备播放，例如耳机或听筒。"
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
      id: "api_irtcengine_setdefaultaudioroutetospeakerphone"
    }), `
`, _jsx(_components.h2, {
      id: "setdefaultaudioroutetospeakerphone",
      children: "setDefaultAudioRoutetoSpeakerphone"
    }), `
`, _jsx(_components.p, {
      children: "设置默认音频播放路由。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdefaultaudioroutetospeakerphone__prototype"
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
              children: " setDefaultAudioRoutetoSpeakerphone"
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
              children: " defaultToSpeaker);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdefaultaudioroutetospeakerphone__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "大多数手机有两个音频路由：顶部的听筒和底部的扬声器。你可以通过调用该方法设置默认音频路由，在未连接外部音频设备时决定音频是通过听筒还是扬声器播放。 在不同场景下，系统的默认音频路由如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "语音通话：听筒。"
      }), `
`, _jsx(_components.li, {
        children: "音频直播：扬声器。"
      }), `
`, _jsx(_components.li, {
        children: "视频通话：扬声器。"
      }), `
`, _jsx(_components.li, {
        children: "视频直播：扬声器。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "调用该方法设置默认音频路由后，系统的实际音频路由会根据外部音频设备（如有线耳机或蓝牙耳机）的连接情况自动切换。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdefaultaudioroutetospeakerphone__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在加入频道前调用该方法。如果需要在加入频道后更改音频路由，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setenablespeakerphone",
        children: "setEnableSpeakerphone"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdefaultaudioroutetospeakerphone__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "defaulttospeaker",
      children: _jsx(_components.code, {
        children: "defaultToSpeaker"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否将扬声器设置为默认音频路由："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：将扬声器设置为默认音频路由。"
      }), `
`, _jsx(_components.li, {
        children: "false：将听筒设置为默认音频路由。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdefaultaudioroutetospeakerphone__return_values"
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
      id: "api_irtcengine_setenablespeakerphone"
    }), `
`, _jsx(_components.h2, {
      id: "setenablespeakerphone",
      children: "setEnableSpeakerphone"
    }), `
`, _jsx(_components.p, {
      children: "设置是否将音频路由切换到扬声器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setenablespeakerphone__prototype"
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
              children: " setEnableSpeakerphone"
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
      id: "api_irtcengine_setenablespeakerphone__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法仅设置当前频道中的音频路由，不影响默认音频路由。如果用户离开当前频道并加入另一个频道，将使用默认音频路由。 如果用户使用了蓝牙或有线耳机等外部音频播放设备，该方法不生效，SDK 会通过外部设备播放音频。当用户连接多个外部设备时，SDK 会通过最后连接的设备播放音频。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setenablespeakerphone__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsxs(_components.p, {
      children: ["如果 SDK 的默认音频路由或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setdefaultaudioroutetospeakerphone",
        children: "setDefaultAudioRoutetoSpeakerphone"
      }), " 的设置无法满足你的需求，可以调用该方法切换当前音频路由。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setenablespeakerphone__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setenablespeakerphone__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#callback_irtcengineeventhandler_onaudioroutingchanged",
        children: "onAudioRouteChanged"
      }), " 回调报告当前音频路由。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setenablespeakerphone__parameters"
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
      children: "是否启用扬声器："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用设备状态监测，音频路由为扬声器。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭设备状态监测，音频路由为听筒。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setenablespeakerphone__return_values"
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
      id: "api_irtcengine_setrouteincommunicationmode"
    }), `
`, _jsx(_components.h2, {
      id: "setrouteincommunicationmode",
      children: "setRouteInCommunicationMode"
    }), `
`, _jsx(_components.p, {
      children: "在通信音频模式下设置音频播放路由。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrouteincommunicationmode__prototype"
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
              children: " setRouteInCommunicationMode"
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
              children: " route);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrouteincommunicationmode__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于将音频路由从蓝牙耳机切换为听筒、有线耳机或扬声器。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["同时使用该方法和 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setenablespeakerphone",
            children: "setEnableSpeakerphone"
          }), " 方法可能会导致冲突。建议仅使用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#api_irtcengine_setrouteincommunicationmode",
            children: "setRouteInCommunicationMode"
          }), " 方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrouteincommunicationmode__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrouteincommunicationmode__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/audio-route#callback_irtcengineeventhandler_onaudioroutingchanged",
        children: "onAudioRouteChanged"
      }), " 回调报告当前音频路由。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrouteincommunicationmode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "route",
      children: _jsx(_components.code, {
        children: "route"
      })
    }), `
`, _jsx(_components.p, {
      children: "你希望使用的音频播放路由："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1：默认音频路由。"
      }), `
`, _jsx(_components.li, {
        children: "0：带麦克风的耳机。"
      }), `
`, _jsx(_components.li, {
        children: "1：听筒。"
      }), `
`, _jsx(_components.li, {
        children: "2：不带麦克风的耳机。"
      }), `
`, _jsx(_components.li, {
        children: "3：设备内置扬声器。"
      }), `
`, _jsx(_components.li, {
        children: "4：（尚不支持）外部扬声器。"
      }), `
`, _jsx(_components.li, {
        children: "5：蓝牙耳机。"
      }), `
`, _jsx(_components.li, {
        children: "6：USB 设备。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setrouteincommunicationmode__return_values"
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
      id: "callback_irtcengineeventhandler_onaudioroutingchanged"
    }), `
`, _jsx(_components.h2, {
      id: "onaudioroutechanged",
      children: "onAudioRouteChanged"
    }), `
`, _jsx(_components.p, {
      children: "本地音频路由发生变化时的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioroutingchanged__prototype"
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
              children: " onAudioRouteChanged"
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
              children: " routing) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioroutingchanged__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioroutingchanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地音频路由发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioroutingchanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "routing",
      children: _jsx(_components.code, {
        children: "routing"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前的音频路由。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIO_ROUTE_DEFAULT （-1）：默认音频路由。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ROUTE_HEADSET （0）：音频路由为带麦克风的耳机。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ROUTE_EARPIECE （1）：音频路由为听筒。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ROUTE_HEADSETNOMIC （2）：音频路由为不带麦克风的耳机。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ROUTE_SPEAKERPHONE （3）：音频路由为设备自带扬声器。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ROUTE_LOUDSPEAKER （4）：音频路由为外接扬声器（预留）。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ROUTE_BLUETOOTH_DEVICE_HFP （5）：音频路由为使用 HFP 协议的蓝牙设备。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIO_ROUTE_BLUETOOTH_DEVICE_A2DP （10）：音频路由为使用 A2DP 协议的蓝牙设备。"
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
