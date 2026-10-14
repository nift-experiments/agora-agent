import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "视频基础功能",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_video_basic" />

<a id="api_irtcengine_disablevideo" />

## disableVideo [#disablevideo]

关闭视频模块。

<a id="api_irtcengine_disablevideo__prototype" />

\`\`\`java
public abstract int disableVideo();
\`\`\`

<a id="api_irtcengine_disablevideo__detailed_desc" />

注： [disableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo) 会影响内部引擎，且可在离开频道后调用。调用该方法会重置整个引擎，可能导致响应时间变慢。你可以根据实际需求，使用以下方法分别控制视频模块的具体功能：

* enableLocalVideo：是否启用摄像头以创建本地视频流。
* muteLocalVideoStream：是否发布本地视频流。
* muteRemoteVideoStream：是否订阅并播放远端视频流。
* muteAllRemoteVideoStreams：是否订阅并播放所有远端视频流。

<a id="api_irtcengine_disablevideo__timing" />

### 调用时机 [#调用时机]

该方法可在加入频道前或加入频道后调用。

* 如果在加入频道前调用，则启用纯语音模式。
* 如果在加入频道后调用，则从视频模式切换为纯语音模式。之后调用 enableVideo 可再次切换为视频模式。

<a id="api_irtcengine_disablevideo__related" />

### 相关回调 [#相关回调]

成功调用该方法后，远端客户端会触发 \`onUserEnableVideo(false)\` 回调。

<a id="api_irtcengine_disablevideo__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enablelocalvideo" />

## enableLocalVideo [#enablelocalvideo]

启用或禁用本地视频采集。

<a id="api_irtcengine_enablelocalvideo__prototype" />

\`\`\`java
public abstract int enableLocalVideo(boolean enabled);
\`\`\`

<a id="api_irtcengine_enablelocalvideo__detailed_desc" />

该方法用于禁用或重新启用本地视频采集，不影响接收远端视频流。如果在频道内调用 \`enableLocalVideo(false)\` 禁用本地视频采集，则会同时停止在频道内发布视频流。若要重新开始视频采集，可调用 \`enableLocalVideo(true)\`，然后调用 [updateChannelMediaOptions](/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions) 设置 \`options\` 参数以在频道中发布本地采集的视频流。调用该方法成功禁用或启用本地视频采集后，远端会触发 [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged) 回调。

注：

* 你可以在加入频道前或加入频道后调用该方法。但如果在加入频道前调用，设置将在加入频道后生效。
* 该方法会启用内部引擎，并在离开频道后依然有效。

<a id="api_irtcengine_enablelocalvideo__related" />

### 相关回调 [#相关回调-1]

成功禁用或重新启用本地视频采集器后，SDK 会在远端客户端触发 [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged) 回调。

<a id="api_irtcengine_enablelocalvideo__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否启用本地视频采集。

* true：（默认）启用本地视频采集。
* false：禁用本地视频采集。禁用后，远端用户无法接收到本地用户的视频流，但本地用户仍可接收远端用户的视频流。设置为 false 时，无需本地摄像头。

<a id="api_irtcengine_enablelocalvideo__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enablevideo" />

## enableVideo [#enablevideo]

启用视频模块。

<a id="api_irtcengine_enablevideo__prototype" />

\`\`\`java
public abstract int enableVideo();
\`\`\`

<a id="api_irtcengine_enablevideo__detailed_desc" />

默认情况下，视频模块处于禁用状态。调用该方法可启用视频模块。如果之后需要禁用视频模块，需要调用 [disableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo) 方法。

注： 该方法会启用内部引擎，离开频道后依然有效。调用该方法会重置整个引擎，可能导致响应时间变慢。你可以根据实际需求，使用以下方法独立控制视频模块的特定功能：

* enableLocalVideo：是否启用摄像头以创建本地视频流。
* muteLocalVideoStream：是否发布本地视频流。
* muteRemoteVideoStream：是否订阅并播放远端视频流。
* muteAllRemoteVideoStreams：是否订阅并播放所有远端视频流。

成功调用该方法会重置 [enableLocalVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo)、 [muteRemoteVideoStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremotevideostream) 和 [muteAllRemoteVideoStreams](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremotevideostreams) 的设置，请谨慎操作。

<a id="api_irtcengine_enablevideo__timing" />

### 调用时机 [#调用时机-1]

该方法可以在加入频道前或加入频道后调用：

* 如果在加入频道前调用，则启用视频模块。
* 如果在纯语音通话中调用，则音频通话会自动切换为视频通话。

<a id="api_irtcengine_enablevideo__related" />

### 相关回调 [#相关回调-2]

成功调用该方法会在远端客户端触发 [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged) 回调。

<a id="api_irtcengine_enablevideo__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setvideoencoderconfiguration" />

## setVideoEncoderConfiguration [#setvideoencoderconfiguration]

设置本地视频的编码器配置。

<a id="api_irtcengine_setvideoencoderconfiguration__prototype" />

\`\`\`java
public abstract int setVideoEncoderConfiguration(VideoEncoderConfiguration config);
\`\`\`

<a id="api_irtcengine_setvideoencoderconfiguration__detailed_desc" />

注：

* 此方法和 getMirrorApplied 方法都支持设置镜像效果。声网建议只使用其中一种方法进行设置，同时使用两种方法会导致镜像效果叠加，镜像设置失效。
* 此方法中指定的 config 是在理想网络条件下的最大值。如果由于网络条件不稳定，视频引擎无法使用指定的 config 渲染视频，则会依次尝试列表中较低的参数，直到找到可用的配置。

<a id="api_irtcengine_setvideoencoderconfiguration__timing" />

### 调用时机 [#调用时机-2]

你可以在加入频道前或加入频道后调用此方法。如果用户在加入频道后不需要重新设置视频编码属性，声网建议在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 之前调用此方法，以减少首帧视频渲染时间。

<a id="api_irtcengine_setvideoencoderconfiguration__parameters" />

### 参数 [#参数-1]

#### \`config\` [#config]

视频编码配置，详见 [VideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videoencoderconfiguration)。

<a id="api_irtcengine_setvideoencoderconfiguration__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setvideoencoderconfigurationex" />

## setVideoEncoderConfigurationEx [#setvideoencoderconfigurationex]

设置本地视频的编码器配置。

<a id="api_irtcengineex_setvideoencoderconfigurationex__prototype" />

\`\`\`java
public abstract int setVideoEncoderConfigurationEx(VideoEncoderConfiguration config, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setvideoencoderconfigurationex__detailed_desc" />

[setVideoEncoderConfigurationEx](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengineex_setvideoencoderconfigurationex) 用于设置本地视频的编码器配置。每个配置文件对应一组视频参数，包括分辨率、帧率和码率。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    \`config\` 参数表示在理想网络条件下的最大值。如果由于网络条件不稳定，视频引擎无法使用指定的 \`config\` 渲染视频，则会依次尝试列表中更低的参数，直到找到可用的配置。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_setvideoencoderconfigurationex__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_setvideoencoderconfigurationex__timing" />

### 调用时机 [#调用时机-3]

你可以在加入频道前或后调用此方法。如果你在加入频道后不需要重新设置视频编码属性，声网建议你在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 之前调用此方法，以减少首帧视频渲染时间。

<a id="api_irtcengineex_setvideoencoderconfigurationex__parameters" />

### 参数 [#参数-2]

#### \`config\` [#config-1]

视频编码配置。详见 [VideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videoencoderconfiguration)。

#### \`connection\` [#connection]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setvideoencoderconfigurationex__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setvideoscenario" />

## setVideoScenario [#setvideoscenario]

设置视频应用场景。

<a id="api_irtcengine_setvideoscenario__prototype" />

\`\`\`java
public abstract int setVideoScenario(Constants.VideoScenario scenarioType);
\`\`\`

<a id="api_irtcengine_setvideoscenario__detailed_desc" />

成功调用该方法后，SDK 会根据指定的视频应用场景自动启用最佳实践策略，并调整关键性能指标，以优化视频体验。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在加入频道前调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setvideoscenario__parameters" />

### 参数 [#参数-3]

#### \`scenarioType\` [#scenariotype]

视频应用场景类型。详见 [VideoScenario](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videoapplicationscenariotype)。

* APPLICATION\\_SCENARIO\\_MEETING （1）：适用于会议场景，SDK 会自动启用以下策略：
  * 当低画质视频流需要较高码率时，SDK 会自动启用多种应对网络拥塞的技术，以增强低画质视频流的性能，确保订阅端的流畅接收。
  * SDK 实时监控高画质视频流的订阅人数，并根据订阅人数动态调整其配置：
    * 若无人订阅高画质视频流，SDK 会自动降低其码率和帧率以节省上行带宽。
    * 若有人订阅高画质视频流，SDK 会将其重置为最近一次调用 setVideoEncoderConfiguration 设置的配置；若用户未设置过配置，则使用以下默认值：
      * 分辨率：960 × 540。
      * 帧率：15 fps。
      * 码率：1000 Kbps。
  * SDK 实时监控低画质视频流的订阅人数，并根据订阅人数动态启用或禁用该流：
    * 若用户调用了 setDualStreamMode 并设置为永不发送低画质视频流（DISABLE\\_SIMULCAST\\_STREAM ），则会议场景下低画质流的动态调整将不生效。
    * 若无人订阅低画质视频流，SDK 会自动禁用该流以节省上行带宽。
    * 若有人订阅低画质视频流，SDK 会启用该流并重置为最近一次调用 setDualStreamMode 设置的配置；若用户未设置过配置，则使用以下默认值：
      * 分辨率：480 × 272。
      * 帧率：15 fps。
      * 码率：500 Kbps。
* APPLICATION\\_SCENARIO\\_1V1 （2）：适用于一对一直播场景。为满足低延迟和高画质的需求，SDK 会优化策略，提升视频质量、首帧渲染速度、中低端设备的延迟表现，以及弱网环境下的流畅度。
  * 注意：该枚举值仅适用于主播对主播的场景。
* APPLICATION\\_SCENARIO\\_LIVESHOW （3）：适用于秀场场景。在该场景中，快速的视频渲染和高画质至关重要。SDK 会进行多项性能优化，包括：
  * 自动启用音视频帧加速渲染以最小化首帧延迟（无需调用 enableInstantMediaRendering ）。
  * 启用 B 帧编码以提升图像质量和带宽效率。
  * 即使在网络较差或低端设备上，也能提供增强的视频质量和流畅的播放体验。

<a id="api_irtcengine_setvideoscenario__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无具体原因）。
  * -4：不支持视频应用场景。可能原因包括使用了语音 SDK 而非视频 SDK。
  * -7： RtcEngine 对象尚未初始化。请在调用该方法前先初始化 RtcEngine 对象。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startpreview" />

## startPreview \\[1/2] [#startpreview-12]

启用本地视频预览。

<a id="api_irtcengine_startpreview__prototype" />

\`\`\`java
public abstract int startPreview();
\`\`\`

<a id="api_irtcengine_startpreview__detailed_desc" />

注：

* 本地预览默认启用镜像模式。
* 离开频道后，本地预览仍保持开启状态。你需要调用 stopPreview 来关闭本地预览。

<a id="api_irtcengine_startpreview__timing" />

### 调用时机 [#调用时机-4]

必须在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 和 [setupLocalVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo) 之后调用此方法。

<a id="api_irtcengine_startpreview__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startpreview2" />

## startPreview \\[2/2] [#startpreview-22]

启用本地视频预览，并指定用于预览的视频源。

<a id="api_irtcengine_startpreview2__prototype" />

\`\`\`java
public abstract int startPreview(Constants.VideoSourceType sourceType);
\`\`\`

<a id="api_irtcengine_startpreview2__detailed_desc" />

注：

* 本地预览默认启用镜像模式。
* 离开频道后，本地预览仍保持开启状态。你需要调用 stopPreview 来关闭本地预览。

<a id="api_irtcengine_startpreview2__timing" />

### 调用时机 [#调用时机-5]

该方法必须在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 和 [setupLocalVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo) 之后调用。

<a id="api_irtcengine_startpreview2__parameters" />

### 参数 [#参数-4]

#### \`sourceType\` [#sourcetype]

视频源类型，详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

<a id="api_irtcengine_startpreview2__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stoppreview" />

## stopPreview \\[1/2] [#stoppreview-12]

停止本地视频预览。

<a id="api_irtcengine_stoppreview__prototype" />

\`\`\`java
public abstract int stopPreview();
\`\`\`

<a id="api_irtcengine_stoppreview__detailed_desc" />

在调用 \`startPreview\` 开启预览后，如果需要停止本地视频预览，可以调用此方法。

<a id="api_irtcengine_stoppreview__timing" />

### 调用时机 [#调用时机-6]

在加入频道前或离开频道后调用此方法。

<a id="api_irtcengine_stoppreview__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stoppreview2" />

## stopPreview \\[2/2] [#stoppreview-22]

停止本地视频预览。

<a id="api_irtcengine_stoppreview2__prototype" />

\`\`\`java
public abstract int stopPreview(Constants.VideoSourceType sourceType);
\`\`\`

<a id="api_irtcengine_stoppreview2__detailed_desc" />

调用 \`startPreview\` 后，如需停止本地视频预览，可以调用 \`stopPreview\`。

<a id="api_irtcengine_stoppreview2__timing" />

### 调用时机 [#调用时机-7]

在加入频道前或离开频道后调用此方法。

<a id="api_irtcengine_stoppreview2__parameters" />

### 参数 [#参数-5]

#### \`sourceType\` [#sourcetype-1]

视频源的类型，详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

<a id="api_irtcengine_stoppreview2__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onfirstlocalvideoframe" />

## onFirstLocalVideoFrame [#onfirstlocalvideoframe]

本地视频首帧在本地视图中显示时触发的回调。

<a id="callback_irtcengineeventhandler_onfirstlocalvideoframe__prototype" />

\`\`\`java
public void onFirstLocalVideoFrame(Constants.VideoSourceType source, int width, int height, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onfirstlocalvideoframe__detailed_desc" />

<a id="callback_irtcengineeventhandler_onfirstlocalvideoframe__parameters" />

### 参数 [#参数-6]

#### \`source\` [#source]

视频源类型，详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`width\` [#width]

首帧本地视频画面的宽度，单位为像素。

#### \`height\` [#height]

首帧本地视频画面的高度，单位为像素。

#### \`elapsed\` [#elapsed]

从本地用户调用 \`joinChannel\` 加入频道到该回调触发的时间间隔，单位为毫秒。如果在加入频道前调用了 \`startPreview\`，该参数表示从调用 \`startPreview\` 到该事件触发的时间间隔。

### 所属接口类 [#所属接口类-10]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onfirstlocalvideoframepublished" />

## onFirstLocalVideoFramePublished [#onfirstlocalvideoframepublished]

本地视频首帧发布回调。

<a id="callback_irtcengineeventhandler_onfirstlocalvideoframepublished__prototype" />

\`\`\`java
public void onFirstLocalVideoFramePublished(Constants.VideoSourceType source, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onfirstlocalvideoframepublished__detailed_desc" />

当满足以下任一条件时，SDK 会触发该回调：

* 本地客户端启用视频模块并调用 joinChannel 成功加入频道。
* 本地客户端依次调用 muteLocalVideoStream(true) 和 muteLocalVideoStream(false)。
* 本地客户端依次调用 disableVideo 和 enableVideo。
* 本地客户端调用 pushExternalVideoFrameById 成功向 SDK 推送视频帧。

<a id="callback_irtcengineeventhandler_onfirstlocalvideoframepublished__timing" />

### 触发时机 [#触发时机]

该回调在本地视频首帧发布时被触发。

<a id="callback_irtcengineeventhandler_onfirstlocalvideoframepublished__parameters" />

### 参数 [#参数-7]

#### \`source\` [#source-1]

视频源类型，详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`elapsed\` [#elapsed-1]

从本地用户调用 \`joinChannel\` 成功加入频道到该回调触发的时间（毫秒）。

### 所属接口类 [#所属接口类-11]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onfirstremotevideodecoded" />

## onFirstRemoteVideoDecoded [#onfirstremotevideodecoded]

接收到并解码首帧远端视频时的回调。

<a id="callback_irtcengineeventhandler_onfirstremotevideodecoded__prototype" />

\`\`\`java
public void onFirstRemoteVideoDecoded(int uid, int width, int height, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onfirstremotevideodecoded__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃，请改用 [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged) 回调中的 \`REMOTE_VIDEO_STATE_STARTING(1)\` 或 \`REMOTE_VIDEO_STATE_DECODING(2)\`。

SDK 在以下任一情况下会触发该回调：

* 远端用户加入频道并发送视频流。
* 远端用户停止发送视频流并在 15 秒后重新发送。导致此类中断的原因包括：
  * 远端用户离开频道。
  * 远端用户掉线。
  * 远端用户调用 disableVideo 关闭视频功能。

<a id="callback_irtcengineeventhandler_onfirstremotevideodecoded__timing" />

### 触发时机 [#触发时机-1]

该回调在接收到并解码首帧远端视频时被触发。

<a id="callback_irtcengineeventhandler_onfirstremotevideodecoded__parameters" />

### 参数 [#参数-8]

#### \`uid\` [#uid]

远端用户 ID。

#### \`width\` [#width-1]

视频流的宽度（单位为像素）。

#### \`height\` [#height-1]

视频流的高度（单位为像素）。

#### \`elapsed\` [#elapsed-2]

从本地用户调用 \`joinChannel\` 加入频道到触发该回调的时间（单位为毫秒）。

### 所属接口类 [#所属接口类-12]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onfirstremotevideoframe" />

## onFirstRemoteVideoFrame [#onfirstremotevideoframe]

远端视频首帧显示回调。

<a id="callback_irtcengineeventhandler_onfirstremotevideoframe__prototype" />

\`\`\`java
public void onFirstRemoteVideoFrame(int uid, int width, int height, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onfirstremotevideoframe__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [onFirstRemoteVideoFrame](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideoframe) 回调仅在视频帧由 SDK 渲染时触发；如果你使用自定义视频渲染，则不会触发该回调。你需要使用 SDK 外的方法自行实现该功能。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onfirstremotevideoframe__timing" />

### 触发时机 [#触发时机-2]

该回调在渲染器接收到远端视频的首帧时被触发。

<a id="callback_irtcengineeventhandler_onfirstremotevideoframe__parameters" />

### 参数 [#参数-9]

#### \`uid\` [#uid-1]

发送视频流的远端用户 ID。

#### \`width\` [#width-2]

视频流的宽度（像素）。

#### \`height\` [#height-2]

视频流的高度（像素）。

#### \`elapsed\` [#elapsed-3]

从本地用户调用 \`joinChannel\` 到 SDK 触发该回调的时间（毫秒）。

### 所属接口类 [#所属接口类-13]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onlocalvideoevent" />

## onLocalVideoEvent [#onlocalvideoevent]

本地视频事件发生时触发的回调。

<a id="callback_irtcengineeventhandler_onlocalvideoevent__prototype" />

\`\`\`java
public void onLocalVideoEvent(Constants.VideoSourceType source, int event)
\`\`\`

<a id="callback_irtcengineeventhandler_onlocalvideoevent__detailed_desc" />

你可以通过该回调获取本地视频事件发生的原因。

<a id="callback_irtcengineeventhandler_onlocalvideoevent__parameters" />

### 参数 [#参数-10]

#### \`source\` [#source-2]

视频源的类型。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`event\` [#event]

本地视频事件类型：

* LOCAL\\_VIDEO\\_EVENT\\_TYPE\\_SCREEN\\_CAPTURE\\_WINDOW\\_HIDDEN：屏幕采集窗口被隐藏。
* LOCAL\\_VIDEO\\_EVENT\\_TYPE\\_SCREEN\\_CAPTURE\\_WINDOW\\_RECOVER\\_FROM\\_HIDDEN：屏幕采集窗口从隐藏状态恢复。
* LOCAL\\_VIDEO\\_EVENT\\_TYPE\\_SCREEN\\_CAPTURE\\_STOPPED\\_BY\\_USER：屏幕采集被用户停止。
* LOCAL\\_VIDEO\\_EVENT\\_TYPE\\_SCREEN\\_CAPTURE\\_SYSTEM\\_INTERNAL\\_ERROR：屏幕采集过程中发生系统内部错误。

### 所属接口类 [#所属接口类-14]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onlocalvideostatechanged" />

## onLocalVideoStateChanged [#onlocalvideostatechanged]

本地视频流状态发生变化回调。

<a id="callback_irtcengineeventhandler_onlocalvideostatechanged__prototype" />

\`\`\`java
public void onLocalVideoStateChanged(Constants.VideoSourceType source, int state, int reason)
\`\`\`

<a id="callback_irtcengineeventhandler_onlocalvideostatechanged__detailed_desc" />

你可以通过该回调及时了解本地视频流的状态变化，并根据变化原因采取相应措施，以更好地管理和排查视频流相关问题。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请注意，视频帧重复检测仅适用于分辨率大于 200 × 200、帧率大于等于 10 fps 且码率小于 20 Kbps 的视频帧。 通常情况下，如果视频采集出现错误，可以通过该回调中的 \`reason\` 参数排查问题。但在某些设备上，当采集出现问题（如卡顿）时，Android 系统不会抛出任何错误回调，因此 SDK 无法上报本地视频状态变化的原因。此时，你可以通过以下方式判断是否未采集到视频帧：该回调上报 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` 或 \`LOCAL_VIDEO_STREAM_STATE_ENCODING\`，且 [onLocalVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostats) 回调中的 \`captureFrameRate\` 为 0。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onlocalvideostatechanged__timing" />

### 触发时机 [#触发时机-3]

该回调在以下情况下被触发，状态为 \`LOCAL_VIDEO_STREAM_STATE_FAILED\`， \`reason\` 为 \`LOCAL_VIDEO_STREAM_REASON_CAPTURE_FAILURE\`：

* Android 9 及以上版本中，应用在后台运行一段时间后，系统会自动收回摄像头权限。
* Android 6 及以上版本中，摄像头被第三方应用占用一段时间后释放，SDK 会触发该回调并上报 onLocalVideoStateChanged 回调， state 为 LOCAL\\_VIDEO\\_STREAM\\_STATE\\_CAPTURING， reason 为 LOCAL\\_VIDEO\\_STREAM\\_REASON\\_OK。
* 摄像头正常启动，但连续四秒未输出视频帧。
* 当摄像头输出采集的视频帧时，若 SDK 检测到连续 15 帧重复帧，会触发该回调， state 为 LOCAL\\_VIDEO\\_STREAM\\_STATE\\_CAPTURING， reason 为 LOCAL\\_VIDEO\\_STREAM\\_REASON\\_CAPTURE\\_FAILURE。

<a id="callback_irtcengineeventhandler_onlocalvideostatechanged__parameters" />

### 参数 [#参数-11]

#### \`source\` [#source-3]

视频源的类型。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`state\` [#state]

* LOCAL\\_VIDEO\\_STREAM\\_STATE\\_STOPPED (0)：本地视频处于初始状态。
* LOCAL\\_VIDEO\\_STREAM\\_STATE\\_CAPTURING (1)：本地视频采集设备启动成功。
* LOCAL\\_VIDEO\\_STREAM\\_STATE\\_ENCODING (2)：首帧视频编码成功。
* LOCAL\\_VIDEO\\_STREAM\\_STATE\\_FAILED (3)：本地视频启动失败。

#### \`reason\` [#reason]

* LOCAL\\_VIDEO\\_STREAM\\_REASON\\_OK (0)：本地视频状态正常。
* LOCAL\\_VIDEO\\_STREAM\\_REASON\\_FAILURE (1)：本地视频失败，未指定原因。
* LOCAL\\_VIDEO\\_STREAM\\_REASON\\_DEVICE\\_BUSY (3)：本地视频采集设备被占用。提示用户检查摄像头是否被其他应用占用，或尝试重新加入频道。
* LOCAL\\_VIDEO\\_STREAM\\_REASON\\_CAPTURE\\_FAILURE (4)：本地视频采集失败。提示用户检查视频采集设备是否正常工作，摄像头是否被其他应用占用，或尝试重新加入频道。
* LOCAL\\_VIDEO\\_STREAM\\_REASON\\_CODEC\\_NOT\\_SUPPORT (5)：本地视频编码失败。
* LOCAL\\_VIDEO\\_STREAM\\_REASON\\_DEVICE\\_NOT\\_FOUND (8)：未找到本地视频采集设备。提示用户检查摄像头是否正确连接或正常工作，然后重新加入频道。
* LOCAL\\_VIDEO\\_STREAM\\_REASON\\_DEVICE\\_INTERRUPT (14)：视频采集中断。可能原因包括：
  * 摄像头被其他应用占用。提示用户检查摄像头是否被其他应用占用。
  * 设备被锁屏，或当前应用被切换到后台。你可以使用前台服务通知操作系统，确保应用切换到后台后仍能采集视频。
* LOCAL\\_VIDEO\\_STREAM\\_REASON\\_DEVICE\\_FATAL\\_ERROR (15)：视频采集设备出现错误。提示用户关闭并重启摄像头以恢复功能。如果该操作无法解决问题，请检查摄像头是否存在硬件故障。
* LOCAL\\_VIDEO\\_STREAM\\_REASON\\_SCREEN\\_CAPTURE\\_FAILURE (21)：当前采集的窗口无数据。

### 所属接口类 [#所属接口类-15]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onlocalvideostats" />

## onLocalVideoStats [#onlocalvideostats]

本地视频流统计信息回调。

<a id="callback_irtcengineeventhandler_onlocalvideostats__prototype" />

\`\`\`java
public void onLocalVideoStats(Constants.VideoSourceType source, LocalVideoStats stats) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onlocalvideostats__detailed_desc" />

该回调每两秒触发一次。

<a id="callback_irtcengineeventhandler_onlocalvideostats__timing" />

### 触发时机 [#触发时机-4]

该回调每两秒触发一次。

<a id="callback_irtcengineeventhandler_onlocalvideostats__parameters" />

### 参数 [#参数-12]

#### \`source\` [#source-4]

视频源类型，详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`stats\` [#stats]

本地视频流的统计信息，详见 [LocalVideoStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localvideostats)。

### 所属接口类 [#所属接口类-16]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onremotevideostatechanged" />

## onRemoteVideoStateChanged [#onremotevideostatechanged]

远端视频状态发生改变回调。

<a id="callback_irtcengineeventhandler_onremotevideostatechanged__prototype" />

\`\`\`java
public void onRemoteVideoStateChanged(int uid, int state, int reason, int elapsed)
\`\`\`

<a id="callback_irtcengineeventhandler_onremotevideostatechanged__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当频道中的用户数（在通信频道场景中）或主播数（在直播频道中）超过 32 时，该回调可能无法正常工作。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onremotevideostatechanged__timing" />

### 触发时机 [#触发时机-5]

该回调在远端视频状态发生变化时被触发。

<a id="callback_irtcengineeventhandler_onremotevideostatechanged__parameters" />

### 参数 [#参数-13]

#### \`uid\` [#uid-2]

发生视频状态变化的远端用户 ID。

#### \`state\` [#state-1]

远端视频的状态：

* REMOTE\\_VIDEO\\_STATE\\_STOPPED (0)：远端视频处于初始状态。该状态在 REMOTE\\_VIDEO\\_STATE\\_REASON\\_LOCAL\\_MUTED (3)、 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_MUTED (5) 或 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_OFFLINE (7) 的情况下报告。
* REMOTE\\_VIDEO\\_STATE\\_STARTING (1)：已接收到第一帧远端视频包。
* REMOTE\\_VIDEO\\_STATE\\_DECODING (2)：远端视频流解码并正常播放。该状态在 REMOTE\\_VIDEO\\_STATE\\_REASON\\_NETWORK\\_RECOVERY (2)、 REMOTE\\_VIDEO\\_STATE\\_REASON\\_LOCAL\\_UNMUTED (4)、 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_UNMUTED (6) 或 REMOTE\\_VIDEO\\_STATE\\_REASON\\_AUDIO\\_FALLBACK\\_RECOVERY (9) 的情况下报告。
* REMOTE\\_VIDEO\\_STATE\\_FROZEN (3)：远端视频卡顿。该状态在 REMOTE\\_VIDEO\\_STATE\\_REASON\\_NETWORK\\_CONGESTION (1) 或 REMOTE\\_VIDEO\\_STATE\\_REASON\\_AUDIO\\_FALLBACK (8) 的情况下报告。
* REMOTE\\_VIDEO\\_STATE\\_FAILED (4)：远端视频启动失败。该状态在 REMOTE\\_VIDEO\\_STATE\\_REASON\\_INTERNAL (0) 的情况下由 SDK 报告。

#### \`reason\` [#reason-1]

远端视频状态变化的原因：

* REMOTE\\_VIDEO\\_STATE\\_REASON\\_INTERNAL (0)：内部原因。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_NETWORK\\_CONGESTION (1)：网络拥塞。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_NETWORK\\_RECOVERY (2)：网络恢复。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_LOCAL\\_MUTED (3)：本地用户停止接收远端视频流或关闭视频模块。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_LOCAL\\_UNMUTED (4)：本地用户恢复接收远端视频流或开启视频模块。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_MUTED (5)：远端用户停止发送视频流或关闭视频模块。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_UNMUTED (6)：远端用户恢复发送视频流或开启视频模块。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_OFFLINE (7)：远端用户离开频道。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_AUDIO\\_FALLBACK (8)：由于网络条件差，远端媒体流降级为纯音频流。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_AUDIO\\_FALLBACK\\_RECOVERY (9)：网络条件改善后，远端媒体流从音频流恢复为视频流。
* REMOTE\\_VIDEO\\_STATE\\_REASON\\_CODEC\\_NOT\\_SUPPORT (13)：本地视频解码器不支持解码远端视频流。

#### \`elapsed\` [#elapsed-4]

从本地用户调用 \`joinChannel\` 方法到 SDK 触发该回调的时间（毫秒）。

### 所属接口类 [#所属接口类-17]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onremotevideostats" />

## onRemoteVideoStats [#onremotevideostats]

报告每个远端用户发送的视频流的统计信息回调。

<a id="callback_irtcengineeventhandler_onremotevideostats__prototype" />

\`\`\`java
public void onRemoteVideoStats(RemoteVideoStats stats) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onremotevideostats__detailed_desc" />

SDK 每两秒为每个远端用户触发一次该回调。如果频道中有多个用户或主播发送视频流，SDK 会相应地多次触发该回调。

<a id="callback_irtcengineeventhandler_onremotevideostats__timing" />

### 触发时机 [#触发时机-6]

该回调在 SDK 每两秒收集到远端用户的视频流统计信息时被触发。

<a id="callback_irtcengineeventhandler_onremotevideostats__parameters" />

### 参数 [#参数-14]

#### \`stats\` [#stats-1]

远端视频流的统计信息。详见 [RemoteVideoStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remotevideostats)。

### 所属接口类 [#所属接口类-18]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onremotevideotransportstats" />

## onRemoteVideoTransportStats [#onremotevideotransportstats]

远端视频流传输层统计信息回调。

<a id="callback_irtcengineeventhandler_onremotevideotransportstats__prototype" />

\`\`\`java
public void onRemoteVideoTransportStats(int uid, int delay, int lost, int rxKBitRate)
\`\`\`

<a id="callback_irtcengineeventhandler_onremotevideotransportstats__detailed_desc" />

#### \`废弃\` [#废弃-1]

该方法已废弃，请改用 [onRemoteVideoStats](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats)。

该回调上报传输层的统计信息，例如丢包率和网络时延。该回调在通话过程中，当本地用户接收到远端用户或主播发送的视频包时，每 2 秒触发一次。

<a id="callback_irtcengineeventhandler_onremotevideotransportstats__timing" />

### 触发时机 [#触发时机-7]

该回调在通话过程中，当本地用户接收到远端用户或主播发送的视频包时，每 2 秒触发一次。

<a id="callback_irtcengineeventhandler_onremotevideotransportstats__parameters" />

### 参数 [#参数-15]

#### \`uid\` [#uid-3]

远端用户 ID。

#### \`delay\` [#delay]

从发送端到接收端的网络时延（毫秒）。

#### \`lost\` [#lost]

从远端用户发送的视频包的丢包率（%）。

#### \`rxKBitRate\` [#rxkbitrate]

接收视频的码率（Kbps）。

### 所属接口类 [#所属接口类-19]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onuserenablelocalvideo" />

## onUserEnableLocalVideo [#onuserenablelocalvideo]

指定远端用户启用或关闭本地视频采集功能时触发的回调。

<a id="callback_irtcengineeventhandler_onuserenablelocalvideo__prototype" />

\`\`\`java
public void onUserEnableLocalVideo(int uid, boolean enabled)
\`\`\`

<a id="callback_irtcengineeventhandler_onuserenablelocalvideo__detailed_desc" />

#### \`废弃\` [#废弃-2]

该回调已废弃，建议使用 [onRemoteVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged) 回调替代，并结合以下参数使用：

* REMOTE\\_VIDEO\\_STATE\\_STOPPED(0) 和 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_MUTED(5)。
* REMOTE\\_VIDEO\\_STATE\\_DECODING(2) 和 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_UNMUTED(6)。

<a id="callback_irtcengineeventhandler_onuserenablelocalvideo__timing" />

### 触发时机 [#触发时机-8]

该回调在远端用户调用 [enableLocalVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo) 启用或关闭本地视频采集功能时被触发。

<a id="callback_irtcengineeventhandler_onuserenablelocalvideo__parameters" />

### 参数 [#参数-16]

#### \`uid\` [#uid-4]

远端用户 ID。

#### \`enabled\` [#enabled-1]

指定远端用户是否启用本地视频采集功能：

* true：启用视频模块，频道内其他用户可以看到该远端用户的视频。
* false：关闭视频模块，频道内其他用户无法接收该远端用户的视频流，但该远端用户仍可接收其他用户的视频流。

### 所属接口类 [#所属接口类-20]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onuserenablevideo" />

## onUserEnableVideo [#onuserenablevideo]

远端用户启用或关闭视频模块的回调。

<a id="callback_irtcengineeventhandler_onuserenablevideo__prototype" />

\`\`\`java
public void onUserEnableVideo(int uid, boolean enabled)
\`\`\`

<a id="callback_irtcengineeventhandler_onuserenablevideo__detailed_desc" />

该回调在远端用户调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 或 [disableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo) 方法时触发。关闭视频模块后，用户只能进行语音通话，无法发送或接收任何视频。

<a id="callback_irtcengineeventhandler_onuserenablevideo__timing" />

### 触发时机 [#触发时机-9]

该回调在远端用户启用或关闭视频模块时被触发。

<a id="callback_irtcengineeventhandler_onuserenablevideo__parameters" />

### 参数 [#参数-17]

#### \`uid\` [#uid-5]

远端用户的用户 ID。

#### \`enabled\` [#enabled-2]

是否启用视频模块：

* true：启用视频模块。
* false：关闭视频模块。

### 所属接口类 [#所属接口类-21]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onusermutevideo" />

## onUserMuteVideo [#onusermutevideo]

远端视频状态发生改变回调。

<a id="callback_irtcengineeventhandler_onusermutevideo__prototype" />

\`\`\`java
public void onUserMuteVideo(int uid, boolean muted)
\`\`\`

<a id="callback_irtcengineeventhandler_onusermutevideo__detailed_desc" />

当远端用户调用 [muteLocalVideoStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalvideostream) 时，SDK 会触发该回调，向本地用户报告远端用户发布的视频流状态。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当频道中通信场景下的用户数或直播场景下的主播数超过 32 时，该回调可能不准确。
  </CalloutDescription>
</CalloutContainer>

<a id="callback_irtcengineeventhandler_onusermutevideo__timing" />

### 触发时机 [#触发时机-10]

该回调在远端用户调用 [muteLocalVideoStream](/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalvideostream) 停止或恢复发布视频流时被触发。

<a id="callback_irtcengineeventhandler_onusermutevideo__parameters" />

### 参数 [#参数-18]

#### \`uid\` [#uid-6]

远端用户的用户 ID。

#### \`muted\` [#muted]

远端用户是否停止发布视频流：

* true：远端用户停止发布视频流。
* false：远端用户恢复发布视频流。

### 所属接口类 [#所属接口类-22]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onvideopublishstatechanged" />

## onVideoPublishStateChanged [#onvideopublishstatechanged]

视频发布状态发生变化回调。

<a id="callback_irtcengineeventhandler_onvideopublishstatechanged__prototype" />

\`\`\`java
public void onVideoPublishStateChanged(Constants.VideoSourceType source, String channel, int oldState, int newState, int elapseSinceLastState)
\`\`\`

<a id="callback_irtcengineeventhandler_onvideopublishstatechanged__detailed_desc" />

<a id="callback_irtcengineeventhandler_onvideopublishstatechanged__parameters" />

### 参数 [#参数-19]

#### \`source\` [#source-5]

视频源的类型，详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`channel\` [#channel]

频道名。

#### \`oldState\` [#oldstate]

之前的视频发布状态：

* PUB\\_STATE\\_IDLE （0）：加入频道后的初始发布状态。
* PUB\\_STATE\\_NO\\_PUBLISHED （1）：发布本地流失败。
* PUB\\_STATE\\_PUBLISHING （2）：正在发布本地流。
* PUB\\_STATE\\_PUBLISHED （3）：成功发布本地流。

#### \`newState\` [#newstate]

当前的视频发布状态：

* PUB\\_STATE\\_IDLE （0）：加入频道后的初始发布状态。
* PUB\\_STATE\\_NO\\_PUBLISHED （1）：发布本地流失败。
* PUB\\_STATE\\_PUBLISHING （2）：正在发布本地流。
* PUB\\_STATE\\_PUBLISHED （3）：成功发布本地流。

#### \`elapseSinceLastState\` [#elapsesincelaststate]

从上一个状态到当前状态所经历的时间（毫秒）。

### 所属接口类 [#所属接口类-23]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onvideosizechanged" />

## onVideoSizeChanged [#onvideosizechanged]

指定用户的视频尺寸或旋转信息发生变化回调。

<a id="callback_irtcengineeventhandler_onvideosizechanged__prototype" />

\`\`\`java
public void onVideoSizeChanged(Constants.VideoSourceType source, int uid, int width, int height, int rotation)
\`\`\`

<a id="callback_irtcengineeventhandler_onvideosizechanged__detailed_desc" />

<a id="callback_irtcengineeventhandler_onvideosizechanged__timing" />

### 触发时机 [#触发时机-11]

该回调在指定用户的视频尺寸或旋转角度发生变化时被触发。

<a id="callback_irtcengineeventhandler_onvideosizechanged__parameters" />

### 参数 [#参数-20]

#### \`source\` [#source-6]

视频源类型，详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`uid\` [#uid-7]

发生视频尺寸或旋转变化的用户 ID。对于本地用户， \`uid\` 为 0，表示本地用户的视频预览。

#### \`width\` [#width-3]

视频流的宽度（单位为像素）。

#### \`height\` [#height-3]

视频流的高度（单位为像素）。

#### \`rotation\` [#rotation]

视频的旋转角度，取值范围为 \\[0, 360)。

### 所属接口类 [#所属接口类-24]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onvideostopped" />

## onVideoStopped [#onvideostopped]

视频停止播放时触发的回调。

<a id="callback_irtcengineeventhandler_onvideostopped__prototype" />

\`\`\`java
public void onVideoStopped() {}
\`\`\`

<a id="callback_irtcengineeventhandler_onvideostopped__detailed_desc" />

#### \`废弃\` [#废弃-3]

该方法已废弃，请改用 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged)。

你可以在该回调中更改视图的配置，例如在视图中显示其他图片。

<a id="callback_irtcengineeventhandler_onvideostopped__timing" />

### 触发时机 [#触发时机-12]

该回调在视频停止播放时被触发。

### 所属接口类 [#所属接口类-25]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "disablevideo",
    content: "关闭视频模块。"
  }, {
    heading: "disablevideo",
    content: "注： disableVideo 会影响内部引擎，且可在离开频道后调用。调用该方法会重置整个引擎，可能导致响应时间变慢。你可以根据实际需求，使用以下方法分别控制视频模块的具体功能："
  }, {
    heading: "disablevideo",
    content: "enableLocalVideo：是否启用摄像头以创建本地视频流。"
  }, {
    heading: "disablevideo",
    content: "muteLocalVideoStream：是否发布本地视频流。"
  }, {
    heading: "disablevideo",
    content: "muteRemoteVideoStream：是否订阅并播放远端视频流。"
  }, {
    heading: "disablevideo",
    content: "muteAllRemoteVideoStreams：是否订阅并播放所有远端视频流。"
  }, {
    heading: "调用时机",
    content: "该方法可在加入频道前或加入频道后调用。"
  }, {
    heading: "调用时机",
    content: "如果在加入频道前调用，则启用纯语音模式。"
  }, {
    heading: "调用时机",
    content: "如果在加入频道后调用，则从视频模式切换为纯语音模式。之后调用 enableVideo 可再次切换为视频模式。"
  }, {
    heading: "相关回调",
    content: "成功调用该方法后，远端客户端会触发 `onUserEnableVideo(false)` 回调。"
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
    heading: "enablelocalvideo",
    content: "启用或禁用本地视频采集。"
  }, {
    heading: "enablelocalvideo",
    content: "该方法用于禁用或重新启用本地视频采集，不影响接收远端视频流。如果在频道内调用 `enableLocalVideo(false)` 禁用本地视频采集，则会同时停止在频道内发布视频流。若要重新开始视频采集，可调用 `enableLocalVideo(true)`，然后调用 updateChannelMediaOptions 设置 `options` 参数以在频道中发布本地采集的视频流。调用该方法成功禁用或启用本地视频采集后，远端会触发 onRemoteVideoStateChanged 回调。"
  }, {
    heading: "enablelocalvideo",
    content: "注："
  }, {
    heading: "enablelocalvideo",
    content: "你可以在加入频道前或加入频道后调用该方法。但如果在加入频道前调用，设置将在加入频道后生效。"
  }, {
    heading: "enablelocalvideo",
    content: "该方法会启用内部引擎，并在离开频道后依然有效。"
  }, {
    heading: "相关回调-1",
    content: "成功禁用或重新启用本地视频采集器后，SDK 会在远端客户端触发 onRemoteVideoStateChanged 回调。"
  }, {
    heading: "enabled",
    content: "是否启用本地视频采集。"
  }, {
    heading: "enabled",
    content: "true：（默认）启用本地视频采集。"
  }, {
    heading: "enabled",
    content: "false：禁用本地视频采集。禁用后，远端用户无法接收到本地用户的视频流，但本地用户仍可接收远端用户的视频流。设置为 false 时，无需本地摄像头。"
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
    heading: "enablevideo",
    content: "启用视频模块。"
  }, {
    heading: "enablevideo",
    content: "默认情况下，视频模块处于禁用状态。调用该方法可启用视频模块。如果之后需要禁用视频模块，需要调用 disableVideo 方法。"
  }, {
    heading: "enablevideo",
    content: "注： 该方法会启用内部引擎，离开频道后依然有效。调用该方法会重置整个引擎，可能导致响应时间变慢。你可以根据实际需求，使用以下方法独立控制视频模块的特定功能："
  }, {
    heading: "enablevideo",
    content: "enableLocalVideo：是否启用摄像头以创建本地视频流。"
  }, {
    heading: "enablevideo",
    content: "muteLocalVideoStream：是否发布本地视频流。"
  }, {
    heading: "enablevideo",
    content: "muteRemoteVideoStream：是否订阅并播放远端视频流。"
  }, {
    heading: "enablevideo",
    content: "muteAllRemoteVideoStreams：是否订阅并播放所有远端视频流。"
  }, {
    heading: "enablevideo",
    content: "成功调用该方法会重置 enableLocalVideo、 muteRemoteVideoStream 和 muteAllRemoteVideoStreams 的设置，请谨慎操作。"
  }, {
    heading: "调用时机-1",
    content: "该方法可以在加入频道前或加入频道后调用："
  }, {
    heading: "调用时机-1",
    content: "如果在加入频道前调用，则启用视频模块。"
  }, {
    heading: "调用时机-1",
    content: "如果在纯语音通话中调用，则音频通话会自动切换为视频通话。"
  }, {
    heading: "相关回调-2",
    content: "成功调用该方法会在远端客户端触发 onRemoteVideoStateChanged 回调。"
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
    heading: "setvideoencoderconfiguration",
    content: "设置本地视频的编码器配置。"
  }, {
    heading: "setvideoencoderconfiguration",
    content: "注："
  }, {
    heading: "setvideoencoderconfiguration",
    content: "此方法和 getMirrorApplied 方法都支持设置镜像效果。声网建议只使用其中一种方法进行设置，同时使用两种方法会导致镜像效果叠加，镜像设置失效。"
  }, {
    heading: "setvideoencoderconfiguration",
    content: "此方法中指定的 config 是在理想网络条件下的最大值。如果由于网络条件不稳定，视频引擎无法使用指定的 config 渲染视频，则会依次尝试列表中较低的参数，直到找到可用的配置。"
  }, {
    heading: "调用时机-2",
    content: "你可以在加入频道前或加入频道后调用此方法。如果用户在加入频道后不需要重新设置视频编码属性，声网建议在调用 enableVideo 之前调用此方法，以减少首帧视频渲染时间。"
  }, {
    heading: "config",
    content: "视频编码配置，详见 VideoEncoderConfiguration。"
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
    heading: "setvideoencoderconfigurationex",
    content: "设置本地视频的编码器配置。"
  }, {
    heading: "setvideoencoderconfigurationex",
    content: "setVideoEncoderConfigurationEx 用于设置本地视频的编码器配置。每个配置文件对应一组视频参数，包括分辨率、帧率和码率。"
  }, {
    heading: "setvideoencoderconfigurationex",
    content: "`config` 参数表示在理想网络条件下的最大值。如果由于网络条件不稳定，视频引擎无法使用指定的 `config` 渲染视频，则会依次尝试列表中更低的参数，直到找到可用的配置。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机-3",
    content: "你可以在加入频道前或后调用此方法。如果你在加入频道后不需要重新设置视频编码属性，声网建议你在调用 enableVideo 之前调用此方法，以减少首帧视频渲染时间。"
  }, {
    heading: "config-1",
    content: "视频编码配置。详见 VideoEncoderConfiguration。"
  }, {
    heading: "connection",
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
    heading: "setvideoscenario",
    content: "设置视频应用场景。"
  }, {
    heading: "setvideoscenario",
    content: "成功调用该方法后，SDK 会根据指定的视频应用场景自动启用最佳实践策略，并调整关键性能指标，以优化视频体验。"
  }, {
    heading: "setvideoscenario",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "scenariotype",
    content: "视频应用场景类型。详见 VideoScenario。"
  }, {
    heading: "scenariotype",
    content: "APPLICATION\\_SCENARIO\\_MEETING （1）：适用于会议场景，SDK 会自动启用以下策略："
  }, {
    heading: "scenariotype",
    content: "当低画质视频流需要较高码率时，SDK 会自动启用多种应对网络拥塞的技术，以增强低画质视频流的性能，确保订阅端的流畅接收。"
  }, {
    heading: "scenariotype",
    content: "SDK 实时监控高画质视频流的订阅人数，并根据订阅人数动态调整其配置："
  }, {
    heading: "scenariotype",
    content: "若无人订阅高画质视频流，SDK 会自动降低其码率和帧率以节省上行带宽。"
  }, {
    heading: "scenariotype",
    content: "若有人订阅高画质视频流，SDK 会将其重置为最近一次调用 setVideoEncoderConfiguration 设置的配置；若用户未设置过配置，则使用以下默认值："
  }, {
    heading: "scenariotype",
    content: "分辨率：960 × 540。"
  }, {
    heading: "scenariotype",
    content: "帧率：15 fps。"
  }, {
    heading: "scenariotype",
    content: "码率：1000 Kbps。"
  }, {
    heading: "scenariotype",
    content: "SDK 实时监控低画质视频流的订阅人数，并根据订阅人数动态启用或禁用该流："
  }, {
    heading: "scenariotype",
    content: "若用户调用了 setDualStreamMode 并设置为永不发送低画质视频流（DISABLE\\_SIMULCAST\\_STREAM ），则会议场景下低画质流的动态调整将不生效。"
  }, {
    heading: "scenariotype",
    content: "若无人订阅低画质视频流，SDK 会自动禁用该流以节省上行带宽。"
  }, {
    heading: "scenariotype",
    content: "若有人订阅低画质视频流，SDK 会启用该流并重置为最近一次调用 setDualStreamMode 设置的配置；若用户未设置过配置，则使用以下默认值："
  }, {
    heading: "scenariotype",
    content: "分辨率：480 × 272。"
  }, {
    heading: "scenariotype",
    content: "帧率：15 fps。"
  }, {
    heading: "scenariotype",
    content: "码率：500 Kbps。"
  }, {
    heading: "scenariotype",
    content: "APPLICATION\\_SCENARIO\\_1V1 （2）：适用于一对一直播场景。为满足低延迟和高画质的需求，SDK 会优化策略，提升视频质量、首帧渲染速度、中低端设备的延迟表现，以及弱网环境下的流畅度。"
  }, {
    heading: "scenariotype",
    content: "注意：该枚举值仅适用于主播对主播的场景。"
  }, {
    heading: "scenariotype",
    content: "APPLICATION\\_SCENARIO\\_LIVESHOW （3）：适用于秀场场景。在该场景中，快速的视频渲染和高画质至关重要。SDK 会进行多项性能优化，包括："
  }, {
    heading: "scenariotype",
    content: "自动启用音视频帧加速渲染以最小化首帧延迟（无需调用 enableInstantMediaRendering ）。"
  }, {
    heading: "scenariotype",
    content: "启用 B 帧编码以提升图像质量和带宽效率。"
  }, {
    heading: "scenariotype",
    content: "即使在网络较差或低端设备上，也能提供增强的视频质量和流畅的播放体验。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-5",
    content: "-1：发生通用错误（无具体原因）。"
  }, {
    heading: "返回值-5",
    content: "-4：不支持视频应用场景。可能原因包括使用了语音 SDK 而非视频 SDK。"
  }, {
    heading: "返回值-5",
    content: "-7： RtcEngine 对象尚未初始化。请在调用该方法前先初始化 RtcEngine 对象。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }, {
    heading: "startpreview-12",
    content: "启用本地视频预览。"
  }, {
    heading: "startpreview-12",
    content: "注："
  }, {
    heading: "startpreview-12",
    content: "本地预览默认启用镜像模式。"
  }, {
    heading: "startpreview-12",
    content: "离开频道后，本地预览仍保持开启状态。你需要调用 stopPreview 来关闭本地预览。"
  }, {
    heading: "调用时机-4",
    content: "必须在调用 enableVideo 和 setupLocalVideo 之后调用此方法。"
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
    heading: "startpreview-22",
    content: "启用本地视频预览，并指定用于预览的视频源。"
  }, {
    heading: "startpreview-22",
    content: "注："
  }, {
    heading: "startpreview-22",
    content: "本地预览默认启用镜像模式。"
  }, {
    heading: "startpreview-22",
    content: "离开频道后，本地预览仍保持开启状态。你需要调用 stopPreview 来关闭本地预览。"
  }, {
    heading: "调用时机-5",
    content: "该方法必须在调用 enableVideo 和 setupLocalVideo 之后调用。"
  }, {
    heading: "sourcetype",
    content: "视频源类型，详见 VideoSourceType。"
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
    heading: "stoppreview-12",
    content: "停止本地视频预览。"
  }, {
    heading: "stoppreview-12",
    content: "在调用 `startPreview` 开启预览后，如果需要停止本地视频预览，可以调用此方法。"
  }, {
    heading: "调用时机-6",
    content: "在加入频道前或离开频道后调用此方法。"
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
    heading: "stoppreview-22",
    content: "停止本地视频预览。"
  }, {
    heading: "stoppreview-22",
    content: "调用 `startPreview` 后，如需停止本地视频预览，可以调用 `stopPreview`。"
  }, {
    heading: "调用时机-7",
    content: "在加入频道前或离开频道后调用此方法。"
  }, {
    heading: "sourcetype-1",
    content: "视频源的类型，详见 VideoSourceType。"
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
    heading: "onfirstlocalvideoframe",
    content: "本地视频首帧在本地视图中显示时触发的回调。"
  }, {
    heading: "source",
    content: "视频源类型，详见 VideoSourceType。"
  }, {
    heading: "width",
    content: "首帧本地视频画面的宽度，单位为像素。"
  }, {
    heading: "height",
    content: "首帧本地视频画面的高度，单位为像素。"
  }, {
    heading: "elapsed",
    content: "从本地用户调用 `joinChannel` 加入频道到该回调触发的时间间隔，单位为毫秒。如果在加入频道前调用了 `startPreview`，该参数表示从调用 `startPreview` 到该事件触发的时间间隔。"
  }, {
    heading: "所属接口类-10",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onfirstlocalvideoframepublished",
    content: "本地视频首帧发布回调。"
  }, {
    heading: "onfirstlocalvideoframepublished",
    content: "当满足以下任一条件时，SDK 会触发该回调："
  }, {
    heading: "onfirstlocalvideoframepublished",
    content: "本地客户端启用视频模块并调用 joinChannel 成功加入频道。"
  }, {
    heading: "onfirstlocalvideoframepublished",
    content: "本地客户端依次调用 muteLocalVideoStream(true) 和 muteLocalVideoStream(false)。"
  }, {
    heading: "onfirstlocalvideoframepublished",
    content: "本地客户端依次调用 disableVideo 和 enableVideo。"
  }, {
    heading: "onfirstlocalvideoframepublished",
    content: "本地客户端调用 pushExternalVideoFrameById 成功向 SDK 推送视频帧。"
  }, {
    heading: "触发时机",
    content: "该回调在本地视频首帧发布时被触发。"
  }, {
    heading: "source-1",
    content: "视频源类型，详见 VideoSourceType。"
  }, {
    heading: "elapsed-1",
    content: "从本地用户调用 `joinChannel` 成功加入频道到该回调触发的时间（毫秒）。"
  }, {
    heading: "所属接口类-11",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onfirstremotevideodecoded",
    content: "接收到并解码首帧远端视频时的回调。"
  }, {
    heading: "废弃",
    content: "该方法已废弃，请改用 onRemoteVideoStateChanged 回调中的 `REMOTE_VIDEO_STATE_STARTING(1)` 或 `REMOTE_VIDEO_STATE_DECODING(2)`。"
  }, {
    heading: "废弃",
    content: "SDK 在以下任一情况下会触发该回调："
  }, {
    heading: "废弃",
    content: "远端用户加入频道并发送视频流。"
  }, {
    heading: "废弃",
    content: "远端用户停止发送视频流并在 15 秒后重新发送。导致此类中断的原因包括："
  }, {
    heading: "废弃",
    content: "远端用户离开频道。"
  }, {
    heading: "废弃",
    content: "远端用户掉线。"
  }, {
    heading: "废弃",
    content: "远端用户调用 disableVideo 关闭视频功能。"
  }, {
    heading: "触发时机-1",
    content: "该回调在接收到并解码首帧远端视频时被触发。"
  }, {
    heading: "uid",
    content: "远端用户 ID。"
  }, {
    heading: "width-1",
    content: "视频流的宽度（单位为像素）。"
  }, {
    heading: "height-1",
    content: "视频流的高度（单位为像素）。"
  }, {
    heading: "elapsed-2",
    content: "从本地用户调用 `joinChannel` 加入频道到触发该回调的时间（单位为毫秒）。"
  }, {
    heading: "所属接口类-12",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onfirstremotevideoframe",
    content: "远端视频首帧显示回调。"
  }, {
    heading: "onfirstremotevideoframe",
    content: "onFirstRemoteVideoFrame 回调仅在视频帧由 SDK 渲染时触发；如果你使用自定义视频渲染，则不会触发该回调。你需要使用 SDK 外的方法自行实现该功能。"
  }, {
    heading: "触发时机-2",
    content: "该回调在渲染器接收到远端视频的首帧时被触发。"
  }, {
    heading: "uid-1",
    content: "发送视频流的远端用户 ID。"
  }, {
    heading: "width-2",
    content: "视频流的宽度（像素）。"
  }, {
    heading: "height-2",
    content: "视频流的高度（像素）。"
  }, {
    heading: "elapsed-3",
    content: "从本地用户调用 `joinChannel` 到 SDK 触发该回调的时间（毫秒）。"
  }, {
    heading: "所属接口类-13",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onlocalvideoevent",
    content: "本地视频事件发生时触发的回调。"
  }, {
    heading: "onlocalvideoevent",
    content: "你可以通过该回调获取本地视频事件发生的原因。"
  }, {
    heading: "source-2",
    content: "视频源的类型。详见 VideoSourceType。"
  }, {
    heading: "event",
    content: "本地视频事件类型："
  }, {
    heading: "event",
    content: "LOCAL\\_VIDEO\\_EVENT\\_TYPE\\_SCREEN\\_CAPTURE\\_WINDOW\\_HIDDEN：屏幕采集窗口被隐藏。"
  }, {
    heading: "event",
    content: "LOCAL\\_VIDEO\\_EVENT\\_TYPE\\_SCREEN\\_CAPTURE\\_WINDOW\\_RECOVER\\_FROM\\_HIDDEN：屏幕采集窗口从隐藏状态恢复。"
  }, {
    heading: "event",
    content: "LOCAL\\_VIDEO\\_EVENT\\_TYPE\\_SCREEN\\_CAPTURE\\_STOPPED\\_BY\\_USER：屏幕采集被用户停止。"
  }, {
    heading: "event",
    content: "LOCAL\\_VIDEO\\_EVENT\\_TYPE\\_SCREEN\\_CAPTURE\\_SYSTEM\\_INTERNAL\\_ERROR：屏幕采集过程中发生系统内部错误。"
  }, {
    heading: "所属接口类-14",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onlocalvideostatechanged",
    content: "本地视频流状态发生变化回调。"
  }, {
    heading: "onlocalvideostatechanged",
    content: "你可以通过该回调及时了解本地视频流的状态变化，并根据变化原因采取相应措施，以更好地管理和排查视频流相关问题。"
  }, {
    heading: "onlocalvideostatechanged",
    content: "请注意，视频帧重复检测仅适用于分辨率大于 200 × 200、帧率大于等于 10 fps 且码率小于 20 Kbps 的视频帧。 通常情况下，如果视频采集出现错误，可以通过该回调中的 `reason` 参数排查问题。但在某些设备上，当采集出现问题（如卡顿）时，Android 系统不会抛出任何错误回调，因此 SDK 无法上报本地视频状态变化的原因。此时，你可以通过以下方式判断是否未采集到视频帧：该回调上报 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` 或 `LOCAL_VIDEO_STREAM_STATE_ENCODING`，且 onLocalVideoStats 回调中的 `captureFrameRate` 为 0。"
  }, {
    heading: "触发时机-3",
    content: "该回调在以下情况下被触发，状态为 `LOCAL_VIDEO_STREAM_STATE_FAILED`， `reason` 为 `LOCAL_VIDEO_STREAM_REASON_CAPTURE_FAILURE`："
  }, {
    heading: "触发时机-3",
    content: "Android 9 及以上版本中，应用在后台运行一段时间后，系统会自动收回摄像头权限。"
  }, {
    heading: "触发时机-3",
    content: "Android 6 及以上版本中，摄像头被第三方应用占用一段时间后释放，SDK 会触发该回调并上报 onLocalVideoStateChanged 回调， state 为 LOCAL\\_VIDEO\\_STREAM\\_STATE\\_CAPTURING， reason 为 LOCAL\\_VIDEO\\_STREAM\\_REASON\\_OK。"
  }, {
    heading: "触发时机-3",
    content: "摄像头正常启动，但连续四秒未输出视频帧。"
  }, {
    heading: "触发时机-3",
    content: "当摄像头输出采集的视频帧时，若 SDK 检测到连续 15 帧重复帧，会触发该回调， state 为 LOCAL\\_VIDEO\\_STREAM\\_STATE\\_CAPTURING， reason 为 LOCAL\\_VIDEO\\_STREAM\\_REASON\\_CAPTURE\\_FAILURE。"
  }, {
    heading: "source-3",
    content: "视频源的类型。详见 VideoSourceType。"
  }, {
    heading: "state",
    content: "LOCAL\\_VIDEO\\_STREAM\\_STATE\\_STOPPED (0)：本地视频处于初始状态。"
  }, {
    heading: "state",
    content: "LOCAL\\_VIDEO\\_STREAM\\_STATE\\_CAPTURING (1)：本地视频采集设备启动成功。"
  }, {
    heading: "state",
    content: "LOCAL\\_VIDEO\\_STREAM\\_STATE\\_ENCODING (2)：首帧视频编码成功。"
  }, {
    heading: "state",
    content: "LOCAL\\_VIDEO\\_STREAM\\_STATE\\_FAILED (3)：本地视频启动失败。"
  }, {
    heading: "reason",
    content: "LOCAL\\_VIDEO\\_STREAM\\_REASON\\_OK (0)：本地视频状态正常。"
  }, {
    heading: "reason",
    content: "LOCAL\\_VIDEO\\_STREAM\\_REASON\\_FAILURE (1)：本地视频失败，未指定原因。"
  }, {
    heading: "reason",
    content: "LOCAL\\_VIDEO\\_STREAM\\_REASON\\_DEVICE\\_BUSY (3)：本地视频采集设备被占用。提示用户检查摄像头是否被其他应用占用，或尝试重新加入频道。"
  }, {
    heading: "reason",
    content: "LOCAL\\_VIDEO\\_STREAM\\_REASON\\_CAPTURE\\_FAILURE (4)：本地视频采集失败。提示用户检查视频采集设备是否正常工作，摄像头是否被其他应用占用，或尝试重新加入频道。"
  }, {
    heading: "reason",
    content: "LOCAL\\_VIDEO\\_STREAM\\_REASON\\_CODEC\\_NOT\\_SUPPORT (5)：本地视频编码失败。"
  }, {
    heading: "reason",
    content: "LOCAL\\_VIDEO\\_STREAM\\_REASON\\_DEVICE\\_NOT\\_FOUND (8)：未找到本地视频采集设备。提示用户检查摄像头是否正确连接或正常工作，然后重新加入频道。"
  }, {
    heading: "reason",
    content: "LOCAL\\_VIDEO\\_STREAM\\_REASON\\_DEVICE\\_INTERRUPT (14)：视频采集中断。可能原因包括："
  }, {
    heading: "reason",
    content: "摄像头被其他应用占用。提示用户检查摄像头是否被其他应用占用。"
  }, {
    heading: "reason",
    content: "设备被锁屏，或当前应用被切换到后台。你可以使用前台服务通知操作系统，确保应用切换到后台后仍能采集视频。"
  }, {
    heading: "reason",
    content: "LOCAL\\_VIDEO\\_STREAM\\_REASON\\_DEVICE\\_FATAL\\_ERROR (15)：视频采集设备出现错误。提示用户关闭并重启摄像头以恢复功能。如果该操作无法解决问题，请检查摄像头是否存在硬件故障。"
  }, {
    heading: "reason",
    content: "LOCAL\\_VIDEO\\_STREAM\\_REASON\\_SCREEN\\_CAPTURE\\_FAILURE (21)：当前采集的窗口无数据。"
  }, {
    heading: "所属接口类-15",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onlocalvideostats",
    content: "本地视频流统计信息回调。"
  }, {
    heading: "onlocalvideostats",
    content: "该回调每两秒触发一次。"
  }, {
    heading: "触发时机-4",
    content: "该回调每两秒触发一次。"
  }, {
    heading: "source-4",
    content: "视频源类型，详见 VideoSourceType。"
  }, {
    heading: "stats",
    content: "本地视频流的统计信息，详见 LocalVideoStats。"
  }, {
    heading: "所属接口类-16",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onremotevideostatechanged",
    content: "远端视频状态发生改变回调。"
  }, {
    heading: "onremotevideostatechanged",
    content: "当频道中的用户数（在通信频道场景中）或主播数（在直播频道中）超过 32 时，该回调可能无法正常工作。"
  }, {
    heading: "触发时机-5",
    content: "该回调在远端视频状态发生变化时被触发。"
  }, {
    heading: "uid-2",
    content: "发生视频状态变化的远端用户 ID。"
  }, {
    heading: "state-1",
    content: "远端视频的状态："
  }, {
    heading: "state-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_STOPPED (0)：远端视频处于初始状态。该状态在 REMOTE\\_VIDEO\\_STATE\\_REASON\\_LOCAL\\_MUTED (3)、 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_MUTED (5) 或 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_OFFLINE (7) 的情况下报告。"
  }, {
    heading: "state-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_STARTING (1)：已接收到第一帧远端视频包。"
  }, {
    heading: "state-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_DECODING (2)：远端视频流解码并正常播放。该状态在 REMOTE\\_VIDEO\\_STATE\\_REASON\\_NETWORK\\_RECOVERY (2)、 REMOTE\\_VIDEO\\_STATE\\_REASON\\_LOCAL\\_UNMUTED (4)、 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_UNMUTED (6) 或 REMOTE\\_VIDEO\\_STATE\\_REASON\\_AUDIO\\_FALLBACK\\_RECOVERY (9) 的情况下报告。"
  }, {
    heading: "state-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_FROZEN (3)：远端视频卡顿。该状态在 REMOTE\\_VIDEO\\_STATE\\_REASON\\_NETWORK\\_CONGESTION (1) 或 REMOTE\\_VIDEO\\_STATE\\_REASON\\_AUDIO\\_FALLBACK (8) 的情况下报告。"
  }, {
    heading: "state-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_FAILED (4)：远端视频启动失败。该状态在 REMOTE\\_VIDEO\\_STATE\\_REASON\\_INTERNAL (0) 的情况下由 SDK 报告。"
  }, {
    heading: "reason-1",
    content: "远端视频状态变化的原因："
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_INTERNAL (0)：内部原因。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_NETWORK\\_CONGESTION (1)：网络拥塞。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_NETWORK\\_RECOVERY (2)：网络恢复。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_LOCAL\\_MUTED (3)：本地用户停止接收远端视频流或关闭视频模块。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_LOCAL\\_UNMUTED (4)：本地用户恢复接收远端视频流或开启视频模块。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_MUTED (5)：远端用户停止发送视频流或关闭视频模块。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_UNMUTED (6)：远端用户恢复发送视频流或开启视频模块。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_OFFLINE (7)：远端用户离开频道。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_AUDIO\\_FALLBACK (8)：由于网络条件差，远端媒体流降级为纯音频流。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_AUDIO\\_FALLBACK\\_RECOVERY (9)：网络条件改善后，远端媒体流从音频流恢复为视频流。"
  }, {
    heading: "reason-1",
    content: "REMOTE\\_VIDEO\\_STATE\\_REASON\\_CODEC\\_NOT\\_SUPPORT (13)：本地视频解码器不支持解码远端视频流。"
  }, {
    heading: "elapsed-4",
    content: "从本地用户调用 `joinChannel` 方法到 SDK 触发该回调的时间（毫秒）。"
  }, {
    heading: "所属接口类-17",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onremotevideostats",
    content: "报告每个远端用户发送的视频流的统计信息回调。"
  }, {
    heading: "onremotevideostats",
    content: "SDK 每两秒为每个远端用户触发一次该回调。如果频道中有多个用户或主播发送视频流，SDK 会相应地多次触发该回调。"
  }, {
    heading: "触发时机-6",
    content: "该回调在 SDK 每两秒收集到远端用户的视频流统计信息时被触发。"
  }, {
    heading: "stats-1",
    content: "远端视频流的统计信息。详见 RemoteVideoStats。"
  }, {
    heading: "所属接口类-18",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onremotevideotransportstats",
    content: "远端视频流传输层统计信息回调。"
  }, {
    heading: "废弃-1",
    content: "该方法已废弃，请改用 onRemoteVideoStats。"
  }, {
    heading: "废弃-1",
    content: "该回调上报传输层的统计信息，例如丢包率和网络时延。该回调在通话过程中，当本地用户接收到远端用户或主播发送的视频包时，每 2 秒触发一次。"
  }, {
    heading: "触发时机-7",
    content: "该回调在通话过程中，当本地用户接收到远端用户或主播发送的视频包时，每 2 秒触发一次。"
  }, {
    heading: "uid-3",
    content: "远端用户 ID。"
  }, {
    heading: "delay",
    content: "从发送端到接收端的网络时延（毫秒）。"
  }, {
    heading: "lost",
    content: "从远端用户发送的视频包的丢包率（%）。"
  }, {
    heading: "rxkbitrate",
    content: "接收视频的码率（Kbps）。"
  }, {
    heading: "所属接口类-19",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onuserenablelocalvideo",
    content: "指定远端用户启用或关闭本地视频采集功能时触发的回调。"
  }, {
    heading: "废弃-2",
    content: "该回调已废弃，建议使用 onRemoteVideoStateChanged 回调替代，并结合以下参数使用："
  }, {
    heading: "废弃-2",
    content: "REMOTE\\_VIDEO\\_STATE\\_STOPPED(0) 和 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_MUTED(5)。"
  }, {
    heading: "废弃-2",
    content: "REMOTE\\_VIDEO\\_STATE\\_DECODING(2) 和 REMOTE\\_VIDEO\\_STATE\\_REASON\\_REMOTE\\_UNMUTED(6)。"
  }, {
    heading: "触发时机-8",
    content: "该回调在远端用户调用 enableLocalVideo 启用或关闭本地视频采集功能时被触发。"
  }, {
    heading: "uid-4",
    content: "远端用户 ID。"
  }, {
    heading: "enabled-1",
    content: "指定远端用户是否启用本地视频采集功能："
  }, {
    heading: "enabled-1",
    content: "true：启用视频模块，频道内其他用户可以看到该远端用户的视频。"
  }, {
    heading: "enabled-1",
    content: "false：关闭视频模块，频道内其他用户无法接收该远端用户的视频流，但该远端用户仍可接收其他用户的视频流。"
  }, {
    heading: "所属接口类-20",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onuserenablevideo",
    content: "远端用户启用或关闭视频模块的回调。"
  }, {
    heading: "onuserenablevideo",
    content: "该回调在远端用户调用 enableVideo 或 disableVideo 方法时触发。关闭视频模块后，用户只能进行语音通话，无法发送或接收任何视频。"
  }, {
    heading: "触发时机-9",
    content: "该回调在远端用户启用或关闭视频模块时被触发。"
  }, {
    heading: "uid-5",
    content: "远端用户的用户 ID。"
  }, {
    heading: "enabled-2",
    content: "是否启用视频模块："
  }, {
    heading: "enabled-2",
    content: "true：启用视频模块。"
  }, {
    heading: "enabled-2",
    content: "false：关闭视频模块。"
  }, {
    heading: "所属接口类-21",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onusermutevideo",
    content: "远端视频状态发生改变回调。"
  }, {
    heading: "onusermutevideo",
    content: "当远端用户调用 muteLocalVideoStream 时，SDK 会触发该回调，向本地用户报告远端用户发布的视频流状态。"
  }, {
    heading: "onusermutevideo",
    content: "当频道中通信场景下的用户数或直播场景下的主播数超过 32 时，该回调可能不准确。"
  }, {
    heading: "触发时机-10",
    content: "该回调在远端用户调用 muteLocalVideoStream 停止或恢复发布视频流时被触发。"
  }, {
    heading: "uid-6",
    content: "远端用户的用户 ID。"
  }, {
    heading: "muted",
    content: "远端用户是否停止发布视频流："
  }, {
    heading: "muted",
    content: "true：远端用户停止发布视频流。"
  }, {
    heading: "muted",
    content: "false：远端用户恢复发布视频流。"
  }, {
    heading: "所属接口类-22",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onvideopublishstatechanged",
    content: "视频发布状态发生变化回调。"
  }, {
    heading: "source-5",
    content: "视频源的类型，详见 VideoSourceType。"
  }, {
    heading: "channel",
    content: "频道名。"
  }, {
    heading: "oldstate",
    content: "之前的视频发布状态："
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
    content: "当前的视频发布状态："
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
    content: "从上一个状态到当前状态所经历的时间（毫秒）。"
  }, {
    heading: "所属接口类-23",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onvideosizechanged",
    content: "指定用户的视频尺寸或旋转信息发生变化回调。"
  }, {
    heading: "触发时机-11",
    content: "该回调在指定用户的视频尺寸或旋转角度发生变化时被触发。"
  }, {
    heading: "source-6",
    content: "视频源类型，详见 VideoSourceType。"
  }, {
    heading: "uid-7",
    content: "发生视频尺寸或旋转变化的用户 ID。对于本地用户， `uid` 为 0，表示本地用户的视频预览。"
  }, {
    heading: "width-3",
    content: "视频流的宽度（单位为像素）。"
  }, {
    heading: "height-3",
    content: "视频流的高度（单位为像素）。"
  }, {
    heading: "rotation",
    content: "视频的旋转角度，取值范围为 \\[0, 360)。"
  }, {
    heading: "所属接口类-24",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onvideostopped",
    content: "视频停止播放时触发的回调。"
  }, {
    heading: "废弃-3",
    content: "该方法已废弃，请改用 onLocalVideoStateChanged。"
  }, {
    heading: "废弃-3",
    content: "你可以在该回调中更改视图的配置，例如在视图中显示其他图片。"
  }, {
    heading: "触发时机-12",
    content: "该回调在视频停止播放时被触发。"
  }, {
    heading: "所属接口类-25",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "disablevideo",
    content: "disableVideo"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "enablelocalvideo",
    content: "enableLocalVideo"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数",
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
    id: "enablevideo",
    content: "enableVideo"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "相关回调-2",
    content: "相关回调"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "setvideoencoderconfiguration",
    content: "setVideoEncoderConfiguration"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "setvideoencoderconfigurationex",
    content: "setVideoEncoderConfigurationEx"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "config-1",
    content: "`config`"
  }, {
    id: "connection",
    content: "`connection`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "setvideoscenario",
    content: "setVideoScenario"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "scenariotype",
    content: "`scenarioType`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "startpreview-12",
    content: "startPreview [1/2]"
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
    id: "startpreview-22",
    content: "startPreview [2/2]"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "stoppreview-12",
    content: "stopPreview [1/2]"
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
    id: "stoppreview-22",
    content: "stopPreview [2/2]"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "sourcetype-1",
    content: "`sourceType`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "onfirstlocalvideoframe",
    content: "onFirstLocalVideoFrame"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "source",
    content: "`source`"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "elapsed",
    content: "`elapsed`"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "onfirstlocalvideoframepublished",
    content: "onFirstLocalVideoFramePublished"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "source-1",
    content: "`source`"
  }, {
    id: "elapsed-1",
    content: "`elapsed`"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "onfirstremotevideodecoded",
    content: "onFirstRemoteVideoDecoded"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "width-1",
    content: "`width`"
  }, {
    id: "height-1",
    content: "`height`"
  }, {
    id: "elapsed-2",
    content: "`elapsed`"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "onfirstremotevideoframe",
    content: "onFirstRemoteVideoFrame"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "width-2",
    content: "`width`"
  }, {
    id: "height-2",
    content: "`height`"
  }, {
    id: "elapsed-3",
    content: "`elapsed`"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "onlocalvideoevent",
    content: "onLocalVideoEvent"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "source-2",
    content: "`source`"
  }, {
    id: "event",
    content: "`event`"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "onlocalvideostatechanged",
    content: "onLocalVideoStateChanged"
  }, {
    id: "触发时机-3",
    content: "触发时机"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "source-3",
    content: "`source`"
  }, {
    id: "state",
    content: "`state`"
  }, {
    id: "reason",
    content: "`reason`"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "onlocalvideostats",
    content: "onLocalVideoStats"
  }, {
    id: "触发时机-4",
    content: "触发时机"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "source-4",
    content: "`source`"
  }, {
    id: "stats",
    content: "`stats`"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "onremotevideostatechanged",
    content: "onRemoteVideoStateChanged"
  }, {
    id: "触发时机-5",
    content: "触发时机"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "uid-2",
    content: "`uid`"
  }, {
    id: "state-1",
    content: "`state`"
  }, {
    id: "reason-1",
    content: "`reason`"
  }, {
    id: "elapsed-4",
    content: "`elapsed`"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "onremotevideostats",
    content: "onRemoteVideoStats"
  }, {
    id: "触发时机-6",
    content: "触发时机"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "stats-1",
    content: "`stats`"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "onremotevideotransportstats",
    content: "onRemoteVideoTransportStats"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "触发时机-7",
    content: "触发时机"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "uid-3",
    content: "`uid`"
  }, {
    id: "delay",
    content: "`delay`"
  }, {
    id: "lost",
    content: "`lost`"
  }, {
    id: "rxkbitrate",
    content: "`rxKBitRate`"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "onuserenablelocalvideo",
    content: "onUserEnableLocalVideo"
  }, {
    id: "废弃-2",
    content: "`废弃`"
  }, {
    id: "触发时机-8",
    content: "触发时机"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "uid-4",
    content: "`uid`"
  }, {
    id: "enabled-1",
    content: "`enabled`"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "onuserenablevideo",
    content: "onUserEnableVideo"
  }, {
    id: "触发时机-9",
    content: "触发时机"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "uid-5",
    content: "`uid`"
  }, {
    id: "enabled-2",
    content: "`enabled`"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }, {
    id: "onusermutevideo",
    content: "onUserMuteVideo"
  }, {
    id: "触发时机-10",
    content: "触发时机"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "uid-6",
    content: "`uid`"
  }, {
    id: "muted",
    content: "`muted`"
  }, {
    id: "所属接口类-22",
    content: "所属接口类"
  }, {
    id: "onvideopublishstatechanged",
    content: "onVideoPublishStateChanged"
  }, {
    id: "参数-19",
    content: "参数"
  }, {
    id: "source-5",
    content: "`source`"
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
    id: "所属接口类-23",
    content: "所属接口类"
  }, {
    id: "onvideosizechanged",
    content: "onVideoSizeChanged"
  }, {
    id: "触发时机-11",
    content: "触发时机"
  }, {
    id: "参数-20",
    content: "参数"
  }, {
    id: "source-6",
    content: "`source`"
  }, {
    id: "uid-7",
    content: "`uid`"
  }, {
    id: "width-3",
    content: "`width`"
  }, {
    id: "height-3",
    content: "`height`"
  }, {
    id: "rotation",
    content: "`rotation`"
  }, {
    id: "所属接口类-24",
    content: "所属接口类"
  }, {
    id: "onvideostopped",
    content: "onVideoStopped"
  }, {
    id: "废弃-3",
    content: "`废弃`"
  }, {
    id: "触发时机-12",
    content: "触发时机"
  }, {
    id: "所属接口类-25",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#disablevideo",
  title: _jsx(_Fragment, {
    children: "disableVideo"
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
  url: "#enablelocalvideo",
  title: _jsx(_Fragment, {
    children: "enableLocalVideo"
  })
}, {
  depth: 3,
  url: "#相关回调-1",
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
  url: "#enablevideo",
  title: _jsx(_Fragment, {
    children: "enableVideo"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#setvideoencoderconfiguration",
  title: _jsx(_Fragment, {
    children: "setVideoEncoderConfiguration"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
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
  url: "#setvideoencoderconfigurationex",
  title: _jsx(_Fragment, {
    children: "setVideoEncoderConfigurationEx"
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
  url: "#参数-2",
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
  url: "#connection",
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
  url: "#setvideoscenario",
  title: _jsx(_Fragment, {
    children: "setVideoScenario"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#scenariotype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "scenarioType"
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
  url: "#startpreview-12",
  title: _jsx(_Fragment, {
    children: "startPreview [1/2]"
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
  url: "#startpreview-22",
  title: _jsx(_Fragment, {
    children: "startPreview [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-5",
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
  url: "#sourcetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#stoppreview-12",
  title: _jsx(_Fragment, {
    children: "stopPreview [1/2]"
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
  url: "#stoppreview-22",
  title: _jsx(_Fragment, {
    children: "stopPreview [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-7",
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
  url: "#sourcetype-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#onfirstlocalvideoframe",
  title: _jsx(_Fragment, {
    children: "onFirstLocalVideoFrame"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#source",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "source"
    })
  })
}, {
  depth: 4,
  url: "#width",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "width"
    })
  })
}, {
  depth: 4,
  url: "#height",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "height"
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
  url: "#所属接口类-10",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onfirstlocalvideoframepublished",
  title: _jsx(_Fragment, {
    children: "onFirstLocalVideoFramePublished"
  })
}, {
  depth: 3,
  url: "#触发时机",
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
  url: "#source-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "source"
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
  url: "#所属接口类-11",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onfirstremotevideodecoded",
  title: _jsx(_Fragment, {
    children: "onFirstRemoteVideoDecoded"
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
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-8",
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
  url: "#width-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "width"
    })
  })
}, {
  depth: 4,
  url: "#height-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "height"
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
  url: "#所属接口类-12",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onfirstremotevideoframe",
  title: _jsx(_Fragment, {
    children: "onFirstRemoteVideoFrame"
  })
}, {
  depth: 3,
  url: "#触发时机-2",
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
  url: "#uid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
  })
}, {
  depth: 4,
  url: "#width-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "width"
    })
  })
}, {
  depth: 4,
  url: "#height-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "height"
    })
  })
}, {
  depth: 4,
  url: "#elapsed-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapsed"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-13",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlocalvideoevent",
  title: _jsx(_Fragment, {
    children: "onLocalVideoEvent"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#source-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "source"
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
  url: "#所属接口类-14",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlocalvideostatechanged",
  title: _jsx(_Fragment, {
    children: "onLocalVideoStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-3",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-11",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#source-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "source"
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
  url: "#所属接口类-15",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onlocalvideostats",
  title: _jsx(_Fragment, {
    children: "onLocalVideoStats"
  })
}, {
  depth: 3,
  url: "#触发时机-4",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-12",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#source-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "source"
    })
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
  url: "#所属接口类-16",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onremotevideostatechanged",
  title: _jsx(_Fragment, {
    children: "onRemoteVideoStateChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-5",
  title: _jsx(_Fragment, {
    children: "触发时机"
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
  url: "#state-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "state"
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
  depth: 4,
  url: "#elapsed-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "elapsed"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-17",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onremotevideostats",
  title: _jsx(_Fragment, {
    children: "onRemoteVideoStats"
  })
}, {
  depth: 3,
  url: "#触发时机-6",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-14",
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
  url: "#所属接口类-18",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onremotevideotransportstats",
  title: _jsx(_Fragment, {
    children: "onRemoteVideoTransportStats"
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
  url: "#触发时机-7",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-15",
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
  url: "#delay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "delay"
    })
  })
}, {
  depth: 4,
  url: "#lost",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lost"
    })
  })
}, {
  depth: 4,
  url: "#rxkbitrate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rxKBitRate"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-19",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onuserenablelocalvideo",
  title: _jsx(_Fragment, {
    children: "onUserEnableLocalVideo"
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
  url: "#触发时机-8",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-16",
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
  url: "#enabled-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-20",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onuserenablevideo",
  title: _jsx(_Fragment, {
    children: "onUserEnableVideo"
  })
}, {
  depth: 3,
  url: "#触发时机-9",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-17",
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
  url: "#enabled-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-21",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onusermutevideo",
  title: _jsx(_Fragment, {
    children: "onUserMuteVideo"
  })
}, {
  depth: 3,
  url: "#触发时机-10",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-18",
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
  url: "#muted",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "muted"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-22",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onvideopublishstatechanged",
  title: _jsx(_Fragment, {
    children: "onVideoPublishStateChanged"
  })
}, {
  depth: 3,
  url: "#参数-19",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#source-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "source"
    })
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
  url: "#所属接口类-23",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onvideosizechanged",
  title: _jsx(_Fragment, {
    children: "onVideoSizeChanged"
  })
}, {
  depth: 3,
  url: "#触发时机-11",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-20",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#source-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "source"
    })
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
  url: "#width-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "width"
    })
  })
}, {
  depth: 4,
  url: "#height-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "height"
    })
  })
}, {
  depth: 4,
  url: "#rotation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rotation"
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
  url: "#onvideostopped",
  title: _jsx(_Fragment, {
    children: "onVideoStopped"
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
  url: "#触发时机-12",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#所属接口类-25",
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
      id: "toc_video_basic"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disablevideo"
    }), `
`, _jsx(_components.h2, {
      id: "disablevideo",
      children: "disableVideo"
    }), `
`, _jsx(_components.p, {
      children: "关闭视频模块。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disablevideo__prototype"
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
              children: " disableVideo"
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
      id: "api_irtcengine_disablevideo__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["注： ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo",
        children: "disableVideo"
      }), " 会影响内部引擎，且可在离开频道后调用。调用该方法会重置整个引擎，可能导致响应时间变慢。你可以根据实际需求，使用以下方法分别控制视频模块的具体功能："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "enableLocalVideo：是否启用摄像头以创建本地视频流。"
      }), `
`, _jsx(_components.li, {
        children: "muteLocalVideoStream：是否发布本地视频流。"
      }), `
`, _jsx(_components.li, {
        children: "muteRemoteVideoStream：是否订阅并播放远端视频流。"
      }), `
`, _jsx(_components.li, {
        children: "muteAllRemoteVideoStreams：是否订阅并播放所有远端视频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disablevideo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可在加入频道前或加入频道后调用。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果在加入频道前调用，则启用纯语音模式。"
      }), `
`, _jsx(_components.li, {
        children: "如果在加入频道后调用，则从视频模式切换为纯语音模式。之后调用 enableVideo 可再次切换为视频模式。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disablevideo__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，远端客户端会触发 ", _jsx(_components.code, {
        children: "onUserEnableVideo(false)"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_disablevideo__return_values"
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
      id: "api_irtcengine_enablelocalvideo"
    }), `
`, _jsx(_components.h2, {
      id: "enablelocalvideo",
      children: "enableLocalVideo"
    }), `
`, _jsx(_components.p, {
      children: "启用或禁用本地视频采集。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalvideo__prototype"
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
              children: " enableLocalVideo"
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
      id: "api_irtcengine_enablelocalvideo__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法用于禁用或重新启用本地视频采集，不影响接收远端视频流。如果在频道内调用 ", _jsx(_components.code, {
        children: "enableLocalVideo(false)"
      }), " 禁用本地视频采集，则会同时停止在频道内发布视频流。若要重新开始视频采集，可调用 ", _jsx(_components.code, {
        children: "enableLocalVideo(true)"
      }), "，然后调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#api_irtcengine_updatechannelmediaoptions",
        children: "updateChannelMediaOptions"
      }), " 设置 ", _jsx(_components.code, {
        children: "options"
      }), " 参数以在频道中发布本地采集的视频流。调用该方法成功禁用或启用本地视频采集后，远端会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged",
        children: "onRemoteVideoStateChanged"
      }), " 回调。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用该方法。但如果在加入频道前调用，设置将在加入频道后生效。"
      }), `
`, _jsx(_components.li, {
        children: "该方法会启用内部引擎，并在离开频道后依然有效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalvideo__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功禁用或重新启用本地视频采集器后，SDK 会在远端客户端触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged",
        children: "onRemoteVideoStateChanged"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalvideo__parameters"
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
      children: "是否启用本地视频采集。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）启用本地视频采集。"
      }), `
`, _jsx(_components.li, {
        children: "false：禁用本地视频采集。禁用后，远端用户无法接收到本地用户的视频流，但本地用户仍可接收远端用户的视频流。设置为 false 时，无需本地摄像头。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablelocalvideo__return_values"
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
      id: "api_irtcengine_enablevideo"
    }), `
`, _jsx(_components.h2, {
      id: "enablevideo",
      children: "enableVideo"
    }), `
`, _jsx(_components.p, {
      children: "启用视频模块。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideo__prototype"
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
              children: " enableVideo"
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
      id: "api_irtcengine_enablevideo__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["默认情况下，视频模块处于禁用状态。调用该方法可启用视频模块。如果之后需要禁用视频模块，需要调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo",
        children: "disableVideo"
      }), " 方法。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 该方法会启用内部引擎，离开频道后依然有效。调用该方法会重置整个引擎，可能导致响应时间变慢。你可以根据实际需求，使用以下方法独立控制视频模块的特定功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "enableLocalVideo：是否启用摄像头以创建本地视频流。"
      }), `
`, _jsx(_components.li, {
        children: "muteLocalVideoStream：是否发布本地视频流。"
      }), `
`, _jsx(_components.li, {
        children: "muteRemoteVideoStream：是否订阅并播放远端视频流。"
      }), `
`, _jsx(_components.li, {
        children: "muteAllRemoteVideoStreams：是否订阅并播放所有远端视频流。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法会重置 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo",
        children: "enableLocalVideo"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteremotevideostream",
        children: "muteRemoteVideoStream"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_muteallremotevideostreams",
        children: "muteAllRemoteVideoStreams"
      }), " 的设置，请谨慎操作。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果在加入频道前调用，则启用视频模块。"
      }), `
`, _jsx(_components.li, {
        children: "如果在纯语音通话中调用，则音频通话会自动切换为视频通话。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideo__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-2",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法会在远端客户端触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged",
        children: "onRemoteVideoStateChanged"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideo__return_values"
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
      id: "api_irtcengine_setvideoencoderconfiguration"
    }), `
`, _jsx(_components.h2, {
      id: "setvideoencoderconfiguration",
      children: "setVideoEncoderConfiguration"
    }), `
`, _jsx(_components.p, {
      children: "设置本地视频的编码器配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideoencoderconfiguration__prototype"
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
              children: " setVideoEncoderConfiguration"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VideoEncoderConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideoencoderconfiguration__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法和 getMirrorApplied 方法都支持设置镜像效果。声网建议只使用其中一种方法进行设置，同时使用两种方法会导致镜像效果叠加，镜像设置失效。"
      }), `
`, _jsx(_components.li, {
        children: "此方法中指定的 config 是在理想网络条件下的最大值。如果由于网络条件不稳定，视频引擎无法使用指定的 config 渲染视频，则会依次尝试列表中较低的参数，直到找到可用的配置。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideoencoderconfiguration__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以在加入频道前或加入频道后调用此方法。如果用户在加入频道后不需要重新设置视频编码属性，声网建议在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 之前调用此方法，以减少首帧视频渲染时间。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideoencoderconfiguration__parameters"
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
      children: ["视频编码配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videoencoderconfiguration",
        children: "VideoEncoderConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideoencoderconfiguration__return_values"
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
      id: "api_irtcengineex_setvideoencoderconfigurationex"
    }), `
`, _jsx(_components.h2, {
      id: "setvideoencoderconfigurationex",
      children: "setVideoEncoderConfigurationEx"
    }), `
`, _jsx(_components.p, {
      children: "设置本地视频的编码器配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setvideoencoderconfigurationex__prototype"
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
              children: " setVideoEncoderConfigurationEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VideoEncoderConfiguration config, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setvideoencoderconfigurationex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengineex_setvideoencoderconfigurationex",
        children: "setVideoEncoderConfigurationEx"
      }), " 用于设置本地视频的编码器配置。每个配置文件对应一组视频参数，包括分辨率、帧率和码率。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "config"
          }), " 参数表示在理想网络条件下的最大值。如果由于网络条件不稳定，视频引擎无法使用指定的 ", _jsx(_components.code, {
            children: "config"
          }), " 渲染视频，则会依次尝试列表中更低的参数，直到找到可用的配置。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setvideoencoderconfigurationex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setvideoencoderconfigurationex__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以在加入频道前或后调用此方法。如果你在加入频道后不需要重新设置视频编码属性，声网建议你在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 之前调用此方法，以减少首帧视频渲染时间。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setvideoencoderconfigurationex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-1",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频编码配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videoencoderconfiguration",
        children: "VideoEncoderConfiguration"
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
      id: "api_irtcengineex_setvideoencoderconfigurationex__return_values"
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
      id: "api_irtcengine_setvideoscenario"
    }), `
`, _jsx(_components.h2, {
      id: "setvideoscenario",
      children: "setVideoScenario"
    }), `
`, _jsx(_components.p, {
      children: "设置视频应用场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideoscenario__prototype"
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
              children: " setVideoScenario"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoScenario scenarioType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideoscenario__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "成功调用该方法后，SDK 会根据指定的视频应用场景自动启用最佳实践策略，并调整关键性能指标，以优化视频体验。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请在加入频道前调用该方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideoscenario__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "scenariotype",
      children: _jsx(_components.code, {
        children: "scenarioType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频应用场景类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videoapplicationscenariotype",
        children: "VideoScenario"
      }), "。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["APPLICATION_SCENARIO_MEETING （1）：适用于会议场景，SDK 会自动启用以下策略：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "当低画质视频流需要较高码率时，SDK 会自动启用多种应对网络拥塞的技术，以增强低画质视频流的性能，确保订阅端的流畅接收。"
          }), `
`, _jsxs(_components.li, {
            children: ["SDK 实时监控高画质视频流的订阅人数，并根据订阅人数动态调整其配置：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "若无人订阅高画质视频流，SDK 会自动降低其码率和帧率以节省上行带宽。"
              }), `
`, _jsxs(_components.li, {
                children: ["若有人订阅高画质视频流，SDK 会将其重置为最近一次调用 setVideoEncoderConfiguration 设置的配置；若用户未设置过配置，则使用以下默认值：", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "分辨率：960 × 540。"
                  }), `
`, _jsx(_components.li, {
                    children: "帧率：15 fps。"
                  }), `
`, _jsx(_components.li, {
                    children: "码率：1000 Kbps。"
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["SDK 实时监控低画质视频流的订阅人数，并根据订阅人数动态启用或禁用该流：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "若用户调用了 setDualStreamMode 并设置为永不发送低画质视频流（DISABLE_SIMULCAST_STREAM ），则会议场景下低画质流的动态调整将不生效。"
              }), `
`, _jsx(_components.li, {
                children: "若无人订阅低画质视频流，SDK 会自动禁用该流以节省上行带宽。"
              }), `
`, _jsxs(_components.li, {
                children: ["若有人订阅低画质视频流，SDK 会启用该流并重置为最近一次调用 setDualStreamMode 设置的配置；若用户未设置过配置，则使用以下默认值：", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "分辨率：480 × 272。"
                  }), `
`, _jsx(_components.li, {
                    children: "帧率：15 fps。"
                  }), `
`, _jsx(_components.li, {
                    children: "码率：500 Kbps。"
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
`]
      }), `
`, _jsxs(_components.li, {
        children: ["APPLICATION_SCENARIO_1V1 （2）：适用于一对一直播场景。为满足低延迟和高画质的需求，SDK 会优化策略，提升视频质量、首帧渲染速度、中低端设备的延迟表现，以及弱网环境下的流畅度。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "注意：该枚举值仅适用于主播对主播的场景。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["APPLICATION_SCENARIO_LIVESHOW （3）：适用于秀场场景。在该场景中，快速的视频渲染和高画质至关重要。SDK 会进行多项性能优化，包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "自动启用音视频帧加速渲染以最小化首帧延迟（无需调用 enableInstantMediaRendering ）。"
          }), `
`, _jsx(_components.li, {
            children: "启用 B 帧编码以提升图像质量和带宽效率。"
          }), `
`, _jsx(_components.li, {
            children: "即使在网络较差或低端设备上，也能提供增强的视频质量和流畅的播放体验。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideoscenario__return_values"
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
            children: "-1：发生通用错误（无具体原因）。"
          }), `
`, _jsx(_components.li, {
            children: "-4：不支持视频应用场景。可能原因包括使用了语音 SDK 而非视频 SDK。"
          }), `
`, _jsx(_components.li, {
            children: "-7： RtcEngine 对象尚未初始化。请在调用该方法前先初始化 RtcEngine 对象。"
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
      id: "api_irtcengine_startpreview"
    }), `
`, _jsx(_components.h2, {
      id: "startpreview-12",
      children: "startPreview [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "启用本地视频预览。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startpreview__prototype"
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
              children: " startPreview"
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
      id: "api_irtcengine_startpreview__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地预览默认启用镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "离开频道后，本地预览仍保持开启状态。你需要调用 stopPreview 来关闭本地预览。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startpreview__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo",
        children: "setupLocalVideo"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startpreview__return_values"
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
      id: "api_irtcengine_startpreview2"
    }), `
`, _jsx(_components.h2, {
      id: "startpreview-22",
      children: "startPreview [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "启用本地视频预览，并指定用于预览的视频源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startpreview2__prototype"
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
              children: " startPreview"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startpreview2__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地预览默认启用镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "离开频道后，本地预览仍保持开启状态。你需要调用 stopPreview 来关闭本地预览。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startpreview2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo",
        children: "setupLocalVideo"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startpreview2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startpreview2__return_values"
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
      id: "api_irtcengine_stoppreview"
    }), `
`, _jsx(_components.h2, {
      id: "stoppreview-12",
      children: "stopPreview [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "停止本地视频预览。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoppreview__prototype"
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
              children: " stopPreview"
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
      id: "api_irtcengine_stoppreview__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 开启预览后，如果需要停止本地视频预览，可以调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoppreview__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道前或离开频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoppreview__return_values"
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
      id: "api_irtcengine_stoppreview2"
    }), `
`, _jsx(_components.h2, {
      id: "stoppreview-22",
      children: "stopPreview [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "停止本地视频预览。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoppreview2__prototype"
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
              children: " stopPreview"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoppreview2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 后，如需停止本地视频预览，可以调用 ", _jsx(_components.code, {
        children: "stopPreview"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoppreview2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "在加入频道前或离开频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoppreview2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-1",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源的类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stoppreview2__return_values"
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
      id: "callback_irtcengineeventhandler_onfirstlocalvideoframe"
    }), `
`, _jsx(_components.h2, {
      id: "onfirstlocalvideoframe",
      children: "onFirstLocalVideoFrame"
    }), `
`, _jsx(_components.p, {
      children: "本地视频首帧在本地视图中显示时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalvideoframe__prototype"
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
              children: " onFirstLocalVideoFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType source, "
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
              children: " width, "
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
              children: " height, "
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
      id: "callback_irtcengineeventhandler_onfirstlocalvideoframe__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalvideoframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "source",
      children: _jsx(_components.code, {
        children: "source"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "首帧本地视频画面的宽度，单位为像素。"
    }), `
`, _jsx(_components.h4, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "首帧本地视频画面的高度，单位为像素。"
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
      }), " 加入频道到该回调触发的时间间隔，单位为毫秒。如果在加入频道前调用了 ", _jsx(_components.code, {
        children: "startPreview"
      }), "，该参数表示从调用 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 到该事件触发的时间间隔。"]
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
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalvideoframepublished"
    }), `
`, _jsx(_components.h2, {
      id: "onfirstlocalvideoframepublished",
      children: "onFirstLocalVideoFramePublished"
    }), `
`, _jsx(_components.p, {
      children: "本地视频首帧发布回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalvideoframepublished__prototype"
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
              children: " onFirstLocalVideoFramePublished"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType source, "
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
      id: "callback_irtcengineeventhandler_onfirstlocalvideoframepublished__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当满足以下任一条件时，SDK 会触发该回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地客户端启用视频模块并调用 joinChannel 成功加入频道。"
      }), `
`, _jsx(_components.li, {
        children: "本地客户端依次调用 muteLocalVideoStream(true) 和 muteLocalVideoStream(false)。"
      }), `
`, _jsx(_components.li, {
        children: "本地客户端依次调用 disableVideo 和 enableVideo。"
      }), `
`, _jsx(_components.li, {
        children: "本地客户端调用 pushExternalVideoFrameById 成功向 SDK 推送视频帧。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalvideoframepublished__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地视频首帧发布时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstlocalvideoframepublished__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "source-1",
      children: _jsx(_components.code, {
        children: "source"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
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
      }), " 成功加入频道到该回调触发的时间（毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-11",
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
      id: "callback_irtcengineeventhandler_onfirstremotevideodecoded"
    }), `
`, _jsx(_components.h2, {
      id: "onfirstremotevideodecoded",
      children: "onFirstRemoteVideoDecoded"
    }), `
`, _jsx(_components.p, {
      children: "接收到并解码首帧远端视频时的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremotevideodecoded__prototype"
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
              children: " onFirstRemoteVideoDecoded"
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
              children: " width, "
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
              children: " height, "
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
      id: "callback_irtcengineeventhandler_onfirstremotevideodecoded__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged",
        children: "onRemoteVideoStateChanged"
      }), " 回调中的 ", _jsx(_components.code, {
        children: "REMOTE_VIDEO_STATE_STARTING(1)"
      }), " 或 ", _jsx(_components.code, {
        children: "REMOTE_VIDEO_STATE_DECODING(2)"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "SDK 在以下任一情况下会触发该回调："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "远端用户加入频道并发送视频流。"
      }), `
`, _jsxs(_components.li, {
        children: ["远端用户停止发送视频流并在 15 秒后重新发送。导致此类中断的原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "远端用户离开频道。"
          }), `
`, _jsx(_components.li, {
            children: "远端用户掉线。"
          }), `
`, _jsx(_components.li, {
            children: "远端用户调用 disableVideo 关闭视频功能。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremotevideodecoded__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在接收到并解码首帧远端视频时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremotevideodecoded__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "width-1",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流的宽度（单位为像素）。"
    }), `
`, _jsx(_components.h4, {
      id: "height-1",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流的高度（单位为像素）。"
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
      }), " 加入频道到触发该回调的时间（单位为毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-12",
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
      id: "callback_irtcengineeventhandler_onfirstremotevideoframe"
    }), `
`, _jsx(_components.h2, {
      id: "onfirstremotevideoframe",
      children: "onFirstRemoteVideoFrame"
    }), `
`, _jsx(_components.p, {
      children: "远端视频首帧显示回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremotevideoframe__prototype"
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
              children: " onFirstRemoteVideoFrame"
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
              children: " width, "
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
              children: " height, "
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
      id: "callback_irtcengineeventhandler_onfirstremotevideoframe__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onfirstremotevideoframe",
            children: "onFirstRemoteVideoFrame"
          }), " 回调仅在视频帧由 SDK 渲染时触发；如果你使用自定义视频渲染，则不会触发该回调。你需要使用 SDK 外的方法自行实现该功能。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremotevideoframe__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在渲染器接收到远端视频的首帧时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onfirstremotevideoframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-1",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送视频流的远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "width-2",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流的宽度（像素）。"
    }), `
`, _jsx(_components.h4, {
      id: "height-2",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流的高度（像素）。"
    }), `
`, _jsx(_components.h4, {
      id: "elapsed-3",
      children: _jsx(_components.code, {
        children: "elapsed"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从本地用户调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 到 SDK 触发该回调的时间（毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-13",
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
      id: "callback_irtcengineeventhandler_onlocalvideoevent"
    }), `
`, _jsx(_components.h2, {
      id: "onlocalvideoevent",
      children: "onLocalVideoEvent"
    }), `
`, _jsx(_components.p, {
      children: "本地视频事件发生时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideoevent__prototype"
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
              children: " onLocalVideoEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType source, "
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
      id: "callback_irtcengineeventhandler_onlocalvideoevent__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以通过该回调获取本地视频事件发生的原因。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideoevent__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "source-2",
      children: _jsx(_components.code, {
        children: "source"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源的类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "event",
      children: _jsx(_components.code, {
        children: "event"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频事件类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_EVENT_TYPE_SCREEN_CAPTURE_WINDOW_HIDDEN：屏幕采集窗口被隐藏。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_EVENT_TYPE_SCREEN_CAPTURE_WINDOW_RECOVER_FROM_HIDDEN：屏幕采集窗口从隐藏状态恢复。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_EVENT_TYPE_SCREEN_CAPTURE_STOPPED_BY_USER：屏幕采集被用户停止。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_EVENT_TYPE_SCREEN_CAPTURE_SYSTEM_INTERNAL_ERROR：屏幕采集过程中发生系统内部错误。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideostatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onlocalvideostatechanged",
      children: "onLocalVideoStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "本地视频流状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideostatechanged__prototype"
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
              children: " onLocalVideoStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType source, "
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
      id: "callback_irtcengineeventhandler_onlocalvideostatechanged__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以通过该回调及时了解本地视频流的状态变化，并根据变化原因采取相应措施，以更好地管理和排查视频流相关问题。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请注意，视频帧重复检测仅适用于分辨率大于 200 × 200、帧率大于等于 10 fps 且码率小于 20 Kbps 的视频帧。 通常情况下，如果视频采集出现错误，可以通过该回调中的 ", _jsx(_components.code, {
            children: "reason"
          }), " 参数排查问题。但在某些设备上，当采集出现问题（如卡顿）时，Android 系统不会抛出任何错误回调，因此 SDK 无法上报本地视频状态变化的原因。此时，你可以通过以下方式判断是否未采集到视频帧：该回调上报 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " 或 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_ENCODING"
          }), "，且 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostats",
            children: "onLocalVideoStats"
          }), " 回调中的 ", _jsx(_components.code, {
            children: "captureFrameRate"
          }), " 为 0。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideostatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-3",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在以下情况下被触发，状态为 ", _jsx(_components.code, {
        children: "LOCAL_VIDEO_STREAM_STATE_FAILED"
      }), "， ", _jsx(_components.code, {
        children: "reason"
      }), " 为 ", _jsx(_components.code, {
        children: "LOCAL_VIDEO_STREAM_REASON_CAPTURE_FAILURE"
      }), "："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Android 9 及以上版本中，应用在后台运行一段时间后，系统会自动收回摄像头权限。"
      }), `
`, _jsx(_components.li, {
        children: "Android 6 及以上版本中，摄像头被第三方应用占用一段时间后释放，SDK 会触发该回调并上报 onLocalVideoStateChanged 回调， state 为 LOCAL_VIDEO_STREAM_STATE_CAPTURING， reason 为 LOCAL_VIDEO_STREAM_REASON_OK。"
      }), `
`, _jsx(_components.li, {
        children: "摄像头正常启动，但连续四秒未输出视频帧。"
      }), `
`, _jsx(_components.li, {
        children: "当摄像头输出采集的视频帧时，若 SDK 检测到连续 15 帧重复帧，会触发该回调， state 为 LOCAL_VIDEO_STREAM_STATE_CAPTURING， reason 为 LOCAL_VIDEO_STREAM_REASON_CAPTURE_FAILURE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideostatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "source-3",
      children: _jsx(_components.code, {
        children: "source"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源的类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "state",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_STATE_STOPPED (0)：本地视频处于初始状态。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING (1)：本地视频采集设备启动成功。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_STATE_ENCODING (2)：首帧视频编码成功。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_STATE_FAILED (3)：本地视频启动失败。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "reason",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_REASON_OK (0)：本地视频状态正常。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_REASON_FAILURE (1)：本地视频失败，未指定原因。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_REASON_DEVICE_BUSY (3)：本地视频采集设备被占用。提示用户检查摄像头是否被其他应用占用，或尝试重新加入频道。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_REASON_CAPTURE_FAILURE (4)：本地视频采集失败。提示用户检查视频采集设备是否正常工作，摄像头是否被其他应用占用，或尝试重新加入频道。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_REASON_CODEC_NOT_SUPPORT (5)：本地视频编码失败。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_REASON_DEVICE_NOT_FOUND (8)：未找到本地视频采集设备。提示用户检查摄像头是否正确连接或正常工作，然后重新加入频道。"
      }), `
`, _jsxs(_components.li, {
        children: ["LOCAL_VIDEO_STREAM_REASON_DEVICE_INTERRUPT (14)：视频采集中断。可能原因包括：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "摄像头被其他应用占用。提示用户检查摄像头是否被其他应用占用。"
          }), `
`, _jsx(_components.li, {
            children: "设备被锁屏，或当前应用被切换到后台。你可以使用前台服务通知操作系统，确保应用切换到后台后仍能采集视频。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_REASON_DEVICE_FATAL_ERROR (15)：视频采集设备出现错误。提示用户关闭并重启摄像头以恢复功能。如果该操作无法解决问题，请检查摄像头是否存在硬件故障。"
      }), `
`, _jsx(_components.li, {
        children: "LOCAL_VIDEO_STREAM_REASON_SCREEN_CAPTURE_FAILURE (21)：当前采集的窗口无数据。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideostats"
    }), `
`, _jsx(_components.h2, {
      id: "onlocalvideostats",
      children: "onLocalVideoStats"
    }), `
`, _jsx(_components.p, {
      children: "本地视频流统计信息回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideostats__prototype"
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
              children: " onLocalVideoStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType source, LocalVideoStats stats) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideostats__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该回调每两秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideostats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-4",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调每两秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onlocalvideostats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "source-4",
      children: _jsx(_components.code, {
        children: "source"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "stats",
      children: _jsx(_components.code, {
        children: "stats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地视频流的统计信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localvideostats",
        children: "LocalVideoStats"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-16",
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
      id: "callback_irtcengineeventhandler_onremotevideostatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onremotevideostatechanged",
      children: "onRemoteVideoStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "远端视频状态发生改变回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideostatechanged__prototype"
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
              children: " onRemoteVideoStateChanged"
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
              children: " elapsed)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideostatechanged__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "当频道中的用户数（在通信频道场景中）或主播数（在直播频道中）超过 32 时，该回调可能无法正常工作。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideostatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-5",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在远端视频状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideostatechanged__parameters"
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
      children: "发生视频状态变化的远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "state-1",
      children: _jsx(_components.code, {
        children: "state"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端视频的状态："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_STOPPED (0)：远端视频处于初始状态。该状态在 REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED (3)、 REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED (5) 或 REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE (7) 的情况下报告。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_STARTING (1)：已接收到第一帧远端视频包。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_DECODING (2)：远端视频流解码并正常播放。该状态在 REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY (2)、 REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED (4)、 REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED (6) 或 REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY (9) 的情况下报告。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_FROZEN (3)：远端视频卡顿。该状态在 REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION (1) 或 REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK (8) 的情况下报告。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_FAILED (4)：远端视频启动失败。该状态在 REMOTE_VIDEO_STATE_REASON_INTERNAL (0) 的情况下由 SDK 报告。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "reason-1",
      children: _jsx(_components.code, {
        children: "reason"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端视频状态变化的原因："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_INTERNAL (0)：内部原因。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION (1)：网络拥塞。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY (2)：网络恢复。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED (3)：本地用户停止接收远端视频流或关闭视频模块。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED (4)：本地用户恢复接收远端视频流或开启视频模块。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED (5)：远端用户停止发送视频流或关闭视频模块。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED (6)：远端用户恢复发送视频流或开启视频模块。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE (7)：远端用户离开频道。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK (8)：由于网络条件差，远端媒体流降级为纯音频流。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY (9)：网络条件改善后，远端媒体流从音频流恢复为视频流。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_REASON_CODEC_NOT_SUPPORT (13)：本地视频解码器不支持解码远端视频流。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "elapsed-4",
      children: _jsx(_components.code, {
        children: "elapsed"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从本地用户调用 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 方法到 SDK 触发该回调的时间（毫秒）。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-17",
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
      id: "callback_irtcengineeventhandler_onremotevideostats"
    }), `
`, _jsx(_components.h2, {
      id: "onremotevideostats",
      children: "onRemoteVideoStats"
    }), `
`, _jsx(_components.p, {
      children: "报告每个远端用户发送的视频流的统计信息回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideostats__prototype"
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
              children: " onRemoteVideoStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RemoteVideoStats stats) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideostats__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "SDK 每两秒为每个远端用户触发一次该回调。如果频道中有多个用户或主播发送视频流，SDK 会相应地多次触发该回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideostats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-6",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 每两秒收集到远端用户的视频流统计信息时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideostats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "stats-1",
      children: _jsx(_components.code, {
        children: "stats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["远端视频流的统计信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remotevideostats",
        children: "RemoteVideoStats"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-18",
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
      id: "callback_irtcengineeventhandler_onremotevideotransportstats"
    }), `
`, _jsx(_components.h2, {
      id: "onremotevideotransportstats",
      children: "onRemoteVideoTransportStats"
    }), `
`, _jsx(_components.p, {
      children: "远端视频流传输层统计信息回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideotransportstats__prototype"
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
              children: " onRemoteVideoTransportStats"
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
              children: " delay, "
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
              children: " lost, "
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
              children: " rxKBitRate)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideotransportstats__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostats",
        children: "onRemoteVideoStats"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "该回调上报传输层的统计信息，例如丢包率和网络时延。该回调在通话过程中，当本地用户接收到远端用户或主播发送的视频包时，每 2 秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideotransportstats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-7",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在通话过程中，当本地用户接收到远端用户或主播发送的视频包时，每 2 秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onremotevideotransportstats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
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
      id: "delay",
      children: _jsx(_components.code, {
        children: "delay"
      })
    }), `
`, _jsx(_components.p, {
      children: "从发送端到接收端的网络时延（毫秒）。"
    }), `
`, _jsx(_components.h4, {
      id: "lost",
      children: _jsx(_components.code, {
        children: "lost"
      })
    }), `
`, _jsx(_components.p, {
      children: "从远端用户发送的视频包的丢包率（%）。"
    }), `
`, _jsx(_components.h4, {
      id: "rxkbitrate",
      children: _jsx(_components.code, {
        children: "rxKBitRate"
      })
    }), `
`, _jsx(_components.p, {
      children: "接收视频的码率（Kbps）。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-19",
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
      id: "callback_irtcengineeventhandler_onuserenablelocalvideo"
    }), `
`, _jsx(_components.h2, {
      id: "onuserenablelocalvideo",
      children: "onUserEnableLocalVideo"
    }), `
`, _jsx(_components.p, {
      children: "指定远端用户启用或关闭本地视频采集功能时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserenablelocalvideo__prototype"
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
              children: " onUserEnableLocalVideo"
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
              children: " enabled)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserenablelocalvideo__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-2",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该回调已废弃，建议使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onremotevideostatechanged",
        children: "onRemoteVideoStateChanged"
      }), " 回调替代，并结合以下参数使用："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_STOPPED(0) 和 REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED(5)。"
      }), `
`, _jsx(_components.li, {
        children: "REMOTE_VIDEO_STATE_DECODING(2) 和 REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED(6)。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserenablelocalvideo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-8",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在远端用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablelocalvideo",
        children: "enableLocalVideo"
      }), " 启用或关闭本地视频采集功能时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserenablelocalvideo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
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
      id: "enabled-1",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "指定远端用户是否启用本地视频采集功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用视频模块，频道内其他用户可以看到该远端用户的视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭视频模块，频道内其他用户无法接收该远端用户的视频流，但该远端用户仍可接收其他用户的视频流。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserenablevideo"
    }), `
`, _jsx(_components.h2, {
      id: "onuserenablevideo",
      children: "onUserEnableVideo"
    }), `
`, _jsx(_components.p, {
      children: "远端用户启用或关闭视频模块的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserenablevideo__prototype"
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
              children: " onUserEnableVideo"
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
              children: " enabled)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserenablevideo__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在远端用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_disablevideo",
        children: "disableVideo"
      }), " 方法时触发。关闭视频模块后，用户只能进行语音通话，无法发送或接收任何视频。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserenablevideo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-9",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在远端用户启用或关闭视频模块时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onuserenablevideo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-5",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-2",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用视频模块："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用视频模块。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭视频模块。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onusermutevideo"
    }), `
`, _jsx(_components.h2, {
      id: "onusermutevideo",
      children: "onUserMuteVideo"
    }), `
`, _jsx(_components.p, {
      children: "远端视频状态发生改变回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onusermutevideo__prototype"
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
              children: " onUserMuteVideo"
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
              children: " muted)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onusermutevideo__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当远端用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalvideostream",
        children: "muteLocalVideoStream"
      }), " 时，SDK 会触发该回调，向本地用户报告远端用户发布的视频流状态。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "当频道中通信场景下的用户数或直播场景下的主播数超过 32 时，该回调可能不准确。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onusermutevideo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-10",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在远端用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/publish-and-subscribe#api_irtcengine_mutelocalvideostream",
        children: "muteLocalVideoStream"
      }), " 停止或恢复发布视频流时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onusermutevideo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-6",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "muted",
      children: _jsx(_components.code, {
        children: "muted"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户是否停止发布视频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：远端用户停止发布视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：远端用户恢复发布视频流。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler",
          children: "IRtcEngineEventHandler"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideopublishstatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onvideopublishstatechanged",
      children: "onVideoPublishStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "视频发布状态发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideopublishstatechanged__prototype"
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
              children: " onVideoPublishStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType source, String channel, "
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
      id: "callback_irtcengineeventhandler_onvideopublishstatechanged__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideopublishstatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-19",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "source-5",
      children: _jsx(_components.code, {
        children: "source"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源的类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
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
      children: "之前的视频发布状态："
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
      children: "当前的视频发布状态："
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
      children: "从上一个状态到当前状态所经历的时间（毫秒）。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-23",
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
      id: "callback_irtcengineeventhandler_onvideosizechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onvideosizechanged",
      children: "onVideoSizeChanged"
    }), `
`, _jsx(_components.p, {
      children: "指定用户的视频尺寸或旋转信息发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideosizechanged__prototype"
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
              children: " onVideoSizeChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType source, "
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
              children: " width, "
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
              children: " height, "
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
              children: " rotation)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideosizechanged__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideosizechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-11",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在指定用户的视频尺寸或旋转角度发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideosizechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-20",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "source-6",
      children: _jsx(_components.code, {
        children: "source"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "uid-7",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["发生视频尺寸或旋转变化的用户 ID。对于本地用户， ", _jsx(_components.code, {
        children: "uid"
      }), " 为 0，表示本地用户的视频预览。"]
    }), `
`, _jsx(_components.h4, {
      id: "width-3",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流的宽度（单位为像素）。"
    }), `
`, _jsx(_components.h4, {
      id: "height-3",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频流的高度（单位为像素）。"
    }), `
`, _jsx(_components.h4, {
      id: "rotation",
      children: _jsx(_components.code, {
        children: "rotation"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频的旋转角度，取值范围为 [0, 360)。"
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
      id: "callback_irtcengineeventhandler_onvideostopped"
    }), `
`, _jsx(_components.h2, {
      id: "onvideostopped",
      children: "onVideoStopped"
    }), `
`, _jsx(_components.p, {
      children: "视频停止播放时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideostopped__prototype"
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
              children: " onVideoStopped"
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
      id: "callback_irtcengineeventhandler_onvideostopped__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-3",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该方法已废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
        children: "onLocalVideoStateChanged"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "你可以在该回调中更改视图的配置，例如在视图中显示其他图片。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideostopped__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-12",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在视频停止播放时被触发。"
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
