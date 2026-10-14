import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "数据流 Datastream",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_datastream" />

<a id="api_irtcengine_createdatastream1" />

## createDataStream \\[1/2] [#createdatastream-12]

创建一个数据流，用于提升数据传输的可靠性和顺序性。

<a id="api_irtcengine_createdatastream1__prototype" />

\`\`\`java
public abstract int createDataStream(boolean reliable, boolean ordered);
\`\`\`

<a id="api_irtcengine_createdatastream1__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    每个用户在 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 的生命周期内最多可创建五个数据流。离开频道时，数据流会被销毁，如需继续使用需重新创建。如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用实时消息。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_createdatastream1__timing" />

### 调用时机 [#调用时机]

你可以在加入频道前或后调用此方法。

<a id="api_irtcengine_createdatastream1__related" />

### 相关回调 [#相关回调]

将 \`reliable\` 设置为 true 后，如果接收端在五秒内未收到数据，SDK 会触发 [onStreamMessageError](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror) 回调并返回错误码。

<a id="api_irtcengine_createdatastream1__parameters" />

### 参数 [#参数]

#### \`reliable\` [#reliable]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保 \`reliable\` 和 \`ordered\` 同时设置为 true 或同时设置为 false。
  </CalloutDescription>
</CalloutContainer>

是否保证接收端在五秒内收到数据流：

* true：接收端会在五秒内收到发送端的数据。如果未收到，SDK 会触发 onStreamMessageError 回调并返回错误码。
* false：不保证接收端在五秒内收到数据，延迟或丢失不会触发错误回调。

#### \`ordered\` [#ordered]

是否按发送顺序接收数据流：

* true：接收端按发送顺序接收数据。
* false：接收端不按发送顺序接收数据。

<a id="api_irtcengine_createdatastream1__return_values" />

### 返回值 [#返回值]

* 方法调用成功，返回创建的数据流 ID。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_createdatastream2" />

## createDataStream \\[2/2] [#createdatastream-22]

创建一个数据流。

<a id="api_irtcengine_createdatastream2__prototype" />

\`\`\`java
public abstract int createDataStream(DataStreamConfig config);
\`\`\`

<a id="api_irtcengine_createdatastream2__detailed_desc" />

该方法不保证数据传输的可靠性。如果数据包在发送后五秒内未被接收，SDK 会直接丢弃该数据。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    每个用户在 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 的生命周期内最多可以创建五个数据流。离开频道时数据流会被销毁，如需继续使用需重新创建。如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用声网实时消息。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_createdatastream2__timing" />

### 调用时机 [#调用时机-1]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_irtcengine_createdatastream2__parameters" />

### 参数 [#参数-1]

#### \`config\` [#config]

数据流的配置，详见 [DataStreamConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-datastreamconfig)。

<a id="api_irtcengine_createdatastream2__return_values" />

### 返回值 [#返回值-1]

* 方法调用成功，返回创建的数据流 ID。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_createdatastreamex1" />

## createDataStreamEx \\[1/2] [#createdatastreamex-12]

创建数据流以提升数据传输的可靠性和顺序性。

<a id="api_irtcengineex_createdatastreamex1__prototype" />

\`\`\`java
public abstract int createDataStreamEx(boolean reliable, boolean ordered, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_createdatastreamex1__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃，请改用 [createDataStreamEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex2)

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    每个用户在 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 的生命周期内最多可创建五个数据流。离开频道时数据流会被销毁，如需继续使用需重新创建。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_createdatastreamex1__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_createdatastreamex1__timing" />

### 调用时机 [#调用时机-2]

请在调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 后调用此方法。

<a id="api_irtcengineex_createdatastreamex1__related" />

### 相关回调 [#相关回调-1]

将 \`reliable\` 设置为 true 后，如果接收端在五秒内未收到数据，SDK 会触发 [onStreamMessageError](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror) 回调并返回错误码。

<a id="api_irtcengineex_createdatastreamex1__parameters" />

### 参数 [#参数-2]

#### \`reliable\` [#reliable-1]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保 \`reliable\` 和 \`ordered\` 同时设置为 true 或同时设置为 false。
  </CalloutDescription>
</CalloutContainer>

是否保证接收端在五秒内接收到数据流：

* true：接收端会在五秒内接收到发送端的数据。如果接收端在五秒内未收到数据，SDK 会触发 onStreamMessageError 回调并返回错误码。
* false：不保证接收端在五秒内接收到数据流，延迟或丢失数据不会返回错误信息。

#### \`ordered\` [#ordered-1]

是否按发送顺序接收数据流：

* true：接收端按发送顺序接收数据。
* false：接收端不按发送顺序接收数据。

#### \`connection\` [#connection]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_createdatastreamex1__return_values" />

### 返回值 [#返回值-2]

* 方法调用成功，返回创建的数据流 ID。
* 方法调用失败，返回小于 0 的值。

### 所属接口类 [#所属接口类-2]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengineex_createdatastreamex2" />

## createDataStreamEx \\[2/2] [#createdatastreamex-22]

创建一个数据流。

<a id="api_irtcengineex_createdatastreamex2__prototype" />

\`\`\`java
public abstract int createDataStreamEx(DataStreamConfig config, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_createdatastreamex2__detailed_desc" />

与 [createDataStreamEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex1) 相比，该方法不保证数据传输的可靠性。如果数据包在发送后五秒内未被接收，SDK 会直接丢弃该数据。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    每个用户在 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 的生命周期内最多可创建五个数据流。离开频道时数据流会被销毁，如需继续使用需重新创建。如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用实时消息。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_createdatastreamex2__scenario" />

### 适用场景 [#适用场景-1]

该方法适用于多频道场景。

<a id="api_irtcengineex_createdatastreamex2__timing" />

### 调用时机 [#调用时机-3]

请在调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 后调用该方法。

<a id="api_irtcengineex_createdatastreamex2__parameters" />

### 参数 [#参数-3]

#### \`config\` [#config-1]

数据流的配置，详见 [DataStreamConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-datastreamconfig)。

#### \`connection\` [#connection-1]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_createdatastreamex2__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_sendstreammessage" />

## sendStreamMessage [#sendstreammessage]

发送数据流消息。

<a id="api_irtcengine_sendstreammessage__prototype" />

\`\`\`java
public abstract int sendStreamMessage(int streamId, byte[] message);
\`\`\`

<a id="api_irtcengine_sendstreammessage__detailed_desc" />

调用 \`createDataStream\` 后，可以使用该方法向频道内的所有用户发送数据流消息。SDK 对该方法有限制：

* 每个频道内的客户端实例最多可同时拥有 5 个数据通道，所有数据通道共享的总包比特率上限为 30 KB/s。
* 每个数据通道每秒最多可发送 60 个数据包，每个数据包最大为 1 KB。

注：

* 如果你需要更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用实时消息。
* 必须在调用 createDataStream 并加入频道后调用该方法。
* 该方法仅适用于主播角色。

<a id="api_irtcengine_sendstreammessage__related" />

### 相关回调 [#相关回调-2]

调用成功后会触发远端客户端的 [onStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage) 回调，远端用户可通过该回调获取数据流消息。调用失败则会触发远端客户端的 [onStreamMessageError](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror) 回调。

<a id="api_irtcengine_sendstreammessage__parameters" />

### 参数 [#参数-4]

#### \`streamId\` [#streamid]

数据流 ID，通过调用 \`createDataStream\` 获取。

#### \`message\` [#message]

要发送的消息内容。

<a id="api_irtcengine_sendstreammessage__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_sendstreammessageex" />

## sendStreamMessageEx [#sendstreammessageex]

发送数据流消息。

<a id="api_irtcengineex_sendstreammessageex__prototype" />

\`\`\`java
public abstract int sendStreamMessageEx(int streamId, byte[] message, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_sendstreammessageex__detailed_desc" />

调用 \`createDataStreamEx\` 后，可以使用该方法向频道内的所有用户发送数据流消息。SDK 对该方法有限制：

* 每个频道内的客户端实例最多可同时拥有 5 个数据通道，所有数据通道共享的总包比特率上限为 30 KB/s。
* 每个数据通道每秒最多可发送 60 个数据包，每个数据包最大为 1 KB。

注：

* 如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用声网的实时消息。
* 请在调用 joinChannelEx 后再调用该方法。
* 请确保在调用该方法前已通过 createDataStreamEx 创建数据通道。

<a id="api_irtcengineex_sendstreammessageex__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多频道场景。

<a id="api_irtcengineex_sendstreammessageex__related" />

### 相关回调 [#相关回调-3]

调用成功后会触发远端客户端的 [onStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage) 回调，远端用户可通过该回调获取数据流消息。调用失败则会触发远端客户端的 [onStreamMessageError](/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror) 回调。

<a id="api_irtcengineex_sendstreammessageex__parameters" />

### 参数 [#参数-5]

#### \`streamId\` [#streamid-1]

数据流 ID。你可以通过调用 \`createDataStreamEx\` 获取该 ID。

#### \`message\` [#message-1]

要发送的消息内容。

#### \`connection\` [#connection-2]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_sendstreammessageex__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="callback_irtcengineeventhandler_onstreammessage" />

## onStreamMessage [#onstreammessage]

远端用户发送数据流时的回调。

<a id="callback_irtcengineeventhandler_onstreammessage__prototype" />

\`\`\`java
public void onStreamMessage(int uid, int streamId, byte[] data)
\`\`\`

<a id="callback_irtcengineeventhandler_onstreammessage__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你需要一个更全面的低延迟、高并发和可扩展的实时消息和状态同步解决方案，建议使用声网的实时消息。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onstreammessage__timing" />

### 触发时机 [#触发时机]

该回调在本地用户收到远端用户通过 [sendStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage) 方法发送的数据流消息时被触发。

<a id="callback_irtcengineeventhandler_onstreammessage__parameters" />

### 参数 [#参数-6]

#### \`uid\` [#uid]

发送该消息的远端用户 ID。

#### \`streamId\` [#streamid-2]

接收到的消息所属的数据流 ID。

#### \`data\` [#data]

接收到的数据内容。

### 所属接口类 [#所属接口类-6]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onstreammessageerror" />

## onStreamMessageError [#onstreammessageerror]

onStreamMessageError 回调：本地用户未收到远端用户发送的数据流时触发。

<a id="callback_irtcengineeventhandler_onstreammessageerror__prototype" />

\`\`\`java
public void onStreamMessageError(int uid, int streamId, int error, int missed, int cached)
\`\`\`

<a id="callback_irtcengineeventhandler_onstreammessageerror__detailed_desc" />

该回调在本地用户未能接收到远端用户通过调用 [sendStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage) 发送的流消息时触发。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你需要一个更全面的低延迟、高并发和可扩展的实时消息和状态同步解决方案，建议使用实时消息。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onstreammessageerror__timing" />

### 触发时机 [#触发时机-1]

该回调在本地用户未能接收到远端用户通过 [sendStreamMessage](/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage) 发送的流消息时被触发。

<a id="callback_irtcengineeventhandler_onstreammessageerror__parameters" />

### 参数 [#参数-7]

#### \`uid\` [#uid-1]

发送消息的远端用户 ID。

#### \`streamId\` [#streamid-3]

接收消息对应的数据流 ID。

#### \`error\` [#error]

错误码。

#### \`missed\` [#missed]

丢失的消息数量。

#### \`cached\` [#cached]

数据流中断时缓存的传入消息数量。

### 所属接口类 [#所属接口类-7]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "createdatastream-12",
    content: "创建一个数据流，用于提升数据传输的可靠性和顺序性。"
  }, {
    heading: "createdatastream-12",
    content: "每个用户在 RtcEngine 的生命周期内最多可创建五个数据流。离开频道时，数据流会被销毁，如需继续使用需重新创建。如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用实时消息。"
  }, {
    heading: "调用时机",
    content: "你可以在加入频道前或后调用此方法。"
  }, {
    heading: "相关回调",
    content: "将 `reliable` 设置为 true 后，如果接收端在五秒内未收到数据，SDK 会触发 onStreamMessageError 回调并返回错误码。"
  }, {
    heading: "reliable",
    content: "请确保 `reliable` 和 `ordered` 同时设置为 true 或同时设置为 false。"
  }, {
    heading: "reliable",
    content: "是否保证接收端在五秒内收到数据流："
  }, {
    heading: "reliable",
    content: "true：接收端会在五秒内收到发送端的数据。如果未收到，SDK 会触发 onStreamMessageError 回调并返回错误码。"
  }, {
    heading: "reliable",
    content: "false：不保证接收端在五秒内收到数据，延迟或丢失不会触发错误回调。"
  }, {
    heading: "ordered",
    content: "是否按发送顺序接收数据流："
  }, {
    heading: "ordered",
    content: "true：接收端按发送顺序接收数据。"
  }, {
    heading: "ordered",
    content: "false：接收端不按发送顺序接收数据。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回创建的数据流 ID。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "createdatastream-22",
    content: "创建一个数据流。"
  }, {
    heading: "createdatastream-22",
    content: "该方法不保证数据传输的可靠性。如果数据包在发送后五秒内未被接收，SDK 会直接丢弃该数据。"
  }, {
    heading: "createdatastream-22",
    content: "每个用户在 RtcEngine 的生命周期内最多可以创建五个数据流。离开频道时数据流会被销毁，如需继续使用需重新创建。如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用声网实时消息。"
  }, {
    heading: "调用时机-1",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "config",
    content: "数据流的配置，详见 DataStreamConfig。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回创建的数据流 ID。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "createdatastreamex-12",
    content: "创建数据流以提升数据传输的可靠性和顺序性。"
  }, {
    heading: "废弃",
    content: "该方法已废弃，请改用 createDataStreamEx \\[2/2]"
  }, {
    heading: "废弃",
    content: "每个用户在 RtcEngine 的生命周期内最多可创建五个数据流。离开频道时数据流会被销毁，如需继续使用需重新创建。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-2",
    content: "请在调用 joinChannelEx 后调用此方法。"
  }, {
    heading: "相关回调-1",
    content: "将 `reliable` 设置为 true 后，如果接收端在五秒内未收到数据，SDK 会触发 onStreamMessageError 回调并返回错误码。"
  }, {
    heading: "reliable-1",
    content: "请确保 `reliable` 和 `ordered` 同时设置为 true 或同时设置为 false。"
  }, {
    heading: "reliable-1",
    content: "是否保证接收端在五秒内接收到数据流："
  }, {
    heading: "reliable-1",
    content: "true：接收端会在五秒内接收到发送端的数据。如果接收端在五秒内未收到数据，SDK 会触发 onStreamMessageError 回调并返回错误码。"
  }, {
    heading: "reliable-1",
    content: "false：不保证接收端在五秒内接收到数据流，延迟或丢失数据不会返回错误信息。"
  }, {
    heading: "ordered-1",
    content: "是否按发送顺序接收数据流："
  }, {
    heading: "ordered-1",
    content: "true：接收端按发送顺序接收数据。"
  }, {
    heading: "ordered-1",
    content: "false：接收端不按发送顺序接收数据。"
  }, {
    heading: "connection",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-2",
    content: "方法调用成功，返回创建的数据流 ID。"
  }, {
    heading: "返回值-2",
    content: "方法调用失败，返回小于 0 的值。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngineEx"
  }, {
    heading: "createdatastreamex-22",
    content: "创建一个数据流。"
  }, {
    heading: "createdatastreamex-22",
    content: "与 createDataStreamEx \\[1/2] 相比，该方法不保证数据传输的可靠性。如果数据包在发送后五秒内未被接收，SDK 会直接丢弃该数据。"
  }, {
    heading: "createdatastreamex-22",
    content: "每个用户在 RtcEngine 的生命周期内最多可创建五个数据流。离开频道时数据流会被销毁，如需继续使用需重新创建。如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用实时消息。"
  }, {
    heading: "适用场景-1",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-3",
    content: "请在调用 joinChannelEx 后调用该方法。"
  }, {
    heading: "config-1",
    content: "数据流的配置，详见 DataStreamConfig。"
  }, {
    heading: "connection-1",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "返回值-3",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngineEx"
  }, {
    heading: "sendstreammessage",
    content: "发送数据流消息。"
  }, {
    heading: "sendstreammessage",
    content: "调用 `createDataStream` 后，可以使用该方法向频道内的所有用户发送数据流消息。SDK 对该方法有限制："
  }, {
    heading: "sendstreammessage",
    content: "每个频道内的客户端实例最多可同时拥有 5 个数据通道，所有数据通道共享的总包比特率上限为 30 KB/s。"
  }, {
    heading: "sendstreammessage",
    content: "每个数据通道每秒最多可发送 60 个数据包，每个数据包最大为 1 KB。"
  }, {
    heading: "sendstreammessage",
    content: "注："
  }, {
    heading: "sendstreammessage",
    content: "如果你需要更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用实时消息。"
  }, {
    heading: "sendstreammessage",
    content: "必须在调用 createDataStream 并加入频道后调用该方法。"
  }, {
    heading: "sendstreammessage",
    content: "该方法仅适用于主播角色。"
  }, {
    heading: "相关回调-2",
    content: "调用成功后会触发远端客户端的 onStreamMessage 回调，远端用户可通过该回调获取数据流消息。调用失败则会触发远端客户端的 onStreamMessageError 回调。"
  }, {
    heading: "streamid",
    content: "数据流 ID，通过调用 `createDataStream` 获取。"
  }, {
    heading: "message",
    content: "要发送的消息内容。"
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
    heading: "sendstreammessageex",
    content: "发送数据流消息。"
  }, {
    heading: "sendstreammessageex",
    content: "调用 `createDataStreamEx` 后，可以使用该方法向频道内的所有用户发送数据流消息。SDK 对该方法有限制："
  }, {
    heading: "sendstreammessageex",
    content: "每个频道内的客户端实例最多可同时拥有 5 个数据通道，所有数据通道共享的总包比特率上限为 30 KB/s。"
  }, {
    heading: "sendstreammessageex",
    content: "每个数据通道每秒最多可发送 60 个数据包，每个数据包最大为 1 KB。"
  }, {
    heading: "sendstreammessageex",
    content: "注："
  }, {
    heading: "sendstreammessageex",
    content: "如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用声网的实时消息。"
  }, {
    heading: "sendstreammessageex",
    content: "请在调用 joinChannelEx 后再调用该方法。"
  }, {
    heading: "sendstreammessageex",
    content: "请确保在调用该方法前已通过 createDataStreamEx 创建数据通道。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "相关回调-3",
    content: "调用成功后会触发远端客户端的 onStreamMessage 回调，远端用户可通过该回调获取数据流消息。调用失败则会触发远端客户端的 onStreamMessageError 回调。"
  }, {
    heading: "streamid-1",
    content: "数据流 ID。你可以通过调用 `createDataStreamEx` 获取该 ID。"
  }, {
    heading: "message-1",
    content: "要发送的消息内容。"
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
    heading: "所属接口类-5",
    content: "RtcEngineEx"
  }, {
    heading: "onstreammessage",
    content: "远端用户发送数据流时的回调。"
  }, {
    heading: "onstreammessage",
    content: "如果你需要一个更全面的低延迟、高并发和可扩展的实时消息和状态同步解决方案，建议使用声网的实时消息。"
  }, {
    heading: "触发时机",
    content: "该回调在本地用户收到远端用户通过 sendStreamMessage 方法发送的数据流消息时被触发。"
  }, {
    heading: "uid",
    content: "发送该消息的远端用户 ID。"
  }, {
    heading: "streamid-2",
    content: "接收到的消息所属的数据流 ID。"
  }, {
    heading: "data",
    content: "接收到的数据内容。"
  }, {
    heading: "所属接口类-6",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onstreammessageerror",
    content: "onStreamMessageError 回调：本地用户未收到远端用户发送的数据流时触发。"
  }, {
    heading: "onstreammessageerror",
    content: "该回调在本地用户未能接收到远端用户通过调用 sendStreamMessage 发送的流消息时触发。"
  }, {
    heading: "onstreammessageerror",
    content: "如果你需要一个更全面的低延迟、高并发和可扩展的实时消息和状态同步解决方案，建议使用实时消息。"
  }, {
    heading: "触发时机-1",
    content: "该回调在本地用户未能接收到远端用户通过 sendStreamMessage 发送的流消息时被触发。"
  }, {
    heading: "uid-1",
    content: "发送消息的远端用户 ID。"
  }, {
    heading: "streamid-3",
    content: "接收消息对应的数据流 ID。"
  }, {
    heading: "error",
    content: "错误码。"
  }, {
    heading: "missed",
    content: "丢失的消息数量。"
  }, {
    heading: "cached",
    content: "数据流中断时缓存的传入消息数量。"
  }, {
    heading: "所属接口类-7",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "createdatastream-12",
    content: "createDataStream [1/2]"
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
    id: "reliable",
    content: "`reliable`"
  }, {
    id: "ordered",
    content: "`ordered`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "createdatastream-22",
    content: "createDataStream [2/2]"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "createdatastreamex-12",
    content: "createDataStreamEx [1/2]"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "reliable-1",
    content: "`reliable`"
  }, {
    id: "ordered-1",
    content: "`ordered`"
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
    id: "createdatastreamex-22",
    content: "createDataStreamEx [2/2]"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "config-1",
    content: "`config`"
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
    id: "sendstreammessage",
    content: "sendStreamMessage"
  }, {
    id: "相关回调-2",
    content: "相关回调"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "streamid",
    content: "`streamId`"
  }, {
    id: "message",
    content: "`message`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "sendstreammessageex",
    content: "sendStreamMessageEx"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "相关回调-3",
    content: "相关回调"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "streamid-1",
    content: "`streamId`"
  }, {
    id: "message-1",
    content: "`message`"
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
    id: "onstreammessage",
    content: "onStreamMessage"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "streamid-2",
    content: "`streamId`"
  }, {
    id: "data",
    content: "`data`"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "onstreammessageerror",
    content: "onStreamMessageError"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "streamid-3",
    content: "`streamId`"
  }, {
    id: "error",
    content: "`error`"
  }, {
    id: "missed",
    content: "`missed`"
  }, {
    id: "cached",
    content: "`cached`"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#createdatastream-12",
  title: _jsx(_Fragment, {
    children: "createDataStream [1/2]"
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
  url: "#reliable",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reliable"
    })
  })
}, {
  depth: 4,
  url: "#ordered",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ordered"
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
  url: "#createdatastream-22",
  title: _jsx(_Fragment, {
    children: "createDataStream [2/2]"
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
  url: "#config",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#createdatastreamex-12",
  title: _jsx(_Fragment, {
    children: "createDataStreamEx [1/2]"
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
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#reliable-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "reliable"
    })
  })
}, {
  depth: 4,
  url: "#ordered-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ordered"
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
  url: "#createdatastreamex-22",
  title: _jsx(_Fragment, {
    children: "createDataStreamEx [2/2]"
  })
}, {
  depth: 3,
  url: "#适用场景-1",
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
  url: "#参数-3",
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
  url: "#sendstreammessage",
  title: _jsx(_Fragment, {
    children: "sendStreamMessage"
  })
}, {
  depth: 3,
  url: "#相关回调-2",
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
  url: "#streamid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamId"
    })
  })
}, {
  depth: 4,
  url: "#message",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "message"
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
  url: "#sendstreammessageex",
  title: _jsx(_Fragment, {
    children: "sendStreamMessageEx"
  })
}, {
  depth: 3,
  url: "#适用场景-2",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#相关回调-3",
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
  url: "#streamid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamId"
    })
  })
}, {
  depth: 4,
  url: "#message-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "message"
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
  url: "#onstreammessage",
  title: _jsx(_Fragment, {
    children: "onStreamMessage"
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
  url: "#uid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#streamid-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamId"
    })
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
  url: "#所属接口类-6",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onstreammessageerror",
  title: _jsx(_Fragment, {
    children: "onStreamMessageError"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-7",
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
  url: "#streamid-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "streamId"
    })
  })
}, {
  depth: 4,
  url: "#error",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "error"
    })
  })
}, {
  depth: 4,
  url: "#missed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "missed"
    })
  })
}, {
  depth: 4,
  url: "#cached",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cached"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-7",
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
      id: "toc_datastream"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream1"
    }), `
`, _jsx(_components.h2, {
      id: "createdatastream-12",
      children: "createDataStream [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "创建一个数据流，用于提升数据传输的可靠性和顺序性。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream1__prototype"
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
              children: " createDataStream"
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
              children: " reliable, "
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
              children: " ordered);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream1__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["每个用户在 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 的生命周期内最多可创建五个数据流。离开频道时，数据流会被销毁，如需继续使用需重新创建。如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用实时消息。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream1__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream1__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["将 ", _jsx(_components.code, {
        children: "reliable"
      }), " 设置为 true 后，如果接收端在五秒内未收到数据，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror",
        children: "onStreamMessageError"
      }), " 回调并返回错误码。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "reliable",
      children: _jsx(_components.code, {
        children: "reliable"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请确保 ", _jsx(_components.code, {
            children: "reliable"
          }), " 和 ", _jsx(_components.code, {
            children: "ordered"
          }), " 同时设置为 true 或同时设置为 false。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否保证接收端在五秒内收到数据流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：接收端会在五秒内收到发送端的数据。如果未收到，SDK 会触发 onStreamMessageError 回调并返回错误码。"
      }), `
`, _jsx(_components.li, {
        children: "false：不保证接收端在五秒内收到数据，延迟或丢失不会触发错误回调。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "ordered",
      children: _jsx(_components.code, {
        children: "ordered"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否按发送顺序接收数据流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：接收端按发送顺序接收数据。"
      }), `
`, _jsx(_components.li, {
        children: "false：接收端不按发送顺序接收数据。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream1__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回创建的数据流 ID。"
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
      id: "api_irtcengine_createdatastream2"
    }), `
`, _jsx(_components.h2, {
      id: "createdatastream-22",
      children: "createDataStream [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "创建一个数据流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream2__prototype"
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
              children: " createDataStream"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(DataStreamConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream2__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法不保证数据传输的可靠性。如果数据包在发送后五秒内未被接收，SDK 会直接丢弃该数据。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["每个用户在 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 的生命周期内最多可以创建五个数据流。离开频道时数据流会被销毁，如需继续使用需重新创建。如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用声网实时消息。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["数据流的配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-datastreamconfig",
        children: "DataStreamConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createdatastream2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回创建的数据流 ID。"
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
      id: "api_irtcengineex_createdatastreamex1"
    }), `
`, _jsx(_components.h2, {
      id: "createdatastreamex-12",
      children: "createDataStreamEx [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "创建数据流以提升数据传输的可靠性和顺序性。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex1__prototype"
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
              children: " createDataStreamEx"
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
              children: " reliable, "
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
              children: " ordered, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex1__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex2",
        children: "createDataStreamEx [2/2]"
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["每个用户在 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 的生命周期内最多可创建五个数据流。离开频道时数据流会被销毁，如需继续使用需重新创建。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex1__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex1__timing"
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
      id: "api_irtcengineex_createdatastreamex1__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["将 ", _jsx(_components.code, {
        children: "reliable"
      }), " 设置为 true 后，如果接收端在五秒内未收到数据，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror",
        children: "onStreamMessageError"
      }), " 回调并返回错误码。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "reliable-1",
      children: _jsx(_components.code, {
        children: "reliable"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请确保 ", _jsx(_components.code, {
            children: "reliable"
          }), " 和 ", _jsx(_components.code, {
            children: "ordered"
          }), " 同时设置为 true 或同时设置为 false。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否保证接收端在五秒内接收到数据流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：接收端会在五秒内接收到发送端的数据。如果接收端在五秒内未收到数据，SDK 会触发 onStreamMessageError 回调并返回错误码。"
      }), `
`, _jsx(_components.li, {
        children: "false：不保证接收端在五秒内接收到数据流，延迟或丢失数据不会返回错误信息。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "ordered-1",
      children: _jsx(_components.code, {
        children: "ordered"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否按发送顺序接收数据流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：接收端按发送顺序接收数据。"
      }), `
`, _jsx(_components.li, {
        children: "false：接收端不按发送顺序接收数据。"
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
      children: ["连接信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex1__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回创建的数据流 ID。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回小于 0 的值。"
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
      id: "api_irtcengineex_createdatastreamex2"
    }), `
`, _jsx(_components.h2, {
      id: "createdatastreamex-22",
      children: "createDataStreamEx [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "创建一个数据流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex2__prototype"
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
              children: " createDataStreamEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(DataStreamConfig config, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengineex_createdatastreamex1",
        children: "createDataStreamEx [1/2]"
      }), " 相比，该方法不保证数据传输的可靠性。如果数据包在发送后五秒内未被接收，SDK 会直接丢弃该数据。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["每个用户在 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 的生命周期内最多可创建五个数据流。离开频道时数据流会被销毁，如需继续使用需重新创建。如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用实时消息。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_createdatastreamex2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-1",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["数据流的配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-datastreamconfig",
        children: "DataStreamConfig"
      }), "。"]
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
      id: "api_irtcengineex_createdatastreamex2__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_sendstreammessage"
    }), `
`, _jsx(_components.h2, {
      id: "sendstreammessage",
      children: "sendStreamMessage"
    }), `
`, _jsx(_components.p, {
      children: "发送数据流消息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_sendstreammessage__prototype"
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
              children: " sendStreamMessage"
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
              children: " streamId, "
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
              children: "[] message);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_sendstreammessage__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "createDataStream"
      }), " 后，可以使用该方法向频道内的所有用户发送数据流消息。SDK 对该方法有限制："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "每个频道内的客户端实例最多可同时拥有 5 个数据通道，所有数据通道共享的总包比特率上限为 30 KB/s。"
      }), `
`, _jsx(_components.li, {
        children: "每个数据通道每秒最多可发送 60 个数据包，每个数据包最大为 1 KB。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你需要更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用实时消息。"
      }), `
`, _jsx(_components.li, {
        children: "必须在调用 createDataStream 并加入频道后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "该方法仅适用于主播角色。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_sendstreammessage__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-2",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用成功后会触发远端客户端的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage",
        children: "onStreamMessage"
      }), " 回调，远端用户可通过该回调获取数据流消息。调用失败则会触发远端客户端的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror",
        children: "onStreamMessageError"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_sendstreammessage__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "streamid",
      children: _jsx(_components.code, {
        children: "streamId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["数据流 ID，通过调用 ", _jsx(_components.code, {
        children: "createDataStream"
      }), " 获取。"]
    }), `
`, _jsx(_components.h4, {
      id: "message",
      children: _jsx(_components.code, {
        children: "message"
      })
    }), `
`, _jsx(_components.p, {
      children: "要发送的消息内容。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_sendstreammessage__return_values"
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
      id: "api_irtcengineex_sendstreammessageex"
    }), `
`, _jsx(_components.h2, {
      id: "sendstreammessageex",
      children: "sendStreamMessageEx"
    }), `
`, _jsx(_components.p, {
      children: "发送数据流消息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendstreammessageex__prototype"
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
              children: " sendStreamMessageEx"
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
              children: " streamId, "
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
              children: "[] message, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendstreammessageex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "createDataStreamEx"
      }), " 后，可以使用该方法向频道内的所有用户发送数据流消息。SDK 对该方法有限制："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "每个频道内的客户端实例最多可同时拥有 5 个数据通道，所有数据通道共享的总包比特率上限为 30 KB/s。"
      }), `
`, _jsx(_components.li, {
        children: "每个数据通道每秒最多可发送 60 个数据包，每个数据包最大为 1 KB。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你需要一个更全面的低延迟、高并发、可扩展的实时消息和状态同步解决方案，建议使用声网的实时消息。"
      }), `
`, _jsx(_components.li, {
        children: "请在调用 joinChannelEx 后再调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "请确保在调用该方法前已通过 createDataStreamEx 创建数据通道。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendstreammessageex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendstreammessageex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-3",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用成功后会触发远端客户端的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessage",
        children: "onStreamMessage"
      }), " 回调，远端用户可通过该回调获取数据流消息。调用失败则会触发远端客户端的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#callback_irtcengineeventhandler_onstreammessageerror",
        children: "onStreamMessageError"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendstreammessageex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "streamid-1",
      children: _jsx(_components.code, {
        children: "streamId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["数据流 ID。你可以通过调用 ", _jsx(_components.code, {
        children: "createDataStreamEx"
      }), " 获取该 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "message-1",
      children: _jsx(_components.code, {
        children: "message"
      })
    }), `
`, _jsx(_components.p, {
      children: "要发送的消息内容。"
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
      id: "api_irtcengineex_sendstreammessageex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onstreammessage"
    }), `
`, _jsx(_components.h2, {
      id: "onstreammessage",
      children: "onStreamMessage"
    }), `
`, _jsx(_components.p, {
      children: "远端用户发送数据流时的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onstreammessage__prototype"
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
              children: " onStreamMessage"
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
              children: " streamId, "
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
              children: "[] data)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onstreammessage__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果你需要一个更全面的低延迟、高并发和可扩展的实时消息和状态同步解决方案，建议使用声网的实时消息。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onstreammessage__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在本地用户收到远端用户通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage",
        children: "sendStreamMessage"
      }), " 方法发送的数据流消息时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onstreammessage__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送该消息的远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "streamid-2",
      children: _jsx(_components.code, {
        children: "streamId"
      })
    }), `
`, _jsx(_components.p, {
      children: "接收到的消息所属的数据流 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "data",
      children: _jsx(_components.code, {
        children: "data"
      })
    }), `
`, _jsx(_components.p, {
      children: "接收到的数据内容。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-6",
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
      id: "callback_irtcengineeventhandler_onstreammessageerror"
    }), `
`, _jsx(_components.h2, {
      id: "onstreammessageerror",
      children: "onStreamMessageError"
    }), `
`, _jsx(_components.p, {
      children: "onStreamMessageError 回调：本地用户未收到远端用户发送的数据流时触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onstreammessageerror__prototype"
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
              children: " onStreamMessageError"
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
              children: " streamId, "
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
              children: " error, "
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
              children: " missed, "
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
              children: " cached)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onstreammessageerror__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在本地用户未能接收到远端用户通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage",
        children: "sendStreamMessage"
      }), " 发送的流消息时触发。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果你需要一个更全面的低延迟、高并发和可扩展的实时消息和状态同步解决方案，建议使用实时消息。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onstreammessageerror__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在本地用户未能接收到远端用户通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/metadata/datastream#api_irtcengine_sendstreammessage",
        children: "sendStreamMessage"
      }), " 发送的流消息时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onstreammessageerror__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-1",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送消息的远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "streamid-3",
      children: _jsx(_components.code, {
        children: "streamId"
      })
    }), `
`, _jsx(_components.p, {
      children: "接收消息对应的数据流 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "error",
      children: _jsx(_components.code, {
        children: "error"
      })
    }), `
`, _jsx(_components.p, {
      children: "错误码。"
    }), `
`, _jsx(_components.h4, {
      id: "missed",
      children: _jsx(_components.code, {
        children: "missed"
      })
    }), `
`, _jsx(_components.p, {
      children: "丢失的消息数量。"
    }), `
`, _jsx(_components.h4, {
      id: "cached",
      children: _jsx(_components.code, {
        children: "cached"
      })
    }), `
`, _jsx(_components.p, {
      children: "数据流中断时缓存的传入消息数量。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-7",
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
