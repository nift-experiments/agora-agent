import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "网络及其他",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_network" />

<a id="api_irtcengine_complain" />

## complain [#complain]

允许你在通话结束后投诉通话质量。

<a id="api_irtcengine_complain__prototype" />

\`\`\`java
public abstract int complain(String callId, String description);
\`\`\`

<a id="api_irtcengine_complain__detailed_desc" />

请在用户离开频道后调用该方法。

<a id="api_irtcengine_complain__parameters" />

### 参数 [#参数]

#### \`callId\` [#callid]

当前通话的 Call ID。你可以通过调用 [getCallId](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid) 获取。

#### \`description\` [#description]

（可选）对通话的描述。字符串长度应小于 800 字节。

<a id="api_irtcengine_complain__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无明确原因）。
  * -2：参数无效。
  * -7：在 RtcEngine 初始化之前调用该方法。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enableencryption" />

## enableEncryption [#enableencryption]

启用或关闭内置加密功能。

<a id="api_irtcengine_enableencryption__prototype" />

\`\`\`java
public abstract int enableEncryption(boolean enabled, EncryptionConfig config);
\`\`\`

<a id="api_irtcengine_enableencryption__detailed_desc" />

用户离开频道后，SDK 会自动关闭内置加密功能。请在用户重新加入频道前调用该方法。

注：

* 同一频道内的所有用户在调用该方法时必须设置相同的加密配置。
* 启用内置加密功能后，无法使用旁路推流功能。

<a id="api_irtcengine_enableencryption__scenario" />

### 适用场景 [#适用场景]

适用于安全性要求较高的场景。

<a id="api_irtcengine_enableencryption__timing" />

### 调用时机 [#调用时机]

请在加入频道前调用该方法。

<a id="api_irtcengine_enableencryption__parameters" />

### 参数 [#参数-1]

#### \`enabled\` [#enabled]

是否启用内置加密功能：

* true：启用内置加密功能。
* false：（默认）关闭内置加密功能。

#### \`config\` [#config]

内置加密配置。详见 [EncryptionConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-encryptionconfig)。

<a id="api_irtcengine_enableencryption__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。请传入有效参数。
  * -4：内置加密模式错误或 SDK 加载外部加密库失败。请检查枚举值或重新加载外部加密库。
  * -7：SDK 未初始化。请先初始化 RtcEngine 实例后再调用该方法。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_enableencryptionex" />

## enableEncryptionEx [#enableencryptionex]

启用或关闭内置加密功能。

<a id="api_irtcengineex_enableencryptionex__prototype" />

\`\`\`java
public abstract int enableEncryptionEx(boolean enabled, EncryptionConfig config, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_enableencryptionex__detailed_desc" />

用户离开频道后，SDK 会自动关闭内置加密。你需要在用户重新加入频道前调用该方法。

注：

* 同一频道内的所有用户在调用该方法时必须设置相同的加密配置。
* 启用内置加密后，无法使用旁路推流功能。

<a id="api_irtcengineex_enableencryptionex__scenario" />

### 适用场景 [#适用场景-1]

适用于多频道场景，或对安全性要求较高的场景。

<a id="api_irtcengineex_enableencryptionex__timing" />

### 调用时机 [#调用时机-1]

请在加入频道前调用该方法。

<a id="api_irtcengineex_enableencryptionex__parameters" />

### 参数 [#参数-2]

#### \`enabled\` [#enabled-1]

是否启用内置加密：

* true：启用内置加密。
* false：（默认）关闭内置加密。

#### \`config\` [#config-1]

内置加密配置。详见 [EncryptionConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-encryptionconfig)。

#### \`connection\` [#connection]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_enableencryptionex__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_enablewebsdkinteroperability" />

## enableWebSdkInteroperability [#enablewebsdkinteroperability]

启用或关闭与声网 Web SDK 的互通功能，仅适用于直播场景。

<a id="api_irtcengine_enablewebsdkinteroperability__prototype" />

\`\`\`java
public abstract int enableWebSdkInteroperability(boolean enabled);
\`\`\`

<a id="api_irtcengine_enablewebsdkinteroperability__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃。SDK 自动开启与 Web SDK 的互通，无需调用该方法开启。

如果频道中存在 Web SDK 用户，必须调用该方法，否则 Native 用户的视频画面在 Web 端将显示为黑屏。该方法仅适用于直播场景，在语音通话场景中默认启用互通功能。

<a id="api_irtcengine_enablewebsdkinteroperability__parameters" />

### 参数 [#参数-3]

#### \`enabled\` [#enabled-2]

是否启用互通功能：

* true：启用互通功能。
* false：（默认）关闭互通功能。

<a id="api_irtcengine_enablewebsdkinteroperability__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getcallid" />

## getCallId [#getcallid]

获取当前通话 ID。

<a id="api_irtcengine_getcallid__prototype" />

\`\`\`java
public abstract String getCallId();
\`\`\`

<a id="api_irtcengine_getcallid__detailed_desc" />

客户端在用户加入频道后会生成一个用于标识当前通话的 \`callId\`。你可以调用 [getCallId](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid) 获取 \`callId\`，并在调用 [rate](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate)、 [complain](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_complain) 等方法时传入该值。

<a id="api_irtcengine_getcallid__timing" />

### 调用时机 [#调用时机-2]

该方法需要在加入频道后调用。

<a id="api_irtcengine_getcallid__return_values" />

### 返回值 [#返回值-4]

* 方法调用成功时，返回当前通话的 callId。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_getcallidex" />

## getCallIdEx [#getcallidex]

获取与连接 ID 对应的通话 ID。

<a id="api_irtcengineex_getcallidex__prototype" />

\`\`\`java
public abstract String getCallIdEx(RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_getcallidex__detailed_desc" />

你可以调用该方法获取 \`callId\`，并在调用 [rate](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate) 和 [complain](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_complain) 等方法时传入该 ID。

<a id="api_irtcengineex_getcallidex__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多频道场景。

<a id="api_irtcengineex_getcallidex__timing" />

### 调用时机 [#调用时机-3]

请在加入频道后调用此方法。

<a id="api_irtcengineex_getcallidex__parameters" />

### 参数 [#参数-4]

#### \`connection\` [#connection-1]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_getcallidex__return_values" />

### 返回值 [#返回值-5]

方法调用成功时，返回通话 ID。 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-5]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_getconnectionstate" />

## getConnectionState [#getconnectionstate]

获取 SDK 当前的连接状态。

<a id="api_irtcengine_getconnectionstate__prototype" />

\`\`\`java
public abstract int getConnectionState();
\`\`\`

<a id="api_irtcengine_getconnectionstate__detailed_desc" />

<a id="api_irtcengine_getconnectionstate__timing" />

### 调用时机 [#调用时机-4]

该方法可以在加入频道前或加入频道后调用。

<a id="api_irtcengine_getconnectionstate__return_values" />

### 返回值 [#返回值-6]

* 方法调用成功，返回当前的连接状态。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_getconnectionstateex" />

## getConnectionStateEx [#getconnectionstateex]

获取 SDK 当前的连接状态。

<a id="api_irtcengineex_getconnectionstateex__prototype" />

\`\`\`java
public abstract int getConnectionStateEx(RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_getconnectionstateex__detailed_desc" />

<a id="api_irtcengineex_getconnectionstateex__scenario" />

### 适用场景 [#适用场景-3]

该方法适用于多频道场景。

<a id="api_irtcengineex_getconnectionstateex__timing" />

### 调用时机 [#调用时机-5]

该方法可以在加入频道前或后调用。

<a id="api_irtcengineex_getconnectionstateex__parameters" />

### 参数 [#参数-5]

#### \`connection\` [#connection-2]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_getconnectionstateex__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_getcurrentmonotonictimeinms" />

## getCurrentMonotonicTimeInMs [#getcurrentmonotonictimeinms]

获取 SDK 当前的单调时间。

<a id="api_irtcengine_getcurrentmonotonictimeinms__prototype" />

\`\`\`java
public abstract long getCurrentMonotonicTimeInMs();
\`\`\`

<a id="api_irtcengine_getcurrentmonotonictimeinms__detailed_desc" />

在自定义视频采集和自定义音频采集场景中，为确保音视频同步，声网建议调用该方法获取 SDK 当前的单调时间，并将该值传入采集的视频帧 (\`VideoFrame\`) 和音频帧 ([AudioFrame](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioframe)) 的时间戳参数中。单调时间是指一个随时间单调递增的时间序列，单位为毫秒。

<a id="api_irtcengine_getcurrentmonotonictimeinms__timing" />

### 调用时机 [#调用时机-6]

该方法可在加入频道前或加入频道后调用。

<a id="api_irtcengine_getcurrentmonotonictimeinms__return_values" />

### 返回值 [#返回值-8]

* 方法调用成功，返回 SDK 当前的单调时间（单位为毫秒）。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_geterrordescription" />

## getErrorDescription [#geterrordescription]

获取警告或错误码对应的描述信息。

<a id="api_irtcengine_geterrordescription__prototype" />

\`\`\`java
public static String getErrorDescription(int error)
\`\`\`

<a id="api_irtcengine_geterrordescription__detailed_desc" />

<a id="api_irtcengine_geterrordescription__parameters" />

### 参数 [#参数-6]

#### \`error\` [#error]

SDK 报告的错误码。

<a id="api_irtcengine_geterrordescription__return_values" />

### 返回值 [#返回值-9]

方法调用成功时，返回错误码对应的描述信息。 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getnativehandle" />

## getNativeHandle [#getnativehandle]

获取原生 SDK 的 C++ 句柄。

<a id="api_irtcengine_getnativehandle__prototype" />

\`\`\`java
public abstract long getNativeHandle();
\`\`\`

<a id="api_irtcengine_getnativehandle__detailed_desc" />

该方法可用于注册音频和视频帧观察器。

<a id="api_irtcengine_getnativehandle__return_values" />

### 返回值 [#返回值-10]

方法调用成功，返回 SDK 的原生句柄。

### 所属接口类 [#所属接口类-10]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getnetworktype" />

## getNetworkType [#getnetworktype]

获取本地网络连接类型。

<a id="api_irtcengine_getnetworktype__prototype" />

\`\`\`java
public abstract int getNetworkType();
\`\`\`

<a id="api_irtcengine_getnetworktype__detailed_desc" />

你可以在任意阶段调用此方法获取当前使用的网络类型。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你可以在加入频道前或后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_getnetworktype__return_values" />

### 返回值 [#返回值-11]

* 方法调用成功，返回本地网络连接类型：
  * 0：SDK 与网络断开连接。
  * 1：网络类型为 LAN。
  * 2：网络类型为 Wi-Fi（包括热点）。
  * 3：网络类型为移动 2G。
  * 4：网络类型为移动 3G。
  * 5：网络类型为移动 4G。
  * 6：网络类型为移动 5G。
* 方法调用失败，返回错误码：
  * -1：网络类型未知。

### 所属接口类 [#所属接口类-11]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getntpwalltimeinms" />

## getNtpWallTimeInMs [#getntpwalltimeinms]

获取当前 NTP（网络时间协议）时间。

<a id="api_irtcengine_getntpwalltimeinms__prototype" />

\`\`\`java
public abstract long getNtpWallTimeInMs();
\`\`\`

<a id="api_irtcengine_getntpwalltimeinms__detailed_desc" />

在实时合唱场景中，尤其是当多个接收端因网络问题导致下行链路连接不一致时，可以调用该方法获取当前 NTP 时间作为参考时间，以对齐多个接收端的歌词和音乐，实现合唱同步。

<a id="api_irtcengine_getntpwalltimeinms__return_values" />

### 返回值 [#返回值-12]

方法调用成功，返回当前 NTP 时间的 Unix 时间戳（毫秒）。

### 所属接口类 [#所属接口类-12]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getversion" />

## getSdkVersion [#getsdkversion]

获取 SDK 的版本号。

<a id="api_irtcengine_getversion__prototype" />

\`\`\`java
public static String getSdkVersion()
\`\`\`

<a id="api_irtcengine_getversion__detailed_desc" />

<a id="api_irtcengine_getversion__return_values" />

### 返回值 [#返回值-13]

方法调用成功时，返回 SDK 的版本号字符串。 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-13]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_isfeatureavailableondevice" />

## isFeatureAvailableOnDevice [#isfeatureavailableondevice]

检查当前设备是否支持指定的高级功能。

<a id="api_irtcengine_isfeatureavailableondevice__prototype" />

\`\`\`java
public abstract boolean isFeatureAvailableOnDevice(int type);
\`\`\`

<a id="api_irtcengine_isfeatureavailableondevice__detailed_desc" />

#### \`自从\` [#自从]

自 v4.3.0 版本新增。

在使用高级功能前，建议调用该方法判断当前设备的能力是否满足要求，以避免在低端设备上启用高级功能时出现性能下降或功能不可用的情况。你可以根据该方法的返回值决定是否显示或启用相应的功能按钮，或在设备能力不足时提示用户。

<a id="api_irtcengine_isfeatureavailableondevice__parameters" />

### 参数 [#参数-7]

#### \`type\` [#type]

高级功能的类型：

* FEATURE\\_VIDEO\\_VIRTUAL\\_BACKGROUND （1）：虚拟背景。
* FEATURE\\_VIDEO\\_BEAUTY\\_EFFECT （2）：美颜特效。

<a id="api_irtcengine_isfeatureavailableondevice__return_values" />

### 返回值 [#返回值-14]

* true：当前设备支持指定的功能。
* false：当前设备不支持指定的功能。

### 所属接口类 [#所属接口类-14]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_querydevicescore" />

## queryDeviceScore [#querydevicescore]

查询设备评分。

<a id="api_irtcengine_querydevicescore__prototype" />

\`\`\`java
public abstract int queryDeviceScore();
\`\`\`

<a id="api_irtcengine_querydevicescore__detailed_desc" />

你可以调用该方法查询设备评分。如果返回的评分较低（例如低于 60），你需要降低视频分辨率，以避免影响视频体验。不同业务场景对设备评分的最低要求不同，具体评分建议请[联系技术支持](https://ticket.shengwang.cn/)。

<a id="api_irtcengine_querydevicescore__return_values" />

### 返回值 [#返回值-15]

* \\> 0：方法调用成功，返回当前设备评分，范围为 \\[0, 100]，数值越大表示设备性能越强。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-15]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_rate" />

## rate [#rate]

允许用户在通话结束后对通话进行评分。

<a id="api_irtcengine_rate__prototype" />

\`\`\`java
public abstract int rate(String callId, int rating, String description);
\`\`\`

<a id="api_irtcengine_rate__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请确保在离开频道后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_rate__parameters" />

### 参数 [#参数-8]

#### \`callId\` [#callid-1]

当前通话的 ID。你可以通过调用 [getCallId](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid) 获取该 ID。

#### \`rating\` [#rating]

评分值，范围为 1（最低分）到 5（最高分）。

#### \`description\` [#description-1]

（可选）对通话的描述。字符串长度应小于 800 字节。

<a id="api_irtcengine_rate__return_values" />

### 返回值 [#返回值-16]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误。
  * -2：参数无效。

### 所属接口类 [#所属接口类-16]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_sendcustomreportmessage" />

## sendCustomReportMessage [#sendcustomreportmessage]

上报自定义消息。

<a id="api_irtcengine_sendcustomreportmessage__prototype" />

\`\`\`java
public abstract int sendCustomReportMessage(String id, String category, String event, String label, int value);
\`\`\`

<a id="api_irtcengine_sendcustomreportmessage__detailed_desc" />

该功能目前处于测试阶段，提供免费试用。在测试版本中，最多支持在 6 秒内上报 10 条消息，每条消息不超过 256 字节，每个字符串不超过 100 字节。如需试用该功能，请[联系技术支持](https://ticket.shengwang.cn/)，并与我们讨论自定义消息的格式。

<a id="api_irtcengine_sendcustomreportmessage__parameters" />

### 参数 [#参数-9]

#### \`id\` [#id]

自定义消息的 ID。

#### \`category\` [#category]

自定义消息的类别。

#### \`event\` [#event]

自定义消息的事件名称。

#### \`label\` [#label]

自定义消息的标签。

#### \`value\` [#value]

自定义消息的数值。

<a id="api_irtcengine_sendcustomreportmessage__return_values" />

### 返回值 [#返回值-17]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-17]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_sendcustomreportmessageex" />

## sendCustomReportMessageEx [#sendcustomreportmessageex]

支持上报和分析自定义消息。

<a id="api_irtcengineex_sendcustomreportmessageex__prototype" />

\`\`\`java
public abstract int sendCustomReportMessageEx(String id, String category, String event, String label, int value, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_sendcustomreportmessageex__detailed_desc" />

该功能目前处于测试阶段，提供免费试用。在测试版本中，最多支持在 6 秒内上报 10 条消息，每条消息不超过 256 字节，每个字符串不超过 100 字节。如需试用该功能，请[联系技术支持](https://ticket.shengwang.cn/)并与我们讨论自定义消息的格式。

<a id="api_irtcengineex_sendcustomreportmessageex__scenario" />

### 适用场景 [#适用场景-4]

该方法适用于多频道场景。

<a id="api_irtcengineex_sendcustomreportmessageex__parameters" />

### 参数 [#参数-10]

#### \`id\` [#id-1]

自定义消息的 ID。

#### \`category\` [#category-1]

自定义消息的类别。

#### \`event\` [#event-1]

自定义消息的事件名称。

#### \`label\` [#label-1]

自定义消息的标签。

#### \`value\` [#value-1]

自定义消息的数值。

#### \`connection\` [#connection-3]

连接信息，适用于多频道场景。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_sendcustomreportmessageex__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-18]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setavsyncsource" />

## setAVSyncSource [#setavsyncsource]

设置发布端的音视频同步源。

<a id="api_irtcengine_setavsyncsource__prototype" />

\`\`\`java
public abstract int setAVSyncSource(String channelId, int uid);
\`\`\`

<a id="api_irtcengine_setavsyncsource__detailed_desc" />

你可以在视频发布设备上调用该方法，并传入音频发布设备所在频道的频道名和用户 ID。SDK 会以发送的音频流的时间戳为参考，自动调整视频流，从而确保即使两个发布设备的上行网络条件不同（例如一个使用 Wi-Fi，另一个使用 4G），接收端的音视频也能实现时间同步。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    建议在加入频道前调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setavsyncsource__parameters" />

### 参数 [#参数-11]

#### \`channelId\` [#channelid]

音频发布设备所在频道的频道名。

#### \`uid\` [#uid]

音频发布设备的用户 ID。

<a id="api_irtcengine_setavsyncsource__return_values" />

### 返回值 [#返回值-19]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-19]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcloudproxy" />

## setCloudProxy [#setcloudproxy]

设置云代理服务。

<a id="api_irtcengine_setcloudproxy__prototype" />

\`\`\`java
public abstract int setCloudProxy(int proxyType);
\`\`\`

<a id="api_irtcengine_setcloudproxy__detailed_desc" />

当用户的网络访问受防火墙限制时，需要先配置防火墙，允许访问声网提供的特定 IP 地址和端口，然后调用该方法启用云代理，并通过 \`proxyType\` 参数设置云代理类型。成功连接云代理后，SDK 会触发 [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged) 回调，状态为 \`CONNECTION_STATE_CONNECTING\`，原因为 \`CONNECTION_CHANGED_SETTING_PROXY_SERVER\`。 如需关闭已设置的云代理，请调用 [setCloudProxy](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy)，并将 \`proxyType\` 设置为 \`TRANSPORT_TYPE_NONE_PROXY\`。 如需切换云代理类型，请先调用 [setCloudProxy](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy) 关闭当前代理（\`proxyType\` 设置为 \`TRANSPORT_TYPE_NONE_PROXY\` ），再调用 [setCloudProxy](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy) 设置新的 \`proxyType\`。

注：

* 建议在加入频道前调用该方法。
* 当用户处于防火墙之后并使用强制 UDP 云代理时，媒体推流和跨频道联播服务不可用。
* 使用强制 TCP 云代理时，调用 startAudioMixing 播放 HTTP 协议的在线音乐文件会报错。媒体推流和跨频道联播服务使用 TCP 协议的云代理。

<a id="api_irtcengine_setcloudproxy__parameters" />

### 参数 [#参数-12]

#### \`proxyType\` [#proxytype]

云代理的类型：

* TRANSPORT\\_TYPE\\_NONE\\_PROXY (0)：自动模式。SDK 默认启用该模式。在此模式下，SDK 会尝试直接连接 SD-RTN™，若失败则自动切换至 TCP/TLS 443。
* TRANSPORT\\_TYPE\\_UDP\\_PROXY (1)：UDP 协议的云代理，即强制 UDP 云代理模式。在此模式下，SDK 始终通过 UDP 传输数据。
* TRANSPORT\\_TYPE\\_TCP\\_PROXY (2)：TCP（加密）协议的云代理，即强制 TCP 云代理模式。在此模式下，SDK 始终通过 TCP/TLS 443 传输数据。

<a id="api_irtcengine_setcloudproxy__return_values" />

### 返回值 [#返回值-20]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。
  * -7：SDK 未初始化。

### 所属接口类 [#所属接口类-20]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlocalaccesspoint" />

## setLocalAccessPoint [#setlocalaccesspoint]

配置连接到声网私有媒体服务器接入模块。

<a id="api_irtcengine_setlocalaccesspoint__prototype" />

\`\`\`java
public abstract int setLocalAccessPoint(LocalAccessPointConfiguration config);
\`\`\`

<a id="api_irtcengine_setlocalaccesspoint__detailed_desc" />

成功部署声网混合云解决方案并将 4.x RTC SDK 集成到内网客户端后，可以调用该方法指定本地接入点，并将接入模块分配给 SDK。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法仅在部署声网混合云解决方案后生效。你可以联系销售了解并部署声网混合云。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setlocalaccesspoint__timing" />

### 调用时机 [#调用时机-7]

必须在加入频道前调用该方法。

<a id="api_irtcengine_setlocalaccesspoint__parameters" />

### 参数 [#参数-13]

#### \`config\` [#config-2]

本地接入点配置。详见 [LocalAccessPointConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localaccesspointconfiguration)。

<a id="api_irtcengine_setlocalaccesspoint__return_values" />

### 返回值 [#返回值-21]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-21]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlogfile" />

## setLogFile [#setlogfile]

设置 SDK 输出日志文件。

<a id="api_irtcengine_setlogfile__prototype" />

\`\`\`java
public abstract int setLogFile(String filePath);
\`\`\`

<a id="api_irtcengine_setlogfile__detailed_desc" />

#### \`废弃\` [#废弃-1]

该方法已废弃，请在调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 时通过 \`config\` 参数设置日志文件路径。

该方法需在调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 后立即调用，否则输出日志可能不完整。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    确保日志文件所在目录存在且可写。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setlogfile__timing" />

### 调用时机 [#调用时机-8]

该方法需在调用 [create](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_create_ilocalspatialaudioengine) 后立即调用，否则输出日志可能不完整。

<a id="api_irtcengine_setlogfile__parameters" />

### 参数 [#参数-14]

#### \`filePath\` [#filepath]

日志文件的完整路径，日志文件使用 UTF-8 编码。

<a id="api_irtcengine_setlogfile__return_values" />

### 返回值 [#返回值-22]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-22]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlogfilesize" />

## setLogFileSize [#setlogfilesize]

设置 SDK 日志文件的大小。

<a id="api_irtcengine_setlogfilesize__prototype" />

\`\`\`java
public abstract int setLogFileSize(long fileSizeInKBytes);
\`\`\`

<a id="api_irtcengine_setlogfilesize__detailed_desc" />

#### \`废弃\` [#废弃-2]

该方法已废弃，请改用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 中的 \`logConfig\` 参数设置日志文件大小。

默认情况下，SDK 会生成五个 SDK 日志文件和五个 API 调用日志文件，规则如下：

* SDK 日志文件包括： agorasdk.log、 agorasdk.1.log、 agorasdk.2.log、 agorasdk.3.log 和 agorasdk.4.log。
* API 调用日志文件包括： agoraapi.log、 agoraapi.1.log、 agoraapi.2.log、 agoraapi.3.log 和 agoraapi.4.log。
* 每个日志文件的默认大小为 2,048 KB，采用 UTF-8 编码。
* SDK 会将最新日志写入 agorasdk.log 或 agoraapi.log 文件。
* 当 agorasdk.log 写满时，SDK 会按以下顺序处理日志文件：
  1. 删除 agorasdk.4.log （如果存在）。
  2. 将 agorasdk.3.log 重命名为 agorasdk.4.log。
  3. 将 agorasdk.2.log 重命名为 agorasdk.3.log。
  4. 将 agorasdk.1.log 重命名为 agorasdk.2.log。
  5. 创建新的 agorasdk.log 文件。
* agoraapi.log 的覆盖规则与 agorasdk.log 相同。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [setLogFileSize](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilesize) 仅用于设置 \`agorasdk.log\` 文件的大小，不影响 \`agoraapi.log\` 文件。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setlogfilesize__parameters" />

### 参数 [#参数-15]

#### \`fileSizeInKBytes\` [#filesizeinkbytes]

\`agorasdk.log\` 文件的大小，单位为 KB。取值范围为 \\[128, 20480]，默认值为 2,048 KB。

* 如果设置值小于 128 KB，SDK 会自动调整为 128 KB。
* 如果设置值大于 20,480 KB，SDK 会自动调整为 20,480 KB。

<a id="api_irtcengine_setlogfilesize__return_values" />

### 返回值 [#返回值-23]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-23]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlogfilter" />

## setLogFilter [#setlogfilter]

设置 SDK 的日志输出等级。

<a id="api_irtcengine_setlogfilter__prototype" />

\`\`\`java
public abstract int setLogFilter(int filter);
\`\`\`

<a id="api_irtcengine_setlogfilter__detailed_desc" />

#### \`废弃\` [#废弃-3]

该方法已废弃，请改用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 中的 \`logConfig\`。

你可以使用一个或多个日志过滤等级的组合。日志等级的顺序为 \`LOG_FILTER_OFF\`、 \`LOG_FILTER_CRITICAL\`、 \`LOG_FILTER_ERROR\`、 \`LOG_FILTER_WARN\`、 \`LOG_FILTER_INFO\` 和 \`LOG_FILTER_DEBUG\`。选择一个等级可以查看该等级及其之前的日志信息。例如，如果将日志等级设置为 \`LOG_FILTER_WARN\`，你将看到 \`LOG_FILTER_CRITICAL\`、 \`LOG_FILTER_ERROR\` 和 \`LOG_FILTER_WARN\` 等级的日志信息。

<a id="api_irtcengine_setlogfilter__parameters" />

### 参数 [#参数-16]

#### \`filter\` [#filter]

SDK 的日志输出等级。

* LOG\\_FILTER\\_OFF (0)：不输出任何日志信息。
* LOG\\_FILTER\\_DEBUG (0x080f)：输出所有日志信息。如果你希望获取最完整的日志文件，请将日志过滤等级设置为 LOG\\_FILTER\\_DEBUG。
* LOG\\_FILTER\\_INFO (0x0f)：输出 LOG\\_FILTER\\_CRITICAL、 LOG\\_FILTER\\_ERROR、 LOG\\_FILTER\\_WARN 和 LOG\\_FILTER\\_INFO 等级的日志信息。建议将日志等级设置为该等级。
* LOG\\_FILTER\\_WARN (0x0e)：输出 LOG\\_FILTER\\_CRITICAL、 LOG\\_FILTER\\_ERROR 和 LOG\\_FILTER\\_WARN 等级的日志信息。
* LOG\\_FILTER\\_ERROR (0x0c)：输出 LOG\\_FILTER\\_CRITICAL 和 LOG\\_FILTER\\_ERROR 等级的日志信息。
* LOG\\_FILTER\\_CRITICAL (0x08)：仅输出 LOG\\_FILTER\\_CRITICAL 等级的日志信息。

<a id="api_irtcengine_setlogfilter__return_values" />

### 返回值 [#返回值-24]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-24]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setloglevel" />

## setLogLevel [#setloglevel]

设置 SDK 的输出日志等级。

<a id="api_irtcengine_setloglevel__prototype" />

\`\`\`java
public abstract int setLogLevel(int level);
\`\`\`

<a id="api_irtcengine_setloglevel__detailed_desc" />

#### \`废弃\` [#废弃-4]

该方法已废弃，请在调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 时通过 \`config\` 参数设置日志输出级别。

选择一个日志等级，以查看该等级及更高级别的日志信息。

<a id="api_irtcengine_setloglevel__parameters" />

### 参数 [#参数-17]

#### \`level\` [#level]

日志等级。详见 [LogLevel](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-loglevel)。

<a id="api_irtcengine_setloglevel__return_values" />

### 返回值 [#返回值-25]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-25]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setparameters" />

## setParameters [#setparameters]

通过配置 JSON 选项，为 SDK 提供技术预览功能或特殊定制。

<a id="api_irtcengine_setparameters__prototype" />

\`\`\`java
public abstract int setParameters(String parameters);
\`\`\`

<a id="api_irtcengine_setparameters__detailed_desc" />

<a id="api_irtcengine_setparameters__parameters" />

### 参数 [#参数-18]

#### \`parameters\` [#parameters]

用于设置参数的 JSON 字符串。

<a id="api_irtcengine_setparameters__return_values" />

### 返回值 [#返回值-26]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-26]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setremotesubscribefallbackoption" />

## setRemoteSubscribeFallbackOption \\[1/2] [#setremotesubscribefallbackoption-12]

根据网络状况设置订阅端的视频流回退选项。

<a id="api_irtcengine_setremotesubscribefallbackoption__prototype" />

\`\`\`java
public abstract int setRemoteSubscribeFallbackOption(Constants.StreamFallbackOptions option);
\`\`\`

<a id="api_irtcengine_setremotesubscribefallbackoption__detailed_desc" />

如果将 \`option\` 设置为 \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW\` 或 \`STREAM_FALLBACK_OPTION_AUDIO_ONLY\`，当下行网络无法同时支持音视频时，SDK 会自动将视频从高质量流切换为低质量流，或关闭视频以保障音频质量。SDK 会持续监测网络质量，在网络改善时恢复音视频流的订阅。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当订阅的视频流回退为纯音频流，或从纯音频流恢复为音视频流时，SDK 会触发 [onRemoteSubscribeFallbackToAudioOnly](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly) 回调。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setremotesubscribefallbackoption__parameters" />

### 参数 [#参数-19]

#### \`option\` [#option]

订阅流的回退选项。详见 [StreamFallbackOptions](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-streamfallbackoptions)。

<a id="api_irtcengine_setremotesubscribefallbackoption__return_values" />

### 返回值 [#返回值-27]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-27]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setremotesubscribefallbackoption2" />

## setRemoteSubscribeFallbackOption \\[2/2] [#setremotesubscribefallbackoption-22]

根据网络状况设置已订阅视频流的回退选项。

<a id="api_irtcengine_setremotesubscribefallbackoption2__prototype" />

\`\`\`java
public abstract int setRemoteSubscribeFallbackOption(int option)
\`\`\`

<a id="api_irtcengine_setremotesubscribefallbackoption2__detailed_desc" />

#### \`废弃\` [#废弃-5]

该方法已废弃。

不稳定的网络会影响视频通话或互动直播中的音视频质量。当下行网络无法同时支持音视频时，若将 \`option\` 设置为 \`STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW\` 或 \`STREAM_FALLBACK_OPTION_AUDIO_ONLY\`，SDK 会自动将视频从高质量流切换为低质量流，或关闭视频以保障音频质量。SDK 会持续监测网络质量，在网络改善后恢复订阅音视频流。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当已订阅的视频流回退为纯音频流，或从纯音频流恢复为音视频流时，SDK 会触发 [onRemoteSubscribeFallbackToAudioOnly](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly) 回调。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setremotesubscribefallbackoption2__parameters" />

### 参数 [#参数-20]

#### \`option\` [#option-1]

已订阅流的回退选项：

* STREAM\\_FALLBACK\\_OPTION\\_DISABLED （0）：不对音视频流进行回退处理，无法保证音视频质量。
* STREAM\\_FALLBACK\\_OPTION\\_VIDEO\\_STREAM\\_LOW （1）：（默认）在下行网络较差时，订阅的远端视频流回退为低质量（低分辨率、低码率）的视频流。
* STREAM\\_FALLBACK\\_OPTION\\_AUDIO\\_ONLY （2）：在网络条件较差时，优先尝试接收视频小流；若因网络极差无法显示视频，则回退为仅接收音频流。

<a id="api_irtcengine_setremotesubscribefallbackoption2__return_values" />

### 返回值 [#返回值-28]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-28]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startechotest3" />

## startEchoTest [#startechotest]

开始音视频设备回路测试。

<a id="api_irtcengine_startechotest3__prototype" />

\`\`\`java
public abstract int startEchoTest(EchoTestConfiguration config);
\`\`\`

<a id="api_irtcengine_startechotest3__detailed_desc" />

你可以调用该方法执行一次音视频通话回路测试，用于检测音视频设备以及用户上下行网络是否正常工作。开始测试后，用户需要发出声音或面对摄像头，音频或视频将在约两秒后输出。

注：

* 在频道中调用该方法时，请确保未发布任何音视频流。
* 调用该方法后需调用 stopEchoTest 结束测试，否则用户无法进行下一次音视频通话回路测试，也无法加入频道。
* 在直播场景中，该方法仅适用于主播。

<a id="api_irtcengine_startechotest3__timing" />

### 调用时机 [#调用时机-9]

你可以在加入频道前或加入频道后调用此方法。

<a id="api_irtcengine_startechotest3__parameters" />

### 参数 [#参数-21]

#### \`config\` [#config-3]

音视频通话回路测试的配置。详见 [EchoTestConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-echotestconfiguration)。

<a id="api_irtcengine_startechotest3__return_values" />

### 返回值 [#返回值-29]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-29]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startlastmileprobetest" />

## startLastmileProbeTest [#startlastmileprobetest]

开始 Last-mile 网络探测测试。

<a id="api_irtcengine_startlastmileprobetest__prototype" />

\`\`\`java
public abstract int startLastmileProbeTest(LastmileProbeConfig config);
\`\`\`

<a id="api_irtcengine_startlastmileprobetest__detailed_desc" />

该方法在加入频道前启动 Last-mile 网络探测测试，用于获取上行和下行的网络统计信息，包括带宽、丢包率、抖动和往返时延（RTT）。

注： 调用时序：在收到 [onLastmileQuality](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmilequality) 和 [onLastmileProbeResult](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmileproberesult) 回调前，请勿调用其他方法，否则可能会中断这些回调。 相关回调：成功调用该方法后，SDK 会依次触发以下两个回调：

* onLastmileQuality：SDK 会在约两秒内根据网络状况触发该回调。该回调用于评估网络质量，与用户体验更相关。
* onLastmileProbeResult：SDK 会在约 30 秒内根据网络状况触发该回调。该回调返回网络状况的实时统计数据，更加客观。

<a id="api_irtcengine_startlastmileprobetest__parameters" />

### 参数 [#参数-22]

#### \`config\` [#config-4]

Last-mile 网络探测测试的配置。详见 [LastmileProbeConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lastmileprobeconfig)。

<a id="api_irtcengine_startlastmileprobetest__return_values" />

### 返回值 [#返回值-30]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-30]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stopechotest" />

## stopEchoTest [#stopechotest]

停止音频通话测试。

<a id="api_irtcengine_stopechotest__prototype" />

\`\`\`java
public abstract int stopEchoTest();
\`\`\`

<a id="api_irtcengine_stopechotest__detailed_desc" />

调用 [startEchoTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3) 后，必须调用该方法结束测试，否则你无法进行下一次音视频通话回路测试，也无法加入频道。

<a id="api_irtcengine_stopechotest__return_values" />

### 返回值 [#返回值-31]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -5：停止回声测试失败，可能未在运行回声测试。

### 所属接口类 [#所属接口类-31]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stoplastmileprobetest" />

## stopLastmileProbeTest [#stoplastmileprobetest]

停止 Last-mile 网络探测测试。

<a id="api_irtcengine_stoplastmileprobetest__prototype" />

\`\`\`java
public abstract int stopLastmileProbeTest();
\`\`\`

<a id="api_irtcengine_stoplastmileprobetest__detailed_desc" />

<a id="api_irtcengine_stoplastmileprobetest__return_values" />

### 返回值 [#返回值-32]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-32]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onconnectionbanned" />

## onConnectionBanned [#onconnectionbanned]

连接被声网服务器封禁时触发的回调。

<a id="callback_irtcengineeventhandler_onconnectionbanned__prototype" />

\`\`\`java
public void onConnectionBanned() {}
\`\`\`

<a id="callback_irtcengineeventhandler_onconnectionbanned__detailed_desc" />

#### \`废弃\` [#废弃-6]

该方法已废弃，请改用 [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged)。

<a id="callback_irtcengineeventhandler_onconnectionbanned__timing" />

### 触发时机 [#触发时机]

该回调在连接被声网服务器封禁时被触发。

### 所属接口类 [#所属接口类-33]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onconnectioninterrupted" />

## onConnectionInterrupted [#onconnectioninterrupted]

onConnectionInterrupted 回调。

<a id="callback_irtcengineeventhandler_onconnectioninterrupted__prototype" />

\`\`\`java
public void onConnectionInterrupted() {}
\`\`\`

<a id="callback_irtcengineeventhandler_onconnectioninterrupted__detailed_desc" />

#### \`废弃\` [#废弃-7]

该方法已废弃，请改用 [onConnectionStateChanged](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged)。

该回调在 SDK 建立连接后与服务器断开连接超过四秒时被触发。触发该回调后，SDK 会尝试重新连接服务器。你可以通过该回调实现弹窗提醒功能。 该回调与 [onConnectionLost](/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionlost) 的区别如下：

* 当 SDK 成功加入频道后，与服务器断开连接超过四秒时，会触发 onConnectionInterrupted 回调。
* 无论是否加入频道，当 SDK 与服务器断开连接超过 10 秒时，会触发 onConnectionLost 回调。

如果 SDK 在与声网边缘服务器断开连接后 20 分钟内仍未重新加入频道，则停止重连。

<a id="callback_irtcengineeventhandler_onconnectioninterrupted__timing" />

### 触发时机 [#触发时机-1]

该回调在 SDK 与服务器断开连接超过四秒时被触发。

### 所属接口类 [#所属接口类-34]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onconnectionlost" />

## onConnectionLost [#onconnectionlost]

onConnectionLost 回调：当 SDK 在连接中断后 10 秒内无法重新连接到声网边缘服务器时触发。

<a id="callback_irtcengineeventhandler_onconnectionlost__prototype" />

\`\`\`java
public void onConnectionLost() {}
\`\`\`

<a id="callback_irtcengineeventhandler_onconnectionlost__detailed_desc" />

无论是否在频道中，当调用 \`joinChannel\` 方法后，SDK 在连接中断后 10 秒内无法连接到服务器时会触发该回调。如果 SDK 在与声网边缘服务器断开连接后 20 分钟内仍无法重新加入频道，则停止重连。

<a id="callback_irtcengineeventhandler_onconnectionlost__timing" />

### 触发时机 [#触发时机-2]

该回调在调用 \`joinChannel\` 后，SDK 与服务器连接中断并在 10 秒内无法重新连接时被触发。

### 所属接口类 [#所属接口类-35]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onconnectionstatechanged" />

## onConnectionStateChanged [#onconnectionstatechanged]

网络连接状态发生变化回调。

<a id="callback_irtcengineeventhandler_onconnectionstatechanged__prototype" />

\`\`\`java
public void onConnectionStateChanged(int state, int reason)
\`\`\`

<a id="callback_irtcengineeventhandler_onconnectionstatechanged__detailed_desc" />

#### \`自从\` [#自从-1]

自 v2.3.2 版本新增。

SDK 会在网络连接状态发生变化时触发该回调，并报告当前的连接状态及其变化原因。

<a id="callback_irtcengineeventhandler_onconnectionstatechanged__timing" />

### 触发时机 [#触发时机-3]

该回调在网络连接状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onconnectionstatechanged__parameters" />

### 参数 [#参数-23]

#### \`state\` [#state]

当前的连接状态：

* CONNECTION\\_STATE\\_DISCONNECTED (1)：SDK 与声网边缘服务器断开连接。
* CONNECTION\\_STATE\\_CONNECTING (2)：SDK 正在连接声网边缘服务器。
* CONNECTION\\_STATE\\_CONNECTED (3)：SDK 已连接到声网边缘服务器。
* CONNECTION\\_STATE\\_RECONNECTING (4)：SDK 尝试重新连接声网边缘服务器。
* CONNECTION\\_STATE\\_FAILED (5)：SDK 连接声网边缘服务器失败。

#### \`reason\` [#reason]

连接状态变化的原因：

* CONNECTION\\_CHANGED\\_CONNECTING (0)：SDK 正在连接声网边缘服务器。
* CONNECTION\\_CHANGED\\_JOIN\\_SUCCESS (1)：SDK 成功加入频道。
* CONNECTION\\_CHANGED\\_INTERRUPTED (2)：SDK 与声网边缘服务器之间的连接中断。
* CONNECTION\\_CHANGED\\_BANNED\\_BY\\_SERVER (3)：连接被声网服务器禁止，例如用户被踢出频道时会返回该错误码。
* CONNECTION\\_CHANGED\\_JOIN\\_FAILED (4)：SDK 加入频道失败。若超过 20 分钟未能加入频道，SDK 会停止重连并返回该错误码。你需要提示用户尝试切换网络并重新加入频道。
* CONNECTION\\_CHANGED\\_LEAVE\\_CHANNEL (5)：SDK 已离开频道。
* CONNECTION\\_CHANGED\\_INVALID\\_APP\\_ID (6)：无效的 App ID。你需要使用有效的 App ID 重新加入频道，并确保该 App ID 与声网控制台中生成的一致。
* CONNECTION\\_CHANGED\\_INVALID\\_CHANNEL\\_NAME (7)：无效的频道名。请使用有效的频道名重新加入频道。有效的频道名为不超过 64 字节的字符串，支持的字符包括：
  * 所有小写英文字母：a 到 z。
  * 所有大写英文字母：A 到 Z。
  * 所有数字字符：0 到 9。
  * 特殊字符：!, #, $, %, &, (,), +, -,:,;, \\<, =,., >,?, @, \\[,], ^, \\_, \\{, }, |, \\~,,。
* CONNECTION\\_CHANGED\\_INVALID\\_TOKEN (8)：无效的 Token。可能原因包括：
  * 项目在声网控制台启用了 App Certificate，但加入频道时未传入 Token。
  * 调用 joinChannel 加入频道时指定的 uid 与生成 Token 时传入的 uid 不一致。
  * 使用的 Token 与生成的 Token 不一致。

请确保：

* 项目启用 App Certificate 时，加入频道必须传入 Token。

* 生成 Token 时指定的用户 ID 与加入频道时使用的用户 ID 一致。

* 使用的 Token 与生成的 Token 一致。

* CONNECTION\\_CHANGED\\_TOKEN\\_EXPIRED (9)：当前使用的 Token 已过期。你需要在服务器上生成新的 Token，并使用新 Token 重新加入频道。

* CONNECTION\\_CHANGED\\_REJECTED\\_BY\\_SERVER (10)：用户被服务器禁止。

* CONNECTION\\_CHANGED\\_SETTING\\_PROXY\\_SERVER (11)：设置代理服务器后，SDK 尝试重新连接。

* CONNECTION\\_CHANGED\\_RENEW\\_TOKEN (12)：由于 Token 被更新，连接状态发生变化。

* CONNECTION\\_CHANGED\\_CLIENT\\_IP\\_ADDRESS\\_CHANGED (13)：客户端 IP 地址发生变化。如果多次收到该错误码，你需要提示用户切换网络并重新加入频道。

* CONNECTION\\_CHANGED\\_KEEP\\_ALIVE\\_TIMEOUT (14)：SDK 与声网边缘服务器之间的连接保活超时，SDK 会自动尝试重新连接。

* CONNECTION\\_CHANGED\\_REJOIN\\_SUCCESS (15)：SDK 成功重新加入频道。

* CONNECTION\\_CHANGED\\_LOST (16)：SDK 与服务器之间的连接丢失。

* CONNECTION\\_CHANGED\\_ECHO\\_TEST (17)：由于回声测试，连接状态发生变化。

* CONNECTION\\_CHANGED\\_CLIENT\\_IP\\_ADDRESS\\_CHANGED\\_BY\\_USER (18)：本地 IP 地址被用户更改。

* CONNECTION\\_CHANGED\\_SAME\\_UID\\_LOGIN (19)：用户在不同设备上以相同的 uid 加入同一频道。注意：以相同 uid 加入同一 RTC 频道属于未定义行为，声网不保证在相同情况下始终触发该错误码。

* CONNECTION\\_CHANGED\\_TOO\\_MANY\\_BROADCASTERS (20)：频道中的主播数量已达上限。

### 所属接口类 [#所属接口类-36]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onencryptionerror" />

## onEncryptionError [#onencryptionerror]

内置加密错误回调。

<a id="callback_irtcengineeventhandler_onencryptionerror__prototype" />

\`\`\`java
public void onEncryptionError(int errorType)
\`\`\`

<a id="callback_irtcengineeventhandler_onencryptionerror__detailed_desc" />

如果在调用 [enableEncryption](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption) 启用加密功能后，发送端或接收端在加密或解密过程中发生错误，SDK 会触发该回调。

<a id="callback_irtcengineeventhandler_onencryptionerror__timing" />

### 触发时机 [#触发时机-4]

该回调在加密或解密过程中发生错误时被触发。

<a id="callback_irtcengineeventhandler_onencryptionerror__parameters" />

### 参数 [#参数-24]

#### \`errorType\` [#errortype]

错误类型：

* ENCRYPTION\\_ERROR\\_INTERNAL\\_FAILURE （0）：内部原因。
* ENCRYPTION\\_ERROR\\_DECRYPTION\\_FAILURE （1）：媒体流解密错误。请确保接收端和发送端使用相同的加密模式和密钥。
* ENCRYPTION\\_ERROR\\_ENCRYPTION\\_FAILURE （2）：媒体流加密错误。
* ENCRYPTION\\_ERROR\\_DATASTREAM\\_DECRYPTION\\_FAILURE （3）：数据流解密错误。请确保接收端和发送端使用相同的加密模式和密钥。
* ENCRYPTION\\_ERROR\\_DATASTREAM\\_ENCRYPTION\\_FAILURE （4）：数据流加密错误。

### 所属接口类 [#所属接口类-37]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onlastmileproberesult" />

## onLastmileProbeResult [#onlastmileproberesult]

上行和下行 Last-mile 网络探测测试结果的回调。

<a id="callback_irtcengineeventhandler_onlastmileproberesult__prototype" />

\`\`\`java
public void onLastmileProbeResult(LastmileProbeResult result) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onlastmileproberesult__detailed_desc" />

该回调在调用 [startLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest) 后触发。

<a id="callback_irtcengineeventhandler_onlastmileproberesult__timing" />

### 触发时机 [#触发时机-5]

该回调在调用 [startLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest) 后 30 秒内被触发。

<a id="callback_irtcengineeventhandler_onlastmileproberesult__parameters" />

### 参数 [#参数-25]

#### \`result\` [#result]

上行和下行 Last-mile 网络探测测试结果。详见 [LastmileProbeResult](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lastmileproberesult)。

### 所属接口类 [#所属接口类-38]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onlastmilequality" />

## onLastmileQuality [#onlastmilequality]

本地用户的 Last-mile 网络质量回调。

<a id="callback_irtcengineeventhandler_onlastmilequality__prototype" />

\`\`\`java
public void onLastmileQuality(int quality)
\`\`\`

<a id="callback_irtcengineeventhandler_onlastmilequality__detailed_desc" />

该回调在用户加入频道前触发，用于上报本地用户与声网边缘服务器之间连接的 Last-mile 网络质量。在调用 [startLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest) 后，SDK 会触发该回调。

<a id="callback_irtcengineeventhandler_onlastmilequality__timing" />

### 触发时机 [#触发时机-6]

该回调在调用 [startLastmileProbeTest](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest) 方法后被触发。

<a id="callback_irtcengineeventhandler_onlastmilequality__parameters" />

### 参数 [#参数-26]

#### \`quality\` [#quality]

Last-mile 网络质量：

* QUALITY\\_UNKNOWN (0)：网络质量未知。
* QUALITY\\_EXCELLENT (1)：网络质量极好。
* QUALITY\\_GOOD (2)：网络质量较好，但码率可能略低于极好。
* QUALITY\\_POOR (3)：通信质量略有下降。
* QUALITY\\_BAD (4)：无法流畅通信。
* QUALITY\\_VBAD (5)：网络质量极差，几乎无法通信。
* QUALITY\\_DOWN (6)：网络连接已断，无法通信。
* QUALITY\\_DETECTING (8)：正在进行 Last-mile 探测。

### 所属接口类 [#所属接口类-39]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onmultipathstats" />

## onMultipathStats [#onmultipathstats]

多路径传输统计信息回调。

<a id="callback_irtcengineeventhandler_onmultipathstats__prototype" />

\`\`\`java
public void onMultipathStats(MultipathStats stats) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onmultipathstats__detailed_desc" />

#### \`自从\` [#自从-2]

自 v4.6.0 版本新增。

<a id="callback_irtcengineeventhandler_onmultipathstats__timing" />

### 触发时机 [#触发时机-7]

该回调在你将 \`enableMultipath\` 设置为 true 以启用多路径传输后被触发。

<a id="callback_irtcengineeventhandler_onmultipathstats__parameters" />

### 参数 [#参数-27]

#### \`stats\` [#stats]

多路径传输统计信息。详见 [MultipathStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-multipathstats)。

### 所属接口类 [#所属接口类-40]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onnetworkquality" />

## onNetworkQuality [#onnetworkquality]

onNetworkQuality 回调。报告频道中每个用户的 Last-mile 网络质量。

<a id="callback_irtcengineeventhandler_onnetworkquality__prototype" />

\`\`\`java
public void onNetworkQuality(int uid, int txQuality, int rxQuality)
\`\`\`

<a id="callback_irtcengineeventhandler_onnetworkquality__detailed_desc" />

该回调通过在频道内发送和接收广播数据包来反馈网络质量。过多的广播数据包可能导致广播风暴。为防止广播风暴造成频道内大量数据传输，该回调默认最多同时反馈 4 个远端用户的网络质量。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    \`txQuality\` 在用户未发送流时为 \`UNKNOWN\`； \`rxQuality\` 在用户未接收流时为 \`UNKNOWN\`。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onnetworkquality__timing" />

### 触发时机 [#触发时机-8]

该回调每两秒触发一次。

<a id="callback_irtcengineeventhandler_onnetworkquality__parameters" />

### 参数 [#参数-28]

#### \`uid\` [#uid-1]

用户 ID，用于标识被报告网络质量的用户。

* 0：表示本地用户。

#### \`txQuality\` [#txquality]

用户上行网络质量评分，依据传输码率、丢包率、平均往返时延（RTT）和抖动等指标评估。

* QUALITY\\_UNKNOWN (0)：质量未知。
* QUALITY\\_EXCELLENT (1)：质量极佳。
* QUALITY\\_GOOD (2)：网络质量看似极佳，但码率略低于极佳。
* QUALITY\\_POOR (3)：用户能感受到通信略有卡顿。
* QUALITY\\_BAD (4)：用户无法流畅通信。
* QUALITY\\_VBAD (5)：质量极差，用户几乎无法通信。
* QUALITY\\_DOWN (6)：网络连接已断，用户无法通信。
* QUALITY\\_DETECTING (8)：正在进行 Last-mile 探测测试。

#### \`rxQuality\` [#rxquality]

用户下行网络质量评分，依据丢包率、平均往返时延（RTT）和抖动等指标评估。

* QUALITY\\_UNKNOWN (0)：质量未知。
* QUALITY\\_EXCELLENT (1)：质量极佳。
* QUALITY\\_GOOD (2)：网络质量看似极佳，但码率略低于极佳。
* QUALITY\\_POOR (3)：用户能感受到通信略有卡顿。
* QUALITY\\_BAD (4)：用户无法流畅通信。
* QUALITY\\_VBAD (5)：质量极差，用户几乎无法通信。
* QUALITY\\_DOWN (6)：网络连接已断，用户无法通信。
* QUALITY\\_DETECTING (8)：正在进行 Last-mile 探测测试。

### 所属接口类 [#所属接口类-41]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onnetworktypechanged" />

## onNetworkTypeChanged [#onnetworktypechanged]

本地网络类型发生变化时的回调。

<a id="callback_irtcengineeventhandler_onnetworktypechanged__prototype" />

\`\`\`java
public void onNetworkTypeChanged(int type)
\`\`\`

<a id="callback_irtcengineeventhandler_onnetworktypechanged__detailed_desc" />

你可以通过该回调获取连接状态及其变化原因。当网络连接中断时，该回调会指示中断是由于网络类型变化还是由于网络状况不佳导致的。

<a id="callback_irtcengineeventhandler_onnetworktypechanged__timing" />

### 触发时机 [#触发时机-9]

该回调在本地网络类型发生变化时被触发。

<a id="callback_irtcengineeventhandler_onnetworktypechanged__parameters" />

### 参数 [#参数-29]

#### \`type\` [#type-1]

网络类型：

* NETWORK\\_TYPE\\_UNKNOWN （-1）：网络类型未知。
* NETWORK\\_TYPE\\_DISCONNECTED （0）：SDK 与网络断开连接。
* NETWORK\\_TYPE\\_LAN （1）：网络类型为 LAN。
* NETWORK\\_TYPE\\_WIFI （2）：网络类型为 Wi-Fi（包括热点）。
* NETWORK\\_TYPE\\_MOBILE\\_2G （3）：网络类型为移动 2G。
* NETWORK\\_TYPE\\_MOBILE\\_3G （4）：网络类型为移动 3G。
* NETWORK\\_TYPE\\_MOBILE\\_4G （5）：网络类型为移动 4G。
* NETWORK\\_TYPE\\_MOBILE\\_5G （6）：网络类型为移动 5G。

### 所属接口类 [#所属接口类-42]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onpermissionerror" />

## onPermissionError [#onpermissionerror]

设备权限获取失败时触发的回调。

<a id="callback_irtcengineeventhandler_onpermissionerror__prototype" />

\`\`\`java
public void onPermissionError(int permission)
\`\`\`

<a id="callback_irtcengineeventhandler_onpermissionerror__detailed_desc" />

该回调在 SDK 无法获取设备权限时被触发，用于报告无法获取的权限类型。

<a id="callback_irtcengineeventhandler_onpermissionerror__timing" />

### 触发时机 [#触发时机-10]

该回调在 SDK 无法获取设备权限时被触发。

<a id="callback_irtcengineeventhandler_onpermissionerror__parameters" />

### 参数 [#参数-30]

#### \`permission\` [#permission]

设备权限的类型：

* RECORD\\_AUDIO （0）：音频采集设备的权限。
* CAMERA （1）：摄像头的权限。
* SCREEN\\_CAPTURE （2）：屏幕共享的权限。

### 所属接口类 [#所属接口类-43]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onpermissiongranted" />

## onPermissionGranted [#onpermissiongranted]

onPermissionGranted 回调。用于上报已授予的权限。

<a id="callback_irtcengineeventhandler_onpermissiongranted__prototype" />

\`\`\`java
public void onPermissionGranted(int permission)
\`\`\`

<a id="callback_irtcengineeventhandler_onpermissiongranted__detailed_desc" />

<a id="callback_irtcengineeventhandler_onpermissiongranted__parameters" />

### 参数 [#参数-31]

#### \`permission\` [#permission-1]

权限类型。包括：

* RECORD\\_AUDIO：录音权限。
* CAMERA：摄像头权限。
* SCREEN\\_CAPTURE：屏幕采集权限。

### 所属接口类 [#所属接口类-44]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onproxyconnected" />

## onProxyConnected [#onproxyconnected]

代理连接状态回调。

<a id="callback_irtcengineeventhandler_onproxyconnected__prototype" />

\`\`\`java
public void onProxyConnected(String channel, int uid, int proxyType, String localProxyIp, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onproxyconnected__detailed_desc" />

当用户调用 [setCloudProxy](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy) 并成功加入频道后，SDK 会触发该回调，报告用户 ID、连接的代理类型，以及从调用 \`joinChannel\` 到触发该回调所经历的时间（毫秒）。

<a id="callback_irtcengineeventhandler_onproxyconnected__timing" />

### 触发时机 [#触发时机-11]

该回调在用户调用 [setCloudProxy](/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy) 并成功加入频道后被触发。

<a id="callback_irtcengineeventhandler_onproxyconnected__parameters" />

### 参数 [#参数-32]

#### \`channel\` [#channel]

频道名。

#### \`uid\` [#uid-2]

用户 ID。

#### \`proxyType\` [#proxytype-1]

连接的代理类型：

* PROXY\\_TYPE\\_NONE\\_PROXY （0）：预留参数。
* PROXY\\_TYPE\\_UDP\\_CLOUD\\_PROXY （1）：UDP 协议的云代理，即强制 UDP 云代理模式。在该模式下，SDK 始终通过 UDP 传输数据。
* PROXY\\_TYPE\\_TCP\\_CLOUD\\_PROXY （2）：TCP（加密）协议的云代理，即强制 TCP 云代理模式。在该模式下，SDK 始终通过 TCP/TLS 443 传输数据。
* PROXY\\_TYPE\\_LOCAL\\_PROXY （3）：预留参数。
* PROXY\\_TYPE\\_TCP\\_AUTO\\_FALLBACK （4）：自动模式。在该模式下，SDK 会尝试直接连接 SD-RTN™，如果失败则自动切换到 TCP/TLS 443。

#### \`localProxyIp\` [#localproxyip]

预留参数。

#### \`elapsed\` [#elapsed]

从调用 \`joinChannel\` 到触发该回调所经历的时间（毫秒）。

### 所属接口类 [#所属接口类-45]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly" />

## onRemoteSubscribeFallbackToAudioOnly [#onremotesubscribefallbacktoaudioonly]

onRemoteSubscribeFallbackToAudioOnly 回调。当远端媒体流因网络变化在音频流与视频流之间切换时触发。

<a id="callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly__prototype" />

\`\`\`java
public void onRemoteSubscribeFallbackToAudioOnly(int uid, boolean isFallbackOrRecover)
\`\`\`

<a id="callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly__detailed_desc" />

如果你调用了 \`setRemoteSubscribeFallbackOption\` 并将 \`option\` 设置为 \`STREAM_FALLBACK_OPTION_AUDIO_ONLY\`，SDK 会在以下情况下触发该回调：

* 下行网络条件较差，已订阅的视频流降级为纯音频流。
* 下行网络条件改善，已订阅的流恢复为视频流。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你可以在 [onRemoteVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats) 回调中监控高质量与视频小流之间的切换。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly__timing" />

### 触发时机 [#触发时机-12]

该回调在远端媒体流因网络变化在音频流与视频流之间切换时被触发。

<a id="callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly__parameters" />

### 参数 [#参数-33]

#### \`uid\` [#uid-3]

远端用户 ID。

#### \`isFallbackOrRecover\` [#isfallbackorrecover]

是否因网络变化触发音视频切换：

* true：由于网络条件差，已订阅的媒体流降级为纯音频流。
* false：网络条件改善后，已订阅的媒体流恢复为视频流。

### 所属接口类 [#所属接口类-46]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onuplinknetworkinfoupdated" />

## onUplinkNetworkInfoUpdated [#onuplinknetworkinfoupdated]

上行网络信息发生变化回调。

<a id="callback_irtcengineeventhandler_onuplinknetworkinfoupdated__prototype" />

\`\`\`java
public void onUplinkNetworkInfoUpdated(UplinkNetworkInfo info) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onuplinknetworkinfoupdated__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该回调仅适用于将外部编码的 H.264 格式视频数据推送到 SDK 的场景。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onuplinknetworkinfoupdated__timing" />

### 触发时机 [#触发时机-13]

该回调在上行网络信息发生变化时被触发。

<a id="callback_irtcengineeventhandler_onuplinknetworkinfoupdated__parameters" />

### 参数 [#参数-34]

#### \`info\` [#info]

上行网络信息，详见 [UplinkNetworkInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-uplinknetworkinfo)。

### 所属接口类 [#所属接口类-47]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "complain",
    content: "允许你在通话结束后投诉通话质量。"
  }, {
    heading: "complain",
    content: "请在用户离开频道后调用该方法。"
  }, {
    heading: "callid",
    content: "当前通话的 Call ID。你可以通过调用 getCallId 获取。"
  }, {
    heading: "description",
    content: "（可选）对通话的描述。字符串长度应小于 800 字节。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值",
    content: "-1：发生通用错误（无明确原因）。"
  }, {
    heading: "返回值",
    content: "-2：参数无效。"
  }, {
    heading: "返回值",
    content: "-7：在 RtcEngine 初始化之前调用该方法。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "enableencryption",
    content: "启用或关闭内置加密功能。"
  }, {
    heading: "enableencryption",
    content: "用户离开频道后，SDK 会自动关闭内置加密功能。请在用户重新加入频道前调用该方法。"
  }, {
    heading: "enableencryption",
    content: "注："
  }, {
    heading: "enableencryption",
    content: "同一频道内的所有用户在调用该方法时必须设置相同的加密配置。"
  }, {
    heading: "enableencryption",
    content: "启用内置加密功能后，无法使用旁路推流功能。"
  }, {
    heading: "适用场景",
    content: "适用于安全性要求较高的场景。"
  }, {
    heading: "调用时机",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "enabled",
    content: "是否启用内置加密功能："
  }, {
    heading: "enabled",
    content: "true：启用内置加密功能。"
  }, {
    heading: "enabled",
    content: "false：（默认）关闭内置加密功能。"
  }, {
    heading: "config",
    content: "内置加密配置。详见 EncryptionConfig。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-1",
    content: "-2：参数无效。请传入有效参数。"
  }, {
    heading: "返回值-1",
    content: "-4：内置加密模式错误或 SDK 加载外部加密库失败。请检查枚举值或重新加载外部加密库。"
  }, {
    heading: "返回值-1",
    content: "-7：SDK 未初始化。请先初始化 RtcEngine 实例后再调用该方法。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "enableencryptionex",
    content: "启用或关闭内置加密功能。"
  }, {
    heading: "enableencryptionex",
    content: "用户离开频道后，SDK 会自动关闭内置加密。你需要在用户重新加入频道前调用该方法。"
  }, {
    heading: "enableencryptionex",
    content: "注："
  }, {
    heading: "enableencryptionex",
    content: "同一频道内的所有用户在调用该方法时必须设置相同的加密配置。"
  }, {
    heading: "enableencryptionex",
    content: "启用内置加密后，无法使用旁路推流功能。"
  }, {
    heading: "适用场景-1",
    content: "适用于多频道场景，或对安全性要求较高的场景。"
  }, {
    heading: "调用时机-1",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "enabled-1",
    content: "是否启用内置加密："
  }, {
    heading: "enabled-1",
    content: "true：启用内置加密。"
  }, {
    heading: "enabled-1",
    content: "false：（默认）关闭内置加密。"
  }, {
    heading: "config-1",
    content: "内置加密配置。详见 EncryptionConfig。"
  }, {
    heading: "connection",
    content: "连接信息。详见 RtcConnection。"
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
    heading: "enablewebsdkinteroperability",
    content: "启用或关闭与声网 Web SDK 的互通功能，仅适用于直播场景。"
  }, {
    heading: "废弃",
    content: "该方法已废弃。SDK 自动开启与 Web SDK 的互通，无需调用该方法开启。"
  }, {
    heading: "废弃",
    content: "如果频道中存在 Web SDK 用户，必须调用该方法，否则 Native 用户的视频画面在 Web 端将显示为黑屏。该方法仅适用于直播场景，在语音通话场景中默认启用互通功能。"
  }, {
    heading: "enabled-2",
    content: "是否启用互通功能："
  }, {
    heading: "enabled-2",
    content: "true：启用互通功能。"
  }, {
    heading: "enabled-2",
    content: "false：（默认）关闭互通功能。"
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
    heading: "getcallid",
    content: "获取当前通话 ID。"
  }, {
    heading: "getcallid",
    content: "客户端在用户加入频道后会生成一个用于标识当前通话的 `callId`。你可以调用 getCallId 获取 `callId`，并在调用 rate、 complain 等方法时传入该值。"
  }, {
    heading: "调用时机-2",
    content: "该方法需要在加入频道后调用。"
  }, {
    heading: "返回值-4",
    content: "方法调用成功时，返回当前通话的 callId。"
  }, {
    heading: "返回值-4",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "getcallidex",
    content: "获取与连接 ID 对应的通话 ID。"
  }, {
    heading: "getcallidex",
    content: "你可以调用该方法获取 `callId`，并在调用 rate 和 complain 等方法时传入该 ID。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-3",
    content: "请在加入频道后调用此方法。"
  }, {
    heading: "connection-1",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-5",
    content: "方法调用成功时，返回通话 ID。 方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngineEx"
  }, {
    heading: "getconnectionstate",
    content: "获取 SDK 当前的连接状态。"
  }, {
    heading: "调用时机-4",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "返回值-6",
    content: "方法调用成功，返回当前的连接状态。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngine"
  }, {
    heading: "getconnectionstateex",
    content: "获取 SDK 当前的连接状态。"
  }, {
    heading: "适用场景-3",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-5",
    content: "该方法可以在加入频道前或后调用。"
  }, {
    heading: "connection-2",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-7",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-7",
    content: "RtcEngineEx"
  }, {
    heading: "getcurrentmonotonictimeinms",
    content: "获取 SDK 当前的单调时间。"
  }, {
    heading: "getcurrentmonotonictimeinms",
    content: "在自定义视频采集和自定义音频采集场景中，为确保音视频同步，声网建议调用该方法获取 SDK 当前的单调时间，并将该值传入采集的视频帧 (`VideoFrame`) 和音频帧 (AudioFrame) 的时间戳参数中。单调时间是指一个随时间单调递增的时间序列，单位为毫秒。"
  }, {
    heading: "调用时机-6",
    content: "该方法可在加入频道前或加入频道后调用。"
  }, {
    heading: "返回值-8",
    content: "方法调用成功，返回 SDK 当前的单调时间（单位为毫秒）。"
  }, {
    heading: "返回值-8",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-8",
    content: "RtcEngine"
  }, {
    heading: "geterrordescription",
    content: "获取警告或错误码对应的描述信息。"
  }, {
    heading: "error",
    content: "SDK 报告的错误码。"
  }, {
    heading: "返回值-9",
    content: "方法调用成功时，返回错误码对应的描述信息。 方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-9",
    content: "RtcEngine"
  }, {
    heading: "getnativehandle",
    content: "获取原生 SDK 的 C++ 句柄。"
  }, {
    heading: "getnativehandle",
    content: "该方法可用于注册音频和视频帧观察器。"
  }, {
    heading: "返回值-10",
    content: "方法调用成功，返回 SDK 的原生句柄。"
  }, {
    heading: "所属接口类-10",
    content: "RtcEngine"
  }, {
    heading: "getnetworktype",
    content: "获取本地网络连接类型。"
  }, {
    heading: "getnetworktype",
    content: "你可以在任意阶段调用此方法获取当前使用的网络类型。"
  }, {
    heading: "getnetworktype",
    content: "你可以在加入频道前或后调用此方法。"
  }, {
    heading: "返回值-11",
    content: "方法调用成功，返回本地网络连接类型："
  }, {
    heading: "返回值-11",
    content: "0：SDK 与网络断开连接。"
  }, {
    heading: "返回值-11",
    content: "1：网络类型为 LAN。"
  }, {
    heading: "返回值-11",
    content: "2：网络类型为 Wi-Fi（包括热点）。"
  }, {
    heading: "返回值-11",
    content: "3：网络类型为移动 2G。"
  }, {
    heading: "返回值-11",
    content: "4：网络类型为移动 3G。"
  }, {
    heading: "返回值-11",
    content: "5：网络类型为移动 4G。"
  }, {
    heading: "返回值-11",
    content: "6：网络类型为移动 5G。"
  }, {
    heading: "返回值-11",
    content: "方法调用失败，返回错误码："
  }, {
    heading: "返回值-11",
    content: "-1：网络类型未知。"
  }, {
    heading: "所属接口类-11",
    content: "RtcEngine"
  }, {
    heading: "getntpwalltimeinms",
    content: "获取当前 NTP（网络时间协议）时间。"
  }, {
    heading: "getntpwalltimeinms",
    content: "在实时合唱场景中，尤其是当多个接收端因网络问题导致下行链路连接不一致时，可以调用该方法获取当前 NTP 时间作为参考时间，以对齐多个接收端的歌词和音乐，实现合唱同步。"
  }, {
    heading: "返回值-12",
    content: "方法调用成功，返回当前 NTP 时间的 Unix 时间戳（毫秒）。"
  }, {
    heading: "所属接口类-12",
    content: "RtcEngine"
  }, {
    heading: "getsdkversion",
    content: "获取 SDK 的版本号。"
  }, {
    heading: "返回值-13",
    content: "方法调用成功时，返回 SDK 的版本号字符串。 方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-13",
    content: "RtcEngine"
  }, {
    heading: "isfeatureavailableondevice",
    content: "检查当前设备是否支持指定的高级功能。"
  }, {
    heading: "自从",
    content: "自 v4.3.0 版本新增。"
  }, {
    heading: "自从",
    content: "在使用高级功能前，建议调用该方法判断当前设备的能力是否满足要求，以避免在低端设备上启用高级功能时出现性能下降或功能不可用的情况。你可以根据该方法的返回值决定是否显示或启用相应的功能按钮，或在设备能力不足时提示用户。"
  }, {
    heading: "type",
    content: "高级功能的类型："
  }, {
    heading: "type",
    content: "FEATURE\\_VIDEO\\_VIRTUAL\\_BACKGROUND （1）：虚拟背景。"
  }, {
    heading: "type",
    content: "FEATURE\\_VIDEO\\_BEAUTY\\_EFFECT （2）：美颜特效。"
  }, {
    heading: "返回值-14",
    content: "true：当前设备支持指定的功能。"
  }, {
    heading: "返回值-14",
    content: "false：当前设备不支持指定的功能。"
  }, {
    heading: "所属接口类-14",
    content: "RtcEngine"
  }, {
    heading: "querydevicescore",
    content: "查询设备评分。"
  }, {
    heading: "querydevicescore",
    content: "你可以调用该方法查询设备评分。如果返回的评分较低（例如低于 60），你需要降低视频分辨率，以避免影响视频体验。不同业务场景对设备评分的最低要求不同，具体评分建议请联系技术支持。"
  }, {
    heading: "返回值-15",
    content: "\\> 0：方法调用成功，返回当前设备评分，范围为 \\[0, 100]，数值越大表示设备性能越强。"
  }, {
    heading: "返回值-15",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-15",
    content: "RtcEngine"
  }, {
    heading: "rate",
    content: "允许用户在通话结束后对通话进行评分。"
  }, {
    heading: "rate",
    content: "请确保在离开频道后调用此方法。"
  }, {
    heading: "callid-1",
    content: "当前通话的 ID。你可以通过调用 getCallId 获取该 ID。"
  }, {
    heading: "rating",
    content: "评分值，范围为 1（最低分）到 5（最高分）。"
  }, {
    heading: "description-1",
    content: "（可选）对通话的描述。字符串长度应小于 800 字节。"
  }, {
    heading: "返回值-16",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-16",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-16",
    content: "-1：发生通用错误。"
  }, {
    heading: "返回值-16",
    content: "-2：参数无效。"
  }, {
    heading: "所属接口类-16",
    content: "RtcEngine"
  }, {
    heading: "sendcustomreportmessage",
    content: "上报自定义消息。"
  }, {
    heading: "sendcustomreportmessage",
    content: "该功能目前处于测试阶段，提供免费试用。在测试版本中，最多支持在 6 秒内上报 10 条消息，每条消息不超过 256 字节，每个字符串不超过 100 字节。如需试用该功能，请联系技术支持，并与我们讨论自定义消息的格式。"
  }, {
    heading: "id",
    content: "自定义消息的 ID。"
  }, {
    heading: "category",
    content: "自定义消息的类别。"
  }, {
    heading: "event",
    content: "自定义消息的事件名称。"
  }, {
    heading: "label",
    content: "自定义消息的标签。"
  }, {
    heading: "value",
    content: "自定义消息的数值。"
  }, {
    heading: "返回值-17",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-17",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-17",
    content: "RtcEngine"
  }, {
    heading: "sendcustomreportmessageex",
    content: "支持上报和分析自定义消息。"
  }, {
    heading: "sendcustomreportmessageex",
    content: "该功能目前处于测试阶段，提供免费试用。在测试版本中，最多支持在 6 秒内上报 10 条消息，每条消息不超过 256 字节，每个字符串不超过 100 字节。如需试用该功能，请联系技术支持并与我们讨论自定义消息的格式。"
  }, {
    heading: "适用场景-4",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "id-1",
    content: "自定义消息的 ID。"
  }, {
    heading: "category-1",
    content: "自定义消息的类别。"
  }, {
    heading: "event-1",
    content: "自定义消息的事件名称。"
  }, {
    heading: "label-1",
    content: "自定义消息的标签。"
  }, {
    heading: "value-1",
    content: "自定义消息的数值。"
  }, {
    heading: "connection-3",
    content: "连接信息，适用于多频道场景。详见 RtcConnection。"
  }, {
    heading: "返回值-18",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-18",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-18",
    content: "RtcEngineEx"
  }, {
    heading: "setavsyncsource",
    content: "设置发布端的音视频同步源。"
  }, {
    heading: "setavsyncsource",
    content: "你可以在视频发布设备上调用该方法，并传入音频发布设备所在频道的频道名和用户 ID。SDK 会以发送的音频流的时间戳为参考，自动调整视频流，从而确保即使两个发布设备的上行网络条件不同（例如一个使用 Wi-Fi，另一个使用 4G），接收端的音视频也能实现时间同步。"
  }, {
    heading: "setavsyncsource",
    content: "建议在加入频道前调用此方法。"
  }, {
    heading: "channelid",
    content: "音频发布设备所在频道的频道名。"
  }, {
    heading: "uid",
    content: "音频发布设备的用户 ID。"
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
    heading: "setcloudproxy",
    content: "设置云代理服务。"
  }, {
    heading: "setcloudproxy",
    content: "当用户的网络访问受防火墙限制时，需要先配置防火墙，允许访问声网提供的特定 IP 地址和端口，然后调用该方法启用云代理，并通过 `proxyType` 参数设置云代理类型。成功连接云代理后，SDK 会触发 onConnectionStateChanged 回调，状态为 `CONNECTION_STATE_CONNECTING`，原因为 `CONNECTION_CHANGED_SETTING_PROXY_SERVER`。 如需关闭已设置的云代理，请调用 setCloudProxy，并将 `proxyType` 设置为 `TRANSPORT_TYPE_NONE_PROXY`。 如需切换云代理类型，请先调用 setCloudProxy 关闭当前代理（`proxyType` 设置为 `TRANSPORT_TYPE_NONE_PROXY` ），再调用 setCloudProxy 设置新的 `proxyType`。"
  }, {
    heading: "setcloudproxy",
    content: "注："
  }, {
    heading: "setcloudproxy",
    content: "建议在加入频道前调用该方法。"
  }, {
    heading: "setcloudproxy",
    content: "当用户处于防火墙之后并使用强制 UDP 云代理时，媒体推流和跨频道联播服务不可用。"
  }, {
    heading: "setcloudproxy",
    content: "使用强制 TCP 云代理时，调用 startAudioMixing 播放 HTTP 协议的在线音乐文件会报错。媒体推流和跨频道联播服务使用 TCP 协议的云代理。"
  }, {
    heading: "proxytype",
    content: "云代理的类型："
  }, {
    heading: "proxytype",
    content: "TRANSPORT\\_TYPE\\_NONE\\_PROXY (0)：自动模式。SDK 默认启用该模式。在此模式下，SDK 会尝试直接连接 SD-RTN™，若失败则自动切换至 TCP/TLS 443。"
  }, {
    heading: "proxytype",
    content: "TRANSPORT\\_TYPE\\_UDP\\_PROXY (1)：UDP 协议的云代理，即强制 UDP 云代理模式。在此模式下，SDK 始终通过 UDP 传输数据。"
  }, {
    heading: "proxytype",
    content: "TRANSPORT\\_TYPE\\_TCP\\_PROXY (2)：TCP（加密）协议的云代理，即强制 TCP 云代理模式。在此模式下，SDK 始终通过 TCP/TLS 443 传输数据。"
  }, {
    heading: "返回值-20",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-20",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-20",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-20",
    content: "-7：SDK 未初始化。"
  }, {
    heading: "所属接口类-20",
    content: "RtcEngine"
  }, {
    heading: "setlocalaccesspoint",
    content: "配置连接到声网私有媒体服务器接入模块。"
  }, {
    heading: "setlocalaccesspoint",
    content: "成功部署声网混合云解决方案并将 4.x RTC SDK 集成到内网客户端后，可以调用该方法指定本地接入点，并将接入模块分配给 SDK。"
  }, {
    heading: "setlocalaccesspoint",
    content: "该方法仅在部署声网混合云解决方案后生效。你可以联系销售了解并部署声网混合云。"
  }, {
    heading: "调用时机-7",
    content: "必须在加入频道前调用该方法。"
  }, {
    heading: "config-2",
    content: "本地接入点配置。详见 LocalAccessPointConfiguration。"
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
    heading: "setlogfile",
    content: "设置 SDK 输出日志文件。"
  }, {
    heading: "废弃-1",
    content: "该方法已废弃，请在调用 create \\[2/2] 时通过 `config` 参数设置日志文件路径。"
  }, {
    heading: "废弃-1",
    content: "该方法需在调用 create \\[2/2] 后立即调用，否则输出日志可能不完整。"
  }, {
    heading: "废弃-1",
    content: "确保日志文件所在目录存在且可写。"
  }, {
    heading: "调用时机-8",
    content: "该方法需在调用 create 后立即调用，否则输出日志可能不完整。"
  }, {
    heading: "filepath",
    content: "日志文件的完整路径，日志文件使用 UTF-8 编码。"
  }, {
    heading: "返回值-22",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-22",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-22",
    content: "RtcEngine"
  }, {
    heading: "setlogfilesize",
    content: "设置 SDK 日志文件的大小。"
  }, {
    heading: "废弃-2",
    content: "该方法已废弃，请改用 create \\[2/2] 中的 `logConfig` 参数设置日志文件大小。"
  }, {
    heading: "废弃-2",
    content: "默认情况下，SDK 会生成五个 SDK 日志文件和五个 API 调用日志文件，规则如下："
  }, {
    heading: "废弃-2",
    content: "SDK 日志文件包括： agorasdk.log、 agorasdk.1.log、 agorasdk.2.log、 agorasdk.3.log 和 agorasdk.4.log。"
  }, {
    heading: "废弃-2",
    content: "API 调用日志文件包括： agoraapi.log、 agoraapi.1.log、 agoraapi.2.log、 agoraapi.3.log 和 agoraapi.4.log。"
  }, {
    heading: "废弃-2",
    content: "每个日志文件的默认大小为 2,048 KB，采用 UTF-8 编码。"
  }, {
    heading: "废弃-2",
    content: "SDK 会将最新日志写入 agorasdk.log 或 agoraapi.log 文件。"
  }, {
    heading: "废弃-2",
    content: "当 agorasdk.log 写满时，SDK 会按以下顺序处理日志文件："
  }, {
    heading: "废弃-2",
    content: "删除 agorasdk.4.log （如果存在）。"
  }, {
    heading: "废弃-2",
    content: "将 agorasdk.3.log 重命名为 agorasdk.4.log。"
  }, {
    heading: "废弃-2",
    content: "将 agorasdk.2.log 重命名为 agorasdk.3.log。"
  }, {
    heading: "废弃-2",
    content: "将 agorasdk.1.log 重命名为 agorasdk.2.log。"
  }, {
    heading: "废弃-2",
    content: "创建新的 agorasdk.log 文件。"
  }, {
    heading: "废弃-2",
    content: "agoraapi.log 的覆盖规则与 agorasdk.log 相同。"
  }, {
    heading: "废弃-2",
    content: "setLogFileSize 仅用于设置 `agorasdk.log` 文件的大小，不影响 `agoraapi.log` 文件。"
  }, {
    heading: "filesizeinkbytes",
    content: "`agorasdk.log` 文件的大小，单位为 KB。取值范围为 \\[128, 20480]，默认值为 2,048 KB。"
  }, {
    heading: "filesizeinkbytes",
    content: "如果设置值小于 128 KB，SDK 会自动调整为 128 KB。"
  }, {
    heading: "filesizeinkbytes",
    content: "如果设置值大于 20,480 KB，SDK 会自动调整为 20,480 KB。"
  }, {
    heading: "返回值-23",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-23",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-23",
    content: "RtcEngine"
  }, {
    heading: "setlogfilter",
    content: "设置 SDK 的日志输出等级。"
  }, {
    heading: "废弃-3",
    content: "该方法已废弃，请改用 create \\[2/2] 中的 `logConfig`。"
  }, {
    heading: "废弃-3",
    content: "你可以使用一个或多个日志过滤等级的组合。日志等级的顺序为 `LOG_FILTER_OFF`、 `LOG_FILTER_CRITICAL`、 `LOG_FILTER_ERROR`、 `LOG_FILTER_WARN`、 `LOG_FILTER_INFO` 和 `LOG_FILTER_DEBUG`。选择一个等级可以查看该等级及其之前的日志信息。例如，如果将日志等级设置为 `LOG_FILTER_WARN`，你将看到 `LOG_FILTER_CRITICAL`、 `LOG_FILTER_ERROR` 和 `LOG_FILTER_WARN` 等级的日志信息。"
  }, {
    heading: "filter",
    content: "SDK 的日志输出等级。"
  }, {
    heading: "filter",
    content: "LOG\\_FILTER\\_OFF (0)：不输出任何日志信息。"
  }, {
    heading: "filter",
    content: "LOG\\_FILTER\\_DEBUG (0x080f)：输出所有日志信息。如果你希望获取最完整的日志文件，请将日志过滤等级设置为 LOG\\_FILTER\\_DEBUG。"
  }, {
    heading: "filter",
    content: "LOG\\_FILTER\\_INFO (0x0f)：输出 LOG\\_FILTER\\_CRITICAL、 LOG\\_FILTER\\_ERROR、 LOG\\_FILTER\\_WARN 和 LOG\\_FILTER\\_INFO 等级的日志信息。建议将日志等级设置为该等级。"
  }, {
    heading: "filter",
    content: "LOG\\_FILTER\\_WARN (0x0e)：输出 LOG\\_FILTER\\_CRITICAL、 LOG\\_FILTER\\_ERROR 和 LOG\\_FILTER\\_WARN 等级的日志信息。"
  }, {
    heading: "filter",
    content: "LOG\\_FILTER\\_ERROR (0x0c)：输出 LOG\\_FILTER\\_CRITICAL 和 LOG\\_FILTER\\_ERROR 等级的日志信息。"
  }, {
    heading: "filter",
    content: "LOG\\_FILTER\\_CRITICAL (0x08)：仅输出 LOG\\_FILTER\\_CRITICAL 等级的日志信息。"
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
    heading: "setloglevel",
    content: "设置 SDK 的输出日志等级。"
  }, {
    heading: "废弃-4",
    content: "该方法已废弃，请在调用 create \\[2/2] 时通过 `config` 参数设置日志输出级别。"
  }, {
    heading: "废弃-4",
    content: "选择一个日志等级，以查看该等级及更高级别的日志信息。"
  }, {
    heading: "level",
    content: "日志等级。详见 LogLevel。"
  }, {
    heading: "返回值-25",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-25",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-25",
    content: "RtcEngine"
  }, {
    heading: "setparameters",
    content: "通过配置 JSON 选项，为 SDK 提供技术预览功能或特殊定制。"
  }, {
    heading: "parameters",
    content: "用于设置参数的 JSON 字符串。"
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
    heading: "setremotesubscribefallbackoption-12",
    content: "根据网络状况设置订阅端的视频流回退选项。"
  }, {
    heading: "setremotesubscribefallbackoption-12",
    content: "如果将 `option` 设置为 `STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW` 或 `STREAM_FALLBACK_OPTION_AUDIO_ONLY`，当下行网络无法同时支持音视频时，SDK 会自动将视频从高质量流切换为低质量流，或关闭视频以保障音频质量。SDK 会持续监测网络质量，在网络改善时恢复音视频流的订阅。"
  }, {
    heading: "setremotesubscribefallbackoption-12",
    content: "当订阅的视频流回退为纯音频流，或从纯音频流恢复为音视频流时，SDK 会触发 onRemoteSubscribeFallbackToAudioOnly 回调。"
  }, {
    heading: "option",
    content: "订阅流的回退选项。详见 StreamFallbackOptions。"
  }, {
    heading: "返回值-27",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-27",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-27",
    content: "RtcEngine"
  }, {
    heading: "setremotesubscribefallbackoption-22",
    content: "根据网络状况设置已订阅视频流的回退选项。"
  }, {
    heading: "废弃-5",
    content: "该方法已废弃。"
  }, {
    heading: "废弃-5",
    content: "不稳定的网络会影响视频通话或互动直播中的音视频质量。当下行网络无法同时支持音视频时，若将 `option` 设置为 `STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW` 或 `STREAM_FALLBACK_OPTION_AUDIO_ONLY`，SDK 会自动将视频从高质量流切换为低质量流，或关闭视频以保障音频质量。SDK 会持续监测网络质量，在网络改善后恢复订阅音视频流。"
  }, {
    heading: "废弃-5",
    content: "当已订阅的视频流回退为纯音频流，或从纯音频流恢复为音视频流时，SDK 会触发 onRemoteSubscribeFallbackToAudioOnly 回调。"
  }, {
    heading: "option-1",
    content: "已订阅流的回退选项："
  }, {
    heading: "option-1",
    content: "STREAM\\_FALLBACK\\_OPTION\\_DISABLED （0）：不对音视频流进行回退处理，无法保证音视频质量。"
  }, {
    heading: "option-1",
    content: "STREAM\\_FALLBACK\\_OPTION\\_VIDEO\\_STREAM\\_LOW （1）：（默认）在下行网络较差时，订阅的远端视频流回退为低质量（低分辨率、低码率）的视频流。"
  }, {
    heading: "option-1",
    content: "STREAM\\_FALLBACK\\_OPTION\\_AUDIO\\_ONLY （2）：在网络条件较差时，优先尝试接收视频小流；若因网络极差无法显示视频，则回退为仅接收音频流。"
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
    heading: "startechotest",
    content: "开始音视频设备回路测试。"
  }, {
    heading: "startechotest",
    content: "你可以调用该方法执行一次音视频通话回路测试，用于检测音视频设备以及用户上下行网络是否正常工作。开始测试后，用户需要发出声音或面对摄像头，音频或视频将在约两秒后输出。"
  }, {
    heading: "startechotest",
    content: "注："
  }, {
    heading: "startechotest",
    content: "在频道中调用该方法时，请确保未发布任何音视频流。"
  }, {
    heading: "startechotest",
    content: "调用该方法后需调用 stopEchoTest 结束测试，否则用户无法进行下一次音视频通话回路测试，也无法加入频道。"
  }, {
    heading: "startechotest",
    content: "在直播场景中，该方法仅适用于主播。"
  }, {
    heading: "调用时机-9",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "config-3",
    content: "音视频通话回路测试的配置。详见 EchoTestConfiguration。"
  }, {
    heading: "返回值-29",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-29",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-29",
    content: "RtcEngine"
  }, {
    heading: "startlastmileprobetest",
    content: "开始 Last-mile 网络探测测试。"
  }, {
    heading: "startlastmileprobetest",
    content: "该方法在加入频道前启动 Last-mile 网络探测测试，用于获取上行和下行的网络统计信息，包括带宽、丢包率、抖动和往返时延（RTT）。"
  }, {
    heading: "startlastmileprobetest",
    content: "注： 调用时序：在收到 onLastmileQuality 和 onLastmileProbeResult 回调前，请勿调用其他方法，否则可能会中断这些回调。 相关回调：成功调用该方法后，SDK 会依次触发以下两个回调："
  }, {
    heading: "startlastmileprobetest",
    content: "onLastmileQuality：SDK 会在约两秒内根据网络状况触发该回调。该回调用于评估网络质量，与用户体验更相关。"
  }, {
    heading: "startlastmileprobetest",
    content: "onLastmileProbeResult：SDK 会在约 30 秒内根据网络状况触发该回调。该回调返回网络状况的实时统计数据，更加客观。"
  }, {
    heading: "config-4",
    content: "Last-mile 网络探测测试的配置。详见 LastmileProbeConfig。"
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
    heading: "stopechotest",
    content: "停止音频通话测试。"
  }, {
    heading: "stopechotest",
    content: "调用 startEchoTest 后，必须调用该方法结束测试，否则你无法进行下一次音视频通话回路测试，也无法加入频道。"
  }, {
    heading: "返回值-31",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-31",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-31",
    content: "-5：停止回声测试失败，可能未在运行回声测试。"
  }, {
    heading: "所属接口类-31",
    content: "RtcEngine"
  }, {
    heading: "stoplastmileprobetest",
    content: "停止 Last-mile 网络探测测试。"
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
    heading: "onconnectionbanned",
    content: "连接被声网服务器封禁时触发的回调。"
  }, {
    heading: "废弃-6",
    content: "该方法已废弃，请改用 onConnectionStateChanged。"
  }, {
    heading: "触发时机",
    content: "该回调在连接被声网服务器封禁时被触发。"
  }, {
    heading: "所属接口类-33",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onconnectioninterrupted",
    content: "onConnectionInterrupted 回调。"
  }, {
    heading: "废弃-7",
    content: "该方法已废弃，请改用 onConnectionStateChanged。"
  }, {
    heading: "废弃-7",
    content: "该回调在 SDK 建立连接后与服务器断开连接超过四秒时被触发。触发该回调后，SDK 会尝试重新连接服务器。你可以通过该回调实现弹窗提醒功能。 该回调与 onConnectionLost 的区别如下："
  }, {
    heading: "废弃-7",
    content: "当 SDK 成功加入频道后，与服务器断开连接超过四秒时，会触发 onConnectionInterrupted 回调。"
  }, {
    heading: "废弃-7",
    content: "无论是否加入频道，当 SDK 与服务器断开连接超过 10 秒时，会触发 onConnectionLost 回调。"
  }, {
    heading: "废弃-7",
    content: "如果 SDK 在与声网边缘服务器断开连接后 20 分钟内仍未重新加入频道，则停止重连。"
  }, {
    heading: "触发时机-1",
    content: "该回调在 SDK 与服务器断开连接超过四秒时被触发。"
  }, {
    heading: "所属接口类-34",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onconnectionlost",
    content: "onConnectionLost 回调：当 SDK 在连接中断后 10 秒内无法重新连接到声网边缘服务器时触发。"
  }, {
    heading: "onconnectionlost",
    content: "无论是否在频道中，当调用 `joinChannel` 方法后，SDK 在连接中断后 10 秒内无法连接到服务器时会触发该回调。如果 SDK 在与声网边缘服务器断开连接后 20 分钟内仍无法重新加入频道，则停止重连。"
  }, {
    heading: "触发时机-2",
    content: "该回调在调用 `joinChannel` 后，SDK 与服务器连接中断并在 10 秒内无法重新连接时被触发。"
  }, {
    heading: "所属接口类-35",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onconnectionstatechanged",
    content: "网络连接状态发生变化回调。"
  }, {
    heading: "自从-1",
    content: "自 v2.3.2 版本新增。"
  }, {
    heading: "自从-1",
    content: "SDK 会在网络连接状态发生变化时触发该回调，并报告当前的连接状态及其变化原因。"
  }, {
    heading: "触发时机-3",
    content: "该回调在网络连接状态发生变化时被触发。"
  }, {
    heading: "state",
    content: "当前的连接状态："
  }, {
    heading: "state",
    content: "CONNECTION\\_STATE\\_DISCONNECTED (1)：SDK 与声网边缘服务器断开连接。"
  }, {
    heading: "state",
    content: "CONNECTION\\_STATE\\_CONNECTING (2)：SDK 正在连接声网边缘服务器。"
  }, {
    heading: "state",
    content: "CONNECTION\\_STATE\\_CONNECTED (3)：SDK 已连接到声网边缘服务器。"
  }, {
    heading: "state",
    content: "CONNECTION\\_STATE\\_RECONNECTING (4)：SDK 尝试重新连接声网边缘服务器。"
  }, {
    heading: "state",
    content: "CONNECTION\\_STATE\\_FAILED (5)：SDK 连接声网边缘服务器失败。"
  }, {
    heading: "reason",
    content: "连接状态变化的原因："
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_CONNECTING (0)：SDK 正在连接声网边缘服务器。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_JOIN\\_SUCCESS (1)：SDK 成功加入频道。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_INTERRUPTED (2)：SDK 与声网边缘服务器之间的连接中断。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_BANNED\\_BY\\_SERVER (3)：连接被声网服务器禁止，例如用户被踢出频道时会返回该错误码。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_JOIN\\_FAILED (4)：SDK 加入频道失败。若超过 20 分钟未能加入频道，SDK 会停止重连并返回该错误码。你需要提示用户尝试切换网络并重新加入频道。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_LEAVE\\_CHANNEL (5)：SDK 已离开频道。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_INVALID\\_APP\\_ID (6)：无效的 App ID。你需要使用有效的 App ID 重新加入频道，并确保该 App ID 与声网控制台中生成的一致。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_INVALID\\_CHANNEL\\_NAME (7)：无效的频道名。请使用有效的频道名重新加入频道。有效的频道名为不超过 64 字节的字符串，支持的字符包括："
  }, {
    heading: "reason",
    content: "所有小写英文字母：a 到 z。"
  }, {
    heading: "reason",
    content: "所有大写英文字母：A 到 Z。"
  }, {
    heading: "reason",
    content: "所有数字字符：0 到 9。"
  }, {
    heading: "reason",
    content: "特殊字符：!, #, $, %, &, (,), +, -,:,;, \\<, =,., >,?, @, \\[,], ^, \\_, \\{, }, |, \\~,,。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_INVALID\\_TOKEN (8)：无效的 Token。可能原因包括："
  }, {
    heading: "reason",
    content: "项目在声网控制台启用了 App Certificate，但加入频道时未传入 Token。"
  }, {
    heading: "reason",
    content: "调用 joinChannel 加入频道时指定的 uid 与生成 Token 时传入的 uid 不一致。"
  }, {
    heading: "reason",
    content: "使用的 Token 与生成的 Token 不一致。"
  }, {
    heading: "reason",
    content: "请确保："
  }, {
    heading: "reason",
    content: "项目启用 App Certificate 时，加入频道必须传入 Token。"
  }, {
    heading: "reason",
    content: "生成 Token 时指定的用户 ID 与加入频道时使用的用户 ID 一致。"
  }, {
    heading: "reason",
    content: "使用的 Token 与生成的 Token 一致。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_TOKEN\\_EXPIRED (9)：当前使用的 Token 已过期。你需要在服务器上生成新的 Token，并使用新 Token 重新加入频道。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_REJECTED\\_BY\\_SERVER (10)：用户被服务器禁止。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_SETTING\\_PROXY\\_SERVER (11)：设置代理服务器后，SDK 尝试重新连接。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_RENEW\\_TOKEN (12)：由于 Token 被更新，连接状态发生变化。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_CLIENT\\_IP\\_ADDRESS\\_CHANGED (13)：客户端 IP 地址发生变化。如果多次收到该错误码，你需要提示用户切换网络并重新加入频道。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_KEEP\\_ALIVE\\_TIMEOUT (14)：SDK 与声网边缘服务器之间的连接保活超时，SDK 会自动尝试重新连接。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_REJOIN\\_SUCCESS (15)：SDK 成功重新加入频道。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_LOST (16)：SDK 与服务器之间的连接丢失。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_ECHO\\_TEST (17)：由于回声测试，连接状态发生变化。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_CLIENT\\_IP\\_ADDRESS\\_CHANGED\\_BY\\_USER (18)：本地 IP 地址被用户更改。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_SAME\\_UID\\_LOGIN (19)：用户在不同设备上以相同的 uid 加入同一频道。注意：以相同 uid 加入同一 RTC 频道属于未定义行为，声网不保证在相同情况下始终触发该错误码。"
  }, {
    heading: "reason",
    content: "CONNECTION\\_CHANGED\\_TOO\\_MANY\\_BROADCASTERS (20)：频道中的主播数量已达上限。"
  }, {
    heading: "所属接口类-36",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onencryptionerror",
    content: "内置加密错误回调。"
  }, {
    heading: "onencryptionerror",
    content: "如果在调用 enableEncryption 启用加密功能后，发送端或接收端在加密或解密过程中发生错误，SDK 会触发该回调。"
  }, {
    heading: "触发时机-4",
    content: "该回调在加密或解密过程中发生错误时被触发。"
  }, {
    heading: "errortype",
    content: "错误类型："
  }, {
    heading: "errortype",
    content: "ENCRYPTION\\_ERROR\\_INTERNAL\\_FAILURE （0）：内部原因。"
  }, {
    heading: "errortype",
    content: "ENCRYPTION\\_ERROR\\_DECRYPTION\\_FAILURE （1）：媒体流解密错误。请确保接收端和发送端使用相同的加密模式和密钥。"
  }, {
    heading: "errortype",
    content: "ENCRYPTION\\_ERROR\\_ENCRYPTION\\_FAILURE （2）：媒体流加密错误。"
  }, {
    heading: "errortype",
    content: "ENCRYPTION\\_ERROR\\_DATASTREAM\\_DECRYPTION\\_FAILURE （3）：数据流解密错误。请确保接收端和发送端使用相同的加密模式和密钥。"
  }, {
    heading: "errortype",
    content: "ENCRYPTION\\_ERROR\\_DATASTREAM\\_ENCRYPTION\\_FAILURE （4）：数据流加密错误。"
  }, {
    heading: "所属接口类-37",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onlastmileproberesult",
    content: "上行和下行 Last-mile 网络探测测试结果的回调。"
  }, {
    heading: "onlastmileproberesult",
    content: "该回调在调用 startLastmileProbeTest 后触发。"
  }, {
    heading: "触发时机-5",
    content: "该回调在调用 startLastmileProbeTest 后 30 秒内被触发。"
  }, {
    heading: "result",
    content: "上行和下行 Last-mile 网络探测测试结果。详见 LastmileProbeResult。"
  }, {
    heading: "所属接口类-38",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onlastmilequality",
    content: "本地用户的 Last-mile 网络质量回调。"
  }, {
    heading: "onlastmilequality",
    content: "该回调在用户加入频道前触发，用于上报本地用户与声网边缘服务器之间连接的 Last-mile 网络质量。在调用 startLastmileProbeTest 后，SDK 会触发该回调。"
  }, {
    heading: "触发时机-6",
    content: "该回调在调用 startLastmileProbeTest 方法后被触发。"
  }, {
    heading: "quality",
    content: "Last-mile 网络质量："
  }, {
    heading: "quality",
    content: "QUALITY\\_UNKNOWN (0)：网络质量未知。"
  }, {
    heading: "quality",
    content: "QUALITY\\_EXCELLENT (1)：网络质量极好。"
  }, {
    heading: "quality",
    content: "QUALITY\\_GOOD (2)：网络质量较好，但码率可能略低于极好。"
  }, {
    heading: "quality",
    content: "QUALITY\\_POOR (3)：通信质量略有下降。"
  }, {
    heading: "quality",
    content: "QUALITY\\_BAD (4)：无法流畅通信。"
  }, {
    heading: "quality",
    content: "QUALITY\\_VBAD (5)：网络质量极差，几乎无法通信。"
  }, {
    heading: "quality",
    content: "QUALITY\\_DOWN (6)：网络连接已断，无法通信。"
  }, {
    heading: "quality",
    content: "QUALITY\\_DETECTING (8)：正在进行 Last-mile 探测。"
  }, {
    heading: "所属接口类-39",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onmultipathstats",
    content: "多路径传输统计信息回调。"
  }, {
    heading: "自从-2",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "触发时机-7",
    content: "该回调在你将 `enableMultipath` 设置为 true 以启用多路径传输后被触发。"
  }, {
    heading: "stats",
    content: "多路径传输统计信息。详见 MultipathStats。"
  }, {
    heading: "所属接口类-40",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onnetworkquality",
    content: "onNetworkQuality 回调。报告频道中每个用户的 Last-mile 网络质量。"
  }, {
    heading: "onnetworkquality",
    content: "该回调通过在频道内发送和接收广播数据包来反馈网络质量。过多的广播数据包可能导致广播风暴。为防止广播风暴造成频道内大量数据传输，该回调默认最多同时反馈 4 个远端用户的网络质量。"
  }, {
    heading: "onnetworkquality",
    content: "`txQuality` 在用户未发送流时为 `UNKNOWN`； `rxQuality` 在用户未接收流时为 `UNKNOWN`。"
  }, {
    heading: "触发时机-8",
    content: "该回调每两秒触发一次。"
  }, {
    heading: "uid-1",
    content: "用户 ID，用于标识被报告网络质量的用户。"
  }, {
    heading: "uid-1",
    content: "0：表示本地用户。"
  }, {
    heading: "txquality",
    content: "用户上行网络质量评分，依据传输码率、丢包率、平均往返时延（RTT）和抖动等指标评估。"
  }, {
    heading: "txquality",
    content: "QUALITY\\_UNKNOWN (0)：质量未知。"
  }, {
    heading: "txquality",
    content: "QUALITY\\_EXCELLENT (1)：质量极佳。"
  }, {
    heading: "txquality",
    content: "QUALITY\\_GOOD (2)：网络质量看似极佳，但码率略低于极佳。"
  }, {
    heading: "txquality",
    content: "QUALITY\\_POOR (3)：用户能感受到通信略有卡顿。"
  }, {
    heading: "txquality",
    content: "QUALITY\\_BAD (4)：用户无法流畅通信。"
  }, {
    heading: "txquality",
    content: "QUALITY\\_VBAD (5)：质量极差，用户几乎无法通信。"
  }, {
    heading: "txquality",
    content: "QUALITY\\_DOWN (6)：网络连接已断，用户无法通信。"
  }, {
    heading: "txquality",
    content: "QUALITY\\_DETECTING (8)：正在进行 Last-mile 探测测试。"
  }, {
    heading: "rxquality",
    content: "用户下行网络质量评分，依据丢包率、平均往返时延（RTT）和抖动等指标评估。"
  }, {
    heading: "rxquality",
    content: "QUALITY\\_UNKNOWN (0)：质量未知。"
  }, {
    heading: "rxquality",
    content: "QUALITY\\_EXCELLENT (1)：质量极佳。"
  }, {
    heading: "rxquality",
    content: "QUALITY\\_GOOD (2)：网络质量看似极佳，但码率略低于极佳。"
  }, {
    heading: "rxquality",
    content: "QUALITY\\_POOR (3)：用户能感受到通信略有卡顿。"
  }, {
    heading: "rxquality",
    content: "QUALITY\\_BAD (4)：用户无法流畅通信。"
  }, {
    heading: "rxquality",
    content: "QUALITY\\_VBAD (5)：质量极差，用户几乎无法通信。"
  }, {
    heading: "rxquality",
    content: "QUALITY\\_DOWN (6)：网络连接已断，用户无法通信。"
  }, {
    heading: "rxquality",
    content: "QUALITY\\_DETECTING (8)：正在进行 Last-mile 探测测试。"
  }, {
    heading: "所属接口类-41",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onnetworktypechanged",
    content: "本地网络类型发生变化时的回调。"
  }, {
    heading: "onnetworktypechanged",
    content: "你可以通过该回调获取连接状态及其变化原因。当网络连接中断时，该回调会指示中断是由于网络类型变化还是由于网络状况不佳导致的。"
  }, {
    heading: "触发时机-9",
    content: "该回调在本地网络类型发生变化时被触发。"
  }, {
    heading: "type-1",
    content: "网络类型："
  }, {
    heading: "type-1",
    content: "NETWORK\\_TYPE\\_UNKNOWN （-1）：网络类型未知。"
  }, {
    heading: "type-1",
    content: "NETWORK\\_TYPE\\_DISCONNECTED （0）：SDK 与网络断开连接。"
  }, {
    heading: "type-1",
    content: "NETWORK\\_TYPE\\_LAN （1）：网络类型为 LAN。"
  }, {
    heading: "type-1",
    content: "NETWORK\\_TYPE\\_WIFI （2）：网络类型为 Wi-Fi（包括热点）。"
  }, {
    heading: "type-1",
    content: "NETWORK\\_TYPE\\_MOBILE\\_2G （3）：网络类型为移动 2G。"
  }, {
    heading: "type-1",
    content: "NETWORK\\_TYPE\\_MOBILE\\_3G （4）：网络类型为移动 3G。"
  }, {
    heading: "type-1",
    content: "NETWORK\\_TYPE\\_MOBILE\\_4G （5）：网络类型为移动 4G。"
  }, {
    heading: "type-1",
    content: "NETWORK\\_TYPE\\_MOBILE\\_5G （6）：网络类型为移动 5G。"
  }, {
    heading: "所属接口类-42",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onpermissionerror",
    content: "设备权限获取失败时触发的回调。"
  }, {
    heading: "onpermissionerror",
    content: "该回调在 SDK 无法获取设备权限时被触发，用于报告无法获取的权限类型。"
  }, {
    heading: "触发时机-10",
    content: "该回调在 SDK 无法获取设备权限时被触发。"
  }, {
    heading: "permission",
    content: "设备权限的类型："
  }, {
    heading: "permission",
    content: "RECORD\\_AUDIO （0）：音频采集设备的权限。"
  }, {
    heading: "permission",
    content: "CAMERA （1）：摄像头的权限。"
  }, {
    heading: "permission",
    content: "SCREEN\\_CAPTURE （2）：屏幕共享的权限。"
  }, {
    heading: "所属接口类-43",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onpermissiongranted",
    content: "onPermissionGranted 回调。用于上报已授予的权限。"
  }, {
    heading: "permission-1",
    content: "权限类型。包括："
  }, {
    heading: "permission-1",
    content: "RECORD\\_AUDIO：录音权限。"
  }, {
    heading: "permission-1",
    content: "CAMERA：摄像头权限。"
  }, {
    heading: "permission-1",
    content: "SCREEN\\_CAPTURE：屏幕采集权限。"
  }, {
    heading: "所属接口类-44",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onproxyconnected",
    content: "代理连接状态回调。"
  }, {
    heading: "onproxyconnected",
    content: "当用户调用 setCloudProxy 并成功加入频道后，SDK 会触发该回调，报告用户 ID、连接的代理类型，以及从调用 `joinChannel` 到触发该回调所经历的时间（毫秒）。"
  }, {
    heading: "触发时机-11",
    content: "该回调在用户调用 setCloudProxy 并成功加入频道后被触发。"
  }, {
    heading: "channel",
    content: "频道名。"
  }, {
    heading: "uid-2",
    content: "用户 ID。"
  }, {
    heading: "proxytype-1",
    content: "连接的代理类型："
  }, {
    heading: "proxytype-1",
    content: "PROXY\\_TYPE\\_NONE\\_PROXY （0）：预留参数。"
  }, {
    heading: "proxytype-1",
    content: "PROXY\\_TYPE\\_UDP\\_CLOUD\\_PROXY （1）：UDP 协议的云代理，即强制 UDP 云代理模式。在该模式下，SDK 始终通过 UDP 传输数据。"
  }, {
    heading: "proxytype-1",
    content: "PROXY\\_TYPE\\_TCP\\_CLOUD\\_PROXY （2）：TCP（加密）协议的云代理，即强制 TCP 云代理模式。在该模式下，SDK 始终通过 TCP/TLS 443 传输数据。"
  }, {
    heading: "proxytype-1",
    content: "PROXY\\_TYPE\\_LOCAL\\_PROXY （3）：预留参数。"
  }, {
    heading: "proxytype-1",
    content: "PROXY\\_TYPE\\_TCP\\_AUTO\\_FALLBACK （4）：自动模式。在该模式下，SDK 会尝试直接连接 SD-RTN™，如果失败则自动切换到 TCP/TLS 443。"
  }, {
    heading: "localproxyip",
    content: "预留参数。"
  }, {
    heading: "elapsed",
    content: "从调用 `joinChannel` 到触发该回调所经历的时间（毫秒）。"
  }, {
    heading: "所属接口类-45",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onremotesubscribefallbacktoaudioonly",
    content: "onRemoteSubscribeFallbackToAudioOnly 回调。当远端媒体流因网络变化在音频流与视频流之间切换时触发。"
  }, {
    heading: "onremotesubscribefallbacktoaudioonly",
    content: "如果你调用了 `setRemoteSubscribeFallbackOption` 并将 `option` 设置为 `STREAM_FALLBACK_OPTION_AUDIO_ONLY`，SDK 会在以下情况下触发该回调："
  }, {
    heading: "onremotesubscribefallbacktoaudioonly",
    content: "下行网络条件较差，已订阅的视频流降级为纯音频流。"
  }, {
    heading: "onremotesubscribefallbacktoaudioonly",
    content: "下行网络条件改善，已订阅的流恢复为视频流。"
  }, {
    heading: "onremotesubscribefallbacktoaudioonly",
    content: "你可以在 onRemoteVideoStats 回调中监控高质量与视频小流之间的切换。"
  }, {
    heading: "触发时机-12",
    content: "该回调在远端媒体流因网络变化在音频流与视频流之间切换时被触发。"
  }, {
    heading: "uid-3",
    content: "远端用户 ID。"
  }, {
    heading: "isfallbackorrecover",
    content: "是否因网络变化触发音视频切换："
  }, {
    heading: "isfallbackorrecover",
    content: "true：由于网络条件差，已订阅的媒体流降级为纯音频流。"
  }, {
    heading: "isfallbackorrecover",
    content: "false：网络条件改善后，已订阅的媒体流恢复为视频流。"
  }, {
    heading: "所属接口类-46",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onuplinknetworkinfoupdated",
    content: "上行网络信息发生变化回调。"
  }, {
    heading: "onuplinknetworkinfoupdated",
    content: "该回调仅适用于将外部编码的 H.264 格式视频数据推送到 SDK 的场景。"
  }, {
    heading: "触发时机-13",
    content: "该回调在上行网络信息发生变化时被触发。"
  }, {
    heading: "info",
    content: "上行网络信息，详见 UplinkNetworkInfo。"
  }, {
    heading: "所属接口类-47",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "complain",
    content: "complain"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "callid",
    content: "`callId`"
  }, {
    id: "description",
    content: "`description`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "enableencryption",
    content: "enableEncryption"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
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
    id: "enableencryptionex",
    content: "enableEncryptionEx"
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
    id: "config-1",
    content: "`config`"
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
    id: "enablewebsdkinteroperability",
    content: "enableWebSdkInteroperability"
  }, {
    id: "废弃",
    content: "`废弃`"
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
    id: "getcallid",
    content: "getCallId"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "getcallidex",
    content: "getCallIdEx"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "connection-1",
    content: "`connection`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "getconnectionstate",
    content: "getConnectionState"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "getconnectionstateex",
    content: "getConnectionStateEx"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "connection-2",
    content: "`connection`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "getcurrentmonotonictimeinms",
    content: "getCurrentMonotonicTimeInMs"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "geterrordescription",
    content: "getErrorDescription"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "error",
    content: "`error`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "getnativehandle",
    content: "getNativeHandle"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "getnetworktype",
    content: "getNetworkType"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "getntpwalltimeinms",
    content: "getNtpWallTimeInMs"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "getsdkversion",
    content: "getSdkVersion"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "isfeatureavailableondevice",
    content: "isFeatureAvailableOnDevice"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "type",
    content: "`type`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "querydevicescore",
    content: "queryDeviceScore"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "rate",
    content: "rate"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "callid-1",
    content: "`callId`"
  }, {
    id: "rating",
    content: "`rating`"
  }, {
    id: "description-1",
    content: "`description`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "sendcustomreportmessage",
    content: "sendCustomReportMessage"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "id",
    content: "`id`"
  }, {
    id: "category",
    content: "`category`"
  }, {
    id: "event",
    content: "`event`"
  }, {
    id: "label",
    content: "`label`"
  }, {
    id: "value",
    content: "`value`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "sendcustomreportmessageex",
    content: "sendCustomReportMessageEx"
  }, {
    id: "适用场景-4",
    content: "适用场景"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "id-1",
    content: "`id`"
  }, {
    id: "category-1",
    content: "`category`"
  }, {
    id: "event-1",
    content: "`event`"
  }, {
    id: "label-1",
    content: "`label`"
  }, {
    id: "value-1",
    content: "`value`"
  }, {
    id: "connection-3",
    content: "`connection`"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "setavsyncsource",
    content: "setAVSyncSource"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "channelid",
    content: "`channelId`"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "返回值-19",
    content: "返回值"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "setcloudproxy",
    content: "setCloudProxy"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "proxytype",
    content: "`proxyType`"
  }, {
    id: "返回值-20",
    content: "返回值"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "setlocalaccesspoint",
    content: "setLocalAccessPoint"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "config-2",
    content: "`config`"
  }, {
    id: "返回值-21",
    content: "返回值"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }, {
    id: "setlogfile",
    content: "setLogFile"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "调用时机-8",
    content: "调用时机"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "filepath",
    content: "`filePath`"
  }, {
    id: "返回值-22",
    content: "返回值"
  }, {
    id: "所属接口类-22",
    content: "所属接口类"
  }, {
    id: "setlogfilesize",
    content: "setLogFileSize"
  }, {
    id: "废弃-2",
    content: "`废弃`"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "filesizeinkbytes",
    content: "`fileSizeInKBytes`"
  }, {
    id: "返回值-23",
    content: "返回值"
  }, {
    id: "所属接口类-23",
    content: "所属接口类"
  }, {
    id: "setlogfilter",
    content: "setLogFilter"
  }, {
    id: "废弃-3",
    content: "`废弃`"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "filter",
    content: "`filter`"
  }, {
    id: "返回值-24",
    content: "返回值"
  }, {
    id: "所属接口类-24",
    content: "所属接口类"
  }, {
    id: "setloglevel",
    content: "setLogLevel"
  }, {
    id: "废弃-4",
    content: "`废弃`"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "level",
    content: "`level`"
  }, {
    id: "返回值-25",
    content: "返回值"
  }, {
    id: "所属接口类-25",
    content: "所属接口类"
  }, {
    id: "setparameters",
    content: "setParameters"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "parameters",
    content: "`parameters`"
  }, {
    id: "返回值-26",
    content: "返回值"
  }, {
    id: "所属接口类-26",
    content: "所属接口类"
  }, {
    id: "setremotesubscribefallbackoption-12",
    content: "setRemoteSubscribeFallbackOption [1/2]"
  }, {
    id: "参数-19",
    content: "参数"
  }, {
    id: "option",
    content: "`option`"
  }, {
    id: "返回值-27",
    content: "返回值"
  }, {
    id: "所属接口类-27",
    content: "所属接口类"
  }, {
    id: "setremotesubscribefallbackoption-22",
    content: "setRemoteSubscribeFallbackOption [2/2]"
  }, {
    id: "废弃-5",
    content: "`废弃`"
  }, {
    id: "参数-20",
    content: "参数"
  }, {
    id: "option-1",
    content: "`option`"
  }, {
    id: "返回值-28",
    content: "返回值"
  }, {
    id: "所属接口类-28",
    content: "所属接口类"
  }, {
    id: "startechotest",
    content: "startEchoTest"
  }, {
    id: "调用时机-9",
    content: "调用时机"
  }, {
    id: "参数-21",
    content: "参数"
  }, {
    id: "config-3",
    content: "`config`"
  }, {
    id: "返回值-29",
    content: "返回值"
  }, {
    id: "所属接口类-29",
    content: "所属接口类"
  }, {
    id: "startlastmileprobetest",
    content: "startLastmileProbeTest"
  }, {
    id: "参数-22",
    content: "参数"
  }, {
    id: "config-4",
    content: "`config`"
  }, {
    id: "返回值-30",
    content: "返回值"
  }, {
    id: "所属接口类-30",
    content: "所属接口类"
  }, {
    id: "stopechotest",
    content: "stopEchoTest"
  }, {
    id: "返回值-31",
    content: "返回值"
  }, {
    id: "所属接口类-31",
    content: "所属接口类"
  }, {
    id: "stoplastmileprobetest",
    content: "stopLastmileProbeTest"
  }, {
    id: "返回值-32",
    content: "返回值"
  }, {
    id: "所属接口类-32",
    content: "所属接口类"
  }, {
    id: "onconnectionbanned",
    content: "onConnectionBanned"
  }, {
    id: "废弃-6",
    content: "`废弃`"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "所属接口类-33",
    content: "所属接口类"
  }, {
    id: "onconnectioninterrupted",
    content: "onConnectionInterrupted"
  }, {
    id: "废弃-7",
    content: "`废弃`"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "所属接口类-34",
    content: "所属接口类"
  }, {
    id: "onconnectionlost",
    content: "onConnectionLost"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "所属接口类-35",
    content: "所属接口类"
  }, {
    id: "onconnectionstatechanged",
    content: "onConnectionStateChanged"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "触发时机-3",
    content: "触发时机"
  }, {
    id: "参数-23",
    content: "参数"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "所属接口类-36",
    content: "所属接口类"
  }, {
    id: "onencryptionerror",
    content: "onEncryptionError"
  }, {
    id: "触发时机-4",
    content: "触发时机"
  }, {
    id: "参数-24",
    content: "参数"
  }, {
    id: "errortype",
    content: "`errorType`"
  }, {
    id: "所属接口类-37",
    content: "所属接口类"
  }, {
    id: "onlastmileproberesult",
    content: "onLastmileProbeResult"
  }, {
    id: "触发时机-5",
    content: "触发时机"
  }, {
    id: "参数-25",
    content: "参数"
  }, {
    id: "result",
    content: "`result`"
  }, {
    id: "所属接口类-38",
    content: "所属接口类"
  }, {
    id: "onlastmilequality",
    content: "onLastmileQuality"
  }, {
    id: "触发时机-6",
    content: "触发时机"
  }, {
    id: "参数-26",
    content: "参数"
  }, {
    id: "quality",
    content: "`quality`"
  }, {
    id: "所属接口类-39",
    content: "所属接口类"
  }, {
    id: "onmultipathstats",
    content: "onMultipathStats"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "触发时机-7",
    content: "触发时机"
  }, {
    id: "参数-27",
    content: "参数"
  }, {
    id: "stats",
    content: "`stats`"
  }, {
    id: "所属接口类-40",
    content: "所属接口类"
  }, {
    id: "onnetworkquality",
    content: "onNetworkQuality"
  }, {
    id: "触发时机-8",
    content: "触发时机"
  }, {
    id: "参数-28",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "txquality",
    content: "`txQuality`"
  }, {
    id: "rxquality",
    content: "`rxQuality`"
  }, {
    id: "所属接口类-41",
    content: "所属接口类"
  }, {
    id: "onnetworktypechanged",
    content: "onNetworkTypeChanged"
  }, {
    id: "触发时机-9",
    content: "触发时机"
  }, {
    id: "参数-29",
    content: "参数"
  }, {
    id: "type-1",
    content: "`type`"
  }, {
    id: "所属接口类-42",
    content: "所属接口类"
  }, {
    id: "onpermissionerror",
    content: "onPermissionError"
  }, {
    id: "触发时机-10",
    content: "触发时机"
  }, {
    id: "参数-30",
    content: "参数"
  }, {
    id: "permission",
    content: "`permission`"
  }, {
    id: "所属接口类-43",
    content: "所属接口类"
  }, {
    id: "onpermissiongranted",
    content: "onPermissionGranted"
  }, {
    id: "参数-31",
    content: "参数"
  }, {
    id: "permission-1",
    content: "`permission`"
  }, {
    id: "所属接口类-44",
    content: "所属接口类"
  }, {
    id: "onproxyconnected",
    content: "onProxyConnected"
  }, {
    id: "触发时机-11",
    content: "触发时机"
  }, {
    id: "参数-32",
    content: "参数"
  }, {
    id: "channel",
    content: "`channel`"
  }, {
    id: "uid-2",
    content: "`uid`"
  }, {
    id: "proxytype-1",
    content: "`proxyType`"
  }, {
    id: "localproxyip",
    content: "`localProxyIp`"
  }, {
    id: "elapsed",
    content: "`elapsed`"
  }, {
    id: "所属接口类-45",
    content: "所属接口类"
  }, {
    id: "onremotesubscribefallbacktoaudioonly",
    content: "onRemoteSubscribeFallbackToAudioOnly"
  }, {
    id: "触发时机-12",
    content: "触发时机"
  }, {
    id: "参数-33",
    content: "参数"
  }, {
    id: "uid-3",
    content: "`uid`"
  }, {
    id: "isfallbackorrecover",
    content: "`isFallbackOrRecover`"
  }, {
    id: "所属接口类-46",
    content: "所属接口类"
  }, {
    id: "onuplinknetworkinfoupdated",
    content: "onUplinkNetworkInfoUpdated"
  }, {
    id: "触发时机-13",
    content: "触发时机"
  }, {
    id: "参数-34",
    content: "参数"
  }, {
    id: "info",
    content: "`info`"
  }, {
    id: "所属接口类-47",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#complain",
  title: _jsx(_Fragment, {
    children: "complain"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#callid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "callId"
    })
  })
}, {
  depth: 4,
  url: "#description",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "description"
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
  url: "#enableencryption",
  title: _jsx(_Fragment, {
    children: "enableEncryption"
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
  url: "#enableencryptionex",
  title: _jsx(_Fragment, {
    children: "enableEncryptionEx"
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
  url: "#config-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#enablewebsdkinteroperability",
  title: _jsx(_Fragment, {
    children: "enableWebSdkInteroperability"
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
  url: "#getcallid",
  title: _jsx(_Fragment, {
    children: "getCallId"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
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
  url: "#getcallidex",
  title: _jsx(_Fragment, {
    children: "getCallIdEx"
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
  url: "#参数-4",
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
  url: "#getconnectionstate",
  title: _jsx(_Fragment, {
    children: "getConnectionState"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#getconnectionstateex",
  title: _jsx(_Fragment, {
    children: "getConnectionStateEx"
  })
}, {
  depth: 3,
  url: "#适用场景-3",
  title: _jsx(_Fragment, {
    children: "适用场景"
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
  url: "#connection-2",
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
  url: "#getcurrentmonotonictimeinms",
  title: _jsx(_Fragment, {
    children: "getCurrentMonotonicTimeInMs"
  })
}, {
  depth: 3,
  url: "#调用时机-6",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#geterrordescription",
  title: _jsx(_Fragment, {
    children: "getErrorDescription"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#getnativehandle",
  title: _jsx(_Fragment, {
    children: "getNativeHandle"
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
  url: "#getnetworktype",
  title: _jsx(_Fragment, {
    children: "getNetworkType"
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
  url: "#getntpwalltimeinms",
  title: _jsx(_Fragment, {
    children: "getNtpWallTimeInMs"
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
  url: "#getsdkversion",
  title: _jsx(_Fragment, {
    children: "getSdkVersion"
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
  url: "#isfeatureavailableondevice",
  title: _jsx(_Fragment, {
    children: "isFeatureAvailableOnDevice"
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
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#querydevicescore",
  title: _jsx(_Fragment, {
    children: "queryDeviceScore"
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
  url: "#rate",
  title: _jsx(_Fragment, {
    children: "rate"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#callid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "callId"
    })
  })
}, {
  depth: 4,
  url: "#rating",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rating"
    })
  })
}, {
  depth: 4,
  url: "#description-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "description"
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
  url: "#sendcustomreportmessage",
  title: _jsx(_Fragment, {
    children: "sendCustomReportMessage"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#id",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "id"
    })
  })
}, {
  depth: 4,
  url: "#category",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "category"
    })
  })
}, {
  depth: 4,
  url: "#event",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "event"
    })
  })
}, {
  depth: 4,
  url: "#label",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "label"
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
  url: "#sendcustomreportmessageex",
  title: _jsx(_Fragment, {
    children: "sendCustomReportMessageEx"
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
  url: "#id-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "id"
    })
  })
}, {
  depth: 4,
  url: "#category-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "category"
    })
  })
}, {
  depth: 4,
  url: "#event-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "event"
    })
  })
}, {
  depth: 4,
  url: "#label-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "label"
    })
  })
}, {
  depth: 4,
  url: "#value-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "value"
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
  url: "#setavsyncsource",
  title: _jsx(_Fragment, {
    children: "setAVSyncSource"
  })
}, {
  depth: 3,
  url: "#参数-11",
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
  url: "#setcloudproxy",
  title: _jsx(_Fragment, {
    children: "setCloudProxy"
  })
}, {
  depth: 3,
  url: "#参数-12",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#proxytype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "proxyType"
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
  url: "#setlocalaccesspoint",
  title: _jsx(_Fragment, {
    children: "setLocalAccessPoint"
  })
}, {
  depth: 3,
  url: "#调用时机-7",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-13",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#config-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#setlogfile",
  title: _jsx(_Fragment, {
    children: "setLogFile"
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
  url: "#调用时机-8",
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
  url: "#filepath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
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
  url: "#setlogfilesize",
  title: _jsx(_Fragment, {
    children: "setLogFileSize"
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
  url: "#参数-15",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#filesizeinkbytes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "fileSizeInKBytes"
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
  url: "#setlogfilter",
  title: _jsx(_Fragment, {
    children: "setLogFilter"
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
  url: "#参数-16",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#filter",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filter"
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
  url: "#setloglevel",
  title: _jsx(_Fragment, {
    children: "setLogLevel"
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
  url: "#参数-17",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#level",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "level"
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
  url: "#setparameters",
  title: _jsx(_Fragment, {
    children: "setParameters"
  })
}, {
  depth: 3,
  url: "#参数-18",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#parameters",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "parameters"
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
  url: "#setremotesubscribefallbackoption-12",
  title: _jsx(_Fragment, {
    children: "setRemoteSubscribeFallbackOption [1/2]"
  })
}, {
  depth: 3,
  url: "#参数-19",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#option",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "option"
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
  url: "#setremotesubscribefallbackoption-22",
  title: _jsx(_Fragment, {
    children: "setRemoteSubscribeFallbackOption [2/2]"
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
  url: "#参数-20",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#option-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "option"
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
  url: "#startechotest",
  title: _jsx(_Fragment, {
    children: "startEchoTest"
  })
}, {
  depth: 3,
  url: "#调用时机-9",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-21",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#config-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#startlastmileprobetest",
  title: _jsx(_Fragment, {
    children: "startLastmileProbeTest"
  })
}, {
  depth: 3,
  url: "#参数-22",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#config-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
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
  url: "#stopechotest",
  title: _jsx(_Fragment, {
    children: "stopEchoTest"
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
  url: "#stoplastmileprobetest",
  title: _jsx(_Fragment, {
    children: "stopLastmileProbeTest"
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
  url: "#onconnectionbanned",
  title: _jsx(_Fragment, {
    children: "onConnectionBanned"
  })
}, {
  depth: 4,
  url: "#废弃-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#所属接口类-33",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onconnectioninterrupted",
  title: _jsx(_Fragment, {
    children: "onConnectionInterrupted"
  })
}, {
  depth: 4,
  url: "#废弃-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "废弃"
    })
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#所属接口类-34",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onconnectionlost",
  title: _jsx(_Fragment, {
    children: "onConnectionLost"
  })
}, {
  depth: 3,
  url: "#触发时机-2",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#所属接口类-35",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onconnectionstatechanged",
  title: _jsx(_Fragment, {
    children: "onConnectionStateChanged"
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
  url: "#触发时机-3",
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
  url: "#所属接口类-36",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onencryptionerror",
  title: _jsx(_Fragment, {
    children: "onEncryptionError"
  })
}, {
  depth: 3,
  url: "#触发时机-4",
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
  url: "#errortype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "errorType"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-37",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlastmileproberesult",
  title: _jsx(_Fragment, {
    children: "onLastmileProbeResult"
  })
}, {
  depth: 3,
  url: "#触发时机-5",
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
  url: "#result",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "result"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-38",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlastmilequality",
  title: _jsx(_Fragment, {
    children: "onLastmileQuality"
  })
}, {
  depth: 3,
  url: "#触发时机-6",
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
  url: "#quality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "quality"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-39",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onmultipathstats",
  title: _jsx(_Fragment, {
    children: "onMultipathStats"
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
  url: "#触发时机-7",
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
  url: "#所属接口类-40",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onnetworkquality",
  title: _jsx(_Fragment, {
    children: "onNetworkQuality"
  })
}, {
  depth: 3,
  url: "#触发时机-8",
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
  url: "#uid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#txquality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "txQuality"
    })
  })
}, {
  depth: 4,
  url: "#rxquality",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxQuality"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-41",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onnetworktypechanged",
  title: _jsx(_Fragment, {
    children: "onNetworkTypeChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-9",
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
  url: "#type-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-42",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onpermissionerror",
  title: _jsx(_Fragment, {
    children: "onPermissionError"
  })
}, {
  depth: 3,
  url: "#触发时机-10",
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
  url: "#permission",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "permission"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-43",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onpermissiongranted",
  title: _jsx(_Fragment, {
    children: "onPermissionGranted"
  })
}, {
  depth: 3,
  url: "#参数-31",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#permission-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "permission"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-44",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onproxyconnected",
  title: _jsx(_Fragment, {
    children: "onProxyConnected"
  })
}, {
  depth: 3,
  url: "#触发时机-11",
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
  url: "#channel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channel"
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
  depth: 4,
  url: "#proxytype-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "proxyType"
    })
  })
}, {
  depth: 4,
  url: "#localproxyip",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "localProxyIp"
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
  url: "#所属接口类-45",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onremotesubscribefallbacktoaudioonly",
  title: _jsx(_Fragment, {
    children: "onRemoteSubscribeFallbackToAudioOnly"
  })
}, {
  depth: 3,
  url: "#触发时机-12",
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
  url: "#uid-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#isfallbackorrecover",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "isFallbackOrRecover"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-46",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onuplinknetworkinfoupdated",
  title: _jsx(_Fragment, {
    children: "onUplinkNetworkInfoUpdated"
  })
}, {
  depth: 3,
  url: "#触发时机-13",
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
  url: "#info",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "info"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-47",
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
    ol: "ol",
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
      id: "toc_network"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_complain"
    }), `
`, _jsx(_components.h2, {
      id: "complain",
      children: "complain"
    }), `
`, _jsx(_components.p, {
      children: "允许你在通话结束后投诉通话质量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_complain__prototype"
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
              children: " complain"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String callId, String description);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_complain__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "请在用户离开频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_complain__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "callid",
      children: _jsx(_components.code, {
        children: "callId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["当前通话的 Call ID。你可以通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid",
        children: "getCallId"
      }), " 获取。"]
    }), `
`, _jsx(_components.h4, {
      id: "description",
      children: _jsx(_components.code, {
        children: "description"
      })
    }), `
`, _jsx(_components.p, {
      children: "（可选）对通话的描述。字符串长度应小于 800 字节。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_complain__return_values"
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
            children: "-1：发生通用错误（无明确原因）。"
          }), `
`, _jsx(_components.li, {
            children: "-2：参数无效。"
          }), `
`, _jsx(_components.li, {
            children: "-7：在 RtcEngine 初始化之前调用该方法。"
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
      id: "api_irtcengine_enableencryption"
    }), `
`, _jsx(_components.h2, {
      id: "enableencryption",
      children: "enableEncryption"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭内置加密功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableencryption__prototype"
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
              children: " enableEncryption"
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
              children: " enabled, EncryptionConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableencryption__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "用户离开频道后，SDK 会自动关闭内置加密功能。请在用户重新加入频道前调用该方法。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "同一频道内的所有用户在调用该方法时必须设置相同的加密配置。"
      }), `
`, _jsx(_components.li, {
        children: "启用内置加密功能后，无法使用旁路推流功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableencryption__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于安全性要求较高的场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableencryption__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableencryption__parameters"
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
      children: "是否启用内置加密功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用内置加密功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭内置加密功能。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["内置加密配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-encryptionconfig",
        children: "EncryptionConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableencryption__return_values"
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
            children: "-2：参数无效。请传入有效参数。"
          }), `
`, _jsx(_components.li, {
            children: "-4：内置加密模式错误或 SDK 加载外部加密库失败。请检查枚举值或重新加载外部加密库。"
          }), `
`, _jsx(_components.li, {
            children: "-7：SDK 未初始化。请先初始化 RtcEngine 实例后再调用该方法。"
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
      id: "api_irtcengineex_enableencryptionex"
    }), `
`, _jsx(_components.h2, {
      id: "enableencryptionex",
      children: "enableEncryptionEx"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭内置加密功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableencryptionex__prototype"
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
              children: " enableEncryptionEx"
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
              children: " enabled, EncryptionConfig config, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableencryptionex__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "用户离开频道后，SDK 会自动关闭内置加密。你需要在用户重新加入频道前调用该方法。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "同一频道内的所有用户在调用该方法时必须设置相同的加密配置。"
      }), `
`, _jsx(_components.li, {
        children: "启用内置加密后，无法使用旁路推流功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableencryptionex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于多频道场景，或对安全性要求较高的场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableencryptionex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_enableencryptionex__parameters"
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
      children: "是否启用内置加密："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用内置加密。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭内置加密。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "config-1",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["内置加密配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-encryptionconfig",
        children: "EncryptionConfig"
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
      id: "api_irtcengineex_enableencryptionex__return_values"
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
      id: "api_irtcengine_enablewebsdkinteroperability"
    }), `
`, _jsx(_components.h2, {
      id: "enablewebsdkinteroperability",
      children: "enableWebSdkInteroperability"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭与声网 Web SDK 的互通功能，仅适用于直播场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablewebsdkinteroperability__prototype"
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
              children: " enableWebSdkInteroperability"
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
      id: "api_irtcengine_enablewebsdkinteroperability__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "该方法已废弃。SDK 自动开启与 Web SDK 的互通，无需调用该方法开启。"
    }), `
`, _jsx(_components.p, {
      children: "如果频道中存在 Web SDK 用户，必须调用该方法，否则 Native 用户的视频画面在 Web 端将显示为黑屏。该方法仅适用于直播场景，在语音通话场景中默认启用互通功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablewebsdkinteroperability__parameters"
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
      children: "是否启用互通功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用互通功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭互通功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablewebsdkinteroperability__return_values"
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
      id: "api_irtcengine_getcallid"
    }), `
`, _jsx(_components.h2, {
      id: "getcallid",
      children: "getCallId"
    }), `
`, _jsx(_components.p, {
      children: "获取当前通话 ID。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcallid__prototype"
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
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getCallId"
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
      id: "api_irtcengine_getcallid__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["客户端在用户加入频道后会生成一个用于标识当前通话的 ", _jsx(_components.code, {
        children: "callId"
      }), "。你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid",
        children: "getCallId"
      }), " 获取 ", _jsx(_components.code, {
        children: "callId"
      }), "，并在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate",
        children: "rate"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_complain",
        children: "complain"
      }), " 等方法时传入该值。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcallid__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法需要在加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcallid__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回当前通话的 callId。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
      id: "api_irtcengineex_getcallidex"
    }), `
`, _jsx(_components.h2, {
      id: "getcallidex",
      children: "getCallIdEx"
    }), `
`, _jsx(_components.p, {
      children: "获取与连接 ID 对应的通话 ID。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getcallidex__prototype"
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
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getCallIdEx"
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
      id: "api_irtcengineex_getcallidex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法获取 ", _jsx(_components.code, {
        children: "callId"
      }), "，并在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_rate",
        children: "rate"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_complain",
        children: "complain"
      }), " 等方法时传入该 ID。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getcallidex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getcallidex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getcallidex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
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
      id: "api_irtcengineex_getcallidex__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功时，返回通话 ID。 方法调用失败，返回空字符串。"
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
      id: "api_irtcengine_getconnectionstate"
    }), `
`, _jsx(_components.h2, {
      id: "getconnectionstate",
      children: "getConnectionState"
    }), `
`, _jsx(_components.p, {
      children: "获取 SDK 当前的连接状态。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getconnectionstate__prototype"
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
              children: " getConnectionState"
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
      id: "api_irtcengine_getconnectionstate__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getconnectionstate__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getconnectionstate__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回当前的连接状态。"
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
      id: "api_irtcengineex_getconnectionstateex"
    }), `
`, _jsx(_components.h2, {
      id: "getconnectionstateex",
      children: "getConnectionStateEx"
    }), `
`, _jsx(_components.p, {
      children: "获取 SDK 当前的连接状态。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getconnectionstateex__prototype"
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
              children: " getConnectionStateEx"
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
      id: "api_irtcengineex_getconnectionstateex__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getconnectionstateex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getconnectionstateex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_getconnectionstateex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
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
      id: "api_irtcengineex_getconnectionstateex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcurrentmonotonictimeinms"
    }), `
`, _jsx(_components.h2, {
      id: "getcurrentmonotonictimeinms",
      children: "getCurrentMonotonicTimeInMs"
    }), `
`, _jsx(_components.p, {
      children: "获取 SDK 当前的单调时间。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcurrentmonotonictimeinms__prototype"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getCurrentMonotonicTimeInMs"
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
      id: "api_irtcengine_getcurrentmonotonictimeinms__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在自定义视频采集和自定义音频采集场景中，为确保音视频同步，声网建议调用该方法获取 SDK 当前的单调时间，并将该值传入采集的视频帧 (", _jsx(_components.code, {
        children: "VideoFrame"
      }), ") 和音频帧 (", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-audioframe",
        children: "AudioFrame"
      }), ") 的时间戳参数中。单调时间是指一个随时间单调递增的时间序列，单位为毫秒。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcurrentmonotonictimeinms__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcurrentmonotonictimeinms__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回 SDK 当前的单调时间（单位为毫秒）。"
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
      id: "api_irtcengine_geterrordescription"
    }), `
`, _jsx(_components.h2, {
      id: "geterrordescription",
      children: "getErrorDescription"
    }), `
`, _jsx(_components.p, {
      children: "获取警告或错误码对应的描述信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geterrordescription__prototype"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getErrorDescription"
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
              children: " error)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geterrordescription__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geterrordescription__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "error",
      children: _jsx(_components.code, {
        children: "error"
      })
    }), `
`, _jsx(_components.p, {
      children: "SDK 报告的错误码。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geterrordescription__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功时，返回错误码对应的描述信息。 方法调用失败，返回空字符串。"
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
      id: "api_irtcengine_getnativehandle"
    }), `
`, _jsx(_components.h2, {
      id: "getnativehandle",
      children: "getNativeHandle"
    }), `
`, _jsx(_components.p, {
      children: "获取原生 SDK 的 C++ 句柄。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getnativehandle__prototype"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getNativeHandle"
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
      id: "api_irtcengine_getnativehandle__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法可用于注册音频和视频帧观察器。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getnativehandle__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-10",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回 SDK 的原生句柄。"
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
      id: "api_irtcengine_getnetworktype"
    }), `
`, _jsx(_components.h2, {
      id: "getnetworktype",
      children: "getNetworkType"
    }), `
`, _jsx(_components.p, {
      children: "获取本地网络连接类型。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getnetworktype__prototype"
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
              children: " getNetworkType"
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
      id: "api_irtcengine_getnetworktype__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以在任意阶段调用此方法获取当前使用的网络类型。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "你可以在加入频道前或后调用此方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getnetworktype__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-11",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["方法调用成功，返回本地网络连接类型：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "0：SDK 与网络断开连接。"
          }), `
`, _jsx(_components.li, {
            children: "1：网络类型为 LAN。"
          }), `
`, _jsx(_components.li, {
            children: "2：网络类型为 Wi-Fi（包括热点）。"
          }), `
`, _jsx(_components.li, {
            children: "3：网络类型为移动 2G。"
          }), `
`, _jsx(_components.li, {
            children: "4：网络类型为移动 3G。"
          }), `
`, _jsx(_components.li, {
            children: "5：网络类型为移动 4G。"
          }), `
`, _jsx(_components.li, {
            children: "6：网络类型为移动 5G。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["方法调用失败，返回错误码：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-1：网络类型未知。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_getntpwalltimeinms"
    }), `
`, _jsx(_components.h2, {
      id: "getntpwalltimeinms",
      children: "getNtpWallTimeInMs"
    }), `
`, _jsx(_components.p, {
      children: "获取当前 NTP（网络时间协议）时间。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getntpwalltimeinms__prototype"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getNtpWallTimeInMs"
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
      id: "api_irtcengine_getntpwalltimeinms__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "在实时合唱场景中，尤其是当多个接收端因网络问题导致下行链路连接不一致时，可以调用该方法获取当前 NTP 时间作为参考时间，以对齐多个接收端的歌词和音乐，实现合唱同步。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getntpwalltimeinms__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-12",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回当前 NTP 时间的 Unix 时间戳（毫秒）。"
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
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getversion"
    }), `
`, _jsx(_components.h2, {
      id: "getsdkversion",
      children: "getSdkVersion"
    }), `
`, _jsx(_components.p, {
      children: "获取 SDK 的版本号。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getversion__prototype"
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
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getSdkVersion"
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
      id: "api_irtcengine_getversion__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getversion__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-13",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功时，返回 SDK 的版本号字符串。 方法调用失败，返回空字符串。"
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
      id: "api_irtcengine_isfeatureavailableondevice"
    }), `
`, _jsx(_components.h2, {
      id: "isfeatureavailableondevice",
      children: "isFeatureAvailableOnDevice"
    }), `
`, _jsx(_components.p, {
      children: "检查当前设备是否支持指定的高级功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_isfeatureavailableondevice__prototype"
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
              children: " isFeatureAvailableOnDevice"
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
              children: " type);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_isfeatureavailableondevice__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.3.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "在使用高级功能前，建议调用该方法判断当前设备的能力是否满足要求，以避免在低端设备上启用高级功能时出现性能下降或功能不可用的情况。你可以根据该方法的返回值决定是否显示或启用相应的功能按钮，或在设备能力不足时提示用户。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_isfeatureavailableondevice__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "type",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "高级功能的类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "FEATURE_VIDEO_VIRTUAL_BACKGROUND （1）：虚拟背景。"
      }), `
`, _jsx(_components.li, {
        children: "FEATURE_VIDEO_BEAUTY_EFFECT （2）：美颜特效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_isfeatureavailableondevice__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-14",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：当前设备支持指定的功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：当前设备不支持指定的功能。"
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
      id: "api_irtcengine_querydevicescore"
    }), `
`, _jsx(_components.h2, {
      id: "querydevicescore",
      children: "queryDeviceScore"
    }), `
`, _jsx(_components.p, {
      children: "查询设备评分。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_querydevicescore__prototype"
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
              children: " queryDeviceScore"
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
      id: "api_irtcengine_querydevicescore__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法查询设备评分。如果返回的评分较低（例如低于 60），你需要降低视频分辨率，以避免影响视频体验。不同业务场景对设备评分的最低要求不同，具体评分建议请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_querydevicescore__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-15",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "> 0：方法调用成功，返回当前设备评分，范围为 [0, 100]，数值越大表示设备性能越强。"
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
      id: "api_irtcengine_rate"
    }), `
`, _jsx(_components.h2, {
      id: "rate",
      children: "rate"
    }), `
`, _jsx(_components.p, {
      children: "允许用户在通话结束后对通话进行评分。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_rate__prototype"
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
              children: " rate"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String callId, "
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
              children: " rating, String description);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_rate__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请确保在离开频道后调用此方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_rate__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "callid-1",
      children: _jsx(_components.code, {
        children: "callId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["当前通话的 ID。你可以通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_getcallid",
        children: "getCallId"
      }), " 获取该 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "rating",
      children: _jsx(_components.code, {
        children: "rating"
      })
    }), `
`, _jsx(_components.p, {
      children: "评分值，范围为 1（最低分）到 5（最高分）。"
    }), `
`, _jsx(_components.h4, {
      id: "description-1",
      children: _jsx(_components.code, {
        children: "description"
      })
    }), `
`, _jsx(_components.p, {
      children: "（可选）对通话的描述。字符串长度应小于 800 字节。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_rate__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-1：发生通用错误。"
          }), `
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
      id: "api_irtcengine_sendcustomreportmessage"
    }), `
`, _jsx(_components.h2, {
      id: "sendcustomreportmessage",
      children: "sendCustomReportMessage"
    }), `
`, _jsx(_components.p, {
      children: "上报自定义消息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_sendcustomreportmessage__prototype"
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
              children: " sendCustomReportMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String id, String category, String event, String label, "
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
      id: "api_irtcengine_sendcustomreportmessage__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该功能目前处于测试阶段，提供免费试用。在测试版本中，最多支持在 6 秒内上报 10 条消息，每条消息不超过 256 字节，每个字符串不超过 100 字节。如需试用该功能，请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "，并与我们讨论自定义消息的格式。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_sendcustomreportmessage__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "id",
      children: _jsx(_components.code, {
        children: "id"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "category",
      children: _jsx(_components.code, {
        children: "category"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的类别。"
    }), `
`, _jsx(_components.h4, {
      id: "event",
      children: _jsx(_components.code, {
        children: "event"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的事件名称。"
    }), `
`, _jsx(_components.h4, {
      id: "label",
      children: _jsx(_components.code, {
        children: "label"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的标签。"
    }), `
`, _jsx(_components.h4, {
      id: "value",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的数值。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_sendcustomreportmessage__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendcustomreportmessageex"
    }), `
`, _jsx(_components.h2, {
      id: "sendcustomreportmessageex",
      children: "sendCustomReportMessageEx"
    }), `
`, _jsx(_components.p, {
      children: "支持上报和分析自定义消息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendcustomreportmessageex__prototype"
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
              children: " sendCustomReportMessageEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String id, String category, String event, String label, "
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
              children: " value, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendcustomreportmessageex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该功能目前处于测试阶段，提供免费试用。在测试版本中，最多支持在 6 秒内上报 10 条消息，每条消息不超过 256 字节，每个字符串不超过 100 字节。如需试用该功能，请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "并与我们讨论自定义消息的格式。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendcustomreportmessageex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-4",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendcustomreportmessageex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "id-1",
      children: _jsx(_components.code, {
        children: "id"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "category-1",
      children: _jsx(_components.code, {
        children: "category"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的类别。"
    }), `
`, _jsx(_components.h4, {
      id: "event-1",
      children: _jsx(_components.code, {
        children: "event"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的事件名称。"
    }), `
`, _jsx(_components.h4, {
      id: "label-1",
      children: _jsx(_components.code, {
        children: "label"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的标签。"
    }), `
`, _jsx(_components.h4, {
      id: "value-1",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "自定义消息的数值。"
    }), `
`, _jsx(_components.h4, {
      id: "connection-3",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息，适用于多频道场景。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_sendcustomreportmessageex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setavsyncsource"
    }), `
`, _jsx(_components.h2, {
      id: "setavsyncsource",
      children: "setAVSyncSource"
    }), `
`, _jsx(_components.p, {
      children: "设置发布端的音视频同步源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setavsyncsource__prototype"
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
              children: " setAVSyncSource"
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
              children: " uid);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setavsyncsource__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以在视频发布设备上调用该方法，并传入音频发布设备所在频道的频道名和用户 ID。SDK 会以发送的音频流的时间戳为参考，自动调整视频流，从而确保即使两个发布设备的上行网络条件不同（例如一个使用 Wi-Fi，另一个使用 4G），接收端的音视频也能实现时间同步。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "建议在加入频道前调用此方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setavsyncsource__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelid",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频发布设备所在频道的频道名。"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "音频发布设备的用户 ID。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setavsyncsource__return_values"
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
      id: "api_irtcengine_setcloudproxy"
    }), `
`, _jsx(_components.h2, {
      id: "setcloudproxy",
      children: "setCloudProxy"
    }), `
`, _jsx(_components.p, {
      children: "设置云代理服务。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcloudproxy__prototype"
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
              children: " setCloudProxy"
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
              children: " proxyType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcloudproxy__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当用户的网络访问受防火墙限制时，需要先配置防火墙，允许访问声网提供的特定 IP 地址和端口，然后调用该方法启用云代理，并通过 ", _jsx(_components.code, {
        children: "proxyType"
      }), " 参数设置云代理类型。成功连接云代理后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
        children: "onConnectionStateChanged"
      }), " 回调，状态为 ", _jsx(_components.code, {
        children: "CONNECTION_STATE_CONNECTING"
      }), "，原因为 ", _jsx(_components.code, {
        children: "CONNECTION_CHANGED_SETTING_PROXY_SERVER"
      }), "。 如需关闭已设置的云代理，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy",
        children: "setCloudProxy"
      }), "，并将 ", _jsx(_components.code, {
        children: "proxyType"
      }), " 设置为 ", _jsx(_components.code, {
        children: "TRANSPORT_TYPE_NONE_PROXY"
      }), "。 如需切换云代理类型，请先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy",
        children: "setCloudProxy"
      }), " 关闭当前代理（", _jsx(_components.code, {
        children: "proxyType"
      }), " 设置为 ", _jsx(_components.code, {
        children: "TRANSPORT_TYPE_NONE_PROXY"
      }), " ），再调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy",
        children: "setCloudProxy"
      }), " 设置新的 ", _jsx(_components.code, {
        children: "proxyType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "建议在加入频道前调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "当用户处于防火墙之后并使用强制 UDP 云代理时，媒体推流和跨频道联播服务不可用。"
      }), `
`, _jsx(_components.li, {
        children: "使用强制 TCP 云代理时，调用 startAudioMixing 播放 HTTP 协议的在线音乐文件会报错。媒体推流和跨频道联播服务使用 TCP 协议的云代理。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcloudproxy__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "proxytype",
      children: _jsx(_components.code, {
        children: "proxyType"
      })
    }), `
`, _jsx(_components.p, {
      children: "云代理的类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "TRANSPORT_TYPE_NONE_PROXY (0)：自动模式。SDK 默认启用该模式。在此模式下，SDK 会尝试直接连接 SD-RTN™，若失败则自动切换至 TCP/TLS 443。"
      }), `
`, _jsx(_components.li, {
        children: "TRANSPORT_TYPE_UDP_PROXY (1)：UDP 协议的云代理，即强制 UDP 云代理模式。在此模式下，SDK 始终通过 UDP 传输数据。"
      }), `
`, _jsx(_components.li, {
        children: "TRANSPORT_TYPE_TCP_PROXY (2)：TCP（加密）协议的云代理，即强制 TCP 云代理模式。在此模式下，SDK 始终通过 TCP/TLS 443 传输数据。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcloudproxy__return_values"
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
      id: "api_irtcengine_setlocalaccesspoint"
    }), `
`, _jsx(_components.h2, {
      id: "setlocalaccesspoint",
      children: "setLocalAccessPoint"
    }), `
`, _jsx(_components.p, {
      children: "配置连接到声网私有媒体服务器接入模块。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalaccesspoint__prototype"
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
              children: " setLocalAccessPoint"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LocalAccessPointConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalaccesspoint__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "成功部署声网混合云解决方案并将 4.x RTC SDK 集成到内网客户端后，可以调用该方法指定本地接入点，并将接入模块分配给 SDK。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法仅在部署声网混合云解决方案后生效。你可以联系销售了解并部署声网混合云。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalaccesspoint__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "必须在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalaccesspoint__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-2",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地接入点配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localaccesspointconfiguration",
        children: "LocalAccessPointConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalaccesspoint__return_values"
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
      id: "api_irtcengine_setlogfile"
    }), `
`, _jsx(_components.h2, {
      id: "setlogfile",
      children: "setLogFile"
    }), `
`, _jsx(_components.p, {
      children: "设置 SDK 输出日志文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfile__prototype"
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
              children: " setLogFile"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String filePath);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfile__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 时通过 ", _jsx(_components.code, {
        children: "config"
      }), " 参数设置日志文件路径。"]
    }), `
`, _jsxs(_components.p, {
      children: ["该方法需在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 后立即调用，否则输出日志可能不完整。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "确保日志文件所在目录存在且可写。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfile__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-8",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法需在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_create_ilocalspatialaudioengine",
        children: "create"
      }), " 后立即调用，否则输出日志可能不完整。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfile__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "filepath",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "日志文件的完整路径，日志文件使用 UTF-8 编码。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfile__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilesize"
    }), `
`, _jsx(_components.h2, {
      id: "setlogfilesize",
      children: "setLogFileSize"
    }), `
`, _jsx(_components.p, {
      children: "设置 SDK 日志文件的大小。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilesize__prototype"
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
              children: " setLogFileSize"
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
              children: "long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " fileSizeInKBytes);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilesize__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-2",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 中的 ", _jsx(_components.code, {
        children: "logConfig"
      }), " 参数设置日志文件大小。"]
    }), `
`, _jsx(_components.p, {
      children: "默认情况下，SDK 会生成五个 SDK 日志文件和五个 API 调用日志文件，规则如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SDK 日志文件包括： agorasdk.log、 agorasdk.1.log、 agorasdk.2.log、 agorasdk.3.log 和 agorasdk.4.log。"
      }), `
`, _jsx(_components.li, {
        children: "API 调用日志文件包括： agoraapi.log、 agoraapi.1.log、 agoraapi.2.log、 agoraapi.3.log 和 agoraapi.4.log。"
      }), `
`, _jsx(_components.li, {
        children: "每个日志文件的默认大小为 2,048 KB，采用 UTF-8 编码。"
      }), `
`, _jsx(_components.li, {
        children: "SDK 会将最新日志写入 agorasdk.log 或 agoraapi.log 文件。"
      }), `
`, _jsxs(_components.li, {
        children: ["当 agorasdk.log 写满时，SDK 会按以下顺序处理日志文件：", `
`, _jsxs(_components.ol, {
          children: [`
`, _jsx(_components.li, {
            children: "删除 agorasdk.4.log （如果存在）。"
          }), `
`, _jsx(_components.li, {
            children: "将 agorasdk.3.log 重命名为 agorasdk.4.log。"
          }), `
`, _jsx(_components.li, {
            children: "将 agorasdk.2.log 重命名为 agorasdk.3.log。"
          }), `
`, _jsx(_components.li, {
            children: "将 agorasdk.1.log 重命名为 agorasdk.2.log。"
          }), `
`, _jsx(_components.li, {
            children: "创建新的 agorasdk.log 文件。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "agoraapi.log 的覆盖规则与 agorasdk.log 相同。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setlogfilesize",
            children: "setLogFileSize"
          }), " 仅用于设置 ", _jsx(_components.code, {
            children: "agorasdk.log"
          }), " 文件的大小，不影响 ", _jsx(_components.code, {
            children: "agoraapi.log"
          }), " 文件。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilesize__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "filesizeinkbytes",
      children: _jsx(_components.code, {
        children: "fileSizeInKBytes"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "agorasdk.log"
      }), " 文件的大小，单位为 KB。取值范围为 [128, 20480]，默认值为 2,048 KB。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果设置值小于 128 KB，SDK 会自动调整为 128 KB。"
      }), `
`, _jsx(_components.li, {
        children: "如果设置值大于 20,480 KB，SDK 会自动调整为 20,480 KB。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilesize__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilter"
    }), `
`, _jsx(_components.h2, {
      id: "setlogfilter",
      children: "setLogFilter"
    }), `
`, _jsx(_components.p, {
      children: "设置 SDK 的日志输出等级。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilter__prototype"
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
              children: " setLogFilter"
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
              children: " filter);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilter__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-3",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 中的 ", _jsx(_components.code, {
        children: "logConfig"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["你可以使用一个或多个日志过滤等级的组合。日志等级的顺序为 ", _jsx(_components.code, {
        children: "LOG_FILTER_OFF"
      }), "、 ", _jsx(_components.code, {
        children: "LOG_FILTER_CRITICAL"
      }), "、 ", _jsx(_components.code, {
        children: "LOG_FILTER_ERROR"
      }), "、 ", _jsx(_components.code, {
        children: "LOG_FILTER_WARN"
      }), "、 ", _jsx(_components.code, {
        children: "LOG_FILTER_INFO"
      }), " 和 ", _jsx(_components.code, {
        children: "LOG_FILTER_DEBUG"
      }), "。选择一个等级可以查看该等级及其之前的日志信息。例如，如果将日志等级设置为 ", _jsx(_components.code, {
        children: "LOG_FILTER_WARN"
      }), "，你将看到 ", _jsx(_components.code, {
        children: "LOG_FILTER_CRITICAL"
      }), "、 ", _jsx(_components.code, {
        children: "LOG_FILTER_ERROR"
      }), " 和 ", _jsx(_components.code, {
        children: "LOG_FILTER_WARN"
      }), " 等级的日志信息。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilter__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "filter",
      children: _jsx(_components.code, {
        children: "filter"
      })
    }), `
`, _jsx(_components.p, {
      children: "SDK 的日志输出等级。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LOG_FILTER_OFF (0)：不输出任何日志信息。"
      }), `
`, _jsx(_components.li, {
        children: "LOG_FILTER_DEBUG (0x080f)：输出所有日志信息。如果你希望获取最完整的日志文件，请将日志过滤等级设置为 LOG_FILTER_DEBUG。"
      }), `
`, _jsx(_components.li, {
        children: "LOG_FILTER_INFO (0x0f)：输出 LOG_FILTER_CRITICAL、 LOG_FILTER_ERROR、 LOG_FILTER_WARN 和 LOG_FILTER_INFO 等级的日志信息。建议将日志等级设置为该等级。"
      }), `
`, _jsx(_components.li, {
        children: "LOG_FILTER_WARN (0x0e)：输出 LOG_FILTER_CRITICAL、 LOG_FILTER_ERROR 和 LOG_FILTER_WARN 等级的日志信息。"
      }), `
`, _jsx(_components.li, {
        children: "LOG_FILTER_ERROR (0x0c)：输出 LOG_FILTER_CRITICAL 和 LOG_FILTER_ERROR 等级的日志信息。"
      }), `
`, _jsx(_components.li, {
        children: "LOG_FILTER_CRITICAL (0x08)：仅输出 LOG_FILTER_CRITICAL 等级的日志信息。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlogfilter__return_values"
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
      id: "api_irtcengine_setloglevel"
    }), `
`, _jsx(_components.h2, {
      id: "setloglevel",
      children: "setLogLevel"
    }), `
`, _jsx(_components.p, {
      children: "设置 SDK 的输出日志等级。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setloglevel__prototype"
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
              children: " setLogLevel"
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
              children: " level);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setloglevel__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-4",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 时通过 ", _jsx(_components.code, {
        children: "config"
      }), " 参数设置日志输出级别。"]
    }), `
`, _jsx(_components.p, {
      children: "选择一个日志等级，以查看该等级及更高级别的日志信息。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setloglevel__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "level",
      children: _jsx(_components.code, {
        children: "level"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["日志等级。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-loglevel",
        children: "LogLevel"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setloglevel__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setparameters"
    }), `
`, _jsx(_components.h2, {
      id: "setparameters",
      children: "setParameters"
    }), `
`, _jsx(_components.p, {
      children: "通过配置 JSON 选项，为 SDK 提供技术预览功能或特殊定制。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setparameters__prototype"
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
              children: " setParameters"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String parameters);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setparameters__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "parameters",
      children: _jsx(_components.code, {
        children: "parameters"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于设置参数的 JSON 字符串。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setparameters__return_values"
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
      id: "api_irtcengine_setremotesubscribefallbackoption"
    }), `
`, _jsx(_components.h2, {
      id: "setremotesubscribefallbackoption-12",
      children: "setRemoteSubscribeFallbackOption [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "根据网络状况设置订阅端的视频流回退选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotesubscribefallbackoption__prototype"
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
              children: " setRemoteSubscribeFallbackOption"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.StreamFallbackOptions option);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotesubscribefallbackoption__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果将 ", _jsx(_components.code, {
        children: "option"
      }), " 设置为 ", _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW"
      }), " 或 ", _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_AUDIO_ONLY"
      }), "，当下行网络无法同时支持音视频时，SDK 会自动将视频从高质量流切换为低质量流，或关闭视频以保障音频质量。SDK 会持续监测网络质量，在网络改善时恢复音视频流的订阅。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当订阅的视频流回退为纯音频流，或从纯音频流恢复为音视频流时，SDK 会触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly",
            children: "onRemoteSubscribeFallbackToAudioOnly"
          }), " 回调。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotesubscribefallbackoption__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-19",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "option",
      children: _jsx(_components.code, {
        children: "option"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["订阅流的回退选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-streamfallbackoptions",
        children: "StreamFallbackOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotesubscribefallbackoption__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotesubscribefallbackoption2"
    }), `
`, _jsx(_components.h2, {
      id: "setremotesubscribefallbackoption-22",
      children: "setRemoteSubscribeFallbackOption [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "根据网络状况设置已订阅视频流的回退选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotesubscribefallbackoption2__prototype"
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
              children: " setRemoteSubscribeFallbackOption"
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
              children: " option)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotesubscribefallbackoption2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-5",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "该方法已废弃。"
    }), `
`, _jsxs(_components.p, {
      children: ["不稳定的网络会影响视频通话或互动直播中的音视频质量。当下行网络无法同时支持音视频时，若将 ", _jsx(_components.code, {
        children: "option"
      }), " 设置为 ", _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW"
      }), " 或 ", _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_AUDIO_ONLY"
      }), "，SDK 会自动将视频从高质量流切换为低质量流，或关闭视频以保障音频质量。SDK 会持续监测网络质量，在网络改善后恢复订阅音视频流。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["当已订阅的视频流回退为纯音频流，或从纯音频流恢复为音视频流时，SDK 会触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly",
            children: "onRemoteSubscribeFallbackToAudioOnly"
          }), " 回调。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotesubscribefallbackoption2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-20",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "option-1",
      children: _jsx(_components.code, {
        children: "option"
      })
    }), `
`, _jsx(_components.p, {
      children: "已订阅流的回退选项："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "STREAM_FALLBACK_OPTION_DISABLED （0）：不对音视频流进行回退处理，无法保证音视频质量。"
      }), `
`, _jsx(_components.li, {
        children: "STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW （1）：（默认）在下行网络较差时，订阅的远端视频流回退为低质量（低分辨率、低码率）的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "STREAM_FALLBACK_OPTION_AUDIO_ONLY （2）：在网络条件较差时，优先尝试接收视频小流；若因网络极差无法显示视频，则回退为仅接收音频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremotesubscribefallbackoption2__return_values"
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
      id: "api_irtcengine_startechotest3"
    }), `
`, _jsx(_components.h2, {
      id: "startechotest",
      children: "startEchoTest"
    }), `
`, _jsx(_components.p, {
      children: "开始音视频设备回路测试。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startechotest3__prototype"
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
              children: " startEchoTest"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(EchoTestConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startechotest3__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法执行一次音视频通话回路测试，用于检测音视频设备以及用户上下行网络是否正常工作。开始测试后，用户需要发出声音或面对摄像头，音频或视频将在约两秒后输出。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在频道中调用该方法时，请确保未发布任何音视频流。"
      }), `
`, _jsx(_components.li, {
        children: "调用该方法后需调用 stopEchoTest 结束测试，否则用户无法进行下一次音视频通话回路测试，也无法加入频道。"
      }), `
`, _jsx(_components.li, {
        children: "在直播场景中，该方法仅适用于主播。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startechotest3__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-9",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startechotest3__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-21",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-3",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音视频通话回路测试的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-echotestconfiguration",
        children: "EchoTestConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startechotest3__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlastmileprobetest"
    }), `
`, _jsx(_components.h2, {
      id: "startlastmileprobetest",
      children: "startLastmileProbeTest"
    }), `
`, _jsx(_components.p, {
      children: "开始 Last-mile 网络探测测试。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlastmileprobetest__prototype"
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
              children: " startLastmileProbeTest"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LastmileProbeConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlastmileprobetest__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法在加入频道前启动 Last-mile 网络探测测试，用于获取上行和下行的网络统计信息，包括带宽、丢包率、抖动和往返时延（RTT）。"
    }), `
`, _jsxs(_components.p, {
      children: ["注： 调用时序：在收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmilequality",
        children: "onLastmileQuality"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onlastmileproberesult",
        children: "onLastmileProbeResult"
      }), " 回调前，请勿调用其他方法，否则可能会中断这些回调。 相关回调：成功调用该方法后，SDK 会依次触发以下两个回调："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "onLastmileQuality：SDK 会在约两秒内根据网络状况触发该回调。该回调用于评估网络质量，与用户体验更相关。"
      }), `
`, _jsx(_components.li, {
        children: "onLastmileProbeResult：SDK 会在约 30 秒内根据网络状况触发该回调。该回调返回网络状况的实时统计数据，更加客观。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlastmileprobetest__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-22",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-4",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Last-mile 网络探测测试的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lastmileprobeconfig",
        children: "LastmileProbeConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startlastmileprobetest__return_values"
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
      id: "api_irtcengine_stopechotest"
    }), `
`, _jsx(_components.h2, {
      id: "stopechotest",
      children: "stopEchoTest"
    }), `
`, _jsx(_components.p, {
      children: "停止音频通话测试。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopechotest__prototype"
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
              children: " stopEchoTest"
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
      id: "api_irtcengine_stopechotest__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startechotest3",
        children: "startEchoTest"
      }), " 后，必须调用该方法结束测试，否则你无法进行下一次音视频通话回路测试，也无法加入频道。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopechotest__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-5：停止回声测试失败，可能未在运行回声测试。"
          }), `
`]
        }), `
`]
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoplastmileprobetest"
    }), `
`, _jsx(_components.h2, {
      id: "stoplastmileprobetest",
      children: "stopLastmileProbeTest"
    }), `
`, _jsx(_components.p, {
      children: "停止 Last-mile 网络探测测试。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoplastmileprobetest__prototype"
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
              children: " stopLastmileProbeTest"
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
      id: "api_irtcengine_stoplastmileprobetest__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoplastmileprobetest__return_values"
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
      id: "callback_irtcengineeventhandler_onconnectionbanned"
    }), `
`, _jsx(_components.h2, {
      id: "onconnectionbanned",
      children: "onConnectionBanned"
    }), `
`, _jsx(_components.p, {
      children: "连接被声网服务器封禁时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onconnectionbanned__prototype"
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
              children: " onConnectionBanned"
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
      id: "callback_irtcengineeventhandler_onconnectionbanned__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-6",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
        children: "onConnectionStateChanged"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onconnectionbanned__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在连接被声网服务器封禁时被触发。"
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
      id: "callback_irtcengineeventhandler_onconnectioninterrupted"
    }), `
`, _jsx(_components.h2, {
      id: "onconnectioninterrupted",
      children: "onConnectionInterrupted"
    }), `
`, _jsx(_components.p, {
      children: "onConnectionInterrupted 回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onconnectioninterrupted__prototype"
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
              children: " onConnectionInterrupted"
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
      id: "callback_irtcengineeventhandler_onconnectioninterrupted__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-7",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionstatechanged",
        children: "onConnectionStateChanged"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在 SDK 建立连接后与服务器断开连接超过四秒时被触发。触发该回调后，SDK 会尝试重新连接服务器。你可以通过该回调实现弹窗提醒功能。 该回调与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#callback_irtcengineeventhandler_onconnectionlost",
        children: "onConnectionLost"
      }), " 的区别如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当 SDK 成功加入频道后，与服务器断开连接超过四秒时，会触发 onConnectionInterrupted 回调。"
      }), `
`, _jsx(_components.li, {
        children: "无论是否加入频道，当 SDK 与服务器断开连接超过 10 秒时，会触发 onConnectionLost 回调。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "如果 SDK 在与声网边缘服务器断开连接后 20 分钟内仍未重新加入频道，则停止重连。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onconnectioninterrupted__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 与服务器断开连接超过四秒时被触发。"
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
      id: "callback_irtcengineeventhandler_onconnectionlost"
    }), `
`, _jsx(_components.h2, {
      id: "onconnectionlost",
      children: "onConnectionLost"
    }), `
`, _jsx(_components.p, {
      children: "onConnectionLost 回调：当 SDK 在连接中断后 10 秒内无法重新连接到声网边缘服务器时触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onconnectionlost__prototype"
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
              children: " onConnectionLost"
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
      id: "callback_irtcengineeventhandler_onconnectionlost__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["无论是否在频道中，当调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 方法后，SDK 在连接中断后 10 秒内无法连接到服务器时会触发该回调。如果 SDK 在与声网边缘服务器断开连接后 20 分钟内仍无法重新加入频道，则停止重连。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onconnectionlost__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 后，SDK 与服务器连接中断并在 10 秒内无法重新连接时被触发。"]
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
      id: "callback_irtcengineeventhandler_onconnectionstatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onconnectionstatechanged",
      children: "onConnectionStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "网络连接状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onconnectionstatechanged__prototype"
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
              children: " onConnectionStateChanged"
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
      id: "callback_irtcengineeventhandler_onconnectionstatechanged__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-1",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v2.3.2 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "SDK 会在网络连接状态发生变化时触发该回调，并报告当前的连接状态及其变化原因。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onconnectionstatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-3",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在网络连接状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onconnectionstatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-23",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前的连接状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CONNECTION_STATE_DISCONNECTED (1)：SDK 与声网边缘服务器断开连接。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_STATE_CONNECTING (2)：SDK 正在连接声网边缘服务器。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_STATE_CONNECTED (3)：SDK 已连接到声网边缘服务器。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_STATE_RECONNECTING (4)：SDK 尝试重新连接声网边缘服务器。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_STATE_FAILED (5)：SDK 连接声网边缘服务器失败。"
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
      children: "连接状态变化的原因："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CONNECTION_CHANGED_CONNECTING (0)：SDK 正在连接声网边缘服务器。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_CHANGED_JOIN_SUCCESS (1)：SDK 成功加入频道。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_CHANGED_INTERRUPTED (2)：SDK 与声网边缘服务器之间的连接中断。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_CHANGED_BANNED_BY_SERVER (3)：连接被声网服务器禁止，例如用户被踢出频道时会返回该错误码。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_CHANGED_JOIN_FAILED (4)：SDK 加入频道失败。若超过 20 分钟未能加入频道，SDK 会停止重连并返回该错误码。你需要提示用户尝试切换网络并重新加入频道。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_CHANGED_LEAVE_CHANNEL (5)：SDK 已离开频道。"
      }), `
`, _jsx(_components.li, {
        children: "CONNECTION_CHANGED_INVALID_APP_ID (6)：无效的 App ID。你需要使用有效的 App ID 重新加入频道，并确保该 App ID 与声网控制台中生成的一致。"
      }), `
`, _jsxs(_components.li, {
        children: ["CONNECTION_CHANGED_INVALID_CHANNEL_NAME (7)：无效的频道名。请使用有效的频道名重新加入频道。有效的频道名为不超过 64 字节的字符串，支持的字符包括：", `
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
            children: "特殊字符：!, #, $, %, &, (,), +, -,:,;, <, =,., >,?, @, [,], ^, _, {, }, |, ~,,。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["CONNECTION_CHANGED_INVALID_TOKEN (8)：无效的 Token。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "项目在声网控制台启用了 App Certificate，但加入频道时未传入 Token。"
          }), `
`, _jsx(_components.li, {
            children: "调用 joinChannel 加入频道时指定的 uid 与生成 Token 时传入的 uid 不一致。"
          }), `
`, _jsx(_components.li, {
            children: "使用的 Token 与生成的 Token 不一致。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "请确保："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "项目启用 App Certificate 时，加入频道必须传入 Token。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "生成 Token 时指定的用户 ID 与加入频道时使用的用户 ID 一致。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "使用的 Token 与生成的 Token 一致。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_TOKEN_EXPIRED (9)：当前使用的 Token 已过期。你需要在服务器上生成新的 Token，并使用新 Token 重新加入频道。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_REJECTED_BY_SERVER (10)：用户被服务器禁止。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_SETTING_PROXY_SERVER (11)：设置代理服务器后，SDK 尝试重新连接。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_RENEW_TOKEN (12)：由于 Token 被更新，连接状态发生变化。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_CLIENT_IP_ADDRESS_CHANGED (13)：客户端 IP 地址发生变化。如果多次收到该错误码，你需要提示用户切换网络并重新加入频道。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_KEEP_ALIVE_TIMEOUT (14)：SDK 与声网边缘服务器之间的连接保活超时，SDK 会自动尝试重新连接。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_REJOIN_SUCCESS (15)：SDK 成功重新加入频道。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_LOST (16)：SDK 与服务器之间的连接丢失。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_ECHO_TEST (17)：由于回声测试，连接状态发生变化。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_CLIENT_IP_ADDRESS_CHANGED_BY_USER (18)：本地 IP 地址被用户更改。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_SAME_UID_LOGIN (19)：用户在不同设备上以相同的 uid 加入同一频道。注意：以相同 uid 加入同一 RTC 频道属于未定义行为，声网不保证在相同情况下始终触发该错误码。"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "CONNECTION_CHANGED_TOO_MANY_BROADCASTERS (20)：频道中的主播数量已达上限。"
        }), `
`]
      }), `
`]
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
      id: "callback_irtcengineeventhandler_onencryptionerror"
    }), `
`, _jsx(_components.h2, {
      id: "onencryptionerror",
      children: "onEncryptionError"
    }), `
`, _jsx(_components.p, {
      children: "内置加密错误回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onencryptionerror__prototype"
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
              children: " onEncryptionError"
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
              children: " errorType)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onencryptionerror__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_enableencryption",
        children: "enableEncryption"
      }), " 启用加密功能后，发送端或接收端在加密或解密过程中发生错误，SDK 会触发该回调。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onencryptionerror__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-4",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在加密或解密过程中发生错误时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onencryptionerror__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-24",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "errortype",
      children: _jsx(_components.code, {
        children: "errorType"
      })
    }), `
`, _jsx(_components.p, {
      children: "错误类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "ENCRYPTION_ERROR_INTERNAL_FAILURE （0）：内部原因。"
      }), `
`, _jsx(_components.li, {
        children: "ENCRYPTION_ERROR_DECRYPTION_FAILURE （1）：媒体流解密错误。请确保接收端和发送端使用相同的加密模式和密钥。"
      }), `
`, _jsx(_components.li, {
        children: "ENCRYPTION_ERROR_ENCRYPTION_FAILURE （2）：媒体流加密错误。"
      }), `
`, _jsx(_components.li, {
        children: "ENCRYPTION_ERROR_DATASTREAM_DECRYPTION_FAILURE （3）：数据流解密错误。请确保接收端和发送端使用相同的加密模式和密钥。"
      }), `
`, _jsx(_components.li, {
        children: "ENCRYPTION_ERROR_DATASTREAM_ENCRYPTION_FAILURE （4）：数据流加密错误。"
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
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlastmileproberesult"
    }), `
`, _jsx(_components.h2, {
      id: "onlastmileproberesult",
      children: "onLastmileProbeResult"
    }), `
`, _jsx(_components.p, {
      children: "上行和下行 Last-mile 网络探测测试结果的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlastmileproberesult__prototype"
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
              children: " onLastmileProbeResult"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LastmileProbeResult result) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlastmileproberesult__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest",
        children: "startLastmileProbeTest"
      }), " 后触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlastmileproberesult__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-5",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest",
        children: "startLastmileProbeTest"
      }), " 后 30 秒内被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlastmileproberesult__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-25",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "result",
      children: _jsx(_components.code, {
        children: "result"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["上行和下行 Last-mile 网络探测测试结果。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lastmileproberesult",
        children: "LastmileProbeResult"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-38",
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
      id: "callback_irtcengineeventhandler_onlastmilequality"
    }), `
`, _jsx(_components.h2, {
      id: "onlastmilequality",
      children: "onLastmileQuality"
    }), `
`, _jsx(_components.p, {
      children: "本地用户的 Last-mile 网络质量回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlastmilequality__prototype"
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
              children: " onLastmileQuality"
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
              children: " quality)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlastmilequality__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在用户加入频道前触发，用于上报本地用户与声网边缘服务器之间连接的 Last-mile 网络质量。在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest",
        children: "startLastmileProbeTest"
      }), " 后，SDK 会触发该回调。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlastmilequality__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-6",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_startlastmileprobetest",
        children: "startLastmileProbeTest"
      }), " 方法后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlastmilequality__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-26",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "quality",
      children: _jsx(_components.code, {
        children: "quality"
      })
    }), `
`, _jsx(_components.p, {
      children: "Last-mile 网络质量："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "QUALITY_UNKNOWN (0)：网络质量未知。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_EXCELLENT (1)：网络质量极好。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_GOOD (2)：网络质量较好，但码率可能略低于极好。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_POOR (3)：通信质量略有下降。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_BAD (4)：无法流畅通信。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_VBAD (5)：网络质量极差，几乎无法通信。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_DOWN (6)：网络连接已断，无法通信。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_DETECTING (8)：正在进行 Last-mile 探测。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-39",
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
      id: "callback_irtcengineeventhandler_onmultipathstats"
    }), `
`, _jsx(_components.h2, {
      id: "onmultipathstats",
      children: "onMultipathStats"
    }), `
`, _jsx(_components.p, {
      children: "多路径传输统计信息回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onmultipathstats__prototype"
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
              children: " onMultipathStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(MultipathStats stats) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onmultipathstats__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-2",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onmultipathstats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-7",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在你将 ", _jsx(_components.code, {
        children: "enableMultipath"
      }), " 设置为 true 以启用多路径传输后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onmultipathstats__parameters"
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
      children: ["多路径传输统计信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-multipathstats",
        children: "MultipathStats"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-40",
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
      id: "callback_irtcengineeventhandler_onnetworkquality"
    }), `
`, _jsx(_components.h2, {
      id: "onnetworkquality",
      children: "onNetworkQuality"
    }), `
`, _jsx(_components.p, {
      children: "onNetworkQuality 回调。报告频道中每个用户的 Last-mile 网络质量。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onnetworkquality__prototype"
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
              children: " onNetworkQuality"
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
              children: " txQuality, "
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
              children: " rxQuality)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onnetworkquality__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调通过在频道内发送和接收广播数据包来反馈网络质量。过多的广播数据包可能导致广播风暴。为防止广播风暴造成频道内大量数据传输，该回调默认最多同时反馈 4 个远端用户的网络质量。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "txQuality"
          }), " 在用户未发送流时为 ", _jsx(_components.code, {
            children: "UNKNOWN"
          }), "； ", _jsx(_components.code, {
            children: "rxQuality"
          }), " 在用户未接收流时为 ", _jsx(_components.code, {
            children: "UNKNOWN"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onnetworkquality__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-8",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调每两秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onnetworkquality__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-28",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-1",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 ID，用于标识被报告网络质量的用户。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：表示本地用户。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "txquality",
      children: _jsx(_components.code, {
        children: "txQuality"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户上行网络质量评分，依据传输码率、丢包率、平均往返时延（RTT）和抖动等指标评估。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "QUALITY_UNKNOWN (0)：质量未知。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_EXCELLENT (1)：质量极佳。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_GOOD (2)：网络质量看似极佳，但码率略低于极佳。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_POOR (3)：用户能感受到通信略有卡顿。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_BAD (4)：用户无法流畅通信。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_VBAD (5)：质量极差，用户几乎无法通信。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_DOWN (6)：网络连接已断，用户无法通信。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_DETECTING (8)：正在进行 Last-mile 探测测试。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "rxquality",
      children: _jsx(_components.code, {
        children: "rxQuality"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户下行网络质量评分，依据丢包率、平均往返时延（RTT）和抖动等指标评估。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "QUALITY_UNKNOWN (0)：质量未知。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_EXCELLENT (1)：质量极佳。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_GOOD (2)：网络质量看似极佳，但码率略低于极佳。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_POOR (3)：用户能感受到通信略有卡顿。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_BAD (4)：用户无法流畅通信。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_VBAD (5)：质量极差，用户几乎无法通信。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_DOWN (6)：网络连接已断，用户无法通信。"
      }), `
`, _jsx(_components.li, {
        children: "QUALITY_DETECTING (8)：正在进行 Last-mile 探测测试。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-41",
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
      id: "callback_irtcengineeventhandler_onnetworktypechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onnetworktypechanged",
      children: "onNetworkTypeChanged"
    }), `
`, _jsx(_components.p, {
      children: "本地网络类型发生变化时的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onnetworktypechanged__prototype"
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
              children: " onNetworkTypeChanged"
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
              children: " type)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onnetworktypechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以通过该回调获取连接状态及其变化原因。当网络连接中断时，该回调会指示中断是由于网络类型变化还是由于网络状况不佳导致的。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onnetworktypechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-9",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地网络类型发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onnetworktypechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-29",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "type-1",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "网络类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "NETWORK_TYPE_UNKNOWN （-1）：网络类型未知。"
      }), `
`, _jsx(_components.li, {
        children: "NETWORK_TYPE_DISCONNECTED （0）：SDK 与网络断开连接。"
      }), `
`, _jsx(_components.li, {
        children: "NETWORK_TYPE_LAN （1）：网络类型为 LAN。"
      }), `
`, _jsx(_components.li, {
        children: "NETWORK_TYPE_WIFI （2）：网络类型为 Wi-Fi（包括热点）。"
      }), `
`, _jsx(_components.li, {
        children: "NETWORK_TYPE_MOBILE_2G （3）：网络类型为移动 2G。"
      }), `
`, _jsx(_components.li, {
        children: "NETWORK_TYPE_MOBILE_3G （4）：网络类型为移动 3G。"
      }), `
`, _jsx(_components.li, {
        children: "NETWORK_TYPE_MOBILE_4G （5）：网络类型为移动 4G。"
      }), `
`, _jsx(_components.li, {
        children: "NETWORK_TYPE_MOBILE_5G （6）：网络类型为移动 5G。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-42",
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
      id: "callback_irtcengineeventhandler_onpermissionerror"
    }), `
`, _jsx(_components.h2, {
      id: "onpermissionerror",
      children: "onPermissionError"
    }), `
`, _jsx(_components.p, {
      children: "设备权限获取失败时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onpermissionerror__prototype"
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
              children: " onPermissionError"
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
              children: " permission)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onpermissionerror__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 无法获取设备权限时被触发，用于报告无法获取的权限类型。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onpermissionerror__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-10",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 无法获取设备权限时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onpermissionerror__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-30",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "permission",
      children: _jsx(_components.code, {
        children: "permission"
      })
    }), `
`, _jsx(_components.p, {
      children: "设备权限的类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RECORD_AUDIO （0）：音频采集设备的权限。"
      }), `
`, _jsx(_components.li, {
        children: "CAMERA （1）：摄像头的权限。"
      }), `
`, _jsx(_components.li, {
        children: "SCREEN_CAPTURE （2）：屏幕共享的权限。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-43",
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
      id: "callback_irtcengineeventhandler_onpermissiongranted"
    }), `
`, _jsx(_components.h2, {
      id: "onpermissiongranted",
      children: "onPermissionGranted"
    }), `
`, _jsx(_components.p, {
      children: "onPermissionGranted 回调。用于上报已授予的权限。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onpermissiongranted__prototype"
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
              children: " onPermissionGranted"
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
              children: " permission)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onpermissiongranted__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onpermissiongranted__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-31",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "permission-1",
      children: _jsx(_components.code, {
        children: "permission"
      })
    }), `
`, _jsx(_components.p, {
      children: "权限类型。包括："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RECORD_AUDIO：录音权限。"
      }), `
`, _jsx(_components.li, {
        children: "CAMERA：摄像头权限。"
      }), `
`, _jsx(_components.li, {
        children: "SCREEN_CAPTURE：屏幕采集权限。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-44",
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
      id: "callback_irtcengineeventhandler_onproxyconnected"
    }), `
`, _jsx(_components.h2, {
      id: "onproxyconnected",
      children: "onProxyConnected"
    }), `
`, _jsx(_components.p, {
      children: "代理连接状态回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onproxyconnected__prototype"
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
              children: " onProxyConnected"
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
              children: " proxyType, String localProxyIp, "
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
      id: "callback_irtcengineeventhandler_onproxyconnected__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy",
        children: "setCloudProxy"
      }), " 并成功加入频道后，SDK 会触发该回调，报告用户 ID、连接的代理类型，以及从调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 到触发该回调所经历的时间（毫秒）。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onproxyconnected__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-11",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/network-and-other#api_irtcengine_setcloudproxy",
        children: "setCloudProxy"
      }), " 并成功加入频道后被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onproxyconnected__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-32",
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
      id: "uid-2",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "proxytype-1",
      children: _jsx(_components.code, {
        children: "proxyType"
      })
    }), `
`, _jsx(_components.p, {
      children: "连接的代理类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "PROXY_TYPE_NONE_PROXY （0）：预留参数。"
      }), `
`, _jsx(_components.li, {
        children: "PROXY_TYPE_UDP_CLOUD_PROXY （1）：UDP 协议的云代理，即强制 UDP 云代理模式。在该模式下，SDK 始终通过 UDP 传输数据。"
      }), `
`, _jsx(_components.li, {
        children: "PROXY_TYPE_TCP_CLOUD_PROXY （2）：TCP（加密）协议的云代理，即强制 TCP 云代理模式。在该模式下，SDK 始终通过 TCP/TLS 443 传输数据。"
      }), `
`, _jsx(_components.li, {
        children: "PROXY_TYPE_LOCAL_PROXY （3）：预留参数。"
      }), `
`, _jsx(_components.li, {
        children: "PROXY_TYPE_TCP_AUTO_FALLBACK （4）：自动模式。在该模式下，SDK 会尝试直接连接 SD-RTN™，如果失败则自动切换到 TCP/TLS 443。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "localproxyip",
      children: _jsx(_components.code, {
        children: "localProxyIp"
      })
    }), `
`, _jsx(_components.p, {
      children: "预留参数。"
    }), `
`, _jsx(_components.h4, {
      id: "elapsed",
      children: _jsx(_components.code, {
        children: "elapsed"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 到触发该回调所经历的时间（毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-45",
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
      id: "callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly"
    }), `
`, _jsx(_components.h2, {
      id: "onremotesubscribefallbacktoaudioonly",
      children: "onRemoteSubscribeFallbackToAudioOnly"
    }), `
`, _jsx(_components.p, {
      children: "onRemoteSubscribeFallbackToAudioOnly 回调。当远端媒体流因网络变化在音频流与视频流之间切换时触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly__prototype"
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
              children: " onRemoteSubscribeFallbackToAudioOnly"
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
              children: " isFallbackOrRecover)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你调用了 ", _jsx(_components.code, {
        children: "setRemoteSubscribeFallbackOption"
      }), " 并将 ", _jsx(_components.code, {
        children: "option"
      }), " 设置为 ", _jsx(_components.code, {
        children: "STREAM_FALLBACK_OPTION_AUDIO_ONLY"
      }), "，SDK 会在以下情况下触发该回调："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "下行网络条件较差，已订阅的视频流降级为纯音频流。"
      }), `
`, _jsx(_components.li, {
        children: "下行网络条件改善，已订阅的流恢复为视频流。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你可以在 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats",
            children: "onRemoteVideoStats"
          }), " 回调中监控高质量与视频小流之间的切换。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-12",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在远端媒体流因网络变化在音频流与视频流之间切换时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotesubscribefallbacktoaudioonly__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-33",
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
      id: "isfallbackorrecover",
      children: _jsx(_components.code, {
        children: "isFallbackOrRecover"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否因网络变化触发音视频切换："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：由于网络条件差，已订阅的媒体流降级为纯音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：网络条件改善后，已订阅的媒体流恢复为视频流。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-46",
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
      id: "callback_irtcengineeventhandler_onuplinknetworkinfoupdated"
    }), `
`, _jsx(_components.h2, {
      id: "onuplinknetworkinfoupdated",
      children: "onUplinkNetworkInfoUpdated"
    }), `
`, _jsx(_components.p, {
      children: "上行网络信息发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuplinknetworkinfoupdated__prototype"
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
              children: " onUplinkNetworkInfoUpdated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(UplinkNetworkInfo info) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuplinknetworkinfoupdated__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该回调仅适用于将外部编码的 H.264 格式视频数据推送到 SDK 的场景。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuplinknetworkinfoupdated__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-13",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在上行网络信息发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuplinknetworkinfoupdated__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-34",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "info",
      children: _jsx(_components.code, {
        children: "info"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["上行网络信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-uplinknetworkinfo",
        children: "UplinkNetworkInfo"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-47",
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
