import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "发布和订阅",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_publishnsubscribe" />

<a id="api_irtcengine_enabledualstreammode" />

## enableDualStreamMode \\[1/2] [#enabledualstreammode-12]

在发送端启用或禁用双流模式。

<a id="api_irtcengine_enabledualstreammode__prototype" />

\`\`\`java
public abstract int enableDualStreamMode(boolean enabled)
\`\`\`

<a id="api_irtcengine_enabledualstreammode__detailed_desc" />

#### \`废弃\` [#废弃]

自 v4.2.0 版本废弃，请改用 \`setDualStreamMode\`。

启用双流模式后，你可以调用 \`setRemoteVideoStreamType\` 方法，在订阅端选择接收视频大流或视频小流。 双流由以下两种视频流组成：

* 视频大流：高码率、高分辨率。
* 视频小流：低码率、低分辨率。

注：

* 该方法适用于发送端的所有类型视频流，包括但不限于摄像头采集的视频流、屏幕共享流和自定义采集的视频流。
* 如果你需要在多频道场景中启用双流模式，可以调用 enableDualStreamModeEx 方法。
* 你可以在加入频道前或加入频道后调用该方法。

<a id="api_irtcengine_enabledualstreammode__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否启用双流模式：

* true：启用双流模式。
* false：（默认）禁用双流模式。

<a id="api_irtcengine_enabledualstreammode__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enabledualstreammode3" />

## enableDualStreamMode \\[2/2] [#enabledualstreammode-22]

设置发送端的双流模式和视频小流。

<a id="api_irtcengine_enabledualstreammode3__prototype" />

\`\`\`java
public abstract int enableDualStreamMode(boolean enabled, SimulcastStreamConfig streamConfig)
\`\`\`

<a id="api_irtcengine_enabledualstreammode3__detailed_desc" />

#### \`废弃\` [#废弃-1]

自 v4.2.0 版本废弃，请改用 \`setDualStreamMode\`。

你可以调用此方法在发送端启用或关闭双流模式。双流由一路视频大流和一路视频小流组成：

* 视频大流：高码率、高分辨率。
* 视频小流：低码率、低分辨率。

启用双流模式后，你可以调用 \`setRemoteVideoStreamType\` 方法，在接收端选择接收视频大流或视频小流。

注：

* 该方法适用于发送端的所有类型视频流，包括但不限于摄像头采集的视频流、屏幕共享流和自定义采集的视频流。
* 如果你需要在多频道场景中启用双流模式，可以调用 enableDualStreamModeEx 方法。
* 你可以在加入频道前或加入频道后调用此方法。

<a id="api_irtcengine_enabledualstreammode3__parameters" />

### 参数 [#参数-1]

#### \`enabled\` [#enabled-1]

是否启用双流模式：

* true：启用双流模式。
* false：（默认）关闭双流模式。

#### \`streamConfig\` [#streamconfig]

视频小流的配置，详见 [SimulcastStreamConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-simulcaststreamconfig)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当 \`mode\` 设置为 \`DISABLE_SIMULCAST_STREAM\` 时，设置 \`streamConfig\` 不生效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_enabledualstreammode3__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_enabledualstreammodeex" />

## enableDualStreamModeEx [#enabledualstreammodeex]

在发送端启用或关闭双流模式。

<a id="api_irtcengineex_enabledualstreammodeex__prototype" />

\`\`\`java
public abstract int enableDualStreamModeEx(boolean enabled, SimulcastStreamConfig streamConfig, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_enabledualstreammodeex__detailed_desc" />

#### \`废弃\` [#废弃-2]

自 v4.2.0 版本废弃。请使用 [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex) 代替。

你可以调用此方法在发送端启用或关闭双流模式。双流由一对视频大流和视频小流组成：

* 视频大流：高码率，高分辨率。
* 视频小流：低码率，低分辨率。

启用双流模式后，你可以调用 \`setRemoteVideoStreamType\` 方法，在订阅端选择接收视频大流或视频小流。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法适用于发送端的所有类型视频流，包括但不限于摄像头采集的视频流、屏幕共享流和自定义采集的视频流。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_enabledualstreammodeex__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_enabledualstreammodeex__parameters" />

### 参数 [#参数-2]

#### \`enabled\` [#enabled-2]

是否启用双流模式：

* true：启用双流模式。
* false：（默认）关闭双流模式。

#### \`streamConfig\` [#streamconfig-1]

视频小流的配置，详见 [SimulcastStreamConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-simulcaststreamconfig)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当 \`mode\` 设置为 \`DISABLE_SIMULCAST_STREAM\` 时，设置 \`streamConfig\` 不生效。
  </CalloutDescription>
</CalloutContainer>

#### \`connection\` [#connection]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_enabledualstreammodeex__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_muteallremoteaudiostreams" />

## muteAllRemoteAudioStreams [#muteallremoteaudiostreams]

停止或恢复订阅所有远端用户的音频流。

<a id="api_irtcengine_muteallremoteaudiostreams__prototype" />

\`\`\`java
public abstract int muteAllRemoteAudioStreams(boolean muted);
\`\`\`

<a id="api_irtcengine_muteallremoteaudiostreams__detailed_desc" />

请在加入频道后调用该方法。本地用户将停止或恢复订阅所有远端用户的音频流，包括之后加入频道的用户。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你调用该方法后又调用了 [enableAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio) 或 [disableAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_disableaudio)，以最后一次调用为准。默认情况下，加入频道时 SDK 会自动订阅所有远端用户的音频流。你可以在调用 \`joinChannel\` 加入频道时将 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions) 中的 \`autoSubscribeAudio\` 设置为 false，以取消加入频道时对所有用户音频流的订阅。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_muteallremoteaudiostreams__timing" />

### 调用时机 [#调用时机]

请在加入频道后调用该方法。

<a id="api_irtcengine_muteallremoteaudiostreams__parameters" />

### 参数 [#参数-3]

#### \`muted\` [#muted]

是否停止订阅所有远端用户的音频流：

* true：停止订阅所有远端用户的音频流。
* false：（默认）订阅所有远端用户的音频流。

<a id="api_irtcengine_muteallremoteaudiostreams__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_muteallremoteaudiostreamsex" />

## muteAllRemoteAudioStreamsEx [#muteallremoteaudiostreamsex]

停止或恢复订阅所有远端用户的音频流。

<a id="api_irtcengineex_muteallremoteaudiostreamsex__prototype" />

\`\`\`java
public abstract int muteAllRemoteAudioStreamsEx(boolean muted, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_muteallremoteaudiostreamsex__detailed_desc" />

<a id="api_irtcengineex_muteallremoteaudiostreamsex__scenario" />

### 适用场景 [#适用场景-1]

该方法适用于多频道场景。

<a id="api_irtcengineex_muteallremoteaudiostreamsex__timing" />

### 调用时机 [#调用时机-1]

* 请在加入频道后调用该方法。
* 如果你希望在加入频道前不订阅远端用户的音频流，可以在调用 joinChannel 时将 ChannelMediaOptions 中的 autoSubscribeAudio 设置为 false。

<a id="api_irtcengineex_muteallremoteaudiostreamsex__parameters" />

### 参数 [#参数-4]

#### \`muted\` [#muted-1]

是否停止订阅所有远端用户的音频流：

* true：停止订阅所有远端用户的音频流。
* false：（默认）订阅所有远端用户的音频流。

#### \`connection\` [#connection-1]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_muteallremoteaudiostreamsex__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_muteallremotevideostreams" />

## muteAllRemoteVideoStreams [#muteallremotevideostreams]

停止或恢复订阅所有远端用户的视频流。

<a id="api_irtcengine_muteallremotevideostreams__prototype" />

\`\`\`java
public abstract int muteAllRemoteVideoStreams(boolean muted);
\`\`\`

<a id="api_irtcengine_muteallremotevideostreams__detailed_desc" />

请在加入频道后调用该方法。调用该方法后，本地用户将停止或恢复订阅所有远端用户的视频流，包括之后加入频道的用户。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你调用该方法后又调用了 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 或 [disableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo)，以最后一次调用为准。默认情况下，加入频道时 SDK 会自动订阅所有远端用户的视频流。你可以在调用 \`joinChannel\` 加入频道时将 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions) 中的 \`autoSubscribeVideo\` 设置为 false，以取消加入频道时对所有用户的视频流订阅。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_muteallremotevideostreams__timing" />

### 调用时机 [#调用时机-2]

请在加入频道后调用该方法。

<a id="api_irtcengine_muteallremotevideostreams__parameters" />

### 参数 [#参数-5]

#### \`muted\` [#muted-2]

是否停止订阅所有远端用户的视频流。

注：

* true：停止订阅所有远端用户的视频流。
* false：（默认）订阅所有远端用户的视频流。

<a id="api_irtcengine_muteallremotevideostreams__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_muteallremotevideostreamsex" />

## muteAllRemoteVideoStreamsEx [#muteallremotevideostreamsex]

停止或恢复订阅所有远端用户的视频流。

<a id="api_irtcengineex_muteallremotevideostreamsex__prototype" />

\`\`\`java
public abstract int muteAllRemoteVideoStreamsEx(boolean muted, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_muteallremotevideostreamsex__detailed_desc" />

调用该方法后，你将停止或恢复订阅所有远端用户的视频流，包括之后加入频道的用户。

<a id="api_irtcengineex_muteallremotevideostreamsex__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多频道场景。

<a id="api_irtcengineex_muteallremotevideostreamsex__parameters" />

### 参数 [#参数-6]

#### \`muted\` [#muted-3]

是否停止订阅所有远端用户的视频流：

* true：停止订阅所有远端用户的视频流。
* false：默认订阅所有远端用户的视频流。

#### \`connection\` [#connection-2]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_muteallremotevideostreamsex__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_mutelocalaudiostream" />

## muteLocalAudioStream [#mutelocalaudiostream]

停止或恢复发布本地采集音频流。

<a id="api_irtcengine_mutelocalaudiostream__prototype" />

\`\`\`java
public abstract int muteLocalAudioStream(boolean muted);
\`\`\`

<a id="api_irtcengine_mutelocalaudiostream__detailed_desc" />

调用该方法停止发布本地音频流时，音频采集设备仍会正常工作，不受影响。

<a id="api_irtcengine_mutelocalaudiostream__timing" />

### 调用时机 [#调用时机-3]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_mutelocalaudiostream__related" />

### 相关回调 [#相关回调]

调用该方法成功后，本地会触发回调 [onAudioPublishStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiopublishstatechanged)；远端会触发回调 [onUserMuteAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio) 和 [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged)。

<a id="api_irtcengine_mutelocalaudiostream__parameters" />

### 参数 [#参数-7]

#### \`muted\` [#muted-4]

是否停止发布本地音频流：

* true：停止发布本地音频流。
* false：（默认）恢复发布本地音频流。

<a id="api_irtcengine_mutelocalaudiostream__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_mutelocalaudiostreamex" />

## muteLocalAudioStreamEx [#mutelocalaudiostreamex]

停止或恢复发布本地音频流。

<a id="api_irtcengineex_mutelocalaudiostreamex__prototype" />

\`\`\`java
public abstract int muteLocalAudioStreamEx(boolean muted, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_mutelocalaudiostreamex__detailed_desc" />

成功调用该方法后，远端客户端会收到 [onUserMuteAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio) 和 [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged) 回调。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法不会影响任何正在进行的音频录制，因为它不会禁用音频采集设备。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_mutelocalaudiostreamex__scenario" />

### 适用场景 [#适用场景-3]

该方法适用于多频道场景。

<a id="api_irtcengineex_mutelocalaudiostreamex__parameters" />

### 参数 [#参数-8]

#### \`muted\` [#muted-5]

是否停止发布本地音频流：

* true：停止发布本地音频流。
* false：（默认）恢复发布本地音频流。

#### \`connection\` [#connection-3]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_mutelocalaudiostreamex__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_mutelocalvideostream" />

## muteLocalVideoStream [#mutelocalvideostream]

停止或恢复发布本地视频流。

<a id="api_irtcengine_mutelocalvideostream__prototype" />

\`\`\`java
public abstract int muteLocalVideoStream(boolean muted);
\`\`\`

<a id="api_irtcengine_mutelocalvideostream__detailed_desc" />

该方法用于控制是否发布本地采集的视频流。调用该方法停止发布本地视频流时，视频采集设备仍会继续工作，不受影响。相比通过将 [enableLocalVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo) 设为 false 来关闭本地视频采集从而取消发布视频流，该方法响应更快。

<a id="api_irtcengine_mutelocalvideostream__timing" />

### 调用时机 [#调用时机-4]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_mutelocalvideostream__related" />

### 相关回调 [#相关回调-1]

调用该方法成功后，本地会触发回调 [onVideoPublishStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideopublishstatechanged)；远端会触发回调 [onUserMuteVideo](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onusermutevideo) 和 [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged)。

<a id="api_irtcengine_mutelocalvideostream__parameters" />

### 参数 [#参数-9]

#### \`muted\` [#muted-6]

是否停止发布本地视频流。

* true：停止发布本地视频流。
* false：（默认）发布本地视频流。

<a id="api_irtcengine_mutelocalvideostream__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_mutelocalvideostreamex" />

## muteLocalVideoStreamEx [#mutelocalvideostreamex]

停止或恢复发布本地视频流。

<a id="api_irtcengineex_mutelocalvideostreamex__prototype" />

\`\`\`java
public abstract int muteLocalVideoStreamEx(boolean muted, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_mutelocalvideostreamex__detailed_desc" />

成功调用该方法后，远端客户端会触发 [onUserMuteVideo](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onusermutevideo) 回调。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法不会影响正在进行的视频录制，因为它不会关闭摄像头。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_mutelocalvideostreamex__scenario" />

### 适用场景 [#适用场景-4]

该方法适用于多频道场景。

<a id="api_irtcengineex_mutelocalvideostreamex__parameters" />

### 参数 [#参数-10]

#### \`muted\` [#muted-7]

是否停止发布本地视频流。

* true：停止发布本地视频流。
* false：（默认）发布本地视频流。

#### \`connection\` [#connection-4]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_mutelocalvideostreamex__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-10]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_muteremoteaudiostream" />

## muteRemoteAudioStream [#muteremoteaudiostream]

停止或恢复订阅指定远端用户的音频流。

<a id="api_irtcengine_muteremoteaudiostream__prototype" />

\`\`\`java
public abstract int muteRemoteAudioStream(int uid, boolean muted);
\`\`\`

<a id="api_irtcengine_muteremoteaudiostream__detailed_desc" />

<a id="api_irtcengine_muteremoteaudiostream__timing" />

### 调用时机 [#调用时机-5]

在加入频道后调用该方法。

<a id="api_irtcengine_muteremoteaudiostream__related" />

### 相关回调 [#相关回调-2]

调用该方法成功后，SDK 会触发 [onAudioSubscribeStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiosubscribestatechanged) 回调。

<a id="api_irtcengine_muteremoteaudiostream__parameters" />

### 参数 [#参数-11]

#### \`uid\` [#uid]

指定远端用户的用户 ID。

#### \`muted\` [#muted-8]

是否订阅指定远端用户的音频流：

* true：停止订阅该用户的音频流。
* false：订阅该用户的音频流。

<a id="api_irtcengine_muteremoteaudiostream__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-11]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_muteremoteaudiostreamex" />

## muteRemoteAudioStreamEx [#muteremoteaudiostreamex]

停止或恢复接收指定用户的音频流。

<a id="api_irtcengineex_muteremoteaudiostreamex__prototype" />

\`\`\`java
public abstract int muteRemoteAudioStreamEx(int uid, boolean muted, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_muteremoteaudiostreamex__detailed_desc" />

你可以在加入频道前或加入频道后调用该方法。如果用户离开频道，方法的设置将失效。

<a id="api_irtcengineex_muteremoteaudiostreamex__scenario" />

### 适用场景 [#适用场景-5]

该方法适用于多频道场景。

<a id="api_irtcengineex_muteremoteaudiostreamex__parameters" />

### 参数 [#参数-12]

#### \`uid\` [#uid-1]

指定用户的 ID。

#### \`muted\` [#muted-9]

是否停止接收指定用户的音频流：

* true：停止接收指定用户的音频流。
* false：（默认）恢复接收指定用户的音频流。

#### \`connection\` [#connection-5]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_muteremoteaudiostreamex__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-12]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_muteremotevideostream" />

## muteRemoteVideoStream [#muteremotevideostream]

停止或恢复订阅指定远端用户的视频流。

<a id="api_irtcengine_muteremotevideostream__prototype" />

\`\`\`java
public abstract int muteRemoteVideoStream(int uid, boolean muted);
\`\`\`

<a id="api_irtcengine_muteremotevideostream__detailed_desc" />

<a id="api_irtcengine_muteremotevideostream__timing" />

### 调用时机 [#调用时机-6]

请在加入频道后调用该方法。

<a id="api_irtcengine_muteremotevideostream__related" />

### 相关回调 [#相关回调-3]

调用该方法成功后，SDK 会触发 [onVideoSubscribeStateChanged](/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onvideosubscribestatechanged) 回调。

<a id="api_irtcengine_muteremotevideostream__parameters" />

### 参数 [#参数-13]

#### \`uid\` [#uid-2]

指定远端用户的用户 ID。

#### \`muted\` [#muted-10]

是否订阅指定远端用户的视频流：

* true：停止订阅该用户的视频流。
* false：订阅该用户的视频流（默认）。

<a id="api_irtcengine_muteremotevideostream__return_values" />

### 返回值 [#返回值-13]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-13]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_muteremotevideostreamex" />

## muteRemoteVideoStreamEx [#muteremotevideostreamex]

停止或恢复接收指定用户的视频流。

<a id="api_irtcengineex_muteremotevideostreamex__prototype" />

\`\`\`java
public abstract int muteRemoteVideoStreamEx(int uid, boolean muted, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_muteremotevideostreamex__detailed_desc" />

你可以在加入频道前或加入频道后调用该方法。如果该用户离开频道，设置将失效。

<a id="api_irtcengineex_muteremotevideostreamex__scenario" />

### 适用场景 [#适用场景-6]

该方法适用于多频道场景。

<a id="api_irtcengineex_muteremotevideostreamex__parameters" />

### 参数 [#参数-14]

#### \`uid\` [#uid-3]

远端用户 ID。

#### \`muted\` [#muted-11]

是否停止接收指定用户的视频流：

* true：停止接收指定用户的视频流。
* false：（默认）恢复接收指定用户的视频流。

#### \`connection\` [#connection-6]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_muteremotevideostreamex__return_values" />

### 返回值 [#返回值-14]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-14]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setdualstreammode" />

## setDualStreamMode \\[1/2] [#setdualstreammode-12]

设置发送端的视频流模式，用于控制是否发送视频小流。

<a id="api_irtcengine_setdualstreammode__prototype" />

\`\`\`java
public abstract int setDualStreamMode(Constants.SimulcastStreamMode mode);
\`\`\`

<a id="api_irtcengine_setdualstreammode__detailed_desc" />

你可以调用该方法设置发送端的视频流模式。 SDK 默认在发送端启用视频小流自适应模式（\`AUTO_SIMULCAST_STREAM\` ），即发送端不会主动发送视频小流。角色为主播的接收端可以通过调用 \`setRemoteVideoStreamType\` 发起视频小流请求，发送端在收到请求后会自动开始发送视频小流。

* 如果你希望修改此行为，可以调用该方法并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流）或 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流）。
* 如果你希望恢复默认行为，可以再次调用该方法并将 mode 设置为 AUTO\\_SIMULCAST\\_STREAM。

注： 该方法与 \`enableDualStreamMode\` 的区别如下：

* 当调用该方法并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamMode(false)。
* 当调用该方法并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamMode(true)。
* 两个方法都可以在加入频道前或后调用。如果两个方法都被调用，则以后调用的方法设置优先生效。

<a id="api_irtcengine_setdualstreammode__parameters" />

### 参数 [#参数-15]

#### \`mode\` [#mode]

发送视频流的模式。详见 [SimulcastStreamMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-simulcaststreammode)。

<a id="api_irtcengine_setdualstreammode__return_values" />

### 返回值 [#返回值-15]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-15]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setdualstreammode2" />

## setDualStreamMode \\[2/2] [#setdualstreammode-22]

设置发送端的不同质量层级的视频流模式配置。

<a id="api_irtcengine_setdualstreammode2__prototype" />

\`\`\`java
public abstract int setDualStreamMode(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig);
\`\`\`

<a id="api_irtcengine_setdualstreammode2__detailed_desc" />

SDK 默认在发送端开启视频小流自适应模式（\`AUTO_SIMULCAST_STREAM\` ），即发送端不会主动发送视频小流。角色为主播的接收端可以通过调用 \`setRemoteVideoStreamType\` 发起视频小流请求，发送端在收到请求后会自动开始发送视频小流。

* 如果你希望修改该行为，可以调用该方法，并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流）或 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流）。
* 如果你希望恢复默认行为，可以再次调用该方法，并将 mode 设置为 AUTO\\_SIMULCAST\\_STREAM。

注： 该方法与 \`enableDualStreamMode\` 的区别如下：

* 当调用该方法并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamMode 并将 enabled 设置为 false。
* 当调用该方法并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamMode 并将 enabled 设置为 true。
* 两个方法都可以在加入频道前或后调用。如果两个方法都被调用，则以后调用的方法设置优先生效。

<a id="api_irtcengine_setdualstreammode2__parameters" />

### 参数 [#参数-16]

#### \`mode\` [#mode-1]

发送视频流的模式，详见 [SimulcastStreamMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-simulcaststreammode)。

#### \`streamConfig\` [#streamconfig-2]

视频小流的配置，详见 [SimulcastStreamConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-simulcaststreamconfig)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当 \`mode\` 设置为 \`DISABLE_SIMULCAST_STREAM\` 时，设置该参数无效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setdualstreammode2__return_values" />

### 返回值 [#返回值-16]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-16]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setdualstreammodeex" />

## setDualStreamModeEx [#setdualstreammodeex]

设置发送端的视频流模式，用于控制是否发送视频小流。

<a id="api_irtcengineex_setdualstreammodeex__prototype" />

\`\`\`java
public abstract int setDualStreamModeEx(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setdualstreammodeex__detailed_desc" />

SDK 默认在发送端开启视频小流自适应模式（\`AUTO_SIMULCAST_STREAM\` ）。角色为主播的接收端可以通过调用 \`setRemoteVideoStreamTypeEx\` 发起视频小流请求，发送端在收到请求后会自动开始发送视频小流。

* 如果你希望修改此行为，可以调用该方法并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流）或 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流）。
* 如果你希望恢复默认行为，可以再次调用该方法并将 mode 设置为 AUTO\\_SIMULCAST\\_STREAM。

注： 该方法与 [enableDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_enabledualstreammodeex) 的区别如下：

* 将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamModeEx(false)。
* 将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamModeEx(true)。
* 两个方法均可在加入频道前或后调用。如果两个方法都被调用，则以后调用的方法设置优先生效。

<a id="api_irtcengineex_setdualstreammodeex__scenario" />

### 适用场景 [#适用场景-7]

该方法适用于多频道场景。

<a id="api_irtcengineex_setdualstreammodeex__parameters" />

### 参数 [#参数-17]

#### \`mode\` [#mode-2]

视频流发送模式。详见 [SimulcastStreamMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-simulcaststreammode)。

#### \`streamConfig\` [#streamconfig-3]

视频小流的配置。详见 [SimulcastStreamConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-simulcaststreamconfig)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当 \`mode\` 设置为 \`DISABLE_SIMULCAST_STREAM\` 时，该参数不生效。
  </CalloutDescription>
</CalloutContainer>

#### \`connection\` [#connection-7]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setdualstreammodeex__return_values" />

### 返回值 [#返回值-17]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-17]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setremotedefaultvideostreamtype" />

## setRemoteDefaultVideoStreamType \\[1/2] [#setremotedefaultvideostreamtype-12]

设置默认订阅的视频流类型。

<a id="api_irtcengine_setremotedefaultvideostreamtype__prototype" />

\`\`\`java
public abstract int setRemoteDefaultVideoStreamType(Constants.VideoStreamType streamType);
\`\`\`

<a id="api_irtcengine_setremotedefaultvideostreamtype__detailed_desc" />

根据发送端的默认行为以及调用 \`setDualStreamMode\` 时的具体设置，接收端调用该方法的场景如下：

* SDK 默认在发送端开启视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为订阅视频小流模式。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为订阅视频小流模式。

SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果同时调用该方法和 \`setRemoteVideoStreamType\`，则以 \`setRemoteVideoStreamType\` 的设置为准。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setremotedefaultvideostreamtype__timing" />

### 调用时机 [#调用时机-7]

请在加入频道前调用该方法。SDK 不支持在加入频道后更改默认订阅的视频流类型。

<a id="api_irtcengine_setremotedefaultvideostreamtype__parameters" />

### 参数 [#参数-18]

#### \`streamType\` [#streamtype]

视频流类型。详见 [VideoStreamType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videostreamtype)。

<a id="api_irtcengine_setremotedefaultvideostreamtype__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-18]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setremotedefaultvideostreamtype2" />

## setRemoteDefaultVideoStreamType \\[2/2] [#setremotedefaultvideostreamtype-22]

设置默认订阅的视频流类型。

<a id="api_irtcengine_setremotedefaultvideostreamtype2__prototype" />

\`\`\`java
public abstract int setRemoteDefaultVideoStreamType(int streamType)
\`\`\`

<a id="api_irtcengine_setremotedefaultvideostreamtype2__detailed_desc" />

#### \`废弃\` [#废弃-3]

该方法已废弃，请改用 [setRemoteDefaultVideoStreamType \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype)。

根据发送端的默认行为以及调用 \`setDualStreamMode\` 时的具体设置，接收端调用该方法的场景如下：

* SDK 默认在发送端启用视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为订阅视频小流模式。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为订阅视频小流模式。

SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果同时调用该方法和 \`setRemoteVideoStreamType\`，则以 \`setRemoteVideoStreamType\` 的设置为准。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setremotedefaultvideostreamtype2__timing" />

### 调用时机 [#调用时机-8]

请在加入频道前调用该方法。SDK 不支持在加入频道后更改默认订阅的视频流类型。

<a id="api_irtcengine_setremotedefaultvideostreamtype2__parameters" />

### 参数 [#参数-19]

#### \`streamType\` [#streamtype-1]

默认订阅的视频流类型：

* VIDEO\\_STREAM\\_HIGH （0）：视频大流，即高分辨率和高码率的视频流。
* VIDEO\\_STREAM\\_LOW （1）：视频小流，即低分辨率和低码率的视频流。

<a id="api_irtcengine_setremotedefaultvideostreamtype2__return_values" />

### 返回值 [#返回值-19]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-19]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setremotevideostreamtype" />

## setRemoteVideoStreamType \\[1/2] [#setremotevideostreamtype-12]

设置要订阅的视频流类型。

<a id="api_irtcengine_setremotevideostreamtype__prototype" />

\`\`\`java
public abstract int setRemoteVideoStreamType(int uid, Constants.VideoStreamType streamType);
\`\`\`

<a id="api_irtcengine_setremotevideostreamtype__detailed_desc" />

根据发送端的默认行为以及调用 \`setDualStreamMode\` 时的具体设置，接收端调用该方法的场景如下：

* SDK 默认在发送端开启视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为订阅视频小流模式。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为订阅视频小流模式。

SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。

注：

* 可以在加入频道前或加入频道后调用该方法。
* 如果同时调用该方法和 setRemoteDefaultVideoStreamType，则以该方法的设置为准。

<a id="api_irtcengine_setremotevideostreamtype__parameters" />

### 参数 [#参数-20]

#### \`uid\` [#uid-4]

远端用户 ID。

#### \`streamType\` [#streamtype-2]

视频流类型。详见 [VideoStreamType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videostreamtype)。

<a id="api_irtcengine_setremotevideostreamtype__return_values" />

### 返回值 [#返回值-20]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-20]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setremotevideostreamtype2" />

## setRemoteVideoStreamType \\[2/2] [#setremotevideostreamtype-22]

设置要订阅的视频流类型。

<a id="api_irtcengine_setremotevideostreamtype2__prototype" />

\`\`\`java
public abstract int setRemoteVideoStreamType(int uid, int streamType)
\`\`\`

<a id="api_irtcengine_setremotevideostreamtype2__detailed_desc" />

#### \`废弃\` [#废弃-4]

该方法已废弃，请改用 \`setRemoteVideoStreamType(int uid, Constants.VideoStreamType streamType)\`。

根据发送端的默认行为以及调用 \`setDualStreamMode\` 时的具体设置，接收端调用此方法的场景如下：

* SDK 默认在发送端启用视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用此方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用此方法切换为订阅视频小流模式。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用此方法无效。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用此方法切换为订阅视频小流模式。

SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流相同。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。

注：

* 可以在加入频道前或后调用此方法。
* 如果同时调用此方法和 setRemoteDefaultVideoStreamType，则以此方法的设置为准。

<a id="api_irtcengine_setremotevideostreamtype2__parameters" />

### 参数 [#参数-21]

#### \`uid\` [#uid-5]

远端用户 ID。

#### \`streamType\` [#streamtype-3]

视频流类型：

* 0：视频大流。
* 1：视频小流。

<a id="api_irtcengine_setremotevideostreamtype2__return_values" />

### 返回值 [#返回值-21]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-21]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setremotevideostreamtypeex" />

## setRemoteVideoStreamTypeEx \\[1/2] [#setremotevideostreamtypeex-12]

设置要订阅的视频流类型。

<a id="api_irtcengineex_setremotevideostreamtypeex__prototype" />

\`\`\`java
public abstract int setRemoteVideoStreamTypeEx(int uid, Constants.VideoStreamType streamType, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setremotevideostreamtypeex__detailed_desc" />

根据发送端的默认行为以及调用 [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex) 时的具体设置，接收端调用该方法的场景如下：

* SDK 默认在发送端开启视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。此时，仅角色为 Host 的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户均可调用该方法切换为视频小流订阅模式。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则 Host 和 Audience 角色的接收端均可调用该方法切换为视频小流订阅模式。

SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果发送端已调用 [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex) 并将 \`mode\` 设置为 \`DISABLE_SIMULCAST_STREAM\`，则调用该方法无效。你需要在发送端再次调用 [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex) 并调整设置。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_setremotevideostreamtypeex__scenario" />

### 适用场景 [#适用场景-8]

该方法适用于多频道场景。

<a id="api_irtcengineex_setremotevideostreamtypeex__parameters" />

### 参数 [#参数-22]

#### \`uid\` [#uid-6]

远端用户 ID。

#### \`streamType\` [#streamtype-4]

视频流类型，详见 [VideoStreamType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videostreamtype)。

#### \`connection\` [#connection-8]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setremotevideostreamtypeex__return_values" />

### 返回值 [#返回值-22]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-22]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengineex_setremotevideostreamtypeex2" />

## setRemoteVideoStreamTypeEx \\[2/2] [#setremotevideostreamtypeex-22]

设置要订阅的视频流类型。

<a id="api_irtcengineex_setremotevideostreamtypeex2__prototype" />

\`\`\`java
public abstract int setRemoteVideoStreamTypeEx(int uid, int streamType, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setremotevideostreamtypeex2__detailed_desc" />

#### \`废弃\` [#废弃-5]

该方法已废弃，请改用 [setRemoteVideoStreamTypeEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex)。

根据发送端的默认行为以及调用 [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex) 时的具体设置，接收端调用该方法的场景如下：

* SDK 默认在发送端启用视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为视频小流订阅模式。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。
* 如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为视频小流订阅模式。

SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果发送端已调用 [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex) 并将 \`mode\` 设置为 \`DISABLE_SIMULCAST_STREAM\` （从不发送视频小流），则调用该方法无效。你应在发送端重新调用 [setDualStreamModeEx](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex) 并调整设置。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_setremotevideostreamtypeex2__scenario" />

### 适用场景 [#适用场景-9]

该方法适用于多频道场景。

<a id="api_irtcengineex_setremotevideostreamtypeex2__parameters" />

### 参数 [#参数-23]

#### \`uid\` [#uid-7]

远端用户 ID。

#### \`streamType\` [#streamtype-5]

视频流类型：

* 0：视频大流。
* 1：视频小流。

#### \`connection\` [#connection-9]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setremotevideostreamtypeex2__return_values" />

### 返回值 [#返回值-23]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-23]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setremotevideosubscriptionoptions" />

## setRemoteVideoSubscriptionOptions [#setremotevideosubscriptionoptions]

设置订阅远端视频流的选项。

<a id="api_irtcengine_setremotevideosubscriptionoptions__prototype" />

\`\`\`java
public abstract int setRemoteVideoSubscriptionOptions(int uid, VideoSubscriptionOptions options);
\`\`\`

<a id="api_irtcengine_setremotevideosubscriptionoptions__detailed_desc" />

你可以调用该方法设置订阅远端用户发送的视频流的选项，适用于远端用户开启双流模式的场景。SDK 默认的远端视频流订阅行为取决于注册的视频观察器类型：

* 如果注册了 IVideoFrameObserver 观察器，默认订阅原始数据和编码数据；
* 如果注册了 IVideoEncodedFrameObserver 观察器，默认仅订阅编码数据；
* 如果同时注册了两种观察器，默认行为遵循最后注册的视频观察器。例如，如果最后注册的是 IVideoFrameObserver，则默认订阅原始数据和编码数据。

如果你希望修改默认行为，或为不同的用户 ID 设置不同的订阅选项，可以调用该方法进行设置。

<a id="api_irtcengine_setremotevideosubscriptionoptions__parameters" />

### 参数 [#参数-24]

#### \`uid\` [#uid-8]

远端用户的用户 ID。

#### \`options\` [#options]

视频订阅选项，详见 [VideoSubscriptionOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videosubscriptionoptions)。

<a id="api_irtcengine_setremotevideosubscriptionoptions__return_values" />

### 返回值 [#返回值-24]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-24]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setremotevideosubscriptionoptionsex" />

## setRemoteVideoSubscriptionOptionsEx [#setremotevideosubscriptionoptionsex]

设置订阅远端视频流的选项。

<a id="api_irtcengineex_setremotevideosubscriptionoptionsex__prototype" />

\`\`\`java
public abstract int setRemoteVideoSubscriptionOptionsEx(int uid, VideoSubscriptionOptions options, RtcConnection rtcConnection);
\`\`\`

<a id="api_irtcengineex_setremotevideosubscriptionoptionsex__detailed_desc" />

该方法适用于多频道场景。当远端用户开启双流模式时，你可以调用该方法设置订阅该远端用户发送的视频流的选项。

<a id="api_irtcengineex_setremotevideosubscriptionoptionsex__scenario" />

### 适用场景 [#适用场景-10]

该方法适用于多频道场景。

<a id="api_irtcengineex_setremotevideosubscriptionoptionsex__parameters" />

### 参数 [#参数-25]

#### \`uid\` [#uid-9]

远端用户 ID。

#### \`options\` [#options-1]

视频订阅选项，详见 [VideoSubscriptionOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videosubscriptionoptions)。

#### \`rtcConnection\` [#rtcconnection]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setremotevideosubscriptionoptionsex__return_values" />

### 返回值 [#返回值-25]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-25]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setsubscribeaudioallowlist" />

## setSubscribeAudioAllowlist [#setsubscribeaudioallowlist]

设置音频流订阅的白名单。

<a id="api_irtcengine_setsubscribeaudioallowlist__prototype" />

\`\`\`java
public abstract int setSubscribeAudioAllowlist(int[] uidList);
\`\`\`

<a id="api_irtcengine_setsubscribeaudioallowlist__detailed_desc" />

注：

* 你可以在加入频道前或加入频道后调用此方法。
* 白名单不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中 autoSubscribeAudio 设置的影响。
* 一旦设置了订阅白名单，即使你离开当前频道并重新加入频道，该设置仍然有效。
* 如果某个用户同时被添加到白名单和黑名单中，则仅黑名单生效。

<a id="api_irtcengine_setsubscribeaudioallowlist__parameters" />

### 参数 [#参数-26]

#### \`uidList\` [#uidlist]

你希望订阅的用户 ID 列表。调用该方法时，仅订阅该列表中用户的音频流。如果你希望将某个用户从白名单中移除，需要重新调用 [setSubscribeAudioAllowlist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioallowlist) 方法，并在新的列表中仅包含你希望订阅的用户 ID。

<a id="api_irtcengine_setsubscribeaudioallowlist__return_values" />

### 返回值 [#返回值-26]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-26]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setsubscribeaudioallowlistex" />

## setSubscribeAudioAllowlistEx [#setsubscribeaudioallowlistex]

设置音频流订阅的白名单。

<a id="api_irtcengineex_setsubscribeaudioallowlistex__prototype" />

\`\`\`java
public abstract int setSubscribeAudioAllowlistEx(int[] uidList, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setsubscribeaudioallowlistex__detailed_desc" />

注：

* 你可以在加入频道前或加入频道后调用此方法。
* 白名单不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中 autoSubscribeAudio 设置的影响。
* 一旦设置了订阅白名单，即使你离开当前频道并重新加入，该设置仍然有效。
* 如果某个用户同时被添加到白名单和黑名单中，则以黑名单为准。

<a id="api_irtcengineex_setsubscribeaudioallowlistex__scenario" />

### 适用场景 [#适用场景-11]

该方法适用于多频道场景。

<a id="api_irtcengineex_setsubscribeaudioallowlistex__parameters" />

### 参数 [#参数-27]

#### \`uidList\` [#uidlist-1]

你想要订阅的用户 ID 列表。如果你希望将某个用户从白名单中移除，需要调用 [setSubscribeAudioAllowlist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioallowlist) 方法更新用户 ID 列表；也就是说，你只需在新的用户 ID 列表中添加你希望订阅的用户的用户 ID。

#### \`connection\` [#connection-10]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setsubscribeaudioallowlistex__return_values" />

### 返回值 [#返回值-27]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-27]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setsubscribeaudioblocklist" />

## setSubscribeAudioBlocklist [#setsubscribeaudioblocklist]

设置音频流订阅的黑名单。

<a id="api_irtcengine_setsubscribeaudioblocklist__prototype" />

\`\`\`java
public abstract int setSubscribeAudioBlocklist(int[] uidList);
\`\`\`

<a id="api_irtcengine_setsubscribeaudioblocklist__detailed_desc" />

注：

* 你可以在加入频道前或加入频道后调用此方法。
* 黑名单不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中 autoSubscribeAudio 设置的影响。
* 一旦设置了订阅黑名单，即使你离开当前频道并重新加入频道，该设置仍然有效。
* 如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。

<a id="api_irtcengine_setsubscribeaudioblocklist__parameters" />

### 参数 [#参数-28]

#### \`uidList\` [#uidlist-2]

不希望订阅其音频流的用户 ID 列表。

* 如果你希望将某个用户从黑名单中移除，需要调用 setSubscribeAudioBlocklist 方法更新用户 ID 列表，即在新的列表中仅保留不希望订阅的用户 ID。

<a id="api_irtcengine_setsubscribeaudioblocklist__return_values" />

### 返回值 [#返回值-28]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-28]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setsubscribeaudioblocklistex" />

## setSubscribeAudioBlocklistEx [#setsubscribeaudioblocklistex]

设置音频流订阅的黑名单。

<a id="api_irtcengineex_setsubscribeaudioblocklistex__prototype" />

\`\`\`java
public abstract int setSubscribeAudioBlocklistEx(int[] uidList, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setsubscribeaudioblocklistex__detailed_desc" />

你可以调用该方法指定不希望订阅的用户的音频流。

注：

* 你可以在加入频道前或加入频道后调用此方法。
* 黑名单设置不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中的 autoSubscribeAudio 的影响。
* 一旦设置了订阅黑名单，即使离开当前频道并重新加入频道，该设置仍然有效。
* 如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。

<a id="api_irtcengineex_setsubscribeaudioblocklistex__scenario" />

### 适用场景 [#适用场景-12]

该方法适用于多频道场景。

<a id="api_irtcengineex_setsubscribeaudioblocklistex__parameters" />

### 参数 [#参数-29]

#### \`uidList\` [#uidlist-3]

不希望订阅其音频流的用户 ID 列表。

注：

* 如果你希望不订阅某个用户的音频流，请将该用户的 ID 添加到该列表中。
* 如果你希望将某个用户从黑名单中移除，需要调用 setSubscribeAudioBlocklist 方法更新用户 ID 列表；即你只需在新的用户 ID 列表中添加不希望订阅的用户 ID。

#### \`connection\` [#connection-11]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setsubscribeaudioblocklistex__return_values" />

### 返回值 [#返回值-29]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-29]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setsubscribevideoallowlist" />

## setSubscribeVideoAllowlist [#setsubscribevideoallowlist]

设置视频流订阅的白名单。

<a id="api_irtcengine_setsubscribevideoallowlist__prototype" />

\`\`\`java
public abstract int setSubscribeVideoAllowlist(int[] uidList);
\`\`\`

<a id="api_irtcengine_setsubscribevideoallowlist__detailed_desc" />

注：

* 你可以在加入频道前或加入频道后调用此方法。
* 白名单不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 设置的影响。
* 一旦设置了订阅白名单，即使你离开当前频道并重新加入，该设置仍然有效。
* 如果某个用户同时被添加到白名单和黑名单中，则仅黑名单生效。

<a id="api_irtcengine_setsubscribevideoallowlist__parameters" />

### 参数 [#参数-30]

#### \`uidList\` [#uidlist-4]

希望订阅的视频流所属用户的用户 ID 列表。

* 如果你希望订阅某个用户的视频流，请将该用户的用户 ID 添加到该列表中。
* 如果你希望将某个用户从白名单中移除，需要调用 setSubscribeVideoAllowlist 方法更新用户 ID 列表，即在新的用户 ID 列表中仅包含你希望订阅的用户的用户 ID。

<a id="api_irtcengine_setsubscribevideoallowlist__return_values" />

### 返回值 [#返回值-30]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-30]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setsubscribevideoallowlistex" />

## setSubscribeVideoAllowlistEx [#setsubscribevideoallowlistex]

设置视频流订阅的白名单。

<a id="api_irtcengineex_setsubscribevideoallowlistex__prototype" />

\`\`\`java
public abstract int setSubscribeVideoAllowlistEx(int[] uidList, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setsubscribevideoallowlistex__detailed_desc" />

注：

* 你可以在加入频道前或加入频道后调用此方法。
* 白名单不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 设置的影响。
* 一旦设置了订阅白名单，即使离开当前频道并重新加入频道，白名单依然有效。
* 如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。

<a id="api_irtcengineex_setsubscribevideoallowlistex__scenario" />

### 适用场景 [#适用场景-13]

该方法适用于多频道场景。

<a id="api_irtcengineex_setsubscribevideoallowlistex__parameters" />

### 参数 [#参数-31]

#### \`uidList\` [#uidlist-5]

希望订阅的视频流所属用户的用户 ID 列表。

* 如果你希望订阅某个用户的视频流，请将该用户的用户 ID 添加到该列表中。
* 如果你希望将某个用户从白名单中移除，需要调用 setSubscribeVideoAllowlist 方法更新用户 ID 列表；这意味着你只需在新的用户 ID 列表中添加希望订阅的用户的用户 ID。

#### \`connection\` [#connection-12]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setsubscribevideoallowlistex__return_values" />

### 返回值 [#返回值-31]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-31]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setsubscribevideoblocklist" />

## setSubscribeVideoBlocklist [#setsubscribevideoblocklist]

设置视频流订阅的阻止名单。

<a id="api_irtcengine_setsubscribevideoblocklist__prototype" />

\`\`\`java
public abstract int setSubscribeVideoBlocklist(int[] uidList);
\`\`\`

<a id="api_irtcengine_setsubscribevideoblocklist__detailed_desc" />

注：

* 你可以在加入频道前或加入频道后调用此方法。
* 阻止名单不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 的设置影响。
* 一旦设置了订阅的阻止名单，即使你离开当前频道并重新加入频道，该设置仍然有效。
* 如果某个用户同时被添加到允许名单和阻止名单中，则仅阻止名单生效。

<a id="api_irtcengine_setsubscribevideoblocklist__parameters" />

### 参数 [#参数-32]

#### \`uidList\` [#uidlist-6]

不希望订阅其视频流的用户 ID 列表。

* 如果你希望屏蔽某个用户的视频流，请将该用户的用户 ID 添加到该列表中。
* 如果你希望将某个用户从阻止名单中移除，需要调用 setSubscribeVideoBlocklist 方法更新该列表，即仅在新的列表中保留你仍希望屏蔽的用户 ID。

<a id="api_irtcengine_setsubscribevideoblocklist__return_values" />

### 返回值 [#返回值-32]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-32]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setsubscribevideoblocklistex" />

## setSubscribeVideoBlocklistEx [#setsubscribevideoblocklistex]

设置视频流订阅的黑名单。

<a id="api_irtcengineex_setsubscribevideoblocklistex__prototype" />

\`\`\`java
public abstract int setSubscribeVideoBlocklistEx(int[] uidList, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setsubscribevideoblocklistex__detailed_desc" />

注：

* 你可以在加入频道前或加入频道后调用此方法。
* 黑名单设置不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 的影响。
* 一旦设置了订阅黑名单，即使你离开当前频道并重新加入，该设置仍然有效。
* 如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。

<a id="api_irtcengineex_setsubscribevideoblocklistex__scenario" />

### 适用场景 [#适用场景-14]

该方法适用于多频道场景。

<a id="api_irtcengineex_setsubscribevideoblocklistex__parameters" />

### 参数 [#参数-33]

#### \`uidList\` [#uidlist-7]

不希望订阅其视频流的远端用户 ID 列表。如果你希望取消订阅某个用户的视频流，请将该用户的用户 ID 添加到该列表中。如果你希望将某个用户从黑名单中移除，需要调用 [setSubscribeVideoBlocklist](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoblocklist) 方法更新用户 ID 列表，即仅在新的列表中添加你不希望订阅的用户的用户 ID。

#### \`connection\` [#connection-13]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setsubscribevideoblocklistex__return_values" />

### 返回值 [#返回值-33]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-33]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="callback_irtcengineeventhandler_onaudiopublishstatechanged" />

## onAudioPublishStateChanged [#onaudiopublishstatechanged]

音频发布状态发生变化回调。

<a id="callback_irtcengineeventhandler_onaudiopublishstatechanged__prototype" />

\`\`\`java
public void onAudioPublishStateChanged(String channel, int oldState, int newState, int elapseSinceLastState)
\`\`\`

<a id="callback_irtcengineeventhandler_onaudiopublishstatechanged__detailed_desc" />

<a id="callback_irtcengineeventhandler_onaudiopublishstatechanged__timing" />

### 触发时机 [#触发时机]

该回调在音频发布状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onaudiopublishstatechanged__parameters" />

### 参数 [#参数-34]

#### \`channel\` [#channel]

频道名。

#### \`oldState\` [#oldstate]

之前的音频发布状态：

* PUB\\_STATE\\_IDLE （0）：加入频道后的初始发布状态。
* PUB\\_STATE\\_NO\\_PUBLISHED （1）：发布本地流失败。
* PUB\\_STATE\\_PUBLISHING （2）：正在发布本地流。
* PUB\\_STATE\\_PUBLISHED （3）：成功发布本地流。

#### \`newState\` [#newstate]

当前的音频发布状态：

* PUB\\_STATE\\_IDLE （0）：加入频道后的初始发布状态。
* PUB\\_STATE\\_NO\\_PUBLISHED （1）：发布本地流失败。
* PUB\\_STATE\\_PUBLISHING （2）：正在发布本地流。
* PUB\\_STATE\\_PUBLISHED （3）：成功发布本地流。

#### \`elapseSinceLastState\` [#elapsesincelaststate]

从上一个状态到当前状态所经过的时间，单位为毫秒。

### 所属接口类 [#所属接口类-34]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onaudiosubscribestatechanged" />

## onAudioSubscribeStateChanged [#onaudiosubscribestatechanged]

音频订阅状态发生变化回调。

<a id="callback_irtcengineeventhandler_onaudiosubscribestatechanged__prototype" />

\`\`\`java
public void onAudioSubscribeStateChanged(String channel, int uid, int oldState, int newState, int elapseSinceLastState)
\`\`\`

<a id="callback_irtcengineeventhandler_onaudiosubscribestatechanged__detailed_desc" />

该回调在本地用户订阅远端音频流的状态发生变化时触发。

<a id="callback_irtcengineeventhandler_onaudiosubscribestatechanged__timing" />

### 触发时机 [#触发时机-1]

该回调在本地用户订阅远端音频流的状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onaudiosubscribestatechanged__parameters" />

### 参数 [#参数-35]

#### \`channel\` [#channel-1]

频道名。

#### \`uid\` [#uid-10]

远端用户 ID。

#### \`oldState\` [#oldstate-1]

之前的订阅状态：

* SUB\\_STATE\\_IDLE (0)：加入频道后的初始订阅状态。
* SUB\\_STATE\\_NO\\_SUBSCRIBED (1)：订阅远端音频流失败。可能原因包括：
  * 远端用户：
    * 调用 muteLocalAudioStream(true) 停止发送本地音频流。
    * 调用 disableAudio 禁用本地音频模块。
    * 调用 enableLocalAudio(false) 禁用本地音频采集。
    * 角色为观众。
  * 本地用户：
    * 调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeAudio 设为 false，表示不自动订阅任何音频流。
    * 调用 muteRemoteAudioStream 或 muteAllRemoteAudioStreams 时将 muted 设为 true，表示停止接收远端音频流。
* SUB\\_STATE\\_SUBSCRIBING (2)：正在订阅中。
* SUB\\_STATE\\_SUBSCRIBED (3)：已成功接收远端音频流。

#### \`newState\` [#newstate-1]

当前的订阅状态：

* SUB\\_STATE\\_IDLE (0)：加入频道后的初始订阅状态。
* SUB\\_STATE\\_NO\\_SUBSCRIBED (1)：订阅远端音频流失败。可能原因包括：
  * 远端用户：
    * 调用 muteLocalAudioStream(true) 停止发送本地音频流。
    * 调用 disableAudio 禁用本地音频模块。
    * 调用 enableLocalAudio(false) 禁用本地音频采集。
    * 角色为观众。
  * 本地用户：
    * 调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeAudio 设为 false，表示不自动订阅任何音频流。
    * 调用 muteRemoteAudioStream 或 muteAllRemoteAudioStreams 时将 muted 设为 true，表示停止接收远端音频流。
* SUB\\_STATE\\_SUBSCRIBING (2)：正在订阅中。
* SUB\\_STATE\\_SUBSCRIBED (3)：已成功接收远端音频流。

#### \`elapseSinceLastState\` [#elapsesincelaststate-1]

从上一个状态到当前状态所经过的时间，单位为毫秒。

### 所属接口类 [#所属接口类-35]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onvideosubscribestatechanged" />

## onVideoSubscribeStateChanged [#onvideosubscribestatechanged]

视频订阅状态发生变化回调。

<a id="callback_irtcengineeventhandler_onvideosubscribestatechanged__prototype" />

\`\`\`java
public void onVideoSubscribeStateChanged(String channel, int uid, int oldState, int newState, int elapseSinceLastState)
\`\`\`

<a id="callback_irtcengineeventhandler_onvideosubscribestatechanged__detailed_desc" />

<a id="callback_irtcengineeventhandler_onvideosubscribestatechanged__timing" />

### 触发时机 [#触发时机-2]

该回调在本地用户订阅远端视频流的状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onvideosubscribestatechanged__parameters" />

### 参数 [#参数-36]

#### \`channel\` [#channel-2]

频道名。

#### \`uid\` [#uid-11]

远端用户 ID。

#### \`oldState\` [#oldstate-2]

之前的订阅状态：

* SUB\\_STATE\\_IDLE (0)：加入频道后的初始订阅状态。
* SUB\\_STATE\\_NO\\_SUBSCRIBED (1)：订阅远端流失败。可能原因包括：
  * 远端用户：
    * 调用 muteLocalVideoStream(true) 停止发送本地视频流。
    * 调用 disableVideo 禁用本地视频模块。
    * 调用 enableLocalVideo(false) 禁用本地视频采集。
    * 远端用户的角色为观众。
  * 本地用户：
    * 在调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeVideo 设置为 false，表示不自动订阅任何视频流。
    * 调用 muteRemoteVideoStream 或 muteAllRemoteVideoStreams 并将 muted 设置为 true，表示停止接收远端视频流。
* SUB\\_STATE\\_SUBSCRIBING (2)：正在订阅中。
* SUB\\_STATE\\_SUBSCRIBED (3)：已成功接收远端流。

#### \`newState\` [#newstate-2]

当前的订阅状态：

* SUB\\_STATE\\_IDLE (0)：加入频道后的初始订阅状态。
* SUB\\_STATE\\_NO\\_SUBSCRIBED (1)：订阅远端流失败。可能原因包括：
  * 远端用户：
    * 调用 muteLocalVideoStream(true) 停止发送本地视频流。
    * 调用 disableVideo 禁用本地视频模块。
    * 调用 enableLocalVideo(false) 禁用本地视频采集。
    * 远端用户的角色为观众。
  * 本地用户：
    * 在调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeVideo 设置为 false，表示不自动订阅任何视频流。
    * 调用 muteRemoteVideoStream 或 muteAllRemoteVideoStreams 并将 muted 设置为 true，表示停止接收远端视频流。
* SUB\\_STATE\\_SUBSCRIBING (2)：正在订阅中。
* SUB\\_STATE\\_SUBSCRIBED (3)：已成功接收远端流。

#### \`elapseSinceLastState\` [#elapsesincelaststate-2]

从上一个状态到当前状态所经过的时间，单位为毫秒。

### 所属接口类 [#所属接口类-36]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "enabledualstreammode-12",
    content: "在发送端启用或禁用双流模式。"
  }, {
    heading: "废弃",
    content: "自 v4.2.0 版本废弃，请改用 `setDualStreamMode`。"
  }, {
    heading: "废弃",
    content: "启用双流模式后，你可以调用 `setRemoteVideoStreamType` 方法，在订阅端选择接收视频大流或视频小流。 双流由以下两种视频流组成："
  }, {
    heading: "废弃",
    content: "视频大流：高码率、高分辨率。"
  }, {
    heading: "废弃",
    content: "视频小流：低码率、低分辨率。"
  }, {
    heading: "废弃",
    content: "注："
  }, {
    heading: "废弃",
    content: "该方法适用于发送端的所有类型视频流，包括但不限于摄像头采集的视频流、屏幕共享流和自定义采集的视频流。"
  }, {
    heading: "废弃",
    content: "如果你需要在多频道场景中启用双流模式，可以调用 enableDualStreamModeEx 方法。"
  }, {
    heading: "废弃",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "enabled",
    content: "是否启用双流模式："
  }, {
    heading: "enabled",
    content: "true：启用双流模式。"
  }, {
    heading: "enabled",
    content: "false：（默认）禁用双流模式。"
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
    heading: "enabledualstreammode-22",
    content: "设置发送端的双流模式和视频小流。"
  }, {
    heading: "废弃-1",
    content: "自 v4.2.0 版本废弃，请改用 `setDualStreamMode`。"
  }, {
    heading: "废弃-1",
    content: "你可以调用此方法在发送端启用或关闭双流模式。双流由一路视频大流和一路视频小流组成："
  }, {
    heading: "废弃-1",
    content: "视频大流：高码率、高分辨率。"
  }, {
    heading: "废弃-1",
    content: "视频小流：低码率、低分辨率。"
  }, {
    heading: "废弃-1",
    content: "启用双流模式后，你可以调用 `setRemoteVideoStreamType` 方法，在接收端选择接收视频大流或视频小流。"
  }, {
    heading: "废弃-1",
    content: "注："
  }, {
    heading: "废弃-1",
    content: "该方法适用于发送端的所有类型视频流，包括但不限于摄像头采集的视频流、屏幕共享流和自定义采集的视频流。"
  }, {
    heading: "废弃-1",
    content: "如果你需要在多频道场景中启用双流模式，可以调用 enableDualStreamModeEx 方法。"
  }, {
    heading: "废弃-1",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "enabled-1",
    content: "是否启用双流模式："
  }, {
    heading: "enabled-1",
    content: "true：启用双流模式。"
  }, {
    heading: "enabled-1",
    content: "false：（默认）关闭双流模式。"
  }, {
    heading: "streamconfig",
    content: "视频小流的配置，详见 SimulcastStreamConfig。"
  }, {
    heading: "streamconfig",
    content: "当 `mode` 设置为 `DISABLE_SIMULCAST_STREAM` 时，设置 `streamConfig` 不生效。"
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
    heading: "enabledualstreammodeex",
    content: "在发送端启用或关闭双流模式。"
  }, {
    heading: "废弃-2",
    content: "自 v4.2.0 版本废弃。请使用 setDualStreamModeEx 代替。"
  }, {
    heading: "废弃-2",
    content: "你可以调用此方法在发送端启用或关闭双流模式。双流由一对视频大流和视频小流组成："
  }, {
    heading: "废弃-2",
    content: "视频大流：高码率，高分辨率。"
  }, {
    heading: "废弃-2",
    content: "视频小流：低码率，低分辨率。"
  }, {
    heading: "废弃-2",
    content: "启用双流模式后，你可以调用 `setRemoteVideoStreamType` 方法，在订阅端选择接收视频大流或视频小流。"
  }, {
    heading: "废弃-2",
    content: "该方法适用于发送端的所有类型视频流，包括但不限于摄像头采集的视频流、屏幕共享流和自定义采集的视频流。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "enabled-2",
    content: "是否启用双流模式："
  }, {
    heading: "enabled-2",
    content: "true：启用双流模式。"
  }, {
    heading: "enabled-2",
    content: "false：（默认）关闭双流模式。"
  }, {
    heading: "streamconfig-1",
    content: "视频小流的配置，详见 SimulcastStreamConfig。"
  }, {
    heading: "streamconfig-1",
    content: "当 `mode` 设置为 `DISABLE_SIMULCAST_STREAM` 时，设置 `streamConfig` 不生效。"
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
    heading: "muteallremoteaudiostreams",
    content: "停止或恢复订阅所有远端用户的音频流。"
  }, {
    heading: "muteallremoteaudiostreams",
    content: "请在加入频道后调用该方法。本地用户将停止或恢复订阅所有远端用户的音频流，包括之后加入频道的用户。"
  }, {
    heading: "muteallremoteaudiostreams",
    content: "如果你调用该方法后又调用了 enableAudio 或 disableAudio，以最后一次调用为准。默认情况下，加入频道时 SDK 会自动订阅所有远端用户的音频流。你可以在调用 `joinChannel` 加入频道时将 ChannelMediaOptions 中的 `autoSubscribeAudio` 设置为 false，以取消加入频道时对所有用户音频流的订阅。"
  }, {
    heading: "调用时机",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "muted",
    content: "是否停止订阅所有远端用户的音频流："
  }, {
    heading: "muted",
    content: "true：停止订阅所有远端用户的音频流。"
  }, {
    heading: "muted",
    content: "false：（默认）订阅所有远端用户的音频流。"
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
    heading: "muteallremoteaudiostreamsex",
    content: "停止或恢复订阅所有远端用户的音频流。"
  }, {
    heading: "适用场景-1",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-1",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "调用时机-1",
    content: "如果你希望在加入频道前不订阅远端用户的音频流，可以在调用 joinChannel 时将 ChannelMediaOptions 中的 autoSubscribeAudio 设置为 false。"
  }, {
    heading: "muted-1",
    content: "是否停止订阅所有远端用户的音频流："
  }, {
    heading: "muted-1",
    content: "true：停止订阅所有远端用户的音频流。"
  }, {
    heading: "muted-1",
    content: "false：（默认）订阅所有远端用户的音频流。"
  }, {
    heading: "connection-1",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-4",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngineEx"
  }, {
    heading: "muteallremotevideostreams",
    content: "停止或恢复订阅所有远端用户的视频流。"
  }, {
    heading: "muteallremotevideostreams",
    content: "请在加入频道后调用该方法。调用该方法后，本地用户将停止或恢复订阅所有远端用户的视频流，包括之后加入频道的用户。"
  }, {
    heading: "muteallremotevideostreams",
    content: "如果你调用该方法后又调用了 enableVideo 或 disableVideo，以最后一次调用为准。默认情况下，加入频道时 SDK 会自动订阅所有远端用户的视频流。你可以在调用 `joinChannel` 加入频道时将 ChannelMediaOptions 中的 `autoSubscribeVideo` 设置为 false，以取消加入频道时对所有用户的视频流订阅。"
  }, {
    heading: "调用时机-2",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "muted-2",
    content: "是否停止订阅所有远端用户的视频流。"
  }, {
    heading: "muted-2",
    content: "注："
  }, {
    heading: "muted-2",
    content: "true：停止订阅所有远端用户的视频流。"
  }, {
    heading: "muted-2",
    content: "false：（默认）订阅所有远端用户的视频流。"
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
    heading: "muteallremotevideostreamsex",
    content: "停止或恢复订阅所有远端用户的视频流。"
  }, {
    heading: "muteallremotevideostreamsex",
    content: "调用该方法后，你将停止或恢复订阅所有远端用户的视频流，包括之后加入频道的用户。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "muted-3",
    content: "是否停止订阅所有远端用户的视频流："
  }, {
    heading: "muted-3",
    content: "true：停止订阅所有远端用户的视频流。"
  }, {
    heading: "muted-3",
    content: "false：默认订阅所有远端用户的视频流。"
  }, {
    heading: "connection-2",
    content: "连接信息。详见 RtcConnection。"
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
    heading: "mutelocalaudiostream",
    content: "停止或恢复发布本地采集音频流。"
  }, {
    heading: "mutelocalaudiostream",
    content: "调用该方法停止发布本地音频流时，音频采集设备仍会正常工作，不受影响。"
  }, {
    heading: "调用时机-3",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "相关回调",
    content: "调用该方法成功后，本地会触发回调 onAudioPublishStateChanged；远端会触发回调 onUserMuteAudio 和 onRemoteAudioStateChanged。"
  }, {
    heading: "muted-4",
    content: "是否停止发布本地音频流："
  }, {
    heading: "muted-4",
    content: "true：停止发布本地音频流。"
  }, {
    heading: "muted-4",
    content: "false：（默认）恢复发布本地音频流。"
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
    heading: "mutelocalaudiostreamex",
    content: "停止或恢复发布本地音频流。"
  }, {
    heading: "mutelocalaudiostreamex",
    content: "成功调用该方法后，远端客户端会收到 onUserMuteAudio 和 onRemoteAudioStateChanged 回调。"
  }, {
    heading: "mutelocalaudiostreamex",
    content: "该方法不会影响任何正在进行的音频录制，因为它不会禁用音频采集设备。"
  }, {
    heading: "适用场景-3",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "muted-5",
    content: "是否停止发布本地音频流："
  }, {
    heading: "muted-5",
    content: "true：停止发布本地音频流。"
  }, {
    heading: "muted-5",
    content: "false：（默认）恢复发布本地音频流。"
  }, {
    heading: "connection-3",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-8",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-8",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-8",
    content: "RtcEngineEx"
  }, {
    heading: "mutelocalvideostream",
    content: "停止或恢复发布本地视频流。"
  }, {
    heading: "mutelocalvideostream",
    content: "该方法用于控制是否发布本地采集的视频流。调用该方法停止发布本地视频流时，视频采集设备仍会继续工作，不受影响。相比通过将 enableLocalVideo 设为 false 来关闭本地视频采集从而取消发布视频流，该方法响应更快。"
  }, {
    heading: "调用时机-4",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "相关回调-1",
    content: "调用该方法成功后，本地会触发回调 onVideoPublishStateChanged；远端会触发回调 onUserMuteVideo 和 onRemoteVideoStateChanged。"
  }, {
    heading: "muted-6",
    content: "是否停止发布本地视频流。"
  }, {
    heading: "muted-6",
    content: "true：停止发布本地视频流。"
  }, {
    heading: "muted-6",
    content: "false：（默认）发布本地视频流。"
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
    heading: "mutelocalvideostreamex",
    content: "停止或恢复发布本地视频流。"
  }, {
    heading: "mutelocalvideostreamex",
    content: "成功调用该方法后，远端客户端会触发 onUserMuteVideo 回调。"
  }, {
    heading: "mutelocalvideostreamex",
    content: "该方法不会影响正在进行的视频录制，因为它不会关闭摄像头。"
  }, {
    heading: "适用场景-4",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "muted-7",
    content: "是否停止发布本地视频流。"
  }, {
    heading: "muted-7",
    content: "true：停止发布本地视频流。"
  }, {
    heading: "muted-7",
    content: "false：（默认）发布本地视频流。"
  }, {
    heading: "connection-4",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-10",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-10",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-10",
    content: "RtcEngineEx"
  }, {
    heading: "muteremoteaudiostream",
    content: "停止或恢复订阅指定远端用户的音频流。"
  }, {
    heading: "调用时机-5",
    content: "在加入频道后调用该方法。"
  }, {
    heading: "相关回调-2",
    content: "调用该方法成功后，SDK 会触发 onAudioSubscribeStateChanged 回调。"
  }, {
    heading: "uid",
    content: "指定远端用户的用户 ID。"
  }, {
    heading: "muted-8",
    content: "是否订阅指定远端用户的音频流："
  }, {
    heading: "muted-8",
    content: "true：停止订阅该用户的音频流。"
  }, {
    heading: "muted-8",
    content: "false：订阅该用户的音频流。"
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
    heading: "muteremoteaudiostreamex",
    content: "停止或恢复接收指定用户的音频流。"
  }, {
    heading: "muteremoteaudiostreamex",
    content: "你可以在加入频道前或加入频道后调用该方法。如果用户离开频道，方法的设置将失效。"
  }, {
    heading: "适用场景-5",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uid-1",
    content: "指定用户的 ID。"
  }, {
    heading: "muted-9",
    content: "是否停止接收指定用户的音频流："
  }, {
    heading: "muted-9",
    content: "true：停止接收指定用户的音频流。"
  }, {
    heading: "muted-9",
    content: "false：（默认）恢复接收指定用户的音频流。"
  }, {
    heading: "connection-5",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-12",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-12",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-12",
    content: "RtcEngineEx"
  }, {
    heading: "muteremotevideostream",
    content: "停止或恢复订阅指定远端用户的视频流。"
  }, {
    heading: "调用时机-6",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "相关回调-3",
    content: "调用该方法成功后，SDK 会触发 onVideoSubscribeStateChanged 回调。"
  }, {
    heading: "uid-2",
    content: "指定远端用户的用户 ID。"
  }, {
    heading: "muted-10",
    content: "是否订阅指定远端用户的视频流："
  }, {
    heading: "muted-10",
    content: "true：停止订阅该用户的视频流。"
  }, {
    heading: "muted-10",
    content: "false：订阅该用户的视频流（默认）。"
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
    heading: "muteremotevideostreamex",
    content: "停止或恢复接收指定用户的视频流。"
  }, {
    heading: "muteremotevideostreamex",
    content: "你可以在加入频道前或加入频道后调用该方法。如果该用户离开频道，设置将失效。"
  }, {
    heading: "适用场景-6",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uid-3",
    content: "远端用户 ID。"
  }, {
    heading: "muted-11",
    content: "是否停止接收指定用户的视频流："
  }, {
    heading: "muted-11",
    content: "true：停止接收指定用户的视频流。"
  }, {
    heading: "muted-11",
    content: "false：（默认）恢复接收指定用户的视频流。"
  }, {
    heading: "connection-6",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-14",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-14",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-14",
    content: "RtcEngineEx"
  }, {
    heading: "setdualstreammode-12",
    content: "设置发送端的视频流模式，用于控制是否发送视频小流。"
  }, {
    heading: "setdualstreammode-12",
    content: "你可以调用该方法设置发送端的视频流模式。 SDK 默认在发送端启用视频小流自适应模式（`AUTO_SIMULCAST_STREAM` ），即发送端不会主动发送视频小流。角色为主播的接收端可以通过调用 `setRemoteVideoStreamType` 发起视频小流请求，发送端在收到请求后会自动开始发送视频小流。"
  }, {
    heading: "setdualstreammode-12",
    content: "如果你希望修改此行为，可以调用该方法并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流）或 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流）。"
  }, {
    heading: "setdualstreammode-12",
    content: "如果你希望恢复默认行为，可以再次调用该方法并将 mode 设置为 AUTO\\_SIMULCAST\\_STREAM。"
  }, {
    heading: "setdualstreammode-12",
    content: "注： 该方法与 `enableDualStreamMode` 的区别如下："
  }, {
    heading: "setdualstreammode-12",
    content: "当调用该方法并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamMode(false)。"
  }, {
    heading: "setdualstreammode-12",
    content: "当调用该方法并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamMode(true)。"
  }, {
    heading: "setdualstreammode-12",
    content: "两个方法都可以在加入频道前或后调用。如果两个方法都被调用，则以后调用的方法设置优先生效。"
  }, {
    heading: "mode",
    content: "发送视频流的模式。详见 SimulcastStreamMode。"
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
    heading: "setdualstreammode-22",
    content: "设置发送端的不同质量层级的视频流模式配置。"
  }, {
    heading: "setdualstreammode-22",
    content: "SDK 默认在发送端开启视频小流自适应模式（`AUTO_SIMULCAST_STREAM` ），即发送端不会主动发送视频小流。角色为主播的接收端可以通过调用 `setRemoteVideoStreamType` 发起视频小流请求，发送端在收到请求后会自动开始发送视频小流。"
  }, {
    heading: "setdualstreammode-22",
    content: "如果你希望修改该行为，可以调用该方法，并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流）或 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流）。"
  }, {
    heading: "setdualstreammode-22",
    content: "如果你希望恢复默认行为，可以再次调用该方法，并将 mode 设置为 AUTO\\_SIMULCAST\\_STREAM。"
  }, {
    heading: "setdualstreammode-22",
    content: "注： 该方法与 `enableDualStreamMode` 的区别如下："
  }, {
    heading: "setdualstreammode-22",
    content: "当调用该方法并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamMode 并将 enabled 设置为 false。"
  }, {
    heading: "setdualstreammode-22",
    content: "当调用该方法并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamMode 并将 enabled 设置为 true。"
  }, {
    heading: "setdualstreammode-22",
    content: "两个方法都可以在加入频道前或后调用。如果两个方法都被调用，则以后调用的方法设置优先生效。"
  }, {
    heading: "mode-1",
    content: "发送视频流的模式，详见 SimulcastStreamMode。"
  }, {
    heading: "streamconfig-2",
    content: "视频小流的配置，详见 SimulcastStreamConfig。"
  }, {
    heading: "streamconfig-2",
    content: "当 `mode` 设置为 `DISABLE_SIMULCAST_STREAM` 时，设置该参数无效。"
  }, {
    heading: "返回值-16",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-16",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-16",
    content: "RtcEngine"
  }, {
    heading: "setdualstreammodeex",
    content: "设置发送端的视频流模式，用于控制是否发送视频小流。"
  }, {
    heading: "setdualstreammodeex",
    content: "SDK 默认在发送端开启视频小流自适应模式（`AUTO_SIMULCAST_STREAM` ）。角色为主播的接收端可以通过调用 `setRemoteVideoStreamTypeEx` 发起视频小流请求，发送端在收到请求后会自动开始发送视频小流。"
  }, {
    heading: "setdualstreammodeex",
    content: "如果你希望修改此行为，可以调用该方法并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流）或 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流）。"
  }, {
    heading: "setdualstreammodeex",
    content: "如果你希望恢复默认行为，可以再次调用该方法并将 mode 设置为 AUTO\\_SIMULCAST\\_STREAM。"
  }, {
    heading: "setdualstreammodeex",
    content: "注： 该方法与 enableDualStreamModeEx 的区别如下："
  }, {
    heading: "setdualstreammodeex",
    content: "将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamModeEx(false)。"
  }, {
    heading: "setdualstreammodeex",
    content: "将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM 时，效果等同于调用 enableDualStreamModeEx(true)。"
  }, {
    heading: "setdualstreammodeex",
    content: "两个方法均可在加入频道前或后调用。如果两个方法都被调用，则以后调用的方法设置优先生效。"
  }, {
    heading: "适用场景-7",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "mode-2",
    content: "视频流发送模式。详见 SimulcastStreamMode。"
  }, {
    heading: "streamconfig-3",
    content: "视频小流的配置。详见 SimulcastStreamConfig。"
  }, {
    heading: "streamconfig-3",
    content: "当 `mode` 设置为 `DISABLE_SIMULCAST_STREAM` 时，该参数不生效。"
  }, {
    heading: "connection-7",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-17",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-17",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-17",
    content: "RtcEngineEx"
  }, {
    heading: "setremotedefaultvideostreamtype-12",
    content: "设置默认订阅的视频流类型。"
  }, {
    heading: "setremotedefaultvideostreamtype-12",
    content: "根据发送端的默认行为以及调用 `setDualStreamMode` 时的具体设置，接收端调用该方法的场景如下："
  }, {
    heading: "setremotedefaultvideostreamtype-12",
    content: "SDK 默认在发送端开启视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为订阅视频小流模式。"
  }, {
    heading: "setremotedefaultvideostreamtype-12",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。"
  }, {
    heading: "setremotedefaultvideostreamtype-12",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为订阅视频小流模式。"
  }, {
    heading: "setremotedefaultvideostreamtype-12",
    content: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
  }, {
    heading: "setremotedefaultvideostreamtype-12",
    content: "如果同时调用该方法和 `setRemoteVideoStreamType`，则以 `setRemoteVideoStreamType` 的设置为准。"
  }, {
    heading: "调用时机-7",
    content: "请在加入频道前调用该方法。SDK 不支持在加入频道后更改默认订阅的视频流类型。"
  }, {
    heading: "streamtype",
    content: "视频流类型。详见 VideoStreamType。"
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
    heading: "setremotedefaultvideostreamtype-22",
    content: "设置默认订阅的视频流类型。"
  }, {
    heading: "废弃-3",
    content: "该方法已废弃，请改用 setRemoteDefaultVideoStreamType \\[1/2]。"
  }, {
    heading: "废弃-3",
    content: "根据发送端的默认行为以及调用 `setDualStreamMode` 时的具体设置，接收端调用该方法的场景如下："
  }, {
    heading: "废弃-3",
    content: "SDK 默认在发送端启用视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为订阅视频小流模式。"
  }, {
    heading: "废弃-3",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。"
  }, {
    heading: "废弃-3",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为订阅视频小流模式。"
  }, {
    heading: "废弃-3",
    content: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
  }, {
    heading: "废弃-3",
    content: "如果同时调用该方法和 `setRemoteVideoStreamType`，则以 `setRemoteVideoStreamType` 的设置为准。"
  }, {
    heading: "调用时机-8",
    content: "请在加入频道前调用该方法。SDK 不支持在加入频道后更改默认订阅的视频流类型。"
  }, {
    heading: "streamtype-1",
    content: "默认订阅的视频流类型："
  }, {
    heading: "streamtype-1",
    content: "VIDEO\\_STREAM\\_HIGH （0）：视频大流，即高分辨率和高码率的视频流。"
  }, {
    heading: "streamtype-1",
    content: "VIDEO\\_STREAM\\_LOW （1）：视频小流，即低分辨率和低码率的视频流。"
  }, {
    heading: "返回值-19",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-19",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-19",
    content: "RtcEngine"
  }, {
    heading: "setremotevideostreamtype-12",
    content: "设置要订阅的视频流类型。"
  }, {
    heading: "setremotevideostreamtype-12",
    content: "根据发送端的默认行为以及调用 `setDualStreamMode` 时的具体设置，接收端调用该方法的场景如下："
  }, {
    heading: "setremotevideostreamtype-12",
    content: "SDK 默认在发送端开启视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为订阅视频小流模式。"
  }, {
    heading: "setremotevideostreamtype-12",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。"
  }, {
    heading: "setremotevideostreamtype-12",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为订阅视频小流模式。"
  }, {
    heading: "setremotevideostreamtype-12",
    content: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
  }, {
    heading: "setremotevideostreamtype-12",
    content: "注："
  }, {
    heading: "setremotevideostreamtype-12",
    content: "可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "setremotevideostreamtype-12",
    content: "如果同时调用该方法和 setRemoteDefaultVideoStreamType，则以该方法的设置为准。"
  }, {
    heading: "uid-4",
    content: "远端用户 ID。"
  }, {
    heading: "streamtype-2",
    content: "视频流类型。详见 VideoStreamType。"
  }, {
    heading: "返回值-20",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-20",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-20",
    content: "RtcEngine"
  }, {
    heading: "setremotevideostreamtype-22",
    content: "设置要订阅的视频流类型。"
  }, {
    heading: "废弃-4",
    content: "该方法已废弃，请改用 `setRemoteVideoStreamType(int uid, Constants.VideoStreamType streamType)`。"
  }, {
    heading: "废弃-4",
    content: "根据发送端的默认行为以及调用 `setDualStreamMode` 时的具体设置，接收端调用此方法的场景如下："
  }, {
    heading: "废弃-4",
    content: "SDK 默认在发送端启用视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用此方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用此方法切换为订阅视频小流模式。"
  }, {
    heading: "废弃-4",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用此方法无效。"
  }, {
    heading: "废弃-4",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用此方法切换为订阅视频小流模式。"
  }, {
    heading: "废弃-4",
    content: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流相同。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
  }, {
    heading: "废弃-4",
    content: "注："
  }, {
    heading: "废弃-4",
    content: "可以在加入频道前或后调用此方法。"
  }, {
    heading: "废弃-4",
    content: "如果同时调用此方法和 setRemoteDefaultVideoStreamType，则以此方法的设置为准。"
  }, {
    heading: "uid-5",
    content: "远端用户 ID。"
  }, {
    heading: "streamtype-3",
    content: "视频流类型："
  }, {
    heading: "streamtype-3",
    content: "0：视频大流。"
  }, {
    heading: "streamtype-3",
    content: "1：视频小流。"
  }, {
    heading: "返回值-21",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-21",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-21",
    content: "RtcEngine"
  }, {
    heading: "setremotevideostreamtypeex-12",
    content: "设置要订阅的视频流类型。"
  }, {
    heading: "setremotevideostreamtypeex-12",
    content: "根据发送端的默认行为以及调用 setDualStreamModeEx 时的具体设置，接收端调用该方法的场景如下："
  }, {
    heading: "setremotevideostreamtypeex-12",
    content: "SDK 默认在发送端开启视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。此时，仅角色为 Host 的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户均可调用该方法切换为视频小流订阅模式。"
  }, {
    heading: "setremotevideostreamtypeex-12",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。"
  }, {
    heading: "setremotevideostreamtypeex-12",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则 Host 和 Audience 角色的接收端均可调用该方法切换为视频小流订阅模式。"
  }, {
    heading: "setremotevideostreamtypeex-12",
    content: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
  }, {
    heading: "setremotevideostreamtypeex-12",
    content: "如果发送端已调用 setDualStreamModeEx 并将 `mode` 设置为 `DISABLE_SIMULCAST_STREAM`，则调用该方法无效。你需要在发送端再次调用 setDualStreamModeEx 并调整设置。"
  }, {
    heading: "适用场景-8",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uid-6",
    content: "远端用户 ID。"
  }, {
    heading: "streamtype-4",
    content: "视频流类型，详见 VideoStreamType。"
  }, {
    heading: "connection-8",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "返回值-22",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-22",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-22",
    content: "RtcEngineEx"
  }, {
    heading: "setremotevideostreamtypeex-22",
    content: "设置要订阅的视频流类型。"
  }, {
    heading: "废弃-5",
    content: "该方法已废弃，请改用 setRemoteVideoStreamTypeEx \\[1/2]。"
  }, {
    heading: "废弃-5",
    content: "根据发送端的默认行为以及调用 setDualStreamModeEx 时的具体设置，接收端调用该方法的场景如下："
  }, {
    heading: "废弃-5",
    content: "SDK 默认在发送端启用视频小流自适应模式（AUTO\\_SIMULCAST\\_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为视频小流订阅模式。"
  }, {
    heading: "废弃-5",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE\\_SIMULCAST\\_STREAM （从不发送视频小流），则调用该方法无效。"
  }, {
    heading: "废弃-5",
    content: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE\\_SIMULCAST\\_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为视频小流订阅模式。"
  }, {
    heading: "废弃-5",
    content: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
  }, {
    heading: "废弃-5",
    content: "如果发送端已调用 setDualStreamModeEx 并将 `mode` 设置为 `DISABLE_SIMULCAST_STREAM` （从不发送视频小流），则调用该方法无效。你应在发送端重新调用 setDualStreamModeEx 并调整设置。"
  }, {
    heading: "适用场景-9",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uid-7",
    content: "远端用户 ID。"
  }, {
    heading: "streamtype-5",
    content: "视频流类型："
  }, {
    heading: "streamtype-5",
    content: "0：视频大流。"
  }, {
    heading: "streamtype-5",
    content: "1：视频小流。"
  }, {
    heading: "connection-9",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-23",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-23",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-23",
    content: "RtcEngineEx"
  }, {
    heading: "setremotevideosubscriptionoptions",
    content: "设置订阅远端视频流的选项。"
  }, {
    heading: "setremotevideosubscriptionoptions",
    content: "你可以调用该方法设置订阅远端用户发送的视频流的选项，适用于远端用户开启双流模式的场景。SDK 默认的远端视频流订阅行为取决于注册的视频观察器类型："
  }, {
    heading: "setremotevideosubscriptionoptions",
    content: "如果注册了 IVideoFrameObserver 观察器，默认订阅原始数据和编码数据；"
  }, {
    heading: "setremotevideosubscriptionoptions",
    content: "如果注册了 IVideoEncodedFrameObserver 观察器，默认仅订阅编码数据；"
  }, {
    heading: "setremotevideosubscriptionoptions",
    content: "如果同时注册了两种观察器，默认行为遵循最后注册的视频观察器。例如，如果最后注册的是 IVideoFrameObserver，则默认订阅原始数据和编码数据。"
  }, {
    heading: "setremotevideosubscriptionoptions",
    content: "如果你希望修改默认行为，或为不同的用户 ID 设置不同的订阅选项，可以调用该方法进行设置。"
  }, {
    heading: "uid-8",
    content: "远端用户的用户 ID。"
  }, {
    heading: "options",
    content: "视频订阅选项，详见 VideoSubscriptionOptions。"
  }, {
    heading: "返回值-24",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-24",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-24",
    content: "RtcEngine"
  }, {
    heading: "setremotevideosubscriptionoptionsex",
    content: "设置订阅远端视频流的选项。"
  }, {
    heading: "setremotevideosubscriptionoptionsex",
    content: "该方法适用于多频道场景。当远端用户开启双流模式时，你可以调用该方法设置订阅该远端用户发送的视频流的选项。"
  }, {
    heading: "适用场景-10",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uid-9",
    content: "远端用户 ID。"
  }, {
    heading: "options-1",
    content: "视频订阅选项，详见 VideoSubscriptionOptions。"
  }, {
    heading: "rtcconnection",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "返回值-25",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-25",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-25",
    content: "RtcEngineEx"
  }, {
    heading: "setsubscribeaudioallowlist",
    content: "设置音频流订阅的白名单。"
  }, {
    heading: "setsubscribeaudioallowlist",
    content: "注："
  }, {
    heading: "setsubscribeaudioallowlist",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "setsubscribeaudioallowlist",
    content: "白名单不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中 autoSubscribeAudio 设置的影响。"
  }, {
    heading: "setsubscribeaudioallowlist",
    content: "一旦设置了订阅白名单，即使你离开当前频道并重新加入频道，该设置仍然有效。"
  }, {
    heading: "setsubscribeaudioallowlist",
    content: "如果某个用户同时被添加到白名单和黑名单中，则仅黑名单生效。"
  }, {
    heading: "uidlist",
    content: "你希望订阅的用户 ID 列表。调用该方法时，仅订阅该列表中用户的音频流。如果你希望将某个用户从白名单中移除，需要重新调用 setSubscribeAudioAllowlist 方法，并在新的列表中仅包含你希望订阅的用户 ID。"
  }, {
    heading: "返回值-26",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-26",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-26",
    content: "RtcEngine"
  }, {
    heading: "setsubscribeaudioallowlistex",
    content: "设置音频流订阅的白名单。"
  }, {
    heading: "setsubscribeaudioallowlistex",
    content: "注："
  }, {
    heading: "setsubscribeaudioallowlistex",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "setsubscribeaudioallowlistex",
    content: "白名单不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中 autoSubscribeAudio 设置的影响。"
  }, {
    heading: "setsubscribeaudioallowlistex",
    content: "一旦设置了订阅白名单，即使你离开当前频道并重新加入，该设置仍然有效。"
  }, {
    heading: "setsubscribeaudioallowlistex",
    content: "如果某个用户同时被添加到白名单和黑名单中，则以黑名单为准。"
  }, {
    heading: "适用场景-11",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uidlist-1",
    content: "你想要订阅的用户 ID 列表。如果你希望将某个用户从白名单中移除，需要调用 setSubscribeAudioAllowlist 方法更新用户 ID 列表；也就是说，你只需在新的用户 ID 列表中添加你希望订阅的用户的用户 ID。"
  }, {
    heading: "connection-10",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "返回值-27",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-27",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-27",
    content: "RtcEngineEx"
  }, {
    heading: "setsubscribeaudioblocklist",
    content: "设置音频流订阅的黑名单。"
  }, {
    heading: "setsubscribeaudioblocklist",
    content: "注："
  }, {
    heading: "setsubscribeaudioblocklist",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "setsubscribeaudioblocklist",
    content: "黑名单不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中 autoSubscribeAudio 设置的影响。"
  }, {
    heading: "setsubscribeaudioblocklist",
    content: "一旦设置了订阅黑名单，即使你离开当前频道并重新加入频道，该设置仍然有效。"
  }, {
    heading: "setsubscribeaudioblocklist",
    content: "如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。"
  }, {
    heading: "uidlist-2",
    content: "不希望订阅其音频流的用户 ID 列表。"
  }, {
    heading: "uidlist-2",
    content: "如果你希望将某个用户从黑名单中移除，需要调用 setSubscribeAudioBlocklist 方法更新用户 ID 列表，即在新的列表中仅保留不希望订阅的用户 ID。"
  }, {
    heading: "返回值-28",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-28",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-28",
    content: "RtcEngine"
  }, {
    heading: "setsubscribeaudioblocklistex",
    content: "设置音频流订阅的黑名单。"
  }, {
    heading: "setsubscribeaudioblocklistex",
    content: "你可以调用该方法指定不希望订阅的用户的音频流。"
  }, {
    heading: "setsubscribeaudioblocklistex",
    content: "注："
  }, {
    heading: "setsubscribeaudioblocklistex",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "setsubscribeaudioblocklistex",
    content: "黑名单设置不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中的 autoSubscribeAudio 的影响。"
  }, {
    heading: "setsubscribeaudioblocklistex",
    content: "一旦设置了订阅黑名单，即使离开当前频道并重新加入频道，该设置仍然有效。"
  }, {
    heading: "setsubscribeaudioblocklistex",
    content: "如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。"
  }, {
    heading: "适用场景-12",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uidlist-3",
    content: "不希望订阅其音频流的用户 ID 列表。"
  }, {
    heading: "uidlist-3",
    content: "注："
  }, {
    heading: "uidlist-3",
    content: "如果你希望不订阅某个用户的音频流，请将该用户的 ID 添加到该列表中。"
  }, {
    heading: "uidlist-3",
    content: "如果你希望将某个用户从黑名单中移除，需要调用 setSubscribeAudioBlocklist 方法更新用户 ID 列表；即你只需在新的用户 ID 列表中添加不希望订阅的用户 ID。"
  }, {
    heading: "connection-11",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "返回值-29",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-29",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-29",
    content: "RtcEngineEx"
  }, {
    heading: "setsubscribevideoallowlist",
    content: "设置视频流订阅的白名单。"
  }, {
    heading: "setsubscribevideoallowlist",
    content: "注："
  }, {
    heading: "setsubscribevideoallowlist",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "setsubscribevideoallowlist",
    content: "白名单不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 设置的影响。"
  }, {
    heading: "setsubscribevideoallowlist",
    content: "一旦设置了订阅白名单，即使你离开当前频道并重新加入，该设置仍然有效。"
  }, {
    heading: "setsubscribevideoallowlist",
    content: "如果某个用户同时被添加到白名单和黑名单中，则仅黑名单生效。"
  }, {
    heading: "uidlist-4",
    content: "希望订阅的视频流所属用户的用户 ID 列表。"
  }, {
    heading: "uidlist-4",
    content: "如果你希望订阅某个用户的视频流，请将该用户的用户 ID 添加到该列表中。"
  }, {
    heading: "uidlist-4",
    content: "如果你希望将某个用户从白名单中移除，需要调用 setSubscribeVideoAllowlist 方法更新用户 ID 列表，即在新的用户 ID 列表中仅包含你希望订阅的用户的用户 ID。"
  }, {
    heading: "返回值-30",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-30",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-30",
    content: "RtcEngine"
  }, {
    heading: "setsubscribevideoallowlistex",
    content: "设置视频流订阅的白名单。"
  }, {
    heading: "setsubscribevideoallowlistex",
    content: "注："
  }, {
    heading: "setsubscribevideoallowlistex",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "setsubscribevideoallowlistex",
    content: "白名单不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 设置的影响。"
  }, {
    heading: "setsubscribevideoallowlistex",
    content: "一旦设置了订阅白名单，即使离开当前频道并重新加入频道，白名单依然有效。"
  }, {
    heading: "setsubscribevideoallowlistex",
    content: "如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。"
  }, {
    heading: "适用场景-13",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uidlist-5",
    content: "希望订阅的视频流所属用户的用户 ID 列表。"
  }, {
    heading: "uidlist-5",
    content: "如果你希望订阅某个用户的视频流，请将该用户的用户 ID 添加到该列表中。"
  }, {
    heading: "uidlist-5",
    content: "如果你希望将某个用户从白名单中移除，需要调用 setSubscribeVideoAllowlist 方法更新用户 ID 列表；这意味着你只需在新的用户 ID 列表中添加希望订阅的用户的用户 ID。"
  }, {
    heading: "connection-12",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-31",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-31",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-31",
    content: "RtcEngineEx"
  }, {
    heading: "setsubscribevideoblocklist",
    content: "设置视频流订阅的阻止名单。"
  }, {
    heading: "setsubscribevideoblocklist",
    content: "注："
  }, {
    heading: "setsubscribevideoblocklist",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "setsubscribevideoblocklist",
    content: "阻止名单不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 的设置影响。"
  }, {
    heading: "setsubscribevideoblocklist",
    content: "一旦设置了订阅的阻止名单，即使你离开当前频道并重新加入频道，该设置仍然有效。"
  }, {
    heading: "setsubscribevideoblocklist",
    content: "如果某个用户同时被添加到允许名单和阻止名单中，则仅阻止名单生效。"
  }, {
    heading: "uidlist-6",
    content: "不希望订阅其视频流的用户 ID 列表。"
  }, {
    heading: "uidlist-6",
    content: "如果你希望屏蔽某个用户的视频流，请将该用户的用户 ID 添加到该列表中。"
  }, {
    heading: "uidlist-6",
    content: "如果你希望将某个用户从阻止名单中移除，需要调用 setSubscribeVideoBlocklist 方法更新该列表，即仅在新的列表中保留你仍希望屏蔽的用户 ID。"
  }, {
    heading: "返回值-32",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-32",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-32",
    content: "RtcEngine"
  }, {
    heading: "setsubscribevideoblocklistex",
    content: "设置视频流订阅的黑名单。"
  }, {
    heading: "setsubscribevideoblocklistex",
    content: "注："
  }, {
    heading: "setsubscribevideoblocklistex",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "setsubscribevideoblocklistex",
    content: "黑名单设置不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 的影响。"
  }, {
    heading: "setsubscribevideoblocklistex",
    content: "一旦设置了订阅黑名单，即使你离开当前频道并重新加入，该设置仍然有效。"
  }, {
    heading: "setsubscribevideoblocklistex",
    content: "如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。"
  }, {
    heading: "适用场景-14",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uidlist-7",
    content: "不希望订阅其视频流的远端用户 ID 列表。如果你希望取消订阅某个用户的视频流，请将该用户的用户 ID 添加到该列表中。如果你希望将某个用户从黑名单中移除，需要调用 setSubscribeVideoBlocklist 方法更新用户 ID 列表，即仅在新的列表中添加你不希望订阅的用户的用户 ID。"
  }, {
    heading: "connection-13",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-33",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-33",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-33",
    content: "RtcEngineEx"
  }, {
    heading: "onaudiopublishstatechanged",
    content: "音频发布状态发生变化回调。"
  }, {
    heading: "触发时机",
    content: "该回调在音频发布状态发生变化时被触发。"
  }, {
    heading: "channel",
    content: "频道名。"
  }, {
    heading: "oldstate",
    content: "之前的音频发布状态："
  }, {
    heading: "oldstate",
    content: "PUB\\_STATE\\_IDLE （0）：加入频道后的初始发布状态。"
  }, {
    heading: "oldstate",
    content: "PUB\\_STATE\\_NO\\_PUBLISHED （1）：发布本地流失败。"
  }, {
    heading: "oldstate",
    content: "PUB\\_STATE\\_PUBLISHING （2）：正在发布本地流。"
  }, {
    heading: "oldstate",
    content: "PUB\\_STATE\\_PUBLISHED （3）：成功发布本地流。"
  }, {
    heading: "newstate",
    content: "当前的音频发布状态："
  }, {
    heading: "newstate",
    content: "PUB\\_STATE\\_IDLE （0）：加入频道后的初始发布状态。"
  }, {
    heading: "newstate",
    content: "PUB\\_STATE\\_NO\\_PUBLISHED （1）：发布本地流失败。"
  }, {
    heading: "newstate",
    content: "PUB\\_STATE\\_PUBLISHING （2）：正在发布本地流。"
  }, {
    heading: "newstate",
    content: "PUB\\_STATE\\_PUBLISHED （3）：成功发布本地流。"
  }, {
    heading: "elapsesincelaststate",
    content: "从上一个状态到当前状态所经过的时间，单位为毫秒。"
  }, {
    heading: "所属接口类-34",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onaudiosubscribestatechanged",
    content: "音频订阅状态发生变化回调。"
  }, {
    heading: "onaudiosubscribestatechanged",
    content: "该回调在本地用户订阅远端音频流的状态发生变化时触发。"
  }, {
    heading: "触发时机-1",
    content: "该回调在本地用户订阅远端音频流的状态发生变化时被触发。"
  }, {
    heading: "channel-1",
    content: "频道名。"
  }, {
    heading: "uid-10",
    content: "远端用户 ID。"
  }, {
    heading: "oldstate-1",
    content: "之前的订阅状态："
  }, {
    heading: "oldstate-1",
    content: "SUB\\_STATE\\_IDLE (0)：加入频道后的初始订阅状态。"
  }, {
    heading: "oldstate-1",
    content: "SUB\\_STATE\\_NO\\_SUBSCRIBED (1)：订阅远端音频流失败。可能原因包括："
  }, {
    heading: "oldstate-1",
    content: "远端用户："
  }, {
    heading: "oldstate-1",
    content: "调用 muteLocalAudioStream(true) 停止发送本地音频流。"
  }, {
    heading: "oldstate-1",
    content: "调用 disableAudio 禁用本地音频模块。"
  }, {
    heading: "oldstate-1",
    content: "调用 enableLocalAudio(false) 禁用本地音频采集。"
  }, {
    heading: "oldstate-1",
    content: "角色为观众。"
  }, {
    heading: "oldstate-1",
    content: "本地用户："
  }, {
    heading: "oldstate-1",
    content: "调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeAudio 设为 false，表示不自动订阅任何音频流。"
  }, {
    heading: "oldstate-1",
    content: "调用 muteRemoteAudioStream 或 muteAllRemoteAudioStreams 时将 muted 设为 true，表示停止接收远端音频流。"
  }, {
    heading: "oldstate-1",
    content: "SUB\\_STATE\\_SUBSCRIBING (2)：正在订阅中。"
  }, {
    heading: "oldstate-1",
    content: "SUB\\_STATE\\_SUBSCRIBED (3)：已成功接收远端音频流。"
  }, {
    heading: "newstate-1",
    content: "当前的订阅状态："
  }, {
    heading: "newstate-1",
    content: "SUB\\_STATE\\_IDLE (0)：加入频道后的初始订阅状态。"
  }, {
    heading: "newstate-1",
    content: "SUB\\_STATE\\_NO\\_SUBSCRIBED (1)：订阅远端音频流失败。可能原因包括："
  }, {
    heading: "newstate-1",
    content: "远端用户："
  }, {
    heading: "newstate-1",
    content: "调用 muteLocalAudioStream(true) 停止发送本地音频流。"
  }, {
    heading: "newstate-1",
    content: "调用 disableAudio 禁用本地音频模块。"
  }, {
    heading: "newstate-1",
    content: "调用 enableLocalAudio(false) 禁用本地音频采集。"
  }, {
    heading: "newstate-1",
    content: "角色为观众。"
  }, {
    heading: "newstate-1",
    content: "本地用户："
  }, {
    heading: "newstate-1",
    content: "调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeAudio 设为 false，表示不自动订阅任何音频流。"
  }, {
    heading: "newstate-1",
    content: "调用 muteRemoteAudioStream 或 muteAllRemoteAudioStreams 时将 muted 设为 true，表示停止接收远端音频流。"
  }, {
    heading: "newstate-1",
    content: "SUB\\_STATE\\_SUBSCRIBING (2)：正在订阅中。"
  }, {
    heading: "newstate-1",
    content: "SUB\\_STATE\\_SUBSCRIBED (3)：已成功接收远端音频流。"
  }, {
    heading: "elapsesincelaststate-1",
    content: "从上一个状态到当前状态所经过的时间，单位为毫秒。"
  }, {
    heading: "所属接口类-35",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onvideosubscribestatechanged",
    content: "视频订阅状态发生变化回调。"
  }, {
    heading: "触发时机-2",
    content: "该回调在本地用户订阅远端视频流的状态发生变化时被触发。"
  }, {
    heading: "channel-2",
    content: "频道名。"
  }, {
    heading: "uid-11",
    content: "远端用户 ID。"
  }, {
    heading: "oldstate-2",
    content: "之前的订阅状态："
  }, {
    heading: "oldstate-2",
    content: "SUB\\_STATE\\_IDLE (0)：加入频道后的初始订阅状态。"
  }, {
    heading: "oldstate-2",
    content: "SUB\\_STATE\\_NO\\_SUBSCRIBED (1)：订阅远端流失败。可能原因包括："
  }, {
    heading: "oldstate-2",
    content: "远端用户："
  }, {
    heading: "oldstate-2",
    content: "调用 muteLocalVideoStream(true) 停止发送本地视频流。"
  }, {
    heading: "oldstate-2",
    content: "调用 disableVideo 禁用本地视频模块。"
  }, {
    heading: "oldstate-2",
    content: "调用 enableLocalVideo(false) 禁用本地视频采集。"
  }, {
    heading: "oldstate-2",
    content: "远端用户的角色为观众。"
  }, {
    heading: "oldstate-2",
    content: "本地用户："
  }, {
    heading: "oldstate-2",
    content: "在调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeVideo 设置为 false，表示不自动订阅任何视频流。"
  }, {
    heading: "oldstate-2",
    content: "调用 muteRemoteVideoStream 或 muteAllRemoteVideoStreams 并将 muted 设置为 true，表示停止接收远端视频流。"
  }, {
    heading: "oldstate-2",
    content: "SUB\\_STATE\\_SUBSCRIBING (2)：正在订阅中。"
  }, {
    heading: "oldstate-2",
    content: "SUB\\_STATE\\_SUBSCRIBED (3)：已成功接收远端流。"
  }, {
    heading: "newstate-2",
    content: "当前的订阅状态："
  }, {
    heading: "newstate-2",
    content: "SUB\\_STATE\\_IDLE (0)：加入频道后的初始订阅状态。"
  }, {
    heading: "newstate-2",
    content: "SUB\\_STATE\\_NO\\_SUBSCRIBED (1)：订阅远端流失败。可能原因包括："
  }, {
    heading: "newstate-2",
    content: "远端用户："
  }, {
    heading: "newstate-2",
    content: "调用 muteLocalVideoStream(true) 停止发送本地视频流。"
  }, {
    heading: "newstate-2",
    content: "调用 disableVideo 禁用本地视频模块。"
  }, {
    heading: "newstate-2",
    content: "调用 enableLocalVideo(false) 禁用本地视频采集。"
  }, {
    heading: "newstate-2",
    content: "远端用户的角色为观众。"
  }, {
    heading: "newstate-2",
    content: "本地用户："
  }, {
    heading: "newstate-2",
    content: "在调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeVideo 设置为 false，表示不自动订阅任何视频流。"
  }, {
    heading: "newstate-2",
    content: "调用 muteRemoteVideoStream 或 muteAllRemoteVideoStreams 并将 muted 设置为 true，表示停止接收远端视频流。"
  }, {
    heading: "newstate-2",
    content: "SUB\\_STATE\\_SUBSCRIBING (2)：正在订阅中。"
  }, {
    heading: "newstate-2",
    content: "SUB\\_STATE\\_SUBSCRIBED (3)：已成功接收远端流。"
  }, {
    heading: "elapsesincelaststate-2",
    content: "从上一个状态到当前状态所经过的时间，单位为毫秒。"
  }, {
    heading: "所属接口类-36",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "enabledualstreammode-12",
    content: "enableDualStreamMode [1/2]"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "enabledualstreammode-22",
    content: "enableDualStreamMode [2/2]"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "enabled-1",
    content: "`enabled`"
  }, {
    id: "streamconfig",
    content: "`streamConfig`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "enabledualstreammodeex",
    content: "enableDualStreamModeEx"
  }, {
    id: "废弃-2",
    content: "`废弃`"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "enabled-2",
    content: "`enabled`"
  }, {
    id: "streamconfig-1",
    content: "`streamConfig`"
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
    id: "muteallremoteaudiostreams",
    content: "muteAllRemoteAudioStreams"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "muted",
    content: "`muted`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "muteallremoteaudiostreamsex",
    content: "muteAllRemoteAudioStreamsEx"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "muted-1",
    content: "`muted`"
  }, {
    id: "connection-1",
    content: "`connection`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "muteallremotevideostreams",
    content: "muteAllRemoteVideoStreams"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "muted-2",
    content: "`muted`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "muteallremotevideostreamsex",
    content: "muteAllRemoteVideoStreamsEx"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "muted-3",
    content: "`muted`"
  }, {
    id: "connection-2",
    content: "`connection`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "mutelocalaudiostream",
    content: "muteLocalAudioStream"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "muted-4",
    content: "`muted`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "mutelocalaudiostreamex",
    content: "muteLocalAudioStreamEx"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "muted-5",
    content: "`muted`"
  }, {
    id: "connection-3",
    content: "`connection`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "mutelocalvideostream",
    content: "muteLocalVideoStream"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "muted-6",
    content: "`muted`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "mutelocalvideostreamex",
    content: "muteLocalVideoStreamEx"
  }, {
    id: "适用场景-4",
    content: "适用场景"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "muted-7",
    content: "`muted`"
  }, {
    id: "connection-4",
    content: "`connection`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "muteremoteaudiostream",
    content: "muteRemoteAudioStream"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "相关回调-2",
    content: "相关回调"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "muted-8",
    content: "`muted`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "muteremoteaudiostreamex",
    content: "muteRemoteAudioStreamEx"
  }, {
    id: "适用场景-5",
    content: "适用场景"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "muted-9",
    content: "`muted`"
  }, {
    id: "connection-5",
    content: "`connection`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "muteremotevideostream",
    content: "muteRemoteVideoStream"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "相关回调-3",
    content: "相关回调"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "uid-2",
    content: "`uid`"
  }, {
    id: "muted-10",
    content: "`muted`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "muteremotevideostreamex",
    content: "muteRemoteVideoStreamEx"
  }, {
    id: "适用场景-6",
    content: "适用场景"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "uid-3",
    content: "`uid`"
  }, {
    id: "muted-11",
    content: "`muted`"
  }, {
    id: "connection-6",
    content: "`connection`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "setdualstreammode-12",
    content: "setDualStreamMode [1/2]"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "setdualstreammode-22",
    content: "setDualStreamMode [2/2]"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "mode-1",
    content: "`mode`"
  }, {
    id: "streamconfig-2",
    content: "`streamConfig`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "setdualstreammodeex",
    content: "setDualStreamModeEx"
  }, {
    id: "适用场景-7",
    content: "适用场景"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "mode-2",
    content: "`mode`"
  }, {
    id: "streamconfig-3",
    content: "`streamConfig`"
  }, {
    id: "connection-7",
    content: "`connection`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "setremotedefaultvideostreamtype-12",
    content: "setRemoteDefaultVideoStreamType [1/2]"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "streamtype",
    content: "`streamType`"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "setremotedefaultvideostreamtype-22",
    content: "setRemoteDefaultVideoStreamType [2/2]"
  }, {
    id: "废弃-3",
    content: "`废弃`"
  }, {
    id: "调用时机-8",
    content: "调用时机"
  }, {
    id: "参数-19",
    content: "参数"
  }, {
    id: "streamtype-1",
    content: "`streamType`"
  }, {
    id: "返回值-19",
    content: "返回值"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "setremotevideostreamtype-12",
    content: "setRemoteVideoStreamType [1/2]"
  }, {
    id: "参数-20",
    content: "参数"
  }, {
    id: "uid-4",
    content: "`uid`"
  }, {
    id: "streamtype-2",
    content: "`streamType`"
  }, {
    id: "返回值-20",
    content: "返回值"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "setremotevideostreamtype-22",
    content: "setRemoteVideoStreamType [2/2]"
  }, {
    id: "废弃-4",
    content: "`废弃`"
  }, {
    id: "参数-21",
    content: "参数"
  }, {
    id: "uid-5",
    content: "`uid`"
  }, {
    id: "streamtype-3",
    content: "`streamType`"
  }, {
    id: "返回值-21",
    content: "返回值"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }, {
    id: "setremotevideostreamtypeex-12",
    content: "setRemoteVideoStreamTypeEx [1/2]"
  }, {
    id: "适用场景-8",
    content: "适用场景"
  }, {
    id: "参数-22",
    content: "参数"
  }, {
    id: "uid-6",
    content: "`uid`"
  }, {
    id: "streamtype-4",
    content: "`streamType`"
  }, {
    id: "connection-8",
    content: "`connection`"
  }, {
    id: "返回值-22",
    content: "返回值"
  }, {
    id: "所属接口类-22",
    content: "所属接口类"
  }, {
    id: "setremotevideostreamtypeex-22",
    content: "setRemoteVideoStreamTypeEx [2/2]"
  }, {
    id: "废弃-5",
    content: "`废弃`"
  }, {
    id: "适用场景-9",
    content: "适用场景"
  }, {
    id: "参数-23",
    content: "参数"
  }, {
    id: "uid-7",
    content: "`uid`"
  }, {
    id: "streamtype-5",
    content: "`streamType`"
  }, {
    id: "connection-9",
    content: "`connection`"
  }, {
    id: "返回值-23",
    content: "返回值"
  }, {
    id: "所属接口类-23",
    content: "所属接口类"
  }, {
    id: "setremotevideosubscriptionoptions",
    content: "setRemoteVideoSubscriptionOptions"
  }, {
    id: "参数-24",
    content: "参数"
  }, {
    id: "uid-8",
    content: "`uid`"
  }, {
    id: "options",
    content: "`options`"
  }, {
    id: "返回值-24",
    content: "返回值"
  }, {
    id: "所属接口类-24",
    content: "所属接口类"
  }, {
    id: "setremotevideosubscriptionoptionsex",
    content: "setRemoteVideoSubscriptionOptionsEx"
  }, {
    id: "适用场景-10",
    content: "适用场景"
  }, {
    id: "参数-25",
    content: "参数"
  }, {
    id: "uid-9",
    content: "`uid`"
  }, {
    id: "options-1",
    content: "`options`"
  }, {
    id: "rtcconnection",
    content: "`rtcConnection`"
  }, {
    id: "返回值-25",
    content: "返回值"
  }, {
    id: "所属接口类-25",
    content: "所属接口类"
  }, {
    id: "setsubscribeaudioallowlist",
    content: "setSubscribeAudioAllowlist"
  }, {
    id: "参数-26",
    content: "参数"
  }, {
    id: "uidlist",
    content: "`uidList`"
  }, {
    id: "返回值-26",
    content: "返回值"
  }, {
    id: "所属接口类-26",
    content: "所属接口类"
  }, {
    id: "setsubscribeaudioallowlistex",
    content: "setSubscribeAudioAllowlistEx"
  }, {
    id: "适用场景-11",
    content: "适用场景"
  }, {
    id: "参数-27",
    content: "参数"
  }, {
    id: "uidlist-1",
    content: "`uidList`"
  }, {
    id: "connection-10",
    content: "`connection`"
  }, {
    id: "返回值-27",
    content: "返回值"
  }, {
    id: "所属接口类-27",
    content: "所属接口类"
  }, {
    id: "setsubscribeaudioblocklist",
    content: "setSubscribeAudioBlocklist"
  }, {
    id: "参数-28",
    content: "参数"
  }, {
    id: "uidlist-2",
    content: "`uidList`"
  }, {
    id: "返回值-28",
    content: "返回值"
  }, {
    id: "所属接口类-28",
    content: "所属接口类"
  }, {
    id: "setsubscribeaudioblocklistex",
    content: "setSubscribeAudioBlocklistEx"
  }, {
    id: "适用场景-12",
    content: "适用场景"
  }, {
    id: "参数-29",
    content: "参数"
  }, {
    id: "uidlist-3",
    content: "`uidList`"
  }, {
    id: "connection-11",
    content: "`connection`"
  }, {
    id: "返回值-29",
    content: "返回值"
  }, {
    id: "所属接口类-29",
    content: "所属接口类"
  }, {
    id: "setsubscribevideoallowlist",
    content: "setSubscribeVideoAllowlist"
  }, {
    id: "参数-30",
    content: "参数"
  }, {
    id: "uidlist-4",
    content: "`uidList`"
  }, {
    id: "返回值-30",
    content: "返回值"
  }, {
    id: "所属接口类-30",
    content: "所属接口类"
  }, {
    id: "setsubscribevideoallowlistex",
    content: "setSubscribeVideoAllowlistEx"
  }, {
    id: "适用场景-13",
    content: "适用场景"
  }, {
    id: "参数-31",
    content: "参数"
  }, {
    id: "uidlist-5",
    content: "`uidList`"
  }, {
    id: "connection-12",
    content: "`connection`"
  }, {
    id: "返回值-31",
    content: "返回值"
  }, {
    id: "所属接口类-31",
    content: "所属接口类"
  }, {
    id: "setsubscribevideoblocklist",
    content: "setSubscribeVideoBlocklist"
  }, {
    id: "参数-32",
    content: "参数"
  }, {
    id: "uidlist-6",
    content: "`uidList`"
  }, {
    id: "返回值-32",
    content: "返回值"
  }, {
    id: "所属接口类-32",
    content: "所属接口类"
  }, {
    id: "setsubscribevideoblocklistex",
    content: "setSubscribeVideoBlocklistEx"
  }, {
    id: "适用场景-14",
    content: "适用场景"
  }, {
    id: "参数-33",
    content: "参数"
  }, {
    id: "uidlist-7",
    content: "`uidList`"
  }, {
    id: "connection-13",
    content: "`connection`"
  }, {
    id: "返回值-33",
    content: "返回值"
  }, {
    id: "所属接口类-33",
    content: "所属接口类"
  }, {
    id: "onaudiopublishstatechanged",
    content: "onAudioPublishStateChanged"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-34",
    content: "参数"
  }, {
    id: "channel",
    content: "`channel`"
  }, {
    id: "oldstate",
    content: "`oldState`"
  }, {
    id: "newstate",
    content: "`newState`"
  }, {
    id: "elapsesincelaststate",
    content: "`elapseSinceLastState`"
  }, {
    id: "所属接口类-34",
    content: "所属接口类"
  }, {
    id: "onaudiosubscribestatechanged",
    content: "onAudioSubscribeStateChanged"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-35",
    content: "参数"
  }, {
    id: "channel-1",
    content: "`channel`"
  }, {
    id: "uid-10",
    content: "`uid`"
  }, {
    id: "oldstate-1",
    content: "`oldState`"
  }, {
    id: "newstate-1",
    content: "`newState`"
  }, {
    id: "elapsesincelaststate-1",
    content: "`elapseSinceLastState`"
  }, {
    id: "所属接口类-35",
    content: "所属接口类"
  }, {
    id: "onvideosubscribestatechanged",
    content: "onVideoSubscribeStateChanged"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-36",
    content: "参数"
  }, {
    id: "channel-2",
    content: "`channel`"
  }, {
    id: "uid-11",
    content: "`uid`"
  }, {
    id: "oldstate-2",
    content: "`oldState`"
  }, {
    id: "newstate-2",
    content: "`newState`"
  }, {
    id: "elapsesincelaststate-2",
    content: "`elapseSinceLastState`"
  }, {
    id: "所属接口类-36",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enabledualstreammode-12",
  title: _jsx(_Fragment, {
    children: "enableDualStreamMode [1/2]"
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
  url: "#enabledualstreammode-22",
  title: _jsx(_Fragment, {
    children: "enableDualStreamMode [2/2]"
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
  url: "#参数-1",
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
  url: "#streamconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamConfig"
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
  url: "#enabledualstreammodeex",
  title: _jsx(_Fragment, {
    children: "enableDualStreamModeEx"
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
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-2",
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
  url: "#streamconfig-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamConfig"
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
  url: "#muteallremoteaudiostreams",
  title: _jsx(_Fragment, {
    children: "muteAllRemoteAudioStreams"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-3",
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
  url: "#muteallremoteaudiostreamsex",
  title: _jsx(_Fragment, {
    children: "muteAllRemoteAudioStreamsEx"
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
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#muted-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
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
  url: "#muteallremotevideostreams",
  title: _jsx(_Fragment, {
    children: "muteAllRemoteVideoStreams"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
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
  url: "#muted-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
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
  url: "#muteallremotevideostreamsex",
  title: _jsx(_Fragment, {
    children: "muteAllRemoteVideoStreamsEx"
  })
}, {
  depth: 3,
  url: "#适用场景-2",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#muted-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
    })
  })
}, {
  depth: 4,
  url: "#connection-2",
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
  url: "#mutelocalaudiostream",
  title: _jsx(_Fragment, {
    children: "muteLocalAudioStream"
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
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#muted-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
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
  url: "#mutelocalaudiostreamex",
  title: _jsx(_Fragment, {
    children: "muteLocalAudioStreamEx"
  })
}, {
  depth: 3,
  url: "#适用场景-3",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#muted-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
    })
  })
}, {
  depth: 4,
  url: "#connection-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  url: "#mutelocalvideostream",
  title: _jsx(_Fragment, {
    children: "muteLocalVideoStream"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
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
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#muted-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
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
  url: "#mutelocalvideostreamex",
  title: _jsx(_Fragment, {
    children: "muteLocalVideoStreamEx"
  })
}, {
  depth: 3,
  url: "#适用场景-4",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#muted-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
    })
  })
}, {
  depth: 4,
  url: "#connection-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  url: "#muteremoteaudiostream",
  title: _jsx(_Fragment, {
    children: "muteRemoteAudioStream"
  })
}, {
  depth: 3,
  url: "#调用时机-5",
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
  url: "#参数-11",
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
  url: "#muted-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
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
  url: "#muteremoteaudiostreamex",
  title: _jsx(_Fragment, {
    children: "muteRemoteAudioStreamEx"
  })
}, {
  depth: 3,
  url: "#适用场景-5",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-12",
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
  url: "#muted-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
    })
  })
}, {
  depth: 4,
  url: "#connection-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  url: "#muteremotevideostream",
  title: _jsx(_Fragment, {
    children: "muteRemoteVideoStream"
  })
}, {
  depth: 3,
  url: "#调用时机-6",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-3",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-13",
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
  depth: 4,
  url: "#muted-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
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
  url: "#muteremotevideostreamex",
  title: _jsx(_Fragment, {
    children: "muteRemoteVideoStreamEx"
  })
}, {
  depth: 3,
  url: "#适用场景-6",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-14",
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
  url: "#muted-11",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
    })
  })
}, {
  depth: 4,
  url: "#connection-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  url: "#setdualstreammode-12",
  title: _jsx(_Fragment, {
    children: "setDualStreamMode [1/2]"
  })
}, {
  depth: 3,
  url: "#参数-15",
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
  url: "#setdualstreammode-22",
  title: _jsx(_Fragment, {
    children: "setDualStreamMode [2/2]"
  })
}, {
  depth: 3,
  url: "#参数-16",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#streamconfig-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamConfig"
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
  url: "#setdualstreammodeex",
  title: _jsx(_Fragment, {
    children: "setDualStreamModeEx"
  })
}, {
  depth: 3,
  url: "#适用场景-7",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-17",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#streamconfig-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamConfig"
    })
  })
}, {
  depth: 4,
  url: "#connection-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  url: "#setremotedefaultvideostreamtype-12",
  title: _jsx(_Fragment, {
    children: "setRemoteDefaultVideoStreamType [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-7",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-18",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#streamtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamType"
    })
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
  url: "#setremotedefaultvideostreamtype-22",
  title: _jsx(_Fragment, {
    children: "setRemoteDefaultVideoStreamType [2/2]"
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
  url: "#调用时机-8",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-19",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#streamtype-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamType"
    })
  })
}, {
  depth: 3,
  url: "#返回值-19",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-19",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setremotevideostreamtype-12",
  title: _jsx(_Fragment, {
    children: "setRemoteVideoStreamType [1/2]"
  })
}, {
  depth: 3,
  url: "#参数-20",
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
  url: "#streamtype-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamType"
    })
  })
}, {
  depth: 3,
  url: "#返回值-20",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-20",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setremotevideostreamtype-22",
  title: _jsx(_Fragment, {
    children: "setRemoteVideoStreamType [2/2]"
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
  url: "#参数-21",
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
  url: "#streamtype-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamType"
    })
  })
}, {
  depth: 3,
  url: "#返回值-21",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-21",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setremotevideostreamtypeex-12",
  title: _jsx(_Fragment, {
    children: "setRemoteVideoStreamTypeEx [1/2]"
  })
}, {
  depth: 3,
  url: "#适用场景-8",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-22",
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
  url: "#streamtype-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamType"
    })
  })
}, {
  depth: 4,
  url: "#connection-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
    })
  })
}, {
  depth: 3,
  url: "#返回值-22",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-22",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setremotevideostreamtypeex-22",
  title: _jsx(_Fragment, {
    children: "setRemoteVideoStreamTypeEx [2/2]"
  })
}, {
  depth: 4,
  url: "#废弃-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
  })
}, {
  depth: 3,
  url: "#适用场景-9",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-23",
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
  url: "#streamtype-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamType"
    })
  })
}, {
  depth: 4,
  url: "#connection-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
    })
  })
}, {
  depth: 3,
  url: "#返回值-23",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-23",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setremotevideosubscriptionoptions",
  title: _jsx(_Fragment, {
    children: "setRemoteVideoSubscriptionOptions"
  })
}, {
  depth: 3,
  url: "#参数-24",
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
  url: "#options",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
    })
  })
}, {
  depth: 3,
  url: "#返回值-24",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-24",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setremotevideosubscriptionoptionsex",
  title: _jsx(_Fragment, {
    children: "setRemoteVideoSubscriptionOptionsEx"
  })
}, {
  depth: 3,
  url: "#适用场景-10",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-25",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uid-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#options-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
    })
  })
}, {
  depth: 4,
  url: "#rtcconnection",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rtcConnection"
    })
  })
}, {
  depth: 3,
  url: "#返回值-25",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-25",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setsubscribeaudioallowlist",
  title: _jsx(_Fragment, {
    children: "setSubscribeAudioAllowlist"
  })
}, {
  depth: 3,
  url: "#参数-26",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uidlist",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uidList"
    })
  })
}, {
  depth: 3,
  url: "#返回值-26",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-26",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setsubscribeaudioallowlistex",
  title: _jsx(_Fragment, {
    children: "setSubscribeAudioAllowlistEx"
  })
}, {
  depth: 3,
  url: "#适用场景-11",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-27",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uidlist-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uidList"
    })
  })
}, {
  depth: 4,
  url: "#connection-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
    })
  })
}, {
  depth: 3,
  url: "#返回值-27",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-27",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setsubscribeaudioblocklist",
  title: _jsx(_Fragment, {
    children: "setSubscribeAudioBlocklist"
  })
}, {
  depth: 3,
  url: "#参数-28",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uidlist-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uidList"
    })
  })
}, {
  depth: 3,
  url: "#返回值-28",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-28",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setsubscribeaudioblocklistex",
  title: _jsx(_Fragment, {
    children: "setSubscribeAudioBlocklistEx"
  })
}, {
  depth: 3,
  url: "#适用场景-12",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-29",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uidlist-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uidList"
    })
  })
}, {
  depth: 4,
  url: "#connection-11",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
    })
  })
}, {
  depth: 3,
  url: "#返回值-29",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-29",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setsubscribevideoallowlist",
  title: _jsx(_Fragment, {
    children: "setSubscribeVideoAllowlist"
  })
}, {
  depth: 3,
  url: "#参数-30",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uidlist-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uidList"
    })
  })
}, {
  depth: 3,
  url: "#返回值-30",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-30",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setsubscribevideoallowlistex",
  title: _jsx(_Fragment, {
    children: "setSubscribeVideoAllowlistEx"
  })
}, {
  depth: 3,
  url: "#适用场景-13",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-31",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uidlist-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uidList"
    })
  })
}, {
  depth: 4,
  url: "#connection-12",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
    })
  })
}, {
  depth: 3,
  url: "#返回值-31",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-31",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setsubscribevideoblocklist",
  title: _jsx(_Fragment, {
    children: "setSubscribeVideoBlocklist"
  })
}, {
  depth: 3,
  url: "#参数-32",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uidlist-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uidList"
    })
  })
}, {
  depth: 3,
  url: "#返回值-32",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-32",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setsubscribevideoblocklistex",
  title: _jsx(_Fragment, {
    children: "setSubscribeVideoBlocklistEx"
  })
}, {
  depth: 3,
  url: "#适用场景-14",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-33",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#uidlist-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uidList"
    })
  })
}, {
  depth: 4,
  url: "#connection-13",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
    })
  })
}, {
  depth: 3,
  url: "#返回值-33",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-33",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onaudiopublishstatechanged",
  title: _jsx(_Fragment, {
    children: "onAudioPublishStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-34",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#oldstate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "oldState"
    })
  })
}, {
  depth: 4,
  url: "#newstate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "newState"
    })
  })
}, {
  depth: 4,
  url: "#elapsesincelaststate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapseSinceLastState"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-34",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onaudiosubscribestatechanged",
  title: _jsx(_Fragment, {
    children: "onAudioSubscribeStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-35",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#uid-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#oldstate-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "oldState"
    })
  })
}, {
  depth: 4,
  url: "#newstate-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "newState"
    })
  })
}, {
  depth: 4,
  url: "#elapsesincelaststate-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapseSinceLastState"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-35",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onvideosubscribestatechanged",
  title: _jsx(_Fragment, {
    children: "onVideoSubscribeStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-2",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-36",
  title: _jsx(_Fragment, {
    children: "参数"
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
  depth: 4,
  url: "#uid-11",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#oldstate-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "oldState"
    })
  })
}, {
  depth: 4,
  url: "#newstate-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "newState"
    })
  })
}, {
  depth: 4,
  url: "#elapsesincelaststate-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapseSinceLastState"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-36",
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
      id: "toc_publishnsubscribe"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enabledualstreammode"
    }), `
`, _jsx(_components.h2, {
      id: "enabledualstreammode-12",
      children: "enableDualStreamMode [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "在发送端启用或禁用双流模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enabledualstreammode__prototype"
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
              children: " enableDualStreamMode"
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
              children: " enabled)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enabledualstreammode__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自 v4.2.0 版本废弃，请改用 ", _jsx(_components.code, {
        children: "setDualStreamMode"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["启用双流模式后，你可以调用 ", _jsx(_components.code, {
        children: "setRemoteVideoStreamType"
      }), " 方法，在订阅端选择接收视频大流或视频小流。 双流由以下两种视频流组成："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "视频大流：高码率、高分辨率。"
      }), `
`, _jsx(_components.li, {
        children: "视频小流：低码率、低分辨率。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法适用于发送端的所有类型视频流，包括但不限于摄像头采集的视频流、屏幕共享流和自定义采集的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要在多频道场景中启用双流模式，可以调用 enableDualStreamModeEx 方法。"
      }), `
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用该方法。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enabledualstreammode__parameters"
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
      children: "是否启用双流模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用双流模式。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）禁用双流模式。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enabledualstreammode__return_values"
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
      id: "api_irtcengine_enabledualstreammode3"
    }), `
`, _jsx(_components.h2, {
      id: "enabledualstreammode-22",
      children: "enableDualStreamMode [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置发送端的双流模式和视频小流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enabledualstreammode3__prototype"
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
              children: " enableDualStreamMode"
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
              children: " enabled, SimulcastStreamConfig streamConfig)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enabledualstreammode3__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自 v4.2.0 版本废弃，请改用 ", _jsx(_components.code, {
        children: "setDualStreamMode"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "你可以调用此方法在发送端启用或关闭双流模式。双流由一路视频大流和一路视频小流组成："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "视频大流：高码率、高分辨率。"
      }), `
`, _jsx(_components.li, {
        children: "视频小流：低码率、低分辨率。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["启用双流模式后，你可以调用 ", _jsx(_components.code, {
        children: "setRemoteVideoStreamType"
      }), " 方法，在接收端选择接收视频大流或视频小流。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法适用于发送端的所有类型视频流，包括但不限于摄像头采集的视频流、屏幕共享流和自定义采集的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要在多频道场景中启用双流模式，可以调用 enableDualStreamModeEx 方法。"
      }), `
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enabledualstreammode3__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-1",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用双流模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用双流模式。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭双流模式。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "streamconfig",
      children: _jsx(_components.code, {
        children: "streamConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频小流的配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-simulcaststreamconfig",
        children: "SimulcastStreamConfig"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当 ", _jsx(_components.code, {
            children: "mode"
          }), " 设置为 ", _jsx(_components.code, {
            children: "DISABLE_SIMULCAST_STREAM"
          }), " 时，设置 ", _jsx(_components.code, {
            children: "streamConfig"
          }), " 不生效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enabledualstreammode3__return_values"
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
      id: "api_irtcengineex_enabledualstreammodeex"
    }), `
`, _jsx(_components.h2, {
      id: "enabledualstreammodeex",
      children: "enableDualStreamModeEx"
    }), `
`, _jsx(_components.p, {
      children: "在发送端启用或关闭双流模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enabledualstreammodeex__prototype"
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
              children: " enableDualStreamModeEx"
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
              children: " enabled, SimulcastStreamConfig streamConfig, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enabledualstreammodeex__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-2",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自 v4.2.0 版本废弃。请使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
        children: "setDualStreamModeEx"
      }), " 代替。"]
    }), `
`, _jsx(_components.p, {
      children: "你可以调用此方法在发送端启用或关闭双流模式。双流由一对视频大流和视频小流组成："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "视频大流：高码率，高分辨率。"
      }), `
`, _jsx(_components.li, {
        children: "视频小流：低码率，低分辨率。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["启用双流模式后，你可以调用 ", _jsx(_components.code, {
        children: "setRemoteVideoStreamType"
      }), " 方法，在订阅端选择接收视频大流或视频小流。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法适用于发送端的所有类型视频流，包括但不限于摄像头采集的视频流、屏幕共享流和自定义采集的视频流。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enabledualstreammodeex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enabledualstreammodeex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-2",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用双流模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用双流模式。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭双流模式。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "streamconfig-1",
      children: _jsx(_components.code, {
        children: "streamConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频小流的配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-simulcaststreamconfig",
        children: "SimulcastStreamConfig"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当 ", _jsx(_components.code, {
            children: "mode"
          }), " 设置为 ", _jsx(_components.code, {
            children: "DISABLE_SIMULCAST_STREAM"
          }), " 时，设置 ", _jsx(_components.code, {
            children: "streamConfig"
          }), " 不生效。"]
        })
      })]
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
      id: "api_irtcengineex_enabledualstreammodeex__return_values"
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
      id: "api_irtcengine_muteallremoteaudiostreams"
    }), `
`, _jsx(_components.h2, {
      id: "muteallremoteaudiostreams",
      children: "muteAllRemoteAudioStreams"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复订阅所有远端用户的音频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteallremoteaudiostreams__prototype"
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
              children: " muteAllRemoteAudioStreams"
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
      id: "api_irtcengine_muteallremoteaudiostreams__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。本地用户将停止或恢复订阅所有远端用户的音频流，包括之后加入频道的用户。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你调用该方法后又调用了 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_enableaudio",
            children: "enableAudio"
          }), " 或 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#api_irtcengine_disableaudio",
            children: "disableAudio"
          }), "，以最后一次调用为准。默认情况下，加入频道时 SDK 会自动订阅所有远端用户的音频流。你可以在调用 ", _jsx(_components.code, {
            children: "joinChannel"
          }), " 加入频道时将 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
            children: "ChannelMediaOptions"
          }), " 中的 ", _jsx(_components.code, {
            children: "autoSubscribeAudio"
          }), " 设置为 false，以取消加入频道时对所有用户音频流的订阅。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteallremoteaudiostreams__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteallremoteaudiostreams__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止订阅所有远端用户的音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止订阅所有远端用户的音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）订阅所有远端用户的音频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteallremoteaudiostreams__return_values"
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
      id: "api_irtcengineex_muteallremoteaudiostreamsex"
    }), `
`, _jsx(_components.h2, {
      id: "muteallremoteaudiostreamsex",
      children: "muteAllRemoteAudioStreamsEx"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复订阅所有远端用户的音频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremoteaudiostreamsex__prototype"
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
              children: " muteAllRemoteAudioStreamsEx"
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
              children: " muted, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremoteaudiostreamsex__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremoteaudiostreamsex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremoteaudiostreamsex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请在加入频道后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果你希望在加入频道前不订阅远端用户的音频流，可以在调用 joinChannel 时将 ChannelMediaOptions 中的 autoSubscribeAudio 设置为 false。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremoteaudiostreamsex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted-1",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止订阅所有远端用户的音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止订阅所有远端用户的音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）订阅所有远端用户的音频流。"
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
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremoteaudiostreamsex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteallremotevideostreams"
    }), `
`, _jsx(_components.h2, {
      id: "muteallremotevideostreams",
      children: "muteAllRemoteVideoStreams"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复订阅所有远端用户的视频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteallremotevideostreams__prototype"
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
              children: " muteAllRemoteVideoStreams"
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
      id: "api_irtcengine_muteallremotevideostreams__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。调用该方法后，本地用户将停止或恢复订阅所有远端用户的视频流，包括之后加入频道的用户。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你调用该方法后又调用了 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
            children: "enableVideo"
          }), " 或 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo",
            children: "disableVideo"
          }), "，以最后一次调用为准。默认情况下，加入频道时 SDK 会自动订阅所有远端用户的视频流。你可以在调用 ", _jsx(_components.code, {
            children: "joinChannel"
          }), " 加入频道时将 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
            children: "ChannelMediaOptions"
          }), " 中的 ", _jsx(_components.code, {
            children: "autoSubscribeVideo"
          }), " 设置为 false，以取消加入频道时对所有用户的视频流订阅。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteallremotevideostreams__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteallremotevideostreams__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted-2",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止订阅所有远端用户的视频流。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止订阅所有远端用户的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）订阅所有远端用户的视频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteallremotevideostreams__return_values"
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
      id: "api_irtcengineex_muteallremotevideostreamsex"
    }), `
`, _jsx(_components.h2, {
      id: "muteallremotevideostreamsex",
      children: "muteAllRemoteVideoStreamsEx"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复订阅所有远端用户的视频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremotevideostreamsex__prototype"
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
              children: " muteAllRemoteVideoStreamsEx"
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
              children: " muted, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremotevideostreamsex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法后，你将停止或恢复订阅所有远端用户的视频流，包括之后加入频道的用户。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremotevideostreamsex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremotevideostreamsex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted-3",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止订阅所有远端用户的视频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止订阅所有远端用户的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：默认订阅所有远端用户的视频流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "connection-2",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteallremotevideostreamsex__return_values"
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
      id: "api_irtcengine_mutelocalaudiostream"
    }), `
`, _jsx(_components.h2, {
      id: "mutelocalaudiostream",
      children: "muteLocalAudioStream"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复发布本地采集音频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalaudiostream__prototype"
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
              children: " muteLocalAudioStream"
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
      id: "api_irtcengine_mutelocalaudiostream__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法停止发布本地音频流时，音频采集设备仍会正常工作，不受影响。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalaudiostream__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalaudiostream__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，本地会触发回调 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiopublishstatechanged",
        children: "onAudioPublishStateChanged"
      }), "；远端会触发回调 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio",
        children: "onUserMuteAudio"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
        children: "onRemoteAudioStateChanged"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalaudiostream__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted-4",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止发布本地音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止发布本地音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）恢复发布本地音频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalaudiostream__return_values"
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
      id: "api_irtcengineex_mutelocalaudiostreamex"
    }), `
`, _jsx(_components.h2, {
      id: "mutelocalaudiostreamex",
      children: "muteLocalAudioStreamEx"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复发布本地音频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalaudiostreamex__prototype"
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
              children: " muteLocalAudioStreamEx"
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
              children: " muted, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalaudiostreamex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，远端客户端会收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio",
        children: "onUserMuteAudio"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
        children: "onRemoteAudioStateChanged"
      }), " 回调。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法不会影响任何正在进行的音频录制，因为它不会禁用音频采集设备。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalaudiostreamex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalaudiostreamex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted-5",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止发布本地音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止发布本地音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）恢复发布本地音频流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "connection-3",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalaudiostreamex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalvideostream"
    }), `
`, _jsx(_components.h2, {
      id: "mutelocalvideostream",
      children: "muteLocalVideoStream"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复发布本地视频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalvideostream__prototype"
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
              children: " muteLocalVideoStream"
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
      id: "api_irtcengine_mutelocalvideostream__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法用于控制是否发布本地采集的视频流。调用该方法停止发布本地视频流时，视频采集设备仍会继续工作，不受影响。相比通过将 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo",
        children: "enableLocalVideo"
      }), " 设为 false 来关闭本地视频采集从而取消发布视频流，该方法响应更快。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalvideostream__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalvideostream__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，本地会触发回调 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onvideopublishstatechanged",
        children: "onVideoPublishStateChanged"
      }), "；远端会触发回调 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onusermutevideo",
        children: "onUserMuteVideo"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged",
        children: "onRemoteVideoStateChanged"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalvideostream__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted-6",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止发布本地视频流。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止发布本地视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）发布本地视频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_mutelocalvideostream__return_values"
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
      id: "api_irtcengineex_mutelocalvideostreamex"
    }), `
`, _jsx(_components.h2, {
      id: "mutelocalvideostreamex",
      children: "muteLocalVideoStreamEx"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复发布本地视频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalvideostreamex__prototype"
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
              children: " muteLocalVideoStreamEx"
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
              children: " muted, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalvideostreamex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，远端客户端会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onusermutevideo",
        children: "onUserMuteVideo"
      }), " 回调。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法不会影响正在进行的视频录制，因为它不会关闭摄像头。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalvideostreamex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-4",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalvideostreamex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "muted-7",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止发布本地视频流。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止发布本地视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）发布本地视频流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "connection-4",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_mutelocalvideostreamex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremoteaudiostream"
    }), `
`, _jsx(_components.h2, {
      id: "muteremoteaudiostream",
      children: "muteRemoteAudioStream"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复订阅指定远端用户的音频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremoteaudiostream__prototype"
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
              children: " muteRemoteAudioStream"
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
              children: " muted);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremoteaudiostream__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremoteaudiostream__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremoteaudiostream__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-2",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onaudiosubscribestatechanged",
        children: "onAudioSubscribeStateChanged"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremoteaudiostream__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "muted-8",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否订阅指定远端用户的音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止订阅该用户的音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：订阅该用户的音频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremoteaudiostream__return_values"
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
      id: "api_irtcengineex_muteremoteaudiostreamex"
    }), `
`, _jsx(_components.h2, {
      id: "muteremoteaudiostreamex",
      children: "muteRemoteAudioStreamEx"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复接收指定用户的音频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremoteaudiostreamex__prototype"
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
              children: " muteRemoteAudioStreamEx"
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
              children: " muted, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremoteaudiostreamex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。如果用户离开频道，方法的设置将失效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremoteaudiostreamex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-5",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremoteaudiostreamex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-1",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定用户的 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "muted-9",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止接收指定用户的音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止接收指定用户的音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）恢复接收指定用户的音频流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "connection-5",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremoteaudiostreamex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremotevideostream"
    }), `
`, _jsx(_components.h2, {
      id: "muteremotevideostream",
      children: "muteRemoteVideoStream"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复订阅指定远端用户的视频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremotevideostream__prototype"
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
              children: " muteRemoteVideoStream"
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
              children: " muted);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremotevideostream__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremotevideostream__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremotevideostream__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-3",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#callback_irtcengineeventhandler_onvideosubscribestatechanged",
        children: "onVideoSubscribeStateChanged"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremotevideostream__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-2",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "muted-10",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否订阅指定远端用户的视频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止订阅该用户的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：订阅该用户的视频流（默认）。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_muteremotevideostream__return_values"
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
      id: "api_irtcengineex_muteremotevideostreamex"
    }), `
`, _jsx(_components.h2, {
      id: "muteremotevideostreamex",
      children: "muteRemoteVideoStreamEx"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复接收指定用户的视频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremotevideostreamex__prototype"
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
              children: " muteRemoteVideoStreamEx"
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
              children: " muted, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremotevideostreamex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。如果该用户离开频道，设置将失效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremotevideostreamex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-6",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremotevideostreamex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-3",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "muted-11",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止接收指定用户的视频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止接收指定用户的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）恢复接收指定用户的视频流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "connection-6",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_muteremotevideostreamex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdualstreammode"
    }), `
`, _jsx(_components.h2, {
      id: "setdualstreammode-12",
      children: "setDualStreamMode [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置发送端的视频流模式，用于控制是否发送视频小流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdualstreammode__prototype"
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
              children: " setDualStreamMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.SimulcastStreamMode mode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdualstreammode__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法设置发送端的视频流模式。 SDK 默认在发送端启用视频小流自适应模式（", _jsx(_components.code, {
        children: "AUTO_SIMULCAST_STREAM"
      }), " ），即发送端不会主动发送视频小流。角色为主播的接收端可以通过调用 ", _jsx(_components.code, {
        children: "setRemoteVideoStreamType"
      }), " 发起视频小流请求，发送端在收到请求后会自动开始发送视频小流。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你希望修改此行为，可以调用该方法并将 mode 设置为 DISABLE_SIMULCAST_STREAM （从不发送视频小流）或 ENABLE_SIMULCAST_STREAM （始终发送视频小流）。"
      }), `
`, _jsx(_components.li, {
        children: "如果你希望恢复默认行为，可以再次调用该方法并将 mode 设置为 AUTO_SIMULCAST_STREAM。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["注： 该方法与 ", _jsx(_components.code, {
        children: "enableDualStreamMode"
      }), " 的区别如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当调用该方法并将 mode 设置为 DISABLE_SIMULCAST_STREAM 时，效果等同于调用 enableDualStreamMode(false)。"
      }), `
`, _jsx(_components.li, {
        children: "当调用该方法并将 mode 设置为 ENABLE_SIMULCAST_STREAM 时，效果等同于调用 enableDualStreamMode(true)。"
      }), `
`, _jsx(_components.li, {
        children: "两个方法都可以在加入频道前或后调用。如果两个方法都被调用，则以后调用的方法设置优先生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdualstreammode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["发送视频流的模式。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-simulcaststreammode",
        children: "SimulcastStreamMode"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdualstreammode__return_values"
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
      id: "api_irtcengine_setdualstreammode2"
    }), `
`, _jsx(_components.h2, {
      id: "setdualstreammode-22",
      children: "setDualStreamMode [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置发送端的不同质量层级的视频流模式配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdualstreammode2__prototype"
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
              children: " setDualStreamMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdualstreammode2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 默认在发送端开启视频小流自适应模式（", _jsx(_components.code, {
        children: "AUTO_SIMULCAST_STREAM"
      }), " ），即发送端不会主动发送视频小流。角色为主播的接收端可以通过调用 ", _jsx(_components.code, {
        children: "setRemoteVideoStreamType"
      }), " 发起视频小流请求，发送端在收到请求后会自动开始发送视频小流。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你希望修改该行为，可以调用该方法，并将 mode 设置为 DISABLE_SIMULCAST_STREAM （从不发送视频小流）或 ENABLE_SIMULCAST_STREAM （始终发送视频小流）。"
      }), `
`, _jsx(_components.li, {
        children: "如果你希望恢复默认行为，可以再次调用该方法，并将 mode 设置为 AUTO_SIMULCAST_STREAM。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["注： 该方法与 ", _jsx(_components.code, {
        children: "enableDualStreamMode"
      }), " 的区别如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当调用该方法并将 mode 设置为 DISABLE_SIMULCAST_STREAM 时，效果等同于调用 enableDualStreamMode 并将 enabled 设置为 false。"
      }), `
`, _jsx(_components.li, {
        children: "当调用该方法并将 mode 设置为 ENABLE_SIMULCAST_STREAM 时，效果等同于调用 enableDualStreamMode 并将 enabled 设置为 true。"
      }), `
`, _jsx(_components.li, {
        children: "两个方法都可以在加入频道前或后调用。如果两个方法都被调用，则以后调用的方法设置优先生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdualstreammode2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode-1",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["发送视频流的模式，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-simulcaststreammode",
        children: "SimulcastStreamMode"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "streamconfig-2",
      children: _jsx(_components.code, {
        children: "streamConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频小流的配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-simulcaststreamconfig",
        children: "SimulcastStreamConfig"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当 ", _jsx(_components.code, {
            children: "mode"
          }), " 设置为 ", _jsx(_components.code, {
            children: "DISABLE_SIMULCAST_STREAM"
          }), " 时，设置该参数无效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setdualstreammode2__return_values"
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
        }), "了解详情和解决建议。"]
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
      id: "api_irtcengineex_setdualstreammodeex"
    }), `
`, _jsx(_components.h2, {
      id: "setdualstreammodeex",
      children: "setDualStreamModeEx"
    }), `
`, _jsx(_components.p, {
      children: "设置发送端的视频流模式，用于控制是否发送视频小流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setdualstreammodeex__prototype"
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
              children: " setDualStreamModeEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setdualstreammodeex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["SDK 默认在发送端开启视频小流自适应模式（", _jsx(_components.code, {
        children: "AUTO_SIMULCAST_STREAM"
      }), " ）。角色为主播的接收端可以通过调用 ", _jsx(_components.code, {
        children: "setRemoteVideoStreamTypeEx"
      }), " 发起视频小流请求，发送端在收到请求后会自动开始发送视频小流。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你希望修改此行为，可以调用该方法并将 mode 设置为 DISABLE_SIMULCAST_STREAM （从不发送视频小流）或 ENABLE_SIMULCAST_STREAM （始终发送视频小流）。"
      }), `
`, _jsx(_components.li, {
        children: "如果你希望恢复默认行为，可以再次调用该方法并将 mode 设置为 AUTO_SIMULCAST_STREAM。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["注： 该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_enabledualstreammodeex",
        children: "enableDualStreamModeEx"
      }), " 的区别如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "将 mode 设置为 DISABLE_SIMULCAST_STREAM 时，效果等同于调用 enableDualStreamModeEx(false)。"
      }), `
`, _jsx(_components.li, {
        children: "将 mode 设置为 ENABLE_SIMULCAST_STREAM 时，效果等同于调用 enableDualStreamModeEx(true)。"
      }), `
`, _jsx(_components.li, {
        children: "两个方法均可在加入频道前或后调用。如果两个方法都被调用，则以后调用的方法设置优先生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setdualstreammodeex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-7",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setdualstreammodeex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode-2",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频流发送模式。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-simulcaststreammode",
        children: "SimulcastStreamMode"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "streamconfig-3",
      children: _jsx(_components.code, {
        children: "streamConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频小流的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-simulcaststreamconfig",
        children: "SimulcastStreamConfig"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当 ", _jsx(_components.code, {
            children: "mode"
          }), " 设置为 ", _jsx(_components.code, {
            children: "DISABLE_SIMULCAST_STREAM"
          }), " 时，该参数不生效。"]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "connection-7",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setdualstreammodeex__return_values"
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
        }), "了解详情和解决建议。"]
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype"
    }), `
`, _jsx(_components.h2, {
      id: "setremotedefaultvideostreamtype-12",
      children: "setRemoteDefaultVideoStreamType [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置默认订阅的视频流类型。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype__prototype"
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
              children: " setRemoteDefaultVideoStreamType"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoStreamType streamType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["根据发送端的默认行为以及调用 ", _jsx(_components.code, {
        children: "setDualStreamMode"
      }), " 时的具体设置，接收端调用该方法的场景如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SDK 默认在发送端开启视频小流自适应模式（AUTO_SIMULCAST_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为订阅视频小流模式。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE_SIMULCAST_STREAM （从不发送视频小流），则调用该方法无效。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE_SIMULCAST_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为订阅视频小流模式。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果同时调用该方法和 ", _jsx(_components.code, {
            children: "setRemoteVideoStreamType"
          }), "，则以 ", _jsx(_components.code, {
            children: "setRemoteVideoStreamType"
          }), " 的设置为准。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用该方法。SDK 不支持在加入频道后更改默认订阅的视频流类型。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "streamtype",
      children: _jsx(_components.code, {
        children: "streamType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频流类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videostreamtype",
        children: "VideoStreamType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype__return_values"
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
      id: "api_irtcengine_setremotedefaultvideostreamtype2"
    }), `
`, _jsx(_components.h2, {
      id: "setremotedefaultvideostreamtype-22",
      children: "setRemoteDefaultVideoStreamType [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置默认订阅的视频流类型。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype2__prototype"
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
              children: " setRemoteDefaultVideoStreamType"
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
              children: " streamType)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-3",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setremotedefaultvideostreamtype",
        children: "setRemoteDefaultVideoStreamType [1/2]"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["根据发送端的默认行为以及调用 ", _jsx(_components.code, {
        children: "setDualStreamMode"
      }), " 时的具体设置，接收端调用该方法的场景如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SDK 默认在发送端启用视频小流自适应模式（AUTO_SIMULCAST_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为订阅视频小流模式。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE_SIMULCAST_STREAM （从不发送视频小流），则调用该方法无效。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE_SIMULCAST_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为订阅视频小流模式。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果同时调用该方法和 ", _jsx(_components.code, {
            children: "setRemoteVideoStreamType"
          }), "，则以 ", _jsx(_components.code, {
            children: "setRemoteVideoStreamType"
          }), " 的设置为准。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-8",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用该方法。SDK 不支持在加入频道后更改默认订阅的视频流类型。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-19",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "streamtype-1",
      children: _jsx(_components.code, {
        children: "streamType"
      })
    }), `
`, _jsx(_components.p, {
      children: "默认订阅的视频流类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_STREAM_HIGH （0）：视频大流，即高分辨率和高码率的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_STREAM_LOW （1）：视频小流，即低分辨率和低码率的视频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotedefaultvideostreamtype2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-19",
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
      id: "所属接口类-19",
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
      id: "api_irtcengine_setremotevideostreamtype"
    }), `
`, _jsx(_components.h2, {
      id: "setremotevideostreamtype-12",
      children: "setRemoteVideoStreamType [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置要订阅的视频流类型。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideostreamtype__prototype"
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
              children: " setRemoteVideoStreamType"
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
              children: " uid, Constants.VideoStreamType streamType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideostreamtype__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["根据发送端的默认行为以及调用 ", _jsx(_components.code, {
        children: "setDualStreamMode"
      }), " 时的具体设置，接收端调用该方法的场景如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SDK 默认在发送端开启视频小流自适应模式（AUTO_SIMULCAST_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为订阅视频小流模式。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE_SIMULCAST_STREAM （从不发送视频小流），则调用该方法无效。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE_SIMULCAST_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为订阅视频小流模式。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "可以在加入频道前或加入频道后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果同时调用该方法和 setRemoteDefaultVideoStreamType，则以该方法的设置为准。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideostreamtype__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-20",
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
      id: "streamtype-2",
      children: _jsx(_components.code, {
        children: "streamType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频流类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videostreamtype",
        children: "VideoStreamType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideostreamtype__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-20",
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
      id: "所属接口类-20",
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
      id: "api_irtcengine_setremotevideostreamtype2"
    }), `
`, _jsx(_components.h2, {
      id: "setremotevideostreamtype-22",
      children: "setRemoteVideoStreamType [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置要订阅的视频流类型。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideostreamtype2__prototype"
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
              children: " setRemoteVideoStreamType"
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
              children: " streamType)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideostreamtype2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-4",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.code, {
        children: "setRemoteVideoStreamType(int uid, Constants.VideoStreamType streamType)"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["根据发送端的默认行为以及调用 ", _jsx(_components.code, {
        children: "setDualStreamMode"
      }), " 时的具体设置，接收端调用此方法的场景如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SDK 默认在发送端启用视频小流自适应模式（AUTO_SIMULCAST_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用此方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户都可以调用此方法切换为订阅视频小流模式。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE_SIMULCAST_STREAM （从不发送视频小流），则调用此方法无效。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE_SIMULCAST_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用此方法切换为订阅视频小流模式。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流相同。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "可以在加入频道前或后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果同时调用此方法和 setRemoteDefaultVideoStreamType，则以此方法的设置为准。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideostreamtype2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-21",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-5",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "streamtype-3",
      children: _jsx(_components.code, {
        children: "streamType"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：视频大流。"
      }), `
`, _jsx(_components.li, {
        children: "1：视频小流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideostreamtype2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-21",
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
      id: "所属接口类-21",
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
      id: "api_irtcengineex_setremotevideostreamtypeex"
    }), `
`, _jsx(_components.h2, {
      id: "setremotevideostreamtypeex-12",
      children: "setRemoteVideoStreamTypeEx [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置要订阅的视频流类型。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideostreamtypeex__prototype"
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
              children: " setRemoteVideoStreamTypeEx"
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
              children: " uid, Constants.VideoStreamType streamType, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideostreamtypeex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["根据发送端的默认行为以及调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
        children: "setDualStreamModeEx"
      }), " 时的具体设置，接收端调用该方法的场景如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SDK 默认在发送端开启视频小流自适应模式（AUTO_SIMULCAST_STREAM ），即仅发送视频大流。此时，仅角色为 Host 的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求后，会自动开始发送视频小流。此时，频道内所有用户均可调用该方法切换为视频小流订阅模式。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE_SIMULCAST_STREAM （从不发送视频小流），则调用该方法无效。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE_SIMULCAST_STREAM （始终发送视频小流），则 Host 和 Audience 角色的接收端均可调用该方法切换为视频小流订阅模式。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果发送端已调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
            children: "setDualStreamModeEx"
          }), " 并将 ", _jsx(_components.code, {
            children: "mode"
          }), " 设置为 ", _jsx(_components.code, {
            children: "DISABLE_SIMULCAST_STREAM"
          }), "，则调用该方法无效。你需要在发送端再次调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
            children: "setDualStreamModeEx"
          }), " 并调整设置。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideostreamtypeex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-8",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideostreamtypeex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-22",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-6",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "streamtype-4",
      children: _jsx(_components.code, {
        children: "streamType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频流类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videostreamtype",
        children: "VideoStreamType"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "connection-8",
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
      id: "api_irtcengineex_setremotevideostreamtypeex__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-22",
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
      id: "所属接口类-22",
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
      id: "api_irtcengineex_setremotevideostreamtypeex2"
    }), `
`, _jsx(_components.h2, {
      id: "setremotevideostreamtypeex-22",
      children: "setRemoteVideoStreamTypeEx [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置要订阅的视频流类型。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideostreamtypeex2__prototype"
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
              children: " setRemoteVideoStreamTypeEx"
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
              children: " streamType, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideostreamtypeex2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-5",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setremotevideostreamtypeex",
        children: "setRemoteVideoStreamTypeEx [1/2]"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["根据发送端的默认行为以及调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
        children: "setDualStreamModeEx"
      }), " 时的具体设置，接收端调用该方法的场景如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SDK 默认在发送端启用视频小流自适应模式（AUTO_SIMULCAST_STREAM ），即仅发送视频大流。只有角色为主播的接收端可以调用该方法发起视频小流请求。一旦发送端收到请求，会自动开始发送视频小流。此时，频道内所有用户都可以调用该方法切换为视频小流订阅模式。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 DISABLE_SIMULCAST_STREAM （从不发送视频小流），则调用该方法无效。"
      }), `
`, _jsx(_components.li, {
        children: "如果发送端调用 setDualStreamMode 并将 mode 设置为 ENABLE_SIMULCAST_STREAM （始终发送视频小流），则主播和观众角色的接收端都可以调用该方法切换为视频小流订阅模式。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "SDK 会根据视频窗口的大小动态调整对应视频流的尺寸，以节省带宽和计算资源。视频小流的默认宽高比与视频大流一致。系统会根据当前视频大流的宽高比，自动分配视频小流的分辨率、帧率和码率。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果发送端已调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
            children: "setDualStreamModeEx"
          }), " 并将 ", _jsx(_components.code, {
            children: "mode"
          }), " 设置为 ", _jsx(_components.code, {
            children: "DISABLE_SIMULCAST_STREAM"
          }), " （从不发送视频小流），则调用该方法无效。你应在发送端重新调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengineex_setdualstreammodeex",
            children: "setDualStreamModeEx"
          }), " 并调整设置。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideostreamtypeex2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-9",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideostreamtypeex2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-23",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-7",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "streamtype-5",
      children: _jsx(_components.code, {
        children: "streamType"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：视频大流。"
      }), `
`, _jsx(_components.li, {
        children: "1：视频小流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "connection-9",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideostreamtypeex2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-23",
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
      id: "所属接口类-23",
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
      id: "api_irtcengine_setremotevideosubscriptionoptions"
    }), `
`, _jsx(_components.h2, {
      id: "setremotevideosubscriptionoptions",
      children: "setRemoteVideoSubscriptionOptions"
    }), `
`, _jsx(_components.p, {
      children: "设置订阅远端视频流的选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideosubscriptionoptions__prototype"
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
              children: " setRemoteVideoSubscriptionOptions"
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
              children: " uid, VideoSubscriptionOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideosubscriptionoptions__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法设置订阅远端用户发送的视频流的选项，适用于远端用户开启双流模式的场景。SDK 默认的远端视频流订阅行为取决于注册的视频观察器类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果注册了 IVideoFrameObserver 观察器，默认订阅原始数据和编码数据；"
      }), `
`, _jsx(_components.li, {
        children: "如果注册了 IVideoEncodedFrameObserver 观察器，默认仅订阅编码数据；"
      }), `
`, _jsx(_components.li, {
        children: "如果同时注册了两种观察器，默认行为遵循最后注册的视频观察器。例如，如果最后注册的是 IVideoFrameObserver，则默认订阅原始数据和编码数据。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "如果你希望修改默认行为，或为不同的用户 ID 设置不同的订阅选项，可以调用该方法进行设置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideosubscriptionoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-24",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-8",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "options",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频订阅选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videosubscriptionoptions",
        children: "VideoSubscriptionOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotevideosubscriptionoptions__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-24",
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
      id: "所属接口类-24",
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
      id: "api_irtcengineex_setremotevideosubscriptionoptionsex"
    }), `
`, _jsx(_components.h2, {
      id: "setremotevideosubscriptionoptionsex",
      children: "setRemoteVideoSubscriptionOptionsEx"
    }), `
`, _jsx(_components.p, {
      children: "设置订阅远端视频流的选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideosubscriptionoptionsex__prototype"
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
              children: " setRemoteVideoSubscriptionOptionsEx"
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
              children: " uid, VideoSubscriptionOptions options, RtcConnection rtcConnection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideosubscriptionoptionsex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。当远端用户开启双流模式时，你可以调用该方法设置订阅该远端用户发送的视频流的选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideosubscriptionoptionsex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-10",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideosubscriptionoptionsex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-25",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-9",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "options-1",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频订阅选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videosubscriptionoptions",
        children: "VideoSubscriptionOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "rtcconnection",
      children: _jsx(_components.code, {
        children: "rtcConnection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremotevideosubscriptionoptionsex__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-25",
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
      id: "所属接口类-25",
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
      id: "api_irtcengine_setsubscribeaudioallowlist"
    }), `
`, _jsx(_components.h2, {
      id: "setsubscribeaudioallowlist",
      children: "setSubscribeAudioAllowlist"
    }), `
`, _jsx(_components.p, {
      children: "设置音频流订阅的白名单。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribeaudioallowlist__prototype"
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
              children: " setSubscribeAudioAllowlist"
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
              children: "[] uidList);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribeaudioallowlist__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "白名单不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中 autoSubscribeAudio 设置的影响。"
      }), `
`, _jsx(_components.li, {
        children: "一旦设置了订阅白名单，即使你离开当前频道并重新加入频道，该设置仍然有效。"
      }), `
`, _jsx(_components.li, {
        children: "如果某个用户同时被添加到白名单和黑名单中，则仅黑名单生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribeaudioallowlist__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-26",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uidlist",
      children: _jsx(_components.code, {
        children: "uidList"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["你希望订阅的用户 ID 列表。调用该方法时，仅订阅该列表中用户的音频流。如果你希望将某个用户从白名单中移除，需要重新调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioallowlist",
        children: "setSubscribeAudioAllowlist"
      }), " 方法，并在新的列表中仅包含你希望订阅的用户 ID。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribeaudioallowlist__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-26",
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
      id: "所属接口类-26",
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
      id: "api_irtcengineex_setsubscribeaudioallowlistex"
    }), `
`, _jsx(_components.h2, {
      id: "setsubscribeaudioallowlistex",
      children: "setSubscribeAudioAllowlistEx"
    }), `
`, _jsx(_components.p, {
      children: "设置音频流订阅的白名单。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribeaudioallowlistex__prototype"
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
              children: " setSubscribeAudioAllowlistEx"
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
              children: "[] uidList, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribeaudioallowlistex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "白名单不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中 autoSubscribeAudio 设置的影响。"
      }), `
`, _jsx(_components.li, {
        children: "一旦设置了订阅白名单，即使你离开当前频道并重新加入，该设置仍然有效。"
      }), `
`, _jsx(_components.li, {
        children: "如果某个用户同时被添加到白名单和黑名单中，则以黑名单为准。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribeaudioallowlistex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-11",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribeaudioallowlistex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-27",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uidlist-1",
      children: _jsx(_components.code, {
        children: "uidList"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["你想要订阅的用户 ID 列表。如果你希望将某个用户从白名单中移除，需要调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribeaudioallowlist",
        children: "setSubscribeAudioAllowlist"
      }), " 方法更新用户 ID 列表；也就是说，你只需在新的用户 ID 列表中添加你希望订阅的用户的用户 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "connection-10",
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
      id: "api_irtcengineex_setsubscribeaudioallowlistex__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-27",
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
      id: "所属接口类-27",
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
      id: "api_irtcengine_setsubscribeaudioblocklist"
    }), `
`, _jsx(_components.h2, {
      id: "setsubscribeaudioblocklist",
      children: "setSubscribeAudioBlocklist"
    }), `
`, _jsx(_components.p, {
      children: "设置音频流订阅的黑名单。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribeaudioblocklist__prototype"
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
              children: " setSubscribeAudioBlocklist"
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
              children: "[] uidList);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribeaudioblocklist__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "黑名单不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中 autoSubscribeAudio 设置的影响。"
      }), `
`, _jsx(_components.li, {
        children: "一旦设置了订阅黑名单，即使你离开当前频道并重新加入频道，该设置仍然有效。"
      }), `
`, _jsx(_components.li, {
        children: "如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribeaudioblocklist__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-28",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uidlist-2",
      children: _jsx(_components.code, {
        children: "uidList"
      })
    }), `
`, _jsx(_components.p, {
      children: "不希望订阅其音频流的用户 ID 列表。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你希望将某个用户从黑名单中移除，需要调用 setSubscribeAudioBlocklist 方法更新用户 ID 列表，即在新的列表中仅保留不希望订阅的用户 ID。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribeaudioblocklist__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-28",
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
      id: "所属接口类-28",
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
      id: "api_irtcengineex_setsubscribeaudioblocklistex"
    }), `
`, _jsx(_components.h2, {
      id: "setsubscribeaudioblocklistex",
      children: "setSubscribeAudioBlocklistEx"
    }), `
`, _jsx(_components.p, {
      children: "设置音频流订阅的黑名单。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribeaudioblocklistex__prototype"
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
              children: " setSubscribeAudioBlocklistEx"
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
              children: "[] uidList, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribeaudioblocklistex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法指定不希望订阅的用户的音频流。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "黑名单设置不受 muteRemoteAudioStream、 muteAllRemoteAudioStreams 和 ChannelMediaOptions 中的 autoSubscribeAudio 的影响。"
      }), `
`, _jsx(_components.li, {
        children: "一旦设置了订阅黑名单，即使离开当前频道并重新加入频道，该设置仍然有效。"
      }), `
`, _jsx(_components.li, {
        children: "如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribeaudioblocklistex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-12",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribeaudioblocklistex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-29",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uidlist-3",
      children: _jsx(_components.code, {
        children: "uidList"
      })
    }), `
`, _jsx(_components.p, {
      children: "不希望订阅其音频流的用户 ID 列表。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你希望不订阅某个用户的音频流，请将该用户的 ID 添加到该列表中。"
      }), `
`, _jsx(_components.li, {
        children: "如果你希望将某个用户从黑名单中移除，需要调用 setSubscribeAudioBlocklist 方法更新用户 ID 列表；即你只需在新的用户 ID 列表中添加不希望订阅的用户 ID。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "connection-11",
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
      id: "api_irtcengineex_setsubscribeaudioblocklistex__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-29",
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
      id: "所属接口类-29",
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
      id: "api_irtcengine_setsubscribevideoallowlist"
    }), `
`, _jsx(_components.h2, {
      id: "setsubscribevideoallowlist",
      children: "setSubscribeVideoAllowlist"
    }), `
`, _jsx(_components.p, {
      children: "设置视频流订阅的白名单。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribevideoallowlist__prototype"
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
              children: " setSubscribeVideoAllowlist"
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
              children: "[] uidList);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribevideoallowlist__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "白名单不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 设置的影响。"
      }), `
`, _jsx(_components.li, {
        children: "一旦设置了订阅白名单，即使你离开当前频道并重新加入，该设置仍然有效。"
      }), `
`, _jsx(_components.li, {
        children: "如果某个用户同时被添加到白名单和黑名单中，则仅黑名单生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribevideoallowlist__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-30",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uidlist-4",
      children: _jsx(_components.code, {
        children: "uidList"
      })
    }), `
`, _jsx(_components.p, {
      children: "希望订阅的视频流所属用户的用户 ID 列表。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你希望订阅某个用户的视频流，请将该用户的用户 ID 添加到该列表中。"
      }), `
`, _jsx(_components.li, {
        children: "如果你希望将某个用户从白名单中移除，需要调用 setSubscribeVideoAllowlist 方法更新用户 ID 列表，即在新的用户 ID 列表中仅包含你希望订阅的用户的用户 ID。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribevideoallowlist__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-30",
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
      id: "所属接口类-30",
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
      id: "api_irtcengineex_setsubscribevideoallowlistex"
    }), `
`, _jsx(_components.h2, {
      id: "setsubscribevideoallowlistex",
      children: "setSubscribeVideoAllowlistEx"
    }), `
`, _jsx(_components.p, {
      children: "设置视频流订阅的白名单。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoallowlistex__prototype"
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
              children: " setSubscribeVideoAllowlistEx"
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
              children: "[] uidList, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoallowlistex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "白名单不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 设置的影响。"
      }), `
`, _jsx(_components.li, {
        children: "一旦设置了订阅白名单，即使离开当前频道并重新加入频道，白名单依然有效。"
      }), `
`, _jsx(_components.li, {
        children: "如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoallowlistex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-13",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoallowlistex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-31",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uidlist-5",
      children: _jsx(_components.code, {
        children: "uidList"
      })
    }), `
`, _jsx(_components.p, {
      children: "希望订阅的视频流所属用户的用户 ID 列表。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你希望订阅某个用户的视频流，请将该用户的用户 ID 添加到该列表中。"
      }), `
`, _jsx(_components.li, {
        children: "如果你希望将某个用户从白名单中移除，需要调用 setSubscribeVideoAllowlist 方法更新用户 ID 列表；这意味着你只需在新的用户 ID 列表中添加希望订阅的用户的用户 ID。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "connection-12",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoallowlistex__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-31",
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
      id: "所属接口类-31",
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
      id: "api_irtcengine_setsubscribevideoblocklist"
    }), `
`, _jsx(_components.h2, {
      id: "setsubscribevideoblocklist",
      children: "setSubscribeVideoBlocklist"
    }), `
`, _jsx(_components.p, {
      children: "设置视频流订阅的阻止名单。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribevideoblocklist__prototype"
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
              children: " setSubscribeVideoBlocklist"
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
              children: "[] uidList);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribevideoblocklist__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "阻止名单不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 的设置影响。"
      }), `
`, _jsx(_components.li, {
        children: "一旦设置了订阅的阻止名单，即使你离开当前频道并重新加入频道，该设置仍然有效。"
      }), `
`, _jsx(_components.li, {
        children: "如果某个用户同时被添加到允许名单和阻止名单中，则仅阻止名单生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribevideoblocklist__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-32",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uidlist-6",
      children: _jsx(_components.code, {
        children: "uidList"
      })
    }), `
`, _jsx(_components.p, {
      children: "不希望订阅其视频流的用户 ID 列表。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你希望屏蔽某个用户的视频流，请将该用户的用户 ID 添加到该列表中。"
      }), `
`, _jsx(_components.li, {
        children: "如果你希望将某个用户从阻止名单中移除，需要调用 setSubscribeVideoBlocklist 方法更新该列表，即仅在新的列表中保留你仍希望屏蔽的用户 ID。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setsubscribevideoblocklist__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-32",
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
      id: "所属接口类-32",
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
      id: "api_irtcengineex_setsubscribevideoblocklistex"
    }), `
`, _jsx(_components.h2, {
      id: "setsubscribevideoblocklistex",
      children: "setSubscribeVideoBlocklistEx"
    }), `
`, _jsx(_components.p, {
      children: "设置视频流订阅的黑名单。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoblocklistex__prototype"
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
              children: " setSubscribeVideoBlocklistEx"
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
              children: "[] uidList, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoblocklistex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "黑名单设置不受 muteRemoteVideoStream、 muteAllRemoteVideoStreams 和 ChannelMediaOptions 中的 autoSubscribeVideo 的影响。"
      }), `
`, _jsx(_components.li, {
        children: "一旦设置了订阅黑名单，即使你离开当前频道并重新加入，该设置仍然有效。"
      }), `
`, _jsx(_components.li, {
        children: "如果某个用户同时被加入白名单和黑名单，则仅黑名单生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoblocklistex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-14",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoblocklistex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-33",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uidlist-7",
      children: _jsx(_components.code, {
        children: "uidList"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["不希望订阅其视频流的远端用户 ID 列表。如果你希望取消订阅某个用户的视频流，请将该用户的用户 ID 添加到该列表中。如果你希望将某个用户从黑名单中移除，需要调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_setsubscribevideoblocklist",
        children: "setSubscribeVideoBlocklist"
      }), " 方法更新用户 ID 列表，即仅在新的列表中添加你不希望订阅的用户的用户 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "connection-13",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setsubscribevideoblocklistex__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-33",
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
      id: "所属接口类-33",
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
      id: "callback_irtcengineeventhandler_onaudiopublishstatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onaudiopublishstatechanged",
      children: "onAudioPublishStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "音频发布状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiopublishstatechanged__prototype"
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
              children: " onAudioPublishStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String channel, "
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
              children: " oldState, "
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
              children: " newState, "
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
              children: " elapseSinceLastState)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiopublishstatechanged__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiopublishstatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在音频发布状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiopublishstatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-34",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channel",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。"
    }), `
`, _jsx(_components.h4, {
      id: "oldstate",
      children: _jsx(_components.code, {
        children: "oldState"
      })
    }), `
`, _jsx(_components.p, {
      children: "之前的音频发布状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "PUB_STATE_IDLE （0）：加入频道后的初始发布状态。"
      }), `
`, _jsx(_components.li, {
        children: "PUB_STATE_NO_PUBLISHED （1）：发布本地流失败。"
      }), `
`, _jsx(_components.li, {
        children: "PUB_STATE_PUBLISHING （2）：正在发布本地流。"
      }), `
`, _jsx(_components.li, {
        children: "PUB_STATE_PUBLISHED （3）：成功发布本地流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "newstate",
      children: _jsx(_components.code, {
        children: "newState"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前的音频发布状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "PUB_STATE_IDLE （0）：加入频道后的初始发布状态。"
      }), `
`, _jsx(_components.li, {
        children: "PUB_STATE_NO_PUBLISHED （1）：发布本地流失败。"
      }), `
`, _jsx(_components.li, {
        children: "PUB_STATE_PUBLISHING （2）：正在发布本地流。"
      }), `
`, _jsx(_components.li, {
        children: "PUB_STATE_PUBLISHED （3）：成功发布本地流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "elapsesincelaststate",
      children: _jsx(_components.code, {
        children: "elapseSinceLastState"
      })
    }), `
`, _jsx(_components.p, {
      children: "从上一个状态到当前状态所经过的时间，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-34",
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
      id: "callback_irtcengineeventhandler_onaudiosubscribestatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onaudiosubscribestatechanged",
      children: "onAudioSubscribeStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "音频订阅状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiosubscribestatechanged__prototype"
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
              children: " onAudioSubscribeStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String channel, "
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
              children: " oldState, "
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
              children: " newState, "
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
              children: " elapseSinceLastState)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiosubscribestatechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地用户订阅远端音频流的状态发生变化时触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiosubscribestatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地用户订阅远端音频流的状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudiosubscribestatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-35",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channel-1",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。"
    }), `
`, _jsx(_components.h4, {
      id: "uid-10",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "oldstate-1",
      children: _jsx(_components.code, {
        children: "oldState"
      })
    }), `
`, _jsx(_components.p, {
      children: "之前的订阅状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SUB_STATE_IDLE (0)：加入频道后的初始订阅状态。"
      }), `
`, _jsxs(_components.li, {
        children: ["SUB_STATE_NO_SUBSCRIBED (1)：订阅远端音频流失败。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["远端用户：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "调用 muteLocalAudioStream(true) 停止发送本地音频流。"
              }), `
`, _jsx(_components.li, {
                children: "调用 disableAudio 禁用本地音频模块。"
              }), `
`, _jsx(_components.li, {
                children: "调用 enableLocalAudio(false) 禁用本地音频采集。"
              }), `
`, _jsx(_components.li, {
                children: "角色为观众。"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["本地用户：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeAudio 设为 false，表示不自动订阅任何音频流。"
              }), `
`, _jsx(_components.li, {
                children: "调用 muteRemoteAudioStream 或 muteAllRemoteAudioStreams 时将 muted 设为 true，表示停止接收远端音频流。"
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "SUB_STATE_SUBSCRIBING (2)：正在订阅中。"
      }), `
`, _jsx(_components.li, {
        children: "SUB_STATE_SUBSCRIBED (3)：已成功接收远端音频流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "newstate-1",
      children: _jsx(_components.code, {
        children: "newState"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前的订阅状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SUB_STATE_IDLE (0)：加入频道后的初始订阅状态。"
      }), `
`, _jsxs(_components.li, {
        children: ["SUB_STATE_NO_SUBSCRIBED (1)：订阅远端音频流失败。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["远端用户：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "调用 muteLocalAudioStream(true) 停止发送本地音频流。"
              }), `
`, _jsx(_components.li, {
                children: "调用 disableAudio 禁用本地音频模块。"
              }), `
`, _jsx(_components.li, {
                children: "调用 enableLocalAudio(false) 禁用本地音频采集。"
              }), `
`, _jsx(_components.li, {
                children: "角色为观众。"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["本地用户：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeAudio 设为 false，表示不自动订阅任何音频流。"
              }), `
`, _jsx(_components.li, {
                children: "调用 muteRemoteAudioStream 或 muteAllRemoteAudioStreams 时将 muted 设为 true，表示停止接收远端音频流。"
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "SUB_STATE_SUBSCRIBING (2)：正在订阅中。"
      }), `
`, _jsx(_components.li, {
        children: "SUB_STATE_SUBSCRIBED (3)：已成功接收远端音频流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "elapsesincelaststate-1",
      children: _jsx(_components.code, {
        children: "elapseSinceLastState"
      })
    }), `
`, _jsx(_components.p, {
      children: "从上一个状态到当前状态所经过的时间，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-35",
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
      id: "callback_irtcengineeventhandler_onvideosubscribestatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onvideosubscribestatechanged",
      children: "onVideoSubscribeStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "视频订阅状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideosubscribestatechanged__prototype"
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
              children: " onVideoSubscribeStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String channel, "
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
              children: " oldState, "
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
              children: " newState, "
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
              children: " elapseSinceLastState)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideosubscribestatechanged__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideosubscribestatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地用户订阅远端视频流的状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideosubscribestatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-36",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channel-2",
      children: _jsx(_components.code, {
        children: "channel"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。"
    }), `
`, _jsx(_components.h4, {
      id: "uid-11",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "oldstate-2",
      children: _jsx(_components.code, {
        children: "oldState"
      })
    }), `
`, _jsx(_components.p, {
      children: "之前的订阅状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SUB_STATE_IDLE (0)：加入频道后的初始订阅状态。"
      }), `
`, _jsxs(_components.li, {
        children: ["SUB_STATE_NO_SUBSCRIBED (1)：订阅远端流失败。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["远端用户：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "调用 muteLocalVideoStream(true) 停止发送本地视频流。"
              }), `
`, _jsx(_components.li, {
                children: "调用 disableVideo 禁用本地视频模块。"
              }), `
`, _jsx(_components.li, {
                children: "调用 enableLocalVideo(false) 禁用本地视频采集。"
              }), `
`, _jsx(_components.li, {
                children: "远端用户的角色为观众。"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["本地用户：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "在调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeVideo 设置为 false，表示不自动订阅任何视频流。"
              }), `
`, _jsx(_components.li, {
                children: "调用 muteRemoteVideoStream 或 muteAllRemoteVideoStreams 并将 muted 设置为 true，表示停止接收远端视频流。"
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "SUB_STATE_SUBSCRIBING (2)：正在订阅中。"
      }), `
`, _jsx(_components.li, {
        children: "SUB_STATE_SUBSCRIBED (3)：已成功接收远端流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "newstate-2",
      children: _jsx(_components.code, {
        children: "newState"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前的订阅状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SUB_STATE_IDLE (0)：加入频道后的初始订阅状态。"
      }), `
`, _jsxs(_components.li, {
        children: ["SUB_STATE_NO_SUBSCRIBED (1)：订阅远端流失败。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["远端用户：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "调用 muteLocalVideoStream(true) 停止发送本地视频流。"
              }), `
`, _jsx(_components.li, {
                children: "调用 disableVideo 禁用本地视频模块。"
              }), `
`, _jsx(_components.li, {
                children: "调用 enableLocalVideo(false) 禁用本地视频采集。"
              }), `
`, _jsx(_components.li, {
                children: "远端用户的角色为观众。"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["本地用户：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "在调用 joinChannel 或 updateChannelMediaOptions 时将 ChannelMediaOptions 中的 autoSubscribeVideo 设置为 false，表示不自动订阅任何视频流。"
              }), `
`, _jsx(_components.li, {
                children: "调用 muteRemoteVideoStream 或 muteAllRemoteVideoStreams 并将 muted 设置为 true，表示停止接收远端视频流。"
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "SUB_STATE_SUBSCRIBING (2)：正在订阅中。"
      }), `
`, _jsx(_components.li, {
        children: "SUB_STATE_SUBSCRIBED (3)：已成功接收远端流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "elapsesincelaststate-2",
      children: _jsx(_components.code, {
        children: "elapseSinceLastState"
      })
    }), `
`, _jsx(_components.p, {
      children: "从上一个状态到当前状态所经过的时间，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-36",
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
