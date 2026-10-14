import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "跨频道媒体流转发",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_channel_media_relay" />

<a id="api_irtcengine_pauseallchannelmediarelay" />

## pauseAllChannelMediaRelay [#pauseallchannelmediarelay]

暂停向所有目标频道的跨频道媒体流转发。

<a id="api_irtcengine_pauseallchannelmediarelay__prototype" />

\`\`\`java
public abstract int pauseAllChannelMediaRelay();
\`\`\`

<a id="api_irtcengine_pauseallchannelmediarelay__detailed_desc" />

你可以调用该方法暂停向所有目标频道转发媒体流。如需恢复转发，请调用 [resumeAllChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_resumeallchannelmediarelay) 方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 [startOrUpdateChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_startorupdatechannelmediarelay) 方法之后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_pauseallchannelmediarelay__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_pauseallchannelmediarelayex" />

## pauseAllChannelMediaRelayEx [#pauseallchannelmediarelayex]

暂停向所有目标频道的跨频道媒体流转发。

<a id="api_irtcengineex_pauseallchannelmediarelayex__prototype" />

\`\`\`java
public abstract int pauseAllChannelMediaRelayEx(RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_pauseallchannelmediarelayex__detailed_desc" />

#### \`废弃\` [#废弃]

自 v4.2.0 版本废弃，请改用 [startOrUpdateChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_startorupdatechannelmediarelayex)。

你可以调用该方法暂停向所有目标频道转发媒体流。如需恢复转发，请调用 [resumeAllChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_resumeallchannelmediarelay) 方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 [startOrUpdateChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_startorupdatechannelmediarelayex) 方法后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_pauseallchannelmediarelayex__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_pauseallchannelmediarelayex__parameters" />

### 参数 [#参数]

#### \`connection\` [#connection]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_pauseallchannelmediarelayex__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。

### 所属接口类 [#所属接口类-1]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_resumeallchannelmediarelay" />

## resumeAllChannelMediaRelay [#resumeallchannelmediarelay]

恢复向所有目标频道的跨频道媒体流转发。

<a id="api_irtcengine_resumeallchannelmediarelay__prototype" />

\`\`\`java
public abstract int resumeAllChannelMediaRelay();
\`\`\`

<a id="api_irtcengine_resumeallchannelmediarelay__detailed_desc" />

调用 [pauseAllChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_pauseallchannelmediarelay) 后，你可以调用该方法恢复媒体流的转发。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 [pauseAllChannelMediaRelay](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_pauseallchannelmediarelay) 后再调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_resumeallchannelmediarelay__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -5：调用被拒绝，当前没有已暂停的跨频道媒体流转发。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_resumeallchannelmediarelayex" />

## resumeAllChannelMediaRelayEx [#resumeallchannelmediarelayex]

恢复向所有目标频道的跨频道媒体流转发。

<a id="api_irtcengineex_resumeallchannelmediarelayex__prototype" />

\`\`\`java
public abstract int resumeAllChannelMediaRelayEx(RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_resumeallchannelmediarelayex__detailed_desc" />

调用 [pauseAllChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_pauseallchannelmediarelayex) 后，可以调用此方法恢复媒体流的转发。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 [pauseAllChannelMediaRelayEx](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_pauseallchannelmediarelayex) 方法后再调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_resumeallchannelmediarelayex__scenario" />

### 适用场景 [#适用场景-1]

该方法适用于多频道场景。

<a id="api_irtcengineex_resumeallchannelmediarelayex__parameters" />

### 参数 [#参数-1]

#### \`connection\` [#connection-1]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_resumeallchannelmediarelayex__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -5：调用被拒绝，当前没有处于暂停状态的跨频道媒体流转发。

### 所属接口类 [#所属接口类-3]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_startorupdatechannelmediarelay" />

## startOrUpdateChannelMediaRelay [#startorupdatechannelmediarelay]

开始或更新跨频道媒体流转发。

<a id="api_irtcengine_startorupdatechannelmediarelay__prototype" />

\`\`\`java
public abstract int startOrUpdateChannelMediaRelay(ChannelMediaRelayConfiguration channelMediaRelayConfiguration);
\`\`\`

<a id="api_irtcengine_startorupdatechannelmediarelay__detailed_desc" />

#### \`自从\` [#自从]

自 v4.2.0 版本新增。

首次成功调用该方法会将媒体流从源频道转发到目标频道。若需将媒体流转发到其他频道，或退出当前的某个媒体流转发，可再次调用该方法以更新目标频道。该功能最多支持将媒体流转发到六个目标频道。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在加入频道后调用该方法。该方法仅在你是直播频道中的主播时生效。跨频道媒体流转发功能需[联系技术支持](https://ticket.shengwang.cn/)开启。该 API 不支持字符串用户 User Account。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_startorupdatechannelmediarelay__related" />

### 相关回调 [#相关回调]

成功调用该方法后，SDK 会触发 [onChannelMediaRelayStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged) 回调报告媒体流转发的状态。

* 如果 onChannelMediaRelayStateChanged 回调返回 RELAY\\_STATE\\_RUNNING （2）和 RELAY\\_OK （0），表示 SDK 成功开始将媒体流从源频道转发到目标频道。
* 如果回调返回 RELAY\\_STATE\\_FAILURE （3），表示媒体流转发过程中发生异常。

<a id="api_irtcengine_startorupdatechannelmediarelay__parameters" />

### 参数 [#参数-2]

#### \`channelMediaRelayConfiguration\` [#channelmediarelayconfiguration]

媒体流转发的配置。详见 [ChannelMediaRelayConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediarelayconfiguration)。

<a id="api_irtcengine_startorupdatechannelmediarelay__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无明确原因）。
  * -2：参数无效。
  * -8：内部状态错误，可能是因为用户不是主播。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_startorupdatechannelmediarelayex" />

## startOrUpdateChannelMediaRelayEx [#startorupdatechannelmediarelayex]

开始或更新跨频道媒体流转发。

<a id="api_irtcengineex_startorupdatechannelmediarelayex__prototype" />

\`\`\`java
public abstract int startOrUpdateChannelMediaRelayEx(ChannelMediaRelayConfiguration channelMediaRelayConfiguration, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_startorupdatechannelmediarelayex__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.2.0 版本新增。

首次成功调用该方法会将媒体流从源频道转发到目标频道。若需将媒体流转发到其他频道，或退出当前的某个媒体流转发，可再次调用该方法以更新目标频道。该功能最多支持将媒体流转发到六个目标频道。

注：

* 请在加入频道后调用该方法。
* 该方法仅在你是直播频道中的主播时有效。
* 跨频道媒体流转发功能需[联系技术支持](https://ticket.shengwang.cn/)开启。
* 该 API 不支持字符串用户 User Account。

<a id="api_irtcengineex_startorupdatechannelmediarelayex__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多频道场景。

<a id="api_irtcengineex_startorupdatechannelmediarelayex__related" />

### 相关回调 [#相关回调-1]

成功调用该方法后，SDK 会触发 [onChannelMediaRelayStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged) 回调报告媒体流转发的状态。

* 若回调返回 RELAY\\_STATE\\_RUNNING （2）和 RELAY\\_OK （0），表示 SDK 成功开始将媒体流从源频道转发到目标频道。
* 若回调返回 RELAY\\_STATE\\_FAILURE （3），表示媒体流转发过程中发生异常。

<a id="api_irtcengineex_startorupdatechannelmediarelayex__parameters" />

### 参数 [#参数-3]

#### \`channelMediaRelayConfiguration\` [#channelmediarelayconfiguration-1]

媒体流转发的配置。详见 [ChannelMediaRelayConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediarelayconfiguration)。

#### \`connection\` [#connection-2]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_startorupdatechannelmediarelayex__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无明确原因）。
  * -2：参数无效。
  * -8：内部状态错误，可能是因为用户不是主播。

### 所属接口类 [#所属接口类-5]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_stopchannelmediarelay" />

## stopChannelMediaRelay [#stopchannelmediarelay]

停止跨频道媒体流转发。

<a id="api_irtcengine_stopchannelmediarelay__prototype" />

\`\`\`java
public abstract int stopChannelMediaRelay();
\`\`\`

<a id="api_irtcengine_stopchannelmediarelay__detailed_desc" />

调用该方法后，主播会退出所有目标频道。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果方法调用失败，SDK 会通过 [onChannelMediaRelayStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged) 回调报告 \`RELAY_ERROR_SERVER_NO_RESPONSE\` （2）或 \`RELAY_ERROR_SERVER_CONNECTION_LOST\` （8）错误码。你也可以调用 \`leaveChannel\` 方法离开频道，媒体流转发会自动停止。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_stopchannelmediarelay__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_stopchannelmediarelayex" />

## stopChannelMediaRelayEx [#stopchannelmediarelayex]

停止跨频道媒体流转发。

<a id="api_irtcengineex_stopchannelmediarelayex__prototype" />

\`\`\`java
public abstract int stopChannelMediaRelayEx(RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_stopchannelmediarelayex__detailed_desc" />

调用该方法停止跨频道媒体流转发。一旦转发停止，主播会退出所有目标频道。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果方法调用失败，SDK 会通过 [onChannelMediaRelayStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged) 回调报告 \`RELAY_ERROR_SERVER_NO_RESPONSE\` （2）或 \`RELAY_ERROR_SERVER_CONNECTION_LOST\` （8）错误码。你可以调用 \`leaveChannel\` 方法离开频道，媒体流转发会自动停止。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_stopchannelmediarelayex__scenario" />

### 适用场景 [#适用场景-3]

该方法适用于多频道场景。

<a id="api_irtcengineex_stopchannelmediarelayex__parameters" />

### 参数 [#参数-4]

#### \`connection\` [#connection-3]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_stopchannelmediarelayex__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。

### 所属接口类 [#所属接口类-7]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="callback_irtcengineeventhandler_onchannelmediarelaystatechanged" />

## onChannelMediaRelayStateChanged [#onchannelmediarelaystatechanged]

跨频道媒体流转发状态发生变化回调。

<a id="callback_irtcengineeventhandler_onchannelmediarelaystatechanged__prototype" />

\`\`\`java
public void onChannelMediaRelayStateChanged(int state, int code)
\`\`\`

<a id="callback_irtcengineeventhandler_onchannelmediarelaystatechanged__detailed_desc" />

该回调返回当前跨频道媒体流转发的错误信息。

<a id="callback_irtcengineeventhandler_onchannelmediarelaystatechanged__timing" />

### 触发时机 [#触发时机]

该回调在跨频道媒体流转发状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onchannelmediarelaystatechanged__parameters" />

### 参数 [#参数-5]

#### \`state\` [#state]

跨频道媒体流转发的状态码：

* RELAY\\_STATE\\_IDLE：SDK 正在初始化。
* RELAY\\_STATE\\_CONNECTING：SDK 尝试将媒体流转发到目标频道。
* RELAY\\_STATE\\_RUNNING：SDK 成功将媒体流转发到目标频道。
* RELAY\\_STATE\\_FAILURE：发生错误，详见 code。

#### \`code\` [#code]

跨频道媒体流转发的错误码：

* RELAY\\_OK：一切正常。
* RELAY\\_ERROR\\_SERVER\\_ERROR\\_RESPONSE：服务器响应出错。
* RELAY\\_ERROR\\_SERVER\\_NO\\_RESPONSE：服务器无响应。该错误可能由网络连接不佳引起。如果在启动跨频道媒体流转发时出现该错误，可以稍后重试；如果在转发过程中出现该错误，可以调用 leaveChannel 离开频道。该错误也可能是项目未启用跨频道媒体流转发服务导致的。你可以[联系技术支持](https://ticket.shengwang.cn/)启用该服务。
* RELAY\\_ERROR\\_NO\\_RESOURCE\\_AVAILABLE：SDK 无法访问服务，可能由于服务器资源有限。
* RELAY\\_ERROR\\_FAILED\\_JOIN\\_SRC：服务器无法发送转发请求。
* RELAY\\_ERROR\\_FAILED\\_JOIN\\_DEST：服务器无法接受转发请求。
* RELAY\\_ERROR\\_FAILED\\_PACKET\\_RECEIVED\\_FROM\\_SRC：服务器无法接收媒体流。
* RELAY\\_ERROR\\_FAILED\\_PACKET\\_SENT\\_TO\\_DEST：服务器无法发送媒体流。
* RELAY\\_ERROR\\_SERVER\\_CONNECTION\\_LOST：由于网络连接不佳，SDK 与服务器断开连接。你可以调用 leaveChannel 离开频道。
* RELAY\\_ERROR\\_INTERNAL\\_ERROR：服务器内部发生错误。
* RELAY\\_ERROR\\_SRC\\_TOKEN\\_EXPIRED：源频道的 Token 已过期。
* RELAY\\_ERROR\\_DEST\\_TOKEN\\_EXPIRED：目标频道的 Token 已过期。

### 所属接口类 [#所属接口类-8]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "pauseallchannelmediarelay",
    content: "暂停向所有目标频道的跨频道媒体流转发。"
  }, {
    heading: "pauseallchannelmediarelay",
    content: "你可以调用该方法暂停向所有目标频道转发媒体流。如需恢复转发，请调用 resumeAllChannelMediaRelay 方法。"
  }, {
    heading: "pauseallchannelmediarelay",
    content: "请在调用 startOrUpdateChannelMediaRelay 方法之后调用该方法。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值",
    content: "-5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "pauseallchannelmediarelayex",
    content: "暂停向所有目标频道的跨频道媒体流转发。"
  }, {
    heading: "废弃",
    content: "自 v4.2.0 版本废弃，请改用 startOrUpdateChannelMediaRelayEx。"
  }, {
    heading: "废弃",
    content: "你可以调用该方法暂停向所有目标频道转发媒体流。如需恢复转发，请调用 resumeAllChannelMediaRelay 方法。"
  }, {
    heading: "废弃",
    content: "请在调用 startOrUpdateChannelMediaRelayEx 方法后调用此方法。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "connection",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-1",
    content: "-5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngineEx"
  }, {
    heading: "resumeallchannelmediarelay",
    content: "恢复向所有目标频道的跨频道媒体流转发。"
  }, {
    heading: "resumeallchannelmediarelay",
    content: "调用 pauseAllChannelMediaRelay 后，你可以调用该方法恢复媒体流的转发。"
  }, {
    heading: "resumeallchannelmediarelay",
    content: "请在调用 pauseAllChannelMediaRelay 后再调用该方法。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-2",
    content: "-5：调用被拒绝，当前没有已暂停的跨频道媒体流转发。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "resumeallchannelmediarelayex",
    content: "恢复向所有目标频道的跨频道媒体流转发。"
  }, {
    heading: "resumeallchannelmediarelayex",
    content: "调用 pauseAllChannelMediaRelayEx 后，可以调用此方法恢复媒体流的转发。"
  }, {
    heading: "resumeallchannelmediarelayex",
    content: "请在调用 pauseAllChannelMediaRelayEx 方法后再调用此方法。"
  }, {
    heading: "适用场景-1",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "connection-1",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-3",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-3",
    content: "-5：调用被拒绝，当前没有处于暂停状态的跨频道媒体流转发。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngineEx"
  }, {
    heading: "startorupdatechannelmediarelay",
    content: "开始或更新跨频道媒体流转发。"
  }, {
    heading: "自从",
    content: "自 v4.2.0 版本新增。"
  }, {
    heading: "自从",
    content: "首次成功调用该方法会将媒体流从源频道转发到目标频道。若需将媒体流转发到其他频道，或退出当前的某个媒体流转发，可再次调用该方法以更新目标频道。该功能最多支持将媒体流转发到六个目标频道。"
  }, {
    heading: "自从",
    content: "请在加入频道后调用该方法。该方法仅在你是直播频道中的主播时生效。跨频道媒体流转发功能需联系技术支持开启。该 API 不支持字符串用户 User Account。"
  }, {
    heading: "相关回调",
    content: "成功调用该方法后，SDK 会触发 onChannelMediaRelayStateChanged 回调报告媒体流转发的状态。"
  }, {
    heading: "相关回调",
    content: "如果 onChannelMediaRelayStateChanged 回调返回 RELAY\\_STATE\\_RUNNING （2）和 RELAY\\_OK （0），表示 SDK 成功开始将媒体流从源频道转发到目标频道。"
  }, {
    heading: "相关回调",
    content: "如果回调返回 RELAY\\_STATE\\_FAILURE （3），表示媒体流转发过程中发生异常。"
  }, {
    heading: "channelmediarelayconfiguration",
    content: "媒体流转发的配置。详见 ChannelMediaRelayConfiguration。"
  }, {
    heading: "返回值-4",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-4",
    content: "-1：发生通用错误（无明确原因）。"
  }, {
    heading: "返回值-4",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-4",
    content: "-8：内部状态错误，可能是因为用户不是主播。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "startorupdatechannelmediarelayex",
    content: "开始或更新跨频道媒体流转发。"
  }, {
    heading: "自从-1",
    content: "自 v4.2.0 版本新增。"
  }, {
    heading: "自从-1",
    content: "首次成功调用该方法会将媒体流从源频道转发到目标频道。若需将媒体流转发到其他频道，或退出当前的某个媒体流转发，可再次调用该方法以更新目标频道。该功能最多支持将媒体流转发到六个目标频道。"
  }, {
    heading: "自从-1",
    content: "注："
  }, {
    heading: "自从-1",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "自从-1",
    content: "该方法仅在你是直播频道中的主播时有效。"
  }, {
    heading: "自从-1",
    content: "跨频道媒体流转发功能需联系技术支持开启。"
  }, {
    heading: "自从-1",
    content: "该 API 不支持字符串用户 User Account。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "相关回调-1",
    content: "成功调用该方法后，SDK 会触发 onChannelMediaRelayStateChanged 回调报告媒体流转发的状态。"
  }, {
    heading: "相关回调-1",
    content: "若回调返回 RELAY\\_STATE\\_RUNNING （2）和 RELAY\\_OK （0），表示 SDK 成功开始将媒体流从源频道转发到目标频道。"
  }, {
    heading: "相关回调-1",
    content: "若回调返回 RELAY\\_STATE\\_FAILURE （3），表示媒体流转发过程中发生异常。"
  }, {
    heading: "channelmediarelayconfiguration-1",
    content: "媒体流转发的配置。详见 ChannelMediaRelayConfiguration。"
  }, {
    heading: "connection-2",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-5",
    content: "-1：发生通用错误（无明确原因）。"
  }, {
    heading: "返回值-5",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-5",
    content: "-8：内部状态错误，可能是因为用户不是主播。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngineEx"
  }, {
    heading: "stopchannelmediarelay",
    content: "停止跨频道媒体流转发。"
  }, {
    heading: "stopchannelmediarelay",
    content: "调用该方法后，主播会退出所有目标频道。"
  }, {
    heading: "stopchannelmediarelay",
    content: "如果方法调用失败，SDK 会通过 onChannelMediaRelayStateChanged 回调报告 `RELAY_ERROR_SERVER_NO_RESPONSE` （2）或 `RELAY_ERROR_SERVER_CONNECTION_LOST` （8）错误码。你也可以调用 `leaveChannel` 方法离开频道，媒体流转发会自动停止。"
  }, {
    heading: "返回值-6",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-6",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-6",
    content: "-5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngine"
  }, {
    heading: "stopchannelmediarelayex",
    content: "停止跨频道媒体流转发。"
  }, {
    heading: "stopchannelmediarelayex",
    content: "调用该方法停止跨频道媒体流转发。一旦转发停止，主播会退出所有目标频道。"
  }, {
    heading: "stopchannelmediarelayex",
    content: "如果方法调用失败，SDK 会通过 onChannelMediaRelayStateChanged 回调报告 `RELAY_ERROR_SERVER_NO_RESPONSE` （2）或 `RELAY_ERROR_SERVER_CONNECTION_LOST` （8）错误码。你可以调用 `leaveChannel` 方法离开频道，媒体流转发会自动停止。"
  }, {
    heading: "适用场景-3",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "connection-3",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-7",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-7",
    content: "-5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。"
  }, {
    heading: "所属接口类-7",
    content: "RtcEngineEx"
  }, {
    heading: "onchannelmediarelaystatechanged",
    content: "跨频道媒体流转发状态发生变化回调。"
  }, {
    heading: "onchannelmediarelaystatechanged",
    content: "该回调返回当前跨频道媒体流转发的错误信息。"
  }, {
    heading: "触发时机",
    content: "该回调在跨频道媒体流转发状态发生变化时被触发。"
  }, {
    heading: "state",
    content: "跨频道媒体流转发的状态码："
  }, {
    heading: "state",
    content: "RELAY\\_STATE\\_IDLE：SDK 正在初始化。"
  }, {
    heading: "state",
    content: "RELAY\\_STATE\\_CONNECTING：SDK 尝试将媒体流转发到目标频道。"
  }, {
    heading: "state",
    content: "RELAY\\_STATE\\_RUNNING：SDK 成功将媒体流转发到目标频道。"
  }, {
    heading: "state",
    content: "RELAY\\_STATE\\_FAILURE：发生错误，详见 code。"
  }, {
    heading: "code",
    content: "跨频道媒体流转发的错误码："
  }, {
    heading: "code",
    content: "RELAY\\_OK：一切正常。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_SERVER\\_ERROR\\_RESPONSE：服务器响应出错。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_SERVER\\_NO\\_RESPONSE：服务器无响应。该错误可能由网络连接不佳引起。如果在启动跨频道媒体流转发时出现该错误，可以稍后重试；如果在转发过程中出现该错误，可以调用 leaveChannel 离开频道。该错误也可能是项目未启用跨频道媒体流转发服务导致的。你可以联系技术支持启用该服务。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_NO\\_RESOURCE\\_AVAILABLE：SDK 无法访问服务，可能由于服务器资源有限。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_FAILED\\_JOIN\\_SRC：服务器无法发送转发请求。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_FAILED\\_JOIN\\_DEST：服务器无法接受转发请求。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_FAILED\\_PACKET\\_RECEIVED\\_FROM\\_SRC：服务器无法接收媒体流。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_FAILED\\_PACKET\\_SENT\\_TO\\_DEST：服务器无法发送媒体流。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_SERVER\\_CONNECTION\\_LOST：由于网络连接不佳，SDK 与服务器断开连接。你可以调用 leaveChannel 离开频道。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_INTERNAL\\_ERROR：服务器内部发生错误。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_SRC\\_TOKEN\\_EXPIRED：源频道的 Token 已过期。"
  }, {
    heading: "code",
    content: "RELAY\\_ERROR\\_DEST\\_TOKEN\\_EXPIRED：目标频道的 Token 已过期。"
  }, {
    heading: "所属接口类-8",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "pauseallchannelmediarelay",
    content: "pauseAllChannelMediaRelay"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "pauseallchannelmediarelayex",
    content: "pauseAllChannelMediaRelayEx"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "connection",
    content: "`connection`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "resumeallchannelmediarelay",
    content: "resumeAllChannelMediaRelay"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "resumeallchannelmediarelayex",
    content: "resumeAllChannelMediaRelayEx"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "connection-1",
    content: "`connection`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "startorupdatechannelmediarelay",
    content: "startOrUpdateChannelMediaRelay"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "channelmediarelayconfiguration",
    content: "`channelMediaRelayConfiguration`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "startorupdatechannelmediarelayex",
    content: "startOrUpdateChannelMediaRelayEx"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "channelmediarelayconfiguration-1",
    content: "`channelMediaRelayConfiguration`"
  }, {
    id: "connection-2",
    content: "`connection`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "stopchannelmediarelay",
    content: "stopChannelMediaRelay"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "stopchannelmediarelayex",
    content: "stopChannelMediaRelayEx"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "connection-3",
    content: "`connection`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "onchannelmediarelaystatechanged",
    content: "onChannelMediaRelayStateChanged"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "code",
    content: "`code`"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#pauseallchannelmediarelay",
  title: _jsx(_Fragment, {
    children: "pauseAllChannelMediaRelay"
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
  url: "#pauseallchannelmediarelayex",
  title: _jsx(_Fragment, {
    children: "pauseAllChannelMediaRelayEx"
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
  url: "#适用场景",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#resumeallchannelmediarelay",
  title: _jsx(_Fragment, {
    children: "resumeAllChannelMediaRelay"
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
  url: "#resumeallchannelmediarelayex",
  title: _jsx(_Fragment, {
    children: "resumeAllChannelMediaRelayEx"
  })
}, {
  depth: 3,
  url: "#适用场景-1",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#startorupdatechannelmediarelay",
  title: _jsx(_Fragment, {
    children: "startOrUpdateChannelMediaRelay"
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
  url: "#相关回调",
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
  url: "#channelmediarelayconfiguration",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelMediaRelayConfiguration"
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
  url: "#startorupdatechannelmediarelayex",
  title: _jsx(_Fragment, {
    children: "startOrUpdateChannelMediaRelayEx"
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
  url: "#适用场景-2",
  title: _jsx(_Fragment, {
    children: "适用场景"
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
  url: "#channelmediarelayconfiguration-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelMediaRelayConfiguration"
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
  url: "#stopchannelmediarelay",
  title: _jsx(_Fragment, {
    children: "stopChannelMediaRelay"
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
  url: "#stopchannelmediarelayex",
  title: _jsx(_Fragment, {
    children: "stopChannelMediaRelayEx"
  })
}, {
  depth: 3,
  url: "#适用场景-3",
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
  url: "#connection-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  url: "#onchannelmediarelaystatechanged",
  title: _jsx(_Fragment, {
    children: "onChannelMediaRelayStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-5",
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
  url: "#code",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "code"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-8",
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
      id: "toc_channel_media_relay"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseallchannelmediarelay"
    }), `
`, _jsx(_components.h2, {
      id: "pauseallchannelmediarelay",
      children: "pauseAllChannelMediaRelay"
    }), `
`, _jsx(_components.p, {
      children: "暂停向所有目标频道的跨频道媒体流转发。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseallchannelmediarelay__prototype"
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
              children: " pauseAllChannelMediaRelay"
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
      id: "api_irtcengine_pauseallchannelmediarelay__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法暂停向所有目标频道转发媒体流。如需恢复转发，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_resumeallchannelmediarelay",
        children: "resumeAllChannelMediaRelay"
      }), " 方法。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_startorupdatechannelmediarelay",
            children: "startOrUpdateChannelMediaRelay"
          }), " 方法之后调用该方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseallchannelmediarelay__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengineex_pauseallchannelmediarelayex"
    }), `
`, _jsx(_components.h2, {
      id: "pauseallchannelmediarelayex",
      children: "pauseAllChannelMediaRelayEx"
    }), `
`, _jsx(_components.p, {
      children: "暂停向所有目标频道的跨频道媒体流转发。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_pauseallchannelmediarelayex__prototype"
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
              children: " pauseAllChannelMediaRelayEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_pauseallchannelmediarelayex__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自 v4.2.0 版本废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_startorupdatechannelmediarelayex",
        children: "startOrUpdateChannelMediaRelayEx"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法暂停向所有目标频道转发媒体流。如需恢复转发，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_resumeallchannelmediarelay",
        children: "resumeAllChannelMediaRelay"
      }), " 方法。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_startorupdatechannelmediarelayex",
            children: "startOrUpdateChannelMediaRelayEx"
          }), " 方法后调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_pauseallchannelmediarelayex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_pauseallchannelmediarelayex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "connection",
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
      id: "api_irtcengineex_pauseallchannelmediarelayex__return_values"
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
            children: "-5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeallchannelmediarelay"
    }), `
`, _jsx(_components.h2, {
      id: "resumeallchannelmediarelay",
      children: "resumeAllChannelMediaRelay"
    }), `
`, _jsx(_components.p, {
      children: "恢复向所有目标频道的跨频道媒体流转发。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeallchannelmediarelay__prototype"
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
              children: " resumeAllChannelMediaRelay"
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
      id: "api_irtcengine_resumeallchannelmediarelay__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_pauseallchannelmediarelay",
        children: "pauseAllChannelMediaRelay"
      }), " 后，你可以调用该方法恢复媒体流的转发。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengine_pauseallchannelmediarelay",
            children: "pauseAllChannelMediaRelay"
          }), " 后再调用该方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeallchannelmediarelay__return_values"
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
            children: "-5：调用被拒绝，当前没有已暂停的跨频道媒体流转发。"
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
      id: "api_irtcengineex_resumeallchannelmediarelayex"
    }), `
`, _jsx(_components.h2, {
      id: "resumeallchannelmediarelayex",
      children: "resumeAllChannelMediaRelayEx"
    }), `
`, _jsx(_components.p, {
      children: "恢复向所有目标频道的跨频道媒体流转发。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_resumeallchannelmediarelayex__prototype"
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
              children: " resumeAllChannelMediaRelayEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_resumeallchannelmediarelayex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_pauseallchannelmediarelayex",
        children: "pauseAllChannelMediaRelayEx"
      }), " 后，可以调用此方法恢复媒体流的转发。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#api_irtcengineex_pauseallchannelmediarelayex",
            children: "pauseAllChannelMediaRelayEx"
          }), " 方法后再调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_resumeallchannelmediarelayex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_resumeallchannelmediarelayex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
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
      id: "api_irtcengineex_resumeallchannelmediarelayex__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-5：调用被拒绝，当前没有处于暂停状态的跨频道媒体流转发。"
          }), `
`]
        }), `
`]
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startorupdatechannelmediarelay"
    }), `
`, _jsx(_components.h2, {
      id: "startorupdatechannelmediarelay",
      children: "startOrUpdateChannelMediaRelay"
    }), `
`, _jsx(_components.p, {
      children: "开始或更新跨频道媒体流转发。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startorupdatechannelmediarelay__prototype"
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
              children: " startOrUpdateChannelMediaRelay"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ChannelMediaRelayConfiguration channelMediaRelayConfiguration);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startorupdatechannelmediarelay__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.2.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "首次成功调用该方法会将媒体流从源频道转发到目标频道。若需将媒体流转发到其他频道，或退出当前的某个媒体流转发，可再次调用该方法以更新目标频道。该功能最多支持将媒体流转发到六个目标频道。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在加入频道后调用该方法。该方法仅在你是直播频道中的主播时生效。跨频道媒体流转发功能需", _jsx(_components.a, {
            href: "https://ticket.shengwang.cn/",
            children: "联系技术支持"
          }), "开启。该 API 不支持字符串用户 User Account。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startorupdatechannelmediarelay__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
        children: "onChannelMediaRelayStateChanged"
      }), " 回调报告媒体流转发的状态。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果 onChannelMediaRelayStateChanged 回调返回 RELAY_STATE_RUNNING （2）和 RELAY_OK （0），表示 SDK 成功开始将媒体流从源频道转发到目标频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果回调返回 RELAY_STATE_FAILURE （3），表示媒体流转发过程中发生异常。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startorupdatechannelmediarelay__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelmediarelayconfiguration",
      children: _jsx(_components.code, {
        children: "channelMediaRelayConfiguration"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体流转发的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediarelayconfiguration",
        children: "ChannelMediaRelayConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startorupdatechannelmediarelay__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-1：发生通用错误（无明确原因）。"
          }), `
`, _jsx(_components.li, {
            children: "-2：参数无效。"
          }), `
`, _jsx(_components.li, {
            children: "-8：内部状态错误，可能是因为用户不是主播。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengineex_startorupdatechannelmediarelayex"
    }), `
`, _jsx(_components.h2, {
      id: "startorupdatechannelmediarelayex",
      children: "startOrUpdateChannelMediaRelayEx"
    }), `
`, _jsx(_components.p, {
      children: "开始或更新跨频道媒体流转发。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startorupdatechannelmediarelayex__prototype"
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
              children: " startOrUpdateChannelMediaRelayEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ChannelMediaRelayConfiguration channelMediaRelayConfiguration, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startorupdatechannelmediarelayex__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-1",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.2.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "首次成功调用该方法会将媒体流从源频道转发到目标频道。若需将媒体流转发到其他频道，或退出当前的某个媒体流转发，可再次调用该方法以更新目标频道。该功能最多支持将媒体流转发到六个目标频道。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请在加入频道后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "该方法仅在你是直播频道中的主播时有效。"
      }), `
`, _jsxs(_components.li, {
        children: ["跨频道媒体流转发功能需", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "开启。"]
      }), `
`, _jsx(_components.li, {
        children: "该 API 不支持字符串用户 User Account。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startorupdatechannelmediarelayex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startorupdatechannelmediarelayex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
        children: "onChannelMediaRelayStateChanged"
      }), " 回调报告媒体流转发的状态。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "若回调返回 RELAY_STATE_RUNNING （2）和 RELAY_OK （0），表示 SDK 成功开始将媒体流从源频道转发到目标频道。"
      }), `
`, _jsx(_components.li, {
        children: "若回调返回 RELAY_STATE_FAILURE （3），表示媒体流转发过程中发生异常。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startorupdatechannelmediarelayex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelmediarelayconfiguration-1",
      children: _jsx(_components.code, {
        children: "channelMediaRelayConfiguration"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体流转发的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediarelayconfiguration",
        children: "ChannelMediaRelayConfiguration"
      }), "。"]
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
      id: "api_irtcengineex_startorupdatechannelmediarelayex__return_values"
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
            children: "-1：发生通用错误（无明确原因）。"
          }), `
`, _jsx(_components.li, {
            children: "-2：参数无效。"
          }), `
`, _jsx(_components.li, {
            children: "-8：内部状态错误，可能是因为用户不是主播。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopchannelmediarelay"
    }), `
`, _jsx(_components.h2, {
      id: "stopchannelmediarelay",
      children: "stopChannelMediaRelay"
    }), `
`, _jsx(_components.p, {
      children: "停止跨频道媒体流转发。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopchannelmediarelay__prototype"
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
              children: " stopChannelMediaRelay"
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
      id: "api_irtcengine_stopchannelmediarelay__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法后，主播会退出所有目标频道。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果方法调用失败，SDK 会通过 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
            children: "onChannelMediaRelayStateChanged"
          }), " 回调报告 ", _jsx(_components.code, {
            children: "RELAY_ERROR_SERVER_NO_RESPONSE"
          }), " （2）或 ", _jsx(_components.code, {
            children: "RELAY_ERROR_SERVER_CONNECTION_LOST"
          }), " （8）错误码。你也可以调用 ", _jsx(_components.code, {
            children: "leaveChannel"
          }), " 方法离开频道，媒体流转发会自动停止。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopchannelmediarelay__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengineex_stopchannelmediarelayex"
    }), `
`, _jsx(_components.h2, {
      id: "stopchannelmediarelayex",
      children: "stopChannelMediaRelayEx"
    }), `
`, _jsx(_components.p, {
      children: "停止跨频道媒体流转发。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_stopchannelmediarelayex__prototype"
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
              children: " stopChannelMediaRelayEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_stopchannelmediarelayex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法停止跨频道媒体流转发。一旦转发停止，主播会退出所有目标频道。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果方法调用失败，SDK 会通过 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/channel-media-relay#callback_irtcengineeventhandler_onchannelmediarelaystatechanged",
            children: "onChannelMediaRelayStateChanged"
          }), " 回调报告 ", _jsx(_components.code, {
            children: "RELAY_ERROR_SERVER_NO_RESPONSE"
          }), " （2）或 ", _jsx(_components.code, {
            children: "RELAY_ERROR_SERVER_CONNECTION_LOST"
          }), " （8）错误码。你可以调用 ", _jsx(_components.code, {
            children: "leaveChannel"
          }), " 方法离开频道，媒体流转发会自动停止。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_stopchannelmediarelayex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_stopchannelmediarelayex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
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
      id: "api_irtcengineex_stopchannelmediarelayex__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-5：调用被拒绝，当前没有正在进行的跨频道媒体流转发。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onchannelmediarelaystatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onchannelmediarelaystatechanged",
      children: "onChannelMediaRelayStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "跨频道媒体流转发状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onchannelmediarelaystatechanged__prototype"
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
              children: " onChannelMediaRelayStateChanged"
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
              children: " code)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onchannelmediarelaystatechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调返回当前跨频道媒体流转发的错误信息。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onchannelmediarelaystatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在跨频道媒体流转发状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onchannelmediarelaystatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "跨频道媒体流转发的状态码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RELAY_STATE_IDLE：SDK 正在初始化。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_STATE_CONNECTING：SDK 尝试将媒体流转发到目标频道。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_STATE_RUNNING：SDK 成功将媒体流转发到目标频道。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_STATE_FAILURE：发生错误，详见 code。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "code",
      children: _jsx(_components.code, {
        children: "code"
      })
    }), `
`, _jsx(_components.p, {
      children: "跨频道媒体流转发的错误码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RELAY_OK：一切正常。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_SERVER_ERROR_RESPONSE：服务器响应出错。"
      }), `
`, _jsxs(_components.li, {
        children: ["RELAY_ERROR_SERVER_NO_RESPONSE：服务器无响应。该错误可能由网络连接不佳引起。如果在启动跨频道媒体流转发时出现该错误，可以稍后重试；如果在转发过程中出现该错误，可以调用 leaveChannel 离开频道。该错误也可能是项目未启用跨频道媒体流转发服务导致的。你可以", _jsx(_components.a, {
          href: "https://ticket.shengwang.cn/",
          children: "联系技术支持"
        }), "启用该服务。"]
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_NO_RESOURCE_AVAILABLE：SDK 无法访问服务，可能由于服务器资源有限。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_FAILED_JOIN_SRC：服务器无法发送转发请求。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_FAILED_JOIN_DEST：服务器无法接受转发请求。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_FAILED_PACKET_RECEIVED_FROM_SRC：服务器无法接收媒体流。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_FAILED_PACKET_SENT_TO_DEST：服务器无法发送媒体流。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_SERVER_CONNECTION_LOST：由于网络连接不佳，SDK 与服务器断开连接。你可以调用 leaveChannel 离开频道。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_INTERNAL_ERROR：服务器内部发生错误。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_SRC_TOKEN_EXPIRED：源频道的 Token 已过期。"
      }), `
`, _jsx(_components.li, {
        children: "RELAY_ERROR_DEST_TOKEN_EXPIRED：目标频道的 Token 已过期。"
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
