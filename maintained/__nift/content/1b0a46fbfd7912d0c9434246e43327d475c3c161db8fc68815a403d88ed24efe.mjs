import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "旁路推流",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_media_push" />

<a id="api_irtcengine_startrtmpstreamwithouttranscoding" />

## startRtmpStreamWithoutTranscoding [#startrtmpstreamwithouttranscoding]

开始向 CDN 推送音视频流（不进行转码）。

<a id="api_irtcengine_startrtmpstreamwithouttranscoding__prototype" />

\`\`\`java
public abstract int startRtmpStreamWithoutTranscoding(String url);
\`\`\`

<a id="api_irtcengine_startrtmpstreamwithouttranscoding__detailed_desc" />

声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。 你可以调用该方法将音频或视频流推送到指定的 CDN 地址。该方法每次只能向一个 CDN 地址推送媒体流，如果需要推送到多个地址，请多次调用该方法。

注：

* 请在加入频道后调用该方法。
* 只有在 LIVE\\_BROADCASTING 模式下的主播角色可以调用该方法。
* 如果推流失败后需要重试，请先调用 stopRtmpStream 停止推流，再调用该方法重新推流；否则，SDK 会返回与上次失败相同的错误码。

<a id="api_irtcengine_startrtmpstreamwithouttranscoding__related" />

### 相关回调 [#相关回调]

成功调用该方法后，SDK 会触发 [onRtmpStreamingStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged) 回调报告推流状态。

<a id="api_irtcengine_startrtmpstreamwithouttranscoding__parameters" />

### 参数 [#参数]

#### \`url\` [#url]

推流地址，格式为 RTMP 或 RTMPS，长度不能超过 1024 字节。不支持中文等特殊字符。

<a id="api_irtcengine_startrtmpstreamwithouttranscoding__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2： url 不合法。
  * -7：调用该方法前未初始化 SDK。
  * -19：推流地址已被使用，请更换地址。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_startrtmpstreamwithouttranscodingex" />

## startRtmpStreamWithoutTranscodingEx [#startrtmpstreamwithouttranscodingex]

开始向 CDN 推送未经转码的媒体流。

<a id="api_irtcengineex_startrtmpstreamwithouttranscodingex__prototype" />

\`\`\`java
public abstract int startRtmpStreamWithoutTranscodingEx(String url, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_startrtmpstreamwithouttranscodingex__detailed_desc" />

声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。 你可以调用该方法将音频或视频流推送到指定的 CDN 地址。该方法一次只能向一个 CDN 地址推送媒体流，如果需要推送到多个地址，请多次调用该方法。

注：

* 请在加入频道后调用该方法。
* 只有在频道场景为 LIVE\\_BROADCASTING 且角色为主播的用户才能调用该方法。
* 如果推流失败后需要重试，请先调用 stopRtmpStream 停止推流，再调用该方法重新推流；否则，SDK 会返回与上次失败相同的错误码。

<a id="api_irtcengineex_startrtmpstreamwithouttranscodingex__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_startrtmpstreamwithouttranscodingex__related" />

### 相关回调 [#相关回调-1]

成功调用该方法后，SDK 会触发 [onRtmpStreamingStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged) 回调报告推流状态。

<a id="api_irtcengineex_startrtmpstreamwithouttranscodingex__parameters" />

### 参数 [#参数-1]

#### \`url\` [#url-1]

旁路推流地址。格式为 RTMP 或 RTMPS，长度不能超过 1024 字节。不支持中文等特殊字符。

#### \`connection\` [#connection]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_startrtmpstreamwithouttranscodingex__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：URL 或转码配置不合法，请检查 URL 和转码配置。
  * -7：调用该方法前未初始化 SDK。
  * -19：旁路推流地址已被使用，请更换地址。

### 所属接口类 [#所属接口类-1]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_startrtmpstreamwithtranscoding" />

## startRtmpStreamWithTranscoding [#startrtmpstreamwithtranscoding]

开始旁路推流并设置转码配置。

<a id="api_irtcengine_startrtmpstreamwithtranscoding__prototype" />

\`\`\`java
public abstract int startRtmpStreamWithTranscoding(String url, LiveTranscoding transcoding);
\`\`\`

<a id="api_irtcengine_startrtmpstreamwithtranscoding__detailed_desc" />

声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。 你可以调用该方法将实时音视频流推送到指定的 CDN 地址，并设置转码配置。该方法每次只能将媒体流推送到一个 CDN 地址。如果需要推送到多个地址，请多次调用该方法。在一个声网项目下，默认最多可同时进行 200 个媒体流推送任务。如需更高配额，请[联系技术支持](https://ticket.shengwang.cn/)。

注：

* 请在加入频道后调用该方法。
* 仅在直播频道场景中，主播角色可以调用该方法。
* 如果推流失败后需要重试，请先调用 stopRtmpStream 停止推流，再调用该方法重新推流；否则，SDK 会返回与上次失败相同的错误码。

<a id="api_irtcengine_startrtmpstreamwithtranscoding__related" />

### 相关回调 [#相关回调-2]

成功调用该方法后，SDK 会触发 [onRtmpStreamingStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged) 回调报告推流状态。

<a id="api_irtcengine_startrtmpstreamwithtranscoding__parameters" />

### 参数 [#参数-2]

#### \`url\` [#url-2]

旁路推流地址，格式为 RTMP 或 RTMPS，字符长度不能超过 1024 字节。不支持中文等特殊字符。

#### \`transcoding\` [#transcoding]

旁路推流的转码配置，详见 [LiveTranscoding](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding)。

<a id="api_irtcengine_startrtmpstreamwithtranscoding__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2： url 或转码配置不合法，请检查 url 和转码配置。
  * -7：调用该方法前未初始化 SDK。
  * -19：旁路推流地址已被使用，请更换其他地址。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_startrtmpstreamwithtranscodingex" />

## startRtmpStreamWithTranscodingEx [#startrtmpstreamwithtranscodingex]

开始旁路推流并设置转码配置。

<a id="api_irtcengineex_startrtmpstreamwithtranscodingex__prototype" />

\`\`\`java
public abstract int startRtmpStreamWithTranscodingEx(String url, LiveTranscoding transcoding, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_startrtmpstreamwithtranscodingex__detailed_desc" />

声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。 你可以调用该方法将音视频直播流推送到指定的 CDN 地址，并设置转码配置。该方法每次只能将媒体流推送到一个 CDN 地址，如果需要推送到多个地址，请多次调用该方法。

注：

* 使用该方法前，请确保已启用旁路推流服务。
* 请在加入频道后调用该方法。
* 仅在直播场景（LIVE\\_BROADCASTING ）中的主播可以调用该方法。
* 如果推流失败后需要重试，请先调用 stopRtmpStreamEx 停止推流，再调用该方法重试，否则 SDK 会返回与上次失败相同的错误码。

<a id="api_irtcengineex_startrtmpstreamwithtranscodingex__scenario" />

### 适用场景 [#适用场景-1]

该方法适用于多频道场景。

<a id="api_irtcengineex_startrtmpstreamwithtranscodingex__parameters" />

### 参数 [#参数-3]

#### \`url\` [#url-3]

旁路推流地址。格式为 RTMP 或 RTMPS，字符长度不能超过 1024 字节。不支持中文等特殊字符。

#### \`transcoding\` [#transcoding-1]

旁路推流的转码配置。详见 [LiveTranscoding](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding)。

#### \`connection\` [#connection-1]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_startrtmpstreamwithtranscodingex__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：URL 或转码配置不合法，请检查 url 和 transcoding 参数。
  * -7：调用该方法前未初始化 SDK。
  * -19：旁路推流地址已被使用，请更换地址。

### 所属接口类 [#所属接口类-3]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_stoprtmpstream" />

## stopRtmpStream [#stoprtmpstream]

停止向指定 CDN 地址推送媒体流。

<a id="api_irtcengine_stoprtmpstream__prototype" />

\`\`\`java
public abstract int stopRtmpStream(String url);
\`\`\`

<a id="api_irtcengine_stoprtmpstream__detailed_desc" />

声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。 你可以调用该方法停止向指定的 CDN 地址推送媒体流。该方法每次只能停止一个地址的推流，如需停止多个地址的推流，请多次调用该方法。

<a id="api_irtcengine_stoprtmpstream__parameters" />

### 参数 [#参数-4]

#### \`url\` [#url-4]

旁路推流地址，格式为 RTMP 或 RTMPS，字符长度不能超过 1024 字节。不支持中文等特殊字符。

<a id="api_irtcengine_stoprtmpstream__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_stoprtmpstreamex" />

## stopRtmpStreamEx [#stoprtmpstreamex]

停止向指定 CDN 地址推送媒体流。

<a id="api_irtcengineex_stoprtmpstreamex__prototype" />

\`\`\`java
public abstract int stopRtmpStreamEx(String url, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_stoprtmpstreamex__detailed_desc" />

声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。 你可以调用该方法停止向指定 CDN 地址的直播推流。该方法每次只能停止向一个 CDN 地址推流，如果需要停止多个地址的推流，请多次调用该方法。

<a id="api_irtcengineex_stoprtmpstreamex__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多频道场景。

<a id="api_irtcengineex_stoprtmpstreamex__related" />

### 相关回调 [#相关回调-3]

成功调用该方法后，SDK 会触发 [onRtmpStreamingStateChanged](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged) 回调报告推流状态。

<a id="api_irtcengineex_stoprtmpstreamex__parameters" />

### 参数 [#参数-5]

#### \`url\` [#url-5]

旁路推流地址。格式为 RTMP 或 RTMPS，长度不能超过 1024 字节。不支持中文等特殊字符。

#### \`connection\` [#connection-2]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_stoprtmpstreamex__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_updatertmptranscoding" />

## updateRtmpTranscoding [#updatertmptranscoding]

更新旁路推流的转码配置。

<a id="api_irtcengine_updatertmptranscoding__prototype" />

\`\`\`java
public abstract int updateRtmpTranscoding(LiveTranscoding transcoding);
\`\`\`

<a id="api_irtcengine_updatertmptranscoding__detailed_desc" />

声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。

<a id="api_irtcengine_updatertmptranscoding__parameters" />

### 参数 [#参数-6]

#### \`transcoding\` [#transcoding-2]

旁路推流的转码配置。详见 [LiveTranscoding](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding)。

<a id="api_irtcengine_updatertmptranscoding__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_updatertmptranscodingex" />

## updateRtmpTranscodingEx [#updatertmptranscodingex]

更新旁路推流的转码配置。

<a id="api_irtcengineex_updatertmptranscodingex__prototype" />

\`\`\`java
public abstract int updateRtmpTranscodingEx(LiveTranscoding transcoding, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_updatertmptranscodingex__detailed_desc" />

声网推荐你使用更加完善的服务端推流功能，详见[实现服务端旁路推流](https://doc.shengwang.cn/doc/media-push/restful/landing-page)。 开始使用转码功能将媒体流推送到 CDN 后，你可以根据场景动态更新转码配置。更新配置后，SDK 会触发 [onTranscodingUpdated](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_ontranscodingupdated) 回调。

<a id="api_irtcengineex_updatertmptranscodingex__scenario" />

### 适用场景 [#适用场景-3]

该方法适用于多频道场景。

<a id="api_irtcengineex_updatertmptranscodingex__parameters" />

### 参数 [#参数-7]

#### \`transcoding\` [#transcoding-3]

旁路推流的转码配置。详见 [LiveTranscoding](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding)。

#### \`connection\` [#connection-3]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_updatertmptranscodingex__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="callback_irtcengineeventhandler_onrtmpstreamingevent" />

## onRtmpStreamingEvent [#onrtmpstreamingevent]

旁路推流事件回调。

<a id="callback_irtcengineeventhandler_onrtmpstreamingevent__prototype" />

\`\`\`java
public void onRtmpStreamingEvent(String url, int event)
\`\`\`

<a id="callback_irtcengineeventhandler_onrtmpstreamingevent__detailed_desc" />

#### \`自从\` [#自从]

自 v3.1.0 版本新增。

<a id="callback_irtcengineeventhandler_onrtmpstreamingevent__parameters" />

### 参数 [#参数-8]

#### \`url\` [#url-6]

旁路推流的地址。

#### \`event\` [#event]

旁路推流的事件码：

* RTMP\\_STREAMING\\_EVENT\\_FAILED\\_LOAD\\_IMAGE （1）：添加背景图或水印图时发生错误。
* RTMP\\_STREAMING\\_EVENT\\_URL\\_ALREADY\\_IN\\_USE （2）：该推流地址已被用于旁路推流。如需开启新的推流，请使用新的推流地址。
* RTMP\\_STREAMING\\_EVENT\\_ADVANCED\\_FEATURE\\_NOT\\_SUPPORT （3）：该功能不支持。
* RTMP\\_STREAMING\\_EVENT\\_REQUEST\\_TOO\\_OFTEN （4）：保留参数。

### 所属接口类 [#所属接口类-8]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onrtmpstreamingstatechanged" />

## onRtmpStreamingStateChanged [#onrtmpstreamingstatechanged]

旁路推流状态发生变化回调。

<a id="callback_irtcengineeventhandler_onrtmpstreamingstatechanged__prototype" />

\`\`\`java
public void onRtmpStreamingStateChanged(String url, int state, int reason)
\`\`\`

<a id="callback_irtcengineeventhandler_onrtmpstreamingstatechanged__detailed_desc" />

该回调用于指示旁路推流的状态。当旁路推流状态发生变化时，SDK 会触发该回调，并返回对应的 URL 地址和当前的推流状态。当出现异常时，你可以参考错误码参数中的详细错误信息进行排查。

<a id="callback_irtcengineeventhandler_onrtmpstreamingstatechanged__timing" />

### 触发时机 [#触发时机]

该回调在旁路推流状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onrtmpstreamingstatechanged__parameters" />

### 参数 [#参数-9]

#### \`url\` [#url-7]

发生状态变化的旁路推流地址。

#### \`state\` [#state]

当前旁路推流的状态：

* RTMP\\_STREAM\\_PUBLISH\\_STATE\\_IDLE (0)：旁路推流尚未开始或已结束。
* RTMP\\_STREAM\\_PUBLISH\\_STATE\\_CONNECTING (1)：正在连接推流服务器和 CDN 服务器。
* RTMP\\_STREAM\\_PUBLISH\\_STATE\\_RUNNING (2)：正在推流。SDK 成功推送 RTMP 或 RTMPS 流并返回该状态。
* RTMP\\_STREAM\\_PUBLISH\\_STATE\\_RECOVERING (3)：正在恢复推流。当 CDN 出现异常或旁路推流中断时，SDK 会尝试恢复推流并返回该状态。
  * 如果 SDK 成功恢复推流，则返回 RTMP\\_STREAM\\_PUBLISH\\_STATE\\_RUNNING (2)。
  * 如果在 60 秒内未恢复推流或服务器发生错误，则返回 RTMP\\_STREAM\\_PUBLISH\\_STATE\\_FAILURE (4)。你也可以通过调用 startRtmpStreamWithTranscoding、 startRtmpStreamWithoutTranscoding 和 stopRtmpStream 方法重新连接服务器。
* RTMP\\_STREAM\\_PUBLISH\\_STATE\\_FAILURE (4)：推流失败。你可以参考错误码参数中的详细错误信息进行排查，也可以尝试重新推流。
* RTMP\\_STREAM\\_PUBLISH\\_STATE\\_DISCONNECTING (5)：SDK 正在断开与声网旁路推流服务器和 CDN 服务器的连接。当你调用 stopRtmpStream 正常停止旁路推流时，SDK 会依次返回 RTMP\\_STREAM\\_PUBLISH\\_STATE\\_DISCONNECTING 和 RTMP\\_STREAM\\_PUBLISH\\_STATE\\_IDLE 状态。

#### \`reason\` [#reason]

旁路推流状态变化的原因：

* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_OK (0)：推流成功。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_INVALID\\_ARGUMENT (1)：参数无效。请检查参数设置。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_ENCRYPTED\\_STREAM\\_NOT\\_ALLOWED (2)：加密流无法推送。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_CONNECTION\\_TIMEOUT (3)：推流超时。你可以尝试重新推流。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_INTERNAL\\_SERVER\\_ERROR (4)：声网推流服务器内部错误。你可以尝试重新推流。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_RTMP\\_SERVER\\_ERROR (5)：CDN 服务器错误。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_TOO\\_OFTEN (6)：保留参数。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_REACH\\_LIMIT (7)：主播推送的 URL 超过 10 个。你可以停止向不必要的 URL 推流。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_NOT\\_AUTHORIZED (8)：主播操作了其他主播的 URL，例如更新或停止其他主播的流。请检查你的应用逻辑。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_STREAM\\_NOT\\_FOUND (9)：声网服务器未找到旁路推流的媒体流。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_FORMAT\\_NOT\\_SUPPORTED (10)：旁路推流地址格式不支持。请检查 URL 格式是否正确。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_NOT\\_BROADCASTER (11)：用户角色不是主播，无法使用旁路推流功能。请检查你的应用代码逻辑。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_TRANSCODING\\_NO\\_MIX\\_STREAM (13)：在无转码的旁路推流场景中调用了 updateRtmpTranscoding 方法更新转码配置。请检查你的应用代码逻辑。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_NET\\_DOWN (14)：主播端网络异常。
* RTMP\\_STREAM\\_PUBLISH\\_REASON\\_INVALID\\_PRIVILEGE (16)：项目无权限使用旁路推流服务。
* RTMP\\_STREAM\\_UNPUBLISH\\_REASON\\_OK (100)：已正常停止旁路推流。调用 stopRtmpStream 停止推流后，SDK 返回该值。

### 所属接口类 [#所属接口类-9]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_ontranscodingupdated" />

## onTranscodingUpdated [#ontranscodingupdated]

发布端云端转码配置更新回调。

<a id="callback_irtcengineeventhandler_ontranscodingupdated__prototype" />

\`\`\`java
public void onTranscodingUpdated() {}
\`\`\`

<a id="callback_irtcengineeventhandler_ontranscodingupdated__detailed_desc" />

当调用 [startRtmpStreamWithTranscoding](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding) 更新 [LiveTranscoding](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding) 配置时，SDK 会触发该回调以报告更新信息。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果首次调用 [startRtmpStreamWithTranscoding](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding) 设置 [LiveTranscoding](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding) 配置，SDK 不会触发该回调。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_ontranscodingupdated__timing" />

### 触发时机 [#触发时机-1]

该回调在发布端的云端转码配置发生更新时被触发。

### 所属接口类 [#所属接口类-10]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "startrtmpstreamwithouttranscoding",
    content: "开始向 CDN 推送音视频流（不进行转码）。"
  }, {
    heading: "startrtmpstreamwithouttranscoding",
    content: "声网推荐你使用更加完善的服务端推流功能，详见实现服务端旁路推流。 你可以调用该方法将音频或视频流推送到指定的 CDN 地址。该方法每次只能向一个 CDN 地址推送媒体流，如果需要推送到多个地址，请多次调用该方法。"
  }, {
    heading: "startrtmpstreamwithouttranscoding",
    content: "注："
  }, {
    heading: "startrtmpstreamwithouttranscoding",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "startrtmpstreamwithouttranscoding",
    content: "只有在 LIVE\\_BROADCASTING 模式下的主播角色可以调用该方法。"
  }, {
    heading: "startrtmpstreamwithouttranscoding",
    content: "如果推流失败后需要重试，请先调用 stopRtmpStream 停止推流，再调用该方法重新推流；否则，SDK 会返回与上次失败相同的错误码。"
  }, {
    heading: "相关回调",
    content: "成功调用该方法后，SDK 会触发 onRtmpStreamingStateChanged 回调报告推流状态。"
  }, {
    heading: "url",
    content: "推流地址，格式为 RTMP 或 RTMPS，长度不能超过 1024 字节。不支持中文等特殊字符。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值",
    content: "-2： url 不合法。"
  }, {
    heading: "返回值",
    content: "-7：调用该方法前未初始化 SDK。"
  }, {
    heading: "返回值",
    content: "-19：推流地址已被使用，请更换地址。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "startrtmpstreamwithouttranscodingex",
    content: "开始向 CDN 推送未经转码的媒体流。"
  }, {
    heading: "startrtmpstreamwithouttranscodingex",
    content: "声网推荐你使用更加完善的服务端推流功能，详见实现服务端旁路推流。 你可以调用该方法将音频或视频流推送到指定的 CDN 地址。该方法一次只能向一个 CDN 地址推送媒体流，如果需要推送到多个地址，请多次调用该方法。"
  }, {
    heading: "startrtmpstreamwithouttranscodingex",
    content: "注："
  }, {
    heading: "startrtmpstreamwithouttranscodingex",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "startrtmpstreamwithouttranscodingex",
    content: "只有在频道场景为 LIVE\\_BROADCASTING 且角色为主播的用户才能调用该方法。"
  }, {
    heading: "startrtmpstreamwithouttranscodingex",
    content: "如果推流失败后需要重试，请先调用 stopRtmpStream 停止推流，再调用该方法重新推流；否则，SDK 会返回与上次失败相同的错误码。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "相关回调-1",
    content: "成功调用该方法后，SDK 会触发 onRtmpStreamingStateChanged 回调报告推流状态。"
  }, {
    heading: "url-1",
    content: "旁路推流地址。格式为 RTMP 或 RTMPS，长度不能超过 1024 字节。不支持中文等特殊字符。"
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
    content: "-2：URL 或转码配置不合法，请检查 URL 和转码配置。"
  }, {
    heading: "返回值-1",
    content: "-7：调用该方法前未初始化 SDK。"
  }, {
    heading: "返回值-1",
    content: "-19：旁路推流地址已被使用，请更换地址。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngineEx"
  }, {
    heading: "startrtmpstreamwithtranscoding",
    content: "开始旁路推流并设置转码配置。"
  }, {
    heading: "startrtmpstreamwithtranscoding",
    content: "声网推荐你使用更加完善的服务端推流功能，详见实现服务端旁路推流。 你可以调用该方法将实时音视频流推送到指定的 CDN 地址，并设置转码配置。该方法每次只能将媒体流推送到一个 CDN 地址。如果需要推送到多个地址，请多次调用该方法。在一个声网项目下，默认最多可同时进行 200 个媒体流推送任务。如需更高配额，请联系技术支持。"
  }, {
    heading: "startrtmpstreamwithtranscoding",
    content: "注："
  }, {
    heading: "startrtmpstreamwithtranscoding",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "startrtmpstreamwithtranscoding",
    content: "仅在直播频道场景中，主播角色可以调用该方法。"
  }, {
    heading: "startrtmpstreamwithtranscoding",
    content: "如果推流失败后需要重试，请先调用 stopRtmpStream 停止推流，再调用该方法重新推流；否则，SDK 会返回与上次失败相同的错误码。"
  }, {
    heading: "相关回调-2",
    content: "成功调用该方法后，SDK 会触发 onRtmpStreamingStateChanged 回调报告推流状态。"
  }, {
    heading: "url-2",
    content: "旁路推流地址，格式为 RTMP 或 RTMPS，字符长度不能超过 1024 字节。不支持中文等特殊字符。"
  }, {
    heading: "transcoding",
    content: "旁路推流的转码配置，详见 LiveTranscoding。"
  }, {
    heading: "返回值-2",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-2",
    content: "-2： url 或转码配置不合法，请检查 url 和转码配置。"
  }, {
    heading: "返回值-2",
    content: "-7：调用该方法前未初始化 SDK。"
  }, {
    heading: "返回值-2",
    content: "-19：旁路推流地址已被使用，请更换其他地址。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "startrtmpstreamwithtranscodingex",
    content: "开始旁路推流并设置转码配置。"
  }, {
    heading: "startrtmpstreamwithtranscodingex",
    content: "声网推荐你使用更加完善的服务端推流功能，详见实现服务端旁路推流。 你可以调用该方法将音视频直播流推送到指定的 CDN 地址，并设置转码配置。该方法每次只能将媒体流推送到一个 CDN 地址，如果需要推送到多个地址，请多次调用该方法。"
  }, {
    heading: "startrtmpstreamwithtranscodingex",
    content: "注："
  }, {
    heading: "startrtmpstreamwithtranscodingex",
    content: "使用该方法前，请确保已启用旁路推流服务。"
  }, {
    heading: "startrtmpstreamwithtranscodingex",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "startrtmpstreamwithtranscodingex",
    content: "仅在直播场景（LIVE\\_BROADCASTING ）中的主播可以调用该方法。"
  }, {
    heading: "startrtmpstreamwithtranscodingex",
    content: "如果推流失败后需要重试，请先调用 stopRtmpStreamEx 停止推流，再调用该方法重试，否则 SDK 会返回与上次失败相同的错误码。"
  }, {
    heading: "适用场景-1",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "url-3",
    content: "旁路推流地址。格式为 RTMP 或 RTMPS，字符长度不能超过 1024 字节。不支持中文等特殊字符。"
  }, {
    heading: "transcoding-1",
    content: "旁路推流的转码配置。详见 LiveTranscoding。"
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
    content: "-2：URL 或转码配置不合法，请检查 url 和 transcoding 参数。"
  }, {
    heading: "返回值-3",
    content: "-7：调用该方法前未初始化 SDK。"
  }, {
    heading: "返回值-3",
    content: "-19：旁路推流地址已被使用，请更换地址。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngineEx"
  }, {
    heading: "stoprtmpstream",
    content: "停止向指定 CDN 地址推送媒体流。"
  }, {
    heading: "stoprtmpstream",
    content: "声网推荐你使用更加完善的服务端推流功能，详见实现服务端旁路推流。 你可以调用该方法停止向指定的 CDN 地址推送媒体流。该方法每次只能停止一个地址的推流，如需停止多个地址的推流，请多次调用该方法。"
  }, {
    heading: "url-4",
    content: "旁路推流地址，格式为 RTMP 或 RTMPS，字符长度不能超过 1024 字节。不支持中文等特殊字符。"
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
    heading: "stoprtmpstreamex",
    content: "停止向指定 CDN 地址推送媒体流。"
  }, {
    heading: "stoprtmpstreamex",
    content: "声网推荐你使用更加完善的服务端推流功能，详见实现服务端旁路推流。 你可以调用该方法停止向指定 CDN 地址的直播推流。该方法每次只能停止向一个 CDN 地址推流，如果需要停止多个地址的推流，请多次调用该方法。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "相关回调-3",
    content: "成功调用该方法后，SDK 会触发 onRtmpStreamingStateChanged 回调报告推流状态。"
  }, {
    heading: "url-5",
    content: "旁路推流地址。格式为 RTMP 或 RTMPS，长度不能超过 1024 字节。不支持中文等特殊字符。"
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
    heading: "updatertmptranscoding",
    content: "更新旁路推流的转码配置。"
  }, {
    heading: "updatertmptranscoding",
    content: "声网推荐你使用更加完善的服务端推流功能，详见实现服务端旁路推流。"
  }, {
    heading: "transcoding-2",
    content: "旁路推流的转码配置。详见 LiveTranscoding。"
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
    heading: "updatertmptranscodingex",
    content: "更新旁路推流的转码配置。"
  }, {
    heading: "updatertmptranscodingex",
    content: "声网推荐你使用更加完善的服务端推流功能，详见实现服务端旁路推流。 开始使用转码功能将媒体流推送到 CDN 后，你可以根据场景动态更新转码配置。更新配置后，SDK 会触发 onTranscodingUpdated 回调。"
  }, {
    heading: "适用场景-3",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "transcoding-3",
    content: "旁路推流的转码配置。详见 LiveTranscoding。"
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
    heading: "所属接口类-7",
    content: "RtcEngineEx"
  }, {
    heading: "onrtmpstreamingevent",
    content: "旁路推流事件回调。"
  }, {
    heading: "自从",
    content: "自 v3.1.0 版本新增。"
  }, {
    heading: "url-6",
    content: "旁路推流的地址。"
  }, {
    heading: "event",
    content: "旁路推流的事件码："
  }, {
    heading: "event",
    content: "RTMP\\_STREAMING\\_EVENT\\_FAILED\\_LOAD\\_IMAGE （1）：添加背景图或水印图时发生错误。"
  }, {
    heading: "event",
    content: "RTMP\\_STREAMING\\_EVENT\\_URL\\_ALREADY\\_IN\\_USE （2）：该推流地址已被用于旁路推流。如需开启新的推流，请使用新的推流地址。"
  }, {
    heading: "event",
    content: "RTMP\\_STREAMING\\_EVENT\\_ADVANCED\\_FEATURE\\_NOT\\_SUPPORT （3）：该功能不支持。"
  }, {
    heading: "event",
    content: "RTMP\\_STREAMING\\_EVENT\\_REQUEST\\_TOO\\_OFTEN （4）：保留参数。"
  }, {
    heading: "所属接口类-8",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onrtmpstreamingstatechanged",
    content: "旁路推流状态发生变化回调。"
  }, {
    heading: "onrtmpstreamingstatechanged",
    content: "该回调用于指示旁路推流的状态。当旁路推流状态发生变化时，SDK 会触发该回调，并返回对应的 URL 地址和当前的推流状态。当出现异常时，你可以参考错误码参数中的详细错误信息进行排查。"
  }, {
    heading: "触发时机",
    content: "该回调在旁路推流状态发生变化时被触发。"
  }, {
    heading: "url-7",
    content: "发生状态变化的旁路推流地址。"
  }, {
    heading: "state",
    content: "当前旁路推流的状态："
  }, {
    heading: "state",
    content: "RTMP\\_STREAM\\_PUBLISH\\_STATE\\_IDLE (0)：旁路推流尚未开始或已结束。"
  }, {
    heading: "state",
    content: "RTMP\\_STREAM\\_PUBLISH\\_STATE\\_CONNECTING (1)：正在连接推流服务器和 CDN 服务器。"
  }, {
    heading: "state",
    content: "RTMP\\_STREAM\\_PUBLISH\\_STATE\\_RUNNING (2)：正在推流。SDK 成功推送 RTMP 或 RTMPS 流并返回该状态。"
  }, {
    heading: "state",
    content: "RTMP\\_STREAM\\_PUBLISH\\_STATE\\_RECOVERING (3)：正在恢复推流。当 CDN 出现异常或旁路推流中断时，SDK 会尝试恢复推流并返回该状态。"
  }, {
    heading: "state",
    content: "如果 SDK 成功恢复推流，则返回 RTMP\\_STREAM\\_PUBLISH\\_STATE\\_RUNNING (2)。"
  }, {
    heading: "state",
    content: "如果在 60 秒内未恢复推流或服务器发生错误，则返回 RTMP\\_STREAM\\_PUBLISH\\_STATE\\_FAILURE (4)。你也可以通过调用 startRtmpStreamWithTranscoding、 startRtmpStreamWithoutTranscoding 和 stopRtmpStream 方法重新连接服务器。"
  }, {
    heading: "state",
    content: "RTMP\\_STREAM\\_PUBLISH\\_STATE\\_FAILURE (4)：推流失败。你可以参考错误码参数中的详细错误信息进行排查，也可以尝试重新推流。"
  }, {
    heading: "state",
    content: "RTMP\\_STREAM\\_PUBLISH\\_STATE\\_DISCONNECTING (5)：SDK 正在断开与声网旁路推流服务器和 CDN 服务器的连接。当你调用 stopRtmpStream 正常停止旁路推流时，SDK 会依次返回 RTMP\\_STREAM\\_PUBLISH\\_STATE\\_DISCONNECTING 和 RTMP\\_STREAM\\_PUBLISH\\_STATE\\_IDLE 状态。"
  }, {
    heading: "reason",
    content: "旁路推流状态变化的原因："
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_OK (0)：推流成功。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_INVALID\\_ARGUMENT (1)：参数无效。请检查参数设置。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_ENCRYPTED\\_STREAM\\_NOT\\_ALLOWED (2)：加密流无法推送。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_CONNECTION\\_TIMEOUT (3)：推流超时。你可以尝试重新推流。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_INTERNAL\\_SERVER\\_ERROR (4)：声网推流服务器内部错误。你可以尝试重新推流。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_RTMP\\_SERVER\\_ERROR (5)：CDN 服务器错误。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_TOO\\_OFTEN (6)：保留参数。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_REACH\\_LIMIT (7)：主播推送的 URL 超过 10 个。你可以停止向不必要的 URL 推流。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_NOT\\_AUTHORIZED (8)：主播操作了其他主播的 URL，例如更新或停止其他主播的流。请检查你的应用逻辑。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_STREAM\\_NOT\\_FOUND (9)：声网服务器未找到旁路推流的媒体流。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_FORMAT\\_NOT\\_SUPPORTED (10)：旁路推流地址格式不支持。请检查 URL 格式是否正确。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_NOT\\_BROADCASTER (11)：用户角色不是主播，无法使用旁路推流功能。请检查你的应用代码逻辑。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_TRANSCODING\\_NO\\_MIX\\_STREAM (13)：在无转码的旁路推流场景中调用了 updateRtmpTranscoding 方法更新转码配置。请检查你的应用代码逻辑。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_NET\\_DOWN (14)：主播端网络异常。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_PUBLISH\\_REASON\\_INVALID\\_PRIVILEGE (16)：项目无权限使用旁路推流服务。"
  }, {
    heading: "reason",
    content: "RTMP\\_STREAM\\_UNPUBLISH\\_REASON\\_OK (100)：已正常停止旁路推流。调用 stopRtmpStream 停止推流后，SDK 返回该值。"
  }, {
    heading: "所属接口类-9",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "ontranscodingupdated",
    content: "发布端云端转码配置更新回调。"
  }, {
    heading: "ontranscodingupdated",
    content: "当调用 startRtmpStreamWithTranscoding 更新 LiveTranscoding 配置时，SDK 会触发该回调以报告更新信息。"
  }, {
    heading: "ontranscodingupdated",
    content: "如果首次调用 startRtmpStreamWithTranscoding 设置 LiveTranscoding 配置，SDK 不会触发该回调。"
  }, {
    heading: "触发时机-1",
    content: "该回调在发布端的云端转码配置发生更新时被触发。"
  }, {
    heading: "所属接口类-10",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "startrtmpstreamwithouttranscoding",
    content: "startRtmpStreamWithoutTranscoding"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "url",
    content: "`url`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "startrtmpstreamwithouttranscodingex",
    content: "startRtmpStreamWithoutTranscodingEx"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "url-1",
    content: "`url`"
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
    id: "startrtmpstreamwithtranscoding",
    content: "startRtmpStreamWithTranscoding"
  }, {
    id: "相关回调-2",
    content: "相关回调"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "url-2",
    content: "`url`"
  }, {
    id: "transcoding",
    content: "`transcoding`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "startrtmpstreamwithtranscodingex",
    content: "startRtmpStreamWithTranscodingEx"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "url-3",
    content: "`url`"
  }, {
    id: "transcoding-1",
    content: "`transcoding`"
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
    id: "stoprtmpstream",
    content: "stopRtmpStream"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "url-4",
    content: "`url`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "stoprtmpstreamex",
    content: "stopRtmpStreamEx"
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
    id: "url-5",
    content: "`url`"
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
    id: "updatertmptranscoding",
    content: "updateRtmpTranscoding"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "transcoding-2",
    content: "`transcoding`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "updatertmptranscodingex",
    content: "updateRtmpTranscodingEx"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "transcoding-3",
    content: "`transcoding`"
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
    id: "onrtmpstreamingevent",
    content: "onRtmpStreamingEvent"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "url-6",
    content: "`url`"
  }, {
    id: "event",
    content: "`event`"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "onrtmpstreamingstatechanged",
    content: "onRtmpStreamingStateChanged"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "url-7",
    content: "`url`"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "ontranscodingupdated",
    content: "onTranscodingUpdated"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#startrtmpstreamwithouttranscoding",
  title: _jsx(_Fragment, {
    children: "startRtmpStreamWithoutTranscoding"
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
  url: "#url",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
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
  url: "#startrtmpstreamwithouttranscodingex",
  title: _jsx(_Fragment, {
    children: "startRtmpStreamWithoutTranscodingEx"
  })
}, {
  depth: 3,
  url: "#适用场景",
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
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#url-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
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
  url: "#startrtmpstreamwithtranscoding",
  title: _jsx(_Fragment, {
    children: "startRtmpStreamWithTranscoding"
  })
}, {
  depth: 3,
  url: "#相关回调-2",
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
  url: "#url-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
    })
  })
}, {
  depth: 4,
  url: "#transcoding",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "transcoding"
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
  url: "#startrtmpstreamwithtranscodingex",
  title: _jsx(_Fragment, {
    children: "startRtmpStreamWithTranscodingEx"
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
  url: "#url-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
    })
  })
}, {
  depth: 4,
  url: "#transcoding-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "transcoding"
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
  url: "#stoprtmpstream",
  title: _jsx(_Fragment, {
    children: "stopRtmpStream"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#url-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
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
  url: "#stoprtmpstreamex",
  title: _jsx(_Fragment, {
    children: "stopRtmpStreamEx"
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
  url: "#url-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
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
  url: "#updatertmptranscoding",
  title: _jsx(_Fragment, {
    children: "updateRtmpTranscoding"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#transcoding-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "transcoding"
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
  url: "#updatertmptranscodingex",
  title: _jsx(_Fragment, {
    children: "updateRtmpTranscodingEx"
  })
}, {
  depth: 3,
  url: "#适用场景-3",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#transcoding-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "transcoding"
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
  url: "#onrtmpstreamingevent",
  title: _jsx(_Fragment, {
    children: "onRtmpStreamingEvent"
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
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#url-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
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
  depth: 3,
  url: "#所属接口类-8",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onrtmpstreamingstatechanged",
  title: _jsx(_Fragment, {
    children: "onRtmpStreamingStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#url-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
    })
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
  url: "#所属接口类-9",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#ontranscodingupdated",
  title: _jsx(_Fragment, {
    children: "onTranscodingUpdated"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#所属接口类-10",
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
      id: "toc_media_push"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithouttranscoding"
    }), `
`, _jsx(_components.h2, {
      id: "startrtmpstreamwithouttranscoding",
      children: "startRtmpStreamWithoutTranscoding"
    }), `
`, _jsx(_components.p, {
      children: "开始向 CDN 推送音视频流（不进行转码）。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithouttranscoding__prototype"
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
              children: " startRtmpStreamWithoutTranscoding"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithouttranscoding__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网推荐你使用更加完善的服务端推流功能，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/media-push/restful/landing-page",
        children: "实现服务端旁路推流"
      }), "。 你可以调用该方法将音频或视频流推送到指定的 CDN 地址。该方法每次只能向一个 CDN 地址推送媒体流，如果需要推送到多个地址，请多次调用该方法。"]
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
        children: "只有在 LIVE_BROADCASTING 模式下的主播角色可以调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果推流失败后需要重试，请先调用 stopRtmpStream 停止推流，再调用该方法重新推流；否则，SDK 会返回与上次失败相同的错误码。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithouttranscoding__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged",
        children: "onRtmpStreamingStateChanged"
      }), " 回调报告推流状态。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithouttranscoding__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "推流地址，格式为 RTMP 或 RTMPS，长度不能超过 1024 字节。不支持中文等特殊字符。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithouttranscoding__return_values"
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
            children: "-2： url 不合法。"
          }), `
`, _jsx(_components.li, {
            children: "-7：调用该方法前未初始化 SDK。"
          }), `
`, _jsx(_components.li, {
            children: "-19：推流地址已被使用，请更换地址。"
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
      id: "api_irtcengineex_startrtmpstreamwithouttranscodingex"
    }), `
`, _jsx(_components.h2, {
      id: "startrtmpstreamwithouttranscodingex",
      children: "startRtmpStreamWithoutTranscodingEx"
    }), `
`, _jsx(_components.p, {
      children: "开始向 CDN 推送未经转码的媒体流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startrtmpstreamwithouttranscodingex__prototype"
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
              children: " startRtmpStreamWithoutTranscodingEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startrtmpstreamwithouttranscodingex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网推荐你使用更加完善的服务端推流功能，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/media-push/restful/landing-page",
        children: "实现服务端旁路推流"
      }), "。 你可以调用该方法将音频或视频流推送到指定的 CDN 地址。该方法一次只能向一个 CDN 地址推送媒体流，如果需要推送到多个地址，请多次调用该方法。"]
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
        children: "只有在频道场景为 LIVE_BROADCASTING 且角色为主播的用户才能调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果推流失败后需要重试，请先调用 stopRtmpStream 停止推流，再调用该方法重新推流；否则，SDK 会返回与上次失败相同的错误码。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startrtmpstreamwithouttranscodingex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startrtmpstreamwithouttranscodingex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged",
        children: "onRtmpStreamingStateChanged"
      }), " 回调报告推流状态。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startrtmpstreamwithouttranscodingex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url-1",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "旁路推流地址。格式为 RTMP 或 RTMPS，长度不能超过 1024 字节。不支持中文等特殊字符。"
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
      id: "api_irtcengineex_startrtmpstreamwithouttranscodingex__return_values"
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
            children: "-2：URL 或转码配置不合法，请检查 URL 和转码配置。"
          }), `
`, _jsx(_components.li, {
            children: "-7：调用该方法前未初始化 SDK。"
          }), `
`, _jsx(_components.li, {
            children: "-19：旁路推流地址已被使用，请更换地址。"
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
      id: "api_irtcengine_startrtmpstreamwithtranscoding"
    }), `
`, _jsx(_components.h2, {
      id: "startrtmpstreamwithtranscoding",
      children: "startRtmpStreamWithTranscoding"
    }), `
`, _jsx(_components.p, {
      children: "开始旁路推流并设置转码配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithtranscoding__prototype"
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
              children: " startRtmpStreamWithTranscoding"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url, LiveTranscoding transcoding);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithtranscoding__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网推荐你使用更加完善的服务端推流功能，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/media-push/restful/landing-page",
        children: "实现服务端旁路推流"
      }), "。 你可以调用该方法将实时音视频流推送到指定的 CDN 地址，并设置转码配置。该方法每次只能将媒体流推送到一个 CDN 地址。如果需要推送到多个地址，请多次调用该方法。在一个声网项目下，默认最多可同时进行 200 个媒体流推送任务。如需更高配额，请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "。"]
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
        children: "仅在直播频道场景中，主播角色可以调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果推流失败后需要重试，请先调用 stopRtmpStream 停止推流，再调用该方法重新推流；否则，SDK 会返回与上次失败相同的错误码。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithtranscoding__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-2",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged",
        children: "onRtmpStreamingStateChanged"
      }), " 回调报告推流状态。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithtranscoding__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url-2",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "旁路推流地址，格式为 RTMP 或 RTMPS，字符长度不能超过 1024 字节。不支持中文等特殊字符。"
    }), `
`, _jsx(_components.h4, {
      id: "transcoding",
      children: _jsx(_components.code, {
        children: "transcoding"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["旁路推流的转码配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding",
        children: "LiveTranscoding"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startrtmpstreamwithtranscoding__return_values"
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
            children: "-2： url 或转码配置不合法，请检查 url 和转码配置。"
          }), `
`, _jsx(_components.li, {
            children: "-7：调用该方法前未初始化 SDK。"
          }), `
`, _jsx(_components.li, {
            children: "-19：旁路推流地址已被使用，请更换其他地址。"
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
      id: "api_irtcengineex_startrtmpstreamwithtranscodingex"
    }), `
`, _jsx(_components.h2, {
      id: "startrtmpstreamwithtranscodingex",
      children: "startRtmpStreamWithTranscodingEx"
    }), `
`, _jsx(_components.p, {
      children: "开始旁路推流并设置转码配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startrtmpstreamwithtranscodingex__prototype"
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
              children: " startRtmpStreamWithTranscodingEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url, LiveTranscoding transcoding, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startrtmpstreamwithtranscodingex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网推荐你使用更加完善的服务端推流功能，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/media-push/restful/landing-page",
        children: "实现服务端旁路推流"
      }), "。 你可以调用该方法将音视频直播流推送到指定的 CDN 地址，并设置转码配置。该方法每次只能将媒体流推送到一个 CDN 地址，如果需要推送到多个地址，请多次调用该方法。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "使用该方法前，请确保已启用旁路推流服务。"
      }), `
`, _jsx(_components.li, {
        children: "请在加入频道后调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "仅在直播场景（LIVE_BROADCASTING ）中的主播可以调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果推流失败后需要重试，请先调用 stopRtmpStreamEx 停止推流，再调用该方法重试，否则 SDK 会返回与上次失败相同的错误码。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startrtmpstreamwithtranscodingex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startrtmpstreamwithtranscodingex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url-3",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "旁路推流地址。格式为 RTMP 或 RTMPS，字符长度不能超过 1024 字节。不支持中文等特殊字符。"
    }), `
`, _jsx(_components.h4, {
      id: "transcoding-1",
      children: _jsx(_components.code, {
        children: "transcoding"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["旁路推流的转码配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding",
        children: "LiveTranscoding"
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
      id: "api_irtcengineex_startrtmpstreamwithtranscodingex__return_values"
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
            children: "-2：URL 或转码配置不合法，请检查 url 和 transcoding 参数。"
          }), `
`, _jsx(_components.li, {
            children: "-7：调用该方法前未初始化 SDK。"
          }), `
`, _jsx(_components.li, {
            children: "-19：旁路推流地址已被使用，请更换地址。"
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
      id: "api_irtcengine_stoprtmpstream"
    }), `
`, _jsx(_components.h2, {
      id: "stoprtmpstream",
      children: "stopRtmpStream"
    }), `
`, _jsx(_components.p, {
      children: "停止向指定 CDN 地址推送媒体流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoprtmpstream__prototype"
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
              children: " stopRtmpStream"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoprtmpstream__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网推荐你使用更加完善的服务端推流功能，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/media-push/restful/landing-page",
        children: "实现服务端旁路推流"
      }), "。 你可以调用该方法停止向指定的 CDN 地址推送媒体流。该方法每次只能停止一个地址的推流，如需停止多个地址的推流，请多次调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoprtmpstream__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url-4",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "旁路推流地址，格式为 RTMP 或 RTMPS，字符长度不能超过 1024 字节。不支持中文等特殊字符。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoprtmpstream__return_values"
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
      id: "api_irtcengineex_stoprtmpstreamex"
    }), `
`, _jsx(_components.h2, {
      id: "stoprtmpstreamex",
      children: "stopRtmpStreamEx"
    }), `
`, _jsx(_components.p, {
      children: "停止向指定 CDN 地址推送媒体流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_stoprtmpstreamex__prototype"
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
              children: " stopRtmpStreamEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_stoprtmpstreamex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网推荐你使用更加完善的服务端推流功能，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/media-push/restful/landing-page",
        children: "实现服务端旁路推流"
      }), "。 你可以调用该方法停止向指定 CDN 地址的直播推流。该方法每次只能停止向一个 CDN 地址推流，如果需要停止多个地址的推流，请多次调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_stoprtmpstreamex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_stoprtmpstreamex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-3",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_onrtmpstreamingstatechanged",
        children: "onRtmpStreamingStateChanged"
      }), " 回调报告推流状态。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_stoprtmpstreamex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url-5",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "旁路推流地址。格式为 RTMP 或 RTMPS，长度不能超过 1024 字节。不支持中文等特殊字符。"
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
      id: "api_irtcengineex_stoprtmpstreamex__return_values"
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
      id: "api_irtcengine_updatertmptranscoding"
    }), `
`, _jsx(_components.h2, {
      id: "updatertmptranscoding",
      children: "updateRtmpTranscoding"
    }), `
`, _jsx(_components.p, {
      children: "更新旁路推流的转码配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatertmptranscoding__prototype"
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
              children: " updateRtmpTranscoding"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LiveTranscoding transcoding);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatertmptranscoding__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网推荐你使用更加完善的服务端推流功能，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/media-push/restful/landing-page",
        children: "实现服务端旁路推流"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatertmptranscoding__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "transcoding-2",
      children: _jsx(_components.code, {
        children: "transcoding"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["旁路推流的转码配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding",
        children: "LiveTranscoding"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatertmptranscoding__return_values"
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
      id: "api_irtcengineex_updatertmptranscodingex"
    }), `
`, _jsx(_components.h2, {
      id: "updatertmptranscodingex",
      children: "updateRtmpTranscodingEx"
    }), `
`, _jsx(_components.p, {
      children: "更新旁路推流的转码配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_updatertmptranscodingex__prototype"
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
              children: " updateRtmpTranscodingEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LiveTranscoding transcoding, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_updatertmptranscodingex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["声网推荐你使用更加完善的服务端推流功能，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/media-push/restful/landing-page",
        children: "实现服务端旁路推流"
      }), "。 开始使用转码功能将媒体流推送到 CDN 后，你可以根据场景动态更新转码配置。更新配置后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#callback_irtcengineeventhandler_ontranscodingupdated",
        children: "onTranscodingUpdated"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_updatertmptranscodingex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_updatertmptranscodingex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "transcoding-3",
      children: _jsx(_components.code, {
        children: "transcoding"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["旁路推流的转码配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding",
        children: "LiveTranscoding"
      }), "。"]
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
      id: "api_irtcengineex_updatertmptranscodingex__return_values"
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
      id: "callback_irtcengineeventhandler_onrtmpstreamingevent"
    }), `
`, _jsx(_components.h2, {
      id: "onrtmpstreamingevent",
      children: "onRtmpStreamingEvent"
    }), `
`, _jsx(_components.p, {
      children: "旁路推流事件回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtmpstreamingevent__prototype"
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
              children: " onRtmpStreamingEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url, "
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
              children: " event)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtmpstreamingevent__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.1.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtmpstreamingevent__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url-6",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "旁路推流的地址。"
    }), `
`, _jsx(_components.h4, {
      id: "event",
      children: _jsx(_components.code, {
        children: "event"
      })
    }), `
`, _jsx(_components.p, {
      children: "旁路推流的事件码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE （1）：添加背景图或水印图时发生错误。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAMING_EVENT_URL_ALREADY_IN_USE （2）：该推流地址已被用于旁路推流。如需开启新的推流，请使用新的推流地址。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAMING_EVENT_ADVANCED_FEATURE_NOT_SUPPORT （3）：该功能不支持。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAMING_EVENT_REQUEST_TOO_OFTEN （4）：保留参数。"
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
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtmpstreamingstatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onrtmpstreamingstatechanged",
      children: "onRtmpStreamingStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "旁路推流状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtmpstreamingstatechanged__prototype"
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
              children: " onRtmpStreamingStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url, "
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
      id: "callback_irtcengineeventhandler_onrtmpstreamingstatechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调用于指示旁路推流的状态。当旁路推流状态发生变化时，SDK 会触发该回调，并返回对应的 URL 地址和当前的推流状态。当出现异常时，你可以参考错误码参数中的详细错误信息进行排查。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtmpstreamingstatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在旁路推流状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onrtmpstreamingstatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url-7",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "发生状态变化的旁路推流地址。"
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前旁路推流的状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_STATE_IDLE (0)：旁路推流尚未开始或已结束。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_STATE_CONNECTING (1)：正在连接推流服务器和 CDN 服务器。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_STATE_RUNNING (2)：正在推流。SDK 成功推送 RTMP 或 RTMPS 流并返回该状态。"
      }), `
`, _jsxs(_components.li, {
        children: ["RTMP_STREAM_PUBLISH_STATE_RECOVERING (3)：正在恢复推流。当 CDN 出现异常或旁路推流中断时，SDK 会尝试恢复推流并返回该状态。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "如果 SDK 成功恢复推流，则返回 RTMP_STREAM_PUBLISH_STATE_RUNNING (2)。"
          }), `
`, _jsx(_components.li, {
            children: "如果在 60 秒内未恢复推流或服务器发生错误，则返回 RTMP_STREAM_PUBLISH_STATE_FAILURE (4)。你也可以通过调用 startRtmpStreamWithTranscoding、 startRtmpStreamWithoutTranscoding 和 stopRtmpStream 方法重新连接服务器。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_STATE_FAILURE (4)：推流失败。你可以参考错误码参数中的详细错误信息进行排查，也可以尝试重新推流。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_STATE_DISCONNECTING (5)：SDK 正在断开与声网旁路推流服务器和 CDN 服务器的连接。当你调用 stopRtmpStream 正常停止旁路推流时，SDK 会依次返回 RTMP_STREAM_PUBLISH_STATE_DISCONNECTING 和 RTMP_STREAM_PUBLISH_STATE_IDLE 状态。"
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
      children: "旁路推流状态变化的原因："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_OK (0)：推流成功。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_INVALID_ARGUMENT (1)：参数无效。请检查参数设置。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_ENCRYPTED_STREAM_NOT_ALLOWED (2)：加密流无法推送。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_CONNECTION_TIMEOUT (3)：推流超时。你可以尝试重新推流。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_INTERNAL_SERVER_ERROR (4)：声网推流服务器内部错误。你可以尝试重新推流。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_RTMP_SERVER_ERROR (5)：CDN 服务器错误。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_TOO_OFTEN (6)：保留参数。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_REACH_LIMIT (7)：主播推送的 URL 超过 10 个。你可以停止向不必要的 URL 推流。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_NOT_AUTHORIZED (8)：主播操作了其他主播的 URL，例如更新或停止其他主播的流。请检查你的应用逻辑。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_STREAM_NOT_FOUND (9)：声网服务器未找到旁路推流的媒体流。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_FORMAT_NOT_SUPPORTED (10)：旁路推流地址格式不支持。请检查 URL 格式是否正确。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_NOT_BROADCASTER (11)：用户角色不是主播，无法使用旁路推流功能。请检查你的应用代码逻辑。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_TRANSCODING_NO_MIX_STREAM (13)：在无转码的旁路推流场景中调用了 updateRtmpTranscoding 方法更新转码配置。请检查你的应用代码逻辑。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_NET_DOWN (14)：主播端网络异常。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_PUBLISH_REASON_INVALID_PRIVILEGE (16)：项目无权限使用旁路推流服务。"
      }), `
`, _jsx(_components.li, {
        children: "RTMP_STREAM_UNPUBLISH_REASON_OK (100)：已正常停止旁路推流。调用 stopRtmpStream 停止推流后，SDK 返回该值。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontranscodingupdated"
    }), `
`, _jsx(_components.h2, {
      id: "ontranscodingupdated",
      children: "onTranscodingUpdated"
    }), `
`, _jsx(_components.p, {
      children: "发布端云端转码配置更新回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontranscodingupdated__prototype"
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
              children: " onTranscodingUpdated"
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
      id: "callback_irtcengineeventhandler_ontranscodingupdated__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding",
        children: "startRtmpStreamWithTranscoding"
      }), " 更新 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding",
        children: "LiveTranscoding"
      }), " 配置时，SDK 会触发该回调以报告更新信息。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果首次调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding",
            children: "startRtmpStreamWithTranscoding"
          }), " 设置 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-livetranscoding",
            children: "LiveTranscoding"
          }), " 配置，SDK 不会触发该回调。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontranscodingupdated__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在发布端的云端转码配置发生更新时被触发。"
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
