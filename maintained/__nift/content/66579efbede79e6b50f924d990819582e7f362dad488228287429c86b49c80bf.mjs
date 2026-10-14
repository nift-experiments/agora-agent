import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "频道相关",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_channel" />

<a id="api_irtcengine_getuserinfobyuid" />

## getUserInfoByUid [#getuserinfobyuid]

通过传入用户 ID 获取用户信息。

<a id="api_irtcengine_getuserinfobyuid__prototype" />

\`\`\`java
public abstract int getUserInfoByUid(int uid, UserInfo userInfo);
\`\`\`

<a id="api_irtcengine_getuserinfobyuid__detailed_desc" />

当远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 [onUserInfoUpdated](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated) 回调。收到该回调后，你可以调用 [getUserInfoByUid](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_getuserinfobyuid) 方法并传入用户 ID，从 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo) 对象中获取指定用户的用户 User Account。

<a id="api_irtcengine_getuserinfobyuid__timing" />

### 调用时机 [#调用时机]

该方法在收到 [onUserInfoUpdated](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated) 回调后调用。

<a id="api_irtcengine_getuserinfobyuid__parameters" />

### 参数 [#参数]

#### \`uid\` [#uid]

\`uid\`，表示用户 ID。

#### \`userInfo\` [#userinfo]

输入和输出参数，用于标识用户信息的 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo) 对象。详见 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo)。

<a id="api_irtcengine_getuserinfobyuid__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_getuserinfobyuidex" />

## getUserInfoByUidEx [#getuserinfobyuidex]

通过传入用户 ID 获取用户信息。

<a id="api_irtcengineex_getuserinfobyuidex__prototype" />

\`\`\`java
public abstract int getUserInfoByUidEx(int uid, UserInfo userInfo, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_getuserinfobyuidex__detailed_desc" />

当远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 [onUserInfoUpdated](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated) 回调。收到该回调后，你可以调用 [getUserInfoByUidEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuidex) 并传入用户 ID，从 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo) 对象中获取指定用户的用户 User Account。

<a id="api_irtcengineex_getuserinfobyuidex__scenario" />

### 适用场景 [#适用场景]

适用于多频道场景。

<a id="api_irtcengineex_getuserinfobyuidex__parameters" />

### 参数 [#参数-1]

#### \`uid\` [#uid-1]

用户 ID。

#### \`userInfo\` [#userinfo-1]

用于标识用户信息的对象。详见 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo)。

#### \`connection\` [#connection]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_getuserinfobyuidex__return_values" />

### 返回值 [#返回值-1]

* 方法调用成功，返回 UserInfo 对象。
* 方法调用失败，返回 null。

### 所属接口类 [#所属接口类-1]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_getuserinfobyuseraccount" />

## getUserInfoByUserAccount [#getuserinfobyuseraccount]

通过传入用户 User Account 获取用户信息。

<a id="api_irtcengine_getuserinfobyuseraccount__prototype" />

\`\`\`java
public abstract int getUserInfoByUserAccount(String userAccount, UserInfo userInfo);
\`\`\`

<a id="api_irtcengine_getuserinfobyuseraccount__detailed_desc" />

当远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 [onUserInfoUpdated](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated) 回调。收到该回调后，你可以调用 [getUserInfoByUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_getuserinfobyuseraccount) 方法并传入用户 User Account，从 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo) 对象中获取指定用户的信息。

<a id="api_irtcengine_getuserinfobyuseraccount__parameters" />

### 参数 [#参数-2]

#### \`userAccount\` [#useraccount]

用户 User Account。

#### \`userInfo\` [#userinfo-2]

用于标识用户信息的 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo) 对象。详见 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo)。

<a id="api_irtcengine_getuserinfobyuseraccount__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_getuserinfobyuseraccountex" />

## getUserInfoByUserAccountEx [#getuserinfobyuseraccountex]

通过用户 User Account 获取用户信息。

<a id="api_irtcengineex_getuserinfobyuseraccountex__prototype" />

\`\`\`java
public abstract int getUserInfoByUserAccountEx(String userAccount, UserInfo userInfo, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_getuserinfobyuseraccountex__detailed_desc" />

远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 [onUserInfoUpdated](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated) 回调。收到该回调后，你可以调用 [getUserInfoByUserAccountEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuseraccountex) 并传入用户 User Account，从 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo) 对象中获取指定用户的用户信息。

<a id="api_irtcengineex_getuserinfobyuseraccountex__scenario" />

### 适用场景 [#适用场景-1]

该方法适用于多频道场景。

<a id="api_irtcengineex_getuserinfobyuseraccountex__parameters" />

### 参数 [#参数-3]

#### \`userAccount\` [#useraccount-1]

用户 User Account。

#### \`userInfo\` [#userinfo-3]

输入和输出参数，用于标识用户信息。详见 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo)。

#### \`connection\` [#connection-1]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_getuserinfobyuseraccountex__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_joinchannel1" />

## joinChannel \\[1/2] [#joinchannel-12]

加入一个频道。

<a id="api_irtcengine_joinchannel1__prototype" />

\`\`\`java
public abstract int joinChannel(String token, String channelId, String optionalInfo, int uid);
\`\`\`

<a id="api_irtcengine_joinchannel1__detailed_desc" />

默认情况下，用户会订阅频道中其他所有用户的音视频流，从而产生使用量和计费。如需停止订阅指定流或所有远端流，请调用 \`muteRemoteAudio/VideoStream\` 或 \`muteAllRemoteAudio/VideoStreams\`。

注：

* 该方法仅支持用户同时加入一个频道。
* 不同 App ID 的用户无法互通。
* 加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 相同，否则可能会导致加入频道失败。

<a id="api_irtcengine_joinchannel1__timing" />

### 调用时机 [#调用时机-1]

请在调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 方法后调用本方法。

<a id="api_irtcengine_joinchannel1__related" />

### 相关回调 [#相关回调]

调用该方法成功后会触发以下回调：

* 本地客户端： onJoinChannelSuccess 和 onConnectionStateChanged 回调。
* 远端客户端：如果是 COMMUNICATION 频道场景中有用户加入频道，或 LIVE\\_BROADCASTING 频道场景中有主播加入频道，则触发 onUserJoined 回调。

当由于网络状况不佳导致本地客户端与声网服务器的连接中断时，SDK 会尝试重连服务器。当本地客户端成功重回频道时，SDK 会触发本地客户端的 [onRejoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess) 回调。

<a id="api_irtcengine_joinchannel1__parameters" />

### 参数 [#参数-4]

#### \`token\` [#token]

在你的服务器上生成的用于鉴权的 Token。

注：

* （推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。
* 如果你仅启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，24 小时后会自动退出频道。
* 如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样每次加入频道时无需重新申请 Token。

#### \`channelId\` [#channelid]

频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）：

* 所有小写英文字母：a 到 z。
* 所有大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","

#### \`optionalInfo\` [#optionalinfo]

（可选）预留参数。

#### \`uid\` [#uid-2]

用户 ID。用于标识频道中的用户以进行实时音视频互动。你需要自行设置和管理用户 ID，并确保同一频道中每个用户 ID 唯一。该参数为 32 位无符号整数，取值范围为 -2^31 到 2^31-1。如果未指定用户 ID（或设置为 0），SDK 会自动分配一个随机用户 ID，并通过 [onJoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess) 回调返回。你的应用需记录并维护该返回的用户 ID，SDK 不会保存。

<a id="api_irtcengine_joinchannel1__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中的成员值无效。请传入有效参数后重新加入频道。
  * -3： RtcEngine 对象初始化失败。请重新初始化 RtcEngine 对象。
  * -7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。
  * -8： RtcEngine 对象内部状态错误。常见原因是在调用 startEchoTest 开始通话回声测试后，未调用 stopEchoTest 停止测试就调用该方法加入频道。请先调用 stopEchoTest 再调用该方法。
  * -17：加入频道请求被拒绝。常见原因是用户已在频道中。声网建议使用 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时才调用该方法加入频道。
  * -102：频道名无效。请在 channelId 中传入有效的频道名重新加入频道。
  * -121：用户 ID 无效。请在 uid 中传入有效的用户 ID 重新加入频道。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_joinchannel2" />

## joinChannel \\[2/2] [#joinchannel-22]

加入频道并设置媒体选项。

<a id="api_irtcengine_joinchannel2__prototype" />

\`\`\`java
public abstract int joinChannel(String token, String channelId, int uid, ChannelMediaOptions options);
\`\`\`

<a id="api_irtcengine_joinchannel2__detailed_desc" />

该方法新增 \`options\` 参数，用于设置媒体选项，例如是否在频道内发布音视频流，或在加入频道时是否自动订阅所有远端用户的音视频流。默认情况下，用户会订阅频道中所有其他用户的音视频流，从而产生使用量和计费。如需停止订阅其他流，请设置 \`options\` 参数或调用 \`muteRemoteAudio/VideoStream\` 或 \`muteAllRemoteAudio/VideoStreams\`。

注：

* 该方法仅支持用户同时加入一个频道。
* 不同 App ID 的用户无法互通。
* 加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 一致，否则可能导致加入频道失败。

<a id="api_irtcengine_joinchannel2__timing" />

### 调用时机 [#调用时机-2]

请在调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 方法后调用该方法。

<a id="api_irtcengine_joinchannel2__related" />

### 相关回调 [#相关回调-1]

调用该方法成功后会触发以下回调：

* 本地客户端： onJoinChannelSuccess 和 onConnectionStateChanged 回调。
* 远端客户端：如果用户在 COMMUNICATION 频道场景中加入频道，或主播在 LIVE\\_BROADCASTING 频道场景中加入频道，会触发 onUserJoined 回调。

当由于网络状况不佳导致本地客户端与声网服务器的连接中断时，SDK 会尝试重新连接服务器。当本地客户端成功重新加入频道时，SDK 会在本地客户端触发 [onRejoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess) 回调。

<a id="api_irtcengine_joinchannel2__parameters" />

### 参数 [#参数-5]

#### \`token\` [#token-1]

在你的服务器上生成的用于鉴权的 Token。

注：

* （推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。
* 如果只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，24 小时后会自动退出频道。
* 如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样每次加入频道时无需重新申请 Token。

#### \`channelId\` [#channelid-1]

频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）：

* 所有小写英文字母：a 到 z。
* 所有大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","。

#### \`uid\` [#uid-3]

用户 ID。用于标识频道中的用户。你需要自行设置和管理用户 ID，并确保同一频道中每个用户 ID 唯一。该参数为 32 位无符号整数，取值范围为 -2³¹ 到 2³¹-1。如果未指定用户 ID（或设置为 0），SDK 会自动分配一个随机用户 ID，并在 [onJoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess) 回调中返回。你的应用必须记录并维护该返回的用户 ID，SDK 不会保存。

#### \`options\` [#options]

频道媒体选项，详见 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions)。

<a id="api_irtcengine_joinchannel2__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 options 中的成员值无效。请传入有效参数并重新加入频道。
  * -3： RtcEngine 对象初始化失败。请重新初始化 RtcEngine 对象。
  * -7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。
  * -8： RtcEngine 对象内部状态错误。常见原因是在调用 startEchoTest 开始通话回声测试后，未调用 stopEchoTest 停止测试就调用该方法加入频道。请先调用 stopEchoTest 再调用该方法。
  * -17：加入频道请求被拒绝。常见原因是用户已在频道中。声网建议使用 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时才调用该方法加入频道。
  * -102：频道名无效。请在 channelId 中传入有效的频道名重新加入频道。
  * -121：用户 ID 无效。请在 uid 中传入有效的用户 ID 重新加入频道。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_joinchannelex" />

## joinChannelEx [#joinchannelex]

加入一个频道。

<a id="api_irtcengineex_joinchannelex__prototype" />

\`\`\`java
public abstract int joinChannelEx(String token, RtcConnection connection, ChannelMediaOptions options, IRtcEngineEventHandler eventHandler);
\`\`\`

<a id="api_irtcengineex_joinchannelex__detailed_desc" />

你可以多次调用此方法加入多个频道。 在多摄像头采集场景中，调用此方法后需要调用 \`startPreview\` 方法，并将 \`sourceType\` 设置为 \`VIDEO_SOURCE_CAMERA_SECONDARY\`，以确保第二路摄像头正常采集。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你已经在一个频道中，不能使用相同的用户 ID 重新加入该频道。 在加入频道前，确保用于生成 Token 的 App ID 与调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 方法时传入的 App ID 相同，否则可能会导致加入频道失败。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_joinchannelex__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多频道场景。

<a id="api_irtcengineex_joinchannelex__timing" />

### 调用时机 [#调用时机-3]

在调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 方法之后调用。

<a id="api_irtcengineex_joinchannelex__related" />

### 相关回调 [#相关回调-2]

成功调用该方法会触发以下回调：

* 本地客户端： onJoinChannelSuccess 和 onConnectionStateChanged 回调。
* 远端客户端：如果是 COMMUNICATION 频道场景中有用户加入频道，或 LIVE\\_BROADCASTING 频道场景中有主播加入频道，则触发 onUserJoined 回调。

当由于网络状况不佳导致本地客户端与声网服务器的连接中断时，SDK 会尝试重连服务器。当本地客户端成功重新加入频道时，SDK 会触发本地客户端的 [onRejoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess) 回调。

<a id="api_irtcengineex_joinchannelex__parameters" />

### 参数 [#参数-6]

#### \`token\` [#token-2]

用于鉴权的 Token。

注：

* （推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。
* 如果你只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，你将在 24 小时后自动退出频道。
* 如果你需要同时加入不同频道或在频道之间切换，声网建议使用通配符 Token，这样你每次加入频道时无需重新申请 Token。

#### \`connection\` [#connection-2]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

#### \`options\` [#options-1]

频道媒体选项。详见 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions)。

#### \`eventHandler\` [#eventhandler]

回调类。详见 [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)。你可以通过该参数传入的 \`eventHandler\` 对象获取多个频道的回调事件。

<a id="api_irtcengineex_joinchannelex__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中的成员值无效。你需要传入有效参数并重新加入频道。
  * -3：初始化 RtcEngine 对象失败。你需要重新初始化 RtcEngine 对象。
  * -7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用此方法。
  * -8： RtcEngine 对象的内部状态错误。典型原因是在调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用此方法加入频道。你需要先调用 stopEchoTest 再调用此方法。
  * -17：加入频道请求被拒绝。典型原因是用户已在频道中。声网建议你通过 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时才调用此方法加入频道。
  * -102：频道名无效。你需要在 channelId 中传入有效的频道名以重新加入频道。
  * -121：用户 ID 无效。你需要在 uid 中传入有效的用户 ID 以重新加入频道。

### 所属接口类 [#所属接口类-6]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_joinchannelwithuseraccount1" />

## joinChannelWithUserAccount \\[1/2] [#joinchannelwithuseraccount-12]

使用用户 User Account 和 Token 加入频道。

<a id="api_irtcengine_joinchannelwithuseraccount1__prototype" />

\`\`\`java
public abstract int joinChannelWithUserAccount(String token, String channelName, String userAccount);
\`\`\`

<a id="api_irtcengine_joinchannelwithuseraccount1__detailed_desc" />

调用 [registerLocalUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount) 注册用户 User Account 后再调用此方法加入频道，可以缩短进入频道所需的时间。如果你尚未调用 [registerLocalUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount) 注册用户 User Account，当你调用此方法加入频道时，SDK 会自动为你创建一个用户 User Account。 一旦用户加入频道，默认会订阅频道中所有其他用户的音视频流，从而产生用量和计费。如需停止订阅指定流或所有远端流，请调用 \`muteRemoteAudio/VideoStream\` 或 \`muteAllRemoteAudio/VideoStreams\`。

注：

* 该方法仅支持用户同时加入一个频道。
* 不同 App ID 的用户无法互通。
* 加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 相同，否则可能会导致使用该 Token 加入频道失败。
* 为确保通信顺畅，请使用相同的参数类型标识用户。例如，如果某用户使用 uid 加入频道，则其他用户也应使用 uid；如果使用用户 User Account 加入频道，则其他用户也应使用用户 User Account。如果用户使用声网 Web SDK 加入频道，请确保用户 ID 设置为相同的参数类型。

<a id="api_irtcengine_joinchannelwithuseraccount1__timing" />

### 调用时机 [#调用时机-4]

请在调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 方法后调用此方法。

<a id="api_irtcengine_joinchannelwithuseraccount1__related" />

### 相关回调 [#相关回调-3]

本地客户端： [onLocalUserRegistered](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered)、 [onJoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess) 和 [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged) 回调。 远端客户端：如果用户在 \`COMMUNICATION\` 频道场景中加入频道，或主播在 \`LIVE_BROADCASTING\` 频道场景中加入频道，则会触发 [onUserJoined](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined) 和 [onUserInfoUpdated](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated) 回调。

<a id="api_irtcengine_joinchannelwithuseraccount1__parameters" />

### 参数 [#参数-7]

#### \`token\` [#token-3]

在你的服务器上生成的用于鉴权的 Token。

注：

* （推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。
* 如果你只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，你将在 24 小时后自动退出频道。
* 如果你需要同时加入不同频道或在频道间切换，声网建议使用通配符 Token，这样你每次加入频道时无需重新申请 Token。

#### \`channelName\` [#channelname]

频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）：

* 所有小写英文字母：a 到 z。
* 所有大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","

#### \`userAccount\` [#useraccount-2]

用户 User Account。用于标识频道中的用户以进行实时音视频互动。你需要自行设置和管理用户 User Account，并确保同一频道中的每个用户 User Account 唯一。该参数的最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）：

* 26 个小写英文字母：a 到 z。
* 26 个大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* 空格
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","

<a id="api_irtcengine_joinchannelwithuseraccount1__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中某成员的值无效。你需要传入有效参数并重新加入频道。
  * -3： RtcEngine 对象初始化失败。你需要重新初始化 RtcEngine 对象。
  * -7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用此方法。
  * -8： RtcEngine 对象内部状态错误。典型原因是调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用此方法加入频道。你需要先调用 stopEchoTest 再调用此方法。
  * -17：加入频道请求被拒绝。典型原因是用户已在频道中。声网建议你使用 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时才调用此方法加入频道。
  * -102：频道名无效。你需要在 channelId 中传入有效的频道名重新加入频道。
  * -121：用户 ID 无效。你需要在 uid 中传入有效的用户 ID 重新加入频道。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_joinchannelwithuseraccount2" />

## joinChannelWithUserAccount \\[2/2] [#joinchannelwithuseraccount-22]

使用用户 User Account 和 Token 加入频道，并设置媒体选项。

<a id="api_irtcengine_joinchannelwithuseraccount2__prototype" />

\`\`\`java
public abstract int joinChannelWithUserAccount(String token, String channelName, String userAccount, ChannelMediaOptions options);
\`\`\`

<a id="api_irtcengine_joinchannelwithuseraccount2__detailed_desc" />

#### \`自从\` [#自从]

自 v3.3.0 版本新增。

该方法新增了 \`options\` 参数，用于设置媒体选项，例如是否在频道内发布音视频流。默认情况下，用户会订阅频道内所有其他用户的音视频流，从而产生使用量和计费。如需停止订阅其他流，请设置 \`options\` 参数或调用 \`muteRemoteAudio/VideoStream\` 或 \`muteAllRemoteAudio/VideoStreams\`。

注：

* 此方法仅支持用户同时加入一个频道。
* 不同 App ID 的用户无法互通。
* 加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 相同，否则可能会因 Token 不匹配而加入频道失败。
* 为确保通信顺畅，请使用相同的参数类型标识用户。例如，如果某用户使用用户 ID 加入频道，则其他用户也应使用用户 ID；用户 User Account 亦同理。如果用户使用声网 Web SDK 加入频道，请确保用户 ID 的类型一致。

<a id="api_irtcengine_joinchannelwithuseraccount2__timing" />

### 调用时机 [#调用时机-5]

在调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 方法之后调用此方法。

<a id="api_irtcengine_joinchannelwithuseraccount2__related" />

### 相关回调 [#相关回调-4]

本地客户端： [onLocalUserRegistered](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered)、 [onJoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess) 和 [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged) 回调。 远端客户端：如果用户在 \`COMMUNICATION\` 频道场景中加入频道，或主播在 \`LIVE_BROADCASTING\` 频道场景中加入频道，则触发 [onUserJoined](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined) 和 [onUserInfoUpdated](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated) 回调。

<a id="api_irtcengine_joinchannelwithuseraccount2__parameters" />

### 参数 [#参数-8]

#### \`token\` [#token-4]

在你的服务器上生成的用于鉴权的 Token。

注：

* （推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），此参数为必填。
* 如果你仅启用了测试模式（使用 App ID 进行鉴权），此参数为可选。成功加入频道后，24 小时后会自动退出频道。
* 如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样你每次加入频道时无需重新申请 Token。

#### \`channelName\` [#channelname-1]

频道名。在相同 App ID 前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）：

* 所有小写英文字母：a 到 z。
* 所有大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","

#### \`userAccount\` [#useraccount-3]

用户 User Account。你需要自行设置和管理用户 User Account，并确保同一频道内的每个用户 User Account 唯一。该参数最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）：

* 26 个小写英文字母：a 到 z。
* 26 个大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* 空格
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","

#### \`options\` [#options-2]

频道媒体选项，详见 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions)。

<a id="api_irtcengine_joinchannelwithuseraccount2__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中某成员的值无效。请传入有效参数并重新加入频道。
  * -3：初始化 RtcEngine 对象失败。请重新初始化 RtcEngine 对象。
  * -7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用此方法。
  * -8： RtcEngine 对象内部状态错误。典型原因是调用 startEchoTest 开始通话回声测试后，未调用 stopEchoTest 停止测试就调用此方法加入频道。请先调用 stopEchoTest 再调用此方法。
  * -17：加入频道请求被拒绝。典型原因是用户已在频道中。声网建议使用 onConnectionStateChanged 回调判断用户是否在频道中。仅当收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时再调用此方法加入频道。
  * -102：频道名无效。请在 channelId 中传入有效的频道名重新加入频道。
  * -121：用户 ID 无效。请在 uid 中传入有效的用户 ID 重新加入频道。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_joinchannelwithuseraccountex" />

## joinChannelWithUserAccountEx [#joinchannelwithuseraccountex]

使用用户 User Account 和 Token 加入频道，并设置媒体选项。

<a id="api_irtcengineex_joinchannelwithuseraccountex__prototype" />

\`\`\`java
public abstract int joinChannelWithUserAccountEx(String token, String channelId, String userAccount, ChannelMediaOptions options, IRtcEngineEventHandler eventHandler);
\`\`\`

<a id="api_irtcengineex_joinchannelwithuseraccountex__detailed_desc" />

在调用此方法之前，如果你尚未调用 [registerLocalUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount) 注册用户 User Account，SDK 会在你调用此方法加入频道时自动创建用户 User Account。提前调用 [registerLocalUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount) 可以缩短加入频道所需的时间。 一旦用户加入频道，默认会订阅频道中所有其他用户的音视频流，从而产生使用量和计费。如果你希望停止订阅其他用户的媒体流，可以设置 \`options\` 参数或调用 \`muteRemoteAudio/VideoStream\` 或 \`muteAllRemoteAudio/VideoStreams\`。

注：

* 该方法仅支持用户同时加入一个频道。
* 不同 App ID 的用户无法互通。
* 加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 相同，否则可能导致加入频道失败。
* 为确保通信顺畅，请使用相同的参数类型标识用户。例如，如果某用户使用 uid 加入频道，则其他用户也应使用 uid；如果使用用户 User Account 加入频道，则其他用户也应使用用户 User Account。若使用声网 Web SDK 加入频道，请确保用户 ID 的参数类型一致。

<a id="api_irtcengineex_joinchannelwithuseraccountex__scenario" />

### 适用场景 [#适用场景-3]

该方法适用于多频道场景。

<a id="api_irtcengineex_joinchannelwithuseraccountex__timing" />

### 调用时机 [#调用时机-6]

在调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 之后调用此方法。

<a id="api_irtcengineex_joinchannelwithuseraccountex__related" />

### 相关回调 [#相关回调-5]

本地客户端： [onLocalUserRegistered](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered)、 [onJoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess) 和 [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged) 回调。 远端客户端：如果用户在 \`COMMUNICATION\` 频道场景中加入频道，或主播在 \`LIVE_BROADCASTING\` 频道场景中加入频道，则触发 [onUserJoined](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined) 和 [onUserInfoUpdated](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated) 回调。

<a id="api_irtcengineex_joinchannelwithuseraccountex__parameters" />

### 参数 [#参数-9]

#### \`token\` [#token-5]

在你的服务器上生成的用于鉴权的 Token。

注：

* （推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。
* 如果你只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，你将在 24 小时后自动退出频道。
* 如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样你无需每次加入频道时都申请新的 Token。

#### \`channelId\` [#channelid-2]

频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）：

* 所有小写英文字母：a 到 z。
* 所有大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","

#### \`userAccount\` [#useraccount-4]

用户 User Account。你需要自行设置和管理用户 User Account，并确保同一频道中的每个用户 User Account 唯一。该参数的最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）：

* 26 个小写英文字母：a 到 z。
* 26 个大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* 空格
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","

#### \`options\` [#options-3]

频道媒体选项。详见 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions)。

#### \`eventHandler\` [#eventhandler-1]

[RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex) 的回调类。详见 [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)。你可以通过该参数传入的 \`eventHandler\` 对象获取多个频道的回调事件。

<a id="api_irtcengineex_joinchannelwithuseraccountex__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。例如 Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中某成员的值无效。请传入有效参数后重新加入频道。
  * -3： RtcEngine 对象初始化失败。请重新初始化 RtcEngine 对象。
  * -7： RtcEngine 对象尚未初始化。请先初始化后再调用此方法。
  * -8： RtcEngine 对象内部状态错误。典型原因是在调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用此方法。请先调用 stopEchoTest 再调用此方法。
  * -17：加入频道请求被拒绝。典型原因是用户已在频道中。建议通过 onConnectionStateChanged 回调确认用户是否已在频道中，除非收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态，否则不要调用此方法。
  * -102：频道名无效。请在 channelId 中传入有效的频道名后重新加入频道。
  * -121：用户 ID 无效。请在 uid 中传入有效的用户 ID 后重新加入频道。

### 所属接口类 [#所属接口类-9]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_leavechannel" />

## leaveChannel \\[1/2] [#leavechannel-12]

离开频道。

<a id="api_irtcengine_leavechannel__prototype" />

\`\`\`java
public abstract int leaveChannel();
\`\`\`

<a id="api_irtcengine_leavechannel__detailed_desc" />

调用该方法后，SDK 会终止音视频互动，释放与会话相关的所有资源。加入频道后，必须调用该方法结束通话，否则无法开始下一次通话。

注：

* 如果在调用该方法后立即调用 destroy \\[2/2]，SDK 不会触发 onLeaveChannel 回调。
* 此方法为异步调用。当该方法返回时，并不代表用户已完全离开频道。
* 如果你调用了 joinChannelEx 加入了多个频道，调用该方法会离开你加入的所有频道。

<a id="api_irtcengine_leavechannel__timing" />

### 调用时机 [#调用时机-7]

在加入频道后调用该方法。

<a id="api_irtcengine_leavechannel__related" />

### 相关回调 [#相关回调-6]

调用该方法成功后会触发以下回调：

* 本地客户端实例：会触发 onLeaveChannel 回调。
* 远端客户端实例：远端主播离开频道后会触发 onUserOffline 回调。

<a id="api_irtcengine_leavechannel__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无明确原因）。
  * -2：参数无效。
  * -7：SDK 未初始化。

### 所属接口类 [#所属接口类-10]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_leavechannel2" />

## leaveChannel \\[2/2] [#leavechannel-22]

设置频道选项并离开频道。

<a id="api_irtcengine_leavechannel2__prototype" />

\`\`\`java
public abstract int leaveChannel(LeaveChannelOptions options);
\`\`\`

<a id="api_irtcengine_leavechannel2__detailed_desc" />

调用该方法后，SDK 会终止音视频互动，离开当前频道，并释放与会话相关的所有资源。如果你调用了 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 加入了多个频道，调用该方法会离开你加入的所有频道。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果在调用该方法后立即调用 [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1)，SDK 不会触发 [onLeaveChannel](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onleavechannel) 回调。该方法为异步调用。当该方法返回时，并不一定表示用户已离开频道。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_leavechannel2__timing" />

### 调用时机 [#调用时机-8]

在加入频道后调用该方法。

<a id="api_irtcengine_leavechannel2__related" />

### 相关回调 [#相关回调-7]

调用该方法成功后会触发以下回调：

* 本地客户端实例：触发 onLeaveChannel 回调。
* 远端客户端实例：远端主播离开频道后触发 onUserOffline 回调。

<a id="api_irtcengine_leavechannel2__parameters" />

### 参数 [#参数-10]

#### \`options\` [#options-4]

离开频道的选项，详见 [LeaveChannelOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-leavechanneloptions)。

<a id="api_irtcengine_leavechannel2__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-11]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_leavechannelex" />

## leaveChannelEx \\[1/2] [#leavechannelex-12]

离开频道。

<a id="api_irtcengineex_leavechannelex__prototype" />

\`\`\`java
public abstract int leaveChannelEx(RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_leavechannelex__detailed_desc" />

调用该方法后，SDK 会终止音视频互动，离开当前频道，并释放与会话相关的所有资源。调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 加入频道后，必须调用此方法或 \`leaveChannelEx\` 结束通话，否则无法开始下一次通话。

注：

* 如果在调用该方法后立即调用 destroy \\[2/2]，SDK 不会触发 onLeaveChannel 回调。
* 该方法为异步调用，方法返回时并不代表用户已离开频道。
* 如果调用 leaveChannel \\[1/2] 或 leaveChannel \\[2/2]，你将离开通过 joinChannel \\[1/2]、 joinChannel \\[2/2] 或 joinChannelEx 加入的所有频道。

<a id="api_irtcengineex_leavechannelex__scenario" />

### 适用场景 [#适用场景-4]

该方法适用于多频道场景。

<a id="api_irtcengineex_leavechannelex__timing" />

### 调用时机 [#调用时机-9]

在调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 之后调用该方法。

<a id="api_irtcengineex_leavechannelex__related" />

### 相关回调 [#相关回调-8]

调用成功后会触发以下回调：

* 本地客户端实例：触发 onLeaveChannel 回调。
* 远端客户端实例：远端主播离开频道后触发 onUserOffline 回调。

<a id="api_irtcengineex_leavechannelex__parameters" />

### 参数 [#参数-11]

#### \`connection\` [#connection-3]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_leavechannelex__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-12]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengineex_leavechannelex2" />

## leaveChannelEx \\[2/2] [#leavechannelex-22]

设置频道参数并离开频道。

<a id="api_irtcengineex_leavechannelex2__prototype" />

\`\`\`java
public abstract int leaveChannelEx(RtcConnection connection, LeaveChannelOptions options);
\`\`\`

<a id="api_irtcengineex_leavechannelex2__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.1.0 版本新增。

调用该方法后，SDK 会终止音视频互动，并释放与会话相关的所有资源。调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 加入频道后，必须调用此方法或 \`leaveChannelEx(RtcConnection connection)\` 结束通话，否则无法开始下一次通话。

注：

* 如果在调用该方法后立即调用 destroy()，SDK 不会触发 onLeaveChannel 回调。
* 此方法为异步调用。当该方法返回时，并不代表你已离开频道。
* 如果调用 leaveChannel() 或 leaveChannel(LeaveChannelOptions options)，将会离开通过 joinChannel \\[1/2]、 joinChannel \\[2/2] 或 joinChannelEx 加入的所有频道。

<a id="api_irtcengineex_leavechannelex2__scenario" />

### 适用场景 [#适用场景-5]

该方法适用于多频道场景。

<a id="api_irtcengineex_leavechannelex2__timing" />

### 调用时机 [#调用时机-10]

在调用 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 之后调用该方法。

<a id="api_irtcengineex_leavechannelex2__related" />

### 相关回调 [#相关回调-9]

调用该方法成功后会触发以下回调：

* 本地客户端实例：会触发 onLeaveChannel 回调。
* 远端客户端实例：远端主播离开频道后会触发 onUserOffline 回调。

<a id="api_irtcengineex_leavechannelex2__parameters" />

### 参数 [#参数-12]

#### \`connection\` [#connection-4]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

#### \`options\` [#options-5]

离开频道的选项。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅支持 [LeaveChannelOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-leavechanneloptions) 中的 \`stopMicrophoneRecording\` 成员，设置其他成员无效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_leavechannelex2__return_values" />

### 返回值 [#返回值-13]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-13]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_preloadchannel" />

## preloadChannel [#preloadchannel]

预加载指定频道以缩短观众加入频道的时间。

<a id="api_irtcengine_preloadchannel__prototype" />

\`\`\`java
public abstract int preloadChannel(String token, String channelName, int optionalUid);
\`\`\`

<a id="api_irtcengine_preloadchannel__detailed_desc" />

当观众需要频繁切换不同频道时，调用该方法可以缩短加入频道的时间，从而减少观众听到和看到主播的延迟时间。如果你加入了一个已预加载的频道，离开后想重新加入该频道，除非用于预加载频道的 Token 过期，否则无需再次调用该方法。

注：

* 调用该方法时，请确保将用户角色设置为观众，且未将音频场景设置为 AUDIO\\_SCENARIO\\_CHORUS，否则该方法不生效。
* 你还需要确保用于预加载的频道名、用户 ID 和 Token 与加入频道时传入的值一致，否则该方法不生效。
* 一个 RtcEngine 实例最多支持预加载 20 个频道，超出限制时，仅最近的 20 个预加载频道生效。
* 预加载频道失败并不意味着无法加入频道，也不会增加加入频道所需的时间。

<a id="api_irtcengine_preloadchannel__parameters" />

### 参数 [#参数-13]

#### \`token\` [#token-6]

在你的服务器上生成的用于鉴权的 Token。当用于预加载频道的 Token 过期时，你可以根据预加载的频道数量更新 Token：

* 预加载一个频道时，调用该方法传入新的 Token。
* 预加载多个频道时：
  * 如果你为所有预加载频道使用通配符 Token，调用 updatePreloadChannelToken 更新 Token。注意：生成通配符 Token 时，确保用户 ID 不为 0。
  * 如果你为不同频道使用不同的 Token，调用该方法传入你的用户 ID、频道名和新的 Token。

#### \`channelName\` [#channelname-2]

你想要预加载的频道名。该参数表示用户进行实时音视频互动的频道。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）：

* 所有小写英文字母：a 到 z。
* 所有大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","。

#### \`optionalUid\` [#optionaluid]

用户 ID。用于标识频道中的用户以进行实时音视频互动。你需要自行设置和管理用户 ID，并确保同一频道中的每个用户 ID 唯一。该参数为 32 位无符号整数，取值范围为 -2^31 到 2^31-1。如果未指定用户 ID（或设置为 0），SDK 会分配一个随机用户 ID，并在 [onJoinChannelSuccess](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess) 回调中返回。你的应用必须记录并维护返回的用户 ID，SDK 不会保存。

<a id="api_irtcengine_preloadchannel__return_values" />

### 返回值 [#返回值-14]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。
  * -102：频道名无效。请传入有效的频道名并重新加入频道。

### 所属接口类 [#所属接口类-14]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_preloadchannelwithuseraccount" />

## preloadChannelWithUserAccount [#preloadchannelwithuseraccount]

预加载指定频道，缩短观众加入频道的时间。

<a id="api_irtcengine_preloadchannelwithuseraccount__prototype" />

\`\`\`java
public abstract int preloadChannelWithUserAccount(String token, String channelName, String userAccount);
\`\`\`

<a id="api_irtcengine_preloadchannelwithuseraccount__detailed_desc" />

当观众需要频繁切换不同频道时，调用该方法可以缩短加入频道的时间，从而减少观众听到和看到主播的延迟。如果你加入了一个已预加载的频道，离开后想重新加入同一个频道，除非用于预加载频道的 Token 过期，否则无需再次调用该方法。

注：

* 调用该方法时，请确保将用户角色设置为观众，且未将音频场景设置为 AUDIO\\_SCENARIO\\_CHORUS，否则该方法不生效。
* 你需要确保用于预加载的用户 User Account、频道名和 Token 与加入频道时传入的值一致，否则该方法不生效。
* 一个 RtcEngine 实例最多支持预加载 20 个频道。超过该限制时，仅最近的 20 个预加载频道生效。
* 预加载频道失败不会影响加入频道的能力，也不会增加加入频道所需的时间。

<a id="api_irtcengine_preloadchannelwithuseraccount__timing" />

### 调用时机 [#调用时机-11]

为提升预加载频道的用户体验，声网建议在确认频道名和用户信息后尽早调用该方法。

<a id="api_irtcengine_preloadchannelwithuseraccount__parameters" />

### 参数 [#参数-14]

#### \`token\` [#token-7]

你在服务器上生成的用于鉴权的 Token。当用于预加载频道的 Token 过期时，你可以根据预加载的频道数量更新 Token：

* 预加载一个频道时，调用该方法传入新的 Token。
* 预加载多个频道时：
  * 如果你为所有预加载频道使用通配符 Token，调用 updatePreloadChannelToken 更新 Token。注意：生成通配符 Token 时，确保用户 ID 不为 0。
  * 如果你为不同频道使用不同的 Token，调用该方法传入用户 User Account、频道名和新的 Token。

#### \`channelName\` [#channelname-3]

你想要预加载的频道名。字符串长度必须小于 64 字节。支持的字符（共 89 个）：

* 所有小写英文字母：a 到 z。
* 所有大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","

#### \`userAccount\` [#useraccount-5]

用户 User Account，用于标识频道中的用户。你需要自行设置和管理用户 User Account，并确保同一频道中的每个用户 User Account 唯一。该参数最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）：

* 26 个小写英文字母：a 到 z。
* 26 个大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* 空格
* "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","

<a id="api_irtcengine_preloadchannelwithuseraccount__return_values" />

### 返回值 [#返回值-15]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效，例如用户 User Account 为空。请传入有效参数后重新加入频道。
  * -7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象后再调用该方法。
  * -102：频道名无效。请传入有效的频道名后重新加入频道。

### 所属接口类 [#所属接口类-15]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_registerlocaluseraccount" />

## registerLocalUserAccount [#registerlocaluseraccount]

注册用户 User Account。

<a id="api_irtcengine_registerlocaluseraccount__prototype" />

\`\`\`java
public abstract int registerLocalUserAccount(String appId, String userAccount);
\`\`\`

<a id="api_irtcengine_registerlocaluseraccount__detailed_desc" />

该方法用于注册用户 User Account。注册成功后，用户 User Account 可用于在加入频道时标识本地用户身份。该方法为可选项。如果你希望使用用户 User Account 加入频道，可以选择以下任一方式：

* 先调用 registerLocalUserAccount 方法注册用户 User Account，再调用 joinChannelWithUserAccount 方法加入频道，可缩短进入频道所需时间。
* 直接调用 joinChannelWithUserAccount 方法加入频道。

<a id="api_irtcengine_registerlocaluseraccount__related" />

### 相关回调 [#相关回调-10]

成功调用该方法后，SDK 会触发 [onLocalUserRegistered](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered) 回调，报告本地用户的用户 ID 和用户 User Account。

<a id="api_irtcengine_registerlocaluseraccount__parameters" />

### 参数 [#参数-15]

#### \`appId\` [#appid]

声网控制台中项目的 App ID。

#### \`userAccount\` [#useraccount-6]

用户 User Account，用于在频道中标识用户身份以实现实时音视频互动。你需要自行设置并管理用户 User Account，并确保同一频道内的每个用户 User Account 唯一。该参数的最大长度为 255 字节，不能为空。支持的字符共 89 个，包括：

* 26 个小写英文字母：a 到 z。
* 26 个大写英文字母：A 到 Z。
* 所有数字字符：0 到 9。
* 空格
* "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"\\<"、"="、"."、">"、"?"、"@"、"\\["、"]"、"^"、"\\_"、"\\{"、"}"、"|"、"\\~"、","

<a id="api_irtcengine_registerlocaluseraccount__return_values" />

### 返回值 [#返回值-16]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-16]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_renewtoken" />

## renewToken [#renewtoken]

更新 Token。

<a id="api_irtcengine_renewtoken__prototype" />

\`\`\`java
public abstract int renewToken(String token);
\`\`\`

<a id="api_irtcengine_renewtoken__detailed_desc" />

成功调用该方法后，SDK 会触发 [onRenewTokenResult](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrenewtokenresult) 回调。在单频道场景下，你可以在以下情况下调用该方法更新 Token：

* 收到 onTokenPrivilegeWillExpire 回调，提示 Token 即将过期。
* Token 已过期时，SDK 会触发 onRequestToken 回调，并在 onConnectionStateChanged 回调中报告 CONNECTION\\_CHANGED\\_TOKEN\\_EXPIRED （9）。

<a id="api_irtcengine_renewtoken__parameters" />

### 参数 [#参数-16]

#### \`token\` [#token-8]

新的 Token。

<a id="api_irtcengine_renewtoken__return_values" />

### 返回值 [#返回值-17]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效，例如传入的 Token 为空。
  * -7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。
  * 110：Token 无效。请确保以下事项：
    * 生成 Token 时指定的用户 ID 与加入频道时使用的用户 ID 一致。
    * 生成的 Token 与加入频道时传入的 Token 相同。

### 所属接口类 [#所属接口类-17]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setchannelprofile" />

## setChannelProfile [#setchannelprofile]

设置频道场景。

<a id="api_irtcengine_setchannelprofile__prototype" />

\`\`\`java
public abstract int setChannelProfile(int profile);
\`\`\`

<a id="api_irtcengine_setchannelprofile__detailed_desc" />

SDK 会根据不同的频道场景采用不同的优化策略，例如在直播场景中优先保证视频质量。初始化 SDK 后，默认频道场景为直播。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    为确保实时通信质量，建议频道内所有用户使用相同的频道场景。不同频道场景下，SDK 的默认音频路由也不同，详见 \`setDefaultAudioRouteToSpeakerphone\`。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setchannelprofile__timing" />

### 调用时机 [#调用时机-12]

在加入频道前调用此方法。

<a id="api_irtcengine_setchannelprofile__parameters" />

### 参数 [#参数-17]

#### \`profile\` [#profile]

频道场景：

* CHANNEL\\_PROFILE\\_COMMUNICATION （0）：通信场景。建议使用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING 以获得更好的音视频体验。
* CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING （1）：（默认）直播场景。
* CHANNEL\\_PROFILE\\_GAME （2）：游戏场景。已废弃，请使用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING。
* CHANNEL\\_PROFILE\\_CLOUD\\_GAMING （3）：互动场景。该场景对延迟进行了优化，适用于用户之间需要频繁互动的场景。已废弃，请使用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING。

<a id="api_irtcengine_setchannelprofile__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。
  * -7：SDK 未初始化。

### 所属接口类 [#所属接口类-18]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setclientrole1" />

## setClientRole \\[1/2] [#setclientrole-12]

设置客户端实例的用户角色。

<a id="api_irtcengine_setclientrole1__prototype" />

\`\`\`java
public abstract int setClientRole(int role);
\`\`\`

<a id="api_irtcengine_setclientrole1__detailed_desc" />

你可以调用该方法将用户角色设置为主播或观众。用户角色决定了用户在 SDK 层的权限，包括是否可以在频道中发布音视频流。 你可以在加入频道前或加入频道后调用该方法：

* 如果你在加入频道前调用该方法将用户角色设置为主播，并通过 setupLocalVideo 设置本地视频属性，则用户加入频道时会自动开启本地视频预览。
* 如果你在加入频道后调用该方法设置用户角色，SDK 会自动调用 muteLocalAudioStream 和 muteLocalVideoStream 更改音视频流的发布状态。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在加入频道前调用该方法并将用户角色设置为 \`CLIENT_ROLE_BROADCASTER\` 时，本地客户端不会触发 [onClientRoleChanged](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechanged) 回调。加入频道前调用该方法并将 \`role\` 设置为 \`CLIENT_ROLE_AUDIENCE\` 时也会触发该回调。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setclientrole1__timing" />

### 调用时机 [#调用时机-13]

你可以在加入频道前或加入频道后调用此方法。

<a id="api_irtcengine_setclientrole1__related" />

### 相关回调 [#相关回调-11]

如果你在加入频道后调用此方法切换用户角色，SDK 会触发以下回调：

* 本地客户端触发 onClientRoleChanged 回调。
* 远端客户端触发 onUserJoined 或 onUserOffline 回调。

如果你在加入频道后调用此方法设置用户角色但失败，SDK 会触发 [onClientRoleChangeFailed](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechangefailed) 回调，报告失败原因和当前用户角色。

<a id="api_irtcengine_setclientrole1__parameters" />

### 参数 [#参数-18]

#### \`role\` [#role]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你将用户角色设置为观众，则无法在频道中发布音视频流。
  </CalloutDescription>
</CalloutContainer>

用户角色：

* CLIENT\\_ROLE\\_BROADCASTER (1)：主播。
* CLIENT\\_ROLE\\_AUDIENCE (2)：观众。

<a id="api_irtcengine_setclientrole1__return_values" />

### 返回值 [#返回值-19]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无具体原因）。
  * -2：参数无效。
  * -7：SDK 未初始化。

### 所属接口类 [#所属接口类-19]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setclientrole2" />

## setClientRole \\[2/2] [#setclientrole-22]

设置直播场景下的用户角色和观众延迟等级。

<a id="api_irtcengine_setclientrole2__prototype" />

\`\`\`java
public abstract int setClientRole(int role, ClientRoleOptions options);
\`\`\`

<a id="api_irtcengine_setclientrole2__detailed_desc" />

默认情况下，SDK 会将用户角色设置为观众。你可以调用此方法将用户角色设置为主播。用户角色 (\`role\`) 决定了用户在 SDK 层级的权限，包括是否可以在频道中发布音视频流。 该方法与 \`setClientRole(int role)\` 的区别在于，它支持设置 \`audienceLatencyLevel\`。 \`audienceLatencyLevel\` 需要与 \`role\` 搭配使用，以确定用户在其权限范围内可享受的服务等级。例如，观众可以选择接收低延迟或超低延迟的远端流。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当用户角色设置为主播时，观众延迟等级只能设置为 \`AUDIENCE_LATENCY_LEVEL_ULTRA_LOW_LATENCY\`。 在加入频道前调用此方法并将 \`role\` 设置为 \`BROADCASTER\` 时，本地客户端不会触发 [onClientRoleChanged](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechanged) 回调。 在加入频道前调用此方法并将 \`role\` 设置为 \`AUDIENCE\` 时，也会触发该回调。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setclientrole2__timing" />

### 调用时机 [#调用时机-14]

你可以在加入频道前或加入频道后调用此方法。

* 如果你在加入频道前调用此方法并通过 setupLocalVideo 设置本地视频属性，则用户加入频道时会自动开启本地视频预览。
* 如果你在加入频道后调用此方法设置用户角色，SDK 会自动调用 muteLocalAudioStream 和 muteLocalVideoStream 方法来改变音视频流的发布状态。

<a id="api_irtcengine_setclientrole2__related" />

### 相关回调 [#相关回调-12]

如果你在加入频道后调用此方法切换用户角色，SDK 会触发以下回调：

* 本地客户端触发 onClientRoleChanged 回调。注意：在加入频道前调用此方法并将 role 设置为 AUDIENCE 也会触发该回调。
* 远端客户端触发 onUserJoined 或 onUserOffline 回调。

如果你在加入频道后调用此方法设置用户角色但失败，SDK 会触发 [onClientRoleChangeFailed](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechangefailed) 回调，报告失败原因和当前用户角色。

<a id="api_irtcengine_setclientrole2__parameters" />

### 参数 [#参数-19]

#### \`role\` [#role-1]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你将用户角色设置为观众，则无法在频道中发布音视频流。如果你希望在直播过程中发布媒体流，请确保将用户角色设置为主播。
  </CalloutDescription>
</CalloutContainer>

用户角色。

* CLIENT\\_ROLE\\_BROADCASTER (1)：主播。
* CLIENT\\_ROLE\\_AUDIENCE (2)：观众（默认）。

#### \`options\` [#options-6]

用户的详细选项，详见 [ClientRoleOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-clientroleoptions)。

<a id="api_irtcengine_setclientrole2__return_values" />

### 返回值 [#返回值-20]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无明确原因）。
  * -2：参数无效。
  * -5：请求被拒绝。
  * -7：SDK 未初始化。

### 所属接口类 [#所属接口类-20]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_updatechannelmediaoptions" />

## updateChannelMediaOptions [#updatechannelmediaoptions]

在加入频道后更新频道媒体选项。

<a id="api_irtcengine_updatechannelmediaoptions__prototype" />

\`\`\`java
public abstract int updateChannelMediaOptions(ChannelMediaOptions options);
\`\`\`

<a id="api_irtcengine_updatechannelmediaoptions__detailed_desc" />

<a id="api_irtcengine_updatechannelmediaoptions__parameters" />

### 参数 [#参数-20]

#### \`options\` [#options-7]

频道媒体选项。详见 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions)。

<a id="api_irtcengine_updatechannelmediaoptions__return_values" />

### 返回值 [#返回值-21]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2： ChannelMediaOptions 中某个成员的值无效，例如 Token 或用户 ID 无效。你需要填写有效的参数。
  * -7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用该方法。
  * -8： RtcEngine 对象的内部状态错误。可能的原因是用户不在频道中。声网建议你使用 onConnectionStateChanged 回调判断用户是否在频道中。如果你收到 CONNECTION\\_STATE\\_DISCONNECTED （1）或 CONNECTION\\_STATE\\_FAILED （5）状态，说明用户不在频道中。你需要先调用 joinChannel 加入频道，再调用该方法。

### 所属接口类 [#所属接口类-21]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_updatechannelmediaoptionsex" />

## updateChannelMediaOptionsEx [#updatechannelmediaoptionsex]

加入频道后更新频道媒体选项。

<a id="api_irtcengineex_updatechannelmediaoptionsex__prototype" />

\`\`\`java
public abstract int updateChannelMediaOptionsEx(ChannelMediaOptions options, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_updatechannelmediaoptionsex__detailed_desc" />

<a id="api_irtcengineex_updatechannelmediaoptionsex__scenario" />

### 适用场景 [#适用场景-6]

该方法适用于多频道场景。

<a id="api_irtcengineex_updatechannelmediaoptionsex__parameters" />

### 参数 [#参数-21]

#### \`options\` [#options-8]

频道媒体选项。详见 [ChannelMediaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions)。

#### \`connection\` [#connection-5]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_updatechannelmediaoptionsex__return_values" />

### 返回值 [#返回值-22]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2： ChannelMediaOptions 中的成员值无效，例如 token 或用户 ID 无效。你需要填写有效的参数。
  * -7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用该方法。
  * -8： RtcEngine 对象的内部状态错误，可能的原因是用户不在频道中。声网建议你使用 onConnectionStateChanged 回调判断用户是否在频道中。如果你收到 CONNECTION\\_STATE\\_DISCONNECTED （1）或 CONNECTION\\_STATE\\_FAILED （5）状态，说明用户不在频道中。你需要先调用 joinChannel 加入频道，再调用该方法。

### 所属接口类 [#所属接口类-22]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_updatepreloadchanneltoken" />

## updatePreloadChannelToken [#updatepreloadchanneltoken]

更新用于预加载频道的通配 Token。

<a id="api_irtcengine_updatepreloadchanneltoken__prototype" />

\`\`\`java
public abstract int updatePreloadChannelToken(String token);
\`\`\`

<a id="api_irtcengine_updatepreloadchanneltoken__detailed_desc" />

你需要自行维护通配 Token 的生命周期。当该 Token 过期时，需要生成新的通配 Token，并调用该方法传入新的 Token。

<a id="api_irtcengine_updatepreloadchanneltoken__scenario" />

### 适用场景 [#适用场景-7]

适用于涉及多个频道的场景，例如在不同频道之间切换时，使用通配 Token 可以避免用户每次加入新频道时都申请新的 Token，从而节省切换频道的时间，并减轻你的 Token 服务器的压力。

<a id="api_irtcengine_updatepreloadchanneltoken__parameters" />

### 参数 [#参数-22]

#### \`token\` [#token-9]

新的 Token。

<a id="api_irtcengine_updatepreloadchanneltoken__return_values" />

### 返回值 [#返回值-23]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效，例如 Token 无效。你需要传入有效参数并重新加入频道。
  * -7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用此方法。

### 所属接口类 [#所属接口类-23]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onclientrolechanged" />

## onClientRoleChanged [#onclientrolechanged]

用户角色或观众延迟级别发生变化回调。

<a id="callback_irtcengineeventhandler_onclientrolechanged__prototype" />

\`\`\`java
public void onClientRoleChanged(int oldRole, int newRole, ClientRoleOptions newRoleOptions)
\`\`\`

<a id="callback_irtcengineeventhandler_onclientrolechanged__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当你在加入频道前调用 [setClientRole \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole1) 或 [setClientRole \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole2) 并将用户角色设置为主播时，该回调不会被触发。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onclientrolechanged__timing" />

### 触发时机 [#触发时机]

该回调在以下任一情况下被触发：

* 加入频道后调用 setClientRole \\[1/2] 或 setClientRole \\[2/2] 设置用户角色或观众延迟级别；
* 加入频道前调用 setClientRole \\[1/2] 或 setClientRole \\[2/2] 并将用户角色设置为观众。

<a id="callback_irtcengineeventhandler_onclientrolechanged__parameters" />

### 参数 [#参数-23]

#### \`oldRole\` [#oldrole]

用户切换前的角色：

* CLIENT\\_ROLE\\_BROADCASTER (1)：主播。
* CLIENT\\_ROLE\\_AUDIENCE (2)：观众。

#### \`newRole\` [#newrole]

用户切换后的角色：

* CLIENT\\_ROLE\\_BROADCASTER (1)：主播。
* CLIENT\\_ROLE\\_AUDIENCE (2)：观众。

#### \`newRoleOptions\` [#newroleoptions]

用户切换后的角色属性，详见 [ClientRoleOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-clientroleoptions)。

### 所属接口类 [#所属接口类-24]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onclientrolechangefailed" />

## onClientRoleChangeFailed [#onclientrolechangefailed]

切换用户角色失败时的回调。

<a id="callback_irtcengineeventhandler_onclientrolechangefailed__prototype" />

\`\`\`java
public void onClientRoleChangeFailed(int reason, int currentRole)
\`\`\`

<a id="callback_irtcengineeventhandler_onclientrolechangefailed__detailed_desc" />

该回调用于通知切换用户角色失败的原因以及当前的用户角色。

<a id="callback_irtcengineeventhandler_onclientrolechangefailed__timing" />

### 触发时机 [#触发时机-1]

该回调在本地用户加入频道后调用 [setClientRole \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole1) 或 [setClientRole \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole2) （带 [ClientRoleOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-clientroleoptions) 参数）切换用户角色失败时被触发。

<a id="callback_irtcengineeventhandler_onclientrolechangefailed__parameters" />

### 参数 [#参数-24]

#### \`reason\` [#reason]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    仅在启用 128 人功能时会返回该枚举值。主播数量上限取决于启用 128 人功能时配置的实际主播数量。
  </CalloutDescription>
</CalloutContainer>

用户角色切换失败的原因。

* CLIENT\\_ROLE\\_CHANGE\\_FAILED\\_TOO\\_MANY\\_BROADCASTERS (1)：频道中的主播数量已达上限。仅在启用 128 人功能时会返回该枚举值。
* CLIENT\\_ROLE\\_CHANGE\\_FAILED\\_NOT\\_AUTHORIZED (2)：请求被声网服务器拒绝。建议提示用户重试切换用户角色。
* CLIENT\\_ROLE\\_CHANGE\\_FAILED\\_REQUEST\\_TIME\\_OUT (3)：请求超时。建议提示用户检查网络连接并重试切换用户角色。自 v4.4.0 版本废弃，不建议使用。
* CLIENT\\_ROLE\\_CHANGE\\_FAILED\\_CONNECTION\\_FAILED (4)：SDK 连接失败。你可以通过 onConnectionStateChanged 回调中报告的 reason 进行排查。自 v4.4.0 版本废弃，不建议使用。

#### \`currentRole\` [#currentrole]

当前的用户角色。

* CLIENT\\_ROLE\\_BROADCASTER (1)：主播，可以发送和接收音视频流。
* CLIENT\\_ROLE\\_AUDIENCE (2)：观众，只能接收音视频流。

### 所属接口类 [#所属接口类-25]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onerror" />

## onError [#onerror]

SDK 运行期间发生错误时触发的回调。

<a id="callback_irtcengineeventhandler_onerror__prototype" />

\`\`\`java
public void onError(int err)
\`\`\`

<a id="callback_irtcengineeventhandler_onerror__detailed_desc" />

该回调表示 SDK 运行期间发生了网络或媒体相关的错误。在大多数情况下，SDK 无法自动修复该问题并继续运行，需要你在应用层进行处理或通知用户。

<a id="callback_irtcengineeventhandler_onerror__timing" />

### 触发时机 [#触发时机-2]

该回调在 SDK 运行期间发生错误时被触发。

<a id="callback_irtcengineeventhandler_onerror__parameters" />

### 参数 [#参数-25]

#### \`err\` [#err]

错误码。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)文档。

### 所属接口类 [#所属接口类-26]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onjoinchannelsuccess" />

## onJoinChannelSuccess [#onjoinchannelsuccess]

本地用户成功加入频道回调。

<a id="callback_irtcengineeventhandler_onjoinchannelsuccess__prototype" />

\`\`\`java
public void onJoinChannelSuccess(String channel, int uid, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onjoinchannelsuccess__detailed_desc" />

<a id="callback_irtcengineeventhandler_onjoinchannelsuccess__timing" />

### 触发时机 [#触发时机-3]

该回调在你调用 \`joinChannel\`、 \`joinChannelWithUserAccount\`、 [joinChannelEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex) 或 [joinChannelWithUserAccountEx](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelwithuseraccountex) 加入频道时被触发。

<a id="callback_irtcengineeventhandler_onjoinchannelsuccess__parameters" />

### 参数 [#参数-26]

#### \`channel\` [#channel]

频道名。

#### \`uid\` [#uid-4]

加入频道的用户 ID。

#### \`elapsed\` [#elapsed]

从本地用户调用 \`joinChannel\` 加入频道到 SDK 触发该回调的时间间隔，单位为毫秒。

### 所属接口类 [#所属接口类-27]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onleavechannel" />

## onLeaveChannel [#onleavechannel]

用户离开频道回调。

<a id="callback_irtcengineeventhandler_onleavechannel__prototype" />

\`\`\`java
public void onLeaveChannel(RtcStats stats) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onleavechannel__detailed_desc" />

<a id="callback_irtcengineeventhandler_onleavechannel__timing" />

### 触发时机 [#触发时机-4]

该回调在你调用 [leaveChannel \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel)、 [leaveChannel \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel2)、 [leaveChannelEx \\[1/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex) 或 [leaveChannelEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex2) 离开频道后被触发。

<a id="callback_irtcengineeventhandler_onleavechannel__parameters" />

### 参数 [#参数-27]

#### \`stats\` [#stats]

通话统计信息。详见 [RtcStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcstats)。

### 所属接口类 [#所属接口类-28]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onlocaluserregistered" />

## onLocalUserRegistered [#onlocaluserregistered]

本地用户注册用户 User Account 回调。

<a id="callback_irtcengineeventhandler_onlocaluserregistered__prototype" />

\`\`\`java
public void onLocalUserRegistered(int uid, String userAccount)
\`\`\`

<a id="callback_irtcengineeventhandler_onlocaluserregistered__detailed_desc" />

#### \`自从\` [#自从-2]

自 v2.8.0 版本新增。

当本地用户成功调用 [registerLocalUserAccount](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount) 方法注册用户 User Account，或调用 \`joinChannelWithUserAccount\` 方法加入频道后，SDK 会触发该回调，并返回本地用户的用户 ID 和用户 User Account。

<a id="callback_irtcengineeventhandler_onlocaluserregistered__timing" />

### 触发时机 [#触发时机-5]

该回调在本地用户成功注册用户 User Account 或加入频道后被触发。

<a id="callback_irtcengineeventhandler_onlocaluserregistered__parameters" />

### 参数 [#参数-28]

#### \`uid\` [#uid-5]

本地用户的用户 ID。

#### \`userAccount\` [#useraccount-7]

本地用户的用户 User Account。

### 所属接口类 [#所属接口类-29]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onrejoinchannelsuccess" />

## onRejoinChannelSuccess [#onrejoinchannelsuccess]

用户重新加入频道回调。

<a id="callback_irtcengineeventhandler_onrejoinchannelsuccess__prototype" />

\`\`\`java
public void onRejoinChannelSuccess(String channel, int uid, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onrejoinchannelsuccess__detailed_desc" />

该回调在用户因网络问题与服务器断开连接后，SDK 自动尝试重连并成功重连时触发。

<a id="callback_irtcengineeventhandler_onrejoinchannelsuccess__timing" />

### 触发时机 [#触发时机-6]

该回调在用户因网络问题与服务器断开连接后，SDK 自动尝试重连并成功重连时被触发。

<a id="callback_irtcengineeventhandler_onrejoinchannelsuccess__parameters" />

### 参数 [#参数-29]

#### \`channel\` [#channel-1]

频道名。

#### \`uid\` [#uid-6]

重新加入频道的用户 ID。

#### \`elapsed\` [#elapsed-1]

从本地用户调用 \`joinChannel\` 到 SDK 触发该回调的时间间隔，单位为毫秒。

### 所属接口类 [#所属接口类-30]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onrenewtokenresult" />

## onRenewTokenResult [#onrenewtokenresult]

renewToken 调用结果回调。

<a id="callback_irtcengineeventhandler_onrenewtokenresult__prototype" />

\`\`\`java
public void onRenewTokenResult(String token, Constants.RenewTokenErrorCode code)
\`\`\`

<a id="callback_irtcengineeventhandler_onrenewtokenresult__detailed_desc" />

#### \`自从\` [#自从-3]

自 v4.6.0 版本新增。

该回调在调用 [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken) 方法后触发，用于通知更新结果。

<a id="callback_irtcengineeventhandler_onrenewtokenresult__timing" />

### 触发时机 [#触发时机-7]

该回调在你调用 [renewToken](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken) 方法后被触发。

<a id="callback_irtcengineeventhandler_onrenewtokenresult__parameters" />

### 参数 [#参数-30]

#### \`token\` [#token-10]

用于鉴权的 Token。

#### \`code\` [#code]

错误码。详见 [RenewTokenErrorCode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-renewtokenerrorcode)。

### 所属接口类 [#所属接口类-31]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onrequesttoken" />

## onRequestToken [#onrequesttoken]

Token 过期回调。

<a id="callback_irtcengineeventhandler_onrequesttoken__prototype" />

\`\`\`java
public void onRequestToken() {}
\`\`\`

<a id="callback_irtcengineeventhandler_onrequesttoken__detailed_desc" />

该回调在 Token 过期时被触发。收到该回调后，你需要在 Token 服务器上生成新的 Token，并通过以下方式之一更新 Token：

* 单频道场景：
  * 调用 renewToken 更新 Token。
  * 调用 leaveChannel 离开当前频道，然后在调用 joinChannel 加入频道时传入新的 Token。
* 多频道场景：调用 updateChannelMediaOptionsEx 传入新的 Token。

<a id="callback_irtcengineeventhandler_onrequesttoken__timing" />

### 触发时机 [#触发时机-8]

该回调在 Token 过期时被触发。

### 所属接口类 [#所属接口类-32]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onrtcstats" />

## onRtcStats [#onrtcstats]

报告当前通话统计信息的回调。

<a id="callback_irtcengineeventhandler_onrtcstats__prototype" />

\`\`\`java
public void onRtcStats(RtcStats stats) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onrtcstats__detailed_desc" />

<a id="callback_irtcengineeventhandler_onrtcstats__timing" />

### 触发时机 [#触发时机-9]

该回调在用户加入频道后每两秒触发一次。

<a id="callback_irtcengineeventhandler_onrtcstats__parameters" />

### 参数 [#参数-31]

#### \`stats\` [#stats-1]

RTC 引擎的统计信息，详见 [RtcStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcstats)。

### 所属接口类 [#所属接口类-33]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_ontokenprivilegewillexpire" />

## onTokenPrivilegeWillExpire [#ontokenprivilegewillexpire]

Token 即将在 30 秒后过期时触发的回调。

<a id="callback_irtcengineeventhandler_ontokenprivilegewillexpire__prototype" />

\`\`\`java
public void onTokenPrivilegeWillExpire(String token)
\`\`\`

<a id="callback_irtcengineeventhandler_ontokenprivilegewillexpire__detailed_desc" />

收到该回调时，你需要在 Token 服务器上生成一个新的 Token，并通过以下方式之一更新 Token：

* 单频道场景：
  * 调用 renewToken 传入新的 Token。
  * 调用 leaveChannel 离开当前频道，然后在调用 joinChannel 加入频道时传入新的 Token。
* 多频道场景：调用 updateChannelMediaOptionsEx 传入新的 Token。

<a id="callback_irtcengineeventhandler_ontokenprivilegewillexpire__timing" />

### 触发时机 [#触发时机-10]

该回调在 Token 过期前 30 秒被触发。

<a id="callback_irtcengineeventhandler_ontokenprivilegewillexpire__parameters" />

### 参数 [#参数-32]

#### \`token\` [#token-11]

即将过期的 Token。

### 所属接口类 [#所属接口类-34]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onuserinfoupdated" />

## onUserInfoUpdated [#onuserinfoupdated]

远端用户的用户 ID 和用户 User Account 信息更新回调。

<a id="callback_irtcengineeventhandler_onuserinfoupdated__prototype" />

\`\`\`java
public void onUserInfoUpdated(int uid, UserInfo userInfo) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onuserinfoupdated__detailed_desc" />

#### \`自从\` [#自从-4]

自 v2.8.0 版本新增。

当远端用户加入频道后，SDK 会获取该用户的用户 ID 和用户 User Account，并将其缓存在映射表中，然后在本地客户端触发该回调。

<a id="callback_irtcengineeventhandler_onuserinfoupdated__timing" />

### 触发时机 [#触发时机-11]

该回调在远端用户加入频道后，SDK 获取到其用户 ID 和用户 User Account 时被触发。

<a id="callback_irtcengineeventhandler_onuserinfoupdated__parameters" />

### 参数 [#参数-33]

#### \`uid\` [#uid-7]

远端用户的用户 ID。

#### \`userInfo\` [#userinfo-4]

包含远端用户的用户 ID 和用户 User Account 信息。详见 [UserInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo)。

### 所属接口类 [#所属接口类-35]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onuserjoined" />

## onUserJoined [#onuserjoined]

远端用户或主播加入频道回调。

<a id="callback_irtcengineeventhandler_onuserjoined__prototype" />

\`\`\`java
public void onUserJoined(int uid, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onuserjoined__detailed_desc" />

在通信频道中，该回调表示有远端用户加入频道。当本地用户加入频道时，SDK 也会触发该回调报告频道中已有的用户。在直播频道中，该回调表示有主播加入频道。声网建议将连麦主播数量限制为 32 人，最多支持 17 路视频主播。

<a id="callback_irtcengineeventhandler_onuserjoined__timing" />

### 触发时机 [#触发时机-12]

该回调在以下任一情况下被触发：

* 远端用户或主播加入频道。
* 远端用户加入频道后将用户角色切换为主播。
* 远端用户或主播在网络中断后重新加入频道。

<a id="callback_irtcengineeventhandler_onuserjoined__parameters" />

### 参数 [#参数-34]

#### \`uid\` [#uid-8]

加入频道的用户 ID。

#### \`elapsed\` [#elapsed-2]

从本地用户调用 \`joinChannel\` 到该回调被触发的延迟（毫秒）。

### 所属接口类 [#所属接口类-36]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onuseroffline" />

## onUserOffline [#onuseroffline]

远端用户或主播离开频道时触发的回调。

<a id="callback_irtcengineeventhandler_onuseroffline__prototype" />

\`\`\`java
public void onUserOffline(int uid, int reason)
\`\`\`

<a id="callback_irtcengineeventhandler_onuseroffline__detailed_desc" />

用户离线通常有以下两种原因：

* 离开频道：当用户或主播离开频道时，会发送一条离开消息。
* 掉线：在一段时间内（通信场景为 20 秒，直播场景更长）未收到用户或主播的数据包时，SDK 会认为其掉线。网络连接不佳可能导致误判，建议使用声网 RTM SDK 进行可靠的离线检测。

<a id="callback_irtcengineeventhandler_onuseroffline__timing" />

### 触发时机 [#触发时机-13]

该回调在远端用户（在通信场景中）或主播（在直播场景中）离开频道时被触发。

<a id="callback_irtcengineeventhandler_onuseroffline__parameters" />

### 参数 [#参数-35]

#### \`uid\` [#uid-9]

离开频道或掉线的用户 ID。

#### \`reason\` [#reason-1]

远端用户（在通信场景中）或主播（在直播场景中）离线的原因：

* USER\\_OFFLINE\\_QUIT (0)：用户主动退出通话，发送离开消息。
* USER\\_OFFLINE\\_DROPPED (1)：SDK 超时未收到任何数据包，用户掉线。网络连接不佳可能导致误判，建议使用声网 RTM SDK 进行可靠的离线检测。
* USER\\_OFFLINE\\_BECOME\\_AUDIENCE (2)：用户将角色从主播切换为观众。

### 所属接口类 [#所属接口类-37]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "getuserinfobyuid",
    content: "通过传入用户 ID 获取用户信息。"
  }, {
    heading: "getuserinfobyuid",
    content: "当远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 onUserInfoUpdated 回调。收到该回调后，你可以调用 getUserInfoByUid 方法并传入用户 ID，从 UserInfo 对象中获取指定用户的用户 User Account。"
  }, {
    heading: "调用时机",
    content: "该方法在收到 onUserInfoUpdated 回调后调用。"
  }, {
    heading: "uid",
    content: "`uid`，表示用户 ID。"
  }, {
    heading: "userinfo",
    content: "输入和输出参数，用于标识用户信息的 UserInfo 对象。详见 UserInfo。"
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
    heading: "getuserinfobyuidex",
    content: "通过传入用户 ID 获取用户信息。"
  }, {
    heading: "getuserinfobyuidex",
    content: "当远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 onUserInfoUpdated 回调。收到该回调后，你可以调用 getUserInfoByUidEx 并传入用户 ID，从 UserInfo 对象中获取指定用户的用户 User Account。"
  }, {
    heading: "适用场景",
    content: "适用于多频道场景。"
  }, {
    heading: "uid-1",
    content: "用户 ID。"
  }, {
    heading: "userinfo-1",
    content: "用于标识用户信息的对象。详见 UserInfo。"
  }, {
    heading: "connection",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回 UserInfo 对象。"
  }, {
    heading: "返回值-1",
    content: "方法调用失败，返回 null。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngineEx"
  }, {
    heading: "getuserinfobyuseraccount",
    content: "通过传入用户 User Account 获取用户信息。"
  }, {
    heading: "getuserinfobyuseraccount",
    content: "当远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 onUserInfoUpdated 回调。收到该回调后，你可以调用 getUserInfoByUserAccount 方法并传入用户 User Account，从 UserInfo 对象中获取指定用户的信息。"
  }, {
    heading: "useraccount",
    content: "用户 User Account。"
  }, {
    heading: "userinfo-2",
    content: "用于标识用户信息的 UserInfo 对象。详见 UserInfo。"
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
    heading: "getuserinfobyuseraccountex",
    content: "通过用户 User Account 获取用户信息。"
  }, {
    heading: "getuserinfobyuseraccountex",
    content: "远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 onUserInfoUpdated 回调。收到该回调后，你可以调用 getUserInfoByUserAccountEx 并传入用户 User Account，从 UserInfo 对象中获取指定用户的用户信息。"
  }, {
    heading: "适用场景-1",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "useraccount-1",
    content: "用户 User Account。"
  }, {
    heading: "userinfo-3",
    content: "输入和输出参数，用于标识用户信息。详见 UserInfo。"
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
    heading: "所属接口类-3",
    content: "RtcEngineEx"
  }, {
    heading: "joinchannel-12",
    content: "加入一个频道。"
  }, {
    heading: "joinchannel-12",
    content: "默认情况下，用户会订阅频道中其他所有用户的音视频流，从而产生使用量和计费。如需停止订阅指定流或所有远端流，请调用 `muteRemoteAudio/VideoStream` 或 `muteAllRemoteAudio/VideoStreams`。"
  }, {
    heading: "joinchannel-12",
    content: "注："
  }, {
    heading: "joinchannel-12",
    content: "该方法仅支持用户同时加入一个频道。"
  }, {
    heading: "joinchannel-12",
    content: "不同 App ID 的用户无法互通。"
  }, {
    heading: "joinchannel-12",
    content: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 相同，否则可能会导致加入频道失败。"
  }, {
    heading: "调用时机-1",
    content: "请在调用 create \\[2/2] 方法后调用本方法。"
  }, {
    heading: "相关回调",
    content: "调用该方法成功后会触发以下回调："
  }, {
    heading: "相关回调",
    content: "本地客户端： onJoinChannelSuccess 和 onConnectionStateChanged 回调。"
  }, {
    heading: "相关回调",
    content: "远端客户端：如果是 COMMUNICATION 频道场景中有用户加入频道，或 LIVE\\_BROADCASTING 频道场景中有主播加入频道，则触发 onUserJoined 回调。"
  }, {
    heading: "相关回调",
    content: "当由于网络状况不佳导致本地客户端与声网服务器的连接中断时，SDK 会尝试重连服务器。当本地客户端成功重回频道时，SDK 会触发本地客户端的 onRejoinChannelSuccess 回调。"
  }, {
    heading: "token",
    content: "在你的服务器上生成的用于鉴权的 Token。"
  }, {
    heading: "token",
    content: "注："
  }, {
    heading: "token",
    content: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
  }, {
    heading: "token",
    content: "如果你仅启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，24 小时后会自动退出频道。"
  }, {
    heading: "token",
    content: "如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样每次加入频道时无需重新申请 Token。"
  }, {
    heading: "channelid",
    content: "频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
  }, {
    heading: "channelid",
    content: "所有小写英文字母：a 到 z。"
  }, {
    heading: "channelid",
    content: "所有大写英文字母：A 到 Z。"
  }, {
    heading: "channelid",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "channelid",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","'
  }, {
    heading: "optionalinfo",
    content: "（可选）预留参数。"
  }, {
    heading: "uid-2",
    content: "用户 ID。用于标识频道中的用户以进行实时音视频互动。你需要自行设置和管理用户 ID，并确保同一频道中每个用户 ID 唯一。该参数为 32 位无符号整数，取值范围为 -2^31 到 2^31-1。如果未指定用户 ID（或设置为 0），SDK 会自动分配一个随机用户 ID，并通过 onJoinChannelSuccess 回调返回。你的应用需记录并维护该返回的用户 ID，SDK 不会保存。"
  }, {
    heading: "返回值-4",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-4",
    content: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中的成员值无效。请传入有效参数后重新加入频道。"
  }, {
    heading: "返回值-4",
    content: "-3： RtcEngine 对象初始化失败。请重新初始化 RtcEngine 对象。"
  }, {
    heading: "返回值-4",
    content: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。"
  }, {
    heading: "返回值-4",
    content: "-8： RtcEngine 对象内部状态错误。常见原因是在调用 startEchoTest 开始通话回声测试后，未调用 stopEchoTest 停止测试就调用该方法加入频道。请先调用 stopEchoTest 再调用该方法。"
  }, {
    heading: "返回值-4",
    content: "-17：加入频道请求被拒绝。常见原因是用户已在频道中。声网建议使用 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时才调用该方法加入频道。"
  }, {
    heading: "返回值-4",
    content: "-102：频道名无效。请在 channelId 中传入有效的频道名重新加入频道。"
  }, {
    heading: "返回值-4",
    content: "-121：用户 ID 无效。请在 uid 中传入有效的用户 ID 重新加入频道。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "joinchannel-22",
    content: "加入频道并设置媒体选项。"
  }, {
    heading: "joinchannel-22",
    content: "该方法新增 `options` 参数，用于设置媒体选项，例如是否在频道内发布音视频流，或在加入频道时是否自动订阅所有远端用户的音视频流。默认情况下，用户会订阅频道中所有其他用户的音视频流，从而产生使用量和计费。如需停止订阅其他流，请设置 `options` 参数或调用 `muteRemoteAudio/VideoStream` 或 `muteAllRemoteAudio/VideoStreams`。"
  }, {
    heading: "joinchannel-22",
    content: "注："
  }, {
    heading: "joinchannel-22",
    content: "该方法仅支持用户同时加入一个频道。"
  }, {
    heading: "joinchannel-22",
    content: "不同 App ID 的用户无法互通。"
  }, {
    heading: "joinchannel-22",
    content: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 一致，否则可能导致加入频道失败。"
  }, {
    heading: "调用时机-2",
    content: "请在调用 create \\[2/2] 方法后调用该方法。"
  }, {
    heading: "相关回调-1",
    content: "调用该方法成功后会触发以下回调："
  }, {
    heading: "相关回调-1",
    content: "本地客户端： onJoinChannelSuccess 和 onConnectionStateChanged 回调。"
  }, {
    heading: "相关回调-1",
    content: "远端客户端：如果用户在 COMMUNICATION 频道场景中加入频道，或主播在 LIVE\\_BROADCASTING 频道场景中加入频道，会触发 onUserJoined 回调。"
  }, {
    heading: "相关回调-1",
    content: "当由于网络状况不佳导致本地客户端与声网服务器的连接中断时，SDK 会尝试重新连接服务器。当本地客户端成功重新加入频道时，SDK 会在本地客户端触发 onRejoinChannelSuccess 回调。"
  }, {
    heading: "token-1",
    content: "在你的服务器上生成的用于鉴权的 Token。"
  }, {
    heading: "token-1",
    content: "注："
  }, {
    heading: "token-1",
    content: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
  }, {
    heading: "token-1",
    content: "如果只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，24 小时后会自动退出频道。"
  }, {
    heading: "token-1",
    content: "如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样每次加入频道时无需重新申请 Token。"
  }, {
    heading: "channelid-1",
    content: "频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
  }, {
    heading: "channelid-1",
    content: "所有小写英文字母：a 到 z。"
  }, {
    heading: "channelid-1",
    content: "所有大写英文字母：A 到 Z。"
  }, {
    heading: "channelid-1",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "channelid-1",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","。'
  }, {
    heading: "uid-3",
    content: "用户 ID。用于标识频道中的用户。你需要自行设置和管理用户 ID，并确保同一频道中每个用户 ID 唯一。该参数为 32 位无符号整数，取值范围为 -2³¹ 到 2³¹-1。如果未指定用户 ID（或设置为 0），SDK 会自动分配一个随机用户 ID，并在 onJoinChannelSuccess 回调中返回。你的应用必须记录并维护该返回的用户 ID，SDK 不会保存。"
  }, {
    heading: "options",
    content: "频道媒体选项，详见 ChannelMediaOptions。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-5",
    content: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 options 中的成员值无效。请传入有效参数并重新加入频道。"
  }, {
    heading: "返回值-5",
    content: "-3： RtcEngine 对象初始化失败。请重新初始化 RtcEngine 对象。"
  }, {
    heading: "返回值-5",
    content: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。"
  }, {
    heading: "返回值-5",
    content: "-8： RtcEngine 对象内部状态错误。常见原因是在调用 startEchoTest 开始通话回声测试后，未调用 stopEchoTest 停止测试就调用该方法加入频道。请先调用 stopEchoTest 再调用该方法。"
  }, {
    heading: "返回值-5",
    content: "-17：加入频道请求被拒绝。常见原因是用户已在频道中。声网建议使用 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时才调用该方法加入频道。"
  }, {
    heading: "返回值-5",
    content: "-102：频道名无效。请在 channelId 中传入有效的频道名重新加入频道。"
  }, {
    heading: "返回值-5",
    content: "-121：用户 ID 无效。请在 uid 中传入有效的用户 ID 重新加入频道。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }, {
    heading: "joinchannelex",
    content: "加入一个频道。"
  }, {
    heading: "joinchannelex",
    content: "你可以多次调用此方法加入多个频道。 在多摄像头采集场景中，调用此方法后需要调用 `startPreview` 方法，并将 `sourceType` 设置为 `VIDEO_SOURCE_CAMERA_SECONDARY`，以确保第二路摄像头正常采集。"
  }, {
    heading: "joinchannelex",
    content: "如果你已经在一个频道中，不能使用相同的用户 ID 重新加入该频道。 在加入频道前，确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 相同，否则可能会导致加入频道失败。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-3",
    content: "在调用 create \\[2/2] 方法之后调用。"
  }, {
    heading: "相关回调-2",
    content: "成功调用该方法会触发以下回调："
  }, {
    heading: "相关回调-2",
    content: "本地客户端： onJoinChannelSuccess 和 onConnectionStateChanged 回调。"
  }, {
    heading: "相关回调-2",
    content: "远端客户端：如果是 COMMUNICATION 频道场景中有用户加入频道，或 LIVE\\_BROADCASTING 频道场景中有主播加入频道，则触发 onUserJoined 回调。"
  }, {
    heading: "相关回调-2",
    content: "当由于网络状况不佳导致本地客户端与声网服务器的连接中断时，SDK 会尝试重连服务器。当本地客户端成功重新加入频道时，SDK 会触发本地客户端的 onRejoinChannelSuccess 回调。"
  }, {
    heading: "token-2",
    content: "用于鉴权的 Token。"
  }, {
    heading: "token-2",
    content: "注："
  }, {
    heading: "token-2",
    content: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
  }, {
    heading: "token-2",
    content: "如果你只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，你将在 24 小时后自动退出频道。"
  }, {
    heading: "token-2",
    content: "如果你需要同时加入不同频道或在频道之间切换，声网建议使用通配符 Token，这样你每次加入频道时无需重新申请 Token。"
  }, {
    heading: "connection-2",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "options-1",
    content: "频道媒体选项。详见 ChannelMediaOptions。"
  }, {
    heading: "eventhandler",
    content: "回调类。详见 IRtcEngineEventHandler。你可以通过该参数传入的 `eventHandler` 对象获取多个频道的回调事件。"
  }, {
    heading: "返回值-6",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-6",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-6",
    content: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中的成员值无效。你需要传入有效参数并重新加入频道。"
  }, {
    heading: "返回值-6",
    content: "-3：初始化 RtcEngine 对象失败。你需要重新初始化 RtcEngine 对象。"
  }, {
    heading: "返回值-6",
    content: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用此方法。"
  }, {
    heading: "返回值-6",
    content: "-8： RtcEngine 对象的内部状态错误。典型原因是在调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用此方法加入频道。你需要先调用 stopEchoTest 再调用此方法。"
  }, {
    heading: "返回值-6",
    content: "-17：加入频道请求被拒绝。典型原因是用户已在频道中。声网建议你通过 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时才调用此方法加入频道。"
  }, {
    heading: "返回值-6",
    content: "-102：频道名无效。你需要在 channelId 中传入有效的频道名以重新加入频道。"
  }, {
    heading: "返回值-6",
    content: "-121：用户 ID 无效。你需要在 uid 中传入有效的用户 ID 以重新加入频道。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngineEx"
  }, {
    heading: "joinchannelwithuseraccount-12",
    content: "使用用户 User Account 和 Token 加入频道。"
  }, {
    heading: "joinchannelwithuseraccount-12",
    content: "调用 registerLocalUserAccount 注册用户 User Account 后再调用此方法加入频道，可以缩短进入频道所需的时间。如果你尚未调用 registerLocalUserAccount 注册用户 User Account，当你调用此方法加入频道时，SDK 会自动为你创建一个用户 User Account。 一旦用户加入频道，默认会订阅频道中所有其他用户的音视频流，从而产生用量和计费。如需停止订阅指定流或所有远端流，请调用 `muteRemoteAudio/VideoStream` 或 `muteAllRemoteAudio/VideoStreams`。"
  }, {
    heading: "joinchannelwithuseraccount-12",
    content: "注："
  }, {
    heading: "joinchannelwithuseraccount-12",
    content: "该方法仅支持用户同时加入一个频道。"
  }, {
    heading: "joinchannelwithuseraccount-12",
    content: "不同 App ID 的用户无法互通。"
  }, {
    heading: "joinchannelwithuseraccount-12",
    content: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 相同，否则可能会导致使用该 Token 加入频道失败。"
  }, {
    heading: "joinchannelwithuseraccount-12",
    content: "为确保通信顺畅，请使用相同的参数类型标识用户。例如，如果某用户使用 uid 加入频道，则其他用户也应使用 uid；如果使用用户 User Account 加入频道，则其他用户也应使用用户 User Account。如果用户使用声网 Web SDK 加入频道，请确保用户 ID 设置为相同的参数类型。"
  }, {
    heading: "调用时机-4",
    content: "请在调用 create \\[2/2] 方法后调用此方法。"
  }, {
    heading: "相关回调-3",
    content: "本地客户端： onLocalUserRegistered、 onJoinChannelSuccess 和 onConnectionStateChanged 回调。 远端客户端：如果用户在 `COMMUNICATION` 频道场景中加入频道，或主播在 `LIVE_BROADCASTING` 频道场景中加入频道，则会触发 onUserJoined 和 onUserInfoUpdated 回调。"
  }, {
    heading: "token-3",
    content: "在你的服务器上生成的用于鉴权的 Token。"
  }, {
    heading: "token-3",
    content: "注："
  }, {
    heading: "token-3",
    content: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
  }, {
    heading: "token-3",
    content: "如果你只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，你将在 24 小时后自动退出频道。"
  }, {
    heading: "token-3",
    content: "如果你需要同时加入不同频道或在频道间切换，声网建议使用通配符 Token，这样你每次加入频道时无需重新申请 Token。"
  }, {
    heading: "channelname",
    content: "频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
  }, {
    heading: "channelname",
    content: "所有小写英文字母：a 到 z。"
  }, {
    heading: "channelname",
    content: "所有大写英文字母：A 到 Z。"
  }, {
    heading: "channelname",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "channelname",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","'
  }, {
    heading: "useraccount-2",
    content: "用户 User Account。用于标识频道中的用户以进行实时音视频互动。你需要自行设置和管理用户 User Account，并确保同一频道中的每个用户 User Account 唯一。该参数的最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）："
  }, {
    heading: "useraccount-2",
    content: "26 个小写英文字母：a 到 z。"
  }, {
    heading: "useraccount-2",
    content: "26 个大写英文字母：A 到 Z。"
  }, {
    heading: "useraccount-2",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "useraccount-2",
    content: "空格"
  }, {
    heading: "useraccount-2",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","'
  }, {
    heading: "返回值-7",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-7",
    content: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中某成员的值无效。你需要传入有效参数并重新加入频道。"
  }, {
    heading: "返回值-7",
    content: "-3： RtcEngine 对象初始化失败。你需要重新初始化 RtcEngine 对象。"
  }, {
    heading: "返回值-7",
    content: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用此方法。"
  }, {
    heading: "返回值-7",
    content: "-8： RtcEngine 对象内部状态错误。典型原因是调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用此方法加入频道。你需要先调用 stopEchoTest 再调用此方法。"
  }, {
    heading: "返回值-7",
    content: "-17：加入频道请求被拒绝。典型原因是用户已在频道中。声网建议你使用 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时才调用此方法加入频道。"
  }, {
    heading: "返回值-7",
    content: "-102：频道名无效。你需要在 channelId 中传入有效的频道名重新加入频道。"
  }, {
    heading: "返回值-7",
    content: "-121：用户 ID 无效。你需要在 uid 中传入有效的用户 ID 重新加入频道。"
  }, {
    heading: "所属接口类-7",
    content: "RtcEngine"
  }, {
    heading: "joinchannelwithuseraccount-22",
    content: "使用用户 User Account 和 Token 加入频道，并设置媒体选项。"
  }, {
    heading: "自从",
    content: "自 v3.3.0 版本新增。"
  }, {
    heading: "自从",
    content: "该方法新增了 `options` 参数，用于设置媒体选项，例如是否在频道内发布音视频流。默认情况下，用户会订阅频道内所有其他用户的音视频流，从而产生使用量和计费。如需停止订阅其他流，请设置 `options` 参数或调用 `muteRemoteAudio/VideoStream` 或 `muteAllRemoteAudio/VideoStreams`。"
  }, {
    heading: "自从",
    content: "注："
  }, {
    heading: "自从",
    content: "此方法仅支持用户同时加入一个频道。"
  }, {
    heading: "自从",
    content: "不同 App ID 的用户无法互通。"
  }, {
    heading: "自从",
    content: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 相同，否则可能会因 Token 不匹配而加入频道失败。"
  }, {
    heading: "自从",
    content: "为确保通信顺畅，请使用相同的参数类型标识用户。例如，如果某用户使用用户 ID 加入频道，则其他用户也应使用用户 ID；用户 User Account 亦同理。如果用户使用声网 Web SDK 加入频道，请确保用户 ID 的类型一致。"
  }, {
    heading: "调用时机-5",
    content: "在调用 create \\[2/2] 方法之后调用此方法。"
  }, {
    heading: "相关回调-4",
    content: "本地客户端： onLocalUserRegistered、 onJoinChannelSuccess 和 onConnectionStateChanged 回调。 远端客户端：如果用户在 `COMMUNICATION` 频道场景中加入频道，或主播在 `LIVE_BROADCASTING` 频道场景中加入频道，则触发 onUserJoined 和 onUserInfoUpdated 回调。"
  }, {
    heading: "token-4",
    content: "在你的服务器上生成的用于鉴权的 Token。"
  }, {
    heading: "token-4",
    content: "注："
  }, {
    heading: "token-4",
    content: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），此参数为必填。"
  }, {
    heading: "token-4",
    content: "如果你仅启用了测试模式（使用 App ID 进行鉴权），此参数为可选。成功加入频道后，24 小时后会自动退出频道。"
  }, {
    heading: "token-4",
    content: "如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样你每次加入频道时无需重新申请 Token。"
  }, {
    heading: "channelname-1",
    content: "频道名。在相同 App ID 前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
  }, {
    heading: "channelname-1",
    content: "所有小写英文字母：a 到 z。"
  }, {
    heading: "channelname-1",
    content: "所有大写英文字母：A 到 Z。"
  }, {
    heading: "channelname-1",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "channelname-1",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","'
  }, {
    heading: "useraccount-3",
    content: "用户 User Account。你需要自行设置和管理用户 User Account，并确保同一频道内的每个用户 User Account 唯一。该参数最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）："
  }, {
    heading: "useraccount-3",
    content: "26 个小写英文字母：a 到 z。"
  }, {
    heading: "useraccount-3",
    content: "26 个大写英文字母：A 到 Z。"
  }, {
    heading: "useraccount-3",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "useraccount-3",
    content: "空格"
  }, {
    heading: "useraccount-3",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","'
  }, {
    heading: "options-2",
    content: "频道媒体选项，详见 ChannelMediaOptions。"
  }, {
    heading: "返回值-8",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-8",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-8",
    content: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中某成员的值无效。请传入有效参数并重新加入频道。"
  }, {
    heading: "返回值-8",
    content: "-3：初始化 RtcEngine 对象失败。请重新初始化 RtcEngine 对象。"
  }, {
    heading: "返回值-8",
    content: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用此方法。"
  }, {
    heading: "返回值-8",
    content: "-8： RtcEngine 对象内部状态错误。典型原因是调用 startEchoTest 开始通话回声测试后，未调用 stopEchoTest 停止测试就调用此方法加入频道。请先调用 stopEchoTest 再调用此方法。"
  }, {
    heading: "返回值-8",
    content: "-17：加入频道请求被拒绝。典型原因是用户已在频道中。声网建议使用 onConnectionStateChanged 回调判断用户是否在频道中。仅当收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态时再调用此方法加入频道。"
  }, {
    heading: "返回值-8",
    content: "-102：频道名无效。请在 channelId 中传入有效的频道名重新加入频道。"
  }, {
    heading: "返回值-8",
    content: "-121：用户 ID 无效。请在 uid 中传入有效的用户 ID 重新加入频道。"
  }, {
    heading: "所属接口类-8",
    content: "RtcEngine"
  }, {
    heading: "joinchannelwithuseraccountex",
    content: "使用用户 User Account 和 Token 加入频道，并设置媒体选项。"
  }, {
    heading: "joinchannelwithuseraccountex",
    content: "在调用此方法之前，如果你尚未调用 registerLocalUserAccount 注册用户 User Account，SDK 会在你调用此方法加入频道时自动创建用户 User Account。提前调用 registerLocalUserAccount 可以缩短加入频道所需的时间。 一旦用户加入频道，默认会订阅频道中所有其他用户的音视频流，从而产生使用量和计费。如果你希望停止订阅其他用户的媒体流，可以设置 `options` 参数或调用 `muteRemoteAudio/VideoStream` 或 `muteAllRemoteAudio/VideoStreams`。"
  }, {
    heading: "joinchannelwithuseraccountex",
    content: "注："
  }, {
    heading: "joinchannelwithuseraccountex",
    content: "该方法仅支持用户同时加入一个频道。"
  }, {
    heading: "joinchannelwithuseraccountex",
    content: "不同 App ID 的用户无法互通。"
  }, {
    heading: "joinchannelwithuseraccountex",
    content: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create \\[2/2] 方法时传入的 App ID 相同，否则可能导致加入频道失败。"
  }, {
    heading: "joinchannelwithuseraccountex",
    content: "为确保通信顺畅，请使用相同的参数类型标识用户。例如，如果某用户使用 uid 加入频道，则其他用户也应使用 uid；如果使用用户 User Account 加入频道，则其他用户也应使用用户 User Account。若使用声网 Web SDK 加入频道，请确保用户 ID 的参数类型一致。"
  }, {
    heading: "适用场景-3",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-6",
    content: "在调用 create \\[2/2] 之后调用此方法。"
  }, {
    heading: "相关回调-5",
    content: "本地客户端： onLocalUserRegistered、 onJoinChannelSuccess 和 onConnectionStateChanged 回调。 远端客户端：如果用户在 `COMMUNICATION` 频道场景中加入频道，或主播在 `LIVE_BROADCASTING` 频道场景中加入频道，则触发 onUserJoined 和 onUserInfoUpdated 回调。"
  }, {
    heading: "token-5",
    content: "在你的服务器上生成的用于鉴权的 Token。"
  }, {
    heading: "token-5",
    content: "注："
  }, {
    heading: "token-5",
    content: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
  }, {
    heading: "token-5",
    content: "如果你只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，你将在 24 小时后自动退出频道。"
  }, {
    heading: "token-5",
    content: "如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样你无需每次加入频道时都申请新的 Token。"
  }, {
    heading: "channelid-2",
    content: "频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
  }, {
    heading: "channelid-2",
    content: "所有小写英文字母：a 到 z。"
  }, {
    heading: "channelid-2",
    content: "所有大写英文字母：A 到 Z。"
  }, {
    heading: "channelid-2",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "channelid-2",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","'
  }, {
    heading: "useraccount-4",
    content: "用户 User Account。你需要自行设置和管理用户 User Account，并确保同一频道中的每个用户 User Account 唯一。该参数的最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）："
  }, {
    heading: "useraccount-4",
    content: "26 个小写英文字母：a 到 z。"
  }, {
    heading: "useraccount-4",
    content: "26 个大写英文字母：A 到 Z。"
  }, {
    heading: "useraccount-4",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "useraccount-4",
    content: "空格"
  }, {
    heading: "useraccount-4",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","'
  }, {
    heading: "options-3",
    content: "频道媒体选项。详见 ChannelMediaOptions。"
  }, {
    heading: "eventhandler-1",
    content: "RtcEngineEx 的回调类。详见 IRtcEngineEventHandler。你可以通过该参数传入的 `eventHandler` 对象获取多个频道的回调事件。"
  }, {
    heading: "返回值-9",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-9",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-9",
    content: "-2：参数无效。例如 Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中某成员的值无效。请传入有效参数后重新加入频道。"
  }, {
    heading: "返回值-9",
    content: "-3： RtcEngine 对象初始化失败。请重新初始化 RtcEngine 对象。"
  }, {
    heading: "返回值-9",
    content: "-7： RtcEngine 对象尚未初始化。请先初始化后再调用此方法。"
  }, {
    heading: "返回值-9",
    content: "-8： RtcEngine 对象内部状态错误。典型原因是在调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用此方法。请先调用 stopEchoTest 再调用此方法。"
  }, {
    heading: "返回值-9",
    content: "-17：加入频道请求被拒绝。典型原因是用户已在频道中。建议通过 onConnectionStateChanged 回调确认用户是否已在频道中，除非收到 CONNECTION\\_STATE\\_DISCONNECTED （1）状态，否则不要调用此方法。"
  }, {
    heading: "返回值-9",
    content: "-102：频道名无效。请在 channelId 中传入有效的频道名后重新加入频道。"
  }, {
    heading: "返回值-9",
    content: "-121：用户 ID 无效。请在 uid 中传入有效的用户 ID 后重新加入频道。"
  }, {
    heading: "所属接口类-9",
    content: "RtcEngineEx"
  }, {
    heading: "leavechannel-12",
    content: "离开频道。"
  }, {
    heading: "leavechannel-12",
    content: "调用该方法后，SDK 会终止音视频互动，释放与会话相关的所有资源。加入频道后，必须调用该方法结束通话，否则无法开始下一次通话。"
  }, {
    heading: "leavechannel-12",
    content: "注："
  }, {
    heading: "leavechannel-12",
    content: "如果在调用该方法后立即调用 destroy \\[2/2]，SDK 不会触发 onLeaveChannel 回调。"
  }, {
    heading: "leavechannel-12",
    content: "此方法为异步调用。当该方法返回时，并不代表用户已完全离开频道。"
  }, {
    heading: "leavechannel-12",
    content: "如果你调用了 joinChannelEx 加入了多个频道，调用该方法会离开你加入的所有频道。"
  }, {
    heading: "调用时机-7",
    content: "在加入频道后调用该方法。"
  }, {
    heading: "相关回调-6",
    content: "调用该方法成功后会触发以下回调："
  }, {
    heading: "相关回调-6",
    content: "本地客户端实例：会触发 onLeaveChannel 回调。"
  }, {
    heading: "相关回调-6",
    content: "远端客户端实例：远端主播离开频道后会触发 onUserOffline 回调。"
  }, {
    heading: "返回值-10",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-10",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-10",
    content: "-1：发生通用错误（无明确原因）。"
  }, {
    heading: "返回值-10",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-10",
    content: "-7：SDK 未初始化。"
  }, {
    heading: "所属接口类-10",
    content: "RtcEngine"
  }, {
    heading: "leavechannel-22",
    content: "设置频道选项并离开频道。"
  }, {
    heading: "leavechannel-22",
    content: "调用该方法后，SDK 会终止音视频互动，离开当前频道，并释放与会话相关的所有资源。如果你调用了 joinChannelEx 加入了多个频道，调用该方法会离开你加入的所有频道。"
  }, {
    heading: "leavechannel-22",
    content: "如果在调用该方法后立即调用 destroy \\[2/2]，SDK 不会触发 onLeaveChannel 回调。该方法为异步调用。当该方法返回时，并不一定表示用户已离开频道。"
  }, {
    heading: "调用时机-8",
    content: "在加入频道后调用该方法。"
  }, {
    heading: "相关回调-7",
    content: "调用该方法成功后会触发以下回调："
  }, {
    heading: "相关回调-7",
    content: "本地客户端实例：触发 onLeaveChannel 回调。"
  }, {
    heading: "相关回调-7",
    content: "远端客户端实例：远端主播离开频道后触发 onUserOffline 回调。"
  }, {
    heading: "options-4",
    content: "离开频道的选项，详见 LeaveChannelOptions。"
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
    heading: "leavechannelex-12",
    content: "离开频道。"
  }, {
    heading: "leavechannelex-12",
    content: "调用该方法后，SDK 会终止音视频互动，离开当前频道，并释放与会话相关的所有资源。调用 joinChannelEx 加入频道后，必须调用此方法或 `leaveChannelEx` 结束通话，否则无法开始下一次通话。"
  }, {
    heading: "leavechannelex-12",
    content: "注："
  }, {
    heading: "leavechannelex-12",
    content: "如果在调用该方法后立即调用 destroy \\[2/2]，SDK 不会触发 onLeaveChannel 回调。"
  }, {
    heading: "leavechannelex-12",
    content: "该方法为异步调用，方法返回时并不代表用户已离开频道。"
  }, {
    heading: "leavechannelex-12",
    content: "如果调用 leaveChannel \\[1/2] 或 leaveChannel \\[2/2]，你将离开通过 joinChannel \\[1/2]、 joinChannel \\[2/2] 或 joinChannelEx 加入的所有频道。"
  }, {
    heading: "适用场景-4",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-9",
    content: "在调用 joinChannelEx 之后调用该方法。"
  }, {
    heading: "相关回调-8",
    content: "调用成功后会触发以下回调："
  }, {
    heading: "相关回调-8",
    content: "本地客户端实例：触发 onLeaveChannel 回调。"
  }, {
    heading: "相关回调-8",
    content: "远端客户端实例：远端主播离开频道后触发 onUserOffline 回调。"
  }, {
    heading: "connection-3",
    content: "连接信息，详见 RtcConnection。"
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
    heading: "leavechannelex-22",
    content: "设置频道参数并离开频道。"
  }, {
    heading: "自从-1",
    content: "自 v4.1.0 版本新增。"
  }, {
    heading: "自从-1",
    content: "调用该方法后，SDK 会终止音视频互动，并释放与会话相关的所有资源。调用 joinChannelEx 加入频道后，必须调用此方法或 `leaveChannelEx(RtcConnection connection)` 结束通话，否则无法开始下一次通话。"
  }, {
    heading: "自从-1",
    content: "注："
  }, {
    heading: "自从-1",
    content: "如果在调用该方法后立即调用 destroy()，SDK 不会触发 onLeaveChannel 回调。"
  }, {
    heading: "自从-1",
    content: "此方法为异步调用。当该方法返回时，并不代表你已离开频道。"
  }, {
    heading: "自从-1",
    content: "如果调用 leaveChannel() 或 leaveChannel(LeaveChannelOptions options)，将会离开通过 joinChannel \\[1/2]、 joinChannel \\[2/2] 或 joinChannelEx 加入的所有频道。"
  }, {
    heading: "适用场景-5",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-10",
    content: "在调用 joinChannelEx 之后调用该方法。"
  }, {
    heading: "相关回调-9",
    content: "调用该方法成功后会触发以下回调："
  }, {
    heading: "相关回调-9",
    content: "本地客户端实例：会触发 onLeaveChannel 回调。"
  }, {
    heading: "相关回调-9",
    content: "远端客户端实例：远端主播离开频道后会触发 onUserOffline 回调。"
  }, {
    heading: "connection-4",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "options-5",
    content: "离开频道的选项。"
  }, {
    heading: "options-5",
    content: "该参数仅支持 LeaveChannelOptions 中的 `stopMicrophoneRecording` 成员，设置其他成员无效。"
  }, {
    heading: "返回值-13",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-13",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-13",
    content: "RtcEngineEx"
  }, {
    heading: "preloadchannel",
    content: "预加载指定频道以缩短观众加入频道的时间。"
  }, {
    heading: "preloadchannel",
    content: "当观众需要频繁切换不同频道时，调用该方法可以缩短加入频道的时间，从而减少观众听到和看到主播的延迟时间。如果你加入了一个已预加载的频道，离开后想重新加入该频道，除非用于预加载频道的 Token 过期，否则无需再次调用该方法。"
  }, {
    heading: "preloadchannel",
    content: "注："
  }, {
    heading: "preloadchannel",
    content: "调用该方法时，请确保将用户角色设置为观众，且未将音频场景设置为 AUDIO\\_SCENARIO\\_CHORUS，否则该方法不生效。"
  }, {
    heading: "preloadchannel",
    content: "你还需要确保用于预加载的频道名、用户 ID 和 Token 与加入频道时传入的值一致，否则该方法不生效。"
  }, {
    heading: "preloadchannel",
    content: "一个 RtcEngine 实例最多支持预加载 20 个频道，超出限制时，仅最近的 20 个预加载频道生效。"
  }, {
    heading: "preloadchannel",
    content: "预加载频道失败并不意味着无法加入频道，也不会增加加入频道所需的时间。"
  }, {
    heading: "token-6",
    content: "在你的服务器上生成的用于鉴权的 Token。当用于预加载频道的 Token 过期时，你可以根据预加载的频道数量更新 Token："
  }, {
    heading: "token-6",
    content: "预加载一个频道时，调用该方法传入新的 Token。"
  }, {
    heading: "token-6",
    content: "预加载多个频道时："
  }, {
    heading: "token-6",
    content: "如果你为所有预加载频道使用通配符 Token，调用 updatePreloadChannelToken 更新 Token。注意：生成通配符 Token 时，确保用户 ID 不为 0。"
  }, {
    heading: "token-6",
    content: "如果你为不同频道使用不同的 Token，调用该方法传入你的用户 ID、频道名和新的 Token。"
  }, {
    heading: "channelname-2",
    content: "你想要预加载的频道名。该参数表示用户进行实时音视频互动的频道。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
  }, {
    heading: "channelname-2",
    content: "所有小写英文字母：a 到 z。"
  }, {
    heading: "channelname-2",
    content: "所有大写英文字母：A 到 Z。"
  }, {
    heading: "channelname-2",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "channelname-2",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","。'
  }, {
    heading: "optionaluid",
    content: "用户 ID。用于标识频道中的用户以进行实时音视频互动。你需要自行设置和管理用户 ID，并确保同一频道中的每个用户 ID 唯一。该参数为 32 位无符号整数，取值范围为 -2^31 到 2^31-1。如果未指定用户 ID（或设置为 0），SDK 会分配一个随机用户 ID，并在 onJoinChannelSuccess 回调中返回。你的应用必须记录并维护返回的用户 ID，SDK 不会保存。"
  }, {
    heading: "返回值-14",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-14",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-14",
    content: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。"
  }, {
    heading: "返回值-14",
    content: "-102：频道名无效。请传入有效的频道名并重新加入频道。"
  }, {
    heading: "所属接口类-14",
    content: "RtcEngine"
  }, {
    heading: "preloadchannelwithuseraccount",
    content: "预加载指定频道，缩短观众加入频道的时间。"
  }, {
    heading: "preloadchannelwithuseraccount",
    content: "当观众需要频繁切换不同频道时，调用该方法可以缩短加入频道的时间，从而减少观众听到和看到主播的延迟。如果你加入了一个已预加载的频道，离开后想重新加入同一个频道，除非用于预加载频道的 Token 过期，否则无需再次调用该方法。"
  }, {
    heading: "preloadchannelwithuseraccount",
    content: "注："
  }, {
    heading: "preloadchannelwithuseraccount",
    content: "调用该方法时，请确保将用户角色设置为观众，且未将音频场景设置为 AUDIO\\_SCENARIO\\_CHORUS，否则该方法不生效。"
  }, {
    heading: "preloadchannelwithuseraccount",
    content: "你需要确保用于预加载的用户 User Account、频道名和 Token 与加入频道时传入的值一致，否则该方法不生效。"
  }, {
    heading: "preloadchannelwithuseraccount",
    content: "一个 RtcEngine 实例最多支持预加载 20 个频道。超过该限制时，仅最近的 20 个预加载频道生效。"
  }, {
    heading: "preloadchannelwithuseraccount",
    content: "预加载频道失败不会影响加入频道的能力，也不会增加加入频道所需的时间。"
  }, {
    heading: "调用时机-11",
    content: "为提升预加载频道的用户体验，声网建议在确认频道名和用户信息后尽早调用该方法。"
  }, {
    heading: "token-7",
    content: "你在服务器上生成的用于鉴权的 Token。当用于预加载频道的 Token 过期时，你可以根据预加载的频道数量更新 Token："
  }, {
    heading: "token-7",
    content: "预加载一个频道时，调用该方法传入新的 Token。"
  }, {
    heading: "token-7",
    content: "预加载多个频道时："
  }, {
    heading: "token-7",
    content: "如果你为所有预加载频道使用通配符 Token，调用 updatePreloadChannelToken 更新 Token。注意：生成通配符 Token 时，确保用户 ID 不为 0。"
  }, {
    heading: "token-7",
    content: "如果你为不同频道使用不同的 Token，调用该方法传入用户 User Account、频道名和新的 Token。"
  }, {
    heading: "channelname-3",
    content: "你想要预加载的频道名。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
  }, {
    heading: "channelname-3",
    content: "所有小写英文字母：a 到 z。"
  }, {
    heading: "channelname-3",
    content: "所有大写英文字母：A 到 Z。"
  }, {
    heading: "channelname-3",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "channelname-3",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","'
  }, {
    heading: "useraccount-5",
    content: "用户 User Account，用于标识频道中的用户。你需要自行设置和管理用户 User Account，并确保同一频道中的每个用户 User Account 唯一。该参数最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）："
  }, {
    heading: "useraccount-5",
    content: "26 个小写英文字母：a 到 z。"
  }, {
    heading: "useraccount-5",
    content: "26 个大写英文字母：A 到 Z。"
  }, {
    heading: "useraccount-5",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "useraccount-5",
    content: "空格"
  }, {
    heading: "useraccount-5",
    content: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", "\\{", "}", "|", "\\~", ","'
  }, {
    heading: "返回值-15",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-15",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-15",
    content: "-2：参数无效，例如用户 User Account 为空。请传入有效参数后重新加入频道。"
  }, {
    heading: "返回值-15",
    content: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象后再调用该方法。"
  }, {
    heading: "返回值-15",
    content: "-102：频道名无效。请传入有效的频道名后重新加入频道。"
  }, {
    heading: "所属接口类-15",
    content: "RtcEngine"
  }, {
    heading: "registerlocaluseraccount",
    content: "注册用户 User Account。"
  }, {
    heading: "registerlocaluseraccount",
    content: "该方法用于注册用户 User Account。注册成功后，用户 User Account 可用于在加入频道时标识本地用户身份。该方法为可选项。如果你希望使用用户 User Account 加入频道，可以选择以下任一方式："
  }, {
    heading: "registerlocaluseraccount",
    content: "先调用 registerLocalUserAccount 方法注册用户 User Account，再调用 joinChannelWithUserAccount 方法加入频道，可缩短进入频道所需时间。"
  }, {
    heading: "registerlocaluseraccount",
    content: "直接调用 joinChannelWithUserAccount 方法加入频道。"
  }, {
    heading: "相关回调-10",
    content: "成功调用该方法后，SDK 会触发 onLocalUserRegistered 回调，报告本地用户的用户 ID 和用户 User Account。"
  }, {
    heading: "appid",
    content: "声网控制台中项目的 App ID。"
  }, {
    heading: "useraccount-6",
    content: "用户 User Account，用于在频道中标识用户身份以实现实时音视频互动。你需要自行设置并管理用户 User Account，并确保同一频道内的每个用户 User Account 唯一。该参数的最大长度为 255 字节，不能为空。支持的字符共 89 个，包括："
  }, {
    heading: "useraccount-6",
    content: "26 个小写英文字母：a 到 z。"
  }, {
    heading: "useraccount-6",
    content: "26 个大写英文字母：A 到 Z。"
  }, {
    heading: "useraccount-6",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "useraccount-6",
    content: "空格"
  }, {
    heading: "useraccount-6",
    content: '"!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"\\<"、"="、"."、">"、"?"、"@"、"\\["、"]"、"^"、"\\_"、"\\{"、"}"、"|"、"\\~"、","'
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
    heading: "renewtoken",
    content: "更新 Token。"
  }, {
    heading: "renewtoken",
    content: "成功调用该方法后，SDK 会触发 onRenewTokenResult 回调。在单频道场景下，你可以在以下情况下调用该方法更新 Token："
  }, {
    heading: "renewtoken",
    content: "收到 onTokenPrivilegeWillExpire 回调，提示 Token 即将过期。"
  }, {
    heading: "renewtoken",
    content: "Token 已过期时，SDK 会触发 onRequestToken 回调，并在 onConnectionStateChanged 回调中报告 CONNECTION\\_CHANGED\\_TOKEN\\_EXPIRED （9）。"
  }, {
    heading: "token-8",
    content: "新的 Token。"
  }, {
    heading: "返回值-17",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-17",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-17",
    content: "-2：参数无效，例如传入的 Token 为空。"
  }, {
    heading: "返回值-17",
    content: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。"
  }, {
    heading: "返回值-17",
    content: "110：Token 无效。请确保以下事项："
  }, {
    heading: "返回值-17",
    content: "生成 Token 时指定的用户 ID 与加入频道时使用的用户 ID 一致。"
  }, {
    heading: "返回值-17",
    content: "生成的 Token 与加入频道时传入的 Token 相同。"
  }, {
    heading: "所属接口类-17",
    content: "RtcEngine"
  }, {
    heading: "setchannelprofile",
    content: "设置频道场景。"
  }, {
    heading: "setchannelprofile",
    content: "SDK 会根据不同的频道场景采用不同的优化策略，例如在直播场景中优先保证视频质量。初始化 SDK 后，默认频道场景为直播。"
  }, {
    heading: "setchannelprofile",
    content: "为确保实时通信质量，建议频道内所有用户使用相同的频道场景。不同频道场景下，SDK 的默认音频路由也不同，详见 `setDefaultAudioRouteToSpeakerphone`。"
  }, {
    heading: "调用时机-12",
    content: "在加入频道前调用此方法。"
  }, {
    heading: "profile",
    content: "频道场景："
  }, {
    heading: "profile",
    content: "CHANNEL\\_PROFILE\\_COMMUNICATION （0）：通信场景。建议使用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING 以获得更好的音视频体验。"
  }, {
    heading: "profile",
    content: "CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING （1）：（默认）直播场景。"
  }, {
    heading: "profile",
    content: "CHANNEL\\_PROFILE\\_GAME （2）：游戏场景。已废弃，请使用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING。"
  }, {
    heading: "profile",
    content: "CHANNEL\\_PROFILE\\_CLOUD\\_GAMING （3）：互动场景。该场景对延迟进行了优化，适用于用户之间需要频繁互动的场景。已废弃，请使用 CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING。"
  }, {
    heading: "返回值-18",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-18",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-18",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-18",
    content: "-7：SDK 未初始化。"
  }, {
    heading: "所属接口类-18",
    content: "RtcEngine"
  }, {
    heading: "setclientrole-12",
    content: "设置客户端实例的用户角色。"
  }, {
    heading: "setclientrole-12",
    content: "你可以调用该方法将用户角色设置为主播或观众。用户角色决定了用户在 SDK 层的权限，包括是否可以在频道中发布音视频流。 你可以在加入频道前或加入频道后调用该方法："
  }, {
    heading: "setclientrole-12",
    content: "如果你在加入频道前调用该方法将用户角色设置为主播，并通过 setupLocalVideo 设置本地视频属性，则用户加入频道时会自动开启本地视频预览。"
  }, {
    heading: "setclientrole-12",
    content: "如果你在加入频道后调用该方法设置用户角色，SDK 会自动调用 muteLocalAudioStream 和 muteLocalVideoStream 更改音视频流的发布状态。"
  }, {
    heading: "setclientrole-12",
    content: "在加入频道前调用该方法并将用户角色设置为 `CLIENT_ROLE_BROADCASTER` 时，本地客户端不会触发 onClientRoleChanged 回调。加入频道前调用该方法并将 `role` 设置为 `CLIENT_ROLE_AUDIENCE` 时也会触发该回调。"
  }, {
    heading: "调用时机-13",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "相关回调-11",
    content: "如果你在加入频道后调用此方法切换用户角色，SDK 会触发以下回调："
  }, {
    heading: "相关回调-11",
    content: "本地客户端触发 onClientRoleChanged 回调。"
  }, {
    heading: "相关回调-11",
    content: "远端客户端触发 onUserJoined 或 onUserOffline 回调。"
  }, {
    heading: "相关回调-11",
    content: "如果你在加入频道后调用此方法设置用户角色但失败，SDK 会触发 onClientRoleChangeFailed 回调，报告失败原因和当前用户角色。"
  }, {
    heading: "role",
    content: "如果你将用户角色设置为观众，则无法在频道中发布音视频流。"
  }, {
    heading: "role",
    content: "用户角色："
  }, {
    heading: "role",
    content: "CLIENT\\_ROLE\\_BROADCASTER (1)：主播。"
  }, {
    heading: "role",
    content: "CLIENT\\_ROLE\\_AUDIENCE (2)：观众。"
  }, {
    heading: "返回值-19",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-19",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-19",
    content: "-1：发生通用错误（无具体原因）。"
  }, {
    heading: "返回值-19",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-19",
    content: "-7：SDK 未初始化。"
  }, {
    heading: "所属接口类-19",
    content: "RtcEngine"
  }, {
    heading: "setclientrole-22",
    content: "设置直播场景下的用户角色和观众延迟等级。"
  }, {
    heading: "setclientrole-22",
    content: "默认情况下，SDK 会将用户角色设置为观众。你可以调用此方法将用户角色设置为主播。用户角色 (`role`) 决定了用户在 SDK 层级的权限，包括是否可以在频道中发布音视频流。 该方法与 `setClientRole(int role)` 的区别在于，它支持设置 `audienceLatencyLevel`。 `audienceLatencyLevel` 需要与 `role` 搭配使用，以确定用户在其权限范围内可享受的服务等级。例如，观众可以选择接收低延迟或超低延迟的远端流。"
  }, {
    heading: "setclientrole-22",
    content: "当用户角色设置为主播时，观众延迟等级只能设置为 `AUDIENCE_LATENCY_LEVEL_ULTRA_LOW_LATENCY`。 在加入频道前调用此方法并将 `role` 设置为 `BROADCASTER` 时，本地客户端不会触发 onClientRoleChanged 回调。 在加入频道前调用此方法并将 `role` 设置为 `AUDIENCE` 时，也会触发该回调。"
  }, {
    heading: "调用时机-14",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "调用时机-14",
    content: "如果你在加入频道前调用此方法并通过 setupLocalVideo 设置本地视频属性，则用户加入频道时会自动开启本地视频预览。"
  }, {
    heading: "调用时机-14",
    content: "如果你在加入频道后调用此方法设置用户角色，SDK 会自动调用 muteLocalAudioStream 和 muteLocalVideoStream 方法来改变音视频流的发布状态。"
  }, {
    heading: "相关回调-12",
    content: "如果你在加入频道后调用此方法切换用户角色，SDK 会触发以下回调："
  }, {
    heading: "相关回调-12",
    content: "本地客户端触发 onClientRoleChanged 回调。注意：在加入频道前调用此方法并将 role 设置为 AUDIENCE 也会触发该回调。"
  }, {
    heading: "相关回调-12",
    content: "远端客户端触发 onUserJoined 或 onUserOffline 回调。"
  }, {
    heading: "相关回调-12",
    content: "如果你在加入频道后调用此方法设置用户角色但失败，SDK 会触发 onClientRoleChangeFailed 回调，报告失败原因和当前用户角色。"
  }, {
    heading: "role-1",
    content: "如果你将用户角色设置为观众，则无法在频道中发布音视频流。如果你希望在直播过程中发布媒体流，请确保将用户角色设置为主播。"
  }, {
    heading: "role-1",
    content: "用户角色。"
  }, {
    heading: "role-1",
    content: "CLIENT\\_ROLE\\_BROADCASTER (1)：主播。"
  }, {
    heading: "role-1",
    content: "CLIENT\\_ROLE\\_AUDIENCE (2)：观众（默认）。"
  }, {
    heading: "options-6",
    content: "用户的详细选项，详见 ClientRoleOptions。"
  }, {
    heading: "返回值-20",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-20",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-20",
    content: "-1：发生通用错误（无明确原因）。"
  }, {
    heading: "返回值-20",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-20",
    content: "-5：请求被拒绝。"
  }, {
    heading: "返回值-20",
    content: "-7：SDK 未初始化。"
  }, {
    heading: "所属接口类-20",
    content: "RtcEngine"
  }, {
    heading: "updatechannelmediaoptions",
    content: "在加入频道后更新频道媒体选项。"
  }, {
    heading: "options-7",
    content: "频道媒体选项。详见 ChannelMediaOptions。"
  }, {
    heading: "返回值-21",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-21",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-21",
    content: "-2： ChannelMediaOptions 中某个成员的值无效，例如 Token 或用户 ID 无效。你需要填写有效的参数。"
  }, {
    heading: "返回值-21",
    content: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用该方法。"
  }, {
    heading: "返回值-21",
    content: "-8： RtcEngine 对象的内部状态错误。可能的原因是用户不在频道中。声网建议你使用 onConnectionStateChanged 回调判断用户是否在频道中。如果你收到 CONNECTION\\_STATE\\_DISCONNECTED （1）或 CONNECTION\\_STATE\\_FAILED （5）状态，说明用户不在频道中。你需要先调用 joinChannel 加入频道，再调用该方法。"
  }, {
    heading: "所属接口类-21",
    content: "RtcEngine"
  }, {
    heading: "updatechannelmediaoptionsex",
    content: "加入频道后更新频道媒体选项。"
  }, {
    heading: "适用场景-6",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "options-8",
    content: "频道媒体选项。详见 ChannelMediaOptions。"
  }, {
    heading: "connection-5",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-22",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-22",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-22",
    content: "-2： ChannelMediaOptions 中的成员值无效，例如 token 或用户 ID 无效。你需要填写有效的参数。"
  }, {
    heading: "返回值-22",
    content: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用该方法。"
  }, {
    heading: "返回值-22",
    content: "-8： RtcEngine 对象的内部状态错误，可能的原因是用户不在频道中。声网建议你使用 onConnectionStateChanged 回调判断用户是否在频道中。如果你收到 CONNECTION\\_STATE\\_DISCONNECTED （1）或 CONNECTION\\_STATE\\_FAILED （5）状态，说明用户不在频道中。你需要先调用 joinChannel 加入频道，再调用该方法。"
  }, {
    heading: "所属接口类-22",
    content: "RtcEngineEx"
  }, {
    heading: "updatepreloadchanneltoken",
    content: "更新用于预加载频道的通配 Token。"
  }, {
    heading: "updatepreloadchanneltoken",
    content: "你需要自行维护通配 Token 的生命周期。当该 Token 过期时，需要生成新的通配 Token，并调用该方法传入新的 Token。"
  }, {
    heading: "适用场景-7",
    content: "适用于涉及多个频道的场景，例如在不同频道之间切换时，使用通配 Token 可以避免用户每次加入新频道时都申请新的 Token，从而节省切换频道的时间，并减轻你的 Token 服务器的压力。"
  }, {
    heading: "token-9",
    content: "新的 Token。"
  }, {
    heading: "返回值-23",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-23",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-23",
    content: "-2：参数无效，例如 Token 无效。你需要传入有效参数并重新加入频道。"
  }, {
    heading: "返回值-23",
    content: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用此方法。"
  }, {
    heading: "所属接口类-23",
    content: "RtcEngine"
  }, {
    heading: "onclientrolechanged",
    content: "用户角色或观众延迟级别发生变化回调。"
  }, {
    heading: "onclientrolechanged",
    content: "当你在加入频道前调用 setClientRole \\[1/2] 或 setClientRole \\[2/2] 并将用户角色设置为主播时，该回调不会被触发。"
  }, {
    heading: "触发时机",
    content: "该回调在以下任一情况下被触发："
  }, {
    heading: "触发时机",
    content: "加入频道后调用 setClientRole \\[1/2] 或 setClientRole \\[2/2] 设置用户角色或观众延迟级别；"
  }, {
    heading: "触发时机",
    content: "加入频道前调用 setClientRole \\[1/2] 或 setClientRole \\[2/2] 并将用户角色设置为观众。"
  }, {
    heading: "oldrole",
    content: "用户切换前的角色："
  }, {
    heading: "oldrole",
    content: "CLIENT\\_ROLE\\_BROADCASTER (1)：主播。"
  }, {
    heading: "oldrole",
    content: "CLIENT\\_ROLE\\_AUDIENCE (2)：观众。"
  }, {
    heading: "newrole",
    content: "用户切换后的角色："
  }, {
    heading: "newrole",
    content: "CLIENT\\_ROLE\\_BROADCASTER (1)：主播。"
  }, {
    heading: "newrole",
    content: "CLIENT\\_ROLE\\_AUDIENCE (2)：观众。"
  }, {
    heading: "newroleoptions",
    content: "用户切换后的角色属性，详见 ClientRoleOptions。"
  }, {
    heading: "所属接口类-24",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onclientrolechangefailed",
    content: "切换用户角色失败时的回调。"
  }, {
    heading: "onclientrolechangefailed",
    content: "该回调用于通知切换用户角色失败的原因以及当前的用户角色。"
  }, {
    heading: "触发时机-1",
    content: "该回调在本地用户加入频道后调用 setClientRole \\[1/2] 或 setClientRole \\[2/2] （带 ClientRoleOptions 参数）切换用户角色失败时被触发。"
  }, {
    heading: "reason",
    content: "仅在启用 128 人功能时会返回该枚举值。主播数量上限取决于启用 128 人功能时配置的实际主播数量。"
  }, {
    heading: "reason",
    content: "用户角色切换失败的原因。"
  }, {
    heading: "reason",
    content: "CLIENT\\_ROLE\\_CHANGE\\_FAILED\\_TOO\\_MANY\\_BROADCASTERS (1)：频道中的主播数量已达上限。仅在启用 128 人功能时会返回该枚举值。"
  }, {
    heading: "reason",
    content: "CLIENT\\_ROLE\\_CHANGE\\_FAILED\\_NOT\\_AUTHORIZED (2)：请求被声网服务器拒绝。建议提示用户重试切换用户角色。"
  }, {
    heading: "reason",
    content: "CLIENT\\_ROLE\\_CHANGE\\_FAILED\\_REQUEST\\_TIME\\_OUT (3)：请求超时。建议提示用户检查网络连接并重试切换用户角色。自 v4.4.0 版本废弃，不建议使用。"
  }, {
    heading: "reason",
    content: "CLIENT\\_ROLE\\_CHANGE\\_FAILED\\_CONNECTION\\_FAILED (4)：SDK 连接失败。你可以通过 onConnectionStateChanged 回调中报告的 reason 进行排查。自 v4.4.0 版本废弃，不建议使用。"
  }, {
    heading: "currentrole",
    content: "当前的用户角色。"
  }, {
    heading: "currentrole",
    content: "CLIENT\\_ROLE\\_BROADCASTER (1)：主播，可以发送和接收音视频流。"
  }, {
    heading: "currentrole",
    content: "CLIENT\\_ROLE\\_AUDIENCE (2)：观众，只能接收音视频流。"
  }, {
    heading: "所属接口类-25",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onerror",
    content: "SDK 运行期间发生错误时触发的回调。"
  }, {
    heading: "onerror",
    content: "该回调表示 SDK 运行期间发生了网络或媒体相关的错误。在大多数情况下，SDK 无法自动修复该问题并继续运行，需要你在应用层进行处理或通知用户。"
  }, {
    heading: "触发时机-2",
    content: "该回调在 SDK 运行期间发生错误时被触发。"
  }, {
    heading: "err",
    content: "错误码。详见错误码文档。"
  }, {
    heading: "所属接口类-26",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onjoinchannelsuccess",
    content: "本地用户成功加入频道回调。"
  }, {
    heading: "触发时机-3",
    content: "该回调在你调用 `joinChannel`、 `joinChannelWithUserAccount`、 joinChannelEx 或 joinChannelWithUserAccountEx 加入频道时被触发。"
  }, {
    heading: "channel",
    content: "频道名。"
  }, {
    heading: "uid-4",
    content: "加入频道的用户 ID。"
  }, {
    heading: "elapsed",
    content: "从本地用户调用 `joinChannel` 加入频道到 SDK 触发该回调的时间间隔，单位为毫秒。"
  }, {
    heading: "所属接口类-27",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onleavechannel",
    content: "用户离开频道回调。"
  }, {
    heading: "触发时机-4",
    content: "该回调在你调用 leaveChannel \\[1/2]、 leaveChannel \\[2/2]、 leaveChannelEx \\[1/2] 或 leaveChannelEx \\[2/2] 离开频道后被触发。"
  }, {
    heading: "stats",
    content: "通话统计信息。详见 RtcStats。"
  }, {
    heading: "所属接口类-28",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onlocaluserregistered",
    content: "本地用户注册用户 User Account 回调。"
  }, {
    heading: "自从-2",
    content: "自 v2.8.0 版本新增。"
  }, {
    heading: "自从-2",
    content: "当本地用户成功调用 registerLocalUserAccount 方法注册用户 User Account，或调用 `joinChannelWithUserAccount` 方法加入频道后，SDK 会触发该回调，并返回本地用户的用户 ID 和用户 User Account。"
  }, {
    heading: "触发时机-5",
    content: "该回调在本地用户成功注册用户 User Account 或加入频道后被触发。"
  }, {
    heading: "uid-5",
    content: "本地用户的用户 ID。"
  }, {
    heading: "useraccount-7",
    content: "本地用户的用户 User Account。"
  }, {
    heading: "所属接口类-29",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onrejoinchannelsuccess",
    content: "用户重新加入频道回调。"
  }, {
    heading: "onrejoinchannelsuccess",
    content: "该回调在用户因网络问题与服务器断开连接后，SDK 自动尝试重连并成功重连时触发。"
  }, {
    heading: "触发时机-6",
    content: "该回调在用户因网络问题与服务器断开连接后，SDK 自动尝试重连并成功重连时被触发。"
  }, {
    heading: "channel-1",
    content: "频道名。"
  }, {
    heading: "uid-6",
    content: "重新加入频道的用户 ID。"
  }, {
    heading: "elapsed-1",
    content: "从本地用户调用 `joinChannel` 到 SDK 触发该回调的时间间隔，单位为毫秒。"
  }, {
    heading: "所属接口类-30",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onrenewtokenresult",
    content: "renewToken 调用结果回调。"
  }, {
    heading: "自从-3",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从-3",
    content: "该回调在调用 renewToken 方法后触发，用于通知更新结果。"
  }, {
    heading: "触发时机-7",
    content: "该回调在你调用 renewToken 方法后被触发。"
  }, {
    heading: "token-10",
    content: "用于鉴权的 Token。"
  }, {
    heading: "code",
    content: "错误码。详见 RenewTokenErrorCode。"
  }, {
    heading: "所属接口类-31",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onrequesttoken",
    content: "Token 过期回调。"
  }, {
    heading: "onrequesttoken",
    content: "该回调在 Token 过期时被触发。收到该回调后，你需要在 Token 服务器上生成新的 Token，并通过以下方式之一更新 Token："
  }, {
    heading: "onrequesttoken",
    content: "单频道场景："
  }, {
    heading: "onrequesttoken",
    content: "调用 renewToken 更新 Token。"
  }, {
    heading: "onrequesttoken",
    content: "调用 leaveChannel 离开当前频道，然后在调用 joinChannel 加入频道时传入新的 Token。"
  }, {
    heading: "onrequesttoken",
    content: "多频道场景：调用 updateChannelMediaOptionsEx 传入新的 Token。"
  }, {
    heading: "触发时机-8",
    content: "该回调在 Token 过期时被触发。"
  }, {
    heading: "所属接口类-32",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onrtcstats",
    content: "报告当前通话统计信息的回调。"
  }, {
    heading: "触发时机-9",
    content: "该回调在用户加入频道后每两秒触发一次。"
  }, {
    heading: "stats-1",
    content: "RTC 引擎的统计信息，详见 RtcStats。"
  }, {
    heading: "所属接口类-33",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "ontokenprivilegewillexpire",
    content: "Token 即将在 30 秒后过期时触发的回调。"
  }, {
    heading: "ontokenprivilegewillexpire",
    content: "收到该回调时，你需要在 Token 服务器上生成一个新的 Token，并通过以下方式之一更新 Token："
  }, {
    heading: "ontokenprivilegewillexpire",
    content: "单频道场景："
  }, {
    heading: "ontokenprivilegewillexpire",
    content: "调用 renewToken 传入新的 Token。"
  }, {
    heading: "ontokenprivilegewillexpire",
    content: "调用 leaveChannel 离开当前频道，然后在调用 joinChannel 加入频道时传入新的 Token。"
  }, {
    heading: "ontokenprivilegewillexpire",
    content: "多频道场景：调用 updateChannelMediaOptionsEx 传入新的 Token。"
  }, {
    heading: "触发时机-10",
    content: "该回调在 Token 过期前 30 秒被触发。"
  }, {
    heading: "token-11",
    content: "即将过期的 Token。"
  }, {
    heading: "所属接口类-34",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onuserinfoupdated",
    content: "远端用户的用户 ID 和用户 User Account 信息更新回调。"
  }, {
    heading: "自从-4",
    content: "自 v2.8.0 版本新增。"
  }, {
    heading: "自从-4",
    content: "当远端用户加入频道后，SDK 会获取该用户的用户 ID 和用户 User Account，并将其缓存在映射表中，然后在本地客户端触发该回调。"
  }, {
    heading: "触发时机-11",
    content: "该回调在远端用户加入频道后，SDK 获取到其用户 ID 和用户 User Account 时被触发。"
  }, {
    heading: "uid-7",
    content: "远端用户的用户 ID。"
  }, {
    heading: "userinfo-4",
    content: "包含远端用户的用户 ID 和用户 User Account 信息。详见 UserInfo。"
  }, {
    heading: "所属接口类-35",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onuserjoined",
    content: "远端用户或主播加入频道回调。"
  }, {
    heading: "onuserjoined",
    content: "在通信频道中，该回调表示有远端用户加入频道。当本地用户加入频道时，SDK 也会触发该回调报告频道中已有的用户。在直播频道中，该回调表示有主播加入频道。声网建议将连麦主播数量限制为 32 人，最多支持 17 路视频主播。"
  }, {
    heading: "触发时机-12",
    content: "该回调在以下任一情况下被触发："
  }, {
    heading: "触发时机-12",
    content: "远端用户或主播加入频道。"
  }, {
    heading: "触发时机-12",
    content: "远端用户加入频道后将用户角色切换为主播。"
  }, {
    heading: "触发时机-12",
    content: "远端用户或主播在网络中断后重新加入频道。"
  }, {
    heading: "uid-8",
    content: "加入频道的用户 ID。"
  }, {
    heading: "elapsed-2",
    content: "从本地用户调用 `joinChannel` 到该回调被触发的延迟（毫秒）。"
  }, {
    heading: "所属接口类-36",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onuseroffline",
    content: "远端用户或主播离开频道时触发的回调。"
  }, {
    heading: "onuseroffline",
    content: "用户离线通常有以下两种原因："
  }, {
    heading: "onuseroffline",
    content: "离开频道：当用户或主播离开频道时，会发送一条离开消息。"
  }, {
    heading: "onuseroffline",
    content: "掉线：在一段时间内（通信场景为 20 秒，直播场景更长）未收到用户或主播的数据包时，SDK 会认为其掉线。网络连接不佳可能导致误判，建议使用声网 RTM SDK 进行可靠的离线检测。"
  }, {
    heading: "触发时机-13",
    content: "该回调在远端用户（在通信场景中）或主播（在直播场景中）离开频道时被触发。"
  }, {
    heading: "uid-9",
    content: "离开频道或掉线的用户 ID。"
  }, {
    heading: "reason-1",
    content: "远端用户（在通信场景中）或主播（在直播场景中）离线的原因："
  }, {
    heading: "reason-1",
    content: "USER\\_OFFLINE\\_QUIT (0)：用户主动退出通话，发送离开消息。"
  }, {
    heading: "reason-1",
    content: "USER\\_OFFLINE\\_DROPPED (1)：SDK 超时未收到任何数据包，用户掉线。网络连接不佳可能导致误判，建议使用声网 RTM SDK 进行可靠的离线检测。"
  }, {
    heading: "reason-1",
    content: "USER\\_OFFLINE\\_BECOME\\_AUDIENCE (2)：用户将角色从主播切换为观众。"
  }, {
    heading: "所属接口类-37",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "getuserinfobyuid",
    content: "getUserInfoByUid"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "userinfo",
    content: "`userInfo`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "getuserinfobyuidex",
    content: "getUserInfoByUidEx"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "userinfo-1",
    content: "`userInfo`"
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
    id: "getuserinfobyuseraccount",
    content: "getUserInfoByUserAccount"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "useraccount",
    content: "`userAccount`"
  }, {
    id: "userinfo-2",
    content: "`userInfo`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "getuserinfobyuseraccountex",
    content: "getUserInfoByUserAccountEx"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "useraccount-1",
    content: "`userAccount`"
  }, {
    id: "userinfo-3",
    content: "`userInfo`"
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
    id: "joinchannel-12",
    content: "joinChannel [1/2]"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "token",
    content: "`token`"
  }, {
    id: "channelid",
    content: "`channelId`"
  }, {
    id: "optionalinfo",
    content: "`optionalInfo`"
  }, {
    id: "uid-2",
    content: "`uid`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "joinchannel-22",
    content: "joinChannel [2/2]"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "token-1",
    content: "`token`"
  }, {
    id: "channelid-1",
    content: "`channelId`"
  }, {
    id: "uid-3",
    content: "`uid`"
  }, {
    id: "options",
    content: "`options`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "joinchannelex",
    content: "joinChannelEx"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "相关回调-2",
    content: "相关回调"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "token-2",
    content: "`token`"
  }, {
    id: "connection-2",
    content: "`connection`"
  }, {
    id: "options-1",
    content: "`options`"
  }, {
    id: "eventhandler",
    content: "`eventHandler`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "joinchannelwithuseraccount-12",
    content: "joinChannelWithUserAccount [1/2]"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "相关回调-3",
    content: "相关回调"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "token-3",
    content: "`token`"
  }, {
    id: "channelname",
    content: "`channelName`"
  }, {
    id: "useraccount-2",
    content: "`userAccount`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "joinchannelwithuseraccount-22",
    content: "joinChannelWithUserAccount [2/2]"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "相关回调-4",
    content: "相关回调"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "token-4",
    content: "`token`"
  }, {
    id: "channelname-1",
    content: "`channelName`"
  }, {
    id: "useraccount-3",
    content: "`userAccount`"
  }, {
    id: "options-2",
    content: "`options`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "joinchannelwithuseraccountex",
    content: "joinChannelWithUserAccountEx"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "相关回调-5",
    content: "相关回调"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "token-5",
    content: "`token`"
  }, {
    id: "channelid-2",
    content: "`channelId`"
  }, {
    id: "useraccount-4",
    content: "`userAccount`"
  }, {
    id: "options-3",
    content: "`options`"
  }, {
    id: "eventhandler-1",
    content: "`eventHandler`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "leavechannel-12",
    content: "leaveChannel [1/2]"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "相关回调-6",
    content: "相关回调"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "leavechannel-22",
    content: "leaveChannel [2/2]"
  }, {
    id: "调用时机-8",
    content: "调用时机"
  }, {
    id: "相关回调-7",
    content: "相关回调"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "options-4",
    content: "`options`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "leavechannelex-12",
    content: "leaveChannelEx [1/2]"
  }, {
    id: "适用场景-4",
    content: "适用场景"
  }, {
    id: "调用时机-9",
    content: "调用时机"
  }, {
    id: "相关回调-8",
    content: "相关回调"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "connection-3",
    content: "`connection`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "leavechannelex-22",
    content: "leaveChannelEx [2/2]"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "适用场景-5",
    content: "适用场景"
  }, {
    id: "调用时机-10",
    content: "调用时机"
  }, {
    id: "相关回调-9",
    content: "相关回调"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "connection-4",
    content: "`connection`"
  }, {
    id: "options-5",
    content: "`options`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "preloadchannel",
    content: "preloadChannel"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "token-6",
    content: "`token`"
  }, {
    id: "channelname-2",
    content: "`channelName`"
  }, {
    id: "optionaluid",
    content: "`optionalUid`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "preloadchannelwithuseraccount",
    content: "preloadChannelWithUserAccount"
  }, {
    id: "调用时机-11",
    content: "调用时机"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "token-7",
    content: "`token`"
  }, {
    id: "channelname-3",
    content: "`channelName`"
  }, {
    id: "useraccount-5",
    content: "`userAccount`"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "registerlocaluseraccount",
    content: "registerLocalUserAccount"
  }, {
    id: "相关回调-10",
    content: "相关回调"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "appid",
    content: "`appId`"
  }, {
    id: "useraccount-6",
    content: "`userAccount`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "renewtoken",
    content: "renewToken"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "token-8",
    content: "`token`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "setchannelprofile",
    content: "setChannelProfile"
  }, {
    id: "调用时机-12",
    content: "调用时机"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "profile",
    content: "`profile`"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "setclientrole-12",
    content: "setClientRole [1/2]"
  }, {
    id: "调用时机-13",
    content: "调用时机"
  }, {
    id: "相关回调-11",
    content: "相关回调"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "role",
    content: "`role`"
  }, {
    id: "返回值-19",
    content: "返回值"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "setclientrole-22",
    content: "setClientRole [2/2]"
  }, {
    id: "调用时机-14",
    content: "调用时机"
  }, {
    id: "相关回调-12",
    content: "相关回调"
  }, {
    id: "参数-19",
    content: "参数"
  }, {
    id: "role-1",
    content: "`role`"
  }, {
    id: "options-6",
    content: "`options`"
  }, {
    id: "返回值-20",
    content: "返回值"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "updatechannelmediaoptions",
    content: "updateChannelMediaOptions"
  }, {
    id: "参数-20",
    content: "参数"
  }, {
    id: "options-7",
    content: "`options`"
  }, {
    id: "返回值-21",
    content: "返回值"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }, {
    id: "updatechannelmediaoptionsex",
    content: "updateChannelMediaOptionsEx"
  }, {
    id: "适用场景-6",
    content: "适用场景"
  }, {
    id: "参数-21",
    content: "参数"
  }, {
    id: "options-8",
    content: "`options`"
  }, {
    id: "connection-5",
    content: "`connection`"
  }, {
    id: "返回值-22",
    content: "返回值"
  }, {
    id: "所属接口类-22",
    content: "所属接口类"
  }, {
    id: "updatepreloadchanneltoken",
    content: "updatePreloadChannelToken"
  }, {
    id: "适用场景-7",
    content: "适用场景"
  }, {
    id: "参数-22",
    content: "参数"
  }, {
    id: "token-9",
    content: "`token`"
  }, {
    id: "返回值-23",
    content: "返回值"
  }, {
    id: "所属接口类-23",
    content: "所属接口类"
  }, {
    id: "onclientrolechanged",
    content: "onClientRoleChanged"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-23",
    content: "参数"
  }, {
    id: "oldrole",
    content: "`oldRole`"
  }, {
    id: "newrole",
    content: "`newRole`"
  }, {
    id: "newroleoptions",
    content: "`newRoleOptions`"
  }, {
    id: "所属接口类-24",
    content: "所属接口类"
  }, {
    id: "onclientrolechangefailed",
    content: "onClientRoleChangeFailed"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-24",
    content: "参数"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "currentrole",
    content: "`currentRole`"
  }, {
    id: "所属接口类-25",
    content: "所属接口类"
  }, {
    id: "onerror",
    content: "onError"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-25",
    content: "参数"
  }, {
    id: "err",
    content: "`err`"
  }, {
    id: "所属接口类-26",
    content: "所属接口类"
  }, {
    id: "onjoinchannelsuccess",
    content: "onJoinChannelSuccess"
  }, {
    id: "触发时机-3",
    content: "触发时机"
  }, {
    id: "参数-26",
    content: "参数"
  }, {
    id: "channel",
    content: "`channel`"
  }, {
    id: "uid-4",
    content: "`uid`"
  }, {
    id: "elapsed",
    content: "`elapsed`"
  }, {
    id: "所属接口类-27",
    content: "所属接口类"
  }, {
    id: "onleavechannel",
    content: "onLeaveChannel"
  }, {
    id: "触发时机-4",
    content: "触发时机"
  }, {
    id: "参数-27",
    content: "参数"
  }, {
    id: "stats",
    content: "`stats`"
  }, {
    id: "所属接口类-28",
    content: "所属接口类"
  }, {
    id: "onlocaluserregistered",
    content: "onLocalUserRegistered"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "触发时机-5",
    content: "触发时机"
  }, {
    id: "参数-28",
    content: "参数"
  }, {
    id: "uid-5",
    content: "`uid`"
  }, {
    id: "useraccount-7",
    content: "`userAccount`"
  }, {
    id: "所属接口类-29",
    content: "所属接口类"
  }, {
    id: "onrejoinchannelsuccess",
    content: "onRejoinChannelSuccess"
  }, {
    id: "触发时机-6",
    content: "触发时机"
  }, {
    id: "参数-29",
    content: "参数"
  }, {
    id: "channel-1",
    content: "`channel`"
  }, {
    id: "uid-6",
    content: "`uid`"
  }, {
    id: "elapsed-1",
    content: "`elapsed`"
  }, {
    id: "所属接口类-30",
    content: "所属接口类"
  }, {
    id: "onrenewtokenresult",
    content: "onRenewTokenResult"
  }, {
    id: "自从-3",
    content: "`自从`"
  }, {
    id: "触发时机-7",
    content: "触发时机"
  }, {
    id: "参数-30",
    content: "参数"
  }, {
    id: "token-10",
    content: "`token`"
  }, {
    id: "code",
    content: "`code`"
  }, {
    id: "所属接口类-31",
    content: "所属接口类"
  }, {
    id: "onrequesttoken",
    content: "onRequestToken"
  }, {
    id: "触发时机-8",
    content: "触发时机"
  }, {
    id: "所属接口类-32",
    content: "所属接口类"
  }, {
    id: "onrtcstats",
    content: "onRtcStats"
  }, {
    id: "触发时机-9",
    content: "触发时机"
  }, {
    id: "参数-31",
    content: "参数"
  }, {
    id: "stats-1",
    content: "`stats`"
  }, {
    id: "所属接口类-33",
    content: "所属接口类"
  }, {
    id: "ontokenprivilegewillexpire",
    content: "onTokenPrivilegeWillExpire"
  }, {
    id: "触发时机-10",
    content: "触发时机"
  }, {
    id: "参数-32",
    content: "参数"
  }, {
    id: "token-11",
    content: "`token`"
  }, {
    id: "所属接口类-34",
    content: "所属接口类"
  }, {
    id: "onuserinfoupdated",
    content: "onUserInfoUpdated"
  }, {
    id: "自从-4",
    content: "`自从`"
  }, {
    id: "触发时机-11",
    content: "触发时机"
  }, {
    id: "参数-33",
    content: "参数"
  }, {
    id: "uid-7",
    content: "`uid`"
  }, {
    id: "userinfo-4",
    content: "`userInfo`"
  }, {
    id: "所属接口类-35",
    content: "所属接口类"
  }, {
    id: "onuserjoined",
    content: "onUserJoined"
  }, {
    id: "触发时机-12",
    content: "触发时机"
  }, {
    id: "参数-34",
    content: "参数"
  }, {
    id: "uid-8",
    content: "`uid`"
  }, {
    id: "elapsed-2",
    content: "`elapsed`"
  }, {
    id: "所属接口类-36",
    content: "所属接口类"
  }, {
    id: "onuseroffline",
    content: "onUserOffline"
  }, {
    id: "触发时机-13",
    content: "触发时机"
  }, {
    id: "参数-35",
    content: "参数"
  }, {
    id: "uid-9",
    content: "`uid`"
  }, {
    id: "reason-1",
    content: "`reason`"
  }, {
    id: "所属接口类-37",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#getuserinfobyuid",
  title: _jsx(_Fragment, {
    children: "getUserInfoByUid"
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
  url: "#uid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#userinfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userInfo"
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
  url: "#getuserinfobyuidex",
  title: _jsx(_Fragment, {
    children: "getUserInfoByUidEx"
  })
}, {
  depth: 3,
  url: "#适用场景",
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
  url: "#uid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#userinfo-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userInfo"
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
  url: "#getuserinfobyuseraccount",
  title: _jsx(_Fragment, {
    children: "getUserInfoByUserAccount"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#useraccount",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userAccount"
    })
  })
}, {
  depth: 4,
  url: "#userinfo-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userInfo"
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
  url: "#getuserinfobyuseraccountex",
  title: _jsx(_Fragment, {
    children: "getUserInfoByUserAccountEx"
  })
}, {
  depth: 3,
  url: "#适用场景-1",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#useraccount-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userAccount"
    })
  })
}, {
  depth: 4,
  url: "#userinfo-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userInfo"
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
  url: "#joinchannel-12",
  title: _jsx(_Fragment, {
    children: "joinChannel [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
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
  url: "#optionalinfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "optionalInfo"
    })
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
  url: "#joinchannel-22",
  title: _jsx(_Fragment, {
    children: "joinChannel [2/2]"
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
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
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
  url: "#uid-3",
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
  url: "#joinchannelex",
  title: _jsx(_Fragment, {
    children: "joinChannelEx"
  })
}, {
  depth: 3,
  url: "#适用场景-2",
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
  url: "#相关回调-2",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
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
  depth: 4,
  url: "#options-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
    })
  })
}, {
  depth: 4,
  url: "#eventhandler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "eventHandler"
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
  url: "#joinchannelwithuseraccount-12",
  title: _jsx(_Fragment, {
    children: "joinChannelWithUserAccount [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
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
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
  })
}, {
  depth: 4,
  url: "#channelname",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelName"
    })
  })
}, {
  depth: 4,
  url: "#useraccount-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userAccount"
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
  url: "#joinchannelwithuseraccount-22",
  title: _jsx(_Fragment, {
    children: "joinChannelWithUserAccount [2/2]"
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
  url: "#调用时机-5",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-4",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
  })
}, {
  depth: 4,
  url: "#channelname-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelName"
    })
  })
}, {
  depth: 4,
  url: "#useraccount-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userAccount"
    })
  })
}, {
  depth: 4,
  url: "#options-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#joinchannelwithuseraccountex",
  title: _jsx(_Fragment, {
    children: "joinChannelWithUserAccountEx"
  })
}, {
  depth: 3,
  url: "#适用场景-3",
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
  url: "#相关回调-5",
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
  url: "#token-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
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
  url: "#useraccount-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userAccount"
    })
  })
}, {
  depth: 4,
  url: "#options-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
    })
  })
}, {
  depth: 4,
  url: "#eventhandler-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "eventHandler"
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
  url: "#leavechannel-12",
  title: _jsx(_Fragment, {
    children: "leaveChannel [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-7",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-6",
  title: _jsx(_Fragment, {
    children: "相关回调"
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
  url: "#leavechannel-22",
  title: _jsx(_Fragment, {
    children: "leaveChannel [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-8",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-7",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#options-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#leavechannelex-12",
  title: _jsx(_Fragment, {
    children: "leaveChannelEx [1/2]"
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
  url: "#相关回调-8",
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
  url: "#connection-3",
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
  url: "#leavechannelex-22",
  title: _jsx(_Fragment, {
    children: "leaveChannelEx [2/2]"
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
  url: "#适用场景-5",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-10",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-9",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-12",
  title: _jsx(_Fragment, {
    children: "参数"
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
  depth: 4,
  url: "#options-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#preloadchannel",
  title: _jsx(_Fragment, {
    children: "preloadChannel"
  })
}, {
  depth: 3,
  url: "#参数-13",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
  })
}, {
  depth: 4,
  url: "#channelname-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelName"
    })
  })
}, {
  depth: 4,
  url: "#optionaluid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "optionalUid"
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
  url: "#preloadchannelwithuseraccount",
  title: _jsx(_Fragment, {
    children: "preloadChannelWithUserAccount"
  })
}, {
  depth: 3,
  url: "#调用时机-11",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-14",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
  })
}, {
  depth: 4,
  url: "#channelname-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelName"
    })
  })
}, {
  depth: 4,
  url: "#useraccount-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userAccount"
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
  url: "#registerlocaluseraccount",
  title: _jsx(_Fragment, {
    children: "registerLocalUserAccount"
  })
}, {
  depth: 3,
  url: "#相关回调-10",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-15",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#appid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "appId"
    })
  })
}, {
  depth: 4,
  url: "#useraccount-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userAccount"
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
  url: "#renewtoken",
  title: _jsx(_Fragment, {
    children: "renewToken"
  })
}, {
  depth: 3,
  url: "#参数-16",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
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
  url: "#setchannelprofile",
  title: _jsx(_Fragment, {
    children: "setChannelProfile"
  })
}, {
  depth: 3,
  url: "#调用时机-12",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-17",
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
  url: "#setclientrole-12",
  title: _jsx(_Fragment, {
    children: "setClientRole [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-13",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-11",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-18",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#role",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "role"
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
  url: "#setclientrole-22",
  title: _jsx(_Fragment, {
    children: "setClientRole [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-14",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-12",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-19",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#role-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "role"
    })
  })
}, {
  depth: 4,
  url: "#options-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#updatechannelmediaoptions",
  title: _jsx(_Fragment, {
    children: "updateChannelMediaOptions"
  })
}, {
  depth: 3,
  url: "#参数-20",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#options-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#updatechannelmediaoptionsex",
  title: _jsx(_Fragment, {
    children: "updateChannelMediaOptionsEx"
  })
}, {
  depth: 3,
  url: "#适用场景-6",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-21",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#options-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#updatepreloadchanneltoken",
  title: _jsx(_Fragment, {
    children: "updatePreloadChannelToken"
  })
}, {
  depth: 3,
  url: "#适用场景-7",
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
  url: "#token-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
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
  url: "#onclientrolechanged",
  title: _jsx(_Fragment, {
    children: "onClientRoleChanged"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-23",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#oldrole",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "oldRole"
    })
  })
}, {
  depth: 4,
  url: "#newrole",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "newRole"
    })
  })
}, {
  depth: 4,
  url: "#newroleoptions",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "newRoleOptions"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-24",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onclientrolechangefailed",
  title: _jsx(_Fragment, {
    children: "onClientRoleChangeFailed"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-24",
  title: _jsx(_Fragment, {
    children: "参数"
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
  depth: 4,
  url: "#currentrole",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "currentRole"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-25",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onerror",
  title: _jsx(_Fragment, {
    children: "onError"
  })
}, {
  depth: 3,
  url: "#触发时机-2",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-25",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#err",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "err"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-26",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onjoinchannelsuccess",
  title: _jsx(_Fragment, {
    children: "onJoinChannelSuccess"
  })
}, {
  depth: 3,
  url: "#触发时机-3",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-26",
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
  url: "#uid-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
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
  url: "#所属接口类-27",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onleavechannel",
  title: _jsx(_Fragment, {
    children: "onLeaveChannel"
  })
}, {
  depth: 3,
  url: "#触发时机-4",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-27",
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
  url: "#所属接口类-28",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlocaluserregistered",
  title: _jsx(_Fragment, {
    children: "onLocalUserRegistered"
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
  url: "#触发时机-5",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-28",
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
  url: "#useraccount-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userAccount"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-29",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onrejoinchannelsuccess",
  title: _jsx(_Fragment, {
    children: "onRejoinChannelSuccess"
  })
}, {
  depth: 3,
  url: "#触发时机-6",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-29",
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
  url: "#uid-6",
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
  url: "#所属接口类-30",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onrenewtokenresult",
  title: _jsx(_Fragment, {
    children: "onRenewTokenResult"
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
  url: "#触发时机-7",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-30",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
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
  url: "#所属接口类-31",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onrequesttoken",
  title: _jsx(_Fragment, {
    children: "onRequestToken"
  })
}, {
  depth: 3,
  url: "#触发时机-8",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#所属接口类-32",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onrtcstats",
  title: _jsx(_Fragment, {
    children: "onRtcStats"
  })
}, {
  depth: 3,
  url: "#触发时机-9",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-31",
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
  url: "#所属接口类-33",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#ontokenprivilegewillexpire",
  title: _jsx(_Fragment, {
    children: "onTokenPrivilegeWillExpire"
  })
}, {
  depth: 3,
  url: "#触发时机-10",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-32",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#token-11",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
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
  url: "#onuserinfoupdated",
  title: _jsx(_Fragment, {
    children: "onUserInfoUpdated"
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
  url: "#触发时机-11",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-33",
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
  url: "#userinfo-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "userInfo"
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
  url: "#onuserjoined",
  title: _jsx(_Fragment, {
    children: "onUserJoined"
  })
}, {
  depth: 3,
  url: "#触发时机-12",
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
  url: "#uid-8",
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
  url: "#所属接口类-36",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onuseroffline",
  title: _jsx(_Fragment, {
    children: "onUserOffline"
  })
}, {
  depth: 3,
  url: "#触发时机-13",
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
  url: "#uid-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
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
  depth: 3,
  url: "#所属接口类-37",
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
      id: "toc_channel"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuid"
    }), `
`, _jsx(_components.h2, {
      id: "getuserinfobyuid",
      children: "getUserInfoByUid"
    }), `
`, _jsx(_components.p, {
      children: "通过传入用户 ID 获取用户信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuid__prototype"
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
              children: " getUserInfoByUid"
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
              children: " uid, UserInfo userInfo);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuid__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated",
        children: "onUserInfoUpdated"
      }), " 回调。收到该回调后，你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_getuserinfobyuid",
        children: "getUserInfoByUid"
      }), " 方法并传入用户 ID，从 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), " 对象中获取指定用户的用户 User Account。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuid__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法在收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated",
        children: "onUserInfoUpdated"
      }), " 回调后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuid__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "uid"
      }), "，表示用户 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "userinfo",
      children: _jsx(_components.code, {
        children: "userInfo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["输入和输出参数，用于标识用户信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), " 对象。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuid__return_values"
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
      id: "api_irtcengineex_getuserinfobyuidex"
    }), `
`, _jsx(_components.h2, {
      id: "getuserinfobyuidex",
      children: "getUserInfoByUidEx"
    }), `
`, _jsx(_components.p, {
      children: "通过传入用户 ID 获取用户信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getuserinfobyuidex__prototype"
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
              children: " getUserInfoByUidEx"
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
              children: " uid, UserInfo userInfo, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getuserinfobyuidex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated",
        children: "onUserInfoUpdated"
      }), " 回调。收到该回调后，你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuidex",
        children: "getUserInfoByUidEx"
      }), " 并传入用户 ID，从 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), " 对象中获取指定用户的用户 User Account。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getuserinfobyuidex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getuserinfobyuidex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
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
      id: "userinfo-1",
      children: _jsx(_components.code, {
        children: "userInfo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于标识用户信息的对象。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), "。"]
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
      id: "api_irtcengineex_getuserinfobyuidex__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回 UserInfo 对象。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 null。"
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
      id: "api_irtcengine_getuserinfobyuseraccount"
    }), `
`, _jsx(_components.h2, {
      id: "getuserinfobyuseraccount",
      children: "getUserInfoByUserAccount"
    }), `
`, _jsx(_components.p, {
      children: "通过传入用户 User Account 获取用户信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuseraccount__prototype"
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
              children: " getUserInfoByUserAccount"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String userAccount, UserInfo userInfo);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuseraccount__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated",
        children: "onUserInfoUpdated"
      }), " 回调。收到该回调后，你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_getuserinfobyuseraccount",
        children: "getUserInfoByUserAccount"
      }), " 方法并传入用户 User Account，从 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), " 对象中获取指定用户的信息。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuseraccount__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "useraccount",
      children: _jsx(_components.code, {
        children: "userAccount"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 User Account。"
    }), `
`, _jsx(_components.h4, {
      id: "userinfo-2",
      children: _jsx(_components.code, {
        children: "userInfo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于标识用户信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), " 对象。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getuserinfobyuseraccount__return_values"
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
      id: "api_irtcengineex_getuserinfobyuseraccountex"
    }), `
`, _jsx(_components.h2, {
      id: "getuserinfobyuseraccountex",
      children: "getUserInfoByUserAccountEx"
    }), `
`, _jsx(_components.p, {
      children: "通过用户 User Account 获取用户信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getuserinfobyuseraccountex__prototype"
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
              children: " getUserInfoByUserAccountEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String userAccount, UserInfo userInfo, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getuserinfobyuseraccountex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["远端用户加入频道后，SDK 会获取该远端用户的用户 ID 和用户 User Account，并将其缓存在映射表中，同时在本地客户端触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated",
        children: "onUserInfoUpdated"
      }), " 回调。收到该回调后，你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_getuserinfobyuseraccountex",
        children: "getUserInfoByUserAccountEx"
      }), " 并传入用户 User Account，从 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), " 对象中获取指定用户的用户信息。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getuserinfobyuseraccountex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getuserinfobyuseraccountex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "useraccount-1",
      children: _jsx(_components.code, {
        children: "userAccount"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 User Account。"
    }), `
`, _jsx(_components.h4, {
      id: "userinfo-3",
      children: _jsx(_components.code, {
        children: "userInfo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["输入和输出参数，用于标识用户信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), "。"]
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
      id: "api_irtcengineex_getuserinfobyuseraccountex__return_values"
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
      id: "api_irtcengine_joinchannel1"
    }), `
`, _jsx(_components.h2, {
      id: "joinchannel-12",
      children: "joinChannel [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "加入一个频道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel1__prototype"
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
              children: " joinChannel"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token, String channelId, String optionalInfo, "
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
              children: " uid);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel1__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["默认情况下，用户会订阅频道中其他所有用户的音视频流，从而产生使用量和计费。如需停止订阅指定流或所有远端流，请调用 ", _jsx(_components.code, {
        children: "muteRemoteAudio/VideoStream"
      }), " 或 ", _jsx(_components.code, {
        children: "muteAllRemoteAudio/VideoStreams"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法仅支持用户同时加入一个频道。"
      }), `
`, _jsx(_components.li, {
        children: "不同 App ID 的用户无法互通。"
      }), `
`, _jsx(_components.li, {
        children: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create [2/2] 方法时传入的 App ID 相同，否则可能会导致加入频道失败。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel1__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 方法后调用本方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel1__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法成功后会触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端： onJoinChannelSuccess 和 onConnectionStateChanged 回调。"
      }), `
`, _jsx(_components.li, {
        children: "远端客户端：如果是 COMMUNICATION 频道场景中有用户加入频道，或 LIVE_BROADCASTING 频道场景中有主播加入频道，则触发 onUserJoined 回调。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["当由于网络状况不佳导致本地客户端与声网服务器的连接中断时，SDK 会尝试重连服务器。当本地客户端成功重回频道时，SDK 会触发本地客户端的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess",
        children: "onRejoinChannelSuccess"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "在你的服务器上生成的用于鉴权的 Token。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
      }), `
`, _jsx(_components.li, {
        children: "如果你仅启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，24 小时后会自动退出频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样每次加入频道时无需重新申请 Token。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channelid",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "所有小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "所有大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","'
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "optionalinfo",
      children: _jsx(_components.code, {
        children: "optionalInfo"
      })
    }), `
`, _jsx(_components.p, {
      children: "（可选）预留参数。"
    }), `
`, _jsx(_components.h4, {
      id: "uid-2",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户 ID。用于标识频道中的用户以进行实时音视频互动。你需要自行设置和管理用户 ID，并确保同一频道中每个用户 ID 唯一。该参数为 32 位无符号整数，取值范围为 -2^31 到 2^31-1。如果未指定用户 ID（或设置为 0），SDK 会自动分配一个随机用户 ID，并通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess",
        children: "onJoinChannelSuccess"
      }), " 回调返回。你的应用需记录并维护该返回的用户 ID，SDK 不会保存。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel1__return_values"
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
            children: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中的成员值无效。请传入有效参数后重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-3： RtcEngine 对象初始化失败。请重新初始化 RtcEngine 对象。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。"
          }), `
`, _jsx(_components.li, {
            children: "-8： RtcEngine 对象内部状态错误。常见原因是在调用 startEchoTest 开始通话回声测试后，未调用 stopEchoTest 停止测试就调用该方法加入频道。请先调用 stopEchoTest 再调用该方法。"
          }), `
`, _jsx(_components.li, {
            children: "-17：加入频道请求被拒绝。常见原因是用户已在频道中。声网建议使用 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION_STATE_DISCONNECTED （1）状态时才调用该方法加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-102：频道名无效。请在 channelId 中传入有效的频道名重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-121：用户 ID 无效。请在 uid 中传入有效的用户 ID 重新加入频道。"
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
      id: "api_irtcengine_joinchannel2"
    }), `
`, _jsx(_components.h2, {
      id: "joinchannel-22",
      children: "joinChannel [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "加入频道并设置媒体选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel2__prototype"
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
              children: " joinChannel"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token, String channelId, "
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
              children: " uid, ChannelMediaOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法新增 ", _jsx(_components.code, {
        children: "options"
      }), " 参数，用于设置媒体选项，例如是否在频道内发布音视频流，或在加入频道时是否自动订阅所有远端用户的音视频流。默认情况下，用户会订阅频道中所有其他用户的音视频流，从而产生使用量和计费。如需停止订阅其他流，请设置 ", _jsx(_components.code, {
        children: "options"
      }), " 参数或调用 ", _jsx(_components.code, {
        children: "muteRemoteAudio/VideoStream"
      }), " 或 ", _jsx(_components.code, {
        children: "muteAllRemoteAudio/VideoStreams"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法仅支持用户同时加入一个频道。"
      }), `
`, _jsx(_components.li, {
        children: "不同 App ID 的用户无法互通。"
      }), `
`, _jsx(_components.li, {
        children: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create [2/2] 方法时传入的 App ID 一致，否则可能导致加入频道失败。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 方法后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法成功后会触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端： onJoinChannelSuccess 和 onConnectionStateChanged 回调。"
      }), `
`, _jsx(_components.li, {
        children: "远端客户端：如果用户在 COMMUNICATION 频道场景中加入频道，或主播在 LIVE_BROADCASTING 频道场景中加入频道，会触发 onUserJoined 回调。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["当由于网络状况不佳导致本地客户端与声网服务器的连接中断时，SDK 会尝试重新连接服务器。当本地客户端成功重新加入频道时，SDK 会在本地客户端触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess",
        children: "onRejoinChannelSuccess"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-1",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "在你的服务器上生成的用于鉴权的 Token。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
      }), `
`, _jsx(_components.li, {
        children: "如果只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，24 小时后会自动退出频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样每次加入频道时无需重新申请 Token。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channelid-1",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "所有小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "所有大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","。'
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "uid-3",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户 ID。用于标识频道中的用户。你需要自行设置和管理用户 ID，并确保同一频道中每个用户 ID 唯一。该参数为 32 位无符号整数，取值范围为 -2³¹ 到 2³¹-1。如果未指定用户 ID（或设置为 0），SDK 会自动分配一个随机用户 ID，并在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess",
        children: "onJoinChannelSuccess"
      }), " 回调中返回。你的应用必须记录并维护该返回的用户 ID，SDK 不会保存。"]
    }), `
`, _jsx(_components.h4, {
      id: "options",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["频道媒体选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
        children: "ChannelMediaOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannel2__return_values"
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
            children: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 options 中的成员值无效。请传入有效参数并重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-3： RtcEngine 对象初始化失败。请重新初始化 RtcEngine 对象。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。"
          }), `
`, _jsx(_components.li, {
            children: "-8： RtcEngine 对象内部状态错误。常见原因是在调用 startEchoTest 开始通话回声测试后，未调用 stopEchoTest 停止测试就调用该方法加入频道。请先调用 stopEchoTest 再调用该方法。"
          }), `
`, _jsx(_components.li, {
            children: "-17：加入频道请求被拒绝。常见原因是用户已在频道中。声网建议使用 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION_STATE_DISCONNECTED （1）状态时才调用该方法加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-102：频道名无效。请在 channelId 中传入有效的频道名重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-121：用户 ID 无效。请在 uid 中传入有效的用户 ID 重新加入频道。"
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
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelex"
    }), `
`, _jsx(_components.h2, {
      id: "joinchannelex",
      children: "joinChannelEx"
    }), `
`, _jsx(_components.p, {
      children: "加入一个频道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelex__prototype"
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
              children: " joinChannelEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token, RtcConnection connection, ChannelMediaOptions options, IRtcEngineEventHandler eventHandler);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以多次调用此方法加入多个频道。 在多摄像头采集场景中，调用此方法后需要调用 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 方法，并将 ", _jsx(_components.code, {
        children: "sourceType"
      }), " 设置为 ", _jsx(_components.code, {
        children: "VIDEO_SOURCE_CAMERA_SECONDARY"
      }), "，以确保第二路摄像头正常采集。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你已经在一个频道中，不能使用相同的用户 ID 重新加入该频道。 在加入频道前，确保用于生成 Token 的 App ID 与调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
            children: "create [2/2]"
          }), " 方法时传入的 App ID 相同，否则可能会导致加入频道失败。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 方法之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-2",
      children: "相关回调"
    }), `
`, _jsx(_components.p, {
      children: "成功调用该方法会触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端： onJoinChannelSuccess 和 onConnectionStateChanged 回调。"
      }), `
`, _jsx(_components.li, {
        children: "远端客户端：如果是 COMMUNICATION 频道场景中有用户加入频道，或 LIVE_BROADCASTING 频道场景中有主播加入频道，则触发 onUserJoined 回调。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["当由于网络状况不佳导致本地客户端与声网服务器的连接中断时，SDK 会尝试重连服务器。当本地客户端成功重新加入频道时，SDK 会触发本地客户端的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrejoinchannelsuccess",
        children: "onRejoinChannelSuccess"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-2",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于鉴权的 Token。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
      }), `
`, _jsx(_components.li, {
        children: "如果你只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，你将在 24 小时后自动退出频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要同时加入不同频道或在频道之间切换，声网建议使用通配符 Token，这样你每次加入频道时无需重新申请 Token。"
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
`, _jsx(_components.h4, {
      id: "options-1",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["频道媒体选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
        children: "ChannelMediaOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "eventhandler",
      children: _jsx(_components.code, {
        children: "eventHandler"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["回调类。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
        children: "IRtcEngineEventHandler"
      }), "。你可以通过该参数传入的 ", _jsx(_components.code, {
        children: "eventHandler"
      }), " 对象获取多个频道的回调事件。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelex__return_values"
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
            children: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中的成员值无效。你需要传入有效参数并重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-3：初始化 RtcEngine 对象失败。你需要重新初始化 RtcEngine 对象。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "-8： RtcEngine 对象的内部状态错误。典型原因是在调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用此方法加入频道。你需要先调用 stopEchoTest 再调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "-17：加入频道请求被拒绝。典型原因是用户已在频道中。声网建议你通过 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION_STATE_DISCONNECTED （1）状态时才调用此方法加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-102：频道名无效。你需要在 channelId 中传入有效的频道名以重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-121：用户 ID 无效。你需要在 uid 中传入有效的用户 ID 以重新加入频道。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount1"
    }), `
`, _jsx(_components.h2, {
      id: "joinchannelwithuseraccount-12",
      children: "joinChannelWithUserAccount [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "使用用户 User Account 和 Token 加入频道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount1__prototype"
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
              children: " joinChannelWithUserAccount"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token, String channelName, String userAccount);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount1__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount",
        children: "registerLocalUserAccount"
      }), " 注册用户 User Account 后再调用此方法加入频道，可以缩短进入频道所需的时间。如果你尚未调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount",
        children: "registerLocalUserAccount"
      }), " 注册用户 User Account，当你调用此方法加入频道时，SDK 会自动为你创建一个用户 User Account。 一旦用户加入频道，默认会订阅频道中所有其他用户的音视频流，从而产生用量和计费。如需停止订阅指定流或所有远端流，请调用 ", _jsx(_components.code, {
        children: "muteRemoteAudio/VideoStream"
      }), " 或 ", _jsx(_components.code, {
        children: "muteAllRemoteAudio/VideoStreams"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法仅支持用户同时加入一个频道。"
      }), `
`, _jsx(_components.li, {
        children: "不同 App ID 的用户无法互通。"
      }), `
`, _jsx(_components.li, {
        children: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create [2/2] 方法时传入的 App ID 相同，否则可能会导致使用该 Token 加入频道失败。"
      }), `
`, _jsx(_components.li, {
        children: "为确保通信顺畅，请使用相同的参数类型标识用户。例如，如果某用户使用 uid 加入频道，则其他用户也应使用 uid；如果使用用户 User Account 加入频道，则其他用户也应使用用户 User Account。如果用户使用声网 Web SDK 加入频道，请确保用户 ID 设置为相同的参数类型。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount1__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 方法后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount1__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-3",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["本地客户端： ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered",
        children: "onLocalUserRegistered"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess",
        children: "onJoinChannelSuccess"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
        children: "onConnectionStateChanged"
      }), " 回调。 远端客户端：如果用户在 ", _jsx(_components.code, {
        children: "COMMUNICATION"
      }), " 频道场景中加入频道，或主播在 ", _jsx(_components.code, {
        children: "LIVE_BROADCASTING"
      }), " 频道场景中加入频道，则会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined",
        children: "onUserJoined"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated",
        children: "onUserInfoUpdated"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-3",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "在你的服务器上生成的用于鉴权的 Token。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
      }), `
`, _jsx(_components.li, {
        children: "如果你只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，你将在 24 小时后自动退出频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要同时加入不同频道或在频道间切换，声网建议使用通配符 Token，这样你每次加入频道时无需重新申请 Token。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channelname",
      children: _jsx(_components.code, {
        children: "channelName"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "所有小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "所有大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","'
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "useraccount-2",
      children: _jsx(_components.code, {
        children: "userAccount"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 User Account。用于标识频道中的用户以进行实时音视频互动。你需要自行设置和管理用户 User Account，并确保同一频道中的每个用户 User Account 唯一。该参数的最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "26 个小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "26 个大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: "空格"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","'
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount1__return_values"
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
            children: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中某成员的值无效。你需要传入有效参数并重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-3： RtcEngine 对象初始化失败。你需要重新初始化 RtcEngine 对象。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "-8： RtcEngine 对象内部状态错误。典型原因是调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用此方法加入频道。你需要先调用 stopEchoTest 再调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "-17：加入频道请求被拒绝。典型原因是用户已在频道中。声网建议你使用 onConnectionStateChanged 回调判断用户是否在频道中。只有在收到 CONNECTION_STATE_DISCONNECTED （1）状态时才调用此方法加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-102：频道名无效。你需要在 channelId 中传入有效的频道名重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-121：用户 ID 无效。你需要在 uid 中传入有效的用户 ID 重新加入频道。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount2"
    }), `
`, _jsx(_components.h2, {
      id: "joinchannelwithuseraccount-22",
      children: "joinChannelWithUserAccount [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "使用用户 User Account 和 Token 加入频道，并设置媒体选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount2__prototype"
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
              children: " joinChannelWithUserAccount"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token, String channelName, String userAccount, ChannelMediaOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.3.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法新增了 ", _jsx(_components.code, {
        children: "options"
      }), " 参数，用于设置媒体选项，例如是否在频道内发布音视频流。默认情况下，用户会订阅频道内所有其他用户的音视频流，从而产生使用量和计费。如需停止订阅其他流，请设置 ", _jsx(_components.code, {
        children: "options"
      }), " 参数或调用 ", _jsx(_components.code, {
        children: "muteRemoteAudio/VideoStream"
      }), " 或 ", _jsx(_components.code, {
        children: "muteAllRemoteAudio/VideoStreams"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法仅支持用户同时加入一个频道。"
      }), `
`, _jsx(_components.li, {
        children: "不同 App ID 的用户无法互通。"
      }), `
`, _jsx(_components.li, {
        children: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create [2/2] 方法时传入的 App ID 相同，否则可能会因 Token 不匹配而加入频道失败。"
      }), `
`, _jsx(_components.li, {
        children: "为确保通信顺畅，请使用相同的参数类型标识用户。例如，如果某用户使用用户 ID 加入频道，则其他用户也应使用用户 ID；用户 User Account 亦同理。如果用户使用声网 Web SDK 加入频道，请确保用户 ID 的类型一致。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 方法之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-4",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["本地客户端： ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered",
        children: "onLocalUserRegistered"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess",
        children: "onJoinChannelSuccess"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
        children: "onConnectionStateChanged"
      }), " 回调。 远端客户端：如果用户在 ", _jsx(_components.code, {
        children: "COMMUNICATION"
      }), " 频道场景中加入频道，或主播在 ", _jsx(_components.code, {
        children: "LIVE_BROADCASTING"
      }), " 频道场景中加入频道，则触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined",
        children: "onUserJoined"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated",
        children: "onUserInfoUpdated"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-4",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "在你的服务器上生成的用于鉴权的 Token。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），此参数为必填。"
      }), `
`, _jsx(_components.li, {
        children: "如果你仅启用了测试模式（使用 App ID 进行鉴权），此参数为可选。成功加入频道后，24 小时后会自动退出频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样你每次加入频道时无需重新申请 Token。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channelname-1",
      children: _jsx(_components.code, {
        children: "channelName"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。在相同 App ID 前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "所有小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "所有大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","'
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "useraccount-3",
      children: _jsx(_components.code, {
        children: "userAccount"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 User Account。你需要自行设置和管理用户 User Account，并确保同一频道内的每个用户 User Account 唯一。该参数最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "26 个小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "26 个大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: "空格"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","'
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-2",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["频道媒体选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
        children: "ChannelMediaOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_joinchannelwithuseraccount2__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-2：参数无效。例如，Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中某成员的值无效。请传入有效参数并重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-3：初始化 RtcEngine 对象失败。请重新初始化 RtcEngine 对象。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "-8： RtcEngine 对象内部状态错误。典型原因是调用 startEchoTest 开始通话回声测试后，未调用 stopEchoTest 停止测试就调用此方法加入频道。请先调用 stopEchoTest 再调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "-17：加入频道请求被拒绝。典型原因是用户已在频道中。声网建议使用 onConnectionStateChanged 回调判断用户是否在频道中。仅当收到 CONNECTION_STATE_DISCONNECTED （1）状态时再调用此方法加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-102：频道名无效。请在 channelId 中传入有效的频道名重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-121：用户 ID 无效。请在 uid 中传入有效的用户 ID 重新加入频道。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengineex_joinchannelwithuseraccountex"
    }), `
`, _jsx(_components.h2, {
      id: "joinchannelwithuseraccountex",
      children: "joinChannelWithUserAccountEx"
    }), `
`, _jsx(_components.p, {
      children: "使用用户 User Account 和 Token 加入频道，并设置媒体选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelwithuseraccountex__prototype"
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
              children: " joinChannelWithUserAccountEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token, String channelId, String userAccount, ChannelMediaOptions options, IRtcEngineEventHandler eventHandler);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelwithuseraccountex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用此方法之前，如果你尚未调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount",
        children: "registerLocalUserAccount"
      }), " 注册用户 User Account，SDK 会在你调用此方法加入频道时自动创建用户 User Account。提前调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount",
        children: "registerLocalUserAccount"
      }), " 可以缩短加入频道所需的时间。 一旦用户加入频道，默认会订阅频道中所有其他用户的音视频流，从而产生使用量和计费。如果你希望停止订阅其他用户的媒体流，可以设置 ", _jsx(_components.code, {
        children: "options"
      }), " 参数或调用 ", _jsx(_components.code, {
        children: "muteRemoteAudio/VideoStream"
      }), " 或 ", _jsx(_components.code, {
        children: "muteAllRemoteAudio/VideoStreams"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法仅支持用户同时加入一个频道。"
      }), `
`, _jsx(_components.li, {
        children: "不同 App ID 的用户无法互通。"
      }), `
`, _jsx(_components.li, {
        children: "加入频道前，请确保用于生成 Token 的 App ID 与调用 create [2/2] 方法时传入的 App ID 相同，否则可能导致加入频道失败。"
      }), `
`, _jsx(_components.li, {
        children: "为确保通信顺畅，请使用相同的参数类型标识用户。例如，如果某用户使用 uid 加入频道，则其他用户也应使用 uid；如果使用用户 User Account 加入频道，则其他用户也应使用用户 User Account。若使用声网 Web SDK 加入频道，请确保用户 ID 的参数类型一致。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelwithuseraccountex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelwithuseraccountex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelwithuseraccountex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-5",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["本地客户端： ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered",
        children: "onLocalUserRegistered"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess",
        children: "onJoinChannelSuccess"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
        children: "onConnectionStateChanged"
      }), " 回调。 远端客户端：如果用户在 ", _jsx(_components.code, {
        children: "COMMUNICATION"
      }), " 频道场景中加入频道，或主播在 ", _jsx(_components.code, {
        children: "LIVE_BROADCASTING"
      }), " 频道场景中加入频道，则触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined",
        children: "onUserJoined"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserinfoupdated",
        children: "onUserInfoUpdated"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelwithuseraccountex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-5",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "在你的服务器上生成的用于鉴权的 Token。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "（推荐）如果你的项目启用了安全模式（使用 App ID 和 Token 进行鉴权），该参数为必填。"
      }), `
`, _jsx(_components.li, {
        children: "如果你只启用了测试模式（使用 App ID 进行鉴权），该参数为可选。成功加入频道后，你将在 24 小时后自动退出频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果你需要同时加入多个频道或在频道间切换，声网建议使用通配符 Token，这样你无需每次加入频道时都申请新的 Token。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channelid-2",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道名。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "所有小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "所有大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","'
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "useraccount-4",
      children: _jsx(_components.code, {
        children: "userAccount"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 User Account。你需要自行设置和管理用户 User Account，并确保同一频道中的每个用户 User Account 唯一。该参数的最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "26 个小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "26 个大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: "空格"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","'
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-3",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["频道媒体选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
        children: "ChannelMediaOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "eventhandler-1",
      children: _jsx(_components.code, {
        children: "eventHandler"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
        children: "RtcEngineEx"
      }), " 的回调类。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
        children: "IRtcEngineEventHandler"
      }), "。你可以通过该参数传入的 ", _jsx(_components.code, {
        children: "eventHandler"
      }), " 对象获取多个频道的回调事件。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_joinchannelwithuseraccountex__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-2：参数无效。例如 Token 无效， uid 参数未设置为整数，或 ChannelMediaOptions 中某成员的值无效。请传入有效参数后重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-3： RtcEngine 对象初始化失败。请重新初始化 RtcEngine 对象。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。请先初始化后再调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "-8： RtcEngine 对象内部状态错误。典型原因是在调用 startEchoTest 开始通话回路测试后，未调用 stopEchoTest 停止测试就调用此方法。请先调用 stopEchoTest 再调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "-17：加入频道请求被拒绝。典型原因是用户已在频道中。建议通过 onConnectionStateChanged 回调确认用户是否已在频道中，除非收到 CONNECTION_STATE_DISCONNECTED （1）状态，否则不要调用此方法。"
          }), `
`, _jsx(_components.li, {
            children: "-102：频道名无效。请在 channelId 中传入有效的频道名后重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-121：用户 ID 无效。请在 uid 中传入有效的用户 ID 后重新加入频道。"
          }), `
`]
        }), `
`]
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel"
    }), `
`, _jsx(_components.h2, {
      id: "leavechannel-12",
      children: "leaveChannel [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "离开频道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel__prototype"
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
              children: " leaveChannel"
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
      id: "api_irtcengine_leavechannel__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法后，SDK 会终止音视频互动，释放与会话相关的所有资源。加入频道后，必须调用该方法结束通话，否则无法开始下一次通话。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果在调用该方法后立即调用 destroy [2/2]，SDK 不会触发 onLeaveChannel 回调。"
      }), `
`, _jsx(_components.li, {
        children: "此方法为异步调用。当该方法返回时，并不代表用户已完全离开频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果你调用了 joinChannelEx 加入了多个频道，调用该方法会离开你加入的所有频道。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-6",
      children: "相关回调"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法成功后会触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端实例：会触发 onLeaveChannel 回调。"
      }), `
`, _jsx(_components.li, {
        children: "远端客户端实例：远端主播离开频道后会触发 onUserOffline 回调。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel__return_values"
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
            children: "-7：SDK 未初始化。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_leavechannel2"
    }), `
`, _jsx(_components.h2, {
      id: "leavechannel-22",
      children: "leaveChannel [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置频道选项并离开频道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel2__prototype"
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
              children: " leaveChannel"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LeaveChannelOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，SDK 会终止音视频互动，离开当前频道，并释放与会话相关的所有资源。如果你调用了 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 加入了多个频道，调用该方法会离开你加入的所有频道。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果在调用该方法后立即调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
            children: "destroy [2/2]"
          }), "，SDK 不会触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onleavechannel",
            children: "onLeaveChannel"
          }), " 回调。该方法为异步调用。当该方法返回时，并不一定表示用户已离开频道。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-8",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-7",
      children: "相关回调"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法成功后会触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端实例：触发 onLeaveChannel 回调。"
      }), `
`, _jsx(_components.li, {
        children: "远端客户端实例：远端主播离开频道后触发 onUserOffline 回调。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "options-4",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["离开频道的选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-leavechanneloptions",
        children: "LeaveChannelOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_leavechannel2__return_values"
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
      id: "api_irtcengineex_leavechannelex"
    }), `
`, _jsx(_components.h2, {
      id: "leavechannelex-12",
      children: "leaveChannelEx [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "离开频道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex__prototype"
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
              children: " leaveChannelEx"
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
      id: "api_irtcengineex_leavechannelex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，SDK 会终止音视频互动，离开当前频道，并释放与会话相关的所有资源。调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 加入频道后，必须调用此方法或 ", _jsx(_components.code, {
        children: "leaveChannelEx"
      }), " 结束通话，否则无法开始下一次通话。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果在调用该方法后立即调用 destroy [2/2]，SDK 不会触发 onLeaveChannel 回调。"
      }), `
`, _jsx(_components.li, {
        children: "该方法为异步调用，方法返回时并不代表用户已离开频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果调用 leaveChannel [1/2] 或 leaveChannel [2/2]，你将离开通过 joinChannel [1/2]、 joinChannel [2/2] 或 joinChannelEx 加入的所有频道。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-4",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-9",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-8",
      children: "相关回调"
    }), `
`, _jsx(_components.p, {
      children: "调用成功后会触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端实例：触发 onLeaveChannel 回调。"
      }), `
`, _jsx(_components.li, {
        children: "远端客户端实例：远端主播离开频道后触发 onUserOffline 回调。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "connection-3",
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
      id: "api_irtcengineex_leavechannelex__return_values"
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
      id: "api_irtcengineex_leavechannelex2"
    }), `
`, _jsx(_components.h2, {
      id: "leavechannelex-22",
      children: "leaveChannelEx [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置频道参数并离开频道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex2__prototype"
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
              children: " leaveChannelEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection, LeaveChannelOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-1",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.1.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，SDK 会终止音视频互动，并释放与会话相关的所有资源。调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 加入频道后，必须调用此方法或 ", _jsx(_components.code, {
        children: "leaveChannelEx(RtcConnection connection)"
      }), " 结束通话，否则无法开始下一次通话。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果在调用该方法后立即调用 destroy()，SDK 不会触发 onLeaveChannel 回调。"
      }), `
`, _jsx(_components.li, {
        children: "此方法为异步调用。当该方法返回时，并不代表你已离开频道。"
      }), `
`, _jsx(_components.li, {
        children: "如果调用 leaveChannel() 或 leaveChannel(LeaveChannelOptions options)，将会离开通过 joinChannel [1/2]、 joinChannel [2/2] 或 joinChannelEx 加入的所有频道。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-5",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-10",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-9",
      children: "相关回调"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法成功后会触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端实例：会触发 onLeaveChannel 回调。"
      }), `
`, _jsx(_components.li, {
        children: "远端客户端实例：远端主播离开频道后会触发 onUserOffline 回调。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "connection-4",
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
`, _jsx(_components.h4, {
      id: "options-5",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsx(_components.p, {
      children: "离开频道的选项。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该参数仅支持 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-leavechanneloptions",
            children: "LeaveChannelOptions"
          }), " 中的 ", _jsx(_components.code, {
            children: "stopMicrophoneRecording"
          }), " 成员，设置其他成员无效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_leavechannelex2__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannel"
    }), `
`, _jsx(_components.h2, {
      id: "preloadchannel",
      children: "preloadChannel"
    }), `
`, _jsx(_components.p, {
      children: "预加载指定频道以缩短观众加入频道的时间。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannel__prototype"
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
              children: " preloadChannel"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token, String channelName, "
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
              children: " optionalUid);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannel__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当观众需要频繁切换不同频道时，调用该方法可以缩短加入频道的时间，从而减少观众听到和看到主播的延迟时间。如果你加入了一个已预加载的频道，离开后想重新加入该频道，除非用于预加载频道的 Token 过期，否则无需再次调用该方法。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "调用该方法时，请确保将用户角色设置为观众，且未将音频场景设置为 AUDIO_SCENARIO_CHORUS，否则该方法不生效。"
      }), `
`, _jsx(_components.li, {
        children: "你还需要确保用于预加载的频道名、用户 ID 和 Token 与加入频道时传入的值一致，否则该方法不生效。"
      }), `
`, _jsx(_components.li, {
        children: "一个 RtcEngine 实例最多支持预加载 20 个频道，超出限制时，仅最近的 20 个预加载频道生效。"
      }), `
`, _jsx(_components.li, {
        children: "预加载频道失败并不意味着无法加入频道，也不会增加加入频道所需的时间。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannel__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-6",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "在你的服务器上生成的用于鉴权的 Token。当用于预加载频道的 Token 过期时，你可以根据预加载的频道数量更新 Token："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "预加载一个频道时，调用该方法传入新的 Token。"
      }), `
`, _jsxs(_components.li, {
        children: ["预加载多个频道时：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "如果你为所有预加载频道使用通配符 Token，调用 updatePreloadChannelToken 更新 Token。注意：生成通配符 Token 时，确保用户 ID 不为 0。"
          }), `
`, _jsx(_components.li, {
            children: "如果你为不同频道使用不同的 Token，调用该方法传入你的用户 ID、频道名和新的 Token。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channelname-2",
      children: _jsx(_components.code, {
        children: "channelName"
      })
    }), `
`, _jsx(_components.p, {
      children: "你想要预加载的频道名。该参数表示用户进行实时音视频互动的频道。在相同 App ID 的前提下，填写相同频道名的用户会进入同一个频道进行音视频互动。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "所有小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "所有大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","。'
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "optionaluid",
      children: _jsx(_components.code, {
        children: "optionalUid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户 ID。用于标识频道中的用户以进行实时音视频互动。你需要自行设置和管理用户 ID，并确保同一频道中的每个用户 ID 唯一。该参数为 32 位无符号整数，取值范围为 -2^31 到 2^31-1。如果未指定用户 ID（或设置为 0），SDK 会分配一个随机用户 ID，并在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onjoinchannelsuccess",
        children: "onJoinChannelSuccess"
      }), " 回调中返回。你的应用必须记录并维护返回的用户 ID，SDK 不会保存。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannel__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。"
          }), `
`, _jsx(_components.li, {
            children: "-102：频道名无效。请传入有效的频道名并重新加入频道。"
          }), `
`]
        }), `
`]
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannelwithuseraccount"
    }), `
`, _jsx(_components.h2, {
      id: "preloadchannelwithuseraccount",
      children: "preloadChannelWithUserAccount"
    }), `
`, _jsx(_components.p, {
      children: "预加载指定频道，缩短观众加入频道的时间。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannelwithuseraccount__prototype"
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
              children: " preloadChannelWithUserAccount"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token, String channelName, String userAccount);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannelwithuseraccount__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当观众需要频繁切换不同频道时，调用该方法可以缩短加入频道的时间，从而减少观众听到和看到主播的延迟。如果你加入了一个已预加载的频道，离开后想重新加入同一个频道，除非用于预加载频道的 Token 过期，否则无需再次调用该方法。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "调用该方法时，请确保将用户角色设置为观众，且未将音频场景设置为 AUDIO_SCENARIO_CHORUS，否则该方法不生效。"
      }), `
`, _jsx(_components.li, {
        children: "你需要确保用于预加载的用户 User Account、频道名和 Token 与加入频道时传入的值一致，否则该方法不生效。"
      }), `
`, _jsx(_components.li, {
        children: "一个 RtcEngine 实例最多支持预加载 20 个频道。超过该限制时，仅最近的 20 个预加载频道生效。"
      }), `
`, _jsx(_components.li, {
        children: "预加载频道失败不会影响加入频道的能力，也不会增加加入频道所需的时间。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannelwithuseraccount__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-11",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "为提升预加载频道的用户体验，声网建议在确认频道名和用户信息后尽早调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannelwithuseraccount__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-7",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "你在服务器上生成的用于鉴权的 Token。当用于预加载频道的 Token 过期时，你可以根据预加载的频道数量更新 Token："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "预加载一个频道时，调用该方法传入新的 Token。"
      }), `
`, _jsxs(_components.li, {
        children: ["预加载多个频道时：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "如果你为所有预加载频道使用通配符 Token，调用 updatePreloadChannelToken 更新 Token。注意：生成通配符 Token 时，确保用户 ID 不为 0。"
          }), `
`, _jsx(_components.li, {
            children: "如果你为不同频道使用不同的 Token，调用该方法传入用户 User Account、频道名和新的 Token。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channelname-3",
      children: _jsx(_components.code, {
        children: "channelName"
      })
    }), `
`, _jsx(_components.p, {
      children: "你想要预加载的频道名。字符串长度必须小于 64 字节。支持的字符（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "所有小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "所有大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","'
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "useraccount-5",
      children: _jsx(_components.code, {
        children: "userAccount"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 User Account，用于标识频道中的用户。你需要自行设置和管理用户 User Account，并确保同一频道中的每个用户 User Account 唯一。该参数最大长度为 255 字节，不能为空。支持的字符如下（共 89 个）："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "26 个小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "26 个大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: "空格"
      }), `
`, _jsx(_components.li, {
        children: '"!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","'
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadchannelwithuseraccount__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-2：参数无效，例如用户 User Account 为空。请传入有效参数后重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象后再调用该方法。"
          }), `
`, _jsx(_components.li, {
            children: "-102：频道名无效。请传入有效的频道名后重新加入频道。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_registerlocaluseraccount"
    }), `
`, _jsx(_components.h2, {
      id: "registerlocaluseraccount",
      children: "registerLocalUserAccount"
    }), `
`, _jsx(_components.p, {
      children: "注册用户 User Account。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerlocaluseraccount__prototype"
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
              children: " registerLocalUserAccount"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String appId, String userAccount);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerlocaluseraccount__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于注册用户 User Account。注册成功后，用户 User Account 可用于在加入频道时标识本地用户身份。该方法为可选项。如果你希望使用用户 User Account 加入频道，可以选择以下任一方式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "先调用 registerLocalUserAccount 方法注册用户 User Account，再调用 joinChannelWithUserAccount 方法加入频道，可缩短进入频道所需时间。"
      }), `
`, _jsx(_components.li, {
        children: "直接调用 joinChannelWithUserAccount 方法加入频道。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerlocaluseraccount__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-10",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onlocaluserregistered",
        children: "onLocalUserRegistered"
      }), " 回调，报告本地用户的用户 ID 和用户 User Account。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerlocaluseraccount__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "appid",
      children: _jsx(_components.code, {
        children: "appId"
      })
    }), `
`, _jsx(_components.p, {
      children: "声网控制台中项目的 App ID。"
    }), `
`, _jsx(_components.h4, {
      id: "useraccount-6",
      children: _jsx(_components.code, {
        children: "userAccount"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 User Account，用于在频道中标识用户身份以实现实时音视频互动。你需要自行设置并管理用户 User Account，并确保同一频道内的每个用户 User Account 唯一。该参数的最大长度为 255 字节，不能为空。支持的字符共 89 个，包括："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "26 个小写英文字母：a 到 z。"
      }), `
`, _jsx(_components.li, {
        children: "26 个大写英文字母：A 到 Z。"
      }), `
`, _jsx(_components.li, {
        children: "所有数字字符：0 到 9。"
      }), `
`, _jsx(_components.li, {
        children: "空格"
      }), `
`, _jsx(_components.li, {
        children: '"!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、"{"、"}"、"|"、"~"、","'
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registerlocaluseraccount__return_values"
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
      id: "api_irtcengine_renewtoken"
    }), `
`, _jsx(_components.h2, {
      id: "renewtoken",
      children: "renewToken"
    }), `
`, _jsx(_components.p, {
      children: "更新 Token。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_renewtoken__prototype"
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
              children: " renewToken"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_renewtoken__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onrenewtokenresult",
        children: "onRenewTokenResult"
      }), " 回调。在单频道场景下，你可以在以下情况下调用该方法更新 Token："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "收到 onTokenPrivilegeWillExpire 回调，提示 Token 即将过期。"
      }), `
`, _jsx(_components.li, {
        children: "Token 已过期时，SDK 会触发 onRequestToken 回调，并在 onConnectionStateChanged 回调中报告 CONNECTION_CHANGED_TOKEN_EXPIRED （9）。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_renewtoken__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-8",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "新的 Token。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_renewtoken__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-2：参数无效，例如传入的 Token 为空。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。请先初始化 RtcEngine 对象再调用该方法。"
          }), `
`, _jsxs(_components.li, {
            children: ["110：Token 无效。请确保以下事项：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "生成 Token 时指定的用户 ID 与加入频道时使用的用户 ID 一致。"
              }), `
`, _jsx(_components.li, {
                children: "生成的 Token 与加入频道时传入的 Token 相同。"
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setchannelprofile"
    }), `
`, _jsx(_components.h2, {
      id: "setchannelprofile",
      children: "setChannelProfile"
    }), `
`, _jsx(_components.p, {
      children: "设置频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setchannelprofile__prototype"
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
              children: " setChannelProfile"
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
      id: "api_irtcengine_setchannelprofile__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "SDK 会根据不同的频道场景采用不同的优化策略，例如在直播场景中优先保证视频质量。初始化 SDK 后，默认频道场景为直播。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["为确保实时通信质量，建议频道内所有用户使用相同的频道场景。不同频道场景下，SDK 的默认音频路由也不同，详见 ", _jsx(_components.code, {
            children: "setDefaultAudioRouteToSpeakerphone"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setchannelprofile__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-12",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道前调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setchannelprofile__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "profile",
      children: _jsx(_components.code, {
        children: "profile"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道场景："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_COMMUNICATION （0）：通信场景。建议使用 CHANNEL_PROFILE_LIVE_BROADCASTING 以获得更好的音视频体验。"
      }), `
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_LIVE_BROADCASTING （1）：（默认）直播场景。"
      }), `
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_GAME （2）：游戏场景。已废弃，请使用 CHANNEL_PROFILE_LIVE_BROADCASTING。"
      }), `
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_CLOUD_GAMING （3）：互动场景。该场景对延迟进行了优化，适用于用户之间需要频繁互动的场景。已废弃，请使用 CHANNEL_PROFILE_LIVE_BROADCASTING。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setchannelprofile__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-2：参数无效。"
          }), `
`, _jsx(_components.li, {
            children: "-7：SDK 未初始化。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_setclientrole1"
    }), `
`, _jsx(_components.h2, {
      id: "setclientrole-12",
      children: "setClientRole [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置客户端实例的用户角色。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole1__prototype"
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
              children: " setClientRole"
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
              children: " role);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole1__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法将用户角色设置为主播或观众。用户角色决定了用户在 SDK 层的权限，包括是否可以在频道中发布音视频流。 你可以在加入频道前或加入频道后调用该方法："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你在加入频道前调用该方法将用户角色设置为主播，并通过 setupLocalVideo 设置本地视频属性，则用户加入频道时会自动开启本地视频预览。"
      }), `
`, _jsx(_components.li, {
        children: "如果你在加入频道后调用该方法设置用户角色，SDK 会自动调用 muteLocalAudioStream 和 muteLocalVideoStream 更改音视频流的发布状态。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在加入频道前调用该方法并将用户角色设置为 ", _jsx(_components.code, {
            children: "CLIENT_ROLE_BROADCASTER"
          }), " 时，本地客户端不会触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechanged",
            children: "onClientRoleChanged"
          }), " 回调。加入频道前调用该方法并将 ", _jsx(_components.code, {
            children: "role"
          }), " 设置为 ", _jsx(_components.code, {
            children: "CLIENT_ROLE_AUDIENCE"
          }), " 时也会触发该回调。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole1__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-13",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole1__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-11",
      children: "相关回调"
    }), `
`, _jsx(_components.p, {
      children: "如果你在加入频道后调用此方法切换用户角色，SDK 会触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端触发 onClientRoleChanged 回调。"
      }), `
`, _jsx(_components.li, {
        children: "远端客户端触发 onUserJoined 或 onUserOffline 回调。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["如果你在加入频道后调用此方法设置用户角色但失败，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechangefailed",
        children: "onClientRoleChangeFailed"
      }), " 回调，报告失败原因和当前用户角色。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "role",
      children: _jsx(_components.code, {
        children: "role"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果你将用户角色设置为观众，则无法在频道中发布音视频流。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "用户角色："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_BROADCASTER (1)：主播。"
      }), `
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_AUDIENCE (2)：观众。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole1__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-1：发生通用错误（无具体原因）。"
          }), `
`, _jsx(_components.li, {
            children: "-2：参数无效。"
          }), `
`, _jsx(_components.li, {
            children: "-7：SDK 未初始化。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_setclientrole2"
    }), `
`, _jsx(_components.h2, {
      id: "setclientrole-22",
      children: "setClientRole [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置直播场景下的用户角色和观众延迟等级。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole2__prototype"
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
              children: " setClientRole"
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
              children: " role, ClientRoleOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["默认情况下，SDK 会将用户角色设置为观众。你可以调用此方法将用户角色设置为主播。用户角色 (", _jsx(_components.code, {
        children: "role"
      }), ") 决定了用户在 SDK 层级的权限，包括是否可以在频道中发布音视频流。 该方法与 ", _jsx(_components.code, {
        children: "setClientRole(int role)"
      }), " 的区别在于，它支持设置 ", _jsx(_components.code, {
        children: "audienceLatencyLevel"
      }), "。 ", _jsx(_components.code, {
        children: "audienceLatencyLevel"
      }), " 需要与 ", _jsx(_components.code, {
        children: "role"
      }), " 搭配使用，以确定用户在其权限范围内可享受的服务等级。例如，观众可以选择接收低延迟或超低延迟的远端流。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当用户角色设置为主播时，观众延迟等级只能设置为 ", _jsx(_components.code, {
            children: "AUDIENCE_LATENCY_LEVEL_ULTRA_LOW_LATENCY"
          }), "。 在加入频道前调用此方法并将 ", _jsx(_components.code, {
            children: "role"
          }), " 设置为 ", _jsx(_components.code, {
            children: "BROADCASTER"
          }), " 时，本地客户端不会触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechanged",
            children: "onClientRoleChanged"
          }), " 回调。 在加入频道前调用此方法并将 ", _jsx(_components.code, {
            children: "role"
          }), " 设置为 ", _jsx(_components.code, {
            children: "AUDIENCE"
          }), " 时，也会触发该回调。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-14",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你在加入频道前调用此方法并通过 setupLocalVideo 设置本地视频属性，则用户加入频道时会自动开启本地视频预览。"
      }), `
`, _jsx(_components.li, {
        children: "如果你在加入频道后调用此方法设置用户角色，SDK 会自动调用 muteLocalAudioStream 和 muteLocalVideoStream 方法来改变音视频流的发布状态。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-12",
      children: "相关回调"
    }), `
`, _jsx(_components.p, {
      children: "如果你在加入频道后调用此方法切换用户角色，SDK 会触发以下回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端触发 onClientRoleChanged 回调。注意：在加入频道前调用此方法并将 role 设置为 AUDIENCE 也会触发该回调。"
      }), `
`, _jsx(_components.li, {
        children: "远端客户端触发 onUserJoined 或 onUserOffline 回调。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["如果你在加入频道后调用此方法设置用户角色但失败，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onclientrolechangefailed",
        children: "onClientRoleChangeFailed"
      }), " 回调，报告失败原因和当前用户角色。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-19",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "role-1",
      children: _jsx(_components.code, {
        children: "role"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果你将用户角色设置为观众，则无法在频道中发布音视频流。如果你希望在直播过程中发布媒体流，请确保将用户角色设置为主播。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "用户角色。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_BROADCASTER (1)：主播。"
      }), `
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_AUDIENCE (2)：观众（默认）。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-6",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户的详细选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-clientroleoptions",
        children: "ClientRoleOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setclientrole2__return_values"
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
            children: "-5：请求被拒绝。"
          }), `
`, _jsx(_components.li, {
            children: "-7：SDK 未初始化。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_updatechannelmediaoptions"
    }), `
`, _jsx(_components.h2, {
      id: "updatechannelmediaoptions",
      children: "updateChannelMediaOptions"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道后更新频道媒体选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatechannelmediaoptions__prototype"
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
              children: " updateChannelMediaOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ChannelMediaOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatechannelmediaoptions__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatechannelmediaoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-20",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "options-7",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["频道媒体选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
        children: "ChannelMediaOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatechannelmediaoptions__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-2： ChannelMediaOptions 中某个成员的值无效，例如 Token 或用户 ID 无效。你需要填写有效的参数。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用该方法。"
          }), `
`, _jsx(_components.li, {
            children: "-8： RtcEngine 对象的内部状态错误。可能的原因是用户不在频道中。声网建议你使用 onConnectionStateChanged 回调判断用户是否在频道中。如果你收到 CONNECTION_STATE_DISCONNECTED （1）或 CONNECTION_STATE_FAILED （5）状态，说明用户不在频道中。你需要先调用 joinChannel 加入频道，再调用该方法。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengineex_updatechannelmediaoptionsex"
    }), `
`, _jsx(_components.h2, {
      id: "updatechannelmediaoptionsex",
      children: "updateChannelMediaOptionsEx"
    }), `
`, _jsx(_components.p, {
      children: "加入频道后更新频道媒体选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_updatechannelmediaoptionsex__prototype"
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
              children: " updateChannelMediaOptionsEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ChannelMediaOptions options, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_updatechannelmediaoptionsex__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_updatechannelmediaoptionsex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-6",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_updatechannelmediaoptionsex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-21",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "options-8",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["频道媒体选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediaoptions",
        children: "ChannelMediaOptions"
      }), "。"]
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
      id: "api_irtcengineex_updatechannelmediaoptionsex__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-2： ChannelMediaOptions 中的成员值无效，例如 token 或用户 ID 无效。你需要填写有效的参数。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用该方法。"
          }), `
`, _jsx(_components.li, {
            children: "-8： RtcEngine 对象的内部状态错误，可能的原因是用户不在频道中。声网建议你使用 onConnectionStateChanged 回调判断用户是否在频道中。如果你收到 CONNECTION_STATE_DISCONNECTED （1）或 CONNECTION_STATE_FAILED （5）状态，说明用户不在频道中。你需要先调用 joinChannel 加入频道，再调用该方法。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_updatepreloadchanneltoken"
    }), `
`, _jsx(_components.h2, {
      id: "updatepreloadchanneltoken",
      children: "updatePreloadChannelToken"
    }), `
`, _jsx(_components.p, {
      children: "更新用于预加载频道的通配 Token。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatepreloadchanneltoken__prototype"
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
              children: " updatePreloadChannelToken"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatepreloadchanneltoken__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你需要自行维护通配 Token 的生命周期。当该 Token 过期时，需要生成新的通配 Token，并调用该方法传入新的 Token。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatepreloadchanneltoken__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-7",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于涉及多个频道的场景，例如在不同频道之间切换时，使用通配 Token 可以避免用户每次加入新频道时都申请新的 Token，从而节省切换频道的时间，并减轻你的 Token 服务器的压力。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatepreloadchanneltoken__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-22",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-9",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "新的 Token。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatepreloadchanneltoken__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-2：参数无效，例如 Token 无效。你需要传入有效参数并重新加入频道。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。你需要先初始化 RtcEngine 对象再调用此方法。"
          }), `
`]
        }), `
`]
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onclientrolechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onclientrolechanged",
      children: "onClientRoleChanged"
    }), `
`, _jsx(_components.p, {
      children: "用户角色或观众延迟级别发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onclientrolechanged__prototype"
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
              children: " onClientRoleChanged"
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
              children: " oldRole, "
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
              children: " newRole, ClientRoleOptions newRoleOptions)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onclientrolechanged__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当你在加入频道前调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole1",
            children: "setClientRole [1/2]"
          }), " 或 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole2",
            children: "setClientRole [2/2]"
          }), " 并将用户角色设置为主播时，该回调不会被触发。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onclientrolechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在以下任一情况下被触发："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "加入频道后调用 setClientRole [1/2] 或 setClientRole [2/2] 设置用户角色或观众延迟级别；"
      }), `
`, _jsx(_components.li, {
        children: "加入频道前调用 setClientRole [1/2] 或 setClientRole [2/2] 并将用户角色设置为观众。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onclientrolechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-23",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "oldrole",
      children: _jsx(_components.code, {
        children: "oldRole"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户切换前的角色："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_BROADCASTER (1)：主播。"
      }), `
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_AUDIENCE (2)：观众。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "newrole",
      children: _jsx(_components.code, {
        children: "newRole"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户切换后的角色："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_BROADCASTER (1)：主播。"
      }), `
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_AUDIENCE (2)：观众。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "newroleoptions",
      children: _jsx(_components.code, {
        children: "newRoleOptions"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用户切换后的角色属性，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-clientroleoptions",
        children: "ClientRoleOptions"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-24",
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
      id: "callback_irtcengineeventhandler_onclientrolechangefailed"
    }), `
`, _jsx(_components.h2, {
      id: "onclientrolechangefailed",
      children: "onClientRoleChangeFailed"
    }), `
`, _jsx(_components.p, {
      children: "切换用户角色失败时的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onclientrolechangefailed__prototype"
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
              children: " onClientRoleChangeFailed"
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
              children: " currentRole)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onclientrolechangefailed__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调用于通知切换用户角色失败的原因以及当前的用户角色。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onclientrolechangefailed__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在本地用户加入频道后调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole1",
        children: "setClientRole [1/2]"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_setclientrole2",
        children: "setClientRole [2/2]"
      }), " （带 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-clientroleoptions",
        children: "ClientRoleOptions"
      }), " 参数）切换用户角色失败时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onclientrolechangefailed__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-24",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "reason",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "仅在启用 128 人功能时会返回该枚举值。主播数量上限取决于启用 128 人功能时配置的实际主播数量。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "用户角色切换失败的原因。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_CHANGE_FAILED_TOO_MANY_BROADCASTERS (1)：频道中的主播数量已达上限。仅在启用 128 人功能时会返回该枚举值。"
      }), `
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_CHANGE_FAILED_NOT_AUTHORIZED (2)：请求被声网服务器拒绝。建议提示用户重试切换用户角色。"
      }), `
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_CHANGE_FAILED_REQUEST_TIME_OUT (3)：请求超时。建议提示用户检查网络连接并重试切换用户角色。自 v4.4.0 版本废弃，不建议使用。"
      }), `
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_CHANGE_FAILED_CONNECTION_FAILED (4)：SDK 连接失败。你可以通过 onConnectionStateChanged 回调中报告的 reason 进行排查。自 v4.4.0 版本废弃，不建议使用。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "currentrole",
      children: _jsx(_components.code, {
        children: "currentRole"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前的用户角色。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_BROADCASTER (1)：主播，可以发送和接收音视频流。"
      }), `
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_AUDIENCE (2)：观众，只能接收音视频流。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onerror"
    }), `
`, _jsx(_components.h2, {
      id: "onerror",
      children: "onError"
    }), `
`, _jsx(_components.p, {
      children: "SDK 运行期间发生错误时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onerror__prototype"
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
              children: " onError"
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
              children: " err)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onerror__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调表示 SDK 运行期间发生了网络或媒体相关的错误。在大多数情况下，SDK 无法自动修复该问题并继续运行，需要你在应用层进行处理或通知用户。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onerror__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 运行期间发生错误时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onerror__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-25",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "err",
      children: _jsx(_components.code, {
        children: "err"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["错误码。详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
        children: "错误码"
      }), "文档。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-26",
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
      id: "callback_irtcengineeventhandler_onjoinchannelsuccess"
    }), `
`, _jsx(_components.h2, {
      id: "onjoinchannelsuccess",
      children: "onJoinChannelSuccess"
    }), `
`, _jsx(_components.p, {
      children: "本地用户成功加入频道回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onjoinchannelsuccess__prototype"
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
              children: " onJoinChannelSuccess"
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
              children: " elapsed)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onjoinchannelsuccess__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onjoinchannelsuccess__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-3",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在你调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), "、 ", _jsx(_components.code, {
        children: "joinChannelWithUserAccount"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelex",
        children: "joinChannelEx"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_joinchannelwithuseraccountex",
        children: "joinChannelWithUserAccountEx"
      }), " 加入频道时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onjoinchannelsuccess__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-26",
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
      id: "uid-4",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "加入频道的用户 ID。"
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
      }), " 加入频道到 SDK 触发该回调的时间间隔，单位为毫秒。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-27",
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
      id: "callback_irtcengineeventhandler_onleavechannel"
    }), `
`, _jsx(_components.h2, {
      id: "onleavechannel",
      children: "onLeaveChannel"
    }), `
`, _jsx(_components.p, {
      children: "用户离开频道回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onleavechannel__prototype"
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
              children: " onLeaveChannel"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcStats stats) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onleavechannel__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onleavechannel__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-4",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在你调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel",
        children: "leaveChannel [1/2]"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_leavechannel2",
        children: "leaveChannel [2/2]"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex",
        children: "leaveChannelEx [1/2]"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengineex_leavechannelex2",
        children: "leaveChannelEx [2/2]"
      }), " 离开频道后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onleavechannel__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-27",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "stats",
      children: _jsx(_components.code, {
        children: "stats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["通话统计信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcstats",
        children: "RtcStats"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-28",
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
      id: "callback_irtcengineeventhandler_onlocaluserregistered"
    }), `
`, _jsx(_components.h2, {
      id: "onlocaluserregistered",
      children: "onLocalUserRegistered"
    }), `
`, _jsx(_components.p, {
      children: "本地用户注册用户 User Account 回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocaluserregistered__prototype"
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
              children: " onLocalUserRegistered"
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
              children: " uid, String userAccount)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocaluserregistered__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-2",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v2.8.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["当本地用户成功调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_registerlocaluseraccount",
        children: "registerLocalUserAccount"
      }), " 方法注册用户 User Account，或调用 ", _jsx(_components.code, {
        children: "joinChannelWithUserAccount"
      }), " 方法加入频道后，SDK 会触发该回调，并返回本地用户的用户 ID 和用户 User Account。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocaluserregistered__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-5",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地用户成功注册用户 User Account 或加入频道后被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocaluserregistered__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-28",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-5",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "useraccount-7",
      children: _jsx(_components.code, {
        children: "userAccount"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地用户的用户 User Account。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-29",
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
      id: "callback_irtcengineeventhandler_onrejoinchannelsuccess"
    }), `
`, _jsx(_components.h2, {
      id: "onrejoinchannelsuccess",
      children: "onRejoinChannelSuccess"
    }), `
`, _jsx(_components.p, {
      children: "用户重新加入频道回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrejoinchannelsuccess__prototype"
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
              children: " onRejoinChannelSuccess"
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
              children: " elapsed)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrejoinchannelsuccess__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调在用户因网络问题与服务器断开连接后，SDK 自动尝试重连并成功重连时触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrejoinchannelsuccess__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-6",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在用户因网络问题与服务器断开连接后，SDK 自动尝试重连并成功重连时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrejoinchannelsuccess__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-29",
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
      id: "uid-6",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "重新加入频道的用户 ID。"
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
      }), " 到 SDK 触发该回调的时间间隔，单位为毫秒。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-30",
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
      id: "callback_irtcengineeventhandler_onrenewtokenresult"
    }), `
`, _jsx(_components.h2, {
      id: "onrenewtokenresult",
      children: "onRenewTokenResult"
    }), `
`, _jsx(_components.p, {
      children: "renewToken 调用结果回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrenewtokenresult__prototype"
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
              children: " onRenewTokenResult"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token, Constants.RenewTokenErrorCode code)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrenewtokenresult__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-3",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
        children: "renewToken"
      }), " 方法后触发，用于通知更新结果。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrenewtokenresult__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-7",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在你调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_renewtoken",
        children: "renewToken"
      }), " 方法后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrenewtokenresult__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-30",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-10",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于鉴权的 Token。"
    }), `
`, _jsx(_components.h4, {
      id: "code",
      children: _jsx(_components.code, {
        children: "code"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["错误码。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-renewtokenerrorcode",
        children: "RenewTokenErrorCode"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-31",
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
      id: "callback_irtcengineeventhandler_onrequesttoken"
    }), `
`, _jsx(_components.h2, {
      id: "onrequesttoken",
      children: "onRequestToken"
    }), `
`, _jsx(_components.p, {
      children: "Token 过期回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrequesttoken__prototype"
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
              children: " onRequestToken"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrequesttoken__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 Token 过期时被触发。收到该回调后，你需要在 Token 服务器上生成新的 Token，并通过以下方式之一更新 Token："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["单频道场景：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "调用 renewToken 更新 Token。"
          }), `
`, _jsx(_components.li, {
            children: "调用 leaveChannel 离开当前频道，然后在调用 joinChannel 加入频道时传入新的 Token。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "多频道场景：调用 updateChannelMediaOptionsEx 传入新的 Token。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrequesttoken__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-8",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 Token 过期时被触发。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-32",
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
      id: "callback_irtcengineeventhandler_onrtcstats"
    }), `
`, _jsx(_components.h2, {
      id: "onrtcstats",
      children: "onRtcStats"
    }), `
`, _jsx(_components.p, {
      children: "报告当前通话统计信息的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtcstats__prototype"
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
              children: " onRtcStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcStats stats) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtcstats__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtcstats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-9",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在用户加入频道后每两秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtcstats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-31",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "stats-1",
      children: _jsx(_components.code, {
        children: "stats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["RTC 引擎的统计信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcstats",
        children: "RtcStats"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-33",
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
      id: "callback_irtcengineeventhandler_ontokenprivilegewillexpire"
    }), `
`, _jsx(_components.h2, {
      id: "ontokenprivilegewillexpire",
      children: "onTokenPrivilegeWillExpire"
    }), `
`, _jsx(_components.p, {
      children: "Token 即将在 30 秒后过期时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontokenprivilegewillexpire__prototype"
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
              children: " onTokenPrivilegeWillExpire"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String token)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontokenprivilegewillexpire__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "收到该回调时，你需要在 Token 服务器上生成一个新的 Token，并通过以下方式之一更新 Token："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["单频道场景：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "调用 renewToken 传入新的 Token。"
          }), `
`, _jsx(_components.li, {
            children: "调用 leaveChannel 离开当前频道，然后在调用 joinChannel 加入频道时传入新的 Token。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "多频道场景：调用 updateChannelMediaOptionsEx 传入新的 Token。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontokenprivilegewillexpire__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-10",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 Token 过期前 30 秒被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontokenprivilegewillexpire__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-32",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "token-11",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "即将过期的 Token。"
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
      id: "callback_irtcengineeventhandler_onuserinfoupdated"
    }), `
`, _jsx(_components.h2, {
      id: "onuserinfoupdated",
      children: "onUserInfoUpdated"
    }), `
`, _jsx(_components.p, {
      children: "远端用户的用户 ID 和用户 User Account 信息更新回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserinfoupdated__prototype"
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
              children: " onUserInfoUpdated"
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
              children: " uid, UserInfo userInfo) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserinfoupdated__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-4",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v2.8.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "当远端用户加入频道后，SDK 会获取该用户的用户 ID 和用户 User Account，并将其缓存在映射表中，然后在本地客户端触发该回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserinfoupdated__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-11",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在远端用户加入频道后，SDK 获取到其用户 ID 和用户 User Account 时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserinfoupdated__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-33",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-7",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "userinfo-4",
      children: _jsx(_components.code, {
        children: "userInfo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["包含远端用户的用户 ID 和用户 User Account 信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-userinfo",
        children: "UserInfo"
      }), "。"]
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
      id: "callback_irtcengineeventhandler_onuserjoined"
    }), `
`, _jsx(_components.h2, {
      id: "onuserjoined",
      children: "onUserJoined"
    }), `
`, _jsx(_components.p, {
      children: "远端用户或主播加入频道回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserjoined__prototype"
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
              children: " onUserJoined"
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
      id: "callback_irtcengineeventhandler_onuserjoined__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "在通信频道中，该回调表示有远端用户加入频道。当本地用户加入频道时，SDK 也会触发该回调报告频道中已有的用户。在直播频道中，该回调表示有主播加入频道。声网建议将连麦主播数量限制为 32 人，最多支持 17 路视频主播。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserjoined__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-12",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在以下任一情况下被触发："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "远端用户或主播加入频道。"
      }), `
`, _jsx(_components.li, {
        children: "远端用户加入频道后将用户角色切换为主播。"
      }), `
`, _jsx(_components.li, {
        children: "远端用户或主播在网络中断后重新加入频道。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserjoined__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-34",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-8",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "加入频道的用户 ID。"
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
      }), " 到该回调被触发的延迟（毫秒）。"]
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
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuseroffline"
    }), `
`, _jsx(_components.h2, {
      id: "onuseroffline",
      children: "onUserOffline"
    }), `
`, _jsx(_components.p, {
      children: "远端用户或主播离开频道时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuseroffline__prototype"
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
              children: " onUserOffline"
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
              children: " reason)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuseroffline__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "用户离线通常有以下两种原因："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "离开频道：当用户或主播离开频道时，会发送一条离开消息。"
      }), `
`, _jsx(_components.li, {
        children: "掉线：在一段时间内（通信场景为 20 秒，直播场景更长）未收到用户或主播的数据包时，SDK 会认为其掉线。网络连接不佳可能导致误判，建议使用声网 RTM SDK 进行可靠的离线检测。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuseroffline__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-13",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在远端用户（在通信场景中）或主播（在直播场景中）离开频道时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuseroffline__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-35",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-9",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "离开频道或掉线的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "reason-1",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户（在通信场景中）或主播（在直播场景中）离线的原因："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "USER_OFFLINE_QUIT (0)：用户主动退出通话，发送离开消息。"
      }), `
`, _jsx(_components.li, {
        children: "USER_OFFLINE_DROPPED (1)：SDK 超时未收到任何数据包，用户掉线。网络连接不佳可能导致误判，建议使用声网 RTM SDK 进行可靠的离线检测。"
      }), `
`, _jsx(_components.li, {
        children: "USER_OFFLINE_BECOME_AUDIENCE (2)：用户将角色从主播切换为观众。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-37",
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
